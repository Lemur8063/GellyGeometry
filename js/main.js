! function(i) {
    var n = {};

    function o(t) {
        if (n[t]) return n[t].exports;
        var e = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return i[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports
    }
    o.m = i, o.c = n, o.d = function(t, e, i) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, o.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (o.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var n in e) o.d(i, n, function(t) {
                return e[t]
            }.bind(null, n));
        return i
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o(o.s = 2)
}([function(t, ci, e) {
    (function(ai) {
        var ri;

        function li(t) {
            return (li = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }! function(t, e) {
            "use strict";
            "object" === li(ai) && "object" === li(ai.exports) ? ai.exports = t.document ? e(t, !0) : function(t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return e(t)
            } : e(t)
        }("undefined" != typeof window ? window : this, function(x, t) {
            "use strict";

            function g(t) {
                return null != t && t === t.window
            }
            var e = [],
                C = x.document,
                n = Object.getPrototypeOf,
                r = e.slice,
                m = e.concat,
                l = e.push,
                o = e.indexOf,
                i = {},
                s = i.toString,
                v = i.hasOwnProperty,
                a = v.toString,
                c = a.call(Object),
                y = {},
                b = function(t) {
                    return "function" == typeof t && "number" != typeof t.nodeType
                },
                d = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };

            function w(t, e, i) {
                var n, o, s = (i = i || C).createElement("script");
                if (s.text = t, e)
                    for (n in d)(o = e[n] || e.getAttribute && e.getAttribute(n)) && s.setAttribute(n, o);
                i.head.appendChild(s).parentNode.removeChild(s)
            }

            function $(t) {
                return null == t ? t + "" : "object" === li(t) || "function" == typeof t ? i[s.call(t)] || "object" : li(t)
            }
            var T = function t(e, i) {
                    return new t.fn.init(e, i)
                },
                u = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

            function h(t) {
                var e = !!t && "length" in t && t.length,
                    i = $(t);
                return !b(t) && !g(t) && ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
            }
            T.fn = T.prototype = {
                jquery: "3.4.1",
                constructor: T,
                length: 0,
                toArray: function() {
                    return r.call(this)
                },
                get: function(t) {
                    return null == t ? r.call(this) : t < 0 ? this[t + this.length] : this[t]
                },
                pushStack: function(t) {
                    var e = T.merge(this.constructor(), t);
                    return e.prevObject = this, e
                },
                each: function(t) {
                    return T.each(this, t)
                },
                map: function(i) {
                    return this.pushStack(T.map(this, function(t, e) {
                        return i.call(t, e, t)
                    }))
                },
                slice: function() {
                    return this.pushStack(r.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(t) {
                    var e = this.length,
                        i = +t + (t < 0 ? e : 0);
                    return this.pushStack(0 <= i && i < e ? [this[i]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: l,
                sort: e.sort,
                splice: e.splice
            }, T.extend = T.fn.extend = function() {
                var t, e, i, n, o, s, a = arguments[0] || {},
                    r = 1,
                    l = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[r] || {}, r++), "object" === li(a) || b(a) || (a = {}), r === l && (a = this, r--); r < l; r++)
                    if (null != (t = arguments[r]))
                        for (e in t) n = t[e], "__proto__" !== e && a !== n && (c && n && (T.isPlainObject(n) || (o = Array.isArray(n))) ? (i = a[e], s = o && !Array.isArray(i) ? [] : o || T.isPlainObject(i) ? i : {}, o = !1, a[e] = T.extend(c, s, n)) : void 0 !== n && (a[e] = n));
                return a
            }, T.extend({
                expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(t) {
                    throw new Error(t)
                },
                noop: function() {},
                isPlainObject: function(t) {
                    var e, i;
                    return !(!t || "[object Object]" !== s.call(t) || (e = n(t)) && ("function" != typeof(i = v.call(e, "constructor") && e.constructor) || a.call(i) !== c))
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                globalEval: function(t, e) {
                    w(t, {
                        nonce: e && e.nonce
                    })
                },
                each: function(t, e) {
                    var i, n = 0;
                    if (h(t))
                        for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                    else
                        for (n in t)
                            if (!1 === e.call(t[n], n, t[n])) break;
                    return t
                },
                trim: function(t) {
                    return null == t ? "" : (t + "").replace(u, "")
                },
                makeArray: function(t, e) {
                    var i = e || [];
                    return null != t && (h(Object(t)) ? T.merge(i, "string" == typeof t ? [t] : t) : l.call(i, t)), i
                },
                inArray: function(t, e, i) {
                    return null == e ? -1 : o.call(e, t, i)
                },
                merge: function(t, e) {
                    for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
                    return t.length = o, t
                },
                grep: function(t, e, i) {
                    for (var n = [], o = 0, s = t.length, a = !i; o < s; o++) !e(t[o], o) != a && n.push(t[o]);
                    return n
                },
                map: function(t, e, i) {
                    var n, o, s = 0,
                        a = [];
                    if (h(t))
                        for (n = t.length; s < n; s++) null != (o = e(t[s], s, i)) && a.push(o);
                    else
                        for (s in t) null != (o = e(t[s], s, i)) && a.push(o);
                    return m.apply([], a)
                },
                guid: 1,
                support: y
            }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = e[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
                i["[object " + e + "]"] = e.toLowerCase()
            });
            var p = function(i) {
                function u(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n != n || i ? e : n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                }

                function o() {
                    k()
                }
                var t, p, w, s, a, f, h, g, $, l, c, k, x, r, C, m, d, v, y, T = "sizzle" + 1 * new Date,
                    b = i.document,
                    S = 0,
                    n = 0,
                    _ = lt(),
                    z = lt(),
                    A = lt(),
                    E = lt(),
                    P = function(t, e) {
                        return t === e && (c = !0), 0
                    },
                    O = {}.hasOwnProperty,
                    e = [],
                    L = e.pop,
                    D = e.push,
                    M = e.push,
                    H = e.slice,
                    I = function(t, e) {
                        for (var i = 0, n = t.length; i < n; i++)
                            if (t[i] === e) return i;
                        return -1
                    },
                    R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    j = "[\\x20\\t\\r\\n\\f]",
                    q = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    F = "\\[" + j + "*(" + q + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + j + "*\\]",
                    N = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
                    B = new RegExp(j + "+", "g"),
                    W = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
                    Y = new RegExp("^" + j + "*," + j + "*"),
                    X = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
                    U = new RegExp(j + "|>"),
                    V = new RegExp(N),
                    G = new RegExp("^" + q + "$"),
                    K = {
                        ID: new RegExp("^#(" + q + ")"),
                        CLASS: new RegExp("^\\.(" + q + ")"),
                        TAG: new RegExp("^(" + q + "|[*])"),
                        ATTR: new RegExp("^" + F),
                        PSEUDO: new RegExp("^" + N),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + R + ")$", "i"),
                        needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
                    },
                    Z = /HTML$/i,
                    Q = /^(?:input|select|textarea|button)$/i,
                    J = /^h\d$/i,
                    tt = /^[^{]+\{\s*\[native \w/,
                    et = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    it = /[+~]/,
                    nt = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
                    ot = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    st = function(t, e) {
                        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    },
                    at = wt(function(t) {
                        return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                    }, {
                        dir: "parentNode",
                        next: "legend"
                    });
                try {
                    M.apply(e = H.call(b.childNodes), b.childNodes), e[b.childNodes.length].nodeType
                } catch (i) {
                    M = {
                        apply: e.length ? function(t, e) {
                            D.apply(t, H.call(e))
                        } : function(t, e) {
                            for (var i = t.length, n = 0; t[i++] = e[n++];);
                            t.length = i - 1
                        }
                    }
                }

                function rt(t, e, i, n) {
                    var o, s, a, r, l, c, d, u = e && e.ownerDocument,
                        h = e ? e.nodeType : 9;
                    if (i = i || [], "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h) return i;
                    if (!n && ((e ? e.ownerDocument || e : b) !== x && k(e), e = e || x, C)) {
                        if (11 !== h && (l = et.exec(t)))
                            if (o = l[1]) {
                                if (9 === h) {
                                    if (!(a = e.getElementById(o))) return i;
                                    if (a.id === o) return i.push(a), i
                                } else if (u && (a = u.getElementById(o)) && y(e, a) && a.id === o) return i.push(a), i
                            } else {
                                if (l[2]) return M.apply(i, e.getElementsByTagName(t)), i;
                                if ((o = l[3]) && p.getElementsByClassName && e.getElementsByClassName) return M.apply(i, e.getElementsByClassName(o)), i
                            }
                        if (p.qsa && !E[t + " "] && (!m || !m.test(t)) && (1 !== h || "object" !== e.nodeName.toLowerCase())) {
                            if (d = t, u = e, 1 === h && U.test(t)) {
                                for ((r = e.getAttribute("id")) ? r = r.replace(ot, st) : e.setAttribute("id", r = T), s = (c = f(t)).length; s--;) c[s] = "#" + r + " " + bt(c[s]);
                                d = c.join(","), u = it.test(t) && vt(e.parentNode) || e
                            }
                            try {
                                return M.apply(i, u.querySelectorAll(d)), i
                            } catch (e) {
                                E(t, !0)
                            } finally {
                                r === T && e.removeAttribute("id")
                            }
                        }
                    }
                    return g(t.replace(W, "$1"), e, i, n)
                }

                function lt() {
                    var n = [];
                    return function t(e, i) {
                        return n.push(e + " ") > w.cacheLength && delete t[n.shift()], t[e + " "] = i
                    }
                }

                function ct(t) {
                    return t[T] = !0, t
                }

                function dt(t) {
                    var e = x.createElement("fieldset");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function ut(t, e) {
                    for (var i = t.split("|"), n = i.length; n--;) w.attrHandle[i[n]] = e
                }

                function ht(t, e) {
                    var i = e && t,
                        n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (n) return n;
                    if (i)
                        for (; i = i.nextSibling;)
                            if (i === e) return -1;
                    return t ? 1 : -1
                }

                function pt(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }

                function ft(i) {
                    return function(t) {
                        var e = t.nodeName.toLowerCase();
                        return ("input" === e || "button" === e) && t.type === i
                    }
                }

                function gt(e) {
                    return function(t) {
                        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && at(t) === e : t.disabled === e : "label" in t && t.disabled === e
                    }
                }

                function mt(a) {
                    return ct(function(s) {
                        return s = +s, ct(function(t, e) {
                            for (var i, n = a([], t.length, s), o = n.length; o--;) t[i = n[o]] && (t[i] = !(e[i] = t[i]))
                        })
                    })
                }

                function vt(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }
                for (t in p = rt.support = {}, a = rt.isXML = function(t) {
                    var e = t.namespaceURI,
                        i = (t.ownerDocument || t).documentElement;
                    return !Z.test(e || i && i.nodeName || "HTML")
                }, k = rt.setDocument = function(t) {
                    var e, i, n = t ? t.ownerDocument || t : b;
                    return n !== x && 9 === n.nodeType && n.documentElement && (r = (x = n).documentElement, C = !a(x), b !== x && (i = x.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", o, !1) : i.attachEvent && i.attachEvent("onunload", o)), p.attributes = dt(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), p.getElementsByTagName = dt(function(t) {
                        return t.appendChild(x.createComment("")), !t.getElementsByTagName("*").length
                    }), p.getElementsByClassName = tt.test(x.getElementsByClassName), p.getById = dt(function(t) {
                        return r.appendChild(t).id = T, !x.getElementsByName || !x.getElementsByName(T).length
                    }), p.getById ? (w.filter.ID = function(t) {
                        var e = t.replace(nt, u);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }, w.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && C) {
                            var i = e.getElementById(t);
                            return i ? [i] : []
                        }
                    }) : (w.filter.ID = function(t) {
                        var i = t.replace(nt, u);
                        return function(t) {
                            var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return e && e.value === i
                        }
                    }, w.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && C) {
                            var i, n, o, s = e.getElementById(t);
                            if (s) {
                                if ((i = s.getAttributeNode("id")) && i.value === t) return [s];
                                for (o = e.getElementsByName(t), n = 0; s = o[n++];)
                                    if ((i = s.getAttributeNode("id")) && i.value === t) return [s]
                            }
                            return []
                        }
                    }), w.find.TAG = p.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : p.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var i, n = [],
                            o = 0,
                            s = e.getElementsByTagName(t);
                        if ("*" !== t) return s;
                        for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                        return n
                    }, w.find.CLASS = p.getElementsByClassName && function(t, e) {
                        if (void 0 !== e.getElementsByClassName && C) return e.getElementsByClassName(t)
                    }, d = [], m = [], (p.qsa = tt.test(x.querySelectorAll)) && (dt(function(t) {
                        r.appendChild(t).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + R + ")"), t.querySelectorAll("[id~=" + T + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + T + "+*").length || m.push(".#.+[+~]")
                    }), dt(function(t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = x.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), r.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                    })), (p.matchesSelector = tt.test(v = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && dt(function(t) {
                        p.disconnectedMatch = v.call(t, "*"), v.call(t, "[s!='']:x"), d.push("!=", N)
                    }), m = m.length && new RegExp(m.join("|")), d = d.length && new RegExp(d.join("|")), e = tt.test(r.compareDocumentPosition), y = e || tt.test(r.contains) ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, P = e ? function(t, e) {
                        if (t === e) return c = !0, 0;
                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !p.sortDetached && e.compareDocumentPosition(t) === i ? t === x || t.ownerDocument === b && y(b, t) ? -1 : e === x || e.ownerDocument === b && y(b, e) ? 1 : l ? I(l, t) - I(l, e) : 0 : 4 & i ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return c = !0, 0;
                        var i, n = 0,
                            o = t.parentNode,
                            s = e.parentNode,
                            a = [t],
                            r = [e];
                        if (!o || !s) return t === x ? -1 : e === x ? 1 : o ? -1 : s ? 1 : l ? I(l, t) - I(l, e) : 0;
                        if (o === s) return ht(t, e);
                        for (i = t; i = i.parentNode;) a.unshift(i);
                        for (i = e; i = i.parentNode;) r.unshift(i);
                        for (; a[n] === r[n];) n++;
                        return n ? ht(a[n], r[n]) : a[n] === b ? -1 : r[n] === b ? 1 : 0
                    }), x
                }, rt.matches = function(t, e) {
                    return rt(t, null, null, e)
                }, rt.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== x && k(t), p.matchesSelector && C && !E[e + " "] && (!d || !d.test(e)) && (!m || !m.test(e))) try {
                        var i = v.call(t, e);
                        if (i || p.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {
                        E(e, !0)
                    }
                    return 0 < rt(e, x, null, [t]).length
                }, rt.contains = function(t, e) {
                    return (t.ownerDocument || t) !== x && k(t), y(t, e)
                }, rt.attr = function(t, e) {
                    (t.ownerDocument || t) !== x && k(t);
                    var i = w.attrHandle[e.toLowerCase()],
                        n = i && O.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !C) : void 0;
                    return void 0 !== n ? n : p.attributes || !C ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                }, rt.escape = function(t) {
                    return (t + "").replace(ot, st)
                }, rt.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, rt.uniqueSort = function(t) {
                    var e, i = [],
                        n = 0,
                        o = 0;
                    if (c = !p.detectDuplicates, l = !p.sortStable && t.slice(0), t.sort(P), c) {
                        for (; e = t[o++];) e === t[o] && (n = i.push(o));
                        for (; n--;) t.splice(i[n], 1)
                    }
                    return l = null, t
                }, s = rt.getText = function(t) {
                    var e, i = "",
                        n = 0,
                        o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += s(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else
                        for (; e = t[n++];) i += s(e);
                    return i
                }, (w = rt.selectors = {
                    cacheLength: 50,
                    createPseudo: ct,
                    match: K,
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
                        ATTR: function(t) {
                            return t[1] = t[1].replace(nt, u), t[3] = (t[3] || t[4] || t[5] || "").replace(nt, u), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, i = !t[6] && t[2];
                            return K.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && V.test(i) && (e = f(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(nt, u).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = _[t + " "];
                            return e || (e = new RegExp("(^|" + j + ")" + t + "(" + j + "|$)")) && _(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(i, n, o) {
                            return function(t) {
                                var e = rt.attr(t, i);
                                return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === o : "!=" === n ? e !== o : "^=" === n ? o && 0 === e.indexOf(o) : "*=" === n ? o && -1 < e.indexOf(o) : "$=" === n ? o && e.slice(-o.length) === o : "~=" === n ? -1 < (" " + e.replace(B, " ") + " ").indexOf(o) : "|=" === n && (e === o || e.slice(0, o.length + 1) === o + "-"))
                            }
                        },
                        CHILD: function(f, t, e, g, m) {
                            var v = "nth" !== f.slice(0, 3),
                                y = "last" !== f.slice(-4),
                                b = "of-type" === t;
                            return 1 === g && 0 === m ? function(t) {
                                return !!t.parentNode
                            } : function(t, e, i) {
                                var n, o, s, a, r, l, c = v != y ? "nextSibling" : "previousSibling",
                                    d = t.parentNode,
                                    u = b && t.nodeName.toLowerCase(),
                                    h = !i && !b,
                                    p = !1;
                                if (d) {
                                    if (v) {
                                        for (; c;) {
                                            for (a = t; a = a[c];)
                                                if (b ? a.nodeName.toLowerCase() === u : 1 === a.nodeType) return !1;
                                            l = c = "only" === f && !l && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (l = [y ? d.firstChild : d.lastChild], y && h) {
                                        for (p = (r = (n = (o = (s = (a = d)[T] || (a[T] = {}))[a.uniqueID] || (s[a.uniqueID] = {}))[f] || [])[0] === S && n[1]) && n[2], a = r && d.childNodes[r]; a = ++r && a && a[c] || (p = r = 0) || l.pop();)
                                            if (1 === a.nodeType && ++p && a === t) {
                                                o[f] = [S, r, p];
                                                break
                                            }
                                    } else if (h && (p = r = (n = (o = (s = (a = t)[T] || (a[T] = {}))[a.uniqueID] || (s[a.uniqueID] = {}))[f] || [])[0] === S && n[1]), !1 === p)
                                        for (;
                                            (a = ++r && a && a[c] || (p = r = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== u : 1 !== a.nodeType) || !++p || (h && ((o = (s = a[T] || (a[T] = {}))[a.uniqueID] || (s[a.uniqueID] = {}))[f] = [S, p]), a !== t)););
                                    return (p -= m) === g || p % g == 0 && 0 <= p / g
                                }
                            }
                        },
                        PSEUDO: function(t, s) {
                            var e, a = w.pseudos[t] || w.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
                            return a[T] ? a(s) : 1 < a.length ? (e = [t, t, "", s], w.setFilters.hasOwnProperty(t.toLowerCase()) ? ct(function(t, e) {
                                for (var i, n = a(t, s), o = n.length; o--;) t[i = I(t, n[o])] = !(e[i] = n[o])
                            }) : function(t) {
                                return a(t, 0, e)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: ct(function(t) {
                            var n = [],
                                o = [],
                                r = h(t.replace(W, "$1"));
                            return r[T] ? ct(function(t, e, i, n) {
                                for (var o, s = r(t, null, n, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                            }) : function(t, e, i) {
                                return n[0] = t, r(n, null, i, o), n[0] = null, !o.pop()
                            }
                        }),
                        has: ct(function(e) {
                            return function(t) {
                                return 0 < rt(e, t).length
                            }
                        }),
                        contains: ct(function(e) {
                            return e = e.replace(nt, u),
                                function(t) {
                                    return -1 < (t.textContent || s(t)).indexOf(e)
                                }
                        }),
                        lang: ct(function(i) {
                            return G.test(i || "") || rt.error("unsupported lang: " + i), i = i.replace(nt, u).toLowerCase(),
                                function(t) {
                                    var e;
                                    do {
                                        if (e = C ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var e = i.location && i.location.hash;
                            return e && e.slice(1) === t.id
                        },
                        root: function(t) {
                            return t === r
                        },
                        focus: function(t) {
                            return t === x.activeElement && (!x.hasFocus || x.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: gt(!1),
                        disabled: gt(!0),
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !w.pseudos.empty(t)
                        },
                        header: function(t) {
                            return J.test(t.nodeName)
                        },
                        input: function(t) {
                            return Q.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: mt(function() {
                            return [0]
                        }),
                        last: mt(function(t, e) {
                            return [e - 1]
                        }),
                        eq: mt(function(t, e, i) {
                            return [i < 0 ? i + e : i]
                        }),
                        even: mt(function(t, e) {
                            for (var i = 0; i < e; i += 2) t.push(i);
                            return t
                        }),
                        odd: mt(function(t, e) {
                            for (var i = 1; i < e; i += 2) t.push(i);
                            return t
                        }),
                        lt: mt(function(t, e, i) {
                            for (var n = i < 0 ? i + e : e < i ? e : i; 0 <= --n;) t.push(n);
                            return t
                        }),
                        gt: mt(function(t, e, i) {
                            for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                            return t
                        })
                    }
                }).pseudos.nth = w.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[t] = pt(t);
                for (t in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[t] = ft(t);

                function yt() {}

                function bt(t) {
                    for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                    return n
                }

                function wt(r, t, e) {
                    var l = t.dir,
                        c = t.next,
                        d = c || l,
                        u = e && "parentNode" === d,
                        h = n++;
                    return t.first ? function(t, e, i) {
                        for (; t = t[l];)
                            if (1 === t.nodeType || u) return r(t, e, i);
                        return !1
                    } : function(t, e, i) {
                        var n, o, s, a = [S, h];
                        if (i) {
                            for (; t = t[l];)
                                if ((1 === t.nodeType || u) && r(t, e, i)) return !0
                        } else
                            for (; t = t[l];)
                                if (1 === t.nodeType || u)
                                    if (o = (s = t[T] || (t[T] = {}))[t.uniqueID] || (s[t.uniqueID] = {}), c && c === t.nodeName.toLowerCase()) t = t[l] || t;
                                    else {
                                        if ((n = o[d]) && n[0] === S && n[1] === h) return a[2] = n[2];
                                        if ((o[d] = a)[2] = r(t, e, i)) return !0
                                    } return !1
                    }
                }

                function $t(o) {
                    return 1 < o.length ? function(t, e, i) {
                        for (var n = o.length; n--;)
                            if (!o[n](t, e, i)) return !1;
                        return !0
                    } : o[0]
                }

                function kt(t, e, i, n, o) {
                    for (var s, a = [], r = 0, l = t.length, c = null != e; r < l; r++)(s = t[r]) && (i && !i(s, n, o) || (a.push(s), c && e.push(r)));
                    return a
                }

                function xt(p, f, g, m, v, t) {
                    return m && !m[T] && (m = xt(m)), v && !v[T] && (v = xt(v, t)), ct(function(t, e, i, n) {
                        var o, s, a, r = [],
                            l = [],
                            c = e.length,
                            d = t || function(t, e, i) {
                                for (var n = 0, o = e.length; n < o; n++) rt(t, e[n], i);
                                return i
                            }(f || "*", i.nodeType ? [i] : i, []),
                            u = !p || !t && f ? d : kt(d, r, p, i, n),
                            h = g ? v || (t ? p : c || m) ? [] : e : u;
                        if (g && g(u, h, i, n), m)
                            for (o = kt(h, l), m(o, [], i, n), s = o.length; s--;)(a = o[s]) && (h[l[s]] = !(u[l[s]] = a));
                        if (t) {
                            if (v || p) {
                                if (v) {
                                    for (o = [], s = h.length; s--;)(a = h[s]) && o.push(u[s] = a);
                                    v(null, h = [], o, n)
                                }
                                for (s = h.length; s--;)(a = h[s]) && -1 < (o = v ? I(t, a) : r[s]) && (t[o] = !(e[o] = a))
                            }
                        } else h = kt(h === e ? h.splice(c, h.length) : h), v ? v(null, e, h, n) : M.apply(e, h)
                    })
                }

                function Ct(t) {
                    for (var o, e, i, n = t.length, s = w.relative[t[0].type], a = s || w.relative[" "], r = s ? 1 : 0, l = wt(function(t) {
                        return t === o
                    }, a, !0), c = wt(function(t) {
                        return -1 < I(o, t)
                    }, a, !0), d = [function(t, e, i) {
                        var n = !s && (i || e !== $) || ((o = e).nodeType ? l(t, e, i) : c(t, e, i));
                        return o = null, n
                    }]; r < n; r++)
                        if (e = w.relative[t[r].type]) d = [wt($t(d), e)];
                        else {
                            if ((e = w.filter[t[r].type].apply(null, t[r].matches))[T]) {
                                for (i = ++r; i < n && !w.relative[t[i].type]; i++);
                                return xt(1 < r && $t(d), 1 < r && bt(t.slice(0, r - 1).concat({
                                    value: " " === t[r - 2].type ? "*" : ""
                                })).replace(W, "$1"), e, r < i && Ct(t.slice(r, i)), i < n && Ct(t = t.slice(i)), i < n && bt(t))
                            }
                            d.push(e)
                        }
                    return $t(d)
                }
                return yt.prototype = w.filters = w.pseudos, w.setFilters = new yt, f = rt.tokenize = function(t, e) {
                    var i, n, o, s, a, r, l, c = z[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (a = t, r = [], l = w.preFilter; a;) {
                        for (s in i && !(n = Y.exec(a)) || (n && (a = a.slice(n[0].length) || a), r.push(o = [])), i = !1, (n = X.exec(a)) && (i = n.shift(), o.push({
                            value: i,
                            type: n[0].replace(W, " ")
                        }), a = a.slice(i.length)), w.filter) !(n = K[s].exec(a)) || l[s] && !(n = l[s](n)) || (i = n.shift(), o.push({
                            value: i,
                            type: s,
                            matches: n
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return e ? a.length : a ? rt.error(t) : z(t, r).slice(0)
                }, h = rt.compile = function(t, e) {
                    var i, m, v, y, b, n = [],
                        o = [],
                        s = A[t + " "];
                    if (!s) {
                        for (i = (e = e || f(t)).length; i--;)(s = Ct(e[i]))[T] ? n.push(s) : o.push(s);
                        (s = A(t, (m = o, y = 0 < (v = n).length, b = 0 < m.length, y ? ct(a) : a))).selector = t
                    }

                    function a(t, e, i, n, o) {
                        var s, a, r, l = 0,
                            c = "0",
                            d = t && [],
                            u = [],
                            h = $,
                            p = t || b && w.find.TAG("*", o),
                            f = S += null == h ? 1 : Math.random() || .1,
                            g = p.length;
                        for (o && ($ = e === x || e || o); c !== g && null != (s = p[c]); c++) {
                            if (b && s) {
                                for (a = 0, e || s.ownerDocument === x || (k(s), i = !C); r = m[a++];)
                                    if (r(s, e || x, i)) {
                                        n.push(s);
                                        break
                                    }
                                o && (S = f)
                            }
                            y && ((s = !r && s) && l--, t && d.push(s))
                        }
                        if (l += c, y && c !== l) {
                            for (a = 0; r = v[a++];) r(d, u, e, i);
                            if (t) {
                                if (0 < l)
                                    for (; c--;) d[c] || u[c] || (u[c] = L.call(n));
                                u = kt(u)
                            }
                            M.apply(n, u), o && !t && 0 < u.length && 1 < l + v.length && rt.uniqueSort(n)
                        }
                        return o && (S = f, $ = h), d
                    }
                    return s
                }, g = rt.select = function(t, e, i, n) {
                    var o, s, a, r, l, c = "function" == typeof t && t,
                        d = !n && f(t = c.selector || t);
                    if (i = i || [], 1 === d.length) {
                        if (2 < (s = d[0] = d[0].slice(0)).length && "ID" === (a = s[0]).type && 9 === e.nodeType && C && w.relative[s[1].type]) {
                            if (!(e = (w.find.ID(a.matches[0].replace(nt, u), e) || [])[0])) return i;
                            c && (e = e.parentNode), t = t.slice(s.shift().value.length)
                        }
                        for (o = K.needsContext.test(t) ? 0 : s.length; o-- && (a = s[o], !w.relative[r = a.type]);)
                            if ((l = w.find[r]) && (n = l(a.matches[0].replace(nt, u), it.test(s[0].type) && vt(e.parentNode) || e))) {
                                if (s.splice(o, 1), !(t = n.length && bt(s))) return M.apply(i, n), i;
                                break
                            }
                    }
                    return (c || h(t, d))(n, e, !C, i, !e || it.test(t) && vt(e.parentNode) || e), i
                }, p.sortStable = T.split("").sort(P).join("") === T, p.detectDuplicates = !!c, k(), p.sortDetached = dt(function(t) {
                    return 1 & t.compareDocumentPosition(x.createElement("fieldset"))
                }), dt(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || ut("type|href|height|width", function(t, e, i) {
                    if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), p.attributes && dt(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || ut("value", function(t, e, i) {
                    if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                }), dt(function(t) {
                    return null == t.getAttribute("disabled")
                }) || ut(R, function(t, e, i) {
                    var n;
                    if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
                }), rt
            }(x);
            T.find = p, T.expr = p.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = p.uniqueSort, T.text = p.getText, T.isXMLDoc = p.isXML, T.contains = p.contains, T.escapeSelector = p.escape;

            function f(t, e, i) {
                for (var n = [], o = void 0 !== i;
                     (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && T(t).is(i)) break;
                        n.push(t)
                    }
                return n
            }

            function k(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
            var S = T.expr.match.needsContext;

            function _(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }
            var z = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function A(t, i, n) {
                return b(i) ? T.grep(t, function(t, e) {
                    return !!i.call(t, e, t) !== n
                }) : i.nodeType ? T.grep(t, function(t) {
                    return t === i !== n
                }) : "string" != typeof i ? T.grep(t, function(t) {
                    return -1 < o.call(i, t) !== n
                }) : T.filter(i, t, n)
            }
            T.filter = function(t, e, i) {
                var n = e[0];
                return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? T.find.matchesSelector(n, t) ? [n] : [] : T.find.matches(t, T.grep(e, function(t) {
                    return 1 === t.nodeType
                }))
            }, T.fn.extend({
                find: function(t) {
                    var e, i, n = this.length,
                        o = this;
                    if ("string" != typeof t) return this.pushStack(T(t).filter(function() {
                        for (e = 0; e < n; e++)
                            if (T.contains(o[e], this)) return !0
                    }));
                    for (i = this.pushStack([]), e = 0; e < n; e++) T.find(t, o[e], i);
                    return 1 < n ? T.uniqueSort(i) : i
                },
                filter: function(t) {
                    return this.pushStack(A(this, t || [], !1))
                },
                not: function(t) {
                    return this.pushStack(A(this, t || [], !0))
                },
                is: function(t) {
                    return !!A(this, "string" == typeof t && S.test(t) ? T(t) : t || [], !1).length
                }
            });
            var E, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (T.fn.init = function(t, e, i) {
                var n, o;
                if (!t) return this;
                if (i = i || E, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : b(t) ? void 0 !== i.ready ? i.ready(t) : t(T) : T.makeArray(t, this);
                if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : P.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : C, !0)), z.test(n[1]) && T.isPlainObject(e))
                        for (n in e) b(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return (o = C.getElementById(n[2])) && (this[0] = o, this.length = 1), this
            }).prototype = T.fn, E = T(C);
            var O = /^(?:parents|prev(?:Until|All))/,
                L = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function D(t, e) {
                for (;
                    (t = t[e]) && 1 !== t.nodeType;);
                return t
            }
            T.fn.extend({
                has: function(t) {
                    var e = T(t, this),
                        i = e.length;
                    return this.filter(function() {
                        for (var t = 0; t < i; t++)
                            if (T.contains(this, e[t])) return !0
                    })
                },
                closest: function(t, e) {
                    var i, n = 0,
                        o = this.length,
                        s = [],
                        a = "string" != typeof t && T(t);
                    if (!S.test(t))
                        for (; n < o; n++)
                            for (i = this[n]; i && i !== e; i = i.parentNode)
                                if (i.nodeType < 11 && (a ? -1 < a.index(i) : 1 === i.nodeType && T.find.matchesSelector(i, t))) {
                                    s.push(i);
                                    break
                                }
                    return this.pushStack(1 < s.length ? T.uniqueSort(s) : s)
                },
                index: function(t) {
                    return t ? "string" == typeof t ? o.call(T(t), this[0]) : o.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function(t, e) {
                    return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))))
                },
                addBack: function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), T.each({
                parent: function(t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function(t) {
                    return f(t, "parentNode")
                },
                parentsUntil: function(t, e, i) {
                    return f(t, "parentNode", i)
                },
                next: function(t) {
                    return D(t, "nextSibling")
                },
                prev: function(t) {
                    return D(t, "previousSibling")
                },
                nextAll: function(t) {
                    return f(t, "nextSibling")
                },
                prevAll: function(t) {
                    return f(t, "previousSibling")
                },
                nextUntil: function(t, e, i) {
                    return f(t, "nextSibling", i)
                },
                prevUntil: function(t, e, i) {
                    return f(t, "previousSibling", i)
                },
                siblings: function(t) {
                    return k((t.parentNode || {}).firstChild, t)
                },
                children: function(t) {
                    return k(t.firstChild)
                },
                contents: function(t) {
                    return void 0 !== t.contentDocument ? t.contentDocument : (_(t, "template") && (t = t.content || t), T.merge([], t.childNodes))
                }
            }, function(n, o) {
                T.fn[n] = function(t, e) {
                    var i = T.map(this, o, t);
                    return "Until" !== n.slice(-5) && (e = t), e && "string" == typeof e && (i = T.filter(e, i)), 1 < this.length && (L[n] || T.uniqueSort(i), O.test(n) && i.reverse()), this.pushStack(i)
                }
            });
            var M = /[^\x20\t\r\n\f]+/g;

            function H(t) {
                return t
            }

            function I(t) {
                throw t
            }

            function R(t, e, i, n) {
                var o;
                try {
                    t && b(o = t.promise) ? o.call(t).done(e).fail(i) : t && b(o = t.then) ? o.call(t, e, i) : e.apply(void 0, [t].slice(n))
                } catch (t) {
                    i.apply(void 0, [t])
                }
            }
            T.Callbacks = function(n) {
                var t, i;
                n = "string" == typeof n ? (t = n, i = {}, T.each(t.match(M) || [], function(t, e) {
                    i[e] = !0
                }), i) : T.extend({}, n);

                function o() {
                    for (r = r || n.once, a = s = !0; c.length; d = -1)
                        for (e = c.shift(); ++d < l.length;) !1 === l[d].apply(e[0], e[1]) && n.stopOnFalse && (d = l.length, e = !1);
                    n.memory || (e = !1), s = !1, r && (l = e ? [] : "")
                }
                var s, e, a, r, l = [],
                    c = [],
                    d = -1,
                    u = {
                        add: function() {
                            return l && (e && !s && (d = l.length - 1, c.push(e)), function i(t) {
                                T.each(t, function(t, e) {
                                    b(e) ? n.unique && u.has(e) || l.push(e) : e && e.length && "string" !== $(e) && i(e)
                                })
                            }(arguments), e && !s && o()), this
                        },
                        remove: function() {
                            return T.each(arguments, function(t, e) {
                                for (var i; - 1 < (i = T.inArray(e, l, i));) l.splice(i, 1), i <= d && d--
                            }), this
                        },
                        has: function(t) {
                            return t ? -1 < T.inArray(t, l) : 0 < l.length
                        },
                        empty: function() {
                            return l = l && [], this
                        },
                        disable: function() {
                            return r = c = [], l = e = "", this
                        },
                        disabled: function() {
                            return !l
                        },
                        lock: function() {
                            return r = c = [], e || s || (l = e = ""), this
                        },
                        locked: function() {
                            return !!r
                        },
                        fireWith: function(t, e) {
                            return r || (e = [t, (e = e || []).slice ? e.slice() : e], c.push(e), s || o()), this
                        },
                        fire: function() {
                            return u.fireWith(this, arguments), this
                        },
                        fired: function() {
                            return !!a
                        }
                    };
                return u
            }, T.extend({
                Deferred: function(t) {
                    var s = [
                            ["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2],
                            ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"],
                            ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]
                        ],
                        o = "pending",
                        a = {
                            state: function() {
                                return o
                            },
                            always: function() {
                                return r.done(arguments).fail(arguments), this
                            },
                            catch: function(t) {
                                return a.then(null, t)
                            },
                            pipe: function() {
                                var o = arguments;
                                return T.Deferred(function(n) {
                                    T.each(s, function(t, e) {
                                        var i = b(o[e[4]]) && o[e[4]];
                                        r[e[1]](function() {
                                            var t = i && i.apply(this, arguments);
                                            t && b(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[e[0] + "With"](this, i ? [t] : arguments)
                                        })
                                    }), o = null
                                }).promise()
                            },
                            then: function(e, i, n) {
                                var l = 0;

                                function c(o, s, a, r) {
                                    return function() {
                                        function t() {
                                            var t, e;
                                            if (!(o < l)) {
                                                if ((t = a.apply(i, n)) === s.promise()) throw new TypeError("Thenable self-resolution");
                                                e = t && ("object" === li(t) || "function" == typeof t) && t.then, b(e) ? r ? e.call(t, c(l, s, H, r), c(l, s, I, r)) : (l++, e.call(t, c(l, s, H, r), c(l, s, I, r), c(l, s, H, s.notifyWith))) : (a !== H && (i = void 0, n = [t]), (r || s.resolveWith)(i, n))
                                            }
                                        }
                                        var i = this,
                                            n = arguments,
                                            e = r ? t : function() {
                                                try {
                                                    t()
                                                } catch (t) {
                                                    T.Deferred.exceptionHook && T.Deferred.exceptionHook(t, e.stackTrace), l <= o + 1 && (a !== I && (i = void 0, n = [t]), s.rejectWith(i, n))
                                                }
                                            };
                                        o ? e() : (T.Deferred.getStackHook && (e.stackTrace = T.Deferred.getStackHook()), x.setTimeout(e))
                                    }
                                }
                                return T.Deferred(function(t) {
                                    s[0][3].add(c(0, t, b(n) ? n : H, t.notifyWith)), s[1][3].add(c(0, t, b(e) ? e : H)), s[2][3].add(c(0, t, b(i) ? i : I))
                                }).promise()
                            },
                            promise: function(t) {
                                return null != t ? T.extend(t, a) : a
                            }
                        },
                        r = {};
                    return T.each(s, function(t, e) {
                        var i = e[2],
                            n = e[5];
                        a[e[1]] = i.add, n && i.add(function() {
                            o = n
                        }, s[3 - t][2].disable, s[3 - t][3].disable, s[0][2].lock, s[0][3].lock), i.add(e[3].fire), r[e[0]] = function() {
                            return r[e[0] + "With"](this === r ? void 0 : this, arguments), this
                        }, r[e[0] + "With"] = i.fireWith
                    }), a.promise(r), t && t.call(r, r), r
                },
                when: function(t) {
                    function e(e) {
                        return function(t) {
                            o[e] = this, s[e] = 1 < arguments.length ? r.call(arguments) : t, --i || a.resolveWith(o, s)
                        }
                    }
                    var i = arguments.length,
                        n = i,
                        o = Array(n),
                        s = r.call(arguments),
                        a = T.Deferred();
                    if (i <= 1 && (R(t, a.done(e(n)).resolve, a.reject, !i), "pending" === a.state() || b(s[n] && s[n].then))) return a.then();
                    for (; n--;) R(s[n], e(n), a.reject);
                    return a.promise()
                }
            });
            var j = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            T.Deferred.exceptionHook = function(t, e) {
                x.console && x.console.warn && t && j.test(t.name) && x.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
            }, T.readyException = function(t) {
                x.setTimeout(function() {
                    throw t
                })
            };
            var q = T.Deferred();

            function F() {
                C.removeEventListener("DOMContentLoaded", F), x.removeEventListener("load", F), T.ready()
            }
            T.fn.ready = function(t) {
                return q.then(t).catch(function(t) {
                    T.readyException(t)
                }), this
            }, T.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(t) {
                    (!0 === t ? --T.readyWait : T.isReady) || ((T.isReady = !0) !== t && 0 < --T.readyWait || q.resolveWith(C, [T]))
                }
            }), T.ready.then = q.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? x.setTimeout(T.ready) : (C.addEventListener("DOMContentLoaded", F), x.addEventListener("load", F));

            function N(t, e, i, n, o, s, a) {
                var r = 0,
                    l = t.length,
                    c = null == i;
                if ("object" === $(i))
                    for (r in o = !0, i) N(t, e, r, i[r], !0, s, a);
                else if (void 0 !== n && (o = !0, b(n) || (a = !0), c && (e = a ? (e.call(t, n), null) : (c = e, function(t, e, i) {
                    return c.call(T(t), i)
                })), e))
                    for (; r < l; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
                return o ? t : c ? e.call(t) : l ? e(t[0], i) : s
            }
            var B = /^-ms-/,
                W = /-([a-z])/g;

            function Y(t, e) {
                return e.toUpperCase()
            }

            function X(t) {
                return t.replace(B, "ms-").replace(W, Y)
            }

            function U(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            }

            function V() {
                this.expando = T.expando + V.uid++
            }
            V.uid = 1, V.prototype = {
                cache: function(t) {
                    var e = t[this.expando];
                    return e || (e = {}, U(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0
                    }))), e
                },
                set: function(t, e, i) {
                    var n, o = this.cache(t);
                    if ("string" == typeof e) o[X(e)] = i;
                    else
                        for (n in e) o[X(n)] = e[n];
                    return o
                },
                get: function(t, e) {
                    return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][X(e)]
                },
                access: function(t, e, i) {
                    return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
                },
                remove: function(t, e) {
                    var i, n = t[this.expando];
                    if (void 0 !== n) {
                        if (void 0 !== e) {
                            i = (e = Array.isArray(e) ? e.map(X) : (e = X(e)) in n ? [e] : e.match(M) || []).length;
                            for (; i--;) delete n[e[i]]
                        }
                        void 0 !== e && !T.isEmptyObject(n) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                    }
                },
                hasData: function(t) {
                    var e = t[this.expando];
                    return void 0 !== e && !T.isEmptyObject(e)
                }
            };
            var G = new V,
                K = new V,
                Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Q = /[A-Z]/g;

            function J(t, e, i) {
                var n, o;
                if (void 0 === i && 1 === t.nodeType)
                    if (n = "data-" + e.replace(Q, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                        try {
                            i = "true" === (o = i) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : Z.test(o) ? JSON.parse(o) : o)
                        } catch (t) {}
                        K.set(t, e, i)
                    } else i = void 0;
                return i
            }
            T.extend({
                hasData: function(t) {
                    return K.hasData(t) || G.hasData(t)
                },
                data: function(t, e, i) {
                    return K.access(t, e, i)
                },
                removeData: function(t, e) {
                    K.remove(t, e)
                },
                _data: function(t, e, i) {
                    return G.access(t, e, i)
                },
                _removeData: function(t, e) {
                    G.remove(t, e)
                }
            }), T.fn.extend({
                data: function(i, t) {
                    var e, n, o, s = this[0],
                        a = s && s.attributes;
                    if (void 0 !== i) return "object" === li(i) ? this.each(function() {
                        K.set(this, i)
                    }) : N(this, function(t) {
                        var e;
                        if (s && void 0 === t) return void 0 !== (e = K.get(s, i)) ? e : void 0 !== (e = J(s, i)) ? e : void 0;
                        this.each(function() {
                            K.set(this, i, t)
                        })
                    }, null, t, 1 < arguments.length, null, !0);
                    if (this.length && (o = K.get(s), 1 === s.nodeType && !G.get(s, "hasDataAttrs"))) {
                        for (e = a.length; e--;) a[e] && 0 === (n = a[e].name).indexOf("data-") && (n = X(n.slice(5)), J(s, n, o[n]));
                        G.set(s, "hasDataAttrs", !0)
                    }
                    return o
                },
                removeData: function(t) {
                    return this.each(function() {
                        K.remove(this, t)
                    })
                }
            }), T.extend({
                queue: function(t, e, i) {
                    var n;
                    if (t) return e = (e || "fx") + "queue", n = G.get(t, e), i && (!n || Array.isArray(i) ? n = G.access(t, e, T.makeArray(i)) : n.push(i)), n || []
                },
                dequeue: function(t, e) {
                    e = e || "fx";
                    var i = T.queue(t, e),
                        n = i.length,
                        o = i.shift(),
                        s = T._queueHooks(t, e);
                    "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete s.stop, o.call(t, function() {
                        T.dequeue(t, e)
                    }, s)), !n && s && s.empty.fire()
                },
                _queueHooks: function(t, e) {
                    var i = e + "queueHooks";
                    return G.get(t, i) || G.access(t, i, {
                        empty: T.Callbacks("once memory").add(function() {
                            G.remove(t, [e + "queue", i])
                        })
                    })
                }
            }), T.fn.extend({
                queue: function(e, i) {
                    var t = 2;
                    return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? T.queue(this[0], e) : void 0 === i ? this : this.each(function() {
                        var t = T.queue(this, e, i);
                        T._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && T.dequeue(this, e)
                    })
                },
                dequeue: function(t) {
                    return this.each(function() {
                        T.dequeue(this, t)
                    })
                },
                clearQueue: function(t) {
                    return this.queue(t || "fx", [])
                },
                promise: function(t, e) {
                    function i() {
                        --o || s.resolveWith(a, [a])
                    }
                    var n, o = 1,
                        s = T.Deferred(),
                        a = this,
                        r = this.length;
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;)(n = G.get(a[r], t + "queueHooks")) && n.empty && (o++, n.empty.add(i));
                    return i(), s.promise(e)
                }
            });
            var tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                et = new RegExp("^(?:([+-])=|)(" + tt + ")([a-z%]*)$", "i"),
                it = ["Top", "Right", "Bottom", "Left"],
                nt = C.documentElement,
                ot = function(t) {
                    return T.contains(t.ownerDocument, t)
                },
                st = {
                    composed: !0
                };
            nt.getRootNode && (ot = function(t) {
                return T.contains(t.ownerDocument, t) || t.getRootNode(st) === t.ownerDocument
            });

            function at(t, e) {
                return "none" === (t = e || t).style.display || "" === t.style.display && ot(t) && "none" === T.css(t, "display")
            }

            function rt(t, e, i, n) {
                var o, s, a = {};
                for (s in e) a[s] = t.style[s], t.style[s] = e[s];
                for (s in o = i.apply(t, n || []), e) t.style[s] = a[s];
                return o
            }

            function lt(t, e, i, n) {
                var o, s, a = 20,
                    r = n ? function() {
                        return n.cur()
                    } : function() {
                        return T.css(t, e, "")
                    },
                    l = r(),
                    c = i && i[3] || (T.cssNumber[e] ? "" : "px"),
                    d = t.nodeType && (T.cssNumber[e] || "px" !== c && +l) && et.exec(T.css(t, e));
                if (d && d[3] !== c) {
                    for (l /= 2, c = c || d[3], d = +l || 1; a--;) T.style(t, e, d + c), (1 - s) * (1 - (s = r() / l || .5)) <= 0 && (a = 0), d /= s;
                    d *= 2, T.style(t, e, d + c), i = i || []
                }
                return i && (d = +d || +l || 0, o = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = o)), o
            }
            var ct = {};

            function dt(t, e) {
                for (var i, n, o = [], s = 0, a = t.length; s < a; s++)(n = t[s]).style && (i = n.style.display, e ? ("none" === i && (o[s] = G.get(n, "display") || null, o[s] || (n.style.display = "")), "" === n.style.display && at(n) && (o[s] = (u = c = l = void 0, c = (r = n).ownerDocument, d = r.nodeName, (u = ct[d]) || (l = c.body.appendChild(c.createElement(d)), u = T.css(l, "display"), l.parentNode.removeChild(l), "none" === u && (u = "block"), ct[d] = u)))) : "none" !== i && (o[s] = "none", G.set(n, "display", i)));
                var r, l, c, d, u;
                for (s = 0; s < a; s++) null != o[s] && (t[s].style.display = o[s]);
                return t
            }
            T.fn.extend({
                show: function() {
                    return dt(this, !0)
                },
                hide: function() {
                    return dt(this)
                },
                toggle: function(t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                        at(this) ? T(this).show() : T(this).hide()
                    })
                }
            });
            var ut = /^(?:checkbox|radio)$/i,
                ht = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                pt = /^$|^module$|\/(?:java|ecma)script/i,
                ft = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function gt(t, e) {
                var i;
                return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && _(t, e) ? T.merge([t], i) : i
            }

            function mt(t, e) {
                for (var i = 0, n = t.length; i < n; i++) G.set(t[i], "globalEval", !e || G.get(e[i], "globalEval"))
            }
            ft.optgroup = ft.option, ft.tbody = ft.tfoot = ft.colgroup = ft.caption = ft.thead, ft.th = ft.td;
            var vt, yt, bt = /<|&#?\w+;/;

            function wt(t, e, i, n, o) {
                for (var s, a, r, l, c, d, u = e.createDocumentFragment(), h = [], p = 0, f = t.length; p < f; p++)
                    if ((s = t[p]) || 0 === s)
                        if ("object" === $(s)) T.merge(h, s.nodeType ? [s] : s);
                        else if (bt.test(s)) {
                            for (a = a || u.appendChild(e.createElement("div")), r = (ht.exec(s) || ["", ""])[1].toLowerCase(), l = ft[r] || ft._default, a.innerHTML = l[1] + T.htmlPrefilter(s) + l[2], d = l[0]; d--;) a = a.lastChild;
                            T.merge(h, a.childNodes), (a = u.firstChild).textContent = ""
                        } else h.push(e.createTextNode(s));
                for (u.textContent = "", p = 0; s = h[p++];)
                    if (n && -1 < T.inArray(s, n)) o && o.push(s);
                    else if (c = ot(s), a = gt(u.appendChild(s), "script"), c && mt(a), i)
                        for (d = 0; s = a[d++];) pt.test(s.type || "") && i.push(s);
                return u
            }
            vt = C.createDocumentFragment().appendChild(C.createElement("div")), (yt = C.createElement("input")).setAttribute("type", "radio"), yt.setAttribute("checked", "checked"), yt.setAttribute("name", "t"), vt.appendChild(yt), y.checkClone = vt.cloneNode(!0).cloneNode(!0).lastChild.checked, vt.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!vt.cloneNode(!0).lastChild.defaultValue;
            var $t = /^key/,
                kt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                xt = /^([^.]*)(?:\.(.+)|)/;

            function Ct() {
                return !0
            }

            function Tt() {
                return !1
            }

            function St(t, e) {
                return t === function() {
                    try {
                        return C.activeElement
                    } catch (t) {}
                }() == ("focus" === e)
            }

            function _t(t, e, i, n, o, s) {
                var a, r;
                if ("object" === li(e)) {
                    for (r in "string" != typeof i && (n = n || i, i = void 0), e) _t(t, r, i, n, e[r], s);
                    return t
                }
                if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), !1 === o) o = Tt;
                else if (!o) return t;
                return 1 === s && (a = o, (o = function(t) {
                    return T().off(t), a.apply(this, arguments)
                }).guid = a.guid || (a.guid = T.guid++)), t.each(function() {
                    T.event.add(this, e, o, n, i)
                })
            }

            function zt(t, o, s) {
                s ? (G.set(t, o, !1), T.event.add(t, o, {
                    namespace: !1,
                    handler: function(t) {
                        var e, i, n = G.get(this, o);
                        if (1 & t.isTrigger && this[o]) {
                            if (n.length)(T.event.special[o] || {}).delegateType && t.stopPropagation();
                            else if (n = r.call(arguments), G.set(this, o, n), e = s(this, o), this[o](), n !== (i = G.get(this, o)) || e ? G.set(this, o, !1) : i = {}, n !== i) return t.stopImmediatePropagation(), t.preventDefault(), i.value
                        } else n.length && (G.set(this, o, {
                            value: T.event.trigger(T.extend(n[0], T.Event.prototype), n.slice(1), this)
                        }), t.stopImmediatePropagation())
                    }
                })) : void 0 === G.get(t, o) && T.event.add(t, o, Ct)
            }
            T.event = {
                global: {},
                add: function(e, t, i, n, o) {
                    var s, a, r, l, c, d, u, h, p, f, g, m = G.get(e);
                    if (m)
                        for (i.handler && (i = (s = i).handler, o = s.selector), o && T.find.matchesSelector(nt, o), i.guid || (i.guid = T.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
                            return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0
                        }), c = (t = (t || "").match(M) || [""]).length; c--;) p = g = (r = xt.exec(t[c]) || [])[1], f = (r[2] || "").split(".").sort(), p && (u = T.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = T.event.special[p] || {}, d = T.extend({
                            type: p,
                            origType: g,
                            data: n,
                            handler: i,
                            guid: i.guid,
                            selector: o,
                            needsContext: o && T.expr.match.needsContext.test(o),
                            namespace: f.join(".")
                        }, s), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, f, a) || e.addEventListener && e.addEventListener(p, a)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), T.event.global[p] = !0)
                },
                remove: function(t, e, i, n, o) {
                    var s, a, r, l, c, d, u, h, p, f, g, m = G.hasData(t) && G.get(t);
                    if (m && (l = m.events)) {
                        for (c = (e = (e || "").match(M) || [""]).length; c--;)
                            if (p = g = (r = xt.exec(e[c]) || [])[1], f = (r[2] || "").split(".").sort(), p) {
                                for (u = T.event.special[p] || {}, h = l[p = (n ? u.delegateType : u.bindType) || p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length; s--;) d = h[s], !o && g !== d.origType || i && i.guid !== d.guid || r && !r.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (h.splice(s, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(t, d));
                                a && !h.length && (u.teardown && !1 !== u.teardown.call(t, f, m.handle) || T.removeEvent(t, p, m.handle), delete l[p])
                            } else
                                for (p in l) T.event.remove(t, p + e[c], i, n, !0);
                        T.isEmptyObject(l) && G.remove(t, "handle events")
                    }
                },
                dispatch: function(t) {
                    var e, i, n, o, s, a, r = T.event.fix(t),
                        l = new Array(arguments.length),
                        c = (G.get(this, "events") || {})[r.type] || [],
                        d = T.event.special[r.type] || {};
                    for (l[0] = r, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                    if (r.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, r)) {
                        for (a = T.event.handlers.call(this, r, c), e = 0;
                             (o = a[e++]) && !r.isPropagationStopped();)
                            for (r.currentTarget = o.elem, i = 0;
                                 (s = o.handlers[i++]) && !r.isImmediatePropagationStopped();) r.rnamespace && !1 !== s.namespace && !r.rnamespace.test(s.namespace) || (r.handleObj = s, r.data = s.data, void 0 !== (n = ((T.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (r.result = n) && (r.preventDefault(), r.stopPropagation()));
                        return d.postDispatch && d.postDispatch.call(this, r), r.result
                    }
                },
                handlers: function(t, e) {
                    var i, n, o, s, a, r = [],
                        l = e.delegateCount,
                        c = t.target;
                    if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                                for (s = [], a = {}, i = 0; i < l; i++) void 0 === a[o = (n = e[i]).selector + " "] && (a[o] = n.needsContext ? -1 < T(o, this).index(c) : T.find(o, this, null, [c]).length), a[o] && s.push(n);
                                s.length && r.push({
                                    elem: c,
                                    handlers: s
                                })
                            }
                    return c = this, l < e.length && r.push({
                        elem: c,
                        handlers: e.slice(l)
                    }), r
                },
                addProp: function(e, t) {
                    Object.defineProperty(T.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: b(t) ? function() {
                            if (this.originalEvent) return t(this.originalEvent)
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[e]
                        },
                        set: function(t) {
                            Object.defineProperty(this, e, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: t
                            })
                        }
                    })
                },
                fix: function(t) {
                    return t[T.expando] ? t : new T.Event(t)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(t) {
                            var e = this || t;
                            return ut.test(e.type) && e.click && _(e, "input") && zt(e, "click", Ct), !1
                        },
                        trigger: function(t) {
                            var e = this || t;
                            return ut.test(e.type) && e.click && _(e, "input") && zt(e, "click"), !0
                        },
                        _default: function(t) {
                            var e = t.target;
                            return ut.test(e.type) && e.click && _(e, "input") && G.get(e, "click") || _(e, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                }
            }, T.removeEvent = function(t, e, i) {
                t.removeEventListener && t.removeEventListener(e, i)
            }, T.Event = function(t, e) {
                if (!(this instanceof T.Event)) return new T.Event(t, e);
                t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Ct : Tt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && T.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[T.expando] = !0
            }, T.Event.prototype = {
                constructor: T.Event,
                isDefaultPrevented: Tt,
                isPropagationStopped: Tt,
                isImmediatePropagationStopped: Tt,
                isSimulated: !1,
                preventDefault: function() {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = Ct, t && !this.isSimulated && t.preventDefault()
                },
                stopPropagation: function() {
                    var t = this.originalEvent;
                    this.isPropagationStopped = Ct, t && !this.isSimulated && t.stopPropagation()
                },
                stopImmediatePropagation: function() {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = Ct, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, T.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(t) {
                    var e = t.button;
                    return null == t.which && $t.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && kt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
                }
            }, T.event.addProp), T.each({
                focus: "focusin",
                blur: "focusout"
            }, function(t, e) {
                T.event.special[t] = {
                    setup: function() {
                        return zt(this, t, St), !1
                    },
                    trigger: function() {
                        return zt(this, t), !0
                    },
                    delegateType: e
                }
            }), T.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(t, o) {
                T.event.special[t] = {
                    delegateType: o,
                    bindType: o,
                    handle: function(t) {
                        var e, i = t.relatedTarget,
                            n = t.handleObj;
                        return i && (i === this || T.contains(this, i)) || (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = o), e
                    }
                }
            }), T.fn.extend({
                on: function(t, e, i, n) {
                    return _t(this, t, e, i, n)
                },
                one: function(t, e, i, n) {
                    return _t(this, t, e, i, n, 1)
                },
                off: function(t, e, i) {
                    var n, o;
                    if (t && t.preventDefault && t.handleObj) return n = t.handleObj, T(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                    if ("object" !== li(t)) return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = Tt), this.each(function() {
                        T.event.remove(this, t, i, e)
                    });
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
            });
            var At = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Et = /<script|<style|<link/i,
                Pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Lt(t, e) {
                return _(t, "table") && _(11 !== e.nodeType ? e : e.firstChild, "tr") && T(t).children("tbody")[0] || t
            }

            function Dt(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
            }

            function Mt(t) {
                return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
            }

            function Ht(t, e) {
                var i, n, o, s, a, r, l, c;
                if (1 === e.nodeType) {
                    if (G.hasData(t) && (s = G.access(t), a = G.set(e, s), c = s.events))
                        for (o in delete a.handle, a.events = {}, c)
                            for (i = 0, n = c[o].length; i < n; i++) T.event.add(e, o, c[o][i]);
                    K.hasData(t) && (r = K.access(t), l = T.extend({}, r), K.set(e, l))
                }
            }

            function It(i, n, o, s) {
                n = m.apply([], n);
                var t, e, a, r, l, c, d = 0,
                    u = i.length,
                    h = u - 1,
                    p = n[0],
                    f = b(p);
                if (f || 1 < u && "string" == typeof p && !y.checkClone && Pt.test(p)) return i.each(function(t) {
                    var e = i.eq(t);
                    f && (n[0] = p.call(this, t, e.html())), It(e, n, o, s)
                });
                if (u && (e = (t = wt(n, i[0].ownerDocument, !1, i, s)).firstChild, 1 === t.childNodes.length && (t = e), e || s)) {
                    for (r = (a = T.map(gt(t, "script"), Dt)).length; d < u; d++) l = t, d !== h && (l = T.clone(l, !0, !0), r && T.merge(a, gt(l, "script"))), o.call(i[d], l, d);
                    if (r)
                        for (c = a[a.length - 1].ownerDocument, T.map(a, Mt), d = 0; d < r; d++) l = a[d], pt.test(l.type || "") && !G.access(l, "globalEval") && T.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && !l.noModule && T._evalUrl(l.src, {
                            nonce: l.nonce || l.getAttribute("nonce")
                        }) : w(l.textContent.replace(Ot, ""), l, c))
                }
                return i
            }

            function Rt(t, e, i) {
                for (var n, o = e ? T.filter(e, t) : t, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || T.cleanData(gt(n)), n.parentNode && (i && ot(n) && mt(gt(n, "script")), n.parentNode.removeChild(n));
                return t
            }
            T.extend({
                htmlPrefilter: function(t) {
                    return t.replace(At, "<$1></$2>")
                },
                clone: function(t, e, i) {
                    var n, o, s, a, r, l, c, d = t.cloneNode(!0),
                        u = ot(t);
                    if (!(y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t)))
                        for (a = gt(d), n = 0, o = (s = gt(t)).length; n < o; n++) r = s[n], l = a[n], void 0, "input" === (c = l.nodeName.toLowerCase()) && ut.test(r.type) ? l.checked = r.checked : "input" !== c && "textarea" !== c || (l.defaultValue = r.defaultValue);
                    if (e)
                        if (i)
                            for (s = s || gt(t), a = a || gt(d), n = 0, o = s.length; n < o; n++) Ht(s[n], a[n]);
                        else Ht(t, d);
                    return 0 < (a = gt(d, "script")).length && mt(a, !u && gt(t, "script")), d
                },
                cleanData: function(t) {
                    for (var e, i, n, o = T.event.special, s = 0; void 0 !== (i = t[s]); s++)
                        if (U(i)) {
                            if (e = i[G.expando]) {
                                if (e.events)
                                    for (n in e.events) o[n] ? T.event.remove(i, n) : T.removeEvent(i, n, e.handle);
                                i[G.expando] = void 0
                            }
                            i[K.expando] && (i[K.expando] = void 0)
                        }
                }
            }), T.fn.extend({
                detach: function(t) {
                    return Rt(this, t, !0)
                },
                remove: function(t) {
                    return Rt(this, t)
                },
                text: function(t) {
                    return N(this, function(t) {
                        return void 0 === t ? T.text(this) : this.empty().each(function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                        })
                    }, null, t, arguments.length)
                },
                append: function() {
                    return It(this, arguments, function(t) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Lt(this, t).appendChild(t)
                    })
                },
                prepend: function() {
                    return It(this, arguments, function(t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = Lt(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                },
                before: function() {
                    return It(this, arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                },
                after: function() {
                    return It(this, arguments, function(t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                },
                empty: function() {
                    for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (T.cleanData(gt(t, !1)), t.textContent = "");
                    return this
                },
                clone: function(t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map(function() {
                        return T.clone(this, t, e)
                    })
                },
                html: function(t) {
                    return N(this, function(t) {
                        var e = this[0] || {},
                            i = 0,
                            n = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !Et.test(t) && !ft[(ht.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = T.htmlPrefilter(t);
                            try {
                                for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (T.cleanData(gt(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (t) {}
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function() {
                    var i = [];
                    return It(this, arguments, function(t) {
                        var e = this.parentNode;
                        T.inArray(this, i) < 0 && (T.cleanData(gt(this)), e && e.replaceChild(t, this))
                    }, i)
                }
            }), T.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(t, a) {
                T.fn[t] = function(t) {
                    for (var e, i = [], n = T(t), o = n.length - 1, s = 0; s <= o; s++) e = s === o ? this : this.clone(!0), T(n[s])[a](e), l.apply(i, e.get());
                    return this.pushStack(i)
                }
            });
            var jt, qt, Ft, Nt, Bt, Wt, Yt, Xt = new RegExp("^(" + tt + ")(?!px)[a-z%]+$", "i"),
                Ut = function(t) {
                    var e = t.ownerDocument.defaultView;
                    return e && e.opener || (e = x), e.getComputedStyle(t)
                },
                Vt = new RegExp(it.join("|"), "i");

            function Gt(t, e, i) {
                var n, o, s, a, r = t.style;
                return (i = i || Ut(t)) && ("" !== (a = i.getPropertyValue(e) || i[e]) || ot(t) || (a = T.style(t, e)), !y.pixelBoxStyles() && Xt.test(a) && Vt.test(e) && (n = r.width, o = r.minWidth, s = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, r.minWidth = o, r.maxWidth = s)), void 0 !== a ? a + "" : a
            }

            function Kt(t, e) {
                return {
                    get: function() {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get
                    }
                }
            }

            function Zt() {
                if (Yt) {
                    Wt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Yt.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", nt.appendChild(Wt).appendChild(Yt);
                    var t = x.getComputedStyle(Yt);
                    jt = "1%" !== t.top, Bt = 12 === Qt(t.marginLeft), Yt.style.right = "60%", Nt = 36 === Qt(t.right), qt = 36 === Qt(t.width), Yt.style.position = "absolute", Ft = 12 === Qt(Yt.offsetWidth / 3), nt.removeChild(Wt), Yt = null
                }
            }

            function Qt(t) {
                return Math.round(parseFloat(t))
            }
            Wt = C.createElement("div"), (Yt = C.createElement("div")).style && (Yt.style.backgroundClip = "content-box", Yt.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Yt.style.backgroundClip, T.extend(y, {
                boxSizingReliable: function() {
                    return Zt(), qt
                },
                pixelBoxStyles: function() {
                    return Zt(), Nt
                },
                pixelPosition: function() {
                    return Zt(), jt
                },
                reliableMarginLeft: function() {
                    return Zt(), Bt
                },
                scrollboxSize: function() {
                    return Zt(), Ft
                }
            }));
            var Jt = ["Webkit", "Moz", "ms"],
                te = C.createElement("div").style,
                ee = {};

            function ie(t) {
                return T.cssProps[t] || ee[t] || (t in te ? t : ee[t] = function(t) {
                    for (var e = t[0].toUpperCase() + t.slice(1), i = Jt.length; i--;)
                        if ((t = Jt[i] + e) in te) return t
                }(t) || t)
            }
            var ne = /^(none|table(?!-c[ea]).+)/,
                oe = /^--/,
                se = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                ae = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };

            function re(t, e, i) {
                var n = et.exec(e);
                return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
            }

            function le(t, e, i, n, o, s) {
                var a = "width" === e ? 1 : 0,
                    r = 0,
                    l = 0;
                if (i === (n ? "border" : "content")) return 0;
                for (; a < 4; a += 2) "margin" === i && (l += T.css(t, i + it[a], !0, o)), n ? ("content" === i && (l -= T.css(t, "padding" + it[a], !0, o)), "margin" !== i && (l -= T.css(t, "border" + it[a] + "Width", !0, o))) : (l += T.css(t, "padding" + it[a], !0, o), "padding" !== i ? l += T.css(t, "border" + it[a] + "Width", !0, o) : r += T.css(t, "border" + it[a] + "Width", !0, o));
                return !n && 0 <= s && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - r - .5)) || 0), l
            }

            function ce(t, e, i) {
                var n = Ut(t),
                    o = (!y.boxSizingReliable() || i) && "border-box" === T.css(t, "boxSizing", !1, n),
                    s = o,
                    a = Gt(t, e, n),
                    r = "offset" + e[0].toUpperCase() + e.slice(1);
                if (Xt.test(a)) {
                    if (!i) return a;
                    a = "auto"
                }
                return (!y.boxSizingReliable() && o || "auto" === a || !parseFloat(a) && "inline" === T.css(t, "display", !1, n)) && t.getClientRects().length && (o = "border-box" === T.css(t, "boxSizing", !1, n), (s = r in t) && (a = t[r])), (a = parseFloat(a) || 0) + le(t, e, i || (o ? "border" : "content"), s, n, a) + "px"
            }

            function de(t, e, i, n, o) {
                return new de.prototype.init(t, e, i, n, o)
            }
            T.extend({
                cssHooks: {
                    opacity: {
                        get: function(t, e) {
                            if (e) {
                                var i = Gt(t, "opacity");
                                return "" === i ? "1" : i
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(t, e, i, n) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var o, s, a, r = X(e),
                            l = oe.test(e),
                            c = t.style;
                        if (l || (e = ie(r)), a = T.cssHooks[e] || T.cssHooks[r], void 0 === i) return a && "get" in a && void 0 !== (o = a.get(t, !1, n)) ? o : c[e];
                        "string" === (s = li(i)) && (o = et.exec(i)) && o[1] && (i = lt(t, e, o), s = "number"), null != i && i == i && ("number" !== s || l || (i += o && o[3] || (T.cssNumber[r] ? "" : "px")), y.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))
                    }
                },
                css: function(t, e, i, n) {
                    var o, s, a, r = X(e);
                    return oe.test(e) || (e = ie(r)), (a = T.cssHooks[e] || T.cssHooks[r]) && "get" in a && (o = a.get(t, !0, i)), void 0 === o && (o = Gt(t, e, n)), "normal" === o && e in ae && (o = ae[e]), "" === i || i ? (s = parseFloat(o), !0 === i || isFinite(s) ? s || 0 : o) : o
                }
            }), T.each(["height", "width"], function(t, l) {
                T.cssHooks[l] = {
                    get: function(t, e, i) {
                        if (e) return !ne.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ce(t, l, i) : rt(t, se, function() {
                            return ce(t, l, i)
                        })
                    },
                    set: function(t, e, i) {
                        var n, o = Ut(t),
                            s = !y.scrollboxSize() && "absolute" === o.position,
                            a = (s || i) && "border-box" === T.css(t, "boxSizing", !1, o),
                            r = i ? le(t, l, i, a, o) : 0;
                        return a && s && (r -= Math.ceil(t["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(o[l]) - le(t, l, "border", !1, o) - .5)), r && (n = et.exec(e)) && "px" !== (n[3] || "px") && (t.style[l] = e, e = T.css(t, l)), re(0, e, r)
                    }
                }
            }), T.cssHooks.marginLeft = Kt(y.reliableMarginLeft, function(t, e) {
                if (e) return (parseFloat(Gt(t, "marginLeft")) || t.getBoundingClientRect().left - rt(t, {
                    marginLeft: 0
                }, function() {
                    return t.getBoundingClientRect().left
                })) + "px"
            }), T.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(o, s) {
                T.cssHooks[o + s] = {
                    expand: function(t) {
                        for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[o + it[e] + s] = n[e] || n[e - 2] || n[0];
                        return i
                    }
                }, "margin" !== o && (T.cssHooks[o + s].set = re)
            }), T.fn.extend({
                css: function(t, e) {
                    return N(this, function(t, e, i) {
                        var n, o, s = {},
                            a = 0;
                        if (Array.isArray(e)) {
                            for (n = Ut(t), o = e.length; a < o; a++) s[e[a]] = T.css(t, e[a], !1, n);
                            return s
                        }
                        return void 0 !== i ? T.style(t, e, i) : T.css(t, e)
                    }, t, e, 1 < arguments.length)
                }
            }), ((T.Tween = de).prototype = {
                constructor: de,
                init: function(t, e, i, n, o, s) {
                    this.elem = t, this.prop = i, this.easing = o || T.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (T.cssNumber[i] ? "" : "px")
                },
                cur: function() {
                    var t = de.propHooks[this.prop];
                    return t && t.get ? t.get(this) : de.propHooks._default.get(this)
                },
                run: function(t) {
                    var e, i = de.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : de.propHooks._default.set(this), this
                }
            }).init.prototype = de.prototype, (de.propHooks = {
                _default: {
                    get: function(t) {
                        var e;
                        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                    },
                    set: function(t) {
                        T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !T.cssHooks[t.prop] && null == t.elem.style[ie(t.prop)] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit)
                    }
                }
            }).scrollTop = de.propHooks.scrollLeft = {
                set: function(t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, T.easing = {
                linear: function(t) {
                    return t
                },
                swing: function(t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                _default: "swing"
            }, T.fx = de.prototype.init, T.fx.step = {};
            var ue, he, pe, fe, ge = /^(?:toggle|show|hide)$/,
                me = /queueHooks$/;

            function ve() {
                he && (!1 === C.hidden && x.requestAnimationFrame ? x.requestAnimationFrame(ve) : x.setTimeout(ve, T.fx.interval), T.fx.tick())
            }

            function ye() {
                return x.setTimeout(function() {
                    ue = void 0
                }), ue = Date.now()
            }

            function be(t, e) {
                var i, n = 0,
                    o = {
                        height: t
                    };
                for (e = e ? 1 : 0; n < 4; n += 2 - e) o["margin" + (i = it[n])] = o["padding" + i] = t;
                return e && (o.opacity = o.width = t), o
            }

            function we(t, e, i) {
                for (var n, o = ($e.tweeners[e] || []).concat($e.tweeners["*"]), s = 0, a = o.length; s < a; s++)
                    if (n = o[s].call(i, e, t)) return n
            }

            function $e(s, t, e) {
                var i, a, n = 0,
                    o = $e.prefilters.length,
                    r = T.Deferred().always(function() {
                        delete l.elem
                    }),
                    l = function() {
                        if (a) return !1;
                        for (var t = ue || ye(), e = Math.max(0, c.startTime + c.duration - t), i = 1 - (e / c.duration || 0), n = 0, o = c.tweens.length; n < o; n++) c.tweens[n].run(i);
                        return r.notifyWith(s, [c, i, e]), i < 1 && o ? e : (o || r.notifyWith(s, [c, 1, 0]), r.resolveWith(s, [c]), !1)
                    },
                    c = r.promise({
                        elem: s,
                        props: T.extend({}, t),
                        opts: T.extend(!0, {
                            specialEasing: {},
                            easing: T.easing._default
                        }, e),
                        originalProperties: t,
                        originalOptions: e,
                        startTime: ue || ye(),
                        duration: e.duration,
                        tweens: [],
                        createTween: function(t, e) {
                            var i = T.Tween(s, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(i), i
                        },
                        stop: function(t) {
                            var e = 0,
                                i = t ? c.tweens.length : 0;
                            if (a) return this;
                            for (a = !0; e < i; e++) c.tweens[e].run(1);
                            return t ? (r.notifyWith(s, [c, 1, 0]), r.resolveWith(s, [c, t])) : r.rejectWith(s, [c, t]), this
                        }
                    }),
                    d = c.props;
                for (function(t, e) {
                    var i, n, o, s, a;
                    for (i in t)
                        if (o = e[n = X(i)], s = t[i], Array.isArray(s) && (o = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (a = T.cssHooks[n]) && "expand" in a)
                            for (i in s = a.expand(s), delete t[n], s) i in t || (t[i] = s[i], e[i] = o);
                        else e[n] = o
                }(d, c.opts.specialEasing); n < o; n++)
                    if (i = $e.prefilters[n].call(c, s, d, c.opts)) return b(i.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
                return T.map(d, we, c), b(c.opts.start) && c.opts.start.call(s, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), T.fx.timer(T.extend(l, {
                    elem: s,
                    anim: c,
                    queue: c.opts.queue
                })), c
            }
            T.Animation = T.extend($e, {
                tweeners: {
                    "*": [function(t, e) {
                        var i = this.createTween(t, e);
                        return lt(i.elem, t, et.exec(e), i), i
                    }]
                },
                tweener: function(t, e) {
                    for (var i, n = 0, o = (t = b(t) ? (e = t, ["*"]) : t.match(M)).length; n < o; n++) i = t[n], $e.tweeners[i] = $e.tweeners[i] || [], $e.tweeners[i].unshift(e)
                },
                prefilters: [function(t, e, i) {
                    var n, o, s, a, r, l, c, d, u = "width" in e || "height" in e,
                        h = this,
                        p = {},
                        f = t.style,
                        g = t.nodeType && at(t),
                        m = G.get(t, "fxshow");
                    for (n in i.queue || (null == (a = T._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, r = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || r()
                    }), a.unqueued++, h.always(function() {
                        h.always(function() {
                            a.unqueued--, T.queue(t, "fx").length || a.empty.fire()
                        })
                    })), e)
                        if (o = e[n], ge.test(o)) {
                            if (delete e[n], s = s || "toggle" === o, o === (g ? "hide" : "show")) {
                                if ("show" !== o || !m || void 0 === m[n]) continue;
                                g = !0
                            }
                            p[n] = m && m[n] || T.style(t, n)
                        }
                    if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(p))
                        for (n in u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = m && m.display) && (c = G.get(t, "display")), "none" === (d = T.css(t, "display")) && (c ? d = c : (dt([t], !0), c = t.style.display || c, d = T.css(t, "display"), dt([t]))), ("inline" === d || "inline-block" === d && null != c) && "none" === T.css(t, "float") && (l || (h.done(function() {
                            f.display = c
                        }), null == c && (d = f.display, c = "none" === d ? "" : d)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", h.always(function() {
                            f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                        })), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = G.access(t, "fxshow", {
                            display: c
                        }), s && (m.hidden = !g), g && dt([t], !0), h.done(function() {
                            for (n in g || dt([t]), G.remove(t, "fxshow"), p) T.style(t, n, p[n])
                        })), l = we(g ? m[n] : 0, n, h), n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0))
                }],
                prefilter: function(t, e) {
                    e ? $e.prefilters.unshift(t) : $e.prefilters.push(t)
                }
            }), T.speed = function(t, e, i) {
                var n = t && "object" === li(t) ? T.extend({}, t) : {
                    complete: i || !i && e || b(t) && t,
                    duration: t,
                    easing: i && e || e && !b(e) && e
                };
                return T.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in T.fx.speeds ? n.duration = T.fx.speeds[n.duration] : n.duration = T.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    b(n.old) && n.old.call(this), n.queue && T.dequeue(this, n.queue)
                }, n
            }, T.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(at).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(e, t, i, n) {
                    function o() {
                        var t = $e(this, T.extend({}, e), a);
                        (s || G.get(this, "finish")) && t.stop(!0)
                    }
                    var s = T.isEmptyObject(e),
                        a = T.speed(t, i, n);
                    return o.finish = o, s || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
                },
                stop: function(o, t, s) {
                    function a(t) {
                        var e = t.stop;
                        delete t.stop, e(s)
                    }
                    return "string" != typeof o && (s = t, t = o, o = void 0), t && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                        var t = !0,
                            e = null != o && o + "queueHooks",
                            i = T.timers,
                            n = G.get(this);
                        if (e) n[e] && n[e].stop && a(n[e]);
                        else
                            for (e in n) n[e] && n[e].stop && me.test(e) && a(n[e]);
                        for (e = i.length; e--;) i[e].elem !== this || null != o && i[e].queue !== o || (i[e].anim.stop(s), t = !1, i.splice(e, 1));
                        !t && s || T.dequeue(this, o)
                    })
                },
                finish: function(a) {
                    return !1 !== a && (a = a || "fx"), this.each(function() {
                        var t, e = G.get(this),
                            i = e[a + "queue"],
                            n = e[a + "queueHooks"],
                            o = T.timers,
                            s = i ? i.length : 0;
                        for (e.finish = !0, T.queue(this, a, []), n && n.stop && n.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === a && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete e.finish
                    })
                }
            }), T.each(["toggle", "show", "hide"], function(t, n) {
                var o = T.fn[n];
                T.fn[n] = function(t, e, i) {
                    return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(be(n, !0), t, e, i)
                }
            }), T.each({
                slideDown: be("show"),
                slideUp: be("hide"),
                slideToggle: be("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, n) {
                T.fn[t] = function(t, e, i) {
                    return this.animate(n, t, e, i)
                }
            }), T.timers = [], T.fx.tick = function() {
                var t, e = 0,
                    i = T.timers;
                for (ue = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                i.length || T.fx.stop(), ue = void 0
            }, T.fx.timer = function(t) {
                T.timers.push(t), T.fx.start()
            }, T.fx.interval = 13, T.fx.start = function() {
                he || (he = !0, ve())
            }, T.fx.stop = function() {
                he = null
            }, T.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, T.fn.delay = function(n, t) {
                return n = T.fx && T.fx.speeds[n] || n, t = t || "fx", this.queue(t, function(t, e) {
                    var i = x.setTimeout(t, n);
                    e.stop = function() {
                        x.clearTimeout(i)
                    }
                })
            }, pe = C.createElement("input"), fe = C.createElement("select").appendChild(C.createElement("option")), pe.type = "checkbox", y.checkOn = "" !== pe.value, y.optSelected = fe.selected, (pe = C.createElement("input")).value = "t", pe.type = "radio", y.radioValue = "t" === pe.value;
            var ke, xe = T.expr.attrHandle;
            T.fn.extend({
                attr: function(t, e) {
                    return N(this, T.attr, t, e, 1 < arguments.length)
                },
                removeAttr: function(t) {
                    return this.each(function() {
                        T.removeAttr(this, t)
                    })
                }
            }), T.extend({
                attr: function(t, e, i) {
                    var n, o, s = t.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? T.prop(t, e, i) : (1 === s && T.isXMLDoc(t) || (o = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? ke : void 0)), void 0 !== i ? null === i ? void T.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : null == (n = T.find.attr(t, e)) ? void 0 : n)
                },
                attrHooks: {
                    type: {
                        set: function(t, e) {
                            if (!y.radioValue && "radio" === e && _(t, "input")) {
                                var i = t.value;
                                return t.setAttribute("type", e), i && (t.value = i), e
                            }
                        }
                    }
                },
                removeAttr: function(t, e) {
                    var i, n = 0,
                        o = e && e.match(M);
                    if (o && 1 === t.nodeType)
                        for (; i = o[n++];) t.removeAttribute(i)
                }
            }), ke = {
                set: function(t, e, i) {
                    return !1 === e ? T.removeAttr(t, i) : t.setAttribute(i, i), i
                }
            }, T.each(T.expr.match.bool.source.match(/\w+/g), function(t, e) {
                var a = xe[e] || T.find.attr;
                xe[e] = function(t, e, i) {
                    var n, o, s = e.toLowerCase();
                    return i || (o = xe[s], xe[s] = n, n = null != a(t, e, i) ? s : null, xe[s] = o), n
                }
            });
            var Ce = /^(?:input|select|textarea|button)$/i,
                Te = /^(?:a|area)$/i;

            function Se(t) {
                return (t.match(M) || []).join(" ")
            }

            function _e(t) {
                return t.getAttribute && t.getAttribute("class") || ""
            }

            function ze(t) {
                return Array.isArray(t) ? t : "string" == typeof t && t.match(M) || []
            }
            T.fn.extend({
                prop: function(t, e) {
                    return N(this, T.prop, t, e, 1 < arguments.length)
                },
                removeProp: function(t) {
                    return this.each(function() {
                        delete this[T.propFix[t] || t]
                    })
                }
            }), T.extend({
                prop: function(t, e, i) {
                    var n, o, s = t.nodeType;
                    if (3 !== s && 8 !== s && 2 !== s) return 1 === s && T.isXMLDoc(t) || (e = T.propFix[e] || e, o = T.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function(t) {
                            var e = T.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : Ce.test(t.nodeName) || Te.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), y.optSelected || (T.propHooks.selected = {
                get: function(t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null
                },
                set: function(t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                }
            }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                T.propFix[this.toLowerCase()] = this
            }), T.fn.extend({
                addClass: function(e) {
                    var t, i, n, o, s, a, r, l = 0;
                    if (b(e)) return this.each(function(t) {
                        T(this).addClass(e.call(this, t, _e(this)))
                    });
                    if ((t = ze(e)).length)
                        for (; i = this[l++];)
                            if (o = _e(i), n = 1 === i.nodeType && " " + Se(o) + " ") {
                                for (a = 0; s = t[a++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                                o !== (r = Se(n)) && i.setAttribute("class", r)
                            }
                    return this
                },
                removeClass: function(e) {
                    var t, i, n, o, s, a, r, l = 0;
                    if (b(e)) return this.each(function(t) {
                        T(this).removeClass(e.call(this, t, _e(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = ze(e)).length)
                        for (; i = this[l++];)
                            if (o = _e(i), n = 1 === i.nodeType && " " + Se(o) + " ") {
                                for (a = 0; s = t[a++];)
                                    for (; - 1 < n.indexOf(" " + s + " ");) n = n.replace(" " + s + " ", " ");
                                o !== (r = Se(n)) && i.setAttribute("class", r)
                            }
                    return this
                },
                toggleClass: function(o, e) {
                    var s = li(o),
                        a = "string" === s || Array.isArray(o);
                    return "boolean" == typeof e && a ? e ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function(t) {
                        T(this).toggleClass(o.call(this, t, _e(this), e), e)
                    }) : this.each(function() {
                        var t, e, i, n;
                        if (a)
                            for (e = 0, i = T(this), n = ze(o); t = n[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else void 0 !== o && "boolean" !== s || ((t = _e(this)) && G.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === o ? "" : G.get(this, "__className__") || ""))
                    })
                },
                hasClass: function(t) {
                    var e, i, n = 0;
                    for (e = " " + t + " "; i = this[n++];)
                        if (1 === i.nodeType && -1 < (" " + Se(_e(i)) + " ").indexOf(e)) return !0;
                    return !1
                }
            });
            var Ae = /\r/g;
            T.fn.extend({
                val: function(i) {
                    var n, t, o, e = this[0];
                    return arguments.length ? (o = b(i), this.each(function(t) {
                        var e;
                        1 === this.nodeType && (null == (e = o ? i.call(this, t, T(this).val()) : i) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = T.map(e, function(t) {
                            return null == t ? "" : t + ""
                        })), (n = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
                    })) : e ? (n = T.valHooks[e.type] || T.valHooks[e.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(e, "value")) ? t : "string" == typeof(t = e.value) ? t.replace(Ae, "") : null == t ? "" : t : void 0
                }
            }), T.extend({
                valHooks: {
                    option: {
                        get: function(t) {
                            var e = T.find.attr(t, "value");
                            return null != e ? e : Se(T.text(t))
                        }
                    },
                    select: {
                        get: function(t) {
                            var e, i, n, o = t.options,
                                s = t.selectedIndex,
                                a = "select-one" === t.type,
                                r = a ? null : [],
                                l = a ? s + 1 : o.length;
                            for (n = s < 0 ? l : a ? s : 0; n < l; n++)
                                if (((i = o[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !_(i.parentNode, "optgroup"))) {
                                    if (e = T(i).val(), a) return e;
                                    r.push(e)
                                }
                            return r
                        },
                        set: function(t, e) {
                            for (var i, n, o = t.options, s = T.makeArray(e), a = o.length; a--;)((n = o[a]).selected = -1 < T.inArray(T.valHooks.option.get(n), s)) && (i = !0);
                            return i || (t.selectedIndex = -1), s
                        }
                    }
                }
            }), T.each(["radio", "checkbox"], function() {
                T.valHooks[this] = {
                    set: function(t, e) {
                        if (Array.isArray(e)) return t.checked = -1 < T.inArray(T(t).val(), e)
                    }
                }, y.checkOn || (T.valHooks[this].get = function(t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            }), y.focusin = "onfocusin" in x;

            function Ee(t) {
                t.stopPropagation()
            }
            var Pe = /^(?:focusinfocus|focusoutblur)$/;
            T.extend(T.event, {
                trigger: function(t, e, i, n) {
                    var o, s, a, r, l, c, d, u, h = [i || C],
                        p = v.call(t, "type") ? t.type : t,
                        f = v.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (s = u = a = i = i || C, 3 !== i.nodeType && 8 !== i.nodeType && !Pe.test(p + T.event.triggered) && (-1 < p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), l = p.indexOf(":") < 0 && "on" + p, (t = t[T.expando] ? t : new T.Event(p, "object" === li(t) && t)).isTrigger = n ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : T.makeArray(e, [t]), d = T.event.special[p] || {}, n || !d.trigger || !1 !== d.trigger.apply(i, e))) {
                        if (!n && !d.noBubble && !g(i)) {
                            for (r = d.delegateType || p, Pe.test(r + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), a = s;
                            a === (i.ownerDocument || C) && h.push(a.defaultView || a.parentWindow || x)
                        }
                        for (o = 0;
                             (s = h[o++]) && !t.isPropagationStopped();) u = s, t.type = 1 < o ? r : d.bindType || p, (c = (G.get(s, "events") || {})[t.type] && G.get(s, "handle")) && c.apply(s, e), (c = l && s[l]) && c.apply && U(s) && (t.result = c.apply(s, e), !1 === t.result && t.preventDefault());
                        return t.type = p, n || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(h.pop(), e) || !U(i) || l && b(i[p]) && !g(i) && ((a = i[l]) && (i[l] = null), T.event.triggered = p, t.isPropagationStopped() && u.addEventListener(p, Ee), i[p](), t.isPropagationStopped() && u.removeEventListener(p, Ee), T.event.triggered = void 0, a && (i[l] = a)), t.result
                    }
                },
                simulate: function(t, e, i) {
                    var n = T.extend(new T.Event, i, {
                        type: t,
                        isSimulated: !0
                    });
                    T.event.trigger(n, null, e)
                }
            }), T.fn.extend({
                trigger: function(t, e) {
                    return this.each(function() {
                        T.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function(t, e) {
                    var i = this[0];
                    if (i) return T.event.trigger(t, e, i, !0)
                }
            }), y.focusin || T.each({
                focus: "focusin",
                blur: "focusout"
            }, function(i, n) {
                function o(t) {
                    T.event.simulate(n, t.target, T.event.fix(t))
                }
                T.event.special[n] = {
                    setup: function() {
                        var t = this.ownerDocument || this,
                            e = G.access(t, n);
                        e || t.addEventListener(i, o, !0), G.access(t, n, (e || 0) + 1)
                    },
                    teardown: function() {
                        var t = this.ownerDocument || this,
                            e = G.access(t, n) - 1;
                        e ? G.access(t, n, e) : (t.removeEventListener(i, o, !0), G.remove(t, n))
                    }
                }
            });
            var Oe = x.location,
                Le = Date.now(),
                De = /\?/;
            T.parseXML = function(t) {
                var e;
                if (!t || "string" != typeof t) return null;
                try {
                    e = (new x.DOMParser).parseFromString(t, "text/xml")
                } catch (t) {
                    e = void 0
                }
                return e && !e.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t), e
            };
            var Me = /\[\]$/,
                He = /\r?\n/g,
                Ie = /^(?:submit|button|image|reset|file)$/i,
                Re = /^(?:input|select|textarea|keygen)/i;

            function je(i, t, n, o) {
                var e;
                if (Array.isArray(t)) T.each(t, function(t, e) {
                    n || Me.test(i) ? o(i, e) : je(i + "[" + ("object" === li(e) && null != e ? t : "") + "]", e, n, o)
                });
                else if (n || "object" !== $(t)) o(i, t);
                else
                    for (e in t) je(i + "[" + e + "]", t[e], n, o)
            }
            T.param = function(t, e) {
                function i(t, e) {
                    var i = b(e) ? e() : e;
                    o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
                }
                var n, o = [];
                if (null == t) return "";
                if (Array.isArray(t) || t.jquery && !T.isPlainObject(t)) T.each(t, function() {
                    i(this.name, this.value)
                });
                else
                    for (n in t) je(n, t[n], e, i);
                return o.join("&")
            }, T.fn.extend({
                serialize: function() {
                    return T.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var t = T.prop(this, "elements");
                        return t ? T.makeArray(t) : this
                    }).filter(function() {
                        var t = this.type;
                        return this.name && !T(this).is(":disabled") && Re.test(this.nodeName) && !Ie.test(t) && (this.checked || !ut.test(t))
                    }).map(function(t, e) {
                        var i = T(this).val();
                        return null == i ? null : Array.isArray(i) ? T.map(i, function(t) {
                            return {
                                name: e.name,
                                value: t.replace(He, "\r\n")
                            }
                        }) : {
                            name: e.name,
                            value: i.replace(He, "\r\n")
                        }
                    }).get()
                }
            });
            var qe = /%20/g,
                Fe = /#.*$/,
                Ne = /([?&])_=[^&]*/,
                Be = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                We = /^(?:GET|HEAD)$/,
                Ye = /^\/\//,
                Xe = {},
                Ue = {},
                Ve = "*/".concat("*"),
                Ge = C.createElement("a");

            function Ke(s) {
                return function(t, e) {
                    "string" != typeof t && (e = t, t = "*");
                    var i, n = 0,
                        o = t.toLowerCase().match(M) || [];
                    if (b(e))
                        for (; i = o[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (s[i] = s[i] || []).unshift(e)) : (s[i] = s[i] || []).push(e)
                }
            }

            function Ze(e, o, s, a) {
                var r = {},
                    l = e === Ue;

                function c(t) {
                    var n;
                    return r[t] = !0, T.each(e[t] || [], function(t, e) {
                        var i = e(o, s, a);
                        return "string" != typeof i || l || r[i] ? l ? !(n = i) : void 0 : (o.dataTypes.unshift(i), c(i), !1)
                    }), n
                }
                return c(o.dataTypes[0]) || !r["*"] && c("*")
            }

            function Qe(t, e) {
                var i, n, o = T.ajaxSettings.flatOptions || {};
                for (i in e) void 0 !== e[i] && ((o[i] ? t : n = n || {})[i] = e[i]);
                return n && T.extend(!0, t, n), t
            }
            Ge.href = Oe.href, T.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Oe.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Oe.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ve,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": T.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(t, e) {
                    return e ? Qe(Qe(t, T.ajaxSettings), e) : Qe(T.ajaxSettings, t)
                },
                ajaxPrefilter: Ke(Xe),
                ajaxTransport: Ke(Ue),
                ajax: function(t, e) {
                    "object" === li(t) && (e = t, t = void 0), e = e || {};
                    var d, u, h, i, p, n, f, g, o, s, m = T.ajaxSetup({}, e),
                        v = m.context || m,
                        y = m.context && (v.nodeType || v.jquery) ? T(v) : T.event,
                        b = T.Deferred(),
                        w = T.Callbacks("once memory"),
                        $ = m.statusCode || {},
                        a = {},
                        r = {},
                        l = "canceled",
                        k = {
                            readyState: 0,
                            getResponseHeader: function(t) {
                                var e;
                                if (f) {
                                    if (!i)
                                        for (i = {}; e = Be.exec(h);) i[e[1].toLowerCase() + " "] = (i[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                    e = i[t.toLowerCase() + " "]
                                }
                                return null == e ? null : e.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return f ? h : null
                            },
                            setRequestHeader: function(t, e) {
                                return null == f && (t = r[t.toLowerCase()] = r[t.toLowerCase()] || t, a[t] = e), this
                            },
                            overrideMimeType: function(t) {
                                return null == f && (m.mimeType = t), this
                            },
                            statusCode: function(t) {
                                var e;
                                if (t)
                                    if (f) k.always(t[k.status]);
                                    else
                                        for (e in t) $[e] = [$[e], t[e]];
                                return this
                            },
                            abort: function(t) {
                                var e = t || l;
                                return d && d.abort(e), c(0, e), this
                            }
                        };
                    if (b.promise(k), m.url = ((t || m.url || Oe.href) + "").replace(Ye, Oe.protocol + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(M) || [""], null == m.crossDomain) {
                        n = C.createElement("a");
                        try {
                            n.href = m.url, n.href = n.href, m.crossDomain = Ge.protocol + "//" + Ge.host != n.protocol + "//" + n.host
                        } catch (t) {
                            m.crossDomain = !0
                        }
                    }
                    if (m.data && m.processData && "string" != typeof m.data && (m.data = T.param(m.data, m.traditional)), Ze(Xe, m, e, k), f) return k;
                    for (o in (g = T.event && m.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !We.test(m.type), u = m.url.replace(Fe, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(qe, "+")) : (s = m.url.slice(u.length), m.data && (m.processData || "string" == typeof m.data) && (u += (De.test(u) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (u = u.replace(Ne, "$1"), s = (De.test(u) ? "&" : "?") + "_=" + Le++ + s), m.url = u + s), m.ifModified && (T.lastModified[u] && k.setRequestHeader("If-Modified-Since", T.lastModified[u]), T.etag[u] && k.setRequestHeader("If-None-Match", T.etag[u])), (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && k.setRequestHeader("Content-Type", m.contentType), k.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ve + "; q=0.01" : "") : m.accepts["*"]), m.headers) k.setRequestHeader(o, m.headers[o]);
                    if (m.beforeSend && (!1 === m.beforeSend.call(v, k, m) || f)) return k.abort();
                    if (l = "abort", w.add(m.complete), k.done(m.success), k.fail(m.error), d = Ze(Ue, m, e, k)) {
                        if (k.readyState = 1, g && y.trigger("ajaxSend", [k, m]), f) return k;
                        m.async && 0 < m.timeout && (p = x.setTimeout(function() {
                            k.abort("timeout")
                        }, m.timeout));
                        try {
                            f = !1, d.send(a, c)
                        } catch (t) {
                            if (f) throw t;
                            c(-1, t)
                        }
                    } else c(-1, "No Transport");

                    function c(t, e, i, n) {
                        var o, s, a, r, l, c = e;
                        f || (f = !0, p && x.clearTimeout(p), d = void 0, h = n || "", k.readyState = 0 < t ? 4 : 0, o = 200 <= t && t < 300 || 304 === t, i && (r = function(t, e, i) {
                            for (var n, o, s, a, r = t.contents, l = t.dataTypes;
                                 "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                            if (n)
                                for (o in r)
                                    if (r[o] && r[o].test(n)) {
                                        l.unshift(o);
                                        break
                                    }
                            if (l[0] in i) s = l[0];
                            else {
                                for (o in i) {
                                    if (!l[0] || t.converters[o + " " + l[0]]) {
                                        s = o;
                                        break
                                    }
                                    a = a || o
                                }
                                s = s || a
                            }
                            if (s) return s !== l[0] && l.unshift(s), i[s]
                        }(m, k, i)), r = function(t, e, i, n) {
                            var o, s, a, r, l, c = {},
                                d = t.dataTypes.slice();
                            if (d[1])
                                for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
                            for (s = d.shift(); s;)
                                if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = d.shift())
                                    if ("*" === s) s = l;
                                    else if ("*" !== l && l !== s) {
                                        if (!(a = c[l + " " + s] || c["* " + s]))
                                            for (o in c)
                                                if ((r = o.split(" "))[1] === s && (a = c[l + " " + r[0]] || c["* " + r[0]])) {
                                                    !0 === a ? a = c[o] : !0 !== c[o] && (s = r[0], d.unshift(r[1]));
                                                    break
                                                }
                                        if (!0 !== a)
                                            if (a && t.throws) e = a(e);
                                            else try {
                                                e = a(e)
                                            } catch (t) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? t : "No conversion from " + l + " to " + s
                                                }
                                            }
                                    }
                            return {
                                state: "success",
                                data: e
                            }
                        }(m, r, k, o), o ? (m.ifModified && ((l = k.getResponseHeader("Last-Modified")) && (T.lastModified[u] = l), (l = k.getResponseHeader("etag")) && (T.etag[u] = l)), 204 === t || "HEAD" === m.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = r.state, s = r.data, o = !(a = r.error))) : (a = c, !t && c || (c = "error", t < 0 && (t = 0))), k.status = t, k.statusText = (e || c) + "", o ? b.resolveWith(v, [s, c, k]) : b.rejectWith(v, [k, c, a]), k.statusCode($), $ = void 0, g && y.trigger(o ? "ajaxSuccess" : "ajaxError", [k, m, o ? s : a]), w.fireWith(v, [k, c]), g && (y.trigger("ajaxComplete", [k, m]), --T.active || T.event.trigger("ajaxStop")))
                    }
                    return k
                },
                getJSON: function(t, e, i) {
                    return T.get(t, e, i, "json")
                },
                getScript: function(t, e) {
                    return T.get(t, void 0, e, "script")
                }
            }), T.each(["get", "post"], function(t, o) {
                T[o] = function(t, e, i, n) {
                    return b(e) && (n = n || i, i = e, e = void 0), T.ajax(T.extend({
                        url: t,
                        type: o,
                        dataType: n,
                        data: e,
                        success: i
                    }, T.isPlainObject(t) && t))
                }
            }), T._evalUrl = function(t, e) {
                return T.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(t) {
                        T.globalEval(t, e)
                    }
                })
            }, T.fn.extend({
                wrapAll: function(t) {
                    var e;
                    return this[0] && (b(t) && (t = t.call(this[0])), e = T(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                        return t
                    }).append(this)), this
                },
                wrapInner: function(i) {
                    return b(i) ? this.each(function(t) {
                        T(this).wrapInner(i.call(this, t))
                    }) : this.each(function() {
                        var t = T(this),
                            e = t.contents();
                        e.length ? e.wrapAll(i) : t.append(i)
                    })
                },
                wrap: function(e) {
                    var i = b(e);
                    return this.each(function(t) {
                        T(this).wrapAll(i ? e.call(this, t) : e)
                    })
                },
                unwrap: function(t) {
                    return this.parent(t).not("body").each(function() {
                        T(this).replaceWith(this.childNodes)
                    }), this
                }
            }), T.expr.pseudos.hidden = function(t) {
                return !T.expr.pseudos.visible(t)
            }, T.expr.pseudos.visible = function(t) {
                return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
            }, T.ajaxSettings.xhr = function() {
                try {
                    return new x.XMLHttpRequest
                } catch (t) {}
            };
            var Je = {
                    0: 200,
                    1223: 204
                },
                ti = T.ajaxSettings.xhr();
            y.cors = !!ti && "withCredentials" in ti, y.ajax = ti = !!ti, T.ajaxTransport(function(o) {
                var s, a;
                if (y.cors || ti && !o.crossDomain) return {
                    send: function(t, e) {
                        var i, n = o.xhr();
                        if (n.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                            for (i in o.xhrFields) n[i] = o.xhrFields[i];
                        for (i in o.mimeType && n.overrideMimeType && n.overrideMimeType(o.mimeType), o.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) n.setRequestHeader(i, t[i]);
                        s = function(t) {
                            return function() {
                                s && (s = a = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null, "abort" === t ? n.abort() : "error" === t ? "number" != typeof n.status ? e(0, "error") : e(n.status, n.statusText) : e(Je[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                                    binary: n.response
                                } : {
                                    text: n.responseText
                                }, n.getAllResponseHeaders()))
                            }
                        }, n.onload = s(), a = n.onerror = n.ontimeout = s("error"), void 0 !== n.onabort ? n.onabort = a : n.onreadystatechange = function() {
                            4 === n.readyState && x.setTimeout(function() {
                                s && a()
                            })
                        }, s = s("abort");
                        try {
                            n.send(o.hasContent && o.data || null)
                        } catch (t) {
                            if (s) throw t
                        }
                    },
                    abort: function() {
                        s && s()
                    }
                }
            }), T.ajaxPrefilter(function(t) {
                t.crossDomain && (t.contents.script = !1)
            }), T.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(t) {
                        return T.globalEval(t), t
                    }
                }
            }), T.ajaxPrefilter("script", function(t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
            }), T.ajaxTransport("script", function(i) {
                var n, o;
                if (i.crossDomain || i.scriptAttrs) return {
                    send: function(t, e) {
                        n = T("<script>").attr(i.scriptAttrs || {}).prop({
                            charset: i.scriptCharset,
                            src: i.url
                        }).on("load error", o = function(t) {
                            n.remove(), o = null, t && e("error" === t.type ? 404 : 200, t.type)
                        }), C.head.appendChild(n[0])
                    },
                    abort: function() {
                        o && o()
                    }
                }
            });
            var ei, ii = [],
                ni = /(=)\?(?=&|$)|\?\?/;
            T.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var t = ii.pop() || T.expando + "_" + Le++;
                    return this[t] = !0, t
                }
            }), T.ajaxPrefilter("json jsonp", function(t, e, i) {
                var n, o, s, a = !1 !== t.jsonp && (ni.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && ni.test(t.data) && "data");
                if (a || "jsonp" === t.dataTypes[0]) return n = t.jsonpCallback = b(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(ni, "$1" + n) : !1 !== t.jsonp && (t.url += (De.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function() {
                    return s || T.error(n + " was not called"), s[0]
                }, t.dataTypes[0] = "json", o = x[n], x[n] = function() {
                    s = arguments
                }, i.always(function() {
                    void 0 === o ? T(x).removeProp(n) : x[n] = o, t[n] && (t.jsonpCallback = e.jsonpCallback, ii.push(n)), s && b(o) && o(s[0]), s = o = void 0
                }), "script"
            }), y.createHTMLDocument = ((ei = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === ei.childNodes.length), T.parseHTML = function(t, e, i) {
                return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (y.createHTMLDocument ? ((n = (e = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, e.head.appendChild(n)) : e = C), s = !i && [], (o = z.exec(t)) ? [e.createElement(o[1])] : (o = wt([t], e, s), s && s.length && T(s).remove(), T.merge([], o.childNodes)));
                var n, o, s
            }, T.fn.load = function(t, e, i) {
                var n, o, s, a = this,
                    r = t.indexOf(" ");
                return -1 < r && (n = Se(t.slice(r)), t = t.slice(0, r)), b(e) ? (i = e, e = void 0) : e && "object" === li(e) && (o = "POST"), 0 < a.length && T.ajax({
                    url: t,
                    type: o || "GET",
                    dataType: "html",
                    data: e
                }).done(function(t) {
                    s = arguments, a.html(n ? T("<div>").append(T.parseHTML(t)).find(n) : t)
                }).always(i && function(t, e) {
                    a.each(function() {
                        i.apply(this, s || [t.responseText, e, t])
                    })
                }), this
            }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
                T.fn[e] = function(t) {
                    return this.on(e, t)
                }
            }), T.expr.pseudos.animated = function(e) {
                return T.grep(T.timers, function(t) {
                    return e === t.elem
                }).length
            }, T.offset = {
                setOffset: function(t, e, i) {
                    var n, o, s, a, r, l, c = T.css(t, "position"),
                        d = T(t),
                        u = {};
                    "static" === c && (t.style.position = "relative"), r = d.offset(), s = T.css(t, "top"), l = T.css(t, "left"), o = ("absolute" === c || "fixed" === c) && -1 < (s + l).indexOf("auto") ? (a = (n = d.position()).top, n.left) : (a = parseFloat(s) || 0, parseFloat(l) || 0), b(e) && (e = e.call(t, i, T.extend({}, r))), null != e.top && (u.top = e.top - r.top + a), null != e.left && (u.left = e.left - r.left + o), "using" in e ? e.using.call(t, u) : d.css(u)
                }
            }, T.fn.extend({
                offset: function(e) {
                    if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                        T.offset.setOffset(this, e, t)
                    });
                    var t, i, n = this[0];
                    return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                        top: t.top + i.pageYOffset,
                        left: t.left + i.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0
                },
                position: function() {
                    if (this[0]) {
                        var t, e, i, n = this[0],
                            o = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === T.css(n, "position")) e = n.getBoundingClientRect();
                        else {
                            for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === T.css(t, "position");) t = t.parentNode;
                            t && t !== n && 1 === t.nodeType && ((o = T(t).offset()).top += T.css(t, "borderTopWidth", !0), o.left += T.css(t, "borderLeftWidth", !0))
                        }
                        return {
                            top: e.top - o.top - T.css(n, "marginTop", !0),
                            left: e.left - o.left - T.css(n, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        for (var t = this.offsetParent; t && "static" === T.css(t, "position");) t = t.offsetParent;
                        return t || nt
                    })
                }
            }), T.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(e, o) {
                var s = "pageYOffset" === o;
                T.fn[e] = function(t) {
                    return N(this, function(t, e, i) {
                        var n;
                        if (g(t) ? n = t : 9 === t.nodeType && (n = t.defaultView), void 0 === i) return n ? n[o] : t[e];
                        n ? n.scrollTo(s ? n.pageXOffset : i, s ? i : n.pageYOffset) : t[e] = i
                    }, e, t, arguments.length)
                }
            }), T.each(["top", "left"], function(t, i) {
                T.cssHooks[i] = Kt(y.pixelPosition, function(t, e) {
                    if (e) return e = Gt(t, i), Xt.test(e) ? T(t).position()[i] + "px" : e
                })
            }), T.each({
                Height: "height",
                Width: "width"
            }, function(a, r) {
                T.each({
                    padding: "inner" + a,
                    content: r,
                    "": "outer" + a
                }, function(n, s) {
                    T.fn[s] = function(t, e) {
                        var i = arguments.length && (n || "boolean" != typeof t),
                            o = n || (!0 === t || !0 === e ? "margin" : "border");
                        return N(this, function(t, e, i) {
                            var n;
                            return g(t) ? 0 === s.indexOf("outer") ? t["inner" + a] : t.document.documentElement["client" + a] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + a], n["scroll" + a], t.body["offset" + a], n["offset" + a], n["client" + a])) : void 0 === i ? T.css(t, e, o) : T.style(t, e, i, o)
                        }, r, i ? t : void 0, i)
                    }
                })
            }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, i) {
                T.fn[i] = function(t, e) {
                    return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
                }
            }), T.fn.extend({
                hover: function(t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            }), T.fn.extend({
                bind: function(t, e, i) {
                    return this.on(t, null, e, i)
                },
                unbind: function(t, e) {
                    return this.off(t, null, e)
                },
                delegate: function(t, e, i, n) {
                    return this.on(e, t, i, n)
                },
                undelegate: function(t, e, i) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
                }
            }), T.proxy = function(t, e) {
                var i, n, o;
                if ("string" == typeof e && (i = t[e], e = t, t = i), b(t)) return n = r.call(arguments, 2), (o = function() {
                    return t.apply(e || this, n.concat(r.call(arguments)))
                }).guid = t.guid = t.guid || T.guid++, o
            }, T.holdReady = function(t) {
                t ? T.readyWait++ : T.ready(!0)
            }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = _, T.isFunction = b, T.isWindow = g, T.camelCase = X, T.type = $, T.now = Date.now, T.isNumeric = function(t) {
                var e = T.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            }, void 0 === (ri = function() {
                return T
            }.apply(ci, [])) || (ai.exports = ri);
            var oi = x.jQuery,
                si = x.$;
            return T.noConflict = function(t) {
                return x.$ === T && (x.$ = si), t && x.jQuery === T && (x.jQuery = oi), T
            }, t || (x.jQuery = x.$ = T), T
        })
    }).call(this, e(1)(t))
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e, i) {
    t.exports = i(11)
}, function(t, a, e) {
    (function(t) {
        var e, i, n, o;

        function s(t) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        o = function() {
            return o = {}, i.m = n = [function(t, e) {
                "use strict";
                t.exports = function() {
                    if ("undefined" == typeof document || "undefined" == typeof window) return {
                        ask: function() {
                            return "initial"
                        },
                        element: function() {
                            return null
                        },
                        ignoreKeys: function() {},
                        specificKeys: function() {},
                        registerOnChange: function() {},
                        unRegisterOnChange: function() {}
                    };
                    var e = document.documentElement,
                        i = null,
                        r = "initial",
                        l = r,
                        n = Date.now();
                    try {
                        window.sessionStorage.getItem("what-input") && (r = window.sessionStorage.getItem("what-input")), window.sessionStorage.getItem("what-intent") && (l = window.sessionStorage.getItem("what-intent"))
                    } catch (e) {}
                    var c = ["button", "input", "select", "textarea"],
                        o = [],
                        d = [16, 17, 18, 91, 93],
                        u = [],
                        h = {
                            keydown: "keyboard",
                            keyup: "keyboard",
                            mousedown: "mouse",
                            mousemove: "mouse",
                            MSPointerDown: "pointer",
                            MSPointerMove: "pointer",
                            pointerdown: "pointer",
                            pointermove: "pointer",
                            touchstart: "touch",
                            touchend: "touch"
                        },
                        s = !1,
                        a = {
                            x: null,
                            y: null
                        },
                        p = {
                            2: "touch",
                            3: "touch",
                            4: "mouse"
                        },
                        t = !1;
                    try {
                        var f = Object.defineProperty({}, "passive", {
                            get: function() {
                                t = !0
                            }
                        });
                        window.addEventListener("test", null, f)
                    } catch (e) {}
                    var g, m = function(t) {
                            var e = t.which,
                                i = h[t.type];
                            "pointer" === i && (i = $(t));
                            var n = !u.length && -1 === d.indexOf(e),
                                o = u.length && -1 !== u.indexOf(e),
                                s = "keyboard" === i && e && (n || o) || "mouse" === i || "touch" === i;
                            if (k(i) && (s = !1), s && r !== i) {
                                r = i;
                                try {
                                    window.sessionStorage.setItem("what-input", r)
                                } catch (t) {}
                                v("input")
                            }
                            if (s && l !== i) {
                                var a = document.activeElement;
                                if (a && a.nodeName && (-1 === c.indexOf(a.nodeName.toLowerCase()) || "button" === a.nodeName.toLowerCase() && !S(a, "form"))) {
                                    l = i;
                                    try {
                                        window.sessionStorage.setItem("what-intent", l)
                                    } catch (t) {}
                                    v("intent")
                                }
                            }
                        },
                        v = function(t) {
                            e.setAttribute("data-what" + t, "input" === t ? r : l), C(t)
                        },
                        y = function(t) {
                            var e = h[t.type];
                            if ("pointer" === e && (e = $(t)), T(t), (!s && !k(e) || s && "wheel" === t.type || "mousewheel" === t.type || "DOMMouseScroll" === t.type) && l !== e) {
                                l = e;
                                try {
                                    window.sessionStorage.setItem("what-intent", l)
                                } catch (t) {}
                                v("intent")
                            }
                        },
                        b = function(t) {
                            t.target.nodeName ? (i = t.target.nodeName.toLowerCase(), e.setAttribute("data-whatelement", i), t.target.classList && t.target.classList.length && e.setAttribute("data-whatclasses", t.target.classList.toString().replace(" ", ","))) : w()
                        },
                        w = function() {
                            i = null, e.removeAttribute("data-whatelement"), e.removeAttribute("data-whatclasses")
                        },
                        $ = function(t) {
                            return "number" == typeof t.pointerType ? p[t.pointerType] : "pen" === t.pointerType ? "touch" : t.pointerType
                        },
                        k = function(t) {
                            var e = Date.now(),
                                i = "mouse" === t && "touch" === r && e - n < 200;
                            return n = e, i
                        },
                        x = function() {
                            return "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll"
                        },
                        C = function(t) {
                            for (var e = 0, i = o.length; e < i; e++) o[e].type === t && o[e].fn.call(void 0, "input" === t ? r : l)
                        },
                        T = function(t) {
                            a.x !== t.screenX || a.y !== t.screenY ? (s = !1, a.x = t.screenX, a.y = t.screenY) : s = !0
                        },
                        S = function(t, e) {
                            var i = window.Element.prototype;
                            if (i.matches || (i.matches = i.msMatchesSelector || i.webkitMatchesSelector), i.closest) return t.closest(e);
                            do {
                                if (t.matches(e)) return t;
                                t = t.parentElement || t.parentNode
                            } while (null !== t && 1 === t.nodeType);
                            return null
                        };
                    return "addEventListener" in window && Array.prototype.indexOf && (h[x()] = "mouse", g = !!t && {
                        passive: !0
                    }, window.PointerEvent ? (window.addEventListener("pointerdown", m), window.addEventListener("pointermove", y)) : window.MSPointerEvent ? (window.addEventListener("MSPointerDown", m), window.addEventListener("MSPointerMove", y)) : (window.addEventListener("mousedown", m), window.addEventListener("mousemove", y), "ontouchstart" in window && (window.addEventListener("touchstart", m, g), window.addEventListener("touchend", m))), window.addEventListener(x(), y, g), window.addEventListener("keydown", m), window.addEventListener("keyup", m), window.addEventListener("focusin", b), window.addEventListener("focusout", w), v("input"), v("intent")), {
                        ask: function(t) {
                            return "intent" === t ? l : r
                        },
                        element: function() {
                            return i
                        },
                        ignoreKeys: function(t) {
                            d = t
                        },
                        specificKeys: function(t) {
                            u = t
                        },
                        registerOnChange: function(t, e) {
                            o.push({
                                fn: t,
                                type: e || "input"
                            })
                        },
                        unRegisterOnChange: function(t) {
                            var e = function(t) {
                                for (var e = 0, i = o.length; e < i; e++)
                                    if (o[e].fn === t) return e
                            }(t);
                            !e && 0 !== e || o.splice(e, 1)
                        }
                    }
                }()
            }], i.c = o, i.p = "", i(0);

            function i(t) {
                if (o[t]) return o[t].exports;
                var e = o[t] = {
                    exports: {},
                    id: t,
                    loaded: !1
                };
                return n[t].call(e.exports, e, e.exports, i), e.loaded = !0, e.exports
            }
            var n, o
        }, "object" === s(a) && "object" === s(t) ? t.exports = o() : (i = [], void 0 === (n = "function" == typeof(e = o) ? e.apply(a, i) : e) || (t.exports = n))
    }).call(this, e(1)(t))
}, function(t, e, i) {
    var n, o, s;

    function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }! function() {
        "use strict";
        o = [i(0)], void 0 === (s = "function" == typeof(n = function(c) {
            var o, a = window.Slick;
            (o = 0, a = function(t, e) {
                var i, n = this;
                n.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: c(t),
                    appendDots: c(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(t, e) {
                        return c('<button type="button" data-role="none" role="button" tabindex="0" />').text(e + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = c(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = c(t).data("slick") || {}, n.options = c.extend({}, n.defaults, e, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), n.changeSlide = c.proxy(n.changeSlide, n), n.clickHandler = c.proxy(n.clickHandler, n), n.selectHandler = c.proxy(n.selectHandler, n), n.setPosition = c.proxy(n.setPosition, n), n.swipeHandler = c.proxy(n.swipeHandler, n), n.dragHandler = c.proxy(n.dragHandler, n), n.keyHandler = c.proxy(n.keyHandler, n), n.instanceUid = o++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
            }).prototype.activateADA = function() {
                this.$slideTrack.find(".slick-active").attr({
                    "aria-hidden": "false"
                }).find("a, input, button, select").attr({
                    tabindex: "0"
                })
            }, a.prototype.addSlide = a.prototype.slickAdd = function(t, e, i) {
                var n = this;
                if ("boolean" == typeof e) i = e, e = null;
                else if (e < 0 || e >= n.slideCount) return !1;
                n.unload(), "number" == typeof e ? 0 === e && 0 === n.$slides.length ? c(t).appendTo(n.$slideTrack) : i ? c(t).insertBefore(n.$slides.eq(e)) : c(t).insertAfter(n.$slides.eq(e)) : !0 === i ? c(t).prependTo(n.$slideTrack) : c(t).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(t, e) {
                    c(e).attr("data-slick-index", t)
                }), n.$slidesCache = n.$slides, n.reinit()
            }, a.prototype.animateHeight = function() {
                var t = this;
                if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.animate({
                        height: e
                    }, t.options.speed)
                }
            }, a.prototype.animateSlide = function(t, e) {
                var i = {},
                    n = this;
                n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (t = -t), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
                    left: t
                }, n.options.speed, n.options.easing, e) : n.$slideTrack.animate({
                    top: t
                }, n.options.speed, n.options.easing, e) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), c({
                    animStart: n.currentLeft
                }).animate({
                    animStart: t
                }, {
                    duration: n.options.speed,
                    easing: n.options.easing,
                    step: function(t) {
                        t = Math.ceil(t), !1 === n.options.vertical ? i[n.animType] = "translate(" + t + "px, 0px)" : i[n.animType] = "translate(0px," + t + "px)", n.$slideTrack.css(i)
                    },
                    complete: function() {
                        e && e.call()
                    }
                })) : (n.applyTransition(), t = Math.ceil(t), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + t + "px, 0px)", n.$slideTrack.css(i), e && setTimeout(function() {
                    n.disableTransition(), e.call()
                }, n.options.speed))
            }, a.prototype.getNavTarget = function() {
                var t = this.options.asNavFor;
                return t && null !== t && (t = c(t).not(this.$slider)), t
            }, a.prototype.asNavFor = function(e) {
                var t = this.getNavTarget();
                null !== t && "object" === r(t) && t.each(function() {
                    var t = c(this).slick("getSlick");
                    t.unslicked || t.slideHandler(e, !0)
                })
            }, a.prototype.applyTransition = function(t) {
                var e = this,
                    i = {};
                !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
            }, a.prototype.autoPlay = function() {
                var t = this;
                t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
            }, a.prototype.autoPlayClear = function() {
                this.autoPlayTimer && clearInterval(this.autoPlayTimer)
            }, a.prototype.autoPlayIterator = function() {
                var t = this,
                    e = t.currentSlide + t.options.slidesToScroll;
                t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
            }, a.prototype.buildArrows = function() {
                var t = this;
                !0 === t.options.arrows && (t.$prevArrow = c(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = c(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                    "aria-disabled": "true",
                    tabindex: "-1"
                }))
            }, a.prototype.buildDots = function() {
                var t, e, i = this;
                if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                    for (i.$slider.addClass("slick-dotted"), e = c("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) e.append(c("<li />").append(i.options.customPaging.call(this, i, t)));
                    i.$dots = e.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
                }
            }, a.prototype.buildOut = function() {
                var t = this;
                t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, e) {
                    c(e).attr("data-slick-index", t).data("originalStyling", c(e).attr("style") || "")
                }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? c('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), c("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
            }, a.prototype.buildRows = function() {
                var t, e, i, n, o, s, a, r = this;
                if (n = document.createDocumentFragment(), s = r.$slider.children(), 1 < r.options.rows) {
                    for (a = r.options.slidesPerRow * r.options.rows, o = Math.ceil(s.length / a), t = 0; t < o; t++) {
                        var l = document.createElement("div");
                        for (e = 0; e < r.options.rows; e++) {
                            var c = document.createElement("div");
                            for (i = 0; i < r.options.slidesPerRow; i++) {
                                var d = t * a + (e * r.options.slidesPerRow + i);
                                s.get(d) && c.appendChild(s.get(d))
                            }
                            l.appendChild(c)
                        }
                        n.appendChild(l)
                    }
                    r.$slider.empty().append(n), r.$slider.children().children().children().css({
                        width: 100 / r.options.slidesPerRow + "%",
                        display: "inline-block"
                    })
                }
            }, a.prototype.checkResponsive = function(t, e) {
                var i, n, o, s = this,
                    a = !1,
                    r = s.$slider.width(),
                    l = window.innerWidth || c(window).width();
                if ("window" === s.respondTo ? o = l : "slider" === s.respondTo ? o = r : "min" === s.respondTo && (o = Math.min(l, r)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                    for (i in n = null, s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (n = s.breakpoints[i]) : o > s.breakpoints[i] && (n = s.breakpoints[i]));
                    null !== n ? null !== s.activeBreakpoint ? n === s.activeBreakpoint && !e || (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = n) : (s.activeBreakpoint = n, "unslick" === s.breakpointSettings[n] ? s.unslick(n) : (s.options = c.extend({}, s.originalSettings, s.breakpointSettings[n]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = n) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = n), t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
                }
            }, a.prototype.changeSlide = function(t, e) {
                var i, n, o = this,
                    s = c(t.currentTarget);
                switch (s.is("a") && t.preventDefault(), s.is("li") || (s = s.closest("li")), i = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll, t.data.message) {
                    case "previous":
                        n = 0 == i ? o.options.slidesToScroll : o.options.slidesToShow - i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - n, !1, e);
                        break;
                    case "next":
                        n = 0 == i ? o.options.slidesToScroll : i, o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + n, !1, e);
                        break;
                    case "index":
                        var a = 0 === t.data.index ? 0 : t.data.index || s.index() * o.options.slidesToScroll;
                        o.slideHandler(o.checkNavigable(a), !1, e), s.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }, a.prototype.checkNavigable = function(t) {
                var e, i;
                if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1];
                else
                    for (var n in e) {
                        if (t < e[n]) {
                            t = i;
                            break
                        }
                        i = e[n]
                    }
                return t
            }, a.prototype.cleanUpEvents = function() {
                var t = this;
                t.options.dots && null !== t.$dots && c("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", c.proxy(t.interrupt, t, !0)).off("mouseleave.slick", c.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), c(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().off("click.slick", t.selectHandler), c(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), c(window).off("resize.slick.slick-" + t.instanceUid, t.resize), c("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), c(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), c(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
            }, a.prototype.cleanUpSlideEvents = function() {
                var t = this;
                t.$list.off("mouseenter.slick", c.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", c.proxy(t.interrupt, t, !1))
            }, a.prototype.cleanUpRows = function() {
                var t;
                1 < this.options.rows && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t))
            }, a.prototype.clickHandler = function(t) {
                !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
            }, a.prototype.destroy = function(t) {
                var e = this;
                e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), c(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                    c(this).attr("style", c(this).data("originalStyling"))
                }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), e.unslicked = !0, t || e.$slider.trigger("destroy", [e])
            }, a.prototype.disableTransition = function(t) {
                var e = {};
                e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
            }, a.prototype.fadeSlide = function(t, e) {
                var i = this;
                !1 === i.cssTransitions ? (i.$slides.eq(t).css({
                    zIndex: i.options.zIndex
                }), i.$slides.eq(t).animate({
                    opacity: 1
                }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
                    opacity: 1,
                    zIndex: i.options.zIndex
                }), e && setTimeout(function() {
                    i.disableTransition(t), e.call()
                }, i.options.speed))
            }, a.prototype.fadeSlideOut = function(t) {
                var e = this;
                !1 === e.cssTransitions ? e.$slides.eq(t).animate({
                    opacity: 0,
                    zIndex: e.options.zIndex - 2
                }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                    opacity: 0,
                    zIndex: e.options.zIndex - 2
                }))
            }, a.prototype.filterSlides = a.prototype.slickFilter = function(t) {
                var e = this;
                null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
            }, a.prototype.focusHandler = function() {
                var i = this;
                i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(t) {
                    t.stopImmediatePropagation();
                    var e = c(this);
                    setTimeout(function() {
                        i.options.pauseOnFocus && (i.focussed = e.is(":focus"), i.autoPlay())
                    }, 0)
                })
            }, a.prototype.getCurrent = a.prototype.slickCurrentSlide = function() {
                return this.currentSlide
            }, a.prototype.getDotCount = function() {
                var t = this,
                    e = 0,
                    i = 0,
                    n = 0;
                if (!0 === t.options.infinite)
                    for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                else if (!0 === t.options.centerMode) n = t.slideCount;
                else if (t.options.asNavFor)
                    for (; e < t.slideCount;) ++n, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
                return n - 1
            }, a.prototype.getLeft = function(t) {
                var e, i, n, o = this,
                    s = 0;
                return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, s = i * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && t + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (s = t > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (t - o.slideCount)) * o.slideWidth * -1, (o.options.slidesToShow - (t - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, o.slideCount % o.options.slidesToScroll * i * -1))) : t + o.options.slidesToShow > o.slideCount && (o.slideOffset = (t + o.options.slidesToShow - o.slideCount) * o.slideWidth, s = (t + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (s = o.slideOffset = 0), !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), e = !1 === o.options.vertical ? t * o.slideWidth * -1 + o.slideOffset : t * i * -1 + s, !0 === o.options.variableWidth && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === o.options.centerMode && (n = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(t) : o.$slideTrack.children(".slick-slide").eq(t + o.options.slidesToShow + 1), e = !0 === o.options.rtl ? n[0] ? -1 * (o.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, e += (o.$list.width() - n.outerWidth()) / 2)), e
            }, a.prototype.getOption = a.prototype.slickGetOption = function(t) {
                return this.options[t]
            }, a.prototype.getNavigableIndexes = function() {
                var t, e = this,
                    i = 0,
                    n = 0,
                    o = [];
                for (t = !1 === e.options.infinite ? e.slideCount : (i = -1 * e.options.slidesToScroll, n = -1 * e.options.slidesToScroll, 2 * e.slideCount); i < t;) o.push(i), i = n + e.options.slidesToScroll, n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                return o
            }, a.prototype.getSlick = function() {
                return this
            }, a.prototype.getSlideCount = function() {
                var i, n, o = this;
                return n = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(t, e) {
                    if (e.offsetLeft - n + c(e).outerWidth() / 2 > -1 * o.swipeLeft) return i = e, !1
                }), Math.abs(c(i).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
            }, a.prototype.goTo = a.prototype.slickGoTo = function(t, e) {
                this.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(t)
                    }
                }, e)
            }, a.prototype.init = function(t) {
                var e = this;
                c(e.$slider).hasClass("slick-initialized") || (c(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), t && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA(), e.options.autoplay && (e.paused = !1, e.autoPlay())
            }, a.prototype.initADA = function() {
                var e = this;
                e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({
                    tabindex: "-1"
                }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
                    c(this).attr({
                        role: "option",
                        "aria-describedby": "slick-slide" + e.instanceUid + t
                    })
                }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(t) {
                    c(this).attr({
                        role: "presentation",
                        "aria-selected": "false",
                        "aria-controls": "navigation" + e.instanceUid + t,
                        id: "slick-slide" + e.instanceUid + t
                    })
                }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
            }, a.prototype.initArrowEvents = function() {
                var t = this;
                !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {
                    message: "previous"
                }, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {
                    message: "next"
                }, t.changeSlide))
            }, a.prototype.initDotEvents = function() {
                var t = this;
                !0 === t.options.dots && t.slideCount > t.options.slidesToShow && c("li", t.$dots).on("click.slick", {
                    message: "index"
                }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && c("li", t.$dots).on("mouseenter.slick", c.proxy(t.interrupt, t, !0)).on("mouseleave.slick", c.proxy(t.interrupt, t, !1))
            }, a.prototype.initSlideEvents = function() {
                var t = this;
                t.options.pauseOnHover && (t.$list.on("mouseenter.slick", c.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", c.proxy(t.interrupt, t, !1)))
            }, a.prototype.initializeEvents = function() {
                var t = this;
                t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
                    action: "start"
                }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
                    action: "move"
                }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
                    action: "end"
                }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
                    action: "end"
                }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), c(document).on(t.visibilityChange, c.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), c(window).on("orientationchange.slick.slick-" + t.instanceUid, c.proxy(t.orientationChange, t)), c(window).on("resize.slick.slick-" + t.instanceUid, c.proxy(t.resize, t)), c("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), c(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), c(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
            }, a.prototype.initUI = function() {
                var t = this;
                !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
            }, a.prototype.keyHandler = function(t) {
                var e = this;
                t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                    data: {
                        message: !0 === e.options.rtl ? "next" : "previous"
                    }
                }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
                    data: {
                        message: !0 === e.options.rtl ? "previous" : "next"
                    }
                }))
            }, a.prototype.lazyLoad = function() {
                var t, e, n = this;

                function i(t) {
                    c("img[data-lazy]", t).each(function() {
                        var t = c(this),
                            e = c(this).attr("data-lazy"),
                            i = document.createElement("img");
                        i.onload = function() {
                            t.animate({
                                opacity: 0
                            }, 100, function() {
                                t.attr("src", e).animate({
                                    opacity: 1
                                }, 200, function() {
                                    t.removeAttr("data-lazy").removeClass("slick-loading")
                                }), n.$slider.trigger("lazyLoaded", [n, t, e])
                            })
                        }, i.onerror = function() {
                            t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, t, e])
                        }, i.src = e
                    })
                }!0 === n.options.centerMode ? e = !0 === n.options.infinite ? (t = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (t = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (t = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, e = Math.ceil(t + n.options.slidesToShow), !0 === n.options.fade && (0 < t && t--, e <= n.slideCount && e++)), i(n.$slider.find(".slick-slide").slice(t, e)), n.slideCount <= n.options.slidesToShow ? i(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? i(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && i(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
            }, a.prototype.loadSlider = function() {
                var t = this;
                t.setPosition(), t.$slideTrack.css({
                    opacity: 1
                }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
            }, a.prototype.next = a.prototype.slickNext = function() {
                this.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            }, a.prototype.orientationChange = function() {
                this.checkResponsive(), this.setPosition()
            }, a.prototype.pause = a.prototype.slickPause = function() {
                this.autoPlayClear(), this.paused = !0
            }, a.prototype.play = a.prototype.slickPlay = function() {
                var t = this;
                t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
            }, a.prototype.postSlide = function(t) {
                var e = this;
                e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && e.initADA())
            }, a.prototype.prev = a.prototype.slickPrev = function() {
                this.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            }, a.prototype.preventDefault = function(t) {
                t.preventDefault()
            }, a.prototype.progressiveLazyLoad = function(t) {
                t = t || 1;
                var e, i, n, o = this,
                    s = c("img[data-lazy]", o.$slider);
                s.length ? (e = s.first(), i = e.attr("data-lazy"), (n = document.createElement("img")).onload = function() {
                    e.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === o.options.adaptiveHeight && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, e, i]), o.progressiveLazyLoad()
                }, n.onerror = function() {
                    t < 3 ? setTimeout(function() {
                        o.progressiveLazyLoad(t + 1)
                    }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, i]), o.progressiveLazyLoad())
                }, n.src = i) : o.$slider.trigger("allImagesLoaded", [o])
            }, a.prototype.refresh = function(t) {
                var e, i, n = this;
                i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), e = n.currentSlide, n.destroy(!0), c.extend(n, n.initials, {
                    currentSlide: e
                }), n.init(), t || n.changeSlide({
                    data: {
                        message: "index",
                        index: e
                    }
                }, !1)
            }, a.prototype.registerBreakpoints = function() {
                var t, e, i, n = this,
                    o = n.options.responsive || null;
                if ("array" === c.type(o) && o.length) {
                    for (t in n.respondTo = n.options.respondTo || "window", o)
                        if (i = n.breakpoints.length - 1, e = o[t].breakpoint, o.hasOwnProperty(t)) {
                            for (; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === e && n.breakpoints.splice(i, 1), i--;
                            n.breakpoints.push(e), n.breakpointSettings[e] = o[t].settings
                        }
                    n.breakpoints.sort(function(t, e) {
                        return n.options.mobileFirst ? t - e : e - t
                    })
                }
            }, a.prototype.reinit = function() {
                var t = this;
                t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
            }, a.prototype.resize = function() {
                var t = this;
                c(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
                    t.windowWidth = c(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
                }, 50))
            }, a.prototype.removeSlide = a.prototype.slickRemove = function(t, e, i) {
                var n = this;
                if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : n.slideCount - 1 : !0 === e ? --t : t, n.slideCount < 1 || t < 0 || t > n.slideCount - 1) return !1;
                n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
            }, a.prototype.setCSS = function(t) {
                var e, i, n = this,
                    o = {};
                !0 === n.options.rtl && (t = -t), e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px", o[n.positionProp] = t, !1 === n.transformsEnabled || (!(o = {}) === n.cssTransitions ? o[n.animType] = "translate(" + e + ", " + i + ")" : o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)"), n.$slideTrack.css(o)
            }, a.prototype.setDimensions = function() {
                var t = this;
                !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
                    padding: "0px " + t.options.centerPadding
                }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
                    padding: t.options.centerPadding + " 0px"
                })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
                var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
                !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
            }, a.prototype.setFade = function() {
                var i, n = this;
                n.$slides.each(function(t, e) {
                    i = n.slideWidth * t * -1, !0 === n.options.rtl ? c(e).css({
                        position: "relative",
                        right: i,
                        top: 0,
                        zIndex: n.options.zIndex - 2,
                        opacity: 0
                    }) : c(e).css({
                        position: "relative",
                        left: i,
                        top: 0,
                        zIndex: n.options.zIndex - 2,
                        opacity: 0
                    })
                }), n.$slides.eq(n.currentSlide).css({
                    zIndex: n.options.zIndex - 1,
                    opacity: 1
                })
            }, a.prototype.setHeight = function() {
                var t = this;
                if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                    var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                    t.$list.css("height", e)
                }
            }, a.prototype.setOption = a.prototype.slickSetOption = function() {
                var t, e, i, n, o, s = this,
                    a = !1;
                if ("object" === c.type(arguments[0]) ? (i = arguments[0], a = arguments[1], o = "multiple") : "string" === c.type(arguments[0]) && (n = arguments[1], a = arguments[2], "responsive" === (i = arguments[0]) && "array" === c.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) s.options[i] = n;
                else if ("multiple" === o) c.each(i, function(t, e) {
                    s.options[t] = e
                });
                else if ("responsive" === o)
                    for (e in n)
                        if ("array" !== c.type(s.options.responsive)) s.options.responsive = [n[e]];
                        else {
                            for (t = s.options.responsive.length - 1; 0 <= t;) s.options.responsive[t].breakpoint === n[e].breakpoint && s.options.responsive.splice(t, 1), t--;
                            s.options.responsive.push(n[e])
                        }
                a && (s.unload(), s.reinit())
            }, a.prototype.setPosition = function() {
                var t = this;
                t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
            }, a.prototype.setProps = function() {
                var t = this,
                    e = document.body.style;
                t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
            }, a.prototype.setSlideClasses = function(t) {
                var e, i, n, o, s = this;
                i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode ? (e = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e <= t && t <= s.slideCount - 1 - e ? s.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + t, i.slice(n - e + 1, n + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(t).addClass("slick-center")) : 0 <= t && t <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(t, t + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + t : t, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
            }, a.prototype.setupInfinite = function() {
                var t, e, i, n = this;
                if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (e = null, n.slideCount > n.options.slidesToShow)) {
                    for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, t = n.slideCount; t > n.slideCount - i; t -= 1) e = t - 1, c(n.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
                    for (t = 0; t < i; t += 1) e = t, c(n.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
                    n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                        c(this).attr("id", "")
                    })
                }
            }, a.prototype.interrupt = function(t) {
                t || this.autoPlay(), this.interrupted = t
            }, a.prototype.selectHandler = function(t) {
                var e = this,
                    i = c(t.target).is(".slick-slide") ? c(t.target) : c(t.target).parents(".slick-slide"),
                    n = parseInt(i.attr("data-slick-index"));
                if (n = n || 0, e.slideCount <= e.options.slidesToShow) return e.setSlideClasses(n), void e.asNavFor(n);
                e.slideHandler(n)
            }, a.prototype.slideHandler = function(t, e, i) {
                var n, o, s, a, r, l, c = this;
                if (e = e || !1, (!0 !== c.animating || !0 !== c.options.waitForAnimate) && !(!0 === c.options.fade && c.currentSlide === t || c.slideCount <= c.options.slidesToShow))
                    if (!1 === e && c.asNavFor(t), n = t, r = c.getLeft(n), a = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? a : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(a, function() {
                        c.postSlide(n)
                    }) : c.postSlide(n));
                    else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(a, function() {
                        c.postSlide(n)
                    }) : c.postSlide(n));
                    else {
                        if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(o, function() {
                            c.postSlide(o)
                        })) : c.postSlide(o), void c.animateHeight();
                        !0 !== i ? c.animateSlide(r, function() {
                            c.postSlide(o)
                        }) : c.postSlide(o)
                    }
            }, a.prototype.startLoad = function() {
                var t = this;
                !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
            }, a.prototype.swipeDirection = function() {
                var t, e, i, n, o = this;
                return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === o.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
            }, a.prototype.swipeEnd = function(t) {
                var e, i, n = this;
                if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
                if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                    switch (i = n.swipeDirection()) {
                        case "left":
                        case "down":
                            e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                            break;
                        case "right":
                        case "up":
                            e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
                    }
                    "vertical" != i && (n.slideHandler(e), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
                } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
            }, a.prototype.swipeHandler = function(t) {
                var e = this;
                if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                    case "start":
                        e.swipeStart(t);
                        break;
                    case "move":
                        e.swipeMove(t);
                        break;
                    case "end":
                        e.swipeEnd(t)
                }
            }, a.prototype.swipeMove = function(t) {
                var e, i, n, o, s, a = this;
                return s = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!a.dragging || s && 1 !== s.length) && (e = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), !0 === a.options.verticalSwiping && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))), "vertical" !== (i = a.swipeDirection()) ? (void 0 !== t.originalEvent && 4 < a.touchObject.swipeLength && t.preventDefault(), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = e + n * o : a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))) : void 0)
            }, a.prototype.swipeStart = function(t) {
                var e, i = this;
                if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return !(i.touchObject = {});
                void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
            }, a.prototype.unfilterSlides = a.prototype.slickUnfilter = function() {
                var t = this;
                null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
            }, a.prototype.unload = function() {
                var t = this;
                c(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
            }, a.prototype.unslick = function(t) {
                this.$slider.trigger("unslick", [this, t]), this.destroy()
            }, a.prototype.updateArrows = function() {
                var t = this;
                Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
            }, a.prototype.updateDots = function() {
                var t = this;
                null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
            }, a.prototype.visibility = function() {
                this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
            }, c.fn.slick = function() {
                var t, e, i = this,
                    n = arguments[0],
                    o = Array.prototype.slice.call(arguments, 1),
                    s = i.length;
                for (t = 0; t < s; t++)
                    if ("object" == r(n) || void 0 === n ? i[t].slick = new a(i[t], n) : e = i[t].slick[n].apply(i[t].slick, o), void 0 !== e) return e;
                return i
            }
        }) ? n.apply(e, o) : n) || (t.exports = s)
    }()
}, function(t, e) {
    ! function(l, u, g) {
        "use strict";
        if (l.console = l.console || {
            info: function(t) {}
        }, g)
            if (g.fn.fancybox) console.info("fancyBox already initialized");
            else {
                var t, e, i = {
                        closeExisting: !1,
                        loop: !1,
                        gutter: 50,
                        keyboard: !0,
                        preventCaptionOverlap: !0,
                        arrows: !0,
                        infobar: !0,
                        smallBtn: "auto",
                        toolbar: "auto",
                        buttons: ["zoom", "slideShow", "thumbs", "close"],
                        idleTime: 3,
                        protect: !1,
                        modal: !1,
                        image: {
                            preload: !1
                        },
                        ajax: {
                            settings: {
                                data: {
                                    fancybox: !0
                                }
                            }
                        },
                        iframe: {
                            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                            preload: !0,
                            css: {},
                            attr: {
                                scrolling: "auto"
                            }
                        },
                        video: {
                            tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                            format: "",
                            autoStart: !0
                        },
                        defaultType: "image",
                        animationEffect: "zoom",
                        animationDuration: 366,
                        zoomOpacity: "auto",
                        transitionEffect: "fade",
                        transitionDuration: 366,
                        slideClass: "",
                        baseClass: "",
                        baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                        spinnerTpl: '<div class="fancybox-loading"></div>',
                        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                        btnTpl: {
                            download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                            close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                            arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                            arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                        },
                        parentEl: "body",
                        hideScrollbar: !0,
                        autoFocus: !0,
                        backFocus: !0,
                        trapFocus: !0,
                        fullScreen: {
                            autoStart: !1
                        },
                        touch: {
                            vertical: !0,
                            momentum: !0
                        },
                        hash: null,
                        media: {},
                        slideShow: {
                            autoStart: !1,
                            speed: 3e3
                        },
                        thumbs: {
                            autoStart: !1,
                            hideOnClose: !0,
                            parentEl: ".fancybox-container",
                            axis: "y"
                        },
                        wheel: "auto",
                        onInit: g.noop,
                        beforeLoad: g.noop,
                        afterLoad: g.noop,
                        beforeShow: g.noop,
                        afterShow: g.noop,
                        beforeClose: g.noop,
                        afterClose: g.noop,
                        onActivate: g.noop,
                        onDeactivate: g.noop,
                        clickContent: function(t, e) {
                            return "image" === t.type && "zoom"
                        },
                        clickSlide: "close",
                        clickOutside: "close",
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1,
                        mobile: {
                            preventCaptionOverlap: !1,
                            idleTime: !1,
                            clickContent: function(t, e) {
                                return "image" === t.type && "toggleControls"
                            },
                            clickSlide: function(t, e) {
                                return "image" === t.type ? "toggleControls" : "close"
                            },
                            dblclickContent: function(t, e) {
                                return "image" === t.type && "zoom"
                            },
                            dblclickSlide: function(t, e) {
                                return "image" === t.type && "zoom"
                            }
                        },
                        lang: "en",
                        i18n: {
                            en: {
                                CLOSE: "Close",
                                NEXT: "Next",
                                PREV: "Previous",
                                ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                                PLAY_START: "Start slideshow",
                                PLAY_STOP: "Pause slideshow",
                                FULL_SCREEN: "Full screen",
                                THUMBS: "Thumbnails",
                                DOWNLOAD: "Download",
                                SHARE: "Share",
                                ZOOM: "Zoom"
                            },
                            de: {
                                CLOSE: "Schlie&szlig;en",
                                NEXT: "Weiter",
                                PREV: "Zur&uuml;ck",
                                ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                                PLAY_START: "Diaschau starten",
                                PLAY_STOP: "Diaschau beenden",
                                FULL_SCREEN: "Vollbild",
                                THUMBS: "Vorschaubilder",
                                DOWNLOAD: "Herunterladen",
                                SHARE: "Teilen",
                                ZOOM: "Vergr&ouml;&szlig;ern"
                            }
                        }
                    },
                    o = g(l),
                    a = g(u),
                    n = 0,
                    h = l.requestAnimationFrame || l.webkitRequestAnimationFrame || l.mozRequestAnimationFrame || l.oRequestAnimationFrame || function(t) {
                        return l.setTimeout(t, 1e3 / 60)
                    },
                    s = l.cancelAnimationFrame || l.webkitCancelAnimationFrame || l.mozCancelAnimationFrame || l.oCancelAnimationFrame || function(t) {
                        l.clearTimeout(t)
                    },
                    c = function() {
                        var t, e = u.createElement("fakeelement"),
                            i = {
                                transition: "transitionend",
                                OTransition: "oTransitionEnd",
                                MozTransition: "transitionend",
                                WebkitTransition: "webkitTransitionEnd"
                            };
                        for (t in i)
                            if (void 0 !== e.style[t]) return i[t];
                        return "transitionend"
                    }(),
                    p = function(t) {
                        return t && t.length && t[0].offsetHeight
                    },
                    d = function(t, e) {
                        var i = g.extend(!0, {}, t, e);
                        return g.each(e, function(t, e) {
                            g.isArray(e) && (i[t] = e)
                        }), i
                    },
                    r = function(t, e, i) {
                        this.opts = d({
                            index: i
                        }, g.fancybox.defaults), g.isPlainObject(e) && (this.opts = d(this.opts, e)), g.fancybox.isMobile && (this.opts = d(this.opts, this.opts.mobile)), this.id = this.opts.id || ++n, this.currIndex = parseInt(this.opts.index, 10) || 0, this.prevIndex = null, this.prevPos = null, this.currPos = 0, this.firstRun = !0, this.group = [], this.slides = {}, this.addContent(t), this.group.length && this.init()
                    };
                g.extend(r.prototype, {
                    init: function() {
                        var e, i, n = this,
                            o = n.group[n.currIndex].opts;
                        o.closeExisting && g.fancybox.close(!0), g("body").addClass("fancybox-active"), !g.fancybox.getInstance() && !1 !== o.hideScrollbar && !g.fancybox.isMobile && u.body.scrollHeight > l.innerHeight && (g("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (l.innerWidth - u.documentElement.clientWidth) + "px;}</style>"), g("body").addClass("compensate-for-scrollbar")), i = "", g.each(o.buttons, function(t, e) {
                            i += o.btnTpl[e] || ""
                        }), e = g(n.translate(n, o.baseTpl.replace("{{buttons}}", i).replace("{{arrows}}", o.btnTpl.arrowLeft + o.btnTpl.arrowRight))).attr("id", "fancybox-container-" + n.id).addClass(o.baseClass).data("FancyBox", n).appendTo(o.parentEl), n.$refs = {
                            container: e
                        }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                            n.$refs[t] = e.find(".fancybox-" + t)
                        }), n.trigger("onInit"), n.activate(), n.jumpTo(n.currIndex)
                    },
                    translate: function(t, e) {
                        var i = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                        return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                            return void 0 === i[e] ? t : i[e]
                        })
                    },
                    addContent: function(t) {
                        var e, c = this,
                            i = g.makeArray(t);
                        g.each(i, function(t, e) {
                            var i, n, o, s, a, r = {},
                                l = {};
                            g.isPlainObject(e) ? l = (r = e).opts || e : "object" === g.type(e) && g(e).length ? (l = (i = g(e)).data() || {}, (l = g.extend(!0, {}, l, l.options)).$orig = i, r.src = c.opts.src || l.src || i.attr("href"), r.type || r.src || (r.type = "inline", r.src = e)) : r = {
                                type: "html",
                                src: e + ""
                            }, r.opts = g.extend(!0, {}, c.opts, l), g.isArray(l.buttons) && (r.opts.buttons = l.buttons), g.fancybox.isMobile && r.opts.mobile && (r.opts = d(r.opts, r.opts.mobile)), n = r.type || r.opts.type, s = r.src || "", !n && s && ((o = s.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (n = "video", r.opts.video.format || (r.opts.video.format = "video/" + ("ogv" === o[1] ? "ogg" : o[1]))) : s.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? n = "image" : s.match(/\.(pdf)((\?|#).*)?$/i) ? (n = "iframe", r = g.extend(!0, r, {
                                contentType: "pdf",
                                opts: {
                                    iframe: {
                                        preload: !1
                                    }
                                }
                            })) : "#" === s.charAt(0) && (n = "inline")), n ? r.type = n : c.trigger("objectNeedsType", r), r.contentType || (r.contentType = -1 < g.inArray(r.type, ["html", "inline", "ajax"]) ? "html" : r.type), r.index = c.group.length, "auto" == r.opts.smallBtn && (r.opts.smallBtn = -1 < g.inArray(r.type, ["html", "inline", "ajax"])), "auto" === r.opts.toolbar && (r.opts.toolbar = !r.opts.smallBtn), r.$thumb = r.opts.$thumb || null, r.opts.$trigger && r.index === c.opts.index && (r.$thumb = r.opts.$trigger.find("img:first"), r.$thumb.length && (r.opts.$orig = r.opts.$trigger)), r.$thumb && r.$thumb.length || !r.opts.$orig || (r.$thumb = r.opts.$orig.find("img:first")), r.$thumb && !r.$thumb.length && (r.$thumb = null), r.thumb = r.opts.thumb || (r.$thumb ? r.$thumb[0].src : null), "function" === g.type(r.opts.caption) && (r.opts.caption = r.opts.caption.apply(e, [c, r])), "function" === g.type(c.opts.caption) && (r.opts.caption = c.opts.caption.apply(e, [c, r])), r.opts.caption instanceof g || (r.opts.caption = void 0 === r.opts.caption ? "" : r.opts.caption + ""), "ajax" === r.type && 1 < (a = s.split(/\s+/, 2)).length && (r.src = a.shift(), r.opts.filter = a.shift()), r.opts.modal && (r.opts = g.extend(!0, r.opts, {
                                trapFocus: !0,
                                infobar: 0,
                                toolbar: 0,
                                smallBtn: 0,
                                keyboard: 0,
                                slideShow: 0,
                                fullScreen: 0,
                                thumbs: 0,
                                touch: 0,
                                clickContent: !1,
                                clickSlide: !1,
                                clickOutside: !1,
                                dblclickContent: !1,
                                dblclickSlide: !1,
                                dblclickOutside: !1
                            })), c.group.push(r)
                        }), Object.keys(c.slides).length && (c.updateControls(), (e = c.Thumbs) && e.isActive && (e.create(), e.focus()))
                    },
                    addEvents: function() {
                        var n = this;
                        n.removeEvents(), n.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                            t.stopPropagation(), t.preventDefault(), n.close(t)
                        }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) {
                            t.stopPropagation(), t.preventDefault(), n.previous()
                        }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) {
                            t.stopPropagation(), t.preventDefault(), n.next()
                        }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                            n[n.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                        }), o.on("orientationchange.fb resize.fb", function(t) {
                            t && t.originalEvent && "resize" === t.originalEvent.type ? (n.requestId && s(n.requestId), n.requestId = h(function() {
                                n.update(t)
                            })) : (n.current && "iframe" === n.current.type && n.$refs.stage.hide(), setTimeout(function() {
                                n.$refs.stage.show(), n.update(t)
                            }, g.fancybox.isMobile ? 600 : 250))
                        }), a.on("keydown.fb", function(t) {
                            var e = (g.fancybox ? g.fancybox.getInstance() : null).current,
                                i = t.keyCode || t.which;
                            if (9 != i) {
                                if (!(!e.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || g(t.target).is("input,textarea,video,audio,select"))) return 8 === i || 27 === i ? (t.preventDefault(), void n.close(t)) : 37 === i || 38 === i ? (t.preventDefault(), void n.previous()) : 39 === i || 40 === i ? (t.preventDefault(), void n.next()) : void n.trigger("afterKeydown", t, i)
                            } else e.opts.trapFocus && n.focus(t)
                        }), n.group[n.currIndex].opts.idleTime && (n.idleSecondsCounter = 0, a.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                            n.idleSecondsCounter = 0, n.isIdle && n.showControls(), n.isIdle = !1
                        }), n.idleInterval = l.setInterval(function() {
                            n.idleSecondsCounter++, n.idleSecondsCounter >= n.group[n.currIndex].opts.idleTime && !n.isDragging && (n.isIdle = !0, n.idleSecondsCounter = 0, n.hideControls())
                        }, 1e3))
                    },
                    removeEvents: function() {
                        o.off("orientationchange.fb resize.fb"), a.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (l.clearInterval(this.idleInterval), this.idleInterval = null)
                    },
                    previous: function(t) {
                        return this.jumpTo(this.currPos - 1, t)
                    },
                    next: function(t) {
                        return this.jumpTo(this.currPos + 1, t)
                    },
                    jumpTo: function(t, n) {
                        var e, i, o, s, a, r, l, c, d, u = this,
                            h = u.group.length;
                        if (!(u.isDragging || u.isClosing || u.isAnimating && u.firstRun)) {
                            if (t = parseInt(t, 10), !(o = u.current ? u.current.opts.loop : u.opts.loop) && (t < 0 || h <= t)) return !1;
                            if (e = u.firstRun = !Object.keys(u.slides).length, a = u.current, u.prevIndex = u.currIndex, u.prevPos = u.currPos, s = u.createSlide(t), 1 < h && ((o || s.index < h - 1) && u.createSlide(t + 1), (o || 0 < s.index) && u.createSlide(t - 1)), u.current = s, u.currIndex = s.index, u.currPos = s.pos, u.trigger("beforeShow", e), u.updateControls(), s.forcedDuration = void 0, g.isNumeric(n) ? s.forcedDuration = n : n = s.opts[e ? "animationDuration" : "transitionDuration"], n = parseInt(n, 10), i = u.isMoved(s), s.$slide.addClass("fancybox-slide--current"), e) return s.opts.animationEffect && n && u.$refs.container.css("transition-duration", n + "ms"), u.$refs.container.addClass("fancybox-is-open").trigger("focus"), u.loadSlide(s), void u.preload("image");
                            r = g.fancybox.getTranslate(a.$slide), l = g.fancybox.getTranslate(u.$refs.stage), g.each(u.slides, function(t, e) {
                                g.fancybox.stop(e.$slide, !0)
                            }), a.pos !== s.pos && (a.isComplete = !1), a.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), i ? (d = r.left - (a.pos * r.width + a.pos * a.opts.gutter), g.each(u.slides, function(t, e) {
                                e.$slide.removeClass("fancybox-animated").removeClass(function(t, e) {
                                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                                });
                                var i = e.pos * r.width + e.pos * e.opts.gutter;
                                g.fancybox.setTranslate(e.$slide, {
                                    top: 0,
                                    left: i - l.left + d
                                }), e.pos !== s.pos && e.$slide.addClass("fancybox-slide--" + (e.pos > s.pos ? "next" : "previous")), p(e.$slide), g.fancybox.animate(e.$slide, {
                                    top: 0,
                                    left: (e.pos - s.pos) * r.width + (e.pos - s.pos) * e.opts.gutter
                                }, n, function() {
                                    e.$slide.css({
                                        transform: "",
                                        opacity: ""
                                    }).removeClass("fancybox-slide--next fancybox-slide--previous"), e.pos === u.currPos && u.complete()
                                })
                            })) : n && s.opts.transitionEffect && (c = "fancybox-animated fancybox-fx-" + s.opts.transitionEffect, a.$slide.addClass("fancybox-slide--" + (a.pos > s.pos ? "next" : "previous")), g.fancybox.animate(a.$slide, c, n, function() {
                                a.$slide.removeClass(c).removeClass("fancybox-slide--next fancybox-slide--previous")
                            }, !1)), s.isLoaded ? u.revealContent(s) : u.loadSlide(s), u.preload("image")
                        }
                    },
                    createSlide: function(t) {
                        var e, i;
                        return i = (i = t % this.group.length) < 0 ? this.group.length + i : i, !this.slides[t] && this.group[i] && (e = g('<div class="fancybox-slide"></div>').appendTo(this.$refs.stage), this.slides[t] = g.extend(!0, {}, this.group[i], {
                            pos: t,
                            $slide: e,
                            isLoaded: !1
                        }), this.updateSlide(this.slides[t])), this.slides[t]
                    },
                    scaleToActual: function(t, e, i) {
                        var n, o, s, a, r, l = this,
                            c = l.current,
                            d = c.$content,
                            u = g.fancybox.getTranslate(c.$slide).width,
                            h = g.fancybox.getTranslate(c.$slide).height,
                            p = c.width,
                            f = c.height;
                        l.isAnimating || l.isMoved() || !d || "image" != c.type || !c.isLoaded || c.hasError || (l.isAnimating = !0, g.fancybox.stop(d), t = void 0 === t ? .5 * u : t, e = void 0 === e ? .5 * h : e, (n = g.fancybox.getTranslate(d)).top -= g.fancybox.getTranslate(c.$slide).top, n.left -= g.fancybox.getTranslate(c.$slide).left, a = p / n.width, r = f / n.height, o = .5 * u - .5 * p, s = .5 * h - .5 * f, u < p && (0 < (o = n.left * a - (t * a - t)) && (o = 0), o < u - p && (o = u - p)), h < f && (0 < (s = n.top * r - (e * r - e)) && (s = 0), s < h - f && (s = h - f)), l.updateCursor(p, f), g.fancybox.animate(d, {
                            top: s,
                            left: o,
                            scaleX: a,
                            scaleY: r
                        }, i || 366, function() {
                            l.isAnimating = !1
                        }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
                    },
                    scaleToFit: function(t) {
                        var e, i = this,
                            n = i.current,
                            o = n.$content;
                        i.isAnimating || i.isMoved() || !o || "image" != n.type || !n.isLoaded || n.hasError || (i.isAnimating = !0, g.fancybox.stop(o), e = i.getFitPos(n), i.updateCursor(e.width, e.height), g.fancybox.animate(o, {
                            top: e.top,
                            left: e.left,
                            scaleX: e.width / o.width(),
                            scaleY: e.height / o.height()
                        }, t || 366, function() {
                            i.isAnimating = !1
                        }))
                    },
                    getFitPos: function(t) {
                        var e, i, n, o, s = t.$content,
                            a = t.$slide,
                            r = t.width || t.opts.width,
                            l = t.height || t.opts.height,
                            c = {};
                        return !!(t.isLoaded && s && s.length) && (e = g.fancybox.getTranslate(this.$refs.stage).width, i = g.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) + parseFloat(s.css("marginLeft")) + parseFloat(s.css("marginRight")), i -= parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + parseFloat(s.css("marginTop")) + parseFloat(s.css("marginBottom")), r && l || (r = e, l = i), (r *= n = Math.min(1, e / r, i / l)) > e - .5 && (r = e), (l *= n) > i - .5 && (l = i), "image" === t.type ? (c.top = Math.floor(.5 * (i - l)) + parseFloat(a.css("paddingTop")), c.left = Math.floor(.5 * (e - r)) + parseFloat(a.css("paddingLeft"))) : "video" === t.contentType && (l > r / (o = t.opts.width && t.opts.height ? r / l : t.opts.ratio || 16 / 9) ? l = r / o : l * o < r && (r = l * o)), c.width = r, c.height = l, c)
                    },
                    update: function(i) {
                        var n = this;
                        g.each(n.slides, function(t, e) {
                            n.updateSlide(e, i)
                        })
                    },
                    updateSlide: function(t, e) {
                        var i = t && t.$content,
                            n = t.width || t.opts.width,
                            o = t.height || t.opts.height,
                            s = t.$slide;
                        this.adjustCaption(t), i && (n || o || "video" === t.contentType) && !t.hasError && (g.fancybox.stop(i), g.fancybox.setTranslate(i, this.getFitPos(t)), t.pos === this.currPos && (this.isAnimating = !1, this.updateCursor())), this.adjustLayout(t), s.length && (s.trigger("refresh"), t.pos === this.currPos && this.$refs.toolbar.add(this.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", s.get(0).scrollHeight > s.get(0).clientHeight)), this.trigger("onUpdate", t, e)
                    },
                    centerSlide: function(t) {
                        var e = this,
                            i = e.current,
                            n = i.$slide;
                        !e.isClosing && i && (n.siblings().css({
                            transform: "",
                            opacity: ""
                        }), n.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), g.fancybox.animate(n, {
                            top: 0,
                            left: 0,
                            opacity: 1
                        }, void 0 === t ? 0 : t, function() {
                            n.css({
                                transform: "",
                                opacity: ""
                            }), i.isComplete || e.complete()
                        }, !1))
                    },
                    isMoved: function(t) {
                        var e, i, n = t || this.current;
                        return !!n && (i = g.fancybox.getTranslate(this.$refs.stage), e = g.fancybox.getTranslate(n.$slide), !n.$slide.hasClass("fancybox-animated") && (.5 < Math.abs(e.top - i.top) || .5 < Math.abs(e.left - i.left)))
                    },
                    updateCursor: function(t, e) {
                        var i, n, o = this.current,
                            s = this.$refs.container;
                        o && !this.isClosing && this.Guestures && (s.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), n = !!(i = this.canPan(t, e)) || this.isZoomable(), s.toggleClass("fancybox-is-zoomable", n), g("[data-fancybox-zoom]").prop("disabled", !n), i ? s.addClass("fancybox-can-pan") : n && ("zoom" === o.opts.clickContent || g.isFunction(o.opts.clickContent) && "zoom" == o.opts.clickContent(o)) ? s.addClass("fancybox-can-zoomIn") : o.opts.touch && (o.opts.touch.vertical || 1 < this.group.length) && "video" !== o.contentType && s.addClass("fancybox-can-swipe"))
                    },
                    isZoomable: function() {
                        var t, e = this.current;
                        if (e && !this.isClosing && "image" === e.type && !e.hasError) {
                            if (!e.isLoaded) return !0;
                            if ((t = this.getFitPos(e)) && (e.width > t.width || e.height > t.height)) return !0
                        }
                        return !1
                    },
                    isScaledDown: function(t, e) {
                        var i = !1,
                            n = this.current,
                            o = n.$content;
                        return void 0 !== t && void 0 !== e ? i = t < n.width && e < n.height : o && (i = (i = g.fancybox.getTranslate(o)).width < n.width && i.height < n.height), i
                    },
                    canPan: function(t, e) {
                        var i = this.current,
                            n = null,
                            o = !1;
                        return "image" === i.type && (i.isComplete || t && e) && !i.hasError && (o = this.getFitPos(i), void 0 !== t && void 0 !== e ? n = {
                            width: t,
                            height: e
                        } : i.isComplete && (n = g.fancybox.getTranslate(i.$content)), n && o && (o = 1.5 < Math.abs(n.width - o.width) || 1.5 < Math.abs(n.height - o.height))), o
                    },
                    loadSlide: function(i) {
                        var t, e, n, o = this;
                        if (!i.isLoading && !i.isLoaded) {
                            if (!(i.isLoading = !0) === o.trigger("beforeLoad", i)) return i.isLoading = !1;
                            switch (t = i.type, (e = i.$slide).off("refresh").trigger("onReset").addClass(i.opts.slideClass), t) {
                                case "image":
                                    o.setImage(i);
                                    break;
                                case "iframe":
                                    o.setIframe(i);
                                    break;
                                case "html":
                                    o.setContent(i, i.src || i.content);
                                    break;
                                case "video":
                                    o.setContent(i, i.opts.video.tpl.replace(/\{\{src\}\}/gi, i.src).replace("{{format}}", i.opts.videoFormat || i.opts.video.format || "").replace("{{poster}}", i.thumb || ""));
                                    break;
                                case "inline":
                                    g(i.src).length ? o.setContent(i, g(i.src)) : o.setError(i);
                                    break;
                                case "ajax":
                                    o.showLoading(i), n = g.ajax(g.extend({}, i.opts.ajax.settings, {
                                        url: i.src,
                                        success: function(t, e) {
                                            "success" === e && o.setContent(i, t)
                                        },
                                        error: function(t, e) {
                                            t && "abort" !== e && o.setError(i)
                                        }
                                    })), e.one("onReset", function() {
                                        n.abort()
                                    });
                                    break;
                                default:
                                    o.setError(i)
                            }
                            return !0
                        }
                    },
                    setImage: function(e) {
                        var t, i = this;
                        setTimeout(function() {
                            var t = e.$image;
                            i.isClosing || !e.isLoading || t && t.length && t[0].complete || e.hasError || i.showLoading(e)
                        }, 50), i.checkSrcset(e), e.$content = g('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")), !1 !== e.opts.preload && e.opts.width && e.opts.height && e.thumb && (e.width = e.opts.width, e.height = e.opts.height, (t = u.createElement("img")).onerror = function() {
                            g(this).remove(), e.$ghost = null
                        }, t.onload = function() {
                            i.afterLoad(e)
                        }, e.$ghost = g(t).addClass("fancybox-image").appendTo(e.$content).attr("src", e.thumb)), i.setBigImage(e)
                    },
                    checkSrcset: function(t) {
                        var e, i, n, o, s = t.opts.srcset || t.opts.image.srcset;
                        if (s) {
                            n = l.devicePixelRatio || 1, o = l.innerWidth * n, (i = s.split(",").map(function(t) {
                                var n = {};
                                return t.trim().split(/\s+/).forEach(function(t, e) {
                                    var i = parseInt(t.substring(0, t.length - 1), 10);
                                    if (0 === e) return n.url = t;
                                    i && (n.value = i, n.postfix = t[t.length - 1])
                                }), n
                            })).sort(function(t, e) {
                                return t.value - e.value
                            });
                            for (var a = 0; a < i.length; a++) {
                                var r = i[a];
                                if ("w" === r.postfix && r.value >= o || "x" === r.postfix && r.value >= n) {
                                    e = r;
                                    break
                                }
                            }!e && i.length && (e = i[i.length - 1]), e && (t.src = e.url, t.width && t.height && "w" == e.postfix && (t.height = t.width / t.height * e.value, t.width = e.value), t.opts.srcset = s)
                        }
                    },
                    setBigImage: function(e) {
                        var i = this,
                            t = u.createElement("img"),
                            n = g(t);
                        e.$image = n.one("error", function() {
                            i.setError(e)
                        }).one("load", function() {
                            var t;
                            e.$ghost || (i.resolveImageSlideSize(e, this.naturalWidth, this.naturalHeight), i.afterLoad(e)), i.isClosing || (e.opts.srcset && ((t = e.opts.sizes) && "auto" !== t || (t = (1 < e.width / e.height && 1 < o.width() / o.height() ? "100" : Math.round(e.width / e.height * 100)) + "vw"), n.attr("sizes", t).attr("srcset", e.opts.srcset)), e.$ghost && setTimeout(function() {
                                e.$ghost && !i.isClosing && e.$ghost.hide()
                            }, Math.min(300, Math.max(1e3, e.height / 1600))), i.hideLoading(e))
                        }).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content), (t.complete || "complete" == t.readyState) && n.naturalWidth && n.naturalHeight ? n.trigger("load") : t.error && n.trigger("error")
                    },
                    resolveImageSlideSize: function(t, e, i) {
                        var n = parseInt(t.opts.width, 10),
                            o = parseInt(t.opts.height, 10);
                        t.width = e, t.height = i, 0 < n && (t.width = n, t.height = Math.floor(n * i / e)), 0 < o && (t.width = Math.floor(o * e / i), t.height = o)
                    },
                    setIframe: function(o) {
                        var s, e = this,
                            a = o.opts.iframe,
                            r = o.$slide;
                        o.$content = g('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(r), r.addClass("fancybox-slide--" + o.contentType), o.$iframe = s = g(a.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(a.attr).appendTo(o.$content), a.preload ? (e.showLoading(o), s.on("load.fb error.fb", function(t) {
                            this.isReady = 1, o.$slide.trigger("refresh"), e.afterLoad(o)
                        }), r.on("refresh.fb", function() {
                            var t, e = o.$content,
                                i = a.css.width,
                                n = a.css.height;
                            if (1 === s[0].isReady) {
                                try {
                                    t = s.contents().find("body")
                                } catch (t) {}
                                t && t.length && t.children().length && (r.css("overflow", "visible"), e.css({
                                    width: "100%",
                                    "max-width": "100%",
                                    height: "9999px"
                                }), void 0 === i && (i = Math.ceil(Math.max(t[0].clientWidth, t.outerWidth(!0)))), e.css("width", i || "").css("max-width", ""), void 0 === n && (n = Math.ceil(Math.max(t[0].clientHeight, t.outerHeight(!0)))), e.css("height", n || ""), r.css("overflow", "auto")), e.removeClass("fancybox-is-hidden")
                            }
                        })) : e.afterLoad(o), s.attr("src", o.src), r.one("onReset", function() {
                            try {
                                g(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                            } catch (t) {}
                            g(this).off("refresh.fb").empty(), o.isLoaded = !1, o.isRevealed = !1
                        })
                    },
                    setContent: function(t, e) {
                        var i;
                        this.isClosing || (this.hideLoading(t), t.$content && g.fancybox.stop(t.$content), t.$slide.empty(), (i = e) && i.hasOwnProperty && i instanceof g && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = g("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === g.type(e) && (e = g("<div>").append(g.trim(e)).contents()), t.opts.filter && (e = g("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                            g(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (g(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                        }), g(e).appendTo(t.$slide), g(e).is("video,audio") && (g(e).addClass("fancybox-video"), g(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || g(e).attr("width"), t.opts.height = t.opts.height || g(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t))
                    },
                    setError: function(t) {
                        t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
                    },
                    showLoading: function(t) {
                        (t = t || this.current) && !t.$spinner && (t.$spinner = g(this.translate(this, this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
                    },
                    hideLoading: function(t) {
                        (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
                    },
                    afterLoad: function(t) {
                        this.isClosing || (t.isLoading = !1, t.isLoaded = !0, this.trigger("afterLoad", t), this.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = g(this.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                            return 2 == t.button && t.preventDefault(), !0
                        }), "image" === t.type && g('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), this.adjustCaption(t), this.adjustLayout(t), t.pos === this.currPos && this.updateCursor(), this.revealContent(t))
                    },
                    adjustCaption: function(t) {
                        var e, i = t || this.current,
                            n = i.opts.caption,
                            o = i.opts.preventCaptionOverlap,
                            s = this.$refs.caption,
                            a = !1;
                        s.toggleClass("fancybox-caption--separate", o), o && n && n.length && (i.pos !== this.currPos ? ((e = s.clone().appendTo(s.parent())).children().eq(0).empty().html(n), a = e.outerHeight(!0), e.empty().remove()) : this.$caption && (a = this.$caption.outerHeight(!0)), i.$slide.css("padding-bottom", a || ""))
                    },
                    adjustLayout: function(t) {
                        var e, i, n, o, s = t || this.current;
                        s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (n = s.$slide[0].style["padding-bottom"], o = s.$slide.css("padding-bottom"), 0 < parseFloat(o) && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (i = o), s.$slide.css("padding-bottom", n))), s.$content.css("margin-bottom", i))
                    },
                    revealContent: function(t) {
                        var e, i, n, o, s = this,
                            a = t.$slide,
                            r = !1,
                            l = !1,
                            c = s.isMoved(t),
                            d = t.isRevealed;
                        return t.isRevealed = !0, e = t.opts[s.firstRun ? "animationEffect" : "transitionEffect"], n = t.opts[s.firstRun ? "animationDuration" : "transitionDuration"], n = parseInt(void 0 === t.forcedDuration ? n : t.forcedDuration, 10), !c && t.pos === s.currPos && n || (e = !1), "zoom" === e && (t.pos === s.currPos && n && "image" === t.type && !t.hasError && (l = s.getThumbPos(t)) ? r = s.getFitPos(t) : e = "fade"), "zoom" === e ? (s.isAnimating = !0, r.scaleX = r.width / l.width, r.scaleY = r.height / l.height, "auto" == (o = t.opts.zoomOpacity) && (o = .1 < Math.abs(t.width / t.height - l.width / l.height)), o && (l.opacity = .1, r.opacity = 1), g.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), l), p(t.$content), void g.fancybox.animate(t.$content, r, n, function() {
                            s.isAnimating = !1, s.complete()
                        })) : (s.updateSlide(t), e ? (g.fancybox.stop(a), i = "fancybox-slide--" + (t.pos >= s.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, a.addClass(i).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), p(a), "image" !== t.type && t.$content.hide().show(0), void g.fancybox.animate(a, "fancybox-slide--current", n, function() {
                            a.removeClass(i).css({
                                transform: "",
                                opacity: ""
                            }), t.pos === s.currPos && s.complete()
                        }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), d || !c || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void(t.pos === s.currPos && s.complete())))
                    },
                    getThumbPos: function(t) {
                        var e, i, n, o, s, a, r, l, c, d = t.$thumb;
                        return !(!d || (!(r = d[0]) || r.ownerDocument !== u || (g(".fancybox-container").css("pointer-events", "none"), l = {
                            x: r.getBoundingClientRect().left + r.offsetWidth / 2,
                            y: r.getBoundingClientRect().top + r.offsetHeight / 2
                        }, c = u.elementFromPoint(l.x, l.y) === r, g(".fancybox-container").css("pointer-events", ""), !c))) && (i = g.fancybox.getTranslate(d), n = parseFloat(d.css("border-top-width") || 0), o = parseFloat(d.css("border-right-width") || 0), s = parseFloat(d.css("border-bottom-width") || 0), a = parseFloat(d.css("border-left-width") || 0), e = {
                            top: i.top + n,
                            left: i.left + a,
                            width: i.width - o - a,
                            height: i.height - n - s,
                            scaleX: 1,
                            scaleY: 1
                        }, 0 < i.width && 0 < i.height && e)
                    },
                    complete: function() {
                        var t, i = this,
                            e = i.current,
                            n = {};
                        !i.isMoved() && e.isLoaded && (e.isComplete || (e.isComplete = !0, e.$slide.siblings().trigger("onReset"), i.preload("inline"), p(e.$slide), e.$slide.addClass("fancybox-slide--complete"), g.each(i.slides, function(t, e) {
                            e.pos >= i.currPos - 1 && e.pos <= i.currPos + 1 ? n[e.pos] = e : e && (g.fancybox.stop(e.$slide), e.$slide.off().remove())
                        }), i.slides = n), i.isAnimating = !1, i.updateCursor(), i.trigger("afterShow"), e.opts.video.autoStart && e.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                            Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), i.next()
                        }), e.opts.autoFocus && "html" === e.contentType && ((t = e.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : i.focus(null, !0)), e.$slide.scrollTop(0).scrollLeft(0))
                    },
                    preload: function(t) {
                        var e, i;
                        this.group.length < 2 || (i = this.slides[this.currPos + 1], (e = this.slides[this.currPos - 1]) && e.type === t && this.loadSlide(e), i && i.type === t && this.loadSlide(i))
                    },
                    focus: function(t, e) {
                        var i, n, o = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                        this.isClosing || ((i = (i = !t && this.current && this.current.isComplete ? this.current.$slide.find("*:visible" + (e ? ":not(.fancybox-close-small)" : "")) : this.$refs.container.find("*:visible")).filter(o).filter(function() {
                            return "hidden" !== g(this).css("visibility") && !g(this).hasClass("disabled")
                        })).length ? (n = i.index(u.activeElement), t && t.shiftKey ? (n < 0 || 0 == n) && (t.preventDefault(), i.eq(i.length - 1).trigger("focus")) : (n < 0 || n == i.length - 1) && (t && t.preventDefault(), i.eq(0).trigger("focus"))) : this.$refs.container.trigger("focus"))
                    },
                    activate: function() {
                        var e = this;
                        g(".fancybox-container").each(function() {
                            var t = g(this).data("FancyBox");
                            t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
                        }), e.isVisible = !0, (e.current || e.isIdle) && (e.update(), e.updateControls()), e.trigger("onActivate"), e.addEvents()
                    },
                    close: function(t, e) {
                        function i() {
                            d.cleanUp(t)
                        }
                        var n, o, s, a, r, l, c, d = this,
                            u = d.current;
                        return !d.isClosing && (!(d.isClosing = !0) === d.trigger("beforeClose", t) ? (d.isClosing = !1, h(function() {
                            d.update()
                        }), !1) : (d.removeEvents(), s = u.$content, n = u.opts.animationEffect, o = g.isNumeric(e) ? e : n ? u.opts.animationDuration : 0, u.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? g.fancybox.stop(u.$slide) : n = !1, u.$slide.siblings().trigger("onReset").remove(), o && d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"), d.hideLoading(u), d.hideControls(!0), d.updateCursor(), "zoom" !== n || s && o && "image" === u.type && !d.isMoved() && !u.hasError && (c = d.getThumbPos(u)) || (n = "fade"), "zoom" === n ? (g.fancybox.stop(s), l = {
                            top: (a = g.fancybox.getTranslate(s)).top,
                            left: a.left,
                            scaleX: a.width / c.width,
                            scaleY: a.height / c.height,
                            width: c.width,
                            height: c.height
                        }, "auto" == (r = u.opts.zoomOpacity) && (r = .1 < Math.abs(u.width / u.height - c.width / c.height)), r && (c.opacity = 0), g.fancybox.setTranslate(s, l), p(s), g.fancybox.animate(s, c, o, i)) : n && o ? g.fancybox.animate(u.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + n, o, i) : !0 === t ? setTimeout(i, o) : i(), !0))
                    },
                    cleanUp: function(t) {
                        var e, i, n, o = this.current.opts.$orig;
                        this.current.$slide.trigger("onReset"), this.$refs.container.empty().remove(), this.trigger("afterClose", t), this.current.opts.backFocus && (o && o.length && o.is(":visible") || (o = this.$trigger), o && o.length && (i = l.scrollX, n = l.scrollY, o.trigger("focus"), g("html, body").scrollTop(n).scrollLeft(i))), this.current = null, (e = g.fancybox.getInstance()) ? e.activate() : (g("body").removeClass("fancybox-active compensate-for-scrollbar"), g("#fancybox-style-noscroll").remove())
                    },
                    trigger: function(t, e) {
                        var i, n = Array.prototype.slice.call(arguments, 1),
                            o = this,
                            s = e && e.opts ? e : o.current;
                        if (s ? n.unshift(s) : s = o, n.unshift(o), g.isFunction(s.opts[t]) && (i = s.opts[t].apply(s, n)), !1 === i) return i;
                        "afterClose" !== t && o.$refs ? o.$refs.container.trigger(t + ".fb", n) : a.trigger(t + ".fb", n)
                    },
                    updateControls: function() {
                        var t = this.current,
                            e = t.index,
                            i = this.$refs.container,
                            n = this.$refs.caption,
                            o = t.opts.caption;
                        t.$slide.trigger("refresh"), o && o.length ? (this.$caption = n).children().eq(0).html(o) : this.$caption = null, this.hasHiddenControls || this.isIdle || this.showControls(), i.find("[data-fancybox-count]").html(this.group.length), i.find("[data-fancybox-index]").html(e + 1), i.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && e <= 0), i.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && e >= this.group.length - 1), "image" === t.type ? i.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", t.opts.image.src || t.src).show() : t.opts.toolbar && i.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), g(u.activeElement).is(":hidden,[disabled]") && this.$refs.container.trigger("focus")
                    },
                    hideControls: function(t) {
                        var e = ["infobar", "toolbar", "nav"];
                        !t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map(function(t) {
                            return "fancybox-show-" + t
                        }).join(" ")), this.hasHiddenControls = !0
                    },
                    showControls: function() {
                        var t = this.current ? this.current.opts : this.opts,
                            e = this.$refs.container;
                        this.hasHiddenControls = !1, this.idleSecondsCounter = 0, e.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && 1 < this.group.length)).toggleClass("fancybox-show-caption", !!this.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && 1 < this.group.length)).toggleClass("fancybox-is-modal", !!t.modal)
                    },
                    toggleControls: function() {
                        this.hasHiddenControls ? this.showControls() : this.hideControls()
                    }
                }), g.fancybox = {
                    version: "3.5.7",
                    defaults: i,
                    getInstance: function(t) {
                        var e = g('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                            i = Array.prototype.slice.call(arguments, 1);
                        return e instanceof r && ("string" === g.type(t) ? e[t].apply(e, i) : "function" === g.type(t) && t.apply(e, i), e)
                    },
                    open: function(t, e, i) {
                        return new r(t, e, i)
                    },
                    close: function(t) {
                        var e = this.getInstance();
                        e && (e.close(), !0 === t && this.close(t))
                    },
                    destroy: function() {
                        this.close(!0), a.add("body").off("click.fb-start", "**")
                    },
                    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                    use3d: (t = u.createElement("div"), l.getComputedStyle && l.getComputedStyle(t) && l.getComputedStyle(t).getPropertyValue("transform") && !(u.documentMode && u.documentMode < 11)),
                    getTranslate: function(t) {
                        var e;
                        return !(!t || !t.length) && {
                            top: (e = t[0].getBoundingClientRect()).top || 0,
                            left: e.left || 0,
                            width: e.width,
                            height: e.height,
                            opacity: parseFloat(t.css("opacity"))
                        }
                    },
                    setTranslate: function(t, e) {
                        var i = "",
                            n = {};
                        if (t && e) return void 0 === e.left && void 0 === e.top || (i = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? i += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (i += " scaleX(" + e.scaleX + ")"), i.length && (n.transform = i), void 0 !== e.opacity && (n.opacity = e.opacity), void 0 !== e.width && (n.width = e.width), void 0 !== e.height && (n.height = e.height), t.css(n)
                    },
                    animate: function(e, i, n, o, s) {
                        var a, r = this;
                        g.isFunction(n) && (o = n, n = null), r.stop(e), a = r.getTranslate(e), e.on(c, function(t) {
                            t && t.originalEvent && (!e.is(t.originalEvent.target) || "z-index" == t.originalEvent.propertyName) || (r.stop(e), g.isNumeric(n) && e.css("transition-duration", ""), g.isPlainObject(i) ? void 0 !== i.scaleX && void 0 !== i.scaleY && r.setTranslate(e, {
                                top: i.top,
                                left: i.left,
                                width: a.width * i.scaleX,
                                height: a.height * i.scaleY,
                                scaleX: 1,
                                scaleY: 1
                            }) : !0 !== s && e.removeClass(i), g.isFunction(o) && o(t))
                        }), g.isNumeric(n) && e.css("transition-duration", n + "ms"), g.isPlainObject(i) ? (void 0 !== i.scaleX && void 0 !== i.scaleY && (delete i.width, delete i.height, e.parent().hasClass("fancybox-slide--image") && e.parent().addClass("fancybox-is-scaling")), g.fancybox.setTranslate(e, i)) : e.addClass(i), e.data("timer", setTimeout(function() {
                            e.trigger(c)
                        }, n + 33))
                    },
                    stop: function(t, e) {
                        t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(c), t.off(c).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
                    }
                }, g.fn.fancybox = function(t) {
                    var e;
                    return (e = (t = t || {}).selector || !1) ? g("body").off("click.fb-start", e).on("click.fb-start", e, {
                        options: t
                    }, f) : this.off("click.fb-start").on("click.fb-start", {
                        items: this,
                        options: t
                    }, f), this
                }, a.on("click.fb-start", "[data-fancybox]", f), a.on("click.fb-start", "[data-fancybox-trigger]", function(t) {
                    g('[data-fancybox="' + g(this).attr("data-fancybox-trigger") + '"]').eq(g(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                        $trigger: g(this)
                    })
                }), e = null, a.on("mousedown mouseup focus blur", ".fancybox-button", function(t) {
                    switch (t.type) {
                        case "mousedown":
                            e = g(this);
                            break;
                        case "mouseup":
                            e = null;
                            break;
                        case "focusin":
                            g(".fancybox-button").removeClass("fancybox-focus"), g(this).is(e) || g(this).is("[disabled]") || g(this).addClass("fancybox-focus");
                            break;
                        case "focusout":
                            g(".fancybox-button").removeClass("fancybox-focus")
                    }
                })
            }
        function f(t, e) {
            var i, n, o, s = [],
                a = 0;
            t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = d(t.data.options, e)), i = e.$target || g(t.currentTarget).trigger("blur"), (o = g.fancybox.getInstance()) && o.$trigger && o.$trigger.is(i) || (s = e.selector ? g(e.selector) : (n = i.attr("data-fancybox") || "") ? (s = t.data ? t.data.items : []).length ? s.filter('[data-fancybox="' + n + '"]') : g('[data-fancybox="' + n + '"]') : [i], (a = g(s).index(i)) < 0 && (a = 0), (o = g.fancybox.open(s, e, a)).$trigger = i))
        }
    }(window, document, jQuery),
        function(p) {
            "use strict";

            function f(i, t, e) {
                if (i) return e = e || "", "object" === p.type(e) && (e = p.param(e, !0)), p.each(t, function(t, e) {
                    i = i.replace("$" + t, e || "")
                }), e.length && (i += (0 < i.indexOf("?") ? "&" : "?") + e), i
            }
            var n = {
                youtube: {
                    matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                    params: {
                        autoplay: 1,
                        autohide: 1,
                        fs: 1,
                        rel: 0,
                        hd: 1,
                        wmode: "transparent",
                        enablejsapi: 1,
                        html5: 1
                    },
                    paramPlace: 8,
                    type: "iframe",
                    url: "https://www.youtube-nocookie.com/embed/$4",
                    thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
                },
                vimeo: {
                    matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                    params: {
                        autoplay: 1,
                        hd: 1,
                        show_title: 1,
                        show_byline: 1,
                        show_portrait: 0,
                        fullscreen: 1
                    },
                    paramPlace: 3,
                    type: "iframe",
                    url: "//player.vimeo.com/video/$2"
                },
                instagram: {
                    matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                    type: "image",
                    url: "//$1/p/$2/media/?size=l"
                },
                gmap_place: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                    type: "iframe",
                    url: function(t) {
                        return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && 0 < t[12].indexOf("layer=c") ? "svembed" : "embed")
                    }
                },
                gmap_search: {
                    matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                    type: "iframe",
                    url: function(t) {
                        return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                    }
                }
            };
            p(document).on("objectNeedsType.fb", function(t, e, o) {
                var i, s, a, r, l, c, d, u = o.src || "",
                    h = !1;
                i = p.extend(!0, {}, n, o.opts.media), p.each(i, function(t, e) {
                    if (a = u.match(e.matcher)) {
                        if (h = e.type, d = t, c = {}, e.paramPlace && a[e.paramPlace]) {
                            "?" == (l = a[e.paramPlace])[0] && (l = l.substring(1)), l = l.split("&");
                            for (var i = 0; i < l.length; ++i) {
                                var n = l[i].split("=", 2);
                                2 == n.length && (c[n[0]] = decodeURIComponent(n[1].replace(/\+/g, " ")))
                            }
                        }
                        return r = p.extend(!0, {}, e.params, o.opts[t], c), u = "function" === p.type(e.url) ? e.url.call(this, a, r, o) : f(e.url, a, r), s = "function" === p.type(e.thumb) ? e.thumb.call(this, a, r, o) : f(e.thumb, a), "youtube" === t ? u = u.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, i, n) {
                            return "&start=" + ((i ? 60 * parseInt(i, 10) : 0) + parseInt(n, 10))
                        }) : "vimeo" === t && (u = u.replace("&%23", "#")), !1
                    }
                }), h ? (o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = s), "iframe" === h && (o.opts = p.extend(!0, o.opts, {
                    iframe: {
                        preload: !1,
                        attr: {
                            scrolling: "no"
                        }
                    }
                })), p.extend(o, {
                    type: h,
                    src: u,
                    origSrc: o.src,
                    contentSource: d,
                    contentType: "image" === h ? "image" : "gmap_place" == d || "gmap_search" == d ? "map" : "video"
                })) : u && (o.type = o.opts.defaultType)
            });
            var o = {
                youtube: {
                    src: "https://www.youtube.com/iframe_api",
                    class: "YT",
                    loading: !1,
                    loaded: !1
                },
                vimeo: {
                    src: "https://player.vimeo.com/api/player.js",
                    class: "Vimeo",
                    loading: !1,
                    loaded: !1
                },
                load: function(t) {
                    var e, i = this;
                    this[t].loaded ? setTimeout(function() {
                        i.done(t)
                    }) : this[t].loading || (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                        i[t].loaded = !0, i.done(t)
                    } : e.onload = function() {
                        i[t].loaded = !0, i.done(t)
                    }, document.body.appendChild(e))
                },
                done: function(t) {
                    var e, i;
                    "youtube" === t && delete window.onYouTubeIframeAPIReady, (e = p.fancybox.getInstance()) && (i = e.current.$content.find("iframe"), "youtube" === t && void 0 !== YT && YT ? new YT.Player(i.attr("id"), {
                        events: {
                            onStateChange: function(t) {
                                0 == t.data && e.next()
                            }
                        }
                    }) : "vimeo" === t && void 0 !== Vimeo && Vimeo && new Vimeo.Player(i).on("ended", function() {
                        e.next()
                    }))
                }
            };
            p(document).on({
                "afterShow.fb": function(t, e, i) {
                    1 < e.group.length && ("youtube" === i.contentSource || "vimeo" === i.contentSource) && o.load(i.contentSource)
                }
            })
        }(jQuery),
        function(g, r, m) {
            "use strict";

            function d(t) {
                var e = [];
                for (var i in t = (t = t.originalEvent || t || g.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t]) t[i].pageX ? e.push({
                    x: t[i].pageX,
                    y: t[i].pageY
                }) : t[i].clientX && e.push({
                    x: t[i].clientX,
                    y: t[i].clientY
                });
                return e
            }

            function v(t, e, i) {
                return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
            }

            function l(t) {
                if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || m.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
                for (var e = 0, i = t[0].attributes, n = i.length; e < n; e++)
                    if ("data-fancybox-" === i[e].nodeName.substr(0, 14)) return !0;
                return !1
            }

            function c(t) {
                for (var e, i, n, o, s, a = !1; e = t.get(0), void 0, i = g.getComputedStyle(e)["overflow-y"], n = g.getComputedStyle(e)["overflow-x"], o = ("scroll" === i || "auto" === i) && e.scrollHeight > e.clientHeight, s = ("scroll" === n || "auto" === n) && e.scrollWidth > e.clientWidth, !(a = o || s) && (t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body"););
                return a
            }

            function i(t) {
                this.instance = t, this.$bg = t.$refs.bg, this.$stage = t.$refs.stage, this.$container = t.$refs.container, this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", m.proxy(this, "ontouchstart"))
            }
            var y = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.oRequestAnimationFrame || function(t) {
                    return g.setTimeout(t, 1e3 / 60)
                },
                b = g.cancelAnimationFrame || g.webkitCancelAnimationFrame || g.mozCancelAnimationFrame || g.oCancelAnimationFrame || function(t) {
                    g.clearTimeout(t)
                };
            i.prototype.destroy = function() {
                this.$container.off(".fb.touch"), m(r).off(".fb.touch"), this.requestId && (b(this.requestId), this.requestId = null), this.tapped && (clearTimeout(this.tapped), this.tapped = null)
            }, i.prototype.ontouchstart = function(t) {
                var e = m(t.target),
                    i = this.instance,
                    n = i.current,
                    o = n.$slide,
                    s = n.$content,
                    a = "touchstart" == t.type;
                if (a && this.$container.off("mousedown.fb.touch"), (!t.originalEvent || 2 != t.originalEvent.button) && o.length && e.length && !l(e) && !l(e.parent()) && (e.is("img") || !(t.originalEvent.clientX > e[0].clientWidth + e.offset().left))) {
                    if (!n || i.isAnimating || n.$slide.hasClass("fancybox-animated")) return t.stopPropagation(), void t.preventDefault();
                    this.realPoints = this.startPoints = d(t), this.startPoints.length && (n.touch && t.stopPropagation(), this.startEvent = t, this.canTap = !0, this.$target = e, this.$content = s, this.opts = n.opts.touch, this.isPanning = !1, this.isSwiping = !1, this.isZooming = !1, this.isScrolling = !1, this.canPan = i.canPan(), this.startTime = (new Date).getTime(), this.distanceX = this.distanceY = this.distance = 0, this.canvasWidth = Math.round(o[0].clientWidth), this.canvasHeight = Math.round(o[0].clientHeight), this.contentLastPos = null, this.contentStartPos = m.fancybox.getTranslate(this.$content) || {
                        top: 0,
                        left: 0
                    }, this.sliderStartPos = m.fancybox.getTranslate(o), this.stagePos = m.fancybox.getTranslate(i.$refs.stage), this.sliderStartPos.top -= this.stagePos.top, this.sliderStartPos.left -= this.stagePos.left, this.contentStartPos.top -= this.stagePos.top, this.contentStartPos.left -= this.stagePos.left, m(r).off(".fb.touch").on(a ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", m.proxy(this, "ontouchend")).on(a ? "touchmove.fb.touch" : "mousemove.fb.touch", m.proxy(this, "ontouchmove")), m.fancybox.isMobile && r.addEventListener("scroll", this.onscroll, !0), ((this.opts || this.canPan) && (e.is(this.$stage) || this.$stage.find(e).length) || (e.is(".fancybox-image") && t.preventDefault(), m.fancybox.isMobile && e.parents(".fancybox-caption").length)) && (this.isScrollable = c(e) || c(e.parent()), m.fancybox.isMobile && this.isScrollable || t.preventDefault(), 1 !== this.startPoints.length && !n.hasError || (this.canPan ? (m.fancybox.stop(this.$content), this.isPanning = !0) : this.isSwiping = !0, this.$container.addClass("fancybox-is-grabbing")), 2 === this.startPoints.length && "image" === n.type && (n.isLoaded || n.$ghost) && (this.canTap = !1, this.isSwiping = !1, this.isPanning = !1, this.isZooming = !0, m.fancybox.stop(this.$content), this.centerPointStartX = .5 * (this.startPoints[0].x + this.startPoints[1].x) - m(g).scrollLeft(), this.centerPointStartY = .5 * (this.startPoints[0].y + this.startPoints[1].y) - m(g).scrollTop(), this.percentageOfImageAtPinchPointX = (this.centerPointStartX - this.contentStartPos.left) / this.contentStartPos.width, this.percentageOfImageAtPinchPointY = (this.centerPointStartY - this.contentStartPos.top) / this.contentStartPos.height, this.startDistanceBetweenFingers = v(this.startPoints[0], this.startPoints[1]))))
                }
            }, i.prototype.onscroll = function(t) {
                this.isScrolling = !0, r.removeEventListener("scroll", this.onscroll, !0)
            }, i.prototype.ontouchmove = function(t) {
                void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons ? this.isScrolling ? this.canTap = !1 : (this.newPoints = d(t), (this.opts || this.canPan) && this.newPoints.length && this.newPoints.length && (this.isSwiping && !0 === this.isSwiping || t.preventDefault(), this.distanceX = v(this.newPoints[0], this.startPoints[0], "x"), this.distanceY = v(this.newPoints[0], this.startPoints[0], "y"), this.distance = v(this.newPoints[0], this.startPoints[0]), 0 < this.distance && (this.isSwiping ? this.onSwipe(t) : this.isPanning ? this.onPan() : this.isZooming && this.onZoom()))) : this.ontouchend(t)
            }, i.prototype.onSwipe = function(t) {
                var e, o = this,
                    s = o.instance,
                    i = o.isSwiping,
                    n = o.sliderStartPos.left || 0;
                if (!0 !== i) "x" == i && (0 < o.distanceX && (o.instance.group.length < 2 || 0 === o.instance.current.index && !o.instance.current.opts.loop) ? n += Math.pow(o.distanceX, .8) : o.distanceX < 0 && (o.instance.group.length < 2 || o.instance.current.index === o.instance.group.length - 1 && !o.instance.current.opts.loop) ? n -= Math.pow(-o.distanceX, .8) : n += o.distanceX), o.sliderLastPos = {
                    top: "x" == i ? 0 : o.sliderStartPos.top + o.distanceY,
                    left: n
                }, o.requestId && (b(o.requestId), o.requestId = null), o.requestId = y(function() {
                    o.sliderLastPos && (m.each(o.instance.slides, function(t, e) {
                        var i = e.pos - o.instance.currPos;
                        m.fancybox.setTranslate(e.$slide, {
                            top: o.sliderLastPos.top,
                            left: o.sliderLastPos.left + i * o.canvasWidth + i * e.opts.gutter
                        })
                    }), o.$container.addClass("fancybox-is-sliding"))
                });
                else if (10 < Math.abs(o.distance)) {
                    if (o.canTap = !1, s.group.length < 2 && o.opts.vertical ? o.isSwiping = "y" : s.isDragging || !1 === o.opts.vertical || "auto" === o.opts.vertical && 800 < m(g).width() ? o.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(o.distanceY, o.distanceX) / Math.PI), o.isSwiping = 45 < e && e < 135 ? "y" : "x"), "y" === o.isSwiping && m.fancybox.isMobile && o.isScrollable) return void(o.isScrolling = !0);
                    s.isDragging = o.isSwiping, o.startPoints = o.newPoints, m.each(s.slides, function(t, e) {
                        var i, n;
                        m.fancybox.stop(e.$slide), i = m.fancybox.getTranslate(e.$slide), n = m.fancybox.getTranslate(s.$refs.stage), e.$slide.css({
                            transform: "",
                            opacity: "",
                            "transition-duration": ""
                        }).removeClass("fancybox-animated").removeClass(function(t, e) {
                            return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        }), e.pos === s.current.pos && (o.sliderStartPos.top = i.top - n.top, o.sliderStartPos.left = i.left - n.left), m.fancybox.setTranslate(e.$slide, {
                            top: i.top - n.top,
                            left: i.left - n.left
                        })
                    }), s.SlideShow && s.SlideShow.isActive && s.SlideShow.stop()
                }
            }, i.prototype.onPan = function() {
                var t = this;
                v(t.newPoints[0], t.realPoints[0]) < (m.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && b(t.requestId), t.requestId = y(function() {
                    m.fancybox.setTranslate(t.$content, t.contentLastPos)
                }))
            }, i.prototype.limitMovement = function() {
                var t, e, i, n, o, s, a = this.canvasWidth,
                    r = this.canvasHeight,
                    l = this.distanceX,
                    c = this.distanceY,
                    d = this.contentStartPos,
                    u = d.left,
                    h = d.top,
                    p = d.width,
                    f = d.height;
                return o = a < p ? u + l : u, s = h + c, t = Math.max(0, .5 * a - .5 * p), e = Math.max(0, .5 * r - .5 * f), i = Math.min(a - p, .5 * a - .5 * p), n = Math.min(r - f, .5 * r - .5 * f), 0 < l && t < o && (o = t - 1 + Math.pow(-t + u + l, .8) || 0), l < 0 && o < i && (o = i + 1 - Math.pow(i - u - l, .8) || 0), 0 < c && e < s && (s = e - 1 + Math.pow(-e + h + c, .8) || 0), c < 0 && s < n && (s = n + 1 - Math.pow(n - h - c, .8) || 0), {
                    top: s,
                    left: o
                }
            }, i.prototype.limitPosition = function(t, e, i, n) {
                var o = this.canvasWidth,
                    s = this.canvasHeight;
                return t = o < i ? (t = 0 < t ? 0 : t) < o - i ? o - i : t : Math.max(0, o / 2 - i / 2), {
                    top: e = s < n ? (e = 0 < e ? 0 : e) < s - n ? s - n : e : Math.max(0, s / 2 - n / 2),
                    left: t
                }
            }, i.prototype.onZoom = function() {
                var t = this,
                    e = t.contentStartPos,
                    i = e.width,
                    n = e.height,
                    o = e.left,
                    s = e.top,
                    a = v(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
                    r = Math.floor(i * a),
                    l = Math.floor(n * a),
                    c = (i - r) * t.percentageOfImageAtPinchPointX,
                    d = (n - l) * t.percentageOfImageAtPinchPointY,
                    u = (t.newPoints[0].x + t.newPoints[1].x) / 2 - m(g).scrollLeft(),
                    h = (t.newPoints[0].y + t.newPoints[1].y) / 2 - m(g).scrollTop(),
                    p = u - t.centerPointStartX,
                    f = {
                        top: s + (d + (h - t.centerPointStartY)),
                        left: o + (c + p),
                        scaleX: a,
                        scaleY: a
                    };
                t.canTap = !1, t.newWidth = r, t.newHeight = l, t.contentLastPos = f, t.requestId && b(t.requestId), t.requestId = y(function() {
                    m.fancybox.setTranslate(t.$content, t.contentLastPos)
                })
            }, i.prototype.ontouchend = function(t) {
                var e = this.isSwiping,
                    i = this.isPanning,
                    n = this.isZooming,
                    o = this.isScrolling;
                if (this.endPoints = d(t), this.dMs = Math.max((new Date).getTime() - this.startTime, 1), this.$container.removeClass("fancybox-is-grabbing"), m(r).off(".fb.touch"), r.removeEventListener("scroll", this.onscroll, !0), this.requestId && (b(this.requestId), this.requestId = null), this.isSwiping = !1, this.isPanning = !1, this.isZooming = !1, this.isScrolling = !1, this.instance.isDragging = !1, this.canTap) return this.onTap(t);
                this.speed = 100, this.velocityX = this.distanceX / this.dMs * .5, this.velocityY = this.distanceY / this.dMs * .5, i ? this.endPanning() : n ? this.endZooming() : this.endSwiping(e, o)
            }, i.prototype.endSwiping = function(t, e) {
                var i = !1,
                    n = this.instance.group.length,
                    o = Math.abs(this.distanceX),
                    s = "x" == t && 1 < n && (130 < this.dMs && 10 < o || 50 < o);
                this.sliderLastPos = null, "y" == t && !e && 50 < Math.abs(this.distanceY) ? (m.fancybox.animate(this.instance.current.$slide, {
                    top: this.sliderStartPos.top + this.distanceY + 150 * this.velocityY,
                    opacity: 0
                }, 200), i = this.instance.close(!0, 250)) : s && 0 < this.distanceX ? i = this.instance.previous(300) : s && this.distanceX < 0 && (i = this.instance.next(300)), !1 !== i || "x" != t && "y" != t || this.instance.centerSlide(200), this.$container.removeClass("fancybox-is-sliding")
            }, i.prototype.endPanning = function() {
                var t, e, i;
                this.contentLastPos && (e = !1 === this.opts.momentum || 350 < this.dMs ? (t = this.contentLastPos.left, this.contentLastPos.top) : (t = this.contentLastPos.left + 500 * this.velocityX, this.contentLastPos.top + 500 * this.velocityY), (i = this.limitPosition(t, e, this.contentStartPos.width, this.contentStartPos.height)).width = this.contentStartPos.width, i.height = this.contentStartPos.height, m.fancybox.animate(this.$content, i, 366))
            }, i.prototype.endZooming = function() {
                var t, e, i, n, o = this.instance.current,
                    s = this.newWidth,
                    a = this.newHeight;
                this.contentLastPos && (t = this.contentLastPos.left, n = {
                    top: e = this.contentLastPos.top,
                    left: t,
                    width: s,
                    height: a,
                    scaleX: 1,
                    scaleY: 1
                }, m.fancybox.setTranslate(this.$content, n), s < this.canvasWidth && a < this.canvasHeight ? this.instance.scaleToFit(150) : s > o.width || a > o.height ? this.instance.scaleToActual(this.centerPointStartX, this.centerPointStartY, 150) : (i = this.limitPosition(t, e, s, a), m.fancybox.animate(this.$content, i, 150)))
            }, i.prototype.onTap = function(i) {
                function t(t) {
                    var e = a.opts[t];
                    if (m.isFunction(e) && (e = e.apply(s, [a, i])), e) switch (e) {
                        case "close":
                            s.close(n.startEvent);
                            break;
                        case "toggleControls":
                            s.toggleControls();
                            break;
                        case "next":
                            s.next();
                            break;
                        case "nextOrClose":
                            1 < s.group.length ? s.next() : s.close(n.startEvent);
                            break;
                        case "zoom":
                            "image" == a.type && (a.isLoaded || a.$ghost) && (s.canPan() ? s.scaleToFit() : s.isScaledDown() ? s.scaleToActual(l, c) : s.group.length < 2 && s.close(n.startEvent))
                    }
                }
                var e, n = this,
                    o = m(i.target),
                    s = n.instance,
                    a = s.current,
                    r = i && d(i) || n.startPoints,
                    l = r[0] ? r[0].x - m(g).scrollLeft() - n.stagePos.left : 0,
                    c = r[0] ? r[0].y - m(g).scrollTop() - n.stagePos.top : 0;
                if ((!i.originalEvent || 2 != i.originalEvent.button) && (o.is("img") || !(l > o[0].clientWidth + o.offset().left))) {
                    if (o.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) e = "Outside";
                    else if (o.is(".fancybox-slide")) e = "Slide";
                    else {
                        if (!s.current.$content || !s.current.$content.find(o).addBack().filter(o).length) return;
                        e = "Content"
                    }
                    if (n.tapped) {
                        if (clearTimeout(n.tapped), n.tapped = null, 50 < Math.abs(l - n.tapX) || 50 < Math.abs(c - n.tapY)) return this;
                        t("dblclick" + e)
                    } else n.tapX = l, n.tapY = c, a.opts["dblclick" + e] && a.opts["dblclick" + e] !== a.opts["click" + e] ? n.tapped = setTimeout(function() {
                        n.tapped = null, s.isAnimating || t("click" + e)
                    }, 500) : t("click" + e);
                    return this
                }
            }, m(r).on("onActivate.fb", function(t, e) {
                e && !e.Guestures && (e.Guestures = new i(e))
            }).on("beforeClose.fb", function(t, e) {
                e && e.Guestures && e.Guestures.destroy()
            })
        }(window, document, jQuery),
        function(a, r) {
            "use strict";
            r.extend(!0, r.fancybox.defaults, {
                btnTpl: {
                    slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
                },
                slideShow: {
                    autoStart: !1,
                    speed: 3e3,
                    progress: !0
                }
            });

            function i(t) {
                this.instance = t, this.init()
            }
            r.extend(i.prototype, {
                timer: null,
                isActive: !1,
                $button: null,
                init: function() {
                    var t = this,
                        e = t.instance,
                        i = e.group[e.currIndex].opts.slideShow;
                    t.$button = e.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                        t.toggle()
                    }), e.group.length < 2 || !i ? t.$button.hide() : i.progress && (t.$progress = r('<div class="fancybox-progress"></div>').appendTo(e.$refs.inner))
                },
                set: function(t) {
                    var e = this.instance,
                        i = e.current;
                    i && (!0 === t || i.opts.loop || e.currIndex < e.group.length - 1) ? this.isActive && "video" !== i.contentType && (this.$progress && r.fancybox.animate(this.$progress.show(), {
                        scaleX: 1
                    }, i.opts.slideShow.speed), this.timer = setTimeout(function() {
                        e.current.opts.loop || e.current.index != e.group.length - 1 ? e.next() : e.jumpTo(0)
                    }, i.opts.slideShow.speed)) : (this.stop(), e.idleSecondsCounter = 0, e.showControls())
                },
                clear: function() {
                    clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide()
                },
                start: function() {
                    var t = this.instance.current;
                    t && (this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.isActive = !0, t.isComplete && this.set(!0), this.instance.trigger("onSlideShowChange", !0))
                },
                stop: function() {
                    var t = this.instance.current;
                    this.clear(), this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1, this.instance.trigger("onSlideShowChange", !1), this.$progress && this.$progress.removeAttr("style").hide()
                },
                toggle: function() {
                    this.isActive ? this.stop() : this.start()
                }
            }), r(a).on({
                "onInit.fb": function(t, e) {
                    e && !e.SlideShow && (e.SlideShow = new i(e))
                },
                "beforeShow.fb": function(t, e, i, n) {
                    var o = e && e.SlideShow;
                    n ? o && i.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
                },
                "afterShow.fb": function(t, e, i) {
                    var n = e && e.SlideShow;
                    n && n.isActive && n.set()
                },
                "afterKeydown.fb": function(t, e, i, n, o) {
                    var s = e && e.SlideShow;
                    !s || !i.opts.slideShow || 80 !== o && 32 !== o || r(a.activeElement).is("button,a,input") || (n.preventDefault(), s.toggle())
                },
                "beforeClose.fb onDeactivate.fb": function(t, e) {
                    var i = e && e.SlideShow;
                    i && i.stop()
                }
            }), r(a).on("visibilitychange", function() {
                var t = r.fancybox.getInstance(),
                    e = t && t.SlideShow;
                e && e.isActive && (a.hidden ? e.clear() : e.set())
            })
        }(document, jQuery),
        function(s, i) {
            "use strict";
            var n = function() {
                for (var t = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], e = {}, i = 0; i < t.length; i++) {
                    var n = t[i];
                    if (n && n[1] in s) {
                        for (var o = 0; o < n.length; o++) e[t[0][o]] = n[o];
                        return e
                    }
                }
                return !1
            }();
            if (n) {
                var o = {
                    request: function(t) {
                        (t = t || s.documentElement)[n.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
                    },
                    exit: function() {
                        s[n.exitFullscreen]()
                    },
                    toggle: function(t) {
                        t = t || s.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
                    },
                    isFullscreen: function() {
                        return Boolean(s[n.fullscreenElement])
                    },
                    enabled: function() {
                        return Boolean(s[n.fullscreenEnabled])
                    }
                };
                i.extend(!0, i.fancybox.defaults, {
                    btnTpl: {
                        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
                    },
                    fullScreen: {
                        autoStart: !1
                    }
                }), i(s).on(n.fullscreenchange, function() {
                    var t = o.isFullscreen(),
                        e = i.fancybox.getInstance();
                    e && (e.current && "image" === e.current.type && e.isAnimating && (e.isAnimating = !1, e.update(!0, !0, 0), e.isComplete || e.complete()), e.trigger("onFullscreenChange", t), e.$refs.container.toggleClass("fancybox-is-fullscreen", t), e.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
                })
            }
            i(s).on({
                "onInit.fb": function(t, e) {
                    n ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                        t.stopPropagation(), t.preventDefault(), o.toggle()
                    }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(), e.FullScreen = o) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
                },
                "afterKeydown.fb": function(t, e, i, n, o) {
                    e && e.FullScreen && 70 === o && (n.preventDefault(), e.FullScreen.toggle())
                },
                "beforeClose.fb": function(t, e) {
                    e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
                }
            })
        }(document, jQuery),
        function(t, o) {
            "use strict";
            var s = "fancybox-thumbs";
            o.fancybox.defaults = o.extend(!0, {
                btnTpl: {
                    thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                }
            }, o.fancybox.defaults);

            function n(t) {
                this.init(t)
            }
            o.extend(n.prototype, {
                $button: null,
                $grid: null,
                $list: null,
                isVisible: !1,
                isActive: !1,
                init: function(t) {
                    var e = this,
                        i = t.group,
                        n = 0;
                    e.instance = t, e.opts = i[t.currIndex].opts.thumbs, (t.Thumbs = e).$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
                    for (var o = 0, s = i.length; o < s && (i[o].thumb && n++, !(1 < n)); o++);
                    1 < n && e.opts ? (e.$button.removeAttr("style").on("click", function() {
                        e.toggle()
                    }), e.isActive = !0) : e.$button.hide()
                },
                create: function() {
                    var i, t = this.instance,
                        e = this.opts.parentEl,
                        n = [];
                    this.$grid || (this.$grid = o('<div class="' + s + " " + s + "-" + this.opts.axis + '"></div>').appendTo(t.$refs.container.find(e).addBack().filter(e)), this.$grid.on("click", "a", function() {
                        t.jumpTo(o(this).attr("data-index"))
                    })), this.$list || (this.$list = o('<div class="' + s + '__list">').appendTo(this.$grid)), o.each(t.group, function(t, e) {
                        (i = e.thumb) || "image" !== e.type || (i = e.src), n.push('<a href="javascript:;" tabindex="0" data-index="' + t + '"' + (i && i.length ? ' style="background-image:url(' + i + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
                    }), this.$list[0].innerHTML = n.join(""), "x" === this.opts.axis && this.$list.width(parseInt(this.$grid.css("padding-right"), 10) + t.group.length * this.$list.children().eq(0).outerWidth(!0))
                },
                focus: function(t) {
                    var e, i, n = this.$list,
                        o = this.$grid;
                    this.instance.current && (i = (e = n.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === this.opts.axis && (i.top < 0 || i.top > n.height() - e.outerHeight()) ? n.stop().animate({
                        scrollTop: n.scrollTop() + i.top
                    }, t) : "x" === this.opts.axis && (i.left < o.scrollLeft() || i.left > o.scrollLeft() + (o.width() - e.outerWidth())) && n.parent().stop().animate({
                        scrollLeft: i.left
                    }, t))
                },
                update: function() {
                    this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
                },
                hide: function() {
                    this.isVisible = !1, this.update()
                },
                show: function() {
                    this.isVisible = !0, this.update()
                },
                toggle: function() {
                    this.isVisible = !this.isVisible, this.update()
                }
            }), o(t).on({
                "onInit.fb": function(t, e) {
                    var i;
                    e && !e.Thumbs && (i = new n(e)).isActive && !0 === i.opts.autoStart && i.show()
                },
                "beforeShow.fb": function(t, e, i, n) {
                    var o = e && e.Thumbs;
                    o && o.isVisible && o.focus(n ? 0 : 250)
                },
                "afterKeydown.fb": function(t, e, i, n, o) {
                    var s = e && e.Thumbs;
                    s && s.isActive && 71 === o && (n.preventDefault(), s.toggle())
                },
                "beforeClose.fb": function(t, e) {
                    var i = e && e.Thumbs;
                    i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide()
                }
            })
        }(document, jQuery),
        function(t, s) {
            "use strict";
            s.extend(!0, s.fancybox.defaults, {
                btnTpl: {
                    share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
                },
                share: {
                    url: function(t, e) {
                        return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
                    },
                    tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
                }
            }), s(t).on("click", "[data-fancybox-share]", function() {
                var t, e, i, n = s.fancybox.getInstance(),
                    o = n.current || null;
                o && ("function" === s.type(o.opts.share.url) && (t = o.opts.share.url.apply(o, [n, o])), e = o.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === o.type ? encodeURIComponent(o.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, (i = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;",
                    "`": "&#x60;",
                    "=": "&#x3D;"
                }, String(t).replace(/[&<>"'`=\/]/g, function(t) {
                    return i[t]
                }))).replace(/\{\{descr\}\}/g, n.$caption ? encodeURIComponent(n.$caption.text()) : ""), s.fancybox.open({
                    src: n.translate(n, e),
                    type: "html",
                    opts: {
                        touch: !1,
                        animationEffect: !1,
                        afterLoad: function(t, e) {
                            n.$refs.container.one("beforeClose.fb", function() {
                                t.close(null, 0)
                            }), e.$content.find(".fancybox-share__button").click(function() {
                                return window.open(this.href, "Share", "width=550, height=450"), !1
                            })
                        },
                        mobile: {
                            autoFocus: !1
                        }
                    }
                }))
            })
        }(document, jQuery),
        function(s, a, o) {
            "use strict";

            function r() {
                var t = s.location.hash.substr(1),
                    e = t.split("-"),
                    i = 1 < e.length && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || 1;
                return {
                    hash: t,
                    index: i < 1 ? 1 : i,
                    gallery: e.join("-")
                }
            }

            function e(t) {
                "" !== t.gallery && o("[data-fancybox='" + o.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
            }

            function l(t) {
                var e, i;
                return !!t && "" !== (i = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && i
            }
            o.escapeSelector || (o.escapeSelector = function(t) {
                return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                })
            }), o(function() {
                !1 !== o.fancybox.defaults.hash && (o(a).on({
                    "onInit.fb": function(t, e) {
                        var i, n;
                        !1 !== e.group[e.currIndex].opts.hash && (i = r(), (n = l(e)) && i.gallery && n == i.gallery && (e.currIndex = i.index - 1))
                    },
                    "beforeShow.fb": function(t, e, i, n) {
                        var o;
                        i && !1 !== i.opts.hash && (o = l(e)) && (e.currentHash = o + (1 < e.group.length ? "-" + (i.index + 1) : ""), s.location.hash !== "#" + e.currentHash && (n && !e.origHash && (e.origHash = s.location.hash), e.hashTimer && clearTimeout(e.hashTimer), e.hashTimer = setTimeout(function() {
                            "replaceState" in s.history ? (s.history[n ? "pushState" : "replaceState"]({}, a.title, s.location.pathname + s.location.search + "#" + e.currentHash), n && (e.hasCreatedHistory = !0)) : s.location.hash = e.currentHash, e.hashTimer = null
                        }, 300)))
                    },
                    "beforeClose.fb": function(t, e, i) {
                        i && !1 !== i.opts.hash && (clearTimeout(e.hashTimer), e.currentHash && e.hasCreatedHistory ? s.history.back() : e.currentHash && ("replaceState" in s.history ? s.history.replaceState({}, a.title, s.location.pathname + s.location.search + (e.origHash || "")) : s.location.hash = e.origHash), e.currentHash = null)
                    }
                }), o(s).on("hashchange.fb", function() {
                    var t = r(),
                        n = null;
                    o.each(o(".fancybox-container").get().reverse(), function(t, e) {
                        var i = o(e).data("FancyBox");
                        if (i && i.currentHash) return n = i, !1
                    }), n ? n.currentHash === t.gallery + "-" + t.index || 1 === t.index && n.currentHash == t.gallery || (n.currentHash = null, n.close()) : "" !== t.gallery && e(t)
                }), setTimeout(function() {
                    o.fancybox.getInstance() || e(r())
                }, 50))
            })
        }(window, document, jQuery),
        function(t, e) {
            "use strict";
            var o = (new Date).getTime();
            e(t).on({
                "onInit.fb": function(t, n, e) {
                    n.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                        var e = n.current,
                            i = (new Date).getTime();
                        n.group.length < 2 || !1 === e.opts.wheel || "auto" === e.opts.wheel && "image" !== e.type || (t.preventDefault(), t.stopPropagation(), e.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, i - o < 250 || (o = i, n[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
                    })
                }
            })
        }(document, jQuery)
}, function(t, e, i) {
    "use strict";
    i.r(e), i.d(e, "CoreUtils", function() {
        return $
    }), i.d(e, "Core", function() {
        return x
    }), i.d(e, "Foundation", function() {
        return x
    }), i.d(e, "Box", function() {
        return S
    }), i.d(e, "onImagesLoaded", function() {
        return E
    }), i.d(e, "Keyboard", function() {
        return M
    }), i.d(e, "MediaQuery", function() {
        return k
    }), i.d(e, "Motion", function() {
        return R
    }), i.d(e, "Move", function() {
        return j
    }), i.d(e, "Nest", function() {
        return F
    }), i.d(e, "Timer", function() {
        return N
    }), i.d(e, "Touch", function() {
        return U
    }), i.d(e, "Triggers", function() {
        return ot
    }), i.d(e, "Abide", function() {
        return dt
    }), i.d(e, "Accordion", function() {
        return ht
    }), i.d(e, "AccordionMenu", function() {
        return ft
    }), i.d(e, "Drilldown", function() {
        return mt
    }), i.d(e, "Dropdown", function() {
        return Tt
    }), i.d(e, "DropdownMenu", function() {
        return _t
    }), i.d(e, "Equalizer", function() {
        return At
    }), i.d(e, "Interchange", function() {
        return Pt
    }), i.d(e, "Magellan", function() {
        return Mt
    }), i.d(e, "OffCanvas", function() {
        return It
    }), i.d(e, "Orbit", function() {
        return jt
    }), i.d(e, "ResponsiveMenu", function() {
        return Nt
    }), i.d(e, "ResponsiveToggle", function() {
        return Wt
    }), i.d(e, "Reveal", function() {
        return Xt
    }), i.d(e, "Slider", function() {
        return Vt
    }), i.d(e, "SmoothScroll", function() {
        return Lt
    }), i.d(e, "Sticky", function() {
        return Qt
    }), i.d(e, "Tabs", function() {
        return ee
    }), i.d(e, "Toggler", function() {
        return ne
    }), i.d(e, "Tooltip", function() {
        return se
    }), i.d(e, "ResponsiveAccordionTabs", function() {
        return le
    });
    var n = i(0),
        g = i.n(n);

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t) {
        return (a = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function(t) {
            return o(t)
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : o(t)
        })(t)
    }

    function s(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function l(t, e, i) {
        return e && r(t.prototype, e), i && r(t, i), t
    }

    function c(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && u(t, e)
    }

    function d(t) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function h(t, e) {
        return !e || "object" !== o(e) && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function p(t, e, i) {
        return (p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var n = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = d(t)););
                return t
            }(t, e);
            if (n) {
                var o = Object.getOwnPropertyDescriptor(n, e);
                return o.get ? o.get.call(i) : o.value
            }
        })(t, e, i || t)
    }

    function m() {
        return "rtl" === g()("html").attr("dir")
    }

    function f(t, e) {
        return t = t || 6, Math.round(Math.pow(36, t + 1) - Math.random() * Math.pow(36, t)).toString(36).slice(1) + (e ? "-".concat(e) : "")
    }

    function v(t) {
        return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }

    function y(t) {
        var e, i = {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend"
            },
            n = document.createElement("div");
        for (var o in i) void 0 !== n.style[o] && (e = i[o]);
        return e || (e = setTimeout(function() {
            t.triggerHandler("transitionend", [t])
        }, 1), "transitionend")
    }

    function b(t, e) {
        function i() {
            return t.triggerHandler(o)
        }
        var n = "complete" === document.readyState,
            o = (n ? "_didLoad" : "load") + ".zf.util.onLoad";
        return t && (e && t.one(o, e), n ? setTimeout(i) : g()(window).one("load", i)), o
    }

    function w(s) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
            e = t.ignoreLeaveWindow,
            a = void 0 !== e && e,
            i = t.ignoreReappear,
            r = void 0 !== i && i;
        return function(e) {
            for (var t = arguments.length, i = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
            var o = s.bind.apply(s, [this, e].concat(i));
            if (null !== e.relatedTarget) return o();
            setTimeout(function() {
                if (!a && document.hasFocus && !document.hasFocus()) return o();
                r || g()(document).one("mouseenter", function(t) {
                    g()(e.currentTarget).has(t.target).length || (e.relatedTarget = t.target, o())
                })
            }, 0)
        }
    }
    var $ = Object.freeze({
        rtl: m,
        GetYoDigits: f,
        RegExpEscape: v,
        transitionend: y,
        onLoad: b,
        ignoreMousedisappear: w
    });
    window.matchMedia || (window.matchMedia = function() {
        var e = window.styleMedia || window.media;
        if (!e) {
            var i, n = document.createElement("style"),
                t = document.getElementsByTagName("script")[0];
            n.type = "text/css", n.id = "matchmediajs-test", t ? t.parentNode.insertBefore(n, t) : document.head.appendChild(n), i = "getComputedStyle" in window && window.getComputedStyle(n, null) || n.currentStyle, e = {
                matchMedium: function(t) {
                    var e = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                    return n.styleSheet ? n.styleSheet.cssText = e : n.textContent = e, "1px" === i.width
                }
            }
        }
        return function(t) {
            return {
                matches: e.matchMedium(t || "all"),
                media: t || "all"
            }
        }
    }());
    var k = {
            queries: [],
            current: "",
            _init: function() {
                g()("meta.foundation-mq").length || g()('<meta class="foundation-mq">').appendTo(document.head);
                var t, e, i, n = g()(".foundation-mq").css("font-family");
                for (var o in i = void 0, i = {}, t = "string" != typeof(e = n) ? i : (e = e.trim().slice(1, -1)) ? e.split("&").reduce(function(t, e) {
                    var i = e.replace(/\+/g, " ").split("="),
                        n = i[0],
                        o = i[1];
                    return n = decodeURIComponent(n), o = void 0 === o ? null : decodeURIComponent(o), t.hasOwnProperty(n) ? Array.isArray(t[n]) ? t[n].push(o) : t[n] = [t[n], o] : t[n] = o, t
                }, {}) : i) t.hasOwnProperty(o) && this.queries.push({
                    name: o,
                    value: "only screen and (min-width: ".concat(t[o], ")")
                });
                this.current = this._getCurrentSize(), this._watcher()
            },
            atLeast: function(t) {
                var e = this.get(t);
                return !!e && window.matchMedia(e).matches
            },
            is: function(t) {
                return 1 < (t = t.trim().split(" ")).length && "only" === t[1] ? t[0] === this._getCurrentSize() : this.atLeast(t[0])
            },
            get: function(t) {
                for (var e in this.queries)
                    if (this.queries.hasOwnProperty(e)) {
                        var i = this.queries[e];
                        if (t === i.name) return i.value
                    }
                return null
            },
            _getCurrentSize: function() {
                for (var t, e = 0; e < this.queries.length; e++) {
                    var i = this.queries[e];
                    window.matchMedia(i.value).matches && (t = i)
                }
                return "object" === a(t) ? t.name : t
            },
            _watcher: function() {
                var i = this;
                g()(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery", function() {
                    var t = i._getCurrentSize(),
                        e = i.current;
                    t !== e && (i.current = t, g()(window).trigger("changed.zf.mediaquery", [t, e]))
                })
            }
        },
        x = {
            version: "6.5.3",
            _plugins: {},
            _uuids: [],
            plugin: function(t, e) {
                var i = e || C(t),
                    n = T(i);
                this._plugins[n] = this[i] = t
            },
            registerPlugin: function(t, e) {
                var i = e ? T(e) : C(t.constructor).toLowerCase();
                t.uuid = f(6, i), t.$element.attr("data-".concat(i)) || t.$element.attr("data-".concat(i), t.uuid), t.$element.data("zfPlugin") || t.$element.data("zfPlugin", t), t.$element.trigger("init.zf.".concat(i)), this._uuids.push(t.uuid)
            },
            unregisterPlugin: function(t) {
                var e = T(C(t.$element.data("zfPlugin").constructor));
                for (var i in this._uuids.splice(this._uuids.indexOf(t.uuid), 1), t.$element.removeAttr("data-".concat(e)).removeData("zfPlugin").trigger("destroyed.zf.".concat(e)), t) t[i] = null
            },
            reInit: function(t) {
                var e = t instanceof g.a;
                try {
                    if (e) t.each(function() {
                        g()(this).data("zfPlugin")._init()
                    });
                    else {
                        var i = a(t),
                            n = this;
                        ({
                            object: function(t) {
                                t.forEach(function(t) {
                                    t = T(t), g()("[data-" + t + "]").foundation("_init")
                                })
                            },
                            string: function() {
                                t = T(t), g()("[data-" + t + "]").foundation("_init")
                            },
                            undefined: function() {
                                this.object(Object.keys(n._plugins))
                            }
                        })[i](t)
                    }
                } catch (t) {
                    console.error(t)
                } finally {
                    return t
                }
            },
            reflow: function(n, t) {
                void 0 === t ? t = Object.keys(this._plugins) : "string" == typeof t && (t = [t]);
                var o = this;
                g.a.each(t, function(t, e) {
                    var i = o._plugins[e];
                    g()(n).find("[data-" + e + "]").addBack("[data-" + e + "]").each(function() {
                        var t = g()(this),
                            o = {};
                        if (t.data("zfPlugin")) console.warn("Tried to initialize " + e + " on an element that already has a Foundation plugin.");
                        else {
                            t.attr("data-options") && t.attr("data-options").split(";").forEach(function(t, e) {
                                var i, n = t.split(":").map(function(t) {
                                    return t.trim()
                                });
                                n[0] && (o[n[0]] = "true" === (i = n[1]) || "false" !== i && (isNaN(1 * i) ? i : parseFloat(i)))
                            });
                            try {
                                t.data("zfPlugin", new i(g()(this), o))
                            } catch (t) {
                                console.error(t)
                            } finally {
                                return
                            }
                        }
                    })
                })
            },
            getFnName: C,
            addToJquery: function(s) {
                return s.fn.foundation = function(i) {
                    var t = a(i),
                        e = s(".no-js");
                    if (e.length && e.removeClass("no-js"), "undefined" === t) k._init(), x.reflow(this);
                    else {
                        if ("string" !== t) throw new TypeError("We're sorry, ".concat(t, " is not a valid parameter. You must use a string representing the method you wish to invoke."));
                        var n = Array.prototype.slice.call(arguments, 1),
                            o = this.data("zfPlugin");
                        if (void 0 === o || void 0 === o[i]) throw new ReferenceError("We're sorry, '" + i + "' is not an available method for " + (o ? C(o) : "this element") + ".");
                        1 === this.length ? o[i].apply(o, n) : this.each(function(t, e) {
                            o[i].apply(s(e).data("zfPlugin"), n)
                        })
                    }
                    return this
                }, s
            }
        };

    function C(t) {
        if (void 0 !== Function.prototype.name) return void 0 === t.prototype ? t.constructor.name : t.prototype.constructor.name;
        var e = /function\s([^(]{1,})\(/.exec(t.toString());
        return e && 1 < e.length ? e[1].trim() : ""
    }

    function T(t) {
        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }
    x.util = {
        throttle: function(i, n) {
            var o = null;
            return function() {
                var t = this,
                    e = arguments;
                null === o && (o = setTimeout(function() {
                    i.apply(t, e), o = null
                }, n))
            }
        }
    }, window.Foundation = x,
        function() {
            Date.now && window.Date.now || (window.Date.now = Date.now = function() {
                return (new Date).getTime()
            });
            for (var t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
                var i = t[e];
                window.requestAnimationFrame = window[i + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                var n = 0;
                window.requestAnimationFrame = function(t) {
                    var e = Date.now(),
                        i = Math.max(n + 16, e);
                    return setTimeout(function() {
                        t(n = i)
                    }, i - e)
                }, window.cancelAnimationFrame = clearTimeout
            }
            window.performance && window.performance.now || (window.performance = {
                start: Date.now(),
                now: function() {
                    return Date.now() - this.start
                }
            })
        }(), Function.prototype.bind || (Function.prototype.bind = function(t) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");

        function e() {}

        function i() {
            return o.apply(this instanceof e ? this : t, n.concat(Array.prototype.slice.call(arguments)))
        }
        var n = Array.prototype.slice.call(arguments, 1),
            o = this;
        return this.prototype && (e.prototype = this.prototype), i.prototype = new e, i
    });
    var S = {
        ImNotTouchingYou: function(t, e, i, n, o) {
            return 0 === _(t, e, i, n, o)
        },
        OverlapArea: _,
        GetDimensions: z,
        GetOffsets: function(t, e, i, n, o, s) {
            switch (console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5"), i) {
                case "top":
                    return m() ? A(t, e, "top", "left", n, o, s) : A(t, e, "top", "right", n, o, s);
                case "bottom":
                    return m() ? A(t, e, "bottom", "left", n, o, s) : A(t, e, "bottom", "right", n, o, s);
                case "center top":
                    return A(t, e, "top", "center", n, o, s);
                case "center bottom":
                    return A(t, e, "bottom", "center", n, o, s);
                case "center left":
                    return A(t, e, "left", "center", n, o, s);
                case "center right":
                    return A(t, e, "right", "center", n, o, s);
                case "left bottom":
                    return A(t, e, "bottom", "left", n, o, s);
                case "right bottom":
                    return A(t, e, "bottom", "right", n, o, s);
                case "center":
                    return {
                        left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2 + o,
                        top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - ($eleDims.height / 2 + n)
                    };
                case "reveal":
                    return {
                        left: ($eleDims.windowDims.width - $eleDims.width) / 2 + o,
                        top: $eleDims.windowDims.offset.top + n
                    };
                case "reveal full":
                    return {
                        left: $eleDims.windowDims.offset.left,
                        top: $eleDims.windowDims.offset.top
                    };
                default:
                    return {
                        left: m() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width - o : $anchorDims.offset.left + o,
                        top: $anchorDims.offset.top + $anchorDims.height + n
                    }
            }
        },
        GetExplicitOffsets: A
    };

    function _(t, e, i, n, o) {
        var s, a, r, l, c = z(t);
        if (e) {
            var d = z(e);
            a = d.height + d.offset.top - (c.offset.top + c.height), s = c.offset.top - d.offset.top, r = c.offset.left - d.offset.left, l = d.width + d.offset.left - (c.offset.left + c.width)
        } else a = c.windowDims.height + c.windowDims.offset.top - (c.offset.top + c.height), s = c.offset.top - c.windowDims.offset.top, r = c.offset.left - c.windowDims.offset.left, l = c.windowDims.width - (c.offset.left + c.width);
        return a = o ? 0 : Math.min(a, 0), s = Math.min(s, 0), r = Math.min(r, 0), l = Math.min(l, 0), i ? r + l : n ? s + a : Math.sqrt(s * s + a * a + r * r + l * l)
    }

    function z(t) {
        if ((t = t.length ? t[0] : t) === window || t === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var e = t.getBoundingClientRect(),
            i = t.parentNode.getBoundingClientRect(),
            n = document.body.getBoundingClientRect(),
            o = window.pageYOffset,
            s = window.pageXOffset;
        return {
            width: e.width,
            height: e.height,
            offset: {
                top: e.top + o,
                left: e.left + s
            },
            parentDims: {
                width: i.width,
                height: i.height,
                offset: {
                    top: i.top + o,
                    left: i.left + s
                }
            },
            windowDims: {
                width: n.width,
                height: n.height,
                offset: {
                    top: o,
                    left: s
                }
            }
        }
    }

    function A(t, e, i, n, o, s, a) {
        var r, l, c = z(t),
            d = e ? z(e) : null;
        switch (i) {
            case "top":
                r = d.offset.top - (c.height + o);
                break;
            case "bottom":
                r = d.offset.top + d.height + o;
                break;
            case "left":
                l = d.offset.left - (c.width + s);
                break;
            case "right":
                l = d.offset.left + d.width + s
        }
        switch (i) {
            case "top":
            case "bottom":
                switch (n) {
                    case "left":
                        l = d.offset.left + s;
                        break;
                    case "right":
                        l = d.offset.left - c.width + d.width - s;
                        break;
                    case "center":
                        l = a ? s : d.offset.left + d.width / 2 - c.width / 2 + s
                }
                break;
            case "right":
            case "left":
                switch (n) {
                    case "bottom":
                        r = d.offset.top - o + d.height - c.height;
                        break;
                    case "top":
                        r = d.offset.top + o;
                        break;
                    case "center":
                        r = d.offset.top + o + d.height / 2 - c.height / 2
                }
        }
        return {
            top: r,
            left: l
        }
    }

    function E(t, e) {
        var i = t.length;

        function n() {
            0 == --i && e()
        }
        0 === i && e(), t.each(function() {
            if (this.complete && void 0 !== this.naturalWidth) n();
            else {
                var t = new Image,
                    i = "load.zf.images error.zf.images";
                g()(t).one(i, function t(e) {
                    g()(this).off(i, t), n()
                }), t.src = g()(this).attr("src")
            }
        })
    }
    var P = {
            9: "TAB",
            13: "ENTER",
            27: "ESCAPE",
            32: "SPACE",
            35: "END",
            36: "HOME",
            37: "ARROW_LEFT",
            38: "ARROW_UP",
            39: "ARROW_RIGHT",
            40: "ARROW_DOWN"
        },
        O = {};

    function L(t) {
        return !!t && t.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
            return !(!g()(this).is(":visible") || g()(this).attr("tabindex") < 0)
        })
    }

    function D(t) {
        var e = P[t.which || t.keyCode] || String.fromCharCode(t.which).toUpperCase();
        return e = e.replace(/\W+/, ""), t.shiftKey && (e = "SHIFT_".concat(e)), t.ctrlKey && (e = "CTRL_".concat(e)), t.altKey && (e = "ALT_".concat(e)), e.replace(/_$/, "")
    }
    var M = {
            keys: function(t) {
                var e = {};
                for (var i in t) e[t[i]] = t[i];
                return e
            }(P),
            parseKey: D,
            handleKey: function(t, e, i) {
                var n, o = O[e],
                    s = this.parseKey(t);
                if (!o) return console.warn("Component not defined!");
                if ((n = i[(void 0 === o.ltr ? o : m() ? g.a.extend({}, o.ltr, o.rtl) : g.a.extend({}, o.rtl, o.ltr))[s]]) && "function" == typeof n) {
                    var a = n.apply();
                    !i.handled && "function" != typeof i.handled || i.handled(a)
                } else !i.unhandled && "function" != typeof i.unhandled || i.unhandled()
            },
            findFocusable: L,
            register: function(t, e) {
                O[t] = e
            },
            trapFocus: function(t) {
                var e = L(t),
                    i = e.eq(0),
                    n = e.eq(-1);
                t.on("keydown.zf.trapfocus", function(t) {
                    t.target === n[0] && "TAB" === D(t) ? (t.preventDefault(), i.focus()) : t.target === i[0] && "SHIFT_TAB" === D(t) && (t.preventDefault(), n.focus())
                })
            },
            releaseFocus: function(t) {
                t.off("keydown.zf.trapfocus")
            }
        },
        H = ["mui-enter", "mui-leave"],
        I = ["mui-enter-active", "mui-leave-active"],
        R = {
            animateIn: function(t, e, i) {
                q(!0, t, e, i)
            },
            animateOut: function(t, e, i) {
                q(!1, t, e, i)
            }
        };

    function j(i, n, o) {
        var s, a, r = null;
        if (0 === i) return o.apply(n), void n.trigger("finished.zf.animate", [n]).triggerHandler("finished.zf.animate", [n]);
        s = window.requestAnimationFrame(function t(e) {
            a = e - (r = r || e), o.apply(n), a < i ? s = window.requestAnimationFrame(t, n) : (window.cancelAnimationFrame(s), n.trigger("finished.zf.animate", [n]).triggerHandler("finished.zf.animate", [n]))
        })
    }

    function q(t, e, i, n) {
        if ((e = g()(e).eq(0)).length) {
            var o = t ? H[0] : H[1],
                s = t ? I[0] : I[1];
            a(), e.addClass(i).css("transition", "none"), requestAnimationFrame(function() {
                e.addClass(o), t && e.show()
            }), requestAnimationFrame(function() {
                e[0].offsetWidth, e.css("transition", "").addClass(s)
            }), e.one(y(e), function() {
                t || e.hide(), a(), n && n.apply(e)
            })
        }

        function a() {
            e[0].style.transitionDuration = 0, e.removeClass("".concat(o, " ").concat(s, " ").concat(i))
        }
    }
    var F = {
        Feather: function(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "zf";
            t.attr("role", "menubar");
            var e = t.find("li").attr({
                    role: "menuitem"
                }),
                n = "is-".concat(i, "-submenu"),
                o = "".concat(n, "-item"),
                s = "is-".concat(i, "-submenu-parent"),
                a = "accordion" !== i;
            e.each(function() {
                var t = g()(this),
                    e = t.children("ul");
                e.length && (t.addClass(s), a && (t.attr({
                    "aria-haspopup": !0,
                    "aria-label": t.children("a:first").text()
                }), "drilldown" === i && t.attr({
                    "aria-expanded": !1
                })), e.addClass("submenu ".concat(n)).attr({
                    "data-submenu": "",
                    role: "menubar"
                }), "drilldown" === i && e.attr({
                    "aria-hidden": !0
                })), t.parent("[data-submenu]").length && t.addClass("is-submenu-item ".concat(o))
            })
        },
        Burn: function(t, e) {
            var i = "is-".concat(e, "-submenu"),
                n = "".concat(i, "-item"),
                o = "is-".concat(e, "-submenu-parent");
            t.find(">li, > li > ul, .menu, .menu > li, [data-submenu] > li").removeClass("".concat(i, " ").concat(n, " ").concat(o, " is-submenu-item submenu is-active")).removeAttr("data-submenu").css("display", "")
        }
    };

    function N(e, t, i) {
        var n, o, s = this,
            a = t.duration,
            r = Object.keys(e.data())[0] || "timer",
            l = -1;
        this.isPaused = !1, this.restart = function() {
            l = -1, clearTimeout(o), this.start()
        }, this.start = function() {
            this.isPaused = !1, clearTimeout(o), l = l <= 0 ? a : l, e.data("paused", !1), n = Date.now(), o = setTimeout(function() {
                t.infinite && s.restart(), i && "function" == typeof i && i()
            }, l), e.trigger("timerstart.zf.".concat(r))
        }, this.pause = function() {
            this.isPaused = !0, clearTimeout(o), e.data("paused", !0);
            var t = Date.now();
            l -= t - n, e.trigger("timerpaused.zf.".concat(r))
        }
    }
    var B, W, Y, X, U = {},
        V = !1,
        G = !1;

    function K(t) {
        if (this.removeEventListener("touchmove", Z), this.removeEventListener("touchend", K), !G) {
            var e = g.a.Event("tap", X || t);
            g()(this).trigger(e)
        }
        X = null, G = V = !1
    }

    function Z(t) {
        if (g.a.spotSwipe.preventDefault && t.preventDefault(), V) {
            var e, i = t.touches[0].pageX,
                n = (t.touches[0].pageY, B - i);
            G = !0, Y = (new Date).getTime() - W, Math.abs(n) >= g.a.spotSwipe.moveThreshold && Y <= g.a.spotSwipe.timeThreshold && (e = 0 < n ? "left" : "right"), e && (t.preventDefault(), K.apply(this, arguments), g()(this).trigger(g.a.Event("swipe", t), e).trigger(g.a.Event("swipe".concat(e), t)))
        }
    }

    function Q(t) {
        1 == t.touches.length && (B = t.touches[0].pageX, t.touches[0].pageY, X = t, G = !(V = !0), W = (new Date).getTime(), this.addEventListener("touchmove", Z, !1), this.addEventListener("touchend", K, !1))
    }

    function J() {
        this.addEventListener && this.addEventListener("touchstart", Q, !1)
    }
    var tt = (l(et, [{
        key: "_init",
        value: function() {
            var t = this.$;
            t.event.special.swipe = {
                setup: J
            }, t.event.special.tap = {
                setup: J
            }, t.each(["left", "up", "down", "right"], function() {
                t.event.special["swipe".concat(this)] = {
                    setup: function() {
                        t(this).on("swipe", t.noop)
                    }
                }
            })
        }
    }]), et);

    function et(t) {
        s(this, et), this.version = "1.0.0", this.enabled = "ontouchstart" in document.documentElement, this.preventDefault = !1, this.moveThreshold = 75, this.timeThreshold = 200, this.$ = t, this._init()
    }
    U.setupSpotSwipe = function(t) {
        t.spotSwipe = new tt(t)
    }, U.setupTouchHandler = function(n) {
        n.fn.addTouch = function() {
            this.each(function(t, e) {
                n(e).bind("touchstart touchmove touchend touchcancel", function(t) {
                    i(t)
                })
            });
            var i = function(t) {
                var e, i = t.changedTouches[0],
                    n = {
                        touchstart: "mousedown",
                        touchmove: "mousemove",
                        touchend: "mouseup"
                    }[t.type];
                "MouseEvent" in window && "function" == typeof window.MouseEvent ? e = new window.MouseEvent(n, {
                    bubbles: !0,
                    cancelable: !0,
                    screenX: i.screenX,
                    screenY: i.screenY,
                    clientX: i.clientX,
                    clientY: i.clientY
                }) : (e = document.createEvent("MouseEvent")).initMouseEvent(n, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e)
            }
        }
    }, U.init = function(t) {
        void 0 === t.spotSwipe && (U.setupSpotSwipe(t), U.setupTouchHandler(t))
    };

    function it(e, i) {
        e.data(i).split(" ").forEach(function(t) {
            g()("#".concat(t))["close" === i ? "trigger" : "triggerHandler"]("".concat(i, ".zf.trigger"), [e])
        })
    }
    var nt = function() {
            for (var t = ["WebKit", "Moz", "O", "Ms", ""], e = 0; e < t.length; e++)
                if ("".concat(t[e], "MutationObserver") in window) return window["".concat(t[e], "MutationObserver")];
            return !1
        }(),
        ot = {
            Listeners: {
                Basic: {},
                Global: {}
            },
            Initializers: {}
        };

    function st(e, t, i) {
        var n, o = Array.prototype.slice.call(arguments, 3);
        g()(window).off(t).on(t, function(t) {
            n && clearTimeout(n), n = setTimeout(function() {
                i.apply(null, o)
            }, e || 10)
        })
    }
    ot.Listeners.Basic = {
        openListener: function() {
            it(g()(this), "open")
        },
        closeListener: function() {
            g()(this).data("close") ? it(g()(this), "close") : g()(this).trigger("close.zf.trigger")
        },
        toggleListener: function() {
            g()(this).data("toggle") ? it(g()(this), "toggle") : g()(this).trigger("toggle.zf.trigger")
        },
        closeableListener: function(t) {
            t.stopPropagation();
            var e = g()(this).data("closable");
            "" !== e ? R.animateOut(g()(this), e, function() {
                g()(this).trigger("closed.zf")
            }) : g()(this).fadeOut().trigger("closed.zf")
        },
        toggleFocusListener: function() {
            var t = g()(this).data("toggle-focus");
            g()("#".concat(t)).triggerHandler("toggle.zf.trigger", [g()(this)])
        }
    }, ot.Initializers.addOpenListener = function(t) {
        t.off("click.zf.trigger", ot.Listeners.Basic.openListener), t.on("click.zf.trigger", "[data-open]", ot.Listeners.Basic.openListener)
    }, ot.Initializers.addCloseListener = function(t) {
        t.off("click.zf.trigger", ot.Listeners.Basic.closeListener), t.on("click.zf.trigger", "[data-close]", ot.Listeners.Basic.closeListener)
    }, ot.Initializers.addToggleListener = function(t) {
        t.off("click.zf.trigger", ot.Listeners.Basic.toggleListener), t.on("click.zf.trigger", "[data-toggle]", ot.Listeners.Basic.toggleListener)
    }, ot.Initializers.addCloseableListener = function(t) {
        t.off("close.zf.trigger", ot.Listeners.Basic.closeableListener), t.on("close.zf.trigger", "[data-closeable], [data-closable]", ot.Listeners.Basic.closeableListener)
    }, ot.Initializers.addToggleFocusListener = function(t) {
        t.off("focus.zf.trigger blur.zf.trigger", ot.Listeners.Basic.toggleFocusListener), t.on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", ot.Listeners.Basic.toggleFocusListener)
    }, ot.Listeners.Global = {
        resizeListener: function(t) {
            nt || t.each(function() {
                g()(this).triggerHandler("resizeme.zf.trigger")
            }), t.attr("data-events", "resize")
        },
        scrollListener: function(t) {
            nt || t.each(function() {
                g()(this).triggerHandler("scrollme.zf.trigger")
            }), t.attr("data-events", "scroll")
        },
        closeMeListener: function(t, e) {
            var i = t.namespace.split(".")[0];
            g()("[data-".concat(i, "]")).not('[data-yeti-box="'.concat(e, '"]')).each(function() {
                var t = g()(this);
                t.triggerHandler("close.zf.trigger", [t])
            })
        }
    }, ot.Initializers.addClosemeListener = function(t) {
        var e = g()("[data-yeti-box]"),
            i = ["dropdown", "tooltip", "reveal"];
        if (t && ("string" == typeof t ? i.push(t) : "object" === a(t) && "string" == typeof t[0] ? i = i.concat(t) : console.error("Plugin names must be strings")), e.length) {
            var n = i.map(function(t) {
                return "closeme.zf.".concat(t)
            }).join(" ");
            g()(window).off(n).on(n, ot.Listeners.Global.closeMeListener)
        }
    }, ot.Initializers.addResizeListener = function(t) {
        var e = g()("[data-resize]");
        e.length && st(t, "resize.zf.trigger", ot.Listeners.Global.resizeListener, e)
    }, ot.Initializers.addScrollListener = function(t) {
        var e = g()("[data-scroll]");
        e.length && st(t, "scroll.zf.trigger", ot.Listeners.Global.scrollListener, e)
    }, ot.Initializers.addMutationEventsListener = function(t) {
        if (!nt) return !1;

        function e(t) {
            var e = g()(t[0].target);
            switch (t[0].type) {
                case "attributes":
                    "scroll" === e.attr("data-events") && "data-events" === t[0].attributeName && e.triggerHandler("scrollme.zf.trigger", [e, window.pageYOffset]), "resize" === e.attr("data-events") && "data-events" === t[0].attributeName && e.triggerHandler("resizeme.zf.trigger", [e]), "style" === t[0].attributeName && (e.closest("[data-mutate]").attr("data-events", "mutate"), e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [e.closest("[data-mutate]")]));
                    break;
                case "childList":
                    e.closest("[data-mutate]").attr("data-events", "mutate"), e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [e.closest("[data-mutate]")]);
                    break;
                default:
                    return !1
            }
        }
        var i = t.find("[data-resize], [data-scroll], [data-mutate]");
        if (i.length)
            for (var n = 0; n <= i.length - 1; n++) new nt(e).observe(i[n], {
                attributes: !0,
                childList: !0,
                characterData: !1,
                subtree: !0,
                attributeFilter: ["data-events", "style"]
            })
    }, ot.Initializers.addSimpleListeners = function() {
        var t = g()(document);
        ot.Initializers.addOpenListener(t), ot.Initializers.addCloseListener(t), ot.Initializers.addToggleListener(t), ot.Initializers.addCloseableListener(t), ot.Initializers.addToggleFocusListener(t)
    }, ot.Initializers.addGlobalListeners = function() {
        var t = g()(document);
        ot.Initializers.addMutationEventsListener(t), ot.Initializers.addResizeListener(), ot.Initializers.addScrollListener(), ot.Initializers.addClosemeListener()
    }, ot.init = function(t, e) {
        b(t(window), function() {
            !0 !== t.triggersInitialized && (ot.Initializers.addSimpleListeners(), ot.Initializers.addGlobalListeners(), t.triggersInitialized = !0)
        }), e && (e.Triggers = ot, e.IHearYou = ot.Initializers.addGlobalListeners)
    };
    var at = (l(rt, [{
        key: "destroy",
        value: function() {
            this._destroy();
            var t = ct(this);
            for (var e in this.$element.removeAttr("data-".concat(t)).removeData("zfPlugin").trigger("destroyed.zf.".concat(t)), this) this[e] = null
        }
    }]), rt);

    function rt(t, e) {
        s(this, rt), this._setup(t, e);
        var i = ct(this);
        this.uuid = f(6, i), this.$element.attr("data-".concat(i)) || this.$element.attr("data-".concat(i), this.uuid), this.$element.data("zfPlugin") || this.$element.data("zfPlugin", this), this.$element.trigger("init.zf.".concat(i))
    }

    function lt(t) {
        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }

    function ct(t) {
        return void 0 !== t.constructor.name ? lt(t.constructor.name) : lt(t.className)
    }
    var dt = (c(ut, at), l(ut, [{
        key: "_setup",
        value: function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
            this.$element = t, this.options = g.a.extend(!0, {}, ut.defaults, this.$element.data(), e), this.className = "Abide", this._init()
        }
    }, {
        key: "_init",
        value: function() {
            var i = this;
            this.$inputs = g.a.merge(this.$element.find("input").not("[type=submit]"), this.$element.find("textarea, select"));
            var t = this.$element.find("[data-abide-error]");
            this.options.a11yAttributes && (this.$inputs.each(function(t, e) {
                return i.addA11yAttributes(g()(e))
            }), t.each(function(t, e) {
                return i.addGlobalErrorA11yAttributes(g()(e))
            })), this._events()
        }
    }, {
        key: "_events",
        value: function() {
            var e = this;
            this.$element.off(".abide").on("reset.zf.abide", function() {
                e.resetForm()
            }).on("submit.zf.abide", function() {
                return e.validateForm()
            }), "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", function(t) {
                e.validateInput(g()(t.target))
            }), this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", function(t) {
                e.validateInput(g()(t.target))
            }), this.options.validateOnBlur && this.$inputs.off("blur.zf.abide").on("blur.zf.abide", function(t) {
                e.validateInput(g()(t.target))
            })
        }
    }, {
        key: "_reflow",
        value: function() {
            this._init()
        }
    }, {
        key: "requiredCheck",
        value: function(t) {
            if (!t.attr("required")) return !0;
            var e = !0;
            switch (t[0].type) {
                case "checkbox":
                    e = t[0].checked;
                    break;
                case "select":
                case "select-one":
                case "select-multiple":
                    var i = t.find("option:selected");
                    i.length && i.val() || (e = !1);
                    break;
                default:
                    t.val() && t.val().length || (e = !1)
            }
            return e
        }
    }, {
        key: "findFormError",
        value: function(t) {
            var e = t[0].id,
                i = t.siblings(this.options.formErrorSelector);
            return i.length || (i = t.parent().find(this.options.formErrorSelector)), e && (i = i.add(this.$element.find('[data-form-error-for="'.concat(e, '"]')))), i
        }
    }, {
        key: "findLabel",
        value: function(t) {
            var e = t[0].id,
                i = this.$element.find('label[for="'.concat(e, '"]'));
            return i.length ? i : t.closest("label")
        }
    }, {
        key: "findRadioLabels",
        value: function(t) {
            var o = this,
                e = t.map(function(t, e) {
                    var i = e.id,
                        n = o.$element.find('label[for="'.concat(i, '"]'));
                    return n.length || (n = g()(e).closest("label")), n[0]
                });
            return g()(e)
        }
    }, {
        key: "addErrorClasses",
        value: function(t) {
            var e = this.findLabel(t),
                i = this.findFormError(t);
            e.length && e.addClass(this.options.labelErrorClass), i.length && i.addClass(this.options.formErrorClass), t.addClass(this.options.inputErrorClass).attr({
                "data-invalid": "",
                "aria-invalid": !0
            })
        }
    }, {
        key: "addA11yAttributes",
        value: function(t) {
            var e = this.findFormError(t),
                i = e.filter("label"),
                n = e.first();
            if (e.length) {
                if (void 0 === t.attr("aria-describedby")) {
                    var o = n.attr("id");
                    void 0 === o && (o = f(6, "abide-error"), n.attr("id", o)), t.attr("aria-describedby", o)
                }
                if (i.filter("[for]").length < i.length) {
                    var s = t.attr("id");
                    void 0 === s && (s = f(6, "abide-input"), t.attr("id", s)), i.each(function(t, e) {
                        var i = g()(e);
                        void 0 === i.attr("for") && i.attr("for", s)
                    })
                }
                e.each(function(t, e) {
                    var i = g()(e);
                    void 0 === i.attr("role") && i.attr("role", "alert")
                }).end()
            }
        }
    }, {
        key: "addGlobalErrorA11yAttributes",
        value: function(t) {
            void 0 === t.attr("aria-live") && t.attr("aria-live", this.options.a11yErrorLevel)
        }
    }, {
        key: "removeRadioErrorClasses",
        value: function(t) {
            var e = this.$element.find(':radio[name="'.concat(t, '"]')),
                i = this.findRadioLabels(e),
                n = this.findFormError(e);
            i.length && i.removeClass(this.options.labelErrorClass), n.length && n.removeClass(this.options.formErrorClass), e.removeClass(this.options.inputErrorClass).attr({
                "data-invalid": null,
                "aria-invalid": null
            })
        }
    }, {
        key: "removeErrorClasses",
        value: function(t) {
            if ("radio" == t[0].type) return this.removeRadioErrorClasses(t.attr("name"));
            var e = this.findLabel(t),
                i = this.findFormError(t);
            e.length && e.removeClass(this.options.labelErrorClass), i.length && i.removeClass(this.options.formErrorClass), t.removeClass(this.options.inputErrorClass).attr({
                "data-invalid": null,
                "aria-invalid": null
            })
        }
    }, {
        key: "validateInput",
        value: function(t) {
            var e = this.requiredCheck(t),
                i = !1,
                n = !0,
                o = t.attr("data-validator"),
                s = !0;
            if (t.is("[data-abide-ignore]") || t.is('[type="hidden"]') || t.is("[disabled]")) return !0;
            switch (t[0].type) {
                case "radio":
                    i = this.validateRadio(t.attr("name"));
                    break;
                case "checkbox":
                    i = e;
                    break;
                case "select":
                case "select-one":
                case "select-multiple":
                    i = e;
                    break;
                default:
                    i = this.validateText(t)
            }
            o && (n = this.matchValidation(t, o, t.attr("required"))), t.attr("data-equalto") && (s = this.options.validators.equalTo(t));
            var a = -1 === [e, i, n, s].indexOf(!1),
                r = (a ? "valid" : "invalid") + ".zf.abide";
            if (a) {
                var l = this.$element.find('[data-equalto="'.concat(t.attr("id"), '"]'));
                if (l.length) {
                    var c = this;
                    l.each(function() {
                        g()(this).val() && c.validateInput(g()(this))
                    })
                }
            }
            return this[a ? "removeErrorClasses" : "addErrorClasses"](t), t.trigger(r, [t]), a
        }
    }, {
        key: "validateForm",
        value: function() {
            var n = this,
                t = [],
                e = this;
            this.$inputs.each(function() {
                t.push(e.validateInput(g()(this)))
            });
            var o = -1 === t.indexOf(!1);
            return this.$element.find("[data-abide-error]").each(function(t, e) {
                var i = g()(e);
                n.options.a11yAttributes && n.addGlobalErrorA11yAttributes(i), i.css("display", o ? "none" : "block")
            }), this.$element.trigger((o ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]), o
        }
    }, {
        key: "validateText",
        value: function(t, e) {
            e = e || t.attr("pattern") || t.attr("type");
            var i = t.val(),
                n = !1;
            return i.length ? n = this.options.patterns.hasOwnProperty(e) ? this.options.patterns[e].test(i) : e === t.attr("type") || new RegExp(e).test(i) : t.prop("required") || (n = !0), n
        }
    }, {
        key: "validateRadio",
        value: function(t) {
            var e = this.$element.find(':radio[name="'.concat(t, '"]')),
                i = !1,
                n = !1;
            return e.each(function(t, e) {
                g()(e).attr("required") && (n = !0)
            }), n || (i = !0), i || e.each(function(t, e) {
                g()(e).prop("checked") && (i = !0)
            }), i
        }
    }, {
        key: "matchValidation",
        value: function(e, t, i) {
            var n = this;
            return i = !!i, -1 === t.split(" ").map(function(t) {
                return n.options.validators[t](e, i, e.parent())
            }).indexOf(!1)
        }
    }, {
        key: "resetForm",
        value: function() {
            var t = this.$element,
                e = this.options;
            g()(".".concat(e.labelErrorClass), t).not("small").removeClass(e.labelErrorClass), g()(".".concat(e.inputErrorClass), t).not("small").removeClass(e.inputErrorClass), g()("".concat(e.formErrorSelector, ".").concat(e.formErrorClass)).removeClass(e.formErrorClass), t.find("[data-abide-error]").css("display", "none"), g()(":input", t).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").attr({
                "data-invalid": null,
                "aria-invalid": null
            }), g()(":input:radio", t).not("[data-abide-ignore]").prop("checked", !1).attr({
                "data-invalid": null,
                "aria-invalid": null
            }), g()(":input:checkbox", t).not("[data-abide-ignore]").prop("checked", !1).attr({
                "data-invalid": null,
                "aria-invalid": null
            }), t.trigger("formreset.zf.abide", [t])
        }
    }, {
        key: "_destroy",
        value: function() {
            var t = this;
            this.$element.off(".abide").find("[data-abide-error]").css("display", "none"), this.$inputs.off(".abide").each(function() {
                t.removeErrorClasses(g()(this))
            })
        }
    }]), ut);

    function ut() {
        return s(this, ut), h(this, d(ut).apply(this, arguments))
    }
    dt.defaults = {
        validateOn: "fieldChange",
        labelErrorClass: "is-invalid-label",
        inputErrorClass: "is-invalid-input",
        formErrorSelector: ".form-error",
        formErrorClass: "is-visible",
        a11yAttributes: !0,
        a11yErrorLevel: "assertive",
        liveValidate: !1,
        validateOnBlur: !1,
        patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
            website: {
                test: function(t) {
                    return dt.defaults.patterns.domain.test(t) || dt.defaults.patterns.url.test(t)
                }
            }
        },
        validators: {
            equalTo: function(t, e, i) {
                return g()("#".concat(t.attr("data-equalto"))).val() === t.val()
            }
        }
    };
    var ht = (c(pt, at), l(pt, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = t, this.options = g.a.extend({}, pt.defaults, this.$element.data(), e), this.className = "Accordion", this._init(), M.register("Accordion", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_DOWN: "next",
                ARROW_UP: "previous"
            })
        }
    }, {
        key: "_init",
        value: function() {
            var o = this;
            this._isInitializing = !0, this.$element.attr("role", "tablist"), this.$tabs = this.$element.children("[data-accordion-item]"), this.$tabs.each(function(t, e) {
                var i = g()(e),
                    n = i.children("[data-tab-content]"),
                    o = n[0].id || f(6, "accordion"),
                    s = e.id ? "".concat(e.id, "-label") : "".concat(o, "-label");
                i.find("a:first").attr({
                    "aria-controls": o,
                    role: "tab",
                    id: s,
                    "aria-expanded": !1,
                    "aria-selected": !1
                }), n.attr({
                    role: "tabpanel",
                    "aria-labelledby": s,
                    "aria-hidden": !0,
                    id: o
                })
            });
            var t = this.$element.find(".is-active").children("[data-tab-content]");
            t.length && (this._initialAnchor = t.prev("a").attr("href"), this._openSingleTab(t)), this._checkDeepLink = function() {
                var t = window.location.hash;
                if (!t.length) {
                    if (o._isInitializing) return;
                    o._initialAnchor && (t = o._initialAnchor)
                }
                var e = t && g()(t),
                    i = t && o.$element.find('[href$="'.concat(t, '"]')),
                    n = !(!e.length || !i.length);
                e && i && i.length ? i.parent("[data-accordion-item]").hasClass("is-active") || o._openSingleTab(e) : o._closeAllTabs(), n && (o.options.deepLinkSmudge && b(g()(window), function() {
                    var t = o.$element.offset();
                    g()("html, body").animate({
                        scrollTop: t.top
                    }, o.options.deepLinkSmudgeDelay)
                }), o.$element.trigger("deeplink.zf.accordion", [i, e]))
            }, this.options.deepLink && this._checkDeepLink(), this._events(), this._isInitializing = !1
        }
    }, {
        key: "_events",
        value: function() {
            var n = this;
            this.$tabs.each(function() {
                var e = g()(this),
                    i = e.children("[data-tab-content]");
                i.length && e.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(t) {
                    t.preventDefault(), n.toggle(i)
                }).on("keydown.zf.accordion", function(t) {
                    M.handleKey(t, "Accordion", {
                        toggle: function() {
                            n.toggle(i)
                        },
                        next: function() {
                            var t = e.next().find("a").focus();
                            n.options.multiExpand || t.trigger("click.zf.accordion")
                        },
                        previous: function() {
                            var t = e.prev().find("a").focus();
                            n.options.multiExpand || t.trigger("click.zf.accordion")
                        },
                        handled: function() {
                            t.preventDefault(), t.stopPropagation()
                        }
                    })
                })
            }), this.options.deepLink && g()(window).on("hashchange", this._checkDeepLink)
        }
    }, {
        key: "toggle",
        value: function(t) {
            if (t.closest("[data-accordion]").is("[disabled]")) console.info("Cannot toggle an accordion that is disabled.");
            else if (t.parent().hasClass("is-active") ? this.up(t) : this.down(t), this.options.deepLink) {
                var e = t.prev("a").attr("href");
                this.options.updateHistory ? history.pushState({}, "", e) : history.replaceState({}, "", e)
            }
        }
    }, {
        key: "down",
        value: function(t) {
            t.closest("[data-accordion]").is("[disabled]") ? console.info("Cannot call down on an accordion that is disabled.") : this.options.multiExpand ? this._openTab(t) : this._openSingleTab(t)
        }
    }, {
        key: "up",
        value: function(t) {
            if (this.$element.is("[disabled]")) console.info("Cannot call up on an accordion that is disabled.");
            else {
                var e = t.parent();
                if (e.hasClass("is-active")) {
                    var i = e.siblings();
                    (this.options.allowAllClosed || i.hasClass("is-active")) && this._closeTab(t)
                }
            }
        }
    }, {
        key: "_openSingleTab",
        value: function(t) {
            var e = this.$element.children(".is-active").children("[data-tab-content]");
            e.length && this._closeTab(e.not(t)), this._openTab(t)
        }
    }, {
        key: "_openTab",
        value: function(t) {
            var e = this,
                i = t.parent(),
                n = t.attr("aria-labelledby");
            t.attr("aria-hidden", !1), i.addClass("is-active"), g()("#".concat(n)).attr({
                "aria-expanded": !0,
                "aria-selected": !0
            }), t.slideDown(this.options.slideSpeed, function() {
                e.$element.trigger("down.zf.accordion", [t])
            })
        }
    }, {
        key: "_closeTab",
        value: function(t) {
            var e = this,
                i = t.parent(),
                n = t.attr("aria-labelledby");
            t.attr("aria-hidden", !0), i.removeClass("is-active"), g()("#".concat(n)).attr({
                "aria-expanded": !1,
                "aria-selected": !1
            }), t.slideUp(this.options.slideSpeed, function() {
                e.$element.trigger("up.zf.accordion", [t])
            })
        }
    }, {
        key: "_closeAllTabs",
        value: function() {
            var t = this.$element.children(".is-active").children("[data-tab-content]");
            t.length && this._closeTab(t)
        }
    }, {
        key: "_destroy",
        value: function() {
            this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display", ""), this.$element.find("a").off(".zf.accordion"), this.options.deepLink && g()(window).off("hashchange", this._checkDeepLink)
        }
    }]), pt);

    function pt() {
        return s(this, pt), h(this, d(pt).apply(this, arguments))
    }
    ht.defaults = {
        slideSpeed: 250,
        multiExpand: !1,
        allowAllClosed: !1,
        deepLink: !1,
        deepLinkSmudge: !1,
        deepLinkSmudgeDelay: 300,
        updateHistory: !1
    };
    var ft = (c(gt, at), l(gt, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = t, this.options = g.a.extend({}, gt.defaults, this.$element.data(), e), this.className = "AccordionMenu", this._init(), M.register("AccordionMenu", {
                ENTER: "toggle",
                SPACE: "toggle",
                ARROW_RIGHT: "open",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "close",
                ESCAPE: "closeAll"
            })
        }
    }, {
        key: "_init",
        value: function() {
            F.Feather(this.$element, "accordion");
            var s = this;
            this.$element.find("[data-submenu]").not(".is-active").slideUp(0), this.$element.attr({
                role: "tree",
                "aria-multiselectable": this.options.multiOpen
            }), this.$menuLinks = this.$element.find(".is-accordion-submenu-parent"), this.$menuLinks.each(function() {
                var t = this.id || f(6, "acc-menu-link"),
                    e = g()(this),
                    i = e.children("[data-submenu]"),
                    n = i[0].id || f(6, "acc-menu"),
                    o = i.hasClass("is-active");
                s.options.parentLink && e.children("a").clone().prependTo(i).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>'), s.options.submenuToggle ? (e.addClass("has-submenu-toggle"), e.children("a").after('<button id="' + t + '" class="submenu-toggle" aria-controls="' + n + '" aria-expanded="' + o + '" title="' + s.options.submenuToggleText + '"><span class="submenu-toggle-text">' + s.options.submenuToggleText + "</span></button>")) : e.attr({
                    "aria-controls": n,
                    "aria-expanded": o,
                    id: t
                }), i.attr({
                    "aria-labelledby": t,
                    "aria-hidden": !o,
                    role: "group",
                    id: n
                })
            }), this.$element.find("li").attr({
                role: "treeitem"
            });
            var t = this.$element.find(".is-active");
            t.length && (s = this, t.each(function() {
                s.down(g()(this))
            })), this._events()
        }
    }, {
        key: "_events",
        value: function() {
            var a = this;
            this.$element.find("li").each(function() {
                var e = g()(this).children("[data-submenu]");
                e.length && (a.options.submenuToggle ? g()(this).children(".submenu-toggle").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(t) {
                    a.toggle(e)
                }) : g()(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(t) {
                    t.preventDefault(), a.toggle(e)
                }))
            }).on("keydown.zf.accordionmenu", function(e) {
                var i, n, o = g()(this),
                    s = o.parent("ul").children("li"),
                    t = o.children("[data-submenu]");
                s.each(function(t) {
                    if (g()(this).is(o)) return i = s.eq(Math.max(0, t - 1)).find("a").first(), n = s.eq(Math.min(t + 1, s.length - 1)).find("a").first(), g()(this).children("[data-submenu]:visible").length && (n = o.find("li:first-child").find("a").first()), g()(this).is(":first-child") ? i = o.parents("li").first().find("a").first() : i.parents("li").first().children("[data-submenu]:visible").length && (i = i.parents("li").find("li:last-child").find("a").first()), void(g()(this).is(":last-child") && (n = o.parents("li").first().next("li").find("a").first()))
                }), M.handleKey(e, "AccordionMenu", {
                    open: function() {
                        t.is(":hidden") && (a.down(t), t.find("li").first().find("a").first().focus())
                    },
                    close: function() {
                        t.length && !t.is(":hidden") ? a.up(t) : o.parent("[data-submenu]").length && (a.up(o.parent("[data-submenu]")), o.parents("li").first().find("a").first().focus())
                    },
                    up: function() {
                        return i.focus(), !0
                    },
                    down: function() {
                        return n.focus(), !0
                    },
                    toggle: function() {
                        return !a.options.submenuToggle && (o.children("[data-submenu]").length ? (a.toggle(o.children("[data-submenu]")), !0) : void 0)
                    },
                    closeAll: function() {
                        a.hideAll()
                    },
                    handled: function(t) {
                        t && e.preventDefault(), e.stopImmediatePropagation()
                    }
                })
            })
        }
    }, {
        key: "hideAll",
        value: function() {
            this.up(this.$element.find("[data-submenu]"))
        }
    }, {
        key: "showAll",
        value: function() {
            this.down(this.$element.find("[data-submenu]"))
        }
    }, {
        key: "toggle",
        value: function(t) {
            t.is(":animated") || (t.is(":hidden") ? this.down(t) : this.up(t))
        }
    }, {
        key: "down",
        value: function(t) {
            var e = this;
            if (!this.options.multiOpen) {
                var i = t.parentsUntil(this.$element).add(t).add(t.find(".is-active")),
                    n = this.$element.find(".is-active").not(i);
                this.up(n)
            }
            t.addClass("is-active").attr({
                "aria-hidden": !1
            }), this.options.submenuToggle ? t.prev(".submenu-toggle").attr({
                "aria-expanded": !0
            }) : t.parent(".is-accordion-submenu-parent").attr({
                "aria-expanded": !0
            }), t.slideDown(this.options.slideSpeed, function() {
                e.$element.trigger("down.zf.accordionMenu", [t])
            })
        }
    }, {
        key: "up",
        value: function(t) {
            var e = this,
                i = t.find("[data-submenu]"),
                n = t.add(i);
            i.slideUp(0), n.removeClass("is-active").attr("aria-hidden", !0), this.options.submenuToggle ? n.prev(".submenu-toggle").attr("aria-expanded", !1) : n.parent(".is-accordion-submenu-parent").attr("aria-expanded", !1), t.slideUp(this.options.slideSpeed, function() {
                e.$element.trigger("up.zf.accordionMenu", [t])
            })
        }
    }, {
        key: "_destroy",
        value: function() {
            this.$element.find("[data-submenu]").slideDown(0).css("display", ""), this.$element.find("a").off("click.zf.accordionMenu"), this.$element.find("[data-is-parent-link]").detach(), this.options.submenuToggle && (this.$element.find(".has-submenu-toggle").removeClass("has-submenu-toggle"), this.$element.find(".submenu-toggle").remove()), F.Burn(this.$element, "accordion")
        }
    }]), gt);

    function gt() {
        return s(this, gt), h(this, d(gt).apply(this, arguments))
    }
    ft.defaults = {
        parentLink: !1,
        slideSpeed: 250,
        submenuToggle: !1,
        submenuToggleText: "Toggle menu",
        multiOpen: !0
    };
    var mt = (c(vt, at), l(vt, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = t, this.options = g.a.extend({}, vt.defaults, this.$element.data(), e), this.className = "Drilldown", this._init(), M.register("Drilldown", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close",
                TAB: "down",
                SHIFT_TAB: "up"
            })
        }
    }, {
        key: "_init",
        value: function() {
            F.Feather(this.$element, "drilldown"), this.options.autoApplyClass && this.$element.addClass("drilldown"), this.$element.attr({
                role: "tree",
                "aria-multiselectable": !1
            }), this.$submenuAnchors = this.$element.find("li.is-drilldown-submenu-parent").children("a"), this.$submenus = this.$submenuAnchors.parent("li").children("[data-submenu]").attr("role", "group"), this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "treeitem").find("a"), this.$currentMenu = this.$element, this.$element.attr("data-mutate", this.$element.attr("data-drilldown") || f(6, "drilldown")), this._prepareMenu(), this._registerEvents(), this._keyboardEvents()
        }
    }, {
        key: "_prepareMenu",
        value: function() {
            var i = this;
            this.$submenuAnchors.each(function() {
                var t = g()(this),
                    e = t.parent();
                i.options.parentLink && t.clone().prependTo(e.children("[data-submenu]")).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>'), t.data("savedHref", t.attr("href")).removeAttr("href").attr("tabindex", 0), t.children("[data-submenu]").attr({
                    "aria-hidden": !0,
                    tabindex: 0,
                    role: "group"
                }), i._events(t)
            }), this.$submenus.each(function() {
                var t = g()(this);
                if (!t.find(".js-drilldown-back").length) switch (i.options.backButtonPosition) {
                    case "bottom":
                        t.append(i.options.backButton);
                        break;
                    case "top":
                        t.prepend(i.options.backButton);
                        break;
                    default:
                        console.error("Unsupported backButtonPosition value '" + i.options.backButtonPosition + "'")
                }
                i._back(t)
            }), this.$submenus.addClass("invisible"), this.options.autoHeight || this.$submenus.addClass("drilldown-submenu-cover-previous"), this.$element.parent().hasClass("is-drilldown") || (this.$wrapper = g()(this.options.wrapper).addClass("is-drilldown"), this.options.animateHeight && this.$wrapper.addClass("animate-height"), this.$element.wrap(this.$wrapper)), this.$wrapper = this.$element.parent(), this.$wrapper.css(this._getMaxDims())
        }
    }, {
        key: "_resize",
        value: function() {
            this.$wrapper.css({
                "max-width": "none",
                "min-height": "none"
            }), this.$wrapper.css(this._getMaxDims())
        }
    }, {
        key: "_events",
        value: function(i) {
            var n = this;
            i.off("click.zf.drilldown").on("click.zf.drilldown", function(t) {
                if (g()(t.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent") && (t.stopImmediatePropagation(), t.preventDefault()), n._show(i.parent("li")), n.options.closeOnClick) {
                    var e = g()("body");
                    e.off(".zf.drilldown").on("click.zf.drilldown", function(t) {
                        t.target === n.$element[0] || g.a.contains(n.$element[0], t.target) || (t.preventDefault(), n._hideAll(), e.off(".zf.drilldown"))
                    })
                }
            })
        }
    }, {
        key: "_registerEvents",
        value: function() {
            this.options.scrollTop && (this._bindHandler = this._scrollTop.bind(this), this.$element.on("open.zf.drilldown hide.zf.drilldown closed.zf.drilldown", this._bindHandler)), this.$element.on("mutateme.zf.trigger", this._resize.bind(this))
        }
    }, {
        key: "_scrollTop",
        value: function() {
            var t = this,
                e = "" != t.options.scrollTopElement ? g()(t.options.scrollTopElement) : t.$element,
                i = parseInt(e.offset().top + t.options.scrollTopOffset, 10);
            g()("html, body").stop(!0).animate({
                scrollTop: i
            }, t.options.animationDuration, t.options.animationEasing, function() {
                this === g()("html")[0] && t.$element.trigger("scrollme.zf.drilldown")
            })
        }
    }, {
        key: "_keyboardEvents",
        value: function() {
            var t = this;
            this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown", function(e) {
                var i, n, o = g()(this),
                    s = o.parent("li").parent("ul").children("li").children("a");
                s.each(function(t) {
                    if (g()(this).is(o)) return i = s.eq(Math.max(0, t - 1)), void(n = s.eq(Math.min(t + 1, s.length - 1)))
                }), M.handleKey(e, "Drilldown", {
                    next: function() {
                        if (o.is(t.$submenuAnchors)) return t._show(o.parent("li")), o.parent("li").one(y(o), function() {
                            o.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()
                        }), !0
                    },
                    previous: function() {
                        return t._hide(o.parent("li").parent("ul")), o.parent("li").parent("ul").one(y(o), function() {
                            setTimeout(function() {
                                o.parent("li").parent("ul").parent("li").children("a").first().focus()
                            }, 1)
                        }), !0
                    },
                    up: function() {
                        return i.focus(), !o.is(t.$element.find("> li:first-child > a"))
                    },
                    down: function() {
                        return n.focus(), !o.is(t.$element.find("> li:last-child > a"))
                    },
                    close: function() {
                        o.is(t.$element.find("> li > a")) || (t._hide(o.parent().parent()), o.parent().parent().siblings("a").focus())
                    },
                    open: function() {
                        return (!t.options.parentLink || !o.attr("href")) && (o.is(t.$menuItems) ? o.is(t.$submenuAnchors) ? (t._show(o.parent("li")), o.parent("li").one(y(o), function() {
                            o.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()
                        }), !0) : void 0 : (t._hide(o.parent("li").parent("ul")), o.parent("li").parent("ul").one(y(o), function() {
                            setTimeout(function() {
                                o.parent("li").parent("ul").parent("li").children("a").first().focus()
                            }, 1)
                        }), !0))
                    },
                    handled: function(t) {
                        t && e.preventDefault(), e.stopImmediatePropagation()
                    }
                })
            })
        }
    }, {
        key: "_hideAll",
        value: function() {
            var e = this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");
            this.options.autoHeight && this.$wrapper.css({
                height: e.parent().closest("ul").data("calcHeight")
            }), e.one(y(e), function(t) {
                e.removeClass("is-active is-closing")
            }), this.$element.trigger("closed.zf.drilldown")
        }
    }, {
        key: "_back",
        value: function(i) {
            var n = this;
            i.off("click.zf.drilldown"), i.children(".js-drilldown-back").on("click.zf.drilldown", function(t) {
                t.stopImmediatePropagation(), n._hide(i);
                var e = i.parent("li").parent("ul").parent("li");
                e.length && n._show(e)
            })
        }
    }, {
        key: "_menuLinkEvents",
        value: function() {
            var e = this;
            this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", function(t) {
                setTimeout(function() {
                    e._hideAll()
                }, 0)
            })
        }
    }, {
        key: "_setShowSubMenuClasses",
        value: function(t, e) {
            t.addClass("is-active").removeClass("invisible").attr("aria-hidden", !1), t.parent("li").attr("aria-expanded", !0), !0 === e && this.$element.trigger("open.zf.drilldown", [t])
        }
    }, {
        key: "_setHideSubMenuClasses",
        value: function(t, e) {
            t.removeClass("is-active").addClass("invisible").attr("aria-hidden", !0), t.parent("li").attr("aria-expanded", !1), !0 === e && t.trigger("hide.zf.drilldown", [t])
        }
    }, {
        key: "_showMenu",
        value: function(i, n) {
            var o = this;
            if (this.$element.find('li[aria-expanded="true"] > ul[data-submenu]').each(function(t) {
                o._setHideSubMenuClasses(g()(this))
            }), (this.$currentMenu = i).is("[data-drilldown]")) return !0 === n && i.find('li[role="treeitem"] > a').first().focus(), void(this.options.autoHeight && this.$wrapper.css("height", i.data("calcHeight")));
            var s = i.children().first().parentsUntil("[data-drilldown]", "[data-submenu]");
            s.each(function(t) {
                0 === t && o.options.autoHeight && o.$wrapper.css("height", g()(this).data("calcHeight"));
                var e = t == s.length - 1;
                1 == e && g()(this).one(y(g()(this)), function() {
                    !0 === n && i.find('li[role="treeitem"] > a').first().focus()
                }), o._setShowSubMenuClasses(g()(this), e)
            })
        }
    }, {
        key: "_show",
        value: function(t) {
            var e = t.children("[data-submenu]");
            t.attr("aria-expanded", !0), (this.$currentMenu = e).addClass("is-active").removeClass("invisible").attr("aria-hidden", !1), this.options.autoHeight && this.$wrapper.css({
                height: e.data("calcHeight")
            }), this.$element.trigger("open.zf.drilldown", [t])
        }
    }, {
        key: "_hide",
        value: function(t) {
            this.options.autoHeight && this.$wrapper.css({
                height: t.parent().closest("ul").data("calcHeight")
            }), t.parent("li").attr("aria-expanded", !1), t.attr("aria-hidden", !0), t.addClass("is-closing").one(y(t), function() {
                t.removeClass("is-active is-closing"), t.blur().addClass("invisible")
            }), t.trigger("hide.zf.drilldown", [t])
        }
    }, {
        key: "_getMaxDims",
        value: function() {
            var e = 0,
                t = {},
                i = this;
            return this.$submenus.add(this.$element).each(function() {
                g()(this).children("li").length;
                var t = S.GetDimensions(this).height;
                e = e < t ? t : e, i.options.autoHeight && g()(this).data("calcHeight", t)
            }), this.options.autoHeight ? t.height = this.$currentMenu.data("calcHeight") : t["min-height"] = "".concat(e, "px"), t["max-width"] = "".concat(this.$element[0].getBoundingClientRect().width, "px"), t
        }
    }, {
        key: "_destroy",
        value: function() {
            this.options.scrollTop && this.$element.off(".zf.drilldown", this._bindHandler), this._hideAll(), this.$element.off("mutateme.zf.trigger"), F.Burn(this.$element, "drilldown"), this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"), this.$submenuAnchors.each(function() {
                g()(this).off(".zf.drilldown")
            }), this.$element.find("[data-is-parent-link]").detach(), this.$submenus.removeClass("drilldown-submenu-cover-previous invisible"), this.$element.find("a").each(function() {
                var t = g()(this);
                t.removeAttr("tabindex"), t.data("savedHref") && t.attr("href", t.data("savedHref")).removeData("savedHref")
            })
        }
    }]), vt);

    function vt() {
        return s(this, vt), h(this, d(vt).apply(this, arguments))
    }
    mt.defaults = {
        autoApplyClass: !0,
        backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
        backButtonPosition: "top",
        wrapper: "<div></div>",
        parentLink: !1,
        closeOnClick: !1,
        autoHeight: !1,
        animateHeight: !1,
        scrollTop: !1,
        scrollTopElement: "",
        scrollTopOffset: 0,
        animationDuration: 500,
        animationEasing: "swing"
    };
    var yt = ["left", "right", "top", "bottom"],
        bt = ["top", "bottom", "center"],
        wt = ["left", "right", "center"],
        $t = {
            left: bt,
            right: bt,
            top: wt,
            bottom: wt
        };

    function kt(t, e) {
        var i = e.indexOf(t);
        return i === e.length - 1 ? e[0] : e[i + 1]
    }
    var xt = (c(Ct, at), l(Ct, [{
        key: "_init",
        value: function() {
            this.triedPositions = {}, this.position = "auto" === this.options.position ? this._getDefaultPosition() : this.options.position, this.alignment = "auto" === this.options.alignment ? this._getDefaultAlignment() : this.options.alignment, this.originalPosition = this.position, this.originalAlignment = this.alignment
        }
    }, {
        key: "_getDefaultPosition",
        value: function() {
            return "bottom"
        }
    }, {
        key: "_getDefaultAlignment",
        value: function() {
            switch (this.position) {
                case "bottom":
                case "top":
                    return m() ? "right" : "left";
                case "left":
                case "right":
                    return "bottom"
            }
        }
    }, {
        key: "_reposition",
        value: function() {
            this._alignmentsExhausted(this.position) ? (this.position = kt(this.position, yt), this.alignment = $t[this.position][0]) : this._realign()
        }
    }, {
        key: "_realign",
        value: function() {
            this._addTriedPosition(this.position, this.alignment), this.alignment = kt(this.alignment, $t[this.position])
        }
    }, {
        key: "_addTriedPosition",
        value: function(t, e) {
            this.triedPositions[t] = this.triedPositions[t] || [], this.triedPositions[t].push(e)
        }
    }, {
        key: "_positionsExhausted",
        value: function() {
            for (var t = !0, e = 0; e < yt.length; e++) t = t && this._alignmentsExhausted(yt[e]);
            return t
        }
    }, {
        key: "_alignmentsExhausted",
        value: function(t) {
            return this.triedPositions[t] && this.triedPositions[t].length == $t[t].length
        }
    }, {
        key: "_getVOffset",
        value: function() {
            return this.options.vOffset
        }
    }, {
        key: "_getHOffset",
        value: function() {
            return this.options.hOffset
        }
    }, {
        key: "_setPosition",
        value: function(t, e, i) {
            if ("false" === t.attr("aria-expanded")) return !1;
            if (S.GetDimensions(e), S.GetDimensions(t), this.options.allowOverlap || (this.position = this.originalPosition, this.alignment = this.originalAlignment), e.offset(S.GetExplicitOffsets(e, t, this.position, this.alignment, this._getVOffset(), this._getHOffset())), !this.options.allowOverlap) {
                for (var n = 1e8, o = {
                    position: this.position,
                    alignment: this.alignment
                }; !this._positionsExhausted();) {
                    var s = S.OverlapArea(e, i, !1, !1, this.options.allowBottomOverlap);
                    if (0 === s) return;
                    s < n && (n = s, o = {
                        position: this.position,
                        alignment: this.alignment
                    }), this._reposition(), e.offset(S.GetExplicitOffsets(e, t, this.position, this.alignment, this._getVOffset(), this._getHOffset()))
                }
                this.position = o.position, this.alignment = o.alignment, e.offset(S.GetExplicitOffsets(e, t, this.position, this.alignment, this._getVOffset(), this._getHOffset()))
            }
        }
    }]), Ct);

    function Ct() {
        return s(this, Ct), h(this, d(Ct).apply(this, arguments))
    }
    xt.defaults = {
        position: "auto",
        alignment: "auto",
        allowOverlap: !1,
        allowBottomOverlap: !0,
        vOffset: 0,
        hOffset: 0
    };
    var Tt = (c(St, xt), l(St, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = t, this.options = g.a.extend({}, St.defaults, this.$element.data(), e), this.className = "Dropdown", ot.init(g.a), this._init(), M.register("Dropdown", {
                ENTER: "toggle",
                SPACE: "toggle",
                ESCAPE: "close"
            })
        }
    }, {
        key: "_init",
        value: function() {
            var t = this.$element.attr("id");
            this.$anchors = g()('[data-toggle="'.concat(t, '"]')).length ? g()('[data-toggle="'.concat(t, '"]')) : g()('[data-open="'.concat(t, '"]')), this.$anchors.attr({
                "aria-controls": t,
                "data-is-focus": !1,
                "data-yeti-box": t,
                "aria-haspopup": !0,
                "aria-expanded": !1
            }), this._setCurrentAnchor(this.$anchors.first()), this.options.parentClass ? this.$parent = this.$element.parents("." + this.options.parentClass) : this.$parent = null, void 0 === this.$element.attr("aria-labelledby") && (void 0 === this.$currentAnchor.attr("id") && this.$currentAnchor.attr("id", f(6, "dd-anchor")), this.$element.attr("aria-labelledby", this.$currentAnchor.attr("id"))), this.$element.attr({
                "aria-hidden": "true",
                "data-yeti-box": t,
                "data-resize": t
            }), p(d(St.prototype), "_init", this).call(this), this._events()
        }
    }, {
        key: "_getDefaultPosition",
        value: function() {
            var t = this.$element[0].className.match(/(top|left|right|bottom)/g);
            return t ? t[0] : "bottom"
        }
    }, {
        key: "_getDefaultAlignment",
        value: function() {
            var t = /float-(\S+)/.exec(this.$currentAnchor.attr("class"));
            return t ? t[1] : p(d(St.prototype), "_getDefaultAlignment", this).call(this)
        }
    }, {
        key: "_setPosition",
        value: function() {
            this.$element.removeClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment)), p(d(St.prototype), "_setPosition", this).call(this, this.$currentAnchor, this.$element, this.$parent), this.$element.addClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment))
        }
    }, {
        key: "_setCurrentAnchor",
        value: function(t) {
            this.$currentAnchor = g()(t)
        }
    }, {
        key: "_events",
        value: function() {
            var i = this;
            this.$element.on({
                "open.zf.trigger": this.open.bind(this),
                "close.zf.trigger": this.close.bind(this),
                "toggle.zf.trigger": this.toggle.bind(this),
                "resizeme.zf.trigger": this._setPosition.bind(this)
            }), this.$anchors.off("click.zf.trigger").on("click.zf.trigger", function() {
                i._setCurrentAnchor(this)
            }), this.options.hover && (this.$anchors.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                i._setCurrentAnchor(this);
                var t = g()("body").data();
                void 0 !== t.whatinput && "mouse" !== t.whatinput || (clearTimeout(i.timeout), i.timeout = setTimeout(function() {
                    i.open(), i.$anchors.data("hover", !0)
                }, i.options.hoverDelay))
            }).on("mouseleave.zf.dropdown", w(function() {
                clearTimeout(i.timeout), i.timeout = setTimeout(function() {
                    i.close(), i.$anchors.data("hover", !1)
                }, i.options.hoverDelay)
            })), this.options.hoverPane && this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                clearTimeout(i.timeout)
            }).on("mouseleave.zf.dropdown", w(function() {
                clearTimeout(i.timeout), i.timeout = setTimeout(function() {
                    i.close(), i.$anchors.data("hover", !1)
                }, i.options.hoverDelay)
            }))), this.$anchors.add(this.$element).on("keydown.zf.dropdown", function(t) {
                var e = g()(this);
                M.findFocusable(i.$element), M.handleKey(t, "Dropdown", {
                    open: function() {
                        e.is(i.$anchors) && !e.is("input, textarea") && (i.open(), i.$element.attr("tabindex", -1).focus(), t.preventDefault())
                    },
                    close: function() {
                        i.close(), i.$anchors.focus()
                    }
                })
            })
        }
    }, {
        key: "_addBodyHandler",
        value: function() {
            var e = g()(document.body).not(this.$element),
                i = this;
            e.off("click.zf.dropdown").on("click.zf.dropdown", function(t) {
                i.$anchors.is(t.target) || i.$anchors.find(t.target).length || i.$element.is(t.target) || i.$element.find(t.target).length || (i.close(), e.off("click.zf.dropdown"))
            })
        }
    }, {
        key: "open",
        value: function() {
            if (this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id")), this.$anchors.addClass("hover").attr({
                "aria-expanded": !0
            }), this.$element.addClass("is-opening"), this._setPosition(), this.$element.removeClass("is-opening").addClass("is-open").attr({
                "aria-hidden": !1
            }), this.options.autoFocus) {
                var t = M.findFocusable(this.$element);
                t.length && t.eq(0).focus()
            }
            this.options.closeOnClick && this._addBodyHandler(), this.options.trapFocus && M.trapFocus(this.$element), this.$element.trigger("show.zf.dropdown", [this.$element])
        }
    }, {
        key: "close",
        value: function() {
            if (!this.$element.hasClass("is-open")) return !1;
            this.$element.removeClass("is-open").attr({
                "aria-hidden": !0
            }), this.$anchors.removeClass("hover").attr("aria-expanded", !1), this.$element.trigger("hide.zf.dropdown", [this.$element]), this.options.trapFocus && M.releaseFocus(this.$element)
        }
    }, {
        key: "toggle",
        value: function() {
            if (this.$element.hasClass("is-open")) {
                if (this.$anchors.data("hover")) return;
                this.close()
            } else this.open()
        }
    }, {
        key: "_destroy",
        value: function() {
            this.$element.off(".zf.trigger").hide(), this.$anchors.off(".zf.dropdown"), g()(document.body).off("click.zf.dropdown")
        }
    }]), St);

    function St() {
        return s(this, St), h(this, d(St).apply(this, arguments))
    }
    Tt.defaults = {
        parentClass: null,
        hoverDelay: 250,
        hover: !1,
        hoverPane: !1,
        vOffset: 0,
        hOffset: 0,
        position: "auto",
        alignment: "auto",
        allowOverlap: !1,
        allowBottomOverlap: !0,
        trapFocus: !1,
        autoFocus: !1,
        closeOnClick: !1
    };
    var _t = (c(zt, at), l(zt, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = t, this.options = g.a.extend({}, zt.defaults, this.$element.data(), e), this.className = "DropdownMenu", this._init(), M.register("DropdownMenu", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "up",
                ARROW_DOWN: "down",
                ARROW_LEFT: "previous",
                ESCAPE: "close"
            })
        }
    }, {
        key: "_init",
        value: function() {
            F.Feather(this.$element, "dropdown");
            var t = this.$element.find("li.is-dropdown-submenu-parent");
            this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"), this.$menuItems = this.$element.find('[role="menuitem"]'), this.$tabs = this.$element.children('[role="menuitem"]'), this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass), "auto" === this.options.alignment ? this.$element.hasClass(this.options.rightClass) || m() || this.$element.parents(".top-bar-right").is("*") ? (this.options.alignment = "right", t.addClass("opens-left")) : (this.options.alignment = "left", t.addClass("opens-right")) : "right" === this.options.alignment ? t.addClass("opens-left") : t.addClass("opens-right"), this.changed = !1, this._events()
        }
    }, {
        key: "_isVertical",
        value: function() {
            return "block" === this.$tabs.css("display") || "column" === this.$element.css("flex-direction")
        }
    }, {
        key: "_isRtl",
        value: function() {
            return this.$element.hasClass("align-right") || m() && !this.$element.hasClass("align-left")
        }
    }, {
        key: "_events",
        value: function() {
            var u = this,
                s = "ontouchstart" in window || void 0 !== window.ontouchstart,
                a = "is-dropdown-submenu-parent";
            (this.options.clickOpen || s) && this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", function(t) {
                var e = g()(t.target).parentsUntil("ul", ".".concat(a)),
                    i = e.hasClass(a),
                    n = "true" === e.attr("data-is-click"),
                    o = e.children(".is-dropdown-submenu");
                if (i)
                    if (n) {
                        if (!u.options.closeOnClick || !u.options.clickOpen && !s || u.options.forceFollow && s) return;
                        t.stopImmediatePropagation(), t.preventDefault(), u._hide(e)
                    } else t.preventDefault(), t.stopImmediatePropagation(), u._show(o), e.add(e.parentsUntil(u.$element, ".".concat(a))).attr("data-is-click", !0)
            }), u.options.closeOnClickInside && this.$menuItems.on("click.zf.dropdownmenu", function(t) {
                g()(this).hasClass(a) || u._hide()
            }), this.options.disableHover || this.$menuItems.on("mouseenter.zf.dropdownmenu", function(t) {
                var e = g()(this);
                e.hasClass(a) && (clearTimeout(e.data("_delay")), e.data("_delay", setTimeout(function() {
                    u._show(e.children(".is-dropdown-submenu"))
                }, u.options.hoverDelay)))
            }).on("mouseleave.zf.dropdownMenu", w(function(t) {
                var e = g()(this);
                if (e.hasClass(a) && u.options.autoclose) {
                    if ("true" === e.attr("data-is-click") && u.options.clickOpen) return !1;
                    clearTimeout(e.data("_delay")), e.data("_delay", setTimeout(function() {
                        u._hide(e)
                    }, u.options.closingTime))
                }
            })), this.$menuItems.on("keydown.zf.dropdownmenu", function(e) {
                var i, n, o = g()(e.target).parentsUntil("ul", '[role="menuitem"]'),
                    t = -1 < u.$tabs.index(o),
                    s = t ? u.$tabs : o.siblings("li").add(o);

                function a() {
                    n.children("a:first").focus(), e.preventDefault()
                }

                function r() {
                    i.children("a:first").focus(), e.preventDefault()
                }

                function l() {
                    var t = o.children("ul.is-dropdown-submenu");
                    t.length && (u._show(t), o.find("li > a:first").focus(), e.preventDefault())
                }

                function c() {
                    var t = o.parent("ul").parent("li");
                    t.children("a:first").focus(), u._hide(t), e.preventDefault()
                }
                s.each(function(t) {
                    if (g()(this).is(o)) return i = s.eq(t - 1), void(n = s.eq(t + 1))
                });
                var d = {
                    open: l,
                    close: function() {
                        u._hide(u.$element), u.$menuItems.eq(0).children("a").focus(), e.preventDefault()
                    },
                    handled: function() {
                        e.stopImmediatePropagation()
                    }
                };
                t ? u._isVertical() ? u._isRtl() ? g.a.extend(d, {
                    down: a,
                    up: r,
                    next: c,
                    previous: l
                }) : g.a.extend(d, {
                    down: a,
                    up: r,
                    next: l,
                    previous: c
                }) : u._isRtl() ? g.a.extend(d, {
                    next: r,
                    previous: a,
                    down: l,
                    up: c
                }) : g.a.extend(d, {
                    next: a,
                    previous: r,
                    down: l,
                    up: c
                }) : u._isRtl() ? g.a.extend(d, {
                    next: c,
                    previous: l,
                    down: a,
                    up: r
                }) : g.a.extend(d, {
                    next: l,
                    previous: c,
                    down: a,
                    up: r
                }), M.handleKey(e, "DropdownMenu", d)
            })
        }
    }, {
        key: "_addBodyHandler",
        value: function() {
            var e = g()(document.body),
                i = this;
            e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function(t) {
                i.$element.find(t.target).length || (i._hide(), e.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))
            })
        }
    }, {
        key: "_show",
        value: function(i) {
            var t = this.$tabs.index(this.$tabs.filter(function(t, e) {
                    return 0 < g()(e).find(i).length
                })),
                e = i.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
            this._hide(e, t), i.css("visibility", "hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");
            var n = S.ImNotTouchingYou(i, null, !0);
            if (!n) {
                var o = "left" === this.options.alignment ? "-right" : "-left",
                    s = i.parent(".is-dropdown-submenu-parent");
                s.removeClass("opens".concat(o)).addClass("opens-".concat(this.options.alignment)), (n = S.ImNotTouchingYou(i, null, !0)) || s.removeClass("opens-".concat(this.options.alignment)).addClass("opens-inner"), this.changed = !0
            }
            i.css("visibility", ""), this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdownmenu", [i])
        }
    }, {
        key: "_hide",
        value: function(t, i) {
            var e;
            if ((e = t && t.length ? t : void 0 !== i ? this.$tabs.not(function(t, e) {
                return t === i
            }) : this.$element).hasClass("is-active") || 0 < e.find(".is-active").length) {
                if (e.find("li.is-active").add(e).attr({
                    "data-is-click": !1
                }).removeClass("is-active"), e.find("ul.js-dropdown-active").removeClass("js-dropdown-active"), this.changed || e.find("opens-inner").length) {
                    var n = "left" === this.options.alignment ? "right" : "left";
                    e.find("li.is-dropdown-submenu-parent").add(e).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(n)), this.changed = !1
                }
                this.$element.trigger("hide.zf.dropdownmenu", [e])
            }
        }
    }, {
        key: "_destroy",
        value: function() {
            this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"), g()(document.body).off(".zf.dropdownmenu"), F.Burn(this.$element, "dropdown")
        }
    }]), zt);

    function zt() {
        return s(this, zt), h(this, d(zt).apply(this, arguments))
    }
    _t.defaults = {
        disableHover: !1,
        autoclose: !0,
        hoverDelay: 50,
        clickOpen: !1,
        closingTime: 500,
        alignment: "auto",
        closeOnClick: !0,
        closeOnClickInside: !0,
        verticalClass: "vertical",
        rightClass: "align-right",
        forceFollow: !0
    };
    var At = (c(Et, at), l(Et, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = t, this.options = g.a.extend({}, Et.defaults, this.$element.data(), e), this.className = "Equalizer", this._init()
        }
    }, {
        key: "_init",
        value: function() {
            var t = this.$element.attr("data-equalizer") || "",
                e = this.$element.find('[data-equalizer-watch="'.concat(t, '"]'));
            k._init(), this.$watched = e.length ? e : this.$element.find("[data-equalizer-watch]"), this.$element.attr("data-resize", t || f(6, "eq")), this.$element.attr("data-mutate", t || f(6, "eq")), this.hasNested = 0 < this.$element.find("[data-equalizer]").length, this.isNested = 0 < this.$element.parentsUntil(document.body, "[data-equalizer]").length, this.isOn = !1, this._bindHandler = {
                onResizeMeBound: this._onResizeMe.bind(this),
                onPostEqualizedBound: this._onPostEqualized.bind(this)
            };
            var i, n = this.$element.find("img");
            this.options.equalizeOn ? (i = this._checkMQ(), g()(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events(), (void 0 !== i && !1 === i || void 0 === i) && (n.length ? E(n, this._reflow.bind(this)) : this._reflow())
        }
    }, {
        key: "_pauseEvents",
        value: function() {
            this.isOn = !1, this.$element.off({
                ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
                "resizeme.zf.trigger": this._bindHandler.onResizeMeBound,
                "mutateme.zf.trigger": this._bindHandler.onResizeMeBound
            })
        }
    }, {
        key: "_onResizeMe",
        value: function(t) {
            this._reflow()
        }
    }, {
        key: "_onPostEqualized",
        value: function(t) {
            t.target !== this.$element[0] && this._reflow()
        }
    }, {
        key: "_events",
        value: function() {
            this._pauseEvents(), this.hasNested ? this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound) : (this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound), this.$element.on("mutateme.zf.trigger", this._bindHandler.onResizeMeBound)), this.isOn = !0
        }
    }, {
        key: "_checkMQ",
        value: function() {
            var t = !k.is(this.options.equalizeOn);
            return t ? this.isOn && (this._pauseEvents(), this.$watched.css("height", "auto")) : this.isOn || this._events(), t
        }
    }, {
        key: "_killswitch",
        value: function() {}
    }, {
        key: "_reflow",
        value: function() {
            if (!this.options.equalizeOnStack && this._isStacked()) return this.$watched.css("height", "auto"), !1;
            this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) : this.getHeights(this.applyHeight.bind(this))
        }
    }, {
        key: "_isStacked",
        value: function() {
            return !this.$watched[0] || !this.$watched[1] || this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top
        }
    }, {
        key: "getHeights",
        value: function(t) {
            for (var e = [], i = 0, n = this.$watched.length; i < n; i++) this.$watched[i].style.height = "auto", e.push(this.$watched[i].offsetHeight);
            t(e)
        }
    }, {
        key: "getHeightsByRow",
        value: function(t) {
            var e = this.$watched.length ? this.$watched.first().offset().top : 0,
                i = [],
                n = 0;
            i[n] = [];
            for (var o = 0, s = this.$watched.length; o < s; o++) {
                this.$watched[o].style.height = "auto";
                var a = g()(this.$watched[o]).offset().top;
                a != e && (i[++n] = [], e = a), i[n].push([this.$watched[o], this.$watched[o].offsetHeight])
            }
            for (var r = 0, l = i.length; r < l; r++) {
                var c = g()(i[r]).map(function() {
                        return this[1]
                    }).get(),
                    d = Math.max.apply(null, c);
                i[r].push(d)
            }
            t(i)
        }
    }, {
        key: "applyHeight",
        value: function(t) {
            var e = Math.max.apply(null, t);
            this.$element.trigger("preequalized.zf.equalizer"), this.$watched.css("height", e), this.$element.trigger("postequalized.zf.equalizer")
        }
    }, {
        key: "applyHeightByRow",
        value: function(t) {
            this.$element.trigger("preequalized.zf.equalizer");
            for (var e = 0, i = t.length; e < i; e++) {
                var n = t[e].length,
                    o = t[e][n - 1];
                if (n <= 2) g()(t[e][0][0]).css({
                    height: "auto"
                });
                else {
                    this.$element.trigger("preequalizedrow.zf.equalizer");
                    for (var s = 0, a = n - 1; s < a; s++) g()(t[e][s][0]).css({
                        height: o
                    });
                    this.$element.trigger("postequalizedrow.zf.equalizer")
                }
            }
            this.$element.trigger("postequalized.zf.equalizer")
        }
    }, {
        key: "_destroy",
        value: function() {
            this._pauseEvents(), this.$watched.css("height", "auto")
        }
    }]), Et);

    function Et() {
        return s(this, Et), h(this, d(Et).apply(this, arguments))
    }
    At.defaults = {
        equalizeOnStack: !1,
        equalizeByRow: !1,
        equalizeOn: ""
    };
    var Pt = (c(Ot, at), l(Ot, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = t, this.options = g.a.extend({}, Ot.defaults, e), this.rules = [], this.currentPath = "", this.className = "Interchange", this._init(), this._events()
        }
    }, {
        key: "_init",
        value: function() {
            k._init();
            var t = this.$element[0].id || f(6, "interchange");
            this.$element.attr({
                "data-resize": t,
                id: t
            }), this._addBreakpoints(), this._generateRules(), this._reflow()
        }
    }, {
        key: "_events",
        value: function() {
            var t = this;
            this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function() {
                return t._reflow()
            })
        }
    }, {
        key: "_reflow",
        value: function() {
            var t;
            for (var e in this.rules)
                if (this.rules.hasOwnProperty(e)) {
                    var i = this.rules[e];
                    window.matchMedia(i.query).matches && (t = i)
                }
            t && this.replace(t.path)
        }
    }, {
        key: "_addBreakpoints",
        value: function() {
            for (var t in k.queries)
                if (k.queries.hasOwnProperty(t)) {
                    var e = k.queries[t];
                    Ot.SPECIAL_QUERIES[e.name] = e.value
                }
        }
    }, {
        key: "_generateRules",
        value: function(t) {
            var e, i = [];
            for (var n in e = "string" == typeof(e = this.options.rules ? this.options.rules : this.$element.data("interchange")) ? e.match(/\[.*?, .*?\]/g) : e)
                if (e.hasOwnProperty(n)) {
                    var o = e[n].slice(1, -1).split(", "),
                        s = o.slice(0, -1).join(""),
                        a = o[o.length - 1];
                    Ot.SPECIAL_QUERIES[a] && (a = Ot.SPECIAL_QUERIES[a]), i.push({
                        path: s,
                        query: a
                    })
                }
            this.rules = i
        }
    }, {
        key: "replace",
        value: function(e) {
            if (this.currentPath !== e) {
                var i = this,
                    n = "replaced.zf.interchange";
                "IMG" === this.$element[0].nodeName ? this.$element.attr("src", e).on("load", function() {
                    i.currentPath = e
                }).trigger(n) : e.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i) ? (e = e.replace(/\(/g, "%28").replace(/\)/g, "%29"), this.$element.css({
                    "background-image": "url(" + e + ")"
                }).trigger(n)) : g.a.get(e, function(t) {
                    i.$element.html(t).trigger(n), g()(t).foundation(), i.currentPath = e
                })
            }
        }
    }, {
        key: "_destroy",
        value: function() {
            this.$element.off("resizeme.zf.trigger")
        }
    }]), Ot);

    function Ot() {
        return s(this, Ot), h(this, d(Ot).apply(this, arguments))
    }
    Pt.defaults = {
        rules: null
    }, Pt.SPECIAL_QUERIES = {
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    };
    var Lt = (c(Dt, at), l(Dt, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = t, this.options = g.a.extend({}, Dt.defaults, this.$element.data(), e), this.className = "SmoothScroll", this._init()
        }
    }, {
        key: "_init",
        value: function() {
            var t = this.$element[0].id || f(6, "smooth-scroll");
            this.$element.attr({
                id: t
            }), this._events()
        }
    }, {
        key: "_events",
        value: function() {
            this._linkClickListener = this._handleLinkClick.bind(this), this.$element.on("click.zf.smoothScroll", this._linkClickListener), this.$element.on("click.zf.smoothScroll", 'a[href^="#"]', this._linkClickListener)
        }
    }, {
        key: "_handleLinkClick",
        value: function(t) {
            var e = this;
            if (g()(t.currentTarget).is('a[href^="#"]')) {
                var i = t.currentTarget.getAttribute("href");
                this._inTransition = !0, Dt.scrollToLoc(i, this.options, function() {
                    e._inTransition = !1
                }), t.preventDefault()
            }
        }
    }, {
        key: "_destroy",
        value: function() {
            this.$element.off("click.zf.smoothScroll", this._linkClickListener), this.$element.off("click.zf.smoothScroll", 'a[href^="#"]', this._linkClickListener)
        }
    }], [{
        key: "scrollToLoc",
        value: function(t) {
            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Dt.defaults,
                i = 2 < arguments.length ? arguments[2] : void 0,
                n = g()(t);
            if (!n.length) return !1;
            var o = Math.round(n.offset().top - e.threshold / 2 - e.offset);
            g()("html, body").stop(!0).animate({
                scrollTop: o
            }, e.animationDuration, e.animationEasing, function() {
                "function" == typeof i && i()
            })
        }
    }]), Dt);

    function Dt() {
        return s(this, Dt), h(this, d(Dt).apply(this, arguments))
    }
    Lt.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        offset: 0
    };
    var Mt = (c(Ht, at), l(Ht, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = t, this.options = g.a.extend({}, Ht.defaults, this.$element.data(), e), this.className = "Magellan", this._init(), this.calcPoints()
        }
    }, {
        key: "_init",
        value: function() {
            var t = this.$element[0].id || f(6, "magellan");
            this.$targets = g()("[data-magellan-target]"), this.$links = this.$element.find("a"), this.$element.attr({
                "data-resize": t,
                "data-scroll": t,
                id: t
            }), this.$active = g()(), this.scrollPos = parseInt(window.pageYOffset, 10), this._events()
        }
    }, {
        key: "calcPoints",
        value: function() {
            var i = this,
                t = document.body,
                e = document.documentElement;
            this.points = [], this.winHeight = Math.round(Math.max(window.innerHeight, e.clientHeight)), this.docHeight = Math.round(Math.max(t.scrollHeight, t.offsetHeight, e.clientHeight, e.scrollHeight, e.offsetHeight)), this.$targets.each(function() {
                var t = g()(this),
                    e = Math.round(t.offset().top - i.options.threshold);
                t.targetPoint = e, i.points.push(e)
            })
        }
    }, {
        key: "_events",
        value: function() {
            var i = this;
            g()("html, body"), i.options.animationDuration, i.options.animationEasing, g()(window).one("load", function() {
                i.options.deepLinking && location.hash && i.scrollToLoc(location.hash), i.calcPoints(), i._updateActive()
            }), i.onLoadListener = b(g()(window), function() {
                i.$element.on({
                    "resizeme.zf.trigger": i.reflow.bind(i),
                    "scrollme.zf.trigger": i._updateActive.bind(i)
                }).on("click.zf.magellan", 'a[href^="#"]', function(t) {
                    t.preventDefault();
                    var e = this.getAttribute("href");
                    i.scrollToLoc(e)
                })
            }), this._deepLinkScroll = function(t) {
                i.options.deepLinking && i.scrollToLoc(window.location.hash)
            }, g()(window).on("hashchange", this._deepLinkScroll)
        }
    }, {
        key: "scrollToLoc",
        value: function(t) {
            this._inTransition = !0;
            var e = this,
                i = {
                    animationEasing: this.options.animationEasing,
                    animationDuration: this.options.animationDuration,
                    threshold: this.options.threshold,
                    offset: this.options.offset
                };
            Lt.scrollToLoc(t, i, function() {
                e._inTransition = !1
            })
        }
    }, {
        key: "reflow",
        value: function() {
            this.calcPoints(), this._updateActive()
        }
    }, {
        key: "_updateActive",
        value: function() {
            var i = this;
            if (!this._inTransition) {
                var t, n = parseInt(window.pageYOffset, 10),
                    o = this.scrollPos > n;
                if ((this.scrollPos = n) < this.points[0]);
                else if (n + this.winHeight === this.docHeight) t = this.points.length - 1;
                else {
                    var e = this.points.filter(function(t, e) {
                        return t - i.options.offset - (o ? i.options.threshold : 0) <= n
                    });
                    t = e.length ? e.length - 1 : 0
                }
                var s = this.$active,
                    a = "";
                void 0 !== t ? (this.$active = this.$links.filter('[href="#' + this.$targets.eq(t).data("magellan-target") + '"]'), this.$active.length && (a = this.$active[0].getAttribute("href"))) : this.$active = g()();
                var r = !(!this.$active.length && !s.length || this.$active.is(s)),
                    l = a !== window.location.hash;
                if (r && (s.removeClass(this.options.activeClass), this.$active.addClass(this.options.activeClass)), this.options.deepLinking && l)
                    if (window.history.pushState) {
                        var c = a || window.location.pathname + window.location.search;
                        window.history.pushState(null, null, c)
                    } else window.location.hash = a;
                r && this.$element.trigger("update.zf.magellan", [this.$active])
            }
        }
    }, {
        key: "_destroy",
        value: function() {
            if (this.$element.off(".zf.trigger .zf.magellan").find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass), this.options.deepLinking) {
                var t = this.$active[0].getAttribute("href");
                window.location.hash.replace(t, "")
            }
            g()(window).off("hashchange", this._deepLinkScroll), this.onLoadListener && g()(window).off(this.onLoadListener)
        }
    }]), Ht);

    function Ht() {
        return s(this, Ht), h(this, d(Ht).apply(this, arguments))
    }
    Mt.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        activeClass: "is-active",
        deepLinking: !1,
        offset: 0
    };
    var It = (c(Rt, at), l(Rt, [{
        key: "_setup",
        value: function(t, e) {
            var i = this;
            this.className = "OffCanvas", this.$element = t, this.options = g.a.extend({}, Rt.defaults, this.$element.data(), e), this.contentClasses = {
                base: [],
                reveal: []
            }, this.$lastTrigger = g()(), this.$triggers = g()(), this.position = "left", this.$content = g()(), this.nested = !!this.options.nested, g()(["push", "overlap"]).each(function(t, e) {
                i.contentClasses.base.push("has-transition-" + e)
            }), g()(["left", "right", "top", "bottom"]).each(function(t, e) {
                i.contentClasses.base.push("has-position-" + e), i.contentClasses.reveal.push("has-reveal-" + e)
            }), ot.init(g.a), k._init(), this._init(), this._events(), M.register("OffCanvas", {
                ESCAPE: "close"
            })
        }
    }, {
        key: "_init",
        value: function() {
            var t = this.$element.attr("id");
            if (this.$element.attr("aria-hidden", "true"), this.options.contentId ? this.$content = g()("#" + this.options.contentId) : this.$element.siblings("[data-off-canvas-content]").length ? this.$content = this.$element.siblings("[data-off-canvas-content]").first() : this.$content = this.$element.closest("[data-off-canvas-content]").first(), this.options.contentId ? this.options.contentId && null === this.options.nested && console.warn("Remember to use the nested option if using the content ID option!") : this.nested = 0 === this.$element.siblings("[data-off-canvas-content]").length, !0 === this.nested && (this.options.transition = "overlap", this.$element.removeClass("is-transition-push")), this.$element.addClass("is-transition-".concat(this.options.transition, " is-closed")), this.$triggers = g()(document).find('[data-open="' + t + '"], [data-close="' + t + '"], [data-toggle="' + t + '"]').attr("aria-expanded", "false").attr("aria-controls", t), this.position = this.$element.is(".position-left, .position-top, .position-right, .position-bottom") ? this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1] : this.position, !0 === this.options.contentOverlay) {
                var e = document.createElement("div"),
                    i = "fixed" === g()(this.$element).css("position") ? "is-overlay-fixed" : "is-overlay-absolute";
                e.setAttribute("class", "js-off-canvas-overlay " + i), this.$overlay = g()(e), "is-overlay-fixed" == i ? g()(this.$overlay).insertAfter(this.$element) : this.$content.append(this.$overlay)
            }
            var n = new RegExp(v(this.options.revealClass) + "([^\\s]+)", "g").exec(this.$element[0].className);
            n && (this.options.isRevealed = !0, this.options.revealOn = this.options.revealOn || n[1]), !0 === this.options.isRevealed && this.options.revealOn && (this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn)), this._setMQChecker()), this.options.transitionTime && this.$element.css("transition-duration", this.options.transitionTime), this._removeContentClasses()
        }
    }, {
        key: "_events",
        value: function() {
            this.$element.off(".zf.trigger .zf.offcanvas").on({
                "open.zf.trigger": this.open.bind(this),
                "close.zf.trigger": this.close.bind(this),
                "toggle.zf.trigger": this.toggle.bind(this),
                "keydown.zf.offcanvas": this._handleKeyboard.bind(this)
            }), !0 === this.options.closeOnClick && (this.options.contentOverlay ? this.$overlay : this.$content).on({
                "click.zf.offcanvas": this.close.bind(this)
            })
        }
    }, {
        key: "_setMQChecker",
        value: function() {
            var t = this;
            this.onLoadListener = b(g()(window), function() {
                k.atLeast(t.options.revealOn) && t.reveal(!0)
            }), g()(window).on("changed.zf.mediaquery", function() {
                k.atLeast(t.options.revealOn) ? t.reveal(!0) : t.reveal(!1)
            })
        }
    }, {
        key: "_removeContentClasses",
        value: function(t) {
            "boolean" != typeof t ? this.$content.removeClass(this.contentClasses.base.join(" ")) : !1 === t && this.$content.removeClass("has-reveal-".concat(this.position))
        }
    }, {
        key: "_addContentClasses",
        value: function(t) {
            this._removeContentClasses(t), "boolean" != typeof t ? this.$content.addClass("has-transition-".concat(this.options.transition, " has-position-").concat(this.position)) : !0 === t && this.$content.addClass("has-reveal-".concat(this.position))
        }
    }, {
        key: "reveal",
        value: function(t) {
            t ? (this.close(), this.isRevealed = !0, this.$element.attr("aria-hidden", "false"), this.$element.off("open.zf.trigger toggle.zf.trigger"), this.$element.removeClass("is-closed")) : (this.isRevealed = !1, this.$element.attr("aria-hidden", "true"), this.$element.off("open.zf.trigger toggle.zf.trigger").on({
                "open.zf.trigger": this.open.bind(this),
                "toggle.zf.trigger": this.toggle.bind(this)
            }), this.$element.addClass("is-closed")), this._addContentClasses(t)
        }
    }, {
        key: "_stopScrolling",
        value: function(t) {
            return !1
        }
    }, {
        key: "_recordScrollable",
        value: function(t) {
            this.scrollHeight !== this.clientHeight && (0 === this.scrollTop && (this.scrollTop = 1), this.scrollTop === this.scrollHeight - this.clientHeight && (this.scrollTop = this.scrollHeight - this.clientHeight - 1)), this.allowUp = 0 < this.scrollTop, this.allowDown = this.scrollTop < this.scrollHeight - this.clientHeight, this.lastY = t.originalEvent.pageY
        }
    }, {
        key: "_stopScrollPropagation",
        value: function(t) {
            var e = t.pageY < this.lastY,
                i = !e;
            this.lastY = t.pageY, e && this.allowUp || i && this.allowDown ? t.stopPropagation() : t.preventDefault()
        }
    }, {
        key: "open",
        value: function(t, e) {
            if (!this.$element.hasClass("is-open") && !this.isRevealed) {
                var i = this;
                e && (this.$lastTrigger = e), "top" === this.options.forceTo ? window.scrollTo(0, 0) : "bottom" === this.options.forceTo && window.scrollTo(0, document.body.scrollHeight), this.options.transitionTime && "overlap" !== this.options.transition ? this.$element.siblings("[data-off-canvas-content]").css("transition-duration", this.options.transitionTime) : this.$element.siblings("[data-off-canvas-content]").css("transition-duration", ""), this.$element.addClass("is-open").removeClass("is-closed"), this.$triggers.attr("aria-expanded", "true"), this.$element.attr("aria-hidden", "false"), this.$content.addClass("is-open-" + this.position), !1 === this.options.contentScroll && (g()("body").addClass("is-off-canvas-open").on("touchmove", this._stopScrolling), this.$element.on("touchstart", this._recordScrollable), this.$element.on("touchmove", this._stopScrollPropagation)), !0 === this.options.contentOverlay && this.$overlay.addClass("is-visible"), !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.addClass("is-closable"), !0 === this.options.autoFocus && this.$element.one(y(this.$element), function() {
                    if (i.$element.hasClass("is-open")) {
                        var t = i.$element.find("[data-autofocus]");
                        t.length ? t.eq(0).focus() : i.$element.find("a, button").eq(0).focus()
                    }
                }), !0 === this.options.trapFocus && (this.$content.attr("tabindex", "-1"), M.trapFocus(this.$element)), this._addContentClasses(), this.$element.trigger("opened.zf.offcanvas")
            }
        }
    }, {
        key: "close",
        value: function(t) {
            if (this.$element.hasClass("is-open") && !this.isRevealed) {
                var e = this;
                this.$element.removeClass("is-open"), this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas"), this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom"), !1 === this.options.contentScroll && (g()("body").removeClass("is-off-canvas-open").off("touchmove", this._stopScrolling), this.$element.off("touchstart", this._recordScrollable), this.$element.off("touchmove", this._stopScrollPropagation)), !0 === this.options.contentOverlay && this.$overlay.removeClass("is-visible"), !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.removeClass("is-closable"), this.$triggers.attr("aria-expanded", "false"), !0 === this.options.trapFocus && (this.$content.removeAttr("tabindex"), M.releaseFocus(this.$element)), this.$element.one(y(this.$element), function(t) {
                    e.$element.addClass("is-closed"), e._removeContentClasses()
                })
            }
        }
    }, {
        key: "toggle",
        value: function(t, e) {
            this.$element.hasClass("is-open") ? this.close(t, e) : this.open(t, e)
        }
    }, {
        key: "_handleKeyboard",
        value: function(t) {
            var e = this;
            M.handleKey(t, "OffCanvas", {
                close: function() {
                    return e.close(), e.$lastTrigger.focus(), !0
                },
                handled: function() {
                    t.stopPropagation(), t.preventDefault()
                }
            })
        }
    }, {
        key: "_destroy",
        value: function() {
            this.close(), this.$element.off(".zf.trigger .zf.offcanvas"), this.$overlay.off(".zf.offcanvas"), this.onLoadListener && g()(window).off(this.onLoadListener)
        }
    }]), Rt);

    function Rt() {
        return s(this, Rt), h(this, d(Rt).apply(this, arguments))
    }
    It.defaults = {
        closeOnClick: !0,
        contentOverlay: !0,
        contentId: null,
        nested: null,
        contentScroll: !0,
        transitionTime: null,
        transition: "push",
        forceTo: null,
        isRevealed: !1,
        revealOn: null,
        autoFocus: !0,
        revealClass: "reveal-for-",
        trapFocus: !1
    };
    var jt = (c(qt, at), l(qt, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = t, this.options = g.a.extend({}, qt.defaults, this.$element.data(), e), this.className = "Orbit", U.init(g.a), this._init(), M.register("Orbit", {
                ltr: {
                    ARROW_RIGHT: "next",
                    ARROW_LEFT: "previous"
                },
                rtl: {
                    ARROW_LEFT: "next",
                    ARROW_RIGHT: "previous"
                }
            })
        }
    }, {
        key: "_init",
        value: function() {
            this._reset(), this.$wrapper = this.$element.find(".".concat(this.options.containerClass)), this.$slides = this.$element.find(".".concat(this.options.slideClass));
            var t = this.$element.find("img"),
                e = this.$slides.filter(".is-active"),
                i = this.$element[0].id || f(6, "orbit");
            this.$element.attr({
                "data-resize": i,
                id: i
            }), e.length || this.$slides.eq(0).addClass("is-active"), this.options.useMUI || this.$slides.addClass("no-motionui"), t.length ? E(t, this._prepareForOrbit.bind(this)) : this._prepareForOrbit(), this.options.bullets && this._loadBullets(), this._events(), this.options.autoPlay && 1 < this.$slides.length && this.geoSync(), this.options.accessible && this.$wrapper.attr("tabindex", 0)
        }
    }, {
        key: "_loadBullets",
        value: function() {
            this.$bullets = this.$element.find(".".concat(this.options.boxOfBullets)).find("button")
        }
    }, {
        key: "geoSync",
        value: function() {
            var t = this;
            this.timer = new N(this.$element, {
                duration: this.options.timerDelay,
                infinite: !1
            }, function() {
                t.changeSlide(!0)
            }), this.timer.start()
        }
    }, {
        key: "_prepareForOrbit",
        value: function() {
            this._setWrapperHeight()
        }
    }, {
        key: "_setWrapperHeight",
        value: function(t) {
            var e, i = 0,
                n = 0,
                o = this;
            this.$slides.each(function() {
                e = this.getBoundingClientRect().height, g()(this).attr("data-slide", n), /mui/g.test(g()(this)[0].className) || o.$slides.filter(".is-active")[0] === o.$slides.eq(n)[0] || g()(this).css({
                    display: "none"
                }), i = i < e ? e : i, n++
            }), n === this.$slides.length && (this.$wrapper.css({
                height: i
            }), t && t(i))
        }
    }, {
        key: "_setSlideHeight",
        value: function(t) {
            this.$slides.each(function() {
                g()(this).css("max-height", t)
            })
        }
    }, {
        key: "_events",
        value: function() {
            var n = this;
            this.$element.off(".resizeme.zf.trigger").on({
                "resizeme.zf.trigger": this._prepareForOrbit.bind(this)
            }), 1 < this.$slides.length && (this.options.swipe && this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function(t) {
                t.preventDefault(), n.changeSlide(!0)
            }).on("swiperight.zf.orbit", function(t) {
                t.preventDefault(), n.changeSlide(!1)
            }), this.options.autoPlay && (this.$slides.on("click.zf.orbit", function() {
                n.$element.data("clickedOn", !n.$element.data("clickedOn")), n.timer[n.$element.data("clickedOn") ? "pause" : "start"]()
            }), this.options.pauseOnHover && this.$element.on("mouseenter.zf.orbit", function() {
                n.timer.pause()
            }).on("mouseleave.zf.orbit", function() {
                n.$element.data("clickedOn") || n.timer.start()
            })), this.options.navButtons && this.$element.find(".".concat(this.options.nextClass, ", .").concat(this.options.prevClass)).attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function(t) {
                t.preventDefault(), n.changeSlide(g()(this).hasClass(n.options.nextClass))
            }), this.options.bullets && this.$bullets.on("click.zf.orbit touchend.zf.orbit", function() {
                if (/is-active/g.test(this.className)) return !1;
                var t = g()(this).data("slide"),
                    e = t > n.$slides.filter(".is-active").data("slide"),
                    i = n.$slides.eq(t);
                n.changeSlide(e, i, t)
            }), this.options.accessible && this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function(t) {
                M.handleKey(t, "Orbit", {
                    next: function() {
                        n.changeSlide(!0)
                    },
                    previous: function() {
                        n.changeSlide(!1)
                    },
                    handled: function() {
                        g()(t.target).is(n.$bullets) && n.$bullets.filter(".is-active").focus()
                    }
                })
            }))
        }
    }, {
        key: "_reset",
        value: function() {
            void 0 !== this.$slides && 1 < this.$slides.length && (this.$element.off(".zf.orbit").find("*").off(".zf.orbit"), this.options.autoPlay && this.timer.restart(), this.$slides.each(function(t) {
                g()(t).removeClass("is-active is-active is-in").removeAttr("aria-live").hide()
            }), this.$slides.first().addClass("is-active").show(), this.$element.trigger("slidechange.zf.orbit", [this.$slides.first()]), this.options.bullets && this._updateBullets(0))
        }
    }, {
        key: "changeSlide",
        value: function(t, e, i) {
            if (this.$slides) {
                var n = this.$slides.filter(".is-active").eq(0);
                if (/mui/g.test(n[0].className)) return !1;
                var o, s = this.$slides.first(),
                    a = this.$slides.last(),
                    r = t ? "Right" : "Left",
                    l = t ? "Left" : "Right",
                    c = this;
                (o = e || (t ? this.options.infiniteWrap ? n.next(".".concat(this.options.slideClass)).length ? n.next(".".concat(this.options.slideClass)) : s : n.next(".".concat(this.options.slideClass)) : this.options.infiniteWrap ? n.prev(".".concat(this.options.slideClass)).length ? n.prev(".".concat(this.options.slideClass)) : a : n.prev(".".concat(this.options.slideClass)))).length && (this.$element.trigger("beforeslidechange.zf.orbit", [n, o]), this.options.bullets && (i = i || this.$slides.index(o), this._updateBullets(i)), this.options.useMUI && !this.$element.is(":hidden") ? (R.animateIn(o.addClass("is-active"), this.options["animInFrom".concat(r)], function() {
                    o.css({
                        display: "block"
                    }).attr("aria-live", "polite")
                }), R.animateOut(n.removeClass("is-active"), this.options["animOutTo".concat(l)], function() {
                    n.removeAttr("aria-live"), c.options.autoPlay && !c.timer.isPaused && c.timer.restart()
                })) : (n.removeClass("is-active is-in").removeAttr("aria-live").hide(), o.addClass("is-active is-in").attr("aria-live", "polite").show(), this.options.autoPlay && !this.timer.isPaused && this.timer.restart()), this.$element.trigger("slidechange.zf.orbit", [o]))
            }
        }
    }, {
        key: "_updateBullets",
        value: function(t) {
            var e = this.$element.find(".".concat(this.options.boxOfBullets)).find(".is-active").removeClass("is-active").blur().find("span:last").detach();
            this.$bullets.eq(t).addClass("is-active").append(e)
        }
    }, {
        key: "_destroy",
        value: function() {
            this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide()
        }
    }]), qt);

    function qt() {
        return s(this, qt), h(this, d(qt).apply(this, arguments))
    }
    jt.defaults = {
        bullets: !0,
        navButtons: !0,
        animInFromRight: "slide-in-right",
        animOutToRight: "slide-out-right",
        animInFromLeft: "slide-in-left",
        animOutToLeft: "slide-out-left",
        autoPlay: !0,
        timerDelay: 5e3,
        infiniteWrap: !0,
        swipe: !0,
        pauseOnHover: !0,
        accessible: !0,
        containerClass: "orbit-container",
        slideClass: "orbit-slide",
        boxOfBullets: "orbit-bullets",
        nextClass: "orbit-next",
        prevClass: "orbit-previous",
        useMUI: !0
    };
    var Ft = {
            dropdown: {
                cssClass: "dropdown",
                plugin: _t
            },
            drilldown: {
                cssClass: "drilldown",
                plugin: mt
            },
            accordion: {
                cssClass: "accordion-menu",
                plugin: ft
            }
        },
        Nt = (c(Bt, at), l(Bt, [{
            key: "_setup",
            value: function(t, e) {
                this.$element = g()(t), this.rules = this.$element.data("responsive-menu"), this.currentMq = null, this.currentPlugin = null, this.className = "ResponsiveMenu", this._init(), this._events()
            }
        }, {
            key: "_init",
            value: function() {
                if (k._init(), "string" == typeof this.rules) {
                    for (var t = {}, e = this.rules.split(" "), i = 0; i < e.length; i++) {
                        var n = e[i].split("-"),
                            o = 1 < n.length ? n[0] : "small",
                            s = 1 < n.length ? n[1] : n[0];
                        null !== Ft[s] && (t[o] = Ft[s])
                    }
                    this.rules = t
                }
                g.a.isEmptyObject(this.rules) || this._checkMediaQueries(), this.$element.attr("data-mutate", this.$element.attr("data-mutate") || f(6, "responsive-menu"))
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                g()(window).on("changed.zf.mediaquery", function() {
                    t._checkMediaQueries()
                })
            }
        }, {
            key: "_checkMediaQueries",
            value: function() {
                var e, i = this;
                g.a.each(this.rules, function(t) {
                    k.atLeast(t) && (e = t)
                }), e && (this.currentPlugin instanceof this.rules[e].plugin || (g.a.each(Ft, function(t, e) {
                    i.$element.removeClass(e.cssClass)
                }), this.$element.addClass(this.rules[e].cssClass), this.currentPlugin && this.currentPlugin.destroy(), this.currentPlugin = new this.rules[e].plugin(this.$element, {})))
            }
        }, {
            key: "_destroy",
            value: function() {
                this.currentPlugin.destroy(), g()(window).off(".zf.ResponsiveMenu")
            }
        }]), Bt);

    function Bt() {
        return s(this, Bt), h(this, d(Bt).apply(this, arguments))
    }
    Nt.defaults = {};
    var Wt = (c(Yt, at), l(Yt, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = g()(t), this.options = g.a.extend({}, Yt.defaults, this.$element.data(), e), this.className = "ResponsiveToggle", this._init(), this._events()
        }
    }, {
        key: "_init",
        value: function() {
            k._init();
            var e = this.$element.data("responsive-toggle");
            if (e || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."), this.$targetMenu = g()("#".concat(e)), this.$toggler = this.$element.find("[data-toggle]").filter(function() {
                var t = g()(this).data("toggle");
                return t === e || "" === t
            }), this.options = g.a.extend({}, this.options, this.$targetMenu.data()), this.options.animate) {
                var t = this.options.animate.split(" ");
                this.animationIn = t[0], this.animationOut = t[1] || null
            }
            this._update()
        }
    }, {
        key: "_events",
        value: function() {
            this._updateMqHandler = this._update.bind(this), g()(window).on("changed.zf.mediaquery", this._updateMqHandler), this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this))
        }
    }, {
        key: "_update",
        value: function() {
            k.atLeast(this.options.hideFor) ? (this.$element.hide(), this.$targetMenu.show()) : (this.$element.show(), this.$targetMenu.hide())
        }
    }, {
        key: "toggleMenu",
        value: function() {
            var t = this;
            k.atLeast(this.options.hideFor) || (this.options.animate ? this.$targetMenu.is(":hidden") ? R.animateIn(this.$targetMenu, this.animationIn, function() {
                t.$element.trigger("toggled.zf.responsiveToggle"), t.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger")
            }) : R.animateOut(this.$targetMenu, this.animationOut, function() {
                t.$element.trigger("toggled.zf.responsiveToggle")
            }) : (this.$targetMenu.toggle(0), this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger"), this.$element.trigger("toggled.zf.responsiveToggle")))
        }
    }, {
        key: "_destroy",
        value: function() {
            this.$element.off(".zf.responsiveToggle"), this.$toggler.off(".zf.responsiveToggle"), g()(window).off("changed.zf.mediaquery", this._updateMqHandler)
        }
    }]), Yt);

    function Yt() {
        return s(this, Yt), h(this, d(Yt).apply(this, arguments))
    }
    Wt.defaults = {
        hideFor: "medium",
        animate: !1
    };
    var Xt = (c(Ut, at), l(Ut, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = t, this.options = g.a.extend({}, Ut.defaults, this.$element.data(), e), this.className = "Reveal", this._init(), ot.init(g.a), M.register("Reveal", {
                ESCAPE: "close"
            })
        }
    }, {
        key: "_init",
        value: function() {
            var t = this;
            k._init(), this.id = this.$element.attr("id"), this.isActive = !1, this.cached = {
                mq: k.current
            }, this.$anchor = g()('[data-open="'.concat(this.id, '"]')).length ? g()('[data-open="'.concat(this.id, '"]')) : g()('[data-toggle="'.concat(this.id, '"]')), this.$anchor.attr({
                "aria-controls": this.id,
                "aria-haspopup": !0,
                tabindex: 0
            }), (this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0, this.options.overlay = !1), this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)), this.$element.attr({
                role: "dialog",
                "aria-hidden": !0,
                "data-yeti-box": this.id,
                "data-resize": this.id
            }), this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo(g()(this.options.appendTo)), this.$element.addClass("without-overlay")), this._events(), this.options.deepLink && window.location.hash === "#".concat(this.id) && (this.onLoadListener = b(g()(window), function() {
                return t.open()
            }))
        }
    }, {
        key: "_makeOverlay",
        value: function() {
            var t = "";
            return this.options.additionalOverlayClasses && (t = " " + this.options.additionalOverlayClasses), g()("<div></div>").addClass("reveal-overlay" + t).appendTo(this.options.appendTo)
        }
    }, {
        key: "_updatePosition",
        value: function() {
            var t, e = this.$element.outerWidth(),
                i = g()(window).width(),
                n = this.$element.outerHeight(),
                o = g()(window).height(),
                s = null;
            t = "auto" === this.options.hOffset ? parseInt((i - e) / 2, 10) : parseInt(this.options.hOffset, 10), "auto" === this.options.vOffset ? s = o < n ? parseInt(Math.min(100, o / 10), 10) : parseInt((o - n) / 4, 10) : null !== this.options.vOffset && (s = parseInt(this.options.vOffset, 10)), null !== s && this.$element.css({
                top: s + "px"
            }), this.$overlay && "auto" === this.options.hOffset || (this.$element.css({
                left: t + "px"
            }), this.$element.css({
                margin: "0px"
            }))
        }
    }, {
        key: "_events",
        value: function() {
            var i = this,
                n = this;
            this.$element.on({
                "open.zf.trigger": this.open.bind(this),
                "close.zf.trigger": function(t, e) {
                    if (t.target === n.$element[0] || g()(t.target).parents("[data-closable]")[0] === e) return i.close.apply(i)
                },
                "toggle.zf.trigger": this.toggle.bind(this),
                "resizeme.zf.trigger": function() {
                    n._updatePosition()
                }
            }), this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.reveal", function(t) {
                t.target !== n.$element[0] && !g.a.contains(n.$element[0], t.target) && g.a.contains(document, t.target) && n.close()
            }), this.options.deepLink && g()(window).on("hashchange.zf.reveal:".concat(this.id), this._handleState.bind(this))
        }
    }, {
        key: "_handleState",
        value: function(t) {
            window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open()
        }
    }, {
        key: "_disableScroll",
        value: function(t) {
            t = t || g()(window).scrollTop(), g()(document).height() > g()(window).height() && g()("html").css("top", -t)
        }
    }, {
        key: "_enableScroll",
        value: function(t) {
            t = t || parseInt(g()("html").css("top")), g()(document).height() > g()(window).height() && (g()("html").css("top", ""), g()(window).scrollTop(-t))
        }
    }, {
        key: "open",
        value: function() {
            var t = this,
                e = "#".concat(this.id);
            this.options.deepLink && window.location.hash !== e && (window.history.pushState ? this.options.updateHistory ? window.history.pushState({}, "", e) : window.history.replaceState({}, "", e) : window.location.hash = e), this.$activeAnchor = g()(document.activeElement).is(this.$anchor) ? g()(document.activeElement) : this.$anchor, this.isActive = !0, this.$element.css({
                visibility: "hidden"
            }).show().scrollTop(0), this.options.overlay && this.$overlay.css({
                visibility: "hidden"
            }).show(), this._updatePosition(), this.$element.hide().css({
                visibility: ""
            }), this.$overlay && (this.$overlay.css({
                visibility: ""
            }).hide(), this.$element.hasClass("fast") ? this.$overlay.addClass("fast") : this.$element.hasClass("slow") && this.$overlay.addClass("slow")), this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id), this._disableScroll();
            var i = this;
            this.options.animationIn ? (this.options.overlay && R.animateIn(this.$overlay, "fade-in"), R.animateIn(this.$element, this.options.animationIn, function() {
                t.$element && (t.focusableElements = M.findFocusable(t.$element), i.$element.attr({
                    "aria-hidden": !1,
                    tabindex: -1
                }).focus(), i._addGlobalClasses(), M.trapFocus(i.$element))
            })) : (this.options.overlay && this.$overlay.show(0), this.$element.show(this.options.showDelay)), this.$element.attr({
                "aria-hidden": !1,
                tabindex: -1
            }).focus(), M.trapFocus(this.$element), this._addGlobalClasses(), this._addGlobalListeners(), this.$element.trigger("open.zf.reveal")
        }
    }, {
        key: "_addGlobalClasses",
        value: function() {
            function t() {
                g()("html").toggleClass("zf-has-scroll", !!(g()(document).height() > g()(window).height()))
            }
            this.$element.on("resizeme.zf.trigger.revealScrollbarListener", function() {
                return t()
            }), t(), g()("html").addClass("is-reveal-open")
        }
    }, {
        key: "_removeGlobalClasses",
        value: function() {
            this.$element.off("resizeme.zf.trigger.revealScrollbarListener"), g()("html").removeClass("is-reveal-open"), g()("html").removeClass("zf-has-scroll")
        }
    }, {
        key: "_addGlobalListeners",
        value: function() {
            var e = this;
            this.$element && (this.focusableElements = M.findFocusable(this.$element), this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || g()("body").on("click.zf.reveal", function(t) {
                t.target !== e.$element[0] && !g.a.contains(e.$element[0], t.target) && g.a.contains(document, t.target) && e.close()
            }), this.options.closeOnEsc && g()(window).on("keydown.zf.reveal", function(t) {
                M.handleKey(t, "Reveal", {
                    close: function() {
                        e.options.closeOnEsc && e.close()
                    }
                })
            }))
        }
    }, {
        key: "close",
        value: function() {
            if (!this.isActive || !this.$element.is(":visible")) return !1;
            var e = this;

            function t() {
                var t = parseInt(g()("html").css("top"));
                0 === g()(".reveal:visible").length && e._removeGlobalClasses(), M.releaseFocus(e.$element), e.$element.attr("aria-hidden", !0), e._enableScroll(t), e.$element.trigger("closed.zf.reveal")
            }
            if (this.options.animationOut ? (this.options.overlay && R.animateOut(this.$overlay, "fade-out"), R.animateOut(this.$element, this.options.animationOut, t)) : (this.$element.hide(this.options.hideDelay), this.options.overlay ? this.$overlay.hide(0, t) : t()), this.options.closeOnEsc && g()(window).off("keydown.zf.reveal"), !this.options.overlay && this.options.closeOnClick && g()("body").off("click.zf.reveal"), this.$element.off("keydown.zf.reveal"), this.options.resetOnClose && this.$element.html(this.$element.html()), this.isActive = !1, e.options.deepLink && window.location.hash === "#".concat(this.id))
                if (window.history.replaceState) {
                    var i = window.location.pathname + window.location.search;
                    this.options.updateHistory ? window.history.pushState({}, "", i) : window.history.replaceState("", document.title, i)
                } else window.location.hash = "";
            this.$activeAnchor.focus()
        }
    }, {
        key: "toggle",
        value: function() {
            this.isActive ? this.close() : this.open()
        }
    }, {
        key: "_destroy",
        value: function() {
            this.options.overlay && (this.$element.appendTo(g()(this.options.appendTo)), this.$overlay.hide().off().remove()), this.$element.hide().off(), this.$anchor.off(".zf"), g()(window).off(".zf.reveal:".concat(this.id)), this.onLoadListener && g()(window).off(this.onLoadListener), 0 === g()(".reveal:visible").length && this._removeGlobalClasses()
        }
    }]), Ut);

    function Ut() {
        return s(this, Ut), h(this, d(Ut).apply(this, arguments))
    }
    Xt.defaults = {
        animationIn: "",
        animationOut: "",
        showDelay: 0,
        hideDelay: 0,
        closeOnClick: !0,
        closeOnEsc: !0,
        multipleOpened: !1,
        vOffset: "auto",
        hOffset: "auto",
        fullScreen: !1,
        overlay: !0,
        resetOnClose: !1,
        deepLink: !1,
        updateHistory: !1,
        appendTo: "body",
        additionalOverlayClasses: ""
    };
    var Vt = (c(Gt, at), l(Gt, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = t, this.options = g.a.extend({}, Gt.defaults, this.$element.data(), e), this.className = "Slider", U.init(g.a), ot.init(g.a), this._init(), M.register("Slider", {
                ltr: {
                    ARROW_RIGHT: "increase",
                    ARROW_UP: "increase",
                    ARROW_DOWN: "decrease",
                    ARROW_LEFT: "decrease",
                    SHIFT_ARROW_RIGHT: "increase_fast",
                    SHIFT_ARROW_UP: "increase_fast",
                    SHIFT_ARROW_DOWN: "decrease_fast",
                    SHIFT_ARROW_LEFT: "decrease_fast",
                    HOME: "min",
                    END: "max"
                },
                rtl: {
                    ARROW_LEFT: "increase",
                    ARROW_RIGHT: "decrease",
                    SHIFT_ARROW_LEFT: "increase_fast",
                    SHIFT_ARROW_RIGHT: "decrease_fast"
                }
            })
        }
    }, {
        key: "_init",
        value: function() {
            this.inputs = this.$element.find("input"), this.handles = this.$element.find("[data-slider-handle]"), this.$handle = this.handles.eq(0), this.$input = this.inputs.length ? this.inputs.eq(0) : g()("#".concat(this.$handle.attr("aria-controls"))), this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0), (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) && (this.options.disabled = !0, this.$element.addClass(this.options.disabledClass)), this.inputs.length || (this.inputs = g()().add(this.$input), this.options.binding = !0), this._setInitAttr(0), this.handles[1] && (this.options.doubleSided = !0, this.$handle2 = this.handles.eq(1), this.$input2 = 1 < this.inputs.length ? this.inputs.eq(1) : g()("#".concat(this.$handle2.attr("aria-controls"))), this.inputs[1] || (this.inputs = this.inputs.add(this.$input2)), this._setInitAttr(1)), this.setHandles(), this._events()
        }
    }, {
        key: "setHandles",
        value: function() {
            var t = this;
            this.handles[1] ? this._setHandlePos(this.$handle, this.inputs.eq(0).val(), !0, function() {
                t._setHandlePos(t.$handle2, t.inputs.eq(1).val(), !0)
            }) : this._setHandlePos(this.$handle, this.inputs.eq(0).val(), !0)
        }
    }, {
        key: "_reflow",
        value: function() {
            this.setHandles()
        }
    }, {
        key: "_pctOfBar",
        value: function(t) {
            var e = Kt(t - this.options.start, this.options.end - this.options.start);
            switch (this.options.positionValueFunction) {
                case "pow":
                    e = this._logTransform(e);
                    break;
                case "log":
                    e = this._powTransform(e)
            }
            return e.toFixed(2)
        }
    }, {
        key: "_value",
        value: function(t) {
            switch (this.options.positionValueFunction) {
                case "pow":
                    t = this._powTransform(t);
                    break;
                case "log":
                    t = this._logTransform(t)
            }
            return (this.options.end - this.options.start) * t + parseFloat(this.options.start)
        }
    }, {
        key: "_logTransform",
        value: function(t) {
            return e = this.options.nonLinearBase, i = t * (this.options.nonLinearBase - 1) + 1, Math.log(i) / Math.log(e);
            var e, i
        }
    }, {
        key: "_powTransform",
        value: function(t) {
            return (Math.pow(this.options.nonLinearBase, t) - 1) / (this.options.nonLinearBase - 1)
        }
    }, {
        key: "_setHandlePos",
        value: function(t, e, i, n) {
            if (!this.$element.hasClass(this.options.disabledClass)) {
                (e = parseFloat(e)) < this.options.start ? e = this.options.start : e > this.options.end && (e = this.options.end);
                var o = this.options.doubleSided;
                if (this.options.vertical && !i && (e = this.options.end - e), o)
                    if (0 === this.handles.index(t)) {
                        var s = parseFloat(this.$handle2.attr("aria-valuenow"));
                        e = s <= e ? s - this.options.step : e
                    } else {
                        var a = parseFloat(this.$handle.attr("aria-valuenow"));
                        e = e <= a ? a + this.options.step : e
                    }
                var r = this,
                    l = this.options.vertical,
                    c = l ? "height" : "width",
                    d = l ? "top" : "left",
                    u = t[0].getBoundingClientRect()[c],
                    h = this.$element[0].getBoundingClientRect()[c],
                    p = this._pctOfBar(e),
                    f = (100 * Kt((h - u) * p, h)).toFixed(this.options.decimal);
                e = parseFloat(e.toFixed(this.options.decimal));
                var g = {};
                if (this._setValues(t, e), o) {
                    var m, v = 0 === this.handles.index(t),
                        y = ~~(100 * Kt(u, h));
                    if (v) g[d] = "".concat(f, "%"), m = parseFloat(this.$handle2[0].style[d]) - f + y, n && "function" == typeof n && n();
                    else {
                        var b = parseFloat(this.$handle[0].style[d]);
                        m = f - (isNaN(b) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : b) + y
                    }
                    g["min-".concat(c)] = "".concat(m, "%")
                }
                this.$element.one("finished.zf.animate", function() {
                    r.$element.trigger("moved.zf.slider", [t])
                }), j(this.$element.data("dragging") ? 1e3 / 60 : this.options.moveTime, t, function() {
                    isNaN(f) ? t.css(d, "".concat(100 * p, "%")) : t.css(d, "".concat(f, "%")), r.options.doubleSided ? r.$fill.css(g) : r.$fill.css(c, "".concat(100 * p, "%"))
                }), clearTimeout(r.timeout), r.timeout = setTimeout(function() {
                    r.$element.trigger("changed.zf.slider", [t])
                }, r.options.changedDelay)
            }
        }
    }, {
        key: "_setInitAttr",
        value: function(t) {
            var e = 0 === t ? this.options.initialStart : this.options.initialEnd,
                i = this.inputs.eq(t).attr("id") || f(6, "slider");
            this.inputs.eq(t).attr({
                id: i,
                max: this.options.end,
                min: this.options.start,
                step: this.options.step
            }), this.inputs.eq(t).val(e), this.handles.eq(t).attr({
                role: "slider",
                "aria-controls": i,
                "aria-valuemax": this.options.end,
                "aria-valuemin": this.options.start,
                "aria-valuenow": e,
                "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
                tabindex: 0
            })
        }
    }, {
        key: "_setValues",
        value: function(t, e) {
            var i = this.options.doubleSided ? this.handles.index(t) : 0;
            this.inputs.eq(i).val(e), t.attr("aria-valuenow", e)
        }
    }, {
        key: "_handleEvent",
        value: function(t, e, i) {
            var n, o;
            if (i) n = this._adjustValue(null, i), o = !0;
            else {
                t.preventDefault();
                var s = this.options.vertical,
                    a = s ? "height" : "width",
                    r = s ? "top" : "left",
                    l = s ? t.pageY : t.pageX,
                    c = (this.$handle[0].getBoundingClientRect()[a], this.$element[0].getBoundingClientRect()[a]),
                    d = s ? g()(window).scrollTop() : g()(window).scrollLeft(),
                    u = this.$element.offset()[r];
                t.clientY === t.pageY && (l += d);
                var h, p = l - u,
                    f = Kt(h = p < 0 ? 0 : c < p ? c : p, c);
                n = this._value(f), m() && !this.options.vertical && (n = this.options.end - n), n = this._adjustValue(null, n), o = !1, e = e || (Zt(this.$handle, r, h, a) <= Zt(this.$handle2, r, h, a) ? this.$handle : this.$handle2)
            }
            this._setHandlePos(e, n, o)
        }
    }, {
        key: "_adjustValue",
        value: function(t, e) {
            var i, n, o, s = this.options.step,
                a = parseFloat(s / 2);
            return 0 === (n = 0 <= (i = t ? parseFloat(t.attr("aria-valuenow")) : e) ? i % s : s + i % s) ? i : i = i >= (o = i - n) + a ? o + s : o
        }
    }, {
        key: "_events",
        value: function() {
            this._eventsForHandle(this.$handle), this.handles[1] && this._eventsForHandle(this.$handle2)
        }
    }, {
        key: "_eventsForHandle",
        value: function(e) {
            function i(t) {
                var e = s.inputs.index(g()(this));
                s._handleEvent(t, s.handles.eq(e), g()(this).val())
            }
            var n, s = this;
            if (this.inputs.off("keyup.zf.slider").on("keyup.zf.slider", function(t) {
                13 == t.keyCode && i.call(this, t)
            }), this.inputs.off("change.zf.slider").on("change.zf.slider", i), this.options.clickSelect && this.$element.off("click.zf.slider").on("click.zf.slider", function(t) {
                if (s.$element.data("dragging")) return !1;
                g()(t.target).is("[data-slider-handle]") || (s.options.doubleSided ? s._handleEvent(t) : s._handleEvent(t, s.$handle))
            }), this.options.draggable) {
                this.handles.addTouch();
                var o = g()("body");
                e.off("mousedown.zf.slider").on("mousedown.zf.slider", function(t) {
                    e.addClass("is-dragging"), s.$fill.addClass("is-dragging"), s.$element.data("dragging", !0), n = g()(t.currentTarget), o.on("mousemove.zf.slider", function(t) {
                        t.preventDefault(), s._handleEvent(t, n)
                    }).on("mouseup.zf.slider", function(t) {
                        s._handleEvent(t, n), e.removeClass("is-dragging"), s.$fill.removeClass("is-dragging"), s.$element.data("dragging", !1), o.off("mousemove.zf.slider mouseup.zf.slider")
                    })
                }).on("selectstart.zf.slider touchmove.zf.slider", function(t) {
                    t.preventDefault()
                })
            }
            e.off("keydown.zf.slider").on("keydown.zf.slider", function(t) {
                var e, i = g()(this),
                    n = s.options.doubleSided ? s.handles.index(i) : 0,
                    o = parseFloat(s.inputs.eq(n).val());
                M.handleKey(t, "Slider", {
                    decrease: function() {
                        e = o - s.options.step
                    },
                    increase: function() {
                        e = o + s.options.step
                    },
                    decrease_fast: function() {
                        e = o - 10 * s.options.step
                    },
                    increase_fast: function() {
                        e = o + 10 * s.options.step
                    },
                    min: function() {
                        e = s.options.start
                    },
                    max: function() {
                        e = s.options.end
                    },
                    handled: function() {
                        t.preventDefault(), s._setHandlePos(i, e, !0)
                    }
                })
            })
        }
    }, {
        key: "_destroy",
        value: function() {
            this.handles.off(".zf.slider"), this.inputs.off(".zf.slider"), this.$element.off(".zf.slider"), clearTimeout(this.timeout)
        }
    }]), Gt);

    function Gt() {
        return s(this, Gt), h(this, d(Gt).apply(this, arguments))
    }

    function Kt(t, e) {
        return t / e
    }

    function Zt(t, e, i, n) {
        return Math.abs(t.position()[e] + t[n]() / 2 - i)
    }
    Vt.defaults = {
        start: 0,
        end: 100,
        step: 1,
        initialStart: 0,
        initialEnd: 100,
        binding: !1,
        clickSelect: !0,
        vertical: !1,
        draggable: !0,
        disabled: !1,
        doubleSided: !1,
        decimal: 2,
        moveTime: 200,
        disabledClass: "disabled",
        invertVertical: !1,
        changedDelay: 500,
        nonLinearBase: 5,
        positionValueFunction: "linear"
    };
    var Qt = (c(Jt, at), l(Jt, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = t, this.options = g.a.extend({}, Jt.defaults, this.$element.data(), e), this.className = "Sticky", ot.init(g.a), this._init()
        }
    }, {
        key: "_init",
        value: function() {
            k._init();
            var t = this.$element.parent("[data-sticky-container]"),
                e = this.$element[0].id || f(6, "sticky"),
                i = this;
            t.length ? this.$container = t : (this.wasWrapped = !0, this.$element.wrap(this.options.container), this.$container = this.$element.parent()), this.$container.addClass(this.options.containerClass), this.$element.addClass(this.options.stickyClass).attr({
                "data-resize": e,
                "data-mutate": e
            }), "" !== this.options.anchor && g()("#" + i.options.anchor).attr({
                "data-mutate": e
            }), this.scrollCount = this.options.checkEvery, this.isStuck = !1, this.onLoadListener = b(g()(window), function() {
                i.containerHeight = "none" == i.$element.css("display") ? 0 : i.$element[0].getBoundingClientRect().height, i.$container.css("height", i.containerHeight), i.elemHeight = i.containerHeight, "" !== i.options.anchor ? i.$anchor = g()("#" + i.options.anchor) : i._parsePoints(), i._setSizes(function() {
                    var t = window.pageYOffset;
                    i._calc(!1, t), i.isStuck || i._removeSticky(!(t >= i.topPoint))
                }), i._events(e.split("-").reverse().join("-"))
            })
        }
    }, {
        key: "_parsePoints",
        value: function() {
            for (var t = ["" == this.options.topAnchor ? 1 : this.options.topAnchor, "" == this.options.btmAnchor ? document.documentElement.scrollHeight : this.options.btmAnchor], e = {}, i = 0, n = t.length; i < n && t[i]; i++) {
                var o;
                if ("number" == typeof t[i]) o = t[i];
                else {
                    var s = t[i].split(":"),
                        a = g()("#".concat(s[0]));
                    o = a.offset().top, s[1] && "bottom" === s[1].toLowerCase() && (o += a[0].getBoundingClientRect().height)
                }
                e[i] = o
            }
            this.points = e
        }
    }, {
        key: "_events",
        value: function(i) {
            var n = this,
                t = this.scrollListener = "scroll.zf.".concat(i);
            this.isOn || (this.canStick && (this.isOn = !0, g()(window).off(t).on(t, function(t) {
                0 === n.scrollCount ? (n.scrollCount = n.options.checkEvery, n._setSizes(function() {
                    n._calc(!1, window.pageYOffset)
                })) : (n.scrollCount--, n._calc(!1, window.pageYOffset))
            })), this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function(t, e) {
                n._eventsHandler(i)
            }), this.$element.on("mutateme.zf.trigger", function(t, e) {
                n._eventsHandler(i)
            }), this.$anchor && this.$anchor.on("mutateme.zf.trigger", function(t, e) {
                n._eventsHandler(i)
            }))
        }
    }, {
        key: "_eventsHandler",
        value: function(t) {
            var e = this,
                i = this.scrollListener = "scroll.zf.".concat(t);
            e._setSizes(function() {
                e._calc(!1), e.canStick ? e.isOn || e._events(t) : e.isOn && e._pauseListeners(i)
            })
        }
    }, {
        key: "_pauseListeners",
        value: function(t) {
            this.isOn = !1, g()(window).off(t), this.$element.trigger("pause.zf.sticky")
        }
    }, {
        key: "_calc",
        value: function(t, e) {
            if (t && this._setSizes(), !this.canStick) return this.isStuck && this._removeSticky(!0), !1;
            (e = e || window.pageYOffset) >= this.topPoint ? e <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0)
        }
    }, {
        key: "_setSticky",
        value: function() {
            var t = this,
                e = this.options.stickTo,
                i = "top" === e ? "marginTop" : "marginBottom",
                n = "top" === e ? "bottom" : "top",
                o = {};
            o[i] = "".concat(this.options[i], "em"), o[e] = 0, o[n] = "auto", this.isStuck = !0, this.$element.removeClass("is-anchored is-at-".concat(n)).addClass("is-stuck is-at-".concat(e)).css(o).trigger("sticky.zf.stuckto:".concat(e)), this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                t._setSizes()
            })
        }
    }, {
        key: "_removeSticky",
        value: function(t) {
            var e = this.options.stickTo,
                i = "top" === e,
                n = {},
                o = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
                s = t ? "top" : "bottom";
            n[i ? "marginTop" : "marginBottom"] = 0, n.bottom = "auto", n.top = t ? 0 : o, this.isStuck = !1, this.$element.removeClass("is-stuck is-at-".concat(e)).addClass("is-anchored is-at-".concat(s)).css(n).trigger("sticky.zf.unstuckfrom:".concat(s))
        }
    }, {
        key: "_setSizes",
        value: function(t) {
            this.canStick = k.is(this.options.stickyOn), this.canStick || t && "function" == typeof t && t();
            var e = this.$container[0].getBoundingClientRect().width,
                i = window.getComputedStyle(this.$container[0]),
                n = parseInt(i["padding-left"], 10),
                o = parseInt(i["padding-right"], 10);
            this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints(), this.$element.css({
                "max-width": "".concat(e - n - o, "px")
            });
            var s = this.$element[0].getBoundingClientRect().height || this.containerHeight;
            if ("none" == this.$element.css("display") && (s = 0), this.containerHeight = s, this.$container.css({
                height: s
            }), this.elemHeight = s, !this.isStuck && this.$element.hasClass("is-at-bottom")) {
                var a = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
                this.$element.css("top", a)
            }
            this._setBreakPoints(s, function() {
                t && "function" == typeof t && t()
            })
        }
    }, {
        key: "_setBreakPoints",
        value: function(t, e) {
            if (!this.canStick) {
                if (!e || "function" != typeof e) return !1;
                e()
            }
            var i = te(this.options.marginTop),
                n = te(this.options.marginBottom),
                o = this.points ? this.points[0] : this.$anchor.offset().top,
                s = this.points ? this.points[1] : o + this.anchorHeight,
                a = window.innerHeight;
            "top" === this.options.stickTo ? (o -= i, s -= t + i) : "bottom" === this.options.stickTo && (o -= a - (t + n), s -= a - n), this.topPoint = o, this.bottomPoint = s, e && "function" == typeof e && e()
        }
    }, {
        key: "_destroy",
        value: function() {
            this._removeSticky(!0), this.$element.removeClass("".concat(this.options.stickyClass, " is-anchored is-at-top")).css({
                height: "",
                top: "",
                bottom: "",
                "max-width": ""
            }).off("resizeme.zf.trigger").off("mutateme.zf.trigger"), this.$anchor && this.$anchor.length && this.$anchor.off("change.zf.sticky"), this.scrollListener && g()(window).off(this.scrollListener), this.onLoadListener && g()(window).off(this.onLoadListener), this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({
                height: ""
            })
        }
    }]), Jt);

    function Jt() {
        return s(this, Jt), h(this, d(Jt).apply(this, arguments))
    }

    function te(t) {
        return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * t
    }
    Qt.defaults = {
        container: "<div data-sticky-container></div>",
        stickTo: "top",
        anchor: "",
        topAnchor: "",
        btmAnchor: "",
        marginTop: 1,
        marginBottom: 1,
        stickyOn: "medium",
        stickyClass: "sticky",
        containerClass: "sticky-container",
        checkEvery: -1
    };
    var ee = (c(ie, at), l(ie, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = t, this.options = g.a.extend({}, ie.defaults, this.$element.data(), e), this.className = "Tabs", this._init(), M.register("Tabs", {
                ENTER: "open",
                SPACE: "open",
                ARROW_RIGHT: "next",
                ARROW_UP: "previous",
                ARROW_DOWN: "next",
                ARROW_LEFT: "previous"
            })
        }
    }, {
        key: "_init",
        value: function() {
            var s = this,
                a = this;
            if (this._isInitializing = !0, this.$element.attr({
                role: "tablist"
            }), this.$tabTitles = this.$element.find(".".concat(this.options.linkClass)), this.$tabContent = g()('[data-tabs-content="'.concat(this.$element[0].id, '"]')), this.$tabTitles.each(function() {
                var t = g()(this),
                    e = t.find("a"),
                    i = t.hasClass("".concat(a.options.linkActiveClass)),
                    n = e.attr("data-tabs-target") || e[0].hash.slice(1),
                    o = e[0].id ? e[0].id : "".concat(n, "-label"),
                    s = g()("#".concat(n));
                t.attr({
                    role: "presentation"
                }), e.attr({
                    role: "tab",
                    "aria-controls": n,
                    "aria-selected": i,
                    id: o,
                    tabindex: i ? "0" : "-1"
                }), s.attr({
                    role: "tabpanel",
                    "aria-labelledby": o
                }), i && (a._initialAnchor = "#".concat(n)), i || s.attr("aria-hidden", "true"), i && a.options.autoFocus && (a.onLoadListener = b(g()(window), function() {
                    g()("html, body").animate({
                        scrollTop: t.offset().top
                    }, a.options.deepLinkSmudgeDelay, function() {
                        e.focus()
                    })
                }))
            }), this.options.matchHeight) {
                var t = this.$tabContent.find("img");
                t.length ? E(t, this._setHeight.bind(this)) : this._setHeight()
            }
            this._checkDeepLink = function() {
                var t = window.location.hash;
                if (!t.length) {
                    if (s._isInitializing) return;
                    s._initialAnchor && (t = s._initialAnchor)
                }
                var e = t && g()(t),
                    i = t && s.$element.find('[href$="' + t + '"]'),
                    n = !(!e.length || !i.length);
                if (e && e.length && i && i.length ? s.selectTab(e, !0) : s._collapse(), n) {
                    if (s.options.deepLinkSmudge) {
                        var o = s.$element.offset();
                        g()("html, body").animate({
                            scrollTop: o.top
                        }, s.options.deepLinkSmudgeDelay)
                    }
                    s.$element.trigger("deeplink.zf.tabs", [i, e])
                }
            }, this.options.deepLink && this._checkDeepLink(), this._events(), this._isInitializing = !1
        }
    }, {
        key: "_events",
        value: function() {
            this._addKeyHandler(), this._addClickHandler(), this._setHeightMqHandler = null, this.options.matchHeight && (this._setHeightMqHandler = this._setHeight.bind(this), g()(window).on("changed.zf.mediaquery", this._setHeightMqHandler)), this.options.deepLink && g()(window).on("hashchange", this._checkDeepLink)
        }
    }, {
        key: "_addClickHandler",
        value: function() {
            var e = this;
            this.$element.off("click.zf.tabs").on("click.zf.tabs", ".".concat(this.options.linkClass), function(t) {
                t.preventDefault(), t.stopPropagation(), e._handleTabChange(g()(this))
            })
        }
    }, {
        key: "_addKeyHandler",
        value: function() {
            var s = this;
            this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(t) {
                if (9 !== t.which) {
                    var e, i, n = g()(this),
                        o = n.parent("ul").children("li");
                    o.each(function(t) {
                        g()(this).is(n) && (i = s.options.wrapOnKeys ? (e = 0 === t ? o.last() : o.eq(t - 1), t === o.length - 1 ? o.first() : o.eq(t + 1)) : (e = o.eq(Math.max(0, t - 1)), o.eq(Math.min(t + 1, o.length - 1))))
                    }), M.handleKey(t, "Tabs", {
                        open: function() {
                            n.find('[role="tab"]').focus(), s._handleTabChange(n)
                        },
                        previous: function() {
                            e.find('[role="tab"]').focus(), s._handleTabChange(e)
                        },
                        next: function() {
                            i.find('[role="tab"]').focus(), s._handleTabChange(i)
                        },
                        handled: function() {
                            t.stopPropagation(), t.preventDefault()
                        }
                    })
                }
            })
        }
    }, {
        key: "_handleTabChange",
        value: function(t, e) {
            if (t.hasClass("".concat(this.options.linkActiveClass))) this.options.activeCollapse && this._collapse();
            else {
                var i = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass)),
                    n = t.find('[role="tab"]'),
                    o = n.attr("data-tabs-target"),
                    s = o && o.length ? "#".concat(o) : n[0].hash,
                    a = this.$tabContent.find(s);
                this._collapseTab(i), this._openTab(t), this.options.deepLink && !e && (this.options.updateHistory ? history.pushState({}, "", s) : history.replaceState({}, "", s)), this.$element.trigger("change.zf.tabs", [t, a]), a.find("[data-mutate]").trigger("mutateme.zf.trigger")
            }
        }
    }, {
        key: "_openTab",
        value: function(t) {
            var e = t.find('[role="tab"]'),
                i = e.attr("data-tabs-target") || e[0].hash.slice(1),
                n = this.$tabContent.find("#".concat(i));
            t.addClass("".concat(this.options.linkActiveClass)), e.attr({
                "aria-selected": "true",
                tabindex: "0"
            }), n.addClass("".concat(this.options.panelActiveClass)).removeAttr("aria-hidden")
        }
    }, {
        key: "_collapseTab",
        value: function(t) {
            var e = t.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({
                "aria-selected": "false",
                tabindex: -1
            });
            g()("#".concat(e.attr("aria-controls"))).removeClass("".concat(this.options.panelActiveClass)).attr({
                "aria-hidden": "true"
            })
        }
    }, {
        key: "_collapse",
        value: function() {
            var t = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass));
            t.length && (this._collapseTab(t), this.$element.trigger("collapse.zf.tabs", [t]))
        }
    }, {
        key: "selectTab",
        value: function(t, e) {
            var i;
            (i = "object" === a(t) ? t[0].id : t).indexOf("#") < 0 && (i = "#".concat(i));
            var n = this.$tabTitles.has('[href$="'.concat(i, '"]'));
            this._handleTabChange(n, e)
        }
    }, {
        key: "_setHeight",
        value: function() {
            var n = 0,
                o = this;
            this.$tabContent.find(".".concat(this.options.panelClass)).css("height", "").each(function() {
                var t = g()(this),
                    e = t.hasClass("".concat(o.options.panelActiveClass));
                e || t.css({
                    visibility: "hidden",
                    display: "block"
                });
                var i = this.getBoundingClientRect().height;
                e || t.css({
                    visibility: "",
                    display: ""
                }), n = n < i ? i : n
            }).css("height", "".concat(n, "px"))
        }
    }, {
        key: "_destroy",
        value: function() {
            this.$element.find(".".concat(this.options.linkClass)).off(".zf.tabs").hide().end().find(".".concat(this.options.panelClass)).hide(), this.options.matchHeight && null != this._setHeightMqHandler && g()(window).off("changed.zf.mediaquery", this._setHeightMqHandler), this.options.deepLink && g()(window).off("hashchange", this._checkDeepLink), this.onLoadListener && g()(window).off(this.onLoadListener)
        }
    }]), ie);

    function ie() {
        return s(this, ie), h(this, d(ie).apply(this, arguments))
    }
    ee.defaults = {
        deepLink: !1,
        deepLinkSmudge: !1,
        deepLinkSmudgeDelay: 300,
        updateHistory: !1,
        autoFocus: !1,
        wrapOnKeys: !0,
        matchHeight: !1,
        activeCollapse: !1,
        linkClass: "tabs-title",
        linkActiveClass: "is-active",
        panelClass: "tabs-panel",
        panelActiveClass: "is-active"
    };
    var ne = (c(oe, at), l(oe, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = t, this.options = g.a.extend({}, oe.defaults, t.data(), e), this.className = "", this.className = "Toggler", ot.init(g.a), this._init(), this._events()
        }
    }, {
        key: "_init",
        value: function() {
            var t;
            this.options.animate ? (t = this.options.animate.split(" "), this.animationIn = t[0], this.animationOut = t[1] || null) : (t = this.$element.data("toggler"), this.className = "." === t[0] ? t.slice(1) : t);
            var o = this.$element[0].id,
                e = g()('[data-open~="'.concat(o, '"], [data-close~="').concat(o, '"], [data-toggle~="').concat(o, '"]'));
            e.attr("aria-expanded", !this.$element.is(":hidden")), e.each(function(t, e) {
                var i = g()(e),
                    n = i.attr("aria-controls") || "";
                new RegExp("\\b".concat(v(o), "\\b")).test(n) || i.attr("aria-controls", n ? "".concat(n, " ").concat(o) : o)
            })
        }
    }, {
        key: "_events",
        value: function() {
            this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this))
        }
    }, {
        key: "toggle",
        value: function() {
            this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]()
        }
    }, {
        key: "_toggleClass",
        value: function() {
            this.$element.toggleClass(this.className);
            var t = this.$element.hasClass(this.className);
            t ? this.$element.trigger("on.zf.toggler") : this.$element.trigger("off.zf.toggler"), this._updateARIA(t), this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger")
        }
    }, {
        key: "_toggleAnimate",
        value: function() {
            var t = this;
            this.$element.is(":hidden") ? R.animateIn(this.$element, this.animationIn, function() {
                t._updateARIA(!0), this.trigger("on.zf.toggler"), this.find("[data-mutate]").trigger("mutateme.zf.trigger")
            }) : R.animateOut(this.$element, this.animationOut, function() {
                t._updateARIA(!1), this.trigger("off.zf.toggler"), this.find("[data-mutate]").trigger("mutateme.zf.trigger")
            })
        }
    }, {
        key: "_updateARIA",
        value: function(t) {
            var e = this.$element[0].id;
            g()('[data-open="'.concat(e, '"], [data-close="').concat(e, '"], [data-toggle="').concat(e, '"]')).attr({
                "aria-expanded": !!t
            })
        }
    }, {
        key: "_destroy",
        value: function() {
            this.$element.off(".zf.toggler")
        }
    }]), oe);

    function oe() {
        return s(this, oe), h(this, d(oe).apply(this, arguments))
    }
    ne.defaults = {
        animate: !1
    };
    var se = (c(ae, xt), l(ae, [{
        key: "_setup",
        value: function(t, e) {
            this.$element = t, this.options = g.a.extend({}, ae.defaults, this.$element.data(), e), this.className = "Tooltip", this.isActive = !1, this.isClick = !1, ot.init(g.a), this._init()
        }
    }, {
        key: "_init",
        value: function() {
            k._init();
            var t = this.$element.attr("aria-describedby") || f(6, "tooltip");
            this.options.tipText = this.options.tipText || this.$element.attr("title"), this.template = this.options.template ? g()(this.options.template) : this._buildTemplate(t), this.options.allowHtml ? this.template.appendTo(document.body).html(this.options.tipText).hide() : this.template.appendTo(document.body).text(this.options.tipText).hide(), this.$element.attr({
                title: "",
                "aria-describedby": t,
                "data-yeti-box": t,
                "data-toggle": t,
                "data-resize": t
            }).addClass(this.options.triggerClass), p(d(ae.prototype), "_init", this).call(this), this._events()
        }
    }, {
        key: "_getDefaultPosition",
        value: function() {
            var t = this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);
            return t ? t[0] : "top"
        }
    }, {
        key: "_getDefaultAlignment",
        value: function() {
            return "center"
        }
    }, {
        key: "_getHOffset",
        value: function() {
            return "left" === this.position || "right" === this.position ? this.options.hOffset + this.options.tooltipWidth : this.options.hOffset
        }
    }, {
        key: "_getVOffset",
        value: function() {
            return "top" === this.position || "bottom" === this.position ? this.options.vOffset + this.options.tooltipHeight : this.options.vOffset
        }
    }, {
        key: "_buildTemplate",
        value: function(t) {
            var e = "".concat(this.options.tooltipClass, " ").concat(this.options.templateClasses).trim();
            return g()("<div></div>").addClass(e).attr({
                role: "tooltip",
                "aria-hidden": !0,
                "data-is-active": !1,
                "data-is-focus": !1,
                id: t
            })
        }
    }, {
        key: "_setPosition",
        value: function() {
            p(d(ae.prototype), "_setPosition", this).call(this, this.$element, this.template)
        }
    }, {
        key: "show",
        value: function() {
            if ("all" !== this.options.showOn && !k.is(this.options.showOn)) return !1;
            this.template.css("visibility", "hidden").show(), this._setPosition(), this.template.removeClass("top bottom left right").addClass(this.position), this.template.removeClass("align-top align-bottom align-left align-right align-center").addClass("align-" + this.alignment), this.$element.trigger("closeme.zf.tooltip", this.template.attr("id")), this.template.attr({
                "data-is-active": !0,
                "aria-hidden": !1
            }), this.isActive = !0, this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function() {}), this.$element.trigger("show.zf.tooltip")
        }
    }, {
        key: "hide",
        value: function() {
            var t = this;
            this.template.stop().attr({
                "aria-hidden": !0,
                "data-is-active": !1
            }).fadeOut(this.options.fadeOutDuration, function() {
                t.isActive = !1, t.isClick = !1
            }), this.$element.trigger("hide.zf.tooltip")
        }
    }, {
        key: "_events",
        value: function() {
            var e = this,
                i = (this.template, !1);
            this.options.disableHover || this.$element.on("mouseenter.zf.tooltip", function(t) {
                e.isActive || (e.timeout = setTimeout(function() {
                    e.show()
                }, e.options.hoverDelay))
            }).on("mouseleave.zf.tooltip", w(function(t) {
                clearTimeout(e.timeout), i && (!e.isClick || e.options.clickOpen) || e.hide()
            })), this.options.clickOpen ? this.$element.on("mousedown.zf.tooltip", function(t) {
                t.stopImmediatePropagation(), e.isClick || (e.isClick = !0, !e.options.disableHover && e.$element.attr("tabindex") || e.isActive || e.show())
            }) : this.$element.on("mousedown.zf.tooltip", function(t) {
                t.stopImmediatePropagation(), e.isClick = !0
            }), this.options.disableForTouch || this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function(t) {
                e.isActive ? e.hide() : e.show()
            }), this.$element.on({
                "close.zf.trigger": this.hide.bind(this)
            }), this.$element.on("focus.zf.tooltip", function(t) {
                if (i = !0, e.isClick) return e.options.clickOpen || (i = !1), !1;
                e.show()
            }).on("focusout.zf.tooltip", function(t) {
                i = !1, e.isClick = !1, e.hide()
            }).on("resizeme.zf.trigger", function() {
                e.isActive && e._setPosition()
            })
        }
    }, {
        key: "toggle",
        value: function() {
            this.isActive ? this.hide() : this.show()
        }
    }, {
        key: "_destroy",
        value: function() {
            this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tooltip").removeClass(this.options.triggerClass).removeClass("top right left bottom").removeAttr("aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"), this.template.remove()
        }
    }]), ae);

    function ae() {
        return s(this, ae), h(this, d(ae).apply(this, arguments))
    }
    se.defaults = {
        disableForTouch: !1,
        hoverDelay: 200,
        fadeInDuration: 150,
        fadeOutDuration: 150,
        disableHover: !1,
        templateClasses: "",
        tooltipClass: "tooltip",
        triggerClass: "has-tip",
        showOn: "small",
        template: "",
        tipText: "",
        touchCloseText: "Tap to close.",
        clickOpen: !0,
        position: "auto",
        alignment: "auto",
        allowOverlap: !1,
        allowBottomOverlap: !1,
        vOffset: 0,
        hOffset: 0,
        tooltipHeight: 14,
        tooltipWidth: 12,
        allowHtml: !1
    };
    var re = {
            tabs: {
                cssClass: "tabs",
                plugin: ee
            },
            accordion: {
                cssClass: "accordion",
                plugin: ht
            }
        },
        le = (c(ce, at), l(ce, [{
            key: "_setup",
            value: function(t, e) {
                this.$element = g()(t), this.options = g.a.extend({}, this.$element.data(), e), this.rules = this.$element.data("responsive-accordion-tabs"), this.currentMq = null, this.currentPlugin = null, this.className = "ResponsiveAccordionTabs", this.$element.attr("id") || this.$element.attr("id", f(6, "responsiveaccordiontabs")), this._init(), this._events()
            }
        }, {
            key: "_init",
            value: function() {
                if (k._init(), "string" == typeof this.rules) {
                    for (var t = {}, e = this.rules.split(" "), i = 0; i < e.length; i++) {
                        var n = e[i].split("-"),
                            o = 1 < n.length ? n[0] : "small",
                            s = 1 < n.length ? n[1] : n[0];
                        null !== re[s] && (t[o] = re[s])
                    }
                    this.rules = t
                }
                this._getAllOptions(), g.a.isEmptyObject(this.rules) || this._checkMediaQueries()
            }
        }, {
            key: "_getAllOptions",
            value: function() {
                for (var t in this.allOptions = {}, re)
                    if (re.hasOwnProperty(t)) {
                        var e = re[t];
                        try {
                            var i = g()("<ul></ul>"),
                                n = new e.plugin(i, this.options);
                            for (var o in n.options)
                                if (n.options.hasOwnProperty(o) && "zfPlugin" !== o) {
                                    var s = n.options[o];
                                    this.allOptions[o] = s
                                }
                            n.destroy()
                        } catch (t) {}
                    }
            }
        }, {
            key: "_events",
            value: function() {
                this._changedZfMediaQueryHandler = this._checkMediaQueries.bind(this), g()(window).on("changed.zf.mediaquery", this._changedZfMediaQueryHandler)
            }
        }, {
            key: "_checkMediaQueries",
            value: function() {
                var e, i = this;
                g.a.each(this.rules, function(t) {
                    k.atLeast(t) && (e = t)
                }), e && (this.currentPlugin instanceof this.rules[e].plugin || (g.a.each(re, function(t, e) {
                    i.$element.removeClass(e.cssClass)
                }), this.$element.addClass(this.rules[e].cssClass), this.currentPlugin && (!this.currentPlugin.$element.data("zfPlugin") && this.storezfData && this.currentPlugin.$element.data("zfPlugin", this.storezfData), this.currentPlugin.destroy()), this._handleMarkup(this.rules[e].cssClass), this.currentPlugin = new this.rules[e].plugin(this.$element, {}), this.storezfData = this.currentPlugin.$element.data("zfPlugin")))
            }
        }, {
            key: "_handleMarkup",
            value: function(t) {
                var i = this,
                    e = "accordion",
                    n = g()("[data-tabs-content=" + this.$element.attr("id") + "]");
                if (n.length && (e = "tabs"), e !== t) {
                    var o = i.allOptions.linkClass ? i.allOptions.linkClass : "tabs-title",
                        s = i.allOptions.panelClass ? i.allOptions.panelClass : "tabs-panel";
                    this.$element.removeAttr("role");
                    var a = this.$element.children("." + o + ",[data-accordion-item]").removeClass(o).removeClass("accordion-item").removeAttr("data-accordion-item"),
                        r = a.children("a").removeClass("accordion-title");
                    if ("tabs" === e ? (n = n.children("." + s).removeClass(s).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby")).children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected") : n = a.children("[data-tab-content]").removeClass("accordion-content"), n.css({
                        display: "",
                        visibility: ""
                    }), a.css({
                        display: "",
                        visibility: ""
                    }), "accordion" === t) n.each(function(t, e) {
                        g()(e).appendTo(a.get(t)).addClass("accordion-content").attr("data-tab-content", "").removeClass("is-active").css({
                            height: ""
                        }), g()("[data-tabs-content=" + i.$element.attr("id") + "]").after('<div id="tabs-placeholder-' + i.$element.attr("id") + '"></div>').detach(), a.addClass("accordion-item").attr("data-accordion-item", ""), r.addClass("accordion-title")
                    });
                    else if ("tabs" === t) {
                        var l = g()("[data-tabs-content=" + i.$element.attr("id") + "]"),
                            c = g()("#tabs-placeholder-" + i.$element.attr("id"));
                        c.length ? (l = g()('<div class="tabs-content"></div>').insertAfter(c).attr("data-tabs-content", i.$element.attr("id")), c.remove()) : l = g()('<div class="tabs-content"></div>').insertAfter(i.$element).attr("data-tabs-content", i.$element.attr("id")), n.each(function(t, e) {
                            var i = g()(e).appendTo(l).addClass(s),
                                n = r.get(t).hash.slice(1),
                                o = g()(e).attr("id") || f(6, "accordion");
                            n !== o && ("" !== n ? g()(e).attr("id", n) : (n = o, g()(e).attr("id", n), g()(r.get(t)).attr("href", g()(r.get(t)).attr("href").replace("#", "") + "#" + n))), g()(a.get(t)).hasClass("is-active") && i.addClass("is-active")
                        }), a.addClass(o)
                    }
                }
            }
        }, {
            key: "_destroy",
            value: function() {
                this.currentPlugin && this.currentPlugin.destroy(), g()(window).off("changed.zf.mediaquery", this._changedZfMediaQueryHandler)
            }
        }]), ce);

    function ce() {
        return s(this, ce), h(this, d(ce).apply(this, arguments))
    }
    le.defaults = {}, x.addToJquery(g.a), x.rtl = m, x.GetYoDigits = f, x.transitionend = y, x.RegExpEscape = v, x.onLoad = b, x.Box = S, x.onImagesLoaded = E, x.Keyboard = M, x.MediaQuery = k, x.Motion = R, x.Move = j, x.Nest = F, x.Timer = N, U.init(g.a), ot.init(g.a, x), k._init(), x.plugin(dt, "Abide"), x.plugin(ht, "Accordion"), x.plugin(ft, "AccordionMenu"), x.plugin(mt, "Drilldown"), x.plugin(Tt, "Dropdown"), x.plugin(_t, "DropdownMenu"), x.plugin(At, "Equalizer"), x.plugin(Pt, "Interchange"), x.plugin(Mt, "Magellan"), x.plugin(It, "OffCanvas"), x.plugin(jt, "Orbit"), x.plugin(Nt, "ResponsiveMenu"), x.plugin(Wt, "ResponsiveToggle"), x.plugin(Xt, "Reveal"), x.plugin(Vt, "Slider"), x.plugin(Lt, "SmoothScroll"), x.plugin(Qt, "Sticky"), x.plugin(ee, "Tabs"), x.plugin(ne, "Toggler"), x.plugin(se, "Tooltip"), x.plugin(le, "ResponsiveAccordionTabs"), e.default = x
}, function(t, e, i) {
    "use strict";
    var o;
    o = jQuery, window, document, o(".form__file").each(function() {
        var t = o(this),
            i = t.next("label"),
            n = i.html();
        t.on("change", function(t) {
            var e = "";
            this.files && 1 < this.files.length ? e = (this.getAttribute("data-multiple-caption") || "").replace("{count}", this.files.length) : t.target.value && (e = t.target.value.split("\\").pop()), e ? i.find("span").html(e) : i.html(n)
        }), t.on("focus", function() {
            t.addClass("has-focus")
        }).on("blur", function() {
            t.removeClass("has-focus")
        })
    })
}, function(o, r, l) {
    (function(e) {
        var t, i, n;

        function s(t) {
            return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var a = {
            scope: {},
            findInternal: function(t, e, i) {
                t instanceof String && (t = String(t));
                for (var n = t.length, o = 0; o < n; o++) {
                    var s = t[o];
                    if (e.call(i, s, o, t)) return {
                        i: o,
                        v: s
                    }
                }
                return {
                    i: -1,
                    v: void 0
                }
            }
        };
        a.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, i) {
            if (i.get || i.set) throw new TypeError("ES3 does not support getters and setters.");
            t != Array.prototype && t != Object.prototype && (t[e] = i.value)
        }, a.getGlobal = function(t) {
            return "undefined" != typeof window && window === t ? t : void 0 !== e && null != e ? e : t
        }, a.global = a.getGlobal(this), a.polyfill = function(t, e, i, n) {
            if (e) {
                for (i = a.global, t = t.split("."), n = 0; n < t.length - 1; n++) {
                    var o = t[n];
                    o in i || (i[o] = {}), i = i[o]
                }(e = e(n = i[t = t[t.length - 1]])) != n && null != e && a.defineProperty(i, t, {
                    configurable: !0,
                    writable: !0,
                    value: e
                })
            }
        }, a.polyfill("Array.prototype.find", function(t) {
            return t || function(t, e) {
                return a.findInternal(this, t, e).v
            }
        }, "es6-impl", "es3"), window.jQuery, window.Zepto, i = [l(0)], void 0 === (n = "function" == typeof(t = function(a) {
            function r(c, b, w) {
                var $ = {
                    invalid: [],
                    getCaret: function() {
                        try {
                            var t, e = 0,
                                i = c.get(0),
                                n = document.selection,
                                o = i.selectionStart;
                            return n && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((t = n.createRange()).moveStart("character", -$.val().length), e = t.text.length) : !o && "0" !== o || (e = o), e
                        } catch (t) {}
                    },
                    setCaret: function(t) {
                        try {
                            if (c.is(":focus")) {
                                var e, i = c.get(0);
                                i.setSelectionRange ? i.setSelectionRange(t, t) : ((e = i.createTextRange()).collapse(!0), e.moveEnd("character", t), e.moveStart("character", t), e.select())
                            }
                        } catch (t) {}
                    },
                    events: function() {
                        c.on("keydown.mask", function(t) {
                            c.data("mask-keycode", t.keyCode || t.which), c.data("mask-previus-value", c.val()), c.data("mask-previus-caret-pos", $.getCaret()), $.maskDigitPosMapOld = $.maskDigitPosMap
                        }).on(a.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", $.behaviour).on("paste.mask drop.mask", function() {
                            setTimeout(function() {
                                c.keydown().keyup()
                            }, 100)
                        }).on("change.mask", function() {
                            c.data("changed", !0)
                        }).on("blur.mask", function() {
                            s === $.val() || c.data("changed") || c.trigger("change"), c.data("changed", !1)
                        }).on("blur.mask", function() {
                            s = $.val()
                        }).on("focus.mask", function(t) {
                            !0 === w.selectOnFocus && a(t.target).select()
                        }).on("focusout.mask", function() {
                            w.clearIfNotMatch && !n.test($.val()) && $.val("")
                        })
                    },
                    getRegexMask: function() {
                        for (var t, e, i, n, o = [], s = 0; s < b.length; s++)(t = k.translation[b.charAt(s)]) ? (e = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), i = t.optional, (t = t.recursive) ? (o.push(b.charAt(s)), n = {
                            digit: b.charAt(s),
                            pattern: e
                        }) : o.push(i || t ? e + "?" : e)) : o.push(b.charAt(s).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                        return o = o.join(""), n && (o = o.replace(new RegExp("(" + n.digit + "(.*" + n.digit + ")?)"), "($1)?").replace(new RegExp(n.digit, "g"), n.pattern)), new RegExp(o)
                    },
                    destroyEvents: function() {
                        c.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
                    },
                    val: function(t) {
                        var e = c.is("input") ? "val" : "text";
                        return e = 0 < arguments.length ? (c[e]() !== t && c[e](t), c) : c[e]()
                    },
                    calculateCaretPosition: function() {
                        var t = c.data("mask-previus-value") || "",
                            e = $.getMasked(),
                            i = $.getCaret();
                        if (t !== e) {
                            var n, o = c.data("mask-previus-caret-pos") || 0,
                                s = (e = e.length, t.length),
                                a = t = 0,
                                r = 0,
                                l = 0;
                            for (n = i; n < e && $.maskDigitPosMap[n]; n++) a++;
                            for (n = i - 1; 0 <= n && $.maskDigitPosMap[n]; n--) t++;
                            for (n = i - 1; 0 <= n; n--) $.maskDigitPosMap[n] && r++;
                            for (n = o - 1; 0 <= n; n--) $.maskDigitPosMapOld[n] && l++;
                            s < i ? i = 10 * e : i <= o && o !== s ? $.maskDigitPosMapOld[i] || (i = (o = i) - (l - r) - t, $.maskDigitPosMap[i] && (i = o)) : o < i && (i = i + (r - l) + a)
                        }
                        return i
                    },
                    behaviour: function(t) {
                        t = t || window.event, $.invalid = [];
                        var e = c.data("mask-keycode");
                        if (-1 === a.inArray(e, k.byPassKeys)) {
                            e = $.getMasked();
                            var i = $.getCaret();
                            return setTimeout(function() {
                                $.setCaret($.calculateCaretPosition())
                            }, a.jMaskGlobals.keyStrokeCompensation), $.val(e), $.setCaret(i), $.callbacks(t)
                        }
                    },
                    getMasked: function(t, e) {
                        var i, n, o, s = [],
                            a = void 0 === e ? $.val() : e + "",
                            r = 0,
                            l = b.length,
                            c = 0,
                            d = a.length,
                            u = 1,
                            h = "push",
                            p = -1,
                            f = 0,
                            g = [];
                        for (n = w.reverse ? (h = "unshift", u = -1, i = 0, r = l - 1, c = d - 1, function() {
                            return -1 < r && -1 < c
                        }) : (i = l - 1, function() {
                            return r < l && c < d
                        }); n();) {
                            var m = b.charAt(r),
                                v = a.charAt(c),
                                y = k.translation[m];
                            y ? (v.match(y.pattern) ? (s[h](v), y.recursive && (-1 === p ? p = r : r === i && r !== p && (r = p - u), i === p && (r -= u)), r += u) : v === o ? (f--, o = void 0) : y.optional ? (r += u, c -= u) : y.fallback ? (s[h](y.fallback), r += u, c -= u) : $.invalid.push({
                                p: c,
                                v: v,
                                e: y.pattern
                            }), c += u) : (t || s[h](m), v === m ? (g.push(c), c += u) : (o = m, g.push(c + f), f++), r += u)
                        }
                        return a = b.charAt(i), l !== d + 1 || k.translation[a] || s.push(a), s = s.join(""), $.mapMaskdigitPositions(s, g, d), s
                    },
                    mapMaskdigitPositions: function(t, e, i) {
                        for (t = w.reverse ? t.length - i : 0, $.maskDigitPosMap = {}, i = 0; i < e.length; i++) $.maskDigitPosMap[e[i] + t] = 1
                    },
                    callbacks: function(t) {
                        function e(t, e, i) {
                            "function" == typeof w[t] && e && w[t].apply(this, i)
                        }
                        var i = $.val(),
                            n = i !== s,
                            o = [i, t, c, w];
                        e("onChange", !0 == n, o), e("onKeyPress", !0 == n, o), e("onComplete", i.length === b.length, o), e("onInvalid", 0 < $.invalid.length, [i, t, c, $.invalid, w])
                    }
                };
                c = a(c);
                var n, k = this,
                    s = $.val();
                b = "function" == typeof b ? b($.val(), void 0, c, w) : b, k.mask = b, k.options = w, k.remove = function() {
                    var t = $.getCaret();
                    return k.options.placeholder && c.removeAttr("placeholder"), c.data("mask-maxlength") && c.removeAttr("maxlength"), $.destroyEvents(), $.val(k.getCleanVal()), $.setCaret(t), c
                }, k.getCleanVal = function() {
                    return $.getMasked(!0)
                }, k.getMaskedVal = function(t) {
                    return $.getMasked(!1, t)
                }, k.init = function(t) {
                    if (t = t || !1, w = w || {}, k.clearIfNotMatch = a.jMaskGlobals.clearIfNotMatch, k.byPassKeys = a.jMaskGlobals.byPassKeys, k.translation = a.extend({}, a.jMaskGlobals.translation, w.translation), k = a.extend(!0, {}, k, w), n = $.getRegexMask(), t) $.events(), $.val($.getMasked());
                    else {
                        w.placeholder && c.attr("placeholder", w.placeholder), c.data("mask") && c.attr("autocomplete", "off");
                        for (var e = !(t = 0); t < b.length; t++) {
                            var i = k.translation[b.charAt(t)];
                            if (i && i.recursive) {
                                e = !1;
                                break
                            }
                        }
                        e && c.attr("maxlength", b.length).data("mask-maxlength", !0), $.destroyEvents(), $.events(), t = $.getCaret(), $.val($.getMasked()), $.setCaret(t)
                    }
                }, k.init(!c.is("input"))
            }
            a.maskWatchers = {};

            function e() {
                var t = a(this),
                    e = {},
                    i = t.attr("data-mask");
                if (t.attr("data-mask-reverse") && (e.reverse = !0), t.attr("data-mask-clearifnotmatch") && (e.clearIfNotMatch = !0), "true" === t.attr("data-mask-selectonfocus") && (e.selectOnFocus = !0), l(t, i, e)) return t.data("mask", new r(this, i, e))
            }
            var l = function(t, e, i) {
                    i = i || {};
                    var n = a(t).data("mask"),
                        o = JSON.stringify;
                    t = a(t).val() || a(t).text();
                    try {
                        return "function" == typeof e && (e = e(t)), "object" !== s(n) || o(n.options) !== o(i) || n.mask !== e
                    } catch (t) {}
                },
                t = function(t) {
                    var e, i = document.createElement("div");
                    return (e = (t = "on" + t) in i) || (i.setAttribute(t, "return;"), e = "function" == typeof i[t]), e
                };
            a.fn.mask = function(t, e) {
                e = e || {};

                function i() {
                    if (l(this, t, e)) return a(this).data("mask", new r(this, t, e))
                }
                var n = this.selector,
                    o = (s = a.jMaskGlobals).watchInterval,
                    s = e.watchInputs || s.watchInputs;
                return a(this).each(i), n && "" !== n && s && (clearInterval(a.maskWatchers[n]), a.maskWatchers[n] = setInterval(function() {
                    a(document).find(n).each(i)
                }, o)), this
            }, a.fn.masked = function(t) {
                return this.data("mask").getMaskedVal(t)
            }, a.fn.unmask = function() {
                return clearInterval(a.maskWatchers[this.selector]), delete a.maskWatchers[this.selector], this.each(function() {
                    var t = a(this).data("mask");
                    t && t.remove().removeData("mask")
                })
            }, a.fn.cleanVal = function() {
                return this.data("mask").getCleanVal()
            }, a.applyDataMask = function(t) {
                ((t = t || a.jMaskGlobals.maskElements) instanceof a ? t : a(t)).filter(a.jMaskGlobals.dataMaskAttr).each(e)
            }, t = {
                maskElements: "input,td,span,div",
                dataMaskAttr: "*[data-mask]",
                dataMask: !0,
                watchInterval: 300,
                watchInputs: !0,
                keyStrokeCompensation: 10,
                useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && t("input"),
                watchDataMask: !1,
                byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
                translation: {
                    0: {
                        pattern: /\d/
                    },
                    9: {
                        pattern: /\d/,
                        optional: !0
                    },
                    "#": {
                        pattern: /\d/,
                        recursive: !0
                    },
                    A: {
                        pattern: /[a-zA-Z0-9]/
                    },
                    S: {
                        pattern: /[a-zA-Z]/
                    }
                }
            }, a.jMaskGlobals = a.jMaskGlobals || {}, (t = a.jMaskGlobals = a.extend(!0, {}, t, a.jMaskGlobals)).dataMask && a.applyDataMask(), setInterval(function() {
                a.jMaskGlobals.watchDataMask && a.applyDataMask()
            }, t.watchInterval)
        }) ? t.apply(r, i) : t) || (o.exports = n)
    }).call(this, l(9))
}, function(t, e) {
    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (n = window)
    }
    t.exports = n
}, function(t, e) {
    var s = $(".js-map-container").children(".loader"),
        a = $(".js-map-container").data("path"),
        i = !1;

    function n() {
        var o, t = $(".js-map-container").data("lng").split(","),
            i = 0,
            n = new ymaps.Map("map", {
                center: t,
                zoom: 14,
                controls: []
            });
        $(".js-map-address").each(function() {
            var t = $(this).data("lng").split(","),
                e = new ymaps.Placemark(t, {}, {
                    iconLayout: "default#image",
                    iconImageHref: a,
                    iconImageSize: [50, 60],
                    iconImageOffset: [-25, -30]
                });
            n.geoObjects.add(e), i++
        }), 1 < i ? n.setBounds(n.geoObjects.getBounds(), {
            checkZoomRange: !0
        }) : n.setCenter(center, 14, {
            checkZoomRange: !0
        }), n.controls.add("zoomControl"), n.controls.get("zoomControl").options.set("size", "small"), (o = n.layers.get(0).get(0), new ymaps.vow.Promise(function(t, e) {
            var i = function(t) {
                    for (var e in t)
                        if (t.hasOwnProperty(e) && (t[e] instanceof ymaps.layer.tileContainer.CanvasContainer || t[e] instanceof ymaps.layer.tileContainer.DomContainer)) return t[e];
                    return null
                }(o),
                n = !0;
            i.tiles.each(function(t, e) {
                t.isReady() || (n = !1)
            }), n ? t() : i.events.once("ready", function() {
                t()
            })
        })).then(function() {
            s.removeClass("is-active")
        })
    }
    $(function() {
        $("#map").length && function() {
            function t() {
                var t, e;
                i || (i = !0, s.addClass("is-active"), t = function() {
                    ymaps.load(n)
                }, (e = document.createElement("script")).readyState ? e.onreadystatechange = function() {
                    "loaded" != e.readyState && "complete" != e.readyState || (e.onreadystatechange = null, t())
                } : e.onload = function() {
                    t()
                }, e.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", document.getElementsByTagName("head")[0].appendChild(e))
            }
            $.fn.isInViewport = function() {
                var t = $(this).offset().top,
                    e = t + $(this).outerHeight(),
                    i = $(window).scrollTop(),
                    n = i + $(window).height();
                return i < e && t < n
            }, $(".map").isInViewport() && !i ? t() : $(window).on("resize scroll", function() {
                $(".map").isInViewport() && !i && t()
            })
        }()
    })
}, function(t, e, i) {
    "use strict";
    i.r(e);
    var n = i(0),
        o = i.n(n);
    window.jQuery = o.a, window.$ = o.a, i(3), i(4), i(5), i(7), i(8), i(10), i(6), lozad().observe(), $(document).foundation(), $(document).ready(function() {
        var t = $(".js-promo");

        function s(t) {
            return t < 10 ? "0" + t.toString() : t.toString()
        }

        function i(t) {
            t.on("init reInit afterChange", function(t, e, i, n) {
                var o = (i || 0) + 1;
            }), t.slick({
                infinite: !0,
                touchThreshold: 10,
                dots: false,
                arrows: !0,
                slidesToShow: 1,
                fade: !0,
                autoplay: !0,
                speed: 500,
                autoplaySpeed: 6e3,
                slidesToScroll: 1,
                nextArrow: '<button class="slick-arrow slick-next"><svg><use xlink:href="#arrow" class="icon"></use></svg></button>',
                prevArrow: '<button class="slick-arrow slick-prev"><svg><use xlink:href="#arrow" class="icon"></use></svg></button>',
                appendArrows: t.siblings(".gallery__arrows"),
                responsive: [{
                    breakpoint: 999,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: !0
                    }
                }]
            })
        }

        function n(t, e) {
            if (t.length) return $("html, body").animate({
                scrollTop: t.offset().top - e
            }, 500, function() {
                "about" === t.attr("id") && $("#td-name").focus()
            }), !1
        }
        t.on("init reInit afterChange", function(t, e, i, n) {
            var o = (i || 0) + 1;
            $(this).parents(".promo").find(".promo__pages").html("<span>" + s(o) + "</span>/<span>" + s(e.slideCount) + "</span>")
        }), t.slick({
            infinite: !0,
            dots: !1,
            arrows: !0,
            slidesToShow: 1,
            fade: !0,
            autoplay: !0,
            speed: 1500,
            autoplaySpeed: 6e3,
            slidesToScroll: 1,
            nextArrow: '<button class="slick-arrow slick-next"><svg><use xlink:href="#arrow" class="icon"></use></svg></button>',
            prevArrow: '<button class="slick-arrow slick-prev"><svg><use xlink:href="#arrow" class="icon"></use></svg></button>',
            appendArrows: ".promo__arrows",
            responsive: [{
                breakpoint: 999,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: !0
                }
            }]
        }), $(".js-features").slick({
            infinite: !1,
            dots: !1,
            arrows: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            autoplaySpeed: 6e3,
            nextArrow: '<button class="slick-arrow slick-next"><svg><use xlink:href="#arrow" class="icon"></use></svg></button>',
            prevArrow: '<button class="slick-arrow slick-prev"><svg><use xlink:href="#arrow" class="icon"></use></svg></button>',
            appendArrows: ".features__arrows",
            responsive: [{
                breakpoint: 1299,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: !0
                }
            }]
        }), i($(".js-gallery").parents(".tabs-panel").length ? $(".tabs-panel.is-active .js-gallery") : $(".js-gallery")), $("#gallery-tabs").on("change.zf.tabs", function(t) {
            var e = $("[data-tabs-content=gallery-tabs]").find(".tabs-panel.is-active").find(".js-gallery");
            e.hasClass("slick-initialized") || i(e), e.slick("setPosition")
        }), $(".js-toscroll").on("click", function(t) {
            t.preventDefault();
            var e = $(this).attr("href") ? $($(this).attr("href")) : $($(this).data("target"));
            $(this).attr("href") && $(window).width() < 1e3 && ($(".js-menu").removeClass("is-active"), $("body").removeClass("lock"), $(".menu").fadeOut(250)), n(e, 0)
        }),
            $(".menu").on("click", "a", function(t) {
                t.preventDefault();
                var e = $($(this).attr("href"));
                $(window).width() < 1e3 && ($(".js-menu").removeClass("is-active"), $("body").removeClass("lock"), $(".menu").fadeOut(250)), n(e, 0)
            }), $(".js-menu").on("click", function() {
            $(this).toggleClass("is-active"), $("body").toggleClass("lock"), $(".header").toggleClass("is-opened"), $(".menu").fadeToggle(250)
        })
    })
    $('#td-phone').mask('+375 (00) 000-00-00');
}]);


$(document).ready(function(){

    $('.jsform').submit(function () {
        var form = $(this);

        var formData = new FormData(form[0]);

        $.ajax({
            type: "POST",
            url: form.attr("action"),
            dataType: "json",
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success:function (json, f) {
                form.find(".form__error").removeClass('form__error');

                if (f === "success" && json['success']) {

                    form.closest('.form__default').hide().next().show();

                    form.trigger('reset');
                } else {
                    for(var key in json['error']) {
                        if($('.form__message.error_' + key).length) {
                            $('.form__message.error_' + key).parent().addClass('form__error');
                            $('.form__message.error_' + key).html(json['error'][key]);
                        } else {
                            var input = form.find('input[name="' + key + '"],textarea[name="' + key + '"],select[name="' + key + '"]');
                            input.parent().addClass('form__error');
                            html = '<div class="form__message fmsg">' + json['error'][key] + '</div>';
                            if (key == 'captcha') {
                                form.find('.g-recaptcha').parent().addClass('form__error');
                                form.find('.g-recaptcha').append(html);
                            } else {
                                input.parent().append(html);
                            }
                        }
                    }
                }
            }
        });
        return false
    });

    $('.container-fluid .tabs-title:first-child').click( function() {
        $('.gallery').css(
            'background', 'url("/img/exterior.webp")'
        );
    })

    $('.container-fluid .tabs-title:last-child').click( function() {
        $('.gallery').css(
            'background', 'url("/img/interior.webp")'
        );
    })
    $(".btn_play").click(function () {
        let video = $('#video')[0];
        video[video.paused ? 'play' : 'pause']();
    })
});