(function() {
    var r = true,
            s = false,
            aa = encodeURIComponent,
            ba = window,
            u = undefined,
            ca = String,
            w = Math,
            ea = "push",
            fa = "cookie",
            x = "charAt",
            z = "indexOf",
            ga = "gaGlobal",
            ha = "getTime",
            ia = "toString",
            A = "window",
            B = "length",
            C = "document",
            D = "split",
            E = "location",
            ja = "protocol",
            ka = "href",
            F = "substring",
            H = "join",
            I = "toLowerCase";
    var la = "_gat",
            na = "_gaq",
            oa = "4.9.1",
            pa = "_gaUserPrefs",
            qa = "ioo",
            K = "&",
            L = "=",
            M = "__utma=",
            ra = "__utmb=",
            sa = "__utmc=",
            ta = "__utmk=",
            ua = "__utmv=",
            va = "__utmz=",
            wa = "__utmx=",
            xa = "GASO=";
    var ya = function() {
        var k = this,
                l = [],
                f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
        k.Ic = function(m) {
            l[m] = r
        };
        k.Xb = function() {
            for (var m = [], h = 0; h < l[B]; h++) if (l[h]) m[w.floor(h / 6)] ^= 1 << h % 6;
            for (h = 0; h < m[B]; h++) m[h] = f[x](m[h] || 0);
            return m[H]("")
        }
    },
            za = new ya;

    function O(k) {
        za.Ic(k)
    }

    ;
    var Aa = function(k, l) {
        var f = this;
        f.window = k;
        f.document = l;
        f.setTimeout = function(m, h) {
            setTimeout(m, h)
        };
        f.ab = function(m) {
            return navigator.userAgent[z](m) >= 0
        };
        f.wc = function() {
            return f.ab("Firefox") && ![].reduce
        };
        f.pb = function(m) {
            if (!m || !f.ab("Firefox")) return m;
            m = m.replace(/\n|\r/g, " ");
            for (var h = 0,
                         p = m[B]; h < p; ++h) {
                var i = m.charCodeAt(h) & 255;
                if (i == 10 || i == 13) m = m[F](0, h) + "?" + m[F](h + 1)
            }
            return m
        }
    },
            P = new Aa(ba, document);
    var Ba = function(k) {
        return function(l, f, m) {
            k[l] = function() {
                O(f);
                return m.apply(k, arguments)
            };
            return m
        }
    },
            Ca = function(k, l, f, m) {
                if (k.addEventListener) k.addEventListener(l, f, !!m);
                else k.attachEvent && k.attachEvent("on" + l, f)
            },
            Da = function(k) {
                return Object.prototype[ia].call(Object(k)) == "[object Array]"
            },
            Q = function(k) {
                return u == k || "-" == k || "" == k
            },
            S = function(k, l, f) {
                var m = "-",
                        h;
                if (!Q(k) && !Q(l) && !Q(f)) {
                    h = k[z](l);
                    if (h > -1) {
                        f = k[z](f, h);
                        if (f < 0) f = k[B];
                        m = k[F](h + l[z](L) + 1, f)
                    }
                }
                return m
            },
            Ea = function(k) {
                var l = s,
                        f = 0,
                        m, h;
                if (!Q(k)) {
                    l = r;
                    for (m = 0; m < k[B]; m++) {
                        h = k[x](m);
                        f += "." == h ? 1 : 0;
                        l = l && f <= 1 && (0 == m && "-" == h || ".0123456789" [z](h) > -1)
                    }
                }
                return l
            },
            T = function(k, l) {
                var f = aa;
                if (f instanceof Function) return l ? encodeURI(k) : f(k);
                else {
                    O(68);
                    return escape(k)
                }
            },
            Fa = function(k, l) {
                var f = decodeURIComponent,
                        m;
                k = k[D]("+")[H](" ");
                if (f instanceof Function) try {
                    m = l ? decodeURI(k) : f(k)
                } catch(h) {
                    O(17);
                    m = unescape(k)
                } else {
                    O(68);
                    m = unescape(k)
                }
                return m
            },
            U = function(k, l) {
                return k[z](l) > -1
            };

    function Ha(k) {
        if (!k || "" == k) return "";
        for (; k[x](0)[B] > 0 && " \n\r\t" [z](k[x](0)) > -1;) k = k[F](1);
        for (; k[x](k[B] - 1)[B] > 0 && " \n\r\t" [z](k[x](k[B] - 1)) > -1;) k = k[F](0, k[B] - 1);
        return k
    }

    var W = function(k, l) {
        k[ea] || O(94);
        k[k[B]] = l
    },
            Ia = function(k) {
                var l = 1,
                        f = 0,
                        m;
                if (!Q(k)) {
                    l = 0;
                    for (m = k[B] - 1; m >= 0; m--) {
                        f = k.charCodeAt(m);
                        l = (l << 6 & 268435455) + f + (f << 14);
                        f = l & 266338304;
                        l = f != 0 ? l ^ f >> 21 : l
                    }
                }
                return l
            },
            Ja = function() {
                return w.round(w.random() * 2147483647)
            },
            Ka = function() {
            };
    var La = function(k, l) {
        this.Sa = k;
        this.gb = l
    },
            Ma = function() {
                function k(f) {
                    var m = [];
                    f = f[D](",");
                    for (var h, p = 0; p < f[B]; p++) {
                        h = f[p][D](":");
                        m[ea](new La(h[0], h[1]))
                    }
                    return m
                }

                var l = this;
                l.za = "utm_campaign";
                l.Aa = "utm_content";
                l.Ba = "utm_id";
                l.Ca = "utm_medium";
                l.Da = "utm_nooverride";
                l.Ea = "utm_source";
                l.Fa = "utm_term";
                l.Ga = "gclid";
                l.U = 0;
                l.w = 0;
                l.Ka = 15768E6;
                l.tb = 18E5;
                l.v = 63072E6;
                l.la = [];
                l.na = [];
                l.pc = "cse";
                l.qc = "q";
                l.jb = 50;
                l.P = k("daum:q,eniro:search_word,naver:query,pchome:q,images.google:q,google:q,yahoo:p,yahoo:q,msn:q,bing:q,aol:query,aol:encquery,aol:q,lycos:query,ask:q,altavista:q,netscape:query,cnn:query,about:terms,mamma:q,alltheweb:q,voila:rdata,virgilio:qs,live:q,baidu:wd,alice:qs,yandex:text,najdi:q,mama:query,seznam:q,search:q,wp:szukaj,onet:qt,szukacz:q,yam:k,kvasir:q,sesam:q,ozu:q,terra:query,mynet:q,ekolay:q,rambler:query,rambler:words");
                l.f = "/";
                l.Q = 100;
                l.ia = "/__utm.gif";
                l.Z = 1;
                l.$ = 1;
                l.u = "|";
                l.X = 1;
                l.La = 1;
                l.Ja = 1;
                l.b = "auto";
                l.D = 1;
                l.Sc = 10;
                l.Qb = 10;
                l.Tc = 0.2;
                l.m = u
            };
    var Na = function(k) {
        function l(a, c, j, e) {
            var d = "",
                    q = 0;
            d = S(a, "2" + c, ";");
            if (!Q(d)) {
                a = d[z]("^" + j + ".");
                if (a < 0) return ["", 0];
                d = d[F](a + j[B] + 2);
                if (d[z]("^") > 0) d = d[D]("^")[0];
                j = d[D](":");
                d = j[1];
                q = parseInt(j[0], 10);
                if (!e && q < h.r) d = ""
            }
            if (Q(d)) d = "";
            return [d, q]
        }

        function f(a, c) {
            return "^" + [
                [c, a[1]][H]("."),
                a[0]
            ][H](":")
        }

        function m(a) {
            var c = new Date;
            a = new Date(c[ha]() + a);
            return "expires=" + a.toGMTString() + "; "
        }

        var h = this,
                p = k;
        h.r = (new Date)[ha]();
        var i = [M, ra, sa, va, ua, wa, xa];
        h.h = function() {
            var a = P[C][fa];
            return p.m ? h.Yb(a, p.m) : a
        };
        h.Yb = function(a, c) {
            for (var j = [], e, d = 0; d < i[B]; d++) {
                e = l(a, i[d], c)[0];
                Q(e) || (j[j[B]] = i[d] + e + ";")
            }
            return j[H]("")
        };
        h.k = function(a, c, j) {
            var e = j > 0 ? m(j) : "";
            if (p.m) {
                c = h.lc(P[C][fa], a, p.m, c, j);
                a = "2" + a;
                e = j > 0 ? m(p.v) : ""
            }
            a += c;
            a = P.pb(a);
            if (a[B] > 2E3) {
                O(69);
                a = a[F](0, 2E3)
            }
            e = a + "; path=" + p.f + "; " + e + h.Va();
            P[C].cookie = e
        };
        h.lc = function(a, c, j, e, d) {
            var q = "";
            d = d || p.v;
            e = f([e, h.r + d * 1], j);
            q = S(a, "2" + c, ";");
            if (!Q(q)) {
                a = f(l(a, c, j, r), j);
                q = q[D](a)[H]("");
                return q = e + q
            }
            return e
        };
        h.Va = function() {
            return Q(p.b) ? "" : "domain=" + p.b + ";"
        }
    };
    var Oa = function(k) {
        function l(g) {
            g = Da(g) ? g[H](".") : "";
            return Q(g) ? "-" : g
        }

        function f(g, n) {
            var t = [],
                    o;
            if (!Q(g)) {
                t = g[D](".");
                if (n) for (o = 0; o < t[B]; o++) Ea(t[o]) || (t[o] = "-")
            }
            return t
        }

        function m(g, n, t) {
            var o = d.I,
                    v, y;
            for (v = 0; v < o[B]; v++) {
                y = o[v][0];
                y += Q(n) ? n : n + o[v][4];
                o[v][2](S(g, y, t))
            }
        }

        var h, p, i, a, c, j, e, d = this,
                q, b = k;
        d.g = new Na(k);
        d.cb = function() {
            return u == q || q == d.L()
        };
        d.h = function() {
            return d.g.h()
        };
        d.ga = function() {
            return c ? c : "-"
        };
        d.wb = function(g) {
            c = g
        };
        d.ra = function(g) {
            q = Ea(g) ? g * 1 : "-"
        };
        d.fa = function() {
            return l(j)
        };
        d.sa = function(g) {
            j = f(g)
        };
        d.Wb = function() {
            d.g.k(ua, "", -1)
        };
        d.mc = function() {
            return q ? q : "-"
        };
        d.Va = function() {
            return Q(b.b) ? "" : "domain=" + b.b + ";"
        };
        d.da = function() {
            return l(h)
        };
        d.ub = function(g) {
            h = f(g, 1)
        };
        d.z = function() {
            return l(p)
        };
        d.qa = function(g) {
            p = f(g, 1)
        };
        d.ea = function() {
            return l(i)
        };
        d.vb = function(g) {
            i = f(g, 1)
        };
        d.ha = function() {
            return l(a)
        };
        d.xb = function(g) {
            a = f(g);
            for (g = 0; g < a[B]; g++) if (g < 4 && !Ea(a[g])) a[g] = "-"
        };
        d.fc = function() {
            return e
        };
        d.Lc = function(g) {
            e = g
        };
        d.Tb = function() {
            h = [];
            p = [];
            i = [];
            a = [];
            c = u;
            j = [];
            q = u
        };
        d.L = function() {
            for (var g = "",
                         n = 0; n < d.I[B]; n++) g += d.I[n][1]();
            return Ia(g)
        };
        d.ma = function(g) {
            var n = d.h(),
                    t = s;
            if (n) {
                m(n, g, ";");
                d.ra(ca(d.L()));
                t = r
            }
            return t
        };
        d.Bc = function(g) {
            m(g, "", K);
            d.ra(S(g, ta, K))
        };
        d.Qc = function() {
            var g = d.I,
                    n = [],
                    t;
            for (t = 0; t < g[B]; t++) W(n, g[t][0] + g[t][1]());
            W(n, ta + d.L());
            return n[H](K)
        };
        d.Xc = function(g, n) {
            var t = d.I,
                    o = b.f;
            d.ma(g);
            b.f = n;
            for (var v = 0; v < t[B]; v++) if (!Q(t[v][1]())) t[v][3]();
            b.f = o
        };
        d.Ib = function() {
            d.g.k(M, d.da(), b.v)
        };
        d.wa = function() {
            d.g.k(ra, d.z(), b.tb)
        };
        d.Jb = function() {
            d.g.k(sa, d.ea(), 0)
        };
        d.ya = function() {
            d.g.k(va, d.ha(), b.Ka)
        };
        d.Kb = function() {
            d.g.k(wa, d.ga(), b.v)
        };
        d.xa = function() {
            d.g.k(ua, d.fa(), b.v)
        };
        d.Zc = function() {
            d.g.k(xa, d.fc(), 0)
        };
        d.I = [
            [M, d.da, d.ub, d.Ib, "."],
            [ra, d.z, d.qa, d.wa, ""],
            [sa, d.ea, d.vb, d.Jb, ""],
            [wa, d.ga, d.wb, d.Kb, ""],
            [va, d.ha, d.xb, d.ya, "."],
            [ua, d.fa, d.sa, d.xa, "."]
        ]
    };
    var Pa = "https:" == P[C][E][ja] ? "https://ssl.google-analytics.com/" : "http://www.google-analytics.com/",
            Qa = Pa + "p/__utm.gif",
            Ra = function() {
                var k = this;
                k.sb = function(l, f, m, h, p) {
                    if (f[B] <= 2036 || p) k.pa(l + "?" + f, h);
                    else if (f[B] <= 8192) P.wc() ? k.pa(l + "?" + m + "&err=ff2post&len=" + f[B], h) : k.Gc(f, h);
                    else k.pa(l + "?" + m + "&err=len&max=8192&len=" + f[B], h)
                };
                k.pa = function(l, f) {
                    var m = new Image(1, 1);
                    m.src = l;
                    m.onload = function() {
                        m.onload = null;
                        (f || Ka)()
                    }
                };
                k.Gc = function(l, f) {
                    k.Cc(l, f) || k.lb(l, f)
                };
                k.Cc = function(l, f) {
                    var m, h = P[A].XDomainRequest;
                    if (h) {
                        m = new h;
                        m.open("POST", Qa)
                    } else if (h = P[A].XMLHttpRequest) {
                        h = new h;
                        if ("withCredentials" in h) {
                            m = h;
                            m.open("POST", Qa, r);
                            m.setRequestHeader("Content-Type", "text/plain")
                        }
                    }
                    if (m) {
                        m.onreadystatechange = function() {
                            if (m.readyState == 4) {
                                f && f();
                                m = null
                            }
                        };
                        m.send(l);
                        return r
                    }
                    return s
                };
                k.lb = function(l, f) {
                    var m = P[C];
                    if (m.body) {
                        l = aa(l);
                        try {
                            var h = m.createElement('<iframe name="' + l + '"></iframe>')
                        } catch(p) {
                            h = m.createElement("iframe");
                            h.name = l
                        }
                        h.height = "0";
                        h.width = "0";
                        h.style.display = "none";
                        h.style.visibility = "hidden";
                        var i = m[E];
                        i = i[ja] + "//" + i.host + "/favicon.ico";
                        i = Pa + "u/post_iframe.html#" + aa(i);
                        var a = function() {
                            h.src = "";
                            h.parentNode && h.parentNode.removeChild(h)
                        };
                        Ca(P[A], "beforeunload", a);
                        var c = s,
                                j = 0,
                                e = function() {
                                    if (!c) {
                                        try {
                                            if (j > 9 || h.contentWindow[E].host == m[E].host) {
                                                c = r;
                                                a();
                                                var d = P[A],
                                                        q = "beforeunload",
                                                        b = a;
                                                if (d.removeEventListener) d.removeEventListener(q, b, s);
                                                else d.detachEvent && d.detachEvent("on" + q, b);
                                                f && f();
                                                return
                                            }
                                        } catch(g) {
                                        }
                                        j++;
                                        P.setTimeout(e, 200)
                                    }
                                };
                        Ca(h, "load", e);
                        m.body.appendChild(h);
                        h.src = i
                    } else P.setTimeout(function() {
                        k.lb(l, f)
                    },
                            100)
                }
            };
    var Sa = function(k) {
        var l = this,
                f = k,
                m = new Oa(f),
                h = new Ra,
                p = !X.Yc(),
                i = function() {
                };
        l.jc = function() {
            return "https:" == P[C][E][ja] ? "https://ssl.google-analytics.com/__utm.gif" : "http://www.google-analytics.com/__utm.gif"
        };
        l.C = function(a, c, j, e, d, q) {
            var b = f.D,
                    g = P[C][E];
            m.ma(j);
            var n = m.z()[D](".");
            if (n[1] < 500 || e) {
                if (d) {
                    var t = (new Date)[ha](),
                            o;
                    o = (t - n[3]) * (f.Tc / 1E3);
                    if (o >= 1) {
                        n[2] = w.min(w.floor(n[2] * 1 + o), f.Qb);
                        n[3] = t
                    }
                }
                if (e || !d || n[2] >= 1) {
                    if (!e && d) n[2] = n[2] * 1 - 1;
                    n[1] = n[1] * 1 + 1;
                    d = "utmwv=" + oa;
                    t = "&utmn=" + Ja();
                    e = d + "e" + t;
                    a = d + t + (Q(g.hostname) ? "" : "&utmhn=" + T(g.hostname)) + (f.Q == 100 ? "" : "&utmsp=" + T(f.Q)) + a;
                    if (0 == b || 2 == b) {
                        g = 2 == b ? i : q || i;
                        p && h.sb(f.ia, a, e, g, r)
                    }
                    if (1 == b || 2 == b) {
                        c = "&utmac=" + c;
                        e += c;
                        a += c + "&utmcc=" + l.cc(j);
                        if (X.Ra) {
                            j = "&aip=1";
                            e += j;
                            a += j
                        }
                        a += "&utmu=" + za.Xb();
                        p && h.sb(l.jc(), a, e, q)
                    }
                }
            }
            m.qa(n[H]("."));
            m.wa()
        };
        l.cc = function(a) {
            for (var c = [], j = [M, va, ua, wa], e = m.h(), d, q = 0; q < j[B]; q++) {
                d = S(e, j[q] + a, ";");
                if (!Q(d)) {
                    if (j[q] == ua) {
                        d = d[D](a + ".")[1][D]("|")[0];
                        if (Q(d)) continue;
                        d = a + "." + d
                    }
                    W(c, j[q] + d + ";")
                }
            }
            return T(c[H]("+"))
        }
    };
    var Ta = function() {
        var k = this;
        k.S = [];
        k.$a = function(l) {
            for (var f, m = k.S,
                         h = 0; h < m[B]; h++) f = l == m[h].o ? m[h] : f;
            return f
        };
        k.Pb = function(l, f, m, h, p, i, a, c) {
            var j = k.$a(l);
            if (u == j) {
                j = new Ta.Mb(l, f, m, h, p, i, a, c);
                W(k.S, j)
            } else {
                j.Ia = f;
                j.Cb = m;
                j.Ab = h;
                j.yb = p;
                j.Na = i;
                j.zb = a;
                j.Pa = c
            }
            return j
        }
    };
    Ta.Lb = function(k, l, f, m, h, p) {
        var i = this;
        i.Gb = k;
        i.ua = l;
        i.p = f;
        i.Ma = m;
        i.mb = h;
        i.nb = p;
        i.va = function() {
            return "&" + ["utmt=item", "tid=" + T(i.Gb), "ipc=" + T(i.ua), "ipn=" + T(i.p), "iva=" + T(i.Ma), "ipr=" + T(i.mb), "iqt=" + T(i.nb)][H]("&utm")
        }
    };
    Ta.Mb = function(k, l, f, m, h, p, i, a) {
        var c = this;
        c.o = k;
        c.Ia = l;
        c.Cb = f;
        c.Ab = m;
        c.yb = h;
        c.Na = p;
        c.zb = i;
        c.Pa = a;
        c.N = [];
        c.Ob = function(j, e, d, q, b) {
            var g = c.gc(j),
                    n = c.o;
            if (u == g) W(c.N, new Ta.Lb(n, j, e, d, q, b));
            else {
                g.Gb = n;
                g.ua = j;
                g.p = e;
                g.Ma = d;
                g.mb = q;
                g.nb = b
            }
        };
        c.gc = function(j) {
            for (var e, d = c.N,
                         q = 0; q < d[B]; q++) e = j == d[q].ua ? d[q] : e;
            return e
        };
        c.va = function() {
            return "&" + ["utmt=tran", "id=" + T(c.o), "st=" + T(c.Ia), "to=" + T(c.Cb), "tx=" + T(c.Ab), "sp=" + T(c.yb), "ci=" + T(c.Na), "rg=" + T(c.zb), "co=" + T(c.Pa)][H]("&utmt")
        }
    };
    var Ua = function(k) {
        function l() {
            var i, a, c;
            a = "ShockwaveFlash";
            var j = "$version",
                    e = P[A].navigator;
            if ((e = e ? e.plugins : u) && e[B] > 0) for (i = 0; i < e[B] && !c; i++) {
                a = e[i];
                if (U(a.name, "Shockwave Flash")) c = a.description[D]("Shockwave Flash ")[1]
            } else {
                a = a + "." + a;
                try {
                    i = new ActiveXObject(a + ".7");
                    c = i.GetVariable(j)
                } catch(d) {
                }
                if (!c) try {
                    i = new ActiveXObject(a + ".6");
                    c = "WIN 6,0,21,0";
                    i.$c = "always";
                    c = i.GetVariable(j)
                } catch(q) {
                }
                if (!c) try {
                    i = new ActiveXObject(a);
                    c = i.GetVariable(j)
                } catch(b) {
                }
                if (c) {
                    c = c[D](" ")[1][D](",");
                    c = c[0] + "." + c[1] + " r" + c[2]
                }
            }
            return c ? c : m
        }

        var f = this,
                m = "-",
                h = P[A].screen,
                p = P[A].navigator;
        f.rb = h ? h.width + "x" + h.height : m;
        f.qb = h ? h.colorDepth + "-bit" : m;
        f.Sb = T(P[C].characterSet ? P[C].characterSet : P[C].charset ? P[C].charset : m);
        f.hb = (p && p.language ? p.language : p && p.browserLanguage ? p.browserLanguage : m)[I]();
        f.fb = p && p.javaEnabled() ? 1 : 0;
        f.$b = k ? l() : m;
        f.Rc = function() {
            return K + "utm" + ["cs=" + T(f.Sb), "sr=" + f.rb, "sc=" + f.qb, "ul=" + f.hb, "je=" + f.fb, "fl=" + T(f.$b)][H]("&utm")
        };
        f.bc = function() {
            var i = P[A].navigator,
                    a = P[A].history[B];
            i = i.appName + i.version + f.hb + i.platform + i.userAgent + f.fb + f.rb + f.qb + (P[C][fa] ? P[C][fa] : "") + (P[C].referrer ? P[C].referrer : "");
            for (var c = i[B]; a > 0;) i += a-- ^ c++;
            return Ia(i)
        }
    };
    var Z = function(k, l, f, m) {
        function h(a) {
            var c = "";
            c = a[D]("://")[1][I]();
            if (U(c, "/")) c = c[D]("/")[0];
            return c
        }

        var p = m,
                i = this;
        i.a = k;
        i.ob = l;
        i.r = f;
        i.Za = function(a) {
            var c = i.ca();
            return new Z.s(S(a, p.Ba + L, K), S(a, p.Ea + L, K), S(a, p.Ga + L, K), i.M(a, p.za, "(not set)"), i.M(a, p.Ca, "(not set)"), i.M(a, p.Fa, c && !Q(c.G) ? Fa(c.G) : u), i.M(a, p.Aa, u))
        };
        i.bb = function(a) {
            var c = h(a),
                    j;
            j = a;
            var e = "";
            j = j[D]("://")[1][I]();
            if (U(j, "/")) {
                j = j[D]("/")[1];
                if (U(j, "?")) e = j[D]("?")[0]
            }
            j = e;
            if (U(c, "google")) {
                a = a[D]("?")[H](K);
                if (U(a, K + p.qc + L)) if (j == p.pc) return r
            }
            return s
        };
        i.ca = function() {
            var a, c = i.ob,
                    j, e = p.P;
            if (! (Q(c) || "0" == c || !U(c, "://") || i.bb(c))) {
                a = h(c);
                for (var d = 0; d < e[B]; d++) {
                    j = e[d];
                    if (U(a, j.Sa[I]())) {
                        c = c[D]("?")[H](K);
                        if (U(c, K + j.gb + L)) {
                            a = c[D](K + j.gb + L)[1];
                            if (U(a, K)) a = a[D](K)[0];
                            return new Z.s(u, j.Sa, u, "(organic)", "organic", a, u)
                        }
                    }
                }
            }
        };
        i.M = function(a, c, j) {
            a = S(a, c + L, K);
            return j = !Q(a) ? Fa(a) : !Q(j) ? j : "-"
        };
        i.xc = function(a) {
            var c = p.la,
                    j = s;
            if (a && "organic" == a.O) {
                a = Fa(a.G)[I]();
                for (var e = 0; e < c[B]; e++) j = j || c[e][I]() == a
            }
            return j
        };
        i.Xa = function() {
            var a = "",
                    c = "";
            a = i.ob;
            if (! (Q(a) || "0" == a || !U(a, "://") || i.bb(a))) {
                a = a[D]("://")[1];
                if (U(a, "/")) {
                    c = a[F](a[z]("/"));
                    c = c[D]("?")[0];
                    a = a[D]("/")[0][I]()
                }
                if (0 == a[z]("www.")) a = a[F](4);
                return new Z.s(u, a, u, "(referral)", "referral", u, c)
            }
        };
        i.Ua = function(a) {
            var c = "";
            if (p.U) {
                c = a && a.hash ? a[ka][F](a[ka][z]("#")) : "";
                c = "" != c ? c + K : c
            }
            c += a.search;
            return c
        };
        i.ba = function() {
            return new Z.s(u, "(direct)", u, "(direct)", "(none)", u, u)
        };
        i.yc = function(a) {
            var c = s,
                    j = p.na;
            if (a && "referral" == a.O) {
                a = T(a.R)[I]();
                for (var e = 0; e < j[B]; e++) c = c || U(a, j[e][I]())
            }
            return c
        };
        i.i = function(a) {
            return u != a && a.eb()
        };
        i.Cd = function(a) {
            a = S(a, va + i.a + ".", ";");
            var c = a[D](".");
            a = new Z.s;
            a.kb(c.slice(4)[H]("."));
            if (!i.i(a)) return r;
            c = P[C][E];
            c = i.Ua(c);
            c = i.Za(c);
            if (!i.i(c)) {
                c = i.ca();
                i.i(c) || (c = i.Xa())
            }
            return i.i(c) && a.H()[I]() != c.H()[I]()
        };
        i.dc = function(a, c) {
            if (p.La) {
                var j = "",
                        e = "-",
                        d, q = 0,
                        b, g, n = i.a;
                if (a) {
                    g = a.h();
                    j = i.Ua(P[C][E]);
                    if (p.w && a.cb()) {
                        e = a.ha();
                        if (!Q(e) && !U(e, ";")) {
                            a.ya();
                            return
                        }
                    }
                    e = S(g, va + n + ".", ";");
                    d = i.Za(j);
                    if (i.i(d)) {
                        j = S(j, p.Da + L, K);
                        if ("1" == j && !Q(e)) return
                    }
                    if (!i.i(d)) {
                        d = i.ca();
                        j = i.xc(d);
                        if (!Q(e) && j) return;
                        if (j) d = i.ba()
                    }
                    if (!i.i(d) && c) {
                        d = i.Xa();
                        j = i.yc(d);
                        if (!Q(e) && j) return;
                        if (j) d = i.ba()
                    }
                    if (!i.i(d)) if (Q(e) && c) d = i.ba();
                    if (i.i(d)) {
                        if (!Q(e)) {
                            q = e[D](".");
                            b = new Z.s;
                            b.kb(q.slice(4)[H]("."));
                            b = b.H()[I]() == d.H()[I]();
                            q = q[3] * 1
                        }
                        if (!b || c) {
                            g = S(g, M + n + ".", ";");
                            b = g.lastIndexOf(".");
                            g = b > 9 ? g[F](b + 1) * 1 : 0;
                            q++;
                            g = 0 == g ? 1 : g;
                            a.xb([n, i.r, g, q, d.H()][H]("."));
                            a.ya()
                        }
                    }
                }
            }
        }
    };
    Z.s = function(k, l, f, m, h, p, i) {
        var a = this;
        a.o = k;
        a.R = l;
        a.W = f;
        a.p = m;
        a.O = h;
        a.G = p;
        a.Oa = i;
        a.H = function() {
            var c = [],
                    j = [
                        ["cid", a.o],
                        ["csr", a.R],
                        ["gclid", a.W],
                        ["ccn", a.p],
                        ["cmd", a.O],
                        ["ctr", a.G],
                        ["cct", a.Oa]
                    ],
                    e,
                    d;
            if (a.eb()) for (e = 0; e < j[B]; e++) if (!Q(j[e][1])) {
                d = j[e][1][D]("+")[H]("%20");
                d = d[D](" ")[H]("%20");
                W(c, "utm" + j[e][0] + L + d)
            }
            return P.pb(c[H]("|"))
        };
        a.eb = function() {
            return ! (Q(a.o) && Q(a.R) && Q(a.W))
        };
        a.kb = function(c) {
            var j = function(e) {
                return Fa(S(c, "utm" + e + L, "|"))
            };
            a.o = j("cid");
            a.R = j("csr");
            a.W = j("gclid");
            a.p = j("ccn");
            a.O = j("cmd");
            a.G = j("ctr");
            a.Oa = j("cct")
        }
    };
    var Va = function(k, l, f, m) {
        var h = this,
                p = l,
                i = L,
                a = k,
                c = m;
        h.K = f;
        h.ka = "";
        h.n = {};
        h.uc = function() {
            var j;
            j = S(h.K.h(), ua + p + ".", ";")[D](p + ".")[1];
            if (!Q(j)) {
                j = j[D]("|");
                var e = h.n,
                        d = j[1],
                        q;
                if (!Q(d)) {
                    d = d[D](",");
                    for (var b = 0; b < d[B]; b++) {
                        q = d[b];
                        if (!Q(q)) {
                            q = q[D](i);
                            if (q[B] == 4) e[q[0]] = [q[1], q[2], 1]
                        }
                    }
                }
                h.ka = j[0];
                h.T()
            }
        };
        h.T = function() {
            h.Rb();
            var j = h.ka,
                    e, d, q = "";
            for (e in h.n) if ((d = h.n[e]) && 1 === d[2]) q += e + i + d[0] + i + d[1] + i + 1 + ",";
            Q(q) || (j += "|" + q);
            if (Q(j)) h.K.Wb();
            else {
                h.K.sa(p + "." + j);
                h.K.xa()
            }
        };
        h.Mc = function(j) {
            h.ka = j;
            h.T()
        };
        h.Kc = function(j, e, d, q) {
            if (1 != q && 2 != q && 3 != q) q = 3;
            var b = s;
            if (e && d && j > 0 && j <= a.jb) {
                e = T(e);
                d = T(d);
                if (e[B] + d[B] <= 64) {
                    h.n[j] = [e, d, q];
                    h.T();
                    b = r
                }
            }
            return b
        };
        h.oc = function(j) {
            if ((j = h.n[j]) && 1 === j[2]) return j[1]
        };
        h.Vb = function(j) {
            var e = h.n;
            if (e[j]) {
                delete e[j];
                h.T()
            }
        };
        h.Rb = function() {
            c.t(8);
            c.t(9);
            c.t(11);
            var j = h.n,
                    e, d;
            for (d in j) if (e = j[d]) {
                c.q(8, d, e[0]);
                c.q(9, d, e[1]);
                (e = e[2]) && 3 != e && c.q(11, d, "" + e)
            }
        }
    };
    var Wa = function() {
        function k(o, v, y, N) {
            if (u == i[o]) i[o] = {};
            if (u == i[o][v]) i[o][v] = [];
            i[o][v][y] = N
        }

        function l(o, v, y) {
            if (u != i[o] && u != i[o][v]) return i[o][v][y]
        }

        function f(o, v) {
            if (u != i[o] && u != i[o][v]) {
                i[o][v] = u;
                var y = r,
                        N;
                for (N = 0; N < j[B]; N++) if (u != i[o][j[N]]) {
                    y = s;
                    break
                }
                if (y) i[o] = u
            }
        }

        function m(o) {
            var v = "",
                    y = s,
                    N, V;
            for (N = 0; N < j[B]; N++) {
                V = o[j[N]];
                if (u != V) {
                    if (y) v += j[N];
                    y = [];
                    var J = void 0,
                            G = void 0;
                    for (G = 0; G < V[B]; G++) if (u != V[G]) {
                        J = "";
                        if (G != t && u == V[G - 1]) J += G[ia]() + b;
                        var R;
                        R = V[G];
                        var ma = "",
                                Y = void 0,
                                da = void 0,
                                Ga = void 0;
                        for (Y = 0; Y < R[B]; Y++) {
                            da = R[x](Y);
                            Ga = n[da];
                            ma += u != Ga ? Ga : da
                        }
                        R = ma;
                        J += R;
                        W(y, J)
                    }
                    V = e + y[H](q) + d;
                    v += V;
                    y = s
                } else y = r
            }
            return v
        }

        var h = this,
                p = Ba(h),
                i = {},
                a = "k",
                c = "v",
                j = [a, c],
                e = "(",
                d = ")",
                q = "*",
                b = "!",
                g = "'",
                n = {};
        n[g] = "'0";
        n[d] = "'1";
        n[q] = "'2";
        n[b] = "'3";
        var t = 1;
        h.sc = function(o) {
            return u != i[o]
        };
        h.B = function() {
            var o = "",
                    v;
            for (v in i) if (u != i[v]) o += v[ia]() + m(i[v]);
            return o
        };
        h.Dc = function(o) {
            if (o == u) return h.B();
            var v = o.B(),
                    y;
            for (y in i) if (u != i[y] && !o.sc(y)) v += y[ia]() + m(i[y]);
            return v
        };
        h.q = p("_setKey", 89,
                function(o, v, y) {
                    if (typeof y != "string") return s;
                    k(o, a, v, y);
                    return r
                });
        h.ta = p("_setValue", 90,
                function(o, v, y) {
                    if (typeof y != "number" && (u == Number || !(y instanceof Number)) || w.round(y) != y || y == NaN || y == Infinity) return s;
                    k(o, c, v, y[ia]());
                    return r
                });
        h.hc = p("_getKey", 87,
                function(o, v) {
                    return l(o, a, v)
                });
        h.nc = p("_getValue", 88,
                function(o, v) {
                    return l(o, c, v)
                });
        h.t = p("_clearKey", 85,
                function(o) {
                    f(o, a)
                });
        h.V = p("_clearValue", 86,
                function(o) {
                    f(o, c)
                })
    };
    var Xa = function(k, l) {
        var f = this,
                m = Ba(f);
        f.Ed = l;
        f.Ac = k;
        f.Db = m("_trackEvent", 91,
                function(h, p, i) {
                    return l.Db(f.Ac, h, p, i)
                })
    };
    var Ya = function(k, l) {
        var f = this,
                m = P[A].external,
                h = P[A].webkitPerformance,
                p = 10;
        f.ib = new Wa;
        f.ic = function() {
            var i, a = "timing",
                    c = "onloadT";
            if (m && m[c] != u && m.isValidLoadTime) i = m[c];
            else if (h && h[a]) i = h[a].loadEventStart - h[a].navigationStart;
            return i
        };
        f.Pc = function() {
            return k.F() && k.Hb() % 100 < p
        };
        f.Fc = function() {
            var i = "&utmt=event&utme=" + T(f.ib.B()) + k.oa();
            l.C(i, k.l, k.a, s, r)
        };
        f.Bb = function() {
            var i = f.ic();
            if (i == u) return s;
            if (i <= 0) return r;
            if (i > 2147483648) return s;
            var a = f.ib;
            a.t(14);
            a.V(14);
            a.ta(14, 1, i) && f.Fc();
            m && m.isValidLoadTime != u && m.setPageReadyTime();
            return s
        };
        f.Eb = function() {
            if (!f.Pc()) return s;
            if (P[A].top != P[A]) return s;
            f.Bb() && Ca(P[A], "load", f.Bb, s);
            return r
        }
    };
    var $ = function() {
    };
    $.Zb = function(k) {
        var l = "gaso=",
                f = P[C][E].hash;
        if (f && 1 == f[z](l)) k = S(f, l, K);
        else k = (f = P[A].name) && 0 <= f[z](l) ? S(f, l, K) : S(k.h(), xa, ";");
        return k
    };
    $.zc = function(k, l) {
        var f = (l || "www") + ".google.com";
        f = "https://" + f + "/analytics/reporting/overlay_js?gaso=" + k + K + Ja();
        var m = "_gasojs",
                h = P[C].createElement("script");
        h.type = "text/javascript";
        h.src = f;
        if (m) h.id = m;
        (P[C].getElementsByTagName("head")[0] || P[C].getElementsByTagName("body")[0]).appendChild(h)
    };
    $.load = function(k, l) {
        if (!$.vc) {
            var f = $.Zb(l),
                    m = f && f.match(/^(?:\|([-0-9a-z.]{1,30})\|)?([-.\w]{10,1200})$/i);
            if (m) {
                l.Lc(f);
                l.Zc();
                X._gasoDomain = k.b;
                X._gasoCPath = k.f;
                $.zc(m[2], m[1])
            }
            $.vc = r
        }
    };
    var Za = function(k, l, f) {
        function m() {
            if ("auto" == e.b) {
                var b = P[C].domain;
                if ("www." == b[F](0, 4)) b = b[F](4);
                e.b = b
            }
            e.b = e.b[I]()
        }

        function h() {
            m();
            var b = e.b,
                    g = b[z]("www.google.") * b[z](".google.") * b[z]("google.");
            return g || "/" != e.f || b[z]("google.org") > -1
        }

        function p(b, g, n) {
            if (Q(b) || Q(g) || Q(n)) return "-";
            b = S(b, M + a.a + ".", g);
            if (!Q(b)) {
                b = b[D](".");
                b[5] = "" + (b[5] ? b[5] * 1 + 1 : 1);
                b[3] = b[4];
                b[4] = n;
                b = b[H](".")
            }
            return b
        }

        function i() {
            return "file:" != P[C][E][ja] && h()
        }

        var a = this,
                c = Ba(a),
                j = u,
                e = new Ma,
                d = s,
                q = u;
        a.p = k;
        a.r = w.round((new Date)[ha]() / 1E3);
        a.l = l || "UA-XXXXX-X";
        a.Qa = P[C].referrer;
        a.aa = u;
        a.d = u;
        a.A = s;
        a.J = u;
        a.e = u;
        a.Ta = u;
        a.ja = u;
        a.a = u;
        a.j = u;
        e.m = f ? T(f) : u;
        a.kc = function() {
            return Ja() ^ a.J.bc() & 2147483647
        };
        a.ec = function() {
            if (!e.b || "" == e.b || "none" == e.b) {
                e.b = "";
                return 1
            }
            m();
            return e.Ja ? Ia(e.b) : 1
        };
        a.ac = function(b, g) {
            if (Q(b)) b = "-";
            else {
                g += e.f && "/" != e.f ? e.f : "";
                var n = b[z](g);
                b = n >= 0 && n <= 8 ? "0" : "[" == b[x](0) && "]" == b[x](b[B] - 1) ? "-" : b
            }
            return b
        };
        a.oa = function(b) {
            var g = "";
            g += e.X ? a.J.Rc() : "";
            g += e.Z && !Q(P[C].title) ? "&utmdt=" + T(P[C].title) : "";
            var n;
            n = u;
            if (P[A] && P[A][ga] && P[A][ga].hid) n = P[A][ga].hid;
            else {
                n = Ja();
                P[A].gaGlobal = P[A][ga] ? P[A][ga] : {};
                P[A][ga].hid = n
            }
            g += "&utmhid=" + n + "&utmr=" + T(ca(a.aa)) + "&utmp=" + T(a.Ec(b));
            return g
        };
        a.Ec = function(b) {
            var g = P[C][E];
            b && O(13);
            return b = u != b && "" != b ? T(b, r) : T(g.pathname + g.search, r)
        };
        a.Vc = function(b) {
            if (a.F()) {
                var g = "";
                if (a.e != u && a.e.B()[B] > 0) g += "&utme=" + T(a.e.B());
                g += a.oa(b);
                j.C(g, a.l, a.a)
            }
        };
        a.Ub = function() {
            var b = new Oa(e);
            return b.ma(a.a) ? b.Qc() : u
        };
        a.Wa = c("_getLinkerUrl", 52,
                function(b, g) {
                    var n = b[D]("#"),
                            t = b,
                            o = a.Ub();
                    if (o) if (g && 1 >= n[B]) t += "#" + o;
                    else if (!g || 1 >= n[B]) if (1 >= n[B]) t += (U(b, "?") ? K : "?") + o;
                    else t = n[0] + (U(b, "?") ? K : "?") + o + "#" + n[1];
                    return t
                });
        a.rc = function() {
            var b = a.r,
                    g = a.j,
                    n = g.h(),
                    t = a.a + "",
                    o = P[A] ? P[A][ga] : u,
                    v,
                    y = U(n, M + t + "."),
                    N = U(n, ra + t),
                    V = U(n, sa + t),
                    J,
                    G = [],
                    R = "",
                    ma = s;
            n = Q(n) ? "" : n;
            if (e.w) {
                v = P[C][E] && P[C][E].hash ? P[C][E][ka][F](P[C][E][ka][z]("#")) : "";
                if (e.U && !Q(v)) R = v + K;
                R += P[C][E].search;
                if (!Q(R) && U(R, M)) {
                    g.Bc(R);
                    g.cb() || g.Tb();
                    J = g.da()
                }
                v = g.ga;
                var Y = g.wb,
                        da = g.Kb;
                if (!Q(v())) {
                    Y(Fa(v()));
                    U(v(), ";") || da()
                }
                v = g.fa;
                Y = g.sa;
                da = g.xa;
                if (!Q(v())) {
                    Y(v());
                    U(v(), ";") || da()
                }
            }
            if (Q(J)) if (y) if (J = !N || !V) {
                J = p(n, ";", ca(b));
                a.A = r
            } else {
                J = S(n, M + t + ".", ";");
                G = S(n, ra + t, ";")[D](".")
            } else {
                J = [t, a.kc(), b, b, b, 1][H](".");
                ma = a.A = r
            } else if (Q(g.z()) || Q(g.ea())) {
                J = p(R, K, ca(b));
                a.A = r
            } else {
                G = g.z()[D](".");
                t = G[0]
            }
            J = J[D](".");
            if (P[A] && o && o.dh == t && !e.m) {
                J[4] = o.sid ? o.sid : J[4];
                if (ma) {
                    J[3] = o.sid ? o.sid : J[4];
                    if (o.vid) {
                        b = o.vid[D](".");
                        J[1] = b[0];
                        J[2] = b[1]
                    }
                }
            }
            g.ub(J[H]("."));
            G[0] = t;
            G[1] = G[1] ? G[1] : 0;
            G[2] = u != G[2] ? G[2] : e.Sc;
            G[3] = G[3] ? G[3] : J[4];
            g.qa(G[H]("."));
            g.vb(t);
            Q(g.mc()) || g.ra(g.L());
            g.Ib();
            g.wa();
            g.Jb()
        };
        a.tc = function() {
            j = new Sa(e)
        };
        a.getName = c("_getName", 58,
                function() {
                    return a.p
                });
        a.c = c("_initData", 2,
                function() {
                    var b;
                    if (!d) {
                        if (!a.J) a.J = new Ua(e.$);
                        a.a = a.ec();
                        a.j = new Oa(e);
                        a.e = new Wa;
                        q = new Va(e, ca(a.a), a.j, a.e);
                        a.tc()
                    }
                    if (i()) {
                        if (!d) {
                            a.aa = a.ac(a.Qa, P[C].domain);
                            b = new Z(ca(a.a), a.aa, a.r, e)
                        }
                        a.rc(b);
                        q.uc()
                    }
                    if (!d) {
                        i() && b.dc(a.j, a.A);
                        a.Ta = new Wa;
                        $.load(e, a.j);
                        d = r
                    }
                });
        a.Hb = c("_visitCode", 54,
                function() {
                    a.c();
                    var b = S(a.j.h(), M + a.a + ".", ";");
                    b = b[D](".");
                    return b[B] < 4 ? "" : b[1]
                });
        a.kd = c("_cookiePathCopy", 30,
                function(b) {
                    a.c();
                    a.j && a.j.Xc(a.a, b)
                });
        a.F = function() {
            return a.Hb() % 1E4 < e.Q * 100
        };
        a.qe = c("_trackPageview", 1,
                function(b) {
                    if (i()) {
                        a.c();
                        a.Uc();
                        a.Vc(b);
                        a.A = s
                    }
                });
        a.Uc = function() {
            var b = P[A];
            if (Ja() % 1E3 === 42) try {
                if (b.external && b.external.onloadT != u || b.webkitPerformance && b.webkitPerformance.timing) O(12)
            } catch(g) {
            }
        };
        a.re = c("_trackTrans", 18,
                function() {
                    var b = a.a,
                            g = [],
                            n,
                            t,
                            o;
                    a.c();
                    if (a.d && a.F()) {
                        for (n = 0; n < a.d.S[B]; n++) {
                            t = a.d.S[n];
                            W(g, t.va());
                            for (o = 0; o < t.N[B]; o++) W(g, t.N[o].va())
                        }
                        for (n = 0; n < g[B]; n++) j.C(g[n], a.l, b, r)
                    }
                });
        a.le = c("_setTrans", 20,
                function() {
                    var b, g, n, t;
                    b = P[C].getElementById ? P[C].getElementById("utmtrans") : P[C].utmform && P[C].utmform.utmtrans ? P[C].utmform.utmtrans : u;
                    a.c();
                    if (b && b.value) {
                        a.d = new Ta;
                        t = b.value[D]("UTM:");
                        e.u = !e.u || "" == e.u ? "|" : e.u;
                        for (b = 0; b < t[B]; b++) {
                            t[b] = Ha(t[b]);
                            g = t[b][D](e.u);
                            for (n = 0; n < g[B]; n++) g[n] = Ha(g[n]);
                            if ("T" == g[0]) a.Ha(g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8]);
                            else "I" == g[0] && a.Nb(g[1], g[2], g[3], g[4], g[5], g[6])
                        }
                    }
                });
        a.Ha = c("_addTrans", 21,
                function(b, g, n, t, o, v, y, N) {
                    a.d = a.d ? a.d : new Ta;
                    return a.d.Pb(b, g, n, t, o, v, y, N)
                });
        a.Nb = c("_addItem", 19,
                function(b, g, n, t, o, v) {
                    var y;
                    a.d = a.d ? a.d : new Ta;
                    (y = a.d.$a(b)) || (y = a.Ha(b, "", "", "", "", "", "", ""));
                    y.Ob(g, n, t, o, v)
                });
        a.ne = c("_setVar", 22,
                function(b) {
                    if (b && "" != b && h()) {
                        a.c();
                        q.Mc(T(b));
                        a.F() && j.C("&utmt=var", a.l, a.a)
                    }
                });
        a.Xd = c("_setCustomVar", 10,
                function(b, g, n, t) {
                    a.c();
                    return q.Kc(b, g, n, t)
                });
        a.od = c("_deleteCustomVar", 35,
                function(b) {
                    a.c();
                    q.Vb(b)
                });
        a.zd = c("_getVisitorCustomVar", 50,
                function(b) {
                    a.c();
                    return q.oc(b)
                });
        a.ee = c("_setMaxCustomVariables", 71,
                function(b) {
                    e.jb = b
                });
        a.link = c("_link", 101,
                function(b, g) {
                    if (e.w && b) {
                        a.c();
                        P[C][E].href = a.Wa(b, g)
                    }
                });
        a.Dd = c("_linkByPost", 102,
                function(b, g) {
                    if (e.w && b && b.action) {
                        a.c();
                        b.action = a.Wa(b.action, g)
                    }
                });
        a.oe = c("_setXKey", 83,
                function(b, g, n) {
                    a.e.q(b, g, n)
                });
        a.pe = c("_setXValue", 84,
                function(b, g, n) {
                    a.e.ta(b, g, n)
                });
        a.Ad = c("_getXKey", 76,
                function(b, g) {
                    return a.e.hc(b, g)
                });
        a.Bd = c("_getXValue", 77,
                function(b, g) {
                    return a.e.nc(b, g)
                });
        a.hd = c("_clearXKey", 72,
                function(b) {
                    a.e.t(b)
                });
        a.jd = c("_clearXValue", 73,
                function(b) {
                    a.e.V(b)
                });
        a.nd = c("_createXObj", 75,
                function() {
                    a.c();
                    return new Wa
                });
        a.Hc = c("_sendXEvent", 78,
                function(b) {
                    var g = "";
                    a.c();
                    if (a.F()) {
                        g += "&utmt=event&utme=" + T(a.e.Dc(b)) + a.oa();
                        j.C(g, a.l, a.a, s, r)
                    }
                });
        a.md = c("_createEventTracker", 74,
                function(b) {
                    a.c();
                    return new Xa(b, a)
                });
        a.Db = c("_trackEvent", 4,
                function(b, g, n, t) {
                    a.c();
                    var o = a.Ta;
                    if (u != b && u != g && "" != b && "" != g) {
                        o.t(5);
                        o.V(5);
                        (b = o.q(5, 1, b) && o.q(5, 2, g) && (u == n || o.q(5, 3, n)) && (u == t || o.ta(5, 1, t))) && a.Hc(o)
                    } else b = s;
                    return b
                });
        a.Eb = c("_trackPageLoadTime", 100,
                function() {
                    a.c();
                    if (!a.ja) a.ja = new Ya(a, j);
                    return a.ja.Eb()
                });
        a.sd = function() {
            return e
        };
        a.$d = c("_setDomainName", 6,
                function(b) {
                    e.b = b
                });
        a.cd = c("_addOrganic", 14,
                function(b, g, n) {
                    e.P.splice(n ? 0 : e.P[B], 0, new La(b, g))
                });
        a.gd = c("_clearOrganic", 70,
                function() {
                    e.P = []
                });
        a.ad = c("_addIgnoredOrganic", 15,
                function(b) {
                    W(e.la, b)
                });
        a.ed = c("_clearIgnoredOrganic", 97,
                function() {
                    e.la = []
                });
        a.bd = c("_addIgnoredRef", 31,
                function(b) {
                    W(e.na, b)
                });
        a.fd = c("_clearIgnoredRef", 32,
                function() {
                    e.na = []
                });
        a.Hd = c("_setAllowHash", 8,
                function(b) {
                    e.Ja = b ? 1 : 0
                });
        a.Sd = c("_setCampaignTrack", 36,
                function(b) {
                    e.La = b ? 1 : 0
                });
        a.Td = c("_setClientInfo", 66,
                function(b) {
                    e.X = b ? 1 : 0
                });
        a.rd = c("_getClientInfo", 53,
                function() {
                    return e.X
                });
        a.Ud = c("_setCookiePath", 9,
                function(b) {
                    e.f = b
                });
        a.me = c("_setTransactionDelim", 82,
                function(b) {
                    e.u = b
                });
        a.Wd = c("_setCookieTimeout", 25,
                function(b) {
                    a.Jc(b * 1E3)
                });
        a.Jc = c("_setCampaignCookieTimeout", 29,
                function(b) {
                    e.Ka = b
                });
        a.Yd = c("_setDetectFlash", 61,
                function(b) {
                    e.$ = b ? 1 : 0
                });
        a.td = c("_getDetectFlash", 65,
                function() {
                    return e.$
                });
        a.Zd = c("_setDetectTitle", 62,
                function(b) {
                    e.Z = b ? 1 : 0
                });
        a.ud = c("_getDetectTitle", 56,
                function() {
                    return e.Z
                });
        a.be = c("_setLocalGifPath", 46,
                function(b) {
                    e.ia = b
                });
        a.vd = c("_getLocalGifPath", 57,
                function() {
                    return e.ia
                });
        a.de = c("_setLocalServerMode", 92,
                function() {
                    e.D = 0
                });
        a.he = c("_setRemoteServerMode", 63,
                function() {
                    e.D = 1
                });
        a.ce = c("_setLocalRemoteServerMode", 47,
                function() {
                    e.D = 2
                });
        a.wd = c("_getServiceMode", 59,
                function() {
                    return e.D
                });
        a.ie = c("_setSampleRate", 45,
                function(b) {
                    e.Q = b
                });
        a.je = c("_setSessionTimeout", 27,
                function(b) {
                    a.Nc(b * 1E3)
                });
        a.Nc = c("_setSessionCookieTimeout", 26,
                function(b) {
                    e.tb = b
                });
        a.Id = c("_setAllowLinker", 11,
                function(b) {
                    e.w = b ? 1 : 0
                });
        a.Gd = c("_setAllowAnchor", 7,
                function(b) {
                    e.U = b ? 1 : 0
                });
        a.Pd = c("_setCampNameKey", 41,
                function(b) {
                    e.za = b
                });
        a.Ld = c("_setCampContentKey", 38,
                function(b) {
                    e.Aa = b
                });
        a.Md = c("_setCampIdKey", 39,
                function(b) {
                    e.Ba = b
                });
        a.Nd = c("_setCampMediumKey", 40,
                function(b) {
                    e.Ca = b
                });
        a.Od = c("_setCampNOKey", 42,
                function(b) {
                    e.Da = b
                });
        a.Qd = c("_setCampSourceKey", 43,
                function(b) {
                    e.Ea = b
                });
        a.Rd = c("_setCampTermKey", 44,
                function(b) {
                    e.Fa = b
                });
        a.Kd = c("_setCampCIdKey", 37,
                function(b) {
                    e.Ga = b
                });
        a.pd = c("_getAccount", 64,
                function() {
                    return a.l
                });
        a.Fd = c("_setAccount", 3,
                function(b) {
                    a.l = b
                });
        a.fe = c("_setNamespace", 48,
                function(b) {
                    e.m = b ? T(b) : u
                });
        a.yd = c("_getVersion", 60,
                function() {
                    return oa
                });
        a.Jd = c("_setAutoTrackOutbound", 79, Ka);
        a.ke = c("_setTrackOutboundSubdomains", 81, Ka);
        a.ae = c("_setHrefExamineLimit", 80, Ka);
        a.ge = c("_setReferrerOverride", 49,
                function(b) {
                    a.Qa = b
                });
        a.Vd = c("_setCookiePersistence", 24,
                function(b) {
                    a.Oc(b)
                });
        a.Oc = c("_setVisitorCookieTimeout", 28,
                function(b) {
                    e.v = b
                })
    };
    var $a = function() {
        var k = this,
                l = Ba(k);
        k.Ra = s;
        k.Fb = {};
        k.Wc = 0;
        k._gasoDomain = u;
        k._gasoCPath = u;
        k.xd = l("_getTracker", 0,
                function(f, m) {
                    return k.Y(f, u, m)
                });
        k.Y = l("_createTracker", 55,
                function(f, m, h) {
                    m && O(23);
                    h && O(67);
                    if (m == u) m = "~" + X.Wc++;
                    return X.Fb[m] = new Za(m, f, h)
                });
        k.Ya = l("_getTrackerByName", 51,
                function(f) {
                    f = f || "";
                    return X.Fb[f] || X.Y(u, f)
                });
        k.Yc = function() {
            var f = ba[pa];
            return f && f[qa] && f[qa]()
        };
        k.dd = l("_anonymizeIp", 16,
                function() {
                    k.Ra = r
                })
    };
    var bb = function() {
        var k = this,
                l = Ba(k);
        k.ld = l("_createAsyncTracker", 33,
                function(f, m) {
                    return X.Y(f, m || "")
                });
        k.qd = l("_getAsyncTracker", 34,
                function(f) {
                    return X.Ya(f)
                });
        k.push = function() {
            O(5);
            for (var f = arguments,
                         m = 0,
                         h = 0; h < f[B]; h++) try {
                if (typeof f[h] === "function") f[h]();
                else {
                    var p = "",
                            i = f[h][0],
                            a = i.lastIndexOf(".");
                    if (a > 0) {
                        p = i[F](0, a);
                        i = i[F](a + 1)
                    }
                    var c = p == la ? X : p == na ? ab : X.Ya(p);
                    c[i].apply(c, f[h].slice(1))
                }
            } catch(j) {
                m++
            }
            return m
        }
    };
    var X = new $a;
    var cb = ba[la];
    if (cb && typeof cb._getTracker == "function") X = cb;
    else ba[la] = X;
    var ab = new bb;
    a: {
        var db = ba[na],
                eb = s;
        if (db && typeof db[ea] == "function") {
            eb = Da(db);
            if (!eb) break a
        }
        ba[na] = ab;
        eb && ab[ea].apply(ab, db)
    }
    ;
})()