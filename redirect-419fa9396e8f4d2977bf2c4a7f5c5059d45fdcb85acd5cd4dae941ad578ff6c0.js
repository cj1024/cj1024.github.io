/**
 * UAParser.js v0.7.3
 * Lightweight JavaScript-based User-Agent string parser
 * https://github.com/faisalman/ua-parser-js
 *
 * Copyright © 2012-2014 Faisal Salman <fyzlman@gmail.com>
 * Dual licensed under GPLv2 & MIT
 */
!function(e, i) {
    "use strict";
    var s = "0.7.3", n = "", o = "?", t = "function", r = "undefined", a = "object", l = "major", d = "model", c = "name", p = "type", w = "vendor", u = "version", h = "architecture", m = "console", f = "mobile", g = "tablet", b = "smarttv", k = "wearable", v = "embedded", x = {
        extend: function(e, i) {
            for (var s in i) 
                - 1 !== "browser cpu device engine os".indexOf(s) && i[s].length%2 === 0 && (e[s] = i[s].concat(e[s]));
            return e
        },
        has: function(e, i) {
            return "string" == typeof e?-1 !== i.toLowerCase().indexOf(e.toLowerCase()) : void 0
        },
        lowerize: function(e) {
            return e.toLowerCase()
        }
    }, y = {
        rgx: function() {
            for (var e, s, n, o, l, d, c, p = 0, w = arguments; p < w.length&&!d;) {
                var u = w[p], h = w[p + 1];
                if (typeof e === r) {
                    e = {};
                    for (o in h)
                        l = h[o], typeof l === a ? e[l[0]] = i : e[l] = i
                }
                for (s = n = 0; s < u.length&&!d;)
                    if (d = u[s++].exec(this.getUA()))
                        for (o = 0; o < h.length; o++)
                            c = d[++n], l = h[o], typeof l === a && l.length > 0 ? 2 == l.length ? typeof l[1] == t ? e[l[0]] = l[1].call(this, c) : e[l[0]] = l[1] : 3 == l.length ? typeof l[1] !== t || l[1].exec && l[1].test ? e[l[0]] = c ? c.replace(l[1], l[2]) : i : e[l[0]] = c ? l[1].call(this, c, l[2]) : i : 4 == l.length && (e[l[0]] = c ? l[3].call(this, c.replace(l[1], l[2])) : i) : e[l] = c ? c : i;
                p += 2
            }
            return e
        },
        str: function(e, s) {
            for (var n in s)
                if (typeof s[n] === a && s[n].length > 0) {
                    for (var t = 0; t < s[n].length; t++)
                        if (x.has(s[n][t], e))
                            return n === o ? i : n
                } else if (x.has(s[n], e))
                    return n === o ? i : n;
            return e
        }
    }, A = {
        browser: {
            oldsafari: {
                major: {
                    1: ["/8", "/1", "/3"],
                    2: "/4",
                    "?": "/"
                },
                version: {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }
            }
        },
        device: {
            amazon: {
                model: {
                    "Fire Phone": ["SD", "KF"]
                }
            },
            sprint: {
                model: {
                    "Evo Shift 4G": "7373KT"
                },
                vendor: {
                    HTC: "APA",
                    Sprint: "Sprint"
                }
            }
        },
        os: {
            windows: {
                version: {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2000: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: "NT 6.4",
                    RT: "ARM"
                }
            }
        }
    }, T = {
        browser: [[/(opera\smini)\/((\d+)?[\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i, /(opera).+version\/((\d+)?[\w\.]+)/i, /(opera)[\/\s]+((\d+)?[\w\.]+)/i], [c, u, l], [/\s(opr)\/((\d+)?[\w\.]+)/i], [[c, "Opera"], u, l], [/(kindle)\/((\d+)?[\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i, /(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i, /(rekonq)((?:\/)[\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i], [c, u, l], [/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i], [[c, "IE"], u, l], [/(yabrowser)\/((\d+)?[\w\.]+)/i], [[c, "Yandex"], u, l], [/(comodo_dragon)\/((\d+)?[\w\.]+)/i], [[c, /_/g, " "], u, l], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i, /(uc\s?browser|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i], [c, u, l], [/(dolfin)\/((\d+)?[\w\.]+)/i], [[c, "Dolphin"], u, l], [/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i], [[c, "Chrome"], u, l], [/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i], [u, l, [c, "Mobile Safari"]], [/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i], [u, l, c], [/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i], [c, [l, y.str, A.browser.oldsafari.major], [u, y.str, A.browser.oldsafari.version]], [/(konqueror)\/((\d+)?[\w\.]+)/i, /(webkit|khtml)\/((\d+)?[\w\.]+)/i], [c, u, l], [/(navigator|netscape)\/((\d+)?[\w\.-]+)/i], [[c, "Netscape"], u, l], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i, /(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf)[\/\s]?((\d+)?[\w\.]+)/i, /(links)\s\(((\d+)?[\w\.]+)/i, /(gobrowser)\/?((\d+)?[\w\.]+)*/i, /(ice\s?browser)\/v?((\d+)?[\w\._]+)/i, /(mosaic)[\/\s]((\d+)?[\w\.]+)/i], [c, u, l]],
        cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[h, "amd64"]], [/(ia32(?=;))/i], [[h, x.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[h, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[h, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[h, /ower/, "", x.lowerize]], [/(sun4\w)[;\)]/i], [[h, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[h, x.lowerize]]],
        device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [d, w, [p, g]], [/applecoremedia\/[\w\.]+ \((ipad)/], [d, [w, "Apple"], [p, g]], [/(apple\s{0,1}tv)/i], [[d, "Apple TV"], [w, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [w, d, [p, g]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i], [d, [w, "Amazon"], [p, g]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i], [[d, y.str, A.device.amazon.model], [w, "Amazon"], [p, f]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [d, w, [p, f]], [/\((ip[honed|\s\w*]+);/i], [d, [w, "Apple"], [p, f]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [w, d, [p, f]], [/\(bb10;\s(\w+)/i], [d, [w, "BlackBerry"], [p, f]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i], [d, [w, "Asus"], [p, g]], [/(sony)\s(tablet\s[ps])/i], [w, d, [p, g]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [w, d, [p, m]], [/android.+;\s(shield)\sbuild/i], [d, [w, "Nvidia"], [p, m]], [/(playstation\s[3portablevi]+)/i], [d, [w, "Sony"], [p, m]], [/(sprint\s(\w+))/i], [[w, y.str, A.device.sprint.vendor], [d, y.str, A.device.sprint.model], [p, f]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [w, d, [p, g]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i], [w, [d, /_/g, " "], [p, f]], [/(nexus\s9)/i], [d, [w, "HTC"], [p, g]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [d, [w, "Microsoft"], [p, m]], [/(kin\.[onetw]{3})/i], [[d, /\./g, " "], [w, "Microsoft"], [p, f]], [/\s((milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?))[\w\s]+build\//i, /(mot)[\s-]?(\w+)*/i], [[w, "Motorola"], d, [p, f]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [d, [w, "Motorola"], [p, g]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[w, "Samsung"], d, [p, g]], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[w, "Samsung"], d, [p, f]], [/(samsung);smarttv/i], [w, d, [p, b]], [/\(dtv[\);].+(aquos)/i], [d, [w, "Sharp"], [p, b]], [/sie-(\w+)*/i], [d, [w, "Siemens"], [p, f]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[w, "Nokia"], d, [p, f]], [/android\s3\.[\s\w-;]{10}(a\d{3})/i], [d, [w, "Acer"], [p, g]], [/android\s3\.[\s\w-;]{10}(lg?)-([06cv9]{3,4})/i], [[w, "LG"], d, [p, g]], [/(lg) netcast\.tv/i], [w, d, [p, b]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i], [d, [w, "LG"], [p, f]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [d, [w, "Lenovo"], [p, g]], [/linux;.+((jolla));/i], [w, d, [p, f]], [/((pebble))app\/[\d\.]+\s/i], [w, d, [p, k]], [/android.+;\s(glass)\s\d/i], [d, [w, "Google"], [p, k]], [/(mobile|tablet);.+rv\:.+gecko\//i], [[p, x.lowerize], w, d]],
        engine: [[/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [c, u], [/rv\:([\w\.]+).*(gecko)/i], [u, c]],
        os: [[/microsoft\s(windows)\s(vista|xp)/i], [c, u], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [c, [u, y.str, A.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[c, "Windows"], [u, y.str, A.os.windows.version]], [/\((bb)(10);/i], [[c, "BlackBerry"], u], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i], [c, u], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i], [[c, "Symbian"], u], [/\((series40);/i], [c], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[c, "Firefox OS"], u], [/(nintendo|playstation)\s([wids3portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i], [c, u], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[c, "Chromium OS"], u], [/(sunos)\s?([\w\.]+\d)*/i], [[c, "Solaris"], u], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i], [c, u], [/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i], [[c, "iOS"], [u, /_/g, "."]], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i], [[c, "Mac OS"], [u, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i], [c, u]]
    }, S = function(i, s) {
        if (!(this instanceof S))
            return new S(i, s).getResult();
        var o = i || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : n), t = s ? x.extend(T, s): T;
        this.getBrowser = function() {
            return y.rgx.apply(this, t.browser)
        }, this.getCPU = function() {
            return y.rgx.apply(this, t.cpu)
        }, this.getDevice = function() {
            return y.rgx.apply(this, t.device)
        }, this.getEngine = function() {
            return y.rgx.apply(this, t.engine)
        }, this.getOS = function() {
            return y.rgx.apply(this, t.os)
        }, this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            }
        }, this.getUA = function() {
            return o
        }, this.setUA = function(e) {
            return o = e, this
        }, this.setUA(o)
    };
    S.VERSION = s, S.BROWSER = {
        NAME: c,
        MAJOR: l,
        VERSION: u
    }, S.CPU = {
        ARCHITECTURE: h
    }, S.DEVICE = {
        MODEL: d,
        VENDOR: w,
        TYPE: p,
        CONSOLE: m,
        MOBILE: f,
        SMARTTV: b,
        TABLET: g,
        WEARABLE: k,
        EMBEDDED: v
    }, S.ENGINE = {
        NAME: c,
        VERSION: u
    }, S.OS = {
        NAME: c,
        VERSION: u
    }, typeof exports !== r ? (typeof module !== r && module.exports && (exports = module.exports = S), exports.UAParser = S) : typeof define === t && define.amd ? define(function() {
        return S
    }) : e.UAParser = S;
    var R = e.jQuery || e.Zepto;
    if (typeof R !== r) {
        var E = new S;
        R.ua = E.getResult(), R.ua.get = function() {
            return E.getUA()
        }, R.ua.set = function(e) {
            E.setUA(e);
            var i = E.getResult();
            for (var s in i)
                R.ua[s] = i[s]
        }
    }
}(this);
var DD = {
    info: {
        ip: null,
        device_type: null,
        os_version: null,
        language: null,
        screen_w: screen.width * window.devicePixelRatio,
        screen_h: screen.height * window.devicePixelRatio,
        application_id: null,
        url: null
    },
    init: function(e, i, s, n, o, t) {
        return this.info.ip = e, this.info.device_type = i, this.info.os_version = s, this.info.language = n, this.info.deeplink = o, this.info.application_id = t, this.info
    },
    send: function(e) {
        var i = window.location.protocol + "//" + window.location.host;
        ajax.post(i + "/deferred", JSON.stringify({
            info: this.info
        }), function() {
            e.call(this)
        }, !0)
    }
}, ajax = {};
ajax.x = function() {
    if ("undefined" != typeof XMLHttpRequest)
        return new XMLHttpRequest;
    for (var e, i = ["MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.2.0", "Microsoft.XmlHttp"], s = 0; s < i.length; s++)
        try {
            e = new ActiveXObject(i[s]);
            break
    } catch (n) {}
    return e
}, ajax.send = function(e, i, s, n, o) {
    var t = ajax.x();
    t.open(s, e, o), t.onreadystatechange = function() {
        4 == t.readyState && i(t.responseText)
    }, "POST" == s && t.setRequestHeader("Content-type", "application/json"), t.send(n)
}, ajax.post = function(e, i, s, n) {
    ajax.send(e, s, "POST", i, n)
}, window.console || (console = {
    log: function() {}
});
var ANDROID = "Android", IOS = "iOS", R = {
    userAgent: null,
    deeplink: null,
    fallback: null,
    playPackage: null,
    heartbeatTimer: null,
    fallbackTimer: null,
    heartbeatTimeout: 0,
    fallbackTimeout: 0,
    init: function(e, i, s, n, o) {
        this.userAgent = (new UAParser).getResult(), this.deeplink = e, this.fallback = i, this.playPackage = s, this.heartbeatTimeout = parseInt(n), this.fallbackTimeout = parseInt(o);
        var t = this;
        this.heartbeatTimer = setInterval(function() {
            (document.webkitHidden || document.hidden) && this.clearTimers()
        }, this.heartbeatTimeout), document.addEventListener("visibilitychange", function() {
            t.clearTimers()
        }), this.fallbackTimer = setTimeout(function() {
            document.webkitHidden || document.hidden || (t.userAgent.os.name === IOS ? DD.send(function() {
                t.openLink(t.fallback)
            }) : t.userAgent.os.name === ANDROID && t.openLink(t.fallback))
        }, this.fallbackTimeout), this.userAgent.os.name === ANDROID ? this.androidRedirect() : this.userAgent.os.name === IOS && (parseInt(this.userAgent.os.version) >= 9 ? this.openLink(this.deeplink || this.fallback) : this.openLinkWithIframe(this.deeplink || this.fallback))
    },
    clearTimers: function() {
        clearTimeout(this.fallbackTimer), clearTimeout(this.heartbeatTimer)
    },
    openLink: function(e) {
        window.location.replace(e)
    },
    openLinkWithIframe: function(e) {
        var i = document.createElement("iframe");
        i.style.width = "1px", i.style.height = "1px", i.border = "none", i.src = e, document.body.appendChild(i)
    },
    isFallbackToGooglePlay: function() {
        var e = /play.google.com/;
        return e.test(this.fallback)
    },
    isChrome: function() {
        this.userAgent.browser.name;
        return this.userAgent.ua.match(/SamsungBrowser/) || this.userAgent.ua.match(/SAMSUNG GT/)?!1 : "Chrome" == this.userAgent.browser.name
    },
    isTwitter: function() {
        return /Twitter/.test(this.userAgent.ua)
    },
    androidRedirect: function() {
        var e = this.userAgent.browser.name, i = parseInt(this.userAgent.browser.version), s = encodeURIComponent(this.deeplink);
        this.isFallbackToGooglePlay() && (this.fallback = this.fallback + "&referrer=" + s), this.isChrome() ? this.chromeAndroidRedirect(i, s) : "Firefox" === e ? this.firefoxAndroidRedirect(s) : this.openLinkWithIframe(this.deeplink)
    },
    legacyChromeAndroidRedirect: function() {
        this.isFallbackToGooglePlay() && (this.fallback = "intent:#Intent;S.org.chromium.chrome.browser.webapp_url=" + encodeURIComponent(this.fallback) + ";S.org.chromium.chrome.browser.webapp_id=1;SEL;component=com.android.chrome/com.google.android.apps.chrome.webapps.WebappActivity0;end"), this.deeplink && (this.deeplink = "intent:#Intent;S.org.chromium.chrome.browser.webapp_url=" + encodeURIComponent("data:text/html," + encodeURIComponent('<script>window.location.href="' + this.deeplink + '";</script>')) + ";S.org.chromium.chrome.browser.webapp_id=0;SEL;component=com.android.chrome/com.google.android.apps.chrome.webapps.WebappActivity0;end"), this.openLink(this.deeplink || this.fallback)
    },
    chromeAndroidRedirect: function(e, i) {
        e >= 25 && 32 >= e ? this.legacyChromeAndroidRedirect(i) : (this.fallback = "market://details?id=" + this.playPackage + "&referrer=" + i, this.openLink(this.deeplink || this.fallback))
    },
    firefoxAndroidRedirect: function(e) {
        this.isFallbackToGooglePlay() && (this.fallback = "market://details?id=" + this.playPackage + "&referrer=" + e), this.openLinkWithIframe(this.deeplink || this.fallback)
    },
    debug: function(e) {
        console.log(e);
        var i = document.getElementById("console");
        i && (i.innerHTML = i.innerHTML + e + "\n")
    }
};
