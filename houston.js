var epbjs = epbjs || {};
epbjs.que = epbjs.que || [];
epbjs.ezAdUnits = epbjs.ezAdUnits || [];
epbjs.ezdss = epbjs.ezdss || [];
epbjs.ezas = epbjs.ezas || [];
epbjs.ezobid = epbjs.ezobid || [];
window.ezoptbid = window.ezoptbid || [];
epbjs.que.push(function() {
    if (__enableAnalytics == true) {
        epbjs.enableAnalytics([{
            provider: "ga",
            options: {
                trackerName: "gatestprebid"
            }
        }]);
    }
    const consentManagement = {
        usp: {
            cmpApi: 'iab',
            timeout: 100
        }
    };
    if (typeof window.__tcfapi === "function") {
        consentManagement.strictStorageEnforcement = true;
        consentManagement.gdpr = {
            cmpApi: 'iab',
            timeout: 5 * 60 * 1000,
            defaultGdprScope: true,
        };
    }
    var priceBuckets = {};
    if (window.ezhbopt === true) {
        priceBuckets.buckets = [{
            "precision": 2,
            "min": 0,
            "max": 300,
            "increment": 0.01
        }]
    } else {
        priceBuckets.buckets = [{
            "precision": 2,
            "min": 0,
            "max": 5,
            "increment": 0.01
        }, {
            "precision": 2,
            "min": 5,
            "max": 50,
            "increment": 0.10
        }, {
            "precision": 2,
            "min": 50,
            "max": 120,
            "increment": 5.00
        }]
    }
    epbjs.aliasBidder('aol', 'onedisplay');
    epbjs.aliasBidder('aol', 'onemobile');
    var schain_domain = 'ezoic.ai';
    var dom = '';
    if (typeof __ez_nid != 'undefined' && __ez_nid == 21732118914) {
        schain_domain = 'ezoic.co.uk';
    }
    if (typeof location.host != 'undefined') {
        dom = location.host
    }
    var useCache = false;
    if (typeof window.ezpbCache != 'undefined') {
        useCache = true;
    }
    var userIdList = [{
        name: "criteo"
    }, {
        name: "unifiedId",
        params: {
            url: "//match.adsrvr.org/track/rid?ttd_pid=muno13d&fmt=json"
        },
        storage: {
            type: "cookie",
            name: "pbjs-unifiedid",
            expires: 60
        }
    }, {
        name: "quantcastId"
    }, {
        name: "amxId",
        storage: {
            name: "amxId",
            type: "html5",
            expires: 1,
        }
    }, {
        name: "sharedId",
        params: {
            pixelUrl: "/cvx/client/sync/fpc?name=_sharedid"
        },
        storage: {
            type: "cookie",
            name: "_sharedid",
            expires: 365
        }
    }, {
        name: "lotamePanoramaId",
    }]
    var id5 = {
        name: "id5Id",
        params: {
            partner: 457,
        },
        storage: {
            type: "html5",
            name: "id5id",
            expires: 90,
            refreshInSeconds: 8 * 3600
        }
    }
    if (typeof __id5pd !== 'undefined') {
        id5.params.pd = __id5pd;
    }
    userIdList.push(id5);
    ezSchain = {
        asi: schain_domain,
        sid: __sellerid,
        domain: dom,
        hp: 1
    }
    epbjs.setConfig({
        'criteo': {
            fastBidVersion: 'latest',
        },
        useBidCache: useCache,
        s2sConfig: {
            accountId: '1',
            bidders: __s2sbidders,
            timeout: 1500,
            enabled: true,
            endpoint: 'https://pb-server.ezoic.com/openrtb2/auction',
            syncEndpoint: 'https://pb-server.ezoic.com/cookie_sync',
            extPrebid: {
                aliases: {
                    "viewdeosDX": "viewdeos"
                }
            }
        },
        schain: {
            validation: "strict",
            config: {
                ver: "1.0",
                complete: 1,
                nodes: [ezSchain]
            }
        },
        priceGranularity: priceBuckets,
        userSync: {
            userIds: userIdList,
            filterSettings: {
                iframe: {
                    bidders: __allBidders,
                    filter: 'include'
                },
                image: {
                    bidders: ['luponmedia'],
                    filter: 'include'
                }
            },
            syncDelay: 3000,
            aliasSyncEnabled: true
        },
        consentManagement: consentManagement,
        bidderSequence: "fixed"
    });
    epbjs.setBidderConfig({
        bidders: ['oftmedia'],
        config: {
            schain: {
                validation: "relaxed",
                config: {
                    ver: "1.0",
                    complete: 1,
                    nodes: [{
                        "asi": "152media.info",
                        "sid": "152M7",
                        "hp": 1
                    }, ezSchain]
                }
            }
        }
    });
    epbjs.setBidderConfig({
        bidders: ['rubicon'],
        config: {
            schain: {
                validation: "relaxed",
                config: {
                    ver: "1.0",
                    complete: 1,
                    nodes: [{
                        "asi": "rubiconproject.com",
                        "sid": "21150",
                        "hp": 1
                    }, ezSchain]
                }
            }
        }
    });
    epbjs.setBidderConfig({
        bidders: ['pubmatic'],
        config: {
            schain: {
                validation: "relaxed",
                config: {
                    ver: "1.0",
                    complete: 1,
                    nodes: [{
                        "asi": "pubmatic.com",
                        "sid": "156983",
                        "hp": 1
                    }, ezSchain]
                }
            }
        }
    });
    if (typeof __uIdHash !== 'undefined' && typeof __sspDomain !== 'undefined') {
        epbjs.setBidderConfig({
            bidders: ['criteo'],
            config: {
                ortb2: {
                    user: {
                        ext: {
                            data: {
                                eids: [{
                                    source: __sspDomain,
                                    uids: [{
                                        id: __uIdHash,
                                        atype: 1,
                                        ext: {
                                            stype: "ppuid",
                                            persistence: "js"
                                        }
                                    }]
                                }]
                            }
                        }
                    }
                }
            }
        });
    }
    epbjs.bidderSettings = epbjs.bidderSettings || {};
    epbjs.bidderSettings["standard"] = {
        adserverTargeting: [{
            key: "epb",
            val: function(bidResponse) {
                return bidResponse.bidderCode;
            }
        }, {
            key: "epa",
            val: function(bidResponse) {
                return bidResponse.adId;
            }
        }, {
            key: "epp",
            val: function(bidResponse) {
                return bidResponse.pbCg;
            }
        }, {
            key: "epf",
            val: function(bidResponse) {
                return bidResponse.mediaType;
            }
        }, {
            key: "eps",
            val: function(bidResponse) {
                if (bidResponse.bidder == "ehb") {
                    return 0;
                }
                if (typeof epbjs.SS[bidResponse.bidder.toLowerCase()] !== "undefined") {
                    return epbjs.SS[bidResponse.bidder.toLowerCase()];
                } else if (typeof epbjs.SS[bidResponse.bidder] !== "undefined") {
                    return epbjs.SS[bidResponse.bidder];
                } else {
                    console.error("epbjs: NO MATCH");
                    return 0;
                }
            }
        }, {
            key: "epr",
            val: function(bidResponse) {
                return bidResponse.source;
            }
        }]
    };
    epbjs.bidderSettings["criteo"] = {
        storageAllowed: true
    };
    epbjs.onEvent('bidResponse', function(e) {
        window.ezosethbbid(e);
        if (typeof(epbjs.ezBidCache) !== 'undefined') {
            epbjs.ezBidCache.setHigherBidForAdUnit(e.adUnitCode, e.bidderCode, e);
        }
    });
    epbjs.onEvent('bidWon', function(bid) {
        epbjs.ezas[bid.adUnitCode] = bid.size;
        if (bid.bidder == "ehb") {
            epbjs.ezdss[bid.adUnitCode] = bid.ss;
        } else {
            if (typeof epbjs.SS[bid.bidder.toLowerCase()] !== "undefined") {
                epbjs.ezdss[bid.adUnitCode] = epbjs.SS[bid.bidder.toLowerCase()];
                if (epbjs.useAdj == true && epbjs.bidders.indexOf(bid.bidder) > -1) {
                    epbjs.ezobid[bid.adUnitCode] = bid.cpm / epbjs.gadj;
                }
            } else if (typeof epbjs.SS[bid.bidder] !== "undefined") {
                epbjs.ezdss[bid.adUnitCode] = epbjs.SS[bid.bidder];
                if (epbjs.useAdj == true && epbjs.bidders.indexOf(bid.bidder) > -1) {
                    epbjs.ezobid[bid.adUnitCode] = bid.cpm / epbjs.gadj;
                }
            } else {
                console.error("epbjs: NO MATCH");
            }
        }
    });
});

function epbjsRequestAdUnits(adUnits) {
    epbjs.que.push(function() {
        for (var i = 0; i < adUnits.length; i++) {
            if (typeof(epbjs.ezBidCache) !== 'undefined' && epbjs.ezBidCache.hasBidForAdUnit(adUnits[i].code)) {
                if (typeof window.ezosethbbids == "function") {
                    window.ezosethbbids(epbjs.ezBidCache.getBidForAdUnit(adUnits[i].code).bidEvent);
                } else {
                    window.ezosethbbidsInterval = setInterval(function(bidResponses) {
                        if (typeof ezosethbbids == 'function') {
                            ezosethbbids(bidResponses);
                        }
                    }, 130, bidResponses);
                }
            } else {
                epbjs.ezAdUnits.push(adUnits[i]);
            }
        }
        if (adUnits.length < 1) {
            return
        }
        epbjs.addAdUnits(adUnits);
        epbjs.requestBids({
            timeout: 2000,
            bidsBackHandler: function(bidResponses) {
                if (typeof window.ezosethbbids == "function") {
                    window.ezosethbbids(bidResponses);
                } else {
                    window.ezosethbbidsInterval = setInterval(function(bidResponses) {
                        if (typeof ezosethbbids == 'function') {
                            ezosethbbids(bidResponses);
                        }
                    }, 130, bidResponses);
                }
            }
        });
    });
}

function epbjsRefreshSlot(slot) {
    if (typeof(epbjs.ezBidCache) !== 'undefined' && epbjs.ezBidCache.hasBidForAdUnit(slot.getSlotElementId())) {
        window.ezosethbbid(epbjs.ezBidCache.getBidForAdUnit(slot.getSlotElementId()).bidEvent);
    } else {
        epbjs.que.push(function() {
            epbjs.requestBids({
                adUnitCodes: [slot.getSlotElementId()],
                bidsBackHandler: function(bidResponses) {
                    epbjs.fastLoadAuctionEnd = true;
                    window.ezosethbbids(bidResponses);
                }
            });
        });
    }
}