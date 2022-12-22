(function() {
    if (typeof __ez === "undefined" || typeof __ez.queue === "undefined" || typeof __ez.queue.markLoaded !== "function") {
        return;
    }
    __ez.queue.markLoaded("/porpoiseant/jellyfish.webp");
    __ez.queue.markLoaded("/seattle/ezqueue_events.js");
    __ez.queue.markLoaded("/detroitchicago/tampa.js");
    __ez.queue.markLoaded("/detroitchicago/ezd.js");
    __ez.queue.markLoaded("/detroitchicago/anchorfix.js");
    __ez.queue.markLoaded("/seattle/unwrapped_ads.js");
    __ez.queue.markLoaded("/seattle/ux_goals.js");
    __ez.queue.markLoaded("/detroitchicago/raleigh.js");
    __ez.queue.markLoaded("/seattle/mouse_tracking.js");
    __ez.queue.markLoaded("/seattle/click_tracking.js");
})();
if (typeof execute_ez_queue === "function") {
    ez_attachEvent(window, 'load', execute_ez_queue);
}
void 0 !== window.ct && null !== window.ct && ct.destroy(), window.ct = {
    DEBUG: !1,
    frameTimeoutId: -1,
    frameLoadCount: 0,
    frameElements: [],
    frameData: [],
    currentFrame: null,
    currentFrameIndex: -1,
    stopLoadFrames: !1,
    loadFramesTimeoutMs: 800,
    ilLoadIntervalId: -1,
    ilLoadCount: 0,
    stopIlLoad: !1,
    oldBrowser: !1,
    eventLoopTimeoutId: -1,
    eventLoopRateMs: 310,
    lastActiveElement: null,
    windowHasFocus: !1,
    documentHasFocus: !1,
    activeFrameIndex: !1,
    activeFrame: null,
    twoClickEventTimeoutId: null,
    clickTimeoutMs: 800,
    windowBlurFunc: null,
    windowFocusFunc: null,
    windowBeforeUnloadFunc: null,
    isInitialized: !1,
    selectors: [
        [".ezoic_ad > .ezoic_ad", 2],
        [".ez_sa_ad", 2],
        [".ezo_ad > center > .ezoic-ad > .ezoic-ad", 2],
        [".ezoic-ad > .ezoic-ad", 2],
        [".ezo_link_unit_a", 5],
        [".ezo_link_unit_m", 38],
        [".ezo_link_unit_unknown", 0],
        [".ezoic-ad > .OUTBRAIN > .ob-widget", 41],
        [".ezoic-ad > div[id *= 'taboola-'] > .trc_rbox_container", 37],
        [".ezflad", 46],
        [".ezflad-47", 47]
    ],
    init: function() {
        if (this.log("Init Func called"), !0 !== this.isInitialized) {
            this.initVars(), this.loadFrames();
            var e = this;
            this.ilLoadIntervalId = setInterval((function() {
                e.loadILTrack()
            }), 500), this.startEventLoop(), this.attachWindowEvents(), this.isInitialized = !0
        } else this.log("Initialized already called before.  Not running again.")
    },
    destroy: function() {
        this.log("Destroy Func called"), this.unloadFrames(), this.unloadIlTrack(), this.unsetClickEvents(), this.stopEventLoop(), this.detachWindowEvents(), this.isInitialized = !1
    },
    initVars: function() {
        this.log("Initialize Vars"), this.frameTimeoutId = -1, this.frameLoadCount = 0, this.frameElements = [], this.frameData = [], this.currentFrame = null, this.currentFrameIndex = -1, this.stopLoadFrames = !1, this.ilLoadIntervalId = -1, this.ilLoadCount = 0, this.stopIlLoad = !1, this.oldBrowser = this.isUndefined(document.hasFocus), this.eventLoopTimeoutId = -1, this.eventLoopRateMs = 310, this.lastActiveElement = null, this.windowHasFocus = !1, this.documentHasFocus = !1, this.activeFrameIndex = !1, this.activeFrame = null, this.twoClickEventTimeoutId = null, this.clickTimeoutMs = 800, this.windowBlurFunc = null, this.windowFocusFunc = null, this.windowBeforeUnloadFunc = null, this.isInitialized = !1
    },
    loadFrames: function() {
        this.log("Loading Frames"), this.frameLoadCount++;
        for (var e = 0; e < this.selectors.length; e++)
            for (var t = document.querySelectorAll(this.selectors[e][0]), i = this.selectors[e][1], n = 0; n < t.length; n++) this.setClickEvents(t[n], i);
        this.frameLoadCount > 40 && (this.stopLoadFrames = !0);
        var o = this;
        0 == this.stopLoadFrames && (this.frameTimeoutId = setTimeout((function() {
            o.loadFrames()
        }), this.loadFramesTimeoutMs))
    },
    unloadFrames: function() {
        this.log("Unloading frames"), this.stopLoadFrames = !0, clearTimeout(this.frameTimeoutId)
    },
    setClickEvents: function(e, t) {
        if (!1 !== this.isUndefined(e.ezo_flag)) {
            this.log("Set Click Events for elem : " + e.id), this.frameElements.push(e), this.frameData.push({
                statSourceId: t,
                twoClickRecorded: !1,
                navigationsRecorded: 0
            });
            var i = this,
                n = this.frameElements.length - 1;
            e.ezo_flag = !0, e.mouseOverFunc = function() {
                i.log("Mouse Over Func"), i.currentFrame = this, i.currentFrameIndex = n
            }, e.mouseOutFunc = function() {
                i.log("Mouse Out Func"), i.currentFrame = null, i.currentFrameIndex = -1
            }, e.clickFunc = function() {
                i.log("Click Func"), i.currentFrame = this, i.currentFrameIndex = n, i.ezAwesomeClick(!1, n)
            }, ez_attachEvent(e, "mouseover", e.mouseOverFunc), ez_attachEvent(e, "mouseout", e.mouseOutFunc), 46 == t && ez_attachEventWithCapture(e, "click", e.clickFunc, !0), 4 === t && (e.mouseOverFuncIl = function() {
                i.log("Mouse Over Il Func"), i.ilLoadCount > 30 && (i.ilLoadCount -= 30), clearInterval(i.ilLoadIntervalId), i.ilLoadIntervalId = setInterval((function() {
                    i.loadILTrack()
                }), 500)
            }, ez_attachEvent(e, "mouseover", e.mouseOverFuncIl)), this.log("Finished Set Click Events")
        }
    },
    unsetClickEvents: function() {
        for (this.log("Unset Click Events"); this.frameElements.length;) {
            var e = this.frameElements.pop();
            !1 === this.isUndefined(e) && (delete e.ezo_flag, ez_detachEvent(e, "mouseover", e.mouseOverFunc), delete e.mouseOverFunc, ez_detachEvent(e, "mouseout", e.mouseOutFunc), delete e.mouseOutFunc, !1 === this.isUndefined(e.mouseOverFuncIl) && (ez_detachEvent(e, "mouseover", e.mouseOverFuncIl), delete e.mouseOverFuncIl)), this.frameData.pop()
        }
        this.log("Finished unset Click Events")
    },
    loadILTrack: function() {
        this.ilLoadCount++;
        for (var e = document.querySelectorAll("span.IL_AD, .IL_BASE"), t = 0; t < e.length; t++) {
            var i = e[t];
            0 != this.isUndefined(i.ezo_flag) && !1 !== this.findParentsWithClass(i, ["IL_AD", "IL_BASE"]) && this.setClickEvents(i, 4)
        }
        this.ilLoadCount > 55 && (this.log("Il Load Count is over 55.  Stopping."), this.stopIlLoad = !0), !0 === this.stopIlLoad && (this.log("Clearing ilLoadInterval"), clearInterval(this.ilLoadIntervalId))
    },
    unloadIlTrack: function() {
        this.log("Unloading Il Track"), this.stopIlLoad = !0, clearInterval(this.ilLoadIntervalId)
    },
    startEventLoop: function() {
        if (this.log("Starting Event Loop"), !0 !== this.oldBrowser) {
            var e = this;
            this.eventLoopTimeoutId = setInterval((function() {
                e.doEventLoop()
            }), this.eventLoopRateMs)
        }
    },
    doEventLoop: function() {
        if (!0 !== this.oldBrowser) {
            var e = document.hasFocus() && !document.hidden;
            this.lastActiveElement !== document.activeElement && (!1 === this.windowHasFocus && this.fixedWindowBlur(), this.lastActiveElement = document.activeElement, this.documentHasFocus = !0), !0 === this.documentHasFocus && !1 === e && this.documentBlur(), this.documentHasFocus = e
        }
    },
    stopEventLoop: function() {
        this.log("Stopping event loop"), !0 !== this.oldBrowser && clearInterval(this.eventLoopTimeoutId)
    },
    documentBlur: function() {
        this.log("Document Blur"), null !== this.twoClickEventTimeoutId && clearTimeout(this.twoClickEventTimeoutId), -1 != this.activeFrameIndex && this.activeFrameIndex == this.currentFrameIndex && this.ezAwesomeClick(!1, this.activeFrameIndex)
    },
    fixedWindowBlur: function() {
        if (this.log("Fixed Window Blur"), this.activeFrameIndex = this.searchFrames(document.activeElement), this.activeFrameIndex < 0) this.activeFrame = null;
        else {
            this.activeFrame = this.frameElements[this.activeFrameIndex];
            var e = this,
                t = this.activeFrameIndex;
            this.twoClickEventTimeoutId = setTimeout((function() {
                e.ezAwesomeClick(!0, t)
            }), this.clickTimeoutMs)
        }
    },
    searchFrames: function(e) {
        for (var t = 0; t < this.frameElements.length; t++)
            if (this.frameElements[t] === e || this.frameElements[t].contains(e)) return t;
        return -1
    },
    findParentsWithClass: function(e, t) {
        var i = e.parentNode;
        do {
            for (var n = i.className.split(/\s+/), o = 0; o < n.length; o++)
                for (var s = 0; s < t.length; s++)
                    if (n[o] == t[s]) return i
        } while ((i = i.parentNode) && 0 == this.isUndefined(i.className));
        return !1
    },
    ezAwesomeClick: function(e, t) {
        this.log("EzAwesomeClick isTwoClick : ", e, " and frame index : ", t), this.log(this.frameElements);
        var i = this.frameElements[t],
            n = this.frameData[t],
            o = 0;
        void 0 !== n && (o = n.statSourceId);
        var s = this.getAdUnitFromElement(i, o);
        this.log("adUnitName is: ", s);
        var a;
        if (a = "" != s ? _ezim_d[s] : {
                position_id: 0,
                sub_position_id: 0,
                full_id: "0",
                width: 0,
                height: 0
            }, 2 == o) {
            var d = i.querySelectorAll("iframe");
            o = d.length > 0 && "ox_" == d[0].id.substring(0, 3) ? 33 : 5
        }
        if (!0 !== this.isUndefined(window._ezaq)) {
            if (!0 === e) n.twoClickRecorded = !0;
            else {
                if (__ez.ck.setByCat("ezoawesome_" + _ezaq.domain_id + "=" + a.full_id + " " + Date.now() + "; path=/;", 3), n.navigationsRecorded >= 5) return;
                n.navigationsRecorded += 1
            }!0 !== this.isUndefined(window.ezoTemplate) && "pub_site_noads" !== ezoTemplate && "pub_site_mobile_noads" !== ezoTemplate && "pub_site_tablet_noads" !== ezoTemplate ? "0" !== a.full_id && 0 !== a.full_id ? this.clickRequest("/ezoic_awesome/", {
                url: _ezaq.url,
                width: a.width,
                height: a.height,
                did: _ezaq.domain_id,
                sourceid: o,
                uid: _ezaq.user_id,
                ff: _ezaq.form_factor_id,
                tid: _ezaq.template_id,
                apid: a.position_id,
                sapid: a.sub_position_id,
                iuid: a.full_id,
                creative: !1 === this.isUndefined(a.creative_id) ? a.creative_id : "",
                template: ezoTemplate,
                country: _ezaq.country,
                sub_ad_positions: _ezaq.sub_page_ad_positions,
                twoclick: !0 === e ? 1 : 0,
                max_ads: _ezaq.max_ads,
                word_count: _ezaq.word_count,
                user_agent: _ezaq.user_agent
            }) : this.log("Impression_id is 0") : this.log("no click ezoTemplate is : ", ezoTemplate)
        } else this.log("_ezaq not defined")
    },
    clickRequest: function(e, t) {
        this.log("Click Request with url : ", e, " and data : ", t), e = !1 === this.isUndefined(window.ezJsu) && !0 === ezJsu || !1 === this.isUndefined(window._ez_sa) && !0 === _ez_sa || !1 === this.isUndefined(window.isAmp) && 1 == isAmp || !1 === this.isUndefined(window.ezWp) && !0 === ezWp || !1 === this.isUndefined(window._ez_send_requests_through_ezoic) && !0 === _ez_send_requests_through_ezoic ? "//g.ezoic.net" + e : window.location.protocol + "//" + window.location.host + e;
        var i = new XMLHttpRequest,
            n = !0;
        !0 === this.isMobileOperatingSystem() && (n = !1), i.open("POST", e, n), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        var o = [];
        for (var s in t) o.push(s + "=" + encodeURIComponent(t[s]));
        i.send(o.join("&"))
    },
    getAdUnitFromElement: function(e, t) {
        if (!0 === this.isUndefined(window._ezim_d)) return this.log("_ezim_d not found"), "";
        if (4 == t) {
            for (key in _ezim_d)
                if (-1 != key.indexOf("inline-1")) return this.log("found inline"), key
        } else {
            if (!1 === this.isUndefined(e.adunitname)) return this.log("found ad unit from elem.adunitname field"), e.adunitname;
            if (null != e.getAttribute("adunitname")) return this.log("found ad unit from property field: ", e.getAttribute("adunitname")), e.getAttribute("adunitname");
            var i = this.findParentsWithClass(e, ["ezoic-ad"]);
            if (!1 !== i && !1 === this.isUndefined(_ezim_d[i.getAttribute("data-ez-name")])) return i.getAttribute("data-ez-name")
        }
        return ""
    },
    attachWindowEvents: function() {
        this.log("Attaching window events");
        var e = this;
        this.windowBlurFunc = function() {
            e.log("Window Blur Func"), e.windowHasFocus = !1, e.lastActiveElement !== document.activeElement && !1 === e.oldBrowser ? (e.fixedWindowBlur(), e.lastActiveElement = document.activeElement) : null !== e.currentFrame && e.ezAwesomeClick(!1, e.currentFrameIndex)
        }, this.windowFocusFunc = function() {
            e.log("Window Focus Func"), e.windowHasFocus = !0, e.activeFrame = null, e.activeFrameIndex = -1
        }, this.windowBeforeUnloadFunc = function() {
            e.log("Window Before Unload Func"), null !== e.twoClickEventTimeoutId && clearTimeout(e.twoClickEventTimeoutId), e.isMobileOperatingSystem() && e.fixedWindowBlur(), -1 != e.currentFrameIndex && e.activeFrameIndex == e.currentFrameIndex && 0 == e.frameData[e.activeFrameIndex].navigationsRecorded && e.ezAwesomeClick(!1, e.activeFrameIndex)
        }, ez_attachEvent(window, "blur", this.windowBlurFunc), ez_attachEvent(window, "focus", this.windowFocusFunc), ez_attachEvent(window, "beforeunload", this.windowBeforeUnloadFunc), !0 === this.isIosUserAgent() && (this.log("Attaching pagehide"), ez_attachEvent(window, "pagehide", this.windowBeforeUnloadFunc))
    },
    detachWindowEvents: function() {
        this.log("Detaching window events."), ez_detachEvent(window, "blur", this.windowBlurFunc), ez_detachEvent(window, "focus", this.windowFocusFunc), ez_detachEvent(window, "beforeunload", this.windowBeforeUnloadFunc), !0 === this.isIosUserAgent() && ez_detachEvent(window, "pagehide", this.windowBeforeUnloadFunc)
    },
    isUndefined: function() {
        for (var e = 0; e < arguments.length; e++)
            if (null == arguments[e]) return !0;
        return !1
    },
    log: function() {
        this.DEBUG && console.log.apply(console, arguments)
    },
    isMobileOperatingSystem: function() {
        return "undefined" != typeof ezoFormfactor && ("2" == ezoFormfactor || "3" == ezoFormfactor)
    },
    isIosUserAgent: function() {
        return -1 != navigator.userAgent.indexOf("iPad") || -1 != navigator.userAgent.indexOf("iPhone") || -1 != navigator.userAgent.indexOf("iPod")
    }
}, ct.init();
if (typeof ezmt !== "undefined" && ezmt !== null) {
    ezmt.destroy();
    delete window.ezmt;
}
var ezmt = {
    DEBUG: false,
    intervalTime: 220,
    zoneDistance: 100,
    maxNumZones: 8,
    isInitialized: false,
    mouseMoveListener: null,
    elems: null,
    zoneTimes: null,
    clientX: 0,
    clientY: 0,
    intervalId: -1,
    init: function() {
        this.log("Init Func called");
        if (this.isInitialized === true) {
            this.log("Initialized already called before.  Not running again.");
            return;
        }
        this.elems = document.querySelectorAll("span[data-ez-name]");
        if (this.elems.length == 0) {
            this.isInitialized = true;
            return;
        }
        this.zoneTimes = {};
        for (var i = 0; i < this.elems.length; i++) {
            var groupId = this.getGroupId(this.elems[i]);
            if (groupId === null) {
                continue;
            }
            this.log("GroupId : ", groupId);
            this.zoneTimes[groupId] = {
                x: [],
                y: [],
                r: [],
            };
            for (var j = 0; j < this.maxNumZones; j++) {
                this.zoneTimes[groupId].total_time = 0;
                this.zoneTimes[groupId].x[j] = 0;
                this.zoneTimes[groupId].y[j] = 0;
                this.zoneTimes[groupId].r[j] = 0;
            }
        }
        this.addEventListeners();
        this.addInterval();
        this.isInitialized = true;
    },
    destroy: function() {
        this.log("Destroy Func called");
        this.removeInterval();
        this.removeEventListeners();
    },
    addEventListeners: function() {
        var self = this;
        this.mouseMoveListener = function(event) {
            self.clientX = event.clientX;
            self.clientY = event.clientY;
        };
        this.touchEndListener = function(event) {
            if (event.changedTouches.length > 0) {
                self.clientX = event.changedTouches[0].clientX;
                self.clientY = event.changedTouches[0].clientY;
            }
        };
        this.windowBeforeUnloadListener = function(event) {
            self.postData();
        };
        document.addEventListener("mousemove", this.mouseMoveListener);
        document.addEventListener("touchend", this.touchEndListener);
        if (this.isIosUserAgent() === true) {
            window.addEventListener("pagehide", this.windowBeforeUnloadListener);
        }
        window.addEventListener("beforeunload", this.windowBeforeUnloadListener);
    },
    removeEventListeners: function() {
        document.removeEventListener("mousemove", this.mouseMoveListener);
        document.removeEventListener("touchend", this.touchEndListener);
        if (this.isIosUserAgent() === true) {
            window.removeEventListener("pagehide", this.windowBeforeUnloadListener);
        }
        window.removeEventListener("beforeunload", this.windowBeforeUnloadListener);
    },
    addInterval: function() {
        this.intervalId = window.setInterval(this.getIntervalFunc(), this.intervalTime);
    },
    removeInterval: function() {
        window.clearInterval(this.intervalId);
    },
    getIntervalFunc: function(self) {
        var self = this;
        return function(e) {
            window._ezfd.measure(function() {
                self.handleMouseMove(e);
            });
        };
    },
    handleMouseMove: function(e) {
        var elems = this.getVisibleElements();
        for (var i = 0; i < elems.length; i++) {
            var distances = this.calculateDistancesFromElem(this.clientX, this.clientY, elems[i]);
            this.updateTimes(distances);
        }
    },
    calculateDistancesFromElem: function(x, y, elem) {
        var distances = {};
        distances.id = this.getGroupId(elem);
        var rect = elem.getBoundingClientRect();
        if (x < rect.left) {
            distances.x = rect.left - x;
        } else if (x > rect.right) {
            distances.x = x - rect.right;
        } else {
            distances.x = 0;
        }
        if (y < rect.top) {
            distances.y = rect.top - y;
        } else if (y > rect.bottom) {
            distances.y = y - rect.bottom;
        } else {
            distances.y = 0;
        }
        distances.r = Math.floor(Math.sqrt(Math.pow(distances.x, 2) + Math.pow(distances.y, 2)));
        return distances;
    },
    getGroupId: function(elem) {
        if (typeof _ezim_d === "undefined" || typeof _ezim_d[elem.getAttribute("data-ez-name")] === "undefined") {
            return null;
        }
        return _ezim_d[elem.getAttribute("data-ez-name")].full_id;
    },
    updateTimes: function(distance) {
        var xZone = Math.floor(distance.x / this.zoneDistance);
        var yZone = Math.floor(distance.y / this.zoneDistance);
        var rZone = Math.floor(distance.r / this.zoneDistance);
        if (typeof this.zoneTimes[distance.id] === "undefined") {
            return;
        }
        this.zoneTimes[distance.id].total_time += this.intervalTime;
        if (xZone < this.maxNumZones) {
            this.zoneTimes[distance.id].x[xZone] += this.intervalTime;
        }
        if (yZone < this.maxNumZones) {
            this.zoneTimes[distance.id].y[yZone] += this.intervalTime;
        }
        if (rZone < this.maxNumZones) {
            this.zoneTimes[distance.id].r[rZone] += this.intervalTime;
        }
    },
    getVisibleElements: function() {
        var visibleElems = [];
        for (var i = 0; i < this.elems.length; i++) {
            if (this.isElementInViewport(this.elems[i]) === true) {
                visibleElems.push(this.elems[i]);
            }
        }
        return visibleElems;
    },
    isElementInViewport: function(elem) {
        if (this.isUndefined(elem) || elem == null) {
            return false;
        }
        try {
            var rect = elem.getBoundingClientRect();
        } catch (e) {
            return false;
        }
        var height = window.innerHeight || document.documentElement.clientHeight;
        var width = window.innerWidth || document.documentElement.clientWidth;
        var verticalInView = (rect.top >= 0 && rect.top <= height) || (rect.bottom >= 0 && rect.bottom <= height);
        var horizontalInView = (rect.left >= 0 && rect.left <= width) || (rect.right >= 0 && rect.right <= width);
        return verticalInView && horizontalInView;
    },
    getData: function() {
        return {
            pageview_id: _ezaq.page_view_id,
            template_id: _ezaq.template_id,
            url: _ezaq.url,
            zone_data: this.zoneTimes
        }
    },
    postData: function() {
        var suffix = "/porpoiseant/ezmtdata";
        var url = window.location.protocol + "//" + window.location.host + suffix;
        if ((this.isUndefined(window.ezJsu) === false && ezJsu === true) || (this.isUndefined(window._ez_sa) === false && _ez_sa === true) || (this.isUndefined(window.isAmp) === false && isAmp == true) || (this.isUndefined(window.ezWp) === false && ezWp === true) || (this.isUndefined(window._ez_send_requests_through_ezoic) === false && _ez_send_requests_through_ezoic === true)) {
            url = "//g.ezoic.net" + suffix;
        }
        var request = new XMLHttpRequest();
        var requestType = true;
        if (this.isSafari() === true) {
            requestType = false;
        }
        request.open('POST', url, requestType);
        request.send(JSON.stringify(this.getData()));
    },
    isUndefined: function() {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'undefined' || arguments[i] === null) {
                return true;
            }
        }
        return false;
    },
    isSafari: function() {
        return navigator.userAgent.search("Safari") !== -1 && navigator.userAgent.search("Chrome") === -1;
    },
    isIosUserAgent: function() {
        return navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPod") != -1;
    },
    log: function() {
        if (this.DEBUG) {
            console.log.apply(console, arguments);
        }
    },
};
ezmt.init();
var ezua = {
    DEBUG: false,
    intervalTime: 5000,
    maxIntervalTime: 30000,
    totalIntervalTime: 0,
    bodyHeight: 0,
    bodyWidth: 0,
    wordsInBody: 0,
    wordsAboveYKeys: [],
    wordsAboveY: [],
    regions: [],
    unwrappedAds: null,
    init: function() {
        this.log("Init unwrapped ads");
        this.unwrappedAds = {};
        var ads = document.querySelectorAll('*[id^="ezwrap_"]');
        for (var i = 0; i < ads.length; i++) {
            var ad = ads[i];
            if (!this.isUndefined(ad)) {
                this.unwrappedAds[ad.id] = {
                    ad_external_id: ad.id,
                    estimated_region: {},
                    top: -1,
                    left: -1,
                    width: -1,
                    height: -1,
                    words_before_ad: -1,
                    is_floating: false
                }
            }
        }
        this.analyzeWordCount();
        this.getPageSize();
        this.getRegions();
        this.addInterval();
        this.addEventListeners();
    },
    destroy: function() {
        this.log("Destroy function called");
        this.removeInterval();
    },
    addEventListeners: function() {
        var self = this;
        this.windowBeforeUnloadListener = function(event) {
            self.postData();
        };
        if (this.isIosUserAgent() === true) {
            window.addEventListener("pagehide", this.windowBeforeUnloadListener);
        }
        window.addEventListener("beforeunload", this.windowBeforeUnloadListener);
    },
    removeEventListeners: function() {
        if (this.isIosUserAgent() === true) {
            window.removeEventListener("pagehide", this.windowBeforeUnloadListener);
        }
        window.removeEventListener("beforeunload", this.windowBeforeUnloadListener);
    },
    addInterval: function() {
        this.intervalId = window.setInterval(this.getIntervalFunc(), this.intervalTime);
    },
    removeInterval: function() {
        window.clearInterval(this.intervalId);
    },
    getIntervalFunc: function(self) {
        var self = this;
        return function() {
            window._ezfd.measure(function() {
                self.totalIntervalTime += self.intervalTime;
                if (self.totalIntervalTime >= self.maxIntervalTime) {
                    self.removeInterval();
                }
                self.identifyUnwrappedAds();
            });
        };
    },
    identifyUnwrappedAds: function() {
        var unwrappedAds = document.querySelectorAll('*[id^="ezwrap_"]');
        for (var i = 0; i < unwrappedAds.length; i++) {
            var ad = unwrappedAds[i];
            if (!this.isUndefined(ad)) {
                this.log("found unwrapped ad, externalId=" + ad.id);
                var pos = this.getElementPosition(ad);
                var size = this.getElementSize(ad);
                var estimatedRegion = {
                    name: "",
                    pct_overlap: 0
                };
                for (var j = 0; j < this.regions.length; j++) {
                    var region = this.regions[j];
                    var overlap = this.getOverlap(region, {
                        top: pos.top,
                        bottom: pos.top + size.height,
                        left: pos.left,
                        right: pos.left + size.width
                    });
                    if (overlap > estimatedRegion.pct_overlap) {
                        estimatedRegion.name = region.name;
                        estimatedRegion.pct_overlap = overlap;
                    }
                }
                this.unwrappedAds[ad.id] = {
                    ad_external_id: ad.id,
                    estimated_region: estimatedRegion,
                    top: pos.top,
                    left: pos.left,
                    width: size.width,
                    height: size.height,
                    words_before_ad: this.getWordCountBeforeNode(ad),
                    is_floating: pos.isFloating
                };
                this.log("unwrappedAd = " + JSON.stringify(this.unwrappedAds[ad.id]));
            }
        }
    },
    getPageSize: function() {
        var body = document.body,
            html = document.documentElement,
            self = this;
        window._ezfd.measure(function() {
            self.bodyHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            self.bodyWidth = Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth);
            self.wordsInBody = self.getWordCountInBody();
            self.log('bodyHeight = ' + self.bodyHeight + ' bodywidth = ' + self.bodyWidth + ' wordsInBody = ' + self.wordsInBody);
        });
    },
    getRegions: function() {
        var self = this;
        window._ezfd.measure(function() {
            var h = self.bodyHeight;
            var w = self.bodyWidth;
            self.regions.push({
                name: "top_of_page",
                top: Math.floor(0.0 * h),
                bottom: Math.floor(0.1 * h),
                left: Math.floor(0.0 * w),
                right: (Math.floor(1.0 * w))
            });
            self.regions.push({
                name: "top_of_content",
                top: Math.floor(0.1 * h),
                bottom: Math.floor(0.3 * h),
                left: Math.floor(0.2 * w),
                right: (Math.floor(0.8 * w))
            });
            self.regions.push({
                name: "middle_of_content",
                top: Math.floor(0.3 * h),
                bottom: Math.floor(0.7 * h),
                left: Math.floor(0.2 * w),
                right: (Math.floor(0.8 * w))
            });
            self.regions.push({
                name: "bottom_of_content",
                top: Math.floor(0.7 * h),
                bottom: Math.floor(0.9 * h),
                left: Math.floor(0.2 * w),
                right: (Math.floor(0.8 * w))
            });
            self.regions.push({
                name: "bottom_of_page",
                top: Math.floor(0.9 * h),
                bottom: Math.floor(1.0 * h),
                left: Math.floor(0.0 * w),
                right: (Math.floor(1.0 * w))
            });
            self.regions.push({
                name: "left_sidebar_top",
                top: Math.floor(0.1 * h),
                bottom: Math.floor(0.3 * h),
                left: Math.floor(0.0 * w),
                right: (Math.floor(0.2 * w))
            });
            self.regions.push({
                name: "left_sidebar_mid",
                top: Math.floor(0.3 * h),
                bottom: Math.floor(0.7 * h),
                left: Math.floor(0.0 * w),
                right: (Math.floor(0.2 * w))
            });
            self.regions.push({
                name: "left_sidebar_bottom",
                top: Math.floor(0.7 * h),
                bottom: Math.floor(0.9 * h),
                left: Math.floor(0.0 * w),
                right: (Math.floor(0.2 * w))
            });
            self.regions.push({
                name: "right_siderbar_top",
                top: Math.floor(0.1 * h),
                bottom: Math.floor(0.3 * h),
                left: Math.floor(0.8 * w),
                right: (Math.floor(1.0 * w))
            });
            self.regions.push({
                name: "right_sidebar_mid",
                top: Math.floor(0.3 * h),
                bottom: Math.floor(0.7 * h),
                left: Math.floor(0.8 * w),
                right: (Math.floor(1.0 * w))
            });
            self.regions.push({
                name: "right_sidebar_bottom",
                top: Math.floor(0.7 * h),
                bottom: Math.floor(0.9 * h),
                left: Math.floor(0.8 * w),
                right: (Math.floor(1.0 * w))
            });
        });
    },
    getOverlap: function(region, elm) {
        var xOverlap = Math.max(0, Math.min(elm.bottom, region.bottom) - Math.max(elm.top, region.top));
        var yOverlap = Math.max(0, Math.min(elm.right, region.right) - Math.max(elm.left, region.left));
        var overlapArea = xOverlap * yOverlap;
        return overlapArea / ((elm.bottom - elm.top) * (elm.right - elm.left));
    },
    getElementPosition: function(element) {
        if (element == null) {
            return {
                top: -1,
                left: -1,
                isFloating: false
            };
        }
        var MAX_LEVELS_UP = 5;
        var top = 0,
            left = 0,
            levelsUp = 0;
        do {
            levelsUp += 1;
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            if (levelsUp <= MAX_LEVELS_UP && getComputedStyle(element).position === 'fixed') {
                var rect = element.getBoundingClientRect();
                return {
                    top: rect.top,
                    left: rect.left,
                    isFloating: true
                };
            }
            if (element.offsetParent == null && !this.isUndefined(element.tagName) && element.tagName.toUpperCase() !== 'BODY') {
                return {
                    top: -1,
                    left: -1,
                    isFloating: false
                };
            }
            element = element.offsetParent;
        } while (element);
        return {
            top: top,
            left: left,
            isFloating: false
        };
    },
    getElementSize: function(element) {
        var width = Math.max(0, element.offsetWidth),
            height = Math.max(0, element.offsetHeight);
        var descendents = element.getElementsByTagName('*');
        for (i = 0; i < descendents.length; ++i) {
            child = descendents[i];
            width = Math.max(width, child.offsetWidth);
            height = Math.max(height, child.offsetHeight);
        }
        return {
            height: height,
            width: width
        };
    },
    getWordCountInBody: function() {
        var count = 0;
        for (var i = 0; i < this.wordsAboveYKeys.length; i++) {
            count += this.wordsAboveY[this.wordsAboveYKeys[i]];
        }
        return count;
    },
    getWordCountBeforeNode: function(node) {
        var top = this.getElementPosition(node).top;
        var count = 0;
        for (var i = 0; i < this.wordsAboveYKeys.length; i++) {
            if (this.wordsAboveYKeys[i] <= top) {
                count += this.wordsAboveY[this.wordsAboveYKeys[i]];
            } else {
                break;
            }
        }
        return count;
    },
    analyzeWordCount: function() {
        var self = this;

        function getTextNodes(node, parentNode) {
            if (typeof node === 'undefined' || node === null) {
                self.log("null element exiting");
                return;
            }
            if (self.getStyle(node, 'opacity') === 0 || self.getStyle(node, 'display') === 'none' || self.getStyle(node, 'visibility') === 'hidden') {
                self.log("hidden element exiting");
                return;
            }
            if (node.nodename === 'SCRIPT') {
                self.log("script element exiting");
                return;
            }
            if (node.nodeType == 3) {
                if (!/^\s*$/.test(node.nodeValue)) {
                    var parentTop = self.getElementPosition(parentNode).top;
                    if (parentTop >= 0) {
                        if (self.isUndefined(self.wordsAboveY[parentTop])) {
                            self.wordsAboveY[parentTop] = 0;
                        }
                        self.wordsAboveY[parentTop] += node.nodeValue.trim().split(/\s+/).length;
                        self.log("wordsAboveY[" + parentTop + "] = " + self.wordsAboveY[parentTop]);
                    }
                }
            } else {
                for (var i = 0, len = node.childNodes.length; i < len; ++i) {
                    getTextNodes(node.childNodes[i], node);
                }
            }
        }
        getTextNodes(document.body, 0);
        for (var key in this.wordsAboveY) {
            if (this.wordsAboveY.hasOwnProperty(key)) {
                this.wordsAboveYKeys.push(key);
            }
        }
        this.wordsAboveYKeys.sort(function(a, b) {
            return a - b;
        });
    },
    getStyle: function(elem, property) {
        try {
            return document.defaultView.getComputedStyle(elem, null)[property];
        } catch (err) {
            return "";
        }
    },
    getData: function() {
        return {
            pageview_id: _ezaq.page_view_id,
            template_id: _ezaq.template_id,
            url: _ezaq.url,
            body_height: this.bodyHeight,
            body_width: this.bodyWidth,
            words_in_body: this.wordsInBody,
            unwrapped_ads: this.unwrappedAds
        }
    },
    postData: function() {
        var suffix = "/porpoiseant/ezuadata";
        var url = window.location.protocol + "//" + window.location.host + suffix;
        if ((this.isUndefined(window.ezJsu) === false && ezJsu === true) || (this.isUndefined(window._ez_sa) === false && _ez_sa === true) || (this.isUndefined(window.isAmp) === false && isAmp == true) || (this.isUndefined(window.ezWp) === false && ezWp === true) || (this.isUndefined(window._ez_send_requests_through_ezoic) === false && _ez_send_requests_through_ezoic === true)) {
            url = "//g.ezoic.net" + suffix;
        }
        var request = new XMLHttpRequest();
        var requestType = true;
        if (this.isMobileOperatingSystem() === true) {
            requestType = false;
        }
        request.open('POST', url, requestType);
        if (!this.isUndefined(this.unwrappedAds) && Object.keys(this.unwrappedAds).length > 0) {
            var data = this.getData();
            this.log("Sending data : " + JSON.stringify(data));
            request.send(JSON.stringify(data));
        }
        if (typeof window["_ezaq"]["page_view_id"] == "string" && typeof __ez == "object" && typeof __ez.bit == "object" && typeof __ezDotData == "function" && window["ez_uwa_detect"] == true) {
            __ez.bit.AddAndFire(window["_ezaq"]["page_view_id"], [(new __ezDotData('ran_unwrapped_detect', true))]);
        }
    },
    isUndefined: function() {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'undefined' || arguments[i] === null) {
                return true;
            }
        }
        return false;
    },
    isMobileOperatingSystem: function() {
        return typeof ezoFormfactor !== "undefined" && (ezoFormfactor == "2" || ezoFormfactor == "3");
    },
    isIosUserAgent: function() {
        return navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPod") != -1;
    },
    log: function(msg) {
        if (this.DEBUG) {
            console.log.apply(console, arguments);
        }
    },
};
setTimeout(function() {
    ezua.init();
}, 10000);
var ezuxgoals = {
    DEBUG: false,
    uxgoals: [],
    init: function() {
        this.log(this);
        this.log(this.uxgoals);
        if (this.uxgoals.length > 0) {
            for (var i = 0; i < this.uxgoals.length; i++) {
                var goal = this.uxgoals[i];
                this.log(goal);
                var uxgoalid = goal.ux_goal_id;
                goal.engaged_time = 0;
                goal.tracking_time = 0;
            }
            this.addEventListeners();
        }
    },
    destroy: function() {
        this.removeInterval();
    },
    addEventListeners: function() {
        var self = ezuxgoals;
        this.windowBeforeUnloadListener = function(event) {
            self.log(JSON.stringify(self.uxgoals));
            for (var i = 0; i < self.uxgoals.length; i++) {
                var goal = self.uxgoals[i];
                if (goal.tracking_time !== 0) {
                    var time_engaged = (new Date).getTime() - goal.tracking_time;
                    goal.engaged_time += time_engaged;
                    goal.tracking_time = 0;
                }
            }
            self.postData();
        };
        if (this.isIosUserAgent() === true) {
            window.addEventListener("pagehide", this.windowBeforeUnloadListener);
        }
        window.addEventListener("beforeunload", this.windowBeforeUnloadListener);
        window.addEventListener("DOMContentLoaded", this.updateTimeEngaged);
        window.addEventListener("load", this.updateTimeEngaged);
        window.addEventListener("resize", this.updateTimeEngaged);
        window.addEventListener("scroll", this.updateTimeEngaged);
        if (typeof document.addEventListener === "undefined" || typeof document.hidden === "undefined") {} else {
            if (typeof document.hidden !== "undefined") {
                self.hidden = "hidden";
                self.visibilityChange = "visibilitychange";
            } else if (typeof document.msHidden !== "undefined") {
                self.hidden = "msHidden";
                self.visibilityChange = "msvisibilitychange";
            } else if (typeof document.webkitHidden !== "undefined") {
                self.hidden = "webkitHidden";
                self.visibilityChange = "webkitvisibilitychange";
            }
            document.addEventListener(self.visibilityChange, self.handleVisibilityChange, false);
        }
    },
    removeEventListeners: function() {
        if (this.isIosUserAgent() === true) {
            window.removeEventListener("pagehide", this.windowBeforeUnloadListener);
        }
        window.removeEventListener("beforeunload", this.windowBeforeUnloadListener);
    },
    handleVisibilityChange: function() {
        var self = ezuxgoals;
        if (document[self.hidden]) {
            for (var i = 0; i < self.uxgoals.length; i++) {
                if (self.uxgoals[i].tracking_time !== 0) {
                    var time_engaged = (new Date).getTime() - self.uxgoals[i].tracking_time;
                    self.uxgoals[i].engaged_time += time_engaged;
                    self.uxgoals[i].tracking_time = 0;
                }
            }
        } else {
            self.updateTimeEngaged();
        }
    },
    updateTimeEngaged: function() {
        var self = ezuxgoals;
        self.log(self);
        self.log(self.uxgoals.length);
        for (var i = 0; i < self.uxgoals.length; i++) {
            var goal = self.uxgoals[i];
            var uxgoalid = goal.UXGoalId;
            var uxgoalelement = self.getHTMLElement(i);
            self.log(typeof uxgoalelement);
            self.log(uxgoalelement);
            self.log(uxgoalid);
            self.log(goal.tracking_time);
            if (uxgoalelement !== null) {
                window._ezfd.measure(function() {
                    var isElementInViewport = self.isElementInViewport(uxgoalelement);
                    if (isElementInViewport && goal.tracking_time === 0) {
                        goal.tracking_time = (new Date).getTime();
                    } else if (!isElementInViewport && goal.tracking_time !== 0) {
                        var time_engaged = (new Date).getTime() - goal.tracking_time;
                        goal.engaged_time += time_engaged;
                        goal.tracking_time = 0;
                    }
                });
            }
        }
    },
    getHTMLElement: function(i) {
        var self = ezuxgoals;
        var goal = self.uxgoals[i]
        if (goal.IdentifierType == "class") {
            var uxgoalclass = goal.Identifier;
            var selectedElementCollection = document.getElementsByClassName(uxgoalclass);
            if (selectedElementCollection.length > 0) {
                return selectedElementCollection
            } else {
                return null;
            }
        } else if (goal.IdentifierType == "id") {
            return document.getElementById(goal.Identifier);
        }
    },
    isElementInViewport: function(elem) {
        if (elem == null) {
            return false;
        }
        if (elem[0] !== undefined) {
            elem = elem[0]
        }
        var rect = elem.getBoundingClientRect();
        var height = window.innerHeight || document.documentElement.clientHeight;
        var width = window.innerWidth || document.documentElement.clientWidth;
        var verticalInView = (rect.top >= 0 && rect.top <= height) || (rect.bottom >= 0 && rect.bottom <= height);
        var horizontalInView = (rect.left >= 0 && rect.left <= width) || (rect.right >= 0 && rect.right <= width);
        return verticalInView && horizontalInView;
    },
    getData: function() {
        return {
            pageview_id: _ezaq.page_view_id,
            url: _ezaq.url,
            ux_goal_data: this.uxgoals
        }
    },
    postData: function() {
        var self = ezuxgoals;
        var suffix = "/porpoiseant/ezuxgoaldata";
        var url = window.location.protocol + "//" + window.location.host + suffix;
        if ((self.isUndefined(window.ezJsu) === false && ezJsu === true) || (self.isUndefined(window._ez_sa) === false && _ez_sa === true) || (self.isUndefined(window.isAmp) === false && isAmp == true) || (self.isUndefined(window.ezWp) === false && ezWp === true) || (self.isUndefined(window._ez_send_requests_through_ezoic) === false && _ez_send_requests_through_ezoic === true)) {
            url = "//g.ezoic.net" + suffix;
        }
        var request = new XMLHttpRequest();
        var requestType = true;
        if (self.isMobileOperatingSystem() === true) {
            requestType = false;
        }
        request.open('POST', url, requestType);
        var data = self.getData();
        request.send(JSON.stringify(data));
    },
    isMobileOperatingSystem: function() {
        return typeof ezoFormfactor !== "undefined" && (ezoFormfactor == "2" || ezoFormfactor == "3");
    },
    isIosUserAgent: function() {
        return navigator.userAgent.indexOf("iPad") != -1 || navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPod") != -1;
    },
    isUndefined: function() {
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] === 'undefined' || arguments[i] === null) {
                return true;
            }
        }
        return false;
    },
    log: function(msg) {
        if (this.DEBUG) {
            console.log.apply(console, arguments);
        }
    },
};
if ((typeof uxgoalInfo) != 'undefined') {
    if (uxgoalInfo.length > 0) {
        ezuxgoals.uxgoals = uxgoalInfo;
        ezuxgoals.init();
    }
}
var ezdent = ezdent || {};
ezdent.msgs = [];
ezdent.debug = function() {
    if (!ezDenty.processed) {
        return;
    }
    if (ezdent.msgs.length > 0) {
        for (var ll = 0, imax = ezdent.msgs.length; ll < imax; ll++) {
            console.debug(ezdent.msgs[ll]);
        }
    }
    ezDenty.highlight();
};
ezdent.log = function(l1) {
    ezdent.msgs.push(l1);
};
ezdent.Denty = function() {
    this.headTag = document.getElementsByTagName('head').item(0);
    this.stylesheet = '';
    this.displayQ = ['ins.adsbygoogle', 'iframe[id^="_mN_main_"]', 'ins[id^="aswift_"] > iframe', 'iframe.switch_request_frame'];
    this.nativeQ = ['.OUTBRAIN > .ob-widget', 'div[id*="taboola-"] > .trc_rbox_container', 'div.rc-wc.rc-bp'];
    this.initArrays();
    this.processed = false;
};
ezdent.Denty.prototype.Process = function() {
    this.setSizes();
    this.getDisplay();
    this.getNative();
    this.fire();
    this.processed = true;
    ezdent.log(this);
};
ezdent.Denty.prototype.addA = function(el, type) {
    if (typeof el === "undefined" || el === null) {
        return;
    }
    if (!this.alreadyFound(el, 5) && el.clientWidth > 0 && el.clientHeight > 0) {
        this.as.push(new ezdent.Item(el, type));
    }
};
ezdent.Denty.prototype.alreadyFound = function(el, numElsToCheck) {
    if (typeof el.parentNode !== "undefined") {
        var parent = el.parentNode;
        for (var ll = 0, imax = numElsToCheck; ll < imax; ll++) {
            if (typeof parent !== "undefined" && parent != null && typeof parent.hasAttribute == "function" && parent.hasAttribute("class") && parent.classList.contains('ezfound')) {
                return true;
            }
            parent = parent.parentNode;
            if (typeof parent === "undefined" || parent == null) {
                break;
            }
        }
    }
    var lI = el.querySelector('.ezfound');
    return lI != null;
};
ezdent.Denty.prototype.destroy = function() {
    if (this.stylesheet !== '') this.headTag.removeChild(this.stylesheet);
    this.removeClasses();
    this.initArrays();
};
ezdent.Denty.prototype.fire = function() {
    if (typeof _ezaq === "undefined" || !_ezaq.hasOwnProperty("page_view_id")) {
        return;
    }
    var l1l = _ezaq["page_view_id"],
        p = this.getPD(),
        pxArr = [];
    if (typeof p === "object" && Object.keys(p).length > 0) {
        for (var l11 in p) {
            if (p.hasOwnProperty(l11) === false) continue;
            pxArr.push(new __ezDotData(l11, p[l11]));
        }
        __ez.bit.Add(l1l, pxArr);
        __ez.bit.Fire();
        ezdent.log(p);
    }
};
ezdent.Denty.prototype.getDisplay = function() {
    this.getDisplayDfp();
    if (this.displayQ.length < 1) {
        return;
    }
    for (var ll = 0, imax = this.displayQ.length; ll < imax; ll++) {
        var els = document.querySelectorAll(this.displayQ[ll]);
        if (els.length > 0) {
            for (var l1I = 0, jmax = els.length; l1I < jmax; l1I++) {
                this.addA(els[l1I], 'display');
            }
        }
    }
};
ezdent.Denty.prototype.getDisplayDfp = function() {
    if (typeof googletag === 'undefined' || googletag === null || typeof googletag.pubads !== 'function' || typeof googletag.pubads().getSlots !== 'function') {
        return;
    }
    var slots = googletag.pubads().getSlots();
    for (var ll = 0, imax = slots.length; ll < imax; ll++) {
        var lIl = slots[ll].getSlotElementId(),
            slotEl = document.getElementById(lIl);
        if (typeof slotEl !== 'undefined') {
            this.addA(slotEl, 'display');
        }
    }
};
ezdent.Denty.prototype.getNative = function() {
    if (this.nativeQ.length < 1) {
        return;
    }
    for (var ll = 0, imax = this.nativeQ.length; ll < imax; ll++) {
        var els = document.querySelectorAll(this.nativeQ[ll]);
        if (els.length > 0) {
            for (var l1I = 0, jmax = els.length; l1I < jmax; l1I++) {
                this.addA(els[l1I], 'native');
            }
        }
    }
};
ezdent.Denty.prototype.getPD = function() {
    var p = [];
    p["display_ad_viewport_px"] = 0;
    p["display_ad_viewport_count"] = 0;
    p["native_ad_viewport_px"] = 0;
    p["native_ad_viewport_count"] = 0;
    p["display_ad_doc_px"] = 0;
    p["display_ad_doc_count"] = 0;
    p["native_ad_doc_px"] = 0;
    p["native_ad_doc_count"] = 0;
    p["viewport_size"] = this.viewportSize[0] + "x" + this.viewportSize[1];
    p["viewport_px"] = this.viewportSize[0] * this.viewportSize[1];
    p["doc_px"] = this.documentSize[0] * this.documentSize[1];
    p["doc_height"] = this.documentSize[1];
    if (this.as.length < 1) {
        return p;
    }
    for (var ll = 0, imax = this.as.length; ll < imax; ll++) {
        var a = this.as[ll];
        if (a.onScreen) {
            if (this.isBF(a.el, 3) == false) {
                p[a.type + "_ad_viewport_px"] = p[a.type + "_ad_viewport_px"] + a.getPxInView();
            } else {
                ezdent.log("BF not adding");
            }
            p[a.type + "_ad_viewport_count"]++;
        }
        p[a.type + "_ad_doc_px"] += a.height * a.width;
        p[a.type + "_ad_doc_count"]++;
    }
    return p;
};
ezdent.Denty.prototype.highlight = function() {
    this.stylesheet = document.createElement("style");
    this.stylesheet.innerHTML = ".ezhlght-on{border:5px solid aqua!important;}.ezhlght-off{border:5px solid red!important;}";
    this.headTag.insertBefore(this.stylesheet, this.headTag.firstChild);
    if (this.as.length > 0) {
        for (var ll = 0, imax = this.as.length; ll < imax; ll++) {
            if (this.as[ll].onScreen) {
                this.as[ll].el.classList.add("ezhlght-on");
            } else {
                this.as[ll].el.classList.add("ezhlght-off");
            }
        }
    }
};
ezdent.Denty.prototype.initArrays = function() {
    this.as = [];
    this.viewportSize = [];
    this.windowSize = [];
    this.documentSize = [];
};
ezdent.Denty.prototype.isBF = function(el, numElsToCheck) {
    if (typeof el.hasAttribute == "function" && el.hasAttribute("class") && el.classList.contains("ezoic-floating-bottom")) {
        return true;
    }
    if (typeof el.parentNode !== "undefined") {
        var parent = el.parentNode;
        for (var ll = 0, imax = numElsToCheck; ll < imax; ll++) {
            if (typeof parent !== "undefined" && parent != null && typeof parent.hasAttribute == "function" && parent.hasAttribute("class") && parent.classList.contains("ezoic-floating-bottom")) {
                return true;
            }
            parent = parent.parentNode;
            if (typeof parent === "undefined" || parent == null) {
                break;
            }
        }
    }
    var lI1 = el.querySelector('.ezoic-floating-bottom');
    return lI1 != null;
};
ezdent.Denty.prototype.removeClasses = function() {
    if (this.as.length > 0) {
        for (var ll = 0, imax = this.as.length; ll < imax; ll++) {
            this.as[ll].el.classList.remove("ezhlght-on");
            this.as[ll].el.classList.remove("ezhlght-off");
            this.as[ll].el.classList.remove("ezfound");
        }
    }
};
ezdent.Denty.prototype.setSizes = function() {
    var body = document.body,
        html = document.documentElement;
    var lII = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var vpH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    lII = Math.min(lII, 10000);
    vpH = Math.min(vpH, 10000);
    this.viewportSize = [lII, vpH];
    this.documentSize = [Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth), Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)];
};
ezdent.Item = function(el, type) {
    this.el = el;
    this.type = type;
    this.width = el.clientWidth;
    this.height = el.clientHeight;
    this.coords = this.getCoords();
    this.onScreen = this.ios();
    if (typeof el.classList != 'undefined') {
        el.classList.add("ezfound");
    }
};
ezdent.Item.prototype.getCoords = function() {
    var box = this.el.getBoundingClientRect();
    var body = document.body;
    var docEl = document.documentElement;
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;
    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
    return {
        top: Math.round(top),
        left: Math.round(left)
    };
};
ezdent.Item.prototype.getPxInView = function() {
    var l1ll = this.height;
    if ((this.coords.top + this.height) > window.innerHeight) {
        l1ll = window.innerHeight - this.coords.top;
    }
    var l1l1 = this.width;
    if ((this.coords.left + this.width) > window.innerWidth) {
        l1l1 = window.innerWidth - this.coords.left;
    }
    ezdent.log(this.el);
    ezdent.log('usable ' + l1ll + ' * ' + l1l1);
    ezdent.log(l1l1 * l1ll);
    return l1l1 * l1ll;
};
ezdent.Item.prototype.ios = function() {
    return (this.coords.top <= window.innerHeight && this.coords.left >= 0 && this.coords.left <= window.innerWidth);
};
var ezDenty = new ezdent.Denty();
setTimeout(function() {
    ezDenty.Process();
}, 7500);
! function() {
    var i;
    __ez.aucep = (i = [], {
        Add: function(t, e) {
            if (__ez.dot.isDefined(t) && 0 != __ez.dot.isAnyDefined(t.getSlotElementId, t.ElementId, t.AdUnitPath)) {
                var _ = parseInt(__ez.dot.getTargeting(t, "ap")),
                    o = __ez.dot.getSlotIID(t),
                    d = __ez.dot.getAdUnit(t),
                    n = t.AdUnitPath.split("/")[1];
                if (__ez.dot.isDefined(o, d) && __ez.dot.isValid(e)) {
                    var a = {
                        type: "auction",
                        impression_id: o,
                        domain_id: __ez.dot.getDID(),
                        unit: d,
                        t_epoch: __ez.dot.getEpoch(0),
                        auction_epoch: e.t_epoch,
                        ad_position: _,
                        country_code: __ez.dot.getCC(),
                        pageview_id: __ez.dot.getPageviewId(),
                        bid_floor_initial: e.bid_floor_initial,
                        bid_floor_prev: e.bid_floor_prev,
                        bid_floor_filled: e.bid_floor_filled,
                        auction_count: e.auction_count,
                        refresh_ad_count: e.refresh_ad_count,
                        auction_duration: e.auction_duration,
                        multi_ad_unit: e.multi_ad_unit,
                        multi_ad_count: e.multi_ad_count,
                        network_code: parseInt(n),
                        data: __ez.dot.dataToStr([new __ezDotData("", "")])
                    };
                    e.line_item_id && (a.line_item_id = e.line_item_id), i.push(a)
                }
            }
        },
        Fire: function() {
            if ((void 0 === document.visibilityState || "prerender" !== document.visibilityState) && __ez.dot.isDefined(i) && i.length > 0)
                for (; i.length > 0;) {
                    var t = 5;
                    t > i.length && (t = i.length);
                    var e = i.splice(0, t),
                        _ = __ez.dot.getURL("/porpoiseant/army.gif") + "?orig=" + (!0 === __ez.template.isOrig ? 1 : 0) + "&sts=" + btoa(JSON.stringify(e));
                    void 0 !== window.isAmp && isAmp && void 0 !== window._ezaq && _ezaq.hasOwnProperty("domain_id") && (_ += "&visit_uuid=" + _ezaq.visit_uuid), __ez.dot.Fire(_)
                }
        }
    })
}();
! function() {
    var i;
    __ez.vaep = (i = [], {
        Add: function(e, t, o) {
            if (__ez.dot.isDefined(e) && __ez.dot.isValid(t)) {
                var d = {
                    type: "video-ad",
                    video_ad_impression_id: e,
                    domain_id: __ez.dot.getDID(),
                    t_epoch: __ez.dot.getEpoch(0),
                    data: __ez.dot.dataToStr(t)
                };
                o && o.hasOwnProperty("impression_id") && o.hasOwnProperty("ad_unit") && (d.impression_id = o.impression_id.toString(), d.unit = o.ad_unit), i.push(d)
            }
        },
        Fire: function() {
            if (void 0 === document.visibilityState || "prerender" !== document.visibilityState) {
                if (__ez.dot.isDefined(i) && i.length > 0)
                    for (; i.length > 0;) {
                        var e = 5;
                        e > i.length && (e = i.length);
                        var t = i.splice(0, e),
                            o = __ez.dot.getURL("/porpoiseant/lemon.gif") + "?orig=" + (!0 === __ez.template.isOrig ? 1 : 0) + "&va=" + btoa(JSON.stringify(t));
                        __ez.dot.Fire(o)
                    }
                i = []
            }
        }
    })
}();
! function() {
    "use strict";
    (function() {
        var e = document.getElementsByClassName("ezoic-floating-bottom");
        if (void 0 !== e && e.length > 0) {
            var t = e[0],
                i = document.body.offsetWidth;
            if (t.offsetWidth > i) return t.style.maxWidth = i + "px", !0
        }
        return !1
    })() && function(e) {
        var t = document.querySelector("meta[name=viewport]");
        if (void 0 === t || null == t)(t = document.createElement("meta")).setAttribute("content", "width=device-width, minimum-scale=1"), document.getElementsByTagName("head")[0].appendChild(t);
        else {
            var i = t.getAttribute("content"); - 1 == i.indexOf("minimum-scale") ? i += ", minimum-scale=1" : i.replace("/minimum\\-scale\\s*=[^,]+/", "minimum-scale=1"), t.setAttribute("content", i)
        }
    }()
}();