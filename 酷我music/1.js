
window = global
!function(e) {
    function r(data) {
        for (var r, n, f = data[0], l = data[1], d = data[2], i = 0, v = []; i < f.length; i++)
            n = f[i],
            Object.prototype.hasOwnProperty.call(o, n) && o[n] && v.push(o[n][0]),
            o[n] = 0;
        for (r in l)
            Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
        for (h && h(data); v.length; )
            v.shift()();
        return c.push.apply(c, d || []),
        t()
    }
    function t() {
        for (var e, i = 0; i < c.length; i++) {
            for (var r = c[i], t = !0, n = 1; n < r.length; n++) {
                var l = r[n];
                0 !== o[l] && (t = !1)
            }
            t && (c.splice(i--, 1),
            e = f(f.s = r[0]))
        }
        return e
    }
    var n = {}
      , o = {
        31: 0
    }
      , c = [];
    function f(r) {
        if (n[r])
            return n[r].exports;
        var t = n[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        console.log(r)
        return e[r].call(t.exports, t, t.exports, f),
        t.l = !0,
        t.exports
    }
    jzq  =f
    f.e = function(e) {
        var r = []
          , t = o[e];
        if (0 !== t)
            if (t)
                r.push(t[2]);
            else {
                var n = new Promise((function(r, n) {
                    t = o[e] = [r, n]
                }
                ));
                r.push(t[2] = n);
                var c, script = document.createElement("script");
                script.charset = "utf-8",
                script.timeout = 120,
                f.nc && script.setAttribute("nonce", f.nc),
                script.src = function(e) {
                    return f.p + "" + {
                        0: "de43828",
                        1: "5307d59",
                        4: "8e0df62",
                        5: "ab8a8c9",
                        6: "9ef22b0",
                        7: "60973ad",
                        8: "4cfd0d7",
                        9: "f8b405b",
                        10: "8821f48",
                        11: "ed8b134",
                        12: "dc329c5",
                        13: "8058272",
                        14: "7262c30",
                        15: "2e51c0d",
                        16: "2c17177",
                        17: "33d3203",
                        18: "fb7b400",
                        19: "8f68f6d",
                        20: "16b1d0d",
                        21: "f6ba20d",
                        22: "37c8520",
                        23: "f1535c1",
                        24: "9e1e48d",
                        25: "43d024f",
                        26: "c281c3f",
                        27: "9e231b8",
                        28: "c071424",
                        29: "3a8ed89",
                        30: "37e5436",
                        33: "0cc9ae3"
                    }[e] + ".js"
                }(e);
                var l = new Error;
                c = function(r) {
                    script.onerror = script.onload = null,
                    clearTimeout(d);
                    var t = o[e];
                    if (0 !== t) {
                        if (t) {
                            var n = r && ("load" === r.type ? "missing" : r.type)
                              , c = r && r.target && r.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + n + ": " + c + ")",
                            l.name = "ChunkLoadError",
                            l.type = n,
                            l.request = c,
                            t[1](l)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var d = setTimeout((function() {
                    c({
                        type: "timeout",
                        target: script
                    })
                }
                ), 12e4);
                script.onerror = script.onload = c,
                document.head.appendChild(script)
            }
        return Promise.all(r)
    }
    ,
    f.m = e,
    f.c = n,
    f.d = function(e, r, t) {
        f.o(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: t
        })
    }
    ,
    f.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    f.t = function(e, r) {
        if (1 & r && (e = f(e)),
        8 & r)
            return e;
        if (4 & r && "object" == typeof e && e && e.__esModule)
            return e;
        var t = Object.create(null);
        if (f.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }),
        2 & r && "string" != typeof e)
            for (var n in e)
                f.d(t, n, function(r) {
                    return e[r]
                }
                .bind(null, n));
        return t
    }
    ,
    f.n = function(e) {
        var r = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return f.d(r, "a", r),
        r
    }
    ,
    f.o = function(object, e) {
        return Object.prototype.hasOwnProperty.call(object, e)
    }
    ,
    f.p = "https://h5s.kuwo.cn/www/kw-www/",
    f.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var l = window.webpackJsonp = window.webpackJsonp || []
      , d = l.push.bind(l);
    l.push = r,
    l = l.slice();
    for (var i = 0; i < l.length; i++)
        r(l[i]);
    var h = d;
    // t()
}([]);
(window.webpackJsonp = window.webpackJsonp || []).push([[32], {113: function(e, t, n) {
        var r, o, l = n(148), c = n(149), d = 0, h = 0;
        e.exports = function(e, t, n) {
            var i = t && n || 0
              , b = t || []
              , f = (e = e || {}).node || r
              , v = void 0 !== e.clockseq ? e.clockseq : o;
            if (null == f || null == v) {
                var m = l();
                null == f && (f = r = [1 | m[0], m[1], m[2], m[3], m[4], m[5]]),
                null == v && (v = o = 16383 & (m[6] << 8 | m[7]))
            }
            var y = void 0 !== e.msecs ? e.msecs : (new Date).getTime()
              , w = void 0 !== e.nsecs ? e.nsecs : h + 1
              , dt = y - d + (w - h) / 1e4;
            if (dt < 0 && void 0 === e.clockseq && (v = v + 1 & 16383),
            (dt < 0 || y > d) && void 0 === e.nsecs && (w = 0),
            w >= 1e4)
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            d = y,
            h = w,
            o = v;
            var A = (1e4 * (268435455 & (y += 122192928e5)) + w) % 4294967296;
            b[i++] = A >>> 24 & 255,
            b[i++] = A >>> 16 & 255,
            b[i++] = A >>> 8 & 255,
            b[i++] = 255 & A;
            var x = y / 4294967296 * 1e4 & 268435455;
            b[i++] = x >>> 8 & 255,
            b[i++] = 255 & x,
            b[i++] = x >>> 24 & 15 | 16,
            b[i++] = x >>> 16 & 255,
            b[i++] = v >>> 8 | 128,
            b[i++] = 255 & v;
            for (var T = 0; T < 6; ++T)
                b[i + T] = f[T];
            return t || c(b)
        }
    },
     148: function(e, t) {
        var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (n) {
            var r = new Uint8Array(16);
            e.exports = function() {
                return n(r),
                r
            }
        } else {
            var o = new Array(16);
            e.exports = function() {
                for (var e, i = 0; i < 16; i++)
                    3 & i || (e = 4294967296 * Math.random()),
                    o[i] = e >>> ((3 & i) << 3) & 255;
                return o
            }
        }
    },
    149: function(e, t) {
        for (var n = [], i = 0; i < 256; ++i)
            n[i] = (i + 256).toString(16).substr(1);
        e.exports = function(e, t) {
            var i = t || 0
              , r = n;
            return [r[e[i++]], r[e[i++]], r[e[i++]], r[e[i++]], "-", r[e[i++]], r[e[i++]], "-", r[e[i++]], r[e[i++]], "-", r[e[i++]], r[e[i++]], "-", r[e[i++]], r[e[i++]], r[e[i++]], r[e[i++]], r[e[i++]], r[e[i++]]].join("")
        }
    },

}]);


n = jzq(113)()
console.log(n)