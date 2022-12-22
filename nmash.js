var ezoScriptHost = '//www.nicesnippets.com';
(function() {
    (() => {
        var g = function() {};
        onmessagefunc = function(a) {
            "undefined" == typeof a.data && (a.data = a);
            var c = a.data[1];
            switch (a.data[0]) {
                case "ad_loaded":
                    b.AdLoadedEvent(c);
                    break;
                case "clear":
                    b.ClearIntervalAndTimeout();
                    break;
                case "idle":
                    0 <= b.idle_count && (b.idle_count = a.data[2]);
                    b.IsReadyForRefresh() && b.RefreshQueuedSlots();
                    break;
                case "init":
                    b.InitExternalData(a.data[2]);
                    break;
                case "set_bfh":
                    b.ezoibfh = a.data[2];
                    break;
                case "viewed":
                    b.AdViewedEvent(c);
                    break;
                case "reinitialize":
                    b.destroy();
                    b.init();
                    break;
                case "destroy_slots":
                    if (3 >
                        a.data.length) {
                        console.log("Incorrect amount of arguments cannot destroy slots");
                        console.log("e.data: ", a.data);
                        break
                    }
                    var d = a.data[2];
                    if (!Array.isArray(c) || !Array.isArray(d)) {
                        console.log("Incorrect data cannot destroy slots");
                        break
                    }
                    b.DestroySlots(c, d, "undefined" !== typeof a.data[3] ? a.data[3] : null);
                    break;
                case "direct_ad":
                    b.HandleDirectAd(c)
            }
        };
        "undefined" == typeof window || void 0 === window.document ? onmessage = onmessagefunc : (g.prototype.onmessage = onmessagefunc, g.prototype.postMessage = onmessagefunc);
        g.prototype.out =
            function() {
                for (var a = "ww: ", c = 0; c < arguments.length; c++) "undefined" !== typeof arguments[c] && null !== arguments[c] && (a = "string" == typeof arguments[c] ? a + arguments[c] : a + JSON.stringify(arguments[c]));
                console.log(a)
            };
        g.prototype.init = function() {
            b.initVars();
            b.startIdleFailsafe()
        };
        g.prototype.destroy = function() {
            b.ClearIntervalAndTimeout()
        };
        g.prototype.InitExternalData = function(a) {
            for (var c in a) b[c] = a[c];
            a = [b.ezoadxnc];
            c = b.ezoadhb;
            if (!(0 >= b.ezoadhb)) {
                "1254144" !== b.ezoadxnc && a.push("1254144");
                var d = function() {
                    if (this.readyState ===
                        XMLHttpRequest.DONE && 200 === this.status) {
                        var k = JSON.parse(this.responseText);
                        b.ezoibfh = b.ezoibfh || {};
                        for (var m in k) {
                            var n = parseInt(m);
                            b.ezoibfh[n] = k[m]
                        }
                    }
                };
                try {
                    var f = "?did=" + b.did + "&bf=" + c + "&dc=" + encodeURIComponent(a.join("|")),
                        h = new XMLHttpRequest;
                    h.open("GET", "https://basher.ezodn.com/" + f, !1);
                    h.setRequestHeader("Content-Type", "application/json");
                    h.setRequestHeader("X-PINGBACK", "pingpong");
                    h.onreadystatechange = d;
                    h.send()
                } catch (k) {}
            }
        };
        g.prototype.initVars = function() {
            this.ezoadxnc = "";
            this.ezoadhb = 0;
            this._ebcids = [];
            this.__banger_pmp_deals = {};
            this.ezorbf = {};
            this.ezoplbf = {};
            this.ezoibfh = {};
            this.ezbfcr = null;
            this.ezbflclcr = 1;
            this.ezslots = {};
            this.ezaxmns = {};
            this.ezaucmns = {};
            this.ezdid = 0;
            this.dynamic_mod = 1;
            this.dynamic_set = new Set;
            this.dynamic_trigger = !1;
            this.viewed_slots = {};
            this.intervalIds = [];
            this.timeoutIds = [];
            this.slot_retries = {};
            this.slot_max_retries = {};
            this.lazy_load_slots = {};
            this.slots_available_for_refresh = {};
            this.slots_eb_wait_time = {};
            this.slot_top_location = {};
            this.slot_order = [];
            this.ad_load_failsafe_interval = {};
            this.slot_positions = {};
            this.position_check_loop_control = 0;
            this.spacing_adjusted_slots = {};
            this.slots_initially_loaded = [];
            this.slots_loaded_non_yet_refreshable = {};
            this.anchor_slots = [];
            this.safe_labeled_slots = [];
            this.conflict_slots = {};
            this.adblock_css_added = 0;
            this.disable_refresh_slots = {};
            this.ads_loaded = 0;
            this.initial_ad_positions_stored = !1;
            this.slot_positions_stored = {};
            this.words_at_y_pos = {};
            this.words_at_y_pos_keys = [];
            this.words_before_stored = {};
            this.bfh = {};
            this.currently_refreshing = {};
            this.slot_refresh_epochs = {};
            this.init_time = Date.now();
            this.is_idle = !1;
            this.slots_waiting_for_refresh = [];
            this.ensure_minimum_decrease = !0;
            this.gam_account = "";
            this.auction_data = {};
            this.abtest = "";
            this.hbopt = !1;
            this.ezdot = {};
            this.ezpel = {}
        };
        g.prototype.SendMessage = function(a) {
            "undefined" == typeof window || void 0 === window.document ? postMessage(a) : "function" == typeof this.EzoMainMessage && this.EzoMainMessage(a)
        };
        g.prototype.ClearIntervalAndTimeout = function() {
            for (var a = 0; a < this.intervalIds.length; a++) clearInterval(this.intervalIds[a]);
            for (a = 0; a < this.timeoutIds.length; a++) clearTimeout(this.timeoutIds[a])
        };
        SetSlotTargeting = function(a, c, d) {
            a.UnSyncedTargeting[c] = d;
            a.Targeting[c] = d
        };
        g.prototype.AdLoadedEvent = function(a) {
            if (!1 !== b.isOwnedAd(a)) {
                var c = a.slot.ElementId;
                if (-1 !== c.indexOf("gpt_unit_")) {
                    var d = c.lastIndexOf("_"),
                        f = parseInt(c.substring(d + 1));
                    isNaN(f) || (c = c.substring(0, d))
                }
                d = a.slot.AdUnitPath;
                null != b.slots_available_for_refresh[c] && c in b.auction_data && b.auctionInit(c, b.ConvertToUSD(b.slots_available_for_refresh[c]), b.auction_data[c].refresh_ad_count +
                    1, b.auction_data[c].multi_ad_unit, b.auction_data[c].multi_ad_count);
                b.viewed_slots[a.slot.ElementId] = 0;
                b.slots_available_for_refresh[a.slot.ElementId] = null;
                "" == b.gam_account && "" != a.slot.GAMAccount && (b.gam_account = a.slot.GAMAccount);
                if (!0 !== b.slots_loaded_non_yet_refreshable[c]) {
                    b.currently_refreshing[c] = !1;
                    b.disable_refresh_slots[c] = !1;
                    var h = b.GetAuctionMins(a.slot)[1],
                        k = 2;
                    !1 === b.slot_retries.hasOwnProperty(c) && (b.slot_retries[c] = 0);
                    var m = b.GetBidFloorInUSD(a.slot),
                        n = b.LoadTargeting(a.slot, "eb_br", !0),
                        l = b.LoadTargeting(a.slot, "ap", !0),
                        p = b.LoadTargeting(a.slot, "al", !0),
                        q = b.LoadTargeting(a.slot, "compid", !0);
                    b.LoadTargeting(a.slot, "reft", !0);
                    var e = b.LoadTargeting(a.slot, "refs", !0),
                        I = b.LoadTargeting(a.slot, "hb_opt", !0),
                        x = b.LoadTargeting(a.slot, "hb_ssid", !0),
                        J = b.LoadTargeting(a.slot, "disablegoogle", !0),
                        B = b.LoadTargeting(a.slot, "ga", !0),
                        t = b.LoadTargeting(a.slot, "bv", !0),
                        K = b.LoadTargeting(a.slot, "bvm", !0),
                        L = b.LoadTargeting(a.slot, "bvr", !0),
                        M = b.LoadTargeting(a.slot, "at", !0),
                        N = b.LoadTargeting(a.slot,
                            "brf", !0),
                        O = b.LoadTargeting(a.slot, "gala", !0),
                        C = b.LoadTargeting(a.slot, "gas", !0),
                        D = b.LoadTargeting(a.slot, "asau", !0),
                        y = b.LoadTargeting(a.slot, "bra", !0),
                        u = b.LoadTargeting(a.slot, "ft", !0),
                        E = b.LoadTargeting(a.slot, "ftsn", !0),
                        F = b.LoadTargeting(a.slot, "ftsng", !0),
                        v = b.LoadTargeting(a.slot, "alc", !0),
                        G = parseInt(b.LoadTargeting(a.slot, "mau", !0)),
                        H = parseInt(b.LoadTargeting(a.slot, "nmau", !0));
                    b.ezabtest = y;
                    var z = a.slot.AdUnitPath.split("/")[1];
                    c in b.auction_data || b.auctionInit(c, m, 0, G, H);
                    "undefined" == typeof b._ebcids &&
                        (b._ebcids = [138231308856, 138231308940, 138231308949, 138231387842, 138231421744, 138231421759, 138231421774, 138231421783, 138231421789, 138231421792, 138242067587, 138242067590, 138242067602, 138242067605, 138242067608, 138242067614, 138242229406, 138242229415, 138242229421, 138242229430]);
                    f = b.ArrayContains(b._ebcids, a.creativeId);
                    5166837810 == a.lineItemId && (f = !0);
                    var w = "undefined" != typeof m && (null == a.creativeId && null == a.lineItemId && !0 === a.isEmpty || 1 == f);
                    !0 === w && b.slot_retries[c] <= k && (a.isEmpty = !0);
                    if (0 === b.ads_loaded &&
                        !b.dynamic_trigger && w && 0 != t) switch (y) {
                        case "mod57":
                            b.SetDynamicModLow(b.slot_retries[c]);
                            break;
                        case "mod58":
                            b.SetDynamicModMedInc(b.slot_retries[c]);
                            break;
                        case "mod59":
                            b.SetDynamicModMedDec(b.slot_retries[c]);
                            break;
                        case "mod60":
                            b.SetDynamicModHigh(b.slot_retries[c])
                    }
                    f = "undefined" != typeof b.ezoadxnc && 3 < b.ezoadxnc.length ? b.ezoadxnc : z;
                    f != z && (f += "|" + z);
                    if ("undefined" == typeof e || "" == e) e = 30;
                    if ("undefined" !== typeof x && "" != x) switch (x) {
                        case "10010":
                        case "10011":
                        case "10013":
                        case "10015":
                        case "10016":
                        case "10017":
                        case "10018":
                        case "10019":
                        case "10020":
                        case "10028":
                        case "10030":
                        case "10031":
                        case "10033":
                        case "10034":
                        case "10035":
                        case "10039":
                        case "10048":
                        case "10050":
                        case "10054":
                        case "10057":
                        case "10058":
                        case "10060":
                        case "10061":
                        case "10062":
                            e =
                                30
                    }
                    "9999" != l && SetSlotTargeting(a.slot, "refs", e.toString());
                    "undefined" !== typeof a.slot.Targeting.fpfl && SetSlotTargeting(a.slot, "fpfl", "2");
                    e *= 1E3;
                    "0" == q && void 0 != O && "lu" == M && (t = "100");
                    k = b.CalculateNewFloor(m, b.slot_retries[c] + 1, p, t, f, n, N, h, K, L, y);
                    l = k.rf;
                    k = k.mr;
                    b.IsDynamicModEligible(b.ads_loaded, b.dynamic_trigger, b.dynamic_set.has(c)) && (l *= b.dynamic_mod, b.dynamic_set.add(c));
                    "undefined" === typeof b.slot_max_retries[c] ? b.slot_max_retries[c] = k : k = b.slot_max_retries[c];
                    m <= h && !0 === w && b.slot_retries[c] <=
                        k && (b.slot_retries[c] = k + 1);
                    !0 === a.isEmpty && (b.slot_retries[c] == k + 1 && "1" != q && "7" != q && "2005" != p && "1005" != p && "3005" != p && "1031" != p && "1032" != p || 34 == t) && (t = p = !1, "undefined" !== typeof C && 0 < C.length ? p = !0 : "undefined" !== typeof D && 0 < D.length && (t = !0), p && t ? (SetSlotTargeting(a.slot, "compid", "1"), k++) : t && 1 != q && (SetSlotTargeting(a.slot, "compid", "1"), k++), SetSlotTargeting(a.slot, "nocompoverride", "1"));
                    if (!0 === w && b.slot_retries[c] <= k)
                        if (b.currently_refreshing[c] = !0, "1" == J && 0 < I && "undefined" != typeof B && "0" != B && (SetSlotTargeting(a.slot,
                                "ga2", a.slot.Targeting.ga), SetSlotTargeting(a.slot, "ga", "0"), b.SetBidFloor(a.slot, h)), b.slot_retries[c]++, "0" == u && 0 < E && b.slot_retries[c] >= E && SetSlotTargeting(a.slot, "ft", "1"), (null == u || "0" == u || "1" == u) && 0 < F && b.slot_retries[c] >= F && (SetSlotTargeting(a.slot, "ft", "2"), l = 0), "undefined" !== typeof n && b.slot_retries[c] == k && b.FetchBidFloorHash(0, f), b.slot_retries[c] > k) {
                            if (b.auctionUpdate(c, b.auction_data[c].bid_floor_filled, b.ConvertToUSD(h), b.auction_data[c].auction_count + 1), b.FetchBidFloorHash(h, f), b.RefreshSlot(a,
                                    h), "undefined" != typeof b.__banger_pmp_deals) {
                                h = a.slot.Targeting.deal1 || [];
                                for (var r in b.__banger_pmp_deals)
                                    if (m = b.__banger_pmp_deals[r], m.SlotName == d) {
                                        for (var A in m.Deals) r = m.Deals[A], -1 === h.indexOf(r.DealId) && h.push(r.DealId);
                                        "undefined" == typeof h || 1 > h.length ? SetSlotTargeting(a.slot, "deal1", "") : SetSlotTargeting(a.slot, "deal1", h);
                                        break
                                    }
                            }
                        } else {
                            n = l;
                            for (q = b.FormatBid(n); n > h && q == m && 1 == b.ensure_minimum_decrease;) n *= .9, q = b.FormatBid(n);
                            if ("undefined" != typeof b.__banger_pmp_deals)
                                for (r in h = a.slot.Targeting.deal1 || [], b.__banger_pmp_deals)
                                    if (m = b.__banger_pmp_deals[r], m.SlotName == d) {
                                        for (A in m.Deals) r = m.Deals[A], n < r.Floor && -1 === h.indexOf(r.DealId) && h.push(r.DealId);
                                        "undefined" == typeof h || 1 > h.length ? SetSlotTargeting(a.slot, "deal1", "") : SetSlotTargeting(a.slot, "deal1", h);
                                        break
                                    }
                            b.auctionUpdate(c, b.auction_data[c].bid_floor_filled, b.ConvertToUSD(q), b.auction_data[c].auction_count + 1);
                            b.FetchBidFloorHash(q, f);
                            b.RefreshSlot(a, q)
                        }
                    else !1 === a.isEmpty ? (b.SendMessage(["update_pv_metrics", a, m]), b.ads_loaded++, b.slots_loaded_non_yet_refreshable[a.slot.ElementId] = !0, v = isNaN(v) ? 1 : parseInt(v) + 1, SetSlotTargeting(a.slot, "alc", v), b.SendMessage(["store_data", a]), c in b.auction_data && null !== b.auction_data[c].bid_floor_initial && (b.auction_data[c].auction_duration = 0 == a.slot.RequestTime ? 0 : Date.now() - a.slot.RequestTime, b.auction_data[c].t_epoch = Math.round(Date.now() / 1E3), b.auction_data[c].line_item_id = a.lineItemId, b.SendMessage(["store_auction_data", a, b.auction_data[c]]), b.auctionInit(c, null, b.auction_data[c].refresh_ad_count, G, H)), b.checkAllAdsLoaded(), b.IsRefreshOn(a.slot) &&
                        b.StartRefreshAllowedTimer(a.slot, m, e), b.slot_retries[c] = 0, clearTimeout(b.ad_load_failsafe_interval), b.ad_load_failsafe_interval = b.SetTimeout(b.LoadUnloadedAds, 5E3)) : b.SendMessage(["collapse", a])
                }
            }
        };
        g.prototype.SetDynamicModLow = function(a) {
            1 >= a ? b.dynamic_mod = 1 : 2 >= a ? b.dynamic_mod = .8 : (b.dynamic_mod = .64, b.dynamic_trigger = !0)
        };
        g.prototype.SetDynamicModMedInc = function(a) {
            b.dynamic_mod = 1 >= a ? 1 : .5
        };
        g.prototype.SetDynamicModMedDec = function(a) {
            3 < a && (b.dynamic_mod = .5, b.dynamic_trigger = !0)
        };
        g.prototype.SetDynamicModHigh =
            function(a) {
                1 >= a ? b.dynamic_mod = 1 : 2 >= a ? b.dynamic_mod = 1 / 2.75 : (b.dynamic_mod = 1 / 7.5625, b.dynamic_trigger = !0)
            };
        g.prototype.IsDynamicModEligible = function(a, c, d) {
            return !d && 0 === a && c || !d && 0 < a ? !0 : !1
        };
        g.prototype.AdViewedEvent = function(a) {
            !1 !== b.isOwnedAd(a) && (b.viewed_slots[a.slot.ElementId] = 1, b.IsRefreshOn(a.slot) && b.SetTimeout(function() {
                b.isSlotAlive(a.slot) && b.TimedRefresh(a)
            }, 15E3), b.SendMessage(["ez_pel", a, ["viewed", 1]]))
        };
        g.prototype.ArrayContains = function(a, c) {
            if (c !== c || "object" != typeof a) return !1;
            if ("function" == typeof Array.prototype.includes) return a.includes(c);
            for (var d = a.length, f = 0; f < d; f++)
                if (a[f] == c) return !0;
            return !1
        };
        g.prototype.GetCookie = function(a) {
            a += "=";
            for (var c = decodeURIComponent(document.cookie).split(";"), d = 0; d < c.length; d++) {
                for (var f = c[d];
                    " " == f.charAt(0);) f = f.substring(1);
                if (0 == f.indexOf(a)) return f.substring(a.length, f.length)
            }
            return ""
        };
        g.prototype.CalculateNewFloor = function(a, c, d, f, h, k, m, n, l, p, q) {
            var e = {};
            e.rf = a;
            e.mr = 9;
            "object" == typeof l && (l = l[0]);
            "object" == typeof p && (p =
                p[0]);
            "object" == typeof d && (d = d[0]);
            if ("undefined" != typeof b.ezorbf && "undefined" != typeof b.ezorbf[d] && 0 < b.ezorbf[d].length) e.mr = b.ezorbf[d].length, b.ezorbf[d].shift(), e.rf = 0 < b.ezorbf[d].length ? b.ezorbf[d][0] : 0, "undefined" != typeof b.ezoplbfh && "undefined" != typeof b.ezoplbfh[d] && 1 < b.ezoplbfh[d].length && (b.ezoplbfh[d].shift(), b.ezoibfh[e.rf] = b.ezoplbfh[d][0]);
            else if (0 < p) switch (e.mr = p, l) {
                case "0":
                    bid_decrease_amount = 1 == c ? .5 : c / e.mr * .8 + .1;
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "1":
                    e.rf = .85 * a;
                    break;
                case "2":
                    c >=
                        e.mr ? e.rf = .9 * a : (d = e.mr, 5 < e.mr && (d = 5 + .1 * e.mr), e.rf = a * (1 - .1 * (d - c)));
                    break;
                case "3":
                    e.rf = a;
                    0 == c % 2 ? (e.rf = .75 * a, b.ensure_minimum_decrease = !0) : b.ensure_minimum_decrease = !1;
                    break;
                case "4":
                    e.rf *= c <= e.mr / 2 ? .9 : c == e.mr / 2 + 1 ? .4 : c / e.mr * .65;
                    break;
                default:
                    bid_decrease_amount = 1 == c ? .5 : c / e.mr * .8 + .1, e.rf = a * (1 - bid_decrease_amount)
            } else if ("mod98" != q) switch ("object" == typeof f && (f = f[0]), f) {
                case "1":
                    1 == c ? bid_decrease_amount = .5 : 1E3 == d || 1001 == d || 1002 == d || 1003 == d || 2001 == d || 2002 == d || 3E3 == d || 3001 == d || 3002 == d ? (e.mr = 4, bid_decrease_amount =
                        .2 * (c - 1)) : (e.mr = 9, bid_decrease_amount = .06 * (c - 1));
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "2":
                    1 == c ? bid_decrease_amount = .5 : 1E3 == d || 1001 == d || 1002 == d || 1003 == d || 2001 == d || 2002 == d || 3E3 == d || 3001 == d || 3002 == d ? (e.mr = 2, bid_decrease_amount = .3 * (c - 1)) : (e.mr = 9, bid_decrease_amount = .06 * (c - 1));
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "3":
                    1 == c ? bid_decrease_amount = .5 : 1E3 == d || 1001 == d || 1002 == d || 1003 == d || 2001 == d || 2002 == d || 3E3 == d || 3001 == d || 3002 == d ? (e.mr = 6, bid_decrease_amount = .15 * (c - 1)) : (e.mr = 9, bid_decrease_amount = .06 *
                        (c - 1));
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "4":
                    1 == c ? bid_decrease_amount = .6 : 1E3 == d || 1001 == d || 1002 == d || 1003 == d || 2001 == d || 2002 == d || 3E3 == d || 3001 == d || 3002 == d ? (e.mr = 2, bid_decrease_amount = .6) : (e.mr = 5, bid_decrease_amount = .16 * (c - 1));
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "5":
                    1 == c ? bid_decrease_amount = .5 : 1E3 == d || 1001 == d || 1002 == d || 1003 == d || 2001 == d || 2002 == d || 3E3 == d || 3001 == d || 3002 == d ? (e.mr = 3, bid_decrease_amount = .25 * (c - 1)) : (e.mr = 7, bid_decrease_amount = .12 * (c - 1));
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "11":
                    1 ==
                        c ? bid_decrease_amount = .5 : (e.mr = 1, bid_decrease_amount = c / (e.mr + .15) * .8);
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "12":
                    1 == c ? bid_decrease_amount = .5 : (e.mr = 2, bid_decrease_amount = c / (e.mr + .15) * .8);
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "13":
                    1 == c ? bid_decrease_amount = .5 : (e.mr = 3, bid_decrease_amount = c / (e.mr + .15) * .8);
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "14":
                    1 == c ? bid_decrease_amount = .5 : (e.mr = 4, bid_decrease_amount = c / (e.mr + .15) * .8);
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "15":
                    1 == c ? bid_decrease_amount =
                        .5 : (e.mr = 5, bid_decrease_amount = c / (e.mr + .15) * .8);
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "16":
                    1 == c ? bid_decrease_amount = .5 : (e.mr = 6, bid_decrease_amount = c / (e.mr + .15) * .8);
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "17":
                    1 == c ? bid_decrease_amount = .5 : (e.mr = 7, bid_decrease_amount = c / (e.mr + .15) * .8);
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "18":
                    1 == c ? bid_decrease_amount = .5 : (e.mr = 8, bid_decrease_amount = c / (e.mr + .15) * .8);
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "19":
                    1 == c ? bid_decrease_amount = .5 : (e.mr = 9, bid_decrease_amount =
                        c / (e.mr + .15) * .8);
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "20":
                    1 == c ? bid_decrease_amount = .5 : (e.mr = 10, bid_decrease_amount = c / (e.mr + .15) * .8);
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "21":
                    5 > c && 1200 < a ? bid_decrease_amount = .22 : (7 > c && 200 < a || (e.mr = 3), bid_decrease_amount = .6);
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "22":
                    1 == c ? bid_decrease_amount = .5 : (e.mr = 5, bid_decrease_amount = c / (e.mr + .15) * .8);
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "23":
                    1 == c ? bid_decrease_amount = .3 : (e.mr = 3, bid_decrease_amount = .1);
                    e.rf = a *
                        (1 - bid_decrease_amount);
                    break;
                case "24":
                    e.rf = a - (a - m) / 2 * c + 20;
                    e.mr = 2;
                    break;
                case "25":
                    e.mr = 5;
                    e.rf = .85 * a;
                    break;
                case "26":
                    e.mr = 3;
                    e.rf = a * (1 - .33);
                    break;
                case "27":
                    e.mr = 3;
                    e.rf = .9 * a;
                    break;
                case "28":
                    e.mr = 5;
                    e.rf = a * (1 - .1 * (e.mr - c));
                    break;
                case "29":
                    e.mr = 10;
                    e.rf = .9 * a;
                    break;
                case "30":
                    e.mr = 4;
                    e.rf = a;
                    b.ensure_minimum_decrease = 0 == c % 3 ? !0 : !1;
                    break;
                case "31":
                    e.mr = 7;
                    e.rf = a;
                    b.ensure_minimum_decrease = 0 == c % 3 ? !0 : !1;
                    break;
                case "32":
                    e.mr = 7;
                    e.rf = a;
                    b.ensure_minimum_decrease = 0 == c % 3 ? !0 : !1;
                    c == e.mr - 1 && (n = e.rf = 0);
                    break;
                case "33":
                    e.mr =
                        20;
                    e.rf = a;
                    b.ensure_minimum_decrease = 0 == c % 3 ? !0 : !1;
                    break;
                case "99":
                    e.mr = 50;
                    e.rf = a;
                    b.ensure_minimum_decrease = 0 == c % 3 ? !0 : !1;
                    c == e.mr - 1 && (n = e.rf = 0);
                    break;
                case "100":
                    1 == c ? bid_decrease_amount = .3 : (e.mr = 8, bid_decrease_amount = .22);
                    e.rf = a * (1 - bid_decrease_amount);
                    break;
                case "9":
                    e.mr = 1;
                    e.rf = 0;
                    break;
                default:
                    1E3 == d || 1001 == d || 1002 == d || 1003 == d || 2001 == d || 2002 == d || 3E3 == d || 3001 == d || 3002 == d ? (e.mr = 2, bid_decrease_amount = .3 * (c + 1)) : (e.mr = 9, bid_decrease_amount = .06 * (c + 1)), e.rf = a * (1 - bid_decrease_amount)
            }
            e.rf < n && (e.rf = n);
            "undefined" !==
            typeof k && b.FetchBidFloorHash(e.rf, h);
            return e
        };
        g.prototype.FetchBidFloorHash = function(a, c) {
            a = b.FormatBid(a);
            if ("undefined" !== typeof b.ezoibfh && "undefined" !== typeof b.ezoibfh[a]) b.bfh[a] = b.ezoibfh[a];
            else if ("undefined" === typeof b.bfh[a]) {
                "undefined" === typeof c && (c = "1254144");
                b.bfh[a] = -1;
                "undefined" === typeof b.ezoibfh && (b.ezoibfh = {});
                b.ezoibfh[a] = -1;
                var d = new XMLHttpRequest;
                c = "//go.ezoic.net/bfhash/" + c + "/" + a;
                d.onreadystatechange = function(f) {
                    return function() {
                        if (4 == this.readyState && 200 == this.status) {
                            var h =
                                "";
                            try {
                                h = JSON.parse(this.responseText)
                            } catch (k) {
                                h = this.responseText
                            }
                            b.bfh[f] = h;
                            b.ezoibfh[f] = h
                        }
                    }
                }(a);
                d.open("GET", c);
                d.send()
            }
        };
        g.prototype.checkAllAdsLoaded = function() {
            !1 === b.initial_ad_positions_stored && b.ads_loaded === b.ezslots.length && (b.SendMessage(["store_positions"], {}), b.initial_ad_positions_stored = !0)
        };
        g.prototype.FormatBid = function(a) {
            a /= 100;
            300 < a && (a = 300);
            return a = "1254144" == b.gam_account || "21732118914" == b.gam_account || "" == b.gam_account ? 0 >= a ? 0 : .5 >= a ? 2 * Math.floor(100 * a / 2 + .5) : 1 >= a ? 10 * Math.floor(100 *
                a / 10 + .5) : 3 >= a ? 20 * Math.floor(100 * a / 20 + .5) : 10 >= a ? 50 * Math.floor(100 * a / 50 + .5) : 30 >= a ? 100 * Math.floor(100 * a / 100 + .5) : 50 >= a ? 200 * Math.floor(100 * a / 200 + .5) : 120 >= a ? 500 * Math.floor(100 * a / 500 + .5) : 1E3 * Math.floor(100 * a / 1E3 + .5) : 0 >= a ? 0 : 1 >= a ? 10 * Math.floor(10 * a + .5) : 3 >= a ? 20 * Math.floor(100 * a / 20 + .5) : 10 >= a ? 50 * Math.floor(100 * a / 50 + .5) : 30 >= a ? 100 * Math.floor(100 * a / 100 + .5) : 50 >= a ? 200 * Math.floor(100 * a / 200 + .5) : 120 >= a ? 500 * Math.floor(100 * a / 500 + .5) : 1E3 * Math.floor(100 * a / 1E3 + .5)
        };
        g.prototype.GetBidFloorInUSD = function(a) {
            bid_val = parseInt(b.LoadTargeting(a,
                "br1", !0));
            "object" == typeof bid_val && (bid_val = bid_val[0]);
            "undefined" !== typeof b.ezbfcr && null !== b.ezbfcr && (bid_val *= b.ezbfcr);
            return bid_val
        };
        g.prototype.ConvertToUSD = function(a) {
            "undefined" !== typeof b.ezbfcr && null !== b.ezbfcr && (a = Math.round(a * b.ezbfcr));
            return a
        };
        g.prototype.GetEzimKeyFromSlot = function(a) {
            slotElName = a.ElementId;
            return "string" == typeof slotElName ? (slotElName = slotElName.replace("div-gpt-ad-", ""), -1 !== slotElName.indexOf("-0_") && (slotElName = slotElName.replace("-0_", "_")), slotElName) : ""
        };
        g.prototype.IsRefreshOn = function(a) {
            return 1 == b.LoadTargeting(a, "compid", !0) || "t" != b.LoadTargeting(a, "reft", !0) && "tf" != b.LoadTargeting(a, "reft", !0) ? !1 : !0
        };
        g.prototype.RefreshSlot = function(a, c) {
            b.RefreshSlotWaitForBid(a, c)
        };
        g.prototype.SetBidFloor = function(a, c) {
            var d = c;
            "undefined" !== typeof b.ezbfcr && 0 != b.ezbfcr && (d /= b.ezbfcr, isNaN(d) && (d = c));
            d = b.FormatBid(d);
            SetSlotTargeting(a, "lb", a.Targeting.br1);
            SetSlotTargeting(a, "br1", d.toString());
            var f = c;
            "undefined" !== typeof b.ezbflclcr && 0 != b.ezbflclcr && (f /=
                b.ezbflclcr, isNaN(f) && (f = c), f = b.FormatBid(f), SetSlotTargeting(a, "br1_lcl", f.toString()));
            c = b.GetAuctionMins(a);
            d <= c[1] && (SetSlotTargeting(a, "at", "bf"), SetSlotTargeting(a, "ss38", "1"), SetSlotTargeting(a, "ss9", "1"));
            d < c[0] && ("1" == a.Targeting.ft && "undefined" !== typeof b.ezoibfh[c[0]] ? SetSlotTargeting(a, "eb_br", b.ezoibfh[c[0]]) : (SetSlotTargeting(a, "eba", "0"), SetSlotTargeting(a, "ga", "")))
        };
        g.prototype.GetAuctionMins = function(a) {
            a = a.ElementId;
            var c = 0;
            "undefined" != typeof b.ezaxmns[a] && (c = b.ezaxmns[a]);
            var d =
                0;
            "undefined" != typeof b.ezaxmns[a] && (d = b.ezaucmns[a]);
            return [c, d]
        };
        g.prototype.auctionInit = function(a, c, d, f, h) {
            b.auction_data[a] = {
                bid_floor_initial: c,
                bid_floor_prev: null,
                bid_floor_filled: c,
                auction_count: 1,
                refresh_ad_count: d,
                multi_ad_unit: f,
                multi_ad_count: h
            }
        };
        g.prototype.auctionUpdate = function(a, c, d, f) {
            b.auction_data[a].bid_floor_prev = c;
            b.auction_data[a].bid_floor_filled = d;
            b.auction_data[a].auction_count = f
        };
        g.prototype.RefreshSlotWaitForBid = function(a, c) {
            var d = a.slot;
            c = b.FormatBid(c);
            "undefined" !==
            typeof b.ezoibfh && "undefined" !== typeof b.ezoibfh[c] ? -1 !== b.ezoibfh[c] ? SetSlotTargeting(d, "eb_br", b.ezoibfh[c]) : SetSlotTargeting(d, "eb_br", "waiting") : "undefined" !== typeof b.bfh[c] ? -1 !== b.bfh[c] ? SetSlotTargeting(d, "eb_br", b.bfh[c]) : SetSlotTargeting(d, "eb_br", "waiting") : SetSlotTargeting(d, "eb_br", "empty");
            var f = b.LoadTargeting(d, "eb_br", !0);
            if (null == f || "" == f) f = "waiting";
            "waiting" == f && "undefined" !== typeof b.bfh[c] && -1 != b.bfh[c] && (SetSlotTargeting(d, "eb_br", b.bfh[c]), f = b.bfh[c]);
            "waiting" == f && ("undefined" ==
                typeof b.slots_eb_wait_time[d.ElementId] || 300 > b.slots_eb_wait_time[d.ElementId]) ? (b.slots_eb_wait_time[d.ElementId] = "undefined" == typeof b.slots_eb_wait_time[d.ElementId] ? 10 : b.slots_eb_wait_time[d.ElementId] + 10, setTimeout(function(h, k) {
                b.isSlotAlive(h.slot) && b.RefreshSlotWaitForBid(h, k)
            }, 10, a, c)) : (("waiting" == f || "disable" == f || "empty" == f) && 0 < c && SetSlotTargeting(d, "eba", "0"), b.slots_eb_wait_time[d.ElementId] = 0, b.SetBidFloor(a.slot, c), b.DelayedRefresh(a, !1))
        };
        g.prototype.LoadTargeting = function(a, c, d) {
            a =
                a.Targeting[c];
            1 == d && "object" == typeof a && null != a && (a = a[0]);
            return a
        };
        g.prototype.DelayedRefresh = function(a, c) {
            var d = Date.now();
            if (b.IsReadyForRefresh()) {
                var f = 0;
                f = 0 < a.slot.RequestTime ? a.slot.RequestTime : "undefined" != typeof a.slot.Targeting.reqt ? b.LoadTargeting(a.slot, "reqt", !0) : b.init_time;
                f = 500 - (d - f);
                b.slot_refresh_epochs[a.slot.ElementId] = d;
                0 > f && (f = 0);
                setTimeout(function() {
                    b.isSlotAlive(a.slot) && b.SendMessage(["refresh_slot", a])
                }, f);
                1 != c && b.RefreshQueuedSlots()
            } else b.slots_waiting_for_refresh.push(a)
        };
        g.prototype.IsReadyForRefresh = function() {
            return 3 <= b.idle_count || 0 > b.idle_count ? !0 : !1
        };
        g.prototype.RefreshQueuedSlots = function() {
            if (b.IsReadyForRefresh())
                for (; 0 < b.slots_waiting_for_refresh.length;) {
                    var a = b.slots_waiting_for_refresh.pop();
                    b.DelayedRefresh(a, !0)
                }
        };
        g.prototype.startIdleFailsafe = function() {
            setTimeout(function() {
                b.idle_count = -1;
                b.RefreshQueuedSlots()
            }, 3500)
        };
        g.prototype.isSlotAlive = function(a) {
            if ("undefined" === typeof a || null === a) return !1;
            a = a.ElementId;
            for (var c in b)
                if ("object" === typeof b[c] &&
                    null !== b[c] && !Array.isArray(b[c]) && a in b[c]) return !0;
            return !1
        };
        g.prototype.StartRefreshAllowedTimer = function(a, c, d) {
            SetSlotTargeting(a, "reft", "t");
            b.SetTimeout(function() {
                if (b.isSlotAlive(a)) {
                    var f = a.ElementId;
                    b.slots_available_for_refresh[f] = c;
                    b.slots_loaded_non_yet_refreshable[f] = !1
                }
            }, d)
        };
        g.prototype.TimedRefresh = function(a) {
            var c = !1;
            "undefined" != typeof b.slots_available_for_refresh[a.slot.ElementId] && null != b.slots_available_for_refresh[a.slot.ElementId] && (c = !0);
            var d = !1;
            1 == b.viewed_slots[a.slot.ElementId] &&
                (d = !0);
            1 == c && 1 == d ? b.SendMessage(["timed_refresh", a]) : b.SetTimeout(function() {
                b.isSlotAlive(a.slot) && b.TimedRefresh(a)
            }, 2E3)
        };
        g.prototype.isOwnedAd = function(a) {
            try {
                var c = b.LoadTargeting(a.slot, "ap", !0)
            } catch (d) {}
            return "undefined" == typeof c || 0 == c.length ? !1 : !0
        };
        g.prototype.SetTimeout = function(a, c) {
            a = setTimeout(a, c);
            this.timeoutIds.push(a);
            return a
        };
        g.prototype.ConstructSlotName = function(a) {
            var c = "div-gpt-ad-" + a[1] + "-" + a[4];
            "undefined" !== typeof a[5] && 0 < a[5] && (c += "_" + a[5]);
            return c
        };
        g.prototype.DestroySlots =
            function(a, c, d) {
                var f = new Set,
                    h = new Set;
                a.map(b.ConstructSlotName).forEach(function(l) {
                    f.add(l)
                });
                c.forEach(function(l) {
                    h.add(l)
                });
                for (var k in b) "object" === typeof b[k] && ("__banger_pmp_deals" === k ? b[k] = b[k].filter(function(l) {
                    return !h.has(l.SlotName)
                }) : Array.isArray(b[k]) ? b[k] = b[k].filter(function(l) {
                    return !f.has(l)
                }) : f.forEach(function(l) {
                    l in b[k] && delete b[k][l]
                }));
                var m = new Set;
                a.forEach(function(l) {
                    m.add(l[2])
                });
                b.ezslots = b.ezslots.filter(function(l) {
                    return !m.has(l)
                });
                var n = [];
                f.forEach(function(l) {
                    n.push(l)
                });
                b.SendMessage(["destroy_slots", n, d])
            };
        g.prototype.HandleDirectAd = function(a) {
            if (null != a.lineItemId && "28687274" != a.lineItemId) {
                var c = new XMLHttpRequest,
                    d = "//go.ezodn.com/dac/" + a.lineItemId;
                c.onreadystatechange = function(f) {
                    return function() {
                        if (4 == this.readyState && 200 == this.status && "" != this.responseText) {
                            var h = JSON.parse(this.responseText);
                            "CPM" == h.PaymentType && (h.PaymentAmount /= 1E3, b.ezpel.Add(f.slot, [new b.ezDotData("stat_source_id", 10051)], h.PaymentAmount, 0, 0, 0, 10051), b.ezpel.Fire())
                        }
                    }
                }(a);
                c.open("GET",
                    d);
                c.send()
            }
        };
        var b = new g;
        b.init();
        "undefined" != typeof window && (window.ezoic_mash = b)
    })();
}).call(this || window)