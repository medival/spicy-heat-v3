(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    12: function (n, t, e) {
      "use strict";
      var r = e(13),
        i = e(4),
        a = e(14);
      function o(n, t, e, r, i, a, o) {
        try {
          var u = n[a](o),
            c = u.value;
        } catch (n) {
          return void e(n);
        }
        u.done ? t(c) : Promise.resolve(c).then(r, i);
      }
      function u(n, t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r);
        }
      }
      var c = (function () {
        function n(t) {
          var e = t.button,
            r = t.drawer,
            i = t.content;
          !(function (n, t) {
            if (!(n instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (this._button = e),
            (this._drawer = r),
            (this._content = i),
            this._initialAppShell();
        }
        var t, e, c, s, f;
        return (
          (t = n),
          (e = [
            {
              key: "_initialAppShell",
              value: function () {
                r.a.init({
                  button: this._button,
                  drawer: this._drawer,
                  content: this._content,
                });
              },
            },
            {
              key: "renderPage",
              value:
                ((s = regeneratorRuntime.mark(function n() {
                  var t, e;
                  return regeneratorRuntime.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (t = i.a.parseActiveUrlWithCombiner()),
                              (e = a.a[t]),
                              (n.next = 4),
                              e.render()
                            );
                          case 4:
                            return (
                              (this._content.innerHTML = n.sent),
                              (n.next = 7),
                              e.afterRender()
                            );
                          case 7:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    this
                  );
                })),
                (f = function () {
                  var n = this,
                    t = arguments;
                  return new Promise(function (e, r) {
                    var i = s.apply(n, t);
                    function a(n) {
                      o(i, e, r, a, u, "next", n);
                    }
                    function u(n) {
                      o(i, e, r, a, u, "throw", n);
                    }
                    a(void 0);
                  });
                }),
                function () {
                  return f.apply(this, arguments);
                }),
            },
          ]) && u(t.prototype, e),
          c && u(t, c),
          n
        );
      })();
      t.a = c;
    },
  },
]);
