window.googletag && typeof googletag._gpt_js_load_2_ == 'function' && googletag._gpt_js_load_2_(function(_, _m) {
    var zL = function(a) {
            if (!yL.test(a)) return null;
            a = Number(a);
            return isNaN(a) ? null : a
        },
        CL = function(a, b, c, d) {
            return AL(a, "fullscreen", BL(d, 952, function(e, f) {
                if (f.source === b) {
                    if (!("eventType" in e)) throw Error("bad message " + JSON.stringify(e));
                    delete e.googMsgType;
                    c(e)
                }
            }))
        },
        FL = function(a, b, c, d) {
            a = new DL(1, a, b, c, d);
            EL(a);
            return a
        },
        GL = function(a) {
            a = void 0 === a ? window : a;
            a = a.googletag;
            return (null == a ? 0 : a.apiReady) ? a : void 0
        },
        HL = function(a) {
            var b = a.ownerDocument,
                c = b.createElementNS("http://www.w3.org/2000/svg", "line");
            c.setAttribute("x1", "22");
            c.setAttribute("y1", "18");
            c.setAttribute("x2", "28");
            c.setAttribute("y2", "12");
            a.appendChild(c);
            b = b.createElementNS("http://www.w3.org/2000/svg", "line");
            b.setAttribute("x1", "28");
            b.setAttribute("y1", "12");
            b.setAttribute("x2", "34");
            b.setAttribute("y2", "18");
            a.appendChild(b)
        },
        IL = function(a) {
            var b = a.ownerDocument,
                c = b.createElementNS("http://www.w3.org/2000/svg", "line");
            c.setAttribute("x1", "22");
            c.setAttribute("y1", "12");
            c.setAttribute("x2", "28");
            c.setAttribute("y2", "18");
            a.appendChild(c);
            b = b.createElementNS("http://www.w3.org/2000/svg", "line");
            b.setAttribute("x1", "28");
            b.setAttribute("y1", "18");
            b.setAttribute("x2", "34");
            b.setAttribute("y2", "12");
            a.appendChild(b)
        },
        JL = function(a) {
            var b;
            return !(null == (b = a.C) || !b.getAttribute("data-vignette-loaded"))
        },
        KL = function(a) {
            var b;
            null == (b = a.C) || b.setAttribute("data-vignette-loaded", "true")
        },
        LL = function(a, b) {
            a.j.maxZIndexListeners.push(b);
            b(_.AD(a))
        },
        ML = function(a, b, c) {
            return _.eh(a.context, b, c)
        },
        BL = function(a, b, c) {
            return _.Xg(a.context, b, c)
        },
        NL = {
            capture: !0
        },
        OL = function(a, b) {
            return new _.Gh(a.x - b.x, a.y - b.y)
        },
        PL = function(a) {
            var b = a.document,
                c = 0;
            if (b) {
                c = b.body;
                var d = b.documentElement;
                if (!d || !c) return 0;
                a = _.yu(a).height;
                if (_.xu(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
                else {
                    b = d.scrollHeight;
                    var e = d.offsetHeight;
                    d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
                    c = b > a ? b > e ? b : e : b < e ? b : e
                }
            }
            return c
        },
        QL = function(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        RL = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a && 20 >= c;) {
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        yL = /^(-?[0-9.]{1,30})$/,
        SL = function(a, b) {
            for (a = [a]; a.length;) {
                var c = a.shift();
                !1 !== b(c) && (c = _.qg(c.children || c.childNodes || [], function(d) {
                    return 1 === d.nodeType
                }), c.length && a.unshift.apply(a, _.Nd(c)))
            }
        },
        TL = function(a) {
            var b = {};
            if (a) {
                var c = /\s*:\s*/;
                _.er((a || "").split(/\s*;\s*/), function(d) {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d && e && (b[d.toLowerCase()] = e)
                    }
                })
            }
            return b
        },
        UL = function(a, b) {
            if ("length" in a.style) {
                a = a.style;
                for (var c = a.length, d = 0; d < c; d++) {
                    var e = a[d];
                    b(a[e], e, a)
                }
            } else a = TL(a.style.cssText), _.jk(a, b)
        },
        VL = function(a, b) {
            b = void 0 === b ? function() {
                return !0
            } : b;
            var c = /!\s*important/i;
            UL(a, function(d, e) {
                !c.test(d) && b(e, d) ? a.style.setProperty(e, d, "important") : c.test(d) && !b(e, d) && a.style.setProperty(e, d, "")
            })
        },
        WL = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        XL = /.*domain\.test$/,
        YL = /\.prod\.google\.com(:\d+)?$/,
        ZL = function(a) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        },
        $L = function(a) {
            if (1 == a.nodeType) return _.rv(a);
            a = a.changedTouches ? a.changedTouches[0] : a;
            return new _.Gh(a.clientX, a.clientY)
        },
        aM = function(a, b) {
            if (b instanceof _.Jh) {
                var c = b.height;
                b = b.width
            } else throw Error("missing height argument");
            a.style.width = _.sv(b, !0);
            a.style.height = _.sv(c, !0)
        },
        bM = function(a, b) {
            var c = a.currentStyle ? a.currentStyle[b] : null;
            if (c)
                if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
                else {
                    b = a.style.left;
                    var d = a.runtimeStyle.left;
                    a.runtimeStyle.left = a.currentStyle.left;
                    a.style.left = c;
                    c = a.style.pixelLeft;
                    a.style.left = b;
                    a.runtimeStyle.left = d;
                    a = +c
                }
            else a = 0;
            return a
        },
        cM = function(a, b) {
            if (_.Er) {
                var c = bM(a, b + "Left"),
                    d = bM(a, b + "Right"),
                    e = bM(a, b + "Top");
                a = bM(a, b + "Bottom");
                return new _.fv(e, d, a, c)
            }
            c = _.ov(a, b + "Left");
            d = _.ov(a, b + "Right");
            e = _.ov(a, b + "Top");
            a = _.ov(a, b + "Bottom");
            return new _.fv(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        },
        dM = [9],
        eM = function(a) {
            _.R.call(this, a, -1, dM)
        };
    _.P(eM, _.R);
    var fM = function(a) {
        _.R.call(this, a)
    };
    _.P(fM, _.R);
    var gM = function(a) {
            var b = new fM;
            return _.Zg(b, 1, a)
        },
        hM = function(a, b) {
            return _.Jc(a, 2, b, !1)
        },
        iM = function(a, b) {
            return _.Jc(a, 3, b, !1)
        },
        jM = function(a) {
            _.R.call(this, a)
        };
    _.P(jM, _.R);
    var kM = function(a) {
            var b = new jM;
            return _.Zg(b, 1, a)
        },
        lM = function(a, b) {
            return _.Rg(a, 2, b)
        },
        mM = function(a, b) {
            return _.Jc(a, 3, b, 0)
        },
        oM = function(a, b, c, d, e) {
            var f = [];
            _.jk(a, function(g, h) {
                (g = nM(g, b, c, d, e)) && f.push(h + "=" + g)
            });
            return f.join(b)
        },
        nM = function(a, b, c, d, e) {
            if (null == a) return "";
            b = b || "&";
            c = c || ",$";
            "string" == typeof c && (c = c.split(""));
            if (a instanceof Array) {
                if (d = d || 0, d < c.length) {
                    for (var f = [], g = 0; g < a.length; g++) f.push(nM(a[g], b, c, d + 1, e));
                    return f.join(c[d])
                }
            } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(oM(a, b, c, d, e + 1)) : "...";
            return encodeURIComponent(String(a))
        },
        pM = function() {
            this.D = "&";
            this.m = {};
            this.I = 0;
            this.j = []
        },
        rM = function(a, b) {
            var c = "https://pagead2.googlesyndication.com" + b,
                d = qM(a) - b.length;
            if (0 > d) return "";
            a.j.sort(function(n, m) {
                return n - m
            });
            b = null;
            for (var e = "", f = 0; f < a.j.length; f++)
                for (var g = a.j[f], h = a.m[g], k = 0; k < h.length; k++) {
                    if (!d) {
                        b = null == b ? g : b;
                        break
                    }
                    var l = oM(h[k], a.D, ",$");
                    if (l) {
                        l = e + l;
                        if (d >= l.length) {
                            d -= l.length;
                            c += l;
                            e = a.D;
                            break
                        }
                        b = null == b ? g : b
                    }
                }
            a = "";
            null != b && (a = e + "trn=" + b);
            return c + a
        },
        qM = function(a) {
            var b = 1,
                c;
            for (c in a.m) b = c.length > b ? c.length : b;
            return 3997 - b - a.D.length - 1
        },
        sM = function() {
            this.m = _.Og(23);
            this.D = Math.random()
        };
    sM.prototype.j = function(a, b, c, d) {
        if (((void 0 === c ? 0 : c) ? this.D : Math.random()) < (d || this.m)) try {
            if (b instanceof pM) var e = b;
            else e = new pM, _.jk(b, function(g, h) {
                var k = e,
                    l = k.I++,
                    n = {};
                n[h] = g;
                g = [n];
                k.j.push(l);
                k.m[l] = g
            });
            var f = rM(e, "/pagead/gen_204?id=" + a + "&");
            f && _.tx(_.t, f)
        } catch (g) {}
    };
    var AL = function(a, b, c, d) {
            d = void 0 === d ? null : d;
            var e = function(g) {
                try {
                    var h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            _.db(a, "message", e);
            var f = !1;
            return function() {
                var g = !1;
                f || (f = !0, g = _.Rd(a, "message", e));
                return g
            }
        },
        tM = function(a, b, c, d, e) {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (var f = 0; f < a.length; ++f) 1 < e && tM(a[f], b, c, d, --e)
        },
        uM = function(a, b) {
            return a && a.source ? a.source === b || a.source.parent === b : !1
        },
        vM = function(a) {
            return .05 > Math.abs(_.FD(a) - 1)
        },
        wM = function(a) {
            var b = {
                bottom: "auto",
                clear: "none",
                display: "inline",
                "float": "none",
                height: "auto",
                left: "auto",
                margin: 0,
                "margin-bottom": 0,
                "margin-left": 0,
                "margin-right": "0",
                "margin-top": 0,
                "max-height": "none",
                "max-width": "none",
                opacity: 1,
                overflow: "visible",
                padding: 0,
                "padding-bottom": 0,
                "padding-left": 0,
                "padding-right": 0,
                "padding-top": 0,
                position: "static",
                right: "auto",
                top: "auto",
                "vertical-align": "baseline",
                visibility: "visible",
                width: "auto",
                "z-index": "auto"
            };
            _.er(_.w(Object, "keys").call(Object, b), function(c) {
                var d = a.style[_.qu(c)];
                ("undefined" !== typeof d ? d : a.style[_.lv(a, c)]) || _.mv(a, c, b[c])
            });
            VL(a)
        },
        xM = function(a) {
            var b = 812 === a.screen.height && 375 === a.screen.width || 812 === a.screen.width && 375 === a.screen.height || 414 === a.screen.width && 896 === a.screen.height || 896 === a.screen.width && 414 === a.screen.height;
            return null != (a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) && b
        },
        yM = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1,
            NOSCRIPT: 1
        },
        zM = {
            IMG: " ",
            BR: "\n"
        },
        AM = function(a, b, c, d) {
            if (!(a.nodeName in yM))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in zM) d && "IMG" == a.nodeName && a.hasAttribute("alt") && b.push(" " + a.getAttribute("alt")), b.push(zM[a.nodeName]);
            else
                for (a = a.firstChild; a;) AM(a, b, c, d), a = a.nextSibling
        },
        BM = / \xAD /g,
        CM = /\xAD/g,
        DM = /\u200B/g,
        EM = / +/g,
        FM = /^\s*/;
    var DL = function(a, b, c, d, e) {
        _.Bv.call(this);
        this.slotType = a;
        this.H = b;
        this.Ed = c;
        this.l = d;
        this.Ta = e;
        this.state = 1;
        this.C = new _.tg;
        this.j = new _.tg;
        this.m = new _.tg
    };
    _.P(DL, _.Bv);
    var GM = function(a) {
            return _.fb(function(b) {
                return b.return(a.C.promise)
            })
        },
        HM = function(a) {
            return _.fb(function(b) {
                return b.return(a.j.promise)
            })
        },
        IM = function(a) {
            return _.fb(function(b) {
                return b.return(a.m.promise)
            })
        },
        EL = function(a) {
            var b = CL(a.H, a.Ed, function(c) {
                "adError" === c.eventType ? (a.m.resolve(), a.state = 0) : "adReady" === c.eventType && 1 === a.state ? (c.slotType !== a.slotType && JM(a, {
                    cur_st: a.state,
                    evt: c.eventType,
                    adp_tp: c.slotType
                }), a.C.resolve(), a.state = 2) : "adClosed" === c.eventType && 2 === a.state ? (a.j.resolve(c.result), a.state = 3) : (JM(a, {
                    cur_st: a.state,
                    evt: c.eventType
                }), a.state = 0)
            }, a.l);
            _.Jm(a, b)
        },
        JM = function(a, b) {
            b.type = "err_st";
            b.slot = a.slotType;
            a.Ta.j("fullscreen_tag", b)
        };
    var MM = function(a) {
            var b = KM(_.Au(_.tu(a))) || [];
            return !!RL(a, function(c) {
                if (!_.ja(c) || 1 != c.nodeType) return !1;
                var d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector;
                return !d || 0 <= _.da(b, c) || _.Ig(_.Ju(LM), function(e) {
                    return d.call(c, e)
                })
            })
        },
        KM = function(a) {
            var b = GL(a);
            return b ? _.qg(_.Mc(b.pubads().getSlots(), function(c) {
                return a.document.getElementById(c.getSlotElementId())
            }), function(c) {
                return null != c
            }) : null
        },
        LM = {
            Zf: "ins.adsbygoogle-ablated-ad-slot",
            cg: "body ins.adsbygoogle",
            bg: "iframe[id^=aswift_],iframe[id^=google_ads_frame]",
            og: ".google-auto-placed",
            pg: "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]",
            rg: "iframe[id^=google_ads_iframe]",
            vg: "div[id^=div-gpt-ad]",
            Mg: "ins.adsbygoogle[data-ad-format=autorelaxed]",
            Ng: "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]",
            ug: "div.googlepublisherpluginad",
            ah: "html > ins.adsbygoogle"
        };
    var PM = function(a, b) {
        var c = this;
        this.D = a;
        this.j = !1;
        this.I = b;
        this.m = BL(this.I, 264, function(d) {
            c.j && (NM || (d = Date.now()), c.D(d), NM ? OM.call(_.t, c.m) : _.t.setTimeout(c.m, 17))
        })
    };
    PM.prototype.start = function() {
        this.j || (this.j = !0, NM ? OM.call(_.t, this.m) : this.m(0))
    };
    PM.prototype.stop = function() {
        this.j = !1
    };
    var OM = _.t.requestAnimationFrame || _.t.webkitRequestAnimationFrame,
        NM = !!OM && !/'iPhone'/.test(_.t.navigator.userAgent);
    var QM = function(a, b, c, d) {
        this.I = a;
        this.F = b;
        this.K = c;
        this.progress = 0;
        this.l = null;
        this.j = !1;
        this.D = [];
        this.C = null;
        this.m = new PM((0, _.Uq)(this.O, this), d)
    };
    QM.prototype.O = function(a) {
        if (this.j) this.m.stop();
        else {
            null === this.l && (this.l = a);
            this.progress = (a - this.l) / this.K;
            1 <= this.progress && (this.progress = 1);
            a = this.C ? this.C(this.progress) : this.progress;
            this.D = [];
            for (var b = 0; b < this.I.length; b++) this.D.push((this.F[b] - this.I[b]) * a + this.I[b]);
            this.B();
            1 == this.progress && (this.m.stop(), this.H())
        }
    };
    QM.prototype.H = function() {};
    QM.prototype.B = function() {};
    QM.prototype.stop = function() {
        this.j = !0
    };
    var RM = function(a) {
            return a * a * a
        },
        SM = function(a) {
            a = 1 - a;
            return 1 - a * a * a
        };
    var TM = function(a, b, c, d, e, f, g, h) {
        QM.call(this, [b], [c], d, f);
        this.va = a;
        this.U = e;
        this.o = g ? g : null;
        this.C = h || null
    };
    _.P(TM, QM);
    TM.prototype.B = function() {
        var a = {};
        a[this.U] = this.D[0] + "px";
        _.mv(this.va, a)
    };
    TM.prototype.H = function() {
        this.o && this.o()
    };
    var VM = function(a, b, c) {
        _.Bv.call(this);
        var d = this;
        this.j = a;
        this.m = b;
        this.C = c;
        _.db(this.j, this.m, this.C, NL);
        _.Jm(this, function() {
            return void UM(d)
        })
    };
    _.P(VM, _.Bv);
    var UM = function(a) {
            a.j && _.Rd(a.j, a.m, a.C, NL)
        },
        WM = function(a) {
            this.D = a;
            this.j = [];
            this.m = 0
        };
    WM.prototype.add = function(a) {
        var b = Date.now();
        this.j.push({
            time: b,
            coords: a
        });
        for (a = this.m; a < this.j.length; ++a)
            if (b - this.j[a].time >= this.D) delete this.j[a];
            else break;
        this.m = a;
        a >= this.j.length && (this.j = [], this.m = 0)
    };
    var YM = function(a, b, c, d) {
        _.Bv.call(this);
        var e = this;
        this.l = a;
        this.target = b;
        this.Z = c || b;
        this.ha = d || 100;
        this.B = this.o = this.fa = !1;
        this.H = this.j = this.m = this.C = this.U = this.O = this.K = this.F = null;
        this.oa = new VM(this.Z, "mousedown", function(f) {
            0 == f.button && XM(e, f)
        });
        _.Cm(this, this.oa);
        this.qa = new VM(this.Z, "touchstart", function(f) {
            return XM(e, f)
        });
        _.Cm(this, this.qa);
        this.ma = new VM(this.Z, "click", function(f) {
            e.fa ? e.fa = !1 : f.stopPropagation()
        });
        _.Cm(this, this.ma)
    };
    _.P(YM, _.Bv);
    var ZM = function(a) {
        a = a.touches && a.touches[0] || a;
        return new _.Gh(a.clientX, a.clientY)
    };
    YM.prototype.P = function() {
        if (this.C && this.m && this.j) {
            var a = this.C,
                b = OL(this.j, this.m);
            var c = new _.Gh(a.x + b.x, a.y + b.y);
            a = this.target;
            c instanceof _.Gh ? (b = c.x, c = c.y) : (b = c, c = void 0);
            a.style.left = _.sv(b, !1);
            a.style.top = _.sv(c, !1)
        }
    };
    YM.prototype.T = function() {};
    YM.prototype.M = function() {
        var a = this.target,
            b = _.Du(a);
        var c = $L(a);
        b = $L(b);
        c = new _.Gh(c.x - b.x, c.y - b.y);
        a = cM(a, "margin");
        return OL(c, new _.Gh(a.left, a.top))
    };
    var XM = function(a, b) {
        a.o && $M(a);
        a.o = !0;
        a.C = a.M();
        a.m = ZM(b);
        a.j = a.m;
        a.H = new WM(a.ha);
        a.H.add(a.m);
        a.F = new VM(a.l, "mousemove", (0, _.Uq)(a.Y, a));
        _.Cm(a, a.F);
        a.K = new VM(a.l, "touchmove", (0, _.Uq)(a.Y, a));
        _.Cm(a, a.K);
        a.O = new VM(a.l, "mouseup", (0, _.Uq)(a.ba, a));
        _.Cm(a, a.O);
        a.U = new VM(a.l, "touchend", (0, _.Uq)(a.ba, a));
        _.Cm(a, a.U)
    };
    YM.prototype.Y = function(a) {
        if (this.o)
            if (a.preventDefault(), this.j = ZM(a), this.H.add(this.j), this.B) this.P();
            else {
                var b = this.m,
                    c = this.j;
                a = b.x - c.x;
                b = b.y - c.y;
                10 <= Math.sqrt(a * a + b * b) && (this.P(), this.B = !0)
            }
    };
    YM.prototype.ba = function(a) {
        this.B ? (a.preventDefault(), this.j = ZM(a), this.T()) : this.fa = !0;
        $M(this)
    };
    var $M = function(a) {
        a.o = !1;
        a.B = !1;
        a.C = null;
        a.m = null;
        a.j = null;
        a.H = null;
        a.F && UM(a.F);
        a.K && UM(a.K);
        a.O && UM(a.O);
        a.U && UM(a.U)
    };
    var dN = function(a, b, c, d, e, f, g, h, k, l, n) {
        _.Bv.call(this);
        var m = this;
        this.O = a;
        this.Da = b;
        this.fa = c;
        this.o = d;
        this.ha = f || function() {};
        this.ja = g || function() {};
        this.F = h;
        this.Ta = k;
        this.Y = l;
        this.ba = n;
        _.Jm(this, function() {
            return aN(m, !0)
        });
        this.B = _.Cd("INS", b.document);
        _.Jm(this, function() {
            return m.B = null
        });
        this.m = null;
        HTMLElement.prototype.attachShadow && !ML(this.F, 1013, function() {
            m.m = _.Cd("DIV", b.document);
            m.m.className = "grippy-host";
            m.m.attachShadow({
                mode: "closed"
            }).appendChild(m.B);
            _.Jm(m, function() {
                return m.m = null
            });
            return !0
        }) && (this.m = null);
        this.U = this.l = this.H = !1;
        this.M = 0;
        this.j = e;
        this.Z = !1;
        this.C = this.T = null;
        this.P = b.innerHeight;
        this.ia = "true" === this.O.scroll_detached;
        this.K = "true" === this.O.dismissable;
        this.qa = "true" === this.O.draggable || "top" != this.j;
        this.ma = this.O.expId || "";
        this.la = this.O.qemId || "";
        a = parseInt(this.O.z_index_override, 10);
        this.ka = isNaN(a) ? null : a;
        this.oa = new _.zD(b);
        !this.K && _.t.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(function() {
            var p = m.Da.innerHeight;
            if (2 > Math.abs(p - 460) || 2 > Math.abs(p - 529)) p < m.P && 2 > Math.abs(_.GD(m.Da) - m.M - 68) && (m.Z = !0, m.l && bN(m)), m.P = p
        }, 300);
        cN(this, this.B)
    };
    _.P(dN, _.Bv);
    var cN = function(a, b) {
            wM(b);
            _.bi(b, {
                "background-color": "#FAFAFA",
                display: "block",
                position: "relative",
                "z-index": 1,
                height: "5px",
                "box-shadow": "top" == a.j ? "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
            });
            if ("top" == a.j) {
                var c = {
                        position: "absolute",
                        top: a.o.height + "px",
                        width: "100%"
                    },
                    d;
                _.bi(null != (d = a.m) ? d : b, c)
            }
            var e = _.Cd("SPAN", a.Da.document);
            e.appendChild(eN(a));
            var f = function(g) {
                g.target === e && (g.preventDefault && g.preventDefault(), g.stopImmediatePropagation && g.stopImmediatePropagation(), g.stopPropagation && g.stopPropagation())
            };
            _.db(e, "click", f);
            _.Jm(a, function() {
                return _.Rd(e, "click", f)
            });
            fN(a, e);
            b.className = "ee";
            b.appendChild(e)
        },
        fN = function(a, b) {
            var c = {};
            a = (c.display = "block", c.width = "80px", c.height = "45px", c[a.j] = "0", c.left = "0%", c.marginLeft = "0px", c["pointer-events"] = "none", c);
            c = b.getElementsByTagName("svg")[0];
            _.bi(b, a);
            VL(c)
        },
        gN = function(a) {
            var b;
            return null != (b = a.m) ? b : a.B
        },
        eN = function(a) {
            switch (a.j) {
                case "top":
                    var b = "dropShadowBottom";
                    var c = "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";
                    var d = "0";
                    var e = "up";
                    var f = HL;
                    break;
                case "bottom":
                    b = "dropShadowTop", c = "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z", d = "25", e = "down", f = IL
            }
            var g = a.Da.document,
                h = g.createElementNS("http://www.w3.org/2000/svg", "svg");
            h.style.setProperty("margin", "0 0 0 0px", "important");
            h.style.setProperty("position", "absolute", "important");
            h.style.setProperty(a.j, "0", "important");
            h.style.setProperty("left", "0%", "important");
            h.style.setProperty("display", "block", "important");
            h.style.setProperty("width", "80px", "important");
            h.style.setProperty("height", "30px", "important");
            h.style.setProperty("transform", "none", "important");
            h.style.setProperty("pointer-events", "initial", "important");
            a = g.createElementNS("http://www.w3.org/2000/svg", "defs");
            var k = g.createElementNS("http://www.w3.org/2000/svg", "filter");
            k.setAttribute("id", b);
            k.setAttribute("filterUnits", "userSpaceOnUse");
            k.setAttribute("color-interpolation-filters", "sRGB");
            var l = g.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
            l.setAttribute("in", "SourceAlpha");
            l.setAttribute("result", "TransferredAlpha");
            var n = g.createElementNS("http://www.w3.org/2000/svg", "feFuncR");
            n.setAttribute("type", "discrete");
            n.setAttribute("tableValues", "0.5");
            l.appendChild(n);
            n = g.createElementNS("http://www.w3.org/2000/svg", "feFuncG");
            n.setAttribute("type", "discrete");
            n.setAttribute("tableValues", "0.5");
            l.appendChild(n);
            n = g.createElementNS("http://www.w3.org/2000/svg", "feFuncB");
            n.setAttribute("type", "discrete");
            n.setAttribute("tableValues", "0.5");
            l.appendChild(n);
            k.appendChild(l);
            l = g.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
            l.setAttribute("in", "TransferredAlpha");
            l.setAttribute("stdDeviation", "2");
            k.appendChild(l);
            l = g.createElementNS("http://www.w3.org/2000/svg", "feOffset");
            l.setAttribute("dx", "0");
            l.setAttribute("dy", "0");
            l.setAttribute("result", "offsetblur");
            k.appendChild(l);
            l = g.createElementNS("http://www.w3.org/2000/svg", "feMerge");
            l.appendChild(g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"));
            n = g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
            n.setAttribute("in", "SourceGraphic");
            l.appendChild(n);
            k.appendChild(l);
            a.appendChild(k);
            h.appendChild(a);
            a = g.createElementNS("http://www.w3.org/2000/svg", "path");
            a.setAttribute("d", c);
            a.setAttribute("stroke", "#FAFAFA");
            a.setAttribute("stroke-width", "1");
            a.setAttribute("fill", "#FAFAFA");
            a.style.setProperty("filter", "url(#" + b + ")");
            h.appendChild(a);
            b = g.createElementNS("http://www.w3.org/2000/svg", "rect");
            b.setAttribute("x", "0");
            b.setAttribute("y", d);
            b.setAttribute("width", "80");
            b.setAttribute("height", "5");
            b.style.setProperty("fill", "#FAFAFA");
            h.appendChild(b);
            d = g.createElementNS("http://www.w3.org/2000/svg", "g");
            d.setAttribute("class", e);
            d.setAttribute("stroke", "#616161");
            d.setAttribute("stroke-width", "2px");
            d.setAttribute("stroke-linecap", "square");
            f(d);
            h.appendChild(d);
            return h
        },
        hN = function(a, b) {
            for (var c = a.B.getElementsByTagName("svg")[0].getElementsByTagName("g")[0], d; d = c.firstChild;) c.removeChild(d);
            switch (a.j) {
                case "top":
                    (b ? IL : HL)(c);
                    break;
                case "bottom":
                    (b ? HL : IL)(c)
            }
        },
        iN = function(a, b, c, d) {
            a.Ta.j("flgr", {
                i: b,
                dc: a.l ? "1" : "0",
                fdc: c ? "1" : "0",
                ds: a.K ? "1" : "0",
                expId: a.ma,
                sc: a.ia ? "1" : "0",
                off: d,
                vw: _.yl(a.Da).clientWidth,
                req: a.fa.src,
                tp: a.j,
                h: a.o.height,
                w: a.o.width,
                qemId: a.la
            }, !0, 1)
        },
        bN = function(a) {
            if (!a.H) {
                var b = parseInt(a.C.style[a.j], 10);
                if (b) {
                    a.H = !0;
                    var c = -b / .1;
                    "bottom" == a.j && xM(a.Da) && ML(a.F, 404, function() {
                        return jN(a, "0px", c, "ease-out")
                    });
                    hN(a, !1);
                    b = new TM(a.C, b, 0, c, a.j, a.F, function() {
                        a.H = !1;
                        a.l = !1;
                        a.U = !1;
                        kN(a);
                        a.C.setAttribute("data-anchor-status", "displayed");
                        a.C.setAttribute("data-anchor-shown", !0);
                        hN(a, !1)
                    }, SM);
                    a.ba();
                    b.j = !1;
                    b.m.start()
                } else a.l = !1, a.U = !1
            }
        },
        aN = function(a, b) {
            if (!a.H && a.C) {
                var c = parseInt(a.C.style[a.j], 10),
                    d = -a.o.height - (b ? 30 : 0),
                    e = (c - d) / .1;
                "bottom" == a.j && xM(a.Da) && ML(a.F, 405, function() {
                    return jN(a, "21px", e, "ease-in")
                });
                b || hN(a, !0);
                c === d ? (a.l = !b, a.U = b) : (a.H = !0, c = new TM(a.C, c, d, e, a.j, a.F, function() {
                    a.H = !1;
                    a.l = !b;
                    (a.U = b) || hN(a, !0);
                    b && a.ha();
                    a.C.setAttribute("data-anchor-status", "dismissed")
                }, RM), a.Y(), c.j = !1, c.m.start())
            }
        },
        nN = function(a, b) {
            if ("bottom" !== a.j && "top" !== a.j) throw Error("unsupported reactive type");
            var c = function(f) {
                    f.preventDefault();
                    a.H || (a.Z = !0, a.l ? bN(a) : aN(a, a.K), iN(a, "c", !a.l, 0))
                },
                d = a.B;
            _.db(d, "click", c);
            _.Jm(a, function() {
                return _.Rd(d, "click", c)
            });
            a.m && (_.db(a.m, "click", c), _.Jm(a, function() {
                return a.m && _.Rd(a.m, "click", c)
            }));
            _.mv(b, {
                opacity: 1
            });
            var e = a.Da.document;
            e && (a.C = b, a.qa && (a.T = new("top" == a.j ? lN : mN)(a, e, a.o.height, b, a.B), _.Cm(a, a.T)), e = {
                position: "fixed",
                left: "0px"
            }, e[a.j] = -a.o.height - 30 + "px", _.mv(b, e), _.bi(b, {
                overflow: "visible",
                background: "#FAFAFA"
            }), LL(a.oa, function(f) {
                var g = null == a.ka ? 2147483647 : a.ka;
                _.mv(b, {
                    zIndex: null == f ? g : Math.min(f, g)
                })
            }), bN(a))
        },
        jN = function(a, b, c, d) {
            _.mv(a.fa, {
                transition: c / 1E3 + "s",
                "transition-timing-function": d,
                "margin-top": b
            })
        },
        kN = function(a) {
            a.ja();
            a.ja = function() {}
        },
        oN = function(a, b, c, d, e) {
            YM.call(this, b, d, e);
            this.la = a;
            this.ka = c
        };
    _.P(oN, YM);
    oN.prototype.T = function() {
        var a = this.la;
        if (!a.H) {
            var b = parseInt(a.C.style[a.j], 10);
            b >= -(a.o.height / 2) ? (bN(a), iN(a, "d", !1, b)) : (aN(a, a.K), iN(a, "d", !0, b))
        }
    };
    oN.prototype.P = function() {
        if (null !== this.C && null !== this.m && null !== this.j) {
            var a = this.ja(this.C.y, OL(this.j, this.m).y);
            0 < a && (a = 0);
            a < -this.ka && (a = -this.ka);
            var b = {};
            b[this.ia()] = a + "px";
            _.mv(this.target, b)
        }
    };
    var lN = function(a, b, c, d, e) {
        oN.call(this, a, b, c, d, e)
    };
    _.P(lN, oN);
    lN.prototype.M = function() {
        return new _.Gh(0, parseInt(this.target.style.top, 10))
    };
    lN.prototype.ja = function(a, b) {
        return b - a
    };
    lN.prototype.ia = function() {
        return "top"
    };
    var mN = function(a, b, c, d, e) {
        oN.call(this, a, b, c, d, e)
    };
    _.P(mN, oN);
    mN.prototype.M = function() {
        return new _.Gh(0, parseInt(this.target.style.bottom, 10))
    };
    mN.prototype.ja = function(a, b) {
        return a - b
    };
    mN.prototype.ia = function() {
        return "bottom"
    };
    var pN = function(a, b, c) {
        _.Bv.call(this);
        var d = this;
        this.m = a;
        this.j = b;
        this.C = c;
        this.Z = null;
        _.Jm(this, function() {
            return d.Z = null
        })
    };
    _.P(pN, _.Bv);
    var qN = function(a, b, c, d) {
        if (!a.Z) {
            a.Z = [];
            for (var e = a.m.parentElement; e;) {
                a.Z.push(e);
                if (a.C === e) break;
                e = e.parentNode && 1 === e.parentNode.nodeType ? e.parentNode : null
            }
        }
        e = a.Z.slice();
        !c && a.C === e[e.length - 1] && e.pop();
        var f;
        if (d)
            for (c = e.length - 1; 0 <= c; --c)(f = e[c]) && b.call(a, f, c, e);
        else
            for (c = 0; c < e.length; ++c)(f = e[c]) && b.call(a, f, c, e)
    };
    var rN = function(a, b, c) {
        null !== b && null !== zL(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== zL(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    };
    var zN = function(a, b, c, d, e, f) {
        pN.call(this, a, b, f);
        var g = this;
        this.o = d;
        this.Ta = e;
        this.M = this.qa = this.Y = 0;
        this.Jc = !1;
        this.ba = 0;
        this.ma = !1;
        this.H = null;
        this.P = this.fa = !1;
        this.U = null;
        this.ka = cM(b.document.body, "padding");
        this.B = cM(b.document.body, "padding");
        this.K = 0;
        this.jb = this.O = !1;
        this.ja = !0;
        this.l = c;
        this.F = sN(this);
        this.T = null;
        this.Oa = this.la = this.ha = this.gb = this.Kc = this.Mc = !1;
        this.Tf = _.yu(b || window).height / 2;
        this.Nc = _.yu(b || window).height;
        this.eb = PL(b);
        this.ia = this.xa = !1;
        tN(this);
        this.yb = BL(this.o, 266, function() {
            uN(g)
        });
        this.zb = BL(this.o, 267, function() {
            uN(g)
        });
        this.Ab = BL(this.o, 268, function() {
            if (g.O && g.C && g.H) {
                var h = g.H;
                h.M = _.GD(h.Da)
            }
            h = _.GD(g.j);
            var k = h - g.Y;
            _.G(_.gx) ? vN(g, k) : wN(g, k);
            g.Oa && (0 < k && (g.M += k), g.xa = g.eb - h <= g.Nc, g.Y = h);
            uN(g)
        });
        this.Bb = BL(this.o, 269, function() {
            xN(g)
        });
        this.Vb = BL(this.o, 270, function(h) {
            yN(g, h)
        });
        this.Hc = BL(this.o, 271, function(h) {
            if (h && h.touches) {
                g.U = "touchmove";
                g.K = h.touches.length;
                g.P = !0;
                uN(g);
                if (!g.Jc && h.touches && 0 != h.touches.length && h.touches[0]) {
                    h = h.touches[0].pageY;
                    var k = h - g.qa;
                    g.qa = h;
                    h = k
                } else h = 0;
                0 < h && (g.M += h);
                _.G(_.gx) ? vN(g, h) : wN(g, h)
            }
        });
        this.Ic = BL(this.o, 272, function(h) {
            h && h.touches && h.touches[0] && (g.U = "touchstart", g.K = h.touches.length, g.P = !1, uN(g), g.qa = h.touches[0].pageY, h = h.target, g.Jc = h && "top" == g.l && g.fa && g.H && gN(g.H) && 1 === h.nodeType ? QL(gN(g.H), h) : !1)
        });
        this.Fa = BL(this.o, 273, function() {
            g.ha || (g.ha = !0, _.Rd(g.m, "load", g.Fa), g.la && !g.jb || uN(g))
        });
        _.db(a, "load", this.Fa);
        _.Jm(this, function() {
            return _.Rd(a, "load", g.Fa)
        })
    };
    _.P(zN, pN);
    var BN = function(a) {
            var b = a.j;
            _.db(b, "orientationchange", a.yb);
            _.db(b, "resize", a.zb);
            _.db(b, "scroll", a.Ab);
            _.db(b, "touchcancel", a.Bb);
            _.db(b, "touchend", a.Vb);
            _.db(b, "touchmove", a.Hc);
            _.db(b, "touchstart", a.Ic);
            _.Jm(a, function() {
                return AN(a)
            })
        },
        AN = function(a) {
            var b = a.j;
            _.Rd(b, "orientationchange", a.yb);
            _.Rd(b, "resize", a.zb);
            _.Rd(b, "scroll", a.Ab);
            _.Rd(b, "touchcancel", a.Bb);
            _.Rd(b, "touchend", a.Vb);
            _.Rd(b, "touchmove", a.Hc);
            _.Rd(b, "touchstart", a.Ic)
        };
    zN.prototype.Yf = function(a) {
        var b = this.C;
        if (b && !this.H) {
            for (var c in CN) !CN.hasOwnProperty(c) || c in a || (a[c] = CN[c]);
            this.Mc = "true" === a.use_manual_view || "top" === this.l || !!_.Kl(this.j).wasReactiveAdConfigReceived[2];
            this.Kc = "true" === a.use_important;
            if (c = a.af_l) this.la = "true" === c;
            this.Oa = "true" === a.wait_for_scroll || "top" == this.l;
            DN(this, a);
            this.H = EN(this, a);
            a = this.F.height + 5;
            "bottom" == this.l && xM(this.j) && (a += 20);
            this.T = new _.Jh(this.F.width, a);
            this.xa = this.Nc >= this.eb;
            a = this.C;
            c = this.H && gN(this.H);
            a && c && ("top" == this.l ? a.appendChild(c) : a.insertBefore(c, a.firstChild));
            BN(this);
            this.fa = !0;
            b.setAttribute("data-anchor-status", "ready-to-display")
        }
    };
    var DN = function(a, b) {
            var c = parseInt(b.ht, 10),
                d = 0 < c ? c : null;
            b = parseInt(b.wd, 10);
            var e = 0 < b ? b : null;
            null != d && (a.F.height = d);
            null != e && (a.F.width = e);
            qN(a, function(f) {
                rN(f, e, d)
            }, !1, !0);
            rN(a.m, e, d)
        },
        EN = function(a, b) {
            b = new dN(b, a.j, a.m, a.F, a.l, function() {
                if (!a.ma) {
                    a.ma = !0;
                    AN(a);
                    var c = a.C;
                    _.Cu(c);
                    FN(a);
                    c && (c.style.display = "none")
                }
            }, function() {
                return void GN(a)
            }, a.o, a.Ta, function() {
                _.G(_.gx) && !a.ia && (a.ia = !0, vN(a, null));
                _.zF(a.L, a.slotId)
            }, function() {
                _.G(_.gx) && a.ia && (a.ia = !1, vN(a, null));
                a.Pf && _.AF(a.L, a.slotId)
            });
            _.Cm(a, b);
            return b
        },
        tN = function(a) {
            if (a.ja) {
                var b = a.C;
                b && (b.style.display = "none");
                FN(a);
                a.ja = !1
            }
        };
    zN.prototype.bb = function() {
        this.jb = !0;
        if (!this.O && HN(this) && (this.ha || !this.la)) {
            var a = this.C;
            a && (IN(this), qN(this, function(b) {
                wM(b)
            }, !0), nN(this.H, a), JN(this), this.O = !0, (a = this.m.contentWindow) && tM(a, "ig", {
                rr: "vis-aa"
            }, "*", 2))
        }
    };
    var JN = function(a) {
            var b = a.C;
            if (b) {
                var c = a.H,
                    d = c.Da,
                    e = _.GD(d);
                10 > Math.abs(e - c.M) || (d = e + 10 + _.yl(d).clientHeight > _.yl(d).offsetHeight, d = 10 > e || d, c.ia || c.Z || c.H || (c.l || d ? c.l && d && bN(c) : aN(c, !1)), c.M = e);
                a.ja || (_.G(_.gx) ? KN(a, LN(a)) : a.j.document.body && MN(a.j.document.body, LN(a)), b.style.display = "block", a.ja = !0)
            }
        },
        IN = function(a) {
            var b = a.C;
            if (b && a.m.parentElement) {
                aM(b, a.T);
                var c = a.j.innerWidth;
                _.yl(a.j).scrollWidth > c ? b.style.width = c : b.style.width = "100%";
                NN(a)
            }
        },
        NN = function(a) {
            qN(a, function(c) {
                aM(c, a.F);
                c.style.width = "100%"
            }, !1, !0);
            a.m.style.display = "block";
            a.m.style.margin = "0 auto";
            if (a.Kc) {
                var b = a.C;
                SL(b, function(c) {
                    VL(c, function(d) {
                        return c === b && /display|bottom/i.test(d) ? !1 : !0
                    });
                    if ("svg" === c.nodeName) return !1
                })
            }
        },
        ON = function(a) {
            if ("bottom" !== a.l && "top" !== a.l) throw Error("Unexpected position: " + a.l);
        },
        LN = function(a) {
            ON(a);
            var b = cM(a.j.document.body, "padding");
            "bottom" == a.l && (b.bottom += a.T.height + 25);
            return b
        },
        sN = function(a) {
            ON(a);
            var b = a.j.innerWidth;
            a = _.Fg(_.Gg, a.m).height || +a.m.height || 0;
            return new _.Jh(b, a)
        },
        xN = function(a) {
            a.U = "touchcancel";
            _.t.setTimeout(BL(a.o, 274, function() {
                "touchcancel" === a.U && (a.K = 0, a.P = !1, uN(a))
            }), 1E3)
        },
        yN = function(a, b) {
            if (b && b.touches) {
                a.U = "touchend";
                var c = b.touches.length;
                2 > c ? _.t.setTimeout(BL(a.o, 256, function() {
                    "touchend" === a.U && (a.K = c, a.P = !1, uN(a))
                }), 1E3) : (a.K = c, uN(a));
                a.O && !vM(a.j) && aN(a.H, !0)
            }
        },
        wN = function(a, b) {
            if ("top" == a.l && a.fa && a.H && a.O && 0 > b) {
                var c = PN(a);
                a.ba < c && (a.ba = Math.min(Math.floor(a.ba - b), c), a.j.document.body.style.paddingTop = a.ba + "px")
            }
        },
        vN = function(a, b) {
            var c = a.ja ? PN(a, a.ia) : a.ka.top;
            if ("top" === a.l && a.j.document.body && a.fa && a.H && a.O && a.B.top !== c && 0 !== b) {
                var d = _.gv(a.B);
                null === b ? (d.top = c, KN(a, d)) : (0 < b && a.B.top > c && (d.top = Math.max(c, a.B.top - b), KN(a, d, !1)), 0 > b && a.B.top < c && (d.top = Math.min(c, a.B.top - b), KN(a, d, !1)))
            }
        },
        KN = function(a, b, c, d) {
            c = void 0 === c ? !0 : c;
            var e = a.B.top - b.top,
                f = _.GD(a.j);
            f < e && (void 0 === d || !d) || (MN(a.j.document.body, b), a.B = b, c && a.j.scrollTo(0, f - e))
        },
        FN = function(a) {
            if (_.G(_.gx)) KN(a, a.ka, !0, !0);
            else {
                a.Y = _.GD(a.j);
                if (a.j.document.body) {
                    var b = cM(a.j.document.body, "padding");
                    MN(a.j.document.body, a.ka)
                }
                "top" == a.l && b && 0 < b.top && a.j.scrollTo(0, a.Y - b.top)
            }
        },
        uN = function(a) {
            !a.fa || a.ma || 2 <= a.K && a.P || !HN(a) ? tN(a) : (a.bb(), JN(a))
        };
    zN.prototype.oa = function() {
        return _.Nl(this.j)
    };
    var HN = function(a) {
            if (!a.oa()) return !1;
            var b = a.j;
            if (!a.O && a.Oa) switch (a.l) {
                case "bottom":
                    return a.M >= a.Tf || a.xa;
                case "top":
                    return a.M > PN(a)
            }
            return vM(b)
        },
        PN = function(a, b) {
            b = void 0 === b ? !1 : b;
            return _.G(_.gx) ? b ? a.ka.top + 30 : a.ka.top + 30 + a.T.height - 5 : a.T.height + 30 - 5
        },
        MN = function(a, b) {
            a.style.paddingTop = b.top + "px";
            a.style.paddingRight = b.right + "px";
            a.style.paddingBottom = b.bottom + "px";
            a.style.paddingLeft = b.left + "px"
        },
        GN = function(a) {
            a.Mc && !a.gb && (a.gb = !0, ML(a.o, 257, function() {
                var b = {
                        msg_type: "manual-send-view"
                    },
                    c = a.m.contentWindow;
                c && c.postMessage(a.j.JSON.stringify(b), "*")
            }))
        };
    zN.prototype.Xf = function(a) {
        this.m = a;
        NN(this)
    };
    var CN = {
        ui: "gr",
        gvar: "ar",
        scroll_detached: "true",
        dismissable: "false"
    };
    var RN = function(a) {
            this.j = null;
            this.D = a.match(_.Fu)[3] || "";
            this.I = QN(a);
            this.m = !1
        },
        SN = function(a, b) {
            b ? a.j = new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b", "ig") : a.j = null
        },
        VN = function(a, b, c) {
            if (_.Ig(["data-google-vignette", "data-google-interstitial"], function(f) {
                    return "false" === b.getAttribute(f) || b.closest && !!b.closest("[" + f + '="false"]')
                })) return !1;
            var d = b.href,
                e = d && (d.match(_.Fu)[3] || null);
            if (!TN(a, b, d, e, c)) return !1;
            a.m = !!e && UN(a, e);
            return a.m || !c && !MM(b) && /^https?:\/\//i.test(d) && !/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d)
        },
        TN = function(a, b, c, d, e) {
            if (!c) return !1;
            switch (b.target) {
                case "_top":
                case "_parent":
                    break;
                case "":
                case "_self":
                    if (e) return !1;
                    break;
                default:
                    return !1
            }
            return !d || UN(a, d) && QN(c) == a.I ? !1 : !0
        },
        WN = function(a, b) {
            if (!b || !a.j) return [];
            var c = [];
            AM(b, c, !0, !0);
            b = c.join("");
            b = b.replace(BM, " ").replace(CM, "");
            b = b.replace(DM, "");
            b = b.replace(EM, " ");
            " " != b && (b = b.replace(FM, ""));
            if (!b) return [];
            a = b.match(a.j);
            b = [];
            for (c = 0; a && c < a.length; c++) {
                var d = a[c].toLowerCase();
                0 <= _.da(b, d) || b.push(d)
            }
            return b
        },
        UN = function(a, b) {
            return b.replace(XN, "") == a.D.replace(XN, "")
        },
        QN = function(a) {
            a = a.match(_.Fu);
            var b = a[6];
            return (a[5] || "") + (b ? "?" + b : "") || "/"
        },
        XN = /^(www\.|m\.|mobile\.)*/i;
    var YN = function(a, b, c) {
        pN.call(this, a, b, c);
        this.l = null;
        this.H = b.document;
        this.o = new _.CD(new _.zD(b))
    };
    _.P(YN, pN);
    var cO = function(a) {
            ZN(a, !1);
            var b = a.C;
            b && (qN(a, function(c) {
                _.bi(c, $N);
                wM(c)
            }, !0), a.m.setAttribute("width", ""), a.m.setAttribute("height", ""), _.mv(a.m, $N), _.mv(a.m, aO), _.mv(b, bO), _.mv(b, {
                background: "transparent"
            }), _.bi(b, {
                display: "none",
                position: "fixed"
            }), wM(b), wM(a.m))
        },
        ZN = function(a, b) {
            var c = a.C;
            c && (b ? (_.DD(a.o), _.bi(c, {
                display: "block"
            }), a.H.body && !a.l && (a.l = _.ID(a.H, a.j)), c.setAttribute("tabindex", "0"), c.setAttribute("aria-hidden", "false"), a.H.body.setAttribute("aria-hidden", "true")) : (_.ED(a.o), _.bi(c, {
                display: "none"
            }), a.l && (a.l(), a.l = null), a.H.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden", "true")))
        },
        bO = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        $N = {
            width: "100vw",
            height: "100vh"
        },
        aO = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var fO = function(a, b, c, d, e) {
        e = void 0 === e ? {} : e;
        _.Bv.call(this);
        var f = this;
        this.j = a;
        this.P = b;
        this.K = c;
        this.Ta = d;
        this.bb = {};
        this.Kc = BL(this.K, 168, function(g, h) {
            return void dO(f, g, h)
        });
        this.Nc = BL(this.K, 169, function(g, h) {
            f.Ta.j("ras::xsf", {
                c: h.data.substring(0, 500),
                u: f.j.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        });
        this.la = [];
        eO(this, this.bb, e);
        this.la.push(AL(this.j, "sth", this.Kc, this.Nc))
    };
    _.P(fO, _.Bv);
    var dO = function(a, b, c) {
        try {
            if (!a.Oa(c.origin) || a.P && !uM(c, a.P.contentWindow)) return
        } catch (f) {
            return
        }
        var d = b.msg_type,
            e;
        "string" === typeof d && (e = a.bb[d]) && ML(a.K, 168, function() {
            e.call(a, b, c)
        })
    };
    fO.prototype.Oa = function(a) {
        return _.Xu[a] || WL.test(a) || XL.test(a) || YL.test(a)
    };
    fO.prototype.D = function() {
        for (var a = _.B(this.la), b = a.next(); !b.done; b = a.next()) b = b.value, b();
        this.la.length = 0;
        _.Bv.prototype.D.call(this)
    };
    var jO = function(a, b, c, d, e, f, g, h) {
        fO.call(this, a, b, c, e, {
            fullscreenApi: h
        });
        var k = this;
        this.m = NaN;
        this.oa = !1;
        this.C = null;
        this.ka = !1;
        var l;
        this.qa = null != (l = g.i_expid) ? l : null;
        this.H = _.re();
        this.T = !0;
        this.ba = !1;
        this.xa = "true" === g["i-fvs"];
        this.Y = !0;
        this.ha = null;
        this.o = 0;
        var n;
        this.eb = null != (n = g.qid) ? n : null;
        this.l = this.U = this.F = null;
        this.ja = void 0;
        this.ma = null;
        this.B = d;
        this.M = new RN(a.location.href);
        this.Z = f;
        this.zb = "true" === g.check_screen_change;
        this.jb = _.w(Number, "isNaN").call(Number, Number(g.screen_size_threshold)) ? 0 : Number(g.screen_size_threshold);
        this.Vb = "true" === g.iobs && !!this.j.IntersectionObserver;
        this.Mc = _.br(function() {
            return void gO(k, {
                tth: Date.now() - k.o
            }, .01)
        });
        this.Fa = "true" === g.click_bubble;
        var m, p;
        SN(this.M, null != (p = null == (m = g.stop_word) ? void 0 : m.split(";")) ? p : null);
        this.O = h ? FL(a, b.contentWindow, c, e) : null;
        hO(this);
        this.Fa || iO(this)
    };
    _.P(jO, fO);
    var hO = function(a) {
            a.O && (GM(a.O).then(function() {
                KL(a.B);
                a.fa()
            }), HM(a.O).then(function() {
                return void kO(a)
            }), IM(a.O).then(function() {
                return void a.ia()
            }))
        },
        eO = function(a, b, c) {
            b["i-blur"] = function() {
                a.ka = !0;
                a.ja && (a.Y = !0)
            };
            b["i-no"] = function(d) {
                a.T = !1;
                a.ma = d.i_tslv ? d.i_tslv : null
            };
            c.fullscreenApi || (b["i-adframe-load"] = function() {
                KL(a.B);
                var d = _.we(_.nx);
                0 < d ? setTimeout(function() {
                    return a.fa()
                }, d) : a.fa()
            }, b["i-dismiss"] = function() {
                kO(a)
            }, b.i_iif = function() {
                a.ia()
            })
        };
    jO.prototype.fa = function(a) {
        a = void 0 === a ? !1 : a;
        this.m || (this.m = _.re(), iO(this), a && KL(this.B), gO(this, {
            aflvr: !0,
            al: this.m - this.H
        }, .01))
    };
    var kO = function(a) {
        gO(a, {
            dis: Date.now() - a.o,
            dha: Number(a.ka)
        }, .01);
        if (a.ka) lO(a) ? a.j.history.back() : mO(a);
        else if (_.t.setTimeout(function() {
                mO(a)
            }, 1E3), a.C) {
            var b = Date.now();
            a.j.addEventListener("pagehide", function() {
                gO(a, {
                    pg_hid: Date.now() - b
                }, .01)
            });
            a.ja && (a.Y = !1);
            nO(a, a.C.href)
        }
    };
    jO.prototype.ia = function() {
        this.ba = !0
    };
    var pO = function(a, b) {
            var c = _.re(),
                d = !_.Kl(a.j).wasReactiveAdVisible[9],
                e = WN(a.M, b),
                f = vM(a.j);
            b = oO(a);
            if (864E5 > c - a.H && a.T && !a.ba && !lO(a) && a.m && (a.xa || d) && !e.length && f && b) b = null;
            else {
                var g = new eM;
                c = _.Jc(g, 1, c, 0);
                c = _.Jc(c, 2, 864E5, 0);
                c = _.Jc(c, 3, a.T, !1);
                c = _.Jc(c, 4, a.ba, !1);
                c = _.Jc(c, 5, lO(a), !1);
                c = _.Jc(c, 6, !!a.m, !1);
                a = _.Jc(c, 7, a.xa, !1);
                d = _.Jc(a, 8, !d, !1);
                d = _.jh(d, 9, e);
                f = _.Jc(d, 10, f, !1);
                b = _.Jc(f, 11, b, !1)
            }
            return b
        },
        qO = function(a, b, c) {
            a = _.Cd("LINK", a.j.document);
            a.setAttribute("rel", c);
            a.setAttribute("href", b);
            return a
        },
        rO = function(a, b) {
            for (b = b.target; b;) {
                if ("A" == b.nodeName) {
                    if (VN(a.M, b, b.ownerDocument != a.j.document)) return b;
                    break
                }
                b = b.parentElement
            }
            return null
        };
    jO.prototype.Bb = function() {
        this.Y && (lO(this) ? (gO(this, {
            fnv: 1
        }, .01), nO(this, this.C.href)) : (this.Mc(), mO(this)))
    };
    jO.prototype.D = function() {
        fO.prototype.D.call(this);
        lO(this) && nO(this, this.C.href);
        this.l && (_.Rd(this.j.document, "click", this.l), this.l = null)
    };
    var mO = function(a) {
            a.o && (a.oa = !0, a.l && (_.Rd(a.j.document, "click", a.l), a.l = null), a.U && a.U.parentNode && (a.U.parentNode.removeChild(a.U), a.U = null), a.F && a.F.parentNode && (a.F.parentNode.removeChild(a.F), a.F = null), ZN(a.B, !1))
        },
        iO = function(a) {
            if (!a.l) {
                a.l = BL(a.K, 527, function(e) {
                    return sO(a, e)
                });
                var b = a.Fa ? {} : NL;
                _.db(a.j.document, "click", a.l, b);
                for (var c = a.j.frames, d = 0; d < c.length; d++) try {
                    _.db(c[d].document, "click", a.l, b)
                } catch (e) {}
            }
        },
        gO = function(a, b, c) {
            a.eb && (b.qid = a.eb);
            a.qa && (b.eid = a.qa);
            a.ha && (b.lnk = a.ha.substr(0, 100), a.M.m || (b.inter = "1"));
            var d = _.se();
            d && (b.ns = String(d));
            b.fs = String(_.re() - a.H);
            b.req = a.P.src;
            b.ptt = 17;
            null != a.O && (b.comm = !0);
            a.Ta.j("ia_evt", b, !0, c)
        },
        nO = function(a, b) {
            a = a.j.location;
            var c = void 0 === c ? _.zr : c;
            a: {
                c = void 0 === c ? _.zr : c;
                for (var d = 0; d < c.length; ++d) {
                    var e = c[d];
                    if (e instanceof _.Za && e.af(b)) {
                        b = _.bb(b);
                        break a
                    }
                }
                b = void 0
            }
            b = _.Pa(b || _.bg);
            void 0 !== b && a.replace(b)
        };
    jO.prototype.Hc = function(a) {
        if (this.o || !this.C || this.I) gM(1);
        else {
            a = a.preventDefaultTriggered_;
            var b = VN(this.M, this.C, this.C.ownerDocument != this.j.document),
                c = pO(this, this.C);
            a || !b || c ? (tO(this, this.C, a), b = iM(hM(gM(2), a), b), c && _.Rg(b, 4, c), a ? this.C = null : nO(this, this.C.href)) : this.gb() ? (gO(this, {
                lif: _.re(),
                lase: this.m,
                latt: JL(this.B),
                t: 17
            }, .1), this.o = Date.now(), a = iM(hM(gM(4), a), b), c = JL(this.B), a = _.Jc(a, 6, c, !1), _.A(a, 5, this.o), _.Kl(this.j).wasReactiveAdVisible[8] = !0, this.ha = this.C.href.substr(0, 100), this.Vb || (this.O ? _.t.IntersectionObserver || this.O.Ed.postMessage(JSON.stringify({
                eventType: "visible",
                googMsgType: "fullscreen"
            }), "*") : (a = {}, a = (a.msg_type = "i-view", a), this.P.contentWindow.postMessage(JSON.stringify(a), "*"))), a = this.C.href, this.U = qO(this, a, "prerender"), this.F = qO(this, a, "prefetch"), this.j.document.body.appendChild(this.U), this.j.document.body.appendChild(this.F), lO(this) || (this.j.location.hash = "google_vignette"), this.ja = BL(this.K, 526, (0, _.Uq)(this.Bb, this)), _.t.setTimeout(_.Vq(_.db, this.j, "hashchange", this.ja), 0), a = BL(this.K, 528, (0, _.Uq)(this.Jc, this)), _.db(this.j, "pagehide", a), ZN(this.B, !0)) : (iM(hM(gM(3), a), b), nO(this, this.C.href))
        }
    };
    jO.prototype.gb = function() {
        return !0
    };
    var sO = function(a, b) {
            if (!b || b.defaultPrevented || a.o || a.I) {
                var c = mM(kM(1), a.H);
                a.m && _.A(c, 4, a.m)
            } else if (a.C) c = mM(kM(2), a.H), a.m && _.A(c, 4, a.m);
            else if (c = rO(a, b)) {
                var d = pO(a, c);
                d ? (tO(a, c, !1), c = lM(mM(kM(4), a.H), d), a.m && _.A(c, 4, a.m)) : (a.C = c, ZL(b), b.preventDefault = function() {
                    return b && (b.preventDefaultTriggered_ = !0)
                }, c = mM(kM(5), a.H), a.m && _.A(c, 4, a.m), _.t.setTimeout((0, _.Uq)(a.Hc, a, b), 0))
            } else c = mM(kM(3), a.H), a.m && _.A(c, 4, a.m)
        },
        lO = function(a) {
            return -1 != a.j.location.hash.indexOf("google_vignette")
        };
    jO.prototype.Jc = function() {
        this.oa || gO(this, {
            ttr: Date.now() - this.o
        }, .01);
        mO(this)
    };
    var tO = function(a, b, c) {
            var d = a.j,
                e = _.Kl(d),
                f = !oO(a);
            e = {
                zm: Number(vM(d)),
                sz: Number(f),
                fc: Number(a.T),
                vp: Number(lO(a)),
                al: Number(!!a.m),
                fsi: Number(!!e.wasReactiveAdVisible[9]),
                ag: Number(864E5 > _.re() - a.H)
            };
            c && (e.wsdojl = !0);
            f && (e.rs_sz = a.Z.width + "x" + a.Z.height, e.cr_sz = d.innerWidth + "x" + d.innerHeight);
            b = WN(a.M, b);
            b.length && (e.sw = b.join());
            a.ma && (e.ts = a.ma);
            gO(a, e, .01)
        },
        oO = function(a) {
            if (a.zb) {
                var b = a.j.innerWidth / a.Z.width - 1;
                if (0 > b && Math.abs(b) > a.jb) return !1;
                b = a.j.innerHeight / a.Z.height - 1;
                return 0 > b && Math.abs(b) > a.jb ? !1 : !0
            }
            return a.Z.width < a.Z.height === _.Nl(a.j)
        };
    var uO = function() {
        this.j = null
    };
    var vO = function(a, b, c, d, e, f, g) {
        zN.call(this, c, d, 2 === b ? "top" : "bottom", new _.YD(a), new sM, e);
        this.L = f;
        this.slotId = g;
        this.Pf = _.Ho(this.L, this.slotId);
        2 === b && _.zF(this.L, this.slotId)
    };
    _.P(vO, zN);
    vO.prototype.oa = function() {
        return 0 === (0, _.Ml)() || zN.prototype.oa.call(this)
    };
    var wO = function(a, b, c) {
        YN.call(this, b, a, c);
        cO(this)
    };
    _.P(wO, YN);
    var xO = function(a, b, c, d, e, f, g, h, k, l) {
        jO.call(this, a, b, d, new wO(a, b, c), new sM, e, f, !1);
        this.yb = g;
        this.Ic = h;
        this.Ab = k;
        this.localStorage = l;
        _.Cm(this, this.B)
    };
    _.P(xO, jO);
    xO.prototype.gb = function() {
        var a;
        if (!(a = this.yb)) {
            var b = _.ze(uO),
                c = this.localStorage;
            try {
                var d;
                (d = !c) || (b.j = _.Bl(c, this.Ab), d = !(b.j && _.Al(b.j)));
                if (d) a = !1;
                else {
                    b.j.push(Date.now());
                    var e = JSON.stringify(b.j);
                    c.setItem("__lsv__", e);
                    a = c.getItem("__lsv__") == e
                }
            } catch (f) {
                a = !1
            }
        }
        return a
    };
    xO.prototype.Oa = function() {
        return !0
    };
    xO.prototype.ia = function() {
        jO.prototype.ia.call(this);
        this.Ic()
    };
    var yO = {
        Ie: vO,
        Se: xO
    };
    _.uJ(_m, _.zJ).resolve(yO);
})