window.ezoChar = function(e, t) {
    if (2001 == e.getTargeting("al")[0]) return !0;
    var i = t.style.minHeight.slice(0, -2),
        n = t.style.minWidth.slice(0, -2),
        r = window.ezoCharSize(i, n),
        d = _ezaq.country;
    if ("0" == r || "" == d) return !1;
    var o = new XMLHttpRequest,
        a = "//go.ezodn.com/ads/charity/fetch?country=" + d + "&size=" + r;
    return o.onreadystatechange = function(e, t) {
        return function() {
            if (4 == this.readyState && 200 == this.status && "" != this.responseText && void 0 !== e && void 0 !== t) {
                var i, n, r = JSON.parse(this.responseText),
                    d = "",
                    o = _ezaq.page_view_id,
                    a = _ezaq.domain_id,
                    l = __ez.dot.getSlotIID(e),
                    s = _ezaq.form_factor_id,
                    c = _ezaq.country;
                if (!(r.hasOwnProperty("ads") && r.ads.length > 0)) return;
                var h = Math.floor(Math.random() * r.ads.length);
                i = r.ads[h].img, n = r.ads[h].id, d = r.ads[h].url, d = "//go.ezodn.com/ads/charity/proxy?p_id=" + o + "&d_id=" + a + "&imp_id=" + l + "&c_id=" + n + "&l_id=10016&url=" + encodeURIComponent(d) + "&ffid=" + s + "&co=" + c;
                var _ = document.createElement("div");
                if (_.id = t.id + "_charity", innerElm = t.childNodes[0], "script" == innerElm.tagName.toLowerCase() && (innerElm = t.childNodes[1]), 0 == e.isEmpty || "undefined" == typeof innerElm || "" !== innerElm.innerHTML) return;
                var m = document.createElement("a");
                m.href = d, m.setAttribute("rel", "nofollow");
                var p = document.createElement("div");
                p.style.position = "absolute", p.style.zIndex = 500, p.style.height = t.style.minHeight.slice(0, -2) + "px", p.style.width = t.style.minWidth.slice(0, -2) + "px";
                var u = document.createElement("iframe");
                console.dir(u), console.dir("Iframe made"), u.height = t.style.minHeight.slice(0, -2), u.width = t.style.minWidth.slice(0, -2), u.overflowX = "hidden", u.overflowY = "hidden", u.scrolling = "no", u.frameBorder = "0", u.src = i, u.setAttribute("rel", "nofollow"), m.appendChild(p), m.appendChild(u), _.appendChild(m), innerElm.appendChild(_);
                var f = e.Targeting.br1[0];
                return f = "undefined" != f ? Math.floor(f / 1e3) : 0, __ez.pel.Add(e, [new __ezDotData("stat_source_id", 11303)], 0, 0, 0, f, 11303), __ez.pel.Add(e, [new __ezDotData("creative_id", n)]), __ez.pel.Add(e, [new __ezDotData("lineitem_id", 10016)]), void __ez.pel.Fire()
            }
        }
    }(e, t), o.open("GET", a), o.send(), !0
}, window.ezoCharSize = function(e, t) {
    return t >= 728 ? e >= 600 ? "300x600" : "728x90" : t >= 300 ? e >= 600 ? "300x600" : e >= 250 ? "300x250" : e >= 50 ? "320x50" : "0" : t >= 234 ? e >= 60 ? "234x60" : "0" : t >= 160 ? e >= 90 ? "160x90" : "0" : t >= 100 ? e >= 480 ? "100x480" : e >= 240 ? "100x240" : "0" : "0"
};