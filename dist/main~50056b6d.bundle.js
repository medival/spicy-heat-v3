(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    22: function (t, n) {
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
      function o(t, n) {
        if (!(t instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(t, n) {
        for (var e = 0; e < n.length; e++) {
          var o = n[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
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
      function c(t) {
        var n = "function" == typeof Map ? new Map() : void 0;
        return (c = function (t) {
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
            n.set(t, o);
          }
          function o() {
            return u(t, arguments, l(this).constructor);
          }
          return (
            (o.prototype = Object.create(t.prototype, {
              constructor: {
                value: o,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            f(o, t)
          );
        })(t);
      }
      function u(t, n, e) {
        return (u = a()
          ? Reflect.construct
          : function (t, n, e) {
              var o = [null];
              o.push.apply(o, n);
              var r = new (Function.bind.apply(t, o))();
              return e && f(r, e.prototype), r;
            }).apply(null, arguments);
      }
      function a() {
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
      function f(t, n) {
        return (f =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      function l(t) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var s = (function (t) {
        !(function (t, n) {
          if ("function" != typeof n && null !== n)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(n && n.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            n && f(t, n);
        })(y, t);
        var n,
          e,
          c,
          u,
          s,
          p =
            ((n = y),
            (e = a()),
            function () {
              var t,
                o = l(n);
              if (e) {
                var r = l(this).constructor;
                t = Reflect.construct(o, arguments, r);
              } else t = o.apply(this, arguments);
              return i(this, t);
            });
        function y() {
          return o(this, y), p.apply(this, arguments);
        }
        return (
          (c = y),
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
                  '\n\t\t<footer>\n\t\t\t <div class="footer__content">\n         <p> Crafted by me to everyone with spirit!</p>\n         <p class="footer__copyright"> Copyright &copy; 2021 - Spicy Heat </p>\n         <div class="footer__social-media-icons">\n            <a href="#" class="social-icons social-icon-twitter">\n              <i class="fa fa-lg fa-twitter"></i>\n            </a>\n            <a href="#" class="social-icons social-icon-linkedin">\n              <i class="fa fa-lg fa-linkedin"></i>\n            </a>\n            <a href="https://github.com/medival"  target="_blank" class="social-icons social-icon-github">\n              <i class="fa fa-lg fa-github"></i>\n            </a>\n         </div>\n        </div>\n\t\t</footer>\n\t\t';
              },
            },
          ]) && r(c.prototype, u),
          s && r(c, s),
          y
        );
      })(c(HTMLElement));
      customElements.define("foot-bar", s);
    },
  },
]);
