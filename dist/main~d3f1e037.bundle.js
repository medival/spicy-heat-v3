(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    3: function (e, r, t) {
      "use strict";
      var n = t(17),
        u = t(1);
      function a(e, r, t, n, u, a, o) {
        try {
          var c = e[a](o),
            s = c.value;
        } catch (e) {
          return void t(e);
        }
        c.done ? r(s) : Promise.resolve(s).then(n, u);
      }
      function o(e) {
        return function () {
          var r = this,
            t = arguments;
          return new Promise(function (n, u) {
            var o = e.apply(r, t);
            function c(e) {
              a(o, n, u, c, s, "next", e);
            }
            function s(e) {
              a(o, n, u, c, s, "throw", e);
            }
            c(void 0);
          });
        };
      }
      var c = u.a.DATABASE_NAME,
        s = u.a.DATABASE_VERSION,
        i = u.a.OBJECT_STORE_NAME,
        p = Object(n.a)(c, s, {
          upgrade: function (e) {
            e.createObjectStore(i, { keyPath: "id" });
          },
        }),
        f = {
          getResto: function (e) {
            return o(
              regeneratorRuntime.mark(function r() {
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (e) {
                          r.next = 2;
                          break;
                        }
                        return r.abrupt("return");
                      case 2:
                        return (r.next = 4), p;
                      case 4:
                        return r.abrupt("return", r.sent.get(i, e));
                      case 5:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          getAllRestos: function () {
            return o(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), p;
                      case 2:
                        return e.abrupt("return", e.sent.getAll(i));
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          putRestos: function (e) {
            return o(
              regeneratorRuntime.mark(function r() {
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (e.hasOwnProperty("id")) {
                          r.next = 2;
                          break;
                        }
                        return r.abrupt("return");
                      case 2:
                        return (r.next = 4), p;
                      case 4:
                        return r.abrupt("return", r.sent.put(i, e));
                      case 5:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          deleteResto: function (e) {
            return o(
              regeneratorRuntime.mark(function r() {
                return regeneratorRuntime.wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (r.next = 2), p;
                      case 2:
                        return r.abrupt("return", r.sent.delete(i, e));
                      case 3:
                      case "end":
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
        };
      r.a = f;
    },
  },
]);
