(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    8: function (e, n, r) {
      "use strict";
      var t = r(5),
        o = r(0);
      function s(e, n, r, t, o, s, a) {
        try {
          var i = e[s](a),
            c = i.value;
        } catch (e) {
          return void r(e);
        }
        i.done ? n(c) : Promise.resolve(c).then(t, o);
      }
      function a(e) {
        return function () {
          var n = this,
            r = arguments;
          return new Promise(function (t, o) {
            var a = e.apply(n, r);
            function i(e) {
              s(a, t, o, i, c, "next", e);
            }
            function c(e) {
              s(a, t, o, i, c, "throw", e);
            }
            i(void 0);
          });
        };
      }
      var i = {
        render: function () {
          return a(
            regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        "return",
                        '\n     <section class="hero">\n      <h1 class="hero__title"> Welcome <br> to Spicy Heat </h1>\n        <img class="hero__image_home">\n      <a href="#main" class="hero__cta"> DISCOVER </a>\n     </section>\n\n     <section class="resto">\n      <div class="resto__container">\n        <h1 class="resto__label" id="main"> Explore Restaurant & Explore Food </h1>\n        <p class="resto__subtitle"> Here are a few of our favourites: </p>\n        <div id="resto" class="resto__list">\n        </div>\n      </div>\n     </section>\n    '
                      );
                    case 1:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )();
        },
        afterRender: function () {
          return a(
            regeneratorRuntime.mark(function e() {
              var n, r;
              return regeneratorRuntime.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t.a.infoResto();
                    case 2:
                      (n = e.sent),
                        (r = document.querySelector("#resto")),
                        n.forEach(function (e) {
                          r.innerHTML += Object(o.h)(e);
                        });
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )();
        },
      };
      n.a = i;
    },
  },
]);
