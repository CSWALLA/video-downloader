__ez.fads = {
    cmd: window.__ez.fads.cmd || [],
    doc_ht: 0,
    vp_ht: 0,
    init_scroll: 0,
    scroll_delta: 0,
    __ez_fad_scrollmond: false,
    loaded: true,
    kvStore: window.__ez.fads.kvStore || {},
    initslots: window.__ez.fads.initslots || {},
    __ez_fad_fastd: [],
    __ez_fad_fastdiv: [],
    __ez_fad_viewslots: [],
    __ez_fad_instaslots: [],
    ezslit_run: [],
    divs: window.__ez.fads.divs || [
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ],
    __ez_fad_divpos: {},
    divsd: window.__ez.fads.divsd || [],
    vw: window.screen.width,
    vh: window.screen.height,
    fadcount: window.__ez.fads.fadcount || 0,
    __ez_fad_haspo: window.__ez_fad_haspo || false,
    __ez_fad_hascp: window.__ez_fad_hascp || false,
    __ez_fad_floatshow: window.__ez.fads.__ez_fad_floatshow,
    init: function() {
        window.__ez.fads = this;
        this.doc_ht = this.__ez_fad_docht();
        this.vp_ht = this.__ez_fad_vpht();
        this.init_scroll = this.__ez_fad_scroll();
        document.addEventListener('wheel', this.__ez_fad_wheel_check.bind(this));
        document.addEventListener('touchstart', this.__ez_fad_touch_check.bind(this));
        if (this.cmd.length > 0) {
            for (var i = 0; i < this.cmd.length; i++) {
                if (typeof this.cmd[i] === 'function') {
                    this.cmd[i]();
                }
            }
        }
        this.cmd = {
            push: function(f) {
                f();
            }
        };
    },
    reset: function() {
        this.__ez_fad_fastd = [];
        this.__ez_fad_fastdiv = [];
        this.__ez_fad_viewslots = [];
        this.__ez_fad_instaslots = [];
        this.ezslit_run = [];
        this.divs = [
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        this.__ez_fad_divpos = {};
        this.divsd = [];
        this.fadcount = 0;
    },
    __ez_fad_docht: function() {
        return document.documentElement.scrollHeight
    },
    __ez_fad_vpht: function() {
        if (typeof window.innerHeight != 'undefined') {
            return window.innerHeight;
        } else if (typeof document.body != 'undefined' && document.body != null) {
            return document.body.clientHeight;
        } else if (typeof document.documentElement != 'undefined') {
            return document.documentElement.clientHeight;
        } else {
            return 0;
        }
    },
    __ez_fad_scroll: function() {
        return window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    },
    __ez_fad_check_scroll_override: function() {
        var currScroll = this.__ez_fad_scroll();
        if (this.scroll_delta > this.vp_ht) {
            if (currScroll === this.init_scroll) {
                for (var i = 0; i < this.divs.length; i++)
                    if (this.ezslit_run[i] !== true) {
                        this.__ez_fad_load(i, null);
                    }
            }
            document.removeEventListener('wheel', this.__ez_fad_wheel_check.bind(this));
            document.removeEventListener('touchstart', this.__ez_fad_touch_check.bind(this));
        }
    },
    __ez_fad_wheel_check: function(e) {
        this.scroll_delta += e.deltaY;
        this.__ez_fad_check_scroll_override();
    },
    __ez_fad_touch_check: function(e) {
        var delta = 0;
        var startY = e.touches[0].pageY;
        var handleTouchMove = function(e) {
            var currY = e.touches[0].pageY;
            delta += startY - currY;
            startY = currY;
        };
        var handleTouchEnd = function(e) {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
            this.scroll_delta += delta;
            this.__ez_fad_check_scroll_override();
        };
        document.addEventListener('touchmove', handleTouchMove.bind(this));
        document.addEventListener('touchend', handleTouchEnd.bind(this));
    },
    __ez_fad_scrollmon: function() {
        var sy = this.__ez_fad_scroll();
        var isShortPage = this.doc_ht <= (this.vh + 100);
        var bot = (this.vp_ht + sy);
        var botThresh = bot + this.vp_ht;
        for (var divid in this.__ez_fad_divpos) {
            if (this.__ez_fad_fastdiv.indexOf(divid) != -1) {
                continue;
            }
            var divPos = this.__ez_fad_divpos[divid];
            if (divPos > 0 && divPos > sy && divPos < (sy + this.vp_ht * .5)) {
                if (typeof this.__ez_fad_instaslots[divid] == 'function') {
                    this.__ez_fad_instaslots[divid]();
                }
            } else if (divPos > 0 && divPos > sy && divPos < (sy + this.vp_ht)) {
                if (typeof this.__ez_fad_viewslots[divid] == 'function') {
                    this.__ez_fad_viewslots[divid]();
                }
            }
        }
        this.__ez_fad_chkpos();
        if (this.ezslit_run[0] !== true) {
            this.__ez_fad_load(0, 0);
        }
        if ((sy > 0 || isShortPage) && this.ezslit_run[1] != true) {
            this.__ez_fad_load(1, null);
            this.__ez_fad_load(5, null);
        }
        if ((sy > 100 || isShortPage) && this.ezslit_run[2] != true) {
            this.__ez_fad_load(2, null);
        }
        if (sy > (this.vp_ht * .75) && this.ezslit_run[3] != true) {
            this.__ez_fad_load(3, null);
        }
        if (document.readyState === "complete" && !__ez_fad_floatshowd && typeof __ez_fad_floating !== 'undefined' && __ez_fad_floating.length > 0 && this.fadcount === 0) {
            setTimeout(function() {
                googletag.cmd.push(__ez.fads.__ez_fad_floatshow())
            }, 500);
        }
        if ((this.ezslit_run[1] == true && this.ezslit_run[2] == true && this.ezslit_run[3] == true) || this.fadcount === this.divsd.length) {
            this.__ez_fad_scrollmond = true;
        } else {
            setTimeout(this.__ez_fad_scrollmon.bind(this), 500);
        }
    },
    __ez_fad_chkpos: function() {
        if (typeof this.divs[4] != 'undefined') {
            for (var i = 0; i < this.divs[4].length; i++) {
                var id = this.divs[4][i];
                this.divs[4][i] = null;
                this.__ez_fad_position(id);
            }
        }
    },
    __ez_fad_load: function(n, r, force) {
        if (!force && (!this.__ez_fad_csnt() || !this.__ez_fad_rdy() || this.ezslit_run[n] === true || typeof this.divs[n] === 'undefined' || this.divs[n].length === 0)) {
            return;
        }
        this.ezslit_run[n] = true;
        __ez_fad_gpt();
        if (n > 0 && n !== 5) {
            __ez_fad_pb();
        }
        googletag.cmd.push(function() {
            var s = [];
            for (var i = 0; i < __ez.fads.divs[n].length; i++) {
                if (__ez.fads.divsd.indexOf(__ez.fads.divs[n][i]) == -1) {
                    __ez.fads.divsd.push(__ez.fads.divs[n][i]);
                    s.push(__ez.fads.initslots[__ez.fads.divs[n][i]](r));
                    googletag.display(__ez.fads.divs[n][i]);
                }
            }
            var ws = [];
            for (i3 = 0; i3 < s.length; i3++) {
                var slot = window[s[i3]];
                if (typeof window.ezasBuild === 'function') {
                    if (window.ezasBuild(slot)) {
                        continue;
                    }
                }
                if (typeof window.adjustHbValues === 'function') {
                    window.adjustHbValues(slot);
                }
                ws.push(slot);
            }
            while (ws.length > 0) {
                googletag.pubads().refresh(ws.splice(0, 30));
            }
            setTimeout(__ez.fads.__ez_fad_floatshow, 0);
        });
        if (n === 0) {
            if (document.readyState === "complete") {
                googletag.cmd.push(function() {
                    __ez.fads.__ez_fad_load(5, null);
                });
                setTimeout(function() {
                    __ez.fads.__ez_fad_load(1, null);
                    __ez.fads.__ez_fad_load(5, null);
                }, 5500);
                return;
            }
            document.addEventListener('DOMContentLoaded', function(evt) {
                googletag.cmd.push(function() {
                    __ez.fads.__ez_fad_load(5, null);
                });
                setTimeout(function() {
                    __ez.fads.__ez_fad_load(1, null);
                    __ez.fads.__ez_fad_load(5, null);
                }, 5500);
            }, false);
        }
    },
    __ez_fad_invisible: function(e) {
        !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    },
    __ez_fad_position: function(id) {
        if (this.divs.includes(id)) {
            return;
        }
        var did = document.getElementById(id);
        if (did === null) {
            return;
        }
        var rect = did.getBoundingClientRect();
        var vs = window.scrollY || document.body.scrollTop || document.documentElement.scrollTop;
        var vh = vs + this.vh;
        this.vw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.vh = window.innerHeight || Math.max(document.documentElement.clientHeight, document.body.clientHeight);
        var height_adjust = 800;
        if (this.vw < 1200) {
            height_adjust = this.vh * 1.25;
            vh += 0;
        }
        if (__ez_fad_floating.indexOf(id) !== -1) {
            this.__ez_fad_load(6, null, true);
            return;
        }
        this.__ez_fad_divpos[id] = rect.top;
        if (this.__ez_fad_invisible(did)) {
            this.__ez_fad_add(4, id);
        } else if (rect.top < vh && (this.ezslit_run[0] != true || this.ezslit_run[5] != true)) {
            if (this.ezslit_run[0] != true) {
                __ez_fad_gpt();
                this.__ez_fad_add(0, id);
            } else {
                this.__ez_fad_add(5, id);
            }
        } else if (rect.top < (vh + height_adjust) && this.ezslit_run[1] != true) {
            if (this.ezslit_run[0] != true) {
                this.__ez_fad_load(0, 0);
            };
            this.__ez_fad_add(1, id);
        } else if (rect.top < (vh + height_adjust + (this.vh)) && this.ezslit_run[2] != true) {
            if (this.ezslit_run[0] != true) {
                this.__ez_fad_load(0, 0);
            }
            this.__ez_fad_add(2, id);
        } else {
            if (this.ezslit_run[0] != true) {
                this.__ez_fad_load(0, 0);
            }
            this.__ez_fad_add(3, id);
        }
        this.fadcount++
    },
    __ez_fad_add: function(d, id) {
        this.divs[d].push(id);
        if (this.ezslit_run[d] === true) {
            this.ezslit_run[d] = false;
        }
        if (typeof this.__ez_fad_scrollmond !== 'undefined' && this.__ez_fad_scrollmond === true) {
            this.__ez_fad_scrollmond = false;
            setTimeout(this.__ez_fad_scrollmon.bind(this), 500);
        }
    },
    __ez_fad_fast: function(s, f, m) {
        if (this.__ez_fad_fastd.indexOf(s) == -1) {
            this.__ez_fad_fastd.push(s);
            var ebbr2 = 'empty';
            var br2 = 0;
            if (typeof ezoibfh[f] != 'undefined') {
                ebbr2 = ezoibfh[f];
                br2 = f;
            }
            if (typeof window['ezslot_' + s] != 'undefined') {
                var br1 = parseInt(window['ezslot_' + s].getTargeting('br1')[0]);
                if (isNaN(br1) || br2 < br1) {
                    window['ezslot_' + s].setTargeting('br1', br2).setTargeting('eb_br', ebbr2);
                    if (m != null) {
                        window['ezslot_' + s].setTargeting('bvr', m);
                    }
                } else {}
            } else {}
        }
    },
    __ez_fad_csnt: function() {
        return document.cookie.indexOf('ezCMPCookieConsent') !== -1 || typeof __ez_conestreq == 'undefined';
    },
    __ez_fad_rdy: function() {
        if (document.body !== null && (this.__ez_fad_haspo == false && this.doc_ht > this.vp_ht || this.__ez_fad_hascp) || document.readyState === "complete") {
            return true;
        } else {
            this.doc_ht = this.__ez_fad_docht();
            this.vp_ht = this.__ez_fad_vpht();
        }
        return false;
    }
};
__ez.fads.init();