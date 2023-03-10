(function(_) {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var q, ca, ea, fa, ha, la, na, pa, sa, ma, ra, ua, wa, xa, ya, Aa, Ca, Ea, Fa, Ga, Ha, Ja, Ia, Ka, La, Qa, Ra, Ta, Va, Ya, $a, cb, eb, kb, ob, rb, ub, sb, xb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Ib, Jb, Lb, Mb, Pb, Qb, Rb, Sb, Tb, Ub, Wb, Xb, Zb, $b, ac, bc, dc, ec, gc, ic, cc, fc, lc, pc, rc, qc, uc, sc, wc, vc, tc, Ac, Cc, Ec, Fc, Hc, Kc, Lc, Oc, Pc, Nc, Qc, Sc, Tc, Wc, ad, cd, Yc, gd, jd, dd, ed, nd, od, pd, qd, ld, md, rd, vd, wd, yd, zd, Ad, Bd, Dd, Id, Jd, C, Ld, Md, Od, Pd, Qd, Sd, Ud, Wd, je, ce, le, me, ne, pe, te, ue, Be, Ie, Ee, Ne, Oe, Ye, Te, Se, Re, Ze, jf, kf, lf, Bf, Hf, Ff, Gf, Mf, Qf, Rf, hg, og, pg, rg, sg, wg, xg, yg, ug, vg, zg, Ag, Cg, Dg, Bg, Hg, Jg, Kg, Lg, Sg, Wg, J, bh, ph, th, vh, yh, Ah, Bh, Ch, Eh, Hh, Kh, Mh, Oh, Nh, Vh, Wh, Xh, Yh, Ph, Zh, Qh, ai, ci, di, fi, ei, ki, ii, li, xi, Ai, pi, qi, Bi, Ci, Di, Fi, Gi, Hi, Ii, Mi, Si, Oi, Ki, aj, Zi, $i, bj, dj, gj, ij, N, kj, lj, mj, oj, qj, rj, sj, uj, Bj, wj, vj, yj, zj, Aj, Sj, Tj, Vj, Wj, ak, dk, hk, nk, pk, rk, sk, tk, wk, zk, Bk, Dk, Ek, Gk, Ik, Jk, Lk, Hk, oa, Nk, Pk, Rk, Wk, el, fl, hl, Yk, ql, rl, tl, vl, El, Il, Jl, Ql, Rl, Sl, Tl, Ul, Wl, Xl, Yl, Zl, am, $l, bm, cm, dm, em, fm, gm, jm, mm, om, pm, qm, rm, sm, tm, um, Am, Fm, Im, Gm, Hm, Pm, Um, Wm, Zm, cn, $m, en, fn, gn, hn, ln, nn, un, on, pn, kn, xn, zn, An, Dn, In, Vn, Wn, Yn, io, lo, mo, no, to, uo, xo, yo, Do, Eo, Ko, Lo, No, Oo, Po, Wo, ap, cp, Rp, Up, Vp, Wp, dq, fq, iq, lq, E, mq, nq, oq, pq, qq, y, rq, sq, tq, Q, uq, vq, wq, Dq, Eq, Fq, gb, ib, jb, Hq, Kq, Iq, Jq, Lq, Mq, ab, Xc, qa, ka, Qq, Rq, Sq, Tq, qe;
    ca = function(a) {
        return a ? a.passive && ba() ? a : a.capture || !1 : !1
    };
    ea = function(a, b) {
        b = _.da(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    fa = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    ha = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    la = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = _.ja(e) ? "o" + ka(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    na = function(a, b) {
        a.sort(b || ma)
    };
    pa = function(a) {
        for (var b = oa, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || ma;
        na(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    sa = function(a, b) {
        if (!qa(a) || !qa(b) || a.length != b.length) return !1;
        for (var c = a.length, d = ra, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    ma = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    ra = function(a, b) {
        return a === b
    };
    ua = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    wa = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = wa.apply(null, ha(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    xa = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    ya = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    Aa = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    Ca = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ba.length; f++) c = Ba[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    Ea = function() {
        var a = _.t.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    Fa = function(a) {
        return -1 != Ea().indexOf(a)
    };
    Ga = function(a) {
        for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
    Ha = function() {
        return Fa("Firefox") || Fa("FxiOS")
    };
    Ja = function() {
        return Fa("Safari") && !(Ia() || Fa("Coast") || Fa("Opera") || Fa("Edge") || Fa("Edg/") || Fa("OPR") || Ha() || Fa("Silk") || Fa("Android"))
    };
    Ia = function() {
        return (Fa("Chrome") || Fa("CriOS")) && !Fa("Edge") || Fa("Silk")
    };
    Ka = function(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[_.w(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    };
    La = function() {
        var a = Ea();
        if (Fa("Trident") || Fa("MSIE")) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        a = Ga(a);
        b = Ka(a);
        return Fa("Opera") ? b(["Version", "Opera"]) : Fa("Edge") ? b(["Edge"]) : Fa("Edg/") ? b(["Edg"]) : Fa("Silk") ? b(["Silk"]) : Ia() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || ""
    };
    _.Pa = function(a) {
        if (a instanceof Ma) a = Na(a);
        else {
            b: if (Oa) {
                try {
                    var b = new URL(a)
                } catch (c) {
                    b = "https:";
                    break b
                }
                b = b.protocol
            } else c: {
                b = document.createElement("a");
                try {
                    b.href = a
                } catch (c) {
                    b = void 0;
                    break c
                }
                b = b.protocol;b = ":" === b || "" === b ? "https:" : b
            }
            a = "javascript:" !== b ? a : void 0
        }
        return a
    };
    Qa = function(a) {
        throw Error("unexpected value " + a + "!");
    };
    Ra = function(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    Ta = function(a, b) {
        a.textContent = b instanceof Sa && b.constructor === Sa ? b.j : "type_error:SafeScript";
        Ra(a)
    };
    Va = function(a, b) {
        a.src = Ua(b);
        Ra(a)
    };
    Ya = function(a, b) {
        a.write(Wa(b))
    };
    $a = function(a) {
        return new _.Za(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    cb = function(a) {
        for (var b = ab.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return _.bb(c.join(""))
    };
    eb = function(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new y.Promise(function(d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                var h;
                null == (h = g.parentElement) || h.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            };
            g.onerror = function() {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            Va(g, a);
            c && "complete" !== b.document.readyState ? _.db(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    kb = function(a) {
        var b, c, d, e, f, g;
        return _.fb(function(h) {
            switch (h.j) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.m + "&st=") + a.Cb, c = void 0, h.D = 2, gb(h, hb(b), 4);
                case 4:
                    c = h.m;
                    ib(h, 3);
                    break;
                case 2:
                    jb(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.Ub || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.D ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.I,
                        ue: c.bg_hash_basename,
                        te: c.bg_binary,
                        gf: a.j + "_" + a.m,
                        Ub: d,
                        Cb: a.Cb,
                        Dc: e,
                        Lc: f,
                        Cc: g
                    }) : h.return(void 0)
            }
        })
    };
    ob = function(a) {
        var b;
        return _.fb(function(c) {
            if (1 == c.j) return gb(c, kb(a), 2);
            if (b = c.m) {
                var d = "sodar2";
                d = void 0 === d ? "sodar2" : d;
                var e = window,
                    f = e.GoogleGcLKhOms;
                f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
                var g = {};
                f.push((g._ctx_ = b.context, g._bgv_ = b.ue, g._bgp_ = b.te, g._li_ = b.gf, g._jk_ = b.Ub, g._st_ = b.Cb, g._rc_ = b.Dc, g._dl_ = b.Lc, g._g2_ = b.Cc, g));
                if (f = e.GoogleDX5YKUSk) e.GoogleDX5YKUSk = void 0, f[1]();
                d = mb(nb, {
                    basename: d
                });
                eb(d)
            }
            return c.return(b)
        })
    };
    rb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (pb) {
            if (b && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)) throw Error("Found an unpaired surrogate");
            a = (qb || (qb = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f;
                else {
                    if (2048 > f) d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };
    ub = function(a) {
        return null == a || sb(a) ? a : "string" === typeof a ? tb(a) : null
    };
    sb = function(a) {
        return vb && null != a && a instanceof Uint8Array
    };
    xb = function(a) {
        if (a !== wb) throw Error("illegal external caller");
    };
    zb = function(a, b) {
        if (yb) return a[yb] |= b;
        if (void 0 !== a.Ma) return a.Ma |= b;
        Object.defineProperties(a, {
            Ma: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    };
    Ab = function(a, b) {
        yb ? a[yb] && (a[yb] &= ~b) : void 0 !== a.Ma && (a.Ma &= ~b)
    };
    Bb = function(a) {
        var b;
        yb ? b = a[yb] : b = a.Ma;
        return null == b ? 0 : b
    };
    Cb = function(a, b) {
        yb ? a[yb] = b : void 0 !== a.Ma ? a.Ma = b : Object.defineProperties(a, {
            Ma: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        })
    };
    Db = function(a) {
        zb(a, 1);
        return a
    };
    Eb = function(a) {
        return !!(Bb(a) & 2)
    };
    Fb = function(a) {
        zb(a, 2);
        return a
    };
    Gb = function(a) {
        zb(a, 16);
        return a
    };
    Ib = function(a, b) {
        Cb(b, (a | 0) & -51)
    };
    Jb = function(a, b) {
        Cb(b, (a | 18) & -41)
    };
    Lb = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    Mb = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    Pb = function(a, b) {
        if (null != a)
            if ("string" === typeof a) a = a ? new Nb(a, wb) : Ob();
            else if (a.constructor !== Nb)
            if (sb(a)) a = a.length ? new Nb(new Uint8Array(a), wb) : Ob();
            else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    };
    Qb = function(a) {
        a instanceof Nb && (xb(wb), a = a.Eb || "");
        return a
    };
    Rb = function(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && Lb(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)))
    };
    Sb = function(a) {
        return a
    };
    Tb = function(a) {
        return a
    };
    Ub = function(a) {
        return a
    };
    Wb = function(a, b, c) {
        var d = !1;
        if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.Ec === Vb) return a;
        if (d) return new b(a);
        if (c) return new b
    };
    Xb = function(a, b) {
        a = "" + a;
        b = "" + b;
        return a > b ? 1 : a < b ? -1 : 0
    };
    Zb = function(a, b, c, d) {
        a = Wb(a, b, !0);
        c ? Fb(a.ca) : d && (a = Yb(a));
        return a
    };
    $b = function(a) {
        return a
    };
    ac = function(a) {
        return a
    };
    bc = function(a) {
        return a
    };
    dc = function(a, b) {
        a = a || {};
        b = b || {};
        var c = {},
            d;
        for (d in a) Mb(a, d) && (c[d] = 0);
        for (var e in b) Mb(b, e) && (c[e] = 0);
        for (var f in c)
            if (Mb(c, f) && !cc(a, f, a[f], b, f, b[f])) return !1;
        return !0
    };
    ec = function(a) {
        return a && "object" === typeof a ? a.ca || a : a
    };
    gc = function(a, b) {
        if (null == b) return !1;
        a = a.j;
        b = b.j;
        if (a.size != b.size) return !1;
        a = _.w(a, "entries").call(a);
        for (var c; !(c = a.next()).done;)
            if (c = c.value, !fc(c[1], b.get(c[0]))) return !1;
        return !0
    };
    ic = function(a, b, c, d) {
        if (null == d) d = [];
        else if (!Array.isArray(d)) return null;
        return b[c] = hc(a, d)
    };
    cc = function(a, b, c, d, e, f) {
        c = Qb(c);
        f = Qb(f);
        c = ec(c);
        f = ec(f);
        if (c == f) return !0;
        if (vb) {
            var g = sb(c),
                h = sb(f);
            if (g || h) {
                if (g) a = c;
                else if ("string" === typeof c) a = ub(c);
                else return !1;
                if (!h)
                    if ("string" === typeof f) f = ub(f);
                    else return !1;
                if (a.length !== f.length) return !1;
                for (h = 0; h < a.length; h++)
                    if (a[h] !== f[h]) return !1;
                return !0
            }
        }
        if (c instanceof jc) return gc(c, f instanceof jc ? f : ic(c, d, e, f));
        if (f instanceof jc) return gc(f, ic(f, a, b, c));
        if (null == c && Array.isArray(f) && Bb(f) & 1 && !f.length || null == f && Array.isArray(c) && Bb(c) & 1 && !c.length) return !0;
        if (!_.ja(c) || !_.ja(f)) return "number" === typeof c && isNaN(c) || "number" === typeof f && isNaN(f) ? String(c) == String(f) : !1;
        if (c.constructor != f.constructor) return !1;
        if (c.constructor === Array) {
            h = c;
            b = a = void 0;
            c = Math.max(h.length, f.length);
            for (d = 0; d < c; d++)
                if (e = h[d], g = f[d], e && e.constructor == Object && (a = e, e = void 0), g && g.constructor == Object && (b = g, g = void 0), !cc(h, d, e, f, d, g)) return !1;
            return a || b ? (a = a || {}, b = b || {}, dc(a, b)) : !0
        }
        if (c.constructor === Object) return dc(c, f);
        throw Error("Invalid type in JSPB array");
    };
    fc = function(a, b) {
        return cc(void 0, void 0, a, void 0, void 0, b)
    };
    lc = function(a, b) {
        kc = b;
        a = new a(b);
        kc = void 0;
        return a
    };
    pc = function(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (Bb(a) & 128)) return a = Array.prototype.slice.call(a), Rb(a), a
                    } else {
                        if (sb(a)) return mc(a);
                        if (a instanceof Nb) return nc(a);
                        if (a instanceof jc) return oc(a)
                    }
        }
        return a
    };
    rc = function(a, b, c, d) {
        if (null != a) {
            if (Array.isArray(a)) a = qc(a, b, c, void 0 !== d);
            else if (Lb(a)) {
                var e = {},
                    f;
                for (f in a) Mb(a, f) && (e[f] = rc(a[f], b, c, d));
                a = e
            } else a = b(a, d);
            return a
        }
    };
    qc = function(a, b, c, d) {
        var e = Bb(a);
        d = d ? !!(e & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var f = 0; f < a.length; f++) a[f] = rc(a[f], b, c, d);
        c(e, a);
        return a
    };
    uc = function(a) {
        return rc(a, sc, tc)
    };
    sc = function(a) {
        return a.Ec === Vb ? a.toJSON() : a instanceof jc ? oc(a, uc) : pc(a)
    };
    wc = function(a) {
        return rc(a, vc, tc)
    };
    vc = function(a) {
        if (!a) return a;
        if ("object" === typeof a) {
            if (sb(a)) return new Uint8Array(a);
            if (a instanceof jc) return a.size ? hc(a, Gb(xc(a, wc))) : [];
            if (a.Ec === Vb) return yc(a)
        }
        return a
    };
    tc = function(a, b) {
        a & 128 && Rb(b)
    };
    Ac = function(a, b, c, d) {
        a.D && (a.D = void 0);
        if (b >= a.m || d) return zc(a)[b] = c, a;
        a.ca[b + a.ab] = c;
        (c = a.j) && b in c && delete c[b];
        return a
    };
    Cc = function(a, b, c, d, e) {
        var f = z(a, b, d);
        Array.isArray(f) || (f = Bc);
        var g = Bb(f);
        g & 1 || Db(f);
        if (e) g & 2 || Fb(f), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            var h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && Ab(f, 16) : (f = Db(Array.prototype.slice.call(f)), Ac(a, b, f, d))
        }
        return f
    };
    Ec = function(a, b, c, d) {
        var e = Eb(a.ca),
            f = Cc(a, b, 1, d, e),
            g = Bb(f);
        if (!(g & 4)) {
            Object.isFrozen(f) && (f = Db(f.slice()), Ac(a, b, f, d));
            for (var h = 0, k = 0; h < f.length; h++) {
                var l = c(f[h]);
                null != l && (f[k++] = l)
            }
            k < h && (f.length = k);
            zb(f, 5);
            e && (Fb(f), Object.freeze(f))
        }!e && (g & 2 || Object.isFrozen(f)) && (f = Array.prototype.slice.call(f), zb(f, 5), Dc(a, b, f, d));
        return f
    };
    Fc = function(a) {
        return Pb(a, !0)
    };
    Hc = function(a, b, c) {
        var d = !1;
        if (null == b) {
            if (c) return Gc || (Gc = new jc(Fb([])));
            b = []
        } else if (b.constructor === jc) {
            if (0 == (b.m & 2) || c) return b;
            b = xc(b)
        } else Array.isArray(b) ? d = Eb(b) : b = [];
        if (c) {
            if (!b.length) return Gc || (Gc = new jc(Fb([])));
            d || (d = !0, Fb(b))
        } else if (d)
            for (d = !1, b = Array.prototype.slice.call(b), c = 0; c < b.length; c++) {
                var e = b[c] = Array.prototype.slice.call(b[c]);
                Array.isArray(e[1]) && (e[1] = Fb(e[1]))
            }
        d || (Bb(b) & 32 ? Ab(b, 16) : Bb(a.ca) & 16 && Gb(b));
        d = new jc(b, void 0);
        Ac(a, 26, d, !1);
        return d
    };
    _.Jc = function(a, b, c, d) {
        Ic(a);
        c !== d ? Ac(a, b, c) : Ac(a, b, void 0, !1);
        return a
    };
    Kc = function(a, b, c, d, e, f) {
        a.za || (a.za = {});
        var g = a.za[c],
            h = Cc(a, c, 3, d, f);
        if (g) f || (Object.isFrozen(g) ? e || (g = Array.prototype.slice.call(g), a.za[c] = g) : e && Object.freeze(g));
        else {
            g = [];
            var k = !!(Bb(a.ca) & 16),
                l = Eb(h);
            !f && l && (h = Db(Array.prototype.slice.call(h)), Ac(a, c, h, d));
            d = l;
            for (var n = 0; n < h.length; n++) {
                var m = h[n];
                var p = b;
                var r = k,
                    u = !1;
                u = void 0 === u ? !1 : u;
                r = void 0 === r ? !1 : r;
                p = Array.isArray(m) ? new p(r ? Gb(m) : m) : u ? new p : void 0;
                void 0 !== p && (d = d || Eb(m), g.push(p), l && Fb(p.ca))
            }
            a.za[c] = g;
            a = h;
            Object.isFrozen(a) || (b = Bb(a) | 33, Cb(a, d ? b & -9 : b | 8));
            (f || e && l) && Fb(g);
            (f || e) && Object.freeze(g)
        }
        return g
    };
    Lc = function(a, b) {
        return null == a ? b : a
    };
    Oc = function(a) {
        var b = Bb(a);
        if (b & 2) return a;
        a = _.Mc(a, Nc);
        Jb(b, a);
        Object.freeze(a);
        return a
    };
    Pc = function(a, b, c) {
        c = void 0 === c ? Jb : c;
        if (null != a) {
            if (vb && a instanceof Uint8Array) return a.length ? new Nb(new Uint8Array(a), wb) : Ob();
            if (Array.isArray(a)) {
                var d = Bb(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return Cb(a, d | 2), a;
                a = qc(a, Pc, c, !0);
                b = Bb(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.Ec === Vb ? Nc(a) : a instanceof jc ? hc(a, Fb(xc(a, Pc))) : a
        }
    };
    Nc = function(a) {
        if (Eb(a.ca)) return a;
        a = Qc(a, !0);
        Fb(a.ca);
        return a
    };
    Qc = function(a, b) {
        var c = a.ca,
            d = Gb([]),
            e = a.constructor.messageId;
        e && d.push(e);
        0 !== (Bb(c) & 128) && Rb(d);
        b = b || Eb(a.ca) ? Jb : Ib;
        d = lc(a.constructor, d);
        a.wb && (d.wb = a.wb.slice());
        e = !!(Bb(c) & 16);
        for (var f = 0; f < c.length; f++) {
            var g = c[f];
            if (f === c.length - 1 && Lb(g))
                for (var h in g) {
                    var k = +h;
                    if (_.w(Number, "isNaN").call(Number, k)) zc(d)[k] = g[k];
                    else {
                        var l = g[h],
                            n = a.za && a.za[k];
                        n ? Rc(d, k, Oc(n), !0) : _.A(d, k, Pc(l, e, b), !0)
                    }
                } else k = f - a.ab, (l = a.za && a.za[k]) ? Rc(d, k, Oc(l), !1) : _.A(d, k, Pc(g, e, b), !1)
        }
        return d
    };
    Sc = function(a, b) {
        if (Array.isArray(a)) {
            var c = Bb(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && Cb(a, c | d)
        }
    };
    Tc = function(a, b) {
        return pc(b)
    };
    Wc = function(a, b) {
        b.wb && (a.wb = b.wb.slice());
        var c = b.za;
        if (c) {
            b = b.j;
            for (var d in c)
                if (Mb(c, d)) {
                    var e = c[d];
                    if (e) {
                        var f = !(!b || !b[d]),
                            g = +d;
                        if (Array.isArray(e)) {
                            if (e.length)
                                for (f = Uc(a, e[0].constructor, g, f), g = 0; g < Math.min(f.length, e.length); g++) Wc(f[g], e[g])
                        } else throw Error("unexpected object: type: " + Xc(e) + ": " + e);
                    }
                }
        }
    };
    ad = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.B(Yc(c, a)), b = c.next().value, a = c.next().value, c = b);
        Zc = c >>> 0;
        $c = a >>> 0
    };
    cd = function(a) {
        if (16 > a.length) ad(Number(a));
        else if (bd) a = BigInt(a), Zc = Number(a & BigInt(4294967295)) >>> 0, $c = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            $c = Zc = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), $c *= 1E6, Zc = 1E6 * Zc + d, 4294967296 <= Zc && ($c += Zc / 4294967296 | 0, Zc %= 4294967296);
            b && (b = _.B(Yc(Zc, $c)), a = b.next().value, b = b.next().value, Zc = a, $c = b)
        }
    };
    Yc = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    gd = function(a, b, c) {
        if (c) {
            var d = {},
                e;
            for (e in c) {
                if (Mb(c, e)) {
                    var f = c[e],
                        g = f.Wf;
                    g || (d.Ib = f.oh || f.xh.Oc, f.se ? (d.Tc = dd(f.se), g = function(h) {
                        return function(k, l, n) {
                            return h.Ib(k, l, n, h.Tc)
                        }
                    }(d)) : f.jf ? (d.Sc = ed(f.Ge.Fd, f.jf), g = function(h) {
                        return function(k, l, n) {
                            return h.Ib(k, l, n, h.Sc)
                        }
                    }(d)) : g = d.Ib, f.Wf = g);
                    g(b, a, f.Ge)
                }
                d = {
                    Ib: d.Ib,
                    Tc: d.Tc,
                    Sc: d.Sc
                }
            }
        }
        fd(b, a)
    };
    jd = function(a, b) {
        var c = a[b];
        "function" == typeof c && 0 === c.length && (c = c(), a[b] = c);
        return Array.isArray(c) && (hd in c || id in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
    };
    dd = function(a) {
        var b = a[kd];
        if (!b) {
            var c = ld(a);
            b = function(d, e) {
                return md(d, e, c)
            };
            a[kd] = b
        }
        return b
    };
    ed = function(a, b) {
        var c = a[kd];
        c || (c = function(d, e) {
            return gd(d, e, b)
        }, a[kd] = c);
        return c
    };
    nd = function(a, b) {
        a.push(b)
    };
    od = function(a, b, c) {
        a.push(b, c.Oc)
    };
    pd = function(a, b, c, d) {
        var e = dd(d),
            f = ld(d).Fd,
            g = c.Oc;
        a.push(b, function(h, k, l) {
            return g(h, k, l, f, e)
        })
    };
    qd = function(a, b, c, d, e, f) {
        var g = ed(d, f),
            h = c.Oc;
        a.push(b, function(k, l, n) {
            return h(k, l, n, d, g)
        })
    };
    ld = function(a) {
        var b = a[id];
        if (b) return b;
        b = a[id] = [];
        var c = nd,
            d = od,
            e = pd,
            f = qd;
        b.Fd = a[0];
        var g = 1;
        if (a.length > g && "number" !== typeof a[g]) {
            var h = a[g++];
            c(b, h)
        }
        for (; g < a.length;) {
            c = a[g++];
            for (var k = g + 1; k < a.length && "number" !== typeof a[k];) k++;
            h = a[g++];
            k -= g;
            switch (k) {
                case 0:
                    d(b, c, h);
                    break;
                case 1:
                    (k = jd(a, g)) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
                    break;
                case 2:
                    k = b;
                    var l = g++;
                    l = jd(a, l);
                    e(k, c, h, l, a[g++]);
                    break;
                case 3:
                    f(b, c, h, a[g++], a[g++], a[g++]);
                    break;
                case 4:
                    f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
                    break;
                default:
                    throw Error("unexpected number of binary field arguments: " + k);
            }
        }
        hd in a && id in a && (a.length = 0);
        return b
    };
    md = function(a, b, c) {
        for (var d = c.length, e = 1 == d % 2, f = e ? 1 : 0; f < d; f += 2)(0, c[f + 1])(b, a, c[f]);
        gd(a, b, e ? c[0] : void 0)
    };
    rd = function(a, b) {
        return {
            wh: a,
            Oc: b
        }
    };
    vd = function(a, b, c) {
        b = z(b, c);
        null != b && ("string" === typeof b && sd(b), null != b && (td(a.j, 8 * c), "number" === typeof b ? (a = a.j, ad(b), ud(a, Zc, $c)) : (c = sd(b), ud(a.j, c.m, c.j))))
    };
    wd = function(a) {
        return a
    };
    yd = function(a, b) {
        var c = xd;
        xd = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    };
    zd = function(a, b, c) {
        yd(a, b, c);
        return a
    };
    Ad = function(a, b, c) {
        b = xd;
        xd = void 0;
        if (!a) {
            if (b) throw Error(b());
            if (c && 0 < c.length) throw Error("[" + c.map(String).join(",") + "]");
            throw Error(String(a));
        }
    };
    Bd = function(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    };
    Dd = function(a) {
        var b = document;
        if (a.length && b.head) {
            a = _.B(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = _.Cd("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    };
    Id = function(a, b, c, d) {
        d = void 0 === d ? [] : d;
        var e = new a.MutationObserver(function(f) {
            f = _.B(f);
            for (var g = f.next(); !g.done; g = f.next()) {
                g = _.B(g.value.removedNodes);
                for (var h = g.next(); !h.done; h = g.next())
                    if (h = h.value, d && (h === b || Ed(h, b))) {
                        f = _.B(d);
                        for (g = f.next(); !g.done; g = f.next()) g.value.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
            }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        Fd(function(f) {
            if (!f.parent || !Gd(f.parent)) return !1;
            for (var g = f.parent.document.getElementsByTagName("iframe"), h = 0; h < g.length; h++) try {
                if (Hd(g[h]) == f) {
                    Id(f.parent, g[h], c, d);
                    break
                }
            } catch (k) {}
            return !1
        }, !1, !1, a)
    };
    Jd = function(a) {
        a = void 0 === a ? _.t : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    };
    C = function(a) {
        var b = ab.apply(1, arguments);
        if (0 === b.length) return Kd(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Kd(c.join(""))
    };
    Ld = function(a, b) {
        var c = Ua(a).toString();
        if (/#/.test(c)) throw Error("");
        var d = /\?/.test(c) ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Kd(c)
    };
    Md = function(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.he] = b.message.toJSON(), c)]
        })])
    };
    Od = function(a) {
        a.ge.apply(a, _.Nd(ab.apply(1, arguments).map(function(b) {
            return {
                he: 2,
                message: b
            }
        })))
    };
    Pd = function(a) {
        a.ge.apply(a, _.Nd(ab.apply(1, arguments).map(function(b) {
            return {
                he: 5,
                message: b
            }
        })))
    };
    Qd = function(a) {
        a && "function" == typeof a.Ba && a.Ba()
    };
    Sd = function(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        var e = _.Cd("IMG", a.document);
        if (c || d) {
            var f = function(g) {
                c && c(g);
                d && ea(a.google_image_requests, e);
                _.Rd(e, "load", f);
                _.Rd(e, "error", f)
            };
            _.db(e, "load", f);
            _.db(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };
    Ud = function() {
        var a = Td;
        return (0, D.fd)(function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }, function() {
            return "unknown enum"
        })
    };
    Wd = function() {
        var a = Vd;
        return (0, D.fd)(function(b) {
            return b instanceof a
        }, function() {
            return (0, D.functionName)(a)
        })
    };
    je = function(a, b) {
        var c;
        a: {
            try {
                if (a) {
                    var d = a.getItem("google_experiment_mod");
                    break a
                }
            } catch (g) {}
            d = null
        }
        d = null != (c = d) ? c : "";
        try {
            var e = Xd(Yd, d);
            if (d) {
                var f = Xd(Yd, d);
                Zd(f, $d(ae(1), -1));
                be(f)
            }
        } catch (g) {
            ce(d), e = new Yd
        }
        if (c = (E = Uc(e, de, 1), _.w(E, "find")).call(E, function(g) {
                return ee(g, 1, 0) === b
            }))
            if (f = fe(c, 2), null === f || isNaN(f)) ce(d);
            else return f;
        d = ge() ? null : Math.floor(1E3 * he());
        if (null === d) return null;
        c ? $d(c, d) : Zd(e, $d(ae(b), d));
        return ie(a, be(e)) ? d : null
    };
    ce = function(a) {
        .01 > Math.random() && ke({
            data: a
        }, "ls_tamp")
    };
    le = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Xd: b.__uspapiReturn.callId
        }
    };
    me = function(a, b) {
        b = void 0 === b ? window : b;
        if (F(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    ne = function(a) {
        return "null" !== a.origin
    };
    pe = function(a, b, c) {
        b = F(b, 5) && ne(c) ? c.document.cookie : null;
        return null === b ? null : (new oe({
            cookie: b
        })).get(a) || ""
    };
    _.re = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : qe()
    };
    _.se = function(a) {
        a = void 0 === a ? _.t : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    te = function(a, b) {
        b = void 0 === b ? _.t : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    ue = function(a) {
        a = void 0 === a ? _.t : a;
        var b = Math.min(te("domLoading", a) || Infinity, te("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(te("responseEnd", a), te("navigationStart", a)) : b
    };
    Be = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = ve.j();
        0 === e.j && (e.j = Math.random() < _.we(xe) ? 2 : 1);
        2 === e.j && (e = {}, ke(_.w(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(ye(window)), e.em = c, e.lid = b, e.eids = _.ze(Ae).j().join(), e), d), "esp"))
    };
    Ie = function(a, b, c, d) {
        Be(18, a);
        try {
            var e = _.re();
            _.we(Ce) && (_.A(b, 8, Number(((0, D.J)(De(b, 8)) - 1).toFixed(3))), _.A(b, 7, Math.round(e / 1E3 / 60)));
            return c().then(function(f) {
                Be(29, a, null, {
                    delta: String(_.re() - e)
                });
                if (null == f) return Be(41, a), Ee(b, 111, d), b;
                null != f && ("string" !== typeof f ? Be(21, a) : f.length || Be(20, a));
                Fe(_.A(b, 2, f), 10);
                Ge().set(b, d) && Be(27, a);
                return b
            }).catch(function(f) {
                Ee(b, 106, d);
                Be(28, a, He(f));
                return b
            })
        } catch (f) {
            return Ee(b, 107, d), Be(1, a, He(f)), y.Promise.resolve(b)
        }
    };
    Ee = function(a, b, c) {
        var d;
        Je(a, Ke(null != (d = Le(a, Me, 10)) ? d : new Me, b));
        Ge().set(a, c)
    };
    Ne = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new y.Promise(function(c) {
            var d = function() {
                c(b());
                _.Rd(a, "load", d)
            };
            _.db(a, "load", d)
        })
    };
    Oe = function(a) {
        var b = [],
            c = RegExp("^_GESPSK-(.+)$");
        try {
            for (var d = 0; d < a.length; d++) {
                var e = (c.exec(a.key(d)) || [])[1];
                e && b.push(e)
            }
        } catch (f) {}
        return b
    };
    Ye = function(a, b, c, d) {
        b = void 0 === b ? null : b;
        c = void 0 === c ? null : c;
        d = void 0 === d ? [] : d;
        var e = _.we(Pe),
            f = new Qe,
            g = Re(c, b),
            h = (E = g.map(function(k) {
                return k.Pb()
            }), _.w(E, "flatMap")).call(E, function(k) {
                return k
            }).map(function(k) {
                return k.na()
            });
        Se(f, a, b, e, h);
        Te(f, g, c, b, e);
        _.G(Ue) && Te(f, d, c, b, e);
        return Uc(f, Ve, 2).length ? mc(We(f, Xe), 3) : null
    };
    Te = function(a, b, c, d, e) {
        if (d && c && "function" === typeof c.getUserIdsAsEidBySource) {
            b = _.B(b);
            for (var f = b.next(); !f.done; f = b.next())
                if (f = f.value, String(f.Pa()) === d) {
                    f = _.B(f.Pb());
                    for (var g = f.next(); !g.done; g = f.next())
                        if (g = g.value.na(), !Ze(a, g)) {
                            var h = null;
                            try {
                                var k = void 0,
                                    l = void 0,
                                    n = void 0;
                                h = null == (k = c.getUserIdsAsEidBySource(g)) ? void 0 : null == (l = k.uids) ? void 0 : null == (n = l[0]) ? void 0 : n.id
                            } catch (m) {
                                k = void 0, Be(45, g, null == (k = m) ? void 0 : k.message)
                            }
                            h && (h.length > e ? (k = {}, Be(12, g, null, (k.sl = String(h.length), k.fp = "1", k))) : (k = $e(g), h = _.A(k, 2, h), h = _.A(h, 11, !0), af(a, 2, Ve, h), h = {}, Be(19, g, null, (h.fp = "1", h))))
                        }
                }
        }
    };
    Se = function(a, b, c, d, e) {
        if (b)
            for (var f = _.we(bf), g = _.B(Oe(b)), h = g.next(); !h.done; h = g.next())
                if (h = h.value, !_.w(e, "includes").call(e, h)) {
                    var k = Ge().get(h, b).qb;
                    if (k) {
                        var l = cf(k);
                        if (2 !== l && 3 !== l) {
                            var n = !1;
                            if (c && (l = /^(\d+)$/.exec(h)) && !(n = _.w(c.split(","), "includes").call(c.split(","), l[1]))) continue;
                            _.A(k, 9, n);
                            l = z(k, 2);
                            n = n ? f : d;
                            0 <= n && l && l.length > n && (n = {}, Be(12, h, null, (n.sl = String(l.length), n)), Ee(k, 108, b), Fe(k, 2));
                            af(a, 2, Ve, k);
                            Be(19, h)
                        }
                    }
                }
    };
    Re = function(a, b) {
        if (!b || "function" !== typeof(null == a ? void 0 : a.getUserIdsAsEidBySource)) return [];
        a = [];
        for (var c = _.B(df(ef)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = null;
            try {
                e = Xd(gf, d)
            } catch (f) {
                d = void 0;
                Be(44, "UNKNOWN_ID", null == (d = f) ? void 0 : d.message);
                continue
            }
            e.Pa() === b && a.push(e)
        }
        return a
    };
    Ze = function(a, b) {
        return Uc(a, Ve, 2).some(function(c) {
            return c.na() === b && hf(c, 2)
        })
    };
    jf = function(a, b) {
        var c, d, e;
        return _.fb(function(f) {
            if (1 == f.j) return c = 0 < b ? a.filter(function(g) {
                return !g.jc
            }) : a, gb(f, y.Promise.all(c.map(function(g) {
                return g.vb.promise
            })), 2);
            if (3 != f.j) {
                if (a.length === c.length) return f.return(0);
                d = a.filter(function(g) {
                    return g.jc
                });
                e = _.re();
                return gb(f, y.Promise.race([y.Promise.all(d.map(function(g) {
                    return g.vb.promise
                })), new y.Promise(function(g) {
                    return void setTimeout(g, b)
                })]), 3)
            }
            return f.return(_.re() - e)
        })
    };
    kf = function(a) {
        var b = function(c) {
            var d = {};
            Be(c, (0, D.J)(a.na()), null, (d.tic = String(Math.round((Date.now() - (0, D.J)(z(a, 3))) / 6E4)), d))
        };
        switch (cf(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                break;
            case 2:
                b(26);
                break;
            case 3:
                Be(9, (0, D.J)(a.na()));
                break;
            case 4:
                b(23)
        }
    };
    lf = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    Bf = function(a, b, c, d) {
        var e, f, g, h, k, l, n, m, p, r, u, v, x, I, K;
        return _.fb(function(M) {
            e = new mf;
            f = _.we(Ce);
            g = new nf(a, c, d);
            h = new of (g.o, c, d);
            k = new pf(g.l, f, d);
            l = new qf(k.l, f, d);
            n = new rf(l.o, f, d);
            m = new of (n.o, c, d);
            r = p = null;
            _.G(sf) ? (u = new tf(n.l, d), H(e, u), p = u.o, v = new uf(u.l, f, d), H(e, v), x = new vf(b, v.l, d), H(e, x), H(e, new of (x.l, c, d)), H(e, new wf(x.l, _.we(Pe), _.we(bf), d)), r = function() {
                var S, T, Y;
                return _.fb(function(aa) {
                    return 1 == aa.j ? (Y = a, gb(aa, x.l.promise, 2)) : aa.return({
                        id: Y,
                        collectorGeneratedData: null != (T = null == (S = aa.m) ? void 0 : z(S, 2)) ? T : null
                    })
                })
            }) : (I = new xf(b, n.l, c, d), H(e, I), p = I.F, r = function() {
                var S;
                return _.fb(function(T) {
                    return 1 == T.j ? gb(T, I.l.promise, 2) : T.return(null != (S = T.m) ? S : {
                        id: a,
                        collectorGeneratedData: null
                    })
                })
            });
            K = new yf(b, p, c, d);
            zf(e, [g, h, k, l, n, m, K]);
            Af(e);
            return M.return(r())
        })
    };
    Hf = function(a, b, c) {
        b ? Cf() === Df(window) || _.G(Ef) ? Ff(a, "encryptedSignalProviders", c) && Ff(a, "secureSignalProviders", c) || (Be(38, ""), Gf(a, "encryptedSignalProviders", b, c), Gf(a, "secureSignalProviders", b, c)) : Be(16, "") : Be(15, "")
    };
    Ff = function(a, b, c) {
        return a[b] instanceof If ? (a[b].addErrorHandler(c), !0) : !1
    };
    Gf = function(a, b, c, d) {
        var e, f = new Jf(null != (e = a[b]) ? e : [], c);
        a[b] = new If(f);
        f.addErrorHandler(d)
    };
    Mf = function(a, b) {
        var c = new mf,
            d = new Kf(b);
        a = new Lf(d.A, a, b);
        zf(c, [d, a]);
        Af(c)
    };
    Qf = function(a, b, c, d) {
        if (!c) return null;
        var e = b.toString();
        if (Nf.has(e)) return null;
        Nf.add(e);
        var f = _.we(Ce);
        e = new mf;
        a = new nf(a, c, d);
        var g = new of (a.o, c, d),
            h = new Of(a.l, d),
            k = new pf(h.l, f, d);
        f = new rf(k.l, f, d);
        var l = new of (f.o, c, d);
        b = new Pf(f.l, b, d);
        c = new of (b.l, c, d);
        zf(e, [a, g, h, k, f, l, b, c]);
        Af(e);
        return e
    };
    Rf = function(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(E = c.allowedFeatures(), _.w(E, "includes")).call(E, a))
    };
    hg = function(a) {
        var b = void 0 === b ? Sf : b;
        var c = _.w(Object, "assign").call(Object, {}, a),
            d = a.id,
            e = a.style;
        a = a.data;
        c = (delete c.id, delete c.style, delete c.data, c);
        if (_.w(Object, "keys").call(Object, c).length) throw Error("Invalid attribute(s): " + _.w(Object, "keys").call(Object, c));
        d = {
            id: d,
            style: e ? e : void 0
        };
        if (a)
            for (e = _.B(_.w(a, "entries").call(a)), a = e.next(); !a.done; a = e.next()) c = _.B(a.value), a = c.next().value, c = c.next().value, (0, D.Yd)(Tf.test(a)), d[a] = c;
        if (!Uf.test("div")) throw Error("");
        if ("DIV" in Vf) throw Error("");
        e = "";
        if (d)
            for (f in d)
                if (Object.prototype.hasOwnProperty.call(d, f)) {
                    if (!Uf.test(f)) throw Error("");
                    c = d[f];
                    if (null != c) {
                        a = f;
                        if (c instanceof Wf) c = Xf(c);
                        else {
                            if ("style" == a.toLowerCase()) throw Error("");
                            if (/^on/i.test(a)) throw Error("");
                            if (a.toLowerCase() in Yf)
                                if (c instanceof Zf) c = Ua(c).toString();
                                else if (c instanceof Ma) c = Na(c);
                            else if ("string" === typeof c) c instanceof Ma || (c = "object" == typeof c && c.Ra ? c.La() : String(c), $f.test(c) ? c = _.bb(c) : (c = String(c), c = c.replace(/(%0A|%0D)/g, ""), c = c.match(ag) ? _.bb(c) : null)), c = (c || _.bg).La();
                            else throw Error("");
                        }
                        c.Ra && (c = c.La());
                        a = a + '="' + cg(String(c)) + '"';
                        e += " " + a
                    }
                }
        var f = "<div" + e;
        null == b ? b = [] : Array.isArray(b) || (b = [b]);
        !0 === dg.div ? f += ">" : (d = eg(b), f += ">" + Wa(d).toString() + "</div>");
        return new fg(f, gg)
    };
    og = function(a) {
        ig();
        var b = jg.googleToken[5] || 0;
        a && (0 != b || kg[3] >= qe() ? ng.xd(a) : (ng.yc().push(a), ng.ae()));
        kg[3] >= qe() && kg[2] >= qe() || ng.ae()
    };
    pg = function(a) {
        a = _.Mc(a.split(/\s+/), function(b) {
            return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
                value: parseFloat(b[1]),
                type: b[2]
            } : {
                value: 0,
                type: "px"
            }
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a
    };
    rg = function(a) {
        if (!a) return [0];
        a = "number" === typeof a ? [a] : a;
        a = _.qg(a, function(b) {
            return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
        });
        la(a);
        na(a, function(b, c) {
            return b - c
        });
        return a
    };
    sg = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {}
        return b ? {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.width || b.right - b.left,
            height: b.height || b.bottom - b.top
        } : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
        }
    };
    wg = function(a, b, c, d) {
        var e = new _.tg,
            f = "",
            g = function(k) {
                try {
                    var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                    f === l.paw_id && (_.Rd(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
                } catch (n) {}
            },
            h = ug(a);
        return h ? (_.db(a, "message", g), f = c(h), e.promise) : (c = vg(a)) ? (f = String(Math.floor(2147483647 * he())), _.db(a, "message", g), b(c, f), e.promise) : null
    };
    xg = function(a) {
        return wg(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    yg = function(a) {
        return !!ug(a) || !!vg(a)
    };
    ug = function(a) {
        var b;
        if ("function" === typeof(null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    };
    vg = function(a) {
        var b, c, d, e, f, g;
        if ("function" === typeof(null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof(null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };
    zg = function(a) {
        var b, c;
        return null != (c = (E = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), _.w(E, "find")).call(E, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    Ag = function(a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c), !d) {
                null != b.googletag || (b.googletag = {
                    cmd: []
                });
                var e, f = null != (e = b.googletag.queryIds) ? e : [];
                f.push(c);
                500 < f.length && f.shift();
                b.googletag.queryIds = f
            }
        } catch (g) {}
    };
    Cg = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = _.B(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            var e = a,
                f = d.value;
            d = c;
            d = void 0 === d ? null : d;
            var g = e.document;
            var h = f.x,
                k = f.y;
            g.hasOwnProperty("_goog_efp_called_") || (g._goog_efp_called_ = g.elementFromPoint(h, k));
            if (g = g.elementFromPoint(h, k)) {
                if (!(h = Bg(g, e, f, d))) a: {
                    d = void 0 === d ? null : d;h = e.document;
                    for (g = g.offsetParent; g && g !== h.body; g = g.offsetParent)
                        if (k = Bg(g, e, f, d)) {
                            h = k;
                            break a
                        }
                    h = null
                }
                d = h || null
            } else d = null;
            if (d) return d
        }
        return null
    };
    Dg = function(a, b, c, d, e) {
        for (var f = [], g = 0; g < e; g++)
            for (var h = 0; h < b; h++) {
                var k = f,
                    l = b - 1,
                    n = e - 1;
                k.push.call(k, {
                    x: (0 === l ? 0 : h / l) * a,
                    y: c + (0 === n ? 0 : g / n) * (d - c)
                })
            }
        return f
    };
    Bg = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("fixed" !== Eg(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= _.Fg(_.Gg, a).width && 1 >= _.Fg(_.Gg, a).height ? !0 : !1;
        if (d) {
            var f, g;
            d.j("ach_evt", {
                url: b.location.href,
                tn: a.tagName,
                id: null != (f = a.getAttribute("id")) ? f : "",
                cls: null != (g = a.getAttribute("class")) ? g : "",
                ign: String(e),
                pw: b.innerWidth,
                ph: b.innerHeight,
                x: c.x,
                y: c.y
            }, !0, 1)
        }
        return e ? null : a
    };
    Hg = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.qg(b, function(d) {
            return c - d < 1E3 * a
        })
    };
    Jg = function(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || _.Ig(d, function(e) {
                    return !_.w(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = Hg(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    };
    Kg = function(a, b) {
        .001 > he() && ke({
            c: a,
            s: b
        }, "gpt_whirs")
    };
    Lg = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    _.Og = function(a) {
        _.ze(Mg).j = !0;
        return Ng[a]
    };
    Sg = function(a) {
        var b = new Pg;
        b = _.Jc(b, 1, Date.now(), 0);
        b = _.Jc(b, 2, a.pvsid, 0);
        b = _.Jc(b, 3, a.Ha, "");
        var c = _.ze(Ae).j();
        b = Dc(b, 4, c);
        b = _.Jc(b, 5, a.ff, 0);
        a = _.Jc(b, 12, a.Be, "");
        var d;
        if (b = null == (d = y.globalThis.performance) ? void 0 : d.memory) {
            d = new Qg;
            try {
                _.Jc(d, 1, b.jsHeapSizeLimit, 0)
            } catch (e) {}
            try {
                _.Jc(d, 2, b.totalJSHeapSize, 0)
            } catch (e) {}
            try {
                _.Jc(d, 3, b.usedJSHeapSize, 0)
            } catch (e) {}
        } else d = void 0;
        d && _.Rg(a, 10, d);
        return a
    };
    Wg = function(a) {
        var b = ue();
        if (a.Zb) {
            var c = a.ob;
            a = Sg(a);
            var d = new Tg;
            b = _.Jc(d, 2, b, 0);
            b = Ug(a, 6, Vg, b);
            Pd(c, b)
        }
    };
    J = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = ab.apply(0, arguments),
                f = _.Xg(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.Zb && a.Ef) {
                    var h = a.ob,
                        k = Sg(a);
                    var l = _.Jc(k, 5, a.ef, 0);
                    var n = new Yg;
                    var m = _.Zg(n, 1, b);
                    var p = _.Jc(m, 2, g, 0);
                    var r = Ug(l, 9, Vg, p);
                    Pd(h, r)
                }
            } catch (u) {}
            return f
        }
    };
    _.Xg = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = ab.apply(0, arguments),
                f = void 0,
                g = !1,
                h = null,
                k = _.ze($g);
            try {
                var l = _.G(ah);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (n) {
                try {
                    if (g) bh.call(this, a, 110, n);
                    else if (bh.call(this, a, b, n), !d) throw n;
                } catch (m) {
                    if ((e = h) && ch && dh() && (ch.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_start"), ch.clearMarks("goog_" + e.label + "_" + e.uniqueId + "_end")), !g && !d) throw n;
                }
            }
            return f
        }
    };
    _.eh = function(a, b, c, d) {
        return _.Xg(a, b, c, void 0 === d ? !1 : d)()
    };
    bh = function(a, b, c) {
        if (a.fe) {
            c = c.error && c.meta && c.id ? c.error : c;
            var d = new fh,
                e = new gh;
            try {
                var f = ye(window);
                _.Jc(e, 1, f, 0)
            } catch (p) {}
            try {
                var g = _.ze(Ae).j();
                Dc(e, 2, g)
            } catch (p) {}
            try {
                _.Jc(e, 3, window.document.URL, "")
            } catch (p) {}
            f = _.Rg(d, 2, e);
            g = new hh;
            b = _.Zg(g, 1, b);
            try {
                var h = ih(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                _.Jc(b, 2, h, "")
            } catch (p) {}
            try {
                var k = ih(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                _.Jc(b, 3, k, "")
            } catch (p) {}
            try {
                var l = ih(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && _.jh(b, 4, l.split(/\n\s*/))
            } catch (p) {}
            h = _.Rg(f, 1, b);
            k = new kh;
            try {
                _.Jc(k, 1, a.Ya || a.Ha, "")
            } catch (p) {}
            try {
                var n = lh();
                _.Jc(k, 2, n, 0)
            } catch (p) {}
            try {
                var m = [].concat(_.Nd(_.w(mh, "keys").call(mh)));
                _.jh(k, 3, m)
            } catch (p) {}
            Ug(h, 4, nh, k);
            _.Jc(h, 5, a.Hd, 0);
            Od(a.ob, h)
        }
    };
    ph = function(a, b) {
        var c, d;
        return null != (d = null == (c = _.w(a, "find").call(a, function(e) {
            e = (0, D.J)(Le(e, oh, 1));
            return e.getWidth() <= b.getWidth() && e.getHeight() <= b.getHeight()
        })) ? void 0 : Uc(c, oh, 2)) ? d : null
    };
    th = function(a, b, c) {
        return "number" === typeof b && "number" === typeof c && Uc(a, qh, 6).length ? ph(Uc(a, qh, 6), rh(sh(new oh, b), c)) : Uc(a, oh, 5)
    };
    vh = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = uh(!1, b), c = th(a, b.width, b.height));
        null != c || (c = th(a));
        return null == c ? [] : c.map(function(d) {
            return F(d, 3) ? "fluid" : [(0, D.sa)(d.getWidth()), (0, D.sa)(d.getHeight())]
        })
    };
    yh = function(a) {
        if (!vh(a).length && wh(a, xh, 16)) return "1x1";
        var b = [],
            c = !1;
        a = _.B(vh(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    Ah = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(a.getAdUnitPath()), c.push(yh(a)), c.push(a.getDomId()));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? zh(c.join(":")).toString() : "0"
    };
    Bh = function(a) {
        return 0 !== a && 1 !== a
    };
    Ch = function(a, b) {
        var c;
        return !(null != (c = F(b, 22)) ? !c : !F(a, 15))
    };
    Eh = function(a) {
        var b = a.document;
        return Dh(a) ? b.URL : b.referrer
    };
    Hh = function(a) {
        try {
            return Fh(a, window.top)
        } catch (b) {
            return new _.Gh(-12245933, -12245933)
        }
    };
    Kh = function(a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.Fg(Ih, a), a = new _.Jh(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    Mh = function(a, b) {
        for (var c = {}, d = _.B(_.w(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = yc(b[e]),
                g = _.ze(Lh),
                h = g.j.get(e);
            null == h ? h = ++_.ze($g).D : g.j.delete(e);
            _.A(f, 20, h);
            c[e] = f
        }
        return {
            V: yc(a),
            R: c
        }
    };
    Oh = function() {
        for (var a = "", b = _.B(Nh()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    Nh = function() {
        var a;
        if ("function" === typeof(null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof(null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    Vh = function(a, b, c, d) {
        var e = Ph(b, a) || Qh(b, a);
        if (!e) return null;
        var f = Hh(e),
            g = e === Qh(b, a),
            h = Rh(function() {
                var p = g ? Qh(b, a) : e;
                return p && Sh(p, window)
            }),
            k = function(p) {
                var r;
                return null == (r = h()) ? void 0 : r.getPropertyValue(p)
            };
        c = vh(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var n;
            f.y += Math.round(Math.min(null != (n = Th(k("padding-top"))) ? n : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var m;
                f.x += Math.round(Math.min(null != (m = Th(k("padding-left"))) ? m : 0, d))
            }
        }
        return f && Uh(e) ? f : new _.Gh(-12245933, -12245933)
    };
    Wh = function(a, b, c, d) {
        var e = Qh(a, c),
            f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = Vh(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    Xh = function(a) {
        return "google_ads_iframe_" + a.toString()
    };
    Yh = function(a) {
        return Xh(a) + "__container__"
    };
    Ph = function(a, b) {
        var c;
        return (null == (c = Qh(a, b)) ? void 0 : c.querySelector('[id="' + Yh(a) + '"]')) || null
    };
    Zh = function(a, b) {
        var c, d;
        return null != (d = null == (c = Ph(a, b)) ? void 0 : c.querySelector('iframe[id="' + Xh(a) + '"]')) ? d : null
    };
    Qh = function(a, b) {
        b = void 0 === b ? document : b;
        return $h().D.get(a) || b.getElementById(a.getDomId())
    };
    ai = function(a) {
        return Math.round(Number(Th(a)))
    };
    ci = function(a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.bi(a, c), a = a.parentElement
    };
    di = function(a, b, c, d, e) {
        _.bi(a, {
            "margin-left": "0px",
            "margin-right": "0px"
        });
        var f = {},
            g = "rtl" === d.direction,
            h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
        d = function() {
            var k = a.getBoundingClientRect().left;
            return g ? h - k : k - h
        };
        b = d();
        return 0 !== b ? (c = function(k) {
            g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
        }, c(-b), _.bi(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.bi(a, f)), !0) : !1
    };
    fi = function(a, b, c, d, e, f, g, h, k) {
        var l = yh(d);
        _.t.setTimeout(_.Xg(a, 459, function() {
            return void ei(a, b, c, e, f, g, l, h, k)
        }), 500)
    };
    ei = function(a, b, c, d, e, f, g, h, k) {
        if (_.t.IntersectionObserver) {
            var l = null,
                n, m = null != (n = Zh(c, b)) ? n : Qh(c, b);
            n = _.Xg(a, 459, function(p) {
                if (p = p && p[0]) {
                    var r = p.boundingClientRect,
                        u = window.innerWidth,
                        v = Math.round(r.left),
                        x = Math.round(r.right),
                        I = 0 > v + 2,
                        K = 0 < x - (u + 2);
                    if (p.intersectionRatio >= 1 - ((0 <= Math.round(r.left) ? 0 : 2) + (Math.round(r.right) <= window.innerWidth ? 0 : 2)) / e || I || K) gi(h, function(M) {
                        if (I || K) {
                            var S = new hi;
                            S.set(8);
                            ii(m) && S.set(10);
                            S = ji(S)
                        } else S = ki(b, c);
                        var T = li(c, m, f),
                            Y = T.Ye;
                        T = T.Ze;
                        mi(M, a);
                        L(M, "qid", k);
                        L(M, "iu", c.getAdUnitPath());
                        L(M, "e", String(S));
                        I && L(M, "ofl", String(v));
                        K && L(M, "ofr", String(x - u));
                        L(M, "ret", e + "x" + f);
                        L(M, "req", g);
                        L(M, "bm", String(d));
                        L(M, "efh", Number(Y));
                        L(M, "stk", Number(T));
                        L(M, "ifi", ni(window))
                    }, _.we(oi)), l && l.unobserve((0, D.J)(m))
                }
            });
            m && (l = new _.t.IntersectionObserver(n, {
                threshold: [1]
            }), (0, D.J)(l).observe(m))
        }
    };
    ki = function(a, b) {
        var c = Zh(b, a) || Qh(b, a),
            d = new hi;
        try {
            var e = c.getBoundingClientRect(),
                f = e.left,
                g = e.top,
                h = e.width,
                k = e.height,
                l = Qh(b, a),
                n = (0, D.J)(Sh(l, window));
            if ("hidden" === n.visibility || "none" === n.display) return ji(d);
            var m = ai(n.getPropertyValue("border-top-width") || 0) + 1;
            b = f + h;
            k = g + k;
            var p = a.elementsFromPoint(f + m + 2, g + m);
            var r = a.elementsFromPoint(b - m - 2, g + m);
            var u = a.elementsFromPoint(b - m - 2, k - m);
            var v = a.elementsFromPoint(f + m + 2, k - m);
            var x = a.elementsFromPoint(b / 2, k - m)
        } catch (K) {
            return d.set(1), ji(d)
        }
        if (!(p && p.length && r && r.length && u && u.length && v && v.length && x && x.length)) return d.set(7), ji(d);
        a = function(K, M) {
            for (var S = !1, T = 0; T < K.length; T++) {
                var Y = K[T];
                if (S) {
                    var aa = Sh(Y, window);
                    if ("hidden" !== aa.visibility && !pi(Y) && !I(c, Y)) {
                        d.set(M);
                        "absolute" === aa.position && d.set(11);
                        break
                    }
                } else c === Y && (S = !0)
            }
        };
        qi(c) && d.set(9);
        var I = function(K, M) {
            return ri(K, M) || ri(M, K)
        };
        f = p[0];
        c === f || I(c, f) || pi(f) || d.set(2);
        f = r[0];
        c === f || I(c, f) || pi(f) || d.set(3);
        f = u[0];
        c === f || I(c, f) || pi(f) || d.set(4);
        f = v[0];
        c === f || I(c, f) || pi(f) || d.set(5);
        if (pi(c)) return ji(d);
        a(p, 12);
        a(r, 13);
        a(u, 14);
        a(v, 15);
        a(x, 6);
        return ji(d)
    };
    ii = function(a) {
        var b = !1,
            c = !1;
        return si(a, function(d) {
            c = c || "scroll" === d.overflowX || "auto" === d.overflowX;
            return (b = b || "flex" === d.display) && c
        })
    };
    li = function(a, b, c) {
        var d = (a = Qh(a)) && Sh(a, window),
            e = d ? "absolute" !== d.position : !0,
            f = !1,
            g = a && a.parentElement,
            h = !1;
        ti(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k === g)) e = xi(k, _.t, -1, -1);
                else {
                    l = l && l.height;
                    var n = (l && _.w(l, "endsWith").call(l, "px") ? ai(l) : 0) >= c;
                    !l || n || "string" === typeof l && _.w(yi, "includes").call(yi, l) || (e = !1)
                }
            f || (k = Sh(k, _.t), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            Ye: e,
            Ze: f
        }
    };
    xi = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.w(yi, "includes").call(yi, e.height) || (null == e ? 0 : e.maxHeight) && !_.w(zi, "includes").call(zi, e.maxHeight) || Ai(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.w(yi, "includes").call(yi, g) || !!f && !_.w(zi, "includes").call(zi, f)
        }, c, d) ? !1 : !0
    };
    Ai = function(a, b, c, d, e) {
        b = b.styleSheets;
        if (!b) return !1;
        var f = a.matches || a.msMatchesSelector;
        d = -1 === d ? Infinity : d;
        e = -1 === e ? Infinity : e;
        for (var g = 0; g < Math.min(b.length, d); ++g) {
            var h = null;
            try {
                var k = b[g],
                    l = null;
                try {
                    l = k.cssRules || k.rules
                } catch (M) {
                    if (15 == M.code) throw M.styleSheet = k, M;
                }
                h = l
            } catch (M) {
                continue
            }
            l = void 0;
            if (null != (l = h) && l.length)
                for (l = 0; l < Math.min(h.length, e); ++l) try {
                    var n = h[l],
                        m, p = c;
                    if (!(m = f.call(a, n.selectorText) && p(n))) a: {
                        var r = void 0;p = a;
                        var u = c,
                            v = e,
                            x = null != (r = n.cssRules) ? r : [];
                        for (r = 0; r < Math.min(x.length, v); r++) {
                            var I = x[r],
                                K = u;
                            if (f.call(p, I.selectorText) && K(I)) {
                                m = !0;
                                break a
                            }
                        }
                        m = !1
                    }
                    if (m) return !0
                } catch (M) {}
        }
        return !1
    };
    pi = function(a) {
        return si(a, function(b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    qi = function(a) {
        return si(a, function(b) {
            var c;
            return (E = ["left", "right"], _.w(E, "includes")).call(E, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    Bi = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    Ci = function(a, b) {
        /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = Kd(b), a.src = Ua(b).toString())
    };
    Di = function(a) {
        if (!/^[0-9a-fA-F-]*$/.test(a)) throw Error("Expected a UUID in the RFC4122 v4 format but received " + a + " instead.");
        return Kd("uuid-in-package:" + a)
    };
    Fi = function(a, b, c) {
        c = void 0 === c ? Ei : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : _.db(a, "load", function() {
            return void c(a, b)
        }))
    };
    Gi = function(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    Hi = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    Ii = function(a) {
        if (a === a.top || Gd(a.top)) return y.Promise.resolve({
            status: 4
        });
        var b = Gi(a);
        if (!b) return y.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && Hi(a.document.referrer)) return y.Promise.resolve({
            status: 3
        });
        var c = new _.tg;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                qc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    Mi = function(a) {
        var b = void 0 === b ? Ji : b;
        var c = Ki(a);
        return c.messageChannelSendRequestFn ? y.Promise.resolve(c.messageChannelSendRequestFn) : new y.Promise(function(d) {
            function e(k) {
                return h.j(k).then(function(l) {
                    return l.data
                })
            }
            var f = _.Cd("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            f.src = Ua(b).toString();
            var g = (new URL(b.toString())).origin,
                h = Li({
                    destination: a,
                    Bc: f,
                    origin: g,
                    Ka: "goog:gRpYw:doubleclick"
                });
            h.j("goog:topics:frame:handshake:ack").then(function(k) {
                "goog:topics:frame:handshake:ack" === k.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    };
    Si = function(a, b, c, d, e, f) {
        function g(m, p) {
            h && ke({
                timeMs: String((b.performance.now() - m).toFixed(2)),
                useCache: p ? "1" : "0"
            }, "topics_stats")
        }
        var h = _.G(Ni),
            k = (h = void 0 === h ? !1 : h) ? b.performance.now() : 0;
        c = Oi(f);
        var l = c.mc,
            n = c.lc;
        c = Ki(b);
        c.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics"
        }).then(function(m) {
            var p = n;
            if (m instanceof Uint8Array) p || (p = !(l instanceof Uint8Array && sa(m, l)));
            else if (Ud()(m)) p || (p = m !== l);
            else return m = Error(JSON.stringify(m)), bh(e.context, 989, m), 7;
            if (p && f) try {
                var r = new Pi;
                var u = _.A(r, 2, _.re());
                m instanceof Uint8Array ? Qi(u, 1, Ri, Pb(m, !1)) : Qi(u, 3, Ri, m);
                f.setItem("goog:cached:topics", be(u))
            } catch (v) {}
            return m
        }), c.getTopicsPromise = (0, D.sa)(a));
        return l && !n ? (g(k, !0), y.Promise.resolve(l)) : c.getTopicsPromise.then(function(m) {
            g(k, !1);
            return m
        })
    };
    Oi = function(a) {
        if (!a) return {
            mc: null,
            lc: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                mc: null,
                lc: !0
            };
            var c = Xd(Pi, b),
                d = Ti(c, Ri);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    var f = Ui(c, Ri, 1),
                        g = Vi(c, f);
                    var h = null == g ? Ob() : g;
                    var k = Wi(h);
                    e = k ? new Uint8Array(k) : Xi || (Xi = new Uint8Array(0));
                    break;
                case 3:
                    e = ee(c, Ui(c, Ri, 3), 0);
                    break;
                default:
                    Qa(d)
            }
            var l = Yi(c, 2) + 6048E5 < _.re();
            return {
                mc: e,
                lc: l
            }
        } catch (n) {
            return {
                mc: null,
                lc: !0
            }
        }
    };
    Ki = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    aj = function(a) {
        if (Ia()) {
            var b = a.document.documentElement.lang;
            Zi(a) ? $i(ye(a), !0, "", b) : (new MutationObserver(function(c, d) {
                Zi(a) && ($i(ye(a), !1, b, a.document.documentElement.lang), d.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    };
    Zi = function(a) {
        return a.document.documentElement.classList.contains("translated-rtl") || a.document.documentElement.classList.contains("translated-ltr")
    };
    $i = function(a, b, c, d) {
        ke({
            ptt: "17",
            pvsid: "" + a,
            ibatl: String(b),
            pl: c,
            nl: d
        }, "translate-event")
    };
    bj = function(a) {
        var b = "";
        Fd(function(c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    dj = function(a) {
        a = (Gd(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!cj(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    gj = function(a, b) {
        var c = ej.get(a);
        c || (b = c = b(), fj.set(b, a), ej.set(a, b));
        return c
    };
    ij = function(a, b) {
        return (0, D.sa)(gj(b, function() {
            return new hj(a, b)
        }))
    };
    N = function(a) {
        return function() {
            return new jj(a, [].concat(_.Nd(ab.apply(0, arguments))))
        }
    };
    kj = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? kj(b) : String(b)
        }).join(", ") + "]"
    };
    lj = function(a, b) {
        b = kj(b);
        b = b.substring(1, b.length - 1);
        return new jj(96, [a, b])
    };
    mj = function(a) {
        return (E = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable".split(" "), _.w(E, "includes")).call(E, a) ? a : null
    };
    oj = function(a, b, c) {
        return gj(c, function() {
            return new nj(a, b, c)
        })
    };
    qj = function(a, b, c) {
        return gj(c, function() {
            return new pj(a, b, c)
        })
    };
    rj = function() {
        var a;
        return null != (a = _.t.googletag) ? a : _.t.googletag = {
            cmd: []
        }
    };
    sj = function(a, b) {
        var c = rj();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    uj = function(a) {
        if (a = tj[a]) {
            var b, c, d;
            return null != (d = null == (c = (b = rj())[a]) ? void 0 : c.call(b)) ? d : null
        }
        return null
    };
    Bj = function(a) {
        var b = window;
        "complete" === _.t.document.readyState ? _.eh(a, 94, function() {
            rj()._pubconsole_disable_ || null !== vj(b) && wj(a, b)
        }) : _.db(_.t, "load", _.Xg(a, 94, function() {
            rj()._pubconsole_disable_ || null !== vj(b) && wj(a, b)
        }));
        _.G(xj) || (sj("disablePublisherConsole", J(a, 93, yj)), sj("onPubConsoleJsLoad", J(a, 731, zj)), sj("openConsole", J(a, 732, function(c) {
            Aj(a, void 0 === c ? "" : c)
        })))
    };
    wj = function(a, b) {
        b = void 0 === b ? _.t : b;
        if (!Cj) {
            var c = new Dj("gpt_pubconsole_loaded");
            mi(c, a);
            L(c, "param", String(vj(b)));
            L(c, "api", String(Ej));
            Fj(c, 1);
            Gj(b.document, Hj);
            Cj = !0
        }
    };
    vj = function(a) {
        var b = Eh(a),
            c;
        return null != (c = (E = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.w(E, "find")).call(E, function(d) {
            return null !== Ij(b, d)
        })) ? c : null
    };
    yj = function() {
        rj()._pubconsole_disable_ = !0
    };
    zj = function() {
        Jj && ((0, D.J)(rj().console).openConsole(Kj), Kj = void 0, Jj = !1)
    };
    Aj = function(a, b) {
        b = void 0 === b ? "" : b;
        Ej = !0;
        var c;
        (null == (c = rj()) ? 0 : c.console) ? (0, D.J)(rj().console).openConsole(b): (b && (Kj = b), Jj = !0, wj(a))
    };
    Sj = function(a, b, c, d, e) {
        if ("string" !== typeof c || Lj(c)) O(e, lj("Slot.setTargeting", [c, d]), a);
        else {
            var f = [];
            Array.isArray(d) ? f = d : qa(d) ? f = _.w(Array, "from").call(Array, d) : d && (f = [d]);
            f = f.map(String);
            (d = (E = Mj(b), _.w(E, "find")).call(E, function(g) {
                return Nj(g) === c
            })) ? Oj(d, f): (d = Oj(Pj(new Qj, c), f), af(b, 9, Qj, d));
            e.info(Rj(c, f.join(), (0, D.J)(b.getAdUnitPath())), a)
        }
    };
    Tj = function(a, b, c, d) {
        if (null != c && "object" === typeof c)
            for (var e = _.B(_.w(Object, "keys").call(Object, c)), f = e.next(); !f.done; f = e.next()) f = f.value, Sj(a, b, f, c[f], d);
        else d.error(lj("Slot.updateTargetingFromMap", [c]), a)
    };
    Vj = function(a, b, c) {
        return gj(c, function() {
            return new Uj(a, b, c, c.j)
        })
    };
    Wj = function(a) {
        return _.w(Object, "assign").call(Object, {}, a, _.w(Object, "fromEntries").call(Object, _.w(Object, "entries").call(Object, a).map(function(b) {
            b = _.B(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    ak = function() {
        var a = {},
            b = Wj(Xj);
        a.OutOfPageFormat = b;
        b = Wj(Yj);
        a.TrafficSource = b;
        b = Wj(Zj);
        a.Taxonomy = b;
        return a
    };
    dk = function() {
        for (var a = bk(ck) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "40"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-40"
    };
    hk = function() {
        if (ek) return ek;
        for (var a = df(fk), b = [], c = 0; c < a.length; c += 2) gk(a[c], a[c + 1], b);
        return ek = b.join("&")
    };
    nk = function(a, b) {
        if (!b || !_.ja(b)) return null;
        var c = !1,
            d = new ik;
        _.jk(b, function(e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? _.A(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? _.A(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? _.A(d, 3, b.sandbox) : c = g = !0;
                    break;
                case "useUniqueDomain":
                    kk();
                    return;
                default:
                    g = !0
            }
            g && a.error(lk("setSafeFrameConfig", mk(b), f, mk(e)))
        });
        return c ? null : d
    };
    pk = function(a) {
        var b = new ik;
        a = _.B(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) ok(c, 1) && _.A(b, 1, F(c, 1)), ok(c, 2) && _.A(b, 2, F(c, 2)), ok(c, 3) && _.A(b, 3, F(c, 3)), ok(c, 4) && _.A(b, 4, F(c, 4));
        return b
    };
    rk = function() {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = qk.exec(null != (b = null == (a = _.Og(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    sk = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    tk = function(a, b) {
        var c = b.j;
        return a.map(function(d) {
            return _.w(c, "find").call(c, function(e) {
                return e.j === d
            })
        }).filter(Wd())
    };
    wk = function(a) {
        var b = _.ze(uk),
            c = [];
        a = _.B(a);
        for (var d = a.next(); !d.done; d = a.next()) {
            d = d.value;
            b.C = d;
            var e = vk(9);
            1 === e.length && (c.push(d), c.push(d + "-" + e[0]))
        }
        return c
    };
    zk = function(a, b, c, d, e, f) {
        var g = xk(f, a, b, d, e, void 0, !0);
        f = g.slotId;
        g = g.Va;
        if (!f || !g) return O(b, lj("PubAdsService.definePassback", [d, e])), null;
        _.A(g, 17, !0);
        c.slotAdded(f, g);
        return {
            Wd: Vj(a, b, new yk(a, f, c)),
            Va: g
        }
    };
    Bk = function(a, b, c, d) {
        return gj(c, function() {
            return new Ak(a, b, c, d)
        })
    };
    Dk = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(Ck) : "fluid" === a
    };
    Ek = function(a) {
        return Array.isArray(a) && 2 === a.length && Ck(a[0]) && Ck(a[1])
    };
    Gk = function(a) {
        return Array.isArray(a) ? rh(sh(new oh, (0, D.sa)(a[0])), (0, D.sa)(a[1])) : Fk()
    };
    Ik = function(a) {
        var b = [];
        if (Hk(a)) b.push(Gk((0, D.J)(a)));
        else if (Array.isArray(a)) {
            a = _.B(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, Hk(c) ? b.push(Gk((0, D.J)(c))) : sa(c, ["fluid"]) && b.push(Fk())
        }
        return b
    };
    Jk = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) return null;
        var b = a[0];
        a = a[1];
        if ("number" === typeof b && 0 <= b) b = Math.floor(b);
        else if (null !== b) return null;
        if ("number" === typeof a && 0 <= a) a = Math.floor(a);
        else if (null !== a) return null;
        return rh(sh(new oh, b), a)
    };
    Lk = function(a) {
        var b = void 0 === b ? window : b;
        if (!a) return {
            xc: [],
            Ja: null
        };
        if (Array.isArray(a) ? 0 : Array.isArray(a.fixed) || "fluid" === a.fixed || Array.isArray(a.max)) {
            var c = Ik(a.fixed);
            if (_.G(Kk)) return {
                xc: c,
                Ja: null
            };
            var d;
            if (d = Jk(a.max)) {
                var e = a.min ? Jk(a.min) : new oh;
                null != (null == e ? void 0 : e.getWidth()) || null != e && sh(e, 0);
                null != (null == e ? void 0 : e.getHeight()) || null != e && rh(e, 0);
                d = {
                    max: d,
                    min: e
                }
            } else d = {
                max: null,
                min: null
            };
            e = d;
            d = e.max;
            e = e.min;
            if (a.max && !d) throw Error("Invalid GPT maximum size: " + JSON.stringify(a));
            if (a.min && !e) throw Error("Invalid GPT minimum size: " + JSON.stringify(a));
            var f;
            if (null != (f = a.fixed) && f.length || d) {
                b = (0, D.J)(d);
                if (0 === b.getWidth() || 0 === b.getHeight()) throw Error("Invalid GPT size: maximums cannot be zero: " + JSON.stringify(a));
                if (e) {
                    f = (0, D.J)(e);
                    var g = f.getWidth(),
                        h = b.getWidth();
                    if (null != g && null != h && g > h) throw Error("Invalid GPT size: minimum width larger than maximum width: " + JSON.stringify(a));
                    f = f.getHeight();
                    b = b.getHeight();
                    if (null != f && null != b && f > b) throw Error("Invalid GPT size: minimum height larger than maximum height: " + JSON.stringify(a));
                }
            } else null == (g = b.console) || null == (h = g.warn) || h.call(g, "Invalid GPT fixed size specification: " + JSON.stringify(a));
            !_.G(Kk) && d && e ? (a = new xh, a = _.Rg(a, 1, d), a = _.Rg(a, 2, e)) : a = null;
            return {
                xc: c,
                Ja: a
            }
        }
        a.length || null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a));
        return {
            xc: Ik(a),
            Ja: null
        }
    };
    Hk = function(a) {
        return Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    oa = function(a, b) {
        a: {
            b = (0, D.sa)(b[0]);a = (0, D.sa)(a[0]);
            for (var c = ma, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = ma(b.length, a.length)
        }
        return b
    };
    Nk = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new Mk("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!Ek(b)) throw new Mk("Size must be an array of two non-negative integers");
        b = rh(sh(new oh, b[0]), b[1]);
        if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
        else if (a = Ik(a[1]), 0 === a.length) throw new Mk("At least one slot size must be present");
        var c = new qh;
        b = _.Rg(c, 1, b);
        return Rc(b, 2, a)
    };
    Pk = function(a, b, c) {
        return gj(c, function() {
            return new Ok(a, b, c)
        })
    };
    Rk = function(a, b) {
        var c, d;
        if (null == b) var e = void 0;
        else {
            e = b.get;
            if (_.G(Qk)) {
                var f = a.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
                f = 3 !== (null == f ? void 0 : f.length) ? a : "/" + f[1] + f[2]
            } else f = a;
            e = e.call(b, f)
        }
        return null != (d = null != (c = e) ? c : null == b ? void 0 : b.get(zh(a))) ? d : 0
    };
    Wk = function(a, b, c, d, e, f) {
        if (null != c && c.size) {
            var g, h;
            f = null != (h = null != (g = null == f ? void 0 : f.adUnits) ? g : null == b ? void 0 : b.adUnits) ? h : [];
            b = {};
            g = _.B(f);
            for (h = g.next(); !h.done; b = {
                    hc: b.hc
                }, h = g.next()) {
                f = h.value;
                h = f.code;
                var k = f.bids;
                f = void 0;
                if (h && null != (f = k) && f.length && (h = Rk(h, c), b.hc = h / 1E6, !(0 >= h))) {
                    var l = void 0;
                    f = {};
                    k = _.B(null != (l = k) ? l : []);
                    for (l = k.next(); !l.done; f = {
                            Na: f.Na,
                            Qc: f.Qc
                        }, l = k.next()) l = l.value, f.Qc = "function" === typeof l.getFloor ? l.getFloor : void 0, f.Na = Sk(Tk(Uk(new Vk, 4), h), d), l.getFloor = function(n, m) {
                        return function(p) {
                            4 === ee(n.Na, 1, 0) && Uk(n.Na, 1);
                            var r, u = null == (r = n.Qc) ? void 0 : r.apply(a, [p]);
                            p = d ? u || {} : {
                                currency: "USD",
                                floor: m.hc
                            };
                            return null != u && u.floor ? (null == u ? 0 : u.currency) && "USD" !== u.currency ? (1 === ee(n.Na, 1, 0) && (p = Tk(Uk(n.Na, 6), 1E6 * u.floor), _.A(p, 3, u.currency)), u) : (u.floor || 0) > m.hc ? (1 === ee(n.Na, 1, 0) && Tk(Uk(n.Na, 5), 1E6 * u.floor), u) : p : p
                        }
                    }(f, b), e.set(l.getFloor, f.Na)
                }
            }
        }
    };
    el = function(a, b, c, d, e, f) {
        var g, h, k = null == (g = f.getBidResponsesForAdUnitCode) ? void 0 : null == (h = g.call(f, b.getDomId())) ? void 0 : h.bids,
            l;
        if (null == (l = k) || !l.length) {
            var n;
            k = (null == (n = (0, D.J)(f.getBidResponsesForAdUnitCode)(b.getAdUnitPath())) ? void 0 : n.bids) || []
        }
        g = k.filter(function(m) {
            return m.auctionId !== c && d.some(function(p) {
                return (E = Xk(p, 2), _.w(E, "includes")).call(E, m.adId)
            })
        });
        g = _.B(g);
        for (h = g.next(); !h.done; h = g.next()) h = h.value, l = k = void 0, n = Yk(h, e, d, null == (k = f.adUnits) ? void 0 : null == (l = _.w(k, "find").call(k, function(m) {
            m = m.code;
            return m === b.getAdUnitPath() || m === b.getDomId()
        })) ? void 0 : l.mediaTypes), k = Zk(a, $k(_.A(al(bl(new cl, h.bidder), 1), 6, !0), n)), "number" === typeof h.timeToRespond && dl(k, h.timeToRespond)
    };
    fl = function(a, b, c) {
        ok(a, 3) || (c === b.getAdUnitPath() ? _.A(a, 3, 1) : c === b.getDomId() && _.A(a, 3, 2))
    };
    hl = function(a, b, c, d, e, f, g) {
        f = f.get(null != g ? g : function() {
            return null
        });
        1 !== (null == f ? void 0 : ee(f, 1, 0)) && _.Rg(b, 5, f);
        wh(a, Vk, 5) || (f ? 1 === ee(f, 1, 0) ? gl(a, f) : gl(a, Tk(Uk(Sk(new Vk, e), 1), Rk(c, d))) : gl(a, Uk(Sk(new Vk, e), Rk(c, d) ? 2 : 3)))
    };
    Yk = function(a, b, c, d) {
        var e = a.cpm,
            f = a.originalCpm,
            g = a.currency,
            h = a.originalCurrency,
            k = a.dealId,
            l = a.adserverTargeting,
            n = a.bidder,
            m = a.adUnitCode,
            p = a.adId,
            r = a.mediaType,
            u = a.height,
            v = a.width,
            x = a.adUrl;
        a = a.ad;
        var I = new il;
        "number" === typeof e && (_.A(I, 2, Math.round(1E6 * e)), h && h !== g || (e = Math.round(1E6 * Number(f)), isNaN(e) || e === Yi(I, 2) || _.A(I, 8, e)));
        "string" === typeof g && _.A(I, 3, g);
        "string" === typeof k && jl(I, kl(k));
        if ("object" === typeof l)
            for (c = _.w(Object, "fromEntries").call(Object, c.map(function(S) {
                    return [z(S, 1), Xk(S, 2)]
                })), g = _.B(["", "_" + n]), k = g.next(); !k.done; k = g.next()) {
                k = k.value;
                e = [];
                f = _.B(_.w(Object, "entries").call(Object, l));
                for (h = f.next(); !h.done; h = f.next()) {
                    h = _.B(h.value);
                    var K = h.next().value;
                    h = h.next().value;
                    K = (K + k).slice(0, 20);
                    var M = void 0;
                    if (null != (M = c[K]) && M.length)
                        if (c[K][0] === String(h)) e.push(K);
                        else {
                            e = [];
                            break
                        }
                }
                ll(I, Xk(I, 4).concat(e))
            }
        switch (r || "banner") {
            case "banner":
                _.A(I, 5, 1);
                break;
            case "native":
                _.A(I, 5, 2);
                gi("hbyg_nat", function(S) {
                    L(S, "pub_url", document.URL);
                    L(S, "b", n);
                    L(S, "auc", null != m ? m : "");
                    L(S, "hmt", Number(!!d));
                    var T;
                    L(S, "hat", Number(!!(null == d ? 0 : null == (T = d.native) ? 0 : T.adTemplate)))
                }, _.we(ml));
                break;
            case "video":
                _.A(I, 5, 3)
        }
        "number" === typeof u && "number" === typeof v && nl(I, ol(pl(v), u));
        "string" === typeof p && (_.A(I, 1, p), b.set(p, {
            height: u,
            width: v,
            adUrl: "string" === typeof x ? x : void 0,
            eh: "string" === typeof a ? a : void 0,
            format: ee(I, 5, 0),
            cpm: null != z(I, 2) ? Yi(I, 2) : void 0
        }));
        return I
    };
    ql = function(a, b) {
        var c = new y.Map,
            d = function(k) {
                var l = c.get(k);
                l || (l = {}, c.set(k, l));
                return l
            },
            e = [];
        a = _.B(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args,
                h = f.eventType;
            f = f.elapsedTime;
            "bidTimeout" === h && e.push.apply(e, _.Nd(g));
            switch (h) {
                case "bidRequested":
                    if (g.auctionId !== b) continue;
                    if (!Array.isArray(g.bids)) continue;
                    g = _.B(g.bids);
                    for (h = g.next(); !h.done; h = g.next())
                        if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    g.auctionId === b && g.bidId && (d(g.bidId).zf = f)
            }
        }
        d = new y.Map;
        a = _.B(_.w(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.B(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.zf, g && h && d.set(f, {
            latency: h - g,
            Od: !1
        });
        e = _.B(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.Od = !0;
        return d
    };
    rl = function(a, b) {
        var c = a.que,
            d = function() {
                var e;
                null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
                    return rj().pbjs_hooks.push({
                        context: b,
                        nextFunction: f,
                        requestBidsConfig: g
                    })
                }, 0)
            };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d): null == c || c.unshift(d)
    };
    tl = function(a, b) {
        return (0, D.sa)(gj(b, function() {
            return new sl(a, b)
        }))
    };
    vl = function(a, b, c, d) {
        for (var e = _.B(_.w(Object, "entries").call(Object, ul)), f = e.next(); !f.done; f = e.next()) {
            var g = _.B(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && O(a, g(c, d))
        }
    };
    El = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = (void 0 === b ? 0 : b) ? 604800 : -1;
        if (!(0 < b) || c && F(c, 5)) {
            var d = 0;
            try {
                d |= a != a.top ? 512 : 0, d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (g) {
                d |= 32
            }
            c = c ? me(c) : null;
            var e = 0;
            try {
                e |= wl(a, 2500);
                if (_.G(xl)) {
                    var f = _.yl(a).clientHeight;
                    e |= f ? 320 > f ? 2097152 : 0 : 1073741824
                }
                e |= zl(a);
                0 < b && !_.Al(_.Bl(c, b)) && (e |= 134217728)
            } catch (g) {
                e |= 32
            }
            a = d | e
        } else a = 4194304;
        return a
    };
    Il = function(a, b, c, d, e, f) {
        d = Fl(d);
        if (5 !== d) return !1;
        var g = El(e, !Gl(c), f);
        if (g &= -134217729) gi("gpt_int_ns", function(h) {
            L(h, "nsr", g);
            mi(h, a)
        }, _.we(Hl)), vl(b, g, d, c.getAdUnitPath());
        return !!g
    };
    Jl = function(a) {
        switch (a) {
            case 4:
                return 11;
            case 2:
                return 2;
            case 3:
                return 1;
            case 5:
                return 8
        }
    };
    Ql = function(a, b) {
        a = Jl(a);
        if (!a) return null;
        var c = 0;
        if (11 !== a) {
            c |= _.t != _.t.top ? 512 : 0;
            var d = _.Kl(_.t);
            d = 26 !== a && 27 !== a && 40 !== a && 41 !== a && 10 !== a && d.adCount ? 1 == a || 2 == a ? !(!d.adCount[1] && !d.adCount[2]) : (d = d.adCount[a]) ? 1 <= d : !1 : !1;
            d && (c |= 64);
            if (c) return c
        }
        if (2 === a || 1 === a) {
            d = {
                Da: _.t,
                Rd: Ll,
                we: b ? a : void 0
            };
            0 === (0, _.Ml)() && (d.Rd = 3E3, d.kf = 650);
            b = d.Da;
            var e = d.kf,
                f = d.Rd,
                g = d.we,
                h = d.Ta,
                k = d.jh;
            d = 0;
            try {
                d |= b != b.top ? 512 : 0;
                var l = Math.min(b.screen.width || 0, b.screen.height || 0);
                d |= l ? 320 > l ? 8192 : 0 : 2048;
                var n;
                if (n = b.navigator) {
                    var m = b.navigator.userAgent;
                    n = /Android 2/.test(m) || /iPhone OS [34]_/.test(m) || /Windows Phone (?:OS )?[67]/.test(m) || /MSIE.*Windows NT/.test(m) || /Windows NT.*Trident/.test(m)
                }
                d |= n ? 1048576 : 0;
                d = e ? d | (b.innerHeight >= e ? 0 : 1024) : d | (_.Nl(b) ? 0 : 8);
                d |= wl(b, f);
                d |= zl(b)
            } catch (p) {
                d |= 32
            }
            switch (g) {
                case 2:
                    l = h;
                    l = void 0 === l ? null : l;
                    n = Dg(b.innerWidth, 3, 0, Math.min(Math.round(b.innerWidth / 320 * 50), Ol) + 15, 3);
                    null != Cg(b, n, void 0 === l ? null : l) && (d |= 16777216);
                    break;
                case 1:
                    l = h, l = void 0 === l ? null : l, n = b.innerWidth, m = b.innerHeight, e = Math.min(Math.round(b.innerWidth / 320 * 50), Ol) + 15, f = Dg(n, 3, m - e, m, 3), 25 < e && f.push({
                        x: n - 25,
                        y: m - 25
                    }), null != Cg(b, f, void 0 === l ? null : l) && (d |= 16777216)
            }
            k && (h = void 0 === h ? null : h, h = void 0 === h ? null : h, k = b.innerWidth, l = b.innerHeight, n = _.we(Pl), k = Dg(k, 10, l - n, l, 10), k = null != Cg(b, k, h));
            k && (d |= 16777216);
            c |= d
        } else 8 === a ? c |= El(_.t) : 11 !== a && (c |= 32);
        c || (b = _.Kl(_.t), b.adCount = b.adCount || {}, b.adCount[a] = b.adCount[a] + 1 || 1);
        return c
    };
    Rl = function(a, b) {
        for (var c = new hi, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return ji(c)
    };
    Sl = function(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = void 0 === c.Ob ? "" : c.Ob;
        c = void 0 === c.pa ? "," : c.pa;
        var e = !1;
        a = a.map(function(f) {
            f = b(f);
            e || (e = !!f);
            return String(f || d)
        });
        return e ? a.join(c) : null
    };
    Tl = function(a, b, c, d) {
        var e = _.Cd("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    Ul = function(a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    Wl = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b)) {
                var f;
                if (!(f = !Vl(b, c, d))) {
                    a: {
                        do {
                            var g = Sh(b, c);
                            if (g && "fixed" == g.position) {
                                var h = !1;
                                break a
                            }
                        } while (b = b.parentElement);h = !0
                    }
                    f = !h
                }
                e = f
            }
            e && (a.height = -1)
        } catch (k) {
            a.width = -1, a.height = -1
        }
    };
    Xl = function(a) {
        if (61440 >= a.length) return {
            url: a,
            zd: 0
        };
        var b = a;
        61440 < b.length && (b = b.substring(0, 61432), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        return {
            url: b,
            zd: a.length - b.length + 8
        }
    };
    Yl = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    Zl = function(a, b) {
        b = void 0 === b ? window : b;
        return !!Yl(a, b)
    };
    am = function(a, b) {
        var c = b.R;
        return Sl(a, function(d) {
            return $l(c[d.getDomId()]).join("&")
        }, {
            pa: "|"
        })
    };
    $l = function(a) {
        a = bm(a);
        var b = [];
        _.jk(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    bm = function(a) {
        for (var b = {}, c = _.B(Mj(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[(0, D.J)(Nj(d))] = Xk(d, 2);
        a = Xk(a, 8);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    cm = function(a) {
        var b = !1,
            c = Uc(a, Qj, 2).map(function(d) {
                var e = (0, D.J)(Nj(d));
                b = "excl_cat" === e;
                d = Xk(d, 2);
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = Xk(a, 3);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    dm = function(a) {
        var b, c;
        return null != (c = null == (b = _.w(a, "find").call(a, function(d) {
            return "page_url" === z(d, 1)
        })) ? void 0 : Xk(b, 2)[0]) ? c : null
    };
    em = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b); - 1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    fm = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        Fd(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    gm = function(a, b) {
        var c = b.R;
        return !!dm(b.V.ta()) || a.some(function(d) {
            return null !== dm(c[d.getDomId()].ta())
        })
    };
    jm = function(a, b, c) {
        var d = null;
        try {
            var e = hm(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g = c.V,
                    h = c.R[f.getDomId()],
                    k;
                f = null == (k = Wh(f, h, b.document, Ch(g, h))) ? void 0 : k.y;
                k = uh(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++im
            })
        } catch (f) {}
        return d
    };
    mm = function(a, b, c, d) {
        a = a.map(function(e) {
            if (c) {
                var f = d.R[e.getDomId()];
                f = Ah(f);
                if (e = b.j.get(e)) e.sb = f;
                return f
            }
            f = d.V;
            var g = d.R[e.getDomId()],
                h;
            if (!(h = km(b, e))) {
                f = Ah(g, F(f, 6) || F(g, 17) ? null : Qh(e));
                if (e = b.j.get(e)) e.sb = f;
                h = f
            }
            return h
        });
        return _.G(lm) ? a : a.join()
    };
    om = function() {
        var a = void 0 === a ? window : a;
        nm = _.re(a)
    };
    pm = function(a, b) {
        return a && (a = Le(a, oh, 1)) ? a.getWidth() || b.innerWidth : 0
    };
    qm = function(a, b) {
        return a && (a = Le(a, oh, 1)) ? a.getHeight() || b.innerHeight : 0
    };
    rm = function(a) {
        return a && (a = Le(a, oh, 2)) ? a.getWidth() || 0 : 0
    };
    sm = function(a) {
        return a && (a = Le(a, oh, 2)) ? a.getHeight() || 0 : 0
    };
    tm = function(a, b) {
        var c;
        return !(null != (c = F(a, 11)) ? !c : !F(b, 10))
    };
    um = function(a, b, c, d) {
        if (a = Qh(a, b)) {
            var e;
            if (c = null != (e = F(c, 24)) ? e : F(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.t.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || (a.style.display = "none")
        }
    };
    Am = function(a, b, c, d, e, f, g) {
        var h = new mf,
            k = new vm(a, d);
        H(h, k);
        f = new wm(a, e, f);
        H(h, f);
        f = new xm(a, b, e, g, k.Wa);
        H(h, f);
        b = new ym(a, b, c, e, d, g, k.Wa);
        H(h, b);
        a = new zm(a, k.Wa, b.l, f.l);
        H(h, a);
        Af(h);
        return {
            Wa: a.A,
            ua: h
        }
    };
    Fm = function(a, b) {
        var c = window,
            d = new mf;
        c = new Bm(c);
        _.Cm(d, c);
        b = new Dm(a, c, b);
        H(d, b);
        a = new Em(a, c, b.xb);
        H(d, a);
        Af(d);
        return {
            xb: b.xb,
            Ld: a.l,
            ua: d
        }
    };
    Im = function(a, b, c, d) {
        var e = d.Gd,
            f = d.adUnitPath;
        d = void 0 === d.ib ? !1 : d.ib;
        return "string" === typeof f && f.length && (null == e || "string" === typeof e || "number" === typeof e && Gm(e)) ? Hm(a, b, f, c, {
            Xa: "string" === typeof e ? e : void 0,
            format: "number" === typeof e ? e : 1,
            ib: d
        }) : (b.error(lj("googletag.defineOutOfPageSlot", [f, e])), null)
    };
    Gm = function(a) {
        return !!cj(Xj, function(b) {
            return b === a
        })
    };
    Hm = function(a, b, c, d, e) {
        var f = e.format;
        b = d.add(a, b, c, [1, 1], {
            Xa: e.Xa,
            format: f,
            ib: e.ib
        });
        a = b.slotId;
        b = b.Va;
        a && b && (_.A(b, 15, f), _.Jm(a, function() {
            var g = window,
                h = Jl((0, D.J)(f));
            if (h) {
                g = _.Kl(g);
                var k = g.adCount && g.adCount[h];
                k && (g.adCount[h] = k - 1)
            }
        }));
        return null != a ? a : null
    };
    Pm = function(a, b, c, d, e, f, g) {
        var h = document,
            k = c.getAdUnitPath();
        c = Km.get(ee(c, 2, 0));
        if (k && c) {
            var l, n = null == (l = Im(a, g, f, {
                Gd: c,
                adUnitPath: k,
                ib: _.G(Lm)
            })) ? void 0 : l.j;
            n && (a = Mm($h(), n.getSlotElementId()), d && null != a && af(a, 27, Nm, d), b.cmd.push(function() {
                n.addService(b.pubads())
            }), Om(h, function() {
                b.display(n);
                F(e, 4) && b.pubads().refresh([n])
            }))
        }
    };
    Um = function(a) {
        var b, c = null == (b = window.top) ? void 0 : b.location.href;
        if (!c) return !1;
        var d = zh(c),
            e;
        return null == (e = Uc(a, Qm, 1)) ? void 0 : e.some(function(f) {
            switch (Ti(f, Rm)) {
                case 1:
                    f = (0, D.J)(Sm(f, Tm, 1, Rm));
                    if (ok(f, 1) && ok(f, 2)) {
                        var g = (0, D.J)(fe(f, 1));
                        f = 0 >= g || g > c.length ? !1 : (0, D.J)(fe(f, 2)) === zh(c.substring(0, g))
                    } else f = !1;
                    return f;
                case 2:
                    return (0, D.J)(fe(f, Ui(f, Rm, 2))) === d;
                default:
                    return !1
            }
        })
    };
    Wm = function(a) {
        var b;
        return null == (b = Vm(a, 2)) ? void 0 : b.some(function(c) {
            switch (c) {
                case 0:
                    return !1;
                case 1:
                    return !0;
                case 2:
                    return 0 === (0, _.Ml)();
                case 4:
                    return 2 === (0, _.Ml)();
                case 3:
                    return 1 === (0, _.Ml)();
                default:
                    return !1
            }
        })
    };
    Zm = function(a, b, c, d) {
        var e = document,
            f = [];
        b = _.B(Uc(b, Xm, 3));
        for (var g = b.next(); !g.done; g = b.next())
            if (g = g.value, hf(g, 1) && hf(g, 2) && ok(g, 3) && ok(g, 4)) {
                var h = e.querySelector(Ym(g, 1)),
                    k = void 0;
                if (null != (k = h) && k.parentElement) {
                    k = g.getAdUnitPath();
                    var l = "gpt_opp_" + k;
                    if (!e.getElementById(l)) {
                        var n = e.createElement("div");
                        n.id = l;
                        h.insertAdjacentElement("beforebegin", n);
                        if (g = a.defineSlot(k, [g.getWidth(), g.getHeight()], l)) g.addService(a.pubads()), h = Mm($h(), g.getSlotElementId()), d && (k = void 0, null != (k = h) && af(k, 27, Nm, d)), f.push(g)
                    }
                }
            }
        f.length && Om(e, function() {
            for (var m = _.B(f), p = m.next(); !p.done; p = m.next()) a.display(p.value);
            F(c, 4) && a.pubads().refresh(f)
        })
    };
    cn = function(a, b, c) {
        var d = $m(b, c);
        c = d.slotId;
        var e = d.ze;
        d = d.Ae;
        if (c) {
            if (d = $h(), (b = Mm(d, c.getDomId())) && !F(b, 19))
                if (e && d.D.set(c, e), Qh(c) || Bh(Fl(b)))
                    for (_.A(b, 19, !0), a = Mh(d.j, d.m), e = _.B(Xk(b, 4)), b = e.next(); !b.done; b = e.next()) b = uj(b.value), b = (0, D.J)(fj.get((0, D.J)(b))), b.m && b.K(a, c);
                else O(a, an(String(b.getAdUnitPath()), String(b.getDomId())), c)
        } else d ? a.error(bn(d)) : a.error(lj("googletag.display", [String(b)]))
    };
    $m = function(a, b) {
        var c = "";
        if ("string" === typeof a) c = a, b = dn(b, c);
        else if (_.ja(a) && 1 == a.nodeType) {
            var d = a;
            c = d.id;
            b = dn(b, c)
        } else b = (E = [].concat(_.Nd(b.W)), _.w(E, "find")).call(E, function(e) {
            return e.j === a
        });
        return {
            slotId: b,
            ze: d,
            Ae: c
        }
    };
    en = function(a) {
        switch (Number(a)) {
            case 2:
            case 3:
                return "Anchor";
            case 5:
                return "Interstitial";
            default:
                return "Out-of-page creative"
        }
    };
    fn = function(a, b, c, d) {
        O(a, lk("googletag.setConfig.commerce", mk(b), c, mk(d)))
    };
    gn = function(a) {
        return "string" === typeof a && 0 < a.length && 5E3 > a.length
    };
    hn = function(a) {
        if (!Array.isArray(a) || 0 === a.length) return !1;
        var b = a.length - 1;
        return a.every(function(c) {
            if ("string" !== typeof c || 0 === c.length) return !1;
            b += c.length;
            return 5E3 < b ? !1 : !0
        })
    };
    ln = function(a, b, c) {
        if ("object" === typeof a && null !== a && _.w(Object, "keys").call(Object, (0, D.J)(a)).some(function(d) {
                return (E = _.w(Object, "values").call(Object, jn), _.w(E, "includes")).call(E, Number(d))
            })) return !0;
        kn("taxonomies", a, b, c);
        return !1
    };
    nn = function(a, b) {
        var c = Uc(b, mn, 1).filter(function(d) {
            return ee(d, 1, 0) !== a
        });
        Rc(b, 1, c)
    };
    un = function(a, b, c, d) {
        if (void 0 !== _.w(b, "values"))
            if (null === _.w(b, "values")) nn(a, c);
            else if (on(_.w(b, "values"), d, b) && (b = pn(a, _.w(b, "values"), d, b), b.length)) {
            var e = (E = Uc(c, mn, 1), _.w(E, "find")).call(E, function(f) {
                return ee(f, 1, 0) === a
            });
            e ? qn(e, b) : rn(c, qn(sn(new mn, a), b));
            d.info(tn(mk(b), mk(a)))
        }
    };
    on = function(a, b, c) {
        if (Array.isArray(a)) return !0;
        kn("taxonomyData.values", a, b, c);
        return !1
    };
    pn = function(a, b, c, d) {
        var e = [],
            f = [],
            g = !1;
        b = _.B(b);
        for (var h = b.next(); !h.done; h = b.next()) h = h.value, 5 <= e.length && (g = !0), "string" !== typeof h ? f.push(h) : g || h in e || e.push(h);
        0 < f.length && kn("taxonomyData.values", f, c, d);
        g && O(c, vn(mk(a), mk(5)));
        return e
    };
    kn = function(a, b, c, d) {
        O(c, lk("googletag.setConfig.pps", mk(d), a, mk(b)))
    };
    xn = function(a) {
        wn = a
    };
    zn = function() {
        for (var a = _.B(_.w(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value,
                d = b.src;
            !d || -1 == d.indexOf("/tag/js/gpt.js") && -1 == d.indexOf("/tag/js/gpt_mobile.js") || c.googletag_executed || !b.textContent || (c.googletag_executed = !0, c = document.createElement("script"), Ta(c, new Sa(b.textContent, yn)), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    An = function(a, b) {
        b = _.B(_.w(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.B(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    Dn = function(a, b, c) {
        var d = [];
        c = [].concat(_.Nd(c.W)).slice();
        if (b) {
            if (!Array.isArray(b)) return O(a, lj("googletag.destroySlots", [b])), !1;
            la(b);
            d = c.filter(function(e) {
                return _.w(b, "includes").call(b, e.j)
            })
        } else d = c;
        if (!d.length) return !1;
        Bn(d);
        Cn(d);
        return !0
    };
    In = function(a, b, c, d) {
        var e;
        if (Zl("google_content_service_disabled", c)) gi("gpt_scdvqp", function(f) {
            mi(f, a)
        }, 1);
        else if (!_.G(En)) return J(a, 817, function() {
            _.G(Fn) && b.error(Gn(), null, !0);
            null != e || (e = new Hn(a, b, d));
            return qj(a, b, e)
        })
    };
    Vn = function(a, b, c, d, e, f, g, h) {
        var k = rj(),
            l;
        d = In(a, b, d, h);
        h = J(a, 74, function(m, p, r) {
            return f.defineSlot(a, b, m, p, r)
        });
        var n = {};
        h = (n._loaded_ = !0, n.cmd = [], n._vars_ = k._vars_, n.evalScripts = k.evalScripts, n.display = J(a, 95, function(m) {
            void cn(b, m, f)
        }), n.defineOutOfPageSlot = J(a, 73, function(m, p) {
            return (m = Im(a, b, f, {
                Gd: p,
                adUnitPath: m
            })) ? m.j : null
        }), n.getVersion = J(a, 946, function() {
            return a.kb ? String(a.kb) : a.Ha
        }), n.pubads = J(a, 947, function() {
            return Bk(a, b, c, f)
        }), n.companionAds = J(a, 816, function() {
            null != l || (l = new Jn(a, b, c, g));
            return oj(a, b, l)
        }), n.setAdIframeTitle = J(a, 729, xn), n.getEventLog = J(a, 945, function() {
            return new Kn(a, b)
        }), n.sizeMapping = J(a, 90, function() {
            return new Ln(a, b)
        }), n.enableServices = J(a, 91, function() {
            for (var m = _.B(Mn), p = m.next(); !p.done; p = m.next()) p = p.value, p.m && b.info(Nn()), p.enable()
        }), n.destroySlots = J(a, 75, function(m) {
            return Dn(b, m, f)
        }), n.enums = ak(), n.defineSlot = h, n.defineUnit = h, n.getWindowsThatCanCommunicateWithHostpageLibrary = J(a, 955, function(m) {
            return On(m)
        }), n.disablePublisherConsole = J(a, 93, yj), n.onPubConsoleJsLoad = J(a, 731, zj), n.openConsole = J(a, 732, function(m) {
            Aj(a, void 0 === m ? "" : m)
        }), n.setConfig = J(a, 1034, function(m) {
            if (_.ja(m)) {
                var p = m.commerce,
                    r = m.pps;
                if (null === p) Fe(Pn(e, Qn, 33), 1);
                else if (void 0 !== p)
                    if (m = Pn(e, Qn, 33), _.ja(p)) {
                        var u = p.query,
                            v = p.categories,
                            x = p.productIds,
                            I = p.filter,
                            K = yc(Rn(m, Sn, 1));
                        null === u ? Fe(K, 1) : gn(u) ? _.A(K, 1, u) : void 0 !== u && fn(b, p, "query", u);
                        null === v ? _.A(K, 2, Bc) : hn(v) ? _.jh(K, 2, v) : void 0 !== v && fn(b, p, "categories", v);
                        null === x ? _.A(K, 3, Bc) : hn(x) ? _.jh(K, 3, x) : void 0 !== x && fn(b, p, "productIds", x);
                        null === I ? Fe(K, 4) : gn(I) ? _.A(K, 4, I) : void 0 !== I && fn(b, p, "filter", I);
                        hf(K, 1) || Xk(K, 2).length ? _.Rg(m, 1, K) : O(b, Tn())
                    } else O(b, lj("googletag.setConfig.commerce", [p]));
                if (null === r) Fe(Pn(e, Qn, 33), 2);
                else if (void 0 !== r && (p = Pn(Pn(e, Qn, 33), Un, 2), "object" === typeof r && (0, D.J)(r).hasOwnProperty("taxonomies") ? m = !0 : (O(b, lj("googletag.setConfig.pps", [r])), m = !1), m))
                    if (m = r.taxonomies, void 0 === m) kn("taxonomies", m, b, r);
                    else if (null === m) Rc(p, 1);
                else if (ln(m, b, r))
                    for (r = _.B(_.w(Object, "entries").call(Object, m)), u = r.next(); !u.done; u = r.next()) {
                        u = _.B(u.value);
                        var M = u.next().value;
                        u = u.next().value;
                        v = p;
                        x = b;
                        K = m;
                        if (void 0 === M || null === M) kn("taxonomy", M, x, K);
                        else {
                            I = Number(M);
                            var S = I,
                                T = x,
                                Y = K;
                            (E = _.w(Object, "values").call(Object, Zj), _.w(E, "includes")).call(E, Number(S)) ? M = !0 : (kn("taxonomy", M, T, Y), M = !1);
                            M && void 0 !== u && (null === u ? nn(I, v) : (M = x, "object" === typeof u && (0, D.J)(u).hasOwnProperty("values") ? K = !0 : (kn("taxonomyData", u, M, K), K = !1), K && un(I, u, v, x)))
                        }
                    }
            } else O(b, lj("googletag.setConfig", [m]))
        }), n.apiReady = !0, n);
        d && (h.content = d);
        An(k, h)
    };
    Wn = function(a) {
        var b = function() {
            return a.Reflect.construct(a.HTMLElement, [], this.constructor)
        };
        b.prototype = a.HTMLElement.prototype;
        b.prototype.constructor = b;
        _.w(Object, "setPrototypeOf").call(Object, b, a.HTMLElement);
        return b
    };
    Yn = function(a, b) {
        var c = _.we(Xn);
        Math.random() <= c && ke(b, a)
    };
    io = function(a, b, c) {
        var d = {};
        if (!c) return b.error(Zn("missing data-rendering attribute")), d;
        try {
            var e = Xd($n, ao(c))
        } catch (k) {}
        var f;
        (null == (f = e) ? 0 : wh(f, bo, 1)) ? d.Gf = co(eo(fo(go(_.Zg(new ho, 4, 1), 7), a.Ya || a.Ha), Le(e, bo, 1)), !0): b.error(Zn("invalid data-rendering attribute"));
        var g;
        d.yf = null == (g = e) ? void 0 : Ym(g, 2);
        var h;
        d.Yc = null == (h = e) ? void 0 : Ym(h, 3);
        return d
    };
    lo = function(a, b) {
        var c, d, e, f, g, h, k, l, n, m;
        return _.fb(function(p) {
            c = Ij(b, "ai");
            if (!c || 0 === c.length) return p.return(y.Promise.resolve(b));
            d = jo();
            if (null == (e = d) ? 0 : e.gmaSdk) {
                if (f = d.gmaSdk.getClickSignalsWithTimeout ? d.gmaSdk.getClickSignalsWithTimeout(c, 200) : d.gmaSdk.getClickSignals(c)) return p.return(y.Promise.resolve(b.replace("?", "?ms=" + encodeURIComponent(f) + "&")))
            } else if (null == (g = d) ? 0 : null == (h = g.webkit) ? 0 : null == (k = h.messageHandlers) ? 0 : k.getGmaClickSignals) return l = new _.tg, n = l.resolve, m = l.promise, ko(d.webkit.messageHandlers.getGmaClickSignals, {
                click_string: c
            }, function(r) {
                n(b.replace("?", "?" + r + "&"))
            }, function() {
                n(b)
            }, function(r, u) {
                return _.Xg(a, r, u)
            }), p.return(m);
            return p.return(y.Promise.resolve(b))
        })
    };
    mo = function(a, b, c, d) {
        var e, f, g;
        return _.fb(function(h) {
            e = b.getBoundingClientRect();
            f = {};
            var k = d.replace;
            var l = (f.nx = Math.floor(c.clientX - e.x), f.ny = Math.floor(c.clientY - e.y), f.dim = Math.floor(e.width) + "x" + Math.floor(e.height), f);
            var n = [];
            for (m in l) gk(m, l[m], n);
            l = n.join("&");
            if (l) {
                n = -1;
                0 > n && (n = 0);
                var m = -1;
                if (0 > m || m > n) {
                    m = n;
                    var p = ""
                } else p = "".substring(m + 1, n);
                n = ["".slice(0, m), p, "".slice(n)];
                m = n[1];
                n[1] = l ? m ? m + "&" + l : l : m;
                l = n[0] + (n[1] ? "?" + n[1] : "") + n[2]
            } else l = "";
            g = k.call(d, "?", l + "&");
            return h.return(lo(a, g))
        })
    };
    no = function(a, b, c) {
        var d;
        if (null == c ? 0 : null == (d = c.gmaSdk) ? 0 : d.getViewSignals) {
            if (c = c.gmaSdk.getViewSignals()) return c = b.replace(/^(.*?)(&adurl=)?$/, "$1&ms=" + c + "$2"), y.Promise.resolve(c)
        } else {
            var e, f;
            if (null == c ? 0 : null == (e = c.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals) {
                d = new _.tg;
                var g = d.resolve;
                d = d.promise;
                ko(c.webkit.messageHandlers.getGmaViewSignals, {}, function(h) {
                    g(b.replace(/^(.*?)(&adurl=)?$/, "$1&" + h + "$2"))
                }, function() {
                    g(b)
                }, function(h, k) {
                    return _.Xg(a, h, k)
                });
                return d
            }
        }
        return y.Promise.resolve(b)
    };
    to = function(a, b) {
        var c = window;
        var d = void 0 === d ? ob : d;
        var e;
        if (c.customElements && null != (e = c.Reflect) && e.construct && !c.customElements.get("google-product-ad")) {
            var f = jo(),
                g;
            null == (g = f ? new oo(function(k, l) {
                return _.Xg(a, k, l)
            }, function() {}) : void 0) || po(g);
            var h = Wn(c);
            e = function() {
                return h.apply(this, arguments) || this
            };
            _.P(e, h);
            e.prototype.connectedCallback = function() {
                var k = io(a, b, this.dataset.rendering),
                    l = k.Gf,
                    n = k.yf;
                k = k.Yc;
                l && d(qo(window, l));
                n && no(a, n, f).then(function(m) {
                    return void ro(m)
                });
                k && ("true" === this.getAttribute("data-enable-click") || this.querySelector('[data-enable-click="true"]') ? (this.Yc = k, this.addEventListener("click", this.j)) : O(b, so(k)))
            };
            e.prototype.j = function(k) {
                var l = k.target instanceof c.HTMLElement ? k.target.closest("[data-enable-click]") : void 0;
                l instanceof c.HTMLElement && "true" === l.getAttribute("data-enable-click") && mo(a, this, k, this.Yc).then(function(n) {
                    return void ro(n)
                })
            };
            c.customElements.define("google-product-ad", e)
        }
    };
    uo = function(a) {
        var b = {};
        a = _.B(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[z(c, 1)] = z(c, 2);
        return b
    };
    xo = function(a, b, c) {
        return new vo(c, a, wo, function(d) {
            d = d.detail.data;
            try {
                var e = JSON.parse(d);
                if ("rewarded" === e.type && e.message === b) return e
            } catch (f) {}
            return null
        })
    };
    yo = function(a) {
        .001 > he() && ke({
            c: "sd",
            s: String(a)
        }, "gpt_whirs")
    };
    Do = function(a, b, c, d) {
        d = d.Mf;
        var e = b.kind;
        switch (e) {
            case 0:
                return new(d ? zo : Ao)(a, b, c);
            case 1:
                return new Bo(a, b, c);
            case 2:
                return new Co(a, b, c);
            default:
                Qa(e)
        }
    };
    Eo = function(a) {
        if (!Gd(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    Ko = function(a, b, c, d) {
        var e = Qh(a, document);
        e && Ag(e, window, d, !0);
        Fo(_.ze($g), "5", (0, D.J)(z(c.R[a.getDomId()], 20)));
        d = a.dispatchEvent(Go, 801, {
            Dd: null,
            isBackfill: !1
        });
        if (_.Ho(b, a) && !Zh(a, document)) {
            b = c.V;
            c = c.R[a.getDomId()];
            var f;
            (null != (f = F(c, 10)) ? f : F(b, 11)) && um(a, document, c, b)
        }
        _.G(Io) ? d.then(function() {
            a.dispatchEvent(Jo, 825, {
                isEmpty: !0
            })
        }) : a.dispatchEvent(Jo, 825, {
            isEmpty: !0
        })
    };
    Lo = function(a, b) {
        var c = _.Cd("DIV");
        c.id = a;
        c.textContent = b;
        _.bi(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    };
    No = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver ? new IntersectionObserver(a, b) : new Mo(a, b)
    };
    Oo = function(a) {
        return ok(a, 1) ? ok(a, 3) && 0 !== (0, _.Ml)() ? (0, D.sa)(z(a, 1)) * (0, D.sa)(De(a, 3)) : z(a, 1) : null
    };
    Po = function(a, b) {
        return "undefined" === typeof IntersectionObserver ? new Mo(b, {
            rootMargin: a + "%"
        }) : new IntersectionObserver(b, {
            rootMargin: a + "%"
        })
    };
    Wo = function(a, b) {
        for (var c = {}, d = _.B(Uc(a, Qo, 7)), e = d.next(); !e.done; e = d.next()) e = e.value, c[Ym(e, 1)] = JSON.parse(Ym(e, 2));
        if (d = Le(a, Ro, 6)) c["https://googleads.g.doubleclick.net"] = d.toJSON(), c["https://td.doubleclick.net"] = d.toJSON();
        d = {};
        e = _.B(Uc(a, So, 11));
        for (var f = e.next(); !f.done; f = e.next()) f = f.value, d[Ym(f, 1)] = fe(f, 2);
        f = {};
        To(a, 18) && (f["https://googleads.g.doubleclick.net"] = To(a, 18), f["https://td.doubleclick.net"] = To(a, 18));
        var g;
        e = {
            seller: "https://pubads.g.doubleclick.net",
            decisionLogicUrl: Ym(a, 1),
            trustedScoringSignalsUrl: Ym(a, 2),
            interestGroupBuyers: Xk(a, 3),
            sellerExperimentGroupId: To(a, 17),
            auctionSignals: JSON.parse(Ym(a, 4) || "{}"),
            sellerSignals: (null == (g = Le(a, Uo, 5)) ? void 0 : g.toJSON()) || [],
            sellerTimeout: fe(a, 15) || 50,
            perBuyerExperimentGroupIds: f,
            perBuyerSignals: c,
            perBuyerTimeouts: d
        };
        c = new Uo;
        "0" !== Lc(z(Rn(Rn(a, Uo, 5), Vo, 5), 2), "0") && (g = new Vo, d = Lc(z(Rn(Rn(a, Uo, 5), Vo, 5), 2), "0"), Ic(g), null != d && 0 !== +d ? Ac(g, 2, d) : Ac(g, 2, void 0, !1), _.Rg(c, 5, g));
        return {
            seller: "https://pubads.g.doubleclick.net",
            decisionLogicUrl: Ym(a, 1),
            sellerExperimentGroupId: To(a, 17),
            sellerSignals: c.toJSON(),
            sellerTimeout: fe(a, 15) || 50,
            interestGroupBuyers: [],
            auctionSignals: {},
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            componentAuctions: [e].concat(_.Nd(null != b ? b : []))
        }
    };
    ap = function(a, b) {
        var c, d, e, f, g, h, k, l;
        return _.fb(function(n) {
            if (1 == n.j) return _.w(a, "startsWith").call(a, "urn:") && Xo.deprecatedURNToURL && Xo.deprecatedReplaceInURN ? gb(n, Xo.deprecatedURNToURL(a), 2) : n.return();
            c = n.m;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(Yo)) ? f : []).forEach(function(m) {
                d[m] = e
            });
            g = b.Ne || "";
            (null != (h = c.match(Zo)) ? h : []).forEach(function(m) {
                d[m] = g
            });
            k = b.pe || "";
            (null != (l = c.match($o)) ? l : []).forEach(function(m) {
                d[m] = k
            });
            return gb(n, Xo.deprecatedReplaceInURN(a, d), 0)
        })
    };
    cp = function(a, b, c) {
        var d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner",
            e = bp(c, 18),
            f = bp(c, 7);
        if (f || e) d += "&isContextualWinner=1";
        f && (d += "&hasXfpAds=1");
        e = c.getEscapedQemQueryId();
        f = Ym(c, 6);
        e && (d += "&winner_qid=" + encodeURIComponent(e));
        f && (d += "&xfpQid=" + encodeURIComponent(f));
        bp(c, 4) && (d += "&is_plog=1");
        (e = Ym(c, 11)) && (d += "&ecrs=" + e);
        (null == c ? 0 : bp(c, 21)) || (d += "&turtlexTest=1");
        d += "&applied_timeout_ms=" + (b + "&duration_ms=" + Math.round(a));
        ro(d)
    };
    Rp = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, v) {
        var x = new mf,
            I = uh(!0, window),
            K = h.V,
            M = h.R[d.getDomId()],
            S = new dp(a, window);
        H(x, S);
        var T = k.Qe,
            Y = k.Uf,
            aa = k.Ke,
            ia = k.Jd,
            Xa = k.re,
            za = k.Ve,
            ta = k.Nf,
            va = k.Me,
            Da = k.He,
            lb = k.kc,
            Kb = k.Of,
            Vc = k.Ue,
            ff = k.df,
            qt = k.Jf,
            lg = k.Rf,
            ui = k.Sf,
            Cl = k.Re,
            vi = k.rc,
            wi = k.Ea,
            Dl = k.ie,
            mg = k.Vf;
        k = k.Xb;
        .01 > Math.random() && (u = new ep(a, mg, u.fa, ta, ia), H(x, u));
        mg = new fp;
        mg.j(m);
        u = new gp(a, window.top, mg);
        H(x, u);
        l = new hp(a, console, l, u.A);
        H(x, l);
        l = new ip(a, Fl(M), I.height, Da, T);
        H(x, l);
        T = new jp(a, d, Qh(d, n), d.getDomId(), Yh(d), n, Fl(M), g, e);
        H(x, T);
        wi = new kp(a, wi, Xa, za, ta);
        H(x, wi);
        ta = new lp(a, K, M, window, Xa, ta);
        H(x, ta);
        lg = new mp(a, Le(K, np, 5), lg);
        H(x, lg);
        Y = new op(a, d.getAdUnitPath(), M, I.width, window, e, lb, Y, l.A, wi.A, T.A);
        H(x, Y);
        lb = new pp(a, M, Dl);
        H(x, lb);
        e = new qp(a, g, m, e, Dl, lb.A, Y.Ea, Y.M, T.A);
        H(x, e);
        if (f || _.G(rp)) {
            var Hb = new sp(a, d, h, g, ia, e.F);
            H(x, Hb);
            v = new tp(a, v, e.F);
            H(x, v);
            Hb = new up(a, Hb.l, v.A);
            H(x, Hb);
            Hb = Hb.A
        }
        v = new vp(a, d, K, M, Fl(M), n, g, T.A, ta.A, e.B, aa, Hb);
        H(x, v);
        f = new wp(a, v.A);
        H(x, f);
        m = new xp(a, d, I, g, f.A, lg.l, Hb);
        H(x, m);
        f = new yp(a, window, T.A);
        H(x, f);
        ui = new zp(a, m.A, v.A, ui, lg.l, void 0, Hb);
        H(x, ui);
        I = new Ap(a, n, d, M, I, aa, T.A, v.A, e.B, Y.kc, f.A, ia, Hb);
        H(x, I);
        Kb = new Bp(a, K, M, e.Ea, ta.A, Xa, Kb);
        H(x, Kb);
        vi = new Cp(a, window, vi, S.A, Hb);
        H(x, vi);
        f = new Dp(a, Fl(M), n);
        H(x, f);
        m = new Ep(a, window);
        H(x, m);
        r = new Fp(a, r, Fl(M), Da, va, Hb);
        H(x, r);
        ff = new Gp(a, ff, Hb);
        H(x, ff);
        za = new Hp(a, d, g, h, p, window, e.Ea, ta.A, ui.A, T.A, v.A, e.B, ia, aa, Kb.A, za, Vc, qt, I.A, vi.A, f.A, r.A, Dl, m.A, Hb);
        H(x, za);
        Vc = new Ip(a, window, d, za.o, mg);
        H(x, Vc);
        Da = new Jp(a, g, Fl(M), d, window, Da, za.l, T.A, r.A);
        H(x, Da);
        h = new Kp(a, d, Fl(M), (0, D.J)(h.Hb), va, za.l, T.A, u.A, r.A, ia);
        H(x, h);
        M = new Lp(a, d, Fl(M), p, window, za.l, T.A);
        H(x, M);
        n = new Mp(a, d, za.l, n, p);
        H(x, n);
        g = new Np(a, km(g, d), window.top, za.l, S.A);
        H(x, g);
        d = new Op(a, d, aa, Xa, qt, za.l, v.A, za.B);
        H(x, d);
        Cl = new Pp(a, window, Cl, za.l, v.A, T.A);
        H(x, Cl);
        H(x, new Qp(a, rj(), K, b, c, k));
        return x
    };
    Up = function() {
        if (Ja()) {
            var a = La();
            var b = 0;
            a = Sp(String(a)).split(".");
            for (var c = Sp("11").split("."), d = Math.max(a.length, c.length), e = 0; 0 == b && e < d; e++) {
                var f = a[e] || "",
                    g = c[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    b = Tp(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Tp(0 == f[2].length, 0 == g[2].length) || Tp(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == b)
            }
            b = 0 <= b
        } else b = Ga(Ea()), Ka(b), b = Ha() ? (b = b[2]) && b[1] || "" : "", "" === b ? b = NaN : (b = b.split("."), b = 0 === b.length ? NaN : Number(b[0])), b = 65 <= b;
        return b
    };
    Vp = function(a, b) {
        return window.IntersectionObserver ? new IntersectionObserver(a, {
            rootMargin: b
        }) : new Mo(a, {
            rootMargin: b
        })
    };
    Wp = function(a) {
        function b(f) {
            var g = f;
            return function() {
                var h = ab.apply(0, arguments);
                if (g) {
                    var k = g;
                    g = null;
                    k.apply(null, _.Nd(h))
                }
            }
        }
        var c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k;
            return _.fb(function(l) {
                if (1 == l.j) return d && clearTimeout(d), d = 0, f = new _.tg, g = b(f.resolve), h = ++e, gb(l, 0, 2);
                if (e !== h) return g(!1), l.return(f.promise);
                c ? c(!1) : g(!0);
                k = b(function() {
                    c = null;
                    d = 0;
                    g(!0)
                });
                d = setTimeout(k, 1E3);
                _.Jm(a, function() {
                    return void g(!1)
                });
                c = g;
                return l.return(f.promise)
            })
        }
    };
    dq = function() {
        var a = new Xp;
        var b = (new Yp).setCorrelator(ye(_.t));
        var c = _.ze(Ae).j().join();
        b = _.Jc(b, 5, c, "");
        b = _.Zg(b, 2, 1);
        a = _.Rg(a, 1, b);
        b = new Zp;
        c = _.G($p);
        b = _.Jc(b, 7, c, !1);
        c = _.G(aq);
        b = _.Jc(b, 8, c, !1);
        c = _.G(bq);
        b = _.Jc(b, 9, c, !1);
        b = _.Jc(b, 10, !0, !1);
        c = _.G(cq);
        b = _.Jc(b, 13, c, !1);
        b = _.Jc(b, 16, !0, !1);
        a = _.Rg(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    fq = function() {
        var a = eq,
            b = Number(a);
        return 1 > b || Math.floor(b) !== b ? (ke({
            v: a
        }, "gpt_inv_ver"), "1") : a
    };
    iq = function() {
        var a = gq() || ge() ? 1 : he(),
            b = .001 > a,
            c = .001 > a;
        b ? (_.ze(uk).H = !0, hq(31067358)) : .002 > a && hq(31067357);
        vk(23);
        return {
            Zb: b,
            ff: 1E3,
            Ef: 1E-4 > a,
            ef: 1E4,
            fe: b,
            Hd: 1E3,
            zh: c,
            fh: 1E3
        }
    };
    lq = function(a) {
        var b = fq();
        var c = /m\d+/.test("") ? Number("".substring(1)) : void 0;
        var d = ye(window),
            e = window.document.URL,
            f = _.we(jq);
        return _.w(Object, "assign").call(Object, {}, a, {
            Ha: b,
            Ya: "",
            kb: c,
            pvsid: d,
            ob: new kq(f),
            Be: e
        })
    };
    mq = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    nq = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    oq = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    pq = oq(this);
    qq = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    y = {};
    rq = {};
    _.w = function(a, b) {
        var c = rq[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    };
    sq = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in y ? f = y : f = pq;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = qq && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? nq(y, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === rq[d] && (a = 1E9 * Math.random() >>> 0, rq[d] = qq ? pq.Symbol(d) : "$jscp$" + a + "$" + d), nq(f, rq[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    sq("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            nq(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    sq("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, y.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = pq[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && nq(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return tq(mq(this))
                }
            })
        }
        return a
    }, "es6");
    tq = function(a) {
        a = {
            next: a
        };
        a[_.w(y.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    Q = function(a) {
        return a.raw = a
    };
    _.B = function(a) {
        var b = "undefined" != typeof y.Symbol && _.w(y.Symbol, "iterator") && a[_.w(y.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: mq(a)
        }
    };
    uq = function(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    };
    _.Nd = function(a) {
        return a instanceof Array ? a : uq(_.B(a))
    };
    vq = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    wq = qq && "function" == typeof _.w(Object, "assign") ? _.w(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) vq(d, e) && (a[e] = d[e])
        }
        return a
    };
    sq("Object.assign", function(a) {
        return a || wq
    }, "es6");
    var xq = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        yq = function() {
            function a() {
                function c() {}
                new c;
                _.w(y.Reflect, "construct").call(y.Reflect, c, [], function() {});
                return new c instanceof c
            }
            if (qq && "undefined" != typeof y.Reflect && _.w(y.Reflect, "construct")) {
                if (a()) return _.w(y.Reflect, "construct");
                var b = _.w(y.Reflect, "construct");
                return function(c, d, e) {
                    c = b(c, d);
                    e && _.w(y.Reflect, "setPrototypeOf").call(y.Reflect, c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = xq(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        zq;
    if (qq && "function" == typeof _.w(Object, "setPrototypeOf")) zq = _.w(Object, "setPrototypeOf");
    else {
        var Aq;
        a: {
            var Bq = {
                    a: !0
                },
                Cq = {};
            try {
                Cq.__proto__ = Bq;
                Aq = Cq.a;
                break a
            } catch (a) {}
            Aq = !1
        }
        zq = Aq ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    Dq = zq;
    _.P = function(a, b) {
        a.prototype = xq(b.prototype);
        a.prototype.constructor = a;
        if (Dq) Dq(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Ch = b.prototype
    };
    Eq = function() {
        this.l = !1;
        this.I = null;
        this.m = void 0;
        this.j = 1;
        this.o = this.D = 0;
        this.C = null
    };
    Fq = function(a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0
    };
    Eq.prototype.H = function(a) {
        this.m = a
    };
    var Gq = function(a, b) {
        a.C = {
            Kd: b,
            Xe: !0
        };
        a.j = a.D || a.o
    };
    Eq.prototype.return = function(a) {
        this.C = {
            return: a
        };
        this.j = this.o
    };
    gb = function(a, b, c) {
        a.j = c;
        return {
            value: b
        }
    };
    ib = function(a, b) {
        a.j = b;
        a.D = 0
    };
    jb = function(a) {
        a.D = 0;
        var b = a.C.Kd;
        a.C = null;
        return b
    };
    Hq = function(a) {
        this.j = new Eq;
        this.m = a
    };
    Kq = function(a, b) {
        Fq(a.j);
        var c = a.j.I;
        if (c) return Iq(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return Jq(a)
    };
    Iq = function(a, b, c, d) {
        try {
            var e = b.call(a.j.I, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.j.l = !1, e;
            var f = e.value
        } catch (g) {
            return a.j.I = null, Gq(a.j, g), Jq(a)
        }
        a.j.I = null;
        d.call(a.j, f);
        return Jq(a)
    };
    Jq = function(a) {
        for (; a.j.j;) try {
            var b = a.m(a.j);
            if (b) return a.j.l = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.j.m = void 0, Gq(a.j, c)
        }
        a.j.l = !1;
        if (a.j.C) {
            b = a.j.C;
            a.j.C = null;
            if (b.Xe) throw b.Kd;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    Lq = function(a) {
        this.next = function(b) {
            Fq(a.j);
            a.j.I ? b = Iq(a, a.j.I.next, b, a.j.H) : (a.j.H(b), b = Jq(a));
            return b
        };
        this.throw = function(b) {
            Fq(a.j);
            a.j.I ? b = Iq(a, a.j.I["throw"], b, a.j.H) : (Gq(a.j, b), b = Jq(a));
            return b
        };
        this.return = function(b) {
            return Kq(a, b)
        };
        this[_.w(y.Symbol, "iterator")] = function() {
            return this
        }
    };
    Mq = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new y.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : y.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    };
    _.fb = function(a) {
        return Mq(new Lq(new Hq(a)))
    };
    ab = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    sq("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    sq("Reflect.construct", function() {
        return yq
    }, "es6");
    sq("Reflect.setPrototypeOf", function(a) {
        return a ? a : Dq ? function(b, c) {
            try {
                return Dq(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    sq("Promise", function(a) {
        function b() {
            this.j = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.m = function(g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.D(function() {
                    h.C()
                })
            }
            this.j.push(g)
        };
        var d = pq.setTimeout;
        b.prototype.D = function(g) {
            d(g, 0)
        };
        b.prototype.C = function() {
            for (; this.j && this.j.length;) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.I(l)
                    }
                }
            }
            this.j = null
        };
        b.prototype.I = function(g) {
            this.D(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.m = 0;
            this.D = void 0;
            this.j = [];
            this.H = !1;
            var h = this.I();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.I = function() {
            function g(l) {
                return function(n) {
                    k || (k = !0, l.call(h, n))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.F),
                reject: g(this.C)
            }
        };
        e.prototype.F = function(g) {
            if (g === this) this.C(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.K(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.va(g) : this.l(g)
            }
        };
        e.prototype.va = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.C(k);
                return
            }
            "function" == typeof h ? this.M(h, g) : this.l(g)
        };
        e.prototype.C = function(g) {
            this.o(2, g)
        };
        e.prototype.l = function(g) {
            this.o(1, g)
        };
        e.prototype.o = function(g, h) {
            if (0 != this.m) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.m);
            this.m = g;
            this.D = h;
            2 === this.m && this.U();
            this.B()
        };
        e.prototype.U = function() {
            var g = this;
            d(function() {
                if (g.O()) {
                    var h = pq.console;
                    "undefined" !== typeof h && h.error(g.D)
                }
            }, 1)
        };
        e.prototype.O = function() {
            if (this.H) return !1;
            var g = pq.CustomEvent,
                h = pq.Event,
                k = pq.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = pq.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.D;
            return k(g)
        };
        e.prototype.B = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.m(this.j[g]);
                this.j = null
            }
        };
        var f = new b;
        e.prototype.K = function(g) {
            var h = this.I();
            g.nc(h.resolve, h.reject)
        };
        e.prototype.M = function(g, h) {
            var k = this.I();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(p, r) {
                return "function" == typeof p ? function(u) {
                    try {
                        l(p(u))
                    } catch (v) {
                        n(v)
                    }
                } : r
            }
            var l, n, m = new e(function(p, r) {
                l = p;
                n = r
            });
            this.nc(k(g, l), k(h, n));
            return m
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.nc = function(g, h) {
            function k() {
                switch (l.m) {
                    case 1:
                        g(l.D);
                        break;
                    case 2:
                        h(l.D);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.m);
                }
            }
            var l = this;
            null == this.j ? f.m(k) : this.j.push(k);
            this.H = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = _.B(g), n = l.next(); !n.done; n = l.next()) c(n.value).nc(h, k)
            })
        };
        e.all = function(g) {
            var h = _.B(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, n) {
                function m(u) {
                    return function(v) {
                        p[u] = v;
                        r--;
                        0 == r && l(p)
                    }
                }
                var p = [],
                    r = 0;
                do p.push(void 0), r++, c(k.value).nc(m(p.length - 1), n), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    sq("Object.setPrototypeOf", function(a) {
        return a || Dq
    }, "es6");
    sq("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(g) {
                this.j = (e += Math.random() + 1).toString();
                if (g) {
                    g = _.B(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!vq(g, d)) {
                var k = new b;
                nq(g, d, {
                    value: k
                })
            }
            if (!vq(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.j] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && vq(g, d) ? g[d][this.j] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && vq(g, d) && vq(g[d], this.j)
        };
        f.prototype.delete = function(g) {
            return c(g) && vq(g, d) && vq(g[d], this.j) ? delete g[d][this.j] : !1
        };
        return f
    }, "es6");
    sq("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.w(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(_.B([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = _.w(k, "entries").call(k),
                        n = l.next();
                    if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                    n = l.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0
                } catch (m) {
                    return !1
                }
            }()) return a;
        var b = new y.WeakMap,
            c = function(h) {
                this.m = {};
                this.j = f();
                this.size = 0;
                if (h) {
                    h = _.B(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.m[l.id] = []);
            l.ra ? l.ra.value = k : (l.ra = {
                next: this.j,
                Ua: this.j.Ua,
                head: this.j,
                key: h,
                value: k
            }, l.list.push(l.ra), this.j.Ua.next = l.ra, this.j.Ua = l.ra, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.ra && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.m[h.id], h.ra.Ua.next = h.ra.next, h.ra.next.Ua = h.ra.Ua, h.ra.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.m = {};
            this.j = this.j.Ua = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).ra
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).ra) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = _.w(this, "entries").call(this), n; !(n = l.next()).done;) n = n.value, h.call(k, n[1], n[0], this)
        };
        c.prototype[_.w(y.Symbol, "iterator")] = _.w(c.prototype, "entries");
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var n = h.m[l];
                if (n && vq(h.m, l))
                    for (h = 0; h < n.length; h++) {
                        var m = n[h];
                        if (k !== k && m.key !== m.key || k === m.key) return {
                            id: l,
                            list: n,
                            index: h,
                            ra: m
                        }
                    }
                return {
                    id: l,
                    list: n,
                    index: -1,
                    ra: void 0
                }
            },
            e = function(h, k) {
                var l = h.j;
                return tq(function() {
                    if (l) {
                        for (; l.head != h.j;) l = l.Ua;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Ua = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var Nq = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[_.w(y.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    sq("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Nq(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    sq("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Nq(this, function(b) {
                return b
            })
        }
    }, "es6");
    var Oq = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    sq("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Oq(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var Pq = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                i: e,
                je: f
            }
        }
        return {
            i: -1,
            je: void 0
        }
    };
    sq("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return Pq(this, b, c).je
        }
    }, "es6");
    sq("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    sq("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.w(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    sq("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    sq("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof y.Symbol && _.w(y.Symbol, "iterator") && b[_.w(y.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    sq("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Nq(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    sq("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.w(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.B([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = _.w(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.j = new y.Map;
            if (c) {
                c = _.B(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        };
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.j.has(c)
        };
        b.prototype.entries = function() {
            return _.w(this.j, "entries").call(this.j)
        };
        b.prototype.values = function() {
            return _.w(this.j, "values").call(this.j)
        };
        b.prototype.keys = _.w(b.prototype, "values");
        b.prototype[_.w(y.Symbol, "iterator")] = _.w(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.j.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    sq("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) vq(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    sq("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Oq(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    sq("globalThis", function(a) {
        return a || pq
    }, "es_2020");
    sq("Array.prototype.flatMap", function(a) {
        return a ? a : function(b, c) {
            for (var d = [], e = 0; e < this.length; e++) {
                var f = b.call(c, this[e], e, this);
                Array.isArray(f) ? d.push.apply(d, f) : d.push(f)
            }
            return d
        }
    }, "es9");
    sq("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    sq("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.w(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    sq("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Oq(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    sq("AggregateError", function(a) {
        if (a) return a;
        a = function(b, c) {
            c = Error(c);
            "stack" in c && (this.stack = c.stack);
            this.errors = b;
            this.message = c.message
        };
        _.P(a, Error);
        a.prototype.name = "AggregateError";
        return a
    }, "es_2021");
    sq("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : _.w(Array, "from").call(Array, b);
            return y.Promise.all(b.map(function(c) {
                return y.Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new y.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    sq("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) vq(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    sq("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(_.w(y.Symbol, "iterator") in b)) throw new TypeError("" + b + " is not iterable");
            b = b[_.w(y.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    sq("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return Pq(this, b, c).i
        }
    }, "es6");
    sq("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return y.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return y.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    _.t = this || self;
    Xc = function(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    };
    qa = function(a) {
        var b = Xc(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.ja = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    ka = function(a) {
        return Object.prototype.hasOwnProperty.call(a, Qq) && a[Qq] || (a[Qq] = ++Rq)
    };
    Qq = "closure_uid_" + (1E9 * Math.random() >>> 0);
    Rq = 0;
    Sq = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    Tq = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    _.Uq = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.Uq = Sq : _.Uq = Tq;
        return _.Uq.apply(null, arguments)
    };
    _.Vq = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    qe = function() {
        return Date.now()
    };
    var Wq;
    var Wf = function(a, b) {
        this.j = a === Xq && b || "";
        this.m = Yq
    };
    Wf.prototype.Ra = !0;
    Wf.prototype.La = function() {
        return this.j
    };
    var Xf = function(a) {
            return a instanceof Wf && a.constructor === Wf && a.m === Yq ? a.j : "type_error:Const"
        },
        Zq = function(a) {
            return new Wf(Xq, a)
        },
        Yq = {},
        Xq = {};
    var nb = Zq("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var $q, ar, Rh, cr;
    $q = function() {
        return !0
    };
    ar = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    Rh = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.br = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    cr = function(a, b, c) {
        var d = 0,
            e = !1,
            f = [],
            g = function() {
                d = 0;
                e && (e = !1, h())
            },
            h = function() {
                d = _.t.setTimeout(g, b);
                var k = f;
                f = [];
                a.apply(c, k)
            };
        return function(k) {
            f = arguments;
            d ? e = !0 : h()
        }
    };
    var dr, ba;
    dr = {
        passive: !0
    };
    ba = Rh(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.t.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.db = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, ca(d)), !0) : !1
    };
    _.Rd = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, ca(d)), !0) : !1
    };
    var fr;
    _.da = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.er = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.qg = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    _.Mc = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    fr = function(a, b) {
        return Array.prototype.reduce.call(a, b, 0)
    };
    _.Ig = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var Ba = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var dg = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var yn = {},
        Sa = function(a, b) {
            this.j = b === yn ? a : "";
            this.Ra = !0
        };
    Sa.prototype.toString = function() {
        return this.j.toString()
    };
    Sa.prototype.La = function() {
        return this.j.toString()
    };
    var Zf = function(a, b) {
        this.j = b === gr ? a : ""
    };
    Zf.prototype.toString = function() {
        return this.j + ""
    };
    Zf.prototype.Ra = !0;
    Zf.prototype.La = function() {
        return this.j.toString()
    };
    var Ua = function(a) {
            return a instanceof Zf && a.constructor === Zf ? a.j : "type_error:TrustedResourceUrl"
        },
        mb = function(a, b) {
            var c = Xf(a);
            if (!hr.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(ir, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof Wf ? Xf(d) : encodeURIComponent(String(d))
            });
            return Kd(a)
        },
        ir = /%{(\w+)}/g,
        hr = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        jr = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        gr = {},
        Kd = function(a) {
            return new Zf(a, gr)
        },
        kr = function(a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                    }
                }
            return b
        };
    var lr = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        Lj = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        Sp = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        cg = function(a) {
            if (!mr.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(nr, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(or, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(pr, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(qr, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(rr, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(sr, "&#0;"));
            return a
        },
        nr = /&/g,
        or = /</g,
        pr = />/g,
        qr = /"/g,
        rr = /'/g,
        sr = /\x00/g,
        mr = /[\x00&<>"']/,
        Tp = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Ma = function(a, b) {
            this.j = b === tr ? a : ""
        },
        Na, ag, $f, tr;
    Ma.prototype.toString = function() {
        return this.j.toString()
    };
    Ma.prototype.Ra = !0;
    Ma.prototype.La = function() {
        return this.j.toString()
    };
    Na = function(a) {
        return a instanceof Ma && a.constructor === Ma ? a.j : "type_error:SafeUrl"
    };
    ag = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    $f = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    tr = {};
    _.bb = function(a) {
        return new Ma(a, tr)
    };
    _.bg = _.bb("about:invalid#zClosurez");
    var gg = {},
        fg = function(a, b) {
            this.j = b === gg ? a : "";
            this.Ra = !0
        };
    fg.prototype.La = function() {
        return this.j.toString()
    };
    fg.prototype.toString = function() {
        return this.j.toString()
    };
    var Wa = function(a) {
            return a instanceof fg && a.constructor === fg ? a.j : "type_error:SafeHtml"
        },
        ur = function(a) {
            return a instanceof fg ? a : new fg(cg("object" == typeof a && a.Ra ? a.La() : String(a)), gg)
        },
        vr = function(a) {
            var b = ur(Sf),
                c = [],
                d = function(e) {
                    Array.isArray(e) ? e.forEach(d) : (e = ur(e), c.push(Wa(e).toString()))
                };
            a.forEach(d);
            return new fg(c.join(Wa(b).toString()), gg)
        },
        eg = function(a) {
            return vr(Array.prototype.slice.call(arguments))
        },
        Uf = /^[a-zA-Z0-9-]+$/,
        Yf = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Vf = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        },
        Sf = new fg(_.t.trustedTypes && _.t.trustedTypes.emptyHTML || "", gg);
    var wr;
    try {
        new URL("s://g"), wr = !0
    } catch (a) {
        wr = !1
    }
    var Oa = wr;
    var xr = {
            xg: 0,
            sg: 1,
            tg: 2,
            0: "HTML_FORMATTED_CONTENT",
            1: "EMBEDDED_INTERNAL_CONTENT",
            2: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
        },
        yr = function(a, b) {
            b = Error.call(this, a + " cannot be used with intent " + xr[b]);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.type = a;
            this.name = "TypeCannotBeUsedWithIntentError"
        };
    _.P(yr, Error);
    _.Za = function(a) {
        this.af = a
    };
    _.zr = [$a("data"), $a("http"), $a("https"), $a("mailto"), $a("ftp"), new _.Za(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];
    var hb = function(a) {
        return new y.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var Ar = {};
    var qb, pb = "undefined" !== typeof TextEncoder;
    var Br = function(a) {
        Br[" "](a);
        return a
    };
    Br[" "] = function() {};
    var Cr = function(a, b) {
        try {
            return Br(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Dr, Fr, Gr, Hr, Ir, Jr;
    Dr = Fa("Opera");
    _.Er = Fa("Trident") || Fa("MSIE");
    Fr = Fa("Edge");
    Gr = Fa("Gecko") && !(-1 != Ea().toLowerCase().indexOf("webkit") && !Fa("Edge")) && !(Fa("Trident") || Fa("MSIE")) && !Fa("Edge");
    Hr = -1 != Ea().toLowerCase().indexOf("webkit") && !Fa("Edge");
    Ir = function() {
        var a = _.t.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var Kr = "",
            Lr = function() {
                var a = Ea();
                if (Gr) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Fr) return /Edge\/([\d\.]+)/.exec(a);
                if (_.Er) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Hr) return /WebKit\/(\S+)/.exec(a);
                if (Dr) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Lr && (Kr = Lr ? Lr[1] : "");
        if (_.Er) {
            var Mr = Ir();
            if (null != Mr && Mr > parseFloat(Kr)) {
                Jr = String(Mr);
                break a
            }
        }
        Jr = Kr
    }
    var Nr = Jr,
        Or;
    if (_.t.document && _.Er) {
        var Pr = Ir();
        Or = Pr ? Pr : parseInt(Nr, 10) || void 0
    } else Or = void 0;
    var Qr = Or;
    !Fa("Android") || Ia();
    Ia();
    Ja();
    var Rr = {},
        Sr = null,
        Tr = Gr || Hr || "function" == typeof _.t.btoa,
        mc = function(a, b) {
            void 0 === b && (b = 0);
            Ur();
            b = Rr[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        Vr = function(a, b) {
            if (Tr && !b) a = _.t.btoa(a);
            else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                    var f = a.charCodeAt(e);
                    255 < f && (c[d++] = f & 255, f >>= 8);
                    c[d++] = f
                }
                a = mc(c, b)
            }
            return a
        },
        ao = function(a) {
            var b = "";
            Wr(a, function(c) {
                b += String.fromCharCode(c)
            });
            return b
        },
        tb = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            Wr(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        Wr = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        n = Sr[l];
                    if (null != n) return n;
                    if (!Lj(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            Ur();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        Ur = function() {
            if (!Sr) {
                Sr = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Rr[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === Sr[f] && (Sr[f] = e)
                    }
                }
            }
        };
    var vb = "undefined" !== typeof Uint8Array,
        Xi, wb = {};
    var Xr, Nb = function(a, b) {
            xb(b);
            this.Eb = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        },
        Ob = function() {
            return Xr || (Xr = new Nb(null, wb))
        },
        nc = function(a) {
            var b = a.Eb;
            return null == b ? "" : "string" === typeof b ? b : a.Eb = mc(b)
        };
    Nb.prototype.isEmpty = function() {
        return null == this.Eb
    };
    var Wi = function(a) {
        xb(wb);
        var b = ub(a.Eb);
        return null == b ? b : a.Eb = b
    };
    var yb = "function" === typeof y.Symbol && "symbol" === typeof(0, y.Symbol)() ? (0, y.Symbol)() : void 0;
    var Vb = {},
        Yr, Bc, Zr = [];
    Cb(Zr, 23);
    Bc = Object.freeze(Zr);
    var Ic = function(a) {
            if (Eb(a.ca)) throw Error("Cannot mutate an immutable Message");
        },
        $r = function(a) {
            this.m = 0;
            this.j = a
        };
    $r.prototype.next = function() {
        return this.m < this.j.length ? {
            done: !1,
            value: this.j[this.m++]
        } : {
            done: !0,
            value: void 0
        }
    };
    $r.prototype[_.w(y.Symbol, "iterator")] = function() {
        return this
    };
    var jc = function(a, b, c, d) {
            d = void 0 === d ? ac : d;
            c = Bb(a);
            c |= 32;
            Cb(a, c);
            this.m = c;
            this.D = (this.I = b) ? Zb : $b;
            this.l = d;
            this.j = b = new y.Map;
            for (d = 0; d < a.length; d++) c = a[d], b.set(c[0], c[1]);
            this.size = b.size
        },
        as = function(a) {
            if (a.m & 2) throw Error("Cannot mutate an immutable Map");
        },
        hc = function(a, b) {
            return new jc(b, a.I, a.D, a.l)
        },
        oc = function(a, b) {
            b = void 0 === b ? bc : b;
            for (var c = bs(a), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = a.j.get(c[d]);
                c[d] = [b(e), b(f)]
            }
            return c
        },
        xc = function(a, b) {
            b = void 0 === b ? bc : b;
            var c = [];
            a = _.w(a.j, "entries").call(a.j);
            for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
            return c
        };
    q = jc.prototype;
    q.clear = function() {
        as(this);
        this.j.clear();
        this.size = 0
    };
    q.delete = function(a) {
        as(this);
        return this.j.delete(a) ? (this.size = this.j.size, !0) : !1
    };
    q.entries = function() {
        for (var a = bs(this), b = 0; b < a.length; b++) {
            var c = a[b];
            a[b] = [c, this.get(c)]
        }
        return new $r(a)
    };
    q.keys = function() {
        var a = bs(this);
        return new $r(a)
    };
    q.values = function() {
        for (var a = bs(this), b = 0; b < a.length; b++) a[b] = this.get(a[b]);
        return new $r(a)
    };
    q.forEach = function(a, b) {
        for (var c = bs(this), d = 0; d < c.length; d++) {
            var e = c[d];
            a.call(b, this.get(e), e, this)
        }
    };
    q.set = function(a, b) {
        as(this);
        var c = this.j;
        if (null == b) return c.delete(a), this;
        c.set(a, this.D(b, this.I, !1, this.C));
        this.size = c.size;
        return this
    };
    q.get = function(a) {
        var b = this.j;
        if (b.has(a)) {
            var c = b.get(a),
                d = this.m,
                e = this.I;
            e && Array.isArray(c) && d & 16 && Gb(c);
            d = this.D(c, e, !!(d & 2), this.C);
            d !== c && b.set(a, d);
            return d
        }
    };
    q.has = function(a) {
        return this.j.has(a)
    };
    var bs = function(a) {
        return _.w(Array, "from").call(Array, _.w(a.j, "keys").call(a.j)).sort(Xb)
    };
    jc.prototype[_.w(y.Symbol, "iterator")] = function() {
        return _.w(this, "entries").call(this)
    };
    var kc;
    var zc, z, ok, wh, Vm, De, F, Vi, ee, Gc, Dc, Fe, ds, Qi, Ui, Ti, Pn, es, cs, Rn, Le, Uc, Ug, Rc, fs, af, Yi, gs, is, Xk, Ym, bp, fe, To, js, Sm, ks, ls, ms, hf;
    zc = function(a) {
        return a.j || (a.j = a.ca[a.m + a.ab] = {})
    };
    z = function(a, b, c) {
        return -1 === b ? null : b >= a.m ? a.j ? a.j[b] : void 0 : c && a.j && (c = a.j[b], null != c) ? c : a.ca[b + a.ab]
    };
    _.A = function(a, b, c, d) {
        Ic(a);
        return Ac(a, b, c, d)
    };
    ok = function(a, b) {
        return null != z(a, b, !1)
    };
    wh = function(a, b, c) {
        return void 0 !== cs(a, b, c, !1)
    };
    Vm = function(a, b) {
        return Cc(a, b, 0, !1, Eb(a.ca))
    };
    De = function(a, b) {
        a = z(a, b);
        return null == a ? a : +a
    };
    F = function(a, b) {
        a = z(a, b);
        return null == a ? a : !!a
    };
    Vi = function(a, b) {
        var c = z(a, b),
            d = Pb(c, !0);
        null != d && d !== c && Ac(a, b, d);
        return d
    };
    ee = function(a, b, c) {
        a = z(a, b);
        return null == a ? c : a
    };
    Dc = function(a, b, c, d) {
        if (null == c) c = Bc;
        else {
            var e = Bb(c);
            1 !== (e & 1) && (Object.isFrozen(c) && (c = Array.prototype.slice.call(c)), Cb(c, e | 1))
        }
        return _.A(a, b, c, d)
    };
    _.jh = function(a, b, c) {
        if (null == c) a = _.A(a, b, Bc);
        else {
            var d = Bb(c);
            if (!(d & 4)) {
                if (d & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
                for (var e = 0; e < c.length; e++) c[e] = c[e];
                Cb(c, d | 5)
            }
            a = _.A(a, b, c)
        }
        return a
    };
    Fe = function(a, b) {
        return _.A(a, b, void 0, !1)
    };
    ds = function(a, b, c) {
        Ic(a);
        Cc(a, b, 2, !1, !1).push(c)
    };
    Qi = function(a, b, c, d) {
        Ic(a);
        (c = Ti(a, c)) && c !== b && null != d && Ac(a, c, void 0, !1);
        return Ac(a, b, d)
    };
    Ui = function(a, b, c) {
        return Ti(a, b) === c ? c : -1
    };
    Ti = function(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != z(a, e) && (0 !== c && Ac(a, c, void 0, !1), c = e)
        }
        return c
    };
    Pn = function(a, b, c) {
        Ic(a);
        var d = z(a, c);
        b = Yb(Wb(d, b, !0));
        d !== b && Ac(a, c, b);
        return b
    };
    es = (0, y.Symbol)(void 0);
    cs = function(a, b, c, d) {
        var e = z(a, c, d);
        b = Wb(e, b);
        b !== e && null != b && (Ac(a, c, b, d), zb(b.ca, Bb(a.ca) & 18));
        return b
    };
    Rn = function(a, b, c) {
        if (a = cs(a, b, c, !1)) b = a;
        else if (a = b[es]) b = a;
        else {
            a = new b;
            if (Ar !== Ar) throw Error("requires a valid immutable API token");
            Eb(a.ca) || ((c = a.D) && fc(c.ca, a.ca) ? a = c : (c = Qc(a, !0), Fb(c.ca), a = a.D = c));
            b = b[es] = a
        }
        return b
    };
    Le = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = cs(a, b, c, d);
        if (null == b) return b;
        if (!Eb(a.ca)) {
            var e = Yb(b);
            e !== b && (b = e, Ac(a, c, b, d))
        }
        return b
    };
    Uc = function(a, b, c, d) {
        var e = Eb(a.ca);
        b = Kc(a, b, c, d, e, e);
        a = Cc(a, c, 3, d, e);
        if (!(e || Bb(a) & 8)) {
            for (e = 0; e < b.length; e++) c = b[e], d = Yb(c), c !== d && (b[e] = d, a[e] = b[e].ca);
            zb(a, 8)
        }
        return b
    };
    _.Rg = function(a, b, c) {
        Ic(a);
        null == c && (c = void 0);
        return Ac(a, b, c)
    };
    Ug = function(a, b, c, d) {
        Ic(a);
        null == d && (d = void 0);
        return Qi(a, b, c, d)
    };
    Rc = function(a, b, c, d) {
        Ic(a);
        if (null != c) {
            var e = Db([]);
            for (var f = !1, g = 0; g < c.length; g++) e[g] = c[g].ca, f = f || Eb(e[g]);
            a.za || (a.za = {});
            a.za[b] = c;
            c = e;
            f ? Ab(c, 8) : zb(c, 8)
        } else a.za && (a.za[b] = void 0), e = Bc;
        return Ac(a, b, e, d)
    };
    fs = function(a, b, c, d) {
        Ic(a);
        var e = Kc(a, c, b, void 0, !1, !1);
        c = null != d ? d : new c;
        a = Cc(a, b, 2, void 0, !1);
        e.push(c);
        a.push(c.ca);
        Eb(c.ca) && Ab(a, 8);
        return c
    };
    af = function(a, b, c, d) {
        fs(a, b, c, d);
        return a
    };
    Yi = function(a, b, c) {
        return Lc(z(a, b), void 0 === c ? 0 : c)
    };
    gs = function() {
        var a = $h().j;
        return z(a, 26)
    };
    is = function(a) {
        var b = hs;
        var c = void 0 === c ? 0 : c;
        return Yi(a, Ui(a, b, 3), c)
    };
    Xk = function(a, b) {
        return Ec(a, b, Ub, !1)
    };
    Ym = function(a, b) {
        return Lc(z(a, b), "")
    };
    bp = function(a, b, c) {
        return Lc(F(a, b), void 0 === c ? !1 : c)
    };
    fe = function(a, b) {
        return Lc(z(a, b), 0)
    };
    To = function(a, b) {
        return Lc(z(a, b), 0)
    };
    js = function(a, b) {
        return Ym(a, Ui(a, b, 2))
    };
    Sm = function(a, b, c, d) {
        return Le(a, b, Ui(a, d, c))
    };
    ks = function(a, b) {
        a = z(a, b);
        return null == a ? void 0 : a
    };
    ls = function(a, b) {
        a = F(a, b);
        return null == a ? void 0 : a
    };
    ms = function(a, b) {
        a = z(a, b);
        return null == a ? void 0 : a
    };
    _.Zg = function(a, b, c) {
        return _.Jc(a, b, c, 0)
    };
    hf = function(a, b) {
        return null != z(a, b)
    };
    _.R = function(a, b, c) {
        null == a && (a = kc);
        kc = void 0;
        var d = this.constructor.j || 0,
            e = 0 < d,
            f = this.constructor.messageId,
            g = !1;
        if (null == a) {
            a = f ? [f] : [];
            var h = !0;
            Cb(a, 48)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (f && f !== a[0]) throw Error();
            var k = zb(a, 0),
                l = k;
            if (h = 0 !== (16 & l))(g = 0 !== (32 & l)) || (l |= 32);
            if (e)
                if (128 & l) d = 0;
                else {
                    if (0 < a.length) {
                        var n = a[a.length - 1];
                        if (Lb(n) && "g" in n) {
                            d = 0;
                            l |= 128;
                            delete n.g;
                            var m = !0,
                                p;
                            for (p in n) {
                                m = !1;
                                break
                            }
                            m && a.pop()
                        }
                    }
                }
            else if (128 & l) throw Error();
            k !== l && Cb(a, l)
        }
        this.ab = (f ? 0 : -1) - d;
        this.za = void 0;
        this.ca = a;
        a: {
            f = this.ca.length;d = f - 1;
            if (f && (f = this.ca[d], Lb(f))) {
                this.j = f;
                this.m = d - this.ab;
                break a
            }
            void 0 !== b && -1 < b ? (this.m = Math.max(b, d + 1 - this.ab), this.j = void 0) : this.m = Number.MAX_VALUE
        }
        if (!e && this.j && "g" in this.j) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c) {
            b = h && !g && !0;
            e = this.m;
            var r;
            for (h = 0; h < c.length; h++) g = c[h], g < e ? (g += this.ab, (d = a[g]) ? Sc(d, b) : a[g] = Bc) : (r || (r = zc(this)), (d = r[g]) ? Sc(d, b) : r[g] = Bc)
        }
    };
    _.R.prototype.toJSON = function() {
        var a = this.ca;
        return Yr ? a : qc(a, sc, tc)
    };
    var be = function(a) {
            Yr = !0;
            try {
                return JSON.stringify(a.toJSON(), Tc)
            } finally {
                Yr = !1
            }
        },
        Xd = function(a, b) {
            if (null == b || "" == b) return new a;
            b = JSON.parse(b);
            if (!Array.isArray(b)) throw Error(void 0);
            return lc(a, Gb(b))
        },
        yc = function(a) {
            var b = qc(a.ca, vc, Ib);
            Gb(b);
            kc = b;
            b = new a.constructor(b);
            kc = void 0;
            Wc(b, a);
            return b
        },
        Yb = function(a) {
            if (Eb(a.ca)) {
                var b = Qc(a, !1);
                b.D = a;
                a = b
            }
            return a
        };
    _.R.prototype.Ec = Vb;
    var Zc = 0,
        $c = 0,
        bd = "function" === typeof BigInt;
    var ns = function(a, b) {
            this.m = a >>> 0;
            this.j = b >>> 0
        },
        ps = function(a) {
            if (!a) return os || (os = new ns(0, 0));
            if (!/^\d+$/.test(a)) return null;
            cd(a);
            return new ns(Zc, $c)
        },
        os, qs = function(a, b) {
            this.m = a >>> 0;
            this.j = b >>> 0
        },
        sd = function(a) {
            if (!a) return rs || (rs = new qs(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            cd(a);
            return new qs(Zc, $c)
        },
        rs;
    var ss = function() {
        this.j = []
    };
    ss.prototype.length = function() {
        return this.j.length
    };
    ss.prototype.end = function() {
        var a = this.j;
        this.j = [];
        return a
    };
    var ud = function(a, b, c) {
            for (; 0 < c || 127 < b;) a.j.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.j.push(b)
        },
        td = function(a, b) {
            for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
            a.j.push(b)
        },
        ts = function(a, b) {
            if (0 <= b) td(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.j.push(b & 127 | 128), b >>= 7;
                a.j.push(1)
            }
        };
    var us = function() {
            this.D = [];
            this.m = 0;
            this.j = new ss
        },
        vs = function(a, b) {
            0 !== b.length && (a.D.push(b), a.m += b.length)
        },
        ws = function(a, b) {
            td(a.j, 8 * b + 2);
            b = a.j.end();
            vs(a, b);
            b.push(a.m);
            return b
        },
        xs = function(a, b) {
            var c = b.pop();
            for (c = a.m + a.j.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.m++;
            b.push(c);
            a.m++
        },
        fd = function(a, b) {
            if (b = b.wb) {
                vs(a, a.j.end());
                for (var c = 0; c < b.length; c++) vs(a, Wi(b[c]) || Xi || (Xi = new Uint8Array(0)))
            }
        },
        ys = function(a, b, c) {
            td(a.j, 8 * b + 2);
            td(a.j, c.length);
            vs(a, a.j.end());
            vs(a, c)
        };
    var kd = (0, y.Symbol)(),
        id = (0, y.Symbol)(),
        hd = (0, y.Symbol)(),
        We = function(a, b) {
            var c = new us;
            md(a, c, ld(b));
            vs(c, c.j.end());
            a = new Uint8Array(c.m);
            b = c.D;
            for (var d = b.length, e = 0, f = 0; f < d; f++) {
                var g = b[f];
                a.set(g, e);
                e += g.length
            }
            c.D = [a];
            return a
        },
        zs = rd(function(a, b, c) {
            if (5 !== a.j()) return !1;
            _.A(b, c, a.l());
            return !0
        }, function(a, b, c) {
            b = De(b, c);
            if (null != b) {
                td(a.j, 8 * c + 5);
                a = a.j;
                var d = +b;
                0 === d ? 0 < 1 / d ? Zc = $c = 0 : ($c = 0, Zc = 2147483648) : isNaN(d) ? ($c = 0, Zc = 2147483647) : (d = (c = 0 > d ? -2147483648 : 0) ? -d : d, 3.4028234663852886E38 < d ? ($c = 0, Zc = (c | 2139095040) >>> 0) : 1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)), $c = 0, Zc = (c | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2), d *= Math.pow(2, -b), d = Math.round(8388608 * d), 16777216 <= d && ++b, $c = 0, Zc = (c | b + 127 << 23 | d & 8388607) >>> 0));
                c = Zc;
                a.j.push(c >>> 0 & 255);
                a.j.push(c >>> 8 & 255);
                a.j.push(c >>> 16 & 255);
                a.j.push(c >>> 24 & 255)
            }
        }),
        As = rd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.A(b, c, a.B());
            return !0
        }, vd),
        Bs = rd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.A(b, c, a.o());
            return !0
        }, vd),
        Cs = rd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.A(b, c, a.O());
            return !0
        }, function(a, b, c) {
            b = z(b, c);
            null != b && ("string" === typeof b && ps(b), null != b && (td(a.j, 8 * c), "number" === typeof b ? (a = a.j, ad(b), ud(a, Zc, $c)) : (c = ps(b), ud(a.j, c.m, c.j))))
        }),
        Ds = rd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.A(b, c, a.H());
            return !0
        }, function(a, b, c) {
            b = z(b, c);
            null != b && null != b && (td(a.j, 8 * c), ts(a.j, b))
        }),
        Es = rd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.A(b, c, a.I());
            return !0
        }, function(a, b, c) {
            b = F(b, c);
            null != b && (td(a.j, 8 * c), a.j.j.push(b ? 1 : 0))
        }),
        Fs = rd(function(a, b, c) {
            if (2 !== a.j()) return !1;
            _.A(b, c, a.D());
            return !0
        }, function(a, b, c) {
            b = z(b, c);
            null != b && ys(a, c, rb(b))
        }),
        Gs = rd(function(a, b, c) {
            if (2 !== a.j()) return !1;
            ds(b, c, a.D());
            return !0
        }, function(a, b, c) {
            b = Xk(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) {
                    var e = b[d];
                    null != e && ys(a, c, rb(e))
                }
        }),
        Hs = rd(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            a.m(Pn(b, d, c), e);
            return !0
        }, function(a, b, c, d, e) {
            b = Le(b, d, c);
            null != b && (c = ws(a, c), e(b, a), xs(a, c))
        }),
        Is = rd(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            a.m(fs(b, c, d), e);
            return !0
        }, function(a, b, c, d, e) {
            b = Uc(b, d, c);
            if (null != b)
                for (d = 0; d < b.length; d++) {
                    var f = ws(a, c);
                    e(b[d], a);
                    xs(a, f)
                }
        }),
        Js = rd(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.A(b, c, a.C());
            return !0
        }, function(a, b, c) {
            b = z(b, c);
            null != b && (b = parseInt(b, 10), td(a.j, 8 * c), ts(a.j, b))
        });
    var D = {
        wg: function() {},
        lh: function() {
            return ""
        },
        qg: function() {}
    };
    D.fd = wd;
    var Ks = wd(function(a) {
        return null !== a && void 0 !== a
    }, "exists");
    D.assert = function() {};
    D.sa = function(a) {
        return a
    };
    var xd = void 0;
    D.rh = yd;
    D.th = zd;
    D.hh = function() {};
    D.ih = function(a) {
        return a
    };
    D.Yd = Ad;
    D.vh = function(a, b) {
        Ad(a, b);
        return a
    };
    D.gh = function() {};
    D.J = function(a) {
        return a
    };
    D.sh = function(a, b) {
        yd(a, Ks, b)
    };
    D.uh = function(a, b) {
        return zd(a, Ks, b)
    };
    D.kh = function(a, b) {
        return a(b)
    };
    D.functionName = function(a) {
        var b = a.name;
        b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
        return b
    };
    D.mh = function(a) {
        Ad(!xd);
        xd = function() {
            var b = "function" === typeof a ? a() : a;
            xd = void 0;
            return b
        }
    };
    var ho = function(a) {
        _.R.call(this, a)
    };
    _.P(ho, _.R);
    var eo = function(a, b) {
            return _.Rg(a, 5, b)
        },
        go = function(a, b) {
            return _.Zg(a, 2, b)
        },
        fo = function(a, b) {
            return _.Jc(a, 3, b, "")
        },
        co = function(a, b) {
            return _.Jc(a, 6, b, !1)
        },
        bo = function(a) {
            _.R.call(this, a)
        };
    _.P(bo, _.R);
    var Ls = function(a, b) {
        return _.Jc(a, 1, b, "")
    };
    var Ms = function(a) {
            this.j = a.m;
            this.m = a.D;
            this.I = a.I;
            this.Ub = a.Ub;
            this.G = a.G;
            this.Cb = a.Cb;
            this.Dc = a.Dc;
            this.Lc = a.Lc;
            this.Cc = a.Cc;
            this.D = a.j
        },
        Ns = function(a, b, c) {
            this.m = a;
            this.D = b;
            this.I = c;
            this.G = window;
            this.Cb = "env";
            this.Dc = "n";
            this.Lc = "0";
            this.Cc = "1";
            this.j = !0
        };
    Ns.prototype.build = function() {
        return new Ms(this)
    };
    var qo = function(a, b) {
        var c = void 0 === bp(b, 6) ? !0 : bp(b, 6),
            d, e;
        a: switch (ee(b, 4, 0)) {
            case 1:
                var f = "pt";
                break a;
            case 2:
                f = "cr";
                break a;
            default:
                f = ""
        }
        f = new Ns(Bd(ee(b, 2, 0)), Ym(b, 3), f);
        b = null != (e = null == (d = Le(b, bo, 5)) ? void 0 : Ym(d, 1)) ? e : "";
        f.Ub = b;
        f.j = c;
        f.G = a;
        return f.build()
    };
    var Vk = function(a) {
        _.R.call(this, a)
    };
    _.P(Vk, _.R);
    var Uk = function(a, b) {
            return _.A(a, 1, b)
        },
        Sk = function(a, b) {
            return _.A(a, 4, b)
        },
        Tk = function(a, b) {
            return _.A(a, 2, b)
        },
        Os = [Vk, 1, Js, 4, Es, 2, Ds, 3, Fs];
    var cl = function(a) {
        _.R.call(this, a, -1, Ps)
    };
    _.P(cl, _.R);
    var bl = function(a, b) {
            return _.A(a, 1, b)
        },
        dl = function(a, b) {
            _.A(a, 2, b)
        },
        $k = function(a, b) {
            return af(a, 3, il, b)
        },
        al = function(a, b) {
            return _.A(a, 4, b)
        };
    cl.prototype.Md = function() {
        return ee(this, 7, 0)
    };
    var il = function(a) {
        _.R.call(this, a, -1, Qs)
    };
    _.P(il, _.R);
    var ll = function(a, b) {
            _.jh(a, 4, b)
        },
        jl = function(a, b) {
            _.Rg(a, 6, b)
        },
        nl = function(a, b) {
            _.Rg(a, 7, b)
        },
        Rs = function(a) {
            _.R.call(this, a)
        };
    _.P(Rs, _.R);
    Rs.prototype.getId = function() {
        return Ym(this, 1)
    };
    var kl = function(a) {
            var b = new Rs;
            return _.A(b, 1, a)
        },
        Ss = function(a) {
            _.R.call(this, a)
        };
    _.P(Ss, _.R);
    Ss.prototype.getWidth = function() {
        return fe(this, 1)
    };
    var pl = function(a) {
        var b = new Ss;
        return _.A(b, 1, a)
    };
    Ss.prototype.getHeight = function() {
        return fe(this, 2)
    };
    var ol = function(a, b) {
            return _.A(a, 2, b)
        },
        Ts = function(a) {
            _.R.call(this, a)
        };
    _.P(Ts, _.R);
    var Ps = [3],
        Qs = [4],
        Us = [cl, 1, Fs, 2, Bs, 3, Is, [il, 1, Fs, 2, Bs, 8, Bs, 3, Fs, 4, Gs, 5, Js, 6, Hs, [Rs, 1, Fs], 7, Hs, [Ss, 1, Ds, 2, Ds], 9, Hs, [Ts, 1, Bs, 2, Es]], 4, Js, 5, Hs, Os, 6, Es, 7, Js];
    var Vs = function(a) {
        _.R.call(this, a)
    };
    _.P(Vs, _.R);
    var Ws = [Vs, 1, Js, 2, Es];
    var Ys = function(a) {
        _.R.call(this, a, -1, Xs)
    };
    _.P(Ys, _.R);
    var Zk = function(a, b) {
            return fs(a, 2, cl, b)
        },
        gl = function(a, b) {
            _.Rg(a, 5, b)
        },
        Xs = [2],
        Zs = [Ys, 1, Js, 6, Fs, 2, Is, Us, 3, Js, 4, Fs, 5, Hs, Os, 9, Hs, Ws, 7, Es, 8, Ds];
    var at = function(a) {
        _.R.call(this, a, -1, $s)
    };
    _.P(at, _.R);
    var bt = function(a) {
            var b = new Ys;
            b = _.A(b, 1, 1);
            return fs(a, 1, Ys, b)
        },
        $s = [1],
        ct = [at, 1, Is, Zs];
    var et = function(a) {
        _.R.call(this, a, -1, dt)
    };
    _.P(et, _.R);
    var gt = function(a) {
        _.R.call(this, a, -1, ft)
    };
    _.P(gt, _.R);
    var ht = function(a) {
        _.R.call(this, a)
    };
    _.P(ht, _.R);
    var dt = [1],
        ft = [1],
        hs = [2, 3];
    var it = function(a) {
        _.R.call(this, a)
    };
    _.P(it, _.R);
    it.prototype.na = function() {
        return Ym(this, 1)
    };
    it.prototype.I = function() {
        return js(this, jt)
    };
    var jt = [2, 3];
    var gf = function(a) {
        _.R.call(this, a, -1, kt)
    };
    _.P(gf, _.R);
    gf.prototype.Pa = function() {
        return Ym(this, 1)
    };
    gf.prototype.Ac = function() {
        return hf(this, 1)
    };
    gf.prototype.Pb = function() {
        return Uc(this, it, 2)
    };
    var kt = [2];
    var mt = function(a) {
        _.R.call(this, a, -1, lt)
    };
    _.P(mt, _.R);
    mt.prototype.Pa = function() {
        return Ym(this, 1)
    };
    mt.prototype.Ac = function() {
        return hf(this, 1)
    };
    var lt = [4];
    var nt = function(a) {
        _.R.call(this, a)
    };
    _.P(nt, _.R);
    var pt = function(a) {
        _.R.call(this, a, -1, ot)
    };
    _.P(pt, _.R);
    pt.prototype.zc = function() {
        return Rn(this, nt, 2)
    };
    var ot = [1];
    var st = function(a) {
        _.R.call(this, a, -1, rt)
    };
    _.P(st, _.R);
    var tt = function(a) {
        _.R.call(this, a)
    };
    _.P(tt, _.R);
    tt.prototype.Pa = function() {
        return Ym(this, 1)
    };
    tt.prototype.Ac = function() {
        return hf(this, 1)
    };
    var rt = [1];
    var ut = function(a) {
        _.R.call(this, a)
    };
    _.P(ut, _.R);
    ut.prototype.getAdUnitPath = function() {
        return Ym(this, 1)
    };
    var vt = function(a) {
        _.R.call(this, a)
    };
    _.P(vt, _.R);
    var wt = [vt, 1, As];
    var Nm = function(a) {
        _.R.call(this, a)
    };
    _.P(Nm, _.R);
    Nm.prototype.getEscapedQemQueryId = function() {
        return Ym(this, 1)
    };
    var xt = function(a) {
        _.R.call(this, a)
    };
    _.P(xt, _.R);
    var yt = [Nm, 1, Fs, 2, Hs, wt, 3, Hs, [xt, 1, Js, 2, Bs]];
    var At = function(a) {
        _.R.call(this, a, -1, zt)
    };
    _.P(At, _.R);
    var Qm = function(a) {
        _.R.call(this, a)
    };
    _.P(Qm, _.R);
    var Tm = function(a) {
        _.R.call(this, a)
    };
    _.P(Tm, _.R);
    var zt = [1, 2],
        Rm = [1, 2];
    var Xm = function(a) {
        _.R.call(this, a)
    };
    _.P(Xm, _.R);
    Xm.prototype.getAdUnitPath = function() {
        return Ym(this, 2)
    };
    Xm.prototype.getWidth = function() {
        return fe(this, 3)
    };
    Xm.prototype.getHeight = function() {
        return fe(this, 4)
    };
    var Ct = function(a) {
        _.R.call(this, a, -1, Bt)
    };
    _.P(Ct, _.R);
    var Bt = [3];
    var Dt = function(a) {
        _.R.call(this, a)
    };
    _.P(Dt, _.R);
    var Et = [5, 6, 7, 8];
    var Gt = function(a) {
        _.R.call(this, a, -1, Ft)
    };
    _.P(Gt, _.R);
    var Ft = [4, 5, 6];
    var Ht = function(a) {
        _.R.call(this, a)
    };
    _.P(Ht, _.R);
    Ht.prototype.Qb = function() {
        return hf(this, 2)
    };
    var Jt = function(a) {
        _.R.call(this, a, -1, It)
    };
    _.P(Jt, _.R);
    var It = [13];
    var Lt = function(a) {
        _.R.call(this, a, -1, Kt)
    };
    _.P(Lt, _.R);
    var Kt = [13];
    var Qe = function(a) {
        _.R.call(this, a, -1, Mt)
    };
    _.P(Qe, _.R);
    var Nt = function(a) {
        _.R.call(this, a)
    };
    _.P(Nt, _.R);
    var Ot = function(a) {
        _.R.call(this, a)
    };
    _.P(Ot, _.R);
    var Pt = function(a) {
        _.R.call(this, a)
    };
    _.P(Pt, _.R);
    var Ve = function(a) {
        _.R.call(this, a)
    };
    _.P(Ve, _.R);
    Ve.prototype.na = function() {
        return z(this, 1)
    };
    var $e = function(a) {
            var b = new Ve;
            return _.A(b, 1, a)
        },
        Je = function(a, b) {
            return _.Rg(a, 10, b)
        },
        Me = function(a) {
            _.R.call(this, a)
        };
    _.P(Me, _.R);
    var Ke = function(a, b) {
            return _.A(a, 1, b)
        },
        Mt = [1, 2],
        Qt = [Ot, 1, Cs, 2, Cs, 3, Cs],
        Xe = [Qe, 1, Is, [Nt, 5, Fs, 4, Fs, 2, Hs, Qt, 3, Hs, Qt, 6, Es, 7, Hs, [Pt, 4, Js, 5, Fs], 8, Bs], 2, Is, [Ve, 1, Fs, 2, Fs, 3, Bs, 7, Bs, 8, zs, 4, Ds, 5, Ds, 6, Ds, 9, Es, 11, Es, 10, Hs, [Me, 1, Js]]];
    var Rt = function(a) {
        _.R.call(this, a)
    };
    _.P(Rt, _.R);
    Rt.prototype.na = function() {
        return Ym(this, 1)
    };
    Rt.prototype.I = function() {
        return js(this, St)
    };
    var St = [2, 3];
    var Ut = function(a) {
        _.R.call(this, a, -1, Tt)
    };
    _.P(Ut, _.R);
    Ut.prototype.Pb = function() {
        return Uc(this, Rt, 1)
    };
    var Tt = [1];
    var Vt = function(a) {
        _.R.call(this, a)
    };
    _.P(Vt, _.R);
    var Wt = function(a) {
        _.R.call(this, a)
    };
    _.P(Wt, _.R);
    Wt.prototype.Qb = function() {
        return hf(this, 1)
    };
    Wt.prototype.getVersion = function() {
        return z(this, 5)
    };
    var Xt = function(a) {
        _.R.call(this, a)
    };
    _.P(Xt, _.R);
    var Yt = function(a) {
        _.R.call(this, a)
    };
    _.P(Yt, _.R);
    var Ro = function(a) {
        _.R.call(this, a, -1, Zt)
    };
    _.P(Ro, _.R);
    Ro.prototype.getEscapedQemQueryId = function() {
        return Ym(this, 4)
    };
    var Zt = [2];
    var Qo = function(a) {
        _.R.call(this, a)
    };
    _.P(Qo, _.R);
    var So = function(a) {
        _.R.call(this, a)
    };
    _.P(So, _.R);
    var Uo = function(a) {
        _.R.call(this, a)
    };
    _.P(Uo, _.R);
    Uo.prototype.getEscapedQemQueryId = function() {
        return Ym(this, 2)
    };
    var Vo = function(a) {
        _.R.call(this, a)
    };
    _.P(Vo, _.R);
    var au = function(a) {
        _.R.call(this, a, -1, $t)
    };
    _.P(au, _.R);
    au.prototype.getWidth = function() {
        return fe(this, 9)
    };
    au.prototype.getHeight = function() {
        return fe(this, 10)
    };
    var $t = [3, 7, 11];
    var cu = function(a) {
        _.R.call(this, a, -1, bu)
    };
    _.P(cu, _.R);
    cu.prototype.getHeight = function() {
        return z(this, 6)
    };
    cu.prototype.getWidth = function() {
        return z(this, 7)
    };
    cu.prototype.getEscapedQemQueryId = function() {
        return z(this, 34)
    };
    var du = function(a) {
        _.R.call(this, a)
    };
    _.P(du, _.R);
    du.prototype.getHtml = function() {
        return Vi(this, 1)
    };
    var bu = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63],
        eu = [4, 41],
        fu = [39, 48];
    var $n = function(a) {
        _.R.call(this, a)
    };
    _.P($n, _.R);
    var hu = function(a) {
        _.R.call(this, a, -1, gu)
    };
    _.P(hu, _.R);
    var gu = [1, 2];
    var iu = window;
    var Zp = function(a) {
        _.R.call(this, a, -1, ju)
    };
    _.P(Zp, _.R);
    var ju = [15];
    var Yp = function(a) {
        _.R.call(this, a)
    };
    _.P(Yp, _.R);
    Yp.prototype.getCorrelator = function() {
        return Yi(this, 1)
    };
    Yp.prototype.setCorrelator = function(a) {
        return _.Jc(this, 1, a, 0)
    };
    var Xp = function(a) {
        _.R.call(this, a)
    };
    _.P(Xp, _.R);
    var ku = _.Er || Hr;
    var lu = /^[\w+/_-]+[=]{0,2}$/,
        mu = function() {
            var a = _.t.document;
            return a.querySelector ? (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && lu.test(a) ? a : "" : ""
        };
    _.Gh = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.Gh.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.Gh.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.Gh.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.Jh = function(a, b) {
        this.width = a;
        this.height = b
    };
    q = _.Jh.prototype;
    q.aspectRatio = function() {
        return this.width / this.height
    };
    q.isEmpty = function() {
        return !(this.width * this.height)
    };
    q.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    q.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    q.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var nu, ou, pu, ru;
    nu = function(a) {
        return a = cg(a)
    };
    ou = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ qe()).toString(36)
    };
    pu = 2147483648 * Math.random() | 0;
    _.qu = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    ru = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var uu, wu, vu, zu, Bu, Ed, Hd, su;
    uu = function(a) {
        return a ? new su(_.tu(a)) : Wq || (Wq = new su)
    };
    wu = function(a, b) {
        xa(b, function(c, d) {
            c && "object" == typeof c && c.Ra && (c = c.La());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : vu.hasOwnProperty(d) ? a.setAttribute(vu[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    vu = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.yu = function(a) {
        a = a.document;
        a = _.xu(a) ? a.documentElement : a.body;
        return new _.Jh(a.clientWidth, a.clientHeight)
    };
    zu = function(a) {
        return a.scrollingElement ? a.scrollingElement : !Hr && _.xu(a) ? a.documentElement : a.body || a.documentElement
    };
    _.Au = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    Bu = function(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!qa(f) || _.ja(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.ja(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                _.er(g ? fa(f) : f, d)
            }
        }
    };
    _.xu = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.Cu = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.Du = function(a) {
        var b;
        if (ku && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.ja(b) && 1 == b.nodeType ? b : null
    };
    Ed = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };
    _.tu = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    Hd = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.Au(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    su = function(a) {
        this.j = a || _.t.document || document
    };
    q = su.prototype;
    q.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    q.createElement = function(a) {
        var b = this.j;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    q.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };
    q.append = function(a, b) {
        Bu(_.tu(a), a, arguments)
    };
    q.ne = _.Cu;
    var Eu = function() {
        return Fa("iPad") || Fa("Android") && !Fa("Mobile") || Fa("Silk")
    };
    var Gu, gk, Hu, Ij;
    _.Fu = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    Gu = function(a) {
        return a ? decodeURI(a) : a
    };
    gk = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) gk(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    Hu = /#|$/;
    Ij = function(a, b) {
        var c = a.search(Hu);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };
    var Gd, Fd, Cf, Iu, Df, Gj, Sh, he, cj, zh, ge, ie, gq, Ku, Lu, Th, Mu, Nu, Ou, Pu, Qu, Ru, Su, Tu, Uu, ri, ti, si, Vu, Wu, Yu, Zu, $u, av, bv, ye, cv, Om, Ck, dv, mk, ev;
    Gd = function(a) {
        try {
            return !!a && null != a.location.href && Cr(a, "foo")
        } catch (b) {
            return !1
        }
    };
    Fd = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.t : d;
        c = (void 0 === c ? 0 : c) ? Iu(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !Gd(c) || !a(c));) c = Iu(c)
    };
    Cf = function() {
        var a = window;
        Fd(function(b) {
            a = b;
            return !1
        });
        return a
    };
    Iu = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    Df = function(a) {
        return Gd(a.top) ? a.top : null
    };
    Gj = function(a, b) {
        var c = _.Cd("SCRIPT", a);
        Va(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    Sh = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    he = function() {
        if (!y.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            y.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.jk = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    _.Ju = function(a) {
        var b = [];
        _.jk(a, function(c) {
            b.push(c)
        });
        return b
    };
    cj = function(a, b) {
        return Aa(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    zh = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    ge = Rh(function() {
        return _.Ig(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Ku) || 1E-4 > Math.random()
    });
    ie = function(a, b) {
        try {
            if (a) return a.setItem("google_experiment_mod", b), b
        } catch (c) {}
        return null
    };
    gq = Rh(function() {
        return Ku("MSIE")
    });
    Ku = function(a) {
        return -1 != Ea().indexOf(a)
    };
    Lu = /^([0-9.]+)px$/;
    Th = function(a) {
        return (a = Lu.exec(a)) ? +a[1] : null
    };
    Mu = function() {
        var a = window;
        try {
            for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !0;
                case "http:":
                    return !1
            }
        } catch (c) {}
        return !0
    };
    Nu = function(a) {
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    Ou = {
        dg: "allow-forms",
        eg: "allow-modals",
        fg: "allow-orientation-lock",
        gg: "allow-pointer-lock",
        hg: "allow-popups",
        ig: "allow-popups-to-escape-sandbox",
        jg: "allow-presentation",
        kg: "allow-same-origin",
        lg: "allow-scripts",
        mg: "allow-top-navigation",
        ng: "allow-top-navigation-by-user-activation"
    };
    Pu = Rh(function() {
        return _.Ju(Ou)
    });
    Qu = function(a) {
        var b = Pu();
        return a.length ? _.qg(b, function(c) {
            return !(0 <= _.da(a, c))
        }) : b
    };
    Ru = function() {
        var a = _.Cd("IFRAME"),
            b = {};
        _.er(Pu(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    Su = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && -1 != a.indexOf("[native code]")
    };
    Tu = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = Iu(a))) break
        }
        return null
    };
    Uu = function(a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document,
                c = b.head,
                d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.Cd("IFRAME");
                f.name = "google_ads_top_frame";
                f.id = "google_ads_top_frame";
                f.style.display = "none";
                f.style.position = "fixed";
                f.style.left = "-999px";
                f.style.top = "-999px";
                f.style.width = "0px";
                f.style.height = "0px";
                e.appendChild(f);
                return f
            }
        } catch (g) {}
        return null
    };
    _.Ml = Rh(function() {
        return !Eu() && (Fa("iPod") || Fa("iPhone") || Fa("Android") || Fa("IEMobile")) ? 2 : Eu() ? 1 : 0
    });
    ri = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.bi = function(a, b) {
        _.jk(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    ti = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    si = function(a, b) {
        for (var c = 100; a && c--;) {
            var d = Sh(a, window);
            if (d) {
                if (b(d)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    Vu = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.Mc(a, parseFloat)
    };
    Wu = {};
    _.Xu = (Wu["http://googleads.g.doubleclick.net"] = !0, Wu["http://pagead2.googlesyndication.com"] = !0, Wu["https://googleads.g.doubleclick.net"] = !0, Wu["https://pagead2.googlesyndication.com"] = !0, Wu);
    Yu = function(a) {
        _.t.console && _.t.console.warn && _.t.console.warn(a)
    };
    Zu = [];
    $u = function() {
        var a = Zu;
        Zu = [];
        a = _.B(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    av = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    bv = function() {
        return Math.floor(Math.random() * Math.pow(2, 52))
    };
    ye = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: bv(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    cv = function(a, b) {
        Id(_.Au(_.tu(a)), a, b)
    };
    Om = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (Zu.push(b), 1 == Zu.length && (y.Promise ? y.Promise.resolve().then($u) : window.setImmediate ? setImmediate($u) : setTimeout($u, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    Ck = function(a) {
        return 0 === a || "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    dv = function(a) {
        return new y.Promise(function(b) {
            setTimeout(function() {
                return void b(2)
            }, a)
        })
    };
    mk = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    _.Cd = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    ev = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, Gd(a) && (b = a);
        return b
    };
    _.fv = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.fv.prototype.getWidth = function() {
        return this.right - this.left
    };
    _.fv.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    _.gv = function(a) {
        return new _.fv(a.top, a.right, a.bottom, a.left)
    };
    _.fv.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.fv.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.fv.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var hv = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        iv = function(a) {
            return new _.fv(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        jv = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new hv(c, e, d - c, a - e)
            }
            return null
        };
    hv.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    hv.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    hv.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var kv = function(a) {
        return (a = void 0 === a ? Jd() : a) ? Gd(a.master) ? a.master : null : null
    };
    var nv, Eg, Ih, pv, qv, Fh;
    _.mv = function(a, b, c) {
        if ("string" === typeof b)(b = _.lv(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.lv(c, d);
                f && (c.style[f] = e)
            }
    };
    nv = {};
    _.lv = function(a, b) {
        var c = nv[b];
        if (!c) {
            var d = _.qu(b);
            c = d;
            void 0 === a.style[d] && (d = (Hr ? "Webkit" : Gr ? "Moz" : _.Er ? "ms" : null) + ru(d), void 0 !== a.style[d] && (c = d));
            nv[b] = c
        }
        return c
    };
    _.ov = function(a, b) {
        var c = _.tu(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    Eg = function(a, b) {
        return _.ov(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    Ih = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    };
    pv = function(a) {
        if (_.Er && !(8 <= Number(Qr))) return a.offsetParent;
        var b = _.tu(a),
            c = Eg(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = Eg(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    qv = function(a) {
        var b = _.tu(a),
            c = new _.Gh(0, 0);
        var d = b ? _.tu(b) : document;
        d = !_.Er || 9 <= Number(Qr) || _.xu(uu(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Ih(a);
        d = uu(b).j;
        b = zu(d);
        d = d.parentWindow || d.defaultView;
        b = _.Er && d.pageYOffset != b.scrollTop ? new _.Gh(b.scrollLeft, b.scrollTop) : new _.Gh(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    Fh = function(a, b) {
        var c = new _.Gh(0, 0),
            d = _.Au(_.tu(a));
        if (!Cr(d, "parent")) return c;
        do {
            var e = d == b ? qv(a) : _.rv(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.rv = function(a) {
        a = Ih(a);
        return new _.Gh(a.left, a.top)
    };
    _.sv = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Fg = function(a, b) {
        if ("none" != Eg(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.Gg = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Hr && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Ih(a), new _.Jh(a.right - a.left, a.bottom - a.top)) : new _.Jh(b, c)
    };
    var ni = function(a) {
        a = kv(Jd(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    var tv = function(a, b) {
        if (y.globalThis.fetch) y.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var uv = function(a) {
        _.R.call(this, a)
    };
    _.P(uv, _.R);
    var vv = function(a) {
        _.R.call(this, a)
    };
    _.P(vv, _.R);
    var Yg = function(a) {
        _.R.call(this, a)
    };
    _.P(Yg, _.R);
    var Tg = function(a) {
        _.R.call(this, a)
    };
    _.P(Tg, _.R);
    var Qg = function(a) {
        _.R.call(this, a)
    };
    _.P(Qg, _.R);
    var wv = function(a) {
        _.R.call(this, a)
    };
    _.P(wv, _.R);
    var Pg = function(a) {
        _.R.call(this, a, -1, xv)
    };
    _.P(Pg, _.R);
    Pg.prototype.getTagSessionCorrelator = function() {
        return Yi(this, 2)
    };
    var xv = [4],
        Vg = [6, 7, 8, 9, 11];
    var kh = function(a) {
        _.R.call(this, a, -1, yv)
    };
    _.P(kh, _.R);
    var yv = [3];
    var hh = function(a) {
        _.R.call(this, a, -1, zv)
    };
    _.P(hh, _.R);
    var zv = [4];
    var gh = function(a) {
        _.R.call(this, a, -1, Av)
    };
    _.P(gh, _.R);
    gh.prototype.getTagSessionCorrelator = function() {
        return Yi(this, 1)
    };
    var Av = [2];
    var fh = function(a) {
        _.R.call(this, a)
    };
    _.P(fh, _.R);
    var nh = [4];
    _.Bv = function() {
        this.I = this.I;
        this.va = this.va
    };
    _.Bv.prototype.I = !1;
    _.Bv.prototype.Ba = function() {
        this.I || (this.I = !0, this.D())
    };
    _.Cm = function(a, b) {
        _.Jm(a, _.Vq(Qd, b))
    };
    _.Jm = function(a, b) {
        a.I ? b() : (a.va || (a.va = []), a.va.push(b))
    };
    _.Bv.prototype.D = function() {
        if (this.va)
            for (; this.va.length;) this.va.shift()()
    };
    var Cv = function(a, b, c, d, e) {
            this.l = a;
            this.C = b;
            this.H = c;
            this.D = d;
            this.I = e;
            this.j = [];
            this.m = null
        },
        Dv = function(a) {
            null !== a.m && (clearTimeout(a.m), a.m = null);
            if (a.j.length) {
                var b = Md(a.j);
                a.C(a.l + "?e=1", b);
                a.j = []
            }
        };
    Cv.prototype.ge = function() {
        var a = ab.apply(0, arguments),
            b = this;
        this.I && 65536 <= Md(this.j.concat(a)).length && Dv(this);
        this.j.push.apply(this.j, _.Nd(a));
        this.j.length >= this.D && Dv(this);
        this.j.length && null === this.m && (this.m = setTimeout(function() {
            Dv(b)
        }, this.H))
    };
    var kq = function(a, b, c) {
        Cv.call(this, "https://pagead2.googlesyndication.com/pagead/ping", tv, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b, (void 0 === c ? !1 : c) && !!y.globalThis.fetch)
    };
    _.P(kq, Cv);
    var U = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? !1 : b
        },
        Ev = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? 0 : b
        },
        Fv = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? "" : b
        },
        Gv = function(a) {
            var b = void 0 === b ? [] : b;
            this.j = a;
            this.defaultValue = b
        };
    var Hv, Iv, Jv, Kv, oi, Lv, ml, Mv, Nv, Qk, Ov, Pv, Qv, Rv, Sv, Kk, Tv, Uv, Vv, Wv, Xv, Io, Yv, Zv, $v, aw, bw, cw, Xn, dw, ew, fw, gw, hw, iw, jw, kw, rp, lm, lw, mw, nw, ow, pw, xj, Hl, qw, rw, sw, ah, tw, uw, vw, ww, xw, yw, zw, Aw, Lm, Bw, Cw, Dw, fk, ck, En, Fn, Ew, Fw, Gw, Hw, Iw, Jw, Kw, Lw, jq, Mw, Nw, Ow, Pw, Qw, Rw, Sw, Tw, Uw, Vw, Ww, Xw, Yw, Zw, $w, Ef, ax, bx, Ce, cx, dx, bf, Pe, xe, ef, Ue, ex, sf, aq, bq, fx, xl, cq, $p, hx, ix, jx, kx, lx, mx, Pl, ox, Ni, px;
    Hv = new U(1122, !0);
    Iv = new U(486713001);
    Jv = new Fv(3);
    Kv = new Gv(481);
    oi = new Ev(7, .1);
    Lv = new U(212);
    ml = new Ev(474069761);
    Mv = new Ev(455645877);
    Nv = new Ev(462420536);
    Qk = new U(476475256);
    Ov = new Ev(448338836, .01);
    Pv = new Ev(427198696);
    Qv = new Ev(438663674);
    Rv = new U(23);
    Sv = new U(369430);
    Kk = new U(485860314);
    Tv = new U(477812799);
    Uv = new Ev(408380992, .01);
    Vv = new Ev(377289019, 1E4);
    Wv = new Ev(488);
    Xv = new Ev(529, 20);
    Io = new U(45385570);
    Yv = new Fv(10);
    Zv = new U(489217043);
    $v = new Ev(428094087);
    aw = new U(488999963);
    bw = new U(485091276);
    cw = new U(492198798);
    Xn = new Ev(447000223, .01);
    dw = new Ev(434620574);
    ew = new U(474159377);
    fw = new U(360245597, !0);
    gw = new U(462165369);
    hw = new Ev(461613513);
    iw = new Ev(494, 1E4);
    jw = new Ev(471890184, .01);
    kw = new Ev(517, .01);
    rp = new U(485209195);
    lm = new U(488463535);
    lw = new U(471855283);
    mw = new U(484113279);
    nw = new U(220);
    ow = new U(200);
    pw = new U(485597276);
    xj = new U(488720814);
    Hl = new Ev(492, .01);
    qw = new Ev(363650251);
    rw = new Ev(474872234);
    sw = new U(83);
    ah = new U(85);
    tw = new U(437061931);
    uw = new Gv(466086960);
    vw = new Ev(398776877, 6E4);
    ww = new U(437292966);
    xw = new Ev(374201269, 6E4);
    yw = new Ev(371364213, 6E4);
    zw = new Ev(376149757, .0025);
    Aw = new U(453275889);
    Lm = new U(476447134, !0);
    Bw = new U(422917270);
    Cw = new U(377936516, !0);
    Dw = new Ev(24);
    fk = new Gv(1);
    ck = new Fv(2, "1-0-40");
    En = new U(427203966);
    Fn = new U(442109935);
    Ew = new U(486708758);
    Fw = new U(441529989);
    Gw = new U(428624799);
    Hw = new U(437308144);
    Iw = new Gv(489);
    Jw = new U(392065905);
    Kw = new Ev(360245595, 500);
    Lw = new U(424117738);
    jq = new Ev(397316938, 1E3);
    Mw = new U(444587044, !0);
    Nw = new U(440148284, !0);
    Ow = new U(444587045);
    Pw = new U(440148282, !0);
    Qw = new U(487608180);
    Rw = new U(399705355);
    Sw = new U(489509230);
    Tw = new U(480068022);
    Uw = new U(472976668);
    Vw = new U(486663050);
    Ww = new U(501);
    Xw = new U(484598396);
    Yw = new Gv(472572701);
    Zw = new U(439828594);
    $w = new U(483962503);
    Ef = new U(1930);
    ax = new U(453);
    bx = new U(454);
    Ce = new Ev(360261971);
    cx = new Ev(1921, 72);
    dx = new Ev(1920, 12);
    bf = new Ev(426169222, 1E3);
    Pe = new Ev(1917, 300);
    xe = new Ev(1916, .001);
    ef = new Gv(471270390);
    Ue = new U(478498873);
    ex = new U(476437529);
    sf = new U(478009624);
    aq = new U(77);
    bq = new U(78);
    fx = new U(1961);
    xl = new U(309);
    cq = new U(80);
    $p = new U(76);
    _.gx = new U(1947, !0);
    hx = new U(84);
    ix = new U(1958);
    jx = new U(1973);
    kx = new U(188);
    lx = new U(1971, !0);
    mx = new U(1974);
    _.nx = new Ev(1972);
    Pl = new Ev(1158);
    ox = new U(471682731);
    Ni = new U(477209535);
    px = new U(485990406);
    var qx = function(a, b, c, d, e, f) {
            try {
                var g = a.j,
                    h = _.Cd("SCRIPT", g);
                h.async = !0;
                Va(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", function() {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", function() {
                    0 < c ? qx(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (k) {
                f()
            }
        },
        rx = function(a, b, c, d) {
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            qx(uu(a), b, 0, !1, c, d)
        };
    ya({
        Ig: 0,
        Hg: 1,
        Eg: 2,
        zg: 3,
        Fg: 4,
        Ag: 5,
        Gg: 6,
        Cg: 7,
        Dg: 8,
        yg: 9,
        Bg: 10
    }).map(function(a) {
        return Number(a)
    });
    ya({
        Kg: 0,
        Lg: 1,
        Jg: 2
    }).map(function(a) {
        return Number(a)
    });
    var sx = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.Cd("IFRAME", b);
                        d.style.display = "none";
                        d.style.width = "0px";
                        d.style.height = "0px";
                        d.style.border = "none";
                        d.style.zIndex = "-1000";
                        d.style.left = "-1000px";
                        d.style.top = "-1000px";
                        d.name = "googlefcPresent";
                        b.body.appendChild(d)
                    } else a.setTimeout(c, 5)
            };
        c()
    };
    var ke, ro;
    _.tx = function(a, b, c, d) {
        Sd(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d)
    };
    ke = function(a, b) {
        var c = void 0 === c ? !1 : c;
        var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        _.jk(a, function(e, f) {
            e && (d += "&" + f + "=" + encodeURIComponent(e))
        });
        ro(d, c)
    };
    ro = function(a, b) {
        var c = window;
        b = void 0 === b ? !1 : b;
        c.fetch ? c.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : _.tx(c, a, void 0, b)
    };
    var ux = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        vx = function(a, b, c) {
            b = void 0 === b ? 500 : b;
            c = void 0 === c ? !1 : c;
            _.Bv.call(this);
            this.m = a;
            this.j = null;
            this.l = {};
            this.B = 0;
            this.o = b;
            this.H = c;
            this.C = null
        };
    _.P(vx, _.Bv);
    vx.prototype.D = function() {
        this.l = {};
        this.C && (_.Rd(this.m, "message", this.C), delete this.C);
        delete this.l;
        delete this.m;
        delete this.j;
        _.Bv.prototype.D.call(this)
    };
    var xx = function(a) {
        return "function" === typeof a.m.__tcfapi || null != wx(a)
    };
    vx.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.H
            },
            d = _.br(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.o && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.o));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = ux(c), c.internalBlockOnErrors = b.H, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            yx(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    vx.prototype.removeEventListener = function(a) {
        a && a.listenerId && yx(this, "removeEventListener", null, a.listenerId)
    };
    var zx = function(a, b) {
            var c = void 0 === c ? "755" : c;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var d = a.publisher.restrictions[b];
                    if (void 0 !== d) {
                        d = d[void 0 === c ? "755" : c];
                        break a
                    }
                }
                d = void 0
            }
            if (0 === d) return !1;
            a.purpose && a.vendor ? (d = a.vendor.consents, (c = !(!d || !d[void 0 === c ? "755" : c])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
            return b
        },
        yx = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) a = a.m.__tcfapi, a(b, 2, c, d);
            else if (wx(a)) {
                Ax(a);
                var e = ++a.B;
                a.l[e] = c;
                a.j && (c = {}, a.j.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        wx = function(a) {
            if (a.j) return a.j;
            a.j = Tu(a.m, "__tcfapiLocator");
            return a.j
        },
        Ax = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.l[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.db(a.m, "message", a.C))
        },
        Bx = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = ux(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (ke({
                e: String(a.internalErrorState)
            }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        Cx = function(a, b) {
            return !1 === a.gdprApplies ? !0 : b.every(function(c) {
                return zx(a, c)
            })
        };
    var Dx = function(a, b, c) {
            this.j = a;
            this.D = b;
            this.m = void 0 === c ? function() {} : c
        },
        Ex = function(a, b, c) {
            return new Dx(a, b, c)
        };
    Dx.prototype.start = function() {
        if (this.j === this.j.top) try {
            sx(this.j), Fx(this)
        } catch (a) {}
    };
    var Fx = function(a) {
        var b = mb(Zq("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.D,
            ers: 3
        });
        rx(a.j, b, function() {
            a.m(!0)
        }, function() {
            a.m(!1)
        })
    };
    var Gx = y.Promise;
    var Hx = function(a) {
        this.D = a
    };
    Hx.prototype.m = function(a, b, c) {
        this.D.then(function(d) {
            d.m(a, b, c)
        })
    };
    Hx.prototype.j = function(a, b) {
        return this.D.then(function(c) {
            return c.j(a, b)
        })
    };
    var Ix = function(a) {
        this.data = a
    };
    var Jx = function(a) {
        this.D = a
    };
    Jx.prototype.m = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        Kx(d.port1, b);
        this.D.postMessage(a, [d.port2].concat(c))
    };
    Jx.prototype.j = function(a, b) {
        var c = this;
        return new Gx(function(d) {
            c.m(a, d, b)
        })
    };
    var Lx = function(a, b) {
            Kx(a, b);
            return new Jx(a)
        },
        Kx = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new Ix(c.data, Lx(c.ports[0])))
            })
        };
    var Li = function(a) {
            var b = a.Bc,
                c = void 0 === a.Ka ? "ZNWN1d" : a.Ka,
                d = void 0 === a.onMessage ? void 0 : a.onMessage,
                e = void 0 === a.Gc ? void 0 : a.Gc;
            return Mx({
                destination: a.destination,
                Md: function() {
                    return b.contentWindow
                },
                pf: Nx(a.origin),
                Ka: c,
                onMessage: d,
                Gc: e
            })
        },
        Mx = function(a) {
            var b = a.destination,
                c = a.Md,
                d = a.pf,
                e = void 0 === a.ud ? void 0 : a.ud,
                f = a.Ka,
                g = void 0 === a.onMessage ? void 0 : a.onMessage,
                h = void 0 === a.Gc ? void 0 : a.Gc,
                k = Object.create(null);
            d.forEach(function(l) {
                k[l] = !0
            });
            return new Hx(new Gx(function(l, n) {
                var m = function(p) {
                    if (p.source && p.source === c())
                        if (!0 !== k[p.origin]) {
                            b.removeEventListener("message", m, !1);
                            var r = d.join(", ");
                            n(Error('Origin mismatch while establishing channel "' + f + '". Expected ' + (1 === d.length ? r : "one of [" + r + "]") + ", but received " + p.origin + "."))
                        } else(p.data.n || p.data) === f && (b.removeEventListener("message", m, !1), e && p.data.t !== e ? n(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(Lx(p.ports[0], g)), h && h(p)))
                };
                b.addEventListener("message", m, !1)
            }))
        },
        Nx = function(a) {
            a = "string" === typeof a ? [a] : a;
            var b = Object.create(null);
            a.forEach(function(c) {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var ih = (0, D.fd)(function(a) {
        return "string" === typeof a
    }, "string");
    var Ox = navigator,
        Px = function(a) {
            var b = 1,
                c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        Qx = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return Px(a.toLowerCase())
        },
        Rx = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        Sx = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        Tx = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var Dh = function(a) {
            return !!a && a.top == a
        },
        Ux = function(a, b, c) {
            b = b || a.google_ad_width;
            c = c || a.google_ad_height;
            if (Dh(a)) return !1;
            var d = a.document,
                e = d.documentElement;
            if (b && c) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
                if (g > 2 * c || f > 2 * b) return !1
            }
            return !0
        };
    var Vx = function(a) {
        a = void 0 === a ? window : a;
        return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
    };
    var hi = function() {
        this.j = [];
        this.m = -1
    };
    hi.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.w(Number, "isInteger").call(Number, a) && this.j[a] !== b && (this.j[a] = b, this.m = -1)
    };
    hi.prototype.get = function(a) {
        return !!this.j[a]
    };
    var ji = function(a) {
        -1 === a.m && (a.m = fr(a.j, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }));
        return a.m
    };
    var Yd = function(a) {
        _.R.call(this, a, -1, Wx)
    };
    _.P(Yd, _.R);
    var Zd = function(a, b) {
            af(a, 1, de, b)
        },
        de = function(a) {
            _.R.call(this, a)
        };
    _.P(de, _.R);
    var ae = function(a) {
            var b = new de;
            return _.Zg(b, 1, a)
        },
        $d = function(a, b) {
            return _.Jc(a, 2, b, 0)
        },
        Wx = [1];
    var Xx = function(a, b, c, d) {
        _.Bv.call(this);
        this.U = b;
        this.F = c;
        this.B = d;
        this.O = new y.Map;
        this.K = 0;
        this.o = new y.Map;
        this.H = new y.Map;
        this.l = new y.Map;
        this.C = void 0;
        this.m = a
    };
    _.P(Xx, _.Bv);
    Xx.prototype.D = function() {
        delete this.j;
        this.O.clear();
        this.o.clear();
        this.H.clear();
        this.l.clear();
        this.C && (_.Rd((0, D.J)(this.m), "message", this.C), delete this.C);
        delete this.m;
        delete this.B;
        _.Bv.prototype.D.call(this)
    };
    var Yx = function(a) {
            if (a.j) return a.j;
            a.F && a.F((0, D.J)(a.m)) ? a.j = a.m : a.j = Tu((0, D.J)(a.m), a.U);
            var b;
            return null != (b = a.j) ? b : null
        },
        $x = function(a, b) {
            if (Yx(a))
                if (a.j === a.m) {
                    var c = a.O.get("getDataWithCallback");
                    c && c((0, D.J)(a.j), b)
                } else if ((c = a.o.get("getDataWithCallback")) && c.Qd) {
                Zx(a);
                var d = ++a.K;
                a.H.set(d, c.nf);
                a.l.set(d, c.hf(b));
                a.j.postMessage(c.Qd(b, d), "*")
            }
        },
        Zx = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = a.B ? a.B(b) : void 0;
                    if (c) {
                        var d = c.Xd,
                            e = a.H.get(d);
                        if (e) {
                            a.H.delete(d);
                            var f = a.l.get(c.Xd);
                            a.l.delete(d);
                            e(f, c.payload)
                        }
                    }
                } catch (g) {}
            }, _.db((0, D.J)(a.m), "message", a.C))
        };
    var ay = function(a, b) {
            (0, D.J)(a.__uspapi)("getUSPData", 1, function(c, d) {
                b.yd({
                    Bd: null != c ? c : void 0,
                    Id: d ? void 0 : 2
                })
            })
        },
        by = {
            hf: function(a) {
                return a.yd
            },
            Qd: function(a, b) {
                a = {};
                return a.__uspapiCall = {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }, a
            },
            nf: function(a, b) {
                b = b.__uspapiReturn;
                var c;
                a({
                    Bd: null != (c = b.returnValue) ? c : void 0,
                    Id: b.success ? void 0 : 2
                })
            }
        },
        cy = function(a) {
            _.Bv.call(this);
            this.caller = new Xx(a, "__uspapiLocator", function(b) {
                return "function" === typeof b.__uspapi
            }, le);
            this.caller.O.set("getDataWithCallback", ay);
            this.caller.o.set("getDataWithCallback", by)
        };
    _.P(cy, _.Bv);
    cy.prototype.D = function() {
        this.caller.Ba();
        _.Bv.prototype.D.call(this)
    };
    cy.prototype.l = function() {
        return !!Yx(this.caller)
    };
    cy.prototype.o = function(a) {
        var b = {};
        if (this.l()) {
            var c = _.br(function() {
                a(b)
            });
            $x(this.caller, {
                yd: function(d) {
                    d.Id || (b = (0, D.J)(d.Bd));
                    c()
                }
            });
            setTimeout(c, 500)
        } else a(b)
    };
    var oe = function(a) {
            this.j = a || {
                cookie: ""
            }
        },
        fy = function() {
            var a = dy;
            if (!_.t.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                jd: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            ey(a, "TESTCOOKIESENABLED");
            return !0
        };
    oe.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.yh;
            d = c.Cf || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.jd
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    oe.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Sp(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    var ey = function(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            jd: 0,
            path: c,
            domain: d
        })
    };
    oe.prototype.isEmpty = function() {
        return !this.j.cookie
    };
    oe.prototype.clear = function() {
        for (var a = (this.j.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Sp(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) ey(this, b[a])
    };
    var dy = new oe("undefined" == typeof document ? null : document);
    var gy = null,
        hy = function() {
            if (null === gy) {
                gy = "";
                try {
                    var a = "";
                    try {
                        a = _.t.top.location.hash
                    } catch (c) {
                        a = _.t.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        gy = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return gy
        };
    var iy = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e;
        this.taskId = void 0
    };
    var ch = _.t.performance,
        jy = !!(ch && ch.mark && ch.measure && ch.clearMarks),
        dh = Rh(function() {
            var a;
            if (a = jy) a = hy(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        }),
        ky = function(a, b) {
            this.m = [];
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.m = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.j = dh() || (null != c ? c : Math.random() < a)
        },
        ly = function(a, b, c, d, e, f) {
            a.j && (b = new iy(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.m.length || a.m.push(b))
        };
    ky.prototype.start = function(a, b) {
        if (!this.j) return null;
        a = new iy(a, b, _.se() || _.re());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        ch && dh() && ch.mark(b);
        return a
    };
    ky.prototype.end = function(a) {
        if (this.j && "number" === typeof a.value) {
            a.duration = (_.se() || _.re()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            ch && dh() && ch.mark(b);
            !this.j || 2048 < this.m.length || this.m.push(a)
        }
    };
    var Fo = function(a, b, c) {
        var d = _.se();
        d && ly(a, b, 9, d, 0, c)
    };
    var Mk = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.w(Object, "setPrototypeOf").call(Object, this, Mk.prototype)
    };
    _.P(Mk, Error);
    Mk.prototype.name = "PublisherInputError";
    var my = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.w(Object, "setPrototypeOf").call(Object, this, my.prototype)
    };
    _.P(my, Error);
    my.prototype.name = "ServerError";
    var ny = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.w(Object, "setPrototypeOf").call(Object, this, ny.prototype)
    };
    _.P(ny, Error);
    ny.prototype.name = "NetworkError";
    var oy;
    oy = {
        Og: 0,
        me: 3,
        oe: 4,
        Pg: 5
    };
    var py = oy.me,
        qy = oy.oe;
    _.ze = function(a) {
        var b = "hb";
        if (a.hb && a.hasOwnProperty(b)) return a.hb;
        b = new a;
        return a.hb = b
    };
    var ry = function(a) {
            this.methodName = a
        },
        sy = new ry(1),
        ty = new ry(16),
        uy = new ry(15),
        vy = new ry(2),
        wy = new ry(3),
        xy = new ry(5),
        yy = new ry(6),
        zy = new ry(7),
        Ay = new ry(8),
        By = new ry(14),
        Cy = function(a, b, c) {
            return b[a.methodName] || c || function() {}
        };
    var Ae = function() {
            this.m = function() {};
            this.I = function() {};
            this.D = function() {
                return []
            };
            this.j = function() {
                return []
            }
        },
        Dy = function(a, b) {
            a.m = Cy(sy, b, function() {});
            a.D = function(c) {
                return Cy(vy, b, function() {
                    return []
                })(c, 2)
            };
            a.j = function() {
                return Cy(wy, b, function() {
                    return []
                })(2)
            };
            a.I = function(c) {
                Cy(ty, b, function() {})(c, 2)
            }
        },
        hq = function(a) {
            _.ze(Ae).I(a)
        },
        vk = function(a) {
            return _.ze(Ae).D(a)
        };
    var Ey, bk, df;
    Ey = function() {
        var a = {};
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.D = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.I = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.C = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function() {}
    };
    _.G = function(a) {
        return _.ze(Ey).m(a.j, a.defaultValue)
    };
    _.we = function(a) {
        return _.ze(Ey).D(a.j, a.defaultValue)
    };
    bk = function(a) {
        return _.ze(Ey).I(a.j, a.defaultValue)
    };
    df = function(a) {
        return _.ze(Ey).C(a.j, a.defaultValue)
    };
    var Fy = function() {};
    Fy.j = function() {
        throw Error("Must be overridden");
    };
    var ve = function() {
        this.j = 0
    };
    _.P(ve, Fy);
    ve.hb = void 0;
    ve.j = function() {
        return ve.hb ? ve.hb : ve.hb = new ve
    };
    var Gy = function() {
            this.cache = {}
        },
        Ge = function() {
            Hy || (Iy = _.we(dx), Jy = _.we(cx), Hy = new Gy);
            return Hy
        },
        cf = function(a) {
            var b = z(a, 3);
            if (!b) return 3;
            if (void 0 === z(a, 2)) return 4;
            a = Date.now();
            return a > b + 36E5 * Jy ? 2 : a > b + 36E5 * Iy ? 1 : 0
        };
    Gy.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            qb: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            Be(6, a, null == (d = g) ? void 0 : d.message);
            return {
                qb: null,
                success: !1
            }
        }
        if (!c) return {
            qb: null,
            success: !0
        };
        try {
            var e = Xd(Ve, c);
            this.cache[a] = e;
            return {
                qb: e,
                success: !0
            }
        } catch (g) {
            var f;
            Be(5, a, null == (f = g) ? void 0 : f.message);
            return {
                qb: null,
                success: !1
            }
        }
    };
    Gy.prototype.set = function(a, b) {
        var c = (0, D.J)(a.na()),
            d = "_GESPSK-" + c;
        _.A(a, 3, Date.now());
        try {
            b.setItem(d, be(a))
        } catch (f) {
            var e;
            Be(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    var Hy = null,
        Iy = 24,
        Jy = 72;
    var He = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    var Ky = function(a) {
        _.Bv.call(this);
        this.l = a;
        this.j = [];
        this.m = [];
        this.C = []
    };
    _.P(Ky, _.Bv);
    var My = function(a, b, c) {
        a.m.push({
            jc: void 0 === c ? !1 : c,
            vb: b
        });
        _.G(lw) && Ly(b, a.l)
    };
    Ky.prototype.D = function() {
        this.j.length = 0;
        this.C.length = 0;
        this.m.length = 0;
        _.Bv.prototype.D.call(this)
    };
    _.tg = function() {
        var a = this;
        this.promise = new y.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var Ny = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.w(Object, "setPrototypeOf").call(Object, this, Ny.prototype);
        this.name = "InputError"
    };
    _.P(Ny, Error);
    var Oy = function() {
            var a = this;
            this.B = this.Sa = null;
            this.C = -1;
            this.D = new _.tg;
            this.m = !1;
            this.D.promise.then(function() {
                -1 !== a.C && (a.B = _.re() - a.C)
            }, function() {})
        },
        Py = function() {
            Oy.apply(this, arguments);
            this.I = []
        };
    _.P(Py, Oy);
    var Ry = function(a, b) {
            a.m || (a.m = !0, a.Sa = b, a.D.resolve(b), _.G(lw) && Qy(a))
        },
        Sy = function(a, b) {
            a.m = !0;
            a.l = b;
            a.D.reject(b);
            _.G(lw) && Qy(a)
        },
        Qy = function(a) {
            for (var b = _.B(a.I), c = b.next(); !c.done; c = b.next()) c = c.value, c(a.Sa);
            a.I = []
        },
        Ly = function(a, b) {
            _.G(lw) && a.I.push(b)
        };
    pq.Object.defineProperties(Py.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.D.promise
            }
        },
        pb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.m
            }
        },
        H: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.B
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l
            }
        }
    });
    var fp = function() {
        Py.apply(this, arguments)
    };
    _.P(fp, Py);
    fp.prototype.j = function(a) {
        Ry(this, a)
    };
    var Ty = function(a, b) {
            Ry(a, null != b ? b : null)
        },
        Uy = function(a) {
            Ry(a, null)
        },
        Vy = function(a, b) {
            b.then(function(c) {
                a.j(c)
            })
        },
        Wy = function(a, b) {
            a.m || (a.m = !0, a.Sa = null, a.l = b, a.D.reject(b), _.G(lw) && Qy(a))
        },
        Xy = function(a) {
            Oy.call(this);
            this.mb = a
        };
    _.P(Xy, Oy);
    Xy.prototype.pb = function() {
        return this.mb.m
    };
    Xy.prototype.Qb = function() {
        return null !== this.mb.Sa
    };
    pq.Object.defineProperties(Xy.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.mb.l
            }
        }
    });
    var Yy = function(a) {
        Xy.call(this, a);
        this.mb = a
    };
    _.P(Yy, Xy);
    pq.Object.defineProperties(Yy.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.mb.Sa
            }
        }
    });
    var Zy = function() {
        Xy.apply(this, arguments)
    };
    _.P(Zy, Xy);
    pq.Object.defineProperties(Zy.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.mb.Sa
            }
        }
    });
    var $y = function() {
        Xy.apply(this, arguments)
    };
    _.P($y, Xy);
    pq.Object.defineProperties($y.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.mb.Sa
            }
        }
    });
    var az = function() {
        Py.apply(this, arguments)
    };
    _.P(az, Py);
    az.prototype.notify = function() {
        Ry(this, null)
    };
    var bz = function(a, b) {
            b.then(function() {
                a.notify()
            })
        },
        cz = function(a, b) {
            b = void 0 === b ? !1 : b;
            Py.call(this);
            var c = this;
            this.o = a;
            this.j = 0;
            if (_.G(lw)) {
                a = {};
                for (var d = _.B(this.o), e = d.next(); !e.done; a = {
                        Lb: a.Lb
                    }, e = d.next()) a.Lb = e.value, Ly(a.Lb, function(f) {
                    return function(g) {
                        c.j += 1;
                        f.Lb.error ? Sy(c, f.Lb.error) : b || null !== g ? Ry(c, null != g ? g : null) : c.j === c.o.length && Ry(c, null)
                    }
                }(a))
            } else _.w(y.Promise, "any").call(y.Promise, a.map(function(f) {
                return f.promise.then(function(g) {
                    if (b || null != g) return g;
                    throw g;
                })
            })).then(function(f) {
                c.m = !0;
                c.Sa = f;
                c.D.resolve(f)
            }, function() {
                c.m = !0;
                c.Sa = null;
                c.D.resolve(null)
            })
        };
    _.P(cz, Py);
    var ez = function(a, b) {
        b = void 0 === b ? 0 : b;
        _.Bv.call(this);
        var c = this;
        this.id = a;
        this.fa = b;
        this.ka = this.ja = this.ia = this.O = !1;
        this.Z = -1;
        this.C = new Ky(function() {
            dz(c)
        });
        _.Cm(this, this.C)
    };
    _.P(ez, _.Bv);
    ez.prototype.start = function() {
        var a = this,
            b, c, d, e, f;
        return _.fb(function(g) {
            switch (g.j) {
                case 1:
                    if (a.O) return g.return();
                    a.O = !0;
                    g.D = 2;
                    b = a;
                    return gb(g, jf(a.C.m, a.fa), 4);
                case 4:
                    b.Z = g.m;
                    if (a.I) {
                        g.j = 5;
                        break
                    }
                    for (var h = 0, k = _.B(a.C.C), l = k.next(); !l.done; l = k.next()) {
                        if (!l.value.Qb()) throw Error("missing input: " + a.id + "/" + h);
                        ++h
                    }
                    c = _.B(a.C.j);
                    for (d = c.next(); !d.done; d = c.next()) e = d.value, e.C = _.re();
                    return gb(g, a.j(), 5);
                case 5:
                    ib(g, 0);
                    break;
                case 2:
                    f = jb(g);
                    if (a.I) return g.return();
                    f instanceof Ny ? a.H(f) : f instanceof Error && (a.U(f), a.m(f));
                    g.j = 0
            }
        })
    };
    var dz = function(a) {
            if (!a.O && a.ia) try {
                var b = a.C.m,
                    c = 0 < a.fa ? b.filter(function(g) {
                        return !g.jc
                    }) : b,
                    d = b.filter(function(g) {
                        return g.jc
                    }),
                    e, f = null == (e = _.w(b, "find").call(b, function(g) {
                        return void 0 !== g.vb.error
                    })) ? void 0 : e.vb.error;
                if (f) throw a.O = !0, f;
                if (!c.some(function(g) {
                        return !g.vb.pb
                    })) {
                    if (d.length && (a.ja || (a.ja = !0, setTimeout(function() {
                            a.ka = !0;
                            dz(a)
                        }, a.fa)), d.some(function(g) {
                            return !g.vb.pb
                        }) && !a.ka)) return;
                    a.O = !0;
                    a.j()
                }
            } catch (g) {
                a.I || (g instanceof Ny ? a.H(g) : g instanceof Error && (a.U(g), a.m(g)))
            }
        },
        V = function(a) {
            var b = new fp;
            a.C.j.push(b);
            return b
        },
        fz = function(a) {
            var b = new az;
            a.C.j.push(b);
            return b
        },
        W = function(a, b) {
            My(a.C, b);
            b = new Zy(b);
            a.C.C.push(b);
            return b
        },
        X = function(a, b) {
            My(a.C, b);
            return new Yy(b)
        },
        gz = function(a, b) {
            My(a.C, b, !0);
            return new Yy(b)
        },
        hz = function(a, b) {
            My(a.C, b)
        },
        iz = function(a, b) {
            b = new cz(b);
            My(a.C, b);
            b = new Zy(b);
            a.C.C.push(b);
            return b
        };
    ez.prototype.H = function() {};
    ez.prototype.m = function(a) {
        if (this.C.j.length) {
            a = new Ny(a.message);
            for (var b = _.B(this.C.j), c = b.next(); !c.done; c = b.next()) c = c.value, c.pb || Sy(c, a)
        }
    };
    var jz = function(a, b) {
        ez.call(this, a);
        this.id = a;
        this.B = b
    };
    _.P(jz, ez);
    jz.prototype.U = function(a) {
        this.B(this.id, a)
    };
    var of = function(a, b, c) {
        jz.call(this, 1041, c);
        this.l = b;
        this.o = W(this, a)
    };
    _.P( of , jz); of .prototype.j = function() {
        var a = this.o.value;
        Ge().set(a, this.l) && hf(a, 2) && Be(27, (0, D.J)(a.na()))
    };
    var tf = function(a, b) {
        jz.call(this, 1048, b);
        this.l = V(this);
        this.o = V(this);
        this.F = W(this, a)
    };
    _.P(tf, jz);
    tf.prototype.j = function() {
        var a = (0, D.J)(this.F.value),
            b = function(c) {
                var d = {};
                Be(c, (0, D.J)(a.na()), null, (d.tic = String(Math.round((Date.now() - (0, D.J)(z(a, 3))) / 6E4)), d))
            };
        switch (cf(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                this.o.j(a);
                break;
            case 2:
                b(26);
                this.l.j(a);
                break;
            case 3:
                Be(9, (0, D.J)(a.na()));
                this.l.j(a);
                break;
            case 4:
                b(23), this.l.j(a)
        }
    };
    var Lf = function(a, b, c) {
        jz.call(this, 1049, c);
        this.l = b;
        hz(this, a)
    };
    _.P(Lf, jz);
    Lf.prototype.j = function() {
        for (var a = _.B(Oe(this.l)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Ge().get(b, this.l).qb;
            if (c) {
                var d = cf(c);
                if (2 === d || 3 === d) {
                    d = void 0;
                    var e = Ge();
                    c = (0, D.J)(c.na());
                    try {
                        this.l.removeItem("_GESPSK-" + c), delete e.cache[c]
                    } catch (f) {
                        Be(8, c, null == (d = f) ? void 0 : d.message)
                    }
                    Be(40, b)
                }
            }
        }
    };
    var xf = function(a, b, c, d) {
        jz.call(this, 658, d);
        this.collectorFunction = a;
        this.K = c;
        this.l = V(this);
        this.F = V(this);
        this.o = X(this, b)
    };
    _.P(xf, jz);
    xf.prototype.j = function() {
        var a = this;
        if (this.o.value) {
            var b = function(f) {
                    a.l.j({
                        id: (0, D.J)(f.na()),
                        collectorGeneratedData: z(f, 2)
                    })
                },
                c = this.o.value,
                d = (0, D.J)(c.na()),
                e = cf(c);
            kf(c);
            switch (e) {
                case 0:
                    b(c);
                    break;
                case 1:
                    b(c);
                    this.F.j(c);
                    break;
                case 3:
                case 2:
                case 4:
                    _.A(c, 2, null), Ie(d, c, this.collectorFunction, this.K).then(b)
            }
        } else Uy(this.l)
    };
    var nf = function(a, b, c) {
        jz.call(this, 1027, c);
        this.oc = a;
        this.F = b;
        this.l = V(this);
        this.o = V(this)
    };
    _.P(nf, jz);
    nf.prototype.j = function() {
        var a = Ge().get(this.oc, this.F).qb;
        if (!a) {
            a = $e(this.oc);
            var b = _.we(Ce) || null;
            a = _.A(a, 8, b);
            a = _.A(a, 3, Date.now());
            this.o.j(Je(a, Ke(new Me, 100)))
        }
        this.l.j(a)
    };
    var uf = function(a, b, c) {
        jz.call(this, 1043, c);
        this.o = b;
        this.l = V(this);
        this.F = W(this, a)
    };
    _.P(uf, jz);
    uf.prototype.j = function() {
        var a = this.F.value;
        this.o && _.A(a, 8, (0, D.J)(De(a, 8)) - 1);
        this.l.j(a)
    };
    var qf = function(a, b, c) {
        jz.call(this, 1029, c);
        this.l = b;
        this.o = V(this);
        this.F = W(this, a)
    };
    _.P(qf, jz);
    qf.prototype.j = function() {
        var a = this.F.value,
            b = Date.now();
        if (this.l) {
            var c = (0, D.J)(De(a, 8)),
                d, e = null != (d = z(a, 7)) ? d : b;
            c < this.l && _.A(a, 8, Math.min(c + Number((this.l * (b / 1E3 / 60 - e) / 60).toFixed(3)), this.l))
        }
        this.o.j(a)
    };
    var vf = function(a, b, c) {
        jz.call(this, 1047, c);
        this.collectorFunction = a;
        this.l = V(this);
        this.o = W(this, b)
    };
    _.P(vf, jz);
    vf.prototype.j = function() {
        var a = this,
            b = this.o.value,
            c = (0, D.J)(b.na());
        Be(18, c);
        try {
            var d = _.re();
            this.collectorFunction().then(function(e) {
                Be(29, c, null, {
                    delta: String(_.re() - d)
                });
                a.l.j(_.A(b, 2, e))
            }).catch(function(e) {
                Be(28, c, lf(e));
                a.l.j(Je(b, Ke(new Me, 106)))
            })
        } catch (e) {
            Be(1, c, lf(e)), this.l.j(Je(b, Ke(new Me, 107)))
        }
    };
    var rf = function(a, b, c) {
        jz.call(this, 1030, c);
        this.F = b;
        this.l = V(this);
        this.o = V(this);
        this.K = W(this, a)
    };
    _.P(rf, jz);
    rf.prototype.j = function() {
        var a = this.K.value,
            b, c = null != (b = De(a, 8)) ? b : 0,
            d;
        b = null != (d = z(a, 7)) ? d : Date.now();
        1 > c && this.F ? (d = {}, Be(22, (0, D.J)(a.na()), null, (d.t = String(b), d.cr = String(c), d.cs = String(cf(a)), d)), this.o.j(Je(a, Ke(new Me, 104)))) : this.l.j(a)
    };
    var yf = function(a, b, c, d) {
        jz.call(this, 662, d);
        this.o = a;
        this.l = c;
        this.F = W(this, b)
    };
    _.P(yf, jz);
    yf.prototype.j = function() {
        var a = this;
        Ne().then(function() {
            var b = (0, D.J)(a.F.value);
            Ie((0, D.J)(b.na()), b, a.o, a.l)
        })
    };
    var pf = function(a, b, c) {
        jz.call(this, 1028, c);
        this.o = b;
        this.l = V(this);
        this.F = W(this, a)
    };
    _.P(pf, jz);
    pf.prototype.j = function() {
        var a = this.F.value,
            b = (0, D.J)(a.na());
        this.o && (ok(a, 8) || (Be(33, b), _.A(a, 8, this.o)), null == z(a, 7) && (Be(34, b), _.A(a, 7, Math.round(Date.now() / 1E3 / 60))));
        null != z(a, 3) || Be(35, b);
        this.l.j(a)
    };
    var wf = function(a, b, c, d) {
        jz.call(this, 1050, d);
        this.K = b;
        this.F = c;
        this.l = V(this);
        this.o = W(this, a)
    };
    _.P(wf, jz);
    wf.prototype.j = function() {
        var a = this.o.value,
            b = (0, D.J)(a.na()),
            c = z(a, 2);
        if (null == c) Be(41, b), Je(a, Ke(new Me, 111));
        else if ("string" === typeof c)
            if (!c.length) Be(20, b);
            else {
                if (c.length > (/^(\d+)$/.test(b) ? this.F : this.K)) {
                    var d = {};
                    Be(12, b, null, (d.sl = String(c.length), d));
                    b = Je(a, Ke(new Me, 108));
                    Fe(b, 2)
                }
            }
        else Be(21, b);
        this.l.j(a)
    };
    var mf = function() {
        _.Bv.apply(this, arguments);
        this.j = []
    };
    _.P(mf, _.Bv);
    var H = function(a, b) {
            _.Cm(a, b);
            a.j.push(b)
        },
        zf = function(a, b) {
            b = _.B(b);
            for (var c = b.next(); !c.done; c = b.next()) H(a, c.value)
        },
        Af = function(a) {
            a = _.B(a.j);
            for (var b = a.next(); !b.done; b = a.next()) b = b.value, _.G(lw) ? (b.ia = !0, dz(b)) : b.start()
        };
    mf.prototype.D = function() {
        _.Bv.prototype.D.call(this);
        this.j.length = 0
    };
    var kz = function(a, b, c, d) {
        jz.call(this, 1059, d);
        this.F = b;
        this.o = c;
        this.l = V(this);
        this.K = W(this, a)
    };
    _.P(kz, jz);
    kz.prototype.j = function() {
        var a = this.K.value,
            b = a.id,
            c = a.collectorFunction,
            d;
        a = (0, D.J)(null != (d = a.networkCode) ? d : b);
        b = {};
        Be(42, a, null, (b.ea = String(Number(this.F)), b));
        Vy(this.l, Bf(a, c, this.o, this.B))
    };
    var lz = function(a, b) {
        jz.call(this, 1057, b);
        this.l = a;
        this.o = V(this);
        this.F = V(this)
    };
    _.P(lz, jz);
    lz.prototype.j = function() {
        if (this.l)
            if ("object" !== typeof this.l) Be(46, "UNKNOWN_COLLECTOR_ID"), mz(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.l.id,
                    b = this.l.networkCode;
                a && b && (delete this.l.id, Be(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {}, Be(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), mz(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.l.collectorFunction ? (Be(14, a), mz(this, a, 105)) : this.F.j(this.l)
            }
        else Be(39, "UNKNOWN_COLLECTOR_ID"), mz(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var mz = function(a, b, c) {
        a.o.j(Je($e(b), Ke(new Me, c)))
    };
    var Jf = function(a, b) {
        this.j = b;
        this.I = [];
        this.D = [];
        this.m = [];
        a = _.B(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    q = Jf.prototype;
    q.push = function(a) {
        a = new lz(a, this.Uc);
        var b = new of (a.o, this.j, this.Uc),
            c = new kz(a.F, !1, this.j, this.Uc),
            d = new mf;
        zf(d, [a, b, c]);
        Af(d);
        a = c.l.promise;
        this.I.push(a);
        b = _.B(this.D);
        for (c = b.next(); !c.done; c = b.next()) a.then(c.value)
    };
    q.addOnSignalResolveCallback = function(a) {
        this.D.push(a);
        for (var b = _.B(this.I), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    q.addErrorHandler = function(a) {
        this.m.push(a)
    };
    q.clearAllCache = function() {
        var a = this.j;
        if (void 0 !== a)
            for (var b = _.B(_.w(Object, "keys").call(Object, a)), c = b.next(); !c.done; c = b.next())
                if (c = c.value, _.w(c, "startsWith").call(c, "_GESPSK")) try {
                    a.removeItem(c)
                } catch (d) {}
        Hy = new Gy;
        Be(43, "")
    };
    q.Uc = function(a, b) {
        for (var c = _.B(this.m), d = c.next(); !d.done; d = c.next()) d = d.value, d(a, b)
    };
    var If = function(a) {
        this.push = function(b) {
            a.push(b)
        };
        this.addOnSignalResolveCallback = function(b) {
            a.addOnSignalResolveCallback(b)
        };
        this.addErrorHandler = function(b) {
            a.addErrorHandler(b)
        };
        this.clearAllCache = function() {
            a.clearAllCache()
        }
    };
    var Of = function(a, b) {
        jz.call(this, 1036, b);
        this.l = V(this);
        this.o = W(this, a)
    };
    _.P(Of, jz);
    Of.prototype.j = function() {
        var a = this.o.value;
        0 !== cf(a) && this.l.j(a)
    };
    var Pf = function(a, b, c) {
        jz.call(this, 1035, c);
        this.o = b;
        this.l = V(this);
        this.F = W(this, a)
    };
    _.P(Pf, jz);
    Pf.prototype.j = function() {
        var a = this,
            b = this.F.value,
            c = (0, D.J)(b.na()),
            d = this.o.toString(),
            e = {};
        Be(30, c, null, (e.url = d, e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        Va(f, this.o);
        var g = function() {
            var h = {};
            Be(31, (0, D.J)(c), null, (h.url = d, h));
            a.l.j(Je(b, Ke(new Me, 109)));
            _.Rd(f, "error", g)
        };
        document.head.appendChild(f);
        _.db(f, "error", g)
    };
    var Kf = function(a) {
        jz.call(this, 1046, a);
        this.A = fz(this)
    };
    _.P(Kf, jz);
    Kf.prototype.j = function() {
        var a = this;
        Ne().then(function() {
            return a.A.notify()
        })
    };
    var Nf = new y.Set;
    var nz = 0,
        oz = Kd(Xf(Zq("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var pz = function() {
            this.j = function() {}
        },
        qz = function() {
            var a = _.ze(uk).o;
            _.ze(pz).j(a)
        };
    var sz = function() {
            if (void 0 === b) {
                var a = void 0 === a ? _.t : a;
                var b = a.ggeac || (a.ggeac = {})
            }
            a = b;
            Dy(_.ze(Ae), a);
            rz(b);
            _.ze(pz).j = Cy(By, b);
            _.ze(Ey).j()
        },
        rz = function(a) {
            var b = _.ze(Ey);
            b.m = function(c, d) {
                return Cy(xy, a, function() {
                    return !1
                })(c, d, 2)
            };
            b.D = function(c, d) {
                return Cy(yy, a, function() {
                    return 0
                })(c, d, 2)
            };
            b.I = function(c, d) {
                return Cy(zy, a, function() {
                    return ""
                })(c, d, 2)
            };
            b.C = function(c, d) {
                return Cy(Ay, a, function() {
                    return []
                })(c, d, 2)
            };
            b.j = function() {
                Cy(uy, a)(2)
            }
        };
    var uh = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.Jh(b.innerWidth, b.innerHeight)).round() : _.yu(b || window).round()
            } catch (d) {
                return new _.Jh(-12245933, -12245933)
            }
        },
        tz = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        hm = function(a, b) {
            b = void 0 === b ? _.t : b;
            a = a.scrollingElement || tz(a);
            return new _.Gh(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        Uh = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var uz = function(a) {
        _.R.call(this, a)
    };
    _.P(uz, _.R);
    var vz = function(a, b) {
            this.j = a;
            this.D = void 0 === b ? !1 : b;
            this.m = 0
        },
        xz = function(a, b) {
            if (0 === a.m) {
                if (wz(a, "__gads", b)) b = !0;
                else {
                    var c = a.j;
                    F(b, 5) && ne(c) && (new oe(c.document)).set("GoogleAdServingTest", "Good", void 0);
                    if (c = "Good" === pe("GoogleAdServingTest", b, a.j)) {
                        var d = a.j;
                        F(b, 5) && ne(d) && ey(new oe(d.document), "GoogleAdServingTest")
                    }
                    b = c
                }
                a.m = b ? 2 : 1
            }
            return 2 === a.m
        },
        wz = function(a, b, c) {
            return c ? pe(b, c, a.j) : null
        },
        yz = function(a, b, c, d) {
            if (d) {
                var e = z(c, 2) - Date.now() / 1E3;
                e = {
                    jd: a.D ? Math.max(e, 0) : e,
                    path: z(c, 3),
                    domain: z(c, 4),
                    Cf: !1
                };
                a = a.j;
                F(d, 5) && ne(a) && (new oe(a.document)).set(b, z(c, 1), e)
            }
        },
        zz = function(a, b, c) {
            if (c && pe(b, c, a.j)) {
                var d = a.j.location.hostname;
                if ("localhost" === d) d = ["localhost"];
                else if (d = d.split("."), 2 > d.length) d = [];
                else {
                    for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                    d = e
                }
                d = _.B(d);
                for (e = d.next(); !e.done; e = d.next()) f = a.j, F(c, 5) && ne(f) && ey(new oe(f.document), b, "/", e.value)
            }
        };
    var Az = {},
        Bz = (Az[3] = Kd(Xf(Zq("https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), Az);
    ({})[3] = Kd(Xf(Zq("https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var Cz = function(a) {
            this.j = a;
            this.m = ou()
        },
        Dz = function(a) {
            var b = {};
            _.er(a, function(c) {
                b[c.j] = c.m
            });
            return b
        };
    var Ez = Q(["https://adservice.google.com/adsid/integrator.", ""]),
        Fz = Q(["https://adservice.google.ad/adsid/integrator.", ""]),
        Gz = Q(["https://adservice.google.ae/adsid/integrator.", ""]),
        Hz = Q(["https://adservice.google.com.af/adsid/integrator.", ""]),
        Iz = Q(["https://adservice.google.com.ag/adsid/integrator.", ""]),
        Jz = Q(["https://adservice.google.com.ai/adsid/integrator.", ""]),
        Kz = Q(["https://adservice.google.al/adsid/integrator.", ""]),
        Lz = Q(["https://adservice.google.co.ao/adsid/integrator.", ""]),
        Mz = Q(["https://adservice.google.com.ar/adsid/integrator.", ""]),
        Nz = Q(["https://adservice.google.as/adsid/integrator.", ""]),
        Oz = Q(["https://adservice.google.at/adsid/integrator.", ""]),
        Pz = Q(["https://adservice.google.com.au/adsid/integrator.", ""]),
        Qz = Q(["https://adservice.google.az/adsid/integrator.", ""]),
        Rz = Q(["https://adservice.google.com.bd/adsid/integrator.", ""]),
        Sz = Q(["https://adservice.google.be/adsid/integrator.", ""]),
        Tz = Q(["https://adservice.google.bf/adsid/integrator.", ""]),
        Uz = Q(["https://adservice.google.bg/adsid/integrator.", ""]),
        Vz = Q(["https://adservice.google.com.bh/adsid/integrator.", ""]),
        Wz = Q(["https://adservice.google.bi/adsid/integrator.", ""]),
        Xz = Q(["https://adservice.google.bj/adsid/integrator.", ""]),
        Yz = Q(["https://adservice.google.com.bn/adsid/integrator.", ""]),
        Zz = Q(["https://adservice.google.com.bo/adsid/integrator.", ""]),
        $z = Q(["https://adservice.google.com.br/adsid/integrator.", ""]),
        aA = Q(["https://adservice.google.bs/adsid/integrator.", ""]),
        bA = Q(["https://adservice.google.bt/adsid/integrator.", ""]),
        cA = Q(["https://adservice.google.co.bw/adsid/integrator.", ""]),
        dA = Q(["https://adservice.google.com.bz/adsid/integrator.", ""]),
        eA = Q(["https://adservice.google.ca/adsid/integrator.", ""]),
        fA = Q(["https://adservice.google.cd/adsid/integrator.", ""]),
        gA = Q(["https://adservice.google.cf/adsid/integrator.", ""]),
        hA = Q(["https://adservice.google.cg/adsid/integrator.", ""]),
        iA = Q(["https://adservice.google.ch/adsid/integrator.", ""]),
        jA = Q(["https://adservice.google.ci/adsid/integrator.", ""]),
        kA = Q(["https://adservice.google.co.ck/adsid/integrator.", ""]),
        lA = Q(["https://adservice.google.cl/adsid/integrator.", ""]),
        mA = Q(["https://adservice.google.cm/adsid/integrator.", ""]),
        nA = Q(["https://adservice.google.com.co/adsid/integrator.", ""]),
        oA = Q(["https://adservice.google.co.cr/adsid/integrator.", ""]),
        pA = Q(["https://adservice.google.com.cu/adsid/integrator.", ""]),
        qA = Q(["https://adservice.google.cv/adsid/integrator.", ""]),
        rA = Q(["https://adservice.google.com.cy/adsid/integrator.", ""]),
        sA = Q(["https://adservice.google.cz/adsid/integrator.", ""]),
        tA = Q(["https://adservice.google.de/adsid/integrator.", ""]),
        uA = Q(["https://adservice.google.dj/adsid/integrator.", ""]),
        vA = Q(["https://adservice.google.dk/adsid/integrator.", ""]),
        wA = Q(["https://adservice.google.dm/adsid/integrator.", ""]),
        xA = Q(["https://adservice.google.dz/adsid/integrator.", ""]),
        yA = Q(["https://adservice.google.com.ec/adsid/integrator.", ""]),
        zA = Q(["https://adservice.google.ee/adsid/integrator.", ""]),
        AA = Q(["https://adservice.google.com.eg/adsid/integrator.", ""]),
        BA = Q(["https://adservice.google.es/adsid/integrator.", ""]),
        CA = Q(["https://adservice.google.com.et/adsid/integrator.", ""]),
        DA = Q(["https://adservice.google.fi/adsid/integrator.", ""]),
        EA = Q(["https://adservice.google.com.fj/adsid/integrator.", ""]),
        FA = Q(["https://adservice.google.fm/adsid/integrator.", ""]),
        GA = Q(["https://adservice.google.fr/adsid/integrator.", ""]),
        HA = Q(["https://adservice.google.ga/adsid/integrator.", ""]),
        IA = Q(["https://adservice.google.ge/adsid/integrator.", ""]),
        JA = Q(["https://adservice.google.gg/adsid/integrator.", ""]),
        KA = Q(["https://adservice.google.com.gh/adsid/integrator.", ""]),
        LA = Q(["https://adservice.google.com.gi/adsid/integrator.", ""]),
        MA = Q(["https://adservice.google.gl/adsid/integrator.", ""]),
        NA = Q(["https://adservice.google.gm/adsid/integrator.", ""]),
        OA = Q(["https://adservice.google.gr/adsid/integrator.", ""]),
        PA = Q(["https://adservice.google.com.gt/adsid/integrator.", ""]),
        QA = Q(["https://adservice.google.gy/adsid/integrator.", ""]),
        RA = Q(["https://adservice.google.com.hk/adsid/integrator.", ""]),
        SA = Q(["https://adservice.google.hn/adsid/integrator.", ""]),
        TA = Q(["https://adservice.google.hr/adsid/integrator.", ""]),
        UA = Q(["https://adservice.google.ht/adsid/integrator.", ""]),
        VA = Q(["https://adservice.google.hu/adsid/integrator.", ""]),
        WA = Q(["https://adservice.google.co.id/adsid/integrator.", ""]),
        XA = Q(["https://adservice.google.ie/adsid/integrator.", ""]),
        YA = Q(["https://adservice.google.co.il/adsid/integrator.", ""]),
        ZA = Q(["https://adservice.google.im/adsid/integrator.", ""]),
        $A = Q(["https://adservice.google.co.in/adsid/integrator.", ""]),
        aB = Q(["https://adservice.google.iq/adsid/integrator.", ""]),
        bB = Q(["https://adservice.google.is/adsid/integrator.", ""]),
        cB = Q(["https://adservice.google.it/adsid/integrator.", ""]),
        dB = Q(["https://adservice.google.je/adsid/integrator.", ""]),
        eB = Q(["https://adservice.google.com.jm/adsid/integrator.", ""]),
        fB = Q(["https://adservice.google.jo/adsid/integrator.", ""]),
        gB = Q(["https://adservice.google.co.jp/adsid/integrator.", ""]),
        hB = Q(["https://adservice.google.co.ke/adsid/integrator.", ""]),
        iB = Q(["https://adservice.google.com.kh/adsid/integrator.", ""]),
        jB = Q(["https://adservice.google.ki/adsid/integrator.", ""]),
        kB = Q(["https://adservice.google.kg/adsid/integrator.", ""]),
        lB = Q(["https://adservice.google.co.kr/adsid/integrator.", ""]),
        mB = Q(["https://adservice.google.com.kw/adsid/integrator.", ""]),
        nB = Q(["https://adservice.google.kz/adsid/integrator.", ""]),
        oB = Q(["https://adservice.google.la/adsid/integrator.", ""]),
        pB = Q(["https://adservice.google.com.lb/adsid/integrator.", ""]),
        qB = Q(["https://adservice.google.li/adsid/integrator.", ""]),
        rB = Q(["https://adservice.google.lk/adsid/integrator.", ""]),
        sB = Q(["https://adservice.google.co.ls/adsid/integrator.", ""]),
        tB = Q(["https://adservice.google.lt/adsid/integrator.", ""]),
        uB = Q(["https://adservice.google.lu/adsid/integrator.", ""]),
        vB = Q(["https://adservice.google.lv/adsid/integrator.", ""]),
        wB = Q(["https://adservice.google.com.ly/adsid/integrator.", ""]),
        xB = Q(["https://adservice.google.md/adsid/integrator.", ""]),
        yB = Q(["https://adservice.google.me/adsid/integrator.", ""]),
        zB = Q(["https://adservice.google.mg/adsid/integrator.", ""]),
        AB = Q(["https://adservice.google.mk/adsid/integrator.", ""]),
        BB = Q(["https://adservice.google.ml/adsid/integrator.", ""]),
        CB = Q(["https://adservice.google.com.mm/adsid/integrator.", ""]),
        DB = Q(["https://adservice.google.mn/adsid/integrator.", ""]),
        EB = Q(["https://adservice.google.ms/adsid/integrator.", ""]),
        FB = Q(["https://adservice.google.com.mt/adsid/integrator.", ""]),
        GB = Q(["https://adservice.google.mu/adsid/integrator.", ""]),
        HB = Q(["https://adservice.google.mv/adsid/integrator.", ""]),
        IB = Q(["https://adservice.google.mw/adsid/integrator.", ""]),
        JB = Q(["https://adservice.google.com.mx/adsid/integrator.", ""]),
        KB = Q(["https://adservice.google.com.my/adsid/integrator.", ""]),
        LB = Q(["https://adservice.google.co.mz/adsid/integrator.", ""]),
        MB = Q(["https://adservice.google.com.na/adsid/integrator.", ""]),
        NB = Q(["https://adservice.google.com.ng/adsid/integrator.", ""]),
        OB = Q(["https://adservice.google.com.ni/adsid/integrator.", ""]),
        PB = Q(["https://adservice.google.ne/adsid/integrator.", ""]),
        QB = Q(["https://adservice.google.nl/adsid/integrator.", ""]),
        RB = Q(["https://adservice.google.no/adsid/integrator.", ""]),
        SB = Q(["https://adservice.google.com.np/adsid/integrator.", ""]),
        TB = Q(["https://adservice.google.nr/adsid/integrator.", ""]),
        UB = Q(["https://adservice.google.nu/adsid/integrator.", ""]),
        VB = Q(["https://adservice.google.co.nz/adsid/integrator.", ""]),
        WB = Q(["https://adservice.google.com.om/adsid/integrator.", ""]),
        XB = Q(["https://adservice.google.com.pa/adsid/integrator.", ""]),
        YB = Q(["https://adservice.google.com.pe/adsid/integrator.", ""]),
        ZB = Q(["https://adservice.google.com.pg/adsid/integrator.", ""]),
        $B = Q(["https://adservice.google.com.ph/adsid/integrator.", ""]),
        aC = Q(["https://adservice.google.com.pk/adsid/integrator.", ""]),
        bC = Q(["https://adservice.google.pl/adsid/integrator.", ""]),
        cC = Q(["https://adservice.google.pn/adsid/integrator.", ""]),
        dC = Q(["https://adservice.google.com.pr/adsid/integrator.", ""]),
        eC = Q(["https://adservice.google.ps/adsid/integrator.", ""]),
        fC = Q(["https://adservice.google.pt/adsid/integrator.", ""]),
        gC = Q(["https://adservice.google.com.py/adsid/integrator.", ""]),
        hC = Q(["https://adservice.google.com.qa/adsid/integrator.", ""]),
        iC = Q(["https://adservice.google.ro/adsid/integrator.", ""]),
        jC = Q(["https://adservice.google.rw/adsid/integrator.", ""]),
        kC = Q(["https://adservice.google.com.sa/adsid/integrator.", ""]),
        lC = Q(["https://adservice.google.com.sb/adsid/integrator.", ""]),
        mC = Q(["https://adservice.google.sc/adsid/integrator.", ""]),
        nC = Q(["https://adservice.google.se/adsid/integrator.", ""]),
        oC = Q(["https://adservice.google.com.sg/adsid/integrator.", ""]),
        pC = Q(["https://adservice.google.sh/adsid/integrator.", ""]),
        qC = Q(["https://adservice.google.si/adsid/integrator.", ""]),
        rC = Q(["https://adservice.google.sk/adsid/integrator.", ""]),
        sC = Q(["https://adservice.google.sn/adsid/integrator.", ""]),
        tC = Q(["https://adservice.google.so/adsid/integrator.", ""]),
        uC = Q(["https://adservice.google.sm/adsid/integrator.", ""]),
        vC = Q(["https://adservice.google.sr/adsid/integrator.", ""]),
        wC = Q(["https://adservice.google.st/adsid/integrator.", ""]),
        xC = Q(["https://adservice.google.com.sv/adsid/integrator.", ""]),
        yC = Q(["https://adservice.google.td/adsid/integrator.", ""]),
        zC = Q(["https://adservice.google.tg/adsid/integrator.", ""]),
        AC = Q(["https://adservice.google.co.th/adsid/integrator.", ""]),
        BC = Q(["https://adservice.google.com.tj/adsid/integrator.", ""]),
        CC = Q(["https://adservice.google.tl/adsid/integrator.", ""]),
        DC = Q(["https://adservice.google.tm/adsid/integrator.", ""]),
        EC = Q(["https://adservice.google.tn/adsid/integrator.", ""]),
        FC = Q(["https://adservice.google.to/adsid/integrator.", ""]),
        GC = Q(["https://adservice.google.com.tr/adsid/integrator.", ""]),
        HC = Q(["https://adservice.google.tt/adsid/integrator.", ""]),
        IC = Q(["https://adservice.google.com.tw/adsid/integrator.", ""]),
        JC = Q(["https://adservice.google.co.tz/adsid/integrator.", ""]),
        KC = Q(["https://adservice.google.com.ua/adsid/integrator.", ""]),
        LC = Q(["https://adservice.google.co.ug/adsid/integrator.", ""]),
        MC = Q(["https://adservice.google.co.uk/adsid/integrator.", ""]),
        NC = Q(["https://adservice.google.com.uy/adsid/integrator.", ""]),
        OC = Q(["https://adservice.google.co.uz/adsid/integrator.", ""]),
        PC = Q(["https://adservice.google.com.vc/adsid/integrator.", ""]),
        QC = Q(["https://adservice.google.co.ve/adsid/integrator.", ""]),
        RC = Q(["https://adservice.google.vg/adsid/integrator.", ""]),
        SC = Q(["https://adservice.google.co.vi/adsid/integrator.", ""]),
        TC = Q(["https://adservice.google.com.vn/adsid/integrator.", ""]),
        UC = Q(["https://adservice.google.vu/adsid/integrator.", ""]),
        VC = Q(["https://adservice.google.ws/adsid/integrator.", ""]),
        WC = Q(["https://adservice.google.rs/adsid/integrator.", ""]),
        XC = Q(["https://adservice.google.co.za/adsid/integrator.", ""]),
        YC = Q(["https://adservice.google.co.zm/adsid/integrator.", ""]),
        ZC = Q(["https://adservice.google.co.zw/adsid/integrator.", ""]),
        $C = Q(["https://adservice.google.cat/adsid/integrator.", ""]),
        aD = new y.Map([
            [".google.com", function(a) {
                return C(Ez, a)
            }],
            [".google.ad", function(a) {
                return C(Fz, a)
            }],
            [".google.ae", function(a) {
                return C(Gz, a)
            }],
            [".google.com.af", function(a) {
                return C(Hz, a)
            }],
            [".google.com.ag", function(a) {
                return C(Iz, a)
            }],
            [".google.com.ai", function(a) {
                return C(Jz, a)
            }],
            [".google.al", function(a) {
                return C(Kz, a)
            }],
            [".google.co.ao", function(a) {
                return C(Lz, a)
            }],
            [".google.com.ar", function(a) {
                return C(Mz, a)
            }],
            [".google.as", function(a) {
                return C(Nz, a)
            }],
            [".google.at", function(a) {
                return C(Oz, a)
            }],
            [".google.com.au", function(a) {
                return C(Pz, a)
            }],
            [".google.az", function(a) {
                return C(Qz, a)
            }],
            [".google.com.bd", function(a) {
                return C(Rz, a)
            }],
            [".google.be", function(a) {
                return C(Sz, a)
            }],
            [".google.bf", function(a) {
                return C(Tz, a)
            }],
            [".google.bg", function(a) {
                return C(Uz, a)
            }],
            [".google.com.bh", function(a) {
                return C(Vz, a)
            }],
            [".google.bi", function(a) {
                return C(Wz, a)
            }],
            [".google.bj", function(a) {
                return C(Xz, a)
            }],
            [".google.com.bn", function(a) {
                return C(Yz, a)
            }],
            [".google.com.bo", function(a) {
                return C(Zz, a)
            }],
            [".google.com.br", function(a) {
                return C($z, a)
            }],
            [".google.bs", function(a) {
                return C(aA, a)
            }],
            [".google.bt", function(a) {
                return C(bA, a)
            }],
            [".google.co.bw", function(a) {
                return C(cA, a)
            }],
            [".google.com.bz", function(a) {
                return C(dA, a)
            }],
            [".google.ca", function(a) {
                return C(eA, a)
            }],
            [".google.cd", function(a) {
                return C(fA, a)
            }],
            [".google.cf", function(a) {
                return C(gA, a)
            }],
            [".google.cg", function(a) {
                return C(hA, a)
            }],
            [".google.ch", function(a) {
                return C(iA, a)
            }],
            [".google.ci", function(a) {
                return C(jA, a)
            }],
            [".google.co.ck", function(a) {
                return C(kA, a)
            }],
            [".google.cl", function(a) {
                return C(lA, a)
            }],
            [".google.cm", function(a) {
                return C(mA, a)
            }],
            [".google.com.co", function(a) {
                return C(nA, a)
            }],
            [".google.co.cr", function(a) {
                return C(oA, a)
            }],
            [".google.com.cu", function(a) {
                return C(pA, a)
            }],
            [".google.cv", function(a) {
                return C(qA, a)
            }],
            [".google.com.cy", function(a) {
                return C(rA, a)
            }],
            [".google.cz", function(a) {
                return C(sA, a)
            }],
            [".google.de", function(a) {
                return C(tA, a)
            }],
            [".google.dj", function(a) {
                return C(uA, a)
            }],
            [".google.dk", function(a) {
                return C(vA, a)
            }],
            [".google.dm", function(a) {
                return C(wA, a)
            }],
            [".google.dz", function(a) {
                return C(xA, a)
            }],
            [".google.com.ec", function(a) {
                return C(yA, a)
            }],
            [".google.ee", function(a) {
                return C(zA, a)
            }],
            [".google.com.eg", function(a) {
                return C(AA, a)
            }],
            [".google.es", function(a) {
                return C(BA, a)
            }],
            [".google.com.et", function(a) {
                return C(CA, a)
            }],
            [".google.fi", function(a) {
                return C(DA, a)
            }],
            [".google.com.fj", function(a) {
                return C(EA, a)
            }],
            [".google.fm", function(a) {
                return C(FA, a)
            }],
            [".google.fr", function(a) {
                return C(GA, a)
            }],
            [".google.ga", function(a) {
                return C(HA, a)
            }],
            [".google.ge", function(a) {
                return C(IA, a)
            }],
            [".google.gg", function(a) {
                return C(JA, a)
            }],
            [".google.com.gh", function(a) {
                return C(KA, a)
            }],
            [".google.com.gi", function(a) {
                return C(LA, a)
            }],
            [".google.gl", function(a) {
                return C(MA, a)
            }],
            [".google.gm", function(a) {
                return C(NA, a)
            }],
            [".google.gr", function(a) {
                return C(OA, a)
            }],
            [".google.com.gt", function(a) {
                return C(PA, a)
            }],
            [".google.gy", function(a) {
                return C(QA, a)
            }],
            [".google.com.hk", function(a) {
                return C(RA, a)
            }],
            [".google.hn", function(a) {
                return C(SA, a)
            }],
            [".google.hr", function(a) {
                return C(TA, a)
            }],
            [".google.ht", function(a) {
                return C(UA, a)
            }],
            [".google.hu", function(a) {
                return C(VA, a)
            }],
            [".google.co.id", function(a) {
                return C(WA, a)
            }],
            [".google.ie", function(a) {
                return C(XA, a)
            }],
            [".google.co.il", function(a) {
                return C(YA, a)
            }],
            [".google.im", function(a) {
                return C(ZA, a)
            }],
            [".google.co.in", function(a) {
                return C($A, a)
            }],
            [".google.iq", function(a) {
                return C(aB, a)
            }],
            [".google.is", function(a) {
                return C(bB, a)
            }],
            [".google.it", function(a) {
                return C(cB, a)
            }],
            [".google.je", function(a) {
                return C(dB, a)
            }],
            [".google.com.jm", function(a) {
                return C(eB, a)
            }],
            [".google.jo", function(a) {
                return C(fB, a)
            }],
            [".google.co.jp", function(a) {
                return C(gB, a)
            }],
            [".google.co.ke", function(a) {
                return C(hB, a)
            }],
            [".google.com.kh", function(a) {
                return C(iB, a)
            }],
            [".google.ki", function(a) {
                return C(jB, a)
            }],
            [".google.kg", function(a) {
                return C(kB, a)
            }],
            [".google.co.kr", function(a) {
                return C(lB, a)
            }],
            [".google.com.kw", function(a) {
                return C(mB, a)
            }],
            [".google.kz", function(a) {
                return C(nB, a)
            }],
            [".google.la", function(a) {
                return C(oB, a)
            }],
            [".google.com.lb", function(a) {
                return C(pB, a)
            }],
            [".google.li", function(a) {
                return C(qB, a)
            }],
            [".google.lk", function(a) {
                return C(rB, a)
            }],
            [".google.co.ls", function(a) {
                return C(sB, a)
            }],
            [".google.lt", function(a) {
                return C(tB, a)
            }],
            [".google.lu", function(a) {
                return C(uB, a)
            }],
            [".google.lv", function(a) {
                return C(vB, a)
            }],
            [".google.com.ly", function(a) {
                return C(wB, a)
            }],
            [".google.md", function(a) {
                return C(xB, a)
            }],
            [".google.me", function(a) {
                return C(yB, a)
            }],
            [".google.mg", function(a) {
                return C(zB, a)
            }],
            [".google.mk", function(a) {
                return C(AB, a)
            }],
            [".google.ml", function(a) {
                return C(BB, a)
            }],
            [".google.com.mm", function(a) {
                return C(CB, a)
            }],
            [".google.mn", function(a) {
                return C(DB, a)
            }],
            [".google.ms", function(a) {
                return C(EB, a)
            }],
            [".google.com.mt", function(a) {
                return C(FB, a)
            }],
            [".google.mu", function(a) {
                return C(GB, a)
            }],
            [".google.mv", function(a) {
                return C(HB, a)
            }],
            [".google.mw", function(a) {
                return C(IB, a)
            }],
            [".google.com.mx", function(a) {
                return C(JB, a)
            }],
            [".google.com.my", function(a) {
                return C(KB, a)
            }],
            [".google.co.mz", function(a) {
                return C(LB, a)
            }],
            [".google.com.na", function(a) {
                return C(MB, a)
            }],
            [".google.com.ng", function(a) {
                return C(NB, a)
            }],
            [".google.com.ni", function(a) {
                return C(OB, a)
            }],
            [".google.ne", function(a) {
                return C(PB, a)
            }],
            [".google.nl", function(a) {
                return C(QB, a)
            }],
            [".google.no", function(a) {
                return C(RB, a)
            }],
            [".google.com.np", function(a) {
                return C(SB, a)
            }],
            [".google.nr", function(a) {
                return C(TB, a)
            }],
            [".google.nu", function(a) {
                return C(UB, a)
            }],
            [".google.co.nz", function(a) {
                return C(VB, a)
            }],
            [".google.com.om", function(a) {
                return C(WB, a)
            }],
            [".google.com.pa", function(a) {
                return C(XB, a)
            }],
            [".google.com.pe", function(a) {
                return C(YB, a)
            }],
            [".google.com.pg", function(a) {
                return C(ZB, a)
            }],
            [".google.com.ph", function(a) {
                return C($B, a)
            }],
            [".google.com.pk", function(a) {
                return C(aC, a)
            }],
            [".google.pl", function(a) {
                return C(bC, a)
            }],
            [".google.pn", function(a) {
                return C(cC, a)
            }],
            [".google.com.pr", function(a) {
                return C(dC, a)
            }],
            [".google.ps", function(a) {
                return C(eC, a)
            }],
            [".google.pt", function(a) {
                return C(fC, a)
            }],
            [".google.com.py", function(a) {
                return C(gC, a)
            }],
            [".google.com.qa", function(a) {
                return C(hC, a)
            }],
            [".google.ro", function(a) {
                return C(iC, a)
            }],
            [".google.rw", function(a) {
                return C(jC, a)
            }],
            [".google.com.sa", function(a) {
                return C(kC, a)
            }],
            [".google.com.sb", function(a) {
                return C(lC, a)
            }],
            [".google.sc", function(a) {
                return C(mC, a)
            }],
            [".google.se", function(a) {
                return C(nC, a)
            }],
            [".google.com.sg", function(a) {
                return C(oC, a)
            }],
            [".google.sh", function(a) {
                return C(pC, a)
            }],
            [".google.si", function(a) {
                return C(qC, a)
            }],
            [".google.sk", function(a) {
                return C(rC, a)
            }],
            [".google.sn", function(a) {
                return C(sC, a)
            }],
            [".google.so", function(a) {
                return C(tC, a)
            }],
            [".google.sm", function(a) {
                return C(uC, a)
            }],
            [".google.sr", function(a) {
                return C(vC, a)
            }],
            [".google.st", function(a) {
                return C(wC, a)
            }],
            [".google.com.sv", function(a) {
                return C(xC, a)
            }],
            [".google.td", function(a) {
                return C(yC, a)
            }],
            [".google.tg", function(a) {
                return C(zC, a)
            }],
            [".google.co.th", function(a) {
                return C(AC, a)
            }],
            [".google.com.tj", function(a) {
                return C(BC, a)
            }],
            [".google.tl", function(a) {
                return C(CC, a)
            }],
            [".google.tm", function(a) {
                return C(DC, a)
            }],
            [".google.tn", function(a) {
                return C(EC, a)
            }],
            [".google.to", function(a) {
                return C(FC, a)
            }],
            [".google.com.tr", function(a) {
                return C(GC, a)
            }],
            [".google.tt", function(a) {
                return C(HC, a)
            }],
            [".google.com.tw", function(a) {
                return C(IC, a)
            }],
            [".google.co.tz", function(a) {
                return C(JC, a)
            }],
            [".google.com.ua", function(a) {
                return C(KC, a)
            }],
            [".google.co.ug", function(a) {
                return C(LC, a)
            }],
            [".google.co.uk", function(a) {
                return C(MC, a)
            }],
            [".google.com.uy", function(a) {
                return C(NC, a)
            }],
            [".google.co.uz", function(a) {
                return C(OC, a)
            }],
            [".google.com.vc", function(a) {
                return C(PC, a)
            }],
            [".google.co.ve", function(a) {
                return C(QC, a)
            }],
            [".google.vg", function(a) {
                return C(RC, a)
            }],
            [".google.co.vi", function(a) {
                return C(SC, a)
            }],
            [".google.com.vn", function(a) {
                return C(TC, a)
            }],
            [".google.vu", function(a) {
                return C(UC, a)
            }],
            [".google.ws", function(a) {
                return C(VC, a)
            }],
            [".google.rs", function(a) {
                return C(WC, a)
            }],
            [".google.co.za", function(a) {
                return C(XC, a)
            }],
            [".google.co.zm", function(a) {
                return C(YC, a)
            }],
            [".google.co.zw", function(a) {
                return C(ZC, a)
            }],
            [".google.cat", function(a) {
                return C($C, a)
            }]
        ].map(function(a) {
            var b = _.B(a);
            a = b.next().value;
            b = b.next().value;
            var c = {};
            return [a, (c.json = b("json"), c.js = b("js"), c["sync.js"] = b("sync.js"), c)]
        }));
    var bD = function(a, b, c) {
        var d = _.Cd("LINK", a);
        try {
            d.rel = "preload";
            if (b instanceof Zf) var e = Ua(b).toString();
            else {
                if (b instanceof Ma) var f = Na(b);
                else {
                    if (b instanceof Ma) var g = b;
                    else b = "object" == typeof b && b.Ra ? b.La() : String(b), $f.test(b) || (b = "about:invalid#zClosurez"), g = _.bb(b);
                    f = Na(g)
                }
                e = f
            }
            d.href = e
        } catch (h) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (h) {}
    };
    var Tf = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var jg = _.t,
        cD = function(a) {
            var b = new y.Map([
                ["domain", _.t.location.hostname]
            ]);
            kg[3] >= qe() && b.set("adsid", kg[1]);
            return Ld(aD.get(a).js, b)
        },
        kg, dD, ig = function() {
            jg = _.t;
            kg = jg.googleToken = jg.googleToken || {};
            var a = qe();
            kg[1] && kg[3] > a && 0 < kg[2] || (kg[1] = "", kg[2] = -1, kg[3] = -1, kg[4] = "", kg[6] = "");
            dD = jg.googleIMState = jg.googleIMState || {};
            aD.has(dD[1]) || (dD[1] = ".google.com");
            Array.isArray(dD[5]) || (dD[5] = []);
            "boolean" !== typeof dD[6] && (dD[6] = !1);
            Array.isArray(dD[7]) || (dD[7] = []);
            "number" !== typeof dD[8] && (dD[8] = 0)
        },
        eD = function(a) {
            ig();
            aD.has(a) && (dD[1] = a)
        },
        ng = {
            ed: function() {
                return 0 < dD[8]
            },
            vf: function() {
                dD[8]++
            },
            wf: function() {
                0 < dD[8] && dD[8]--
            },
            xf: function() {
                dD[8] = 0
            },
            Bh: function() {
                return !1
            },
            yc: function() {
                return dD[5]
            },
            xd: function(a) {
                try {
                    a()
                } catch (b) {
                    _.t.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            ae: function() {
                if (!ng.ed()) {
                    var a = _.t.document,
                        b = function(e) {
                            e = cD(e);
                            a: {
                                try {
                                    var f = mu();
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            bD(a, e.toString(), f);
                            f = _.Cd("SCRIPT", a);
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return _.t.processGoogleToken({}, 2)
                            };
                            Va(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), ng.vf()
                            } catch (g) {}
                        },
                        c = dD[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    _.t.setTimeout(function() {
                        return _.t.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        fD = function(a) {
            _.t.processGoogleToken = _.t.processGoogleToken || function(b, c) {
                var d = b;
                d = void 0 === d ? {} : d;
                c = void 0 === c ? 0 : c;
                b = d.newToken || "";
                var e = "NT" == b,
                    f = parseInt(d.freshLifetimeSecs || "", 10),
                    g = parseInt(d.validLifetimeSecs || "", 10),
                    h = d["1p_jar"] || "";
                d = d.pucrd || "";
                ig();
                1 == c ? ng.xf() : ng.wf();
                var k = jg.googleToken = jg.googleToken || {},
                    l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                e = e && !ng.ed() && (!(kg[3] >= qe()) || "NT" == kg[1]);
                var n = !(kg[3] >= qe()) && 0 != c;
                if (l || e || n) e = qe(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && _.tx(_.t, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, ig();
                if (l || !ng.ed()) {
                    c = ng.yc();
                    for (b = 0; b < c.length; b++) ng.xd(c[b]);
                    c.length = 0
                }
            };
            og(a)
        };
    var Mo = function(a, b) {
            b = void 0 === b ? {} : b;
            this.root = b.root ? b.root : null;
            this.H = b.rootMargin ? pg(b.rootMargin) : [{
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }];
            this.rootMargin = _.Mc(this.H, function(c) {
                return "" + c.value + c.type
            }).join(" ");
            this.B = rg(b.threshold);
            this.o = a;
            this.j = [];
            this.I = [];
            this.C = !1;
            this.m = null;
            this.D = cr(this.l, 100, this)
        },
        gD = function(a) {
            if (a.root) var b = sg(a.root);
            else {
                var c = _.yu(window);
                b = {
                    top: 0,
                    right: c.width,
                    bottom: c.height,
                    left: 0,
                    width: c.width,
                    height: c.height
                }
            }
            a = _.Mc(a.H, function(d, e) {
                return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
            });
            return {
                top: b.top - a[0],
                right: b.right + a[1],
                bottom: b.bottom + a[2],
                left: b.left - a[3],
                width: b.width + a[1] + a[3],
                height: b.height + a[0] + a[2]
            }
        },
        hD = function(a, b, c) {
            if (!b || b.isIntersecting != c.isIntersecting) return !0;
            var d = b.intersectionRatio,
                e = c.intersectionRatio;
            return d == e ? !1 : _.Ig(a.B, function(f) {
                return f < d != f < e
            })
        };
    Mo.prototype.l = function() {
        var a = this,
            b = gD(this);
        _.er(this.j, function(c) {
            var d = c.target,
                e = sg(d),
                f = e.width * e.height;
            var g = Math.max(b.top, e.top);
            var h = Math.min(b.right, e.right),
                k = Math.min(b.bottom, e.bottom),
                l = Math.max(b.left, e.left),
                n = h - l,
                m = k - g;
            g = 0 <= n && 0 <= m ? {
                top: g,
                right: h,
                bottom: k,
                left: l,
                width: n,
                height: m
            } : null;
            h = !!g;
            k = g ? g.width * g.height : 0;
            l = window.performance;
            d = {
                boundingClientRect: e,
                intersectionRatio: f ? k / f : h ? 1 : 0,
                intersectionRect: g || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                },
                isIntersecting: h,
                rootBounds: b,
                target: d,
                time: l && l.now ? l.now() : 0
            };
            hD(a, c.ra, d) && a.I.push(d);
            c.ra = d
        });
        this.I.length && this.o(iD(this), this)
    };
    Mo.prototype.observe = function(a) {
        _.Ig(this.j, function(b) {
            return b.target == a
        }) || (this.j.push({
            target: a,
            ra: null
        }), this.l(), this.C || (this.C = !0, _.db(_.t, "scroll", this.D), _.db(_.t, "resize", this.D), _.t.MutationObserver && !this.m && (this.m = new MutationObserver(this.D), this.m.observe(_.t.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    };
    Mo.prototype.unobserve = function(a) {
        this.j = _.qg(this.j, function(b) {
            return b.target != a
        });
        0 == this.j.length && this.disconnect()
    };
    Mo.prototype.disconnect = function() {
        this.C = !1;
        this.j.length = 0;
        _.Rd(_.t, "scroll", this.D);
        _.Rd(_.t, "resize", this.D);
        this.m && (this.m.disconnect(), this.m = null)
    };
    var iD = function(a) {
        var b = [].concat(_.Nd(a.I));
        a.I.length = 0;
        return b
    };
    var jD = function(a, b, c, d, e, f) {
        _.Bv.call(this);
        this.Ka = a;
        this.status = 1;
        this.C = b;
        this.m = c;
        this.U = d;
        this.Tb = !!e;
        this.l = Math.random();
        this.H = {};
        this.j = null;
        this.B = (0, _.Uq)(this.F, this);
        this.o = f
    };
    _.P(jD, _.Bv);
    jD.prototype.F = function(a) {
        if (!("*" !== this.m && a.origin !== this.m || !this.Tb && a.source != this.C)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.ja(b) && (a = b.i, b.c === this.Ka && a != this.l)) {
                if (2 !== this.status) try {
                    this.status = 2, kD(this), this.j && (this.j(), this.j = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.ja(b)) && this.H.hasOwnProperty(a)) this.H[a](b)
            }
        }
    };
    var kD = function(a) {
        var b = {};
        b.c = a.Ka;
        b.i = a.l;
        a.o && (b.e = a.o);
        a.C.postMessage(JSON.stringify(b), a.m)
    };
    jD.prototype.O = function() {
        if (1 === this.status) {
            try {
                this.C.postMessage && kD(this)
            } catch (a) {}
            window.setTimeout((0, _.Uq)(this.O, this), 50)
        }
    };
    jD.prototype.connect = function(a) {
        a && (this.j = a);
        _.db(window, "message", this.B);
        this.U && this.O()
    };
    var lD = function(a, b, c) {
            a.H[b] = c
        },
        mD = function(a, b, c) {
            var d = {};
            d.c = a.Ka;
            d.i = a.l;
            d.s = b;
            d.p = c;
            try {
                a.C.postMessage(JSON.stringify(d), a.m)
            } catch (e) {}
        };
    jD.prototype.D = function() {
        this.status = 3;
        _.Rd(window, "message", this.B);
        _.Bv.prototype.D.call(this)
    };
    var nD = new y.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        oD = new y.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var pD = function(a) {
        _.R.call(this, a)
    };
    _.P(pD, _.R);
    var qD = function(a) {
        _.R.call(this, a)
    };
    _.P(qD, _.R);
    var rD = function(a) {
        _.R.call(this, a)
    };
    _.P(rD, _.R);
    var sD = function(a) {
            return a.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        tD = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        },
        uD = function(a) {
            return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
        },
        vD = function(a, b) {
            if (3 == sD(b)) return !1;
            a();
            return !0
        },
        wD = function(a, b) {
            if (!vD(a, b)) {
                var c = !1,
                    d = tD(b),
                    e = function() {
                        !c && vD(a, b) && (c = !0, _.Rd(b, d, e))
                    };
                d && _.db(b, d, e)
            }
        };
    var oo = function(a, b) {
            this.j = a;
            this.D = b;
            this.m = {}
        },
        po = function(a) {
            jo() && (document.addEventListener("touchstart", function(b) {
                a.j(902, function() {
                    a.m[b.touches[0].identifier] = Date.now()
                })()
            }, dr), document.addEventListener("touchend", function(b) {
                a.j(902, function() {
                    var c = b.changedTouches[0],
                        d = c.clientX,
                        e = c.clientY,
                        f = c.force;
                    c = a.m[c.identifier];
                    if (void 0 !== c) try {
                        var g = jo(),
                            h = {
                                x: d,
                                y: e,
                                duration_ms: Date.now() - c
                            };
                        if (null == g ? 0 : g.gmaSdk) g.gmaSdk.reportTouchEvent(JSON.stringify(_.w(Object, "assign").call(Object, {}, h, {
                            type: 1,
                            force: f
                        })));
                        else {
                            var k, l, n;
                            null == g || null == (k = g.webkit) || null == (l = k.messageHandlers) || null == (n = l.reportGmaTouchEvent) || n.postMessage(h)
                        }
                    } catch (m) {
                        a.D("paw_sigs", {
                            msg: "reportTouchError",
                            err: m instanceof Error ? m.message : "nonError"
                        })
                    }
                })()
            }, dr))
        },
        ko = function(a, b, c, d, e) {
            var f = 200,
                g = Yn;
            b = void 0 === b ? {} : b;
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            f = void 0 === f ? 200 : f;
            var h = String(Math.floor(2147483647 * he())),
                k = 0,
                l = function(n) {
                    try {
                        var m = "object" === typeof n.data ? n.data : JSON.parse(n.data);
                        h === m.paw_id && (window.clearTimeout(k), window.removeEventListener("message", l), m.signal ? c(m.signal) : m.error && d(m.error))
                    } catch (p) {
                        g("paw_sigs", {
                            msg: "postmessageError",
                            err: p instanceof Error ? p.message : "nonError",
                            data: null == n.data ? "null" : 500 < n.data.length ? n.data.substring(0, 500) : n.data
                        })
                    }
                };
            window.addEventListener("message", function(n) {
                e(903, function() {
                    l(n)
                })()
            });
            a.postMessage(_.w(Object, "assign").call(Object, {}, {
                paw_id: h
            }, b));
            k = window.setTimeout(function() {
                window.removeEventListener("message", l);
                d("PAW GMA postmessage timed out.")
            }, f)
        },
        jo = function() {
            var a = window,
                b, c;
            if (a.gmaSdk || (null == (b = a.webkit) ? 0 : null == (c = b.messageHandlers) ? 0 : c.getGmaViewSignals)) return a;
            try {
                var d = window.parent,
                    e, f;
                if (d.gmaSdk || (null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals)) return d
            } catch (g) {}
            return null
        };
    var yD, xD;
    yD = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new xD;
        this.sideRailProcessedFixedElements = new y.Set;
        this.sideRailAvailableSpace = new y.Map
    };
    _.Kl = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new y.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new y.Map)) : a.google_reactive_ads_global_state = new yD;
        return a.google_reactive_ads_global_state
    };
    xD = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var BD;
    _.zD = function(a) {
        this.j = _.Kl(a).floatingAdsStacking
    };
    _.AD = function(a) {
        a = _.Ju(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    BD = function(a) {
        var b = _.AD(a);
        _.er(a.j.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    _.CD = function(a) {
        this.m = a;
        this.j = null
    };
    _.DD = function(a) {
        if (null == a.j) {
            var b = a.m,
                c = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[c] = 2147483646;
            BD(b);
            a.j = c
        }
    };
    _.ED = function(a) {
        if (null != a.j) {
            var b = a.m;
            delete b.j.maxZIndexRestrictions[a.j];
            BD(b);
            a.j = null
        }
    };
    var Ll, wl, zl;
    Ll = 728 * 1.38;
    _.Nl = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.FD = function(a) {
        var b = _.yl(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    wl = function(a, b) {
        return (a = _.yl(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    zl = function(a) {
        return (a = _.FD(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.yl = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.GD = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    var Ol = 90 * 1.38;
    var HD;
    _.ID = function(a, b) {
        if (!a.body) return null;
        var c = new HD;
        c.apply(a, b);
        return function() {
            _.mv(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.D,
                position: c.I,
                top: c.C
            });
            b.scrollTo(0, c.m)
        }
    };
    HD = function() {
        this.j = this.C = this.I = this.D = null;
        this.m = 0
    };
    HD.prototype.apply = function(a, b) {
        this.D = a.body.style.overflow;
        this.I = a.body.style.position;
        this.C = a.body.style.top;
        this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.m = _.GD(b);
        _.mv(a.body, "top", -this.m + "px")
    };
    _.Bl = function(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                var d = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var e = "__storage_test__" === d
            } catch (f) {
                e = !1
            }
            c = !e
        }
        return c ? null : Jg(a, b)
    };
    _.Al = function(a) {
        return !!a && 1 > a.length
    };
    var JD = function(a) {
        _.Bv.call(this);
        this.j = a;
        this.m = null;
        this.H = {};
        this.B = 0;
        this.C = null
    };
    _.P(JD, _.Bv);
    JD.prototype.D = function() {
        this.C && _.Rd(this.j, "message", this.C);
        _.Bv.prototype.D.call(this)
    };
    JD.prototype.l = function() {
        var a;
        return "function" === typeof(null == (a = this.j) ? void 0 : a.__uspapi) || null != KD(this)
    };
    JD.prototype.o = function(a) {
        var b = {};
        if (this.l()) {
            var c = _.br(function() {
                return a(b)
            });
            LD(this, function(d, e) {
                e && (b = d);
                c()
            });
            setTimeout(c, 500)
        } else a(b)
    };
    var LD = function(a, b) {
            var c;
            "function" === typeof(null == (c = a.j) ? void 0 : c.__uspapi) ? (a = a.j.__uspapi, a("getUSPData", 1, b)) : KD(a) && (MD(a), c = ++a.B, a.H[c] = b, a.m && (b = {}, a.m.postMessage((b.__uspapiCall = {
                command: "getUSPData",
                version: 1,
                callId: c
            }, b), "*")))
        },
        KD = function(a) {
            if (a.m) return a.m;
            a.m = Tu(a.j, "__uspapiLocator");
            return a.m
        },
        MD = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = {};
                    "string" === typeof b.data ? c = JSON.parse(b.data) : c = b.data;
                    var d = c.__uspapiReturn;
                    var e;
                    null == (e = a.H) || e[d.callId](d.returnValue, d.success)
                } catch (f) {}
            }, _.db(a.j, "message", a.C))
        };
    var OD = function(a) {
        _.R.call(this, a, -1, ND)
    };
    _.P(OD, _.R);
    var ND = [1, 2];
    var PD = function(a) {
        _.R.call(this, a)
    };
    _.P(PD, _.R);
    var Bm = function(a) {
        _.Bv.call(this);
        this.C = a;
        this.m = this.j = null;
        this.l = {};
        this.o = 0;
        this.H = !1
    };
    _.P(Bm, _.Bv);
    var QD = function(a) {
            if (!a.H) {
                if (!a.j) {
                    var b = Tu(a.C, "googlefcPresent");
                    a.j = b ? b : null
                }
                a.H = !0
            }
            return !!a.j
        },
        SD = function(a) {
            return new y.Promise(function(b) {
                if (QD(a))
                    if (a.j === a.C) {
                        var c = a.j.googlefc || (a.j.googlefc = {});
                        c.__fci = c.__fci || [];
                        c.__fci.push("loaded", function(e) {
                            b(Xd(PD, e))
                        })
                    } else {
                        RD(a);
                        c = a.o++;
                        a.l[c] = b;
                        var d = {};
                        (0, D.J)(a.j).postMessage((d.__fciCall = {
                            command: "loaded",
                            callId: c
                        }, d), "*")
                    }
            })
        },
        RD = function(a) {
            a.m || (a.m = function(b) {
                try {
                    var c = Xd(PD, b.data.__fciReturn);
                    (0, a.l[z(c, 1)])(c)
                } catch (d) {}
            }, _.db(a.C, "message", a.m))
        };
    var TD = {},
        Ng = (TD[23] = .001, TD[211] = !1, TD[253] = !1, TD[246] = [], TD[226] = [], TD[150] = "", TD[221] = /^true$/.test("false"), TD[36] = /^true$/.test("false"), TD[172] = null, TD[260] = void 0, TD[251] = null, TD),
        Mg = function() {
            this.j = !1
        };
    var Dj = function(a) {
            var b = void 0 === b ? ye(_.t) : b;
            this.id = a;
            this.m = Math.random() < _.Og(23);
            this.j = {
                pvsid: String(b)
            }
        },
        UD = function(a) {
            a = Lg(a);
            var b;
            mh.set(a, (null != (b = mh.get(a)) ? b : 0) + 1)
        },
        lh = function() {
            return [].concat(_.Nd(_.w(mh, "values").call(mh))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        L = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b])
        },
        Fj = function(a, b) {
            b = void 0 === b ? null : b;
            b = void 0 === b ? null : b;
            if (VD()) b = !0;
            else {
                var c = a.m;
                b && 0 <= b && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && _.tx(window, WD(a) || "", void 0, _.G(tw))
        },
        WD = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.jk(a.j, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        XD = function(a) {
            var b = [].concat(_.Nd(_.w(mh, "keys").call(mh)));
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            3 >= b.length ? L(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), L(a, "nw_id", b.join()))
        },
        mi = function(a, b) {
            L(a, "vrg", String(b.kb || b.Ha));
            XD(a);
            L(a, "nslots", lh().toString());
            b = _.ze(Ae).j();
            b.length && L(a, "eid", b.join());
            L(a, "pub_url", document.URL)
        },
        gi = function(a, b, c) {
            c = void 0 === c ? _.Og(23) : c;
            if (void 0 === c || 0 > c || 1 < c) c = _.Og(23);
            Math.random() < c && (a = new Dj(a), b(a), Fj(a, 1))
        },
        mh = new y.Map,
        VD = Rh(function() {
            return !!Nu(_.t.location.href)
        });
    var $g = function() {
        ky.call(this, _.G(ah) || _.G(hx) ? 1 : 0, _.t);
        this.D = 0;
        var a = _.G(ah) || _.G(hx);
        _.t.google_measure_js_timing = a || _.t.google_measure_js_timing
    };
    _.P($g, ky);
    _.YD = function(a) {
        this.context = a
    };
    var ZD = {},
        tj = (ZD.companion_ads = "companionAds", ZD.content = "content", ZD.publisher_ads = "pubads", ZD);
    var oh = function(a) {
        _.R.call(this, a)
    };
    _.P(oh, _.R);
    oh.prototype.getWidth = function() {
        return z(this, 1)
    };
    var sh = function(a, b) {
        return _.A(a, 1, b)
    };
    oh.prototype.getHeight = function() {
        return z(this, 2)
    };
    var rh = function(a, b) {
            return _.A(a, 2, b)
        },
        Fk = function() {
            var a = new oh;
            return _.A(a, 3, !0)
        };
    var Qj = function(a) {
        _.R.call(this, a, -1, $D)
    };
    _.P(Qj, _.R);
    var Nj = function(a) {
            return z(a, 1)
        },
        Pj = function(a, b) {
            return _.A(a, 1, b)
        },
        Oj = function(a, b) {
            return _.jh(a, 2, b)
        },
        $D = [2];
    var np = function(a) {
        _.R.call(this, a)
    };
    _.P(np, _.R);
    var mn = function(a) {
        _.R.call(this, a, -1, aE)
    };
    _.P(mn, _.R);
    var sn = function(a, b) {
            return _.A(a, 1, b)
        },
        qn = function(a, b) {
            return _.jh(a, 2, b)
        },
        aE = [2];
    var Un = function(a) {
        _.R.call(this, a, -1, bE)
    };
    _.P(Un, _.R);
    var rn = function(a, b) {
            af(a, 1, mn, b)
        },
        bE = [1];
    var Sn = function(a) {
        _.R.call(this, a, -1, cE)
    };
    _.P(Sn, _.R);
    var cE = [2, 3];
    var Qn = function(a) {
        _.R.call(this, a)
    };
    _.P(Qn, _.R);
    var dE = function(a) {
        _.R.call(this, a)
    };
    _.P(dE, _.R);
    dE.prototype.setTagForChildDirectedTreatment = function(a) {
        return _.A(this, 5, a)
    };
    dE.prototype.clearTagForChildDirectedTreatment = function() {
        return Fe(this, 5)
    };
    dE.prototype.setTagForUnderAgeOfConsent = function(a) {
        return _.A(this, 6, a)
    };
    var ik = function(a) {
        _.R.call(this, a)
    };
    _.P(ik, _.R);
    var fE = function(a) {
        _.R.call(this, a, -1, eE)
    };
    _.P(fE, _.R);
    fE.prototype.ta = function() {
        return Uc(this, Qj, 14)
    };
    fE.prototype.Qa = function() {
        return Le(this, ik, 18)
    };
    var gE = function(a) {
        return Le(a, dE, 25)
    };
    fE.prototype.getCorrelator = function() {
        return z(this, 26)
    };
    fE.prototype.setCorrelator = function(a) {
        return _.A(this, 26, a)
    };
    fE.prototype.zc = function() {
        return Rn(this, Qn, 33)
    };
    var eE = [2, 3, 14];
    var Lh = function() {
        this.j = new y.Map
    };
    var hE = function() {
            this.m = {};
            this.j = new fE;
            this.D = new y.Map;
            this.j.setCorrelator(bv());
            _.Og(36) && _.A(this.j, 15, !0)
        },
        iE = function(a) {
            var b = $h(),
                c = a.getDomId();
            if (c && !b.m.hasOwnProperty(c)) {
                var d = _.ze(Lh),
                    e = ++_.ze($g).D;
                d.j.set(c, e);
                _.A(a, 20, e);
                b.m[c] = a
            }
        },
        Mm = function(a, b) {
            return a.m[b]
        },
        $h = function() {
            return _.ze(hE)
        };
    var jE = Rh(Oh);
    var yi = ["auto", "inherit", "100%"],
        zi = yi.concat(["none"]);
    var Vl = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        ti(a, function(e) {
            return d = xi(e, b, 10, 10)
        }, c);
        return d
    };
    var kE = function(a, b, c, d, e, f) {
            this.D = _.gv(a);
            this.m = _.gv(b);
            this.I = c;
            this.j = _.gv(d);
            this.C = e;
            this.l = f
        },
        lE = function(a) {
            return JSON.stringify({
                windowCoords_t: a.D.top,
                windowCoords_r: a.D.right,
                windowCoords_b: a.D.bottom,
                windowCoords_l: a.D.left,
                frameCoords_t: a.m.top,
                frameCoords_r: a.m.right,
                frameCoords_b: a.m.bottom,
                frameCoords_l: a.m.left,
                styleZIndex: a.I,
                allowedExpansion_t: a.j.top,
                allowedExpansion_r: a.j.right,
                allowedExpansion_b: a.j.bottom,
                allowedExpansion_l: a.j.left,
                xInView: a.C,
                yInView: a.l
            })
        },
        mE = function(a) {
            var b = window,
                c = b.screenX || b.screenLeft || 0,
                d = b.screenY || b.screenTop || 0;
            b = new _.fv(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
            c = qv(a);
            d = _.Fg(_.Gg, a);
            var e = new hv(c.x, c.y, d.width, d.height);
            c = iv(e);
            d = String(Eg(a, "zIndex"));
            var f = new _.fv(0, Infinity, Infinity, 0);
            for (var g = uu(a), h = g.j.body, k = g.j.documentElement, l = zu(g.j); a = pv(a);)
                if (!(_.Er && 0 == a.clientWidth || Hr && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != Eg(a, "overflow")) {
                    var n = qv(a),
                        m = new _.Gh(a.clientLeft, a.clientTop);
                    n.x += m.x;
                    n.y += m.y;
                    f.top = Math.max(f.top, n.y);
                    f.right = Math.min(f.right, n.x + a.clientWidth);
                    f.bottom = Math.min(f.bottom, n.y + a.clientHeight);
                    f.left = Math.max(f.left, n.x)
                }
            a = l.scrollLeft;
            l = l.scrollTop;
            f.left = Math.max(f.left, a);
            f.top = Math.max(f.top, l);
            g = g.j;
            g = _.yu(g.parentWindow || g.defaultView || window);
            f.right = Math.min(f.right, a + g.width);
            f.bottom = Math.min(f.bottom, l + g.height);
            l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new hv(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? jv(e, f) : null;
            g = a = 0;
            l && !(new _.Jh(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
            l = new _.fv(0, 0, 0, 0);
            if (h = f)(e = jv(e, f)) ? (k = iv(f), n = iv(e), h = n.right != k.left && k.right != n.left, k = n.bottom != k.top && k.bottom != n.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
            h && (l = new _.fv(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
            return new kE(b, c, d, l, a, g)
        };
    var nE = function(a) {
        this.I = a;
        this.C = null;
        this.O = this.status = 0;
        this.m = null;
        this.Ka = "sfchannel" + a
    };
    var oE = function(a) {
        this.j = a
    };
    var pE = function(a, b) {
        this.uc = a;
        this.vc = b;
        this.m = this.j = !1
    };
    var qE = function(a, b, c, d, e, f, g, h) {
        h = void 0 === h ? [] : h;
        this.m = a;
        this.D = b;
        this.I = c;
        this.permissions = d;
        this.metadata = e;
        this.C = f;
        this.Tb = g;
        this.hostpageLibraryTokens = h;
        this.j = ""
    };
    var rE = function(a, b) {
        this.m = a;
        this.I = b
    };
    rE.prototype.j = function(a) {
        this.I && a && (a.sentinel = this.I);
        return JSON.stringify(a)
    };
    var sE = function(a, b, c) {
        rE.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.P(sE, rE);
    sE.prototype.j = function() {
        return rE.prototype.j.call(this, {
            uid: this.m,
            version: this.version
        })
    };
    var tE = function(a, b, c, d) {
        rE.call(this, a, void 0 === d ? "" : d);
        this.C = b;
        this.D = c
    };
    _.P(tE, rE);
    tE.prototype.j = function() {
        return rE.prototype.j.call(this, {
            uid: this.m,
            initialWidth: this.C,
            initialHeight: this.D
        })
    };
    var uE = function(a, b, c) {
        rE.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.P(uE, rE);
    uE.prototype.j = function() {
        return rE.prototype.j.call(this, {
            uid: this.m,
            description: this.description
        })
    };
    var vE = function(a, b, c, d) {
        rE.call(this, a, void 0 === d ? "" : d);
        this.D = b;
        this.push = c
    };
    _.P(vE, rE);
    vE.prototype.j = function() {
        return rE.prototype.j.call(this, {
            uid: this.m,
            expand_t: this.D.top,
            expand_r: this.D.right,
            expand_b: this.D.bottom,
            expand_l: this.D.left,
            push: this.push
        })
    };
    var wE = function(a, b) {
        rE.call(this, a, void 0 === b ? "" : b)
    };
    _.P(wE, rE);
    wE.prototype.j = function() {
        return rE.prototype.j.call(this, {
            uid: this.m
        })
    };
    var xE = function(a, b, c) {
        rE.call(this, a, void 0 === c ? "" : c);
        this.C = b
    };
    _.P(xE, rE);
    xE.prototype.j = function() {
        var a = {
            uid: this.m,
            newGeometry: lE(this.C)
        };
        return rE.prototype.j.call(this, a)
    };
    var yE = function(a, b, c, d, e, f) {
        xE.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.D = d;
        this.push = e
    };
    _.P(yE, xE);
    yE.prototype.j = function() {
        var a = {
            uid: this.m,
            success: this.success,
            newGeometry: lE(this.C),
            expand_t: this.D.top,
            expand_r: this.D.right,
            expand_b: this.D.bottom,
            expand_l: this.D.left,
            push: this.push
        };
        this.I && (a.sentinel = this.I);
        return JSON.stringify(a)
    };
    var zE = function(a, b, c, d) {
        rE.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.P(zE, rE);
    zE.prototype.j = function() {
        return rE.prototype.j.call(this, {
            uid: this.m,
            width: this.width,
            height: this.height
        })
    };
    var AE = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        Fd(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var BE = function() {
            this.j = []
        },
        DE = function(a, b, c, d, e) {
            a.j.push(new CE(b, c, d, e))
        },
        EE = function(a) {
            for (var b = a.j.length - 1; 0 <= b; b--) {
                var c = a.j[b];
                c.m ? (c.D.style.removeProperty(c.j), c.D.style.setProperty(c.j, String(c.I), c.C)) : c.D.style[c.j] = c.I
            }
            a.j.length = 0
        },
        CE = function(a, b, c, d) {
            this.D = a;
            this.j = (this.m = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.I = this.m ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.C = this.m ? a.style.getPropertyPriority(this.j) : void 0;
            this.m ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
        };
    var FE = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        GE = function() {
            var a = window,
                b = _.se(a);
            b && FE({
                label: "2",
                type: 9,
                value: b
            }, a)
        },
        HE = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = _.se(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && FE(_.w(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (_.se() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        };
    var ME = function(a) {
        nE.call(this, a.uniqueId);
        var b = this;
        this.H = a.nh;
        this.B = 1 === a.size;
        this.Z = new pE(a.permissions.uc && !this.B, a.permissions.vc && !this.B);
        this.l = a.od;
        var c;
        this.ba = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.Y = "file:" == c ? "*" : c + "//" + d;
        this.ha = !!a.Tb;
        c = "//" + a.ce + (_.G(Hw) ? ".safeframe.usercontent.goog" : ".safeframe.googlesyndication.com");
        this.K = a.ce ? c : "//tpc.googlesyndication.com";
        this.ka = a.Bc ? "*" : "https:" + this.K;
        this.fa = !!a.Ce;
        this.ia = IE(a);
        this.D = new BE;
        JE(this, a.od, a.size);
        this.C = this.T = mE(a.od);
        this.U = a.Bf || "1-0-40";
        var e;
        this.ja = null != (e = a.ve) ? e : "";
        KE(this, a);
        this.va = HE(412, function() {
            return LE(b)
        }, a.Ga);
        this.F = -1;
        this.o = 0;
        var f = HE(415, function() {
            b.j && (b.j.name = "", a.Td && a.Td(), _.Rd(b.j, "load", f))
        }, a.Ga);
        _.db(this.j, "load", f);
        this.gd = HE(413, this.gd, a.Ga);
        this.pd = HE(417, this.pd, a.Ga);
        this.rd = HE(419, this.rd, a.Ga);
        this.bd = HE(411, this.bd, a.Ga);
        this.Zc = HE(409, this.Zc, a.Ga);
        this.M = HE(410, this.M, a.Ga);
        this.kd = HE(416, this.kd, a.Ga);
        this.m = new jD(this.Ka, this.j.contentWindow, this.ka, !1);
        lD(this.m, "init_done", (0, _.Uq)(this.gd, this));
        lD(this.m, "register_done", (0, _.Uq)(this.pd, this));
        lD(this.m, "report_error", (0, _.Uq)(this.rd, this));
        lD(this.m, "expand_request", (0, _.Uq)(this.bd, this));
        lD(this.m, "collapse_request", (0, _.Uq)(this.Zc, this));
        lD(this.m, "creative_geometry_update", (0, _.Uq)(this.M, this));
        this.m.connect((0, _.Uq)(this.kd, this))
    };
    _.P(ME, nE);
    var JE = function(a, b, c) {
            a.B ? (b.style.width = _.sv("100%", !0), b.style.height = _.sv("auto", !0)) : (b.style.width = _.sv(c.width, !0), b.style.height = _.sv(c.height, !0))
        },
        KE = function(a, b) {
            var c = b.Bc,
                d = b.content,
                e = b.Rb,
                f = b.size,
                g = void 0 === b.Sb ? "3rd party ad content" : b.Sb,
                h = b.wc;
            b = b.Vc;
            var k = {
                shared: {
                    sf_ver: a.U,
                    ck_on: fy() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = c ? "" : null != d ? d : "";
            d = a.U + ";" + d.length + ";" + d;
            k = new qE(a.I, a.Y, a.T, a.Z, new oE(k), a.B, a.ha, a.ba);
            var l = {};
            l.uid = k.m;
            l.hostPeerName = k.D;
            l.initialGeometry = lE(k.I);
            var n = k.permissions;
            n = JSON.stringify({
                expandByOverlay: n.uc,
                expandByPush: n.vc,
                readCookie: n.j,
                writeCookie: n.m
            });
            l = (l.permissions = n, l.metadata = JSON.stringify(k.metadata.j), l.reportCreativeGeometry = k.C, l.isDifferentSourceWindow = k.Tb, l.goog_safeframe_hlt = Dz(k.hostpageLibraryTokens), l);
            k.j && (l.sentinel = k.j);
            k = JSON.stringify(l);
            d += k;
            a.fa && f instanceof _.Jh && (k = _.Au(_.tu(a.l)), l = _.Au(_.tu(a.l)).location.protocol + a.K, nz || Gj(k.document, oz), nz++, k.google_eas_queue = k.google_eas_queue || [], k.google_eas_queue.push({
                a: e,
                b: l,
                c: f.width,
                d: f.height,
                e: "sf-gdn-exp-" + nz,
                f: void 0,
                g: void 0,
                h: void 0,
                i: void 0
            }));
            k = f.width;
            f = f.height;
            a.B && (f = k = 0);
            l = {};
            e = (l.id = e, l.title = g, l.name = d, l.scrolling = "no", l.marginWidth = "0", l.marginHeight = "0", l.width = String(k), l.height = String(f), l["data-is-safeframe"] = "true", l);
            void 0 === c && (g = _.Au(_.tu(a.l)), f = a.ja, d = a.K, (k = f) && (k = "?" + k), d = (void 0 === d ? "//tpc.googlesyndication.com" : d) + ("/safeframe/" + a.U + "/html/container.html" + k), (k = AE(g)) && (d += (f ? "&" : "?") + "n=" + k), f = "https:" + d, d = [], a.fa && (k = Nu(g.location.href), g = d.push, k = [0 < k.length ? "google_debug" + (k ? "=" + k : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.I, "&p=", encodeURIComponent(_.t.document.location.protocol), "//", encodeURIComponent(_.t.document.location.host)].join(""), g.call(d, k)), d.length && (f += "#" + d.join("&")), e.src = f);
            null !== a.ia && (e.sandbox = a.ia);
            h && (e.allow = h);
            b && (e.credentialless = "true");
            e.role = "region";
            e["aria-label"] = "Advertisement";
            e.tabIndex = "0";
            c ? (a.j = c, wu(a.j, e)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), e && Ca(c, e), h = _.Cd("IFRAME"), wu(h, c), a.j = h);
            a.B && (a.j.style.minWidth = "100%");
            a.l.appendChild(a.j)
        };
    q = ME.prototype;
    q.kd = function() {
        _.db(window, "resize", this.va);
        _.db(window, "scroll", this.va)
    };
    q.gd = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Bi(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new sE(b.uid, b.version, b.sentinel);
            if (this.I !== c.m || this.U !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.H) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    q.pd = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Bi(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.I !== (new tE(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).m) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.H) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    q.rd = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Bi(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new uE(b.uid, b.description, b.sentinel);
            if (this.I !== c.m) throw Error("Wrong source container");
            var d;
            null == (d = this.H) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.H) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    q.bd = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.O) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Bi(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new vE(b.uid, new _.fv(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.I !== c.m) throw Error("Wrong source container");
            if (!(0 <= c.D.top && 0 <= c.D.left && 0 <= c.D.bottom && 0 <= c.D.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.Z.vc || !c.push && this.Z.uc) {
                var e = c.D,
                    f = c.push,
                    g = this.C = mE(this.j);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f)
                        for (var h = this.j.parentNode; h && h.style; h = h.parentNode) DE(this.D, h, "overflowX", "visible", "important"), DE(this.D, h, "overflowY", "visible", "important");
                    var k = iv(new hv(0, 0, this.C.m.getWidth(), this.C.m.getHeight()));
                    _.ja(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    DE(this.D, this.l, "position", "relative");
                    DE(this.D, this.j, "position", "absolute");
                    if (f) {
                        var l = k.getWidth();
                        DE(this.D, this.l, "width", l + "px");
                        var n = k.getHeight();
                        DE(this.D, this.l, "height", n + "px")
                    } else DE(this.D, this.j, "zIndex", "10000");
                    var m = k.getWidth();
                    DE(this.D, this.j, "width", m + "px");
                    var p = k.getHeight();
                    DE(this.D, this.j, "height", p + "px");
                    DE(this.D, this.j, "left", k.left + "px");
                    DE(this.D, this.j, "top", k.top + "px");
                    this.O = 2;
                    this.C = mE(this.j);
                    d = !0
                } else d = !1
            }
            a = d;
            mD(this.m, "expand_response", (new yE(this.I, a, this.C, c.D, c.push)).j());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (u) {
            var r;
            null == (r = this.H) || r.error("Invalid EXPAND_REQUEST message. Reason: " + u.message)
        }
    };
    q.Zc = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (2 != this.O) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Bi(b.uid)) throw Error("Cannot parse JSON message");
            if (this.I !== (new wE(b.uid, b.sentinel)).m) throw Error("Wrong source container");
            EE(this.D);
            this.O = 0;
            this.j && (this.C = mE(this.j));
            mD(this.m, "collapse_response", (new xE(this.I, this.C)).j())
        } catch (d) {
            var c;
            null == (c = this.H) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var LE = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.o) {
            case 0:
                NE(a);
                a.F = window.setTimeout((0, _.Uq)(a.P, a), 1E3);
                a.o = 1;
                break;
            case 1:
                a.o = 2;
                break;
            case 2:
                a.o = 2
        }
    };
    ME.prototype.M = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ja(b) || !Bi(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new zE(b.uid, b.width, b.height, b.sentinel);
            if (this.I !== c.m) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.B) d !== this.j.height && (this.j.height = d, LE(this));
            else {
                var e;
                null == (e = this.H) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.H) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    ME.prototype.P = function() {
        if (1 == this.status || 2 == this.status) switch (this.o) {
            case 1:
                this.o = 0;
                break;
            case 2:
                NE(this), this.F = window.setTimeout((0, _.Uq)(this.P, this), 1E3), this.o = 1
        }
    };
    var NE = function(a) {
            a.C = mE(a.j);
            mD(a.m, "geometry_update", (new xE(a.I, a.C)).j())
        },
        IE = function(a) {
            var b = null;
            a.ee && (b = a.ee);
            return null == b ? null : b.join(" ")
        },
        OE = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        PE = ["allow-top-navigation"],
        QE = ["allow-same-origin"],
        RE = Qu([].concat(_.Nd(OE), _.Nd(PE)));
    Qu([].concat(_.Nd(OE), _.Nd(QE)));
    Qu([].concat(_.Nd(OE), _.Nd(PE), _.Nd(QE)));
    var SE = Q(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        TE = {
            bf: function(a) {
                if ("string" !== typeof a.version) throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if ("string" !== typeof a.ac) throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.ac)) throw new RangeError("Invalid subdomain: " + a.ac);
                return a.Lf ? Kd("https://" + a.ac + ".safeframe.usercontent.goog/safeframe/" + a.version + "/html/container.html") : Kd("https://" + a.ac + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            Ah: function(a) {
                return C(SE, a)
            }
        };
    var Ei = function(a, b) {
        try {
            ob(qo(a, b))
        } catch (c) {}
    };
    var UE = function(a) {
        _.R.call(this, a)
    };
    _.P(UE, _.R);
    var VE = [UE, 4, Bs, 2, Bs, 1, Bs, 3, Bs, 5, Es];
    var WE = [.05, .1, .2, .5],
        XE = [0, .5, 1],
        YE = function(a) {
            a = Df(a);
            if (!a) return -1;
            try {
                var b = tz(a.document);
                var c = new _.Jh(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.Jh(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        ZE = function(a, b) {
            return 0 >= a || 0 >= b ? [] : _.Mc(WE, function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        aF = function(a) {
            this.C = a.G;
            this.D = a.Xa;
            this.H = a.rb;
            this.m = null;
            this.I = a.Ga;
            this.j = $E(this);
            this.l = a.Ff || !1
        };
    aF.prototype.getSlotId = function() {
        return this.m
    };
    var cF = function(a, b) {
            if (a.j) {
                if (null != a.m) {
                    try {
                        bF(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.I && a.I(c)
                    }
                    a.j && a.j.unobserve(a.D)
                }
                a.m = b;
                a.j.observe(a.D)
            }
        },
        $E = function(a) {
            var b = a.D.offsetWidth * a.D.offsetHeight,
                c = YE(a.C);
            b = [].concat(_.Nd(XE), _.Nd(ZE(c, b)));
            la(b);
            return _.t.IntersectionObserver ? new _.t.IntersectionObserver(function(d) {
                return dF(a, d)
            }, {
                threshold: b
            }) : new Mo(function(d) {
                return dF(a, d)
            }, {
                threshold: b
            })
        },
        dF = function(a, b) {
            try {
                var c = YE(a.C);
                _.er(b, function(d) {
                    a.l && bF(a, Math.round(d.time), d.boundingClientRect.width * d.boundingClientRect.height, d.intersectionRect.width * d.intersectionRect.height, c, d.isIntersecting)
                })
            } catch (d) {
                a.I && a.I(d)
            }
        },
        bF = function(a, b, c, d, e, f) {
            if (null == a.m) throw Error("Not Attached.");
            var g = new UE;
            c = _.A(g, 1, c);
            d = _.A(c, 2, d);
            e = _.A(d, 3, e);
            b = _.A(e, 4, b);
            f = _.A(b, 5, f);
            f = mc(We(f, VE), 4);
            ly(a.H, "1", 10, f, void 0, a.m)
        };
    var eF = function(a, b) {
            this.j = a;
            this.m = b
        },
        fF = function(a) {
            if (a.j.frames.google_ads_top_frame) return !0;
            var b = Uu(a.j);
            b = b && b.contentWindow;
            if (!b) return !1;
            b.addEventListener("message", function(c) {
                var d = c.ports;
                "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
                    msgType: "__goog_top_url_resp",
                    topUrl: a.m
                })
            }, !1);
            return !0
        };
    var Pi = function(a) {
        _.R.call(this, a)
    };
    _.P(Pi, _.R);
    var Ri = [1, 3];
    var Td = {
        Zg: 0,
        Wg: 1,
        Ug: 2,
        Vg: 3,
        Yg: 5,
        Xg: 7
    };
    var gF = Q(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        Ji = C(gF);
    var hF = function() {
            this.id = "goog_" + pu++
        },
        iF = function(a) {
            _.Bv.call(this);
            this.context = a;
            this.o = new y.Map
        };
    _.P(iF, _.Bv);
    iF.prototype.D = function() {
        _.Bv.prototype.D.call(this);
        this.o.clear()
    };
    var kF = function(a, b, c) {
            if (a.I) return function() {};
            var d = "string" === typeof b ? b : b.id,
                e, f, g = null != (f = null == (e = a.o.get(d)) ? void 0 : e.add(c)) ? f : new y.Set([c]);
            a.o.set(d, g);
            return function() {
                return void jF(a, b, c)
            }
        },
        lF = function(a, b, c) {
            c = void 0 === c ? function() {
                return !0
            } : c;
            return new y.Promise(function(d) {
                var e = kF(a, b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        jF = function(a, b, c) {
            var d;
            return !(null == (d = a.o.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        };
    iF.prototype.dispatchEvent = function(a, b, c) {
        var d = this,
            e, f, g, h, k, l, n;
        return _.fb(function(m) {
            if (1 == m.j) {
                e = "string" === typeof a ? a : a.id;
                f = d.o.get(e);
                if (null == (g = f) || !g.size) return m.return();
                h = "function" === typeof window.CustomEvent ? new CustomEvent(e, {
                    detail: c,
                    bubbles: !0,
                    cancelable: !0
                }) : function() {
                    var p = document.createEvent("CustomEvent");
                    p.initCustomEvent(e, !0, !0, c);
                    return p
                }();
                k = {};
                l = _.B(f);
                n = l.next()
            }
            if (5 != m.j) {
                if (n.done) {
                    m.j = 0;
                    return
                }
                k.cc = n.value;
                return gb(m, 0, 5)
            }
            _.eh(d.context, b, function(p) {
                return function() {
                    d.o.has(e) && f.has(p.cc) && p.cc(h)
                }
            }(k), !0);
            k = {
                cc: k.cc
            };
            n = l.next();
            m.j = 2
        })
    };
    var mF = new hF,
        nF = new hF,
        Go = new hF,
        oF = new hF,
        Jo = new hF,
        pF = new hF,
        qF = new hF,
        wo = new hF,
        rF = new hF,
        sF = new hF;
    var tF = function() {
        this.data = void 0;
        this.status = 0;
        this.j = []
    };
    tF.prototype.yc = function() {
        return this.j
    };
    var uF, yF, BF, km, CF, xF, wF, vF, DF;
    uF = function() {
        this.j = new y.Map;
        this.l = 0;
        this.m = new y.Map;
        this.qc = null;
        this.C = this.I = this.o = this.D = 0;
        this.H = new tF
    };
    yF = function(a, b) {
        a.j.get(b) || (a.j.set(b, {
            nb: !0,
            nd: "",
            sb: "",
            be: 0,
            Pd: 0,
            ld: [],
            md: [],
            fb: !1
        }), _.Jm(b, function() {
            a.j.delete(b);
            vF(a, b)
        }), kF(b, nF, function(c) {
            c = c.detail;
            var d = (0, D.J)(a.j.get(b));
            d.nd = z(c, 33) || "";
            d.fb = !0;
            wF(a, b, function() {
                return void(d.nd = "")
            });
            xF(a, b, function() {
                return void(d.fb = !1)
            })
        }))
    };
    _.Ho = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.nb) ? d : !1
    };
    _.zF = function(a, b) {
        if (a = a.j.get(b)) a.nb = !1
    };
    _.AF = function(a, b) {
        if (a = a.j.get(b)) a.nb = !0
    };
    BF = function(a, b) {
        if (!b.length) return [];
        var c = Lg(b[0].getAdUnitPath());
        b.every(function(g) {
            return Lg(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.B(a.j);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.B(e.value);
            e = f.next().value;
            (f = f.next().value.nd) && Lg(e.getAdUnitPath()) === c && !_.w(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    km = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.sb) ? d : ""
    };
    CF = function(a, b) {
        return (a = a.j.get(b)) ? a.be - 1 : 0
    };
    xF = function(a, b, c) {
        (a = a.j.get(b)) && a.ld.push(c)
    };
    wF = function(a, b, c) {
        (a = a.j.get(b)) && a.md.push(c)
    };
    vF = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.md.slice(), a.md.length = 0, a = _.B(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    DF = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.ld.slice(), a.ld.length = 0, a = _.B(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    uF.prototype.fb = function(a) {
        var b, c;
        return null != (c = null == (b = this.j.get(a)) ? void 0 : b.fb) ? c : !1
    };
    var EF = function(a, b, c) {
        if (a = a.j.get(b)) a.qd = c
    };
    var FF = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a
    };
    var Z = function(a, b, c) {
        ez.call(this, b, c);
        this.context = a
    };
    _.P(Z, ez);
    Z.prototype.U = function(a) {
        bh(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var GF = function(a, b, c, d, e) {
        var f = null,
            g = _.Xg(a.context, b, e);
        _.db(c, d, g) && (f = function() {
            return _.Rd(c, d, g)
        }, _.Jm(a, f));
        return f
    };
    var HF = /(<head(\s+[^>]*)?>)/i,
        kp = function(a, b, c, d, e) {
            Z.call(this, a, 665);
            this.A = V(this);
            this.l = W(this, b);
            this.B = X(this, c);
            this.F = W(this, d);
            this.o = W(this, e)
        };
    _.P(kp, Z);
    kp.prototype.j = function() {
        var a;
        0 === this.l.value.kind && null != (a = this.B.value) && z(a, 1) ? (a = this.l.value.Ia, this.o.value || Ha() || (a = a.replace(HF, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")), this.F.value && !this.o.value && (a = a.replace(HF, '$1<meta name="referrer" content="origin">')), this.A.j({
            kind: 0,
            Ia: a
        })) : this.A.j(this.l.value)
    };
    var Op = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 718);
        this.B = X(this, c);
        this.l = X(this, d);
        hz(this, e);
        this.F = W(this, f);
        this.o = W(this, g);
        this.M = W(this, h);
        this.K = lF(b, rF)
    };
    _.P(Op, Z);
    Op.prototype.j = function() {
        var a = this,
            b, c, d;
        return _.fb(function(e) {
            if (1 == e.j) {
                var f = !a.M.value;
                if (null == a.l.value || "height" !== a.B.value || f) return e.return();
                b = a.F.value;
                c = a.o.value;
                IF(c, !1);
                _.mv(c, "min-width", "100%");
                _.mv(b, "min-width", "100%");
                return gb(e, a.K, 2)
            }
            if (a.I) return e.return();
            d = b.contentDocument;
            if (!d) return e.return();
            f = d.body.offsetWidth;
            b.setAttribute("height", String(d.body.offsetHeight));
            b.setAttribute("width", String(f));
            IF(c, !0);
            e.j = 0
        })
    };
    var IF = function(a, b) {
        _.mv(a, "visibility", b ? "visible" : "hidden")
    };
    var fj = new y.Map,
        ej = new y.Map;
    var hj = function(a, b) {
        this.push = J(a, 76, b.push.bind(b))
    };
    var jj = function(a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    jj.prototype.getMessageId = function() {
        return this.messageId
    };
    jj.prototype.getMessageArgs = function() {
        return this.messageArgs
    };
    var JF = N(2),
        KF = N(3),
        LF = N(4),
        MF = N(5),
        NF = N(6),
        OF = N(12),
        PF = N(14),
        QF = N(16),
        RF = N(19),
        SF = N(20),
        an = N(23),
        bn = N(26),
        TF = N(28),
        UF = N(149),
        VF = N(30),
        WF = N(31),
        XF = N(34),
        YF = N(35),
        ZF = N(36),
        Nn = N(38),
        $F = N(40),
        aG = N(48),
        bG = N(50),
        cG = N(60),
        dG = N(63),
        eG = N(64),
        fG = N(66),
        gG = N(68),
        hG = N(69),
        iG = N(70),
        jG = N(71),
        kG = N(78),
        lG = N(80),
        mG = N(82),
        nG = N(84),
        oG = N(85),
        pG = N(87),
        Rj = N(88),
        qG = N(92),
        rG = N(93),
        sG = N(99),
        tG = N(103),
        uG = N(104),
        vG = N(105),
        wG = N(106),
        xG = N(107),
        yG = N(108),
        zG = N(113),
        AG = N(114),
        BG = N(115),
        CG = N(117),
        DG = N(118),
        EG = N(119),
        lk = N(121),
        FG = N(122),
        GG = N(123),
        Zn = N(125),
        HG = N(126),
        IG = N(127),
        Gn = N(144),
        tn = N(129),
        vn = N(132),
        JG = N(134),
        KG = N(135),
        LG = N(136),
        MG = N(137),
        NG = N(138),
        OG = N(139),
        PG = N(140),
        so = N(142),
        QG = N(143),
        RG = N(145),
        SG = N(147),
        Tn = N(148);
    var TG = function(a, b, c) {
        var d = this;
        this.addEventListener = J(a, 86, function(e, f) {
            if ("function" !== typeof f) return O(b, lj("Service.addEventListener", [e, f])), d;
            var g = mj(e);
            if (!g) return O(b, rG(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = J(a, 904, function(e, f) {
            var g = mj(e);
            "function" === typeof f && g ? c.removeEventListener(g, f) : O(b, lj("Service.removeEventListener", [e, f]))
        });
        this.getSlots = J(a, 573, function() {
            return c.j.map(function(e) {
                return (0, D.J)(e.j)
            })
        });
        this.getSlotIdMap = J(a, 574, function() {
            for (var e = {}, f = _.B(c.j), g = f.next(); !g.done; g = f.next()) g = g.value, e[g.toString()] = g.j;
            return e
        });
        this.enable = J(a, 87, function() {
            return void c.enable()
        }, !0);
        this.getName = J(a, 575, function() {
            return c.getName()
        })
    };
    var nj = function(a, b, c) {
        TG.call(this, a, b, c);
        this.notifyUnfilledSlots = J(a, 69, function(d) {
            c.nb && UG(c, VG(c, d))
        });
        this.refreshAllSlots = J(a, 60, function() {
            c.nb && UG(c)
        });
        this.setVideoSession = J(a, 61, function(d, e, f) {
            c.M = e;
            c.Z = f;
            "number" === typeof d && (e = $h().j, _.A(e, 29, d))
        });
        this.getDisplayAdsCorrelator = J(a, 62, function(d) {
            return WG(c, void 0 === d ? "" : d)
        });
        this.getVideoStreamCorrelator = J(a, 63, function() {
            var d = $h().j;
            d = z(d, 29);
            return null != d ? d : 0
        });
        this.isSlotAPersistentRoadblock = J(a, 64, function(d) {
            var e = _.w(c.j, "find").call(c.j, function(f) {
                return f.j === d
            });
            return !!e && XG(c, e)
        });
        this.onImplementationLoaded = J(a, 65, function() {
            c.C.info(aG("GPT CompanionAds"))
        });
        this.slotRenderEnded = J(a, 67, function(d, e, f) {
            var g = _.w(c.j, "find").call(c.j, function(h) {
                return h.j === d
            });
            return g && YG(c, g, e, f)
        });
        this.setRefreshUnfilledSlots = J(a, 59, function(d) {
            return c.setRefreshUnfilledSlots(d)
        })
    };
    _.P(nj, TG);
    var pj = function(a, b, c) {
        TG.call(this, a, b, c);
        this.setContent = J(a, 72, function(d) {
            var e = _.w(c.j, "find").call(c.j, function(f) {
                return f.j === d
            });
            O(b, Gn(), e)
        })
    };
    _.P(pj, TG);
    var ZG = Q(["https://console.googletagservices.com/pubconsole/loader.js"]),
        Hj = C(ZG),
        Kj, Jj = !1,
        Cj = !1,
        Ej = !1;
    var Kn = function(a, b) {
        this.getAllEvents = J(a, 563, function() {
            return Cj ? $G(b).slice() : []
        });
        this.getEventsBySlot = J(a, 565, function(c) {
            return Cj ? aH(b, c).slice() : []
        });
        this.getEventsByLevel = J(a, 566, function(c) {
            return Cj ? bH(b, c).slice() : []
        })
    };
    var Uj = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            g = $h().j,
            h = (0, D.J)(Mm($h(), f.getDomId()));
        this.set = J(a, 83, function(k, l) {
            "page_url" === k && l && (k = [Oj(Pj(new Qj, k), [String(l)])], Rc(h, 3, k));
            return e
        });
        this.get = J(a, 84, function(k) {
            if ("page_url" !== k) return null;
            var l, n;
            return null != (n = null == (l = (E = (0, D.J)(h.ta()), _.w(E, "find")).call(E, function(m) {
                return Nj(m) === k
            })) ? void 0 : Xk(l, 2)[0]) ? n : null
        });
        this.setClickUrl = J(a, 79, function(k) {
            "string" === typeof k ? h.setClickUrl(k) : O(b, lj("Slot.setClickUrl", [k]), f);
            return e
        });
        this.setTargeting = J(a, 81, function(k, l) {
            Sj(f, h, k, l, b);
            return e
        });
        this.updateTargetingFromMap = J(a, 85, function(k) {
            Tj(f, h, k, b);
            return e
        });
        this.display = J(a, 78, function() {
            cH(d, f, Mh(g, $h().m))
        });
        this.setTagForChildDirectedTreatment = J(a, 80, function(k) {
            if (0 === k || 1 === k) {
                var l = gE(g) || new dE;
                l.setTagForChildDirectedTreatment(k);
                _.Rg(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = J(a, 567, function(k) {
            "boolean" === typeof k ? _.A(h, 12, k) : O(b, lj("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = J(a, 448, function(k) {
            if (0 === k || 1 === k) {
                var l = gE(g) || new dE;
                l.setTagForUnderAgeOfConsent(k);
                _.Rg(g, 25, l)
            }
            return e
        })
    };
    var sl = function(a, b) {
        this.push = J(a, 932, function(c) {
            b.push(c)
        })
    };
    var jn = {
        Tg: 0,
        Qg: 1,
        Rg: 2,
        Sg: 3
    };
    var Xj = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5
        },
        Zj = {
            IAB_AUDIENCE_1_1: 1,
            IAB_CONTENT_2_1: 2,
            IAB_CONTENT_2_2: 3
        },
        Yj = {
            PURCHASED: 1,
            ORGANIC: 2
        };
    var uk = function(a) {
            var b = this;
            a = void 0 === a ? $h().j : a;
            this.C = "";
            this.j = this.m = null;
            this.l = this.H = this.I = !1;
            this.D = function() {
                return !1
            };
            var c = {},
                d = {},
                e = {};
            this.o = (e[py] = (c[13] = function() {
                return ab.apply(0, arguments).some(function(f) {
                    return 0 == b.C.lastIndexOf(f, 0)
                })
            }, c[12] = function() {
                return !!F(a, 6)
            }, c[15] = function(f) {
                return b.D(f)
            }, c[48] = function() {
                return !!b.m
            }, c[51] = function() {
                return b.I
            }, c[66] = function() {
                try {
                    return !!HTMLScriptElement.supports("webbundle")
                } catch (f) {
                    return !1
                }
            }, c[67] = function() {
                return b.H
            }, c[68] = function() {
                return b.l
            }, c), e[qy] = (d[8] = function(f) {
                var g;
                return null != (g = je(b.m, Number(f))) ? g : void 0
            }, d[10] = function(f) {
                return b.j ? zh(f + b.j) % 1E3 : void 0
            }, d), e)
        },
        dH = function(a, b) {
            b && !a.j && (a.j = _.w(b.split(":"), "find").call(b.split(":"), function(c) {
                return 0 === c.indexOf("ID=")
            }) || null)
        };
    var yk = function(a, b, c) {
        iF.call(this, a);
        this.slotId = b;
        this.j = c
    };
    _.P(yk, iF);
    yk.prototype.getSlotId = function() {
        return this.slotId
    };
    var eH = "",
        ek = null,
        kk = _.br(function() {
            var a, b;
            null == (a = window.console) || null == (b = a.warn) || b.call(a, "googletag.pubads().setSafeFrameConfig({useUniqueDomain: ...}) has been removed, and no longer has any effect.")
        });
    var Vd = function(a, b, c, d) {
        iF.call(this, a);
        this.adUnitPath = b;
        this.Xa = d;
        this.j = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.P(Vd, iF);
    q = Vd.prototype;
    q.getId = function() {
        return this.id
    };
    q.getAdUnitPath = function() {
        return this.adUnitPath
    };
    q.getName = function() {
        return this.adUnitPath
    };
    q.toString = function() {
        return this.getId()
    };
    q.getDomId = function() {
        return this.Xa
    };
    var fH = function(a, b) {
        a.j = b
    };
    var gH = new y.WeakMap,
        hH = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\v")
        };
    var qk = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))\/tag\/js\/gpt(?:_[a-z]+)*\.js/;
    (function(a, b) {
        b = void 0 === b ? hH : b;
        var c = ka(a),
            d = function(e) {
                e = _.B(e);
                e.next();
                e = uq(e);
                return b(c, e)
            };
        return function() {
            var e = ab.apply(0, arguments),
                f = this || _.t,
                g = gH.get(f);
            g || (g = {}, gH.set(f, g));
            f = g;
            g = [this].concat(_.Nd(e));
            e = d ? d(g) : g;
            if (Object.prototype.hasOwnProperty.call(f, e)) f = f[e];
            else {
                var h = _.B(g);
                g = h.next().value;
                h = uq(h);
                g = a.apply(g, h);
                f = f[e] = g
            }
            return f
        }
    })(function(a) {
        return (null == a ? 0 : a.src) ? qk.test(a.src) ? 0 : 1 : 2
    }, function(a, b) {
        var c;
        return a + "\v" + (null == (c = b[0]) ? void 0 : c.src)
    });
    var iH = _.br(function() {
            return void Yu("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        jH = _.br(function() {
            return void Yu("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        kH = _.br(function() {
            return void Yu("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
        }),
        lH = function() {
            Object.defineProperty(window, "google_DisableInitialLoad", {
                get: function() {
                    iH();
                    return !0
                },
                set: function() {
                    iH()
                },
                configurable: !0
            })
        },
        Ak = function(a, b, c, d) {
            TG.call(this, a, b, c);
            var e = this,
                f = $h().j,
                g = $h().m,
                h = !1;
            this.setTargeting = J(a, 1, function(k, l) {
                var n = null;
                "string" === typeof l ? n = [l] : Array.isArray(l) ? n = l : qa(l) && (n = _.w(Array, "from").call(Array, l));
                var m = "string" === typeof k && !Lj(k);
                n = n && wa(n);
                var p, r = null != (p = null == n ? void 0 : n.every(function(u) {
                    return "string" === typeof u
                })) ? p : !1;
                if (!m || !r) return O(b, lj("PubAdsService.setTargeting", [k, l])), e;
                l = n;
                m = (E = Uc(f, Qj, 2), _.w(E, "find")).call(E, function(u) {
                    return Nj(u) === k
                });
                if ("gpt-beta" === k) {
                    if (c.m) return O(b, wG(l.join())), e;
                    if (m) return O(b, xG(l.join())), e;
                    l = wk(l)
                }
                m ? Oj(m, l) : (m = Oj(Pj(new Qj, k), l), af(f, 2, Qj, m));
                b.info(Rj(k, l.join(), c.getName()));
                return e
            });
            this.clearTargeting = J(a, 2, function(k) {
                if (void 0 === k) return Rc(f, 2), b.info(uG(c.getName())), e;
                if ("gpt-beta" === k) return O(b, yG(k)), e;
                var l = Uc(f, Qj, 2),
                    n = _.w(l, "findIndex").call(l, function(m) {
                        return Nj(m) === k
                    });
                if (0 > n) return O(b, nG(k, c.getName())), e;
                l.splice(n, 1);
                Rc(f, 2, l);
                b.info(mG(k, c.getName()));
                return e
            });
            this.getTargeting = J(a, 38, function(k) {
                if ("string" !== typeof k) return O(b, lj("PubAdsService.getTargeting", [k])), [];
                var l = (E = Uc(f, Qj, 2), _.w(E, "find")).call(E, function(n) {
                    return Nj(n) === k
                });
                return l ? Xk(l, 2).slice() : []
            });
            this.getTargetingKeys = J(a, 39, function() {
                return Uc(f, Qj, 2).map(function(k) {
                    return (0, D.J)(Nj(k))
                })
            });
            this.setCategoryExclusion = J(a, 3, function(k) {
                if ("string" !== typeof k || Lj(k)) return O(b, lj("PubAdsService.setCategoryExclusion", [k])), e;
                (E = Xk(f, 3), _.w(E, "includes")).call(E, k) || ds(f, 3, k);
                b.info(oG(k));
                return e
            });
            this.clearCategoryExclusions = J(a, 4, function() {
                _.A(f, 3, Bc);
                b.info(pG());
                return e
            });
            this.disableInitialLoad = J(a, 5, function() {
                _.A(f, 4, !0);
                h || (h = !0, lH())
            });
            this.enableSingleRequest = J(a, 6, function() {
                if (c.m && !F(f, 6)) return O(b, cG("PubAdsService.enableSingleRequest")), !1;
                b.info(dG("single request"));
                _.A(f, 6, !0);
                return !0
            });
            this.enableAsyncRendering = J(a, 7, function() {
                return !0
            });
            this.enableSyncRendering = J(a, 8, function() {
                Yu("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = J(a, 485, function(k) {
                var l = new np;
                _.A(l, 1, 800);
                _.A(l, 2, 400);
                _.A(l, 3, 3);
                if (_.ja(k)) {
                    var n = k.fetchMarginPercent;
                    "number" === typeof n && (0 <= n ? _.A(l, 1, n) : -1 === n && Fe(l, 1));
                    n = k.renderMarginPercent;
                    "number" === typeof n && (0 <= n ? _.A(l, 2, n) : -1 === n && Fe(l, 2));
                    k = k.mobileScaling;
                    "number" === typeof k && (0 < k ? _.A(l, 3, k) : -1 === k && _.A(l, 3, 1))
                }
                _.Rg(f, 5, l)
            });
            this.setCentering = J(a, 9, function(k) {
                k = !!k;
                b.info(eG("centering", String(k)));
                _.A(f, 15, k)
            });
            this.definePassback = J(a, 10, function(k, l) {
                return (k = zk(a, b, c, k, l, d)) && k.Wd
            });
            this.refresh = J(a, 11, function() {
                var k = ab.apply(0, arguments),
                    l = _.B(k),
                    n = l.next().value;
                l = l.next().value;
                l = void 0 === l ? {} : l;
                n && !Array.isArray(n) || !_.ja(l) || l.changeCorrelator && "boolean" !== typeof l.changeCorrelator ? O(b, lj("PubAdsService.refresh", k)) : (l && !1 === l.changeCorrelator || f.setCorrelator(bv()), n = n ? tk(n, c) : c.j, c.refresh(Mh(f, g), n) || O(b, lj("PubAdsService.refresh", k)))
            });
            this.enableVideoAds = J(a, 12, function() {
                _.A(f, 21, !0);
                mH(c, f)
            });
            this.setVideoContent = J(a, 13, function(k, l) {
                nH(c, k, l, f)
            });
            this.collapseEmptyDivs = J(a, 14, function(k) {
                k = void 0 === k ? !1 : k;
                _.A(f, 11, !0);
                var l = !!k;
                _.A(f, 10, l);
                gi("gpt_ced", function(n) {
                    L(n, "sc", l ? "t" : "f");
                    L(n, "level", "page");
                    mi(n, a)
                });
                b.info(kG(String(l)));
                return !!F(f, 11)
            });
            this.clear = J(a, 15, function(k) {
                if (Array.isArray(k)) return oH(c, f, g, tk(k, c));
                if (void 0 === k) return oH(c, f, g, c.j);
                O(b, lj("PubAdsService.clear", [k]));
                return !1
            });
            this.setLocation = J(a, 16, function(k) {
                if ("string" !== typeof k) return O(b, lj("PubAdsService.setLocation", [k])), e;
                _.A(f, 8, k);
                return e
            });
            this.setCookieOptions = J(a, 17, function() {
                jH();
                return e
            });
            this.setTagForChildDirectedTreatment = J(a, 18, function(k) {
                kH();
                if (1 !== k && 0 !== k) return O(b, FG("PubadsService.setTagForChildDirectedTreatment", mk(k), "0,1")), e;
                var l = gE(f) || new dE;
                l.setTagForChildDirectedTreatment(k);
                _.Rg(f, 25, l);
                return e
            });
            this.clearTagForChildDirectedTreatment = J(a, 19, function() {
                kH();
                var k = gE(f);
                if (!k) return e;
                k.clearTagForChildDirectedTreatment();
                _.Rg(f, 25, k);
                return e
            });
            this.setPublisherProvidedId = J(a, 20, function(k) {
                k = String(k);
                b.info(eG("PPID", k));
                _.A(f, 16, k);
                return e
            });
            this.set = J(a, 21, function(k, l) {
                if ("string" !== typeof k || !k.length || void 0 === FF()[k] || "string" !== typeof l) return O(b, lj("PubAdsService.set", [k, l])), e;
                var n = (E = f.ta(), _.w(E, "find")).call(E, function(m) {
                    return Nj(m) === k
                });
                n ? Oj(n, [l]) : (n = Pj(new Qj, k), ds(n, 2, l), af(f, 14, Qj, n));
                b.info(ZF(k, String(l), c.getName()));
                return e
            });
            this.get = J(a, 22, function(k) {
                if ("string" !== typeof k) return O(b, lj("PubAdsService.get", [k])), null;
                var l = (E = f.ta(), _.w(E, "find")).call(E, function(n) {
                    return Nj(n) === k
                });
                return (l = l && Xk(l, 2)) ? l[0] : null
            });
            this.getAttributeKeys = J(a, 23, function() {
                return f.ta().map(function(k) {
                    return (0, D.J)(Nj(k))
                })
            });
            this.display = J(a, 24, function(k, l, n, m) {
                return void c.display(k, l, d, n, m)
            });
            this.updateCorrelator = J(a, 25, function() {
                Yu(sk("update"));
                O(b, BG());
                f.setCorrelator(bv());
                return e
            });
            this.defineOutOfPagePassback = J(a, 35, function(k) {
                k = zk(a, b, c, k, [1, 1], d);
                if (!k) return null;
                _.A(k.Va, 15, 1);
                return k.Wd
            });
            this.setForceSafeFrame = J(a, 36, function(k) {
                if ("boolean" !== typeof k) return O(b, lj("PubAdsService.setForceSafeFrame", [mk(k)])), e;
                _.A(f, 13, k);
                return e
            });
            this.setSafeFrameConfig = J(a, 37, function(k) {
                var l = nk(b, k);
                if (!l) return O(b, lj("PubAdsService.setSafeFrameConfig", [k])), e;
                _.Rg(f, 18, l);
                return e
            });
            this.setRequestNonPersonalizedAds = J(a, 445, function(k) {
                kH();
                if (0 !== k && 1 !== k) return O(b, FG("PubAdsService.setRequestNonPersonalizedAds", mk(k), "0,1")), e;
                var l = gE(f) || new dE;
                _.A(l, 8, !!k);
                _.Rg(f, 25, l);
                return e
            });
            this.setTagForUnderAgeOfConsent = J(a, 447, function(k) {
                k = void 0 === k ? 2 : k;
                kH();
                if (2 !== k && 0 !== k && 1 !== k) return O(b, FG("PubadsService.setTagForUnderAgeOfConsent", mk(k), "2,0,1")), e;
                var l = gE(f) || new dE;
                l.setTagForUnderAgeOfConsent(k);
                _.Rg(f, 25, l);
                return e
            });
            this.getCorrelator = J(a, 27, function() {
                return String(f.getCorrelator())
            });
            this.getTagSessionCorrelator = J(a, 631, function() {
                return ye(_.t)
            });
            this.getVideoContent = J(a, 30, function() {
                return pH(c, f)
            });
            this.getVersion = J(a, 568, function() {
                return a.kb ? String(a.kb) : a.Ha
            });
            this.forceExperiment = J(a, 569, function(k) {
                return void c.forceExperiment(k)
            });
            this.setCorrelator = J(a, 28, function(k) {
                Yu(sk("set"));
                O(b, AG());
                if (Dh(window)) return e;
                if (!("number" === typeof k && isFinite(k) && 0 == k % 1 && 0 < k)) return O(b, lj("PubadsService.setCorrelator", [mk(k)])), e;
                f.setCorrelator(k);
                _.A(f, 27, !0);
                return e
            });
            this.markAsAmp = J(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = J(a, 571, function() {
                return !!F(f, 6)
            });
            this.setImaContent = J(a, 328, function(k, l) {
                hf(f, 22) ? nH(c, k, l, f) : (_.A(f, 21, !0), mH(c, f), "string" === typeof k && _.A(f, 19, k), "string" === typeof l && _.A(f, 20, l))
            });
            this.getImaContent = J(a, 329, function() {
                return hf(f, 22) ? pH(c, f) : c.m ? {
                    vid: z(f, 19) || "",
                    cmsid: z(f, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = J(a, 572, function() {
                return !!F(f, 4)
            });
            this.setPrivacySettings = J(a, 648, function(k) {
                if (!_.ja(k)) return O(b, lj("PubAdsService.setPrivacySettings", [k])), e;
                var l = k.restrictDataProcessing,
                    n = k.childDirectedTreatment,
                    m = k.underAgeOfConsent,
                    p = k.limitedAds,
                    r = k.nonPersonalizedAds,
                    u = k.userOptedOutOfPersonalization,
                    v = k.trafficSource,
                    x, I = null != (x = gE(f)) ? x : new dE;
                "boolean" === typeof r ? _.A(I, 8, r) : void 0 !== r && O(b, lk("PubAdsService.setPrivacySettings", mk(k), "nonPersonalizedAds", mk(r)));
                "boolean" === typeof u ? _.A(I, 13, u) : void 0 !== u && O(b, lk("PubAdsService.setPrivacySettings", mk(k), "userOptedOutOfPersonalization", mk(u)));
                "boolean" === typeof l ? _.A(I, 1, l) : void 0 !== l && O(b, lk("PubAdsService.setPrivacySettings", mk(k), "restrictDataProcessing", mk(l)));
                "boolean" === typeof p ? (l = rk(), p && !F(I, 9) && a.Zb && (r = a.ob, u = Sg(a), x = new wv, x = _.Jc(x, 1, !0, !1), x = _.Jc(x, 2, l, !1), u = Ug(u, 11, Vg, x), Pd(r, u)), l ? _.A(I, 9, p) : p && O(b, SG())) : void 0 !== p && O(b, lk("PubAdsService.setPrivacySettings", mk(k), "limitedAds", mk(p)));
                void 0 !== m && (null === m ? I.setTagForUnderAgeOfConsent(2) : !1 === m ? I.setTagForUnderAgeOfConsent(0) : !0 === m ? I.setTagForUnderAgeOfConsent(1) : O(b, lk("PubAdsService.setPrivacySettings", mk(k), "underAgeOfConsent", mk(m))));
                void 0 !== n && (null === n ? I.clearTagForChildDirectedTreatment() : !1 === n ? I.setTagForChildDirectedTreatment(0) : !0 === n ? I.setTagForChildDirectedTreatment(1) : O(b, lk("PubAdsService.setPrivacySettings", mk(k), "childDirectedTreatment", mk(n))));
                void 0 !== v && (null === v ? Fe(I, 10) : (E = _.w(Object, "values").call(Object, Yj), _.w(E, "includes")).call(E, v) ? _.A(I, 10, v) : O(b, lk("PubAdsService.setPrivacySettings", mk(k), "trafficSource", mk(v))));
                _.Rg(f, 25, I);
                return e
            })
        };
    _.P(Ak, TG);
    var xh = function(a) {
        _.R.call(this, a)
    };
    _.P(xh, _.R);
    var Ln = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = _.Xg(a, 88, function(f, g) {
            var h;
            if (h = Ek(f)) h = Dk(g) || Array.isArray(g) && g.every(Dk);
            h ? d.push([f, g]) : (e.push([f, g]), O(b, lj("SizeMappingBuilder.addSize", [f, g])));
            return c
        });
        this.build = _.Xg(a, 89, function() {
            if (e.length) return O(b, XF(mk(e))), null;
            pa(d);
            return d
        })
    };
    var qH = function(a, b) {
        this.getId = J(a, 593, function() {
            return b.getId()
        });
        this.getAdUnitPath = J(a, 594, function() {
            return b.getAdUnitPath()
        });
        this.getName = J(a, 595, function() {
            return b.getName()
        });
        this.toString = J(a, 596, function() {
            return b.toString()
        });
        this.getDomId = J(a, 597, function() {
            return b.getDomId()
        })
    };
    var qh = function(a) {
        _.R.call(this, a, -1, rH)
    };
    _.P(qh, _.R);
    var rH = [2];
    var tH = function(a) {
        _.R.call(this, a, -1, sH)
    };
    _.P(tH, _.R);
    tH.prototype.getAdUnitPath = function() {
        return z(this, 1)
    };
    tH.prototype.getDomId = function() {
        return z(this, 2)
    };
    var uH = function(a, b) {
        _.A(a, 2, b)
    };
    tH.prototype.ta = function() {
        return Uc(this, Qj, 3)
    };
    tH.prototype.getClickUrl = function() {
        return z(this, 7)
    };
    tH.prototype.setClickUrl = function(a) {
        return _.A(this, 7, a)
    };
    var Mj = function(a) {
        return Uc(a, Qj, 9)
    };
    tH.prototype.Qa = function() {
        return Le(this, ik, 13)
    };
    var Fl = function(a) {
            return ee(a, 15, 0)
        },
        vH = function(a) {
            a = Hc(a, z(a, 26), Eb(a.ca));
            return null == a ? a : a
        },
        sH = [3, 4, 5, 6, 8, 9, 27];
    var wH = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        xH = function(a, b) {
            a.advertiserId = b
        },
        yH = function(a, b) {
            a.campaignId = b
        },
        zH = function(a, b) {
            a.yieldGroupIds = b
        },
        AH = function(a, b) {
            a.companyIds = b
        };
    var BH = function(a, b) {
        this.width = a;
        this.height = b
    };
    BH.prototype.getWidth = function() {
        return this.width
    };
    BH.prototype.getHeight = function() {
        return this.height
    };
    var Ok = function(a, b, c) {
        var d = this,
            e = (0, D.J)(Mm($h(), c.getDomId())),
            f = "",
            g = null,
            h = function() {
                return ""
            },
            k = "",
            l = !1;
        _.Jm(c, function() {
            e = new tH;
            f = "";
            g = null;
            h = function() {
                return ""
            };
            k = ""
        });
        kF(c, Go, function(m) {
            var p = m.detail;
            m = p.Dd;
            p = p.isBackfill;
            m && (f = m, l = p)
        });
        this.set = J(a, 40, function(m, p) {
            if ("string" !== typeof m || "string" !== typeof p || void 0 === FF()[m]) return O(b, lj("Slot.set", [m, p]), c), d;
            var r = (E = e.ta(), _.w(E, "find")).call(E, function(u) {
                return Nj(u) === m
            });
            r ? Oj(r, [p]) : (r = Pj(new Qj, m), ds(r, 2, p), af(e, 3, Qj, r));
            return d
        });
        this.get = J(a, 41, function(m) {
            if ("string" !== typeof m) return O(b, lj("Slot.get", [m]), c), null;
            var p = (E = e.ta(), _.w(E, "find")).call(E, function(r) {
                return Nj(r) === m
            });
            return (p = p && Xk(p, 2)) ? p[0] : null
        });
        this.getAttributeKeys = J(a, 42, function() {
            return e.ta().map(function(m) {
                return (0, D.J)(Nj(m))
            })
        });
        this.addService = J(a, 43, function(m) {
            m = fj.get(m);
            if (!m) return O(b, lj("Slot.addService", [m]), c), d;
            var p = m.getName();
            if ((E = Xk(e, 4), _.w(E, "includes")).call(E, p)) return b.info(OF(p, c.toString()), c), d;
            m.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = J(a, 44, function(m) {
            try {
                var p = e;
                if (!Array.isArray(m)) throw new Mk("Size mapping must be an array");
                var r = m.map(Nk);
                Rc(p, 6, r)
            } catch (u) {
                m = u, bh(a, 44, m), Yu("Incorrect usage of googletag.Slot defineSizeMapping: " + m.message)
            }
            return d
        });
        this.setClickUrl = J(a, 45, function(m) {
            if ("string" !== typeof m) return O(b, lj("Slot.setClickUrl", [m]), c), d;
            e.setClickUrl(m);
            return d
        });
        this.setCategoryExclusion = J(a, 46, function(m) {
            "string" !== typeof m || Lj(m) ? O(b, lj("Slot.setCategoryExclusion", [m]), c) : ((E = Xk(e, 8), _.w(E, "includes")).call(E, m) || ds(e, 8, m), b.info(PF(m), c));
            return d
        });
        this.clearCategoryExclusions = J(a, 47, function() {
            _.A(e, 8, Bc);
            b.info(QF(), c);
            return d
        });
        this.getCategoryExclusions = J(a, 48, function() {
            return Xk(e, 8).slice()
        });
        this.setTargeting = J(a, 49, function(m, p) {
            Sj(c, e, m, p, b);
            return d
        });
        this.updateTargetingFromMap = J(a, 649, function(m) {
            Tj(c, e, m, b);
            return d
        });
        this.clearTargeting = J(a, 50, function(m) {
            if (void 0 === m) return Rc(e, 9), b.info(RF(c.getAdUnitPath()), c), d;
            var p = Mj(e),
                r = _.w(p, "findIndex").call(p, function(u) {
                    return Nj(u) === m
                });
            if (0 > r) return O(b, nG(m, c.getAdUnitPath()), c), d;
            p.splice(r, 1);
            Rc(e, 9, p);
            b.info(tG(m, c.getAdUnitPath()), c);
            return d
        });
        this.getTargeting = J(a, 51, function(m) {
            if ("string" !== typeof m) return O(b, lj("Slot.getTargeting", [m]), c), [];
            var p = (E = Mj(e), _.w(E, "find")).call(E, function(r) {
                return Nj(r) === m
            });
            return p ? Xk(p, 2).slice() : []
        });
        this.getTargetingKeys = J(a, 52, function() {
            return Mj(e).map(function(m) {
                return (0, D.J)(Nj(m))
            })
        });
        this.setCollapseEmptyDiv = J(a, 53, function(m, p) {
            p = void 0 === p ? !1 : p;
            if ("boolean" !== typeof m || "boolean" !== typeof p) return O(b, lj("Slot.setCollapseEmptyDiv", [m, p]), c), d;
            _.A(e, 10, m);
            _.A(e, 11, m && p);
            gi("gpt_ced", function(r) {
                L(r, "sc", F(e, 11) ? "t" : "f");
                L(r, "level", "slot");
                mi(r, a)
            });
            p && !m && O(b, SF(c.toString()), c);
            return d
        });
        this.getAdUnitPath = J(a, 54, function() {
            return c.getAdUnitPath()
        });
        this.getSlotElementId = J(a, 598, function() {
            return c.getDomId()
        });
        this.setForceSafeFrame = J(a, 55, function(m) {
            if ("boolean" !== typeof m) return O(b, lj("Slot.setForceSafeFrame", [String(m)]), c), d;
            _.A(e, 12, m);
            return d
        });
        this.setSafeFrameConfig = J(a, 56, function(m) {
            var p = nk(b, m);
            if (!p) return b.error(lj("Slot.setSafeFrameConfig", [m]), c), d;
            _.Rg(e, 13, p);
            return d
        });
        kF(c, nF, function(m) {
            m = m.detail;
            if (F(m, 8)) g = null;
            else {
                g = new wH;
                var p = !!F(m, 9);
                g.isBackfill = p;
                var r = Ec(m, 15, Sb),
                    u = Ec(m, 16, Sb);
                r.length && u.length && (g.sourceAgnosticCreativeId = r[0], g.sourceAgnosticLineItemId = u[0], p || (g.creativeId = r[0], g.lineItemId = u[0], (p = Ec(m, 22, Sb)) && p.length && (g.creativeTemplateId = p[0])));
                Ec(m, 17, Sb).length && xH(g, Ec(m, 17, Sb)[0]);
                Ec(m, 18, Sb).length && yH(g, Ec(m, 18, Sb)[0]);
                Ec(m, 19, Sb).length && zH(g, Ec(m, 19, Sb));
                Ec(m, 20, Sb).length && AH(g, Ec(m, 20, Sb));
                m = Ec(m, 45, Fc).map(function(v) {
                    return nc(v)
                });
                m.length && (g.encryptedTroubleshootingInfo = m[0])
            }
        });
        this.getResponseInformation = J(a, 355, function() {
            return g
        });
        this.getName = J(a, 170, function() {
            b.error(QG());
            var m = new Dj("slot_get_name");
            mi(m, a);
            Fj(m);
            return c.getAdUnitPath()
        });
        var n = new qH(a, c);
        this.getSlotId = J(a, 579, function() {
            return n
        });
        this.getServices = J(a, 580, function() {
            return Xk(e, 4).map(function(m) {
                return uj(m)
            })
        });
        this.getSizes = J(a, 581, function(m, p) {
            var r, u;
            return null != (u = null == (r = th(e, m, p)) ? void 0 : r.map(function(v) {
                return F(v, 3) ? "fluid" : new BH(v.getWidth(), v.getHeight())
            })) ? u : null
        });
        this.getClickUrl = J(a, 582, function() {
            var m;
            return null != (m = e.getClickUrl()) ? m : ""
        });
        this.getTargetingMap = J(a, 583, function() {
            for (var m = {}, p = _.B(Mj(e)), r = p.next(); !r.done; r = p.next()) r = r.value, Nj(r) && (m[Nj(r)] = Xk(r, 2));
            return m
        });
        this.getOutOfPage = J(a, 584, function(m) {
            return "number" === typeof m ? Fl(e) === m : 0 !== Fl(e)
        });
        this.getCollapseEmptyDiv = J(a, 585, function() {
            return ok(e, 10) ? F(e, 10) : null
        });
        this.getDivStartsCollapsed = J(a, 586, function() {
            return ok(e, 11) ? F(e, 11) : null
        });
        kF(c, oF, function(m) {
            h = m.detail.xe
        });
        this.getContentUrl = J(a, 587, function() {
            return h()
        });
        this.getFirstLook = J(a, 588, function() {
            Yu("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        kF(c, nF, function(m) {
            var p;
            k = null != (p = m.detail.getEscapedQemQueryId()) ? p : ""
        });
        this.getEscapedQemQueryId = J(a, 591, function() {
            return k
        });
        this.getHtml = J(a, 592, function() {
            return l ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : f
        });
        this.setConfig = J(a, 1022, function(m) {
            var p = vH(e);
            if (void 0 !== m.componentAuction) {
                m = _.B(m.componentAuction);
                for (var r = m.next(); !r.done; r = m.next()) {
                    var u = r.value;
                    r = u.configKey;
                    u = u.auctionConfig;
                    "string" !== typeof r || Lj(r) || (null === u ? p.delete(r) : u && p.set(r, JSON.stringify(u)))
                }
            }
        })
    };
    var CH = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 975);
        this.o = b;
        this.l = c;
        this.B = d;
        this.pbjs = e;
        this.F = f;
        this.requestBidsConfig = g;
        this.A = new az
    };
    _.P(CH, Z);
    CH.prototype.j = function() {
        Wk(this.F, this.pbjs, this.o, this.l, this.B, this.requestBidsConfig);
        this.A.notify()
    };
    var DH = function(a, b, c) {
        Z.call(this, a, 937, _.we(vw));
        this.window = c;
        this.o = V(this);
        this.l = V(this);
        this.M = V(this);
        this.K = V(this);
        this.B = V(this);
        this.F = V(this);
        this.P = gz(this, b)
    };
    _.P(DH, Z);
    DH.prototype.j = function() {
        if (this.window.top !== this.window) EH(this);
        else {
            var a = this.P.value;
            if (a) {
                var b = {},
                    c;
                if (null == (c = Le(a, nt, 2)) ? 0 : bp(c, 2)) b["*"] = {
                    Fc: !0
                };
                c = new y.Set;
                for (var d = _.B(Uc(a, mt, 1)), e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    for (var f = _.B([Ym(e, 2), e.Pa()].filter(function(r) {
                            return !!r
                        })), g = f.next(); !g.done; g = f.next()) b[g.value] = {
                        Fc: bp(e, 3)
                    };
                    e = _.B(Vm(e, 4));
                    for (f = e.next(); !f.done; f = e.next()) c.add(f.value)
                }
                this.o.j(b);
                this.l.j([].concat(_.Nd(c)));
                var h, k;
                b = null == (h = Le(a, nt, 2)) ? void 0 : null == (k = Le(h, et, 1)) ? void 0 : Uc(k, gt, 1);
                Ty(this.M, (null == b ? 0 : b.length) ? b : null);
                var l;
                this.B.j(!(null == (l = Le(a, nt, 2)) || !bp(l, 4)));
                var n;
                this.F.j(!(null == (n = Le(a, nt, 2)) || !bp(n, 5)));
                var m, p;
                a = null == (m = Le(a, nt, 2)) ? void 0 : null == (p = Le(m, et, 3)) ? void 0 : Uc(p, gt, 1);
                Ty(this.K, (null == a ? 0 : a.length) ? a : null)
            } else EH(this)
        }
    };
    var EH = function(a) {
        a.o.j({});
        a.l.j([]);
        Uy(a.M);
        a.B.j(!1);
        a.F.j(!1);
        Uy(a.K)
    };
    DH.prototype.H = function(a) {
        this.m(a)
    };
    DH.prototype.m = function() {
        EH(this)
    };
    var FH = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        GH = function(a, b, c, d, e, f, g, h, k, l, n, m) {
            Z.call(this, a, 920);
            this.K = b;
            this.R = c;
            this.lb = d;
            this.B = V(this);
            this.F = V(this);
            this.l = V(this);
            this.M = [];
            this.o = new y.Map;
            this.ba = W(this, e);
            this.Y = new $y(f);
            this.la = W(this, g);
            this.T = X(this, h);
            this.P = W(this, k);
            this.ma = W(this, l);
            this.ha = X(this, n);
            this.oa = X(this, m)
        };
    _.P(GH, Z);
    GH.prototype.j = function() {
        if (HH(this)) {
            var a = this.Y.value;
            a && a.libLoaded ? "function" !== typeof a.getEvents ? (this.K.error(HG()), IH(this)) : (a = JH(this, a)) ? (this.l.j(a), this.B.j(this.o), this.F.j(this.M)) : IH(this) : IH(this)
        } else IH(this)
    };
    GH.prototype.H = function(a) {
        this.m(a)
    };
    GH.prototype.m = function(a) {
        this.K.error(IG(a.message));
        IH(this)
    };
    var IH = function(a) {
            a.l.j([]);
            Uy(a.B);
            Uy(a.F)
        },
        JH = function(a, b) {
            var c = (0, D.J)(b.getEvents)(),
                d = c.filter(function(g) {
                    var h = g.args;
                    return "auctionEnd" === g.eventType && h.auctionId
                }),
                e = !1,
                f = a.ba.value.map(function(g) {
                    var h = new at,
                        k = function(va) {
                            return va === g.getDomId() || va === g.getAdUnitPath()
                        },
                        l, n = null != (l = KH.get(g)) ? l : 0,
                        m;
                    l = null != (m = d.filter(function(va) {
                        var Da, lb, Kb;
                        return Number(null == (Da = va.args) ? void 0 : Da.timestamp) > n && (null == (lb = va.args) ? void 0 : null == (Kb = lb.adUnitCodes) ? void 0 : _.w(Kb, "find").call(Kb, k))
                    })) ? m : [];
                    if (!l.length) return a.M.push(g), h;
                    var p;
                    m = null == (p = l.reduce(function(va, Da) {
                        return Number(Da.args.timestamp) > Number(va.args.timestamp) ? Da : va
                    })) ? void 0 : p.args;
                    if (!m) return h;
                    var r = void 0 === m.bidderRequests ? [] : m.bidderRequests;
                    p = void 0 === m.bidsReceived ? [] : m.bidsReceived;
                    var u = m.auctionId;
                    m = m.timestamp;
                    if (!u || null == m || !r.length) return h;
                    KH.has(g) || _.Jm(g, function() {
                        return KH.delete(g)
                    });
                    KH.set(g, m);
                    m = bt(h);
                    Math.random() < _.we(Pv) && b.version && FH.test(b.version) && _.A(m, 6, b.version);
                    _.Rg(m, 9, a.ha.value);
                    l = new y.Map;
                    var v = Rh(function() {
                            return ql(c, u)
                        }),
                        x = Mj(a.R[g.getDomId()]),
                        I = {};
                    r = _.B(r);
                    for (var K = r.next(); !K.done; I = {
                            Pc: I.Pc,
                            Rc: I.Rc
                        }, K = r.next()) {
                        var M = K.value;
                        I.Pc = M.bidderCode;
                        var S = M.bids;
                        K = M.timeout;
                        I.Rc = M.src;
                        M = M.auctionStart;
                        var T = {};
                        S = _.B(S);
                        for (var Y = S.next(); !Y.done; T = {
                                Jb: T.Jb
                            }, Y = S.next()) {
                            var aa = Y.value;
                            T.Jb = aa.bidId;
                            var ia = aa.transactionId;
                            Y = aa.adUnitCode;
                            var Xa = aa.getFloor;
                            aa = aa.mediaTypes;
                            if (T.Jb && k(Y)) {
                                e = !0;
                                fl(m, g, Y);
                                ia && (hf(m, 4) || _.A(m, 4, ia), a.o.has(ia) || a.o.set(ia, M));
                                ok(m, 8) || _.A(m, 8, K);
                                var za = _.w(p, "find").call(p, function(va) {
                                    return function(Da) {
                                        return Da.requestId === va.Jb
                                    }
                                }(T));
                                ia = Zk(m, function(va) {
                                    return function() {
                                        var Da = bl(new cl, va.Pc);
                                        switch (va.Rc) {
                                            case "client":
                                                _.A(Da, 7, 1);
                                                break;
                                            case "s2s":
                                                _.A(Da, 7, 2)
                                        }
                                        return Da
                                    }
                                }(I)());
                                hl(m, ia, Y, a.T.value, a.P.value, a.ma.value, Xa);
                                za ? (al(ia, 1), "number" === typeof za.timeToRespond && dl(ia, za.timeToRespond), Y = Yk(za, l, x, aa), $k(ia, Y)) : (Y = v().get(T.Jb)) && !Y.Od ? dl(al(ia, 2), Math.round(Y.latency)) : dl(al(ia, 3), K)
                            }
                        }
                    }
                    var ta;
                    (null == (ta = b.getConfig) ? 0 : ta.call(b).useBidCache) && el(m, g, u, x, l, b);
                    return h
                });
            return e ? f : []
        },
        HH = function(a) {
            var b = a.la.value,
                c;
            return !!a.oa.value || !(null == (c = b["*"]) || !c.Fc) || a.lb.split(",").some(function(d) {
                var e;
                return !(null == (e = b[d]) || !e.Fc)
            })
        },
        KH = new y.Map;
    var LH, MH = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1019);
        this.R = g;
        this.l = new $y(b);
        this.B = new $y(c);
        this.F = new $y(d);
        this.o = X(this, e);
        this.K = X(this, f)
    };
    _.P(MH, Z);
    MH.prototype.j = function() {
        NH(this);
        OH(this)
    };
    var OH = function(a) {
            if (!(Math.random() >= _.we(Nv))) {
                var b = (a.K.value || []).filter(function(k) {
                    return Mj(a.R[k.getDomId()]).some(function(l) {
                        return "hb_pb" === z(l, 1)
                    })
                });
                if (b.length) {
                    var c, d, e, f, g, h = (null == (c = a.l.value) ? 0 : null == (d = c.adUnits) ? 0 : d.length) ? [].concat(_.Nd(new y.Set(null == (e = a.l.value) ? void 0 : e.adUnits.map(function(k) {
                        return k.code
                    })))) : _.w(Object, "keys").call(Object, (null == (f = a.l.value) ? void 0 : null == (g = f.getAdserverTargeting) ? void 0 : g.call(f)) || {});
                    c = new Dj("haux");
                    L(c, "ius", b.map(function(k) {
                        return k.getAdUnitPath()
                    }).join("~"));
                    L(c, "dids", b.map(function(k) {
                        return k.getDomId()
                    }).join("~"));
                    L(c, "paucs", h.join("~"));
                    mi(c, a.context);
                    Fj(c, 1)
                }
            }
        },
        NH = function(a) {
            gi("ppc_hrc", function(b) {
                var c;
                null != LH || (LH = (0, D.sa)(null == (c = (E = window.google_js_reporting_queue = window.google_js_reporting_queue || [], _.w(E, "find")).call(E, function(g) {
                    return "1" === g.label
                })) ? void 0 : c.value));
                var d = te("navigationStart", window);
                LH && L(b, "lt", LH);
                var e;
                L(b, "tids", [].concat(_.Nd((null == (e = a.o.value) ? void 0 : _.w(e, "keys").call(e)) || [])).join());
                var f;
                L(b, "asts", [].concat(_.Nd((null == (f = a.o.value) ? void 0 : _.w(f, "values").call(f)) || [])).map(function(g) {
                    return g - d
                }).join());
                a.B.value ? L(b, "ht", a.B.value - d) : a.F.value && L(b, "ht", 0);
                mi(b, a.context)
            }, a.o.value ? _.we(Mv) : 0)
        };
    var ep = function(a, b, c, d, e) {
        Z.call(this, a, 982);
        this.A = fz(this);
        this.o = X(this, b);
        this.l = new $y(c);
        this.F = W(this, d);
        this.B = W(this, e)
    };
    _.P(ep, Z);
    ep.prototype.j = function() {
        var a = this,
            b;
        if (this.o.value && (null == (b = this.l.value) ? 0 : b.onEvent)) {
            b = {};
            for (var c = _.B(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), d = c.next(); !d.done; b = {
                    Kb: b.Kb,
                    ec: b.ec
                }, d = c.next()) b.Kb = d.value, b.ec = function(e) {
                return function(f) {
                    if (a.o.value === f.adId) {
                        var g = new Dj("hbm_brt");
                        mi(g, a.context);
                        L(g, "et", e.Kb);
                        L(g, "sf", a.F.value);
                        L(g, "qqid", a.B.value);
                        var h, k, l;
                        L(g, "bc", String(null != (l = null != (k = f.bidderCode) ? k : null == (h = f.bid) ? void 0 : h.bidder) ? l : ""));
                        Fj(g, 1)
                    }
                }
            }(b), this.l.value.onEvent(b.Kb, b.ec), _.Jm(this, function(e) {
                return function() {
                    return void _.eh(a.context, a.id, function() {
                        var f, g;
                        return void(null == (f = a.l.value) ? void 0 : null == (g = f.offEvent) ? void 0 : g.call(f, e.Kb, e.ec))
                    }, !0)
                }
            }(b))
        }
        this.A.notify()
    };
    ep.prototype.m = function() {
        this.A.notify()
    };
    var PH = function(a, b, c, d, e, f) {
        Z.call(this, a, 976);
        this.nextFunction = d;
        this.l = e;
        this.requestBidsConfig = f;
        hz(this, b);
        hz(this, c)
    };
    _.P(PH, Z);
    PH.prototype.j = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.l, [this.requestBidsConfig])
    };
    var QH = function(a, b, c, d, e, f) {
        Z.call(this, a, 981);
        this.pbjs = b;
        this.o = c;
        this.l = d;
        this.B = e;
        this.requestBidsConfig = f;
        this.A = new az
    };
    _.P(QH, Z);
    QH.prototype.j = function() {
        var a, b, c = null != (b = null == (a = this.o) ? void 0 : a.get("*")) ? b : _.we(Qv);
        if (this.B) {
            var d;
            null != (d = this.l) && _.A(d, 1, 1);
            var e;
            null != (e = this.l) && _.A(e, 2, !0)
        } else if (c) {
            var f;
            null != (f = this.l) && _.A(f, 1, 1);
            this.requestBidsConfig.timeout = c;
            var g, h, k;
            a = _.B(null != (k = null == (h = (g = this.pbjs).getConfig) ? void 0 : h.call(g).s2sConfig) ? k : []);
            for (g = a.next(); !g.done; g = a.next()) g.value.timeout = c;
            var l, n;
            null == (n = (l = this.pbjs).setConfig) || n.call(l, {
                bidderTimeout: c
            })
        }
        this.A.notify()
    };
    var RH = function(a, b, c, d, e, f, g, h) {
        _.Bv.call(this);
        this.j = a;
        this.C = b;
        this.m = c;
        this.l = d;
        this.o = e;
        this.H = f;
        this.B = g;
        this.pbjs = h
    };
    _.P(RH, _.Bv);
    RH.prototype.push = function(a) {
        var b = a.context,
            c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new mf;
            _.Cm(this, d);
            var e = new QH(this.j, this.pbjs, this.o, this.H, this.B, a),
                f = new CH(this.j, this.C, this.m, this.l, this.pbjs, b, a);
            H(d, e);
            H(d, f);
            H(d, new PH(this.j, f.A, e.A, c, b, a));
            Af(d)
        }
    };
    var SH = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 951);
        this.G = window;
        this.l = V(this);
        this.o = V(this);
        this.M = W(this, b);
        this.F = X(this, d);
        this.K = W(this, e);
        this.Y = W(this, f);
        this.B = X(this, g);
        this.P = X(this, h);
        this.T = W(this, k);
        hz(this, c)
    };
    _.P(SH, Z);
    SH.prototype.j = function() {
        var a = !!rj().pbjs_hooks;
        this.o.j(a);
        Ty(this.l, a ? null : _.re());
        var b, c = null == (b = this.F.value) ? void 0 : b.size,
            d;
        b = (null == (d = this.B.value) ? void 0 : d.size) || _.we(Qv);
        d = this.M.value;
        var e, f = null != (e = rj().pbjs_hooks) ? e : [];
        e = new RH(this.context, this.F.value, this.K.value, this.Y.value, this.B.value, this.P.value, this.T.value, d);
        _.Cm(this, e);
        f = _.B(f);
        for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
        if (c || b || a) rj().pbjs_hooks = tl(this.context, e);
        !c && !b || a || rl(d, this.G)
    };
    var TH = {},
        ul = (TH[64] = JG, TH[134217728] = KG, TH[32768] = LG, TH[536870912] = MG, TH[8] = NG, TH[512] = OG, TH[1048576] = PG, TH[4194304] = RG, TH);
    var Gl = function(a) {
        return "22639388115" === Lg(a.getAdUnitPath())
    };
    var UH = null;
    var WH = function(a) {
        _.R.call(this, a, -1, VH)
    };
    _.P(WH, _.R);
    var VH = [1],
        XH = [WH, 1, Is, yt];
    var ZH = function(a) {
        _.R.call(this, a, -1, YH)
    };
    _.P(ZH, _.R);
    var YH = [1, 2],
        $H = [ZH, 1, Is, yt, 2, Is, XH];
    var im = 0,
        aI = new _.Gh(-9, -9);
    var nm = 0;
    var bI = new y.Set([function(a, b) {
            var c = a.da.N.V;
            b.set("pvsid", {
                value: a.ga.context.pvsid
            }).set("correlator", {
                value: z(c, 26)
            })
        }, function(a, b) {
            a = a.ke;
            var c = a.tb,
                d = a.ub;
            "wbn" === a.Wb && b.set("wbsu", {
                value: c
            }).set("callback", {
                value: d
            })
        }, function(a, b) {
            var c = a.da.N.V,
                d = a.mf;
            a = d.qe;
            var e = d.uf;
            d = d.cf;
            _.G(ow) || (c = 0 === ee(c, 24, 0), b.set("adsid", {
                value: c ? a : null
            }).set("pucrd", {
                value: c ? e : null
            }).set("jar", {
                value: d
            }))
        }, function(a, b) {
            var c = a.da.N.V,
                d = a.Qf;
            a = d.Gb;
            d = d.Fb;
            var e = F(c, 21);
            b = b.set("hxva", {
                value: e ? 1 : null
            }).set("cmsid", {
                value: e ? z(c, 23) : null
            }).set("vid", {
                value: e ? z(c, 22) : null
            }).set("pod", {
                value: d
            }).set("ppos", {
                value: a
            });
            c = z(c, 29);
            b.set.call(b, "scor", {
                value: null == c ? void 0 : c
            })
        }, function(a, b) {
            var c = a.da,
                d = c.W,
                e = c.N.R;
            c = a.tf;
            var f = c.Pe,
                g = c.Le;
            b.set("eid", {
                value: a.ga.dd
            }).set("debug_experiment_id", {
                value: hy().split(",")
            }).set("expflags", {
                value: _.Og(253) ? bk(Yv) || null : null
            }).set("pied", {
                value: function() {
                    if (!_.G(Bw)) return null;
                    var h = new ZH,
                        k = !1,
                        l = !1;
                    f && (k = !0, af(h, 1, Nm, f));
                    var n = d.map(function(p) {
                        var r = new WH,
                            u;
                        p = null == (u = e[p.getDomId()]) ? void 0 : Uc(u, Nm, 27);
                        if (null == p || !p.length) return r;
                        l = k = !0;
                        u = _.B(p);
                        for (p = u.next(); !p.done; p = u.next()) af(r, 1, Nm, p.value);
                        return r
                    });
                    l && Rc(h, 2, n);
                    n = _.B(g);
                    for (var m = n.next(); !m.done; m = n.next()) af(h, 1, Nm, m.value), k = !0;
                    return k ? mc(We(h, $H), 3) : null
                }()
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.context;
            c = c.Ca;
            b.set("output", {
                value: a.ke.Wb
            }).set("gdfp_req", {
                value: 1
            }).set("vrg", {
                value: d.kb ? String(d.kb) : d.Ha
            }).set("ptt", {
                value: 17
            }).set("impl", {
                value: c ? "fifs" : "fif"
            })
        }, function(a, b) {
            a = a.da.N.V;
            b.set("co", {
                value: 0 !== ee(a, 24, 0) ? ee(a, 24, 0) : null,
                options: {
                    Aa: !0
                }
            })
        }, function(a, b) {
            var c = a.ga.aa;
            a = gE(a.da.N.V) || new dE;
            var d = ee(a, 6, 2);
            b.set("rdp", {
                value: F(a, 1) ? "1" : null
            }).set("ltd", {
                value: F(a, 9) ? "1" : null
            }).set("gdpr_consent", {
                value: ms(c, 2)
            }).set("gdpr", {
                value: ok(c, 3) ? F(c, 3) ? "1" : "0" : null,
                options: {
                    Aa: !0
                }
            }).set("addtl_consent", {
                value: ms(c, 4)
            }).set("tcfe", {
                value: ks(c, 7)
            }).set("us_privacy", {
                value: ms(c, 1)
            }).set("npa", {
                value: F(c, 6) || F(a, 8) ? 1 : null
            }).set("puo", {
                value: _.G(Aw) && F(a, 13) ? 1 : null
            }).set("tfua", {
                value: 2 !== d ? d : null,
                options: {
                    Aa: !0
                }
            }).set("tfcd", {
                value: ok(a, 5) ? z(a, 5) : null,
                options: {
                    Aa: !0
                }
            }).set("trt", {
                value: ok(a, 10) ? z(a, 10) : null,
                options: {
                    Aa: !0
                }
            }).set("tad", {
                value: ok(c, 8) ? F(c, 8) ? "1" : "0" : null,
                options: {
                    Aa: !0
                }
            })
        }, function(a, b) {
            var c = a.da,
                d = c.N,
                e = c.W,
                f = c.hd;
            c = a.ga;
            var g = c.G;
            a = c.L;
            c = c.Ca;
            var h = e.map(function(n) {
                    return d.R[n.getDomId()]
                }),
                k = [],
                l = e.map(function(n) {
                    return n.getAdUnitPath().replace(/,/g, ":").split("/").map(function(m) {
                        if (!m) return "";
                        var p = _.w(k, "findIndex").call(k, function(r) {
                            return r === m
                        });
                        return 0 <= p ? p : k.push(m) - 1
                    }).join("/")
                });
            b.set("iu_parts", {
                value: k
            }).set("enc_prev_ius", {
                value: l
            }).set("prev_iu_szs", {
                value: h.map(function(n) {
                    return yh(n)
                })
            }).set("fluid", {
                value: function() {
                    var n = !1,
                        m = h.map(function(p) {
                            p = (E = vh(p), _.w(E, "includes")).call(E, "fluid");
                            n || (n = p);
                            return p ? "height" : "0"
                        });
                    return n ? m : null
                }()
            }).set("ifi", {
                value: function() {
                    var n = ni(g);
                    if (!f) {
                        n += 1;
                        var m = g,
                            p = e.length;
                        p = void 0 === p ? 1 : p;
                        m = kv(Jd(m)) || m;
                        m.google_unique_id = (m.google_unique_id || 0) + p
                    }
                    return n
                }()
            }).set("adks", {
                value: mm(e, a, c, d)
            }).set("didk", {
                value: _.G(Jw) ? Sl(e, function(n) {
                    return zh(n.getDomId())
                }, {
                    pa: "~"
                }) : null
            })
        }, function(a, b) {
            var c = a.da;
            a = c.W;
            c = c.N;
            var d = c.V,
                e = c.R;
            b.set("sfv", {
                value: eH ? eH : eH = dk()
            }).set("fsfs", {
                value: Sl(a, function(f) {
                    f = e[f.getDomId()];
                    var g;
                    return Number(null != (g = null == f ? void 0 : ls(f, 12)) ? g : F(d, 13))
                }, {
                    Ob: 0
                })
            }).set("fsbs", {
                value: Sl(a, function(f) {
                    f = e[f.getDomId()].Qa();
                    var g = d.Qa(),
                        h;
                    return (null != (h = null == f ? void 0 : ls(f, 3)) ? h : null == g ? 0 : F(g, 3)) ? 1 : 0
                }, {
                    Ob: 0
                })
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.L,
                e = c.G;
            a = a.da;
            c = a.W;
            var f = a.hd;
            b.set("ris", {
                value: Sl(c, function(g) {
                    var h, k;
                    g = null != (k = null == (h = d.j.get(g)) ? void 0 : h.Pd) ? k : 0;
                    h = _.se(e);
                    return g && h ? Math.round(Math.min((h - g) / 1E3, 1800)) : null
                }, {
                    pa: "~"
                })
            }).set("rcs", {
                value: Sl(c, function(g) {
                    if (!f) {
                        var h = void 0 === h ? _.t : h;
                        var k = d.j.get(g);
                        k && (k.Pd = _.se(h) || 0, k.be++)
                    }
                    return CF(d, g)
                }, {
                    Ob: 0
                })
            })
        }, function(a, b) {
            var c = a.da;
            a = a.ga.Ca;
            c = c.N.R[c.W[0].getDomId()];
            b.set("click", {
                value: !a && c.getClickUrl() ? z(c, 7) : null
            })
        }, function(a, b, c) {
            var d = a.da,
                e = d.W,
                f = d.N.R;
            a = a.ga;
            var g = a.aa,
                h = a.G;
            c = void 0 === c ? function(k, l) {
                return me(k, l)
            } : c;
            a = e.map(function(k) {
                return f[k.getDomId()]
            });
            b.set("ists", {
                value: Rl(a, function(k) {
                    return 0 !== Fl(k)
                }) || null
            }).set("fas", {
                value: Sl(a, function(k) {
                    return Jl(Fl(k))
                }, {
                    Ob: 0
                })
            }).set("itsi", {
                value: e.some(function(k) {
                    var l;
                    return !Gl(k) && 5 === (null == (l = f[k.getDomId()]) ? void 0 : Fl(l))
                }) ? function() {
                    var k = c(g, h);
                    if (!k) return 1;
                    var l;
                    k = Math.max.apply(Math, _.Nd(null != (l = _.Bl((0, D.J)(k), 604800)) ? l : []));
                    return isFinite(k) ? Math.floor(Math.max((Date.now() - k) / 6E4, 1)) : null
                }() : null
            })
        }, function(a, b) {
            a = a.da;
            var c = a.N.R;
            a = a.W.map(function(d) {
                return c[d.getDomId()]
            });
            b.set("rbvs", {
                value: Rl(a, function(d) {
                    return 4 === Fl(d)
                }) || null
            })
        }, function(a, b) {
            var c = a.da,
                d = c.N,
                e = c.N.V,
                f = c.W;
            c = c.Za;
            var g = a.ga;
            a = g.isSecureContext;
            g = g.G;
            b = b.set("prev_scp", {
                value: am(f, d)
            });
            var h = b.set,
                k = d.V,
                l = d.R,
                n = new hi;
            n.set(0, 1 !== c);
            l = l[f[0].getDomId()];
            n.set(1, !!F(l, 17));
            n.set(2, gm(f, d));
            n.set(3, F(k, 27) || !1);
            n.set(4, 3 === c);
            d = ji(n);
            h.call(b, "eri", {
                value: d
            }).set("cust_params", {
                value: cm(e),
                options: {
                    pa: "&"
                }
            }).set("ppid", {
                value: 1 !== ee(e, 24, 0) && hf(e, 16) ? z(e, 16) : null,
                options: {
                    Aa: !0
                }
            }).set("gct", {
                value: Yl("google_preview", g)
            }).set("sc", {
                value: a ? 1 : 0,
                options: {
                    Aa: !0
                }
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.G,
                e = c.aa;
            c = c.ya;
            a = a.da.N.V;
            var f = dm(a.ta());
            if (0 === ee(a, 24, 0)) {
                var g = wz(c, "__gads", e);
                a = "1" === wz(c, "__gpi_opt_out", e) ? "1" : null;
                b = b.set("cookie", {
                    value: g,
                    options: {
                        Aa: !0
                    }
                }).set("cookie_enabled", {
                    value: !g && xz(c, e) ? "1" : null
                });
                g = d.document;
                var h = g.domain;
                d = b.set.call(b, "cdm", {
                    value: (f || Eh(d)) === g.URL ? "" : h
                });
                f = d.set;
                e = (e = wz(c, "__gpi", e)) && !_.w(e, "includes").call(e, "&") ? e : null;
                f.call(d, "gpic", {
                    value: e
                }).set("gpico", {
                    value: a
                }).set("pdopt", {
                    value: a
                })
            }
        }, function(a, b) {
            a = a.ga.G;
            b.set("arp", {
                value: dj(a) ? 1 : null
            }).set("abxe", {
                value: Gd(a.top) || Su(a.IntersectionObserver) ? 1 : null
            })
        }, function(a, b) {
            var c = a.ga.G;
            a = dm(a.da.N.V.ta());
            b.set("dt", {
                value: (new Date).getTime()
            });
            if (!a) {
                try {
                    var d = Math.round(Date.parse(c.document.lastModified) / 1E3) || null
                } catch (e) {
                    d = null
                }
                b.set("lmt", {
                    value: d
                })
            }
            d = nm;
            c = ue(c);
            0 < c && d >= c && b.set("dlt", {
                value: c
            }).set("idt", {
                value: d - c
            })
        }, function(a, b) {
            var c = a.da,
                d = c.N,
                e = c.W,
                f = c.N;
            c = f.V;
            f = f.R;
            var g = a.ga;
            a = g.G;
            var h = g.Ca;
            g = uh(!0, a);
            for (var k = a.document, l = [], n = [], m = _.B(e), p = m.next(); !p.done; p = m.next()) {
                p = p.value;
                var r = f[p.getDomId()];
                p = Wh(p, r, k, Ch(c, r));
                r = void 0;
                var u = h ? null != (r = p) ? r : aI : p;
                u && (l.push(Math.round(u.x)), n.push(Math.round(u.y)))
            }
            g && (d.Hb = g);
            c = Dh(a) ? null : uh(!1, a);
            try {
                var v = a.top;
                var x = hm(v.document, v)
            } catch (I) {
                x = new _.Gh(-12245933, -12245933)
            }
            b.set("adxs", {
                value: l
            }).set("adys", {
                value: n
            }).set("biw", {
                value: g ? g.width : null
            }).set("bih", {
                value: g ? g.height : null
            }).set("isw", {
                value: g ? null == c ? void 0 : c.width : null
            }).set("ish", {
                value: g ? null == c ? void 0 : c.height : null
            }).set("scr_x", {
                value: Math.round(x.x),
                options: {
                    Aa: !0
                }
            }).set("scr_y", {
                value: Math.round(x.y),
                options: {
                    Aa: !0
                }
            }).set("btvi", {
                value: jm(e, a, d),
                options: {
                    Aa: !0,
                    pa: "|"
                }
            })
        }, function(a, b) {
            var c = a.ga.L;
            b.set("ucis", {
                value: a.da.W.map(function(d) {
                    d = (0, D.J)(c.j.get(d));
                    null != d.bc || (d.bc = window === window.top ? (++c.o).toString(36) : ou());
                    return d.bc
                }),
                options: {
                    pa: "|"
                }
            }).set("oid", {
                value: 2
            })
        }, function(a, b) {
            a = a.da;
            var c = a.W,
                d = a.N,
                e = d.R;
            a = new y.Map;
            d = _.B(d.V.ta());
            for (var f = d.next(); !f.done; f = d.next()) {
                var g = f.value;
                a.set((0, D.J)(Nj(g)), [Xk(g, 2)[0]])
            }
            for (d = 0; d < c.length; d++)
                if (g = e[c[d].getDomId()])
                    for (g = _.B(g.ta()), f = g.next(); !f.done; f = g.next()) {
                        var h = f.value;
                        f = (0, D.J)(Nj(h));
                        var k = a.get(f) || [];
                        h = Xk(h, 2)[0];
                        1 === c.length ? k[0] = h : h !== k[0] && (k[d + 1] = h);
                        a.set(f, k)
                    }
            c = [];
            e = _.B(_.w(a, "keys").call(a));
            for (d = e.next(); !d.done; d = e.next()) g = d.value, d = FF()[g], g = a.get(g), d && g && (1 < g.length ? (g = g.map(function(l) {
                return encodeURIComponent(l || "")
            }).join(), c.push(d + "," + g)) : 1 === g.length && "url" !== d && b.set(d, {
                value: g[0]
            }));
            c.length && (_.G(lm) ? b.set("sps", {
                value: c,
                options: {
                    pa: "|"
                }
            }) : b.set("sps", {
                value: c.join("|")
            }))
        }, function(a, b) {
            var c = a.da.N.V;
            a = a.ga.G;
            var d = _.Og(251),
                e, f, g, h, k, l, n;
            var m = a;
            m = void 0 === m ? iu : m;
            try {
                var p = m.history.length
            } catch (lb) {
                p = 0
            }
            b = b.set("u_his", {
                value: p
            }).set("u_h", {
                value: null == (e = a.screen) ? void 0 : e.height
            }).set("u_w", {
                value: null == (f = a.screen) ? void 0 : f.width
            }).set("u_ah", {
                value: null == (g = a.screen) ? void 0 : g.availHeight
            }).set("u_aw", {
                value: null == (h = a.screen) ? void 0 : h.availWidth
            }).set("u_cd", {
                value: null == (k = a.screen) ? void 0 : k.colorDepth
            });
            e = b.set;
            f = a;
            f = void 0 === f ? _.t : f;
            f = f.devicePixelRatio;
            e = e.call(b, "u_sd", {
                value: "number" === typeof f ? +f.toFixed(3) : null
            }).set("u_tz", {
                value: -(new Date).getTimezoneOffset()
            });
            f = e.set;
            try {
                var r, u, v, x, I = null != (x = null == (r = a.external) ? void 0 : null == (u = r.getHostEnvironmentValue) ? void 0 : null == (v = u.bind(a.external)) ? void 0 : v("os-mode")) ? x : "",
                    K, M = Number(null == (K = JSON.parse(I)) ? void 0 : K["os-mode"]);
                var S = 0 <= M ? M + 1 : null
            } catch (lb) {
                S = null
            }
            S = f.call(e, "wsm", {
                value: S
            }).set("dmc", {
                value: null != (n = null == (l = a.navigator) ? void 0 : l.deviceMemory) ? n : null
            });
            l = S.set;
            (c = z(c, 8)) ? (50 < c.length && (c = c.substring(0, 50)), c = "a " + Vr('role:1 producer:12 loc:"' + c + '"')) : c = "";
            c = l.call(S, "uule", {
                value: c
            });
            l = c.set;
            n = a;
            n = void 0 === n ? _.t : n;
            S = new hi;
            n.SVGElement && n.document.createElementNS && S.set(0);
            r = Ru();
            r["allow-top-navigation-by-user-activation"] && S.set(1);
            r["allow-popups-to-escape-sandbox"] && S.set(2);
            n.crypto && n.crypto.subtle && S.set(3);
            n.TextDecoder && n.TextEncoder && S.set(4);
            n = ji(S);
            d = l.call(c, "bc", {
                value: n
            }).set("uach", {
                value: d ? Vr(d, 3) : null
            });
            c = d.set;
            if (_.Og(221)) var T = null;
            else if (l = null == (T = a.navigator) ? void 0 : T.userActivation) {
                T = 0;
                if (null == l ? 0 : l.hasBeenActive) T |= 1;
                if (null == l ? 0 : l.isActive) T |= 2
            } else T = void 0;
            T = c.call(d, "uas", {
                value: T
            });
            d = T.set;
            a: {
                try {
                    var Y, aa, ia = null == (Y = a.performance) ? void 0 : null == (aa = Y.getEntriesByType("navigation")) ? void 0 : aa[0];
                    if (null == ia ? 0 : ia.type) {
                        var Xa;
                        var za = null != (Xa = nD.get(ia.type)) ? Xa : null;
                        break a
                    }
                } catch (lb) {}
                var ta, va, Da;za = null != (Da = oD.get(null == (ta = a.performance) ? void 0 : null == (va = ta.navigation) ? void 0 : va.type)) ? Da : null
            }
            d.call(T, "nvt", {
                value: za
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.G,
                e = c.L,
                f = c.Ca;
            c = a.da;
            var g = c.W;
            c = c.N;
            var h = c.V,
                k = c.R;
            a = a.qf.Oe;
            c = Zl("google_preview", d);
            var l = d.document,
                n = c ? em(l.URL) : l.URL;
            l = c ? em(l.referrer) : l.referrer;
            c = !1;
            if (f) f = dm(h.ta());
            else {
                var m;
                f = null != (m = dm(k[g[0].getDomId()].ta())) ? m : dm(h.ta())
            }
            if (null != f) {
                var p = n;
                Dh(d) || (l = "", c = !0)
            } else f = n;
            m = fm(d);
            b.set("nhd", {
                value: m || null
            }).set("url", {
                value: f
            }).set("loc", {
                value: null !== p && p !== f ? p : null
            }).set("ref", {
                value: l
            });
            if (m) {
                p = b.set;
                var r;
                var u, v;
                m = Gd(d.top) && (null == (u = d.top) ? void 0 : null == (v = u.location) ? void 0 : v.href);
                var x;
                u = null == (x = d.location) ? void 0 : x.ancestorOrigins;
                d = bj(d) || "";
                x = (null == u ? void 0 : u[u.length - 1]) || "";
                _.G(fx) ? (f = (v = x && Gu(x.match(_.Fu)[3] || null) && Gu(x.match(_.Fu)[3] || null) !== Gu(d.match(_.Fu)[3] || null)) ? x : d || x, u = null != (r = null == u ? void 0 : u.length) ? r : 0, .001 > he() && ke({
                    uaoo: v ? "1" : "0",
                    ltw: m || "",
                    rtw: d,
                    aotw: x,
                    aol: String(u)
                }, "tpurl"), r = m || f || "") : r = m || d || x;
                r = r ? c ? Gu(r.match(_.Fu)[3] || null) : r : null;
                p.call(b, "top", {
                    value: r
                }).set("etu", {
                    value: e.qc
                })
            }
            b.set("scar", {
                value: a
            })
        }, function(a, b) {
            a = a.ga.context.pvsid;
            b.set("rumc", {
                value: _.G(hx) || _.ze($g).j ? a : null
            }).set("rume", {
                value: _.G(sw) ? 1 : null
            })
        }, function(a, b) {
            a = a.ga.G;
            var c = b.set;
            var d = ev(a);
            var e = Ux(a, a.google_ad_width, a.google_ad_height);
            var f = d.location.href;
            if (d == d.top) f = !0;
            else {
                var g = !1,
                    h = d.document;
                h && h.referrer && (f = h.referrer, d.parent == d.top && (g = !0));
                (d = d.location.ancestorOrigins) && (d = d[d.length - 1]) && -1 == f.indexOf(d) && (g = !1, f = d);
                f = g
            }
            g = a.top == a ? 0 : Gd(a.top) ? 1 : 2;
            d = 4;
            e || 1 != g ? e || 2 != g ? e && 1 == g ? d = 7 : e && 2 == g && (d = 8) : d = 6 : d = 5;
            f && (d |= 16);
            e = "" + d;
            if (a != a.top)
                for (f = a; f && f != f.top && Gd(f) && !f.sf_ && !f.$sf && !f.inGptIF && !f.inDapIF; f = f.parent);
            c.call(b, "frm", {
                value: e || null
            }).set("vis", {
                value: sD(a.document)
            })
        }, function(a, b) {
            var c = a.da.W;
            a = a.ga.G;
            for (var d = [], e = [], f = _.B(c), g = f.next(); !g.done; g = f.next()) {
                var h = void 0,
                    k = void 0,
                    l = void 0;
                var n = a;
                g = Qh(g.value);
                var m = Vu((null == g ? void 0 : g.parentElement) && Sh(g.parentElement, n) || null);
                !m || 1 === m[0] && 1 === m[3] ? (m = null != (l = null == g ? void 0 : g.parentElement) ? l : null, l = null != (k = Kh(m)) ? k : new _.Jh(0, 0), Wl(l, m, n, 100), k = null != (h = Kh(g)) ? h : new _.Jh(0, 0), Wl(k, g, n, 1), -1 === l.height && (k.height = -1), n = l, k = h = k, h = n.width + "x" + n.height, n = k.width + "x" + k.height) : n = h = "-1x-1";
                d.push(h);
                e.push(n)
            }
            null == UH && (f = Ux(a, 500, 300), n = a.navigator, h = n.userAgent, k = n.platform, n = n.product, !/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && /^Opera/.test(h) ? h = !1 : /Win/.test(k) && /Trident/.test(h) && 11 <= a.document.documentMode ? h = !0 : (k = (/WebKit\/(\d+)/.exec(h) || [0, 0])[1], g = (/rv:(\d+\.\d+)/.exec(h) || [0, 0])[1], h = !k && "Gecko" === n && 27 <= g && !/ rv: 1\.8([^.] |\.0) /.test(h) || 536 <= k ? !0 : !1), UH = h && !f);
            g = 0 !== (0, _.Ml)();
            f = uh(!0, a, g).width;
            h = [];
            n = [];
            k = [];
            null !== a && a != a.top && (l = uh(!1, a).width, (-12245933 === f || -12245933 === l || l < f) && k.push(8)); - 12245933 !== f && (1.5 * f < a.document.documentElement.scrollWidth ? k.push(10) : g && 1.5 * a.outerWidth < f && k.push(10));
            c = _.B(c);
            for (l = c.next(); !l.done; l = c.next()) {
                g = new hi;
                m = Qh(l.value);
                l = 0;
                var p = !1,
                    r = !1;
                if (m) {
                    for (var u = 0, v = m; v && 100 > u; u++, v = v.parentElement) {
                        var x = Sh(v, a);
                        if (x) {
                            var I = x,
                                K = I.display,
                                M = I.overflowX;
                            if ("visible" !== I.overflowY && (g.set(2), (I = Kh(v)) && (l = l ? Math.min(l, I.width) : I.width), g.get(9))) break;
                            Ul(x) && g.set(9);
                            "none" === K && g.set(7);
                            "IFRAME" === v.nodeName && (x = parseInt(x.width, 10), x < f && (g.set(8), l = l ? Math.min(x, l) : x));
                            r || (r = "scroll" === M || "auto" === M);
                            p || (p = "flex" === K)
                        } else g.set(3)
                    }
                    r && p && (m = m.getBoundingClientRect().left, (m > f || 0 > m) && g.set(11))
                } else g.set(1);
                m = _.B(k);
                for (p = m.next(); !p.done; p = m.next()) g.set(p.value);
                h.push(ji(g));
                n.push(l)
            }
            b.set("psz", {
                value: d,
                options: {
                    pa: "|"
                }
            }).set("msz", {
                value: e,
                options: {
                    pa: "|"
                }
            }).set("fws", {
                value: h
            }).set("ohw", {
                value: n
            }).set("ea", {
                value: UH ? null : "0",
                options: {
                    Aa: !0
                }
            })
        }, function(a, b) {
            var c = a.da,
                d = c.W,
                e = c.N.R,
                f = a.ga.G;
            _.G(Kk) || (a = d.map(function(g) {
                return e[g.getDomId()]
            }), c = a.some(function(g) {
                return wh(g, xh, 16)
            }), b.set("rtgs", {
                value: c ? a.map(function(g) {
                    return wh(g, xh, 16) ? vh(g).length ? "1" : "2" : "0"
                }) : null,
                options: {
                    pa: "!"
                }
            }).set("max_w", {
                value: c ? a.map(function(g) {
                    return pm(Le(g, xh, 16), f)
                }) : null,
                options: {
                    pa: "!"
                }
            }).set("max_h", {
                value: c ? a.map(function(g) {
                    return qm(Le(g, xh, 16), f)
                }) : null,
                options: {
                    pa: "!"
                }
            }).set("min_w", {
                value: c ? a.map(function(g) {
                    return rm(Le(g, xh, 16))
                }) : null,
                options: {
                    pa: "!"
                }
            }).set("min_h", {
                value: c ? a.map(function(g) {
                    return sm(Le(g, xh, 16))
                }) : null,
                options: {
                    pa: "!"
                }
            }))
        }, function(a, b) {
            b.set("psts", {
                value: BF(a.ga.L, a.da.W)
            })
        }, function(a, b) {
            var c = a.ga;
            a = c.aa;
            c = c.G;
            var d;
            var e = c.document.domain,
                f = null != (d = F(a, 5) && ne(c) ? c.document.cookie : null) ? d : "",
                g = c.history.length,
                h = c.screen,
                k = c.document.referrer;
            if (Jd()) var l = window.gaGlobal || {};
            else {
                var n = Math.round((new Date).getTime() / 1E3),
                    m = c.google_analytics_domain_name;
                e = "undefined" == typeof m ? Qx("auto", e) : Qx(m, e);
                var p = -1 < f.indexOf("__utma=" + e + "."),
                    r = -1 < f.indexOf("__utmb=" + e);
                (d = (kv() || window).gaGlobal) || (d = {}, (kv() || window).gaGlobal = d);
                var u = !1;
                if (p) {
                    var v = f.split("__utma=" + e + ".")[1].split(";")[0].split(".");
                    r ? d.sid = v[3] : d.sid || (d.sid = n + "");
                    d.vid = v[0] + "." + v[1];
                    d.from_cookie = !0
                } else {
                    d.sid || (d.sid = n + "");
                    if (!d.vid) {
                        u = !0;
                        r = Math.round(2147483647 * Math.random());
                        p = Ox.appName;
                        var x = Ox.version,
                            I = Ox.language ? Ox.language : Ox.browserLanguage,
                            K = Ox.platform,
                            M = Ox.userAgent;
                        try {
                            v = Ox.javaEnabled()
                        } catch (S) {
                            v = !1
                        }
                        v = [p, x, I, K, M, v ? 1 : 0].join("");
                        h ? v += h.width + "x" + h.height + h.colorDepth : _.t.java && _.t.java.awt && (h = _.t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), v += h.screen.width + "x" + h.screen.height);
                        v = v + f + (k || "");
                        for (k = v.length; 0 < g;) v += g-- ^ k++;
                        d.vid = (r ^ Px(v) & 2147483647) + "." + n
                    }
                    d.from_cookie || (d.from_cookie = !1)
                }
                if (!d.cid) {
                    b: for (n = 999, m && (m = 0 == m.indexOf(".") ? m.substr(1) : m, n = m.split(".").length), m = 999, f = f.split(";"), v = 0; v < f.length; v++)
                        if (k = Rx.exec(f[v]) || Sx.exec(f[v]) || Tx.exec(f[v])) {
                            h = k[1] || 0;
                            if (h == n) {
                                l = k[2];
                                break b
                            }
                            h < m && (m = h, l = k[2])
                        }u && l && -1 != l.search(/^\d+\.\d+$/) ? (d.vid = l, d.from_cookie = !0) : l != d.vid && (d.cid = l)
                }
                d.dh = e;
                d.hid || (d.hid = Math.round(2147483647 * Math.random()));
                l = d
            }
            e = l.sid;
            d = l.hid;
            u = l.from_cookie;
            f = l.cid;
            u && !F(a, 5) || b.set("ga_vid", {
                value: l.vid
            }).set("ga_sid", {
                value: e
            }).set("ga_hid", {
                value: d
            }).set("ga_fc", {
                value: u
            }).set("ga_cid", {
                value: f
            }).set("ga_wpids", {
                value: c.google_analytics_uacct
            })
        }, function(a, b) {
            a = a.ga;
            var c = a.G;
            a = a.context.pvsid;
            b = b.set("js", {
                value: _.G(Rv) ? Vx(c) : null
            });
            var d = b.set;
            if (_.G(Rv)) a: {
                var e = c;e = void 0 === e ? window : e;
                if (c = Vx(e)) {
                    var f = null;
                    try {
                        "afma-gpt-sdk-a" == c ? f = e._gmptnl.pm("GAM=", a.toString()) || "5" : (f = e.__gmptnl_n || "5", e.webkit.messageHandlers._gmptnl.postMessage("GAM="))
                    } catch (g) {
                        a = "3";
                        break a
                    }
                    a = "string" === typeof f ? f : "3"
                } else a = null
            }
            else a = null;
            d.call(b, "ms", {
                value: a
            })
        }, function(a, b) {
            var c = a.ga.G;
            a = c.navigator;
            c = c.document;
            _.G(px) || "runAdAuction" in a && "joinAdInterestGroup" in a && Rf("run-ad-auction", c) && b.set("td", {
                value: 1
            })
        }, function(a, b) {
            var c = a.Hf.If;
            Rf("browsing-topics", a.ga.G.document) && b.set("topics", {
                value: c instanceof Uint8Array ? mc(c, 3) : c
            })
        }, function(a, b) {
            var c = a.ga,
                d = c.G;
            c = c.aa;
            var e = a.da.W,
                f = a.Df;
            a = f.sf;
            f = f.Ee;
            _.G(bx) || b.set("a3p", {
                value: Ye(me(c, d), Lg(e[0].getAdUnitPath()), a, f)
            })
        }, function(a, b) {
            b.set("cbidsp", {
                value: Sl(a.Wc.Xc, function(c) {
                    return mc(We(c, ct), 3)
                }, {
                    pa: "~"
                })
            })
        }, function(a, b) {
            a = a.da.N.V;
            wh(a.zc(), Sn, 1) && (a = Rn(a.zc(), Sn, 1), b.set("cmrv", {
                value: 1
            }).set("cmrq", {
                value: z(a, 1)
            }).set("cmrc", {
                value: Xk(a, 2),
                options: {
                    pa: ">"
                }
            }).set("cmrids", {
                value: Xk(a, 3),
                options: {
                    pa: "!"
                }
            }).set("cmrf", {
                value: z(a, 4)
            }))
        }, function(a, b) {
            var c = [];
            a = _.B(Uc(Rn(a.da.N.V.zc(), Un, 2), mn, 1));
            for (var d = a.next(); !d.done; d = a.next()) d = d.value, Xk(d, 2).length && c.push(ee(d, 1, 0) + "=" + Xk(d, 2).join("|"));
            b.set("pps", {
                value: c,
                options: {
                    pa: "~"
                }
            })
        }]),
        cI = function(a) {
            this.m = a;
            this.D = [];
            this.j = "";
            this.I = new y.Set(df(Iw));
            a = _.B(F(this.m.ga.aa, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id adsid".split(" ") : []);
            for (var b = a.next(); !b.done; b = a.next()) this.I.add(b.value)
        },
        fI = function(a) {
            if (0 === a.m.da.W.length) return "";
            for (var b = new y.Map, c = _.B(bI), d = c.next(); !d.done; d = c.next()) d = d.value, d(a.m, b);
            b = _.B(b);
            for (c = b.next(); !c.done; c = b.next()) d = _.B(c.value), c = d.next().value, d = d.next().value, dI(a, c, d.value, d.options);
            a.j = "https://" + (eI(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
            b = _.B(a.D);
            for (d = b.next(); !d.done; d = b.next()) {
                c = a;
                d = d.value;
                var e = d.value;
                var f = d.options,
                    g = void 0 === f.pa ? "," : f.pa;
                f = void 0 === f.Aa ? !1 : f.Aa;
                if (e = "object" !== typeof e ? null == e || !f && 0 === e ? null : encodeURIComponent(e) : Array.isArray(e) && e.length ? encodeURIComponent(e.join(g)) : null) "?" !== c.j[c.j.length - 1] && (c.j += "&"), c.j += d.Ud + "=" + e
            }
            return a.j
        },
        eI = function(a) {
            var b = a.m;
            a = b.ga.aa;
            var c, d;
            b = null != (d = null == (c = gE(b.da.N.V)) ? void 0 : F(c, 9)) ? d : !1;
            c = F(a, 8);
            return b || c || !F(a, 5)
        },
        dI = function(a, b, c, d) {
            d = void 0 === d ? {} : d;
            a.D.some(function(e) {
                return b === e.Ud
            });
            a.I.has(b) || null == c || a.D.push({
                Ud: b,
                value: c,
                options: d
            })
        };
    var iI = function(a, b, c, d) {
            var e = this;
            this.context = a;
            this.L = c;
            this.j = new y.Map;
            this.m = new y.Map;
            this.rb = _.ze($g);
            window.performance && Su(window.performance.now) && (_.db(window, "DOMContentLoaded", _.Xg(a, 334, function() {
                for (var f = _.B(e.j), g = f.next(); !g.done; g = f.next()) {
                    var h = _.B(g.value);
                    g = h.next().value;
                    h = h.next().value;
                    gI(e, g, h) && e.j.delete(g)
                }
            })), kF(b, pF, function(f) {
                f = f.detail;
                var g = f.R;
                return void hI(e, (0, D.J)(dn(d, f.td)), (0, D.J)(z(g, 20)))
            }), kF(b, qF, function(f) {
                f = f.detail;
                var g = f.R;
                f = (0, D.J)(dn(d, f.td));
                g = (0, D.J)(z(g, 20));
                var h = e.m.get(f);
                null != h ? cF(h, g) : hI(e, f, g)
            }))
        },
        hI = function(a, b, c) {
            gI(a, b, c) ? a.j.delete(b) : (a.j.set(b, c), _.Jm(b, function() {
                return a.j.delete(b)
            }))
        },
        gI = function(a, b, c) {
            var d = Qh(b);
            if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
            d = new aF({
                G: window,
                rb: a.rb,
                Xa: (0, D.sa)(d),
                Ga: function(e) {
                    return void bh(a.context, 336, e)
                },
                Ff: _.G(hx)
            });
            if (!d.j) return !1;
            cF(d, c);
            a.m.set(b, d);
            xF(a.L, b, function() {
                return void a.m.delete(b)
            });
            return !0
        };
    var jI = function(a) {
        this.m = a;
        this.D = this.j = 0
    };
    jI.prototype.push = function() {
        for (var a = _.B(ab.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(y.globalThis), this.j++)
            } catch (c) {
                this.D++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.m.error(VF(String(c)))
            }
        }
        this.m.info(WF(String(this.j), String(this.D)));
        return this.j
    };
    var kI = function(a, b) {
        Z.call(this, a, 931);
        this.B = V(this);
        this.l = V(this);
        this.o = X(this, b)
    };
    _.P(kI, Z);
    kI.prototype.j = function() {
        var a = this.o.value,
            b = new y.Map;
        this.B.j(new y.Map);
        if (a) {
            var c;
            a = _.B(null != (c = this.o.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = Uc(d, ht, 1);
                c = 1 === ee(c[0], 1, 0) ? is(c[0]) : js(c[0], hs);
                d = Yi(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.l.j(b)
    };
    var lI = function(a, b) {
        Z.call(this, a, 981);
        this.o = V(this);
        this.l = V(this);
        this.B = X(this, b)
    };
    _.P(lI, Z);
    lI.prototype.j = function() {
        var a = new y.Map,
            b, c = _.B(null != (b = this.B.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = Uc(b, ht, 1);
            d = 1 === ee(d[0], 1, 0) ? is(d[0]) : js(d[0], hs);
            a.set(d, Yi(b, 2))
        }
        this.o.j(a);
        this.l.j(new Vs)
    };
    var mI = function(a, b, c, d, e) {
        Z.call(this, a, 980);
        this.A = new az;
        this.F = W(this, b);
        this.B = W(this, c);
        this.l = W(this, d);
        this.o = W(this, e)
    };
    _.P(mI, Z);
    mI.prototype.j = function() {
        (E = _.w(Object, "entries").call(Object, this.F.value), _.w(E, "find")).call(E, function(c) {
            var d = _.B(c);
            c = d.next().value;
            d = d.next().value;
            return "*" !== c && (null == d ? void 0 : d.Fc)
        }) && (_.ze(uk).l = !0);
        vk(25);
        for (var a = _.B([].concat(_.Nd(this.B.value), _.Nd(this.l.value), _.Nd(this.o.value))), b = a.next(); !b.done; b = a.next()) hq(b.value);
        this.A.notify()
    };
    var nI = function(a, b) {
        Z.call(this, a, 892, _.we(yw));
        this.B = V(this);
        this.F = V(this);
        this.o = V(this);
        this.l = V(this);
        this.Xb = V(this);
        this.K = gz(this, b)
    };
    _.P(nI, Z);
    nI.prototype.j = function() {
        var a = this.K.value;
        if (!a) throw Error("config timeout");
        var b;
        Ty(this.B, null != (b = Le(a, pt, 3)) ? b : null);
        var c;
        Ty(this.F, null != (c = Le(a, st, 2)) ? c : null);
        this.o.j(Vm(a, 4));
        Ty(this.l, Uc(a, gf, 6));
        Ty(this.Xb, Uc(a, Dt, 5))
    };
    nI.prototype.H = function(a) {
        this.m(a)
    };
    nI.prototype.m = function(a) {
        Wy(this.B, a);
        Wy(this.F, a);
        this.o.j([]);
        this.l.j([]);
        this.Xb.j([])
    };
    var oI = [{
            name: "Interstitial",
            cd: 1
        }, {
            name: "TopAnchor",
            cd: 2
        }, {
            name: "BottomAnchor",
            cd: 3
        }],
        pI = function(a, b) {
            Z.call(this, a, 789);
            this.l = b;
            this.A = V(this)
        };
    _.P(pI, Z);
    pI.prototype.j = function() {
        var a = this;
        this.A.j(oI.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.l)
        }).map(function(b) {
            var c = b.name;
            b = b.cd;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            d = new Dt;
            e = new ut;
            b = _.A(e, 2, b);
            c = _.A(b, 1, "/22639388115/example/" + c.toLowerCase());
            return Ug(d, 5, Et, c)
        }))
    };
    var qI = function(a, b) {
            this.D = b;
            this.j = this.m = a
        },
        rI = function(a) {
            a.j = Math.min(a.D, 2 * a.j);
            a.m = Math.min(a.D, a.j)
        };
    var sI = function(a, b, c) {
        Z.call(this, a, 969);
        this.G = b;
        this.L = c;
        this.l = V(this)
    };
    _.P(sI, Z);
    sI.prototype.j = function() {
        var a = this;
        if (_.G(fw)) {
            var b = performance.now(),
                c = "",
                d, e = 1E3 * _.we(dw),
                f = _.we(iw),
                g = 1E3 * _.we(hw),
                h = function() {
                    return void a.G.clearInterval(l)
                };
            _.Jm(this, h);
            var k = _.Xg(this.context, this.id, function() {
                var n, m, p, r, u;
                return _.fb(function(v) {
                    switch (v.j) {
                        case 1:
                            n = xg(a.G);
                            if (!n) {
                                h();
                                v.j = 2;
                                break
                            }
                            v.D = 3;
                            m = performance.now();
                            return gb(v, n, 5);
                        case 5:
                            c = null != (p = v.m) ? p : "0";
                            _.we(jw) && (r = performance.now(), tI(a, r - m, r - b), b = m);
                            d && (d = void 0, l = a.G.setInterval(k, e));
                            c.length > f && (bh(a.context, a.id, new Mk("ML:" + c.length)), c = "0", h());
                            ib(v, 2);
                            break;
                        case 3:
                            u = jb(v), bh(a.context, a.id, u), c = "0", g ? (d ? rI(d) : (h(), d = new qI(g, e)), a.G.setTimeout(k, d.m)) : _.G(gw) || h();
                        case 2:
                            a.l.j(function() {
                                return c
                            }), v.j = 0
                    }
                })
            });
            var l = this.G.setInterval(k, e);
            k()
        } else this.l.j(function() {
            return ""
        })
    };
    sI.prototype.m = function() {
        this.l.j(function() {
            return ""
        })
    };
    var tI = function(a, b, c) {
        gi("gpt_paw_refresh", function(d) {
            mi(d, a.context);
            L(d, "prc", a.L.D);
            L(d, "sbms", b);
            L(d, "lams", c)
        }, _.we(jw))
    };
    var uI = function(a, b, c) {
        c = void 0 === c ? xg : c;
        Z.call(this, a, 1063);
        this.G = b;
        this.o = c;
        this.l = V(this)
    };
    _.P(uI, Z);
    uI.prototype.j = function() {
        var a = this;
        if (_.G(fw) && yg(this.G)) {
            var b = null,
                c = 0,
                d = 1E3 * _.we(dw),
                e = _.we(iw),
                f = _.Xg(this.context, this.id, function() {
                    var h, k, l, n;
                    return _.fb(function(m) {
                        switch (m.j) {
                            case 1:
                                return h = a.o(a.G), k = "0", m.D = 2, gb(m, h, 4);
                            case 4:
                                k = null != (l = m.m) ? l : "0";
                                k.length > e && (bh(a.context, a.id, new Mk("ML:" + k.length)), k = "0");
                                ib(m, 3);
                                break;
                            case 2:
                                n = jb(m), bh(a.context, a.id, n);
                            case 3:
                                b = k, c = _.re(a.G) + d, m.j = 0
                        }
                    })
                });
            var g = (E = f(), _.w(E, "finally")).call(E, function() {
                g = void 0
            });
            this.l.j(function() {
                var h, k;
                return _.fb(function(l) {
                    if (1 == l.j) {
                        h = _.re(a.G) >= c;
                        k = null === b || "0" === b;
                        if (!h && !k) {
                            l.j = 2;
                            return
                        }
                        g || (g = (E = f(), _.w(E, "finally")).call(E, function() {
                            g = void 0
                        }));
                        return gb(l, g, 2)
                    }
                    return l.return((0, D.J)(b))
                })
            })
        } else this.l.j(function() {
            return y.Promise.resolve("")
        })
    };
    uI.prototype.m = function() {
        this.l.j(function() {
            return y.Promise.resolve("")
        })
    };
    var vI = function(a, b, c, d) {
        Z.call(this, a, 1016);
        this.A = V(this);
        this.o = X(this, b);
        this.l = X(this, c);
        this.B = iz(this, [b, d])
    };
    _.P(vI, Z);
    vI.prototype.j = function() {
        if (this.l.value) {
            var a = this.o.value || this.B.value;
            a && wI(this, a) ? this.A.j(a) : (Uy(this.A), xI(this, a))
        } else Uy(this.A)
    };
    vI.prototype.H = function(a) {
        this.m(a)
    };
    vI.prototype.m = function() {
        Uy(this.A)
    };
    var wI = function(a, b) {
            return Uc((0, D.J)(a.l.value), tt, 1).some(function(c) {
                return c.Pa() === b
            })
        },
        xI = function(a, b) {
            gi("pp_iris_failure", function(c) {
                L(c, "fnc", b);
                mi(c, a.context)
            }, _.we(zw))
        };
    var yI = function(a, b) {
        Z.call(this, a, 1015);
        this.l = V(this);
        this.o = X(this, b)
    };
    _.P(yI, Z);
    yI.prototype.j = function() {
        if (this.o.value) {
            var a = Uc(this.o.value, tt, 1);
            (null == a ? 0 : a.length) ? (a = Uc(this.o.value, tt, 1)[0], (E = [2, 3], _.w(E, "includes")).call(E, ee(a, 3, 0)) ? this.l.j(a.Pa()) : Uy(this.l)) : Uy(this.l)
        } else Uy(this.l)
    };
    yI.prototype.H = function(a) {
        this.m(a)
    };
    yI.prototype.m = function() {
        Uy(this.l)
    };
    var zI = function(a, b, c) {
        Z.call(this, a, 1017);
        this.G = c;
        this.A = fz(this);
        this.l = X(this, b)
    };
    _.P(zI, Z);
    zI.prototype.j = function() {
        var a = this;
        if (this.l.value) {
            var b = Ex(this.G, this.l.value, function(c) {
                if (!c) {
                    c = uu(b.j);
                    for (var d = _.B(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next()) c.ne(e.value)
                }
                a.A.notify()
            });
            b.start()
        } else this.A.notify()
    };
    zI.prototype.H = function(a) {
        this.m(a)
    };
    zI.prototype.m = function() {
        this.A.notify()
    };
    var AI = function(a, b) {
        Z.call(this, a, 1056);
        this.A = V(this);
        this.l = lF(b, pF)
    };
    _.P(AI, Z);
    AI.prototype.j = function() {
        var a = this;
        this.l.then(function(b) {
            b = Lg((0, D.J)(b.detail.R.getAdUnitPath()));
            a.A.j(b)
        })
    };
    AI.prototype.H = function(a) {
        this.m(a)
    };
    AI.prototype.m = function() {
        Uy(this.A)
    };
    var BI = function(a, b, c, d) {
        Z.call(this, a, 906, _.we(xw));
        this.l = fz(this);
        if (b === b.top) {
            var e = new mf;
            _.Cm(this, e);
            var f = new yI(a, c);
            H(e, f);
            d = new AI(a, d);
            H(e, d);
            a = new vI(a, f.l, c, d.A);
            H(e, a);
            b = new zI(this.context, a.A, b);
            H(e, b);
            My(this.C, b.A, !0);
            Af(e)
        } else this.l.notify()
    };
    _.P(BI, Z);
    BI.prototype.j = function() {
        this.l.notify()
    };
    BI.prototype.H = function(a) {
        this.m(a)
    };
    BI.prototype.m = function() {
        this.l.notify()
    };
    var CI = function(a, b) {
        Z.call(this, a, 1031);
        this.G = b
    };
    _.P(CI, Z);
    CI.prototype.j = function() {
        this.G === this.G.top && aj(this.G)
    };
    var DI = function(a) {
        Z.call(this, a, 891);
        this.l = V(this);
        var b = new fp;
        this.o = W(this, b);
        (a = _.Og(260)) ? a(function(c, d) {
            if (d) Wy(b, d);
            else try {
                if ("string" === typeof c) {
                    var e = JSON.parse(c || "[]");
                    Array.isArray(e) && b.j(e)
                }
            } catch (f) {} finally {
                b.pb || Wy(b, Error("malformed response"))
            }
        }): Wy(b, Error("missing input"))
    };
    _.P(DI, Z);
    DI.prototype.j = function() {
        this.l.j(new Gt(this.o.value))
    };
    var EI = function(a, b) {
        Z.call(this, a, 966);
        this.G = b;
        this.l = V(this)
    };
    _.P(EI, Z);
    EI.prototype.j = function() {
        var a = this,
            b = zg(this.G);
        if (b) this.l.j(b);
        else if ((b = Object.getOwnPropertyDescriptor(this.G, "_pbjsGlobals")) && !b.configurable) gi("pdpg_error", function(d) {
            mi(d, a.context)
        }, _.we(Ov));
        else {
            var c = null;
            Object.defineProperty(this.G, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = zg(a.G)) && a.l.j(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    EI.prototype.m = function() {};
    var FI = function(a, b) {
        Z.call(this, a, 979);
        this.G = b;
        this.A = V(this)
    };
    _.P(FI, Z);
    FI.prototype.j = function() {
        var a = this,
            b = "function" !== typeof this.G.document.browsingTopics,
            c = !Rf("browsing-topics", this.G.document);
        b = b || c;
        !_.G(Nw) || !_.G(Tv) && b ? Uy(this.A) : Mi(this.G).then(function(d) {
            a.A.j(d)
        })
    };
    FI.prototype.m = function() {
        Uy(this.A)
    };
    var zm = function(a, b, c, d) {
        Z.call(this, a, 959);
        this.Wa = b;
        this.A = V(this);
        this.l = W(this, b);
        hz(this, c);
        hz(this, d)
    };
    _.P(zm, Z);
    zm.prototype.j = function() {
        this.A.j(this.l.value)
    };
    var ym = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 874);
        this.o = b;
        this.L = c;
        this.G = d;
        this.F = e;
        this.l = fz(this);
        hz(this, f);
        this.B = W(this, g)
    };
    _.P(ym, Z);
    ym.prototype.j = function() {
        var a = this,
            b = new vx(this.G, -1, _.G(lx));
        _.Cm(this, b);
        if (xx(b)) {
            var c = this.L.H,
                d = c.status,
                e = function(f) {
                    var g = a.B.value,
                        h, k, l;
                    if (l = !(null == (h = a.F) ? 0 : F(h, 9))) {
                        var n = void 0 === n ? !1 : n;
                        l = Bx(f) ? !1 === f.gdprApplies || "tcunavailable" === f.tcString || void 0 === f.gdprApplies && !n || "string" !== typeof f.tcString || !f.tcString.length ? !0 : zx(f, "1") : !1
                    }
                    h = _.A(g, 5, l);
                    l = !Cx(f, ["3", "4"]);
                    h = _.A(h, 9, l);
                    h = _.A(h, 2, f.tcString);
                    l = null != (k = f.addtlConsent) ? k : "";
                    k = _.A(h, 4, l);
                    _.A(k, 7, f.internalErrorState);
                    null != f.gdprApplies && _.A(g, 3, f.gdprApplies);
                    _.G(Lw) && !Cx(f, ["2", "7", "9", "10"]) && _.A(g, 8, !0);
                    a.l.notify()
                };
            switch (d) {
                case 2:
                    e(c.data);
                    break;
                case 1:
                    c.j.push(e);
                    break;
                case 0:
                    c.data = void 0;
                    c.status = 1;
                    c.j.push(e);
                    this.o.info(DG());
                    b.addEventListener(function(f) {
                        Bx(f) ? ("tcunavailable" === f.tcString ? a.o.info(EG("failed")) : a.o.info(EG("succeeded")), c.data = f, c.status = 2, c.yc().forEach(function(g) {
                            g(f)
                        }), c.j = []) : (c.data = void 0, c.status = 1)
                    });
                    break;
                default:
                    throw Error("Impossible TCDataCacheStatus: " + d);
            }
        } else this.l.notify()
    };
    var xm = function(a, b, c, d, e) {
        Z.call(this, a, 875);
        this.B = b;
        this.G = c;
        this.l = fz(this);
        hz(this, d);
        this.o = W(this, e)
    };
    _.P(xm, Z);
    xm.prototype.j = function() {
        var a = this,
            b = _.G(mx) ? new cy(this.G) : new JD(this.G);
        _.Cm(this, b);
        if (b.l()) {
            var c = _.Xg(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && _.A(a.o.value, 1, d.uspString);
                a.l.notify()
            });
            this.B.info(CG());
            b.o(c)
        } else this.l.notify()
    };
    var vm = function(a, b) {
        Z.call(this, a, 958);
        this.l = b;
        this.Wa = V(this)
    };
    _.P(vm, Z);
    vm.prototype.j = function() {
        var a = new uz,
            b, c = null == (b = this.l) ? void 0 : F(b, 9);
        _.A(a, 5, !c);
        this.Wa.j(a)
    };
    var wm = function(a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Z.call(this, a, 960);
        this.G = b;
        this.o = d;
        this.l = W(this, c)
    };
    _.P(wm, Z);
    wm.prototype.j = function() {
        var a = this;
        _.eh(this.context, 894, function() {
            return void gi("cmpMet", function(b) {
                mi(b, a.context);
                var c = new vx(a.G);
                _.Cm(a, c);
                var d = _.G(mx) ? new cy(a.G) : new JD(a.G);
                _.Cm(a, d);
                L(b, "fc", Number(a.l.value));
                L(b, "tcfv1", Number(!!a.G.bh));
                L(b, "tcfv2", Number(xx(c)));
                L(b, "usp", Number(d.l()));
                L(b, "ptt", 17)
            }, a.o)
        })
    };
    var GI = function(a, b) {
        Z.call(this, a, 1052);
        this.o = V(this);
        this.l = V(this);
        this.B = X(this, b)
    };
    _.P(GI, Z);
    GI.prototype.j = function() {
        var a = this.B.value,
            b = new gf,
            c = new y.Map,
            d = new y.Set;
        a = _.B(null != a ? a : []);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = e.value;
            if (f.Ac()) {
                e = new y.Set;
                c.set(f.Pa().toString(), e);
                f = _.B((0, D.J)(f.Pb()));
                for (var g = f.next(); !g.done; g = f.next()) {
                    g = g.value;
                    var h = (0, D.J)(g.na());
                    e.add(h);
                    d.has(h) || af(b, 2, it, g);
                    d.add(h)
                }
            }
        }
        this.o.j(c);
        this.l.j(b)
    };
    var HI = function(a, b) {
        Z.call(this, a, 1040);
        this.l = V(this);
        this.o = V(this);
        this.B = X(this, b)
    };
    _.P(HI, Z);
    HI.prototype.j = function() {
        var a = this.B.value;
        a ? (Ty(this.o, a instanceof gf ? a.Pa() : null), a = a.Pb(), this.l.j(a.map(function(b) {
            var c = b.I();
            return {
                oc: b.na(),
                url: c && (_.w(c, "startsWith").call(c, location.protocol) || _.w(c, "startsWith").call(c, "data:") && 40 >= c.length) ? Kd(c) : void 0
            }
        }))) : (Uy(this.o), this.l.j([]))
    };
    var hp = function(a, b, c, d) {
        Z.call(this, a, 813);
        this.B = b;
        this.l = V(this);
        this.F = X(this, c);
        this.o = X(this, d)
    };
    _.P(hp, Z);
    hp.prototype.j = function() {
        var a = this,
            b = this.F.value;
        if (!b || _.G(ax)) this.l.j(!1);
        else {
            b = _.B(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                c = d.oc;
                (d = d.url) && _.Cm(this, Qf(c, d, this.o.value, function(e, f) {
                    bh(a.context, e, f);
                    var g, h;
                    null == (g = a.B) || null == (h = g.error) || h.call(g, f)
                }))
            }
            this.l.j(!0)
        }
    };
    var II = function(a, b, c) {
        Z.call(this, a, 1045);
        this.l = c;
        this.o = W(this, b)
    };
    _.P(II, Z);
    II.prototype.j = function() {
        var a = this.o.value;
        if (a) {
            var b = this.context,
                c = this.l;
            if (a.Ac()) {
                var d = new mf,
                    e = new fp;
                e.j(a);
                a = new HI(b, e);
                H(d, a);
                b = new hp(b, console, a.l, c);
                H(d, b);
                Af(d)
            }
        }
    };
    var Em = function(a, b, c) {
        Z.call(this, a, 879);
        this.o = b;
        this.l = V(this);
        _.Og(260) && (this.B = W(this, c))
    };
    _.P(Em, Z);
    Em.prototype.j = function() {
        var a, b;
        (null != (b = null == (a = this.B) ? void 0 : a.value) ? b : QD(this.o)) ? (a = SD(this.o), Vy(this.l, a)) : Uy(this.l)
    };
    var Dm = function(a, b, c) {
        Z.call(this, a, 896);
        this.l = b;
        this.xb = V(this);
        c && hz(this, c)
    };
    _.P(Dm, Z);
    Dm.prototype.j = function() {
        this.xb.j(QD(this.l))
    };
    var JI = function(a, b) {
        Z.call(this, a, 1018);
        _.G(aw) && (this.l = fz(this));
        this.o = X(this, b)
    };
    _.P(JI, Z);
    JI.prototype.j = function() {
        var a, b, c, d = _.B(null != (c = null == (a = this.o.value) ? void 0 : null == (b = Le(a, OD, 5)) ? void 0 : Vm(b, 1)) ? c : []);
        for (a = d.next(); !a.done; a = d.next()) hq(a.value);
        var e;
        null == (e = this.l) || e.notify()
    };
    var KI = function(a, b) {
        Z.call(this, a, 1070);
        this.l = V(this);
        this.o = X(this, b)
    };
    _.P(KI, Z);
    KI.prototype.j = function() {
        var a, b = null == (a = this.o.value) ? void 0 : Le(a, OD, 5);
        if (b) {
            a = z(b, 3);
            var c = [];
            b = _.B(Ec(b, 2, Tb));
            for (var d = b.next(); !d.done; d = b.next()) {
                var e = d.value;
                d = new Nm;
                var f = new vt;
                e = _.A(f, 1, e);
                d = _.Rg(d, 2, e);
                a && (e = new xt, e = _.A(e, 1, 1), e = _.A(e, 2, a), _.Rg(d, 3, e));
                c.push(d)
            }
            this.l.j(c)
        } else this.l.j([])
    };
    var gp = function(a, b, c) {
        Z.call(this, a, 706);
        this.G = b;
        this.A = V(this);
        this.l = W(this, c)
    };
    _.P(gp, Z);
    gp.prototype.j = function() {
        Ty(this.A, me(this.l.value, this.G))
    };
    var Km = new y.Map([
        [1, 5],
        [2, 2],
        [3, 3]
    ]);
    var Qp = function(a, b, c, d, e) {
        var f = ab.apply(5, arguments);
        Z.call(this, a, 912);
        this.googletag = b;
        this.V = c;
        this.K = d;
        this.F = e;
        this.l = V(this);
        this.o = V(this);
        this.B = [];
        f = _.B(f);
        for (var g = f.next(); !g.done; g = f.next()) this.B.push(W(this, g.value))
    };
    _.P(Qp, Z);
    Qp.prototype.j = function() {
        if (_.G(Cw)) {
            for (var a = [], b = _.B(this.B), c = b.next(); !c.done; c = b.next()) {
                c = _.B(c.value.value);
                for (var d = c.next(); !d.done; d = c.next()) switch (d = d.value, Ti(d, Et)) {
                    case 5:
                        var e = void 0,
                            f = void 0;
                        Pm(this.context, this.googletag, (0, D.J)(Sm(d, ut, 5, Et)), null != (e = Le(d, Nm, 4)) ? e : null, null != (f = this.V) ? f : $h().j, this.K, this.F);
                        break;
                    case 6:
                        e = (0, D.J)(Sm(d, Ct, 6, Et));
                        if (f = wh(e, At, 2)) f = (0, D.J)(Le(e, At, 2)), f = Um(f) && Wm(f);
                        f && (f = void 0, Zm(this.googletag, (0, D.J)(Sm(d, Ct, 6, Et)), null != (f = this.V) ? f : $h().j, Le(d, Nm, 4)), (d = fe(e, 1)) && a.push(d));
                        break;
                    case 8:
                        wh(d, Nm, 4) && this.o.j((0, D.J)(Le(d, Nm, 4)))
                }
            }
            this.l.j(a)
        } else this.l.j([]);
        Uy(this.o)
    };
    Qp.prototype.H = function(a) {
        this.m(a)
    };
    Qp.prototype.m = function() {
        this.l.j([])
    };
    var LI = function(a, b, c, d) {
        Z.call(this, a, 890);
        this.B = b;
        this.o = c;
        this.l = X(this, d)
    };
    _.P(LI, Z);
    LI.prototype.j = function() {
        var a = this;
        Hf(this.B, this.l.value, function(b, c) {
            bh(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var MI = function(a, b, c, d) {
        _.Bv.call(this);
        this.context = a;
        this.Ab = b;
        this.oa = c;
        this.L = d;
        this.ka = new DI(this.context);
        this.m = new nI(this.context, this.ka.l);
        this.qa = this.m.o;
        this.M = this.m.l;
        this.j = new DH(this.context, this.m.B, window);
        this.l = new kI(this.context, this.j.M);
        this.H = new lI(this.context, this.j.K);
        var e;
        this.ja = new pI(this.context, null != (e = window.location.hash) ? e : "");
        this.C = new Qp(this.context, rj(), null, this.Ab, this.oa, this.ja.A, this.m.Xb);
        this.Y = new EI(this.context, window);
        this.ba = new FI(this.context, window);
        this.ia = new mI(this.context, this.j.o, this.qa, this.j.l, this.C.l);
        this.K = this.l.l;
        this.U = this.j.B;
        this.ha = this.j.F;
        this.la = this.j.o;
        this.bb = this.j.l;
        this.Z = this.l.B;
        this.jb = this.C.l;
        this.fa = this.Y.l;
        this.ma = this.H.o;
        this.P = this.H.l;
        this.Oa = this.ba.A;
        this.T = this.ia.A;
        this.F = new SH(this.context, this.fa, this.T, this.K, this.U, this.Z, this.ma, this.P, this.ha);
        this.yb = this.F.l;
        this.zb = this.F.o;
        this.xa = this.C.o;
        this.o = new fp;
        _.Cm(this, this.Y);
        _.Cm(this, this.ka);
        _.Cm(this, this.m);
        _.Cm(this, this.l);
        _.Cm(this, this.H);
        _.Cm(this, this.j);
        _.Cm(this, this.ja);
        _.Cm(this, this.C);
        _.Cm(this, this.ba);
        _.Cm(this, this.F);
        _.Cm(this, this.ia);
        _.Og(260) || (this.qa.j([]), this.la.j({}), this.bb.j([]), Uy(this.K), this.U.j(!1), this.Z.j(new y.Map), Uy(this.ma), this.T.notify(), Uy(this.jb), Uy(this.P), this.ha.j(!1), Uy(this.xa), this.M.j([]), this.o.j([]));
        _.Og(260) && _.G(Nw) || Uy(this.Oa);
        _.G(ew) ? (this.O = new uI(this.context, window), _.Cm(this, this.O), this.Bb = this.O.l) : 0 < _.we(dw) && (this.B = new sI(this.context, window, this.L), _.Cm(this, this.B), this.gb = this.B.l)
    };
    _.P(MI, _.Bv);
    var NI = function(a, b) {
        var c = new mf;
        _.Cm(a, c);
        H(c, a.Y);
        H(c, a.ka);
        H(c, a.m);
        H(c, a.j);
        H(c, a.l);
        H(c, a.ia);
        H(c, a.H);
        b = new BI(a.context, window, a.m.F, b);
        a.Fa = b.l;
        H(c, b);
        H(c, a.ja);
        H(c, a.C);
        _.G(jx) && H(c, new CI(a.context, window));
        a.B && H(c, a.B);
        a.O && H(c, a.O);
        _.G(Nw) && H(c, a.ba);
        H(c, a.F);
        var d = Fm(a.context, a.Fa);
        b = d.xb;
        var e = d.Ld;
        _.Cm(c, d.ua);
        d = new JI(a.context, e);
        a.eb = d.l;
        H(c, d);
        _.G(bw) ? (d = new KI(a.context, e), H(c, d), a.o = d.l) : a.o.j([]);
        _.G(ax) || !_.G(ww) || rk() || (b = Am(a.context, a.oa, a.L, void 0, window, b, e).Wa, b = new gp(a.context, window, b), H(c, b), e = new LI(a.context, rj(), console, b.A), H(c, e), e = new GI(a.context, a.M), H(c, e), _.G(ex) && (a = new II(a.context, e.l, b.A), H(c, a)));
        Af(c)
    };
    var OI = ["Debug", "Info", "Warning", "Error", "Fatal"],
        PI = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.j = c;
            this.timestamp = new Date
        };
    q = PI.prototype;
    q.getSlot = function() {
        return this.j
    };
    q.getLevel = function() {
        return this.level
    };
    q.getTimestamp = function() {
        return this.timestamp
    };
    q.getMessage = function() {
        return this.message
    };
    q.toString = function() {
        return this.timestamp.toTimeString() + ": " + OI[this.level] + ": " + this.message
    };
    var QI = {
            20: function(a) {
                return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
            },
            23: function(a) {
                return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
            },
            34: function(a) {
                return "Size mapping is null because invalid mappings were added: " + a[0] + "."
            },
            60: function(a) {
                return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
            },
            66: function(a) {
                return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
            },
            68: function() {
                return "Slots cannot be cleared until service is enabled."
            },
            80: function(a) {
                return "Slot object at position " + a[0] + " is of incorrect type."
            },
            84: function(a) {
                return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
            },
            93: function(a) {
                return "Failed to register listener. Unknown event type: " + a[0] + "."
            },
            96: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
            },
            122: function(a) {
                return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
            },
            121: function(a) {
                return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
            },
            105: function(a) {
                return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
            },
            106: function(a) {
                return "Publisher betas " + a[0] + " were declared after enableServices() was called."
            },
            107: function(a) {
                return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
            },
            108: function(a) {
                return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
            },
            123: function(a) {
                return "Refresh was throttled for slot: " + a[0] + "."
            },
            113: function(a) {
                return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
            },
            116: function(a) {
                return 'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "useUniqueDomain" setting passed to the setSafeFrameConfig API method. GPT will use useUniqueDomain=' + a[0] + " based on the API call."
            },
            114: function() {
                return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            115: function() {
                return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            132: function(a) {
                return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
            },
            133: function() {
                return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
            },
            134: function(a) {
                return en(a[0]) + " " + a[1] + " not requested: Format already created on the page."
            },
            135: function(a) {
                return en(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
            },
            136: function(a) {
                return en(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
            },
            137: function(a) {
                return en(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
            },
            138: function(a) {
                return en(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
            },
            139: function(a) {
                return en(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
            },
            140: function(a) {
                return en(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
            },
            142: function(a) {
                return "A google product ad tag with click url " + a[0] + " does not contain any elements enabled for clicking."
            },
            145: function(a) {
                return en(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
            },
            143: function() {
                return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
            },
            147: function() {
                return "GPT must be loaded from the limited ads URL to enable limited ads functionality."
            },
            148: function() {
                return "CommerceAdsConfig must contain a valid value for either categories or queries."
            }
        },
        RI = {
            26: function(a) {
                return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
            },
            28: function(a) {
                return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
            },
            149: function(a) {
                return "Error in googletag.defineSlot: Invalid ad unit path provided " + a[0] + ", see https://support.google.com/admanager/answer/10477476 for more information."
            },
            92: function(a) {
                return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
            },
            30: function(a) {
                return "Exception in googletag.cmd function: " + a[0] + "."
            },
            125: function(a) {
                return "google-product-ad element is invalid: " + a[0] + "."
            },
            126: function() {
                return "Attempted to collect prebid data but window.pbjs is undefined."
            },
            127: function(a) {
                return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
            },
            144: function() {
                return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
            }
        };
    var SI = function(a) {
            this.context = a;
            this.m = _.w(Array, "from").call(Array, {
                length: 1E3
            });
            this.D = this.I = this.j = 0;
            this.C = window
        },
        $G = function(a) {
            return [].concat(_.Nd(a.m.slice(a.j)), _.Nd(a.m.slice(0, a.j))).filter(function(b) {
                return !!b
            })
        },
        aH = function(a, b) {
            return $G(a).filter(function(c) {
                return c.getSlot() === b
            })
        },
        bH = function(a, b) {
            return $G(a).filter(function(c) {
                return c.getLevel() >= b
            })
        };
    SI.prototype.log = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !1 : d;
        var f, g;
        c = new PI(a, b, null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.j) ? g : null);
        this.m[this.j] = c;
        this.j = (this.j + 1) % 1E3;
        g = _.we(Wv) && 100 > this.I;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs(),
            k = b.getMessageId(),
            l = QI[k] || RI[k];
        g && f && (b = _.we(Wv), gi("gpt_eventlog_messages", function(n) {
            ++e.I;
            mi(n, e.context);
            L(n, "level", a);
            L(n, "messageId", k);
            L(n, "args", h.join("|"));
            l || L(n, "noMsg", !0);
            var m = Error(),
                p;
            var r = null != (p = m.stack) ? p : "";
            m = m.message;
            try {
                -1 == r.indexOf(m) && (r = m + "\n" + r);
                for (var u; r != u;) u = r, r = r.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                var v = r.replace(RegExp("\n *", "g"), "\n")
            } catch (x) {
                v = m
            }
            L(n, "stack", v)
        }, b));
        if (l) {
            b = "[GPT] " + l(h);
            if (d) throw new Mk(b);
            d = this.D < _.we(Xv) && f && _.t.console;
            if (this.C === top && d || _.w(_.t.navigator.userAgent, "includes").call(_.t.navigator.userAgent, "Lighthouse"))(function(n) {
                var m, p, r, u;
                return void(2 === a ? null == (p = (m = _.t.console).warn) ? void 0 : p.call(m, n) : null == (u = (r = _.t.console).error) ? void 0 : u.call(r, n))
            })(b), this.D++
        }
        return c
    };
    SI.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var O = function(a, b, c) {
        a.log(2, b, c, !1)
    };
    SI.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var wn = "3rd party ad content";
    var TI = function(a, b) {
            this.serviceName = b;
            this.slot = (0, D.J)(a.j)
        },
        UI = function(a, b) {
            TI.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        };
    _.P(UI, TI);
    var VI = function() {
        TI.apply(this, arguments)
    };
    _.P(VI, TI);
    var WI = function(a, b, c) {
        TI.call(this, a, b);
        this.inViewPercentage = c
    };
    _.P(WI, TI);
    var XI = function() {
        TI.apply(this, arguments)
    };
    _.P(XI, TI);
    var YI = function() {
        TI.apply(this, arguments)
    };
    _.P(YI, TI);
    var ZI = function() {
        TI.apply(this, arguments)
    };
    _.P(ZI, TI);
    var $I = function() {
        TI.apply(this, arguments)
    };
    _.P($I, TI);
    var aJ = function(a, b, c, d) {
        TI.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.P(aJ, TI);
    var bJ = function(a, b, c) {
        TI.call(this, a, b);
        this.payload = c
    };
    _.P(bJ, TI);
    var cJ = function() {
        TI.apply(this, arguments)
    };
    _.P(cJ, TI);
    var Mn = new y.Set,
        dJ = function(a, b, c) {
            var d = 0,
                e = function() {
                    d = 0
                };
            return function(f) {
                d || (d = _.t.setTimeout(e, b), a.apply(c, arguments))
            }
        }(function() {
            throw new Mk("Reached Limit for addEventListener");
        }, 3E5),
        eJ = function(a, b, c) {
            iF.call(this, a);
            this.C = b;
            this.j = [];
            this.m = !1;
            this.F = 0;
            this.B = new y.Map;
            Mn.add(this);
            this.C.info(YF(this.getName()));
            this.l = null != c ? c : this
        };
    _.P(eJ, iF);
    q = eJ.prototype;
    q.enable = function() {
        this.m || (this.m = !0, vk(6), this.U())
    };
    q.slotAdded = function(a, b) {
        this.j.push(a);
        var c = new YI(a, this.getName());
        this.l.dispatchEvent("slotAdded", 818, c);
        this.C.info($F(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        ds(b, 4, a)
    };
    q.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return ea(b.j, c)
        })
    };
    q.addEventListener = function(a, b) {
        var c = this;
        if (this.F >= _.we(Vv) && 0 < _.we(Vv)) dJ();
        else {
            var d;
            null != (d = this.B.get(a)) && d.has(b) || (this.B.has(a) || this.B.set(a, new y.Map), d = function(e) {
                e = e.detail;
                try {
                    b(e)
                } catch (h) {
                    c.C.error(qG(String(h), a));
                    var f, g;
                    null == (f = window.console) || null == (g = f.error) || g.call(f, h)
                }
            }, (0, D.J)(this.B.get(a)).set(b, d), kF(this.l, a, d), this.F++)
        }
    };
    q.removeEventListener = function(a, b) {
        var c, d = null == (c = this.B.get(a)) ? void 0 : c.get(b);
        if (!d || !jF(this.l, a, d)) return !1;
        this.F--;
        return (0, D.J)(this.B.get(a)).delete(b)
    };
    var Bn = function(a) {
        for (var b = _.B(Mn), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var Jn = function(a, b, c, d) {
        eJ.call(this, a, b, d);
        this.H = c;
        this.ads = new y.Map;
        this.O = this.nb = !1;
        _.ze(uk).I = !0
    };
    _.P(Jn, eJ);
    Jn.prototype.slotAdded = function(a, b) {
        var c = this;
        kF(a, nF, function(d) {
            F(d.detail, 11) && (fJ(c, a).rf = !0)
        });
        eJ.prototype.slotAdded.call(this, a, b)
    };
    Jn.prototype.U = function() {};
    Jn.prototype.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.nb = a)
    };
    var WG = function(a, b) {
            (b = void 0 === b ? "" : b) && !a.O && gi("ima_sdk_v", function(c) {
                a.O = !0;
                L(c, "v", b)
            });
            return String(gs())
        },
        UG = function(a, b) {
            var c = $h().j,
                d = $h().m;
            if (a.H.m) {
                var e = {
                    Za: 3
                };
                a.M && (e.Fb = a.M);
                a.Z && (e.Gb = a.Z);
                b = null != b ? b : a.j;
                c = Mh(c, d);
                d = e.Fb;
                var f = e.Gb;
                d && "number" !== typeof d || f && "number" !== typeof f || a.H.refresh(c, b, e)
            } else(null == b ? 0 : b[0]) && a.C.error(fG(b[0].getDomId()))
        },
        XG = function(a, b) {
            var c;
            return a.H.m && !(null == (c = a.ads.get(b)) || !c.rf)
        },
        VG = function(a, b) {
            return a.j.filter(function(c) {
                return _.w(b, "includes").call(b, c.toString())
            })
        };
    Jn.prototype.getName = function() {
        return "companion_ads"
    };
    Jn.prototype.K = function() {};
    var YG = function(a, b, c, d) {
            b = new UI(b, a.getName());
            null != c && null != d && (b.size = [c, d]);
            a.l.dispatchEvent("slotRenderEnded", 67, b)
        },
        fJ = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.Jm(b, function() {
                return a.ads.delete(b)
            }));
            return c
        };
    var Hn = function(a, b, c) {
        eJ.call(this, a, b, c)
    };
    _.P(Hn, eJ);
    Hn.prototype.getName = function() {
        return "content"
    };
    Hn.prototype.U = function() {};
    Hn.prototype.K = function() {};
    var gJ = function() {
            this.m = [];
            this.hostpageLibraryTokens = [];
            this.j = {}
        },
        hJ = function(a, b) {
            if (!_.w(a.m, "includes").call(a.m, b) && (E = [1, 2, 3], _.w(E, "includes")).call(E, b)) {
                var c = Bz[b];
                if (c) {
                    var d = b + "_hostpage_library";
                    if (c = Gj(document, c)) c.id = d
                }
                a.m.push(b);
                b = new Cz(b);
                a.hostpageLibraryTokens.push(b);
                a = rj();
                a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
                a.hostpageLibraryTokens[b.j] = b.m
            }
        },
        iJ = function(a, b, c) {
            var d;
            a.j[b] = null != (d = a.j[b]) ? d : new y.Set;
            a.j[b].add(c)
        },
        jJ = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.j[b]) ? void 0 : _.w(c, "values").call(c)) ? d : [];
            return [].concat(_.Nd(a))
        };
    var kJ = _.br(function() {
            Yu("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        mJ = function(a) {
            var b = this;
            this.L = a;
            this.j = new y.Map;
            this.W = new y.Set;
            _.ze(uk).D = function(c) {
                return lJ(b, c)
            }
        };
    mJ.prototype.defineSlot = function(a, b, c, d, e) {
        a = xk(this, a, b, c, d, e);
        var f = a.slotId;
        if (f) return f.j;
        a.tc || b.error(lj("googletag.defineSlot", [c, d, e]));
        return null
    };
    var xk = function(a, b, c, d, e, f, g) {
        return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
            Xa: f,
            Vd: void 0 === g ? !1 : g
        }) : {}
    };
    mJ.prototype.add = function(a, b, c, d, e) {
        var f = this,
            g = void 0 === e ? {} : e;
        e = g.Xa;
        var h = void 0 === g.format ? 0 : g.format,
            k = void 0 === g.Vd ? !1 : g.Vd;
        g = void 0 === g.ib ? !1 : g.ib;
        var l;
        if (l = _.G(Iv)) try {
            l = !RegExp("^[\\p{L}\\p{N}_\\-,\\.!\\*<>():/]{1,100}$", "u").test(c)
        } catch (p) {
            l = !1
        }
        if (l) return b.error(UF(c)), {
            tc: !0
        };
        var n = Ql(h, g);
        if (n) return gi("gpt_pla_ns", function(p) {
            L(p, "iu", c);
            L(p, "f", null != h ? h : "");
            L(p, "nsr", n);
            mi(p, a)
        }), vl(b, n, h, c), {};
        k && kJ();
        k = this.j.get(c) || Number(k);
        d = nJ(this, a, b, c, k, d, e || "gpt_unit_" + c + "_" + k);
        b = d.Va;
        var m = d.slotId;
        d = d.tc;
        if (!m) return {
            tc: d
        };
        this.j.set(c, k + 1);
        this.W.add(m);
        _.Jm(m, function() {
            return void f.W.delete(m)
        });
        UD(c);
        return {
            slotId: m,
            Va: b
        }
    };
    var dn = function(a, b) {
            a = _.B(a.W);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c
        },
        Cn = function(a) {
            a = _.B(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.Ba()
        },
        nJ = function(a, b, c, d, e, f, g) {
            var h = dn(a, g);
            if (h) return c.error(TF(g, d, h.getAdUnitPath())), {
                tc: !0
            };
            var k = new tH;
            uH(_.A(k, 1, d), g);
            f = Lk(f);
            h = f.Ja;
            Rc(k, 5, f.xc);
            null !== h && _.Rg(k, 16, h);
            iE(k);
            var l = new Vd(b, d, e, g);
            fH(l, Pk(b, c, l));
            _.Jm(l, function() {
                var n = $h(),
                    m = l.getDomId();
                delete n.m[m];
                n.D.delete(l);
                n = l.getAdUnitPath();
                n = Lg(n);
                var p;
                m = (null != (p = mh.get(n)) ? p : 0) - 1;
                0 >= m ? mh.delete(n) : mh.set(n, m);
                c.info(sG(l.toString()), l);
                (p = ej.get(l)) && fj.delete(p);
                ej.delete(l)
            });
            c.info(JF(l.toString()), l);
            kF(l, oF, function(n) {
                n = n.detail.Af;
                c.info(KF(l.getAdUnitPath()), l);
                ly(_.ze($g), "7", 9, CF(a.L, l), 0, n)
            });
            kF(l, nF, function(n) {
                var m = n.detail;
                c.info(LF(l.getAdUnitPath()), l);
                var p;
                n = _.ze($g);
                var r = z(k, 20);
                m = null != (p = m.getEscapedQemQueryId()) ? p : "";
                n.j && (_.t.google_timing_params = _.t.google_timing_params || {}, _.t.google_timing_params["qqid." + r] = m)
            });
            kF(l, Go, function() {
                return void c.info(MF(l.getAdUnitPath()), l)
            });
            kF(l, Jo, function() {
                return void c.info(NF(l.getAdUnitPath()), l)
            });
            return {
                Va: k,
                slotId: l
            }
        },
        lJ = function(a, b) {
            var c = new RegExp("(^|,|/)" + b + "($|,|/)");
            return [].concat(_.Nd(a.W)).some(function(d) {
                return c.test(Lg(d.getAdUnitPath()))
            })
        },
        On = function(a) {
            return jJ(_.ze(gJ), a).map(function(b) {
                var c;
                return null == (c = Zh(b, document)) ? void 0 : c.contentWindow
            }).filter(function(b) {
                return !!b
            })
        };
    var oJ = Q(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        pJ = Q(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"]),
        qJ = Q(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        rJ = Q(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"]),
        sJ = new y.Map([
            [2, {
                lf: "page_level_ads"
            }]
        ]),
        tJ = function(a) {
            var b = void 0 === b ? sJ : b;
            this.context = a;
            this.j = b;
            this.m = new y.Map;
            this.loaded = new y.Set
        },
        vJ;
    tJ.prototype.load = function(a) {
        var b = _.uJ(this, a),
            c, d = (null != (c = this.j.get(a.module)) ? c : {}).lf;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            c = (c = _.Og(172)) && "pagead2.googlesyndication.com" === Gu((c.src || "").match(_.Fu)[3] || null) ? this.context.Ya ? C(qJ, this.context.Ya, d) : C(rJ, d, this.context.Ha) : this.context.Ya ? C(oJ, this.context.Ya, d) : C(pJ, d, this.context.Ha);
            d = {};
            var e = _.we(Dw),
                f = _.we($v);
            e && (d.cb = e);
            f && (d.mcb = f);
            _.w(Object, "keys").call(Object, d).length ? (c = jr.exec(Ua(c).toString()), e = c[3] || "", d = Kd(c[1] + kr("?", c[2] || "", d) + kr("#", e))) : d = c;
            vJ(this, a);
            Gj(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.uJ = function(a, b) {
        b = b.module;
        a.m.has(b) || a.m.set(b, new _.tg);
        return (0, D.J)(a.m.get(b))
    };
    vJ = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = _.Xg(a.context, 340, function(e) {
            if (a.j.has(c) && "function" === typeof e) {
                var f = (0, D.J)(a.j.get(c));
                f = (void 0 === f.ye ? [] : f.ye).map(function(g) {
                    return _.uJ(a, g).promise
                });
                y.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(rj(), b, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    };
    var wJ = function() {
        this.resources = {}
    };
    var Jp = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 682);
        this.L = b;
        this.format = c;
        this.slotId = d;
        this.G = e;
        this.A = fz(this);
        this.l = X(this, f);
        this.o = W(this, g);
        this.F = W(this, h);
        this.B = X(this, k)
    };
    _.P(Jp, Z);
    Jp.prototype.j = function() {
        var a = this;
        if ((2 === this.format || 3 === this.format) && this.l.Qb() && bp(this.l.value, 12, !1)) {
            var b = (0, D.J)(this.B.value).Ie,
                c = _.Ho(this.L, this.slotId),
                d = this.F.value,
                e = this.o.value;
            _.bi(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (xJ) xJ.Xf(e);
            else {
                xJ = new b(this.context, this.format, e, this.G, d, this.L, this.slotId);
                b = {};
                d = _.B(Uc(this.l.value, Ht, 13));
                for (var f = d.next(); !f.done; f = d.next()) f = f.value, b[z(f, 1)] = z(f, 2);
                xJ.Yf(b);
                xJ.bb();
                wF(this.L, this.slotId, function() {
                    xJ && (xJ.Ba(), xJ = null);
                    c && _.AF(a.L, a.slotId)
                })
            }
            _.Jm(this, function() {
                return _.Cu(e)
            })
        }
        this.A.notify()
    };
    var xJ = null;
    var Kp = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 683);
        this.slotId = b;
        this.format = c;
        this.T = d;
        this.l = X(this, e);
        this.F = W(this, f);
        this.P = W(this, g);
        this.K = X(this, h);
        this.M = X(this, k);
        this.B = W(this, l);
        this.o = lF(b, wo, function(n) {
            n = n.detail;
            try {
                var m = JSON.parse(n.data);
                return "sth" === m.googMsgType && "i-adframe-load" === m.msg_type
            } catch (p) {
                return !1
            }
        })
    };
    _.P(Kp, Z);
    Kp.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n, m;
        return _.fb(function(p) {
            if (1 == p.j) {
                b = _.we(qw);
                c = a.l.value;
                if (!c || 5 !== a.format) return p.return();
                Math.random() < _.we(rw) && y.Promise.race([a.o.then(function() {
                    return !1
                }), new y.Promise(function(r) {
                    GF(a, a.id, window, "pagehide", function(u) {
                        u && r(!0)
                    })
                })]).then(function(r) {
                    var u = new Dj("int_pm");
                    L(u, "ts", Date.now());
                    L(u, "flg", b);
                    L(u, "qem", a.B.value);
                    L(u, "ph", Number(r));
                    Fj(u, 1)
                });
                d = a.P.value;
                e = a.F.value;
                f = (0, D.J)(a.M.value);
                g = f.Se;
                h = new _.YD(a.context);
                n = (null == (k = a.l.value) ? 0 : ok(k, 14)) ? 60 * (0, D.J)(null == (l = a.l.value) ? void 0 : z(l, 14)) : 604800;
                m = new g(window, e, d, h, a.T, uo(Uc(c, Ht, 13)), Gl(a.slotId), function() {
                    return void a.Ba()
                }, n, a.K.value);
                _.Cm(a, m);
                switch (b) {
                    case 0:
                        m.fa();
                        break;
                    case 1:
                        p.j = 2;
                        return
                }
            } else {
                if (4 != p.j) return gb(p, a.o, 4);
                if (a.I) return p.return();
                m.fa(!0)
            }
            p.j = 0
        })
    };
    var yJ = function() {
        this.module = 2
    };
    yJ.prototype.toString = function() {
        return String(this.module)
    };
    _.zJ = new yJ;
    var Fp = function(a, b, c, d, e, f) {
        Z.call(this, a, 846);
        this.B = b;
        this.format = c;
        this.A = V(this);
        this.l = X(this, d);
        this.o = X(this, e);
        f && hz(this, f)
    };
    _.P(Fp, Z);
    Fp.prototype.j = function() {
        var a, b = (2 === this.format || 3 === this.format) && !(null == (a = this.l.value) || !bp(a, 12, !1));
        a = 5 === this.format && this.o.value;
        b || a ? Vy(this.A, this.B.load(_.zJ)) : Uy(this.A)
    };
    var AJ = function(a, b, c, d, e, f) {
        Z.call(this, a, 696);
        this.slotId = b;
        this.wa = c;
        hz(this, d);
        iz(this, [e, f])
    };
    _.P(AJ, Z);
    AJ.prototype.j = function() {
        this.wa.dispatchEvent("rewardedSlotClosed", 703, new cJ(this.slotId, "publisher_ads"))
    };
    var BJ = function(a, b, c, d, e) {
        Z.call(this, a, 694);
        this.slotId = b;
        this.wa = c;
        hz(this, d);
        this.l = X(this, e)
    };
    _.P(BJ, Z);
    BJ.prototype.j = function() {
        var a, b = null == (a = this.l.value) ? void 0 : a.payload;
        this.wa.dispatchEvent("rewardedSlotGranted", 702, new bJ(this.slotId, "publisher_ads", null != b ? b : null))
    };
    var CJ = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        DJ = function(a, b, c, d, e, f) {
            Z.call(this, a, 693);
            this.G = b;
            this.F = f;
            this.A = fz(this);
            this.l = W(this, c);
            this.o = W(this, d);
            hz(this, e);
            this.B = new _.zD(this.G)
        };
    _.P(DJ, Z);
    DJ.prototype.j = function() {
        var a = this;
        if (!this.F.pb) {
            var b = 0 === (0, _.Ml)() ? "rgba(1,1,1,0.5)" : "white";
            _.bi(this.o.value, _.w(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, CJ));
            _.Jm(this, _.ID(this.G.document, this.G));
            Hd(this.l.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.G === this.G.top) {
                this.G.location.hash = "goog_rewarded";
                var c = new _.CD(this.B);
                _.DD(c);
                _.Jm(this, function() {
                    _.ED(c);
                    "goog_rewarded" === a.G.location.hash && (a.G.location.hash = "")
                })
            }
            this.A.notify()
        }
    };
    var EJ = function(a, b, c, d) {
        Z.call(this, a, 695);
        this.G = b;
        this.l = W(this, c);
        hz(this, d)
    };
    _.P(EJ, Z);
    EJ.prototype.j = function() {
        if (this.G === this.G.top) var a = (0, D.J)(Hd(this.l.value)),
            b = GF(this, 503, this.G, "hashchange", function(c) {
                lr(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var FJ = function(a, b, c, d) {
        Z.call(this, a, 692);
        this.slotId = b;
        this.wa = c;
        this.A = fz(this);
        this.l = W(this, d)
    };
    _.P(FJ, Z);
    FJ.prototype.j = function() {
        var a = this.l.value,
            b = new _.tg,
            c = b.promise,
            d;
        this.wa.dispatchEvent("rewardedSlotReady", 701, new aJ(this.slotId, "publisher_ads", b.resolve, null != (d = a.payload) ? d : null));
        bz(this.A, c)
    };
    var GJ = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        HJ = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        IJ = function(a, b, c, d, e) {
            Z.call(this, a, 691);
            this.B = V(this);
            this.o = fz(this);
            this.F = W(this, c);
            this.l = iz(this, [d, e])
        };
    _.P(IJ, Z);
    IJ.prototype.j = function() {
        "ha_before_make_visible" === this.l.value.message ? this.o.notify() : (_.bi(this.F.value, _.w(Object, "assign").call(Object, {
            position: "absolute"
        }, 0 === (0, _.Ml)() ? HJ : GJ)), this.B.j(this.l.value))
    };
    var JJ = function() {
        Z.apply(this, arguments);
        this.value = this.promise = null;
        this.A = V(this)
    };
    _.P(JJ, Z);
    JJ.prototype.j = function() {
        var a = this;
        this.promise.then(function() {
            return void Ty(a.A, a.value)
        })
    };
    var vo = function(a, b, c, d) {
        JJ.call(this, a, 1061);
        var e = this;
        this.promise = lF(b, c, function(f) {
            return null !== (e.value = d(f))
        })
    };
    _.P(vo, JJ);
    var Lp = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 688);
        if (4 === c) {
            this.ua = new mf;
            _.Cm(this, this.ua);
            c = xo(b, "granted", a);
            H(this.ua, c);
            var h = xo(b, "prefetched", a);
            H(this.ua, h);
            var k = xo(b, "closed", a);
            H(this.ua, k);
            a = xo(b, "ha_before_make_visible", a);
            H(this.ua, a);
            var l = new IJ(this.context, b, f, h.A, a.A);
            H(this.ua, l);
            h = new FJ(this.context, b, d, l.B);
            H(this.ua, h);
            g = new DJ(this.context, e, f, g, h.A, l.o);
            H(this.ua, g);
            H(this.ua, new EJ(this.context, e, f, g.A));
            H(this.ua, new BJ(this.context, b, d, h.A, c.A));
            H(this.ua, new AJ(this.context, b, d, h.A, k.A, a.A))
        }
    };
    _.P(Lp, Z);
    Lp.prototype.j = function() {
        var a;
        null == (a = this.ua) || Af(a)
    };
    var KJ = function(a, b, c) {
        _.Bv.call(this);
        this.context = a;
        this.C = b;
        this.m = c;
        a = c.slotId;
        b = c.size;
        this.j = "height" === c.Je ? "fluid" : [b.width, b.height];
        this.Rb = Xh(a);
        this.Sb = wn
    };
    _.P(KJ, _.Bv);
    KJ.prototype.render = function() {
        var a = this.C,
            b = this.m,
            c = b.slotId,
            d = b.N.R,
            e = b.X,
            f = b.size,
            g = b.Db,
            h = b.De,
            k = b.isBackfill;
        b = b.bc;
        g && Ag(g, _.Au(e), null != h ? h : "", !1);
        Fo(_.ze($g), "5", (0, D.J)(z(d[c.getDomId()], 20)));
        a = c.dispatchEvent(Go, 801, {
            Dd: 0 === a.kind ? a.Ia : "",
            isBackfill: k
        });
        d = this.H();
        b && d && d.setAttribute("data-google-container-id", b);
        _.G(Io) ? a.then(function() {
            c.dispatchEvent(Jo, 825, {
                size: f,
                isEmpty: !1
            })
        }) : c.dispatchEvent(Jo, 825, {
            size: f,
            isEmpty: !1
        });
        return d
    };
    KJ.prototype.loaded = function(a) {
        var b = this.m,
            c = b.slotId,
            d = b.wa;
        b = b.N.R;
        c.dispatchEvent(rF, 844, void 0);
        a && a.setAttribute("data-load-complete", !0);
        d.dispatchEvent("slotOnload", 710, new XI(c, "publisher_ads"));
        Fo(_.ze($g), "6", (0, D.J)(z(b[c.getDomId()], 20)))
    };
    var LJ = function(a, b) {
        if (b) return null;
        a = a.C;
        a = 0 === a.kind ? a.Ia : "";
        b = "";
        var c = !0,
            d = "sf";
        b = void 0 === b ? "" : b;
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? "" : d;
        if (a) {
            var e = a.toLowerCase(); - 1 < e.indexOf("<!doctype") || -1 < e.indexOf("<html") ? c && Kg(d, 2) : (c && Kg(d, 3), a = _.G(ix) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>")
        } else c && Kg(d, 1);
        return a
    };
    KJ.prototype.D = function() {
        _.Bv.prototype.D.call(this);
        var a;
        null == (a = this.m.Db) || a.removeAttribute("data-google-query-id")
    };
    KJ.prototype.o = function(a, b) {
        var c = this,
            d = MJ(this, function() {
                return void c.loaded((0, D.J)(d.j))
            }, a, b);
        _.Jm(this, function() {
            100 != d.status && (2 == d.O && (EE(d.D), d.O = 0), window.clearTimeout(d.F), d.F = -1, d.o = 3, d.m && (d.m.Ba(), d.m = null), _.Rd(window, "resize", d.va), _.Rd(window, "scroll", d.va), d.l && d.j && d.l == _.Du(d.j) && d.l.removeChild(d.j), d.j = null, d.l = null, d.status = 100)
        });
        return d
    };
    var MJ = function(a, b, c, d) {
        var e = a.m,
            f = e.de,
            g = e.isBackfill,
            h = e.Te,
            k = e.bc,
            l = e.wc,
            n = e.Vc,
            m = Array.isArray(a.j) ? new _.Jh(Number(a.j[0]), Number(a.j[1])) : 1;
        return new ME({
            od: e.Cd,
            Rb: a.Rb,
            Sb: a.Sb,
            content: LJ(a, d),
            size: m,
            Ce: !!h,
            Td: b,
            ee: null != f ? f : void 0,
            permissions: {
                uc: ok(c, 1) ? !!F(c, 1) : !g,
                vc: ok(c, 2) ? !!F(c, 2) : !1
            },
            Tb: !!rj().fifWin,
            Bf: eH ? eH : eH = dk(),
            ve: hk(),
            hostpageLibraryTokens: _.ze(gJ).hostpageLibraryTokens,
            Ga: function(p, r) {
                return void bh(a.context, p, r)
            },
            uniqueId: (0, D.J)(k),
            ce: _.G(Gw) ? Oh() : jE(),
            wc: null != l ? l : void 0,
            Bc: null != d ? d : void 0,
            Vc: null != n ? n : void 0
        })
    };
    var zo = function() {
        KJ.apply(this, arguments)
    };
    _.P(zo, KJ);
    zo.prototype.H = function() {
        var a = this.m,
            b = a.N,
            c = b.V;
        a = b.R[a.slotId.getDomId()];
        b = new ik;
        c = pk([b, c.Qa(), null == a ? void 0 : a.Qa()]);
        c = KJ.prototype.o.call(this, c);
        return (0, D.J)(c.j)
    };
    zo.prototype.l = function() {
        return !1
    };
    var NJ = function() {
        KJ.apply(this, arguments)
    };
    _.P(NJ, KJ);
    var OJ = function(a, b) {
            var c = _.Cd(b ? "fencedframe" : "IFRAME");
            b && (c.mode = "opaque-ads");
            c.id = a.Rb;
            c.name = a.Rb;
            c.title = a.Sb;
            Array.isArray(a.j) ? null != a.j[0] && null != a.j[1] && (c.width = String(a.j[0]), c.height = String(a.j[1])) : (c.width = "100%", c.height = "0");
            c.allowTransparency = "true";
            c.scrolling = "no";
            c.marginWidth = "0";
            c.marginHeight = "0";
            c.frameBorder = "0";
            c.style.border = "0";
            c.style.verticalAlign = "bottom";
            c.setAttribute("role", "region");
            c.setAttribute("aria-label", "Advertisement");
            c.tabIndex = 0;
            return c
        },
        PJ = function(a, b) {
            "string" !== typeof a.j && (b.width = String(a.j[0]), b.height = String(a.j[1]));
            var c = _.Xg(a.context, 774, function() {
                a.loaded(b);
                _.Rd(b, "load", c)
            });
            _.db(b, "load", c);
            _.Jm(a, function() {
                return _.Rd(b, "load", c)
            });
            a.m.Cd.appendChild(b)
        };
    var Ao = function() {
        NJ.apply(this, arguments)
    };
    _.P(Ao, NJ);
    Ao.prototype.H = function() {
        var a = this,
            b = this.m,
            c = b.de;
        b = b.wc;
        var d = OJ(this);
        if (null == c ? 0 : c.length)
            if (_.Er) {
                c = _.B(c);
                for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
            } else d.sandbox.add.apply(d.sandbox, _.Nd(c));
        b && (d.allow = b);
        PJ(this, d);
        _.eh(this.context, 653, function() {
            var f = new fg(a.C.Ia, gg);
            var g = f.toString().toLowerCase(); - 1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") ? yo(2) : (yo(3), f = _.G(ix) ? f : new fg("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>", gg));
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            Ha() && g.open("text/html", "replace");
            Ya(g, f);
            var l, n, m;
            if (lr(null != (m = null == (l = d.contentWindow) ? void 0 : null == (n = l.location) ? void 0 : n.href) ? m : "", "#")) {
                var p, r;
                null == (p = d.contentWindow) || null == (r = p.history) || r.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    Ao.prototype.l = function() {
        return !0
    };
    var Co = function() {
        NJ.apply(this, arguments)
    };
    _.P(Co, NJ);
    Co.prototype.H = function() {
        var a = OJ(this, !this.m.Kf);
        Ci(a, this.C.ud);
        PJ(this, a);
        return a
    };
    Co.prototype.l = function() {
        return !1
    };
    var Bo = function() {
        NJ.apply(this, arguments)
    };
    _.P(Bo, NJ);
    Bo.prototype.H = function() {
        var a = this.C.url,
            b = this.m,
            c = b.N,
            d = c.V;
        b = c.R[b.slotId.getDomId()];
        d = pk([d.Qa(), null == b ? void 0 : b.Qa()]);
        var e = OJ(this);
        Ci(e, a);
        NJ.prototype.o.call(this, d, e);
        var f = function() {
            e.removeEventListener("load", f);
            QJ(a)
        };
        e.addEventListener("load", f);
        cv(e, function() {
            return void QJ(a)
        });
        return e
    };
    var QJ = function(a) {
        var b = document.querySelectorAll("script[type=webbundle]");
        if (b.length) {
            a: {
                for (var c = 0; c < b.length; c++) {
                    var d = void 0;
                    if (null == (d = b[c].textContent) ? 0 : d.match(a)) {
                        b = b[c];
                        break a
                    }
                }
                b = null
            }
            b && b.textContent && (c = JSON.parse(b.textContent)) && "object" === typeof c && (d = c.resources, a = d.indexOf(a, 0), -1 < a && d.splice(a, 1), 0 === d.length ? document.head.removeChild(b) : (a = _.Cd("SCRIPT"), a.setAttribute("type", "webbundle"), a.textContent = JSON.stringify(c), document.head.removeChild(b), document.head.appendChild(a)))
        }
    };
    Bo.prototype.l = function() {
        return !1
    };
    var Hp = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, v, x, I, K, M, S, T, Y, aa, ia) {
        Z.call(this, a, 680);
        this.slotId = b;
        this.L = c;
        this.N = d;
        this.wa = e;
        this.G = f;
        this.l = V(this);
        this.B = V(this);
        this.o = fz(this);
        this.K = W(this, g);
        this.qa = W(this, h);
        hz(this, k);
        this.ba = W(this, l);
        this.F = W(this, n);
        this.Y = W(this, m);
        hz(this, K);
        this.M = W(this, p);
        this.P = X(this, r);
        this.xa = X(this, u);
        this.T = W(this, v);
        this.oa = X(this, x);
        this.Fa = X(this, I);
        hz(this, M);
        this.ma = W(this, S);
        hz(this, T);
        ia && hz(this, ia);
        this.ha = X(this, Y);
        this.la = X(this, aa)
    };
    _.P(Hp, Z);
    Hp.prototype.j = function() {
        var a = this,
            b = this.K.value;
        if (0 === b.kind && null == b.Ia) throw new my("invalid html");
        var c;
        b = Do(this.context, b, {
            X: document,
            slotId: this.slotId,
            L: this.L,
            N: this.N,
            wa: this.wa,
            size: this.Y.value,
            Db: this.ba.value,
            Cd: this.F.value,
            De: this.M.value,
            Je: this.P.value,
            de: this.xa.value,
            isBackfill: this.T.value,
            Te: this.oa.value,
            bc: this.Fa.value,
            wc: this.ma.value,
            Kf: null == (c = this.ha.value) ? void 0 : bp(c, 14),
            Vc: this.la.value
        }, {
            Mf: this.qa.value
        });
        _.Cm(this, b);
        var d = b.render();
        GF(this, this.id, this.G, "message", function(e) {
            d.contentWindow === e.source && a.slotId.dispatchEvent(wo, 824, e)
        });
        this.o.notify();
        this.l.j(d);
        this.B.j(b.l())
    };
    var Np = function(a, b, c, d, e) {
        Z.call(this, a, 863);
        this.l = c;
        this.sb = Number(b);
        this.o = W(this, d);
        this.B = W(this, e);
        this.F = RJ(this)
    };
    _.P(Np, Z);
    var RJ = function(a) {
        return _.fb(function(b) {
            return b.return(new y.Promise(function(c) {
                try {
                    GF(a, a.id, a.l, "message", function(d) {
                        var e;
                        "asmreq" === (null == (e = d.data) ? void 0 : e.type) && To(Xd(pD, d.data.payload), 1) === a.sb && c(d)
                    })
                } catch (d) {}
            }))
        })
    };
    Np.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g;
        return _.fb(function(h) {
            if (1 == h.j) return b = Eo(a.l), c = a.o.value, d = a.B.value, gb(h, a.F, 2);
            e = h.m;
            var k = a.l,
                l = Eo(k);
            var n = c.getBoundingClientRect();
            var m = Gd(k) ? Fh(c, k) : {
                x: 0,
                y: 0
            };
            k = m.x;
            m = m.y;
            n = new _.fv(m, k + n.right, m + n.bottom, k);
            k = new rD;
            k = _.A(k, 1, n.top);
            k = _.A(k, 3, n.bottom);
            k = _.A(k, 2, n.left);
            n = _.A(k, 4, n.right);
            k = new qD;
            k = _.A(k, 1, a.sb);
            k = _.A(k, 2, !d);
            n = _.Rg(k, 3, n);
            n = _.A(n, 4, b);
            f = _.A(n, 5, l);
            g = {
                type: "asmres",
                payload: be(f)
            };
            e.ports[0].postMessage(g);
            h.j = 0
        })
    };
    var Ap = function(a, b, c, d, e, f, g, h, k, l, n, m, p) {
        Z.call(this, a, 699);
        this.X = b;
        this.slotId = c;
        this.l = d;
        this.Hb = e;
        this.A = fz(this);
        this.K = X(this, f);
        this.P = W(this, g);
        this.B = W(this, h);
        this.M = W(this, k);
        this.o = X(this, l);
        this.T = W(this, n);
        this.F = W(this, m);
        p && hz(this, p)
    };
    _.P(Ap, Z);
    Ap.prototype.j = function() {
        var a = this.P.value,
            b = this.B.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.K.value) {
            var c, d = null != (c = this.o.value) ? c : 0;
            c = this.M.value;
            var e = this.T.value,
                f = this.F.value,
                g = !1;
            switch (d) {
                case 1:
                case 2:
                    g = this.context;
                    var h = this.X,
                        k = this.slotId,
                        l = this.l,
                        n = this.Hb;
                    var m = c.width,
                        p = c.height,
                        r = 0;
                    var u = 0;
                    var v = vh(l);
                    v = _.B(v);
                    for (var x = v.next(); !x.done; x = v.next()) {
                        var I = x.value;
                        Array.isArray(I) && (x = (0, D.sa)(I[0]), I = (0, D.sa)(I[1]), r < x && (r = x), u < I && (u = I))
                    }
                    u = [r, u];
                    r = u[0] < m;
                    p = u[1] < p;
                    if (r || p) {
                        u = m + "px";
                        v = {
                            "max-height": "none",
                            "max-width": u,
                            padding: "0px",
                            width: u
                        };
                        p && (v.height = "auto");
                        ci(b, a, v);
                        b = {};
                        r && (r = ai(e.width), m > r && (b.width = u, b["max-width"] = u));
                        p && (b.height = "auto", b["max-height"] = "none");
                        c: {
                            for (K in b)
                                if (Object.prototype.hasOwnProperty.call(b, K)) {
                                    var K = !1;
                                    break c
                                }
                            K = !0
                        }
                        K ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.bi(a, b), b = !0)
                    } else b = !1;
                    b: switch (u = c.width, K = h.defaultView || h.parentWindow || _.t, d) {
                        case 2:
                            a = di(a, K, u, e, n);
                            break b;
                        case 1:
                            if (e = a.parentElement)
                                if (n = Kh(e)) {
                                    x = n.width;
                                    n = Qh(k, K.document);
                                    m = (0, D.J)(Sh(n, K));
                                    p = m.position;
                                    I = ai(m.width) || 0;
                                    r = Sh(e, K);
                                    v = "rtl" === r.direction ? "Right" : "Left";
                                    n = v.toLowerCase();
                                    K = "absolute" === p ? 0 : ai(r["padding" + v]);
                                    r = ai(r["border" + v + "Width"]);
                                    u = Math.max(Math.round((x - Math.max(I, u)) / 2), 0);
                                    x = {};
                                    I = 0;
                                    var M = Vu(m);
                                    M && (I = M[4] * ("Right" === v ? -1 : 1), v = M[3] || 1, 1 !== (M[0] || 1) || 1 !== v) && (M[0] = 1, M[3] = 1, x.transform = "matrix(" + M.join(",") + ")");
                                    v = 0;
                                    switch (p) {
                                        case "fixed":
                                            var S, T = null != (S = Number(Th(m.getPropertyValue(n)))) ? S : 0,
                                                Y;
                                            S = null != (Y = e.getBoundingClientRect().left) ? Y : 0;
                                            v = T - S;
                                            break;
                                        case "relative":
                                            v = null != (T = Number(Th(m.getPropertyValue(n)))) ? T : 0;
                                            break;
                                        case "absolute":
                                            x[n] = "0"
                                    }
                                    x["margin-" + n] = u - K - r - v - I + "px";
                                    _.bi(a, x);
                                    a = !0
                                } else a = !1;
                            else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (fi(g, h, k, l, d, c.width, c.height, "gpt_slotexp", f), g = !0) : g = !1;
                    break;
                case 3:
                    d = this.context, g = this.X, h = this.slotId, k = this.l, S = this.Hb, l = c.width, Y = c.height, T = ai(e.height) || 0, Y >= T || "none" === e.display || "hidden" === e.visibility || !S || -12245933 === S.width || a.getBoundingClientRect().bottom <= S.height ? g = !1 : (S = {
                        height: Y + "px"
                    }, ci(b, a, S), _.bi(a, S), fi(d, g, h, k, 3, l, Y, "gpt_slotred", f), g = !0)
            }!g && _.G(Lv) && fi(this.context, this.X, this.slotId, this.l, 0, c.width, c.height, "gpt_pgbrk", f)
        }
        this.A.notify()
    };
    var Ep = function(a, b) {
        Z.call(this, a, 1020);
        this.G = b;
        this.A = V(this)
    };
    _.P(Ep, Z);
    Ep.prototype.j = function() {
        var a = this.G;
        a = _.G(Zw) && void 0 !== a.credentialless && (_.G($w) || a.crossOriginIsolated);
        this.A.j(a)
    };
    var ip = function(a, b, c, d, e) {
        Z.call(this, a, 720);
        this.format = b;
        this.B = c;
        this.A = V(this);
        this.l = X(this, d);
        this.o = X(this, e)
    };
    _.P(ip, Z);
    ip.prototype.j = function() {
        var a = this.o.value;
        if (null == a) Uy(this.A);
        else {
            var b = Math.round(.3 * this.B),
                c;
            2 !== this.format && 3 !== this.format || null == (c = this.l.value) || !bp(c, 12, !1) || 0 >= b || a <= b ? this.A.j(a) : this.A.j(b)
        }
    };
    var tp = function(a, b, c) {
        Z.call(this, a, 1054);
        this.l = b;
        this.A = fz(this);
        this.o = W(this, c)
    };
    _.P(tp, Z);
    tp.prototype.j = function() {
        this.o.value || this.l();
        this.A.notify()
    };
    var vp = function(a, b, c, d, e, f, g, h, k, l, n, m) {
        Z.call(this, a, 674);
        this.slotId = b;
        this.V = c;
        this.o = d;
        this.X = f;
        this.L = g;
        this.A = V(this);
        this.F = 2 === e || 3 === e;
        this.l = W(this, h);
        this.M = W(this, k);
        this.K = X(this, l);
        this.B = X(this, n);
        m && hz(this, m)
    };
    _.P(vp, Z);
    vp.prototype.j = function() {
        var a = Ch(this.V, this.o),
            b = Ph(this.slotId, this.X) || Tl(this.l.value, Yh(this.slotId), a);
        this.M.value && !a && (b.style.display = "inline-block");
        this.F ? wF(this.L, this.slotId, function() {
            return void _.Cu(b)
        }) : _.Jm(this, function() {
            return void _.Cu(b)
        });
        a = SJ(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.A.j(b)
    };
    var SJ = function(a) {
        var b = a.l.value,
            c, d = null == (c = a.K.value) ? void 0 : c.height;
        if (b && !a.B.value && d) {
            var e;
            c = (null != (e = F(a.o, 23)) ? e : F(a.V, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else c = 0;
        return c
    };
    var dp = function(a, b) {
        Z.call(this, a, 859);
        this.G = b;
        this.A = V(this)
    };
    _.P(dp, Z);
    dp.prototype.j = function() {
        this.A.j(!Gd(this.G.top))
    };
    var yp = function(a, b, c) {
        Z.call(this, a, 698);
        this.G = b;
        this.A = V(this);
        this.l = W(this, c)
    };
    _.P(yp, Z);
    yp.prototype.j = function() {
        Ty(this.A, Sh(this.l.value, this.G))
    };
    var Dp = function(a, b, c) {
        Z.call(this, a, 840);
        this.format = b;
        this.X = c;
        this.A = V(this)
    };
    _.P(Dp, Z);
    Dp.prototype.j = function() {
        var a = [],
            b = this.X;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (E = c.features(), _.w(E, "includes")).call(E, "attribution-reporting") && a.push("attribution-reporting");
        5 !== this.format && 4 !== this.format || !_.G(Hv) || a.push("autoplay");
        a.length ? this.A.j(a.join(";")) : this.A.j("")
    };
    var Ip = function(a, b, c, d, e) {
        Z.call(this, a, 934);
        this.G = b;
        this.slotId = c;
        hz(this, d);
        this.l = W(this, e)
    };
    _.P(Ip, Z);
    Ip.prototype.j = function() {
        var a = this;
        kF(this.slotId, wo, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut,
                        e = c.clearAdsData,
                        f = a.l.value,
                        g = new Wt;
                    var h = _.A(g, 1, d ? "1" : "0");
                    var k = _.A(h, 2, 2147483647);
                    var l = _.A(k, 3, "/");
                    var n = _.A(l, 4, a.G.location.hostname);
                    var m = new vz(a.G);
                    yz(m, "__gpi_opt_out", n, f);
                    if (d || e) zz(m, "__gads", f), zz(m, "__gpi", f)
                }
            } catch (p) {}
        })
    };
    var sp = function(a, b, c, d, e, f) {
        Z.call(this, a, 1053);
        this.slotId = b;
        this.N = c;
        this.L = d;
        this.l = V(this);
        this.o = W(this, e);
        this.B = W(this, f)
    };
    _.P(sp, Z);
    sp.prototype.j = function() {
        this.B.value ? (Ko(this.slotId, this.L, this.N, this.o.value), this.l.j(!1)) : this.l.j(!0)
    };
    var Pp = function(a, b, c, d, e, f) {
        Z.call(this, a, 721);
        this.G = b;
        this.F = X(this, c);
        this.o = W(this, d);
        this.l = W(this, e);
        this.B = W(this, f)
    };
    _.P(Pp, Z);
    Pp.prototype.j = function() {
        var a = this,
            b = this.F.value,
            c, d = null == b ? void 0 : null == (c = z(b, 1)) ? void 0 : c.toUpperCase(),
            e;
        b = null == b ? void 0 : null == (e = z(b, 2)) ? void 0 : e.toUpperCase();
        if (d && b) {
            e = this.o.value;
            c = this.l.value;
            var f = this.B.value,
                g = f.style.height,
                h = f.style.width,
                k = f.style.display,
                l = f.style.position,
                n = Lo(e.id + "_top", d),
                m = Lo(e.id + "_bottom", b);
            _.bi(m, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            f.appendChild(n);
            f.appendChild(m);
            _.bi(c, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.bi(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var p;
            _.bi(f, {
                position: "relative",
                display: (null == (p = this.G.screen.orientation) ? 0 : p.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            GF(this, 722, this.G, "orientationchange", function() {
                var r;
                (null == (r = a.G.screen.orientation) ? 0 : r.angle) ? _.bi(f, {
                    display: "none"
                }): _.bi(f, {
                    display: "block"
                })
            });
            _.Jm(this, function() {
                _.Cu(n);
                _.Cu(m);
                f.style.position = l;
                f.style.height = g;
                f.style.width = h;
                f.style.display = k
            })
        }
    };
    var Mp = function(a, b, c, d, e, f) {
        f = void 0 === f ? No : f;
        Z.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.X = d;
        this.wa = e;
        this.K = f;
        this.F = !1;
        this.l = null;
        this.B = this.o = -1;
        this.P = _.br(function() {
            g.wa.dispatchEvent("impressionViewable", 715, new VI(g.slotId, "publisher_ads"))
        });
        this.T = cr(function() {
            g.wa.dispatchEvent("slotVisibilityChanged", 716, new WI(g.slotId, "publisher_ads", g.B))
        }, 200);
        this.M = W(this, c);
        var h = new az;
        lF(this.slotId, rF).then(function() {
            return void h.notify()
        });
        hz(this, h)
    };
    _.P(Mp, Z);
    Mp.prototype.j = function() {
        var a = this,
            b = this.K(_.Xg(this.context, this.id, function(c) {
                c = _.B(c);
                for (var d = c.next(); !d.done; d = c.next()) a.o = 100 * d.value.intersectionRatio, _.w(Number, "isFinite").call(Number, a.o) && TJ(a)
            }));
        b.observe(this.M.value);
        GF(this, this.id, this.X, "visibilitychange", function() {
            TJ(a)
        });
        _.Jm(this, function() {
            b.disconnect()
        })
    };
    var TJ = function(a) {
            var b = !uD(a.X);
            UJ(a, 50 <= a.o && b);
            b = Math.floor(b ? a.o : 0);
            if (0 > b || 100 < b || b === a.B ? 0 : -1 !== a.B || 0 !== b) a.B = b, a.T()
        },
        UJ = function(a, b) {
            a.F || (b ? null === a.l && (a.l = setTimeout(function() {
                uD(a.X) || (a.P(), a.F = !0);
                a.l = null
            }, 1E3)) : null !== a.l && (clearTimeout(a.l), a.l = null))
        };
    var VJ = Q(["https://googleads.g.doubleclick.net/td/kb?kbli=", ""]),
        Gp = function(a, b, c) {
            Z.call(this, a, 1007);
            this.l = X(this, b);
            c && hz(this, c)
        };
    _.P(Gp, Z);
    Gp.prototype.j = function() {
        var a = this.l.value;
        if (null != a && a.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
            var b = document.createElement("iframe");
            a = cb(VJ, encodeURIComponent(a.join()));
            b.removeAttribute("srcdoc");
            if (a instanceof Zf) throw new yr("TrustedResourceUrl", 2);
            a = _.Pa(a);
            void 0 !== a && (b.src = a);
            for (a = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" "); 0 < b.sandbox.length;) b.sandbox.remove(b.sandbox.item(0));
            for (var c = 0; c < a.length; c++) b.sandbox.supports && !b.sandbox.supports(a[c]) || b.sandbox.add(a[c]);
            b.id = "koelBirdIGRegisterIframe";
            document.head.appendChild(b)
        }
    };
    var mp = function(a, b, c) {
        Z.call(this, a, 666);
        this.o = b;
        this.l = V(this);
        this.B = X(this, c)
    };
    _.P(mp, Z);
    mp.prototype.j = function() {
        var a = new np;
        if (this.B.Qb()) {
            var b = _.A(a, 2, this.B.value);
            _.A(b, 3, 1)
        }
        if (this.o) {
            a = [this.o, a];
            b = new np;
            a = _.B(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, ok(c, 1) && _.A(b, 1, z(c, 1)), ok(c, 2) && _.A(b, 2, z(c, 2)), ok(c, 3) && _.A(b, 3, De(c, 3));
            a = b
        }
        b = this.l;
        a = ok(a, 2) ? ok(a, 3) && 0 !== (0, _.Ml)() ? (0, D.sa)(z(a, 2)) * (0, D.sa)(De(a, 3)) : z(a, 2) : null;
        Ty(b, a)
    };
    var zp = function(a, b, c, d, e, f, g) {
        f = void 0 === f ? Po : f;
        Z.call(this, a, 666);
        this.o = f;
        this.A = fz(this);
        hz(this, b);
        g && hz(this, g);
        this.l = W(this, c);
        this.F = X(this, d);
        this.B = X(this, e)
    };
    _.P(zp, Z);
    zp.prototype.j = function() {
        var a = this.B.value,
            b = this.F.value,
            c = this.l.value;
        null == a || 0 > a || 0 === b || !Uh(c) ? this.A.notify() : WJ(this, a, b, c)
    };
    var WJ = function(a, b, c, d) {
        var e = a.o(b, _.Xg(a.context, 291, function(f, g) {
            f = _.B(f);
            for (var h = f.next(); !h.done; h = f.next())
                if (h = h.value, !(0 >= h.intersectionRatio)) {
                    g.unobserve(h.target);
                    a.A.notify();
                    break
                }
        }));
        null != c && setTimeout(function() {
            a.A.notify();
            e.disconnect()
        }, c);
        e.observe(d);
        _.Jm(a, function() {
            e.disconnect()
        })
    };
    var xp = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 664);
        this.slotId = b;
        this.Hb = c;
        this.L = d;
        this.A = fz(this);
        this.o = W(this, e);
        this.l = X(this, f);
        g && hz(this, g)
    };
    _.P(xp, Z);
    xp.prototype.j = function() {
        var a = this,
            b, c = null != (b = this.l.value) ? b : 0;
        if (0 !== (0, _.Ml)() || 0 < c) {
            var d = document;
            b = tD(d);
            if (uD(d) && b && (0 < CF(this.L, this.slotId) || !XJ(this)) && b) {
                var e = GF(this, 324, d, b, function() {
                    uD(d) || (e && e(), a.A.notify())
                });
                if (e) return
            }
        }
        this.A.notify()
    };
    var XJ = function(a) {
        var b = a.o.value;
        try {
            var c, d = null != (c = top) ? c : void 0;
            if (void 0 === d) return !0;
            var e = hm(null == d ? void 0 : d.document, d).y,
                f = e + a.Hb.height;
            return b.y >= e && b.y <= f
        } catch (g) {
            return !0
        }
    };
    var up = function(a, b, c) {
        Z.call(this, a, 1055);
        this.A = fz(this);
        hz(this, c);
        this.l = W(this, b)
    };
    _.P(up, Z);
    up.prototype.j = function() {
        this.l.value && this.A.notify()
    };
    var lp = function(a, b, c, d, e, f) {
        Z.call(this, a, 669);
        this.V = b;
        this.R = c;
        this.G = d;
        this.A = V(this);
        this.o = X(this, e);
        this.l = W(this, f)
    };
    _.P(lp, Z);
    lp.prototype.j = function() {
        if (bk(Jv) || !_.G(Kk) && wh(this.R, xh, 16) && Zl("google_range_debug", this.G)) this.A.j(!0);
        else {
            var a, b = !(null == (a = this.o.value) || !z(a, 1)) && (F(this.R, 12) || F(this.V, 13)) || this.l.value;
            this.A.j(!!b)
        }
    };
    var Bp = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 719);
        this.V = b;
        this.B = c;
        this.A = V(this);
        this.l = W(this, d);
        this.F = W(this, e);
        this.o = X(this, f);
        this.K = X(this, g)
    };
    _.P(Bp, Z);
    Bp.prototype.j = function() {
        var a = this.l.value.kind;
        switch (a) {
            case 0:
                if (this.l.value.Ia)
                    if (this.F.value) YJ(this);
                    else {
                        if (a = this.o.value) a = Ru(), a = !(!a["allow-top-navigation-by-user-activation"] || !a["allow-popups-to-escape-sandbox"]);
                        a ? Ty(this.A, _.G(Ew) ? null : RE) : Uy(this.A)
                    }
                else Uy(this.A);
                break;
            case 1:
                YJ(this);
                break;
            case 2:
                Uy(this.A);
                break;
            default:
                Qa(a)
        }
    };
    var YJ = function(a) {
        var b = a.K.value,
            c = new ik;
        b = _.A(c, 3, b);
        F(pk([b, a.V.Qa(), a.B.Qa()]), 3) ? a.A.j(RE) : Uy(a.A)
    };
    var op = function(a, b, c, d, e, f, g, h, k, l, n) {
        Z.call(this, a, 681);
        this.adUnitPath = b;
        this.ha = c;
        this.P = d;
        this.window = e;
        this.K = f;
        this.Ea = V(this);
        this.M = V(this);
        this.kc = V(this);
        this.l = bk(Jv).split(",");
        this.o = df(Kv);
        this.Ja = Le(c, xh, 16);
        this.B = Yl("google_range_debug", this.window);
        this.T = X(this, g);
        this.la = X(this, h);
        this.Y = X(this, k);
        this.F = W(this, l);
        this.ba = W(this, n)
    };
    _.P(op, Z);
    op.prototype.j = function() {
        if (this.K) ZJ(this);
        else {
            var a;
            if (a = !!(this.l.length || this.Ja && this.B)) {
                b: if (this.l.length) {
                    if (this.o.length && (a = this.adUnitPath.split("/"), !_.w(this.o, "includes").call(this.o, a[a.length - 1]))) {
                        a = !1;
                        break b
                    }
                    a = !0
                } else a = !1;
                var b = a;a = b ? $J(this) : null;
                if (b && a) {
                    b = this.ba.value;
                    var c, d, e = null != (d = null == (c = Kh(b.parentElement)) ? void 0 : c.width) ? d : 0;
                    c = "p" === this.l[0];
                    d = Number(this.l[0]);
                    if (c = "f" === this.l[0] ? this.P : d && 0 < d ? d : c ? Math.min(e, this.P) : null) {
                        d = a.width;
                        var f = a.height,
                            g = this.l[1],
                            h = Number(g);
                        d = "ratio" === g && d ? Math.floor(f / d * c) : h && 0 < h ? f * h : f;
                        aK(this, c, d, {
                            kind: 0,
                            Ia: bK(c, d, "<p>Requested size:" + a.width + "x" + a.height + "</p>")
                        }, c <= e ? 1 : 2, b);
                        a = !0
                    } else a = !1
                } else a = !1;
                if (!a) a: if (!_.G(Kk) && this.Ja && this.B) {
                    a = pm(this.Ja, this.window);
                    b = qm(this.Ja, this.window);
                    e = rm(this.Ja);
                    c = sm(this.Ja);
                    switch (this.B) {
                        case "max":
                            d = a;
                            f = b;
                            break;
                        case "min":
                            d = e;
                            f = c;
                            break;
                        case "banner":
                            d = a;
                            f = 90 > b ? b : 90 < c ? c : 90;
                            break;
                        case "skyscraper":
                            d = 90 > a ? a : 90 < e ? e : 90;
                            f = b;
                            break;
                        default:
                            a = !1;
                            break a
                    }
                    aK(this, d, f, {
                        kind: 0,
                        Ia: bK(d, f, "<p>Minimum size:" + e + "x" + c + "</p><p>Maximum size:" + (a + "x" + b + "</p><div id=toowide style=\"display:none; background:#faa\">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? 'block' : 'none';},{threshold:1}).observe(document.body);\x3c/script></div>"))
                    });
                    a = !0
                } else a = !1
            }
            a || ZJ(this)
        }
    };
    var $J = function(a) {
            a = vh(a.ha)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.Jh(a[0], a[1]) : null
        },
        bK = function(a, b, c) {
            return '<html><body style="height:' + (b - 2 + "px;width:" + (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;">')) + c + ("<p>Rendered size:" + a + "x" + b + "</p></body></html>")
        },
        aK = function(a, b, c, d, e, f) {
            e = void 0 === e ? a.T.value : e;
            a.M.j(new _.Jh(b, c));
            a.Ea.j(d);
            Ty(a.kc, e);
            f && _.mv(f, "opacity", .5)
        },
        ZJ = function(a) {
            var b = a.la.value,
                c = a.Y.value;
            if (a.K) aK(a, null != b ? b : 0, null != c ? c : 0, a.F.value);
            else {
                if (null == b) throw new Mk("Missing 'width'.");
                if (null == c) throw new Mk("Missing 'height'.");
                aK(a, b, c, a.F.value)
            }
        };
    var jp = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 673);
        this.slotId = b;
        this.Db = c;
        this.F = d;
        this.B = e;
        this.X = f;
        this.l = g;
        this.L = h;
        this.o = k;
        this.A = V(this)
    };
    _.P(jp, Z);
    jp.prototype.j = function() {
        var a = this,
            b, c;
        return _.fb(function(d) {
            if (1 == d.j) {
                if (a.Db) {
                    cK(a, a.Db);
                    a.A.j(a.Db);
                    d.j = 0;
                    return
                }
                if (Bh(a.l)) {
                    a.A.j(dK(a));
                    d.j = 0;
                    return
                }
                return gb(d, lF(a.slotId, mF), 4)
            }
            b = d.m;
            c = b.detail;
            if (a.I) return d.return();
            cK(a, c);
            a.A.j(c);
            d.j = 0
        })
    };
    var dK = function(a) {
            var b = _.Cd("INS");
            b.id = a.F;
            _.bi(b, {
                display: "none"
            });
            a.X.documentElement.appendChild(b);
            var c = function() {
                return void _.Cu(b)
            };
            2 === a.l || 3 === a.l ? wF(a.L, a.slotId, c) : _.Jm(a, c);
            return b
        },
        cK = function(a, b) {
            if (2 !== a.l && 3 !== a.l) {
                for (var c = _.B(_.w(Array, "from").call(Array, b.childNodes)), d = c.next(); !d.done; d = c.next()) d = d.value, 1 === d.nodeType && d.id !== a.B && _.Cu(d);
                a.o || (b.style.display = "")
            }
        };
    var wp = function(a, b) {
        Z.call(this, a, 676);
        this.A = V(this);
        this.l = W(this, b)
    };
    _.P(wp, Z);
    wp.prototype.j = function() {
        var a = Hh(this.l.value);
        this.A.j(a)
    };
    var Cp = function(a, b, c, d, e) {
        Z.call(this, a, 807);
        this.G = b;
        this.A = fz(this);
        this.l = X(this, c);
        this.o = W(this, d);
        e && hz(this, e)
    };
    _.P(Cp, Z);
    Cp.prototype.j = function() {
        var a = this.l.value;
        if (a && !this.o.value) {
            var b = ev(this.G);
            fF(new eF(b, a)) || this.U(new Mk("Cannot create top window frame"))
        }
        this.A.notify()
    };
    var pp = function(a, b, c) {
        Z.call(this, a, 881);
        this.Va = b;
        this.A = V(this);
        this.l = X(this, c)
    };
    _.P(pp, Z);
    pp.prototype.j = function() {
        if (_.G(Rw) || !this.l.value) Uy(this.A);
        else {
            for (var a = this.l.value, b = [], c = _.B((E = vH(this.Va), _.w(E, "values")).call(E)), d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                try {
                    b.push(JSON.parse(d))
                } catch (e) {
                    bh(this.context, 1023, e)
                }
            }
            0 === b.length ? this.A.j(Wo(a)) : this.A.j(Wo(a, b))
        }
    };
    pp.prototype.m = function() {
        Uy(this.A)
    };
    var Xo = navigator,
        Yo = /(\$\{GDPR})/gi,
        Zo = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
        $o = /(\$\{ADDTL_CONSENT})/gi;
    var eK = navigator,
        qp = function(a, b, c, d, e, f, g, h, k) {
            Z.call(this, a, 882);
            this.L = b;
            this.aa = c;
            this.ha = d;
            this.Ea = V(this);
            this.B = V(this);
            this.F = V(this);
            this.l = _.G(Tw);
            this.o = X(this, e);
            this.P = X(this, f);
            this.T = W(this, g);
            this.ba = W(this, h);
            this.Y = W(this, k)
        };
    _.P(qp, Z);
    var fK = function(a) {
        a.F.j(a.ha);
        a.Ea.j(a.T.value);
        a.B.j(a.ba.value)
    };
    qp.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n, m, p, r, u;
        return _.fb(function(v) {
            switch (v.j) {
                case 1:
                    b = "runAdAuction" in navigator && Rf("run-ad-auction", document);
                    if (_.G(Rw) || a.l && !b || !a.o.value || !a.P.value) return fK(a), v.return();
                    c = a.o.value.getWidth();
                    d = a.o.value.getHeight();
                    if (!c || !d) return fK(a), v.return();
                    e = Rn(a.o.value, Uo, 5);
                    a.K = e.getEscapedQemQueryId();
                    a.M = Ym(e, 6);
                    f = bp(e, 9);
                    if (g = bp(e, 10))
                        if (fK(a), bp(e, 17)) return cp(0, 0, e), v.return();
                    gi("pre_run_ad_auction_ping", function(x) {
                        mi(x, a.context);
                        var I;
                        L(x, "winner_qid", null != (I = a.K) ? I : "");
                        var K;
                        L(x, "xfpQid", null != (K = a.M) ? K : "");
                        L(x, "publisher_tag", "gpt")
                    }, 1);
                    h = performance.now();
                    k = fe(a.o.value, 8) || 1E3;
                    return gb(v, gK(a, a.P.value, e, k, h), 2);
                case 2:
                    l = v.m;
                    n = Math.round(performance.now() - h);
                    m = 3 === l;
                    p = 2 === l;
                    r = 1 === l;
                    u = a.l ? "string" === typeof l : l && !p && !r;
                    gi("run_ad_auction_stats", function(x) {
                        mi(x, a.context);
                        L(x, "duration_ms", n);
                        L(x, "applied_timeout_ms", k);
                        L(x, "timed_out", p ? 1 : 0);
                        a.l && L(x, "error", m ? 1 : 0);
                        L(x, "auction_skipped", r ? 1 : 0);
                        L(x, "auction_winner", u ? 1 : 0);
                        L(x, "thread_release_only", bp(e, 15) ? 1 : 0);
                        var I;
                        L(x, "winner_qid", null != (I = a.K) ? I : "");
                        var K;
                        L(x, "xfpQid", null != (K = a.M) ? K : "");
                        L(x, "publisher_tag", "gpt")
                    }, 1);
                    if (!u) return cp(n, p ? k : 0, e), g || fK(a), v.return();
                    if (g) {
                        if (!_.G(Sw)) {
                            v.j = 8;
                            break
                        }
                        return gb(v, eK.deprecatedURNToURL(l, !0), 8)
                    }
                    if (!f) {
                        v.j = 4;
                        break
                    }
                    if (!_.G(Sw)) {
                        v.j = 6;
                        break
                    }
                    return gb(v, eK.deprecatedURNToURL(l, !0), 6);
                case 6:
                    return fK(a), v.return();
                case 8:
                    return v.return();
                case 4:
                    return gb(v, ap(l, {
                        gdprApplies: ok(a.aa, 3) ? F(a.aa, 3) ? "1" : "0" : null,
                        Ne: z(a.aa, 2),
                        pe: z(a.aa, 4)
                    }), 10);
                case 10:
                    a.Y.value.style.display = "", a.Ea.j({
                        kind: 2,
                        ud: l
                    }), a.B.j(new _.Jh(c, d)), a.F.j(!1), v.j = 0
            }
        })
    };
    qp.prototype.m = function() {
        fK(this)
    };
    var gK = function(a, b, c, d, e) {
        var f, g, h, k, l, n, m, p, r;
        return _.fb(function(u) {
            if (1 == u.j) {
                f = fe(c, 14) || -1;
                if (0 < f && a.L.I >= f) return u.return(1);
                g = fe(c, 13) || -1;
                if (0 < g && a.L.C >= g) return u.return(1);
                ++a.L.I;
                ++a.L.C;
                h = function(v) {
                    gi("run_ad_auction_complete", function(x) {
                        mi(x, a.context);
                        L(x, "duration_ms", Math.round(performance.now() - e));
                        L(x, "applied_timeout_ms", d);
                        L(x, "auction_has_winner", !!v);
                        a.K && L(x, "winner_qid", a.K);
                        a.M && L(x, "xfpQid", a.M)
                    }, 1)
                };
                a.l && (b.signal = AbortSignal.timeout(d));
                p = bp(c, 15) ? new y.Promise(function(v) {
                    setTimeout(function() {
                        v(null)
                    }, 0)
                }) : a.l ? null == (l = (k = eK).runAdAuction) ? void 0 : l.call(k, b).then(function(v) {
                    h(v);
                    return v
                }).catch(function(v) {
                    return v instanceof DOMException && "TimeoutError" === v.name ? 2 : 3
                }) : null == (m = (n = eK).runAdAuction) ? void 0 : m.call(n, b).then(function(v) {
                    h(v);
                    return v
                });
                return gb(u, a.l ? p : y.Promise.race([p, dv(d)]), 2)
            }
            r = u.m;
            --a.L.I;
            return u.return(r)
        })
    };
    var hK = function(a, b) {
            this.context = a;
            this.L = b;
            this.j = new y.Map
        },
        iK = function(a, b) {
            if (b)
                if (_.G(pw)) {
                    if (a = a.L.j.get(b)) {
                        var c;
                        null == (c = a.qd) || c.Ba();
                        delete a.qd
                    }
                } else {
                    var d;
                    null == (d = a.j.get(b)) || d.Ba();
                    a.j.delete(b)
                }
        },
        jK = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r) {
            var u = document,
                v = window;
            e || f || _.G(rp) || iK(a, d);
            var x = Rp(a.context, b, c, d, e, f, g, h, k, l, u, n, m, p, r, function() {
                if (d)
                    if (_.G(pw)) {
                        var I;
                        var K = null == (I = a.L.j.get(d)) ? void 0 : I.qd;
                        null == K || K.Ba();
                        EF(a.L, d, x)
                    } else null == (K = a.j.get(d)) || K.Ba(), a.j.set(d, x)
            });
            f || _.G(rp) || (_.G(pw) ? EF(a.L, d, x) : a.j.set(d, x));
            _.Jm(d, function() {
                return void iK(a, d)
            });
            v.top !== v && v.addEventListener("pagehide", function(I) {
                I.persisted || iK(a, d)
            });
            Af(x)
        };
    var kK = function(a, b) {
        Z.call(this, a, 802);
        this.G = b;
        this.l = V(this)
    };
    _.P(kK, Z);
    kK.prototype.j = function() {
        var a = this,
            b, c, d, e;
        return _.fb(function(f) {
            if (1 == f.j) {
                if (!_.G(fw)) return a.l.j(""), f.return();
                b = xg(a.G);
                if (!b) {
                    a.l.j("");
                    f.j = 0;
                    return
                }
                f.D = 3;
                return gb(f, b, 5)
            }
            if (3 != f.j) return d = null != (c = f.m) ? c : "0", d.length > _.we(iw) && (bh(a.context, a.id, new Mk("ML:" + d.length)), d = "0"), a.l.j(d), ib(f, 0);
            e = jb(f);
            bh(a.context, a.id, e);
            a.l.j("0");
            f.j = 0
        })
    };
    kK.prototype.m = function() {
        this.l.j("")
    };
    var lK = function(a, b, c) {
        Z.call(this, a, 944);
        this.G = b;
        this.l = new vz(this.G);
        this.o = W(this, c)
    };
    _.P(lK, Z);
    lK.prototype.j = function() {
        var a = this.o.value;
        if (xz(this.l, a)) {
            var b = wz(this.l, "__gpi_opt_out", a);
            if (b) {
                var c = new Wt;
                b = _.A(c, 1, b);
                b = _.A(b, 2, 2147483647);
                b = _.A(b, 3, "/");
                b = _.A(b, 4, this.G.location.hostname);
                yz(this.l, "__gpi_opt_out", b, a)
            }
        }
    };
    var mK = function(a, b, c, d) {
        d = void 0 === d ? Up : d;
        Z.call(this, a, 883);
        this.B = b;
        this.F = d;
        this.l = fz(this);
        this.o = W(this, c)
    };
    _.P(mK, Z);
    mK.prototype.j = function() {
        !F(this.o.value, 5) || _.G(ow) ? this.l.notify() : (_.G(nw) || eD(this.B), this.F() ? bz(this.l, new y.Promise(function(a) {
            return void fD(a)
        })) : (fD(null), this.l.notify()))
    };
    var nK = function(a, b, c, d, e) {
        Z.call(this, a, 884);
        this.ya = b;
        this.l = c;
        this.o = V(this);
        this.F = X(this, d);
        this.B = W(this, e)
    };
    _.P(nK, Z);
    nK.prototype.j = function() {
        this.l.m = this.F.value;
        dH(this.l, wz(this.ya, "__gads", this.B.value));
        vk(20);
        vk(2);
        this.o.j(_.ze(Ae).j())
    };
    var oK = function(a, b, c) {
        Z.call(this, a, 873);
        this.G = b;
        this.l = W(this, c)
    };
    _.P(oK, Z);
    oK.prototype.j = function() {
        var a = this.context,
            b = this.l.value,
            c = this.G;
        !rj()._pubconsole_disable_ && (b = pe("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || wj(a, c))
    };
    var pK = function(a, b, c, d) {
        Z.call(this, a, 1058);
        this.aa = b;
        this.l = X(this, c);
        hz(this, d)
    };
    _.P(pK, Z);
    pK.prototype.j = function() {
        if (this.l.value && F(this.aa, 5)) {
            var a = this.l.value;
            a({
                message: "goog:spam:client_age",
                pvsid: this.context.pvsid
            })
        }
    };
    var qK = function(a, b, c) {
        Z.call(this, a, 798);
        this.A = V(this);
        this.l = X(this, b);
        this.o = W(this, c)
    };
    _.P(qK, Z);
    qK.prototype.j = function() {
        var a = this,
            b = new y.Map;
        if (this.l.value) {
            var c = this.l.value,
                d = c.ga.Ca,
                e = c.Wc.Xc;
            c = _.B(_.w(c.da.W, "entries").call(c.da.W));
            for (var f = c.next(); !f.done; f = c.next()) {
                var g = _.B(f.value);
                f = g.next().value;
                g = g.next().value;
                b.set(g, d ? rK(this, g, e[f]) : function() {
                    return a.o.value
                })
            }
        }
        this.A.j(b)
    };
    var rK = function(a, b, c) {
        return Rh(function() {
            var d = _.w(Object, "assign").call(Object, {}, a.l.value);
            d.da.hd = !0;
            d.da.W = [b];
            d.Wc.Xc = c ? [c] : [];
            return Xl(fI(new cI(d))).url
        })
    };
    var sK = function(a, b, c, d, e, f) {
        f = void 0 === f ? Vp : f;
        Z.call(this, a, 886);
        this.W = b;
        this.L = c;
        this.l = d;
        this.X = e;
        this.o = f;
        this.A = fz(this)
    };
    _.P(sK, Z);
    sK.prototype.j = function() {
        var a = this,
            b, c;
        return _.fb(function(d) {
            if (1 == d.j) return 3 !== sD(a.X) ? (d.j = 2, d = void 0) : d = gb(d, new y.Promise(function(e) {
                return void wD(e, a.X)
            }), 2), d;
            if (4 != d.j) return b = a.l ? Oo(a.l) : null, null == b || (c = a.W.some(function(e) {
                return !Uh(Qh(e))
            })) ? (a.A.notify(), d.return()) : gb(d, tK(a, b), 4);
            a.A.notify();
            d.j = 0
        })
    };
    var tK = function(a, b) {
        return new y.Promise(function(c) {
            var d = a.o(function(h, k) {
                h.some(function(l) {
                    return 0 < l.intersectionRatio
                }) && (k.disconnect(), c())
            }, b + "%");
            _.Jm(a, function() {
                return void d.disconnect()
            });
            for (var e = {}, f = _.B(a.W), g = f.next(); !g.done; e = {
                    Mb: e.Mb
                }, g = f.next()) {
                g = g.value;
                e.Mb = Qh(g);
                if (!e.Mb) break;
                d.observe(e.Mb);
                xF(a.L, g, function(h) {
                    return function() {
                        return void d.unobserve(h.Mb)
                    }
                }(e))
            }
        })
    };
    var uK = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r) {
        Z.call(this, a, 866);
        this.F = b;
        this.l = c;
        this.B = d;
        this.Wb = e;
        this.ub = f;
        this.tb = g;
        this.aa = h;
        this.X = k;
        this.A = fz(this);
        this.o = W(this, l);
        this.M = W(this, n);
        this.P = W(this, m);
        hz(this, p);
        this.K = W(this, r)
    };
    _.P(uK, Z);
    uK.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n, m, p;
        return _.fb(function(r) {
            if (1 == r.j) {
                b = a.M.value;
                if (!b) return a.A.notify(), r.return();
                c = _.G(Xw) ? mb(a.P.value, {
                    uuid: a.tb
                }) : Di(a.tb);
                d = document.createElement("script");
                e = {
                    source: b,
                    credentials: a.K.value ? "include" : "omit",
                    resources: [c.toString()]
                };
                d.setAttribute("type", "webbundle");
                Ta(d, new Sa(JSON.stringify(e).replace(/</g, "\\x3c"), yn));
                a.X.head.appendChild(d);
                d.addEventListener("error", function(u) {
                    u = new ny(u.message || "Failed to load web bundle.");
                    a.l(u)
                });
                a.A.notify();
                f = _.G(Xw) ? a.T : a.Y;
                return gb(r, f.bind(a)(c), 2)
            }
            g = r.m;
            h = g.vd;
            k = g.Sd;
            delete rj()[a.ub.replace("googletag.", "")];
            if (h.length !== k.length) return a.l(new my("Received " + h.length + " ad URLs but " + k.length + " metadatas")), r.return();
            e.resources = h.filter(function(u) {
                return u
            });
            e.resources.length ? (l = _.Cd("SCRIPT"), l.setAttribute("type", "webbundle"), Ta(l, new Sa(JSON.stringify(e).replace(/</g, "\\x3c"), yn)), a.X.head.removeChild(d), a.X.head.appendChild(l)) : a.X.head.removeChild(d);
            for (n = 0; n < h.length; n++) m = h[n], p = k[n], a.F(n, p, {
                kind: 1,
                url: m
            }, a.o.value, a.aa);
            a.B(h.length - 1, a.o.value, a.aa);
            r.j = 0
        })
    };
    var vK = function(a) {
        var b = rj(),
            c = a.ub.replace("googletag.", "");
        return new y.Promise(function(d) {
            var e = !1;
            Object.defineProperty(b, c, {
                value: function(f, g) {
                    e || d({
                        vd: f,
                        Sd: g
                    });
                    e = !0
                },
                writable: !1,
                enumerable: !1,
                configurable: !0
            })
        })
    };
    uK.prototype.T = function(a) {
        var b, c, d;
        return _.fb(function(e) {
            if (1 == e.j) return gb(e, fetch(a.toString()), 2);
            if (3 != e.j) return b = e.m, gb(e, b.text(), 3);
            c = e.m;
            d = Xd(hu, c);
            return e.return({
                vd: Xk(d, 1),
                Sd: Xk(d, 2)
            })
        })
    };
    uK.prototype.Y = function(a) {
        var b = this,
            c;
        return _.fb(function(d) {
            return 1 == d.j ? (c = document.createElement("script"), Va(c, a), b.X.head.appendChild(c), gb(d, vK(b), 2)) : d.return(d.m)
        })
    };
    var wK = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 810);
        this.B = b;
        this.Ca = c;
        this.N = d;
        this.o = e;
        this.G = f;
        this.aa = g;
        this.l = V(this)
    };
    _.P(wK, Z);
    wK.prototype.j = function() {
        var a = this,
            b = this.B;
        !this.Ca && 1 < this.B.length && (b = [b[0]]);
        b = b.filter(function(f) {
            if (f.I) return !1;
            var g = a.N.R[f.getDomId()],
                h;
            if (h = !(Gm(Fl(g)) && (E = df(uw), _.w(E, "includes")).call(E, String(Fl(g))))) zl(a.G) && 4 === Fl(g) ? (O(a.o, zG("googletag.enums.OutOfPageFormat.REWARDED", String(f.getAdUnitPath()))), h = !0) : h = !1, h = !h;
            return h && !Il(a.context, a.o, f, g, a.G, a.aa)
        });
        30 < b.length && (O(this.o, vG("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        if (_.G(Vw))
            for (var c = {}, d = _.B(b), e = d.next(); !e.done; c = {
                    ic: c.ic
                }, e = d.next()) c.ic = e.value, _.Jm(c.ic, function(f) {
                return function() {
                    var g = _.w(b, "findIndex").call(b, function(h) {
                        return h === f.ic
                    }); - 1 < g && b.splice(g, 1)
                }
            }(c));
        this.l.j(b)
    };
    var xK = function(a, b, c, d) {
        Z.call(this, a, 1068);
        this.o = b;
        this.B = c;
        this.l = d;
        this.A = V(this)
    };
    _.P(xK, Z);
    xK.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n;
        return _.fb(function(m) {
            switch (m.j) {
                case 1:
                    if (a.l) return gb(m, a.l.promise, 5);
                    f = a.A;
                    g = f.j;
                    return gb(m, null != (d = null == (b = a.o) ? void 0 : b.promise) ? d : null == (c = a.B) ? void 0 : c.promise.then(function(p) {
                        return p ? p() : ""
                    }), 4);
                case 4:
                    g.call(f, null != (e = m.m) ? e : "");
                    m.j = 0;
                    break;
                case 5:
                    h = m.m;
                    k = a.A;
                    l = k.j;
                    if (!h) {
                        n = "";
                        m.j = 6;
                        break
                    }
                    return gb(m, h(), 7);
                case 7:
                    n = m.m;
                case 6:
                    l.call(k, n), m.j = 0
            }
        })
    };
    xK.prototype.m = function() {
        this.A.j("")
    };
    var yK = function(a, b, c) {
        Z.call(this, a, 919);
        this.l = b;
        this.aa = c;
        this.A = V(this)
    };
    _.P(yK, Z);
    yK.prototype.j = function() {
        var a, b = !(null == (a = this.l) ? 0 : F(a, 9)) && !!F(this.aa, 5);
        this.A.j(b)
    };
    var zK = function(a, b, c, d, e, f) {
        Z.call(this, a, 935);
        this.L = b;
        this.N = c;
        this.X = d;
        this.A = fz(this);
        this.l = W(this, e);
        hz(this, f)
    };
    _.P(zK, Z);
    zK.prototype.j = function() {
        var a = this.N,
            b = a.V;
        a = a.R;
        for (var c = _.B(this.l.value), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a[d.getDomId()],
                f = this.X;
            tm(e, b) && !this.L.fb(d) && um(d, f, e, b)
        }
        this.A.notify()
    };
    var AK = function(a, b, c, d, e, f) {
        f = void 0 === f ? Fi : f;
        Z.call(this, a, 939);
        this.o = b;
        this.G = c;
        this.aa = d;
        this.l = f;
        hz(this, e)
    };
    _.P(AK, Z);
    AK.prototype.j = function() {
        this.l(this.G, co(fo(go(_.Zg(eo(new ho, Ls(new bo, String(this.o))), 4, 1), 2), this.context.Ya || this.context.Ha), F(this.aa, 5)), _.G(ox) ? function() {} : void 0)
    };
    var BK = function(a, b, c, d, e) {
        Z.call(this, a, 905);
        this.N = b;
        this.l = c;
        this.A = fz(this);
        this.o = W(this, d);
        hz(this, e)
    };
    _.P(BK, Z);
    BK.prototype.j = function() {
        for (var a = _.B(this.o.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            switch (null == (c = this.N.R[b.value.getDomId()]) ? void 0 : Fl(c)) {
                case 2:
                case 3:
                case 5:
                    this.l.load(_.zJ);
                    return
            }
        }
        this.A.notify()
    };
    var CK = function(a, b, c, d) {
        Z.call(this, a, 833);
        this.l = b;
        this.G = c;
        this.A = fz(this);
        hz(this, d)
    };
    _.P(CK, Z);
    CK.prototype.j = function() {
        if (!_.G(Fw)) {
            var a = this.l,
                b = this.G,
                c = _.G(Gw) ? Oh() : jE();
            c = {
                version: eH ? eH : eH = dk(),
                ac: c,
                Lf: _.G(Hw)
            };
            c = TE.bf(c);
            var d = AE(b);
            c = d ? Ld(c, new y.Map([
                ["n", String(d)]
            ])) : c;
            d = df(fk);
            for (var e = new y.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
            c = Ld(c, e);
            var g;
            a.resources[c.toString()] || (null == (g = rj()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.Cd("IFRAME"), a.src = Ua(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)))
        }
        this.A.notify()
    };
    var DK = function(a, b, c, d) {
        Z.call(this, a, 928);
        this.requestId = b;
        this.A = fz(this);
        this.l = W(this, c);
        hz(this, d)
    };
    _.P(DK, Z);
    DK.prototype.j = function() {
        var a = this.context,
            b = this.requestId,
            c = this.l.value.length;
        if (a.Zb) {
            var d = a.ob;
            a = Sg(a);
            var e = new uv;
            b = _.Jc(e, 2, b, 0);
            c = _.Jc(b, 1, c, 0);
            c = Ug(a, 7, Vg, c);
            Pd(d, c)
        }
        this.A.notify()
    };
    var EK = function(a, b, c, d) {
        Z.call(this, a, 867);
        this.wa = b;
        this.N = c;
        this.A = fz(this);
        this.l = W(this, d)
    };
    _.P(EK, Z);
    EK.prototype.j = function() {
        for (var a = _.B(this.l.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.B(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = z(this.N.R[b.getDomId()], 20);
            b.dispatchEvent(oF, 808, {
                xe: c,
                Af: d
            });
            this.wa.dispatchEvent("slotRequested", 705, new ZI(b, "publisher_ads"))
        }
        this.A.notify()
    };
    var FK = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, v, x, I, K, M, S, T, Y, aa, ia, Xa, za, ta, va, Da) {
        Z.call(this, a, 785, _.we(Kw));
        this.Ca = b;
        this.L = c;
        this.ya = d;
        this.N = e;
        this.Wb = f;
        this.Za = g;
        this.Gb = h;
        this.Fb = k;
        this.dd = l;
        this.tb = n;
        this.ub = m;
        this.rb = p;
        this.aa = r;
        this.isSecureContext = u;
        this.G = v;
        this.M = x;
        this.rc = I;
        this.o = V(this);
        this.F = V(this);
        this.T = V(this);
        this.l = V(this);
        hz(this, Y);
        this.ma = gz(this, x);
        this.B = gz(this, I);
        this.P = W(this, K);
        this.ba = W(this, M);
        this.K = gz(this, S);
        this.xa = X(this, T);
        hz(this, Y);
        hz(this, aa);
        ia && (this.qa = W(this, ia));
        this.Y = new $y(Xa);
        this.oa = X(this, za);
        this.ha = W(this, ta);
        va && hz(this, va);
        this.la = W(this, Da)
    };
    _.P(FK, Z);
    FK.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n, m, p, r, u, v, x, I;
        return _.fb(function(K) {
            if (1 == K.j) {
                if (!a.P.value.length) return a.o.j(""), Uy(a.F), a.l.j([]), K.return();
                b = !_.G(ow);
                if (b) {
                    ig();
                    var M = kg[1]
                } else M = "";
                c = M;
                b ? (ig(), M = kg[4]) : M = "";
                d = M;
                b ? (ig(), M = kg[6]) : M = "";
                e = M;
                k = null != (h = null == (f = a.K) ? void 0 : f.value) ? h : null !== (null == (g = a.K) ? void 0 : g.value) || a.K.pb() ? null : 1;
                _.G(Qw) && _.G(Pw) && null !== k && (l = (0, D.J)(a.xa.value), ke({
                    timeout: 1 === k ? "1" : "0",
                    sig: String(k),
                    e2e: String(performance.now() - l)
                }, "topics_e2e"));
                a.B.value && (a.L.qc = a.B.value);
                r = {
                    ga: {
                        G: a.G,
                        context: a.context,
                        L: a.L,
                        ya: a.ya,
                        aa: a.aa,
                        Ca: a.Ca,
                        dd: a.dd,
                        isSecureContext: a.isSecureContext
                    },
                    da: {
                        W: a.P.value,
                        N: a.N,
                        Za: a.Za,
                        hd: !1
                    },
                    Qf: {
                        Gb: a.Gb,
                        Fb: a.Fb
                    },
                    mf: {
                        qe: c,
                        cf: d,
                        uf: e
                    },
                    qf: {
                        Oe: null != (m = a.ma.value) ? m : "0"
                    },
                    ke: {
                        Wb: a.Wb,
                        tb: a.tb,
                        ub: a.ub
                    },
                    Wc: {
                        Xc: a.ba.value
                    },
                    Hf: {
                        If: k
                    },
                    Df: {
                        qh: null != (p = null == (n = a.qa) ? void 0 : n.value) ? p : null,
                        sf: a.Y.value,
                        Ee: a.ha.value
                    },
                    tf: {
                        Pe: a.oa.value,
                        Le: a.la.value
                    }
                };
                a.F.j(r);
                u = new cI(r);
                v = Xl(fI(u));
                x = v.url;
                I = v.zd;
                ly(a.rb, (9).toString(), 9, I);
                a.o.j(x);
                a.l.j(r.da.W.slice());
                a.T.j(eI(u) ? Zq("https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : Zq("https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}"));
                return gb(K, a.M.promise, 2)
            }
            if (4 != K.j) {
                if (a.I) return K.return();
                gi("gpt_paw", function(S) {
                    mi(S, a.context);
                    var T;
                    L(S, "sig", null != (T = a.M.H) ? T : -1);
                    L(S, "req", a.Z);
                    L(S, "req_cnt", a.L.D);
                    var Y;
                    L(S, "dm", null != (Y = window.navigator.deviceMemory) ? Y : -1)
                }, _.we(kw));
                a.B.value ? K = gb(K, a.rc.promise, 4) : (K.j = 0, K = void 0);
                return K
            }
            gi("gpt_etu", function(S) {
                mi(S, a.context);
                var T;
                L(S, "sig", null != (T = a.rc.H) ? T : -1);
                L(S, "req", a.Z)
            });
            K.j = 0
        })
    };
    var GK = function(a, b, c, d, e, f) {
        Z.call(this, a, 878);
        this.l = b;
        this.X = c;
        this.N = d;
        this.G = e;
        this.A = fz(this);
        hz(this, f)
    };
    _.P(GK, Z);
    GK.prototype.j = function() {
        for (var a = _.B(this.l), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Qh(b, this.X);
            if (!Ph(b, this.X) && c) {
                a: {
                    var d = c;
                    var e = this.N.R[b.getDomId()],
                        f = 0,
                        g = 0;e = _.B(vh(e));
                    for (var h = e.next(); !h.done; h = e.next())
                        if (h = h.value, Array.isArray(h)) {
                            var k = _.B(h);
                            h = k.next().value;
                            k = k.next().value;
                            if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), Ul(Sh(d, this.G)) || !d.parentElement || Ul(Sh(d.parentElement, this.G))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || g ? [f, g] : null
                }
                g = this.N;f = g.V;g = g.R[b.getDomId()];Tl(c, Yh(b), Ch(f, g), d)
            }
        }
        this.A.notify()
    };
    var HK = function(a, b, c) {
        Z.call(this, a, 1051);
        this.o = b;
        this.l = X(this, c)
    };
    _.P(HK, Z);
    HK.prototype.j = function() {
        var a = this;
        this.l.value && Mf(this.l.value, function(b, c) {
            bh(a.context, b, c);
            var d, e;
            null == (d = a.o) || null == (e = d.error) || e.call(d, c)
        })
    };
    var IK = function(a, b, c, d, e) {
            this.C = a;
            this.l = b;
            this.I = c;
            this.W = d;
            this.aa = e;
            this.D = "";
            this.m = -1;
            this.state = 1;
            this.j = ""
        },
        KK = function(a, b) {
            if (b)
                if (1 !== a.state && 2 !== a.state) JK(a, new my("state err: (" + ([a.state, a.j.length].join() + ")")));
                else {
                    a.j && (b = a.j + b);
                    var c = 0;
                    do {
                        var d = b.indexOf("\n", c);
                        var e = -1 !== d;
                        if (!e) break;
                        var f = a;
                        c = b.substr(c, d - c);
                        if (1 === f.state) f.D = c, ++f.m, f.state = 2;
                        else {
                            try {
                                f.C(f.m, f.D, {
                                    kind: 0,
                                    Ia: av(c)
                                }, f.W, f.aa), f.D = ""
                            } catch (g) {}
                            f.state = 1
                        }
                        c = d + 1
                    } while (e && c < b.length);
                    a.j = b.substr(c)
                }
        },
        JK = function(a, b) {
            a.state = 4;
            try {
                a.l(b)
            } catch (c) {}
        },
        LK = function(a) {
            1 !== a.state || a.j ? JK(a, new my("state err (" + ([a.state, a.j.length].join() + ")"))) : (a.state = 3, a.I(a.m, a.W, a.aa))
        };
    var MK = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 788);
        this.K = b;
        this.M = c;
        this.F = d;
        this.aa = e;
        this.A = fz(this);
        this.B = 0;
        this.o = !1;
        this.l = null != l ? l : new XMLHttpRequest;
        this.T = W(this, f);
        this.Y = W(this, g);
        hz(this, h);
        this.P = W(this, k)
    };
    _.P(MK, Z);
    MK.prototype.j = function() {
        var a = this,
            b = this.Y.value;
        if (b) {
            var c = new IK(this.K, this.M, this.F, this.T.value, this.aa);
            this.l.open("GET", b);
            this.l.withCredentials = this.P.value;
            this.l.onreadystatechange = function() {
                NK(a, c, !1)
            };
            this.l.onload = function() {
                NK(a, c, !0)
            };
            this.l.onerror = function() {
                JK(c, new ny("XHR error"))
            };
            this.l.send()
        }
        this.A.notify()
    };
    var NK = function(a, b, c) {
        try {
            if (3 === a.l.readyState || 4 === a.l.readyState)
                if (300 <= a.l.status) a.o || (JK(b, new ny("xhr_err-" + a.l.status)), a.o = !0);
                else {
                    var d = a.l.responseText.substr(a.B);
                    d && KK(b, d);
                    a.B = a.l.responseText.length;
                    c && 4 === a.l.readyState && LK(b)
                }
        } catch (e) {
            JK(b, e)
        }
    };
    var OK = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 1078);
        this.o = b;
        this.B = c;
        this.l = d;
        this.aa = e;
        this.A = fz(this);
        this.K = W(this, f);
        this.M = W(this, g);
        hz(this, h);
        this.F = W(this, k)
    };
    _.P(OK, Z);
    OK.prototype.j = function() {
        var a = this.M.value;
        a && PK(this, a);
        this.A.notify()
    };
    var PK = function(a, b) {
        var c, d, e, f, g, h, k, l, n, m, p, r, u, v;
        _.fb(function(x) {
            switch (x.j) {
                case 1:
                    return c = new IK(a.o, a.B, a.l, a.K.value, a.aa), e = a.F.value ? "include" : "same-origin", x.D = 2, gb(x, fetch(b, {
                        credentials: e
                    }), 4);
                case 4:
                    d = x.m;
                    ib(x, 3);
                    break;
                case 2:
                    f = jb(x), JK(c, new ny("fetch error: " + (f instanceof Error ? f.message : void 0)));
                case 3:
                    if (!d) return x.return();
                    if (300 <= d.status) return JK(c, new ny("fetch_status-" + d.status)), x.return();
                    h = null == (g = d.body) ? void 0 : g.getReader();
                    if (!h) return x.return();
                    k = new TextDecoder;
                    l = !1;
                case 5:
                    if (l) {
                        x.j = 6;
                        break
                    }
                    p = void 0;
                    x.D = 7;
                    return gb(x, h.read(), 9);
                case 9:
                    r = x.m;
                    p = r.value;
                    l = r.done;
                    ib(x, 8);
                    break;
                case 7:
                    m = u = jb(x), l = !0;
                case 8:
                    n && (v = k.decode(n, {
                        stream: !l
                    }), KK(c, v));
                    n = p;
                    x.j = 5;
                    break;
                case 6:
                    m && JK(c, new ny("fetch read error: " + (m instanceof Error ? m.message : void 0))), LK(c), x.j = 0
            }
        })
    };
    var QK = function(a, b, c, d, e) {
        Z.call(this, a, 918);
        this.N = b;
        this.rb = c;
        this.A = fz(this);
        this.l = W(this, e);
        hz(this, d)
    };
    _.P(QK, Z);
    QK.prototype.j = function() {
        var a = this.l.value;
        a.length && Fo(this.rb, "3", (0, D.J)(z(this.N.R[a[0].getDomId()], 20)));
        this.A.notify()
    };
    var RK = function(a, b) {
        Z.call(this, a, 820);
        this.G = b;
        this.A = V(this)
    };
    _.P(RK, Z);
    RK.prototype.j = function() {
        var a = this,
            b, c, d, e;
        return _.fb(function(f) {
            if (1 == f.j) return gb(f, Ii(a.G), 2);
            b = f.m;
            c = b.qc;
            d = b.status;
            c || gi("gpt_etu", function(g) {
                mi(g, a.context);
                L(g, "rsn", d)
            });
            a.A.j(null != (e = c) ? e : "");
            f.j = 0
        })
    };
    var SK = function(a, b, c, d, e, f) {
        Z.call(this, a, 978);
        this.l = b;
        this.aa = c;
        this.G = d;
        this.localStorage = e;
        this.A = V(this);
        this.o = V(this);
        this.B = X(this, f)
    };
    _.P(SK, Z);
    SK.prototype.j = function() {
        if (_.G(Pw) && this.B.value) {
            _.G(Qw) ? this.o.j(performance.now()) : Uy(this.o);
            var a, b, c, d, e, f;
            (null == (a = this.l) ? 0 : F(a, 8)) || _.G(Aw) && (null == (b = this.l) ? 0 : F(b, 13)) || (null == (c = this.l) ? 0 : F(c, 1)) || 1 === (null == (d = this.l) ? void 0 : ee(d, 6, 2)) || 1 === (null == (e = this.l) ? void 0 : z(e, 5)) || (null == (f = this.l) ? 0 : F(f, 9)) || !F(this.aa, 5) || F(this.aa, 9) ? this.A.j(5) : (a = Si(this.B.value, this.G, _.G(Mw), _.G(Ow), new _.YD(this.context), this.localStorage), Vy(this.A, a))
        } else Uy(this.A), Uy(this.o)
    };
    SK.prototype.m = function() {
        Uy(this.A)
    };
    var UK = function(a, b, c) {
        Z.call(this, a, 804);
        this.l = c;
        this.F = [];
        this.B = {
            Qe: TK(this, function(d) {
                return d.getHeight()
            }),
            Uf: TK(this, function(d) {
                return d.getWidth()
            }),
            We: TK(this, function(d) {
                return !!F(d, 8)
            }),
            Ke: TK(this, function(d) {
                return z(d, 10)
            }),
            Jd: TK(this, function(d) {
                var e;
                return null != (e = d.getEscapedQemQueryId()) ? e : ""
            }),
            re: TK(this, function(d) {
                return Le(d, Vt, 43)
            }),
            Ve: TK(this, function(d) {
                return !!F(d, 9)
            }),
            Nf: TK(this, function(d) {
                return !!F(d, 12)
            }),
            Me: TK(this, function(d) {
                return Sm(d, Lt, 48, fu)
            }),
            He: TK(this, function(d) {
                return Sm(d, Jt, 39, fu)
            }),
            kc: TK(this, function(d) {
                return z(d, 36)
            }),
            Of: TK(this, function(d) {
                return F(d, 13)
            }),
            Ue: TK(this, function(d) {
                return F(d, 3)
            }),
            Jf: TK(this, function(d) {
                return z(d, 49)
            }),
            Rf: TK(this, function(d) {
                return z(d, 29)
            }),
            Sf: TK(this, function(d) {
                return z(d, 30)
            }),
            Re: TK(this, function(d) {
                return Le(d, Yt, 51)
            }),
            rc: TK(this, function(d) {
                return z(d, 61)
            }),
            Ea: V(this),
            ie: TK(this, function(d) {
                return Le(d, au, 58)
            }),
            Vf: TK(this, function(d) {
                var e, f;
                return null != (f = null == (e = Le(d, Xt, 56)) ? void 0 : z(e, 1)) ? f : null
            }),
            Xb: TK(this, function(d) {
                return Uc(d, Dt, 62)
            }),
            df: TK(this, function(d) {
                return Ec(d, 63, Tb)
            })
        };
        this.o = W(this, b)
    };
    _.P(UK, Z);
    var TK = function(a, b) {
        var c = V(a);
        a.F.push({
            A: c,
            Fe: b
        });
        return c
    };
    UK.prototype.j = function() {
        for (var a = _.B(this.F), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = b.Fe;
            Ty(b.A, c(this.o.value))
        }
        if (Sm(this.o.value, du, 41, eu)) throw new my("SecureFrame");
        if (0 === this.l.kind || 1 === this.l.kind && this.l.url) this.B.Ea.j(this.l);
        else {
            a = this.B.Ea;
            b = a.j;
            c = this.o.value;
            var d = Ui(c, eu, 4);
            b.call(a, {
                kind: 0,
                Ia: z(c, d) || ""
            })
        }
    };
    var VK = function(a, b, c) {
        Z.call(this, a, 822);
        this.slotId = b;
        this.l = fz(this);
        this.o = W(this, c)
    };
    _.P(VK, Z);
    VK.prototype.j = function() {
        for (var a = this, b = Vm(this.o.value, 23), c = _.ze(gJ), d = _.B(b), e = d.next(); !e.done; e = d.next()) e = e.value, hJ(c, e), iJ(c, e, this.slotId);
        this.l.notify();
        b.length && gi("gpt_hp", function(f) {
            mi(f, a.context);
            L(f, "ls", b.join())
        }, _.we(Uv))
    };
    var WK = function(a, b, c) {
        Z.call(this, a, 803);
        this.l = b;
        this.slotId = c;
        this.A = V(this);
        this.o = V(this)
    };
    _.P(WK, Z);
    WK.prototype.j = function() {
        var a = JSON.parse(this.l),
            b = cj(a, $q);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.l);
        a = new cu(a.slice());
        var c;
        b = _.B(null != (c = Vm(a, 27)) ? c : []);
        for (c = b.next(); !c.done; c = b.next()) c = c.value, _.ze(Ae).m(c);
        vk(4);
        this.slotId.dispatchEvent(nF, 800, a);
        this.A.j(a);
        var d;
        Ty(this.o, null != (d = Le(a, Ut, 54)) ? d : null)
    };
    var XK = function(a, b, c, d) {
        Z.call(this, a, 823);
        this.slotId = b;
        this.L = c;
        this.l = fz(this);
        this.o = W(this, d)
    };
    _.P(XK, Z);
    XK.prototype.j = function() {
        var a = this;
        F(this.o.value, 11) && (_.zF(this.L, this.slotId), wF(this.L, this.slotId, function() {
            _.AF(a.L, a.slotId)
        }));
        this.l.notify()
    };
    var YK = function(a, b, c, d) {
        Z.call(this, a, 821);
        this.aa = b;
        this.ya = c;
        this.l = fz(this);
        this.o = W(this, d)
    };
    _.P(YK, Z);
    YK.prototype.j = function() {
        if (F(this.aa, 5))
            for (var a = new y.Set, b = _.B(Uc(this.o.value, Wt, 14)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = null != (d = ks(c, 5)) ? d : 1;
                a.has(e) || (yz(this.ya, 2 === e ? "__gpi" : "__gads", c, this.aa), a.add(e))
            }
        this.l.notify()
    };
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var ZK = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        $K = function() {
            for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = ZK[19 == d ? c & 3 | 8 : c]);
            return a.join("")
        };
    var aL = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, v, x, I, K, M, S, T, Y) {
        Z.call(this, a, 973);
        this.oa = b;
        this.l = c;
        this.B = d;
        this.P = e;
        this.N = f;
        this.L = g;
        this.ya = h;
        this.la = k;
        this.M = l;
        this.o = n;
        this.Yb = m;
        this.F = p;
        this.ma = r;
        this.lb = u;
        this.isSecureContext = v;
        this.G = x;
        this.X = I;
        this.K = K;
        this.qa = T;
        this.ba = Y;
        this.T = new _.tg;
        this.ha = X(this, K);
        this.Y = W(this, M);
        this.xa = W(this, S);
        hz(this, p.T)
    };
    _.P(aL, Z);
    aL.prototype.j = function() {
        var a = this,
            b = new mf;
        _.Cm(this, b);
        var c = this.Y.value,
            d = gE(this.N.V);
        if (!_.G(ax)) {
            var e = new LI(this.context, rj(), console, this.K);
            H(b, e)
        }
        H(b, new HK(this.context, console, this.K));
        e = new sK(this.context, this.B, this.L, Le(this.N.V, np, 5), this.X);
        H(b, e);
        var f = new GK(this.context, this.B, this.X, this.N, this.G, e.A);
        H(b, f);
        var g = !!F(this.N.V, 6),
            h = new wK(this.context, this.B, g, this.N, this.l, this.G, c);
        H(b, h);
        var k = new RK(this.context, this.G);
        H(b, k);
        var l = this.F,
            n = l.fa,
            m = l.la,
            p = l.K,
            r = l.U,
            u = l.Z,
            v = l.yb,
            x = l.zb,
            I = l.gb,
            K = l.Bb;
        e = l.Oa;
        var M = l.P,
            S = l.Vb,
            T = l.xa,
            Y = l.M,
            aa = l.eb;
        l = l.o;
        var ia = this.ba;
        ia || (ia || _.we(dw), ia = new xK(this.context, ia, I, K), H(b, ia), ia = ia.A);
        p = new GH(this.context, this.l, this.N.R, this.lb, h.l, n, m, p, r, u, M, T);
        H(b, p);
        H(b, new MH(this.context, n, v, x, p.B, p.F, this.N.R));
        _.G(Pw) ? (v = new SK(this.context, d, c, this.G, this.ha.value, e), H(b, v), r = v.A, u = v.o) : (r = new fp, Uy(r), u = new fp, Uy(u));
        v = window.isSecureContext && _.G(Ww) ? "wbn" : "ldjh";
        var Xa = ++this.L.D;
        m = x = null;
        "wbn" === v && (x = $K().toLowerCase(), m = "googletag.wbn" + Xa);
        M = this.Yb;
        f = new FK(this.context, g, this.L, this.ya, this.N, v, M.Za, M.Gb, M.Fb, this.xa.value, x, m, _.ze($g), c, this.isSecureContext, this.G, ia, k.A, h.l, p.l, r, u, f.A, this.qa, S, n, T, Y, aa, l);
        H(b, f);
        g = new QK(this.context, this.N, _.ze($g), f.o, _.G(Vw) ? f.l : h.l);
        H(b, g);
        d = new yK(this.context, d, c);
        H(b, d);
        k = _.Xg(this.context, 646, function(ta, va, Da, lb, Kb) {
            var Vc = function() {
                return void bL(a, Kb, ta, va, Da, lb)
            };
            ta && _.G(Sv) ? setTimeout(_.Xg(a.context, 646, Vc), 0) : Vc()
        });
        n = _.Xg(this.context, 647, function(ta, va, Da) {
            a.T.resolve();
            var lb = function() {
                return void cL(a, Xa, Da, va, ta)
            };
            _.G(Sv) ? setTimeout(_.Xg(a.context, 646, lb), 0) : lb()
        });
        S = _.Xg(this.context, 289, function(ta) {
            ta = ta instanceof Error ? ta : Error();
            ta.message = ta.message || "strm_err";
            bh(a.context, 289, ta)
        });
        T = _.Xg(this.context, 1042, function(ta) {
            ta = ta instanceof Error ? ta : Error();
            ta.message = ta.message || "Unknown web bundle error.";
            bh(a.context, 1042, ta)
        });
        var za;
        "ldjh" === v ? _.G(Zv) && window.fetch ? za = new OK(this.context, k, S, n, c, _.G(Vw) ? f.l : h.l, f.o, g.A, d.A) : za = new MK(this.context, k, S, n, c, _.G(Vw) ? f.l : h.l, f.o, g.A, d.A) : za = new uK(this.context, k, T, n, v, (0, D.J)(m), (0, D.J)(x), c, this.X, _.G(Vw) ? f.l : h.l, f.o, f.T, g.A, d.A);
        H(b, za);
        d = new DK(this.context, Xa, _.G(Vw) ? f.l : h.l, za.A);
        H(b, d);
        d = new qK(this.context, f.F, f.o);
        H(b, d);
        d = new EK(this.context, this.o.Zd, this.N, d.A);
        H(b, d);
        d = new CK(this.context, this.la, this.G, d.A);
        H(b, d);
        d = new BK(this.context, this.N, this.M, h.l, d.A);
        H(b, d);
        h = new zK(this.context, this.L, this.N, this.X, h.l, d.A);
        H(b, h);
        h = new AK(this.context, ye(this.G), this.G, c, za.A);
        H(b, h);
        _.G(Tv) && 1 === Xa && (c = new pK(this.context, c, e, za.A), H(b, c));
        Af(b)
    };
    var bL = function(a, b, c, d, e, f) {
            var g, h;
            return _.fb(function(k) {
                if (1 == k.j) {
                    g = f[c];
                    if (!g || _.G(Vw) && g.I) return bh(a.context, 646, Error("missing slot")), k.return();
                    0 === c && (h = (0, D.J)(z(a.N.R[g.getDomId()], 20)), Fo(_.ze($g), "4", h));
                    _.G(Uw) ? k = gb(k, a.T.promise, 3) : (k.j = 2, k = void 0);
                    return k
                }
                return 2 != k.j && g.I ? k.return() : gb(k, dL(a, g, d, e, b), 0)
            })
        },
        cL = function(a, b, c, d, e) {
            var f, g, h;
            return _.fb(function(k) {
                switch (k.j) {
                    case 1:
                        var l = a.context,
                            n = e + 1,
                            m = d.length;
                        if (l.Zb) {
                            var p = l.ob;
                            l = Sg(l);
                            var r = new vv;
                            r = _.Jc(r, 3, b, 0);
                            n = _.Jc(r, 1, n, 0);
                            m = _.Jc(n, 2, m, 0);
                            m = Ug(l, 8, Vg, m);
                            Pd(p, m)
                        }
                        f = e + 1;
                    case 2:
                        if (!(f < d.length)) {
                            k.j = 4;
                            break
                        }
                        if (!d[f]) {
                            k.j = 3;
                            break
                        }
                        p = new cu;
                        p = _.A(p, 8, !0);
                        g = be(p);
                        h = '{"empty":' + g + "}";
                        return gb(k, bL(a, c, f, h, {
                            kind: 0,
                            Ia: ""
                        }, d), 3);
                    case 3:
                        ++f;
                        k.j = 2;
                        break;
                    case 4:
                        p = a.L, m = a.P, l = (0, D.J)(p.m.get(m)) - 1, 0 === l ? p.m.delete(m) : p.m.set(m, l), 0 === l && a.o.Nd.dispatchEvent(sF, 965, a.P), k.j = 0
                }
            })
        },
        dL = function(a, b, c, d, e) {
            var f, g, h, k, l, n, m, p, r, u, v, x, I, K, M, S, T, Y, aa, ia, Xa, za, ta;
            return _.fb(function(va) {
                switch (va.j) {
                    case 1:
                        return f = new mf, g = new WK(a.context, c, b), H(f, g), h = new HI(a.context, g.o), H(f, h), k = new YK(a.context, e, a.ya, g.A), H(f, k), l = new VK(a.context, b, g.A), H(f, l), n = new XK(a.context, b, a.L, g.A), H(f, n), m = new UK(a.context, g.A, d), H(f, m), p = [k.l.promise, l.l.promise, n.l.promise], Af(f), gb(va, y.Promise.all(p), 2);
                    case 2:
                        if (b.I) return va.return();
                        r = m;
                        v = u = r.B;
                        x = v.ie;
                        I = v.We;
                        K = v.Jd;
                        return gb(va, x.promise, 3);
                    case 3:
                        return M = va.m, S = !!M, Y = null == (T = M) ? void 0 : Le(T, Uo, 5), gb(va, I.promise, 4);
                    case 4:
                        return aa = va.m, S && gi("gpt_td_init", function(Da) {
                            mi(Da, a.context);
                            var lb, Kb;
                            L(Da, "winner_qid", null != (Kb = null == (lb = Y) ? void 0 : lb.getEscapedQemQueryId()) ? Kb : "");
                            var Vc, ff;
                            L(Da, "xfpQid", null != (ff = null == (Vc = Y) ? void 0 : Ym(Vc, 6)) ? ff : "");
                            L(Da, "noFill", aa ? "1" : "0");
                            L(Da, "publisher_tag", "gpt")
                        }, 1), ia = D, Xa = ia.J, gb(va, K.promise, 5);
                    case 5:
                        za = Xa.call(ia, va.m), ((ta = Zl("google_norender")) || aa && !S) && !_.G(rp) ? Ko(b, a.L, a.N, za) : jK(a.ma, a.oa, a.l, b, aa || ta, S, a.L, a.N, u, h.l, e, a.o.Zd, a.M, a.F), f.Ba(), va.j = 0
                }
            })
        };
    var eL = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, v, x, I, K) {
        Z.call(this, a, 885);
        this.Y = b;
        this.B = c;
        this.N = d;
        this.L = e;
        this.ya = f;
        this.Yb = g;
        this.P = h;
        this.M = k;
        this.l = l;
        this.F = n;
        this.o = m;
        this.T = p;
        this.isSecureContext = r;
        this.K = u;
        this.G = v;
        this.X = x;
        this.ba = W(this, I);
        hz(this, K)
    };
    _.P(eL, Z);
    eL.prototype.j = function() {
        var a = this.ba.value;
        if (a.length) {
            var b = this.L,
                c = this.l,
                d = a.length;
            b.m.has(c);
            b.m.set(c, d);
            a = _.B(a);
            for (b = a.next(); !b.done; b = a.next()) {
                d = b.value;
                b = void 0;
                c = d.lb;
                var e = d.W;
                d = new mf;
                _.Cm(this, d);
                var f = void 0;
                0 >= _.we(dw) && (f = new kK(this.context, this.G), H(d, f));
                var g = Fm(this.context, this.o.Fa),
                    h = g.xb,
                    k = g.Ld;
                _.Cm(d, g.ua);
                h = Am(this.context, this.B, this.L, gE(this.N.V), this.G, h, k);
                g = h.Wa;
                _.Cm(d, h.ua);
                h = new oK(this.context, this.G, g);
                H(d, h);
                h = new lK(this.context, this.G, g);
                H(d, h);
                h = new mK(this.context, _.Og(150), g);
                H(d, h);
                k = new gp(this.context, this.G, g);
                H(d, k);
                var l = new nK(this.context, this.ya, this.K, k.A, g);
                H(d, l);
                c = new aL(this.context, this.Y, this.B, e, this.l, this.N, this.L, this.ya, this.P, this.M, this.F, this.Yb, this.o, this.T, c, this.isSecureContext, this.G, this.X, k.A, g, l.o, h.l, null == (b = f) ? void 0 : b.l);
                H(d, c);
                Af(d)
            }
        } else this.F.Nd.dispatchEvent(sF, 965, this.l)
    };
    var fL = new y.Map,
        gL = function(a, b, c, d) {
            d = void 0 === d ? fL : d;
            Z.call(this, a, 834);
            this.B = b;
            this.W = c;
            this.l = d;
            this.o = V(this);
            this.F = y.Promise.all(this.W.map(this.K, this))
        };
    _.P(gL, Z);
    gL.prototype.j = function() {
        var a = this,
            b;
        return _.fb(function(c) {
            if (1 == c.j) return gb(c, a.F, 2);
            b = c.m;
            a.o.j(b.filter(function(d) {
                return null != d && !d.I
            }));
            c.j = 0
        })
    };
    gL.prototype.K = function(a) {
        var b = this,
            c, d;
        return _.fb(function(e) {
            if (1 == e.j) {
                if (a.I) return e.return(null);
                b.l.has(a) || (b.l.set(a, Wp(a)), _.Jm(a, function() {
                    return void b.l.delete(a)
                }));
                c = (0, D.J)(b.l.get(a));
                return gb(e, c(), 2)
            }
            d = e.m;
            if (b.I) return e.return(null);
            if (d) return e.return(a);
            O(b.B, GG(a.getAdUnitPath()));
            return e.return(null)
        })
    };
    var hL = function(a, b, c, d, e) {
        Z.call(this, a, 847);
        this.L = b;
        this.Ca = c;
        this.o = d;
        this.l = V(this);
        this.B = W(this, e)
    };
    _.P(hL, Z);
    hL.prototype.j = function() {
        var a = this.B.value;
        if (a.length) {
            for (var b = _.B(a), c = b.next(); !c.done; c = b.next()) DF(this.L, c.value);
            this.o ? this.l.j([]) : this.Ca ? (b = Lg(a[0].getAdUnitPath()), a = iL(a, b), this.l.j(a)) : (a = a.map(function(d) {
                return {
                    lb: Lg(d.getAdUnitPath()),
                    W: [d]
                }
            }), this.l.j(a))
        } else this.l.j([])
    };
    var iL = function(a, b) {
        var c = [];
        a = ua(a, function(f) {
            return Lg(f.getAdUnitPath())
        });
        a = _.B(_.w(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.B(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({
                lb: d,
                W: e
            }) : c.push({
                lb: d,
                W: e
            })
        }
        return c
    };
    var jL = function(a, b, c) {
        Z.call(this, a, 845);
        this.R = b;
        this.l = V(this);
        this.o = V(this);
        this.B = W(this, c)
    };
    _.P(jL, Z);
    jL.prototype.j = function() {
        var a = this,
            b = function(d) {
                d = a.R[d.getDomId()];
                return !!vh(d).length || wh(d, xh, 16)
            },
            c = this.B.value;
        this.l.j(c.filter(b));
        this.o.j(c.filter(ar(b)))
    };
    var kL = function(a, b, c, d, e) {
        Z.call(this, a, 864);
        this.L = b;
        this.N = c;
        this.X = d;
        this.l = fz(this);
        this.o = W(this, e)
    };
    _.P(kL, Z);
    kL.prototype.j = function() {
        for (var a = _.B(this.o.value), b = a.next(); !b.done; b = a.next())
            if (b = b.value, _.Ho(this.L, b)) {
                var c = this.N,
                    d = c.V;
                c = c.R[b.getDomId()];
                tm(c, d) && um(b, this.X, c, d);
                DF(this.L, b);
                var e = void 0,
                    f = void 0;
                null != (e = null != (f = F(c, 10)) ? f : F(d, 11)) && e && um(b, this.X, c, d)
            }
        this.l.notify()
    };
    var lL = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r) {
        _.Bv.call(this);
        var u = this;
        this.context = a;
        this.F = b;
        this.C = c;
        this.L = d;
        this.ya = e;
        this.wa = f;
        this.B = g;
        this.o = h;
        this.O = k;
        this.l = l;
        this.isSecureContext = n;
        this.H = m;
        this.X = p;
        this.G = r;
        this.j = new y.Map;
        this.m = new iF(a);
        _.Cm(this, this.m);
        kF(this.m, sF, function(v) {
            v = v.detail;
            var x = u.j.get(v);
            x && (u.j.delete(v), x.Ba())
        })
    };
    _.P(lL, _.Bv);
    var mL = function(a, b, c, d) {
        var e = ++a.L.l;
        a.j.has(e);
        var f = new mf;
        a.j.set(e, f);
        b = new gL(a.context, a.C, b);
        H(f, b);
        var g = new jL(a.context, d.R, b.o);
        H(f, g);
        b = new hL(a.context, a.L, !!F(d.V, 6), Zl("google_nofetch"), g.l);
        H(f, b);
        g = new kL(a.context, a.L, d, document, g.o);
        H(f, g);
        a = new eL(a.context, a.F, a.C, d, a.L, a.ya, c, a.B, a.o, e, {
            Nd: a.m,
            Zd: a.wa
        }, a.l, a.O, a.isSecureContext, a.H, a.G, a.X, b.l, g.l);
        H(f, a);
        Af(f)
    };
    var nL = function(a, b, c, d, e, f, g, h, k) {
        eJ.call(this, a, c, k);
        this.L = d;
        this.H = new y.Set;
        this.O = {};
        this.M = new hK(a, d);
        var l;
        this.Z = new lL(a, b, c, d, new vz(window, _.G(cw)), null != (l = this.l) ? l : this, _.ze(wJ), e, this.M, f, g, h, document, window);
        _.Cm(this, this.Z)
    };
    _.P(nL, eJ);
    nL.prototype.getName = function() {
        return "publisher_ads"
    };
    nL.prototype.display = function(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        e = void 0 === e ? "" : e;
        var f = "";
        if (d)
            if (_.ja(d) && 1 == d.nodeType) {
                var g = d;
                f = g.id
            } else f = d;
        this.enable();
        var h = xk(c, this.context, this.C, a, b, f),
            k = h.slotId;
        h = h.Va;
        if (k && h) {
            g && !f && (g.id = k.getDomId());
            this.slotAdded(k, h);
            h.setClickUrl(e);
            var l;
            cn(this.C, null != (l = g) ? l : k.getDomId(), c)
        } else O(this.C, lj("PubAdsService.display", [a, b, d]))
    };
    var cH = function(a, b, c) {
        var d = void 0 === d ? document : d;
        var e;
        null != (e = c.R[b.getDomId()]) && _.A(e, 19, !0);
        e = {
            id: nu(b.getDomId())
        };
        Ya(d, hg(e));
        Qh(b, d) ? (a.enable(), yF(a.L, b), oL(a, c, b)) : gi("gpt_pb_write", function(f) {
            mi(f, a.context)
        })
    };
    nL.prototype.slotAdded = function(a, b) {
        var c = this;
        F(b, 17) || this.m && yF(this.L, a);
        this.l.dispatchEvent(pF, 724, {
            td: a.getDomId(),
            R: b
        });
        kF(a, Jo, function(d) {
            var e = d.detail;
            d = e.size;
            var f = new UI(a, "publisher_ads");
            e.isEmpty && (f.isEmpty = !0);
            e = a.j.getResponseInformation();
            d && e && (f.size = [d.width, d.height], f.sourceAgnosticCreativeId = e.sourceAgnosticCreativeId, f.sourceAgnosticLineItemId = e.sourceAgnosticLineItemId, f.isBackfill = e.isBackfill, f.creativeId = e.creativeId, f.lineItemId = e.lineItemId, f.creativeTemplateId = e.creativeTemplateId, f.advertiserId = e.advertiserId, f.campaignId = e.campaignId, f.yieldGroupIds = e.yieldGroupIds, f.companyIds = e.companyIds);
            c.l.dispatchEvent("slotRenderEnded", 708, f)
        });
        kF(a, nF, function() {
            return void c.l.dispatchEvent("slotResponseReceived", 709, new $I(a, c.getName()))
        });
        eJ.prototype.slotAdded.call(this, a, b)
    };
    nL.prototype.K = function(a, b) {
        this.enable();
        this.m && yF(this.L, b);
        this.C.info(bG());
        var c = a.V,
            d = a.R,
            e = F(c, 6);
        if (e || !this.L.fb(b)) e && (e = Qh(b)) && b.dispatchEvent(mF, 778, e), F(c, 4) && (d = d[b.getDomId()], tm(d, c) && !this.L.fb(b) && um(b, document, d, c)), oL(this, a, b)
    };
    var oL = function(a, b, c) {
            var d = pL(a, b, c);
            qL(a, d, b, {
                Za: 1
            });
            b = c.getAdUnitPath();
            if (c = a.O[b]) {
                c = _.B(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, qL(a, d.W, d.N, d.Yb);
                delete a.O[b]
            }
        },
        pL = function(a, b, c) {
            var d = b.V;
            b = b.R;
            if (F(d, 4)) return [];
            var e;
            return !F(d, 6) || (null == (e = b[c.getDomId()]) ? 0 : F(e, 17)) ? (a.H.add(c), _.Jm(c, function() {
                return void a.H.delete(c)
            }), [c]) : a.j.filter(function(f) {
                if (a.H.has(f)) return !1;
                a.H.add(f);
                _.Jm(f, function() {
                    return void a.H.delete(f)
                });
                return !0
            })
        },
        qL = function(a, b, c, d) {
            a.C.info(iG());
            if (rL(a, b, d, c) && 1 !== d.Za)
                for (b = _.B(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), a.l.dispatchEvent(qF, 725, {
                    td: d,
                    R: c.R[d]
                })
        },
        rL = function(a, b, c, d) {
            b = b.filter(function(e) {
                if (!_.Ho(a.L, e)) return !1;
                var f = d.R[e.getDomId()];
                5 !== Fl(f) && 4 !== Fl(f) || _.zF(a.L, e);
                return !0
            });
            if (!b.length) return null;
            mL(a.Z, b, c, d);
            return b
        };
    nL.prototype.refresh = function(a, b, c) {
        b = sL(this, b);
        if (!b.length) return !1;
        tL(this, a, b, null != c ? c : {
            Za: 2
        });
        return !0
    };
    var sL = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.I) return !0;
                O(a.C, lG(String(d)));
                return !1
            })
        },
        tL = function(a, b, c, d) {
            var e = c[0],
                f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
            if (a.m) {
                var h = {};
                e = _.B(c);
                for (f = e.next(); !f.done; h = {
                        Nb: h.Nb
                    }, f = e.next()) h.Nb = f.value, a.H.add(h.Nb), _.Jm(h.Nb, function(k) {
                    return function() {
                        return void a.H.delete(k.Nb)
                    }
                }(h));
                qL(a, c, b, d)
            } else c.length && F(b.V, 6) ? (O(a.C, hG(g), e), e = e.getAdUnitPath(), f = null != (h = a.O[e]) ? h : [], f.push({
                W: c,
                N: b,
                Yb: d
            }), a.O[e] = f) : O(a.C, fG(g), e)
        };
    nL.prototype.U = function() {
        var a = this,
            b = $h().j;
        if (F(b, 6))
            for (var c = _.B(this.j), d = c.next(); !d.done; d = c.next()) this.m && yF(this.L, d.value);
        mH(this, b);
        kF(this.l, "rewardedSlotClosed", function(e) {
            var f = e.detail.slot;
            e = _.w(a.j, "find").call(a.j, function(g) {
                return f === g.j
            });
            uL(a, [e], $h().j, $h().m, a.L)
        });
        sj("pubadsReady", !0)
    };
    nL.prototype.destroySlots = function(a) {
        a = eJ.prototype.destroySlots.call(this, a);
        if (a.length && this.m) {
            var b = $h();
            vL(this, a, b.j, b.m)
        }
        return a
    };
    var oH = function(a, b, c, d) {
            if (!a.m) return O(a.C, gG(), d[0]), !1;
            var e = sL(a, d);
            if (!e.length) return O(a.C, lj("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.C.info(jG());
            vL(a, e, b, c);
            return !0
        },
        vL = function(a, b, c, d) {
            for (var e = _.B(b), f = e.next(); !f.done; f = e.next()) vF(a.L, f.value);
            uL(a, b, c, d, a.L)
        };
    nL.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && _.ze(Ae).m(a)
    };
    var uL = function(a, b, c, d, e) {
            var f = void 0 === f ? window : f;
            b = _.B(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                g = g.value;
                iK(a.M, g);
                var h = d[g.getDomId()];
                tm(h, c) && um(g, f.document, h, c);
                DF(e, g)
            }
        },
        nH = function(a, b, c, d) {
            _.A(d, 21, !0);
            _.A(d, 22, String(null != b ? b : ""));
            _.A(d, 23, String(null != c ? c : ""));
            mH(a, d)
        },
        pH = function(a, b) {
            if (!a.m) return null;
            var c, d;
            return {
                vid: null != (c = z(b, 22)) ? c : "",
                cmsid: null != (d = z(b, 23)) ? d : ""
            }
        },
        mH = function(a, b) {
            F(b, 21) && a.m && _.A(b, 29, bv())
        };
    var wL = Q(["https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js"]),
        xL = Q(["https://securepubads.g.doubleclick.net/pagead/js/rum.js"]);
    var eq = "2022120501";
    (function(a, b, c) {
        var d = null != b ? b : {
            Ha: fq(),
            Ya: "",
            ob: new kq(0),
            fe: !0,
            Hd: 1
        };
        try {
            var e = rj();
            (0, D.Yd)(!_.ze(Mg).j);
            _.w(Object, "assign").call(Object, Ng, e._vars_);
            e._vars_ = Ng;
            if (e.evalScripts) e.evalScripts(), gi("gpt_evalscripts", function(aa) {
                L(aa, "vrg", String(fq()));
                L(aa, "pub_url", document.URL)
            }, .01);
            else {
                GE();
                sj("evalScripts", function() {
                    try {
                        zn()
                    } catch (Xa) {
                        bh(d, 297, Xa);
                        var aa, ia;
                        null == (aa = window.console) || null == (ia = aa.error) || ia.call(aa, Xa)
                    }
                });
                try {
                    sz()
                } catch (aa) {
                    bh(d, 408, aa)
                }
                om();
                try {
                    qz(), vk(13), vk(3)
                } catch (aa) {
                    bh(d, 408, aa)
                }
                var f = df(Yw);
                f.length && Dd(f);
                var g = iq(),
                    h = null != b ? b : lq(g),
                    k = null != c ? c : new SI(h);
                Wg(h);
                var l = new uF,
                    n = new mJ(l),
                    m = new tJ(h),
                    p = new MI(h, n, k, l),
                    r = Mu(),
                    u = _.ze(uk);
                if (_.G(mw)) {
                    var v = new iF(h);
                    var x = new iF(h);
                    var I = new iF(h)
                }
                var K = new nL(h, n, k, l, m, p, r, u, v);
                if (_.G(hx)) {
                    var M;
                    new iI(h, null != (M = v) ? M : K, l, n)
                }
                if (_.Og(260)) {
                    var S;
                    NI(p, null != (S = v) ? S : K)
                }
                var T = $h().j;
                Vn(h, k, K, a, T, n, x, I);
                var Y = _.Xg(h, 77, function() {
                    var aa = e.cmd;
                    if (!aa || Array.isArray(aa)) {
                        var ia = new jI(k);
                        e.cmd = ij(h, ia);
                        null != aa && aa.length && ia.push.apply(ia, aa)
                    }
                });
                e.fifWin && "complete" !== document.readyState ? _.db(window, "load", function() {
                    return window.setTimeout(Y, 0)
                }) : Y();
                zn();
                if (_.G(hx) || _.ze($g).j) dq(), Gj(document, _.G(kx) ? C(wL) : C(xL));
                to(h, k);
                Bj(h)
            }
        } catch (aa) {
            bh(d, 106, aa)
        }
    })(window);
}).call(this, {});