var ezoScriptHost = '//www.nicesnippets.com';
var IL11ILILIIlLLLILILLLLIILLLIIL11111LLILiiLIliLlILlLiiLLIiILL;
! function() {
    var e = {
            683: function(e, t, o) {
                function i(e) {
                    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, i(e)
                }
                var EzoicA = o(826),
                    EzoicBanger = function() {};
                EzoicBanger.prototype.init = function() {
                    var e = this;
                    this.initVars(), window.addEventListener("load", (function() {
                        1 != window.ezoll && e.SetTimeout((function() {
                            e.loadFunc()
                        }), 5e3)
                    })), void 0 !== window.ezRecordTimeViewed && 1 == window.ezRecordTimeViewed && this.SetTimeout((function() {
                        e.recordTimeViewedFunc()
                    }), 1e4)
                }, EzoicBanger.prototype.destroy = function() {
                    this.ClearIntervalAndTimeout(), window.removeEventListener("load", this.loadFunc)
                }, EzoicBanger.prototype.initVars = function() {
                    this.l111LlLIIIl1lLIl1LLl = {}, this.llIl111Il1LI11LIL1LlLll1L1 = {}, this.lI1LLLL1ILIl111lLIlILl1l1Ill1lL = {}, this.lII1LLLL1L11llIl1I1I1LlL11L1 = {}, this.slot_visibility = {}, this.slot_visible_start = {}, this.slot_visible_total = {}, this.l1llLl1LI1Ll1LIlI1I1III1 = {}, this.ll1II1IIL1Llll11l = {}, this.ll1lI1Ill1IIlL111lLI1 = [], this.l1lI1lLlLIII1lIILI1LlI1l1II11 = {}, this.llI11LI1LL1LLlIlIIIlLLII1lI = {}, this.l1LLII1LLLILL11lIlIII = 0, this.slots_loaded = {}, this.anchor_slots = [], this.llI1ILll1ll1lIL = 0, this.disable_refresh_slots = {}, this.ads_loaded = 0, this.initial_ad_positions_stored = !1, this.llI11LI1LL1LLlIlIIIlLLII1lI_stored = {}, this.ll1l1lLLL1Ill1lL1ll = {}, this.ll1l1lLLL1Ill1lL1ll_keys = [], this.l1LLIIlLILIl1lILl1LlLI1I = {}, this.intervalIds = [], this.timeoutIds = [], this.bfh = {}, this.slots_waiting_for_refresh = [], this.slots_stored_sizes = {}, this.ad_style_order = ["[300,250]", "[728,90]", "[320,100]", "[250,250]", "[320,50]", "[970,90]", "[336,280]", "[580,400]", "[468,60]", "[300,600]", "[970,250]", "[160,600]"], this.destroySlotsCallback = null, window.ezowwinit = !1
                }, EzoicBanger.prototype.loadFunc = function() {
                    this.lIl1LLL1L1I111Il1l1(), this.llIll1LLllI1l11l1L1lLII11I(), this.lllLLl1IIlI1I11lI(), this.l1LlllllllLL1l1LIlIlL1LLI()
                }, EzoicBanger.prototype.recordTimeViewedFunc = function() {
                    var e = this;
                    Date.now();
                    for (var t in window.ezslots)
                        if (!isNaN(parseInt(t))) {
                            var o = window[ezslots[t]],
                                i = o.getSlotElementId(),
                                n = window.ezGetSlotViewedTime(o, !1);
                            n > 1e4 && n < 12e3 && null !== this.slot_visibility[i] && this.slot_visibility[i] > 50 && 0 == isNaN(n) && (!0 === window.usePixelWorker ? window.ezopixel.postMessage(JSON.parse(JSON.stringify(["pel_add", {
                                eventName: "viewed_time",
                                eventValue: n,
                                slot: o
                            }]))) : __ez.pel.AddAndFire(o, [new __ezDotData("viewed_time", n)]))
                        }
                    this.SetTimeout((function() {
                        e.recordTimeViewedFunc()
                    }), 2e3)
                }, EzoicBanger.prototype.lLlLlLIIII1lILIlL = function(e) {
                    this.SendMessage(["ad_loaded", e]), void 0 === __ez.fart && void 0 !== __ez.stms && (__ez.fart = Date.now() - __ez.stms, __ez.bit.AddAndFire(window._ezaq.page_view_id, [new __ezDotData("timer_first_ad_request", __ez.fart)]))
                }, EzoicBanger.prototype.isOwnedAd = function(e) {
                    try {
                        var t = e.slot.getTargeting("ap")[0]
                    } catch (e) {}
                    return void 0 !== t && 0 != t.length
                }, EzoicBanger.prototype.StoreAuctionData = function(e, t) {
                    __ez.aucep.Add(e.slot, t), __ez.aucep.Fire()
                }, EzoicBanger.prototype.RemoveLoadingIcon = function(e) {
                    var t = document.getElementById(e.getSlotElementId());
                    null != t && setTimeout((function() {
                        t.classList.remove("ezoic-adl")
                    }), 40)
                }, EzoicBanger.prototype.ShowAdCloseButton = function(e) {
                    var t = e.getTargeting("al") % 1e3;
                    buttonElem = document.getElementById({
                        5: "ezmob-footer-close",
                        38: "ez-rail-close-left",
                        39: "ez-rail-close-right"
                    }[t]), null != buttonElem && (buttonElem.style.visibility = "visible")
                }, EzoicBanger.prototype.CollapseAd = function(e) {
                    this.CollapseFire(e);
                    var t = document.getElementById(e.ElementId);
                    if (null != t) {
                        var o = window.scrollY + window.innerHeight + 500,
                            i = t.offsetTop;
                        if ("function" == typeof window.ezoChar)
                            if (e.setTargeting("reft", "n"), i <= o)
                                if (!0 === window.ezoChar(e, t)) {
                                    var n = t.parentNode.querySelector(".ezoic-ad-disclosure");
                                    return void(null != n && n.style.setProperty("display", "none", "important"))
                                }
                        if (t.parentNode.style.setProperty("display", "none", "important"), 5 == e.getTargeting("al")[0] % 1e3) {
                            var s = document.getElementById("ezoicCSS");
                            if (!s) return;
                            for (var r = s.sheet ? s.sheet : s.styleSheet, a = 0; a < r.cssRules.length; a++) {
                                var d = r.cssRules[a];
                                "body" !== d.selectorText || "auto" !== d.style.height || "" === d.style.paddingTop && "" === d.style.paddingBottom || r.deleteRule(a)
                            }
                        }
                    }
                }, EzoicBanger.prototype.CollapseFire = function(e) {
                    var t = parseInt(e.Targeting.ic);
                    0 == isNaN(t) && (!0 === window.usePixelWorker ? window.ezopixel.pel({
                        slot: e,
                        eventName: "refresh_count",
                        eventValue: t
                    }) : __ez.pel.AddAndFire(e, [new __ezDotData(["refresh_count", t])]))
                }, EzoicBanger.prototype.lIl1LLL1L1I111Il1l1 = function() {
                    var e = this,
                        t = 50;
                    if (this.l1LLII1LLLILL11lIlIII > 100 && (t = 10 * this.l1LLII1LLLILL11lIlIII), this.l1LLII1LLLILL11lIlIII++, "undefined" == typeof googletag || 1 != googletag.pubadsReady || void 0 === window.ezslots || googletag.pubads().getSlots().length < window.ezslots.length) this.SetTimeout((function() {
                        "function" == typeof e.lIl1LLL1L1I111Il1l1 && e.lIl1LLL1L1I111Il1l1()
                    }), t);
                    else {
                        var o = 0;
                        for (var i in window.ezslots)
                            if (!isNaN(parseInt(i))) {
                                var n = window[ezslots[i]],
                                    s = (n.getTargeting("ap")[0], n.getTargeting("al")[0]),
                                    r = document.getElementById(n.getSlotElementId());
                                if (2005 == s || 3005 == s) {
                                    var a = {
                                        top: 1,
                                        bottom: 1,
                                        left: 0
                                    }; - 1 == this.anchor_slots.indexOf(n.getSlotElementId()) && this.anchor_slots.push(n.getSlotElementId())
                                } else if (null != r) {
                                    a = this.lILIl11LLLLlLlLllLLllI1(r);
                                    var d = this.lI1L11Ill11lLILL1LlL(n);
                                    a.bottom = a.top + d[1], a.right = a.left + d[0]
                                } else a = null;
                                void 0 !== a && null != a && parseInt(a.top) >= 0 && (o += 1, this.llI11LI1LL1LLlIlIIIlLLII1lI[n.getSlotElementId()] = a, this.ll1II1IIL1Llll11l[n.getSlotElementId()] = a.top)
                            }
                        this.ll1IlIILl1l1l111Il1IlLIL1lII(), o < window.ezslots.length && this.SetTimeout((function() {
                            e.lIl1LLL1L1I111Il1l1()
                        }), t)
                    }
                }, EzoicBanger.prototype.l11LIlllLllllII = function(e) {
                    return e = (e /= 100) <= 0 ? 0 : e <= 1 ? 10 * Math.floor(10 * e + .5) : e <= 3 ? 20 * Math.floor(100 * e / 20 + .5) : e <= 10 ? 50 * Math.floor(100 * e / 50 + .5) : e <= 30 ? 100 * Math.floor(100 * e / 100 + .5) : e <= 50 ? 200 * Math.floor(100 * e / 200 + .5) : e <= 120 ? 500 * Math.floor(100 * e / 500 + .5) : 1e3 * Math.floor(100 * e / 1e3 + .5)
                }, EzoicBanger.prototype.lILIl11LLLLlLlLllLLllI1 = function(e) {
                    if (null == e) return {
                        top: -1,
                        left: -1,
                        isFloating: !1
                    };
                    if (null != e.style && "none" == e.style.display) {
                        for (; null != e && null != e.style && "none" == e.style.display;) e = e.parentNode;
                        for (var t = e.childNodes, o = 0; o < t.length; o++)
                            if (1 === t[o].nodeType && (adunitname = t[o].getAttribute("adunitname"), null != adunitname && "" !== adunitname)) {
                                e = t[o];
                                break
                            }
                    }
                    var i = 0,
                        n = 0,
                        s = 0;
                    do {
                        if (s += 1, i += e.offsetTop || 0, n += e.offsetLeft || 0, s <= 5 && "fixed" === getComputedStyle(e).position) {
                            var r = e.getBoundingClientRect();
                            return {
                                top: r.top,
                                left: r.left,
                                isFloating: !0
                            }
                        }
                        if (null == e.offsetParent && "BODY" !== e.tagName.toUpperCase()) return {
                            top: -1,
                            left: -1,
                            isFloating: !1
                        };
                        e = e.offsetParent
                    } while (e);
                    return {
                        top: i,
                        left: n,
                        isFloating: !1
                    }
                }, EzoicBanger.prototype.GetSlotByHBID = function(e) {
                    for (var t in window.ezslots) {
                        var o = window[ezslots[t]];
                        if (o.getTargeting("hd_adid")[0] == e) return o
                    }
                }, EzoicBanger.prototype.GetNameFromPositionId = function(e) {
                    for (var t in window.ezslots) {
                        var o = window[ezslots[t]];
                        if (o.getTargeting("ap")[0] == e || o.getTargeting("ap") == e) return o.getAdUnitPath()
                    }
                }, EzoicBanger.prototype.GetSlotFromKV = function(e, t) {
                    for (var o in window.ezslots) {
                        var i = window[ezslots[o]];
                        if (i.getTargeting(e)[0] == t || i.getTargeting(e) == t) return i
                    }
                }, EzoicBanger.prototype.lLIILl1L1LIIIll11IlIIll1Ill1 = function(e) {
                    for (slot in slots = googletag.pubads().getSlots(), slots)
                        if (slots[slot].getAdUnitPath() == e) return slots[slot]
                }, EzoicBanger.prototype.GetSlotById = function(e) {
                    for (slot in slots = googletag.pubads().getSlots(), slots)
                        if (slots[slot].getSlotElementId() == e) return slots[slot]
                }, EzoicBanger.prototype.GetEzoicSlotById = function(e) {
                    for (slot in slots = googletag.pubads().getSlots(), slots)
                        if (slots[slot].getSlotElementId() == e) {
                            var t = {
                                    slot: slots[slot]
                                },
                                o = new EzoicA;
                            return o.Create(t, !0), o
                        }
                }, EzoicBanger.prototype.llllLl1LllLlLIll1I = function(e) {
                    return e.getAdUnitPath().split("/").pop()
                }, EzoicBanger.prototype.lIlILllL1L1Ll1L1I1II11lI = function(e) {
                    var t = this.GetEzimKeyFromSlot(e);
                    if ("object" === ("undefined" == typeof _ezim_d ? "undefined" : i(_ezim_d)) && _ezim_d.hasOwnProperty(t)) return _ezim_d[t];
                    for (var o in _ezim_d)
                        if (o.split("/").pop() === t) return _ezim_d[o];
                    return !1
                }, EzoicBanger.prototype.lLLL1LLLlLLllIlIII1ILl1llLlLI = function(e) {
                    return this.ll1IIl1Ill1I1llllL1l1L11II(this.lllILl1ILI1lLlLLIlI1LLl1l1l11(e))
                }, EzoicBanger.prototype.lIIIlLILlL1L1IlLLIllLI1IIlLL1lIL = function(e) {
                    return this.ll1IIl1Ill1I1llllL1l1L11II(parseInt(e.getTargeting("br1")[0]))
                }, EzoicBanger.prototype.l1ILLLIl1LLI1LIl1L1L11L1l1II1 = function(e) {
                    return this.ll1IIl1Ill1I1llllL1l1L11II(parseInt(e.getTargeting("br1_lcl")[0]))
                }, EzoicBanger.prototype.ll1IIl1Ill1I1llllL1l1L11II = function(e) {
                    return e /= 1e5, isNaN(e) && (e = 0), e <= 0 && (e = 2e-6), e
                }, EzoicBanger.prototype.lllILl1ILI1lLlLLIlI1LLl1l1l11 = function(e) {
                    var t = parseInt(e.getTargeting("br1")[0]);
                    return void 0 !== window.ezbfcr && (t *= window.ezbfcr), t
                }, EzoicBanger.prototype.lI1L11Ill11lLILL1LlL = function(e) {
                    var t = e.getSizes()[0],
                        o = [];
                    if (void 0 !== t.l) o = [t.l, t.j];
                    else if (void 0 !== t) {
                        var i = 0;
                        for (var n in t) 0 == isNaN(t[n]) && (o[i] = t[n]), i++
                    }
                    return o
                }, EzoicBanger.prototype.lLLIl1111lILl1LlLlLLLL = function(e) {
                    var t = this;
                    1 == window.ezgrf ? (this.slots_waiting_for_refresh.push(e), 1 == this.slots_waiting_for_refresh.length && setTimeout((function() {
                        t.RefreshGoogleSLotsGrouped()
                    }), 30)) : window.ezorefgsl(e)
                }, EzoicBanger.prototype.RefreshGoogleSLotsGrouped = function() {
                    this.slots_waiting_for_refresh.length > 0 && (window.ezorefgsl(this.slots_waiting_for_refresh), this.slots_waiting_for_refresh = [])
                }, EzoicBanger.prototype.l11L1IlLI1IIl1ILI1111I11LlLLL1I = function(e, t) {
                    if (void 0 === e.Ezoic || 1 != e.Ezoic || void 0 !== e.DFPSlot && null != e.DFPSlot || (this.DFPSlot = ezoGetDFPSlot(e.getSlotElementId())), void 0 !== e.getTargeting("epp")[0]) {
                        var o = parseFloat(e.getTargeting("epp")[0]);
                        if (0 == isNaN(o) && (set_hb_bid = 0, void 0 !== e.getTargeting("hb_opt")[0] && (set_hb_bid = parseFloat(e.getTargeting("hb_opt")[0]), isNaN(set_hb_bid) && (set_hb_bid = 0)), o > set_hb_bid)) {
                            var i = !1;
                            void 0 !== window.ezhbopt && 1 == window.ezhbopt && (i = !0), e.setTargeting("hb_bidder", e.getTargeting("epb")[0]), e.setTargeting("hb_adid", e.getTargeting("epa")[0]), e.setTargeting("hb_pb", o), e.setTargeting("hb_opt", o), e.setTargeting("hb_format", e.getTargeting("epf")[0]), e.setTargeting("hb_ssid", e.getTargeting("eps")[0]), e.setTargeting("hb_rt", e.getTargeting("epr")[0]), i && e.setTargeting("hb_pb", ""), void 0 !== window.ezForceHbSolo && window.ezForceHbSolo === e.getTargeting("epb")[0] && (e.setTargeting("hb_opt", "10"), e.setTargeting("nam", "1"))
                        }
                    }
                    try {
                        var n = e.getTargeting("ic");
                        Array.isArray(n) && n.length > 0 && (n = n[0]);
                        var s = parseInt(n);
                        0 == isNaN(s) && (s++, e.setTargeting("ic", s))
                    } catch (e) {}
                    try {
                        var r = parseInt(e.getTargeting("compid")[0]);
                        0 == isNaN(r) && 1 == r && "1" != e.getTargeting("nocompoverride")[0] && e.setTargeting("compid", "0")
                    } catch (e) {}
                    this.lIlL1lI1LllLLllIL1LL(e)
                }, EzoicBanger.prototype.lIlL1lI1LllLLllIL1LL = function(e) {
                    var t = this;
                    "undefined" == typeof requestAnimationFrame ? this.lLLIl1111lILl1LlLlLLLL(e) : requestAnimationFrame((function() {
                        t.lLLIl1111lILl1LlLlLLLL(e)
                    }))
                }, EzoicBanger.prototype.ReloadFromP = function(e) {
                    var t = this.GetNameFromPositionId(e),
                        o = this.lLIILl1L1LIIIll11IlIIll1Ill1(t);
                    void 0 !== o && "function" == typeof o.getName && 1 != this.disable_refresh_slots[o.getSlotElementId()] && (this.disable_refresh_slots[o.getSlotElementId()] = !0, this.lLLIl1111lILl1LlLlLLLL(o))
                }, EzoicBanger.prototype.lI1ILI1IllLl1lLlLLIlI = function(e) {
                    if ("object" == ("undefined" == typeof epbjs ? "undefined" : i(epbjs))) {
                        if (e.setTargeting("hb_bidder", ""), e.setTargeting("hb_adid", ""), e.setTargeting("hb_pb", ""), e.setTargeting("hb_opt", ""), e.setTargeting("nam", ""), e.setTargeting("hb_ssid", ""), e.setTargeting("hb_format", ""), e.setTargeting("hb_rt", ""), e.setTargeting("epb", ""), e.setTargeting("epa", ""), e.setTargeting("epp", ""), e.setTargeting("eps", ""), e.setTargeting("epf", ""), "object" === i(window.__ezaps)) {
                            var t = e.getTargeting("amznbid");
                            if (void 0 !== t && t.length > 0) {
                                e.setTargeting("amznbid", ""), e.setTargeting("amzniid", ""), e.setTargeting("amznp", ""), e.setTargeting("amznsz", "");
                                var o = e.getTargeting("r_amznbid");
                                void 0 !== o && o.length > 0 && (e.setTargeting("r_amznbid", ""), e.setTargeting("r_amzniid", ""), e.setTargeting("r_amznp", ""))
                            }
                        }
                        var n = this.lIlILllL1L1Ll1L1I1II11lI(e);
                        "object" === i(n) && n.hasOwnProperty("stat_source_id") && delete n.stat_source_id, 1 == e.Ezoic && (e = e.DFPSlot), epbjsRefreshSlot(e)
                    }
                }, EzoicBanger.prototype.RemoveSlotById = function(e) {
                    var t = new Array;
                    for (var o in window.ezslots) {
                        var i = window[ezslots[o]];
                        void 0 !== i && (i.getAdUnitPath() != e && i.getSlotElementId() != e && (t[o] = window.ezslots[o]))
                    }
                    window.ezslots = new Array, window.ezslots = t
                }, EzoicBanger.prototype.lllII11ILLlIllLIlLLLllIL11Il = function(e) {
                    if (null != e.lineItemId && "28687274" != e.lineItemId) {
                        var t = new XMLHttpRequest,
                            o = "//go.ezodn.com/dac/" + e.lineItemId;
                        t.onreadystatechange = function(e) {
                            return function() {
                                if (4 == this.readyState && 200 == this.status && "" != this.responseText) {
                                    var t = JSON.parse(this.responseText);
                                    if ("CPM" != t.PaymentType) return;
                                    t.PaymentAmount = t.PaymentAmount / 1e3, __ez.pel.Add(e.slot, [new __ezDotData("stat_source_id", 10051)], t.PaymentAmount, 0, 0, 0, 10051), __ez.pel.Fire()
                                }
                            }
                        }(e), t.open("GET", o), t.send()
                    }
                }, EzoicBanger.prototype.ll1IlIILl1l1l111Il1IlLIL1lII = function() {
                    var e = [];
                    for (var t in this.ll1II1IIL1Llll11l) this.ll1II1IIL1Llll11l.hasOwnProperty(t) && e.push(parseInt(this.ll1II1IIL1Llll11l[t]));
                    e.sort((function(e, t) {
                        return e - t
                    })), this.ll1lI1Ill1IIlL111lLI1 = [];
                    for (var o = 0; o < e.length; o++)
                        for (var t in this.ll1II1IIL1Llll11l) this.ll1II1IIL1Llll11l.hasOwnProperty(t) && this.ll1II1IIL1Llll11l[t] == e[o] && this.ll1lI1Ill1IIlL111lLI1.push(t)
                }, EzoicBanger.prototype.l1LlllllllLL1l1LIlIlL1LLI = function() {
                    if (!0 !== this.initial_ad_positions_stored) {
                        for (var e in this.initial_ad_positions_stored = !0, window.ezslots) {
                            var t = window[ezslots[e]];
                            if ("object" == i(t)) {
                                var o = t.getSlotElementId(),
                                    n = document.getElementById(o),
                                    s = this.lILIl11LLLLlLlLllLLllI1(n);
                                this.llI11LI1LL1LLlIlIIIlLLII1lI[t.getSlotElementId()] = s, this.l1LIIIIllLLLllL1l1(t)
                            }
                        }
                        __ez.pel.Fire()
                    }
                }, EzoicBanger.prototype.l1LIIIIllLLLllL1l1 = function(e) {
                    if (void 0 !== e.ElementId) var t = e.ElementId;
                    else t = e.getSlotElementId();
                    if (!(t in this.llI11LI1LL1LLlIlIIIlLLII1lI_stored)) {
                        this.llI11LI1LL1LLlIlIIIlLLII1lI_stored[t] = !0;
                        var o = this.llI11LI1LL1LLlIlIIIlLLII1lI[t].left,
                            i = this.llI11LI1LL1LLlIlIIIlLLII1lI[t].top,
                            n = this.llI11LI1LL1LLlIlIIIlLLII1lI[t].isFloating;
                        !0 === window.usePixelWorker ? (window.ezopixel.pel({
                            slot: e,
                            eventName: "pos_x",
                            eventValue: o
                        }), window.ezopixel.pel({
                            slot: e,
                            eventName: "pos_y",
                            eventValue: i
                        }), window.ezopixel.pel({
                            slot: e,
                            eventName: "is_floating",
                            eventValue: n
                        })) : __ez.pel.Add(e, [new __ezDotData("pos_x", o), new __ezDotData("pos_y", i), new __ezDotData("is_floating", n)])
                    }
                }, EzoicBanger.prototype.llIll1LLllI1l11l1L1lLII11I = function() {
                    var e = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, this.lIlLlI1L1L1LILlIL.bind(this), !1);
                    for (var t in this.lILL1IIlllLIl11ll1I(e), this.ll1l1lLLL1Ill1lL1ll) this.ll1l1lLLL1Ill1lL1ll.hasOwnProperty(t) && this.ll1l1lLLL1Ill1lL1ll_keys.push(t);
                    this.ll1l1lLLL1Ill1lL1ll_keys.sort((function(e, t) {
                        return e - t
                    }))
                }, EzoicBanger.prototype.lIlLlI1L1L1LILlIL = function(e) {
                    var t = e.parentNode;
                    return "SCRIPT" === t.nodeName || "NOSCRIPT" === t.nodeName || "STYLE" === t.nodeName || "IFRAME" === t.nodeName || "OBJECT" === t.nodeName || 0 === this.ll1LLLLLlLIlI111ILL1(t, "opacity") || "none" === this.ll1LLLLLlLIlI111ILL1(t, "display") || "hidden" === this.ll1LLLLLlLIlI111ILL1(t, "visibility") && "" !== document.documentElement.getAttribute("amp") ? NodeFilter.FILTER_SKIP : e.nodeValue ? 0 === e.nodeValue.trim().length ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }, EzoicBanger.prototype.lILL1IIlllLIl11ll1I = function(e) {
                    for (var t = e.currentNode; t;) {
                        if (t.nodeValue) {
                            var o = document.createRange();
                            o.selectNode(t);
                            var i = o.getBoundingClientRect().top;
                            if (i >= 0) {
                                void 0 === this.ll1l1lLLL1Ill1lL1ll[i] && (this.ll1l1lLLL1Ill1lL1ll[i] = 0);
                                var n = t.nodeValue.trim().split(/\s+/).length;
                                this.ll1l1lLLL1Ill1lL1ll[i] += n
                            }
                        }
                        t = e.nextNode()
                    }
                }, EzoicBanger.prototype.ll1LLLLLlLIlI111ILL1 = function(e, t) {
                    try {
                        return document.defaultView.getComputedStyle(e, null)[t]
                    } catch (e) {
                        return ""
                    }
                }, EzoicBanger.prototype.lLllIIl11I11lI1l1 = function(e) {
                    for (var t = 0, o = 0; o < this.ll1l1lLLL1Ill1lL1ll_keys.length && this.ll1l1lLLL1Ill1lL1ll_keys[o] <= e; o++) t += this.ll1l1lLLL1Ill1lL1ll[this.ll1l1lLLL1Ill1lL1ll_keys[o]];
                    return 0 === e ? t : t - this.lLllIIl11I11lI1l1(0)
                }, EzoicBanger.prototype.lllLLl1IIlI1I11lI = function() {
                    for (var e in window.ezslots) {
                        var t = window[ezslots[e]];
                        "object" === i(t) && this.lIIIlIILIII1L1lLllll11LLLlLlLI1l(t)
                    }
                    __ez.pel.Fire()
                }, EzoicBanger.prototype.lIIIlIILIII1L1lLllll11LLLlLlLI1l = function(e) {
                    var t = e.getSlotElementId();
                    if (!(t in this.l1LLIIlLILIl1lILl1LlLI1I)) {
                        this.l1LLIIlLILIl1lILl1LlLI1I[t] = !0;
                        var o = this.llI11LI1LL1LLlIlIIIlLLII1lI[t];
                        if (null != o) {
                            var i = o.top,
                                n = this.lLllIIl11I11lI1l1(i);
                            !0 === window.usePixelWorker ? window.ezopixel.pel({
                                slot: e,
                                eventName: "words_before",
                                eventValue: n
                            }) : __ez.pel.Add(e, [new __ezDotData("words_before", n)])
                        }
                    }
                }, EzoicBanger.prototype.ll1I1ll111LILIIL = function(e) {
                    var t = new Date,
                        o = t.getTimezoneOffset();
                    if (!(o < -840 || o > 720)) {
                        var i = new Date(t - 6e4 * o);
                        if (!(Math.abs(i - t) / 36e5 > 14)) {
                            Date.prototype.toISOString || function() {
                                function e(e) {
                                    return e < 10 ? "0" + e : e
                                }
                                Date.prototype.toISOString = function() {
                                    return this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "." + (this.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
                                }
                            }();
                            var n = i.toISOString().slice(0, 19).replace("T", " ").split(" ")[0];
                            if (!(n.length < 1 || "0" == n[0])) {
                                var s = t.getHours(),
                                    r = t.getDay();
                                !0 === window.usePixelWorker ? (window.ezopixel.pel({
                                    slot: e,
                                    eventName: "t_local_date",
                                    eventValue: n
                                }), window.ezopixel.pel({
                                    slot: e,
                                    eventName: "t_local_hour",
                                    eventValue: s
                                }), window.ezopixel.pel({
                                    slot: e,
                                    eventName: "t_local_day_of_week",
                                    eventValue: r
                                }), window.ezopixel.pel({
                                    slot: e,
                                    eventName: "t_local_timezone",
                                    eventValue: o
                                })) : __ez.pel.Add(e, [new __ezDotData("t_local_date", n), new __ezDotData("t_local_hour", s), new __ezDotData("t_local_day_of_week", r), new __ezDotData("t_local_timezone", o)])
                            }
                        }
                    }
                }, EzoicBanger.prototype.ResizeSlot = function(e, t) {
                    var o = document.getElementById(e);
                    if (null != o) {
                        var n = t;
                        "string" == typeof t && (n = t.split("x"));
                        var s = !0;
                        if (o.parentNode.style.width.indexOf("vw") > -1 && (s = !1, null != o.parentNode.parentNode)) {
                            var r = o.parentNode.parentNode;
                            r.className.indexOf("ezoic-rapper") > -1 && (r.offsetHeight < o.parentNode.offsetHeight ? (r.style.minHeight = o.parentNode.offsetHeight + 40 + "px", r.style.maxHeight = "") : r.offsetHeight > o.parentNode.offsetHeight + 100 && (r.style.minHeight = "0px", r.style.maxHeight = o.parentNode.offsetHeight + 40 + "px"))
                        }
                        n[0], n[1];
                        if ("object" == i(n) && 2 == n.length)
                            if ("0" == n[0] && "0" == n[1]) o.style.width = "100%", "100vw" != o.parentNode.style.width && "auto" != o.parentNode.style.width && s && (o.parentNode.style.width = "100%"), o.style.height = "auto", o.parentNode.style.height = "auto";
                            else {
                                var a = parseInt(o.style.minHeight),
                                    d = o.parentNode.style.minHeight,
                                    l = 0;
                                void 0 !== window.ezoFormfactor && 2 != window.ezoFormfactor && (l = 0);
                                var p = o.style.minWidth,
                                    g = o.parentNode.style.minWidth;
                                if (parseInt(a) != parseInt(n[1]) && (o.style.minHeight = n[1] + "px"), parseInt(p) != parseInt(n[0]) && (o.style.minWidth = n[0] + "px"), parseInt(d) != parseInt(n[1]) && parseInt(d) != parseInt(n[1]) + parseInt(l)) {
                                    var _ = parseInt(l) + parseInt(n[1]);
                                    o.parentNode.style.minHeight = _ + "px"
                                }
                                parseInt(g), parseInt(n[0]), "none" == o.style.display && (o.style.display = "inline-block"), "none" == o.parentNode.style.display && (o.parentNode.style.display = "inline-block")
                            }
                    }
                }, EzoicBanger.prototype.StoreSize = function(e, t, o, i) {
                    try {
                        if (1 != this.slots_stored_sizes[e]) {
                            var n = this.GetEzoicSlotById(e);
                            if (i || 1 == t) {
                                var s = document.getElementById(e);
                                t = s.offsetWidth, o = s.offsetHeight
                            }
                            if ("undefined" != typeof slot) {
                                var r = "[" + t + "," + o + "]";
                                void 0 !== window.context && "domFingerprint" in window.context && (0 == t && 0 == o ? window.context.noContentAvailable() : window.context.renderStart({
                                    width: t,
                                    height: o
                                })), !0 === window.usePixelWorker ? (window.ezopixel.pel({
                                    slot: n.slot,
                                    eventName: "filled_size",
                                    eventValue: r
                                }), window.ezopixel.pel({
                                    slot: n.slot,
                                    eventName: "filled_fluid",
                                    eventValue: i
                                })) : (__ez.pel.Add(n.slot, [new __ezDotData("filled_size", r)]), __ez.pel.Add(n.slot, [new __ezDotData("filled_fluid", i)]));
                                var a = n.slot.getTargeting("stl");
                                if (void 0 !== a && a.length > 0) {
                                    var d = String(a[0]).split(","),
                                        l = 0;
                                    if (d.length > 1 && (l = this.ad_style_order.indexOf(r)), l >= 0 && l < d.length) {
                                        var p = d[l];
                                        void 0 !== p && (!0 === window.usePixelWorker ? window.ezopixel.pel({
                                            slot: n.slot,
                                            eventName: "domain_dfp_style_id",
                                            eventValue: p
                                        }) : __ez.pel.Add(n.slot, [new __ezDotData("domain_dfp_style_id", p)]))
                                    }
                                }
                                __ez.pel.Fire(), this.slots_stored_sizes[e] = !0
                            }
                        }
                    } catch (e) {}
                }, EzoicBanger.prototype.lIlIlLILII1IIILl1LLILIl11l1LIIl = function(e) {
                    var t = this;
                    void 0 !== __ez.stms && void 0 === __ez.falt && (__ez.falt = Date.now() - __ez.stms, __ez.bit.AddAndFire(window._ezaq.page_view_id, [new __ezDotData("timer_first_ad_load", __ez.falt)])), e.slot.Targeting = e.slot.getTargetingMap();
                    var o = !1,
                        n = 0,
                        s = e.slot.ElementId,
                        r = e.slot.getTargeting("hb_pb")[0];
                    if (void 0 !== e.slot.getTargeting("hb_opt")[0] && (r = e.slot.getTargeting("hb_opt")[0]), !1 === e.isEmpty) {
                        this.RemoveLoadingIcon(e.slot);
                        var a = e.slot.getTargeting("al") % 1e3;
                        5 != a && 38 != a && 39 != a || this.ShowAdCloseButton(e.slot), 38 != a && 39 != a || "function" != typeof __ez_handle_rail_loaded || __ez_handle_rail_loaded(e.slot.ElementId);
                        var d = 0;
                        if (void 0 !== e.slot.getTargeting("lb")[0] && (d = parseInt(e.slot.getTargeting("lb")[0]) / 1e5), "undefined" != typeof epbjs && void 0 !== epbjs.ezobid && void 0 !== epbjs.ezobid[s] && null != epbjs.ezobid[s] && (r = epbjs.ezobid[s], epbjs.ezobid[s] = null), void 0 === r && (r = 0), r /= 1e3, -1 === s.indexOf("div-gpt-ad") && -1 === s.indexOf("pixel1")) return;
                        if ("undefined" != typeof epbjs && void 0 !== epbjs.ezdss && (void 0 !== epbjs.ezdss[s] && (n = epbjs.ezdss[s], epbjs.ezdss[s] = null, 11297 != n && 10089 != n || e.slot.setTargeting("reft", "n"), void 0 !== epbjs.ezas && void 0 !== epbjs.ezas[s] && (this.ResizeSlot(s, epbjs.ezas[s]), o = !0)), "t" == e.slot.getTargeting("reft")[0] || "tf" == e.slot.getTargeting("reft")[0])) {
                            var l = e.slot.getTargeting("refs")[0];
                            void 0 !== l && "" != l || (l = 30), setTimeout((function() {
                                if (t.IsSlotAlive(e.slot) && (t.lI1ILI1IllLl1lLlLLIlI(e.slot), "undefined" != typeof __ezaps && "function" == typeof ezapsFetchBids)) {
                                    var o = getAmazonSlotById(e.slot.ElementId);
                                    !1 !== o && ezapsFetchBids([o])
                                }
                            }), 1e3 * (l - 3))
                        }
                        try {
                            var p = e.slot.getTargeting("ic"),
                                g = e.slot.getTargeting("eb_br");
                            Array.isArray(p) && p.length > 0 && (p = p[0]);
                            var _ = parseInt(p);
                            0 == isNaN(_) && 1 != this.slots_loaded[e.slot.ElementId] && (!0 === window.usePixelWorker ? window.ezopixel.pel({
                                eventName: "refresh_count",
                                eventValue: _,
                                slot: e.slot
                            }) : __ez.pel.Add(e.slot, [new __ezDotData("refresh_count", _)]), g.length > 32 && (g = g.substr(0, 32)), !0 === window.usePixelWorker ? window.ezopixel.pel({
                                eventName: "filled_bid_hash",
                                eventValue: g,
                                slot: e.slot
                            }) : __ez.pel.Add(e.slot, [new __ezDotData("filled_bid_hash", g)]))
                        } catch (e) {}
                        var f = !1;
                        5 === n && "undefined" != typeof _ezim_d && void 0 !== _ezim_d[adUnit] && void 0 !== _ezim_d[adUnit].adx_stat_source_id && (n = _ezim_d[adUnit].adsense_stat_source_id), 35 === n && "undefined" != typeof _ezim_d && void 0 !== _ezim_d[adUnit] && void 0 !== _ezim_d[adUnit].adx_stat_source_id && (n = _ezim_d[adUnit].adx_stat_source_id);
                        var u = e.slot.getTargeting("hb_format"),
                            w = e.slot.getTargeting("hb_rt");
                        if (n > 0)
                            if (f = !0, !0 === window.usePixelWorker) {
                                var v = {
                                    slot: e.slot,
                                    eventName: "stat_source_id",
                                    eventValue: n,
                                    statSourceId: n,
                                    revenue: r,
                                    estRevenue: 0,
                                    bidFloorFilled: r,
                                    prevFloor: d
                                };
                                if (window.ezopixel.pel(v), void 0 !== i(u) && u.length > 0 && "" !== String(u[0])) {
                                    var h = String(u[0]);
                                    window.ezopixel.pel({
                                        slot: e.slot,
                                        eventName: "media_type",
                                        eventValue: h
                                    })
                                }
                                if (void 0 !== i(w) && w.length > 0 && "" !== String(w[0])) {
                                    var c = String(w[0]);
                                    window.ezopixel.pel({
                                        slot: e.slot,
                                        eventName: "prebid_source",
                                        eventValue: c
                                    })
                                }
                            } else {
                                if (__ez.pel.Add(e.slot, [new __ezDotData("stat_source_id", n)], r, 0, r, d, n), void 0 !== i(u) && u.length > 0 && "" !== String(u[0])) {
                                    h = String(u[0]);
                                    __ez.pel.Add(e.slot, [new __ezDotData("media_type", h)], r, 0, r, d, n)
                                }
                                if (void 0 !== i(w) && w.length > 0 && "" !== String(w[0])) {
                                    c = String(w[0]);
                                    __ez.pel.Add(e.slot, [new __ezDotData("prebid_source", c)], r, 0, r, d, n)
                                }
                                __ez.pel.Fire()
                            }
                        var z = 0,
                            m = 0,
                            b = 0;
                        if ("1" !== e.slot.getTargeting("compid")[0] && 0 === n && (z = this.lLLL1LLLlLLllIlIII1ILl1llLlLI(e.slot), m = this.lIIIlLILlL1L1IlLLIllLI1IIlLL1lIL(e.slot), b = this.l1ILLLIl1LLI1LIl1L1L11L1l1II1(e.slot), n = "object" === ("undefined" == typeof ezimData ? "undefined" : i(ezimData)) && ezimData.hasOwnProperty("adx_stat_source_id") ? ezimData.adx_stat_source_id : 35), !0 === f)
                            if (!0 === window.usePixelWorker) {
                                v = {
                                    slot: e.slot,
                                    eventName: "loaded",
                                    eventValue: 1,
                                    statSourceId: n,
                                    revenue: 0,
                                    estRevenue: 0,
                                    bidFloorFilled: z,
                                    prevFloor: d
                                };
                                window.ezopixel.pel(v)
                            } else __ez.pel.Add(e.slot, [new __ezDotData("loaded", 1)], 0, z, z, d, n);
                        else if (!0 === window.usePixelWorker) {
                            v = {
                                slot: e.slot,
                                eventName: "loaded",
                                eventValue: 1,
                                statSourceId: n,
                                revenue: 0,
                                estRevenue: z,
                                bidFloorFilled: z,
                                prevFloor: d
                            };
                            window.ezopixel.pel(v)
                        } else __ez.pel.Add(e.slot, [new __ezDotData("loaded", 1)], 0, z, z, d, n);
                        if (this.slots_loaded[e.slot.ElementId] = !0, void 0 !== window.ezbfcr || void 0 !== window.ezbflclcr)
                            if (!0 === window.usePixelWorker) {
                                v = {
                                    slot: e.slot,
                                    eventName: "bid_floor_local_dfp",
                                    eventValue: m,
                                    statSourceId: n,
                                    revenue: 0,
                                    estRevenue: z,
                                    bidFloorFilled: z,
                                    prevFloor: d
                                };
                                window.ezopixel.pel(v), v = {
                                    slot: e.slot,
                                    eventName: "bid_floor_local_adx",
                                    eventValue: b,
                                    statSourceId: n,
                                    revenue: 0,
                                    estRevenue: z,
                                    bidFloorFilled: z,
                                    prevFloor: d
                                }, window.ezopixel.pel(v)
                            } else __ez.pel.Add(e.slot, [new __ezDotData("bid_floor_local_dfp", m)], 0, z, z, d, n), __ez.pel.Add(e.slot, [new __ezDotData("bid_floor_local_adx", b)], 0, z, z, d, n);
                        if ("1" === e.slot.getTargeting("compid")[0])
                            if (!0 === window.usePixelWorker) {
                                v = {
                                    slot: e.slot,
                                    eventName: "adsense_impression",
                                    eventValue: 1,
                                    statSourceId: 44
                                };
                                window.ezopixel.pel(v)
                            } else __ez.pel.Add(e.slot, [new __ezDotData("adsense_impression", 1)], 0, 0, 0, 0, 44);
                        if (null != e.creativeId || null != e.lineItemId) {
                            if (!0 === window.usePixelWorker) {
                                v = {
                                    slot: e.slot,
                                    eventName: "creative_id",
                                    eventValue: e.creativeId
                                };
                                window.ezopixel.postMessage(JSON.parse(JSON.stringify(["pel_add", v]))), v = {
                                    slot: e.slot,
                                    eventName: "lineitem_id",
                                    eventValue: e.lineItemId
                                }, window.ezopixel.postMessage(JSON.parse(JSON.stringify(["pel_add", v])))
                            } else __ez.pel.Add(e.slot, [new __ezDotData("creative_id", e.creativeId)]), __ez.pel.Add(e.slot, [new __ezDotData("lineitem_id", e.lineItemId)]), __ez.pel.Fire();
                            !0 === window.usePixelWorker ? window.ezopixel.postMessage(JSON.parse(JSON.stringify(["direct_ad", e]))) : this.lllII11ILLlIllLIlLLLllIL11Il(e)
                        }
                    }
                    return this.ll1I1ll111LILIIL(e.slot), !0 === this.initial_ad_positions_stored && (this.llI11LI1LL1LLlIlIIIlLLII1lI.hasOwnProperty(e.slot.ElementId) || (this.lIl1LLL1L1I111Il1l1(), this.lIIIlIILIII1L1lLllll11LLLlLlLI1l(e.slot)), this.l1LIIIIllLLLllL1l1(e.slot)), __ez.pel.Fire(), o
                }, EzoicBanger.prototype.StoreStatSourceByAP = function(e, t) {
                    if (!isNaN(parseInt(e)) && !isNaN(parseInt(t))) {
                        var o = this.GetNameFromPositionId(t),
                            n = this.lLIILl1L1LIIIll11IlIIll1Ill1(o),
                            s = this.llllLl1LllLlLIll1I(n);
                        "object" === ("undefined" == typeof _ezim_d ? "undefined" : i(_ezim_d)) && _ezim_d.hasOwnProperty(s) && (_ezim_d[s].stat_source_id = e), !0 === window.usePixelWorker ? window.ezopixel.postMessage(JSON.parse(JSON.stringify(["pel_add", {
                            slot: n,
                            eventName: "stat_source_id",
                            eventValue: e
                        }]))) : __ez.pel.AddAndFire(n, [new __ezDotData("stat_source_id", e)])
                    }
                }, EzoicBanger.prototype.StoreStatSourceByExtId = function(e, t, o) {
                    if (!isNaN(parseInt(e)) && void 0 !== t && void 0 !== o) {
                        e = parseInt(e);
                        var n = this.GetSlotFromKV(t, o);
                        if (void 0 !== n) {
                            var s = n.getSlotElementId();
                            if ("object" === ("undefined" == typeof _ezim_d ? "undefined" : i(_ezim_d)) && _ezim_d.hasOwnProperty(s) && (_ezim_d[s].stat_source_id = e), isNaN(e) || 10057 != e && 10064 != e) !0 === window.usePixelWorker ? window.ezopixel.postMessage(JSON.parse(JSON.stringify(["pel_add", {
                                slot: n,
                                eventName: "stat_source_id",
                                eventValue: e
                            }]))) : __ez.pel.AddAndFire(n, [new __ezDotData("stat_source_id", e)]);
                            else {
                                var r = this.lLLL1LLLlLLllIlIII1ILl1llLlLI(n),
                                    a = 0;
                                void 0 !== n.getTargeting("lb")[0] && (a = parseInt(n.getTargeting("lb")[0]) / 1e5);
                                var d = "";
                                void 0 !== n.getTargeting("amznbid")[0] && (d = n.getTargeting("amznbid")[0]), __ez.pel.Add(n, [new __ezDotData("amzn_bid_" + e, d)], r, 0, r, a, e), __ez.pel.Fire()
                            }
                        }
                    }
                }, EzoicBanger.prototype.StoreStatSourceByAID = function(e, t) {
                    if (!isNaN(parseInt(e)) && !isNaN(parseInt(ap))) {
                        var o = this.GetSlotByHBID(t);
                        void 0 !== o && ("object" === ("undefined" == typeof _ezim_d ? "undefined" : i(_ezim_d)) && _ezim_d.hasOwnProperty(GetEzimKeyFromSlot(o)) && (_ezim_d[adUnitName].stat_source_id = e), !0 === window.usePixelWorker ? window.ezopixel.pel({
                            slot: o,
                            eventName: "stat_source_id",
                            eventValue: e
                        }) : __ez.pel.AddAndFire(o, [new __ezDotData("stat_source_id", e)]))
                    }
                }, EzoicBanger.prototype.GetEzimKeyFromSlot = function(e) {
                    var t;
                    return "string" == typeof(t = void 0 !== e.ElementId ? e.ElementId : e.getSlotElementId()) ? (-1 !== (t = (t = t.replace("div-gpt-ad-", "")).replace("gpt_unit_", "")).indexOf("-0_") && (t = t.replace("-0_", "_")), t.indexOf("-0") == t.length - 2 && (t = t.replace("-0", "")), t) : ""
                }, EzoicBanger.prototype.lII11111lIL1ILIILILlL1l = function(e) {
                    var t = this,
                        o = !1;
                    "undefined" != typeof ct && null !== ct.currentFrame && -1 != e.AdUnitPath.indexOf(ct.getAdUnitFromElement(ct.currentFrame, 0)) && (o = !0);
                    var i = !1;
                    if (void 0 !== window.ez_tos_track_count && window.ez_tos_track_count > 1 && window.ez_tos_track_count < window.ez_last_activity_count + 8 && window.ez_tos_track_count < 240 && (i = !0), 0 == o && 1 == i) {
                        window.ezGetSlotViewedTime(e, !0);
                        this.slot_visible_total[e.getSlotElementId()] = 0, this.slot_visibility[e.getSlotElementId()] = 0;
                        var n = e.Targeting.alc;
                        "" != n && 0 != n || (n = 1), !0 === window.usePixelWorker ? window.ezopixel.pel({
                            slot: e,
                            eventName: "placeholder_refreshes",
                            eventValue: n
                        }) : __ez.pel.Add(e, [new __ezDotData("placeholder_refreshes", n)]), this.l11L1IlLI1IIl1ILI1111I11LlLLL1I(e)
                    } else {
                        var s = 15e3;
                        1 == o && (s = 1500), this.SetTimeout((function() {
                            t.IsSlotAlive(e) && t.lII11111lIL1ILIILILlL1l(e)
                        }), s)
                    }
                }, EzoicBanger.prototype.UpdatePageViewMetricCookie = function(e) {
                    var t = this.GetCookie("ezouspvv"),
                        o = this.GetCookie("ezouspva"),
                        i = this.GetCookie("ezouspvh");
                    t = parseInt(t), o = parseInt(o), i = parseInt(i), e = parseInt(e), isNaN(t) && (t = 0), isNaN(o) && (o = 0), isNaN(i) && (i = 0), (isNaN(e) || 999999 == e) && (e = 0), t += e, o++, document.cookie = "ezouspvv=" + t + ";path=/", document.cookie = "ezouspva=" + o + ";path=/", void 0 !== window.ezouspvv ? window.ezouspvv = window.ezouspvv + e : window.ezouspvv = e, e > i && (document.cookie = "ezouspvh=" + e + ";path=/")
                }, EzoicBanger.prototype.GetCookie = function(e) {
                    for (var t = e + "=", o = decodeURIComponent(document.cookie).split(";"), i = 0; i < o.length; i++) {
                        for (var n = o[i];
                            " " == n.charAt(0);) n = n.substring(1);
                        if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
                    }
                    return ""
                }, EzoicBanger.prototype.SetInterval = function(e, t) {
                    var o = setInterval(e, t);
                    return this.intervalIds.push(o), o
                }, EzoicBanger.prototype.SetTimeout = function(e, t) {
                    var o = setTimeout(e, t);
                    return this.timeoutIds.push(o), o
                }, EzoicBanger.prototype.l1lIIIILIIl1LIlI11lI1LlIIIL1 = function(e) {
                    if (null != e.creativeId && "object" == ("undefined" == typeof _ezim_d ? "undefined" : i(_ezim_d))) {
                        var t = this.GetEzimKeyFromSlot(e.slot);
                        void 0 !== _ezim_d[t] && (_ezim_d[t].creative_id = e.creativeId, null != e.lineItemId && (_ezim_d[t].line_item_id = e.lineItemId))
                    }
                }, EzoicBanger.prototype.SendMessage = function(e) {
                    if (1 != window.ezowwinit) {
                        window.ezowwinit = !0;
                        var t = {
                            ezoadxnc: window.ezoadxnc,
                            ezoadhb: window.ezoadhb,
                            _ebcids: window._ebcids,
                            __banger_pmp_deals: window.__banger_pmp_deals,
                            ezorbf: window.ezorbf,
                            ezoplbfh: window.ezoplbfh,
                            ezoibfh: window.ezoibfh,
                            ezbfcr: window.ezbfcr,
                            ezbflclcr: window.ezbflclcr,
                            ezslots: window.ezslots,
                            ezaxmns: window.ezaxmns,
                            ezaucmns: window.ezaucmns,
                            did: window._ezaq.domain_id,
                            ezabtest: window.ezAbtest
                        };
                        this.SendMessage(["init", {}, t])
                    }
                    try {
                        window.ezomash.postMessage(e)
                    } catch (t) {
                        e = JSON.parse(JSON.stringify(e)), window.ezomash.postMessage(e)
                    }
                }, EzoicBanger.prototype.lILIIl1LILllllI1IlI1LIlLl = function(e, t) {
                    var o = Object.keys(this);
                    if (null === t && (t = this.destroySlotsCallback), Array.isArray(e)) {
                        var n = new Set;
                        e.forEach((function(e) {
                            n.add(e)
                        })), void 0 !== window.__ezaps && (window.__ezaps = window.__ezaps.filter((function(e) {
                            return !n.has(e.slotID)
                        }))), void 0 !== window.epbjs.adUnits && (window.epbjs.adUnits = window.epbjs.adUnits.filter((function(e) {
                            return !n.has(e.code)
                        }))), void 0 !== window.epbjs.ezAdUnits && (window.epbjs.ezAdUnits = window.epbjs.ezAdUnits.filter((function(e) {
                            return !n.has(e.code)
                        })));
                        for (var s = 0; s < o.length; s++) {
                            var r = o[s];
                            if ("object" === i(this[r]))
                                if (Array.isArray(this[r])) this[r] = this[r].filter((function(e) {
                                    return !n.has(e)
                                }));
                                else {
                                    var a = this;
                                    n.forEach((function(e) {
                                        e in a[r] && delete a[r][e]
                                    }))
                                }
                        }
                        null !== t && "function" == typeof t && t()
                    } else null !== t && "function" == typeof t && t("Incorrect data type for slotNamesArr in banger")
                }, EzoicBanger.prototype.ClearIntervalAndTimeout = function() {
                    for (var e = 0; e < this.intervalIds.length; e++) clearInterval(this.intervalIds[e]);
                    for (e = 0; e < this.timeoutIds.length; e++) clearTimeout(this.timeoutIds[e]);
                    this.SendMessage(["clear", {}])
                }, EzoicBanger.prototype.IsSlotAlive = function(e) {
                    if (null == e || void 0 === window.ezslots) return !1;
                    for (var t = e.ElementId, o = 0; o < ezslots.length; o++) {
                        var n = window[ezslots[o]];
                        if ("object" === i(n) && n.getSlotElementId() === t) return !0
                    }
                    return !1
                }, e.exports = EzoicBanger
            },
            826: function(e, t, o) {
                var EzoicAS = o(86),
                    EzoicA = function() {};
                EzoicA.prototype.Create = function(e, t) {
                    this.slot = new EzoicAS, this.slot.init(), this.slot.populate(e, t), void 0 !== e.slot && void 0 !== e.slot.Ezoic && ezoSyncToDfp(this.slot, e.slot), this.advertiserId = null, this.campaignId = null, this.companyIds = null, this.creativeId = null, this.isBackfill = !0, this.labelIds = [], this.lineItemId = null, this.sourceAgnosticCreativeId = null, this.sourceAgnosticLineItemId = null, this.yieldGroupIds = [], void 0 !== e.creativeId && (this.creativeId = e.creativeId), void 0 !== e.lineItemId && (this.lineItemId = e.lineItemId), this.creativeTemplateId = null, void 0 !== e.creativeTemplateId && (this.creativeTemplateId = e.creativeTemplateId), "boolean" == typeof e.isEmpty ? this.isEmpty = e.isEmpty : this.isEmpty = !0, void 0 !== e.serviceName ? this.serviceName = e.serviceName : this.serviceName = "publisher_ads", void 0 !== e.size ? this.size = e.size : this.size = [], this.slotContentChanged = !0, this.ezoic = !0, this.CreateEventInfoFromGoogleSlot(e)
                }, EzoicA.prototype.CreateEventInfoFromGoogleSlot = function(e) {
                    if (void 0 !== e.slot && "function" == typeof e.slot.getResponseInformation) var t = e.slot.getResponseInformation();
                    else if (void 0 !== e.slot.DFPSlot && null != e.slot.DFPSlot && "function" == typeof e.slot.DFPSlot.getResponseInformation) t = e.slot.DFPSlot.getResponseInformation();
                    else {
                        if (void 0 === this.slot.DFPSlot || null == this.slot.DFPSlot || "function" != typeof this.slot.DFPSlot.getResponseInformation) return;
                        t = this.slot.DFPSlot.getResponseInformation()
                    }
                    null != t && (this.advertiserId = t.advertiserId, this.campaignId = t.campaignId, this.companyIds = t.companyIds, this.creativeId = t.creativeId, this.isBackfill = t.isBackfill, this.labelIds = t.labelIds, this.lineItemId = t.lineItemId, this.sourceAgnosticCreativeId = t.sourceAgnosticCreativeId, this.sourceAgnosticLineItemId = t.sourceAgnosticLineItemId, this.yieldGroupIds = t.yieldGroupIds, this.isEmpty = null === t.sourceAgnosticCreativeId || null === t.sourceAgnosticLineItemId, null == this.creativeId && null != this.sourceAgnosticCreativeId && (this.creativeId = this.sourceAgnosticCreativeId), null == this.lineItemId && null != this.sourceAgnosticLineItemId && (this.lineItemId = this.sourceAgnosticLineItemId), void 0 !== window.ezelifr && null != this.lineItemId && window.ezelifr.includes(this.lineItemId.toString()) && this.slot.setTargeting("reft", "n"))
                }, e.exports = EzoicA
            },
            86: function(e) {
                function t(e) {
                    return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, t(e)
                }
                var EzoicAS = function() {};
                EzoicAS.prototype.init = function() {
                    this.ElementId = "", this.Targeting = {}, this.UnSyncedTargeting = {}, this.AdUnitPath = "", this.GAMAccount = "", this.EzoicSlotName = "", this.Sizes = [], this.Ezoic = !0, this.LoadTime = Date.now(), this.RequestTime = 0
                }, window.ezoSyncToDfp = function(e, t) {
                    if (void 0 !== e.DFPSlot && null != e.DFPSlot && "function" == typeof e.DFPSlot.getTargetingMap) {
                        for (var o in t.UnSyncedTargeting) e.setTargeting(o, t.UnSyncedTargeting[o]);
                        e.UnSyncedTargeting = []
                    }
                }, EzoicAS.prototype.populate = function(e, t) {
                    var o;
                    void 0 === e.ezoic ? (this.ElementId = e.slot.getSlotElementId(), this.Targeting = e.slot.getTargetingMap(), this.AdUnitPath = e.slot.getAdUnitPath(), null != (o = this.AdUnitPath.match(/\/(\d+)[\/,]/)) && o.length > 1 && (this.GAMAccount = o[1]), this.Sizes = e.slot.getSizes(), this.EzoicSlotName = "") : (this.ElementId = e.slot.ElementId, this.Targeting = e.slot.Targeting, this.AdUnitPath = e.slot.AdUnitPath, null != (o = this.AdUnitPath.match(/\/(\d+)[\/,]/)) && o.length > 1 && (this.GAMAccount = o[1]), this.Sizes = e.slot.Sizes, this.EzoicSlotName = e.slot.EzoicSlotName);
                    void 0 !== window.ezsrqt[this.ElementId] && (this.RequestTime = window.ezsrqt[this.ElementId]), t && (this.DFPSlot = ezoGetDFPSlot(this.ElementId, e.slot))
                }, window.ezoGetDFPSlot = function(e, o) {
                    if (void 0 !== o && null != o && 1 != o.Ezoic) return o;
                    for (var i in window.ezslots) {
                        var n = window[ezslots[i]];
                        if ("object" === t(n) && n.getSlotElementId() == e) return n
                    }
                }, EzoicAS.prototype.getSlotElementId = function() {
                    return this.ElementId
                }, EzoicAS.prototype.getTargeting = function(e) {
                    return [this.Targeting[e]]
                }, EzoicAS.prototype.setTargeting = function(e, t) {
                    void 0 !== this.DFPSlot && null != this.DFPSlot || (this.DFPSlot = ezoGetDFPSlot(this.ElementId)), void 0 !== this.DFPSlot && null != this.DFPSlot && this.DFPSlot.setTargeting(e, t), this.Targeting[e] = t
                }, EzoicAS.prototype.getAdUnitPath = function() {
                    return this.AdUnitPath
                }, EzoicAS.prototype.getTargetingMap = function() {
                    return this.Targeting
                }, EzoicAS.prototype.getSizes = function() {
                    return this.Sizes
                }, e.exports = EzoicAS
            },
            880: function(e, t, o) {
                function n(e) {
                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, n(e)
                }
                var EzoicBanger = o(683),
                    EzoicA = o(826),
                    s = function(e) {
                        void 0 === e.data && (e.data = e);
                        var t = e.data[0],
                            o = new EzoicA;
                        switch (void 0 !== e.data[1] && void 0 !== e.data[1].ezoic && o.Create(e.data[1], !0), t) {
                            case "collapse":
                                if ("undefined" != typeof URLSearchParams)
                                    if (1 == new URLSearchParams(window.location.search).has("google_preview")) break;
                                "undefined" == typeof requestAnimationFrame ? p.CollapseAd(o.slot) : requestAnimationFrame((function() {
                                    p.CollapseAd(o.slot)
                                }));
                                break;
                            case "ez_pel":
                                !0 === window.usePixelWorker ? window.ezopixel.pel({
                                    slot: o.slot,
                                    eventName: "viewed",
                                    eventValue: 1
                                }) : __ez.pel.AddAndFire(o.slot, [new __ezDotData(e.data[2])]);
                                break;
                            case "refresh_slot":
                                p.l11L1IlLI1IIl1ILI1111I11LlLLL1I(o.slot);
                                break;
                            case "store_data":
                                p.l1lIIIILIIl1LIlI11lI1LlIIIL1(o);
                                p.lIlIlLILII1IIILl1LLILIl11l1LIIl(o);
                                if ("0" == o.slot.getTargeting("nmau")) {
                                    var i = o.size;
                                    void 0 !== o.size && "1" != o.size[0] || (i = p.lI1L11Ill11lLILL1LlL(o.slot)), "undefined" == typeof requestAnimationFrame ? p.ResizeSlot(o.slot.ElementId, i) : requestAnimationFrame((function() {
                                        p.ResizeSlot(o.slot.ElementId, i)
                                    }))
                                }
                                break;
                            case "store_positions":
                                p.l1LlllllllLL1l1LIlIlL1LLI();
                                break;
                            case "timed_refresh":
                                p.lII11111lIL1ILIILILlL1l(o.slot);
                                break;
                            case "update_pv_metrics":
                                p.UpdatePageViewMetricCookie(e.data[2]);
                                break;
                            case "store_auction_data":
                                __ez.queue.addFunc("StoreAuctionData", "IL11ILILIIlLLLILILLLLIILLLIIL11111LLILiiLIliLlILlLiiLLIiILL.StoreAuctionData", [e.data[1], e.data[2]], !1, ["/detroitchicago/raleigh.js"], !0, !1, !0, !0);
                                break;
                            case "destroy_slots":
                                p.lILIIl1LILllllI1IlI1LIlLl(e.data[1], e.data[2])
                        }
                    };
                void 0 === window.ezobv && (window.ezobv = "1");
                var r = "/porpoiseant/nmash.js?v=" + window.ezobv,
                    a = !1,
                    scriptHostDomain = "";
                if (void 0 !== window.ezoScriptHost && (scriptHostDomain = window.ezoScriptHost, void 0 !== document.location.protocol && "https:" == document.location.protocol && (scriptHostDomain = scriptHostDomain.indexOf("http:") > -1 ? scriptHostDomain.replace("http://", "https://") : scriptHostDomain.replace("//", "https://")), -1 == document.location.href.indexOf(scriptHostDomain) && (a = !0)), r = scriptHostDomain + r, (1 == window.ezWp || "undefined" != typeof ezstandalone && !1 === ezstandalone.isForAll || a || void 0 === window.ezslots) && (a = !0), window.Worker && 1 != a) window.ezomash = new Worker(r), ezomash.onmessage = s;
                else {
                    var d = document.createElement("script");
                    d.src = r, window.ezomash = {}, window.ezomash.storedCalls = [], window.ezomash.postMessage = function(e) {
                        window.ezomash.storedCalls.push(e)
                    }, d.onload = function() {
                        var e = window.ezomash.storedCalls;
                        for (window.ezomash = window.ezoic_mash, ezomash.EzoMainMessage = s, i = 0; i < e.length; i++) window.ezomash.postMessage(e[i])
                    }, document.head.appendChild(d)
                }
                if (!0 === window.usePixelWorker) {
                    var l = !1;
                    ("undefined" != typeof ezJsu && 1 == ezJsu || "undefined" != typeof _ez_sa && 1 == _ez_sa || "undefined" != typeof isAmp && !0 === isAmp || "undefined" != typeof ezWp && !0 === ezWp || "undefined" != typeof _ez_send_requests_through_ezoic && !0 === _ez_send_requests_through_ezoic) && (l = !0), ezopixel.postMessage(["initvars", {
                        ezim: _ezim_d,
                        ezaq: _ezaq,
                        isAmp: void 0 !== window.isAmp && isAmp,
                        useG: l
                    }])
                }
                var p = new EzoicBanger;

                function g(e, t, o) {
                    for (var i = 0; i < e; i++)
                        if (t[i].length > 0)
                            for (var n = 0; n < o.length; n++)
                                if (t[i].includes(o[n])) return !0;
                    return !1
                }
                p.init(), window.addEventListener("beforeunload", (function(e) {
                    if (void 0 !== window.ezRecordTimeViewed) {
                        Date.now();
                        for (slot_key in window.ezslots)
                            if (!isNaN(parseInt(slot_key))) {
                                var t = window[ezslots[slot_key]];
                                window.ezGetSlotViewedTime(t, !0)
                            }
                    }
                })), window.ezbanger = function(e) {
                    if (0 == e.isEmpty) {
                        if (!1 === p.isOwnedAd(e)) return;
                        var t = !1,
                            o = 0,
                            i = 0;
                        void 0 !== e.size && (0 == e.size[0] ? t = !0 : (o = e.size[0], i = e.size[1])), setTimeout((function(e, t, o, i) {
                            p.StoreSize(e, t, o, i)
                        }), 1500, e.slot.getSlotElementId(), o, i, t);
                        var n = new EzoicA;
                        n.Create(e, !1), p.lLlLlLIIII1lILIlL(n)
                    }
                }, window.ezvt = function(e) {
                    if (void 0 !== window.ezRecordTimeViewed) {
                        var t = Date.now(),
                            o = e.slot,
                            i = o.getSlotElementId();
                        if (e.inViewPercentage > 50 && (null == p.slot_visibility[i] || p.slot_visibility[i] < 50) && (p.slot_visible_start[i] = t), e.inViewPercentage < 50 && null !== p.slot_visibility[i] && p.slot_visibility[i] > 50) window.ezGetSlotViewedTime(o, !0);
                        p.slot_visibility[i] = e.inViewPercentage
                    }
                }, window.ezvb = function(e) {
                    if (!1 !== p.isOwnedAd(e)) {
                        var t = new EzoicA;
                        t.Create(e, !1), 9999 == e.slot.getTargeting("ap")[0] && (!0 === window.usePixelWorker ? window.ezopixel.pel({
                            slot: t.slot,
                            eventName: "viewed",
                            eventValue: 1
                        }) : __ez.pel.AddAndFire(t.slot, [new __ezDotData("viewed", 1)])), p.SendMessage(["viewed", t])
                    }
                }, window.ezsr = function(e) {
                    if (!1 !== p.isOwnedAd(e)) {
                        var t = new EzoicA;
                        t.Create(e, !1), 1 == t.isEmpty && p.lLlLlLIIII1lILIlL(t)
                    }
                }, window.ezosethbbid = function(e) {
                    if ("object" == n(e)) {
                        var t = !1;
                        void 0 !== window.ezhbopt && 1 == window.ezhbopt && (t = !0);
                        var o = __advertiserRule.length;
                        if (void 0 !== e.meta && void 0 !== e.meta.advertiserDomains && o > 0) {
                            var i = e.meta.advertiserDomains;
                            if (!0 === g(o, __advertiserRule, i)) return
                        }
                        var s = p.GetSlotById(e.adUnitCode),
                            r = e.adUnitCode;
                        if ("object" == n(s)) {
                            var a = s.getTargeting("hb_pb")[0];
                            if (t && (a = s.getTargeting("hb_opt")[0]), parseFloat(a) >= parseFloat(e.cpm)) return;
                            s.setTargeting("hb_bidder", e.bidder), s.setTargeting("hb_adid", e.adId), s.setTargeting("hb_pb", e.pbCg), s.setTargeting("hb_format", e.mediaType), s.setTargeting("hb_ssid", e.adserverTargeting.eps), s.setTargeting("hb_opt", e.adserverTargeting.epp), s.setTargeting("hb_rt", e.adserverTargeting.epr), t && s.setTargeting("hb_pb", ""), void 0 !== window.ezForceHbSolo && window.ezForceHbSolo === e.bidder && (s.setTargeting("hb_opt", "10"), s.setTargeting("nam", "1"))
                        } else if ("function" == typeof ezSetSlotTargeting) {
                            if ("undefined" != typeof ezSlotKVStore && void 0 !== ezSlotKVStore[r] && (void 0 !== ezSlotKVStore[r].hb_pb || void 0 !== ezSlotKVStore[r].hb_opt)) {
                                a = ezSlotKVStore[r].hb_pb;
                                if (t && (a = ezSlotKVStore[r].hb_opt), void 0 !== a && !1 === isNaN(parseFloat(a)) && parseFloat(a) >= parseFloat(e.adserverTargeting.epp)) return
                            }
                            ezSetSlotTargeting(r, "hb_bidder", e.adserverTargeting.epb), ezSetSlotTargeting(r, "hb_adid", e.adserverTargeting.epa), ezSetSlotTargeting(r, "hb_pb", e.adserverTargeting.epp), ezSetSlotTargeting(r, "hb_format", e.adserverTargeting.epf), ezSetSlotTargeting(r, "hb_ssid", e.adserverTargeting.eps), ezSetSlotTargeting(r, "hb_opt", e.adserverTargeting.epp), ezSetSlotTargeting(r, "hb_rt", e.adserverTargeting.epr), t && ezSetSlotTargeting(r, "hb_pb", ""), void 0 !== window.ezForceHbSolo && window.ezForceHbSolo === e.bidder && (s.setTargeting("hb_opt", "10"), s.setTargeting("nam", "1"))
                        }
                    }
                }, window.ezosethbbids = function(e) {
                    void 0 !== window.ezosethbbidsInterval && clearInterval(window.ezosethbbidsInterval);
                    var t = {};
                    if ("undefined" != typeof googletag && 1 == googletag.pubadsReady) {
                        if ("object" == n(e)) {
                            for (var o in e) {
                                if (void 0 === e[o].bids) return;
                                var i = e[o].bids.length,
                                    s = __advertiserRule.length;
                                o.length >= 2 && (o.includes("0_") || (o = o.substr(0, o.length - 2) + "-0"));
                                for (var r = 0; r < i; r++)
                                    if (void 0 !== e[o].bids) {
                                        var a = e[o].bids[r];
                                        if (void 0 !== a.meta.advertiserDomains && s > 0) {
                                            var d = a.meta.advertiserDomains;
                                            if (!0 === g(s, __advertiserRule, d)) continue
                                        }(void 0 === t[o] || a.cpm > t[o].cpm) && (t[o] = a)
                                    }
                            }
                            var l = !1;
                            for (var _ in void 0 !== window.ezhbopt && 1 == window.ezhbopt && (l = !0), t) {
                                var f = p.GetSlotById(_);
                                if ("object" == n(f)) {
                                    if (void 0 !== t[_] && void 0 !== t[_].adserverTargeting) {
                                        var u = f.getTargeting("hb_pb")[0];
                                        if (l && (u = f.getTargeting("hb_opt")[0]), parseFloat(u) >= parseFloat(t[_].adserverTargeting.epp)) continue;
                                        f.setTargeting("hb_bidder", t[_].adserverTargeting.epb), f.setTargeting("hb_adid", t[_].adserverTargeting.epa), f.setTargeting("hb_pb", t[_].adserverTargeting.epp), f.setTargeting("hb_format", t[_].adserverTargeting.epf), f.setTargeting("hb_ssid", t[_].adserverTargeting.eps), f.setTargeting("hb_opt", t[_].adserverTargeting.epp), f.setTargeting("hb_rt", t[_].adserverTargeting.epr), l && f.setTargeting("hb_pb", ""), void 0 !== window.ezForceHbSolo && window.ezForceHbSolo === t[_].adserverTargeting.epb && (f.setTargeting("hb_opt", "10"), f.setTargeting("nam", "1"))
                                    }
                                } else if ("function" == typeof ezSetSlotTargeting) {
                                    if ("undefined" != typeof ezSlotKVStore && void 0 !== ezSlotKVStore[_] && (void 0 !== ezSlotKVStore[_].hb_pb || void 0 !== ezSlotKVStore[_].hb_opt)) {
                                        u = ezSlotKVStore[_].hb_pb;
                                        if (l && (u = ezSlotKVStore[_].hb_opt), void 0 !== u && !1 === isNaN(parseFloat(u)) && parseFloat(u) >= parseFloat(t[_].adserverTargeting.epp)) continue
                                    }
                                    ezSetSlotTargeting(_, "hb_bidder", t[_].adserverTargeting.epb), ezSetSlotTargeting(_, "hb_adid", t[_].adserverTargeting.epa), ezSetSlotTargeting(_, "hb_pb", t[_].adserverTargeting.epp), ezSetSlotTargeting(_, "hb_format", t[_].adserverTargeting.epf), ezSetSlotTargeting(_, "hb_ssid", t[_].adserverTargeting.eps), ezSetSlotTargeting(_, "hb_opt", t[_].adserverTargeting.epp), ezSetSlotTargeting(_, "hb_rt", t[_].adserverTargeting.epr), l && ezSetSlotTargeting(_, "hb_pb", ""), void 0 !== window.ezForceHbSolo && window.ezForceHbSolo === response.bidder && (f.setTargeting("hb_opt", "10"), f.setTargeting("nam", "1"))
                                }
                            }
                        }
                    } else setTimeout((function(e) {
                        "function" == typeof ezosethbbids && ezosethbbids(e)
                    }), 120, e)
                }, document.cookie = "ezouspvv=0;path=/", document.cookie = "ezouspva=0;path=/";
                var _ = !1,
                    f = 0,
                    ezogallbs = function ezogallbs() {
                        if (1 == window.ezoll && 0 == _ && "function" == typeof googletag.pubads && f < 2e4 && (void 0 === window.ezCanEngagePage || 1 == window.ezCanEngagePage)) {
                            if (f++, "number" == window.EzoITimeOut && clearTimeout(window.EzoITimeOut), _ = !0, "function" == typeof window.adjustHbValues && "object" === n(window.ezslots))
                                for (var e = 0; e < window.ezslots.length; e++) window[window.ezslots[e]] && "object" === n(window[window.ezslots[e]]) && window.adjustHbValues(window[window.ezslots[e]]);
                            if ("function" == typeof window.ezasBuild && "object" === n(window.ezslots))
                                for (e = 0; e < window.ezslots.length; e++) window.ezasBuild(window[window.ezslots[e]]);
                            for (e = 0; e < window.ezslots.length; e++) googletag.pubads().refresh(window[window.ezslots[e]]);
                            "function" == typeof window.EzLoadDall && window.EzLoadDall(), p.SendMessage(["idle", null, -1]), p.SetTimeout(p.loadFunc, 2e3)
                        } else if (!1 === _ && 1 == window.ezoll && void 0 === window.ezCanEngagePage) {
                            var t = 10;
                            (void 0 === __ez.nap || __ez.nap[0] <= 1) && (t = 220), setTimeout(ezogallbs, t)
                        }
                    };
                1 == window.ezoll && (window.EzoITimeOut = setInterval((function() {
                    ezogallbs()
                }), 5e3)), window.addEventListener("EzoIvent", (function(e) {
                    (void 0 !== e.detail[0] && e.detail[0] > 1 || e.detail[0] < 0) && ezogallbs()
                })), window.ezGetSlotViewedTime = function(e, t) {
                    if (void 0 === window.ezRecordTimeViewed) return 0;
                    var o = e.getSlotElementId();
                    if (null !== p.slot_visibility[o] && p.slot_visibility[o] > 50) {
                        var i = Date.now(),
                            n = i - p.slot_visible_start[o];
                        null == p.slot_visible_total[o] ? p.slot_visible_total[o] = n : p.slot_visible_total[o] += n, p.slot_visible_start[o] = i;
                        var s = parseInt(p.slot_visible_total[o]);
                        return 1 == t && 0 == isNaN(s) && (!0 === window.usePixelWorker ? window.ezopixel.pel({
                            slot: e,
                            eventName: "viewed_time",
                            eventValue: s
                        }) : __ez.pel.AddAndFire(e, [new __ezDotData("viewed_time", s)])), s
                    }
                    return parseInt(p.slot_visible_total[o])
                }, window.formatBid = function(e, t) {
                    return v = e, v > 300 && (v = 300), "1254144" == t || "21732118914" == t || "" == t ? (v <= 0 ? v = 0 : v <= .5 ? v = 2 * Math.floor(100 * v / 2 + .5) : v <= 1 ? v = 10 * Math.floor(10 * v + .5) : v <= 3 ? v = 20 * Math.floor(100 * v / 20 + .5) : v <= 10 ? v = 50 * Math.floor(100 * v / 50 + .5) : v <= 30 ? v = 100 * Math.floor(100 * v / 100 + .5) : v <= 50 ? v = 200 * Math.floor(100 * v / 200 + .5) : v <= 120 ? v = 500 * Math.floor(100 * v / 500 + .5) : v = 1e3 * Math.floor(100 * v / 1e3 + .5), v / 100 > e && v > 2 && (v <= 50 ? v -= 2 : v <= 100 ? v -= 10 : v <= 300 ? v -= 20 : v <= 1e3 ? v -= 50 : v <= 3e3 ? v -= 100 : v <= 5e3 ? v -= 500 : v -= 1e3)) : (v <= 0 ? v = 0 : v <= 1 ? v = 10 * Math.floor(10 * v + .5) : v <= 3 ? v = 20 * Math.floor(100 * v / 20 + .5) : v <= 10 ? v = 50 * Math.floor(100 * v / 50 + .5) : v <= 30 ? v = 100 * Math.floor(100 * v / 100 + .5) : v <= 50 ? v = 200 * Math.floor(100 * v / 200 + .5) : v <= 120 ? v = 500 * Math.floor(100 * v / 500 + .5) : v = 1e3 * Math.floor(100 * v / 1e3 + .5), v / 100 > e && v > 2 && (v <= 100 ? v -= 10 : v <= 300 ? v -= 20 : v <= 1e3 ? v -= 50 : v <= 3e3 ? v -= 100 : v <= 5e3 ? v -= 200 : v <= 12e3 ? v -= 500 : v -= 1e3)), v
                }, window.fetchezoibfh = function() {
                    var e = {
                        dfpCodes: [window.ezoadxnc],
                        bidFloor: window.ezoadhb
                    };
                    if (!(window.ezoadhb <= 0)) {
                        "1254144" !== window.ezoadxnc && e.dfpCodes.push("1254144");
                        try {
                            var t = "https://basher.ezodn.com/" + ("?did=" + window._ezaq.domain_id + "&bf=" + e.bidFloor + "&dc=" + encodeURIComponent(e.dfpCodes.join("|"))),
                                o = new XMLHttpRequest;
                            o.open("GET", t, !0), o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("X-PINGBACK", "pingpong"), o.onreadystatechange = function() {
                                if (this.readyState === XMLHttpRequest.DONE && 200 === this.status) {
                                    var e = JSON.parse(this.responseText);
                                    for (var t in window.ezoibfh = window.ezoibfh || [], e) {
                                        var o = parseInt(t);
                                        window.ezoibfh[o] = e[t]
                                    }
                                }
                            }, o.send()
                        } catch (e) {}
                    }
                }, window.ezoibfh = window.ezoibfh || {}, window.fetchezoibfh(), window.ezoibfhHF = 0, window.adjustHbValues = function(e) {
                    if (!(window.ezoibfh.length < 1) && (void 0 !== window.ezForceHbSolo && (e.setTargeting("act", "1"), e.setTargeting("ga", ""), e.setTargeting("reft", "n"), e.setTargeting("eba", "0")), void 0 !== window.ezhbopt && 1 == window.ezhbopt && "undefined" != typeof epbjs)) {
                        var t = parseFloat(e.getTargeting("hb_opt")[0]),
                            o = parseFloat(e.getTargeting("br1")[0]),
                            i = e.getTargeting("eb_br")[0];
                        if (0 == isNaN(o) && 0 == isNaN(t)) {
                            var n = o / 100;
                            if (t >= n) {
                                var s = window.formatBid(t, e.GAMAccount);
                                if (s >= 0) {
                                    var r = "";
                                    if (window.ezoibfh.hasOwnProperty(s)) n = s, r = window.ezoibfh[s];
                                    else {
                                        if (0 === window.ezoibfhHF && -1 !== window.ezoibfhHF) {
                                            var a = 0;
                                            for (bf in window.ezoibfh) bf > a && (a = bf);
                                            window.ezoibfhHF = 0 === a ? 0 : a
                                        }
                                        n = window.ezoibfhHF, r = window.ezoibfh[window.ezoibfhHF]
                                    }
                                    "" != i && (e.setTargeting("br1", String(n)), e.setTargeting("eb_br", r)), e.setTargeting("hb_pb", ""), e.setTargeting("nam", "1")
                                }
                            }
                        }
                    }
                };
                var u = !1,
                    w = !1;
                window.ezasBuild = function(e) {
                    if (u || (void 0 === window.ezasAutoAds && (window.google_reactive_ads_global_state = {
                            adCount: {},
                            floatingAdsStacking: {
                                maxZIndexListeners: [],
                                maxZIndexRestrictions: {},
                                nextRestrictionId: 0
                            },
                            messageValidationEnabled: !1,
                            reactiveTypeDisabledByPublisher: {},
                            reactiveTypeEnabledInAsfe: {},
                            sideRailAvailableSpace: [],
                            sideRailOverlappableElements: [],
                            stateForType: {},
                            tagSpecificState: {},
                            wasPlaTagProcessed: !0,
                            wasReactiveAdConfigReceived: {
                                1: !0,
                                2: !0,
                                8: !0
                            },
                            wasReactiveAdVisible: {},
                            wasReactiveTagRequestSent: !0,
                            description: "Can't disable auto ads programmatically on the page, so here we are!"
                        }), u = !0), "function" != typeof MutationObserver || "function" != typeof IntersectionObserver) return !1;
                    if (void 0 === e || void 0 === window.ezasVars) return !1;
                    if (void 0 === e.getTargeting("compid") || 1 != e.getTargeting("compid")) return !1;
                    if (!w && void 0 === window.ezasAutoAds) {
                        var t = document.createElement("script");
                        t.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", t.crossOrigin = "anonymous", t.async = !0, document.getElementsByTagName("head")[0].appendChild(t), w = !0
                    }
                    if (5 == e.getTargeting("al")[0] % 1e3) return e.setTargeting("compid", "0"), e.setTargeting("nocompoverride", "1"), !1;
                    var o = window.ezasVars.cid,
                        i = "ca-" + window.ezasVars.pid;
                    if (void 0 === o || "" === o) return !1;
                    e.setTargeting("reft", "n");
                    var n = document.getElementById(e.getSlotElementId());
                    p.RemoveLoadingIcon(e);
                    var s = e.getSlotElementId() + "-asloaded";
                    if (null !== document.getElementById(s)) return !0;
                    var r = document.createElement("ins");
                    return r.id = s, r.className = "adsbygoogle ezasloaded", r.dataset.adClient = i, r.dataset.adChannel = o, r.dataset.fullWidthResponsive = "true", r.style.display = "inline-block", r.style.width = n.attributes.ezaw.value + "px", r.style.height = n.attributes.ezah.value + "px", n.appendChild(r), (adsbygoogle = window.adsbygoogle || []).push({}), !0 === window.usePixelWorker ? (window.ezopixel.pel({
                        slot: e,
                        eventName: "stat_source_id",
                        eventValue: 44
                    }), window.ezopixel.pel({
                        slot: e,
                        eventName: "adsensetype",
                        eventValue: 2
                    })) : (__ez.pel.AddAndFire(e, [new __ezDotData("stat_source_id", 44)]), __ez.pel.AddAndFire(e, [new __ezDotData("adsensetype", 2)])), new MutationObserver(window.ezaslEvent).observe(document.getElementById(e.getSlotElementId() + "-asloaded"), {
                        attributes: !0
                    }), !0
                }, window.ezorefgsl = function(e) {
                    Array.isArray(e) || (e = [e]);
                    for (var t = e.length, o = Array(), i = 0; i < t; i++) {
                        var n = e[i];
                        if ("9999" != n.getTargeting("ap")[0]) window.ezasBuild(n) || (window.adjustHbValues(n), n.setTargeting("reqt", Date.now()), void 0 !== n.DFPSlot ? o.push(n.DFPSlot) : o.push(n));
                        else {
                            var s = n.getTargeting("ic");
                            Array.isArray(s) && s.length > 0 && (s = s[0]);
                            var r = parseInt(s);
                            if (!isNaN(r) && r >= 10) continue;
                            if (1 == googletag.destroySlots([ezslot_interstitial]) && (ezslot_interstitial = googletag.defineOutOfPageSlot(n.AdUnitPath, googletag.enums.OutOfPageFormat.INTERSTITIAL), null != ezslot_interstitial)) {
                                var a = ezslot_interstitial.addService(googletag.pubads());
                                for (var d in n.Targeting) a.setTargeting(d, n.Targeting[d]);
                                googletag.display(ezslot_interstitial), googletag.pubads().refresh([ezslot_interstitial])
                            }
                        }
                    }
                    if (!(o.length < 1))
                        for (; o.length > 0;) googletag.pubads().refresh(o.splice(0, 30))
                }, e.exports = p
            }
        },
        t = {};
    var o = function o(i) {
        var n = t[i];
        if (void 0 !== n) return n.exports;
        var s = t[i] = {
            exports: {}
        };
        return e[i](s, s.exports, o), s.exports
    }(880);
    IL11ILILIIlLLLILILLLLIILLLIIL11111LLILiiLIliLlILlLiiLLIiILL = o
}();