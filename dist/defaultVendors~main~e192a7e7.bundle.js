(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    2: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return v;
      }),
        t.d(n, "b", function () {
          return w;
        });
      var r, o;
      var a = new WeakMap(),
        i = new WeakMap(),
        s = new WeakMap(),
        c = new WeakMap(),
        u = new WeakMap();
      var f = {
        get: function (e, n, t) {
          if (e instanceof IDBTransaction) {
            if ("done" === n) return i.get(e);
            if ("objectStoreNames" === n) return e.objectStoreNames || s.get(e);
            if ("store" === n)
              return t.objectStoreNames[1]
                ? void 0
                : t.objectStore(t.objectStoreNames[0]);
          }
          return w(e[n]);
        },
        set: function (e, n, t) {
          return (e[n] = t), !0;
        },
        has: function (e, n) {
          return (
            (e instanceof IDBTransaction && ("done" === n || "store" === n)) ||
            n in e
          );
        },
      };
      function v(e) {
        f = e(f);
      }
      function p(e) {
        return e !== IDBDatabase.prototype.transaction ||
          "objectStoreNames" in IDBTransaction.prototype
          ? (
              o ||
              (o = [
                IDBCursor.prototype.advance,
                IDBCursor.prototype.continue,
                IDBCursor.prototype.continuePrimaryKey,
              ])
            ).includes(e)
            ? function () {
                for (
                  var n = arguments.length, t = new Array(n), r = 0;
                  r < n;
                  r++
                )
                  t[r] = arguments[r];
                return e.apply(D(this), t), w(a.get(this));
              }
            : function () {
                for (
                  var n = arguments.length, t = new Array(n), r = 0;
                  r < n;
                  r++
                )
                  t[r] = arguments[r];
                return w(e.apply(D(this), t));
              }
          : function (n) {
              for (
                var t = arguments.length,
                  r = new Array(t > 1 ? t - 1 : 0),
                  o = 1;
                o < t;
                o++
              )
                r[o - 1] = arguments[o];
              var a = e.call.apply(e, [D(this), n].concat(r));
              return s.set(a, n.sort ? n.sort() : [n]), w(a);
            };
      }
      function d(e) {
        return "function" == typeof e
          ? p(e)
          : (e instanceof IDBTransaction &&
              (function (e) {
                if (!i.has(e)) {
                  var n = new Promise(function (n, t) {
                    var r = function () {
                        e.removeEventListener("complete", o),
                          e.removeEventListener("error", a),
                          e.removeEventListener("abort", a);
                      },
                      o = function () {
                        n(), r();
                      },
                      a = function () {
                        t(
                          e.error ||
                            new DOMException("AbortError", "AbortError")
                        ),
                          r();
                      };
                    e.addEventListener("complete", o),
                      e.addEventListener("error", a),
                      e.addEventListener("abort", a);
                  });
                  i.set(e, n);
                }
              })(e),
            (n = e),
            (
              r ||
              (r = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction,
              ])
            ).some(function (e) {
              return n instanceof e;
            })
              ? new Proxy(e, f)
              : e);
        var n;
      }
      function w(e) {
        if (e instanceof IDBRequest)
          return (
            (n = e),
            (t = new Promise(function (e, t) {
              var r = function () {
                  n.removeEventListener("success", o),
                    n.removeEventListener("error", a);
                },
                o = function () {
                  e(w(n.result)), r();
                },
                a = function () {
                  t(n.error), r();
                };
              n.addEventListener("success", o), n.addEventListener("error", a);
            }))
              .then(function (e) {
                e instanceof IDBCursor && a.set(e, n);
              })
              .catch(function () {}),
            u.set(t, n),
            t
          );
        var n, t;
        if (c.has(e)) return c.get(e);
        var r = d(e);
        return r !== e && (c.set(e, r), u.set(r, e)), r;
      }
      var D = function (e) {
        return u.get(e);
      };
    },
  },
]);
