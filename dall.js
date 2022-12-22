/* prebid.js v7.17.0 */ ! function() {
    var e, n = {
            35706: function(e, n, t) {
                t.d(n, {
                    Pd: function() {
                        return s
                    },
                    Th: function() {
                        return c
                    },
                    _U: function() {
                        return d
                    }
                });
                var r = t(55730),
                    i = t(64358),
                    o = t(20265),
                    a = t(34614),
                    u = "outstream";

                function c(e) {
                    var n = this,
                        t = e.url,
                        o = e.config,
                        a = e.id,
                        c = e.callback,
                        s = e.loaded,
                        d = e.adUnitCode,
                        l = e.renderNow;
                    this.url = t, this.config = o, this.handlers = {}, this.id = a, this.loaded = s, this.cmd = [], this.push = function(e) {
                        "function" == typeof e ? n.loaded ? e.call() : n.cmd.push(e) : (0, i.logError)("Commands given to Renderer.push must be wrapped in a function")
                    }, this.callback = c || function() {
                        n.loaded = !0, n.process()
                    }, this.render = function() {
                        var e = this,
                            n = arguments,
                            o = function() {
                                e._render ? e._render.apply(e, n) : (0, i.logWarn)("No render function was provided, please use .setRender on the renderer")
                            };
                        f(d) ? ((0, i.logWarn)("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(d)), o()) : l ? o() : (this.cmd.unshift(o), (0, r.B)(t, u, this.callback, this.documentContext))
                    }.bind(this)
                }

                function s(e) {
                    return !(!e || !e.url)
                }

                function d(e, n, t) {
                    var r = null;
                    e.config && e.config.documentResolver && (r = e.config.documentResolver(n, document, t)), r || (r = document), e.documentContext = r, e.render(n, e.documentContext)
                }

                function f(e) {
                    var n = epbjs.adUnits,
                        t = (0, a.sE)(n, (function(n) {
                            return n.code === e
                        }));
                    if (!t) return !1;
                    var r = (0, o.Z)(t, "renderer"),
                        i = !!(r && r.url && r.render),
                        u = (0, o.Z)(t, "mediaTypes.video.renderer"),
                        c = !!(u && u.url && u.render);
                    return !!(i && !0 !== r.backupOnly || c && !0 !== u.backupOnly)
                }
                c.install = function(e) {
                    return new c({
                        url: e.url,
                        config: e.config,
                        id: e.id,
                        callback: e.callback,
                        loaded: e.loaded,
                        adUnitCode: e.adUnitCode,
                        renderNow: e.renderNow
                    })
                }, c.prototype.getConfig = function() {
                    return this.config
                }, c.prototype.setRender = function(e) {
                    this._render = e
                }, c.prototype.setEventHandlers = function(e) {
                    this.handlers = e
                }, c.prototype.handleVideoEvent = function(e) {
                    var n = e.id,
                        t = e.eventName;
                    "function" == typeof this.handlers[t] && this.handlers[t](), (0, i.logMessage)("Prebid Renderer event for id ".concat(n, " type ").concat(t))
                }, c.prototype.process = function() {
                    for (; this.cmd.length > 0;) try {
                        this.cmd.shift().call()
                    } catch (e) {
                        (0, i.logError)("Error processing Renderer command: ", e)
                    }
                }
            },
            875: function(e, n, t) {
                t.d(n, {
                    f: function() {
                        return a
                    }
                });
                var r = t(20265),
                    i = {};

                function o(e, n, t) {
                    var r = function(e, n) {
                        var t = i[e] = i[e] || {
                            bidders: {}
                        };
                        return n ? t.bidders[n] = t.bidders[n] || {} : t
                    }(e, t);
                    return r[n] = (r[n] || 0) + 1, r[n]
                }
                var a = {
                    incrementRequestsCounter: function(e) {
                        return o(e, "requestsCounter")
                    },
                    incrementBidderRequestsCounter: function(e, n) {
                        return o(e, "requestsCounter", n)
                    },
                    incrementBidderWinsCounter: function(e, n) {
                        return o(e, "winsCounter", n)
                    },
                    getRequestsCounter: function(e) {
                        return (0, r.Z)(i, "".concat(e, ".requestsCounter")) || 0
                    },
                    getBidderRequestsCounter: function(e, n) {
                        return (0, r.Z)(i, "".concat(e, ".bidders.").concat(n, ".requestsCounter")) || 0
                    },
                    getBidderWinsCounter: function(e, n) {
                        return (0, r.Z)(i, "".concat(e, ".bidders.").concat(n, ".winsCounter")) || 0
                    }
                }
            },
            48525: function(e, n, t) {
                function r(e) {
                    var n = e;
                    return {
                        callBids: function() {},
                        setBidderCode: function(e) {
                            n = e
                        },
                        getBidderCode: function() {
                            return n
                        }
                    }
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            9528: function(e, n, t) {
                t.d(n, {
                    qJ: function() {
                        return W
                    },
                    VP: function() {
                        return ee
                    },
                    ZP: function() {
                        return oe
                    },
                    JO: function() {
                        return Q
                    },
                    rp: function() {
                        return X
                    },
                    uV: function() {
                        return te
                    },
                    Ct: function() {
                        return re
                    },
                    nX: function() {
                        return $
                    }
                });
                var r = t(93324),
                    i = t(4942),
                    o = t(64358),
                    a = t(20265),
                    u = t(74247),
                    c = t(70059),
                    s = t(14699),
                    d = t(48928),
                    f = t(3193),
                    l = t(92797),
                    g = t(34614),
                    p = t(875),
                    v = t(25102),
                    h = t(60136),
                    m = t(82963),
                    b = t(61120),
                    y = t(15671),
                    E = t(43144),
                    w = t(18916),
                    C = t(42793),
                    A = t(68792);

                function T(e) {
                    var n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var t, r = (0, b.Z)(e);
                        if (n) {
                            var i = (0, b.Z)(this).constructor;
                            t = Reflect.construct(r, arguments, i)
                        } else t = r.apply(this, arguments);
                        return (0, m.Z)(this, t)
                    }
                }

                function I(e, n, t) {
                    O(e, n), n.set(e, t)
                }

                function O(e, n) {
                    if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }

                function S(e, n, t) {
                    if (!n.has(e)) throw new TypeError("attempted to get private field on non-instance");
                    return t
                }
                var B = new WeakMap,
                    k = new WeakMap,
                    j = new WeakMap,
                    U = new WeakMap,
                    _ = new WeakSet,
                    R = function() {
                        function e() {
                            var n, t;
                            (0, y.Z)(this, e), O(n = this, t = _), t.add(n), I(this, B, {
                                writable: !0,
                                value: void 0
                            }), I(this, k, {
                                writable: !0,
                                value: void 0
                            }), I(this, j, {
                                writable: !0,
                                value: void 0
                            }), I(this, U, {
                                writable: !0,
                                value: void 0
                            }), (0, i.Z)(this, "generatedTime", void 0), this.reset()
                        }
                        return (0, E.Z)(e, [{
                            key: "reset",
                            value: function() {
                                (0, C.Z)(this, j, (0, A.P)()), (0, C.Z)(this, B, !1), (0, C.Z)(this, k, null), (0, C.Z)(this, U, !1), this.generatedTime = null
                            }
                        }, {
                            key: "enable",
                            value: function() {
                                (0, C.Z)(this, B, !0)
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return (0, w.Z)(this, B)
                            }
                        }, {
                            key: "ready",
                            get: function() {
                                return (0, w.Z)(this, U)
                            }
                        }, {
                            key: "promise",
                            get: function() {
                                return (0, w.Z)(this, U) ? A.Z.resolve((0, w.Z)(this, k)) : ((0, w.Z)(this, B) || S(this, _, P).call(this, null), (0, w.Z)(this, j).promise)
                            }
                        }, {
                            key: "setConsentData",
                            value: function(e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, o.timestamp)();
                                this.generatedTime = n, S(this, _, P).call(this, e)
                            }
                        }, {
                            key: "getConsentData",
                            value: function() {
                                return (0, w.Z)(this, k)
                            }
                        }]), e
                    }();

                function P(e) {
                    (0, C.Z)(this, U, !0), (0, C.Z)(this, k, e), (0, w.Z)(this, j).resolve(e)
                }
                var q = function(e) {
                        (0, h.Z)(t, e);
                        var n = T(t);

                        function t() {
                            return (0, y.Z)(this, t), n.apply(this, arguments)
                        }
                        return (0, E.Z)(t, [{
                            key: "getConsentMeta",
                            value: function() {
                                var e = this.getConsentData();
                                if (e && this.generatedTime) return {
                                    usp: e,
                                    generatedAt: this.generatedTime
                                }
                            }
                        }]), t
                    }(R),
                    D = function(e) {
                        (0, h.Z)(t, e);
                        var n = T(t);

                        function t() {
                            return (0, y.Z)(this, t), n.apply(this, arguments)
                        }
                        return (0, E.Z)(t, [{
                            key: "getConsentMeta",
                            value: function() {
                                var e = this.getConsentData();
                                if (e && e.vendorData && this.generatedTime) return {
                                    gdprApplies: e.gdprApplies,
                                    consentStringSize: (0, o.isStr)(e.vendorData.tcString) ? e.vendorData.tcString.length : 0,
                                    generatedAt: this.generatedTime,
                                    apiVersion: e.apiVersion
                                }
                            }
                        }]), t
                    }(R),
                    Z = t(52021),
                    x = t(5644),
                    N = t(99128);

                function M(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        }))), t.push.apply(t, r)
                    }
                    return t
                }

                function F(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? M(Object(t), !0).forEach((function(n) {
                            (0, i.Z)(e, n, t[n])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach((function(n) {
                            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                        }))
                    }
                    return e
                }
                var W = {
                        CLIENT: "client",
                        SERVER: "server"
                    },
                    z = {},
                    K = z.bidderRegistry = {},
                    L = z.aliasRegistry = {},
                    H = [];
                f.vc.getConfig("s2sConfig", (function(e) {
                    e && e.s2sConfig && (H = (0, o.isArray)(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig])
                }));
                var G = {};
                var V = (0, l.z3)("sync", (function(e) {
                    var n = e.bidderCode,
                        t = e.auctionId,
                        r = e.bidderRequestId,
                        i = e.adUnits,
                        u = e.src,
                        c = e.metrics;
                    return i.reduce((function(e, i) {
                        return e.push(i.bids.filter((function(e) {
                            return e.bidder === n
                        })).reduce((function(e, n) {
                            var s = null == (n = Object.assign({}, n, (0, o.getDefinedParams)(i, ["nativeParams", "nativeOrtbRequest", "ortb2Imp", "mediaType", "renderer"]))).mediaTypes ? i.mediaTypes : n.mediaTypes;
                            return (0, o.isValidMediaTypes)(s) ? n = Object.assign({}, n, {
                                mediaTypes: s
                            }) : (0, o.logError)("mediaTypes is not correctly configured for adunit ".concat(i.code)), e.push(Object.assign({}, n, {
                                adUnitCode: i.code,
                                transactionId: i.transactionId,
                                sizes: (0, a.Z)(s, "banner.sizes") || (0, a.Z)(s, "video.playerSize") || [],
                                bidId: n.bid_id || (0, o.getUniqueIdentifierStr)(),
                                bidderRequestId: r,
                                auctionId: t,
                                src: u,
                                metrics: c,
                                bidRequestsCount: p.f.getRequestsCounter(i.code),
                                bidderRequestsCount: p.f.getBidderRequestsCounter(i.code, n.bidder),
                                bidderWinsCount: p.f.getBidderWinsCounter(i.code, n.bidder)
                            })), e
                        }), [])), e
                    }), []).reduce(o.flatten, []).filter((function(e) {
                        return "" !== e
                    }))
                }), "getBids");
                var Q = (0, l.z3)("sync", (function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = t.getS2SBidders,
                        i = void 0 === r ? te : r;
                    if (null == n) return e;
                    var o = i(n);
                    return e.filter((function(e) {
                        return o.has(e.bidder)
                    }))
                }), "filterBidsForAdUnit");

                function J(e, n) {
                    var t = (0, o.deepClone)(e);
                    return t.forEach((function(e) {
                        e.bids = Q(e.bids, n).map((function(e) {
                            return e.bid_id = (0, o.getUniqueIdentifierStr)(), e
                        }))
                    })), t = t.filter((function(e) {
                        return 0 !== e.bids.length
                    }))
                }

                function Y(e) {
                    var n = (0, o.deepClone)(e);
                    return n.forEach((function(e) {
                        e.bids = Q(e.bids, null)
                    })), n = n.filter((function(e) {
                        return 0 !== e.bids.length
                    }))
                }
                var X = new D,
                    $ = new q,
                    ee = {
                        getCoppa: function() {
                            return !!f.vc.getConfig("coppa")
                        }
                    },
                    ne = (0, l.z3)("sync", (function(e, n) {
                        return (0, u.UB)(e, n)
                    }), "setupAdUnitMediaTypes");

                function te(e) {
                    (0, o.isArray)(e) || (e = [e]);
                    var n = new Set([null]);
                    return e.filter((function(e) {
                        return e && e.enabled
                    })).flatMap((function(e) {
                        return e.bidders
                    })).forEach((function(e) {
                        return n.add(e)
                    })), n
                }
                var re = (0, l.z3)("sync", (function(e, n) {
                    var t, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        a = r.getS2SBidders,
                        u = void 0 === a ? te : a,
                        c = u(n);
                    return (0, o.getBidderCodes)(e).reduce((function(e, n) {
                        return e[c.has(n) ? W.SERVER : W.CLIENT].push(n), e
                    }), (t = {}, (0, i.Z)(t, W.CLIENT, []), (0, i.Z)(t, W.SERVER, []), t))
                }), "partitionBidders");

                function ie(e, n, t) {
                    try {
                        var r = K[e].getSpec();
                        r && r[n] && "function" == typeof r[n] && ((0, o.logInfo)("Invoking ".concat(e, ".").concat(n)), f.vc.runWithBidder(e, o.bind.call(r[n], r, t)))
                    } catch (t) {
                        (0, o.logWarn)("Error calling ".concat(n, " of ").concat(e))
                    }
                }
                z.makeBidRequests = (0, l.z3)("sync", (function(e, n, t, r, i) {
                    var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                        u = arguments.length > 6 ? arguments[6] : void 0;
                    u = (0, N.Bf)(u), Z.j8(x.FP.BEFORE_REQUEST_BIDS, e), (0, c.Fb)(e), e = ne(e, i);
                    var s = re(e, H),
                        d = s[W.CLIENT],
                        l = s[W.SERVER];
                    f.vc.getConfig("bidderSequence") === f.FD && (d = (0, o.shuffle)(d));
                    var p = (0, v.nH)(),
                        h = [],
                        m = a.global || {},
                        b = a.bidder || {};

                    function y(e) {
                        var n = Object.freeze((0, o.mergeDeep)({}, m, b[e.bidderCode]));
                        return e.ortb2 = n, e.bids.forEach((function(e) {
                            return e.ortb2 = n
                        })), e
                    }
                    H.forEach((function(r) {
                        if (r && r.enabled) {
                            var i = J(e, r),
                                a = (0, o.generateUUID)();
                            l.forEach((function(e) {
                                var c = (0, o.getUniqueIdentifierStr)(),
                                    s = u.fork(),
                                    d = y({
                                        bidderCode: e,
                                        auctionId: t,
                                        bidderRequestId: c,
                                        uniquePbsTid: a,
                                        bids: V({
                                            bidderCode: e,
                                            auctionId: t,
                                            bidderRequestId: c,
                                            adUnits: (0, o.deepClone)(i),
                                            src: x.os.YZ,
                                            metrics: s
                                        }),
                                        auctionStart: n,
                                        timeout: r.timeout,
                                        src: x.os.YZ,
                                        refererInfo: p,
                                        metrics: s
                                    });
                                0 !== d.bids.length && h.push(d)
                            })), i.forEach((function(e) {
                                var n = e.bids.filter((function(e) {
                                    return (0, g.sE)(h, (function(n) {
                                        return (0, g.sE)(n.bids, (function(n) {
                                            return n.bidId === e.bid_id
                                        }))
                                    }))
                                }));
                                e.bids = n
                            })), h.forEach((function(e) {
                                void 0 === e.adUnitsS2SCopy && (e.adUnitsS2SCopy = i.filter((function(e) {
                                    return e.bids.length > 0
                                })))
                            }))
                        }
                    }));
                    var E = Y(e);
                    return d.forEach((function(e) {
                        var a = (0, o.getUniqueIdentifierStr)(),
                            c = u.fork(),
                            s = y({
                                bidderCode: e,
                                auctionId: t,
                                bidderRequestId: a,
                                bids: V({
                                    bidderCode: e,
                                    auctionId: t,
                                    bidderRequestId: a,
                                    adUnits: (0, o.deepClone)(E),
                                    labels: i,
                                    src: "client",
                                    metrics: c
                                }),
                                auctionStart: n,
                                timeout: r,
                                refererInfo: p,
                                metrics: c
                            }),
                            d = K[e];
                        d || (0, o.logError)("Trying to make a request for bidder that does not exist: ".concat(e)), d && s.bids && 0 !== s.bids.length && h.push(s)
                    })), X.getConsentData() && h.forEach((function(e) {
                        e.gdprConsent = X.getConsentData()
                    })), $.getConsentData() && h.forEach((function(e) {
                        e.uspConsent = $.getConsentData()
                    })), h.forEach((function(e) {
                        f.vc.runWithBidder(e.bidderCode, (function() {
                            var n = f.vc.getConfig("fledgeEnabled");
                            e.fledgeEnabled = navigator.runAdAuction && n
                        }))
                    })), h
                }), "makeBidRequests"), z.callBids = function(e, n, t, i, a, u, c) {
                    var s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : {};
                    if (n.length) {
                        var l = n.reduce((function(e, n) {
                                return e[Number(void 0 !== n.src && n.src === x.os.YZ)].push(n), e
                            }), [
                                [],
                                []
                            ]),
                            g = (0, r.Z)(l, 2),
                            p = g[0],
                            v = g[1],
                            h = [];
                        v.forEach((function(e) {
                            for (var n = -1, t = 0; t < h.length; ++t)
                                if (e.uniquePbsTid === h[t].uniquePbsTid) {
                                    n = t;
                                    break
                                }
                            n <= -1 && h.push(e)
                        }));
                        var m = 0,
                            b = (0, o.generateUUID)();
                        H.forEach((function(e) {
                            if (e && h[m] && te(e).has(h[m].bidderCode)) {
                                var n = (0, d.O)(u, a ? {
                                        request: a.request.bind(null, "s2s"),
                                        done: a.done
                                    } : void 0),
                                    r = e.bidders,
                                    c = K[e.adapter],
                                    f = h[m].uniquePbsTid,
                                    l = h[m].adUnitsS2SCopy,
                                    g = v.filter((function(e) {
                                        return e.uniquePbsTid === f
                                    }));
                                if (c) {
                                    var p = {
                                        tid: b,
                                        ad_units: l,
                                        s2sConfig: e,
                                        ortb2Fragments: s
                                    };
                                    if (p.ad_units.length) {
                                        var y = g.map((function(e) {
                                                return e.start = (0, o.timestamp)(), i.bind(e)
                                            })),
                                            E = (0, o.getBidderCodes)(p.ad_units).filter((function(e) {
                                                return r.includes(e)
                                            }));
                                        (0, o.logMessage)("CALLING S2S HEADER BIDDERS ==== ".concat(E.length > 0 ? E.join(", ") : 'No bidder specified, using "ortb2Imp" definition(s) only')), g.forEach((function(e) {
                                            Z.j8(x.FP.BID_REQUESTED, F(F({}, e), {}, {
                                                tid: b
                                            }))
                                        })), c.callBids(p, v, t, (function() {
                                            return y.forEach((function(e) {
                                                return e()
                                            }))
                                        }), n)
                                    }
                                } else(0, o.logError)("missing " + e.adapter);
                                m++
                            }
                        })), p.forEach((function(e) {
                            e.start = (0, o.timestamp)();
                            var n = K[e.bidderCode];
                            f.vc.runWithBidder(e.bidderCode, (function() {
                                (0, o.logMessage)("CALLING BIDDER"), Z.j8(x.FP.BID_REQUESTED, e)
                            }));
                            var r = (0, d.O)(u, a ? {
                                    request: a.request.bind(null, e.bidderCode),
                                    done: a.done
                                } : void 0),
                                s = i.bind(e);
                            try {
                                f.vc.runWithBidder(e.bidderCode, o.bind.call(n.callBids, n, e, t, s, r, c, f.vc.callbackWithBidder(e.bidderCode)))
                            } catch (n) {
                                (0, o.logError)("".concat(e.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
                                    e: n,
                                    bidRequest: e
                                }), s()
                            }
                        }))
                    } else(0, o.logWarn)("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
                }, z.videoAdapters = [], z.registerBidAdapter = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = t.supportedMediaTypes,
                        i = void 0 === r ? [] : r;
                    e && n ? "function" == typeof e.callBids ? (K[n] = e, (0, g.q9)(i, "video") && z.videoAdapters.push(n), (0, g.q9)(i, "native") && c.Sg.push(n)) : (0, o.logError)("Bidder adaptor error for bidder code: " + n + "bidder must implement a callBids() function") : (0, o.logError)("bidAdapter or bidderCode not specified")
                }, z.aliasBidAdapter = function(e, n, t) {
                    if (void 0 === K[n]) {
                        var r = K[e];
                        if (void 0 === r) {
                            var i = [];
                            H.forEach((function(t) {
                                if (t.bidders && t.bidders.length) {
                                    var r = t && t.bidders;
                                    t && (0, g.q9)(r, n) ? L[n] = e : i.push(e)
                                }
                            })), i.forEach((function(e) {
                                (0, o.logError)('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                            }))
                        } else try {
                            var a, u = function(e) {
                                var n = [];
                                return (0, g.q9)(z.videoAdapters, e) && n.push("video"), (0, g.q9)(c.Sg, e) && n.push("native"), n
                            }(e);
                            if (r.constructor.prototype != Object.prototype)(a = new r.constructor).setBidderCode(n);
                            else {
                                var d = r.getSpec(),
                                    f = t && t.gvlid,
                                    l = t && t.skipPbsAliasing;
                                a = (0, s.PZ)(Object.assign({}, d, {
                                    code: n,
                                    gvlid: f,
                                    skipPbsAliasing: l
                                })), L[n] = e
                            }
                            z.registerBidAdapter(a, n, {
                                supportedMediaTypes: u
                            })
                        } catch (n) {
                            (0, o.logError)(e + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                        }
                    } else(0, o.logMessage)('alias name "' + n + '" has been already specified.')
                }, z.registerAnalyticsAdapter = function(e) {
                    var n = e.adapter,
                        t = e.code,
                        r = e.gvlid;
                    n && t ? "function" == typeof n.enableAnalytics ? (n.code = t, G[t] = {
                        adapter: n,
                        gvlid: r
                    }) : (0, o.logError)('Prebid Error: Analytics adaptor error for analytics "'.concat(t, '"\n        analytics adapter must implement an enableAnalytics() function')) : (0, o.logError)("Prebid Error: analyticsAdapter or analyticsCode not specified")
                }, z.enableAnalytics = function(e) {
                    (0, o.isArray)(e) || (e = [e]), (0, o._each)(e, (function(e) {
                        var n = G[e.provider];
                        n && n.adapter ? n.adapter.enableAnalytics(e) : (0, o.logError)("Prebid Error: no analytics adapter found in registry for '".concat(e.provider, "'."))
                    }))
                }, z.getBidAdapter = function(e) {
                    return K[e]
                }, z.getAnalyticsAdapter = function(e) {
                    return G[e]
                }, z.callTimedOutBidders = function(e, n, t) {
                    n = n.map((function(n) {
                        return n.params = (0, o.getUserConfiguredParams)(e, n.adUnitCode, n.bidder), n.timeout = t, n
                    })), n = (0, o.groupBy)(n, "bidder"), Object.keys(n).forEach((function(e) {
                        ie(e, "onTimeout", n[e])
                    }))
                }, z.callBidWonBidder = function(e, n, t) {
                    n.params = (0, o.getUserConfiguredParams)(t, n.adUnitCode, n.bidder), p.f.incrementBidderWinsCounter(n.adUnitCode, n.bidder), ie(e, "onBidWon", n)
                }, z.callSetTargetingBidder = function(e, n) {
                    ie(e, "onSetTargeting", n)
                }, z.callBidViewableBidder = function(e, n) {
                    ie(e, "onBidViewable", n)
                }, z.callBidderError = function(e, n, t) {
                    ie(e, "onBidderError", {
                        error: n,
                        bidderRequest: t
                    })
                };
                var oe = z
            },
            14699: function(e, n, t) {
                t.d(n, {
                    JY: function() {
                        return R
                    },
                    Ks: function() {
                        return k
                    },
                    PZ: function() {
                        return S
                    },
                    Q1: function() {
                        return U
                    },
                    dX: function() {
                        return O
                    }
                });
                var r = t(93324),
                    i = t(71002),
                    o = t(48525),
                    a = t(9528),
                    u = t(3193),
                    c = t(69626),
                    s = t(11974),
                    d = t(70059),
                    f = t(90154),
                    l = t(5644),
                    g = t(52021),
                    p = t(34614),
                    v = t(48928),
                    h = t(64358),
                    m = t(20265),
                    b = t(24679),
                    y = t(92797),
                    E = t(15164),
                    w = t(78653),
                    C = t(55975),
                    A = t(99128),
                    T = (0, E.eA)("bidderFactory"),
                    I = ["cpm", "ttl", "creativeId", "netRevenue", "currency"];

                function O(e) {
                    var n = Array.isArray(e.supportedMediaTypes) ? {
                        supportedMediaTypes: e.supportedMediaTypes
                    } : void 0;

                    function t(e) {
                        var t = S(e);
                        a.ZP.registerBidAdapter(t, e.code, n)
                    }
                    t(e), Array.isArray(e.aliases) && e.aliases.forEach((function(n) {
                        var r, i, o = n;
                        (0, h.isPlainObject)(n) && (o = n.code, r = n.gvlid, i = n.skipPbsAliasing), a.ZP.aliasRegistry[o] = e.code, t(Object.assign({}, e, {
                            code: o,
                            gvlid: r,
                            skipPbsAliasing: i
                        }))
                    }))
                }

                function S(e) {
                    return Object.assign(new o.Z(e.code), {
                        getSpec: function() {
                            return Object.freeze(e)
                        },
                        registerSyncs: n,
                        callBids: function(r, i, o, s, d, f) {
                            if (Array.isArray(r.bids)) {
                                var p = {},
                                    v = [],
                                    m = P(r).measureTime("validate", (function() {
                                        return r.bids.filter(t)
                                    }));
                                if (0 !== m.length) {
                                    var b = {};
                                    m.forEach((function(e) {
                                        b[e.bidId] = e, e.adUnitCode || (e.adUnitCode = e.placementCode)
                                    })), B(e, m, r, s, f, {
                                        onRequest: function(e) {
                                            return g.j8(l.FP.BEFORE_BIDDER_HTTP, r, e)
                                        },
                                        onResponse: function(n) {
                                            d(e.code), v.push(n)
                                        },
                                        onFledgeAuctionConfigs: function(e) {
                                            e.forEach((function(e) {
                                                var n = b[e.bidId];
                                                n && j(n, e)
                                            }))
                                        },
                                        onError: function(n, t) {
                                            d(e.code), a.ZP.callBidderError(e.code, t, r), g.j8(l.FP.BIDDER_ERROR, {
                                                error: t,
                                                bidderRequest: r
                                            }), (0, h.logError)("Server call for ".concat(e.code, " failed: ").concat(n, " ").concat(t.status, ". Continuing without bids."))
                                        },
                                        onBid: function(n) {
                                            var t = b[n.requestId];
                                            if (t) {
                                                if (n.adapterCode = t.bidder, function(e, n) {
                                                        var t = C.S.get(n, "allowAlternateBidderCodes") || !1,
                                                            r = C.S.get(n, "allowedAlternateBidderCodes");
                                                        if (e && n && n !== e && (r = (0, h.isArray)(r) ? r.map((function(e) {
                                                                return e.trim().toLowerCase()
                                                            })).filter((function(e) {
                                                                return !!e
                                                            })).filter(h.uniques) : r, !t || (0, h.isArray)(r) && "*" !== r[0] && !r.includes(e))) return !0;
                                                        return !1
                                                    }(n.bidderCode, t.bidder)) return void(0, h.logWarn)("".concat(n.bidderCode, " is not a registered partner or known bidder of ").concat(t.bidder, ", hence continuing without bid. If you wish to support this bidder, please mark allowAlternateBidderCodes as true in bidderSettings."));
                                                n.originalCpm = n.cpm, n.originalCurrency = n.currency, n.meta = n.meta || Object.assign({}, n[t.bidder]);
                                                var r = Object.assign((0, c.m)(l.Q_.GOOD, t), n);
                                                ! function(e, n) {
                                                    var t = (0, A.Bf)(n.metrics);
                                                    t.checkpoint("addBidResponse"), p[e] = !0, t.measureTime("addBidResponse.validate", (function() {
                                                        return R(e, n)
                                                    })) && i(e, n)
                                                }(t.adUnitCode, r)
                                            } else(0, h.logWarn)("Bidder ".concat(e.code, " made bid for unknown request ID: ").concat(n.requestId, ". Ignoring."))
                                        },
                                        onCompletion: y
                                    })
                                } else y()
                            }

                            function y() {
                                o(), u.vc.runWithBidder(e.code, (function() {
                                    g.j8(l.FP.BIDDER_DONE, r), n(v, r.gdprConsent, r.uspConsent)
                                }))
                            }
                        }
                    });

                    function n(n, t, r) {
                        k(e, n, t, r)
                    }

                    function t(n) {
                        return !!e.isBidRequestValid(n) || ((0, h.logWarn)("Invalid bid sent to bidder ".concat(e.code, ": ").concat(JSON.stringify(n))), !1)
                    }
                }
                var B = (0, y.z3)("sync", (function(e, n, t, r, o, a) {
                        var u = a.onRequest,
                            c = a.onResponse,
                            s = a.onFledgeAuctionConfigs,
                            d = a.onError,
                            f = a.onBid,
                            l = a.onCompletion,
                            g = P(t);
                        l = g.startTiming("total").stopBefore(l);
                        var p = g.measureTime("buildRequests", (function() {
                            return e.buildRequests(n, t)
                        }));
                        if (p && 0 !== p.length) {
                            Array.isArray(p) || (p = [p]);
                            var v = (0, h.delayExecution)(l, p.length);
                            p.forEach((function(n) {
                                var t = g.fork();

                                function a(e) {
                                    null != e && (e.metrics = t.fork().renameWith()), f(e)
                                }
                                var l = o((function(r, i) {
                                        m();
                                        try {
                                            r = JSON.parse(r)
                                        } catch (e) {}
                                        r = {
                                            body: r,
                                            headers: {
                                                get: i.getResponseHeader.bind(i)
                                            }
                                        }, c(r);
                                        try {
                                            r = t.measureTime("interpretResponse", (function() {
                                                return e.interpretResponse(r, n)
                                            }))
                                        } catch (n) {
                                            return (0, h.logError)("Bidder ".concat(e.code, " failed to interpret the server's response. Continuing without bids"), null, n), void v()
                                        }
                                        var o;
                                        r && (0, h.isArray)(r.fledgeAuctionConfigs) ? (s(r.fledgeAuctionConfigs), o = r.bids) : o = r, o && ((0, h.isArray)(o) ? o.forEach(a) : a(o)), v()
                                    })),
                                    p = o((function(e, n) {
                                        m(), d(e, n), v()
                                    }));
                                u(n);
                                var m = t.startTiming("net");
                                switch (n.method) {
                                    case "GET":
                                        r("".concat(n.url).concat(function(e) {
                                            if (e) return "?".concat("object" === (0, i.Z)(e) ? (0, h.parseQueryStringParameters)(e) : e);
                                            return ""
                                        }(n.data)), {
                                            success: l,
                                            error: p
                                        }, void 0, Object.assign({
                                            method: "GET",
                                            withCredentials: !0
                                        }, n.options));
                                        break;
                                    case "POST":
                                        r(n.url, {
                                            success: l,
                                            error: p
                                        }, "string" == typeof n.data ? n.data : JSON.stringify(n.data), Object.assign({
                                            method: "POST",
                                            contentType: "text/plain",
                                            withCredentials: !0
                                        }, n.options));
                                        break;
                                    default:
                                        (0, h.logWarn)("Skipping invalid request from ".concat(e.code, ". Request type ").concat(n.type, " must be GET or POST")), v()
                                }
                            }))
                        } else l()
                    }), "processBidderRequests"),
                    k = (0, y.z3)("async", (function(e, n, t, r) {
                        var i = u.vc.getConfig("userSync.aliasSyncEnabled");
                        if (e.getUserSyncs && (i || !a.ZP.aliasRegistry[e.code])) {
                            var o = u.vc.getConfig("userSync.filterSettings"),
                                c = e.getUserSyncs({
                                    iframeEnabled: !(!o || !o.iframe && !o.all),
                                    pixelEnabled: !(!o || !o.image && !o.all)
                                }, n, t, r);
                            c && (Array.isArray(c) || (c = [c]), c.forEach((function(n) {
                                s.k_.registerSync(n.type, e.code, n.url)
                            })))
                        }
                    }), "registerSyncs"),
                    j = (0, y.z3)("sync", (function(e, n) {
                        (0, h.logInfo)("bidderFactory.addComponentAuction", n)
                    }), "addComponentAuction");

                function U(e, n) {
                    var t = a.ZP.getBidAdapter(e);
                    if (t.getSpec().getMappingFileInfo) {
                        var r = t.getSpec().getMappingFileInfo(),
                            i = r.localStorageKey ? r.localStorageKey : t.getBidderCode(),
                            o = T.getDataFromLocalStorage(i);
                        if (o) {
                            try {
                                o = JSON.parse(o)
                            } catch (n) {
                                (0, h.logError)("Failed to parse ".concat(e, " mapping data stored in local storage"))
                            }
                            return o.mapping[n] ? o.mapping[n] : null
                        }
                    }
                }

                function _(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = t.index,
                        o = void 0 === i ? w.K.index : i;
                    if ((n.width || 0 === parseInt(n.width, 10)) && (n.height || 0 === parseInt(n.height, 10))) return n.width = parseInt(n.width, 10), n.height = parseInt(n.height, 10), !0;
                    var a = o.getBidRequest(n),
                        u = o.getMediaTypes(n),
                        c = a && a.sizes || u && u.banner && u.banner.sizes,
                        s = (0, h.parseSizesInput)(c);
                    if (1 === s.length) {
                        var d = s[0].split("x"),
                            f = (0, r.Z)(d, 2),
                            l = f[0],
                            g = f[1];
                        return n.width = parseInt(l, 10), n.height = parseInt(g, 10), !0
                    }
                    return !1
                }

                function R(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = t.index,
                        i = void 0 === r ? w.K.index : r;

                    function o() {
                        var e = Object.keys(n);
                        return I.every((function(t) {
                            return (0, p.q9)(e, t) && !(0, p.q9)([void 0, null], n[t])
                        }))
                    }

                    function a(e) {
                        return "Invalid bid from ".concat(n.bidderCode, ". Ignoring bid: ").concat(e)
                    }
                    return e ? n ? o() ? "native" !== n.mediaType || (0, d.r4)(n, {
                        index: i
                    }) ? "video" !== n.mediaType || (0, f.Dn)(n, {
                        index: i
                    }) ? !("banner" === n.mediaType && !_(e, n, {
                        index: i
                    })) || ((0, h.logError)(a("Banner bids require a width and height")), !1) : ((0, h.logError)(a("Video bid does not have required vastUrl or renderer property")), !1) : ((0, h.logError)(a("Native bid missing some required properties.")), !1) : ((0, h.logError)(a("Bidder ".concat(n.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1) : ((0, h.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : ((0, h.logWarn)("No adUnitCode was supplied to addBidResponse."), !1)
                }

                function P(e) {
                    return (0, A.Bf)(e.metrics).renameWith((function(n) {
                        return ["adapter.client.".concat(n), "adapters.client.".concat(e.bidderCode, ".").concat(n)]
                    }))
                }(0, y.v5)("checkAdUnitSetup").before((function(e, n) {
                    if (!u.vc.getConfig("adpod.brandCategoryExclusion")) return e.call(this, n);
                    n.filter((function(e) {
                        return (0, m.Z)(e, "mediaTypes.video.context") === b.Oh
                    })).map((function(e) {
                        return e.bids.map((function(e) {
                            return e.bidder
                        }))
                    })).reduce(h.flatten, []).filter(h.uniques).forEach((function(e) {
                        var n = a.ZP.getBidAdapter(e);
                        if (n.getSpec().getMappingFileInfo) {
                            var t = n.getSpec().getMappingFileInfo(),
                                r = t.refreshInDays ? t.refreshInDays : 1,
                                i = t.localStorageKey ? t.localStorageKey : n.getSpec().code,
                                o = T.getDataFromLocalStorage(i);
                            try {
                                (!(o = o ? JSON.parse(o) : void 0) || (0, h.timestamp)() > o.lastUpdated + 24 * r * 60 * 60 * 1e3) && (0, v.h)(t.url, {
                                    success: function(n) {
                                        try {
                                            n = JSON.parse(n);
                                            var t = {
                                                lastUpdated: (0, h.timestamp)(),
                                                mapping: n.mapping
                                            };
                                            T.setDataInLocalStorage(i, JSON.stringify(t))
                                        } catch (n) {
                                            (0, h.logError)("Failed to parse ".concat(e, " bidder translation mapping file"))
                                        }
                                    },
                                    error: function() {
                                        (0, h.logError)("Failed to load ".concat(e, " bidder translation file"))
                                    }
                                })
                            } catch (n) {
                                (0, h.logError)("Failed to parse ".concat(e, " bidder translation mapping file"))
                            }
                        }
                    })), e.call(this, n)
                }))
            },
            55730: function(e, n, t) {
                t.d(n, {
                    B: function() {
                        return u
                    }
                });
                var r = t(34614),
                    i = t(64358),
                    o = new WeakMap,
                    a = ["debugging", "adloox", "criteo", "outstream", "adagio", "spotx", "browsi", "brandmetrics", "justtag", "tncId", "akamaidap", "ftrackId", "inskin", "hadron", "medianet", "improvedigital"];

                function u(e, n, t, u, c) {
                    if (n && e) {
                        if ((0, r.q9)(a, n)) {
                            u || (u = document);
                            var s = l(u, e);
                            if (s) return t && "function" == typeof t && (s.loaded ? t() : s.callbacks.push(t)), s.tag;
                            var d = o.get(u) || {},
                                f = {
                                    loaded: !1,
                                    tag: null,
                                    callbacks: []
                                };
                            return d[e] = f, o.set(u, d), t && "function" == typeof t && f.callbacks.push(t), (0, i.logWarn)("module ".concat(n, " is loading external JavaScript")),
                                function(n, t, r, o) {
                                    r || (r = document);
                                    var a = r.createElement("script");
                                    a.type = "text/javascript", a.async = !0;
                                    var u = l(r, e);
                                    u && (u.tag = a);
                                    a.readyState ? a.onreadystatechange = function() {
                                        "loaded" !== a.readyState && "complete" !== a.readyState || (a.onreadystatechange = null, t())
                                    } : a.onload = function() {
                                        t()
                                    };
                                    a.src = n, o && (0, i.setScriptAttributes)(a, o);
                                    return (0, i.insertElement)(a, r), a
                                }(e, (function() {
                                    f.loaded = !0;
                                    try {
                                        for (var e = 0; e < f.callbacks.length; e++) f.callbacks[e]()
                                    } catch (e) {
                                        (0, i.logError)("Error executing callback", "adloader.js:loadExternalScript", e)
                                    }
                                }), u, c)
                        }(0, i.logError)("".concat(n, " not whitelisted for loading external JavaScript"))
                    } else(0, i.logError)("cannot load external script without url and moduleCode");

                    function l(e, n) {
                        var t = o.get(e);
                        return t && t[n] ? t[n] : null
                    }
                }
            },
            48928: function(e, n, t) {
                t.d(n, {
                    O: function() {
                        return u
                    },
                    h: function() {
                        return a
                    }
                });
                var r = t(71002),
                    i = t(3193),
                    o = t(64358),
                    a = u();

                function u() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.request,
                        a = n.done;
                    return function(n, u, c) {
                        var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        try {
                            var d, f = s.method || (c ? "POST" : "GET"),
                                l = document.createElement("a");
                            l.href = n;
                            var g = "object" === (0, r.Z)(u) && null !== u ? u : {
                                success: function() {
                                    (0, o.logMessage)("xhr success")
                                },
                                error: function(e) {
                                    (0, o.logError)("xhr error", null, e)
                                }
                            };
                            if ("function" == typeof u && (g.success = u), (d = new window.XMLHttpRequest).onreadystatechange = function() {
                                    if (4 === d.readyState) {
                                        "function" == typeof a && a(l.origin);
                                        var e = d.status;
                                        e >= 200 && e < 300 || 304 === e ? g.success(d.responseText, d) : g.error(d.statusText, d)
                                    }
                                }, i.vc.getConfig("disableAjaxTimeout") || (d.ontimeout = function() {
                                    (0, o.logError)("  xhr timeout after ", d.timeout, "ms")
                                }), "GET" === f && c) {
                                var p = (0, o.parseUrl)(n, s);
                                Object.assign(p.search, c), n = (0, o.buildUrl)(p)
                            }
                            d.open(f, n, !0), i.vc.getConfig("disableAjaxTimeout") || (d.timeout = e), s.withCredentials && (d.withCredentials = !0), (0, o._each)(s.customHeaders, (function(e, n) {
                                d.setRequestHeader(n, e)
                            })), s.preflight && d.setRequestHeader("X-Requested-With", "XMLHttpRequest"), d.setRequestHeader("Content-Type", s.contentType || "text/plain"), "function" == typeof t && t(l.origin), "POST" === f && c ? d.send(c) : d.send()
                        } catch (e) {
                            (0, o.logError)("xhr construction", e), "object" === (0, r.Z)(u) && null !== u && u.error(e)
                        }
                    }
                }
            },
            25686: function(e, n, t) {
                t.d(n, {
                    D$: function() {
                        return M
                    },
                    LX: function() {
                        return H
                    },
                    RH: function() {
                        return z
                    },
                    Yt: function() {
                        return j
                    },
                    Yw: function() {
                        return T
                    },
                    dg: function() {
                        return K
                    },
                    e0: function() {
                        return U
                    },
                    lU: function() {
                        return P
                    },
                    mv: function() {
                        return I
                    },
                    sq: function() {
                        return R
                    },
                    vO: function() {
                        return k
                    }
                });
                var r = t(71002),
                    i = t(64358),
                    o = t(20265),
                    a = t(56463),
                    u = t(70059),
                    c = t(79885),
                    s = t(35706),
                    d = t(3193),
                    f = t(11974),
                    l = t(92797),
                    g = t(34614),
                    p = t(90154),
                    v = t(24679),
                    h = t(78653),
                    m = t(55975),
                    b = t(52021),
                    y = t(9528),
                    E = t(5644),
                    w = t(68792),
                    C = t(99128),
                    A = f.k_.syncUsers,
                    T = "inProgress",
                    I = "completed";
                b.on(E.FP.BID_ADJUSTMENT, (function(e) {
                    ! function(e) {
                        var n = e.bidderCode,
                            t = e.cpm,
                            r = m.S.get(n || null, "bidCpmAdjustment");
                        if (r && "function" == typeof r) try {
                            t = r(e.cpm, Object.assign({}, e))
                        } catch (e) {
                            (0, i.logError)("Error during bid adjustment", "bidmanager.js", e)
                        }
                        t >= 0 && (e.cpm = t)
                    }(e)
                }));
                var O = {},
                    S = {},
                    B = [];

                function k(e) {
                    var n = e.adUnits,
                        t = e.adUnitCodes,
                        r = e.callback,
                        o = e.cbTimeout,
                        a = e.labels,
                        u = e.auctionId,
                        c = e.ortb2Fragments,
                        s = e.metrics;
                    s = (0, C.Bf)(s);
                    var f, l, p, v, m = n,
                        k = a,
                        R = t,
                        D = [],
                        Z = [],
                        x = [],
                        N = u || (0, i.generateUUID)(),
                        M = r,
                        W = o,
                        z = [],
                        K = new Set;

                    function L() {
                        return {
                            auctionId: N,
                            timestamp: f,
                            auctionEnd: l,
                            auctionStatus: p,
                            adUnits: m,
                            adUnitCodes: R,
                            labels: k,
                            bidderRequests: D,
                            noBids: x,
                            bidsReceived: Z,
                            winningBids: z,
                            timeout: W,
                            metrics: s
                        }
                    }

                    function H(e, t) {
                        if (t && clearTimeout(v), void 0 === l) {
                            var r = [];
                            e && ((0, i.logMessage)("Auction ".concat(N, " timedOut")), o = K, (r = D.map((function(e) {
                                return (e.bids || []).filter((function(e) {
                                    return !o.has(e.bidder)
                                }))
                            })).reduce(i.flatten, [])).length && b.j8(E.FP.BID_TIMEOUT, r)), p = I, l = Date.now(), s.checkpoint("auctionEnd"), s.timeBetween("requestBids", "auctionEnd", "requestBids.total"), s.timeBetween("callBids", "auctionEnd", "requestBids.callBids"), b.j8(E.FP.AUCTION_END, L()), _(m, (function() {
                                try {
                                    if (null != M) {
                                        var t = R,
                                            o = Z.filter(i.bind.call(i.adUnitsFilter, this, t)).reduce(V, {});
                                        M.apply(epbjs, [o, e, N]), M = null
                                    }
                                } catch (e) {
                                    (0, i.logError)("Error executing bidsBackHandler", null, e)
                                } finally {
                                    r.length && y.ZP.callTimedOutBidders(n, r, W);
                                    var a = d.vc.getConfig("userSync") || {};
                                    a.enableOverride || A(a.syncDelay)
                                }
                            }))
                        }
                        var o
                    }

                    function G() {
                        d.vc.resetBidder(), (0, i.logInfo)("Bids Received for Auction with id: ".concat(N), Z), p = I, H(!1, !0)
                    }

                    function Q(e) {
                        K.add(e)
                    }

                    function J(e) {
                        var n = this;
                        e.forEach((function(e) {
                            var n;
                            n = e, D = D.concat(n)
                        }));
                        var t = {},
                            r = {
                                bidRequests: e,
                                run: function() {
                                    var r, u;
                                    r = H.bind(null, !0), u = setTimeout(r, W), v = u, p = T, b.j8(E.FP.AUCTION_INIT, L());
                                    var s = function(e, n) {
                                        var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).index,
                                            r = void 0 === t ? h.K.index : t,
                                            o = 0,
                                            a = !1,
                                            u = new Set,
                                            c = {},
                                            s = {};

                                        function f(e, n) {
                                            null == s[e] && (s[e] = w.Z.resolve()), s[e] = s[e].then((function() {
                                                return w.Z.resolve(n).catch((function() {}))
                                            }))
                                        }

                                        function l(e, t) {
                                            var r = e.timeout;
                                            (null == r || r > n.getTimeout()) && (r = n.getTimeout());
                                            var i = n.getAuctionStart() + r - Date.now(),
                                                o = s[e.bidderRequestId],
                                                a = s[""];
                                            (null != o || null != a) && i > 0 ? w.Z.race([w.Z.timeout(i), w.Z.resolve(a).then((function() {
                                                return o
                                            }))]).then(t) : t()
                                        }

                                        function p() {
                                            o--, a && 0 === o && e()
                                        }

                                        function v(e, t) {
                                            c[t.requestId] = !0, o++;
                                            var r = F({
                                                adUnitCode: e,
                                                bid: t,
                                                auctionId: n.getAuctionId()
                                            });
                                            "video" === r.mediaType ? q(n, r, p) : (P(n, r), p())
                                        }

                                        function m() {
                                            var t = this,
                                                r = n.getBidRequests(),
                                                s = d.vc.getConfig("auctionOptions");
                                            if (u.add(t), s && !(0, i.isEmpty)(s)) {
                                                var f = s.secondaryBidders;
                                                f && !r.every((function(e) {
                                                    return (0, g.q9)(f, e.bidderCode)
                                                })) && (r = r.filter((function(e) {
                                                    return !(0, g.q9)(f, e.bidderCode)
                                                })))
                                            }
                                            a = r.every((function(e) {
                                                return u.has(e)
                                            })), t.bids.forEach((function(e) {
                                                c[e.bidId] || (n.addNoBid(e), b.j8(E.FP.NO_BID, e))
                                            })), a && 0 === o && e()
                                        }
                                        return {
                                            addBidResponse: function(e, n) {
                                                var t = r.getBidderRequest(n);
                                                f(t && t.bidderRequestId || "", j.call({
                                                    dispatch: v
                                                }, e, n))
                                            },
                                            adapterDone: function() {
                                                l(this, m.bind(this))
                                            }
                                        }
                                    }(G, n);
                                    y.ZP.callBids(m, e, s.addBidResponse, s.adapterDone, {
                                        request: function(e, n) {
                                            a(O, n), a(t, e), S[e] || (S[e] = {
                                                SRA: !0,
                                                origin: n
                                            }), t[e] > 1 && (S[e].SRA = !1)
                                        },
                                        done: function(e) {
                                            O[e]--, B[0] && o(B[0]) && B.shift()
                                        }
                                    }, W, Q, c)
                                }
                            };

                        function o(e) {
                            var n = !0,
                                t = d.vc.getConfig("maxRequestsPerOrigin") || 4;
                            return e.bidRequests.some((function(e) {
                                var r = 1,
                                    i = void 0 !== e.src && e.src === E.os.YZ ? "s2s" : e.bidderCode;
                                return S[i] && (!1 === S[i].SRA && (r = Math.min(e.bids.length, t)), O[S[i].origin] + r > t && (n = !1)), !n
                            })), n && e.run(), n
                        }

                        function a(e, n) {
                            void 0 === e[n] ? e[n] = 1 : e[n]++
                        }
                        o(r) || ((0, i.logWarn)("queueing auction due to limited endpoint capacity"), B.push(r))
                    }
                    return {
                        addBidReceived: function(e) {
                            Z = Z.concat(e)
                        },
                        addNoBid: function(e) {
                            x = x.concat(e)
                        },
                        executeCallback: H,
                        callBids: function() {
                            p = "started", f = Date.now();
                            var e = s.measureTime("requestBids.makeRequests", (function() {
                                return y.ZP.makeBidRequests(m, f, N, W, k, c, s)
                            }));
                            (0, i.logInfo)("Bids Requested for Auction with id: ".concat(N), e), s.checkpoint("callBids"), e.length < 1 ? ((0, i.logWarn)("No valid bid requests returned for auction"), G()) : U.call({
                                dispatch: J,
                                context: this
                            }, e)
                        },
                        addWinningBid: function(e) {
                            z = z.concat(e), y.ZP.callBidWonBidder(e.adapterCode || e.bidder, e, n)
                        },
                        setBidTargeting: function(e) {
                            y.ZP.callSetTargetingBidder(e.adapterCode || e.bidder, e)
                        },
                        getWinningBids: function() {
                            return z
                        },
                        getAuctionStart: function() {
                            return f
                        },
                        getTimeout: function() {
                            return W
                        },
                        getAuctionId: function() {
                            return N
                        },
                        getAuctionStatus: function() {
                            return p
                        },
                        getAdUnits: function() {
                            return m
                        },
                        getAdUnitCodes: function() {
                            return R
                        },
                        getBidRequests: function() {
                            return D
                        },
                        getBidsReceived: function() {
                            return Z
                        },
                        getNoBids: function() {
                            return x
                        },
                        getFPD: function() {
                            return c
                        },
                        getMetrics: function() {
                            return s
                        }
                    }
                }
                var j = (0, l.z3)("sync", (function(e, n) {
                        this.dispatch.call(null, e, n)
                    }), "addBidResponse"),
                    U = (0, l.z3)("sync", (function(e) {
                        this.dispatch.call(this.context, e)
                    }), "addBidderRequests"),
                    _ = (0, l.z3)("async", (function(e, n) {
                        n && n()
                    }), "bidsBackCallback");

                function R(e, n) {
                    n.timeToRespond > e.getTimeout() + d.vc.getConfig("timeoutBuffer") && e.executeCallback(!0)
                }

                function P(e, n) {
                    ! function(e) {
                        var n, t = !0 === m.S.get(e.bidderCode, "allowZeroCpmBids") ? e.cpm >= 0 : e.cpm > 0;
                        e.bidderCode && (t || e.dealId) && (n = function(e, n) {
                            var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).index,
                                r = void 0 === t ? h.K.index : t;
                            if (!n) return {};
                            var i = r.getBidRequest(n),
                                o = {},
                                a = H(n.mediaType, e);
                            G(o, a, n, i), e && m.S.getOwn(e, E.k2.xn) && (G(o, m.S.ownSettingsFor(e), n, i), n.sendStandardTargeting = m.S.get(e, "sendStandardTargeting"));
                            n.native && (o = Object.assign({}, o, (0, u.Ur)(n)));
                            return o
                        }(e.bidderCode, e));
                        e.adserverTargeting = Object.assign(e.adserverTargeting || {}, n)
                    }(n), (0, C.Bf)(n.metrics).timeSince("addBidResponse", "addBidResponse.total"), b.j8(E.FP.BID_RESPONSE, n), e.addBidReceived(n), R(e, n)
                }

                function q(e, n, t) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        a = r.index,
                        u = void 0 === a ? h.K.index : a,
                        c = !0,
                        s = (0, o.Z)(u.getMediaTypes({
                            requestId: n.originalRequestId || n.requestId,
                            transactionId: n.transactionId
                        }), "video"),
                        f = s && (0, o.Z)(s, "context"),
                        l = s && (0, o.Z)(s, "useCacheKey");
                    d.vc.getConfig("cache.url") && (l || f !== p.gZ) && (!n.videoCacheKey || d.vc.getConfig("cache.ignoreBidderCacheKey") ? (c = !1, M(e, n, t, s)) : n.vastUrl || ((0, i.logError)("videoCacheKey specified but not required vastUrl for video bid"), c = !1)), c && (P(e, n), t())
                }
                var D, Z, x = function(e) {
                    (0, c.h)(e.map((function(e) {
                        return e.bidResponse
                    })), (function(n, t) {
                        t.forEach((function(t, r) {
                            var o = e[r],
                                a = o.auctionInstance,
                                u = o.bidResponse,
                                s = o.afterBidAdded;
                            n ? ((0, i.logWarn)("Failed to save to the video cache: ".concat(n, ". Video bid must be discarded.")), R(a, u)) : "" === t.uuid ? ((0, i.logWarn)("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), R(a, u)) : (u.videoCacheKey = t.uuid, u.vastUrl || (u.vastUrl = (0, c.z)(u.videoCacheKey)), P(a, u), s())
                        }))
                    }))
                };
                d.vc.getConfig("cache", (function(e) {
                    D = "number" == typeof e.cache.batchSize && e.cache.batchSize > 0 ? e.cache.batchSize : 1, Z = "number" == typeof e.cache.batchTimeout && e.cache.batchTimeout > 0 ? e.cache.batchTimeout : 0
                }));
                var N = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : setTimeout,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x,
                            t = [
                                []
                            ],
                            r = !1,
                            i = function(e) {
                                return e()
                            };
                        return function(o, a, u) {
                            var c = Z > 0 ? e : i;
                            t[t.length - 1].length >= D && t.push([]), t[t.length - 1].push({
                                auctionInstance: o,
                                bidResponse: a,
                                afterBidAdded: u
                            }), r || (r = !0, c((function() {
                                t.forEach(n), t = [
                                    []
                                ], r = !1
                            }), Z))
                        }
                    }(),
                    M = (0, l.z3)("async", (function(e, n, t, r) {
                        N(e, n, t)
                    }), "callPrebidCache");

                function F(e) {
                    var n = e.adUnitCode,
                        t = e.bid,
                        o = e.auctionId,
                        u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        c = u.index,
                        f = void 0 === c ? h.K.index : c,
                        l = f.getBidderRequest(t),
                        g = l && l.start || t.requestTimestamp,
                        p = Object.assign({}, t, {
                            auctionId: o,
                            responseTimestamp: (0, i.timestamp)(),
                            requestTimestamp: g,
                            cpm: parseFloat(t.cpm) || 0,
                            bidder: t.bidderCode,
                            adUnitCode: n
                        });
                    p.timeToRespond = p.responseTimestamp - p.requestTimestamp, b.j8(E.FP.BID_ADJUSTMENT, p);
                    var v = f.getAdUnit(p).renderer,
                        m = p.mediaType,
                        y = f.getMediaTypes(p),
                        w = y && y[m],
                        C = w && w.renderer,
                        A = null;
                    C && C.url && C.render && (!0 !== C.backupOnly || !t.renderer) ? A = C : v && v.url && v.render && (!0 !== v.backupOnly || !t.renderer) && (A = v), A && (p.renderer = s.Th.install({
                        url: A.url,
                        config: A.options
                    }), p.renderer.setRender(A.render));
                    var T = W(t.mediaType, y, d.vc.getConfig("mediaTypePriceGranularity")),
                        I = (0, a.D)(p.cpm, "object" === (0, r.Z)(T) ? T : d.vc.getConfig("customPriceBucket"), d.vc.getConfig("currency.granularityMultiplier"));
                    return p.pbLg = I.low, p.pbMg = I.med, p.pbHg = I.high, p.pbAg = I.auto, p.pbDg = I.dense, p.pbCg = I.custom, p
                }

                function W(e, n, t) {
                    if (e && t) {
                        if (e === v.pX) {
                            var r = (0, o.Z)(n, "".concat(v.pX, ".context"), "instream");
                            if (t["".concat(v.pX, "-").concat(r)]) return t["".concat(v.pX, "-").concat(r)]
                        }
                        return t[e]
                    }
                }
                var z = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.index,
                            r = void 0 === t ? h.K.index : t,
                            i = W(e.mediaType, r.getMediaTypes(e), d.vc.getConfig("mediaTypePriceGranularity")),
                            o = "string" == typeof e.mediaType && i ? "string" == typeof i ? i : "custom" : d.vc.getConfig("priceGranularity");
                        return o
                    },
                    K = function(e) {
                        return function(n) {
                            var t = e || z(n);
                            return t === E.Ql.B7 ? n.pbAg : t === E.Ql.uN ? n.pbDg : t === E.Ql.yE ? n.pbLg : t === E.Ql.M2 ? n.pbMg : t === E.Ql.lj ? n.pbHg : t === E.Ql.qN ? n.pbCg : void 0
                        }
                    };

                function L(e, n) {
                    return {
                        key: e,
                        val: "function" == typeof n ? function(e, t) {
                            return n(e, t)
                        } : function(e) {
                            return (0, i.getValue)(e, n)
                        }
                    }
                }

                function H(e, n) {
                    var t = E.TD,
                        r = Object.assign({}, m.S.settingsFor(null));
                    if (r[E.k2.xn] || (r[E.k2.xn] = function() {
                            var e = E.TD;
                            return [L(e.BIDDER, "bidderCode"), L(e.AD_ID, "adId"), L(e.PRICE_BUCKET, K()), L(e.SIZE, "size"), L(e.DEAL, "dealId"), L(e.SOURCE, "source"), L(e.FORMAT, "mediaType"), L(e.ADOMAIN, (function(e) {
                                return e.meta && e.meta.advertiserDomains && e.meta.advertiserDomains.length > 0 ? e.meta.advertiserDomains[0] : ""
                            }))]
                        }()), "video" === e) {
                        var a = r[E.k2.xn].slice();
                        if (r[E.k2.xn] = a, [t.UUID, t.CACHE_ID].forEach((function(e) {
                                void 0 === (0, g.sE)(a, (function(n) {
                                    return n.key === e
                                })) && a.push(L(e, "videoCacheKey"))
                            })), d.vc.getConfig("cache.url") && (!n || !1 !== m.S.get(n, "sendStandardTargeting"))) {
                            var u = (0, i.parseUrl)(d.vc.getConfig("cache.url"));
                            void 0 === (0, g.sE)(a, (function(e) {
                                return e.key === t.CACHE_HOST
                            })) && a.push(L(t.CACHE_HOST, (function(e) {
                                return (0, o.Z)(e, "adserverTargeting.".concat(t.CACHE_HOST)) ? e.adserverTargeting[t.CACHE_HOST] : u.hostname
                            })))
                        }
                    }
                    return r
                }

                function G(e, n, t, r) {
                    var o = n[E.k2.xn];
                    return t.size = t.getSize(), (0, i._each)(o, (function(o) {
                        var a = o.key,
                            u = o.val;
                        if (e[a] && (0, i.logWarn)("The key: " + a + " is being overwritten"), (0, i.isFn)(u)) try {
                            u = u(t, r)
                        } catch (e) {
                            (0, i.logError)("bidmanager", "ERROR", e)
                        }(void 0 === n.suppressEmptyKeys || !0 !== n.suppressEmptyKeys) && a !== E.TD.DEAL || !(0, i.isEmptyStr)(u) && null != u ? e[a] = u : (0, i.logInfo)("suppressing empty key '" + a + "' from adserver targeting")
                    })), e
                }

                function V(e, n) {
                    return e[n.adUnitCode] || (e[n.adUnitCode] = {
                        bids: []
                    }), e[n.adUnitCode].bids.push(n), e
                }
            },
            78653: function(e, n, t) {
                t.d(n, {
                    K: function() {
                        return s
                    }
                });
                var r = t(64358),
                    i = t(25686),
                    o = t(34614);

                function a(e) {
                    Object.assign(this, {
                        getAuction: function(n) {
                            var t = n.auctionId;
                            if (null != t) return e().find((function(e) {
                                return e.getAuctionId() === t
                            }))
                        },
                        getAdUnit: function(n) {
                            var t = n.transactionId;
                            if (null != t) return e().flatMap((function(e) {
                                return e.getAdUnits()
                            })).find((function(e) {
                                return e.transactionId === t
                            }))
                        },
                        getMediaTypes: function(e) {
                            var n = e.transactionId,
                                t = e.requestId;
                            if (null != t) {
                                var r = this.getBidRequest({
                                    requestId: t
                                });
                                if (null != r && (null == n || r.transactionId === n)) return r.mediaTypes
                            } else if (null != n) {
                                var i = this.getAdUnit({
                                    transactionId: n
                                });
                                if (null != i) return i.mediaTypes
                            }
                        },
                        getBidderRequest: function(n) {
                            var t = n.requestId,
                                r = n.bidderRequestId;
                            if (null != t || null != r) {
                                var i = e().flatMap((function(e) {
                                    return e.getBidRequests()
                                }));
                                return null != r && (i = i.filter((function(e) {
                                    return e.bidderRequestId === r
                                }))), null == t ? i[0] : i.find((function(e) {
                                    return e.bids && null != e.bids.find((function(e) {
                                        return e.bidId === t
                                    }))
                                }))
                            }
                        },
                        getBidRequest: function(n) {
                            var t = n.requestId;
                            if (null != t) return e().flatMap((function(e) {
                                return e.getBidRequests()
                            })).flatMap((function(e) {
                                return e.bids
                            })).find((function(e) {
                                return e && e.bidId === t
                            }))
                        }
                    })
                }
                var u = t(5644),
                    c = t(99128);
                var s = function() {
                    var e = [],
                        n = {};
                    return n.addWinningBid = function(n) {
                        var t = (0, c.Bf)(n.metrics);
                        t.checkpoint("bidWon"), t.timeBetween("auctionEnd", "bidWon", "render.pending"), t.timeBetween("requestBids", "bidWon", "render.e2e");
                        var i = (0, o.sE)(e, (function(e) {
                            return e.getAuctionId() === n.auctionId
                        }));
                        i ? (n.status = u.UE.fe, i.addWinningBid(n)) : (0, r.logWarn)("Auction not found when adding winning bid")
                    }, n.getAllWinningBids = function() {
                        return e.map((function(e) {
                            return e.getWinningBids()
                        })).reduce(r.flatten, [])
                    }, n.getBidsRequested = function() {
                        return e.map((function(e) {
                            return e.getBidRequests()
                        })).reduce(r.flatten, [])
                    }, n.getNoBids = function() {
                        return e.map((function(e) {
                            return e.getNoBids()
                        })).reduce(r.flatten, [])
                    }, n.getBidsReceived = function() {
                        return e.map((function(e) {
                            if (e.getAuctionStatus() === i.mv) return e.getBidsReceived()
                        })).reduce(r.flatten, []).filter((function(e) {
                            return e
                        }))
                    }, n.getAllBidsForAdUnitCode = function(n) {
                        return e.map((function(e) {
                            return e.getBidsReceived()
                        })).reduce(r.flatten, []).filter((function(e) {
                            return e && e.adUnitCode === n
                        }))
                    }, n.getAdUnits = function() {
                        return e.map((function(e) {
                            return e.getAdUnits()
                        })).reduce(r.flatten, [])
                    }, n.getAdUnitCodes = function() {
                        return e.map((function(e) {
                            return e.getAdUnitCodes()
                        })).reduce(r.flatten, []).filter(r.uniques)
                    }, n.createAuction = function(n) {
                        var t = (0, i.vO)(n);
                        return function(n) {
                            e.push(n)
                        }(t), t
                    }, n.findBidByAdId = function(n) {
                        return (0, o.sE)(e.map((function(e) {
                            return e.getBidsReceived()
                        })).reduce(r.flatten, []), (function(e) {
                            return e.adId === n
                        }))
                    }, n.getStandardBidderAdServerTargeting = function() {
                        return (0, i.LX)()[u.k2.xn]
                    }, n.setStatusForBids = function(t, r) {
                        var i = n.findBidByAdId(t);
                        if (i && (i.status = r), i && r === u.UE.CK) {
                            var a = (0, o.sE)(e, (function(e) {
                                return e.getAuctionId() === i.auctionId
                            }));
                            a && a.setBidTargeting(i)
                        }
                    }, n.getLastAuctionId = function() {
                        return e.length && e[e.length - 1].getAuctionId()
                    }, n.clearAllAuctions = function() {
                        e.length = 0
                    }, n.index = new a((function() {
                        return e
                    })), n
                }()
            },
            55975: function(e, n, t) {
                t.d(n, {
                    S: function() {
                        return g
                    }
                });
                var r = t(15671),
                    i = t(43144),
                    o = t(20265),
                    a = t(64358),
                    u = t(78640),
                    c = t(5644);

                function s(e, n) {
                    ! function(e, n) {
                        if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                    }(e, n), n.add(e)
                }

                function d(e, n, t) {
                    if (!n.has(e)) throw new TypeError("attempted to get private field on non-instance");
                    return t
                }
                var f = new WeakSet;

                function l(e) {
                    return null == e ? this.defaultScope : e
                }
                var g = new(function() {
                    function e(n, t) {
                        (0, r.Z)(this, e), s(this, f), this.getSettings = n, this.defaultScope = t
                    }
                    return (0, i.Z)(e, [{
                        key: "get",
                        value: function(e, n) {
                            var t = this.getOwn(e, n);
                            return void 0 === t && (t = this.getOwn(null, n)), t
                        }
                    }, {
                        key: "getOwn",
                        value: function(e, n) {
                            return e = d(this, f, l).call(this, e), (0, o.Z)(this.getSettings(), "".concat(e, ".").concat(n))
                        }
                    }, {
                        key: "getScopes",
                        value: function() {
                            var e = this;
                            return Object.keys(this.getSettings()).filter((function(n) {
                                return n !== e.defaultScope
                            }))
                        }
                    }, {
                        key: "settingsFor",
                        value: function(e) {
                            return (0, a.mergeDeep)({}, this.ownSettingsFor(null), this.ownSettingsFor(e))
                        }
                    }, {
                        key: "ownSettingsFor",
                        value: function(e) {
                            return e = d(this, f, l).call(this, e), this.getSettings()[e] || {}
                        }
                    }]), e
                }())((function() {
                    return (0, u.R)().bidderSettings || {}
                }), c.k2.zF)
            },
            69626: function(e, n, t) {
                t.d(n, {
                    m: function() {
                        return o
                    }
                });
                var r = t(64358);

                function i(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.src,
                        i = void 0 === t ? "client" : t,
                        o = n.bidder,
                        a = void 0 === o ? "" : o,
                        u = n.bidId,
                        c = n.transactionId,
                        s = n.auctionId,
                        d = i,
                        f = e || 0;

                    function l() {
                        switch (f) {
                            case 0:
                                return "Pending";
                            case 1:
                                return "Bid available";
                            case 2:
                                return "Bid returned empty or error response";
                            case 3:
                                return "Bid timed out"
                        }
                    }
                    this.bidderCode = a, this.width = 0, this.height = 0, this.statusMessage = l(), this.adId = (0, r.getUniqueIdentifierStr)(), this.requestId = u, this.transactionId = c, this.auctionId = s, this.mediaType = "banner", this.source = d, this.getStatusCode = function() {
                        return f
                    }, this.getSize = function() {
                        return this.width + "x" + this.height
                    }, this.getIdentifiers = function() {
                        return {
                            src: this.source,
                            bidder: this.bidderCode,
                            bidId: this.requestId,
                            transactionId: this.transactionId,
                            auctionId: this.auctionId
                        }
                    }
                }

                function o(e, n) {
                    return new i(e, n)
                }
            },
            3193: function(e, n, t) {
                t.d(n, {
                    FD: function() {
                        return g
                    },
                    vc: function() {
                        return b
                    }
                });
                var r = t(4942),
                    i = t(71002),
                    o = t(93324),
                    a = t(56463),
                    u = t(34614),
                    c = t(64358),
                    s = t(20265),
                    d = t(5644);

                function f(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        }))), t.push.apply(t, r)
                    }
                    return t
                }
                var l = "TRUE" === (0, c.getParameterByName)(d.f).toUpperCase(),
                    g = "random",
                    p = {};
                p[g] = !0, p.fixed = !0;
                var v = g,
                    h = {
                        LOW: "low",
                        MEDIUM: "medium",
                        HIGH: "high",
                        AUTO: "auto",
                        DENSE: "dense",
                        CUSTOM: "custom"
                    },
                    m = "*";
                var b = function() {
                    var e, n, t, d = [],
                        g = null;

                    function b() {
                        e = {};
                        var r = {
                            _debug: l,
                            get debug() {
                                return this._debug
                            },
                            set debug(e) {
                                this._debug = e
                            },
                            _bidderTimeout: 3e3,
                            get bidderTimeout() {
                                return this._bidderTimeout
                            },
                            set bidderTimeout(e) {
                                this._bidderTimeout = e
                            },
                            _publisherDomain: null,
                            get publisherDomain() {
                                return this._publisherDomain
                            },
                            set publisherDomain(e) {
                                (0, c.logWarn)("publisherDomain is deprecated and has no effect since v7 - use pageUrl instead"), this._publisherDomain = e
                            },
                            _priceGranularity: h.MEDIUM,
                            set priceGranularity(e) {
                                o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : h.MEDIUM : (0, c.isPlainObject)(e) && (this._customPriceBucket = e, this._priceGranularity = h.CUSTOM, (0, c.logMessage)("Using custom price granularity")))
                            },
                            get priceGranularity() {
                                return this._priceGranularity
                            },
                            _customPriceBucket: {},
                            get customPriceBucket() {
                                return this._customPriceBucket
                            },
                            _mediaTypePriceGranularity: {},
                            get mediaTypePriceGranularity() {
                                return this._mediaTypePriceGranularity
                            },
                            set mediaTypePriceGranularity(e) {
                                var n = this;
                                this._mediaTypePriceGranularity = Object.keys(e).reduce((function(t, r) {
                                    return o(e[r]) ? "string" == typeof e ? t[r] = i(e[r]) ? e[r] : n._priceGranularity : (0, c.isPlainObject)(e) && (t[r] = e[r], (0, c.logMessage)("Using custom price granularity for ".concat(r))) : (0, c.logWarn)("Invalid price granularity for media type: ".concat(r)), t
                                }), {})
                            },
                            _sendAllBids: true,
                            get enableSendAllBids() {
                                return this._sendAllBids
                            },
                            set enableSendAllBids(e) {
                                this._sendAllBids = e
                            },
                            _useBidCache: false,
                            get useBidCache() {
                                return this._useBidCache
                            },
                            set useBidCache(e) {
                                this._useBidCache = e
                            },
                            _deviceAccess: true,
                            get deviceAccess() {
                                return this._deviceAccess
                            },
                            set deviceAccess(e) {
                                this._deviceAccess = e
                            },
                            _bidderSequence: v,
                            get bidderSequence() {
                                return this._bidderSequence
                            },
                            set bidderSequence(e) {
                                p[e] ? this._bidderSequence = e : (0, c.logWarn)("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
                            },
                            _timeoutBuffer: 400,
                            get timeoutBuffer() {
                                return this._timeoutBuffer
                            },
                            set timeoutBuffer(e) {
                                this._timeoutBuffer = e
                            },
                            _disableAjaxTimeout: false,
                            get disableAjaxTimeout() {
                                return this._disableAjaxTimeout
                            },
                            set disableAjaxTimeout(e) {
                                this._disableAjaxTimeout = e
                            },
                            _maxNestedIframes: 10,
                            get maxNestedIframes() {
                                return this._maxNestedIframes
                            },
                            set maxNestedIframes(e) {
                                this._maxNestedIframes = e
                            },
                            _auctionOptions: {},
                            get auctionOptions() {
                                return this._auctionOptions
                            },
                            set auctionOptions(e) {
                                (function(e) {
                                    if (!(0, c.isPlainObject)(e)) return (0, c.logWarn)("Auction Options must be an object"), !1;
                                    for (var n = 0, t = Object.keys(e); n < t.length; n++) {
                                        var r = t[n];
                                        if ("secondaryBidders" !== r && "suppressStaleRender" !== r) return (0, c.logWarn)("Auction Options given an incorrect param: ".concat(r)), !1;
                                        if ("secondaryBidders" === r) {
                                            if (!(0, c.isArray)(e[r])) return (0, c.logWarn)("Auction Options ".concat(r, " must be of type Array")), !1;
                                            if (!e[r].every(c.isStr)) return (0, c.logWarn)("Auction Options ".concat(r, " must be only string")), !1
                                        } else if ("suppressStaleRender" === r && !(0, c.isBoolean)(e[r])) return (0, c.logWarn)("Auction Options ".concat(r, " must be of type boolean")), !1
                                    }
                                    return !0
                                })(e) && (this._auctionOptions = e)
                            }
                        };

                        function i(e) {
                            return (0, u.sE)(Object.keys(h), (function(n) {
                                return e === h[n]
                            }))
                        }

                        function o(e) {
                            if (!e) return (0, c.logError)("Prebid Error: no value passed to 'setPriceGranularity()'"), !1;
                            if ("string" == typeof e) i(e) || (0, c.logWarn)("Prebid Warning: setPriceGranularity was called with invalid setting, using 'medium' as default.");
                            else if ((0, c.isPlainObject)(e) && !(0, a.t)(e)) return (0, c.logError)("Invalid custom price value passed to 'setPriceGranularity()'"), !1;
                            return !0
                        }
                        n && j(Object.keys(n).reduce((function(e, t) {
                            return n[t] !== r[t] && (e[t] = r[t] || {}), e
                        }), {})), n = r, t = {}
                    }

                    function y() {
                        if (g && t && (0, c.isPlainObject)(t[g])) {
                            var e = t[g],
                                r = new Set(Object.keys(n).concat(Object.keys(e)));
                            return (0, u.Oc)(r).reduce((function(t, r) {
                                return void 0 === e[r] ? t[r] = n[r] : void 0 === n[r] ? t[r] = e[r] : (0, c.isPlainObject)(e[r]) ? t[r] = (0, c.mergeDeep)({}, n[r], e[r]) : t[r] = e[r], t
                            }), {})
                        }
                        return Object.assign({}, n)
                    }
                    var E = [y, function() {
                            var e = y();
                            return Object.defineProperty(e, "ortb2", {
                                get: function() {
                                    throw new Error("invalid access to 'orbt2' config - use request parameters instead")
                                }
                            }), e
                        }].map((function(e) {
                            return function() {
                                if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                                    var n = arguments.length <= 0 ? void 0 : arguments[0];
                                    return n ? (0, s.Z)(e(), n) : y()
                                }
                                return k.apply(void 0, arguments)
                            }
                        })),
                        w = (0, o.Z)(E, 2),
                        C = w[0],
                        A = w[1],
                        T = [A, C].map((function(e) {
                            return function() {
                                var n = e.apply(void 0, arguments);
                                return n && "object" === (0, i.Z)(n) && (n = (0, c.deepClone)(n)), n
                            }
                        })),
                        I = (0, o.Z)(T, 2),
                        O = I[0],
                        S = I[1];

                    function B(t) {
                        if ((0, c.isPlainObject)(t)) {
                            var r = Object.keys(t),
                                i = {};
                            r.forEach((function(r) {
                                var o = t[r];
                                (0, c.isPlainObject)(e[r]) && (0, c.isPlainObject)(o) && (o = Object.assign({}, e[r], o));
                                try {
                                    i[r] = n[r] = o
                                } catch (e) {
                                    (0, c.logWarn)("Cannot set config for property ".concat(r, " : "), e)
                                }
                            })), j(i)
                        } else(0, c.logError)("setConfig options must be an object")
                    }

                    function k(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = n;
                        if ("string" != typeof e && (i = e, e = m, t = n || {}), "function" == typeof i) {
                            var o = {
                                topic: e,
                                callback: i
                            };
                            return d.push(o), t.init && i(e === m ? A() : (0, r.Z)({}, e, A(e))),
                                function() {
                                    d.splice(d.indexOf(o), 1)
                                }
                        }(0, c.logError)("listener must be a function")
                    }

                    function j(e) {
                        var n = Object.keys(e);
                        d.filter((function(e) {
                            return (0, u.q9)(n, e.topic)
                        })).forEach((function(n) {
                            n.callback((0, r.Z)({}, n.topic, e[n.topic]))
                        })), d.filter((function(e) {
                            return e.topic === m
                        })).forEach((function(n) {
                            return n.callback(e)
                        }))
                    }

                    function U(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        try {
                            r(e), e.bidders.forEach((function(r) {
                                t[r] || (t[r] = {}), Object.keys(e.config).forEach((function(i) {
                                    var o = e.config[i];
                                    if ((0, c.isPlainObject)(o)) {
                                        var a = n ? c.mergeDeep : Object.assign;
                                        t[r][i] = a({}, t[r][i] || {}, o)
                                    } else t[r][i] = o
                                }))
                            }))
                        } catch (e) {
                            (0, c.logError)(e)
                        }

                        function r(e) {
                            if (!(0, c.isPlainObject)(e)) throw "setBidderConfig bidder options must be an object";
                            if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                            if (!(0, c.isPlainObject)(e.config)) throw "setBidderConfig bidder options must contain a config object"
                        }
                    }

                    function _(e, n) {
                        g = e;
                        try {
                            return n()
                        } finally {
                            R()
                        }
                    }

                    function R() {
                        g = null
                    }
                    return b(), {
                        getCurrentBidder: function() {
                            return g
                        },
                        resetBidder: R,
                        getConfig: A,
                        getAnyConfig: C,
                        readConfig: O,
                        readAnyConfig: S,
                        setConfig: B,
                        mergeConfig: function(e) {
                            if ((0, c.isPlainObject)(e)) {
                                var n = (0, c.mergeDeep)(y(), e);
                                return B(function(e) {
                                    for (var n = 1; n < arguments.length; n++) {
                                        var t = null != arguments[n] ? arguments[n] : {};
                                        n % 2 ? f(Object(t), !0).forEach((function(n) {
                                            (0, r.Z)(e, n, t[n])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach((function(n) {
                                            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                                        }))
                                    }
                                    return e
                                }({}, n)), n
                            }(0, c.logError)("mergeConfig input must be an object")
                        },
                        setDefaults: function(t) {
                            (0, c.isPlainObject)(e) ? (Object.assign(e, t), Object.assign(n, t)) : (0, c.logError)("defaults must be an object")
                        },
                        resetConfig: b,
                        runWithBidder: _,
                        callbackWithBidder: function(e) {
                            return function(n) {
                                return function() {
                                    if ("function" == typeof n) {
                                        for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                        return _(e, c.bind.call.apply(c.bind, [n, this].concat(r)))
                                    }(0, c.logWarn)("config.callbackWithBidder callback is not a function")
                                }
                            }
                        },
                        setBidderConfig: U,
                        getBidderConfig: function() {
                            return t
                        },
                        mergeBidderConfig: function(e) {
                            return U(e, !0)
                        }
                    }
                }()
            },
            56463: function(e, n, t) {
                t.d(n, {
                    D: function() {
                        return d
                    },
                    t: function() {
                        return l
                    }
                });
                var r = t(34614),
                    i = t(64358),
                    o = {
                        buckets: [{
                            max: 5,
                            increment: .5
                        }]
                    },
                    a = {
                        buckets: [{
                            max: 20,
                            increment: .1
                        }]
                    },
                    u = {
                        buckets: [{
                            max: 20,
                            increment: .01
                        }]
                    },
                    c = {
                        buckets: [{
                            max: 3,
                            increment: .01
                        }, {
                            max: 8,
                            increment: .05
                        }, {
                            max: 20,
                            increment: .5
                        }]
                    },
                    s = {
                        buckets: [{
                            max: 5,
                            increment: .05
                        }, {
                            max: 10,
                            increment: .1
                        }, {
                            max: 20,
                            increment: .5
                        }]
                    };

                function d(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        r = parseFloat(e);
                    return isNaN(r) && (r = ""), {
                        low: "" === r ? "" : f(e, o, t),
                        med: "" === r ? "" : f(e, a, t),
                        high: "" === r ? "" : f(e, u, t),
                        auto: "" === r ? "" : f(e, s, t),
                        dense: "" === r ? "" : f(e, c, t),
                        custom: "" === r ? "" : f(e, n, t)
                    }
                }

                function f(e, n, t) {
                    var i = "";
                    if (!l(n)) return i;
                    var o = n.buckets.reduce((function(e, n) {
                            return e.max > n.max ? e : n
                        }), {
                            max: 0
                        }),
                        a = 0,
                        u = (0, r.sE)(n.buckets, (function(n) {
                            if (e > o.max * t) {
                                var r = n.precision;
                                void 0 === r && (r = 2), i = (n.max * t).toFixed(r)
                            } else {
                                if (e <= n.max * t && e >= a * t) return n.min = a, n;
                                a = n.max
                            }
                        }));
                    return u && (i = function(e, n, t) {
                        var r = void 0 !== n.precision ? n.precision : 2,
                            i = n.increment * t,
                            o = n.min * t,
                            a = Math.pow(10, r + 2),
                            u = (e * a - o * a) / (i * a),
                            c = Math.floor(u) * i + o;
                        return (c = Number(c.toFixed(10))).toFixed(r)
                    }(e, u, t)), i
                }

                function l(e) {
                    if ((0, i.isEmpty)(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
                    var n = !0;
                    return e.buckets.forEach((function(e) {
                        e.max && e.increment || (n = !1)
                    })), n
                }
            },
            53777: function(e, n, t) {
                t.d(n, {
                    Jc: function() {
                        return d
                    },
                    dF: function() {
                        return v
                    }
                });
                var r = t(3193),
                    i = t(92797),
                    o = t(78640),
                    a = t(64358),
                    u = t(69626),
                    c = t(55730),
                    s = t(68792),
                    d = "__epbjs_debugging__";

                function f() {
                    return (0, o.R)().installedModules.includes("debugging")
                }

                function l(e) {
                    return new s.Z((function(n) {
                        (0, c.B)(e, "debugging", n)
                    }))
                }

                function g() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.alreadyInstalled,
                        t = void 0 === n ? f : n,
                        c = e.script,
                        g = void 0 === c ? l : c,
                        p = null;
                    return function() {
                        return null == p && (p = new s.Z((function(e, n) {
                            setTimeout((function() {
                                if (t()) e();
                                else {
                                    var c = "https://cdn.jsdelivr.net/npm/prebid.js@7.17.0/dist/debugging-standalone.js";
                                    (0, a.logMessage)('Debugging module not installed, loading it from "'.concat(c, '"...')), (0, o.R)()._installDebugging = !0, g(c).then((function() {
                                        (0, o.R)()._installDebugging({
                                            DEBUG_KEY: d,
                                            hook: i.z3,
                                            config: r.vc,
                                            createBid: u.m,
                                            logger: (0, a.prefixLog)("DEBUG:")
                                        })
                                    })).then(e, n)
                                }
                            }))
                        }))), p
                    }
                }
                var p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.load,
                        t = void 0 === n ? g() : n,
                        r = e.hook,
                        o = void 0 === r ? (0, i.v5)("requestBids") : r,
                        a = null,
                        u = !1;

                    function c(e) {
                        for (var n = this, t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                        return (a || s.Z.resolve()).then((function() {
                            return e.apply(n, r)
                        }))
                    }

                    function d() {
                        u || (a = t(), o.before(c, 99), u = !0)
                    }

                    function f() {
                        o.getHooks({
                            hook: c
                        }).remove(), u = !1
                    }

                    function l() {
                        a = null, f()
                    }
                    return {
                        enable: d,
                        disable: f,
                        reset: l
                    }
                }();
                p.reset;

                function v() {
                    var e = null;
                    try {
                        e = window.sessionStorage
                    } catch (e) {}
                    if (null !== e) {
                        var n = p,
                            t = null;
                        try {
                            t = e.getItem(d)
                        } catch (e) {}
                        null !== t && n.enable()
                    }
                }
                r.vc.getConfig("debugging", (function(e) {
                    var n = e.debugging;
                    null != n && n.enabled ? p.enable() : p.disable()
                }))
            },
            52021: function(e, n, t) {
                t.d(n, {
                    S1: function() {
                        return l
                    },
                    j8: function() {
                        return p
                    },
                    on: function() {
                        return f
                    },
                    vw: function() {
                        return g
                    }
                });
                var r = t(64358),
                    i = t(5644),
                    o = Array.prototype.slice,
                    a = Array.prototype.push,
                    u = r._map(i.FP, (function(e) {
                        return e
                    })),
                    c = i.aI,
                    s = [],
                    d = function() {
                        var e = {},
                            n = {};

                        function t(n, t) {
                            r.logMessage("Emitting event for: " + n);
                            var i = t[0] || {},
                                o = i[c[n]],
                                u = e[n] || {
                                    que: []
                                },
                                d = r._map(u, (function(e, n) {
                                    return n
                                })),
                                f = [];
                            s.push({
                                eventType: n,
                                args: i,
                                id: o,
                                elapsedTime: r.getPerformanceNow()
                            }), o && r.contains(d, o) && a.apply(f, u[o].que), a.apply(f, u.que), r._each(f, (function(e) {
                                if (e) try {
                                    e.apply(null, t)
                                } catch (e) {
                                    r.logError("Error executing handler:", "events.js", e)
                                }
                            }))
                        }
                        return n.on = function(n, t, i) {
                            if (function(e) {
                                    return r.contains(u, e)
                                }(n)) {
                                var o = e[n] || {
                                    que: []
                                };
                                i ? (o[i] = o[i] || {
                                    que: []
                                }, o[i].que.push(t)) : o.que.push(t), e[n] = o
                            } else r.logError("Wrong event name : " + n + " Valid event names :" + u)
                        }, n.emit = function(e) {
                            var n = o.call(arguments, 1);
                            t(e, n)
                        }, n.off = function(n, t, i) {
                            var o = e[n];
                            r.isEmpty(o) || r.isEmpty(o.que) && r.isEmpty(o[i]) || i && (r.isEmpty(o[i]) || r.isEmpty(o[i].que)) || (i ? r._each(o[i].que, (function(e) {
                                var n = o[i].que;
                                e === t && n.splice(n.indexOf(e), 1)
                            })) : r._each(o.que, (function(e) {
                                var n = o.que;
                                e === t && n.splice(n.indexOf(e), 1)
                            })), e[n] = o)
                        }, n.get = function() {
                            return e
                        }, n.getEvents = function() {
                            var e = [];
                            return r._each(s, (function(n) {
                                var t = Object.assign({}, n);
                                e.push(t)
                            })), e
                        }, n
                    }();
                r._setEventEmitter(d.emit.bind(d));
                var f = d.on,
                    l = d.off,
                    g = (d.get, d.getEvents),
                    p = d.emit
            },
            92797: function(e, n, t) {
                t.d(n, {
                    Bx: function() {
                        return p
                    },
                    Cd: function() {
                        return s
                    },
                    IF: function() {
                        return v
                    },
                    bA: function() {
                        return g
                    },
                    o0: function() {
                        return f
                    },
                    v5: function() {
                        return d
                    },
                    z3: function() {
                        return u
                    }
                });
                var r = t(89062),
                    i = t(81432),
                    o = t.n(i),
                    a = t(68792),
                    u = o()({
                        ready: o().SYNC | o().ASYNC | o().QUEUE
                    }),
                    c = (0, a.P)();
                u.ready = function() {
                    var e = u.ready;
                    return function() {
                        try {
                            return e.apply(u, arguments)
                        } finally {
                            c.resolve()
                        }
                    }
                }();
                var s = c.promise,
                    d = u.get;

                function f(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
                        r = e.getHooks({
                            hook: n
                        });
                    0 === r.length && e.before(n, t)
                }
                var l = {};

                function g(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = t.postInstallAllowed,
                        o = void 0 !== i && i;
                    u("async", (function(t) {
                        t.forEach((function(e) {
                            return n.apply(void 0, (0, r.Z)(e))
                        })), o && (l[e] = n)
                    }), e)([])
                }

                function p(e) {
                    for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                    var i = l[e];
                    if (i) return i.apply(void 0, t);
                    d(e).before((function(e, n) {
                        n.push(t), e(n)
                    }))
                }

                function v(e, n) {
                    return Object.defineProperties(n, Object.fromEntries(["before", "after", "getHooks", "removeAll"].map((function(n) {
                        return [n, {
                            get: function() {
                                return e[n]
                            }
                        }]
                    })))), n
                }
            },
            24679: function(e, n, t) {
                t.d(n, {
                    B5: function() {
                        return r
                    },
                    Mk: function() {
                        return o
                    },
                    Oh: function() {
                        return a
                    },
                    pX: function() {
                        return i
                    }
                });
                var r = "native",
                    i = "video",
                    o = "banner",
                    a = "adpod"
            },
            70059: function(e, n, t) {
                t.d(n, {
                    Fb: function() {
                        return k
                    },
                    JL: function() {
                        return x
                    },
                    Sg: function() {
                        return h
                    },
                    Ur: function() {
                        return P
                    },
                    e6: function() {
                        return R
                    },
                    eK: function() {
                        return Z
                    },
                    lY: function() {
                        return W
                    },
                    r4: function() {
                        return U
                    },
                    xc: function() {
                        return m
                    }
                });
                var r = t(93324),
                    i = t(71002),
                    o = t(4942),
                    a = t(20265),
                    u = t(64358),
                    c = t(34614),
                    s = t(78653),
                    d = t(5644),
                    f = t(24679);

                function l(e, n) {
                    var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!t) {
                        if (Array.isArray(e) || (t = function(e, n) {
                                if (!e) return;
                                if ("string" == typeof e) return g(e, n);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === t && e.constructor && (t = e.constructor.name);
                                if ("Map" === t || "Set" === t) return Array.from(e);
                                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return g(e, n)
                            }(e)) || n && e && "number" == typeof e.length) {
                            t && (e = t);
                            var r = 0,
                                i = function() {};
                            return {
                                s: i,
                                n: function() {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: i
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, a = !0,
                        u = !1;
                    return {
                        s: function() {
                            t = t.call(e)
                        },
                        n: function() {
                            var e = t.next();
                            return a = e.done, e
                        },
                        e: function(e) {
                            u = !0, o = e
                        },
                        f: function() {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                    }
                }

                function g(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r
                }

                function p(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        }))), t.push.apply(t, r)
                    }
                    return t
                }

                function v(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? p(Object(t), !0).forEach((function(n) {
                            (0, o.Z)(e, n, t[n])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach((function(n) {
                            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                        }))
                    }
                    return e
                }
                var h = [],
                    m = Object.keys(d.FY).map((function(e) {
                        return d.FY[e]
                    })),
                    b = {
                        image: {
                            ortb: {
                                ver: "1.2",
                                assets: [{
                                    required: 1,
                                    id: 1,
                                    img: {
                                        type: 3,
                                        wmin: 100,
                                        hmin: 100
                                    }
                                }, {
                                    required: 1,
                                    id: 2,
                                    title: {
                                        len: 140
                                    }
                                }, {
                                    required: 1,
                                    id: 3,
                                    data: {
                                        type: 1
                                    }
                                }, {
                                    required: 0,
                                    id: 4,
                                    data: {
                                        type: 2
                                    }
                                }, {
                                    required: 0,
                                    id: 5,
                                    img: {
                                        type: 1,
                                        wmin: 20,
                                        hmin: 20
                                    }
                                }]
                            },
                            image: {
                                required: !0
                            },
                            title: {
                                required: !0
                            },
                            sponsoredBy: {
                                required: !0
                            },
                            clickUrl: {
                                required: !0
                            },
                            body: {
                                required: !1
                            },
                            icon: {
                                required: !1
                            }
                        }
                    },
                    y = d.s$,
                    E = d.oF,
                    w = d.V1,
                    C = d.zA,
                    A = d.FY,
                    T = H(w),
                    I = H(y),
                    O = {
                        img: 1,
                        js: 2,
                        1: "img",
                        2: "js"
                    },
                    S = 1;

                function B(e) {
                    if (e && e.type && function(e) {
                            if (!e || !(0, c.q9)(Object.keys(b), e)) return (0, u.logError)("".concat(e, " nativeParam is not supported")), !1;
                            return !0
                        }(e.type) && (e = b[e.type]), !e || !e.ortb || j(e.ortb)) return e
                }

                function k(e) {
                    e.forEach((function(e) {
                        var n = e.nativeParams || (0, a.Z)(e, "mediaTypes.native");
                        n && (e.nativeParams = B(n)), e.nativeParams && (e.nativeOrtbRequest = e.nativeParams.ortb || function(e) {
                            if (!e && !(0, u.isPlainObject)(e)) return void(0, u.logError)("Native assets object is empty or not an object: ", e);
                            var n = {
                                ver: "1.2",
                                assets: []
                            };
                            for (var t in e)
                                if (!C.includes(t))
                                    if (A.hasOwnProperty(t)) {
                                        var r = e[t],
                                            i = 0;
                                        r.required && (0, u.isBoolean)(r.required) && (i = Number(r.required));
                                        var o = {
                                            id: n.assets.length,
                                            required: i
                                        };
                                        if (t in w) o.data = {
                                            type: y[w[t]]
                                        }, r.len && (o.data.len = r.len);
                                        else if ("icon" === t || "image" === t) {
                                            if (o.img = {
                                                    type: "icon" === t ? E.ICON : E.MAIN
                                                }, r.aspect_ratios)
                                                if ((0, u.isArray)(r.aspect_ratios))
                                                    if (r.aspect_ratios.length) {
                                                        var a = r.aspect_ratios[0],
                                                            c = a.min_width,
                                                            s = a.min_height;
                                                        (0, u.isInteger)(c) && (0, u.isInteger)(s) ? (o.img.wmin = c, o.img.hmin = s) : (0, u.logError)("image.aspect_ratios min_width or min_height are invalid: ", c, s);
                                                        var d = r.aspect_ratios.filter((function(e) {
                                                            return e.ratio_width && e.ratio_height
                                                        })).map((function(e) {
                                                            return "".concat(e.ratio_width, ":").concat(e.ratio_height)
                                                        }));
                                                        d.length > 0 && (o.img.ext = {
                                                            aspectratios: d
                                                        })
                                                    } else(0, u.logError)("image.aspect_ratios was passed, but it's empty:", r.aspect_ratios);
                                            else(0, u.logError)("image.aspect_ratios was passed, but it's not a an array:", r.aspect_ratios);
                                            r.sizes && (2 === r.sizes.length && (0, u.isInteger)(r.sizes[0]) && (0, u.isInteger)(r.sizes[1]) ? (o.img.w = r.sizes[0], o.img.h = r.sizes[1], delete o.img.hmin, delete o.img.wmin) : (0, u.logError)("image.sizes was passed, but its value is not an array of integers:", r.sizes))
                                        } else "title" === t ? o.title = {
                                            len: r.len || 140
                                        } : "ext" === t && (o.ext = r, delete o.required);
                                        n.assets.push(o)
                                    } else(0, u.logError)("Unrecognized native asset code: ".concat(t, ". Asset will be ignored."));
                            return n
                        }(e.nativeParams))
                    }))
                }

                function j(e) {
                    var n = e.assets;
                    if (!Array.isArray(n) || 0 === n.length) return (0, u.logError)("assets in mediaTypes.native.ortb is not an array, or it's empty. Assets: ", n), !1;
                    var t = n.map((function(e) {
                        return e.id
                    }));
                    return n.length !== new Set(t).size || t.some((function(e) {
                        return e !== parseInt(e, 10)
                    })) ? ((0, u.logError)("each asset object must have 'id' property, it must be unique and it must be an integer"), !1) : e.hasOwnProperty("eventtrackers") && !Array.isArray(e.eventtrackers) ? ((0, u.logError)("ortb.eventtrackers is not an array. Eventtrackers: ", e.eventtrackers), !1) : n.every((function(e) {
                        return function(e) {
                            if (!(0, u.isPlainObject)(e)) return (0, u.logError)("asset must be an object. Provided asset: ", e), !1;
                            if (e.img) {
                                if (!(0, u.isNumber)(e.img.w) && !(0, u.isNumber)(e.img.wmin)) return (0, u.logError)("for img asset there must be 'w' or 'wmin' property"), !1;
                                if (!(0, u.isNumber)(e.img.h) && !(0, u.isNumber)(e.img.hmin)) return (0, u.logError)("for img asset there must be 'h' or 'hmin' property"), !1
                            } else if (e.title) {
                                if (!(0, u.isNumber)(e.title.len)) return (0, u.logError)("for title asset there must be 'len' property defined"), !1
                            } else if (e.data) {
                                if (!(0, u.isNumber)(e.data.type)) return (0, u.logError)("for data asset 'type' property must be a number"), !1
                            } else if (e.video && !(Array.isArray(e.video.mimes) && Array.isArray(e.video.protocols) && (0, u.isNumber)(e.video.minduration) && (0, u.isNumber)(e.video.maxduration))) return (0, u.logError)("video asset is not properly configured"), !1;
                            return !0
                        }(e)
                    }))
                }

                function U(e) {
                    var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = t.index,
                        i = void 0 === r ? s.K.index : r,
                        o = i.getAdUnit(e);
                    if (!o) return !1;
                    var a = o.nativeOrtbRequest,
                        u = (null === (n = e.native) || void 0 === n ? void 0 : n.ortb) || K(e.native, a);
                    return _(u, a)
                }

                function _(e, n) {
                    if (!(0, a.Z)(e, "link.url")) return (0, u.logError)("native response doesn't have 'link' property. Ortb response: ", e), !1;
                    var t = n.assets.filter((function(e) {
                            return 1 === e.required
                        })).map((function(e) {
                            return e.id
                        })),
                        r = e.assets.map((function(e) {
                            return e.id
                        })),
                        i = t.every((function(e) {
                            return (0, c.q9)(r, e)
                        }));
                    return i || (0, u.logError)("didn't receive a bid with all required assets. Required ids: ".concat(t, ", but received ids in response: ").concat(r)), i
                }

                function R(e, n) {
                    var t = n.native.ortb || z(n.native);
                    return "click" === e.action ? function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).fetchURL,
                            r = void 0 === t ? u.triggerPixel : t;
                        if (n) {
                            var i, o = (e.assets || []).filter((function(e) {
                                    return e.link
                                })).reduce((function(e, n) {
                                    return e[n.id] = n.link, e
                                }), {}),
                                a = (null === (i = e.link) || void 0 === i ? void 0 : i.clicktrackers) || [],
                                c = o[n],
                                s = a;
                            c && (s = c.clicktrackers || []), s.forEach((function(e) {
                                return r(e)
                            }))
                        } else {
                            var d;
                            ((null === (d = e.link) || void 0 === d ? void 0 : d.clicktrackers) || []).forEach((function(e) {
                                return r(e)
                            }))
                        }
                    }(t, null == e ? void 0 : e.assetId) : function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.runMarkup,
                            r = void 0 === t ? function(e) {
                                return (0, u.insertHtmlIntoIframe)(e)
                            } : t,
                            i = n.fetchURL,
                            o = void 0 === i ? u.triggerPixel : i,
                            a = (e.eventtrackers || []).filter((function(e) {
                                return e.event === S
                            })).reduce((function(e, n) {
                                return O.hasOwnProperty(n.method) && e[O[n.method]].push(n.url), e
                            }), {
                                img: [],
                                js: []
                            }),
                            c = a.img,
                            s = a.js;
                        e.imptrackers && (c = c.concat(e.imptrackers));
                        c.forEach((function(e) {
                            return o(e)
                        })), s = s.map((function(e) {
                            return '<script async src="'.concat(e, '"><\/script>')
                        })), e.jstracker && (s = s.concat([e.jstracker]));
                        s.length && r(s.join("\n"))
                    }(t), e.action
                }

                function P(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.index,
                        r = void 0 === t ? s.K.index : t,
                        i = {},
                        o = r.getAdUnit(e);
                    (0, a.Z)(o, "nativeParams.rendererUrl") ? e.native.rendererUrl = N(o.nativeParams.rendererUrl): (0, a.Z)(o, "nativeParams.adTemplate") && (e.native.adTemplate = N(o.nativeParams.adTemplate));
                    var u = !1 !== (0, a.Z)(o, "nativeParams.sendTargetingKeys"),
                        c = M(o),
                        d = v(v({}, e.native), e.native.ext);
                    return delete d.ext, Object.keys(d).forEach((function(n) {
                        var t = c[n],
                            r = N(e.native[n]) || N((0, a.Z)(e, "native.ext.".concat(n)));
                        if ("adTemplate" !== n && t && r) {
                            var s = (0, a.Z)(o, "nativeParams.".concat(n, ".sendId"));
                            if ("boolean" != typeof s && (s = (0, a.Z)(o, "nativeParams.ext.".concat(n, ".sendId"))), s) r = "".concat(t, ":").concat(e.adId);
                            var d = (0, a.Z)(o, "nativeParams.".concat(n, ".sendTargetingKeys"));
                            "boolean" != typeof d && (d = (0, a.Z)(o, "nativeParams.ext.".concat(n, ".sendTargetingKeys"))), ("boolean" == typeof d ? d : u) && (i[t] = r)
                        }
                    })), i
                }
                var q = function(e) {
                    var n;
                    return null === (n = s.K.index.getAdUnit(e)) || void 0 === n ? void 0 : n.nativeOrtbRequest
                };

                function D(e, n, t) {
                    var r, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        o = i.getNativeReq,
                        a = void 0 === o ? q : o,
                        u = {
                            message: "assetResponse",
                            adId: e.adId
                        },
                        c = a(n),
                        s = n.native,
                        f = null === (r = n.native) || void 0 === r ? void 0 : r.ortb,
                        l = {};
                    return c && f && (l = L(f, c), s = v(v({}, n.native), l)), n.native.ortb && (u.ortb = n.native.ortb), u.assets = [], (null == t ? Object.keys(s) : t).forEach((function(e) {
                        if ("adTemplate" === e && s[e]) u.adTemplate = N(s[e]);
                        else if ("rendererUrl" === e && s[e]) u.rendererUrl = N(s[e]);
                        else if ("ext" === e) Object.keys(s[e]).forEach((function(n) {
                            if (s[e][n]) {
                                var t = N(s[e][n]);
                                u.assets.push({
                                    key: n,
                                    value: t
                                })
                            }
                        }));
                        else if (s[e] && d.FY.hasOwnProperty(e)) {
                            var n = N(s[e]);
                            u.assets.push({
                                key: e,
                                value: n
                            })
                        }
                    })), u
                }

                function Z(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = t.getNativeReq,
                        i = void 0 === r ? q : r,
                        o = e.assets.map((function(e) {
                            return (0, u.getKeyByValue)(d.FY, e)
                        }));
                    return D(e, n, o, {
                        getNativeReq: i
                    })
                }

                function x(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = t.getNativeReq,
                        i = void 0 === r ? q : r;
                    return D(e, n, null, {
                        getNativeReq: i
                    })
                }

                function N(e) {
                    return "object" === (0, i.Z)(e) && e.url ? e.url : e
                }

                function M(e) {
                    var n = {};
                    return (0, a.Z)(e, "nativeParams.ext") && Object.keys(e.nativeParams.ext).forEach((function(e) {
                        n[e] = "hb_native_".concat(e)
                    })), v(v({}, d.FY), n)
                }

                function F(e) {
                    if (j(e)) {
                        var n, t = {},
                            r = l(e.assets);
                        try {
                            var i = function() {
                                var e = n.value;
                                if (e.title) {
                                    var r = {
                                        required: !!e.required && Boolean(e.required),
                                        len: e.title.len
                                    };
                                    t.title = r
                                } else if (e.img) {
                                    var i = {
                                        required: !!e.required && Boolean(e.required)
                                    };
                                    e.img.w && e.img.h ? i.sizes = [e.img.w, e.img.h] : e.img.wmin && e.img.hmin && (i.aspect_ratios = {
                                        min_width: e.img.wmin,
                                        min_height: e.img.hmin,
                                        ratio_width: e.img.wmin,
                                        ratio_height: e.img.hmin
                                    }), e.img.type === E.MAIN ? t.image = i : t.icon = i
                                } else if (e.data) {
                                    var o = Object.keys(y).find((function(n) {
                                            return y[n] === e.data.type
                                        })),
                                        a = Object.keys(w).find((function(e) {
                                            return w[e] === o
                                        }));
                                    t[a] = {
                                        required: !!e.required && Boolean(e.required)
                                    }, e.data.len && (t[a].len = e.data.len)
                                }
                            };
                            for (r.s(); !(n = r.n()).done;) i()
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        return t
                    }
                }

                function W(e) {
                    if (!e || !(0, u.isArray)(e)) return e;
                    if (!e.some((function(e) {
                            var n;
                            return null === (n = ((null == e ? void 0 : e.mediaTypes) || {})[f.B5]) || void 0 === n ? void 0 : n.ortb
                        }))) return e;
                    var n, t = (0, u.deepClone)(e),
                        r = l(t);
                    try {
                        for (r.s(); !(n = r.n()).done;) {
                            var i = n.value;
                            i.mediaTypes && i.mediaTypes[f.B5] && i.mediaTypes[f.B5].ortb && (i.mediaTypes[f.B5] = Object.assign((0, u.pick)(i.mediaTypes[f.B5], C), F(i.mediaTypes[f.B5].ortb)), i.nativeParams = B(i.mediaTypes[f.B5]))
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                    return t
                }

                function z(e) {
                    var n = {
                        link: {},
                        eventtrackers: []
                    };
                    return Object.entries(e).forEach((function(e) {
                        var t = (0, r.Z)(e, 2),
                            i = t[0],
                            o = t[1];
                        switch (i) {
                            case "clickUrl":
                                n.link.url = o;
                                break;
                            case "clickTrackers":
                                n.link.clicktrackers = Array.isArray(o) ? o : [o];
                                break;
                            case "impressionTrackers":
                                (Array.isArray(o) ? o : [o]).forEach((function(e) {
                                    n.eventtrackers.push({
                                        event: S,
                                        method: O.img,
                                        url: e
                                    })
                                }));
                                break;
                            case "javascriptTrackers":
                                n.jstracker = Array.isArray(o) ? o.join("") : o
                        }
                    })), n
                }

                function K(e, n) {
                    var t = v(v({}, z(e)), {}, {
                        assets: []
                    });

                    function r(e, r) {
                        var i = n.assets.find(e);
                        null != i && (r(i = (0, u.deepClone)(i)), t.assets.push(i))
                    }
                    return Object.keys(e).filter((function(n) {
                        return !!e[n]
                    })).forEach((function(n) {
                        var t = e[n];
                        switch (n) {
                            case "title":
                                r((function(e) {
                                    return null != e.title
                                }), (function(e) {
                                    e.title = {
                                        text: t
                                    }
                                }));
                                break;
                            case "image":
                            case "icon":
                                var i = "image" === n ? E.MAIN : E.ICON;
                                r((function(e) {
                                    return null != e.img && e.img.type === i
                                }), (function(e) {
                                    e.img = {
                                        url: t
                                    }
                                }));
                                break;
                            default:
                                n in w && r((function(e) {
                                    return null != e.data && e.data.type === y[w[n]]
                                }), (function(e) {
                                    e.data = {
                                        value: t
                                    }
                                }))
                        }
                    })), t
                }

                function L(e, n) {
                    var t = {},
                        r = (null == n ? void 0 : n.assets) || [];
                    t.clickUrl = e.link.url, t.privacyLink = e.privacy;
                    var i, o = l((null == e ? void 0 : e.assets) || []);
                    try {
                        var a = function() {
                            var e = i.value,
                                n = r.find((function(n) {
                                    return e.id === n.id
                                }));
                            e.title ? t.title = e.title.text : e.img ? t[n.img.type === E.MAIN ? "image" : "icon"] = e.img.url : e.data && (t[T[I[n.data.type]]] = e.data.value)
                        };
                        for (o.s(); !(i = o.n()).done;) a()
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                    return t
                }

                function H(e) {
                    var n = {};
                    for (var t in e) n[e[t]] = t;
                    return n
                }
            },
            34614: function(e, n, t) {
                function r(e, n, t) {
                    return e && e.includes(n, t) || !1
                }

                function i() {
                    return Array.from.apply(Array, arguments)
                }

                function o(e, n, t) {
                    return e && e.find(n, t)
                }

                function a(e, n, t) {
                    return e && e.findIndex(n, t)
                }
                t.d(n, {
                    Oc: function() {
                        return i
                    },
                    cx: function() {
                        return a
                    },
                    q9: function() {
                        return r
                    },
                    sE: function() {
                        return o
                    }
                })
            },
            23866: function(e, n, t) {
                t.d(n, {
                    zh: function() {
                        return ie
                    },
                    O5: function() {
                        return ae
                    },
                    ew: function() {
                        return se
                    }
                });
                var r = t(93324),
                    i = t(4942),
                    o = t(78640),
                    a = t(64358),
                    u = t(20265),
                    c = t(96475),
                    s = t(52021),
                    d = t(70059),
                    f = t(5644),
                    l = t(78653),
                    g = t(34614),
                    p = t(35706),
                    v = t(3193),
                    h = f.FP,
                    m = h.AD_RENDER_FAILED,
                    b = h.AD_RENDER_SUCCEEDED;

                function y(e) {
                    var n = e.reason,
                        t = e.message,
                        r = e.bid,
                        i = e.id,
                        o = {
                            reason: n,
                            message: t
                        };
                    r && (o.bid = r), i && (o.adId = i), (0, a.logError)(t), s.j8(m, o)
                }

                function E(e) {
                    var n = e.doc,
                        t = e.bid,
                        r = e.id,
                        i = {
                            doc: n
                        };
                    t && (i.bid = t), r && (i.adId = r), s.j8(b, i)
                }
                var w = f.FP.BID_WON,
                    C = f.FP.STALE_RENDER,
                    A = new WeakSet,
                    T = {
                        "Prebid Request": function(e, n, t) {
                            if (null == t) return void y({
                                reason: f.q_.CANNOT_FIND_AD,
                                message: "Cannot find ad '".concat(n.adId, "' for cross-origin render request"),
                                id: n.adId
                            });
                            if (t.status === f.UE.fe && ((0, a.logWarn)("Ad id ".concat(t.adId, " has been rendered before")), s.j8(C, t), (0, u.Z)(v.vc.getConfig("auctionOptions"), "suppressStaleRender"))) return;
                            try {
                                ! function(e, n) {
                                    var t = e.adId,
                                        r = e.ad,
                                        i = e.adUrl,
                                        o = e.width,
                                        u = e.height,
                                        c = e.renderer,
                                        s = e.cpm,
                                        d = e.originalCpm;
                                    (0, p.Pd)(c) ? (0, p._U)(c, e) : t && (O(e), n({
                                        message: "Prebid Response",
                                        ad: (0, a.replaceAuctionPrice)(r, d || s),
                                        adUrl: (0, a.replaceAuctionPrice)(i, d || s),
                                        adId: t,
                                        width: o,
                                        height: u
                                    }))
                                }(t, e)
                            } catch (e) {
                                return void y({
                                    reason: f.q_.EXCEPTION,
                                    message: e.message,
                                    id: n.adId,
                                    bid: t
                                })
                            }
                            l.K.addWinningBid(t), s.j8(w, t)
                        },
                        "Prebid Event": function(e, n, t) {
                            if (null == t) return void(0, a.logError)("Cannot find ad '".concat(n.adId, "' for x-origin event request"));
                            if (t.status !== f.UE.fe) return void(0, a.logWarn)("Received x-origin event request without corresponding render request for ad '".concat(n.adId, "'"));
                            switch (n.event) {
                                case f.FP.AD_RENDER_FAILED:
                                    y({
                                        bid: t,
                                        id: n.adId,
                                        reason: n.info.reason,
                                        message: n.info.message
                                    });
                                    break;
                                case f.FP.AD_RENDER_SUCCEEDED:
                                    E({
                                        doc: null,
                                        bid: t,
                                        id: n.adId
                                    });
                                    break;
                                default:
                                    (0, a.logError)("Received x-origin event request for unsupported event: '".concat(n.event, "' (adId: '").concat(n.adId, "')"))
                            }
                        }
                    };

                function I(e) {
                    var n = e.message ? "message" : "data",
                        t = {};
                    try {
                        t = JSON.parse(e[n])
                    } catch (e) {
                        return
                    }
                    if (t && t.adId && t.message) {
                        var r = (0, g.sE)(l.K.getBidsReceived(), (function(e) {
                            return e.adId === t.adId
                        }));
                        T.hasOwnProperty(t.message) && T[t.message](function(e) {
                            return null == e.origin && 0 === e.ports.length ? function() {
                                var e = "Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";
                                throw (0, a.logError)(e), new Error(e)
                            } : e.ports.length > 0 ? function(n) {
                                e.ports[0].postMessage(JSON.stringify(n))
                            } : function(n) {
                                e.source.postMessage(JSON.stringify(n), e.origin)
                            }
                        }(e), t, r)
                    }
                }

                function O(e) {
                    var n = e.adId,
                        t = e.adUnitCode,
                        r = e.width,
                        i = e.height;
                    ["div", "iframe"].forEach((function(e) {
                        var o = function(e) {
                            var r = function(e, n) {
                                    return (0, a.isGptPubadsDefined)() ? function(e) {
                                        var n = (0, g.sE)(window.googletag.pubads().getSlots(), (function(n) {
                                            return (0, g.sE)(n.getTargetingKeys(), (function(t) {
                                                return (0, g.q9)(n.getTargeting(t), e)
                                            }))
                                        }));
                                        return n ? n.getSlotElementId() : null
                                    }(e) : (0, a.isApnGetTagDefined)() ? function(e) {
                                        var n = window.apntag.getTag(e);
                                        return n && n.targetId
                                    }(n) : n
                                }(n, t),
                                i = document.getElementById(r);
                            return i && i.querySelector(e)
                        }(e + ':not([style*="display: none"])');
                        if (o) {
                            var u = o.style;
                            u.width = r ? r + "px" : "100%", u.height = i + "px"
                        } else(0, a.logWarn)("Unable to locate matching page element for adUnitCode ".concat(t, ".  Can't resize it to ad's dimensions.  Please review setup."))
                    }))
                }
                Object.assign(T, {
                    "Prebid Native": function(e, n, t) {
                        if (null == t) return void(0, a.logError)("Cannot find ad '".concat(n.adId, "' for x-origin event request"));
                        A.has(t) || (A.add(t), l.K.addWinningBid(t), s.j8(w, t));
                        switch (n.action) {
                            case "assetRequest":
                                e((0, d.eK)(n, t));
                                break;
                            case "allAssetRequest":
                                e((0, d.JL)(n, t));
                                break;
                            case "resizeNativeHeight":
                                t.height = n.height, t.width = n.width, O(t);
                                break;
                            default:
                                (0, d.e6)(n, t)
                        }
                    }
                });
                var S = t(11974),
                    B = t(18621),
                    k = t(92797),
                    j = t(53777),
                    U = t(875),
                    _ = t(69626),
                    R = t(15164),
                    P = t(9528),
                    q = t(99128),
                    D = (0, o.R)(),
                    Z = S.k_.triggerUserSyncs,
                    x = f.FP,
                    N = x.ADD_AD_UNITS,
                    M = x.BID_WON,
                    F = x.REQUEST_BIDS,
                    W = x.SET_TARGETING,
                    z = x.STALE_RENDER,
                    K = f.q_,
                    L = K.PREVENT_WRITING_ON_MAIN_DOCUMENT,
                    H = K.NO_AD,
                    G = K.EXCEPTION,
                    V = K.CANNOT_FIND_AD,
                    Q = K.MISSING_DOC_OR_ADID,
                    J = {
                        bidWon: function(e) {
                            var n = l.K.getBidsRequested().map((function(e) {
                                return e.bids.map((function(e) {
                                    return e.adUnitCode
                                }))
                            })).reduce(a.flatten).filter(a.uniques);
                            if (!(0, a.contains)(n, e)) return void(0, a.logError)('The "' + e + '" placement is not defined.');
                            return !0
                        }
                    };

                function Y(e, n, t) {
                    e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = n, e.defaultView.frameElement.height = t)
                }

                function X(e, n) {
                    var t = [];
                    return (0, a.isArray)(e) && (n ? e.length === n : e.length > 0) && (e.every((function(e) {
                        return (0, a.isArrayOfNums)(e, 2)
                    })) ? t = e : (0, a.isArrayOfNums)(e, 2) && t.push(e)), t
                }

                function $(e) {
                    var n = (0, a.deepClone)(e),
                        t = n.mediaTypes.banner,
                        r = X(t.sizes);
                    return r.length > 0 ? (t.sizes = r, n.sizes = r) : ((0, a.logError)("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."), delete n.mediaTypes.banner), n
                }

                function ee(e) {
                    var n = (0, a.deepClone)(e),
                        t = n.mediaTypes.video;
                    if (t.playerSize) {
                        var r = "number" == typeof t.playerSize[0] ? 2 : 1,
                            i = X(t.playerSize, r);
                        i.length > 0 ? (2 === r && (0, a.logInfo)("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), t.playerSize = i, n.sizes = i) : ((0, a.logError)("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete n.mediaTypes.video.playerSize)
                    }
                    return n
                }

                function ne(e) {
                    var n = (0, a.deepClone)(e),
                        t = n.mediaTypes.native;
                    if (t.ortb) {
                        var r = Object.keys(f.FY).filter((function(e) {
                                return f.FY[e].includes("hb_native_")
                            })),
                            i = Object.keys(t).filter((function(e) {
                                return r.includes(e)
                            }));
                        i.length > 0 && ((0, a.logError)("when using native OpenRTB format, you cannot use legacy native properties. Deleting ".concat(i, " keys from request.")), i.forEach((function(e) {
                            return delete n.mediaTypes.native[e]
                        })))
                    }
                    return t.image && t.image.sizes && !Array.isArray(t.image.sizes) && ((0, a.logError)("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete n.mediaTypes.native.image.sizes), t.image && t.image.aspect_ratios && !Array.isArray(t.image.aspect_ratios) && ((0, a.logError)("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete n.mediaTypes.native.image.aspect_ratios), t.icon && t.icon.sizes && !Array.isArray(t.icon.sizes) && ((0, a.logError)("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete n.mediaTypes.native.icon.sizes), n
                }

                function te(e, n) {
                    var t = (0, u.Z)(e, "mediaTypes.".concat(n, ".pos"));
                    if (!(0, a.isNumber)(t) || isNaN(t) || !isFinite(t)) {
                        var r = "Value of property 'pos' on ad unit ".concat(e.code, " should be of type: Number");
                        (0, a.logWarn)(r), s.j8(f.FP.AUCTION_DEBUG, {
                            type: "WARNING",
                            arguments: r
                        }), delete e.mediaTypes[n].pos
                    }
                    return e
                }

                function re(e) {
                    var n = function(n) {
                            return "adUnit.code '".concat(e.code, "' ").concat(n)
                        },
                        t = e.mediaTypes,
                        r = e.bids;
                    return null == r || (0, a.isArray)(r) ? null == r && null == e.ortb2Imp ? ((0, a.logError)(n("has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction")), null) : t && 0 !== Object.keys(t).length ? (null == e.ortb2Imp || null != r && 0 !== r.length || (e.bids = [{
                        bidder: null
                    }], (0, a.logMessage)(n("defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"))), e) : ((0, a.logError)(n("does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed.")), null) : ((0, a.logError)(n("defines 'adUnit.bids' that is not an array. Removing adUnit from auction")), null)
                }(0, j.dF)(), D.bidderSettings = D.bidderSettings || {}, D.libLoaded = !0, D.version = "v7.17.0", (0, a.logInfo)("Prebid.js v7.17.0 loaded"), D.installedModules = D.installedModules || [], D.adUnits = D.adUnits || [], D.triggerUserSyncs = Z;
                var ie = {
                    validateAdUnit: re,
                    validateBannerMediaType: $,
                    validateVideoMediaType: ee,
                    validateSizes: X
                };
                Object.assign(ie, {
                    validateNativeMediaType: ne
                });
                var oe, ae = (0, k.z3)("sync", (function(e) {
                    var n = [];
                    return e.forEach((function(e) {
                        if (null != (e = re(e))) {
                            var t, r, i, o = e.mediaTypes;
                            o.banner && (t = $(e), o.banner.hasOwnProperty("pos") && (t = te(t, "banner"))), o.video && (r = ee(t || e), o.video.hasOwnProperty("pos") && (r = te(r, "video"))), o.native && (i = ne(r || (t || e)));
                            var a = Object.assign({}, t, r, i);
                            n.push(a)
                        }
                    })), n
                }), "checkAdUnitSetup");

                function ue(e) {
                    var n = l.K[e]().filter(a.bind.call(a.adUnitsFilter, this, l.K.getAdUnitCodes())),
                        t = l.K.getLastAuctionId();
                    return n.map((function(e) {
                        return e.adUnitCode
                    })).filter(a.uniques).map((function(e) {
                        return n.filter((function(n) {
                            return n.auctionId === t && n.adUnitCode === e
                        }))
                    })).filter((function(e) {
                        return e && e[0] && e[0].adUnitCode
                    })).map((function(e) {
                        return (0, i.Z)({}, e[0].adUnitCode, {
                            bids: e
                        })
                    })).reduce((function(e, n) {
                        return Object.assign(e, n)
                    }), {})
                }

                function ce(e, n, t) {
                    var r = n.querySelector(t);
                    e.parentNode && e.parentNode === r || (0, a.insertElement)(e, n, t)
                }
                D.getAdserverTargetingForAdUnitCodeStr = function(e) {
                    if ((0, a.logInfo)("Invoking epbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                        var n = D.getAdserverTargetingForAdUnitCode(e);
                        return (0, a.transformAdServerTargetingObj)(n)
                    }(0, a.logMessage)("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
                }, D.getHighestUnusedBidResponseForAdUnitCode = function(e) {
                    if (e) {
                        var n = l.K.getAllBidsForAdUnitCode(e).filter(B.u8.isUnusedBid).filter(B.u8.isBidNotExpired);
                        return n.length ? n.reduce(a.getHighestCpm) : {}
                    }(0, a.logMessage)("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode")
                }, D.getAdserverTargetingForAdUnitCode = function(e) {
                    return D.getAdserverTargeting(e)[e]
                }, D.getAdserverTargeting = function(e) {
                    return (0, a.logInfo)("Invoking epbjs.getAdserverTargeting", arguments), B.q0.getAllTargeting(e)
                }, D.getConsentMetadata = function() {
                    return (0, a.logInfo)("Invoking epbjs.getConsentMetadata"), {
                        gdpr: P.rp.getConsentMeta(),
                        usp: P.nX.getConsentMeta(),
                        coppa: !!v.vc.getConfig("coppa")
                    }
                }, D.getNoBids = function() {
                    return (0, a.logInfo)("Invoking epbjs.getNoBids", arguments), ue("getNoBids")
                }, D.getNoBidsForAdUnitCode = function(e) {
                    return {
                        bids: l.K.getNoBids().filter((function(n) {
                            return n.adUnitCode === e
                        }))
                    }
                }, D.getBidResponses = function() {
                    return (0, a.logInfo)("Invoking epbjs.getBidResponses", arguments), ue("getBidsReceived")
                }, D.getBidResponsesForAdUnitCode = function(e) {
                    return {
                        bids: l.K.getBidsReceived().filter((function(n) {
                            return n.adUnitCode === e
                        }))
                    }
                }, D.setTargetingForGPTAsync = function(e, n) {
                    if ((0, a.logInfo)("Invoking epbjs.setTargetingForGPTAsync", arguments), (0, a.isGptPubadsDefined)()) {
                        var t = B.q0.getAllTargeting(e);
                        B.q0.resetPresetTargeting(e, n), B.q0.setTargetingForGPT(t, n), Object.keys(t).forEach((function(e) {
                            Object.keys(t[e]).forEach((function(n) {
                                "hb_adid" === n && l.K.setStatusForBids(t[e][n], f.UE.CK)
                            }))
                        })), s.j8(W, t)
                    } else(0, a.logError)("window.googletag is not defined on the page")
                }, D.setTargetingForAst = function(e) {
                    (0, a.logInfo)("Invoking epbjs.setTargetingForAn", arguments), B.q0.isApntagDefined() ? (B.q0.setTargetingForAst(e), s.j8(W, B.q0.getAllTargeting())) : (0, a.logError)("window.apntag is not defined on the page")
                }, D.renderAd = (0, k.z3)("async", (function(e, n, t) {
                    if ((0, a.logInfo)("Invoking epbjs.renderAd", arguments), (0, a.logMessage)("Calling renderAd with adId :" + n), e && n) try {
                        var r = l.K.findBidByAdId(n);
                        if (r) {
                            var i = !0;
                            if (r && r.status === f.UE.fe && ((0, a.logWarn)("Ad id ".concat(r.adId, " has been rendered before")), s.j8(z, r), (0, u.Z)(v.vc.getConfig("auctionOptions"), "suppressStaleRender") && (i = !1)), i) {
                                if (r.ad = (0, a.replaceAuctionPrice)(r.ad, r.originalCpm || r.cpm), r.adUrl = (0, a.replaceAuctionPrice)(r.adUrl, r.originalCpm || r.cpm), t && t.clickThrough) {
                                    var o = t.clickThrough;
                                    r.ad = (0, a.replaceClickThrough)(r.ad, o), r.adUrl = (0, a.replaceClickThrough)(r.adUrl, o)
                                }
                                l.K.addWinningBid(r), s.j8(M, r);
                                var c = r.height,
                                    d = r.width,
                                    g = r.ad,
                                    h = r.mediaType,
                                    m = r.adUrl,
                                    b = r.renderer,
                                    w = document.createComment("Creative ".concat(r.creativeId, " served by ").concat(r.bidder, " Prebid.js Header Bidding"));
                                if ((0, a.insertElement)(w, e, "html"), (0, p.Pd)(b))(0, p._U)(b, r, e), ce(w, e, "html"), E({
                                    doc: e,
                                    bid: r,
                                    id: n
                                });
                                else if (e === document && !(0, a.inIframe)() || "video" === h) {
                                    var C = "Error trying to write ad. Ad render call ad id ".concat(n, " was prevented from writing to the main document.");
                                    y({
                                        reason: L,
                                        message: C,
                                        bid: r,
                                        id: n
                                    })
                                } else if (g) e.write(g), e.close(), Y(e, d, c), ce(w, e, "html"), (0, a.callBurl)(r), E({
                                    doc: e,
                                    bid: r,
                                    id: n
                                });
                                else if (m) {
                                    var A = (0, a.createInvisibleIframe)();
                                    A.height = c, A.width = d, A.style.display = "inline", A.style.overflow = "hidden", A.src = m, (0, a.insertElement)(A, e, "body"), Y(e, d, c), ce(w, e, "html"), (0, a.callBurl)(r), E({
                                        doc: e,
                                        bid: r,
                                        id: n
                                    })
                                } else {
                                    var T = "Error trying to write ad. No ad for bid response id: ".concat(n);
                                    y({
                                        reason: H,
                                        message: T,
                                        bid: r,
                                        id: n
                                    })
                                }
                            }
                        } else {
                            var I = "Error trying to write ad. Cannot find ad by given id : ".concat(n);
                            y({
                                reason: V,
                                message: I,
                                id: n
                            })
                        }
                    } catch (e) {
                        var O = "Error trying to write ad Id :".concat(n, " to the page:").concat(e.message);
                        y({
                            reason: G,
                            message: O,
                            id: n
                        })
                    } else {
                        var S = "Error trying to write ad Id :".concat(n, " to the page. Missing document or adId");
                        y({
                            reason: Q,
                            message: S,
                            id: n
                        })
                    }
                })), D.removeAdUnit = function(e) {
                    ((0, a.logInfo)("Invoking epbjs.removeAdUnit", arguments), e) ? ((0, a.isArray)(e) ? e : [e]).forEach((function(e) {
                        for (var n = D.adUnits.length - 1; n >= 0; n--) D.adUnits[n].code === e && D.adUnits.splice(n, 1)
                    })): D.adUnits = []
                }, D.requestBids = (oe = (0, k.z3)("async", (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.bidsBackHandler,
                        t = e.timeout,
                        i = e.adUnits,
                        o = e.adUnitCodes,
                        u = e.labels,
                        c = e.auctionId,
                        d = e.ortb2,
                        f = e.metrics;
                    s.j8(F);
                    var l = t || v.vc.getConfig("bidderTimeout");
                    (0, a.logInfo)("Invoking epbjs.requestBids", arguments);
                    var g = {
                        global: (0, a.mergeDeep)({}, v.vc.getAnyConfig("ortb2") || {}, d || {}),
                        bidder: Object.fromEntries(Object.entries(v.vc.getBidderConfig()).map((function(e) {
                            var n = (0, r.Z)(e, 2);
                            return [n[0], n[1].ortb2]
                        })).filter((function(e) {
                            var n = (0, r.Z)(e, 2);
                            return n[0], null != n[1]
                        })))
                    };
                    return se({
                        bidsBackHandler: n,
                        timeout: l,
                        adUnits: i,
                        adUnitCodes: o,
                        labels: u,
                        auctionId: c,
                        ortb2Fragments: g,
                        metrics: f
                    })
                }), "requestBids"), (0, k.IF)(oe, (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.metrics = (0, q.V6)(), e.metrics.checkpoint("requestBids");
                    var n = e.adUnits || D.adUnits;
                    return e.adUnits = (0, a.isArray)(n) ? n.slice() : [n], oe.call(this, e)
                })));
                var se = (0, k.z3)("async", (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.bidsBackHandler,
                        t = e.timeout,
                        r = e.adUnits,
                        i = e.adUnitCodes,
                        o = e.labels,
                        u = e.auctionId,
                        s = e.ortb2Fragments,
                        d = e.metrics,
                        f = (0, P.uV)(v.vc.getConfig("s2sConfig") || []);
                    if (r = (0, q.Bf)(d).measureTime("requestBids.validate", (function() {
                            return ae(r)
                        })), i && i.length ? r = r.filter((function(e) {
                            return (0, g.q9)(i, e.code)
                        })) : i = r && r.map((function(e) {
                            return e.code
                        })), r.forEach((function(e) {
                            var n = Object.keys(e.mediaTypes || {
                                    banner: "banner"
                                }),
                                t = e.bids.map((function(e) {
                                    return e.bidder
                                })),
                                r = P.ZP.bidderRegistry,
                                i = t.filter((function(e) {
                                    return !f.has(e)
                                }));
                            e.transactionId = (0, a.generateUUID)(), (0, c.N)(e, "ortb2Imp.ext.tid", e.transactionId), i.forEach((function(t) {
                                var i = r[t],
                                    o = i && i.getSpec && i.getSpec(),
                                    u = o && o.supportedMediaTypes || ["banner"];
                                n.some((function(e) {
                                    return (0, g.q9)(u, e)
                                })) ? U.f.incrementBidderRequestsCounter(e.code, t) : ((0, a.logWarn)((0, a.unsupportedBidderMessage)(e, t)), e.bids = e.bids.filter((function(e) {
                                    return e.bidder !== t
                                })))
                            })), U.f.incrementRequestsCounter(e.code)
                        })), r && 0 !== r.length) {
                        var p = l.K.createAuction({
                                adUnits: r,
                                adUnitCodes: i,
                                callback: n,
                                cbTimeout: t,
                                labels: o,
                                auctionId: u,
                                ortb2Fragments: s,
                                metrics: d
                            }),
                            h = r.length;
                        h > 15 && (0, a.logInfo)("Current auction ".concat(p.getAuctionId(), " contains ").concat(h, " adUnits."), r), i.forEach((function(e) {
                            return B.q0.setLatestAuctionForAdUnit(e, p.getAuctionId())
                        })), p.callBids()
                    } else if ((0, a.logMessage)("No adUnits configured. No bids requested."), "function" == typeof n) try {
                        n()
                    } catch (e) {
                        (0, a.logError)("Error executing bidsBackHandler", null, e)
                    }
                }), "startAuction");
                D.requestBids.before((function(e, n) {
                    function t(e) {
                        for (var n; n = e.shift();) n()
                    }
                    t(R.Ld), t(de), e.call(this, n)
                }), 49), D.addAdUnits = function(e) {
                    (0, a.logInfo)("Invoking epbjs.addAdUnits", arguments), D.adUnits.push.apply(D.adUnits, (0, a.isArray)(e) ? e : [e]), s.j8(N)
                }, D.onEvent = function(e, n, t) {
                    (0, a.logInfo)("Invoking epbjs.onEvent", arguments), (0, a.isFn)(n) ? !t || J[e].call(null, t) ? s.on(e, n, t) : (0, a.logError)('The id provided is not valid for event "' + e + '" and no handler was set.'): (0, a.logError)('The event handler provided is not a function and was not set on event "' + e + '".')
                }, D.offEvent = function(e, n, t) {
                    (0, a.logInfo)("Invoking epbjs.offEvent", arguments), t && !J[e].call(null, t) || s.S1(e, n, t)
                }, D.getEvents = function() {
                    return (0, a.logInfo)("Invoking epbjs.getEvents"), s.vw()
                }, D.registerBidAdapter = function(e, n) {
                    (0, a.logInfo)("Invoking epbjs.registerBidAdapter", arguments);
                    try {
                        P.ZP.registerBidAdapter(e(), n)
                    } catch (e) {
                        (0, a.logError)("Error registering bidder adapter : " + e.message)
                    }
                }, D.registerAnalyticsAdapter = function(e) {
                    (0, a.logInfo)("Invoking epbjs.registerAnalyticsAdapter", arguments);
                    try {
                        P.ZP.registerAnalyticsAdapter(e)
                    } catch (e) {
                        (0, a.logError)("Error registering analytics adapter : " + e.message)
                    }
                }, D.createBid = function(e) {
                    return (0, a.logInfo)("Invoking epbjs.createBid", arguments), (0, _.m)(e)
                };
                var de = [],
                    fe = (0, k.z3)("async", (function(e) {
                        e && !(0, a.isEmpty)(e) ? ((0, a.logInfo)("Invoking epbjs.enableAnalytics for: ", e), P.ZP.enableAnalytics(e)) : (0, a.logError)("epbjs.enableAnalytics should be called with option {}")
                    }), "enableAnalyticsCb");

                function le(e) {
                    e.forEach((function(e) {
                        if (void 0 === e.called) try {
                            e.call(), e.called = !0
                        } catch (e) {
                            (0, a.logError)("Error processing command :", "prebid.js", e)
                        }
                    }))
                }
                D.enableAnalytics = function(e) {
                    de.push(fe.bind(this, e))
                }, D.aliasBidder = function(e, n, t) {
                    (0, a.logInfo)("Invoking epbjs.aliasBidder", arguments), e && n ? P.ZP.aliasBidAdapter(e, n, t) : (0, a.logError)("bidderCode and alias must be passed as arguments", "epbjs.aliasBidder")
                }, D.getAllWinningBids = function() {
                    return l.K.getAllWinningBids()
                }, D.getAllPrebidWinningBids = function() {
                    return l.K.getBidsReceived().filter((function(e) {
                        return e.status === f.UE.CK
                    }))
                }, D.getHighestCpmBids = function(e) {
                    return B.q0.getWinningBids(e)
                }, D.markWinningBidAsUsed = function(e) {
                    var n = [];
                    e.adUnitCode && e.adId ? n = l.K.getBidsReceived().filter((function(n) {
                        return n.adId === e.adId && n.adUnitCode === e.adUnitCode
                    })) : e.adUnitCode ? n = B.q0.getWinningBids(e.adUnitCode) : e.adId ? n = l.K.getBidsReceived().filter((function(n) {
                        return n.adId === e.adId
                    })) : (0, a.logWarn)("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."), n.length > 0 && (n[0].status = f.UE.fe)
                }, D.getConfig = v.vc.getAnyConfig, D.readConfig = v.vc.readAnyConfig, D.mergeConfig = v.vc.mergeConfig, D.mergeBidderConfig = v.vc.mergeBidderConfig, D.setConfig = v.vc.setConfig, D.setBidderConfig = v.vc.setBidderConfig, D.que.push((function() {
                    window.addEventListener("message", I, !1)
                })), D.cmd.push = function(e) {
                    if ("function" == typeof e) try {
                        e.call()
                    } catch (e) {
                        (0, a.logError)("Error processing command :", e.message, e.stack)
                    } else(0, a.logError)("Commands written into epbjs.cmd.push must be wrapped in a function")
                }, D.que.push = D.cmd.push, D.processQueue = function() {
                    k.z3.ready(), le(D.que), le(D.cmd)
                }
            },
            78640: function(e, n, t) {
                function r() {
                    return window.epbjs
                }
                t.d(n, {
                    R: function() {
                        return r
                    }
                }), window.epbjs = window.epbjs || {}, window.epbjs.cmd = window.epbjs.cmd || [], window.epbjs.que = window.epbjs.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("epbjs")
            },
            25102: function(e, n, t) {
                t.d(n, {
                    hh: function() {
                        return a
                    },
                    nH: function() {
                        return u
                    }
                });
                var r = t(3193),
                    i = t(64358);

                function o(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                    if (!e) return e;
                    if (/\w+:\/\//.exec(e)) return e;
                    var t = n.location.protocol;
                    try {
                        t = n.top.location.protocol
                    } catch (e) {}
                    return /^\/\//.exec(e) ? t + e : "".concat(t, "//").concat(e)
                }

                function a(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.noLeadingWww,
                        r = void 0 !== t && t,
                        i = n.noPort,
                        a = void 0 !== i && i;
                    try {
                        e = new URL(o(e))
                    } catch (e) {
                        return
                    }
                    return e = a ? e.hostname : e.host, r && e.startsWith("www.") && (e = e.substring(4)), e
                }
                var u = function(e) {
                    function n(e) {
                        try {
                            var n = e.querySelector("link[rel='canonical']");
                            if (null !== n) return n.href
                        } catch (e) {}
                        return null
                    }
                    return function() {
                        var t, u, c, s, d = [],
                            f = function(e) {
                                try {
                                    if (!e.location.ancestorOrigins) return;
                                    return e.location.ancestorOrigins
                                } catch (e) {}
                            }(e),
                            l = r.vc.getConfig("maxNestedIframes"),
                            g = !1,
                            p = 0,
                            v = !1,
                            h = !1,
                            m = !1;
                        do {
                            var b = t,
                                y = h,
                                E = void 0,
                                w = !1,
                                C = null;
                            h = !1, t = t ? t.parent : e;
                            try {
                                E = t.location.href || null
                            } catch (e) {
                                w = !0
                            }
                            if (w)
                                if (y) {
                                    var A = b.context;
                                    try {
                                        u = C = A.sourceUrl, m = !0, v = !0, t === e.top && (g = !0), A.canonicalUrl && (c = A.canonicalUrl)
                                    } catch (e) {}
                                } else {
                                    (0, i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                                    try {
                                        var T = b.document.referrer;
                                        T && (C = T, t === e.top && (g = !0))
                                    } catch (e) {}!C && f && f[p - 1] && (C = f[p - 1], t === e.top && (m = !0)), C && !v && (u = C)
                                }
                            else {
                                if (E && (u = C = E, v = !1, t === e.top)) {
                                    g = !0;
                                    var I = n(t.document);
                                    I && (c = I)
                                }
                                t.context && t.context.sourceUrl && (h = !0)
                            }
                            d.push(C), p++
                        } while (t !== e.top && p < l);
                        d.reverse();
                        try {
                            s = e.top.document.referrer
                        } catch (e) {}
                        var O = g || m ? u : null,
                            S = r.vc.getConfig("pageUrl") || c || null,
                            B = o(S, e) || O;
                        return {
                            reachedTop: g,
                            isAmp: v,
                            numIframes: p - 1,
                            stack: d,
                            topmostLocation: u || null,
                            location: O,
                            canonicalUrl: S,
                            page: B,
                            domain: a(B) || null,
                            ref: s || null,
                            legacy: {
                                reachedTop: g,
                                isAmp: v,
                                numIframes: p - 1,
                                stack: d,
                                referer: u || null,
                                canonicalUrl: S
                            }
                        }
                    }
                }(window)
            },
            74247: function(e, n, t) {
                t.d(n, {
                    UB: function() {
                        return p
                    },
                    lO: function() {
                        return f
                    }
                });
                var r = t(71002),
                    i = t(3193),
                    o = t(64358),
                    a = t(20265),
                    u = t(34614),
                    c = t(24679),
                    s = [];

                function d(e, n) {
                    return e.labelAll ? {
                        labelAll: !0,
                        labels: e.labelAll,
                        activeLabels: n
                    } : {
                        labelAll: !1,
                        labels: e.labelAny,
                        activeLabels: n
                    }
                }

                function f(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
                        t = g(n);
                    return !t.shouldFilter || !!t.sizesSupported[e]
                }

                function l() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.labels,
                        t = void 0 === n ? [] : n,
                        r = e.labelAll,
                        i = void 0 !== r && r,
                        d = e.activeLabels,
                        f = void 0 === d ? [] : d,
                        l = arguments.length > 1 ? arguments[1] : void 0,
                        p = arguments.length > 2 ? arguments[2] : void 0,
                        v = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : s,
                        h = g(v);
                    (0, o.isPlainObject)(l) || (l = p ? {
                        banner: {
                            sizes: p
                        }
                    } : {});
                    var m = (0, a.Z)(l, "banner.sizes");
                    h.shouldFilter && m && ((l = (0, o.deepClone)(l)).banner.sizes = m.filter((function(e) {
                        return h.sizesSupported[e]
                    })));
                    var b = {
                        active: !l.hasOwnProperty(c.Mk) || (0, a.Z)(l, "banner.sizes.length") > 0 && (0 === t.length || !i && (t.some((function(e) {
                            return h.labels[e]
                        })) || t.some((function(e) {
                            return (0, u.q9)(f, e)
                        }))) || i && t.reduce((function(e, n) {
                            return e ? h.labels[n] || (0, u.q9)(f, n) : e
                        }), !0)),
                        mediaTypes: l
                    };
                    return m && m.length !== l.banner.sizes.length && (b.filterResults = {
                        before: m,
                        after: l.banner.sizes
                    }), b
                }

                function g(e) {
                    return e.reduce((function(e, n) {
                        if ("object" === (0, r.Z)(n) && "string" == typeof n.mediaQuery && n.mediaQuery.length > 0) {
                            var t = !1;
                            try {
                                t = (0, o.getWindowTop)().matchMedia(n.mediaQuery).matches
                            } catch (e) {
                                (0, o.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(n.mediaQuery).matches
                            }
                            t && (Array.isArray(n.sizesSupported) && (e.shouldFilter = !0), ["labels", "sizesSupported"].forEach((function(t) {
                                return (n[t] || []).forEach((function(n) {
                                    return e[t][n] = !0
                                }))
                            })))
                        } else(0, o.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                        return e
                    }), {
                        labels: {},
                        sizesSupported: {},
                        shouldFilter: !1
                    })
                }

                function p(e, n) {
                    return e.reduce((function(e, t) {
                        var r = l(d(t, n), t.mediaTypes, t.sizes),
                            i = r.active,
                            a = r.mediaTypes,
                            u = r.filterResults;
                        return i ? (u && (0, o.logInfo)('Size mapping filtered adUnit "'.concat(t.code, '" banner sizes from '), u.before, "to ", u.after), t.mediaTypes = a, t.bids = t.bids.reduce((function(e, r) {
                            var i = l(d(r, n), t.mediaTypes),
                                a = i.active,
                                u = i.mediaTypes,
                                c = i.filterResults;
                            return a ? (c && ((0, o.logInfo)('Size mapping filtered adUnit "'.concat(t.code, '" bidder "').concat(r.bidder, '" banner sizes from '), c.before, "to ", c.after), r.mediaTypes = u), e.push(r)) : (0, o.logInfo)('Size mapping deactivated adUnit "'.concat(t.code, '" bidder "').concat(r.bidder, '"')), e
                        }), []), e.push(t)) : (0, o.logInfo)('Size mapping disabled adUnit "'.concat(t.code, '"')), e
                    }), [])
                }
                i.vc.getConfig("sizeConfig", (function(e) {
                    return function(e) {
                        s = e
                    }(e.sizeConfig)
                }))
            },
            15164: function(e, n, t) {
                t.d(n, {
                    Ld: function() {
                        return u
                    },
                    S6: function() {
                        return s
                    },
                    df: function() {
                        return f
                    },
                    eA: function() {
                        return d
                    }
                });
                var r = t(92797),
                    i = t(64358),
                    o = t(55975),
                    a = ["core", "prebid-module"],
                    u = [];

                function c() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.gvlid,
                        t = e.moduleName,
                        r = e.bidderCode,
                        c = e.moduleType,
                        d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        f = d.bidderSettings,
                        l = void 0 === f ? o.S : f;

                    function g() {
                        if (null == r) return !0;
                        var e = l.get(r, "storageAllowed");
                        return null != e && e
                    }
                    var p = a.includes(c);

                    function v(e) {
                        if (g()) {
                            var o;
                            return s(p, n, r || t, {
                                hasEnforcementHook: !1
                            }, (function(n) {
                                if (n && n.hasEnforcementHook) o = e(n);
                                else {
                                    var t = {
                                        hasEnforcementHook: !1,
                                        valid: (0, i.hasDeviceAccess)()
                                    };
                                    o = e(t)
                                }
                            })), o
                        }(0, i.logInfo)("bidderSettings denied access to device storage for bidder '".concat(r, "'"));
                        return e({
                            valid: !1
                        })
                    }
                    var h = function(e, n, t, r, i, o) {
                            var a = function(o) {
                                if (o && o.valid) {
                                    var a = i && "" !== i ? " ;domain=".concat(encodeURIComponent(i)) : "",
                                        u = t && "" !== t ? " ;expires=".concat(t) : "",
                                        c = null != r && "none" == r.toLowerCase() ? "; Secure" : "";
                                    document.cookie = "".concat(e, "=").concat(encodeURIComponent(n)).concat(u, "; path=/").concat(a).concat(r ? "; SameSite=".concat(r) : "").concat(c)
                                }
                            };
                            if (!o || "function" != typeof o) return v(a);
                            u.push((function() {
                                var e = v(a);
                                o(e)
                            }))
                        },
                        m = function(e, n) {
                            var t = function(n) {
                                if (n && n.valid) {
                                    var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
                                    return t ? decodeURIComponent(t[2]) : null
                                }
                                return null
                            };
                            if (!n || "function" != typeof n) return v(t);
                            u.push((function() {
                                var e = v(t);
                                n(e)
                            }))
                        },
                        b = function(e) {
                            var n = function(e) {
                                if (e && e.valid) try {
                                    return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest")
                                } catch (e) {} finally {
                                    try {
                                        localStorage.removeItem("prebid.cookieTest")
                                    } catch (e) {}
                                }
                                return !1
                            };
                            if (!e || "function" != typeof e) return v(n);
                            u.push((function() {
                                var t = v(n);
                                e(t)
                            }))
                        },
                        y = function(e) {
                            var n = function(e) {
                                return !(!e || !e.valid) && (0, i.checkCookieSupport)()
                            };
                            if (!e || "function" != typeof e) return v(n);
                            u.push((function() {
                                var t = v(n);
                                e(t)
                            }))
                        },
                        E = function(e, n, t) {
                            var r = function(t) {
                                t && t.valid && A() && window.localStorage.setItem(e, n)
                            };
                            if (!t || "function" != typeof t) return v(r);
                            u.push((function() {
                                var e = v(r);
                                t(e)
                            }))
                        },
                        w = function(e, n) {
                            var t = function(n) {
                                return n && n.valid && A() ? window.localStorage.getItem(e) : null
                            };
                            if (!n || "function" != typeof n) return v(t);
                            u.push((function() {
                                var e = v(t);
                                n(e)
                            }))
                        },
                        C = function(e, n) {
                            var t = function(n) {
                                n && n.valid && A() && window.localStorage.removeItem(e)
                            };
                            if (!n || "function" != typeof n) return v(t);
                            u.push((function() {
                                var e = v(t);
                                n(e)
                            }))
                        },
                        A = function(e) {
                            var n = function(e) {
                                if (e && e.valid) try {
                                    return !!window.localStorage
                                } catch (e) {
                                    (0, i.logError)("Local storage api disabled")
                                }
                                return !1
                            };
                            if (!e || "function" != typeof e) return v(n);
                            u.push((function() {
                                var t = v(n);
                                e(t)
                            }))
                        },
                        T = function(e, n) {
                            var t = function(n) {
                                if (n && n.valid) {
                                    var t = [];
                                    if ((0, i.hasDeviceAccess)())
                                        for (var r = document.cookie.split(";"); r.length;) {
                                            var o = r.pop(),
                                                a = o.indexOf("=");
                                            a = a < 0 ? o.length : a, decodeURIComponent(o.slice(0, a).replace(/^\s+/, "")).indexOf(e) >= 0 && t.push(decodeURIComponent(o.slice(a + 1)))
                                        }
                                    return t
                                }
                            };
                            if (!n || "function" != typeof n) return v(t);
                            u.push((function() {
                                var e = v(t);
                                n(e)
                            }))
                        };
                    return {
                        setCookie: h,
                        getCookie: m,
                        localStorageIsEnabled: b,
                        cookiesAreEnabled: y,
                        setDataInLocalStorage: E,
                        getDataFromLocalStorage: w,
                        removeDataFromLocalStorage: C,
                        hasLocalStorage: A,
                        findSimilarCookies: T
                    }
                }
                var s = (0, r.z3)("async", (function(e, n, t, r, i) {
                    i(r)
                }), "validateStorageEnforcement");

                function d(e) {
                    return c({
                        moduleName: e,
                        moduleType: "core"
                    })
                }

                function f() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.gvlid,
                        t = e.moduleName,
                        r = e.bidderCode;
                    if (arguments.length > 1 || arguments.length > 0 && !(0, i.isPlainObject)(arguments[0])) throw new Error("Invalid invocation for getStorageManager");
                    return c({
                        gvlid: n,
                        moduleName: t,
                        bidderCode: r
                    })
                }
            },
            18621: function(e, n, t) {
                t.d(n, {
                    bP: function() {
                        return A
                    },
                    ol: function() {
                        return C
                    },
                    q0: function() {
                        return T
                    },
                    u8: function() {
                        return w
                    }
                });
                var r = t(4942),
                    i = t(89062),
                    o = t(64358),
                    a = t(20265),
                    u = t(3193),
                    c = t(70059),
                    s = t(78653),
                    d = t(74247),
                    f = t(24679),
                    l = t(92797),
                    g = t(55975),
                    p = t(34614),
                    v = t(5644),
                    h = [],
                    m = "targetingControls.allowTargetingKeys",
                    b = "targetingControls.addTargetingKeys",
                    y = 'Only one of "'.concat(m, '" or "').concat(b, '" can be set'),
                    E = Object.keys(v.TD).map((function(e) {
                        return v.TD[e]
                    })),
                    w = {
                        isBidNotExpired: function(e) {
                            return e.responseTimestamp + 1e3 * e.ttl - 1e3 > (0, o.timestamp)()
                        },
                        isUnusedBid: function(e) {
                            return e && (e.status && !(0, p.q9)([v.UE.fe], e.status) || !e.status)
                        }
                    },
                    C = (0, l.z3)("sync", (function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        if (!r) {
                            var a = [],
                                c = u.vc.getConfig("sendBidsControl.dealPrioritization"),
                                s = (0, o.groupBy)(e, "adUnitCode");
                            return Object.keys(s).forEach((function(e) {
                                var r = [],
                                    u = (0, o.groupBy)(s[e], "bidderCode");
                                Object.keys(u).forEach((function(e) {
                                    return r.push(u[e].reduce(n))
                                })), t > 0 ? (r = c ? r.sort(A(!0)) : r.sort((function(e, n) {
                                    return n.cpm - e.cpm
                                })), a.push.apply(a, (0, i.Z)(r.slice(0, t)))) : a.push.apply(a, (0, i.Z)(r))
                            })), a
                        }
                        return e
                    }));

                function A() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return function(n, t) {
                        return void 0 !== n.adserverTargeting.hb_deal && void 0 === t.adserverTargeting.hb_deal ? -1 : void 0 === n.adserverTargeting.hb_deal && void 0 !== t.adserverTargeting.hb_deal ? 1 : e ? t.cpm - n.cpm : t.adserverTargeting.hb_pb - n.adserverTargeting.hb_pb
                    }
                }
                var T = function(e) {
                    var n = {},
                        t = {};

                    function s(e, n) {
                        return e.adserverTargeting && n && ((0, o.isArray)(n) && (0, p.q9)(n, e.adUnitCode) || "string" == typeof n && e.adUnitCode === n)
                    }

                    function l(e, n) {
                        if (!0 === u.vc.getConfig("targetingControls.alwaysIncludeDeals")) {
                            var t = E.concat(c.xc);
                            return C(n, o.getHighestCpm).map((function(n) {
                                if (n.dealId && s(n, e)) return (0, r.Z)({}, n.adUnitCode, D(n, t.filter((function(e) {
                                    return void 0 !== n.adserverTargeting[e]
                                }))))
                            })).filter((function(e) {
                                return e
                            }))
                        }
                        return []
                    }

                    function T(e, n) {
                        var t = Object.assign({}, v.TD, v.FY),
                            r = Object.keys(t),
                            i = {};
                        (0, o.logInfo)("allowTargetingKeys - allowed keys [ ".concat(n.map((function(e) {
                            return t[e]
                        })).join(", "), " ]")), e.map((function(e) {
                            var o = Object.keys(e)[0],
                                a = e[o].filter((function(e) {
                                    var o = Object.keys(e)[0],
                                        a = 0 === r.filter((function(e) {
                                            return 0 === o.indexOf(t[e])
                                        })).length || (0, p.sE)(n, (function(e) {
                                            var n = t[e];
                                            return 0 === o.indexOf(n)
                                        }));
                                    return i[o] = !a, a
                                }));
                            e[o] = a
                        }));
                        var a = Object.keys(i).filter((function(e) {
                            return i[e]
                        }));
                        return (0, o.logInfo)("allowTargetingKeys - removed keys [ ".concat(a.join(", "), " ]")), e.filter((function(e) {
                            return e[Object.keys(e)[0]].length > 0
                        }))
                    }

                    function I(e, n) {
                        var t = (0, o.deepClone)(e);
                        return Object.keys(t).map((function(e) {
                            return {
                                adUnitCode: e,
                                adserverTargeting: t[e]
                            }
                        })).sort(A()).reduce((function(e, r, i, a) {
                            var u, c = (u = r.adserverTargeting, Object.keys(u).reduce((function(e, n) {
                                return e + "".concat(n, "%3d").concat(encodeURIComponent(u[n]), "%26")
                            }), ""));
                            i + 1 === a.length && (c = c.slice(0, -3));
                            var s = r.adUnitCode,
                                d = c.length;
                            return d <= n ? (n -= d, (0, o.logInfo)("AdUnit '".concat(s, "' auction keys comprised of ").concat(d, " characters.  Deducted from running threshold; new limit is ").concat(n), t[s]), e[s] = t[s]) : (0, o.logWarn)("The following keys for adUnitCode '".concat(s, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(d, ", the current allotted amount was ").concat(n, ".\n"), t[s]), i + 1 === a.length && 0 === Object.keys(e).length && (0, o.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e
                        }), {})
                    }

                    function O(e) {
                        var n = e.map((function(e) {
                            return (0, r.Z)({}, Object.keys(e)[0], e[Object.keys(e)[0]].map((function(e) {
                                return (0, r.Z)({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(","))
                            })).reduce((function(e, n) {
                                return Object.assign(n, e)
                            }), {}))
                        })).reduce((function(e, n) {
                            var t = Object.keys(n)[0];
                            return e[t] = Object.assign({}, e[t], n[t]), e
                        }), {});
                        return n
                    }

                    function S(n) {
                        return "string" == typeof n ? [n] : (0, o.isArray)(n) ? n : e.getAdUnitCodes() || []
                    }

                    function B() {
                        var n = e.getBidsReceived();
                        if (u.vc.getConfig("useBidCache")) {
                            var r = u.vc.getConfig("bidCacheFilterFunction");
                            "function" == typeof r && (n = n.filter((function(e) {
                                return t[e.adUnitCode] === e.auctionId || !!r(e)
                            })))
                        } else n = n.filter((function(e) {
                            return t[e.adUnitCode] === e.auctionId
                        }));
                        return n = n.filter((function(e) {
                            return (0, a.Z)(e, "video.context") !== f.Oh
                        })).filter((function(e) {
                            return "banner" !== e.mediaType || (0, d.lO)([e.width, e.height])
                        })).filter(w.isUnusedBid).filter(w.isBidNotExpired), C(n, o.getOldestHighestCpmBid)
                    }

                    function k(e, t) {
                        var o = n.getWinningBids(e, t),
                            a = j();
                        return o = o.map((function(e) {
                            return (0, r.Z)({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter((function(n) {
                                return void 0 === e.sendStandardTargeting || e.sendStandardTargeting || -1 === a.indexOf(n)
                            })).reduce((function(n, t) {
                                var o = [e.adserverTargeting[t]],
                                    a = (0, r.Z)({}, t.substring(0, 20), o);
                                if (t === v.TD.DEAL) {
                                    var u = "".concat(t, "_").concat(e.bidderCode).substring(0, 20),
                                        c = (0, r.Z)({}, u, o);
                                    return [].concat((0, i.Z)(n), [a, c])
                                }
                                return [].concat((0, i.Z)(n), [a])
                            }), []))
                        })), o
                    }

                    function j() {
                        return e.getStandardBidderAdServerTargeting().map((function(e) {
                            return e.key
                        })).concat(E).filter(o.uniques)
                    }

                    function U(e, n, t, r) {
                        return Object.keys(n.adserverTargeting).filter(_()).forEach((function(t) {
                            e.length && e.filter(function(e) {
                                return function(t) {
                                    return t.adUnitCode === n.adUnitCode && t.adserverTargeting[e]
                                }
                            }(t)).forEach(function(e) {
                                return function(t) {
                                    (0, o.isArray)(t.adserverTargeting[e]) || (t.adserverTargeting[e] = [t.adserverTargeting[e]]), t.adserverTargeting[e] = t.adserverTargeting[e].concat(n.adserverTargeting[e]).filter(o.uniques), delete n.adserverTargeting[e]
                                }
                            }(t))
                        })), e.push(n), e
                    }

                    function _() {
                        var e = j();
                        return e = e.concat(c.xc),
                            function(n) {
                                return -1 === e.indexOf(n)
                            }
                    }

                    function R(e) {
                        return (0, r.Z)({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(_()).map((function(n) {
                            return (0, r.Z)({}, n.substring(0, 20), [e.adserverTargeting[n]])
                        })))
                    }

                    function P(e, n) {
                        return n.filter((function(n) {
                            return (0, p.q9)(e, n.adUnitCode)
                        })).map((function(e) {
                            return Object.assign({}, e)
                        })).reduce(U, []).map(R).filter((function(e) {
                            return e
                        }))
                    }

                    function q(e, n) {
                        var t = E.concat(c.xc),
                            i = u.vc.getConfig("sendBidsControl.bidLimit"),
                            a = C(n, o.getHighestCpm, i),
                            d = u.vc.getConfig("targetingControls.allowSendAllBidsTargetingKeys"),
                            f = d ? d.map((function(e) {
                                return v.TD[e]
                            })) : t;
                        return a.map((function(n) {
                            if (s(n, e)) return (0, r.Z)({}, n.adUnitCode, D(n, t.filter((function(e) {
                                return void 0 !== n.adserverTargeting[e] && -1 !== f.indexOf(e)
                            }))))
                        })).filter((function(e) {
                            return e
                        }))
                    }

                    function D(e, n) {
                        return n.map((function(n) {
                            return (0, r.Z)({}, "".concat(n, "_").concat(e.bidderCode).substring(0, 20), [e.adserverTargeting[n]])
                        }))
                    }

                    function Z(n) {
                        function t(e) {
                            return (0, a.Z)(e, v.k2.xn)
                        }
                        return e.getAdUnits().filter((function(e) {
                            return (0, p.q9)(n, e.code) && t(e)
                        })).map((function(e) {
                            return (0, r.Z)({}, e.code, function(e) {
                                var n = t(e);
                                return Object.keys(n).map((function(e) {
                                    return (0, o.isStr)(n[e]) && (n[e] = n[e].split(",").map((function(e) {
                                        return e.trim()
                                    }))), (0, o.isArray)(n[e]) || (n[e] = [n[e]]), (0, r.Z)({}, e, n[e])
                                }))
                            }(e))
                        }))
                    }
                    return n.setLatestAuctionForAdUnit = function(e, n) {
                        t[e] = n
                    }, n.resetPresetTargeting = function(n, t) {
                        if ((0, o.isGptPubadsDefined)()) {
                            var r = S(n),
                                i = e.getAdUnits().filter((function(e) {
                                    return (0, p.q9)(r, e.code)
                                })),
                                a = h.reduce((function(e, n) {
                                    return e[n] = null, e
                                }), {});
                            window.googletag.pubads().getSlots().forEach((function(e) {
                                var n = (0, o.isFn)(t) && t(e);
                                i.forEach((function(t) {
                                    (t.code === e.getAdUnitPath() || t.code === e.getSlotElementId() || (0, o.isFn)(n) && n(t.code)) && e.updateTargetingFromMap(a)
                                }))
                            }))
                        }
                    }, n.resetPresetTargetingAST = function(e) {
                        S(e).forEach((function(e) {
                            var n = window.apntag.getTag(e);
                            if (n && n.keywords) {
                                var t = Object.keys(n.keywords),
                                    r = {};
                                t.forEach((function(e) {
                                    (0, p.q9)(h, e.toLowerCase()) || (r[e] = n.keywords[e])
                                })), window.apntag.modifyTag(e, {
                                    keywords: r
                                })
                            }
                        }))
                    }, n.getAllTargeting = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B(),
                            t = S(e),
                            r = k(t, n).concat(P(t, n)).concat(u.vc.getConfig("enableSendAllBids") ? q(t, n) : l(t, n)).concat(Z(t));
                        r.map((function(e) {
                            Object.keys(e).map((function(n) {
                                e[n].map((function(e) {
                                    -1 === h.indexOf(Object.keys(e)[0]) && (h = Object.keys(e).concat(h))
                                }))
                            }))
                        }));
                        var i = Object.keys(Object.assign({}, v.kF, v.FY)),
                            a = u.vc.getConfig(m),
                            c = u.vc.getConfig(b);
                        if (null != c && null != a) throw new Error(y);
                        a = null != c ? i.concat(c) : a || i, Array.isArray(a) && a.length > 0 && (r = T(r, a)), r = O(r);
                        var s = u.vc.getConfig("targetingControls.auctionKeyMaxChars");
                        return s && ((0, o.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(s, " characters.  Running checks on auction keys...")), r = I(r, s)), t.forEach((function(e) {
                            r[e] || (r[e] = {})
                        })), r
                    }, u.vc.getConfig("targetingControls", (function(e) {
                        null != (0, a.Z)(e, m) && null != (0, a.Z)(e, b) && (0, o.logError)(y)
                    })), n.setTargetingForGPT = function(e, n) {
                        window.googletag.pubads().getSlots().forEach((function(t) {
                            Object.keys(e).filter(n ? n(t) : (0, o.isAdUnitCodeMatchingSlot)(t)).forEach((function(n) {
                                Object.keys(e[n]).forEach((function(t) {
                                    var r = e[n][t];
                                    "string" == typeof r && -1 !== r.indexOf(",") && (r = r.split(",")), e[n][t] = r
                                })), (0, o.logMessage)("Attempting to set targeting-map for slot: ".concat(t.getSlotElementId(), " with targeting-map:"), e[n]), t.updateTargetingFromMap(e[n])
                            }))
                        }))
                    }, n.getWinningBids = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B(),
                            t = S(e);
                        return n.filter((function(e) {
                            return (0, p.q9)(t, e.adUnitCode)
                        })).filter((function(e) {
                            return !0 === g.S.get(e.bidderCode, "allowZeroCpmBids") ? e.cpm >= 0 : e.cpm > 0
                        })).map((function(e) {
                            return e.adUnitCode
                        })).filter(o.uniques).map((function(e) {
                            return n.filter((function(n) {
                                return n.adUnitCode === e ? n : null
                            })).reduce(o.getHighestCpm)
                        }))
                    }, n.setTargetingForAst = function(e) {
                        var t = n.getAllTargeting(e);
                        try {
                            n.resetPresetTargetingAST(e)
                        } catch (e) {
                            (0, o.logError)("unable to reset targeting for AST" + e)
                        }
                        Object.keys(t).forEach((function(e) {
                            return Object.keys(t[e]).forEach((function(n) {
                                if ((0, o.logMessage)("Attempting to set targeting for targetId: ".concat(e, " key: ").concat(n, " value: ").concat(t[e][n])), (0, o.isStr)(t[e][n]) || (0, o.isArray)(t[e][n])) {
                                    var r = {};
                                    n.search(/pt[0-9]/) < 0 ? r[n.toUpperCase()] = t[e][n] : r[n] = t[e][n], window.apntag.setKeywords(e, r, {
                                        overrideKeyValue: !0
                                    })
                                }
                            }))
                        }))
                    }, n.isApntagDefined = function() {
                        if (window.apntag && (0, o.isFn)(window.apntag.setKeywords)) return !0
                    }, n
                }(s.K)
            },
            11974: function(e, n, t) {
                t.d(n, {
                    k_: function() {
                        return s
                    }
                });
                var r = t(93324),
                    i = t(64358),
                    o = t(3193),
                    a = t(34614),
                    u = t(15164);
                o.vc.setDefaults({
                    userSync: (0, i.deepClone)({
                        syncEnabled: !0,
                        filterSettings: {
                            image: {
                                bidders: "*",
                                filter: "include"
                            }
                        },
                        syncsPerBidder: 5,
                        syncDelay: 3e3,
                        auctionDelay: 0
                    })
                });
                var c = (0, u.eA)("usersync");
                var s = function(e) {
                    var n = {},
                        t = {
                            image: [],
                            iframe: []
                        },
                        u = new Set,
                        c = {},
                        s = {
                            image: !0,
                            iframe: !1
                        },
                        d = e.config;

                    function f() {
                        if (d.syncEnabled && e.browserSupportsCookies) {
                            try {
                                ! function() {
                                    if (!s.iframe) return;
                                    l(t.iframe, (function(e) {
                                        var n = (0, r.Z)(e, 2),
                                            o = n[0],
                                            a = n[1];
                                        (0, i.logMessage)("Invoking iframe user sync for bidder: ".concat(o)), (0, i.insertUserSyncIframe)(a),
                                        function(e, n) {
                                            e.image = e.image.filter((function(e) {
                                                return e[0] !== n
                                            }))
                                        }(t, o)
                                    }))
                                }(),
                                function() {
                                    if (!s.image) return;
                                    l(t.image, (function(e) {
                                        var n = (0, r.Z)(e, 2),
                                            t = n[0],
                                            o = n[1];
                                        (0, i.logMessage)("Invoking image pixel user sync for bidder: ".concat(t)), (0, i.triggerPixel)(o)
                                    }))
                                }()
                            } catch (e) {
                                return (0, i.logError)("Error firing user syncs", e)
                            }
                            t = {
                                image: [],
                                iframe: []
                            }
                        }
                    }

                    function l(e, n) {
                        (0, i.shuffle)(e).forEach((function(e) {
                            n(e), u.add(e[0])
                        }))
                    }

                    function g(e, n) {
                        var t = d.filterSettings;
                        if (function(e, n) {
                                if (e.all && e[n]) return (0, i.logWarn)('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(n, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                                var t = e.all ? e.all : e[n],
                                    r = e.all ? "all" : n;
                                if (!t) return !1;
                                var o = t.filter,
                                    a = t.bidders;
                                if (o && "include" !== o && "exclude" !== o) return (0, i.logWarn)('UserSync "filterSettings.'.concat(r, ".filter\" setting '").concat(o, "' is not a valid option; use either 'include' or 'exclude'.")), !1;
                                if ("*" !== a && !(Array.isArray(a) && a.length > 0 && a.every((function(e) {
                                        return (0, i.isStr)(e) && "*" !== e
                                    })))) return (0, i.logWarn)('Detected an invalid setup in userSync "filterSettings.'.concat(r, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1;
                                return !0
                            }(t, e)) {
                            s[e] = !0;
                            var r = t.all ? t.all : t[e],
                                o = "*" === r.bidders ? [n] : r.bidders,
                                u = {
                                    include: function(e, n) {
                                        return !(0, a.q9)(e, n)
                                    },
                                    exclude: function(e, n) {
                                        return (0, a.q9)(e, n)
                                    }
                                };
                            return u[r.filter || "include"](o, n)
                        }
                        return !s[e]
                    }
                    return o.vc.getConfig("userSync", (function(e) {
                        if (e.userSync) {
                            var n = e.userSync.filterSettings;
                            (0, i.isPlainObject)(n) && (n.image || n.all || (e.userSync.filterSettings.image = {
                                bidders: "*",
                                filter: "include"
                            }))
                        }
                        d = Object.assign(d, e.userSync)
                    })), n.registerSync = function(e, r, o) {
                        return u.has(r) ? (0, i.logMessage)('already fired syncs for "'.concat(r, '", ignoring registerSync call')) : d.syncEnabled && (0, i.isArray)(t[e]) ? r ? 0 !== d.syncsPerBidder && Number(c[r]) >= d.syncsPerBidder ? (0, i.logWarn)('Number of user syncs exceeded for "'.concat(r, '"')) : n.canBidderRegisterSync(e, r) ? (t[e].push([r, o]), void(c = function(e, n) {
                            return e[n] ? e[n] += 1 : e[n] = 1, e
                        }(c, r))) : (0, i.logWarn)('Bidder "'.concat(r, '" not permitted to register their "').concat(e, '" userSync pixels.')) : (0, i.logWarn)("Bidder is required for registering sync") : (0, i.logWarn)('User sync type "'.concat(e, '" not supported'))
                    }, n.syncUsers = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        if (e) return setTimeout(f, Number(e));
                        f()
                    }, n.triggerUserSyncs = function() {
                        d.enableOverride && n.syncUsers()
                    }, n.canBidderRegisterSync = function(e, n) {
                        return !d.filterSettings || !g(e, n)
                    }, n
                }(Object.defineProperties({
                    config: o.vc.getConfig("userSync")
                }, {
                    browserSupportsCookies: {
                        get: function() {
                            return !(0, i.isSafariBrowser)() && c.cookiesAreEnabled()
                        }
                    }
                }))
            },
            64358: function(e, n, t) {
                t.r(n), t.d(n, {
                    _each: function() {
                        return de
                    },
                    _map: function() {
                        return le
                    },
                    _setEventEmitter: function() {
                        return C
                    },
                    adUnitsFilter: function() {
                        return Ze
                    },
                    bind: function() {
                        return k
                    },
                    buildUrl: function() {
                        return wn
                    },
                    callBurl: function() {
                        return me
                    },
                    checkCookieSupport: function() {
                        return He
                    },
                    chunk: function() {
                        return pn
                    },
                    cleanObj: function() {
                        return cn
                    },
                    compareOn: function() {
                        return mn
                    },
                    contains: function() {
                        return fe
                    },
                    convertCamelToUnderscore: function() {
                        return un
                    },
                    convertTypes: function() {
                        return fn
                    },
                    createInvisibleIframe: function() {
                        return $
                    },
                    createTrackPixelHtml: function() {
                        return Ee
                    },
                    createTrackPixelIframeHtml: function() {
                        return we
                    },
                    cyrb53Hash: function() {
                        return Tn
                    },
                    debugTurnedOn: function() {
                        return X
                    },
                    deepAccess: function() {
                        return p.Z
                    },
                    deepClone: function() {
                        return xe
                    },
                    deepEqual: function() {
                        return Cn
                    },
                    deepSetValue: function() {
                        return v.N
                    },
                    delayExecution: function() {
                        return Ge
                    },
                    escapeUnsafeChars: function() {
                        return kn
                    },
                    fill: function() {
                        return gn
                    },
                    flatten: function() {
                        return Te
                    },
                    formatQS: function() {
                        return yn
                    },
                    generateUUID: function() {
                        return _
                    },
                    getAdUnitSizes: function() {
                        return Z
                    },
                    getBidIdParameter: function() {
                        return R
                    },
                    getBidRequest: function() {
                        return Ie
                    },
                    getBidderCodes: function() {
                        return ke
                    },
                    getDNT: function() {
                        return Xe
                    },
                    getDefinedParams: function() {
                        return Qe
                    },
                    getGptSlotForAdUnitCode: function() {
                        return tn
                    },
                    getGptSlotInfoForAdUnitCode: function() {
                        return rn
                    },
                    getHighestCpm: function() {
                        return _e
                    },
                    getKeyByValue: function() {
                        return Be
                    },
                    getKeys: function() {
                        return Oe
                    },
                    getLatestHighestCpmBid: function() {
                        return Pe
                    },
                    getMaxValueFromArray: function() {
                        return hn
                    },
                    getMinValueFromArray: function() {
                        return vn
                    },
                    getOldestHighestCpmBid: function() {
                        return Re
                    },
                    getParameterByName: function() {
                        return ee
                    },
                    getPerformanceNow: function() {
                        return Ke
                    },
                    getPrebidInternal: function() {
                        return O
                    },
                    getUniqueIdentifierStr: function() {
                        return U
                    },
                    getUserConfiguredParams: function() {
                        return Ye
                    },
                    getValue: function() {
                        return Se
                    },
                    getValueString: function() {
                        return Ce
                    },
                    getWindowFromDocument: function() {
                        return In
                    },
                    getWindowLocation: function() {
                        return K
                    },
                    getWindowSelf: function() {
                        return z
                    },
                    getWindowTop: function() {
                        return W
                    },
                    groupBy: function() {
                        return Ve
                    },
                    hasConsoleLogger: function() {
                        return Y
                    },
                    hasDeviceAccess: function() {
                        return Le
                    },
                    hasOwn: function() {
                        return ge
                    },
                    inIframe: function() {
                        return Ne
                    },
                    insertElement: function() {
                        return pe
                    },
                    insertHtmlIntoIframe: function() {
                        return be
                    },
                    insertUserSyncIframe: function() {
                        return ye
                    },
                    internal: function() {
                        return T
                    },
                    isA: function() {
                        return ne
                    },
                    isAdUnitCodeMatchingSlot: function() {
                        return en
                    },
                    isApnGetTagDefined: function() {
                        return Ue
                    },
                    isArray: function() {
                        return ie
                    },
                    isArrayOfNums: function() {
                        return ln
                    },
                    isBoolean: function() {
                        return ue
                    },
                    isEmpty: function() {
                        return ce
                    },
                    isEmptyStr: function() {
                        return se
                    },
                    isFn: function() {
                        return te
                    },
                    isGptPubadsDefined: function() {
                        return je
                    },
                    isInteger: function() {
                        return an
                    },
                    isNumber: function() {
                        return oe
                    },
                    isPlainObject: function() {
                        return ae
                    },
                    isSafariBrowser: function() {
                        return Me
                    },
                    isSlotMatchingAdUnitCode: function() {
                        return nn
                    },
                    isStr: function() {
                        return re
                    },
                    isValidMediaTypes: function() {
                        return Je
                    },
                    logError: function() {
                        return V
                    },
                    logInfo: function() {
                        return H
                    },
                    logMessage: function() {
                        return L
                    },
                    logWarn: function() {
                        return G
                    },
                    mergeDeep: function() {
                        return An
                    },
                    parseGPTSingleSizeArray: function() {
                        return N
                    },
                    parseGPTSingleSizeArrayToRtbSize: function() {
                        return M
                    },
                    parseQS: function() {
                        return bn
                    },
                    parseQueryStringParameters: function() {
                        return q
                    },
                    parseSizesInput: function() {
                        return x
                    },
                    parseUrl: function() {
                        return En
                    },
                    pick: function() {
                        return sn
                    },
                    prefixLog: function() {
                        return Q
                    },
                    replaceAuctionPrice: function() {
                        return Fe
                    },
                    replaceClickThrough: function() {
                        return We
                    },
                    safeJSONParse: function() {
                        return On
                    },
                    setScriptAttributes: function() {
                        return Sn
                    },
                    shuffle: function() {
                        return De
                    },
                    timestamp: function() {
                        return ze
                    },
                    transformAdServerTargetingObj: function() {
                        return D
                    },
                    transformBidderParamKeywords: function() {
                        return dn
                    },
                    triggerPixel: function() {
                        return he
                    },
                    tryAppendQueryString: function() {
                        return P
                    },
                    uniques: function() {
                        return Ae
                    },
                    unsupportedBidderMessage: function() {
                        return on
                    },
                    waitForElementToLoad: function() {
                        return ve
                    }
                });
                var r, i = t(93324),
                    o = t(89062),
                    a = t(4942),
                    u = t(71002),
                    c = t(3193),
                    s = t(77079),
                    d = t.n(s),
                    f = t(34614),
                    l = t(5644),
                    g = t(68792),
                    p = t(20265),
                    v = t(96475),
                    h = Object.prototype.toString,
                    m = Boolean(window.console),
                    b = Boolean(m && window.console.log),
                    y = Boolean(m && window.console.info),
                    E = Boolean(m && window.console.warn),
                    w = Boolean(m && window.console.error);

                function C(e) {
                    r = e
                }

                function A() {
                    null != r && r.apply(void 0, arguments)
                }
                var T = {
                        checkCookieSupport: He,
                        createTrackPixelIframeHtml: we,
                        getWindowSelf: z,
                        getWindowTop: W,
                        getWindowLocation: K,
                        insertUserSyncIframe: ye,
                        insertElement: pe,
                        isFn: te,
                        triggerPixel: he,
                        logError: V,
                        logWarn: G,
                        logMessage: L,
                        logInfo: H,
                        parseQS: bn,
                        formatQS: yn,
                        deepEqual: Cn
                    },
                    I = {};

                function O() {
                    return I
                }
                var S, B = {},
                    k = function(e, n) {
                        return n
                    }.bind(null, 1, B)() === B ? Function.prototype.bind : function(e) {
                        var n = this,
                            t = Array.prototype.slice.call(arguments, 1);
                        return function() {
                            return n.apply(e, t.concat(Array.prototype.slice.call(arguments)))
                        }
                    },
                    j = (S = 0, function() {
                        return ++S
                    });

                function U() {
                    return j() + Math.random().toString(16).substr(2)
                }

                function _(e) {
                    return e ? (e ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, _)
                }

                function R(e, n) {
                    return n && n[e] ? n[e] : ""
                }

                function P(e, n, t) {
                    return t ? e + n + "=" + encodeURIComponent(t) + "&" : e
                }

                function q(e) {
                    var n = "";
                    for (var t in e) e.hasOwnProperty(t) && (n += t + "=" + encodeURIComponent(e[t]) + "&");
                    return n = n.replace(/&$/, "")
                }

                function D(e) {
                    return e && Object.getOwnPropertyNames(e).length > 0 ? Oe(e).map((function(n) {
                        return "".concat(n, "=").concat(encodeURIComponent(Se(e, n)))
                    })).join("&") : ""
                }

                function Z(e) {
                    if (e) {
                        var n = [];
                        if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                            var t = e.mediaTypes.banner.sizes;
                            Array.isArray(t[0]) ? n = t : n.push(t)
                        } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? n = e.sizes : n.push(e.sizes));
                        return n
                    }
                }

                function x(e) {
                    var n = [];
                    if ("string" == typeof e) {
                        var t = e.split(","),
                            r = /^(\d)+x(\d)+$/i;
                        if (t)
                            for (var i in t) ge(t, i) && t[i].match(r) && n.push(t[i])
                    } else if ("object" === (0, u.Z)(e)) {
                        var o = e.length;
                        if (o > 0)
                            if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) n.push(N(e));
                            else
                                for (var a = 0; a < o; a++) n.push(N(e[a]))
                    }
                    return n
                }

                function N(e) {
                    if (F(e)) return e[0] + "x" + e[1]
                }

                function M(e) {
                    if (F(e)) return {
                        w: e[0],
                        h: e[1]
                    }
                }

                function F(e) {
                    return ie(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
                }

                function W() {
                    return window.top
                }

                function z() {
                    return window.self
                }

                function K() {
                    return window.location
                }

                function L() {
                    X() && b && console.log.apply(console, J(arguments, "MESSAGE:"))
                }

                function H() {
                    X() && y && console.info.apply(console, J(arguments, "INFO:"))
                }

                function G() {
                    X() && E && console.warn.apply(console, J(arguments, "WARNING:")), A(l.FP.AUCTION_DEBUG, {
                        type: "WARNING",
                        arguments: arguments
                    })
                }

                function V() {
                    X() && w && console.error.apply(console, J(arguments, "ERROR:")), A(l.FP.AUCTION_DEBUG, {
                        type: "ERROR",
                        arguments: arguments
                    })
                }

                function Q(e) {
                    function n(n) {
                        return function() {
                            for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                            n.apply(void 0, [e].concat(r))
                        }
                    }
                    return {
                        logError: n(V),
                        logWarn: n(G),
                        logMessage: n(L),
                        logInfo: n(H)
                    }
                }

                function J(e, n) {
                    e = [].slice.call(e);
                    var t = c.vc.getCurrentBidder();
                    return n && e.unshift(n), t && e.unshift(r("#aaa")), e.unshift(r("#3b88c3")), e.unshift("%cPrebid" + (t ? "%c".concat(t) : "")), e;

                    function r(e) {
                        return "display: inline-block; color: #fff; background: ".concat(e, "; padding: 1px 4px; border-radius: 3px;")
                    }
                }

                function Y() {
                    return b
                }

                function X() {
                    return !!c.vc.getConfig("debug")
                }

                function $() {
                    var e = document.createElement("iframe");
                    return e.id = U(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
                }

                function ee(e) {
                    return bn(K().search)[e] || ""
                }

                function ne(e, n) {
                    return h.call(e) === "[object " + n + "]"
                }

                function te(e) {
                    return ne(e, "Function")
                }

                function re(e) {
                    return ne(e, "String")
                }

                function ie(e) {
                    return ne(e, "Array")
                }

                function oe(e) {
                    return ne(e, "Number")
                }

                function ae(e) {
                    return ne(e, "Object")
                }

                function ue(e) {
                    return ne(e, "Boolean")
                }

                function ce(e) {
                    if (!e) return !0;
                    if (ie(e) || re(e)) return !(e.length > 0);
                    for (var n in e)
                        if (hasOwnProperty.call(e, n)) return !1;
                    return !0
                }

                function se(e) {
                    return re(e) && (!e || 0 === e.length)
                }

                function de(e, n) {
                    if (!ce(e)) {
                        if (te(e.forEach)) return e.forEach(n, this);
                        var t = 0,
                            r = e.length;
                        if (r > 0)
                            for (; t < r; t++) n(e[t], t, e);
                        else
                            for (t in e) hasOwnProperty.call(e, t) && n.call(this, e[t], t)
                    }
                }

                function fe(e, n) {
                    if (ce(e)) return !1;
                    if (te(e.indexOf)) return -1 !== e.indexOf(n);
                    for (var t = e.length; t--;)
                        if (e[t] === n) return !0;
                    return !1
                }

                function le(e, n) {
                    if (ce(e)) return [];
                    if (te(e.map)) return e.map(n);
                    var t = [];
                    return de(e, (function(r, i) {
                        t.push(n(r, i, e))
                    })), t
                }

                function ge(e, n) {
                    return e.hasOwnProperty ? e.hasOwnProperty(n) : void 0 !== e[n] && e.constructor.prototype[n] !== e[n]
                }

                function pe(e, n, t, r) {
                    var i;
                    n = n || document, i = t ? n.getElementsByTagName(t) : n.getElementsByTagName("head");
                    try {
                        if ((i = i.length ? i : n.getElementsByTagName("body")).length) {
                            i = i[0];
                            var o = r ? null : i.firstChild;
                            return i.insertBefore(e, o)
                        }
                    } catch (e) {}
                }

                function ve(e, n) {
                    var t = null;
                    return new g.Z((function(r) {
                        var i = function n() {
                            e.removeEventListener("load", n), e.removeEventListener("error", n), null != t && window.clearTimeout(t), r()
                        };
                        e.addEventListener("load", i), e.addEventListener("error", i), null != n && (t = window.setTimeout(i, n))
                    }))
                }

                function he(e, n, t) {
                    var r = new Image;
                    n && T.isFn(n) && ve(r, t).then(n), r.src = e
                }

                function me(e) {
                    var n = e.source,
                        t = e.burl;
                    n === l.os.YZ && t && T.triggerPixel(t)
                }

                function be(e) {
                    if (e) {
                        var n = document.createElement("iframe");
                        n.id = U(), n.width = 0, n.height = 0, n.hspace = "0", n.vspace = "0", n.marginWidth = "0", n.marginHeight = "0", n.style.display = "none", n.style.height = "0px", n.style.width = "0px", n.scrolling = "no", n.frameBorder = "0", n.allowtransparency = "true", T.insertElement(n, document, "body"), n.contentWindow.document.open(), n.contentWindow.document.write(e), n.contentWindow.document.close()
                    }
                }

                function ye(e, n, t) {
                    var r = T.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                        i = document.createElement("div");
                    i.innerHTML = r;
                    var o = i.firstChild;
                    n && T.isFn(n) && ve(o, t).then(n), T.insertElement(o, document, "html", !0)
                }

                function Ee(e) {
                    if (!e) return "";
                    var n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
                    return n += '<img src="' + encodeURI(e) + '"></div>'
                }

                function we(e) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return e ? (n && (e = encodeURI(e)), t && (t = 'sandbox="'.concat(t, '"')), "<iframe ".concat(t, ' id="').concat(U(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
                }

                function Ce(e, n, t) {
                    return null == n ? t : re(n) ? n : oe(n) ? n.toString() : void T.logWarn("Unsuported type for param: " + e + " required type: String")
                }

                function Ae(e, n, t) {
                    return t.indexOf(e) === n
                }

                function Te(e, n) {
                    return e.concat(n)
                }

                function Ie(e, n) {
                    var t;
                    if (e) return n.some((function(n) {
                        var r = (0, f.sE)(n.bids, (function(n) {
                            return ["bidId", "adId", "bid_id"].some((function(t) {
                                return n[t] === e
                            }))
                        }));
                        return r && (t = r), r
                    })), t
                }

                function Oe(e) {
                    return Object.keys(e)
                }

                function Se(e, n) {
                    return e[n]
                }

                function Be(e, n) {
                    for (var t in e)
                        if (e.hasOwnProperty(t) && e[t] === n) return t
                }

                function ke() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : epbjs.adUnits;
                    return e.map((function(e) {
                        return e.bids.map((function(e) {
                            return e.bidder
                        })).reduce(Te, [])
                    })).reduce(Te, []).filter(Ae)
                }

                function je() {
                    if (window.googletag && te(window.googletag.pubads) && te(window.googletag.pubads().getSlots)) return !0
                }

                function Ue() {
                    if (window.apntag && te(window.apntag.getTag)) return !0
                }
                var _e = qe("timeToRespond", (function(e, n) {
                        return e > n
                    })),
                    Re = qe("responseTimestamp", (function(e, n) {
                        return e > n
                    })),
                    Pe = qe("responseTimestamp", (function(e, n) {
                        return e < n
                    }));

                function qe(e, n) {
                    return function(t, r) {
                        return t.cpm === r.cpm ? n(t[e], r[e]) ? r : t : t.cpm < r.cpm ? r : t
                    }
                }

                function De(e) {
                    for (var n = e.length; n > 0;) {
                        var t = Math.floor(Math.random() * n),
                            r = e[--n];
                        e[n] = e[t], e[t] = r
                    }
                    return e
                }

                function Ze(e, n) {
                    return (0, f.q9)(e, n && n.adUnitCode)
                }

                function xe(e) {
                    return d()(e)
                }

                function Ne() {
                    try {
                        return T.getWindowSelf() !== T.getWindowTop()
                    } catch (e) {
                        return !0
                    }
                }

                function Me() {
                    return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)
                }

                function Fe(e, n) {
                    if (e) return e.replace(/\$\{AUCTION_PRICE\}/g, n)
                }

                function We(e, n) {
                    if (e && n && "string" == typeof n) return e.replace(/\${CLICKTHROUGH}/g, n)
                }

                function ze() {
                    return (new Date).getTime()
                }

                function Ke() {
                    return window.performance && window.performance.now && window.performance.now() || 0
                }

                function Le() {
                    return !1 !== c.vc.getConfig("deviceAccess")
                }

                function He() {
                    if (window.navigator.cookieEnabled || document.cookie.length) return !0
                }

                function Ge(e, n) {
                    if (n < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(n));
                    var t = 0;
                    return function() {
                        ++t === n && e.apply(this, arguments)
                    }
                }

                function Ve(e, n) {
                    return e.reduce((function(e, t) {
                        return (e[t[n]] = e[t[n]] || []).push(t), e
                    }), {})
                }

                function Qe(e, n) {
                    return n.filter((function(n) {
                        return e[n]
                    })).reduce((function(n, t) {
                        return Object.assign(n, (0, a.Z)({}, t, e[t]))
                    }), {})
                }

                function Je(e) {
                    var n = ["banner", "native", "video"];
                    return !!Object.keys(e).every((function(e) {
                        return (0, f.q9)(n, e)
                    })) && (!e.video || !e.video.context || (0, f.q9)(["instream", "outstream", "adpod"], e.video.context))
                }

                function Ye(e, n, t) {
                    return e.filter((function(e) {
                        return e.code === n
                    })).map((function(e) {
                        return e.bids
                    })).reduce(Te, []).filter((function(e) {
                        return e.bidder === t
                    })).map((function(e) {
                        return e.params || {}
                    }))
                }

                function Xe() {
                    return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
                }
                var $e = function(e, n) {
                    return e.getAdUnitPath() === n || e.getSlotElementId() === n
                };

                function en(e) {
                    return function(n) {
                        return $e(e, n)
                    }
                }

                function nn(e) {
                    return function(n) {
                        return $e(n, e)
                    }
                }

                function tn(e) {
                    var n;
                    return je() && (n = (0, f.sE)(window.googletag.pubads().getSlots(), nn(e))), n
                }

                function rn(e) {
                    var n = tn(e);
                    return n ? {
                        gptSlot: n.getAdUnitPath(),
                        divId: n.getSlotElementId()
                    } : {}
                }

                function on(e, n) {
                    var t = Object.keys(e.mediaTypes || {
                        banner: "banner"
                    }).join(", ");
                    return "\n    ".concat(e.code, " is a ").concat(t, " ad unit\n    containing bidders that don't support ").concat(t, ": ").concat(n, ".\n    This bidder won't fetch demand.\n  ")
                }

                function an(e) {
                    return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
                }

                function un(e) {
                    return e.replace(/(?:^|\.?)([A-Z])/g, (function(e, n) {
                        return "_" + n.toLowerCase()
                    })).replace(/^_/, "")
                }

                function cn(e) {
                    return Object.keys(e).reduce((function(n, t) {
                        return void 0 !== e[t] && (n[t] = e[t]), n
                    }), {})
                }

                function sn(e, n) {
                    return "object" !== (0, u.Z)(e) ? {} : n.reduce((function(t, r, i) {
                        if ("function" == typeof r) return t;
                        var o = r,
                            a = r.match(/^(.+?)\sas\s(.+?)$/i);
                        a && (r = a[1], o = a[2]);
                        var u = e[r];
                        return "function" == typeof n[i + 1] && (u = n[i + 1](u, t)), void 0 !== u && (t[o] = u), t
                    }), {})
                }

                function dn(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "keywords",
                        t = [];
                    return de(e, (function(e, r) {
                        if (ie(e)) {
                            var i = [];
                            de(e, (function(e) {
                                ((e = Ce(n + "." + r, e)) || "" === e) && i.push(e)
                            })), e = i
                        } else {
                            if (!re(e = Ce(n + "." + r, e))) return;
                            e = [e]
                        }
                        t.push({
                            key: r,
                            value: e
                        })
                    })), t
                }

                function fn(e, n) {
                    return Object.keys(e).forEach((function(t) {
                        var r, i;
                        n[t] && (te(e[t]) ? n[t] = e[t](n[t]) : n[t] = (r = e[t], i = n[t], "string" === r ? i && i.toString() : "number" === r ? Number(i) : i), isNaN(n[t]) && delete n.key)
                    })), n
                }

                function ln(e, n) {
                    return ie(e) && (!n || e.length === n) && e.every((function(e) {
                        return an(e)
                    }))
                }

                function gn(e, n) {
                    for (var t = [], r = 0; r < n; r++) {
                        var i = ae(e) ? xe(e) : e;
                        t.push(i)
                    }
                    return t
                }

                function pn(e, n) {
                    for (var t = [], r = 0; r < Math.ceil(e.length / n); r++) {
                        var i = r * n,
                            o = i + n;
                        t.push(e.slice(i, o))
                    }
                    return t
                }

                function vn(e) {
                    return Math.min.apply(Math, (0, o.Z)(e))
                }

                function hn(e) {
                    return Math.max.apply(Math, (0, o.Z)(e))
                }

                function mn(e) {
                    return function(n, t) {
                        return n[e] < t[e] ? 1 : n[e] > t[e] ? -1 : 0
                    }
                }

                function bn(e) {
                    return e ? e.replace(/^\?/, "").split("&").reduce((function(e, n) {
                        var t = n.split("="),
                            r = (0, i.Z)(t, 2),
                            o = r[0],
                            a = r[1];
                        return /\[\]$/.test(o) ? (e[o = o.replace("[]", "")] = e[o] || [], e[o].push(a)) : e[o] = a || "", e
                    }), {}) : {}
                }

                function yn(e) {
                    return Object.keys(e).map((function(n) {
                        return Array.isArray(e[n]) ? e[n].map((function(e) {
                            return "".concat(n, "[]=").concat(e)
                        })).join("&") : "".concat(n, "=").concat(e[n])
                    })).join("&")
                }

                function En(e, n) {
                    var t = document.createElement("a");
                    n && "noDecodeWholeURL" in n && n.noDecodeWholeURL ? t.href = e : t.href = decodeURIComponent(e);
                    var r = n && "decodeSearchAsString" in n && n.decodeSearchAsString;
                    return {
                        href: t.href,
                        protocol: (t.protocol || "").replace(/:$/, ""),
                        hostname: t.hostname,
                        port: +t.port,
                        pathname: t.pathname.replace(/^(?!\/)/, "/"),
                        search: r ? t.search : T.parseQS(t.search || ""),
                        hash: (t.hash || "").replace(/^#/, ""),
                        host: t.host || window.location.host
                    }
                }

                function wn(e) {
                    return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(T.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
                }

                function Cn(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = t.checkTypes,
                        i = void 0 !== r && r;
                    if (e === n) return !0;
                    if ("object" !== (0, u.Z)(e) || null === e || "object" !== (0, u.Z)(n) || null === n || i && e.constructor !== n.constructor) return !1;
                    if (Object.keys(e).length !== Object.keys(n).length) return !1;
                    for (var o in e) {
                        if (!n.hasOwnProperty(o)) return !1;
                        if (!Cn(e[o], n[o], {
                                checkTypes: i
                            })) return !1
                    }
                    return !0
                }

                function An(e) {
                    for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                    if (!t.length) return e;
                    var i = t.shift();
                    if (ae(e) && ae(i)) {
                        var u = function(n) {
                            ae(i[n]) ? (e[n] || Object.assign(e, (0, a.Z)({}, n, {})), An(e[n], i[n])) : ie(i[n]) ? e[n] ? ie(e[n]) && i[n].forEach((function(t) {
                                for (var r = 1, i = 0; i < e[n].length; i++)
                                    if (Cn(e[n][i], t)) {
                                        r = 0;
                                        break
                                    }
                                r && e[n].push(t)
                            })) : Object.assign(e, (0, a.Z)({}, n, (0, o.Z)(i[n]))) : Object.assign(e, (0, a.Z)({}, n, i[n]))
                        };
                        for (var c in i) u(c)
                    }
                    return An.apply(void 0, [e].concat(t))
                }

                function Tn(e) {
                    for (var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = function(e, n) {
                            if (te(Math.imul)) return Math.imul(e, n);
                            var t = (4194303 & e) * (n |= 0);
                            return 4290772992 & e && (t += (4290772992 & e) * n | 0), 0 | t
                        }, i = 3735928559 ^ t, o = 1103547991 ^ t, a = 0; a < e.length; a++) i = r(i ^ (n = e.charCodeAt(a)), 2654435761), o = r(o ^ n, 1597334677);
                    return i = r(i ^ i >>> 16, 2246822507) ^ r(o ^ o >>> 13, 3266489909), (4294967296 * (2097151 & (o = r(o ^ o >>> 16, 2246822507) ^ r(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString()
                }

                function In(e) {
                    return e ? e.defaultView : null
                }

                function On(e) {
                    try {
                        return JSON.parse(e)
                    } catch (e) {}
                }

                function Sn(e, n) {
                    for (var t in n) n.hasOwnProperty(t) && e.setAttribute(t, n[t])
                }
                var Bn, kn = (Bn = {
                    "<": "\\u003C",
                    ">": "\\u003E",
                    "/": "\\u002F",
                    "\\": "\\\\",
                    "\b": "\\b",
                    "\f": "\\f",
                    "\n": "\\n",
                    "\r": "\\r",
                    "\t": "\\t",
                    "\0": "\\0",
                    "\u2028": "\\u2028",
                    "\u2029": "\\u2029"
                }, function(e) {
                    return e.replace(/[<>\b\f\n\r\t\0\u2028\u2029\\]/g, (function(e) {
                        return Bn[e]
                    }))
                })
            },
            99128: function(e, n, t) {
                t.d(n, {
                    A: function() {
                        return w
                    },
                    Bf: function() {
                        return h
                    },
                    V6: function() {
                        return b
                    },
                    g3: function() {
                        return E
                    }
                });
                var r = t(93324),
                    i = t(3193);

                function o(e, n) {
                    var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!t) {
                        if (Array.isArray(e) || (t = function(e, n) {
                                if (!e) return;
                                if ("string" == typeof e) return a(e, n);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === t && e.constructor && (t = e.constructor.name);
                                if ("Map" === t || "Set" === t) return Array.from(e);
                                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return a(e, n)
                            }(e)) || n && e && "number" == typeof e.length) {
                            t && (e = t);
                            var r = 0,
                                i = function() {};
                            return {
                                s: i,
                                n: function() {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: i
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, u = !0,
                        c = !1;
                    return {
                        s: function() {
                            t = t.call(e)
                        },
                        n: function() {
                            var e = t.next();
                            return u = e.done, e
                        },
                        e: function(e) {
                            c = !0, o = e
                        },
                        f: function() {
                            try {
                                u || null == t.return || t.return()
                            } finally {
                                if (c) throw o
                            }
                        }
                    }
                }

                function a(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r
                }
                var u = "performanceMetrics",
                    c = window.performance && window.performance.now ? function() {
                        return window.performance.now()
                    } : function() {
                        return Date.now()
                    },
                    s = new WeakMap;

                function d() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.now,
                        t = void 0 === n ? c : n,
                        r = e.mkNode,
                        i = void 0 === r ? g : r,
                        o = e.mkTimer,
                        a = void 0 === o ? l : o,
                        u = e.mkRenamer,
                        d = void 0 === u ? function(e) {
                            return e
                        } : u,
                        f = e.nodes,
                        p = void 0 === f ? s : f;
                    return function() {
                        return function e(n) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                                return {
                                    forEach: function(n) {
                                        n(e)
                                    }
                                }
                            };

                            function o(e) {
                                return function(t) {
                                    return n.dfWalk({
                                        visit: function(n, r) {
                                            var i = r[e];
                                            if (i.hasOwnProperty(t)) return i[t]
                                        }
                                    })
                                }
                            }
                            r = d(r);
                            var u = o("timestamps");

                            function c(e, t) {
                                var i = r(e);
                                n.dfWalk({
                                    follow: function(e, n) {
                                        return n.propagate && (!e || !e.stopPropagation)
                                    },
                                    visit: function(e, n) {
                                        i.forEach((function(r) {
                                            null == e ? n.metrics[r] = t : (n.groups.hasOwnProperty(r) || (n.groups[r] = []), n.groups[r].push(t))
                                        }))
                                    }
                                })
                            }

                            function s(e) {
                                n.timestamps[e] = t()
                            }

                            function f(e, n) {
                                var r = u(e),
                                    i = null != r ? t() - r : null;
                                return null != n && c(n, i), i
                            }

                            function l(e, n, t) {
                                var r = u(e),
                                    i = u(n),
                                    o = null != r && null != i ? i - r : null;
                                return null != t && c(t, o), o
                            }

                            function g(e) {
                                return a(t, (function(n) {
                                    return c(e, n)
                                }))
                            }

                            function v(e, n) {
                                return g(e).stopAfter(n)()
                            }

                            function h(e, n, t) {
                                var r = g(e);
                                return t(function(e) {
                                    var n = r.stopBefore(e);
                                    return n.bail = e.bail && r.stopBefore(e.bail), n.stopTiming = r, n.untimed = e, n
                                }(n))
                            }

                            function m() {
                                var e = {};
                                return n.dfWalk({
                                    visit: function(n, t) {
                                        e = Object.assign({}, !n || n.includeGroups ? t.groups : null, t.metrics, e)
                                    }
                                }), e
                            }

                            function b() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    o = t.propagate,
                                    a = void 0 === o || o,
                                    u = t.stopPropagation,
                                    c = void 0 !== u && u,
                                    s = t.includeGroups,
                                    d = void 0 !== s && s;
                                return e(i([
                                    [n, {
                                        propagate: a,
                                        stopPropagation: c,
                                        includeGroups: d
                                    }]
                                ]), r)
                            }

                            function y(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    r = t.propagate,
                                    i = void 0 === r || r,
                                    o = t.stopPropagation,
                                    a = void 0 !== o && o,
                                    u = t.includeGroups,
                                    c = void 0 !== u && u,
                                    s = p.get(e);
                                null != s && s.addParent(n, {
                                    propagate: i,
                                    stopPropagation: a,
                                    includeGroups: c
                                })
                            }

                            function E(t) {
                                return e(n, t)
                            }

                            function w() {
                                return e(n.newSibling(), r)
                            }
                            var C = {
                                startTiming: g,
                                measureTime: v,
                                measureHookTime: h,
                                checkpoint: s,
                                timeSince: f,
                                timeBetween: l,
                                setMetric: c,
                                getMetrics: m,
                                fork: b,
                                join: y,
                                newMetrics: w,
                                renameWith: E,
                                toJSON: function() {
                                    return m()
                                }
                            };
                            return p.set(C, n), C
                        }(i([]))
                    }
                }

                function f(e, n, t) {
                    return function() {
                        n && n();
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            t && t()
                        }
                    }
                }

                function l(e, n) {
                    var t = e(),
                        r = !1;

                    function i() {
                        r || (n(e() - t), r = !0)
                    }
                    return i.stopBefore = function(e) {
                        return f(e, i)
                    }, i.stopAfter = function(e) {
                        return f(e, null, i)
                    }, i
                }

                function g(e) {
                    return {
                        metrics: {},
                        timestamps: {},
                        groups: {},
                        addParent: function(n, t) {
                            e.push([n, t])
                        },
                        newSibling: function() {
                            return g(e.slice())
                        },
                        dfWalk: function() {
                            var n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                i = t.visit,
                                a = t.follow,
                                u = void 0 === a ? function() {
                                    return !0
                                } : a,
                                c = t.visited,
                                s = void 0 === c ? new Set : c,
                                d = t.inEdge;
                            if (!s.has(this)) {
                                if (s.add(this), null != (n = i(d, this))) return n;
                                var f, l = o(e);
                                try {
                                    for (l.s(); !(f = l.n()).done;) {
                                        var g = (0, r.Z)(f.value, 2),
                                            p = g[0],
                                            v = g[1];
                                        if (u(d, v) && null != (n = p.dfWalk({
                                                visit: i,
                                                follow: u,
                                                visited: s,
                                                inEdge: v
                                            }))) return n
                                    }
                                } catch (e) {
                                    l.e(e)
                                } finally {
                                    l.f()
                                }
                            }
                        }
                    }
                }
                var p = function() {
                        var e = function() {},
                            n = function() {
                                return {}
                            },
                            t = {
                                forEach: e
                            },
                            r = function() {
                                return null
                            };
                        r.stopBefore = function(e) {
                            return e
                        }, r.stopAfter = function(e) {
                            return e
                        };
                        var i = Object.defineProperties({
                            dfWalk: e,
                            newSibling: function() {
                                return i
                            },
                            addParent: e
                        }, Object.fromEntries(["metrics", "timestamps", "groups"].map((function(e) {
                            return [e, {
                                get: n
                            }]
                        }))));
                        return d({
                            now: function() {
                                return 0
                            },
                            mkNode: function() {
                                return i
                            },
                            mkRenamer: function() {
                                return function() {
                                    return t
                                }
                            },
                            mkTimer: function() {
                                return r
                            },
                            nodes: {
                                get: e,
                                set: e
                            }
                        })()
                    }(),
                    v = !0;

                function h(e) {
                    return v && e || p
                }
                i.vc.getConfig(u, (function(e) {
                    v = !!e[u]
                }));
                var m, b = (m = d(), function() {
                    return v ? m() : p
                });

                function y(e, n) {
                    return function(t, r) {
                        return function(i) {
                            for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++) a[u - 1] = arguments[u];
                            var c = this;
                            return h(n.apply(c, a)).measureHookTime(e + t, i, (function(e) {
                                return r.call.apply(r, [c, e].concat(a))
                            }))
                        }
                    }
                }
                var E = y("requestBids.", (function(e) {
                        return e.metrics
                    })),
                    w = y("addBidResponse.", (function(e, n) {
                        return n.metrics
                    }))
            },
            68792: function(e, n, t) {
                t.d(n, {
                    P: function() {
                        return E
                    },
                    Z: function() {
                        return y
                    }
                });
                var r = t(93324),
                    i = t(15671),
                    o = t(43144),
                    a = t(97326),
                    u = t(88301),
                    c = t(60136),
                    s = t(82963),
                    d = t(61120),
                    f = t(18916),
                    l = t(42793),
                    g = t(78640);

                function p(e) {
                    var n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var t, r = (0, d.Z)(e);
                        if (n) {
                            var i = (0, d.Z)(this).constructor;
                            t = Reflect.construct(r, arguments, i)
                        } else t = r.apply(this, arguments);
                        return (0, s.Z)(this, t)
                    }
                }

                function v(e, n, t) {
                    ! function(e, n) {
                        if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                    }(e, n), n.set(e, t)
                }
                var h = new WeakMap,
                    m = new WeakMap,
                    b = new WeakMap,
                    y = function(e) {
                        (0, c.Z)(t, e);
                        var n = p(t);

                        function t(e) {
                            var r;
                            (0, i.Z)(this, t);
                            var o = [],
                                u = [];

                            function c(e, n) {
                                return function(t) {
                                    if (!o.length) {
                                        for (o.push(e, t); u.length;) u.shift()();
                                        n(t)
                                    }
                                }
                            }
                            return r = n.call(this, "function" != typeof e ? e : function(n, t) {
                                var r, i = c(1, t),
                                    o = (r = c(0, n), function(e) {
                                        return "function" == typeof(null == e ? void 0 : e.then) ? e.then(r, i) : r(e)
                                    });
                                try {
                                    e(o, i)
                                } catch (e) {
                                    i(e)
                                }
                            }), v((0, a.Z)(r), h, {
                                writable: !0,
                                value: void 0
                            }), v((0, a.Z)(r), m, {
                                writable: !0,
                                value: void 0
                            }), v((0, a.Z)(r), b, {
                                writable: !0,
                                value: null
                            }), (0, l.Z)((0, a.Z)(r), h, o), (0, l.Z)((0, a.Z)(r), m, u), r
                        }
                        return (0, o.Z)(t, [{
                            key: "then",
                            value: function(e, n) {
                                var i = this;
                                if ("function" == typeof n)
                                    for (var o = this; o;) {
                                        (0, u.Z)((0, d.Z)(t.prototype), "then", this).call(o, null, (function() {
                                            return null
                                        }));
                                        var a = (0, f.Z)(o, b);
                                        (0, l.Z)(o, b, null), o = a
                                    }
                                var c = (0, f.Z)(this, h),
                                    s = new t((function(t, o) {
                                        var a = function() {
                                            var i = c[1],
                                                a = 0 === c[0] ? [e, t] : [n, o],
                                                u = (0, r.Z)(a, 2),
                                                s = u[0],
                                                d = u[1];
                                            if ("function" == typeof s) {
                                                try {
                                                    i = s(i)
                                                } catch (e) {
                                                    return void o(e)
                                                }
                                                d = t
                                            }
                                            d(i)
                                        };
                                        c.length ? a() : (0, f.Z)(i, m).push(a)
                                    }));
                                return (0, l.Z)(s, b, this), s
                            }
                        }], [{
                            key: "timeout",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                return new t((function(n) {
                                    0 === e ? n() : setTimeout(n, e)
                                }))
                            }
                        }]), t
                    }((0, g.R)().Promise || Promise);

                function E() {
                    var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = t.promiseFactory,
                        i = void 0 === r ? function(e) {
                            return new y(e)
                        } : r;

                    function o(e) {
                        return function(n) {
                            return e(n)
                        }
                    }
                    return {
                        promise: i((function(t, r) {
                            e = t, n = r
                        })),
                        resolve: o(e),
                        reject: o(n)
                    }
                }
            },
            90154: function(e, n, t) {
                t.d(n, {
                    Dn: function() {
                        return d
                    },
                    LD: function() {
                        return s
                    },
                    gZ: function() {
                        return c
                    },
                    hD: function() {
                        return f
                    }
                });
                var r = t(20265),
                    i = t(64358),
                    o = t(3193),
                    a = t(92797),
                    u = t(78653),
                    c = "outstream",
                    s = "instream";

                function d(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.index,
                        i = void 0 === t ? u.K.index : t,
                        o = (0, r.Z)(i.getMediaTypes(e), "video"),
                        a = o && (0, r.Z)(o, "context"),
                        c = o && (0, r.Z)(o, "useCacheKey"),
                        s = i.getAdUnit(e);
                    return f(e, s, o, a, c)
                }
                var f = (0, a.z3)("sync", (function(e, n, t, r, a) {
                    return t && (a || r !== c) ? o.vc.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0, i.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with epbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : !(r === c && !a) || !!(e.renderer || n && n.renderer || t.renderer)
                }), "checkVideoBidSetup")
            },
            79885: function(e, n, t) {
                t.d(n, {
                    h: function() {
                        return c
                    },
                    z: function() {
                        return s
                    }
                });
                var r = t(48928),
                    i = t(3193),
                    o = t(78653);

                function a(e, n) {
                    var t = n ? "<![CDATA[".concat(n, "]]>") : "";
                    return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(e, "]]></VASTAdTagURI>\n        <Impression>").concat(t, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")
                }

                function u(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.index,
                        r = void 0 === t ? o.K.index : t,
                        u = e.vastXml ? e.vastXml : a(e.vastUrl, e.vastImpUrl),
                        c = r.getAuction(e),
                        s = Number(e.ttl) + 15,
                        d = {
                            type: "xml",
                            value: u,
                            ttlseconds: s
                        };
                    return i.vc.getConfig("cache.vasttrack") && (d.bidder = e.bidder, d.bidid = e.requestId, d.aid = e.auctionId), null != c && (d.timestamp = c.getAuctionStart()), "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (d.key = e.customCacheKey), d
                }

                function c(e, n) {
                    var t = {
                        puts: e.map(u)
                    };
                    (0, r.h)(i.vc.getConfig("cache.url"), function(e) {
                        return {
                            success: function(n) {
                                var t;
                                try {
                                    t = JSON.parse(n).responses
                                } catch (n) {
                                    return void e(n, [])
                                }
                                t ? e(null, t) : e(new Error("The cache server didn't respond with a responses property."), [])
                            },
                            error: function(n, t) {
                                e(new Error("Error storing video ad in the cache: ".concat(n, ": ").concat(JSON.stringify(t))), [])
                            }
                        }
                    }(n), JSON.stringify(t), {
                        contentType: "text/plain",
                        withCredentials: !0
                    })
                }

                function s(e) {
                    return "".concat(i.vc.getConfig("cache.url"), "?uuid=").concat(e)
                }
            },
            20265: function(e, n, t) {
                function r(e, n, t, r, i) {
                    for (n = n.split ? n.split(".") : n, r = 0; r < n.length; r++) e = e ? e[n[r]] : i;
                    return e === i ? t : e
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            81432: function(e) {
                /*
                 * @license MIT
                 * Fun Hooks v0.9.10
                 * (c) @snapwich
                 */
                a.SYNC = 1, a.ASYNC = 2, a.QUEUE = 4;
                var n = Object.freeze({
                        useProxy: !0,
                        ready: 0
                    }),
                    t = new WeakMap,
                    r = "2,1,0" === [1].reduce((function(e, n, t) {
                        return [e, n, t]
                    }), 2).toString() ? Array.prototype.reduce : function(e, n) {
                        var t, r = Object(this),
                            i = r.length >>> 0,
                            o = 0;
                        if (n) t = n;
                        else {
                            for (; o < i && !(o in r);) o++;
                            t = r[o++]
                        }
                        for (; o < i;) o in r && (t = e(t, r[o], o, r)), o++;
                        return t
                    };

                function i(e, n) {
                    return Array.prototype.slice.call(e, n)
                }
                var o = Object.assign || function(e) {
                    return r.call(i(arguments, 1), (function(e, n) {
                        return n && Object.keys(n).forEach((function(t) {
                            e[t] = n[t]
                        })), e
                    }), e)
                };

                function a(e) {
                    var u, c = {},
                        s = [];

                    function d(e, n) {
                        return "function" == typeof e ? p.call(null, "sync", e, n) : "string" == typeof e && "function" == typeof n ? p.apply(null, arguments) : "object" == typeof e ? f.apply(null, arguments) : void 0
                    }

                    function f(e, n, t) {
                        var r = !0;
                        void 0 === n && (n = Object.getOwnPropertyNames(e), r = !1);
                        var i = {},
                            o = ["constructor"];
                        do {
                            (n = n.filter((function(n) {
                                return !("function" != typeof e[n] || -1 !== o.indexOf(n) || n.match(/^_/))
                            }))).forEach((function(n) {
                                var r = n.split(":"),
                                    o = r[0],
                                    a = r[1] || "sync";
                                if (!i[o]) {
                                    var u = e[o];
                                    i[o] = e[o] = p(a, u, t ? [t, o] : void 0)
                                }
                            })), e = Object.getPrototypeOf(e)
                        } while (r && e);
                        return i
                    }

                    function l(e) {
                        var n = Array.isArray(e) ? e : e.split(".");
                        return r.call(n, (function(t, r, i) {
                            var o = t[r],
                                a = !1;
                            return o || (i === n.length - 1 ? (u || s.push((function() {
                                a || console.warn("fun-hooks: referenced '" + e + "' but it was never created")
                            })), t[r] = g((function(e) {
                                t[r] = e, a = !0
                            }))) : t[r] = {})
                        }), c)
                    }

                    function g(e) {
                        var n = [],
                            r = [],
                            i = function() {},
                            a = {
                                before: function(e, t) {
                                    return c.call(this, n, "before", e, t)
                                },
                                after: function(e, n) {
                                    return c.call(this, r, "after", e, n)
                                },
                                getHooks: function(e) {
                                    var t = n.concat(r);
                                    "object" == typeof e && (t = t.filter((function(n) {
                                        return Object.keys(e).every((function(t) {
                                            return n[t] === e[t]
                                        }))
                                    })));
                                    try {
                                        o(t, {
                                            remove: function() {
                                                return t.forEach((function(e) {
                                                    e.remove()
                                                })), this
                                            }
                                        })
                                    } catch (e) {
                                        console.error("error adding 'remove' to array, did you modify Array.prototype?")
                                    }
                                    return t
                                },
                                removeAll: function() {
                                    return this.getHooks().remove()
                                }
                            },
                            u = {
                                install: function(t, o, a) {
                                    this.type = t, i = a, a(n, r), e && e(o)
                                }
                            };
                        return t.set(a.after, u), a;

                        function c(e, t, o, a) {
                            var u = {
                                hook: o,
                                type: t,
                                priority: a || 10,
                                remove: function() {
                                    var t = e.indexOf(u); - 1 !== t && (e.splice(t, 1), i(n, r))
                                }
                            };
                            return e.push(u), e.sort((function(e, n) {
                                return n.priority - e.priority
                            })), i(n, r), this
                        }
                    }

                    function p(n, r, c) {
                        var d = r.after && t.get(r.after);
                        if (d) {
                            if (d.type !== n) throw "fun-hooks: recreated hookable with different type";
                            return r
                        }
                        var f, p, v = c ? l(c) : g(),
                            h = {
                                get: function(e, n) {
                                    return v[n] || Reflect.get.apply(Reflect, arguments)
                                }
                            };
                        return u || s.push(m), e.useProxy && "function" == typeof Proxy && Proxy.revocable ? p = new Proxy(r, h) : (p = function() {
                            return h.apply ? h.apply(r, this, i(arguments)) : r.apply(this, arguments)
                        }, o(p, v)), t.get(p.after).install(n, p, (function(e, t) {
                            var r, o = [];
                            e.length || t.length ? (e.forEach(a), r = o.push(void 0) - 1, t.forEach(a), f = function(e, t, a) {
                                var u, c = 0,
                                    s = "async" === n && "function" == typeof a[a.length - 1] && a.pop();

                                function d(e) {
                                    "sync" === n ? u = e : s && s.apply(null, arguments)
                                }

                                function f(e) {
                                    if (o[c]) {
                                        var r = i(arguments);
                                        return f.bail = d, r.unshift(f), o[c++].apply(t, r)
                                    }
                                    "sync" === n ? u = e : s && s.apply(null, arguments)
                                }
                                return o[r] = function() {
                                    var r = i(arguments, 1);
                                    "async" === n && s && (delete f.bail, r.push(f));
                                    var o = e.apply(t, r);
                                    "sync" === n && f(o)
                                }, f.apply(null, a), u
                            }) : f = void 0;

                            function a(e) {
                                o.push(e.hook)
                            }
                            m()
                        })), p;

                        function m() {
                            !u && ("sync" !== n || e.ready & a.SYNC) && ("async" !== n || e.ready & a.ASYNC) ? "sync" !== n && e.ready & a.QUEUE ? h.apply = function() {
                                var e = arguments;
                                s.push((function() {
                                    p.apply(e[1], e[2])
                                }))
                            } : h.apply = function() {
                                throw "fun-hooks: hooked function not ready"
                            } : h.apply = f
                        }
                    }
                    return (e = o({}, n, e)).ready ? d.ready = function() {
                        u = !0,
                            function(e) {
                                for (var n; n = e.shift();) n()
                            }(s)
                    } : u = !0, d.get = l, d
                }
                e.exports = a
            },
            77079: function(e) {
                e.exports = function e(n) {
                    var t = Array.isArray(n) ? [] : {};
                    for (var r in n) {
                        var i = n[r];
                        t[r] = i && "object" == typeof i ? e(i) : i
                    }
                    return t
                }
            },
            30907: function(e, n, t) {
                function r(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            83878: function(e, n, t) {
                function r(e) {
                    if (Array.isArray(e)) return e
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            45057: function(e, n, t) {
                t.d(n, {
                    Z: function() {
                        return i
                    }
                });
                var r = t(30907);

                function i(e) {
                    if (Array.isArray(e)) return (0, r.Z)(e)
                }
            },
            97326: function(e, n, t) {
                function r(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            26983: function(e, n, t) {
                function r(e, n) {
                    return n.get ? n.get.call(e) : n.value
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            86011: function(e, n, t) {
                function r(e, n, t) {
                    if (n.set) n.set.call(e, t);
                    else {
                        if (!n.writable) throw new TypeError("attempted to set read only private field");
                        n.value = t
                    }
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            15671: function(e, n, t) {
                function r(e, n) {
                    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            1519: function(e, n, t) {
                function r(e, n, t) {
                    if (!n.has(e)) throw new TypeError("attempted to " + t + " private field on non-instance");
                    return n.get(e)
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            18916: function(e, n, t) {
                t.d(n, {
                    Z: function() {
                        return o
                    }
                });
                var r = t(26983),
                    i = t(1519);

                function o(e, n) {
                    var t = (0, i.Z)(e, n, "get");
                    return (0, r.Z)(e, t)
                }
            },
            42793: function(e, n, t) {
                t.d(n, {
                    Z: function() {
                        return o
                    }
                });
                var r = t(86011),
                    i = t(1519);

                function o(e, n, t) {
                    var o = (0, i.Z)(e, n, "set");
                    return (0, r.Z)(e, o, t), t
                }
            },
            43144: function(e, n, t) {
                function r(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var r = n[t];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function i(e, n, t) {
                    return n && r(e.prototype, n), t && r(e, t), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }
                t.d(n, {
                    Z: function() {
                        return i
                    }
                })
            },
            4942: function(e, n, t) {
                function r(e, n, t) {
                    return n in e ? Object.defineProperty(e, n, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = t, e
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            88301: function(e, n, t) {
                t.d(n, {
                    Z: function() {
                        return i
                    }
                });
                var r = t(18415);

                function i() {
                    return i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, n, t) {
                        var i = (0, r.Z)(e, n);
                        if (i) {
                            var o = Object.getOwnPropertyDescriptor(i, n);
                            return o.get ? o.get.call(arguments.length < 3 ? e : t) : o.value
                        }
                    }, i.apply(this, arguments)
                }
            },
            61120: function(e, n, t) {
                function r(e) {
                    return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, r(e)
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            60136: function(e, n, t) {
                t.d(n, {
                    Z: function() {
                        return i
                    }
                });
                var r = t(89611);

                function i(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), n && (0, r.Z)(e, n)
                }
            },
            59199: function(e, n, t) {
                function r(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            31902: function(e, n, t) {
                function r(e, n) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var r, i, o = [],
                            a = !0,
                            u = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done) && (o.push(r.value), !n || o.length !== n); a = !0);
                        } catch (e) {
                            u = !0, i = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (u) throw i
                            }
                        }
                        return o
                    }
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            25267: function(e, n, t) {
                function r() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            42786: function(e, n, t) {
                function r() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            82963: function(e, n, t) {
                t.d(n, {
                    Z: function() {
                        return o
                    }
                });
                var r = t(71002),
                    i = t(97326);

                function o(e, n) {
                    if (n && ("object" === (0, r.Z)(n) || "function" == typeof n)) return n;
                    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                    return (0, i.Z)(e)
                }
            },
            89611: function(e, n, t) {
                function r(e, n) {
                    return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, n) {
                        return e.__proto__ = n, e
                    }, r(e, n)
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            93324: function(e, n, t) {
                t.d(n, {
                    Z: function() {
                        return u
                    }
                });
                var r = t(83878),
                    i = t(31902),
                    o = t(40181),
                    a = t(25267);

                function u(e, n) {
                    return (0, r.Z)(e) || (0, i.Z)(e, n) || (0, o.Z)(e, n) || (0, a.Z)()
                }
            },
            18415: function(e, n, t) {
                t.d(n, {
                    Z: function() {
                        return i
                    }
                });
                var r = t(61120);

                function i(e, n) {
                    for (; !Object.prototype.hasOwnProperty.call(e, n) && null !== (e = (0, r.Z)(e)););
                    return e
                }
            },
            89062: function(e, n, t) {
                t.d(n, {
                    Z: function() {
                        return u
                    }
                });
                var r = t(45057),
                    i = t(59199),
                    o = t(40181),
                    a = t(42786);

                function u(e) {
                    return (0, r.Z)(e) || (0, i.Z)(e) || (0, o.Z)(e) || (0, a.Z)()
                }
            },
            71002: function(e, n, t) {
                function r(e) {
                    return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, r(e)
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            40181: function(e, n, t) {
                t.d(n, {
                    Z: function() {
                        return i
                    }
                });
                var r = t(30907);

                function i(e, n) {
                    if (e) {
                        if ("string" == typeof e) return (0, r.Z)(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0, r.Z)(e, n) : void 0
                    }
                }
            },
            96475: function(e, n, t) {
                function r(e, n, t) {
                    n.split && (n = n.split("."));
                    for (var r, i, o = 0, a = n.length, u = e; o < a && "__proto__" !== (i = n[o++]) && "constructor" !== i && "prototype" !== i;) u = u[i] = o === a ? t : typeof(r = u[i]) == typeof n ? r : 0 * n[o] != 0 || ~("" + n[o]).indexOf(".") ? {} : []
                }
                t.d(n, {
                    N: function() {
                        return r
                    }
                })
            },
            5644: function(e) {
                e.exports = JSON.parse('{"k2":{"xn":"adserverTargeting","zF":"standard"},"f":"pbjs_debug","Q_":{"GOOD":1,"NO_BID":2},"FP":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","NO_BID":"noBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","BIDDER_ERROR":"bidderError","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","BEFORE_BIDDER_HTTP":"beforeBidderHttp","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed","AD_RENDER_SUCCEEDED":"adRenderSucceeded","TCF2_ENFORCEMENT":"tcf2Enforcement","AUCTION_DEBUG":"auctionDebug","BID_VIEWABLE":"bidViewable","STALE_RENDER":"staleRender","BILLABLE_EVENT":"billableEvent"},"q_":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocument","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"aI":{"bidWon":"adUnitCode"},"Ql":{"yE":"low","M2":"medium","lj":"high","B7":"auto","uN":"dense","qN":"custom"},"TD":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host","ADOMAIN":"hb_adomain"},"kF":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_HOST":"hb_cache_host"},"FY":{"title":"hb_native_title","body":"hb_native_body","body2":"hb_native_body2","privacyLink":"hb_native_privacy","privacyIcon":"hb_native_privicon","sponsoredBy":"hb_native_brand","image":"hb_native_image","icon":"hb_native_icon","clickUrl":"hb_native_linkurl","displayUrl":"hb_native_displayurl","cta":"hb_native_cta","rating":"hb_native_rating","address":"hb_native_address","downloads":"hb_native_downloads","likes":"hb_native_likes","phone":"hb_native_phone","price":"hb_native_price","salePrice":"hb_native_saleprice","rendererUrl":"hb_renderer_url","adTemplate":"hb_adTemplate"},"os":{"YZ":"s2s"},"UE":{"CK":"targetingSet","fe":"rendered","G9":"bidRejected"},"V1":{"body":"desc","body2":"desc2","sponsoredBy":"sponsored","cta":"ctatext","rating":"rating","address":"address","downloads":"downloads","likes":"likes","phone":"phone","price":"price","salePrice":"saleprice","displayUrl":"displayurl"},"s$":{"sponsored":1,"desc":2,"rating":3,"likes":4,"downloads":5,"price":6,"saleprice":7,"phone":8,"address":9,"desc2":10,"displayurl":11,"ctatext":12},"oF":{"ICON":1,"MAIN":3},"zA":["privacyLink","clickUrl","sendTargetingKeys","adTemplate","rendererUrl","type"]}')
            }
        },
        t = {};

    function r(e) {
        var i = t[e];
        if (void 0 !== i) return i.exports;
        var o = t[e] = {
            exports: {}
        };
        return n[e].call(o.exports, o, o.exports, r), o.exports
    }
    r.m = n, e = [], r.O = function(n, t, i, o) {
            if (!t) {
                var a = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    t = e[d][0], i = e[d][1], o = e[d][2];
                    for (var u = !0, c = 0; c < t.length; c++)(!1 & o || a >= o) && Object.keys(r.O).every((function(e) {
                        return r.O[e](t[c])
                    })) ? t.splice(c--, 1) : (u = !1, o < a && (a = o));
                    if (u) {
                        e.splice(d--, 1);
                        var s = i();
                        void 0 !== s && (n = s)
                    }
                }
                return n
            }
            o = o || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
            e[d] = [t, i, o]
        }, r.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(n, {
                a: n
            }), n
        }, r.d = function(e, n) {
            for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: n[t]
            })
        }, r.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), r.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        function() {
            var e = {
                5602: 0
            };
            r.O.j = function(n) {
                return 0 === e[n]
            };
            var n = function(n, t) {
                    var i, o, a = t[0],
                        u = t[1],
                        c = t[2],
                        s = 0;
                    if (a.some((function(n) {
                            return 0 !== e[n]
                        }))) {
                        for (i in u) r.o(u, i) && (r.m[i] = u[i]);
                        if (c) var d = c(r)
                    }
                    for (n && n(t); s < a.length; s++) o = a[s], r.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                    return r.O(d)
                },
                t = self.epbjsChunk = self.epbjsChunk || [];
            t.forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t))
        }();
    var i = r(23866);
    i = r.O(i)
}();
(self.epbjsChunk = self.epbjsChunk || []).push([
    [1266], {
        55630: function(n, e, t) {
            var o, a, r, i, c, s, l = t(71002),
                d = t(4942),
                u = t(64358),
                f = t(3193),
                p = t(9528),
                g = t(34614),
                m = t(99128),
                v = !1,
                b = {
                    iab: function(n) {
                        var e = n.onSuccess,
                            t = n.onError;

                        function o(n, o) {
                            (0, u.logInfo)("Received a response from CMP", n), o ? !1 === n.gdprApplies || "tcloaded" === n.eventStatus || "useractioncomplete" === n.eventStatus ? M(n, {
                                onSuccess: e,
                                onError: t
                            }) : s = n : t("CMP unable to register callback function.  Please check CMP setup.")
                        }
                        var a = {},
                            r = function() {
                                for (var n, e, t = window;;) {
                                    try {
                                        if ("function" == typeof t.__tcfapi) {
                                            e = t.__tcfapi, n = t;
                                            break
                                        }
                                    } catch (n) {}
                                    try {
                                        if (t.frames.__tcfapiLocator) {
                                            n = t;
                                            break
                                        }
                                    } catch (n) {}
                                    if (t === window.top) break;
                                    t = t.parent
                                }
                                return {
                                    cmpFrame: n,
                                    cmpFunction: e
                                }
                            }(),
                            i = r.cmpFrame,
                            c = r.cmpFunction;
                        if (!i) return t("CMP not found.");
                        "function" == typeof c ? ((0, u.logInfo)("Detected CMP API is directly accessible, calling it now..."), c("addEventListener", 2, o)) : ((0, u.logInfo)("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."), function(n, e, t) {
                            var o = "__tcfapi",
                                r = "".concat(o, "Call");

                            function i(n) {
                                var e = "".concat(o, "Return"),
                                    t = "string" == typeof n.data && (0, g.q9)(n.data, e) ? JSON.parse(n.data) : n.data;
                                if (t[e] && t[e].callId) {
                                    var r = t[e];
                                    a.hasOwnProperty(r.callId) && a[r.callId](r.returnValue, r.success)
                                }
                            }
                            window[o] = function(n, t, o, i) {
                                var c = Math.random() + "",
                                    s = (0, d.Z)({}, r, {
                                        command: n,
                                        version: t,
                                        parameter: i,
                                        callId: c
                                    });
                                a[c] = o, e.postMessage(s, "*")
                            }, window.addEventListener("message", i, !1), window[o](n, 2, t)
                        }("addEventListener", i, o))
                    },
                    static: function(n) {
                        var e = n.onSuccess,
                            t = n.onError;
                        M(i, {
                            onSuccess: e,
                            onError: t
                        })
                    }
                };

            function y(n) {
                var e = !1,
                    t = null;

                function r(o, a, r) {
                    if (null != t && clearTimeout(t), e = !0, p.rp.setConsentData(o), "function" == typeof n) {
                        for (var i = arguments.length, c = new Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++) c[s - 3] = arguments[s];
                        n.apply(void 0, [a, r].concat(c))
                    }
                }
                if ((0, g.q9)(Object.keys(b), o)) {
                    var i = {
                        onSuccess: function(n) {
                            return r(n, !1)
                        },
                        onError: function(n) {
                            for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) t[o - 1] = arguments[o];
                            r.apply(void 0, [null, !0, n].concat(t))
                        }
                    };
                    if (b[o](i), !e) {
                        var c = function() {
                            var n = function(n) {
                                r(n, !1, "CMP did not load, continuing auction...")
                            };
                            M(s, {
                                onSuccess: n,
                                onError: function() {
                                    return n(C(void 0))
                                }
                            })
                        };
                        0 === a ? c() : t = setTimeout(c, a)
                    }
                } else r(null, !1, "CMP framework (".concat(o, ") is not a supported framework.  Aborting consentManagement module and resuming auction."))
            }
            var w = (0, m.g3)("gdpr", (function(n, e) {
                var t;
                t = function(t, o) {
                    if (o) {
                        var a = u.logWarn;
                        t && (a = u.logError, o = "".concat(o, " Canceling auction as per consentManagement config."));
                        for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), c = 2; c < r; c++) i[c - 2] = arguments[c];
                        a.apply(void 0, [o].concat(i))
                    }
                    t ? (n.stopTiming(), "function" == typeof e.bidsBackHandler ? e.bidsBackHandler() : (0, u.logError)("Error executing bidsBackHandler")) : n.call(this, e)
                }, c ? ((0, u.logInfo)("User consent information already known.  Pulling internally stored information..."), t(!1)) : y(t)
            }));

            function M(n, e) {
                var t, a, i = e.onSuccess,
                    c = e.onError;
                "static" === o && (n = n.getTCData), t = n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : r, a = n && n.tcString, "boolean" == typeof t && (!0 !== t || a && (0, u.isStr)(a)) ? i(C(n)) : c("CMP returned unexpected value during lookup process.", n)
            }

            function C(n) {
                return c = {
                    consentString: n ? n.tcString : void 0,
                    vendorData: n || void 0,
                    gdprApplies: n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : r
                }, n && n.addtlConsent && (0, u.isStr)(n.addtlConsent) && (c.addtlConsent = n.addtlConsent), c.apiVersion = 2, c
            }
            f.vc.getConfig("consentManagement", (function(n) {
                return function(n) {
                    (n = n && (n.gdpr || n.usp ? n.gdpr : n)) && "object" === (0, l.Z)(n) ? ((0, u.isStr)(n.cmpApi) ? o = n.cmpApi : (o = "iab", (0, u.logInfo)("consentManagement config did not specify cmp.  Using system default setting (".concat("iab", ")."))), (0, u.isNumber)(n.timeout) ? a = n.timeout : (a = 1e4, (0, u.logInfo)("consentManagement config did not specify timeout.  Using system default setting (".concat(1e4, ")."))), r = !0 === n.defaultGdprScope, (0, u.logInfo)("consentManagement module has been activated..."), "static" === o && ((0, u.isPlainObject)(n.consentData) ? (i = n.consentData, a = 0) : (0, u.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), v || epbjs.requestBids.before(w, 50), v = !0, p.rp.enable(), y()) : (0, u.logWarn)("consentManagement config not defined, exiting consent manager")
                }(n.consentManagement)
            })), window.epbjs.installedModules.push("consentManagement")
        }
    },
    function(n) {
        var e;
        e = 55630, n(n.s = e)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [5160], {
        9099: function(n, t, a) {
            var e, o, i = a(71002),
                c = a(64358),
                s = a(3193),
                r = a(9528),
                u = a(99128),
                l = a(92797),
                p = "iab",
                f = p,
                d = 50,
                g = !1,
                m = {
                    iab: function(n) {
                        var t = n.onSuccess,
                            a = n.onError;
                        var e = (u = {}, {
                                consentDataCallback: function(n, e) {
                                    e && n.uspString && (u.usPrivacy = n.uspString), u.usPrivacy ? w(u, {
                                        onSuccess: t,
                                        onError: a
                                    }) : a("Unable to get USP consent string.")
                                }
                            }),
                            o = {},
                            i = function() {
                                for (var n, t, a = window;;) {
                                    try {
                                        if ("function" == typeof a.__uspapi) {
                                            t = a.__uspapi, n = a;
                                            break
                                        }
                                    } catch (n) {}
                                    try {
                                        if (a.frames.__uspapiLocator) {
                                            n = a;
                                            break
                                        }
                                    } catch (n) {}
                                    if (a === window.top) break;
                                    a = a.parent
                                }
                                return {
                                    uspapiFrame: n,
                                    uspapiFunction: t
                                }
                            }(),
                            s = i.uspapiFrame,
                            r = i.uspapiFunction;
                        var u;
                        if (!s) return a("USP CMP not found.");
                        (0, c.isFn)(r) ? ((0, c.logInfo)("Detected USP CMP is directly accessible, calling it now..."), r("getUSPData", 1, e.consentDataCallback)) : ((0, c.logInfo)("Detected USP CMP is outside the current iframe where Prebid.js is located, calling it now..."), function(n, t, a) {
                            function e(n) {
                                var t = n && n.data && n.data.__uspapiReturn;
                                t && t.callId && o.hasOwnProperty(t.callId) && (o[t.callId](t.returnValue, t.success), delete o[t.callId])
                            }
                            window.__uspapi = function(n, a, e) {
                                var i = Math.random() + "",
                                    c = {
                                        __uspapiCall: {
                                            command: n,
                                            version: a,
                                            callId: i
                                        }
                                    };
                                o[i] = e, t.postMessage(c, "*")
                            }, window.addEventListener("message", e, !1), window.__uspapi(n, 1, a)
                        }("getUSPData", s, e.consentDataCallback))
                    },
                    static: function(n) {
                        var t = n.onSuccess,
                            a = n.onError;
                        w(e, {
                            onSuccess: t,
                            onError: a
                        })
                    }
                };

            function v(n) {
                var t = null,
                    a = !1;

                function e(e, o) {
                    if (null != t && clearTimeout(t), a = !0, r.nX.setConsentData(e), null != n) {
                        for (var i = arguments.length, c = new Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) c[s - 2] = arguments[s];
                        n.apply(void 0, [o].concat(c))
                    }
                }
                if (m[f]) {
                    var o = {
                        onSuccess: e,
                        onError: function(n) {
                            for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) a[o - 1] = arguments[o];
                            e.apply(void 0, [null, "".concat(n, " Resuming auction without consent data as per consentManagement config.")].concat(a))
                        }
                    };
                    m[f](o), a || (0 === d ? w(void 0, o) : t = setTimeout(o.onError.bind(null, "USPAPI workflow exceeded timeout threshold."), d))
                } else e(null, "USP framework (".concat(f, ") is not a supported framework. Aborting consentManagement module and resuming auction."))
            }
            var P = (0, u.g3)("usp", (function(n, t) {
                var a = this;
                g || b(), v((function(e) {
                    if (null != e) {
                        for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), s = 1; s < o; s++) i[s - 1] = arguments[s];
                        c.logWarn.apply(void 0, [e].concat(i))
                    }
                    n.call(a, t)
                }))
            }));

            function w(n, t) {
                var a = t.onSuccess,
                    e = t.onError;
                !n || !n.usPrivacy ? e("USPAPI returned unexpected value during lookup process.", n) : (! function(n) {
                    n && n.usPrivacy && (o = n.usPrivacy)
                }(n), a(o))
            }

            function b() {
                var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                g || ((0, c.logInfo)("USPAPI consentManagement module has been activated".concat(n ? "" : " using default values (api: '".concat(f, "', timeout: ").concat(d, "ms)"))), g = !0, r.nX.enable()), v()
            }
            s.vc.getConfig("consentManagement", (function(n) {
                return function(n) {
                    (n = n && n.usp) && "object" === (0, i.Z)(n) || (0, c.logWarn)("consentManagement.usp config not defined, using defaults"), n && (0, c.isStr)(n.cmpApi) ? f = n.cmpApi : (f = p, (0, c.logInfo)("consentManagement.usp config did not specify cmpApi. Using system default setting (".concat(p, ")."))), n && (0, c.isNumber)(n.timeout) ? d = n.timeout : (d = 50, (0, c.logInfo)("consentManagement.usp config did not specify timeout. Using system default setting (".concat(50, ")."))), "static" === f && ((0, c.isPlainObject)(n.consentData) && (0, c.isPlainObject)(n.consentData.getUSPData) ? (n.consentData.getUSPData.uspString && (e = {
                        usPrivacy: n.consentData.getUSPData.uspString
                    }), d = 0) : (0, c.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), b(!0)
                }(n.consentManagement)
            })), (0, l.v5)("requestBids").before(P, 50), window.epbjs.installedModules.push("consentManagementUsp")
        }
    },
    function(n) {
        var t;
        t = 9099, n(n.s = t)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [7083], {
        31498: function(e, n, r) {
            var t = r(4942),
                o = r(71002),
                a = r(64358),
                i = r(20265),
                c = r(3193),
                s = r(9528),
                l = r(34614),
                u = r(14699),
                d = r(92797),
                p = r(15164),
                f = r(52021),
                v = r(5644);

            function g(e, n) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n && (t = t.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), r.push.apply(r, t)
                }
                return r
            }

            function b(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? g(Object(r), !0).forEach((function(n) {
                        (0, t.Z)(e, n, r[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                    }))
                }
                return e
            }
            var h, m, y, A, O = new Set(["sharedId", "pubCommonId", "pubProvidedId"]),
                P = {
                    purpose1: {
                        id: 1,
                        name: "storage"
                    },
                    purpose2: {
                        id: 2,
                        name: "basicAds"
                    },
                    purpose7: {
                        id: 7,
                        name: "measurement"
                    }
                },
                C = [{
                    purpose: "storage",
                    enforcePurpose: !0,
                    enforceVendor: !0,
                    vendorExceptions: []
                }, {
                    purpose: "basicAds",
                    enforcePurpose: !0,
                    enforceVendor: !0,
                    vendorExceptions: []
                }],
                j = [],
                E = [],
                D = [],
                w = !1,
                F = !1,
                k = {
                    getGvlidForBidAdapter: function(e) {
                        var n = null;
                        if (e = e || c.vc.getCurrentBidder()) {
                            var r = s.ZP.getBidAdapter(e);
                            r && r.getSpec && (n = r.getSpec().gvlid)
                        }
                        return n
                    },
                    getGvlidForUserIdModule: function(e) {
                        return "object" === (0, o.Z)(e) ? e.gvlid : null
                    },
                    getGvlidForAnalyticsAdapter: function(e) {
                        return s.ZP.getAnalyticsAdapter(e) && (s.ZP.getAnalyticsAdapter(e).gvlid || null)
                    }
                };

            function Z(e) {
                var n = null;
                if (e) {
                    var r = c.vc.getConfig("gvlMapping"),
                        t = "string" == typeof e ? e : e.name;
                    if (r && r[t]) return n = r[t];
                    n = k.getGvlidForBidAdapter(t) || k.getGvlidForUserIdModule(e) || k.getGvlidForAnalyticsAdapter(t)
                }
                return n
            }

            function B(e, n, r) {
                return null == e && s.rp.enabled ? ((0, a.logWarn)("Attempting operation that requires purpose ".concat(n, " consent while consent data is not available").concat(r ? " (module: ".concat(r, ")") : "", ". Assuming no consent was given.")), !0) : e && e.gdprApplies
            }

            function I(e, n, r, t) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : O.has.bind(O),
                    a = P[Object.keys(P).filter((function(n) {
                        return P[n].name === e.purpose
                    }))[0]].id;
                if ((0, l.q9)(e.vendorExceptions || [], r)) return !0;
                var c = (0, i.Z)(n, "vendorData.purpose.consents.".concat(a)),
                    s = (0, i.Z)(n, "vendorData.vendor.consents.".concat(t)),
                    u = (0, i.Z)(n, "vendorData.purpose.legitimateInterests.".concat(a)),
                    d = !1 === e.enforcePurpose || !0 === c,
                    p = o(r) || !1 === e.enforceVendor || !0 === s;
                return 2 === a ? d && p || !0 === u : d && p
            }

            function W(e, n, r, t, o) {
                var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                    l = i.validate,
                    u = void 0 === l ? I : l;
                if (o = Object.assign({}, {
                        hasEnforcementHook: !0
                    }), (0, a.hasDeviceAccess)())
                    if (n && !F) o.valid = !0;
                    else {
                        var d = s.rp.getConsentData();
                        if (B(d, 1, t)) {
                            var p = c.vc.getCurrentBidder();
                            r = p && p != t && s.ZP.aliasRegistry[p] === t ? Z(p) : Z(t) || r;
                            var f = t || p,
                                v = u(h, d, f, r, n ? function() {
                                    return !0
                                } : void 0);
                            v ? o.valid = !0 : (f && (0, a.logWarn)("TCF2 denied device access for ".concat(f)), o.valid = !1, j.push(f))
                        } else o.valid = !0
                    }
                else(0, a.logWarn)("Device access is disabled by Publisher"), o.valid = !1;
                e.call(this, n, r, t, o)
            }

            function G(e) {
                for (var n = s.rp.getConsentData(), r = c.vc.getCurrentBidder(), t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) o[i - 1] = arguments[i];
                if (B(n, 1, r)) {
                    var l = Z(r),
                        u = I(h, n, r, l);
                    u ? e.call.apply(e, [this].concat(o)) : ((0, a.logWarn)("User sync not allowed for ".concat(r)), j.push(r))
                } else e.call.apply(e, [this].concat(o))
            }

            function M(e, n, r) {
                if (B(r, 1, "User ID")) {
                    var t = n.map((function(e) {
                        var n = Z(e.submodule),
                            t = e.submodule.name;
                        if (I(h, r, t, n)) return e;
                        (0, a.logWarn)("User denied permission to fetch user id for ".concat(t, " User id module")), j.push(t)
                    })).filter((function(e) {
                        return e
                    }));
                    e.call(this, t, b(b({}, r), {}, {
                        hasValidated: !0
                    }))
                } else e.call(this, n, r)
            }

            function S(e, n) {
                for (var r = s.rp.getConsentData(), t = arguments.length, o = new Array(t > 2 ? t - 2 : 0), i = 2; i < t; i++) o[i - 2] = arguments[i];
                B(r, 2) ? (n.forEach((function(e) {
                    e.bids = e.bids.filter((function(e) {
                        var n = e.bidder,
                            t = Z(n);
                        if ((0, l.q9)(E, n)) return !1;
                        var o = !!I(m, r, n, t);
                        return o || ((0, a.logWarn)("TCF2 blocked auction for ".concat(n)), E.push(n)), o
                    }))
                })), e.call.apply(e, [this, n].concat(o))) : e.call.apply(e, [this, n].concat(o))
            }

            function T(e, n) {
                var r = s.rp.getConsentData();
                B(r, 7, "Analytics") ? ((0, a.isArray)(n) || (n = [n]), n = n.filter((function(e) {
                    var n = e.provider,
                        t = Z(n),
                        o = !!I(y, r, n, t);
                    return o || (D.push(n), (0, a.logWarn)("TCF2 blocked analytics adapter ".concat(e.provider))), o
                })), e.call(this, n)) : e.call(this, n)
            }
            f.on(v.FP.AUCTION_END, (function() {
                var e = function(e) {
                        return e.filter((function(n, r) {
                            return null !== n && e.indexOf(n) === r
                        }))
                    },
                    n = {
                        storageBlocked: e(j),
                        biddersBlocked: e(E),
                        analyticsBlocked: e(D)
                    };
                f.j8(v.FP.TCF2_ENFORCEMENT, n)
            }));
            var U = function(e) {
                    return e.purpose === P.purpose1.name
                },
                q = function(e) {
                    return e.purpose === P.purpose2.name
                },
                x = function(e) {
                    return e.purpose === P.purpose7.name
                };
            c.vc.getConfig("consentManagement", (function(e) {
                return function(e) {
                    var n = (0, i.Z)(e, "gdpr.rules");
                    n ? A = n : ((0, a.logWarn)("TCF2: enforcing P1 and P2 by default"), A = C), F = !!(0, i.Z)(e, "strictStorageEnforcement"), h = (0, l.sE)(A, U), m = (0, l.sE)(A, q), y = (0, l.sE)(A, x), h || (h = C[0]), m || (m = C[1]), w || (h && (w = !0, p.S6.before(W, 49), u.Ks.before(G, 48), (0, d.v5)("validateGdprEnforcement").before(M, 47)), m && (0, d.v5)("makeBidRequests").before(S), y && (0, d.v5)("enableAnalyticsCb").before(T))
                }(e.consentManagement)
            })), window.epbjs.installedModules.push("gdprEnforcement")
        }
    },
    function(e) {
        var n;
        n = 31498, e(e.s = n)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [9225], {
        28689: function(n, i, e) {
            var o = e(3193),
                c = e(9528),
                s = e(64358),
                t = "Invalid schain object found: ",
                a = " should be a string",
                r = " should be an Integer",
                f = " should be an object",
                d = {
                    STRICT: "strict",
                    RELAXED: "relaxed",
                    OFF: "off"
                },
                h = [];

            function u(n, i) {
                var e = d.STRICT;
                if (function(n) {
                        return !(void 0 === n || !(0, s.isPlainObject)(n) && ((0, s.logError)(t + "the following schain config will not be used as schain is not an object.", n), 1))
                    }(n)) {
                    if ((0, s.isStr)(n.validation) && -1 != h.indexOf(n.validation) && (e = n.validation), e === d.OFF) return n.config;
                    if (function(n, i) {
                            var e = "Detected something wrong within an schain config:",
                                o = "";

                            function c(n) {
                                o += "\n" + n
                            }

                            function t() {
                                !0 === i ? (0, s.logError)(e, n, o) : (0, s.logWarn)(e, n, o)
                            }
                            if (!(0, s.isPlainObject)(n) && (c("schain.config" + f), t(), i)) return !1;
                            if ((0, s.isNumber)(n.complete) && (0, s.isInteger)(n.complete) || c("schain.config.complete" + r), (0, s.isStr)(n.ver) || c("schain.config.ver" + a), (0, s.hasOwn)(n, "ext") && ((0, s.isPlainObject)(n.ext) || c("schain.config.ext" + f)), (0, s.isArray)(n.nodes)) n.nodes.forEach((function(n, i) {
                                (0, s.isStr)(n.asi) || c("schain.config.nodes[".concat(i, "].asi") + a), (0, s.isStr)(n.sid) || c("schain.config.nodes[".concat(i, "].sid") + a), (0, s.isNumber)(n.hp) && (0, s.isInteger)(n.hp) || c("schain.config.nodes[".concat(i, "].hp") + r), (0, s.hasOwn)(n, "rid") && ((0, s.isStr)(n.rid) || c("schain.config.nodes[".concat(i, "].rid") + a)), (0, s.hasOwn)(n, "name") && ((0, s.isStr)(n.name) || c("schain.config.nodes[".concat(i, "].name") + a)), (0, s.hasOwn)(n, "domain") && ((0, s.isStr)(n.domain) || c("schain.config.nodes[".concat(i, "].domain") + a)), (0, s.hasOwn)(n, "ext") && ((0, s.isPlainObject)(n.ext) || c("schain.config.nodes[".concat(i, "].ext") + f))
                            }));
                            else if (c("schain.config.nodes should be an Array"), t(), i) return !1;
                            return !(o.length > 0 && (t(), i))
                        }(n.config, !(e !== d.STRICT))) return n.config;
                    (0, s.logError)(t + "due to the 'strict' validation setting, this schain config will not be passed to bidder '".concat(i, "'.  See above error for details."))
                }
                return null
            }

            function l(n, i) {
                var e = o.vc.getConfig("schain"),
                    c = o.vc.getBidderConfig();
                i.forEach((function(n) {
                    var i = n.bidderCode,
                        o = function(n) {
                            return c[n] && c[n].schain || e
                        }(i);
                    n.bids.forEach((function(n) {
                        var e = u(o, i);
                        e && (n.schain = e)
                    }))
                })), n(i)
            }(0, s._each)(d, (function(n) {
                return h.push(n)
            })), c.ZP.makeBidRequests.after(l), window.epbjs.installedModules.push("schain")
        }
    },
    function(n) {
        var i;
        i = 28689, n(n.s = i)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [9073], {
        7713: function(e, n, o) {
            var t = o(64358),
                r = o(48928),
                c = o(25102),
                i = o(92797),
                a = "criteo",
                d = (0, o(15164).df)({
                    gvlid: 91,
                    moduleName: a
                }),
                l = "cto_bidid",
                u = "cto_bundle",
                s = new Date(0).toString(),
                p = new Date((0, t.timestamp)() + 33696e6).toString();

            function g(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    o = (0, t.parseUrl)(e, {
                        noDecodeWholeURL: !0
                    });
                return n ? "".concat(o.hostname) : "".concat(o.protocol, "://").concat(o.hostname).concat(o.port ? ":" + o.port : "", "/")
            }

            function f(e) {
                return d.getCookie(e) || d.getDataFromLocalStorage(e)
            }

            function b(e, n, o) {
                e && n && (d.setDataInLocalStorage(e, n), m(e, n, p, o, !0))
            }

            function m(e, n, o, t, r) {
                for (var c = t.split("."), i = 0; i < c.length; ++i) {
                    var a = c.slice(c.length - i - 1, c.length).join(".");
                    try {
                        if (d.setCookie(e, n, o, null, "." + a), r) {
                            var l = d.getCookie(e);
                            if (l && l === n) break
                        }
                    } catch (e) {}
                }
            }

            function h(e, n, o) {
                var i = d.cookiesAreEnabled(),
                    a = d.localStorageIsEnabled(),
                    p = g((0, c.nH)().page),
                    f = g(document.location.href, !0),
                    h = "undefined" != typeof criteo_pubtag,
                    v = function(e, n, o, t, r, c, i, a) {
                        return "https://gum.criteo.com/sid/json?origin=prebid" + "".concat(e ? "&topUrl=" + encodeURIComponent(e) : "") + "".concat(n ? "&domain=" + encodeURIComponent(n) : "") + "".concat(o ? "&bundle=" + encodeURIComponent(o) : "") + "".concat(t ? "&info=" + encodeURIComponent(t) : "") + "".concat(a ? "&gdprString=" + encodeURIComponent(a) : "") + "".concat(r ? "&cw=1" : "") + "".concat(i ? "&pbt=1" : "") + "".concat(c ? "&lsw=1" : "")
                    }(p, f, e.bundle, e.dnaBundle, i, a, h, n),
                    I = {
                        success: function(e) {
                            var n, c = JSON.parse(e);
                            (c.pixels && c.pixels.forEach((function(e) {
                                return function(e, n) {
                                    n.writeBundleInStorage && n.bundlePropertyName && n.storageKeyName ? (0, r.h)(n.pixelUrl, {
                                        success: function(o) {
                                            if (o) {
                                                var t = JSON.parse(o);
                                                t && t[n.bundlePropertyName] && b(n.storageKeyName, t[n.bundlePropertyName], e)
                                            }
                                        }
                                    }, void 0, {
                                        method: "GET",
                                        withCredentials: !0
                                    }) : (0, t.triggerPixel)(n.pixelUrl)
                                }(f, e)
                            })), c.acwsUrl) ? ("string" == typeof c.acwsUrl ? [c.acwsUrl] : c.acwsUrl).forEach((function(e) {
                                return (0, t.triggerPixel)(e)
                            })): c.bundle && b(u, c.bundle, f);
                            if (c.bidId) {
                                b(l, c.bidId, f);
                                var i = {
                                    criteoId: c.bidId
                                };
                                o(i)
                            } else m(n = l, "", s, f, !0), d.removeDataFromLocalStorage(n), o()
                        },
                        error: function(e) {
                            (0, t.logError)("criteoIdSystem: unable to sync user id", e), o()
                        }
                    };
                (0, r.h)(v, I, void 0, {
                    method: "GET",
                    contentType: "application/json",
                    withCredentials: !0
                })
            }
            var v = {
                name: a,
                gvlid: 91,
                decode: function(e) {
                    return e
                },
                getId: function(e, n) {
                    var o = n && "boolean" == typeof n.gdprApplies && n.gdprApplies ? n.consentString : void 0,
                        t = {
                            bundle: f(u),
                            dnaBundle: f("cto_dna_bundle"),
                            bidId: f(l)
                        };
                    return {
                        id: t.bidId ? {
                            criteoId: t.bidId
                        } : void 0,
                        callback: function(e) {
                            return h(t, o, e)
                        }
                    }
                }
            };
            (0, i.Bx)("userId", v), window.epbjs.installedModules.push("criteoIdSystem")
        }
    },
    function(e) {
        var n;
        n = 7713, e(e.s = n)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [9215], {
        4192: function(e, n, t) {
            t.d(n, {
                HQ: function() {
                    return c
                },
                Pv: function() {
                    return u
                },
                UR: function() {
                    return i
                }
            });
            var r = t(64358),
                o = t(20265),
                i = {
                    trustpid: {
                        source: "trustpid.com",
                        atype: 1,
                        getValue: function(e) {
                            return e
                        }
                    },
                    intentIqId: {
                        source: "intentiq.com",
                        atype: 1
                    },
                    naveggId: {
                        source: "navegg.com",
                        atype: 1
                    },
                    justId: {
                        source: "justtag.com",
                        atype: 1
                    },
                    pubcid: {
                        source: "pubcid.org",
                        atype: 1
                    },
                    tdid: {
                        source: "adserver.org",
                        atype: 1,
                        getUidExt: function() {
                            return {
                                rtiPartner: "TDID"
                            }
                        }
                    },
                    id5id: {
                        getValue: function(e) {
                            return e.uid
                        },
                        source: "id5-sync.com",
                        atype: 1,
                        getUidExt: function(e) {
                            if (e.ext) return e.ext
                        }
                    },
                    ftrackId: {
                        source: "flashtalking.com",
                        atype: 1,
                        getValue: function(e) {
                            var n = "";
                            return e.DeviceID && (n = e.DeviceID.join(",")), n
                        },
                        getUidExt: function(e) {
                            return "DeviceID"
                        }
                    },
                    parrableId: {
                        source: "parrable.com",
                        atype: 1,
                        getValue: function(e) {
                            return e.eid ? e.eid : e.ccpaOptout ? "" : null
                        },
                        getUidExt: function(e) {
                            var n = (0, r.pick)(e, ["ibaOptout", "ccpaOptout"]);
                            if (Object.keys(n).length) return n
                        }
                    },
                    idl_env: {
                        source: "liveramp.com",
                        atype: 3
                    },
                    lipb: {
                        getValue: function(e) {
                            return e.lipbid
                        },
                        source: "liveintent.com",
                        atype: 3,
                        getEidExt: function(e) {
                            if (Array.isArray(e.segments) && e.segments.length) return {
                                segments: e.segments
                            }
                        }
                    },
                    britepoolid: {
                        source: "britepool.com",
                        atype: 3
                    },
                    dmdId: {
                        source: "hcn.health",
                        atype: 3
                    },
                    lotamePanoramaId: {
                        source: "crwdcntrl.net",
                        atype: 1
                    },
                    criteoId: {
                        source: "criteo.com",
                        atype: 1
                    },
                    merkleId: {
                        atype: 3,
                        getSource: function(e) {
                            var n;
                            return null != e && null !== (n = e.ext) && void 0 !== n && n.ssp ? "".concat(e.ext.ssp, ".merkleinc.com") : "merkleinc.com"
                        },
                        getValue: function(e) {
                            return e.id
                        },
                        getUidExt: function(e) {
                            return e.keyID ? {
                                keyID: e.keyID
                            } : e.ext ? e.ext : void 0
                        }
                    },
                    netId: {
                        source: "netid.de",
                        atype: 1
                    },
                    IDP: {
                        source: "zeotap.com",
                        atype: 1
                    },
                    hadronId: {
                        source: "audigent.com",
                        atype: 1
                    },
                    quantcastId: {
                        source: "quantcast.com",
                        atype: 1
                    },
                    idx: {
                        source: "idx.lat",
                        atype: 1
                    },
                    connectid: {
                        source: "verizonmedia.com",
                        atype: 3
                    },
                    fabrickId: {
                        source: "neustar.biz",
                        atype: 1
                    },
                    mwOpenLinkId: {
                        source: "mediawallahscript.com",
                        atype: 1
                    },
                    tapadId: {
                        source: "tapad.com",
                        atype: 1
                    },
                    novatiq: {
                        getValue: function(e) {
                            return e.snowflake
                        },
                        source: "novatiq.com",
                        atype: 1
                    },
                    uid2: {
                        source: "uidapi.com",
                        atype: 3,
                        getValue: function(e) {
                            return e.id
                        }
                    },
                    deepintentId: {
                        source: "deepintent.com",
                        atype: 3
                    },
                    admixerId: {
                        source: "admixer.net",
                        atype: 3
                    },
                    adtelligentId: {
                        source: "adtelligent.com",
                        atype: 3
                    },
                    amxId: {
                        source: "amxrtb.com",
                        atype: 1
                    },
                    publinkId: {
                        source: "epsilon.com",
                        atype: 3
                    },
                    kpuid: {
                        source: "kpuid.com",
                        atype: 3
                    },
                    imppid: {
                        source: "ppid.intimatemerger.com",
                        atype: 1
                    },
                    imuid: {
                        source: "intimatemerger.com",
                        atype: 1
                    },
                    connectId: {
                        source: "yahoo.com",
                        atype: 3
                    },
                    qid: {
                        source: "adquery.io",
                        atype: 1
                    },
                    dacId: {
                        source: "impact-ad.jp",
                        atype: 1
                    },
                    "33acrossId": {
                        source: "33across.com",
                        atype: 1,
                        getValue: function(e) {
                            return e.envelope
                        }
                    },
                    tncid: {
                        source: "thenewco.it",
                        atype: 3
                    },
                    gravitompId: {
                        source: "gravito.net",
                        atype: 1
                    },
                    cpexId: {
                        source: "czechadid.cz",
                        atype: 1
                    },
                    oneKeyData: {
                        getValue: function(e) {
                            if (e && Array.isArray(e.identifiers) && e.identifiers[0]) return e.identifiers[0].value
                        },
                        source: "paf",
                        atype: 1,
                        getEidExt: function(e) {
                            if (e && e.preferences) return {
                                preferences: e.preferences
                            }
                        },
                        getUidExt: function(e) {
                            if (e && Array.isArray(e.identifiers) && e.identifiers[0]) {
                                var n = e.identifiers[0];
                                return {
                                    version: n.version,
                                    type: n.type,
                                    source: n.source
                                }
                            }
                        }
                    }
                };

            function a(e, n) {
                var t = i[n];
                if (t && e) {
                    var o = {};
                    o.source = (0, r.isFn)(t.getSource) ? t.getSource(e) : t.source;
                    var a = (0, r.isFn)(t.getValue) ? t.getValue(e) : e;
                    if ((0, r.isStr)(a)) {
                        var c = {
                            id: a,
                            atype: t.atype
                        };
                        if ((0, r.isFn)(t.getUidExt)) {
                            var u = t.getUidExt(e);
                            u && (c.ext = u)
                        }
                        if (o.uids = [c], (0, r.isFn)(t.getEidExt)) {
                            var s = t.getEidExt(e);
                            s && (o.ext = s)
                        }
                        return o
                    }
                }
                return null
            }

            function c(e) {
                var n = [],
                    t = function(t) {
                        if (e.hasOwnProperty(t))
                            if ("pubProvidedId" === t) n = n.concat(e.pubProvidedId);
                            else if ("ftrackId" === t) {
                            var r = {
                                atype: 1,
                                id: (e.ftrackId.DeviceID || []).join("|"),
                                ext: {}
                            };
                            for (var o in e.ftrackId) r.ext[o] = (e.ftrackId[o] || []).join("|");
                            n.push(r)
                        } else if (Array.isArray(e[t])) e[t].forEach((function(e, r, o) {
                            var i = a(e, t);
                            i && n.push(i)
                        }));
                        else {
                            var i = a(e[t], t);
                            i && n.push(i)
                        }
                    };
                for (var r in e) t(r);
                return n
            }

            function u(e) {
                var n = [];
                return e.filter((function(e) {
                    return (0, r.isPlainObject)(e.idObj) && Object.keys(e.idObj).length
                })).forEach((function(e) {
                    Object.keys(e.idObj).forEach((function(t) {
                        (0, o.Z)(e, "config.bidders") && Array.isArray(e.config.bidders) && (0, o.Z)(i, t + ".source") && n.push({
                            source: i[t].source,
                            bidders: e.config.bidders
                        })
                    }))
                })), n
            }
        },
        34727: function(e, n, t) {
            var r, o, i, a, c, u, s = t(71002),
                d = t(34614),
                l = t(3193),
                f = t(52021),
                g = t(78640),
                p = t(9528),
                m = t(5644),
                y = t(92797),
                v = t(4192),
                b = t(15164),
                h = t(64358),
                I = t(20265),
                k = t(7563),
                w = t(68792),
                E = t(17673),
                j = t(99128),
                O = "User ID",
                S = "cookie",
                D = "html5",
                x = "_pbjs_userid_consent_data",
                A = 30,
                P = "_pbjs_id_optout",
                C = (0, b.eA)("userid"),
                U = !1,
                T = [],
                V = [],
                L = [],
                F = function() {
                    return null == u && (u = (0, j.V6)()), u
                };

            function N(e) {
                return F().fork().renameWith((function(n) {
                    return ["userId.mod.".concat(n), "userId.mods.".concat(e, ".").concat(n)]
                }))
            }

            function _(e, n) {
                var t = e.config.storage,
                    r = "function" == typeof e.submodule.domainOverride ? e.submodule.domainOverride() : null;
                try {
                    var o = (0, h.isPlainObject)(n) ? JSON.stringify(n) : n,
                        i = new Date(Date.now() + 864e5 * t.expires).toUTCString();
                    t.type === S ? (C.setCookie(t.name, o, i, "Lax", r), "number" == typeof t.refreshInSeconds && C.setCookie("".concat(t.name, "_last"), (new Date).toUTCString(), i, "Lax", r)) : t.type === D && (C.setDataInLocalStorage("".concat(t.name, "_exp"), i), C.setDataInLocalStorage(t.name, encodeURIComponent(o)), "number" == typeof t.refreshInSeconds && C.setDataInLocalStorage("".concat(t.name, "_last"), (new Date).toUTCString()))
                } catch (e) {
                    (0, h.logError)(e)
                }
            }

            function R(e) {
                var n = (0, h.getPrebidInternal)().setEidPermissions;
                "function" == typeof n && (0, h.isArray)(e) && n((0, v.Pv)(e))
            }

            function Z(e) {
                var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    r = t ? "".concat(e.name, "_").concat(t) : e.name;
                try {
                    if (e.type === S) n = C.getCookie(r);
                    else if (e.type === D) {
                        var o = C.getDataFromLocalStorage("".concat(e.name, "_exp"));
                        "" === o ? n = C.getDataFromLocalStorage(r) : o && new Date(o).getTime() - Date.now() > 0 && (n = decodeURIComponent(C.getDataFromLocalStorage(r)))
                    }
                    "string" == typeof n && "{" === n.trim().charAt(0) && (n = JSON.parse(n))
                } catch (e) {
                    (0, h.logError)(e)
                }
                return n
            }

            function q(e) {
                var n = {
                    consentString: "",
                    gdprApplies: !1,
                    apiVersion: 0
                };
                return e && (n.consentString = e.consentString, n.gdprApplies = e.gdprApplies, n.apiVersion = e.apiVersion), (0, h.cyrb53Hash)(JSON.stringify(n))
            }

            function G(e) {
                try {
                    var n = new Date(Date.now() + 864e5 * A).toUTCString();
                    C.setCookie(x, q(e), n, "Lax")
                } catch (e) {
                    (0, h.logError)(e)
                }
            }

            function z() {
                try {
                    return C.getCookie(x)
                } catch (e) {
                    (0, h.logError)(e)
                }
            }

            function J() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.hostname;
                if (!C.cookiesAreEnabled()) return e;
                var n, t, r = e.split(".");
                if (2 == r.length) return e;
                var o = -2,
                    i = "_rdc".concat(Date.now()),
                    a = "writeable";
                do {
                    n = r.slice(o).join(".");
                    var c = new Date((0, h.timestamp)() + 1e4).toUTCString();
                    C.setCookie(i, a, c, "Lax", n, void 0);
                    var u = C.getCookie(i, void 0);
                    u === a ? (t = !1, C.setCookie(i, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, n, void 0)) : (o += -1, t = Math.abs(o) <= r.length)
                } while (t);
                return n
            }

            function W(e, n) {
                n = F().fork().startTiming("userId.callbacks.total").stopBefore(n);
                var t = (0, h.delayExecution)((function() {
                    clearTimeout(undefined), n()
                }), e.length);
                e.forEach((function(e) {
                    var n = N(e.submodule.name).startTiming("callback").stopBefore(t);
                    try {
                        e.callback((function(t) {
                            t ? (e.config.storage && _(e, t), e.idObj = e.submodule.decode(t, e.config)) : (0, h.logInfo)("".concat(O, ": ").concat(e.submodule.name, " - request id responded with an empty value")), n()
                        }))
                    } catch (t) {
                        (0, h.logError)("Error in userID module '".concat(e.submodule.name, "':"), t), n()
                    }
                    e.callback = void 0
                }))
            }

            function B(e, n) {
                [e].some((function(e) {
                    return !Array.isArray(e) || !e.length
                })) || e.forEach((function(e) {
                    e.bids && (0, h.isArray)(e.bids) && e.bids.forEach((function(e) {
                        var t = function(e, n) {
                            return Array.isArray(e) && e.length && n ? e.filter((function(e) {
                                return !e.config.bidders || !(0, h.isArray)(e.config.bidders) || (0, d.q9)(e.config.bidders, n)
                            })).filter((function(e) {
                                return (0, h.isPlainObject)(e.idObj) && Object.keys(e.idObj).length
                            })).reduce((function(e, n) {
                                return Object.keys(n.idObj).forEach((function(t) {
                                    e[t] = n.idObj[t]
                                })), e
                            }), {}) : {}
                        }(n, e.bidder);
                        Object.keys(t).length && (e.userId = t, e.userIdAsEids = (0, v.HQ)(t))
                    }))
                }))
            }
            var H, M = {};

            function Q() {
                var e, n, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    a = t.delay,
                    c = void 0 === a ? w.Z.timeout : a,
                    u = (0, w.P)(),
                    s = (0, w.P)(),
                    d = !1;

                function l(t) {
                    return n = F().fork(), null != e && e.reject(M), e = (0, w.P)(), w.Z.race([t, e.promise]).finally(n.startTiming("userId.total"))
                }
                var g = r,
                    v = T;

                function b(e) {
                    return function() {
                        if (g === r && v === T) return e.apply(void 0, arguments)
                    }
                }

                function I() {
                    return p.rp.promise.finally(n.startTiming("userId.init.gdpr"))
                }
                var k = l(w.Z.all([y.Cd, u.promise]).then(I).then(b((function(e) {
                    ue(g, v, e)
                }))).then((function() {
                    return s.promise.finally(n.startTiming("userId.callbacks.pending"))
                })).then(b((function() {
                    var e = g.filter((function(e) {
                        return (0, h.isFn)(e.callback)
                    }));
                    if (e.length) return new w.Z((function(n) {
                        return W(e, n)
                    }))
                }))));
                return function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.refresh,
                        t = void 0 !== n && n,
                        r = e.submoduleNames,
                        a = void 0 === r ? null : r,
                        p = e.ready,
                        y = void 0 !== p && p;
                    return y && !d && (d = !0, u.resolve(), i > 0 ? s.resolve() : f.on(m.FP.AUCTION_END, (function e() {
                        f.S1(m.FP.AUCTION_END, e), c(o).then(s.resolve)
                    }))), t && d && (k = l(k.catch((function() {
                        return null
                    })).then(I).then(b((function(e) {
                        var n = ue(g, v.filter((function(e) {
                            return null == a || a.includes(e.submodule.name)
                        })), e, !0).filter((function(e) {
                            return null != e.callback
                        }));
                        if (n.length) return new w.Z((function(e) {
                            return W(n, e)
                        }))
                    }))))), k
                }
            }

            function K() {
                var e = a && ($() || []).find((function(e) {
                    return e.source === a
                }));
                if (e && "string" == typeof(0, I.Z)(e, "uids.0.id")) {
                    var n = e.uids[0].id.replace(/[\W_]/g, "");
                    if (n.length >= 32 && n.length <= 150) return n;
                    (0, h.logWarn)("User ID - Googletag Publisher Provided ID for ".concat(a, " is not between 32 and 150 characters - ").concat(n))
                }
            }
            var X = (0, j.g3)("userId", (function(e, n) {
                var t = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = o.delay,
                    c = void 0 === a ? w.Z.timeout : a,
                    u = o.getIds,
                    s = void 0 === u ? ie : u;
                w.Z.race([s().catch((function() {
                    return null
                })), c(i)]).then((function() {
                    B(n.adUnits || (0, g.R)().adUnits, r);
                    var o = K();
                    o && ((0, h.isGptPubadsDefined)() ? window.googletag.pubads().setPublisherProvidedId(o) : (window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push((function() {
                        window.googletag.pubads().setPublisherProvidedId(o)
                    })))), F().join((0, j.Bf)(n.metrics), {
                        propagate: !1,
                        includeGroups: !0
                    }), e.call(t, n)
                }))
            }));

            function Y() {
                return function(e) {
                    return Array.isArray(e) && e.length ? e.filter((function(e) {
                        return (0, h.isPlainObject)(e.idObj) && Object.keys(e.idObj).length
                    })).reduce((function(e, n) {
                        return Object.keys(n.idObj).forEach((function(t) {
                            e[t] = n.idObj[t]
                        })), e
                    }), {}) : {}
                }(r)
            }

            function $() {
                return (0, v.HQ)(Y())
            }

            function ee(e) {
                return (0, v.HQ)(function(e, n) {
                    if (!Array.isArray(e) || !e.length) return {};
                    var t = e.filter((function(e) {
                        var t;
                        return (0, h.isPlainObject)(e.idObj) && Object.keys(e.idObj).length && (null === (t = v.UR[Object.keys(e.idObj)[0]]) || void 0 === t ? void 0 : t.source) === n
                    }));
                    return (0, h.isEmpty)(t) ? [] : t[0].idObj
                }(r, e))[0]
            }

            function ne(e, n, t) {
                return H().then((function() {
                    var r = {};
                    if ((0, h.isFn)(t)) {
                        (0, h.logInfo)("".concat(O, " - Getting encrypted signal from custom function : ").concat(t.name, " & source : ").concat(e, " "));
                        var o = t(e);
                        r[e] = o ? te(o) : null
                    } else {
                        var i = ee(e);
                        (0, h.logInfo)("".concat(O, " - Getting encrypted signal for eids :").concat(JSON.stringify(i))), (0, h.isEmpty)(i) || (r[i.source] = !0 === n ? te(i) : i.uids[0].id)
                    }
                    return (0, h.logInfo)("".concat(O, " - Fetching encrypted eids: ").concat(r[e])), r[e]
                }))
            }

            function te(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    t = "";
                if (1 === n) t = "object" === (0, s.Z)(e) ? window.btoa(JSON.stringify(e)) : window.btoa(e);
                return "".concat(n, "||").concat(t)
            }

            function re() {
                if ((0, h.isGptPubadsDefined)()) {
                    window.googletag.encryptedSignalProviders = window.googletag.encryptedSignalProviders || [];
                    var e = l.vc.getConfig("userSync.encryptedSignalSources");
                    if (e) {
                        var n = e.registerDelay || 0;
                        setTimeout((function() {
                            e.sources && e.sources.forEach((function(e) {
                                var n = e.source,
                                    t = e.encrypt,
                                    r = e.customFunc;
                                n.forEach((function(e) {
                                    window.googletag.encryptedSignalProviders.push({
                                        id: e,
                                        collectorFunction: function() {
                                            return ne(e, t, r)
                                        }
                                    })
                                }))
                            }))
                        }), n)
                    } else(0, h.logWarn)("".concat(O, " - ESP : encryptedSignalSources config not defined under userSync Object"))
                }
            }

            function oe() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.submoduleNames,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return H({
                    refresh: !0,
                    submoduleNames: n
                }).then((function() {
                    return t && (0, h.isFn)(t) && t(), Y()
                }))
            }

            function ie() {
                return H().then((function() {
                    return Y()
                }), (function(e) {
                    return e === M ? Promise.resolve().then(ie) : ((0, h.logError)("Error initializing userId", e), w.Z.reject(e))
                }))
            }
            var ae = (0, y.z3)("sync", (function(e, n) {
                return {
                    userIdModules: e,
                    hasValidated: n && n.hasValidated
                }
            }), "validateGdprEnforcement");

            function ce(e, n, t, r) {
                if (e.config.storage) {
                    var o, i = Z(e.config.storage),
                        a = !1;
                    if ("number" == typeof e.config.storage.refreshInSeconds) {
                        var c = new Date(Z(e.config.storage, "last"));
                        a = c && Date.now() - c.getTime() > 1e3 * e.config.storage.refreshInSeconds
                    }!i || a || r || ! function(e, n) {
                        return null != e && e === q(n)
                    }(t, n) ? o = e.submodule.getId(e.config, n, i) : "function" == typeof e.submodule.extendId && (o = e.submodule.extendId(e.config, n, i)), (0, h.isPlainObject)(o) && (o.id && (_(e, o.id), i = o.id), "function" == typeof o.callback && (e.callback = o.callback)), i && (e.idObj = e.submodule.decode(i, e.config))
                } else if (e.config.value) e.idObj = e.config.value;
                else {
                    var u = e.submodule.getId(e.config, n, void 0);
                    (0, h.isPlainObject)(u) && ("function" == typeof u.callback && (e.callback = u.callback), u.id && (e.idObj = e.submodule.decode(u.id, e.config)))
                }
            }

            function ue(e, n, t) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                return F().fork().measureTime("userId.init.modules", (function() {
                    if (!n.length) return [];
                    var o = le();
                    if (!(n = n.filter((function(e) {
                            return !e.config.storage || o.has(e.config.storage.type)
                        }))).length) return (0, h.logWarn)("".concat(O, " - no ID module is configured for one of the available storage types:"), Array.from(o)), [];
                    var i = ae(n, t),
                        a = i.userIdModules;
                    if (!i.hasValidated && !(0, E.h)(t)) return (0, h.logWarn)("".concat(O, " - gdpr permission not valid for local storage or cookies, exit module")), [];
                    var c = z();
                    G(t);
                    var u = a.reduce((function(e, n) {
                        return N(n.submodule.name).measureTime("init", (function() {
                            try {
                                ce(n, t, c, r), e.push(n)
                            } catch (e) {
                                (0, h.logError)("Error in userID module '".concat(n.submodule.name, "':"), e)
                            }
                            return e
                        }))
                    }), []);
                    return u.length && R(u), u.forEach(se.bind(null, e)), u
                }))
            }

            function se(e, n) {
                for (var t = !1, r = 0; r < e.length; r++)
                    if (n.config.name.toLowerCase() === e[r].config.name.toLowerCase()) {
                        t = !0, e[r] = n;
                        break
                    }
                t || e.push(n)
            }
            var de = new Set([D, S]);

            function le() {
                var e = [],
                    n = !1;
                return C.localStorageIsEnabled() && (e.push(D), C.getDataFromLocalStorage(P) && ((0, h.logInfo)("".concat(O, " - opt-out localStorage found, storage disabled")), n = !0)), C.cookiesAreEnabled() && (e.push(S), C.getCookie(P) && ((0, h.logInfo)("".concat(O, " - opt-out cookie found, storage disabled")), n = !0)), new Set(n ? [] : e)
            }

            function fe() {
                var e = function(e, n) {
                    return Array.isArray(e) ? e.reduce((function(e, n) {
                        return !n || (0, h.isEmptyStr)(n.name) || (n.storage && !(0, h.isEmptyStr)(n.storage.type) && !(0, h.isEmptyStr)(n.storage.name) && de.has(n.storage.type) || (0, h.isPlainObject)(n.value) ? e.push(n) : n.storage || n.value || e.push(n)), e
                    }), []) : []
                }(V);
                if (e.length) {
                    var n = L.filter((function(e) {
                        return !(0, d.sE)(T, (function(n) {
                            return n.name === e.name
                        }))
                    }));
                    T.splice(0, T.length), n.map((function(n) {
                        var t = (0, d.sE)(e, (function(e) {
                            return e.name && (e.name.toLowerCase() === n.name.toLowerCase() || n.aliasName && e.name.toLowerCase() === n.aliasName.toLowerCase())
                        }));
                        return t && n.name !== t.name && (t.name = n.name), n.findRootDomain = J, t ? {
                            submodule: n,
                            config: t,
                            callback: void 0,
                            idObj: void 0
                        } : null
                    })).filter((function(e) {
                        return null !== e
                    })).forEach((function(e) {
                        return T.push(e)
                    })), !U && T.length && ((0, g.R)().requestBids.before(X, 40), k.G.after((function(e) {
                        return e(K())
                    })), (0, h.logInfo)("".concat(O, " - usersync config updated for ").concat(T.length, " submodules: "), T.map((function(e) {
                        return e.submodule.name
                    }))), U = !0)
                }
            }

            function ge(e) {
                return function() {
                    return Promise.resolve(e.apply(this, arguments))
                }
            }! function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = n.delay,
                    u = void 0 === t ? w.Z.timeout : t;
                a = void 0, T = [], V = [], U = !1, r = [], H = Q({
                    delay: u
                }), null != c && c(), L = [], c = e.getConfig("userSync", (function(e) {
                    var n = e.userSync;
                    a = n.ppid, n && n.userIds && (V = n.userIds, o = (0, h.isNumber)(n.syncDelay) ? n.syncDelay : 500, i = (0, h.isNumber)(n.auctionDelay) ? n.auctionDelay : 0, fe(), H({
                        ready: !0
                    }))
                })), (0, g.R)().getUserIds = Y, (0, g.R)().getUserIdsAsEids = $, (0, g.R)().getEncryptedEidsForSource = ge(ne), (0, g.R)().registerSignalSources = re, (0, g.R)().refreshUserIds = ge(oe), (0, g.R)().getUserIdsAsync = ge(ie), (0, g.R)().getUserIdsAsEidBySource = ee
            }(l.vc), (0, y.bA)("userId", (function(e) {
                (0, d.sE)(L, (function(n) {
                    return n.name === e.name
                })) || (L.push(e), fe(), H({
                    refresh: !0,
                    submoduleNames: [e.name]
                }))
            })), window.epbjs.installedModules.push("userId")
        },
        7563: function(e, n, t) {
            t.d(n, {
                G: function() {
                    return r
                }
            });
            var r = (0, t(92797).z3)("sync", (function() {}))
        },
        17673: function(e, n, t) {
            t.d(n, {
                h: function() {
                    return o
                }
            });
            var r = t(20265);

            function o(e) {
                return null == e || !e.gdprApplies || !0 === (0, r.Z)(e, "vendorData.purpose.consents.1")
            }
        }
    },
    function(e) {
        var n;
        n = 34727, e(e.s = n)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [1618], {
        10272: function(e, t, r) {
            var n = r(4942),
                o = r(15671),
                i = r(43144),
                a = r(20265),
                s = r(64358),
                c = r(96475),
                u = r(48928),
                d = r(92797),
                p = r(25102),
                l = r(15164),
                f = r(9528);

            function g(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function m(e, t) {
                ! function(e, t) {
                    if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                }(e, t), t.add(e)
            }

            function v(e, t, r) {
                if (!t.has(e)) throw new TypeError("attempted to get private field on non-instance");
                return r
            }
            var b = "id5id",
                y = "".concat(b, "_privacy"),
                D = "html5",
                O = "User ID - ID5 submodule: ",
                S = ["pbjs-id5id", "id5id.1st", "id5id"],
                I = (0, l.df)({
                    gvlid: 131,
                    moduleName: "id5Id"
                }),
                w = {
                    name: "id5Id",
                    gvlid: 131,
                    decode: function(e, t) {
                        var r = 0;
                        if (e && "string" == typeof e.universal_uid) {
                            var n = {
                                id5id: {
                                    uid: e.universal_uid,
                                    ext: {
                                        linkType: r = e.link_type || r
                                    }
                                }
                            };
                            switch ((0, a.Z)(e, "ab_testing.result")) {
                                case "control":
                                    (0, s.logInfo)(O + "A/B Testing - user is in the Control Group: ID5 ID is NOT exposed"), (0, c.N)(n, "id5id.ext.abTestingControlGroup", !0);
                                    break;
                                case "error":
                                    (0, s.logError)(O + "A/B Testing ERROR! controlGroupPct must be a number >= 0 and <= 1");
                                    break;
                                case "normal":
                                    (0, s.logInfo)(O + "A/B Testing - user is NOT in the Control Group"), (0, c.N)(n, "id5id.ext.abTestingControlGroup", !1)
                            }
                            return (0, s.logInfo)(O + "Decoded ID", n), n
                        }
                    },
                    getId: function(e, t, r) {
                        if (L(e)) {
                            return {
                                callback: function(n) {
                                    new k(e, t, r, f.nX.getConsentData()).execute().then((function(e) {
                                        n(e)
                                    })).catch((function(e) {
                                        (0, s.logError)(O + "getId fetch encountered an error", e), n()
                                    }))
                                }
                            }
                        }
                    },
                    extendId: function(e, t, r) {
                        return L(e), B(e && e.params && e.params.partner || 0), (0, s.logInfo)(O + "using cached ID", r), r
                    }
                },
                C = new WeakSet,
                j = new WeakSet,
                P = new WeakSet,
                E = new WeakSet,
                T = new WeakSet,
                k = function() {
                    function e(t, r, n, i) {
                        (0, o.Z)(this, e), m(this, T), m(this, E), m(this, P), m(this, j), m(this, C), this.submoduleConfig = t, this.gdprConsentData = r, this.cacheIdObj = n, this.usPrivacyData = i
                    }
                    return (0, i.Z)(e, [{
                        key: "execute",
                        value: function() {
                            var e = this;
                            return v(this, j, x).call(this, this.submoduleConfig).then((function(t) {
                                return v(e, P, N).call(e, t.extensionsCall).then((function(r) {
                                    return v(e, E, G).call(e, t.fetchCall, r)
                                }))
                            })).then((function(t) {
                                try {
                                    A(e.submoduleConfig.params.partner, 0), t.privacy && F(y, JSON.stringify(t.privacy), 30)
                                } catch (e) {
                                    (0, s.logError)(O + e)
                                }
                                return t
                            }))
                        }
                    }]), e
                }();

            function _(e, t, r) {
                return new Promise((function(n, o) {
                    (0, u.h)(e, {
                        success: function(e) {
                            n(e)
                        },
                        error: function(e) {
                            o(e)
                        }
                    }, t, r)
                }))
            }

            function x(e) {
                var t = e.params.configUrl || "https://id5-sync.com/api/config/prebid";
                return v(this, C, _).call(this, t, JSON.stringify(e), {
                    method: "POST"
                }).then((function(e) {
                    var t = JSON.parse(e);
                    return (0, s.logInfo)(O + "config response received from the server", t), t
                }))
            }

            function N(e) {
                if (void 0 === e) return Promise.resolve(void 0);
                var t = e.url,
                    r = e.method || "GET",
                    n = "GET" === r ? void 0 : JSON.stringify(e.body || {});
                return v(this, C, _).call(this, t, n, {
                    method: r
                }).then((function(e) {
                    var t = JSON.parse(e);
                    return (0, s.logInfo)(O + "extensions response received from the server", t), t
                }))
            }

            function G(e, t) {
                var r = e.url,
                    n = e.overrides || {},
                    o = h(h(h({}, v(this, T, J).call(this)), n), {}, {
                        extensions: t
                    });
                return v(this, C, _).call(this, r, JSON.stringify(o), {
                    method: "POST",
                    withCredentials: !0
                }).then((function(e) {
                    var t = JSON.parse(e);
                    return (0, s.logInfo)(O + "fetch response received from the server", t), t
                }))
            }

            function J() {
                var e, t = this.submoduleConfig.params,
                    r = this.gdprConsentData && "boolean" == typeof this.gdprConsentData.gdprApplies && this.gdprConsentData.gdprApplies ? 1 : 0,
                    n = (0, p.nH)(),
                    o = this.cacheIdObj && this.cacheIdObj.signature ? this.cacheIdObj.signature : (S.forEach((function(t) {
                        I.getCookie(t) && (e = (0, s.safeJSONParse)(I.getCookie(t)) || e)
                    })), e && e.signature || ""),
                    i = B(t.partner),
                    a = {
                        partner: t.partner,
                        gdpr: r,
                        nbPage: i,
                        o: "pbjs",
                        rf: n.topmostLocation,
                        top: n.reachedTop ? 1 : 0,
                        u: n.stack[0] || window.location.href,
                        v: "7.17.0",
                        storage: this.submoduleConfig.storage
                    };
                !r || void 0 === this.gdprConsentData.consentString || (0, s.isEmpty)(this.gdprConsentData.consentString) || (0, s.isEmptyStr)(this.gdprConsentData.consentString) || (a.gdpr_consent = this.gdprConsentData.consentString), void 0 === this.usPrivacyData || (0, s.isEmpty)(this.usPrivacyData) || (0, s.isEmptyStr)(this.usPrivacyData) || (a.us_privacy = this.usPrivacyData), void 0 === o || (0, s.isEmptyStr)(o) || (a.s = o), void 0 === t.pd || (0, s.isEmptyStr)(t.pd) || (a.pd = t.pd), void 0 === t.provider || (0, s.isEmptyStr)(t.provider) || (a.provider = t.provider);
                var c = t.abTesting || {
                    enabled: !1
                };
                return c.enabled && (a.ab_testing = {
                    enabled: !0,
                    control_group_pct: c.controlGroupPct
                }), a
            }

            function L(e) {
                return e && e.params && e.params.partner && "number" == typeof e.params.partner ? e.storage && e.storage.type && e.storage.name ? (e.storage.type !== D && (0, s.logWarn)(O + "storage type recommended to be '".concat(D, "'. In a future release this may become a strict requirement")), e.storage.name !== b && (0, s.logWarn)(O + "storage name recommended to be '".concat(b, "'. In a future release this may become a strict requirement")), !0) : ((0, s.logError)(O + "storage required to be set"), !1) : ((0, s.logError)(O + "partner required to be defined as a number"), !1)
            }

            function W(e) {
                return "".concat(b, "_").concat(e, "_nb")
            }

            function A(e, t) {
                F(W(e), t, 30)
            }

            function q(e) {
                var t = function(e) {
                    var t = I.getDataFromLocalStorage("".concat(e, "_exp"));
                    if ("" === t) return I.getDataFromLocalStorage(e);
                    if (t && new Date(t).getTime() - Date.now() > 0) return I.getDataFromLocalStorage(e);
                    return I.removeDataFromLocalStorage(e), null
                }(W(e));
                return t ? parseInt(t) : 0
            }

            function B(e) {
                var t = q(e) + 1;
                return A(e, t), t
            }

            function F(e, t, r) {
                I.setDataInLocalStorage("".concat(e, "_exp"), function(e) {
                    return new Date(Date.now() + 864e5 * e).toUTCString()
                }(r)), I.setDataInLocalStorage("".concat(e), t)
            }(0, d.Bx)("userId", w), window.epbjs.installedModules.push("id5IdSystem")
        }
    },
    function(e) {
        var t;
        t = 10272, e(e.s = t)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [4967], {
        29747: function(e, t, n) {
            var o = n(92797),
                r = n(15164),
                a = n(64358),
                i = n(9528),
                s = "__qca",
                d = 864e5,
                c = "p-KceJUEvXN48CE",
                p = "https://pixel.quantserve.com/pixel",
                u = "11",
                l = ["1", "10"],
                g = ["1"],
                f = ["1"],
                v = i.rp.getConsentData(),
                m = i.nX.getConsentData(),
                h = (0, r.df)();

            function I(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 392;
                if (!window._qevents && e && "" != e) {
                    var n, o, r = h.getCookie(s),
                        i = "0",
                        u = w.findRootDomain(),
                        l = new Date,
                        g = "";
                    if (!r) {
                        var f = l.getTime(),
                            I = new Date(f + t * d).toGMTString(),
                            C = Math.round(2147483647 * Math.random());
                        r = "B0-".concat(C, "-").concat(f), i = "1", h.setCookie(s, r, I, "/", u, null)
                    }
                    n = "&fpan=".concat(i, "&fpa=").concat(r), o = "&gdpr=0", v && "boolean" == typeof v.gdprApplies && v.gdprApplies && (o = "gdpr=1&gdpr_consent=".concat(v.consentString)), m && "string" == typeof m && (g = "&us_privacy=".concat(m));
                    var x = p + "?d=" + u + "&client_id=" + e + "&a=" + c + g + o + n;
                    (0, a.triggerPixel)(x)
                }
            }

            function C(e) {
                return !e || "boolean" != typeof e.gdprApplies || !e.gdprApplies || !!e.vendorData && function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        n = e.gdprApplies,
                        o = e.purpose,
                        r = e.vendor,
                        a = r && r.consents && r.consents[11],
                        i = r && r.legitimateInterests && r.legitimateInterests[11],
                        s = e.publisher ? e.publisher.restrictions : {};
                    if (!n) return !0;
                    return t.map((function(e) {
                        var t = !!o.consents && o.consents[e],
                            n = !!o.legitimateInterests && o.legitimateInterests[e],
                            r = s && s[e] ? s[e][11] : null;
                        return 0 !== r && (!(!a || !t || 2 === r || -1 == g.indexOf(e) && 1 !== r) || !(1 === r || !i || !n || -1 != f.indexOf(e) || -1 != g.indexOf(e) && 2 !== r))
                    })).reduce((function(e, t) {
                        return e && t
                    }), !0)
                }(e.vendorData)
            }
            var w = {
                name: "quantcastId",
                gvlid: u,
                decode: function(e) {
                    return e
                },
                getId: function(e) {
                    var t, n = h.getCookie(s);
                    if (i.VP.getCoppa() || (t = m) && "string" == typeof t && 4 == t.length && "Y" == t.charAt(1) && "Y" == t.charAt(2) || !C(v)) {
                        var o = new Date(0).toUTCString(),
                            r = w.findRootDomain();
                        return (0, a.logInfo)("QuantcastId: Necessary consent not present for Id, exiting QuantcastId"), void h.setCookie(s, "", o, "/", r, null)
                    }
                    var d = e && e.params || {},
                        c = e && e.storage || {},
                        p = d.clientId || "",
                        u = c.expires || 392;
                    return "complete" === document.readyState ? I(p, u) : window.addEventListener("load", (function() {
                        I(p, u)
                    })), {
                        id: n ? {
                            quantcastId: n
                        } : void 0
                    }
                }
            };
            (0, o.Bx)("userId", w), window.epbjs.installedModules.push("quantcastIdSystem")
        }
    },
    function(e) {
        var t;
        t = 29747, e(e.s = t)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [5030], {
        7927: function(e, r, t) {
            var n = t(4942),
                i = t(93324),
                s = t(71002),
                o = t(48525),
                d = t(69626),
                a = t(64358),
                c = t(20265),
                p = t(96475),
                u = t(5644),
                b = t(9528),
                f = t(3193),
                l = t(24679),
                v = t(14699),
                g = t(52021),
                m = t(34614),
                h = {
                    appnexus: {
                        adapter: "prebidServer",
                        enabled: !0,
                        endpoint: {
                            p1Consent: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                            noP1Consent: "https://prebid.adnxs-simple.com/pbs/v1/openrtb2/auction"
                        },
                        syncEndpoint: {
                            p1Consent: "https://prebid.adnxs.com/pbs/v1/cookie_sync",
                            noP1Consent: "https://prebid.adnxs-simple.com/pbs/v1/cookie_sync"
                        },
                        timeout: 1e3
                    },
                    appnexuspsp: {
                        adapter: "prebidServer",
                        enabled: !0,
                        endpoint: {
                            p1Consent: "https://ib.adnxs.com/openrtb2/prebid",
                            noP1Consent: "https://ib.adnxs-simple.com/openrtb2/prebid"
                        },
                        timeout: 1e3
                    },
                    rubicon: {
                        adapter: "prebidServer",
                        enabled: !0,
                        endpoint: {
                            p1Consent: "https://prebid-server.rubiconproject.com/openrtb2/auction",
                            noP1Consent: "https://prebid-server.rubiconproject.com/openrtb2/auction"
                        },
                        syncEndpoint: {
                            p1Consent: "https://prebid-server.rubiconproject.com/cookie_sync",
                            noP1Consent: "https://prebid-server.rubiconproject.com/cookie_sync"
                        },
                        timeout: 500
                    },
                    openx: {
                        adapter: "prebidServer",
                        enabled: !0,
                        endpoint: {
                            p1Consent: "https://prebid.openx.net/openrtb2/auction",
                            noP1Consent: "https://prebid.openx.net/openrtb2/auction"
                        },
                        syncEndpoint: {
                            p1Consent: "https://prebid.openx.net/cookie_sync",
                            noP1Consent: "https://prebid.openx.net/cookie_sync"
                        },
                        timeout: 1e3
                    }
                },
                y = t(48928),
                C = t(92797),
                x = t(78640),
                O = t(17673),
                S = t(99128);

            function I(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function P(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? I(Object(t), !0).forEach((function(r) {
                        (0, n.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var j, B, E = f.vc.getConfig,
                w = u.os.YZ,
                R = 0,
                Z = {
                    bidders: Object.freeze([]),
                    timeout: 1e3,
                    syncTimeout: 1e3,
                    maxBids: 1,
                    adapter: "prebidServer",
                    allowUnknownBidderCodes: !1,
                    adapterOptions: {},
                    syncUrlModifier: {}
                };

            function k(e) {
                if (e) {
                    var r = Array.isArray(e) ? e : [e],
                        t = [];
                    return r.every((function(r, n, i) {
                        ! function(e) {
                            ["endpoint", "syncEndpoint"].forEach((function(r) {
                                if ((0, a.isStr)(e[r])) {
                                    var t = e[r];
                                    e[r] = {
                                        p1Consent: t,
                                        noP1Consent: t
                                    }
                                }!(0, a.isPlainObject)(e[r]) || e[r].p1Consent && e[r].noP1Consent || ["p1Consent", "noP1Consent"].forEach((function(t) {
                                    e[r][t] || (0, a.logWarn)("s2sConfig.".concat(r, ".").concat(t, " not defined.  PBS request will be skipped in some P1 scenarios."))
                                }))
                            }))
                        }(e);
                        var s = function(e) {
                            if (e.defaultVendor) {
                                var r = e.defaultVendor,
                                    t = Object.keys(e);
                                if (!h[r]) return (0, a.logError)("Incorrect or unavailable prebid server default vendor option: " + r), !1;
                                Object.keys(h[r]).forEach((function(n) {
                                    Z[n] !== e[n] && (0, m.q9)(t, n) || (e[n] = h[r][n])
                                }))
                            }
                            return e.enabled = "boolean" == typeof e.enabled && e.enabled
                        }(r);
                        if (!1 !== s) {
                            var o = function(e) {
                                var r = Object.keys(e);
                                if (["accountId", "endpoint"].filter((function(e) {
                                        return !(0, m.q9)(r, e) && ((0, a.logError)(e + " missing in server to server config"), !0)
                                    })).length > 0) return !1
                            }(r);
                            if (!1 !== o) return Array.isArray(r.bidders) && (i[n].bidders = r.bidders.filter((function(e) {
                                return -1 === t.indexOf(e) && (t.push(e), !0)
                            }))), !0
                        }
                        return (0, a.logWarn)("prebidServer: s2s config is disabled"), !1
                    })) ? j = r : void 0
                }
            }

            function q(e, r, t, n) {
                if (j.length !== R) {
                    R++;
                    var i = {
                            uuid: (0, a.generateUUID)(),
                            bidders: e,
                            account: n.accountId
                        },
                        s = n.userSyncLimit;
                    (0, a.isNumber)(s) && s > 0 && (i.limit = s), r && (i.gdpr = r.gdprApplies ? 1 : 0, !1 !== r.gdprApplies && (i.gdpr_consent = r.consentString)), t && (i.us_privacy = t), "boolean" == typeof n.coopSync && (i.coopSync = n.coopSync);
                    var o = JSON.stringify(i);
                    (0, y.h)(D(n.syncEndpoint, r), (function(e) {
                        try {
                            _((e = JSON.parse(e)).bidder_status, n)
                        } catch (e) {
                            (0, a.logError)(e)
                        }
                    }), o, {
                        contentType: "text/plain",
                        withCredentials: !0
                    })
                }
            }

            function _(e, r) {
                if (0 !== e.length) {
                    var t = e.shift();
                    t.no_cookie ? function(e, r, t, n, i) {
                        i.syncUrlModifier && "function" == typeof i.syncUrlModifier[t] && (r = i.syncUrlModifier[t](e, r, t));
                        ! function(e, r, t, n, i) {
                            r ? "image" === e || "redirect" === e ? ((0, a.logMessage)('Invoking image pixel user sync for bidder: "'.concat(t, '"')), (0, a.triggerPixel)(r, n, i)) : "iframe" === e ? ((0, a.logMessage)('Invoking iframe user sync for bidder: "'.concat(t, '"')), (0, a.insertUserSyncIframe)(r, n, i)) : ((0, a.logError)('User sync type "'.concat(e, '" not supported for bidder: "').concat(t, '"')), n()) : ((0, a.logError)('No sync url for bidder "'.concat(t, '": ').concat(r)), n())
                        }(e, r, t, n, i.syncTimeout)
                    }(t.usersync.type, t.usersync.url, t.bidder, a.bind.call(_, null, e, r), r) : _(e, r)
                }
            }
            f.vc.setDefaults({
                s2sConfig: Z
            }), E("s2sConfig", (function(e) {
                return k(e.s2sConfig)
            }));
            [Object.keys(u.V1).reduce((function(e, r) {
                return e[r] = u.s$[u.V1[r]], e
            }), {}), {
                icon: 1,
                image: 3
            }, {
                impression: 1,
                "viewable-mrc50": 2,
                "viewable-mrc100": 3,
                "viewable-video50": 4
            }, {
                img: 1,
                js: 2
            }].forEach((function(e) {
                Object.keys(e).forEach((function(r) {
                    e[e[r]] = r
                }))
            }));
            var N = {};

            function U(e, r, t, n) {
                this.s2sBidRequest = e, this.bidderRequests = r, this.adUnits = t, this.s2sConfig = e.s2sConfig, this.requestedBidders = n, this.bidIdMap = {}, this.adUnitsByImp = {}, this.impRequested = {}, this.auctionId = r.map((function(e) {
                    return e.auctionId
                })).reduce((function(e, r) {
                    return (null == e || e === r) && r
                })), this.requestTimestamp = (0, a.timestamp)()
            }

            function A(e) {
                var r, t, n = function(e, r) {
                    if ([e, r].every(a.isStr)) return N["".concat(e).concat(r)]
                }(e.auctionId, e.adId);
                (0, a.isStr)(n) && ((0, a.logMessage)('Invoking image pixel for wurl on BID_WIN: "'.concat(n, '"')), (0, a.triggerPixel)(n), r = e.auctionId, t = e.adId, [r, t].every(a.isStr) && (N["".concat(r).concat(t)] = void 0))
            }

            function D(e, r) {
                return (0, O.h)(r) ? e.p1Consent : e.noP1Consent
            }

            function T(e) {
                var r, t;
                return Array.isArray(e) && e.length > 0 && (r = e[0].gdprConsent, t = e[0].uspConsent), {
                    gdprConsent: r,
                    uspConsent: t
                }
            }
            Object.assign(U.prototype, {
                buildRequest: function() {
                    var e, r, t, n, o = this,
                        d = this.s2sBidRequest,
                        u = this.bidderRequests,
                        v = this.adUnits,
                        g = this.s2sConfig,
                        h = this.requestedBidders,
                        y = [],
                        C = {},
                        O = u[0],
                        S = new Set;
                    if (v.forEach((function(e) {
                            e.bids.forEach((function(r) {
                                null != r.mediaTypes && (0, a.logWarn)("Prebid Server adapter does not (yet) support bidder-specific mediaTypes for the same adUnit. Size mapping configuration will be ignored for adUnit: ".concat(e.code, ", bidder: ").concat(r.bidder))
                            }));
                            for (var r = e.code, t = 1; S.has(r);) t++, r = "".concat(e.code, "-").concat(t);
                            S.add(r), o.adUnitsByImp[r] = e;
                            var n = (0, c.Z)(e, "mediaTypes.video"),
                                s = (0, c.Z)(e, "mediaTypes.banner");
                            e.bids.forEach((function(e) {
                                if (o.setBidRequestId(r, e.bidder, e.bid_id), b.ZP.aliasRegistry[e.bidder]) {
                                    var t = b.ZP.bidderRegistry[e.bidder];
                                    t && !t.getSpec().skipPbsAliasing && (C[e.bidder] = b.ZP.aliasRegistry[e.bidder])
                                }
                            }));
                            var d = {};
                            if (s && s.sizes) {
                                var v = (0, a.parseSizesInput)(s.sizes).map((function(e) {
                                    var r = e.split("x"),
                                        t = (0, i.Z)(r, 2),
                                        n = t[0],
                                        s = t[1];
                                    return {
                                        w: parseInt(n, 10),
                                        h: parseInt(s, 10)
                                    }
                                }));
                                d.banner = {
                                    format: v
                                }, s.pos && (d.banner.pos = s.pos)
                            }(0, a.isEmpty)(n) || ("outstream" !== n.context || n.renderer || e.renderer ? ("instream" !== n.context || n.hasOwnProperty("placement") || (n.placement = 1), d.video = Object.keys(n).filter((function(e) {
                                return "context" !== e
                            })).reduce((function(e, r) {
                                return "playerSize" === r ? (e.w = (0, c.Z)(n, "".concat(r, ".0.0")), e.h = (0, c.Z)(n, "".concat(r, ".0.1"))) : e[r] = n[r], e
                            }), {})) : (0, a.logError)("Outstream bid without renderer cannot be sent to Prebid Server."));
                            var m = (0, c.Z)(e, "nativeOrtbRequest");
                            if (m) {
                                try {
                                    var h = Object.assign({
                                        context: 1,
                                        plcmttype: 1,
                                        eventtrackers: [{
                                            event: 1,
                                            methods: [1]
                                        }]
                                    }, m);
                                    d[l.B5] = {
                                        request: JSON.stringify(h),
                                        ver: "1.2"
                                    }
                                } catch (e) {
                                    (0, a.logError)("error creating native request: " + String(e))
                                }
                            }
                            var O = e.bids.reduce((function(r, t) {
                                    if (null == t.bidder) return r;
                                    var n = b.ZP.bidderRegistry[t.bidder];
                                    return n && n.getSpec().transformBidParams && (t.params = n.getSpec().transformBidParams(t.params, !0, e, u)), (0, p.N)(r, "prebid.bidder.".concat(t.bidder), g.adapterOptions && g.adapterOptions[t.bidder] ? Object.assign({}, t.params, g.adapterOptions[t.bidder]) : t.params), r
                                }), P({}, (0, c.Z)(e, "ortb2Imp.ext"))),
                                I = P(P({}, e.ortb2Imp), {}, {
                                    id: r,
                                    ext: O,
                                    secure: g.secure
                                }),
                                j = P({}, (0, c.Z)(e, "ortb2Imp.ext.data"));
                            Object.keys(j).forEach((function(e) {
                                "pbadslot" === e ? "string" == typeof j[e] && j[e] ? (0, p.N)(I, "ext.data.pbadslot", j[e]) : delete I.ext.data.pbadslot : "adserver" === e ? ["name", "adslot"].forEach((function(e) {
                                    var r = (0, c.Z)(j, "adserver.".concat(e));
                                    "string" == typeof r && r && (0, p.N)(I, "ext.data.adserver.".concat(e.toLowerCase()), r)
                                })) : (0, p.N)(I, "ext.data.".concat(e), j[e])
                            })), (0, a.mergeDeep)(I, d);
                            var B, E, w = (B = "function" != typeof(0, x.R)().convertCurrency ? function(e) {
                                return e
                            } : function(e, r, t) {
                                if (r === t) return e;
                                var n = null;
                                try {
                                    n = (0, x.R)().convertCurrency(e, r, t)
                                } catch (e) {}
                                return n
                            }, E = f.vc.getConfig("currency.adServerCurrency") || "USD", e.bids.map((function(e) {
                                return o.getBidRequest(I.id, e.bidder)
                            })).map((function(e) {
                                if (e && "function" == typeof e.getFloor) try {
                                    var r = e.getFloor({
                                            currency: E
                                        }),
                                        t = r.currency,
                                        n = r.floor;
                                    return {
                                        currency: t,
                                        floor: parseFloat(n)
                                    }
                                } catch (e) {
                                    (0, a.logError)("PBS: getFloor threw an error: ", e)
                                }
                            })).reduce((function(e, r) {
                                if ((null == r || null == r.currency || null == r.floor || isNaN(r.floor)) && (e.min = null), null === e.min) return e;
                                if (null == e.ref) e.ref = e.min = r;
                                else {
                                    var t = B(r.floor, r.currency, e.ref.currency);
                                    null != t && t < e.ref.floor && (e.ref.floor = t, e.min = r)
                                }
                                return e
                            }), {}).min);
                            w && (I.bidfloor = w.floor, I.bidfloorcur = w.currency), (I.banner || I.video || I.native) && y.push(I)
                        })), y.length) {
                        var I = {
                            id: O.auctionId,
                            source: {
                                tid: d.tid
                            },
                            tmax: g.timeout,
                            imp: y,
                            test: 0,
                            ext: {
                                prebid: {
                                    auctiontimestamp: O.auctionStart,
                                    targeting: {
                                        includewinners: !0,
                                        includebidderkeys: !1
                                    }
                                }
                            }
                        };
                        "object" === (0, s.Z)((0, c.Z)(O, "bids.0.floorData")) && (I.ext.prebid.floors = {
                            enabled: !1
                        }), I.ext.prebid = Object.assign(I.ext.prebid, {
                            channel: {
                                name: "pbjs",
                                version: epbjs.version
                            }
                        }), E("debug") && (I.ext.prebid = Object.assign(I.ext.prebid, {
                            debug: !0
                        })), g.extPrebid && "object" === (0, s.Z)(g.extPrebid) && (I.ext.prebid = (0, a.mergeDeep)(I.ext.prebid, g.extPrebid));
                        var j = null !== (e = I.ext.prebid) && void 0 !== e && e.schains ? I.ext.prebid.schains.flatMap((function(e) {
                                return e.bidders
                            })) : [],
                            w = Object.fromEntries(((null === (r = I.ext.prebid) || void 0 === r ? void 0 : r.schains) || []).map((function(e) {
                                var r = e.bidders,
                                    t = e.schain;
                                return [JSON.stringify(t), {
                                    bidders: new Set(r),
                                    schain: t
                                }]
                            })));
                        I.ext.prebid.schains = Object.values(u.map((function(e) {
                            return [e.bidderCode, e.bids[0].schain]
                        })).reduce((function(e, r) {
                            var t = (0, i.Z)(r, 2),
                                n = t[0],
                                s = t[1],
                                o = JSON.stringify(s);
                            switch (!0) {
                                case o && -1 !== j.indexOf(n):
                                    (0, a.logInfo)("bidder-specific schain for ".concat(n, " skipped due to existing entry"));
                                    break;
                                case o && e.hasOwnProperty(o) && -1 === j.indexOf(n):
                                    e[o].bidders.add(n);
                                    break;
                                case o && !e.hasOwnProperty(o):
                                    e[o] = {
                                        bidders: new Set,
                                        schain: s
                                    }, e[o].bidders.add(n)
                            }
                            return e
                        }), w)).map((function(e) {
                            var r = e.bidders,
                                t = e.schain;
                            return {
                                bidders: Array.from(r),
                                schain: t
                            }
                        })), 0 === I.ext.prebid.schains.length && delete I.ext.prebid.schains;
                        var R = f.vc.getConfig("currency.adServerCurrency");
                        R && "string" == typeof R ? I.cur = [R] : Array.isArray(R) && R.length && (I.cur = [R[0]]),
                            function(e, r, t) {
                                e && ("object" === (0, s.Z)(f.vc.getConfig("app")) ? (e.app = f.vc.getConfig("app"), e.app.publisher = {
                                    id: t
                                }) : (e.site = {}, (0, a.isPlainObject)(f.vc.getConfig("site")) && (e.site = f.vc.getConfig("site")), (0, c.Z)(e.site, "publisher.id") || (0, p.N)(e.site, "publisher.id", t), e.site.page || (e.site.page = r)), "object" === (0, s.Z)(f.vc.getConfig("device")) && (e.device = f.vc.getConfig("device")), e.device || (e.device = {}), e.device.w || (e.device.w = window.innerWidth), e.device.h || (e.device.h = window.innerHeight))
                            }(I, u[0].refererInfo.page, g.accountId);
                        var Z = (0, c.Z)(u, "0.bids.0.schain");
                        Z && (I.source.ext = {
                            schain: Z
                        }), (0, a.isEmpty)(C) || (I.ext.prebid.aliases = P(P({}, I.ext.prebid.aliases), C));
                        var k = (0, c.Z)(u, "0.bids.0.userIdAsEids");
                        (0, a.isArray)(k) && k.length > 0 && (0, p.N)(I, "user.ext.eids", k), (0, a.isArray)(B) && B.length > 0 && (h && (0, a.isArray)(h) && B.forEach((function(e) {
                            e.bidders && (e.bidders = e.bidders.filter((function(e) {
                                return (0, m.q9)(h, e)
                            })))
                        })), (0, p.N)(I, "ext.prebid.data.eidpermissions", B));
                        var q = f.vc.getConfig("multibid");
                        if (q && (0, p.N)(I, "ext.prebid.multibid", q.reduce((function(e, r) {
                                var t = {};
                                return Object.keys(r).forEach((function(e) {
                                    t[e.toLowerCase()] = r[e]
                                })), e.push(t), e
                            }), [])), u) {
                            var _;
                            if (O.gdprConsent) "boolean" == typeof O.gdprConsent.gdprApplies && (_ = O.gdprConsent.gdprApplies ? 1 : 0), (0, p.N)(I, "regs.ext.gdpr", _), (0, p.N)(I, "user.ext.consent", O.gdprConsent.consentString), O.gdprConsent.addtlConsent && "string" == typeof O.gdprConsent.addtlConsent && (0, p.N)(I, "user.ext.ConsentedProvidersSettings.consented_providers", O.gdprConsent.addtlConsent);
                            O.uspConsent && (0, p.N)(I, "regs.ext.us_privacy", O.uspConsent)
                        }!0 === E("coppa") && (0, p.N)(I, "regs.coppa", 1);
                        var N = (null === (t = d.ortb2Fragments) || void 0 === t ? void 0 : t.global) || {};
                        return (0, a.mergeDeep)(I, N),
                            function(e, r) {
                                var t = Object.entries(r).reduce((function(e, r) {
                                    var t = (0, i.Z)(r, 2),
                                        n = t[0],
                                        s = t[1],
                                        o = (0, a.mergeDeep)({}, s);
                                    return e.push({
                                        bidders: [n],
                                        config: {
                                            ortb2: o
                                        }
                                    }), e
                                }), []);
                                t.length && (0, p.N)(e, "ext.prebid.bidderconfig", t)
                            }(I, (null === (n = d.ortb2Fragments) || void 0 === n ? void 0 : n.bidder) || {}), I.imp.forEach((function(e) {
                                return o.impRequested[e.id] = e
                            })), I
                    }(0, a.logError)("Request to Prebid Server rejected due to invalid media type(s) in adUnit.")
                },
                interpretResponse: function(e) {
                    var r = this,
                        t = this.bidderRequests,
                        n = this.s2sConfig,
                        i = [];
                    return [
                        ["errors", "serverErrors"],
                        ["responsetimemillis", "serverResponseTimeMs"]
                    ].forEach((function(r) {
                        return function(e, r, t, n) {
                            var i = (0, c.Z)(r, "ext.".concat(t));
                            i && Object.keys(i).forEach((function(r) {
                                var t = (0, m.sE)(e, (function(e) {
                                    return e.bidderCode === r
                                }));
                                t && (t[n] = i[r])
                            }))
                        }(t, e, r[0], r[1])
                    })), e.seatbid && e.seatbid.forEach((function(t) {
                        (t.bid || []).forEach((function(o) {
                            var p, b, f, v, g = r.getBidRequest(o.impid, t.seat);
                            if (null == g) {
                                if (!n.allowUnknownBidderCodes) return void(0, a.logWarn)("PBS adapter received bid from unknown bidder (".concat(t.seat, "), but 's2sConfig.allowUnknownBidderCodes' is not set. Ignoring bid."));
                                g = r.getBidRequest(o.impid, null)
                            }
                            var m = o.price,
                                h = 0 !== m ? u.Q_.GOOD : u.Q_.NO_BID,
                                y = (0, d.m)(h, {
                                    bidder: t.seat,
                                    src: w,
                                    bidId: g ? g.bidId || g.bid_Id : null,
                                    transactionId: r.adUnitsByImp[o.impid].transactionId,
                                    auctionId: r.auctionId
                                });
                            y.requestTimestamp = r.requestTimestamp, y.cpm = m, null != o && null !== (p = o.ext) && void 0 !== p && null !== (b = p.prebid) && void 0 !== b && null !== (f = b.meta) && void 0 !== f && f.adaptercode ? y.adapterCode = o.ext.prebid.meta.adaptercode : null !== (v = g) && void 0 !== v && v.bidder ? y.adapterCode = g.bidder : y.adapterCode = t.seat;
                            var C = (0, c.Z)(e, ["ext", "responsetimemillis", t.seat].join("."));
                            g && C && (g.serverResponseTimeMs = C);
                            var x, O, S, I = (0, c.Z)(o, "ext.prebid.bidid");
                            (0, a.isStr)(I) && (y.pbsBidId = I), (0, a.isStr)((0, c.Z)(o, "ext.prebid.events.win")) && (x = r.auctionId, O = y.adId, S = (0, c.Z)(o, "ext.prebid.events.win"), [x, O].every(a.isStr) && (N["".concat(x).concat(O)] = S));
                            var P = (0, c.Z)(o, "ext.prebid.targeting");
                            if ((0, a.isPlainObject)(P) && ((0, a.isStr)((0, c.Z)(o, "ext.prebid.events.win")) && (P = (0, a.getDefinedParams)(P, Object.keys(P).filter((function(e) {
                                    return -1 === e.indexOf("hb_winurl") && -1 === e.indexOf("hb_bidid")
                                })))), y.adserverTargeting = P), y.seatBidId = o.id, (0, c.Z)(o, "ext.prebid.type") === l.pX) {
                                y.mediaType = l.pX;
                                var j = r.impRequested[o.impid],
                                    B = [j.video.w, j.video.h];
                                y.playerWidth = B[0], y.playerHeight = B[1], o.ext.prebid.cache && "object" === (0, s.Z)(o.ext.prebid.cache.vastXml) && o.ext.prebid.cache.vastXml.cacheId && o.ext.prebid.cache.vastXml.url ? (y.videoCacheKey = o.ext.prebid.cache.vastXml.cacheId, y.vastUrl = o.ext.prebid.cache.vastXml.url) : P && P.hb_uuid && P.hb_cache_host && P.hb_cache_path && (y.videoCacheKey = P.hb_uuid, y.vastUrl = "https://".concat(P.hb_cache_host).concat(P.hb_cache_path, "?uuid=").concat(P.hb_uuid)), o.adm && (y.vastXml = o.adm), !y.vastUrl && o.nurl && (y.vastUrl = o.nurl)
                            } else if ((0, c.Z)(o, "ext.prebid.type") === l.B5) {
                                var E;
                                y.mediaType = l.B5, E = "string" == typeof o.adm ? y.adm = JSON.parse(o.adm) : y.adm = o.adm, (0, a.isPlainObject)(E) && Array.isArray(E.assets) ? y.native = {
                                    ortb: E
                                } : (0, a.logError)("prebid server native response contained no assets")
                            } else o.adm && o.nurl ? (y.ad = o.adm, y.ad += (0, a.createTrackPixelHtml)(decodeURIComponent(o.nurl))) : o.adm ? y.ad = o.adm : o.nurl && (y.adUrl = o.nurl);
                            y.width = o.w, y.height = o.h, o.dealid && (y.dealId = o.dealid), y.creative_id = o.crid, y.creativeId = o.crid, o.burl && (y.burl = o.burl), y.currency = e.cur ? e.cur : "USD", y.meta = {};
                            var R = (0, c.Z)(o, "ext.prebid.meta");
                            R && (0, a.isPlainObject)(R) && (y.meta = (0, a.deepClone)(R)), o.adomain && (y.meta.advertiserDomains = o.adomain);
                            var Z = n.defaultTtl || 60;
                            y.ttl = o.exp ? o.exp : Z, y.netRevenue = !o.netRevenue || o.netRevenue, i.push({
                                adUnit: r.adUnitsByImp[o.impid].code,
                                bid: y
                            })
                        }))
                    })), i
                },
                setBidRequestId: function(e, r, t) {
                    this.bidIdMap[this.impBidderKey(e, r)] = t
                },
                getBidRequest: function(e, r) {
                    var t = this.impBidderKey(e, r);
                    return this.bidIdMap[t] && (0, a.getBidRequest)(this.bidIdMap[t], this.bidderRequests)
                },
                impBidderKey: function(e, r) {
                    return "".concat(e).concat(r)
                }
            });
            var M = (0, C.z3)("sync", (function(e, r, t, n) {
                var i = n.onResponse,
                    s = n.onError,
                    o = n.onBid,
                    d = T(r).gdprConsent,
                    c = (0, a.deepClone)(e.ad_units),
                    p = c.map((function(e) {
                        return e.bids.map((function(e) {
                            return e.bidder
                        })).filter(a.uniques)
                    })).reduce(a.flatten, []).filter(a.uniques),
                    u = new U(e, r, c, p),
                    b = e.metrics.measureTime("buildRequests", (function() {
                        return u.buildRequest()
                    })),
                    f = b && JSON.stringify(b);
                (0, a.logInfo)("BidRequest: " + f);
                var l = D(e.s2sConfig.endpoint, d);
                if (b && f && l) {
                    var v = e.metrics.startTiming("net");
                    t(l, {
                        success: function(r) {
                            var t;
                            v();
                            try {
                                t = JSON.parse(r), e.metrics.measureTime("interpretResponse", (function() {
                                    return u.interpretResponse(t)
                                })).forEach(o)
                            } catch (e) {
                                (0, a.logError)(e)
                            }!t || t.status && (0, m.q9)(t.status, "Error") ? ((0, a.logError)("error parsing response: ", t ? t.status : "not valid JSON"), i(!1, p)) : i(!0, p)
                        },
                        error: function() {
                            v(), s.apply(this, arguments)
                        }
                    }, f, {
                        contentType: "text/plain",
                        withCredentials: !0
                    })
                } else(0, a.logError)("PBS request not made.  Check endpoints.")
            }), "processPBSRequest");
            (0, a.getPrebidInternal)().setEidPermissions = function(e) {
                B = e
            }, b.ZP.registerBidAdapter(new function() {
                var e = new o.Z("prebidServer");
                return e.callBids = function(e, r, t, n, i) {
                    var s = e.metrics = (0, S.Bf)((0, c.Z)(r, "0.metrics")).newMetrics().renameWith((function(r) {
                        return ["adapter.s2s.".concat(r), "adapters.s2s.".concat(e.s2sConfig.defaultVendor, ".").concat(r)]
                    }));
                    n = s.startTiming("total").stopBefore(n), r.forEach((function(e) {
                        return (0, S.Bf)(e.metrics).join(s, {
                            continuePropagation: !1
                        })
                    }));
                    var o = T(r),
                        d = o.gdprConsent,
                        p = o.uspConsent;
                    if (Array.isArray(j)) {
                        if (e.s2sConfig && e.s2sConfig.syncEndpoint && D(e.s2sConfig.syncEndpoint, d)) q(e.s2sConfig.bidders.map((function(e) {
                            return b.ZP.aliasRegistry[e] || e
                        })).filter((function(e, r, t) {
                            return t.indexOf(e) === r
                        })), d, p, e.s2sConfig);
                        M(e, r, i, {
                            onResponse: function(e, t) {
                                e && r.forEach((function(e) {
                                        return g.j8(u.FP.BIDDER_DONE, e)
                                    })), n(),
                                    function(e, r, t) {
                                        e.forEach((function(e) {
                                            var n = b.ZP.getBidAdapter(e);
                                            n && n.registerSyncs && f.vc.runWithBidder(e, a.bind.call(n.registerSyncs, n, [], r, t))
                                        }))
                                    }(t, d, p)
                            },
                            onError: n,
                            onBid: function(r) {
                                var n = r.adUnit,
                                    i = r.bid,
                                    s = i.metrics = e.metrics.fork().renameWith();
                                s.checkpoint("addBidResponse"), s.measureTime("addBidResponse.validate", (function() {
                                    return (0, v.JY)(n, i)
                                })) && t(n, i)
                            }
                        })
                    }
                }, g.on(u.FP.BID_WON, A), Object.assign(this, {
                    callBids: e.callBids,
                    setBidderCode: e.setBidderCode,
                    type: w
                })
            }, "prebidServer"), window.epbjs.installedModules.push("prebidServerBidAdapter")
        },
        17673: function(e, r, t) {
            t.d(r, {
                h: function() {
                    return i
                }
            });
            var n = t(20265);

            function i(e) {
                return null == e || !e.gdprApplies || !0 === (0, n.Z)(e, "vendorData.purpose.consents.1")
            }
        }
    },
    function(e) {
        var r;
        r = 7927, e(e.s = r)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [6656], {
        43642: function(e, r, n) {
            var a = n(4942),
                t = n(54284),
                o = n(18621),
                s = n(64358),
                i = n(20265),
                d = n(3193),
                c = n(92797),
                p = n(78653),
                u = n(9528),
                l = n(52021),
                _ = n(5644),
                g = n(7563),
                v = {
                    env: "vp",
                    gdfp_req: 1,
                    output: "vast",
                    unviewed_position_start: 1
                },
                f = {};

            function T(e, r, n) {
                if (!d.vc.getConfig("cache.url"))
                    if ((0, i.Z)(r, "".concat(n, ".description_url")))(0, s.logError)("input cannnot contain description_url");
                    else {
                        var a = e && e.vastUrl;
                        if (a) return encodeURIComponent(a)
                    }
            }

            function b(e, r, n) {
                var t = e && e.adserverTargeting || {},
                    d = {},
                    c = r && r.adUnit;
                if (c) {
                    var p = o.q0.getAllTargeting(c.code);
                    d = p ? p[c.code] : {}
                }
                var u = Object.assign({}, {
                    hb_uuid: e && e.videoCacheKey
                }, {
                    hb_cache_id: e && e.videoCacheKey
                }, d, t);
                l.j8(_.FP.SET_TARGETING, (0, a.Z)({}, c.code, u));
                var g = (0, i.Z)(r, "params.cust_params"),
                    v = Object.assign({}, u, g),
                    f = encodeURIComponent((0, s.formatQS)(v));
                return n && (f = n + "%26" + f), f
            }
            d.vc.getConfig("brandCategoryTranslation.translationFile") && (0, c.v5)("registerAdserver").before((function(e) {
                e.call(this, "dfp")
            })), (0, t.W)("dfp", {
                buildVideoUrl: function(e) {
                    if (e.params || e.url) {
                        var r = e.adUnit,
                            n = e.bid || o.q0.getWinningBids(r.code)[0],
                            a = {};
                        if (e.url && (a = (0, s.parseUrl)(e.url, {
                                noDecodeWholeURL: !0
                            }), (0, s.isEmpty)(e.params))) return function(e, r, n) {
                            var a = T(r, e, "search");
                            a && (e.search.description_url = a);
                            return e.search.cust_params = b(r, n, e.search.cust_params), (0, s.buildUrl)(e)
                        }(a, n, e);
                        var t = {
                                correlator: Date.now(),
                                sz: (0, s.parseSizesInput)((0, i.Z)(r, "mediaTypes.video.playerSize")).join("|"),
                                url: encodeURIComponent(location.href)
                            },
                            d = a.search,
                            c = d && d.sz;
                        c && (t.sz = c + "|" + t.sz);
                        var p = b(n, e, d && d.cust_params),
                            l = Object.assign({}, v, a.search, t, e.params, {
                                cust_params: p
                            }),
                            _ = T(n, e, "params");
                        _ && (l.description_url = _);
                        var f = u.rp.getConsentData();
                        f && ("boolean" == typeof f.gdprApplies && (l.gdpr = Number(f.gdprApplies)), f.consentString && (l.gdpr_consent = f.consentString), f.addtlConsent && (l.addtl_consent = f.addtlConsent));
                        var A = u.nX.getConsentData();
                        if (A && (l.us_privacy = A), !l.ppid) {
                            var C = (0, g.G)();
                            null != C && (l.ppid = C)
                        }
                        return (0, s.buildUrl)(Object.assign({
                            protocol: "https",
                            host: "securepubads.g.doubleclick.net",
                            pathname: "/gampad/ads"
                        }, a, {
                            search: l
                        }))
                    }(0, s.logError)("A params object or a url is required to use epbjs.adServers.dfp.buildVideoUrl")
                },
                buildAdpodVideoUrl: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = e.code,
                        n = e.params,
                        t = e.callback;
                    if (n && t) {
                        var o = {
                            correlator: Date.now(),
                            sz: d(r),
                            url: encodeURIComponent(location.href)
                        };
                        f.getTargeting({
                            codes: [r],
                            callback: c
                        })
                    } else(0, s.logError)("A params object and a callback is required to use pbjs.adServers.dfp.buildAdpodVideoUrl");

                    function d(e) {
                        var r = p.K.getAdUnits().filter((function(r) {
                                return r.code === e
                            })),
                            n = (0, i.Z)(r[0], "mediaTypes.video.playerSize");
                        return (0, s.parseSizesInput)(n).join("|")
                    }

                    function c(e, i) {
                        var d;
                        if (e) t(e, null);
                        else {
                            var c = (d = {}, (0, a.Z)(d, f.TARGETING_KEY_PB_CAT_DUR, void 0), (0, a.Z)(d, f.TARGETING_KEY_CACHE_ID, void 0), d),
                                p = {};
                            i[r] && (p = i[r].reduce((function(e, r) {
                                return Object.keys(r)[0] === f.TARGETING_KEY_PB_CAT_DUR ? e[f.TARGETING_KEY_PB_CAT_DUR] = void 0 !== e[f.TARGETING_KEY_PB_CAT_DUR] ? e[f.TARGETING_KEY_PB_CAT_DUR] + "," + r[f.TARGETING_KEY_PB_CAT_DUR] : r[f.TARGETING_KEY_PB_CAT_DUR] : Object.keys(r)[0] === f.TARGETING_KEY_CACHE_ID && (e[f.TARGETING_KEY_CACHE_ID] = r[f.TARGETING_KEY_CACHE_ID]), e
                            }), c));
                            var l = encodeURIComponent((0, s.formatQS)(p)),
                                _ = Object.assign({}, v, o, n, {
                                    cust_params: l
                                }),
                                g = u.rp.getConsentData();
                            g && ("boolean" == typeof g.gdprApplies && (_.gdpr = Number(g.gdprApplies)), g.consentString && (_.gdpr_consent = g.consentString), g.addtlConsent && (_.addtl_consent = g.addtlConsent));
                            var T = u.nX.getConsentData();
                            T && (_.us_privacy = T);
                            var b = (0, s.buildUrl)({
                                protocol: "https",
                                host: "securepubads.g.doubleclick.net",
                                pathname: "/gampad/ads",
                                search: _
                            });
                            t(null, b)
                        }
                    }
                },
                getAdpodTargeting: function(e) {
                    return f.getTargeting(e)
                }
            }), (0, c.Bx)("adpod", f), window.epbjs.installedModules.push("dfpAdServerVideo")
        },
        54284: function(e, r, n) {
            n.d(r, {
                W: function() {
                    return s
                }
            });
            var a = n(78640),
                t = n(64358),
                o = (0, a.R)();

            function s(e, r) {
                o.adServers = o.adServers || {}, o.adServers[e] = o.adServers[e] || {}, Object.keys(r).forEach((function(n) {
                    o.adServers[e][n] ? (0, t.logWarn)("Attempting to add an already registered function property ".concat(n, " for AdServer ").concat(e, ".")) : o.adServers[e][n] = r[n]
                }))
            }
        },
        7563: function(e, r, n) {
            n.d(r, {
                G: function() {
                    return a
                }
            });
            var a = (0, n(92797).z3)("sync", (function() {}))
        }
    },
    function(e) {
        var r;
        r = 43642, e(e.s = r)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [4285], {
        72016: function(n, r, e) {
            var o = e(4942),
                t = e(9528),
                l = e(48928),
                s = e(92797),
                a = e(25102),
                i = e(64358),
                u = e(20265),
                c = "amxId";
            var d = {
                name: c,
                version: "1.0",
                gvlid: 737,
                decode: function(n) {
                    return null != n && n.length > 0 ? (0, o.Z)({}, "amxId", n) : void 0
                },
                getId: function(n, r, e) {
                    if (function(n) {
                            return null == n || null == n.storage ? ((0, i.logError)("".concat(c, ": config.storage is required.")), !1) : "html5" !== n.storage.type ? ((0, i.logError)("".concat(c, ' only supports storage.type "html5". ').concat(n.storage.type, " was provided")), !1) : !("number" == typeof n.storage.expires && n.storage.expires > 30 && ((0, i.logError)("".concat(c, ": storage.expires must be <= 30. ").concat(n.storage.expires, " was provided")), 1))
                        }(n)) {
                        var o = r || {
                                gdprApplies: !1,
                                consentString: ""
                            },
                            s = (0, l.O)(300),
                            d = t.nX.getConsentData(),
                            g = (0, a.nH)(),
                            p = {
                                tagId: (0, u.Z)(n, "params.tagId", ""),
                                ref: g.ref,
                                u: g.location,
                                v: "7.17.0",
                                vg: "epbjs",
                                us_privacy: d,
                                gdpr: o.gdprApplies ? 1 : 0,
                                gdpr_consent: o.consentString
                            };
                        return {
                            callback: function(n) {
                                return s("https://id.a-mx.com/sync/", {
                                    error: function(r) {
                                        (0, i.logError)("".concat(c, " failed to load"), r), n(null)
                                    },
                                    success: function(r) {
                                        if (null != r && r.length > 0) try {
                                            var e = JSON.parse(r);
                                            return void
                                            function(n, r, e) {
                                                null != r.id && r.id.length > 0 ? e(r.id) : null != r.u && 0 !== r.u.length ? n(r.u, {
                                                    error: function(n) {
                                                        (0, i.logError)("".concat(c, " failed on ").concat(r.u), n), e(null)
                                                    },
                                                    success: function(n) {
                                                        if (null != n && n.length > 0) {
                                                            var r = JSON.parse(n);
                                                            if (null != r.id) return void e(r.id)
                                                        }(0, i.logError)("".concat(c, " invalid value"), n), e(null)
                                                    }
                                                }) : e(null)
                                            }(s, e, n)
                                        } catch (n) {
                                            (0, i.logError)("".concat(c, " invalid response"), r)
                                        }
                                        n(null)
                                    }
                                }, p, {
                                    method: "GET"
                                })
                            }
                        }
                    }
                }
            };
            (0, s.Bx)("userId", d), window.epbjs.installedModules.push("amxIdSystem")
        }
    },
    function(n) {
        var r;
        r = 72016, n(n.s = r)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [9060], {
        9171: function(e, t, r) {
            var n = r(71002),
                o = r(44925),
                i = r(4942),
                a = r(64358),
                c = r(20265),
                u = r(96475),
                l = r(78640),
                s = r(3193),
                d = r(48928),
                f = r(52021),
                m = r(5644),
                p = r(92797),
                h = r(69626),
                g = r(34614),
                v = r(25102),
                y = r(55975),
                b = r(78653),
                O = r(99128),
                j = ["modelGroups"];

            function C(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : C(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var F, S = "Price Floors",
                T = (0, d.O)(1e4),
                R = ["gptSlot", "adUnitCode", "size", "domain", "mediaType"],
                Z = !1,
                U = !1,
                D = {},
                I = [],
                w = {};

            function x(e, t) {
                return Math.ceil((parseFloat(e) * Math.pow(10, t)).toFixed(1)) / Math.pow(10, t)
            }

            function E(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = r.index,
                    o = void 0 === n ? b.K.index : n;
                return (null == e ? void 0 : e.adUnitCode) || o.getAdUnit(t).code
            }
            var P = {
                size: function(e, t) {
                    return (0, a.parseGPTSingleSizeArray)(t.size) || "*"
                },
                mediaType: function(e, t) {
                    return t.mediaType || "banner"
                },
                gptSlot: function(e, t) {
                    return function(e) {
                        var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).index,
                            r = (void 0 === t ? b.K.index : t).getAdUnit({
                                transactionId: e
                            });
                        return "gam" === (0, c.Z)(r, "ortb2Imp.ext.data.adserver.name") && r.ortb2Imp.ext.data.adserver.adslot
                    }((e || t).transactionId) || (0, a.getGptSlotInfoForAdUnitCode)(E(e, t)).gptSlot
                },
                domain: function() {
                    return null == F && (F = (0, a.parseUrl)((0, v.nH)().topmostLocation, {
                        noDecodeWholeUrl: !0
                    }).hostname), F
                },
                adUnitCode: function(e, t) {
                    return E(e, t)
                }
            };

            function A(e, t, r) {
                return e.reduce((function(e, n) {
                    var o = P[n](t, r) || "*";
                    return e.push("*" === o ? ["*"] : [o.toLowerCase(), "*"]), e
                }), [])
            }

            function M(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = A((0, c.Z)(e, "schema.fields") || [], t, r);
                if (!n.length) return {
                    matchingFloor: e.default
                };
                var o = n.map((function(e) {
                        return e[0]
                    })).join("-"),
                    i = (0, c.Z)(e, "matchingInputs.".concat(o));
                if (i) return k({}, i);
                var a = B(n, (0, c.Z)(e, "schema.delimiter") || "|"),
                    l = (0, g.sE)(a, (function(t) {
                        return e.values.hasOwnProperty(t)
                    })),
                    s = {
                        floorMin: e.floorMin || 0,
                        floorRuleValue: isNaN(e.values[l]) ? e.default : e.values[l],
                        matchingData: a[0],
                        matchingRule: l
                    };
                return "number" == typeof(0, c.Z)(t, "ortb2Imp.ext.prebid.floorMin") && (s.floorMin = t.ortb2Imp.ext.prebid.floorMin), s.matchingFloor = Math.max(s.floorMin, s.floorRuleValue), (0, u.N)(e, "matchingInputs.".concat(o), k({}, s)), s
            }

            function B(e, t) {
                return e.reduce((function(e, r) {
                    var n = [];
                    return e.map((function(e) {
                        r.map((function(r) {
                            n.push(e + t + r)
                        }))
                    })), n
                })).sort((function(e, t) {
                    return e.split("*").length - t.split("*").length
                }))
            }

            function z(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = y.S.get(e, "bidCpmAdjustment");
                return n ? parseFloat(n(t, k(k({}, r), {}, {
                    cpm: t
                }))) : parseFloat(t)
            }

            function V(e, t) {
                var r = Math.pow(10, 10);
                return e * r / (t * r) * (e * r) / r
            }
            var W = {
                banner: function(e) {
                    return (0, c.Z)(e, "mediaTypes.banner.sizes") || []
                },
                video: function(e) {
                    return (0, c.Z)(e, "mediaTypes.video.playerSize") || []
                },
                native: function(e) {
                    return (0, c.Z)(e, "mediaTypes.native.image.sizes") ? [(0, c.Z)(e, "mediaTypes.native.image.sizes")] : []
                }
            };

            function G(e, t) {
                var r = Object.keys(e.mediaTypes || {});
                return "*" === t.mediaType && 1 === r.length && (t.mediaType = r[0]), "*" === t.size && -1 !== r.indexOf(t.mediaType) && W[t.mediaType] && 1 === W[t.mediaType](e).length && (t.size = W[t.mediaType](e)[0]), t
            }

            function N() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        currency: "USD",
                        mediaType: "*",
                        size: "*"
                    },
                    t = this,
                    r = w[t.auctionId];
                if (!r || r.skipped) return {};
                e = G(t, e);
                var n = M(r.data, k({}, t), {
                        mediaType: e.mediaType,
                        size: e.size
                    }),
                    o = e.currency || r.data.currency;
                if (n.matchingFloor && o !== r.data.currency) try {
                    n.matchingFloor = (0, l.R)().convertCurrency(n.matchingFloor, r.data.currency, o)
                } catch (e) {
                    (0, a.logWarn)("".concat(S, ": Unable to get currency conversion for getFloor for bidder ").concat(t.bidder, ". You must have currency module enabled with defaultRates in your currency config")), o = r.data.currency
                }
                if (r.enforcement.bidAdjustment && n.matchingFloor) {
                    var i = z(t.bidder, n.matchingFloor);
                    n.matchingFloor = i ? V(n.matchingFloor, i) : n.matchingFloor
                }
                return n.matchingFloor ? {
                    floor: x(n.matchingFloor, 4),
                    currency: o
                } : {}
            }

            function q(e, t) {
                var r = (0, a.deepClone)(e);
                return r.schema.delimiter = e.schema.delimiter || "|", r.values = function(e, t) {
                    var r = e.schema.fields,
                        n = e.schema.delimiter,
                        o = t && -1 === r.indexOf("adUnitCode") && r.unshift("adUnitCode");
                    return Object.keys(e.values).reduce((function(r, i) {
                        return r[(o ? "".concat(t).concat(n).concat(i) : i).toLowerCase()] = e.values[i], r
                    }), {})
                }(r, t), r.currency = r.currency || "USD", r
            }

            function _(e, t) {
                var r = (0, a.deepClone)(D);
                if (2 === (0, c.Z)(r, "data.floorsSchemaVersion")) {
                    var n = r.data,
                        i = n.modelGroups,
                        u = (0, o.Z)(n, j);
                    r.data = Object.assign(u, function(e, t) {
                        for (var r = Math.floor(Math.random() * t + 1), n = 0; n < e.length; n++)
                            if ((r -= e[n].modelWeight) <= 0) return e[n]
                    }(i, u.modelWeightSum))
                }
                var l = 0 === Object.keys((0, c.Z)(r, "data.values") || {}).length;
                if (r.data = l ? function(e) {
                        return e.reduce((function(e, t) {
                            if (L(t.floors))
                                if (e.values) {
                                    var r = q(t.floors, t.code).values;
                                    Object.assign(e.values, r)
                                } else(e = q(t.floors, t.code)).location = "adUnit";
                            return e
                        }), {})
                    }(e) : q(r.data), 0 === Object.keys((0, c.Z)(r, "data.values") || {}).length) r.skipped = !0;
                else {
                    var s = (0, a.getParameterByName)("pbjs_skipRate") || r.skipRate,
                        d = 100 * Math.random() < parseFloat(s);
                    r.skipped = d
                }
                return r.hasOwnProperty("floorMin") && (r.data.floorMin = r.floorMin),
                    function(e, t, r) {
                        e.forEach((function(e) {
                            e.bids.forEach((function(e) {
                                t.skipped ? delete e.getFloor : e.getFloor = N, e.auctionId = r, e.floorData = {
                                    skipped: t.skipped,
                                    skipRate: t.skipRate,
                                    floorMin: t.floorMin,
                                    modelVersion: (0, c.Z)(t, "data.modelVersion"),
                                    modelWeight: (0, c.Z)(t, "data.modelWeight"),
                                    modelTimestamp: (0, c.Z)(t, "data.modelTimestamp"),
                                    location: (0, c.Z)(t, "data.location", "noData"),
                                    floorProvider: t.floorProvider,
                                    fetchStatus: D.fetchStatus
                                }
                            }))
                        }))
                    }(e, r, t), r
            }

            function H(e) {
                e.hasExited || (I = I.filter((function(t) {
                    return t.timer !== e.timer
                })), e.reqBidsConfigObj.auctionId = e.reqBidsConfigObj.auctionId || (0, a.generateUUID)(), w[e.reqBidsConfigObj.auctionId] = _(e.reqBidsConfigObj.adUnits || (0, l.R)().adUnits, e.reqBidsConfigObj.auctionId), e.nextFn.apply(e.context, [e.reqBidsConfigObj]), e.hasExited = !0)
            }

            function J(e) {
                return t = (0, c.Z)(e, "schema.fields"), !!(Array.isArray(t) && t.length > 0 && t.every((function(e) {
                    return -1 !== R.indexOf(e)
                })) || ((0, a.logError)("".concat(S, ": Fields recieved do not match allowed fields")), 0)) && (r = e, o = e.schema.fields.length, i = e.schema.delimiter || "|", "object" === (0, n.Z)(r.values) && (r.values = Object.keys(r.values).reduce((function(e, t) {
                    return function(e, t, r, n) {
                        return "string" == typeof e && e.split(n).length === r && "number" == typeof t
                    }(t, r.values[t], o, i) && (e[t] = r.values[t]), e
                }), {}), Object.keys(r.values).length > 0));
                var t, r, o, i
            }
            var K = {
                1: function(e) {
                    return J(e)
                },
                2: function(e) {
                    return !(!Array.isArray(e.modelGroups) || 0 === e.modelGroups.length) && (e.modelWeightSum = 0, e.modelGroups.every((function(t) {
                        return !("number" != typeof t.modelWeight || !J(t)) && (e.modelWeightSum += t.modelWeight, !0)
                    })))
                }
            };

            function L(e) {
                return "object" === (0, n.Z)(e) && (e.floorsSchemaVersion = e.floorsSchemaVersion || 1, "function" != typeof K[e.floorsSchemaVersion] ? ((0, a.logError)("".concat(S, ": Unknown floorsSchemaVersion: "), e.floorsSchemaVersion), !1) : K[e.floorsSchemaVersion](e))
            }

            function Q(e, t) {
                if (e && "object" === (0, n.Z)(e) && L(e)) return (0, a.logInfo)("".concat(S, ": A ").concat(t, " set the auction floor data set to "), e), k(k({}, e), {}, {
                    location: t
                });
                (0, a.logError)("".concat(S, ": The floors data did not contain correct values"), e)
            }
            var Y = (0, O.g3)("priceFloors", (function(e, t) {
                var r = {
                    reqBidsConfigObj: t,
                    context: this,
                    nextFn: e,
                    haveExited: !1,
                    timer: null
                };
                D.auctionDelay > 0 && Z ? (r.timer = setTimeout((function() {
                    (0, a.logWarn)("".concat(S, ": Fetch attempt did not return in time for auction")), D.fetchStatus = "timeout", H(r)
                }), D.auctionDelay), I.push(r)) : H(r)
            }));

            function X() {
                I.forEach((function(e) {
                    clearTimeout(e.timer), H(e)
                })), I = []
            }

            function $(e) {
                var t;
                Z = !1, D.fetchStatus = "success";
                try {
                    t = JSON.parse(e)
                } catch (r) {
                    t = e
                }
                var r = Q(t, "fetch");
                r && (D.data = r, D.skipRate = (0, a.isNumber)(r.skipRate) ? r.skipRate : D.skipRate, D.floorProvider = r.floorProvider || D.floorProvider), X()
            }

            function ee(e) {
                Z = !1, D.fetchStatus = "error", (0, a.logError)("".concat(S, ": Fetch errored with: "), e), X()
            }

            function te(e) {
                var t;
                (D = (0, a.pick)(e, ["floorMin", "enabled", function(e) {
                    return !1 !== e
                }, "auctionDelay", function(e) {
                    return e || 0
                }, "floorProvider", function(t) {
                    return (0, c.Z)(e, "data.floorProvider", t)
                }, "endpoint", function(e) {
                    return e || {}
                }, "skipRate", function() {
                    return isNaN((0, c.Z)(e, "data.skipRate")) ? e.skipRate || 0 : e.data.skipRate
                }, "enforcement", function(e) {
                    return (0, a.pick)(e || {}, ["enforceJS", function(e) {
                        return !1 !== e
                    }, "enforcePBS", function(e) {
                        return !0 === e
                    }, "floorDeals", function(e) {
                        return !0 === e
                    }, "bidAdjustment", function(e) {
                        return !1 !== e
                    }])
                }, "additionalSchemaFields", function(e) {
                    return "object" === (0, n.Z)(e) && Object.keys(e).length > 0 ? (t = e, void Object.keys(t).forEach((function(e) {
                        -1 === R.indexOf(e) && "function" == typeof t[e] && (R.push(e), P[e] = t[e])
                    }))) : void 0;
                    var t
                }, "data", function(e) {
                    return e && Q(e, "setConfig") || D.data
                }])).enabled ? ((t = D.endpoint).url && !Z ? "GET" !== (t.method || "GET") ? (0, a.logError)("".concat(S, ": 'GET' is the only request method supported at this time!")) : (T(t.url, {
                    success: $,
                    error: ee
                }, null, {
                    method: "GET"
                }), Z = !0) : Z && (0, a.logWarn)("".concat(S, ": A fetch is already occuring. Skipping.")), U || (f.on(m.FP.AUCTION_END, (function(e) {
                    setTimeout((function() {
                        return delete w[e.auctionId]
                    }), 3e3)
                })), (0, l.R)().requestBids.before(Y, 50), (0, p.v5)("addBidResponse").before(re, (0, a.debugTurnedOn)() ? 4 : 50), U = !0)) : ((0, a.logInfo)("".concat(S, ": Turning off module")), D = {}, w = {}, (0, p.v5)("addBidResponse").getHooks({
                    hook: re
                }).remove(), (0, l.R)().requestBids.getHooks({
                    hook: Y
                }).remove(), U = !1)
            }
            var re = (0, O.A)("priceFloors", (function(e, t, r) {
                var n = w[r.auctionId];
                if (!n || !r || n.skipped) return e.call(this, t, r);
                var o, i = b.K.index.getBidRequest(r),
                    u = M(n.data, i, k(k({}, r), {}, {
                        size: [r.width, r.height]
                    }));
                if (!u.matchingFloor) return (0, a.logWarn)("".concat(S, ": unable to determine a matching price floor for bidResponse"), r), e.call(this, t, r);
                var s = n.data.currency.toUpperCase(),
                    d = r.currency || "USD";
                if (s === d.toUpperCase()) o = r.cpm;
                else if (r.originalCurrency && s === r.originalCurrency.toUpperCase()) o = r.originalCpm;
                else try {
                    o = (0, l.R)().convertCurrency(r.cpm, d.toUpperCase(), s)
                } catch (n) {
                    return (0, a.logError)("".concat(S, ": Unable do get currency conversion for bidResponse to Floor Currency. Do you have Currency module enabled? ").concat(r)), e.call(this, t, r)
                }
                if (function(e, t, r, n) {
                        r.floorData = {
                            floorValue: t.matchingFloor,
                            floorRule: t.matchingRule,
                            floorRuleValue: t.floorRuleValue,
                            floorCurrency: e.data.currency,
                            cpmAfterAdjustments: n,
                            enforcements: k({}, e.enforcement),
                            matchedFields: {}
                        }, e.data.schema.fields.forEach((function(n, o) {
                            var i = t.matchingData.split(e.data.schema.delimiter)[o];
                            r.floorData.matchedFields[n] = i
                        }))
                    }(n, u, r, o = z(r.bidderCode, o, r)), function(e, t, r) {
                        var n = !1 !== (0, c.Z)(e, "enforcement.enforceJS"),
                            o = !0 === (0, c.Z)(e, "enforcement.floorDeals") || !r.dealId,
                            i = r.floorData.cpmAfterAdjustments < t.matchingFloor;
                        return n && i && o
                    }(n, u, r)) {
                    var f, p = (0, h.m)(m.Q_.NO_BID, r.getIdentifiers());
                    return Object.assign(p, (0, a.pick)(r, ["floorData", "width", "height", "mediaType", "currency", "originalCpm", "originalCurrency", "getCpmInNewCurrency"])), p.status = m.UE.G9, p.cpm = 0, (0, a.logWarn)("".concat(S, ": ").concat(p.bidderCode, "'s Bid Response for ").concat(t, " was rejected due to floor not met (adjusted cpm: ").concat(null == r || null === (f = r.floorData) || void 0 === f ? void 0 : f.cpmAfterAdjustments, ", floor: ").concat(null == u ? void 0 : u.matchingFloor, ")"), r), e.call(this, t, p)
                }
                return e.call(this, t, r)
            }));
            s.vc.getConfig("floors", (function(e) {
                return te(e.floors)
            })), window.epbjs.installedModules.push("priceFloors")
        },
        44925: function(e, t, r) {
            function n(e, t) {
                if (null == e) return {};
                var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                }
                return o
            }
            r.d(t, {
                Z: function() {
                    return n
                }
            })
        }
    },
    function(e) {
        var t;
        t = 9171, e(e.s = t)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [9299], {
        80057: function(e, o, t) {
            var a, i = t(64358),
                r = t(48928),
                n = t(92797),
                s = t(15164),
                c = t(9528),
                d = "panoramaId",
                p = "".concat(d, "_expiry"),
                l = "_cc_id",
                v = "lotamePanoramaId",
                m = 864e5,
                g = (0, s.df)({
                    gvlid: 95,
                    moduleName: v
                });

            function u(e) {
                var o = null;
                if (g.cookiesAreEnabled() && (o = g.getCookie(e, void 0)), g.hasLocalStorage() && null === o) {
                    var t = g.getDataFromLocalStorage("".concat(e, "_exp"), void 0);
                    ("" === t || t && new Date(t).getTime() - Date.now() > 0) && (o = g.getDataFromLocalStorage(e, void 0))
                }
                return o
            }

            function f(e, o) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, i.timestamp)() + 7 * m;
                if (e && o) {
                    var r = new Date(t).toUTCString();
                    g.cookiesAreEnabled() && g.setCookie(e, o, r, "Lax", a, void 0), g.hasLocalStorage() && (g.setDataInLocalStorage("".concat(e, "_exp"), String(t), void 0), g.setDataInLocalStorage(e, o, void 0))
                }
            }

            function S(e) {
                if (e) {
                    if (g.cookiesAreEnabled()) {
                        var o = new Date(0).toUTCString();
                        g.setCookie(e, "", o, "Lax", a, void 0)
                    }
                    g.hasLocalStorage() && g.removeDataFromLocalStorage(e, void 0)
                }
            }
            var _ = {
                name: v,
                gvlid: 95,
                decode: function(e, o) {
                    return (0, i.isStr)(e) ? {
                        lotamePanoramaId: e
                    } : void 0
                },
                getId: function(e, o, t) {
                    a = _.findRootDomain();
                    var n = (e && e.params || {}).clientId,
                        s = !(0, i.isEmpty)(n),
                        v = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                                o = {
                                    data: u(d),
                                    expiryTimestampMs: 0,
                                    clientExpiryTimestampMs: 0
                                };
                            try {
                                if (e) {
                                    var t = u("".concat(p, "_").concat(e));
                                    (0, i.isStr)(t) && (o.clientExpiryTimestampMs = parseInt(t, 10))
                                }
                                var a = u(p);
                                (0, i.isStr)(a) && (o.expiryTimestampMs = parseInt(a, 10))
                            } catch (e) {
                                (0, i.logError)(e)
                            }
                            return o
                        }(n),
                        m = Date.now() > v.expiryTimestampMs;
                    if (s && Date.now() < v.clientExpiryTimestampMs) return {
                        id: void 0,
                        reason: "NO_CLIENT_CONSENT"
                    };
                    if (!m) return {
                        id: v.data
                    };
                    var y, h = g.cookiesAreEnabled() ? g.getCookie(l, void 0) : g.hasLocalStorage() ? g.getDataFromLocalStorage(l, void 0) : void 0,
                        x = c.nX.getConsentData();
                    void 0 === x || (0, i.isEmpty)(x) || (0, i.isEmptyStr)(x) || (y = x), y || (y = u("us_privacy"));
                    return {
                        callback: function(e) {
                            var t, c = {};
                            h && (c.fp = h), o && ((0, i.isBoolean)(o.gdprApplies) && (c.gdpr_applies = o.gdprApplies), t = o.consentString), t || (t = u("eupubconsent-v2")), t || (t = u("euconsent-v2")), t && (c.gdpr_consent = t), y && (c.us_privacy = y), s && (c.c = n);
                            var v = (0, i.buildUrl)({
                                protocol: "https",
                                host: "id.crwdcntrl.net",
                                pathname: "/id",
                                search: (0, i.isEmpty)(c) ? void 0 : c
                            });
                            (0, r.h)(v, (function(o) {
                                var t;
                                if (o) try {
                                    var r = JSON.parse(o),
                                        c = !((0, i.isArray)(r.errors) && -1 !== r.errors.indexOf(111));
                                    if (s)
                                        if (c) S("".concat(p, "_").concat(n));
                                        else if ((0, i.isStr)(r.no_consent) && "CLIENT" === r.no_consent) return f("".concat(p, "_").concat(n), r.expiry_ts, r.expiry_ts), void e();
                                    f(p, r.expiry_ts, r.expiry_ts), (0, i.isStr)(r.profile_id) ? (c && function(e) {
                                        if (g.cookiesAreEnabled()) {
                                            var o = new Date((0, i.timestamp)() + 23328e6).toUTCString();
                                            g.setCookie(l, e, o, "Lax", a, void 0)
                                        }
                                        g.hasLocalStorage() && g.setDataInLocalStorage(l, e, void 0)
                                    }(r.profile_id), (0, i.isStr)(r.core_id) ? (f(d, r.core_id, r.expiry_ts), t = r.core_id) : S(d)) : (c && S(l), S(d))
                                } catch (e) {
                                    (0, i.logError)(e)
                                }
                                e(t)
                            }), void 0, {
                                method: "GET",
                                withCredentials: !0
                            })
                        }
                    }
                }
            };
            (0, n.Bx)("userId", _), window.epbjs.installedModules.push("lotamePanoramaIdSystem")
        }
    },
    function(e) {
        var o;
        o = 80057, e(e.s = o)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [2972], {
        54834: function(o, e, n) {
            var t = n(71002),
                i = n(64358),
                r = n(92797),
                a = n(9528),
                d = (0, n(15164).df)({
                    moduleName: "pubCommonId"
                }),
                u = "cookie",
                c = "html5",
                l = "_pubcid_optout",
                s = "PublisherCommonId";

            function f(o, e) {
                if (e === u) return d.getCookie(o);
                if (e === c && d.hasLocalStorage()) {
                    var n = d.getDataFromLocalStorage("".concat(o, "_exp"));
                    if (!n) return d.getDataFromLocalStorage(o);
                    if (new Date(n).getTime() - Date.now() > 0) return d.getDataFromLocalStorage(o)
                }
            }

            function m(o, e) {
                return function(n) {
                    "function" == typeof e && e(), n(o)
                }
            }

            function v(o) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if (o) {
                    var n = (0, i.parseUrl)(o);
                    n.search.id = encodeURIComponent("pubcid:" + e);
                    var t = (0, i.buildUrl)(n);
                    return function() {
                        (0, i.triggerPixel)(t)
                    }
                }
            }

            function g() {
                return !!(d.cookiesAreEnabled() && f(l, u) || d.hasLocalStorage() && f(l, c))
            }
            var p = {
                name: "sharedId",
                aliasName: "pubCommonId",
                decode: function(o, e) {
                    if (!g()) return (0, i.logInfo)(" Decoded value PubCommonId " + o), {
                        pubcid: o
                    };
                    (0, i.logInfo)("PubCommonId decode: Has opted-out")
                },
                getId: function() {
                    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments.length > 2 ? arguments[2] : void 0;
                    if (g())(0, i.logInfo)("PubCommonId: Has opted-out");
                    else {
                        var n = a.VP.getCoppa();
                        if (!n) {
                            var r = o.params,
                                d = (r = void 0 === r ? {} : r).create,
                                u = void 0 === d || d,
                                c = r.pixelUrl,
                                l = e;
                            if (!l) {
                                try {
                                    "object" === (0, t.Z)(window[s]) && (l = window[s].getId())
                                } catch (o) {}
                                l || (l = u && (0, i.hasDeviceAccess)() ? (0, i.generateUUID)() : void 0)
                            }
                            var f = v(c, l);
                            return {
                                id: l,
                                callback: m(l, f)
                            }
                        }(0, i.logInfo)("PubCommonId: IDs not provided for coppa requests, exiting PubCommonId")
                    }
                },
                extendId: function() {
                    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = arguments.length > 2 ? arguments[2] : void 0;
                    if (g()) return (0, i.logInfo)("PubCommonId: Has opted-out"), {
                        id: void 0
                    };
                    var n = a.VP.getCoppa();
                    if (n)(0, i.logInfo)("PubCommonId: IDs not provided for coppa requests, exiting PubCommonId");
                    else {
                        var t = o.params,
                            r = (t = void 0 === t ? {} : t).extend,
                            d = void 0 !== r && r,
                            u = t.pixelUrl;
                        if (d) {
                            if (u) {
                                var c = v(u, e);
                                return {
                                    callback: c
                                }
                            }
                            return {
                                id: e
                            }
                        }
                    }
                },
                domainOverride: function() {
                    for (var o, e, n = document.domain.split("."), t = "_gd".concat(Date.now()), i = 0; i < n.length; i++) {
                        var r = n.slice(i).join(".");
                        if (d.setCookie(t, "1", void 0, void 0, r), e = d.getCookie(t), d.setCookie(t, "", "Thu, 01 Jan 1970 00:00:01 GMT", void 0, r), "1" !== e) return o;
                        o = r
                    }
                }
            };
            (0, r.Bx)("userId", p), window.epbjs.installedModules.push("sharedIdSystem")
        }
    },
    function(o) {
        var e;
        e = 54834, o(o.s = e)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [3769], {
        896: function(e, t, n) {
            var i = n(64358),
                r = n(20265),
                a = n(14699),
                o = n(3193),
                d = n(24679),
                s = n(25102),
                c = n(35706),
                u = n(70059),
                p = "medianet",
                l = "https://prebid.media.net/video/bundle.js",
                m = 0,
                f = 1,
                g = 2,
                b = "client_timeout",
                h = "client_bid_won",
                y = (0, s.nH)(),
                v = {};

            function w() {
                try {
                    return window.top.document.referrer
                } catch (e) {
                    return document.referrer
                }
            }

            function x(e, t) {
                var n = t.refererInfo,
                    i = {
                        domain: (e = e || {}).domain || n.domain,
                        page: e.page || n.page,
                        ref: e.ref || w(),
                        topMostLocation: n.topmostLocation,
                        isTop: e.isTop || n.reachedTop
                    };
                return Object.assign(i, function() {
                    if (v.pageMeta) return v.pageMeta;
                    var e = _('link[rel="canonical"]', "href"),
                        t = _('meta[property="og:url"]', "content"),
                        n = _('meta[name="twitter:url"]', "content");
                    return v.pageMeta = Object.assign({}, e && {
                        canonical_url: e
                    }, t && {
                        og_url: t
                    }, n && {
                        twitter_url: n
                    }), v.pageMeta
                }())
            }

            function _(e, t) {
                var n, r, a = function(e, t) {
                    try {
                        var n = (0, i.getWindowTop)().document.querySelector(e);
                        if (null !== n && n[t]) return n[t]
                    } catch (e) {}
                }(e, t);
                return a && (n = a, (r = (0, i.getWindowTop)().document.createElement("a")).href = n, r.href)
            }

            function I(e, t) {
                return e.filter((function(e) {
                    return e.type === t
                }))
            }

            function T(e) {
                return {
                    w: parseInt(e[0], 10),
                    h: parseInt(e[1], 10)
                }
            }

            function j(e, t) {
                var n = (0, r.Z)(e, "params"),
                    a = (0, r.Z)(t, "gdprConsent"),
                    d = (0, r.Z)(t, "uspConsent"),
                    s = (0, r.Z)(e, "userId"),
                    c = (0, r.Z)(e, "schain") || {},
                    u = q.getWindowSize(),
                    p = !(!a || !a.gdprApplies),
                    l = !!d,
                    m = !!o.vc.getConfig("coppa");
                return Object.assign({}, {
                    customer_id: n.cid
                }, {
                    prebid_version: epbjs.version
                }, {
                    gdpr_applies: p
                }, p && {
                    gdpr_consent_string: a.consentString || ""
                }, {
                    usp_applies: l
                }, l && {
                    usp_consent_string: d || ""
                }, {
                    coppa_applies: m
                }, -1 !== u.w && -1 !== u.h && {
                    screen: u
                }, s && {
                    user_id: s
                }, epbjs.medianetGlobals.analyticsEnabled && {
                    analytics: !0
                }, !(0, i.isEmpty)(c) && {
                    schain: c
                })
            }

            function S(e) {
                var t = {
                    id: e.bidId,
                    transactionId: e.transactionId,
                    ext: {
                        dfp_id: e.adUnitCode,
                        display_count: e.bidRequestsCount
                    },
                    all: e.params
                };
                e.ortb2Imp && (t.ortb2Imp = e.ortb2Imp);
                var n, a = (0, r.Z)(e, "mediaTypes.banner.sizes") || [],
                    o = (0, r.Z)(e, "mediaTypes.video") || {},
                    s = (0, r.Z)(e, "params.video") || {},
                    c = Object.assign({}, s, o);
                if ((0, i.isEmpty)(c) || (t.video = c), a.length > 0 && (t.banner = (n = a, (0, i.isArray)(n) && 2 === n.length && !(0, i.isArray)(n[0]) ? [T(n)] : n.map((function(e) {
                        return T(e)
                    })))), e.nativeParams) try {
                    t.native = JSON.stringify(e.nativeParams)
                } catch (e) {
                    (0, i.logError)("".concat(p, " : Incorrect JSON : bidRequest.nativeParams"))
                }
                e.params.crid && (t.tagid = e.params.crid.toString());
                var u = parseFloat(e.params.bidfloor || e.params.bidFloor);
                u && (t.bidfloor = u);
                var l = function(e) {
                    var t = document.getElementById(e);
                    if (!t && -1 !== e.indexOf("/")) {
                        var n = (0, i.getGptSlotInfoForAdUnitCode)(e).divId;
                        (0, i.isStr)(n) && (t = document.getElementById(n))
                    }
                    if (t && t.getBoundingClientRect) {
                        var r = t.getBoundingClientRect(),
                            a = {};
                        return a.top_left = {
                            y: r.top,
                            x: r.left
                        }, a.bottom_right = {
                            y: r.bottom,
                            x: r.right
                        }, a
                    }
                    return null
                }(e.adUnitCode);
                if (l && t.banner && 0 !== t.banner.length) {
                    var b = function(e) {
                        return {
                            top_left: {
                                x: e.top_left.x + window.pageXOffset,
                                y: e.top_left.y + window.pageYOffset
                            },
                            bottom_right: {
                                x: e.bottom_right.x + window.pageXOffset,
                                y: e.bottom_right.y + window.pageYOffset
                            }
                        }
                    }(l);
                    t.ext.coordinates = b, t.ext.viewability = M(l.top_left, E(t.banner)), M(b.top_left, E(t.banner)) > .5 ? t.ext.visibility = f : t.ext.visibility = g
                } else t.ext.visibility = m;
                var h = function(e) {
                    var t = [];
                    "function" == typeof e.getFloor && [d.Mk, d.pX, d.B5].forEach((function(n) {
                        e.mediaTypes.hasOwnProperty(n) && (n == d.Mk ? e.mediaTypes.banner.sizes.forEach((function(i) {
                            C(e, n, i, t)
                        })) : C(e, n, "*", t))
                    }));
                    return t
                }(e);
                return h && h.length > 0 && (t.bidfloors = h), t
            }

            function C(e, t, n, i) {
                var r = e.getFloor({
                    currency: "USD",
                    mediaType: t,
                    size: n
                });
                n.length > 1 && (r.size = n), r.mediaType = t, i.push(r)
            }

            function E(e) {
                return e.reduce((function(e, t) {
                    return t.h * t.w < e.h * e.w ? t : e
                }))
            }

            function M(e, t) {
                var n = t.w * t.h,
                    i = q.getWindowSize(),
                    r = {
                        x: e.x + t.w,
                        y: e.y + t.h
                    };
                return 0 === n || -1 === i.w || -1 === i.h ? 0 : function(e, t, n, i) {
                    if (e.x > i.x || t.x < n.x || e.y > i.y || t.y < n.y) return 0;
                    return (Math.min(t.x, i.x) - Math.max(e.x, n.x)) * (Math.min(t.y, i.y) - Math.max(e.y, n.y))
                }(e, r, {
                    x: 0,
                    y: 0
                }, {
                    x: i.w,
                    y: i.h
                }) / n
            }

            function O(e, t) {
                t = (0, i.isArray)(t) && t || [];
                var n = {
                    logid: "kfk",
                    evtid: "projectevents",
                    project: "prebid"
                };
                return n.acid = (0, r.Z)(t, "0.auctionId") || "", n.cid = epbjs.medianetGlobals.cid || "", n.crid = t.map((function(e) {
                    return (0, r.Z)(e, "params.0.crid") || e.adUnitCode
                })).join("|"), n.adunit_count = t.length || 0, n.dn = v.urlData.domain || "", n.requrl = v.urlData.page || "", n.istop = v.urlData.isTop || "", n.event = e.name || "", n.value = e.value || "", n.rd = e.related_data || "", n
            }

            function Z(e, t) {
                var n = {
                    protocol: "https",
                    hostname: "qsearch-a.akamaihd.net/log",
                    search: O(e, t)
                };
                (0, i.triggerPixel)((0, i.buildUrl)(n))
            }

            function U(e) {
                var t, n = (0, r.Z)(e, "context") || "",
                    a = (0, r.Z)(e, "vto");
                "outstream" == n && a && (e.renderer = ((t = c.Th.install({
                    url: l
                })).setRender((function(e) {
                    window.mnet.queue.push((function() {
                        var t = {
                                width: e.width,
                                height: e.height,
                                vastTimeout: e.vto,
                                maxAllowedVastTagRedirects: e.mavtr,
                                allowVpaid: e.avp,
                                autoPlay: e.ap,
                                preload: e.pl,
                                mute: e.mt
                            },
                            n = e.dfp_id,
                            r = (0, i.getGptSlotInfoForAdUnitCode)(n).divId || n;
                        window.mnet.mediaNetoutstreamPlayer(e, r, t)
                    }))
                })), t))
            }
            window.mnet = window.mnet || {}, window.mnet.queue = window.mnet.queue || [], v.urlData = {
                domain: y.domain,
                page: y.page,
                isTop: y.reachedTop
            }, epbjs.medianetGlobals = epbjs.medianetGlobals || {};
            var q = {
                code: p,
                gvlid: 142,
                supportedMediaTypes: [d.Mk, d.B5, d.pX],
                isBidRequestValid: function(e) {
                    return e.params ? e.params.cid && (0, i.isStr)(e.params.cid) && !(0, i.isEmptyStr)(e.params.cid) ? (Object.assign(epbjs.medianetGlobals, !epbjs.medianetGlobals.cid && {
                        cid: e.params.cid
                    }), !0) : ((0, i.logError)("".concat(p, " : cid should be a string")), !1) : ((0, i.logError)("".concat(p, " : Missing bid parameters")), !1)
                },
                buildRequests: function(e, t) {
                    var n, i = function(e, t) {
                        return {
                            site: x(e[0].params.site, t),
                            ext: j(e[0], t),
                            id: e[0].auctionId,
                            imp: e.map((function(e) {
                                return S(e)
                            })),
                            ortb2: t.ortb2,
                            tmax: t.timeout || o.vc.getConfig("bidderTimeout")
                        }
                    }(e = (0, u.lY)(e), t);
                    return {
                        method: "POST",
                        url: (n = i.ext.customer_id, "https://prebid.media.net/rtb/prebid?cid=" + encodeURIComponent(n)),
                        data: JSON.stringify(i)
                    }
                },
                interpretResponse: function(e, t) {
                    var n = [];
                    if (!e || !e.body) return (0, i.logInfo)("".concat(p, " : response is empty")), n;
                    var r = e.body.bidList;
                    return (0, i.isArray)(r) && 0 !== r.length ? ((n = r.filter((function(e) {
                        return function(e) {
                            return !1 === e.no_bid && parseFloat(e.cpm) > 0
                        }(e)
                    }))).forEach(U), n) : ((0, i.logInfo)("".concat(p, " : no bids")), n)
                },
                getUserSyncs: function(e, t) {
                    var n, r = (n = t, !(0, i.isEmpty)(n) && n[0].body && n[0].body.ext && (0, i.isArray)(n[0].body.ext.csUrl) ? n[0].body.ext.csUrl : []);
                    return e.iframeEnabled ? I(r, "iframe") : e.pixelEnabled ? I(r, "image") : void 0
                },
                onTimeout: function(e) {
                    try {
                        Z({
                            name: b,
                            value: e.length,
                            related_data: e[0].timeout || o.vc.getConfig("bidderTimeout")
                        }, e)
                    } catch (e) {}
                },
                onBidWon: function(e) {
                    try {
                        Z({
                            name: h,
                            value: e.cpm
                        }, [e])
                    } catch (e) {}
                },
                clearMnData: function() {
                    v = {}
                },
                getWindowSize: function() {
                    return {
                        w: window.screen.width || -1,
                        h: window.screen.height || -1
                    }
                }
            };
            (0, a.dX)(q), window.epbjs.installedModules.push("medianetBidAdapter")
        }
    },
    function(e) {
        var t;
        t = 896, e(e.s = t)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [1532], {
        34851: function(e, t, n) {
            var r = n(4942),
                i = n(24679),
                o = n(90154),
                d = n(35706),
                a = n(34614),
                s = n(15164),
                c = n(14699),
                u = n(64358),
                p = n(20265);

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var h = "https://onetag-sys.com/usync/",
                g = "onetag",
                m = (0, s.df)({
                    gvlid: 241,
                    bidderCode: g
                });

            function y(e) {
                return void 0 !== e.mediaTypes && void 0 !== e.mediaTypes.video
            }

            function v(e, t) {
                if (e === i.Mk) return T(t).length > 0;
                if (e === i.pX && y(t)) {
                    var n = t.mediaTypes.video.context;
                    if ("outstream" === n || "instream" === n) return I(t).length > 0
                }
                return !1
            }

            function b(e) {
                try {
                    return void 0 !== e.document.hidden ? e.document.hidden : void 0 !== e.document.msHidden ? e.document.msHidden : void 0 !== e.document.webkitHidden ? e.document.webkitHidden : null
                } catch (e) {
                    return null
                }
            }

            function w(e) {
                var t = e.params;
                this.adUnitCode = e.adUnitCode, this.bidId = e.bidId, this.bidderRequestId = e.bidderRequestId, this.auctionId = e.auctionId, this.transactionId = e.transactionId, this.gpid = (0, p.Z)(e, "ortb2Imp.ext.gpid") || (0, p.Z)(e, "ortb2Imp.ext.data.pbadslot"), this.pubId = t.pubId, this.ext = t.ext, t.pubClick && (this.click = t.pubClick), t.dealId && (this.dealId = t.dealId);
                var n = function(e) {
                    var t = document.getElementById(e);
                    try {
                        for (var n = t.getBoundingClientRect(), r = n.top, i = n.left, o = n.width, d = n.height, a = t.ownerDocument.defaultView, s = {
                                top: r + a.pageYOffset,
                                left: i + a.pageXOffset,
                                width: o,
                                height: d
                            }, c = a.frameElement; null != c;) {
                            var u = c.getBoundingClientRect(),
                                p = u.top,
                                l = u.left;
                            s.top += p + a.pageYOffset, s.left += l + a.pageXOffset, c = (a = a.parent).frameElement
                        }
                        return s
                    } catch (e) {
                        return null
                    }
                }(e.adUnitCode);
                n && (this.coords = n)
            }

            function O() {
                try {
                    if (null != window.performance && null != window.performance.timing) {
                        var e = {},
                            t = window.performance.timing;
                        return e.pageLoadTime = t.loadEventEnd - t.navigationStart, e.connectTime = t.responseEnd - t.requestStart, e.renderTime = t.domComplete - t.domLoading, e
                    }
                } catch (e) {
                    return null
                }
                return null
            }

            function I(e) {
                var t = e.mediaTypes.video.playerSize;
                return void 0 !== t && Array.isArray(t) && t.length > 0 ? C(t) : []
            }

            function T(e) {
                return void 0 !== e.mediaTypes && void 0 !== e.mediaTypes.banner && void 0 !== e.mediaTypes.banner.sizes && Array.isArray(e.mediaTypes.banner.sizes) && e.mediaTypes.banner.sizes.length > 0 ? C(e.mediaTypes.banner.sizes) : !y(e) && e.sizes && Array.isArray(e.sizes) ? C(e.sizes) : []
            }

            function C(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    var r = e[n];
                    t.push({
                        width: r[0],
                        height: r[1]
                    })
                }
                return t
            }

            function S(e, t, n) {
                var r = [];
                return "function" == typeof e.getFloor && n.forEach((function(n) {
                    var i = e.getFloor({
                        currency: "EUR",
                        mediaType: t || "*",
                        size: [n.width, n.height]
                    });
                    i.size = (0, u.deepClone)(n), i.floor || (i.floor = null), r.push(i)
                })), r
            }
            var E = {
                code: g,
                gvlid: 241,
                supportedMediaTypes: [i.Mk, i.pX],
                isBidRequestValid: function(e) {
                    return void 0 !== e && void 0 !== e.params && "string" == typeof e.params.pubId && (v(i.Mk, e) || v(i.pX, e))
                },
                buildRequests: function(e, t) {
                    var n, r, o, d, a, s, c = f({
                        bids: (d = e, a = d.filter((function(e) {
                            return y(e)
                        })).map((function(e) {
                            var t = {};
                            return w.call(t, e), t.context = e.mediaTypes.video.context, t.playerSize = I(e), t.mediaTypeInfo = (0, u.deepClone)(e.mediaTypes.video), t.type = i.pX, t.priceFloors = S(e, i.pX, t.playerSize), t
                        })), s = d.filter((function(e) {
                            return v(i.Mk, e)
                        })).map((function(e) {
                            var t = {};
                            return w.call(t, e), t.sizes = T(e), t.type = i.Mk, t.mediaTypeInfo = (0, u.deepClone)(e.mediaTypes.banner), t.priceFloors = S(e, i.Mk, t.sizes), t
                        })), a.concat(s))
                    }, (n = function() {
                        var e = window,
                            t = window.parent,
                            n = 0;
                        try {
                            for (; e !== e.parent;)(t = e.parent).location.href, e = e.parent
                        } catch (r) {
                            n = t === e.top ? 1 : 2
                        }
                        return {
                            topmostFrame: e,
                            currentFrameNesting: n
                        }
                    }(), r = n.topmostFrame, o = n.currentFrameNesting, {
                        location: r.location.href,
                        referrer: "" !== r.document.referrer ? r.document.referrer : null,
                        ancestorOrigin: window.location.ancestorOrigins && window.location.ancestorOrigins.length > 0 ? window.location.ancestorOrigins[window.location.ancestorOrigins.length - 1] : null,
                        masked: o,
                        wWidth: r.innerWidth,
                        wHeight: r.innerHeight,
                        oWidth: r.outerWidth,
                        oHeight: r.outerHeight,
                        sWidth: r.screen.width,
                        sHeight: r.screen.height,
                        aWidth: r.screen.availWidth,
                        aHeight: r.screen.availHeight,
                        sLeft: "screenLeft" in r ? r.screenLeft : r.screenX,
                        sTop: "screenTop" in r ? r.screenTop : r.screenY,
                        xOffset: r.pageXOffset,
                        yOffset: r.pageYOffset,
                        docHidden: b(r),
                        docHeight: r.document.body ? r.document.body.scrollHeight : null,
                        hLength: history.length,
                        timing: O(),
                        version: {
                            prebid: "7.17.0",
                            adapter: "1.1.0"
                        }
                    }));
                    t && t.gdprConsent && (c.gdprConsent = {
                        consentString: t.gdprConsent.consentString,
                        consentRequired: t.gdprConsent.gdprApplies
                    }), t && t.uspConsent && (c.usPrivacy = t.uspConsent), e && 0 !== e.length && e[0].userIdAsEids && (c.userId = e[0].userIdAsEids), e && 0 !== e.length && e[0].schain && function(e) {
                        var t = !1,
                            n = ["asi", "sid", "hp"];
                        if (!e || !e.nodes) return t;
                        (t = e.nodes.reduce((function(e, t) {
                            return e ? n.every((function(e) {
                                return t.hasOwnProperty(e)
                            })) : e
                        }), !0)) || (0, u.logError)("OneTag: required schain params missing");
                        return t
                    }(e[0].schain) && (c.schain = e[0].schain);
                    try {
                        m.hasLocalStorage() && (c.onetagSid = m.getDataFromLocalStorage("onetag_sid"))
                    } catch (e) {}
                    return {
                        method: "POST",
                        url: "https://onetag-sys.com/prebid-request",
                        data: JSON.stringify(c)
                    }
                },
                interpretResponse: function(e, t) {
                    var n = e.body,
                        r = [],
                        s = JSON.parse(t.data);
                    return !n || n.nobid && !0 === n.nobid ? r : n.bids && Array.isArray(n.bids) && 0 !== n.bids.length ? (n.bids.forEach((function(e) {
                        var t = {
                            requestId: e.requestId,
                            cpm: e.cpm,
                            width: e.width,
                            height: e.height,
                            creativeId: e.creativeId,
                            dealId: null == e.dealId ? e.dealId : "",
                            currency: e.currency,
                            netRevenue: e.netRevenue || !1,
                            mediaType: e.mediaType,
                            meta: {
                                mediaType: e.mediaType,
                                advertiserDomains: e.adomain
                            },
                            ttl: e.ttl || 300
                        };
                        if (e.mediaType === i.Mk) t.ad = e.ad;
                        else if (e.mediaType === i.pX) {
                            var n = (0, a.sE)(s.bids, (function(t) {
                                    return t.bidId === e.requestId && t.type === i.pX
                                })),
                                c = n.context,
                                u = n.adUnitCode;
                            c === o.LD ? (t.vastUrl = e.vastUrl, t.videoCacheKey = e.videoCacheKey) : c === o.gZ && (t.vastXml = e.ad, t.vastUrl = e.vastUrl, e.rendererUrl && (t.renderer = function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = d.Th.install({
                                        id: e.requestId,
                                        url: e.rendererUrl,
                                        config: t,
                                        adUnitCode: e.adUnitCode,
                                        loaded: !1
                                    });
                                try {
                                    n.setRender((function(t) {
                                        var n = t.renderer,
                                            r = t.width,
                                            i = t.height,
                                            o = t.vastXml,
                                            d = t.adUnitCode;
                                        n.push((function() {
                                            window.onetag.Player.init(f(f({}, e), {}, {
                                                width: r,
                                                height: i,
                                                vastXml: o,
                                                nodeId: d,
                                                config: n.getConfig()
                                            }))
                                        }))
                                    }))
                                } catch (e) {}
                                return n
                            }(f(f({}, e), {}, {
                                adUnitCode: u
                            }))))
                        }
                        r.push(t)
                    })), r) : r
                },
                getUserSyncs: function(e, t, n, r) {
                    var i = [],
                        o = "";
                    return n && ("boolean" == typeof n.gdprApplies && (o += "&gdpr=" + (n.gdprApplies ? 1 : 0)), "string" == typeof n.consentString && (o += "&gdpr_consent=" + n.consentString)), r && "string" == typeof r && (o += "&us_privacy=" + r), e.iframeEnabled && i.push({
                        type: "iframe",
                        url: h + "?cb=" + (new Date).getTime() + o
                    }), e.pixelEnabled && i.push({
                        type: "image",
                        url: h + "?tag=img" + o
                    }), i
                }
            };
            (0, c.dX)(E), window.epbjs.installedModules.push("onetagBidAdapter")
        }
    },
    function(e) {
        var t;
        t = 34851, e(e.s = t)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [5126], {
        15817: function(e, r, a) {
            var t = a(89062),
                i = a(4942),
                n = a(71002),
                s = a(64358),
                o = a(20265),
                d = a(96475),
                p = a(14699),
                c = a(24679),
                l = a(3193),
                u = a(35706),
                m = a(55975),
                g = a(70059);

            function f(e, r) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), a.push.apply(a, t)
                }
                return a
            }
            var h = "pubmatic",
                b = "PubMatic: ",
                v = "USD",
                y = void 0,
                E = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js"),
                I = {
                    kadpageurl: "",
                    gender: "",
                    yob: "",
                    lat: "",
                    lon: "",
                    wiid: "",
                    profId: "",
                    verId: ""
                },
                w = "number",
                P = "string",
                T = "boolean",
                O = "array",
                D = {
                    mimes: O,
                    minduration: w,
                    maxduration: w,
                    startdelay: w,
                    playbackmethod: O,
                    api: O,
                    protocols: O,
                    w: w,
                    h: w,
                    battr: O,
                    linearity: w,
                    placement: w,
                    minbitrate: w,
                    maxbitrate: w,
                    skip: w
                },
                x = {
                    TITLE: {
                        ID: 1,
                        KEY: "title",
                        TYPE: 0
                    },
                    IMAGE: {
                        ID: 2,
                        KEY: "image",
                        TYPE: 0
                    },
                    ICON: {
                        ID: 3,
                        KEY: "icon",
                        TYPE: 0
                    },
                    SPONSOREDBY: {
                        ID: 4,
                        KEY: "sponsoredBy",
                        TYPE: 1
                    },
                    BODY: {
                        ID: 5,
                        KEY: "body",
                        TYPE: 2
                    },
                    CLICKURL: {
                        ID: 6,
                        KEY: "clickUrl",
                        TYPE: 0
                    },
                    VIDEO: {
                        ID: 7,
                        KEY: "video",
                        TYPE: 0
                    },
                    EXT: {
                        ID: 8,
                        KEY: "ext",
                        TYPE: 0
                    },
                    DATA: {
                        ID: 9,
                        KEY: "data",
                        TYPE: 0
                    },
                    LOGO: {
                        ID: 10,
                        KEY: "logo",
                        TYPE: 0
                    },
                    SPONSORED: {
                        ID: 11,
                        KEY: "sponsored",
                        TYPE: 1
                    },
                    DESC: {
                        ID: 12,
                        KEY: "data",
                        TYPE: 2
                    },
                    RATING: {
                        ID: 13,
                        KEY: "rating",
                        TYPE: 3
                    },
                    LIKES: {
                        ID: 14,
                        KEY: "likes",
                        TYPE: 4
                    },
                    DOWNLOADS: {
                        ID: 15,
                        KEY: "downloads",
                        TYPE: 5
                    },
                    PRICE: {
                        ID: 16,
                        KEY: "price",
                        TYPE: 6
                    },
                    SALEPRICE: {
                        ID: 17,
                        KEY: "saleprice",
                        TYPE: 7
                    },
                    PHONE: {
                        ID: 18,
                        KEY: "phone",
                        TYPE: 8
                    },
                    ADDRESS: {
                        ID: 19,
                        KEY: "address",
                        TYPE: 9
                    },
                    DESC2: {
                        ID: 20,
                        KEY: "desc2",
                        TYPE: 10
                    },
                    DISPLAYURL: {
                        ID: 21,
                        KEY: "displayurl",
                        TYPE: 11
                    },
                    CTA: {
                        ID: 22,
                        KEY: "cta",
                        TYPE: 12
                    }
                },
                S = 1,
                Y = 2,
                k = 3,
                C = [{
                    id: x.SPONSOREDBY.ID,
                    required: !0,
                    data: {
                        type: 1
                    }
                }, {
                    id: x.TITLE.ID,
                    required: !0
                }, {
                    id: x.IMAGE.ID,
                    required: !0
                }],
                R = {
                    1: "PMP",
                    5: "PREF",
                    6: "PMPG"
                },
                A = {
                    bootstrapPlayer: function(e) {
                        var r = {
                            code: e.adUnitCode
                        };
                        if (e.vastXml ? r.vastXml = e.vastXml : e.vastUrl && (r.vastUrl = e.vastUrl), e.vastXml || e.vastUrl) {
                            for (var a, t = A.getRendererId("pubmatic", e.rendererCode), i = document.getElementById(e.adUnitCode), n = 0; n < window.bluebillywig.renderers.length; n++)
                                if (window.bluebillywig.renderers[n]._id === t) {
                                    a = window.bluebillywig.renderers[n];
                                    break
                                }
                            a ? a.bootstrap(r, i) : (0, s.logWarn)("".concat(b, ": Couldn't find a renderer with ").concat(t))
                        } else(0, s.logWarn)("".concat(b, ": No vastXml or vastUrl on bid, bailing..."))
                    },
                    newRenderer: function(e, r) {
                        var a = E.replace("$RENDERER", e),
                            t = u.Th.install({
                                url: a,
                                loaded: !1,
                                adUnitCode: r
                            });
                        try {
                            t.setRender(A.outstreamRender)
                        } catch (e) {
                            (0, s.logWarn)("".concat(b, ": Error tying to setRender on renderer"), e)
                        }
                        return t
                    },
                    outstreamRender: function(e) {
                        e.renderer.push((function() {
                            A.bootstrapPlayer(e)
                        }))
                    },
                    getRendererId: function(e, r) {
                        return "".concat(e, "-").concat(r)
                    }
                },
                N = [c.Mk, c.pX, c.B5],
                M = 0,
                z = !1,
                K = {},
                U = {},
                q = ["pubmatic"],
                j = ["all"];

            function W(e, r) {
                if (!(0, s.isStr)(r)) return r && (0, s.logWarn)("PubMatic: Ignoring param key: " + e + ", expects string-value, found " + (0, n.Z)(r)), y;
                switch (e) {
                    case "pmzoneid":
                        return r.split(",").slice(0, 50).map((function(e) {
                            return e.trim()
                        })).join();
                    case "kadfloor":
                    case "lat":
                    case "lon":
                        return parseFloat(r) || y;
                    case "yob":
                        return parseInt(r) || y;
                    default:
                        return r
                }
            }

            function L(e) {
                var r;
                e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, e.params.adSlot = (r = e.params.adSlot, (0, s.isStr)(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : (r && (0, s.logWarn)("pubmatic: adSlot must be a string. Ignoring adSlot"), ""));
                var a = e.params.adSlot,
                    t = a.split(":");
                if (a = t[0], 2 == t.length && (e.params.adUnitIndex = t[1]), t = a.split("@"), e.params.adUnit = t[0], t.length > 1) {
                    if (2 != (t = t[1].split("x")).length) return void(0, s.logWarn)("PubMatic: AdSlot Error: adSlot not in required format");
                    e.params.width = parseInt(t[0], 10), e.params.height = parseInt(t[1], 10)
                } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(c.Mk) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                    for (var i = 0, n = []; i < e.mediaTypes.banner.sizes.length; i++) 2 === e.mediaTypes.banner.sizes[i].length && n.push(e.mediaTypes.banner.sizes[i]);
                    e.mediaTypes.banner.sizes = n, e.mediaTypes.banner.sizes.length >= 1 && (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1))
                }
            }

            function B(e, r, a) {
                var t, i = "Ignoring param key: " + e + ", expects " + a + ", found " + (0, n.Z)(r);
                switch (a) {
                    case T:
                        t = s.isBoolean;
                        break;
                    case w:
                        t = s.isNumber;
                        break;
                    case P:
                        t = s.isStr;
                        break;
                    case O:
                        t = s.isArray
                }
                return t(r) ? r : ((0, s.logWarn)(b + i), y)
            }

            function X(e, r) {
                var a = e.KEY;
                return {
                    id: e.ID,
                    required: r[a].required ? 1 : 0,
                    data: {
                        type: e.TYPE,
                        len: r[a].len,
                        ext: r[a].ext
                    }
                }
            }

            function _(e) {
                var r = {
                    assets: []
                };
                for (var a in e) {
                    if (e.hasOwnProperty(a)) {
                        var t = {};
                        if (!(r.assets && r.assets.length > 0 && r.assets.hasOwnProperty(a))) switch (a) {
                            case x.TITLE.KEY:
                                e[a].len || e[a].length ? t = {
                                    id: x.TITLE.ID,
                                    required: e[a].required ? 1 : 0,
                                    title: {
                                        len: e[a].len || e[a].length,
                                        ext: e[a].ext
                                    }
                                } : (0, s.logWarn)("PubMatic: Error: Title Length is required for native ad: " + JSON.stringify(e));
                                break;
                            case x.IMAGE.KEY:
                                e[a].sizes && e[a].sizes.length > 0 ? t = {
                                    id: x.IMAGE.ID,
                                    required: e[a].required ? 1 : 0,
                                    img: {
                                        type: k,
                                        w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : y),
                                        h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : y),
                                        wmin: e[a].wmin || e[a].minimumWidth || (e[a].minsizes ? e[a].minsizes[0] : y),
                                        hmin: e[a].hmin || e[a].minimumHeight || (e[a].minsizes ? e[a].minsizes[1] : y),
                                        mimes: e[a].mimes,
                                        ext: e[a].ext
                                    }
                                } : (0, s.logWarn)("PubMatic: Error: Image sizes is required for native ad: " + JSON.stringify(e));
                                break;
                            case x.ICON.KEY:
                                e[a].sizes && e[a].sizes.length > 0 ? t = {
                                    id: x.ICON.ID,
                                    required: e[a].required ? 1 : 0,
                                    img: {
                                        type: S,
                                        w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : y),
                                        h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : y)
                                    }
                                } : (0, s.logWarn)("PubMatic: Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                                break;
                            case x.VIDEO.KEY:
                                t = {
                                    id: x.VIDEO.ID,
                                    required: e[a].required ? 1 : 0,
                                    video: {
                                        minduration: e[a].minduration,
                                        maxduration: e[a].maxduration,
                                        protocols: e[a].protocols,
                                        mimes: e[a].mimes,
                                        ext: e[a].ext
                                    }
                                };
                                break;
                            case x.EXT.KEY:
                                t = {
                                    id: x.EXT.ID,
                                    required: e[a].required ? 1 : 0
                                };
                                break;
                            case x.LOGO.KEY:
                                t = {
                                    id: x.LOGO.ID,
                                    required: e[a].required ? 1 : 0,
                                    img: {
                                        type: Y,
                                        w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : y),
                                        h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : y)
                                    }
                                };
                                break;
                            case x.SPONSOREDBY.KEY:
                            case x.BODY.KEY:
                            case x.RATING.KEY:
                            case x.LIKES.KEY:
                            case x.DOWNLOADS.KEY:
                            case x.PRICE.KEY:
                            case x.SALEPRICE.KEY:
                            case x.PHONE.KEY:
                            case x.ADDRESS.KEY:
                            case x.DESC2.KEY:
                            case x.DISPLAYURL.KEY:
                            case x.CTA.KEY:
                                t = X(U[a], e)
                        }
                    }
                    t && t.id && (r.assets[r.assets.length] = t)
                }
                var i = C.length,
                    n = 0;
                return C.forEach((function(e) {
                    for (var a = r.assets.length, t = 0; t < a; t++)
                        if (e.id == r.assets[t].id) {
                            n++;
                            break
                        }
                })), z = i != n, r
            }

            function Z(e) {
                var r, a = e.mediaTypes.banner.sizes,
                    t = [];
                if (a !== y && (0, s.isArray)(a)) {
                    if (r = {}, e.params.width || e.params.height) r.w = e.params.width, r.h = e.params.height;
                    else {
                        if (0 === a.length) return r = y, (0, s.logWarn)("PubMatic: Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r;
                        r.w = parseInt(a[0][0], 10), r.h = parseInt(a[0][1], 10), a = a.splice(1, a.length - 1)
                    }
                    a.length > 0 && (t = [], a.forEach((function(e) {
                        e.length > 1 && t.push({
                            w: e[0],
                            h: e[1]
                        })
                    })), t.length > 0 && (r.format = t)), r.pos = 0, r.topframe = (0, s.inIframe)() ? 0 : 1
                } else(0, s.logWarn)("PubMatic: Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r = y;
                return r
            }

            function G(e) {
                var r, a = (0, s.mergeDeep)((0, o.Z)(e.mediaTypes, "video"), e.params.video);
                if (a !== y) {
                    for (var t in r = {},
                            function(e, r) {
                                (0, o.Z)(e, "placement") || (0, s.logWarn)("Video.Placement param missing for " + r)
                            }(a, e.adUnitCode), D) a.hasOwnProperty(t) && (r[t] = B(t, a[t], D[t]));
                    (0, s.isArray)(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : (0, s.isNumber)(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[1], 10))
                } else r = y, (0, s.logWarn)("PubMatic: Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
                return r
            }

            function J(e, r, a) {
                var t = r.rtd && r.rtd.jwplayer && r.rtd.jwplayer.targeting || void 0,
                    i = "";
                if (void 0 !== t && "" !== t && t.hasOwnProperty("segments")) {
                    var n, s = t.segments.length;
                    i += "jw-id=" + t.content.id;
                    for (var o = 0; o < s; o++) i += "|jw-" + t.segments[o] + "=1";
                    a ? void 0 === e.dctr || 0 == e.dctr.length ? e.dctr = i : e.dctr += "|" + i : (n = e.ext) && void 0 === n.key_val ? n.key_val = i : n.key_val += "|" + i
                }
            }

            function F(e, r) {
                var a, t, p = {},
                    u = {},
                    m = e.hasOwnProperty("sizes") ? e.sizes : [],
                    g = "",
                    h = [];
                if (function(e, r) {
                        r.params.deals && ((0, s.isArray)(r.params.deals) ? r.params.deals.forEach((function(r) {
                            (0, s.isStr)(r) && r.length > 3 ? (e.pmp || (e.pmp = {
                                private_auction: 0,
                                deals: []
                            }), e.pmp.deals.push({
                                id: r
                            })) : (0, s.logWarn)("PubMatic: Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " + r)
                        })) : (0, s.logWarn)("PubMatic: Error: bid.params.deals should be an array of strings."))
                    }(p = {
                        id: e.bidId,
                        tagid: e.params.adUnit || void 0,
                        bidfloor: W("kadfloor", e.params.kadfloor),
                        secure: 1,
                        ext: {
                            pmZoneId: W("pmzoneid", e.params.pmzoneid)
                        },
                        bidfloorcur: e.params.currency ? W("currency", e.params.currency) : v
                    }, e), function(e, r) {
                        var a, t = "";
                        if (r.params.dctr)
                            if (t = r.params.dctr, (0, s.isStr)(t) && t.length > 0) {
                                var i = t.split("|");
                                t = "", i.forEach((function(e) {
                                    t += e.length > 0 ? e.trim() + "|" : ""
                                })), a = t.length, "|" === t.substring(a, a - 1) && (t = t.substring(0, a - 1)), e.ext.key_val = t.trim()
                            } else(0, s.logWarn)("PubMatic: Ignoring param : dctr with value : " + t + ", expects string-value, found empty or non-string value")
                    }(p, e), J(p, e), e.hasOwnProperty("mediaTypes"))
                    for (g in e.mediaTypes) switch (g) {
                        case c.Mk:
                            (a = Z(e)) !== y && (p.banner = a);
                            break;
                        case c.B5:
                            u.request = JSON.stringify(_(e.nativeParams)), z ? (0, s.logWarn)("PubMatic: Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : p.native = u;
                            break;
                        case c.pX:
                            (t = G(e)) !== y && (p.video = t)
                    } else a = {
                        pos: 0,
                        w: e.params.width,
                        h: e.params.height,
                        topframe: (0, s.inIframe)() ? 0 : 1
                    }, (0, s.isArray)(m) && m.length > 1 && ((m = m.splice(1, m.length - 1)).forEach((function(e) {
                        h.push({
                            w: e[0],
                            h: e[1]
                        })
                    })), a.format = h), p.banner = a;
                return function(e, r) {
                        var a = function(e) {
                            for (var r = 1; r < arguments.length; r++) {
                                var a = null != arguments[r] ? arguments[r] : {};
                                r % 2 ? f(Object(a), !0).forEach((function(r) {
                                    (0, i.Z)(e, r, a[r])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : f(Object(a)).forEach((function(r) {
                                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r))
                                }))
                            }
                            return e
                        }({}, (0, o.Z)(r, "ortb2Imp.ext.data"));
                        Object.keys(a).forEach((function(r) {
                            "pbadslot" === r ? "string" == typeof a[r] && a[r] && (0, d.N)(e, "ext.data.pbadslot", a[r]) : "adserver" === r ? ["name", "adslot"].forEach((function(r) {
                                var t = (0, o.Z)(a, "adserver.".concat(r));
                                "string" == typeof t && t && ((0, d.N)(e, "ext.data.adserver.".concat(r.toLowerCase()), t), "adslot" === r && (0, d.N)(e, "ext.dfp_ad_unit_code", t))
                            })) : (0, d.N)(e, "ext.data.".concat(r), a[r])
                        }))
                    }(p, e),
                    function(e, r) {
                        var a = -1;
                        "function" != typeof r.getFloor || l.vc.getConfig("pubmatic.disableFloors") || [c.Mk, c.pX, c.B5].forEach((function(t) {
                            if (e.hasOwnProperty(t)) {
                                var i = [];
                                "banner" === t && (e[t].w && e[t].h && i.push([e[t].w, e[t].h]), (0, s.isArray)(e[t].format) && e[t].format.forEach((function(e) {
                                    return i.push([e.w, e.h])
                                }))), 0 === i.length && i.push("*"), i.forEach((function(i) {
                                    var o = r.getFloor({
                                        currency: e.bidfloorcur,
                                        mediaType: t,
                                        size: i
                                    });
                                    if ((0, s.logInfo)(b, "floor from floor module returned for mediatype:", t, " and size:", i, " is: currency", o.currency, "floor", o.floor), "object" === (0, n.Z)(o) && o.currency === e.bidfloorcur && !isNaN(parseInt(o.floor))) {
                                        var d = parseFloat(o.floor);
                                        (0, s.logInfo)(b, "floor from floor module:", d, "previous floor value", a, "Min:", Math.min(d, a)), a = -1 === a ? d : Math.min(d, a), (0, s.logInfo)(b, "new floor value:", a)
                                    }
                                }))
                            }
                        }));
                        e.bidfloor && ((0, s.logInfo)(b, "floor from floor module:", a, "impObj.bidfloor", e.bidfloor, "Max:", Math.max(a, e.bidfloor)), a = Math.max(a, e.bidfloor));
                        e.bidfloor = !isNaN(a) && a > 0 ? a : y, (0, s.logInfo)(b, "new impObj.bidfloor value:", e.bidfloor)
                    }(p, e), p.hasOwnProperty(c.Mk) || p.hasOwnProperty(c.B5) || p.hasOwnProperty(c.pX) ? p : y
            }

            function V(e, r) {
                (r = r.filter((function(e) {
                    return "string" == typeof e || ((0, s.logWarn)("PubMatic: acat: Each category should be a string, ignoring category: " + e), !1)
                })).map((function(e) {
                    return e.trim()
                })).filter((function(e, r, a) {
                    return a.indexOf(e) === r
                }))).length > 0 && ((0, s.logWarn)("PubMatic: acat: Selected: ", r), e.ext.acat = r)
            }

            function H(e) {
                return !0 === (0, s.isArray)(e) && e.length > 0
            }(0, s._each)(x, (function(e) {
                K[e.ID] = e.KEY
            })), (0, s._each)(x, (function(e) {
                U[e.KEY] = e
            }));
            var $ = {
                code: h,
                gvlid: 76,
                supportedMediaTypes: [c.Mk, c.pX, c.B5],
                isBidRequestValid: function(e) {
                    if (e && e.params) {
                        if (!(0, s.isStr)(e.params.publisherId)) return (0, s.logWarn)("PubMatic: Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), !1;
                        if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(c.pX)) {
                            var r = (0, o.Z)(e.mediaTypes, "video.mimes"),
                                a = (0, o.Z)(e, "params.video.mimes");
                            if (!1 === H(r) && !1 === H(a)) return (0, s.logWarn)("PubMatic: Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), !1;
                            if (!e.mediaTypes[c.pX].hasOwnProperty("context")) return (0, s.logError)("".concat(b, ": no context specified in bid. Rejecting bid: "), e), !1;
                            if ("outstream" === e.mediaTypes[c.pX].context && !(0, s.isStr)(e.params.outstreamAU) && !e.hasOwnProperty("renderer") && !e.mediaTypes[c.pX].hasOwnProperty("renderer")) return e.mediaTypes.hasOwnProperty(c.Mk) || e.mediaTypes.hasOwnProperty(c.B5) ? (delete e.mediaTypes[c.pX], (0, s.logWarn)("".concat(b, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting mediatype Video of bid: '), e), !0) : ((0, s.logError)("".concat(b, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '), e), !1)
                        }
                        return !0
                    }
                    return !1
                },
                buildRequests: function(e, r) {
                    var a, i, p, u, f;
                    e = (0, g.lY)(e), r && r.refererInfo && (f = r.refererInfo);
                    var h, b = function(e) {
                            return {
                                pageURL: (null == e ? void 0 : e.page) || window.location.href,
                                refURL: (null == e ? void 0 : e.ref) || window.document.referrer
                            }
                        }(f),
                        E = function(e) {
                            return {
                                id: "" + (new Date).getTime(),
                                at: 1,
                                cur: [v],
                                imp: [],
                                site: {
                                    page: e.pageURL,
                                    ref: e.refURL,
                                    publisher: {}
                                },
                                device: {
                                    ua: navigator.userAgent,
                                    js: 1,
                                    dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                                    h: screen.height,
                                    w: screen.width,
                                    language: navigator.language
                                },
                                user: {},
                                ext: {}
                            }
                        }(b),
                        w = "",
                        P = [],
                        T = [],
                        O = [];
                    if (e.forEach((function(e) {
                            if ((h = (0, s.deepClone)(e)).params.adSlot = h.params.adSlot || "", L(h), h.mediaTypes && h.mediaTypes.hasOwnProperty("video") || h.params.hasOwnProperty("video"));
                            else if (!(h.hasOwnProperty("mediaTypes") && h.mediaTypes.hasOwnProperty(c.B5) || 0 !== h.params.width || 0 !== h.params.height)) return void(0, s.logWarn)("PubMatic: Skipping the non-standard adslot: ", h.params.adSlot, JSON.stringify(h));
                            b.pubId = b.pubId || h.params.publisherId, (b = function(e, r) {
                                var a, t, i;
                                for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), I) I.hasOwnProperty(a) && (t = e[a]) && (i = I[a], "object" === (0, n.Z)(i) && (t = i.f(t, r)), (0, s.isStr)(t) ? r[a] = t : (0, s.logWarn)("PubMatic: Ignoring param : " + a + " with value : " + I[a] + ", expects string-value, found " + (0, n.Z)(t)));
                                return r
                            }(h.params, b)).transactionId = h.transactionId, "" === w ? w = h.params.currency || y : h.params.hasOwnProperty("currency") && w !== h.params.currency && (0, s.logWarn)("PubMatic: Currency specifier ignored. Only one currency permitted."), h.params.currency = w, h.params.hasOwnProperty("dctr") && (0, s.isStr)(h.params.dctr) && P.push(h.params.dctr), h.params.hasOwnProperty("bcat") && (0, s.isArray)(h.params.bcat) && (T = T.concat(h.params.bcat)), h.params.hasOwnProperty("acat") && (0, s.isArray)(h.params.acat) && (O = O.concat(h.params.acat));
                            var r = F(h);
                            r && E.imp.push(r)
                        })), 0 != E.imp.length) {
                        E.site.publisher.id = b.pubId.trim(), M = b.pubId.trim(), E.ext.wrapper = {}, E.ext.wrapper.profile = parseInt(b.profId) || y, E.ext.wrapper.version = parseInt(b.verId) || y, E.ext.wrapper.wiid = b.wiid || r.auctionId, E.ext.wrapper.wv = "prebid_prebid_7.17.0", E.ext.wrapper.transactionId = b.transactionId, E.ext.wrapper.wp = "pbjs";
                        var D, x, S = r ? m.S.get(r.bidderCode, "allowAlternateBidderCodes") : void 0;
                        if (void 0 !== S) {
                            if (E.ext.marketplace = {}, r && 1 == S) {
                                var Y = m.S.get(r.bidderCode, "allowedAlternateBidderCodes");
                                (0, s.isArray)(Y) ? (Y = Y.map((function(e) {
                                    return e.trim().toLowerCase()
                                })).filter((function(e) {
                                    return !!e
                                })).filter(s.uniques), q = Y.includes("*") ? j : [].concat((0, t.Z)(q), (0, t.Z)(Y))) : q = j
                            }
                            E.ext.marketplace.allowedbidders = q.filter(s.uniques)
                        }
                        E.user.gender = b.gender ? b.gender.trim() : y, E.user.geo = {}, E.user.geo.lat = W("lat", b.lat), E.user.geo.lon = W("lon", b.lon), E.user.yob = W("yob", b.yob), E.device.geo = E.user.geo, E.site.page = b.kadpageurl.trim() || E.site.page.trim(), E.site.domain = (D = E.site.page, (x = document.createElement("a")).href = D, x.hostname), "object" === (0, n.Z)(l.vc.getConfig("content")) && (E.site.content = l.vc.getConfig("content")), "object" === (0, n.Z)(l.vc.getConfig("device")) && (E.device = Object.assign(E.device, l.vc.getConfig("device"))), E.device.language = E.device.language && E.device.language.split("-")[0], (0, d.N)(E, "source.tid", b.transactionId), -1 !== window.location.href.indexOf("pubmaticTest=true") && (E.test = 1), e[0].schain && (0, d.N)(E, "source.ext.schain", e[0].schain), r && r.gdprConsent && ((0, d.N)(E, "user.ext.consent", r.gdprConsent.consentString), (0, d.N)(E, "regs.ext.gdpr", r.gdprConsent.gdprApplies ? 1 : 0)), r && r.uspConsent && (0, d.N)(E, "regs.ext.us_privacy", r.uspConsent), !0 === l.vc.getConfig("coppa") && (0, d.N)(E, "regs.coppa", 1),
                            function(e, r) {
                                var a = (0, o.Z)(r, "0.userIdAsEids");
                                (0, s.isArray)(a) && a.length > 0 && (0, d.N)(e, "user.eids", a)
                            }(E, e);
                        var k, C, R, A = r && r.ortb2 || {};
                        if (A.site) {
                            var N = E.site,
                                z = N.page,
                                K = N.domain,
                                U = N.ref;
                            (0, s.mergeDeep)(E, {
                                site: A.site
                            }), E.site.page = z, E.site.domain = K, E.site.ref = U
                        }
                        if (A.user && (0, s.mergeDeep)(E, {
                                user: A.user
                            }), A.bcat && (T = T.concat(A.bcat)), null !== (a = A.ext) && void 0 !== a && null !== (i = a.prebid) && void 0 !== i && null !== (p = i.bidderparams) && void 0 !== p && null !== (u = p[r.bidderCode]) && void 0 !== u && u.acat) {
                            var B = A.ext.prebid.bidderparams[r.bidderCode].acat;
                            V(E, B)
                        } else O.length && V(E, O);
                        if (function(e, r) {
                                (r = r.filter((function(e) {
                                    return "string" == typeof e || ((0, s.logWarn)("PubMatic: bcat: Each category should be a string, ignoring category: " + e), !1)
                                })).map((function(e) {
                                    return e.trim()
                                })).filter((function(e, r, a) {
                                    if (e.length > 3) return a.indexOf(e) === r;
                                    (0, s.logWarn)("PubMatic: bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e)
                                }))).length > 0 && ((0, s.logWarn)("PubMatic: bcat: Selected: ", r), e.bcat = r)
                            }(E, T), null != r && r.timeout) E.tmax = r.timeout || l.vc.getConfig("bidderTimeout");
                        else E.tmax = null === (k = window) || void 0 === k || null === (C = k.PWT) || void 0 === C || null === (R = C.versionDetails) || void 0 === R ? void 0 : R.timeout;
                        return E.ext.epoch = (new Date).getTime(), "object" === (0, n.Z)(l.vc.getConfig("app")) && (E.app = l.vc.getConfig("app"), E.app.publisher = E.site.publisher, E.app.ext = E.site.ext || y, "object" !== (0, n.Z)(E.app.content) && (E.app.content = E.site.content || y), delete E.site), {
                            method: "POST",
                            url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                            data: JSON.stringify(E),
                            bidderRequest: r
                        }
                    }
                },
                interpretResponse: function(e, r) {
                    var a = [],
                        t = v,
                        i = JSON.parse(r.data),
                        n = i.site && i.site.ref ? i.site.ref : "";
                    try {
                        e.body && e.body.seatbid && (0, s.isArray)(e.body.seatbid) && (t = e.body.cur || t, e.body.seatbid.forEach((function(e) {
                            e.bid && (0, s.isArray)(e.bid) && e.bid.forEach((function(o) {
                                var d = {
                                    requestId: o.impid,
                                    cpm: (parseFloat(o.price) || 0).toFixed(2),
                                    width: o.w,
                                    height: o.h,
                                    creativeId: o.crid || o.id,
                                    dealId: o.dealid,
                                    currency: t,
                                    netRevenue: true,
                                    ttl: 300,
                                    referrer: n,
                                    ad: o.adm,
                                    pm_seat: e.seat || null,
                                    pm_dspid: o.ext && o.ext.dspid ? o.ext.dspid : null,
                                    partnerImpId: o.id || ""
                                };
                                i.imp && i.imp.length > 0 && i.imp.forEach((function(e) {
                                    if (o.impid === e.id) switch (function(e, r) {
                                        if (e.ext && null != e.ext.bidtype) r.mediaType = N[e.ext.bidtype];
                                        else {
                                            (0, s.logInfo)("PubMatic: bid.ext.bidtype does not exist, checking alternatively for mediaType");
                                            var a = e.adm,
                                                t = "",
                                                i = new RegExp(/VAST\s+version/);
                                            if (a.indexOf('span class="PubAPIAd"') >= 0) r.mediaType = c.Mk;
                                            else if (i.test(a)) r.mediaType = c.pX;
                                            else try {
                                                (t = JSON.parse(a.replace(/\\/g, ""))) && t.native && (r.mediaType = c.B5)
                                            } catch (e) {
                                                (0, s.logWarn)("PubMatic: Error: Cannot parse native reponse for ad response: " + a)
                                            }
                                        }
                                    }(o, d), d.mediaType) {
                                        case c.Mk:
                                            break;
                                        case c.pX:
                                            d.width = o.hasOwnProperty("w") ? o.w : e.video.w, d.height = o.hasOwnProperty("h") ? o.h : e.video.h, d.vastXml = o.adm,
                                                function(e, r) {
                                                    var a, t, i;
                                                    if (r.bidderRequest && r.bidderRequest.bids) {
                                                        for (var n = 0; n < r.bidderRequest.bids.length; n++) r.bidderRequest.bids[n].bidId === e.requestId && (a = r.bidderRequest.bids[n].params, t = r.bidderRequest.bids[n].mediaTypes[c.pX].context, i = r.bidderRequest.bids[n].adUnitCode);
                                                        t && "outstream" === t && a && a.outstreamAU && i && (e.rendererCode = a.outstreamAU, e.renderer = A.newRenderer(e.rendererCode, i))
                                                    }
                                                }(d, r);
                                            break;
                                        case c.B5:
                                            ! function(e, r) {
                                                if (r.native = {}, e.hasOwnProperty("adm")) {
                                                    var a = "";
                                                    try {
                                                        a = JSON.parse(e.adm.replace(/\\/g, ""))
                                                    } catch (e) {
                                                        return void(0, s.logWarn)("PubMatic: Error: Cannot parse native reponse for ad response: " + r.adm)
                                                    }
                                                    if (a && a.native && a.native.assets && a.native.assets.length > 0) {
                                                        r.mediaType = c.B5;
                                                        for (var t = 0, i = a.native.assets.length; t < i; t++) switch (a.native.assets[t].id) {
                                                            case x.TITLE.ID:
                                                                r.native.title = a.native.assets[t].title && a.native.assets[t].title.text;
                                                                break;
                                                            case x.IMAGE.ID:
                                                                r.native.image = {
                                                                    url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                                    height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                                    width: a.native.assets[t].img && a.native.assets[t].img.w
                                                                };
                                                                break;
                                                            case x.ICON.ID:
                                                                r.native.icon = {
                                                                    url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                                    height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                                    width: a.native.assets[t].img && a.native.assets[t].img.w
                                                                };
                                                                break;
                                                            case x.SPONSOREDBY.ID:
                                                            case x.BODY.ID:
                                                            case x.LIKES.ID:
                                                            case x.DOWNLOADS.ID:
                                                            case x.PRICE:
                                                            case x.SALEPRICE.ID:
                                                            case x.PHONE.ID:
                                                            case x.ADDRESS.ID:
                                                            case x.DESC2.ID:
                                                            case x.CTA.ID:
                                                            case x.RATING.ID:
                                                            case x.DISPLAYURL.ID:
                                                                r.native[K[a.native.assets[t].id]] = a.native.assets[t].data && a.native.assets[t].data.value
                                                        }
                                                        r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], r.width || (r.width = 0), r.height || (r.height = 0)
                                                    }
                                                }
                                            }(o, d)
                                    }
                                })), o.ext && o.ext.deal_channel && (d.dealChannel = R[o.ext.deal_channel] || null), d.meta = {}, o.ext && o.ext.dspid && (d.meta.networkId = o.ext.dspid), o.ext && o.ext.advid && (d.meta.buyerId = o.ext.advid), o.adomain && o.adomain.length > 0 && (d.meta.advertiserDomains = o.adomain, d.meta.clickUrl = o.adomain[0]), e.ext && e.ext.buyid && (d.adserverTargeting = {
                                    hb_buyid_pubmatic: e.ext.buyid
                                }), o.ext && o.ext.marketplace && (d.bidderCode = o.ext.marketplace), a.push(d)
                            }))
                        })))
                    } catch (e) {
                        (0, s.logError)(e)
                    }
                    return a
                },
                getUserSyncs: function(e, r, a, t) {
                    var i = "" + M;
                    return a && (i += "&gdpr=" + (a.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), t && (i += "&us_privacy=" + encodeURIComponent(t)), !0 === l.vc.getConfig("coppa") && (i += "&coppa=1"), e.iframeEnabled ? [{
                        type: "iframe",
                        url: "https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p=" + i
                    }] : [{
                        type: "image",
                        url: "https://image8.pubmatic.com/AdServer/ImgSync?p=" + i
                    }]
                },
                transformBidParams: function(e, r, a, t) {
                    return J(e, a.bids[0], !0), (0, s.convertTypes)({
                        publisherId: "string",
                        adSlot: "string"
                    }, e)
                }
            };
            (0, p.dX)($), window.epbjs.installedModules.push("pubmaticBidAdapter")
        }
    },
    function(e) {
        var r;
        r = 15817, e(e.s = r)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [2229], {
        40060: function(e, r, t) {
            var i = t(93324),
                n = t(4942),
                o = t(71002),
                a = t(64358),
                s = t(20265),
                c = t(96475),
                d = t(14699),
                p = t(3193),
                u = t(24679),
                l = t(34614),
                m = t(35706),
                v = t(78640);

            function g(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    r && (i = i.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function f(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? g(Object(t), !0).forEach((function(r) {
                        (0, n.Z)(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }
            var b = "https://video-outstream.rubiconproject.com/apex-2.2.1.js",
                x = {};
            p.vc.getConfig("rubicon", (function(e) {
                (0, a.mergeDeep)(x, e.rubicon)
            }));
            var y = {
                1: "468x60",
                2: "728x90",
                5: "120x90",
                7: "125x125",
                8: "120x600",
                9: "160x600",
                10: "300x600",
                13: "200x200",
                14: "250x250",
                15: "300x250",
                16: "336x280",
                17: "240x400",
                19: "300x100",
                31: "980x120",
                32: "250x360",
                33: "180x500",
                35: "980x150",
                37: "468x400",
                38: "930x180",
                39: "750x100",
                40: "750x200",
                41: "750x300",
                42: "2x4",
                43: "320x50",
                44: "300x50",
                48: "300x300",
                53: "1024x768",
                54: "300x1050",
                55: "970x90",
                57: "970x250",
                58: "1000x90",
                59: "320x80",
                60: "320x150",
                61: "1000x1000",
                64: "580x500",
                65: "640x480",
                66: "930x600",
                67: "320x480",
                68: "1800x1000",
                72: "320x320",
                73: "320x160",
                78: "980x240",
                79: "980x300",
                80: "980x400",
                83: "480x300",
                85: "300x120",
                90: "548x150",
                94: "970x310",
                95: "970x100",
                96: "970x210",
                101: "480x320",
                102: "768x1024",
                103: "480x280",
                105: "250x800",
                108: "320x240",
                113: "1000x300",
                117: "320x100",
                125: "800x250",
                126: "200x600",
                144: "980x600",
                145: "980x150",
                152: "1000x250",
                156: "640x320",
                159: "320x250",
                179: "250x600",
                195: "600x300",
                198: "640x360",
                199: "640x200",
                213: "1030x590",
                214: "980x360",
                221: "1x1",
                229: "320x180",
                230: "2000x1400",
                232: "580x400",
                234: "6x6",
                251: "2x2",
                256: "480x820",
                257: "400x600",
                258: "500x200",
                259: "998x200",
                264: "970x1000",
                265: "1920x1080",
                274: "1800x200",
                278: "320x500",
                282: "320x400",
                288: "640x380",
                548: "500x1000",
                550: "980x480",
                552: "300x200",
                558: "640x640",
                562: "300x431",
                564: "320x431",
                566: "320x300",
                568: "300x150",
                570: "300x125",
                572: "250x350",
                574: "620x891",
                576: "610x877",
                578: "980x552",
                580: "505x656"
            };
            (0, a._each)(y, (function(e, r) {
                return y[e] = r
            }));
            var h = {
                code: "rubicon",
                gvlid: 52,
                supportedMediaTypes: [u.Mk, u.pX],
                isBidRequestValid: function(e) {
                    if ("object" !== (0, o.Z)(e.params)) return !1;
                    for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++)
                        if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]])) return (0, a.logError)("Rubicon: wrong format of accountId or siteId or zoneId."), !1;
                    var i = w(e, !0);
                    return !!i && ("video" !== i || function(e) {
                        var r = !0,
                            t = Object.prototype.toString.call([]),
                            i = Object.prototype.toString.call(0),
                            n = {
                                mimes: t,
                                protocols: t,
                                linearity: i,
                                api: t
                            };
                        return Object.keys(n).forEach((function(t) {
                            Object.prototype.toString.call((0, s.Z)(e, "mediaTypes.video." + t)) !== n[t] && (r = !1, (0, a.logError)("Rubicon: mediaTypes.video." + t + " is required and must be of type: " + n[t]))
                        })), r
                    }(e))
                },
                buildRequests: function(e, r) {
                    var t = [],
                        i = e.filter((function(e) {
                            return "video" === w(e)
                        })).map((function(e) {
                            e.startTime = (new Date).getTime();
                            var t, i = {
                                id: e.transactionId,
                                test: p.vc.getConfig("debug") ? 1 : 0,
                                cur: ["USD"],
                                source: {
                                    tid: e.transactionId
                                },
                                tmax: r.timeout,
                                imp: [{
                                    exp: p.vc.getConfig("s2sConfig.defaultTtl"),
                                    id: e.adUnitCode,
                                    secure: 1,
                                    ext: (0, n.Z)({}, e.bidder, e.params),
                                    video: (0, s.Z)(e, "mediaTypes.video") || {}
                                }],
                                ext: {
                                    prebid: {
                                        channel: {
                                            name: "pbjs",
                                            version: epbjs.version
                                        },
                                        cache: {
                                            vastxml: {
                                                returnCreative: !0 === x.returnVast
                                            }
                                        },
                                        targeting: {
                                            includewinners: !0,
                                            includebidderkeys: !1,
                                            pricegranularity: (t = p.vc, {
                                                ranges: {
                                                    low: [{
                                                        max: 5,
                                                        increment: .5
                                                    }],
                                                    medium: [{
                                                        max: 20,
                                                        increment: .1
                                                    }],
                                                    high: [{
                                                        max: 20,
                                                        increment: .01
                                                    }],
                                                    auto: [{
                                                        max: 5,
                                                        increment: .05
                                                    }, {
                                                        min: 5,
                                                        max: 10,
                                                        increment: .1
                                                    }, {
                                                        min: 10,
                                                        max: 20,
                                                        increment: .5
                                                    }],
                                                    dense: [{
                                                        max: 3,
                                                        increment: .01
                                                    }, {
                                                        min: 3,
                                                        max: 8,
                                                        increment: .05
                                                    }, {
                                                        min: 8,
                                                        max: 20,
                                                        increment: .5
                                                    }],
                                                    custom: t.getConfig("customPriceBucket") && t.getConfig("customPriceBucket").buckets
                                                }[t.getConfig("priceGranularity")]
                                            })
                                        },
                                        bidders: {
                                            rubicon: {
                                                integration: x.int_type || "pbjs"
                                            }
                                        }
                                    }
                                }
                            };
                            "rubicon" !== e.bidder && (i.ext.prebid.aliases = (0, n.Z)({}, e.bidder, "rubicon"));
                            var d, l, m = (0, v.R)().installedModules;
                            if (!m || m.length && -1 === m.indexOf("rubiconAnalyticsAdapter") || (0, c.N)(i, "ext.prebid.analytics", {
                                    rubicon: {
                                        "client-analytics": !0
                                    }
                                }), "function" != typeof e.getFloor || x.disableFloors) d = parseFloat((0, s.Z)(e, "params.floor"));
                            else {
                                var g;
                                try {
                                    g = e.getFloor({
                                        currency: "USD",
                                        mediaType: "video",
                                        size: k(e, "video")
                                    })
                                } catch (e) {
                                    (0, a.logError)("Rubicon: getFloor threw an error: ", e)
                                }
                                d = "object" !== (0, o.Z)(g) || "USD" !== g.currency || isNaN(parseInt(g.floor)) ? void 0 : parseFloat(g.floor)
                            }(isNaN(d) || (i.imp[0].bidfloor = d), "object" === (0, o.Z)(e.floorData) && (i.ext.prebid.floors = {
                                enabled: !1
                            }), i.imp[0].ext[e.bidder].video.size_id = function(e) {
                                var r = parseInt((0, s.Z)(e, "params.video.size_id"));
                                if (!isNaN(r)) return r;
                                return "outstream" === (0, s.Z)(e, "mediaTypes.".concat(u.pX, ".context")) ? 203 : 201
                            }(e), function(e, r, t) {
                                if (!e) return;
                                "object" === (0, o.Z)(p.vc.getConfig("app")) ? e.app = p.vc.getConfig("app"): e.site = {
                                    page: _(r, t)
                                };
                                "object" === (0, o.Z)(p.vc.getConfig("device")) && (e.device = p.vc.getConfig("device"));
                                r.params.video.language && ["site", "device"].forEach((function(t) {
                                    e[t] && ("site" === t ? e[t].content = Object.assign({
                                        language: r.params.video.language
                                    }, e[t].content) : e[t] = Object.assign({
                                        language: r.params.video.language
                                    }, e[t]))
                                }))
                            }(i, e, r), function(e, r) {
                                "object" === (0, o.Z)(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                                "object" === (0, o.Z)(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                                "object" === (0, o.Z)(e.imp[0].video) && void 0 === e.imp[0].video.pos && ("atf" === r.params.position ? e.imp[0].video.pos = 1 : "btf" === r.params.position && (e.imp[0].video.pos = 3));
                                var t = k(r, "video");
                                e.imp[0].video.w = t[0], e.imp[0].video.h = t[1]
                            }(i, e), r.gdprConsent) && ("boolean" == typeof r.gdprConsent.gdprApplies && (l = r.gdprConsent.gdprApplies ? 1 : 0), (0, c.N)(i, "regs.ext.gdpr", l), (0, c.N)(i, "user.ext.consent", r.gdprConsent.consentString));
                            r.uspConsent && (0, c.N)(i, "regs.ext.us_privacy", r.uspConsent);
                            var f = (0, s.Z)(r, "bids.0.userIdAsEids");
                            f && f.length && (0, c.N)(i, "user.ext.eids", f);
                            var b = p.vc.getConfig("user.id");
                            b && (0, c.N)(i, "user.id", b), !0 === p.vc.getConfig("coppa") && (0, c.N)(i, "regs.coppa", 1), e.schain && A(e.schain) && (0, c.N)(i, "source.ext.schain", e.schain);
                            var y = p.vc.getConfig("multibid");
                            return y && (0, c.N)(i, "ext.prebid.multibid", y.reduce((function(e, r) {
                                var t = {};
                                return Object.keys(r).forEach((function(e) {
                                    t[e.toLowerCase()] = r[e]
                                })), e.push(t), e
                            }), [])), I(e, u.pX, i), (0, c.N)(i.imp[0], "ext.prebid.auctiontimestamp", r.auctionStart), i.ext.prebid.storedrequest = void 0, i.imp[0].ext.prebid.storedrequest = void 0, {
                                method: "POST",
                                url: "https://".concat(x.videoHost || "prebid-server", ".rubiconproject.com/openrtb2/auction"),
                                data: i,
                                bidRequest: e
                            }
                        }));
                    if (!0 !== x.singleRequest) t = i.concat(e.filter((function(e) {
                        return "banner" === w(e)
                    })).map((function(e) {
                        var t = h.createSlotParams(e, r);
                        return {
                            method: "GET",
                            url: "https://".concat(x.bannerHost || "fastlane", ".rubiconproject.com/a/api/fastlane.json"),
                            data: h.getOrderedParams(t).reduce((function(e, r) {
                                var i = t[r];
                                return (0, a.isStr)(i) && "" !== i || (0, a.isNumber)(i) ? "".concat(e).concat(O(r, i), "&") : e
                            }), "") + "slots=1&rand=".concat(Math.random()),
                            bidRequest: e
                        }
                    })));
                    else {
                        var d = e.filter((function(e) {
                            return "banner" === w(e)
                        })).reduce((function(e, r) {
                            return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e
                        }), {});
                        t = i.concat(Object.keys(d).reduce((function(e, t) {
                            var i, n;
                            return (i = d[t], n = 10, i.map((function(e, r) {
                                return r % n == 0 ? i.slice(r, r + n) : null
                            })).filter((function(e) {
                                return e
                            }))).forEach((function(t) {
                                var i = h.combineSlotUrlParams(t.map((function(e) {
                                    return h.createSlotParams(e, r)
                                })));
                                e.push({
                                    method: "GET",
                                    url: "https://".concat(x.bannerHost || "fastlane", ".rubiconproject.com/a/api/fastlane.json"),
                                    data: h.getOrderedParams(i).reduce((function(e, r) {
                                        var t = i[r];
                                        return (0, a.isStr)(t) && "" !== t || (0, a.isNumber)(t) ? "".concat(e).concat(O(r, t), "&") : e
                                    }), "") + "slots=".concat(t.length, "&rand=").concat(Math.random()),
                                    bidRequest: t
                                })
                            })), e
                        }), []))
                    }
                    return t
                },
                getOrderedParams: function(e) {
                    var r = /^tg_v/,
                        t = /^tg_i/,
                        i = /^eid_|^tpid_/,
                        n = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "us_privacy", "rp_schain"].concat(Object.keys(e).filter((function(e) {
                            return i.test(e)
                        }))).concat(["x_liverampidl", "ppuid", "rf", "p_geo.latitude", "p_geo.longitude", "kw"]).concat(Object.keys(e).filter((function(e) {
                            return r.test(e)
                        }))).concat(Object.keys(e).filter((function(e) {
                            return t.test(e)
                        }))).concat(["tk_flint", "x_source.tid", "l_pb_bid_id", "x_source.pchain", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                    return n.concat(Object.keys(e).filter((function(e) {
                        return -1 === n.indexOf(e)
                    })))
                },
                combineSlotUrlParams: function(e) {
                    if (1 === e.length) return e[0];
                    var r = e.reduce((function(r, t, i) {
                            return Object.keys(t).forEach((function(n) {
                                r.hasOwnProperty(n) || (r[n] = new Array(e.length)), r[n].splice(i, 1, t[n])
                            })), r
                        }), {}),
                        t = new RegExp("^([^;]*)(;\\1)+$");
                    return Object.keys(r).forEach((function(e) {
                        var i = r[e].join(";"),
                            n = i.match(t);
                        r[e] = n ? n[1] : i
                    })), r
                },
                createSlotParams: function(e, r) {
                    e.startTime = (new Date).getTime();
                    var t = e.params,
                        n = k(e, "banner"),
                        c = t.latLong || [],
                        d = (0, i.Z)(c, 2),
                        m = d[0],
                        v = d[1],
                        g = {
                            account_id: t.accountId,
                            site_id: t.siteId,
                            zone_id: t.zoneId,
                            size_id: n[0],
                            alt_size_ids: n.slice(1).join(",") || void 0,
                            rp_floor: (t.floor = parseFloat(t.floor)) >= .01 ? t.floor : void 0,
                            rp_secure: "1",
                            tk_flint: "".concat(x.int_type || "pbjs_lite", "_v7.17.0"),
                            "x_source.tid": e.transactionId,
                            l_pb_bid_id: e.bidId,
                            "x_source.pchain": t.pchain,
                            p_screen_res: [window.screen.width, window.screen.height].join("x"),
                            tk_user_key: t.userId,
                            "p_geo.latitude": isNaN(parseFloat(m)) ? void 0 : parseFloat(m).toFixed(4),
                            "p_geo.longitude": isNaN(parseFloat(v)) ? void 0 : parseFloat(v).toFixed(4),
                            "tg_fl.eid": e.code,
                            rf: _(e, r)
                        };
                    if ("function" == typeof e.getFloor && !x.disableFloors) {
                        var f;
                        try {
                            f = e.getFloor({
                                currency: "USD",
                                mediaType: "banner",
                                size: "*"
                            })
                        } catch (e) {
                            (0, a.logError)("Rubicon: getFloor threw an error: ", e)
                        }
                        g.rp_hard_floor = "object" !== (0, o.Z)(f) || "USD" !== f.currency || isNaN(parseInt(f.floor)) ? void 0 : f.floor
                    }
                    var b = {
                        1: "atf",
                        3: "btf"
                    }[(0, s.Z)(e, "mediaTypes.banner.pos")] || "";
                    g.p_pos = "atf" === t.position || "btf" === t.position ? t.position : b;
                    var y = p.vc.getConfig("user.id");
                    return y && (g.ppuid = y), e.userIdAsEids && e.userIdAsEids.forEach((function(e) {
                        try {
                            if ("adserver.org" === e.source ? (g.tpid_tdid = e.uids[0].id, g["eid_adserver.org"] = e.uids[0].id) : "liveintent.com" === e.source ? (g["tpid_liveintent.com"] = e.uids[0].id, g["eid_liveintent.com"] = e.uids[0].id, e.ext && Array.isArray(e.ext.segments) && e.ext.segments.length && (g["tg_v.LIseg"] = e.ext.segments.join(","))) : "liveramp.com" === e.source ? g.x_liverampidl = e.uids[0].id : "id5-sync.com" === e.source ? g["eid_id5-sync.com"] = "".concat(e.uids[0].id, "^").concat(e.uids[0].atype, "^").concat(e.uids[0].ext && e.uids[0].ext.linkType || "") : g["eid_".concat(e.source)] = "".concat(e.uids[0].id, "^").concat(e.uids[0].atype || ""), !g.ppuid) {
                                var r = (0, l.sE)(e.uids, (function(e) {
                                    return e.ext && "ppuid" === e.ext.stype
                                }));
                                r && r.id && (g.ppuid = r.id)
                            }
                        } catch (r) {
                            (0, a.logWarn)("Rubicon: error reading eid:", e, r)
                        }
                    })), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (g.gdpr = Number(r.gdprConsent.gdprApplies)), g.gdpr_consent = r.gdprConsent.consentString), r.uspConsent && (g.us_privacy = encodeURIComponent(r.uspConsent)), g.rp_maxbids = r.bidLimit || 1, I(e, u.Mk, g), !0 === p.vc.getConfig("coppa") && (g.coppa = 1), e.schain && A(e.schain) && (g.rp_schain = h.serializeSupplyChain(e.schain)), g
                },
                serializeSupplyChain: function(e) {
                    if (!A(e)) return "";
                    var r = e.ver,
                        t = e.complete,
                        i = e.nodes;
                    return "".concat(r, ",").concat(t, "!").concat(h.serializeSupplyChainNodes(i))
                },
                serializeSupplyChainNodes: function(e) {
                    var r = ["asi", "sid", "hp", "rid", "name", "domain"];
                    return e.map((function(e) {
                        return r.map((function(r) {
                            return encodeURIComponent(e[r] || "")
                        })).join(",")
                    })).join("!")
                },
                interpretResponse: function(e, r) {
                    var t = r.bidRequest;
                    if (!(e = e.body) || "object" !== (0, o.Z)(e)) return [];
                    if (e.seatbid) {
                        var n = (0, s.Z)(e, "ext.errors.rubicon");
                        Array.isArray(n) && n.length > 0 && (0, a.logWarn)("Rubicon: Error in video response");
                        var d = [];
                        return e.seatbid.forEach((function(r) {
                            (r.bid || []).forEach((function(i) {
                                var n = {
                                    requestId: t.bidId,
                                    currency: e.cur || "USD",
                                    creativeId: i.crid,
                                    cpm: i.price || 0,
                                    bidderCode: r.seat,
                                    ttl: 300,
                                    netRevenue: !1 !== x.netRevenue,
                                    width: i.w || (0, s.Z)(t, "mediaTypes.video.w") || (0, s.Z)(t, "params.video.playerWidth"),
                                    height: i.h || (0, s.Z)(t, "mediaTypes.video.h") || (0, s.Z)(t, "params.video.playerHeight")
                                };
                                i.id && (n.seatBidId = i.id), i.dealid && (n.dealId = i.dealid), i.adomain && (0, c.N)(n, "meta.advertiserDomains", Array.isArray(i.adomain) ? i.adomain : [i.adomain]), (0, s.Z)(i, "ext.bidder.rp.advid") && (0, c.N)(n, "meta.advertiserId", i.ext.bidder.rp.advid);
                                var p = (0, s.Z)(e, "ext.responsetimemillis.rubicon");
                                if (t && p && (t.serverResponseTimeMs = p), (0, s.Z)(i, "ext.prebid.type") === u.pX) {
                                    n.mediaType = u.pX, (0, c.N)(n, "meta.mediaType", u.pX);
                                    var l = (0, s.Z)(i, "ext.prebid.targeting");
                                    l && "object" === (0, o.Z)(l) && (n.adserverTargeting = l), i.ext.prebid.cache && "object" === (0, o.Z)(i.ext.prebid.cache.vastXml) && i.ext.prebid.cache.vastXml.cacheId && i.ext.prebid.cache.vastXml.url ? (n.videoCacheKey = i.ext.prebid.cache.vastXml.cacheId, n.vastUrl = i.ext.prebid.cache.vastXml.url) : l && l.hb_uuid && l.hb_cache_host && l.hb_cache_path && (n.videoCacheKey = l.hb_uuid, n.vastUrl = "https://".concat(l.hb_cache_host).concat(l.hb_cache_path, "?uuid=").concat(l.hb_uuid)), i.adm && (n.vastXml = i.adm), i.nurl && (n.vastUrl = i.nurl), !n.vastUrl && i.nurl && (n.vastUrl = i.nurl), "outstream" === (0, s.Z)(t, "mediaTypes.video.context").toLowerCase() && (n.renderer = function(e) {
                                        var r = m.Th.install({
                                            id: e.adId,
                                            url: x.rendererUrl || b,
                                            config: x.rendererConfig || {},
                                            loaded: !1,
                                            adUnitCode: e.adUnitCode
                                        });
                                        try {
                                            r.setRender(j)
                                        } catch (e) {
                                            (0, a.logWarn)("Prebid Error calling setRender on renderer", e)
                                        }
                                        return r
                                    }(n))
                                } else(0, a.logWarn)("Rubicon: video response received non-video media type");
                                d.push(n)
                            }))
                        })), d
                    }
                    var p, l = e.ads,
                        v = 0;
                    return "object" !== (0, o.Z)(t) || Array.isArray(t) || "video" !== w(t) || "object" !== (0, o.Z)(l) || (l = l[t.adUnitCode]), !Array.isArray(l) || l.length < 1 ? [] : l.reduce((function(r, n, s) {
                        if (n.impression_id && p === n.impression_id ? v++ : p = n.impression_id, "ok" !== n.status) return r;
                        var c, d, l = Array.isArray(t) ? t[s - v] : t;
                        if (l && "object" === (0, o.Z)(l)) {
                            var m = {
                                requestId: l.bidId,
                                currency: "USD",
                                creativeId: n.creative_id || "".concat(n.network || "", "-").concat(n.advertiser || ""),
                                cpm: n.cpm || 0,
                                dealId: n.deal,
                                ttl: 300,
                                netRevenue: !1 !== x.netRevenue,
                                rubicon: {
                                    advertiserId: n.advertiser,
                                    networkId: n.network
                                },
                                meta: {
                                    advertiserId: n.advertiser,
                                    networkId: n.network,
                                    mediaType: u.Mk
                                }
                            };
                            if (n.creative_type && (m.mediaType = n.creative_type), n.adomain && (m.meta.advertiserDomains = Array.isArray(n.adomain) ? n.adomain : [n.adomain]), n.creative_type === u.pX) m.width = l.params.video.playerWidth, m.height = l.params.video.playerHeight, m.vastUrl = n.creative_depot_url, m.impression_id = n.impression_id, m.videoCacheKey = n.impression_id;
                            else {
                                m.ad = (c = n.script, d = n.impression_id, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(d, "'>\n<script type='text/javascript'>").concat(c, "<\/script>\n</div>\n</body>\n</html>"));
                                var g = y[n.size_id].split("x").map((function(e) {
                                        return Number(e)
                                    })),
                                    f = (0, i.Z)(g, 2);
                                m.width = f[0], m.height = f[1]
                            }
                            m.rubiconTargeting = (Array.isArray(n.targeting) ? n.targeting : []).reduce((function(e, r) {
                                return e[r.key] = r.values[0], e
                            }), {
                                rpfl_elemid: l.adUnitCode
                            }), r.push(m)
                        } else(0, a.logError)("Rubicon: bidRequest undefined at index position:".concat(s), t, e);
                        return r
                    }), []).sort((function(e, r) {
                        return (r.cpm || 0) - (e.cpm || 0)
                    }))
                },
                getUserSyncs: function(e, r, t, i) {
                    if (!S && e.iframeEnabled) {
                        var n = {};
                        return t && ("boolean" == typeof t.gdprApplies && (n.gdpr = Number(t.gdprApplies)), "string" == typeof t.consentString && (n.gdpr_consent = t.consentString)), i && (n.us_privacy = encodeURIComponent(i)), n = Object.keys(n).length ? "?".concat((0, a.formatQS)(n)) : "", S = !0, {
                            type: "iframe",
                            url: "https://".concat(x.syncHost || "eus", ".rubiconproject.com/usync.html") + n
                        }
                    }
                },
                transformBidParams: function(e, r) {
                    return (0, a.convertTypes)({
                        accountId: "number",
                        siteId: "number",
                        zoneId: "number"
                    }, e)
                }
            };

            function _(e, r) {
                var t;
                return t = e.params.referrer ? e.params.referrer : r.refererInfo.page, e.params.secure ? t.replace(/^http:/i, "https:") : t
            }

            function j(e) {
                var r, t = document.getElementById(e.adUnitCode);
                (r = t.querySelector("div[id^='google_ads']")) && r.style.setProperty("display", "none"),
                    function(e) {
                        var r = e.querySelector("script[id^='sas_script']"),
                            t = r && r.nextSibling;
                        t && "iframe" === t.localName && t.style.setProperty("display", "none")
                    }(t);
                var i = e.renderer.getConfig();
                e.renderer.push((function() {
                    window.MagniteApex.renderAd({
                        width: e.width,
                        height: e.height,
                        vastUrl: e.vastUrl,
                        placement: {
                            attachTo: t,
                            align: i.align || "center",
                            position: i.position || "append"
                        },
                        closeButton: i.closeButton || !1,
                        label: i.label || void 0,
                        collapse: i.collapse || !0
                    })
                }))
            }

            function k(e, r) {
                var t = e.params;
                if ("video" === r) {
                    var i = [];
                    return t.video && t.video.playerWidth && t.video.playerHeight ? i = [t.video.playerWidth, t.video.playerHeight] : Array.isArray((0, s.Z)(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && e.sizes.length > 0 && Array.isArray(e.sizes[0]) && e.sizes[0].length > 1 && (i = e.sizes[0]), i
                }
                var n = [];
                return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== (0, s.Z)(e, "mediaTypes.banner.sizes") ? n = C(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && e.sizes.length > 0 ? n = C(e.sizes) : (0, a.logWarn)("Rubicon: no sizes are setup or found"),
                    function(e) {
                        var r = [15, 2, 9];
                        return e.sort((function(e, t) {
                            var i = r.indexOf(e),
                                n = r.indexOf(t);
                            return i > -1 || n > -1 ? -1 === i ? 1 : -1 === n ? -1 : i - n : e - t
                        }))
                    }(n)
            }

            function I(e, r, t) {
                var i = {
                    user: {
                        ext: {
                            data: f({}, e.params.visitor)
                        }
                    },
                    site: {
                        ext: {
                            data: f({}, e.params.inventory)
                        }
                    }
                };
                e.params.keywords && (i.site.keywords = (0, a.isArray)(e.params.keywords) ? e.params.keywords.join(",") : e.params.keywords);
                var n = (0, a.mergeDeep)({}, e.ortb2 || {}, i),
                    c = (0, s.Z)(e.ortb2Imp, "ext") || {},
                    d = (0, s.Z)(e.ortb2Imp, "ext.data") || {},
                    p = (0, s.Z)(e, "ortb2Imp.ext.gpid"),
                    l = {
                        user: [4],
                        site: [1, 2, 5, 6]
                    },
                    m = {
                        user: "tg_v.",
                        site: "tg_i.",
                        adserver: "tg_i.dfp_ad_unit_code",
                        pbadslot: "tg_i.pbadslot",
                        keywords: "kw"
                    },
                    v = function(e, r, t) {
                        return "data" === r && Array.isArray(e) ? e.filter((function(e) {
                            return e.segment && (0, s.Z)(e, "ext.segtax") && l[t] && -1 !== l[t].indexOf((0, s.Z)(e, "ext.segtax"))
                        })).map((function(e) {
                            var r = e.segment.filter((function(e) {
                                return e.id
                            })).reduce((function(e, r) {
                                return e.push(r.id), e
                            }), []);
                            if (r.length > 0) return r.toString()
                        })).toString() : ("object" !== (0, o.Z)(e) || Array.isArray(e)) && void 0 !== e ? Array.isArray(e) ? e.filter((function(e) {
                            if ("object" !== (0, o.Z)(e) && void 0 !== e) return e.toString();
                            (0, a.logWarn)("Rubicon: Filtered value: ", e, "for key", r, ": Expected value to be string, integer, or an array of strings/ints")
                        })).toString() : e.toString() : void 0
                    },
                    g = function(e, r, i) {
                        var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            o = v(e, i, r),
                            a = m[i] && n ? "".concat(m[i]) : "data" === i ? "".concat(m[r], "iab") : "".concat(m[r]).concat(i);
                        t[a] = t[a] ? t[a].concat(",", o) : o
                    };
                r === u.Mk ? (["site", "user"].forEach((function(e) {
                    Object.keys(n[e]).forEach((function(r) {
                        "site" === e && "content" === r && n[e][r].data ? g(n[e][r].data, e, "data") : "ext" !== r ? g(n[e][r], e, r) : n[e][r].data && Object.keys(n[e].ext.data).forEach((function(r) {
                            g(n[e].ext.data[r], e, r, !1)
                        }))
                    }))
                })), Object.keys(d).forEach((function(e) {
                    "adserver" !== e ? g(d[e], "site", e) : "gam" === d[e].name && g(d[e].adslot, name, e)
                })), p && (t.p_gpid = p), t["tg_i.pbadslot"] && delete t["tg_i.dfp_ad_unit_code"]) : (Object.keys(c).length && (0, a.mergeDeep)(t.imp[0].ext, c), p && (t.imp[0].ext.gpid = p), (0, a.mergeDeep)(t, n))
            }

            function C(e) {
                return (0, a.parseSizesInput)(e).reduce((function(e, r) {
                    var t = parseInt(y[r], 10);
                    return t && e.push(t), e
                }), [])
            }

            function Z(e) {
                var r = void 0 !== (0, s.Z)(e, "mediaTypes.".concat(u.pX)),
                    t = void 0 !== (0, s.Z)(e, "mediaTypes.".concat(u.Mk)),
                    i = "object" !== (0, o.Z)((0, s.Z)(e, "params.video"));
                return t && i && (r = !1), r && i && (0, c.N)(e, "params.video", {}), r
            }

            function w(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return Z(e) ? -1 === ["outstream", "instream"].indexOf((0, s.Z)(e, "mediaTypes.".concat(u.pX, ".context"))) ? void(r && (0, a.logError)("Rubicon: mediaTypes.video.context must be outstream or instream")) : k(e, "video").length < 2 ? void(r && (0, a.logError)("Rubicon: could not determine the playerSize of the video")) : (r && (0, a.logMessage)("Rubicon: making video request for adUnit", e.adUnitCode), "video") : 0 === k(e, "banner").length ? void(r && (0, a.logError)("Rubicon: could not determine the sizes for banner request")) : (r && (0, a.logMessage)("Rubicon: making banner request for adUnit", e.adUnitCode), "banner")
            }

            function A(e) {
                var r = !1,
                    t = ["asi", "sid", "hp"];
                return e.nodes ? ((r = e.nodes.reduce((function(e, r) {
                    return e ? t.every((function(e) {
                        return r.hasOwnProperty(e)
                    })) : e
                }), !0)) || (0, a.logError)("Rubicon: required schain params missing"), r) : r
            }

            function O(e, r) {
                return "rp_schain" === e ? "rp_schain=".concat(r) : "".concat(e, "=").concat(encodeURIComponent(r))
            }
            var S = !1;
            (0, d.dX)(h), window.epbjs.installedModules.push("rubiconBidAdapter")
        }
    },
    function(e) {
        var r;
        r = 40060, e(e.s = r)
    }
]);
(self.epbjsChunk = self.epbjsChunk || []).push([
    [5337], {
        4192: function(e, t, r) {
            r.d(t, {
                HQ: function() {
                    return c
                },
                Pv: function() {
                    return u
                },
                UR: function() {
                    return a
                }
            });
            var n = r(64358),
                i = r(20265),
                a = {
                    trustpid: {
                        source: "trustpid.com",
                        atype: 1,
                        getValue: function(e) {
                            return e
                        }
                    },
                    intentIqId: {
                        source: "intentiq.com",
                        atype: 1
                    },
                    naveggId: {
                        source: "navegg.com",
                        atype: 1
                    },
                    justId: {
                        source: "justtag.com",
                        atype: 1
                    },
                    pubcid: {
                        source: "pubcid.org",
                        atype: 1
                    },
                    tdid: {
                        source: "adserver.org",
                        atype: 1,
                        getUidExt: function() {
                            return {
                                rtiPartner: "TDID"
                            }
                        }
                    },
                    id5id: {
                        getValue: function(e) {
                            return e.uid
                        },
                        source: "id5-sync.com",
                        atype: 1,
                        getUidExt: function(e) {
                            if (e.ext) return e.ext
                        }
                    },
                    ftrackId: {
                        source: "flashtalking.com",
                        atype: 1,
                        getValue: function(e) {
                            var t = "";
                            return e.DeviceID && (t = e.DeviceID.join(",")), t
                        },
                        getUidExt: function(e) {
                            return "DeviceID"
                        }
                    },
                    parrableId: {
                        source: "parrable.com",
                        atype: 1,
                        getValue: function(e) {
                            return e.eid ? e.eid : e.ccpaOptout ? "" : null
                        },
                        getUidExt: function(e) {
                            var t = (0, n.pick)(e, ["ibaOptout", "ccpaOptout"]);
                            if (Object.keys(t).length) return t
                        }
                    },
                    idl_env: {
                        source: "liveramp.com",
                        atype: 3
                    },
                    lipb: {
                        getValue: function(e) {
                            return e.lipbid
                        },
                        source: "liveintent.com",
                        atype: 3,
                        getEidExt: function(e) {
                            if (Array.isArray(e.segments) && e.segments.length) return {
                                segments: e.segments
                            }
                        }
                    },
                    britepoolid: {
                        source: "britepool.com",
                        atype: 3
                    },
                    dmdId: {
                        source: "hcn.health",
                        atype: 3
                    },
                    lotamePanoramaId: {
                        source: "crwdcntrl.net",
                        atype: 1
                    },
                    criteoId: {
                        source: "criteo.com",
                        atype: 1
                    },
                    merkleId: {
                        atype: 3,
                        getSource: function(e) {
                            var t;
                            return null != e && null !== (t = e.ext) && void 0 !== t && t.ssp ? "".concat(e.ext.ssp, ".merkleinc.com") : "merkleinc.com"
                        },
                        getValue: function(e) {
                            return e.id
                        },
                        getUidExt: function(e) {
                            return e.keyID ? {
                                keyID: e.keyID
                            } : e.ext ? e.ext : void 0
                        }
                    },
                    netId: {
                        source: "netid.de",
                        atype: 1
                    },
                    IDP: {
                        source: "zeotap.com",
                        atype: 1
                    },
                    hadronId: {
                        source: "audigent.com",
                        atype: 1
                    },
                    quantcastId: {
                        source: "quantcast.com",
                        atype: 1
                    },
                    idx: {
                        source: "idx.lat",
                        atype: 1
                    },
                    connectid: {
                        source: "verizonmedia.com",
                        atype: 3
                    },
                    fabrickId: {
                        source: "neustar.biz",
                        atype: 1
                    },
                    mwOpenLinkId: {
                        source: "mediawallahscript.com",
                        atype: 1
                    },
                    tapadId: {
                        source: "tapad.com",
                        atype: 1
                    },
                    novatiq: {
                        getValue: function(e) {
                            return e.snowflake
                        },
                        source: "novatiq.com",
                        atype: 1
                    },
                    uid2: {
                        source: "uidapi.com",
                        atype: 3,
                        getValue: function(e) {
                            return e.id
                        }
                    },
                    deepintentId: {
                        source: "deepintent.com",
                        atype: 3
                    },
                    admixerId: {
                        source: "admixer.net",
                        atype: 3
                    },
                    adtelligentId: {
                        source: "adtelligent.com",
                        atype: 3
                    },
                    amxId: {
                        source: "amxrtb.com",
                        atype: 1
                    },
                    publinkId: {
                        source: "epsilon.com",
                        atype: 3
                    },
                    kpuid: {
                        source: "kpuid.com",
                        atype: 3
                    },
                    imppid: {
                        source: "ppid.intimatemerger.com",
                        atype: 1
                    },
                    imuid: {
                        source: "intimatemerger.com",
                        atype: 1
                    },
                    connectId: {
                        source: "yahoo.com",
                        atype: 3
                    },
                    qid: {
                        source: "adquery.io",
                        atype: 1
                    },
                    dacId: {
                        source: "impact-ad.jp",
                        atype: 1
                    },
                    "33acrossId": {
                        source: "33across.com",
                        atype: 1,
                        getValue: function(e) {
                            return e.envelope
                        }
                    },
                    tncid: {
                        source: "thenewco.it",
                        atype: 3
                    },
                    gravitompId: {
                        source: "gravito.net",
                        atype: 1
                    },
                    cpexId: {
                        source: "czechadid.cz",
                        atype: 1
                    },
                    oneKeyData: {
                        getValue: function(e) {
                            if (e && Array.isArray(e.identifiers) && e.identifiers[0]) return e.identifiers[0].value
                        },
                        source: "paf",
                        atype: 1,
                        getEidExt: function(e) {
                            if (e && e.preferences) return {
                                preferences: e.preferences
                            }
                        },
                        getUidExt: function(e) {
                            if (e && Array.isArray(e.identifiers) && e.identifiers[0]) {
                                var t = e.identifiers[0];
                                return {
                                    version: t.version,
                                    type: t.type,
                                    source: t.source
                                }
                            }
                        }
                    }
                };

            function o(e, t) {
                var r = a[t];
                if (r && e) {
                    var i = {};
                    i.source = (0, n.isFn)(r.getSource) ? r.getSource(e) : r.source;
                    var o = (0, n.isFn)(r.getValue) ? r.getValue(e) : e;
                    if ((0, n.isStr)(o)) {
                        var c = {
                            id: o,
                            atype: r.atype
                        };
                        if ((0, n.isFn)(r.getUidExt)) {
                            var u = r.getUidExt(e);
                            u && (c.ext = u)
                        }
                        if (i.uids = [c], (0, n.isFn)(r.getEidExt)) {
                            var d = r.getEidExt(e);
                            d && (i.ext = d)
                        }
                        return i
                    }
                }
                return null
            }

            function c(e) {
                var t = [],
                    r = function(r) {
                        if (e.hasOwnProperty(r))
                            if ("pubProvidedId" === r) t = t.concat(e.pubProvidedId);
                            else if ("ftrackId" === r) {
                            var n = {
                                atype: 1,
                                id: (e.ftrackId.DeviceID || []).join("|"),
                                ext: {}
                            };
                            for (var i in e.ftrackId) n.ext[i] = (e.ftrackId[i] || []).join("|");
                            t.push(n)
                        } else if (Array.isArray(e[r])) e[r].forEach((function(e, n, i) {
                            var a = o(e, r);
                            a && t.push(a)
                        }));
                        else {
                            var a = o(e[r], r);
                            a && t.push(a)
                        }
                    };
                for (var n in e) r(n);
                return t
            }

            function u(e) {
                var t = [];
                return e.filter((function(e) {
                    return (0, n.isPlainObject)(e.idObj) && Object.keys(e.idObj).length
                })).forEach((function(e) {
                    Object.keys(e.idObj).forEach((function(r) {
                        (0, i.Z)(e, "config.bidders") && Array.isArray(e.config.bidders) && (0, i.Z)(a, r + ".source") && t.push({
                            source: a[r].source,
                            bidders: e.config.bidders
                        })
                    }))
                })), t
            }
        },
        55511: function(e, t, r) {
            var n = r(71002),
                i = r(64358),
                a = r(20265),
                o = r(96475),
                c = r(24679),
                u = r(14699),
                d = r(35706),
                s = r(34614),
                p = r(4192),
                f = "USD",
                m = 300,
                l = !0,
                y = "https://ads.yieldmo.com/exchange/prebid",
                v = "https://ads.yieldmo.com/pbcas",
                g = "https://prebid-outstream.yieldmo.com/bundle.js",
                b = ["mimes", "startdelay", "placement", "startdelay", "skipafter", "protocols", "api", "playbackmethod", "maxduration", "minduration", "pos", "skip", "skippable"],
                h = ["name", "domain", "cat", "keywords"],
                I = (0, i.getWindowTop)(),
                x = ["description", "title", "pr", "page_url"],
                k = {
                    code: "yieldmo",
                    supportedMediaTypes: [c.Mk, c.pX],
                    isBidRequestValid: function(e) {
                        return !!(e && e.adUnitCode && e.bidId && (w(e) || E(e)) && function(e) {
                            if (!E(e)) return !0;
                            var t = function(e, t, r) {
                                    var n = '"'.concat(e, '" is required');
                                    throw r && (n += " when " + r), new Error(n)
                                },
                                r = function(e, t, r) {
                                    throw r = r ? ", expected: " + r : "", t = JSON.stringify(t), new Error('"'.concat(e, '"=').concat(t, " is invalid").concat(r))
                                },
                                n = function(e) {
                                    return void 0 !== e
                                },
                                o = function(t, r, n, i) {
                                    if (0 === t.indexOf("video")) {
                                        var o = "params." + t,
                                            c = "mediaTypes." + t,
                                            u = (0, a.Z)(e, o),
                                            d = (0, a.Z)(e, c),
                                            s = r(u),
                                            p = r(d);
                                        return s ? u : p || (s ? p || n(c, d, i) : n(o, u, i), u || d)
                                    }
                                    var f = (0, a.Z)(e, t);
                                    return r(f) || n(t, f, i), f
                                };
                            try {
                                o("video.context", (function(e) {
                                    return !(0, i.isEmpty)(e)
                                }), t), o("params.placementId", (function(e) {
                                    return !(0, i.isEmpty)(e)
                                }), t), o("video.playerSize", (function(e) {
                                    return (0, i.isArrayOfNums)(e, 2) || (0, i.isArray)(e) && e.every((function(e) {
                                        return (0, i.isArrayOfNums)(e, 2)
                                    }))
                                }), r, "array of 2 integers, ex: [640,480] or [[640,480]]"), o("video.mimes", (function(e) {
                                    return n(e)
                                }), t), o("video.mimes", (function(e) {
                                    return (0, i.isArray)(e) && e.every((function(e) {
                                        return (0, i.isStr)(e)
                                    }))
                                }), r, 'array of strings, ex: ["video/mp4"]');
                                var c = o("video.placement", (function(e) {
                                    return n(e)
                                }), t);
                                return o("video.placement", (function(e) {
                                    return e >= 1 && e <= 5
                                }), r), 1 === c && (o("video.startdelay", (function(e) {
                                    return n(e)
                                }), (function(e, r) {
                                    return t(e, r, "placement == 1")
                                })), o("video.startdelay", (function(e) {
                                    return (0, i.isNumber)(e)
                                }), r, "number, ex: 5")), o("video.protocols", (function(e) {
                                    return n(e)
                                }), t), o("video.protocols", (function(e) {
                                    return (0, i.isArrayOfNums)(e) && e.every((function(e) {
                                        return e >= 1 && e <= 6
                                    }))
                                }), r, "array of numbers, ex: [2,3]"), o("video.api", (function(e) {
                                    return n(e)
                                }), t), o("video.api", (function(e) {
                                    return (0, i.isArrayOfNums)(e) && e.every((function(e) {
                                        return e >= 1 && e <= 6
                                    }))
                                }), r, "array of numbers, ex: [2,3]"), o("video.playbackmethod", (function(e) {
                                    return !n(e) || (0, i.isArrayOfNums)(e)
                                }), r, "array of integers, ex: [2,6]"), o("video.maxduration", (function(e) {
                                    return n(e)
                                }), t), o("video.maxduration", (function(e) {
                                    return (0, i.isInteger)(e)
                                }), r), o("video.minduration", (function(e) {
                                    return !n(e) || (0, i.isNumber)(e)
                                }), r), o("video.skippable", (function(e) {
                                    return !n(e) || (0, i.isBoolean)(e)
                                }), r), o("video.skipafter", (function(e) {
                                    return !n(e) || (0, i.isNumber)(e)
                                }), r), o("video.pos", (function(e) {
                                    return !n(e) || (0, i.isNumber)(e)
                                }), r), o("params.badv", (function(e) {
                                    return !n(e) || (0, i.isArray)(e)
                                }), r, 'array of strings, ex: ["ford.com","pepsi.com"]'), o("params.bcat", (function(e) {
                                    return !n(e) || (0, i.isArray)(e)
                                }), r, 'array of strings, ex: ["IAB1-5","IAB1-6"]'), !0
                            } catch (e) {
                                return (0, i.logError)(e.message), !1
                            }
                        }(e))
                    },
                    buildRequests: function(e, t) {
                        var r = e.filter((function(e) {
                                return w(e)
                            })),
                            n = e.filter((function(e) {
                                return E(e)
                            })),
                            u = [],
                            d = function(e) {
                                if ((0, a.Z)(e, "userId")) return (0, p.HQ)(e.userId) || []
                            }(e[0]) || [];
                        if (r.length > 0) {
                            var f = {
                                pbav: "7.17.0",
                                p: [],
                                page_url: t.refererInfo.page,
                                bust: (new Date).getTime().toString(),
                                dnt: "1" === window.doNotTrack || "1" === window.navigator.doNotTrack || !1,
                                description: A(),
                                userConsent: JSON.stringify({
                                    gdprApplies: (0, a.Z)(t, "gdprConsent.gdprApplies") || "",
                                    cmp: (0, a.Z)(t, "gdprConsent.consentString") || ""
                                }),
                                us_privacy: (0, a.Z)(t, "uspConsent") || ""
                            };
                            (function() {
                                try {
                                    if ((0, i.getWindowTop)().location.href) return !0
                                } catch (e) {
                                    return !1
                                }
                            })() && (f.pr = I.document && I.document.referrer || "", f.scrd = I.devicePixelRatio || 0, f.title = I.document.title || "", f.w = I.innerWidth, f.h = I.innerHeight);
                            var m = window.navigator.maxTouchPoints;
                            m && (f.mtp = m), r.forEach((function(e) {
                                f.p.push(function(e) {
                                    var t = (0, a.Z)(e, "ortb2Imp.ext.data.pbadslot"),
                                        r = {
                                            placement_id: e.adUnitCode,
                                            callback_id: e.bidId,
                                            sizes: e.mediaTypes.banner.sizes
                                        };
                                    if (e.params) {
                                        e.params.placementId && (r.ym_placement_id = e.params.placementId);
                                        var n = Z(e, c.Mk);
                                        n && (r.bidFloor = n)
                                    }
                                    t && (r.gpid = t);
                                    var i = (0, a.Z)(e, "ortb2Imp.ext.tid");
                                    i && (r.tid = i);
                                    e.auctionId && (r.auctionId = e.auctionId);
                                    return JSON.stringify(r)
                                }(e));
                                var t = O(e, "pubcid");
                                t ? f.pubcid = t : e.crumbs && e.crumbs.pubcid && (f.pubcid = e.crumbs.pubcid);
                                var r = O(e, "tdid");
                                r && (f.tdid = r);
                                var n = O(e, "criteoId");
                                n && (f.cri_prebid = n), e.schain && (f.schain = JSON.stringify(e.schain)), (0, a.Z)(e, "params.lr_env") && (f.ats_envelope = e.params.lr_env)
                            })), f.p = "[" + f.p.toString() + "]", d.length && (f.eids = JSON.stringify(d));
                            var l = "".concat(y, "?").concat((0, i.parseQueryStringParameters)(f)).length - 8e3;
                            if (l > 0)
                                for (var v = 0; v < x.length && !((l = N(l, f, x[v])) <= 0); v++);
                            u.push({
                                method: "GET",
                                url: y,
                                data: f
                            })
                        }
                        if (n.length > 0) {
                            var g = function(e, t) {
                                var r = e[0].schain,
                                    n = {
                                        id: e[0].bidderRequestId,
                                        at: 1,
                                        imp: e.map((function(e) {
                                            return function(e) {
                                                var t = (0, a.Z)(e, "ortb2Imp.ext.data.pbadslot"),
                                                    r = function(e) {
                                                        var t = (0, a.Z)(e, "mediaTypes.video.playerSize");
                                                        if ((0, i.isArrayOfNums)(t, 2)) return t;
                                                        if ((0, i.isArray)(t) && (0, i.isArrayOfNums)(t[0], 2)) return t[0];
                                                        return null
                                                    }(e),
                                                    n = {
                                                        id: e.bidId,
                                                        tagid: e.adUnitCode,
                                                        bidfloor: Z(e, c.pX),
                                                        ext: {
                                                            placement_id: e.params.placementId,
                                                            tid: (0, a.Z)(e, "ortb2Imp.ext.tid")
                                                        },
                                                        video: {
                                                            w: r[0],
                                                            h: r[1],
                                                            linearity: 1
                                                        }
                                                    },
                                                    o = (0, a.Z)(e, "mediaTypes.video");
                                                Object.keys(o).filter((function(e) {
                                                    return (0, s.q9)(b, e)
                                                })).forEach((function(e) {
                                                    return n.video[e] = o[e]
                                                }));
                                                var u = (0, a.Z)(e, "params.video");
                                                Object.keys(u).filter((function(e) {
                                                    return (0, s.q9)(b, e)
                                                })).forEach((function(e) {
                                                    return n.video[e] = u[e]
                                                })), n.video.skippable && (n.video.skip = 1, delete n.video.skippable);
                                                1 !== n.video.placement && (n.video.startdelay = 0, n.video.playbackmethod = [2]);
                                                t && (n.ext.gpid = t);
                                                return n
                                            }(e)
                                        })),
                                        site: T(e[0], t),
                                        device: S(e[0]),
                                        badv: e[0].params.badv || [],
                                        bcat: (0, a.Z)(t, "bcat") || e[0].params.bcat || [],
                                        ext: {
                                            prebid: "7.17.0"
                                        },
                                        ats_envelope: e[0].params.lr_env
                                    };
                                r && (n.schain = r);
                                e[0].auctionId && (n.auctionId = e[0].auctionId);
                                return function(e, t) {
                                    var r = t.gdprConsent;
                                    r && "gdprApplies" in r && ((0, o.N)(e, "regs.ext.gdpr", r.gdprApplies ? 1 : 0), (0, o.N)(e, "user.ext.consent", r.consentString));
                                    var n = (0, a.Z)(t, "uspConsent");
                                    n && (0, o.N)(e, "regs.ext.us_privacy", n)
                                }(n, t), n
                            }(n, t);
                            d.length && (g.user = {
                                eids: d
                            }), u.push({
                                method: "POST",
                                url: "https://ads.yieldmo.com/exchange/prebidvideo",
                                data: g
                            })
                        }
                        return u
                    },
                    interpretResponse: function(e, t) {
                        var r = [],
                            n = e.body;
                        (n.length > 0 && n.forEach((function(e) {
                            e.cpm > 0 && r.push(function(e) {
                                return {
                                    dealId: e.publisherDealId,
                                    requestId: e.callback_id,
                                    cpm: e.cpm,
                                    width: e.width,
                                    height: e.height,
                                    creativeId: e.creative_id,
                                    currency: f,
                                    netRevenue: l,
                                    ttl: 300,
                                    ad: e.ad,
                                    meta: {
                                        advertiserDomains: e.adomain || [],
                                        mediaType: c.Mk
                                    }
                                }
                            }(e))
                        })), n.seatbid) && n.seatbid.reduce((function(e, t) {
                            return e.concat(t.bid)
                        }), []).forEach((function(e) {
                            return r.push(function(e, t) {
                                var r = (0, s.sE)((0, a.Z)(t, "data.imp") || [], (function(t) {
                                        return t.id === e.impid
                                    })),
                                    n = {
                                        dealId: e.dealid,
                                        requestId: r.id,
                                        cpm: e.price,
                                        width: r.video.w,
                                        height: r.video.h,
                                        creativeId: e.crid || e.adid,
                                        currency: f,
                                        netRevenue: l,
                                        mediaType: c.pX,
                                        ttl: m,
                                        vastXml: e.adm,
                                        meta: {
                                            advertiserDomains: e.adomain || [],
                                            mediaType: c.pX
                                        }
                                    };
                                if (r.video.placement && 1 !== r.video.placement) {
                                    var i = d.Th.install({
                                        url: g,
                                        config: {
                                            width: n.width,
                                            height: n.height,
                                            vastTimeout: 15e3,
                                            maxAllowedVastTagRedirects: 5,
                                            allowVpaid: !0,
                                            autoPlay: !0,
                                            preload: !0,
                                            mute: !0
                                        },
                                        id: r.tagid,
                                        loaded: !1
                                    });
                                    i.setRender((function(e) {
                                        e.renderer.push((function() {
                                            var t = e.renderer,
                                                r = t.id,
                                                n = t.config;
                                            window.YMoutstreamPlayer(e, r, n)
                                        }))
                                    })), n.renderer = i
                                }
                                return n
                            }(e, t))
                        }));
                        return r
                    },
                    getUserSyncs: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                            i = [],
                            a = "&gdpr=".concat(r.gdprApplies ? 1 : 0),
                            o = "&gdpr_consent=".concat(encodeURIComponent(r.consentString || "")),
                            c = "us_privacy=".concat(encodeURIComponent(n)),
                            u = "".concat(v, "?").concat(c).concat(a).concat(o);
                        return e.iframeEnabled ? i.push({
                            type: "iframe",
                            url: u + "&type=iframe"
                        }) : e.pixelEnabled && i.push({
                            type: "image",
                            url: u + "&type=image"
                        }), i
                    }
                };

            function w(e) {
                return !!(0, a.Z)(e, "mediaTypes.banner")
            }

            function E(e) {
                return !!(0, a.Z)(e, "mediaTypes.video")
            }

            function A() {
                return document.querySelector('meta[name="description"]') && document.querySelector('meta[name="description"]').getAttribute("content") || ""
            }

            function O(e, t) {
                return "object" === (0, n.Z)((0, a.Z)(e, "userId")) ? e.userId[t] : void 0
            }

            function Z(e, t) {
                var r = {};
                return "function" == typeof e.getFloor && (r = e.getFloor({
                    currency: f,
                    mediaType: t,
                    size: "*"
                })), r.floor || e.params.bidfloor || e.params.bidFloor || 0
            }

            function T(e, t) {
                var r, n = {},
                    o = (0, i.parseUrl)((0, a.Z)(t, "refererInfo.page"));
                (0, i.isEmpty)(o) || (n.page = "".concat(o.protocol, "://").concat(o.hostname).concat(o.pathname)), null !== (r = t.refererInfo) && void 0 !== r && r.ref && (n.ref = t.refererInfo.ref);
                var c = document.getElementsByTagName("meta").keywords;
                c && c.content && (n.keywords = c.content);
                var u = (0, a.Z)(e, "params.site");
                return u && Object.keys(u).filter((function(e) {
                    return (0, s.q9)(h, e)
                })).forEach((function(e) {
                    return n[e] = u[e]
                })), n
            }

            function S(e) {
                return {
                    ua: navigator.userAgent,
                    language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
                }
            }

            function N(e, t, r) {
                if (t[r].length > e) return t[r] = t[r].substring(0, t[r].length - e), 0;
                var n = e - t[r].length;
                return t[r] = "", n
            }(0, u.dX)(k), window.epbjs.installedModules.push("yieldmoBidAdapter")
        }
    },
    function(e) {
        var t;
        t = 55511, e(e.s = t)
    }
]);
epbjs.processQueue();