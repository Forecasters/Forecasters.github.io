!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = e.length
          , n = Z.type(e);
        return "function" !== n && !Z.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    function r(e, t, n) {
        if (Z.isFunction(t))
            return Z.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return Z.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (ae.test(t))
                return Z.filter(t, e, n);
            t = Z.filter(t, e)
        }
        return Z.grep(e, function(e) {
            return U.call(t, e) >= 0 !== n
        })
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function o(e) {
        var t = he[e] = {};
        return Z.each(e.match(de) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function s() {
        J.removeEventListener("DOMContentLoaded", s, !1),
        e.removeEventListener("load", s, !1),
        Z.ready()
    }
    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
        this.expando = Z.expando + a.uid++
    }
    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(be, "-$1").toLowerCase(),
            n = e.getAttribute(r),
            "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : xe.test(n) ? Z.parseJSON(n) : n)
                } catch (i) {}
                ye.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function l() {
        return !0
    }
    function c() {
        return !1
    }
    function f() {
        try {
            return J.activeElement
        } catch (e) {}
    }
    function p(e, t) {
        return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function d(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function h(e) {
        var t = Pe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function g(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            ve.set(e[n], "globalEval", !t || ve.get(t[n], "globalEval"))
    }
    function m(e, t) {
        var n, r, i, o, s, a, u, l;
        if (1 === t.nodeType) {
            if (ve.hasData(e) && (o = ve.access(e),
            s = ve.set(t, o),
            l = o.events)) {
                delete s.handle,
                s.events = {};
                for (i in l)
                    for (n = 0,
                    r = l[i].length; n < r; n++)
                        Z.event.add(t, i, l[i][n])
            }
            ye.hasData(e) && (a = ye.access(e),
            u = Z.extend({}, a),
            ye.set(t, u))
        }
    }
    function v(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
    }
    function y(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ne.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function x(t, n) {
        var r, i = Z(n.createElement(t)).appendTo(n.body), o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
        return i.detach(),
        o
    }
    function b(e) {
        var t = J
          , n = $e[e];
        return n || (n = x(e, t),
        "none" !== n && n || (We = (We || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = We[0].contentDocument,
        t.write(),
        t.close(),
        n = x(e, t),
        We.detach()),
        $e[e] = n),
        n
    }
    function w(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || _e(e),
        n && (s = n.getPropertyValue(t) || n[t]),
        n && ("" !== s || Z.contains(e.ownerDocument, e) || (s = Z.style(e, t)),
        Be.test(s) && Ie.test(t) && (r = a.width,
        i = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = r,
        a.minWidth = i,
        a.maxWidth = o)),
        void 0 !== s ? s + "" : s
    }
    function T(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function C(e, t) {
        if (t in e)
            return t;
        for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Ge.length; i--; )
            if (t = Ge[i] + n,
            t in e)
                return t;
        return r
    }
    function N(e, t, n) {
        var r = Xe.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2)
            "margin" === n && (s += Z.css(e, n + Te[o], !0, i)),
            r ? ("content" === n && (s -= Z.css(e, "padding" + Te[o], !0, i)),
            "margin" !== n && (s -= Z.css(e, "border" + Te[o] + "Width", !0, i))) : (s += Z.css(e, "padding" + Te[o], !0, i),
            "padding" !== n && (s += Z.css(e, "border" + Te[o] + "Width", !0, i)));
        return s
    }
    function E(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = _e(e)
          , s = "border-box" === Z.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = w(e, t, o),
            (i < 0 || null == i) && (i = e.style[t]),
            Be.test(i))
                return i;
            r = s && (Q.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }
    function S(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)
            r = e[s],
            r.style && (o[s] = ve.get(r, "olddisplay"),
            n = r.style.display,
            t ? (o[s] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && Ce(r) && (o[s] = ve.access(r, "olddisplay", b(r.nodeName)))) : (i = Ce(r),
            "none" === n && i || ve.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (s = 0; s < a; s++)
            r = e[s],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }
    function D(e, t, n, r, i) {
        return new D.prototype.init(e,t,n,r,i)
    }
    function j() {
        return setTimeout(function() {
            Qe = void 0
        }),
        Qe = Z.now()
    }
    function A(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            n = Te[r],
            i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function L(e, t, n) {
        for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function q(e, t, n) {
        var r, i, o, s, a, u, l, c, f = this, p = {}, d = e.style, h = e.nodeType && Ce(e), g = ve.get(e, "fxshow");
        n.queue || (a = Z._queueHooks(e, "fx"),
        null == a.unqueued && (a.unqueued = 0,
        u = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || u()
        }
        ),
        a.unqueued++,
        f.always(function() {
            f.always(function() {
                a.unqueued--,
                Z.queue(e, "fx").length || a.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
        l = Z.css(e, "display"),
        c = "none" === l ? ve.get(e, "olddisplay") || b(e.nodeName) : l,
        "inline" === c && "none" === Z.css(e, "float") && (d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden",
        f.always(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r],
            Ke.exec(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (h ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r])
                        continue;
                    h = !0
                }
                p[r] = g && g[r] || Z.style(e, r)
            } else
                l = void 0;
        if (Z.isEmptyObject(p))
            "inline" === ("none" === l ? b(e.nodeName) : l) && (d.display = l);
        else {
            g ? "hidden"in g && (h = g.hidden) : g = ve.access(e, "fxshow", {}),
            o && (g.hidden = !h),
            h ? Z(e).show() : f.done(function() {
                Z(e).hide()
            }),
            f.done(function() {
                var t;
                ve.remove(e, "fxshow");
                for (t in p)
                    Z.style(e, t, p[t])
            });
            for (r in p)
                s = L(h ? g[r] : 0, r, f),
                r in g || (g[r] = s.start,
                h && (s.end = s.start,
                s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function H(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = Z.camelCase(n),
            i = t[r],
            o = e[n],
            Z.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            s = Z.cssHooks[r],
            s && "expand"in s) {
                o = s.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function O(e, t, n) {
        var r, i, o = 0, s = tt.length, a = Z.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (i)
                return !1;
            for (var t = Qe || j(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; s < u; s++)
                l.tweens[s].run(o);
            return a.notifyWith(e, [l, o, n]),
            o < 1 && u ? n : (a.resolveWith(e, [l]),
            !1)
        }, l = a.promise({
            elem: e,
            props: Z.extend({}, t),
            opts: Z.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Qe || j(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = Z.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? l.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; n < r; n++)
                    l.tweens[n].run(1);
                return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]),
                this
            }
        }), c = l.props;
        for (H(c, l.opts.specialEasing); o < s; o++)
            if (r = tt[o].call(l, e, c, l.opts))
                return r;
        return Z.map(c, L, l),
        Z.isFunction(l.opts.start) && l.opts.start.call(e, l),
        Z.fx.timer(Z.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })),
        l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function F(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(de) || [];
            if (Z.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function P(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0,
            Z.each(e[a] || [], function(e, a) {
                var l = a(t, n, r);
                return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                i(l),
                !1)
            }),
            u
        }
        var o = {}
          , s = e === xt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function R(e, t) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Z.extend(!0, e, r),
        e
    }
    function M(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o)
            return o !== u[0] && u.unshift(o),
            n[o]
    }
    function W(e, t, n, r) {
        var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters)
                l[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            u = o,
            o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (s = l[u + " " + o] || l["* " + o],
                    !s)
                        for (i in l)
                            if (a = i.split(" "),
                            a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0],
                                c.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && e["throws"])
                            t = s(t);
                        else
                            try {
                                t = s(t)
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: s ? f : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function $(e, t, n, r) {
        var i;
        if (Z.isArray(t))
            Z.each(t, function(t, i) {
                n || Nt.test(e) ? r(e, i) : $(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== Z.type(t))
            r(e, t);
        else
            for (i in t)
                $(e + "[" + i + "]", t[i], n, r)
    }
    function I(e) {
        return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var B = []
      , _ = B.slice
      , z = B.concat
      , X = B.push
      , U = B.indexOf
      , V = {}
      , Y = V.toString
      , G = V.hasOwnProperty
      , Q = {}
      , J = e.document
      , K = "2.1.3"
      , Z = function(e, t) {
        return new Z.fn.init(e,t)
    }
      , ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , te = /^-ms-/
      , ne = /-([\da-z])/gi
      , re = function(e, t) {
        return t.toUpperCase()
    };
    Z.fn = Z.prototype = {
        jquery: K,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return _.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : _.call(this)
        },
        pushStack: function(e) {
            var t = Z.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return Z.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(Z.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(_.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: X,
        sort: B.sort,
        splice: B.splice
    },
    Z.extend = Z.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof s && (l = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || Z.isFunction(s) || (s = {}),
        a === u && (s = this,
        a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = s[t],
                    r = e[t],
                    s !== r && (l && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1,
                    o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {},
                    s[t] = Z.extend(l, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }
    ,
    Z.extend({
        expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Z.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
        },
        isPlainObject: function(e) {
            return "object" === Z.type(e) && !e.nodeType && !Z.isWindow(e) && !(e.constructor && !G.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? V[Y.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = Z.trim(e),
            e && (1 === e.indexOf("use strict") ? (t = J.createElement("script"),
            t.text = e,
            J.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, re)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, r) {
            var i, o = 0, s = e.length, a = n(e);
            if (r) {
                if (a)
                    for (; o < s && (i = t.apply(e[o], r),
                    i !== !1); o++)
                        ;
                else
                    for (o in e)
                        if (i = t.apply(e[o], r),
                        i === !1)
                            break
            } else if (a)
                for (; o < s && (i = t.call(e[o], o, e[o]),
                i !== !1); o++)
                    ;
            else
                for (o in e)
                    if (i = t.call(e[o], o, e[o]),
                    i === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : X.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : U.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; o < s; o++)
                r = !t(e[o], o),
                r !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o = 0, s = e.length, a = n(e), u = [];
            if (a)
                for (; o < s; o++)
                    i = t(e[o], o, r),
                    null != i && u.push(i);
            else
                for (o in e)
                    i = t(e[o], o, r),
                    null != i && u.push(i);
            return z.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            Z.isFunction(e))
                return r = _.call(arguments, 2),
                i = function() {
                    return e.apply(t || this, r.concat(_.call(arguments)))
                }
                ,
                i.guid = e.guid = e.guid || Z.guid++,
                i
        },
        now: Date.now,
        support: Q
    }),
    Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        V["[object " + t + "]"] = t.toLowerCase()
    });
    var ie = function(e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, l, f, d, h, g;
            if ((t ? t.ownerDocument || t : $) !== q && L(t),
            t = t || q,
            n = n || [],
            a = t.nodeType,
            "string" != typeof e || !e || 1 !== a && 9 !== a && 11 !== a)
                return n;
            if (!r && O) {
                if (11 !== a && (i = ye.exec(e)))
                    if (s = i[1]) {
                        if (9 === a) {
                            if (o = t.getElementById(s),
                            !o || !o.parentNode)
                                return n;
                            if (o.id === s)
                                return n.push(o),
                                n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && M(t, o) && o.id === s)
                            return n.push(o),
                            n
                    } else {
                        if (i[2])
                            return K.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((s = i[3]) && w.getElementsByClassName)
                            return K.apply(n, t.getElementsByClassName(s)),
                            n
                    }
                if (w.qsa && (!F || !F.test(e))) {
                    if (d = f = W,
                    h = t,
                    g = 1 !== a && e,
                    1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (l = k(e),
                        (f = t.getAttribute("id")) ? d = f.replace(be, "\\$&") : t.setAttribute("id", d),
                        d = "[id='" + d + "'] ",
                        u = l.length; u--; )
                            l[u] = d + p(l[u]);
                        h = xe.test(e) && c(t.parentNode) || t,
                        g = l.join(",")
                    }
                    if (g)
                        try {
                            return K.apply(n, h.querySelectorAll(g)),
                            n
                        } catch (m) {} finally {
                            f || t.removeAttribute("id")
                        }
                }
            }
            return S(e.replace(ue, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[W] = !0,
            e
        }
        function i(e) {
            var t = q.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = e.length; r--; )
                T.attrHandle[n[r]] = t
        }
        function s(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function l(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--; )
                        n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function f() {}
        function p(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function d(e, t, n) {
            var r = t.dir
              , i = n && "parentNode" === r
              , o = B++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            }
            : function(t, n, s) {
                var a, u, l = [I, o];
                if (s) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || i) && e(t, n, s))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i) {
                            if (u = t[W] || (t[W] = {}),
                            (a = u[r]) && a[0] === I && a[1] === o)
                                return l[2] = a[2];
                            if (u[r] = l,
                            l[2] = e(t, n, s))
                                return !0
                        }
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function g(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++)
                t(e, n[i], r);
            return r
        }
        function m(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
                (o = e[a]) && (n && !n(o, r, i) || (s.push(o),
                l && t.push(a)));
            return s
        }
        function v(e, t, n, i, o, s) {
            return i && !i[W] && (i = v(i)),
            o && !o[W] && (o = v(o, s)),
            r(function(r, s, a, u) {
                var l, c, f, p = [], d = [], h = s.length, v = r || g(t || "*", a.nodeType ? [a] : a, []), y = !e || !r && t ? v : m(v, p, e, a, u), x = n ? o || (r ? e : h || i) ? [] : s : y;
                if (n && n(y, x, a, u),
                i)
                    for (l = m(x, d),
                    i(l, [], a, u),
                    c = l.length; c--; )
                        (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [],
                            c = x.length; c--; )
                                (f = x[c]) && l.push(y[c] = f);
                            o(null, x = [], l, u)
                        }
                        for (c = x.length; c--; )
                            (f = x[c]) && (l = o ? ee(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                    }
                } else
                    x = m(x === s ? x.splice(h, x.length) : x),
                    o ? o(null, s, x, u) : K.apply(s, x)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function(e) {
                return e === t
            }, s, !0), l = d(function(e) {
                return ee(t, e) > -1
            }, s, !0), c = [function(e, n, r) {
                var i = !o && (r || n !== D) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null,
                i
            }
            ]; a < i; a++)
                if (n = T.relative[e[a].type])
                    c = [d(h(c), n)];
                else {
                    if (n = T.filter[e[a].type].apply(null, e[a].matches),
                    n[W]) {
                        for (r = ++a; r < i && !T.relative[e[r].type]; r++)
                            ;
                        return v(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, a < r && y(e.slice(a, r)), r < i && y(e = e.slice(r)), r < i && p(e))
                    }
                    c.push(n)
                }
            return h(c)
        }
        function x(e, n) {
            var i = n.length > 0
              , o = e.length > 0
              , s = function(r, s, a, u, l) {
                var c, f, p, d = 0, h = "0", g = r && [], v = [], y = D, x = r || o && T.find.TAG("*", l), b = I += null == y ? 1 : Math.random() || .1, w = x.length;
                for (l && (D = s !== q && s); h !== w && null != (c = x[h]); h++) {
                    if (o && c) {
                        for (f = 0; p = e[f++]; )
                            if (p(c, s, a)) {
                                u.push(c);
                                break
                            }
                        l && (I = b)
                    }
                    i && ((c = !p && c) && d--,
                    r && g.push(c))
                }
                if (d += h,
                i && h !== d) {
                    for (f = 0; p = n[f++]; )
                        p(g, v, s, a);
                    if (r) {
                        if (d > 0)
                            for (; h--; )
                                g[h] || v[h] || (v[h] = Q.call(u));
                        v = m(v)
                    }
                    K.apply(u, v),
                    l && !r && v.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                }
                return l && (I = b,
                D = y),
                g
            };
            return i ? r(s) : s
        }
        var b, w, T, C, N, k, E, S, D, j, A, L, q, H, O, F, P, R, M, W = "sizzle" + 1 * new Date, $ = e.document, I = 0, B = 0, _ = n(), z = n(), X = n(), U = function(e, t) {
            return e === t && (A = !0),
            0
        }, V = 1 << 31, Y = {}.hasOwnProperty, G = [], Q = G.pop, J = G.push, K = G.push, Z = G.slice, ee = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = re.replace("w", "w#"), oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]", se = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)", ae = new RegExp(ne + "+","g"), ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), le = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), pe = new RegExp(se), de = new RegExp("^" + ie + "$"), he = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + oe),
            PSEUDO: new RegExp("^" + se),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, ge = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, xe = /[+~]/, be = /'|\\/g, we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), Te = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, Ce = function() {
            L()
        };
        try {
            K.apply(G = Z.call($.childNodes), $.childNodes),
            G[$.childNodes.length].nodeType
        } catch (Ne) {
            K = {
                apply: G.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
        N = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        L = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : $;
            return r !== q && 9 === r.nodeType && r.documentElement ? (q = r,
            H = r.documentElement,
            n = r.defaultView,
            n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)),
            O = !N(r),
            w.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            w.getElementsByTagName = i(function(e) {
                return e.appendChild(r.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            w.getElementsByClassName = ve.test(r.getElementsByClassName),
            w.getById = i(function(e) {
                return H.appendChild(e).id = W,
                !r.getElementsByName || !r.getElementsByName(W).length
            }),
            w.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            T.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete T.find.ID,
            T.filter.ID = function(e) {
                var t = e.replace(we, Te);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            T.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            T.find.CLASS = w.getElementsByClassName && function(e, t) {
                if (O)
                    return t.getElementsByClassName(e)
            }
            ,
            P = [],
            F = [],
            (w.qsa = ve.test(r.querySelectorAll)) && (i(function(e) {
                H.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\f]' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + W + "-]").length || F.push("~="),
                e.querySelectorAll(":checked").length || F.push(":checked"),
                e.querySelectorAll("a#" + W + "+*").length || F.push(".#.+[+~]")
            }),
            i(function(e) {
                var t = r.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                F.push(",.*:")
            })),
            (w.matchesSelector = ve.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = R.call(e, "div"),
                R.call(e, "[s!='']:x"),
                P.push("!=", se)
            }),
            F = F.length && new RegExp(F.join("|")),
            P = P.length && new RegExp(P.join("|")),
            t = ve.test(H.compareDocumentPosition),
            M = t || ve.test(H.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            U = t ? function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === $ && M($, e) ? -1 : t === r || t.ownerDocument === $ && M($, t) ? 1 : j ? ee(j, e) - ee(j, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n, i = 0, o = e.parentNode, a = t.parentNode, u = [e], l = [t];
                if (!o || !a)
                    return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : j ? ee(j, e) - ee(j, t) : 0;
                if (o === a)
                    return s(e, t);
                for (n = e; n = n.parentNode; )
                    u.unshift(n);
                for (n = t; n = n.parentNode; )
                    l.unshift(n);
                for (; u[i] === l[i]; )
                    i++;
                return i ? s(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0
            }
            ,
            r) : q
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== q && L(e),
            n = n.replace(fe, "='$1']"),
            w.matchesSelector && O && (!P || !P.test(n)) && (!F || !F.test(n)))
                try {
                    var r = R.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (i) {}
            return t(n, q, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== q && L(e),
            M(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== q && L(e);
            var n = T.attrHandle[t.toLowerCase()]
              , r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : w.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (A = !w.detectDuplicates,
            j = !w.sortStable && e.slice(0),
            e.sort(U),
            A) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return j = null,
            e
        }
        ,
        C = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += C(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += C(t);
            return n
        }
        ,
        T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, Te),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, Te).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = _[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && _(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "",
                        "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, u) {
                        var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling", m = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !u && !a;
                        if (m) {
                            if (o) {
                                for (; g; ) {
                                    for (f = t; f = f[g]; )
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                            return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild],
                            s && y) {
                                for (c = m[W] || (m[W] = {}),
                                l = c[e] || [],
                                d = l[0] === I && l[1],
                                p = l[0] === I && l[2],
                                f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop(); )
                                    if (1 === f.nodeType && ++p && f === t) {
                                        c[e] = [I, d, p];
                                        break
                                    }
                            } else if (y && (l = (t[W] || (t[W] = {}))[e]) && l[0] === I)
                                p = l[1];
                            else
                                for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[W] || (f[W] = {}))[e] = [I, p]),
                                f !== t)); )
                                    ;
                            return p -= i,
                            p === r || p % r === 0 && p / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                    T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), s = i.length; s--; )
                            r = ee(e, i[s]),
                            e[r] = !(t[r] = i[s])
                    }) : function(e) {
                        return o(e, 0, i)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = []
                      , n = []
                      , i = E(e.replace(ue, "$1"));
                    return i[W] ? r(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--; )
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(we, Te),
                    function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(we, Te).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === H
                },
                focus: function(e) {
                    return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !T.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        },
        T.pseudos.nth = T.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            T.pseudos[b] = a(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            T.pseudos[b] = u(b);
        return f.prototype = T.filters = T.pseudos,
        T.setFilters = new f,
        k = t.tokenize = function(e, n) {
            var r, i, o, s, a, u, l, c = z[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (a = e,
            u = [],
            l = T.preFilter; a; ) {
                r && !(i = le.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                u.push(o = [])),
                r = !1,
                (i = ce.exec(a)) && (r = i.shift(),
                o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }),
                a = a.slice(r.length));
                for (s in T.filter)
                    !(i = he[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: s,
                        matches: i
                    }),
                    a = a.slice(r.length));
                if (!r)
                    break
            }
            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
        }
        ,
        E = t.compile = function(e, t) {
            var n, r = [], i = [], o = X[e + " "];
            if (!o) {
                for (t || (t = k(e)),
                n = t.length; n--; )
                    o = y(t[n]),
                    o[W] ? r.push(o) : i.push(o);
                o = X(e, x(i, r)),
                o.selector = e
            }
            return o
        }
        ,
        S = t.select = function(e, t, n, r) {
            var i, o, s, a, u, l = "function" == typeof e && e, f = !r && k(e = l.selector || e);
            if (n = n || [],
            1 === f.length) {
                if (o = f[0] = f[0].slice(0),
                o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && O && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(we, Te), t) || [])[0],
                    !t)
                        return n;
                    l && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
                !T.relative[a = s.type]); )
                    if ((u = T.find[a]) && (r = u(s.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        e = r.length && p(o),
                        !e)
                            return K.apply(n, r),
                            n;
                        break
                    }
            }
            return (l || E(e, f))(r, t, !O, n, xe.test(e) && c(t.parentNode) || t),
            n
        }
        ,
        w.sortStable = W.split("").sort(U).join("") === W,
        w.detectDuplicates = !!A,
        L(),
        w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(q.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var r;
            if (!n)
                return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        t
    }(e);
    Z.find = ie,
    Z.expr = ie.selectors,
    Z.expr[":"] = Z.expr.pseudos,
    Z.unique = ie.uniqueSort,
    Z.text = ie.getText,
    Z.isXMLDoc = ie.isXML,
    Z.contains = ie.contains;
    var oe = Z.expr.match.needsContext
      , se = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , ae = /^.[^:#\[\.,]*$/;
    Z.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    Z.fn.extend({
        find: function(e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e)
                return this.pushStack(Z(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (Z.contains(i[t], this))
                            return !0
                }));
            for (t = 0; t < n; t++)
                Z.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Z.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + e : e,
            r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
        }
    });
    var ue, le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ce = Z.fn.init = function(e, t) {
        var n, r;
        if (!e)
            return this;
        if ("string" == typeof e) {
            if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e),
            !n || !n[1] && t)
                return !t || t.jquery ? (t || ue).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof Z ? t[0] : t,
                Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : J, !0)),
                se.test(n[1]) && Z.isPlainObject(t))
                    for (n in t)
                        Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return r = J.getElementById(n[2]),
            r && r.parentNode && (this.length = 1,
            this[0] = r),
            this.context = J,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : Z.isFunction(e) ? "undefined" != typeof ue.ready ? ue.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        Z.makeArray(e, this))
    }
    ;
    ce.prototype = Z.fn,
    ue = Z(J);
    var fe = /^(?:parents|prev(?:Until|All))/
      , pe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    Z.extend({
        dir: function(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && Z(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    Z.fn.extend({
        has: function(e) {
            var t = Z(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (Z.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? Z.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? U.call(Z(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    Z.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return Z.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return Z.dir(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return Z.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return Z.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return Z.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return Z.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Z.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Z.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || Z.merge([], e.childNodes)
        }
    }, function(e, t) {
        Z.fn[e] = function(n, r) {
            var i = Z.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = Z.filter(r, i)),
            this.length > 1 && (pe[e] || Z.unique(i),
            fe.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var de = /\S+/g
      , he = {};
    Z.Callbacks = function(e) {
        e = "string" == typeof e ? he[e] || o(e) : Z.extend({}, e);
        var t, n, r, i, s, a, u = [], l = !e.once && [], c = function(o) {
            for (t = e.memory && o,
            n = !0,
            a = i || 0,
            i = 0,
            s = u.length,
            r = !0; u && a < s; a++)
                if (u[a].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
                    t = !1;
                    break
                }
            r = !1,
            u && (l ? l.length && c(l.shift()) : t ? u = [] : f.disable())
        }, f = {
            add: function() {
                if (u) {
                    var n = u.length;
                    !function o(t) {
                        Z.each(t, function(t, n) {
                            var r = Z.type(n);
                            "function" === r ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" !== r && o(n)
                        })
                    }(arguments),
                    r ? s = u.length : t && (i = n,
                    c(t))
                }
                return this
            },
            remove: function() {
                return u && Z.each(arguments, function(e, t) {
                    for (var n; (n = Z.inArray(t, u, n)) > -1; )
                        u.splice(n, 1),
                        r && (n <= s && s--,
                        n <= a && a--)
                }),
                this
            },
            has: function(e) {
                return e ? Z.inArray(e, u) > -1 : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                s = 0,
                this
            },
            disable: function() {
                return u = l = t = void 0,
                this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return l = void 0,
                t || f.disable(),
                this
            },
            locked: function() {
                return !l
            },
            fireWith: function(e, t) {
                return !u || n && !l || (t = t || [],
                t = [e, t.slice ? t.slice() : t],
                r ? l.push(t) : c(t)),
                this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!n
            }
        };
        return f
    }
    ,
    Z.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", Z.Callbacks("once memory"), "resolved"], ["reject", "fail", Z.Callbacks("once memory"), "rejected"], ["notify", "progress", Z.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return Z.Deferred(function(n) {
                        Z.each(t, function(t, o) {
                            var s = Z.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? Z.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            Z.each(t, function(e, o) {
                var s = o[2]
                  , a = o[3];
                r[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = s.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0, o = _.call(arguments), s = o.length, a = 1 !== s || e && Z.isFunction(e.promise) ? s : 0, u = 1 === a ? e : Z.Deferred(), l = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? _.call(arguments) : i,
                    r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                }
            };
            if (s > 1)
                for (t = new Array(s),
                n = new Array(s),
                r = new Array(s); i < s; i++)
                    o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o),
            u.promise()
        }
    });
    var ge;
    Z.fn.ready = function(e) {
        return Z.ready.promise().done(e),
        this
    }
    ,
    Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0,
            e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(J, [Z]),
            Z.fn.triggerHandler && (Z(J).triggerHandler("ready"),
            Z(J).off("ready"))))
        }
    }),
    Z.ready.promise = function(t) {
        return ge || (ge = Z.Deferred(),
        "complete" === J.readyState ? setTimeout(Z.ready) : (J.addEventListener("DOMContentLoaded", s, !1),
        e.addEventListener("load", s, !1))),
        ge.promise(t)
    }
    ,
    Z.ready.promise();
    var me = Z.access = function(e, t, n, r, i, o, s) {
        var a = 0
          , u = e.length
          , l = null == n;
        if ("object" === Z.type(n)) {
            i = !0;
            for (a in n)
                Z.access(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0,
        Z.isFunction(r) || (s = !0),
        l && (s ? (t.call(e, r),
        t = null) : (l = t,
        t = function(e, t, n) {
            return l.call(Z(e), n)
        }
        )),
        t))
            for (; a < u; a++)
                t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }
    ;
    Z.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    ,
    a.uid = 1,
    a.accepts = Z.acceptData,
    a.prototype = {
        key: function(e) {
            if (!a.accepts(e))
                return 0;
            var t = {}
              , n = e[this.expando];
            if (!n) {
                n = a.uid++;
                try {
                    t[this.expando] = {
                        value: n
                    },
                    Object.defineProperties(e, t)
                } catch (r) {
                    t[this.expando] = n,
                    Z.extend(e, t)
                }
            }
            return this.cache[n] || (this.cache[n] = {}),
            n
        },
        set: function(e, t, n) {
            var r, i = this.key(e), o = this.cache[i];
            if ("string" == typeof t)
                o[t] = n;
            else if (Z.isEmptyObject(o))
                Z.extend(this.cache[i], t);
            else
                for (r in t)
                    o[r] = t[r];
            return o
        },
        get: function(e, t) {
            var n = this.cache[this.key(e)];
            return void 0 === t ? n : n[t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t),
            void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r, i, o = this.key(e), s = this.cache[o];
            if (void 0 === t)
                this.cache[o] = {};
            else {
                Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t),
                t in s ? r = [t, i] : (r = i,
                r = r in s ? [r] : r.match(de) || [])),
                n = r.length;
                for (; n--; )
                    delete s[r[n]]
            }
        },
        hasData: function(e) {
            return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var ve = new a
      , ye = new a
      , xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , be = /([A-Z])/g;
    Z.extend({
        hasData: function(e) {
            return ye.hasData(e) || ve.hasData(e)
        },
        data: function(e, t, n) {
            return ye.access(e, t, n)
        },
        removeData: function(e, t) {
            ye.remove(e, t)
        },
        _data: function(e, t, n) {
            return ve.access(e, t, n)
        },
        _removeData: function(e, t) {
            ve.remove(e, t)
        }
    }),
    Z.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ye.get(o),
                1 === o.nodeType && !ve.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && (r = s[n].name,
                        0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)),
                        u(o, r, i[r])));
                    ve.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ye.set(this, e)
            }) : me(this, function(t) {
                var n, r = Z.camelCase(e);
                if (o && void 0 === t) {
                    if (n = ye.get(o, e),
                    void 0 !== n)
                        return n;
                    if (n = ye.get(o, r),
                    void 0 !== n)
                        return n;
                    if (n = u(o, r, void 0),
                    void 0 !== n)
                        return n
                } else
                    this.each(function() {
                        var n = ye.get(this, r);
                        ye.set(this, r, t),
                        e.indexOf("-") !== -1 && void 0 !== n && ye.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ye.remove(this, e)
            })
        }
    }),
    Z.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = ve.get(e, t),
                n && (!r || Z.isArray(n) ? r = ve.access(e, t, Z.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Z.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = Z._queueHooks(e, t)
              , s = function() {
                Z.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, s, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ve.get(e, n) || ve.access(e, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    ve.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    Z.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Z.queue(this, e, t);
                Z._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Z.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = Z.Deferred(), o = this, s = this.length, a = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                n = ve.get(o[s], e + "queueHooks"),
                n && n.empty && (r++,
                n.empty.add(a));
            return a(),
            i.promise(t)
        }
    });
    var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Te = ["Top", "Right", "Bottom", "Left"]
      , Ce = function(e, t) {
        return e = t || e,
        "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
    }
      , Ne = /^(?:checkbox|radio)$/i;
    !function() {
        var e = J.createDocumentFragment()
          , t = e.appendChild(J.createElement("div"))
          , n = J.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        Q.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        Q.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ke = "undefined";
    Q.focusinBubbles = "onfocusin"in e;
    var Ee = /^key/
      , Se = /^(?:mouse|pointer|contextmenu)|click/
      , De = /^(?:focusinfocus|focusoutblur)$/
      , je = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = ve.get(e);
            if (m)
                for (n.handler && (o = n,
                n = o.handler,
                i = o.selector),
                n.guid || (n.guid = Z.guid++),
                (u = m.events) || (u = m.events = {}),
                (s = m.handle) || (s = m.handle = function(t) {
                    return typeof Z !== ke && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                t = (t || "").match(de) || [""],
                l = t.length; l--; )
                    a = je.exec(t[l]) || [],
                    d = g = a[1],
                    h = (a[2] || "").split(".").sort(),
                    d && (f = Z.event.special[d] || {},
                    d = (i ? f.delegateType : f.bindType) || d,
                    f = Z.event.special[d] || {},
                    c = Z.extend({
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && Z.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                    }, o),
                    (p = u[d]) || (p = u[d] = [],
                    p.delegateCount = 0,
                    f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s, !1)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    Z.event.global[d] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, l, c, f, p, d, h, g, m = ve.hasData(e) && ve.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(de) || [""],
                l = t.length; l--; )
                    if (a = je.exec(t[l]) || [],
                    d = g = a[1],
                    h = (a[2] || "").split(".").sort(),
                    d) {
                        for (f = Z.event.special[d] || {},
                        d = (r ? f.delegateType : f.bindType) || d,
                        p = u[d] || [],
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = o = p.length; o--; )
                            c = p[o],
                            !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                            c.selector && p.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        s && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Z.removeEvent(e, d, m.handle),
                        delete u[d])
                    } else
                        for (d in u)
                            Z.event.remove(e, d + t[l], n, r, !0);
                Z.isEmptyObject(u) && (delete m.handle,
                ve.remove(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, s, a, u, l, c, f, p = [r || J], d = G.call(t, "type") ? t.type : t, h = G.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || J,
            3 !== r.nodeType && 8 !== r.nodeType && !De.test(d + Z.event.triggered) && (d.indexOf(".") >= 0 && (h = d.split("."),
            d = h.shift(),
            h.sort()),
            l = d.indexOf(":") < 0 && "on" + d,
            t = t[Z.expando] ? t : new Z.Event(d,"object" == typeof t && t),
            t.isTrigger = i ? 2 : 3,
            t.namespace = h.join("."),
            t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : Z.makeArray(n, [t]),
            f = Z.event.special[d] || {},
            i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Z.isWindow(r)) {
                    for (u = f.delegateType || d,
                    De.test(u + d) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s),
                        a = s;
                    a === (r.ownerDocument || J) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = p[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? u : f.bindType || d,
                    c = (ve.get(s, "events") || {})[t.type] && ve.get(s, "handle"),
                    c && c.apply(s, n),
                    c = l && s[l],
                    c && c.apply && Z.acceptData(s) && (t.result = c.apply(s, n),
                    t.result === !1 && t.preventDefault());
                return t.type = d,
                i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), n) !== !1 || !Z.acceptData(r) || l && Z.isFunction(r[d]) && !Z.isWindow(r) && (a = r[l],
                a && (r[l] = null),
                Z.event.triggered = d,
                r[d](),
                Z.event.triggered = void 0,
                a && (r[l] = a)),
                t.result
            }
        },
        dispatch: function(e) {
            e = Z.event.fix(e);
            var t, n, r, i, o, s = [], a = _.call(arguments), u = (ve.get(this, "events") || {})[e.type] || [], l = Z.event.special[e.type] || {};
            if (a[0] = e,
            e.delegateTarget = this,
            !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                for (s = Z.event.handlers.call(this, e, u),
                t = 0; (i = s[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o,
                        e.data = o.data,
                        r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a),
                        void 0 !== r && (e.result = r) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
            if (a && u.nodeType && (!e.button || "click" !== e.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== e.type) {
                        for (r = [],
                        n = 0; n < a; n++)
                            o = t[n],
                            i = o.selector + " ",
                            void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(u) >= 0 : Z.find(i, this, null, [u]).length),
                            r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
            s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || J,
                r = n.documentElement,
                i = n.body,
                e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[Z.expando])
                return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Se.test(i) ? this.mouseHooks : Ee.test(i) ? this.keyHooks : {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            e = new Z.Event(o),
            t = r.length; t--; )
                n = r[t],
                e[n] = o[n];
            return e.target || (e.target = J),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === f() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && Z.nodeName(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return Z.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = Z.extend(new Z.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i),
            i.isDefaultPrevented() && n.preventDefault()
        }
    },
    Z.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    ,
    Z.Event = function(e, t) {
        return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? l : c) : this.type = e,
        t && Z.extend(this, t),
        this.timeStamp = e && e.timeStamp || Z.now(),
        void (this[Z.expando] = !0)) : new Z.Event(e,t)
    }
    ,
    Z.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l,
            e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l,
            e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = l,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Z.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || Z.contains(r, i)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    Q.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Z.event.simulate(t, e.target, Z.event.fix(e), !0)
        };
        Z.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = ve.access(r, t);
                i || r.addEventListener(e, n, !0),
                ve.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = ve.access(r, t) - 1;
                i ? ve.access(r, t, i) : (r.removeEventListener(e, n, !0),
                ve.remove(r, t))
            }
        }
    }),
    Z.fn.extend({
        on: function(e, t, n, r, i) {
            var o, s;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t,
                t = void 0);
                for (s in e)
                    this.on(s, t, n, e[s], i);
                return this
            }
            if (null == n && null == r ? (r = t,
            n = t = void 0) : null == r && ("string" == typeof t ? (r = n,
            n = void 0) : (r = n,
            n = t,
            t = void 0)),
            r === !1)
                r = c;
            else if (!r)
                return this;
            return 1 === i && (o = r,
            r = function(e) {
                return Z().off(e),
                o.apply(this, arguments)
            }
            ,
            r.guid = o.guid || (o.guid = Z.guid++)),
            this.each(function() {
                Z.event.add(this, e, r, n, t)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t,
            t = void 0),
            n === !1 && (n = c),
            this.each(function() {
                Z.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                Z.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return Z.event.trigger(e, t, n, !0)
        }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , Le = /<([\w:]+)/
      , qe = /<|&#?\w+;/
      , He = /<(?:script|style|link)/i
      , Oe = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Fe = /^$|\/(?:java|ecma)script/i
      , Pe = /^true\/(.*)/
      , Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , Me = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Me.optgroup = Me.option,
    Me.tbody = Me.tfoot = Me.colgroup = Me.caption = Me.thead,
    Me.th = Me.td,
    Z.extend({
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0), u = Z.contains(e.ownerDocument, e);
            if (!(Q.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e)))
                for (s = v(a),
                o = v(e),
                r = 0,
                i = o.length; r < i; r++)
                    y(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || v(e),
                    s = s || v(a),
                    r = 0,
                    i = o.length; r < i; r++)
                        m(o[r], s[r]);
                else
                    m(e, a);
            return s = v(a, "script"),
            s.length > 0 && g(s, !u && v(e, "script")),
            a
        },
        buildFragment: function(e, t, n, r) {
            for (var i, o, s, a, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++)
                if (i = e[p],
                i || 0 === i)
                    if ("object" === Z.type(i))
                        Z.merge(f, i.nodeType ? [i] : i);
                    else if (qe.test(i)) {
                        for (o = o || c.appendChild(t.createElement("div")),
                        s = (Le.exec(i) || ["", ""])[1].toLowerCase(),
                        a = Me[s] || Me._default,
                        o.innerHTML = a[1] + i.replace(Ae, "<$1></$2>") + a[2],
                        l = a[0]; l--; )
                            o = o.lastChild;
                        Z.merge(f, o.childNodes),
                        o = c.firstChild,
                        o.textContent = ""
                    } else
                        f.push(t.createTextNode(i));
            for (c.textContent = "",
            p = 0; i = f[p++]; )
                if ((!r || Z.inArray(i, r) === -1) && (u = Z.contains(i.ownerDocument, i),
                o = v(c.appendChild(i), "script"),
                u && g(o),
                n))
                    for (l = 0; i = o[l++]; )
                        Fe.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(e) {
            for (var t, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = e[s]); s++) {
                if (Z.acceptData(n) && (i = n[ve.expando],
                i && (t = ve.cache[i]))) {
                    if (t.events)
                        for (r in t.events)
                            o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
                    ve.cache[i] && delete ve.cache[i]
                }
                delete ye.cache[n[ye.expando]]
            }
        }
    }),
    Z.fn.extend({
        text: function(e) {
            return me(this, function(e) {
                return void 0 === e ? Z.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++)
                t || 1 !== n.nodeType || Z.cleanData(v(n)),
                n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(v(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (Z.cleanData(v(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return Z.clone(this, e, t)
            })
        },
        html: function(e) {
            return me(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !He.test(e) && !Me[(Le.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(Ae, "<$1></$2>");
                    try {
                        for (; n < r; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (Z.cleanData(v(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode,
                Z.cleanData(v(this)),
                e && e.replaceChild(t, this)
            }),
            e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = z.apply([], e);
            var n, r, i, o, s, a, u = 0, l = this.length, c = this, f = l - 1, p = e[0], g = Z.isFunction(p);
            if (g || l > 1 && "string" == typeof p && !Q.checkClone && Oe.test(p))
                return this.each(function(n) {
                    var r = c.eq(n);
                    g && (e[0] = p.call(this, n, r.html())),
                    r.domManip(e, t)
                });
            if (l && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this),
            r = n.firstChild,
            1 === n.childNodes.length && (n = r),
            r)) {
                for (i = Z.map(v(n, "script"), d),
                o = i.length; u < l; u++)
                    s = n,
                    u !== f && (s = Z.clone(s, !0, !0),
                    o && Z.merge(i, v(s, "script"))),
                    t.call(this[u], s, u);
                if (o)
                    for (a = i[i.length - 1].ownerDocument,
                    Z.map(i, h),
                    u = 0; u < o; u++)
                        s = i[u],
                        Fe.test(s.type || "") && !ve.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Re, "")))
            }
            return this
        }
    }),
    Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Z.fn[e] = function(e) {
            for (var n, r = [], i = Z(e), o = i.length - 1, s = 0; s <= o; s++)
                n = s === o ? this : this.clone(!0),
                Z(i[s])[t](n),
                X.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var We, $e = {}, Ie = /^margin/, Be = new RegExp("^(" + we + ")(?!px)[a-z%]+$","i"), _e = function(t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    };
    !function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
            s.innerHTML = "",
            i.appendChild(o);
            var t = e.getComputedStyle(s, null);
            n = "1%" !== t.top,
            r = "4px" === t.width,
            i.removeChild(o)
        }
        var n, r, i = J.documentElement, o = J.createElement("div"), s = J.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
        s.cloneNode(!0).style.backgroundClip = "",
        Q.clearCloneStyle = "content-box" === s.style.backgroundClip,
        o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
        o.appendChild(s),
        e.getComputedStyle && Z.extend(Q, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return null == r && t(),
                r
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(J.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                s.style.width = "1px",
                i.appendChild(o),
                t = !parseFloat(e.getComputedStyle(n, null).marginRight),
                i.removeChild(o),
                s.removeChild(n),
                t
            }
        }))
    }(),
    Z.swap = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t)
            s[o] = e.style[o],
            e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = s[o];
        return i
    }
    ;
    var ze = /^(none|table(?!-c[ea]).+)/
      , Xe = new RegExp("^(" + we + ")(.*)$","i")
      , Ue = new RegExp("^([+-])=(" + we + ")","i")
      , Ve = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ye = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Ge = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = w(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = Z.camelCase(t), u = e.style;
                return t = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)),
                s = Z.cssHooks[t] || Z.cssHooks[a],
                void 0 === n ? s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n,
                "string" === o && (i = Ue.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)),
                o = "number"),
                null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"),
                Q.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)),
                void 0)
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = Z.camelCase(t);
            return t = Z.cssProps[a] || (Z.cssProps[a] = C(e.style, a)),
            s = Z.cssHooks[t] || Z.cssHooks[a],
            s && "get"in s && (i = s.get(e, !0, n)),
            void 0 === i && (i = w(e, t, r)),
            "normal" === i && t in Ye && (i = Ye[t]),
            "" === n || n ? (o = parseFloat(i),
            n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }),
    Z.each(["height", "width"], function(e, t) {
        Z.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return ze.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, Ve, function() {
                        return E(e, t, r)
                    }) : E(e, t, r)
            },
            set: function(e, n, r) {
                var i = r && _e(e);
                return N(e, n, r ? k(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    Z.cssHooks.marginRight = T(Q.reliableMarginRight, function(e, t) {
        if (t)
            return Z.swap(e, {
                display: "inline-block"
            }, w, [e, "marginRight"])
    }),
    Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Z.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    i[e + Te[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        Ie.test(e) || (Z.cssHooks[e + t].set = N)
    }),
    Z.fn.extend({
        css: function(e, t) {
            return me(this, function(e, t, n) {
                var r, i, o = {}, s = 0;
                if (Z.isArray(t)) {
                    for (r = _e(e),
                    i = t.length; s < i; s++)
                        o[t[s]] = Z.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return S(this, !0)
        },
        hide: function() {
            return S(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ce(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }),
    Z.Tween = D,
    D.prototype = {
        constructor: D,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = D.propHooks[this.prop];
            return e && e.get ? e.get(this) : D.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = D.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : D.propHooks._default.set(this),
            this
        }
    },
    D.prototype.init.prototype = D.prototype,
    D.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    D.propHooks.scrollTop = D.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    Z.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    Z.fx = D.prototype.init,
    Z.fx.step = {};
    var Qe, Je, Ke = /^(?:toggle|show|hide)$/, Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$","i"), et = /queueHooks$/, tt = [q], nt = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , r = n.cur()
              , i = Ze.exec(t)
              , o = i && i[3] || (Z.cssNumber[e] ? "" : "px")
              , s = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e))
              , a = 1
              , u = 20;
            if (s && s[3] !== o) {
                o = o || s[3],
                i = i || [],
                s = +r || 1;
                do
                    a = a || ".5",
                    s /= a,
                    Z.style(n.elem, e, s + o);
                while (a !== (a = n.cur() / r) && 1 !== a && --u)
            }
            return i && (s = n.start = +s || +r || 0,
            n.unit = o,
            n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]),
            n
        }
        ]
    };
    Z.Animation = Z.extend(O, {
        tweener: function(e, t) {
            Z.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                nt[n] = nt[n] || [],
                nt[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? tt.unshift(e) : tt.push(e)
        }
    }),
    Z.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? Z.extend({}, e) : {
            complete: n || !n && t || Z.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Z.isFunction(t) && t
        };
        return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default,
        null != r.queue && r.queue !== !0 || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            Z.isFunction(r.old) && r.old.call(this),
            r.queue && Z.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    Z.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Ce).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = Z.isEmptyObject(e)
              , o = Z.speed(t, n, r)
              , s = function() {
                var t = O(this, Z.extend({}, e), o);
                (i || ve.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = Z.timers
                  , s = ve.get(this);
                if (i)
                    s[i] && s[i].stop && r(s[i]);
                else
                    for (i in s)
                        s[i] && s[i].stop && et.test(i) && r(s[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                !t && n || Z.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = ve.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = Z.timers, s = r ? r.length : 0;
                for (n.finish = !0,
                Z.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; t < s; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    Z.each(["toggle", "show", "hide"], function(e, t) {
        var n = Z.fn[t];
        Z.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(A(t, !0), e, r, i)
        }
    }),
    Z.each({
        slideDown: A("show"),
        slideUp: A("hide"),
        slideToggle: A("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        Z.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    Z.timers = [],
    Z.fx.tick = function() {
        var e, t = 0, n = Z.timers;
        for (Qe = Z.now(); t < n.length; t++)
            e = n[t],
            e() || n[t] !== e || n.splice(t--, 1);
        n.length || Z.fx.stop(),
        Qe = void 0
    }
    ,
    Z.fx.timer = function(e) {
        Z.timers.push(e),
        e() ? Z.fx.start() : Z.timers.pop()
    }
    ,
    Z.fx.interval = 13,
    Z.fx.start = function() {
        Je || (Je = setInterval(Z.fx.tick, Z.fx.interval))
    }
    ,
    Z.fx.stop = function() {
        clearInterval(Je),
        Je = null
    }
    ,
    Z.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    Z.fn.delay = function(e, t) {
        return e = Z.fx ? Z.fx.speeds[e] || e : e,
        t = t || "fx",
        this.queue(t, function(t, n) {
            var r = setTimeout(t, e);
            n.stop = function() {
                clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var e = J.createElement("input")
          , t = J.createElement("select")
          , n = t.appendChild(J.createElement("option"));
        e.type = "checkbox",
        Q.checkOn = "" !== e.value,
        Q.optSelected = n.selected,
        t.disabled = !0,
        Q.optDisabled = !n.disabled,
        e = J.createElement("input"),
        e.value = "t",
        e.type = "radio",
        Q.radioValue = "t" === e.value
    }();
    var rt, it, ot = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(e, t) {
            return me(this, Z.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Z.removeAttr(this, e)
            })
        }
    }),
    Z.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)
                return typeof e.getAttribute === ke ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(),
                r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)),
                void 0 === n ? r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t),
                null == i ? void 0 : i) : null !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                n) : void Z.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(de);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    r = Z.propFix[n] || n,
                    Z.expr.match.bool.test(n) && (e[r] = !1),
                    e.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!Q.radioValue && "radio" === t && Z.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    it = {
        set: function(e, t, n) {
            return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = ot[t] || Z.find.attr;
        ot[t] = function(e, t, r) {
            var i, o;
            return r || (o = ot[t],
            ot[t] = i,
            i = null != n(e, t, r) ? t.toLowerCase() : null,
            ot[t] = o),
            i
        }
    });
    var st = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(e, t) {
            return me(this, Z.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Z.propFix[e] || e]
            })
        }
    }),
    Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, t, n) {
            var r, i, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return o = 1 !== s || !Z.isXMLDoc(e),
                o && (t = Z.propFix[t] || t,
                i = Z.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || st.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }),
    Q.optSelected || (Z.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        }
    }),
    Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var at = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e))
                return this.each(function(t) {
                    Z(this).addClass(e.call(this, t, this.className))
                });
            if (a)
                for (t = (e || "").match(de) || []; u < l; u++)
                    if (n = this[u],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : " ")) {
                        for (o = 0; i = t[o++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = Z.trim(r),
                        n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e, u = 0, l = this.length;
            if (Z.isFunction(e))
                return this.each(function(t) {
                    Z(this).removeClass(e.call(this, t, this.className))
                });
            if (a)
                for (t = (e || "").match(de) || []; u < l; u++)
                    if (n = this[u],
                    r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(at, " ") : "")) {
                        for (o = 0; i = t[o++]; )
                            for (; r.indexOf(" " + i + " ") >= 0; )
                                r = r.replace(" " + i + " ", " ");
                        s = e ? Z.trim(r) : "",
                        n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Z.isFunction(e) ? this.each(function(n) {
                Z(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, r = 0, i = Z(this), o = e.match(de) || []; t = o[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    n !== ke && "boolean" !== n || (this.className && ve.set(this, "__className__", this.className),
                    this.className = this.className || e === !1 ? "" : ve.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(at, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    });
    var ut = /\r/g;
    Z.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = Z.isFunction(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e,
                        null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()],
                        t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()],
                    t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                    "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)
            }
        }
    }),
    Z.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Z.find.attr(e, "value");
                    return null != t ? t : Z.trim(Z.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                        if (n = r[u],
                        (n.selected || u === i) && (Q.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Z.nodeName(n.parentNode, "optgroup"))) {
                            if (t = Z(n).val(),
                            o)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = Z.makeArray(t), s = i.length; s--; )
                        r = i[s],
                        (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        }
    }),
    Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(e, t) {
                if (Z.isArray(t))
                    return e.checked = Z.inArray(Z(e).val(), t) >= 0
            }
        },
        Q.checkOn || (Z.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Z.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    Z.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var lt = Z.now()
      , ct = /\?/;
    Z.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
    ,
    Z.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e)
            return null;
        try {
            n = new DOMParser,
            t = n.parseFromString(e, "text/xml")
        } catch (r) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || Z.error("Invalid XML: " + e),
        t
    }
    ;
    var ft = /#.*$/
      , pt = /([?&])_=[^&]*/
      , dt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , gt = /^(?:GET|HEAD)$/
      , mt = /^\/\//
      , vt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , yt = {}
      , xt = {}
      , bt = "*/".concat("*")
      , wt = e.location.href
      , Tt = vt.exec(wt.toLowerCase()) || [];
    Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt,
            type: "GET",
            isLocal: ht.test(Tt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, Z.ajaxSettings), t) : R(Z.ajaxSettings, e)
        },
        ajaxPrefilter: F(yt),
        ajaxTransport: F(xt),
        ajax: function(e, t) {
            function n(e, t, n, s) {
                var u, c, v, y, b, T = t;
                2 !== x && (x = 2,
                a && clearTimeout(a),
                r = void 0,
                o = s || "",
                w.readyState = e > 0 ? 4 : 0,
                u = e >= 200 && e < 300 || 304 === e,
                n && (y = M(f, w, n)),
                y = W(f, y, w, u),
                u ? (f.ifModified && (b = w.getResponseHeader("Last-Modified"),
                b && (Z.lastModified[i] = b),
                b = w.getResponseHeader("etag"),
                b && (Z.etag[i] = b)),
                204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state,
                c = y.data,
                v = y.error,
                u = !v)) : (v = T,
                !e && T || (T = "error",
                e < 0 && (e = 0))),
                w.status = e,
                w.statusText = (t || T) + "",
                u ? h.resolveWith(p, [c, T, w]) : h.rejectWith(p, [w, T, v]),
                w.statusCode(m),
                m = void 0,
                l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [w, f, u ? c : v]),
                g.fireWith(p, [w, T]),
                l && (d.trigger("ajaxComplete", [w, f]),
                --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var r, i, o, s, a, u, l, c, f = Z.ajaxSetup({}, t), p = f.context || f, d = f.context && (p.nodeType || p.jquery) ? Z(p) : Z.event, h = Z.Deferred(), g = Z.Callbacks("once memory"), m = f.statusCode || {}, v = {}, y = {}, x = 0, b = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!s)
                            for (s = {}; t = dt.exec(o); )
                                s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? o : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = y[n] = y[n] || e,
                    v[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (x < 2)
                            for (t in e)
                                m[t] = [m[t], e[t]];
                        else
                            w.always(e[w.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || b;
                    return r && r.abort(t),
                    n(0, t),
                    this
                }
            };
            if (h.promise(w).complete = g.add,
            w.success = w.done,
            w.error = w.fail,
            f.url = ((e || f.url || wt) + "").replace(ft, "").replace(mt, Tt[1] + "//"),
            f.type = t.method || t.type || f.method || f.type,
            f.dataTypes = Z.trim(f.dataType || "*").toLowerCase().match(de) || [""],
            null == f.crossDomain && (u = vt.exec(f.url.toLowerCase()),
            f.crossDomain = !(!u || u[1] === Tt[1] && u[2] === Tt[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (Tt[3] || ("http:" === Tt[1] ? "80" : "443")))),
            f.data && f.processData && "string" != typeof f.data && (f.data = Z.param(f.data, f.traditional)),
            P(yt, f, t, w),
            2 === x)
                return w;
            l = Z.event && f.global,
            l && 0 === Z.active++ && Z.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !gt.test(f.type),
            i = f.url,
            f.hasContent || (f.data && (i = f.url += (ct.test(i) ? "&" : "?") + f.data,
            delete f.data),
            f.cache === !1 && (f.url = pt.test(i) ? i.replace(pt, "$1_=" + lt++) : i + (ct.test(i) ? "&" : "?") + "_=" + lt++)),
            f.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]),
            Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])),
            (f.data && f.hasContent && f.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", f.contentType),
            w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers)
                w.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(p, w, f) === !1 || 2 === x))
                return w.abort();
            b = "abort";
            for (c in {
                success: 1,
                error: 1,
                complete: 1
            })
                w[c](f[c]);
            if (r = P(xt, f, t, w)) {
                w.readyState = 1,
                l && d.trigger("ajaxSend", [w, f]),
                f.async && f.timeout > 0 && (a = setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    x = 1,
                    r.send(v, n)
                } catch (T) {
                    if (!(x < 2))
                        throw T;
                    n(-1, T)
                }
            } else
                n(-1, "No Transport");
            return w
        },
        getJSON: function(e, t, n) {
            return Z.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Z.get(e, void 0, t, "script")
        }
    }),
    Z.each(["get", "post"], function(e, t) {
        Z[t] = function(e, n, r, i) {
            return Z.isFunction(n) && (i = i || r,
            r = n,
            n = void 0),
            Z.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            })
        }
    }),
    Z._evalUrl = function(e) {
        return Z.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    Z.fn.extend({
        wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this)
        },
        wrapInner: function(e) {
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = Z(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = Z.isFunction(e);
            return this.each(function(n) {
                Z(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    Z.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }
    ,
    Z.expr.filters.visible = function(e) {
        return !Z.expr.filters.hidden(e)
    }
    ;
    var Ct = /%20/g
      , Nt = /\[\]$/
      , kt = /\r?\n/g
      , Et = /^(?:submit|button|image|reset|file)$/i
      , St = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = Z.isFunction(t) ? t() : null == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional),
        Z.isArray(e) || e.jquery && !Z.isPlainObject(e))
            Z.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                $(n, e[n], t, i);
        return r.join("&").replace(Ct, "+")
    }
    ,
    Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Z.prop(this, "elements");
                return e ? Z.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Z(this).is(":disabled") && St.test(this.nodeName) && !Et.test(e) && (this.checked || !Ne.test(e))
            }).map(function(e, t) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    }),
    Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Dt = 0
      , jt = {}
      , At = {
        0: 200,
        1223: 204
    }
      , Lt = Z.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in jt)
            jt[e]()
    }),
    Q.cors = !!Lt && "withCredentials"in Lt,
    Q.ajax = Lt = !!Lt,
    Z.ajaxTransport(function(e) {
        var t;
        if (Q.cors || Lt && !e.crossDomain)
            return {
                send: function(n, r) {
                    var i, o = e.xhr(), s = ++Dt;
                    if (o.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (i in e.xhrFields)
                            o[i] = e.xhrFields[i];
                    e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n)
                        o.setRequestHeader(i, n[i]);
                    t = function(e) {
                        return function() {
                            t && (delete jt[s],
                            t = o.onload = o.onerror = null,
                            "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(At[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                text: o.responseText
                            } : void 0, o.getAllResponseHeaders()))
                        }
                    }
                    ,
                    o.onload = t(),
                    o.onerror = t("error"),
                    t = jt[s] = t("abort");
                    try {
                        o.send(e.hasContent && e.data || null)
                    } catch (a) {
                        if (t)
                            throw a
                    }
                },
                abort: function() {
                    t && t()
                }
            }
    }),
    Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return Z.globalEval(e),
                e
            }
        }
    }),
    Z.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    Z.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = Z("<script>").prop({
                        async: !0,
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    J.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var qt = []
      , Ht = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = qt.pop() || Z.expando + "_" + lt++;
            return this[e] = !0,
            e
        }
    }),
    Z.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (Ht.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(Ht, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
            t.converters["script json"] = function() {
                return s || Z.error(i + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            o = e[i],
            e[i] = function() {
                s = arguments
            }
            ,
            r.always(function() {
                e[i] = o,
                t[i] && (t.jsonpCallback = n.jsonpCallback,
                qt.push(i)),
                s && Z.isFunction(o) && o(s[0]),
                s = o = void 0
            }),
            "script"
    }),
    Z.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || J;
        var r = se.exec(e)
          , i = !n && [];
        return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i),
        i && i.length && Z(i).remove(),
        Z.merge([], r.childNodes))
    }
    ;
    var Ot = Z.fn.load;
    Z.fn.load = function(e, t, n) {
        if ("string" != typeof e && Ot)
            return Ot.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return a >= 0 && (r = Z.trim(e.slice(a)),
        e = e.slice(0, a)),
        Z.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        s.length > 0 && Z.ajax({
            url: e,
            type: i,
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
        }).complete(n && function(e, t) {
            s.each(n, o || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Z.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers, function(t) {
            return e === t.elem
        }).length
    }
    ;
    var Ft = e.document.documentElement;
    Z.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, l, c = Z.css(e, "position"), f = Z(e), p = {};
            "static" === c && (e.style.position = "relative"),
            a = f.offset(),
            o = Z.css(e, "top"),
            u = Z.css(e, "left"),
            l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
            l ? (r = f.position(),
            s = r.top,
            i = r.left) : (s = parseFloat(o) || 0,
            i = parseFloat(u) || 0),
            Z.isFunction(t) && (t = t.call(e, n, a)),
            null != t.top && (p.top = t.top - a.top + s),
            null != t.left && (p.left = t.left - a.left + i),
            "using"in t ? t.using.call(e, p) : f.css(p)
        }
    },
    Z.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    Z.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0], i = {
                top: 0,
                left: 0
            }, o = r && r.ownerDocument;
            if (o)
                return t = o.documentElement,
                Z.contains(t, r) ? (typeof r.getBoundingClientRect !== ke && (i = r.getBoundingClientRect()),
                n = I(o),
                {
                    top: i.top + n.pageYOffset - t.clientTop,
                    left: i.left + n.pageXOffset - t.clientLeft
                }) : i
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                Z.nodeName(e[0], "html") || (r = e.offset()),
                r.top += Z.css(e[0], "borderTopWidth", !0),
                r.left += Z.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - r.top - Z.css(n, "marginTop", !0),
                    left: t.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Ft; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position"); )
                    e = e.offsetParent;
                return e || Ft
            })
        }
    }),
    Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, n) {
        var r = "pageYOffset" === n;
        Z.fn[t] = function(i) {
            return me(this, function(t, i, o) {
                var s = I(t);
                return void 0 === o ? s ? s[n] : t[i] : void (s ? s.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
            }, t, i, arguments.length, null)
        }
    }),
    Z.each(["top", "left"], function(e, t) {
        Z.cssHooks[t] = T(Q.pixelPosition, function(e, n) {
            if (n)
                return n = w(e, t),
                Be.test(n) ? Z(e).position()[t] + "px" : n
        })
    }),
    Z.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Z.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            Z.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r)
                  , s = n || (r === !0 || i === !0 ? "margin" : "border");
                return me(this, function(t, n, r) {
                    var i;
                    return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, s) : Z.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }),
    Z.fn.size = function() {
        return this.length
    }
    ,
    Z.fn.andSelf = Z.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Pt = e.jQuery
      , Rt = e.$;
    return Z.noConflict = function(t) {
        return e.$ === Z && (e.$ = Rt),
        t && e.jQuery === Z && (e.jQuery = Pt),
        Z
    }
    ,
    typeof t === ke && (e.jQuery = e.$ = Z),
    Z
});
!function(a) {
    a.fn.disappear = function(e, r) {
        var p = a.extend({
            data: void 0
        }, r);
        this.each(function() {
            var r = a(this);
            if (r.bind("disappear", e, p.data),
            !e)
                return void r.trigger("disappear", p.data)
        })
    }
    ,
    a.fn.appear = function(e, r) {
        var p = a.extend({
            data: void 0,
            one: !0
        }, r);
        return this.each(function() {
            var r = a(this);
            if (r.appeared = !1,
            !e)
                return void r.trigger("appear", p.data);
            var t = a(window)
              , n = function() {
                if (!r.is(":visible"))
                    return void (r.appeared = !1);
                var a = t.scrollLeft()
                  , e = t.scrollTop()
                  , n = r.offset()
                  , i = n.left
                  , o = n.top;
                o + r.height() >= e && o <= e + t.height() && i + r.width() >= a && i <= a + t.width() ? r.appeared || r.trigger("appear", p.data) : (r.appeared && r.trigger("disappear", p.data),
                r.appeared = !1)
            }
              , i = function() {
                if (r.appeared = !0,
                p.one) {
                    t.unbind("scroll", n);
                    var i = a.inArray(n, a.fn.appear.checks);
                    i >= 0 && a.fn.appear.checks.splice(i, 1)
                }
                e.apply(this, arguments)
            };
            p.one ? r.one("appear", p.data, i) : r.bind("appear", p.data, i),
            t.scroll(n),
            a.fn.appear.checks.push(n),
            n()
        })
    }
    ,
    a.extend(a.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var e = a.fn.appear.checks.length;
            if (e > 0)
                for (; e--; )
                    a.fn.appear.checks[e]()
        },
        run: function() {
            a.fn.appear.timeout && clearTimeout(a.fn.appear.timeout),
            a.fn.appear.timeout = setTimeout(a.fn.appear.checkAll, 20)
        }
    }),
    a.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(e, r) {
        var p = a.fn[r];
        p && (a.fn[r] = function() {
            var e = p.apply(this, arguments);
            return a.fn.appear.run(),
            e
        }
        )
    })
}(jQuery);
!function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    function n(e) {
        return u.raw ? e : encodeURIComponent(e)
    }
    function o(e) {
        return u.raw ? e : decodeURIComponent(e)
    }
    function i(e) {
        return n(u.json ? JSON.stringify(e) : String(e))
    }
    function r(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(c, " ")),
            u.json ? JSON.parse(e) : e
        } catch (n) {}
    }
    function t(n, o) {
        var i = u.raw ? n : r(n);
        return e.isFunction(o) ? o(i) : i
    }
    var c = /\+/g
      , u = e.cookie = function(r, c, s) {
        if (arguments.length > 1 && !e.isFunction(c)) {
            if (s = e.extend({}, u.defaults, s),
            "number" == typeof s.expires) {
                var a = s.expires
                  , f = s.expires = new Date;
                f.setMilliseconds(f.getMilliseconds() + 864e5 * a)
            }
            return document.cookie = [s.raw ? r : n(r), "=", s.raw ? u.json ? JSON.stringify(c) : String(c) : i(c), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
        }
        for (var d = r ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], l = 0, m = p.length; l < m; l++) {
            var x = p[l].split("=")
              , g = o(x.shift())
              , j = x.join("=");
            if (r === g) {
                d = t(j, c);
                break
            }
            r || void 0 === (j = t(j)) || (d[g] = j)
        }
        return d
    }
    ;
    u.defaults = {},
    e.removeCookie = function(n, o) {
        return e.cookie(n, "", e.extend({}, o, {
            expires: -1
        })),
        !e.cookie(n)
    }
});
!function(t, e) {
    function n(t, e, n) {
        var r = t.children()
          , o = !1;
        t.empty();
        for (var i = 0, d = r.length; i < d; i++) {
            var l = r.eq(i);
            if (t.append(l),
            n && t.append(n),
            a(t, e)) {
                l.remove(),
                o = !0;
                break
            }
            n && n.detach()
        }
        return o
    }
    function r(e, n, i, d, l) {
        var s = !1
          , c = "a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style"
          , u = "script, .dotdotdot-keep";
        return e.contents().detach().each(function() {
            var h = this
              , f = t(h);
            if ("undefined" == typeof h)
                return !0;
            if (f.is(u))
                e.append(f);
            else {
                if (s)
                    return !0;
                e.append(f),
                !l || f.is(d.after) || f.find(d.after).length || e[e.is(c) ? "after" : "append"](l),
                a(i, d) && (s = 3 == h.nodeType ? o(f, n, i, d, l) : r(f, n, i, d, l)),
                s || l && l.detach()
            }
        }),
        n.addClass("is-truncated"),
        s
    }
    function o(e, n, r, o, d) {
        var c = e[0];
        if (!c)
            return !1;
        var h = s(c)
          , f = h.indexOf(" ") !== -1 ? " " : "　"
          , p = "letter" == o.wrap ? "" : f
          , g = h.split(p)
          , v = -1
          , w = -1
          , b = 0
          , y = g.length - 1;
        for (o.fallbackToLetter && 0 == b && 0 == y && (p = "",
        g = h.split(p),
        y = g.length - 1); b <= y && (0 != b || 0 != y); ) {
            var m = Math.floor((b + y) / 2);
            if (m == w)
                break;
            w = m,
            l(c, g.slice(0, w + 1).join(p) + o.ellipsis),
            r.children().each(function() {
                t(this).toggle().toggle()
            }),
            a(r, o) ? (y = w,
            o.fallbackToLetter && 0 == b && 0 == y && (p = "",
            g = g[0].split(p),
            v = -1,
            w = -1,
            b = 0,
            y = g.length - 1)) : (v = w,
            b = w)
        }
        if (v == -1 || 1 == g.length && 0 == g[0].length) {
            var x = e.parent();
            e.detach();
            var C = d && d.closest(x).length ? d.length : 0;
            x.contents().length > C ? c = u(x.contents().eq(-1 - C), n) : (c = u(x, n, !0),
            C || x.detach()),
            c && (h = i(s(c), o),
            l(c, h),
            C && d && t(c).parent().append(d))
        } else
            h = i(g.slice(0, v + 1).join(p), o),
            l(c, h);
        return !0
    }
    function a(t, e) {
        return t.innerHeight() > e.maxHeight
    }
    function i(e, n) {
        for (; t.inArray(e.slice(-1), n.lastCharacter.remove) > -1; )
            e = e.slice(0, -1);
        return t.inArray(e.slice(-1), n.lastCharacter.noEllipsis) < 0 && (e += n.ellipsis),
        e
    }
    function d(t) {
        return {
            width: t.innerWidth(),
            height: t.innerHeight()
        }
    }
    function l(t, e) {
        t.innerText ? t.innerText = e : t.nodeValue ? t.nodeValue = e : t.textContent && (t.textContent = e)
    }
    function s(t) {
        return t.innerText ? t.innerText : t.nodeValue ? t.nodeValue : t.textContent ? t.textContent : ""
    }
    function c(t) {
        do
            t = t.previousSibling;
        while (t && 1 !== t.nodeType && 3 !== t.nodeType);return t
    }
    function u(e, n, r) {
        var o, a = e && e[0];
        if (a) {
            if (!r) {
                if (3 === a.nodeType)
                    return a;
                if (t.trim(e.text()))
                    return u(e.contents().last(), n)
            }
            for (o = c(a); !o; ) {
                if (e = e.parent(),
                e.is(n) || !e.length)
                    return !1;
                o = c(e[0])
            }
            if (o)
                return u(t(o), n)
        }
        return !1
    }
    function h(e, n) {
        return !!e && ("string" == typeof e ? (e = t(e, n),
        !!e.length && e) : !!e.jquery && e)
    }
    function f(t) {
        for (var e = t.innerHeight(), n = ["paddingTop", "paddingBottom"], r = 0, o = n.length; r < o; r++) {
            var a = parseInt(t.css(n[r]), 10);
            isNaN(a) && (a = 0),
            e -= a
        }
        return e
    }
    if (!t.fn.dotdotdot) {
        t.fn.dotdotdot = function(e) {
            if (0 == this.length)
                return t.fn.dotdotdot.debug('No element found for "' + this.selector + '".'),
                this;
            if (this.length > 1)
                return this.each(function() {
                    t(this).dotdotdot(e)
                });
            var o = this
              , i = o.contents();
            o.data("dotdotdot") && o.trigger("destroy.dot"),
            o.data("dotdotdot-style", o.attr("style") || ""),
            o.css("word-wrap", "break-word"),
            "nowrap" === o.css("white-space") && o.css("white-space", "normal"),
            o.bind_events = function() {
                return o.bind("update.dot", function(e, d) {
                    switch (o.removeClass("is-truncated"),
                    e.preventDefault(),
                    e.stopPropagation(),
                    typeof l.height) {
                    case "number":
                        l.maxHeight = l.height;
                        break;
                    case "function":
                        l.maxHeight = l.height.call(o[0]);
                        break;
                    default:
                        l.maxHeight = f(o)
                    }
                    l.maxHeight += l.tolerance,
                    "undefined" != typeof d && (("string" == typeof d || "nodeType"in d && 1 === d.nodeType) && (d = t("<div />").append(d).contents()),
                    d instanceof t && (i = d)),
                    g = o.wrapInner('<div class="dotdotdot" />').children(),
                    g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                        height: "auto",
                        width: "auto",
                        border: "none",
                        padding: 0,
                        margin: 0
                    });
                    var c = !1
                      , u = !1;
                    return s.afterElement && (c = s.afterElement.clone(!0),
                    c.show(),
                    s.afterElement.detach()),
                    a(g, l) && (u = "children" == l.wrap ? n(g, l, c) : r(g, o, g, l, c)),
                    g.replaceWith(g.contents()),
                    g = null,
                    t.isFunction(l.callback) && l.callback.call(o[0], u, i),
                    s.isTruncated = u,
                    u
                }).bind("isTruncated.dot", function(t, e) {
                    return t.preventDefault(),
                    t.stopPropagation(),
                    "function" == typeof e && e.call(o[0], s.isTruncated),
                    s.isTruncated
                }).bind("originalContent.dot", function(t, e) {
                    return t.preventDefault(),
                    t.stopPropagation(),
                    "function" == typeof e && e.call(o[0], i),
                    i
                }).bind("destroy.dot", function(t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    o.unwatch().unbind_events().contents().detach().end().append(i).attr("style", o.data("dotdotdot-style") || "").removeClass("is-truncated").data("dotdotdot", !1)
                }),
                o
            }
            ,
            o.unbind_events = function() {
                return o.unbind(".dot"),
                o
            }
            ,
            o.watch = function() {
                if (o.unwatch(),
                "window" == l.watch) {
                    var e = t(window)
                      , n = e.width()
                      , r = e.height();
                    e.bind("resize.dot" + s.dotId, function() {
                        n == e.width() && r == e.height() && l.windowResizeFix || (n = e.width(),
                        r = e.height(),
                        u && clearInterval(u),
                        u = setTimeout(function() {
                            o.trigger("update.dot")
                        }, 100))
                    })
                } else
                    c = d(o),
                    u = setInterval(function() {
                        if (o.is(":visible")) {
                            var t = d(o);
                            c.width == t.width && c.height == t.height || (o.trigger("update.dot"),
                            c = t)
                        }
                    }, 500);
                return o
            }
            ,
            o.unwatch = function() {
                return t(window).unbind("resize.dot" + s.dotId),
                u && clearInterval(u),
                o
            }
            ;
            var l = t.extend(!0, {}, t.fn.dotdotdot.defaults, e)
              , s = {}
              , c = {}
              , u = null
              , g = null;
            return l.lastCharacter.remove instanceof Array || (l.lastCharacter.remove = t.fn.dotdotdot.defaultArrays.lastCharacter.remove),
            l.lastCharacter.noEllipsis instanceof Array || (l.lastCharacter.noEllipsis = t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),
            s.afterElement = h(l.after, o),
            s.isTruncated = !1,
            s.dotId = p++,
            o.data("dotdotdot", !0).bind_events().trigger("update.dot"),
            l.watch && o.watch(),
            o
        }
        ,
        t.fn.dotdotdot.defaults = {
            ellipsis: "... ",
            wrap: "word",
            fallbackToLetter: !0,
            lastCharacter: {},
            tolerance: 0,
            callback: null,
            after: null,
            height: null,
            watch: !1,
            windowResizeFix: !0
        },
        t.fn.dotdotdot.defaultArrays = {
            lastCharacter: {
                remove: [" ", "　", ",", ";", ".", "!", "?"],
                noEllipsis: []
            }
        },
        t.fn.dotdotdot.debug = function(t) {}
        ;
        var p = 1
          , g = t.fn.html;
        t.fn.html = function(n) {
            return n != e && !t.isFunction(n) && this.data("dotdotdot") ? this.trigger("update", [n]) : g.apply(this, arguments)
        }
        ;
        var v = t.fn.text;
        t.fn.text = function(n) {
            return n != e && !t.isFunction(n) && this.data("dotdotdot") ? (n = t("<div />").text(n).html(),
            this.trigger("update", [n])) : v.apply(this, arguments)
        }
    }
}(jQuery),
jQuery(document).ready(function(t) {
    t(".dot-ellipsis").each(function() {
        var e = t(this).hasClass("dot-resize-update")
          , n = t(this).hasClass("dot-timer-update")
          , r = 0
          , o = t(this).attr("class").split(/\s+/);
        t.each(o, function(t, e) {
            var n = e.match(/^dot-height-(\d+)$/);
            null !== n && (r = Number(n[1]))
        });
        var a = new Object;
        n && (a.watch = !0),
        e && (a.watch = "window"),
        r > 0 && (a.height = r),
        t(this).dotdotdot(a)
    })
}),
jQuery(window).load(function() {
    jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot")
});
(function() {
    function n(n, t) {
        if (n !== t) {
            var r = n === n
              , e = t === t;
            if (n > t || !r || "undefined" == typeof n && e)
                return 1;
            if (n < t || !e || "undefined" == typeof t && r)
                return -1
        }
        return 0
    }
    function t(n, t, r) {
        if (t !== t)
            return p(n, r);
        for (var e = (r || 0) - 1, u = n.length; ++e < u; )
            if (n[e] === t)
                return e;
        return -1
    }
    function r(n, t) {
        var r = n.length;
        for (n.sort(t); r--; )
            n[r] = n[r].value;
        return n
    }
    function e(n) {
        return "string" == typeof n ? n : null == n ? "" : n + ""
    }
    function u(n) {
        return n.charCodeAt(0)
    }
    function i(n, t) {
        for (var r = -1, e = n.length; ++r < e && t.indexOf(n.charAt(r)) > -1; )
            ;
        return r
    }
    function o(n, t) {
        for (var r = n.length; r-- && t.indexOf(n.charAt(r)) > -1; )
            ;
        return r
    }
    function f(t, r) {
        return n(t.criteria, r.criteria) || t.index - r.index
    }
    function a(t, r) {
        for (var e = -1, u = t.criteria, i = r.criteria, o = u.length; ++e < o; ) {
            var f = n(u[e], i[e]);
            if (f)
                return f
        }
        return t.index - r.index
    }
    function c(n) {
        return Bn[n]
    }
    function l(n) {
        return Dn[n]
    }
    function s(n) {
        return "\\" + qn[n]
    }
    function p(n, t, r) {
        for (var e = n.length, u = r ? t || e : (t || 0) - 1; r ? u-- : ++u < e; ) {
            var i = n[u];
            if (i !== i)
                return u
        }
        return -1
    }
    function h(n) {
        return n && "object" == typeof n || !1
    }
    function v(n) {
        return n <= 160 && n >= 9 && n <= 13 || 32 == n || 160 == n || 5760 == n || 6158 == n || n >= 8192 && (n <= 8202 || 8232 == n || 8233 == n || 8239 == n || 8287 == n || 12288 == n || 65279 == n)
    }
    function g(n, t) {
        for (var r = -1, e = n.length, u = -1, i = []; ++r < e; )
            n[r] === t && (n[r] = D,
            i[++u] = r);
        return i
    }
    function d(n, t) {
        for (var r, e = -1, u = n.length, i = -1, o = []; ++e < u; ) {
            var f = n[e]
              , a = t ? t(f, e, n) : f;
            e && r === a || (r = a,
            o[++i] = f)
        }
        return o
    }
    function y(n) {
        for (var t = -1, r = n.length; ++t < r && v(n.charCodeAt(t)); )
            ;
        return t
    }
    function _(n) {
        for (var t = n.length; t-- && v(n.charCodeAt(t)); )
            ;
        return t
    }
    function w(n) {
        return zn[n]
    }
    function m(v) {
        function Y(n) {
            if (h(n) && !Mo(n)) {
                if (n instanceof Z)
                    return n;
                if (Ki.call(n, "__wrapped__"))
                    return new Z(n.__wrapped__,n.__chain__,Hn(n.__actions__))
            }
            return new Z(n)
        }
        function Z(n, t, r) {
            this.__actions__ = r || [],
            this.__chain__ = !!t,
            this.__wrapped__ = n
        }
        function Q(n) {
            this.actions = null,
            this.dir = 1,
            this.dropCount = 0,
            this.filtered = !1,
            this.iteratees = null,
            this.takeCount = xo,
            this.views = null,
            this.wrapped = n
        }
        function Bn() {
            var n = this.actions
              , t = this.iteratees
              , r = this.views
              , e = new Q(this.wrapped);
            return e.actions = n ? Hn(n) : null,
            e.dir = this.dir,
            e.dropCount = this.dropCount,
            e.filtered = this.filtered,
            e.iteratees = t ? Hn(t) : null,
            e.takeCount = this.takeCount,
            e.views = r ? Hn(r) : null,
            e
        }
        function Dn() {
            var n = this.filtered
              , t = n ? new Q(this) : this.clone();
            return t.dir = this.dir * -1,
            t.filtered = n,
            t
        }
        function zn() {
            var n = this.wrapped.value();
            if (!Mo(n))
                return Yt(n, this.actions);
            var t = this.dir
              , r = t < 0
              , e = n.length
              , u = dr(0, e, this.views)
              , i = u.start
              , o = u.end
              , f = this.dropCount
              , a = go(o - i, this.takeCount - f)
              , c = r ? o : i - 1
              , l = this.iteratees
              , s = l ? l.length : 0
              , p = 0
              , h = [];
            n: for (; e-- && p < a; ) {
                c += t;
                for (var v = -1, g = n[c]; ++v < s; ) {
                    var d = l[v]
                      , y = d.iteratee
                      , _ = y(g, c, n)
                      , w = d.type;
                    if (w == L)
                        g = _;
                    else if (!_) {
                        if (w == U)
                            continue n;
                        break n
                    }
                }
                f ? f-- : h[p++] = g
            }
            return r ? h.reverse() : h
        }
        function Mn() {
            this.__data__ = {}
        }
        function qn(n) {
            return this.has(n) && delete this.__data__[n]
        }
        function Kn(n) {
            return "__proto__" == n ? b : this.__data__[n]
        }
        function Vn(n) {
            return "__proto__" != n && Ki.call(this.__data__, n)
        }
        function Yn(n, t) {
            return "__proto__" != n && (this.__data__[n] = t),
            this
        }
        function Gn(n) {
            var t = n ? n.length : 0;
            for (this.data = {
                hash: so(null),
                set: new uo
            }; t--; )
                this.push(n[t])
        }
        function Xn(n, t) {
            var r = n.data
              , e = "string" == typeof t || mu(t) ? r.set.has(t) : r.hash[t];
            return e ? 0 : -1
        }
        function Zn(n) {
            var t = this.data;
            "string" == typeof n || mu(n) ? t.set.add(n) : t.hash[n] = !0
        }
        function Hn(n, t) {
            var r = -1
              , e = n.length;
            for (t || (t = Ci(e)); ++r < e; )
                t[r] = n[r];
            return t
        }
        function Qn(n, t) {
            for (var r = -1, e = n.length; ++r < e && t(n[r], r, n) !== !1; )
                ;
            return n
        }
        function nt(n, t) {
            for (var r = n.length; r-- && t(n[r], r, n) !== !1; )
                ;
            return n
        }
        function tt(n, t) {
            for (var r = -1, e = n.length; ++r < e; )
                if (!t(n[r], r, n))
                    return !1;
            return !0
        }
        function rt(n, t) {
            for (var r = -1, e = n.length, u = -1, i = []; ++r < e; ) {
                var o = n[r];
                t(o, r, n) && (i[++u] = o)
            }
            return i
        }
        function et(n, t) {
            for (var r = -1, e = n.length, u = Ci(e); ++r < e; )
                u[r] = t(n[r], r, n);
            return u
        }
        function ut(n) {
            for (var t = -1, r = n.length, e = bo; ++t < r; ) {
                var u = n[t];
                u > e && (e = u)
            }
            return e
        }
        function it(n) {
            for (var t = -1, r = n.length, e = xo; ++t < r; ) {
                var u = n[t];
                u < e && (e = u)
            }
            return e
        }
        function ot(n, t, r, e) {
            var u = -1
              , i = n.length;
            for (e && i && (r = n[++u]); ++u < i; )
                r = t(r, n[u], u, n);
            return r
        }
        function ft(n, t, r, e) {
            var u = n.length;
            for (e && u && (r = n[--u]); u--; )
                r = t(r, n[u], u, n);
            return r
        }
        function at(n, t) {
            for (var r = -1, e = n.length; ++r < e; )
                if (t(n[r], r, n))
                    return !0;
            return !1
        }
        function ct(n, t) {
            return "undefined" == typeof n ? t : n
        }
        function lt(n, t, r, e) {
            return "undefined" != typeof n && Ki.call(e, r) ? n : t
        }
        function st(n, t, r) {
            var e = Vo(t);
            if (!r)
                return ht(t, n, e);
            for (var u = -1, i = e.length; ++u < i; ) {
                var o = e[u]
                  , f = n[o]
                  , a = r(f, t[o], o, n, t);
                (a === a ? a === f : f !== f) && ("undefined" != typeof f || o in n) || (n[o] = a)
            }
            return n
        }
        function pt(n, t) {
            for (var r = -1, e = n.length, u = Ar(e), i = t.length, o = Ci(i); ++r < i; ) {
                var f = t[r];
                u ? (f = parseFloat(f),
                o[r] = br(f, e) ? n[f] : b) : o[r] = n[f]
            }
            return o
        }
        function ht(n, t, r) {
            r || (r = t,
            t = {});
            for (var e = -1, u = r.length; ++e < u; ) {
                var i = r[e];
                t[i] = n[i]
            }
            return t
        }
        function vt(n, t) {
            for (var r = -1, e = t.length; ++r < e; ) {
                var u = t[r];
                n[u] = cr(n[u], A, n)
            }
            return n
        }
        function gt(n, t, r) {
            var u = typeof n;
            return "function" == u ? "undefined" != typeof t && mr(n) ? Xt(n, t, r) : n : null == n ? mi : "object" == u ? Ut(n, !r) : Bt(r ? e(n) : n)
        }
        function dt(n, t, r, e, u, i, o) {
            var f;
            if (r && (f = u ? r(n, e, u) : r(n)),
            "undefined" != typeof f)
                return f;
            if (!mu(n))
                return n;
            var a = Mo(n);
            if (a) {
                if (f = yr(n),
                !t)
                    return Hn(n, f)
            } else {
                var c = Yi.call(n)
                  , l = c == V;
                if (c != J && c != z && (!l || u))
                    return Ln[c] ? wr(n, c, t) : u ? n : {};
                if (f = _r(l ? {} : n),
                !t)
                    return ht(n, f, Vo(n))
            }
            i || (i = []),
            o || (o = []);
            for (var s = i.length; s--; )
                if (i[s] == n)
                    return o[s];
            return i.push(n),
            o.push(f),
            (a ? Qn : kt)(n, function(e, u) {
                f[u] = dt(e, t, r, u, n, i, o)
            }),
            f
        }
        function yt(n, t, r, e) {
            if (!wu(n))
                throw new Bi(B);
            return io(function() {
                n.apply(b, qt(r, e))
            }, t)
        }
        function _t(n, r) {
            var e = n ? n.length : 0
              , u = [];
            if (!e)
                return u;
            var i = -1
              , o = gr()
              , f = o == t
              , a = f && r.length >= 200 && So(r)
              , c = r.length;
            a && (o = Xn,
            f = !1,
            r = a);
            n: for (; ++i < e; ) {
                var l = n[i];
                if (f && l === l) {
                    for (var s = c; s--; )
                        if (r[s] === l)
                            continue n;
                    u.push(l)
                } else
                    o(r, l) < 0 && u.push(l)
            }
            return u
        }
        function wt(n, t) {
            var r = n ? n.length : 0;
            if (!Ar(r))
                return kt(n, t);
            for (var e = -1, u = Sr(n); ++e < r && t(u[e], e, u) !== !1; )
                ;
            return n
        }
        function mt(n, t) {
            var r = n ? n.length : 0;
            if (!Ar(r))
                return Ot(n, t);
            for (var e = Sr(n); r-- && t(e[r], r, e) !== !1; )
                ;
            return n
        }
        function bt(n, t) {
            var r = !0;
            return wt(n, function(n, e, u) {
                return r = !!t(n, e, u)
            }),
            r
        }
        function xt(n, t) {
            var r = [];
            return wt(n, function(n, e, u) {
                t(n, e, u) && r.push(n)
            }),
            r
        }
        function At(n, t, r, e) {
            var u;
            return r(n, function(n, r, i) {
                if (t(n, r, i))
                    return u = e ? r : n,
                    !1
            }),
            u
        }
        function jt(n, t, r, e) {
            for (var u = (e || 0) - 1, i = n.length, o = -1, f = []; ++u < i; ) {
                var a = n[u];
                if (h(a) && Ar(a.length) && (Mo(a) || pu(a))) {
                    t && (a = jt(a, t, r));
                    var c = -1
                      , l = a.length;
                    for (f.length += l; ++c < l; )
                        f[++o] = a[c]
                } else
                    r || (f[++o] = a)
            }
            return f
        }
        function Et(n, t, r) {
            for (var e = -1, u = Sr(n), i = r(n), o = i.length; ++e < o; ) {
                var f = i[e];
                if (t(u[f], f, u) === !1)
                    break
            }
            return n
        }
        function Rt(n, t, r) {
            for (var e = Sr(n), u = r(n), i = u.length; i--; ) {
                var o = u[i];
                if (t(e[o], o, e) === !1)
                    break
            }
            return n
        }
        function It(n, t) {
            return Et(n, t, qu)
        }
        function kt(n, t) {
            return Et(n, t, Vo)
        }
        function Ot(n, t) {
            return Rt(n, t, Vo)
        }
        function Ct(n, t) {
            for (var r = -1, e = t.length, u = -1, i = []; ++r < e; ) {
                var o = t[r];
                wu(n[o]) && (i[++u] = o)
            }
            return i
        }
        function Tt(n, t, r) {
            var e = -1
              , u = "function" == typeof t
              , i = n ? n.length : 0
              , o = Ar(i) ? Ci(i) : [];
            return wt(n, function(n) {
                var i = u ? t : null != n && n[t];
                o[++e] = i ? i.apply(n, r) : b
            }),
            o
        }
        function St(n, t, r, e, u, i) {
            if (n === t)
                return 0 !== n || 1 / n == 1 / t;
            var o = typeof n
              , f = typeof t;
            return "function" != o && "object" != o && "function" != f && "object" != f || null == n || null == t ? n !== n && t !== t : Nt(n, t, St, r, e, u, i)
        }
        function Nt(n, t, r, e, u, i, o) {
            var f = Mo(n)
              , a = Mo(t)
              , c = M
              , l = M;
            f || (c = Yi.call(n),
            c == z ? c = J : c != J && (f = ku(n))),
            a || (l = Yi.call(t),
            l == z ? l = J : l != J && (a = ku(t)));
            var s = c == J
              , p = l == J
              , h = c == l;
            if (h && !f && !s)
                return sr(n, t, c);
            var v = s && Ki.call(n, "__wrapped__")
              , g = p && Ki.call(t, "__wrapped__");
            if (v || g)
                return r(v ? n.value() : n, g ? t.value() : t, e, u, i, o);
            if (!h)
                return !1;
            i || (i = []),
            o || (o = []);
            for (var d = i.length; d--; )
                if (i[d] == n)
                    return o[d] == t;
            i.push(n),
            o.push(t);
            var y = (f ? lr : pr)(n, t, r, e, u, i, o);
            return i.pop(),
            o.pop(),
            y
        }
        function Wt(n, t, r, e, u) {
            var i = t.length;
            if (null == n)
                return !i;
            for (var o = -1, f = !u; ++o < i; )
                if (f && e[o] ? r[o] !== n[t[o]] : !Ki.call(n, t[o]))
                    return !1;
            for (o = -1; ++o < i; ) {
                var a = t[o];
                if (f && e[o])
                    var c = Ki.call(n, a);
                else {
                    var l = n[a]
                      , s = r[o];
                    c = u ? u(l, s, a) : b,
                    "undefined" == typeof c && (c = St(s, l, u, !0))
                }
                if (!c)
                    return !1
            }
            return !0
        }
        function Ft(n, t) {
            var r = [];
            return wt(n, function(n, e, u) {
                r.push(t(n, e, u))
            }),
            r
        }
        function Ut(n, t) {
            var r = Vo(n)
              , e = r.length;
            if (1 == e) {
                var u = r[0]
                  , i = n[u];
                if (jr(i))
                    return function(n) {
                        return null != n && i === n[u] && Ki.call(n, u)
                    }
            }
            t && (n = dt(n, !0));
            for (var o = Ci(e), f = Ci(e); e--; )
                i = n[r[e]],
                o[e] = i,
                f[e] = jr(i);
            return function(n) {
                return Wt(n, r, o, f)
            }
        }
        function Lt(n, t, r, e, u) {
            var i = Ar(t.length) && (Mo(t) || ku(t));
            return (i ? Qn : kt)(t, function(t, o, f) {
                if (h(t))
                    return e || (e = []),
                    u || (u = []),
                    $t(n, f, o, Lt, r, e, u);
                var a = n[o]
                  , c = r ? r(a, t, o, n, f) : b
                  , l = "undefined" == typeof c;
                l && (c = t),
                !i && "undefined" == typeof c || !l && (c === c ? c === a : a !== a) || (n[o] = c)
            }),
            n
        }
        function $t(n, t, r, e, u, i, o) {
            for (var f = i.length, a = t[r]; f--; )
                if (i[f] == a)
                    return void (n[r] = o[f]);
            var c = n[r]
              , l = u ? u(c, a, r, n, t) : b
              , s = "undefined" == typeof l;
            s && (l = a,
            Ar(a.length) && (Mo(a) || ku(a)) ? l = Mo(c) ? c : c ? Hn(c) : [] : (Po(a) || pu(a)) && (l = pu(c) ? Tu(c) : Po(c) ? c : {})),
            i.push(a),
            o.push(l),
            s ? n[r] = e(l, a, u, i, o) : (l === l ? l !== c : c === c) && (n[r] = l)
        }
        function Bt(n) {
            return function(t) {
                return null == t ? b : t[n]
            }
        }
        function Dt(t, r) {
            var e = r.length
              , u = pt(t, r);
            for (r.sort(n); e--; ) {
                var i = parseFloat(r[e]);
                if (i != o && br(i)) {
                    var o = i;
                    oo.call(t, i, 1)
                }
            }
            return u
        }
        function zt(n, t) {
            return n + no(mo() * (t - n + 1))
        }
        function Mt(n, t, r, e, u) {
            return u(n, function(n, u, i) {
                r = e ? (e = !1,
                n) : t(r, n, u, i)
            }),
            r
        }
        function qt(n, t, r) {
            var e = -1
              , u = n.length;
            t = null == t ? 0 : +t || 0,
            t < 0 && (t = -t > u ? 0 : u + t),
            r = "undefined" == typeof r || r > u ? u : +r || 0,
            r < 0 && (r += u),
            u = t > r ? 0 : r - t;
            for (var i = Ci(u); ++e < u; )
                i[e] = n[e + t];
            return i
        }
        function Pt(n, t) {
            var r;
            return wt(n, function(n, e, u) {
                return r = t(n, e, u),
                !r
            }),
            !!r
        }
        function Kt(n, r) {
            var e = -1
              , u = gr()
              , i = n.length
              , o = u == t
              , f = o && i >= 200
              , a = f && So()
              , c = [];
            a ? (u = Xn,
            o = !1) : (f = !1,
            a = r ? [] : c);
            n: for (; ++e < i; ) {
                var l = n[e]
                  , s = r ? r(l, e, n) : l;
                if (o && l === l) {
                    for (var p = a.length; p--; )
                        if (a[p] === s)
                            continue n;
                    r && a.push(s),
                    c.push(l)
                } else
                    u(a, s) < 0 && ((r || f) && a.push(s),
                    c.push(l))
            }
            return c
        }
        function Vt(n, t) {
            for (var r = -1, e = t.length, u = Ci(e); ++r < e; )
                u[r] = n[t[r]];
            return u
        }
        function Yt(n, t) {
            var r = n;
            r instanceof Q && (r = r.value());
            for (var e = -1, u = t.length; ++e < u; ) {
                var i = [r]
                  , o = t[e];
                ro.apply(i, o.args),
                r = o.func.apply(o.thisArg, i)
            }
            return r
        }
        function Gt(n, t, r) {
            var e = 0
              , u = n ? n.length : e;
            if ("number" == typeof t && t === t && u <= Eo) {
                for (; e < u; ) {
                    var i = e + u >>> 1
                      , o = n[i];
                    (r ? o <= t : o < t) ? e = i + 1 : u = i
                }
                return u
            }
            return Jt(n, t, mi, r)
        }
        function Jt(n, t, r, e) {
            t = r(t);
            for (var u = 0, i = n ? n.length : 0, o = t !== t, f = "undefined" == typeof t; u < i; ) {
                var a = no((u + i) / 2)
                  , c = r(n[a])
                  , l = c === c;
                if (o)
                    var s = l || e;
                else
                    s = f ? l && (e || "undefined" != typeof c) : e ? c <= t : c < t;
                s ? u = a + 1 : i = a
            }
            return go(i, jo)
        }
        function Xt(n, t, r) {
            if ("function" != typeof n)
                return mi;
            if ("undefined" == typeof t)
                return n;
            switch (r) {
            case 1:
                return function(r) {
                    return n.call(t, r)
                }
                ;
            case 3:
                return function(r, e, u) {
                    return n.call(t, r, e, u)
                }
                ;
            case 4:
                return function(r, e, u, i) {
                    return n.call(t, r, e, u, i)
                }
                ;
            case 5:
                return function(r, e, u, i, o) {
                    return n.call(t, r, e, u, i, o)
                }
            }
            return function() {
                return n.apply(t, arguments)
            }
        }
        function Zt(n) {
            return Zi.call(n, 0)
        }
        function Ht(n, t, r) {
            for (var e = r.length, u = -1, i = vo(n.length - e, 0), o = -1, f = t.length, a = Ci(i + f); ++o < f; )
                a[o] = t[o];
            for (; ++u < e; )
                a[r[u]] = n[u];
            for (; i--; )
                a[o++] = n[u++];
            return a
        }
        function Qt(n, t, r) {
            for (var e = -1, u = r.length, i = -1, o = vo(n.length - u, 0), f = -1, a = t.length, c = Ci(o + a); ++i < o; )
                c[i] = n[i];
            for (var l = i; ++f < a; )
                c[l + f] = t[f];
            for (; ++e < u; )
                c[l + r[e]] = n[i++];
            return c
        }
        function nr(n, t) {
            return function(r, e, u) {
                var i = t ? t() : {};
                if (e = vr(e, u, 3),
                Mo(r))
                    for (var o = -1, f = r.length; ++o < f; ) {
                        var a = r[o];
                        n(i, a, e(a, o, r), r)
                    }
                else
                    wt(r, function(t, r, u) {
                        n(i, t, e(t, r, u), u)
                    });
                return i
            }
        }
        function tr(n) {
            return function() {
                var t = arguments.length
                  , r = arguments[0];
                if (t < 2 || null == r)
                    return r;
                if (t > 3 && xr(arguments[1], arguments[2], arguments[3]) && (t = 2),
                t > 3 && "function" == typeof arguments[t - 2])
                    var e = Xt(arguments[--t - 1], arguments[t--], 5);
                else
                    t > 2 && "function" == typeof arguments[t - 1] && (e = arguments[--t]);
                for (var u = 0; ++u < t; ) {
                    var i = arguments[u];
                    i && n(r, i, e)
                }
                return r
            }
        }
        function rr(n, t) {
            function r() {
                return (this instanceof r ? e : n).apply(t, arguments)
            }
            var e = ur(n);
            return r
        }
        function er(n) {
            return function(t) {
                for (var r = -1, e = di(ni(t)), u = e.length, i = ""; ++r < u; )
                    i = n(i, e[r], r);
                return i
            }
        }
        function ur(n) {
            return function() {
                var t = Co(n.prototype)
                  , r = n.apply(t, arguments);
                return mu(r) ? r : t
            }
        }
        function ir(n, t) {
            return function(r, e, i) {
                i && xr(r, e, i) && (e = null);
                var o = vr()
                  , f = null == e;
                if (o === gt && f || (f = !1,
                e = o(e, i, 3)),
                f) {
                    var a = Mo(r);
                    if (a || !Iu(r))
                        return n(a ? r : Tr(r));
                    e = u
                }
                return hr(r, e, t)
            }
        }
        function or(n, t, r, e, u, i, o, f, a, c) {
            function l() {
                for (var m = arguments.length, b = m, x = Ci(m); b--; )
                    x[b] = arguments[b];
                if (e && (x = Ht(x, e, u)),
                i && (x = Qt(x, i, o)),
                v || y) {
                    var E = l.placeholder
                      , R = g(x, E);
                    if (m -= R.length,
                    m < c) {
                        var I = f ? Hn(f) : null
                          , C = vo(c - m, 0)
                          , T = v ? R : null
                          , S = v ? null : R
                          , N = v ? x : null
                          , W = v ? null : x;
                        t |= v ? k : O,
                        t &= ~(v ? O : k),
                        d || (t &= ~(A | j));
                        var F = or(n, t, r, N, T, W, S, I, a, C);
                        return F.placeholder = E,
                        F
                    }
                }
                var U = p ? r : this;
                return h && (n = U[w]),
                f && (x = kr(x, f)),
                s && a < x.length && (x.length = a),
                (this instanceof l ? _ || ur(n) : n).apply(U, x)
            }
            var s = t & T
              , p = t & A
              , h = t & j
              , v = t & R
              , d = t & E
              , y = t & I
              , _ = !h && ur(n)
              , w = n;
            return l
        }
        function fr(n, t, r) {
            var u = n.length;
            if (t = +t,
            u >= t || !po(t))
                return "";
            var i = t - u;
            return r = null == r ? " " : e(r),
            ai(r, Hi(i / r.length)).slice(0, i)
        }
        function ar(n, t, r, e) {
            function u() {
                for (var t = -1, f = arguments.length, a = -1, c = e.length, l = Ci(f + c); ++a < c; )
                    l[a] = e[a];
                for (; f--; )
                    l[a++] = arguments[++t];
                return (this instanceof u ? o : n).apply(i ? r : this, l)
            }
            var i = t & A
              , o = ur(n);
            return u
        }
        function cr(n, t, r, e, u, i, o, f) {
            var a = t & j;
            if (!a && !wu(n))
                throw new Bi(B);
            var c = e ? e.length : 0;
            if (c || (t &= ~(k | O),
            e = u = null),
            c -= u ? u.length : 0,
            t & O) {
                var l = e
                  , s = u;
                e = u = null
            }
            var p = !a && No(n)
              , h = [n, t, r, e, u, l, s, i, o, f];
            if (p && p !== !0 && (Er(h, p),
            t = h[1],
            f = h[9]),
            h[9] = null == f ? a ? 0 : n.length : vo(f - c, 0) || 0,
            t == A)
                var v = rr(h[0], h[2]);
            else
                v = t != k && t != (A | k) || h[4].length ? or.apply(null, h) : ar.apply(null, h);
            var g = p ? To : Wo;
            return g(v, h)
        }
        function lr(n, t, r, e, u, i, o) {
            var f = -1
              , a = n.length
              , c = t.length
              , l = !0;
            if (a != c && !(u && c > a))
                return !1;
            for (; l && ++f < a; ) {
                var s = n[f]
                  , p = t[f];
                if (l = b,
                e && (l = u ? e(p, s, f) : e(s, p, f)),
                "undefined" == typeof l)
                    if (u)
                        for (var h = c; h-- && (p = t[h],
                        !(l = s && s === p || r(s, p, e, u, i, o))); )
                            ;
                    else
                        l = s && s === p || r(s, p, e, u, i, o)
            }
            return !!l
        }
        function sr(n, t, r) {
            switch (r) {
            case q:
            case P:
                return +n == +t;
            case K:
                return n.name == t.name && n.message == t.message;
            case G:
                return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
            case X:
            case H:
                return n == e(t)
            }
            return !1
        }
        function pr(n, t, r, e, u, i, o) {
            var f = Vo(n)
              , a = f.length
              , c = Vo(t)
              , l = c.length;
            if (a != l && !u)
                return !1;
            for (var s, p = -1; ++p < a; ) {
                var h = f[p]
                  , v = Ki.call(t, h);
                if (v) {
                    var g = n[h]
                      , d = t[h];
                    v = b,
                    e && (v = u ? e(d, g, h) : e(g, d, h)),
                    "undefined" == typeof v && (v = g && g === d || r(g, d, e, u, i, o))
                }
                if (!v)
                    return !1;
                s || (s = "constructor" == h)
            }
            if (!s) {
                var y = n.constructor
                  , _ = t.constructor;
                if (y != _ && "constructor"in n && "constructor"in t && !("function" == typeof y && y instanceof y && "function" == typeof _ && _ instanceof _))
                    return !1
            }
            return !0
        }
        function hr(n, t, r) {
            var e = r ? xo : bo
              , u = e
              , i = u;
            return wt(n, function(n, o, f) {
                var a = t(n, o, f);
                ((r ? a < u : a > u) || a === e && a === i) && (u = a,
                i = n)
            }),
            i
        }
        function vr(n, t, r) {
            var e = Y.callback || _i;
            return e = e === _i ? gt : e,
            r ? e(n, t, r) : e
        }
        function gr(n, r, e) {
            var u = Y.indexOf || Kr;
            return u = u === Kr ? t : u,
            n ? u(n, r, e) : u
        }
        function dr(n, t, r) {
            for (var e = -1, u = r ? r.length : 0; ++e < u; ) {
                var i = r[e]
                  , o = i.size;
                switch (i.type) {
                case "drop":
                    n += o;
                    break;
                case "dropRight":
                    t -= o;
                    break;
                case "take":
                    t = go(t, n + o);
                    break;
                case "takeRight":
                    n = vo(n, t - o)
                }
            }
            return {
                start: n,
                end: t
            }
        }
        function yr(n) {
            var t = n.length
              , r = new n.constructor(t);
            return t && "string" == typeof n[0] && Ki.call(n, "index") && (r.index = n.index,
            r.input = n.input),
            r
        }
        function _r(n) {
            var t = n.constructor;
            return "function" == typeof t && t instanceof t || (t = Ui),
            new t
        }
        function wr(n, t, r) {
            var e = n.constructor;
            switch (t) {
            case nn:
                return Zt(n);
            case q:
            case P:
                return new e((+n));
            case tn:
            case rn:
            case en:
            case un:
            case on:
            case fn:
            case an:
            case cn:
            case ln:
                var u = n.buffer;
                return new e(r ? Zt(u) : u,n.byteOffset,n.length);
            case G:
            case H:
                return new e(n);
            case X:
                var i = new e(n.source,xn.exec(n));
                i.lastIndex = n.lastIndex
            }
            return i
        }
        function mr(n) {
            var t = Y.support
              , r = !(t.funcNames ? n.name : t.funcDecomp);
            if (!r) {
                var e = qi.call(n);
                t.funcNames || (r = !An.test(e)),
                r || (r = Cn.test(e) || Au(n),
                To(n, r))
            }
            return r
        }
        function br(n, t) {
            return n = +n,
            t = null == t ? Io : t,
            n > -1 && n % 1 == 0 && n < t
        }
        function xr(n, t, r) {
            if (!mu(r))
                return !1;
            var e = typeof t;
            if ("number" == e)
                var u = r.length
                  , i = Ar(u) && br(t, u);
            else
                i = "string" == e && t in n;
            return i && r[t] === n
        }
        function Ar(n) {
            return "number" == typeof n && n > -1 && n % 1 == 0 && n <= Io
        }
        function jr(n) {
            return n === n && (0 === n ? 1 / n > 0 : !mu(n))
        }
        function Er(n, t) {
            var r = n[1]
              , e = t[1]
              , u = r | e
              , i = T | C
              , o = A | j
              , f = i | o | E | I
              , a = r & T && !(e & T)
              , c = r & C && !(e & C)
              , l = (c ? n : t)[7]
              , s = (a ? n : t)[8]
              , p = !(r >= C && e > o || r > o && e >= C)
              , h = u >= i && u <= f && (r < C || (c || a) && l.length <= s);
            if (!p && !h)
                return n;
            e & A && (n[2] = t[2],
            u |= r & A ? 0 : E);
            var v = t[3];
            if (v) {
                var d = n[3];
                n[3] = d ? Ht(d, v, t[4]) : Hn(v),
                n[4] = d ? g(n[3], D) : Hn(t[4])
            }
            return v = t[5],
            v && (d = n[5],
            n[5] = d ? Qt(d, v, t[6]) : Hn(v),
            n[6] = d ? g(n[5], D) : Hn(t[6])),
            v = t[7],
            v && (n[7] = Hn(v)),
            e & T && (n[8] = null == n[8] ? t[8] : go(n[8], t[8])),
            null == n[9] && (n[9] = t[9]),
            n[0] = t[0],
            n[1] = u,
            n
        }
        function Rr(n, t) {
            n = Sr(n);
            for (var r = -1, e = t.length, u = {}; ++r < e; ) {
                var i = t[r];
                i in n && (u[i] = n[i])
            }
            return u
        }
        function Ir(n, t) {
            var r = {};
            return It(n, function(n, e, u) {
                t(n, e, u) && (r[e] = n)
            }),
            r
        }
        function kr(n, t) {
            for (var r = n.length, e = go(t.length, r), u = Hn(n); e--; ) {
                var i = t[e];
                n[e] = br(i, r) ? u[i] : b
            }
            return n
        }
        function Or(n) {
            var t;
            Y.support;
            if (!h(n) || Yi.call(n) != J || !Ki.call(n, "constructor") && (t = n.constructor,
            "function" == typeof t && !(t instanceof t)))
                return !1;
            var r;
            return It(n, function(n, t) {
                r = t
            }),
            "undefined" == typeof r || Ki.call(n, r)
        }
        function Cr(n) {
            for (var t = qu(n), r = t.length, e = r && n.length, u = Y.support, i = e && Ar(e) && (Mo(n) || u.nonEnumArgs && pu(n)), o = -1, f = []; ++o < r; ) {
                var a = t[o];
                (i && br(a, e) || Ki.call(n, a)) && f.push(a)
            }
            return f
        }
        function Tr(n) {
            return null == n ? [] : Ar(n.length) ? mu(n) ? n : Ui(n) : Xu(n)
        }
        function Sr(n) {
            return mu(n) ? n : Ui(n)
        }
        function Nr(n, t, r) {
            t = (r ? xr(n, t, r) : null == t) ? 1 : vo(+t || 1, 1);
            for (var e = 0, u = n ? n.length : 0, i = -1, o = Ci(Hi(u / t)); e < u; )
                o[++i] = qt(n, e, e += t);
            return o
        }
        function Wr(n) {
            for (var t = -1, r = n ? n.length : 0, e = -1, u = []; ++t < r; ) {
                var i = n[t];
                i && (u[++e] = i)
            }
            return u
        }
        function Fr() {
            for (var n = -1, t = arguments.length; ++n < t; ) {
                var r = arguments[n];
                if (Mo(r) || pu(r))
                    break
            }
            return _t(r, jt(arguments, !1, !0, ++n))
        }
        function Ur(n, t, r) {
            var e = n ? n.length : 0;
            return e ? ((r ? xr(n, t, r) : null == t) && (t = 1),
            qt(n, t < 0 ? 0 : t)) : []
        }
        function Lr(n, t, r) {
            var e = n ? n.length : 0;
            return e ? ((r ? xr(n, t, r) : null == t) && (t = 1),
            t = e - (+t || 0),
            qt(n, 0, t < 0 ? 0 : t)) : []
        }
        function $r(n, t, r) {
            var e = n ? n.length : 0;
            if (!e)
                return [];
            for (t = vr(t, r, 3); e-- && t(n[e], e, n); )
                ;
            return qt(n, 0, e + 1)
        }
        function Br(n, t, r) {
            var e = n ? n.length : 0;
            if (!e)
                return [];
            var u = -1;
            for (t = vr(t, r, 3); ++u < e && t(n[u], u, n); )
                ;
            return qt(n, u)
        }
        function Dr(n, t, r) {
            var e = -1
              , u = n ? n.length : 0;
            for (t = vr(t, r, 3); ++e < u; )
                if (t(n[e], e, n))
                    return e;
            return -1
        }
        function zr(n, t, r) {
            var e = n ? n.length : 0;
            for (t = vr(t, r, 3); e--; )
                if (t(n[e], e, n))
                    return e;
            return -1
        }
        function Mr(n) {
            return n ? n[0] : b
        }
        function qr(n, t, r) {
            var e = n ? n.length : 0;
            return r && xr(n, t, r) && (t = !1),
            e ? jt(n, t) : []
        }
        function Pr(n) {
            var t = n ? n.length : 0;
            return t ? jt(n, !0) : []
        }
        function Kr(n, r, e) {
            var u = n ? n.length : 0;
            if (!u)
                return -1;
            if ("number" == typeof e)
                e = e < 0 ? vo(u + e, 0) : e || 0;
            else if (e) {
                var i = Gt(n, r)
                  , o = n[i];
                return (r === r ? r === o : o !== o) ? i : -1
            }
            return t(n, r, e)
        }
        function Vr(n) {
            return Lr(n, 1)
        }
        function Yr() {
            for (var n = [], r = -1, e = arguments.length, u = [], i = gr(), o = i == t; ++r < e; ) {
                var f = arguments[r];
                (Mo(f) || pu(f)) && (n.push(f),
                u.push(o && f.length >= 120 && So(r && f)))
            }
            e = n.length;
            var a = n[0]
              , c = -1
              , l = a ? a.length : 0
              , s = []
              , p = u[0];
            n: for (; ++c < l; )
                if (f = a[c],
                (p ? Xn(p, f) : i(s, f)) < 0) {
                    for (r = e; --r; ) {
                        var h = u[r];
                        if ((h ? Xn(h, f) : i(n[r], f)) < 0)
                            continue n
                    }
                    p && p.push(f),
                    s.push(f)
                }
            return s
        }
        function Gr(n) {
            var t = n ? n.length : 0;
            return t ? n[t - 1] : b
        }
        function Jr(n, t, r) {
            var e = n ? n.length : 0;
            if (!e)
                return -1;
            var u = e;
            if ("number" == typeof r)
                u = (r < 0 ? vo(e + r, 0) : go(r || 0, e - 1)) + 1;
            else if (r) {
                u = Gt(n, t, !0) - 1;
                var i = n[u];
                return (t === t ? t === i : i !== i) ? u : -1
            }
            if (t !== t)
                return p(n, u, !0);
            for (; u--; )
                if (n[u] === t)
                    return u;
            return -1
        }
        function Xr() {
            var n = arguments[0];
            if (!n || !n.length)
                return n;
            for (var t = 0, r = gr(), e = arguments.length; ++t < e; )
                for (var u = 0, i = arguments[t]; (u = r(n, i, u)) > -1; )
                    oo.call(n, u, 1);
            return n
        }
        function Zr(n) {
            return Dt(n || [], jt(arguments, !1, !1, 1))
        }
        function Hr(n, t, r) {
            var e = -1
              , u = n ? n.length : 0
              , i = [];
            for (t = vr(t, r, 3); ++e < u; ) {
                var o = n[e];
                t(o, e, n) && (i.push(o),
                oo.call(n, e--, 1),
                u--)
            }
            return i
        }
        function Qr(n) {
            return Ur(n, 1)
        }
        function ne(n, t, r) {
            var e = n ? n.length : 0;
            return e ? (r && "number" != typeof r && xr(n, t, r) && (t = 0,
            r = e),
            qt(n, t, r)) : []
        }
        function te(n, t, r, e) {
            var u = vr(r);
            return u === gt && null == r ? Gt(n, t) : Jt(n, t, u(r, e, 1))
        }
        function re(n, t, r, e) {
            var u = vr(r);
            return u === gt && null == r ? Gt(n, t, !0) : Jt(n, t, u(r, e, 1), !0)
        }
        function ee(n, t, r) {
            var e = n ? n.length : 0;
            return e ? ((r ? xr(n, t, r) : null == t) && (t = 1),
            qt(n, 0, t < 0 ? 0 : t)) : []
        }
        function ue(n, t, r) {
            var e = n ? n.length : 0;
            return e ? ((r ? xr(n, t, r) : null == t) && (t = 1),
            t = e - (+t || 0),
            qt(n, t < 0 ? 0 : t)) : []
        }
        function ie(n, t, r) {
            var e = n ? n.length : 0;
            if (!e)
                return [];
            for (t = vr(t, r, 3); e-- && t(n[e], e, n); )
                ;
            return qt(n, e + 1)
        }
        function oe(n, t, r) {
            var e = n ? n.length : 0;
            if (!e)
                return [];
            var u = -1;
            for (t = vr(t, r, 3); ++u < e && t(n[u], u, n); )
                ;
            return qt(n, 0, u)
        }
        function fe() {
            return Kt(jt(arguments, !1, !0))
        }
        function ae(n, r, e, u) {
            var i = n ? n.length : 0;
            if (!i)
                return [];
            "boolean" != typeof r && null != r && (u = e,
            e = xr(n, r, u) ? null : r,
            r = !1);
            var o = vr();
            return o === gt && null == e || (e = o(e, u, 3)),
            r && gr() == t ? d(n, e) : Kt(n, e)
        }
        function ce(n) {
            for (var t = -1, r = (n && n.length && ut(et(n, Pi))) >>> 0, e = Ci(r); ++t < r; )
                e[t] = et(n, Bt(t));
            return e
        }
        function le(n) {
            return _t(n, qt(arguments, 1))
        }
        function se() {
            for (var n = -1, t = arguments.length; ++n < t; ) {
                var r = arguments[n];
                if (Mo(r) || pu(r))
                    var e = e ? _t(e, r).concat(_t(r, e)) : r
            }
            return e ? Kt(e) : []
        }
        function pe() {
            for (var n = arguments.length, t = Ci(n); n--; )
                t[n] = arguments[n];
            return ce(t)
        }
        function he(n, t) {
            var r = -1
              , e = n ? n.length : 0
              , u = {};
            for (!e || t || Mo(n[0]) || (t = []); ++r < e; ) {
                var i = n[r];
                t ? u[i] = t[r] : i && (u[i[0]] = i[1])
            }
            return u
        }
        function ve(n) {
            var t = Y(n);
            return t.__chain__ = !0,
            t
        }
        function ge(n, t, r) {
            return t.call(r, n),
            n
        }
        function de(n, t, r) {
            return t.call(r, n)
        }
        function ye() {
            return ve(this)
        }
        function _e() {
            var n = this.__wrapped__;
            return n instanceof Q ? new Z(n.reverse()) : this.thru(function(n) {
                return n.reverse()
            })
        }
        function we() {
            return this.value() + ""
        }
        function me() {
            return Yt(this.__wrapped__, this.__actions__)
        }
        function be(n) {
            var t = n ? n.length : 0;
            return Ar(t) && (n = Tr(n)),
            pt(n, jt(arguments, !1, !1, 1))
        }
        function xe(n, t, r) {
            var e = n ? n.length : 0;
            return Ar(e) || (n = Xu(n),
            e = n.length),
            !!e && (r = "number" == typeof r ? r < 0 ? vo(e + r, 0) : r || 0 : 0,
            "string" == typeof n || !Mo(n) && Iu(n) ? r < e && n.indexOf(t, r) > -1 : gr(n, t, r) > -1)
        }
        function Ae(n, t, r) {
            var e = Mo(n) ? tt : bt;
            return "function" == typeof t && "undefined" == typeof r || (t = vr(t, r, 3)),
            e(n, t)
        }
        function je(n, t, r) {
            var e = Mo(n) ? rt : xt;
            return t = vr(t, r, 3),
            e(n, t)
        }
        function Ee(n, t, r) {
            if (Mo(n)) {
                var e = Dr(n, t, r);
                return e > -1 ? n[e] : b
            }
            return t = vr(t, r, 3),
            At(n, t, wt)
        }
        function Re(n, t, r) {
            return t = vr(t, r, 3),
            At(n, t, mt)
        }
        function Ie(n, t) {
            return Ee(n, bi(t))
        }
        function ke(n, t, r) {
            return "function" == typeof t && "undefined" == typeof r && Mo(n) ? Qn(n, t) : wt(n, Xt(t, r, 3))
        }
        function Oe(n, t, r) {
            return "function" == typeof t && "undefined" == typeof r && Mo(n) ? nt(n, t) : mt(n, Xt(t, r, 3))
        }
        function Ce(n, t) {
            return Tt(n, t, qt(arguments, 2))
        }
        function Te(n, t, r) {
            var e = Mo(n) ? et : Ft;
            return t = vr(t, r, 3),
            e(n, t)
        }
        function Se(n, t) {
            return Te(n, Ei(t))
        }
        function Ne(n, t, r, e) {
            var u = Mo(n) ? ot : Mt;
            return u(n, vr(t, e, 4), r, arguments.length < 3, wt)
        }
        function We(n, t, r, e) {
            var u = Mo(n) ? ft : Mt;
            return u(n, vr(t, e, 4), r, arguments.length < 3, mt)
        }
        function Fe(n, t, r) {
            var e = Mo(n) ? rt : xt;
            return t = vr(t, r, 3),
            e(n, function(n, r, e) {
                return !t(n, r, e)
            })
        }
        function Ue(n, t, r) {
            if (r ? xr(n, t, r) : null == t) {
                n = Tr(n);
                var e = n.length;
                return e > 0 ? n[zt(0, e - 1)] : b
            }
            var u = Le(n);
            return u.length = go(t < 0 ? 0 : +t || 0, u.length),
            u
        }
        function Le(n) {
            n = Tr(n);
            for (var t = -1, r = n.length, e = Ci(r); ++t < r; ) {
                var u = zt(0, t);
                t != u && (e[t] = e[u]),
                e[u] = n[t]
            }
            return e
        }
        function $e(n) {
            var t = n ? n.length : 0;
            return Ar(t) ? t : Vo(n).length
        }
        function Be(n, t, r) {
            var e = Mo(n) ? at : Pt;
            return "function" == typeof t && "undefined" == typeof r || (t = vr(t, r, 3)),
            e(n, t)
        }
        function De(n, t, e) {
            var u = -1
              , i = n ? n.length : 0
              , o = Ar(i) ? Ci(i) : [];
            return e && xr(n, t, e) && (t = null),
            t = vr(t, e, 3),
            wt(n, function(n, r, e) {
                o[++u] = {
                    criteria: t(n, r, e),
                    index: u,
                    value: n
                }
            }),
            r(o, f)
        }
        function ze(n) {
            var t = arguments;
            t.length > 3 && xr(t[1], t[2], t[3]) && (t = [n, t[1]]);
            var e = -1
              , u = n ? n.length : 0
              , i = jt(t, !1, !1, 1)
              , o = Ar(u) ? Ci(u) : [];
            return wt(n, function(n, t, r) {
                for (var u = i.length, f = Ci(u); u--; )
                    f[u] = null == n ? b : n[i[u]];
                o[++e] = {
                    criteria: f,
                    index: e,
                    value: n
                }
            }),
            r(o, a)
        }
        function Me(n, t) {
            return je(n, bi(t))
        }
        function qe(n, t) {
            if (!wu(t)) {
                if (!wu(n))
                    throw new Bi(B);
                var r = n;
                n = t,
                t = r
            }
            return n = po(n = +n) ? n : 0,
            function() {
                if (--n < 1)
                    return t.apply(this, arguments)
            }
        }
        function Pe(n, t, r) {
            return r && xr(n, t, r) && (t = null),
            t = n && null == t ? n.length : vo(+t || 0, 0),
            cr(n, T, null, null, null, null, t)
        }
        function Ke(n, t) {
            var r;
            if (!wu(t)) {
                if (!wu(n))
                    throw new Bi(B);
                var e = n;
                n = t,
                t = e
            }
            return function() {
                return --n > 0 ? r = t.apply(this, arguments) : t = null,
                r
            }
        }
        function Ve(n, t) {
            var r = A;
            if (arguments.length > 2) {
                var e = qt(arguments, 2)
                  , u = g(e, Ve.placeholder);
                r |= k
            }
            return cr(n, r, t, e, u)
        }
        function Ye(n) {
            return vt(n, arguments.length > 1 ? jt(arguments, !1, !1, 1) : Du(n))
        }
        function Ge(n, t) {
            var r = A | j;
            if (arguments.length > 2) {
                var e = qt(arguments, 2)
                  , u = g(e, Ge.placeholder);
                r |= k
            }
            return cr(t, r, n, e, u)
        }
        function Je(n, t, r) {
            r && xr(n, t, r) && (t = null);
            var e = cr(n, R, null, null, null, null, null, t);
            return e.placeholder = Je.placeholder,
            e
        }
        function Xe(n, t, r) {
            r && xr(n, t, r) && (t = null);
            var e = cr(n, I, null, null, null, null, null, t);
            return e.placeholder = Xe.placeholder,
            e
        }
        function Ze(n, t, r) {
            function e() {
                p && Qi(p),
                a && Qi(a),
                a = p = h = b
            }
            function u() {
                var r = t - (zo() - l);
                if (r <= 0 || r > t) {
                    a && Qi(a);
                    var e = h;
                    a = p = h = b,
                    e && (v = zo(),
                    c = n.apply(s, f),
                    p || a || (f = s = null))
                } else
                    p = io(u, r)
            }
            function i() {
                p && Qi(p),
                a = p = h = b,
                (d || g !== t) && (v = zo(),
                c = n.apply(s, f),
                p || a || (f = s = null))
            }
            function o() {
                if (f = arguments,
                l = zo(),
                s = this,
                h = d && (p || !y),
                g === !1)
                    var r = y && !p;
                else {
                    a || y || (v = l);
                    var e = g - (l - v)
                      , o = e <= 0 || e > g;
                    o ? (a && (a = Qi(a)),
                    v = l,
                    c = n.apply(s, f)) : a || (a = io(i, e))
                }
                return o && p ? p = Qi(p) : p || t === g || (p = io(u, t)),
                r && (o = !0,
                c = n.apply(s, f)),
                !o || p || a || (f = s = null),
                c
            }
            var f, a, c, l, s, p, h, v = 0, g = !1, d = !0;
            if (!wu(n))
                throw new Bi(B);
            if (t = t < 0 ? 0 : t,
            r === !0) {
                var y = !0;
                d = !1
            } else
                mu(r) && (y = r.leading,
                g = "maxWait"in r && vo(+r.maxWait || 0, t),
                d = "trailing"in r ? r.trailing : d);
            return o.cancel = e,
            o
        }
        function He(n) {
            return yt(n, 1, arguments, 1)
        }
        function Qe(n, t) {
            return yt(n, t, arguments, 2)
        }
        function nu() {
            var n = arguments
              , t = n.length;
            if (!t)
                return function() {}
                ;
            if (!tt(n, wu))
                throw new Bi(B);
            return function() {
                for (var r = 0, e = n[r].apply(this, arguments); ++r < t; )
                    e = n[r].call(this, e);
                return e
            }
        }
        function tu() {
            var n = arguments
              , t = n.length - 1;
            if (t < 0)
                return function() {}
                ;
            if (!tt(n, wu))
                throw new Bi(B);
            return function() {
                for (var r = t, e = n[r].apply(this, arguments); r--; )
                    e = n[r].call(this, e);
                return e
            }
        }
        function ru(n, t) {
            if (!wu(n) || t && !wu(t))
                throw new Bi(B);
            var r = function() {
                var e = r.cache
                  , u = t ? t.apply(this, arguments) : arguments[0];
                if (e.has(u))
                    return e.get(u);
                var i = n.apply(this, arguments);
                return e.set(u, i),
                i
            };
            return r.cache = new ru.Cache,
            r
        }
        function eu(n) {
            if (!wu(n))
                throw new Bi(B);
            return function() {
                return !n.apply(this, arguments)
            }
        }
        function uu(n) {
            return Ke(n, 2)
        }
        function iu(n) {
            var t = qt(arguments, 1)
              , r = g(t, iu.placeholder);
            return cr(n, k, null, t, r)
        }
        function ou(n) {
            var t = qt(arguments, 1)
              , r = g(t, ou.placeholder);
            return cr(n, O, null, t, r)
        }
        function fu(n) {
            var t = jt(arguments, !1, !1, 1);
            return cr(n, C, null, null, null, t)
        }
        function au(n, t, r) {
            var e = !0
              , u = !0;
            if (!wu(n))
                throw new Bi(B);
            return r === !1 ? e = !1 : mu(r) && (e = "leading"in r ? !!r.leading : e,
            u = "trailing"in r ? !!r.trailing : u),
            $n.leading = e,
            $n.maxWait = +t,
            $n.trailing = u,
            Ze(n, t, $n)
        }
        function cu(n, t) {
            return t = null == t ? mi : t,
            cr(t, k, null, [n], [])
        }
        function lu(n, t, r, e) {
            return "boolean" != typeof t && null != t && (e = r,
            r = xr(n, t, e) ? null : t,
            t = !1),
            r = "function" == typeof r && Xt(r, e, 1),
            dt(n, t, r)
        }
        function su(n, t, r) {
            return t = "function" == typeof t && Xt(t, r, 1),
            dt(n, !0, t)
        }
        function pu(n) {
            var t = h(n) ? n.length : b;
            return Ar(t) && Yi.call(n) == z || !1
        }
        function hu(n) {
            return n === !0 || n === !1 || h(n) && Yi.call(n) == q || !1
        }
        function vu(n) {
            return h(n) && Yi.call(n) == P || !1
        }
        function gu(n) {
            return n && 1 === n.nodeType && h(n) && Yi.call(n).indexOf("Element") > -1 || !1
        }
        function du(n) {
            if (null == n)
                return !0;
            var t = n.length;
            return Ar(t) && (Mo(n) || Iu(n) || pu(n) || h(n) && wu(n.splice)) ? !t : !Vo(n).length
        }
        function yu(n, t, r, e) {
            if (r = "function" == typeof r && Xt(r, e, 3),
            !r && jr(n) && jr(t))
                return n === t;
            var u = r ? r(n, t) : b;
            return "undefined" == typeof u ? St(n, t, r) : !!u
        }
        function _u(n) {
            return h(n) && "string" == typeof n.message && Yi.call(n) == K || !1
        }
        function wu(n) {
            return "function" == typeof n || !1
        }
        function mu(n) {
            var t = typeof n;
            return "function" == t || n && "object" == t || !1
        }
        function bu(n, t, r, e) {
            var u = Vo(t)
              , i = u.length;
            if (r = "function" == typeof r && Xt(r, e, 3),
            !r && 1 == i) {
                var o = u[0]
                  , f = t[o];
                if (jr(f))
                    return null != n && f === n[o] && Ki.call(n, o)
            }
            for (var a = Ci(i), c = Ci(i); i--; )
                f = a[i] = t[u[i]],
                c[i] = jr(f);
            return Wt(n, u, a, c, r)
        }
        function xu(n) {
            return Eu(n) && n != +n
        }
        function Au(n) {
            return null != n && (Yi.call(n) == V ? Ji.test(qi.call(n)) : h(n) && En.test(n) || !1)
        }
        function ju(n) {
            return null === n
        }
        function Eu(n) {
            return "number" == typeof n || h(n) && Yi.call(n) == G || !1
        }
        function Ru(n) {
            return h(n) && Yi.call(n) == X || !1
        }
        function Iu(n) {
            return "string" == typeof n || h(n) && Yi.call(n) == H || !1
        }
        function ku(n) {
            return h(n) && Ar(n.length) && Un[Yi.call(n)] || !1
        }
        function Ou(n) {
            return "undefined" == typeof n
        }
        function Cu(n) {
            var t = n ? n.length : 0;
            return Ar(t) ? t ? Hn(n) : [] : Xu(n)
        }
        function Tu(n) {
            return ht(n, qu(n))
        }
        function Su(n, t, r) {
            var e = Co(n);
            return r && xr(n, t, r) && (t = null),
            t ? ht(t, e, Vo(t)) : e
        }
        function Nu(n) {
            if (null == n)
                return n;
            var t = Hn(arguments);
            return t.push(ct),
            Ko.apply(b, t)
        }
        function Wu(n, t, r) {
            return t = vr(t, r, 3),
            At(n, t, kt, !0)
        }
        function Fu(n, t, r) {
            return t = vr(t, r, 3),
            At(n, t, Ot, !0)
        }
        function Uu(n, t, r) {
            return "function" == typeof t && "undefined" == typeof r || (t = Xt(t, r, 3)),
            Et(n, t, qu)
        }
        function Lu(n, t, r) {
            return t = Xt(t, r, 3),
            Rt(n, t, qu)
        }
        function $u(n, t, r) {
            return "function" == typeof t && "undefined" == typeof r || (t = Xt(t, r, 3)),
            kt(n, t)
        }
        function Bu(n, t, r) {
            return t = Xt(t, r, 3),
            Rt(n, t, Vo)
        }
        function Du(n) {
            return Ct(n, qu(n))
        }
        function zu(n, t) {
            return !!n && Ki.call(n, t)
        }
        function Mu(n, t, r) {
            r && xr(n, t, r) && (t = null);
            for (var e = -1, u = Vo(n), i = u.length, o = {}; ++e < i; ) {
                var f = u[e]
                  , a = n[f];
                t ? Ki.call(o, a) ? o[a].push(f) : o[a] = [f] : o[a] = f
            }
            return o
        }
        function qu(n) {
            if (null == n)
                return [];
            mu(n) || (n = Ui(n));
            var t = n.length;
            t = t && Ar(t) && (Mo(n) || Oo.nonEnumArgs && pu(n)) && t || 0;
            for (var r = n.constructor, e = -1, u = "function" == typeof r && r.prototype == n, i = Ci(t), o = t > 0; ++e < t; )
                i[e] = e + "";
            for (var f in n)
                o && br(f, t) || "constructor" == f && (u || !Ki.call(n, f)) || i.push(f);
            return i
        }
        function Pu(n, t, r) {
            var e = {};
            return t = vr(t, r, 3),
            kt(n, function(n, r, u) {
                e[r] = t(n, r, u)
            }),
            e
        }
        function Ku(n, t, r) {
            if (null == n)
                return {};
            if ("function" != typeof t) {
                var e = et(jt(arguments, !1, !1, 1), $i);
                return Rr(n, _t(qu(n), e))
            }
            return t = Xt(t, r, 3),
            Ir(n, function(n, r, e) {
                return !t(n, r, e)
            })
        }
        function Vu(n) {
            for (var t = -1, r = Vo(n), e = r.length, u = Ci(e); ++t < e; ) {
                var i = r[t];
                u[t] = [i, n[i]]
            }
            return u
        }
        function Yu(n, t, r) {
            return null == n ? {} : "function" == typeof t ? Ir(n, Xt(t, r, 3)) : Rr(n, jt(arguments, !1, !1, 1))
        }
        function Gu(n, t, r) {
            var e = null == n ? b : n[t];
            return "undefined" == typeof e && (e = r),
            wu(e) ? e.call(n) : e
        }
        function Ju(n, t, r, e) {
            var u = Mo(n) || ku(n);
            if (t = vr(t, e, 4),
            null == r)
                if (u || mu(n)) {
                    var i = n.constructor;
                    r = u ? Mo(n) ? new i : [] : Co("function" == typeof i && i.prototype)
                } else
                    r = {};
            return (u ? Qn : kt)(n, function(n, e, u) {
                return t(r, n, e, u)
            }),
            r
        }
        function Xu(n) {
            return Vt(n, Vo(n))
        }
        function Zu(n) {
            return Vt(n, qu(n))
        }
        function Hu(n, t, r) {
            r && xr(n, t, r) && (t = r = null);
            var e = null == n
              , u = null == t;
            if (null == r && (u && "boolean" == typeof n ? (r = n,
            n = 1) : "boolean" == typeof t && (r = t,
            u = !0)),
            e && u && (t = 1,
            u = !1),
            n = +n || 0,
            u ? (t = n,
            n = 0) : t = +t || 0,
            r || n % 1 || t % 1) {
                var i = mo();
                return go(n + i * (t - n + parseFloat("1e-" + ((i + "").length - 1))), t)
            }
            return zt(n, t)
        }
        function Qu(n) {
            return n = e(n),
            n && n.charAt(0).toUpperCase() + n.slice(1)
        }
        function ni(n) {
            return n = e(n),
            n && n.replace(Rn, c)
        }
        function ti(n, t, r) {
            n = e(n),
            t += "";
            var u = n.length;
            return r = ("undefined" == typeof r ? u : go(r < 0 ? 0 : +r || 0, u)) - t.length,
            r >= 0 && n.indexOf(t, r) == r
        }
        function ri(n) {
            return n = e(n),
            n && yn.test(n) ? n.replace(gn, l) : n
        }
        function ei(n) {
            return n = e(n),
            n && On.test(n) ? n.replace(kn, "\\$&") : n
        }
        function ui(n, t, r) {
            n = e(n),
            t = +t;
            var u = n.length;
            if (u >= t || !po(t))
                return n;
            var i = (t - u) / 2
              , o = no(i)
              , f = Hi(i);
            return r = fr("", f, r),
            r.slice(0, o) + n + r
        }
        function ii(n, t, r) {
            return n = e(n),
            n && fr(n, t, r) + n
        }
        function oi(n, t, r) {
            return n = e(n),
            n && n + fr(n, t, r)
        }
        function fi(n, t, r) {
            return r && xr(n, t, r) && (t = 0),
            wo(n, t)
        }
        function ai(n, t) {
            var r = "";
            if (n = e(n),
            t = +t,
            t < 1 || !n || !po(t))
                return r;
            do
                t % 2 && (r += n),
                t = no(t / 2),
                n += n;
            while (t);return r
        }
        function ci(n, t, r) {
            return n = e(n),
            r = null == r ? 0 : go(r < 0 ? 0 : +r || 0, n.length),
            n.lastIndexOf(t, r) == r
        }
        function li(n, t, r) {
            var u = Y.templateSettings;
            r && xr(n, t, r) && (t = r = null),
            n = e(n),
            t = st(st({}, r || t), u, lt);
            var i, o, f = st(st({}, t.imports), u.imports, lt), a = Vo(f), c = Vt(f, a), l = 0, p = t.interpolate || In, h = "__p += '", v = Li((t.escape || In).source + "|" + p.source + "|" + (p === mn ? bn : In).source + "|" + (t.evaluate || In).source + "|$", "g"), g = "//# sourceURL=" + ("sourceURL"in t ? t.sourceURL : "lodash.templateSources[" + ++Fn + "]") + "\n";
            n.replace(v, function(t, r, e, u, f, a) {
                return e || (e = u),
                h += n.slice(l, a).replace(Tn, s),
                r && (i = !0,
                h += "' +\n__e(" + r + ") +\n'"),
                f && (o = !0,
                h += "';\n" + f + ";\n__p += '"),
                e && (h += "' +\n((__t = (" + e + ")) == null ? '' : __t) +\n'"),
                l = a + t.length,
                t
            }),
            h += "';\n";
            var d = t.variable;
            d || (h = "with (obj) {\n" + h + "\n}\n"),
            h = (o ? h.replace(sn, "") : h).replace(pn, "$1").replace(hn, "$1;"),
            h = "function(" + (d || "obj") + ") {\n" + (d ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (i ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + h + "return __p\n}";
            var y = yi(function() {
                return Ni(a, g + "return " + h).apply(b, c)
            });
            if (y.source = h,
            _u(y))
                throw y;
            return y
        }
        function si(n, t, r) {
            var u = n;
            return (n = e(n)) ? (r ? xr(u, t, r) : null == t) ? n.slice(y(n), _(n) + 1) : (t = e(t),
            n.slice(i(n, t), o(n, t) + 1)) : n
        }
        function pi(n, t, r) {
            var u = n;
            return n = e(n),
            n ? (r ? xr(u, t, r) : null == t) ? n.slice(y(n)) : n.slice(i(n, e(t))) : n
        }
        function hi(n, t, r) {
            var u = n;
            return n = e(n),
            n ? (r ? xr(u, t, r) : null == t) ? n.slice(0, _(n) + 1) : n.slice(0, o(n, e(t)) + 1) : n
        }
        function vi(n, t, r) {
            r && xr(n, t, r) && (t = null);
            var u = S
              , i = N;
            if (null != t)
                if (mu(t)) {
                    var o = "separator"in t ? t.separator : o;
                    u = "length"in t ? +t.length || 0 : u,
                    i = "omission"in t ? e(t.omission) : i
                } else
                    u = +t || 0;
            if (n = e(n),
            u >= n.length)
                return n;
            var f = u - i.length;
            if (f < 1)
                return i;
            var a = n.slice(0, f);
            if (null == o)
                return a + i;
            if (Ru(o)) {
                if (n.slice(f).search(o)) {
                    var c, l, s = n.slice(0, f);
                    for (o.global || (o = Li(o.source, (xn.exec(o) || "") + "g")),
                    o.lastIndex = 0; c = o.exec(s); )
                        l = c.index;
                    a = a.slice(0, null == l ? f : l)
                }
            } else if (n.indexOf(o, f) != f) {
                var p = a.lastIndexOf(o);
                p > -1 && (a = a.slice(0, p))
            }
            return a + i
        }
        function gi(n) {
            return n = e(n),
            n && dn.test(n) ? n.replace(vn, w) : n
        }
        function di(n, t, r) {
            return r && xr(n, t, r) && (t = null),
            n = e(n),
            n.match(t || Sn) || []
        }
        function yi(n) {
            try {
                return n()
            } catch (t) {
                return _u(t) ? t : Si(t)
            }
        }
        function _i(n, t, r) {
            return r && xr(n, t, r) && (t = null),
            gt(n, t)
        }
        function wi(n) {
            return function() {
                return n
            }
        }
        function mi(n) {
            return n
        }
        function bi(n) {
            return Ut(n, !0)
        }
        function xi(n, t, r) {
            if (null == r) {
                var e = mu(t)
                  , u = e && Vo(t)
                  , i = u && u.length && Ct(t, u);
                (i ? i.length : e) || (i = !1,
                r = t,
                t = n,
                n = this)
            }
            i || (i = Ct(t, Vo(t)));
            var o = !0
              , f = -1
              , a = wu(n)
              , c = i.length;
            r === !1 ? o = !1 : mu(r) && "chain"in r && (o = r.chain);
            for (; ++f < c; ) {
                var l = i[f]
                  , s = t[l];
                n[l] = s,
                a && (n.prototype[l] = function(t) {
                    return function() {
                        var r = this.__chain__;
                        if (o || r) {
                            var e = n(this.__wrapped__);
                            return (e.__actions__ = Hn(this.__actions__)).push({
                                func: t,
                                args: arguments,
                                thisArg: n
                            }),
                            e.__chain__ = r,
                            e
                        }
                        var u = [this.value()];
                        return ro.apply(u, arguments),
                        t.apply(n, u)
                    }
                }(s))
            }
            return n
        }
        function Ai() {
            return v._ = Gi,
            this
        }
        function ji() {}
        function Ei(n) {
            return Bt(n + "")
        }
        function Ri(n) {
            return function(t) {
                return null == n ? b : n[t]
            }
        }
        function Ii(n, t, r) {
            r && xr(n, t, r) && (t = r = null),
            n = +n || 0,
            r = null == r ? 1 : +r || 0,
            null == t ? (t = n,
            n = 0) : t = +t || 0;
            for (var e = -1, u = vo(Hi((t - n) / (r || 1)), 0), i = Ci(u); ++e < u; )
                i[e] = n,
                n += r;
            return i
        }
        function ki(n, t, r) {
            if (n = +n,
            n < 1 || !po(n))
                return [];
            var e = -1
              , u = Ci(go(n, Ao));
            for (t = Xt(t, r, 1); ++e < n; )
                e < Ao ? u[e] = t(e) : t(e);
            return u
        }
        function Oi(n) {
            var t = ++Vi;
            return e(n) + t
        }
        v = v ? Jn.defaults(Pn.Object(), v, Jn.pick(Pn, Wn)) : Pn;
        var Ci = v.Array
          , Ti = v.Date
          , Si = v.Error
          , Ni = v.Function
          , Wi = v.Math
          , Fi = v.Number
          , Ui = v.Object
          , Li = v.RegExp
          , $i = v.String
          , Bi = v.TypeError
          , Di = Ci.prototype
          , zi = Ui.prototype
          , Mi = (Mi = v.window) && Mi.document
          , qi = Ni.prototype.toString
          , Pi = Bt("length")
          , Ki = zi.hasOwnProperty
          , Vi = 0
          , Yi = zi.toString
          , Gi = v._
          , Ji = Li("^" + ei(Yi).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
          , Xi = Au(Xi = v.ArrayBuffer) && Xi
          , Zi = Au(Zi = Xi && new Xi(0).slice) && Zi
          , Hi = Wi.ceil
          , Qi = v.clearTimeout
          , no = Wi.floor
          , to = Au(to = Ui.getPrototypeOf) && to
          , ro = Di.push
          , eo = zi.propertyIsEnumerable
          , uo = Au(uo = v.Set) && uo
          , io = v.setTimeout
          , oo = Di.splice
          , fo = Au(fo = v.Uint8Array) && fo
          , ao = (Di.unshift,
        Au(ao = v.WeakMap) && ao)
          , co = function() {
            try {
                var n = Au(n = v.Float64Array) && n
                  , t = new n(new Xi(10),0,1) && n
            } catch (r) {}
            return t
        }()
          , lo = Au(lo = Ci.isArray) && lo
          , so = Au(so = Ui.create) && so
          , po = v.isFinite
          , ho = Au(ho = Ui.keys) && ho
          , vo = Wi.max
          , go = Wi.min
          , yo = Au(yo = Ti.now) && yo
          , _o = Au(_o = Fi.isFinite) && _o
          , wo = v.parseInt
          , mo = Wi.random
          , bo = Fi.NEGATIVE_INFINITY
          , xo = Fi.POSITIVE_INFINITY
          , Ao = Wi.pow(2, 32) - 1
          , jo = Ao - 1
          , Eo = Ao >>> 1
          , Ro = co ? co.BYTES_PER_ELEMENT : 0
          , Io = Wi.pow(2, 53) - 1
          , ko = ao && new ao
          , Oo = Y.support = {};
        !function(n) {
            Oo.funcDecomp = !Au(v.WinRTError) && Cn.test(m),
            Oo.funcNames = "string" == typeof Ni.name;
            try {
                Oo.dom = 11 === Mi.createDocumentFragment().nodeType
            } catch (t) {
                Oo.dom = !1
            }
            try {
                Oo.nonEnumArgs = !eo.call(arguments, 1)
            } catch (t) {
                Oo.nonEnumArgs = !0
            }
        }(0, 0),
        Y.templateSettings = {
            escape: _n,
            evaluate: wn,
            interpolate: mn,
            variable: "",
            imports: {
                _: Y
            }
        };
        var Co = function() {
            function n() {}
            return function(t) {
                if (mu(t)) {
                    n.prototype = t;
                    var r = new n;
                    n.prototype = null
                }
                return r || v.Object()
            }
        }()
          , To = ko ? function(n, t) {
            return ko.set(n, t),
            n
        }
        : mi;
        Zi || (Zt = Xi && fo ? function(n) {
            var t = n.byteLength
              , r = co ? no(t / Ro) : 0
              , e = r * Ro
              , u = new Xi(t);
            if (r) {
                var i = new co(u,0,r);
                i.set(new co(n,0,r))
            }
            return t != e && (i = new fo(u,e),
            i.set(new fo(n,e))),
            u
        }
        : wi(null));
        var So = so && uo ? function(n) {
            return new Gn(n)
        }
        : wi(null)
          , No = ko ? function(n) {
            return ko.get(n)
        }
        : ji
          , Wo = function() {
            var n = 0
              , t = 0;
            return function(r, e) {
                var u = zo()
                  , i = F - (u - t);
                if (t = u,
                i > 0) {
                    if (++n >= W)
                        return r
                } else
                    n = 0;
                return To(r, e)
            }
        }()
          , Fo = nr(function(n, t, r) {
            Ki.call(n, r) ? ++n[r] : n[r] = 1
        })
          , Uo = nr(function(n, t, r) {
            Ki.call(n, r) ? n[r].push(t) : n[r] = [t]
        })
          , Lo = nr(function(n, t, r) {
            n[r] = t
        })
          , $o = ir(ut)
          , Bo = ir(it, !0)
          , Do = nr(function(n, t, r) {
            n[r ? 0 : 1].push(t)
        }, function() {
            return [[], []]
        })
          , zo = yo || function() {
            return (new Ti).getTime()
        }
          , Mo = lo || function(n) {
            return h(n) && Ar(n.length) && Yi.call(n) == M || !1
        }
        ;
        Oo.dom || (gu = function(n) {
            return n && 1 === n.nodeType && h(n) && !Po(n) || !1
        }
        );
        var qo = _o || function(n) {
            return "number" == typeof n && po(n)
        }
        ;
        (wu(/x/) || fo && !wu(fo)) && (wu = function(n) {
            return Yi.call(n) == V
        }
        );
        var Po = to ? function(n) {
            if (!n || Yi.call(n) != J)
                return !1;
            var t = n.valueOf
              , r = Au(t) && (r = to(t)) && to(r);
            return r ? n == r || to(n) == r : Or(n)
        }
        : Or
          , Ko = tr(st)
          , Vo = ho ? function(n) {
            if (n)
                var t = n.constructor
                  , r = n.length;
            return "function" == typeof t && t.prototype === n || "function" != typeof n && r && Ar(r) ? Cr(n) : mu(n) ? ho(n) : []
        }
        : Cr
          , Yo = tr(Lt)
          , Go = er(function(n, t, r) {
            return t = t.toLowerCase(),
            r ? n + t.charAt(0).toUpperCase() + t.slice(1) : t
        })
          , Jo = er(function(n, t, r) {
            return n + (r ? "-" : "") + t.toLowerCase()
        });
        8 != wo(Nn + "08") && (fi = function(n, t, r) {
            return (r ? xr(n, t, r) : null == t) ? t = 0 : t && (t = +t),
            n = si(n),
            wo(n, t || (jn.test(n) ? 16 : 10))
        }
        );
        var Xo = er(function(n, t, r) {
            return n + (r ? "_" : "") + t.toLowerCase()
        });
        return Z.prototype = Y.prototype,
        Mn.prototype["delete"] = qn,
        Mn.prototype.get = Kn,
        Mn.prototype.has = Vn,
        Mn.prototype.set = Yn,
        Gn.prototype.push = Zn,
        ru.Cache = Mn,
        Y.after = qe,
        Y.ary = Pe,
        Y.assign = Ko,
        Y.at = be,
        Y.before = Ke,
        Y.bind = Ve,
        Y.bindAll = Ye,
        Y.bindKey = Ge,
        Y.callback = _i,
        Y.chain = ve,
        Y.chunk = Nr,
        Y.compact = Wr,
        Y.constant = wi,
        Y.countBy = Fo,
        Y.create = Su,
        Y.curry = Je,
        Y.curryRight = Xe,
        Y.debounce = Ze,
        Y.defaults = Nu,
        Y.defer = He,
        Y.delay = Qe,
        Y.difference = Fr,
        Y.drop = Ur,
        Y.dropRight = Lr,
        Y.dropRightWhile = $r,
        Y.dropWhile = Br,
        Y.filter = je,
        Y.flatten = qr,
        Y.flattenDeep = Pr,
        Y.flow = nu,
        Y.flowRight = tu,
        Y.forEach = ke,
        Y.forEachRight = Oe,
        Y.forIn = Uu,
        Y.forInRight = Lu,
        Y.forOwn = $u,
        Y.forOwnRight = Bu,
        Y.functions = Du,
        Y.groupBy = Uo,
        Y.indexBy = Lo,
        Y.initial = Vr,
        Y.intersection = Yr,
        Y.invert = Mu,
        Y.invoke = Ce,
        Y.keys = Vo,
        Y.keysIn = qu,
        Y.map = Te,
        Y.mapValues = Pu,
        Y.matches = bi,
        Y.memoize = ru,
        Y.merge = Yo,
        Y.mixin = xi,
        Y.negate = eu,
        Y.omit = Ku,
        Y.once = uu,
        Y.pairs = Vu,
        Y.partial = iu,
        Y.partialRight = ou,
        Y.partition = Do,
        Y.pick = Yu,
        Y.pluck = Se,
        Y.property = Ei,
        Y.propertyOf = Ri,
        Y.pull = Xr,
        Y.pullAt = Zr,
        Y.range = Ii,
        Y.rearg = fu,
        Y.reject = Fe,
        Y.remove = Hr,
        Y.rest = Qr,
        Y.shuffle = Le,
        Y.slice = ne,
        Y.sortBy = De,
        Y.sortByAll = ze,
        Y.take = ee,
        Y.takeRight = ue,
        Y.takeRightWhile = ie,
        Y.takeWhile = oe,
        Y.tap = ge,
        Y.throttle = au,
        Y.thru = de,
        Y.times = ki,
        Y.toArray = Cu,
        Y.toPlainObject = Tu,
        Y.transform = Ju,
        Y.union = fe,
        Y.uniq = ae,
        Y.unzip = ce,
        Y.values = Xu,
        Y.valuesIn = Zu,
        Y.where = Me,
        Y.without = le,
        Y.wrap = cu,
        Y.xor = se,
        Y.zip = pe,
        Y.zipObject = he,
        Y.backflow = tu,
        Y.collect = Te,
        Y.compose = tu,
        Y.each = ke,
        Y.eachRight = Oe,
        Y.extend = Ko,
        Y.iteratee = _i,
        Y.methods = Du,
        Y.object = he,
        Y.select = je,
        Y.tail = Qr,
        Y.unique = ae,
        xi(Y, Y),
        Y.attempt = yi,
        Y.camelCase = Go,
        Y.capitalize = Qu,
        Y.clone = lu,
        Y.cloneDeep = su,
        Y.deburr = ni,
        Y.endsWith = ti,
        Y.escape = ri,
        Y.escapeRegExp = ei,
        Y.every = Ae,
        Y.find = Ee,
        Y.findIndex = Dr,
        Y.findKey = Wu,
        Y.findLast = Re,
        Y.findLastIndex = zr,
        Y.findLastKey = Fu,
        Y.findWhere = Ie,
        Y.first = Mr,
        Y.has = zu,
        Y.identity = mi,
        Y.includes = xe,
        Y.indexOf = Kr,
        Y.isArguments = pu,
        Y.isArray = Mo,
        Y.isBoolean = hu,
        Y.isDate = vu,
        Y.isElement = gu,
        Y.isEmpty = du,
        Y.isEqual = yu,
        Y.isError = _u,
        Y.isFinite = qo,
        Y.isFunction = wu,
        Y.isMatch = bu,
        Y.isNaN = xu,
        Y.isNative = Au,
        Y.isNull = ju,
        Y.isNumber = Eu,
        Y.isObject = mu,
        Y.isPlainObject = Po,
        Y.isRegExp = Ru,
        Y.isString = Iu,
        Y.isTypedArray = ku,
        Y.isUndefined = Ou,
        Y.kebabCase = Jo,
        Y.last = Gr,
        Y.lastIndexOf = Jr,
        Y.max = $o,
        Y.min = Bo,
        Y.noConflict = Ai,
        Y.noop = ji,
        Y.now = zo,
        Y.pad = ui,
        Y.padLeft = ii,
        Y.padRight = oi,
        Y.parseInt = fi,
        Y.random = Hu,
        Y.reduce = Ne,
        Y.reduceRight = We,
        Y.repeat = ai,
        Y.result = Gu,
        Y.runInContext = m,
        Y.size = $e,
        Y.snakeCase = Xo,
        Y.some = Be,
        Y.sortedIndex = te,
        Y.sortedLastIndex = re,
        Y.startsWith = ci,
        Y.template = li,
        Y.trim = si,
        Y.trimLeft = pi,
        Y.trimRight = hi,
        Y.trunc = vi,
        Y.unescape = gi,
        Y.uniqueId = Oi,
        Y.words = di,
        Y.all = Ae,
        Y.any = Be,
        Y.contains = xe,
        Y.detect = Ee,
        Y.foldl = Ne,
        Y.foldr = We,
        Y.head = Mr,
        Y.include = xe,
        Y.inject = Ne,
        xi(Y, function() {
            var n = {};
            return kt(Y, function(t, r) {
                Y.prototype[r] || (n[r] = t)
            }),
            n
        }(), !1),
        Y.sample = Ue,
        Y.prototype.sample = function(n) {
            return this.__chain__ || null != n ? this.thru(function(t) {
                return Ue(t, n)
            }) : Ue(this.value())
        }
        ,
        Y.VERSION = x,
        Qn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
            Y[n].placeholder = Y
        }),
        Qn(["filter", "map", "takeWhile"], function(n, t) {
            var r = t == U;
            Q.prototype[n] = function(n, e) {
                var u = this.clone()
                  , i = u.filtered
                  , o = u.iteratees || (u.iteratees = []);
                return u.filtered = i || r || t == $ && u.dir < 0,
                o.push({
                    iteratee: vr(n, e, 3),
                    type: t
                }),
                u
            }
        }),
        Qn(["drop", "take"], function(n, t) {
            var r = n + "Count"
              , e = n + "While";
            Q.prototype[n] = function(e) {
                e = null == e ? 1 : vo(+e || 0, 0);
                var u = this.clone();
                if (u.filtered) {
                    var i = u[r];
                    u[r] = t ? go(i, e) : i + e
                } else {
                    var o = u.views || (u.views = []);
                    o.push({
                        size: e,
                        type: n + (u.dir < 0 ? "Right" : "")
                    })
                }
                return u
            }
            ,
            Q.prototype[n + "Right"] = function(t) {
                return this.reverse()[n](t).reverse()
            }
            ,
            Q.prototype[n + "RightWhile"] = function(n, t) {
                return this.reverse()[e](n, t).reverse()
            }
        }),
        Qn(["first", "last"], function(n, t) {
            var r = "take" + (t ? "Right" : "");
            Q.prototype[n] = function() {
                return this[r](1).value()[0]
            }
        }),
        Qn(["initial", "rest"], function(n, t) {
            var r = "drop" + (t ? "" : "Right");
            Q.prototype[n] = function() {
                return this[r](1)
            }
        }),
        Qn(["pluck", "where"], function(n, t) {
            var r = t ? "filter" : "map"
              , e = t ? bi : Ei;
            Q.prototype[n] = function(n) {
                return this[r](e(n))
            }
        }),
        Q.prototype.dropWhile = function(n, t) {
            var r, e, u = this.dir < 0;
            return n = vr(n, t, 3),
            this.filter(function(t, i, o) {
                return r = r && (u ? i < e : i > e),
                e = i,
                r || (r = !n(t, i, o))
            })
        }
        ,
        Q.prototype.reject = function(n, t) {
            return n = vr(n, t, 3),
            this.filter(function(t, r, e) {
                return !n(t, r, e)
            })
        }
        ,
        Q.prototype.slice = function(n, t) {
            n = null == n ? 0 : +n || 0;
            var r = n < 0 ? this.takeRight(-n) : this.drop(n);
            return "undefined" != typeof t && (t = +t || 0,
            r = t < 0 ? r.dropRight(-t) : r.take(t - n)),
            r
        }
        ,
        kt(Q.prototype, function(n, t) {
            var r = /^(?:first|last)$/.test(t);
            Y.prototype[t] = function() {
                var e = this.__wrapped__
                  , u = arguments
                  , i = this.__chain__
                  , o = !!this.__actions__.length
                  , f = e instanceof Q
                  , a = f && !o;
                if (r && !i)
                    return a ? n.call(e) : Y[t](this.value());
                var c = function(n) {
                    var r = [n];
                    return ro.apply(r, u),
                    Y[t].apply(Y, r)
                };
                if (f || Mo(e)) {
                    var l = a ? e : new Q(this)
                      , s = n.apply(l, u);
                    if (!r && (o || s.actions)) {
                        var p = s.actions || (s.actions = []);
                        p.push({
                            func: de,
                            args: [c],
                            thisArg: Y
                        })
                    }
                    return new Z(s,i)
                }
                return this.thru(c)
            }
        }),
        Qn(["concat", "join", "pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
            var t = Di[n]
              , r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru"
              , e = /^(?:join|pop|shift)$/.test(n);
            Y.prototype[n] = function() {
                var n = arguments;
                return e && !this.__chain__ ? t.apply(this.value(), n) : this[r](function(r) {
                    return t.apply(r, n)
                })
            }
        }),
        Q.prototype.clone = Bn,
        Q.prototype.reverse = Dn,
        Q.prototype.value = zn,
        Y.prototype.chain = ye,
        Y.prototype.reverse = _e,
        Y.prototype.toString = we,
        Y.prototype.toJSON = Y.prototype.valueOf = Y.prototype.value = me,
        Y.prototype.collect = Y.prototype.map,
        Y.prototype.head = Y.prototype.first,
        Y.prototype.select = Y.prototype.filter,
        Y.prototype.tail = Y.prototype.rest,
        Y
    }
    var b, x = "3.0.0", A = 1, j = 2, E = 4, R = 8, I = 16, k = 32, O = 64, C = 128, T = 256, S = 30, N = "...", W = 150, F = 16, U = 0, L = 1, $ = 2, B = "Expected a function", D = "__lodash_placeholder__", z = "[object Arguments]", M = "[object Array]", q = "[object Boolean]", P = "[object Date]", K = "[object Error]", V = "[object Function]", Y = "[object Map]", G = "[object Number]", J = "[object Object]", X = "[object RegExp]", Z = "[object Set]", H = "[object String]", Q = "[object WeakMap]", nn = "[object ArrayBuffer]", tn = "[object Float32Array]", rn = "[object Float64Array]", en = "[object Int8Array]", un = "[object Int16Array]", on = "[object Int32Array]", fn = "[object Uint8Array]", an = "[object Uint8ClampedArray]", cn = "[object Uint16Array]", ln = "[object Uint32Array]", sn = /\b__p \+= '';/g, pn = /\b(__p \+=) '' \+/g, hn = /(__e\(.*?\)|\b__t\)) \+\n'';/g, vn = /&(?:amp|lt|gt|quot|#39|#96);/g, gn = /[&<>"'`]/g, dn = RegExp(vn.source), yn = RegExp(gn.source), _n = /<%-([\s\S]+?)%>/g, wn = /<%([\s\S]+?)%>/g, mn = /<%=([\s\S]+?)%>/g, bn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, xn = /\w*$/, An = /^\s*function[ \n\r\t]+\w/, jn = /^0[xX]/, En = /^\[object .+?Constructor\]$/, Rn = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g, In = /($^)/, kn = /[.*+?^${}()|[\]\/\\]/g, On = RegExp(kn.source), Cn = /\bthis\b/, Tn = /['\n\r\u2028\u2029\\]/g, Sn = function() {
        var n = "[A-Z\\xc0-\\xd6\\xd8-\\xde]"
          , t = "[a-z\\xdf-\\xf6\\xf8-\\xff]+";
        return RegExp(n + "{2,}(?=" + n + t + ")|" + n + "?" + t + "|" + n + "+|[0-9]+", "g")
    }(), Nn = " \t\x0B\f \ufeff\n\r\u2028\u2029 ᠎             　", Wn = ["Array", "ArrayBuffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Math", "Number", "Object", "RegExp", "Set", "String", "_", "clearTimeout", "document", "isFinite", "parseInt", "setTimeout", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "window", "WinRTError"], Fn = -1, Un = {};
    Un[tn] = Un[rn] = Un[en] = Un[un] = Un[on] = Un[fn] = Un[an] = Un[cn] = Un[ln] = !0,
    Un[z] = Un[M] = Un[nn] = Un[q] = Un[P] = Un[K] = Un[V] = Un[Y] = Un[G] = Un[J] = Un[X] = Un[Z] = Un[H] = Un[Q] = !1;
    var Ln = {};
    Ln[z] = Ln[M] = Ln[nn] = Ln[q] = Ln[P] = Ln[tn] = Ln[rn] = Ln[en] = Ln[un] = Ln[on] = Ln[G] = Ln[J] = Ln[X] = Ln[H] = Ln[fn] = Ln[an] = Ln[cn] = Ln[ln] = !0,
    Ln[K] = Ln[V] = Ln[Y] = Ln[Z] = Ln[Q] = !1;
    var $n = {
        leading: !1,
        maxWait: 0,
        trailing: !1
    }
      , Bn = {
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "A",
        "Å": "A",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "Ç": "C",
        "ç": "c",
        "Ð": "D",
        "ð": "d",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ï": "I",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "Ñ": "N",
        "ñ": "n",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "O",
        "Ø": "O",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "ø": "o",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "Ý": "Y",
        "ý": "y",
        "ÿ": "y",
        "Æ": "Ae",
        "æ": "ae",
        "Þ": "Th",
        "þ": "th",
        "ß": "ss"
    }
      , Dn = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "`": "&#96;"
    }
      , zn = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
        "&#96;": "`"
    }
      , Mn = {
        "function": !0,
        object: !0
    }
      , qn = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , Pn = Mn[typeof window] && window !== (this && this.window) ? window : this
      , Kn = Mn[typeof exports] && exports && !exports.nodeType && exports
      , Vn = Mn[typeof module] && module && !module.nodeType && module
      , Yn = Kn && Vn && "object" == typeof global && global;
    !Yn || Yn.global !== Yn && Yn.window !== Yn && Yn.self !== Yn || (Pn = Yn);
    var Gn = Vn && Vn.exports === Kn && Kn
      , Jn = m();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (Pn._ = Jn,
    define(function() {
        return Jn
    })) : Kn && Vn ? Gn ? (Vn.exports = Jn)._ = Jn : Kn._ = Jn : Pn._ = Jn
}
).call(this);
if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(t) {
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery),
+function(t) {
    "use strict";
    function e() {
        var t = document.createElement("bootstrap")
          , e = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var i in e)
            if (void 0 !== t.style[i])
                return {
                    end: e[i]
                };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1
          , o = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var s = function() {
            i || t(o).trigger(t.support.transition.end)
        };
        return setTimeout(s, e),
        this
    }
    ,
    t(function() {
        t.support.transition = e(),
        t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                if (t(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var i = t(this)
              , s = i.data("bs.alert");
            s || i.data("bs.alert", s = new o(this)),
            "string" == typeof e && s[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]'
      , o = function(e) {
        t(e).on("click", i, this.close)
    };
    o.VERSION = "3.3.1",
    o.TRANSITION_DURATION = 150,
    o.prototype.close = function(e) {
        function i() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var s = t(this)
          , n = s.attr("data-target");
        n || (n = s.attr("href"),
        n = n && n.replace(/.*(?=#[^\s]*$)/, ""));
        var a = t(n);
        e && e.preventDefault(),
        a.length || (a = s.closest(".alert")),
        a.trigger(e = t.Event("close.bs.alert")),
        e.isDefaultPrevented() || (a.removeClass("in"),
        t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", i).emulateTransitionEnd(o.TRANSITION_DURATION) : i())
    }
    ;
    var s = t.fn.alert;
    t.fn.alert = e,
    t.fn.alert.Constructor = o,
    t.fn.alert.noConflict = function() {
        return t.fn.alert = s,
        this
    }
    ,
    t(document).on("click.bs.alert.data-api", i, o.prototype.close)
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var o = t(this)
              , s = o.data("bs.button")
              , n = "object" == typeof e && e;
            s || o.data("bs.button", s = new i(this,n)),
            "toggle" == e ? s.toggle() : e && s.setState(e)
        })
    }
    var i = function(e, o) {
        this.$element = t(e),
        this.options = t.extend({}, i.DEFAULTS, o),
        this.isLoading = !1
    };
    i.VERSION = "3.3.1",
    i.DEFAULTS = {
        loadingText: "loading..."
    },
    i.prototype.setState = function(e) {
        var i = "disabled"
          , o = this.$element
          , s = o.is("input") ? "val" : "html"
          , n = o.data();
        e += "Text",
        null == n.resetText && o.data("resetText", o[s]()),
        setTimeout(t.proxy(function() {
            o[s](null == n[e] ? this.options[e] : n[e]),
            "loadingText" == e ? (this.isLoading = !0,
            o.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1,
            o.removeClass(i).removeAttr(i))
        }, this), 0)
    }
    ,
    i.prototype.toggle = function() {
        var t = !0
          , e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") && (i.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")),
            t && i.prop("checked", !this.$element.hasClass("active")).trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        t && this.$element.toggleClass("active")
    }
    ;
    var o = t.fn.button;
    t.fn.button = e,
    t.fn.button.Constructor = i,
    t.fn.button.noConflict = function() {
        return t.fn.button = o,
        this
    }
    ,
    t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var o = t(i.target);
        o.hasClass("btn") || (o = o.closest(".btn")),
        e.call(o, "toggle"),
        i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var o = t(this)
              , s = o.data("bs.carousel")
              , n = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e)
              , a = "string" == typeof e ? e : n.slide;
            s || o.data("bs.carousel", s = new i(this,n)),
            "number" == typeof e ? s.to(e) : a ? s[a]() : n.interval && s.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = i,
        this.paused = this.sliding = this.interval = this.$active = this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.1",
    i.TRANSITION_DURATION = 600,
    i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            t.preventDefault()
        }
    }
    ,
    i.prototype.cycle = function(e) {
        return e || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"),
        this.$items.index(t || this.$active)
    }
    ,
    i.prototype.getItemForDirection = function(t, e) {
        var i = "prev" == t ? -1 : 1
          , o = this.getItemIndex(e)
          , s = (o + i) % this.$items.length;
        return this.$items.eq(s)
    }
    ,
    i.prototype.to = function(t) {
        var e = this
          , i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(t > this.$items.length - 1 || t < 0))
            return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                e.to(t)
            }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }
    ,
    i.prototype.pause = function(e) {
        return e || (this.paused = !0),
        this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    i.prototype.next = function() {
        if (!this.sliding)
            return this.slide("next")
    }
    ,
    i.prototype.prev = function() {
        if (!this.sliding)
            return this.slide("prev")
    }
    ,
    i.prototype.slide = function(e, o) {
        var s = this.$element.find(".item.active")
          , n = o || this.getItemForDirection(e, s)
          , a = this.interval
          , r = "next" == e ? "left" : "right"
          , l = "next" == e ? "first" : "last"
          , h = this;
        if (!n.length) {
            if (!this.options.wrap)
                return;
            n = this.$element.find(".item")[l]()
        }
        if (n.hasClass("active"))
            return this.sliding = !1;
        var d = n[0]
          , p = t.Event("slide.bs.carousel", {
            relatedTarget: d,
            direction: r
        });
        if (this.$element.trigger(p),
        !p.isDefaultPrevented()) {
            if (this.sliding = !0,
            a && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var c = t(this.$indicators.children()[this.getItemIndex(n)]);
                c && c.addClass("active")
            }
            var f = t.Event("slid.bs.carousel", {
                relatedTarget: d,
                direction: r
            });
            return t.support.transition && this.$element.hasClass("slide") ? (n.addClass(e),
            n[0].offsetWidth,
            s.addClass(r),
            n.addClass(r),
            s.one("bsTransitionEnd", function() {
                n.removeClass([e, r].join(" ")).addClass("active"),
                s.removeClass(["active", r].join(" ")),
                h.sliding = !1,
                setTimeout(function() {
                    h.$element.trigger(f)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (s.removeClass("active"),
            n.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(f)),
            a && this.cycle(),
            this
        }
    }
    ;
    var o = t.fn.carousel;
    t.fn.carousel = e,
    t.fn.carousel.Constructor = i,
    t.fn.carousel.noConflict = function() {
        return t.fn.carousel = o,
        this
    }
    ;
    var s = function(i) {
        var o, s = t(this), n = t(s.attr("data-target") || (o = s.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""));
        if (n.hasClass("carousel")) {
            var a = t.extend({}, n.data(), s.data())
              , r = s.attr("data-slide-to");
            r && (a.interval = !1),
            e.call(n, a),
            r && n.data("bs.carousel").to(r),
            i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", s).on("click.bs.carousel.data-api", "[data-slide-to]", s),
    t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        var i, o = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(o)
    }
    function i(e) {
        return this.each(function() {
            var i = t(this)
              , s = i.data("bs.collapse")
              , n = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
            !s && n.toggle && "show" == e && (n.toggle = !1),
            s || i.data("bs.collapse", s = new o(this,n)),
            "string" == typeof e && s[e]()
        })
    }
    var o = function(e, i) {
        this.$element = t(e),
        this.options = t.extend({}, o.DEFAULTS, i),
        this.$trigger = t(this.options.trigger).filter('[href="#' + e.id + '"], [data-target="#' + e.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    o.VERSION = "3.3.1",
    o.TRANSITION_DURATION = 350,
    o.DEFAULTS = {
        toggle: !0,
        trigger: '[data-toggle="collapse"]'
    },
    o.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }
    ,
    o.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, s = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
            if (!(s && s.length && (e = s.data("bs.collapse"),
            e && e.transitioning))) {
                var n = t.Event("show.bs.collapse");
                if (this.$element.trigger(n),
                !n.isDefaultPrevented()) {
                    s && s.length && (i.call(s, "hide"),
                    e || s.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var r = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition)
                        return r.call(this);
                    var l = t.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }
    ,
    o.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e),
            !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var s = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : s.call(this)
            }
        }
    }
    ,
    o.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    o.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, o) {
            var s = t(o);
            this.addAriaAndCollapsedClass(e(s), s)
        }, this)).end()
    }
    ,
    o.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i),
        e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    }
    ;
    var s = t.fn.collapse;
    t.fn.collapse = i,
    t.fn.collapse.Constructor = o,
    t.fn.collapse.noConflict = function() {
        return t.fn.collapse = s,
        this
    }
    ,
    t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(o) {
        var s = t(this);
        s.attr("data-target") || o.preventDefault();
        var n = e(s)
          , a = n.data("bs.collapse")
          , r = a ? "toggle" : t.extend({}, s.data(), {
            trigger: this
        });
        i.call(n, r)
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        e && 3 === e.which || (t(s).remove(),
        t(n).each(function() {
            var o = t(this)
              , s = i(o)
              , n = {
                relatedTarget: this
            };
            s.hasClass("open") && (s.trigger(e = t.Event("hide.bs.dropdown", n)),
            e.isDefaultPrevented() || (o.attr("aria-expanded", "false"),
            s.removeClass("open").trigger("hidden.bs.dropdown", n)))
        }))
    }
    function i(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"),
        i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = i && t(i);
        return o && o.length ? o : e.parent()
    }
    function o(e) {
        return this.each(function() {
            var i = t(this)
              , o = i.data("bs.dropdown");
            o || i.data("bs.dropdown", o = new a(this)),
            "string" == typeof e && o[e].call(i)
        })
    }
    var s = ".dropdown-backdrop"
      , n = '[data-toggle="dropdown"]'
      , a = function(e) {
        t(e).on("click.bs.dropdown", this.toggle)
    };
    a.VERSION = "3.3.1",
    a.prototype.toggle = function(o) {
        var s = t(this);
        if (!s.is(".disabled, :disabled")) {
            var n = i(s)
              , a = n.hasClass("open");
            if (e(),
            !a) {
                "ontouchstart"in document.documentElement && !n.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                var r = {
                    relatedTarget: this
                };
                if (n.trigger(o = t.Event("show.bs.dropdown", r)),
                o.isDefaultPrevented())
                    return;
                s.trigger("focus").attr("aria-expanded", "true"),
                n.toggleClass("open").trigger("shown.bs.dropdown", r)
            }
            return !1
        }
    }
    ,
    a.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var o = t(this);
            if (e.preventDefault(),
            e.stopPropagation(),
            !o.is(".disabled, :disabled")) {
                var s = i(o)
                  , a = s.hasClass("open");
                if (!a && 27 != e.which || a && 27 == e.which)
                    return 27 == e.which && s.find(n).trigger("focus"),
                    o.trigger("click");
                var r = " li:not(.divider):visible a"
                  , l = s.find('[role="menu"]' + r + ', [role="listbox"]' + r);
                if (l.length) {
                    var h = l.index(e.target);
                    38 == e.which && h > 0 && h--,
                    40 == e.which && h < l.length - 1 && h++,
                    ~h || (h = 0),
                    l.eq(h).trigger("focus")
                }
            }
        }
    }
    ;
    var r = t.fn.dropdown;
    t.fn.dropdown = o,
    t.fn.dropdown.Constructor = a,
    t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = r,
        this
    }
    ,
    t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", n, a.prototype.toggle).on("keydown.bs.dropdown.data-api", n, a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', a.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', a.prototype.keydown)
}(jQuery),
+function(t) {
    "use strict";
    function e(e, o) {
        return this.each(function() {
            var s = t(this)
              , n = s.data("bs.modal")
              , a = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
            n || s.data("bs.modal", n = new i(this,a)),
            "string" == typeof e ? n[e](o) : a.show && n.show(o)
        })
    }
    var i = function(e, i) {
        this.options = i,
        this.$body = t(document.body),
        this.$element = t(e),
        this.$backdrop = this.isShown = null,
        this.scrollbarWidth = 0,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.1",
    i.TRANSITION_DURATION = 300,
    i.BACKDROP_TRANSITION_DURATION = 150,
    i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }
    ,
    i.prototype.show = function(e) {
        var o = this
          , s = t.Event("show.bs.modal", {
            relatedTarget: e
        });
        this.$element.trigger(s),
        this.isShown || s.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
        this.backdrop(function() {
            var s = t.support.transition && o.$element.hasClass("fade");
            o.$element.parent().length || o.$element.appendTo(o.$body),
            o.$element.show().scrollTop(0),
            o.options.backdrop && o.adjustBackdrop(),
            o.adjustDialog(),
            s && o.$element[0].offsetWidth,
            o.$element.addClass("in").attr("aria-hidden", !1),
            o.enforceFocus();
            var n = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            s ? o.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                o.$element.trigger("focus").trigger(n)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(n)
        }))
    }
    ,
    i.prototype.hide = function(e) {
        e && e.preventDefault(),
        e = t.Event("hide.bs.modal"),
        this.$element.trigger(e),
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        t(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"),
        t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }
    ,
    i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(),
        this.backdrop(function() {
            t.$body.removeClass("modal-open"),
            t.resetAdjustments(),
            t.resetScrollbar(),
            t.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    i.prototype.backdrop = function(e) {
        var o = this
          , s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var n = t.support.transition && s;
            if (this.$backdrop = t('<div class="modal-backdrop ' + s + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", t.proxy(function(t) {
                t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
            }, this)),
            n && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
                return;
            n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                o.removeBackdrop(),
                e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a()
        } else
            e && e()
    }
    ,
    i.prototype.handleUpdate = function() {
        this.options.backdrop && this.adjustBackdrop(),
        this.adjustDialog()
    }
    ,
    i.prototype.adjustBackdrop = function() {
        this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
    }
    ,
    i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }
    ,
    i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    i.prototype.checkScrollbar = function() {
        this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }
    ,
    i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }
    ,
    i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure",
        this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t),
        e
    }
    ;
    var o = t.fn.modal;
    t.fn.modal = e,
    t.fn.modal.Constructor = i,
    t.fn.modal.noConflict = function() {
        return t.fn.modal = o,
        this
    }
    ,
    t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var o = t(this)
          , s = o.attr("href")
          , n = t(o.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, ""))
          , a = n.data("bs.modal") ? "toggle" : t.extend({
            remote: !/#/.test(s) && s
        }, n.data(), o.data());
        o.is("a") && i.preventDefault(),
        n.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
                o.is(":visible") && o.trigger("focus")
            })
        }),
        e.call(n, a, this)
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var o = t(this)
              , s = o.data("bs.tooltip")
              , n = "object" == typeof e && e
              , a = n && n.selector;
            (s || "destroy" != e) && (a ? (s || o.data("bs.tooltip", s = {}),
            s[a] || (s[a] = new i(this,n))) : s || o.data("bs.tooltip", s = new i(this,n)),
            "string" == typeof e && s[e]())
        })
    }
    var i = function(t, e) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
        this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.1",
    i.TRANSITION_DURATION = 150,
    i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    i.prototype.init = function(e, i, o) {
        this.enabled = !0,
        this.type = e,
        this.$element = t(i),
        this.options = this.getOptions(o),
        this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
        for (var s = this.options.trigger.split(" "), n = s.length; n--; ) {
            var a = s[n];
            if ("click" == a)
                this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != a) {
                var r = "hover" == a ? "mouseenter" : "focusin"
                  , l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, t.proxy(this.enter, this)),
                this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }
    ,
    i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e),
        e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }),
        e
    }
    ,
    i.prototype.getDelegateOptions = function() {
        var e = {}
          , i = this.getDefaults();
        return this._options && t.each(this._options, function(t, o) {
            i[t] != o && (e[t] = o)
        }),
        e
    }
    ,
    i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i && i.$tip && i.$tip.is(":visible") ? void (i.hoverState = "in") : (i || (i = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, i)),
        clearTimeout(i.timeout),
        i.hoverState = "in",
        i.options.delay && i.options.delay.show ? void (i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }
    ,
    i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, i)),
        clearTimeout(i.timeout),
        i.hoverState = "out",
        i.options.delay && i.options.delay.hide ? void (i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide()
    }
    ,
    i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var o = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !o)
                return;
            var s = this
              , n = this.tip()
              , a = this.getUID(this.type);
            this.setContent(),
            n.attr("id", a),
            this.$element.attr("aria-describedby", a),
            this.options.animation && n.addClass("fade");
            var r = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement
              , l = /\s?auto?\s?/i
              , h = l.test(r);
            h && (r = r.replace(l, "") || "top"),
            n.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(r).data("bs." + this.type, this),
            this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element);
            var d = this.getPosition()
              , p = n[0].offsetWidth
              , c = n[0].offsetHeight;
            if (h) {
                var f = r
                  , u = this.options.container ? t(this.options.container) : this.$element.parent()
                  , g = this.getPosition(u);
                r = "bottom" == r && d.bottom + c > g.bottom ? "top" : "top" == r && d.top - c < g.top ? "bottom" : "right" == r && d.right + p > g.width ? "left" : "left" == r && d.left - p < g.left ? "right" : r,
                n.removeClass(f).addClass(r)
            }
            var v = this.getCalculatedOffset(r, d, p, c);
            this.applyPlacement(v, r);
            var m = function() {
                var t = s.hoverState;
                s.$element.trigger("shown.bs." + s.type),
                s.hoverState = null,
                "out" == t && s.leave(s)
            };
            t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
        }
    }
    ,
    i.prototype.applyPlacement = function(e, i) {
        var o = this.tip()
          , s = o[0].offsetWidth
          , n = o[0].offsetHeight
          , a = parseInt(o.css("margin-top"), 10)
          , r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0),
        isNaN(r) && (r = 0),
        e.top = e.top + a,
        e.left = e.left + r,
        t.offset.setOffset(o[0], t.extend({
            using: function(t) {
                o.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0),
        o.addClass("in");
        var l = o[0].offsetWidth
          , h = o[0].offsetHeight;
        "top" == i && h != n && (e.top = e.top + n - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? e.left += d.left : e.top += d.top;
        var p = /top|bottom/.test(i)
          , c = p ? 2 * d.left - s + l : 2 * d.top - n + h
          , f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e),
        this.replaceArrow(c, o[0][f], p)
    }
    ,
    i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }
    ,
    i.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
        t.removeClass("fade in top bottom left right")
    }
    ,
    i.prototype.hide = function(e) {
        function o() {
            "in" != s.hoverState && n.detach(),
            s.$element.removeAttr("aria-describedby").trigger("hidden.bs." + s.type),
            e && e()
        }
        var s = this
          , n = this.tip()
          , a = t.Event("hide.bs." + this.type);
        if (this.$element.trigger(a),
        !a.isDefaultPrevented())
            return n.removeClass("in"),
            t.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", o).emulateTransitionEnd(i.TRANSITION_DURATION) : o(),
            this.hoverState = null,
            this
    }
    ,
    i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }
    ,
    i.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0]
          , o = "BODY" == i.tagName
          , s = i.getBoundingClientRect();
        null == s.width && (s = t.extend({}, s, {
            width: s.right - s.left,
            height: s.bottom - s.top
        }));
        var n = o ? {
            top: 0,
            left: 0
        } : e.offset()
          , a = {
            scroll: o ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        }
          , r = o ? {
            width: t(window).width(),
            height: t(window).height()
        } : null;
        return t.extend({}, s, a, r, n)
    }
    ,
    i.prototype.getCalculatedOffset = function(t, e, i, o) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - o,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - o / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - o / 2,
            left: e.left + e.width
        }
    }
    ,
    i.prototype.getViewportAdjustedDelta = function(t, e, i, o) {
        var s = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return s;
        var n = this.options.viewport && this.options.viewport.padding || 0
          , a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var r = e.top - n - a.scroll
              , l = e.top + n - a.scroll + o;
            r < a.top ? s.top = a.top - r : l > a.top + a.height && (s.top = a.top + a.height - l)
        } else {
            var h = e.left - n
              , d = e.left + n + i;
            h < a.left ? s.left = a.left - h : d > a.width && (s.left = a.left + a.width - d)
        }
        return s
    }
    ,
    i.prototype.getTitle = function() {
        var t, e = this.$element, i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }
    ,
    i.prototype.getUID = function(t) {
        do
            t += ~~(1e6 * Math.random());
        while (document.getElementById(t));return t
    }
    ,
    i.prototype.tip = function() {
        return this.$tip = this.$tip || t(this.options.template)
    }
    ,
    i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    i.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    i.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type),
        i || (i = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        t(e.currentTarget).data("bs." + this.type, i))),
        i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }
    ,
    i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type)
        })
    }
    ;
    var o = t.fn.tooltip;
    t.fn.tooltip = e,
    t.fn.tooltip.Constructor = i,
    t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = o,
        this
    }
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var o = t(this)
              , s = o.data("bs.popover")
              , n = "object" == typeof e && e
              , a = n && n.selector;
            (s || "destroy" != e) && (a ? (s || o.data("bs.popover", s = {}),
            s[a] || (s[a] = new i(this,n))) : s || o.data("bs.popover", s = new i(this,n)),
            "string" == typeof e && s[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.1",
    i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype),
    i.prototype.constructor = i,
    i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }
    ,
    i.prototype.setContent = function() {
        var t = this.tip()
          , e = this.getTitle()
          , i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
        t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i),
        t.removeClass("fade top bottom left right in"),
        t.find(".popover-title").html() || t.find(".popover-title").hide()
    }
    ,
    i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    i.prototype.getContent = function() {
        var t = this.$element
          , e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }
    ,
    i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ,
    i.prototype.tip = function() {
        return this.$tip || (this.$tip = t(this.options.template)),
        this.$tip
    }
    ;
    var o = t.fn.popover;
    t.fn.popover = e,
    t.fn.popover.Constructor = i,
    t.fn.popover.noConflict = function() {
        return t.fn.popover = o,
        this
    }
}(jQuery),
+function(t) {
    "use strict";
    function e(i, o) {
        var s = t.proxy(this.process, this);
        this.$body = t("body"),
        this.$scrollElement = t(t(i).is("body") ? window : i),
        this.options = t.extend({}, e.DEFAULTS, o),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", s),
        this.refresh(),
        this.process()
    }
    function i(i) {
        return this.each(function() {
            var o = t(this)
              , s = o.data("bs.scrollspy")
              , n = "object" == typeof i && i;
            s || o.data("bs.scrollspy", s = new e(this,n)),
            "string" == typeof i && s[i]()
        })
    }
    e.VERSION = "3.3.1",
    e.DEFAULTS = {
        offset: 10
    },
    e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    e.prototype.refresh = function() {
        var e = "offset"
          , i = 0;
        t.isWindow(this.$scrollElement[0]) || (e = "position",
        i = this.$scrollElement.scrollTop()),
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight();
        var o = this;
        this.$body.find(this.selector).map(function() {
            var o = t(this)
              , s = o.data("target") || o.attr("href")
              , n = /^#./.test(s) && t(s);
            return n && n.length && n.is(":visible") && [[n[e]().top + i, s]] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            o.offsets.push(this[0]),
            o.targets.push(this[1])
        })
    }
    ,
    e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), o = this.options.offset + i - this.$scrollElement.height(), s = this.offsets, n = this.targets, a = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(),
        e >= o)
            return a != (t = n[n.length - 1]) && this.activate(t);
        if (a && e < s[0])
            return this.activeTarget = null,
            this.clear();
        for (t = s.length; t--; )
            a != n[t] && e >= s[t] && (!s[t + 1] || e <= s[t + 1]) && this.activate(n[t])
    }
    ,
    e.prototype.activate = function(e) {
        this.activeTarget = e,
        this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
          , o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length && (o = o.closest("li.dropdown").addClass("active")),
        o.trigger("activate.bs.scrollspy")
    }
    ,
    e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var o = t.fn.scrollspy;
    t.fn.scrollspy = i,
    t.fn.scrollspy.Constructor = e,
    t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = o,
        this
    }
    ,
    t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var o = t(this)
              , s = o.data("bs.tab");
            s || o.data("bs.tab", s = new i(this)),
            "string" == typeof e && s[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.1",
    i.TRANSITION_DURATION = 150,
    i.prototype.show = function() {
        var e = this.element
          , i = e.closest("ul:not(.dropdown-menu)")
          , o = e.data("target");
        if (o || (o = e.attr("href"),
        o = o && o.replace(/.*(?=#[^\s]*$)/, "")),
        !e.parent("li").hasClass("active")) {
            var s = i.find(".active:last a")
              , n = t.Event("hide.bs.tab", {
                relatedTarget: e[0]
            })
              , a = t.Event("show.bs.tab", {
                relatedTarget: s[0]
            });
            if (s.trigger(n),
            e.trigger(a),
            !a.isDefaultPrevented() && !n.isDefaultPrevented()) {
                var r = t(o);
                this.activate(e.closest("li"), i),
                this.activate(r, r.parent(), function() {
                    s.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }),
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: s[0]
                    })
                })
            }
        }
    }
    ,
    i.prototype.activate = function(e, o, s) {
        function n() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            r ? (e[0].offsetWidth,
            e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            s && s()
        }
        var a = o.find("> .active")
          , r = s && t.support.transition && (a.length && a.hasClass("fade") || !!o.find("> .fade").length);
        a.length && r ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(),
        a.removeClass("in")
    }
    ;
    var o = t.fn.tab;
    t.fn.tab = e,
    t.fn.tab.Constructor = i,
    t.fn.tab.noConflict = function() {
        return t.fn.tab = o,
        this
    }
    ;
    var s = function(i) {
        i.preventDefault(),
        e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', s).on("click.bs.tab.data-api", '[data-toggle="pill"]', s)
}(jQuery),
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var o = t(this)
              , s = o.data("bs.affix")
              , n = "object" == typeof e && e;
            s || o.data("bs.affix", s = new i(this,n)),
            "string" == typeof e && s[e]()
        })
    }
    var i = function(e, o) {
        this.options = t.extend({}, i.DEFAULTS, o),
        this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = t(e),
        this.affixed = this.unpin = this.pinnedOffset = null,
        this.checkPosition()
    };
    i.VERSION = "3.3.1",
    i.RESET = "affix affix-top affix-bottom",
    i.DEFAULTS = {
        offset: 0,
        target: window
    },
    i.prototype.getState = function(t, e, i, o) {
        var s = this.$target.scrollTop()
          , n = this.$element.offset()
          , a = this.$target.height();
        if (null != i && "top" == this.affixed)
            return s < i && "top";
        if ("bottom" == this.affixed)
            return null != i ? !(s + this.unpin <= n.top) && "bottom" : !(s + a <= t - o) && "bottom";
        var r = null == this.affixed
          , l = r ? s : n.top
          , h = r ? a : e;
        return null != i && l <= i ? "top" : null != o && l + h >= t - o && "bottom"
    }
    ,
    i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop()
          , e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }
    ,
    i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }
    ,
    i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height()
              , o = this.options.offset
              , s = o.top
              , n = o.bottom
              , a = t("body").height();
            "object" != typeof o && (n = s = o),
            "function" == typeof s && (s = o.top(this.$element)),
            "function" == typeof n && (n = o.bottom(this.$element));
            var r = this.getState(a, e, s, n);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (r ? "-" + r : "")
                  , h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h),
                h.isDefaultPrevented())
                    return;
                this.affixed = r,
                this.unpin = "bottom" == r ? this.getPinnedOffset() : null,
                this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: a - e - n
            })
        }
    }
    ;
    var o = t.fn.affix;
    t.fn.affix = e,
    t.fn.affix.Constructor = i,
    t.fn.affix.noConflict = function() {
        return t.fn.affix = o,
        this
    }
    ,
    t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this)
              , o = i.data();
            o.offset = o.offset || {},
            null != o.offsetBottom && (o.offset.bottom = o.offsetBottom),
            null != o.offsetTop && (o.offset.top = o.offsetTop),
            e.call(i, o)
        })
    })
}(jQuery);
+function(t) {
    "use strict";
    function e(e) {
        return this.each(function() {
            var a = t(this)
              , i = t.extend({}, r.DEFAULTS, a.data(), "object" == typeof e && e)
              , o = a.data("bs.validator");
            (o || "destroy" != e) && (o || a.data("bs.validator", o = new r(this,i)),
            "string" == typeof e && o[e]())
        })
    }
    var a = ':input:not([type="submit"], button):enabled:visible'
      , r = function(e, a) {
        this.$element = t(e),
        this.options = a,
        a.errors = t.extend({}, r.DEFAULTS.errors, a.errors);
        for (var i in a.custom)
            if (!a.errors[i])
                throw new Error("Missing default error message for custom validator: " + i);
        t.extend(r.VALIDATORS, a.custom),
        this.$element.attr("novalidate", !0),
        this.toggleSubmit(),
        this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", t.proxy(this.validateInput, this)),
        this.$element.on("submit.bs.validator", t.proxy(this.onSubmit, this)),
        this.$element.find("[data-match]").each(function() {
            var e = t(this)
              , a = e.data("match");
            t(a).on("input.bs.validator", function(t) {
                e.val() && e.trigger("input.bs.validator")
            })
        })
    };
    r.DEFAULTS = {
        delay: 500,
        html: !1,
        disable: !0,
        custom: {},
        errors: {
            match: "Does not match",
            minlength: "Not long enough"
        },
        feedback: {
            success: "glyphicon-ok",
            error: "glyphicon-warning-sign"
        }
    },
    r.VALIDATORS = {
        "native": function(t) {
            var e = t[0];
            return !e.checkValidity || e.checkValidity()
        },
        match: function(e) {
            var a = e.data("match");
            return !e.val() || e.val() === t(a).val()
        },
        minlength: function(t) {
            var e = t.data("minlength");
            return !t.val() || t.val().length >= e
        }
    },
    r.prototype.validateInput = function(e) {
        var a = t(e.target)
          , r = a.data("bs.validator.errors");
        if (a.is('[type="radio"]') && (a = this.$element.find('input[name="' + a.attr("name") + '"]')),
        this.$element.trigger(e = t.Event("validate.bs.validator", {
            relatedTarget: a[0]
        })),
        !e.isDefaultPrevented()) {
            var i = this;
            this.runValidators(a).done(function(o) {
                a.data("bs.validator.errors", o),
                o.length ? i.showErrors(a) : i.clearErrors(a),
                r && o.toString() === r.toString() || (e = o.length ? t.Event("invalid.bs.validator", {
                    relatedTarget: a[0],
                    detail: o
                }) : t.Event("valid.bs.validator", {
                    relatedTarget: a[0],
                    detail: r
                }),
                i.$element.trigger(e)),
                i.toggleSubmit(),
                i.$element.trigger(t.Event("validated.bs.validator", {
                    relatedTarget: a[0]
                }))
            })
        }
    }
    ,
    r.prototype.runValidators = function(e) {
        function a(t) {
            return e.data(t + "-error") || e.data("error") || "native" == t && e[0].validationMessage || n.errors[t]
        }
        var i = []
          , o = t.Deferred()
          , n = this.options;
        return e.data("bs.validator.deferred") && e.data("bs.validator.deferred").reject(),
        e.data("bs.validator.deferred", o),
        t.each(r.VALIDATORS, t.proxy(function(t, r) {
            if ((e.data(t) || "native" == t) && !r.call(this, e)) {
                var o = a(t);
                !~i.indexOf(o) && i.push(o)
            }
        }, this)),
        !i.length && e.val() && e.data("remote") ? this.defer(e, function() {
            var r = {};
            r[e.attr("name")] = e.val(),
            t.get(e.data("remote"), r).fail(function(t, e, r) {
                i.push(a("remote") || r)
            }).always(function() {
                o.resolve(i)
            })
        }) : o.resolve(i),
        o.promise()
    }
    ,
    r.prototype.validate = function() {
        var t = this.options.delay;
        return this.options.delay = 0,
        this.$element.find(a).trigger("input.bs.validator"),
        this.options.delay = t,
        this
    }
    ,
    r.prototype.showErrors = function(e) {
        var a = this.options.html ? "html" : "text";
        this.defer(e, function() {
            var r = e.closest(".form-group")
              , i = r.find(".help-block.with-errors")
              , o = r.find(".form-control-feedback")
              , n = e.data("bs.validator.errors");
            n && n.length && (n = t("<ul/>").addClass("list-unstyled").append(t.map(n, function(e) {
                return t("<li/>")[a](e)
            })),
            void 0 === i.data("bs.validator.originalContent") && i.data("bs.validator.originalContent", i.html()),
            i.empty().append(n),
            r.addClass("has-error"),
            o.length && o.removeClass(this.options.feedback.success) && o.addClass(this.options.feedback.error) && r.removeClass("has-success"))
        })
    }
    ,
    r.prototype.clearErrors = function(t) {
        var e = t.closest(".form-group")
          , a = e.find(".help-block.with-errors")
          , r = e.find(".form-control-feedback");
        a.html(a.data("bs.validator.originalContent")),
        e.removeClass("has-error"),
        r.length && r.removeClass(this.options.feedback.error) && r.addClass(this.options.feedback.success) && e.addClass("has-success")
    }
    ,
    r.prototype.hasErrors = function() {
        function e() {
            return !!(t(this).data("bs.validator.errors") || []).length
        }
        return !!this.$element.find(a).filter(e).length
    }
    ,
    r.prototype.isIncomplete = function() {
        function e() {
            return "checkbox" === this.type ? !this.checked : "radio" === this.type ? !t('[name="' + this.name + '"]:checked').length : "" === t.trim(this.value)
        }
        return !!this.$element.find(a).filter("[required]").filter(e).length
    }
    ,
    r.prototype.onSubmit = function(t) {
        this.validate(),
        (this.isIncomplete() || this.hasErrors()) && t.preventDefault()
    }
    ,
    r.prototype.toggleSubmit = function() {
        if (this.options.disable) {
            var e = t('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]'));
            e.toggleClass("disabled", this.isIncomplete() || this.hasErrors()).css({
                "pointer-events": "all",
                cursor: "pointer"
            })
        }
    }
    ,
    r.prototype.defer = function(e, a) {
        return a = t.proxy(a, this),
        this.options.delay ? (window.clearTimeout(e.data("bs.validator.timeout")),
        void e.data("bs.validator.timeout", window.setTimeout(a, this.options.delay))) : a()
    }
    ,
    r.prototype.destroy = function() {
        return this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"),
        this.$element.find(a).off(".bs.validator").removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function() {
            var e = t(this)
              , a = e.data("bs.validator.timeout");
            window.clearTimeout(a) && e.removeData("bs.validator.timeout")
        }),
        this.$element.find(".help-block.with-errors").each(function() {
            var e = t(this)
              , a = e.data("bs.validator.originalContent");
            e.removeData("bs.validator.originalContent").html(a)
        }),
        this.$element.find('input[type="submit"], button[type="submit"]').removeClass("disabled"),
        this.$element.find(".has-error").removeClass("has-error"),
        this
    }
    ;
    var i = t.fn.validator;
    t.fn.validator = e,
    t.fn.validator.Constructor = r,
    t.fn.validator.noConflict = function() {
        return t.fn.validator = i,
        this
    }
    ,
    t(window).on("load", function() {
        t('form[data-toggle="validator"]').each(function() {
            var a = t(this);
            e.call(a, a.data())
        })
    })
}(jQuery);
!function(e) {
    function t(t) {
        var n = e(this)
          , i = null
          , o = []
          , u = null
          , r = null
          , c = e.extend({
            rowSelector: "> li",
            submenuSelector: "*",
            submenuDirection: "right",
            tolerance: 75,
            enter: e.noop,
            exit: e.noop,
            activate: e.noop,
            deactivate: e.noop,
            exitMenu: e.noop
        }, t)
          , l = 3
          , f = 300
          , a = function(e) {
            o.push({
                x: e.pageX,
                y: e.pageY
            }),
            o.length > l && o.shift()
        }
          , s = function() {
            r && clearTimeout(r),
            c.exitMenu(this) && (i && c.deactivate(i),
            i = null)
        }
          , h = function() {
            r && clearTimeout(r),
            c.enter(this),
            v(this)
        }
          , m = function() {
            c.exit(this)
        }
          , x = function() {
            y(this)
        }
          , y = function(e) {
            e != i && (i && c.deactivate(i),
            c.activate(e),
            i = e)
        }
          , v = function(e) {
            var t = p();
            t ? r = setTimeout(function() {
                v(e)
            }, t) : y(e)
        }
          , p = function() {
            function t(e, t) {
                return (t.y - e.y) / (t.x - e.x)
            }
            if (!i || !e(i).is(c.submenuSelector))
                return 0;
            var r = n.offset()
              , l = {
                x: r.left,
                y: r.top - c.tolerance
            }
              , a = {
                x: r.left + n.outerWidth(),
                y: l.y
            }
              , s = {
                x: r.left,
                y: r.top + n.outerHeight() + c.tolerance
            }
              , h = {
                x: r.left + n.outerWidth(),
                y: s.y
            }
              , m = o[o.length - 1]
              , x = o[0];
            if (!m)
                return 0;
            if (x || (x = m),
            x.x < r.left || x.x > h.x || x.y < r.top || x.y > h.y)
                return 0;
            if (u && m.x == u.x && m.y == u.y)
                return 0;
            var y = a
              , v = h;
            "left" == c.submenuDirection ? (y = s,
            v = l) : "below" == c.submenuDirection ? (y = h,
            v = s) : "above" == c.submenuDirection && (y = l,
            v = a);
            var p = t(m, y)
              , b = t(m, v)
              , d = t(x, y)
              , g = t(x, v);
            return p < d && b > g ? (u = m,
            f) : (u = null,
            0)
        };
        n.mouseleave(s).find(c.rowSelector).mouseenter(h).mouseleave(m).click(x),
        e(document).mousemove(a)
    }
    e.fn.menuAim = function(e) {
        return this.each(function() {
            t.call(this, e)
        }),
        this
    }
}(jQuery);
var mejs = mejs || {};
mejs.version = "2.18.1",
mejs.meIndex = 0,
mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube", "video/dailymotion", "video/x-dailymotion", "application/x-mpegURL"]
    }],
    youtube: [{
        version: null,
        types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
    }],
    vimeo: [{
        version: null,
        types: ["video/vimeo", "video/x-vimeo"]
    }]
},
mejs.Utility = {
    encodeUrl: function(e) {
        return encodeURIComponent(e)
    },
    escapeHTML: function(e) {
        return e.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function(e) {
        var t = document.createElement("div");
        return t.innerHTML = '<a href="' + this.escapeHTML(e) + '">x</a>',
        t.firstChild.href
    },
    getScriptPath: function(e) {
        for (var t, i, n, s, o, a, r = 0, l = "", u = "", d = document.getElementsByTagName("script"), c = d.length, m = e.length; r < c; r++) {
            for (s = d[r].src,
            i = s.lastIndexOf("/"),
            i > -1 ? (a = s.substring(i + 1),
            o = s.substring(0, i + 1)) : (a = s,
            o = ""),
            t = 0; t < m; t++)
                if (u = e[t],
                n = a.indexOf(u),
                n > -1) {
                    l = o;
                    break
                }
            if ("" !== l)
                break
        }
        return l
    },
    calculateTimeFormat: function(e, t, i) {
        e < 0 && (e = 0),
        "undefined" == typeof i && (i = 25);
        var n = t.timeFormat
          , s = n[0]
          , o = n[1] == n[0]
          , a = o ? 2 : 1
          , r = ":"
          , l = Math.floor(e / 3600) % 24
          , u = Math.floor(e / 60) % 60
          , d = Math.floor(e % 60)
          , c = Math.floor((e % 1 * i).toFixed(3))
          , m = [[c, "f"], [d, "s"], [u, "m"], [l, "h"]];
        n.length < a && (r = n[a]);
        for (var p = !1, h = 0, f = m.length; h < f; h++)
            if (n.indexOf(m[h][1]) !== -1)
                p = !0;
            else if (p) {
                for (var v = !1, g = h; g < f; g++)
                    if (m[g][0] > 0) {
                        v = !0;
                        break
                    }
                if (!v)
                    break;
                o || (n = s + n),
                n = m[h][1] + r + n,
                o && (n = m[h][1] + n),
                s = m[h][1]
            }
        t.currentTimeFormat = n
    },
    twoDigitsString: function(e) {
        return e < 10 ? "0" + e : String(e)
    },
    secondsToTimeCode: function(e, t) {
        e < 0 && (e = 0);
        var n = t.framesPerSecond;
        "undefined" == typeof n && (n = 25);
        var s = t.currentTimeFormat
          , o = Math.floor(e / 3600) % 24
          , a = Math.floor(e / 60) % 60
          , r = Math.floor(e % 60)
          , l = Math.floor((e % 1 * n).toFixed(3));
        lis = [[l, "f"], [r, "s"], [a, "m"], [o, "h"]];
        var u = s;
        for (i = 0,
        len = lis.length; i < len; i++)
            u = u.replace(lis[i][1] + lis[i][1], this.twoDigitsString(lis[i][0])),
            u = u.replace(lis[i][1], lis[i][0]);
        return u
    },
    timeCodeToSeconds: function(e, t, i, n) {
        "undefined" == typeof i ? i = !1 : "undefined" == typeof n && (n = 25);
        var s = e.split(":")
          , o = parseInt(s[0], 10)
          , a = parseInt(s[1], 10)
          , r = parseInt(s[2], 10)
          , l = 0
          , u = 0;
        return i && (l = parseInt(s[3]) / n),
        u = 3600 * o + 60 * a + r + l
    },
    convertSMPTEtoSeconds: function(e) {
        if ("string" != typeof e)
            return !1;
        e = e.replace(",", ".");
        var t = 0
          , i = e.indexOf(".") != -1 ? e.split(".")[1].length : 0
          , n = 1;
        e = e.split(":").reverse();
        for (var s = 0; s < e.length; s++)
            n = 1,
            s > 0 && (n = Math.pow(60, s)),
            t += Number(e[s]) * n;
        return Number(t.toFixed(i))
    },
    removeSwf: function(e) {
        var t = document.getElementById(e);
        t && /object|embed/i.test(t.nodeName) && (mejs.MediaFeatures.isIE ? (t.style.display = "none",
        function() {
            4 == t.readyState ? mejs.Utility.removeObjectInIE(e) : setTimeout(arguments.callee, 10)
        }()) : t.parentNode.removeChild(t))
    },
    removeObjectInIE: function(e) {
        var t = document.getElementById(e);
        if (t) {
            for (var i in t)
                "function" == typeof t[i] && (t[i] = null);
            t.parentNode.removeChild(t)
        }
    }
},
mejs.PluginDetector = {
    hasPluginVersion: function(e, t) {
        var i = this.plugins[e];
        return t[1] = t[1] || 0,
        t[2] = t[2] || 0,
        i[0] > t[0] || i[0] == t[0] && i[1] > t[1] || i[0] == t[0] && i[1] == t[1] && i[2] >= t[2]
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function(e, t, i, n, s) {
        this.plugins[e] = this.detectPlugin(t, i, n, s)
    },
    detectPlugin: function(e, t, i, n) {
        var s, o, a, r = [0, 0, 0];
        if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[e]) {
            if (s = this.nav.plugins[e].description,
            s && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[t] || this.nav.mimeTypes[t].enabledPlugin))
                for (r = s.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."),
                o = 0; o < r.length; o++)
                    r[o] = parseInt(r[o].match(/\d+/), 10)
        } else if ("undefined" != typeof window.ActiveXObject)
            try {
                a = new ActiveXObject(i),
                a && (r = n(a))
            } catch (l) {}
        return r
    }
},
mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(e) {
    var t = []
      , i = e.GetVariable("$version");
    return i && (i = i.split(" ")[1].split(","),
    t = [parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10)]),
    t
}),
mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(e) {
    var t = [0, 0, 0, 0]
      , i = function(e, t, i, n) {
        for (; e.isVersionSupported(t[0] + "." + t[1] + "." + t[2] + "." + t[3]); )
            t[i] += n;
        t[i] -= n
    };
    return i(e, t, 0, 1),
    i(e, t, 1, 1),
    i(e, t, 2, 1e4),
    i(e, t, 2, 1e3),
    i(e, t, 2, 100),
    i(e, t, 2, 10),
    i(e, t, 2, 1),
    i(e, t, 3, 1),
    t
}),
mejs.MediaFeatures = {
    init: function() {
        var e, t, i = this, n = document, s = mejs.PluginDetector.nav, o = mejs.PluginDetector.ua.toLowerCase(), a = ["source", "track", "audio", "video"];
        i.isiPad = null !== o.match(/ipad/i),
        i.isiPhone = null !== o.match(/iphone/i),
        i.isiOS = i.isiPhone || i.isiPad,
        i.isAndroid = null !== o.match(/android/i),
        i.isBustedAndroid = null !== o.match(/android 2\.[12]/),
        i.isBustedNativeHTTPS = "https:" === location.protocol && (null !== o.match(/android [12]\./) || null !== o.match(/macintosh.* version.* safari/)),
        i.isIE = s.appName.toLowerCase().indexOf("microsoft") != -1 || null !== s.appName.toLowerCase().match(/trident/gi),
        i.isChrome = null !== o.match(/chrome/gi),
        i.isChromium = null !== o.match(/chromium/gi),
        i.isFirefox = null !== o.match(/firefox/gi),
        i.isWebkit = null !== o.match(/webkit/gi),
        i.isGecko = null !== o.match(/gecko/gi) && !i.isWebkit && !i.isIE,
        i.isOpera = null !== o.match(/opera/gi),
        i.hasTouch = "ontouchstart"in window,
        i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
        for (e = 0; e < a.length; e++)
            t = document.createElement(a[e]);
        i.supportsMediaTag = "undefined" != typeof t.canPlayType || i.isBustedAndroid;
        try {
            t.canPlayType("video/mp4")
        } catch (r) {
            i.supportsMediaTag = !1
        }
        i.hasSemiNativeFullScreen = "undefined" != typeof t.webkitEnterFullscreen,
        i.hasNativeFullscreen = "undefined" != typeof t.requestFullscreen,
        i.hasWebkitNativeFullScreen = "undefined" != typeof t.webkitRequestFullScreen,
        i.hasMozNativeFullScreen = "undefined" != typeof t.mozRequestFullScreen,
        i.hasMsNativeFullScreen = "undefined" != typeof t.msRequestFullscreen,
        i.hasTrueNativeFullScreen = i.hasWebkitNativeFullScreen || i.hasMozNativeFullScreen || i.hasMsNativeFullScreen,
        i.nativeFullScreenEnabled = i.hasTrueNativeFullScreen,
        i.hasMozNativeFullScreen ? i.nativeFullScreenEnabled = document.mozFullScreenEnabled : i.hasMsNativeFullScreen && (i.nativeFullScreenEnabled = document.msFullscreenEnabled),
        i.isChrome && (i.hasSemiNativeFullScreen = !1),
        i.hasTrueNativeFullScreen && (i.fullScreenEventName = "",
        i.hasWebkitNativeFullScreen ? i.fullScreenEventName = "webkitfullscreenchange" : i.hasMozNativeFullScreen ? i.fullScreenEventName = "mozfullscreenchange" : i.hasMsNativeFullScreen && (i.fullScreenEventName = "MSFullscreenChange"),
        i.isFullScreen = function() {
            return i.hasMozNativeFullScreen ? n.mozFullScreen : i.hasWebkitNativeFullScreen ? n.webkitIsFullScreen : i.hasMsNativeFullScreen ? null !== n.msFullscreenElement : void 0
        }
        ,
        i.requestFullScreen = function(e) {
            i.hasWebkitNativeFullScreen ? e.webkitRequestFullScreen() : i.hasMozNativeFullScreen ? e.mozRequestFullScreen() : i.hasMsNativeFullScreen && e.msRequestFullscreen()
        }
        ,
        i.cancelFullScreen = function() {
            i.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : i.hasMozNativeFullScreen ? document.mozCancelFullScreen() : i.hasMsNativeFullScreen && document.msExitFullscreen()
        }
        ),
        i.hasSemiNativeFullScreen && o.match(/mac os x 10_5/i) && (i.hasNativeFullScreen = !1,
        i.hasSemiNativeFullScreen = !1)
    }
},
mejs.MediaFeatures.init(),
mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: !1,
    setCurrentTime: function(e) {
        this.currentTime = e
    },
    setMuted: function(e) {
        this.muted = e
    },
    setVolume: function(e) {
        this.volume = e
    },
    stop: function() {
        this.pause()
    },
    setSrc: function(e) {
        for (var t = this.getElementsByTagName("source"); t.length > 0; )
            this.removeChild(t[0]);
        if ("string" == typeof e)
            this.src = e;
        else {
            var i, n;
            for (i = 0; i < e.length; i++)
                if (n = e[i],
                this.canPlayType(n.type)) {
                    this.src = n.src;
                    break
                }
        }
    },
    setVideoSize: function(e, t) {
        this.width = e,
        this.height = t
    }
},
mejs.PluginMediaElement = function(e, t, i) {
    this.id = e,
    this.pluginType = t,
    this.src = i,
    this.events = {},
    this.attributes = {}
}
,
mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: !1,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: !0,
    ended: !1,
    seeking: !1,
    duration: 0,
    error: null,
    tagName: "",
    muted: !1,
    volume: 1,
    currentTime: 0,
    play: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(),
        this.paused = !1)
    },
    load: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType || this.pluginApi.loadMedia(),
        this.paused = !1)
    },
    pause: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(),
        this.paused = !0)
    },
    stop: function() {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(),
        this.paused = !0)
    },
    canPlayType: function(e) {
        var t, i, n, s = mejs.plugins[this.pluginType];
        for (t = 0; t < s.length; t++)
            if (n = s[t],
            mejs.PluginDetector.hasPluginVersion(this.pluginType, n.version))
                for (i = 0; i < n.types.length; i++)
                    if (e == n.types[i])
                        return "probably";
        return ""
    },
    positionFullscreenButton: function(e, t, i) {
        null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(e), Math.floor(t), i)
    },
    hideFullscreenButton: function() {
        null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function(e) {
        if ("string" == typeof e)
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(e)),
            this.src = mejs.Utility.absolutizeUrl(e);
        else {
            var t, i;
            for (t = 0; t < e.length; t++)
                if (i = e[t],
                this.canPlayType(i.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(i.src)),
                    this.src = mejs.Utility.absolutizeUrl(i.src);
                    break
                }
        }
    },
    setCurrentTime: function(e) {
        null != this.pluginApi && ("youtube" == this.pluginType || "vimeo" == this.pluginType ? this.pluginApi.seekTo(e) : this.pluginApi.setCurrentTime(e),
        this.currentTime = e)
    },
    setVolume: function(e) {
        null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.setVolume(100 * e) : this.pluginApi.setVolume(e),
        this.volume = e)
    },
    setMuted: function(e) {
        null != this.pluginApi && ("youtube" == this.pluginType ? (e ? this.pluginApi.mute() : this.pluginApi.unMute(),
        this.muted = e,
        this.dispatchEvent({
            type: "volumechange"
        })) : this.pluginApi.setMuted(e),
        this.muted = e)
    },
    setVideoSize: function(e, t) {
        this.pluginElement && this.pluginElement.style && (this.pluginElement.style.width = e + "px",
        this.pluginElement.style.height = t + "px"),
        null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(e, t)
    },
    setFullscreen: function(e) {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(e)
    },
    enterFullScreen: function() {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0)
    },
    exitFullScreen: function() {
        null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1)
    },
    addEventListener: function(e, t, i) {
        this.events[e] = this.events[e] || [],
        this.events[e].push(t)
    },
    removeEventListener: function(e, t) {
        if (!e)
            return this.events = {},
            !0;
        var i = this.events[e];
        if (!i)
            return !0;
        if (!t)
            return this.events[e] = [],
            !0;
        for (var n = 0; n < i.length; n++)
            if (i[n] === t)
                return this.events[e].splice(n, 1),
                !0;
        return !1
    },
    dispatchEvent: function(e) {
        var t, i = this.events[e.type];
        if (i)
            for (t = 0; t < i.length; t++)
                i[t].apply(this, [e])
    },
    hasAttribute: function(e) {
        return e in this.attributes
    },
    removeAttribute: function(e) {
        delete this.attributes[e]
    },
    getAttribute: function(e) {
        return this.hasAttribute(e) ? this.attributes[e] : ""
    },
    setAttribute: function(e, t) {
        this.attributes[e] = t
    },
    remove: function() {
        mejs.Utility.removeSwf(this.pluginElement.id),
        mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
    }
},
mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function(e, t, i) {
        this.pluginMediaElements[e] = t,
        this.htmlMediaElements[e] = i
    },
    unregisterPluginElement: function(e) {
        delete this.pluginMediaElements[e],
        delete this.htmlMediaElements[e]
    },
    initPlugin: function(e) {
        var t = this.pluginMediaElements[e]
          , i = this.htmlMediaElements[e];
        if (t) {
            switch (t.pluginType) {
            case "flash":
                t.pluginElement = t.pluginApi = document.getElementById(e);
                break;
            case "silverlight":
                t.pluginElement = document.getElementById(t.id),
                t.pluginApi = t.pluginElement.Content.MediaElementJS
            }
            null != t.pluginApi && t.success && t.success(t, i)
        }
    },
    fireEvent: function(e, t, i) {
        var n, s, o, a = this.pluginMediaElements[e];
        if (a) {
            n = {
                type: t,
                target: a
            };
            for (s in i)
                a[s] = i[s],
                n[s] = i[s];
            o = i.bufferedTime || 0,
            n.target.buffered = n.buffered = {
                start: function(e) {
                    return 0
                },
                end: function(e) {
                    return o
                },
                length: 1
            },
            a.dispatchEvent(n)
        }
    }
},
mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: !1,
    httpsBasicAuthSite: !1,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    flashScriptAccess: "sameDomain",
    enablePluginSmoothing: !1,
    enablePseudoStreaming: !1,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: .8,
    success: function() {},
    error: function() {}
},
mejs.MediaElement = function(e, t) {
    return mejs.HtmlMediaElementShim.create(e, t)
}
,
mejs.HtmlMediaElementShim = {
    create: function(e, t) {
        var i, n, s = mejs.MediaElementDefaults, o = "string" == typeof e ? document.getElementById(e) : e, a = o.tagName.toLowerCase(), r = "audio" === a || "video" === a, l = r ? o.getAttribute("src") : o.getAttribute("href"), u = o.getAttribute("poster"), d = o.getAttribute("autoplay"), c = o.getAttribute("preload"), m = o.getAttribute("controls");
        for (n in t)
            s[n] = t[n];
        return l = "undefined" == typeof l || null === l || "" == l ? null : l,
        u = "undefined" == typeof u || null === u ? "" : u,
        c = "undefined" == typeof c || null === c || "false" === c ? "none" : c,
        d = !("undefined" == typeof d || null === d || "false" === d),
        m = !("undefined" == typeof m || null === m || "false" === m),
        i = this.determinePlayback(o, s, mejs.MediaFeatures.supportsMediaTag, r, l),
        i.url = null !== i.url ? mejs.Utility.absolutizeUrl(i.url) : "",
        "native" == i.method ? (mejs.MediaFeatures.isBustedAndroid && (o.src = i.url,
        o.addEventListener("click", function() {
            o.play()
        }, !1)),
        this.updateNative(i, s, d, c)) : "" !== i.method ? this.createPlugin(i, s, u, d, c, m) : (this.createErrorMessage(i, s, u),
        this)
    },
    determinePlayback: function(e, t, i, n, s) {
        var o, a, r, l, u, d, c, m, p, h, f, v = [], g = {
            method: "",
            url: "",
            htmlMediaElement: e,
            isVideo: "audio" != e.tagName.toLowerCase()
        };
        if ("undefined" != typeof t.type && "" !== t.type)
            if ("string" == typeof t.type)
                v.push({
                    type: t.type,
                    url: s
                });
            else
                for (o = 0; o < t.type.length; o++)
                    v.push({
                        type: t.type[o],
                        url: s
                    });
        else if (null !== s)
            d = this.formatType(s, e.getAttribute("type")),
            v.push({
                type: d,
                url: s
            });
        else
            for (o = 0; o < e.childNodes.length; o++)
                u = e.childNodes[o],
                1 == u.nodeType && "source" == u.tagName.toLowerCase() && (s = u.getAttribute("src"),
                d = this.formatType(s, u.getAttribute("type")),
                f = u.getAttribute("media"),
                (!f || !window.matchMedia || window.matchMedia && window.matchMedia(f).matches) && v.push({
                    type: d,
                    url: s
                }));
        if (!n && v.length > 0 && null !== v[0].url && this.getTypeFromFile(v[0].url).indexOf("audio") > -1 && (g.isVideo = !1),
        mejs.MediaFeatures.isBustedAndroid && (e.canPlayType = function(e) {
            return null !== e.match(/video\/(mp4|m4v)/gi) ? "maybe" : ""
        }
        ),
        mejs.MediaFeatures.isChromium && (e.canPlayType = function(e) {
            return null !== e.match(/video\/(webm|ogv|ogg)/gi) ? "maybe" : ""
        }
        ),
        i && ("auto" === t.mode || "auto_plugin" === t.mode || "native" === t.mode) && (!mejs.MediaFeatures.isBustedNativeHTTPS || t.httpsBasicAuthSite !== !0)) {
            for (n || (h = document.createElement(g.isVideo ? "video" : "audio"),
            e.parentNode.insertBefore(h, e),
            e.style.display = "none",
            g.htmlMediaElement = e = h),
            o = 0; o < v.length; o++)
                if ("video/m3u8" == v[o].type || "" !== e.canPlayType(v[o].type).replace(/no/, "") || "" !== e.canPlayType(v[o].type.replace(/mp3/, "mpeg")).replace(/no/, "") || "" !== e.canPlayType(v[o].type.replace(/m4a/, "mp4")).replace(/no/, "")) {
                    g.method = "native",
                    g.url = v[o].url;
                    break
                }
            if ("native" === g.method && (null !== g.url && (e.src = g.url),
            "auto_plugin" !== t.mode))
                return g
        }
        if ("auto" === t.mode || "auto_plugin" === t.mode || "shim" === t.mode)
            for (o = 0; o < v.length; o++)
                for (d = v[o].type,
                a = 0; a < t.plugins.length; a++)
                    for (c = t.plugins[a],
                    m = mejs.plugins[c],
                    r = 0; r < m.length; r++)
                        if (p = m[r],
                        null == p.version || mejs.PluginDetector.hasPluginVersion(c, p.version))
                            for (l = 0; l < p.types.length; l++)
                                if (d.toLowerCase() == p.types[l].toLowerCase())
                                    return g.method = c,
                                    g.url = v[o].url,
                                    g;
        return "auto_plugin" === t.mode && "native" === g.method ? g : ("" === g.method && v.length > 0 && (g.url = v[0].url),
        g)
    },
    formatType: function(e, t) {
        return e && !t ? this.getTypeFromFile(e) : t && ~t.indexOf(";") ? t.substr(0, t.indexOf(";")) : t
    },
    getTypeFromFile: function(e) {
        e = e.split("?")[0];
        var t = e.substring(e.lastIndexOf(".") + 1).toLowerCase()
          , i = /(mp4|m4v|ogg|ogv|m3u8|webm|webmv|flv|wmv|mpeg|mov)/gi.test(t) ? "video/" : "audio/";
        return this.getTypeFromExtension(t, i)
    },
    getTypeFromExtension: function(e, t) {
        switch (t = t || "",
        e) {
        case "mp4":
        case "m4v":
        case "m4a":
        case "f4v":
        case "f4a":
            return t + "mp4";
        case "flv":
            return t + "x-flv";
        case "webm":
        case "webma":
        case "webmv":
            return t + "webm";
        case "ogg":
        case "oga":
        case "ogv":
            return t + "ogg";
        case "m3u8":
            return "application/x-mpegurl";
        case "ts":
            return t + "mp2t";
        default:
            return t + e
        }
    },
    createErrorMessage: function(e, t, i) {
        var n = e.htmlMediaElement
          , s = document.createElement("div")
          , o = t.customError;
        s.className = "me-cannotplay";
        try {
            s.style.width = n.width + "px",
            s.style.height = n.height + "px"
        } catch (a) {}
        o || (o = '<a href="' + e.url + '">',
        "" !== i && (o += '<img src="' + i + '" width="100%" height="100%" alt="" />'),
        o += "<span>" + mejs.i18n.t("Download File") + "</span></a>"),
        s.innerHTML = o,
        n.parentNode.insertBefore(s, n),
        n.style.display = "none",
        t.error(n)
    },
    createPlugin: function(e, t, i, n, s, o) {
        var a, r, l, u = e.htmlMediaElement, d = 1, c = 1, m = "me_" + e.method + "_" + mejs.meIndex++, p = new mejs.PluginMediaElement(m,e.method,e.url), h = document.createElement("div");
        p.tagName = u.tagName;
        for (var f = 0; f < u.attributes.length; f++) {
            var v = u.attributes[f];
            v.specified && p.setAttribute(v.name, v.value)
        }
        for (r = u.parentNode; null !== r && null != r.tagName && "body" !== r.tagName.toLowerCase() && null != r.parentNode && null != r.parentNode.tagName && null != r.parentNode.constructor && "ShadowRoot" === r.parentNode.constructor.name; ) {
            if ("p" === r.parentNode.tagName.toLowerCase()) {
                r.parentNode.parentNode.insertBefore(r, r.parentNode);
                break
            }
            r = r.parentNode
        }
        switch (e.isVideo ? (d = t.pluginWidth > 0 ? t.pluginWidth : t.videoWidth > 0 ? t.videoWidth : null !== u.getAttribute("width") ? u.getAttribute("width") : t.defaultVideoWidth,
        c = t.pluginHeight > 0 ? t.pluginHeight : t.videoHeight > 0 ? t.videoHeight : null !== u.getAttribute("height") ? u.getAttribute("height") : t.defaultVideoHeight,
        d = mejs.Utility.encodeUrl(d),
        c = mejs.Utility.encodeUrl(c)) : t.enablePluginDebug && (d = 320,
        c = 240),
        p.success = t.success,
        mejs.MediaPluginBridge.registerPluginElement(m, p, u),
        h.className = "me-plugin",
        h.id = m + "_container",
        e.isVideo ? u.parentNode.insertBefore(h, u) : document.body.insertBefore(h, document.body.childNodes[0]),
        l = ["id=" + m, "jsinitfunction=mejs.MediaPluginBridge.initPlugin", "jscallbackfunction=mejs.MediaPluginBridge.fireEvent", "isvideo=" + (e.isVideo ? "true" : "false"), "autoplay=" + (n ? "true" : "false"), "preload=" + s, "width=" + d, "startvolume=" + t.startVolume, "timerrate=" + t.timerRate, "flashstreamer=" + t.flashStreamer, "height=" + c, "pseudostreamstart=" + t.pseudoStreamingStartQueryParam],
        null !== e.url && ("flash" == e.method ? l.push("file=" + mejs.Utility.encodeUrl(e.url)) : l.push("file=" + e.url)),
        t.enablePluginDebug && l.push("debug=true"),
        t.enablePluginSmoothing && l.push("smoothing=true"),
        t.enablePseudoStreaming && l.push("pseudostreaming=true"),
        o && l.push("controls=true"),
        t.pluginVars && (l = l.concat(t.pluginVars)),
        e.method) {
        case "silverlight":
            h.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + m + '" name="' + m + '" width="' + d + '" height="' + c + '" class="mejs-shim"><param name="initParams" value="' + l.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + t.pluginPath + t.silverlightName + '" /></object>';
            break;
        case "flash":
            mejs.MediaFeatures.isIE ? (a = document.createElement("div"),
            h.appendChild(a),
            a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + m + '" width="' + d + '" height="' + c + '" class="mejs-shim"><param name="movie" value="' + t.pluginPath + t.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + l.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + t.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>') : h.innerHTML = '<embed id="' + m + '" name="' + m + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="' + t.flashScriptAccess + '" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + t.pluginPath + t.flashName + '" flashvars="' + l.join("&") + '" width="' + d + '" height="' + c + '" scale="default"class="mejs-shim"></embed>';
            break;
        case "youtube":
            var g;
            e.url.lastIndexOf("youtu.be") != -1 ? (g = e.url.substr(e.url.lastIndexOf("/") + 1),
            g.indexOf("?") != -1 && (g = g.substr(0, g.indexOf("?")))) : g = e.url.substr(e.url.lastIndexOf("=") + 1),
            youtubeSettings = {
                container: h,
                containerId: h.id,
                pluginMediaElement: p,
                pluginId: m,
                videoId: g,
                height: c,
                width: d
            },
            mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings, t) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
            break;
        case "vimeo":
            var y = m + "_player";
            if (p.vimeoid = e.url.substr(e.url.lastIndexOf("/") + 1),
            h.innerHTML = '<iframe src="//player.vimeo.com/video/' + p.vimeoid + "?api=1&portrait=0&byline=0&title=0&player_id=" + y + '" width="' + d + '" height="' + c + '" frameborder="0" class="mejs-shim" id="' + y + '" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
            "function" == typeof $f) {
                var b = $f(h.childNodes[0]);
                b.addEvent("ready", function() {
                    function e(e, t, i, n) {
                        var s = {
                            type: i,
                            target: t
                        };
                        "timeupdate" == i && (t.currentTime = s.currentTime = n.seconds,
                        t.duration = s.duration = n.duration),
                        t.dispatchEvent(s)
                    }
                    b.playVideo = function() {
                        b.api("play")
                    }
                    ,
                    b.stopVideo = function() {
                        b.api("unload")
                    }
                    ,
                    b.pauseVideo = function() {
                        b.api("pause")
                    }
                    ,
                    b.seekTo = function(e) {
                        b.api("seekTo", e)
                    }
                    ,
                    b.setVolume = function(e) {
                        b.api("setVolume", e)
                    }
                    ,
                    b.setMuted = function(e) {
                        e ? (b.lastVolume = b.api("getVolume"),
                        b.api("setVolume", 0)) : (b.api("setVolume", b.lastVolume),
                        delete b.lastVolume)
                    }
                    ,
                    b.addEvent("play", function() {
                        e(b, p, "play"),
                        e(b, p, "playing")
                    }),
                    b.addEvent("pause", function() {
                        e(b, p, "pause")
                    }),
                    b.addEvent("finish", function() {
                        e(b, p, "ended")
                    }),
                    b.addEvent("playProgress", function(t) {
                        e(b, p, "timeupdate", t)
                    }),
                    p.pluginElement = h,
                    p.pluginApi = b,
                    mejs.MediaPluginBridge.initPlugin(m)
                })
            } else
                console.warn("You need to include froogaloop for vimeo to work")
        }
        return u.style.display = "none",
        u.removeAttribute("autoplay"),
        p
    },
    updateNative: function(e, t, i, n) {
        var s, o = e.htmlMediaElement;
        for (s in mejs.HtmlMediaElement)
            o[s] = mejs.HtmlMediaElement[s];
        return t.success(o, o),
        o
    }
},
mejs.YouTubeApi = {
    isIframeStarted: !1,
    isIframeLoaded: !1,
    loadIframeApi: function() {
        if (!this.isIframeStarted) {
            var e = document.createElement("script");
            e.src = "//www.youtube.com/player_api";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t),
            this.isIframeStarted = !0
        }
    },
    iframeQueue: [],
    enqueueIframe: function(e) {
        this.isLoaded ? this.createIframe(e) : (this.loadIframeApi(),
        this.iframeQueue.push(e))
    },
    createIframe: function(e) {
        var t = e.pluginMediaElement
          , i = new YT.Player(e.containerId,{
            height: e.height,
            width: e.width,
            videoId: e.videoId,
            playerVars: {
                controls: 0
            },
            events: {
                onReady: function() {
                    e.pluginMediaElement.pluginApi = i,
                    mejs.MediaPluginBridge.initPlugin(e.pluginId),
                    setInterval(function() {
                        mejs.YouTubeApi.createEvent(i, t, "timeupdate")
                    }, 250)
                },
                onStateChange: function(e) {
                    mejs.YouTubeApi.handleStateChange(e.data, i, t)
                }
            }
        })
    },
    createEvent: function(e, t, i) {
        var n = {
            type: i,
            target: t
        };
        if (e && e.getDuration) {
            t.currentTime = n.currentTime = e.getCurrentTime(),
            t.duration = n.duration = e.getDuration(),
            n.paused = t.paused,
            n.ended = t.ended,
            n.muted = e.isMuted(),
            n.volume = e.getVolume() / 100,
            n.bytesTotal = e.getVideoBytesTotal(),
            n.bufferedBytes = e.getVideoBytesLoaded();
            var s = n.bufferedBytes / n.bytesTotal * n.duration;
            n.target.buffered = n.buffered = {
                start: function(e) {
                    return 0
                },
                end: function(e) {
                    return s
                },
                length: 1
            }
        }
        t.dispatchEvent(n)
    },
    iFrameReady: function() {
        for (this.isLoaded = !0,
        this.isIframeLoaded = !0; this.iframeQueue.length > 0; ) {
            var e = this.iframeQueue.pop();
            this.createIframe(e)
        }
    },
    flashPlayers: {},
    createFlash: function(e) {
        this.flashPlayers[e.pluginId] = e;
        var t, i = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + e.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        mejs.MediaFeatures.isIE ? (t = document.createElement("div"),
        e.container.appendChild(t),
        t.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e.pluginId + '" width="' + e.width + '" height="' + e.height + '" class="mejs-shim"><param name="movie" value="' + i + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="' + options.flashScriptAccess + '" /><param name="allowFullScreen" value="true" /></object>') : e.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + e.pluginId + '" data="' + i + '" width="' + e.width + '" height="' + e.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="' + options.flashScriptAccess + '"><param name="wmode" value="transparent"></object>'
    },
    flashReady: function(e) {
        var t = this.flashPlayers[e]
          , i = document.getElementById(e)
          , n = t.pluginMediaElement;
        n.pluginApi = n.pluginElement = i,
        mejs.MediaPluginBridge.initPlugin(e),
        i.cueVideoById(t.videoId);
        var s = t.containerId + "_callback";
        window[s] = function(e) {
            mejs.YouTubeApi.handleStateChange(e, i, n)
        }
        ,
        i.addEventListener("onStateChange", s),
        setInterval(function() {
            mejs.YouTubeApi.createEvent(i, n, "timeupdate")
        }, 250),
        mejs.YouTubeApi.createEvent(i, n, "canplay")
    },
    handleStateChange: function(e, t, i) {
        switch (e) {
        case -1:
            i.paused = !0,
            i.ended = !0,
            mejs.YouTubeApi.createEvent(t, i, "loadedmetadata");
            break;
        case 0:
            i.paused = !1,
            i.ended = !0,
            mejs.YouTubeApi.createEvent(t, i, "ended");
            break;
        case 1:
            i.paused = !1,
            i.ended = !1,
            mejs.YouTubeApi.createEvent(t, i, "play"),
            mejs.YouTubeApi.createEvent(t, i, "playing");
            break;
        case 2:
            i.paused = !0,
            i.ended = !1,
            mejs.YouTubeApi.createEvent(t, i, "pause");
            break;
        case 3:
            mejs.YouTubeApi.createEvent(t, i, "progress");
            break;
        case 5:
        }
    }
},
window.onYouTubePlayerAPIReady = function() {
    mejs.YouTubeApi.iFrameReady()
}
,
window.onYouTubePlayerReady = function(e) {
    mejs.YouTubeApi.flashReady(e)
}
,
window.mejs = mejs,
window.MediaElement = mejs.MediaElement,
function(e, t, i) {
    "use strict";
    var n = {
        locale: {
            language: t.i18n && t.i18n.locale.language || "",
            strings: t.i18n && t.i18n.locale.strings || {}
        },
        ietf_lang_regex: /^(x\-)?[a-z]{2,}(\-\w{2,})?(\-\w{2,})?$/,
        methods: {}
    };
    n.getLanguage = function() {
        var e = n.locale.language || window.navigator.userLanguage || window.navigator.language;
        return n.ietf_lang_regex.exec(e) ? e : null
    }
    ,
    "undefined" != typeof mejsL10n && (n.locale.language = mejsL10n.language),
    n.methods.checkPlain = function(e) {
        var t, i, n = {
            "&": "&amp;",
            '"': "&quot;",
            "<": "&lt;",
            ">": "&gt;"
        };
        e = String(e);
        for (t in n)
            n.hasOwnProperty(t) && (i = new RegExp(t,"g"),
            e = e.replace(i, n[t]));
        return e
    }
    ,
    n.methods.t = function(e, t) {
        return n.locale.strings && n.locale.strings[t.context] && n.locale.strings[t.context][e] && (e = n.locale.strings[t.context][e]),
        n.methods.checkPlain(e)
    }
    ,
    n.t = function(e, t) {
        if ("string" == typeof e && e.length > 0) {
            var i = n.getLanguage();
            return t = t || {
                context: i
            },
            n.methods.t(e, t)
        }
        throw {
            name: "InvalidArgumentException",
            message: "First argument is either not a string or empty."
        }
    }
    ,
    t.i18n = n
}(document, mejs),
function(e, t) {
    "use strict";
    "undefined" != typeof mejsL10n && (e[mejsL10n.language] = mejsL10n.strings)
}(mejs.i18n.locale.strings),
"undefined" != typeof jQuery ? mejs.$ = jQuery : "undefined" != typeof Zepto ? (mejs.$ = Zepto,
Zepto.fn.outerWidth = function(e) {
    var t = $(this).width();
    return e && (t += parseInt($(this).css("margin-right"), 10),
    t += parseInt($(this).css("margin-left"), 10)),
    t
}
) : "undefined" != typeof ender && (mejs.$ = ender),
function(e) {
    mejs.MepDefaults = {
        poster: "",
        showPosterWhenEnded: !1,
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function(e) {
            return .05 * e.duration
        },
        defaultSeekForwardInterval: function(e) {
            return .05 * e.duration
        },
        setDimensions: !0,
        audioWidth: -1,
        audioHeight: -1,
        startVolume: .8,
        loop: !1,
        autoRewind: !0,
        enableAutosize: !0,
        timeFormat: "",
        alwaysShowHours: !1,
        showTimecodeFrameCount: !1,
        framesPerSecond: 25,
        autosizeProgress: !0,
        alwaysShowControls: !1,
        hideVideoControlsOnLoad: !1,
        clickToPlayPause: !0,
        iPadUseNativeControls: !1,
        iPhoneUseNativeControls: !1,
        AndroidUseNativeControls: !1,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: !0,
        enableKeyboard: !0,
        pauseOtherPlayers: !0,
        keyActions: [{
            keys: [32, 179],
            action: function(e, t) {
                t.paused || t.ended ? t.play() : t.pause()
            }
        }, {
            keys: [38],
            action: function(e, t) {
                e.container.find(".mejs-volume-slider").css("display", "block"),
                e.isVideo && (e.showControls(),
                e.startControlsTimer());
                var i = Math.min(t.volume + .1, 1);
                t.setVolume(i)
            }
        }, {
            keys: [40],
            action: function(e, t) {
                e.container.find(".mejs-volume-slider").css("display", "block"),
                e.isVideo && (e.showControls(),
                e.startControlsTimer());
                var i = Math.max(t.volume - .1, 0);
                t.setVolume(i)
            }
        }, {
            keys: [37, 227],
            action: function(e, t) {
                if (!isNaN(t.duration) && t.duration > 0) {
                    e.isVideo && (e.showControls(),
                    e.startControlsTimer());
                    var i = Math.max(t.currentTime - e.options.defaultSeekBackwardInterval(t), 0);
                    t.setCurrentTime(i)
                }
            }
        }, {
            keys: [39, 228],
            action: function(e, t) {
                if (!isNaN(t.duration) && t.duration > 0) {
                    e.isVideo && (e.showControls(),
                    e.startControlsTimer());
                    var i = Math.min(t.currentTime + e.options.defaultSeekForwardInterval(t), t.duration);
                    t.setCurrentTime(i)
                }
            }
        }, {
            keys: [70],
            action: function(e, t) {
                "undefined" != typeof e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen())
            }
        }, {
            keys: [77],
            action: function(e, t) {
                e.container.find(".mejs-volume-slider").css("display", "block"),
                e.isVideo && (e.showControls(),
                e.startControlsTimer()),
                e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
            }
        }]
    },
    mejs.mepIndex = 0,
    mejs.players = {},
    mejs.MediaElementPlayer = function(t, i) {
        if (!(this instanceof mejs.MediaElementPlayer))
            return new mejs.MediaElementPlayer(t,i);
        var n = this;
        return n.$media = n.$node = e(t),
        n.node = n.media = n.$media[0],
        n.node ? "undefined" != typeof n.node.player ? n.node.player : ("undefined" == typeof i && (i = n.$node.data("mejsoptions")),
        n.options = e.extend({}, mejs.MepDefaults, i),
        n.options.timeFormat || (n.options.timeFormat = "mm:ss",
        n.options.alwaysShowHours && (n.options.timeFormat = "hh:mm:ss"),
        n.options.showTimecodeFrameCount && (n.options.timeFormat += ":ff")),
        mejs.Utility.calculateTimeFormat(0, n.options, n.options.framesPerSecond || 25),
        n.id = "mep_" + mejs.mepIndex++,
        mejs.players[n.id] = n,
        n.init(),
        n) : void 0
    }
    ,
    mejs.MediaElementPlayer.prototype = {
        hasFocus: !1,
        controlsAreVisible: !0,
        init: function() {
            var t = this
              , i = mejs.MediaFeatures
              , n = e.extend(!0, {}, t.options, {
                success: function(e, i) {
                    t.meReady(e, i)
                },
                error: function(e) {
                    t.handleError(e)
                }
            })
              , s = t.media.tagName.toLowerCase();
            if (t.isDynamic = "audio" !== s && "video" !== s,
            t.isDynamic ? t.isVideo = t.options.isVideo : t.isVideo = "audio" !== s && t.options.isVideo,
            i.isiPad && t.options.iPadUseNativeControls || i.isiPhone && t.options.iPhoneUseNativeControls)
                t.$media.attr("controls", "controls"),
                i.isiPad && null !== t.media.getAttribute("autoplay") && t.play();
            else if (i.isAndroid && t.options.AndroidUseNativeControls)
                ;
            else {
                t.$media.removeAttr("controls");
                var o = t.isVideo ? mejs.i18n.t("Video Player") : mejs.i18n.t("Audio Player");
                if (e('<span class="mejs-offscreen">' + o + "</span>").insertBefore(t.$media),
                t.container = e('<div id="' + t.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '" tabindex="0" role="application" aria-label="' + o + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(t.$media[0].className).insertBefore(t.$media).focus(function(e) {
                    if (!t.controlsAreVisible) {
                        t.showControls(!0);
                        var i = t.container.find(".mejs-playpause-button > button");
                        i.focus()
                    }
                }),
                t.container.addClass((i.isAndroid ? "mejs-android " : "") + (i.isiOS ? "mejs-ios " : "") + (i.isiPad ? "mejs-ipad " : "") + (i.isiPhone ? "mejs-iphone " : "") + (t.isVideo ? "mejs-video " : "mejs-audio ")),
                i.isiOS) {
                    var a = t.$media.clone();
                    t.container.find(".mejs-mediaelement").append(a),
                    t.$media.remove(),
                    t.$node = t.$media = a,
                    t.node = t.media = a[0]
                } else
                    t.container.find(".mejs-mediaelement").append(t.$media);
                t.node.player = t,
                t.controls = t.container.find(".mejs-controls"),
                t.layers = t.container.find(".mejs-layers");
                var r = t.isVideo ? "video" : "audio"
                  , l = r.substring(0, 1).toUpperCase() + r.substring(1);
                t.options[r + "Width"] > 0 || t.options[r + "Width"].toString().indexOf("%") > -1 ? t.width = t.options[r + "Width"] : "" !== t.media.style.width && null !== t.media.style.width ? t.width = t.media.style.width : null !== t.media.getAttribute("width") ? t.width = t.$media.attr("width") : t.width = t.options["default" + l + "Width"],
                t.options[r + "Height"] > 0 || t.options[r + "Height"].toString().indexOf("%") > -1 ? t.height = t.options[r + "Height"] : "" !== t.media.style.height && null !== t.media.style.height ? t.height = t.media.style.height : null !== t.$media[0].getAttribute("height") ? t.height = t.$media.attr("height") : t.height = t.options["default" + l + "Height"],
                t.setPlayerSize(t.width, t.height),
                n.pluginWidth = t.width,
                n.pluginHeight = t.height
            }
            mejs.MediaElement(t.$media[0], n),
            "undefined" != typeof t.container && t.controlsAreVisible && t.container.trigger("controlsshown")
        },
        showControls: function(e) {
            var t = this;
            e = "undefined" == typeof e || e,
            t.controlsAreVisible || (e ? (t.controls.css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                t.controlsAreVisible = !0,
                t.container.trigger("controlsshown")
            }),
            t.container.find(".mejs-control").css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                t.controlsAreVisible = !0
            })) : (t.controls.css("visibility", "visible").css("display", "block"),
            t.container.find(".mejs-control").css("visibility", "visible").css("display", "block"),
            t.controlsAreVisible = !0,
            t.container.trigger("controlsshown")),
            t.setControlsSize())
        },
        hideControls: function(t) {
            var i = this;
            t = "undefined" == typeof t || t,
            !i.controlsAreVisible || i.options.alwaysShowControls || i.keyboardAction || (t ? (i.controls.stop(!0, !0).fadeOut(200, function() {
                e(this).css("visibility", "hidden").css("display", "block"),
                i.controlsAreVisible = !1,
                i.container.trigger("controlshidden")
            }),
            i.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function() {
                e(this).css("visibility", "hidden").css("display", "block")
            })) : (i.controls.css("visibility", "hidden").css("display", "block"),
            i.container.find(".mejs-control").css("visibility", "hidden").css("display", "block"),
            i.controlsAreVisible = !1,
            i.container.trigger("controlshidden")))
        },
        controlsTimer: null,
        startControlsTimer: function(e) {
            var t = this;
            e = "undefined" != typeof e ? e : 1500,
            t.killControlsTimer("start"),
            t.controlsTimer = setTimeout(function() {
                t.hideControls(),
                t.killControlsTimer("hide")
            }, e)
        },
        killControlsTimer: function(e) {
            var t = this;
            null !== t.controlsTimer && (clearTimeout(t.controlsTimer),
            delete t.controlsTimer,
            t.controlsTimer = null)
        },
        controlsEnabled: !0,
        disableControls: function() {
            var e = this;
            e.killControlsTimer(),
            e.hideControls(!1),
            this.controlsEnabled = !1
        },
        enableControls: function() {
            var e = this;
            e.showControls(!1),
            e.controlsEnabled = !0
        },
        meReady: function(t, i) {
            var n, s, o = this, a = mejs.MediaFeatures, r = i.getAttribute("autoplay"), l = !("undefined" == typeof r || null === r || "false" === r);
            if (!o.created) {
                if (o.created = !0,
                o.media = t,
                o.domNode = i,
                !(a.isAndroid && o.options.AndroidUseNativeControls || a.isiPad && o.options.iPadUseNativeControls || a.isiPhone && o.options.iPhoneUseNativeControls)) {
                    o.buildposter(o, o.controls, o.layers, o.media),
                    o.buildkeyboard(o, o.controls, o.layers, o.media),
                    o.buildoverlays(o, o.controls, o.layers, o.media),
                    o.findTracks();
                    for (n in o.options.features)
                        if (s = o.options.features[n],
                        o["build" + s])
                            try {
                                o["build" + s](o, o.controls, o.layers, o.media)
                            } catch (u) {}
                    o.container.trigger("controlsready"),
                    o.setPlayerSize(o.width, o.height),
                    o.setControlsSize(),
                    o.isVideo && (mejs.MediaFeatures.hasTouch ? o.$media.bind("touchstart", function() {
                        o.controlsAreVisible ? o.hideControls(!1) : o.controlsEnabled && o.showControls(!1)
                    }) : (o.clickToPlayPauseCallback = function() {
                        o.options.clickToPlayPause && (o.media.paused ? o.play() : o.pause())
                    }
                    ,
                    o.media.addEventListener("click", o.clickToPlayPauseCallback, !1),
                    o.container.bind("mouseenter mouseover", function() {
                        o.controlsEnabled && (o.options.alwaysShowControls || (o.killControlsTimer("enter"),
                        o.showControls(),
                        o.startControlsTimer(2500)))
                    }).bind("mousemove", function() {
                        o.controlsEnabled && (o.controlsAreVisible || o.showControls(),
                        o.options.alwaysShowControls || o.startControlsTimer(2500))
                    }).bind("mouseleave", function() {
                        o.controlsEnabled && (o.media.paused || o.options.alwaysShowControls || o.startControlsTimer(1e3))
                    })),
                    o.options.hideVideoControlsOnLoad && o.hideControls(!1),
                    l && !o.options.alwaysShowControls && o.hideControls(),
                    o.options.enableAutosize && o.media.addEventListener("loadedmetadata", function(e) {
                        o.options.videoHeight <= 0 && null === o.domNode.getAttribute("height") && !isNaN(e.target.videoHeight) && (o.setPlayerSize(e.target.videoWidth, e.target.videoHeight),
                        o.setControlsSize(),
                        o.media.setVideoSize(e.target.videoWidth, e.target.videoHeight))
                    }, !1)),
                    t.addEventListener("play", function() {
                        var e;
                        for (e in mejs.players) {
                            var t = mejs.players[e];
                            t.id == o.id || !o.options.pauseOtherPlayers || t.paused || t.ended || t.pause(),
                            t.hasFocus = !1
                        }
                        o.hasFocus = !0
                    }, !1),
                    o.media.addEventListener("ended", function(t) {
                        if (o.options.autoRewind)
                            try {
                                o.media.setCurrentTime(0),
                                window.setTimeout(function() {
                                    e(o.container).find(".mejs-overlay-loading").parent().hide()
                                }, 20)
                            } catch (i) {}
                        o.media.pause(),
                        o.setProgressRail && o.setProgressRail(),
                        o.setCurrentRail && o.setCurrentRail(),
                        o.options.loop ? o.play() : !o.options.alwaysShowControls && o.controlsEnabled && o.showControls()
                    }, !1),
                    o.media.addEventListener("loadedmetadata", function(e) {
                        o.updateDuration && o.updateDuration(),
                        o.updateCurrent && o.updateCurrent(),
                        o.isFullScreen || (o.setPlayerSize(o.width, o.height),
                        o.setControlsSize())
                    }, !1);
                    var d = null;
                    o.media.addEventListener("timeupdate", function() {
                        d !== this.duration && (d = this.duration,
                        mejs.Utility.calculateTimeFormat(d, o.options, o.options.framesPerSecond || 25))
                    }, !1),
                    o.container.focusout(function(t) {
                        if (t.relatedTarget) {
                            var i = e(t.relatedTarget);
                            o.keyboardAction && 0 === i.parents(".mejs-container").length && (o.keyboardAction = !1,
                            o.hideControls(!0))
                        }
                    }),
                    setTimeout(function() {
                        o.setPlayerSize(o.width, o.height),
                        o.setControlsSize()
                    }, 50),
                    o.globalBind("resize", function() {
                        o.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || o.setPlayerSize(o.width, o.height),
                        o.setControlsSize()
                    }),
                    "youtube" == o.media.pluginType && (a.isiOS || a.isAndroid) && o.container.find(".mejs-overlay-play").hide()
                }
                l && "native" == t.pluginType && o.play(),
                o.options.success && ("string" == typeof o.options.success ? window[o.options.success](o.media, o.domNode, o) : o.options.success(o.media, o.domNode, o))
            }
        },
        handleError: function(e) {
            var t = this;
            t.controls.hide(),
            t.options.error && t.options.error(e)
        },
        setPlayerSize: function(t, i) {
            var n = this;
            if (!n.options.setDimensions)
                return !1;
            if ("undefined" != typeof t && (n.width = t),
            "undefined" != typeof i && (n.height = i),
            n.height.toString().indexOf("%") > 0 || "none" !== n.$node.css("max-width") && "t.width" !== n.$node.css("max-width") || n.$node[0].currentStyle && "100%" === n.$node[0].currentStyle.maxWidth) {
                var s = function() {
                    return n.isVideo ? n.media.videoWidth && n.media.videoWidth > 0 ? n.media.videoWidth : null !== n.media.getAttribute("width") ? n.media.getAttribute("width") : n.options.defaultVideoWidth : n.options.defaultAudioWidth
                }()
                  , o = function() {
                    return n.isVideo ? n.media.videoHeight && n.media.videoHeight > 0 ? n.media.videoHeight : null !== n.media.getAttribute("height") ? n.media.getAttribute("height") : n.options.defaultVideoHeight : n.options.defaultAudioHeight
                }()
                  , a = n.container.parent().closest(":visible").width()
                  , r = n.container.parent().closest(":visible").height()
                  , l = n.isVideo || !n.options.autosizeProgress ? parseInt(a * o / s, 10) : o;
                isNaN(l) && (l = r),
                n.container.parent().length > 0 && "body" === n.container.parent()[0].tagName.toLowerCase() && (a = e(window).width(),
                l = e(window).height()),
                l && a && (n.container.width(a).height(l),
                n.$media.add(n.container.find(".mejs-shim")).width("100%").height("100%"),
                n.isVideo && n.media.setVideoSize && n.media.setVideoSize(a, l),
                n.layers.children(".mejs-layer").width("100%").height("100%"))
            } else
                n.container.width(n.width).height(n.height),
                n.layers.children(".mejs-layer").width(n.width).height(n.height)
        },
        setControlsSize: function() {
            var t = this
              , i = 0
              , n = 0
              , s = t.controls.find(".mejs-time-rail")
              , o = t.controls.find(".mejs-time-total")
              , a = s.siblings()
              , r = a.last()
              , l = null;
            if (t.container.is(":visible") && s.length && s.is(":visible")) {
                t.options && !t.options.autosizeProgress && (n = parseInt(s.css("width"), 10)),
                0 !== n && n || (a.each(function() {
                    var t = e(this);
                    "absolute" != t.css("position") && t.is(":visible") && (i += e(this).outerWidth(!0))
                }),
                n = t.controls.width() - i - (s.outerWidth(!0) - s.width()));
                do
                    s.width(n),
                    o.width(n - (o.outerWidth(!0) - o.width())),
                    "absolute" != r.css("position") && (l = r.length ? r.position() : null,
                    n--);
                while (null !== l && l.top > 0 && n > 0);t.container.trigger("controlsresize")
            }
        },
        buildposter: function(t, i, n, s) {
            var o = this
              , a = e('<div class="mejs-poster mejs-layer"></div>').appendTo(n)
              , r = t.$media.attr("poster");
            "" !== t.options.poster && (r = t.options.poster),
            r ? o.setPoster(r) : a.hide(),
            s.addEventListener("play", function() {
                a.hide()
            }, !1),
            t.options.showPosterWhenEnded && t.options.autoRewind && s.addEventListener("ended", function() {
                a.show()
            }, !1)
        },
        setPoster: function(t) {
            var i = this
              , n = i.container.find(".mejs-poster")
              , s = n.find("img");
            0 === s.length && (s = e('<img width="100%" height="100%" alt="" />').appendTo(n)),
            s.attr("src", t),
            n.css({
                "background-image": "url(" + t + ")"
            })
        },
        buildoverlays: function(t, i, n, s) {
            var o = this;
            if (t.isVideo) {
                var a = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(n)
                  , r = e('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(n)
                  , l = e('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(n).bind("click", function() {
                    o.options.clickToPlayPause && s.paused && s.play()
                });
                s.addEventListener("play", function() {
                    l.hide(),
                    a.hide(),
                    i.find(".mejs-time-buffering").hide(),
                    r.hide()
                }, !1),
                s.addEventListener("playing", function() {
                    l.hide(),
                    a.hide(),
                    i.find(".mejs-time-buffering").hide(),
                    r.hide()
                }, !1),
                s.addEventListener("seeking", function() {
                    a.show(),
                    i.find(".mejs-time-buffering").show()
                }, !1),
                s.addEventListener("seeked", function() {
                    a.hide(),
                    i.find(".mejs-time-buffering").hide()
                }, !1),
                s.addEventListener("pause", function() {
                    mejs.MediaFeatures.isiPhone || l.show()
                }, !1),
                s.addEventListener("waiting", function() {
                    a.show(),
                    i.find(".mejs-time-buffering").show()
                }, !1),
                s.addEventListener("loadeddata", function() {
                    a.show(),
                    i.find(".mejs-time-buffering").show(),
                    mejs.MediaFeatures.isAndroid && (s.canplayTimeout = window.setTimeout(function() {
                        if (document.createEvent) {
                            var e = document.createEvent("HTMLEvents");
                            return e.initEvent("canplay", !0, !0),
                            s.dispatchEvent(e)
                        }
                    }, 300))
                }, !1),
                s.addEventListener("canplay", function() {
                    a.hide(),
                    i.find(".mejs-time-buffering").hide(),
                    clearTimeout(s.canplayTimeout)
                }, !1),
                s.addEventListener("error", function(e) {
                    o.handleError(e),
                    a.hide(),
                    l.hide(),
                    r.show(),
                    r.find(".mejs-overlay-error").html("Error loading this resource")
                }, !1),
                s.addEventListener("keydown", function(e) {
                    o.onkeydown(t, s, e)
                }, !1)
            }
        },
        buildkeyboard: function(t, i, n, s) {
            var o = this;
            o.container.keydown(function() {
                o.keyboardAction = !0
            }),
            o.globalBind("keydown", function(e) {
                return o.onkeydown(t, s, e)
            }),
            o.globalBind("click", function(i) {
                t.hasFocus = 0 !== e(i.target).closest(".mejs-container").length
            })
        },
        onkeydown: function(e, t, i) {
            if (e.hasFocus && e.options.enableKeyboard)
                for (var n = 0, s = e.options.keyActions.length; n < s; n++)
                    for (var o = e.options.keyActions[n], a = 0, r = o.keys.length; a < r; a++)
                        if (i.keyCode == o.keys[a])
                            return "function" == typeof i.preventDefault && i.preventDefault(),
                            o.action(e, t, i.keyCode),
                            !1;
            return !0
        },
        findTracks: function() {
            var t = this
              , i = t.$media.find("track");
            t.tracks = [],
            i.each(function(i, n) {
                n = e(n),
                t.tracks.push({
                    srclang: n.attr("srclang") ? n.attr("srclang").toLowerCase() : "",
                    src: n.attr("src"),
                    kind: n.attr("kind"),
                    label: n.attr("label") || "",
                    entries: [],
                    isLoaded: !1
                })
            })
        },
        changeSkin: function(e) {
            this.container[0].className = "mejs-container " + e,
            this.setPlayerSize(this.width, this.height),
            this.setControlsSize()
        },
        play: function() {
            this.load(),
            this.media.play()
        },
        pause: function() {
            try {
                this.media.pause()
            } catch (e) {}
        },
        load: function() {
            this.isLoaded || this.media.load(),
            this.isLoaded = !0
        },
        setMuted: function(e) {
            this.media.setMuted(e)
        },
        setCurrentTime: function(e) {
            this.media.setCurrentTime(e)
        },
        getCurrentTime: function() {
            return this.media.currentTime
        },
        setVolume: function(e) {
            this.media.setVolume(e)
        },
        getVolume: function() {
            return this.media.volume
        },
        setSrc: function(e) {
            this.media.setSrc(e)
        },
        remove: function() {
            var e, t, i = this;
            i.container.prev(".mejs-offscreen").remove();
            for (e in i.options.features)
                if (t = i.options.features[e],
                i["clean" + t])
                    try {
                        i["clean" + t](i)
                    } catch (n) {}
            i.isDynamic ? i.$node.insertBefore(i.container) : (i.$media.prop("controls", !0),
            i.$node.clone().insertBefore(i.container).show(),
            i.$node.remove()),
            "native" !== i.media.pluginType && i.media.remove(),
            delete mejs.players[i.id],
            "object" == typeof i.container && i.container.remove(),
            i.globalUnbind(),
            delete i.node.player
        },
        rebuildtracks: function() {
            var e = this;
            e.findTracks(),
            e.buildtracks(e, e.controls, e.layers, e.media)
        },
        resetSize: function() {
            var e = this;
            setTimeout(function() {
                e.setPlayerSize(e.width, e.height),
                e.setControlsSize()
            }, 50)
        }
    },
    function() {
        function t(t, n) {
            var s = {
                d: [],
                w: []
            };
            return e.each((t || "").split(" "), function(e, t) {
                var o = t + "." + n;
                0 === o.indexOf(".") ? (s.d.push(o),
                s.w.push(o)) : s[i.test(t) ? "w" : "d"].push(o)
            }),
            s.d = s.d.join(" "),
            s.w = s.w.join(" "),
            s
        }
        var i = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
        mejs.MediaElementPlayer.prototype.globalBind = function(i, n, s) {
            var o = this;
            i = t(i, o.id),
            i.d && e(document).bind(i.d, n, s),
            i.w && e(window).bind(i.w, n, s)
        }
        ,
        mejs.MediaElementPlayer.prototype.globalUnbind = function(i, n) {
            var s = this;
            i = t(i, s.id),
            i.d && e(document).unbind(i.d, n),
            i.w && e(window).unbind(i.w, n)
        }
    }(),
    "undefined" != typeof e && (e.fn.mediaelementplayer = function(t) {
        return t === !1 ? this.each(function() {
            var t = e(this).data("mediaelementplayer");
            t && t.remove(),
            e(this).removeData("mediaelementplayer")
        }) : this.each(function() {
            e(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this,t))
        }),
        this
    }
    ,
    e(document).ready(function() {
        e(".mejs-player").mediaelementplayer()
    })),
    window.MediaElementPlayer = mejs.MediaElementPlayer
}(mejs.$),
function(e) {
    e.extend(mejs.MepDefaults, {
        playText: mejs.i18n.t("Play"),
        pauseText: mejs.i18n.t("Pause")
    }),
    e.extend(MediaElementPlayer.prototype, {
        buildplaypause: function(t, i, n, s) {
            function o(e) {
                "play" === e ? (l.removeClass("mejs-play").addClass("mejs-pause"),
                u.attr({
                    title: r.pauseText,
                    "aria-label": r.pauseText
                })) : (l.removeClass("mejs-pause").addClass("mejs-play"),
                u.attr({
                    title: r.playText,
                    "aria-label": r.playText
                }))
            }
            var a = this
              , r = a.options
              , l = e('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + a.id + '" title="' + r.playText + '" aria-label="' + r.playText + '"></button></div>').appendTo(i).click(function(e) {
                return e.preventDefault(),
                s.paused ? s.play() : s.pause(),
                !1
            })
              , u = l.find("button");
            o("pse"),
            s.addEventListener("play", function() {
                o("play")
            }, !1),
            s.addEventListener("playing", function() {
                o("play")
            }, !1),
            s.addEventListener("pause", function() {
                o("pse")
            }, !1),
            s.addEventListener("paused", function() {
                o("pse")
            }, !1)
        }
    })
}(mejs.$),
function(e) {
    e.extend(mejs.MepDefaults, {
        stopText: "Stop"
    }),
    e.extend(MediaElementPlayer.prototype, {
        buildstop: function(t, i, n, s) {
            var o = this;
            e('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + o.id + '" title="' + o.options.stopText + '" aria-label="' + o.options.stopText + '"></button></div>').appendTo(i).click(function() {
                s.paused || s.pause(),
                s.currentTime > 0 && (s.setCurrentTime(0),
                s.pause(),
                i.find(".mejs-time-current").width("0px"),
                i.find(".mejs-time-handle").css("left", "0px"),
                i.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0, t.options)),
                i.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0, t.options)),
                n.find(".mejs-poster").show())
            })
        }
    })
}(mejs.$),
function(e) {
    e.extend(mejs.MepDefaults, {
        progessHelpText: mejs.i18n.t("Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.")
    }),
    e.extend(MediaElementPlayer.prototype, {
        buildprogress: function(t, i, n, s) {
            e('<div class="mejs-time-rail"><span  class="mejs-time-total mejs-time-slider"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(i),
            i.find(".mejs-time-buffering").hide();
            var o = this
              , a = i.find(".mejs-time-total")
              , r = i.find(".mejs-time-loaded")
              , l = i.find(".mejs-time-current")
              , u = i.find(".mejs-time-handle")
              , d = i.find(".mejs-time-float")
              , c = i.find(".mejs-time-float-current")
              , m = i.find(".mejs-time-slider")
              , p = function(e) {
                var i, n = a.offset(), o = a.width(), r = 0, l = 0, u = 0;
                i = e.originalEvent && e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0].pageX : e.changedTouches ? e.changedTouches[0].pageX : e.pageX,
                s.duration && (i < n.left ? i = n.left : i > o + n.left && (i = o + n.left),
                u = i - n.left,
                r = u / o,
                l = r <= .02 ? 0 : r * s.duration,
                h && l !== s.currentTime && s.setCurrentTime(l),
                mejs.MediaFeatures.hasTouch || (d.css("left", u),
                c.html(mejs.Utility.secondsToTimeCode(l, t.options)),
                d.show()))
            }
              , h = !1
              , f = !1
              , v = 0
              , g = !1
              , y = t.options.autoRewind
              , b = function(e) {
                var i = s.currentTime
                  , n = mejs.i18n.t("Time Slider")
                  , o = mejs.Utility.secondsToTimeCode(i, t.options)
                  , a = s.duration;
                m.attr({
                    "aria-label": n,
                    "aria-valuemin": 0,
                    "aria-valuemax": a,
                    "aria-valuenow": i,
                    "aria-valuetext": o,
                    role: "slider",
                    tabindex: 0
                })
            }
              , j = function() {
                var e = new Date;
                e - v >= 1e3 && s.play()
            };
            m.bind("focus", function(e) {
                t.options.autoRewind = !1
            }),
            m.bind("blur", function(e) {
                t.options.autoRewind = y
            }),
            m.bind("keydown", function(e) {
                new Date - v >= 1e3 && (g = s.paused);
                var t = e.keyCode
                  , i = s.duration
                  , n = s.currentTime;
                switch (t) {
                case 37:
                    n -= 1;
                    break;
                case 39:
                    n += 1;
                    break;
                case 38:
                    n += Math.floor(.1 * i);
                    break;
                case 40:
                    n -= Math.floor(.1 * i);
                    break;
                case 36:
                    n = 0;
                    break;
                case 35:
                    n = i;
                    break;
                case 10:
                    return void (s.paused ? s.play() : s.pause());
                case 13:
                    return void (s.paused ? s.play() : s.pause());
                default:
                    return
                }
                return n = n < 0 ? 0 : n >= i ? i : Math.floor(n),
                v = new Date,
                g || s.pause(),
                n < s.duration && !g && setTimeout(j, 1100),
                s.setCurrentTime(n),
                e.preventDefault(),
                e.stopPropagation(),
                !1
            }),
            a.bind("mousedown touchstart", function(e) {
                1 !== e.which && 0 !== e.which || (h = !0,
                p(e),
                o.globalBind("mousemove.dur touchmove.dur", function(e) {
                    p(e)
                }),
                o.globalBind("mouseup.dur touchend.dur", function(e) {
                    h = !1,
                    d.hide(),
                    o.globalUnbind(".dur")
                }))
            }).bind("mouseenter", function(e) {
                f = !0,
                o.globalBind("mousemove.dur", function(e) {
                    p(e)
                }),
                mejs.MediaFeatures.hasTouch || d.show()
            }).bind("mouseleave", function(e) {
                f = !1,
                h || (o.globalUnbind(".dur"),
                d.hide())
            }),
            s.addEventListener("progress", function(e) {
                t.setProgressRail(e),
                t.setCurrentRail(e)
            }, !1),
            s.addEventListener("timeupdate", function(e) {
                t.setProgressRail(e),
                t.setCurrentRail(e),
                b(e)
            }, !1),
            o.container.on("controlsresize", function() {
                t.setProgressRail(),
                t.setCurrentRail()
            }),
            o.loaded = r,
            o.total = a,
            o.current = l,
            o.handle = u
        },
        setProgressRail: function(e) {
            var t = this
              , i = void 0 !== e ? e.target : t.media
              , n = null;
            i && i.buffered && i.buffered.length > 0 && i.buffered.end && i.duration ? n = i.buffered.end(i.buffered.length - 1) / i.duration : i && void 0 !== i.bytesTotal && i.bytesTotal > 0 && void 0 !== i.bufferedBytes ? n = i.bufferedBytes / i.bytesTotal : e && e.lengthComputable && 0 !== e.total && (n = e.loaded / e.total),
            null !== n && (n = Math.min(1, Math.max(0, n)),
            t.loaded && t.total && t.loaded.width(t.total.width() * n))
        },
        setCurrentRail: function() {
            var e = this;
            if (void 0 !== e.media.currentTime && e.media.duration && e.total && e.handle) {
                var t = Math.round(e.total.width() * e.media.currentTime / e.media.duration)
                  , i = t - Math.round(e.handle.outerWidth(!0) / 2);
                e.current.width(t),
                e.handle.css("left", i)
            }
        }
    })
}(mejs.$),
function(e) {
    e.extend(mejs.MepDefaults, {
        duration: -1,
        timeAndDurationSeparator: "<span> | </span>"
    }),
    e.extend(MediaElementPlayer.prototype, {
        buildcurrent: function(t, i, n, s) {
            var o = this;
            e('<div class="mejs-time" role="timer" aria-live="off"><span class="mejs-currenttime">' + mejs.Utility.secondsToTimeCode(0, t.options) + "</span></div>").appendTo(i),
            o.currenttime = o.controls.find(".mejs-currenttime"),
            s.addEventListener("timeupdate", function() {
                t.updateCurrent()
            }, !1)
        },
        buildduration: function(t, i, n, s) {
            var o = this;
            i.children().last().find(".mejs-currenttime").length > 0 ? e(o.options.timeAndDurationSeparator + '<span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(o.options.duration, o.options) + "</span>").appendTo(i.find(".mejs-time")) : (i.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"),
            e('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + mejs.Utility.secondsToTimeCode(o.options.duration, o.options) + "</span></div>").appendTo(i)),
            o.durationD = o.controls.find(".mejs-duration"),
            s.addEventListener("timeupdate", function() {
                t.updateDuration()
            }, !1)
        },
        updateCurrent: function() {
            var e = this;
            e.currenttime && e.currenttime.html(mejs.Utility.secondsToTimeCode(e.media.currentTime, e.options))
        },
        updateDuration: function() {
            var e = this;
            e.container.toggleClass("mejs-long-video", e.media.duration > 3600),
            e.durationD && (e.options.duration > 0 || e.media.duration) && e.durationD.html(mejs.Utility.secondsToTimeCode(e.options.duration > 0 ? e.options.duration : e.media.duration, e.options))
        }
    })
}(mejs.$),
function(e) {
    e.extend(mejs.MepDefaults, {
        muteText: mejs.i18n.t("Mute Toggle"),
        allyVolumeControlText: mejs.i18n.t("Use Up/Down Arrow keys to increase or decrease volume."),
        hideVolumeOnTouchDevices: !0,
        audioVolume: "horizontal",
        videoVolume: "vertical"
    }),
    e.extend(MediaElementPlayer.prototype, {
        buildvolume: function(t, i, n, s) {
            if (!mejs.MediaFeatures.isAndroid && !mejs.MediaFeatures.isiOS || !this.options.hideVolumeOnTouchDevices) {
                var o = this
                  , a = o.isVideo ? o.options.videoVolume : o.options.audioVolume
                  , r = "horizontal" == a ? e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + o.id + '" title="' + o.options.muteText + '" aria-label="' + o.options.muteText + '"></button></div><a href="javascript:void(0);" class="mejs-horizontal-volume-slider"><span class="mejs-offscreen">' + o.options.allyVolumeControlText + '</span><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></a>').appendTo(i) : e('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + o.id + '" title="' + o.options.muteText + '" aria-label="' + o.options.muteText + '"></button><a href="javascript:void(0);" class="mejs-volume-slider"><span class="mejs-offscreen">' + o.options.allyVolumeControlText + '</span><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></a></div>').appendTo(i)
                  , l = o.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider")
                  , u = o.container.find(".mejs-volume-total, .mejs-horizontal-volume-total")
                  , d = o.container.find(".mejs-volume-current, .mejs-horizontal-volume-current")
                  , c = o.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle")
                  , m = function(e, t) {
                    if (!l.is(":visible") && "undefined" == typeof t)
                        return l.show(),
                        m(e, !0),
                        void l.hide();
                    e = Math.max(0, e),
                    e = Math.min(e, 1),
                    0 === e ? (r.removeClass("mejs-mute").addClass("mejs-unmute"),
                    r.children("button").attr("title", mejs.i18n.t("Unmute")).attr("aria-label", mejs.i18n.t("Unmute"))) : (r.removeClass("mejs-unmute").addClass("mejs-mute"),
                    r.children("button").attr("title", mejs.i18n.t("Mute")).attr("aria-label", mejs.i18n.t("Mute")));
                    var i = u.position();
                    if ("vertical" == a) {
                        var n = u.height()
                          , s = n - n * e;
                        c.css("top", Math.round(i.top + s - c.height() / 2)),
                        d.height(n - s),
                        d.css("top", i.top + s)
                    } else {
                        var o = u.width()
                          , p = o * e;
                        c.css("left", Math.round(i.left + p - c.width() / 2)),
                        d.width(Math.round(p))
                    }
                }
                  , p = function(e) {
                    var t = null
                      , i = u.offset();
                    if ("vertical" === a) {
                        var n = u.height()
                          , o = e.pageY - i.top;
                        if (t = (n - o) / n,
                        0 === i.top || 0 === i.left)
                            return
                    } else {
                        var r = u.width()
                          , l = e.pageX - i.left;
                        t = l / r
                    }
                    t = Math.max(0, t),
                    t = Math.min(t, 1),
                    m(t),
                    0 === t ? s.setMuted(!0) : s.setMuted(!1),
                    s.setVolume(t)
                }
                  , h = !1
                  , f = !1;
                r.hover(function() {
                    l.show(),
                    f = !0
                }, function() {
                    f = !1,
                    h || "vertical" != a || l.hide()
                });
                var v = function(e) {
                    var t = Math.floor(100 * s.volume);
                    l.attr({
                        "aria-label": mejs.i18n.t("volumeSlider"),
                        "aria-valuemin": 0,
                        "aria-valuemax": 100,
                        "aria-valuenow": t,
                        "aria-valuetext": t + "%",
                        role: "slider",
                        tabindex: 0
                    })
                };
                l.bind("mouseover", function() {
                    f = !0
                }).bind("mousedown", function(e) {
                    return p(e),
                    o.globalBind("mousemove.vol", function(e) {
                        p(e)
                    }),
                    o.globalBind("mouseup.vol", function() {
                        h = !1,
                        o.globalUnbind(".vol"),
                        f || "vertical" != a || l.hide()
                    }),
                    h = !0,
                    !1
                }).bind("keydown", function(e) {
                    var t = e.keyCode
                      , i = s.volume;
                    switch (t) {
                    case 38:
                        i += .1;
                        break;
                    case 40:
                        i -= .1;
                        break;
                    default:
                        return !0
                    }
                    return h = !1,
                    m(i),
                    s.setVolume(i),
                    !1
                }).bind("blur", function() {
                    l.hide()
                }),
                r.find("button").click(function() {
                    s.setMuted(!s.muted)
                }),
                r.find("button").bind("focus", function() {
                    l.show()
                }),
                s.addEventListener("volumechange", function(e) {
                    h || (s.muted ? (m(0),
                    r.removeClass("mejs-mute").addClass("mejs-unmute")) : (m(s.volume),
                    r.removeClass("mejs-unmute").addClass("mejs-mute"))),
                    v(e)
                }, !1),
                0 === t.options.startVolume && s.setMuted(!0),
                "native" === s.pluginType && s.setVolume(t.options.startVolume),
                o.container.on("controlsresize", function() {
                    m(s.volume)
                })
            }
        }
    })
}(mejs.$),
function(e) {
    e.extend(mejs.MepDefaults, {
        usePluginFullScreen: !0,
        newWindowCallback: function() {
            return ""
        },
        fullscreenText: mejs.i18n.t("Fullscreen")
    }),
    e.extend(MediaElementPlayer.prototype, {
        isFullScreen: !1,
        isNativeFullScreen: !1,
        isInIframe: !1,
        buildfullscreen: function(t, i, n, s) {
            if (t.isVideo) {
                if (t.isInIframe = window.location != window.parent.location,
                mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    var o = function(e) {
                        t.isFullScreen && (mejs.MediaFeatures.isFullScreen() ? (t.isNativeFullScreen = !0,
                        t.setControlsSize()) : (t.isNativeFullScreen = !1,
                        t.exitFullScreen()))
                    };
                    t.globalBind(mejs.MediaFeatures.fullScreenEventName, o)
                }
                var a = this
                  , r = e('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + a.id + '" title="' + a.options.fullscreenText + '" aria-label="' + a.options.fullscreenText + '"></button></div>').appendTo(i);
                if ("native" === a.media.pluginType || !a.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox)
                    r.click(function() {
                        var e = mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || t.isFullScreen;
                        e ? t.exitFullScreen() : t.enterFullScreen()
                    });
                else {
                    var l = null
                      , u = function() {
                        var e, t = document.createElement("x"), i = document.documentElement, n = window.getComputedStyle;
                        return "pointerEvents"in t.style && (t.style.pointerEvents = "auto",
                        t.style.pointerEvents = "x",
                        i.appendChild(t),
                        e = n && "auto" === n(t, "").pointerEvents,
                        i.removeChild(t),
                        !!e)
                    }();
                    if (u && !mejs.MediaFeatures.isOpera) {
                        var d, c, m = !1, p = function() {
                            if (m) {
                                for (var e in h)
                                    h[e].hide();
                                r.css("pointer-events", ""),
                                a.controls.css("pointer-events", ""),
                                a.media.removeEventListener("click", a.clickToPlayPauseCallback),
                                m = !1
                            }
                        }, h = {}, f = ["top", "left", "right", "bottom"], v = function() {
                            var e = r.offset().left - a.container.offset().left
                              , t = r.offset().top - a.container.offset().top
                              , i = r.outerWidth(!0)
                              , n = r.outerHeight(!0)
                              , s = a.container.width()
                              , o = a.container.height();
                            for (d in h)
                                h[d].css({
                                    position: "absolute",
                                    top: 0,
                                    left: 0
                                });
                            h.top.width(s).height(t),
                            h.left.width(e).height(n).css({
                                top: t
                            }),
                            h.right.width(s - e - i).height(n).css({
                                top: t,
                                left: e + i
                            }),
                            h.bottom.width(s).height(o - n - t).css({
                                top: t + n
                            })
                        };
                        for (a.globalBind("resize", function() {
                            v()
                        }),
                        d = 0,
                        c = f.length; d < c; d++)
                            h[f[d]] = e('<div class="mejs-fullscreen-hover" />').appendTo(a.container).mouseover(p).hide();
                        r.on("mouseover", function() {
                            if (!a.isFullScreen) {
                                var e = r.offset()
                                  , i = t.container.offset();
                                s.positionFullscreenButton(e.left - i.left, e.top - i.top, !1),
                                r.css("pointer-events", "none"),
                                a.controls.css("pointer-events", "none"),
                                a.media.addEventListener("click", a.clickToPlayPauseCallback);
                                for (d in h)
                                    h[d].show();
                                v(),
                                m = !0
                            }
                        }),
                        s.addEventListener("fullscreenchange", function(e) {
                            a.isFullScreen = !a.isFullScreen,
                            a.isFullScreen ? a.media.removeEventListener("click", a.clickToPlayPauseCallback) : a.media.addEventListener("click", a.clickToPlayPauseCallback),
                            p()
                        }),
                        a.globalBind("mousemove", function(e) {
                            if (m) {
                                var t = r.offset();
                                (e.pageY < t.top || e.pageY > t.top + r.outerHeight(!0) || e.pageX < t.left || e.pageX > t.left + r.outerWidth(!0)) && (r.css("pointer-events", ""),
                                a.controls.css("pointer-events", ""),
                                m = !1)
                            }
                        })
                    } else
                        r.on("mouseover", function() {
                            null !== l && (clearTimeout(l),
                            delete l);
                            var e = r.offset()
                              , i = t.container.offset();
                            s.positionFullscreenButton(e.left - i.left, e.top - i.top, !0)
                        }).on("mouseout", function() {
                            null !== l && (clearTimeout(l),
                            delete l),
                            l = setTimeout(function() {
                                s.hideFullscreenButton()
                            }, 1500)
                        })
                }
                t.fullscreenBtn = r,
                a.globalBind("keydown", function(e) {
                    (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || a.isFullScreen) && 27 == e.keyCode && t.exitFullScreen()
                }),
                a.normalHeight = 0,
                a.normalWidth = 0
            }
        },
        cleanfullscreen: function(e) {
            e.exitFullScreen()
        },
        containerSizeTimeout: null,
        enterFullScreen: function() {
            var t = this;
            if ("native" === t.media.pluginType || !mejs.MediaFeatures.isFirefox && !t.options.usePluginFullScreen) {
                if (e(document.documentElement).addClass("mejs-fullscreen"),
                t.normalHeight = t.container.height(),
                t.normalWidth = t.container.width(),
                "native" === t.media.pluginType)
                    if (mejs.MediaFeatures.hasTrueNativeFullScreen)
                        mejs.MediaFeatures.requestFullScreen(t.container[0]),
                        t.isInIframe && setTimeout(function n() {
                            if (t.isNativeFullScreen) {
                                var i = window.devicePixelRatio || 1
                                  , s = .002
                                  , o = i * e(window).width()
                                  , a = screen.width
                                  , r = i * o;
                                Math.abs(a - o) > Math.abs(a - r) && (o = r);
                                var l = Math.abs(a - o)
                                  , u = a * s;
                                l > u ? t.exitFullScreen() : setTimeout(n, 500)
                            }
                        }, 1e3);
                    else if (mejs.MediaFeatures.hasSemiNativeFullScreen)
                        return void t.media.webkitEnterFullscreen();
                if (t.isInIframe) {
                    var i = t.options.newWindowCallback(this);
                    if ("" !== i) {
                        if (!mejs.MediaFeatures.hasTrueNativeFullScreen)
                            return t.pause(),
                            void window.open(i, t.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                        setTimeout(function() {
                            t.isNativeFullScreen || (t.pause(),
                            window.open(i, t.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no"))
                        }, 250)
                    }
                }
                t.container.addClass("mejs-container-fullscreen").width("100%").height("100%"),
                t.containerSizeTimeout = setTimeout(function() {
                    t.container.css({
                        width: "100%",
                        height: "100%"
                    }),
                    t.setControlsSize()
                }, 500),
                "native" === t.media.pluginType ? t.$media.width("100%").height("100%") : (t.container.find(".mejs-shim").width("100%").height("100%"),
                t.media.setVideoSize(e(window).width(), e(window).height())),
                t.layers.children("div").width("100%").height("100%"),
                t.fullscreenBtn && t.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"),
                t.setControlsSize(),
                t.isFullScreen = !0,
                t.container.find(".mejs-captions-text").css("font-size", screen.width / t.width * 1 * 100 + "%"),
                t.container.find(".mejs-captions-position").css("bottom", "45px"),
                t.container.trigger("enteredfullscreen")
            }
        },
        exitFullScreen: function() {
            var t = this;
            return clearTimeout(t.containerSizeTimeout),
            "native" !== t.media.pluginType && mejs.MediaFeatures.isFirefox ? void t.media.setFullscreen(!1) : (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || t.isFullScreen) && mejs.MediaFeatures.cancelFullScreen(),
            e(document.documentElement).removeClass("mejs-fullscreen"),
            t.container.removeClass("mejs-container-fullscreen").width(t.normalWidth).height(t.normalHeight),
            "native" === t.media.pluginType ? t.$media.width(t.normalWidth).height(t.normalHeight) : (t.container.find(".mejs-shim").width(t.normalWidth).height(t.normalHeight),
            t.media.setVideoSize(t.normalWidth, t.normalHeight)),
            t.layers.children("div").width(t.normalWidth).height(t.normalHeight),
            t.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"),
            t.setControlsSize(),
            t.isFullScreen = !1,
            t.container.find(".mejs-captions-text").css("font-size", ""),
            t.container.find(".mejs-captions-position").css("bottom", ""),
            void t.container.trigger("exitedfullscreen"))
        }
    })
}(mejs.$),
function(e) {
    e.extend(mejs.MepDefaults, {
        speeds: ["2.00", "1.50", "1.25", "1.00", "0.75"],
        defaultSpeed: "1.00",
        speedChar: "x"
    }),
    e.extend(MediaElementPlayer.prototype, {
        buildspeed: function(t, i, n, s) {
            var o = this;
            if ("native" == o.media.pluginType) {
                for (var a = null, r = null, l = null, u = null, d = [], c = !1, m = 0, p = o.options.speeds.length; m < p; m++) {
                    var h = o.options.speeds[m];
                    "string" == typeof h ? (d.push({
                        name: h + o.options.speedChar,
                        value: h
                    }),
                    h === o.options.defaultSpeed && (c = !0)) : (d.push(h),
                    h.value === o.options.defaultSpeed && (c = !0))
                }
                c || d.push({
                    name: o.options.defaultSpeed + o.options.speedChar,
                    value: o.options.defaultSpeed
                }),
                d.sort(function(e, t) {
                    return parseFloat(t.value) - parseFloat(e.value)
                });
                var f = function(e) {
                    for (m = 0,
                    p = d.length; m < p; m++)
                        if (d[m].value === e)
                            return d[m].name
                }
                  , v = '<div class="mejs-button mejs-speed-button"><button type="button">' + f(o.options.defaultSpeed) + '</button><div class="mejs-speed-selector"><ul>';
                for (m = 0,
                il = d.length; m < il; m++)
                    u = o.id + "-speed-" + d[m].value,
                    v += '<li><input type="radio" name="speed" value="' + d[m].value + '" id="' + u + '" ' + (d[m].value === o.options.defaultSpeed ? " checked" : "") + ' /><label for="' + u + '" ' + (d[m].value === o.options.defaultSpeed ? ' class="mejs-speed-selected"' : "") + ">" + d[m].name + "</label></li>";
                v += "</ul></div></div>",
                a = e(v).appendTo(i),
                r = a.find(".mejs-speed-selector"),
                l = o.options.defaultSpeed,
                r.on("click", 'input[type="radio"]', function() {
                    var t = e(this).attr("value");
                    l = t,
                    s.playbackRate = parseFloat(t),
                    a.find("button").html(f(t)),
                    a.find(".mejs-speed-selected").removeClass("mejs-speed-selected"),
                    a.find('input[type="radio"]:checked').next().addClass("mejs-speed-selected")
                }),
                a.one("mouseenter focusin", function() {
                    r.height(a.find(".mejs-speed-selector ul").outerHeight(!0) + a.find(".mejs-speed-translations").outerHeight(!0)).css("top", -1 * r.height() + "px")
                })
            }
        }
    })
}(mejs.$),
function(e) {
    e.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: mejs.i18n.t("Captions/Subtitles"),
        tracksAriaLive: !1,
        hideCaptionsButtonWhenEmpty: !0,
        toggleCaptionsButtonWhenOnlyOne: !1,
        slidesSelector: ""
    }),
    e.extend(MediaElementPlayer.prototype, {
        hasChapters: !1,
        cleartracks: function(e, t, i, n) {
            e && (e.captions && e.captions.remove(),
            e.chapters && e.chapters.remove(),
            e.captionsText && e.captionsText.remove(),
            e.captionsButton && e.captionsButton.remove())
        },
        buildtracks: function(t, i, n, s) {
            if (0 !== t.tracks.length) {
                var o, a = this, r = a.options.tracksAriaLive ? 'role="log" aria-live="assertive" aria-atomic="false"' : "";
                if (a.domNode.textTracks)
                    for (o = a.domNode.textTracks.length - 1; o >= 0; o--)
                        a.domNode.textTracks[o].mode = "hidden";
                a.cleartracks(t, i, n, s),
                t.chapters = e('<div class="mejs-chapters mejs-layer"></div>').prependTo(n).hide(),
                t.captions = e('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover" ' + r + '><span class="mejs-captions-text"></span></div></div>').prependTo(n).hide(),
                t.captionsText = t.captions.find(".mejs-captions-text"),
                t.captionsButton = e('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + a.id + '" title="' + a.options.tracksText + '" aria-label="' + a.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + t.id + '_captions" id="' + t.id + '_captions_none" value="none" checked="checked" /><label for="' + t.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(i);
                var l = 0;
                for (o = 0; o < t.tracks.length; o++)
                    "subtitles" == t.tracks[o].kind && l++;
                for (a.options.toggleCaptionsButtonWhenOnlyOne && 1 == l ? t.captionsButton.on("click", function() {
                    null === t.selectedTrack ? lang = t.tracks[0].srclang : lang = "none",
                    t.setTrack(lang)
                }) : (t.captionsButton.on("mouseenter focusin", function() {
                    e(this).find(".mejs-captions-selector").css("visibility", "visible")
                }).on("click", "input[type=radio]", function() {
                    lang = this.value,
                    t.setTrack(lang)
                }),
                t.captionsButton.on("mouseleave focusout", function() {
                    e(this).find(".mejs-captions-selector").css("visibility", "hidden")
                })),
                t.options.alwaysShowControls ? t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : t.container.bind("controlsshown", function() {
                    t.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                }).bind("controlshidden", function() {
                    s.paused || t.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                }),
                t.trackToLoad = -1,
                t.selectedTrack = null,
                t.isLoadingTrack = !1,
                o = 0; o < t.tracks.length; o++)
                    "subtitles" == t.tracks[o].kind && t.addTrackButton(t.tracks[o].srclang, t.tracks[o].label);
                t.loadNextTrack(),
                s.addEventListener("timeupdate", function(e) {
                    t.displayCaptions()
                }, !1),
                "" !== t.options.slidesSelector && (t.slidesContainer = e(t.options.slidesSelector),
                s.addEventListener("timeupdate", function(e) {
                    t.displaySlides()
                }, !1)),
                s.addEventListener("loadedmetadata", function(e) {
                    t.displayChapters()
                }, !1),
                t.container.hover(function() {
                    t.hasChapters && (t.chapters.css("visibility", "visible"),
                    t.chapters.fadeIn(200).height(t.chapters.find(".mejs-chapter").outerHeight()))
                }, function() {
                    t.hasChapters && !s.paused && t.chapters.fadeOut(200, function() {
                        e(this).css("visibility", "hidden"),
                        e(this).css("display", "block")
                    })
                }),
                a.container.on("controlsresize", function() {
                    a.adjustLanguageBox()
                }),
                null !== t.node.getAttribute("autoplay") && t.chapters.css("visibility", "hidden")
            }
        },
        setTrack: function(e) {
            var t, i = this;
            if ("none" == e)
                i.selectedTrack = null,
                i.captionsButton.removeClass("mejs-captions-enabled");
            else
                for (t = 0; t < i.tracks.length; t++)
                    if (i.tracks[t].srclang == e) {
                        null === i.selectedTrack && i.captionsButton.addClass("mejs-captions-enabled"),
                        i.selectedTrack = i.tracks[t],
                        i.captions.attr("lang", i.selectedTrack.srclang),
                        i.displayCaptions();
                        break
                    }
        },
        loadNextTrack: function() {
            var e = this;
            e.trackToLoad++,
            e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0,
            e.loadTrack(e.trackToLoad)) : (e.isLoadingTrack = !1,
            e.checkForTracks())
        },
        loadTrack: function(t) {
            var i = this
              , n = i.tracks[t]
              , s = function() {
                n.isLoaded = !0,
                i.enableTrackButton(n.srclang, n.label),
                i.loadNextTrack()
            };
            e.ajax({
                url: n.src,
                dataType: "text",
                success: function(e) {
                    "string" == typeof e && /<tt\s+xml/gi.exec(e) ? n.entries = mejs.TrackFormatParser.dfxp.parse(e) : n.entries = mejs.TrackFormatParser.webvtt.parse(e),
                    s(),
                    "chapters" == n.kind && i.media.addEventListener("play", function(e) {
                        i.media.duration > 0 && i.displayChapters(n)
                    }, !1),
                    "slides" == n.kind && i.setupSlides(n)
                },
                error: function() {
                    i.removeTrackButton(n.srclang),
                    i.loadNextTrack()
                }
            })
        },
        enableTrackButton: function(t, i) {
            var n = this;
            "" === i && (i = mejs.language.codes[t] || t),
            n.captionsButton.find("input[value=" + t + "]").prop("disabled", !1).siblings("label").html(i),
            n.options.startLanguage == t && e("#" + n.id + "_captions_" + t).prop("checked", !0).trigger("click"),
            n.adjustLanguageBox()
        },
        removeTrackButton: function(e) {
            var t = this;
            t.captionsButton.find("input[value=" + e + "]").closest("li").remove(),
            t.adjustLanguageBox()
        },
        addTrackButton: function(t, i) {
            var n = this;
            "" === i && (i = mejs.language.codes[t] || t),
            n.captionsButton.find("ul").append(e('<li><input type="radio" name="' + n.id + '_captions" id="' + n.id + "_captions_" + t + '" value="' + t + '" disabled="disabled" /><label for="' + n.id + "_captions_" + t + '">' + i + " (loading)</label></li>")),
            n.adjustLanguageBox(),
            n.container.find(".mejs-captions-translations option[value=" + t + "]").remove()
        },
        adjustLanguageBox: function() {
            var e = this;
            e.captionsButton.find(".mejs-captions-selector").height(e.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + e.captionsButton.find(".mejs-captions-translations").outerHeight(!0))
        },
        checkForTracks: function() {
            var e = this
              , t = !1;
            if (e.options.hideCaptionsButtonWhenEmpty) {
                for (i = 0; i < e.tracks.length; i++)
                    if ("subtitles" == e.tracks[i].kind && e.tracks[i].isLoaded) {
                        t = !0;
                        break
                    }
                t || (e.captionsButton.hide(),
                e.setControlsSize())
            }
        },
        displayCaptions: function() {
            if ("undefined" != typeof this.tracks) {
                var e, t = this, i = t.selectedTrack;
                if (null !== i && i.isLoaded) {
                    for (e = 0; e < i.entries.times.length; e++)
                        if (t.media.currentTime >= i.entries.times[e].start && t.media.currentTime <= i.entries.times[e].stop)
                            return t.captionsText.html(i.entries.text[e]).attr("class", "mejs-captions-text " + (i.entries.times[e].identifier || "")),
                            void t.captions.show().height(0);
                    t.captions.hide()
                } else
                    t.captions.hide()
            }
        },
        setupSlides: function(e) {
            var t = this;
            t.slides = e,
            t.slides.entries.imgs = [t.slides.entries.text.length],
            t.showSlide(0)
        },
        showSlide: function(t) {
            if ("undefined" != typeof this.tracks && "undefined" != typeof this.slidesContainer) {
                var i = this
                  , n = i.slides.entries.text[t]
                  , s = i.slides.entries.imgs[t];
                "undefined" == typeof s || "undefined" == typeof s.fadeIn ? i.slides.entries.imgs[t] = s = e('<img src="' + n + '">').on("load", function() {
                    s.appendTo(i.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
                }) : s.is(":visible") || s.is(":animated") || s.fadeIn().siblings(":visible").fadeOut()
            }
        },
        displaySlides: function() {
            if ("undefined" != typeof this.slides) {
                var e, t = this, i = t.slides;
                for (e = 0; e < i.entries.times.length; e++)
                    if (t.media.currentTime >= i.entries.times[e].start && t.media.currentTime <= i.entries.times[e].stop)
                        return void t.showSlide(e)
            }
        },
        displayChapters: function() {
            var e, t = this;
            for (e = 0; e < t.tracks.length; e++)
                if ("chapters" == t.tracks[e].kind && t.tracks[e].isLoaded) {
                    t.drawChapters(t.tracks[e]),
                    t.hasChapters = !0;
                    break
                }
        },
        drawChapters: function(t) {
            var i, n, s = this, o = 0, a = 0;
            for (s.chapters.empty(),
            i = 0; i < t.entries.times.length; i++)
                n = t.entries.times[i].stop - t.entries.times[i].start,
                o = Math.floor(n / s.media.duration * 100),
                (o + a > 100 || i == t.entries.times.length - 1 && o + a < 100) && (o = 100 - a),
                s.chapters.append(e('<div class="mejs-chapter" rel="' + t.entries.times[i].start + '" style="left: ' + a.toString() + "%;width: " + o.toString() + '%;"><div class="mejs-chapter-block' + (i == t.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + t.entries.text[i] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(t.entries.times[i].start, s.options) + "&ndash;" + mejs.Utility.secondsToTimeCode(t.entries.times[i].stop, s.options) + "</span></div></div>")),
                a += o;
            s.chapters.find("div.mejs-chapter").click(function() {
                s.media.setCurrentTime(parseFloat(e(this).attr("rel"))),
                s.media.paused && s.media.play()
            }),
            s.chapters.show()
        }
    }),
    mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            fl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    },
    mejs.TrackFormatParser = {
        webvtt: {
            pattern_timecode: /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
            parse: function(t) {
                for (var i, n, s, o = 0, a = mejs.TrackFormatParser.split2(t, /\r?\n/), r = {
                    text: [],
                    times: []
                }; o < a.length; o++) {
                    if (i = this.pattern_timecode.exec(a[o]),
                    i && o < a.length) {
                        for (o - 1 >= 0 && "" !== a[o - 1] && (s = a[o - 1]),
                        o++,
                        n = a[o],
                        o++; "" !== a[o] && o < a.length; )
                            n = n + "\n" + a[o],
                            o++;
                        n = e.trim(n).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"),
                        r.text.push(n),
                        r.times.push({
                            identifier: s,
                            start: 0 === mejs.Utility.convertSMPTEtoSeconds(i[1]) ? .2 : mejs.Utility.convertSMPTEtoSeconds(i[1]),
                            stop: mejs.Utility.convertSMPTEtoSeconds(i[3]),
                            settings: i[5]
                        })
                    }
                    s = ""
                }
                return r
            }
        },
        dfxp: {
            parse: function(t) {
                t = e(t).filter("tt");
                var i, n, s = 0, o = t.children("div").eq(0), a = o.find("p"), r = t.find("#" + o.attr("style")), l = {
                    text: [],
                    times: []
                };
                if (r.length) {
                    var u = r.removeAttr("id").get(0).attributes;
                    if (u.length)
                        for (i = {},
                        s = 0; s < u.length; s++)
                            i[u[s].name.split(":")[1]] = u[s].value
                }
                for (s = 0; s < a.length; s++) {
                    var d, c = {
                        start: null,
                        stop: null,
                        style: null
                    };
                    if (a.eq(s).attr("begin") && (c.start = mejs.Utility.convertSMPTEtoSeconds(a.eq(s).attr("begin"))),
                    !c.start && a.eq(s - 1).attr("end") && (c.start = mejs.Utility.convertSMPTEtoSeconds(a.eq(s - 1).attr("end"))),
                    a.eq(s).attr("end") && (c.stop = mejs.Utility.convertSMPTEtoSeconds(a.eq(s).attr("end"))),
                    !c.stop && a.eq(s + 1).attr("begin") && (c.stop = mejs.Utility.convertSMPTEtoSeconds(a.eq(s + 1).attr("begin"))),
                    i) {
                        d = "";
                        for (var m in i)
                            d += m + ":" + i[m] + ";"
                    }
                    d && (c.style = d),
                    0 === c.start && (c.start = .2),
                    l.times.push(c),
                    n = e.trim(a.eq(s).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"),
                    l.text.push(n),
                    0 === l.times.start && (l.times.start = 2)
                }
                return l
            }
        },
        split2: function(e, t) {
            return e.split(t)
        }
    },
    3 != "x\n\ny".split(/\n/gi).length && (mejs.TrackFormatParser.split2 = function(e, t) {
        var i, n = [], s = "";
        for (i = 0; i < e.length; i++)
            s += e.substring(i, i + 1),
            t.test(s) && (n.push(s.replace(t, "")),
            s = "");
        return n.push(s),
        n
    }
    )
}(mejs.$),
function(e) {
    e.extend(mejs.MepDefaults, {
        contextMenuItems: [{
            render: function(e) {
                return "undefined" == typeof e.enterFullScreen ? null : e.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
            },
            click: function(e) {
                e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen()
            }
        }, {
            render: function(e) {
                return e.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
            },
            click: function(e) {
                e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
            }
        }, {
            isSeparator: !0
        }, {
            render: function(e) {
                return mejs.i18n.t("Download Video")
            },
            click: function(e) {
                window.location.href = e.media.currentSrc
            }
        }]
    }),
    e.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function(t, i, n, s) {
            t.contextMenu = e('<div class="mejs-contextmenu"></div>').appendTo(e("body")).hide(),
            t.container.bind("contextmenu", function(e) {
                if (t.isContextMenuEnabled)
                    return e.preventDefault(),
                    t.renderContextMenu(e.clientX - 1, e.clientY - 1),
                    !1
            }),
            t.container.bind("click", function() {
                t.contextMenu.hide()
            }),
            t.contextMenu.bind("mouseleave", function() {
                t.startContextMenuTimer()
            })
        },
        cleancontextmenu: function(e) {
            e.contextMenu.remove()
        },
        isContextMenuEnabled: !0,
        enableContextMenu: function() {
            this.isContextMenuEnabled = !0
        },
        disableContextMenu: function() {
            this.isContextMenuEnabled = !1
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function() {
            var e = this;
            e.killContextMenuTimer(),
            e.contextMenuTimer = setTimeout(function() {
                e.hideContextMenu(),
                e.killContextMenuTimer()
            }, 750)
        },
        killContextMenuTimer: function() {
            var e = this.contextMenuTimer;
            null != e && (clearTimeout(e),
            delete e,
            e = null)
        },
        hideContextMenu: function() {
            this.contextMenu.hide()
        },
        renderContextMenu: function(t, i) {
            for (var n = this, s = "", o = n.options.contextMenuItems, a = 0, r = o.length; a < r; a++)
                if (o[a].isSeparator)
                    s += '<div class="mejs-contextmenu-separator"></div>';
                else {
                    var l = o[a].render(n);
                    null != l && (s += '<div class="mejs-contextmenu-item" data-itemindex="' + a + '" id="element-' + 1e6 * Math.random() + '">' + l + "</div>")
                }
            n.contextMenu.empty().append(e(s)).css({
                top: i,
                left: t
            }).show(),
            n.contextMenu.find(".mejs-contextmenu-item").each(function() {
                var t = e(this)
                  , i = parseInt(t.data("itemindex"), 10)
                  , s = n.options.contextMenuItems[i];
                "undefined" != typeof s.show && s.show(t, n),
                t.click(function() {
                    "undefined" != typeof s.click && s.click(n),
                    n.contextMenu.hide()
                })
            }),
            setTimeout(function() {
                n.killControlsTimer("rev3")
            }, 100)
        }
    })
}(mejs.$),
function(e) {
    e.extend(mejs.MepDefaults, {
        skipBackInterval: 30,
        skipBackText: mejs.i18n.t("Skip back %1 seconds")
    }),
    e.extend(MediaElementPlayer.prototype, {
        buildskipback: function(t, i, n, s) {
            var o = this
              , a = o.options.skipBackText.replace("%1", o.options.skipBackInterval);
            e('<div class="mejs-button mejs-skip-back-button"><button type="button" aria-controls="' + o.id + '" title="' + a + '" aria-label="' + a + '">' + o.options.skipBackInterval + "</button></div>").appendTo(i).click(function() {
                s.setCurrentTime(Math.max(s.currentTime - o.options.skipBackInterval, 0)),
                e(this).find("button").blur()
            })
        }
    })
}(mejs.$),
function(e) {
    e.extend(mejs.MepDefaults, {
        postrollCloseText: mejs.i18n.t("Close")
    }),
    e.extend(MediaElementPlayer.prototype, {
        buildpostroll: function(t, i, n, s) {
            var o = this
              , a = o.container.find('link[rel="postroll"]').attr("href");
            "undefined" != typeof a && (t.postroll = e('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + o.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(n).hide(),
            o.media.addEventListener("ended", function(i) {
                e.ajax({
                    dataType: "html",
                    url: a,
                    success: function(e, t) {
                        n.find(".mejs-postroll-layer-content").html(e)
                    }
                }),
                t.postroll.show()
            }, !1))
        }
    })
}(mejs.$);
function qD_() {
    try {
        return !!document.createElement("video").canPlayType
    } catch (n) {
        return !1
    }
}
function rmE() {
    try {
        return "localStorage"in window && null !== window.localStorage
    } catch (n) {
        return !1
    }
}
var BGh = "undefined" == typeof ConvivaPrivateLoader
  , usj = qD_() && rmE();
if (BGh = BGh && usj) {
    var ConvivaPrivateLoader = "undefined" != typeof ConvivaPrivateLoader ? ConvivaPrivateLoader : function() {}
    ;
    !function() {
        function yR(n, t) {
            "undefined" != typeof ConvivaPrivateModule ? ConvivaPrivateModule[t] = n : "undefined" != typeof ConvivaPrivateTestingModule ? ConvivaPrivateTestingModule[t] = n : ConvivaPrivateLoader[t] = n
        }
        function ag(n) {
            return n
        }
        function sHq(n) {
            return "undefined" != typeof ConvivaPrivateModule && ConvivaPrivateModule.hasOwnProperty(n) ? ConvivaPrivateModule[n] : "undefined" != typeof ConvivaPrivateTestingModule && ConvivaPrivateTestingModule.hasOwnProperty(n) ? ConvivaPrivateTestingModule[n] : ConvivaPrivateLoader.hasOwnProperty(n) ? ConvivaPrivateLoader[n] : null
        }
        function at(n, t) {
            var e, r = "";
            for (e in n)
                n.hasOwnProperty(e) && (r += "var " + e + "=" + ag(t) + "." + e + ";");
            return r
        }
        function fj() {
            return "STAT_INIT"
        }
        function Bg(n, t) {
            n.call(fj),
            yR(n, t)
        }
        function OZ(n, t, e) {
            n != fj && (void 0 == n[t] ? n[t] = e : n["Ph" + t] = e)
        }
        function LK(n, t, e) {
            n != fj && (n[t] = e)
        }
        function dN(n, t, e, r) {
            n == fj && (t[e] = r)
        }
        function ED(n, t, e) {
            n != fj && ("undefined" != typeof Object.defineProperty ? Object.defineProperty(n, t, {
                configurable: !0,
                enumerable: !0,
                get: e
            }) : n.__defineGetter__(t, e))
        }
        function Wf(n, t, e) {
            n != fj && ("undefined" != typeof Object.defineProperty ? Object.defineProperty(n, t, {
                configurable: !0,
                set: e
            }) : n.__defineSetter__(t, e))
        }
        function Va(n, t, e, r) {
            n == fj && ED(t, e, r)
        }
        function Z0(n, t, e, r) {
            n == fj && Wf(t, e, r)
        }
        function PW(n) {
            return n.constructor == Array || "undefined" != typeof n.length
        }
        function BW(n, t) {
            PW(n);
            if (PW(n))
                for (var e = 0; e < n.length; e++)
                    t(n[e]);
            else
                for (var r in n)
                    n.hasOwnProperty(r) && t(n[r])
        }
        function Zi(n, t) {
            if (PW(n))
                for (var e = 0; e < n.length; e++)
                    t(e);
            else
                for (var r in n)
                    n.hasOwnProperty(r) && t(r)
        }
        function D8(n, t, e, r) {
            n == fj && jstest.CR(t, e, r)
        }
        function m2(n, t, e, r, o) {
            n == fj ? jstest.lT(t, e, o) : jstest.xq(t, e, r)
        }
        function n4() {
            n4.t3R = 4294967296,
            n4.z_ = function(n) {
                var t = parseInt(n);
                return t > n4.Je ? t %= n4.t3R : t < 0 && (t = -t % n4.t3R,
                t = n4.t3R - t),
                t
            }
            ,
            n4.QIc = new RegExp("^[0-9]+$"),
            n4.tn = function(n) {
                return oL.qlz(n, n4.QIc),
                n4.z_(n)
            }
            ,
            n4.Je = n4.t3R - 1,
            n4.ke = 0
        }
        function VW() {
            VW.z_ = function(n) {
                var t = n4.z_(n);
                return t > VW.Je && (t -= n4.t3R),
                t
            }
            ,
            VW.y7A = new RegExp("^[+-]?[0-9]+$"),
            VW.tn = function(n) {
                return oL.qlz(n, VW.y7A),
                VW.z_(n)
            }
            ,
            VW.Je = 2147483647,
            VW.ke = -2147483648
        }
        function L_() {
            function n() {
                i.XE = 0,
                i.Br = 0
            }
            function t(n) {
                var t = new L_;
                return t.Br = 0,
                t.XE = n,
                t
            }
            function e(n) {
                var t = new L_;
                return n >= 0 ? (t.Br = 0,
                t.XE = n4.z_(n)) : (t.Br = -1,
                t.XE = n4.z_(n)),
                t
            }
            function r(n) {
                var t = n % L_.qp;
                t < 0 && (t = Number(n4.Je) + 1 + t);
                var e = new L_;
                return e.XE = n4.z_(t + .5),
                e.Br = VW.z_((n - t) / L_.qp),
                e
            }
            function o() {
                return Number(i.Br) * L_.qp + Number(i.XE)
            }
            var i = this;
            i == fj && (L_.qp = 4294967296),
            dN(i, L_, "uk", t),
            dN(i, L_, "yu", e),
            dN(i, L_, "Ho", r),
            ED(i, "mg", o),
            i != fj && (this.toString = function() {
                return i.mg.toString()
            }
            ),
            i != fj && n.apply(this, arguments)
        }
        function Q2() {
            function n() {
                L_.call(r),
                r.XE = 0,
                r.Br = 0
            }
            function t(n) {
                var t = new Q2;
                return t.Br = 0,
                t.XE = n,
                t
            }
            function e(n) {
                var t = new Q2;
                return t.Br = Math.floor(n / L_.qp),
                t.XE = n % L_.qp,
                t
            }
            var r = this;
            dN(r, Q2, "uk", t),
            dN(r, Q2, "Ho", e),
            r != fj && n.apply(arguments)
        }
        function OY(n, t, e) {
            this.hg = n,
            this.KN = t,
            this.Vv = e
        }
        function Vz() {
            function n() {
                O.AJ = new Ff((!0),(!1)),
                O._W = "",
                O.Ny = 0
            }
            function t(n) {
                var t = new Vz;
                return t._W = n,
                t
            }
            function e(n) {
                for (var t = new Vz, e = 0; e < n.ug; e++)
                    eQ.NP(t, n.tc(e));
                return t
            }
            function r() {
                O.KM();
                for (var n = new jh(O.X1), t = 0; t < n.ug; t++)
                    n.a9(t, eQ.Jj(O));
                return n
            }
            function o(n) {
                return t(n)
            }
            function i() {
                return O._W
            }
            function u() {
                return O._W
            }
            function f() {
                return O.KM(),
                O
            }
            function a() {
                return O._W = "",
                O.Ny = 0,
                O
            }
            function v(n) {
                if (n < 0 || O.Ny + n > O._W.length)
                    throw new Error("Access string outside the bounds");
                var t = new OY(O._W,O.Ny,n);
                return O.Ny += n,
                t
            }
            function l(n) {
                O._W = O._W + n
            }
            function c() {
                O.Ny = 0
            }
            function C() {
                return O._W.length - O.Ny
            }
            function s(n) {
                for (var t = [], e = 0, r = 0, o = 0; ; ) {
                    if (e < 7) {
                        if (o >= n.length)
                            break;
                        var i = 255 & n.charCodeAt(o);
                        o++,
                        r |= i << e,
                        e += 8
                    }
                    t.push(String.fromCharCode(127 & r)),
                    r >>= 7,
                    e -= 7
                }
                return e > 0 && t.push(String.fromCharCode(127 & r)),
                t.join("")
            }
            var O = this;
            if (dN(O, Vz, "UA", t),
            dN(O, Vz, "BU", e),
            OZ(O, "v_", r),
            dN(O, Vz, "Y_", o),
            OZ(O, "UX", i),
            OZ(O, "vo", u),
            OZ(O, "u6", f),
            OZ(O, "Uv", a),
            OZ(O, "PJ", v),
            OZ(O, "FF", l),
            OZ(O, "KM", c),
            ED(O, "X1", C),
            O == fj) {
                if (Vz.hp = !1,
                void 0 != window.GN) {
                    var d = new GN;
                    void 0 != d.xh && (Vz.hp = !0)
                }
                Vz.l0 = !Vz.hp
            }
            dN(O, Vz, "Em", s),
            O != fj && n.apply(O, arguments)
        }
        function eQ() {
            function n(n, t) {
                var e = va(t)
                  , r = e.length;
                r >= 32768 && (r = 32768);
                var o, i;
                r >= 128 ? (o = (r >> 8) + 128,
                i = r - (r >> 8 << 8)) : (o = r,
                i = 0),
                n.push(o),
                r >= 128 && n.push(i);
                for (var u = 0; u < r; u++)
                    n.push(e[u])
            }
            function t(n, t) {
                var e = t[0]
                  , r = n[e];
                r >= 128 ? (r = r - 128 << 8,
                r += n[e + 1],
                e += 2) : e += 1;
                var o = eQ.b1(n, e, r);
                return t[0] = e + r,
                o
            }
            eQ.Mr = 28770,
            eQ.rb = "Invalid PacketBrain magic code",
            eQ.caq = "PacketBrain structure too big",
            eQ.oY = function(n, t) {
                n.FF(n.AJ.Mx(t))
            }
            ,
            eQ.NP = function(n, t) {
                n.FF(n.AJ.vb(t))
            }
            ,
            eQ._m = function(n, t) {
                n.FF(n.AJ.kZ(t))
            }
            ,
            eQ.Rw = function(n, t) {
                n.FF(n.AJ.ko(t))
            }
            ,
            eQ.HT = function(n, t) {
                n.FF(n.AJ.yu(t))
            }
            ,
            eQ.jU = function(n, t) {
                n.FF(n.AJ.T5(t))
            }
            ,
            eQ.Gx = function(n, t) {
                n.FF(n.AJ.T5(t.Br)),
                n.FF(n.AJ.T5(t.XE))
            }
            ,
            eQ.Ch = eQ.Gx,
            eQ.MO = function(n, t) {
                n.FF(n.AJ.vb(t ? 1 : 0))
            }
            ,
            eQ.x1 = function(n, t) {
                n.FF(n.AJ.Dv(t))
            }
            ,
            eQ.REE = function(n, t) {
                t >= 65536 ? eQ.jU(n, t) : eQ.Rw(n, t)
            }
            ,
            eQ.WfF = function(n, t) {
                return t ? eQ.ip(n) : eQ.Kp(n)
            }
            ,
            eQ.hvL = function(n, t) {
                if (t >= 32768) {
                    var e = 2147483648 | t;
                    eQ.jU(n, e)
                } else
                    eQ.Rw(n, t)
            }
            ,
            eQ.jTz = function(n, t) {
                var e = eQ.Kp(n);
                if (e >= 32768) {
                    var r = eQ.Kp(n);
                    return 65536 * (e - 32768) + r
                }
                return e
            }
            ,
            eQ.x3 = function(n) {
                return n.AJ.qb(n.PJ(1))
            }
            ,
            eQ.Jj = function(n) {
                return n.AJ.ph(n.PJ(1))
            }
            ,
            eQ.VA = function(n) {
                return n.AJ.s1(n.PJ(2))
            }
            ,
            eQ.Kp = function(n) {
                return n.AJ.eR(n.PJ(2))
            }
            ,
            eQ.YV = function(n) {
                return n.AJ.so(n.PJ(4))
            }
            ,
            eQ.ip = function(n) {
                return n.AJ.PB(n.PJ(4))
            }
            ,
            eQ.mr = function(n) {
                var t = new L_;
                return t.Br = eQ.ip(n),
                t.XE = eQ.ip(n),
                t
            }
            ,
            eQ.CV = eQ.mr,
            eQ.gC = function(n) {
                return 0 != eQ.Jj(n)
            }
            ,
            eQ.Hu = function(n) {
                return n.AJ.qM(n.PJ(8))
            }
            ,
            eQ.q9 = function(n) {
                return n.Ny
            }
            ,
            eQ.Pa = function(n, t) {
                n.Ny += t
            }
            ,
            eQ.H_ = function(n) {
                if (!n)
                    throw new Error("PbAssert")
            }
            ,
            eQ.b1 = function(n, t, e) {
                return 0 == t && e == -1 ? IF(n) : IF(n.slice(t, t + e))
            }
            ,
            eQ.eb = function(t) {
                var e = new Array;
                if (!t)
                    return jh.Y_(e);
                for (var r = t.VO, o = 0; o < r.length; o++) {
                    var i = r[o];
                    n(e, i),
                    n(e, t.tc(i))
                }
                return jh.Y_(e)
            }
            ,
            eQ.wj = function(n) {
                if (!n)
                    return null;
                var e = new EW
                  , r = null
                  , o = new Array;
                for (o[0] = 0; o[0] < n.length; ) {
                    var i = t(n, o);
                    null == r ? r = i : (e.a9(r, i),
                    r = null)
                }
                return e
            }
        }
        function VI() {
            function n() {
                f.Tw = []
            }
            function t() {
                var n = f.Tw.length + 3;
                return n >= 65536 && (n += 2),
                n
            }
            function e(n) {
                var t = 2
                  , e = f.So();
                e >= 65536 && (t = 3),
                eQ.NP(n, t),
                eQ.REE(n, e);
                for (var r = f.Tw, o = 0; o < r.length; o++)
                    eQ.NP(n, r[o])
            }
            function r(n) {
                var t = eQ.q9(n)
                  , e = eQ.Jj(n)
                  , r = eQ.WfF(n, 1 == (1 & e))
                  , o = 2;
                r >= 65536 && (o += 2);
                var i;
                i = 0 == e ? eQ.Kp(n) : r - (1 + o),
                f.Tw.length = i;
                for (var u = 0; u < i; u++)
                    f.Tw[u] = eQ.Jj(n);
                var a = t + r - eQ.q9(n);
                eQ.Pa(n, a)
            }
            function o(n) {
                var t = n.Tw.length;
                f.Tw.length = t;
                for (var e = 0; e < t; e++)
                    f.Tw[e] = n.Tw[e]
            }
            function i() {
                return eQ.b1(f.Tw, 0, -1)
            }
            function u(n) {
                f.Tw = va(n)
            }
            var f = this;
            OZ(f, "So", t),
            OZ(f, "VS", e),
            OZ(f, "qN", r),
            OZ(f, "UE", o),
            OZ(f, "T3", i),
            OZ(f, "tg", u),
            f != fj && n.apply(f, arguments)
        }
        function dC() {
            function n() {
                f.Tw = []
            }
            function t() {
                var n = f.Tw.length + 3;
                return n >= 65536 && (n += 2),
                n
            }
            function e(n) {
                var t = 1
                  , e = f.So();
                e >= 65536 && (t = 3),
                eQ.NP(n, t),
                eQ.REE(n, e);
                for (var r = f.Tw, o = 0; o < r.length; o++)
                    eQ.NP(n, r[o])
            }
            function r(n) {
                var t = eQ.q9(n)
                  , e = eQ.Jj(n)
                  , r = eQ.WfF(n, 3 == e)
                  , o = 2;
                r >= 65536 && (o += 2);
                var i;
                i = 0 == e ? eQ.Kp(n) : r - (1 + o),
                f.Tw.length = i;
                for (var u = 0; u < i; u++)
                    f.Tw[u] = eQ.Jj(n);
                var a = t + r - eQ.q9(n);
                eQ.Pa(n, a)
            }
            function o(n) {
                var t = n.Tw.length;
                f.Tw.length = t;
                for (var e = 0; e < t; e++)
                    f.Tw[e] = n.Tw[e]
            }
            function i(n) {
                f.Tw = eQ.eb(n).UX()
            }
            function u() {
                return eQ.wj(f.Tw)
            }
            var f = this;
            OZ(f, "So", t),
            OZ(f, "VS", e),
            OZ(f, "qN", r),
            OZ(f, "UE", o),
            OZ(f, "eb", i),
            OZ(f, "wj", u),
            f != fj && n.apply(f, arguments)
        }
        function Ip(n) {
            var t = n.split(",");
            eQ.H_(t.length >= 2),
            this.Sj = t[0],
            this.pf = this.Sj + "It",
            this.fm = new Ar(t[1]),
            this.Dw = !1,
            this.K1 = !1,
            this.IN = !1,
            this.lF = void 0,
            "Kx" == this.Sj && (this.lF = eQ.Mr);
            for (var e = 2; e < t.length; e++) {
                var r = t[e];
                if ("e" != r)
                    if (0 != r.indexOf("d="))
                        if (0 != r.indexOf("o=")) {
                            if (0 != r.indexOf("c="))
                                throw new Error("Unrecognized descriptor field " + r);
                            this.IN = !0,
                            this.MC = r.substr(2)
                        } else {
                            var o = r.substr(2).split(":");
                            eQ.H_(2 == o.length),
                            this.K1 = !0,
                            this.R8 = o[0] + "It",
                            this.GT = o[1]
                        }
                    else if (this.lF = r.substr(2),
                    "Boolean" == this.fm.sY)
                        this.lF = Boolean(this.lF);
                    else if ("Double" == this.fm.sY)
                        this.lF = parseFloat(this.lF);
                    else if ("Integer" == this.fm.sY)
                        this.lF = parseInt(this.lF);
                    else {
                        if ("null" != this.lF)
                            throw new Error("PBUtil: unrecognized default value: " + this.lF);
                        this.lF = null
                    }
                else
                    this.Dw = !0
            }
            void 0 === this.lF && (this.lF = this.fm.lF),
            "Integer" == this.fm.sY && 8 == this.fm.mK && (this.fm.YZ ? this.lF = Q2.Ho(this.lF) : this.lF = L_.Ho(this.lF)),
            this.GR = function(n) {
                return (!this.K1 || 0 != (n[this.R8] & 1 << this.GT)) && (!this.IN || Ip.AY(this.MC, n))
            }
        }
        function Ar(n) {
            var t = n.substr(0, 1);
            switch (this.lF = null,
            t) {
            case "u":
            case "i":
                this.YZ = "u" == t,
                this.sY = "Integer",
                this.mK = parseInt(n.substr(1, 1));
                var e = null
                  , r = null;
                switch (n) {
                case "u1":
                    e = eQ.Jj,
                    r = eQ.NP;
                    break;
                case "u2":
                    e = eQ.Kp,
                    r = eQ.Rw;
                    break;
                case "u4":
                    e = eQ.ip,
                    r = eQ.jU;
                    break;
                case "u8":
                    e = eQ.CV,
                    r = eQ.Ch;
                    break;
                case "i1":
                    e = eQ.x3,
                    r = eQ.oY;
                    break;
                case "i2":
                    e = eQ.VA,
                    r = eQ._m;
                    break;
                case "i4":
                    e = eQ.YV,
                    r = eQ.HT;
                    break;
                case "i8":
                    e = eQ.mr,
                    r = eQ.Gx
                }
                this.L4 = e,
                this.mj = r,
                this.lF = 0;
                break;
            case "b":
                this.sY = "Boolean",
                this.mK = 1,
                this.L4 = eQ.gC,
                this.mj = eQ.MO,
                this.lF = !1;
                break;
            case "d":
                this.sY = "Double",
                this.mK = 8,
                this.L4 = eQ.Hu,
                this.mj = eQ.x1,
                this.lF = 0;
                break;
            case "s":
                this.sY = "String",
                this._V = "VI";
                break;
            case "m":
                this.sY = "Dictionary",
                this._V = "dC";
                break;
            case "c":
                this.sY = "Custom",
                this._V = n.substr(2);
                break;
            case "a":
                this.sY = "Array";
                var o = n.substr(2).split(":");
                this.zd = new Ar(o[0]),
                o.length > 1 ? this.hS = o[1] : this.hS = void 0;
                break;
            default:
                throw new Error("Unrecognized type " + n)
            }
            var i = function(n, t, e) {
                return void 0 === e ? n[t + "It"] : n[t][e]
            }
              , u = function(n, t, e, r) {
                void 0 === r ? t[e + "It"] = n : t[e][r] = n
            };
            "c" != t && "s" != t && "m" != t || (this.LJ = !1,
            this.nE = function(n, t, e) {
                var r = i(n, t, e);
                if (!r) {
                    var o = sHq(this._V);
                    r = new o,
                    u(r, n, t, e)
                }
                return r
            }
            ,
            this.So = function(n, t, e) {
                var r = this.nE(n, t, e);
                return r.So()
            }
            ,
            this.qN = function(n, t, e, r) {
                this.nE(t, e, r).qN(n)
            }
            ,
            this.VS = function(n, t, e, r) {
                i(t, e, r).VS(n)
            }
            ,
            this.UE = function(n, t, e, r) {
                this.nE(t, e, r).UE(i(n, e, r))
            }
            ),
            "u" != t && "i" != t && "d" != t && "b" != t || (this.LJ = !0,
            this.So = function(n, t, e) {
                return this.mK
            }
            ,
            this.qN = function(n, t, e, r) {
                u(this.L4(n), t, e, r)
            }
            ,
            this.VS = function(n, t, e, r) {
                this.mj(n, i(t, e, r))
            }
            ,
            this.UE = function(n, t, e, r) {
                u(i(n, e, r), t, e, r)
            }
            ),
            "a" == t && (this.LJ = !1,
            this.So = function(n, t, e) {
                var r = t + "rw";
                eQ.H_(void 0 === e);
                var o = 0
                  , i = n[r].length;
                void 0 === this.hS && (o += i >= 32768 ? 4 : 2);
                for (var u = 0; u < i; u++)
                    o += this.zd.So(n, r, u);
                return o
            }
            ,
            this.qN = function(n, t, e, r) {
                var o = e + "rw";
                eQ.H_(void 0 === r);
                var i;
                i = void 0 !== this.hS ? Ip.AY(this.hS, t) : eQ.jTz(n),
                t[e + "Gw"](i);
                for (var u = 0; u < i; u++)
                    this.zd.qN(n, t, o, u)
            }
            ,
            this.VS = function(n, t, e, r) {
                var o = e + "rw";
                eQ.H_(void 0 === r);
                var i = t[o].length;
                void 0 === this.hS && eQ.hvL(n, i);
                for (var u = 0; u < i; u++)
                    this.zd.VS(n, t, o, u)
            }
            ,
            this.UE = function(n, t, e, r) {
                var o = e + "rw";
                eQ.H_(void 0 === r),
                t[e + "Gw"](n[o].length);
                for (var i = t[o].length, u = 0; u < i; u++)
                    this.zd.UE(n, t, o, u)
            }
            )
        }
        function CandidateStream() {
            function n(n, t, e) {
                l.kQ = n,
                l.Su = t,
                l.w6 = e
            }
            function t() {
                l.kQ = null,
                l.Su = 0,
                l.w6 = null
            }
            function e() {
                return l._cW
            }
            function r(n) {
                l._cW = n
            }
            function o() {
                return l.mkQ
            }
            function i(n) {
                l.mkQ = n
            }
            function u() {
                return l.CE_
            }
            function f(n) {
                l.CE_ = n
            }
            function a() {
                return null != l.kQ && "string" != typeof l.kQ ? "CandidateStream.id is not a string" : null != l.Su && "number" != typeof l.Su ? "CandidateStream.bitrate is not an int" : null != l.w6 && "string" != typeof l.w6 ? "CandidateStream.resource is not a string" : null
            }
            function v(n) {
                if (null == n)
                    return null;
                var t = new CandidateStream("",(-1),null);
                return t.kQ = FFQ.b3k("id", n),
                t.Su = VW.z_(FFQ.Vf("bitrate", n)),
                t.w6 = FFQ.b3k("resource", n),
                t
            }
            var l = this;
            OZ(l, "wy", t),
            OZ(l, "Cleanup", t),
            l != fj && (l._cW = void 0),
            ED(l, "kQ", e),
            ED(l, "id", e),
            Wf(l, "kQ", r),
            Wf(l, "id", r),
            l != fj && (l.mkQ = void 0),
            ED(l, "Su", o),
            ED(l, "bitrate", o),
            Wf(l, "Su", i),
            Wf(l, "bitrate", i),
            l != fj && (l.CE_ = void 0),
            ED(l, "w6", u),
            ED(l, "resource", u),
            Wf(l, "w6", f),
            Wf(l, "resource", f),
            OZ(l, "OeK", a),
            OZ(l, "CheckValidity", a),
            dN(l, CandidateStream, "QKZ", v),
            dN(l, CandidateStream, "ConstructClone", v),
            l != fj && n.apply(l, arguments)
        }
        function kzq() {
            function n(n) {
                P.vtd = n
            }
            function t() {
                var n = new ConvivaContentInfo(P.REQ(),P.VNO(),P.YhP());
                return P.mv4() && (n.fi = P.inN()),
                n.N_ = P.adg(),
                n.cex = P.qaO(),
                n.Su = P.n4x(),
                n._fK = P.Iom(),
                n.w6 = P.RhM(),
                n.xQh = P.ArX(),
                n.o6d = P.v8h(),
                n.yuB = P.XJR(),
                n.lTq = P.BRI(),
                n.nFQ = P.rTo(),
                n.eQZ = P.eMb(),
                n.Jqo = P.ThB(),
                n.wL2 = P.EYb(),
                n.alT = P._Y8(),
                n.qMR = P.ieU(),
                n.hTs = P.c_7(),
                n.TMi = P.R9p(),
                n.oP9 = VW.z_(P.V5s()),
                n
            }
            function e() {
                return null != P.vtd ? P.vtd.REQ() : null
            }
            function r() {
                return null != P.vtd ? P.vtd.VNO() : null
            }
            function o() {
                return null != P.vtd ? P.vtd.YhP() : null
            }
            function i() {
                return null != P.vtd && P.vtd.mv4()
            }
            function u() {
                return null != P.vtd && P.vtd.inN()
            }
            function f() {
                return null != P.vtd ? P.vtd.adg() : null
            }
            function a() {
                return null != P.vtd && P.vtd.qaO()
            }
            function v() {
                return null != P.vtd ? P.vtd.n4x() : ConvivaContentInfo.RKy
            }
            function l() {
                return null != P.vtd ? P.vtd.Iom() : ConvivaContentInfo.jNU
            }
            function c() {
                return null != P.vtd ? P.vtd.RhM() : null
            }
            function C() {
                return null != P.vtd ? P.vtd.c_7() : null
            }
            function s() {
                return null != P.vtd ? P.vtd.ArX() : null
            }
            function O() {
                return null != P.vtd ? P.vtd.rTo() : null
            }
            function d() {
                return null != P.vtd ? P.vtd.eMb() : null
            }
            function S() {
                return null != P.vtd ? P.vtd.ThB() : null
            }
            function h() {
                return null != P.vtd ? P.vtd.EYb() : null
            }
            function m() {
                return null != P.vtd ? P.vtd._Y8() : null
            }
            function j() {
                return null != P.vtd ? P.vtd.v8h() : null
            }
            function E() {
                return null != P.vtd ? P.vtd.XJR() : null
            }
            function g() {
                return null != P.vtd ? P.vtd.BRI() : null
            }
            function I() {
                return null != P.vtd ? P.vtd.ieU() : null
            }
            function N() {
                return null != P.vtd ? P.vtd.R9p() : 0
            }
            function L() {
                return null != P.vtd ? P.vtd.V5s() : 0
            }
            var P = this;
            P != fj && (P.vtd = void 0),
            OZ(P, "o0d", t),
            OZ(P, "REQ", e),
            OZ(P, "VNO", r),
            OZ(P, "YhP", o),
            OZ(P, "mv4", i),
            OZ(P, "inN", u),
            OZ(P, "adg", f),
            OZ(P, "qaO", a),
            OZ(P, "n4x", v),
            OZ(P, "Iom", l),
            OZ(P, "RhM", c),
            OZ(P, "c_7", C),
            OZ(P, "ArX", s),
            OZ(P, "rTo", O),
            OZ(P, "eMb", d),
            OZ(P, "ThB", S),
            OZ(P, "EYb", h),
            OZ(P, "_Y8", m),
            OZ(P, "v8h", j),
            OZ(P, "XJR", E),
            OZ(P, "BRI", g),
            OZ(P, "ieU", I),
            OZ(P, "R9p", N),
            OZ(P, "V5s", L),
            P != fj && n.apply(P, arguments)
        }
        function ConvivaContentInfo() {
            function n() {
                return en.a4c
            }
            function t(n) {
                en.a4c = n
            }
            function e() {
                return en.i6m
            }
            function r(n) {
                en.i6m = n
            }
            function o() {
                return oL.uM(en.rT7)
            }
            function i(n) {
                en.rT7 = oL.PX(n)
            }
            function u() {
                return oL.R5(en.ta)
            }
            function f(n) {
                en.ta = oL.js(n)
            }
            function a() {
                return en.oLs
            }
            function v(n) {
                en.oLs = n
            }
            function l() {
                return oL.uM(en.wwE)
            }
            function c(n) {
                en.wwE = oL.PX(n)
            }
            function C() {
                return en.LUA
            }
            function s(n) {
                en.LUA = n
            }
            function O() {
                return en.wUp
            }
            function d(n) {
                en.wUp = n
            }
            function S() {
                return en.D3q
            }
            function h(n) {
                en.D3q = n
            }
            function m() {
                return en.Db8
            }
            function j(n) {
                en.Db8 = n
            }
            function E() {
                return en.TSp
            }
            function g(n) {
                en.TSp = n
            }
            function I() {
                return en.IFU
            }
            function N(n) {
                en.IFU = n
            }
            function L() {
                return en.XTh
            }
            function P(n) {
                en.XTh = n
            }
            function w() {
                return en.m6e
            }
            function y(n) {
                en.m6e = n
            }
            function p() {
                return en.Ndb
            }
            function D(n) {
                en.Ndb = n
            }
            function V() {
                return en.J24
            }
            function T(n) {
                null != n && (en.U8U.OC(n) ? en.J24 = n : (ct.M3x("deviceType is not one of the recognized device types enumerated in ConvivaContentInfo.", "Actual value: " + en.lTq + " . Set it to the default value PC."),
                en.J24 = ConvivaContentInfo.mMX))
            }
            function M() {
                return en.tUj
            }
            function _(n) {
                en.tUj = n
            }
            function A() {
                return en.t8r
            }
            function Z(n) {
                en.t8r = n
            }
            function U() {
                return en.fGP
            }
            function H(n) {
                en.fGP = n
            }
            function b() {
                return en.r_o
            }
            function B(n) {
                "true" === n && (n = !0),
                "false" === n && (n = !1),
                n !== !0 && n !== !1 && (ct.Error("Invalid value for ConvivaContentInfo.isLive, expected boolean. Defaulting to false."),
                n = !1),
                en.r_o = n
            }
            function F() {
                return en.go
            }
            function x(n) {
                en.go = n
            }
            function R() {
                return en.FCX
            }
            function Y(n) {
                en.FCX = n
            }
            function Q() {
                return en.qAd
            }
            function W(n) {
                en.qAd = n
            }
            function G(n, t, e) {
                en.SR4(),
                en.K_y = !1,
                en.CXF = n,
                en.hA = e,
                null == en.rT7 && (en.rT7 = new EW),
                en.Sc = t,
                en.fi = !1,
                null == en.ta && (en.ta = new Yw),
                en.wwE = new EW,
                en.fGP = 0,
                en.r_o = !1,
                en.FCX = 0,
                en.qAd = 0
            }
            function q(n) {
                var t = new ConvivaContentInfo(n,null,null);
                return t
            }
            function K() {
                en.FCX = 0,
                en.qAd = 0
            }
            function k() {
                en.CXF = ConvivaContentInfo._C(en.CXF, ConvivaContentInfo.prP, !0, "assetName"),
                en.nFQ = ConvivaContentInfo._C(en.nFQ, null, !1, "ovppName"),
                en.eQZ = ConvivaContentInfo._C(en.eQZ, null, !1, "frameworkName"),
                en.Jqo = ConvivaContentInfo._C(en.Jqo, null, !1, "frameworkVersion"),
                en.wL2 = ConvivaContentInfo._C(en.wL2, null, !1, "pluginName"),
                en.alT = ConvivaContentInfo._C(en.alT, null, !1, "pluginVersion"),
                en.o6d = ConvivaContentInfo._C(en.o6d, null, !1, "viewerId"),
                en.yuB = ConvivaContentInfo._C(en.yuB, null, !1, "deviceId"),
                en.lTq = ConvivaContentInfo._C(en.lTq, null, !1, "deviceType"),
                en.qMR = ConvivaContentInfo._C(en.qMR, null, !1, "playerName"),
                null == en.rT7 && (en.rT7 = new EW);
                for (var n = new Yw, t = en.rT7.VO, e = 0; e < t.length; e++) {
                    var r = t[e];
                    n.Yb(r)
                }
                for (var o = n.YC, i = 0; i < o.length; i++) {
                    var u = o[i]
                      , f = ConvivaContentInfo._C(u, "null", !1, "tag name")
                      , a = ConvivaContentInfo._C(en.rT7.tc(u), "null", !1, "value for tag '" + oL.fg(u) + "'");
                    f != u && (en.rT7.gS(u),
                    en.rT7.a9(f, a)),
                    a != en.rT7.tc(f) && en.rT7.a9(f, a)
                }
            }
            function X(n, t, e, r) {
                if (null == n && null == t)
                    return null;
                null == n && (O9.Ep("ConvivaContentInfo: " + r + " is null", !1),
                n = t);
                var o = oL.fg(n);
                return o = oL.xO(o),
                e && o == O9.Mul || o.length >= 3 && "c3." == oL.n0(o, 0, 3) && (O9.Ep("ConvivaContentInfo: " + r + " is reserved IGNORE:" + o, !1),
                o = "_" + o),
                o.length > ConvivaContentInfo.L1 && (O9.Ep("ConvivaContentInfo: " + r + " is too long IGNORE:" + o, !1),
                o = oL.n0(o, 0, ConvivaContentInfo.L1)),
                o
            }
            function z() {
                en.BYE = new Yw,
                en.BYE.Yb(ConvivaContentInfo.r9f),
                en.BYE.Yb(ConvivaContentInfo.GGN),
                en.BYE.Yb(ConvivaContentInfo.fGO),
                en.BYE.Yb(ConvivaContentInfo.mYS),
                en.BYE.Yb(ConvivaContentInfo.BD8),
                en.BYE.Yb(ConvivaContentInfo.jkP),
                en.BYE.Yb(ConvivaContentInfo.OU6),
                en.BYE.Yb(ConvivaContentInfo.LZN),
                en.BYE.Yb(ConvivaContentInfo.Qye),
                en.BYE.Yb(ConvivaContentInfo.GDQ),
                en.BYE.Yb(ConvivaContentInfo.BRL),
                en.BYE.Yb(ConvivaContentInfo.jbi),
                en.BYE.Yb(ConvivaContentInfo.y1x),
                en.BYE.Yb(ConvivaContentInfo.rNL),
                en.BYE.Yb(ConvivaContentInfo.CVv),
                en.BYE.Yb(ConvivaContentInfo.mih),
                en.BYE.Yb(ConvivaContentInfo.LBr),
                en.BYE.Yb(ConvivaContentInfo.J01),
                en.BYE.Yb(ConvivaContentInfo.J6r),
                en.BYE.Yb(ConvivaContentInfo.eOQ),
                en.BYE.Yb(ConvivaContentInfo.mB6),
                en.BYE.Yb(ConvivaContentInfo.ZGk),
                en.BYE.Yb(ConvivaContentInfo.RH2),
                en.BYE.Yb(ConvivaContentInfo.pwl),
                en.BYE.Yb(ConvivaContentInfo.MHE),
                en.BYE.Yb(ConvivaContentInfo.vk7),
                en.BYE.Yb(ConvivaContentInfo.MuN),
                en.BYE.Yb(ConvivaContentInfo.O5u),
                en.BYE.Yb(ConvivaContentInfo.CRA),
                en.BYE.Yb(ConvivaContentInfo.OjD),
                en.BYE.Yb(ConvivaContentInfo.jNU),
                en.U8U = new Yw,
                en.U8U.Yb(ConvivaContentInfo.fSH),
                en.U8U.Yb(ConvivaContentInfo.wdm),
                en.U8U.Yb(ConvivaContentInfo.mMX),
                en.U8U.Yb(ConvivaContentInfo.G1s)
            }
            function J() {
                var n = "{";
                return n += "\n  useStrictChecking=" + oL.fg(en.a4c),
                n += '\n  assetName="' + en.i6m + '"',
                n += "\n  bitrate=" + oL.fg(en.fGP),
                n += "\n  isLive=" + oL.fg(en.r_o),
                n += "\n  monitoringOptions=" + Gnw.jMw(en.wwE),
                n += "\n  resourceSelection=" + oL.fg(en.oLs),
                n += "\n  candidateResources=" + Gnw.hJD(en.ta),
                n += "\n  cdnName=" + (null != en._fK ? '"' + en._fK + '"' : "null"),
                n += "\n  resource=" + (null != en.w6 ? '"' + en.w6 + '"' : "null"),
                n += "\n  resourceStateOverride=" + (null != en.hTs ? '"' + en.hTs + '"' : "null"),
                n += "\n  ovppName=" + (null != en.nFQ ? '"' + en.nFQ + '"' : "null"),
                n += "\n  frameworkName=" + (null != en.eQZ ? '"' + en.eQZ + '"' : "null"),
                n += "\n  frameworkVersion=" + (null != en.Jqo ? '"' + en.Jqo + '"' : "null"),
                n += "\n  pluginName=" + (null != en.wL2 ? '"' + en.wL2 + '"' : "null"),
                n += "\n  pluginVersion=" + (null != en.alT ? '"' + en.alT + '"' : "null"),
                n += "\n  streamUrl=" + (null != en.xQh ? '"' + en.xQh + '"' : "null"),
                n += "\n  viewerId=" + (null != en.o6d ? '"' + en.o6d + '"' : "null"),
                n += "\n  deviceId=" + (null != en.yuB ? '"' + en.yuB + '"' : "null"),
                n += "\n  deviceType=" + (null != en.lTq ? '"' + en.lTq + '"' : "null"),
                n += "\n  playerName=" + (null != en.qMR ? '"' + en.qMR + '"' : "null"),
                n += "\n  groupId=" + oL.fg(en.FCX),
                n += "\n  groupType=" + oL.fg(en.qAd),
                n += "\n  tags=" + Gnw.jMw(en.rT7)
            }
            function $(n) {
                return n.AV(!1),
                n
            }
            function nn(n) {
                ct.qF("ConvivaContentInfo[" + n + "]", "user input=" + en.c_())
            }
            function tn(n, t, e) {
                en.K_y || (n = t),
                null == en.CXF && n("assetName is null.", null),
                en.CXF == ConvivaContentInfo.prP && n("assetName is null.", null),
                null == en.lTq || en.U8U.OC(en.lTq) || n("deviceType is not one of the recognized device types enumerated in ConvivaContentInfo.", "Actual value: " + en.lTq + " ."),
                e && (null != en.hTs ? t("resourceStateOverride is in use.  CDN-based metrics may be inaccurate.", null) : null == en._fK || en.BYE.OC(en._fK) || (t("cdnName is not one of the recognized CDN names enumerated in ConvivaContentInfo.", "Actual value: " + en._fK + "."),
                en._fK = ConvivaContentInfo.jNU),
                null == en.xQh && n("streamUrl is null.", null),
                en.Su < 0 && n("bitrate is negative.", "Actual value: " + en.Su + " ."))
            }
            var en = this;
            en == fj && (ConvivaContentInfo.r9f = "AKAMAI"),
            en == fj && (ConvivaContentInfo.GGN = "AMAZON"),
            en == fj && (ConvivaContentInfo.fGO = "ATT"),
            en == fj && (ConvivaContentInfo.mYS = "BITGRAVITY"),
            en == fj && (ConvivaContentInfo.BD8 = "BT"),
            en == fj && (ConvivaContentInfo.jkP = "CDNETWORKS"),
            en == fj && (ConvivaContentInfo.J01 = "CDNVIDEO"),
            en == fj && (ConvivaContentInfo.OU6 = "CHINACACHE"),
            en == fj && (ConvivaContentInfo.RH2 = "COMCAST"),
            en == fj && (ConvivaContentInfo.LZN = "EDGECAST"),
            en == fj && (ConvivaContentInfo.Qye = "HIGHWINDS"),
            en == fj && (ConvivaContentInfo.GDQ = "INTERNAP"),
            en == fj && (ConvivaContentInfo.mB6 = "IPONLY"),
            en == fj && (ConvivaContentInfo.BRL = "LEVEL3"),
            en == fj && (ConvivaContentInfo.jbi = "LIMELIGHT"),
            en == fj && (ConvivaContentInfo.LBr = "MICROSOFT"),
            en == fj && (ConvivaContentInfo.eOQ = "NGENIX"),
            en == fj && (ConvivaContentInfo.pwl = "NICE"),
            en == fj && (ConvivaContentInfo.y1x = "OCTOSHAPE"),
            en == fj && (ConvivaContentInfo.J6r = "QBRICK"),
            en == fj && (ConvivaContentInfo.rNL = "SWARMCAST"),
            en == fj && (ConvivaContentInfo.mih = "TELEFONICA"),
            en == fj && (ConvivaContentInfo.MHE = "TELENOR"),
            en == fj && (ConvivaContentInfo.CVv = "VELOCIX"),
            en == fj && (ConvivaContentInfo.vk7 = "TALKTALK"),
            en == fj && (ConvivaContentInfo.MuN = "FASTLY"),
            en == fj && (ConvivaContentInfo.O5u = "TELIA"),
            en == fj && (ConvivaContentInfo.CRA = "CHINANETCENTER"),
            en == fj && (ConvivaContentInfo.OjD = "MIRRORIMAGE"),
            en == fj && (ConvivaContentInfo.ZGk = "INHOUSE"),
            en == fj && (ConvivaContentInfo.jNU = "OTHER"),
            en == fj && (ConvivaContentInfo._jw = "Brightcove"),
            en == fj && (ConvivaContentInfo.RAm = "Kaltura"),
            en == fj && (ConvivaContentInfo.Pwz = "Ooyala"),
            en == fj && (ConvivaContentInfo.x4Q = "thePlatform"),
            en == fj && (ConvivaContentInfo.Ot6 = "Brightcove"),
            en == fj && (ConvivaContentInfo.ycR = "Kaltura"),
            en == fj && (ConvivaContentInfo.jPN = "Ooyala"),
            en == fj && (ConvivaContentInfo.fMQ = "OSMF"),
            en == fj && (ConvivaContentInfo.alw = "thePlatform"),
            en == fj && (ConvivaContentInfo.fSH = "Console"),
            en == fj && (ConvivaContentInfo.wdm = "Mobile"),
            en == fj && (ConvivaContentInfo.mMX = "PC"),
            en == fj && (ConvivaContentInfo.G1s = "Settop"),
            en == fj && (ConvivaContentInfo._6t = "no_resource"),
            en == fj && (ConvivaContentInfo.Ld2 = "ConvivaKalturaPlugin"),
            en == fj && (ConvivaContentInfo.uf3 = "nominalBitrateOverride"),
            en != fj && (en.a4c = !1),
            ED(en, "K_y", n),
            ED(en, "useStrictChecking", n),
            Wf(en, "K_y", t),
            Wf(en, "useStrictChecking", t),
            en != fj && (en.i6m = null),
            ED(en, "CXF", e),
            ED(en, "assetName", e),
            Wf(en, "CXF", r),
            Wf(en, "assetName", r),
            en != fj && (en.rT7 = void 0),
            ED(en, "hA", o),
            ED(en, "tags", o),
            Wf(en, "hA", i),
            Wf(en, "tags", i),
            en != fj && (en.ta = void 0),
            ED(en, "Sc", u),
            ED(en, "candidateResources", u),
            Wf(en, "Sc", f),
            Wf(en, "candidateResources", f),
            en != fj && (en.oLs = !1),
            ED(en, "fi", a),
            ED(en, "resourceSelection", a),
            Wf(en, "fi", v),
            Wf(en, "resourceSelection", v),
            en != fj && (en.wwE = void 0),
            ED(en, "N_", l),
            ED(en, "monitoringOptions", l),
            Wf(en, "N_", c),
            Wf(en, "monitoringOptions", c),
            en != fj && (en.LUA = null),
            ED(en, "_fK", C),
            ED(en, "cdnName", C),
            Wf(en, "_fK", s),
            Wf(en, "cdnName", s),
            en != fj && (en.BYE = null),
            en != fj && (en.wUp = null),
            ED(en, "hTs", O),
            ED(en, "resourceStateOverride", O),
            Wf(en, "hTs", d),
            Wf(en, "resourceStateOverride", d),
            en != fj && (en.D3q = null),
            ED(en, "nFQ", S),
            ED(en, "ovppName", S),
            Wf(en, "nFQ", h),
            Wf(en, "ovppName", h),
            en != fj && (en.Db8 = null),
            ED(en, "eQZ", m),
            ED(en, "frameworkName", m),
            Wf(en, "eQZ", j),
            Wf(en, "frameworkName", j),
            en != fj && (en.TSp = null),
            ED(en, "Jqo", E),
            ED(en, "frameworkVersion", E),
            Wf(en, "Jqo", g),
            Wf(en, "frameworkVersion", g),
            en != fj && (en.IFU = null),
            ED(en, "wL2", I),
            ED(en, "pluginName", I),
            Wf(en, "wL2", N),
            Wf(en, "pluginName", N),
            en != fj && (en.XTh = null),
            ED(en, "alT", L),
            ED(en, "pluginVersion", L),
            Wf(en, "alT", P),
            Wf(en, "pluginVersion", P),
            en != fj && (en.m6e = null),
            ED(en, "o6d", w),
            ED(en, "viewerId", w),
            Wf(en, "o6d", y),
            Wf(en, "viewerId", y),
            en != fj && (en.Ndb = null),
            ED(en, "yuB", p),
            ED(en, "deviceId", p),
            Wf(en, "yuB", D),
            Wf(en, "deviceId", D),
            en != fj && (en.J24 = null),
            ED(en, "lTq", V),
            ED(en, "deviceType", V),
            Wf(en, "lTq", T),
            Wf(en, "deviceType", T),
            en != fj && (en.U8U = null),
            en != fj && (en.tUj = null),
            ED(en, "qMR", M),
            ED(en, "playerName", M),
            Wf(en, "qMR", _),
            Wf(en, "playerName", _),
            en != fj && (en.t8r = null),
            ED(en, "xQh", A),
            ED(en, "streamUrl", A),
            Wf(en, "xQh", Z),
            Wf(en, "streamUrl", Z),
            en == fj && (ConvivaContentInfo.RKy = 0),
            en != fj && (en.fGP = ConvivaContentInfo.RKy),
            ED(en, "Su", U),
            ED(en, "bitrate", U),
            Wf(en, "Su", H),
            Wf(en, "bitrate", H),
            en != fj && (en.r_o = !1),
            ED(en, "cex", b),
            ED(en, "isLive", b),
            Wf(en, "cex", B),
            Wf(en, "isLive", B),
            en != fj && (en.go = null),
            ED(en, "w6", F),
            ED(en, "resource", F),
            Wf(en, "w6", x),
            Wf(en, "resource", x),
            en != fj && (en.FCX = 0),
            ED(en, "TMi", R),
            ED(en, "groupId", R),
            Wf(en, "TMi", Y),
            Wf(en, "groupId", Y),
            en != fj && (en.qAd = 0),
            ED(en, "oP9", Q),
            ED(en, "groupType", Q),
            Wf(en, "oP9", W),
            Wf(en, "groupType", W),
            en == fj && (ConvivaContentInfo.L1 = 128),
            en == fj && (ConvivaContentInfo.prP = "Null title"),
            dN(en, ConvivaContentInfo, "XxO", q),
            dN(en, ConvivaContentInfo, "createInfoForLightSession", q),
            OZ(en, "ox", K),
            OZ(en, "cleanup", K),
            OZ(en, "AV", k),
            OZ(en, "sanitizeData", k),
            dN(en, ConvivaContentInfo, "_C", X),
            dN(en, ConvivaContentInfo, "sanitizeString", X),
            LK(en, "SR4", z),
            LK(en, "c_", J),
            dN(en, ConvivaContentInfo, "o1", $),
            dN(en, ConvivaContentInfo, "clone", $),
            OZ(en, "obv", nn),
            OZ(en, "printContentInfo", nn),
            OZ(en, "XUT", tn),
            OZ(en, "checkValidity", tn),
            dN(en, ConvivaContentInfo, "CDN_NAME_AKAMAI", ConvivaContentInfo.r9f),
            dN(en, ConvivaContentInfo, "CDN_NAME_AMAZON", ConvivaContentInfo.GGN),
            dN(en, ConvivaContentInfo, "CDN_NAME_ATT", ConvivaContentInfo.fGO),
            dN(en, ConvivaContentInfo, "CDN_NAME_BITGRAVITY", ConvivaContentInfo.mYS),
            dN(en, ConvivaContentInfo, "CDN_NAME_BT", ConvivaContentInfo.BD8),
            dN(en, ConvivaContentInfo, "CDN_NAME_CDNETWORKS", ConvivaContentInfo.jkP),
            dN(en, ConvivaContentInfo, "CDN_NAME_CDNVIDEO", ConvivaContentInfo.J01),
            dN(en, ConvivaContentInfo, "CDN_NAME_CHINACACHE", ConvivaContentInfo.OU6),
            dN(en, ConvivaContentInfo, "CDN_NAME_CHINANETCENTER", ConvivaContentInfo.CRA),
            dN(en, ConvivaContentInfo, "CDN_NAME_COMCAST", ConvivaContentInfo.RH2),
            dN(en, ConvivaContentInfo, "CDN_NAME_EDGECAST", ConvivaContentInfo.LZN),
            dN(en, ConvivaContentInfo, "CDN_NAME_FASTLY", ConvivaContentInfo.MuN),
            dN(en, ConvivaContentInfo, "CDN_NAME_HIGHWINDS", ConvivaContentInfo.Qye),
            dN(en, ConvivaContentInfo, "CDN_NAME_INHOUSE", ConvivaContentInfo.ZGk),
            dN(en, ConvivaContentInfo, "CDN_NAME_INTERNAP", ConvivaContentInfo.GDQ),
            dN(en, ConvivaContentInfo, "CDN_NAME_IPONLY", ConvivaContentInfo.mB6),
            dN(en, ConvivaContentInfo, "CDN_NAME_LEVEL3", ConvivaContentInfo.BRL),
            dN(en, ConvivaContentInfo, "CDN_NAME_LIMELIGHT", ConvivaContentInfo.jbi),
            dN(en, ConvivaContentInfo, "CDN_NAME_MICROSOFT", ConvivaContentInfo.LBr),
            dN(en, ConvivaContentInfo, "CDN_NAME_MIRRORIMAGE", ConvivaContentInfo.OjD),
            dN(en, ConvivaContentInfo, "CDN_NAME_NGENIX", ConvivaContentInfo.eOQ),
            dN(en, ConvivaContentInfo, "CDN_NAME_NICE", ConvivaContentInfo.pwl),
            dN(en, ConvivaContentInfo, "CDN_NAME_OCTOSHAPE", ConvivaContentInfo.y1x),
            dN(en, ConvivaContentInfo, "CDN_NAME_OTHER", ConvivaContentInfo.jNU),
            dN(en, ConvivaContentInfo, "CDN_NAME_QBRICK", ConvivaContentInfo.J6r),
            dN(en, ConvivaContentInfo, "CDN_NAME_SWARMCAST", ConvivaContentInfo.rNL),
            dN(en, ConvivaContentInfo, "CDN_NAME_TALKTALK", ConvivaContentInfo.vk7),
            dN(en, ConvivaContentInfo, "CDN_NAME_TELEFONICA", ConvivaContentInfo.mih),
            dN(en, ConvivaContentInfo, "CDN_NAME_TELENOR", ConvivaContentInfo.MHE),
            dN(en, ConvivaContentInfo, "CDN_NAME_TELIA", ConvivaContentInfo.O5u),
            dN(en, ConvivaContentInfo, "CDN_NAME_VELOCIX", ConvivaContentInfo.CVv),
            dN(en, ConvivaContentInfo, "DEFAULT_ASSET_NAME", ConvivaContentInfo.prP),
            dN(en, ConvivaContentInfo, "DEFAULT_BITRATE_VAL", ConvivaContentInfo.RKy),
            dN(en, ConvivaContentInfo, "DEVICE_TYPE_CONSOLE", ConvivaContentInfo.fSH),
            dN(en, ConvivaContentInfo, "DEVICE_TYPE_MOBILE", ConvivaContentInfo.wdm),
            dN(en, ConvivaContentInfo, "DEVICE_TYPE_PC", ConvivaContentInfo.mMX),
            dN(en, ConvivaContentInfo, "DEVICE_TYPE_SET_TOP_BOX", ConvivaContentInfo.G1s),
            dN(en, ConvivaContentInfo, "FRAMEWORK_NAME_BRIGHTCOVE", ConvivaContentInfo.Ot6),
            dN(en, ConvivaContentInfo, "FRAMEWORK_NAME_KALTURA", ConvivaContentInfo.ycR),
            dN(en, ConvivaContentInfo, "FRAMEWORK_NAME_OOYALA", ConvivaContentInfo.jPN),
            dN(en, ConvivaContentInfo, "FRAMEWORK_NAME_OSMF", ConvivaContentInfo.fMQ),
            dN(en, ConvivaContentInfo, "FRAMEWORK_NAME_THE_PLATFORM", ConvivaContentInfo.alw),
            dN(en, ConvivaContentInfo, "MAX_PARAMETER_LENGTH", ConvivaContentInfo.L1),
            dN(en, ConvivaContentInfo, "MO_KEY_NOMINAL_BITRATE_OVERRIDE", ConvivaContentInfo.uf3),
            dN(en, ConvivaContentInfo, "NO_RESOURCE", ConvivaContentInfo._6t),
            dN(en, ConvivaContentInfo, "OVPP_NAME_BRIGHTCOVE", ConvivaContentInfo._jw),
            dN(en, ConvivaContentInfo, "OVPP_NAME_KALTURA", ConvivaContentInfo.RAm),
            dN(en, ConvivaContentInfo, "OVPP_NAME_OOYALA", ConvivaContentInfo.Pwz),
            dN(en, ConvivaContentInfo, "OVPP_NAME_THE_PLATFORM", ConvivaContentInfo.x4Q),
            dN(en, ConvivaContentInfo, "PLUGIN_NAME_KALTURA", ConvivaContentInfo.Ld2),
            en != fj && G.apply(en, arguments)
        }
        function ConvivaNotification() {
            function n(n, t, e) {
                i.kF = new EW,
                i.kF.a9("code", n),
                i.kF.a9("message", t),
                i.kF.a9("objectId", e)
            }
            function t() {
                return VW.z_(i.kF.tc("code"))
            }
            function e() {
                return i.kF.tc("message")
            }
            function r() {
                return i.kF.tc("objectId")
            }
            function o() {
                var n = "ConvivaNotification "
                  , t = oL.fg(i.iv);
                return null != t && (n = n + "(" + t + "): "),
                null != i.message && (n += i.message),
                null != i.jz && (n = n + " (for objectId " + i.jz + ")"),
                n
            }
            var i = this;
            i == fj && (ConvivaNotification.g9 = 0),
            i == fj && (ConvivaNotification.rg = 1),
            i == fj && (ConvivaNotification.cf = 2),
            i == fj && (ConvivaNotification.bQ = 10),
            i == fj && (ConvivaNotification.vU = 11),
            i == fj && (ConvivaNotification.HBx = 20),
            i == fj && (ConvivaNotification.Po = 30),
            i != fj && (i.kF = void 0),
            ED(i, "iv", t),
            ED(i, "code", t),
            ED(i, "message", e),
            ED(i, "message", e),
            ED(i, "jz", r),
            ED(i, "objectId", r),
            OZ(i, "toString", o),
            OZ(i, "toString", o),
            dN(i, ConvivaNotification, "ERROR_ARGUMENT", ConvivaNotification.rg),
            dN(i, ConvivaNotification, "ERROR_INIT_TIMESOUT", ConvivaNotification.HBx),
            dN(i, ConvivaNotification, "ERROR_LIVEPASS_NOT_READY", ConvivaNotification.cf),
            dN(i, ConvivaNotification, "ERROR_LOAD_CONFIGURATION", ConvivaNotification.bQ),
            dN(i, ConvivaNotification, "ERROR_LOAD_MODULE", ConvivaNotification.vU),
            dN(i, ConvivaNotification, "ERROR_METRICS_QUOTA_EXCEEDED", ConvivaNotification.Po),
            dN(i, ConvivaNotification, "SUCCESS_LIVEPASS_READY", ConvivaNotification.g9),
            i != fj && n.apply(i, arguments)
        }
        function ConvivaStreamerProxy() {
            function n() {}
            function t() {
                null != $.Mqe && $.Mqe.m3()
            }
            function e() {
                return 0
            }
            function r() {
                return -1
            }
            function o() {
                return !0
            }
            function i() {
                return -1
            }
            function u() {
                return -1
            }
            function f() {
                return -1
            }
            function a() {
                return -1
            }
            function v(n) {}
            function l() {
                return !1
            }
            function c() {
                return -1
            }
            function C() {
                return -1
            }
            function s() {
                return -1
            }
            function O() {
                return -1
            }
            function d() {
                return -1
            }
            function S(n) {
                return -1
            }
            function h() {
                return null
            }
            function m() {
                return ConvivaStreamerProxy.ObP
            }
            function j() {
                return -1
            }
            function E(n) {}
            function g(n) {}
            function I() {
                return ConvivaStreamerProxy.aM_
            }
            function N(n) {
                if (null != n) {
                    var t = $.Mqe
                      , e = new Yw;
                    if (e.Yb(n),
                    $.Mqe = e,
                    null != $.Mqe) {
                        $.BW7 && n(ConvivaStreamerProxy.U6H, null),
                        $.nDN(StreamInfo.qme, ConvivaStreamerProxy.pmJ),
                        $.nDN(StreamInfo.ct3, ConvivaStreamerProxy.pmJ);
                        var r = $.UQZ;
                        $.UQZ = new StreamInfo((-1),ConvivaContentInfo.jNU,ConvivaContentInfo._6t,(-1),(-1),(-1)),
                        $.cQi(r);
                        var o = $.OjE;
                        $.OjE = ConvivaStreamerProxy.dHj,
                        $.eco(o);
                        var i = $.fDr;
                        $.fDr = null,
                        $.Pmd(i);
                        for (var u = $.FvG.YC, f = 0; f < u.length; f++) {
                            var a = u[f];
                            $.rpy(a)
                        }
                        var v = $.Hfe;
                        $.Hfe = null,
                        $.UCH(v);
                        var l = $.fx3;
                        $.fx3 = null,
                        $.oed(l);
                        var c = $.BaK
                          , C = $.BaK;
                        $.BaK = -1,
                        $.H7g = -1,
                        $.fJw(c, C)
                    }
                    t.Yb(n),
                    $.Mqe = t
                }
            }
            function L() {
                return $.fx3
            }
            function P() {
                return $.OjE
            }
            function w() {
                return $.UQZ.M9
            }
            function y() {
                return $.UQZ._fK
            }
            function p() {
                return $.UQZ.w6
            }
            function D() {
                return $.UQZ
            }
            function V() {
                return null
            }
            function T() {
                return $.sOE
            }
            function M() {
                return $.fDr
            }
            function _() {
                return $.BaK
            }
            function A() {
                return $.H7g
            }
            function Z() {
                return null
            }
            function U() {
                return -1
            }
            function H(n, t) {
                var e = new Yw;
                e.Yb(n),
                e.Yb(t);
                for (var r = $.Mqe.YC, o = 0; o < r.length; o++) {
                    var i = r[o];
                    $.j9V(i, ConvivaStreamerProxy.MV_, e)
                }
            }
            function b(n) {
                if (n.M9 <= -2 && (n.M9 = $.UQZ.M9),
                null == n._fK && (n._fK = $.UQZ._fK),
                null == n.w6 && (n.w6 = $.UQZ.w6),
                !$.UQZ.j5q(n))
                    for (var t = $.Mqe.YC, e = 0; e < t.length; e++) {
                        var r = t[e];
                        $.j9V(r, ConvivaStreamerProxy.xUm, n)
                    }
                $.UQZ = n
            }
            function B(n) {
                if ($.sOE = n,
                null != $.Mqe && $.Mqe.Bt > 0)
                    for (var t = $.Mqe.YC, e = 0; e < t.length; e++) {
                        var r = t[e];
                        $.j9V(r, ConvivaStreamerProxy.vHz, n)
                    }
                else
                    $.FvG.Yb(n)
            }
            function F(n) {
                if ($.fDr = n,
                null != n)
                    for (var t = $.Mqe.YC, e = 0; e < t.length; e++) {
                        var r = t[e];
                        $.j9V(r, ConvivaStreamerProxy.GMW, n)
                    }
            }
            function x(n) {
                for (var t = $.Mqe.YC, e = 0; e < t.length; e++) {
                    var r = t[e];
                    $.j9V(r, ConvivaStreamerProxy.x1x, n)
                }
            }
            function R(n) {
                for (var t = $.Mqe.YC, e = 0; e < t.length; e++) {
                    var r = t[e];
                    $.j9V(r, ConvivaStreamerProxy.x1x, "ERROR:" + n)
                }
            }
            function Y() {
                return null
            }
            function Q(n) {
                if ($.fx3 = n,
                null != n)
                    for (var t = $.Mqe.YC, e = 0; e < t.length; e++) {
                        var r = t[e];
                        $.j9V(r, ConvivaStreamerProxy.kTl, n)
                    }
            }
            function W(n) {
                if (n != $.OjE)
                    for (var t = $.Mqe.YC, e = 0; e < t.length; e++) {
                        var r = t[e];
                        $.j9V(r, ConvivaStreamerProxy.yeD, n)
                    }
                $.OjE = n
            }
            function G(n) {
                var t = new StreamInfo(n,null,null,(-1),(-1),(-1));
                $.cQi(t)
            }
            function q(n) {
                var t = new StreamInfo((-2),n,null,(-1),(-1),(-1));
                $.cQi(t)
            }
            function K(n) {
                var t = new StreamInfo((-2),null,n,(-1),(-1),(-1));
                $.cQi(t)
            }
            function k(n, t) {
                if (n != -1 && t != -1) {
                    $.BaK = n,
                    $.H7g = t;
                    var e = new Yw;
                    e.Yb(n),
                    e.Yb(t);
                    for (var r = $.Mqe.YC, o = 0; o < r.length; o++) {
                        var i = r[o];
                        $.j9V(i, ConvivaStreamerProxy.zJ2, e)
                    }
                }
            }
            function X(n) {
                if ($.Hfe = n,
                null != n)
                    for (var t = $.Mqe.YC, e = 0; e < t.length; e++) {
                        var r = t[e];
                        $.j9V(r, ConvivaStreamerProxy.pOB, n)
                    }
            }
            function z() {
                if (!$.BW7) {
                    $.BW7 = !0;
                    for (var n = $.Mqe.YC, t = 0; t < n.length; t++) {
                        var e = n[t];
                        $.j9V(e, ConvivaStreamerProxy.U6H, null)
                    }
                }
            }
            function J(n, t, e) {
                try {
                    n(t, e)
                } catch (r) {
                    n(ConvivaStreamerProxy.x1x, "ConvivaStreamerProxy : uncaught exception " + r)
                }
            }
            var $ = this;
            $ != fj && ($.Mqe = new Yw),
            $ != fj && ($.UQZ = new StreamInfo((-1),ConvivaContentInfo.jNU,ConvivaContentInfo._6t,(-1),(-1),(-1))),
            $ != fj && ($.OjE = ConvivaStreamerProxy.dHj),
            $ != fj && ($.fDr = null),
            $ != fj && ($.sOE = null),
            $ != fj && ($.FvG = new Yw),
            $ != fj && ($.BaK = -1),
            $ != fj && ($.H7g = -1),
            $ != fj && ($.Hfe = null),
            $ != fj && ($.fx3 = null),
            $ != fj && ($.BW7 = void 0),
            $ == fj && (ConvivaStreamerProxy.yeD = "PlayingStateChange"),
            $ == fj && (ConvivaStreamerProxy.xUm = "StreamInfoChange"),
            $ == fj && (ConvivaStreamerProxy.pOB = "AvailableStreamInfoChange"),
            $ == fj && (ConvivaStreamerProxy.U6H = "ProxyInitialized"),
            $ == fj && (ConvivaStreamerProxy.GMW = "MetadataChange"),
            $ == fj && (ConvivaStreamerProxy.kTl = "LoadingStatusChange"),
            $ == fj && (ConvivaStreamerProxy.MV_ = "DownloadStateChange"),
            $ == fj && (ConvivaStreamerProxy.zJ2 = "DisplaySizeChange"),
            $ == fj && (ConvivaStreamerProxy.vHz = "ErrorChange"),
            $ == fj && (ConvivaStreamerProxy.x1x = "Log"),
            $ == fj && (ConvivaStreamerProxy.CXV = "ResourceError"),
            $ == fj && (ConvivaStreamerProxy.YOv = "PresentationChange"),
            $ == fj && (ConvivaStreamerProxy.HwE = "STOPPED"),
            $ == fj && (ConvivaStreamerProxy.tAQ = "PLAYING"),
            $ == fj && (ConvivaStreamerProxy.vkg = "BUFFERING"),
            $ == fj && (ConvivaStreamerProxy.yzw = "PAUSED"),
            $ == fj && (ConvivaStreamerProxy.fFX = "NOT_MONITORED"),
            $ == fj && (ConvivaStreamerProxy.FVe = "ERROR"),
            $ == fj && (ConvivaStreamerProxy.dHj = "UNKNOWN"),
            $ == fj && (ConvivaStreamerProxy.pmJ = 1),
            $ == fj && (ConvivaStreamerProxy.jrQ = 0),
            $ == fj && (ConvivaStreamerProxy.biP = "duration"),
            $ == fj && (ConvivaStreamerProxy.zoT = "framerate"),
            $ == fj && (ConvivaStreamerProxy.Khw = 1),
            $ == fj && (ConvivaStreamerProxy.BvQ = -1),
            $ == fj && (ConvivaStreamerProxy.ObP = 0),
            $ == fj && (ConvivaStreamerProxy.JV = 1),
            $ == fj && (ConvivaStreamerProxy.rgw = 2),
            $ == fj && (ConvivaStreamerProxy.IrL = 4),
            $ == fj && (ConvivaStreamerProxy._Ci = 8),
            $ == fj && (ConvivaStreamerProxy.b7N = 16),
            $ == fj && (ConvivaStreamerProxy.ADA = 16),
            $ == fj && (ConvivaStreamerProxy.asA = 32),
            $ == fj && (ConvivaStreamerProxy.RXQ = 64),
            $ == fj && (ConvivaStreamerProxy.pbC = 128),
            OZ($, "wy", t),
            OZ($, "Cleanup", t),
            OZ($, "Ukq", e),
            OZ($, "GetCapabilities", e),
            OZ($, "dD", r),
            OZ($, "GetPlayheadTimeMs", r),
            OZ($, "k7K", o),
            OZ($, "GetIsPHTAccurate", o),
            OZ($, "ML", i),
            OZ($, "GetBufferLengthMs", i),
            OZ($, "_yq", u),
            OZ($, "GetVideoBufferLengthMs", u),
            OZ($, "DrL", f),
            OZ($, "GetAudioBufferLengthMs", f),
            OZ($, "nHx", a),
            OZ($, "GetStartingBufferLengthMs", a),
            OZ($, "YU7", v),
            OZ($, "SetStartingBufferLengthMs", v),
            OZ($, "QVX", l),
            OZ($, "GetIsStartingBufferFull", l),
            OZ($, "Wrt", c),
            OZ($, "GetRenderedFrameRate", c),
            OZ($, "glF", C),
            OZ($, "GetSourceFrameRate", C),
            OZ($, "a1", s),
            OZ($, "GetDroppedFrames", s),
            OZ($, "JIr", O),
            OZ($, "GetCpuPercent", O),
            OZ($, "ilA", d),
            OZ($, "GetMemoryAvailable", d),
            OZ($, "TzN", S),
            OZ($, "GetCapacityKbps", S),
            OZ($, "bvd", h),
            OZ($, "GetServerAddress", h),
            OZ($, "qaO", m),
            OZ($, "GetIsLive", m),
            OZ($, "SNS", j),
            OZ($, "GetStreamerVersion", j),
            OZ($, "hv7", E),
            OZ($, "FetchCandidateStreams", E),
            OZ($, "WvT", g),
            OZ($, "Play", g),
            OZ($, "o1i", I),
            OZ($, "GetApiVersion", I),
            $ == fj && (ConvivaStreamerProxy.aM_ = 1),
            OZ($, "FGc", N),
            OZ($, "SetMonitoringNotifier", N),
            OZ($, "FkN", L),
            OZ($, "GetLoadingStatus", L),
            OZ($, "MnZ", P),
            OZ($, "GetPlayingState", P),
            OZ($, "Wid", w),
            OZ($, "GetBitrateKbps", w),
            OZ($, "Iom", y),
            OZ($, "GetCdnName", y),
            OZ($, "RhM", p),
            OZ($, "GetResource", p),
            OZ($, "M8p", D),
            OZ($, "GetStream", D),
            OZ($, "t_t", V),
            OZ($, "GetStreams", V),
            OZ($, "dcl", T),
            OZ($, "GetLastError", T),
            OZ($, "tUW", M),
            OZ($, "GetLastMetadata", M),
            OZ($, "br4", _),
            OZ($, "GetDisplayWidth", _),
            OZ($, "cMt", A),
            OZ($, "GetDisplayHeight", A),
            OZ($, "HS_", Z),
            OZ($, "GetStreamerType", Z),
            OZ($, "nOK", U),
            OZ($, "GetLoadedBytes", U),
            OZ($, "nDN", H),
            OZ($, "SetDownloadStateChange", H),
            OZ($, "cQi", b),
            OZ($, "SetStream", b),
            OZ($, "rpy", B),
            OZ($, "SetError", B),
            OZ($, "Pmd", F),
            OZ($, "SetMetadata", F),
            OZ($, "WWf", x),
            OZ($, "Log", x),
            OZ($, "_fW", R),
            OZ($, "LogError", R),
            OZ($, "wFZ", Y),
            OZ($, "GetTotalLoadedBytes", Y),
            OZ($, "oed", Q),
            OZ($, "SetLoadingStatus", Q),
            OZ($, "eco", W),
            OZ($, "SetPlayingState", W),
            OZ($, "sgt", G),
            OZ($, "SetBitrateKbps", G),
            OZ($, "txs", q),
            OZ($, "SetCdnName", q),
            OZ($, "xQX", K),
            OZ($, "SetResource", K),
            OZ($, "fJw", k),
            OZ($, "SetDisplaySize", k),
            OZ($, "UCH", X),
            OZ($, "SetAvailableStreams", X),
            OZ($, "ydC", z),
            OZ($, "SetProxyInitialized", z),
            LK($, "j9V", J),
            dN($, ConvivaStreamerProxy, "API_VERSION", ConvivaStreamerProxy.aM_),
            dN($, ConvivaStreamerProxy, "BOOLEAN_FALSE", ConvivaStreamerProxy.BvQ),
            dN($, ConvivaStreamerProxy, "BOOLEAN_TRUE", ConvivaStreamerProxy.Khw),
            dN($, ConvivaStreamerProxy, "BOOLEAN_UNAVAILABLE", ConvivaStreamerProxy.ObP),
            dN($, ConvivaStreamerProxy, "BUFFERING", ConvivaStreamerProxy.vkg),
            dN($, ConvivaStreamerProxy, "CAPABILITY_BITRATE_EXTERNAL", ConvivaStreamerProxy.ADA),
            dN($, ConvivaStreamerProxy, "CAPABILITY_BITRATE_METRICS", ConvivaStreamerProxy.IrL),
            dN($, ConvivaStreamerProxy, "CAPABILITY_BITRATE_SWITCHING", ConvivaStreamerProxy._Ci),
            dN($, ConvivaStreamerProxy, "CAPABILITY_CDN_SWITCHING", ConvivaStreamerProxy.b7N),
            dN($, ConvivaStreamerProxy, "CAPABILITY_QUALITY_METRICS", ConvivaStreamerProxy.rgw),
            dN($, ConvivaStreamerProxy, "CAPABILITY_SOURCE_CHUNKED", ConvivaStreamerProxy.RXQ),
            dN($, ConvivaStreamerProxy, "CAPABILITY_SOURCE_HTTP", ConvivaStreamerProxy.asA),
            dN($, ConvivaStreamerProxy, "CAPABILITY_SOURCE_STREAMING", ConvivaStreamerProxy.pbC),
            dN($, ConvivaStreamerProxy, "CAPABILITY_VIDEO", ConvivaStreamerProxy.JV),
            dN($, ConvivaStreamerProxy, "DOWNLOADSTATE_ACTIVE", ConvivaStreamerProxy.pmJ),
            dN($, ConvivaStreamerProxy, "DOWNLOADSTATE_INACTIVE", ConvivaStreamerProxy.jrQ),
            dN($, ConvivaStreamerProxy, "ERROR", ConvivaStreamerProxy.FVe),
            dN($, ConvivaStreamerProxy, "METADATA_DURATION", ConvivaStreamerProxy.biP),
            dN($, ConvivaStreamerProxy, "METADATA_ENCODED_FRAMERATE", ConvivaStreamerProxy.zoT),
            dN($, ConvivaStreamerProxy, "NOT_MONITORED", ConvivaStreamerProxy.fFX),
            dN($, ConvivaStreamerProxy, "PAUSED", ConvivaStreamerProxy.yzw),
            dN($, ConvivaStreamerProxy, "PLAYING", ConvivaStreamerProxy.tAQ),
            dN($, ConvivaStreamerProxy, "REASON_AVAILABLESTREAMINFOCHANGE", ConvivaStreamerProxy.pOB),
            dN($, ConvivaStreamerProxy, "REASON_DISPLAYSIZECHANGE", ConvivaStreamerProxy.zJ2),
            dN($, ConvivaStreamerProxy, "REASON_DOWNLOADSTATECHANGE", ConvivaStreamerProxy.MV_),
            dN($, ConvivaStreamerProxy, "REASON_ERRORCHANGE", ConvivaStreamerProxy.vHz),
            dN($, ConvivaStreamerProxy, "REASON_LOADINGSTATUSCHANGE", ConvivaStreamerProxy.kTl),
            dN($, ConvivaStreamerProxy, "REASON_LOG", ConvivaStreamerProxy.x1x),
            dN($, ConvivaStreamerProxy, "REASON_METADATACHANGE", ConvivaStreamerProxy.GMW),
            dN($, ConvivaStreamerProxy, "REASON_PLAYINGSTATECHANGE", ConvivaStreamerProxy.yeD),
            dN($, ConvivaStreamerProxy, "REASON_PRESENTATION_CHANGE", ConvivaStreamerProxy.YOv),
            dN($, ConvivaStreamerProxy, "REASON_PROXYINITIALIZED", ConvivaStreamerProxy.U6H),
            dN($, ConvivaStreamerProxy, "REASON_RESOURCE_ERROR", ConvivaStreamerProxy.CXV),
            dN($, ConvivaStreamerProxy, "REASON_STREAMINFOCHANGE", ConvivaStreamerProxy.xUm),
            dN($, ConvivaStreamerProxy, "STOPPED", ConvivaStreamerProxy.HwE),
            dN($, ConvivaStreamerProxy, "UNKNOWN", ConvivaStreamerProxy.dHj),
            $ != fj && n.apply($, arguments)
        }
        function IcH() {
            function n() {
                IcH.X1E = new EW,
                IcH.DDV = new EW,
                IcH.X1E.a9(IcH.me9, IcH.Lnh),
                IcH.DDV.a9(IcH.Lnh, IcH.me9),
                IcH.X1E.a9(IcH.tAQ, IcH.CS),
                IcH.DDV.a9(IcH.CS, IcH.tAQ),
                IcH.X1E.a9(IcH.HwE, IcH.cz),
                IcH.DDV.a9(IcH.cz, IcH.HwE),
                IcH.X1E.a9(IcH.yzw, IcH.Qh),
                IcH.DDV.a9(IcH.Qh, IcH.yzw),
                IcH.X1E.a9(IcH.vkg, IcH.DV),
                IcH.DDV.a9(IcH.DV, IcH.vkg),
                IcH.X1E.a9(IcH.fFX, IcH.nw),
                IcH.DDV.a9(IcH.nw, IcH.fFX),
                IcH.X1E.a9(IcH.dHj, IcH.ft),
                IcH.DDV.a9(IcH.ft, IcH.dHj)
            }
            function t(n) {
                return null == IcH.X1E && IcH.Ns(),
                IcH.X1E.Wt(n) ? IcH.X1E.tc(n) : IcH.ft
            }
            function e(n) {
                return null == IcH.DDV && IcH.Ns(),
                IcH.DDV.Wt(n) ? IcH.DDV.tc(n) : IcH.dHj
            }
            function r() {
                IcH.X1E = null
            }
            var o = this;
            o == fj && (IcH.X1E = null),
            o == fj && (IcH.DDV = null),
            o == fj && (IcH.me9 = "UNINITIALIZED"),
            o == fj && (IcH.Lnh = 0),
            o == fj && (IcH.tAQ = "PLAYING"),
            o == fj && (IcH.CS = 3),
            o == fj && (IcH.HwE = "STOPPED"),
            o == fj && (IcH.cz = 1),
            o == fj && (IcH.yzw = "PAUSED"),
            o == fj && (IcH.Qh = 12),
            o == fj && (IcH.vkg = "BUFFERING"),
            o == fj && (IcH.DV = 6),
            o == fj && (IcH.fFX = "NOT_MONITORED"),
            o == fj && (IcH.nw = 98),
            o == fj && (IcH.dHj = "UNKNOWN"),
            o == fj && (IcH.ft = 100),
            dN(o, IcH, "Ns", n),
            dN(o, IcH, "NXs", t),
            dN(o, IcH, "i2y", e),
            dN(o, IcH, "ox", r)
        }
        function D4u() {
            function n(n, t, e, r) {
                i.gtM = n,
                i.m5j = t,
                i.IyF = e,
                i.n3c = r
            }
            function t() {
                return i.gtM
            }
            function e() {
                return i.m5j
            }
            function r() {
                return oL.R5(i.IyF)
            }
            function o() {
                return i.n3c
            }
            var i = this;
            i != fj && (i.gtM = void 0),
            OZ(i, "O2s", t),
            i != fj && (i.m5j = void 0),
            OZ(i, "Bwl", e),
            i != fj && (i.IyF = void 0),
            OZ(i, "rlg", r),
            i != fj && (i.n3c = void 0),
            OZ(i, "pEj", o),
            i != fj && n.apply(i, arguments)
        }
        function StreamInfo() {
            function n() {
                return j.evG
            }
            function t(n) {
                j.evG = n
            }
            function e() {
                return j.ie6
            }
            function r(n) {
                j.ie6 = n
            }
            function o() {
                return j.Z2g
            }
            function i(n) {
                j.Z2g = n
            }
            function u() {
                return j.iBT
            }
            function f(n) {
                j.iBT = n
            }
            function a() {
                return j.CE_
            }
            function v(n) {
                j.CE_ = n
            }
            function l() {
                return j.m8H
            }
            function c(n) {
                j.m8H = n
            }
            function C(n, t, e, r, o, i) {
                j.M9 = n,
                j._fK = t,
                j.w6 = e,
                j.fm = r,
                j.mR7 = i,
                j.vuw = o
            }
            function s() {
                return j.M9
            }
            function O() {
                return j._fK
            }
            function d() {
                return j.w6
            }
            function S(n) {
                return null != n && (j._fK == n._fK && j.w6 == n.w6 && j.M9 == n.M9 && j.fm == n.fm && j.mR7 == n.mR7 && j.vuw == n.vuw)
            }
            function h(n) {
                if (null == n)
                    return null;
                var t = new StreamInfo((-1),ConvivaContentInfo.jNU,null,(-1),(-1),(-1));
                return t.fm = VW.z_(FFQ.Vf("type", n)),
                t.M9 = VW.z_(FFQ.Vf("bitrateKbps", n)),
                t.w6 = FFQ.b3k("resource", n),
                t._fK = FFQ.b3k("cdnName", n),
                t.mR7 = VW.z_(FFQ.Vf("sourceHeightPixels", n)),
                t.vuw = VW.z_(FFQ.Vf("sourceWidthPixels", n)),
                t
            }
            function m() {
                var n = null;
                switch (j.fm) {
                case StreamInfo.dHj:
                    n = "UNKNOWN";
                    break;
                case StreamInfo.qme:
                    n = "VIDEO";
                    break;
                case StreamInfo.ct3:
                    n = "AUDIO";
                    break;
                case StreamInfo.ZIc:
                    n = "TEXT";
                    break;
                case StreamInfo.yhl:
                    n = "RESOURCE";
                    break;
                default:
                    throw new Error("Unknown stream type " + j.fm)
                }
                return "type=" + n + ", bitrateKbps=" + j.M9 + ", resource=" + (null != j.w6 ? j.w6 : "null") + ", cdnName=" + (null != j._fK ? j._fK : "null") + ", sourceHeightPixels=" + j.mR7 + ", sourceWidthPixels=" + j.vuw
            }
            var j = this;
            j == fj && (StreamInfo.dHj = -1),
            j == fj && (StreamInfo.ct3 = 0),
            j == fj && (StreamInfo.qme = 1),
            j == fj && (StreamInfo.ZIc = 2),
            j == fj && (StreamInfo.yhl = 3),
            j == fj && (StreamInfo.mRd = ""),
            j == fj && (StreamInfo.nFp = 2147483647),
            j != fj && (j.evG = void 0),
            ED(j, "fm", n),
            ED(j, "type", n),
            Wf(j, "fm", t),
            Wf(j, "type", t),
            j != fj && (j.ie6 = void 0),
            ED(j, "mR7", e),
            ED(j, "sourceHeightPixels", e),
            Wf(j, "mR7", r),
            Wf(j, "sourceHeightPixels", r),
            j != fj && (j.Z2g = void 0),
            ED(j, "vuw", o),
            ED(j, "sourceWidthPixels", o),
            Wf(j, "vuw", i),
            Wf(j, "sourceWidthPixels", i),
            j != fj && (j.iBT = void 0),
            ED(j, "M9", u),
            ED(j, "bitrateKbps", u),
            Wf(j, "M9", f),
            Wf(j, "bitrateKbps", f),
            j != fj && (j.CE_ = void 0),
            ED(j, "w6", a),
            ED(j, "resource", a),
            Wf(j, "w6", v),
            Wf(j, "resource", v),
            j != fj && (j.m8H = void 0),
            ED(j, "_fK", l),
            ED(j, "cdnName", l),
            Wf(j, "_fK", c),
            Wf(j, "cdnName", c),
            OZ(j, "Wid", s),
            OZ(j, "GetBitrateKbps", s),
            OZ(j, "Iom", O),
            OZ(j, "GetCdnName", O),
            OZ(j, "RhM", d),
            OZ(j, "GetResource", d),
            OZ(j, "j5q", S),
            OZ(j, "equals", S),
            dN(j, StreamInfo, "QKZ", h),
            dN(j, StreamInfo, "ConstructClone", h),
            OZ(j, "vo", m),
            OZ(j, "ToStr", m),
            dN(j, StreamInfo, "AUDIO", StreamInfo.ct3),
            dN(j, StreamInfo, "MAX_BITRATE", StreamInfo.nFp),
            dN(j, StreamInfo, "RESOURCE", StreamInfo.yhl),
            dN(j, StreamInfo, "TEXT", StreamInfo.ZIc),
            dN(j, StreamInfo, "UNKNOWN", StreamInfo.dHj),
            dN(j, StreamInfo, "UNKNOWN_RESOURCE", StreamInfo.mRd),
            dN(j, StreamInfo, "VIDEO", StreamInfo.qme),
            j != fj && C.apply(j, arguments)
        }
        function StreamSwitch() {
            function n(n, t, e) {
                return new StreamSwitch(StreamSwitch.BEz(!1),n,t,(-1),null,e)
            }
            function t(n, t) {
                return new StreamSwitch(StreamSwitch.BEz(!1),null,n,(-1),null,t)
            }
            function e() {}
            function r() {
                return g._cW
            }
            function o(n) {
                g._cW = n
            }
            function i() {
                return g.ILK
            }
            function u(n) {
                g.ILK = n
            }
            function f() {
                return g.w25
            }
            function a(n) {
                g.w25 = n
            }
            function v() {
                return g.cH3
            }
            function l(n) {
                g.cH3 = n
            }
            function c() {
                return g.IO1
            }
            function C(n) {
                g.IO1 = n
            }
            function s() {
                return g.Ie6
            }
            function O(n) {
                g.Ie6 = n
            }
            function d(n, t, e, r, o, i) {
                g.kQ = n,
                g.Pkb = t,
                g.lfw = e,
                g.n8 = r,
                g.TMB = o,
                g.f1 = i
            }
            function S() {
                if (null == g.kQ)
                    return "StreamSwitch.id is null (and must be non-null)";
                if (null != g.kQ && "string" != typeof g.kQ)
                    return "StreamSwitch.id is not a string";
                if (null != g.n8 && "number" != typeof g.n8)
                    return "StreamSwitch.timeoutMs is not an int";
                if (null != g.TMB && "string" != typeof g.TMB)
                    return "StreamSwitch.mode is not a string";
                if (null != g.f1 && "string" != typeof g.f1)
                    return "StreamSwitch.status is not a string";
                if (!(null == g.Pkb || g.Pkb instanceof CandidateStream))
                    return "StreamSwitch.sourceStream is not a CandidateStream";
                if (null != g.lfw && !(g.lfw instanceof CandidateStream))
                    return "StreamSwitch.targetStream is not a CandidateStream";
                var n = null != g.Pkb ? g.Pkb.OeK() : null;
                if (null != n)
                    return n;
                var t = null != g.lfw ? g.lfw.OeK() : null;
                return null != t ? t : null
            }
            function h(n) {
                var t = new StreamSwitch(null,null,null,(-1),"","");
                return t.kQ = FFQ.b3k("id", n),
                t.Pkb = CandidateStream.QKZ(FFQ.Vf("sourceStream", n)),
                t.lfw = CandidateStream.QKZ(FFQ.Vf("targetStream", n)),
                t.n8 = VW.z_(FFQ.Vf("timeoutMs", n)),
                t.TMB = FFQ.b3k("mode", n),
                t.f1 = FFQ.b3k("status", n),
                t
            }
            function m() {
                StreamSwitch.YF9 = 0
            }
            function j() {
                StreamSwitch.YF9 = 0
            }
            function E(n) {
                var t = StreamSwitch.YF9;
                return StreamSwitch.YF9 += 1,
                n ? "c3." + oL.fg(t) : oL.fg(t)
            }
            var g = this;
            g == fj && (StreamSwitch.YF9 = 0),
            g == fj && (StreamSwitch.nsi = "PENDING"),
            g == fj && (StreamSwitch.QuW = "IN_PROGRESS"),
            g == fj && (StreamSwitch.TgA = "SUCCEEDED"),
            g == fj && (StreamSwitch.D4J = "FAILED"),
            g == fj && (StreamSwitch.UhJ = "INTERRUPTED"),
            dN(g, StreamSwitch, "LII", n),
            dN(g, StreamSwitch, "MakeSwitch", n),
            dN(g, StreamSwitch, "QpG", t),
            dN(g, StreamSwitch, "MakeSwitchToStream", t),
            OZ(g, "wy", e),
            OZ(g, "Cleanup", e),
            g != fj && (g._cW = void 0),
            ED(g, "kQ", r),
            ED(g, "id", r),
            Wf(g, "kQ", o),
            Wf(g, "id", o),
            g != fj && (g.ILK = void 0),
            ED(g, "n8", i),
            ED(g, "timeoutMs", i),
            Wf(g, "n8", u),
            Wf(g, "timeoutMs", u),
            g != fj && (g.w25 = void 0),
            ED(g, "Pkb", f),
            ED(g, "sourceStream", f),
            Wf(g, "Pkb", a),
            Wf(g, "sourceStream", a),
            g != fj && (g.cH3 = void 0),
            ED(g, "lfw", v),
            ED(g, "targetStream", v),
            Wf(g, "lfw", l),
            Wf(g, "targetStream", l),
            g != fj && (g.IO1 = void 0),
            ED(g, "TMB", c),
            ED(g, "mode", c),
            Wf(g, "TMB", C),
            Wf(g, "mode", C),
            g != fj && (g.Ie6 = void 0),
            ED(g, "f1", s),
            ED(g, "status", s),
            Wf(g, "f1", O),
            Wf(g, "status", O),
            OZ(g, "OeK", S),
            OZ(g, "CheckValidity", S),
            dN(g, StreamSwitch, "QKZ", h),
            dN(g, StreamSwitch, "ConstructClone", h),
            dN(g, StreamSwitch, "rL", m),
            dN(g, StreamSwitch, "StaticInit", m),
            dN(g, StreamSwitch, "bx", j),
            dN(g, StreamSwitch, "StaticCleanup", j),
            dN(g, StreamSwitch, "BEz", E),
            dN(g, StreamSwitch, "GetNextId", E),
            dN(g, StreamSwitch, "FAILED", StreamSwitch.D4J),
            dN(g, StreamSwitch, "INTERRUPTED", StreamSwitch.UhJ),
            dN(g, StreamSwitch, "IN_PROGRESS", StreamSwitch.QuW),
            dN(g, StreamSwitch, "PENDING", StreamSwitch.nsi),
            dN(g, StreamSwitch, "SUCCEEDED", StreamSwitch.TgA),
            g != fj && d.apply(g, arguments)
        }
        function StreamerError() {
            function n() {
                return h.xxn
            }
            function t(n) {
                h.xxn = n
            }
            function e() {
                return h.JC6
            }
            function r(n) {
                h.JC6 = n
            }
            function o() {
                return h.iJh
            }
            function i(n) {
                h.iJh = n
            }
            function u() {
                return h.XQl
            }
            function f(n) {
                h.XQl = n
            }
            function a() {
                return h.kFH
            }
            function v(n) {
                h.kFH = n
            }
            function l(n, t) {
                return new StreamerError(n,null,(-1),t,StreamerError.UQc)
            }
            function c(n, t, e) {
                return new StreamerError(n,e,(-1),t,StreamerError.e9E)
            }
            function C(n, t, e) {
                return new StreamerError(n,e,(-1),t,StreamerError.kOK)
            }
            function s(n, t, e, r) {
                return new StreamerError(n,e,r,t,StreamerError.Abc)
            }
            function O(n, t, e, r, o) {
                h.k3 = n,
                h.slO = t,
                h.dHu = e,
                h.XfB = r,
                h.cmo = o
            }
            function d(n) {
                if (null == n)
                    return null;
                var t = new StreamerError("",null,0,0,0);
                return t.k3 = FFQ.b3k("errorCode", n),
                t.XfB = VW.z_(FFQ.Vf("severity", n)),
                t.slO = StreamInfo.QKZ(FFQ.Vf("stream", n)),
                t.cmo = VW.z_(FFQ.Vf("scope", n)),
                t.dHu = VW.z_(FFQ.Vf("index", n)),
                t
            }
            function S() {
                return "errorCode=" + (null != h.k3 ? h.k3 : "null") + ", index=" + h.dHu + ", severity=" + h.XfB + ", scope=" + h.cmo + ", stream=(" + h.slO.vo() + ")"
            }
            var h = this;
            h == fj && (StreamerError.UQc = 0),
            h == fj && (StreamerError.Abc = 1),
            h == fj && (StreamerError.e9E = 2),
            h == fj && (StreamerError.kOK = 3),
            h == fj && (StreamerError.y4_ = 0),
            h == fj && (StreamerError.VuW = 1),
            h != fj && (h.xxn = void 0),
            ED(h, "k3", n),
            ED(h, "errorCode", n),
            Wf(h, "k3", t),
            Wf(h, "errorCode", t),
            h != fj && (h.JC6 = void 0),
            ED(h, "XfB", e),
            ED(h, "severity", e),
            Wf(h, "XfB", r),
            Wf(h, "severity", r),
            h != fj && (h.iJh = void 0),
            ED(h, "slO", o),
            ED(h, "stream", o),
            Wf(h, "slO", i),
            Wf(h, "stream", i),
            h != fj && (h.XQl = void 0),
            ED(h, "dHu", u),
            ED(h, "index", u),
            Wf(h, "dHu", f),
            Wf(h, "index", f),
            h != fj && (h.kFH = void 0),
            ED(h, "cmo", a),
            ED(h, "scope", a),
            Wf(h, "cmo", v),
            Wf(h, "scope", v),
            dN(h, StreamerError, "kHO", l),
            dN(h, StreamerError, "makeUnscopedError", l),
            dN(h, StreamerError, "YKZ", c),
            dN(h, StreamerError, "makeStreamError", c),
            dN(h, StreamerError, "VR0", C),
            dN(h, StreamerError, "makeResourceError", C),
            dN(h, StreamerError, "qM6", s),
            dN(h, StreamerError, "makeStreamSegmentError", s),
            dN(h, StreamerError, "QKZ", d),
            dN(h, StreamerError, "ConstructClone", d),
            OZ(h, "vo", S),
            OZ(h, "ToStr", S),
            h != fj && O.apply(h, arguments)
        }
        function jh() {
            function n(n) {
                void 0 == n && (n = 0),
                a.E0 = new Array(n)
            }
            function t() {
                for (var n = new jh, t = [], e = 0; e < arguments.length; e++)
                    t.push(arguments[e]);
                return n.E0 = t,
                n
            }
            function e(n) {
                if (null == n)
                    return null;
                var t = new jh;
                return t.E0 = n,
                t
            }
            function r() {
                return a.E0
            }
            function o() {
                return a.E0.length
            }
            function i(n) {
                if (n >= a.E0.length)
                    throw new Error("Index out of bounds: " + n + " (length " + a.E0.length + ")");
                if (n < 0)
                    throw new Error("Index out of bounds: " + n);
                return a.E0[n]
            }
            function u(n, t) {
                if (n >= a.E0.length)
                    throw new Error("Index out of bounds: " + n + " (length " + a.E0.length + ")");
                if (n < 0)
                    throw new Error("Index out of bounds: " + n);
                a.E0[n] = t
            }
            function f() {
                return a.E0
            }
            var a = this;
            a != fj && (a.E0 = void 0),
            dN(a, jh, "oIy", t),
            dN(a, jh, "Y_", e),
            OZ(a, "UX", r),
            ED(a, "ug", o),
            OZ(a, "tc", i),
            OZ(a, "a9", u),
            ED(a, "YC", f),
            a != fj && n.apply(this, arguments)
        }
        function qu() {
            function n() {
                qu.jK && (qu.jK.innerHTML = ""),
                BW(qu.gK, function(n) {
                    n.wy()
                }),
                qu.gK = {}
            }
            function t() {
                f.qA = null,
                delete qu.gK[f.D_],
                f.Ss && (Lt.Te(f.Ss),
                f.Ss = null)
            }
            function e(n, t, e) {
                f.H1 = n,
                f.qA = t,
                void 0 != e && e > 0 ? f.Ss = Lt.b_(o, e) : f.Ss = null,
                f.D_ = qu.D_++,
                qu.gK[f.D_] = f,
                qu.jK = document.getElementById(qu.JCl),
                qu.jK || (qu.jK = qu.bA()),
                f.DY = !1,
                f.zm = document.createElement("div"),
                qu.jK.appendChild(f.zm);
                var i = document.createElement("script");
                i.src = f.H1,
                i.type = "text/javascript",
                i.onload = function() {
                    O9.Yv(function() {
                        r(f.D_)
                    }, "ClassLoader.onload")
                }
                ,
                i.onerror = function(n) {
                    return f.Error = new Error("Error loading module"),
                    f.qA && f.qA(f.Error, f),
                    f.wy(),
                    !1
                }
                ,
                f.zm.appendChild(i)
            }
            function r(n) {
                var t = qu.gK[n];
                null != t && void 0 != t && (t.DY = !0,
                t.qA && t.qA(null, t),
                t.wy())
            }
            function o() {
                var n = qu.gK[f.D_];
                n && (f.Error = new Error("ClassLoader timeout"),
                f.qA && f.qA(f.Error, f),
                f.wy())
            }
            function i(n) {
                return sHq(n)
            }
            function u() {
                var n = document.createElement("div");
                return document.body.appendChild(n),
                n.style.position = "absolute",
                n.style.margin = "0pt 0pt 0pt 0pt",
                n.style.left = "0px",
                n.style.top = "0px",
                n.style.visibility = "hidden",
                n.style.width = "0px",
                n.style.height = "0px",
                n.className = "convivaLoadElement",
                n.id = qu.JCl,
                n
            }
            var f = this;
            f == fj && (qu.ua6 = parseInt(Math.floor(1e4 * Math.random()), 16),
            qu.jK = null,
            qu.JCl = "convivaLoadingElement_" + qu.ua6,
            qu.D_ = 0,
            qu.gK = {}),
            dN(f, qu, "bx", n),
            OZ(f, "wy", t),
            OZ(f, "Eg", i),
            dN(f, qu, "bA", u),
            f != fj && e.apply(f, arguments)
        }
        function Gnw() {
            function n(n) {
                if (null == n)
                    return "null";
                for (var t = oL.PX(n), e = "{", r = t.VO, o = 0; o < r.length; o++) {
                    var i = r[o];
                    e += i + ':"' + t.tc(i) + '" '
                }
                return e += "}"
            }
            function t(n) {
                if (null == n)
                    return "null";
                for (var t = "[", e = 0; e < n.Bt; e++)
                    t += n.tc(e),
                    e < n.Bt - 1 && (t += ", ");
                return t += "]"
            }
            var e = this;
            dN(e, Gnw, "jMw", n),
            dN(e, Gnw, "hJD", t)
        }
        function UF() {
            function n(n) {
                var t = new UF;
                return t._W = n,
                t
            }
            function t() {
                return a._W
            }
            function e(n) {
                if (null == n)
                    return null;
                var t = null;
                t = n.hasOwnProperty("UX") ? n.UX() : n;
                for (var e = "", r = 0; r < t.length; r++)
                    e += String.fromCharCode(t[r]);
                var o = new UF;
                return o._W = e,
                o
            }
            function r(n) {
                return e(va(n))
            }
            function o(n) {
                for (var t = new UF, e = "", r = 0; r < n.length; r++)
                    e += " " + n.charCodeAt(r);
                return t._W = n,
                t
            }
            function i() {
                for (var n = new Array, t = a._W, e = 0; e < t.length; e++)
                    n.push(255 & t.charCodeAt(e));
                return jh.Y_(n)
            }
            function u() {
                return a._W
            }
            function f() {
                return oL.FP(a._W)
            }
            var a = this;
            a != fj && (a._W = null),
            dN(a, UF, "Y_", n),
            OZ(a, "UX", t),
            dN(a, UF, "BU", e),
            dN(a, UF, "UA", r),
            dN(a, UF, "qi", o),
            OZ(a, "v_", i),
            OZ(a, "vo", u),
            OZ(a, "fW", f)
        }
        function nD() {
            function n() {
                nD.jK && (nD.jK.innerHTML = "",
                nD.ZHR = {}),
                BW(nD.SY, function(n) {
                    n.wy()
                }),
                nD.SY = {}
            }
            function t() {
                d.qA = null,
                delete nD.SY[d.Eo],
                d.Ss && (Lt.Te(d.Ss),
                d.Ss = null),
                null != d.m1A && (d.m1A.wy(),
                d.m1A = null)
            }
            function e() {
                if (null == d.jV)
                    return null;
                if (null == d.o_)
                    try {
                        d.o_ = NM(d.jV)
                    } catch (n) {
                        d.o_ = null
                    }
                return d.o_
            }
            function r(n, t, e, r) {
                d.oJW = Lt.VB(),
                d.H1 = n,
                d.qA = t,
                r ? r.hasOwnProperty("ToObject") || (r = oL.PX(r)) : r = new EW,
                d.ym = r,
                d.tM = "GET",
                d.ar = "text/plain",
                d.jm = e,
                d.jJd = null,
                d.X5 = null,
                d.T8T = 0,
                d.Mr3 = null,
                null != nD.li8 && (d.m1A = nD.li8(d),
                null != d.m1A) || d.Mi_(n, t, e, r)
            }
            function o(n, t, e, r) {
                var o = n.match(/^(https?:\/\/[^\/]*)(\/.*)$/);
                if (!o)
                    return void O9.FW("DataLoader: cannot parse url: " + n);
                if (d.kK = o[1],
                d.kK.indexOf("localhost") < 0)
                    ;var i = o[2];
                d.tM = "GET";
                var u = "";
                d.ar = "text/plain",
                e && (u = e.vo(),
                d.ar = "application/octet-stream; charset=x-user-defined",
                d.tM = "POST"),
                r.Wt("contentType") && (d.ar = r.tc("contentType")),
                d.setTimeout(r),
                d.Eo = nD.ua6 + "_" + nD.Eo++,
                nD.SY[d.Eo] = d,
                /octet-stream/.test(d.ar) && !Vz.hp && "pb" == u.substr(0, 2) && (u = Vz.Em(u)),
                /octet-stream/.test(d.ar) && S && (u = C(u)),
                d.rU = "id=" + d.Eo + ",method=" + d.tM + ",url=" + i + ",contentType=" + d.ar + "," + u,
                a()
            }
            function i(n) {
                n.Wt("timeoutMs") ? d.Ss = Lt.b_(u, parseInt(n.tc("timeoutMs"))) : d.Ss = null
            }
            function u() {
                var n = nD.SY[d.Eo];
                n && (d.jJd = new Error("DataLoader timeout"),
                n.T8T = Lt.VB() - n.oJW,
                d.qA && d.qA(d.jJd, d),
                d.wy())
            }
            function f() {
                nD.jK = document.getElementById(nD.JCl),
                nD.jK || (nD.jK = nD.bA(),
                nD.ZHR = {})
            }
            function a() {
                var n = d.kK
                  , t = nD.ZHR[n]
                  , e = t ? document.getElementById(t) : null;
                e && e.eB ? l(e) : e && !e.eB ? setTimeout(function() {
                    a()
                }, 500) : (f(),
                e = document.createElement("iframe"),
                e.height = 30,
                e.src = n + "/ConvivaCommunicationProxy.html",
                e.eB = !1,
                e.onload = function() {
                    e.eB = !0,
                    l(e)
                }
                ,
                e.id = nD.F3k(n),
                nD.jK.appendChild(e),
                nD.ZHR[n] = e.id)
            }
            function v(n) {
                return "_convivaRemoteFrame_" + n.replace(/\//g, "").replace(/\:/g, "") + "_" + nD.ua6
            }
            function l(n) {
                n && n.contentWindow ? n.contentWindow.postMessage(d.rU, d.ja_ ? "*" : d.kK) : ct.qF("DataLoader", "could not send message through communication frame, expect DataLoader timeout")
            }
            function c(n) {
                return n = n.replace(h, function(n) {
                    return n == m ? String.fromCharCode(0) : String.fromCharCode(1)
                })
            }
            function C(n) {
                return n.replace(E, function(n) {
                    return n == String.fromCharCode(0) ? m : j
                })
            }
            function s(n) {
                var t = n.data.toString()
                  , e = t.match(/^id=([^,]+),([^,]+),/);
                if (e) {
                    var r = e[0].length
                      , o = null;
                    o = r == t.length ? "" : t.substring(r);
                    var i = nD.SY[e[1]];
                    if (i && (i.ja_ || n.origin == i.kK)) {
                        S && /octet-stream/.test(i.ar) && (o = c(o));
                        "ok" == e[2] ? i.jJd = null : i.jJd = new Error(o),
                        i.X5 = UF.qi(o),
                        i.T8T = Lt.VB() - i.oJW,
                        i.qA && i.qA(i.jJd, i),
                        i.wy()
                    }
                }
            }
            function O() {
                var n = document.createElement("div");
                return document.body.appendChild(n),
                n.style.position = "absolute",
                n.style.margin = "0pt 0pt 0pt 0pt",
                n.style.left = "0px",
                n.style.top = "0px",
                n.style.visibility = "hidden",
                n.style.width = "0px",
                n.style.height = "0px",
                n.className = "convivaCommunicationElement",
                n.id = nD.JCl,
                n
            }
            var d = this;
            d == fj && (nD.nL = function(n, t, e) {
                n.addEventListener ? n.addEventListener(t, e, !1) : n.attachEvent("on" + t, e)
            }
            ,
            nD.Pi5 = function(n, t, e) {
                n.removeEventListener ? n.removeEventListener(t, e, !1) : n.detachEvent("on" + t, e)
            }
            ,
            nD.nL(window, "message", s),
            nD.ZHR = {},
            nD.ua6 = parseInt(Math.floor(1e4 * Math.random()), 16),
            nD.jK = null,
            nD.JCl = "convivaCommunicationElement_" + nD.ua6,
            nD.Eo = 0,
            nD.SY = {},
            nD.li8 = null),
            d != fj && (d.m1A = null),
            d != fj && (d.ja_ = !0),
            dN(d, nD, "bx", n),
            OZ(d, "wy", t),
            ED(d, "mV", e),
            OZ(d, "Mi_", o),
            OZ(d, "setTimeout", i),
            dN(d, nD, "F3k", v);
            var S = "undefined" != typeof window.ActiveXObject
              , h = new RegExp(String.fromCharCode(1) + ".","g")
              , m = String.fromCharCode(1) + String.fromCharCode(1)
              , j = String.fromCharCode(1) + String.fromCharCode(2)
              , E = new RegExp("[" + String.fromCharCode(0) + String.fromCharCode(1) + "]","g");
            dN(d, nD, "bA", O),
            d != fj && r.apply(d, arguments)
        }
        function EW() {
            function n(n) {
                d.sq = {}
            }
            function t(n) {
                if (null == n)
                    return null;
                if (n instanceof EW)
                    return n;
                n.hasOwnProperty("A6") && (n = n.A6());
                var t = new EW;
                return Zi(n, function(e) {
                    t.sq[e] = n[e]
                }),
                t
            }
            function e() {
                return d.sq
            }
            function r() {
                for (var n = new EW, t = 0; t + 1 < arguments.length; t += 2)
                    n.sq[arguments[t]] = arguments[t + 1];
                return n
            }
            function o(n) {
                Zi(d.sq, function(t) {
                    n[t] = d.sq[t]
                })
            }
            function i(n) {
                return d.sq[n]
            }
            function u(n, t) {
                d.sq[n] = t
            }
            function f() {
                Zi(d.sq, function(n) {
                    delete d.sq[n]
                })
            }
            function a(n) {
                return void 0 !== d.sq[n]
            }
            function v(n) {
                return Wt(n)
            }
            function l() {
                var n = new Array;
                return Zi(d.sq, function(t) {
                    n.push(t)
                }),
                n
            }
            function c() {
                var n = new Array;
                return Zi(d.sq, function(t) {
                    n.push(d.sq[t])
                }),
                n
            }
            function C() {
                var n = new Array;
                return Zi(d.sq, function(t) {
                    n.push(new sk(t,d.sq[t]))
                }),
                n
            }
            function s() {
                var n = 0;
                return Zi(d.sq, function(t) {
                    n++
                }),
                n
            }
            function O(n) {
                return !!d.Wt(n) && (delete d.sq[n],
                !0)
            }
            var d = this;
            d != fj && (d.sq = void 0),
            dN(d, EW, "Y_", t),
            OZ(d, "A6", e),
            dN(d, EW, "oIy", r),
            OZ(d, "Rr", o),
            OZ(d, "tc", i),
            OZ(d, "a9", u),
            OZ(d, "m3", f),
            OZ(d, "Wt", a),
            OZ(d, "OC", v),
            ED(d, "VO", l),
            ED(d, "YC", c),
            ED(d, "GA", C),
            ED(d, "Bt", s),
            OZ(d, "Yb", u),
            OZ(d, "gS", O),
            d != fj && n.apply(this, arguments)
        }
        function M8() {
            function n() {
                i.Lo = new Yw
            }
            function t() {
                i.Lo = new Yw
            }
            function e(n) {
                i.Lo.Yb(n)
            }
            function r(n) {
                i.Lo.gS(n)
            }
            function o() {
                for (var n = i.Lo.YC, t = 0; t < n.length; t++) {
                    var e = n[t];
                    e()
                }
            }
            var i = this;
            i != fj && (i.Lo = void 0),
            OZ(i, "wy", t),
            OZ(i, "q_", e),
            OZ(i, "X8", r),
            OZ(i, "_o", o),
            i != fj && n.apply(i, arguments)
        }
        function Inferrer() {
            function n(n) {
                i.lAz = oL.PX(n),
                i.k2K(),
                i.bV()
            }
            function t(n) {
                var t = Lt.VB();
                return i.xK > 0 && t > i.xK && i.QO.gX(0, oL.fFw(n - i.gR) / (t - i.xK)),
                i.xK = t,
                i.gR = oL.fFw(n),
                i.QO.Bt > Math.max(i.T8Y, i.ZRS) && i.QO.DU(i.QO.Bt - 1),
                i.tSo()
            }
            function e() {
                var n = null
                  , t = i.QO.Bt;
                if (t >= Math.min(i.T8Y, i.ZRS)) {
                    for (var e = 0, r = i.QO.YC, o = 0; o < r.length; o++) {
                        var u = r[o];
                        e += u
                    }
                    e /= t,
                    t >= i.T8Y && Math.abs(e - i.Lnr) < i.qr7 && (n = Inferrer.MOVING_STATE),
                    t >= i.ZRS && e == i.W9b && (n = Inferrer.NOT_MOVING_STATE)
                }
                return n
            }
            function r() {
                i.QO = new Yw,
                i.gR = -1,
                i.xK = 0
            }
            function o() {
                i.lAz && (i.lAz.Wt("movingMinimumSamples") && (i.T8Y = i.lAz.tc("movingMinimumSamples")),
                i.lAz.Wt("notMovingMinimumSamples") && (i.ZRS = i.lAz.tc("notMovingMinimumSamples")),
                i.lAz.Wt("movingExpectedSpeed") && (i.Lnr = i.lAz.tc("movingExpectedSpeed")),
                i.lAz.Wt("notMovingExpectedSpeed") && (i.W9b = i.lAz.tc("notMovingExpectedSpeed")),
                i.lAz.Wt("movingSpeedTolerance") && (i.qr7 = i.lAz.tc("movingSpeedTolerance")))
            }
            var i = this;
            i == fj && (Inferrer.MOVING_STATE = "MOVING"),
            i == fj && (Inferrer.NOT_MOVING_STATE = "NOT_MOVING"),
            i == fj && (Inferrer._Yn = 4),
            i == fj && (Inferrer.EyE = 4),
            i == fj && (Inferrer.Wkw = 1),
            i == fj && (Inferrer.Mwe = .25),
            i == fj && (Inferrer.XDG = 0),
            i != fj && (i.QO = void 0),
            i != fj && (i.gR = 0),
            i != fj && (i.xK = 0),
            i != fj && (i.T8Y = Inferrer._Yn),
            i != fj && (i.ZRS = Inferrer.EyE),
            i != fj && (i.Lnr = Inferrer.Wkw),
            i != fj && (i.qr7 = Inferrer.Mwe),
            i != fj && (i.W9b = Inferrer.XDG),
            i != fj && (i.lAz = null),
            OZ(i, "Update", t),
            LK(i, "tSo", e),
            LK(i, "bV", r),
            LK(i, "k2K", o),
            i != fj && n.apply(i, arguments)
        }
        function sk() {
            function n(n, t) {
                r.Tj = n,
                r.vN = t
            }
            function t() {
                return r.Tj
            }
            function e() {
                return r.vN
            }
            var r = this;
            r != fj && (r.Tj = void 0),
            r != fj && (r.vN = void 0),
            ED(r, "Zw", t),
            ED(r, "GU", e),
            r != fj && n.apply(this, arguments)
        }
        function oL() {
            oL.w_ = function(n, t) {
                return n.indexOf(t)
            }
            ,
            oL.JA = function(n, t) {
                return 0 == n.indexOf(t)
            }
            ,
            oL.Pe = function(n, t) {
                return 0 <= n.indexOf(t)
            }
            ,
            oL.tF = function(n, t) {
                if (t < 0 || t >= n.length)
                    throw new Error("ArgumentOutOfRange");
                return n[t]
            }
            ,
            oL.n0 = function(n, t, e) {
                if (t < 0 || t >= n.length || void 0 != e && (e < 0 || t + e > n.length))
                    throw new Error("ArgumentOutOfRange");
                return void 0 == e ? n.substr(t) : n.substr(t, e)
            }
            ,
            oL.Nq = function(n, t) {
                var e = n.split(t);
                return jh.Y_(e)
            }
            ,
            oL.mT = function(n) {
                return n.split("")
            }
            ,
            oL.hI = function(n, t) {
                return null == n ? null == t ? 0 : -1 : null == t ? 1 : n < t ? -1 : n == t ? 0 : 1
            }
            ,
            oL.xO = function(n) {
                return n.replace(/^\s*/, "").replace(/\s*$/, "")
            }
            ,
            oL.ZLT = function(n, t, e) {
                if (null == t || "" == t || null == e)
                    throw new Error("InvalidArgument");
                var r = n.indexOf(t);
                if (r >= 0) {
                    var o = t.length;
                    return n.substr(0, r) + e + oL.ZLT(n.substr(r + o), t, e)
                }
                return n
            }
            ,
            oL._Tg = function(n, t) {
                if (null == t || "" == t)
                    throw new Error("InvalidArgument");
                return n.lastIndexOf(t)
            }
            ,
            oL.js = function(n) {
                return Yw.Y_(n)
            }
            ,
            oL.zF = function(n) {
                return jh.Y_(n)
            }
            ,
            oL.LS = function(n) {
                return null == n ? null : n.UX()
            }
            ,
            oL.js = function(n) {
                return Yw.Y_(n)
            }
            ,
            oL.R5 = function(n) {
                return null == n ? null : n.UX()
            }
            ,
            oL.PX = function(n) {
                var t = EW.Y_(n);
                return t
            }
            ,
            oL.uM = function(n) {
                return null == n ? null : n.hasOwnProperty("A6") ? n.A6() : n
            }
            ,
            oL.Jp = function(n, t) {
                null != n && n.Rr(t)
            }
            ,
            oL._TN = function(n) {
                return n
            }
            ,
            oL.FP = function(n) {
                try {
                    if (window.DOMParser) {
                        var t = (new DOMParser).parseFromString(n, "text/xml");
                        return t.documentElement
                    }
                    var t = new i8("Microsoft.XMLDOM");
                    return t.async = "false",
                    t.loadXML(n),
                    t.documentElement
                } catch (e) {
                    return null
                }
            }
            ,
            oL.EP = function(n) {
                try {
                    return window.XMLSerializer ? (new XMLSerializer).serializeToString(n) : n.xml
                } catch (t) {
                    return null
                }
            }
            ,
            oL.fg = function(n) {
                return "function" == typeof n.fg ? n.fg() : n.toString()
            }
            ,
            oL.WOY = function(n) {
                return n.toLowerCase()
            }
            ,
            oL.t2u = function(n) {
                return parseInt(n)
            }
            ,
            oL.fFw = function(n) {
                return n instanceof L_ ? n.mg : n instanceof Q2 ? n.mg : Number(n)
            }
            ,
            oL.N1V = new RegExp("^([+-]?[0-9]*\\.?[0-9]+)((e|E)[+-]?[0-9]+)?$"),
            oL.iGL = function(n) {
                return oL.qlz(n, oL.N1V, "double"),
                parseFloat(n)
            }
            ,
            oL.qlz = function(n, t, e) {
                if (!t.test(n))
                    throw new Error("Invalid string for " + e + ": " + n)
            }
        }
        function Yw() {
            function n() {
                arguments.length > 1 ? SH.z2("Error: Instantiate ListCS with too many arguments") : 0 == arguments.length ? jh.call(h, 0) : arguments[0]instanceof Number ? jh.call(h, arguments[0]) : arguments[0]instanceof Array ? (jh.call(h, arguments[0].length),
                h.E0 = arguments[0]) : arguments[0]instanceof jh ? (jh.call(h, arguments[0].length),
                h.E0 = arguments[0].E0) : SH.z2("Error: Instantiate ListCS with inappropriate arguments")
            }
            function t(n) {
                for (var t = new Yw, e = 0; e < arguments.length; e++)
                    t.E0.push(arguments[e]);
                return t
            }
            function e(n) {
                if (null == n)
                    return n;
                if (n instanceof Yw)
                    return n;
                var t = new Yw;
                return t.E0 = n,
                t
            }
            function r() {
                return h.E0
            }
            function o() {
                return h.E0.length
            }
            function i() {
                return h.E0
            }
            function u(n) {
                h.E0.push(n)
            }
            function f(n) {
                h.E0.length = 0
            }
            function a(n) {
                var t = arguments[1];
                if (null == t)
                    t = 0;
                else if (t < 0 || t >= h.E0.length)
                    throw new Error("Starting index out of bound");
                for (var e = t; e < h.E0.length; e++)
                    if (h.E0[e] == n)
                        return e;
                return -1
            }
            function v(n) {
                return h.Hh(n) >= 0
            }
            function l(n, t) {
                h.E0.splice(n, 0, t)
            }
            function c(n) {
                var t = h.Hh(n);
                return !(t < 0) && (h.DU(t),
                !0)
            }
            function C(n, t) {
                h.E0.splice(n, t)
            }
            function s(n) {
                h.E0.splice(n, 1)
            }
            function O(n, t) {
                var e = new Yw;
                return e.E0 = h.E0.slice(n, n + t),
                e
            }
            function d() {
                h.E0.sort.apply(h.E0, arguments)
            }
            function S() {
                return jh.Y_(h.E0.slice())
            }
            var h = this;
            h != fj && (h.E0 = void 0),
            dN(h, Yw, "oIy", t),
            dN(h, Yw, "Y_", e),
            OZ(h, "UX", r),
            ED(h, "Bt", o),
            ED(h, "YC", i),
            OZ(h, "Yb", u),
            OZ(h, "m3", f),
            OZ(h, "Hh", a),
            OZ(h, "OC", v),
            OZ(h, "gX", l),
            OZ(h, "gS", c),
            OZ(h, "JI", C),
            OZ(h, "DU", s),
            OZ(h, "g2", O),
            OZ(h, "HC", d),
            OZ(h, "jR", S),
            h != fj && n.apply(this, arguments)
        }
        function CO() {
            function n() {
                return fe.lY
            }
            function t() {
                return fe.ZE
            }
            function e() {
                return fe.dp <= 0 ? fe.ZE : fe.dp
            }
            function r() {
                return fe.wV
            }
            function o() {
                return fe.__
            }
            function i() {
                return fe.PQ <= 0 ? fe.ZE : fe.PQ
            }
            function u() {
                return fe.nk1
            }
            function f() {
                return fe.Jy
            }
            function a() {
                return fe.c2
            }
            function v() {
                return fe.Tl
            }
            function l() {
                return CO._B
            }
            function c() {
                return CO.Wh
            }
            function C() {
                return CO.OU
            }
            function s() {
                return CO.HQ
            }
            function O() {
                return CO.zHg
            }
            function d() {
                return CO.Qpn
            }
            function S() {
                return CO.eKR
            }
            function h() {
                return CO.GAq
            }
            function m() {
                return CO.ukx
            }
            function j() {
                return CO.nup
            }
            function E() {
                return CO.WVf
            }
            function g() {
                return CO.B33
            }
            function I() {
                return CO.ln
            }
            function N() {
                return CO.Ix
            }
            function L() {
                return CO.Ze
            }
            function P() {
                return CO.NUU
            }
            function w() {
                return CO.jUw
            }
            function y() {
                return CO.fZ
            }
            function p() {
                return CO.a3
            }
            function D() {
                return CO.MPH
            }
            function V() {
                return fe.PMc
            }
            function T() {
                return CO.sNi
            }
            function M() {
                return CO.Srw
            }
            function _() {
                return CO._CK
            }
            function A() {
                return CO.MOU
            }
            function Z() {
                return CO.OVq
            }
            function U() {
                return CO.LxP
            }
            function H() {
                return CO.JLC
            }
            function b() {
                return CO.bg9
            }
            function B() {
                return CO.s2s
            }
            function F() {
                return CO.Vfx
            }
            function x() {
                return CO.q5j
            }
            function R() {
                return CO.OHC
            }
            function Y() {
                return CO.pJ4
            }
            function Q() {
                return CO.hJk
            }
            function W() {
                return CO.uzA
            }
            function G() {
                return CO.Dq4
            }
            function q() {
                return CO.kxN
            }
            function K() {
                return CO.mz
            }
            function k() {
                return CO.OQ
            }
            function X() {
                return CO.D2
            }
            function z() {
                return CO.xb
            }
            function J() {
                return CO.ur
            }
            function $() {
                return CO.CPP
            }
            function nn() {
                return CO.MOY
            }
            function tn() {
                return CO.YrT
            }
            function en() {
                return CO.nP
            }
            function rn() {
                return CO.MW
            }
            function on() {
                return CO.P5
            }
            function un() {
                return CO.uI
            }
            function fn() {
                return CO.tz
            }
            function an() {
                return CO.dj
            }
            function vn() {
                return fe.dB
            }
            function ln() {
                return fe.nT6
            }
            function cn() {
                return fe.D2N
            }
            function Cn() {
                return fe.ZOv
            }
            function sn() {
                return CO.r0D
            }
            function On() {
                return CO._PF
            }
            function dn() {
                return CO.Eii
            }
            function Sn() {
                return CO.AKr
            }
            function hn() {
                return CO.bgo
            }
            function mn() {
                return CO.JLS
            }
            function jn() {
                return CO.wuk
            }
            function En() {
                return CO.CVM
            }
            function gn() {
                return CO.Gc2
            }
            function In() {
                return CO.ti_
            }
            function Nn() {
                return CO.GOJ
            }
            function Ln() {
                return CO.QPE
            }
            function Pn() {
                return CO.mAR
            }
            function wn() {
                return CO.Gwm
            }
            function yn() {
                return CO.Zgo
            }
            function pn() {
                return CO.L4E
            }
            function Dn() {
                return CO.rET
            }
            function Vn() {
                return CO.X8Z
            }
            function Tn() {
                return CO.VaV
            }
            function Mn() {
                return CO.vI5
            }
            function _n() {
                return CO.Vmh
            }
            function An() {
                return CO.d3v
            }
            function Zn() {
                return CO.oAN
            }
            function Un() {
                return CO.uLH
            }
            function Hn() {
                return CO.kTO
            }
            function bn() {
                return CO.qvB
            }
            function Bn() {
                return CO.IjK
            }
            function Fn() {
                return CO.jf9
            }
            function xn() {
                return CO.zAe
            }
            function Rn() {
                return CO.S9x
            }
            function Yn() {
                return CO.gpk
            }
            function Qn() {
                return CO.LhM
            }
            function Wn() {
                return CO.HVK
            }
            function Gn() {
                return CO.pwK
            }
            function qn() {
                return CO.CVl
            }
            function Kn() {
                return CO.lJy
            }
            function kn() {
                return CO.cSA
            }
            function Xn() {
                return CO._rL
            }
            function zn() {
                return CO.Sbo
            }
            function Jn() {
                return CO.lse
            }
            function $n() {
                return CO.sO2
            }
            function nt() {
                return CO.CI9
            }
            function tt() {
                return CO.ErO
            }
            function et() {
                return CO.niY
            }
            function rt() {
                return CO.dME
            }
            function ot() {
                return CO.Jp5
            }
            function it() {
                return CO.A31
            }
            function ut() {
                return CO.rpx
            }
            function ft() {
                return fe.bB
            }
            function at() {
                return fe.KS
            }
            function vt() {
                return CO.K45
            }
            function lt() {
                return CO.LDt
            }
            function Ct(n, t, e, r, o, i) {
                fe.h5 = n,
                fe.WQ = t,
                fe.I8 = r,
                fe.sHG = i,
                fe.Xv = new M8,
                null != e && fe.Xv.q_(e),
                fe.lQv = null,
                fe.G4D = null,
                fe.bB = null,
                fe.KQN = 0,
                null != o ? (fe.lQv = uPJ.orQ(o),
                fe.A1(),
                i && (CO.Ykc(fe.lQv) ? fe.Tb() : fe.L9(fe.lY))) : (fe.gF = null,
                fe.Tb())
            }
            function st() {
                fe.I8 = null,
                fe.Xv = new M8,
                fe.L9(fe.lY),
                fe.sHG = !0
            }
            function Ot(n, t, e, r) {
                return null != CO.POc && (CO.POc.wy(),
                CO.POc = null),
                CO.POc = new CO(n,t,e,r,null,(!1)),
                CO.POc
            }
            function dt(n, t, e, r) {
                return O9.y8(null != CO.LUW, "_fake_config_xml needs to be set"),
                null != CO.POc && (CO.POc.wy(),
                CO.POc = null),
                CO.POc = new CO(n,t,e,r,CO.LUW,(!1)),
                CO.POc
            }
            function St(n, t, e, r) {
                return r && null != CO.POc ? CO.POc.D_d() : (O9.y8(null == CO.POc || !CO.POc.sHG, "createPeriodicLoader.instance"),
                O9.y8(null != e, "createPeriodicLoader.config"),
                CO.POc = new CO(n,t,null,null,e,(!0))),
                CO.POc
            }
            function ht() {
                return CO.POc
            }
            function mt() {
                null != CO.POc && (CO.POc.wy(),
                CO.POc = null),
                CO.b9 = null,
                CO.dgH = !1,
                CO.ng = null,
                CO.wA = CO.BX,
                CO.XyF = !1,
                CO.grL = null,
                CO.U7B = null,
                CO.knV = CO.JAS
            }
            function jt() {
                null != fe.f9 && (fe.f9.wy(),
                fe.f9 = null),
                null != fe.Tko && (fe.Tko.wy(),
                fe.Tko = null),
                null != fe.gF && (fe.gF.wy(),
                fe.gF = null),
                null != fe.Xv && (fe.Xv.wy(),
                fe.Xv = null),
                fe.G4D = null,
                fe.lQv = null,
                fe.h5 = null
            }
            function Et(n) {
                var t = void 0;
                t = n ? CO.Tsf(fe.h5) : CO.C4c(fe.h5),
                t += "/lpconfig/cfg/",
                t += CO.GK("c3.customerName", fe.WQ);
                var e = void 0;
                e = "JS",
                t += "&" + CO.GK("c3.platform", e);
                var r = !1;
                return r = null != fe.gF,
                t += r ? "&" + CO.GK("c3.dver", Uj.Re) : "&" + CO.GK("c3.sver", Uj.Re),
                t += "?random=" + O9.bG(),
                t += "&uuid=" + gV.eSE()
            }
            function gt(n, t) {
                return O9.oN(n) + "=" + O9.oN(t)
            }
            function It(n) {
                var t = oL.Nq(n, "/");
                if (t.ug >= 3) {
                    var e = t.tc(2);
                    if (null != CO.grL)
                        return oL.ZLT(n, e, CO.grL);
                    if ("livepass.conviva.com" == e)
                        return oL.ZLT(n, e, "livepassdl.conviva.com");
                    if ("livepass.staging.conviva.com" == e)
                        return oL.ZLT(n, e, "livepassdl.staging.conviva.com")
                }
                return n
            }
            function Nt(n) {
                var t = oL.Nq(n, "/");
                if (t.ug >= 3) {
                    var e = t.tc(2);
                    if (null != CO.U7B)
                        return oL.ZLT(n, e, CO.U7B);
                    if ("livepass.conviva.com" == e)
                        return oL.ZLT(n, e, "livepassdl2.conviva.com");
                    if ("livepass.staging.conviva.com" == e)
                        return oL.ZLT(n, e, "livepassdl2.staging.conviva.com")
                }
                return n
            }
            function Pt() {
                return null != fe.G4D ? fe.G4D.vo() : null
            }
            function wt() {
                if (null != CO.b9)
                    return fe.lQv = uPJ.orQ(CO.b9),
                    void fe.A1();
                var n = fe.bF(!0);
                ct.qF("LivePassConfigLoader", "loading primary config " + n);
                var t = null;
                fe.sHG || (t = new EW,
                0 != CO.knV && t.Yb("timeoutMs", oL.fg(CO.knV))),
                fe.f9 = new nD(n,function(n, t) {
                    fe.we6(n, t)
                }
                ,null,t)
            }
            function yt(n, t) {
                O9.Yv(function() {
                    if (fe.sHG)
                        null == n ? fe.oy5(t.X5) : null != fe.I8 && fe.I8(n);
                    else if (null == n && null != t.X5 && fe.qun(uPJ.Y_(t.X5.fW())))
                        CO.XyF = !1,
                        ct.qF("LivePassConfigLoader", "use the primary config"),
                        fe.oy5(t.X5);
                    else {
                        var e = fe.bF(!1);
                        if (e == t.H1)
                            null != fe.I8 && fe.I8(n);
                        else {
                            ct.qF("LivePassConfigLoader", "loading backup config " + e);
                            var r = new EW;
                            0 != CO.knV && r.Yb("timeoutMs", oL.fg(CO.knV)),
                            fe.Tko = new nD(e,function(n, t) {
                                fe.XBL(n, t)
                            }
                            ,null,r)
                        }
                    }
                }, "ProcessPrimaryResponse")
            }
            function pt(n, t) {
                O9.Yv(function() {
                    null == n ? (CO.XyF = !0,
                    fe.oy5(t.X5)) : (ct.qF("LivePassConfigLoader", "loading the backup configuration failed"),
                    null != fe.I8 && fe.I8(n))
                }, "ProcessBackupResponse")
            }
            function Dt(n) {
                ct.qF("LivePassConfigLoader", "updateConfigXml");
                var t = void 0;
                t = n.fW(),
                null != t ? (fe.lQv = uPJ.Y_(t),
                O9.Yv(fe.A1, "LPConfigLoader.HandleNewConfig")) : SH.z2("LivePassConfigLoader newConfigDoc==null")
            }
            function Vt() {
                if (null != fe.lQv) {
                    var n = CO.Ykc(fe.lQv);
                    if (!fe.qun(fe.lQv)) {
                        var t = "LivePassConfigLoader.HandleNewConfig:Got an invalid livePassConfig ";
                        return O9.rV() < .001 && (t += "doc=" + fe.lQv.vo(),
                        t = oL.n0(t, 0, 1e3)),
                        void O9.Ep(t, !0)
                    }
                    if (n)
                        fe.G4D = fe.lQv;
                    else {
                        null == fe.bB && (fe.bB = fe.hc()),
                        fe.G4D = fe.lQv.Im(fe.bB);
                        var e = fe.G4D.ixD("alternative").Bt;
                        if (1 != e) {
                            var r = "LivePassConfigLoader.processConfigXML:Did not find exactly one alternative. alt=" + oL.fg(fe.bB) + ", count=" + e;
                            O9.rV() < .001 && (r += "doc=" + fe.lQv.vo(),
                            r = oL.n0(r, 0, 1e3)),
                            O9.Ep(r, !0)
                        }
                    }
                    if (CO.dgH || n)
                        fe.KS = 0;
                    else {
                        fe.KS = 0;
                        try {
                            var o = "";
                            o = fe.G4D.SX("ccsWallTimeSec"),
                            null != o && (fe.KS = 1e3 * oL.iGL(o))
                        } catch (i) {}
                    }
                    if (!n)
                        try {
                            CO.S9x = VW.tn(fe.G4D.SX("serviceConfigVersion"))
                        } catch (i) {}
                    null != CO.U7B && (CO.czI = fe.G4D.SX("service")),
                    fe.KQN = 0,
                    fe.DJT(VW.Je)
                }
            }
            function Tt(n) {
                CO.K45 = fe.Gv("pingRatePercent", "value", CO.U0n),
                CO.LDt = fe.UZr("lzmaEnabled", "value", CO.Ozf);
                for (var t = !1; n > 0 && !t; ) {
                    switch (fe.KQN) {
                    case 0:
                        fe.ZE = fe.Gv("heartbeatIntervalMs", "value", CO.ku),
                        fe.ZE = fe.Gv("heartbeatInterval", "msecs", fe.ZE),
                        fe.dp = fe.Gv("heartbeatIntervalLightMs", "value", fe.ZE),
                        fe.wV = fe.Gv("heartbeatIntervalUrgentFullMs", "value", CO.WC),
                        fe.__ = fe.Gv("heartbeatIntervalUrgentLightMs", "value", CO.WC),
                        fe.PQ = fe.Gv("heartbeatIntervalPauseMs", "value", fe.ZE),
                        fe.Jy = fe.Gv("initSelectResourceIntervalMs", "value", CO.LP),
                        fe.c2 = fe.Gv("selectResourceIntervalMs", "value", CO.ql),
                        fe.c2 = fe.Gv("selectResourceInterval", "msecs", fe.c2),
                        fe.Tl = fe.SX("protocolVersion", "value", CO.e3),
                        fe.Tl = fe.SX("protocolVersion", "ver", fe.Tl);
                        var e = fe.Gv("refreshIntervalSec", "value", CO.fa);
                        e = fe.Gv("refreshInterval", "secs", e),
                        1e3 * e != fe.lY && (fe.lY = 1e3 * e,
                        null != fe.gF && (fe.gF.wy(),
                        fe.L9(fe.lY)));
                        var r = fe.Gv("maxPlayerPausedIntervalSec", "value", CO.uF);
                        r = fe.Gv("maxPlayerPausedIntervalSec", "secs", r),
                        CO._B = 1e3 * r;
                        break;
                    case 1:
                        var o = fe.Gv("maxPlayerBufferingIntervalSec", "value", CO.N0);
                        o = fe.Gv("maxPlayerBufferingIntervalSec", "secs", o),
                        CO.Wh = 1e3 * o;
                        var i = fe.Gv("maxPlayerStoppedIntervalSec", "value", CO.zS);
                        i = fe.Gv("maxPlayerStoppedIntervalSec", "secs", i),
                        CO.OU = 1e3 * i;
                        var u = fe.Gv("minStartStopIntervalMs", "value", CO.Ou_);
                        CO.WVf = u;
                        var f = fe.Gv("phtStopThresholdSec", "value", CO.cgp);
                        CO.ukx = f;
                        var a = fe.Gv("urlGeneratorTimeoutSec", "value", CO.Fn5);
                        CO.nup = a;
                        var v = fe.Gv("traceOnSwitchDurationThresholdSec", "value", CO.S4t);
                        CO.B33 = v;
                        var l = fe.Gv("maxSwitchLockTimeSec", "value", CO.J2);
                        CO.ln = 1e3 * l,
                        CO.fZ = "true" == fe.SX("fastSwitchUpEnabled", "value", "false"),
                        CO.jUw = "true" == fe.SX("play2Disabled", "value", "false"),
                        CO.Ze = "true" == fe.SX("unpublishNotifyEnabled", "value", "true"),
                        CO.NUU = "true" == fe.SX("playStopEnabled", "value", CO.MjM),
                        CO.Ix = "true" == fe.SX("recoverForByteRuleEnabled", "value", "true");
                        break;
                    case 2:
                        CO.a3 = "true" == fe.SX("lazySwitchLockEnabled", "value", "false"),
                        CO.MPH = "true" == fe.SX("bytesLoadedSwitchDownEnabled", "value", "true"),
                        fe.PMc = fe.UZr("syncModeEnabled", "value", !0),
                        CO.sNi = fe.lHg("livePlay2StartTimeoutSec", "value", CO.Nee),
                        CO.Srw = fe.Gv("resourceSwitchDampenIntervalSec", "value", CO.L9P),
                        CO._CK = fe.Gv("bytesLoadedWindowMs", "value", CO.wg9),
                        CO.MOU = fe.Gv("switchControlCheckIntervalMs", "value", CO.VpK),
                        CO.OVq = fe.Gv("frameDropRatioMediumThreshold", "value", CO.dVe),
                        CO.LxP = fe.Gv("liveLazySwitchBufferLengthThresholdMs", "value", CO.Uid),
                        CO.JLC = fe.Gv("vodLazySwitchBufferLengthThresholdMs", "value", CO.rN9),
                        CO.bg9 = fe.Gv("httpLiveLazySwitchBufferLengthThresholdMs", "value", CO.YQr),
                        CO.s2s = fe.Gv("httpVodLazySwitchBufferLengthThresholdMs", "value", CO.fVg),
                        CO.Vfx = fe.Gv("baseRecoveryWaitTimeMs", "value", CO.emZ),
                        CO.q5j = fe.Gv("recoveryWaitBackoffRate", "value", CO.iXJ),
                        CO.OHC = fe.Gv("maxRecoveryWaitTimeMs", "value", CO.q_u),
                        CO.pJ4 = fe.Gv("baseSwitchLockTimeMs", "value", CO.UAc);
                        break;
                    case 3:
                        CO.hJk = fe.Gv("switchLockBackoffRate", "value", CO.ZLI),
                        CO.uzA = fe.Gv("bufferTrendExtrapolationTimeMs", "value", CO.MSg),
                        CO.Dq4 = fe.Gv("liveBufferTrendExtrapolationTimeMs", "value", CO.yPU);
                        var c = fe.Gv("flashAccessPingPct", "value", CO.h4A);
                        CO.kxN = c / 100;
                        var C = fe.Gv("maxPlayerErrorIntervalSec", "value", CO.vg);
                        C = fe.Gv("maxPlayerErrorIntervalSec", "secs", C),
                        CO.HQ = 1e3 * C,
                        CO.zHg = fe.SX("abName", "value", CO.Kox);
                        var s = fe.Gv("bandwidthMbrSafetyPct", "value", CO.K84);
                        CO.Qpn = s / 100,
                        CO.eKR = "true" == fe.SX("flashAccessModuleDownloadEnabled", "value", "true"),
                        CO.GAq = "true" == fe.SX("fakeBufferFullEnabled", "value", "true");
                        var O = fe.Gv("maxPlayerNotMonitoredIntervalSec", "value", CO.Mu);
                        O = fe.Gv("maxPlayerNotMonitoredIntervalSec", "secs", O),
                        CO.mz = 1e3 * O,
                        CO.OQ = fe.Gv("maxLiveControlBufferEvent", "value", CO.rH),
                        CO.D2 = fe.lHg("maxLiveControlDurationSec", "value", CO.Oi),
                        CO.xb = fe.lHg("maxLiveControlBufferingTimeSec", "value", CO.qz0),
                        CO.ur = fe.lHg("maxLiveControlInitBufferingTimeSec", "value", CO.NYf);
                        break;
                    case 4:
                        CO.CPP = fe.lHg("maxVodControlBufferingTimeSec", "value", CO.eD8),
                        CO.MOY = fe.lHg("maxVodControlInitBufferingTimeSec", "value", CO.F5Q),
                        CO.YrT = fe.lHg("maxZeriControlBufferingTimeSec", "value", CO.Z1d),
                        CO.MW = fe.Gv("liveBufferTimeSec", "value", CO.ao),
                        CO.nP = 1e3 * fe.Gv("bwUpdateIntervalSec", "value", CO.qS),
                        CO.P5 = 1e3 * fe.Gv("tokenExpiredIntervalSec", "value", CO.CH),
                        CO.dj = "true" == fe.SX("connectionRacerMemoryEnabled", "value", "false"),
                        CO.tz = fe.Gv("ConfigLoadIgnoreSec", "value", CO.o7),
                        CO.uI = fe.Gv("frameDropRatioThreshold", "value", CO.rA),
                        fe.dB = fe.Gv("joinHbDelayMs", "value", CO.gk),
                        fe.nT6 = "true" == fe.SX("keepAliveEnabled", "value", "true"),
                        fe.D2N = fe.Gv("keepAliveSecs", "value", CO.PGP),
                        fe.ZOv = fe.UZr("nominalBitrateOverrideEnabled", "value", !1),
                        CO.r0D = fe.Gv("maxRepeatedEventAgeMs", "value", CO.M76),
                        CO._PF = fe.Gv("maxRepeatedEventsPerSessInfo", "value", CO.UUz);
                        break;
                    case 5:
                        CO.Eii = fe.Gv("fcSubscribeTryTimes", "value", CO.BPn),
                        CO.AKr = fe.SX("fcSubscribeUrlRegex", "value", CO.IhZ),
                        CO.JLS = fe.UZr("inferPlayingStateFromFramerate", "value", CO.xXe),
                        CO.wuk = fe.UZr("netStreamInfoEnabled", "value", CO.you),
                        CO.CVM = fe.UZr("convivaBwMeasurementEnabled", "value", CO.Nbp),
                        CO.QPE = fe.Gv("chunkRecoveryCheckIntervalSec", "value", CO.avT),
                        CO.ti_ = fe.UZr("disableFullChunkReport", "value", CO.DNM),
                        CO.GOJ = fe.UZr("isCachedChunkCountedForBwMeasurement", "value", CO.LbH),
                        CO.Gc2 = fe.Gv("chunkRecoveryBufferLengthProvisionPercent", "value", CO.GfX),
                        CO.mAR = fe.Gv("vodBufferTimeMs", "value", CO.gOO),
                        CO.Gwm = fe.Gv("switchControlImpl", "value", CO.xTh),
                        CO.Zgo = fe.UZr("useHistBwAtStart", "value", CO.pvY),
                        CO.L4E = fe.Gv("manifestTimeoutMs", "value", CO.GO1),
                        CO.rET = fe.UZr("precisionServerEnabled", "value", CO.cEQ),
                        CO.X8Z = fe.Gv("hdsAudioChunkFailureLockTimeMs", "value", CO.XMl),
                        CO.VaV = fe.Gv("hdsAudioChunkDownloadTimeoutMs", "value", CO.mNd);
                        break;
                    case 6:
                        CO.vI5 = fe.UZr("stageVideoEnabled", "value", CO.fiE);
                        var d = fe.Gv("httpBandwidthMbrSafetyPct", "value", CO.BQT);
                        CO.Vmh = d / 100,
                        CO.d3v = fe.Gv("httpFrameDropRatioThreshold", "value", CO.kYV),
                        CO.oAN = fe.Gv("httpFrameDropRatioMediumThreshold", "value", CO.gt3),
                        CO.uLH = fe.Gv("httpBaseSwitchLockTimeMs", "value", CO.URj);
                        var S = fe.Gv("httpMaxSwitchLockTimeSec", "value", CO.ke0);
                        CO.kTO = 1e3 * S,
                        CO.qvB = fe.Gv("httpSwitchLockBackoffRate", "value", CO.Jh6),
                        CO.IjK = fe.Gv("httpVodBufferTimeMs", "value", CO.P1j),
                        CO.jf9 = fe.Gv("httpLiveBufferTimeSec", "value", CO.nkp),
                        CO.zAe = fe.Gv("httpLiveMinimumOffsetSec", "value", CO.KRY),
                        CO.bgo = fe.UZr("disableMonStats", "value", CO.pul),
                        CO.gpk = fe.Gv("stitchingMinKeyFrames", "value", CO.apT),
                        CO.LhM = fe.SX("hlsKeyToken", "value", CO.MMn),
                        CO.HVK = fe.Gv("liveSwitchUpMinBufferLengthMs", "value", CO.dmA),
                        CO.pwK = fe.Gv("vodSwitchUpMinBufferLengthMs", "value", CO.I8f);
                        break;
                    case 7:
                        CO.CVl = fe.UZr("alignedHls", "value", CO.ort),
                        CO.lJy = fe.UZr("ignoreDroppedFramesIfHidden", "value", CO.TR3),
                        CO.cSA = fe.UZr("enforcePrecision", "value", CO.nIp),
                        CO.lse = fe.Gv("httpMaxBufferLengthMs", "value", CO.Po0),
                        CO._rL = fe.UZr("httpOverrideExternalBufferTime", "value", CO.tTm),
                        CO.Sbo = fe.Gv("stitchingToleranceMs", "value", CO.isR),
                        CO.sO2 = fe.Gv("hlsPlaylistMinReloadDelayMs", "value", CO.j1S),
                        CO.CI9 = fe.UZr("hlsPlaylistFastReload", "value", CO.r5n),
                        CO.ErO = fe.UZr("hlsGuessSequenceNumber", "value", CO.uel),
                        CO.niY = fe.UZr("hlsBestEffortEvents", "value", CO.AWX),
                        CO.dME = fe.UZr("precisionServerVodOnly", "value", CO.HgL),
                        CO.Jp5 = fe.UZr("rewriteAMFCuepointsTimestamps", "value", CO.tjl),
                        CO.A31 = fe.Gv("rtmpRangeSwitchMinBufferLengthMs", "value", CO.bqc),
                        CO.rpx = fe.UZr("switchControlIgnoreChunkDuration", "value", CO.joD);
                        break;
                    default:
                        t = !0
                    }
                    n--,
                    fe.KQN++
                }
                t && (fe.KQN = 0,
                null != fe.Xv && fe.Xv._o())
            }
            function Mt() {
                var n = null;
                n = "jsModulePath";
                var t = new Yw;
                if (null == fe.G4D)
                    return t;
                for (var e = fe.G4D.ixD(n), r = e.YC, o = 0; o < r.length; o++) {
                    var i = r[o]
                      , u = void 0;
                    "" != i.XTo.textContent ? u = i.XTo.textContent : i.tc() && (u = i.tc()),
                    t.Yb(u)
                }
                return t
            }
            function _t() {
                return fe.G4D.ixD("gateway")
            }
            function At() {
                for (var n = new Yw, t = void 0, e = fe.lQv.ixD("alternative"), r = e.YC, o = 0; o < r.length; o++) {
                    var i = r[o];
                    t = new Uf,
                    t.bL = i.I8_(),
                    t.ns = i.deB(),
                    t.ns > 0 && n.Yb(t)
                }
                for (var u = 0, f = n.YC, a = 0; a < f.length; a++) {
                    var v = f[a];
                    u += v.ns
                }
                for (var l = O9.rV() * u, c = n.YC, C = 0; C < c.length; C++) {
                    var s = c[C];
                    if (l -= s.ns,
                    l <= 0)
                        return s.bL
                }
                return null
            }
            function Zt(n, t, e) {
                if (null != CO.ng && CO.ng.Wt(n))
                    return CO.ng.tc(n);
                var r = e;
                try {
                    var o = fe.G4D.ixD(n);
                    if (null != o && o.Bt > 0) {
                        var i = o.tc(0);
                        r = i.SX(t),
                        null == r && (r = e)
                    }
                } catch (u) {}
                return r
            }
            function Ut(n, t, e) {
                var r = e;
                try {
                    r = VW.tn(fe.SX(n, t, oL.fg(e)))
                } catch (o) {}
                return r
            }
            function Ht(n, t, e) {
                var r = fe.SX(n, t, null);
                return null == r ? e : "true" == r
            }
            function bt(n) {
                fe.Xv.q_(n)
            }
            function Bt(n) {
                null != fe.Xv && fe.Xv.X8(n)
            }
            function Ft(n) {
                null != fe.gF && fe.gF.wy(),
                fe.gF = new Lt(n,fe.Tb,"LivePassConfigLoader.LoadConfigGeneral")
            }
            function xt(n, t, e) {
                var r = e;
                try {
                    r = n4.tn(fe.SX(n, t, oL.fg(e)))
                } catch (o) {}
                return r
            }
            function Rt(n, t, e) {
                var r = e;
                try {
                    var o = fe.SX(n, t, null);
                    null != o && (r = 1e3 * VW.tn(o))
                } catch (i) {}
                return r
            }
            function Yt(n) {
                var t = fe.bF(!0);
                oL.w_(t, "?") >= 0 && (t = oL.n0(t, 0, oL.w_(t, "?"))),
                n.a9("LivePass.configUrl", t),
                n.a9("LivePass.uuid", gV.eSE()),
                n.a9("LivePass.pingId", oL.fg(SH.Jl))
            }
            function Qt(n) {
                return null != n && "livePassConfig" == n.u_j()
            }
            function Wt(n, t) {
                var e = void 0;
                for (e = n; e.length < t; e = "0" + e)
                    ;
                return e
            }
            function Gt(n, t, e, r) {
                var o = ""
                  , i = ""
                  , u = ""
                  , f = void 0
                  , a = void 0
                  , v = 0 == oL.w_(n, "https") ? "https://" : "http://";
                null != e && "" != e ? o = e + "/" : (o += v,
                o += CO.yG3,
                o += t + "/"),
                u = "telemetry" == r ? o + "LivePassModuleMain_telemetry.swf" : "osmf" == r ? o + "LivePassModuleMain_osmf.swf" : "osmf_aes" == r ? o + "LivePassModuleMain_osmf_aes.swf" : o + "LivePassModuleMain.swf",
                f = o + "LivePassModuleMain.dll",
                a = o + "LivePassModuleMain.js";
                for (var l = 0; l < 100; l++)
                    i += "\t\t\t<gateway protocolVersision='0' loadState='available'>" + v + "gw" + CO.fUC(oL.fg(l), 3) + ".lphbs.com</gateway>\n";
                CO.LUW = "<livePassConfig isFakeConfig='true'>\n                              \t<common>\n                              \t\t<gateways>\n" + i + "</gateways>\n\t\t<modulePath>" + u + "</modulePath>\n\t\t<silverModulePath>" + f + "</silverModulePath>\n\t\t<jsModulePath>" + a + "</jsModulePath>\t</common>\n                             </livePassConfig>"
            }
            function qt(n) {
                return "true" == n.SX("isFakeConfig")
            }
            function Kt() {
                var n = void 0;
                null != CO.b9 ? n = CO.b9 : (n = "<livePassConfig><common></common><alternative name='base' affinity='100'></alternative></livePassConfig>",
                CO.b9 = n),
                CO.Z2("", "", n, !1)
            }
            function kt() {
                fe.bB = null,
                CO.dgH = !0,
                fe.A1(),
                CO.dgH = !1
            }
            function Xt() {
                return fe.bF(!0)
            }
            function zt() {
                return fe.bF(!1)
            }
            function Jt() {
                return fe.sHG
            }
            function $t() {
                return fe.bB
            }
            function ne(n) {
                CO.b9 = n,
                fe.lQv = uPJ.orQ(n),
                fe.A1()
            }
            function te() {
                null != CO.POc && CO.POc.ec() && CO.POc.Tb()
            }
            function ee() {
                CO.ng = null,
                CO.dgH = !0,
                null != CO.POc && CO.POc.ec() && CO.POc.A1(),
                CO.dgH = !1
            }
            function re(n, t) {
                null == CO.ng && (CO.ng = new EW),
                CO.ng.a9(n, t),
                CO.dgH = !0,
                null != CO.POc && CO.POc.ec() && CO.POc.A1(),
                CO.dgH = !1
            }
            function oe(n) {
                CO.wA = n
            }
            function ie(n) {
                CO.knV = n
            }
            function ue() {
                return CO.XyF
            }
            var fe = this;
            fe != fj && (fe.Xv = void 0),
            fe == fj && (CO.fa = 300),
            fe != fj && (fe.lY = 1e3 * CO.fa),
            ED(fe, "kw", n),
            fe == fj && (CO.ku = 2e4),
            fe != fj && (fe.ZE = CO.ku),
            ED(fe, "Yo", t),
            fe == fj && (CO.g0t = -1),
            fe != fj && (fe.dp = CO.g0t),
            ED(fe, "W1", e),
            fe == fj && (CO.WC = 2e3),
            fe != fj && (fe.wV = CO.WC),
            ED(fe, "bD", r),
            fe != fj && (fe.__ = CO.WC),
            ED(fe, "aa", o),
            fe == fj && (CO.wmb = -1),
            fe != fj && (fe.PQ = CO.wmb),
            ED(fe, "Mi", i),
            fe == fj && (CO.FT6 = 1e4),
            fe != fj && (fe.nk1 = CO.FT6),
            ED(fe, "UV9", u),
            fe == fj && (CO.LP = 800),
            fe != fj && (fe.Jy = CO.LP),
            ED(fe, "O2", f),
            fe == fj && (CO.ql = 4e4),
            fe != fj && (fe.c2 = CO.ql),
            ED(fe, "C3", a),
            fe == fj && (CO.e3 = "0"),
            fe != fj && (fe.Tl = CO.e3),
            ED(fe, "PH", v),
            fe == fj && (CO.uF = 600),
            fe == fj && (CO._B = 1e3 * CO.uF),
            Va(fe, CO, "dy", l),
            fe == fj && (CO.N0 = 300),
            fe == fj && (CO.Wh = 1e3 * CO.N0),
            Va(fe, CO, "E6", c),
            fe == fj && (CO.zS = 30),
            fe == fj && (CO.OU = 1e3 * CO.zS),
            Va(fe, CO, "fN", C),
            fe == fj && (CO.vg = 30),
            fe == fj && (CO.HQ = 1e3 * CO.vg),
            Va(fe, CO, "xn", s),
            fe == fj && (CO.Kox = ""),
            fe == fj && (CO.zHg = CO.Kox),
            Va(fe, CO, "kd9", O),
            fe == fj && (CO.K84 = 110),
            fe == fj && (CO.Qpn = CO.K84 / 100),
            Va(fe, CO, "xCh", d),
            fe == fj && (CO.eKR = !0),
            Va(fe, CO, "n4C", S),
            fe == fj && (CO.GAq = !0),
            Va(fe, CO, "Cwv", h),
            fe == fj && (CO.cgp = 10),
            fe == fj && (CO.ukx = CO.cgp),
            Va(fe, CO, "vOF", m),
            fe == fj && (CO.Fn5 = -1),
            fe == fj && (CO.nup = CO.Fn5),
            Va(fe, CO, "ayU", j),
            fe == fj && (CO.Ou_ = -1),
            fe == fj && (CO.WVf = CO.Ou_),
            Va(fe, CO, "N0l", E),
            fe == fj && (CO.S4t = 60),
            fe == fj && (CO.B33 = CO.S4t),
            Va(fe, CO, "wq2", g),
            fe == fj && (CO.J2 = 1200),
            fe == fj && (CO.ln = 1e3 * CO.J2),
            Va(fe, CO, "Qw", I),
            fe == fj && (CO.Ix = !0),
            Va(fe, CO, "U5", N),
            fe == fj && (CO.Ze = !0),
            Va(fe, CO, "ex", L),
            fe == fj && (CO.MjM = "true"),
            fe == fj && (CO.NUU = "true" == CO.MjM),
            Va(fe, CO, "Qn3", P),
            fe == fj && (CO.jUw = !1),
            Va(fe, CO, "rbL", w),
            fe == fj && (CO.fZ = !1),
            Va(fe, CO, "pY", y),
            fe == fj && (CO.a3 = !1),
            Va(fe, CO, "wh", p),
            fe == fj && (CO.MPH = !0),
            Va(fe, CO, "Ugx", D),
            fe != fj && (fe.PMc = !0),
            ED(fe, "uKm", V),
            fe == fj && (CO.Nee = 8e3),
            fe == fj && (CO.sNi = CO.Nee),
            Va(fe, CO, "CGD", T),
            fe == fj && (CO.L9P = 300),
            fe == fj && (CO.Srw = CO.L9P),
            Va(fe, CO, "v9u", M),
            fe == fj && (CO.wg9 = 7e3),
            fe == fj && (CO._CK = CO.wg9),
            Va(fe, CO, "Wj1", _),
            fe == fj && (CO.VpK = 500),
            fe == fj && (CO.MOU = CO.VpK),
            Va(fe, CO, "Bwj", A),
            fe == fj && (CO.dVe = 10),
            fe == fj && (CO.OVq = CO.dVe),
            Va(fe, CO, "cWG", Z),
            fe == fj && (CO.Uid = 4e3),
            fe == fj && (CO.LxP = CO.Uid),
            Va(fe, CO, "tOm", U),
            fe == fj && (CO.rN9 = 15e3),
            fe == fj && (CO.JLC = CO.rN9),
            Va(fe, CO, "FnO", H),
            fe == fj && (CO.YQr = 15e3),
            fe == fj && (CO.bg9 = CO.YQr),
            Va(fe, CO, "o39", b),
            fe == fj && (CO.fVg = 15e3),
            fe == fj && (CO.s2s = CO.fVg),
            Va(fe, CO, "EXv", B),
            fe == fj && (CO.emZ = 4e3),
            fe == fj && (CO.Vfx = CO.emZ),
            Va(fe, CO, "T90", F),
            fe == fj && (CO.iXJ = 2),
            fe == fj && (CO.q5j = CO.iXJ),
            Va(fe, CO, "SJR", x),
            fe == fj && (CO.q_u = 12e4),
            fe == fj && (CO.OHC = CO.q_u),
            Va(fe, CO, "HVc", R),
            fe == fj && (CO.UAc = 6e5),
            fe == fj && (CO.pJ4 = CO.UAc),
            Va(fe, CO, "Vv0", Y),
            fe == fj && (CO.ZLI = 2),
            fe == fj && (CO.hJk = CO.ZLI),
            Va(fe, CO, "BBC", Q),
            fe == fj && (CO.MSg = 15e3),
            fe == fj && (CO.uzA = CO.MSg),
            Va(fe, CO, "qCz", W),
            fe == fj && (CO.yPU = 1e4),
            fe == fj && (CO.Dq4 = CO.yPU),
            Va(fe, CO, "UtC", G),
            fe == fj && (CO.h4A = 0),
            fe == fj && (CO.kxN = CO.h4A / 100),
            Va(fe, CO, "tGr", q),
            fe == fj && (CO.Mu = 600),
            fe == fj && (CO.mz = 1e3 * CO.Mu),
            Va(fe, CO, "n_", K),
            fe == fj && (CO.rH = 15),
            fe == fj && (CO.OQ = CO.rH),
            Va(fe, CO, "p7", k),
            fe == fj && (CO.Oi = 3e4),
            fe == fj && (CO.D2 = CO.Oi),
            Va(fe, CO, "VU", X),
            fe == fj && (CO.qz0 = 7e3),
            fe == fj && (CO.xb = CO.qz0),
            Va(fe, CO, "vS", z),
            fe == fj && (CO.NYf = 11e3),
            fe == fj && (CO.ur = CO.NYf),
            Va(fe, CO, "vJ", J),
            fe == fj && (CO.eD8 = 3e3),
            fe == fj && (CO.CPP = CO.eD8),
            Va(fe, CO, "ib5", $),
            fe == fj && (CO.F5Q = 1e4),
            fe == fj && (CO.MOY = CO.F5Q),
            Va(fe, CO, "tE1", nn),
            fe == fj && (CO.Z1d = 1e3),
            fe == fj && (CO.YrT = CO.Z1d),
            Va(fe, CO, "kev", tn),
            fe == fj && (CO.qS = 10),
            fe == fj && (CO.nP = 1e3 * CO.qS),
            Va(fe, CO, "yK", en),
            fe == fj && (CO.ao = 5),
            fe == fj && (CO.MW = CO.ao),
            Va(fe, CO, "j8", rn),
            fe == fj && (CO.CH = 30),
            fe == fj && (CO.P5 = 1e3 * CO.CH),
            Va(fe, CO, "Lc", on),
            fe == fj && (CO.rA = 25),
            fe == fj && (CO.uI = CO.rA),
            Va(fe, CO, "LY", un),
            fe == fj && (CO.o7 = 7),
            fe == fj && (CO.tz = CO.o7),
            Va(fe, CO, "vC", fn),
            fe == fj && (CO.dj = !1),
            Va(fe, CO, "D5", an),
            fe == fj && (CO.gk = 2e4),
            fe != fj && (fe.dB = CO.gk),
            ED(fe, "hJ", vn),
            fe != fj && (fe.nT6 = !0),
            ED(fe, "mSk", ln),
            fe == fj && (CO.PGP = 200),
            fe != fj && (fe.D2N = CO.PGP),
            ED(fe, "ZVW", cn),
            fe != fj && (fe.ZOv = !1),
            ED(fe, "xz0", Cn),
            fe == fj && (CO.M76 = 9e4),
            fe == fj && (CO.r0D = CO.M76),
            Va(fe, CO, "eon", sn),
            fe == fj && (CO.UUz = 6),
            fe == fj && (CO._PF = CO.UUz),
            Va(fe, CO, "PmJ", On),
            fe == fj && (CO.BPn = 3),
            fe == fj && (CO.Eii = CO.BPn),
            Va(fe, CO, "uE8", dn),
            fe == fj && (CO.IhZ = "llnwd\\.net"),
            fe == fj && (CO.AKr = CO.IhZ),
            Va(fe, CO, "k48", Sn),
            fe == fj && (CO.pul = !0),
            fe == fj && (CO.bgo = CO.pul),
            Va(fe, CO, "hIA", hn),
            fe == fj && (CO.xXe = !0),
            fe == fj && (CO.JLS = CO.xXe),
            Va(fe, CO, "G1r", mn),
            fe == fj && (CO.you = !0),
            fe == fj && (CO.wuk = CO.you),
            Va(fe, CO, "N7P", jn),
            fe == fj && (CO.Nbp = !1),
            fe == fj && (CO.CVM = CO.Nbp),
            Va(fe, CO, "lHo", En),
            fe == fj && (CO.GfX = 50),
            fe == fj && (CO.Gc2 = CO.GfX),
            Va(fe, CO, "xIL", gn),
            fe == fj && (CO.DNM = !0),
            fe == fj && (CO.ti_ = CO.DNM),
            Va(fe, CO, "fJ8", In),
            fe == fj && (CO.LbH = !0),
            fe == fj && (CO.GOJ = CO.LbH),
            Va(fe, CO, "RwB", Nn),
            fe == fj && (CO.avT = 3),
            fe == fj && (CO.QPE = CO.avT),
            Va(fe, CO, "JdX", Ln),
            fe == fj && (CO.gOO = 100),
            fe == fj && (CO.mAR = CO.gOO),
            Va(fe, CO, "IB2", Pn),
            fe == fj && (CO.xTh = 1),
            fe == fj && (CO.Gwm = CO.xTh),
            Va(fe, CO, "Ojc", wn),
            fe == fj && (CO.pvY = !0),
            fe == fj && (CO.Zgo = CO.pvY),
            Va(fe, CO, "scs", yn),
            fe == fj && (CO.GO1 = 5e3),
            fe == fj && (CO.L4E = CO.GO1),
            Va(fe, CO, "tTS", pn),
            fe == fj && (CO.cEQ = !1),
            fe == fj && (CO.rET = CO.cEQ),
            Va(fe, CO, "RY2", Dn),
            fe == fj && (CO.XMl = 4e3),
            fe == fj && (CO.X8Z = CO.XMl),
            Va(fe, CO, "UA7", Vn),
            fe == fj && (CO.mNd = 6e3),
            fe == fj && (CO.VaV = CO.mNd),
            Va(fe, CO, "J95", Tn),
            fe == fj && (CO.fiE = !1),
            fe == fj && (CO.vI5 = CO.fiE),
            Va(fe, CO, "xOJ", Mn),
            fe == fj && (CO.BQT = 120),
            fe == fj && (CO.Vmh = CO.BQT / 100),
            Va(fe, CO, "Tbb", _n),
            fe == fj && (CO.kYV = 100),
            fe == fj && (CO.d3v = CO.kYV),
            Va(fe, CO, "wuv", An),
            fe == fj && (CO.gt3 = 100),
            fe == fj && (CO.oAN = CO.gt3),
            Va(fe, CO, "xKE", Zn),
            fe == fj && (CO.URj = 6e4),
            fe == fj && (CO.uLH = CO.URj),
            Va(fe, CO, "P_m", Un),
            fe == fj && (CO.ke0 = 120),
            fe == fj && (CO.kTO = 1e3 * CO.ke0),
            Va(fe, CO, "DVd", Hn),
            fe == fj && (CO.Jh6 = 2),
            fe == fj && (CO.qvB = CO.Jh6),
            Va(fe, CO, "lWO", bn),
            fe == fj && (CO.P1j = 1e3),
            fe == fj && (CO.IjK = CO.P1j),
            Va(fe, CO, "NYy", Bn),
            fe == fj && (CO.nkp = 5),
            fe == fj && (CO.jf9 = CO.nkp),
            Va(fe, CO, "t0Z", Fn),
            fe == fj && (CO.KRY = 30),
            fe == fj && (CO.zAe = CO.KRY),
            Va(fe, CO, "max", xn),
            fe == fj && (CO.Ve0 = 0),
            fe == fj && (CO.S9x = CO.Ve0),
            Va(fe, CO, "z4C", Rn),
            fe == fj && (CO.apT = 1),
            fe == fj && (CO.gpk = CO.apT),
            Va(fe, CO, "Yqi", Yn),
            fe == fj && (CO.MMn = ""),
            fe == fj && (CO.LhM = CO.MMn),
            Va(fe, CO, "XHx", Qn),
            fe == fj && (CO.dmA = 7e3),
            fe == fj && (CO.HVK = CO.dmA),
            Va(fe, CO, "yAy", Wn),
            fe == fj && (CO.I8f = 7e3),
            fe == fj && (CO.pwK = CO.I8f),
            Va(fe, CO, "hs7", Gn),
            fe == fj && (CO.ort = !1),
            fe == fj && (CO.CVl = CO.ort),
            Va(fe, CO, "Bpl", qn),
            fe == fj && (CO.TR3 = !1),
            fe == fj && (CO.lJy = CO.TR3),
            Va(fe, CO, "ZKN", Kn),
            fe == fj && (CO.nIp = !1),
            fe == fj && (CO.cSA = CO.nIp),
            Va(fe, CO, "ZuQ", kn),
            fe == fj && (CO.tTm = !1),
            fe == fj && (CO._rL = CO.tTm),
            Va(fe, CO, "CM5", Xn),
            fe == fj && (CO.isR = 500),
            fe == fj && (CO.Sbo = CO.isR),
            Va(fe, CO, "HkQ", zn),
            fe == fj && (CO.Po0 = 6e4),
            fe == fj && (CO.lse = CO.Po0),
            Va(fe, CO, "wgx", Jn),
            fe == fj && (CO.j1S = 2e3),
            fe == fj && (CO.sO2 = CO.j1S),
            Va(fe, CO, "S3n", $n),
            fe == fj && (CO.r5n = !1),
            fe == fj && (CO.CI9 = CO.r5n),
            Va(fe, CO, "LhW", nt),
            fe == fj && (CO.uel = !1),
            fe == fj && (CO.ErO = CO.uel),
            Va(fe, CO, "baf", tt),
            fe == fj && (CO.AWX = !1),
            fe == fj && (CO.niY = CO.AWX),
            Va(fe, CO, "ROn", et),
            fe == fj && (CO.HgL = !1),
            fe == fj && (CO.dME = CO.HgL),
            Va(fe, CO, "q8r", rt),
            fe == fj && (CO.tjl = !1),
            fe == fj && (CO.Jp5 = CO.tjl),
            Va(fe, CO, "YV4", ot),
            fe == fj && (CO.bqc = 0),
            fe == fj && (CO.A31 = CO.bqc),
            Va(fe, CO, "WLs", it),
            fe == fj && (CO.joD = !1),
            fe == fj && (CO.rpx = CO.joD),
            Va(fe, CO, "qET", ut),
            fe != fj && (fe.lQv = void 0),
            fe != fj && (fe.G4D = void 0),
            fe != fj && (fe.f9 = void 0),
            fe != fj && (fe.Tko = void 0),
            fe != fj && (fe.h5 = void 0),
            fe != fj && (fe.WQ = void 0),
            fe != fj && (fe.I8 = void 0),
            fe == fj && (CO.BX = "livePassConfig.xml"),
            fe == fj && (CO.wA = CO.BX),
            fe != fj && (fe.bB = void 0),
            ED(fe, "iw", ft),
            fe != fj && (fe.KS = void 0),
            ED(fe, "Fm", at),
            fe == fj && (CO.U0n = 100),
            fe == fj && (CO.K45 = CO.U0n),
            Va(fe, CO, "_Uf", vt),
            fe == fj && (CO.Ozf = !1),
            fe == fj && (CO.LDt = CO.Ozf),
            Va(fe, CO, "jfb", lt),
            fe != fj && (fe.gF = void 0),
            fe == fj && (CO.POc = null),
            fe != fj && (fe.sHG = !1),
            fe != fj && (fe.KQN = void 0),
            fe == fj && (CO.JAS = 5e3),
            fe == fj && (CO.knV = CO.JAS),
            fe == fj && (CO.XyF = !1),
            fe == fj && (CO.yG3 = "livepassdl.conviva.com/module/"),
            fe == fj && (CO.LUW = void 0),
            LK(fe, "D_d", st),
            dN(fe, CO, "mR", Ot),
            dN(fe, CO, "xWy", dt),
            dN(fe, CO, "Z2", St),
            dN(fe, CO, "el", ht),
            dN(fe, CO, "bx", mt),
            OZ(fe, "wy", jt),
            LK(fe, "bF", Et),
            dN(fe, CO, "GK", gt),
            dN(fe, CO, "Tsf", It),
            dN(fe, CO, "C4c", Nt),
            ED(fe, "OP", Pt),
            OZ(fe, "Tb", wt),
            LK(fe, "we6", yt),
            LK(fe, "XBL", pt),
            LK(fe, "oy5", Dt),
            LK(fe, "A1", Vt),
            LK(fe, "DJT", Tt),
            OZ(fe, "Cv", Mt),
            OZ(fe, "hZ", _t),
            LK(fe, "hc", At),
            OZ(fe, "SX", Zt),
            OZ(fe, "Gv", Ut),
            OZ(fe, "UZr", Ht),
            OZ(fe, "Zu", bt),
            OZ(fe, "fA", Bt),
            LK(fe, "L9", Ft),
            OZ(fe, "J7", xt),
            OZ(fe, "lHg", Rt),
            OZ(fe, "YY", Yt),
            LK(fe, "qun", Qt),
            dN(fe, CO, "fUC", Wt),
            dN(fe, CO, "ngj", Gt),
            dN(fe, CO, "Ykc", qt),
            fe == fj && (CO.b9 = null),
            dN(fe, CO, "TNW", Kt),
            OZ(fe, "Rl", kt),
            OZ(fe, "PuR", Xt),
            OZ(fe, "IlM", zt),
            OZ(fe, "ec", Jt),
            OZ(fe, "CD", $t),
            OZ(fe, "dw", ne),
            dN(fe, CO, "xf", te),
            fe == fj && (CO.ng = null),
            dN(fe, CO, "S6", ee),
            dN(fe, CO, "kr", re),
            Z0(fe, CO, "yP", oe),
            fe == fj && (CO.dgH = !1),
            Z0(fe, CO, "Up3", ie),
            Va(fe, CO, "G_F", ue),
            fe == fj && (CO.grL = void 0),
            fe == fj && (CO.U7B = void 0),
            fe == fj && (CO.czI = void 0),
            fe != fj && Ct.apply(fe, arguments)
        }
        function Uf() {
            var n = this;
            n != fj && (n.bL = void 0),
            n != fj && (n.ns = void 0)
        }
        function Uj() {
            function n() {
                O9.FW("LivePassVersion: is an all-static class")
            }
            function t() {
                return Uj.bN + "." + Uj.ya
            }
            function e() {
                return Uj.BI + "." + Uj.tj + "." + Uj.pb
            }
            function r() {
                return Uj.bxs
            }
            var o = this;
            o == fj && (Uj.BI = 2),
            o == fj && (Uj.tj = 90),
            o == fj && (Uj.pb = 0),
            o == fj && (Uj.ya = 24127),
            o == fj && (Uj.bxs = "Conviva LivePass version 2.90.0.24127"),
            Va(o, Uj, "Re", t),
            Va(o, Uj, "bN", e),
            Va(o, Uj, "vWs", r),
            o != fj && n.apply(o, arguments)
        }
        function FFQ() {
            function n(n, t, e) {
                n[t] = e
            }
            function t() {
                return []
            }
            function e(n) {
                return n.length
            }
            function r(n, t) {
                n.push(t)
            }
            function o(n, t) {
                n.splice(t, 1)
            }
            function i(n, t) {
                return t[n]
            }
            function u(n, t) {
                var e = FFQ.Vf(n, t);
                return e ? e.toString() : null
            }
            var f = this;
            dN(f, FFQ, "dJN", n),
            dN(f, FFQ, "f1Z", t),
            dN(f, FFQ, "GGV", e),
            dN(f, FFQ, "MIl", r),
            dN(f, FFQ, "zHL", o),
            dN(f, FFQ, "Vf", i),
            dN(f, FFQ, "b3k", u)
        }
        function UU() {
            function Ij() {
                if (null == UU.zB || void 0 == UU.zB) {
                    UU.zB = {};
                    try {
                        var jV = localStorage.getItem(Xk);
                        void 0 != jV && null != jV && (UU.zB = eval("(" + jV + ")"))
                    } catch (fe) {}
                }
            }
            function J6() {
                var n = ""
                  , t = UU.FD();
                BW(t.YC, function(t) {
                    "" != n && (n += ","),
                    n += "'" + t + "':'" + UU.zB[t].toString() + "'"
                }),
                n = "{" + n + "}";
                try {
                    localStorage.setItem(Xk, n)
                } catch (e) {
                    return !1
                }
                return !0
            }
            var up = this
              , Xk = "convivaPersistent";
            UU.zB = null,
            UU.nr = function(n, t) {
                t()
            }
            ,
            UU.wy = function() {
                J6(),
                UU.zB = null
            }
            ,
            UU.hB = function(n) {
                return Ij(),
                UU.zB.hasOwnProperty(n)
            }
            ,
            UU.JQ = function(n) {
                return Ij(),
                UU.zB[n]
            }
            ,
            UU.jZ = function(n, t) {
                return Ij(),
                UU.zB.hasOwnProperty(n) ? UU.zB[n] : t
            }
            ,
            UU.yL = function(n, t) {
                return Ij(),
                UU.zB[n] = t,
                J6()
            }
            ,
            UU.Pp = function(n) {
                return Ij(),
                !!UU.zB.hasOwnProperty(n) && (delete UU.zB[n],
                J6(),
                !0)
            }
            ,
            UU.FD = function() {
                Ij();
                var n = [];
                for (var t in UU.zB)
                    UU.zB.hasOwnProperty(t) && n.push(t);
                return oL.js(n)
            }
            ,
            UU.EoO = function() {
                return !1
            }
            ,
            UU.TNW = function() {
                UU.nr(!0, function() {})
            }
        }
        function SH() {
            function n() {
                O9.FW("Ping: is an all-static class")
            }
            function t(n, t) {
                SH.L0 = n,
                SH.Bo = SH.Dm,
                SH.qQW = new EW,
                SH.ZD = t,
                SH.Q4 = !1,
                SH.LZ = new Yw,
                SH.JO = new Yw,
                SH.EL = null;
                var e = oL.w_(SH.Bo, "?");
                if (e < 0 ? SH.Bo = SH.Bo + "/ping.ping?" : SH.Bo = oL.n0(SH.Bo, 0, e) + "/ping.ping?" + oL.n0(SH.Bo, e + 1) + "&",
                0 == SH.L0)
                    try {
                        var r = UU.jZ(SH.a6, SH.L0)
                          , o = void 0;
                        o = r,
                        SH.L0 = n4.tn(o)
                    } catch (i) {}
                if (0 == SH.L0 && (SH.L0 = O9.bG(),
                0 == SH.L0 && SH.L0++),
                UU.yL(SH.a6, oL.fg(SH.L0)),
                SH.Bo += "uuid=" + oL.fg(SH.L0),
                SH.Bo += "&ver=" + Uj.Re,
                SH.Bo += "&comp=js",
                null != SH.ZD)
                    for (var u = SH.ZD.VO, f = 0; f < u.length; f++) {
                        var a = u[f];
                        SH.Bo += "&" + O9.oN(a) + "=" + O9.oN(SH.ZD.tc(a))
                    }
            }
            function e() {
                null != SH.EL && (Lt.Te(SH.EL),
                SH.EL = null),
                SH.Bo = null,
                SH.cV && (SH.cV.wy(),
                SH.cV = null),
                SH.LZ = null,
                SH.JO = null,
                SH.Dm = SH.r33
            }
            function r(n) {
                SH.Nxj(n, 100)
            }
            function o(n, t) {
                if (t < 0 && (t = 0),
                t > 100 && (t = 100),
                null == SH.Bo) {
                    var e = "";
                    e = window.location.rk + "//" + window.location.pq,
                    oL.Pe(e, "localhost:8888") && (SH.Dm = e),
                    SH.nr(0, null)
                }
                if (ct.Error("Ping", n),
                n = "d=" + O9.oN(n),
                !SH.qQW.Wt(n)) {
                    if (100 * O9.rV() >= t * CO._Uf / 100)
                        return void SH.qQW.a9(n, !0);
                    if (SH.qQW.Bt > 2e3) {
                        var r = "d=" + O9.oN("2000 PING!!!!");
                        return void (SH.qQW.Wt(r) || (SH.qQW.a9(r, !0),
                        SH.Cd(r)))
                    }
                    SH.qQW.a9(n, !0),
                    SH.Cd(n)
                }
            }
            function i(n) {
                for (var t = SH.LZ.YC, e = 0; e < t.length; e++) {
                    var r = t[e];
                    if (r == n)
                        return
                }
                SH.Q4 || SH.LZ.Bt < SH.WF && (SH.LZ.Yb(n),
                null == SH.EL && SH.QK())
            }
            function u() {
                if (null != SH.LZ && null != SH.JO) {
                    if (SH.LZ.Bt > 0) {
                        var n = Lt.fp()
                          , t = SH.LZ.tc(0);
                        SH.LZ.DU(0),
                        SH.Q4 = !0,
                        SH.cV && SH.cV.wy(),
                        SH.cV = new nD(SH.Bo + "&" + t,function(n, t) {
                            null != n && ct.Error("Ping", "Failed to send ping: " + oL.fg(n))
                        }
                        ,null,null),
                        SH.JO.Yb(n);
                        var e = 0;
                        SH.JO.Bt >= SH.AT && (SH.JO.JI(0, SH.JO.Bt - SH.AT + 1),
                        e = VW.z_(SH.JO.tc(0) + SH.QS - n)),
                        e <= SH.R9 && (e = SH.R9),
                        SH.EL = Lt.b_(SH.QK, e, "Ping.wait")
                    } else
                        SH.EL = null;
                    SH.Q4 = !1
                }
            }
            function f() {
                return SH.L0
            }
            function a(n) {
                SH.L0 = n;
                try {
                    UU.yL(SH.a6, oL.fg(n))
                } catch (t) {}
            }
            function v() {
                return SH.LZ
            }
            function l() {
                return SH.R9
            }
            function c(n) {
                SH.R9 = n
            }
            function C() {
                return SH.QS
            }
            function s(n) {
                SH.QS = n
            }
            function O() {
                return SH.AT
            }
            function d(n) {
                SH.AT = n
            }
            function S(n) {
                SH.Dm = n
            }
            var h = this;
            h == fj && (SH.Bo = null),
            h == fj && (SH.r33 = "https://pings.conviva.com"),
            h == fj && (SH.Dm = SH.r33),
            h == fj && (SH.L0 = 0),
            h == fj && (SH.Q4 = !1),
            h == fj && (SH.ZD = void 0),
            h == fj && (SH.qQW = void 0),
            h == fj && (SH.cV = void 0),
            h == fj && (SH.LZ = void 0),
            h == fj && (SH.JO = void 0),
            h == fj && (SH.ba = 1e3),
            h == fj && (SH.R9 = SH.ba),
            h == fj && (SH.oa = 6e4),
            h == fj && (SH.QS = SH.oa),
            h == fj && (SH.cd = 3),
            h == fj && (SH.AT = SH.cd),
            h == fj && (SH.WF = 10),
            h == fj && (SH.EL = void 0),
            h == fj && (SH.a6 = "pingid"),
            dN(h, SH, "nr", t),
            dN(h, SH, "wy", e),
            dN(h, SH, "z2", r),
            dN(h, SH, "Nxj", o),
            dN(h, SH, "Cd", i),
            dN(h, SH, "QK", u),
            Va(h, SH, "Jl", f),
            Z0(h, SH, "Jl", a),
            Va(h, SH, "H5", v),
            Va(h, SH, "m4", l),
            Z0(h, SH, "m4", c),
            Va(h, SH, "hY", C),
            Z0(h, SH, "hY", s),
            Va(h, SH, "ZM", O),
            Z0(h, SH, "ZM", d),
            Z0(h, SH, "hUw", S),
            h != fj && n.apply(h, arguments)
        }
        function QnM() {
            function n(n, t, e) {
                if (null == n)
                    return null;
                var r = !0;
                n = QnM.r3G(n, t);
                for (var o = new EW, i = oL.Nq(n, t), u = i.YC, f = 0; f < u.length; f++) {
                    var a = u[f]
                      , v = oL.Nq(a, e);
                    if (null == v || 2 != v.ug) {
                        r = !1;
                        break
                    }
                    o.Yb(v.tc(0), v.tc(1))
                }
                return r ? o : null
            }
            function t(n, t) {
                if (null == n)
                    return null;
                n = QnM.r3G(n, t);
                var e = oL.Nq(n, t);
                return 1 == e.ug && "" == e.tc(0) ? null : e
            }
            function e(n, t) {
                if (null == n)
                    return "";
                for (; n.length > 0 && oL._Tg(n, t) == n.length - 1; )
                    n = oL.n0(n, 0, n.length - 1);
                return n
            }
            function r(n, t) {
                return oL.ZLT(n, t, "")
            }
            var o = this;
            dN(o, QnM, "THC", n),
            dN(o, QnM, "HuF", t),
            dN(o, QnM, "r3G", e),
            dN(o, QnM, "cDw", r)
        }
        function Lt() {
            function n(n, t, e) {
                l.MG = null,
                l.iM = e,
                l.AB = n,
                l.qA = t,
                l.bWC = !0,
                null != Lt.clU && (l.yMq = Lt.clU(l),
                null != l.yMq) || l.rs0()
            }
            function t() {
                null != l.yMq && l.yMq.wy(),
                l.MG && l.e5B(),
                l.MG = null,
                l.qA = null
            }
            function e() {
                return null != l.yMq ? void l.yMq.rs0() : void (l.MG = setInterval(u, l.AB))
            }
            function r() {
                return null != l.yMq ? void l.yMq.e5B() : void (null != l.MG && clearInterval(l.MG))
            }
            function o() {
                return null != l.yMq ? l.yMq.sLy() : null != l.MG
            }
            function i() {
                return null != l.yMq ? void l.yMq.eO() : (l.e5B(),
                void l.rs0())
            }
            function u() {
                l.bWC || l.e5B(),
                O9.Hy(),
                O9.Yv(l.qA, l.iM ? l.iM : "ProtectedTimer.Tick")
            }
            function f(n) {
                l.AB = n,
                l.eO()
            }
            function a(n, t, e) {
                var r = new Lt(t,n,e);
                return r.bWC = !1,
                r
            }
            function v(n) {
                null != n && n.wy()
            }
            var l = this;
            l != fj && (this.MG = null),
            l != fj && (this.uV = null),
            l != fj && (this.AB = 0),
            l != fj && (this.bWC = !0),
            l != fj && (this.iM = ""),
            l != fj && (this.qA = null),
            l == fj ? (Lt.clU = null,
            Lt.vym = 0) : this.yMq = null,
            OZ(l, "wy", t),
            OZ(l, "rs0", e),
            OZ(l, "e5B", r),
            OZ(l, "sLy", o),
            OZ(l, "eO", i),
            OZ(l, "mE", f),
            dN(l, Lt, "b_", a),
            dN(l, Lt, "Te", v),
            Lt.fp = function() {
                return (new Date).getTime() + Lt.vym
            }
            ,
            Lt.PgU = 0,
            Lt.ZAw = function(n) {
                Lt.PgU += n
            }
            ,
            Lt.VB = function() {
                return Lt.PgU + Lt.fp()
            }
            ,
            Lt.mu = function(n) {
                return new Date(n).toString()
            }
            ,
            l != fj && n.apply(l, arguments)
        }
        function Dh() {
            function n(n, e, r) {
                try {
                    var o = t(n, e);
                    if (null == o || void 0 == o || !o instanceof Function) {
                        var i = new Error("1069: Missing property " + n);
                        return O9.Q_("InvokeMethod: " + n, i),
                        null
                    }
                    return o.apply(e, r)
                } catch (u) {
                    if (1069 == u.n3)
                        return O9.Q_("InvokeMethod: " + n, u),
                        null;
                    O9.Q_("InvokeMethod:" + n, u)
                }
                return null
            }
            function t(n, t) {
                t[n];
                return t[n]
            }
            function e(n, t) {
                for (var e = new Array, r = t; r < n.length; r++)
                    e.push(n[r]);
                return e
            }
            Dh.iA = function(n) {
                return 1 == arguments.length ? new n : 2 == arguments.length ? new n(arguments[1]) : 3 == arguments.length ? new n(arguments[1],arguments[2]) : 4 == arguments.length ? new n(arguments[1],arguments[2],arguments[3]) : 5 == arguments.length ? new n(arguments[1],arguments[2],arguments[3],arguments[4]) : 6 == arguments.length ? new n(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]) : 7 == arguments.length ? new n(arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]) : (SH.z2("Error:CreateInstance too many args: " + n.toString()),
                null)
            }
            ,
            Dh.Eg = function(n) {
                return null == n ? null : n.constructor
            }
            ,
            Dh.un = function(n) {
                return sHq(n)
            }
            ,
            Dh.eE = function(n) {
                return null == n ? null : (O9.FW("GetClassName not implemented"),
                null)
            }
            ,
            Dh.YB = function(t, r) {
                return n(t, r, e(arguments, 2))
            }
            ,
            Dh.Qz = function(t, r) {
                return n(t, r, e(arguments, 2))
            }
            ,
            Dh.hB = function(n, t) {
                try {
                    return null != t && t.hasOwnProperty(n)
                } catch (e) {
                    if (1069 == e.n3)
                        return !1;
                    throw e
                }
                return !1
            }
            ,
            Dh.JQ = t,
            Dh.TOy = t,
            Dh.xI = Dh.hB,
            Dh.eF = Dh.hB,
            Dh.yL = function(n, t, e) {
                t[n] = e
            }
            ,
            Dh.G6 = Dh.hB,
            Dh.Vf = Dh.JQ,
            Dh.HM = Dh.yL,
            Dh.GO = function(n) {
                return n
            }
        }
        function ct() {
            function n(n) {
                var t, e, r, o = document.cookie.split(";");
                for (t = 0; t < o.length; t++)
                    if (e = o[t].substr(0, o[t].indexOf("=")),
                    r = o[t].substr(o[t].indexOf("=") + 1),
                    e = e.replace(/^\s+|\s+$/g, ""),
                    e == n)
                        return unescape(r);
                return null
            }
            function t(n) {
                var t = null;
                try {
                    t = location.search
                } catch (e) {}
                if (null != t && t.length > 1) {
                    var r = O9.rx(t.substr(1));
                    return r.tc(n)
                }
                return null
            }
            function e() {
                if (null == ct.Xp) {
                    var e = t("toggleTraces");
                    null != e && "true" == e.toString() ? ct.Xp = !0 : ct.Xp = !1
                }
                return ct.XU || null != n("toggleTraces") || ct.Xp
            }
            function r(n) {
                for (var t = 0; t < ct.cE.length; t++)
                    try {
                        ct.cE[t](n)
                    } catch (e) {}
            }
            function o() {
                return "[" + ((new Date).getTime() / 1e3).toFixed(3) + "] "
            }
            ct.Lz = !1,
            ct.XU = !0,
            ct.Xp = null,
            ct.nr = function() {}
            ,
            ct.cE = [],
            ct.rP = function(n) {
                for (var t = 0; t < ct.cE.length; t++)
                    if (ct.cE[t] == n)
                        return;
                ct.cE.push(n)
            }
            ,
            ct.biV = function(n) {
                for (var t = 0; t < ct.cE.length; t++)
                    if (ct.cE[t] == n)
                        return void ct.cE.splice(t, 1)
            }
            ,
            ct.wW = function() {
                ct.cE = []
            }
            ,
            ct.qF = function(n, t) {
                t = void 0 != t ? n + ": " + t : n + ": ",
                t = o() + t,
                e() && window.console && window.console.log && window.console.log(t),
                r(t)
            }
            ,
            ct.M3x = function(n, t) {
                t = o() + n + ": " + t,
                e() && window.console && window.console.warn && window.console.warn(t),
                r(t)
            }
            ,
            ct.Error = function(n, t) {
                t = o() + n + ": " + t,
                e() && window.console && window.console.error && window.console.error(t),
                r(t)
            }
            ,
            ct.EM = function() {}
            ,
            ct.Eoy = function() {
                return e()
            }
        }
        function O9() {
            O9.V6 = "ERROR_CONNECTION_FAILURE",
            O9.NO = "ERROR_STREAMING_FAILURE",
            O9.rV = Math.random,
            O9.bG = function() {
                return Math.floor(Math.random() * n4.Je)
            }
            ,
            O9.dU = [],
            O9.MU = function(n) {
                O9.dU.push(n)
            }
            ,
            O9.Hy = function() {
                O9.dU = []
            }
            ,
            O9.r1 = function(n, t, e) {
                var r = O9.dU.length
                  , o = e;
                try {
                    if (O9.H6)
                        try {
                            o = n()
                        } catch (i) {
                            O9.Q_(t ? t : "RunProtected", i)
                        }
                    else
                        o = n()
                } finally {
                    O9.dU.length > r && (O9.dU = O9.dU.slice(0, r))
                }
                return o
            }
            ,
            O9.Yv = O9.r1,
            O9.y8 = function(n, t) {
                n || O9.FW("Assertion: " + t)
            }
            ,
            O9.Ep = function(n, t) {
                return (null == O9.ON || !O9.ON(n, null)) && (t ? SH.z2("Error:" + n) : ct.Error("Utils", n),
                !0)
            }
            ,
            O9.FW = function(n) {
                if (O9.Ep(n, !0))
                    throw new Error("Error: " + n)
            }
            ,
            O9.Q_ = function(n, t) {
                var e = "Uncaught exception "
                  , r = ""
                  , o = n.indexOf("IGNORE");
                if (o < 0 ? e += n : (e += n.substr(0, o),
                r = n.substr(o)),
                O9.dU.length > 0 && (e += "(crumbs: " + O9.dU.toString() + ")"),
                null == O9.ON || !O9.ON(e, t)) {
                    if (!O9.H6)
                        throw t;
                    var i = O9.zJ(t);
                    e += null != i ? ", stack:" + i : ", exc:" + t.toString(),
                    "" != r && (e += " " + r),
                    SH.z2(e)
                }
            }
            ,
            O9.zJ = function(n, t, e) {
                var r = []
                  , o = !1;
                if (n.stack) {
                    for (var i, u = 32; (i = /^\s*(.*)@(.+):(\d+)\s*$/gm.exec(n.stack)) && !(u-- <= 0); )
                        r.push(i[1] + " @ " + i[2] + ":" + i[3]);
                    o = !0
                } else
                    ;if (!o)
                    for (var f = arguments.callee.caller; f; ) {
                        var a, v = f.toString(), i = /\s*function\s*(\S+)\s*\( ?/gm.exec(v);
                        if (a = i ? "  *" + i[1] : "  *" + v.substring(0, 64) + ".....",
                        r.join("\n").indexOf(a) >= 0) {
                            r.push(a),
                            r.push("...recursion...");
                            break
                        }
                        r.push(a),
                        f = f.caller
                    }
                r && (r = r.join("\n"));
                var l = n.toString();
                return l.match(/^\[object/) ? n.Sj + " " + n.hq + "\nTrace:\n" + r.toString() : l + "\nTrace:\n" + r.toString()
            }
            ,
            O9.GK = function(n) {
                n = oL.uM(n);
                var t = "";
                return Zi(n, function(e) {
                    var r = encodeURIComponent(e) + "=" + encodeURIComponent(n[e]);
                    t && (t += "&"),
                    t += r
                }),
                t
            }
            ,
            O9.oN = function(n) {
                return encodeURIComponent(n)
            }
            ,
            O9.mC8 = function(n) {
                return decodeURIComponent(n)
            }
            ,
            O9.rx = function(n) {
                var t = n.split("&")
                  , e = {};
                return BW(t, function(n) {
                    var t = n.split("=");
                    if (!(t.length < 1)) {
                        var r = t[0]
                          , o = "";
                        t.length >= 1 && (o = t[1]),
                        e[decodeURIComponent(r)] = decodeURIComponent(o)
                    }
                }),
                EW.Y_(e)
            }
            ,
            O9.pw = "xx",
            O9.pD = "bb",
            O9.Mul = "c3.global",
            O9.H6 = !0,
            O9.id = function(n) {
                return n
            }
            ,
            O9.ON = null,
            O9.ZLd = Math.pow(2, 15) - 1
        }
        function gV() {
            function n() {
                throw new Error("Uuid is a static class")
            }
            function t() {
                var n = UU.jZ(gV.c6, null);
                try {
                    if (null == n)
                        gV.nF = null;
                    else {
                        gV.nF = new jh(4);
                        for (var t = 0, e = oL.Nq(n, ",").YC, r = 0; r < e.length; r++) {
                            var o = e[r];
                            gV.nF.a9(t, parseInt(o)),
                            gV.nF.tc(t) < 0 && gV.nF.a9(t, gV.nF.tc(t) + 4294967296),
                            t++
                        }
                    }
                } catch (i) {
                    gV.nF = null
                }
                null != gV.nF && 4 != gV.nF.ug && (gV.nF = null),
                null == gV.nF && (gV.nF = jh.oIy(0, 0, 0, 0))
            }
            function e(n) {
                O9.y8(4 == n.ug, "id must have 4 ints"),
                gV.nF = n;
                var t = oL.fg(gV.nF.tc(0)) + "," + oL.fg(gV.nF.tc(1)) + "," + oL.fg(gV.nF.tc(2)) + "," + oL.fg(gV.nF.tc(3));
                UU.yL(gV.c6, t),
                SH.Jl = n4.z_(gV.nF.tc(0))
            }
            function r() {
                return null == gV.nF ? "0.0.0.0" : "" + gV.nF.tc(0) + "." + gV.nF.tc(1) + "." + gV.nF.tc(2) + "." + gV.nF.tc(3)
            }
            function o() {
                gV.nF = null
            }
            function i() {
                return O9.y8(null != gV.nF, "Uuid"),
                gV.nF
            }
            function u() {
                UU.Pp(gV.c6),
                gV.nF = jh.oIy(0, 0, 0, 0)
            }
            function f() {
                gV.nF = jh.oIy(0, 0, 0, 0)
            }
            function a() {
                return gV.nF
            }
            function v(n) {
                if (n.ug != gV.nF.ug)
                    return !1;
                for (var t = 0; t < gV.nF.ug; t++)
                    if (gV.nF.tc(t) != n.tc(t))
                        return !1;
                return !0
            }
            function l(n) {
                return gV.fMy(oL.zF(n))
            }
            var c = this;
            c == fj && (gV.c6 = "uuid"),
            c == fj && (gV.nF = null),
            dN(c, gV, "nr", t),
            dN(c, gV, "fd", e),
            dN(c, gV, "eSE", r),
            dN(c, gV, "wy", o),
            Va(c, gV, "Kn", i),
            dN(c, gV, "bz", u),
            dN(c, gV, "ffk", f),
            Va(c, gV, "eP", a),
            dN(c, gV, "fMy", v),
            dN(c, gV, "zH", l),
            c != fj && n.apply(c, arguments)
        }
        function uPJ() {
            function n() {
                return c.Ut8
            }
            function t(n) {
                return null == n ? null : uPJ.Y_(oL.FP(n))
            }
            function e(n) {
                if (null == n)
                    return null;
                var t = new uPJ;
                return t.Ut8 = n,
                t
            }
            function r() {
                return oL.EP(c.Ut8)
            }
            function o(n) {
                for (var t = new Yw, e = c.Ut8.getElementsByTagName(n), r = 0; r < e.length; r++)
                    t.Yb(uPJ.Y_(e[r]));
                return t
            }
            function i() {
                if (null == c.Ut8)
                    return null;
                var n = null;
                return n = c.Ut8.nodeName
            }
            function u(n) {
                if (null == c.Ut8)
                    return null;
                var t = null;
                return t = c.Ut8.getAttribute(n),
                t && (t = t.toString()),
                t
            }
            function f() {
                var n = null;
                return null != c.Ut8 && ("" != c.Ut8.textContent ? n = c.Ut8.textContent : c.Ut8.getAttribute("value") && (n = c.Ut8.getAttribute("value"))),
                n
            }
            function a() {
                var n = 0;
                try {
                    n = Math.max(0, VW.tn(c.SX("affinity")))
                } catch (t) {}
                return n
            }
            function v() {
                var n = null;
                try {
                    n = c.SX("name")
                } catch (t) {}
                return n
            }
            function l(n) {
                for (var t = c.Ut8.cloneNode(!0), e = t.childNodes, r = 0; r < e.length; r++) {
                    var o = e[r];
                    "alternative" == o.nodeName && o.getAttribute("name").toString() != n && (t.removeChild(e[r]),
                    r--)
                }
                return uPJ.Y_(t)
            }
            var c = this;
            c != fj && (c.Ut8 = void 0),
            ED(c, "XTo", n),
            dN(c, uPJ, "orQ", t),
            dN(c, uPJ, "Y_", e),
            OZ(c, "vo", r),
            OZ(c, "ixD", o),
            OZ(c, "u_j", i),
            OZ(c, "SX", u),
            OZ(c, "tc", f),
            OZ(c, "deB", a),
            OZ(c, "I8_", v),
            OZ(c, "Im", l)
        }
        function hF() {
            function n() {
                o.fV = hF.ap,
                hF.ap++,
                o.dK = new jo(o.fV)
            }
            function t() {
                return o.fV
            }
            function e() {
                return o.dK
            }
            function r() {
                o.dK = null,
                O9.Yv(function() {
                    uf.kp("Cleanup", function() {
                        var n = uf.UK;
                        null != n && Dh.YB("jt", n, o.fV)
                    })
                }, "ConvivaGenericSession.cleanup IGNORE " + o.fV)
            }
            var o = this;
            o != fj && (o.fV = void 0),
            o == fj && (hF.ap = 0),
            o != fj && (o.dK = null),
            ED(o, "id", t),
            ED(o, "pO", e),
            OZ(o, "ox", r),
            o != fj && n.apply(o, arguments)
        }
        function ConvivaLightSession() {
            function n(n) {
                hF.call(m),
                O9.Yv(function() {
                    m.Ay = n,
                    m.Du = null,
                    uf.kp("ConvivaLightSession", function() {
                        var n = uf.UK;
                        O9.y8(null != n, "new ConvivaLightSession and LivePass not ready"),
                        Dh.YB("UL", n, m.fV, m.Ay)
                    })
                }, "ConvivaLightSession.ctor IGNORE " + m.fV)
            }
            function t(n) {
                var t = Lt.fp();
                uf.kp("reportError", function() {
                    var e = uf.UK;
                    O9.y8(null != e, "LivePass not ready"),
                    Dh.YB("iwg", e, m.fV, n, t)
                })
            }
            function e(n) {
                O9.Yv(function() {
                    uf.kp("setCurrentResource", function() {
                        var t = uf.UK;
                        O9.y8(null != t, "setCurrentResource called when LivePass not ready"),
                        Dh.YB("uvO", t, m.fV, n)
                    })
                }, "ConvivaLightSession.setCurrentResource IGNORE " + m.fV)
            }
            function r(n) {
                O9.Yv(function() {
                    uf.kp("setCurrentBitrate", function() {
                        var t = uf.UK;
                        O9.y8(null != t, "setCurrentBitrate called when LivePass not ready"),
                        Dh.YB("tlE", t, m.fV, n)
                    })
                }, "ConvivaLightSession.setCurrentBitrate IGNORE " + m.fV)
            }
            function o(n) {
                O9.Yv(function() {
                    uf.kp("setContentLength", function() {
                        var t = uf.UK;
                        O9.y8(null != t, "setContentLength called when LivePass not ready"),
                        Dh.YB("iVI", t, m.fV, n)
                    })
                }, "ConvivaLightSession.setContentLength IGNORE " + oL.fg(m.fV))
            }
            function i(n) {
                O9.Yv(function() {
                    uf.kp("SelectResource", function() {
                        var t = uf.UK;
                        O9.y8(null != t, "selectResource called when LivePass not ready"),
                        Dh.YB("eN", t, m.fV, m.Ay, n)
                    })
                }, "ConvivaLightSession.selectResource IGNORE " + m.fV)
            }
            function u(n, t) {
                var e = null;
                ConvivaLightSession.TDT(m.Ay),
                m.dlF(n),
                O9.Yv(function() {
                    uf.kp("startMonitor", function() {
                        var r = uf.UK;
                        O9.y8(null != r, "startMonitor called before the LivePass is ready"),
                        Dh.YB("Wd", r, m.fV, m.Ay, n, t, e)
                    })
                }, "ConvivaLightSession.startMonitor IGNORE " + m.fV)
            }
            function f(n) {
                O9.Yv(function() {
                    m.dlF(n),
                    uf.kp("attachStreamer", function() {
                        var t = uf.UK;
                        O9.y8(null != t, "attachStreamer called before the LivePass is ready");
                        var e = null;
                        Dh.YB("Wd", t, m.fV, m.Ay, n, e, null)
                    })
                }, "ConvivaLightsession.attachStreamer " + m.fV)
            }
            function a() {
                O9.Yv(function() {
                    uf.kp("pauseMonitor", function() {
                        var n = uf.UK;
                        O9.y8(null != n, "pauseMonitor called when LivePass not ready"),
                        Dh.YB("KV", n, m.fV)
                    }),
                    m.ob2()
                }, "ConvivaLightSession.pauseMonitor IGNORE " + m.fV)
            }
            function v() {
                O9.Yv(function() {
                    uf.kp("stopMonitor", function() {
                        var n = uf.UK;
                        O9.y8(null != n, "stopMonitor called when LivePass not ready"),
                        Dh.YB("oP", n, m.fV)
                    }),
                    m.ob2()
                }, "ConvivaLightSession.stopMonitor IGNORE " + m.fV)
            }
            function l(n) {
                var t = oL.PX(n.N_);
                null == t && (t = new EW),
                t.Wt("joinStartTime") || t.a9("joinStartTime", oL.fg(Lt.fp())),
                n.N_ = t
            }
            function c() {
                var n = oL.PX(m.Ay.N_);
                null == n && (n = new EW),
                n.a9("joinEndTime", Lt.fp().fg()),
                m.Ay.N_ = n
            }
            function C() {
                O9.Yv(function() {
                    uf.kp("adStart", function() {
                        var n = uf.UK;
                        O9.y8(null != n, "adStart called when LivePass is not ready"),
                        Dh.YB("gxz", n, m.fV)
                    })
                }, "ConvivaLightSession.adStart IGNORE " + m.fV)
            }
            function s() {
                O9.Yv(function() {
                    uf.kp("adEnd", function() {
                        var n = uf.UK;
                        O9.y8(null != n, "adEnd called when LivePass is not ready"),
                        Dh.YB("KSn", n, m.fV)
                    })
                }, "ConvivaLightSession.adEnd IGNORE " + m.fV)
            }
            function O() {
                O9.Yv(function() {
                    uf.kp("reportAdError", function() {
                        var n = uf.UK;
                        O9.y8(null != n, "reportAdError() called when LivePass is not ready"),
                        Dh.YB("euf", n, m.fV)
                    })
                }, "ConvivaLightSession.reportAdError IGNORE " + m.fV)
            }
            function d() {
                m.Phox(),
                m.ob2()
            }
            function S(n) {
                null != m.Du ? ct.Error("ConvivaLightSession", "session " + m.fV + " is already monitoring a streamer") : null != n && (m.Du = n,
                LivePass.V0(n, m))
            }
            function h() {
                null != m.Du && (LivePass.FS(m.Du),
                m.Du = null)
            }
            var m = this;
            m != fj && (m.Ay = void 0),
            m != fj && (m.Du = void 0),
            m == fj && (ConvivaLightSession.V6 = O9.V6),
            m == fj && (ConvivaLightSession.NO = O9.NO),
            OZ(m, "DC", t),
            OZ(m, "reportError", t),
            OZ(m, "uvO", e),
            OZ(m, "setCurrentResource", e),
            OZ(m, "tlE", r),
            OZ(m, "setCurrentBitrate", r),
            OZ(m, "iVI", o),
            OZ(m, "setContentLength", o),
            OZ(m, "eN", i),
            OZ(m, "selectResource", i),
            OZ(m, "Wd", u),
            OZ(m, "startMonitor", u),
            OZ(m, "sT", f),
            OZ(m, "attachStreamer", f),
            OZ(m, "KV", a),
            OZ(m, "pauseMonitor", a),
            OZ(m, "oP", v),
            OZ(m, "stopMonitor", v),
            dN(m, ConvivaLightSession, "TDT", l),
            dN(m, ConvivaLightSession, "SetJoinStartTimeContentInfo", l),
            OZ(m, "LwW", c),
            OZ(m, "SetJoinEndTime", c),
            OZ(m, "gxz", C),
            OZ(m, "adStart", C),
            OZ(m, "KSn", s),
            OZ(m, "adEnd", s),
            OZ(m, "euf", O),
            OZ(m, "reportAdError", O),
            OZ(m, "ox", d),
            OZ(m, "cleanup", d),
            LK(m, "dlF", S),
            LK(m, "ob2", h),
            dN(m, ConvivaLightSession, "ERROR_CONNECTION_FAILURE", ConvivaLightSession.V6),
            dN(m, ConvivaLightSession, "ERROR_STREAMING_FAILURE", ConvivaLightSession.NO),
            m != fj && n.apply(m, arguments)
        }
        function ConvivaMetricsSession() {
            function n(n) {
                hF.call(t),
                O9.Yv(function() {
                    uf.kp("ConvivaMetricsSession", function() {
                        var e = uf.UK;
                        O9.y8(null != e, "new ConvivaMetricsSession and LivePass not ready"),
                        Dh.YB("Pn", e, t.fV, n)
                    })
                }, "ConvivaMetricsSession.ctor." + t.fV)
            }
            var t = this;
            t != fj && n.apply(t, arguments)
        }
        function LivePass() {
            function n(n, t, e) {
                null != LivePass.CHy && "" != LivePass.CHy && (n = LivePass.CHy),
                ct.qF("LivePass", "Initializing " + Uj.vWs),
                O9.Yv(function() {
                    if (LivePass.X9 != LivePass.df && LivePass.X9 != LivePass.J9) {
                        ct.Ka = "LivePass",
                        LivePass.fw = e,
                        LivePass.X9 = LivePass.df,
                        LivePass.PC = null;
                        var r = 0;
                        uf.nr(n, t, LivePass.SV, r)
                    }
                }, "LivePass.init")
            }
            function t(n, t, e, r) {
                uf.n34 = !0,
                CO.ngj(n, t, e, r)
            }
            function e() {
                O9.Yv(function() {
                    for (var n = LivePass.hb.VO, t = 0; t < n.length; t++) {
                        var e = n[t]
                          , r = LivePass.hb.tc(e);
                        r.ox(),
                        LivePass.hb.gS(e)
                    }
                    LivePass.hb.m3(),
                    null != LivePass.PC && (LivePass.PC.wy(),
                    LivePass.PC = null),
                    LivePass.fw = null,
                    uf.wy(),
                    LivePass.X9 = LivePass.P2
                }, "LivePass.cleanup")
            }
            function r(n, t, e, r) {
                return O9.r1(function() {
                    var o = new ConvivaContentInfo(t,new Yw,e);
                    return o.N_ = r,
                    LivePass.M2V(n, o)
                }, "LivePass.createMonitoringSession", null)
            }
            function o(n, t) {
                return t.K_y = !0,
                LivePass.M2V(n, t)
            }
            function i(n, t) {
                return O9.r1(function() {
                    if (null != n && null != LivePass.tf(n))
                        return ct.Error("LivePass", "createSessionWithCci called twice for the same streamer"),
                        null;
                    ConvivaLightSession.TDT(t);
                    var e = new ConvivaLightSession(t);
                    return e.Wd(n, null),
                    e
                }, "LivePass.createSessionWithCci", null)
            }
            function u(n) {
                var t = LivePass.lV(n, !1, 0);
                return LivePass.hb.Wt(t) ? LivePass.hb.tc(t) : null
            }
            function f(n) {
                O9.Yv(function() {
                    if (null == n || null == LivePass.hb)
                        return void ct.Error("LivePass", "cleanupMonitoringSession called before createMonitoringSession");
                    var t = LivePass.tf(n);
                    null != t && t.ox()
                }, "LivePass.cleanupMonitoringSession")
            }
            function a(n) {
                n.iv == ConvivaNotification.g9 ? (LivePass.X9 = LivePass.J9,
                LivePass.PC = null) : n.iv != ConvivaNotification.bQ && n.iv != ConvivaNotification.vU || (LivePass.X9 = LivePass.Ir),
                null != LivePass.fw && O9.Yv(function() {
                    LivePass.fw(n)
                }, "LivePass notifier")
            }
            function v(n) {
                O9.Yv(function() {
                    if (null == n)
                        return void ct.Error("LivePass", "onJoinEnd called before session is created");
                    var t = LivePass.tf(n);
                    null != t && t.LwW()
                }, "LivePass.onJoinEnd")
            }
            function l() {
                return LivePass.X9 == LivePass.J9
            }
            function c() {
                LivePass.X9 = LivePass.J9
            }
            function C() {
                return LivePass.X9 == LivePass.df
            }
            function s() {
                return Uj.Re
            }
            function O() {
                var n = new EW;
                return n.a9("LivePass.version", Uj.Re),
                uf.YY(n),
                oL.uM(n)
            }
            function d() {
                return uf.b2()
            }
            function S(n) {
                O9.Yv(function() {
                    ct.XU = n,
                    uf.kp("toggleTraces", function() {
                        var t = uf.UK;
                        Dh.YB("Xp", t, n)
                    })
                }, "LivePass.toggleTraces")
            }
            function h(n, t, e) {
                if (t) {
                    var r = oL.fg(e);
                    return n.rD = r,
                    r
                }
                var r = n.rD;
                return r ? r : null
            }
            function m(n, t) {
                var e = LivePass.lV(n, !0, t.id);
                LivePass.hb.a9(e, t)
            }
            function j(n) {
                var t = LivePass.lV(n, !1, 0);
                LivePass.hb.gS(t),
                delete n.rD
            }
            var E = this;
            E == fj && (LivePass.X9 = LivePass.P2),
            E == fj && (LivePass.PC = void 0),
            E == fj && (LivePass.fw = void 0),
            E == fj && (LivePass.hb = new EW),
            dN(E, LivePass, "Ns", n),
            dN(E, LivePass, "init", n),
            dN(E, LivePass, "Tr4", t),
            dN(E, LivePass, "setupQuickInit", t),
            dN(E, LivePass, "ox", e),
            dN(E, LivePass, "cleanup", e),
            dN(E, LivePass, "K6", r),
            dN(E, LivePass, "createMonitoringSession", r),
            dN(E, LivePass, "M2C", o),
            dN(E, LivePass, "createSession", o),
            dN(E, LivePass, "M2V", i),
            dN(E, LivePass, "createSessionWithCci", i),
            dN(E, LivePass, "tf", u),
            dN(E, LivePass, "getMonitoringSession", u),
            dN(E, LivePass, "yX", f),
            dN(E, LivePass, "cleanupMonitoringSession", f),
            dN(E, LivePass, "SV", a),
            dN(E, LivePass, "ourInitHandler", a),
            dN(E, LivePass, "oiD", v),
            dN(E, LivePass, "onJoinEnd", v),
            Va(E, LivePass, "ZY", l),
            Va(E, LivePass, "ready", l),
            dN(E, LivePass, "vK", c),
            dN(E, LivePass, "setReady", c),
            Va(E, LivePass, "Zn", C),
            Va(E, LivePass, "pending", C),
            Va(E, LivePass, "hK", s),
            Va(E, LivePass, "version", s),
            Va(E, LivePass, "po", O),
            Va(E, LivePass, "stats", O),
            Va(E, LivePass, "pO", d),
            Va(E, LivePass, "metrics", d),
            dN(E, LivePass, "Xp", S),
            dN(E, LivePass, "toggleTraces", S),
            dN(E, LivePass, "lV", h),
            dN(E, LivePass, "getStreamerKey", h),
            dN(E, LivePass, "V0", m),
            dN(E, LivePass, "addStreamer", m),
            dN(E, LivePass, "FS", j),
            dN(E, LivePass, "removeStreamer", j),
            E == fj && (LivePass.bZH = !1),
            E == fj && (LivePass.J9 = 0),
            E == fj && (LivePass.P2 = -1),
            E == fj && (LivePass.df = -2),
            E == fj && (LivePass.Ir = -3),
            E == fj && (LivePass.CHy = null),
            dN(E, LivePass, "STATE_ERROR", LivePass.Ir),
            dN(E, LivePass, "STATE_INIT_PENDING", LivePass.df),
            dN(E, LivePass, "STATE_NOT_INITIALIZED", LivePass.P2),
            dN(E, LivePass, "STATE_READY", LivePass.J9)
        }
        function uf() {
            function n() {
                O9.FW("LivePassInit: is a static class")
            }
            function t(n, t, e, r) {
                uf.A6L = Lt.VB(),
                uf.h5 = n,
                uf.X7 = t,
                uf.tW = e,
                uf.FT = null,
                uf.Fe = null,
                uf.WV = null,
                uf.Aq = null,
                uf.zN = new Yw,
                uf.BbC = new Yw,
                uf.uQ = new EW,
                uf.DZn = new EW,
                0 != r && uf.KvI(r),
                StreamSwitch.rL(),
                UU.nr(uf.RcP, function() {
                    uf.UcI(n, t, e)
                })
            }
            function e(n) {
                Lt.b_(function() {
                    LivePass.Zn && (uf.Mhb(ConvivaNotification.HBx, "LivePass init times out"),
                    SH.z2("LivePass init timesout in " + n + " ms"),
                    uf.wy())
                }, n, "LivePass.init times out")
            }
            function r(n, t, e) {
                gV.nr();
                var r = EW.oIy("cust", t);
                SH.nr(n4.z_(gV.Kn.tc(0)), r),
                ct.nr(),
                ct.rP(uf.IJt),
                ct.qF("LivePassInit", "serviceUrl=" + n),
                uf.l58 = Lt.VB(),
                uf.n34 ? (uf.f9 = CO.xWy(n, t, null, function(n) {
                    uf.xvY("y", VW.z_(Lt.VB() - uf.l58)),
                    uf.Mhb(ConvivaNotification.bQ, "Error loading config: " + oL.fg(n))
                }),
                uf.f0()) : uf.f9 = CO.mR(n, t, uf.f0, function(n) {
                    uf.xvY("y", VW.z_(Lt.VB() - uf.l58)),
                    uf.Mhb(ConvivaNotification.bQ, "Error loading config: " + oL.fg(n))
                }),
                uf.f9.YY(uf.uQ);
                var o = null;
                if (uf.m90)
                    return void uf.xd();
                if (null == uf.iF && null != o && o.Wt(n)) {
                    var i = o.tc(n);
                    uf.lO(i),
                    uf.Aq = i
                }
            }
            function o() {
                null != uf.Fe && (uf.Fe.ox(),
                uf.Fe = null),
                null != uf.FT && (Dh.YB("ox", uf.FT),
                uf.FT = null,
                ConvivaPrivateModule = {}),
                null != uf.iF && (uf.iF.wy(),
                uf.iF = null),
                null != uf.f9 && (uf.f9.wy(),
                uf.f9 = null),
                uf.tW = null,
                uf.h5 = null,
                uf.WV = null,
                uf.zN = null,
                uf.BbC = null,
                uf.Aq = null,
                StreamSwitch.bx(),
                SH.wy(),
                UU.wy(),
                uf.RcP = !1,
                uf.Obu = null,
                uf.PUY = !1,
                ct.biV(uf.IJt),
                null != uf.DzX && uf.DzX.m3()
            }
            function i(n) {
                uf.uQ.a9("LivePass.moduleUrl", n),
                ct.qF("LivePassInit", "loading module " + n),
                uf.CMV = Lt.VB(),
                uf.iF = new qu(n,uf.km,0)
            }
            function u(n, t) {
                uf.xvY("x", VW.z_(Lt.VB() - uf.CMV)),
                null == uf.iF && (uf.iF = t),
                null == n ? uf.xd() : (uf.Obu = oL.fg(n),
                null != uf.WV && (uf.Kx2(),
                uf.wy()))
            }
            function f() {
                if (null == uf.WV) {
                    if (uf.xvY("y", VW.z_(Lt.VB() - uf.l58)),
                    uf.WV = uf.f9.OP,
                    uf.m90)
                        return ct.qF("LivePassInit", "Not loading module; using built-in"),
                        void uf.xd();
                    if (null != uf.iF) {
                        if (uf.TW(uf.iF.Vi))
                            return void uf.xd();
                        uf.iF.wy(),
                        uf.iF = null,
                        uf.CMV = 0
                    }
                    uf.lO(uf.s_())
                }
            }
            function a() {
                var n = uf.f9.Cv();
                return O9.y8(n.Bt > 0, "have module url"),
                n.tc(0)
            }
            function v(n) {
                var t = uf.f9.Cv();
                return O9.y8(t.Bt > 0, "have module url"),
                t.Hh(n) >= 0
            }
            function l() {
                if (null != uf.WV) {
                    if (!uf.m90) {
                        if (null == uf.iF)
                            return;
                        if (null != uf.Obu)
                            return uf.Kx2(),
                            void uf.wy();
                        if (!uf.iF.DY)
                            return
                    }
                    uf.MA("ct", "ConvivaLivePass", "com.conviva.utils").cE = ct.cE,
                    uf.FT = Dh.iA(uf.MA("eI", "ConvivaLivePass", ""));
                    var n = new EW;
                    if (n.a9("loaderVersionMajor", Uj.BI),
                    n.a9("loaderVersionMinor", Uj.tj),
                    n.a9("loaderVersionRelease", Uj.pb),
                    n.a9("loaderVersionSvn", Uj.ya),
                    n.a9("traceSenderId", ct.t3),
                    n.a9("traceToConsole", ct.XU),
                    n.a9("disablePersistentStorage", uf.RcP),
                    uf.gfr && n.a9("TESTAPI_Testing", uf.gfr),
                    null != uf.e6C && n.a9("playerTypeOverride", uf.e6C),
                    uf.O19 && n.a9("noModuleLoading", uf.O19),
                    n.a9("loaderNotificationCallback", uf.US),
                    Dh.YB("Yc", uf.FT, oL.uM(n)),
                    Dh.YB("Ns", uf.FT, uf.h5, uf.X7, uf.WV),
                    ct.qF("LivePassInit", "complete"),
                    null != uf.DzX) {
                        if (Dh.xI("anN", uf.FT))
                            for (var t = uf.DzX.YC, e = 0; e < t.length; e++) {
                                var r = t[e];
                                Dh.YB("anN", uf.FT, r)
                            }
                        uf.DzX.m3()
                    }
                    uf.PUY = !0,
                    uf.b2(),
                    uf.vx()
                }
            }
            function c() {
                return null != uf.Fe ? uf.Fe.pO : (uf.Fe = new ConvivaMetricsSession(O9.Mul),
                uf.Fe.pO)
            }
            function C(n) {
                if (null != uf.tW && null != n) {
                    var t = n;
                    null != t && null != uf.tW && uf.tW(t)
                }
            }
            function s(n, t) {
                LivePass.ZY || (LivePass.Zn ? null != uf.BbC && uf.BbC.Yb(t) : O9.Yv(t, "InvokeWhenFail." + n))
            }
            function O(n, t) {
                LivePass.ZY ? O9.Yv(t, "InvokeWhenReady." + n) : null != uf.zN && uf.zN.Yb(t)
            }
            function d(n, t, e) {
                return LivePass.Zn ? (uf.zN.Yb(t),
                void (e > 0 && Lt.b_(function() {
                    uf.Ki(t)
                }, e, "LPInit.invokeWhenReady"))) : void t()
            }
            function S(n) {
                if (null != uf.zN) {
                    var t = uf.zN.Hh(n);
                    t >= 0 && (uf.zN.DU(t),
                    n())
                }
            }
            function h() {
                if (LivePass.vK(),
                null != uf.zN && uf.zN.Bt > 0) {
                    var n = uf.zN;
                    uf.zN = new Yw;
                    for (var t = n.YC, e = 0; e < t.length; e++) {
                        var r = t[e];
                        O9.Yv(r, "LivePassInit.NotifyLivePassReady")
                    }
                }
                uf.zoM(ConvivaNotification.g9, "Conviva LivePass is ready", null)
            }
            function m(n, t) {
                if (null != uf.BbC && uf.BbC.Bt > 0) {
                    var e = uf.BbC;
                    uf.BbC = new Yw;
                    for (var r = e.YC, o = 0; o < r.length; o++) {
                        var i = r[o];
                        O9.Yv(i, "LivePassInit.NotifyLivePassFail")
                    }
                }
                uf.zoM(n, t, null)
            }
            function j(n, t, e) {
                uf.xvY("v", n),
                uf.xvY("w", VW.z_(Lt.VB() - uf.A6L)),
                uf.xvY("z", CO.G_F ? 1 : 0),
                LivePass.pO.sf("eInitTime", null, null, uf.DZn),
                null != uf.tW && uf.tW(new ConvivaNotification(n,t,e))
            }
            function E() {
                return uf.FT
            }
            function g(n, t) {
                null == uf.DZn && (uf.DZn = new EW),
                uf.DZn.a9(n, t)
            }
            function I() {
                uf.uQ.a9("LivePass.moduleLoadError", uf.Obu),
                null != uf.iF ? O9.Ep("Error: failed to load the module " + uf.iF.Vi, !0) : O9.Ep("Error: failed to load the module. Will not work when reading from file://", !0),
                uf.Mhb(ConvivaNotification.vU, "Error loading module: " + uf.Obu)
            }
            function N(n, t, e) {
                return uf.m90 || null != uf.iF && uf.iF.DY && null != uf.WV ? uf.m90 ? sHq(n) : uf.iF.Eg(n) : null
            }
            function L() {
                return uf.m90
            }
            function P(n) {
                uf.m90 = n
            }
            function w() {
                return uf.m90
            }
            function y() {
                return uf.Aq
            }
            function p() {
                return uf.DZn
            }
            function D(n) {
                if (null != uf.f9 && uf.f9.YY(n),
                null != uf.FT) {
                    var t = n;
                    Dh.YB("Hg", uf.FT, t)
                }
            }
            function V() {
                return uf.A6L
            }
            function T(n) {
                uf.PUY && null != uf.FT ? Dh.xI("anN", uf.FT) && Dh.YB("anN", uf.FT, n) : (null == uf.DzX && (uf.DzX = new Yw),
                uf.DzX.Bt < uf.xc4 && uf.DzX.Yb(n))
            }
            var M = this;
            M == fj && (uf.iF = null),
            M == fj && (uf.f9 = null),
            M == fj && (uf.h5 = null),
            M == fj && (uf.tW = null),
            M == fj && (uf.X7 = void 0),
            M == fj && (uf.WV = null),
            M == fj && (uf.zN = void 0),
            M == fj && (uf.BbC = void 0),
            M == fj && (uf.uQ = void 0),
            M == fj && (uf.XI = "lastSwfUrls"),
            M == fj && (uf.FT = void 0),
            M == fj && (uf.Obu = null),
            M == fj && (uf.Fe = void 0),
            M == fj && (uf.RcP = !1),
            M == fj && (uf.e6C = null),
            M == fj && (uf.Aq = null),
            M == fj && (uf.m90 = !1),
            M == fj && (uf.gfr = !1),
            M == fj && (uf.A6L = 0),
            M == fj && (uf.CMV = 0),
            M == fj && (uf.l58 = 0),
            M == fj && (uf.n34 = !1),
            M == fj && (uf.PUY = !1),
            M == fj && (uf.xc4 = 1e3),
            M == fj && (uf.DzX = void 0),
            M == fj && (uf.DZn = void 0),
            dN(M, uf, "nr", t),
            dN(M, uf, "KvI", e),
            dN(M, uf, "UcI", r),
            dN(M, uf, "wy", o),
            dN(M, uf, "lO", i),
            dN(M, uf, "km", u),
            dN(M, uf, "f0", f),
            dN(M, uf, "s_", a),
            dN(M, uf, "TW", v),
            dN(M, uf, "xd", l),
            dN(M, uf, "b2", c),
            dN(M, uf, "US", C),
            dN(M, uf, "gcw", s),
            dN(M, uf, "kp", O),
            dN(M, uf, "Ab", d),
            dN(M, uf, "Ki", S),
            dN(M, uf, "vx", h),
            dN(M, uf, "Mhb", m),
            dN(M, uf, "zoM", j),
            Va(M, uf, "UK", E),
            dN(M, uf, "xvY", g),
            dN(M, uf, "Kx2", I),
            dN(M, uf, "MA", N),
            Va(M, uf, "il1", L),
            Z0(M, uf, "il1", P),
            Va(M, uf, "O19", w),
            dN(M, uf, "oj", y),
            Va(M, uf, "Nb0", p),
            dN(M, uf, "YY", D),
            Va(M, uf, "dRH", V),
            dN(M, uf, "IJt", T),
            M != fj && n.apply(M, arguments)
        }
        function jo() {
            function n(n) {
                u.fV = n
            }
            function t(n, t) {
                O9.Yv(function() {
                    uf.kp("metricsSendEvent", function() {
                        var e = uf.UK;
                        Dh.YB("Xr", e, u.fV, n, t)
                    })
                }, "MetricsProxy.sendEvent")
            }
            function e(n, t, e, r) {
                O9.Yv(function() {
                    uf.kp("metricsSendEvent2", function() {
                        var o = uf.UK;
                        Dh.YB("Fq", o, u.fV, n, t, e, r)
                    })
                }, "MetricsProxy.sendEvent2")
            }
            function r(n, t, e) {
                O9.Yv(function() {
                    uf.kp("sendMeasurement", function() {
                        var r = uf.UK;
                        Dh.YB("Cy", r, u.fV, n, t, e)
                    })
                }, "MetricsProxy.sendMeasurement")
            }
            function o(n) {
                O9.Yv(function() {
                    var t = uf.UK;
                    O9.y8(null != t, "SetState and LivePass not ready"),
                    Dh.YB("LF", t, u.fV, n)
                }, "MetricsProxy.setState")
            }
            function i() {
                var n = 0;
                try {
                    var t = uf.UK;
                    O9.y8(null != t, "NumPending and LivePass not ready");
                    var e = Dh.YB("TE", t, u.fV);
                    n = VW.z_(e)
                } catch (r) {
                    O9.Q_("NumPending", r)
                }
                return n
            }
            var u = this;
            u != fj && (u.fV = void 0),
            OZ(u, "F9", t),
            OZ(u, "sendEvent", t),
            OZ(u, "sf", e),
            OZ(u, "sendEvent2", e),
            OZ(u, "tx", r),
            OZ(u, "sendMeasurement", r),
            OZ(u, "_1", o),
            OZ(u, "setState", o),
            OZ(u, "wN", i),
            OZ(u, "numPending", i),
            u != fj && n.apply(u, arguments)
        }
        with (yR(yR, "yR"),
        yR(ag, "ag"),
        yR(sHq, "sHq"),
        yR(at, "at"),
        yR(fj, "fj"),
        yR(Bg, "Bg"),
        yR(OZ, "OZ"),
        yR(LK, "LK"),
        yR(dN, "dN"),
        yR(ED, "ED"),
        yR(Wf, "Wf"),
        yR(Va, "Va"),
        yR(Z0, "Z0"),
        yR(PW, "PW"),
        yR(BW, "BW"),
        yR(Zi, "Zi"),
        yR(D8, "D8"),
        yR(m2, "m2"),
        Bg(n4, "n4"),
        Bg(VW, "VW"),
        Bg(L_, "L_"),
        Bg(Q2, "Q2"),
        Ff = function(n, t) {
            this.qs = n,
            this.Wk = t
        }
        ,
        {
            Ti: Ff.prototype
        }) {
            with ({
                Ti: (Ti.p2 = function(n, t) {
                    this.qs = n || 0,
                    this.yt = [],
                    this._t(t)
                }
                ).prototype
            })
                Ti._t = function(n) {
                    if (n) {
                        var t = 0
                          , e = n.length;
                        n.hasOwnProperty("KN") ? (t = n.KN,
                        e = n.Vv,
                        n = n.hg) : e = n.length;
                        var r, o;
                        for (r = e,
                        o = this.yt = new Array(e); r; o[e - r] = 255 & n.charCodeAt(--r + t))
                            ;
                        this.qs && o.reverse()
                    }
                }
                ,
                Ti.E_ = function(n) {
                    return this.yt.length >= -(-n >> 3)
                }
                ,
                Ti.v1 = function(n) {
                    if (!this.E_(n))
                        throw new Error("checkBuffer::missing bytes")
                }
                ,
                Ti.Dz = function(n, t) {
                    function e(n, t) {
                        for (; t--; n = 1073741824 == (1073741824 & (n %= 2147483648)) ? 2 * n : 2 * (n - 1073741824) + 2147483647 + 1)
                            ;
                        return n
                    }
                    if (n < 0 || t <= 0)
                        return 0;
                    this.v1(n + t);
                    for (var r, o = n % 8, i = this.yt.length - (n >> 3) - 1, u = this.yt.length + (-(n + t) >> 3), f = i - u, a = (this.yt[i] >> o & (1 << (f ? 8 - o : t)) - 1) + (f && (r = (n + t) % 8) ? (this.yt[u++] & (1 << r) - 1) << (f-- << 3) - o : 0); f; a += e(this.yt[u++], (f-- << 3) - o))
                        ;
                    return a
                }
                ;
            Ti.rj = function(n) {
                if (this.Wk)
                    throw new Error(n);
                return 1
            }
            ,
            Ti.e5 = function(n, t, e) {
                var r = new this.p2(this.qs,n);
                r.v1(t + e + 1);
                var o = Math.pow(2, e - 1) - 1
                  , i = r.Dz(t + e, 1)
                  , u = r.Dz(t, e)
                  , f = 0
                  , a = 2
                  , v = r.yt.length + (-t >> 3) - 1;
                do
                    for (var l = r.yt[++v], c = t % 8 || 8, C = 1 << c; C >>= 1; l & C && (f += 1 / a),
                    a *= 2)
                        ;
                while (t -= c);return u == (o << 1) + 1 ? f ? NaN : i ? -(1 / 0) : +(1 / 0) : (1 + i * -2) * (u || f ? u ? Math.pow(2, u - o) * (1 + f) : Math.pow(2, -o + 1) * f : 0)
            }
            ,
            Ti._9 = function(n, t, e) {
                var r = new this.p2(this.qs,n)
                  , o = r.Dz(0, t)
                  , i = Math.pow(2, t);
                return e && o >= i / 2 ? o - i : o
            }
            ,
            Ti.te = function(n, t, e) {
                n = parseFloat(n);
                var r, o, i, u, f, a = Math.pow(2, e - 1) - 1, v = -a + 1, l = a, c = v - t, C = isNaN(h = parseFloat(n)) || h == -(1 / 0) || h == +(1 / 0) ? h : 0, s = 0, O = 2 * a + 1 + t + 3, d = new Array(O), S = (h = 0 !== C ? 0 : h) < 0, h = Math.abs(h), m = Math.floor(h), j = h - m;
                for (r = O; r; d[--r] = 0)
                    ;
                for (r = a + 2; m && r; d[--r] = m % 2,
                m = Math.floor(m / 2))
                    ;
                for (r = a + 1; j > 0 && r; (d[++r] = ((j *= 2) >= 1) - 0) && --j)
                    ;
                for (r = -1; ++r < O && !d[r]; )
                    ;
                if (d[(o = t - 1 + (r = (s = a + 1 - r) >= v && s <= l ? r + 1 : a + 1 - (s = v - 1))) + 1]) {
                    if (!(i = d[o]))
                        for (u = o + 2; !i && u < O; i = d[u++])
                            ;
                    for (u = o + 1; i && --u >= 0; (d[u] = !d[u] - 0) && (i = 0))
                        ;
                }
                for (r = r - 2 < 0 ? -1 : r - 3; ++r < O && !d[r]; )
                    ;
                for ((s = a + 1 - r) >= v && s <= l ? ++r : s < v && (s != a + 1 - O && s < c && this.rj("encodeFloat::float underflow"),
                r = a + 1 - (s = v - 1)),
                (m || 0 !== C) && (s = l + 1,
                r = a + 2,
                C == -(1 / 0) ? S = 1 : isNaN(C) && (S = 1,
                d[r] = 1)),
                h = Math.abs(s + a),
                u = e + 1,
                f = ""; --u; f = h % 2 + f,
                h = h >>= 1)
                    ;
                for (h = 0,
                u = 0,
                r = (f = (S ? "1" : "0") + f + d.slice(r, r + t).join("")).length,
                eq = []; r; u = (u + 1) % 8)
                    h += (1 << u) * f.charAt(--r),
                    7 == u && (eq[eq.length] = String.fromCharCode(h),
                    h = 0);
                return eq[eq.length] = h ? String.fromCharCode(h) : "",
                (this.qs ? eq.reverse() : eq).join("")
            }
            ,
            Ti.h6 = function(n, t, e) {
                n = parseInt(n);
                var r = Math.pow(2, t);
                (n >= r || n < -(r / 2)) && this.rj("encodeInt::overflow") && (n = 0),
                n < 0 && (n += r);
                for (var o = []; n; )
                    o[o.length] = String.fromCharCode(n % 256),
                    n = Math.floor(n / 256);
                for (t = -(-t >> 3) - o.length; t--; o[o.length] = "\0")
                    ;
                return (this.qs ? o.reverse() : o).join("")
            }
            ,
            Ti.qb = function(n) {
                return this._9(n, 8, !0)
            }
            ,
            Ti.Mx = function(n) {
                return this.h6(n, 8, !0)
            }
            ,
            Ti.ph = function(n) {
                return this._9(n, 8, !1)
            }
            ,
            Ti.vb = function(n) {
                return this.h6(n, 8, !1)
            }
            ,
            Ti.s1 = function(n) {
                return this._9(n, 16, !0)
            }
            ,
            Ti.kZ = function(n) {
                return this.h6(n, 16, !0)
            }
            ,
            Ti.eR = function(n) {
                return this._9(n, 16, !1)
            }
            ,
            Ti.ko = function(n) {
                return this.h6(n, 16, !1)
            }
            ,
            Ti.so = function(n) {
                return this._9(n, 32, !0)
            }
            ,
            Ti.yu = function(n) {
                return this.h6(n, 32, !0)
            }
            ,
            Ti.PB = function(n) {
                return this._9(n, 32, !1)
            }
            ,
            Ti.T5 = function(n) {
                return this.h6(n, 32, !1)
            }
            ,
            Ti.I_ = function(n) {
                return this.e5(n, 23, 8)
            }
            ,
            Ti.AU = function(n) {
                return this.te(n, 23, 8)
            }
            ,
            Ti.qM = function(n) {
                return this.e5(n, 52, 11)
            }
            ,
            Ti.Dv = function(n) {
                return this.te(n, 52, 11)
            }
        }
        va = function(n) {
            for (var t, e, r, o, i, u = n.length, f = [], a = 0; a < u; a++)
                t = n.charCodeAt(a),
                0 == (65408 & t) ? f.push(t) : (55296 == (64512 & t) && (e = n.charCodeAt(a + 1),
                56320 == (64512 & e) ? (t = ((1023 & t) << 10 | 1023 & e) + 65536,
                a++) : console.log("Error decoding surrogate pair: " + t + "; " + e)),
                r = 255 & t,
                o = 65280 & t,
                i = 16711680 & t,
                t <= 2047 ? (f.push(192 | o >> 6 | r >> 6),
                f.push(128 | 63 & r)) : t <= 65535 ? (f.push(224 | o >> 12),
                f.push(128 | o >> 6 & 63 | r >> 6),
                f.push(128 | 63 & r)) : t <= 1114111 ? (f.push(240 | i >> 18),
                f.push(128 | i >> 12 & 63 | o >> 12),
                f.push(128 | o >> 6 & 63 | r >> 6),
                f.push(128 | 63 & r)) : (console.log("Error encoding to utf8: " + t + " is greater than U+10ffff"),
                f.push("?".charCodeAt(0))));
            return f
        }
        ,
        IF = function(n) {
            for (var t, e, r, o, i = n.length, u = "", f = 0; f < i; f++) {
                if (t = n[f],
                0 == (128 & t))
                    ;
                else if (240 == (248 & t)) {
                    if (e = n[f + 1],
                    r = n[f + 2],
                    o = n[f + 3],
                    128 != (192 & e) || 128 != (192 & r) || 128 != (192 & o)) {
                        console.log("Error decoding from utf8: " + t + "," + e + "," + r + "," + o);
                        continue
                    }
                    t = (7 & t) << 18 | (63 & e) << 12 | (63 & r) << 6 | 63 & o,
                    f += 3
                } else if (224 == (240 & t)) {
                    if (e = n[f + 1],
                    r = n[f + 2],
                    128 != (192 & e) || 128 != (192 & r)) {
                        console.log("Error decoding from utf8: " + t + "," + e + "," + r);
                        continue
                    }
                    t = (15 & t) << 12 | (63 & e) << 6 | 63 & r,
                    f += 2
                } else {
                    if (192 != (224 & t)) {
                        console.log("Error decoding from utf8: " + t + " encountered not in multi-byte sequence");
                        continue
                    }
                    if (e = n[f + 1],
                    128 != (192 & e)) {
                        console.log("Error decoding from utf8: " + t + "," + e);
                        continue
                    }
                    t = (31 & t) << 6 | 63 & e,
                    f += 1
                }
                t <= 65535 ? u += String.fromCharCode(t) : t > 65535 && t <= 1114111 ? (t -= 65536,
                u += String.fromCharCode(55296 | t >> 10) + String.fromCharCode(56320 | 1023 & t)) : console.log("Error encoding surrogate pair: " + t + " is greater than U+10ffff")
            }
            return u
        }
        ,
        Bg(Vz, "Vz"),
        Bg(eQ, "eQ"),
        Bg(VI, "VI"),
        Bg(dC, "dC"),
        yR(Ip, "Ip"),
        Ip.AY = function(n, t) {
            if ("true" == n)
                return !0;
            if ("false" == n)
                return !1;
            if (n.match(/^\d+$/))
                return parseInt(n);
            var e = n.match(/^([a-zA-Z0-9_]+)(\(\))?$/);
            if (e)
                return "()" == e[2] ? t[e[1]]() : t[e[1]];
            throw new Error("PB: Cannot interpret expression: " + n)
        }
        ,
        Ip.B6 = function(n) {
            for (var t = [], e = 1; e < arguments.length; e++)
                t.push(new Ip(arguments[e]));
            n.zw = t
        }
        ,
        Ip.ZF = function(n, t) {
            for (var e = 0; e < n.zw.length; e++) {
                var r = n.zw[e];
                t(r)
            }
        }
        ,
        Ip.Kt = function(n, t, e) {
            Ip.ZF(e, function(t) {
                if (t.Dw && (n["zj" + t.Sj] = !0),
                "Array" == t.fm.sY) {
                    var e = t.Sj + "rw";
                    n[e] = [],
                    void 0 === t.fm.hS || t.K1 || (n[e].length = Ip.AY(t.fm.hS, n)),
                    n[t.Sj + "XG"] = function() {
                        return n[e].length
                    }
                    ,
                    n[t.Sj + "Gw"] = function(r) {
                        n[e].length = r,
                        t.K1 && (n[t.R8] |= 1 << t.GT)
                    }
                    ,
                    n[t.Sj + "bh"] = function(r) {
                        return eQ.H_(r < n[e].length),
                        t.K1 && eQ.H_(0 != (n[t.R8] & 1 << t.GT)),
                        n[e][r]
                    }
                    ,
                    n[t.Sj + "XZ"] = function(r, o) {
                        eQ.H_(r < n[e].length),
                        t.K1 && eQ.H_(0 != (n[t.R8] & 1 << t.GT)),
                        n[e][r] = o
                    }
                    ,
                    n[t.Sj + "xz"] = function() {
                        return t.K1 && eQ.H_(0 != (n[t.R8] & 1 << t.GT)),
                        jh.Y_(n[e])
                    }
                    ,
                    n[t.Sj + "iy"] = function(r) {
                        n[e] = r.UX(),
                        t.K1 && (n[t.R8] |= 1 << t.GT)
                    }
                } else
                    n[t.pf] = t.lF,
                    ED(n, t.Sj, function() {
                        return n[t.pf]
                    }),
                    "Kx" != t.Sj && "ic" != t.Sj && "on" != t.Sj && Wf(n, t.Sj, function(e) {
                        t.K1 && (n[t.R8] |= 1 << t.GT),
                        t.Dw && (n["zj" + t.Sj] = !0),
                        n[t.pf] = e
                    });
                (t.K1 || t.Dw || t.IN) && (n["yW" + t.Sj] = function() {
                    return !(t.Dw && !n["zj" + t.Sj]) && t.GR(n)
                }
                ),
                t.K1 && (n["u2" + t.Sj] = function() {
                    n[t.R8] &= ~(1 << t.GT),
                    "Array" == t.fm.sY ? n[t.Sj + "rw"] = [] : n[t.pf] = t.lF
                }
                )
            }),
            n.So = function() {
                var t = 0;
                return Ip.ZF(e, function(e) {
                    e.GR(n) && (t += e.fm.So(n, e.Sj))
                }),
                t >= 65536 && (t += 2),
                t
            }
            ,
            ED(n, "fH", n.So),
            n.qN = function(t) {
                var r = eQ.q9(t);
                Ip.ZF(e, function(e) {
                    if (e.Dw && (n["zj" + e.Sj] = r + n.ic > eQ.q9(t)),
                    (e.Dw || e.K1 || e.IN) && !n["yW" + e.Sj]() ? n[e.pf] = e.lF : "ic" == e.Sj ? n[e.pf] = eQ.WfF(t, n.onIt & !0) : e.fm.qN(t, n, e.Sj),
                    "Kx" == e.Sj && n[e.pf] != eQ.Mr)
                        throw new Error(eQ.rb)
                });
                var o = r + n.icIt - eQ.q9(t);
                eQ.Pa(t, o)
            }
            ,
            n.VS = function(t) {
                var r = n.So()
                  , o = 0;
                r >= 65536 && (o = 1),
                Ip.ZF(e, function(e) {
                    "Kx" == e.Sj ? eQ.Rw(t, eQ.Mr) : "on" == e.Sj ? eQ.NP(t, o) : "ic" == e.Sj ? eQ.REE(t, r) : e.GR(n) && e.fm.VS(t, n, e.Sj)
                })
            }
            ,
            n.UE = function(t) {
                Ip.ZF(e, function(e) {
                    e.GR(n) && e.fm.UE(t, n, e.Sj)
                })
            }
        }
        ,
        yR(Ar, "Ar"),
        Bg(CandidateStream, "CandidateStream"),
        Bg(kzq, "kzq"),
        Bg(ConvivaContentInfo, "ConvivaContentInfo"),
        Bg(ConvivaNotification, "ConvivaNotification"),
        Bg(ConvivaStreamerProxy, "ConvivaStreamerProxy"),
        Bg(IcH, "IcH"),
        Bg(D4u, "D4u"),
        Bg(StreamInfo, "StreamInfo"),
        Bg(StreamSwitch, "StreamSwitch"),
        Bg(StreamerError, "StreamerError"),
        Bg(jh, "jh"),
        Bg(qu, "qu"),
        Bg(Gnw, "Gnw"),
        Bg(UF, "UF"),
        Bg(nD, "nD"),
        Bg(EW, "EW"),
        Bg(M8, "M8"),
        Bg(Inferrer, "Inferrer"),
        Bg(sk, "sk"),
        Bg(oL, "oL"),
        Bg(Yw, "Yw"),
        Bg(CO, "CO"),
        Bg(Uf, "Uf"),
        Bg(Uj, "Uj"),
        Bg(FFQ, "FFQ"),
        Bg(UU, "UU"),
        Bg(SH, "SH"),
        Bg(QnM, "QnM"),
        Bg(Lt, "Lt"),
        Bg(Dh, "Dh"),
        Bg(ct, "ct"),
        Bg(O9, "O9"),
        Bg(gV, "gV"),
        Bg(uPJ, "uPJ"),
        Bg(hF, "hF"),
        Bg(ConvivaLightSession, "ConvivaLightSession"),
        Bg(ConvivaMetricsSession, "ConvivaMetricsSession"),
        Bg(LivePass, "LivePass"),
        Bg(uf, "uf"),
        Bg(jo, "jo")
    }();
    var Conviva = "undefined" != typeof Conviva ? Conviva : function() {}
    ;
    Conviva.LivePass = ConvivaPrivateLoader.LivePass,
    Conviva.ConvivaContentInfo = ConvivaPrivateLoader.ConvivaContentInfo,
    Conviva.ConvivaNotification = ConvivaPrivateLoader.ConvivaNotification,
    Conviva.ConvivaLightSession = ConvivaPrivateLoader.ConvivaLightSession,
    Conviva.ConvivaStreamerProxy = ConvivaPrivateLoader.ConvivaStreamerProxy,
    Conviva.StreamSwitch = ConvivaPrivateLoader.StreamSwitch,
    Conviva.CandidateStream = ConvivaPrivateLoader.CandidateStream,
    Conviva.StreamerStateManager = ConvivaPrivateLoader.StreamerStateManager,
    Conviva.StreamerError = ConvivaPrivateLoader.StreamerError,
    Conviva.StreamInfo = ConvivaPrivateLoader.StreamInfo,
    Conviva.Inferrer = ConvivaPrivateLoader.Inferrer,
    Conviva.Trace = ConvivaPrivateLoader.ct,
    Conviva.Trace.AddTracer = ConvivaPrivateLoader.ct.rP,
    Conviva.Trace.Info = ConvivaPrivateLoader.ct.qF,
    Conviva.Trace.Warning = ConvivaPrivateLoader.ct.M3x
}
!function(t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
        e.Clipboard = t()
    }
}(function() {
    return function t(e, n, o) {
        function r(c, a) {
            if (!n[c]) {
                if (!e[c]) {
                    var s = "function" == typeof require && require;
                    if (!a && s)
                        return s(c, !0);
                    if (i)
                        return i(c, !0);
                    var u = new Error("Cannot find module '" + c + "'");
                    throw u.code = "MODULE_NOT_FOUND",
                    u
                }
                var l = n[c] = {
                    exports: {}
                };
                e[c][0].call(l.exports, function(t) {
                    var n = e[c][1][t];
                    return r(n ? n : t)
                }, l, l.exports, t, e, n, o)
            }
            return n[c].exports
        }
        for (var i = "function" == typeof require && require, c = 0; c < o.length; c++)
            r(o[c]);
        return r
    }({
        1: [function(t, e, n) {
            var o = t("matches-selector");
            e.exports = function(t, e, n) {
                for (var r = n ? t : t.parentNode; r && r !== document; ) {
                    if (o(r, e))
                        return r;
                    r = r.parentNode
                }
            }
        }
        , {
            "matches-selector": 2
        }],
        2: [function(t, e, n) {
            function o(t, e) {
                if (i)
                    return i.call(t, e);
                for (var n = t.parentNode.querySelectorAll(e), o = 0; o < n.length; ++o)
                    if (n[o] == t)
                        return !0;
                return !1
            }
            var r = Element.prototype
              , i = r.matchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector;
            e.exports = o
        }
        , {}],
        3: [function(t, e, n) {
            function o(t, e, n, o) {
                var i = r.apply(this, arguments);
                return t.addEventListener(n, i),
                {
                    destroy: function() {
                        t.removeEventListener(n, i)
                    }
                }
            }
            function r(t, e, n, o) {
                return function(n) {
                    n.delegateTarget = i(n.target, e, !0),
                    n.delegateTarget && o.call(t, n)
                }
            }
            var i = t("closest");
            e.exports = o
        }
        , {
            closest: 1
        }],
        4: [function(t, e, n) {
            n.node = function(t) {
                return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
            }
            ,
            n.nodeList = function(t) {
                var e = Object.prototype.toString.call(t);
                return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length"in t && (0 === t.length || n.node(t[0]))
            }
            ,
            n.string = function(t) {
                return "string" == typeof t || t instanceof String
            }
            ,
            n["function"] = function(t) {
                var e = Object.prototype.toString.call(t);
                return "[object Function]" === e
            }
        }
        , {}],
        5: [function(t, e, n) {
            function o(t, e, n) {
                if (!t && !e && !n)
                    throw new Error("Missing required arguments");
                if (!a.string(e))
                    throw new TypeError("Second argument must be a String");
                if (!a["function"](n))
                    throw new TypeError("Third argument must be a Function");
                if (a.node(t))
                    return r(t, e, n);
                if (a.nodeList(t))
                    return i(t, e, n);
                if (a.string(t))
                    return c(t, e, n);
                throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
            }
            function r(t, e, n) {
                return t.addEventListener(e, n),
                {
                    destroy: function() {
                        t.removeEventListener(e, n)
                    }
                }
            }
            function i(t, e, n) {
                return Array.prototype.forEach.call(t, function(t) {
                    t.addEventListener(e, n)
                }),
                {
                    destroy: function() {
                        Array.prototype.forEach.call(t, function(t) {
                            t.removeEventListener(e, n)
                        })
                    }
                }
            }
            function c(t, e, n) {
                return s(document.body, t, e, n)
            }
            var a = t("./is")
              , s = t("delegate");
            e.exports = o
        }
        , {
            "./is": 4,
            delegate: 3
        }],
        6: [function(t, e, n) {
            function o(t) {
                var e;
                if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName)
                    t.focus(),
                    t.setSelectionRange(0, t.value.length),
                    e = t.value;
                else {
                    t.hasAttribute("contenteditable") && t.focus();
                    var n = window.getSelection()
                      , o = document.createRange();
                    o.selectNodeContents(t),
                    n.removeAllRanges(),
                    n.addRange(o),
                    e = n.toString()
                }
                return e
            }
            e.exports = o
        }
        , {}],
        7: [function(t, e, n) {
            function o() {}
            o.prototype = {
                on: function(t, e, n) {
                    var o = this.e || (this.e = {});
                    return (o[t] || (o[t] = [])).push({
                        fn: e,
                        ctx: n
                    }),
                    this
                },
                once: function(t, e, n) {
                    function o() {
                        r.off(t, o),
                        e.apply(n, arguments)
                    }
                    var r = this;
                    return o._ = e,
                    this.on(t, o, n)
                },
                emit: function(t) {
                    var e = [].slice.call(arguments, 1)
                      , n = ((this.e || (this.e = {}))[t] || []).slice()
                      , o = 0
                      , r = n.length;
                    for (o; o < r; o++)
                        n[o].fn.apply(n[o].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {})
                      , o = n[t]
                      , r = [];
                    if (o && e)
                        for (var i = 0, c = o.length; i < c; i++)
                            o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                    return r.length ? n[t] = r : delete n[t],
                    this
                }
            },
            e.exports = o
        }
        , {}],
        8: [function(t, e, n) {
            "use strict";
            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            n.__esModule = !0;
            var i = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var o = e[n];
                        o.enumerable = o.enumerable || !1,
                        o.configurable = !0,
                        "value"in o && (o.writable = !0),
                        Object.defineProperty(t, o.key, o)
                    }
                }
                return function(e, n, o) {
                    return n && t(e.prototype, n),
                    o && t(e, o),
                    e
                }
            }()
              , c = t("select")
              , a = o(c)
              , s = function() {
                function t(e) {
                    r(this, t),
                    this.resolveOptions(e),
                    this.initSelection()
                }
                return t.prototype.resolveOptions = function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    this.action = t.action,
                    this.emitter = t.emitter,
                    this.target = t.target,
                    this.text = t.text,
                    this.trigger = t.trigger,
                    this.selectedText = ""
                }
                ,
                t.prototype.initSelection = function() {
                    if (this.text && this.target)
                        throw new Error('Multiple attributes declared, use either "target" or "text"');
                    if (this.text)
                        this.selectFake();
                    else {
                        if (!this.target)
                            throw new Error('Missing required attributes, use either "target" or "text"');
                        this.selectTarget()
                    }
                }
                ,
                t.prototype.selectFake = function() {
                    var t = this;
                    this.removeFake(),
                    this.fakeHandler = document.body.addEventListener("click", function() {
                        return t.removeFake()
                    }),
                    this.fakeElem = document.createElement("textarea"),
                    this.fakeElem.style.position = "absolute",
                    this.fakeElem.style.left = "-9999px",
                    this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + "px",
                    this.fakeElem.setAttribute("readonly", ""),
                    this.fakeElem.value = this.text,
                    document.body.appendChild(this.fakeElem),
                    this.selectedText = a["default"](this.fakeElem),
                    this.copyText()
                }
                ,
                t.prototype.removeFake = function() {
                    this.fakeHandler && (document.body.removeEventListener("click"),
                    this.fakeHandler = null),
                    this.fakeElem && (document.body.removeChild(this.fakeElem),
                    this.fakeElem = null)
                }
                ,
                t.prototype.selectTarget = function() {
                    this.selectedText = a["default"](this.target),
                    this.copyText()
                }
                ,
                t.prototype.copyText = function() {
                    var t = void 0;
                    try {
                        t = document.execCommand(this.action)
                    } catch (e) {
                        t = !1
                    }
                    this.handleResult(t)
                }
                ,
                t.prototype.handleResult = function(t) {
                    t ? this.emitter.emit("success", {
                        action: this.action,
                        text: this.selectedText,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    }) : this.emitter.emit("error", {
                        action: this.action,
                        trigger: this.trigger,
                        clearSelection: this.clearSelection.bind(this)
                    })
                }
                ,
                t.prototype.clearSelection = function() {
                    this.target && this.target.blur(),
                    window.getSelection().removeAllRanges()
                }
                ,
                t.prototype.destroy = function() {
                    this.removeFake()
                }
                ,
                i(t, [{
                    key: "action",
                    set: function() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? "copy" : arguments[0];
                        if (this._action = t,
                        "copy" !== this._action && "cut" !== this._action)
                            throw new Error('Invalid "action" value, use either "copy" or "cut"')
                    },
                    get: function() {
                        return this._action
                    }
                }, {
                    key: "target",
                    set: function(t) {
                        if (void 0 !== t) {
                            if (!t || "object" != typeof t || 1 !== t.nodeType)
                                throw new Error('Invalid "target" value, use a valid Element');
                            this._target = t
                        }
                    },
                    get: function() {
                        return this._target
                    }
                }]),
                t
            }();
            n["default"] = s,
            e.exports = n["default"]
        }
        , {
            select: 6
        }],
        9: [function(t, e, n) {
            "use strict";
            function o(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            function r(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function i(t, e) {
                if ("function" != typeof e && null !== e)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            function c(t, e) {
                var n = "data-clipboard-" + t;
                if (e.hasAttribute(n))
                    return e.getAttribute(n)
            }
            n.__esModule = !0;
            var a = t("./clipboard-action")
              , s = o(a)
              , u = t("tiny-emitter")
              , l = o(u)
              , f = t("good-listener")
              , d = o(f)
              , h = function(t) {
                function e(n, o) {
                    r(this, e),
                    t.call(this),
                    this.resolveOptions(o),
                    this.listenClick(n)
                }
                return i(e, t),
                e.prototype.resolveOptions = function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    this.action = "function" == typeof t.action ? t.action : this.defaultAction,
                    this.target = "function" == typeof t.target ? t.target : this.defaultTarget,
                    this.text = "function" == typeof t.text ? t.text : this.defaultText
                }
                ,
                e.prototype.listenClick = function(t) {
                    var e = this;
                    this.listener = d["default"](t, "click", function(t) {
                        return e.onClick(t)
                    })
                }
                ,
                e.prototype.onClick = function(t) {
                    var e = t.delegateTarget || t.currentTarget;
                    this.clipboardAction && (this.clipboardAction = null),
                    this.clipboardAction = new s["default"]({
                        action: this.action(e),
                        target: this.target(e),
                        text: this.text(e),
                        trigger: e,
                        emitter: this
                    })
                }
                ,
                e.prototype.defaultAction = function(t) {
                    return c("action", t)
                }
                ,
                e.prototype.defaultTarget = function(t) {
                    var e = c("target", t);
                    if (e)
                        return document.querySelector(e)
                }
                ,
                e.prototype.defaultText = function(t) {
                    return c("text", t)
                }
                ,
                e.prototype.destroy = function() {
                    this.listener.destroy(),
                    this.clipboardAction && (this.clipboardAction.destroy(),
                    this.clipboardAction = null)
                }
                ,
                e
            }(l["default"]);
            n["default"] = h,
            e.exports = n["default"]
        }
        , {
            "./clipboard-action": 8,
            "good-listener": 5,
            "tiny-emitter": 7
        }]
    }, {}, [9])(9)
});
function RumTracking(e) {
    "use strict";
    function n(e) {
        f(),
        q = e,
        q.enabled = q.enabled !== !1,
        q.enabled && (q["beacon-url"] = q["beacon-url"] || "/lite/rum-track",
        q["beacon-service"] = q["beacon-service"] || "lite",
        q["event-name"] = q["event-name"] || "RealUserMonitoringEvent",
        q["topic-name"] = q["topic-name"] || "RealUserMonitoringEvent",
        q["app-id"] = q["app-id"] || "linkedin.rum.tracking",
        q["is-single-page-app"] = q["is-single-page-app"] !== !1,
        q["cross-origin"] = q["cross-origin"] || !1,
        q["beacon-timeout"] = void 0 === q["beacon-timeout"] ? 6e4 : q["beacon-timeout"],
        q["request-sampling-rate"] = q["request-sampling-rate"] || .01,
        q["user-timing-mark-enabled"] = q["user-timing-mark-enabled"] || !1,
        q["user-timing-measure-enabled"] = q["user-timing-measure-enabled"] !== !1,
        q["beacon-source"] && "internal-apps" === q["beacon-source"] && (A = !0,
        q["page-key-prefix"] = q["page-key-prefix"] || ""),
        q["navigation-timing-only"] = q["navigation-timing-only"] || !1,
        q["navigation-timing-only"] ? (q["enable-rs-timing"] = q["enable-rs-timing"] || !1,
        q["enable-rs-timing"] && r(),
        "complete" == document.readyState ? setTimeout(u, 500) : window.addEventListener("load", function() {
            setTimeout(u, 500)
        })) : (q["enable-rs-timing"] = q["enable-rs-timing"] !== !1,
        r(),
        window.addEventListener("unload", u),
        window.addEventListener("scroll", function() {
            if (!E)
                try {
                    E = T(),
                    h = w()
                } catch (e) {}
        })))
    }
    function r() {
        var e = {
            "default": .001,
            xmlhttprequest: 1
        };
        if (null !== q["rs-sample-rate"] && "object" == typeof q["rs-sample-rate"])
            for (var n in q["rs-sample-rate"])
                q["rs-sample-rate"].hasOwnProperty(n) && (e[n] = q["rs-sample-rate"][n]);
        q["rs-sample-rate"] = e,
        K.resourceTimingSupport === !0 && (K.readResourceTiming(),
        K.setBufferSize(100),
        null === window.performance.onresourcetimingbufferfull ? window.performance.onresourcetimingbufferfull = K.readResourceTiming : null === window.performance.onwebkitresourcetimingbufferfull && (window.performance.onwebkitresourcetimingbufferfull = K.readResourceTiming)),
        k = document.createElement("a"),
        M = document.createElement("a")
    }
    function t() {
        var e = document.querySelector('meta[name="treeID"]');
        return e && e.getAttribute("content")
    }
    function i() {
        var e = document.querySelector('meta[name="pageKey"]');
        return e ? e.getAttribute("content") : document.body.id ? document.body.id.substring("pagekey-".length) : ""
    }
    function o() {
        var e, n = document.querySelector('meta[name="renderingMode"]');
        return n && (e = n.getAttribute("data-mode"),
        "BIGPIPE" === e && (e = "BIG_PIPE")),
        e
    }
    function a() {
        var e, n, r;
        if (!I) {
            if (window.performance && window.performance.timing && window.performance.navigation) {
                for (S.navigationTimingApi = !0,
                e = window.performance.timing,
                _ = e.navigationStart,
                n = 0; n < H.length; n++)
                    r = H[n],
                    e[r] && (S[r] = e[r]);
                S.redirectCount = window.performance.navigation.redirectCount,
                S.navigationType = window.performance.navigation.type
            } else
                S.navigationTimingApi = !1;
            I = !0
        }
    }
    function c() {
        window.performance && (window.performance.clearMarks && window.performance.clearMarks(),
        window.performance.clearMeasures && window.performance.clearMeasures())
    }
    function m(e, n) {
        var r, t, i, o = [];
        for (t = 0; t < e.length; t++)
            r = e[t],
            r && (i = {},
            i.entryType = n,
            i.name = r.name,
            i.startTime = r.startTime,
            i.duration = r.duration,
            o.push(i));
        return o
    }
    function s() {
        var e, n = [];
        window.performance && "function" == typeof window.performance.getEntriesByType && (q["user-timing-measure-enabled"] && (e = window.performance.getEntriesByType("measure"),
        n = n.concat(m(e, "MEASURE"))),
        q["user-timing-mark-enabled"] && (e = window.performance.getEntriesByType("mark"),
        n = n.concat(m(e, "MARK")))),
        S.userTimingEntries = n,
        c()
    }
    function d() {
        var e;
        if (Object.keys(b).length > 0) {
            S.detailedRenderTimingEntries = [];
            for (var n in b)
                b.hasOwnProperty(n) && S.detailedRenderTimingEntries.push(b[n])
        }
        if (K.readResourceTiming(),
        S.resourceTimingEntries)
            for (e = S.resourceTimingEntries.length - 1; e >= 0; e--)
                S.resourceTimingEntries[e].name && (S.resourceTimingEntries[e].name = S.resourceTimingEntries[e].name.split(/[?#]/)[0]);
        a(),
        s()
    }
    function u() {
        var e, n, r, a;
        if (q.enabled && (d(),
        "navigationStart"in S && P && (q["beacon-source"] && (S.timeSource = q["beacon-source"]),
        a = t(),
        a && (S.treeId = a),
        !S.hasOwnProperty("pageKey") && B && (S.pageKey = i()),
        S.pageKey))) {
            if (S.boomerangStart = _,
            S.isSinglePageApp = q["is-single-page-app"],
            S.isSinglePageApp)
                if (q["web-ui-framework"] && (S.webUIFramework = q["web-ui-framework"]),
                S.appRenderMode = o(),
                B ? (S.pageLoadMode = "INITIAL",
                y() && (S.isAppRenderFailed = !0)) : S.pageLoadMode = "PARTIAL",
                "renderCompleteTime"in S)
                    S.timeDone = w();
                else if (!q["navigation-timing-only"])
                    return;
            A && !document.querySelector('meta[name="pageKey"]') && (S.pageKey = q["page-key-prefix"] + ":" + window.location.pathname);
            try {
                "lite" == q["beacon-service"] ? (n = JSON.stringify(S),
                q["cross-origin"] ? (r = document.body.appendChild(new Image),
                r.width = 1,
                r.height = 1,
                r.src = q["beacon-url"] + "?ir=t&dy=t&plist=" + encodeURIComponent(n)) : (e = new XMLHttpRequest,
                e.open("POST", q["beacon-url"], !0),
                e.setRequestHeader("content-type", "application/x-www-form-urlencoded;charset=UTF-8"),
                e.setRequestHeader("X-IsAJAXForm", "1"),
                e.send("plist=" + encodeURIComponent(n)))) : p(S)
            } catch (c) {}
            f()
        }
    }
    function p(e) {
        var n, r = {
            eventInfo: {
                eventName: q["event-name"],
                topicName: q["topic-name"],
                appId: q["app-id"]
            },
            eventBody: e
        };
        r.eventBody.requestHeader = {
            pageKey: e.pageKey
        },
        r.eventBody.trackingTime = -1,
        n = new XMLHttpRequest,
        n.open("POST", q["beacon-url"], !0),
        n.setRequestHeader("content-type", "application/json"),
        n.send(JSON.stringify([r]))
    }
    function f() {
        S = {},
        v = [],
        O = [],
        b = {},
        h = void 0,
        E = void 0,
        R = Math.random(),
        P = !0,
        C && (clearTimeout(C),
        C = void 0)
    }
    function g(e) {
        var n, r, t = document.querySelectorAll("img"), i = [];
        for (r = t.length - 1; r >= 0; r--)
            n = t[r],
            n && n.src && n.src.length > 0 && i.push(n);
        return i
    }
    function l(e) {
        var n, r = e.getBoundingClientRect();
        return n = {
            top: Math.max(r.top, 0),
            left: Math.max(r.left, 0),
            bottom: Math.min(r.bottom, window.innerHeight || doc.documentElement.clientHeight),
            right: Math.min(r.right, window.innerWidth || doc.documentElement.clientWidth)
        },
        !(n.bottom <= n.top || n.right <= n.left)
    }
    function w() {
        var e, n, r, t;
        if (h)
            return h;
        if (a(),
        h = S.renderCompleteTime - S.navigationStart,
        O)
            for (r = O.length - 1; r >= 0; r--)
                if (n = O[r])
                    for (t = v.length - 1; t >= 0; t--)
                        if (e = v[t],
                        n.src === e.name) {
                            if (E && _ && e.startTime > E - _)
                                break;
                            if (n.width * n.height <= 1)
                                break;
                            l(n) && (h = Math.max(h, _ + e.responseEnd - S.navigationStart));
                            break
                        }
        return h
    }
    function T() {
        return window.performance && window.performance.timing && "function" == typeof window.performance.now ? Math.round(window.performance.now()) + window.performance.timing.navigationStart : (new Date).getTime()
    }
    function y() {
        return null != document.querySelector("code#renderError")
    }
    var S, b, v, h, E, R, k, M, B = !0, I = !1, A = !1, _ = window.HEAD_LOAD_TIMESTAMP || void 0, q = {}, C = void 0, L = 0, O = [], P = !0, H = ["loadEventEnd", "loadEventStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "responseEnd", "responseStart", "requestStart", "secureConnectionStart", "connectEnd", "connectStart", "domainLookupEnd", "domainLookupStart", "fetchStart", "redirectEnd", "redirectStart", "unloadEventEnd", "unloadEventStart", "navigationStart"], K = {
        resourceTimingSupport: window.performance && "function" == typeof window.performance.getEntriesByType,
        clearBuffer: function() {
            K.resourceTimingSupport === !0 && q["enable-rs-timing"] && (window.performance.clearResourceTimings && "function" == typeof window.performance.clearResourceTimings ? window.performance.clearResourceTimings() : window.performance.webkitClearResourceTimings && "function" == typeof window.performance.webkitClearResourceTimings && window.performance.webkitClearResourceTimings())
        },
        setBufferSize: function(e) {
            K.resourceTimingSupport === !0 && q["enable-rs-timing"] && (window.performance.setResourceTimingBufferSize && "function" == typeof window.performance.setResourceTimingBufferSize ? window.performance.setResourceTimingBufferSize(e) : window.performance.webkitSetResourceTimingBufferSize && "function" == typeof window.performance.webkitSetResourceTimingBufferSize && window.performance.webkitSetResourceTimingBufferSize(e))
        },
        resourceTimingFields: {
            name: !0,
            entryType: !1,
            duration: !0,
            initiatorType: !0,
            fetchStart: !0,
            responseEnd: !0,
            startTime: !0,
            connectEnd: !0,
            connectStart: !0,
            domainLookupEnd: !0,
            domainLookupStart: !0,
            redirectEnd: !0,
            redirectStart: !0,
            requestStart: !0,
            responseStart: !0,
            secureConnectionStart: !0,
            nextHopProtocol: !0,
            transferSize: !0,
            decodedBodySize: !0,
            encodedBodySize: !0,
            workerStart: !0
        },
        readResourceTiming: function() {
            var e, n, r, t, i, o, a = "rand", c = !1, m = S.resourceTimingEntries || [];
            if (K.resourceTimingSupport === !0 && q["enable-rs-timing"]) {
                for (e = window.performance.getEntriesByType("resource"),
                n = 0; n < e.length; n++) {
                    t = {};
                    for (r in e[n])
                        K.resourceTimingFields[r] === !0 && (t[r] = e[n][r]);
                    "img" === t.initiatorType && v.push(t),
                    i = Math.random(),
                    o = q["rs-sample-rate"][e[n].initiatorType] || q["rs-sample-rate"]["default"],
                    c = R <= q["request-sampling-rate"],
                    (c || i <= o) && (m.push(t),
                    t.sampleMode = "",
                    c && (t.sampleMode = "requestSampled,"),
                    i <= o && (t.sampleMode += a + o.toString()))
                }
                K.clearBuffer(),
                m.length > 0 && (S.resourceTimingEntries = m)
            }
        }
    };
    return n(e),
    {
        setPageKey: function(e) {
            S.pageKey = e
        },
        addTreeId: function(e, n) {
            var r;
            if (k && M && (k.href = n,
            K.readResourceTiming(),
            S.resourceTimingEntries))
                for (r = S.resourceTimingEntries.length - 1; r >= 0; r--)
                    if (M.href = S.resourceTimingEntries[r].name,
                    k.protocol === M.protocol && k.host === M.host && k.pathname === M.pathname && (k.search === M.search || "" === k.search)) {
                        S.resourceTimingEntries[r].resourceTreeId = e;
                        break
                    }
        },
        appTransitionStart: function(e) {
            (e || L > 0) && (u(),
            f(),
            S.navigationStart = T(),
            B = !1)
        },
        appRenderComplete: function() {
            L++,
            S.renderCompleteTime = T(),
            O = g(),
            C || (C = setTimeout(u, q["beacon-timeout"]))
        },
        appViewRenderStart: function(e, n) {
            b[e] = {
                renderName: n || e,
                viewName: n,
                viewId: e,
                renderStart: T()
            }
        },
        appViewRenderComplete: function(e, n) {
            b[e] && (b[e].renderEnd = T())
        },
        setDeepLinkTrackingId: function(e) {
            P = !1
        },
        setWindowHiddenState: function(e) {
            S.isImpactedByHiddenWindow = e
        },
        customMarkNames: {
            UI_FRAMEWORK_BOOTSTRAP_START: "mark_ui_framework_bootstrap_start",
            UI_FRAMEWORK_BOOTSTRAP_END: "mark_ui_framework_bootstrap_end",
            ABOVE_THE_FOLD: "mark_above_the_fold"
        }
    }
}
var picturePolyfill = function(t) {
    "use strict";
    var e, r, i, n = 100, a = !1;
    return {
        _getAttrs: function(t, e) {
            for (var r, i, n = {}, a = 0, s = e.length; a < s; a += 1)
                r = e[a],
                i = t.getAttribute(r),
                i && (n[r] = i);
            return n
        },
        _getAttrsList: function(t) {
            for (var e = [], r = 0, i = t.attributes, n = i.length; r < n; r++)
                e.push(i.item(r).nodeName);
            return e
        },
        _getSrcsetArray: function(t) {
            var e, r, i, n, a = [];
            if (null === t || "" === t || "undefined" == typeof t)
                return a;
            n = t.split(",");
            for (var s = 0, u = n.length; s < u; s += 1)
                e = n[s].trim().split(" "),
                i = 1 === e.length ? 1 : parseFloat(e[e.length - 1], 10),
                r = e[0],
                a.push({
                    pxr: i,
                    src: r
                });
            return a.sort(function(t, e) {
                var r = t.pxr
                  , i = e.pxr;
                return r < i ? -1 : r > i ? 1 : 0
            })
        },
        _getSrcFromSrcset: function(t, e) {
            var r, i, n = 0, a = -1;
            if (null === t || "" === t || "undefined" == typeof t)
                return "";
            r = this._getSrcsetArray(t),
            i = r.length;
            do
                (r[n].pxr >= e || n === i - 1) && (a = n),
                n += 1;
            while (!(a > -1 || n >= i));return r[a].src
        },
        _getSrcsetFromData: function(e) {
            for (var r, i, n, a, s = 0, u = e.length; s < u; s += 1)
                if (r = e[s],
                i = r.media,
                a = r.srcset,
                n = r.src,
                !i || t.matchMedia(i).matches)
                    return a ? a : n ? n : "";
            return ""
        },
        _getImgTagsInPicture: function(t) {
            var e, r = t;
            if (e = t.getElementsByTagName("img"),
            e.length > 0)
                return e;
            do
                if (r = r.nextSibling,
                null === r)
                    return [];
            while ("IMG" !== r.tagName);return [r]
        },
        _setImgAttributes: function(t, e) {
            function r(t, e, r) {
                t.getAttribute(e) !== r && t.setAttribute(e, r)
            }
            var i, n, a, s, u, c = this._getImgTagsInPicture(t);
            return 0 !== c.length && (i = c[0],
            i.getAttribute("data-original-src") || (r(i, "data-original-src", i.getAttribute("src")),
            r(i, "data-original-srcset", i.getAttribute("srcset"))),
            n = e.src,
            a = e.srcset,
            n || a ? (s = n,
            u = a) : (s = i.getAttribute("data-original-src"),
            u = i.getAttribute("data-original-srcset")),
            r(i, "src", s),
            void r(i, "srcset", u))
        },
        _getSourcesData: function(t) {
            for (var e, r, i = [], n = t.getElementsByTagName("source"), a = 0, s = n.length; a < s; a += 1)
                e = n[a],
                r = this._getAttrs(e, this._getAttrsList(e)),
                i.push(r);
            return i
        },
        _addListeners: function() {
            function e() {
                picturePolyfill.parse(document)
            }
            function r() {
                clearTimeout(i),
                i = setTimeout(e, n)
            }
            return !(!this.isUseful || a) && (t.addEventListener ? (t.addEventListener("resize", r),
            t.addEventListener("DOMContentLoaded", function() {
                e(),
                t.removeEventListener("load", e)
            }),
            t.addEventListener("load", e)) : t.attachEvent && (t.attachEvent("onload", e),
            t.attachEvent("onresize", r)),
            void (a = !0))
        },
        initialize: function() {
            this._pxRatio = t.devicePixelRatio || 1,
            this._mqSupport = !!t.matchMedia && null !== t.matchMedia("only all") && t.matchMedia("only all").matches,
            this.isUseful = !t.HTMLPictureElement,
            e = [],
            r = 0,
            this._addListeners()
        },
        parse: function(t, i) {
            var n, a, s, u, c, l, o;
            if (!this.isUseful)
                return 0;
            "undefined" == typeof i && (i = !0),
            s = (t || document).getElementsByTagName("picture"),
            l = this._mqSupport;
            for (var g = 0, d = s.length; g < d; g += 1)
                n = null,
                a = s[g],
                i && (o = a.getAttribute("data-cache-index"),
                null !== o && (n = e[o])),
                n || (n = this._getSourcesData(a),
                e[r] = n,
                a.setAttribute("data-cache-index", r),
                r += 1),
                l && 0 !== n.length ? (c = this._getSrcsetFromData(n),
                u = this._getSrcFromSrcset(c, this._pxRatio)) : (u = a.getAttribute("data-default-src"),
                c = a.getAttribute("data-default-srcset")),
                this._setImgAttributes(a, {
                    src: u,
                    srcset: c,
                    alt: a.getAttribute("data-alt")
                });
            return g
        }
    }
}(window);
picturePolyfill.initialize(),
picturePolyfill.parse();
!function(e, t) {
    function i() {
        e.removeEventListener("load", i, !1),
        r = !0
    }
    function n(e) {
        return l = l || new n.Class(e)
    }
    function o(e, t) {
        for (var i in t)
            e[i] = t[i];
        return e
    }
    function s() {
        "#ath" == t.location.hash && history.replaceState("", e.document.title, t.location.href.split("#")[0]),
        d.test(t.location.href) && history.replaceState("", e.document.title, t.location.href.replace(d, "$1")),
        h.test(t.location.search) && history.replaceState("", e.document.title, t.location.href.replace(h, "$2"))
    }
    var a = "addEventListener"in e
      , r = !1;
    "complete" === t.readyState ? r = !0 : a && e.addEventListener("load", i, !1);
    var l, d = /\/ath(\/)?$/, h = /([\?&]ath=[^&]*$|&ath=[^&]*(&))/;
    n.intl = {
        de_de: {
            ios: "Um diese Web-App zum Home-Bildschirm hinzuzufügen, tippen Sie auf %icon und dann <strong>Zum Home-Bildschirm</strong>.",
            android: "Um diese Web-App zum Home-Bildschirm hinzuzufügen, öffnen Sie das Menü und tippen dann auf <strong>Zum Startbildschirm hinzufügen</strong>. <small>Wenn Ihr Gerät eine Menütaste hat, lässt sich das Browsermenü über diese öffnen. Ansonsten tippen Sie auf %icon.</small>"
        },
        da_dk: {
            ios: "For at tilføje denne web app til hjemmeskærmen: Tryk %icon og derefter <strong>Føj til hjemmeskærm</strong>.",
            android: "For at tilføje denne web app til hjemmeskærmen, åbn browser egenskaber menuen og tryk på <strong>Føj til hjemmeskærm</strong>. <small>Denne menu kan tilgås ved at trykke på menu knappen, hvis din enhed har en, eller ved at trykke på det øverste højre menu ikon %icon.</small>"
        },
        en_us: {
            ios: "To add this web app to the home screen: tap %icon and then <strong>Add to Home Screen</strong>.",
            android: "To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon %icon.</small>"
        },
        es_es: {
            ios: "Para añadir esta aplicación web a la pantalla de inicio: pulsa %icon y selecciona <strong>Añadir a pantalla de inicio</strong>.",
            android: "Para añadir esta aplicación web a la pantalla de inicio, abre las opciones y pulsa <strong>Añadir a pantalla inicio</strong>. <small>El menú se puede acceder pulsando el botón táctil en caso de tenerlo, o bien el icono de la parte superior derecha de la pantalla %icon.</small>"
        },
        fi_fi: {
            ios: "Liitä tämä sovellus kotivalikkoon: klikkaa %icon ja tämän jälkeen <strong>Lisää kotivalikkoon</strong>.",
            android: "Lisätäksesi tämän sovelluksen aloitusnäytölle, avaa selaimen valikko ja klikkaa tähti -ikonia tai <strong>Lisää aloitusnäytölle tekstiä</strong>. <small>Valikkoon pääsee myös painamalla menuvalikkoa, jos laitteessasi on sellainen tai koskettamalla oikealla yläkulmassa menu ikonia %icon.</small>"
        },
        fr_fr: {
            ios: "Pour ajouter cette application web sur l'écran d'accueil : Appuyez %icon et sélectionnez <strong>Ajouter sur l'écran d'accueil</strong>.",
            android: 'Pour ajouter cette application web sur l\'écran d\'accueil : Appuyez sur le bouton "menu", puis sur <strong>Ajouter sur l\'écran d\'accueil</strong>. <small>Le menu peut-être accessible en appuyant sur le bouton "menu" du téléphone s\'il en possède un <i class="fa fa-bars"></i>. Sinon, il se trouve probablement dans la coin supérieur droit du navigateur %icon.</small>'
        },
        he_il: {
            ios: '<span dir="rtl">להוספת האפליקציה למסך הבית: ללחוץ על %icon ואז <strong>הוסף למסך הבית</strong>.</span>',
            android: "To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon %icon.</small>"
        },
        hu_hu: {
            ios: "Ha hozzá szeretné adni ezt az alkalmazást a kezdőképernyőjéhez, érintse meg a következő ikont: %icon , majd a <strong>Hozzáadás a kezdőképernyőhöz</strong> menüpontot.",
            android: "Ha hozzá szeretné adni ezt az alkalmazást a kezdőképernyőjéhez, a böngésző menüjében kattintson a <strong>Hozzáadás a kezdőképernyőhöz</strong> menüpontra. <small>A böngésző menüjét a következő ikon megérintésével tudja megnyitni: %icon.</small>"
        },
        it_it: {
            ios: "Per aggiungere questa web app alla schermata iniziale: premi %icon e poi <strong>Aggiungi a Home</strong>.",
            android: "Per aggiungere questa web app alla schermata iniziale, apri il menu opzioni del browser e premi su <strong>Aggiungi alla homescreen</strong>. <small>Puoi accedere al menu premendo il pulsante hardware delle opzioni se la tua device ne ha uno, oppure premendo l'icona %icon in alto a destra.</small>"
        },
        ja_jp: {
            ios: "このウェプアプリをホーム画面に追加するために%iconを押して<strong>ホーム画面に追加</strong>。",
            android: "To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon %icon.</small>"
        },
        ko_kr: {
            ios: "홈 화면에 바로가기 생성: %icon 을 클릭한 후 <strong>홈 화면에 추가</strong>.",
            android: "브라우저 옵션 메뉴의 <string>홈 화면에 추가</string>를 클릭하여 홈화면에 바로가기를 생성할 수 있습니다. <small>옵션 메뉴는 장치의 메뉴 버튼을 누르거나 오른쪽 상단의 메뉴 아이콘 %icon을 클릭하여 접근할 수 있습니다.</small>"
        },
        nb_no: {
            ios: "For å installere denne appen på hjem-skjermen: trykk på %icon og deretter <strong>Legg til på Hjem-skjerm</strong>.",
            android: "For å legge til denne webappen på startsiden åpner en nettlesermenyen og velger <strong>Legg til på startsiden</strong>. <small>Menyen åpnes ved å trykke på den fysiske menyknappen hvis enheten har det, eller ved å trykke på menyikonet øverst til høyre %icon.</small>"
        },
        pt_br: {
            ios: "Para adicionar este app à tela de início: clique %icon e então <strong>Tela de início</strong>.",
            android: 'Para adicionar este app à tela de início, abra o menu de opções do navegador e selecione <strong>Adicionar à tela inicial</strong>. <small>O menu pode ser acessado pressionando o "menu" button se o seu dispositivo tiver um, ou selecionando o ícone %icon no canto superior direito.</small>'
        },
        pt_pt: {
            ios: "Para adicionar esta app ao ecrã principal: clique %icon e depois <strong>Ecrã principal</strong>.",
            android: 'Para adicionar esta app web ecrã principal, abra o menu de opções do navegador e selecione <strong>Adicionar à tela inicial</strong>. <small>O menu pode ser acessado pressionando o "menu" button se o seu dispositivo tiver um, ou selecionando o ícone %icon no canto superior direito.</small>'
        },
        nl_nl: {
            ios: "Om deze webapp aan je startscherm toe te voegen, klik op %icon en dan <strong>Zet in startscherm</strong>.",
            android: 'Om deze webapp aan je startscherm toe te voegen, open de browserinstellingen en tik op <strong>Toevoegen aan startscherm</strong>. <small>Gebruik de "menu" knop als je telefoon die heeft, anders het menu-icoon rechtsbovenin %icon.</small>'
        },
        ru_ru: {
            ios: 'Чтобы добавить этот сайт на свой домашний экран, нажмите на иконку %icon и затем <strong>На экран "Домой"</strong>.',
            android: "Чтобы добавить сайт на свой домашний экран, откройте меню браузера и нажмите на <strong>Добавить на главный экран</strong>. <small>Меню можно вызвать, нажав на кнопку меню вашего телефона, если она есть. Или найдите иконку сверху справа %icon[иконка].</small>"
        },
        sv_se: {
            ios: "För att lägga till denna webbapplikation på hemskärmen: tryck på %icon och därefter <strong>Lägg till på hemskärmen</strong>.",
            android: "För att lägga till den här webbappen på hemskärmen öppnar du webbläsarens alternativ-meny och väljer <strong>Lägg till på startskärmen</strong>. <small>Man hittar menyn genom att trycka på hårdvaruknappen om din enhet har en sådan, eller genom att trycka på menyikonen högst upp till höger %icon.</small>"
        },
        tr_tr: {
            ios: "Uygulamayı ana ekrana eklemek için, %icon ve ardından <strong>ana ekrana ekle</strong> butonunu tıklayın.",
            android: "Uygulamayı ana ekrana eklemek için, menüye girin ve <strong>ana ekrana ekle</strong> butonunu tıklayın. <small>Cihazınız menü tuşuna sahip ise menüye girmek için menü tuşunu tıklayın. Aksi takdirde %icon butonunu tıklayın.</small>"
        },
        uk_ua: {
            ios: "Щоб додати цей сайт на початковий екран, натисніть %icon, а потім <strong>На початковий екран</strong>.",
            android: "Щоб додати цей сайт на домашній екран, відкрийте меню браузера та виберіть <strong>Додати на головний екран</strong>. <small>Це можливо зробити, натиснувши кнопку меню на вашому смартфоні, якщо така є. Або ж на іконці зверху справа %icon.</small>"
        },
        zh_cn: {
            ios: "如要把应用程序加至主屏幕,请点击%icon, 然后<strong>添加到主屏幕</strong>",
            android: "To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon %icon.</small>"
        },
        zh_tw: {
            ios: "如要把應用程式加至主屏幕, 請點擊%icon, 然後<strong>加至主屏幕</strong>.",
            android: "To add this web app to the home screen open the browser option menu and tap on <strong>Add to homescreen</strong>. <small>The menu can be accessed by pressing the menu hardware button if your device has one, or by tapping the top right menu icon %icon.</small>"
        }
    };
    for (var p in n.intl)
        n.intl[p.substr(0, 2)] = n.intl[p];
    n.defaults = {
        appID: "org.cubiq.addtohome",
        fontSize: 15,
        debug: !1,
        logging: !1,
        modal: !1,
        mandatory: !1,
        autostart: !0,
        skipFirstVisit: !1,
        startDelay: 1,
        lifespan: 15,
        displayPace: 1440,
        maxDisplayCount: 0,
        icon: !0,
        message: "",
        validLocation: [],
        onInit: null,
        onShow: null,
        onRemove: null,
        onAdd: null,
        onPrivate: null,
        privateModeOverride: !1,
        detectHomescreen: !1
    };
    var c = e.navigator.userAgent
      , m = e.navigator;
    o(n, {
        hasToken: "#ath" == t.location.hash || d.test(t.location.href) || h.test(t.location.search),
        isRetina: e.devicePixelRatio && e.devicePixelRatio > 1,
        isIDevice: /iphone|ipod|ipad/i.test(c),
        isMobileChrome: c.indexOf("Android") > -1 && /Chrome\/[.0-9]*/.test(c) && c.indexOf("Version") == -1,
        isMobileIE: c.indexOf("Windows Phone") > -1,
        language: m.language && m.language.toLowerCase().replace("-", "_") || ""
    }),
    n.language = n.language && n.language in n.intl ? n.language : "en_us",
    n.isMobileSafari = n.isIDevice && c.indexOf("Safari") > -1 && c.indexOf("CriOS") < 0,
    n.OS = n.isIDevice ? "ios" : n.isMobileChrome ? "android" : n.isMobileIE ? "windows" : "unsupported",
    n.OSVersion = c.match(/(OS|Android) (\d+[_\.]\d+)/),
    n.OSVersion = n.OSVersion && n.OSVersion[2] ? +n.OSVersion[2].replace("_", ".") : 0,
    n.isStandalone = "standalone"in e.navigator && e.navigator.standalone,
    n.isTablet = n.isMobileSafari && c.indexOf("iPad") > -1 || n.isMobileChrome && c.indexOf("Mobile") < 0,
    n.isCompatible = n.isMobileSafari && n.OSVersion >= 6 || n.isMobileChrome;
    var u = {
        lastDisplayTime: 0,
        returningVisitor: !1,
        displayCount: 0,
        optedout: !1,
        added: !1
    };
    n.removeSession = function(e) {
        try {
            if (!localStorage)
                throw new Error("localStorage is not defined");
            localStorage.removeItem(e || n.defaults.appID)
        } catch (t) {}
    }
    ,
    n.doLog = function(e) {
        this.options.logging && console.log(e)
    }
    ,
    n.Class = function(i) {
        if (this.doLog = n.doLog,
        this.options = o({}, n.defaults),
        o(this.options, i),
        i && i.debug && "undefined" == typeof i.logging && (this.options.logging = !0),
        a) {
            if (this.options.mandatory = this.options.mandatory && ("standalone"in e.navigator || this.options.debug),
            this.options.modal = this.options.modal || this.options.mandatory,
            this.options.mandatory && (this.options.startDelay = -.5),
            this.options.detectHomescreen = this.options.detectHomescreen === !0 ? "hash" : this.options.detectHomescreen,
            this.options.debug && (n.isCompatible = !0,
            n.OS = "string" == typeof this.options.debug ? this.options.debug : "unsupported" == n.OS ? "android" : n.OS,
            n.OSVersion = "ios" == n.OS ? "8" : "4"),
            this.container = t.documentElement,
            this.session = this.getItem(this.options.appID),
            this.session = this.session ? JSON.parse(this.session) : void 0,
            !n.hasToken || n.isCompatible && this.session || (n.hasToken = !1,
            s()),
            !n.isCompatible)
                return void this.doLog("Add to homescreen: not displaying callout because device not supported");
            this.session = this.session || u;
            try {
                if (!localStorage)
                    throw new Error("localStorage is not defined");
                localStorage.setItem(this.options.appID, JSON.stringify(this.session)),
                n.hasLocalStorage = !0
            } catch (r) {
                n.hasLocalStorage = !1,
                this.options.onPrivate && this.options.onPrivate.call(this)
            }
            for (var l = !this.options.validLocation.length, d = this.options.validLocation.length; d--; )
                if (this.options.validLocation[d].test(t.location.href)) {
                    l = !0;
                    break
                }
            if (this.getItem("addToHome") && this.optOut(),
            this.session.optedout)
                return void this.doLog("Add to homescreen: not displaying callout because user opted out");
            if (this.session.added)
                return void this.doLog("Add to homescreen: not displaying callout because already added to the homescreen");
            if (!l)
                return void this.doLog("Add to homescreen: not displaying callout because not a valid location");
            if (n.isStandalone)
                return this.session.added || (this.session.added = !0,
                this.updateSession(),
                this.options.onAdd && n.hasLocalStorage && this.options.onAdd.call(this)),
                void this.doLog("Add to homescreen: not displaying callout because in standalone mode");
            if (this.options.detectHomescreen) {
                if (n.hasToken)
                    return s(),
                    this.session.added || (this.session.added = !0,
                    this.updateSession(),
                    this.options.onAdd && n.hasLocalStorage && this.options.onAdd.call(this)),
                    void this.doLog("Add to homescreen: not displaying callout because URL has token, so we are likely coming from homescreen");
                "hash" == this.options.detectHomescreen ? history.replaceState("", e.document.title, t.location.href + "#ath") : "smartURL" == this.options.detectHomescreen ? history.replaceState("", e.document.title, t.location.href.replace(/(\/)?$/, "/ath$1")) : history.replaceState("", e.document.title, t.location.href + (t.location.search ? "&" : "?") + "ath=")
            }
            if (!this.session.returningVisitor && (this.session.returningVisitor = !0,
            this.updateSession(),
            this.options.skipFirstVisit))
                return void this.doLog("Add to homescreen: not displaying callout because skipping first visit");
            if (!this.options.privateModeOverride && !n.hasLocalStorage)
                return void this.doLog("Add to homescreen: not displaying callout because browser is in private mode");
            this.ready = !0,
            this.options.onInit && this.options.onInit.call(this),
            this.options.autostart && (this.doLog("Add to homescreen: autostart displaying callout"),
            this.show())
        }
    }
    ,
    n.Class.prototype = {
        events: {
            load: "_delayedShow",
            error: "_delayedShow",
            orientationchange: "resize",
            resize: "resize",
            scroll: "resize",
            click: "remove",
            touchmove: "_preventDefault",
            transitionend: "_removeElements",
            webkitTransitionEnd: "_removeElements",
            MSTransitionEnd: "_removeElements"
        },
        handleEvent: function(e) {
            var t = this.events[e.type];
            t && this[t](e)
        },
        show: function(i) {
            if (this.options.autostart && !r)
                return void setTimeout(this.show.bind(this), 50);
            if (this.shown)
                return void this.doLog("Add to homescreen: not displaying callout because already shown on screen");
            var o = Date.now()
              , s = this.session.lastDisplayTime;
            if (i !== !0) {
                if (!this.ready)
                    return void this.doLog("Add to homescreen: not displaying callout because not ready");
                if (o - s < 6e4 * this.options.displayPace)
                    return void this.doLog("Add to homescreen: not displaying callout because displayed recently");
                if (this.options.maxDisplayCount && this.session.displayCount >= this.options.maxDisplayCount)
                    return void this.doLog("Add to homescreen: not displaying callout because displayed too many times already")
            }
            this.shown = !0,
            this.session.lastDisplayTime = o,
            this.session.displayCount++,
            this.updateSession(),
            this.applicationIcon || ("ios" == n.OS ? this.applicationIcon = t.querySelector('head link[rel^=apple-touch-icon][sizes="152x152"],head link[rel^=apple-touch-icon][sizes="144x144"],head link[rel^=apple-touch-icon][sizes="120x120"],head link[rel^=apple-touch-icon][sizes="114x114"],head link[rel^=apple-touch-icon]') : this.applicationIcon = t.querySelector('head link[rel^="shortcut icon"][sizes="196x196"],head link[rel^=apple-touch-icon]'));
            var a = "";
            "object" == typeof this.options.message && n.language in this.options.message ? a = this.options.message[n.language][n.OS] : "object" == typeof this.options.message && n.OS in this.options.message ? a = this.options.message[n.OS] : this.options.message in n.intl ? a = n.intl[this.options.message][n.OS] : "" !== this.options.message ? a = this.options.message : n.OS in n.intl[n.language] && (a = n.intl[n.language][n.OS]),
            a = "<p>" + a.replace(/%icon(?:\[([^\]]+)\])?/gi, function(e, t) {
                return '<span class="ath-action-icon">' + (t ? t : "icon") + "</span>"
            }),
            this.viewport = t.createElement("div"),
            this.viewport.className = "ath-viewport",
            this.options.modal && (this.viewport.className += " ath-modal"),
            this.options.mandatory && (this.viewport.className += " ath-mandatory"),
            this.viewport.style.position = "absolute",
            this.element = t.createElement("div"),
            this.element.className = "ath-container ath-" + n.OS + " ath-" + n.OS + (n.OSVersion + "").substr(0, 1) + " ath-" + (n.isTablet ? "tablet" : "phone"),
            this.element.style.cssText = "-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-duration:0s;-webkit-transition-timing-function:ease-out;transition-property:transform,opacity;transition-duration:0s;transition-timing-function:ease-out;",
            this.element.style.webkitTransform = "translate3d(0,-" + e.innerHeight + "px,0)",
            this.element.style.transform = "translate3d(0,-" + e.innerHeight + "px,0)",
            this.options.icon && this.applicationIcon && (this.element.className += " ath-icon",
            this.img = t.createElement("img"),
            this.img.className = "ath-application-icon",
            this.img.addEventListener("load", this, !1),
            this.img.addEventListener("error", this, !1),
            this.img.src = this.applicationIcon.href,
            this.element.appendChild(this.img)),
            this.element.innerHTML += a,
            this.viewport.style.left = "-99999em",
            this.viewport.appendChild(this.element),
            this.container.appendChild(this.viewport),
            this.img ? this.doLog("Add to homescreen: not displaying callout because waiting for img to load") : this._delayedShow()
        },
        _delayedShow: function(e) {
            setTimeout(this._show.bind(this), 1e3 * this.options.startDelay + 500)
        },
        _show: function() {
            var i = this;
            this.updateViewport(),
            e.addEventListener("resize", this, !1),
            e.addEventListener("scroll", this, !1),
            e.addEventListener("orientationchange", this, !1),
            this.options.modal && t.addEventListener("touchmove", this, !0),
            this.options.mandatory || setTimeout(function() {
                i.element.addEventListener("click", i, !0)
            }, 1e3),
            setTimeout(function() {
                i.element.style.webkitTransitionDuration = "1.2s",
                i.element.style.transitionDuration = "1.2s",
                i.element.style.webkitTransform = "translate3d(0,0,0)",
                i.element.style.transform = "translate3d(0,0,0)"
            }, 0),
            this.options.lifespan && (this.removeTimer = setTimeout(this.remove.bind(this), 1e3 * this.options.lifespan)),
            this.options.onShow && this.options.onShow.call(this)
        },
        remove: function() {
            clearTimeout(this.removeTimer),
            this.img && (this.img.removeEventListener("load", this, !1),
            this.img.removeEventListener("error", this, !1)),
            e.removeEventListener("resize", this, !1),
            e.removeEventListener("scroll", this, !1),
            e.removeEventListener("orientationchange", this, !1),
            t.removeEventListener("touchmove", this, !0),
            this.element.removeEventListener("click", this, !0),
            this.element.addEventListener("transitionend", this, !1),
            this.element.addEventListener("webkitTransitionEnd", this, !1),
            this.element.addEventListener("MSTransitionEnd", this, !1),
            this.element.style.webkitTransitionDuration = "0.3s",
            this.element.style.opacity = "0"
        },
        _removeElements: function() {
            this.element.removeEventListener("transitionend", this, !1),
            this.element.removeEventListener("webkitTransitionEnd", this, !1),
            this.element.removeEventListener("MSTransitionEnd", this, !1),
            this.container.removeChild(this.viewport),
            this.shown = !1,
            this.options.onRemove && this.options.onRemove.call(this)
        },
        updateViewport: function() {
            if (this.shown) {
                this.viewport.style.width = e.innerWidth + "px",
                this.viewport.style.height = e.innerHeight + "px",
                this.viewport.style.left = e.scrollX + "px",
                this.viewport.style.top = e.scrollY + "px";
                var i = t.documentElement.clientWidth;
                this.orientation = i > t.documentElement.clientHeight ? "landscape" : "portrait";
                var o = "ios" == n.OS ? "portrait" == this.orientation ? screen.width : screen.height : screen.width;
                this.scale = screen.width > i ? 1 : o / e.innerWidth,
                this.element.style.fontSize = this.options.fontSize / this.scale + "px"
            }
        },
        resize: function() {
            clearTimeout(this.resizeTimer),
            this.resizeTimer = setTimeout(this.updateViewport.bind(this), 100)
        },
        updateSession: function() {
            n.hasLocalStorage !== !1 && localStorage && localStorage.setItem(this.options.appID, JSON.stringify(this.session))
        },
        clearSession: function() {
            this.session = u,
            this.updateSession()
        },
        getItem: function(e) {
            try {
                if (!localStorage)
                    throw new Error("localStorage is not defined");
                return localStorage.getItem(e)
            } catch (t) {
                n.hasLocalStorage = !1
            }
        },
        optOut: function() {
            this.session.optedout = !0,
            this.updateSession()
        },
        optIn: function() {
            this.session.optedout = !1,
            this.updateSession()
        },
        clearDisplayCount: function() {
            this.session.displayCount = 0,
            this.updateSession()
        },
        _preventDefault: function(e) {
            e.preventDefault(),
            e.stopPropagation()
        }
    },
    e.addToHomescreen = n
}(window, document);
