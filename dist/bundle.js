!(function (t) {
  var n = {};
  function e(r) {
    if (n[r]) return n[r].exports;
    var o = (n[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  (e.m = t),
    (e.c = n),
    (e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
    }),
    (e.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (e.t = function (t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (e.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & n && "string" != typeof t)
      )
        for (var o in t)
          e.d(
            r,
            o,
            function (n) {
              return t[n];
            }.bind(null, o)
          );
      return r;
    }),
    (e.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (e.p = ""),
    e((e.s = 12));
})([
  function (t, n) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, n, e) {
    (function (t) {
      function n(t) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      !(function (e, r) {
        var o = (function (t, n, e) {
          "use strict";
          var r, o;
          if (
            ((function () {
              var n,
                e = {
                  lazyClass: "lazyload",
                  loadedClass: "lazyloaded",
                  loadingClass: "lazyloading",
                  preloadClass: "lazypreload",
                  errorClass: "lazyerror",
                  autosizesClass: "lazyautosizes",
                  fastLoadedClass: "ls-is-cached",
                  iframeLoadMode: 0,
                  srcAttr: "data-src",
                  srcsetAttr: "data-srcset",
                  sizesAttr: "data-sizes",
                  minSize: 40,
                  customMedia: {},
                  init: !0,
                  expFactor: 1.5,
                  hFac: 0.8,
                  loadMode: 2,
                  loadHidden: !0,
                  ricTimeout: 0,
                  throttleDelay: 125,
                };
              for (n in ((o = t.lazySizesConfig || t.lazysizesConfig || {}), e))
                n in o || (o[n] = e[n]);
            })(),
            !n || !n.getElementsByClassName)
          )
            return { init: function () {}, cfg: o, noSupport: !0 };
          var i = n.documentElement,
            a = t.HTMLPictureElement,
            s = t.addEventListener.bind(t),
            c = t.setTimeout,
            d = t.requestAnimationFrame || c,
            u = t.requestIdleCallback,
            l = /^picture$/i,
            f = ["load", "error", "lazyincluded", "_lazyloaded"],
            p = {},
            m = Array.prototype.forEach,
            g = function (t, n) {
              return (
                p[n] || (p[n] = new RegExp("(\\s|^)" + n + "(\\s|$)")),
                p[n].test(t.getAttribute("class") || "") && p[n]
              );
            },
            h = function (t, n) {
              g(t, n) ||
                t.setAttribute(
                  "class",
                  (t.getAttribute("class") || "").trim() + " " + n
                );
            },
            v = function (t, n) {
              var e;
              (e = g(t, n)) &&
                t.setAttribute(
                  "class",
                  (t.getAttribute("class") || "").replace(e, " ")
                );
            },
            _ = function t(n, e, r) {
              var o = r ? "addEventListener" : "removeEventListener";
              r && t(n, e),
                f.forEach(function (t) {
                  n[o](t, e);
                });
            },
            b = function (t, e, o, i, a) {
              var s = n.createEvent("Event");
              return (
                o || (o = {}),
                (o.instance = r),
                s.initEvent(e, !i, !a),
                (s.detail = o),
                t.dispatchEvent(s),
                s
              );
            },
            w = function (n, e) {
              var r;
              !a && (r = t.picturefill || o.pf)
                ? (e &&
                    e.src &&
                    !n.getAttribute("srcset") &&
                    n.setAttribute("srcset", e.src),
                  r({ reevaluate: !0, elements: [n] }))
                : e && e.src && (n.src = e.src);
            },
            y = function (t, n) {
              return (getComputedStyle(t, null) || {})[n];
            },
            x = function (t, n, e) {
              for (
                e = e || t.offsetWidth;
                e < o.minSize && n && !t._lazysizesWidth;

              )
                (e = n.offsetWidth), (n = n.parentNode);
              return e;
            },
            k =
              ((pt = []),
              (mt = []),
              (gt = pt),
              (ht = function () {
                var t = gt;
                for (gt = pt.length ? mt : pt, lt = !0, ft = !1; t.length; )
                  t.shift()();
                lt = !1;
              }),
              (vt = function (t, e) {
                lt && !e
                  ? t.apply(this, arguments)
                  : (gt.push(t), ft || ((ft = !0), (n.hidden ? c : d)(ht)));
              }),
              (vt._lsFlush = ht),
              vt),
            E = function (t, n) {
              return n
                ? function () {
                    k(t);
                  }
                : function () {
                    var n = this,
                      e = arguments;
                    k(function () {
                      t.apply(n, e);
                    });
                  };
            },
            A = function (t) {
              var n,
                r,
                o = function () {
                  (n = null), t();
                },
                i = function t() {
                  var n = e.now() - r;
                  n < 99 ? c(t, 99 - n) : (u || o)(o);
                };
              return function () {
                (r = e.now()), n || (n = c(i, 99));
              };
            },
            z =
              ((U = /^img$/i),
              (G = /^iframe$/i),
              ($ =
                "onscroll" in t && !/(gle|ing)bot/.test(navigator.userAgent)),
              (J = 0),
              (V = 0),
              (Y = -1),
              (Q = function (t) {
                V--, (!t || V < 0 || !t.target) && (V = 0);
              }),
              (X = function (t) {
                return (
                  null == q && (q = "hidden" == y(n.body, "visibility")),
                  q ||
                    !(
                      "hidden" == y(t.parentNode, "visibility") &&
                      "hidden" == y(t, "visibility")
                    )
                );
              }),
              (Z = function (t, e) {
                var r,
                  o = t,
                  a = X(t);
                for (
                  K -= e, H += e, F -= e, W += e;
                  a && (o = o.offsetParent) && o != n.body && o != i;

                )
                  (a = (y(o, "opacity") || 1) > 0) &&
                    "visible" != y(o, "overflow") &&
                    ((r = o.getBoundingClientRect()),
                    (a =
                      W > r.left &&
                      F < r.right &&
                      H > r.top - 1 &&
                      K < r.bottom + 1));
                return a;
              }),
              (tt = function () {
                var t,
                  e,
                  a,
                  s,
                  c,
                  d,
                  u,
                  l,
                  f,
                  p,
                  m,
                  g,
                  h = r.elements;
                if ((T = o.loadMode) && V < 8 && (t = h.length)) {
                  for (e = 0, Y++; e < t; e++)
                    if (h[e] && !h[e]._lazyRace)
                      if (!$ || (r.prematureUnveil && r.prematureUnveil(h[e])))
                        st(h[e]);
                      else if (
                        (((l = h[e].getAttribute("data-expand")) &&
                          (d = 1 * l)) ||
                          (d = J),
                        p ||
                          ((p =
                            !o.expand || o.expand < 1
                              ? i.clientHeight > 500 && i.clientWidth > 500
                                ? 500
                                : 370
                              : o.expand),
                          (r._defEx = p),
                          (m = p * o.expFactor),
                          (g = o.hFac),
                          (q = null),
                          J < m && V < 1 && Y > 2 && T > 2 && !n.hidden
                            ? ((J = m), (Y = 0))
                            : (J = T > 1 && Y > 1 && V < 6 ? p : 0)),
                        f !== d &&
                          ((N = innerWidth + d * g),
                          (I = innerHeight + d),
                          (u = -1 * d),
                          (f = d)),
                        (a = h[e].getBoundingClientRect()),
                        (H = a.bottom) >= u &&
                          (K = a.top) <= I &&
                          (W = a.right) >= u * g &&
                          (F = a.left) <= N &&
                          (H || W || F || K) &&
                          (o.loadHidden || X(h[e])) &&
                          ((O && V < 3 && !l && (T < 3 || Y < 4)) ||
                            Z(h[e], d)))
                      ) {
                        if ((st(h[e]), (c = !0), V > 9)) break;
                      } else
                        !c &&
                          O &&
                          !s &&
                          V < 4 &&
                          Y < 4 &&
                          T > 2 &&
                          (M[0] || o.preloadAfterLoad) &&
                          (M[0] ||
                            (!l &&
                              (H ||
                                W ||
                                F ||
                                K ||
                                "auto" != h[e].getAttribute(o.sizesAttr)))) &&
                          (s = M[0] || h[e]);
                  s && !c && st(s);
                }
              }),
              (nt = (function (t) {
                var n,
                  r = 0,
                  i = o.throttleDelay,
                  a = o.ricTimeout,
                  s = function () {
                    (n = !1), (r = e.now()), t();
                  },
                  d =
                    u && a > 49
                      ? function () {
                          u(s, { timeout: a }),
                            a !== o.ricTimeout && (a = o.ricTimeout);
                        }
                      : E(function () {
                          c(s);
                        }, !0);
                return function (t) {
                  var o;
                  (t = !0 === t) && (a = 33),
                    n ||
                      ((n = !0),
                      (o = i - (e.now() - r)) < 0 && (o = 0),
                      t || o < 9 ? d() : c(d, o));
                };
              })(tt)),
              (et = function (t) {
                var n = t.target;
                n._lazyCache
                  ? delete n._lazyCache
                  : (Q(t),
                    h(n, o.loadedClass),
                    v(n, o.loadingClass),
                    _(n, ot),
                    b(n, "lazyloaded"));
              }),
              (rt = E(et)),
              (ot = function (t) {
                rt({ target: t.target });
              }),
              (it = function (t) {
                var n,
                  e = t.getAttribute(o.srcsetAttr);
                (n =
                  o.customMedia[
                    t.getAttribute("data-media") || t.getAttribute("media")
                  ]) && t.setAttribute("media", n),
                  e && t.setAttribute("srcset", e);
              }),
              (at = E(function (t, n, e, r, i) {
                var a, s, d, u, f, p;
                (f = b(t, "lazybeforeunveil", n)).defaultPrevented ||
                  (r &&
                    (e ? h(t, o.autosizesClass) : t.setAttribute("sizes", r)),
                  (s = t.getAttribute(o.srcsetAttr)),
                  (a = t.getAttribute(o.srcAttr)),
                  i && (u = (d = t.parentNode) && l.test(d.nodeName || "")),
                  (p = n.firesLoad || ("src" in t && (s || a || u))),
                  (f = { target: t }),
                  h(t, o.loadingClass),
                  p && (clearTimeout(B), (B = c(Q, 2500)), _(t, ot, !0)),
                  u && m.call(d.getElementsByTagName("source"), it),
                  s
                    ? t.setAttribute("srcset", s)
                    : a &&
                      !u &&
                      (G.test(t.nodeName)
                        ? (function (t, n) {
                            var e =
                              t.getAttribute("data-load-mode") ||
                              o.iframeLoadMode;
                            0 == e
                              ? t.contentWindow.location.replace(n)
                              : 1 == e && (t.src = n);
                          })(t, a)
                        : (t.src = a)),
                  i && (s || u) && w(t, { src: a })),
                  t._lazyRace && delete t._lazyRace,
                  v(t, o.lazyClass),
                  k(function () {
                    var n = t.complete && t.naturalWidth > 1;
                    (p && !n) ||
                      (n && h(t, o.fastLoadedClass),
                      et(f),
                      (t._lazyCache = !0),
                      c(function () {
                        "_lazyCache" in t && delete t._lazyCache;
                      }, 9)),
                      "lazy" == t.loading && V--;
                  }, !0);
              })),
              (st = function (t) {
                if (!t._lazyRace) {
                  var n,
                    e = U.test(t.nodeName),
                    r =
                      e &&
                      (t.getAttribute(o.sizesAttr) || t.getAttribute("sizes")),
                    i = "auto" == r;
                  ((!i && O) ||
                    !e ||
                    (!t.getAttribute("src") && !t.srcset) ||
                    t.complete ||
                    g(t, o.errorClass) ||
                    !g(t, o.lazyClass)) &&
                    ((n = b(t, "lazyunveilread").detail),
                    i && P.updateElem(t, !0, t.offsetWidth),
                    (t._lazyRace = !0),
                    V++,
                    at(t, n, i, r, e));
                }
              }),
              (ct = A(function () {
                (o.loadMode = 3), nt();
              })),
              (dt = function () {
                3 == o.loadMode && (o.loadMode = 2), ct();
              }),
              (ut = function t() {
                O ||
                  (e.now() - D < 999
                    ? c(t, 999)
                    : ((O = !0), (o.loadMode = 3), nt(), s("scroll", dt, !0)));
              }),
              {
                _: function () {
                  (D = e.now()),
                    (r.elements = n.getElementsByClassName(o.lazyClass)),
                    (M = n.getElementsByClassName(
                      o.lazyClass + " " + o.preloadClass
                    )),
                    s("scroll", nt, !0),
                    s("resize", nt, !0),
                    s("pageshow", function (t) {
                      if (t.persisted) {
                        var e = n.querySelectorAll("." + o.loadingClass);
                        e.length &&
                          e.forEach &&
                          d(function () {
                            e.forEach(function (t) {
                              t.complete && st(t);
                            });
                          });
                      }
                    }),
                    t.MutationObserver
                      ? new MutationObserver(nt).observe(i, {
                          childList: !0,
                          subtree: !0,
                          attributes: !0,
                        })
                      : (i.addEventListener("DOMNodeInserted", nt, !0),
                        i.addEventListener("DOMAttrModified", nt, !0),
                        setInterval(nt, 999)),
                    s("hashchange", nt, !0),
                    [
                      "focus",
                      "mouseover",
                      "click",
                      "load",
                      "transitionend",
                      "animationend",
                    ].forEach(function (t) {
                      n.addEventListener(t, nt, !0);
                    }),
                    /d$|^c/.test(n.readyState)
                      ? ut()
                      : (s("load", ut),
                        n.addEventListener("DOMContentLoaded", nt),
                        c(ut, 2e4)),
                    r.elements.length ? (tt(), k._lsFlush()) : nt();
                },
                checkElems: nt,
                unveil: st,
                _aLSL: dt,
              }),
            P =
              ((R = E(function (t, n, e, r) {
                var o, i, a;
                if (
                  ((t._lazysizesWidth = r),
                  (r += "px"),
                  t.setAttribute("sizes", r),
                  l.test(n.nodeName || ""))
                )
                  for (
                    i = 0, a = (o = n.getElementsByTagName("source")).length;
                    i < a;
                    i++
                  )
                    o[i].setAttribute("sizes", r);
                e.detail.dataAttr || w(t, e.detail);
              })),
              (C = function (t, n, e) {
                var r,
                  o = t.parentNode;
                o &&
                  ((e = x(t, o, e)),
                  (r = b(t, "lazybeforesizes", { width: e, dataAttr: !!n }))
                    .defaultPrevented ||
                    ((e = r.detail.width) &&
                      e !== t._lazysizesWidth &&
                      R(t, o, r, e)));
              }),
              (j = A(function () {
                var t,
                  n = S.length;
                if (n) for (t = 0; t < n; t++) C(S[t]);
              })),
              {
                _: function () {
                  (S = n.getElementsByClassName(o.autosizesClass)),
                    s("resize", j);
                },
                checkElems: j,
                updateElem: C,
              }),
            L = function t() {
              !t.i && n.getElementsByClassName && ((t.i = !0), P._(), z._());
            };
          var S, R, C, j;
          var M,
            O,
            B,
            T,
            D,
            N,
            I,
            K,
            F,
            W,
            H,
            q,
            U,
            G,
            $,
            J,
            V,
            Y,
            Q,
            X,
            Z,
            tt,
            nt,
            et,
            rt,
            ot,
            it,
            at,
            st,
            ct,
            dt,
            ut;
          var lt, ft, pt, mt, gt, ht, vt;
          return (
            c(function () {
              o.init && L();
            }),
            (r = {
              cfg: o,
              autoSizer: P,
              loader: z,
              init: L,
              uP: w,
              aC: h,
              rC: v,
              hC: g,
              fire: b,
              gW: x,
              rAF: k,
            })
          );
        })(e, e.document, Date);
        (e.lazySizes = o), "object" == n(t) && t.exports && (t.exports = o);
      })("undefined" != typeof window ? window : {});
    }.call(this, e(0)(t)));
  },
  function (t) {
    t.exports = JSON.parse(
      '{"resto":[{"id":0,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food1.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink1.png","foodPrice":"38K","drinkPrice":"20K"},{"id":1,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food2.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink2.png","foodPrice":"40K","drinkPrice":"20K"},{"id":2,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food3.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink3.png","foodPrice":"45K","drinkPrice":"25K"},{"id":3,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food4.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink4.png","foodPrice":"50K","drinkPrice":"15K"},{"id":4,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food5.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink5.png","foodPrice":"30K","drinkPrice":"22K"},{"id":5,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food6.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink6.png","foodPrice":"40K","drinkPrice":"19K"},{"id":6,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food7.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink7.png","foodPrice":"30K","drinkPrice":"25K"},{"id":7,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food8.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink8.png","foodPrice":"32K","drinkPrice":"15K"},{"id":8,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food9.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink9.png","foodPrice":"38K","drinkPrice":"20K"},{"id":9,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food10.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink10.png","foodPrice":"38K","drinkPrice":"15K"},{"id":10,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food11.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink11.png","foodPrice":"38K","drinkPrice":"23K"},{"id":11,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food12.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink12.png","foodPrice":"38K","drinkPrice":"15K"},{"id":12,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food13.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink13.png","foodPrice":"38K","drinkPrice":"20K"},{"id":13,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food14.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink14.png","foodPrice":"40K","drinkPrice":"25K"},{"id":14,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food15.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink15.png","foodPrice":"35K","drinkPrice":"18K"},{"id":15,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food16.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink16.png","foodPrice":"35K","drinkPrice":"22K"},{"id":16,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food17.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink17.png","foodPrice":"38K","drinkPrice":"20K"},{"id":17,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food18.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink18.png","foodPrice":"40K","drinkPrice":"15K"},{"id":18,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food19.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink19.png","foodPrice":"45K","drinkPrice":"20K"},{"id":19,"food":"https://raw.githubusercontent.com/medival/dummy-data/master/images/foods/food20.png","drink":"https://raw.githubusercontent.com/medival/dummy-data/master/images/drinks/drink20.png","foodPrice":"50K","drinkPrice":"22K"}]}'
    );
  },
  function (t, n, e) {
    "use strict";
    var r,
      o = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      i = (function () {
        var t = {};
        return function (n) {
          if (void 0 === t[n]) {
            var e = document.querySelector(n);
            if (
              window.HTMLIFrameElement &&
              e instanceof window.HTMLIFrameElement
            )
              try {
                e = e.contentDocument.head;
              } catch (t) {
                e = null;
              }
            t[n] = e;
          }
          return t[n];
        };
      })(),
      a = [];
    function s(t) {
      for (var n = -1, e = 0; e < a.length; e++)
        if (a[e].identifier === t) {
          n = e;
          break;
        }
      return n;
    }
    function c(t, n) {
      for (var e = {}, r = [], o = 0; o < t.length; o++) {
        var i = t[o],
          c = n.base ? i[0] + n.base : i[0],
          d = e[c] || 0,
          u = "".concat(c, " ").concat(d);
        e[c] = d + 1;
        var l = s(u),
          f = { css: i[1], media: i[2], sourceMap: i[3] };
        -1 !== l
          ? (a[l].references++, a[l].updater(f))
          : a.push({ identifier: u, updater: h(f, n), references: 1 }),
          r.push(u);
      }
      return r;
    }
    function d(t) {
      var n = document.createElement("style"),
        r = t.attributes || {};
      if (void 0 === r.nonce) {
        var o = e.nc;
        o && (r.nonce = o);
      }
      if (
        (Object.keys(r).forEach(function (t) {
          n.setAttribute(t, r[t]);
        }),
        "function" == typeof t.insert)
      )
        t.insert(n);
      else {
        var a = i(t.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(n);
      }
      return n;
    }
    var u,
      l =
        ((u = []),
        function (t, n) {
          return (u[t] = n), u.filter(Boolean).join("\n");
        });
    function f(t, n, e, r) {
      var o = e
        ? ""
        : r.media
        ? "@media ".concat(r.media, " {").concat(r.css, "}")
        : r.css;
      if (t.styleSheet) t.styleSheet.cssText = l(n, o);
      else {
        var i = document.createTextNode(o),
          a = t.childNodes;
        a[n] && t.removeChild(a[n]),
          a.length ? t.insertBefore(i, a[n]) : t.appendChild(i);
      }
    }
    function p(t, n, e) {
      var r = e.css,
        o = e.media,
        i = e.sourceMap;
      if (
        (o ? t.setAttribute("media", o) : t.removeAttribute("media"),
        i &&
          "undefined" != typeof btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        t.styleSheet)
      )
        t.styleSheet.cssText = r;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(r));
      }
    }
    var m = null,
      g = 0;
    function h(t, n) {
      var e, r, o;
      if (n.singleton) {
        var i = g++;
        (e = m || (m = d(n))),
          (r = f.bind(null, e, i, !1)),
          (o = f.bind(null, e, i, !0));
      } else
        (e = d(n)),
          (r = p.bind(null, e, n)),
          (o = function () {
            !(function (t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t);
            })(e);
          });
      return (
        r(t),
        function (n) {
          if (n) {
            if (
              n.css === t.css &&
              n.media === t.media &&
              n.sourceMap === t.sourceMap
            )
              return;
            r((t = n));
          } else o();
        }
      );
    }
    t.exports = function (t, n) {
      (n = n || {}).singleton ||
        "boolean" == typeof n.singleton ||
        (n.singleton = o());
      var e = c((t = t || []), n);
      return function (t) {
        if (
          ((t = t || []),
          "[object Array]" === Object.prototype.toString.call(t))
        ) {
          for (var r = 0; r < e.length; r++) {
            var o = s(e[r]);
            a[o].references--;
          }
          for (var i = c(t, n), d = 0; d < e.length; d++) {
            var u = s(e[d]);
            0 === a[u].references && (a[u].updater(), a.splice(u, 1));
          }
          e = i;
        }
      };
    };
  },
  function (t, n, e) {
    "use strict";
    t.exports = function (t) {
      var n = [];
      return (
        (n.toString = function () {
          return this.map(function (n) {
            var e = (function (t, n) {
              var e = t[1] || "",
                r = t[3];
              if (!r) return e;
              if (n && "function" == typeof btoa) {
                var o =
                    ((a = r),
                    (s = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (c =
                      "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        s
                      )),
                    "/*# ".concat(c, " */")),
                  i = r.sources.map(function (t) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot || "")
                      .concat(t, " */");
                  });
                return [e].concat(i).concat([o]).join("\n");
              }
              var a, s, c;
              return [e].join("\n");
            })(n, t);
            return n[2] ? "@media ".concat(n[2], " {").concat(e, "}") : e;
          }).join("");
        }),
        (n.i = function (t, e, r) {
          "string" == typeof t && (t = [[null, t, ""]]);
          var o = {};
          if (r)
            for (var i = 0; i < this.length; i++) {
              var a = this[i][0];
              null != a && (o[a] = !0);
            }
          for (var s = 0; s < t.length; s++) {
            var c = [].concat(t[s]);
            (r && o[c[0]]) ||
              (e &&
                (c[2]
                  ? (c[2] = "".concat(e, " and ").concat(c[2]))
                  : (c[2] = e)),
              n.push(c));
          }
        }),
        n
      );
    };
  },
  function (t, n) {
    var e = "/sw.js";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.default = {
        register: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            !!navigator.serviceWorker && navigator.serviceWorker.register(e, t)
          );
        },
      }),
      (t.exports = n.default);
  },
  function (t, n, e) {
    (function (t) {
      function n(t) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var e = (function (t) {
        "use strict";
        var e = Object.prototype,
          r = e.hasOwnProperty,
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          s = o.toStringTag || "@@toStringTag";
        function c(t, n, e) {
          return (
            Object.defineProperty(t, n, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[n]
          );
        }
        try {
          c({}, "");
        } catch (t) {
          c = function (t, n, e) {
            return (t[n] = e);
          };
        }
        function d(t, n, e, r) {
          var o = n && n.prototype instanceof f ? n : f,
            i = Object.create(o.prototype),
            a = new E(r || []);
          return (
            (i._invoke = (function (t, n, e) {
              var r = "suspendedStart";
              return function (o, i) {
                if ("executing" === r)
                  throw new Error("Generator is already running");
                if ("completed" === r) {
                  if ("throw" === o) throw i;
                  return z();
                }
                for (e.method = o, e.arg = i; ; ) {
                  var a = e.delegate;
                  if (a) {
                    var s = y(a, e);
                    if (s) {
                      if (s === l) continue;
                      return s;
                    }
                  }
                  if ("next" === e.method) e.sent = e._sent = e.arg;
                  else if ("throw" === e.method) {
                    if ("suspendedStart" === r)
                      throw ((r = "completed"), e.arg);
                    e.dispatchException(e.arg);
                  } else "return" === e.method && e.abrupt("return", e.arg);
                  r = "executing";
                  var c = u(t, n, e);
                  if ("normal" === c.type) {
                    if (
                      ((r = e.done ? "completed" : "suspendedYield"),
                      c.arg === l)
                    )
                      continue;
                    return { value: c.arg, done: e.done };
                  }
                  "throw" === c.type &&
                    ((r = "completed"), (e.method = "throw"), (e.arg = c.arg));
                }
              };
            })(t, e, a)),
            i
          );
        }
        function u(t, n, e) {
          try {
            return { type: "normal", arg: t.call(n, e) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = d;
        var l = {};
        function f() {}
        function p() {}
        function m() {}
        var g = {};
        g[i] = function () {
          return this;
        };
        var h = Object.getPrototypeOf,
          v = h && h(h(A([])));
        v && v !== e && r.call(v, i) && (g = v);
        var _ = (m.prototype = f.prototype = Object.create(g));
        function b(t) {
          ["next", "throw", "return"].forEach(function (n) {
            c(t, n, function (t) {
              return this._invoke(n, t);
            });
          });
        }
        function w(t, e) {
          var o;
          this._invoke = function (i, a) {
            function s() {
              return new e(function (o, s) {
                !(function o(i, a, s, c) {
                  var d = u(t[i], t, a);
                  if ("throw" !== d.type) {
                    var l = d.arg,
                      f = l.value;
                    return f && "object" === n(f) && r.call(f, "__await")
                      ? e.resolve(f.__await).then(
                          function (t) {
                            o("next", t, s, c);
                          },
                          function (t) {
                            o("throw", t, s, c);
                          }
                        )
                      : e.resolve(f).then(
                          function (t) {
                            (l.value = t), s(l);
                          },
                          function (t) {
                            return o("throw", t, s, c);
                          }
                        );
                  }
                  c(d.arg);
                })(i, a, o, s);
              });
            }
            return (o = o ? o.then(s, s) : s());
          };
        }
        function y(t, n) {
          var e = t.iterator[n.method];
          if (void 0 === e) {
            if (((n.delegate = null), "throw" === n.method)) {
              if (
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = void 0),
                y(t, n),
                "throw" === n.method)
              )
                return l;
              (n.method = "throw"),
                (n.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return l;
          }
          var r = u(e, t.iterator, n.arg);
          if ("throw" === r.type)
            return (
              (n.method = "throw"), (n.arg = r.arg), (n.delegate = null), l
            );
          var o = r.arg;
          return o
            ? o.done
              ? ((n[t.resultName] = o.value),
                (n.next = t.nextLoc),
                "return" !== n.method &&
                  ((n.method = "next"), (n.arg = void 0)),
                (n.delegate = null),
                l)
              : o
            : ((n.method = "throw"),
              (n.arg = new TypeError("iterator result is not an object")),
              (n.delegate = null),
              l);
        }
        function x(t) {
          var n = { tryLoc: t[0] };
          1 in t && (n.catchLoc = t[1]),
            2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
            this.tryEntries.push(n);
        }
        function k(t) {
          var n = t.completion || {};
          (n.type = "normal"), delete n.arg, (t.completion = n);
        }
        function E(t) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            t.forEach(x, this),
            this.reset(!0);
        }
        function A(t) {
          if (t) {
            var n = t[i];
            if (n) return n.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var e = -1,
                o = function n() {
                  for (; ++e < t.length; )
                    if (r.call(t, e)) return (n.value = t[e]), (n.done = !1), n;
                  return (n.value = void 0), (n.done = !0), n;
                };
              return (o.next = o);
            }
          }
          return { next: z };
        }
        function z() {
          return { value: void 0, done: !0 };
        }
        return (
          (p.prototype = _.constructor = m),
          (m.constructor = p),
          (p.displayName = c(m, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var n = "function" == typeof t && t.constructor;
            return (
              !!n &&
              (n === p || "GeneratorFunction" === (n.displayName || n.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, m)
                : ((t.__proto__ = m), c(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(_)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          b(w.prototype),
          (w.prototype[a] = function () {
            return this;
          }),
          (t.AsyncIterator = w),
          (t.async = function (n, e, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(d(n, e, r, o), i);
            return t.isGeneratorFunction(e)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          b(_),
          c(_, s, "Generator"),
          (_[i] = function () {
            return this;
          }),
          (_.toString = function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var n = [];
            for (var e in t) n.push(e);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = A),
          (E.prototype = {
            constructor: E,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(k),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = void 0);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function e(e, r) {
                return (
                  (a.type = "throw"),
                  (a.arg = t),
                  (n.next = e),
                  r && ((n.method = "next"), (n.arg = void 0)),
                  !!r
                );
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return e("end");
                if (i.tryLoc <= this.prev) {
                  var s = r.call(i, "catchLoc"),
                    c = r.call(i, "finallyLoc");
                  if (s && c) {
                    if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return e(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                  } else {
                    if (!c)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return e(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, n) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var o = this.tryEntries[e];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ("break" === t || "continue" === t) &&
                i.tryLoc <= n &&
                n <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = n),
                i
                  ? ((this.method = "next"), (this.next = i.finallyLoc), l)
                  : this.complete(a)
              );
            },
            complete: function (t, n) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === t.type && n && (this.next = n),
                l
              );
            },
            finish: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.finallyLoc === t)
                  return this.complete(e.completion, e.afterLoc), k(e), l;
              }
            },
            catch: function (t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.tryLoc === t) {
                  var r = e.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    k(e);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, n, e) {
              return (
                (this.delegate = { iterator: A(t), resultName: n, nextLoc: e }),
                "next" === this.method && (this.arg = void 0),
                l
              );
            },
          }),
          t
        );
      })("object" === n(t) ? t.exports : {});
      try {
        regeneratorRuntime = e;
      } catch (t) {
        Function("r", "regeneratorRuntime = r")(e);
      }
    }.call(this, e(0)(t)));
  },
  function (t, n, e) {
    (function (t) {
      var r, o, i;
      function a(t) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      !(function (s, c) {
        if (s) {
          (c = c.bind(null, s, s.document)),
            "object" == a(t) && t.exports
              ? c(e(1))
              : ((o = [e(1)]),
                void 0 ===
                  (i = "function" == typeof (r = c) ? r.apply(n, o) : r) ||
                  (t.exports = i));
        }
      })("undefined" != typeof window ? window : 0, function (t, n, e) {
        "use strict";
        if (t.addEventListener) {
          var r = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
            o = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
            i = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
            a = /^picture$/i,
            s = e.cfg,
            c = {
              getParent: function (n, e) {
                var r = n,
                  o = n.parentNode;
                return (
                  (e && "prev" != e) ||
                    !o ||
                    !a.test(o.nodeName || "") ||
                    (o = o.parentNode),
                  "self" != e &&
                    (r =
                      "prev" == e
                        ? n.previousElementSibling
                        : (e &&
                            (o.closest || t.jQuery) &&
                            (o.closest
                              ? o.closest(e)
                              : jQuery(o).closest(e)[0])) ||
                          o),
                  r
                );
              },
              getFit: function (t) {
                var n,
                  e,
                  r = getComputedStyle(t, null) || {},
                  a = r.content || r.fontFamily,
                  s = {
                    fit:
                      t._lazysizesParentFit ||
                      t.getAttribute("data-parent-fit"),
                  };
                return (
                  !s.fit && a && (n = a.match(o)) && (s.fit = n[1]),
                  s.fit
                    ? (!(e =
                        t._lazysizesParentContainer ||
                        t.getAttribute("data-parent-container")) &&
                        a &&
                        (n = a.match(i)) &&
                        (e = n[1]),
                      (s.parent = c.getParent(t, e)))
                    : (s.fit = r.objectFit),
                  s
                );
              },
              getImageRatio: function (n) {
                var e,
                  o,
                  i,
                  c,
                  d,
                  u,
                  l,
                  f = n.parentNode,
                  p =
                    f && a.test(f.nodeName || "")
                      ? f.querySelectorAll("source, img")
                      : [n];
                for (e = 0; e < p.length; e++)
                  if (
                    ((o =
                      (n = p[e]).getAttribute(s.srcsetAttr) ||
                      n.getAttribute("srcset") ||
                      n.getAttribute("data-pfsrcset") ||
                      n.getAttribute("data-risrcset") ||
                      ""),
                    (i = n._lsMedia || n.getAttribute("media")),
                    (i = s.customMedia[n.getAttribute("data-media") || i] || i),
                    o &&
                      (!i || ((t.matchMedia && matchMedia(i)) || {}).matches))
                  ) {
                    (c = parseFloat(n.getAttribute("data-aspectratio"))) ||
                      ((d = o.match(r))
                        ? "w" == d[2]
                          ? ((u = d[1]), (l = d[3]))
                          : ((u = d[3]), (l = d[1]))
                        : ((u = n.getAttribute("width")),
                          (l = n.getAttribute("height"))),
                      (c = u / l));
                    break;
                  }
                return c;
              },
              calculateSize: function (t, n) {
                var e,
                  r,
                  o,
                  i = this.getFit(t),
                  a = i.fit,
                  s = i.parent;
                return "width" == a ||
                  (("contain" == a || "cover" == a) &&
                    (r = this.getImageRatio(t)))
                  ? (s ? (n = s.clientWidth) : (s = t),
                    (o = n),
                    "width" == a
                      ? (o = n)
                      : (e = n / s.clientHeight) &&
                        (("cover" == a && e < r) ||
                          ("contain" == a && e > r)) &&
                        (o = n * (r / e)),
                    o)
                  : n;
              },
            };
          (e.parentFit = c),
            n.addEventListener("lazybeforesizes", function (t) {
              if (!t.defaultPrevented && t.detail.instance == e) {
                var n = t.target;
                t.detail.width = c.calculateSize(n, t.detail.width);
              }
            });
        }
      });
    }.call(this, e(0)(t)));
  },
  function (t, n, e) {
    var r = e(3),
      o = e(9);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[t.i, o, ""]]);
    var i = { insert: "head", singleton: !1 };
    r(o, i);
    t.exports = o.locals || {};
  },
  function (t, n, e) {
    (n = e(4)(!1)).push([
      t.i,
      ":root {\n  --primary-color: #dc262a;\n  --secondary-color: #e91114;\n  --white-color: #fff;\n  --dark-color: #1d1d1d;\n  --text-color: #0A121C;\n  --twitter-color: #00aced;\n  --linkedin-color: #0073a4;\n  --github-color: #5a32a3;\n\t--background-color: hsla(15, 1%, 13%, 0.55);\n}\n\n* {\n\tpadding: 0;\n\tmargin: 0;\n}\n\nbody {\n\tfont-family: 'Poppins', sans-serif;\n\tbackground-color: white;\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n\n/*\n  AppBar\n*/\n\n.app-bar {\n\tpadding: 8px 16px;\n\tbackground-color: white;\n\tdisplay: grid;\n\tgrid-template-columns: auto 1fr auto;\n\tgap: 10px;\n\tposition: sticky;\n\ttop: 0;\n\tz-index: 99;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\n.app-bar .app-bar__menu {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.app-bar .app-bar__menu button {\n\tbackground-color: transparent;\n\tborder: none;\n\tfont-size: 28px;\n\tpadding: 10px;\n\tcursor: pointer;\n}\n\n.app-bar .app-bar__brand {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.app-bar .app-bar__brand h1 {\n\tcolor: #db0000;\n\ttext-transform: uppercase;\n\tfont-size: 22px;\n\tuser-select: none;\n}\n\n.app-bar .app-bar__navigation {\n\tposition: absolute;\n\ttop: 60px;\n\tleft: -180px;\n\twidth: 150px;\n\ttransition: all 0.3s;\n\tpadding: 15px;\n\tbackground-color: white;\n\toverflow: hidden;\n}\n\n.app-bar .app-bar__navigation.open {\n\tleft: -10px;\n}\n\n.app-bar .app-bar__navigation ul li a {\n\tdisplay: inline-block;\n\ttext-decoration: none;\n\tcolor: var(--dark-color);\n\tpadding: 15px 5px;\n\tmargin-bottom: 5px;\n\twidth: 100%;\n\tbackground-color: #f2f2f2;\n\tborder-radius: 5px;\n  font-size: large;\n}\n\n.app-bar__navigation ul li a:hover {\n\tcolor: var(--primary-color);\n}\n\n.app-bar__navigation ul li {\n  margin: 0 5px;\n}\n\n#app-bar__link-active {\n\tborder-bottom: 2px solid var(--primary-color);\n  color: var(--dark-color);\n  font-weight: bolder;\n}\n\n.app-bar__logo {\n  width: 9em;\n}\n\n/*\n  Main Content\n*/\n\nmain {\n  top: -1em;\n\tflex: 1;\n}\n\n.content {\n\tmargin: 0 auto;\n\tmin-height: 100%;\n}\n\n.content .content__heading {\n\tfont-weight: normal;\n}\n\n.skip-to-content {\n  padding: 10px 16px;\n  border-radius: 4px;\n  color: var(--white-color);\n  background-color: var(--primary-color);\n  font-weight: 700;\n  transition: 350ms;\n  text-decoration: none;\n  width: 10em;\n  top: 0;\n  z-index: 5;\n  position: absolute;\n}\n\n.skip-to-content:focus {\n  position: absolute;\n  transform: translateY(0);\n  top: 6em;\n  z-index: 5;\n}\n\n/* \n\tHero\n */\n\n.hero {\n  margin-top: 3.8rem;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n\tleft: 0;\n  text-align: center;\n}\n\n.hero__image {\n  position: absolute;\n\twidth: 100vw;\n\theight: 70vh;\n\tz-index: 0;\n\tobject-fit: cover;\n}\n\n.hero__image_home {\n  position: absolute;\n\twidth: 100vw;\n\theight: 70vh;\n\tz-index: 0;\n\tobject-fit: contain;\n\tbackground-size: cover;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n}\n\n.hero__title {\n  color: var(--white-color);\n  margin: 0 auto;\n\tfont-size: 50px;\n  text-shadow: 2px 2px var(--background-color);\n  letter-spacing: .1em;\n\tz-index: 1;\n}\n\n.hero__subtitle {\n  color: var(--white-color);\n  margin: 0 auto;\n\tfont-size: xx-large;\n  text-shadow: 2px 2px var(--background-color);\n  letter-spacing: .1em;\n\twidth: 80vw;\n\tz-index: 1;\n  margin-top: 1em;\n}\n\n.hero__description {\n  color: var(--white-color);\n  margin: 0 auto;\n\tfont-size: large;\n\twidth: 60vw;\n\tz-index: 1;\n  margin-top: .5em;\n  line-height: 1.6em;\n}\n\n.hero__cta {\n  text-align: center;\n  text-decoration: none;\n  background-color: var(--secondary-color);\n  padding: .8em 2em;\n  margin: 0 auto;\n  margin-top: 2em;\n  border-radius: .3em;\n  font-size: large;\n  color: var(--white-color);\n  font-weight: bolder;\n  letter-spacing: .2em;\n\tz-index: 1;\n}\n\n.hero__cta:hover {\n  color: var(--white-color);\n  background-color: var(--primary-color);\n}\n\n/* \n\tResto\n*/\n\n.resto {\n  width: 100vw;\n  margin: 0 auto;\n  padding: 2em 0;\n  background-color: var(--white-color);\n}\n\n.resto__overview__container {\n  position: relative;\n  /* width: 60vw; */\n  margin: 0 auto;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: .5em;\n  display: grid;\n  top: -5em;\n   grid-template-columns: 300px auto;\n  backdrop-filter: blur(6px);\n}\n\n.resto__overview__container .container__image {\n  margin: 1em;\n}\n\nimg.container__image_overview {\n  width: 15em;\n  height: 100%;\n  object-fit: cover;\n}\n\n.container__info {\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n  margin: 2em 2em 2em 0;\n  color: var(--white-color);\n}\n\n.container__info_resto_categories span {\n  background-color: var(--twitter-color);\n  padding: 5px 20px;\n  border-radius: 15px;\n  margin: 0 .15em;\n}\n\n.container__info_rating i {\n  color: gold;\n}\n\np.container__info_description {\n  line-height: 25px;\n}\n\n.resto__label {\n  text-align: center;\n  margin-bottom: 1em;\n  font-size: xx-large;\n}\n\n.resto__subtitle {\n  text-align: center;\n  margin-bottom: 1.5em;\n}\n\n.resto__container {\n  width: 90vw;\n  margin: 0 auto;\n  padding-top: 8em;\n}\n\n.resto__container:nth-child(2) {\n  margin-bottom: 4em;\n}\n\n.resto__info_container {\n  position: relative;\n  top: -55%;\n  left: 85%;\n  z-index: 1;\n  color: var(--white-color);\n  font-size: large;\n\tbackground-color: var(--primary-color);\n\twidth: 1.2em;\n  height: 1.2em;\n  border-radius: 1em;\n  text-align: center;\n  padding: .4em;\n}\n\n.resto__info_container h4 {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.resto__selector {\n\ttext-decoration: none;\n}\n\n.resto__title {\n  margin: -1em 0 0.5em 0;\n  color: var(--primary-color);\n\ttext-decoration: none\n}\n\n.resto__about {\n  margin: 0.5em 0;\n}\n\n.resto__about,\n.resto__description {\n  color: var(--text-color);\n}\n\n.resto__container__drinks {\n  padding: 2em 0;\n}\n\n/* Food */\n\n.resto__foodies {\n  display: grid; \n  grid-template-columns: repeat(auto-fit, minmax(200px, 250px));\n  justify-content: center;\n  grid-gap: 3em;\n  border: 2px solid transparent;\n  border-radius: 1em;\n  margin: .5em;\n  box-shadow: 5px 5px 11px  rgba(249, 249, 249, 1),\n    -5px -5px 11px  rgba(249, 249, 249, 1);\n}\n\n.resto__foodies:hover {\n  border: 2px solid  #5B77F0;\n}\n\n.resto__food {\n  min-height: 250px;\n  border-radius:10px;\n  margin: 0 1em;\n  text-align: center;\n}\n\n.resto__categroy_icon {\n  color: whitesmoke;\n  background-color: #5B77F0;\n  width: 1.5em;\n  height: 1.5em;\n  margin: 0 auto;\n  justify-content: center;\n  border-radius: 1em;\n  top: -1em;\n  position: relative;\n  margin-bottom: 1em;\n}\n\n.food__icon_check {\n  margin-top: .2em;\n}\n\n.resto__food_image {\n  margin: 0 auto;\n  /* border-radius: 2.5em; */\n}\n\n.resto__food_image img {\n  width: 10em;\n  height: 10em;\n}\n\n.resto__food_info {\n  display: grid;\n  grid-template-rows:  1fr;\n  gap: .5em;\n}\n\n.resto__food_name, .resto__food_price {\n  font-size: large;\n  color: #5E607C;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  margin: 0 auto;\n  font-weight: bold;\n}\n\n/* Drinks  */\n\n.resto__drinkies {\n  display: grid; \n  grid-template-columns: repeat(auto-fit, minmax(200px, 250px));\n  justify-content: center;\n  grid-gap: 3em;\n  border: 2px solid transparent;\n  border-radius: 1em;\n  margin: .5em;\n  box-shadow: 5px 5px 11px  rgba(249, 249, 249, 1),\n    -5px -5px 11px  rgba(249, 249, 249, 1);\n}\n\n.resto__drinkies:hover {\n  border: 2px solid  #5B77F0;\n}\n\n.resto__drink {\n  min-height: 250px;\n  border-radius:10px;\n  margin: 0 1em;\n  text-align: center;\n}\n\n.resto__categroy_icon {\n  color: whitesmoke;\n  background-color: #5B77F0;\n  width: 1.5em;\n  height: 1.5em;\n  margin: 0 auto;\n  justify-content: center;\n  border-radius: 1em;\n  top: -1em;\n  position: relative;\n  margin-bottom: 1em;\n}\n\n.drink__icon_check {\n  margin-top: .2em;\n}\n\n.resto__drink_image {\n  margin: 0 auto;\n}\n\n.resto__drink_image img {\n  width: 10em;\n  height: 10em;\n}\n\n.resto__drink_info {\n  display: grid;\n  grid-template-rows:  1fr;\n  gap: .5em;\n}\n\n.resto__drink_name, .resto__drink_price {\n  font-size: large;\n  color: #5E607C;\n  font-weight: bold;\n  position: relative;\n  top: -20px;\n  margin: 0 auto;\n  font-weight: bold;\n}\n\n\n/* \n\tFigure\n */\n\nfigure {\n  margin: 2em .5em;\n  padding: 5px;\n  height: 350px;\n}\n\nfigure img {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: .25em;\n}\n\nfigure img:hover {\n  transform: scale(1.025);\n  box-shadow: 5px 5px 11px #d9d9d9,\n    -5px -5px 11px #e7e7e7;\n}\n/* figure:hover {\n  box-shadow: 5px 5px 11px #d9d9d9,\n    -5px -5px 11px #e7e7e7;\n} */\n\nfigure p {\n  line-height: 1.5em;\n}\n\n/*\n  Footer\n*/\n\nfooter {\n  margin-top: 10em;\n  padding: 2em 0;\n  border-top: 1px solid #d9d9d9;\n  color: var(--text-color);\n\tbackground-color: var(--white-color);\n}\n\n.footer__content {\n  text-align: center;\n}\n\n.footer__copyright {\n  margin: 1em 0 2em 0;\n}\n\n.footer__social-media-icons a {\n  padding: 1em;\n  width: 4em;\n  border-radius:\t 0.3em;\n  text-decoration: none;\n}\n\n.footer__social-media-icons a i {\n  font-size: x-large;\n}\n\n.social-icon-twitter {\n  color: var(--twitter-color);\n}\n\n.social-icon-linkedin {\n  color: var(--linkedin-color);\n  margin: 0 1.5em;\n}\n\n.social-icon-github {\n  color: var(--github-color);\n}\n\n.social-icon-twitter:hover {\n  background-color: var(--twitter-color);\n  color: white;\n}\n\n.social-icon-linkedin:hover {\n  background-color: var(--linkedin-color);\n  color: white;\n}\n\n.social-icon-github:hover {\n  background-color: var(--github-color);\n  color: white;\n}\n\n #review {\n  overflow-x:scroll;\n  overflow-y:hidden;\n  padding: 2em 0 0 0;\n  width: 69vw;\n}\n\n#comentar {\n  width: auto;\n  white-space:nowrap; \n\n}\n.reviewer {\n  display: inline-block;\n  text-align: center;\n  border: 2px solid #f7f9fc;\n  width: 23em;\n  margin: 1em .5em;\n  border-radius: .3em;\n  padding-bottom: 1em;\n}\n\n.reviewer img {\n  width: 3em;\n  height: 3.2em;\n  border-radius: 2.5em;\n  margin-top: -2.5em;\n  margin-bottom: .5em;\n}\n\n.reviewer__name {\n  font-weight: bolder;\n  font-size: large;\n}\n\n.reviewer__date {\n  font-size: normal;\n  padding: 1em 0;\n}\n\n.reviewer__comentar textarea {\n  border-radius: 0.5em;\n  border: none;\n  resize: none;\n  font-weight: normal;\n  font-size: normal;\n  font-family: 'Poppins', sans-serif;\n  text-align: center;\n  background-color: #f7f9fc;\n  color: #94a0B9;\n  padding: .5em;\n  width: 90%;\n}\n\n/* \n  Like \n*/\n\n.like {\n  font-size: 18px;\n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  background-color: #db0000;\n  color: var(--white-color);\n  border: 0;\n  border-radius: 50%;\n  width: 55px;\n  height: 55px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}",
      "",
    ]),
      (t.exports = n);
  },
  function (t, n, e) {
    var r = e(3),
      o = e(11);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[t.i, o, ""]]);
    var i = { insert: "head", singleton: !1 };
    r(o, i);
    t.exports = o.locals || {};
  },
  function (t, n, e) {
    (n = e(4)(!1)).push([
      t.i,
      "@media screen and (max-width: 650px) {\n\t.resto__container {\n    width: 90%;\n    margin: 0 auto;\n  }\n\n\t.hero {\n\t\tmargin-top: 3.8rem;\n\t\theight: 40vh;\n\t}\n\n\t.hero__image_home {\n\t\tbackground-image: url('/assets/images/heros/hero-image_2-small.jpg');\n\t}\n\n\t.resto__label {\n\t\tmargin-top: 2em;\n\t}\n\n\t.hero__title {\n\t\tfont-size: x-large;\n\t}\n\n\t.hero__subtitle {\n\t\tfont-size: large;\n\t}\n\n\t.hero__description {\n\t\tfont-size: small;\n\t\twidth: 90vw;\n\t}\n\n  .resto__list {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n\t.resto__list__menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n\n\tfigure.resto__menu__food {\n\t\tmin-width: 180px;\n\t}\n\n\t.container__image {\n    display: none;\n\t}\n\n\t.container__info {\n\t\twidth: 90vw;\n\t\tmargin: 2em;\n\t}\n}\n\n@media screen and (min-width: 651px) {\n\t.resto__container {\n    width: 90%;\n    margin: 0 auto;\n  }\n\n\t.app-bar {\n\t\tgrid-template-columns: 1fr auto;\n\t\tpadding: 8px 32px;\n\t}\n\n\t.app-bar .app-bar__brand h1 {\n\t\tfont-size: 1.5em;\n\t}\n\n\t.app-bar .app-bar__menu {\n\t\tdisplay: none;\n\t}\n\n\t.app-bar .app-bar__navigation {\n\t\tposition: static;\n\t\twidth: 100%;\n\t}\n\n\t.app-bar .app-bar__navigation ul li {\n\t\tdisplay: inline-block;\n\t}\n\n\t.app-bar .app-bar__navigation ul li a {\n\t\tdisplay: inline-block;\n\t\twidth: 120px;\n\t\ttext-align: center;\n\t\tmargin: 0;\n\t}\n\n\t.hero {\n\t\tmargin-top: 3.8rem;\n\t\theight: 40vh;\n\t}\n\n\t.hero__title {\n\t\tfont-size: xx-large;\n\t}\n\n\t.hero__image_home {\n\t\tbackground-image: url('/assets/images/heros/hero-image_2-large.jpg');\n\t}\n\n\t.hero__subtitle {\n\t\tfont-size: x-large;\n\t}\n\n\t.hero__description {\n\t\tfont-size: small;\n\t}\n\n\t.resto__label {\n\t\tmargin-top: 2em;\n\t}\n\n  .resto__list {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n\t.resto__list__menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n}\n\n@media screen and (min-width: 800px) {\n\t.resto__container {\n    width: 90%;\n    margin: 0 auto;\n  }\n\n\t.app-bar .app-bar__brand h1 {\n\t\tfont-size: 2em;\n\t}\n\n\t.hero__title {\n\t\tfont-size: xx-large;\n\t}\n\n\t.hero__subtitle {\n\t\tfont-size: x-large;\n\t}\n\n\t.hero__description {\n\t\tfont-size: large;\n\t}\n\n\t.resto__list {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n\t.resto__container {\n    margin: 0 auto;\n  }\n\n\t.resto__list__menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n\n\tfigure.resto__menu__food {\n\t\tmin-width: 180px;\n\t}\n}\n\n@media screen and (min-width: 850px) {\n\t.resto__list__menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t}\n\n\t.resto__overview__container {\n\t\twidth: 90vw;\n\t}\n}\n\n@media screen and (min-width: 1200px) {\n\t.resto__overview__container {\n\t\twidth: 80vw;\n\t}\n\n\t.resto__container {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n\t.hero {\n\t\tmargin-top: 3.8rem;\n\t\theight: 50vh;\n\t}\n\n\t.resto__label {\n\t\tmargin-top: 0;\n\t}\n\n\t.resto__list {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n\t.resto__list__menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(5, 1fr);\n\t}\n\n\t.resto__overview__container {\n\t\twidth: 70vw;\n\t}\n}\n\n@media screen and (min-width: 1600px) {\n\t.resto__container {\n    width: 80%;\n    margin: 0 auto;\n  }\n\t.resto__list {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n\t.resto__list__menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto, 1fr);\n\t}\n\n\tfigure.resto__menu__food {\n\t\tmin-width: 200px;\n\t}\n}",
      "",
    ]),
      (t.exports = n);
  },
  function (t, n, e) {
    "use strict";
    e.r(n);
    e(6), e(1), e(7), e(8), e(10);
    var r = {
        init: function (t) {
          var n = this,
            e = t.button,
            r = t.drawer,
            o = t.content;
          e.addEventListener("click", function (t) {
            n._toggleDrawer(t, r);
          }),
            o.addEventListener("click", function (t) {
              n._closeDrawer(t, r);
            });
        },
        _toggleDrawer: function (t, n) {
          t.stopPropagation(), n.classList.toggle("open");
        },
        _closeDrawer: function (t, n) {
          t.stopPropagation(), n.classList.remove("open");
        },
      },
      o = {
        parseActiveUrlWithCombiner: function () {
          var t = window.location.hash.slice(1).toLowerCase(),
            n = this._urlSplitter(t);
          return this._urlCombiner(n);
        },
        parseActiveUrlWithoutCombiner: function () {
          var t = window.location.hash.slice(1).toLowerCase();
          return this._urlSplitter(t);
        },
        _urlSplitter: function (t) {
          var n = t.split("/");
          return {
            resource: n[1] || null,
            id: n[2] || null,
            verb: n[3] || null,
          };
        },
        _urlCombiner: function (t) {
          return (
            (t.resource ? "/".concat(t.resource) : "/") +
            (t.id ? "/:id" : "") +
            (t.verb ? "".concat(t.verb) : "")
          );
        },
      },
      i = {
        BASE_URL: "https://restaurant-api.dicoding.dev/",
        BASE_IMAGE_URL: "https://restaurant-api.dicoding.dev/images/medium/",
        DEFAULT_LANGUAGE: "en-us",
        CACHE_NAME: new Date().toISOString(),
        DATABASE_NAME: "spicy-heat-database",
        DATABASE_VERSION: 1,
        OBJECT_STORE_NAME: "resto",
      },
      a = {
        HOME: "".concat(i.BASE_URL, "list"),
        DETAIL: function (t) {
          return "".concat(i.BASE_URL, "detail/").concat(t);
        },
      };
    function s(t, n, e, r, o, i, a) {
      try {
        var s = t[i](a),
          c = s.value;
      } catch (t) {
        return void e(t);
      }
      s.done ? n(c) : Promise.resolve(c).then(r, o);
    }
    function c(t) {
      return function () {
        var n = this,
          e = arguments;
        return new Promise(function (r, o) {
          var i = t.apply(n, e);
          function a(t) {
            s(i, r, o, a, c, "next", t);
          }
          function c(t) {
            s(i, r, o, a, c, "throw", t);
          }
          a(void 0);
        });
      };
    }
    function d(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var u = (function () {
        function t() {
          !(function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
        }
        var n, e, r, o, i;
        return (
          (n = t),
          (e = null),
          (r = [
            {
              key: "infoResto",
              value:
                ((i = c(
                  regeneratorRuntime.mark(function t() {
                    var n, e;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), fetch(a.HOME);
                          case 2:
                            return (n = t.sent), (t.next = 5), n.json();
                          case 5:
                            return (
                              (e = t.sent), t.abrupt("return", e.restaurants)
                            );
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )),
                function () {
                  return i.apply(this, arguments);
                }),
            },
            {
              key: "detailResto",
              value:
                ((o = c(
                  regeneratorRuntime.mark(function t(n) {
                    var e;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), fetch(a.DETAIL(n));
                          case 2:
                            return (e = t.sent), t.abrupt("return", e.json());
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )),
                function (t) {
                  return o.apply(this, arguments);
                }),
            },
          ]),
          e && d(n.prototype, e),
          r && d(n, r),
          t
        );
      })(),
      l = function (t) {
        return '\n\t<div class="container__image">\n\t    <img data-src="'
          .concat(
            i.BASE_IMAGE_URL + t.restaurant.pictureId,
            '" class="container__image_overview lazyload" alt="'
          )
          .concat(
            t.name,
            '">\n\t</div>\n\t<div class="container__info">\n\t    <h2 class="container__info_header"> '
          )
          .concat(
            t.restaurant.name,
            ' </h2>\n\t    <h4 class="container__info_subheader"> '
          )
          .concat(t.restaurant.address, " di ")
          .concat(
            t.restaurant.city,
            ' </h4>\n\t    <p class="container__info_rating"> <i class="fa fa-star"></i> '
          )
          .concat(
            t.restaurant.rating,
            ' </p>\n\t    <p class="container__info_resto_categories" id="container__info_categories">\n\t\t\t</p>\n\t    <p class="container__info_description"> '
          )
          .concat(t.restaurant.description, " </p>\n\t</div>\n");
      },
      f = function (t) {
        return "\n\t<span> ".concat(t.name, " </span>\n");
      },
      p = function (t, n) {
        return '\n\t\t<div class="resto__foodies">\n\t\t\t<div class="resto__food_icon">\n\t\t\t</div>\n\t\t\t<div class="resto__food_image">\n\t\t\t\t<img class="lazyload" data-src="'
          .concat(n.food, '" alt="')
          .concat(
            t.name,
            '" srcset="">\n\t\t\t</div>\n\t\t\t<div class="resto__food_info">\n\t\t\t\t<div class="resto__food_name">\n\t\t\t\t\t'
          )
          .concat(
            t.name,
            ' \n\t\t\t\t</div>\n\t\t\t\t<div class="resto__food_price">\n\t\t\t\t\t'
          )
          .concat(n.foodPrice, " \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n");
      },
      m = function (t, n) {
        return '\n\t\t<div class="resto__drinkies">\n\t\t\t<div class="resto__drink_icon">\n\t\t\t</div>\n\t\t\t<div class="resto__drink_image">\n\t\t\t\t<img class="lazyload" data-src="'
          .concat(n.drink, '" alt="')
          .concat(
            t.name,
            '" srcset="">\n\t\t\t</div>\n\t\t\t<div class="resto__drink_info">\n\t\t\t\t<div class="resto__drink_name">\n\t\t\t\t\t'
          )
          .concat(
            t.name,
            ' \n\t\t\t\t</div>\n\t\t\t\t<div class="resto__drink_price">\n\t\t\t\t\t'
          )
          .concat(
            n.drinkPrice,
            " \n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n"
          );
      },
      g = function (t) {
        return '\n\t\t<div class="reviewer">\n\t\t  <img class="lazyload" data-src="https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png" alt="">\n\t\t  <div class="reviewer__name">\n\t\t    <p> '
          .concat(
            t.name,
            ' </p>\n\t\t  </div>\n\t\t  <div class="reviewer__date">\n\t\t    <p> '
          )
          .concat(
            t.date,
            ' </p>\n\t\t  </div>\n\t\t  <div class="reviewer__comentar">\n\t\t      <textarea name="" id="" cols="18" rows="6" readonly>\n'
          )
          .concat(
            t.review,
            "\n\t\t      </textarea>\n\t\t  </div>\n\t\t</div>\n"
          );
      },
      h = function (t) {
        return '\n\t<a href="#/detail/'
          .concat(
            t.id,
            '" class="resto__selector">\n\t\t<figure>\n\t\t\t\t<img class="lazyload" data-src="'
          )
          .concat(i.BASE_IMAGE_URL + t.pictureId, '" alt="')
          .concat(
            t.name,
            '">\n\t\t\t\t<div class="resto__info_container">\n\t\t\t\t\t<h4 class="resto__info"> '
          )
          .concat(
            t.rating,
            ' </h4>\n\t\t\t\t</div>\n\t\t\t\t<h3 class="resto__title" href="#/detail/'
          )
          .concat(t.id, '"> ')
          .concat(t.name, " at ")
          .concat(t.city, ' </h3>\n\t\t\t\t<p class="resto__description"> ')
          .concat(
            t.description.substring(0, 150),
            " </p>\n\t\t</figure>\n\t</a>\n"
          );
      };
    function v(t, n, e, r, o, i, a) {
      try {
        var s = t[i](a),
          c = s.value;
      } catch (t) {
        return void e(t);
      }
      s.done ? n(c) : Promise.resolve(c).then(r, o);
    }
    function _(t) {
      return function () {
        var n = this,
          e = arguments;
        return new Promise(function (r, o) {
          var i = t.apply(n, e);
          function a(t) {
            v(i, r, o, a, s, "next", t);
          }
          function s(t) {
            v(i, r, o, a, s, "throw", t);
          }
          a(void 0);
        });
      };
    }
    var b,
      w,
      y = {
        render: function () {
          return _(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        '\n     <section class="hero">\n      <h1 class="hero__title"> Welcome <br> to Spicy Heat </h1>\n        <img class="hero__image_home">\n      <a href="#main" class="hero__cta"> DISCOVER </a>\n     </section>\n\n     <section class="resto">\n      <div class="resto__container">\n        <h1 class="resto__label" id="main"> Explore Restaurant & Explore Food </h1>\n        <p class="resto__subtitle"> Here are a few of our favourites: </p>\n        <div id="resto" class="resto__list">\n        </div>\n      </div>\n     </section>\n    '
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        afterRender: function () {
          return _(
            regeneratorRuntime.mark(function t() {
              var n, e;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), u.infoResto();
                    case 2:
                      (n = t.sent),
                        (e = document.querySelector("#resto")),
                        n.forEach(function (t) {
                          e.innerHTML += h(t);
                        });
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
      },
      x = e(2);
    var k = new WeakMap(),
      E = new WeakMap(),
      A = new WeakMap(),
      z = new WeakMap(),
      P = new WeakMap();
    var L = {
      get: function (t, n, e) {
        if (t instanceof IDBTransaction) {
          if ("done" === n) return E.get(t);
          if ("objectStoreNames" === n) return t.objectStoreNames || A.get(t);
          if ("store" === n)
            return e.objectStoreNames[1]
              ? void 0
              : e.objectStore(e.objectStoreNames[0]);
        }
        return C(t[n]);
      },
      set: function (t, n, e) {
        return (t[n] = e), !0;
      },
      has: function (t, n) {
        return (
          (t instanceof IDBTransaction && ("done" === n || "store" === n)) ||
          n in t
        );
      },
    };
    function S(t) {
      return t !== IDBDatabase.prototype.transaction ||
        "objectStoreNames" in IDBTransaction.prototype
        ? (
            w ||
            (w = [
              IDBCursor.prototype.advance,
              IDBCursor.prototype.continue,
              IDBCursor.prototype.continuePrimaryKey,
            ])
          ).includes(t)
          ? function () {
              for (
                var n = arguments.length, e = new Array(n), r = 0;
                r < n;
                r++
              )
                e[r] = arguments[r];
              return t.apply(j(this), e), C(k.get(this));
            }
          : function () {
              for (
                var n = arguments.length, e = new Array(n), r = 0;
                r < n;
                r++
              )
                e[r] = arguments[r];
              return C(t.apply(j(this), e));
            }
        : function (n) {
            for (
              var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), o = 1;
              o < e;
              o++
            )
              r[o - 1] = arguments[o];
            var i = t.call.apply(t, [j(this), n].concat(r));
            return A.set(i, n.sort ? n.sort() : [n]), C(i);
          };
    }
    function R(t) {
      return "function" == typeof t
        ? S(t)
        : (t instanceof IDBTransaction &&
            (function (t) {
              if (!E.has(t)) {
                var n = new Promise(function (n, e) {
                  var r = function () {
                      t.removeEventListener("complete", o),
                        t.removeEventListener("error", i),
                        t.removeEventListener("abort", i);
                    },
                    o = function () {
                      n(), r();
                    },
                    i = function () {
                      e(
                        t.error || new DOMException("AbortError", "AbortError")
                      ),
                        r();
                    };
                  t.addEventListener("complete", o),
                    t.addEventListener("error", i),
                    t.addEventListener("abort", i);
                });
                E.set(t, n);
              }
            })(t),
          (n = t),
          (
            b ||
            (b = [
              IDBDatabase,
              IDBObjectStore,
              IDBIndex,
              IDBCursor,
              IDBTransaction,
            ])
          ).some(function (t) {
            return n instanceof t;
          })
            ? new Proxy(t, L)
            : t);
      var n;
    }
    function C(t) {
      if (t instanceof IDBRequest)
        return (
          (n = t),
          (e = new Promise(function (t, e) {
            var r = function () {
                n.removeEventListener("success", o),
                  n.removeEventListener("error", i);
              },
              o = function () {
                t(C(n.result)), r();
              },
              i = function () {
                e(n.error), r();
              };
            n.addEventListener("success", o), n.addEventListener("error", i);
          }))
            .then(function (t) {
              t instanceof IDBCursor && k.set(t, n);
            })
            .catch(function () {}),
          P.set(e, n),
          e
        );
      var n, e;
      if (z.has(t)) return z.get(t);
      var r = R(t);
      return r !== t && (z.set(t, r), P.set(r, t)), r;
    }
    var j = function (t) {
      return P.get(t);
    };
    function M(t, n) {
      var e = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        n &&
          (r = r.filter(function (n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable;
          })),
          e.push.apply(e, r);
      }
      return e;
    }
    function O(t) {
      for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {};
        n % 2
          ? M(Object(e), !0).forEach(function (n) {
              B(t, n, e[n]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
          : M(Object(e)).forEach(function (n) {
              Object.defineProperty(
                t,
                n,
                Object.getOwnPropertyDescriptor(e, n)
              );
            });
      }
      return t;
    }
    function B(t, n, e) {
      return (
        n in t
          ? Object.defineProperty(t, n, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[n] = e),
        t
      );
    }
    function T(t, n, e, r, o, i, a) {
      try {
        var s = t[i](a),
          c = s.value;
      } catch (t) {
        return void e(t);
      }
      s.done ? n(c) : Promise.resolve(c).then(r, o);
    }
    var D = ["get", "getKey", "getAll", "getAllKeys", "count"],
      N = ["put", "add", "delete", "clear"],
      I = new Map();
    function K(t, n) {
      if (t instanceof IDBDatabase && !(n in t) && "string" == typeof n) {
        if (I.get(n)) return I.get(n);
        var e = n.replace(/FromIndex$/, ""),
          r = n !== e,
          o = N.includes(e);
        if (
          e in (r ? IDBIndex : IDBObjectStore).prototype &&
          (o || D.includes(e))
        ) {
          var i = (function () {
            var t,
              n =
                ((t = regeneratorRuntime.mark(function t(n) {
                  var i,
                    a,
                    s,
                    c,
                    d,
                    u,
                    l = arguments;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            for (
                              a = this.transaction(
                                n,
                                o ? "readwrite" : "readonly"
                              ),
                                s = a.store,
                                c = l.length,
                                d = new Array(c > 1 ? c - 1 : 0),
                                u = 1;
                              u < c;
                              u++
                            )
                              d[u - 1] = l[u];
                            return (
                              r && (s = s.index(d.shift())),
                              (t.next = 6),
                              Promise.all([(i = s)[e].apply(i, d), o && a.done])
                            );
                          case 6:
                            return t.abrupt("return", t.sent[0]);
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })),
                function () {
                  var n = this,
                    e = arguments;
                  return new Promise(function (r, o) {
                    var i = t.apply(n, e);
                    function a(t) {
                      T(i, r, o, a, s, "next", t);
                    }
                    function s(t) {
                      T(i, r, o, a, s, "throw", t);
                    }
                    a(void 0);
                  });
                });
            return function (t) {
              return n.apply(this, arguments);
            };
          })();
          return I.set(n, i), i;
        }
      }
    }
    function F(t, n, e, r, o, i, a) {
      try {
        var s = t[i](a),
          c = s.value;
      } catch (t) {
        return void e(t);
      }
      s.done ? n(c) : Promise.resolve(c).then(r, o);
    }
    function W(t) {
      return function () {
        var n = this,
          e = arguments;
        return new Promise(function (r, o) {
          var i = t.apply(n, e);
          function a(t) {
            F(i, r, o, a, s, "next", t);
          }
          function s(t) {
            F(i, r, o, a, s, "throw", t);
          }
          a(void 0);
        });
      };
    }
    L = (function (t) {
      return O(
        O({}, t),
        {},
        {
          get: function (n, e, r) {
            return K(n, e) || t.get(n, e, r);
          },
          has: function (n, e) {
            return !!K(n, e) || t.has(n, e);
          },
        }
      );
    })(L);
    var H = i.OBJECT_STORE_NAME,
      q = (function (t, n) {
        var e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = e.blocked,
          o = e.upgrade,
          i = e.blocking,
          a = e.terminated,
          s = indexedDB.open(t, n),
          c = C(s);
        return (
          o &&
            s.addEventListener("upgradeneeded", function (t) {
              o(C(s.result), t.oldVersion, t.newVersion, C(s.transaction));
            }),
          r &&
            s.addEventListener("blocked", function () {
              return r();
            }),
          c
            .then(function (t) {
              a &&
                t.addEventListener("close", function () {
                  return a();
                }),
                i &&
                  t.addEventListener("versionchange", function () {
                    return i();
                  });
            })
            .catch(function () {}),
          c
        );
      })(i.DATABASE_NAME, i.DATABASE_VERSION, {
        upgrade: function (t) {
          t.createObjectStore(H, { keyPath: "id" });
        },
      }),
      U = {
        getResto: function (t) {
          return W(
            regeneratorRuntime.mark(function n() {
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), q;
                    case 2:
                      return n.abrupt("return", n.sent.get(H, t));
                    case 3:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        getAllRestos: function () {
          return W(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), q;
                    case 2:
                      return t.abrupt("return", t.sent.getAll(H));
                    case 3:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        putRestos: function (t) {
          return W(
            regeneratorRuntime.mark(function n() {
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), q;
                    case 2:
                      return n.abrupt("return", n.sent.put(H, t));
                    case 3:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
        deleteResto: function (t) {
          return W(
            regeneratorRuntime.mark(function n() {
              return regeneratorRuntime.wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), q;
                    case 2:
                      return n.abrupt("return", n.sent.delete(H, t));
                    case 3:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )();
        },
      };
    function G(t, n, e, r, o, i, a) {
      try {
        var s = t[i](a),
          c = s.value;
      } catch (t) {
        return void e(t);
      }
      s.done ? n(c) : Promise.resolve(c).then(r, o);
    }
    function $(t) {
      return function () {
        var n = this,
          e = arguments;
        return new Promise(function (r, o) {
          var i = t.apply(n, e);
          function a(t) {
            G(i, r, o, a, s, "next", t);
          }
          function s(t) {
            G(i, r, o, a, s, "throw", t);
          }
          a(void 0);
        });
      };
    }
    var J = {
      init: function (t) {
        var n = this;
        return $(
          regeneratorRuntime.mark(function e() {
            var r, o;
            return regeneratorRuntime.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t.likeButtonContainer),
                      (o = t.resto),
                      (n._likeButtonContainer = r),
                      (n._resto = o),
                      (e.next = 5),
                      n._renderButton()
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )();
      },
      _renderButton: function () {
        var t = this;
        return $(
          regeneratorRuntime.mark(function n() {
            var e;
            return regeneratorRuntime.wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (e = t._resto.id), (n.next = 3), t._isRestoExist(e);
                  case 3:
                    if (!n.sent) {
                      n.next = 7;
                      break;
                    }
                    t._renderLiked(), (n.next = 8);
                    break;
                  case 7:
                    t._renderLike();
                  case 8:
                  case "end":
                    return n.stop();
                }
            }, n);
          })
        )();
      },
      _isRestoExist: function (t) {
        return $(
          regeneratorRuntime.mark(function n() {
            var e;
            return regeneratorRuntime.wrap(function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (n.next = 2), U.getResto(t);
                  case 2:
                    return (e = n.sent), n.abrupt("return", !!e);
                  case 4:
                  case "end":
                    return n.stop();
                }
            }, n);
          })
        )();
      },
      _renderLike: function () {
        var t = this;
        (this._likeButtonContainer.innerHTML =
          '\n\t<button aria-label="like this resto" id="likeButton" class="like">\n\t\t<i class="fa fa-heart-o" aria-hidden="true"></i>\n\t</button>\n'),
          document.querySelector("#likeButton").addEventListener(
            "click",
            $(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), U.putRestos(t._resto);
                      case 2:
                        console.log(t._resto), t._renderButton();
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )
          );
      },
      _renderLiked: function () {
        var t = this;
        (this._likeButtonContainer.innerHTML =
          '\n\t<button aria-label="unlike this resto" id="likeButton" class="like">\n\t\t<i class="fa fa-heart" aria-hidden="true"></i>\n\t</button>\n'),
          document.querySelector("#likeButton").addEventListener(
            "click",
            $(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), U.deleteResto(t._resto.id);
                      case 2:
                        t._renderButton();
                      case 3:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )
          );
      },
    };
    function V(t, n, e, r, o, i, a) {
      try {
        var s = t[i](a),
          c = s.value;
      } catch (t) {
        return void e(t);
      }
      s.done ? n(c) : Promise.resolve(c).then(r, o);
    }
    function Y(t) {
      return function () {
        var n = this,
          e = arguments;
        return new Promise(function (r, o) {
          var i = t.apply(n, e);
          function a(t) {
            V(i, r, o, a, s, "next", t);
          }
          function s(t) {
            V(i, r, o, a, s, "throw", t);
          }
          a(void 0);
        });
      };
    }
    function Q(t, n, e, r, o, i, a) {
      try {
        var s = t[i](a),
          c = s.value;
      } catch (t) {
        return void e(t);
      }
      s.done ? n(c) : Promise.resolve(c).then(r, o);
    }
    function X(t) {
      return function () {
        var n = this,
          e = arguments;
        return new Promise(function (r, o) {
          var i = t.apply(n, e);
          function a(t) {
            Q(i, r, o, a, s, "next", t);
          }
          function s(t) {
            Q(i, r, o, a, s, "throw", t);
          }
          a(void 0);
        });
      };
    }
    var Z = {
      "/": y,
      "/Resto": y,
      "/detail/:id": {
        render: function () {
          return Y(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        '\n      <section id="resto"> </section>\n      <section id="categories"> </section>\n      <section class="resto">\n        <div class="resto__overview__container" id="restoOverview">\n        </div>\n        <div class="resto__container">\n          <h2 class="resto__label"> Available Foods Menu </h2>\n            <div class="resto__list__menu" id="foodsMenu">\n            </div>\n        </div>\n        <div class="resto__container resto__container__drinks">\n          <h2 class="resto__label"> Available Drinks Menu </h2>\n          <div class="resto__list__menu" id="drinksMenu">\n          </div>\n        </div>\n        <div class="resto__container">\n          <h2 class="resto__label"> What people says about us! </h2>\n          <div id="comentar">\n            <div class="reviewer" id="review">\n            </div>\n          </div>\n        </div>\n      </section>\n      <div id="likeButtonContainer"></div>\n    '
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        afterRender: function () {
          return Y(
            regeneratorRuntime.mark(function t() {
              var n, e, r, a, s, c, d;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (n = o.parseActiveUrlWithoutCombiner()),
                        (t.next = 3),
                        u.detailResto(n.id)
                      );
                    case 3:
                      (e = t.sent),
                        (r = e.restaurant),
                        (document.querySelector("#resto").innerHTML +=
                          '\n\t<section class="hero">\n\t <h1 class="hero__title"> '
                            .concat(
                              (h = e).restaurant.name,
                              ' </h1>\n\t <img class="hero__image lazyload" data-src="'
                            )
                            .concat(
                              i.BASE_IMAGE_URL + h.restaurant.pictureId,
                              '" alt="'
                            )
                            .concat(h.name, '">\n\t</section>\n')),
                        (document.querySelector("#restoOverview").innerHTML +=
                          l(e)),
                        (a = document.querySelector(
                          "#container__info_categories"
                        )),
                        r.categories.forEach(function (t) {
                          a.innerHTML += f(t);
                        }),
                        (s = document.querySelector("#foodsMenu")),
                        r.menus.foods.forEach(function (t) {
                          var n =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0;
                          s.innerHTML += p(t, x.resto[n]);
                        }),
                        (c = document.querySelector("#drinksMenu")),
                        r.menus.drinks.forEach(function (t) {
                          var n =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0;
                          c.innerHTML += m(t, x.resto[n]);
                        }),
                        (d = document.querySelector("#review")),
                        r.customerReviews.forEach(function (t) {
                          d.innerHTML += g(t);
                        }),
                        J.init(
                          {
                            likeButtonContainer: document.querySelector(
                              "#likeButtonContainer"
                            ),
                            resto: {
                              id: r.id,
                              name: r.name,
                              city: r.city,
                              rating: r.rating,
                              address: r.address,
                              pictureId: r.pictureId,
                              description: r.description,
                            },
                          },
                          console.log(r)
                        );
                    case 18:
                    case "end":
                      return t.stop();
                  }
                var h;
              }, t);
            })
          )();
        },
      },
      "/favorite": {
        render: function () {
          return X(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        '\n\t\t\t<section class="resto">\n\t\t\t\t<div class="resto__container">\n\t\t\t\t\t<h2 class="resto__label"> Your Favorite Restaurant </h2>\n\t\t\t\t\t<div id="resto" class="resto__list">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t'
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
        afterRender: function () {
          return X(
            regeneratorRuntime.mark(function t() {
              var n, e;
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), U.getAllRestos();
                    case 2:
                      (n = t.sent),
                        (e = document.querySelector("#resto")),
                        n.forEach(function (t) {
                          console.log(t), (e.innerHTML += h(t));
                        });
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )();
        },
      },
    };
    function tt(t, n, e, r, o, i, a) {
      try {
        var s = t[i](a),
          c = s.value;
      } catch (t) {
        return void e(t);
      }
      s.done ? n(c) : Promise.resolve(c).then(r, o);
    }
    function nt(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          "value" in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    var et = (function () {
        function t(n) {
          var e = n.button,
            r = n.drawer,
            o = n.content;
          !(function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this._button = e),
            (this._drawer = r),
            (this._content = o),
            this._initialAppShell();
        }
        var n, e, i, a, s;
        return (
          (n = t),
          (e = [
            {
              key: "_initialAppShell",
              value: function () {
                r.init({
                  button: this._button,
                  drawer: this._drawer,
                  content: this._content,
                });
              },
            },
            {
              key: "renderPage",
              value:
                ((a = regeneratorRuntime.mark(function t() {
                  var n, e;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (n = o.parseActiveUrlWithCombiner()),
                              (e = Z[n]),
                              (t.next = 4),
                              e.render()
                            );
                          case 4:
                            return (
                              (this._content.innerHTML = t.sent),
                              (t.next = 7),
                              e.afterRender()
                            );
                          case 7:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })),
                (s = function () {
                  var t = this,
                    n = arguments;
                  return new Promise(function (e, r) {
                    var o = a.apply(t, n);
                    function i(t) {
                      tt(o, e, r, i, s, "next", t);
                    }
                    function s(t) {
                      tt(o, e, r, i, s, "throw", t);
                    }
                    i(void 0);
                  });
                }),
                function () {
                  return s.apply(this, arguments);
                }),
            },
          ]) && nt(n.prototype, e),
          i && nt(n, i),
          t
        );
      })(),
      rt = e(5),
      ot = e.n(rt);
    function it(t, n, e, r, o, i, a) {
      try {
        var s = t[i](a),
          c = s.value;
      } catch (t) {
        return void e(t);
      }
      s.done ? n(c) : Promise.resolve(c).then(r, o);
    }
    var at = (function () {
        var t,
          n =
            ((t = regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!("serviceWorker" in navigator)) {
                        t.next = 4;
                        break;
                      }
                      return (t.next = 3), ot.a.register();
                    case 3:
                      return t.abrupt("return");
                    case 4:
                      console.log(
                        "Service worker not supported in this browser"
                      );
                    case 5:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })),
            function () {
              var n = this,
                e = arguments;
              return new Promise(function (r, o) {
                var i = t.apply(n, e);
                function a(t) {
                  it(i, r, o, a, s, "next", t);
                }
                function s(t) {
                  it(i, r, o, a, s, "throw", t);
                }
                a(void 0);
              });
            });
        return function () {
          return n.apply(this, arguments);
        };
      })(),
      st = new et({
        button: document.querySelector("#hamburgerButton"),
        drawer: document.querySelector("#navigationDrawer"),
        content: document.querySelector("#mainContent"),
      });
    window.addEventListener("hashchange", function () {
      st.renderPage();
    }),
      window.addEventListener("load", function () {
        st.renderPage(), at();
      });
  },
]);
