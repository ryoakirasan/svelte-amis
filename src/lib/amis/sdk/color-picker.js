/*!node_modules/reactcss/lib/flattenNames.js*/
amis.define("eccf662", function (e, t, u, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.flattenNames = void 0);
  var a = c(e("b35c611")),
    f = c(e("6197242")),
    r = c(e("c8c3d0f")),
    d = c(e("9de79e5"));
  function c(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var i = (t.flattenNames = function e() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      u = [];
    return (
      (0, d.default)(t, function (t) {
        Array.isArray(t)
          ? e(t).map(function (e) {
              return u.push(e);
            })
          : (0, r.default)(t)
            ? (0, f.default)(t, function (e, t) {
                !0 === e && u.push(t), u.push(t + "-" + e);
              })
            : (0, a.default)(t) && u.push(t);
      }),
      u
    );
  });
  t.default = i;
}); /*!node_modules/reactcss/lib/mergeClasses.js*/
amis.define("7a4e958", function (e, t, r, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.mergeClasses = void 0);
  var n = o(e("6197242")),
    u = o(e("da91653")),
    f =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var a in r)
            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
        }
        return e;
      };
  function o(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var l = (t.mergeClasses = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
      r = (e.default && (0, u.default)(e.default)) || {};
    return (
      t.map(function (t) {
        var a = e[t];
        return (
          a &&
            (0, n.default)(a, function (e, t) {
              r[t] || (r[t] = {}), (r[t] = f({}, r[t], a[t]));
            }),
          t
        );
      }),
      r
    );
  });
  t.default = l;
}); /*!node_modules/reactcss/lib/autoprefix.js*/
amis.define("c66606c", function (t, e, r, o) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.autoprefix = void 0);
  var n,
    i = t("6197242"),
    u = (n = i) && n.__esModule ? n : { default: n },
    a =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
        }
        return t;
      };
  var s = {
      borderRadius: function (t) {
        return {
          msBorderRadius: t,
          MozBorderRadius: t,
          OBorderRadius: t,
          WebkitBorderRadius: t,
          borderRadius: t,
        };
      },
      boxShadow: function (t) {
        return {
          msBoxShadow: t,
          MozBoxShadow: t,
          OBoxShadow: t,
          WebkitBoxShadow: t,
          boxShadow: t,
        };
      },
      userSelect: function (t) {
        return {
          WebkitTouchCallout: t,
          KhtmlUserSelect: t,
          MozUserSelect: t,
          msUserSelect: t,
          WebkitUserSelect: t,
          userSelect: t,
        };
      },
      flex: function (t) {
        return {
          WebkitBoxFlex: t,
          MozBoxFlex: t,
          WebkitFlex: t,
          msFlex: t,
          flex: t,
        };
      },
      flexBasis: function (t) {
        return { WebkitFlexBasis: t, flexBasis: t };
      },
      justifyContent: function (t) {
        return { WebkitJustifyContent: t, justifyContent: t };
      },
      transition: function (t) {
        return {
          msTransition: t,
          MozTransition: t,
          OTransition: t,
          WebkitTransition: t,
          transition: t,
        };
      },
      transform: function (t) {
        return {
          msTransform: t,
          MozTransform: t,
          OTransform: t,
          WebkitTransform: t,
          transform: t,
        };
      },
      absolute: function (t) {
        var e = t && t.split(" ");
        return {
          position: "absolute",
          top: e && e[0],
          right: e && e[1],
          bottom: e && e[2],
          left: e && e[3],
        };
      },
      extend: function (t, e) {
        var r = e[t];
        return r || { extend: t };
      },
    },
    f = (e.autoprefix = function (t) {
      var e = {};
      return (
        (0, u.default)(t, function (t, r) {
          var o = {};
          (0, u.default)(t, function (t, e) {
            var r = s[e];
            r ? (o = a({}, o, r(t))) : (o[e] = t);
          }),
            (e[r] = o);
        }),
        e
      );
    });
  e.default = f;
}); /*!node_modules/reactcss/lib/components/hover.js*/
amis.define("570ae09", function (e, t, n, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.hover = void 0);
  var o,
    a =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
    u = e("8d5e11f"),
    c = (o = u) && o.__esModule ? o : { default: o };
  function f(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
  }
  function s(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t,
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var l = (t.hover = function (e) {
    var t =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return (function (n) {
      function r() {
        var n, o, u;
        f(this, r);
        for (var s = arguments.length, l = Array(s), p = 0; p < s; p++)
          l[p] = arguments[p];
        return (
          (o = u =
            i(
              this,
              (n = r.__proto__ || Object.getPrototypeOf(r)).call.apply(
                n,
                [this].concat(l),
              ),
            )),
          (u.state = { hover: !1 }),
          (u.handleMouseOver = function () {
            return u.setState({ hover: !0 });
          }),
          (u.handleMouseOut = function () {
            return u.setState({ hover: !1 });
          }),
          (u.render = function () {
            return c.default.createElement(
              t,
              { onMouseOver: u.handleMouseOver, onMouseOut: u.handleMouseOut },
              c.default.createElement(e, a({}, u.props, u.state)),
            );
          }),
          i(u, o)
        );
      }
      return s(r, n), r;
    })(c.default.Component);
  });
  t.default = l;
}); /*!node_modules/reactcss/lib/components/active.js*/
amis.define("424e6f7", function (e, t, n, o) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.active = void 0);
  var r,
    a =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      },
    u = e("8d5e11f"),
    c = (r = u) && r.__esModule ? r : { default: r };
  function i(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function f(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
  }
  function s(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t,
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  var l = (t.active = function (e) {
    var t =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return (function (n) {
      function o() {
        var n, r, u;
        i(this, o);
        for (var s = arguments.length, l = Array(s), p = 0; p < s; p++)
          l[p] = arguments[p];
        return (
          (r = u =
            f(
              this,
              (n = o.__proto__ || Object.getPrototypeOf(o)).call.apply(
                n,
                [this].concat(l),
              ),
            )),
          (u.state = { active: !1 }),
          (u.handleMouseDown = function () {
            return u.setState({ active: !0 });
          }),
          (u.handleMouseUp = function () {
            return u.setState({ active: !1 });
          }),
          (u.render = function () {
            return c.default.createElement(
              t,
              { onMouseDown: u.handleMouseDown, onMouseUp: u.handleMouseUp },
              c.default.createElement(e, a({}, u.props, u.state)),
            );
          }),
          f(u, r)
        );
      }
      return s(o, n), o;
    })(c.default.Component);
  });
  t.default = l;
}); /*!node_modules/reactcss/lib/loop.js*/
amis.define("dd73880", function (e, t, d, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.default = function (e, t) {
    var d = {},
      i = function (e) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        d[e] = t;
      };
    return (
      0 === e && i("first-child"),
      e === t - 1 && i("last-child"),
      (0 === e || e % 2 == 0) && i("even"),
      1 === Math.abs(e % 2) && i("odd"),
      i("nth-child", e),
      d
    );
  };
}); /*!node_modules/reactcss/lib/index.js*/
amis.define("1536f14", function (e, a, t, d) {
  "use strict";
  Object.defineProperty(a, "__esModule", { value: !0 }),
    (a.ReactCSS = a.loop = a.handleActive = a.handleHover = a.hover = void 0);
  var l = c(e("eccf662")),
    f = c(e("7a4e958")),
    r = c(e("c66606c")),
    u = c(e("570ae09")),
    o = c(e("424e6f7")),
    n = c(e("dd73880"));
  function c(e) {
    return e && e.__esModule ? e : { default: e };
  }
  (a.hover = u.default),
    (a.handleHover = u.default),
    (a.handleActive = o.default),
    (a.loop = n.default);
  var v = (a.ReactCSS = function (e) {
    for (
      var a = arguments.length, t = Array(a > 1 ? a - 1 : 0), d = 1;
      d < a;
      d++
    )
      t[d - 1] = arguments[d];
    var u = (0, l.default)(t),
      o = (0, f.default)(e, u);
    return (0, r.default)(o);
  });
  a.default = v;
}); /*!node_modules/react-color/lib/helpers/alpha.js*/
amis.define("a64fa10", function (e, t, n, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.calculateChange = function (e, t, n, a, i) {
    var r = i.clientWidth,
      u = i.clientHeight,
      o = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
      l = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
      g = o - (i.getBoundingClientRect().left + window.pageXOffset),
      c = l - (i.getBoundingClientRect().top + window.pageYOffset);
    if ("vertical" === n) {
      var f = void 0;
      if (
        ((f = c < 0 ? 0 : c > u ? 1 : Math.round((100 * c) / u) / 100),
        t.a !== f)
      )
        return { h: t.h, s: t.s, l: t.l, a: f, source: "rgb" };
    } else {
      var s = void 0;
      if (a !== (s = g < 0 ? 0 : g > r ? 1 : Math.round((100 * g) / r) / 100))
        return { h: t.h, s: t.s, l: t.l, a: s, source: "rgb" };
    }
    return null;
  };
}); /*!node_modules/react-color/lib/helpers/checkboard.js*/
amis.define("95635c3", function (e, t, n, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var l = {},
    i = (t.render = function (e, t, n, r) {
      if ("undefined" == typeof document && !r) return null;
      var l = r ? new r() : document.createElement("canvas");
      (l.width = 2 * n), (l.height = 2 * n);
      var i = l.getContext("2d");
      return i
        ? ((i.fillStyle = e),
          i.fillRect(0, 0, l.width, l.height),
          (i.fillStyle = t),
          i.fillRect(0, 0, n, n),
          i.translate(n, n),
          i.fillRect(0, 0, n, n),
          l.toDataURL())
        : null;
    });
  t.get = function (e, t, n, r) {
    var u = e + "-" + t + "-" + n + (r ? "-server" : "");
    if (l[u]) return l[u];
    var a = i(e, t, n, r);
    return (l[u] = a), a;
  };
}); /*!node_modules/react-color/lib/components/common/Checkboard.js*/
amis.define("f3e39d7", function (e, r, t, a) {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.Checkboard = void 0);
  var n =
      Object.assign ||
      function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var a in t)
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        }
        return e;
      },
    d = e("8d5e11f"),
    o = i(d),
    l = i(e("1536f14")),
    u = (function (e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e)
        for (var t in e)
          Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
      return (r.default = e), r;
    })(e("95635c3"));
  function i(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var s = (r.Checkboard = function (e) {
    var r = e.white,
      t = e.grey,
      a = e.size,
      i = e.renderers,
      s = e.borderRadius,
      f = e.boxShadow,
      c = e.children,
      p = (0, l.default)({
        default: {
          grid: {
            borderRadius: s,
            boxShadow: f,
            absolute: "0px 0px 0px 0px",
            background: "url(" + u.get(r, t, a, i.canvas) + ") center left",
          },
        },
      });
    return (0, d.isValidElement)(c)
      ? o.default.cloneElement(
          c,
          n({}, c.props, { style: n({}, c.props.style, p.grid) }),
        )
      : o.default.createElement("div", { style: p.grid });
  });
  (s.defaultProps = {
    size: 8,
    white: "transparent",
    grey: "rgba(0,0,0,.08)",
    renderers: {},
  }),
    (r.default = s);
}); /*!node_modules/react-color/lib/components/common/Alpha.js*/
amis.define("cb44009", function (e, t, n, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.Alpha = void 0);
  var o =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
    a = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    i = e("8d5e11f"),
    s = d(i),
    u = d(e("1536f14")),
    p = (function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    })(e("a64fa10")),
    l = d(e("f3e39d7"));
  function d(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function c(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function f(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
  }
  var h = (t.Alpha = (function (e) {
    function t() {
      var e, n, r;
      c(this, t);
      for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
        a[i] = arguments[i];
      return (
        (n = r =
          f(
            this,
            (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              e,
              [this].concat(a),
            ),
          )),
        (r.handleChange = function (e) {
          var t = p.calculateChange(
            e,
            r.props.hsl,
            r.props.direction,
            r.props.a,
            r.container,
          );
          t && "function" == typeof r.props.onChange && r.props.onChange(t, e);
        }),
        (r.handleMouseDown = function (e) {
          r.handleChange(e),
            window.addEventListener("mousemove", r.handleChange),
            window.addEventListener("mouseup", r.handleMouseUp);
        }),
        (r.handleMouseUp = function () {
          r.unbindEventListeners();
        }),
        (r.unbindEventListeners = function () {
          window.removeEventListener("mousemove", r.handleChange),
            window.removeEventListener("mouseup", r.handleMouseUp);
        }),
        f(r, n)
      );
    }
    return (
      (function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(t, e),
      a(t, [
        {
          key: "componentWillUnmount",
          value: function () {
            this.unbindEventListeners();
          },
        },
        {
          key: "render",
          value: function () {
            var e = this,
              t = this.props.rgb,
              n = (0, u.default)(
                {
                  default: {
                    alpha: {
                      absolute: "0px 0px 0px 0px",
                      borderRadius: this.props.radius,
                    },
                    checkboard: {
                      absolute: "0px 0px 0px 0px",
                      overflow: "hidden",
                      borderRadius: this.props.radius,
                    },
                    gradient: {
                      absolute: "0px 0px 0px 0px",
                      background:
                        "linear-gradient(to right, rgba(" +
                        t.r +
                        "," +
                        t.g +
                        "," +
                        t.b +
                        ", 0) 0%,\n           rgba(" +
                        t.r +
                        "," +
                        t.g +
                        "," +
                        t.b +
                        ", 1) 100%)",
                      boxShadow: this.props.shadow,
                      borderRadius: this.props.radius,
                    },
                    container: {
                      position: "relative",
                      height: "100%",
                      margin: "0 3px",
                    },
                    pointer: { position: "absolute", left: 100 * t.a + "%" },
                    slider: {
                      width: "4px",
                      borderRadius: "1px",
                      height: "8px",
                      boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                      background: "#fff",
                      marginTop: "1px",
                      transform: "translateX(-2px)",
                    },
                  },
                  vertical: {
                    gradient: {
                      background:
                        "linear-gradient(to bottom, rgba(" +
                        t.r +
                        "," +
                        t.g +
                        "," +
                        t.b +
                        ", 0) 0%,\n           rgba(" +
                        t.r +
                        "," +
                        t.g +
                        "," +
                        t.b +
                        ", 1) 100%)",
                    },
                    pointer: { left: 0, top: 100 * t.a + "%" },
                  },
                  overwrite: o({}, this.props.style),
                },
                {
                  vertical: "vertical" === this.props.direction,
                  overwrite: !0,
                },
              );
            return s.default.createElement(
              "div",
              { style: n.alpha },
              s.default.createElement(
                "div",
                { style: n.checkboard },
                s.default.createElement(l.default, {
                  renderers: this.props.renderers,
                }),
              ),
              s.default.createElement("div", { style: n.gradient }),
              s.default.createElement(
                "div",
                {
                  style: n.container,
                  ref: function (t) {
                    return (e.container = t);
                  },
                  onMouseDown: this.handleMouseDown,
                  onTouchMove: this.handleChange,
                  onTouchStart: this.handleChange,
                },
                s.default.createElement(
                  "div",
                  { style: n.pointer },
                  this.props.pointer
                    ? s.default.createElement(this.props.pointer, this.props)
                    : s.default.createElement("div", { style: n.slider }),
                ),
              ),
            );
          },
        },
      ]),
      t
    );
  })(i.PureComponent || i.Component));
  t.default = h;
}); /*!node_modules/react-color/lib/components/common/EditableInput.js*/
amis.define("ba93051", function (e, t, n, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.EditableInput = void 0);
  var a = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    o = e("8d5e11f"),
    l = s(o),
    u = s(e("1536f14"));
  function s(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var i = [38, 40],
    p = 1,
    h = (t.EditableInput = (function (e) {
      function t(e) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, t);
        var n = (function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return (
          (n.handleBlur = function () {
            n.state.blurValue &&
              n.setState({ value: n.state.blurValue, blurValue: null });
          }),
          (n.handleChange = function (e) {
            n.setUpdatedValue(e.target.value, e);
          }),
          (n.handleKeyDown = function (e) {
            var t,
              r = (function (e) {
                return Number(String(e).replace(/%/g, ""));
              })(e.target.value);
            if (!isNaN(r) && ((t = e.keyCode), i.indexOf(t) > -1)) {
              var a = n.getArrowOffset(),
                o = 38 === e.keyCode ? r + a : r - a;
              n.setUpdatedValue(o, e);
            }
          }),
          (n.handleDrag = function (e) {
            if (n.props.dragLabel) {
              var t = Math.round(n.props.value + e.movementX);
              t >= 0 &&
                t <= n.props.dragMax &&
                n.props.onChange &&
                n.props.onChange(n.getValueObjectWithLabel(t), e);
            }
          }),
          (n.handleMouseDown = function (e) {
            n.props.dragLabel &&
              (e.preventDefault(),
              n.handleDrag(e),
              window.addEventListener("mousemove", n.handleDrag),
              window.addEventListener("mouseup", n.handleMouseUp));
          }),
          (n.handleMouseUp = function () {
            n.unbindEventListeners();
          }),
          (n.unbindEventListeners = function () {
            window.removeEventListener("mousemove", n.handleDrag),
              window.removeEventListener("mouseup", n.handleMouseUp);
          }),
          (n.state = {
            value: String(e.value).toUpperCase(),
            blurValue: String(e.value).toUpperCase(),
          }),
          (n.inputId = "rc-editable-input-" + p++),
          n
        );
      }
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t,
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, e),
        a(t, [
          {
            key: "componentDidUpdate",
            value: function (e, t) {
              this.props.value === this.state.value ||
                (e.value === this.props.value &&
                  t.value === this.state.value) ||
                (this.input === document.activeElement
                  ? this.setState({
                      blurValue: String(this.props.value).toUpperCase(),
                    })
                  : this.setState({
                      value: String(this.props.value).toUpperCase(),
                      blurValue:
                        !this.state.blurValue &&
                        String(this.props.value).toUpperCase(),
                    }));
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.unbindEventListeners();
            },
          },
          {
            key: "getValueObjectWithLabel",
            value: function (e) {
              return (function (e, t, n) {
                return (
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = n),
                  e
                );
              })({}, this.props.label, e);
            },
          },
          {
            key: "getArrowOffset",
            value: function () {
              return this.props.arrowOffset || 1;
            },
          },
          {
            key: "setUpdatedValue",
            value: function (e, t) {
              var n = this.props.label ? this.getValueObjectWithLabel(e) : e;
              this.props.onChange && this.props.onChange(n, t),
                this.setState({ value: e });
            },
          },
          {
            key: "render",
            value: function () {
              var e = this,
                t = (0, u.default)(
                  {
                    default: { wrap: { position: "relative" } },
                    "user-override": {
                      wrap:
                        this.props.style && this.props.style.wrap
                          ? this.props.style.wrap
                          : {},
                      input:
                        this.props.style && this.props.style.input
                          ? this.props.style.input
                          : {},
                      label:
                        this.props.style && this.props.style.label
                          ? this.props.style.label
                          : {},
                    },
                    "dragLabel-true": { label: { cursor: "ew-resize" } },
                  },
                  { "user-override": !0 },
                  this.props,
                );
              return l.default.createElement(
                "div",
                { style: t.wrap },
                l.default.createElement("input", {
                  id: this.inputId,
                  style: t.input,
                  ref: function (t) {
                    return (e.input = t);
                  },
                  value: this.state.value,
                  onKeyDown: this.handleKeyDown,
                  onChange: this.handleChange,
                  onBlur: this.handleBlur,
                  placeholder: this.props.placeholder,
                  spellCheck: "false",
                }),
                this.props.label && !this.props.hideLabel
                  ? l.default.createElement(
                      "label",
                      {
                        htmlFor: this.inputId,
                        style: t.label,
                        onMouseDown: this.handleMouseDown,
                      },
                      this.props.label,
                    )
                  : null,
              );
            },
          },
        ]),
        t
      );
    })(o.PureComponent || o.Component));
  t.default = h;
}); /*!node_modules/react-color/lib/helpers/hue.js*/
amis.define("74f777d", function (e, t, i, l) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.calculateChange = function (e, t, i, l) {
    var n = l.clientWidth,
      a = l.clientHeight,
      s = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
      f = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
      u = s - (l.getBoundingClientRect().left + window.pageXOffset),
      o = f - (l.getBoundingClientRect().top + window.pageYOffset);
    if ("vertical" === t) {
      var r = void 0;
      if (o < 0) r = 359;
      else if (o > a) r = 0;
      else {
        r = (360 * ((-100 * o) / a + 100)) / 100;
      }
      if (i.h !== r) return { h: r, s: i.s, l: i.l, a: i.a, source: "hsl" };
    } else {
      var c = void 0;
      if (u < 0) c = 0;
      else if (u > n) c = 359;
      else {
        c = (360 * ((100 * u) / n)) / 100;
      }
      if (i.h !== c) return { h: c, s: i.s, l: i.l, a: i.a, source: "hsl" };
    }
    return null;
  };
}); /*!node_modules/react-color/lib/components/common/Hue.js*/
amis.define("07dc481", function (e, n, t, o) {
  "use strict";
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.Hue = void 0);
  var r = (function () {
      function e(e, n) {
        for (var t = 0; t < n.length; t++) {
          var o = n[t];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      return function (n, t, o) {
        return t && e(n.prototype, t), o && e(n, o), n;
      };
    })(),
    i = e("8d5e11f"),
    a = s(i),
    f = s(e("1536f14")),
    u = (function (e) {
      if (e && e.__esModule) return e;
      var n = {};
      if (null != e)
        for (var t in e)
          Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
      return (n.default = e), n;
    })(e("74f777d"));
  function s(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function l(e, n) {
    if (!(e instanceof n))
      throw new TypeError("Cannot call a class as a function");
  }
  function p(e, n) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return !n || ("object" != typeof n && "function" != typeof n) ? e : n;
  }
  var d = (n.Hue = (function (e) {
    function n() {
      var e, t, o;
      l(this, n);
      for (var r = arguments.length, i = Array(r), a = 0; a < r; a++)
        i[a] = arguments[a];
      return (
        (t = o =
          p(
            this,
            (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(
              e,
              [this].concat(i),
            ),
          )),
        (o.handleChange = function (e) {
          var n = u.calculateChange(
            e,
            o.props.direction,
            o.props.hsl,
            o.container,
          );
          n && "function" == typeof o.props.onChange && o.props.onChange(n, e);
        }),
        (o.handleMouseDown = function (e) {
          o.handleChange(e),
            window.addEventListener("mousemove", o.handleChange),
            window.addEventListener("mouseup", o.handleMouseUp);
        }),
        (o.handleMouseUp = function () {
          o.unbindEventListeners();
        }),
        p(o, t)
      );
    }
    return (
      (function (e, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof n,
          );
        (e.prototype = Object.create(n && n.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          n &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, n)
              : (e.__proto__ = n));
      })(n, e),
      r(n, [
        {
          key: "componentWillUnmount",
          value: function () {
            this.unbindEventListeners();
          },
        },
        {
          key: "unbindEventListeners",
          value: function () {
            window.removeEventListener("mousemove", this.handleChange),
              window.removeEventListener("mouseup", this.handleMouseUp);
          },
        },
        {
          key: "render",
          value: function () {
            var e = this,
              n = this.props.direction,
              t = void 0 === n ? "horizontal" : n,
              o = (0, f.default)(
                {
                  default: {
                    hue: {
                      absolute: "0px 0px 0px 0px",
                      borderRadius: this.props.radius,
                      boxShadow: this.props.shadow,
                    },
                    container: {
                      padding: "0 2px",
                      position: "relative",
                      height: "100%",
                      borderRadius: this.props.radius,
                    },
                    pointer: {
                      position: "absolute",
                      left: (100 * this.props.hsl.h) / 360 + "%",
                    },
                    slider: {
                      marginTop: "1px",
                      width: "4px",
                      borderRadius: "1px",
                      height: "8px",
                      boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                      background: "#fff",
                      transform: "translateX(-2px)",
                    },
                  },
                  vertical: {
                    pointer: {
                      left: "0px",
                      top: (-100 * this.props.hsl.h) / 360 + 100 + "%",
                    },
                  },
                },
                { vertical: "vertical" === t },
              );
            return a.default.createElement(
              "div",
              { style: o.hue },
              a.default.createElement(
                "div",
                {
                  className: "hue-" + t,
                  style: o.container,
                  ref: function (n) {
                    return (e.container = n);
                  },
                  onMouseDown: this.handleMouseDown,
                  onTouchMove: this.handleChange,
                  onTouchStart: this.handleChange,
                },
                a.default.createElement(
                  "style",
                  null,
                  "\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          ",
                ),
                a.default.createElement(
                  "div",
                  { style: o.pointer },
                  this.props.pointer
                    ? a.default.createElement(this.props.pointer, this.props)
                    : a.default.createElement("div", { style: o.slider }),
                ),
              ),
            );
          },
        },
      ]),
      n
    );
  })(i.PureComponent || i.Component));
  n.default = d;
}); /*!node_modules/react-color/lib/components/common/Raised.js*/
amis.define("1151e64", function (e, a, t, d) {
  "use strict";
  Object.defineProperty(a, "__esModule", { value: !0 }), (a.Raised = void 0);
  var r = u(e("8d5e11f")),
    p = u(e("5ff1f4a")),
    o = u(e("1536f14")),
    b = u(e("db13e32"));
  function u(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var l = (a.Raised = function (e) {
    var a = e.zDepth,
      t = e.radius,
      d = e.background,
      p = e.children,
      u = e.styles,
      l = void 0 === u ? {} : u,
      x = (0, o.default)(
        (0, b.default)(
          {
            default: {
              wrap: { position: "relative", display: "inline-block" },
              content: { position: "relative" },
              bg: {
                absolute: "0px 0px 0px 0px",
                boxShadow: "0 " + a + "px " + 4 * a + "px rgba(0,0,0,.24)",
                borderRadius: t,
                background: d,
              },
            },
            "zDepth-0": { bg: { boxShadow: "none" } },
            "zDepth-1": {
              bg: {
                boxShadow:
                  "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)",
              },
            },
            "zDepth-2": {
              bg: {
                boxShadow:
                  "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)",
              },
            },
            "zDepth-3": {
              bg: {
                boxShadow:
                  "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)",
              },
            },
            "zDepth-4": {
              bg: {
                boxShadow:
                  "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)",
              },
            },
            "zDepth-5": {
              bg: {
                boxShadow:
                  "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)",
              },
            },
            square: { bg: { borderRadius: "0" } },
            circle: { bg: { borderRadius: "50%" } },
          },
          l,
        ),
        { "zDepth-1": 1 === a },
      );
    return r.default.createElement(
      "div",
      { style: x.wrap },
      r.default.createElement("div", { style: x.bg }),
      r.default.createElement("div", { style: x.content }, p),
    );
  });
  (l.propTypes = {
    background: p.default.string,
    zDepth: p.default.oneOf([0, 1, 2, 3, 4, 5]),
    radius: p.default.number,
    styles: p.default.object,
  }),
    (l.defaultProps = { background: "#fff", zDepth: 1, radius: 2, styles: {} }),
    (a.default = l);
}); /*!node_modules/react-color/lib/helpers/saturation.js*/
amis.define("80f07e8", function (e, t, n, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.calculateChange = function (e, t, n) {
    var a = n.getBoundingClientRect(),
      g = a.width,
      i = a.height,
      o = "number" == typeof e.pageX ? e.pageX : e.touches[0].pageX,
      u = "number" == typeof e.pageY ? e.pageY : e.touches[0].pageY,
      c = o - (n.getBoundingClientRect().left + window.pageXOffset),
      f = u - (n.getBoundingClientRect().top + window.pageYOffset);
    c < 0 ? (c = 0) : c > g && (c = g), f < 0 ? (f = 0) : f > i && (f = i);
    var p = c / g,
      s = 1 - f / i;
    return { h: t.h, s: p, v: s, a: t.a, source: "hsv" };
  };
}); /*!node_modules/react-color/lib/components/common/Saturation.js*/
amis.define("288d044", function (e, t, n, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.Saturation = void 0);
  var o = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    a = e("8d5e11f"),
    i = p(a),
    s = p(e("1536f14")),
    u = p(e("2181401")),
    l = (function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return (t.default = e), t;
    })(e("80f07e8"));
  function p(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var c = (t.Saturation = (function (e) {
    function t(e) {
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, t);
      var n = (function (e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
      return (
        (n.handleChange = function (e) {
          "function" == typeof n.props.onChange &&
            n.throttle(
              n.props.onChange,
              l.calculateChange(e, n.props.hsl, n.container),
              e,
            );
        }),
        (n.handleMouseDown = function (e) {
          n.handleChange(e);
          var t = n.getContainerRenderWindow();
          t.addEventListener("mousemove", n.handleChange),
            t.addEventListener("mouseup", n.handleMouseUp);
        }),
        (n.handleMouseUp = function () {
          n.unbindEventListeners();
        }),
        (n.throttle = (0, u.default)(function (e, t, n) {
          e(t, n);
        }, 50)),
        n
      );
    }
    return (
      (function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(t, e),
      o(t, [
        {
          key: "componentWillUnmount",
          value: function () {
            this.throttle.cancel(), this.unbindEventListeners();
          },
        },
        {
          key: "getContainerRenderWindow",
          value: function () {
            for (
              var e = this.container, t = window;
              !t.document.contains(e) && t.parent !== t;

            )
              t = t.parent;
            return t;
          },
        },
        {
          key: "unbindEventListeners",
          value: function () {
            var e = this.getContainerRenderWindow();
            e.removeEventListener("mousemove", this.handleChange),
              e.removeEventListener("mouseup", this.handleMouseUp);
          },
        },
        {
          key: "render",
          value: function () {
            var e = this,
              t = this.props.style || {},
              n = t.color,
              r = t.white,
              o = t.black,
              a = t.pointer,
              u = t.circle,
              l = (0, s.default)(
                {
                  default: {
                    color: {
                      absolute: "0px 0px 0px 0px",
                      background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
                      borderRadius: this.props.radius,
                    },
                    white: {
                      absolute: "0px 0px 0px 0px",
                      borderRadius: this.props.radius,
                    },
                    black: {
                      absolute: "0px 0px 0px 0px",
                      boxShadow: this.props.shadow,
                      borderRadius: this.props.radius,
                    },
                    pointer: {
                      position: "absolute",
                      top: -100 * this.props.hsv.v + 100 + "%",
                      left: 100 * this.props.hsv.s + "%",
                      cursor: "default",
                    },
                    circle: {
                      width: "4px",
                      height: "4px",
                      boxShadow:
                        "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
                      borderRadius: "50%",
                      cursor: "hand",
                      transform: "translate(-2px, -2px)",
                    },
                  },
                  custom: {
                    color: n,
                    white: r,
                    black: o,
                    pointer: a,
                    circle: u,
                  },
                },
                { custom: !!this.props.style },
              );
            return i.default.createElement(
              "div",
              {
                style: l.color,
                ref: function (t) {
                  return (e.container = t);
                },
                onMouseDown: this.handleMouseDown,
                onTouchMove: this.handleChange,
                onTouchStart: this.handleChange,
              },
              i.default.createElement(
                "style",
                null,
                "\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        ",
              ),
              i.default.createElement(
                "div",
                { style: l.white, className: "saturation-white" },
                i.default.createElement("div", {
                  style: l.black,
                  className: "saturation-black",
                }),
                i.default.createElement(
                  "div",
                  { style: l.pointer },
                  this.props.pointer
                    ? i.default.createElement(this.props.pointer, this.props)
                    : i.default.createElement("div", { style: l.circle }),
                ),
              ),
            );
          },
        },
      ]),
      t
    );
  })(a.PureComponent || a.Component));
  t.default = c;
}); /*!node_modules/tinycolor2/cjs/tinycolor.js*/
amis.define("1aac2af", function (t, r, e, a) {
  var n, i;
  (n = this),
    (i = function () {
      "use strict";
      function t(r) {
        return (
          (t =
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
                }),
          t(r)
        );
      }
      var r = /^\s+/,
        e = /\s+$/;
      function a(n, i) {
        if (((i = i || {}), (n = n || "") instanceof a)) return n;
        if (!(this instanceof a)) return new a(n, i);
        var o = (function (a) {
          var n,
            i,
            o,
            h = { r: 0, g: 0, b: 0 },
            s = 1,
            f = null,
            u = null,
            l = null,
            c = !1,
            d = !1;
          return (
            "string" == typeof a &&
              (a = (function (t) {
                t = t.replace(r, "").replace(e, "").toLowerCase();
                var a,
                  n = !1;
                if (y[t]) (t = y[t]), (n = !0);
                else if ("transparent" == t)
                  return { r: 0, g: 0, b: 0, a: 0, format: "name" };
                return (a = T.rgb.exec(t))
                  ? { r: a[1], g: a[2], b: a[3] }
                  : (a = T.rgba.exec(t))
                    ? { r: a[1], g: a[2], b: a[3], a: a[4] }
                    : (a = T.hsl.exec(t))
                      ? { h: a[1], s: a[2], l: a[3] }
                      : (a = T.hsla.exec(t))
                        ? { h: a[1], s: a[2], l: a[3], a: a[4] }
                        : (a = T.hsv.exec(t))
                          ? { h: a[1], s: a[2], v: a[3] }
                          : (a = T.hsva.exec(t))
                            ? { h: a[1], s: a[2], v: a[3], a: a[4] }
                            : (a = T.hex8.exec(t))
                              ? {
                                  r: w(a[1]),
                                  g: w(a[2]),
                                  b: w(a[3]),
                                  a: F(a[4]),
                                  format: n ? "name" : "hex8",
                                }
                              : (a = T.hex6.exec(t))
                                ? {
                                    r: w(a[1]),
                                    g: w(a[2]),
                                    b: w(a[3]),
                                    format: n ? "name" : "hex",
                                  }
                                : (a = T.hex4.exec(t))
                                  ? {
                                      r: w(a[1] + "" + a[1]),
                                      g: w(a[2] + "" + a[2]),
                                      b: w(a[3] + "" + a[3]),
                                      a: F(a[4] + "" + a[4]),
                                      format: n ? "name" : "hex8",
                                    }
                                  : !!(a = T.hex3.exec(t)) && {
                                      r: w(a[1] + "" + a[1]),
                                      g: w(a[2] + "" + a[2]),
                                      b: w(a[3] + "" + a[3]),
                                      format: n ? "name" : "hex",
                                    };
              })(a)),
            "object" == t(a) &&
              (E(a.r) && E(a.g) && E(a.b)
                ? ((n = a.r),
                  (i = a.g),
                  (o = a.b),
                  (h = {
                    r: 255 * A(n, 255),
                    g: 255 * A(i, 255),
                    b: 255 * A(o, 255),
                  }),
                  (c = !0),
                  (d = "%" === String(a.r).substr(-1) ? "prgb" : "rgb"))
                : E(a.h) && E(a.s) && E(a.v)
                  ? ((f = H(a.s)),
                    (u = H(a.v)),
                    (h = (function (t, r, e) {
                      (t = 6 * A(t, 360)), (r = A(r, 100)), (e = A(e, 100));
                      var a = Math.floor(t),
                        n = t - a,
                        i = e * (1 - r),
                        o = e * (1 - n * r),
                        h = e * (1 - (1 - n) * r),
                        s = a % 6;
                      return {
                        r: 255 * [e, o, i, i, h, e][s],
                        g: 255 * [h, e, e, o, i, i][s],
                        b: 255 * [i, i, h, e, e, o][s],
                      };
                    })(a.h, f, u)),
                    (c = !0),
                    (d = "hsv"))
                  : E(a.h) &&
                    E(a.s) &&
                    E(a.l) &&
                    ((f = H(a.s)),
                    (l = H(a.l)),
                    (h = (function (t, r, e) {
                      var a, n, i;
                      function o(t, r, e) {
                        return (
                          e < 0 && (e += 1),
                          e > 1 && (e -= 1),
                          e < 1 / 6
                            ? t + 6 * (r - t) * e
                            : e < 0.5
                              ? r
                              : e < 2 / 3
                                ? t + (r - t) * (2 / 3 - e) * 6
                                : t
                        );
                      }
                      if (
                        ((t = A(t, 360)),
                        (r = A(r, 100)),
                        (e = A(e, 100)),
                        0 === r)
                      )
                        a = n = i = e;
                      else {
                        var h = e < 0.5 ? e * (1 + r) : e + r - e * r,
                          s = 2 * e - h;
                        (a = o(s, h, t + 1 / 3)),
                          (n = o(s, h, t)),
                          (i = o(s, h, t - 1 / 3));
                      }
                      return { r: 255 * a, g: 255 * n, b: 255 * i };
                    })(a.h, f, l)),
                    (c = !0),
                    (d = "hsl")),
              a.hasOwnProperty("a") && (s = a.a)),
            (s = x(s)),
            {
              ok: c,
              format: a.format || d,
              r: Math.min(255, Math.max(h.r, 0)),
              g: Math.min(255, Math.max(h.g, 0)),
              b: Math.min(255, Math.max(h.b, 0)),
              a: s,
            }
          );
        })(n);
        (this._originalInput = n),
          (this._r = o.r),
          (this._g = o.g),
          (this._b = o.b),
          (this._a = o.a),
          (this._roundA = Math.round(100 * this._a) / 100),
          (this._format = i.format || o.format),
          (this._gradientType = i.gradientType),
          this._r < 1 && (this._r = Math.round(this._r)),
          this._g < 1 && (this._g = Math.round(this._g)),
          this._b < 1 && (this._b = Math.round(this._b)),
          (this._ok = o.ok);
      }
      function n(t, r, e) {
        (t = A(t, 255)), (r = A(r, 255)), (e = A(e, 255));
        var a,
          n,
          i = Math.max(t, r, e),
          o = Math.min(t, r, e),
          h = (i + o) / 2;
        if (i == o) a = n = 0;
        else {
          var s = i - o;
          switch (((n = h > 0.5 ? s / (2 - i - o) : s / (i + o)), i)) {
            case t:
              a = (r - e) / s + (r < e ? 6 : 0);
              break;
            case r:
              a = (e - t) / s + 2;
              break;
            case e:
              a = (t - r) / s + 4;
          }
          a /= 6;
        }
        return { h: a, s: n, l: h };
      }
      function i(t, r, e) {
        (t = A(t, 255)), (r = A(r, 255)), (e = A(e, 255));
        var a,
          n,
          i = Math.max(t, r, e),
          o = Math.min(t, r, e),
          h = i,
          s = i - o;
        if (((n = 0 === i ? 0 : s / i), i == o)) a = 0;
        else {
          switch (i) {
            case t:
              a = (r - e) / s + (r < e ? 6 : 0);
              break;
            case r:
              a = (e - t) / s + 2;
              break;
            case e:
              a = (t - r) / s + 4;
          }
          a /= 6;
        }
        return { h: a, s: n, v: h };
      }
      function o(t, r, e, a) {
        var n = [
          S(Math.round(t).toString(16)),
          S(Math.round(r).toString(16)),
          S(Math.round(e).toString(16)),
        ];
        return a &&
          n[0].charAt(0) == n[0].charAt(1) &&
          n[1].charAt(0) == n[1].charAt(1) &&
          n[2].charAt(0) == n[2].charAt(1)
          ? n[0].charAt(0) + n[1].charAt(0) + n[2].charAt(0)
          : n.join("");
      }
      function h(t, r, e, a) {
        return [
          S(R(a)),
          S(Math.round(t).toString(16)),
          S(Math.round(r).toString(16)),
          S(Math.round(e).toString(16)),
        ].join("");
      }
      function s(t, r) {
        r = 0 === r ? 0 : r || 10;
        var e = a(t).toHsl();
        return (e.s -= r / 100), (e.s = k(e.s)), a(e);
      }
      function f(t, r) {
        r = 0 === r ? 0 : r || 10;
        var e = a(t).toHsl();
        return (e.s += r / 100), (e.s = k(e.s)), a(e);
      }
      function u(t) {
        return a(t).desaturate(100);
      }
      function l(t, r) {
        r = 0 === r ? 0 : r || 10;
        var e = a(t).toHsl();
        return (e.l += r / 100), (e.l = k(e.l)), a(e);
      }
      function c(t, r) {
        r = 0 === r ? 0 : r || 10;
        var e = a(t).toRgb();
        return (
          (e.r = Math.max(
            0,
            Math.min(255, e.r - Math.round((-r / 100) * 255)),
          )),
          (e.g = Math.max(
            0,
            Math.min(255, e.g - Math.round((-r / 100) * 255)),
          )),
          (e.b = Math.max(
            0,
            Math.min(255, e.b - Math.round((-r / 100) * 255)),
          )),
          a(e)
        );
      }
      function d(t, r) {
        r = 0 === r ? 0 : r || 10;
        var e = a(t).toHsl();
        return (e.l -= r / 100), (e.l = k(e.l)), a(e);
      }
      function g(t, r) {
        var e = a(t).toHsl(),
          n = (e.h + r) % 360;
        return (e.h = n < 0 ? 360 + n : n), a(e);
      }
      function b(t) {
        var r = a(t).toHsl();
        return (r.h = (r.h + 180) % 360), a(r);
      }
      function m(t, r) {
        if (isNaN(r) || r <= 0)
          throw new Error("Argument to polyad must be a positive number");
        for (var e = a(t).toHsl(), n = [a(t)], i = 360 / r, o = 1; o < r; o++)
          n.push(a({ h: (e.h + o * i) % 360, s: e.s, l: e.l }));
        return n;
      }
      function p(t) {
        var r = a(t).toHsl(),
          e = r.h;
        return [
          a(t),
          a({ h: (e + 72) % 360, s: r.s, l: r.l }),
          a({ h: (e + 216) % 360, s: r.s, l: r.l }),
        ];
      }
      function _(t, r, e) {
        (r = r || 6), (e = e || 30);
        var n = a(t).toHsl(),
          i = 360 / e,
          o = [a(t)];
        for (n.h = (n.h - ((i * r) >> 1) + 720) % 360; --r; )
          (n.h = (n.h + i) % 360), o.push(a(n));
        return o;
      }
      function v(t, r) {
        r = r || 6;
        for (
          var e = a(t).toHsv(), n = e.h, i = e.s, o = e.v, h = [], s = 1 / r;
          r--;

        )
          h.push(a({ h: n, s: i, v: o })), (o = (o + s) % 1);
        return h;
      }
      (a.prototype = {
        isDark: function () {
          return this.getBrightness() < 128;
        },
        isLight: function () {
          return !this.isDark();
        },
        isValid: function () {
          return this._ok;
        },
        getOriginalInput: function () {
          return this._originalInput;
        },
        getFormat: function () {
          return this._format;
        },
        getAlpha: function () {
          return this._a;
        },
        getBrightness: function () {
          var t = this.toRgb();
          return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3;
        },
        getLuminance: function () {
          var t,
            r,
            e,
            a = this.toRgb();
          return (
            (t = a.r / 255),
            (r = a.g / 255),
            (e = a.b / 255),
            0.2126 *
              (t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)) +
              0.7152 *
                (r <= 0.03928
                  ? r / 12.92
                  : Math.pow((r + 0.055) / 1.055, 2.4)) +
              0.0722 *
                (e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4))
          );
        },
        setAlpha: function (t) {
          return (
            (this._a = x(t)),
            (this._roundA = Math.round(100 * this._a) / 100),
            this
          );
        },
        toHsv: function () {
          var t = i(this._r, this._g, this._b);
          return { h: 360 * t.h, s: t.s, v: t.v, a: this._a };
        },
        toHsvString: function () {
          var t = i(this._r, this._g, this._b),
            r = Math.round(360 * t.h),
            e = Math.round(100 * t.s),
            a = Math.round(100 * t.v);
          return 1 == this._a
            ? "hsv(" + r + ", " + e + "%, " + a + "%)"
            : "hsva(" + r + ", " + e + "%, " + a + "%, " + this._roundA + ")";
        },
        toHsl: function () {
          var t = n(this._r, this._g, this._b);
          return { h: 360 * t.h, s: t.s, l: t.l, a: this._a };
        },
        toHslString: function () {
          var t = n(this._r, this._g, this._b),
            r = Math.round(360 * t.h),
            e = Math.round(100 * t.s),
            a = Math.round(100 * t.l);
          return 1 == this._a
            ? "hsl(" + r + ", " + e + "%, " + a + "%)"
            : "hsla(" + r + ", " + e + "%, " + a + "%, " + this._roundA + ")";
        },
        toHex: function (t) {
          return o(this._r, this._g, this._b, t);
        },
        toHexString: function (t) {
          return "#" + this.toHex(t);
        },
        toHex8: function (t) {
          return (function (t, r, e, a, n) {
            var i = [
              S(Math.round(t).toString(16)),
              S(Math.round(r).toString(16)),
              S(Math.round(e).toString(16)),
              S(R(a)),
            ];
            return n &&
              i[0].charAt(0) == i[0].charAt(1) &&
              i[1].charAt(0) == i[1].charAt(1) &&
              i[2].charAt(0) == i[2].charAt(1) &&
              i[3].charAt(0) == i[3].charAt(1)
              ? i[0].charAt(0) +
                  i[1].charAt(0) +
                  i[2].charAt(0) +
                  i[3].charAt(0)
              : i.join("");
          })(this._r, this._g, this._b, this._a, t);
        },
        toHex8String: function (t) {
          return "#" + this.toHex8(t);
        },
        toRgb: function () {
          return {
            r: Math.round(this._r),
            g: Math.round(this._g),
            b: Math.round(this._b),
            a: this._a,
          };
        },
        toRgbString: function () {
          return 1 == this._a
            ? "rgb(" +
                Math.round(this._r) +
                ", " +
                Math.round(this._g) +
                ", " +
                Math.round(this._b) +
                ")"
            : "rgba(" +
                Math.round(this._r) +
                ", " +
                Math.round(this._g) +
                ", " +
                Math.round(this._b) +
                ", " +
                this._roundA +
                ")";
        },
        toPercentageRgb: function () {
          return {
            r: Math.round(100 * A(this._r, 255)) + "%",
            g: Math.round(100 * A(this._g, 255)) + "%",
            b: Math.round(100 * A(this._b, 255)) + "%",
            a: this._a,
          };
        },
        toPercentageRgbString: function () {
          return 1 == this._a
            ? "rgb(" +
                Math.round(100 * A(this._r, 255)) +
                "%, " +
                Math.round(100 * A(this._g, 255)) +
                "%, " +
                Math.round(100 * A(this._b, 255)) +
                "%)"
            : "rgba(" +
                Math.round(100 * A(this._r, 255)) +
                "%, " +
                Math.round(100 * A(this._g, 255)) +
                "%, " +
                Math.round(100 * A(this._b, 255)) +
                "%, " +
                this._roundA +
                ")";
        },
        toName: function () {
          return 0 === this._a
            ? "transparent"
            : !(this._a < 1) && (M[o(this._r, this._g, this._b, !0)] || !1);
        },
        toFilter: function (t) {
          var r = "#" + h(this._r, this._g, this._b, this._a),
            e = r,
            n = this._gradientType ? "GradientType = 1, " : "";
          if (t) {
            var i = a(t);
            e = "#" + h(i._r, i._g, i._b, i._a);
          }
          return (
            "progid:DXImageTransform.Microsoft.gradient(" +
            n +
            "startColorstr=" +
            r +
            ",endColorstr=" +
            e +
            ")"
          );
        },
        toString: function (t) {
          var r = !!t;
          t = t || this._format;
          var e = !1,
            a = this._a < 1 && this._a >= 0;
          return r ||
            !a ||
            ("hex" !== t &&
              "hex6" !== t &&
              "hex3" !== t &&
              "hex4" !== t &&
              "hex8" !== t &&
              "name" !== t)
            ? ("rgb" === t && (e = this.toRgbString()),
              "prgb" === t && (e = this.toPercentageRgbString()),
              ("hex" !== t && "hex6" !== t) || (e = this.toHexString()),
              "hex3" === t && (e = this.toHexString(!0)),
              "hex4" === t && (e = this.toHex8String(!0)),
              "hex8" === t && (e = this.toHex8String()),
              "name" === t && (e = this.toName()),
              "hsl" === t && (e = this.toHslString()),
              "hsv" === t && (e = this.toHsvString()),
              e || this.toHexString())
            : "name" === t && 0 === this._a
              ? this.toName()
              : this.toRgbString();
        },
        clone: function () {
          return a(this.toString());
        },
        _applyModification: function (t, r) {
          var e = t.apply(null, [this].concat([].slice.call(r)));
          return (
            (this._r = e._r),
            (this._g = e._g),
            (this._b = e._b),
            this.setAlpha(e._a),
            this
          );
        },
        lighten: function () {
          return this._applyModification(l, arguments);
        },
        brighten: function () {
          return this._applyModification(c, arguments);
        },
        darken: function () {
          return this._applyModification(d, arguments);
        },
        desaturate: function () {
          return this._applyModification(s, arguments);
        },
        saturate: function () {
          return this._applyModification(f, arguments);
        },
        greyscale: function () {
          return this._applyModification(u, arguments);
        },
        spin: function () {
          return this._applyModification(g, arguments);
        },
        _applyCombination: function (t, r) {
          return t.apply(null, [this].concat([].slice.call(r)));
        },
        analogous: function () {
          return this._applyCombination(_, arguments);
        },
        complement: function () {
          return this._applyCombination(b, arguments);
        },
        monochromatic: function () {
          return this._applyCombination(v, arguments);
        },
        splitcomplement: function () {
          return this._applyCombination(p, arguments);
        },
        triad: function () {
          return this._applyCombination(m, [3]);
        },
        tetrad: function () {
          return this._applyCombination(m, [4]);
        },
      }),
        (a.fromRatio = function (r, e) {
          if ("object" == t(r)) {
            var n = {};
            for (var i in r)
              r.hasOwnProperty(i) && (n[i] = "a" === i ? r[i] : H(r[i]));
            r = n;
          }
          return a(r, e);
        }),
        (a.equals = function (t, r) {
          return !(!t || !r) && a(t).toRgbString() == a(r).toRgbString();
        }),
        (a.random = function () {
          return a.fromRatio({
            r: Math.random(),
            g: Math.random(),
            b: Math.random(),
          });
        }),
        (a.mix = function (t, r, e) {
          e = 0 === e ? 0 : e || 50;
          var n = a(t).toRgb(),
            i = a(r).toRgb(),
            o = e / 100;
          return a({
            r: (i.r - n.r) * o + n.r,
            g: (i.g - n.g) * o + n.g,
            b: (i.b - n.b) * o + n.b,
            a: (i.a - n.a) * o + n.a,
          });
        }),
        (a.readability = function (t, r) {
          var e = a(t),
            n = a(r);
          return (
            (Math.max(e.getLuminance(), n.getLuminance()) + 0.05) /
            (Math.min(e.getLuminance(), n.getLuminance()) + 0.05)
          );
        }),
        (a.isReadable = function (t, r, e) {
          var n,
            i,
            o,
            h,
            s,
            f = a.readability(t, r);
          switch (
            ((i = !1),
            ((o = e),
            (h = (
              (o = o || { level: "AA", size: "small" }).level || "AA"
            ).toUpperCase()),
            (s = (o.size || "small").toLowerCase()),
            "AA" !== h && "AAA" !== h && (h = "AA"),
            "small" !== s && "large" !== s && (s = "small"),
            (n = { level: h, size: s })).level + n.size)
          ) {
            case "AAsmall":
            case "AAAlarge":
              i = f >= 4.5;
              break;
            case "AAlarge":
              i = f >= 3;
              break;
            case "AAAsmall":
              i = f >= 7;
          }
          return i;
        }),
        (a.mostReadable = function (t, r, e) {
          var n,
            i,
            o,
            h,
            s = null,
            f = 0;
          (i = (e = e || {}).includeFallbackColors),
            (o = e.level),
            (h = e.size);
          for (var u = 0; u < r.length; u++)
            (n = a.readability(t, r[u])) > f && ((f = n), (s = a(r[u])));
          return a.isReadable(t, s, { level: o, size: h }) || !i
            ? s
            : ((e.includeFallbackColors = !1),
              a.mostReadable(t, ["#fff", "#000"], e));
        });
      var y = (a.names = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "0ff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000",
          blanchedalmond: "ffebcd",
          blue: "00f",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          burntsienna: "ea7e5d",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "0ff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkgrey: "a9a9a9",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkslategrey: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dimgrey: "696969",
          dodgerblue: "1e90ff",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "f0f",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          grey: "808080",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgray: "d3d3d3",
          lightgreen: "90ee90",
          lightgrey: "d3d3d3",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslategray: "789",
          lightslategrey: "789",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "0f0",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "f0f",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370db",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "db7093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          rebeccapurple: "663399",
          red: "f00",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          slategrey: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          wheat: "f5deb3",
          white: "fff",
          whitesmoke: "f5f5f5",
          yellow: "ff0",
          yellowgreen: "9acd32",
        }),
        M = (a.hexNames = (function (t) {
          var r = {};
          for (var e in t) t.hasOwnProperty(e) && (r[t[e]] = e);
          return r;
        })(y));
      function x(t) {
        return (t = parseFloat(t)), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
      }
      function A(t, r) {
        (function (t) {
          return (
            "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t)
          );
        })(t) && (t = "100%");
        var e = (function (t) {
          return "string" == typeof t && -1 != t.indexOf("%");
        })(t);
        return (
          (t = Math.min(r, Math.max(0, parseFloat(t)))),
          e && (t = parseInt(t * r, 10) / 100),
          Math.abs(t - r) < 1e-6 ? 1 : (t % r) / parseFloat(r)
        );
      }
      function k(t) {
        return Math.min(1, Math.max(0, t));
      }
      function w(t) {
        return parseInt(t, 16);
      }
      function S(t) {
        return 1 == t.length ? "0" + t : "" + t;
      }
      function H(t) {
        return t <= 1 && (t = 100 * t + "%"), t;
      }
      function R(t) {
        return Math.round(255 * parseFloat(t)).toString(16);
      }
      function F(t) {
        return w(t) / 255;
      }
      var C,
        q,
        N,
        T =
          ((q =
            "[\\s|\\(]+(" +
            (C = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") +
            ")[,|\\s]+(" +
            C +
            ")[,|\\s]+(" +
            C +
            ")\\s*\\)?"),
          (N =
            "[\\s|\\(]+(" +
            C +
            ")[,|\\s]+(" +
            C +
            ")[,|\\s]+(" +
            C +
            ")[,|\\s]+(" +
            C +
            ")\\s*\\)?"),
          {
            CSS_UNIT: new RegExp(C),
            rgb: new RegExp("rgb" + q),
            rgba: new RegExp("rgba" + N),
            hsl: new RegExp("hsl" + q),
            hsla: new RegExp("hsla" + N),
            hsv: new RegExp("hsv" + q),
            hsva: new RegExp("hsva" + N),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          });
      function E(t) {
        return !!T.CSS_UNIT.exec(t);
      }
      return a;
    }),
    "object" == typeof r && void 0 !== e
      ? (e.exports = i())
      : "function" == typeof a && a.amd
        ? a(i)
        : ((n =
            "undefined" != typeof globalThis
              ? globalThis
              : n || self).tinycolor = i());
}); /*!node_modules/react-color/lib/helpers/color.js*/
amis.define("7f4cfbc", function (r, e, t, a) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.isvalidColorString =
      e.red =
      e.getContrastingColor =
      e.isValidHex =
      e.toState =
      e.simpleCheckForValidColor =
        void 0);
  var n = i(r("99257f0")),
    o = i(r("1aac2af"));
  function i(r) {
    return r && r.__esModule ? r : { default: r };
  }
  e.simpleCheckForValidColor = function (r) {
    var e = 0,
      t = 0;
    return (
      (0, n.default)(["r", "g", "b", "a", "h", "s", "l", "v"], function (a) {
        if (
          r[a] &&
          ((e += 1), isNaN(r[a]) || (t += 1), "s" === a || "l" === a)
        ) {
          /^\d+%$/.test(r[a]) && (t += 1);
        }
      }),
      e === t && r
    );
  };
  var l = (e.toState = function (r, e) {
    var t = r.hex ? (0, o.default)(r.hex) : (0, o.default)(r),
      a = t.toHsl(),
      n = t.toHsv(),
      i = t.toRgb(),
      l = t.toHex();
    return (
      0 === a.s && ((a.h = e || 0), (n.h = e || 0)),
      {
        hsl: a,
        hex: "000000" === l && 0 === i.a ? "transparent" : "#" + l,
        rgb: i,
        hsv: n,
        oldHue: r.h || e || a.h,
        source: r.source,
      }
    );
  });
  (e.isValidHex = function (r) {
    if ("transparent" === r) return !0;
    var e = "#" === String(r).charAt(0) ? 1 : 0;
    return (
      r.length !== 4 + e && r.length < 7 + e && (0, o.default)(r).isValid()
    );
  }),
    (e.getContrastingColor = function (r) {
      if (!r) return "#fff";
      var e = l(r);
      return "transparent" === e.hex
        ? "rgba(0,0,0,0.4)"
        : (299 * e.rgb.r + 587 * e.rgb.g + 114 * e.rgb.b) / 1e3 >= 128
          ? "#000"
          : "#fff";
    }),
    (e.red = {
      hsl: { a: 1, h: 0, l: 0.5, s: 1 },
      hex: "#ff0000",
      rgb: { r: 255, g: 0, b: 0, a: 1 },
      hsv: { h: 0, s: 1, v: 1, a: 1 },
    }),
    (e.isvalidColorString = function (r, e) {
      var t = r.replace("°", "");
      return (0, o.default)(e + " (" + t + ")")._ok;
    });
}); /*!node_modules/react-color/lib/components/common/ColorWrap.js*/
amis.define("68050b8", function (e, t, o, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.ColorWrap = void 0);
  var n =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var o = arguments[t];
          for (var r in o)
            Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
        }
        return e;
      },
    a = (function () {
      function e(e, t) {
        for (var o = 0; o < t.length; o++) {
          var r = t[o];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, o, r) {
        return o && e(t.prototype, o), r && e(t, r), t;
      };
    })(),
    u = e("8d5e11f"),
    i = p(u),
    l = p(e("36a1b98")),
    c = (function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var o in e)
          Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
      return (t.default = e), t;
    })(e("7f4cfbc"));
  function p(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var f = (t.ColorWrap = function (e) {
    var t = (function (t) {
      function o(e) {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, o);
        var t = (function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        })(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this));
        return (
          (t.handleChange = function (e, o) {
            if (c.simpleCheckForValidColor(e)) {
              var r = c.toState(e, e.h || t.state.oldHue);
              t.setState(r),
                t.props.onChangeComplete &&
                  t.debounce(t.props.onChangeComplete, r, o),
                t.props.onChange && t.props.onChange(r, o);
            }
          }),
          (t.handleSwatchHover = function (e, o) {
            if (c.simpleCheckForValidColor(e)) {
              var r = c.toState(e, e.h || t.state.oldHue);
              t.props.onSwatchHover && t.props.onSwatchHover(r, o);
            }
          }),
          (t.state = n({}, c.toState(e.color, 0))),
          (t.debounce = (0, l.default)(function (e, t, o) {
            e(t, o);
          }, 100)),
          t
        );
      }
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof t,
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            },
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(o, t),
        a(
          o,
          [
            {
              key: "render",
              value: function () {
                var t = {};
                return (
                  this.props.onSwatchHover &&
                    (t.onSwatchHover = this.handleSwatchHover),
                  i.default.createElement(
                    e,
                    n(
                      {},
                      this.props,
                      this.state,
                      { onChange: this.handleChange },
                      t,
                    ),
                  )
                );
              },
            },
          ],
          [
            {
              key: "getDerivedStateFromProps",
              value: function (e, t) {
                return n({}, c.toState(e.color, t.oldHue));
              },
            },
          ],
        ),
        o
      );
    })(u.PureComponent || u.Component);
    return (
      (t.propTypes = n({}, e.propTypes)),
      (t.defaultProps = n({}, e.defaultProps, {
        color: { h: 250, s: 0.5, l: 0.2, a: 1 },
      })),
      t
    );
  });
  t.default = f;
}); /*!node_modules/react-color/lib/helpers/interaction.js*/
amis.define("f8eb2d5", function (e, t, n, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.handleFocus = void 0);
  var o,
    u =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      },
    a = (function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })(),
    c = e("8d5e11f"),
    i = (o = c) && o.__esModule ? o : { default: o };
  function f(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
  }
  function s(e, t) {
    if ("function" != typeof t && null !== t)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof t,
      );
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  }
  t.handleFocus = function (e) {
    var t =
      arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
    return (function (n) {
      function r() {
        var e, t, n;
        f(this, r);
        for (var o = arguments.length, u = Array(o), a = 0; a < o; a++)
          u[a] = arguments[a];
        return (
          (t = n =
            l(
              this,
              (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(
                e,
                [this].concat(u),
              ),
            )),
          (n.state = { focus: !1 }),
          (n.handleFocus = function () {
            return n.setState({ focus: !0 });
          }),
          (n.handleBlur = function () {
            return n.setState({ focus: !1 });
          }),
          l(n, t)
        );
      }
      return (
        s(r, n),
        a(r, [
          {
            key: "render",
            value: function () {
              return i.default.createElement(
                t,
                { onFocus: this.handleFocus, onBlur: this.handleBlur },
                i.default.createElement(e, u({}, this.props, this.state)),
              );
            },
          },
        ]),
        r
      );
    })(i.default.Component);
  };
}); /*!node_modules/react-color/lib/components/common/Swatch.js*/
amis.define("9b98f6a", function (e, t, n, o) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.Swatch = void 0);
  var r =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      },
    a = c(e("8d5e11f")),
    i = c(e("1536f14")),
    u = e("f8eb2d5"),
    d = c(e("f3e39d7"));
  function c(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var l = (t.Swatch = function (e) {
    var t = e.color,
      n = e.style,
      o = e.onClick,
      u = void 0 === o ? function () {} : o,
      c = e.onHover,
      l = e.title,
      f = void 0 === l ? t : l,
      s = e.children,
      v = e.focus,
      h = e.focusStyle,
      b = void 0 === h ? {} : h,
      w = "transparent" === t,
      p = (0, i.default)({
        default: {
          swatch: r(
            {
              background: t,
              height: "100%",
              width: "100%",
              cursor: "pointer",
              position: "relative",
              outline: "none",
            },
            n,
            v ? b : {},
          ),
        },
      }),
      y = {};
    return (
      c &&
        (y.onMouseOver = function (e) {
          return c(t, e);
        }),
      a.default.createElement(
        "div",
        r(
          {
            style: p.swatch,
            onClick: function (e) {
              return u(t, e);
            },
            title: f,
            tabIndex: 0,
            onKeyDown: function (e) {
              return 13 === e.keyCode && u(t, e);
            },
          },
          y,
        ),
        s,
        w &&
          a.default.createElement(d.default, {
            borderRadius: p.swatch.borderRadius,
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
          }),
      )
    );
  });
  t.default = (0, u.handleFocus)(l);
}); /*!node_modules/react-color/lib/components/common/index.js*/
amis.define("592bd27", function (e, t, r, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var u = e("cb44009");
  Object.defineProperty(t, "Alpha", {
    enumerable: !0,
    get: function () {
      return l(u).default;
    },
  });
  var a = e("f3e39d7");
  Object.defineProperty(t, "Checkboard", {
    enumerable: !0,
    get: function () {
      return l(a).default;
    },
  });
  var f = e("ba93051");
  Object.defineProperty(t, "EditableInput", {
    enumerable: !0,
    get: function () {
      return l(f).default;
    },
  });
  var d = e("07dc481");
  Object.defineProperty(t, "Hue", {
    enumerable: !0,
    get: function () {
      return l(d).default;
    },
  });
  var i = e("1151e64");
  Object.defineProperty(t, "Raised", {
    enumerable: !0,
    get: function () {
      return l(i).default;
    },
  });
  var o = e("288d044");
  Object.defineProperty(t, "Saturation", {
    enumerable: !0,
    get: function () {
      return l(o).default;
    },
  });
  var b = e("68050b8");
  Object.defineProperty(t, "ColorWrap", {
    enumerable: !0,
    get: function () {
      return l(b).default;
    },
  });
  var c = e("9b98f6a");
  function l(e) {
    return e && e.__esModule ? e : { default: e };
  }
  Object.defineProperty(t, "Swatch", {
    enumerable: !0,
    get: function () {
      return l(c).default;
    },
  });
}); /*!node_modules/react-color/lib/components/alpha/AlphaPointer.js*/
amis.define("df633d7", function (e, r, t, a) {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.AlphaPointer = void 0);
  var i = n(e("8d5e11f")),
    d = n(e("1536f14"));
  function n(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var l = (r.AlphaPointer = function (e) {
    var r = e.direction,
      t = (0, d.default)(
        {
          default: {
            picker: {
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              transform: "translate(-9px, -1px)",
              backgroundColor: "rgb(248, 248, 248)",
              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
            },
          },
          vertical: { picker: { transform: "translate(-3px, -9px)" } },
        },
        { vertical: "vertical" === r },
      );
    return i.default.createElement("div", { style: t.picker });
  });
  r.default = l;
}); /*!node_modules/react-color/lib/components/alpha/Alpha.js*/
amis.define("b6eb921", function (e, r, t, a) {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.AlphaPicker = void 0);
  var i =
      Object.assign ||
      function (e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = arguments[r];
          for (var a in t)
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        }
        return e;
      },
    n = h(e("8d5e11f")),
    l = h(e("1536f14")),
    o = e("592bd27"),
    d = h(e("df633d7"));
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var p = (r.AlphaPicker = function (e) {
    var r = e.rgb,
      t = e.hsl,
      a = e.width,
      d = e.height,
      h = e.onChange,
      p = e.direction,
      s = e.style,
      c = e.renderers,
      u = e.pointer,
      f = e.className,
      v = void 0 === f ? "" : f,
      g = (0, l.default)({
        default: {
          picker: { position: "relative", width: a, height: d },
          alpha: { radius: "2px", style: s },
        },
      });
    return n.default.createElement(
      "div",
      { style: g.picker, className: "alpha-picker " + v },
      n.default.createElement(
        o.Alpha,
        i({}, g.alpha, {
          rgb: r,
          hsl: t,
          pointer: u,
          renderers: c,
          onChange: h,
          direction: p,
        }),
      ),
    );
  });
  (p.defaultProps = {
    width: "316px",
    height: "16px",
    direction: "horizontal",
    pointer: d.default,
  }),
    (r.default = (0, o.ColorWrap)(p));
}); /*!node_modules/react-color/lib/components/block/BlockSwatches.js*/
amis.define("99c3f35", function (e, t, a, l) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.BlockSwatches = void 0);
  var c = d(e("8d5e11f")),
    o = d(e("1536f14")),
    r = d(e("9de79e5")),
    n = e("592bd27");
  function d(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var i = (t.BlockSwatches = function (e) {
    var t = e.colors,
      a = e.onClick,
      l = e.onSwatchHover,
      d = (0, o.default)({
        default: {
          swatches: { marginRight: "-10px" },
          swatch: {
            width: "22px",
            height: "22px",
            float: "left",
            marginRight: "10px",
            marginBottom: "10px",
            borderRadius: "4px",
          },
          clear: { clear: "both" },
        },
      });
    return c.default.createElement(
      "div",
      { style: d.swatches },
      (0, r.default)(t, function (e) {
        return c.default.createElement(n.Swatch, {
          key: e,
          color: e,
          style: d.swatch,
          onClick: a,
          onHover: l,
          focusStyle: { boxShadow: "0 0 4px " + e },
        });
      }),
      c.default.createElement("div", { style: d.clear }),
    );
  });
  t.default = i;
}); /*!node_modules/react-color/lib/components/block/Block.js*/
amis.define("0254090", function (e, t, a, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.Block = void 0);
  var l = s(e("8d5e11f")),
    o = s(e("5ff1f4a")),
    d = s(e("1536f14")),
    n = s(e("db13e32")),
    i = (function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
      return (t.default = e), t;
    })(e("7f4cfbc")),
    f = e("592bd27"),
    u = s(e("99c3f35"));
  function s(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var p = (t.Block = function (e) {
    var t = e.onChange,
      a = e.onSwatchHover,
      r = e.hex,
      o = e.colors,
      s = e.width,
      p = e.triangle,
      c = e.styles,
      b = void 0 === c ? {} : c,
      x = e.className,
      h = void 0 === x ? "" : x,
      g = "transparent" === r,
      y = function (e, a) {
        i.isValidHex(e) && t({ hex: e, source: "hex" }, a);
      },
      v = (0, d.default)(
        (0, n.default)(
          {
            default: {
              card: {
                width: s,
                background: "#fff",
                boxShadow: "0 1px rgba(0,0,0,.1)",
                borderRadius: "6px",
                position: "relative",
              },
              head: {
                height: "110px",
                background: r,
                borderRadius: "6px 6px 0 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              },
              body: { padding: "10px" },
              label: {
                fontSize: "18px",
                color: i.getContrastingColor(r),
                position: "relative",
              },
              triangle: {
                width: "0px",
                height: "0px",
                borderStyle: "solid",
                borderWidth: "0 10px 10px 10px",
                borderColor: "transparent transparent " + r + " transparent",
                position: "absolute",
                top: "-10px",
                left: "50%",
                marginLeft: "-10px",
              },
              input: {
                width: "100%",
                fontSize: "12px",
                color: "#666",
                border: "0px",
                outline: "none",
                height: "22px",
                boxShadow: "inset 0 0 0 1px #ddd",
                borderRadius: "4px",
                padding: "0 7px",
                boxSizing: "border-box",
              },
            },
            "hide-triangle": { triangle: { display: "none" } },
          },
          b,
        ),
        { "hide-triangle": "hide" === p },
      );
    return l.default.createElement(
      "div",
      { style: v.card, className: "block-picker " + h },
      l.default.createElement("div", { style: v.triangle }),
      l.default.createElement(
        "div",
        { style: v.head },
        g &&
          l.default.createElement(f.Checkboard, {
            borderRadius: "6px 6px 0 0",
          }),
        l.default.createElement("div", { style: v.label }, r),
      ),
      l.default.createElement(
        "div",
        { style: v.body },
        l.default.createElement(u.default, {
          colors: o,
          onClick: y,
          onSwatchHover: a,
        }),
        l.default.createElement(f.EditableInput, {
          style: { input: v.input },
          value: r,
          onChange: y,
        }),
      ),
    );
  });
  (p.propTypes = {
    width: o.default.oneOfType([o.default.string, o.default.number]),
    colors: o.default.arrayOf(o.default.string),
    triangle: o.default.oneOf(["top", "hide"]),
    styles: o.default.object,
  }),
    (p.defaultProps = {
      width: 170,
      colors: [
        "#D9E3F0",
        "#F47373",
        "#697689",
        "#37D67A",
        "#2CCCE4",
        "#555555",
        "#dce775",
        "#ff8a65",
        "#ba68c8",
      ],
      triangle: "top",
      styles: {},
    }),
    (t.default = (0, f.ColorWrap)(p));
}); /*!node_modules/material-colors/dist/colors.js*/
amis.define("aaef83a", function (f, a, e, b) {
  var c, d;
  (c = this),
    (d = function () {
      return {
        red: {
          50: "#ffebee",
          100: "#ffcdd2",
          200: "#ef9a9a",
          300: "#e57373",
          400: "#ef5350",
          500: "#f44336",
          600: "#e53935",
          700: "#d32f2f",
          800: "#c62828",
          900: "#b71c1c",
          a100: "#ff8a80",
          a200: "#ff5252",
          a400: "#ff1744",
          a700: "#d50000",
        },
        pink: {
          50: "#fce4ec",
          100: "#f8bbd0",
          200: "#f48fb1",
          300: "#f06292",
          400: "#ec407a",
          500: "#e91e63",
          600: "#d81b60",
          700: "#c2185b",
          800: "#ad1457",
          900: "#880e4f",
          a100: "#ff80ab",
          a200: "#ff4081",
          a400: "#f50057",
          a700: "#c51162",
        },
        purple: {
          50: "#f3e5f5",
          100: "#e1bee7",
          200: "#ce93d8",
          300: "#ba68c8",
          400: "#ab47bc",
          500: "#9c27b0",
          600: "#8e24aa",
          700: "#7b1fa2",
          800: "#6a1b9a",
          900: "#4a148c",
          a100: "#ea80fc",
          a200: "#e040fb",
          a400: "#d500f9",
          a700: "#aa00ff",
        },
        deepPurple: {
          50: "#ede7f6",
          100: "#d1c4e9",
          200: "#b39ddb",
          300: "#9575cd",
          400: "#7e57c2",
          500: "#673ab7",
          600: "#5e35b1",
          700: "#512da8",
          800: "#4527a0",
          900: "#311b92",
          a100: "#b388ff",
          a200: "#7c4dff",
          a400: "#651fff",
          a700: "#6200ea",
        },
        indigo: {
          50: "#e8eaf6",
          100: "#c5cae9",
          200: "#9fa8da",
          300: "#7986cb",
          400: "#5c6bc0",
          500: "#3f51b5",
          600: "#3949ab",
          700: "#303f9f",
          800: "#283593",
          900: "#1a237e",
          a100: "#8c9eff",
          a200: "#536dfe",
          a400: "#3d5afe",
          a700: "#304ffe",
        },
        blue: {
          50: "#e3f2fd",
          100: "#bbdefb",
          200: "#90caf9",
          300: "#64b5f6",
          400: "#42a5f5",
          500: "#2196f3",
          600: "#1e88e5",
          700: "#1976d2",
          800: "#1565c0",
          900: "#0d47a1",
          a100: "#82b1ff",
          a200: "#448aff",
          a400: "#2979ff",
          a700: "#2962ff",
        },
        lightBlue: {
          50: "#e1f5fe",
          100: "#b3e5fc",
          200: "#81d4fa",
          300: "#4fc3f7",
          400: "#29b6f6",
          500: "#03a9f4",
          600: "#039be5",
          700: "#0288d1",
          800: "#0277bd",
          900: "#01579b",
          a100: "#80d8ff",
          a200: "#40c4ff",
          a400: "#00b0ff",
          a700: "#0091ea",
        },
        cyan: {
          50: "#e0f7fa",
          100: "#b2ebf2",
          200: "#80deea",
          300: "#4dd0e1",
          400: "#26c6da",
          500: "#00bcd4",
          600: "#00acc1",
          700: "#0097a7",
          800: "#00838f",
          900: "#006064",
          a100: "#84ffff",
          a200: "#18ffff",
          a400: "#00e5ff",
          a700: "#00b8d4",
        },
        teal: {
          50: "#e0f2f1",
          100: "#b2dfdb",
          200: "#80cbc4",
          300: "#4db6ac",
          400: "#26a69a",
          500: "#009688",
          600: "#00897b",
          700: "#00796b",
          800: "#00695c",
          900: "#004d40",
          a100: "#a7ffeb",
          a200: "#64ffda",
          a400: "#1de9b6",
          a700: "#00bfa5",
        },
        green: {
          50: "#e8f5e9",
          100: "#c8e6c9",
          200: "#a5d6a7",
          300: "#81c784",
          400: "#66bb6a",
          500: "#4caf50",
          600: "#43a047",
          700: "#388e3c",
          800: "#2e7d32",
          900: "#1b5e20",
          a100: "#b9f6ca",
          a200: "#69f0ae",
          a400: "#00e676",
          a700: "#00c853",
        },
        lightGreen: {
          50: "#f1f8e9",
          100: "#dcedc8",
          200: "#c5e1a5",
          300: "#aed581",
          400: "#9ccc65",
          500: "#8bc34a",
          600: "#7cb342",
          700: "#689f38",
          800: "#558b2f",
          900: "#33691e",
          a100: "#ccff90",
          a200: "#b2ff59",
          a400: "#76ff03",
          a700: "#64dd17",
        },
        lime: {
          50: "#f9fbe7",
          100: "#f0f4c3",
          200: "#e6ee9c",
          300: "#dce775",
          400: "#d4e157",
          500: "#cddc39",
          600: "#c0ca33",
          700: "#afb42b",
          800: "#9e9d24",
          900: "#827717",
          a100: "#f4ff81",
          a200: "#eeff41",
          a400: "#c6ff00",
          a700: "#aeea00",
        },
        yellow: {
          50: "#fffde7",
          100: "#fff9c4",
          200: "#fff59d",
          300: "#fff176",
          400: "#ffee58",
          500: "#ffeb3b",
          600: "#fdd835",
          700: "#fbc02d",
          800: "#f9a825",
          900: "#f57f17",
          a100: "#ffff8d",
          a200: "#ffff00",
          a400: "#ffea00",
          a700: "#ffd600",
        },
        amber: {
          50: "#fff8e1",
          100: "#ffecb3",
          200: "#ffe082",
          300: "#ffd54f",
          400: "#ffca28",
          500: "#ffc107",
          600: "#ffb300",
          700: "#ffa000",
          800: "#ff8f00",
          900: "#ff6f00",
          a100: "#ffe57f",
          a200: "#ffd740",
          a400: "#ffc400",
          a700: "#ffab00",
        },
        orange: {
          50: "#fff3e0",
          100: "#ffe0b2",
          200: "#ffcc80",
          300: "#ffb74d",
          400: "#ffa726",
          500: "#ff9800",
          600: "#fb8c00",
          700: "#f57c00",
          800: "#ef6c00",
          900: "#e65100",
          a100: "#ffd180",
          a200: "#ffab40",
          a400: "#ff9100",
          a700: "#ff6d00",
        },
        deepOrange: {
          50: "#fbe9e7",
          100: "#ffccbc",
          200: "#ffab91",
          300: "#ff8a65",
          400: "#ff7043",
          500: "#ff5722",
          600: "#f4511e",
          700: "#e64a19",
          800: "#d84315",
          900: "#bf360c",
          a100: "#ff9e80",
          a200: "#ff6e40",
          a400: "#ff3d00",
          a700: "#dd2c00",
        },
        brown: {
          50: "#efebe9",
          100: "#d7ccc8",
          200: "#bcaaa4",
          300: "#a1887f",
          400: "#8d6e63",
          500: "#795548",
          600: "#6d4c41",
          700: "#5d4037",
          800: "#4e342e",
          900: "#3e2723",
        },
        grey: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        blueGrey: {
          50: "#eceff1",
          100: "#cfd8dc",
          200: "#b0bec5",
          300: "#90a4ae",
          400: "#78909c",
          500: "#607d8b",
          600: "#546e7a",
          700: "#455a64",
          800: "#37474f",
          900: "#263238",
        },
        darkText: {
          primary: "rgba(0, 0, 0, 0.87)",
          secondary: "rgba(0, 0, 0, 0.54)",
          disabled: "rgba(0, 0, 0, 0.38)",
          dividers: "rgba(0, 0, 0, 0.12)",
        },
        lightText: {
          primary: "rgba(255, 255, 255, 1)",
          secondary: "rgba(255, 255, 255, 0.7)",
          disabled: "rgba(255, 255, 255, 0.5)",
          dividers: "rgba(255, 255, 255, 0.12)",
        },
        darkIcons: {
          active: "rgba(0, 0, 0, 0.54)",
          inactive: "rgba(0, 0, 0, 0.38)",
        },
        lightIcons: {
          active: "rgba(255, 255, 255, 1)",
          inactive: "rgba(255, 255, 255, 0.5)",
        },
        white: "#ffffff",
        black: "#000000",
      };
    }),
    "function" == typeof b && b.amd
      ? b([], d)
      : "object" == typeof a
        ? (e.exports = {
            red: {
              50: "#ffebee",
              100: "#ffcdd2",
              200: "#ef9a9a",
              300: "#e57373",
              400: "#ef5350",
              500: "#f44336",
              600: "#e53935",
              700: "#d32f2f",
              800: "#c62828",
              900: "#b71c1c",
              a100: "#ff8a80",
              a200: "#ff5252",
              a400: "#ff1744",
              a700: "#d50000",
            },
            pink: {
              50: "#fce4ec",
              100: "#f8bbd0",
              200: "#f48fb1",
              300: "#f06292",
              400: "#ec407a",
              500: "#e91e63",
              600: "#d81b60",
              700: "#c2185b",
              800: "#ad1457",
              900: "#880e4f",
              a100: "#ff80ab",
              a200: "#ff4081",
              a400: "#f50057",
              a700: "#c51162",
            },
            purple: {
              50: "#f3e5f5",
              100: "#e1bee7",
              200: "#ce93d8",
              300: "#ba68c8",
              400: "#ab47bc",
              500: "#9c27b0",
              600: "#8e24aa",
              700: "#7b1fa2",
              800: "#6a1b9a",
              900: "#4a148c",
              a100: "#ea80fc",
              a200: "#e040fb",
              a400: "#d500f9",
              a700: "#aa00ff",
            },
            deepPurple: {
              50: "#ede7f6",
              100: "#d1c4e9",
              200: "#b39ddb",
              300: "#9575cd",
              400: "#7e57c2",
              500: "#673ab7",
              600: "#5e35b1",
              700: "#512da8",
              800: "#4527a0",
              900: "#311b92",
              a100: "#b388ff",
              a200: "#7c4dff",
              a400: "#651fff",
              a700: "#6200ea",
            },
            indigo: {
              50: "#e8eaf6",
              100: "#c5cae9",
              200: "#9fa8da",
              300: "#7986cb",
              400: "#5c6bc0",
              500: "#3f51b5",
              600: "#3949ab",
              700: "#303f9f",
              800: "#283593",
              900: "#1a237e",
              a100: "#8c9eff",
              a200: "#536dfe",
              a400: "#3d5afe",
              a700: "#304ffe",
            },
            blue: {
              50: "#e3f2fd",
              100: "#bbdefb",
              200: "#90caf9",
              300: "#64b5f6",
              400: "#42a5f5",
              500: "#2196f3",
              600: "#1e88e5",
              700: "#1976d2",
              800: "#1565c0",
              900: "#0d47a1",
              a100: "#82b1ff",
              a200: "#448aff",
              a400: "#2979ff",
              a700: "#2962ff",
            },
            lightBlue: {
              50: "#e1f5fe",
              100: "#b3e5fc",
              200: "#81d4fa",
              300: "#4fc3f7",
              400: "#29b6f6",
              500: "#03a9f4",
              600: "#039be5",
              700: "#0288d1",
              800: "#0277bd",
              900: "#01579b",
              a100: "#80d8ff",
              a200: "#40c4ff",
              a400: "#00b0ff",
              a700: "#0091ea",
            },
            cyan: {
              50: "#e0f7fa",
              100: "#b2ebf2",
              200: "#80deea",
              300: "#4dd0e1",
              400: "#26c6da",
              500: "#00bcd4",
              600: "#00acc1",
              700: "#0097a7",
              800: "#00838f",
              900: "#006064",
              a100: "#84ffff",
              a200: "#18ffff",
              a400: "#00e5ff",
              a700: "#00b8d4",
            },
            teal: {
              50: "#e0f2f1",
              100: "#b2dfdb",
              200: "#80cbc4",
              300: "#4db6ac",
              400: "#26a69a",
              500: "#009688",
              600: "#00897b",
              700: "#00796b",
              800: "#00695c",
              900: "#004d40",
              a100: "#a7ffeb",
              a200: "#64ffda",
              a400: "#1de9b6",
              a700: "#00bfa5",
            },
            green: {
              50: "#e8f5e9",
              100: "#c8e6c9",
              200: "#a5d6a7",
              300: "#81c784",
              400: "#66bb6a",
              500: "#4caf50",
              600: "#43a047",
              700: "#388e3c",
              800: "#2e7d32",
              900: "#1b5e20",
              a100: "#b9f6ca",
              a200: "#69f0ae",
              a400: "#00e676",
              a700: "#00c853",
            },
            lightGreen: {
              50: "#f1f8e9",
              100: "#dcedc8",
              200: "#c5e1a5",
              300: "#aed581",
              400: "#9ccc65",
              500: "#8bc34a",
              600: "#7cb342",
              700: "#689f38",
              800: "#558b2f",
              900: "#33691e",
              a100: "#ccff90",
              a200: "#b2ff59",
              a400: "#76ff03",
              a700: "#64dd17",
            },
            lime: {
              50: "#f9fbe7",
              100: "#f0f4c3",
              200: "#e6ee9c",
              300: "#dce775",
              400: "#d4e157",
              500: "#cddc39",
              600: "#c0ca33",
              700: "#afb42b",
              800: "#9e9d24",
              900: "#827717",
              a100: "#f4ff81",
              a200: "#eeff41",
              a400: "#c6ff00",
              a700: "#aeea00",
            },
            yellow: {
              50: "#fffde7",
              100: "#fff9c4",
              200: "#fff59d",
              300: "#fff176",
              400: "#ffee58",
              500: "#ffeb3b",
              600: "#fdd835",
              700: "#fbc02d",
              800: "#f9a825",
              900: "#f57f17",
              a100: "#ffff8d",
              a200: "#ffff00",
              a400: "#ffea00",
              a700: "#ffd600",
            },
            amber: {
              50: "#fff8e1",
              100: "#ffecb3",
              200: "#ffe082",
              300: "#ffd54f",
              400: "#ffca28",
              500: "#ffc107",
              600: "#ffb300",
              700: "#ffa000",
              800: "#ff8f00",
              900: "#ff6f00",
              a100: "#ffe57f",
              a200: "#ffd740",
              a400: "#ffc400",
              a700: "#ffab00",
            },
            orange: {
              50: "#fff3e0",
              100: "#ffe0b2",
              200: "#ffcc80",
              300: "#ffb74d",
              400: "#ffa726",
              500: "#ff9800",
              600: "#fb8c00",
              700: "#f57c00",
              800: "#ef6c00",
              900: "#e65100",
              a100: "#ffd180",
              a200: "#ffab40",
              a400: "#ff9100",
              a700: "#ff6d00",
            },
            deepOrange: {
              50: "#fbe9e7",
              100: "#ffccbc",
              200: "#ffab91",
              300: "#ff8a65",
              400: "#ff7043",
              500: "#ff5722",
              600: "#f4511e",
              700: "#e64a19",
              800: "#d84315",
              900: "#bf360c",
              a100: "#ff9e80",
              a200: "#ff6e40",
              a400: "#ff3d00",
              a700: "#dd2c00",
            },
            brown: {
              50: "#efebe9",
              100: "#d7ccc8",
              200: "#bcaaa4",
              300: "#a1887f",
              400: "#8d6e63",
              500: "#795548",
              600: "#6d4c41",
              700: "#5d4037",
              800: "#4e342e",
              900: "#3e2723",
            },
            grey: {
              50: "#fafafa",
              100: "#f5f5f5",
              200: "#eeeeee",
              300: "#e0e0e0",
              400: "#bdbdbd",
              500: "#9e9e9e",
              600: "#757575",
              700: "#616161",
              800: "#424242",
              900: "#212121",
            },
            blueGrey: {
              50: "#eceff1",
              100: "#cfd8dc",
              200: "#b0bec5",
              300: "#90a4ae",
              400: "#78909c",
              500: "#607d8b",
              600: "#546e7a",
              700: "#455a64",
              800: "#37474f",
              900: "#263238",
            },
            darkText: {
              primary: "rgba(0, 0, 0, 0.87)",
              secondary: "rgba(0, 0, 0, 0.54)",
              disabled: "rgba(0, 0, 0, 0.38)",
              dividers: "rgba(0, 0, 0, 0.12)",
            },
            lightText: {
              primary: "rgba(255, 255, 255, 1)",
              secondary: "rgba(255, 255, 255, 0.7)",
              disabled: "rgba(255, 255, 255, 0.5)",
              dividers: "rgba(255, 255, 255, 0.12)",
            },
            darkIcons: {
              active: "rgba(0, 0, 0, 0.54)",
              inactive: "rgba(0, 0, 0, 0.38)",
            },
            lightIcons: {
              active: "rgba(255, 255, 255, 1)",
              inactive: "rgba(255, 255, 255, 0.5)",
            },
            white: "#ffffff",
            black: "#000000",
          })
        : (c.materialColors = {
            red: {
              50: "#ffebee",
              100: "#ffcdd2",
              200: "#ef9a9a",
              300: "#e57373",
              400: "#ef5350",
              500: "#f44336",
              600: "#e53935",
              700: "#d32f2f",
              800: "#c62828",
              900: "#b71c1c",
              a100: "#ff8a80",
              a200: "#ff5252",
              a400: "#ff1744",
              a700: "#d50000",
            },
            pink: {
              50: "#fce4ec",
              100: "#f8bbd0",
              200: "#f48fb1",
              300: "#f06292",
              400: "#ec407a",
              500: "#e91e63",
              600: "#d81b60",
              700: "#c2185b",
              800: "#ad1457",
              900: "#880e4f",
              a100: "#ff80ab",
              a200: "#ff4081",
              a400: "#f50057",
              a700: "#c51162",
            },
            purple: {
              50: "#f3e5f5",
              100: "#e1bee7",
              200: "#ce93d8",
              300: "#ba68c8",
              400: "#ab47bc",
              500: "#9c27b0",
              600: "#8e24aa",
              700: "#7b1fa2",
              800: "#6a1b9a",
              900: "#4a148c",
              a100: "#ea80fc",
              a200: "#e040fb",
              a400: "#d500f9",
              a700: "#aa00ff",
            },
            deepPurple: {
              50: "#ede7f6",
              100: "#d1c4e9",
              200: "#b39ddb",
              300: "#9575cd",
              400: "#7e57c2",
              500: "#673ab7",
              600: "#5e35b1",
              700: "#512da8",
              800: "#4527a0",
              900: "#311b92",
              a100: "#b388ff",
              a200: "#7c4dff",
              a400: "#651fff",
              a700: "#6200ea",
            },
            indigo: {
              50: "#e8eaf6",
              100: "#c5cae9",
              200: "#9fa8da",
              300: "#7986cb",
              400: "#5c6bc0",
              500: "#3f51b5",
              600: "#3949ab",
              700: "#303f9f",
              800: "#283593",
              900: "#1a237e",
              a100: "#8c9eff",
              a200: "#536dfe",
              a400: "#3d5afe",
              a700: "#304ffe",
            },
            blue: {
              50: "#e3f2fd",
              100: "#bbdefb",
              200: "#90caf9",
              300: "#64b5f6",
              400: "#42a5f5",
              500: "#2196f3",
              600: "#1e88e5",
              700: "#1976d2",
              800: "#1565c0",
              900: "#0d47a1",
              a100: "#82b1ff",
              a200: "#448aff",
              a400: "#2979ff",
              a700: "#2962ff",
            },
            lightBlue: {
              50: "#e1f5fe",
              100: "#b3e5fc",
              200: "#81d4fa",
              300: "#4fc3f7",
              400: "#29b6f6",
              500: "#03a9f4",
              600: "#039be5",
              700: "#0288d1",
              800: "#0277bd",
              900: "#01579b",
              a100: "#80d8ff",
              a200: "#40c4ff",
              a400: "#00b0ff",
              a700: "#0091ea",
            },
            cyan: {
              50: "#e0f7fa",
              100: "#b2ebf2",
              200: "#80deea",
              300: "#4dd0e1",
              400: "#26c6da",
              500: "#00bcd4",
              600: "#00acc1",
              700: "#0097a7",
              800: "#00838f",
              900: "#006064",
              a100: "#84ffff",
              a200: "#18ffff",
              a400: "#00e5ff",
              a700: "#00b8d4",
            },
            teal: {
              50: "#e0f2f1",
              100: "#b2dfdb",
              200: "#80cbc4",
              300: "#4db6ac",
              400: "#26a69a",
              500: "#009688",
              600: "#00897b",
              700: "#00796b",
              800: "#00695c",
              900: "#004d40",
              a100: "#a7ffeb",
              a200: "#64ffda",
              a400: "#1de9b6",
              a700: "#00bfa5",
            },
            green: {
              50: "#e8f5e9",
              100: "#c8e6c9",
              200: "#a5d6a7",
              300: "#81c784",
              400: "#66bb6a",
              500: "#4caf50",
              600: "#43a047",
              700: "#388e3c",
              800: "#2e7d32",
              900: "#1b5e20",
              a100: "#b9f6ca",
              a200: "#69f0ae",
              a400: "#00e676",
              a700: "#00c853",
            },
            lightGreen: {
              50: "#f1f8e9",
              100: "#dcedc8",
              200: "#c5e1a5",
              300: "#aed581",
              400: "#9ccc65",
              500: "#8bc34a",
              600: "#7cb342",
              700: "#689f38",
              800: "#558b2f",
              900: "#33691e",
              a100: "#ccff90",
              a200: "#b2ff59",
              a400: "#76ff03",
              a700: "#64dd17",
            },
            lime: {
              50: "#f9fbe7",
              100: "#f0f4c3",
              200: "#e6ee9c",
              300: "#dce775",
              400: "#d4e157",
              500: "#cddc39",
              600: "#c0ca33",
              700: "#afb42b",
              800: "#9e9d24",
              900: "#827717",
              a100: "#f4ff81",
              a200: "#eeff41",
              a400: "#c6ff00",
              a700: "#aeea00",
            },
            yellow: {
              50: "#fffde7",
              100: "#fff9c4",
              200: "#fff59d",
              300: "#fff176",
              400: "#ffee58",
              500: "#ffeb3b",
              600: "#fdd835",
              700: "#fbc02d",
              800: "#f9a825",
              900: "#f57f17",
              a100: "#ffff8d",
              a200: "#ffff00",
              a400: "#ffea00",
              a700: "#ffd600",
            },
            amber: {
              50: "#fff8e1",
              100: "#ffecb3",
              200: "#ffe082",
              300: "#ffd54f",
              400: "#ffca28",
              500: "#ffc107",
              600: "#ffb300",
              700: "#ffa000",
              800: "#ff8f00",
              900: "#ff6f00",
              a100: "#ffe57f",
              a200: "#ffd740",
              a400: "#ffc400",
              a700: "#ffab00",
            },
            orange: {
              50: "#fff3e0",
              100: "#ffe0b2",
              200: "#ffcc80",
              300: "#ffb74d",
              400: "#ffa726",
              500: "#ff9800",
              600: "#fb8c00",
              700: "#f57c00",
              800: "#ef6c00",
              900: "#e65100",
              a100: "#ffd180",
              a200: "#ffab40",
              a400: "#ff9100",
              a700: "#ff6d00",
            },
            deepOrange: {
              50: "#fbe9e7",
              100: "#ffccbc",
              200: "#ffab91",
              300: "#ff8a65",
              400: "#ff7043",
              500: "#ff5722",
              600: "#f4511e",
              700: "#e64a19",
              800: "#d84315",
              900: "#bf360c",
              a100: "#ff9e80",
              a200: "#ff6e40",
              a400: "#ff3d00",
              a700: "#dd2c00",
            },
            brown: {
              50: "#efebe9",
              100: "#d7ccc8",
              200: "#bcaaa4",
              300: "#a1887f",
              400: "#8d6e63",
              500: "#795548",
              600: "#6d4c41",
              700: "#5d4037",
              800: "#4e342e",
              900: "#3e2723",
            },
            grey: {
              50: "#fafafa",
              100: "#f5f5f5",
              200: "#eeeeee",
              300: "#e0e0e0",
              400: "#bdbdbd",
              500: "#9e9e9e",
              600: "#757575",
              700: "#616161",
              800: "#424242",
              900: "#212121",
            },
            blueGrey: {
              50: "#eceff1",
              100: "#cfd8dc",
              200: "#b0bec5",
              300: "#90a4ae",
              400: "#78909c",
              500: "#607d8b",
              600: "#546e7a",
              700: "#455a64",
              800: "#37474f",
              900: "#263238",
            },
            darkText: {
              primary: "rgba(0, 0, 0, 0.87)",
              secondary: "rgba(0, 0, 0, 0.54)",
              disabled: "rgba(0, 0, 0, 0.38)",
              dividers: "rgba(0, 0, 0, 0.12)",
            },
            lightText: {
              primary: "rgba(255, 255, 255, 1)",
              secondary: "rgba(255, 255, 255, 0.7)",
              disabled: "rgba(255, 255, 255, 0.5)",
              dividers: "rgba(255, 255, 255, 0.12)",
            },
            darkIcons: {
              active: "rgba(0, 0, 0, 0.54)",
              inactive: "rgba(0, 0, 0, 0.38)",
            },
            lightIcons: {
              active: "rgba(255, 255, 255, 1)",
              inactive: "rgba(255, 255, 255, 0.5)",
            },
            white: "#ffffff",
            black: "#000000",
          });
}); /*!node_modules/react-color/lib/components/circle/CircleSwatch.js*/
amis.define("a4f0122", function (e, t, a, o) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.CircleSwatch = void 0);
  var r = l(e("8d5e11f")),
    c = e("1536f14"),
    i = l(c),
    n = e("592bd27");
  function l(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var s = (t.CircleSwatch = function (e) {
    var t = e.color,
      a = e.onClick,
      o = e.onSwatchHover,
      c = e.hover,
      l = e.active,
      s = e.circleSize,
      d = e.circleSpacing,
      h = (0, i.default)(
        {
          default: {
            swatch: {
              width: s,
              height: s,
              marginRight: d,
              marginBottom: d,
              transform: "scale(1)",
              transition: "100ms transform ease",
            },
            Swatch: {
              borderRadius: "50%",
              background: "transparent",
              boxShadow: "inset 0 0 0 " + (s / 2 + 1) + "px " + t,
              transition: "100ms box-shadow ease",
            },
          },
          hover: { swatch: { transform: "scale(1.2)" } },
          active: { Swatch: { boxShadow: "inset 0 0 0 3px " + t } },
        },
        { hover: c, active: l },
      );
    return r.default.createElement(
      "div",
      { style: h.swatch },
      r.default.createElement(n.Swatch, {
        style: h.Swatch,
        color: t,
        onClick: a,
        onHover: o,
        focusStyle: { boxShadow: h.Swatch.boxShadow + ", 0 0 5px " + t },
      }),
    );
  });
  (s.defaultProps = { circleSize: 28, circleSpacing: 14 }),
    (t.default = (0, c.handleHover)(s));
}); /*!node_modules/react-color/lib/components/circle/Circle.js*/
amis.define("e5f4ad6", function (e, r, l, t) {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }), (r.Circle = void 0);
  var a = s(e("8d5e11f")),
    i = s(e("5ff1f4a")),
    c = s(e("1536f14")),
    n = s(e("9de79e5")),
    o = s(e("db13e32")),
    u = (function (e) {
      if (e && e.__esModule) return e;
      var r = {};
      if (null != e)
        for (var l in e)
          Object.prototype.hasOwnProperty.call(e, l) && (r[l] = e[l]);
      return (r.default = e), r;
    })(e("aaef83a")),
    d = e("592bd27"),
    f = s(e("a4f0122"));
  function s(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var p = (r.Circle = function (e) {
    var r = e.width,
      l = e.onChange,
      t = e.onSwatchHover,
      i = e.colors,
      u = e.hex,
      d = e.circleSize,
      s = e.styles,
      p = void 0 === s ? {} : s,
      g = e.circleSpacing,
      h = e.className,
      y = void 0 === h ? "" : h,
      m = (0, c.default)(
        (0, o.default)(
          {
            default: {
              card: {
                width: r,
                display: "flex",
                flexWrap: "wrap",
                marginRight: -g,
                marginBottom: -g,
              },
            },
          },
          p,
        ),
      ),
      v = function (e, r) {
        return l({ hex: e, source: "hex" }, r);
      };
    return a.default.createElement(
      "div",
      { style: m.card, className: "circle-picker " + y },
      (0, n.default)(i, function (e) {
        return a.default.createElement(f.default, {
          key: e,
          color: e,
          onClick: v,
          onSwatchHover: t,
          active: u === e.toLowerCase(),
          circleSize: d,
          circleSpacing: g,
        });
      }),
    );
  });
  (p.propTypes = {
    width: i.default.oneOfType([i.default.string, i.default.number]),
    circleSize: i.default.number,
    circleSpacing: i.default.number,
    styles: i.default.object,
  }),
    (p.defaultProps = {
      width: 252,
      circleSize: 28,
      circleSpacing: 14,
      colors: [
        u.red[500],
        u.pink[500],
        u.purple[500],
        u.deepPurple[500],
        u.indigo[500],
        u.blue[500],
        u.lightBlue[500],
        u.cyan[500],
        u.teal[500],
        u.green[500],
        u.lightGreen[500],
        u.lime[500],
        u.yellow[500],
        u.amber[500],
        u.orange[500],
        u.deepOrange[500],
        u.brown[500],
        u.blueGrey[500],
      ],
      styles: {},
    }),
    (r.default = (0, d.ColorWrap)(p));
}); /*!node_modules/react-color/lib/components/chrome/ChromeFields.js*/
amis.define("e211466", function (e, t, l, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.ChromeFields = void 0);
  var n = (function () {
      function e(e, t) {
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
        }
      }
      return function (t, l, a) {
        return l && e(t.prototype, l), a && e(t, a), t;
      };
    })(),
    i = u(e("8d5e11f")),
    r = u(e("1536f14")),
    s = (function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var l in e)
          Object.prototype.hasOwnProperty.call(e, l) && (t[l] = e[l]);
      return (t.default = e), t;
    })(e("7f4cfbc")),
    o = u(e("209f93c")),
    p = e("592bd27"),
    h = u(e("82f81ff"));
  function u(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var d = (t.ChromeFields = (function (e) {
    function t(e) {
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, t);
      var l = (function (e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return (
        (l.toggleViews = function () {
          "hex" === l.state.view
            ? l.setState({ view: "rgb" })
            : "rgb" === l.state.view
              ? l.setState({ view: "hsl" })
              : "hsl" === l.state.view &&
                (1 === l.props.hsl.a
                  ? l.setState({ view: "hex" })
                  : l.setState({ view: "rgb" }));
        }),
        (l.handleChange = function (e, t) {
          e.hex
            ? s.isValidHex(e.hex) &&
              l.props.onChange({ hex: e.hex, source: "hex" }, t)
            : e.r || e.g || e.b
              ? l.props.onChange(
                  {
                    r: e.r || l.props.rgb.r,
                    g: e.g || l.props.rgb.g,
                    b: e.b || l.props.rgb.b,
                    source: "rgb",
                  },
                  t,
                )
              : e.a
                ? (e.a < 0 ? (e.a = 0) : e.a > 1 && (e.a = 1),
                  l.props.onChange(
                    {
                      h: l.props.hsl.h,
                      s: l.props.hsl.s,
                      l: l.props.hsl.l,
                      a: Math.round(100 * e.a) / 100,
                      source: "rgb",
                    },
                    t,
                  ))
                : (e.h || e.s || e.l) &&
                  ("string" == typeof e.s &&
                    e.s.includes("%") &&
                    (e.s = e.s.replace("%", "")),
                  "string" == typeof e.l &&
                    e.l.includes("%") &&
                    (e.l = e.l.replace("%", "")),
                  1 == e.s ? (e.s = 0.01) : 1 == e.l && (e.l = 0.01),
                  l.props.onChange(
                    {
                      h: e.h || l.props.hsl.h,
                      s: Number((0, o.default)(e.s) ? l.props.hsl.s : e.s),
                      l: Number((0, o.default)(e.l) ? l.props.hsl.l : e.l),
                      source: "hsl",
                    },
                    t,
                  ));
        }),
        (l.showHighlight = function (e) {
          e.currentTarget.style.background = "#eee";
        }),
        (l.hideHighlight = function (e) {
          e.currentTarget.style.background = "transparent";
        }),
        1 !== e.hsl.a && "hex" === e.view
          ? (l.state = { view: "rgb" })
          : (l.state = { view: e.view }),
        l
      );
    }
    return (
      (function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(t, e),
      n(
        t,
        [
          {
            key: "render",
            value: function () {
              var e = this,
                t = (0, r.default)(
                  {
                    default: {
                      wrap: { paddingTop: "16px", display: "flex" },
                      fields: {
                        flex: "1",
                        display: "flex",
                        marginLeft: "-6px",
                      },
                      field: { paddingLeft: "6px", width: "100%" },
                      alpha: { paddingLeft: "6px", width: "100%" },
                      toggle: {
                        width: "32px",
                        textAlign: "right",
                        position: "relative",
                      },
                      icon: {
                        marginRight: "-4px",
                        marginTop: "12px",
                        cursor: "pointer",
                        position: "relative",
                      },
                      iconHighlight: {
                        position: "absolute",
                        width: "24px",
                        height: "28px",
                        background: "#eee",
                        borderRadius: "4px",
                        top: "10px",
                        left: "12px",
                        display: "none",
                      },
                      input: {
                        fontSize: "11px",
                        color: "#333",
                        width: "100%",
                        borderRadius: "2px",
                        border: "none",
                        boxShadow: "inset 0 0 0 1px #dadada",
                        height: "21px",
                        textAlign: "center",
                      },
                      label: {
                        textTransform: "uppercase",
                        fontSize: "11px",
                        lineHeight: "11px",
                        color: "#969696",
                        textAlign: "center",
                        display: "block",
                        marginTop: "12px",
                      },
                      svg: {
                        fill: "#333",
                        width: "24px",
                        height: "24px",
                        border: "1px transparent solid",
                        borderRadius: "5px",
                      },
                    },
                    disableAlpha: { alpha: { display: "none" } },
                  },
                  this.props,
                  this.state,
                ),
                l = void 0;
              return (
                "hex" === this.state.view
                  ? (l = i.default.createElement(
                      "div",
                      { style: t.fields, className: "flexbox-fix" },
                      i.default.createElement(
                        "div",
                        { style: t.field },
                        i.default.createElement(p.EditableInput, {
                          style: { input: t.input, label: t.label },
                          label: "hex",
                          value: this.props.hex,
                          onChange: this.handleChange,
                        }),
                      ),
                    ))
                  : "rgb" === this.state.view
                    ? (l = i.default.createElement(
                        "div",
                        { style: t.fields, className: "flexbox-fix" },
                        i.default.createElement(
                          "div",
                          { style: t.field },
                          i.default.createElement(p.EditableInput, {
                            style: { input: t.input, label: t.label },
                            label: "r",
                            value: this.props.rgb.r,
                            onChange: this.handleChange,
                          }),
                        ),
                        i.default.createElement(
                          "div",
                          { style: t.field },
                          i.default.createElement(p.EditableInput, {
                            style: { input: t.input, label: t.label },
                            label: "g",
                            value: this.props.rgb.g,
                            onChange: this.handleChange,
                          }),
                        ),
                        i.default.createElement(
                          "div",
                          { style: t.field },
                          i.default.createElement(p.EditableInput, {
                            style: { input: t.input, label: t.label },
                            label: "b",
                            value: this.props.rgb.b,
                            onChange: this.handleChange,
                          }),
                        ),
                        i.default.createElement(
                          "div",
                          { style: t.alpha },
                          i.default.createElement(p.EditableInput, {
                            style: { input: t.input, label: t.label },
                            label: "a",
                            value: this.props.rgb.a,
                            arrowOffset: 0.01,
                            onChange: this.handleChange,
                          }),
                        ),
                      ))
                    : "hsl" === this.state.view &&
                      (l = i.default.createElement(
                        "div",
                        { style: t.fields, className: "flexbox-fix" },
                        i.default.createElement(
                          "div",
                          { style: t.field },
                          i.default.createElement(p.EditableInput, {
                            style: { input: t.input, label: t.label },
                            label: "h",
                            value: Math.round(this.props.hsl.h),
                            onChange: this.handleChange,
                          }),
                        ),
                        i.default.createElement(
                          "div",
                          { style: t.field },
                          i.default.createElement(p.EditableInput, {
                            style: { input: t.input, label: t.label },
                            label: "s",
                            value: Math.round(100 * this.props.hsl.s) + "%",
                            onChange: this.handleChange,
                          }),
                        ),
                        i.default.createElement(
                          "div",
                          { style: t.field },
                          i.default.createElement(p.EditableInput, {
                            style: { input: t.input, label: t.label },
                            label: "l",
                            value: Math.round(100 * this.props.hsl.l) + "%",
                            onChange: this.handleChange,
                          }),
                        ),
                        i.default.createElement(
                          "div",
                          { style: t.alpha },
                          i.default.createElement(p.EditableInput, {
                            style: { input: t.input, label: t.label },
                            label: "a",
                            value: this.props.hsl.a,
                            arrowOffset: 0.01,
                            onChange: this.handleChange,
                          }),
                        ),
                      )),
                i.default.createElement(
                  "div",
                  { style: t.wrap, className: "flexbox-fix" },
                  l,
                  i.default.createElement(
                    "div",
                    { style: t.toggle },
                    i.default.createElement(
                      "div",
                      {
                        style: t.icon,
                        onClick: this.toggleViews,
                        ref: function (t) {
                          return (e.icon = t);
                        },
                      },
                      i.default.createElement(h.default, {
                        style: t.svg,
                        onMouseOver: this.showHighlight,
                        onMouseEnter: this.showHighlight,
                        onMouseOut: this.hideHighlight,
                      }),
                    ),
                  ),
                )
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (e, t) {
              return 1 !== e.hsl.a && "hex" === t.view ? { view: "rgb" } : null;
            },
          },
        ],
      ),
      t
    );
  })(i.default.Component));
  (d.defaultProps = { view: "hex" }), (t.default = d);
}); /*!node_modules/react-color/lib/components/chrome/ChromePointer.js*/
amis.define("f3c43c3", function (e, r, t, a) {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.ChromePointer = void 0);
  var o = i(e("8d5e11f")),
    d = i(e("1536f14"));
  function i(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var n = (r.ChromePointer = function () {
    var e = (0, d.default)({
      default: {
        picker: {
          width: "12px",
          height: "12px",
          borderRadius: "6px",
          transform: "translate(-6px, -1px)",
          backgroundColor: "rgb(248, 248, 248)",
          boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
        },
      },
    });
    return o.default.createElement("div", { style: e.picker });
  });
  r.default = n;
}); /*!node_modules/react-color/lib/components/chrome/ChromePointerCircle.js*/
amis.define("3ecba0e", function (e, t, r, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.ChromePointerCircle = void 0);
  var a = f(e("8d5e11f")),
    d = f(e("1536f14"));
  function f(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var n = (t.ChromePointerCircle = function () {
    var e = (0, d.default)({
      default: {
        picker: {
          width: "12px",
          height: "12px",
          borderRadius: "6px",
          boxShadow: "inset 0 0 0 1px #fff",
          transform: "translate(-6px, -6px)",
        },
      },
    });
    return a.default.createElement("div", { style: e.picker });
  });
  t.default = n;
}); /*!node_modules/react-color/lib/components/chrome/Chrome.js*/
amis.define("c8725e3", function (e, t, a, l) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.Chrome = void 0);
  var d = h(e("8d5e11f")),
    i = h(e("5ff1f4a")),
    r = h(e("1536f14")),
    o = h(e("db13e32")),
    n = e("592bd27"),
    s = h(e("e211466")),
    p = h(e("f3c43c3")),
    u = h(e("3ecba0e"));
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var f = (t.Chrome = function (e) {
    var t = e.width,
      a = e.onChange,
      l = e.disableAlpha,
      i = e.rgb,
      h = e.hsl,
      f = e.hsv,
      c = e.hex,
      x = e.renderers,
      b = e.styles,
      g = void 0 === b ? {} : b,
      m = e.className,
      v = void 0 === m ? "" : m,
      y = e.defaultView,
      w = (0, r.default)(
        (0, o.default)(
          {
            default: {
              picker: {
                width: t,
                background: "#fff",
                borderRadius: "2px",
                boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
                boxSizing: "initial",
                fontFamily: "Menlo",
              },
              saturation: {
                width: "100%",
                paddingBottom: "55%",
                position: "relative",
                borderRadius: "2px 2px 0 0",
                overflow: "hidden",
              },
              Saturation: { radius: "2px 2px 0 0" },
              body: { padding: "16px 16px 12px" },
              controls: { display: "flex" },
              color: { width: "32px" },
              swatch: {
                marginTop: "6px",
                width: "16px",
                height: "16px",
                borderRadius: "8px",
                position: "relative",
                overflow: "hidden",
              },
              active: {
                absolute: "0px 0px 0px 0px",
                borderRadius: "8px",
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
                background:
                  "rgba(" + i.r + ", " + i.g + ", " + i.b + ", " + i.a + ")",
                zIndex: "2",
              },
              toggles: { flex: "1" },
              hue: {
                height: "10px",
                position: "relative",
                marginBottom: "8px",
              },
              Hue: { radius: "2px" },
              alpha: { height: "10px", position: "relative" },
              Alpha: { radius: "2px" },
            },
            disableAlpha: {
              color: { width: "22px" },
              alpha: { display: "none" },
              hue: { marginBottom: "0px" },
              swatch: { width: "10px", height: "10px", marginTop: "0px" },
            },
          },
          g,
        ),
        { disableAlpha: l },
      );
    return d.default.createElement(
      "div",
      { style: w.picker, className: "chrome-picker " + v },
      d.default.createElement(
        "div",
        { style: w.saturation },
        d.default.createElement(n.Saturation, {
          style: w.Saturation,
          hsl: h,
          hsv: f,
          pointer: u.default,
          onChange: a,
        }),
      ),
      d.default.createElement(
        "div",
        { style: w.body },
        d.default.createElement(
          "div",
          { style: w.controls, className: "flexbox-fix" },
          d.default.createElement(
            "div",
            { style: w.color },
            d.default.createElement(
              "div",
              { style: w.swatch },
              d.default.createElement("div", { style: w.active }),
              d.default.createElement(n.Checkboard, { renderers: x }),
            ),
          ),
          d.default.createElement(
            "div",
            { style: w.toggles },
            d.default.createElement(
              "div",
              { style: w.hue },
              d.default.createElement(n.Hue, {
                style: w.Hue,
                hsl: h,
                pointer: p.default,
                onChange: a,
              }),
            ),
            d.default.createElement(
              "div",
              { style: w.alpha },
              d.default.createElement(n.Alpha, {
                style: w.Alpha,
                rgb: i,
                hsl: h,
                pointer: p.default,
                renderers: x,
                onChange: a,
              }),
            ),
          ),
        ),
        d.default.createElement(s.default, {
          rgb: i,
          hsl: h,
          hex: c,
          view: y,
          onChange: a,
          disableAlpha: l,
        }),
      ),
    );
  });
  (f.propTypes = {
    width: i.default.oneOfType([i.default.string, i.default.number]),
    disableAlpha: i.default.bool,
    styles: i.default.object,
    defaultView: i.default.oneOf(["hex", "rgb", "hsl"]),
  }),
    (f.defaultProps = { width: 225, disableAlpha: !1, styles: {} }),
    (t.default = (0, n.ColorWrap)(f));
}); /*!node_modules/react-color/lib/components/compact/CompactColor.js*/
amis.define("f65b073", function (o, t, e, r) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.CompactColor = void 0);
  var a = d(o("8d5e11f")),
    n = d(o("1536f14")),
    c = (function (o) {
      if (o && o.__esModule) return o;
      var t = {};
      if (null != o)
        for (var e in o)
          Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
      return (t.default = o), t;
    })(o("7f4cfbc")),
    l = o("592bd27");
  function d(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var i = (t.CompactColor = function (o) {
    var t = o.color,
      e = o.onClick,
      r = void 0 === e ? function () {} : e,
      d = o.onSwatchHover,
      i = o.active,
      u = (0, n.default)(
        {
          default: {
            color: {
              background: t,
              width: "15px",
              height: "15px",
              float: "left",
              marginRight: "5px",
              marginBottom: "5px",
              position: "relative",
              cursor: "pointer",
            },
            dot: {
              absolute: "5px 5px 5px 5px",
              background: c.getContrastingColor(t),
              borderRadius: "50%",
              opacity: "0",
            },
          },
          active: { dot: { opacity: "1" } },
          "color-#FFFFFF": {
            color: { boxShadow: "inset 0 0 0 1px #ddd" },
            dot: { background: "#000" },
          },
          transparent: { dot: { background: "#000" } },
        },
        {
          active: i,
          "color-#FFFFFF": "#FFFFFF" === t,
          transparent: "transparent" === t,
        },
      );
    return a.default.createElement(
      l.Swatch,
      {
        style: u.color,
        color: t,
        onClick: r,
        onHover: d,
        focusStyle: { boxShadow: "0 0 4px " + t },
      },
      a.default.createElement("div", { style: u.dot }),
    );
  });
  t.default = i;
}); /*!node_modules/react-color/lib/components/compact/CompactFields.js*/
amis.define("78d22a7", function (e, t, l, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.CompactFields = void 0);
  var n = o(e("8d5e11f")),
    i = o(e("1536f14")),
    p = e("592bd27");
  function o(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var r = (t.CompactFields = function (e) {
    var t = e.hex,
      l = e.rgb,
      a = e.onChange,
      o = (0, i.default)({
        default: {
          fields: {
            display: "flex",
            paddingBottom: "6px",
            paddingRight: "5px",
            position: "relative",
          },
          active: {
            position: "absolute",
            top: "6px",
            left: "5px",
            height: "9px",
            width: "9px",
            background: t,
          },
          HEXwrap: { flex: "6", position: "relative" },
          HEXinput: {
            width: "80%",
            padding: "0px",
            paddingLeft: "20%",
            border: "none",
            outline: "none",
            background: "none",
            fontSize: "12px",
            color: "#333",
            height: "16px",
          },
          HEXlabel: { display: "none" },
          RGBwrap: { flex: "3", position: "relative" },
          RGBinput: {
            width: "70%",
            padding: "0px",
            paddingLeft: "30%",
            border: "none",
            outline: "none",
            background: "none",
            fontSize: "12px",
            color: "#333",
            height: "16px",
          },
          RGBlabel: {
            position: "absolute",
            top: "3px",
            left: "0px",
            lineHeight: "16px",
            textTransform: "uppercase",
            fontSize: "12px",
            color: "#999",
          },
        },
      }),
      r = function (e, t) {
        e.r || e.g || e.b
          ? a({ r: e.r || l.r, g: e.g || l.g, b: e.b || l.b, source: "rgb" }, t)
          : a({ hex: e.hex, source: "hex" }, t);
      };
    return n.default.createElement(
      "div",
      { style: o.fields, className: "flexbox-fix" },
      n.default.createElement("div", { style: o.active }),
      n.default.createElement(p.EditableInput, {
        style: { wrap: o.HEXwrap, input: o.HEXinput, label: o.HEXlabel },
        label: "hex",
        value: t,
        onChange: r,
      }),
      n.default.createElement(p.EditableInput, {
        style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
        label: "r",
        value: l.r,
        onChange: r,
      }),
      n.default.createElement(p.EditableInput, {
        style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
        label: "g",
        value: l.g,
        onChange: r,
      }),
      n.default.createElement(p.EditableInput, {
        style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
        label: "b",
        value: l.b,
        onChange: r,
      }),
    );
  });
  t.default = r;
}); /*!node_modules/react-color/lib/components/compact/Compact.js*/
amis.define("9b6a0d7", function (e, t, a, l) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.Compact = void 0);
  var c = F(e("8d5e11f")),
    o = F(e("5ff1f4a")),
    r = F(e("1536f14")),
    d = F(e("9de79e5")),
    f = F(e("db13e32")),
    n = (function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
      return (t.default = e), t;
    })(e("7f4cfbc")),
    u = e("592bd27"),
    i = F(e("f65b073")),
    s = F(e("78d22a7"));
  function F(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var p = (t.Compact = function (e) {
    var t = e.onChange,
      a = e.onSwatchHover,
      l = e.colors,
      o = e.hex,
      F = e.rgb,
      p = e.styles,
      C = void 0 === p ? {} : p,
      m = e.className,
      v = void 0 === m ? "" : m,
      h = (0, r.default)(
        (0, f.default)(
          {
            default: {
              Compact: { background: "#f6f6f6", radius: "4px" },
              compact: {
                paddingTop: "5px",
                paddingLeft: "5px",
                boxSizing: "initial",
                width: "240px",
              },
              clear: { clear: "both" },
            },
          },
          C,
        ),
      ),
      b = function (e, a) {
        e.hex
          ? n.isValidHex(e.hex) && t({ hex: e.hex, source: "hex" }, a)
          : t(e, a);
      };
    return c.default.createElement(
      u.Raised,
      { style: h.Compact, styles: C },
      c.default.createElement(
        "div",
        { style: h.compact, className: "compact-picker " + v },
        c.default.createElement(
          "div",
          null,
          (0, d.default)(l, function (e) {
            return c.default.createElement(i.default, {
              key: e,
              color: e,
              active: e.toLowerCase() === o,
              onClick: b,
              onSwatchHover: a,
            });
          }),
          c.default.createElement("div", { style: h.clear }),
        ),
        c.default.createElement(s.default, { hex: o, rgb: F, onChange: b }),
      ),
    );
  });
  (p.propTypes = {
    colors: o.default.arrayOf(o.default.string),
    styles: o.default.object,
  }),
    (p.defaultProps = {
      colors: [
        "#4D4D4D",
        "#999999",
        "#FFFFFF",
        "#F44E3B",
        "#FE9200",
        "#FCDC00",
        "#DBDF00",
        "#A4DD00",
        "#68CCCA",
        "#73D8FF",
        "#AEA1FF",
        "#FDA1FF",
        "#333333",
        "#808080",
        "#cccccc",
        "#D33115",
        "#E27300",
        "#FCC400",
        "#B0BC00",
        "#68BC00",
        "#16A5A5",
        "#009CE0",
        "#7B64FF",
        "#FA28FF",
        "#000000",
        "#666666",
        "#B3B3B3",
        "#9F0500",
        "#C45100",
        "#FB9E00",
        "#808900",
        "#194D33",
        "#0C797D",
        "#0062B1",
        "#653294",
        "#AB149E",
      ],
      styles: {},
    }),
    (t.default = (0, u.ColorWrap)(p));
}); /*!node_modules/react-color/lib/components/github/GithubSwatch.js*/
amis.define("5a79574", function (e, t, o, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.GithubSwatch = void 0);
  var r = c(e("8d5e11f")),
    i = e("1536f14"),
    l = c(i),
    n = e("592bd27");
  function c(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var d = (t.GithubSwatch = function (e) {
    var t = e.hover,
      o = e.color,
      a = e.onClick,
      i = e.onSwatchHover,
      c = {
        position: "relative",
        zIndex: "2",
        outline: "2px solid #fff",
        boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)",
      },
      d = (0, l.default)(
        {
          default: { swatch: { width: "25px", height: "25px", fontSize: "0" } },
          hover: { swatch: c },
        },
        { hover: t },
      );
    return r.default.createElement(
      "div",
      { style: d.swatch },
      r.default.createElement(n.Swatch, {
        color: o,
        onClick: a,
        onHover: i,
        focusStyle: c,
      }),
    );
  });
  t.default = (0, i.handleHover)(d);
}); /*!node_modules/react-color/lib/components/github/Github.js*/
amis.define("a1d5497", function (t, e, r, o) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 }), (e.Github = void 0);
  var a = g(t("8d5e11f")),
    l = g(t("5ff1f4a")),
    i = g(t("1536f14")),
    n = g(t("9de79e5")),
    d = g(t("db13e32")),
    f = t("592bd27"),
    p = g(t("5a79574"));
  function g(t) {
    return t && t.__esModule ? t : { default: t };
  }
  var s = (e.Github = function (t) {
    var e = t.width,
      r = t.colors,
      o = t.onChange,
      l = t.onSwatchHover,
      f = t.triangle,
      g = t.styles,
      s = void 0 === g ? {} : g,
      u = t.className,
      h = void 0 === u ? "" : u,
      b = (0, i.default)(
        (0, d.default)(
          {
            default: {
              card: {
                width: e,
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.2)",
                boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
                borderRadius: "4px",
                position: "relative",
                padding: "5px",
                display: "flex",
                flexWrap: "wrap",
              },
              triangle: {
                position: "absolute",
                border: "7px solid transparent",
                borderBottomColor: "#fff",
              },
              triangleShadow: {
                position: "absolute",
                border: "8px solid transparent",
                borderBottomColor: "rgba(0,0,0,0.15)",
              },
            },
            "hide-triangle": {
              triangle: { display: "none" },
              triangleShadow: { display: "none" },
            },
            "top-left-triangle": {
              triangle: { top: "-14px", left: "10px" },
              triangleShadow: { top: "-16px", left: "9px" },
            },
            "top-right-triangle": {
              triangle: { top: "-14px", right: "10px" },
              triangleShadow: { top: "-16px", right: "9px" },
            },
            "bottom-left-triangle": {
              triangle: {
                top: "35px",
                left: "10px",
                transform: "rotate(180deg)",
              },
              triangleShadow: {
                top: "37px",
                left: "9px",
                transform: "rotate(180deg)",
              },
            },
            "bottom-right-triangle": {
              triangle: {
                top: "35px",
                right: "10px",
                transform: "rotate(180deg)",
              },
              triangleShadow: {
                top: "37px",
                right: "9px",
                transform: "rotate(180deg)",
              },
            },
          },
          s,
        ),
        {
          "hide-triangle": "hide" === f,
          "top-left-triangle": "top-left" === f,
          "top-right-triangle": "top-right" === f,
          "bottom-left-triangle": "bottom-left" === f,
          "bottom-right-triangle": "bottom-right" === f,
        },
      ),
      x = function (t, e) {
        return o({ hex: t, source: "hex" }, e);
      };
    return a.default.createElement(
      "div",
      { style: b.card, className: "github-picker " + h },
      a.default.createElement("div", { style: b.triangleShadow }),
      a.default.createElement("div", { style: b.triangle }),
      (0, n.default)(r, function (t) {
        return a.default.createElement(p.default, {
          color: t,
          key: t,
          onClick: x,
          onSwatchHover: l,
        });
      }),
    );
  });
  (s.propTypes = {
    width: l.default.oneOfType([l.default.string, l.default.number]),
    colors: l.default.arrayOf(l.default.string),
    triangle: l.default.oneOf([
      "hide",
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right",
    ]),
    styles: l.default.object,
  }),
    (s.defaultProps = {
      width: 200,
      colors: [
        "#B80000",
        "#DB3E00",
        "#FCCB00",
        "#008B02",
        "#006B76",
        "#1273DE",
        "#004DCF",
        "#5300EB",
        "#EB9694",
        "#FAD0C3",
        "#FEF3BD",
        "#C1E1C5",
        "#BEDADC",
        "#C4DEF6",
        "#BED3F3",
        "#D4C4FB",
      ],
      triangle: "top-left",
      styles: {},
    }),
    (e.default = (0, f.ColorWrap)(s));
}); /*!node_modules/react-color/lib/components/hue/HuePointer.js*/
amis.define("9c42923", function (e, r, t, a) {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.SliderPointer = void 0);
  var i = n(e("8d5e11f")),
    d = n(e("1536f14"));
  function n(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var l = (r.SliderPointer = function (e) {
    var r = e.direction,
      t = (0, d.default)(
        {
          default: {
            picker: {
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              transform: "translate(-9px, -1px)",
              backgroundColor: "rgb(248, 248, 248)",
              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
            },
          },
          vertical: { picker: { transform: "translate(-3px, -9px)" } },
        },
        { vertical: "vertical" === r },
      );
    return i.default.createElement("div", { style: t.picker });
  });
  r.default = l;
}); /*!node_modules/react-color/lib/components/hue/Hue.js*/
amis.define("fd89b60", function (e, t, r, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.HuePicker = void 0);
  var a =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
        }
        return e;
      },
    n = f(e("8d5e11f")),
    o = f(e("5ff1f4a")),
    l = f(e("1536f14")),
    u = f(e("db13e32")),
    d = e("592bd27"),
    s = f(e("9c42923"));
  function f(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var c = (t.HuePicker = function (e) {
    var t = e.width,
      r = e.height,
      i = e.onChange,
      o = e.hsl,
      s = e.direction,
      f = e.pointer,
      c = e.styles,
      h = void 0 === c ? {} : c,
      p = e.className,
      v = void 0 === p ? "" : p,
      y = (0, l.default)(
        (0, u.default)(
          {
            default: {
              picker: { position: "relative", width: t, height: r },
              hue: { radius: "2px" },
            },
          },
          h,
        ),
      );
    return n.default.createElement(
      "div",
      { style: y.picker, className: "hue-picker " + v },
      n.default.createElement(
        d.Hue,
        a({}, y.hue, {
          hsl: o,
          pointer: f,
          onChange: function (e) {
            return i({ a: 1, h: e.h, l: 0.5, s: 1 });
          },
          direction: s,
        }),
      ),
    );
  });
  (c.propTypes = { styles: o.default.object }),
    (c.defaultProps = {
      width: "316px",
      height: "16px",
      direction: "horizontal",
      pointer: s.default,
      styles: {},
    }),
    (t.default = (0, d.ColorWrap)(c));
}); /*!node_modules/react-color/lib/components/material/Material.js*/
amis.define("4184aba", function (e, t, l, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.Material = void 0);
  var i = d(e("8d5e11f")),
    r = d(e("1536f14")),
    n = d(e("db13e32")),
    o = (function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var l in e)
          Object.prototype.hasOwnProperty.call(e, l) && (t[l] = e[l]);
      return (t.default = e), t;
    })(e("7f4cfbc")),
    p = e("592bd27");
  function d(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var u = (t.Material = function (e) {
    var t = e.onChange,
      l = e.hex,
      a = e.rgb,
      d = e.styles,
      u = void 0 === d ? {} : d,
      s = e.className,
      f = void 0 === s ? "" : s,
      b = (0, r.default)(
        (0, n.default)(
          {
            default: {
              material: {
                width: "98px",
                height: "98px",
                padding: "16px",
                fontFamily: "Roboto",
              },
              HEXwrap: { position: "relative" },
              HEXinput: {
                width: "100%",
                marginTop: "12px",
                fontSize: "15px",
                color: "#333",
                padding: "0px",
                border: "0px",
                borderBottom: "2px solid " + l,
                outline: "none",
                height: "30px",
              },
              HEXlabel: {
                position: "absolute",
                top: "0px",
                left: "0px",
                fontSize: "11px",
                color: "#999999",
                textTransform: "capitalize",
              },
              Hex: { style: {} },
              RGBwrap: { position: "relative" },
              RGBinput: {
                width: "100%",
                marginTop: "12px",
                fontSize: "15px",
                color: "#333",
                padding: "0px",
                border: "0px",
                borderBottom: "1px solid #eee",
                outline: "none",
                height: "30px",
              },
              RGBlabel: {
                position: "absolute",
                top: "0px",
                left: "0px",
                fontSize: "11px",
                color: "#999999",
                textTransform: "capitalize",
              },
              split: {
                display: "flex",
                marginRight: "-10px",
                paddingTop: "11px",
              },
              third: { flex: "1", paddingRight: "10px" },
            },
          },
          u,
        ),
      ),
      x = function (e, l) {
        e.hex
          ? o.isValidHex(e.hex) && t({ hex: e.hex, source: "hex" }, l)
          : (e.r || e.g || e.b) &&
            t(
              { r: e.r || a.r, g: e.g || a.g, b: e.b || a.b, source: "rgb" },
              l,
            );
      };
    return i.default.createElement(
      p.Raised,
      { styles: u },
      i.default.createElement(
        "div",
        { style: b.material, className: "material-picker " + f },
        i.default.createElement(p.EditableInput, {
          style: { wrap: b.HEXwrap, input: b.HEXinput, label: b.HEXlabel },
          label: "hex",
          value: l,
          onChange: x,
        }),
        i.default.createElement(
          "div",
          { style: b.split, className: "flexbox-fix" },
          i.default.createElement(
            "div",
            { style: b.third },
            i.default.createElement(p.EditableInput, {
              style: { wrap: b.RGBwrap, input: b.RGBinput, label: b.RGBlabel },
              label: "r",
              value: a.r,
              onChange: x,
            }),
          ),
          i.default.createElement(
            "div",
            { style: b.third },
            i.default.createElement(p.EditableInput, {
              style: { wrap: b.RGBwrap, input: b.RGBinput, label: b.RGBlabel },
              label: "g",
              value: a.g,
              onChange: x,
            }),
          ),
          i.default.createElement(
            "div",
            { style: b.third },
            i.default.createElement(p.EditableInput, {
              style: { wrap: b.RGBwrap, input: b.RGBinput, label: b.RGBlabel },
              label: "b",
              value: a.b,
              onChange: x,
            }),
          ),
        ),
      ),
    );
  });
  t.default = (0, p.ColorWrap)(u);
}); /*!node_modules/react-color/lib/components/photoshop/PhotoshopFields.js*/
amis.define("671e222", function (e, t, l, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.PhotoshopPicker = void 0);
  var i = o(e("8d5e11f")),
    p = o(e("1536f14")),
    n = (function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var l in e)
          Object.prototype.hasOwnProperty.call(e, l) && (t[l] = e[l]);
      return (t.default = e), t;
    })(e("7f4cfbc")),
    r = e("592bd27");
  function o(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var d = (t.PhotoshopPicker = function (e) {
    var t = e.onChange,
      l = e.rgb,
      a = e.hsv,
      o = e.hex,
      d = (0, p.default)({
        default: {
          fields: {
            paddingTop: "5px",
            paddingBottom: "9px",
            width: "80px",
            position: "relative",
          },
          divider: { height: "5px" },
          RGBwrap: { position: "relative" },
          RGBinput: {
            marginLeft: "40%",
            width: "40%",
            height: "18px",
            border: "1px solid #888888",
            boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
            marginBottom: "5px",
            fontSize: "13px",
            paddingLeft: "3px",
            marginRight: "10px",
          },
          RGBlabel: {
            left: "0px",
            top: "0px",
            width: "34px",
            textTransform: "uppercase",
            fontSize: "13px",
            height: "18px",
            lineHeight: "22px",
            position: "absolute",
          },
          HEXwrap: { position: "relative" },
          HEXinput: {
            marginLeft: "20%",
            width: "80%",
            height: "18px",
            border: "1px solid #888888",
            boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
            marginBottom: "6px",
            fontSize: "13px",
            paddingLeft: "3px",
          },
          HEXlabel: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "14px",
            textTransform: "uppercase",
            fontSize: "13px",
            height: "18px",
            lineHeight: "22px",
          },
          fieldSymbols: {
            position: "absolute",
            top: "5px",
            right: "-7px",
            fontSize: "13px",
          },
          symbol: { height: "20px", lineHeight: "22px", paddingBottom: "7px" },
        },
      }),
      u = function (e, i) {
        e["#"]
          ? n.isValidHex(e["#"]) && t({ hex: e["#"], source: "hex" }, i)
          : e.r || e.g || e.b
            ? t(
                { r: e.r || l.r, g: e.g || l.g, b: e.b || l.b, source: "rgb" },
                i,
              )
            : (e.h || e.s || e.v) &&
              t(
                { h: e.h || a.h, s: e.s || a.s, v: e.v || a.v, source: "hsv" },
                i,
              );
      };
    return i.default.createElement(
      "div",
      { style: d.fields },
      i.default.createElement(r.EditableInput, {
        style: { wrap: d.RGBwrap, input: d.RGBinput, label: d.RGBlabel },
        label: "h",
        value: Math.round(a.h),
        onChange: u,
      }),
      i.default.createElement(r.EditableInput, {
        style: { wrap: d.RGBwrap, input: d.RGBinput, label: d.RGBlabel },
        label: "s",
        value: Math.round(100 * a.s),
        onChange: u,
      }),
      i.default.createElement(r.EditableInput, {
        style: { wrap: d.RGBwrap, input: d.RGBinput, label: d.RGBlabel },
        label: "v",
        value: Math.round(100 * a.v),
        onChange: u,
      }),
      i.default.createElement("div", { style: d.divider }),
      i.default.createElement(r.EditableInput, {
        style: { wrap: d.RGBwrap, input: d.RGBinput, label: d.RGBlabel },
        label: "r",
        value: l.r,
        onChange: u,
      }),
      i.default.createElement(r.EditableInput, {
        style: { wrap: d.RGBwrap, input: d.RGBinput, label: d.RGBlabel },
        label: "g",
        value: l.g,
        onChange: u,
      }),
      i.default.createElement(r.EditableInput, {
        style: { wrap: d.RGBwrap, input: d.RGBinput, label: d.RGBlabel },
        label: "b",
        value: l.b,
        onChange: u,
      }),
      i.default.createElement("div", { style: d.divider }),
      i.default.createElement(r.EditableInput, {
        style: { wrap: d.HEXwrap, input: d.HEXinput, label: d.HEXlabel },
        label: "#",
        value: o.replace("#", ""),
        onChange: u,
      }),
      i.default.createElement(
        "div",
        { style: d.fieldSymbols },
        i.default.createElement("div", { style: d.symbol }, "°"),
        i.default.createElement("div", { style: d.symbol }, "%"),
        i.default.createElement("div", { style: d.symbol }, "%"),
      ),
    );
  });
  t.default = d;
}); /*!node_modules/react-color/lib/components/photoshop/PhotoshopPointerCircle.js*/
amis.define("7379d08", function (e, t, i, o) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.PhotoshopPointerCircle = void 0);
  var r = l(e("8d5e11f")),
    a = l(e("1536f14"));
  function l(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var n = (t.PhotoshopPointerCircle = function (e) {
    var t = e.hsl,
      i = (0, a.default)(
        {
          default: {
            picker: {
              width: "12px",
              height: "12px",
              borderRadius: "6px",
              boxShadow: "inset 0 0 0 1px #fff",
              transform: "translate(-6px, -6px)",
            },
          },
          "black-outline": { picker: { boxShadow: "inset 0 0 0 1px #000" } },
        },
        { "black-outline": t.l > 0.5 },
      );
    return r.default.createElement("div", { style: i.picker });
  });
  t.default = n;
}); /*!node_modules/react-color/lib/components/photoshop/PhotoshopPointer.js*/
amis.define("7d22c52", function (e, t, r, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.PhotoshopPointerCircle = void 0);
  var a = d(e("8d5e11f")),
    l = d(e("1536f14"));
  function d(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var i = (t.PhotoshopPointerCircle = function () {
    var e = (0, l.default)({
      default: {
        triangle: {
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "4px 0 4px 6px",
          borderColor: "transparent transparent transparent #fff",
          position: "absolute",
          top: "1px",
          left: "1px",
        },
        triangleBorder: {
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "5px 0 5px 8px",
          borderColor: "transparent transparent transparent #555",
        },
        left: { Extend: "triangleBorder", transform: "translate(-13px, -4px)" },
        leftInside: { Extend: "triangle", transform: "translate(-8px, -5px)" },
        right: {
          Extend: "triangleBorder",
          transform: "translate(20px, -14px) rotate(180deg)",
        },
        rightInside: { Extend: "triangle", transform: "translate(-8px, -5px)" },
      },
    });
    return a.default.createElement(
      "div",
      { style: e.pointer },
      a.default.createElement(
        "div",
        { style: e.left },
        a.default.createElement("div", { style: e.leftInside }),
      ),
      a.default.createElement(
        "div",
        { style: e.right },
        a.default.createElement("div", { style: e.rightInside }),
      ),
    );
  });
  t.default = i;
}); /*!node_modules/react-color/lib/components/photoshop/PhotoshopButton.js*/
amis.define("3f19763", function (e, t, o, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.PhotoshopButton = void 0);
  var i = a(e("8d5e11f")),
    r = a(e("1536f14"));
  function a(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var d = (t.PhotoshopButton = function (e) {
    var t = e.onClick,
      o = e.label,
      n = e.children,
      a = e.active,
      d = (0, r.default)(
        {
          default: {
            button: {
              backgroundImage:
                "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
              border: "1px solid #878787",
              borderRadius: "2px",
              height: "20px",
              boxShadow: "0 1px 0 0 #EAEAEA",
              fontSize: "14px",
              color: "#000",
              lineHeight: "20px",
              textAlign: "center",
              marginBottom: "10px",
              cursor: "pointer",
            },
          },
          active: { button: { boxShadow: "0 0 0 1px #878787" } },
        },
        { active: a },
      );
    return i.default.createElement(
      "div",
      { style: d.button, onClick: t },
      o || n,
    );
  });
  t.default = d;
}); /*!node_modules/react-color/lib/components/photoshop/PhotoshopPreviews.js*/
amis.define("379b7a9", function (e, t, r, l) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.PhotoshopPreviews = void 0);
  var n = o(e("8d5e11f")),
    a = o(e("1536f14"));
  function o(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var d = (t.PhotoshopPreviews = function (e) {
    var t = e.rgb,
      r = e.currentColor,
      l = (0, a.default)({
        default: {
          swatches: {
            border: "1px solid #B3B3B3",
            borderBottom: "1px solid #F0F0F0",
            marginBottom: "2px",
            marginTop: "1px",
          },
          new: {
            height: "34px",
            background: "rgb(" + t.r + "," + t.g + ", " + t.b + ")",
            boxShadow:
              "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000",
          },
          current: {
            height: "34px",
            background: r,
            boxShadow:
              "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000",
          },
          label: { fontSize: "14px", color: "#000", textAlign: "center" },
        },
      });
    return n.default.createElement(
      "div",
      null,
      n.default.createElement("div", { style: l.label }, "new"),
      n.default.createElement(
        "div",
        { style: l.swatches },
        n.default.createElement("div", { style: l.new }),
        n.default.createElement("div", { style: l.current }),
      ),
      n.default.createElement("div", { style: l.label }, "current"),
    );
  });
  t.default = d;
}); /*!node_modules/react-color/lib/components/photoshop/Photoshop.js*/
amis.define("a7f9abf", function (e, t, r, o) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.Photoshop = void 0);
  var a = (function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      return function (t, r, o) {
        return r && e(t.prototype, r), o && e(t, o), t;
      };
    })(),
    n = b(e("8d5e11f")),
    i = b(e("5ff1f4a")),
    l = b(e("1536f14")),
    s = b(e("db13e32")),
    p = e("592bd27"),
    d = b(e("671e222")),
    f = b(e("7379d08")),
    u = b(e("7d22c52")),
    c = b(e("3f19763")),
    h = b(e("379b7a9"));
  function b(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var x = (t.Photoshop = (function (e) {
    function t(e) {
      !(function (e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      })(this, t);
      var r = (function (e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return (r.state = { currentColor: e.hex }), r;
    }
    return (
      (function (e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      })(t, e),
      a(t, [
        {
          key: "render",
          value: function () {
            var e = this.props,
              t = e.styles,
              r = void 0 === t ? {} : t,
              o = e.className,
              a = void 0 === o ? "" : o,
              i = (0, l.default)(
                (0, s.default)(
                  {
                    default: {
                      picker: {
                        background: "#DCDCDC",
                        borderRadius: "4px",
                        boxShadow:
                          "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
                        boxSizing: "initial",
                        width: "513px",
                      },
                      head: {
                        backgroundImage:
                          "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
                        borderBottom: "1px solid #B1B1B1",
                        boxShadow:
                          "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
                        height: "23px",
                        lineHeight: "24px",
                        borderRadius: "4px 4px 0 0",
                        fontSize: "13px",
                        color: "#4D4D4D",
                        textAlign: "center",
                      },
                      body: { padding: "15px 15px 0", display: "flex" },
                      saturation: {
                        width: "256px",
                        height: "256px",
                        position: "relative",
                        border: "2px solid #B3B3B3",
                        borderBottom: "2px solid #F0F0F0",
                        overflow: "hidden",
                      },
                      hue: {
                        position: "relative",
                        height: "256px",
                        width: "19px",
                        marginLeft: "10px",
                        border: "2px solid #B3B3B3",
                        borderBottom: "2px solid #F0F0F0",
                      },
                      controls: { width: "180px", marginLeft: "10px" },
                      top: { display: "flex" },
                      previews: { width: "60px" },
                      actions: { flex: "1", marginLeft: "20px" },
                    },
                  },
                  r,
                ),
              );
            return n.default.createElement(
              "div",
              { style: i.picker, className: "photoshop-picker " + a },
              n.default.createElement(
                "div",
                { style: i.head },
                this.props.header,
              ),
              n.default.createElement(
                "div",
                { style: i.body, className: "flexbox-fix" },
                n.default.createElement(
                  "div",
                  { style: i.saturation },
                  n.default.createElement(p.Saturation, {
                    hsl: this.props.hsl,
                    hsv: this.props.hsv,
                    pointer: f.default,
                    onChange: this.props.onChange,
                  }),
                ),
                n.default.createElement(
                  "div",
                  { style: i.hue },
                  n.default.createElement(p.Hue, {
                    direction: "vertical",
                    hsl: this.props.hsl,
                    pointer: u.default,
                    onChange: this.props.onChange,
                  }),
                ),
                n.default.createElement(
                  "div",
                  { style: i.controls },
                  n.default.createElement(
                    "div",
                    { style: i.top, className: "flexbox-fix" },
                    n.default.createElement(
                      "div",
                      { style: i.previews },
                      n.default.createElement(h.default, {
                        rgb: this.props.rgb,
                        currentColor: this.state.currentColor,
                      }),
                    ),
                    n.default.createElement(
                      "div",
                      { style: i.actions },
                      n.default.createElement(c.default, {
                        label: "OK",
                        onClick: this.props.onAccept,
                        active: !0,
                      }),
                      n.default.createElement(c.default, {
                        label: "Cancel",
                        onClick: this.props.onCancel,
                      }),
                      n.default.createElement(d.default, {
                        onChange: this.props.onChange,
                        rgb: this.props.rgb,
                        hsv: this.props.hsv,
                        hex: this.props.hex,
                      }),
                    ),
                  ),
                ),
              ),
            );
          },
        },
      ]),
      t
    );
  })(n.default.Component));
  (x.propTypes = { header: i.default.string, styles: i.default.object }),
    (x.defaultProps = { header: "Color Picker", styles: {} }),
    (t.default = (0, p.ColorWrap)(x));
}); /*!node_modules/react-color/lib/components/sketch/SketchFields.js*/
amis.define("26c45c6", function (e, l, a, t) {
  "use strict";
  Object.defineProperty(l, "__esModule", { value: !0 }),
    (l.SketchFields = void 0);
  var n = u(e("8d5e11f")),
    d = u(e("1536f14")),
    i = (function (e) {
      if (e && e.__esModule) return e;
      var l = {};
      if (null != e)
        for (var a in e)
          Object.prototype.hasOwnProperty.call(e, a) && (l[a] = e[a]);
      return (l.default = e), l;
    })(e("7f4cfbc")),
    r = e("592bd27");
  function u(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var p = (l.SketchFields = function (e) {
    var l = e.onChange,
      a = e.rgb,
      t = e.hsl,
      u = e.hex,
      p = e.disableAlpha,
      b = (0, d.default)(
        {
          default: {
            fields: { display: "flex", paddingTop: "4px" },
            single: { flex: "1", paddingLeft: "6px" },
            alpha: { flex: "1", paddingLeft: "6px" },
            double: { flex: "2" },
            input: {
              width: "80%",
              padding: "4px 10% 3px",
              border: "none",
              boxShadow: "inset 0 0 0 1px #ccc",
              fontSize: "11px",
            },
            label: {
              display: "block",
              textAlign: "center",
              fontSize: "11px",
              color: "#222",
              paddingTop: "3px",
              paddingBottom: "4px",
              textTransform: "capitalize",
            },
          },
          disableAlpha: { alpha: { display: "none" } },
        },
        { disableAlpha: p },
      ),
      f = function (e, n) {
        e.hex
          ? i.isValidHex(e.hex) && l({ hex: e.hex, source: "hex" }, n)
          : e.r || e.g || e.b
            ? l(
                {
                  r: e.r || a.r,
                  g: e.g || a.g,
                  b: e.b || a.b,
                  a: a.a,
                  source: "rgb",
                },
                n,
              )
            : e.a &&
              (e.a < 0 ? (e.a = 0) : e.a > 100 && (e.a = 100),
              (e.a /= 100),
              l({ h: t.h, s: t.s, l: t.l, a: e.a, source: "rgb" }, n));
      };
    return n.default.createElement(
      "div",
      { style: b.fields, className: "flexbox-fix" },
      n.default.createElement(
        "div",
        { style: b.double },
        n.default.createElement(r.EditableInput, {
          style: { input: b.input, label: b.label },
          label: "hex",
          value: u.replace("#", ""),
          onChange: f,
        }),
      ),
      n.default.createElement(
        "div",
        { style: b.single },
        n.default.createElement(r.EditableInput, {
          style: { input: b.input, label: b.label },
          label: "r",
          value: a.r,
          onChange: f,
          dragLabel: "true",
          dragMax: "255",
        }),
      ),
      n.default.createElement(
        "div",
        { style: b.single },
        n.default.createElement(r.EditableInput, {
          style: { input: b.input, label: b.label },
          label: "g",
          value: a.g,
          onChange: f,
          dragLabel: "true",
          dragMax: "255",
        }),
      ),
      n.default.createElement(
        "div",
        { style: b.single },
        n.default.createElement(r.EditableInput, {
          style: { input: b.input, label: b.label },
          label: "b",
          value: a.b,
          onChange: f,
          dragLabel: "true",
          dragMax: "255",
        }),
      ),
      n.default.createElement(
        "div",
        { style: b.alpha },
        n.default.createElement(r.EditableInput, {
          style: { input: b.input, label: b.label },
          label: "a",
          value: Math.round(100 * a.a),
          onChange: f,
          dragLabel: "true",
          dragMax: "100",
        }),
      ),
    );
  });
  l.default = p;
}); /*!node_modules/react-color/lib/components/sketch/SketchPresetColors.js*/
amis.define("8599b9a", function (e, t, r, o) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.SketchPresetColors = void 0);
  var a =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
        }
        return e;
      },
    l = c(e("8d5e11f")),
    n = c(e("5ff1f4a")),
    s = c(e("1536f14")),
    i = e("592bd27");
  function c(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var f = (t.SketchPresetColors = function (e) {
    var t = e.colors,
      r = e.onClick,
      o = void 0 === r ? function () {} : r,
      n = e.onSwatchHover,
      c = (0, s.default)(
        {
          default: {
            colors: {
              margin: "0 -10px",
              padding: "10px 0 0 10px",
              borderTop: "1px solid #eee",
              display: "flex",
              flexWrap: "wrap",
              position: "relative",
            },
            swatchWrap: {
              width: "16px",
              height: "16px",
              margin: "0 10px 10px 0",
            },
            swatch: {
              borderRadius: "3px",
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)",
            },
          },
          "no-presets": { colors: { display: "none" } },
        },
        { "no-presets": !t || !t.length },
      ),
      f = function (e, t) {
        o({ hex: e, source: "hex" }, t);
      };
    return l.default.createElement(
      "div",
      { style: c.colors, className: "flexbox-fix" },
      t.map(function (e) {
        var t = "string" == typeof e ? { color: e } : e,
          r = "" + t.color + (t.title || "");
        return l.default.createElement(
          "div",
          { key: r, style: c.swatchWrap },
          l.default.createElement(
            i.Swatch,
            a({}, t, {
              style: c.swatch,
              onClick: f,
              onHover: n,
              focusStyle: {
                boxShadow:
                  "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + t.color,
              },
            }),
          ),
        );
      }),
    );
  });
  (f.propTypes = {
    colors: n.default.arrayOf(
      n.default.oneOfType([
        n.default.string,
        n.default.shape({ color: n.default.string, title: n.default.string }),
      ]),
    ).isRequired,
  }),
    (t.default = f);
}); /*!node_modules/react-color/lib/components/sketch/Sketch.js*/
amis.define("52651a1", function (e, a, t, l) {
  "use strict";
  Object.defineProperty(a, "__esModule", { value: !0 }), (a.Sketch = void 0);
  var r =
      Object.assign ||
      function (e) {
        for (var a = 1; a < arguments.length; a++) {
          var t = arguments[a];
          for (var l in t)
            Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
        }
        return e;
      },
    i = u(e("8d5e11f")),
    o = u(e("5ff1f4a")),
    d = u(e("1536f14")),
    s = u(e("db13e32")),
    n = e("592bd27"),
    p = u(e("26c45c6")),
    h = u(e("8599b9a"));
  function u(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var f = (a.Sketch = function (e) {
    var a = e.width,
      t = e.rgb,
      l = e.hex,
      o = e.hsv,
      u = e.hsl,
      f = e.onChange,
      c = e.onSwatchHover,
      x = e.disableAlpha,
      b = e.presetColors,
      g = e.renderers,
      v = e.styles,
      m = void 0 === v ? {} : v,
      y = e.className,
      E = void 0 === y ? "" : y,
      w = (0, d.default)(
        (0, s.default)(
          {
            default: r(
              {
                picker: {
                  width: a,
                  padding: "10px 10px 0",
                  boxSizing: "initial",
                  background: "#fff",
                  borderRadius: "4px",
                  boxShadow:
                    "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)",
                },
                saturation: {
                  width: "100%",
                  paddingBottom: "75%",
                  position: "relative",
                  overflow: "hidden",
                },
                Saturation: {
                  radius: "3px",
                  shadow:
                    "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                },
                controls: { display: "flex" },
                sliders: { padding: "4px 0", flex: "1" },
                color: {
                  width: "24px",
                  height: "24px",
                  position: "relative",
                  marginTop: "4px",
                  marginLeft: "4px",
                  borderRadius: "3px",
                },
                activeColor: {
                  absolute: "0px 0px 0px 0px",
                  borderRadius: "2px",
                  background:
                    "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")",
                  boxShadow:
                    "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                },
                hue: {
                  position: "relative",
                  height: "10px",
                  overflow: "hidden",
                },
                Hue: {
                  radius: "2px",
                  shadow:
                    "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                },
                alpha: {
                  position: "relative",
                  height: "10px",
                  marginTop: "4px",
                  overflow: "hidden",
                },
                Alpha: {
                  radius: "2px",
                  shadow:
                    "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                },
              },
              m,
            ),
            disableAlpha: {
              color: { height: "10px" },
              hue: { height: "10px" },
              alpha: { display: "none" },
            },
          },
          m,
        ),
        { disableAlpha: x },
      );
    return i.default.createElement(
      "div",
      { style: w.picker, className: "sketch-picker " + E },
      i.default.createElement(
        "div",
        { style: w.saturation },
        i.default.createElement(n.Saturation, {
          style: w.Saturation,
          hsl: u,
          hsv: o,
          onChange: f,
        }),
      ),
      i.default.createElement(
        "div",
        { style: w.controls, className: "flexbox-fix" },
        i.default.createElement(
          "div",
          { style: w.sliders },
          i.default.createElement(
            "div",
            { style: w.hue },
            i.default.createElement(n.Hue, {
              style: w.Hue,
              hsl: u,
              onChange: f,
            }),
          ),
          i.default.createElement(
            "div",
            { style: w.alpha },
            i.default.createElement(n.Alpha, {
              style: w.Alpha,
              rgb: t,
              hsl: u,
              renderers: g,
              onChange: f,
            }),
          ),
        ),
        i.default.createElement(
          "div",
          { style: w.color },
          i.default.createElement(n.Checkboard, null),
          i.default.createElement("div", { style: w.activeColor }),
        ),
      ),
      i.default.createElement(p.default, {
        rgb: t,
        hsl: u,
        hex: l,
        onChange: f,
        disableAlpha: x,
      }),
      i.default.createElement(h.default, {
        colors: b,
        onClick: f,
        onSwatchHover: c,
      }),
    );
  });
  (f.propTypes = {
    disableAlpha: o.default.bool,
    width: o.default.oneOfType([o.default.string, o.default.number]),
    styles: o.default.object,
  }),
    (f.defaultProps = {
      disableAlpha: !1,
      width: 200,
      styles: {},
      presetColors: [
        "#D0021B",
        "#F5A623",
        "#F8E71C",
        "#8B572A",
        "#7ED321",
        "#417505",
        "#BD10E0",
        "#9013FE",
        "#4A90E2",
        "#50E3C2",
        "#B8E986",
        "#000000",
        "#4A4A4A",
        "#9B9B9B",
        "#FFFFFF",
      ],
    }),
    (a.default = (0, n.ColorWrap)(f));
}); /*!node_modules/react-color/lib/components/slider/SliderSwatch.js*/
amis.define("7bc9b08", function (t, e, r, a) {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: !0 }),
    (e.SliderSwatch = void 0);
  var s = c(t("8d5e11f")),
    i = c(t("1536f14"));
  function c(t) {
    return t && t.__esModule ? t : { default: t };
  }
  var u = (e.SliderSwatch = function (t) {
    var e = t.hsl,
      r = t.offset,
      a = t.onClick,
      c = void 0 === a ? function () {} : a,
      u = t.active,
      d = t.first,
      l = t.last,
      n = (0, i.default)(
        {
          default: {
            swatch: {
              height: "12px",
              background: "hsl(" + e.h + ", 50%, " + 100 * r + "%)",
              cursor: "pointer",
            },
          },
          first: { swatch: { borderRadius: "2px 0 0 2px" } },
          last: { swatch: { borderRadius: "0 2px 2px 0" } },
          active: {
            swatch: { transform: "scaleY(1.8)", borderRadius: "3.6px/2px" },
          },
        },
        { active: u, first: d, last: l },
      );
    return s.default.createElement("div", {
      style: n.swatch,
      onClick: function (t) {
        return c({ h: e.h, s: 0.5, l: r, source: "hsl" }, t);
      },
    });
  });
  e.default = u;
}); /*!node_modules/react-color/lib/components/slider/SliderSwatches.js*/
amis.define("69f02eb", function (e, t, a, l) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.SliderSwatches = void 0);
  var s = d(e("8d5e11f")),
    c = d(e("1536f14")),
    f = d(e("7bc9b08"));
  function d(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var i = (t.SliderSwatches = function (e) {
    var t = e.onClick,
      a = e.hsl,
      l = (0, c.default)({
        default: {
          swatches: { marginTop: "20px" },
          swatch: {
            boxSizing: "border-box",
            width: "20%",
            paddingRight: "1px",
            float: "left",
          },
          clear: { clear: "both" },
        },
      }),
      d = 0.1;
    return s.default.createElement(
      "div",
      { style: l.swatches },
      s.default.createElement(
        "div",
        { style: l.swatch },
        s.default.createElement(f.default, {
          hsl: a,
          offset: ".80",
          active: Math.abs(a.l - 0.8) < d && Math.abs(a.s - 0.5) < d,
          onClick: t,
          first: !0,
        }),
      ),
      s.default.createElement(
        "div",
        { style: l.swatch },
        s.default.createElement(f.default, {
          hsl: a,
          offset: ".65",
          active: Math.abs(a.l - 0.65) < d && Math.abs(a.s - 0.5) < d,
          onClick: t,
        }),
      ),
      s.default.createElement(
        "div",
        { style: l.swatch },
        s.default.createElement(f.default, {
          hsl: a,
          offset: ".50",
          active: Math.abs(a.l - 0.5) < d && Math.abs(a.s - 0.5) < d,
          onClick: t,
        }),
      ),
      s.default.createElement(
        "div",
        { style: l.swatch },
        s.default.createElement(f.default, {
          hsl: a,
          offset: ".35",
          active: Math.abs(a.l - 0.35) < d && Math.abs(a.s - 0.5) < d,
          onClick: t,
        }),
      ),
      s.default.createElement(
        "div",
        { style: l.swatch },
        s.default.createElement(f.default, {
          hsl: a,
          offset: ".20",
          active: Math.abs(a.l - 0.2) < d && Math.abs(a.s - 0.5) < d,
          onClick: t,
          last: !0,
        }),
      ),
      s.default.createElement("div", { style: l.clear }),
    );
  });
  t.default = i;
}); /*!node_modules/react-color/lib/components/slider/SliderPointer.js*/
amis.define("8ff36e2", function (e, r, t, d) {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.SliderPointer = void 0);
  var a = n(e("8d5e11f")),
    i = n(e("1536f14"));
  function n(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var o = (r.SliderPointer = function () {
    var e = (0, i.default)({
      default: {
        picker: {
          width: "14px",
          height: "14px",
          borderRadius: "6px",
          transform: "translate(-7px, -1px)",
          backgroundColor: "rgb(248, 248, 248)",
          boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
        },
      },
    });
    return a.default.createElement("div", { style: e.picker });
  });
  r.default = o;
}); /*!node_modules/react-color/lib/components/slider/Slider.js*/
amis.define("55b4e87", function (e, t, l, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.Slider = void 0);
  var d = o(e("8d5e11f")),
    r = o(e("5ff1f4a")),
    s = o(e("1536f14")),
    u = o(e("db13e32")),
    f = e("592bd27"),
    i = o(e("69f02eb")),
    n = o(e("8ff36e2"));
  function o(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var c = (t.Slider = function (e) {
    var t = e.hsl,
      l = e.onChange,
      a = e.pointer,
      r = e.styles,
      n = void 0 === r ? {} : r,
      o = e.className,
      c = void 0 === o ? "" : o,
      p = (0, s.default)(
        (0, u.default)(
          {
            default: {
              hue: { height: "12px", position: "relative" },
              Hue: { radius: "2px" },
            },
          },
          n,
        ),
      );
    return d.default.createElement(
      "div",
      { style: p.wrap || {}, className: "slider-picker " + c },
      d.default.createElement(
        "div",
        { style: p.hue },
        d.default.createElement(f.Hue, {
          style: p.Hue,
          hsl: t,
          pointer: a,
          onChange: l,
        }),
      ),
      d.default.createElement(
        "div",
        { style: p.swatches },
        d.default.createElement(i.default, { hsl: t, onClick: l }),
      ),
    );
  });
  (c.propTypes = { styles: r.default.object }),
    (c.defaultProps = { pointer: n.default, styles: {} }),
    (t.default = (0, f.ColorWrap)(c));
}); /*!node_modules/react-color/lib/components/swatches/SwatchesColor.js*/
amis.define("afce3c1", function (e, o, t, r) {
  "use strict";
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.SwatchesColor = void 0);
  var c = i(e("8d5e11f")),
    l = i(e("1536f14")),
    a = (function (e) {
      if (e && e.__esModule) return e;
      var o = {};
      if (null != e)
        for (var t in e)
          Object.prototype.hasOwnProperty.call(e, t) && (o[t] = e[t]);
      return (o.default = e), o;
    })(e("7f4cfbc")),
    n = e("592bd27"),
    d = i(e("98ff171"));
  function i(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var f = (o.SwatchesColor = function (e) {
    var o = e.color,
      t = e.onClick,
      r = void 0 === t ? function () {} : t,
      i = e.onSwatchHover,
      f = e.first,
      u = e.last,
      s = e.active,
      p = (0, l.default)(
        {
          default: {
            color: {
              width: "40px",
              height: "24px",
              cursor: "pointer",
              background: o,
              marginBottom: "1px",
            },
            check: {
              color: a.getContrastingColor(o),
              marginLeft: "8px",
              display: "none",
            },
          },
          first: { color: { overflow: "hidden", borderRadius: "2px 2px 0 0" } },
          last: { color: { overflow: "hidden", borderRadius: "0 0 2px 2px" } },
          active: { check: { display: "block" } },
          "color-#FFFFFF": {
            color: { boxShadow: "inset 0 0 0 1px #ddd" },
            check: { color: "#333" },
          },
          transparent: { check: { color: "#333" } },
        },
        {
          first: f,
          last: u,
          active: s,
          "color-#FFFFFF": "#FFFFFF" === o,
          transparent: "transparent" === o,
        },
      );
    return c.default.createElement(
      n.Swatch,
      {
        color: o,
        style: p.color,
        onClick: r,
        onHover: i,
        focusStyle: { boxShadow: "0 0 4px " + o },
      },
      c.default.createElement(
        "div",
        { style: p.check },
        c.default.createElement(d.default, null),
      ),
    );
  });
  o.default = f;
}); /*!node_modules/react-color/lib/components/swatches/SwatchesGroup.js*/
amis.define("44f6913", function (e, t, a, o) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.SwatchesGroup = void 0);
  var r = l(e("8d5e11f")),
    u = l(e("1536f14")),
    n = l(e("9de79e5")),
    f = l(e("afce3c1"));
  function l(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var c = (t.SwatchesGroup = function (e) {
    var t = e.onClick,
      a = e.onSwatchHover,
      o = e.group,
      l = e.active,
      c = (0, u.default)({
        default: {
          group: {
            paddingBottom: "10px",
            width: "40px",
            float: "left",
            marginRight: "10px",
          },
        },
      });
    return r.default.createElement(
      "div",
      { style: c.group },
      (0, n.default)(o, function (e, u) {
        return r.default.createElement(f.default, {
          key: e,
          color: e,
          active: e.toLowerCase() === l,
          first: 0 === u,
          last: u === o.length - 1,
          onClick: t,
          onSwatchHover: a,
        });
      }),
    );
  });
  t.default = c;
}); /*!node_modules/react-color/lib/components/swatches/Swatches.js*/
amis.define("b740ac5", function (e, l, r, t) {
  "use strict";
  Object.defineProperty(l, "__esModule", { value: !0 }), (l.Swatches = void 0);
  var a = c(e("8d5e11f")),
    n = c(e("5ff1f4a")),
    u = c(e("1536f14")),
    d = c(e("9de79e5")),
    i = c(e("db13e32")),
    o = (function (e) {
      if (e && e.__esModule) return e;
      var l = {};
      if (null != e)
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && (l[r] = e[r]);
      return (l.default = e), l;
    })(e("aaef83a")),
    f = e("592bd27"),
    p = c(e("44f6913"));
  function c(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var g = (l.Swatches = function (e) {
    var l = e.width,
      r = e.height,
      t = e.onChange,
      n = e.onSwatchHover,
      o = e.colors,
      c = e.hex,
      g = e.styles,
      s = void 0 === g ? {} : g,
      h = e.className,
      y = void 0 === h ? "" : h,
      b = (0, u.default)(
        (0, i.default)(
          {
            default: {
              picker: { width: l, height: r },
              overflow: { height: r, overflowY: "scroll" },
              body: { padding: "16px 0 6px 16px" },
              clear: { clear: "both" },
            },
          },
          s,
        ),
      ),
      w = function (e, l) {
        return t({ hex: e, source: "hex" }, l);
      };
    return a.default.createElement(
      "div",
      { style: b.picker, className: "swatches-picker " + y },
      a.default.createElement(
        f.Raised,
        null,
        a.default.createElement(
          "div",
          { style: b.overflow },
          a.default.createElement(
            "div",
            { style: b.body },
            (0, d.default)(o, function (e) {
              return a.default.createElement(p.default, {
                key: e.toString(),
                group: e,
                active: c,
                onClick: w,
                onSwatchHover: n,
              });
            }),
            a.default.createElement("div", { style: b.clear }),
          ),
        ),
      ),
    );
  });
  (g.propTypes = {
    width: n.default.oneOfType([n.default.string, n.default.number]),
    height: n.default.oneOfType([n.default.string, n.default.number]),
    colors: n.default.arrayOf(n.default.arrayOf(n.default.string)),
    styles: n.default.object,
  }),
    (g.defaultProps = {
      width: 320,
      height: 240,
      colors: [
        [o.red[900], o.red[700], o.red[500], o.red[300], o.red[100]],
        [o.pink[900], o.pink[700], o.pink[500], o.pink[300], o.pink[100]],
        [
          o.purple[900],
          o.purple[700],
          o.purple[500],
          o.purple[300],
          o.purple[100],
        ],
        [
          o.deepPurple[900],
          o.deepPurple[700],
          o.deepPurple[500],
          o.deepPurple[300],
          o.deepPurple[100],
        ],
        [
          o.indigo[900],
          o.indigo[700],
          o.indigo[500],
          o.indigo[300],
          o.indigo[100],
        ],
        [o.blue[900], o.blue[700], o.blue[500], o.blue[300], o.blue[100]],
        [
          o.lightBlue[900],
          o.lightBlue[700],
          o.lightBlue[500],
          o.lightBlue[300],
          o.lightBlue[100],
        ],
        [o.cyan[900], o.cyan[700], o.cyan[500], o.cyan[300], o.cyan[100]],
        [o.teal[900], o.teal[700], o.teal[500], o.teal[300], o.teal[100]],
        ["#194D33", o.green[700], o.green[500], o.green[300], o.green[100]],
        [
          o.lightGreen[900],
          o.lightGreen[700],
          o.lightGreen[500],
          o.lightGreen[300],
          o.lightGreen[100],
        ],
        [o.lime[900], o.lime[700], o.lime[500], o.lime[300], o.lime[100]],
        [
          o.yellow[900],
          o.yellow[700],
          o.yellow[500],
          o.yellow[300],
          o.yellow[100],
        ],
        [o.amber[900], o.amber[700], o.amber[500], o.amber[300], o.amber[100]],
        [
          o.orange[900],
          o.orange[700],
          o.orange[500],
          o.orange[300],
          o.orange[100],
        ],
        [
          o.deepOrange[900],
          o.deepOrange[700],
          o.deepOrange[500],
          o.deepOrange[300],
          o.deepOrange[100],
        ],
        [o.brown[900], o.brown[700], o.brown[500], o.brown[300], o.brown[100]],
        [
          o.blueGrey[900],
          o.blueGrey[700],
          o.blueGrey[500],
          o.blueGrey[300],
          o.blueGrey[100],
        ],
        ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"],
      ],
      styles: {},
    }),
    (l.default = (0, f.ColorWrap)(g));
}); /*!node_modules/react-color/lib/components/twitter/Twitter.js*/
amis.define("f20677d", function (e, t, r, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.Twitter = void 0);
  var l = s(e("8d5e11f")),
    o = s(e("5ff1f4a")),
    i = s(e("1536f14")),
    n = s(e("9de79e5")),
    d = s(e("db13e32")),
    p = (function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return (t.default = e), t;
    })(e("7f4cfbc")),
    f = e("592bd27");
  function s(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var u = (t.Twitter = function (e) {
    var t = e.onChange,
      r = e.onSwatchHover,
      a = e.hex,
      o = e.colors,
      s = e.width,
      u = e.triangle,
      h = e.styles,
      x = void 0 === h ? {} : h,
      c = e.className,
      g = void 0 === c ? "" : c,
      b = (0, i.default)(
        (0, d.default)(
          {
            default: {
              card: {
                width: s,
                background: "#fff",
                border: "0 solid rgba(0,0,0,0.25)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                borderRadius: "4px",
                position: "relative",
              },
              body: { padding: "15px 9px 9px 15px" },
              label: { fontSize: "18px", color: "#fff" },
              triangle: {
                width: "0px",
                height: "0px",
                borderStyle: "solid",
                borderWidth: "0 9px 10px 9px",
                borderColor: "transparent transparent #fff transparent",
                position: "absolute",
              },
              triangleShadow: {
                width: "0px",
                height: "0px",
                borderStyle: "solid",
                borderWidth: "0 9px 10px 9px",
                borderColor:
                  "transparent transparent rgba(0,0,0,.1) transparent",
                position: "absolute",
              },
              hash: {
                background: "#F0F0F0",
                height: "30px",
                width: "30px",
                borderRadius: "4px 0 0 4px",
                float: "left",
                color: "#98A1A4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              input: {
                width: "100px",
                fontSize: "14px",
                color: "#666",
                border: "0px",
                outline: "none",
                height: "28px",
                boxShadow: "inset 0 0 0 1px #F0F0F0",
                boxSizing: "content-box",
                borderRadius: "0 4px 4px 0",
                float: "left",
                paddingLeft: "8px",
              },
              swatch: {
                width: "30px",
                height: "30px",
                float: "left",
                borderRadius: "4px",
                margin: "0 6px 6px 0",
              },
              clear: { clear: "both" },
            },
            "hide-triangle": {
              triangle: { display: "none" },
              triangleShadow: { display: "none" },
            },
            "top-left-triangle": {
              triangle: { top: "-10px", left: "12px" },
              triangleShadow: { top: "-11px", left: "12px" },
            },
            "top-right-triangle": {
              triangle: { top: "-10px", right: "12px" },
              triangleShadow: { top: "-11px", right: "12px" },
            },
          },
          x,
        ),
        {
          "hide-triangle": "hide" === u,
          "top-left-triangle": "top-left" === u,
          "top-right-triangle": "top-right" === u,
        },
      ),
      y = function (e, r) {
        p.isValidHex(e) && t({ hex: e, source: "hex" }, r);
      };
    return l.default.createElement(
      "div",
      { style: b.card, className: "twitter-picker " + g },
      l.default.createElement("div", { style: b.triangleShadow }),
      l.default.createElement("div", { style: b.triangle }),
      l.default.createElement(
        "div",
        { style: b.body },
        (0, n.default)(o, function (e, t) {
          return l.default.createElement(f.Swatch, {
            key: t,
            color: e,
            hex: e,
            style: b.swatch,
            onClick: y,
            onHover: r,
            focusStyle: { boxShadow: "0 0 4px " + e },
          });
        }),
        l.default.createElement("div", { style: b.hash }, "#"),
        l.default.createElement(f.EditableInput, {
          label: null,
          style: { input: b.input },
          value: a.replace("#", ""),
          onChange: y,
        }),
        l.default.createElement("div", { style: b.clear }),
      ),
    );
  });
  (u.propTypes = {
    width: o.default.oneOfType([o.default.string, o.default.number]),
    triangle: o.default.oneOf(["hide", "top-left", "top-right"]),
    colors: o.default.arrayOf(o.default.string),
    styles: o.default.object,
  }),
    (u.defaultProps = {
      width: 276,
      colors: [
        "#FF6900",
        "#FCB900",
        "#7BDCB5",
        "#00D084",
        "#8ED1FC",
        "#0693E3",
        "#ABB8C3",
        "#EB144C",
        "#F78DA7",
        "#9900EF",
      ],
      triangle: "top-left",
      styles: {},
    }),
    (t.default = (0, f.ColorWrap)(u));
}); /*!node_modules/react-color/lib/components/google/GooglePointerCircle.js*/
amis.define("e01ce1b", function (e, r, t, l) {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.GooglePointerCircle = void 0);
  var a = f(e("8d5e11f")),
    u = f(e("1536f14")),
    d = f(e("5ff1f4a"));
  function f(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var n = (r.GooglePointerCircle = function (e) {
    var r = (0, u.default)({
      default: {
        picker: {
          width: "20px",
          height: "20px",
          borderRadius: "22px",
          border: "2px #fff solid",
          transform: "translate(-12px, -13px)",
          background:
            "hsl(" +
            Math.round(e.hsl.h) +
            ", " +
            Math.round(100 * e.hsl.s) +
            "%, " +
            Math.round(100 * e.hsl.l) +
            "%)",
        },
      },
    });
    return a.default.createElement("div", { style: r.picker });
  });
  (n.propTypes = {
    hsl: d.default.shape({
      h: d.default.number,
      s: d.default.number,
      l: d.default.number,
      a: d.default.number,
    }),
  }),
    (n.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } }),
    (r.default = n);
}); /*!node_modules/react-color/lib/components/google/GooglePointer.js*/
amis.define("4453d56", function (e, t, r, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.GooglePointer = void 0);
  var u = f(e("8d5e11f")),
    d = f(e("1536f14")),
    l = f(e("5ff1f4a"));
  function f(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var n = (t.GooglePointer = function (e) {
    var t = (0, d.default)({
      default: {
        picker: {
          width: "20px",
          height: "20px",
          borderRadius: "22px",
          transform: "translate(-10px, -7px)",
          background: "hsl(" + Math.round(e.hsl.h) + ", 100%, 50%)",
          border: "2px white solid",
        },
      },
    });
    return u.default.createElement("div", { style: t.picker });
  });
  (n.propTypes = {
    hsl: l.default.shape({
      h: l.default.number,
      s: l.default.number,
      l: l.default.number,
      a: l.default.number,
    }),
  }),
    (n.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } }),
    (t.default = n);
}); /*!node_modules/react-color/lib/components/google/GoogleFields.js*/
amis.define("c7b7009", function (e, l, t, a) {
  "use strict";
  Object.defineProperty(l, "__esModule", { value: !0 }),
    (l.GoogleFields = void 0);
  var r = s(e("8d5e11f")),
    i = s(e("1536f14")),
    n = (function (e) {
      if (e && e.__esModule) return e;
      var l = {};
      if (null != e)
        for (var t in e)
          Object.prototype.hasOwnProperty.call(e, t) && (l[t] = e[t]);
      return (l.default = e), l;
    })(e("7f4cfbc")),
    o = e("592bd27");
  function s(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var d = (l.GoogleFields = function (e) {
    var l = e.onChange,
      t = e.rgb,
      a = e.hsl,
      s = e.hex,
      d = e.hsv,
      u = function (e, t) {
        if (e.hex) n.isValidHex(e.hex) && l({ hex: e.hex, source: "hex" }, t);
        else if (e.rgb) {
          var a = e.rgb.split(",");
          n.isvalidColorString(e.rgb, "rgb") &&
            l({ r: a[0], g: a[1], b: a[2], a: 1, source: "rgb" }, t);
        } else if (e.hsv) {
          var r = e.hsv.split(",");
          n.isvalidColorString(e.hsv, "hsv") &&
            ((r[2] = r[2].replace("%", "")),
            (r[1] = r[1].replace("%", "")),
            (r[0] = r[0].replace("°", "")),
            1 == r[1] ? (r[1] = 0.01) : 1 == r[2] && (r[2] = 0.01),
            l(
              {
                h: Number(r[0]),
                s: Number(r[1]),
                v: Number(r[2]),
                source: "hsv",
              },
              t,
            ));
        } else if (e.hsl) {
          var i = e.hsl.split(",");
          n.isvalidColorString(e.hsl, "hsl") &&
            ((i[2] = i[2].replace("%", "")),
            (i[1] = i[1].replace("%", "")),
            (i[0] = i[0].replace("°", "")),
            1 == c[1] ? (c[1] = 0.01) : 1 == c[2] && (c[2] = 0.01),
            l(
              {
                h: Number(i[0]),
                s: Number(i[1]),
                v: Number(i[2]),
                source: "hsl",
              },
              t,
            ));
        }
      },
      p = (0, i.default)({
        default: {
          wrap: { display: "flex", height: "100px", marginTop: "4px" },
          fields: { width: "100%" },
          column: {
            paddingTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          },
          double: { padding: "0px 4.4px", boxSizing: "border-box" },
          input: {
            width: "100%",
            height: "38px",
            boxSizing: "border-box",
            padding: "4px 10% 3px",
            textAlign: "center",
            border: "1px solid #dadce0",
            fontSize: "11px",
            textTransform: "lowercase",
            borderRadius: "5px",
            outline: "none",
            fontFamily: "Roboto,Arial,sans-serif",
          },
          input2: {
            height: "38px",
            width: "100%",
            border: "1px solid #dadce0",
            boxSizing: "border-box",
            fontSize: "11px",
            textTransform: "lowercase",
            borderRadius: "5px",
            outline: "none",
            paddingLeft: "10px",
            fontFamily: "Roboto,Arial,sans-serif",
          },
          label: {
            textAlign: "center",
            fontSize: "12px",
            background: "#fff",
            position: "absolute",
            textTransform: "uppercase",
            color: "#3c4043",
            width: "35px",
            top: "-6px",
            left: "0",
            right: "0",
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "Roboto,Arial,sans-serif",
          },
          label2: {
            left: "10px",
            textAlign: "center",
            fontSize: "12px",
            background: "#fff",
            position: "absolute",
            textTransform: "uppercase",
            color: "#3c4043",
            width: "32px",
            top: "-6px",
            fontFamily: "Roboto,Arial,sans-serif",
          },
          single: { flexGrow: "1", margin: "0px 4.4px" },
        },
      }),
      f = t.r + ", " + t.g + ", " + t.b,
      b =
        Math.round(a.h) +
        "°, " +
        Math.round(100 * a.s) +
        "%, " +
        Math.round(100 * a.l) +
        "%",
      c =
        Math.round(d.h) +
        "°, " +
        Math.round(100 * d.s) +
        "%, " +
        Math.round(100 * d.v) +
        "%";
    return r.default.createElement(
      "div",
      { style: p.wrap, className: "flexbox-fix" },
      r.default.createElement(
        "div",
        { style: p.fields },
        r.default.createElement(
          "div",
          { style: p.double },
          r.default.createElement(o.EditableInput, {
            style: { input: p.input, label: p.label },
            label: "hex",
            value: s,
            onChange: u,
          }),
        ),
        r.default.createElement(
          "div",
          { style: p.column },
          r.default.createElement(
            "div",
            { style: p.single },
            r.default.createElement(o.EditableInput, {
              style: { input: p.input2, label: p.label2 },
              label: "rgb",
              value: f,
              onChange: u,
            }),
          ),
          r.default.createElement(
            "div",
            { style: p.single },
            r.default.createElement(o.EditableInput, {
              style: { input: p.input2, label: p.label2 },
              label: "hsv",
              value: c,
              onChange: u,
            }),
          ),
          r.default.createElement(
            "div",
            { style: p.single },
            r.default.createElement(o.EditableInput, {
              style: { input: p.input2, label: p.label2 },
              label: "hsl",
              value: b,
              onChange: u,
            }),
          ),
        ),
      ),
    );
  });
  l.default = d;
}); /*!node_modules/react-color/lib/components/google/Google.js*/
amis.define("171f2c1", function (e, t, a, d) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), (t.Google = void 0);
  var i = u(e("8d5e11f")),
    l = u(e("5ff1f4a")),
    o = u(e("1536f14")),
    r = u(e("db13e32")),
    n = e("592bd27"),
    s = u(e("e01ce1b")),
    f = u(e("4453d56")),
    p = u(e("c7b7009"));
  function u(e) {
    return e && e.__esModule ? e : { default: e };
  }
  var h = (t.Google = function (e) {
    var t = e.width,
      a = e.onChange,
      d = e.rgb,
      l = e.hsl,
      u = e.hsv,
      h = e.hex,
      x = e.header,
      c = e.styles,
      g = void 0 === c ? {} : c,
      b = e.className,
      v = void 0 === b ? "" : b,
      m = (0, o.default)(
        (0, r.default)(
          {
            default: {
              picker: {
                width: t,
                background: "#fff",
                border: "1px solid #dfe1e5",
                boxSizing: "initial",
                display: "flex",
                flexWrap: "wrap",
                borderRadius: "8px 8px 0px 0px",
              },
              head: {
                height: "57px",
                width: "100%",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "16px",
                fontSize: "20px",
                boxSizing: "border-box",
                fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif",
              },
              saturation: {
                width: "70%",
                padding: "0px",
                position: "relative",
                overflow: "hidden",
              },
              swatch: {
                width: "30%",
                height: "228px",
                padding: "0px",
                background: "rgba(" + d.r + ", " + d.g + ", " + d.b + ", 1)",
                position: "relative",
                overflow: "hidden",
              },
              body: { margin: "auto", width: "95%" },
              controls: {
                display: "flex",
                boxSizing: "border-box",
                height: "52px",
                paddingTop: "22px",
              },
              color: { width: "32px" },
              hue: {
                height: "8px",
                position: "relative",
                margin: "0px 16px 0px 16px",
                width: "100%",
              },
              Hue: { radius: "2px" },
            },
          },
          g,
        ),
      );
    return i.default.createElement(
      "div",
      { style: m.picker, className: "google-picker " + v },
      i.default.createElement("div", { style: m.head }, x),
      i.default.createElement("div", { style: m.swatch }),
      i.default.createElement(
        "div",
        { style: m.saturation },
        i.default.createElement(n.Saturation, {
          hsl: l,
          hsv: u,
          pointer: s.default,
          onChange: a,
        }),
      ),
      i.default.createElement(
        "div",
        { style: m.body },
        i.default.createElement(
          "div",
          { style: m.controls, className: "flexbox-fix" },
          i.default.createElement(
            "div",
            { style: m.hue },
            i.default.createElement(n.Hue, {
              style: m.Hue,
              hsl: l,
              radius: "4px",
              pointer: f.default,
              onChange: a,
            }),
          ),
        ),
        i.default.createElement(p.default, {
          rgb: d,
          hsl: l,
          hex: h,
          hsv: u,
          onChange: a,
        }),
      ),
    );
  });
  (h.propTypes = {
    width: l.default.oneOfType([l.default.string, l.default.number]),
    styles: l.default.object,
    header: l.default.string,
  }),
    (h.defaultProps = { width: 652, styles: {}, header: "Color picker" }),
    (t.default = (0, n.ColorWrap)(h));
}); /*!node_modules/react-color/lib/index.js*/
amis.define("5e8787b", function (e, r, t, n) {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.CustomPicker =
      r.GooglePicker =
      r.TwitterPicker =
      r.SwatchesPicker =
      r.SliderPicker =
      r.SketchPicker =
      r.PhotoshopPicker =
      r.MaterialPicker =
      r.HuePicker =
      r.GithubPicker =
      r.CompactPicker =
      r.ChromePicker =
      r.default =
      r.CirclePicker =
      r.BlockPicker =
      r.AlphaPicker =
        void 0);
  var c = e("b6eb921");
  Object.defineProperty(r, "AlphaPicker", {
    enumerable: !0,
    get: function () {
      return y(c).default;
    },
  });
  var i = e("0254090");
  Object.defineProperty(r, "BlockPicker", {
    enumerable: !0,
    get: function () {
      return y(i).default;
    },
  });
  var u = e("e5f4ad6");
  Object.defineProperty(r, "CirclePicker", {
    enumerable: !0,
    get: function () {
      return y(u).default;
    },
  });
  var a = e("c8725e3");
  Object.defineProperty(r, "ChromePicker", {
    enumerable: !0,
    get: function () {
      return y(a).default;
    },
  });
  var f = e("9b6a0d7");
  Object.defineProperty(r, "CompactPicker", {
    enumerable: !0,
    get: function () {
      return y(f).default;
    },
  });
  var o = e("a1d5497");
  Object.defineProperty(r, "GithubPicker", {
    enumerable: !0,
    get: function () {
      return y(o).default;
    },
  });
  var l = e("fd89b60");
  Object.defineProperty(r, "HuePicker", {
    enumerable: !0,
    get: function () {
      return y(l).default;
    },
  });
  var P = e("4184aba");
  Object.defineProperty(r, "MaterialPicker", {
    enumerable: !0,
    get: function () {
      return y(P).default;
    },
  });
  var d = e("a7f9abf");
  Object.defineProperty(r, "PhotoshopPicker", {
    enumerable: !0,
    get: function () {
      return y(d).default;
    },
  });
  var b = e("52651a1");
  Object.defineProperty(r, "SketchPicker", {
    enumerable: !0,
    get: function () {
      return y(b).default;
    },
  });
  var k = e("55b4e87");
  Object.defineProperty(r, "SliderPicker", {
    enumerable: !0,
    get: function () {
      return y(k).default;
    },
  });
  var m = e("b740ac5");
  Object.defineProperty(r, "SwatchesPicker", {
    enumerable: !0,
    get: function () {
      return y(m).default;
    },
  });
  var p = e("f20677d");
  Object.defineProperty(r, "TwitterPicker", {
    enumerable: !0,
    get: function () {
      return y(p).default;
    },
  });
  var v = e("171f2c1");
  Object.defineProperty(r, "GooglePicker", {
    enumerable: !0,
    get: function () {
      return y(v).default;
    },
  });
  var g = e("68050b8");
  Object.defineProperty(r, "CustomPicker", {
    enumerable: !0,
    get: function () {
      return y(g).default;
    },
  });
  var j = y(a);
  function y(e) {
    return e && e.__esModule ? e : { default: e };
  }
  r.default = j.default;
}); /*!node_modules/amis-ui/lib/components/ColorPicker.js*/
amis.define("a474d27", function (e, t, o, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var a = e("9914776"),
    r = e("8d5e11f"),
    l = e("b5898f1"),
    i = e("5e8787b"),
    s = e("a36ce1d"),
    c = e("3287272"),
    u = e("ed240f4");
  function h(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  var p = h(r),
    d = e("8d5e11f"),
    f = (d.default || d).createElement;
  (d.default || d).Fragment;
  var C = (function (e) {
      function t(t) {
        var o = e.call(this, t) || this;
        return (
          (o.state = {
            isOpened: !1,
            isFocused: !1,
            inputValue: o.props.value || "",
            tempValue: o.props.value || "",
          }),
          (o.open = o.open.bind(o)),
          (o.close = o.close.bind(o)),
          (o.focus = o.focus.bind(o)),
          (o.blur = o.blur.bind(o)),
          (o.handleChange = o.handleChange.bind(o)),
          (o.handleTempChange = o.handleTempChange.bind(o)),
          (o.handleConfirm = o.handleConfirm.bind(o)),
          (o.handleFocus = o.handleFocus.bind(o)),
          (o.handleBlur = o.handleBlur.bind(o)),
          (o.clearValue = o.clearValue.bind(o)),
          (o.handleInputChange = o.handleInputChange.bind(o)),
          (o.handleClick = o.handleClick.bind(o)),
          (o.preview = p.default.createRef()),
          (o.input = p.default.createRef()),
          o
        );
      }
      return (
        a.__extends(t, e),
        (t.prototype.componentDidUpdate = function (e) {
          var t = this.props;
          e.value !== t.value && this.setState({ inputValue: t.value || "" });
        }),
        (t.prototype.handleFocus = function () {
          this.setState({ isFocused: !0 });
        }),
        (t.prototype.handleBlur = function () {
          this.setState({ isFocused: !1, inputValue: this.props.value });
        }),
        (t.prototype.focus = function () {
          this.input.current && this.input.current.focus();
        }),
        (t.prototype.blur = function () {
          this.input.current && this.input.current.blur();
        }),
        (t.prototype.open = function (e) {
          this.props.disabled || this.setState({ isOpened: !0 }, e);
        }),
        (t.prototype.close = function () {
          this.setState({ isOpened: !1 });
        }),
        (t.prototype.clearValue = function () {
          var e = this.props;
          (0, e.onChange)(e.resetValue || "");
        }),
        (t.prototype.handleClick = function () {
          this.state.isOpened ? this.close() : this.open(this.focus);
        }),
        (t.prototype.handleInputChange = function (e) {
          var t = this;
          if (this.props.allowCustomColor) {
            var o = this.props.onChange;
            this.setState({ inputValue: e.currentTarget.value }, function () {
              t.validateColor(t.state.inputValue) && o(t.state.inputValue);
            });
          }
        }),
        (t.prototype.validateColor = function (e) {
          if ("" === e) return !1;
          if ("inherit" === e) return !1;
          if ("transparent" === e) return !1;
          var t = document.createElement("img");
          return (
            (t.style.color = "rgb(0, 0, 0)"),
            (t.style.color = e),
            "rgb(0, 0, 0)" !== t.style.color ||
              ((t.style.color = "rgb(255, 255, 255)"),
              (t.style.color = e),
              "rgb(255, 255, 255)" !== t.style.color)
          );
        }),
        (t.prototype.handleChange = function (e) {
          var t = this.props,
            o = t.onChange,
            n = t.format;
          o(
            "rgba" === n
              ? "rgba("
                  .concat(e.rgb.r, ", ")
                  .concat(e.rgb.g, ", ")
                  .concat(e.rgb.b, ", ")
                  .concat(e.rgb.a, ")")
              : "rgb" === n
                ? "rgb("
                    .concat(e.rgb.r, ", ")
                    .concat(e.rgb.g, ", ")
                    .concat(e.rgb.b, ")")
                : "hsl" === n
                  ? "hsl("
                      .concat(Math.round(e.hsl.h), ", ")
                      .concat(Math.round(100 * e.hsl.s), "%, ")
                      .concat(Math.round(100 * e.hsl.l), "%)")
                  : e.hex,
          );
        }),
        (t.prototype.handleTempChange = function (e) {
          var t = this.state.tempValue,
            o = this.props.format;
          (t =
            "rgba" === o
              ? "rgba("
                  .concat(e.rgb.r, ", ")
                  .concat(e.rgb.g, ", ")
                  .concat(e.rgb.b, ", ")
                  .concat(e.rgb.a, ")")
              : "rgb" === o
                ? "rgb("
                    .concat(e.rgb.r, ", ")
                    .concat(e.rgb.g, ", ")
                    .concat(e.rgb.b, ")")
                : "hsl" === o
                  ? "hsl("
                      .concat(Math.round(e.hsl.h), ", ")
                      .concat(Math.round(100 * e.hsl.s), "%, ")
                      .concat(Math.round(100 * e.hsl.l), "%)")
                  : e.hex),
            this.setState({ tempValue: t });
        }),
        (t.prototype.handleConfirm = function () {
          (0, this.props.onChange)(this.state.tempValue), this.close();
        }),
        (t.prototype.render = function () {
          var e = this,
            t = this.props,
            o = t.classPrefix,
            n = t.className,
            a = t.popoverClassName,
            r = t.value,
            h = t.placeholder,
            p = t.disabled,
            d = t.popOverContainer,
            C = t.popOverContainerSelector,
            b = t.format,
            g = t.clearable,
            m = t.placement,
            v = t.classnames,
            y = t.presetColors,
            k = t.allowCustomColor,
            O = t.mobileUI,
            P = this.props.translate,
            V = this.state.isOpened,
            N = this.state.isFocused,
            S = this.state.tempValue;
          return f(
            "div",
            {
              className: v(
                "ColorPicker",
                { "is-disabled": p, "is-focused": N, "is-opened": V },
                n,
              ),
            },
            f(
              "span",
              {
                onClick: this.handleClick,
                className: v("ColorPicker-preview"),
              },
              f("i", {
                ref: this.preview,
                className: "".concat(o, "ColorPicker-previewIcon"),
                style: { background: this.state.inputValue || "#ccc" },
              }),
            ),
            f("input", {
              ref: this.input,
              type: "text",
              autoComplete: "off",
              size: 10,
              className: v("ColorPicker-input"),
              value: this.state.inputValue || "",
              placeholder: P(h),
              disabled: p,
              onChange: this.handleInputChange,
              onFocus: this.handleFocus,
              onBlur: this.handleBlur,
              onClick: this.handleClick,
              readOnly: O,
            }),
            g && !p && r
              ? f(
                  "a",
                  {
                    onClick: this.clearValue,
                    className: v("ColorPicker-clear"),
                  },
                  f(s.Icon, { icon: "input-clear", className: "icon" }),
                )
              : null,
            f(
              "span",
              { className: v("ColorPicker-arrow") },
              f(s.Icon, {
                icon: "right-arrow-bold",
                className: "icon",
                onClick: this.handleClick,
              }),
            ),
            !O && V
              ? f(
                  c.Overlay,
                  {
                    placement: m || "auto",
                    target: function () {
                      return l.findDOMNode(e);
                    },
                    onHide: this.close,
                    container:
                      d ||
                      function () {
                        return l.findDOMNode(e);
                      },
                    containerSelector: C,
                    rootClose: !1,
                    show: !0,
                  },
                  f(
                    c.PopOver,
                    {
                      classPrefix: o,
                      className: v("ColorPicker-popover", a),
                      onHide: this.close,
                      overlay: !0,
                    },
                    k
                      ? f(i.SketchPicker, {
                          styles: {},
                          disableAlpha: !!~["rgb", "hex"].indexOf(b),
                          color: r,
                          presetColors: y,
                          onChangeComplete: this.handleChange,
                        })
                      : f(i.GithubPicker, {
                          color: r,
                          colors: Array.isArray(y)
                            ? y
                                .filter(function (e) {
                                  return "string" == typeof e || c.isObject(e);
                                })
                                .map(function (e) {
                                  return "string" == typeof e
                                    ? e
                                    : c.isObject(e)
                                      ? null == e
                                        ? void 0
                                        : e.color
                                      : e;
                                })
                            : void 0,
                          onChangeComplete: this.handleChange,
                        }),
                  ),
                )
              : null,
            O &&
              f(
                u.default,
                {
                  className: v("".concat(o, "ColorPicker-popup")),
                  container: d,
                  isShow: V,
                  onHide: this.handleClick,
                  showConfirm: !0,
                  onConfirm: this.handleConfirm,
                },
                k
                  ? f(i.SketchPicker, {
                      styles: {},
                      disableAlpha: !!~["rgb", "hex"].indexOf(b),
                      color: S,
                      presetColors: y,
                      onChangeComplete: this.handleTempChange,
                    })
                  : f(i.GithubPicker, {
                      color: S,
                      colors: Array.isArray(y)
                        ? y
                            .filter(function (e) {
                              return "string" == typeof e || c.isObject(e);
                            })
                            .map(function (e) {
                              return "string" == typeof e
                                ? e
                                : c.isObject(e)
                                  ? null == e
                                    ? void 0
                                    : e.color
                                  : e;
                            })
                        : void 0,
                      onChangeComplete: this.handleTempChange,
                    }),
              ),
          );
        }),
        (t.defaultProps = {
          format: "hex",
          clearable: !0,
          placeholder: "ColorPicker.placeholder",
          allowCustomColor: !0,
        }),
        a.__decorate(
          [
            c.autobind,
            a.__metadata("design:type", Function),
            a.__metadata("design:paramtypes", [String]),
            a.__metadata("design:returntype", void 0),
          ],
          t.prototype,
          "validateColor",
          null,
        ),
        t
      );
    })(p.default.PureComponent),
    b = c.themeable(c.localeable(c.uncontrollable(C, { value: "onChange" })));
  (t.ColorControl = C), (t.default = b);
});