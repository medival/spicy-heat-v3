(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    25: function (t, n, e) {
      var i = e(10),
        r = e(26);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, ""]]);
      var a = { insert: "head", singleton: !1 };
      i(r, a);
      t.exports = r.locals || {};
    },
    27: function (t, n, e) {
      var i = e(10),
        r = e(28);
      "string" == typeof (r = r.__esModule ? r.default : r) &&
        (r = [[t.i, r, ""]]);
      var a = { insert: "head", singleton: !1 };
      i(r, a);
      t.exports = r.locals || {};
    },
    28: function (t, n, e) {
      (n = e(11)(!1)).push([
        t.i,
        "@media screen and (max-width: 650px) {\n\t.resto__container {\n    width: 90%;\n    margin: 0 auto;\n  }\n\n\t.hero {\n\t\tmargin-top: 3.8rem;\n\t\theight: 30vh;\n\t}\n\n\t.hero__image_home {\n\t\tbackground: url('/assets/images/heros/hero-image_2-small.jpg');\n\t\tbackground-size: cover;\n\t\tbackground-position: center;\n\t\tbackground-repeat: no-repeat;\n\t}\n\n\t.resto__label {\n\t\tmargin-top: 2em;\n\t}\n\n\t.hero__title {\n\t\tfont-size: x-large;\n\t}\n\n\t.hero__subtitle {\n\t\tfont-size: large;\n\t}\n\n\t.hero__description {\n\t\tfont-size: small;\n\t\twidth: 90vw;\n\t}\n\n  .resto__list {\n    display: grid;\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n\t.resto__list__menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(1, 1fr);\n\t}\n\n\tfigure.resto__menu__food {\n\t\tmin-width: 180px;\n\t}\n\n\t.container__image {\n    display: none;\n\t}\n\n\t.container__info {\n\t\twidth: 90vw;\n\t\tmargin: 2em;\n\t}\n}\n\n@media screen and (min-width: 651px) {\n\t.resto__container {\n    width: 90%;\n    margin: 0 auto;\n  }\n\n\t.app-bar {\n\t\tgrid-template-columns: 1fr auto;\n\t\tpadding: 0px 32px;\n\t}\n\n\t.app-bar .app-bar__brand h1 {\n\t\tfont-size: 1.5em;\n\t}\n\n\t.app-bar .app-bar__menu {\n\t\tdisplay: none;\n\t}\n\n\t.app-bar .app-bar__navigation {\n\t\tposition: static;\n\t\twidth: 100%;\n\t}\n\n\t.app-bar .app-bar__navigation ul li {\n\t\tdisplay: inline-block;\n\t}\n\n\t.app-bar .app-bar__navigation ul li a {\n\t\tdisplay: inline-block;\n\t\twidth: 120px;\n\t\ttext-align: center;\n\t\tmargin: 0;\n\t}\n\n\t.hero {\n\t\tmargin-top: 3.8rem;\n\t\theight: 40vh;\n\t}\n\n\t.hero__title {\n\t\tfont-size: xx-large;\n\t}\n\n\t.hero__image_home {\n\t\tbackground: url('/assets/images/heros/hero-image_2-large.jpg');\n\t\tbackground-size: cover;\n\t\tbackground-position: center;\n\t\tbackground-repeat: no-repeat;\n\t}\n\n\t.hero__subtitle {\n\t\tfont-size: x-large;\n\t}\n\n\t.hero__description {\n\t\tfont-size: small;\n\t}\n\n\t.resto__label {\n\t\tmargin-top: 2em;\n\t}\n\n  .resto__list {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n\t.resto__list__menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n}\n\n@media screen and (min-width: 800px) {\n\t.resto__container {\n    width: 90%;\n    margin: 0 auto;\n  }\n\n\t.app-bar .app-bar__brand h1 {\n\t\tfont-size: 2em;\n\t}\n\n\t.hero__title {\n\t\tfont-size: xx-large;\n\t}\n\n\t.hero__subtitle {\n\t\tfont-size: x-large;\n\t}\n\n\t.hero__description {\n\t\tfont-size: large;\n\t}\n\n\t.resto__list {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n\t.resto__container {\n    margin: 0 auto;\n  }\n\n\t.resto__list__menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(3, 1fr);\n\t}\n\n\tfigure.resto__menu__food {\n\t\tmin-width: 180px;\n\t}\n}\n\n@media screen and (min-width: 850px) {\n\t.resto__list__menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t}\n\n\t.resto__overview__container {\n\t\twidth: 90vw;\n\t}\n}\n\n@media screen and (min-width: 1200px) {\n\t.resto__overview__container {\n\t\twidth: 80vw;\n\t}\n\n\t.resto__container {\n    width: 80%;\n    margin: 0 auto;\n  }\n\n\t.hero {\n\t\tmargin-top: 3.8rem;\n\t\theight: 50vh;\n\t}\n\n\t.resto__label {\n\t\tmargin-top: 0;\n\t}\n\n\t.resto__list {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n\t.resto__list__menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(5, 1fr);\n\t}\n\n\t.resto__overview__container {\n\t\twidth: 70vw;\n\t}\n}\n\n@media screen and (min-width: 1600px) {\n\t.resto__container {\n    width: 80%;\n    margin: 0 auto;\n  }\n\t.resto__list {\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n  }\n\n\t.resto__list__menu {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(auto, 1fr);\n\t}\n\n\tfigure.resto__menu__food {\n\t\tmin-width: 200px;\n\t}\n}",
        "",
      ]),
        (t.exports = n);
    },
  },
]);
