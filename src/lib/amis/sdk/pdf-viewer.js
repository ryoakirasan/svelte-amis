/*!node_modules/react-pdf/node_modules/clsx/dist/clsx.js*/
amis.define("03a5ee2", function (e, r, n, t) {
  function f(e) {
    var r,
      n,
      t = "";
    if ("string" == typeof e || "number" == typeof e) t += e;
    else if ("object" == typeof e)
      if (Array.isArray(e)) {
        var o = e.length;
        for (r = 0; r < o; r++)
          e[r] && (n = f(e[r])) && (t && (t += " "), (t += n));
      } else for (n in e) e[n] && (t && (t += " "), (t += n));
    return t;
  }
  function o() {
    for (var e, r, n = 0, t = "", o = arguments.length; n < o; n++)
      (e = arguments[n]) && (r = f(e)) && (t && (t += " "), (t += r));
    return t;
  }
  (n.exports = o), (n.exports.clsx = o);
}); /*!node_modules/react-pdf/dist/cjs/DocumentContext.js*/
amis.define("dcd0c4a", function (e, t, d, a) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var c = e("8d5e11f");
  t.default = (0, c.createContext)(null);
}); /*!node_modules/react-pdf/dist/cjs/Message.js*/
amis.define("7cbfb43", function (e, a, c, t) {
  "use strict";
  Object.defineProperty(a, "__esModule", { value: !0 });
  var r = e("99ef1fd");
  a.default = function (e) {
    var a = e.children,
      c = e.type;
    return (0, r.jsx)("div", {
      className: "react-pdf__message react-pdf__message--".concat(c),
      children: a,
    });
  };
}); /*!node_modules/react-pdf/dist/cjs/LinkService.js*/
amis.define("2406ba7", function (e, t, n, i) {
  "use strict";
  var o =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  var r = o(e("b693e5e")),
    a = (function () {
      function e() {
        (this.externalLinkEnabled = !0),
          (this.externalLinkRel = void 0),
          (this.externalLinkTarget = void 0),
          (this.isInPresentationMode = !1),
          (this.pdfDocument = void 0),
          (this.pdfViewer = void 0);
      }
      return (
        (e.prototype.setDocument = function (e) {
          this.pdfDocument = e;
        }),
        (e.prototype.setViewer = function (e) {
          this.pdfViewer = e;
        }),
        (e.prototype.setExternalLinkRel = function (e) {
          this.externalLinkRel = e;
        }),
        (e.prototype.setExternalLinkTarget = function (e) {
          this.externalLinkTarget = e;
        }),
        (e.prototype.setHistory = function () {}),
        Object.defineProperty(e.prototype, "pagesCount", {
          get: function () {
            return this.pdfDocument ? this.pdfDocument.numPages : 0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "page", {
          get: function () {
            return (
              (0, r.default)(this.pdfViewer, "PDF viewer is not initialized."),
              this.pdfViewer.currentPageNumber || 0
            );
          },
          set: function (e) {
            (0, r.default)(this.pdfViewer, "PDF viewer is not initialized."),
              (this.pdfViewer.currentPageNumber = e);
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e.prototype, "rotation", {
          get: function () {
            return 0;
          },
          set: function (e) {},
          enumerable: !1,
          configurable: !0,
        }),
        (e.prototype.goToDestination = function (e) {
          var t = this;
          return new Promise(function (n) {
            (0, r.default)(t.pdfDocument, "PDF document not loaded."),
              (0, r.default)(e, "Destination is not specified."),
              "string" == typeof e
                ? t.pdfDocument.getDestination(e).then(n)
                : Array.isArray(e)
                  ? n(e)
                  : e.then(n);
          }).then(function (e) {
            (0, r.default)(
              Array.isArray(e),
              '"'.concat(e, '" is not a valid destination array.'),
            );
            var n = e[0];
            new Promise(function (e) {
              (0, r.default)(t.pdfDocument, "PDF document not loaded."),
                n instanceof Object
                  ? t.pdfDocument
                      .getPageIndex(n)
                      .then(function (t) {
                        e(t);
                      })
                      .catch(function () {
                        (0, r.default)(
                          !1,
                          '"'.concat(n, '" is not a valid page reference.'),
                        );
                      })
                  : "number" == typeof n
                    ? e(n)
                    : (0, r.default)(
                        !1,
                        '"'.concat(
                          n,
                          '" is not a valid destination reference.',
                        ),
                      );
            }).then(function (n) {
              var i = n + 1;
              (0, r.default)(t.pdfViewer, "PDF viewer is not initialized."),
                (0, r.default)(
                  i >= 1 && i <= t.pagesCount,
                  '"'.concat(i, '" is not a valid page number.'),
                ),
                t.pdfViewer.scrollPageIntoView({
                  dest: e,
                  pageIndex: n,
                  pageNumber: i,
                });
            });
          });
        }),
        (e.prototype.navigateTo = function (e) {
          this.goToDestination(e);
        }),
        (e.prototype.goToPage = function (e) {
          var t = e - 1;
          (0, r.default)(this.pdfViewer, "PDF viewer is not initialized."),
            (0, r.default)(
              e >= 1 && e <= this.pagesCount,
              '"'.concat(e, '" is not a valid page number.'),
            ),
            this.pdfViewer.scrollPageIntoView({ pageIndex: t, pageNumber: e });
        }),
        (e.prototype.addLinkAttributes = function (e, t, n) {
          (e.href = t),
            (e.rel = this.externalLinkRel || "noopener noreferrer nofollow"),
            (e.target = n ? "_blank" : this.externalLinkTarget || "");
        }),
        (e.prototype.getDestinationHash = function () {
          return "#";
        }),
        (e.prototype.getAnchorUrl = function () {
          return "#";
        }),
        (e.prototype.setHash = function () {}),
        (e.prototype.executeNamedAction = function () {}),
        (e.prototype.cachePageRef = function () {}),
        (e.prototype.isPageVisible = function () {
          return !0;
        }),
        (e.prototype.isPageCached = function () {
          return !0;
        }),
        (e.prototype.executeSetOCGState = function () {}),
        e
      );
    })();
  t.default = a;
}); /*!node_modules/react-pdf/dist/cjs/PasswordResponses.js*/
amis.define("c1386d6", function (e, t, d, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  t.default = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
}); /*!node_modules/react-pdf/dist/cjs/shared/utils.js*/
amis.define("9511831", function (e, r, i, n) {
  "use strict";
  var t =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(r, "__esModule", { value: !0 }),
    (r.loadFromFile =
      r.isCancelException =
      r.makePageCallback =
      r.cancelRunningTask =
      r.displayWorkerWarning =
      r.displayCORSWarning =
      r.getDevicePixelRatio =
      r.dataURItoByteString =
      r.isDataURI =
      r.isBlob =
      r.isArrayBuffer =
      r.isString =
      r.isProvided =
      r.isDefined =
      r.isLocalFileSystem =
      r.isBrowser =
        void 0);
  var o = t(e("b693e5e")),
    a = t(e("0107e85"));
  function l(e) {
    return void 0 !== e;
  }
  function s(e) {
    return "string" == typeof e;
  }
  function u(e) {
    return s(e) && /^data:/.test(e);
  }
  (r.isBrowser = "undefined" != typeof document),
    (r.isLocalFileSystem = r.isBrowser && "file:" === window.location.protocol),
    (r.isDefined = l),
    (r.isProvided = function (e) {
      return l(e) && null !== e;
    }),
    (r.isString = s),
    (r.isArrayBuffer = function (e) {
      return e instanceof ArrayBuffer;
    }),
    (r.isBlob = function (e) {
      return (
        (0, o.default)(
          r.isBrowser,
          "isBlob can only be used in a browser environment",
        ),
        e instanceof Blob
      );
    }),
    (r.isDataURI = u),
    (r.dataURItoByteString = function (e) {
      (0, o.default)(u(e), "Invalid data URI.");
      var r = e.split(","),
        i = r[0],
        n = void 0 === i ? "" : i,
        t = r[1],
        a = void 0 === t ? "" : t;
      return -1 !== n.split(";").indexOf("base64") ? atob(a) : unescape(a);
    }),
    (r.getDevicePixelRatio = function () {
      return (r.isBrowser && window.devicePixelRatio) || 1;
    });
  var c =
    "On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";
  (r.displayCORSWarning = function () {
    (0, a.default)(
      !r.isLocalFileSystem,
      "Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ".concat(
        c,
      ),
    );
  }),
    (r.displayWorkerWarning = function () {
      (0, a.default)(
        !r.isLocalFileSystem,
        "Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ".concat(
          c,
        ),
      );
    }),
    (r.cancelRunningTask = function (e) {
      e && e.cancel && e.cancel();
    }),
    (r.makePageCallback = function (e, r) {
      return (
        Object.defineProperty(e, "width", {
          get: function () {
            return this.view[2] * r;
          },
          configurable: !0,
        }),
        Object.defineProperty(e, "height", {
          get: function () {
            return this.view[3] * r;
          },
          configurable: !0,
        }),
        Object.defineProperty(e, "originalWidth", {
          get: function () {
            return this.view[2];
          },
          configurable: !0,
        }),
        Object.defineProperty(e, "originalHeight", {
          get: function () {
            return this.view[3];
          },
          configurable: !0,
        }),
        e
      );
    }),
    (r.isCancelException = function (e) {
      return "RenderingCancelledException" === e.name;
    }),
    (r.loadFromFile = function (e) {
      return new Promise(function (r, i) {
        var n = new FileReader();
        (n.onload = function () {
          if (!n.result) return i(new Error("Error while reading a file."));
          r(n.result);
        }),
          (n.onerror = function (e) {
            if (!e.target) return i(new Error("Error while reading a file."));
            var r = e.target.error;
            if (!r) return i(new Error("Error while reading a file."));
            switch (r.code) {
              case r.NOT_FOUND_ERR:
                return i(
                  new Error("Error while reading a file: File not found."),
                );
              case r.SECURITY_ERR:
                return i(
                  new Error("Error while reading a file: Security error."),
                );
              case r.ABORT_ERR:
                return i(new Error("Error while reading a file: Aborted."));
              default:
                return i(new Error("Error while reading a file."));
            }
          }),
          n.readAsArrayBuffer(e);
      });
    });
}); /*!node_modules/react-pdf/dist/cjs/shared/hooks/useResolver.js*/
amis.define("26a25b7", function (e, r, u, t) {
  "use strict";
  Object.defineProperty(r, "__esModule", { value: !0 });
  var o = e("8d5e11f");
  function a(e, r) {
    switch (r.type) {
      case "RESOLVE":
        return { value: r.value, error: void 0 };
      case "REJECT":
        return { value: !1, error: r.error };
      case "RESET":
        return { value: void 0, error: void 0 };
      default:
        return e;
    }
  }
  r.default = function () {
    return (0, o.useReducer)(a, { value: void 0, error: void 0 });
  };
}); /*!node_modules/react-pdf/dist/cjs/Document.js*/
amis.define("8499356", function (e, t, r, n) {
  "use strict";
  var o = e("9914776"),
    a =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, r, n) {
            void 0 === n && (n = r);
            var o = Object.getOwnPropertyDescriptor(t, r);
            (o &&
              !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
              (o = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              }),
              Object.defineProperty(e, n, o);
          }
        : function (e, t, r, n) {
            void 0 === n && (n = r), (e[n] = t[r]);
          }),
    i =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    u =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e)
            "default" !== r &&
              Object.prototype.hasOwnProperty.call(e, r) &&
              a(t, e, r);
        return i(t, e), t;
      },
    s =
      (this && this.__awaiter) ||
      function (e, t, r, n) {
        return new (r || (r = Promise))(function (o, a) {
          function i(e) {
            try {
              s(n.next(e));
            } catch (e) {
              a(e);
            }
          }
          function u(e) {
            try {
              s(n.throw(e));
            } catch (e) {
              a(e);
            }
          }
          function s(e) {
            var t;
            e.done
              ? o(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(i, u);
          }
          s((n = n.apply(e, t || [])).next());
        });
      },
    c =
      (this && this.__rest) ||
      function (e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
            t.indexOf(n[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
              (r[n[o]] = e[n[o]]);
        }
        return r;
      },
    l =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
  Object.defineProperty(t, "__esModule", { value: !0 });
  var d = e("99ef1fd"),
    f = e("8d5e11f"),
    p = l(e("f5bc76e")),
    g = l(e("1e34b3c")),
    v = l(e("03a5ee2")),
    h = l(e("b693e5e")),
    m = l(e("0107e85")),
    y = e("cf521da"),
    b = u(e("node_modules/pdfjs-dist/build/pdf.mjs")),
    R = l(e("dcd0c4a")),
    w = l(e("7cbfb43")),
    E = l(e("2406ba7")),
    P = l(e("c1386d6")),
    O = e("9511831"),
    S = l(e("26a25b7")),
    _ = b.PDFDataRangeTransport,
    j = function (e, t) {
      switch (t) {
        case P.default.NEED_PASSWORD:
          e(prompt("Enter the password to open this PDF file."));
          break;
        case P.default.INCORRECT_PASSWORD:
          e(prompt("Invalid password. Please try again."));
      }
    };
  function D(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      ("data" in e || "range" in e || "url" in e)
    );
  }
  var I = (0, f.forwardRef)(function (e, t) {
    var r,
      n = this,
      a = e.children,
      i = e.className,
      u = e.error,
      l = void 0 === u ? "Failed to load PDF file." : u,
      P = e.externalLinkRel,
      I = e.externalLinkTarget,
      k = e.file,
      x = e.inputRef,
      L = e.imageResourcesPath,
      C = e.loading,
      T = void 0 === C ? "Loading PDF…" : C,
      M = e.noData,
      F = void 0 === M ? "No PDF file specified." : M,
      N = e.onItemClick,
      A = e.onLoadError,
      B = e.onLoadProgress,
      U = e.onLoadSuccess,
      V = e.onPassword,
      q = void 0 === V ? j : V,
      W = e.onSourceError,
      z = e.onSourceSuccess,
      J = e.options,
      H = e.renderMode,
      G = e.rotate,
      K = c(e, [
        "children",
        "className",
        "error",
        "externalLinkRel",
        "externalLinkTarget",
        "file",
        "inputRef",
        "imageResourcesPath",
        "loading",
        "noData",
        "onItemClick",
        "onLoadError",
        "onLoadProgress",
        "onLoadSuccess",
        "onPassword",
        "onSourceError",
        "onSourceSuccess",
        "options",
        "renderMode",
        "rotate",
      ]),
      Q = (0, S.default)(),
      X = Q[0],
      Y = Q[1],
      Z = X.value,
      $ = X.error,
      ee = (0, S.default)(),
      te = ee[0],
      re = ee[1],
      ne = te.value,
      oe = te.error,
      ae = (0, f.useRef)(new E.default()),
      ie = (0, f.useRef)([]),
      ue = (0, f.useRef)(void 0),
      se = (0, f.useRef)(void 0);
    k &&
      k !== ue.current &&
      D(k) &&
      ((0, m.default)(
        !(0, y.dequal)(k, ue.current),
        'File prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.',
      ),
      (ue.current = k)),
      J &&
        J !== se.current &&
        ((0, m.default)(
          !(0, y.dequal)(J, se.current),
          'Options prop passed to <Document /> changed, but it\'s equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.',
        ),
        (se.current = J));
    var ce = (0, f.useRef)({
      scrollPageIntoView: function (e) {
        var t = e.dest,
          r = e.pageNumber,
          n = e.pageIndex,
          o = void 0 === n ? r - 1 : n;
        if (N) N({ dest: t, pageIndex: o, pageNumber: r });
        else {
          var a = ie.current[o];
          a
            ? a.scrollIntoView()
            : (0, m.default)(
                !1,
                "An internal link leading to page ".concat(
                  r,
                  " was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.",
                ),
              );
        }
      },
    });
    (0, f.useImperativeHandle)(
      t,
      function () {
        return { linkService: ae, pages: ie, viewer: ce };
      },
      [],
    ),
      (0, f.useEffect)(
        function () {
          Y({ type: "RESET" });
        },
        [k, Y],
      );
    var le = (0, f.useCallback)(
      function () {
        return s(n, void 0, void 0, function () {
          var e, t, r;
          return o.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                return k
                  ? "string" == typeof k
                    ? (0, O.isDataURI)(k)
                      ? [2, { data: (r = (0, O.dataURItoByteString)(k)) }]
                      : ((0, O.displayCORSWarning)(), [2, { url: k }])
                    : k instanceof _
                      ? [2, { range: k }]
                      : (0, O.isArrayBuffer)(k)
                        ? [2, { data: k }]
                        : O.isBrowser && (0, O.isBlob)(k)
                          ? [4, (0, O.loadFromFile)(k)]
                          : [3, 2]
                  : [2, null];
              case 1:
                return [2, { data: n.sent() }];
              case 2:
                if (
                  ((0, h.default)(
                    "object" == typeof k,
                    "Invalid parameter in file, need either Uint8Array, string or a parameter object",
                  ),
                  (0, h.default)(
                    D(k),
                    "Invalid parameter object: need either .data, .range or .url",
                  ),
                  "url" in k && "string" == typeof k.url)
                ) {
                  if ((0, O.isDataURI)(k.url))
                    return (
                      (e = k.url),
                      (t = c(k, ["url"])),
                      (r = (0, O.dataURItoByteString)(e)),
                      [2, Object.assign({ data: r }, t)]
                    );
                  (0, O.displayCORSWarning)();
                }
                return [2, k];
            }
          });
        });
      },
      [k],
    );
    function de(e, t) {
      ie.current[e] = t;
    }
    function fe(e) {
      delete ie.current[e];
    }
    (0, f.useEffect)(
      function () {
        var e = (0, g.default)(le());
        return (
          e.promise
            .then(function (e) {
              Y({ type: "RESOLVE", value: e });
            })
            .catch(function (e) {
              Y({ type: "REJECT", error: e });
            }),
          function () {
            (0, O.cancelRunningTask)(e);
          }
        );
      },
      [le, Y],
    ),
      (0, f.useEffect)(
        function () {
          void 0 !== Z &&
            (!1 !== Z
              ? z && z()
              : $ && ((0, m.default)(!1, $.toString()), W && W($)));
        },
        [Z],
      ),
      (0, f.useEffect)(
        function () {
          re({ type: "RESET" });
        },
        [re, Z],
      ),
      (0, f.useEffect)(
        function () {
          if (Z) {
            var e = Object.assign(Object.assign({}, Z), J),
              t = b.getDocument(e);
            B && (t.onProgress = B), q && (t.onPassword = q);
            var r = t;
            return (
              r.promise
                .then(function (e) {
                  re({ type: "RESOLVE", value: e });
                })
                .catch(function (e) {
                  r.destroyed || re({ type: "REJECT", error: e });
                }),
              function () {
                r.destroy();
              }
            );
          }
        },
        [J, re, Z],
      ),
      (0, f.useEffect)(
        function () {
          void 0 !== ne &&
            (!1 !== ne
              ? ne &&
                (U && U(ne),
                (ie.current = new Array(ne.numPages)),
                ae.current.setDocument(ne))
              : oe && ((0, m.default)(!1, oe.toString()), A && A(oe)));
        },
        [ne],
      ),
      (0, f.useEffect)(
        function () {
          ae.current.setViewer(ce.current),
            ae.current.setExternalLinkRel(P),
            ae.current.setExternalLinkTarget(I);
        },
        [P, I],
      );
    var pe = (0, f.useMemo)(
        function () {
          return {
            imageResourcesPath: L,
            linkService: ae.current,
            onItemClick: N,
            pdf: ne,
            registerPage: de,
            renderMode: H,
            rotate: G,
            unregisterPage: fe,
          };
        },
        [L, N, ne, H, G],
      ),
      ge = (0, f.useMemo)(
        function () {
          return (0, p.default)(K, function () {
            return ne;
          });
        },
        [K, ne],
      );
    return (0, d.jsx)(
      "div",
      Object.assign(
        {
          className: (0, v.default)("react-pdf__Document", i),
          ref: x,
          style: ((r = {}), (r["--scale-factor"] = "1"), r),
        },
        ge,
        {
          children: k
            ? null == ne
              ? (0, d.jsx)(w.default, {
                  type: "loading",
                  children: "function" == typeof T ? T() : T,
                })
              : !1 === ne
                ? (0, d.jsx)(w.default, {
                    type: "error",
                    children: "function" == typeof l ? l() : l,
                  })
                : (0, d.jsx)(R.default.Provider, { value: pe, children: a })
            : (0, d.jsx)(w.default, {
                type: "no-data",
                children: "function" == typeof F ? F() : F,
              }),
        },
      ),
    );
  });
  t.default = I;
}); /*!node_modules/react-pdf/dist/cjs/OutlineContext.js*/
amis.define("9570956", function (e, t, n, u) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var a = e("8d5e11f");
  t.default = (0, a.createContext)(null);
}); /*!node_modules/react-pdf/dist/cjs/Ref.js*/
amis.define("de03340", function (n, t, e, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var u = (function () {
    function n(n) {
      var t = n.num,
        e = n.gen;
      (this.num = t), (this.gen = e);
    }
    return (
      (n.prototype.toString = function () {
        var n = "".concat(this.num, "R");
        return 0 !== this.gen && (n += this.gen), n;
      }),
      n
    );
  })();
  t.default = u;
}); /*!node_modules/react-pdf/dist/cjs/shared/hooks/useCachedValue.js*/
amis.define("414a691", function (e, n, r, t) {
  "use strict";
  Object.defineProperty(n, "__esModule", { value: !0 });
  var u = e("8d5e11f"),
    i = e("9511831");
  n.default = function (e) {
    var n = (0, u.useRef)(void 0),
      r = n.current;
    return (0, i.isDefined)(r)
      ? function () {
          return r;
        }
      : function () {
          var r = e();
          return (n.current = r), r;
        };
  };
}); /*!node_modules/react-pdf/dist/cjs/shared/hooks/useDocumentContext.js*/
amis.define("8d76b27", function (e, t, u, d) {
  "use strict";
  var n =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  var f = e("8d5e11f"),
    i = n(e("dcd0c4a"));
  t.default = function () {
    return (0, f.useContext)(i.default);
  };
}); /*!node_modules/react-pdf/dist/cjs/shared/hooks/useOutlineContext.js*/
amis.define("d46ecfd", function (e, t, u, f) {
  "use strict";
  var n =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  var d = e("8d5e11f"),
    i = n(e("9570956"));
  t.default = function () {
    return (0, d.useContext)(i.default);
  };
}); /*!node_modules/react-pdf/dist/cjs/OutlineItem.js*/
amis.define("6461e52", function (e, t, n, i) {
  "use strict";
  var r = e("9914776"),
    o =
      (this && this.__awaiter) ||
      function (e, t, n, i) {
        return new (n || (n = Promise))(function (r, o) {
          function a(e) {
            try {
              c(i.next(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            try {
              c(i.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? r(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, u);
          }
          c((i = i.apply(e, t || [])).next());
        });
      },
    a =
      (this && this.__rest) ||
      function (e, t) {
        var n = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            t.indexOf(i) < 0 &&
            (n[i] = e[i]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
            t.indexOf(i[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
              (n[i[r]] = e[i[r]]);
        }
        return n;
      },
    u =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
  Object.defineProperty(t, "__esModule", { value: !0 });
  var c = e("99ef1fd"),
    s = u(e("b693e5e")),
    f = u(e("de03340")),
    l = u(e("414a691")),
    d = u(e("8d76b27")),
    p = u(e("d46ecfd"));
  t.default = function e(t) {
    var n = this,
      i = (0, d.default)(),
      u = (0, p.default)();
    (0, s.default)(u, "Unable to find Outline context.");
    var h = Object.assign(Object.assign(Object.assign({}, i), u), t),
      v = h.item,
      m = h.linkService,
      b = h.onItemClick,
      g = h.pdf,
      O = a(h, ["item", "linkService", "onItemClick", "pdf"]);
    (0, s.default)(
      g,
      "Attempted to load an outline, but no document was specified. Wrap <Outline /> in a <Document /> or pass explicit `pdf` prop.",
    );
    var y = (0, l.default)(function () {
        return "string" == typeof v.dest ? g.getDestination(v.dest) : v.dest;
      }),
      _ = (0, l.default)(function () {
        return o(n, void 0, void 0, function () {
          var e, t;
          return r.__generator(this, function (n) {
            switch (n.label) {
              case 0:
                return [4, y()];
              case 1:
                if (!(e = n.sent())) throw new Error("Destination not found.");
                return (t = e[0]), [2, g.getPageIndex(new f.default(t))];
            }
          });
        });
      }),
      j = (0, l.default)(function () {
        return o(n, void 0, void 0, function () {
          return r.__generator(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, _()];
              case 1:
                return [2, e.sent() + 1];
            }
          });
        });
      });
    return (0, c.jsxs)("li", {
      children: [
        (0, c.jsx)("a", {
          href: "#",
          onClick: function (e) {
            e.preventDefault(),
              (0, s.default)(
                b || m,
                "Either onItemClick callback or linkService must be defined in order to navigate to an outline item.",
              ),
              b
                ? Promise.all([y(), _(), j()]).then(function (e) {
                    var t = e[0],
                      n = e[1],
                      i = e[2];
                    b({ dest: t, pageIndex: n, pageNumber: i });
                  })
                : m && m.goToDestination(v.dest);
          },
          children: v.title,
        }),
        (function () {
          if (!v.items || !v.items.length) return null;
          var t = v.items;
          return (0, c.jsx)("ul", {
            children: t.map(function (t, n) {
              return (0, c.jsx)(
                e,
                Object.assign({ item: t, pdf: g }, O),
                "string" == typeof t.dest ? t.dest : n,
              );
            }),
          });
        })(),
      ],
    });
  };
}); /*!node_modules/react-pdf/dist/cjs/Outline.js*/
amis.define("c65cc32", function (e, t, n, r) {
  "use strict";
  var u =
      (this && this.__rest) ||
      function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var u = 0;
          for (r = Object.getOwnPropertySymbols(e); u < r.length; u++)
            t.indexOf(r[u]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[u]) &&
              (n[r[u]] = e[r[u]]);
        }
        return n;
      },
    o =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
  Object.defineProperty(t, "__esModule", { value: !0 });
  var i = e("99ef1fd"),
    a = e("8d5e11f"),
    c = o(e("1e34b3c")),
    f = o(e("f5bc76e")),
    l = o(e("03a5ee2")),
    s = o(e("b693e5e")),
    d = o(e("0107e85")),
    p = o(e("9570956")),
    m = o(e("6461e52")),
    b = e("9511831"),
    v = o(e("8d76b27")),
    O = o(e("26a25b7"));
  t.default = function (e) {
    var t = (0, v.default)(),
      n = Object.assign(Object.assign({}, t), e),
      r = n.className,
      o = n.inputRef,
      y = n.onItemClick,
      j = n.onLoadError,
      E = n.onLoadSuccess,
      h = n.pdf,
      g = u(n, [
        "className",
        "inputRef",
        "onItemClick",
        "onLoadError",
        "onLoadSuccess",
        "pdf",
      ]);
    (0, s.default)(
      h,
      "Attempted to load an outline, but no document was specified. Wrap <Outline /> in a <Document /> or pass explicit `pdf` prop.",
    );
    var _ = (0, O.default)(),
      x = _[0],
      S = _[1],
      R = x.value,
      L = x.error;
    (0, a.useEffect)(
      function () {
        S({ type: "RESET" });
      },
      [S, h],
    ),
      (0, a.useEffect)(
        function () {
          if (h) {
            var e = (0, c.default)(h.getOutline()),
              t = e;
            return (
              e.promise
                .then(function (e) {
                  S({ type: "RESOLVE", value: e });
                })
                .catch(function (e) {
                  S({ type: "REJECT", error: e });
                }),
              function () {
                return (0, b.cancelRunningTask)(t);
              }
            );
          }
        },
        [S, h],
      ),
      (0, a.useEffect)(
        function () {
          void 0 !== R &&
            (!1 !== R
              ? void 0 !== R && !1 !== R && E && E(R)
              : L && ((0, d.default)(!1, L.toString()), j && j(L)));
        },
        [R],
      );
    var P = (0, a.useMemo)(
        function () {
          return { onItemClick: y };
        },
        [y],
      ),
      k = (0, a.useMemo)(
        function () {
          return (0, f.default)(g, function () {
            return R;
          });
        },
        [g, R],
      );
    return R
      ? (0, i.jsx)(
          "div",
          Object.assign(
            { className: (0, l.default)("react-pdf__Outline", r), ref: o },
            k,
            {
              children: (0, i.jsx)(p.default.Provider, {
                value: P,
                children: R
                  ? (0, i.jsx)("ul", {
                      children: R.map(function (e, t) {
                        return (0, i.jsx)(
                          m.default,
                          { item: e, pdf: h },
                          "string" == typeof e.dest ? e.dest : t,
                        );
                      }),
                    })
                  : null,
              }),
            },
          ),
        )
      : null;
  };
}); /*!node_modules/react-pdf/dist/cjs/PageContext.js*/
amis.define("b0489fb", function (e, t, f, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });
  var u = e("8d5e11f");
  t.default = (0, u.createContext)(null);
}); /*!node_modules/react-pdf/dist/cjs/shared/constants.js*/
amis.define("fedb354", function (l, n, u, e) {
  "use strict";
  Object.defineProperty(n, "__esModule", { value: !0 }),
    (n.HEADING_PATTERN = n.PDF_ROLE_TO_HTML_ROLE = void 0),
    (n.PDF_ROLE_TO_HTML_ROLE = {
      Document: null,
      DocumentFragment: null,
      Part: "group",
      Sect: "group",
      Div: "group",
      Aside: "note",
      NonStruct: "none",
      P: null,
      H: "heading",
      Title: null,
      FENote: "note",
      Sub: "group",
      Lbl: null,
      Span: null,
      Em: null,
      Strong: null,
      Link: "link",
      Annot: "note",
      Form: "form",
      Ruby: null,
      RB: null,
      RT: null,
      RP: null,
      Warichu: null,
      WT: null,
      WP: null,
      L: "list",
      LI: "listitem",
      LBody: null,
      Table: "table",
      TR: "row",
      TH: "columnheader",
      TD: "cell",
      THead: "columnheader",
      TBody: null,
      TFoot: null,
      Caption: null,
      Figure: "figure",
      Formula: null,
      Artifact: null,
    }),
    (n.HEADING_PATTERN = /^H(\d+)$/);
}); /*!node_modules/react-pdf/dist/cjs/shared/structTreeUtils.js*/
amis.define("4685779", function (e, t, i, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.getAttributes =
      t.getBaseAttributes =
      t.getRoleAttributes =
      t.isStructTreeNodeWithOnlyContentChild =
      t.isStructTreeNode =
      t.isPdfRole =
        void 0);
  var r = e("fedb354");
  function l(e) {
    return e in r.PDF_ROLE_TO_HTML_ROLE;
  }
  function a(e) {
    return "children" in e;
  }
  function s(e) {
    return (
      !!a(e) &&
      1 === e.children.length &&
      0 in e.children &&
      "id" in e.children[0]
    );
  }
  function u(e) {
    var t = {};
    if (a(e)) {
      var i = e.role,
        n = i.match(r.HEADING_PATTERN);
      if (n) (t.role = "heading"), (t["aria-level"] = Number(n[1]));
      else if (l(i)) {
        var s = r.PDF_ROLE_TO_HTML_ROLE[i];
        s && (t.role = s);
      }
    }
    return t;
  }
  function o(e) {
    var t = {};
    if (a(e)) {
      if (
        (void 0 !== e.alt && (t["aria-label"] = e.alt),
        void 0 !== e.lang && (t.lang = e.lang),
        s(e))
      ) {
        var i = e.children[0];
        if (i) {
          var n = o(i);
          return Object.assign(Object.assign({}, t), n);
        }
      }
    } else "id" in e && (t["aria-owns"] = e.id);
    return t;
  }
  (t.isPdfRole = l),
    (t.isStructTreeNode = a),
    (t.isStructTreeNodeWithOnlyContentChild = s),
    (t.getRoleAttributes = u),
    (t.getBaseAttributes = o),
    (t.getAttributes = function (e) {
      return e ? Object.assign(Object.assign({}, u(e)), o(e)) : null;
    });
}); /*!node_modules/react-pdf/dist/cjs/StructTreeItem.js*/
amis.define("cb6e4b7", function (e, n, t, r) {
  "use strict";
  Object.defineProperty(n, "__esModule", { value: !0 });
  var u = e("99ef1fd"),
    s = e("8d5e11f"),
    i = e("4685779");
  n.default = function e(n) {
    var t = n.className,
      r = n.node,
      c = (0, s.useMemo)(
        function () {
          return (0, i.getAttributes)(r);
        },
        [r],
      ),
      o = (0, s.useMemo)(
        function () {
          return (0, i.isStructTreeNode)(r)
            ? (0, i.isStructTreeNodeWithOnlyContentChild)(r)
              ? null
              : r.children.map(function (n, t) {
                  return (0, u.jsx)(e, { node: n }, t);
                })
            : null;
        },
        [r],
      );
    return (0, u.jsx)(
      "span",
      Object.assign({ className: t }, c, { children: o }),
    );
  };
}); /*!node_modules/react-pdf/dist/cjs/shared/hooks/usePageContext.js*/
amis.define("55322af", function (e, t, u, f) {
  "use strict";
  var n =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  var i = e("8d5e11f"),
    r = n(e("b0489fb"));
  t.default = function () {
    return (0, i.useContext)(r.default);
  };
}); /*!node_modules/react-pdf/dist/cjs/StructTree.js*/
amis.define("1db6862", function (e, t, r, u) {
  "use strict";
  var n =
    (this && this.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
  Object.defineProperty(t, "__esModule", { value: !0 });
  var f = e("99ef1fd"),
    c = e("8d5e11f"),
    a = n(e("1e34b3c")),
    o = n(e("b693e5e")),
    i = n(e("0107e85")),
    d = n(e("cb6e4b7")),
    s = n(e("55322af")),
    l = n(e("26a25b7")),
    E = e("9511831");
  t.default = function () {
    var e = (0, s.default)();
    (0, o.default)(e, "Unable to find Page context.");
    var t = e.onGetStructTreeError,
      r = e.onGetStructTreeSuccess,
      u = (0, l.default)(),
      n = u[0],
      _ = u[1],
      v = n.value,
      T = n.error,
      b = e.customTextRenderer,
      p = e.page;
    return (
      (0, c.useEffect)(
        function () {
          _({ type: "RESET" });
        },
        [_, p],
      ),
      (0, c.useEffect)(
        function () {
          if (!b && p) {
            var e = (0, a.default)(p.getStructTree()),
              t = e;
            return (
              e.promise
                .then(function (e) {
                  _({ type: "RESOLVE", value: e });
                })
                .catch(function (e) {
                  _({ type: "REJECT", error: e });
                }),
              function () {
                return (0, E.cancelRunningTask)(t);
              }
            );
          }
        },
        [b, p, _],
      ),
      (0, c.useEffect)(
        function () {
          void 0 !== v &&
            (!1 !== v
              ? v && r && r(v)
              : T && ((0, i.default)(!1, T.toString()), t && t(T)));
        },
        [v],
      ),
      v
        ? (0, f.jsx)(d.default, {
            className: "react-pdf__Page__structTree structTree",
            node: v,
          })
        : null
    );
  };
}); /*!node_modules/react-pdf/dist/cjs/Page/Canvas.js*/
amis.define("595c69b", function (e, t, n, a) {
  "use strict";
  var r =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, n, a) {
            void 0 === a && (a = n);
            var r = Object.getOwnPropertyDescriptor(t, n);
            (r &&
              !("get" in r ? !t.__esModule : r.writable || r.configurable)) ||
              (r = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, a, r);
          }
        : function (e, t, n, a) {
            void 0 === a && (a = n), (e[a] = t[n]);
          }),
    i =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    o =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            "default" !== n &&
              Object.prototype.hasOwnProperty.call(e, n) &&
              r(t, e, n);
        return i(t, e), t;
      },
    c =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
  Object.defineProperty(t, "__esModule", { value: !0 });
  var u = e("99ef1fd"),
    l = e("8d5e11f"),
    s = c(e("1213e1c")),
    d = c(e("b693e5e")),
    f = c(e("0107e85")),
    h = o(e("node_modules/pdfjs-dist/build/pdf.mjs")),
    v = c(e("1db6862")),
    p = c(e("55322af")),
    b = e("9511831"),
    g = h.AnnotationMode;
  t.default = function (e) {
    var t = (0, p.default)();
    (0, d.default)(t, "Unable to find Page context.");
    var n = Object.assign(Object.assign({}, t), e),
      a = n._className,
      r = n.canvasBackground,
      i = n.devicePixelRatio,
      o = void 0 === i ? (0, b.getDevicePixelRatio)() : i,
      c = n.onRenderError,
      h = n.onRenderSuccess,
      _ = n.page,
      m = n.renderForms,
      y = n.renderTextLayer,
      j = n.rotate,
      w = n.scale,
      M = e.canvasRef;
    (0, d.default)(
      _,
      "Attempted to render page canvas, but no page was specified.",
    );
    var O = (0, l.useRef)(null);
    function x(e) {
      (0, b.isCancelException)(e) ||
        ((0, f.default)(!1, e.toString()), c && c(e));
    }
    var P = (0, l.useMemo)(
        function () {
          return _.getViewport({ scale: w * o, rotation: j });
        },
        [o, _, j, w],
      ),
      E = (0, l.useMemo)(
        function () {
          return _.getViewport({ scale: w, rotation: j });
        },
        [_, j, w],
      );
    (0, l.useEffect)(
      function () {
        if (_) {
          _.cleanup();
          var e = O.current;
          if (e) {
            (e.width = P.width),
              (e.height = P.height),
              (e.style.width = "".concat(Math.floor(E.width), "px")),
              (e.style.height = "".concat(Math.floor(E.height), "px")),
              (e.style.visibility = "hidden");
            var t = {
              annotationMode: m ? g.ENABLE_FORMS : g.ENABLE,
              canvasContext: e.getContext("2d", { alpha: !1 }),
              viewport: P,
            };
            r && (t.background = r);
            var n = _.render(t),
              a = n;
            return (
              n.promise
                .then(function () {
                  (e.style.visibility = ""),
                    _ && h && h((0, b.makePageCallback)(_, w));
                })
                .catch(x),
              function () {
                return (0, b.cancelRunningTask)(a);
              }
            );
          }
        }
      },
      [r, O, o, _, m, P, E],
    );
    var R = (0, l.useCallback)(
      function () {
        var e = O.current;
        e && ((e.width = 0), (e.height = 0));
      },
      [O],
    );
    return (
      (0, l.useEffect)(
        function () {
          return R;
        },
        [R],
      ),
      (0, u.jsx)("canvas", {
        className: "".concat(a, "__canvas"),
        dir: "ltr",
        ref: (0, s.default)(M, O),
        style: { display: "block", userSelect: "none" },
        children: y ? (0, u.jsx)(v.default, {}) : null,
      })
    );
  };
}); /*!node_modules/react-pdf/dist/cjs/Page/TextLayer.js*/
amis.define("03f09b0", function (e, t, n, r) {
  "use strict";
  var a =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, n, r) {
            void 0 === r && (r = n);
            var a = Object.getOwnPropertyDescriptor(t, n);
            (a &&
              !("get" in a ? !t.__esModule : a.writable || a.configurable)) ||
              (a = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, r, a);
          }
        : function (e, t, n, r) {
            void 0 === r && (r = n), (e[r] = t[n]);
          }),
    o =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    u =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            "default" !== n &&
              Object.prototype.hasOwnProperty.call(e, n) &&
              a(t, e, n);
        return o(t, e), t;
      },
    i =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
  Object.defineProperty(t, "__esModule", { value: !0 });
  var c = e("99ef1fd"),
    f = e("8d5e11f"),
    s = i(e("1e34b3c")),
    d = i(e("03a5ee2")),
    l = i(e("b693e5e")),
    p = i(e("0107e85")),
    v = u(e("node_modules/pdfjs-dist/build/pdf.mjs")),
    m = i(e("55322af")),
    b = i(e("26a25b7")),
    g = e("9511831");
  t.default = function () {
    var e = (0, m.default)();
    (0, l.default)(e, "Unable to find Page context.");
    var t = e.customTextRenderer,
      n = e.onGetTextError,
      r = e.onGetTextSuccess,
      a = e.onRenderTextLayerError,
      o = e.onRenderTextLayerSuccess,
      u = e.page,
      i = e.pageIndex,
      y = e.pageNumber,
      _ = e.rotate,
      x = e.scale;
    (0, l.default)(
      u,
      "Attempted to load page text content, but no page was specified.",
    );
    var h = (0, b.default)(),
      E = h[0],
      T = h[1],
      j = E.value,
      O = E.error,
      L = (0, f.useRef)(null),
      w = (0, f.useRef)(void 0);
    (0, p.default)(
      1 ===
        parseInt(
          window
            .getComputedStyle(document.body)
            .getPropertyValue("--react-pdf-text-layer"),
          10,
        ),
      "TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer",
    ),
      (0, f.useEffect)(
        function () {
          T({ type: "RESET" });
        },
        [u, T],
      ),
      (0, f.useEffect)(
        function () {
          if (u) {
            var e = (0, s.default)(u.getTextContent()),
              t = e;
            return (
              e.promise
                .then(function (e) {
                  T({ type: "RESOLVE", value: e });
                })
                .catch(function (e) {
                  T({ type: "REJECT", error: e });
                }),
              function () {
                return (0, g.cancelRunningTask)(t);
              }
            );
          }
        },
        [u, T],
      ),
      (0, f.useEffect)(
        function () {
          void 0 !== j &&
            (!1 !== j
              ? j && r && r(j)
              : O && ((0, p.default)(!1, O.toString()), n && n(O)));
        },
        [j],
      );
    var M = (0, f.useCallback)(
        function () {
          o && o();
        },
        [o],
      ),
      R = (0, f.useCallback)(
        function (e) {
          (0, p.default)(!1, e.toString()), a && a(e);
        },
        [a],
      ),
      C = (0, f.useMemo)(
        function () {
          return u.getViewport({ scale: x, rotation: _ });
        },
        [u, _, x],
      );
    return (
      (0, f.useLayoutEffect)(
        function () {
          if (u && j) {
            var e = L.current;
            if (e) {
              e.innerHTML = "";
              var n = u.streamTextContent({ includeMarkedContent: !0 }),
                r = { container: e, textContentSource: n, viewport: C },
                a = new v.TextLayer(r),
                o = a;
              return (
                a
                  .render()
                  .then(function () {
                    var n = document.createElement("div");
                    (n.className = "endOfContent"),
                      e.append(n),
                      (w.current = n);
                    var r = e.querySelectorAll('[role="presentation"]');
                    if (t) {
                      var a = 0;
                      j.items.forEach(function (e, n) {
                        if (
                          (function (e) {
                            return "str" in e;
                          })(e)
                        ) {
                          var o = r[a];
                          if (o) {
                            var u = t(
                              Object.assign(
                                { pageIndex: i, pageNumber: y, itemIndex: n },
                                e,
                              ),
                            );
                            (o.innerHTML = u), (a += e.str && e.hasEOL ? 2 : 1);
                          }
                        }
                      });
                    }
                    M();
                  })
                  .catch(R),
                function () {
                  return (0, g.cancelRunningTask)(o);
                }
              );
            }
          }
        },
        [t, R, M, u, i, y, j, C],
      ),
      (0, c.jsx)("div", {
        className: (0, d.default)("react-pdf__Page__textContent", "textLayer"),
        onMouseUp: function () {
          var e = w.current;
          e && e.classList.remove("active");
        },
        onMouseDown: function () {
          var e = w.current;
          e && e.classList.add("active");
        },
        ref: L,
      })
    );
  };
}); /*!node_modules/react-pdf/dist/cjs/Page/AnnotationLayer.js*/
amis.define("1f03e25", function (e, t, n, a) {
  "use strict";
  var o =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, n, a) {
            void 0 === a && (a = n);
            var o = Object.getOwnPropertyDescriptor(t, n);
            (o &&
              !("get" in o ? !t.__esModule : o.writable || o.configurable)) ||
              (o = {
                enumerable: !0,
                get: function () {
                  return t[n];
                },
              }),
              Object.defineProperty(e, a, o);
          }
        : function (e, t, n, a) {
            void 0 === a && (a = n), (e[a] = t[n]);
          }),
    r =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    i =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e)
            "default" !== n &&
              Object.prototype.hasOwnProperty.call(e, n) &&
              o(t, e, n);
        return r(t, e), t;
      },
    u =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
  Object.defineProperty(t, "__esModule", { value: !0 });
  var f = e("99ef1fd"),
    c = e("8d5e11f"),
    s = u(e("1e34b3c")),
    d = u(e("03a5ee2")),
    l = u(e("b693e5e")),
    p = u(e("0107e85")),
    g = i(e("node_modules/pdfjs-dist/build/pdf.mjs")),
    v = u(e("8d76b27")),
    b = u(e("55322af")),
    m = u(e("26a25b7")),
    y = e("9511831");
  t.default = function () {
    var e = (0, v.default)(),
      t = (0, b.default)();
    (0, l.default)(t, "Unable to find Page context.");
    var n = Object.assign(Object.assign({}, e), t),
      a = n.imageResourcesPath,
      o = n.linkService,
      r = n.onGetAnnotationsError,
      i = n.onGetAnnotationsSuccess,
      u = n.onRenderAnnotationLayerError,
      _ = n.onRenderAnnotationLayerSuccess,
      h = n.page,
      j = n.pdf,
      w = n.renderForms,
      E = n.rotate,
      O = n.scale,
      S = void 0 === O ? 1 : O;
    (0, l.default)(
      j,
      "Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.",
    ),
      (0, l.default)(
        h,
        "Attempted to load page annotations, but no page was specified.",
      ),
      (0, l.default)(
        o,
        "Attempted to load page annotations, but no linkService was specified.",
      );
    var P = (0, m.default)(),
      A = P[0],
      M = P[1],
      R = A.value,
      L = A.error,
      k = (0, c.useRef)(null);
    (0, p.default)(
      1 ===
        parseInt(
          window
            .getComputedStyle(document.body)
            .getPropertyValue("--react-pdf-annotation-layer"),
          10,
        ),
      "AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations",
    ),
      (0, c.useEffect)(
        function () {
          M({ type: "RESET" });
        },
        [M, h],
      ),
      (0, c.useEffect)(
        function () {
          if (h) {
            var e = (0, s.default)(h.getAnnotations()),
              t = e;
            return (
              e.promise
                .then(function (e) {
                  M({ type: "RESOLVE", value: e });
                })
                .catch(function (e) {
                  M({ type: "REJECT", error: e });
                }),
              function () {
                (0, y.cancelRunningTask)(t);
              }
            );
          }
        },
        [M, h, w],
      ),
      (0, c.useEffect)(
        function () {
          void 0 !== R &&
            (!1 !== R
              ? R && i && i(R)
              : L && ((0, p.default)(!1, L.toString()), r && r(L)));
        },
        [R],
      );
    var D = (0, c.useMemo)(
      function () {
        return h.getViewport({ scale: S, rotation: E });
      },
      [h, E, S],
    );
    return (
      (0, c.useEffect)(
        function () {
          if (j && h && o && R) {
            var e = k.current;
            if (e) {
              var t = D.clone({ dontFlip: !0 }),
                n = {
                  accessibilityManager: null,
                  annotationCanvasMap: null,
                  annotationEditorUIManager: null,
                  div: e,
                  l10n: null,
                  page: h,
                  viewport: t,
                },
                r = {
                  annotations: R,
                  annotationStorage: j.annotationStorage,
                  div: e,
                  imageResourcesPath: a,
                  linkService: o,
                  page: h,
                  renderForms: w,
                  viewport: t,
                };
              e.innerHTML = "";
              try {
                new g.AnnotationLayer(n).render(r), _ && _();
              } catch (e) {
                !(function (e) {
                  (0, p.default)(!1, "".concat(e)), u && u(e);
                })(e);
              }
              return function () {};
            }
          }
        },
        [R, a, o, h, w, D],
      ),
      (0, f.jsx)("div", {
        className: (0, d.default)(
          "react-pdf__Page__annotations",
          "annotationLayer",
        ),
        ref: k,
      })
    );
  };
}); /*!node_modules/react-pdf/dist/cjs/Page.js*/
amis.define("8a1c366", function (e, n, r, t) {
  "use strict";
  var o =
      (this && this.__rest) ||
      function (e, n) {
        var r = {};
        for (var t in e)
          Object.prototype.hasOwnProperty.call(e, t) &&
            n.indexOf(t) < 0 &&
            (r[t] = e[t]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (t = Object.getOwnPropertySymbols(e); o < t.length; o++)
            n.indexOf(t[o]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, t[o]) &&
              (r[t[o]] = e[t[o]]);
        }
        return r;
      },
    a =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
  Object.defineProperty(n, "__esModule", { value: !0 });
  var c = e("99ef1fd"),
    s = e("8d5e11f"),
    i = a(e("1e34b3c")),
    u = a(e("f5bc76e")),
    d = a(e("03a5ee2")),
    l = a(e("1213e1c")),
    f = a(e("b693e5e")),
    g = a(e("0107e85")),
    p = a(e("b0489fb")),
    v = a(e("7cbfb43")),
    m = a(e("595c69b")),
    R = a(e("03f09b0")),
    x = a(e("1f03e25")),
    y = e("9511831"),
    b = a(e("8d76b27")),
    E = a(e("26a25b7"));
  n.default = function (e) {
    var n,
      r = (0, b.default)(),
      t = Object.assign(Object.assign({}, r), e),
      a = t._className,
      S = void 0 === a ? "react-pdf__Page" : a,
      h = t._enableRegisterUnregisterPage,
      T = void 0 === h || h,
      P = t.canvasBackground,
      L = t.canvasRef,
      _ = t.children,
      G = t.className,
      j = t.customRenderer,
      A = t.customTextRenderer,
      O = t.devicePixelRatio,
      w = t.error,
      N = void 0 === w ? "Failed to load the page." : w,
      k = t.height,
      M = t.inputRef,
      C = t.loading,
      D = void 0 === C ? "Loading page…" : C,
      F = t.noData,
      I = void 0 === F ? "No page specified." : F,
      B = t.onGetAnnotationsError,
      U = t.onGetAnnotationsSuccess,
      V = t.onGetStructTreeError,
      W = t.onGetStructTreeSuccess,
      H = t.onGetTextError,
      J = t.onGetTextSuccess,
      q = t.onLoadError,
      z = t.onLoadSuccess,
      K = t.onRenderAnnotationLayerError,
      Q = t.onRenderAnnotationLayerSuccess,
      X = t.onRenderError,
      Y = t.onRenderSuccess,
      Z = t.onRenderTextLayerError,
      $ = t.onRenderTextLayerSuccess,
      ee = t.pageIndex,
      ne = t.pageNumber,
      re = t.pdf,
      te = t.registerPage,
      oe = t.renderAnnotationLayer,
      ae = void 0 === oe || oe,
      ce = t.renderForms,
      se = void 0 !== ce && ce,
      ie = t.renderMode,
      ue = void 0 === ie ? "canvas" : ie,
      de = t.renderTextLayer,
      le = void 0 === de || de,
      fe = t.rotate,
      ge = t.scale,
      pe = void 0 === ge ? 1 : ge,
      ve = t.unregisterPage,
      me = t.width,
      Re = o(t, [
        "_className",
        "_enableRegisterUnregisterPage",
        "canvasBackground",
        "canvasRef",
        "children",
        "className",
        "customRenderer",
        "customTextRenderer",
        "devicePixelRatio",
        "error",
        "height",
        "inputRef",
        "loading",
        "noData",
        "onGetAnnotationsError",
        "onGetAnnotationsSuccess",
        "onGetStructTreeError",
        "onGetStructTreeSuccess",
        "onGetTextError",
        "onGetTextSuccess",
        "onLoadError",
        "onLoadSuccess",
        "onRenderAnnotationLayerError",
        "onRenderAnnotationLayerSuccess",
        "onRenderError",
        "onRenderSuccess",
        "onRenderTextLayerError",
        "onRenderTextLayerSuccess",
        "pageIndex",
        "pageNumber",
        "pdf",
        "registerPage",
        "renderAnnotationLayer",
        "renderForms",
        "renderMode",
        "renderTextLayer",
        "rotate",
        "scale",
        "unregisterPage",
        "width",
      ]),
      xe = (0, E.default)(),
      ye = xe[0],
      be = xe[1],
      Ee = ye.value,
      Se = ye.error,
      he = (0, s.useRef)(null);
    (0, f.default)(
      re,
      "Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.",
    );
    var Te = (0, y.isProvided)(ne) ? ne - 1 : null != ee ? ee : null,
      Pe = null != ne ? ne : (0, y.isProvided)(ee) ? ee + 1 : null,
      Le = null != fe ? fe : Ee ? Ee.rotate : null,
      _e = (0, s.useMemo)(
        function () {
          if (!Ee) return null;
          var e = 1,
            n = null != pe ? pe : 1;
          if (me || k) {
            var r = Ee.getViewport({ scale: 1, rotation: Le });
            me ? (e = me / r.width) : k && (e = k / r.height);
          }
          return n * e;
        },
        [k, Ee, Le, pe, me],
      );
    (0, s.useEffect)(
      function () {
        return function () {
          (0, y.isProvided)(Te) && T && ve && ve(Te);
        };
      },
      [T, re, Te, ve],
    ),
      (0, s.useEffect)(
        function () {
          be({ type: "RESET" });
        },
        [be, re, Te],
      ),
      (0, s.useEffect)(
        function () {
          if (re && Pe) {
            var e = (0, i.default)(re.getPage(Pe)),
              n = e;
            return (
              e.promise
                .then(function (e) {
                  be({ type: "RESOLVE", value: e });
                })
                .catch(function (e) {
                  be({ type: "REJECT", error: e });
                }),
              function () {
                return (0, y.cancelRunningTask)(n);
              }
            );
          }
        },
        [be, re, Te, Pe, te],
      ),
      (0, s.useEffect)(
        function () {
          void 0 !== Ee &&
            (!1 !== Ee
              ? (function () {
                  if (z) {
                    if (!Ee || !_e) return;
                    z((0, y.makePageCallback)(Ee, _e));
                  }
                  if (T && te) {
                    if (!(0, y.isProvided)(Te) || !he.current) return;
                    te(Te, he.current);
                  }
                })()
              : Se && ((0, g.default)(!1, Se.toString()), q && q(Se)));
        },
        [Ee, _e],
      );
    var Ge = (0, s.useMemo)(
        function () {
          return Ee &&
            (0, y.isProvided)(Te) &&
            Pe &&
            (0, y.isProvided)(Le) &&
            (0, y.isProvided)(_e)
            ? {
                _className: S,
                canvasBackground: P,
                customTextRenderer: A,
                devicePixelRatio: O,
                onGetAnnotationsError: B,
                onGetAnnotationsSuccess: U,
                onGetStructTreeError: V,
                onGetStructTreeSuccess: W,
                onGetTextError: H,
                onGetTextSuccess: J,
                onRenderAnnotationLayerError: K,
                onRenderAnnotationLayerSuccess: Q,
                onRenderError: X,
                onRenderSuccess: Y,
                onRenderTextLayerError: Z,
                onRenderTextLayerSuccess: $,
                page: Ee,
                pageIndex: Te,
                pageNumber: Pe,
                renderForms: se,
                renderTextLayer: le,
                rotate: Le,
                scale: _e,
              }
            : null;
        },
        [
          S,
          P,
          A,
          O,
          B,
          U,
          V,
          W,
          H,
          J,
          K,
          Q,
          X,
          Y,
          Z,
          $,
          Ee,
          Te,
          Pe,
          se,
          le,
          Le,
          _e,
        ],
      ),
      je = (0, s.useMemo)(
        function () {
          return (0, u.default)(Re, function () {
            return Ee ? (_e ? (0, y.makePageCallback)(Ee, _e) : void 0) : Ee;
          });
        },
        [Re, Ee, _e],
      ),
      Ae = "".concat(Te, "@").concat(_e, "/").concat(Le);
    function Oe() {
      switch (ue) {
        case "custom":
          return (
            (0, f.default)(
              j,
              'renderMode was set to "custom", but no customRenderer was passed.',
            ),
            (0, c.jsx)(j, {}, "".concat(Ae, "_custom"))
          );
        case "none":
          return null;
        default:
          return (0, c.jsx)(
            m.default,
            { canvasRef: L },
            "".concat(Ae, "_canvas"),
          );
      }
    }
    return (0, c.jsx)(
      "div",
      Object.assign(
        {
          className: (0, d.default)(S, G),
          "data-page-number": Pe,
          ref: (0, l.default)(M, he),
          style:
            ((n = {}),
            (n["--scale-factor"] = "".concat(_e)),
            (n.backgroundColor = P || "white"),
            (n.position = "relative"),
            (n.minWidth = "min-content"),
            (n.minHeight = "min-content"),
            n),
        },
        je,
        {
          children: Pe
            ? null === re || null == Ee
              ? (0, c.jsx)(v.default, {
                  type: "loading",
                  children: "function" == typeof D ? D() : D,
                })
              : !1 === re || !1 === Ee
                ? (0, c.jsx)(v.default, {
                    type: "error",
                    children: "function" == typeof N ? N() : N,
                  })
                : (0, c.jsxs)(p.default.Provider, {
                    value: Ge,
                    children: [
                      Oe(),
                      le
                        ? (0, c.jsx)(R.default, {}, "".concat(Ae, "_text"))
                        : null,
                      ae
                        ? (0, c.jsx)(
                            x.default,
                            {},
                            "".concat(Ae, "_annotations"),
                          )
                        : null,
                      _,
                    ],
                  })
            : (0, c.jsx)(v.default, {
                type: "no-data",
                children: "function" == typeof I ? I() : I,
              }),
        },
      ),
    );
  };
}); /*!node_modules/react-pdf/dist/cjs/Thumbnail.js*/
amis.define("70026f4", function (e, t, a, n) {
  "use strict";
  var r =
      (this && this.__rest) ||
      function (e, t) {
        var a = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (a[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var r = 0;
          for (n = Object.getOwnPropertySymbols(e); r < n.length; r++)
            t.indexOf(n[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[r]) &&
              (a[n[r]] = e[n[r]]);
        }
        return a;
      },
    i =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
  Object.defineProperty(t, "__esModule", { value: !0 });
  var l = e("99ef1fd"),
    o = i(e("03a5ee2")),
    s = i(e("b693e5e")),
    c = i(e("8a1c366")),
    u = e("9511831"),
    d = i(e("8d76b27"));
  t.default = function (e) {
    var t = (0, d.default)(),
      a = Object.assign(Object.assign({}, t), e),
      n = a.className,
      i = a.linkService,
      f = a.onItemClick,
      p = a.pageIndex,
      m = a.pageNumber,
      b = a.pdf;
    (0, s.default)(
      b,
      "Attempted to load a thumbnail, but no document was specified. Wrap <Thumbnail /> in a <Document /> or pass explicit `pdf` prop.",
    );
    var g = (0, u.isProvided)(m) ? m - 1 : null != p ? p : null,
      v = null != m ? m : (0, u.isProvided)(p) ? p + 1 : null;
    e.className, e.onItemClick;
    var _ = r(e, ["className", "onItemClick"]);
    return (0, l.jsx)("a", {
      className: (0, o.default)("react-pdf__Thumbnail", n),
      href: v ? "#" : void 0,
      onClick: function (e) {
        e.preventDefault(),
          (0, u.isProvided)(g) &&
            v &&
            ((0, s.default)(
              f || i,
              "Either onItemClick callback or linkService must be defined in order to navigate to an outline item.",
            ),
            f ? f({ pageIndex: g, pageNumber: v }) : i && i.goToPage(v));
      },
      children: (0, l.jsx)(
        c.default,
        Object.assign({}, _, {
          _className: "react-pdf__Thumbnail__page",
          _enableRegisterUnregisterPage: !1,
          renderAnnotationLayer: !1,
          renderTextLayer: !1,
        }),
      ),
    });
  };
}); /*!node_modules/react-pdf/dist/cjs/index.js*/
amis.define("9ff9a40", function (e, t, r, n) {
  "use strict";
  var u =
      (this && this.__createBinding) ||
      (Object.create
        ? function (e, t, r, n) {
            void 0 === n && (n = r);
            var u = Object.getOwnPropertyDescriptor(t, r);
            (u &&
              !("get" in u ? !t.__esModule : u.writable || u.configurable)) ||
              (u = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              }),
              Object.defineProperty(e, n, u);
          }
        : function (e, t, r, n) {
            void 0 === n && (n = r), (e[n] = t[r]);
          }),
    a =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          }),
    o =
      (this && this.__importStar) ||
      function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e)
            "default" !== r &&
              Object.prototype.hasOwnProperty.call(e, r) &&
              u(t, e, r);
        return a(t, e), t;
      },
    i =
      (this && this.__importDefault) ||
      function (e) {
        return e && e.__esModule ? e : { default: e };
      };
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.PasswordResponses =
      t.usePageContext =
      t.useOutlineContext =
      t.useDocumentContext =
      t.Thumbnail =
      t.Page =
      t.Outline =
      t.Document =
      t.pdfjs =
        void 0);
  var s = o(e("node_modules/pdfjs-dist/build/pdf.mjs"));
  t.pdfjs = s;
  var d = i(e("8499356"));
  t.Document = d.default;
  var f = i(e("c65cc32"));
  t.Outline = f.default;
  var l = i(e("8a1c366"));
  t.Page = l.default;
  var c = i(e("70026f4"));
  t.Thumbnail = c.default;
  var p = i(e("8d76b27"));
  t.useDocumentContext = p.default;
  var v = i(e("d46ecfd"));
  t.useOutlineContext = v.default;
  var _ = i(e("55322af"));
  t.usePageContext = _.default;
  var b = i(e("c1386d6"));
  (t.PasswordResponses = b.default),
    (0, e("9511831").displayWorkerWarning)(),
    (s.GlobalWorkerOptions.workerSrc = "pdf.worker.mjs");
}); /*!node_modules/amis-ui/lib/components/PdfViewer.js*/
amis.define("b73bbf4", function (e, a, n, t) {
  "use strict";
  Object.defineProperty(a, "__esModule", { value: !0 });
  var o = e("9914776"),
    r = e("8d5e11f"),
    u = e("3287272"),
    l = e("9ff9a40"),
    i = e("a36ce1d"),
    c = e("6061532"),
    f = e("11d984c");
  function d(e) {
    return e && "object" == typeof e && "default" in e ? e : { default: e };
  }
  var s = d(r),
    m = e("8d5e11f"),
    v = (m.default || m).createElement;
  (m.default || m).Fragment;
  var g = u.themeable(function (e) {
    var a = e.pdfjsWorkerSrc,
      n = e.classnames,
      t = e.className,
      r = e.loading,
      u = e.width,
      d = void 0 === u ? 300 : u,
      m = o.__read(s.default.useState(e.file), 2),
      g = m[0],
      N = m[1],
      p = o.__read(s.default.useState(!1), 2),
      _ = p[0],
      P = p[1],
      b = o.__read(s.default.useState(1), 2),
      S = b[0],
      h = b[1],
      k = o.__read(s.default.useState(1), 2),
      w = k[0],
      y = k[1],
      C = o.__read(s.default.useState(1), 2),
      L = C[0],
      j = C[1],
      V = s.default.useRef();
    function E(e) {
      var a = S + e;
      a <= 0 || a > L || h(a);
    }
    function I(e) {
      var a = +e.target.value;
      isNaN(a) || a <= 0 || a > L
        ? V.current && (V.current.value = S + "")
        : h(a);
    }
    function D(e) {
      y(w * e);
    }
    function F() {
      return v(
        "div",
        { className: n("PdfViewer-Loading") },
        v(f.default, null),
      );
    }
    return (
      s.default.useEffect(
        function () {
          a && (l.pdfjs.GlobalWorkerOptions.workerSrc = a);
        },
        [e.pdfjsWorkerSrc],
      ),
      s.default.useEffect(
        function () {
          e.file instanceof ArrayBuffer && e.file.byteLength > 0
            ? N(e.file)
            : N(void 0);
        },
        [e.file],
      ),
      v(
        "div",
        { className: n(t, "PdfViewer") },
        !g || r
          ? F()
          : v(
              s.default.Fragment,
              null,
              v(
                "div",
                { className: n("PdfViewer-Content", { "is-loaded": _ }) },
                v(
                  l.Document,
                  {
                    file: g,
                    onLoadSuccess: function (e) {
                      var a = e.numPages;
                      P(!0), j(a);
                    },
                    onLoadError: function (e) {
                      return console.log(e);
                    },
                    loading: F(),
                  },
                  v(l.Page, {
                    className: n("PdfViewer-Content-Page"),
                    pageNumber: S,
                    width: d,
                    height: e.height,
                    loading: F(),
                    noData: v("div", null, "No PDF data"),
                    scale: w,
                    renderTextLayer: !1,
                    renderAnnotationLayer: !1,
                  }),
                ),
              ),
              _
                ? v(
                    "div",
                    { className: n("PdfViewer-Tool") },
                    v(i.Icon, {
                      className: "icon",
                      icon: "prev",
                      onClick: function () {
                        return E(-1);
                      },
                    }),
                    v(c.default, {
                      className: "page-input",
                      value: S,
                      onBlur: I,
                      ref: V,
                    }),
                    v("span", { className: "gap" }, "/"),
                    v("span", null, L),
                    v(i.Icon, {
                      className: "icon",
                      icon: "next",
                      onClick: function () {
                        return E(1);
                      },
                    }),
                    v(i.Icon, {
                      className: "icon",
                      icon: "zoom-in",
                      onClick: function () {
                        return D(1.2);
                      },
                    }),
                    v(i.Icon, {
                      className: "icon",
                      icon: "zoom-out",
                      onClick: function () {
                        return D(0.8);
                      },
                    }),
                  )
                : null,
            ),
      )
    );
  });
  a.default = g;
});
