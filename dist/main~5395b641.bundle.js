(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    23: function (t, n) {
      function e(t) {
        return (e =
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
      function r(t, n) {
        if (!(t instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function i(t, n) {
        return !n || ("object" !== e(n) && "function" != typeof n)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return t;
            })(t)
          : n;
      }
      function a(t) {
        var n = "function" == typeof Map ? new Map() : void 0;
        return (a = function (t) {
          if (
            null === t ||
            ((e = t), -1 === Function.toString.call(e).indexOf("[native code]"))
          )
            return t;
          var e;
          if ("function" != typeof t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== n) {
            if (n.has(t)) return n.get(t);
            n.set(t, r);
          }
          function r() {
            return u(t, arguments, f(this).constructor);
          }
          return (
            (r.prototype = Object.create(t.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            l(r, t)
          );
        })(t);
      }
      function u(t, n, e) {
        return (u = c()
          ? Reflect.construct
          : function (t, n, e) {
              var r = [null];
              r.push.apply(r, n);
              var o = new (Function.bind.apply(t, r))();
              return e && l(o, e.prototype), o;
            }).apply(null, arguments);
      }
      function c() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function l(t, n) {
        return (l =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      function f(t) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var p = (function (t) {
        !(function (t, n) {
          if ("function" != typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(n && n.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            n && l(t, n);
        })(b, t);
        var n,
          e,
          a,
          u,
          p,
          s =
            ((n = b),
            (e = c()),
            function () {
              var t,
                r = f(n);
              if (e) {
                var o = f(this).constructor;
                t = Reflect.construct(r, arguments, o);
              } else t = r.apply(this, arguments);
              return i(this, t);
            });
        function b() {
          return r(this, b), s.apply(this, arguments);
        }
        return (
          (a = b),
          (u = [
            {
              key: "connectedCallback",
              value: function () {
                this.render();
              },
            },
            {
              key: "render",
              value: function () {
                this.innerHTML =
                  '\n\t\t<header class="app-bar">\n\t\t\t<div class="app-bar__menu">\n\t\t\t\t<button id="hamburgerButton">☰</button>\n\t\t\t</div>\n\t\t\t<div class="app-bar__brand" id="logo">\n\t\t\t\t<img class="app-bar__logo" src="assets/images/logo/logo.png" alt="logo-spicy-heat" srcset="" width="144" height="41">\n\t\t\t</div>\n\t\t\t<nav id="navigationDrawer" class="app-bar__navigation">\n\t\t\t\t<ul>\n\t\t\t\t\t<li class="app-bar__link"><a href="/"> Home </a></li>\n\t\t\t\t\t<li class="app-bar__link"><a href="#/favorite"> Favorite </a></li>\n\t\t\t\t\t<li class="app-bar__link"><a href="https://github.com/medival/" rel="norefferer" target="_blank"> About Us </a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</header>\n\t\t';
              },
            },
          ]) && o(a.prototype, u),
          p && o(a, p),
          b
        );
      })(a(HTMLElement));
      customElements.define("app-bar", p);
    },
  },
]);
