/* Copyright (c) 2008-2022, Quantcast Corp. https://www.quantcast.com/legal/license */ ! function(window) {
    function RequireDependencyError(e) {
        Error.apply(this), this.name = "RequireDependencyError", this.message = e || ""
    }
    RequireDependencyError.prototype = Error.prototype;
    var amd = {},
        definitions = {};
    amd.require = function(e, t) {
        "function" == typeof e && (t = e, e = []);
        for (var n = [], r = 0; r < e.length; r++) {
            var o = e[r];
            if (!Object.prototype.hasOwnProperty.call(definitions, o)) throw new RequireDependencyError("No module named " + o + " has been defined");
            n[r] = definitions[o]
        }
        return t.apply({}, n)
    };
    var array = Array.prototype,
        available = function(e, t) {
            return "function" == typeof e[t]
        },
        map = "map",
        forEach = "forEach",
        reduce = "reduce",
        indexOf = "indexOf";
    with(available(array, "map") || (array.map = function(e, t) {
        var n = [];
        t || (t = this);
        for (var r = 0; r < this.length; r++) n[r] = e.call(t, this[r], r, this);
        return n
    }), available(array, "forEach") || (array.forEach = array.map), available(array, "reduce") || (array.reduce = function(e, t) {
        var n = 0;
        for (void 0 === t && (t = this[n++]); n < this.length; n++) t = e.call(this, t, this[n], n, this);
        return t
    }), available(array, "indexOf") || (array.indexOf = function(e) {
        for (var t = 0; t < this.length; t++)
            if (this[t] == e) return t;
        return -1
    }), amd.define = function(e, t, n) {
        Object.prototype.hasOwnProperty.call(definitions, e) || (definitions[e] = amd.require(t, n))
    }, amd) define("quant/session", [], function() {
        var e = function() {
            var e = (new Date).getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var n = (e + 16 * Math.random()) % 16 | 0;
                return e = Math.floor(e / 16), ("x" == t ? n : 3 & n | 8).toString(16)
            })
        };
        if (!window.sessionStorage) return e();
        var t = window.sessionStorage.getItem("qcSes");
        return t || (t = e(), window.sessionStorage.setItem("qcSes", t), t)
    }), define("quant/utils", ["quant/session"], function(e) {
        var t = function() {
                return (new Date).getTime()
            },
            n = function() {
                return new Date
            },
            r = function(e) {
                var t = new Date(2e3, e, 1, 0, 0, 0, 0),
                    n = t.toGMTString();
                return t - new Date(n.substring(0, n.lastIndexOf(" ") - 1))
            },
            o = function() {
                return r(0) !== r(6) ? 1 : 0
            },
            a = function() {
                return Math.round(2147483647 * Math.random())
            },
            i = function() {
                return navigator && "Apple Computer, Inc." === navigator.vendor
            },
            u = function(e) {
                for (var t = 0, n = 0; n < e.length; n++) t += e.charCodeAt(n);
                return t % 100
            },
            c = /qcdbgc=1$/.test(window.location.toString()),
            s = function(e, t) {
                "undefined" != typeof console && console.log.apply(console, [e + " " + n().toString()].concat([].slice.call(t)))
            };
        return {
            now: n,
            nowTimestamp: t,
            isDst: o,
            tzOffset: r,
            random: a,
            isSafari: i,
            hashBucket: u,
            log: {
                error: function() {
                    s("ERROR", arguments)
                },
                debug: function() {
                    c && s("DEBUG", arguments)
                }
            },
            reportError: function(n, r, o) {
                o = o || {};
                var a = {
                    url: window.location.href,
                    version: "bf501fc4-20221215111636",
                    time: t(),
                    browser: navigator.userAgent,
                    sessionId: e
                };
                r && "string" == typeof r && (a.label = r), n && (n.message && "string" == typeof n.message ? a.msg = n.message : "string" == typeof n && (a.msg = n), n.stack && "string" == typeof n.stack && (a.stack = n.stack)), o.pcode && "string" == typeof o.pcode && (a.pcode = o.pcode);
                var i = new XMLHttpRequest;
                i.open("POST", "https://pixel.quantcount.com/tag/error", !0), i.send(JSON.stringify(a))
            }
        }
    }), define("quant/origin", ["quant/utils"], function(e) {
        return function(t) {
            for (var n = t.domain || "", r = new Date(0).toUTCString(), o = new Date(e.nowTimestamp() + 864e5).toUTCString(), a = n.split("."), i = "", u = 2; u <= a.length; u++) {
                i = a.slice(-u).join(".");
                var c = "_dlt=" + "1; path=/; domain=" + i + "; expires=" + o;
                if (t.cookie = c, /_dlt=1\b/.test(t.cookie)) return t.cookie = "_dlt=" + "; path=/; domain=" + i + "; expires=" + r, i
            }
            return t.cookie = "_dlt=" + "; path=/; domain=" + i + "; expires=" + r, n
        }
    }), define("quant/windows", [], function() {
        return function(e, t) {
            if (void 0 === e) throw new Error("window many not be undefined");
            if (void 0 === t) throw new Error("top may not be undefined");
            t = t.self, this.depth = 0;
            var n = e.self;
            for (this.top = n; n !== t;) {
                n = n.parent.self;
                try {
                    n.location.href && (this.url = n.location.href, this.top = n)
                } catch (e) {}
                this.depth++
            }
            this.locate = function(n) {
                for (var r = e;;) {
                    try {
                        if (n in r.frames) return r
                    } catch (e) {}
                    if (r === t) break;
                    r = r.parent.self
                }
            }
        }
    }), define("quant/ready", [], function() {
        function e() {
            var e = !1,
                t = [];
            document.readyState in {
                complete: !0,
                interactive: !0
            } && (e = !0);
            var n = function() {
                for (e = !0; t.length > 0;) t.shift()()
            };
            document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", n, !1), window.attachEvent("onload", n)), this.ready = function(n) {
                e ? n() : t.push(n)
            }
        }
        return (new e).ready
    }), define("quant/promise", [], function() {
        function e(u) {
            var c, s, f = [],
                l = t,
                p = function(e) {
                    return e
                },
                d = function(e, t, n, r) {
                    try {
                        var a = e(r);
                        o(a) ? (a.then(t), a.catch(n)) : t(a)
                    } catch (e) {
                        n(e)
                    }
                },
                h = function(e) {
                    c = e, l = n, f.forEach(function(t) {
                        t.push(e), d.apply(0, t)
                    })
                },
                v = function(e) {
                    s = e, l = r, f.forEach(function(t) {
                        t[r](e)
                    })
                },
                g = function(e, t, n) {
                    return function(r) {
                        d(e, t, n, r)
                    }
                };
            try {
                u(h, v)
            } catch (e) {
                v(e)
            }
            return {
                then: function(o) {
                    switch (l) {
                        case t:
                            return new e(function(e, t) {
                                f.push([o, e, t])
                            });
                        case n:
                            return a(o(c));
                        case r:
                            return i(s)
                    }
                },
                catch: function(o) {
                    switch (l) {
                        case t:
                            return new e(function(e, t) {
                                f.push([p, e, g(o, e, t)])
                            });
                        case n:
                            return a(c);
                        case r:
                            return a(o(s))
                    }
                }
            }
        }
        var t = 0,
            n = 1,
            r = 2,
            o = function(e) {
                return "object" == typeof e && "then" in e && "function" == typeof e.then
            },
            a = function(e) {
                return o(e) ? e : {
                    then: function(t) {
                        return a(t(e))
                    },
                    catch: function() {
                        return this
                    }
                }
            },
            i = function(e) {
                return {
                    then: function() {
                        return this
                    },
                    catch: function(t) {
                        return a(t(e))
                    }
                }
            };
        return e.resolve = a, e.reject = i, e.all = function(e) {
            return e.length ? e.map(function(e) {
                return e.then(function(e) {
                    return [e]
                })
            }).reduce(function(e, t) {
                return e.then(function(e) {
                    return t.then(function(t) {
                        return e.concat(t)
                    })
                })
            }) : a([])
        }, e
    }), define("quant/loader", ["quant/ready", "quant/promise"], function(e, t) {
        function n(n, r) {
            var o, a = [];
            e(function() {
                o = r.getElementsByTagName("head")[0]
            });
            var i = function(e) {
                var t = new Image;
                return t.src = e, t
            };
            this.image = function(e) {
                return new t(function(t, n) {
                    var r = i(e);
                    a.push(r), r.onload = function() {
                        t(r), a.shift(), delete r.onload, delete r.onerror
                    }, r.onerror = n
                })
            }, this.beacon = function(e) {
                var t = n.navigator;
                t && t.sendBeacon ? t.sendBeacon(e) : i(e)
            };
            var u = function(e, t, n) {
                var o = r.createElement("script");
                o.type = "text/javascript", o.src = e;
                var a = function() {
                    t(o), o.onreadystatechange = null, o.onload = null, o.onerror = null
                };
                return o.onload = a, o.onreadystatechange = function() {
                    o.readyState in {
                        loaded: 1,
                        complete: 1
                    } && a()
                }, o.onerror = n, o
            };
            this.script = function(n) {
                return new t(function(t, r) {
                    e(function() {
                        var e = u(n, t, r);
                        o.firstChild ? o.insertBefore(e, o.firstChild) : o.appendChild(e)
                    })
                })
            }
        }
        return n
    }), define("quant/event", [], function() {
        function e() {
            this.add = function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n) : "function" == typeof jQuery ? jQuery(e).on(t, n) : e.attachEvent && e.attachEvent("on" + t, n)
            }, this.remove = function(e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n) : "function" == typeof jQuery ? jQuery(e).off(t, n) : e.detachEvent && e.detachEvent("on" + t, n)
            }, this.trigger = function(e, t, n) {
                var r = e.ownerDocument;
                if (e.dispatchEvent && r.createEvent) {
                    var o = r.createEvent("Event");
                    if (o.initEvent(t, !0, !0), void 0 !== n)
                        for (var a in n) a in o || (o[a] = n[a]);
                    e.dispatchEvent(o)
                } else "function" == typeof jQuery && jQuery(e).trigger(t, n)
            }
        }
        return new e
    }), define("quant/consent/truste", ["quant/promise", "quant/event", "quant/utils"], function(e, t, n) {
        return function(r, o, a, i, u, c, s, f) {
            var l, p = {},
                d = function(e) {
                    var t = e.source[0];
                    return "p" + e.consent[0] + ("a" == t ? "e" : "i")
                };
            l = "object" == typeof i && "function" == typeof i.callApi ? function(t, n, r, o) {
                var a = i.callApi(n, o, f, u, r);
                return t.cm = d(a), e.resolve(!0)
            } : function(i, c, s, l) {
                return r.depth > 0 && (t.add(o, "message", function(e) {
                    var t = e.data;
                    if ("string" == typeof t && t.indexOf("PrivacyManagerAPI") > 0) try {
                        t = JSON.parse(t)
                    } catch (e) {
                        return
                    } else if (void 0 !== t.PrivacyManagerAPI) {
                        var n = t.PrivacyManagerAPI;
                        i.cm = d(n)
                    }
                }), a.postMessage(JSON.stringify({
                    PrivacyManagerAPI: {
                        timestamp: n.nowTimestamp(),
                        action: c,
                        self: l,
                        domain: f,
                        authority: u,
                        type: s
                    }
                }), "*")), e.resolve(!0)
            }, this.consent = function(e) {
                return l(e, "getConsent", c, s)
            }, this.parameters = p
        }
    }), define("quant/consent/uspapi", ["quant/promise", "quant/event", "quant/utils"], function(e, t, n) {
        return function(r, o, a) {
            var i;
            if ("function" == typeof o.__uspapi) i = function(t, r) {
                return new e(function(e, t) {
                    o.__uspapi("getUSPData", r, function(n) {
                        n && "string" == typeof n.uspString ? e(n) : t(n)
                    })
                }).catch(function(e) {
                    return n.log.error("uspapi: unsuccessful", e), n.reportError(e, "uspapi: unsuccessful"), !0
                })
            };
            else {
                var u = (r.locate(a), {});
                t.add(o, "message", function(e) {
                    var t = e.data;
                    if ("string" == typeof t && "{" == t[0]) try {
                        t = JSON.parse(t)
                    } catch (e) {
                        return
                    }
                    if (Object.prototype.hasOwnProperty.call(t, "__uspapiReturn")) {
                        var n = t.__uspapiReturn,
                            r = n.callId,
                            o = u[r];
                        if (void 0 === o) return;
                        n.success ? o[0](n.returnValue) : o[1](n.returnValue)
                    }
                }), i = function(t, o) {
                    var i = r.locate(a);
                    if (void 0 === i) return e.resolve(void 0);
                    var c = n.nowTimestamp();
                    return new e(function(e, n) {
                        u[c] = [e, n], i.postMessage({
                            __uspapiCall: {
                                command: t,
                                version: o,
                                callId: c
                            }
                        }, "*")
                    })
                }
            }
            this.consent = function(e) {
                return i("getUSPData", 1).then(function(t) {
                    return t && "string" == typeof t.uspString && (e.us_privacy = t.uspString), !0
                })
            }
        }
    }), define("quant/consent/manager", ["quant/promise"], function(e) {
        return function(t) {
            var n, r = {},
                o = function(o) {
                    return void 0 === n && (n = e.all(t.map(function(e) {
                        return e.consent(r)
                    })).then(function(e) {
                        return e.reduce(function(e, t) {
                            return e && t
                        }, !0)
                    })), n.then(function(e) {
                        if (e) return o()
                    })
                };
            this.consent = o, this.wrap = function(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return o(function() {
                        return e.apply(t, n)
                    })
                }
            }, this.parameters = r
        }
    }), define("quant/consent/tcf2.0", ["quant/promise", "quant/event", "quant/utils"], function(e, t, n) {
        function r(e, t) {
            var n = t.gdprApplies,
                r = t.purpose,
                o = t.vendor,
                a = o && o.consents && o.consents[c],
                i = o && o.legitimateInterests && o.legitimateInterests[c],
                u = t.publisher ? t.publisher.restrictions : {};
            return !n || e.map(function(e) {
                var t = !!r.consents && r.consents[e],
                    n = !!r.legitimateInterests && r.legitimateInterests[e],
                    o = u && u[e] ? u[e][c] : null;
                return 0 !== o && (!(!a || !t || 2 === o || -1 == f.indexOf(e) && 1 !== o) || !(1 === o || !i || !n || -1 != l.indexOf(e) || -1 != f.indexOf(e) && 2 !== o))
            }).reduce(function(e, t) {
                return e && t
            }, !0)
        }

        function o(o, c, f) {
            var l, g;
            if ("function" == typeof c.__tcfapi) g = function(t, n) {
                return new e(function(e, r) {
                    c.__tcfapi(t, p, function(n, o) {
                        if (o) {
                            var a = n.eventStatus;
                            t === d && n.gdprApplies && "useractioncomplete" !== a && "tcloaded" !== a || e(n)
                        } else r(n)
                    }, n)
                })
            };
            else {
                var m = {},
                    y = {};
                t.add(c, "message", function(e) {
                    var t = e.data;
                    if (void 0 === t) return n.log.error(a + ": Recieved undefined message"), void n.reportError("Recieved undefined message", a);
                    if ("string" == typeof t && "{" == t[0]) try {
                        t = JSON.parse(t)
                    } catch (e) {
                        return
                    }
                    if (Object.prototype.hasOwnProperty.call(t, h)) {
                        var r = t[h],
                            o = r.callId,
                            c = m[o];
                        if (void 0 === c) return;
                        var s = r.returnValue;
                        r.success ? y[o] === d && s.gdprApplies && "useractioncomplete" !== s.eventStatus && "tcloaded" !== s.eventStatus || c[i](s) : c[u](s)
                    }
                }), g = function(t, r) {
                    var a = o.locate(f);
                    if (void 0 === a) return e.resolve({
                        gdprApplies: !1
                    });
                    var i = n.nowTimestamp();
                    return new e(function(e, n) {
                        m[i] = [e, n], y[i] = t;
                        var o = {};
                        o[v] = {
                            command: t,
                            parameter: r,
                            version: p,
                            callId: i
                        }, a.postMessage(JSON.stringify(o), "*")
                    })
                }
            }
            this.consent = function(e) {
                return void 0 === l && (l = g(d).then(function(t) {
                    return t.gdprApplies && "false" != t.gdprApplies ? (e.gdpr = 1, e.gdpr_consent = t.tcString) : e.gdpr = e.gdpr || 0, r(s, t)
                }).catch(function(t) {
                    return n.log.error(a + ": unsuccessful", t), n.reportError(t, a + ": unsuccessful"), e.gdpr = e.gdpr || 0, !0
                })), l
            }
        }
        var a = "tcf2",
            i = 0,
            u = 1,
            c = 11,
            s = ["1", "3", "7", "8", "9", "10"],
            f = ["1", "3"],
            l = ["1", "3"],
            p = 2,
            d = "addEventListener",
            h = "__tcfapiReturn",
            v = "__tcfapiCall";
        return o.resolveConsent = r, o
    }), define("quant/hashing", [], function() {
        function e() {
            function e(e) {
                return unescape(encodeURIComponent(e))
            }

            function t(e, t) {
                return t >>> e | t << 32 - e
            }

            function n(e) {
                return t(2, e) ^ t(13, e) ^ t(22, e)
            }

            function r(e) {
                return t(6, e) ^ t(11, e) ^ t(25, e)
            }

            function o(e) {
                return t(7, e) ^ t(18, e) ^ e >>> 3
            }

            function a(e) {
                return t(17, e) ^ t(19, e) ^ e >>> 10
            }

            function i(e, t, n) {
                return e & t ^ ~e & n
            }

            function u(e, t, n) {
                return e & t ^ e & n ^ t & n
            }
            this.FNV = function(e) {
                var t, n, r, o;
                return t = 2166136261, n = 3386659096, r = c(t, e), o = c(n, e), Math.round(Math.abs(r * o) / 65536).toString(16)
            };
            var c = function(e, t) {
                var n;
                for (n = 0; n < t.length; n++) e ^= t.charCodeAt(n), e += (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24);
                return e
            };
            this.SHA256 = function(t) {
                t = e(t);
                var c = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                    s = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
                t += String.fromCharCode(128);
                for (var f = t.length / 4 + 2, l = Math.ceil(f / 16), p = new Array(l), d = 0; d < l; d++) {
                    p[d] = new Array(16);
                    for (var h = 0; h < 16; h++) p[d][h] = t.charCodeAt(64 * d + 4 * h + 0) << 24 | t.charCodeAt(64 * d + 4 * h + 1) << 16 | t.charCodeAt(64 * d + 4 * h + 2) << 8 | t.charCodeAt(64 * d + 4 * h + 3) << 0
                }
                var v = 8 * (t.length - 1) / Math.pow(2, 32),
                    g = 8 * (t.length - 1) >>> 0;
                for (p[l - 1][14] = Math.floor(v), p[l - 1][15] = g, d = 0; d < l; d++) {
                    for (var m = new Array(64), y = 0; y < 16; y++) m[y] = p[d][y];
                    for (y = 16; y < 64; y++) m[y] = a(m[y - 2]) + m[y - 7] + o(m[y - 15]) + m[y - 16] >>> 0;
                    var q = s[0],
                        w = s[1],
                        _ = s[2],
                        b = s[3],
                        x = s[4],
                        E = s[5],
                        S = s[6],
                        O = s[7];
                    for (y = 0; y < 64; y++) {
                        var I = O + r(x) + i(x, E, S) + c[y] + m[y],
                            j = n(q) + u(q, w, _);
                        O = S, S = E, E = x, x = b + I >>> 0, b = _, _ = w, w = q, q = I + j >>> 0
                    }
                    s[0] = s[0] + q >>> 0, s[1] = s[1] + w >>> 0, s[2] = s[2] + _ >>> 0, s[3] = s[3] + b >>> 0, s[4] = s[4] + x >>> 0, s[5] = s[5] + E >>> 0, s[6] = s[6] + S >>> 0, s[7] = s[7] + O >>> 0
                }
                for (O = 0; O < s.length; O++) s[O] = ("00000000" + s[O].toString(16)).slice(-8);
                return s.join("")
            }
        }
        return new e
    }), define("quant/normalize", ["quant/hashing"], function(e) {
        var t = function(e) {
            var t = typeof e;
            return "string" == t && e.length > 0 || "number" == t || "boolean" == t
        };
        return function(n, r, o, a, i) {
            var u, c = {},
                s = null,
                f = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                l = /^[A-Fa-f0-9]{64}$/,
                p = 2;
            for (u in r) Object.prototype.hasOwnProperty.call(r, u) && t(r[u]) && ("uid" !== u && "uh" !== u ? "qacct" !== u && (c[u + n] = encodeURIComponent(r[u])) : (r[u].match(l) ? (p = 1, s = r[u].toLowerCase()) : (r[u].match(f) && (p = 0, r[u] = r[u].toLowerCase()), "" !== r[u] && (s = e.SHA256(r[u]))), delete r[u]));
            for (u in o) Object.prototype.hasOwnProperty.call(o, u) && t(o[u]) && !c[u + n] && (c[u + n] = encodeURIComponent(o[u]));
            return c["rf" + n] = "" + i, "string" == typeof s && (r.uh = s, c["uh" + n] = encodeURIComponent(s)), c["uht" + n] = "" + p, c["a" + n] = a, c
        }
    }), define("quant/storage-experiment", [], function() {
        function e() {
            try {
                window.localStorage.deleteItem(t)
            } catch (e) {}
            try {
                document.cookie = n + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"
            } catch (e) {}
        }
        var t = "qcSxl",
            n = "qcSxc";
        return {
            cleanExperiment: e
        }
    }), define("quant/identity-store", ["quant/utils", "quant/hashing"], function(e, t) {
        var n = ["4dcfa7079941", "127fdf7967f31", "588ab9292a3f", "32f92b0727e5", "22f9aa38dfd3", "a4abfe8f3e04", "18b66bc1325c", "958e70ea2f28", "bdbf0cb4bbb", "65118a0d557", "40a1d9db1864", "18ae3d985046", "3b26460f55d"],
            r = function(e, t) {
                var n, r, o, a = null;
                return e ? (n = e.indexOf(t + "="), r = n + t.length + 1, n > -1 && (o = e.indexOf(";", r), o < 0 && (o = e.length), a = e.substring(r, o)), a) : a
            },
            o = function() {
                return "P0-" + e.random() + "-" + e.now().getTime()
            },
            a = function(e) {
                for (var r = t.FNV(e), o = 0; o < n.length; o++)
                    if (n[o] === r) return !0;
                return !1
            },
            i = function(t, n, r, o) {
                var a = {
                    value: r,
                    expiry: e.now().getTime() + o
                };
                t.localStorage.setItem(n, JSON.stringify(a))
            },
            u = function(t, n) {
                var r = t.localStorage.getItem(n);
                if (!r) return null;
                var o = JSON.parse(r);
                return e.now().getTime() > o.expiry ? (localStorage.removeItem(n), null) : o.value
            };
        return function(t, c, s) {
            var f = 0,
                l = r(c.cookie, "__qca") || u(t, "__qca"),
                p = a(s);
            l || (f = 1, l = o()), this.SD = n, this.persistIdentifier = function() {
                1 !== f || p || (c.cookie = ["__qca", "=", l, "; expires=", new Date(e.now().getTime() + 338688e5).toGMTString(), "; path=/; domain=", s].join(""), i(t, "__qca", l, 338688e5))
            }, this.removeIdentifier = function() {
                c.cookie = "__qca" + "=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;", t.localStorage.removeItem("__qca")
            }, this.getFirstPartyIDString = function(e) {
                return p || 1 === e ? ";fpan=u;fpa=" : ";fpan=" + f + ";fpa=" + l
            }, this.getExternalIDString = function(e) {
                if (p || 1 === e) return "";
                var t = r(c.cookie, "_pubcid") || r(c.cookie, "_sharedID"),
                    n = r(c.cookie, "_pubcid_optout");
                return !r(c.cookie, "_pbjs_id_optout") && "1" !== n && t ? ";pbc=" + t : ";pbc="
            }
        }
    }), define("quant/quant", ["quant/origin", "quant/windows", "quant/loader", "quant/consent/truste", "quant/consent/uspapi", "quant/consent/manager", "quant/consent/tcf2.0", "quant/normalize", "quant/hashing", "quant/storage-experiment", "quant/session", "quant/utils", "quant/identity-store"], function(e, t, n, r, o, a, i, u, c, s, f, l, p) {
        function d(d, h, v) {
            var g, m, y, q, w, _, b, x, E, S, O, I, j, C, A, P, D, R, T, M, k, z, N, U, L, J, B, Q, V, F, G, H, $, X, Z, K, W, Y, ee, te = e(h),
                ne = new t(d, d.top),
                re = new n(d, h),
                oe = new a([new r(ne, d, d.top, d.PrivacyManagerAPI, "truste.com", "advertising", "quantserve.com", te), new o(ne, d, "__uspapiLocator"), new i(ne, d, "__tcfapiLocator")]),
                ae = new p(d, h, te),
                ie = ["a", "ce", "cm", "dst", "enc", "fpa", "fpan", "je", "ns", "ogl", "rf", "tzo", "sr", "sxl", "sxc", "ses"],
                ue = !1,
                ce = !1,
                se = 0,
                fe = [],
                le = [],
                pe = [],
                de = [],
                he = {},
                ve = 0,
                ge = null,
                me = {},
                ye = {},
                qe = [].slice;
            ! function() {
                var e;
                e = h.createElement("script"), g = "async" in e ? 1 : e.readyState ? 2 : 3, e = null
            }();
            var we = function(e) {
                try {
                    return {
                        init: q,
                        clean: _e,
                        hash: c.SHA256,
                        push: w,
                        rules: U,
                        require: require,
                        hasRules: J,
                        defaults: F,
                        __qc: function() {
                            return !0
                        }
                    }[e].apply(null, qe.call(arguments, 1))
                } catch (e) {
                    return l.log.error(e), l.reportError(e, "api", {
                        pcode: de[0]
                    }), !1
                }
            };
            we.evts = 0, we.v = 2, we.SD = ae.SD, we.qpixelsent = [], N = function(e) {
                var t, n = e ? e.length || 0 : 0;
                for (t = 0; t < n; t++)
                    if (!e[t]) return !1;
                return !0
            }, V = function(e) {
                (e = e || d._qacct) && (P(de, e) || de.push(e))
            }, P = function(e, t) {
                var n, r = e.length;
                for (n = 0; n < r; n++)
                    if (e[n] === t) return !0;
                return !1
            }, T = function(e) {
                return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }, M = function(e) {
                var t, n, r;
                if ("array" === (n = T(e))) return e.slice(0);
                if ("object" === n) {
                    t = {};
                    for (r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t
                }
                return "string" === n ? "" + e : e
            }, w = function(e, t) {
                _(e, t)
            }, J = function(e) {
                return P(pe, e)
            }, F = function(e, t) {
                var n;
                e && (n = me[e], n && (t = C(t, n)), t.qacct && delete t.qacct, me[e] = t)
            }, G = function(e) {
                var t, n, r, o, a, i;
                if (y(e)) {
                    a = e;
                    for (o in a) {
                        if ("string" == typeof a[o]) {
                            t = e.event || "load", n = e.media || "webpage", "rule" !== t && "load" !== t || "webpage" !== n && "ad" !== n ? _(e) : (i = e.qacct || d._qacct, e.qacct = i, r = ye[i], r = r ? C(r, e) : e, ye[i] = r), V(e.qacct);
                            break
                        }
                        "object" == typeof a[o] && null != a[o] && G(a[o])
                    }
                }
            }, C = function(e, t) {
                var n = {};
                return n.qacct = e.qacct || t.qacct, "load" === e.event || "load" === t.event ? n.event = "load" : e.event && t.event ? n.event = e.event || t.event : n.event = null, n.media = null, "webpage" === e.media || "webpage" === t.media ? n.media = "webpage" : "ad" === e.media || "ad" === t.media ? n.media = "ad" : n.media = e.media || t.media, A(n, e, t), A(n, t, e), n.event || delete n.event, n.media || delete n.media, n
            }, A = function(e, t, n) {
                var r, o, a, i, u, c;
                for (r in t) Object.prototype.hasOwnProperty.call(t, r) && !Object.prototype.hasOwnProperty.call(e, r) && (o = t[r], a = n[r], i = "", u = !!o && "string" == typeof o, c = !!a && "string" == typeof a, u && (i = o), u && c && (i += ","), c && (i += a), e[r] = i)
            }, H = function() {
                var e, t, n = [];
                if (!(ve > 0)) {
                    R();
                    for (e in ye) Object.prototype.hasOwnProperty.call(ye, e) && ye[e] && (t = ye[e], n.push(t), delete ye[e]);
                    1 == n.length && _(n[0]), n.length > 1 && _(n)
                }
            }, $ = function() {
                var e, t, n, r = [];
                for (n = de.slice(0), e = 0; e < n.length; e++) t = n[e], J(t) || r.push(t);
                if (0 === r.length) H();
                else
                    for (e = 0; e < r.length; e++) t = r[e], pe.push(t), I(t)
            }, j = function(e, t, n, r) {
                var o;
                e = d.location.protocol + "//" + e, ge = h.scripts && h.scripts[0] || null;
                var a = ge && ge.parentNode || h.head || h;
                if (o = h.createElement("script"), 1 === g) o.src = e, o.async = !0, o.onload = t, n && (o.onerror = function(e) {
                    o.onerror = null, n(e)
                }), a.insertBefore(o, ge);
                else if (2 === g) {
                    var i = !1;
                    o.onload = o.onreadystatechange = function() {
                        i || "loaded" != o.readyState && "complete" != o.readyState || (i = !0, o.onreadystatechange = null, t())
                    }, o.src = e, a.insertBefore(o, ge)
                } else r && r()
            }, I = function(e) {
                ve++, j("rules.quantcount.com/rules-" + e + ".js", function() {
                    he[e] = 2 === g ? 2 : 0, X()
                }, function(t) {
                    he[e] = 1, l.reportError(t, "ruleFetch", {
                        pcode: e
                    }), X()
                }, function() {
                    he[e] = 4, X()
                })
            }, X = function() {
                ve -= ve > 0 ? 1 : 0, H()
            }, U = function() {
                var e, t, n, r = !0,
                    o = !1;
                if (arguments.length) {
                    for (n = function(e) {
                            r ? G(e) : _(e, !0), o = !0
                        }, e = 0; e < arguments.length; e++) t = qe.call(arguments[e], 0), t.splice(1, 0, n), L.apply(null, t);
                    r = !1, ue && H()
                }
                return o
            }, L = function(e, t) {
                var n, r, o, a, i, u, c, s = [],
                    f = [],
                    l = t || _;
                if ((r = qe.call(arguments, 2)) && r.length) {
                    for (o = r[0] || N, a = r[1], i = r[2], n = i.length, u = 0; u < n; u++) s.push(!1), f.push(null);
                    c = {
                        p: e,
                        f: s,
                        r: o,
                        c: i,
                        a: a,
                        v: f
                    }, J(e) || pe.push(e), le.push(c), B(c, l)
                } else pe.push(e), he[e] = 6
            }, B = function(e, t) {
                var n, r = e && e.c ? e.c.length : 0;
                for (n = 0; n < r; n++) ! function(n) {
                    var r, o;
                    try {
                        r = e.c[n][0], o = e.c[n].slice(1), o.splice(0, 0, function(r) {
                            e.f[n] = !0, e.v[n] = r, Q(e, t)
                        }), r.apply(null, o)
                    } catch (r) {
                        l.reportError(r, "processRule", {
                            pcode: e.p
                        }), e.f[n] = !0, e.v[n] = !1, Q(e, t)
                    }
                }(n)
            }, Q = function(e, t) {
                var n, r, o, a, i, u, c, s = e.a,
                    f = e.f,
                    p = e.v,
                    d = e.r || N;
                if (n = N(f), n && (n = n && d(p)), n)
                    for (i = 0; i < s.length; i++) try {
                        r = s[i][0], o = s[i].length > 1 ? s[i].slice(1) : [], o = o.concat(e.v), a = r.apply(null, o), u = {
                            qacct: e.p,
                            event: "rule"
                        };
                        for (c in a) Object.prototype.hasOwnProperty.call(a, c) && "qacct" !== c && (u[c] = a[c]);
                        t(u)
                    } catch (t) {
                        l.reportError(t, "evalRule", {
                            pcode: e.p
                        });
                        continue
                    }
            }, m = function(e) {
                return e.replace(/\./g, "%2E").replace(/,/g, "%2C")
            }, y = function(e) {
                return void 0 !== e && null != e
            }, z = function(e) {
                var t, n;
                if (e && "object" === T(e))
                    for (n = 0; n < ie.length; n++) t = ie[n], Object.prototype.hasOwnProperty.call(e, t) && e[t] && delete e[t]
            }, S = function(e, t, n) {
                var r, o, a;
                return t && "string" == typeof t.qacct ? r = t.qacct : "string" == typeof d._qacct && (r = d._qacct), r && 0 !== r.length ? (t = k(r, t), delete ye[r], a = me[r], o = he[r], y(o) || (o = 3), ee(t, a, n, r) ? null : u(e, t, a, r, o)) : null
            }, E = function(e) {
                var t, n = [],
                    r = [],
                    o = [];
                for (t in e) e[t] && Object.prototype.hasOwnProperty.call(e, t) && ("uh" === t || "uht" === t ? r.push(";" + t + "=" + e[t]) : n.push(t + "=" + e[t]));
                return o.push(n.join(";")), o.push(r.join("")), o
            }, O = function() {
                var e, t, n, r, o, a = h.getElementsByTagName("meta"),
                    i = "";
                for (e = 0; e < a.length; e++) {
                    if (o = a[e], i.length >= 1e3) return encodeURIComponent(i);
                    y(o) && y(o.attributes) && y(o.attributes.property) && y(o.attributes.property.value) && y(o.content) && (t = o.attributes.property.value, n = o.content, t.length > 3 && "og:" === t.substring(0, 3) && (i.length > 0 && (i += ","), r = n.length > 80 ? 80 : n.length, i += m(t.substring(3, t.length)) + "." + m(n.substring(0, r))))
                }
                return encodeURIComponent(i)
            }, _ = function(e, t) {
                var n, r, o, a, i, u, c, s, p, g, m, q = l.random(),
                    w = "",
                    _ = "",
                    b = "",
                    I = "",
                    j = "1",
                    A = [];
                if (se = 0, y(we.qpixelsent) || (we.qpixelsent = []), y(e)) {
                    if ("object" === (g = T(e))) o = S("", e, t);
                    else if ("array" === g)
                        for (i = 0; i < e.length; i++) m = S("." + (i + 1), e[i], t), o = 0 === i ? m : C(o, m)
                } else "string" == typeof _qacct && (o = S("", null, t));
                if (o) {
                    n = v.cookieEnabled ? "1" : "0", y(d._qmeta) && (w = ";m=" + encodeURIComponent(d._qmeta), d._qmeta = null), u = l.now(), c = l.isDst(), s = ae.getFirstPartyIDString(se), p = ae.getExternalIDString(se), d.location && d.location.href && (_ = encodeURIComponent(d.location.href)), h && h.referrer && (I = encodeURIComponent(h.referrer)), d.self === d.top && (j = "0"), o.url ? b = _ : o.url = _, o.ref || (o.ref = I || ""), r = O(), a = E(o);
                    var P = Y(o.event),
                        D = "engagement" === o.event ? "/engagement" : "/pixel";
                    A.push(D + P + "r=" + q + ";" + a[0]), A.push(a[1]), A.push(s + p), A.push(";ns=" + j + ";ce=" + n + ";qjs=1;qv=bf501fc4-20221215111636"), A.push((o.ref ? "" : ";ref=") + ";d=" + te + ";dst=" + c + ";et=" + u.getTime() + ";tzo=" + u.getTimezoneOffset() + (b ? ";ourl=" + b : "") + w + ";ogl=" + r + ";ses=" + f), fe.push({
                        pixel: A
                    }), x()
                }
            }, Y = function(e) {
                return "engagement" === e ? "?" : ";"
            }, b = function(e) {
                var t = e.pixel;
                oe.consent(function() {
                    return !0
                }).then(function(e) {
                    return e || ae.removeIdentifier(), e ? "quantserve.com" : "quantcount.com"
                }).then(function(e) {
                    var n, r = oe.parameters,
                        o = function() {
                            return function() {
                                return "quantserve.com" === e ? [t[1], t[2]].join("") : ";uh=u;uht=u"
                            }
                        }(),
                        a = "https://pixel." + e,
                        i = [a, t[0], o(), t[3], ";cm=", r.cm, 1 === r.gdpr ? ";gdpr=1;gdpr_consent=" + r.gdpr_consent : ";gdpr=0", r.us_privacy ? ";us_privacy=" + r.us_privacy : "", t[4]].join("");
                    return "function" != typeof CustomEvent ? (n = document.createEvent("CustomEvent"), n.initCustomEvent("q_pixel_fire", !1, !1, {
                        url: i
                    })) : n = new CustomEvent("q_pixel_fire", {
                        detail: {
                            url: i
                        }
                    }), d.dispatchEvent(n), re.image(i).then(function(t) {
                        t && "number" == typeof t.width && 3 === t.width ? ae.removeIdentifier() : "quantserve.com" === e && ae.persistIdentifier()
                    })
                }).catch(function(e) {
                    l.reportError(e, "fire")
                })
            }, x = function() {
                for (; fe.length;) b(fe.shift())
            }, Z = function() {
                var e, t, n = arguments;
                for (D([].slice.call(n)), t = 0; t < n.length; t++) e = n[t], _(e);
                de.length ? $() : H()
            }, D = function(e) {
                var t, n = T(e);
                if ("array" === n)
                    for (t = 0; t < e.length; t++) D(e[t]);
                else "object" === n && V(e.qacct || d._qacct)
            }, R = function() {
                var e;
                if (ce || d._qevents.length || d.ezt.length || "undefined" == typeof _qacct || (_({
                        qacct: d._qacct
                    }), ce = !0), !we.evts) {
                    for (e in d._qevents) d._qevents[e] !== d._qevents.push && Object.prototype.hasOwnProperty.call(d._qevents, e) && _(d._qevents[e]);
                    for (e in d.ezt) d.ezt[e] !== d.ezt.push && Object.prototype.hasOwnProperty.call(d.ezt, e) && _(d.ezt[e]);
                    d._qevents = {
                        push: Z
                    }, d.ezt.push = function() {
                        var e, t = arguments;
                        if (y(d.queueManager))
                            for (e = 0; e < t.length; e++) d.queueManager.push(t[e]);
                        else Z.apply(this, arguments)
                    }, we.evts = 1
                }
            }, W = function(e) {
                var t;
                e && (t = M(e), D(e), d._qevents.push(t), e = null)
            }, K = function(e) {
                e.push = function() {
                    return D([].slice.call(arguments)), $(), [].push.apply(e, arguments)
                }
            }, ee = function(e, t, n, r) {
                t = t || {};
                var o = (e ? e.media : t.media) || "webpage",
                    a = (e ? e.event : t.event) || "load";
                if ("ad" === o && (se = 1), "webpage" === o && "load" === a) {
                    for (var i = 0; i < we.qpixelsent.length; i++)
                        if (we.qpixelsent[i] === r && !n) return !0;
                    we.qpixelsent.push(r)
                }
                return !1
            }, k = function(e, t) {
                var n = ye[e];
                return t ? n && (t = C(t, n)) : t = n, z(t), t
            }, q = function() {
                try {
                    y(d._qevents) || (d._qevents = []), y(d.ezt) || (d.ezt = []), W(d._qoptions), W(d.qcdata), W(d.smarttagdata), we.evts || (K(d._qevents), K(d.ezt)), D(d.ezt), D(d._qevents), D({
                        qacct: d._qacct
                    }), d._qoptions = null, de.length ? $() : H(), s.cleanExperiment(), ue = !0
                } catch (e) {
                    return l.reportError(e, "init"), e
                }
            };
            var _e = function() {
                d._qevents = null, d.ezt = null, d.quantserve = null
            };
            return d.quantserve = d.quantserve || q, we.quantserve = q, we
        }
        return function(e, t, n) {
            try {
                return new d(e, t, n)
            } catch (e) {
                return l.reportError(e, "construct"), e
            }
        }
    }), define("src/main.js", ["quant/quant"], function(e) {
        return void 0 === window.__qc && (window.__qc = new e(window, window.document, window.navigator)), window.__qc("init"), window.__qc
    })
}(window);