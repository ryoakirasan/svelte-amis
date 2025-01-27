/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-json version: 0.30.1(5a7ba61be909ae9e4889768a3453ebb0dec392e2)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-json/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define(
  "vs/language/json/workerManager",
  ["require", "exports", "./fillers/monaco-editor-core"],
  function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.WorkerManager = void 0);
    var r = (function () {
      function e(e) {
        var t = this;
        (this._defaults = e),
          (this._worker = null),
          (this._idleCheckInterval = window.setInterval(function () {
            return t._checkIfIdle();
          }, 3e4)),
          (this._lastUsedTime = 0),
          (this._configChangeListener = this._defaults.onDidChange(function () {
            return t._stopWorker();
          }));
      }
      return (
        (e.prototype._stopWorker = function () {
          this._worker && (this._worker.dispose(), (this._worker = null)),
            (this._client = null);
        }),
        (e.prototype.dispose = function () {
          clearInterval(this._idleCheckInterval),
            this._configChangeListener.dispose(),
            this._stopWorker();
        }),
        (e.prototype._checkIfIdle = function () {
          this._worker &&
            Date.now() - this._lastUsedTime > 12e4 &&
            this._stopWorker();
        }),
        (e.prototype._getClient = function () {
          return (
            (this._lastUsedTime = Date.now()),
            this._client ||
              ((this._worker = n.editor.createWebWorker({
                moduleId: "vs/language/json/jsonWorker",
                label: this._defaults.languageId,
                createData: {
                  languageSettings: this._defaults.diagnosticsOptions,
                  languageId: this._defaults.languageId,
                  enableSchemaRequest:
                    this._defaults.diagnosticsOptions.enableSchemaRequest,
                },
              })),
              (this._client = this._worker.getProxy())),
            this._client
          );
        }),
        (e.prototype.getLanguageServiceWorker = function () {
          for (var e, t = this, n = [], r = 0; r < arguments.length; r++)
            n[r] = arguments[r];
          return this._getClient()
            .then(function (t) {
              e = t;
            })
            .then(function (e) {
              return t._worker.withSyncedResources(n);
            })
            .then(function (t) {
              return e;
            });
        }),
        e
      );
    })();
    t.WorkerManager = r;
  },
),
  (function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("vscode-languageserver-types/main", ["require", "exports"], e);
  })(function (e, t) {
    "use strict";
    var n, r, i, o, a, s, c, u, d, f, l, g, h, p, m, v, y;
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.TextDocument =
        t.EOL =
        t.SelectionRange =
        t.DocumentLink =
        t.FormattingOptions =
        t.CodeLens =
        t.CodeAction =
        t.CodeActionContext =
        t.CodeActionKind =
        t.DocumentSymbol =
        t.SymbolInformation =
        t.SymbolTag =
        t.SymbolKind =
        t.DocumentHighlight =
        t.DocumentHighlightKind =
        t.SignatureInformation =
        t.ParameterInformation =
        t.Hover =
        t.MarkedString =
        t.CompletionList =
        t.CompletionItem =
        t.InsertTextMode =
        t.InsertReplaceEdit =
        t.CompletionItemTag =
        t.InsertTextFormat =
        t.CompletionItemKind =
        t.MarkupContent =
        t.MarkupKind =
        t.TextDocumentItem =
        t.OptionalVersionedTextDocumentIdentifier =
        t.VersionedTextDocumentIdentifier =
        t.TextDocumentIdentifier =
        t.WorkspaceChange =
        t.WorkspaceEdit =
        t.DeleteFile =
        t.RenameFile =
        t.CreateFile =
        t.TextDocumentEdit =
        t.AnnotatedTextEdit =
        t.ChangeAnnotationIdentifier =
        t.ChangeAnnotation =
        t.TextEdit =
        t.Command =
        t.Diagnostic =
        t.CodeDescription =
        t.DiagnosticTag =
        t.DiagnosticSeverity =
        t.DiagnosticRelatedInformation =
        t.FoldingRange =
        t.FoldingRangeKind =
        t.ColorPresentation =
        t.ColorInformation =
        t.Color =
        t.LocationLink =
        t.Location =
        t.Range =
        t.Position =
        t.uinteger =
        t.integer =
          void 0),
      (function (e) {
        (e.MIN_VALUE = -2147483648), (e.MAX_VALUE = 2147483647);
      })(t.integer || (t.integer = {})),
      (function (e) {
        (e.MIN_VALUE = 0), (e.MAX_VALUE = 2147483647);
      })((n = t.uinteger || (t.uinteger = {}))),
      (function (e) {
        (e.create = function (e, t) {
          return (
            e === Number.MAX_VALUE && (e = n.MAX_VALUE),
            t === Number.MAX_VALUE && (t = n.MAX_VALUE),
            { line: e, character: t }
          );
        }),
          (e.is = function (e) {
            var t = e;
            return (
              I.objectLiteral(t) &&
              I.uinteger(t.line) &&
              I.uinteger(t.character)
            );
          });
      })((r = t.Position || (t.Position = {}))),
      (function (e) {
        (e.create = function (e, t, n, i) {
          if (I.uinteger(e) && I.uinteger(t) && I.uinteger(n) && I.uinteger(i))
            return { start: r.create(e, t), end: r.create(n, i) };
          if (r.is(e) && r.is(t)) return { start: e, end: t };
          throw new Error(
            "Range#create called with invalid arguments[" +
              e +
              ", " +
              t +
              ", " +
              n +
              ", " +
              i +
              "]",
          );
        }),
          (e.is = function (e) {
            var t = e;
            return I.objectLiteral(t) && r.is(t.start) && r.is(t.end);
          });
      })((i = t.Range || (t.Range = {}))),
      (function (e) {
        (e.create = function (e, t) {
          return { uri: e, range: t };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              I.defined(t) &&
              i.is(t.range) &&
              (I.string(t.uri) || I.undefined(t.uri))
            );
          });
      })((o = t.Location || (t.Location = {}))),
      (function (e) {
        (e.create = function (e, t, n, r) {
          return {
            targetUri: e,
            targetRange: t,
            targetSelectionRange: n,
            originSelectionRange: r,
          };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              I.defined(t) &&
              i.is(t.targetRange) &&
              I.string(t.targetUri) &&
              (i.is(t.targetSelectionRange) ||
                I.undefined(t.targetSelectionRange)) &&
              (i.is(t.originSelectionRange) ||
                I.undefined(t.originSelectionRange))
            );
          });
      })(t.LocationLink || (t.LocationLink = {})),
      (function (e) {
        (e.create = function (e, t, n, r) {
          return { red: e, green: t, blue: n, alpha: r };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              I.numberRange(t.red, 0, 1) &&
              I.numberRange(t.green, 0, 1) &&
              I.numberRange(t.blue, 0, 1) &&
              I.numberRange(t.alpha, 0, 1)
            );
          });
      })((a = t.Color || (t.Color = {}))),
      (function (e) {
        (e.create = function (e, t) {
          return { range: e, color: t };
        }),
          (e.is = function (e) {
            var t = e;
            return i.is(t.range) && a.is(t.color);
          });
      })(t.ColorInformation || (t.ColorInformation = {})),
      (function (e) {
        (e.create = function (e, t, n) {
          return { label: e, textEdit: t, additionalTextEdits: n };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              I.string(t.label) &&
              (I.undefined(t.textEdit) || d.is(t)) &&
              (I.undefined(t.additionalTextEdits) ||
                I.typedArray(t.additionalTextEdits, d.is))
            );
          });
      })(t.ColorPresentation || (t.ColorPresentation = {})),
      (function (e) {
        (e.Comment = "comment"), (e.Imports = "imports"), (e.Region = "region");
      })(t.FoldingRangeKind || (t.FoldingRangeKind = {})),
      (function (e) {
        (e.create = function (e, t, n, r, i) {
          var o = { startLine: e, endLine: t };
          return (
            I.defined(n) && (o.startCharacter = n),
            I.defined(r) && (o.endCharacter = r),
            I.defined(i) && (o.kind = i),
            o
          );
        }),
          (e.is = function (e) {
            var t = e;
            return (
              I.uinteger(t.startLine) &&
              I.uinteger(t.startLine) &&
              (I.undefined(t.startCharacter) || I.uinteger(t.startCharacter)) &&
              (I.undefined(t.endCharacter) || I.uinteger(t.endCharacter)) &&
              (I.undefined(t.kind) || I.string(t.kind))
            );
          });
      })(t.FoldingRange || (t.FoldingRange = {})),
      (function (e) {
        (e.create = function (e, t) {
          return { location: e, message: t };
        }),
          (e.is = function (e) {
            var t = e;
            return I.defined(t) && o.is(t.location) && I.string(t.message);
          });
      })(
        (s =
          t.DiagnosticRelatedInformation ||
          (t.DiagnosticRelatedInformation = {})),
      ),
      (function (e) {
        (e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4);
      })(t.DiagnosticSeverity || (t.DiagnosticSeverity = {})),
      (function (e) {
        (e.Unnecessary = 1), (e.Deprecated = 2);
      })(t.DiagnosticTag || (t.DiagnosticTag = {})),
      (function (e) {
        e.is = function (e) {
          var t = e;
          return null != t && I.string(t.href);
        };
      })(t.CodeDescription || (t.CodeDescription = {})),
      (function (e) {
        (e.create = function (e, t, n, r, i, o) {
          var a = { range: e, message: t };
          return (
            I.defined(n) && (a.severity = n),
            I.defined(r) && (a.code = r),
            I.defined(i) && (a.source = i),
            I.defined(o) && (a.relatedInformation = o),
            a
          );
        }),
          (e.is = function (e) {
            var t,
              n = e;
            return (
              I.defined(n) &&
              i.is(n.range) &&
              I.string(n.message) &&
              (I.number(n.severity) || I.undefined(n.severity)) &&
              (I.integer(n.code) || I.string(n.code) || I.undefined(n.code)) &&
              (I.undefined(n.codeDescription) ||
                I.string(
                  null === (t = n.codeDescription) || void 0 === t
                    ? void 0
                    : t.href,
                )) &&
              (I.string(n.source) || I.undefined(n.source)) &&
              (I.undefined(n.relatedInformation) ||
                I.typedArray(n.relatedInformation, s.is))
            );
          });
      })((c = t.Diagnostic || (t.Diagnostic = {}))),
      (function (e) {
        (e.create = function (e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          var i = { title: e, command: t };
          return I.defined(n) && n.length > 0 && (i.arguments = n), i;
        }),
          (e.is = function (e) {
            var t = e;
            return I.defined(t) && I.string(t.title) && I.string(t.command);
          });
      })((u = t.Command || (t.Command = {}))),
      (function (e) {
        (e.replace = function (e, t) {
          return { range: e, newText: t };
        }),
          (e.insert = function (e, t) {
            return { range: { start: e, end: e }, newText: t };
          }),
          (e.del = function (e) {
            return { range: e, newText: "" };
          }),
          (e.is = function (e) {
            var t = e;
            return I.objectLiteral(t) && I.string(t.newText) && i.is(t.range);
          });
      })((d = t.TextEdit || (t.TextEdit = {}))),
      (function (e) {
        (e.create = function (e, t, n) {
          var r = { label: e };
          return (
            void 0 !== t && (r.needsConfirmation = t),
            void 0 !== n && (r.description = n),
            r
          );
        }),
          (e.is = function (e) {
            var t = e;
            return (
              void 0 !== t &&
              I.objectLiteral(t) &&
              I.string(t.label) &&
              (I.boolean(t.needsConfirmation) ||
                void 0 === t.needsConfirmation) &&
              (I.string(t.description) || void 0 === t.description)
            );
          });
      })((f = t.ChangeAnnotation || (t.ChangeAnnotation = {}))),
      (function (e) {
        e.is = function (e) {
          return "string" == typeof e;
        };
      })(
        (l =
          t.ChangeAnnotationIdentifier || (t.ChangeAnnotationIdentifier = {})),
      ),
      (function (e) {
        (e.replace = function (e, t, n) {
          return { range: e, newText: t, annotationId: n };
        }),
          (e.insert = function (e, t, n) {
            return { range: { start: e, end: e }, newText: t, annotationId: n };
          }),
          (e.del = function (e, t) {
            return { range: e, newText: "", annotationId: t };
          }),
          (e.is = function (e) {
            var t = e;
            return d.is(t) && (f.is(t.annotationId) || l.is(t.annotationId));
          });
      })((g = t.AnnotatedTextEdit || (t.AnnotatedTextEdit = {}))),
      (function (e) {
        (e.create = function (e, t) {
          return { textDocument: e, edits: t };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              I.defined(t) && b.is(t.textDocument) && Array.isArray(t.edits)
            );
          });
      })((h = t.TextDocumentEdit || (t.TextDocumentEdit = {}))),
      (function (e) {
        (e.create = function (e, t, n) {
          var r = { kind: "create", uri: e };
          return (
            void 0 === t ||
              (void 0 === t.overwrite && void 0 === t.ignoreIfExists) ||
              (r.options = t),
            void 0 !== n && (r.annotationId = n),
            r
          );
        }),
          (e.is = function (e) {
            var t = e;
            return (
              t &&
              "create" === t.kind &&
              I.string(t.uri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.overwrite ||
                  I.boolean(t.options.overwrite)) &&
                  (void 0 === t.options.ignoreIfExists ||
                    I.boolean(t.options.ignoreIfExists)))) &&
              (void 0 === t.annotationId || l.is(t.annotationId))
            );
          });
      })((p = t.CreateFile || (t.CreateFile = {}))),
      (function (e) {
        (e.create = function (e, t, n, r) {
          var i = { kind: "rename", oldUri: e, newUri: t };
          return (
            void 0 === n ||
              (void 0 === n.overwrite && void 0 === n.ignoreIfExists) ||
              (i.options = n),
            void 0 !== r && (i.annotationId = r),
            i
          );
        }),
          (e.is = function (e) {
            var t = e;
            return (
              t &&
              "rename" === t.kind &&
              I.string(t.oldUri) &&
              I.string(t.newUri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.overwrite ||
                  I.boolean(t.options.overwrite)) &&
                  (void 0 === t.options.ignoreIfExists ||
                    I.boolean(t.options.ignoreIfExists)))) &&
              (void 0 === t.annotationId || l.is(t.annotationId))
            );
          });
      })((m = t.RenameFile || (t.RenameFile = {}))),
      (function (e) {
        (e.create = function (e, t, n) {
          var r = { kind: "delete", uri: e };
          return (
            void 0 === t ||
              (void 0 === t.recursive && void 0 === t.ignoreIfNotExists) ||
              (r.options = t),
            void 0 !== n && (r.annotationId = n),
            r
          );
        }),
          (e.is = function (e) {
            var t = e;
            return (
              t &&
              "delete" === t.kind &&
              I.string(t.uri) &&
              (void 0 === t.options ||
                ((void 0 === t.options.recursive ||
                  I.boolean(t.options.recursive)) &&
                  (void 0 === t.options.ignoreIfNotExists ||
                    I.boolean(t.options.ignoreIfNotExists)))) &&
              (void 0 === t.annotationId || l.is(t.annotationId))
            );
          });
      })((v = t.DeleteFile || (t.DeleteFile = {}))),
      (function (e) {
        e.is = function (e) {
          var t = e;
          return (
            t &&
            (void 0 !== t.changes || void 0 !== t.documentChanges) &&
            (void 0 === t.documentChanges ||
              t.documentChanges.every(function (e) {
                return I.string(e.kind)
                  ? p.is(e) || m.is(e) || v.is(e)
                  : h.is(e);
              }))
          );
        };
      })((y = t.WorkspaceEdit || (t.WorkspaceEdit = {})));
    var b,
      C,
      E,
      k,
      _ = (function () {
        function e(e, t) {
          (this.edits = e), (this.changeAnnotations = t);
        }
        return (
          (e.prototype.insert = function (e, t, n) {
            var r, i;
            if (
              (void 0 === n
                ? (r = d.insert(e, t))
                : l.is(n)
                  ? ((i = n), (r = g.insert(e, t, n)))
                  : (this.assertChangeAnnotations(this.changeAnnotations),
                    (i = this.changeAnnotations.manage(n)),
                    (r = g.insert(e, t, i))),
              this.edits.push(r),
              void 0 !== i)
            )
              return i;
          }),
          (e.prototype.replace = function (e, t, n) {
            var r, i;
            if (
              (void 0 === n
                ? (r = d.replace(e, t))
                : l.is(n)
                  ? ((i = n), (r = g.replace(e, t, n)))
                  : (this.assertChangeAnnotations(this.changeAnnotations),
                    (i = this.changeAnnotations.manage(n)),
                    (r = g.replace(e, t, i))),
              this.edits.push(r),
              void 0 !== i)
            )
              return i;
          }),
          (e.prototype.delete = function (e, t) {
            var n, r;
            if (
              (void 0 === t
                ? (n = d.del(e))
                : l.is(t)
                  ? ((r = t), (n = g.del(e, t)))
                  : (this.assertChangeAnnotations(this.changeAnnotations),
                    (r = this.changeAnnotations.manage(t)),
                    (n = g.del(e, r))),
              this.edits.push(n),
              void 0 !== r)
            )
              return r;
          }),
          (e.prototype.add = function (e) {
            this.edits.push(e);
          }),
          (e.prototype.all = function () {
            return this.edits;
          }),
          (e.prototype.clear = function () {
            this.edits.splice(0, this.edits.length);
          }),
          (e.prototype.assertChangeAnnotations = function (e) {
            if (void 0 === e)
              throw new Error(
                "Text edit change is not configured to manage change annotations.",
              );
          }),
          e
        );
      })(),
      A = (function () {
        function e(e) {
          (this._annotations = void 0 === e ? Object.create(null) : e),
            (this._counter = 0),
            (this._size = 0);
        }
        return (
          (e.prototype.all = function () {
            return this._annotations;
          }),
          Object.defineProperty(e.prototype, "size", {
            get: function () {
              return this._size;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.manage = function (e, t) {
            var n;
            if (
              (l.is(e) ? (n = e) : ((n = this.nextId()), (t = e)),
              void 0 !== this._annotations[n])
            )
              throw new Error("Id " + n + " is already in use.");
            if (void 0 === t)
              throw new Error("No annotation provided for id " + n);
            return (this._annotations[n] = t), this._size++, n;
          }),
          (e.prototype.nextId = function () {
            return this._counter++, this._counter.toString();
          }),
          e
        );
      })(),
      T = (function () {
        function e(e) {
          var t = this;
          (this._textEditChanges = Object.create(null)),
            void 0 !== e
              ? ((this._workspaceEdit = e),
                e.documentChanges
                  ? ((this._changeAnnotations = new A(e.changeAnnotations)),
                    (e.changeAnnotations = this._changeAnnotations.all()),
                    e.documentChanges.forEach(function (e) {
                      if (h.is(e)) {
                        var n = new _(e.edits, t._changeAnnotations);
                        t._textEditChanges[e.textDocument.uri] = n;
                      }
                    }))
                  : e.changes &&
                    Object.keys(e.changes).forEach(function (n) {
                      var r = new _(e.changes[n]);
                      t._textEditChanges[n] = r;
                    }))
              : (this._workspaceEdit = {});
        }
        return (
          Object.defineProperty(e.prototype, "edit", {
            get: function () {
              return (
                this.initDocumentChanges(),
                void 0 !== this._changeAnnotations &&
                  (0 === this._changeAnnotations.size
                    ? (this._workspaceEdit.changeAnnotations = void 0)
                    : (this._workspaceEdit.changeAnnotations =
                        this._changeAnnotations.all())),
                this._workspaceEdit
              );
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.getTextEditChange = function (e) {
            if (b.is(e)) {
              if (
                (this.initDocumentChanges(),
                void 0 === this._workspaceEdit.documentChanges)
              )
                throw new Error(
                  "Workspace edit is not configured for document changes.",
                );
              var t = { uri: e.uri, version: e.version };
              if (!(r = this._textEditChanges[t.uri])) {
                var n = { textDocument: t, edits: (i = []) };
                this._workspaceEdit.documentChanges.push(n),
                  (r = new _(i, this._changeAnnotations)),
                  (this._textEditChanges[t.uri] = r);
              }
              return r;
            }
            if ((this.initChanges(), void 0 === this._workspaceEdit.changes))
              throw new Error(
                "Workspace edit is not configured for normal text edit changes.",
              );
            var r;
            if (!(r = this._textEditChanges[e])) {
              var i = [];
              (this._workspaceEdit.changes[e] = i),
                (r = new _(i)),
                (this._textEditChanges[e] = r);
            }
            return r;
          }),
          (e.prototype.initDocumentChanges = function () {
            void 0 === this._workspaceEdit.documentChanges &&
              void 0 === this._workspaceEdit.changes &&
              ((this._changeAnnotations = new A()),
              (this._workspaceEdit.documentChanges = []),
              (this._workspaceEdit.changeAnnotations =
                this._changeAnnotations.all()));
          }),
          (e.prototype.initChanges = function () {
            void 0 === this._workspaceEdit.documentChanges &&
              void 0 === this._workspaceEdit.changes &&
              (this._workspaceEdit.changes = Object.create(null));
          }),
          (e.prototype.createFile = function (e, t, n) {
            if (
              (this.initDocumentChanges(),
              void 0 === this._workspaceEdit.documentChanges)
            )
              throw new Error(
                "Workspace edit is not configured for document changes.",
              );
            var r, i, o;
            if (
              (f.is(t) || l.is(t) ? (r = t) : (n = t),
              void 0 === r
                ? (i = p.create(e, n))
                : ((o = l.is(r) ? r : this._changeAnnotations.manage(r)),
                  (i = p.create(e, n, o))),
              this._workspaceEdit.documentChanges.push(i),
              void 0 !== o)
            )
              return o;
          }),
          (e.prototype.renameFile = function (e, t, n, r) {
            if (
              (this.initDocumentChanges(),
              void 0 === this._workspaceEdit.documentChanges)
            )
              throw new Error(
                "Workspace edit is not configured for document changes.",
              );
            var i, o, a;
            if (
              (f.is(n) || l.is(n) ? (i = n) : (r = n),
              void 0 === i
                ? (o = m.create(e, t, r))
                : ((a = l.is(i) ? i : this._changeAnnotations.manage(i)),
                  (o = m.create(e, t, r, a))),
              this._workspaceEdit.documentChanges.push(o),
              void 0 !== a)
            )
              return a;
          }),
          (e.prototype.deleteFile = function (e, t, n) {
            if (
              (this.initDocumentChanges(),
              void 0 === this._workspaceEdit.documentChanges)
            )
              throw new Error(
                "Workspace edit is not configured for document changes.",
              );
            var r, i, o;
            if (
              (f.is(t) || l.is(t) ? (r = t) : (n = t),
              void 0 === r
                ? (i = v.create(e, n))
                : ((o = l.is(r) ? r : this._changeAnnotations.manage(r)),
                  (i = v.create(e, n, o))),
              this._workspaceEdit.documentChanges.push(i),
              void 0 !== o)
            )
              return o;
          }),
          e
        );
      })();
    (t.WorkspaceChange = T),
      (function (e) {
        (e.create = function (e) {
          return { uri: e };
        }),
          (e.is = function (e) {
            var t = e;
            return I.defined(t) && I.string(t.uri);
          });
      })(t.TextDocumentIdentifier || (t.TextDocumentIdentifier = {})),
      (function (e) {
        (e.create = function (e, t) {
          return { uri: e, version: t };
        }),
          (e.is = function (e) {
            var t = e;
            return I.defined(t) && I.string(t.uri) && I.integer(t.version);
          });
      })(
        t.VersionedTextDocumentIdentifier ||
          (t.VersionedTextDocumentIdentifier = {}),
      ),
      (function (e) {
        (e.create = function (e, t) {
          return { uri: e, version: t };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              I.defined(t) &&
              I.string(t.uri) &&
              (null === t.version || I.integer(t.version))
            );
          });
      })(
        (b =
          t.OptionalVersionedTextDocumentIdentifier ||
          (t.OptionalVersionedTextDocumentIdentifier = {})),
      ),
      (function (e) {
        (e.create = function (e, t, n, r) {
          return { uri: e, languageId: t, version: n, text: r };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              I.defined(t) &&
              I.string(t.uri) &&
              I.string(t.languageId) &&
              I.integer(t.version) &&
              I.string(t.text)
            );
          });
      })(t.TextDocumentItem || (t.TextDocumentItem = {})),
      (function (e) {
        (e.PlainText = "plaintext"), (e.Markdown = "markdown");
      })((C = t.MarkupKind || (t.MarkupKind = {}))),
      (function (e) {
        e.is = function (t) {
          var n = t;
          return n === e.PlainText || n === e.Markdown;
        };
      })((C = t.MarkupKind || (t.MarkupKind = {}))),
      (function (e) {
        e.is = function (e) {
          var t = e;
          return I.objectLiteral(e) && C.is(t.kind) && I.string(t.value);
        };
      })((E = t.MarkupContent || (t.MarkupContent = {}))),
      (function (e) {
        (e.Text = 1),
          (e.Method = 2),
          (e.Function = 3),
          (e.Constructor = 4),
          (e.Field = 5),
          (e.Variable = 6),
          (e.Class = 7),
          (e.Interface = 8),
          (e.Module = 9),
          (e.Property = 10),
          (e.Unit = 11),
          (e.Value = 12),
          (e.Enum = 13),
          (e.Keyword = 14),
          (e.Snippet = 15),
          (e.Color = 16),
          (e.File = 17),
          (e.Reference = 18),
          (e.Folder = 19),
          (e.EnumMember = 20),
          (e.Constant = 21),
          (e.Struct = 22),
          (e.Event = 23),
          (e.Operator = 24),
          (e.TypeParameter = 25);
      })(t.CompletionItemKind || (t.CompletionItemKind = {})),
      (function (e) {
        (e.PlainText = 1), (e.Snippet = 2);
      })(t.InsertTextFormat || (t.InsertTextFormat = {})),
      (function (e) {
        e.Deprecated = 1;
      })(t.CompletionItemTag || (t.CompletionItemTag = {})),
      (function (e) {
        (e.create = function (e, t, n) {
          return { newText: e, insert: t, replace: n };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              t && I.string(t.newText) && i.is(t.insert) && i.is(t.replace)
            );
          });
      })(t.InsertReplaceEdit || (t.InsertReplaceEdit = {})),
      (function (e) {
        (e.asIs = 1), (e.adjustIndentation = 2);
      })(t.InsertTextMode || (t.InsertTextMode = {})),
      (function (e) {
        e.create = function (e) {
          return { label: e };
        };
      })(t.CompletionItem || (t.CompletionItem = {})),
      (function (e) {
        e.create = function (e, t) {
          return { items: e || [], isIncomplete: !!t };
        };
      })(t.CompletionList || (t.CompletionList = {})),
      (function (e) {
        (e.fromPlainText = function (e) {
          return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
        }),
          (e.is = function (e) {
            var t = e;
            return (
              I.string(t) ||
              (I.objectLiteral(t) && I.string(t.language) && I.string(t.value))
            );
          });
      })((k = t.MarkedString || (t.MarkedString = {}))),
      (function (e) {
        e.is = function (e) {
          var t = e;
          return (
            !!t &&
            I.objectLiteral(t) &&
            (E.is(t.contents) ||
              k.is(t.contents) ||
              I.typedArray(t.contents, k.is)) &&
            (void 0 === e.range || i.is(e.range))
          );
        };
      })(t.Hover || (t.Hover = {})),
      (function (e) {
        e.create = function (e, t) {
          return t ? { label: e, documentation: t } : { label: e };
        };
      })(t.ParameterInformation || (t.ParameterInformation = {})),
      (function (e) {
        e.create = function (e, t) {
          for (var n = [], r = 2; r < arguments.length; r++)
            n[r - 2] = arguments[r];
          var i = { label: e };
          return (
            I.defined(t) && (i.documentation = t),
            I.defined(n) ? (i.parameters = n) : (i.parameters = []),
            i
          );
        };
      })(t.SignatureInformation || (t.SignatureInformation = {})),
      (function (e) {
        (e.Text = 1), (e.Read = 2), (e.Write = 3);
      })(t.DocumentHighlightKind || (t.DocumentHighlightKind = {})),
      (function (e) {
        e.create = function (e, t) {
          var n = { range: e };
          return I.number(t) && (n.kind = t), n;
        };
      })(t.DocumentHighlight || (t.DocumentHighlight = {})),
      (function (e) {
        (e.File = 1),
          (e.Module = 2),
          (e.Namespace = 3),
          (e.Package = 4),
          (e.Class = 5),
          (e.Method = 6),
          (e.Property = 7),
          (e.Field = 8),
          (e.Constructor = 9),
          (e.Enum = 10),
          (e.Interface = 11),
          (e.Function = 12),
          (e.Variable = 13),
          (e.Constant = 14),
          (e.String = 15),
          (e.Number = 16),
          (e.Boolean = 17),
          (e.Array = 18),
          (e.Object = 19),
          (e.Key = 20),
          (e.Null = 21),
          (e.EnumMember = 22),
          (e.Struct = 23),
          (e.Event = 24),
          (e.Operator = 25),
          (e.TypeParameter = 26);
      })(t.SymbolKind || (t.SymbolKind = {})),
      (function (e) {
        e.Deprecated = 1;
      })(t.SymbolTag || (t.SymbolTag = {})),
      (function (e) {
        e.create = function (e, t, n, r, i) {
          var o = { name: e, kind: t, location: { uri: r, range: n } };
          return i && (o.containerName = i), o;
        };
      })(t.SymbolInformation || (t.SymbolInformation = {})),
      (function (e) {
        (e.create = function (e, t, n, r, i, o) {
          var a = { name: e, detail: t, kind: n, range: r, selectionRange: i };
          return void 0 !== o && (a.children = o), a;
        }),
          (e.is = function (e) {
            var t = e;
            return (
              t &&
              I.string(t.name) &&
              I.number(t.kind) &&
              i.is(t.range) &&
              i.is(t.selectionRange) &&
              (void 0 === t.detail || I.string(t.detail)) &&
              (void 0 === t.deprecated || I.boolean(t.deprecated)) &&
              (void 0 === t.children || Array.isArray(t.children)) &&
              (void 0 === t.tags || Array.isArray(t.tags))
            );
          });
      })(t.DocumentSymbol || (t.DocumentSymbol = {})),
      (function (e) {
        (e.Empty = ""),
          (e.QuickFix = "quickfix"),
          (e.Refactor = "refactor"),
          (e.RefactorExtract = "refactor.extract"),
          (e.RefactorInline = "refactor.inline"),
          (e.RefactorRewrite = "refactor.rewrite"),
          (e.Source = "source"),
          (e.SourceOrganizeImports = "source.organizeImports"),
          (e.SourceFixAll = "source.fixAll");
      })(t.CodeActionKind || (t.CodeActionKind = {})),
      (function (e) {
        (e.create = function (e, t) {
          var n = { diagnostics: e };
          return null != t && (n.only = t), n;
        }),
          (e.is = function (e) {
            var t = e;
            return (
              I.defined(t) &&
              I.typedArray(t.diagnostics, c.is) &&
              (void 0 === t.only || I.typedArray(t.only, I.string))
            );
          });
      })(t.CodeActionContext || (t.CodeActionContext = {})),
      (function (e) {
        (e.create = function (e, t, n) {
          var r = { title: e },
            i = !0;
          return (
            "string" == typeof t
              ? ((i = !1), (r.kind = t))
              : u.is(t)
                ? (r.command = t)
                : (r.edit = t),
            i && void 0 !== n && (r.kind = n),
            r
          );
        }),
          (e.is = function (e) {
            var t = e;
            return (
              t &&
              I.string(t.title) &&
              (void 0 === t.diagnostics || I.typedArray(t.diagnostics, c.is)) &&
              (void 0 === t.kind || I.string(t.kind)) &&
              (void 0 !== t.edit || void 0 !== t.command) &&
              (void 0 === t.command || u.is(t.command)) &&
              (void 0 === t.isPreferred || I.boolean(t.isPreferred)) &&
              (void 0 === t.edit || y.is(t.edit))
            );
          });
      })(t.CodeAction || (t.CodeAction = {})),
      (function (e) {
        (e.create = function (e, t) {
          var n = { range: e };
          return I.defined(t) && (n.data = t), n;
        }),
          (e.is = function (e) {
            var t = e;
            return (
              I.defined(t) &&
              i.is(t.range) &&
              (I.undefined(t.command) || u.is(t.command))
            );
          });
      })(t.CodeLens || (t.CodeLens = {})),
      (function (e) {
        (e.create = function (e, t) {
          return { tabSize: e, insertSpaces: t };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              I.defined(t) && I.uinteger(t.tabSize) && I.boolean(t.insertSpaces)
            );
          });
      })(t.FormattingOptions || (t.FormattingOptions = {})),
      (function (e) {
        (e.create = function (e, t, n) {
          return { range: e, target: t, data: n };
        }),
          (e.is = function (e) {
            var t = e;
            return (
              I.defined(t) &&
              i.is(t.range) &&
              (I.undefined(t.target) || I.string(t.target))
            );
          });
      })(t.DocumentLink || (t.DocumentLink = {})),
      (function (e) {
        (e.create = function (e, t) {
          return { range: e, parent: t };
        }),
          (e.is = function (t) {
            var n = t;
            return (
              void 0 !== n &&
              i.is(n.range) &&
              (void 0 === n.parent || e.is(n.parent))
            );
          });
      })(t.SelectionRange || (t.SelectionRange = {})),
      (t.EOL = ["\n", "\r\n", "\r"]),
      (function (e) {
        function t(e, n) {
          if (e.length <= 1) return e;
          var r = (e.length / 2) | 0,
            i = e.slice(0, r),
            o = e.slice(r);
          t(i, n), t(o, n);
          for (var a = 0, s = 0, c = 0; a < i.length && s < o.length; ) {
            var u = n(i[a], o[s]);
            e[c++] = u <= 0 ? i[a++] : o[s++];
          }
          for (; a < i.length; ) e[c++] = i[a++];
          for (; s < o.length; ) e[c++] = o[s++];
          return e;
        }
        (e.create = function (e, t, n, r) {
          return new w(e, t, n, r);
        }),
          (e.is = function (e) {
            var t = e;
            return !!(
              I.defined(t) &&
              I.string(t.uri) &&
              (I.undefined(t.languageId) || I.string(t.languageId)) &&
              I.uinteger(t.lineCount) &&
              I.func(t.getText) &&
              I.func(t.positionAt) &&
              I.func(t.offsetAt)
            );
          }),
          (e.applyEdits = function (e, n) {
            for (
              var r = e.getText(),
                i = t(n, function (e, t) {
                  var n = e.range.start.line - t.range.start.line;
                  return 0 === n
                    ? e.range.start.character - t.range.start.character
                    : n;
                }),
                o = r.length,
                a = i.length - 1;
              a >= 0;
              a--
            ) {
              var s = i[a],
                c = e.offsetAt(s.range.start),
                u = e.offsetAt(s.range.end);
              if (!(u <= o)) throw new Error("Overlapping edit");
              (r = r.substring(0, c) + s.newText + r.substring(u, r.length)),
                (o = c);
            }
            return r;
          });
      })(t.TextDocument || (t.TextDocument = {}));
    var I,
      w = (function () {
        function e(e, t, n, r) {
          (this._uri = e),
            (this._languageId = t),
            (this._version = n),
            (this._content = r),
            (this._lineOffsets = void 0);
        }
        return (
          Object.defineProperty(e.prototype, "uri", {
            get: function () {
              return this._uri;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "languageId", {
            get: function () {
              return this._languageId;
            },
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e.prototype, "version", {
            get: function () {
              return this._version;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.getText = function (e) {
            if (e) {
              var t = this.offsetAt(e.start),
                n = this.offsetAt(e.end);
              return this._content.substring(t, n);
            }
            return this._content;
          }),
          (e.prototype.update = function (e, t) {
            (this._content = e.text),
              (this._version = t),
              (this._lineOffsets = void 0);
          }),
          (e.prototype.getLineOffsets = function () {
            if (void 0 === this._lineOffsets) {
              for (
                var e = [], t = this._content, n = !0, r = 0;
                r < t.length;
                r++
              ) {
                n && (e.push(r), (n = !1));
                var i = t.charAt(r);
                (n = "\r" === i || "\n" === i),
                  "\r" === i &&
                    r + 1 < t.length &&
                    "\n" === t.charAt(r + 1) &&
                    r++;
              }
              n && t.length > 0 && e.push(t.length), (this._lineOffsets = e);
            }
            return this._lineOffsets;
          }),
          (e.prototype.positionAt = function (e) {
            e = Math.max(Math.min(e, this._content.length), 0);
            var t = this.getLineOffsets(),
              n = 0,
              i = t.length;
            if (0 === i) return r.create(0, e);
            for (; n < i; ) {
              var o = Math.floor((n + i) / 2);
              t[o] > e ? (i = o) : (n = o + 1);
            }
            var a = n - 1;
            return r.create(a, e - t[a]);
          }),
          (e.prototype.offsetAt = function (e) {
            var t = this.getLineOffsets();
            if (e.line >= t.length) return this._content.length;
            if (e.line < 0) return 0;
            var n = t[e.line],
              r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
            return Math.max(Math.min(n + e.character, r), n);
          }),
          Object.defineProperty(e.prototype, "lineCount", {
            get: function () {
              return this.getLineOffsets().length;
            },
            enumerable: !1,
            configurable: !0,
          }),
          e
        );
      })();
    !(function (e) {
      var t = Object.prototype.toString;
      (e.defined = function (e) {
        return void 0 !== e;
      }),
        (e.undefined = function (e) {
          return void 0 === e;
        }),
        (e.boolean = function (e) {
          return !0 === e || !1 === e;
        }),
        (e.string = function (e) {
          return "[object String]" === t.call(e);
        }),
        (e.number = function (e) {
          return "[object Number]" === t.call(e);
        }),
        (e.numberRange = function (e, n, r) {
          return "[object Number]" === t.call(e) && n <= e && e <= r;
        }),
        (e.integer = function (e) {
          return (
            "[object Number]" === t.call(e) &&
            -2147483648 <= e &&
            e <= 2147483647
          );
        }),
        (e.uinteger = function (e) {
          return "[object Number]" === t.call(e) && 0 <= e && e <= 2147483647;
        }),
        (e.func = function (e) {
          return "[object Function]" === t.call(e);
        }),
        (e.objectLiteral = function (e) {
          return null !== e && "object" == typeof e;
        }),
        (e.typedArray = function (e, t) {
          return Array.isArray(e) && e.every(t);
        });
    })(I || (I = {}));
  }),
  define(
    "vscode-languageserver-types",
    ["vscode-languageserver-types/main"],
    function (e) {
      return e;
    },
  ),
  define(
    "vs/language/json/languageFeatures",
    [
      "require",
      "exports",
      "./fillers/monaco-editor-core",
      "vscode-languageserver-types",
    ],
    function (e, t, n, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.SelectionRangeAdapter =
          t.FoldingRangeAdapter =
          t.DocumentColorAdapter =
          t.DocumentRangeFormattingEditProvider =
          t.DocumentFormattingEditProvider =
          t.DocumentSymbolAdapter =
          t.HoverAdapter =
          t.CompletionAdapter =
          t.DiagnosticsAdapter =
            void 0);
      var i = (function () {
        function e(e, t, r) {
          var i = this;
          (this._languageId = e),
            (this._worker = t),
            (this._disposables = []),
            (this._listener = Object.create(null));
          var o = function (e) {
              var t,
                n = e.getLanguageId();
              n === i._languageId &&
                ((i._listener[e.uri.toString()] = e.onDidChangeContent(
                  function () {
                    clearTimeout(t),
                      (t = window.setTimeout(function () {
                        return i._doValidate(e.uri, n);
                      }, 500));
                  },
                )),
                i._doValidate(e.uri, n));
            },
            a = function (e) {
              n.editor.setModelMarkers(e, i._languageId, []);
              var t = e.uri.toString(),
                r = i._listener[t];
              r && (r.dispose(), delete i._listener[t]);
            };
          this._disposables.push(n.editor.onDidCreateModel(o)),
            this._disposables.push(
              n.editor.onWillDisposeModel(function (e) {
                a(e), i._resetSchema(e.uri);
              }),
            ),
            this._disposables.push(
              n.editor.onDidChangeModelLanguage(function (e) {
                a(e.model), o(e.model), i._resetSchema(e.model.uri);
              }),
            ),
            this._disposables.push(
              r.onDidChange(function (e) {
                n.editor.getModels().forEach(function (e) {
                  e.getLanguageId() === i._languageId && (a(e), o(e));
                });
              }),
            ),
            this._disposables.push({
              dispose: function () {
                for (var e in (n.editor.getModels().forEach(a), i._listener))
                  i._listener[e].dispose();
              },
            }),
            n.editor.getModels().forEach(o);
        }
        return (
          (e.prototype.dispose = function () {
            this._disposables.forEach(function (e) {
              return e && e.dispose();
            }),
              (this._disposables = []);
          }),
          (e.prototype._resetSchema = function (e) {
            this._worker().then(function (t) {
              t.resetSchema(e.toString());
            });
          }),
          (e.prototype._doValidate = function (e, t) {
            this._worker(e)
              .then(function (r) {
                return r.doValidation(e.toString()).then(function (r) {
                  var i = r.map(function (e) {
                      return (
                        (n =
                          "number" == typeof (t = e).code
                            ? String(t.code)
                            : t.code),
                        {
                          severity: o(t.severity),
                          startLineNumber: t.range.start.line + 1,
                          startColumn: t.range.start.character + 1,
                          endLineNumber: t.range.end.line + 1,
                          endColumn: t.range.end.character + 1,
                          message: t.message,
                          code: n,
                          source: t.source,
                        }
                      );
                      var t, n;
                    }),
                    a = n.editor.getModel(e);
                  a &&
                    a.getLanguageId() === t &&
                    n.editor.setModelMarkers(a, t, i);
                });
              })
              .then(void 0, function (e) {
                console.error(e);
              });
          }),
          e
        );
      })();
      function o(e) {
        switch (e) {
          case r.DiagnosticSeverity.Error:
            return n.MarkerSeverity.Error;
          case r.DiagnosticSeverity.Warning:
            return n.MarkerSeverity.Warning;
          case r.DiagnosticSeverity.Information:
            return n.MarkerSeverity.Info;
          case r.DiagnosticSeverity.Hint:
            return n.MarkerSeverity.Hint;
          default:
            return n.MarkerSeverity.Info;
        }
      }
      function a(e) {
        if (e) return { character: e.column - 1, line: e.lineNumber - 1 };
      }
      function s(e) {
        if (e)
          return {
            start: {
              line: e.startLineNumber - 1,
              character: e.startColumn - 1,
            },
            end: { line: e.endLineNumber - 1, character: e.endColumn - 1 },
          };
      }
      function c(e) {
        if (e)
          return new n.Range(
            e.start.line + 1,
            e.start.character + 1,
            e.end.line + 1,
            e.end.character + 1,
          );
      }
      function u(e) {
        var t = n.languages.CompletionItemKind;
        switch (e) {
          case r.CompletionItemKind.Text:
            return t.Text;
          case r.CompletionItemKind.Method:
            return t.Method;
          case r.CompletionItemKind.Function:
            return t.Function;
          case r.CompletionItemKind.Constructor:
            return t.Constructor;
          case r.CompletionItemKind.Field:
            return t.Field;
          case r.CompletionItemKind.Variable:
            return t.Variable;
          case r.CompletionItemKind.Class:
            return t.Class;
          case r.CompletionItemKind.Interface:
            return t.Interface;
          case r.CompletionItemKind.Module:
            return t.Module;
          case r.CompletionItemKind.Property:
            return t.Property;
          case r.CompletionItemKind.Unit:
            return t.Unit;
          case r.CompletionItemKind.Value:
            return t.Value;
          case r.CompletionItemKind.Enum:
            return t.Enum;
          case r.CompletionItemKind.Keyword:
            return t.Keyword;
          case r.CompletionItemKind.Snippet:
            return t.Snippet;
          case r.CompletionItemKind.Color:
            return t.Color;
          case r.CompletionItemKind.File:
            return t.File;
          case r.CompletionItemKind.Reference:
            return t.Reference;
        }
        return t.Property;
      }
      function d(e) {
        if (e) return { range: c(e.range), text: e.newText };
      }
      t.DiagnosticsAdapter = i;
      var f = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          Object.defineProperty(e.prototype, "triggerCharacters", {
            get: function () {
              return [" ", ":", '"'];
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.provideCompletionItems = function (e, t, i, o) {
            var s = e.uri;
            return this._worker(s)
              .then(function (e) {
                return e.doComplete(s.toString(), a(t));
              })
              .then(function (i) {
                if (i) {
                  var o = e.getWordUntilPosition(t),
                    a = new n.Range(
                      t.lineNumber,
                      o.startColumn,
                      t.lineNumber,
                      o.endColumn,
                    ),
                    s = i.items.map(function (e) {
                      var t,
                        i,
                        o = {
                          label: e.label,
                          insertText: e.insertText || e.label,
                          sortText: e.sortText,
                          filterText: e.filterText,
                          documentation: e.documentation,
                          detail: e.detail,
                          command:
                            ((t = e.command),
                            t && "editor.action.triggerSuggest" === t.command
                              ? {
                                  id: t.command,
                                  title: t.title,
                                  arguments: t.arguments,
                                }
                              : void 0),
                          range: a,
                          kind: u(e.kind),
                        };
                      return (
                        e.textEdit &&
                          (void 0 !== (i = e.textEdit).insert &&
                          void 0 !== i.replace
                            ? (o.range = {
                                insert: c(e.textEdit.insert),
                                replace: c(e.textEdit.replace),
                              })
                            : (o.range = c(e.textEdit.range)),
                          (o.insertText = e.textEdit.newText)),
                        e.additionalTextEdits &&
                          (o.additionalTextEdits =
                            e.additionalTextEdits.map(d)),
                        e.insertTextFormat === r.InsertTextFormat.Snippet &&
                          (o.insertTextRules =
                            n.languages.CompletionItemInsertTextRule.InsertAsSnippet),
                        o
                      );
                    });
                  return { isIncomplete: i.isIncomplete, suggestions: s };
                }
              });
          }),
          e
        );
      })();
      function l(e) {
        return "string" == typeof e
          ? { value: e }
          : (t = e) && "object" == typeof t && "string" == typeof t.kind
            ? "plaintext" === e.kind
              ? { value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&") }
              : { value: e.value }
            : { value: "```" + e.language + "\n" + e.value + "\n```\n" };
        var t;
      }
      function g(e) {
        if (e) return Array.isArray(e) ? e.map(l) : [l(e)];
      }
      t.CompletionAdapter = f;
      var h = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideHover = function (e, t, n) {
            var r = e.uri;
            return this._worker(r)
              .then(function (e) {
                return e.doHover(r.toString(), a(t));
              })
              .then(function (e) {
                if (e) return { range: c(e.range), contents: g(e.contents) };
              });
          }),
          e
        );
      })();
      function p(e) {
        var t = n.languages.SymbolKind;
        switch (e) {
          case r.SymbolKind.File:
            return t.Array;
          case r.SymbolKind.Module:
            return t.Module;
          case r.SymbolKind.Namespace:
            return t.Namespace;
          case r.SymbolKind.Package:
            return t.Package;
          case r.SymbolKind.Class:
            return t.Class;
          case r.SymbolKind.Method:
            return t.Method;
          case r.SymbolKind.Property:
            return t.Property;
          case r.SymbolKind.Field:
            return t.Field;
          case r.SymbolKind.Constructor:
            return t.Constructor;
          case r.SymbolKind.Enum:
            return t.Enum;
          case r.SymbolKind.Interface:
            return t.Interface;
          case r.SymbolKind.Function:
            return t.Function;
          case r.SymbolKind.Variable:
            return t.Variable;
          case r.SymbolKind.Constant:
            return t.Constant;
          case r.SymbolKind.String:
            return t.String;
          case r.SymbolKind.Number:
            return t.Number;
          case r.SymbolKind.Boolean:
            return t.Boolean;
          case r.SymbolKind.Array:
            return t.Array;
        }
        return t.Function;
      }
      t.HoverAdapter = h;
      var m = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideDocumentSymbols = function (e, t) {
            var n = e.uri;
            return this._worker(n)
              .then(function (e) {
                return e.findDocumentSymbols(n.toString());
              })
              .then(function (e) {
                if (e)
                  return e.map(function (e) {
                    return {
                      name: e.name,
                      detail: "",
                      containerName: e.containerName,
                      kind: p(e.kind),
                      range: c(e.location.range),
                      selectionRange: c(e.location.range),
                      tags: [],
                    };
                  });
              });
          }),
          e
        );
      })();
      function v(e) {
        return { tabSize: e.tabSize, insertSpaces: e.insertSpaces };
      }
      t.DocumentSymbolAdapter = m;
      var y = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideDocumentFormattingEdits = function (e, t, n) {
            var r = e.uri;
            return this._worker(r).then(function (e) {
              return e.format(r.toString(), null, v(t)).then(function (e) {
                if (e && 0 !== e.length) return e.map(d);
              });
            });
          }),
          e
        );
      })();
      t.DocumentFormattingEditProvider = y;
      var b = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideDocumentRangeFormattingEdits = function (
            e,
            t,
            n,
            r,
          ) {
            var i = e.uri;
            return this._worker(i).then(function (e) {
              return e.format(i.toString(), s(t), v(n)).then(function (e) {
                if (e && 0 !== e.length) return e.map(d);
              });
            });
          }),
          e
        );
      })();
      t.DocumentRangeFormattingEditProvider = b;
      var C = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideDocumentColors = function (e, t) {
            var n = e.uri;
            return this._worker(n)
              .then(function (e) {
                return e.findDocumentColors(n.toString());
              })
              .then(function (e) {
                if (e)
                  return e.map(function (e) {
                    return { color: e.color, range: c(e.range) };
                  });
              });
          }),
          (e.prototype.provideColorPresentations = function (e, t, n) {
            var r = e.uri;
            return this._worker(r)
              .then(function (e) {
                return e.getColorPresentations(
                  r.toString(),
                  t.color,
                  s(t.range),
                );
              })
              .then(function (e) {
                if (e)
                  return e.map(function (e) {
                    var t = { label: e.label };
                    return (
                      e.textEdit && (t.textEdit = d(e.textEdit)),
                      e.additionalTextEdits &&
                        (t.additionalTextEdits = e.additionalTextEdits.map(d)),
                      t
                    );
                  });
              });
          }),
          e
        );
      })();
      t.DocumentColorAdapter = C;
      var E = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideFoldingRanges = function (e, t, i) {
            var o = e.uri;
            return this._worker(o)
              .then(function (e) {
                return e.getFoldingRanges(o.toString(), t);
              })
              .then(function (e) {
                if (e)
                  return e.map(function (e) {
                    var t = { start: e.startLine + 1, end: e.endLine + 1 };
                    return (
                      void 0 !== e.kind &&
                        (t.kind = (function (e) {
                          switch (e) {
                            case r.FoldingRangeKind.Comment:
                              return n.languages.FoldingRangeKind.Comment;
                            case r.FoldingRangeKind.Imports:
                              return n.languages.FoldingRangeKind.Imports;
                            case r.FoldingRangeKind.Region:
                              return n.languages.FoldingRangeKind.Region;
                          }
                          return;
                        })(e.kind)),
                      t
                    );
                  });
              });
          }),
          e
        );
      })();
      t.FoldingRangeAdapter = E;
      var k = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideSelectionRanges = function (e, t, n) {
            var r = e.uri;
            return this._worker(r)
              .then(function (e) {
                return e.getSelectionRanges(r.toString(), t.map(a));
              })
              .then(function (e) {
                if (e)
                  return e.map(function (e) {
                    for (var t = []; e; )
                      t.push({ range: c(e.range) }), (e = e.parent);
                    return t;
                  });
              });
          }),
          e
        );
      })();
      t.SelectionRangeAdapter = k;
    },
  ),
  (function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define("jsonc-parser/impl/scanner", ["require", "exports"], e);
  })(function (e, t) {
    "use strict";
    function n(e) {
      return (
        32 === e ||
        9 === e ||
        11 === e ||
        12 === e ||
        160 === e ||
        5760 === e ||
        (e >= 8192 && e <= 8203) ||
        8239 === e ||
        8287 === e ||
        12288 === e ||
        65279 === e
      );
    }
    function r(e) {
      return 10 === e || 13 === e || 8232 === e || 8233 === e;
    }
    function i(e) {
      return e >= 48 && e <= 57;
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.createScanner = void 0),
      (t.createScanner = function (e, t) {
        void 0 === t && (t = !1);
        var o = e.length,
          a = 0,
          s = "",
          c = 0,
          u = 16,
          d = 0,
          f = 0,
          l = 0,
          g = 0,
          h = 0;
        function p(t, n) {
          for (var r = 0, i = 0; r < t || !n; ) {
            var o = e.charCodeAt(a);
            if (o >= 48 && o <= 57) i = 16 * i + o - 48;
            else if (o >= 65 && o <= 70) i = 16 * i + o - 65 + 10;
            else {
              if (!(o >= 97 && o <= 102)) break;
              i = 16 * i + o - 97 + 10;
            }
            a++, r++;
          }
          return r < t && (i = -1), i;
        }
        function m() {
          if (((s = ""), (h = 0), (c = a), (f = d), (g = l), a >= o))
            return (c = o), (u = 17);
          var t = e.charCodeAt(a);
          if (n(t)) {
            do {
              a++, (s += String.fromCharCode(t)), (t = e.charCodeAt(a));
            } while (n(t));
            return (u = 15);
          }
          if (r(t))
            return (
              a++,
              (s += String.fromCharCode(t)),
              13 === t && 10 === e.charCodeAt(a) && (a++, (s += "\n")),
              d++,
              (l = a),
              (u = 14)
            );
          switch (t) {
            case 123:
              return a++, (u = 1);
            case 125:
              return a++, (u = 2);
            case 91:
              return a++, (u = 3);
            case 93:
              return a++, (u = 4);
            case 58:
              return a++, (u = 6);
            case 44:
              return a++, (u = 5);
            case 34:
              return (
                a++,
                (s = (function () {
                  for (var t = "", n = a; ; ) {
                    if (a >= o) {
                      (t += e.substring(n, a)), (h = 2);
                      break;
                    }
                    var i = e.charCodeAt(a);
                    if (34 === i) {
                      (t += e.substring(n, a)), a++;
                      break;
                    }
                    if (92 !== i) {
                      if (i >= 0 && i <= 31) {
                        if (r(i)) {
                          (t += e.substring(n, a)), (h = 2);
                          break;
                        }
                        h = 6;
                      }
                      a++;
                    } else {
                      if (((t += e.substring(n, a)), ++a >= o)) {
                        h = 2;
                        break;
                      }
                      switch (e.charCodeAt(a++)) {
                        case 34:
                          t += '"';
                          break;
                        case 92:
                          t += "\\";
                          break;
                        case 47:
                          t += "/";
                          break;
                        case 98:
                          t += "\b";
                          break;
                        case 102:
                          t += "\f";
                          break;
                        case 110:
                          t += "\n";
                          break;
                        case 114:
                          t += "\r";
                          break;
                        case 116:
                          t += "\t";
                          break;
                        case 117:
                          var s = p(4, !0);
                          s >= 0 ? (t += String.fromCharCode(s)) : (h = 4);
                          break;
                        default:
                          h = 5;
                      }
                      n = a;
                    }
                  }
                  return t;
                })()),
                (u = 10)
              );
            case 47:
              var m = a - 1;
              if (47 === e.charCodeAt(a + 1)) {
                for (a += 2; a < o && !r(e.charCodeAt(a)); ) a++;
                return (s = e.substring(m, a)), (u = 12);
              }
              if (42 === e.charCodeAt(a + 1)) {
                a += 2;
                for (var y = o - 1, b = !1; a < y; ) {
                  var C = e.charCodeAt(a);
                  if (42 === C && 47 === e.charCodeAt(a + 1)) {
                    (a += 2), (b = !0);
                    break;
                  }
                  a++,
                    r(C) &&
                      (13 === C && 10 === e.charCodeAt(a) && a++, d++, (l = a));
                }
                return b || (a++, (h = 1)), (s = e.substring(m, a)), (u = 13);
              }
              return (s += String.fromCharCode(t)), a++, (u = 16);
            case 45:
              if (
                ((s += String.fromCharCode(t)),
                ++a === o || !i(e.charCodeAt(a)))
              )
                return (u = 16);
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
              return (
                (s += (function () {
                  var t = a;
                  if (48 === e.charCodeAt(a)) a++;
                  else for (a++; a < e.length && i(e.charCodeAt(a)); ) a++;
                  if (a < e.length && 46 === e.charCodeAt(a)) {
                    if (!(++a < e.length && i(e.charCodeAt(a))))
                      return (h = 3), e.substring(t, a);
                    for (a++; a < e.length && i(e.charCodeAt(a)); ) a++;
                  }
                  var n = a;
                  if (
                    a < e.length &&
                    (69 === e.charCodeAt(a) || 101 === e.charCodeAt(a))
                  )
                    if (
                      (((++a < e.length && 43 === e.charCodeAt(a)) ||
                        45 === e.charCodeAt(a)) &&
                        a++,
                      a < e.length && i(e.charCodeAt(a)))
                    ) {
                      for (a++; a < e.length && i(e.charCodeAt(a)); ) a++;
                      n = a;
                    } else h = 3;
                  return e.substring(t, n);
                })()),
                (u = 11)
              );
            default:
              for (; a < o && v(t); ) a++, (t = e.charCodeAt(a));
              if (c !== a) {
                switch ((s = e.substring(c, a))) {
                  case "true":
                    return (u = 8);
                  case "false":
                    return (u = 9);
                  case "null":
                    return (u = 7);
                }
                return (u = 16);
              }
              return (s += String.fromCharCode(t)), a++, (u = 16);
          }
        }
        function v(e) {
          if (n(e) || r(e)) return !1;
          switch (e) {
            case 125:
            case 93:
            case 123:
            case 91:
            case 34:
            case 58:
            case 44:
            case 47:
              return !1;
          }
          return !0;
        }
        return {
          setPosition: function (e) {
            (a = e), (s = ""), (c = 0), (u = 16), (h = 0);
          },
          getPosition: function () {
            return a;
          },
          scan: t
            ? function () {
                var e;
                do {
                  e = m();
                } while (e >= 12 && e <= 15);
                return e;
              }
            : m,
          getToken: function () {
            return u;
          },
          getTokenValue: function () {
            return s;
          },
          getTokenOffset: function () {
            return c;
          },
          getTokenLength: function () {
            return a - c;
          },
          getTokenStartLine: function () {
            return f;
          },
          getTokenStartCharacter: function () {
            return c - g;
          },
          getTokenError: function () {
            return h;
          },
        };
      });
  }),
  (function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define(
          "jsonc-parser/impl/format",
          ["require", "exports", "./scanner"],
          e,
        );
  })(function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isEOL = t.format = void 0);
    var n = e("./scanner");
    function r(e, t) {
      for (var n = "", r = 0; r < t; r++) n += e;
      return n;
    }
    function i(e, t) {
      return -1 !== "\r\n".indexOf(e.charAt(t));
    }
    (t.format = function (e, t, o) {
      var a, s, c, u, d;
      if (t) {
        for (u = t.offset, d = u + t.length, c = u; c > 0 && !i(e, c - 1); )
          c--;
        for (var f = d; f < e.length && !i(e, f); ) f++;
        (s = e.substring(c, f)),
          (a = (function (e, t) {
            var n = 0,
              r = 0,
              i = t.tabSize || 4;
            for (; n < e.length; ) {
              var o = e.charAt(n);
              if (" " === o) r++;
              else {
                if ("\t" !== o) break;
                r += i;
              }
              n++;
            }
            return Math.floor(r / i);
          })(s, o));
      } else (s = e), (a = 0), (c = 0), (u = 0), (d = e.length);
      var l,
        g = (function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t.charAt(n);
            if ("\r" === r)
              return n + 1 < t.length && "\n" === t.charAt(n + 1)
                ? "\r\n"
                : "\r";
            if ("\n" === r) return "\n";
          }
          return (e && e.eol) || "\n";
        })(o, e),
        h = !1,
        p = 0;
      l = o.insertSpaces ? r(" ", o.tabSize || 4) : "\t";
      var m = n.createScanner(s, !1),
        v = !1;
      function y() {
        return g + r(l, a + p);
      }
      function b() {
        var e = m.scan();
        for (h = !1; 15 === e || 14 === e; )
          (h = h || 14 === e), (e = m.scan());
        return (v = 16 === e || 0 !== m.getTokenError()), e;
      }
      var C = [];
      function E(n, r, i) {
        v ||
          (t && !(r < d && i > u)) ||
          e.substring(r, i) === n ||
          C.push({ offset: r, length: i - r, content: n });
      }
      var k = b();
      if (17 !== k) {
        var _ = m.getTokenOffset() + c;
        E(r(l, a), c, _);
      }
      for (; 17 !== k; ) {
        for (
          var A = m.getTokenOffset() + m.getTokenLength() + c,
            T = b(),
            I = "",
            w = !1;
          !h && (12 === T || 13 === T);

        ) {
          E(" ", A, m.getTokenOffset() + c),
            (A = m.getTokenOffset() + m.getTokenLength() + c),
            (I = (w = 12 === T) ? y() : ""),
            (T = b());
        }
        if (2 === T) 1 !== k && (p--, (I = y()));
        else if (4 === T) 3 !== k && (p--, (I = y()));
        else {
          switch (k) {
            case 3:
            case 1:
              p++, (I = y());
              break;
            case 5:
            case 12:
              I = y();
              break;
            case 13:
              h ? (I = y()) : w || (I = " ");
              break;
            case 6:
              w || (I = " ");
              break;
            case 10:
              if (6 === T) {
                w || (I = "");
                break;
              }
            case 7:
            case 8:
            case 9:
            case 11:
            case 2:
            case 4:
              12 === T || 13 === T
                ? w || (I = " ")
                : 5 !== T && 17 !== T && (v = !0);
              break;
            case 16:
              v = !0;
          }
          !h || (12 !== T && 13 !== T) || (I = y());
        }
        17 === T && (I = o.insertFinalNewline ? g : ""),
          E(I, A, m.getTokenOffset() + c),
          (k = T);
      }
      return C;
    }),
      (t.isEOL = i);
  }),
  (function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define(
          "jsonc-parser/impl/parser",
          ["require", "exports", "./scanner"],
          e,
        );
  })(function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.getNodeType =
        t.stripComments =
        t.visit =
        t.findNodeAtOffset =
        t.contains =
        t.getNodeValue =
        t.getNodePath =
        t.findNodeAtLocation =
        t.parseTree =
        t.parse =
        t.getLocation =
          void 0);
    var n,
      r = e("./scanner");
    function i(e, t, n) {
      return (
        void 0 === n && (n = !1),
        (t >= e.offset && t < e.offset + e.length) ||
          (n && t === e.offset + e.length)
      );
    }
    function o(e, t, i) {
      void 0 === i && (i = n.DEFAULT);
      var o = r.createScanner(e, !1);
      function a(e) {
        return e
          ? function () {
              return e(
                o.getTokenOffset(),
                o.getTokenLength(),
                o.getTokenStartLine(),
                o.getTokenStartCharacter(),
              );
            }
          : function () {
              return !0;
            };
      }
      function s(e) {
        return e
          ? function (t) {
              return e(
                t,
                o.getTokenOffset(),
                o.getTokenLength(),
                o.getTokenStartLine(),
                o.getTokenStartCharacter(),
              );
            }
          : function () {
              return !0;
            };
      }
      var c = a(t.onObjectBegin),
        u = s(t.onObjectProperty),
        d = a(t.onObjectEnd),
        f = a(t.onArrayBegin),
        l = a(t.onArrayEnd),
        g = s(t.onLiteralValue),
        h = s(t.onSeparator),
        p = a(t.onComment),
        m = s(t.onError),
        v = i && i.disallowComments,
        y = i && i.allowTrailingComma;
      function b() {
        for (;;) {
          var e = o.scan();
          switch (o.getTokenError()) {
            case 4:
              C(14);
              break;
            case 5:
              C(15);
              break;
            case 3:
              C(13);
              break;
            case 1:
              v || C(11);
              break;
            case 2:
              C(12);
              break;
            case 6:
              C(16);
          }
          switch (e) {
            case 12:
            case 13:
              v ? C(10) : p();
              break;
            case 16:
              C(1);
              break;
            case 15:
            case 14:
              break;
            default:
              return e;
          }
        }
      }
      function C(e, t, n) {
        if (
          (void 0 === t && (t = []),
          void 0 === n && (n = []),
          m(e),
          t.length + n.length > 0)
        )
          for (var r = o.getToken(); 17 !== r; ) {
            if (-1 !== t.indexOf(r)) {
              b();
              break;
            }
            if (-1 !== n.indexOf(r)) break;
            r = b();
          }
      }
      function E(e) {
        var t = o.getTokenValue();
        return e ? g(t) : u(t), b(), !0;
      }
      function k() {
        switch (o.getToken()) {
          case 3:
            return (function () {
              f(), b();
              for (var e = !1; 4 !== o.getToken() && 17 !== o.getToken(); ) {
                if (5 === o.getToken()) {
                  if ((e || C(4, [], []), h(","), b(), 4 === o.getToken() && y))
                    break;
                } else e && C(6, [], []);
                k() || C(4, [], [4, 5]), (e = !0);
              }
              return l(), 4 !== o.getToken() ? C(8, [4], []) : b(), !0;
            })();
          case 1:
            return (function () {
              c(), b();
              for (var e = !1; 2 !== o.getToken() && 17 !== o.getToken(); ) {
                if (5 === o.getToken()) {
                  if ((e || C(4, [], []), h(","), b(), 2 === o.getToken() && y))
                    break;
                } else e && C(6, [], []);
                (10 !== o.getToken()
                  ? (C(3, [], [2, 5]), 0)
                  : (E(!1),
                    6 === o.getToken()
                      ? (h(":"), b(), k() || C(4, [], [2, 5]))
                      : C(5, [], [2, 5]),
                    1)) || C(4, [], [2, 5]),
                  (e = !0);
              }
              return d(), 2 !== o.getToken() ? C(7, [2], []) : b(), !0;
            })();
          case 10:
            return E(!0);
          default:
            return (function () {
              switch (o.getToken()) {
                case 11:
                  var e = o.getTokenValue(),
                    t = Number(e);
                  isNaN(t) && (C(2), (t = 0)), g(t);
                  break;
                case 7:
                  g(null);
                  break;
                case 8:
                  g(!0);
                  break;
                case 9:
                  g(!1);
                  break;
                default:
                  return !1;
              }
              return b(), !0;
            })();
        }
      }
      return (
        b(),
        17 === o.getToken()
          ? !!i.allowEmptyContent || (C(4, [], []), !1)
          : k()
            ? (17 !== o.getToken() && C(9, [], []), !0)
            : (C(4, [], []), !1)
      );
    }
    function a(e) {
      switch (typeof e) {
        case "boolean":
          return "boolean";
        case "number":
          return "number";
        case "string":
          return "string";
        case "object":
          return e ? (Array.isArray(e) ? "array" : "object") : "null";
        default:
          return "null";
      }
    }
    !(function (e) {
      e.DEFAULT = { allowTrailingComma: !1 };
    })(n || (n = {})),
      (t.getLocation = function (e, t) {
        var n = [],
          r = new Object(),
          i = void 0,
          s = {
            value: {},
            offset: 0,
            length: 0,
            type: "object",
            parent: void 0,
          },
          c = !1;
        function u(e, t, n, r) {
          (s.value = e),
            (s.offset = t),
            (s.length = n),
            (s.type = r),
            (s.colonOffset = void 0),
            (i = s);
        }
        try {
          o(e, {
            onObjectBegin: function (e, o) {
              if (t <= e) throw r;
              (i = void 0), (c = t > e), n.push("");
            },
            onObjectProperty: function (e, i, o) {
              if (t < i) throw r;
              if ((u(e, i, o, "property"), (n[n.length - 1] = e), t <= i + o))
                throw r;
            },
            onObjectEnd: function (e, o) {
              if (t <= e) throw r;
              (i = void 0), n.pop();
            },
            onArrayBegin: function (e, o) {
              if (t <= e) throw r;
              (i = void 0), n.push(0);
            },
            onArrayEnd: function (e, o) {
              if (t <= e) throw r;
              (i = void 0), n.pop();
            },
            onLiteralValue: function (e, n, i) {
              if (t < n) throw r;
              if ((u(e, n, i, a(e)), t <= n + i)) throw r;
            },
            onSeparator: function (e, o, a) {
              if (t <= o) throw r;
              if (":" === e && i && "property" === i.type)
                (i.colonOffset = o), (c = !1), (i = void 0);
              else if ("," === e) {
                var s = n[n.length - 1];
                "number" == typeof s
                  ? (n[n.length - 1] = s + 1)
                  : ((c = !0), (n[n.length - 1] = "")),
                  (i = void 0);
              }
            },
          });
        } catch (e) {
          if (e !== r) throw e;
        }
        return {
          path: n,
          previousNode: i,
          isAtPropertyKey: c,
          matches: function (e) {
            for (var t = 0, r = 0; t < e.length && r < n.length; r++)
              if (e[t] === n[r] || "*" === e[t]) t++;
              else if ("**" !== e[t]) return !1;
            return t === e.length;
          },
        };
      }),
      (t.parse = function (e, t, r) {
        void 0 === t && (t = []), void 0 === r && (r = n.DEFAULT);
        var i = null,
          a = [],
          s = [];
        function c(e) {
          Array.isArray(a) ? a.push(e) : null !== i && (a[i] = e);
        }
        return (
          o(
            e,
            {
              onObjectBegin: function () {
                var e = {};
                c(e), s.push(a), (a = e), (i = null);
              },
              onObjectProperty: function (e) {
                i = e;
              },
              onObjectEnd: function () {
                a = s.pop();
              },
              onArrayBegin: function () {
                var e = [];
                c(e), s.push(a), (a = e), (i = null);
              },
              onArrayEnd: function () {
                a = s.pop();
              },
              onLiteralValue: c,
              onError: function (e, n, r) {
                t.push({ error: e, offset: n, length: r });
              },
            },
            r,
          ),
          a[0]
        );
      }),
      (t.parseTree = function (e, t, r) {
        void 0 === t && (t = []), void 0 === r && (r = n.DEFAULT);
        var i = {
          type: "array",
          offset: -1,
          length: -1,
          children: [],
          parent: void 0,
        };
        function s(e) {
          "property" === i.type && ((i.length = e - i.offset), (i = i.parent));
        }
        function c(e) {
          return i.children.push(e), e;
        }
        o(
          e,
          {
            onObjectBegin: function (e) {
              i = c({
                type: "object",
                offset: e,
                length: -1,
                parent: i,
                children: [],
              });
            },
            onObjectProperty: function (e, t, n) {
              (i = c({
                type: "property",
                offset: t,
                length: -1,
                parent: i,
                children: [],
              })).children.push({
                type: "string",
                value: e,
                offset: t,
                length: n,
                parent: i,
              });
            },
            onObjectEnd: function (e, t) {
              s(e + t), (i.length = e + t - i.offset), (i = i.parent), s(e + t);
            },
            onArrayBegin: function (e, t) {
              i = c({
                type: "array",
                offset: e,
                length: -1,
                parent: i,
                children: [],
              });
            },
            onArrayEnd: function (e, t) {
              (i.length = e + t - i.offset), (i = i.parent), s(e + t);
            },
            onLiteralValue: function (e, t, n) {
              c({ type: a(e), offset: t, length: n, parent: i, value: e }),
                s(t + n);
            },
            onSeparator: function (e, t, n) {
              "property" === i.type &&
                (":" === e ? (i.colonOffset = t) : "," === e && s(t));
            },
            onError: function (e, n, r) {
              t.push({ error: e, offset: n, length: r });
            },
          },
          r,
        );
        var u = i.children[0];
        return u && delete u.parent, u;
      }),
      (t.findNodeAtLocation = function (e, t) {
        if (e) {
          for (var n = e, r = 0, i = t; r < i.length; r++) {
            var o = i[r];
            if ("string" == typeof o) {
              if ("object" !== n.type || !Array.isArray(n.children)) return;
              for (var a = !1, s = 0, c = n.children; s < c.length; s++) {
                var u = c[s];
                if (Array.isArray(u.children) && u.children[0].value === o) {
                  (n = u.children[1]), (a = !0);
                  break;
                }
              }
              if (!a) return;
            } else {
              var d = o;
              if (
                "array" !== n.type ||
                d < 0 ||
                !Array.isArray(n.children) ||
                d >= n.children.length
              )
                return;
              n = n.children[d];
            }
          }
          return n;
        }
      }),
      (t.getNodePath = function e(t) {
        if (!t.parent || !t.parent.children) return [];
        var n = e(t.parent);
        if ("property" === t.parent.type) {
          var r = t.parent.children[0].value;
          n.push(r);
        } else if ("array" === t.parent.type) {
          var i = t.parent.children.indexOf(t);
          -1 !== i && n.push(i);
        }
        return n;
      }),
      (t.getNodeValue = function e(t) {
        switch (t.type) {
          case "array":
            return t.children.map(e);
          case "object":
            for (
              var n = Object.create(null), r = 0, i = t.children;
              r < i.length;
              r++
            ) {
              var o = i[r],
                a = o.children[1];
              a && (n[o.children[0].value] = e(a));
            }
            return n;
          case "null":
          case "string":
          case "number":
          case "boolean":
            return t.value;
          default:
            return;
        }
      }),
      (t.contains = i),
      (t.findNodeAtOffset = function e(t, n, r) {
        if ((void 0 === r && (r = !1), i(t, n, r))) {
          var o = t.children;
          if (Array.isArray(o))
            for (var a = 0; a < o.length && o[a].offset <= n; a++) {
              var s = e(o[a], n, r);
              if (s) return s;
            }
          return t;
        }
      }),
      (t.visit = o),
      (t.stripComments = function (e, t) {
        var n,
          i,
          o = r.createScanner(e),
          a = [],
          s = 0;
        do {
          switch (((i = o.getPosition()), (n = o.scan()))) {
            case 12:
            case 13:
            case 17:
              s !== i && a.push(e.substring(s, i)),
                void 0 !== t &&
                  a.push(o.getTokenValue().replace(/[^\r\n]/g, t)),
                (s = o.getPosition());
          }
        } while (17 !== n);
        return a.join("");
      }),
      (t.getNodeType = a);
  }),
  (function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define(
          "jsonc-parser/impl/edit",
          ["require", "exports", "./format", "./parser"],
          e,
        );
  })(function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.isWS = t.applyEdit = t.setProperty = t.removeProperty = void 0);
    var n = e("./format"),
      r = e("./parser");
    function i(e, t, n, i) {
      for (
        var a, s = t.slice(), c = r.parseTree(e, []), u = void 0, d = void 0;
        s.length > 0 &&
        ((d = s.pop()),
        void 0 === (u = r.findNodeAtLocation(c, s)) && void 0 !== n);

      )
        "string" == typeof d ? (((a = {})[d] = n), (n = a)) : (n = [n]);
      if (u) {
        if (
          "object" === u.type &&
          "string" == typeof d &&
          Array.isArray(u.children)
        ) {
          var f = r.findNodeAtLocation(u, [d]);
          if (void 0 !== f) {
            if (void 0 === n) {
              if (!f.parent) throw new Error("Malformed AST");
              var l = u.children.indexOf(f.parent),
                g = void 0,
                h = f.parent.offset + f.parent.length;
              if (l > 0) g = (k = u.children[l - 1]).offset + k.length;
              else if (((g = u.offset + 1), u.children.length > 1))
                h = u.children[1].offset;
              return o(e, { offset: g, length: h - g, content: "" }, i);
            }
            return o(
              e,
              {
                offset: f.offset,
                length: f.length,
                content: JSON.stringify(n),
              },
              i,
            );
          }
          if (void 0 === n) return [];
          var p = JSON.stringify(d) + ": " + JSON.stringify(n),
            m = void 0;
          return o(
            e,
            (m =
              (_ = i.getInsertionIndex
                ? i.getInsertionIndex(
                    u.children.map(function (e) {
                      return e.children[0].value;
                    }),
                  )
                : u.children.length) > 0
                ? {
                    offset: (k = u.children[_ - 1]).offset + k.length,
                    length: 0,
                    content: "," + p,
                  }
                : 0 === u.children.length
                  ? { offset: u.offset + 1, length: 0, content: p }
                  : { offset: u.offset + 1, length: 0, content: p + "," }),
            i,
          );
        }
        if (
          "array" === u.type &&
          "number" == typeof d &&
          Array.isArray(u.children)
        ) {
          var v = d;
          if (-1 === v) {
            (p = "" + JSON.stringify(n)), (m = void 0);
            if (0 === u.children.length)
              m = { offset: u.offset + 1, length: 0, content: p };
            else
              m = {
                offset:
                  (k = u.children[u.children.length - 1]).offset + k.length,
                length: 0,
                content: "," + p,
              };
            return o(e, m, i);
          }
          if (void 0 === n && u.children.length >= 0) {
            var y = d,
              b = u.children[y];
            m = void 0;
            if (1 === u.children.length)
              m = { offset: u.offset + 1, length: u.length - 2, content: "" };
            else if (u.children.length - 1 === y) {
              var C = (k = u.children[y - 1]).offset + k.length;
              m = {
                offset: C,
                length: u.offset + u.length - 2 - C,
                content: "",
              };
            } else
              m = {
                offset: b.offset,
                length: u.children[y + 1].offset - b.offset,
                content: "",
              };
            return o(e, m, i);
          }
          if (void 0 !== n) {
            (m = void 0), (p = "" + JSON.stringify(n));
            if (!i.isArrayInsertion && u.children.length > d) {
              var E = u.children[d];
              m = { offset: E.offset, length: E.length, content: p };
            } else if (0 === u.children.length || 0 === d)
              m = {
                offset: u.offset + 1,
                length: 0,
                content: 0 === u.children.length ? p : p + ",",
              };
            else {
              var k,
                _ = d > u.children.length ? u.children.length : d;
              m = {
                offset: (k = u.children[_ - 1]).offset + k.length,
                length: 0,
                content: "," + p,
              };
            }
            return o(e, m, i);
          }
          throw new Error(
            "Can not " +
              (void 0 === n
                ? "remove"
                : i.isArrayInsertion
                  ? "insert"
                  : "modify") +
              " Array index " +
              v +
              " as length is not sufficient",
          );
        }
        throw new Error(
          "Can not add " +
            ("number" != typeof d ? "index" : "property") +
            " to parent of type " +
            u.type,
        );
      }
      if (void 0 === n) throw new Error("Can not delete in empty document");
      return o(
        e,
        {
          offset: c ? c.offset : 0,
          length: c ? c.length : 0,
          content: JSON.stringify(n),
        },
        i,
      );
    }
    function o(e, t, r) {
      if (!r.formattingOptions) return [t];
      var i = a(e, t),
        o = t.offset,
        s = t.offset + t.content.length;
      if (0 === t.length || 0 === t.content.length) {
        for (; o > 0 && !n.isEOL(i, o - 1); ) o--;
        for (; s < i.length && !n.isEOL(i, s); ) s++;
      }
      for (
        var c = n.format(i, { offset: o, length: s - o }, r.formattingOptions),
          u = c.length - 1;
        u >= 0;
        u--
      ) {
        var d = c[u];
        (i = a(i, d)),
          (o = Math.min(o, d.offset)),
          (s = Math.max(s, d.offset + d.length)),
          (s += d.content.length - d.length);
      }
      return [
        {
          offset: o,
          length: e.length - (i.length - s) - o,
          content: i.substring(o, s),
        },
      ];
    }
    function a(e, t) {
      return (
        e.substring(0, t.offset) + t.content + e.substring(t.offset + t.length)
      );
    }
    (t.removeProperty = function (e, t, n) {
      return i(e, t, void 0, n);
    }),
      (t.setProperty = i),
      (t.applyEdit = a),
      (t.isWS = function (e, t) {
        return -1 !== "\r\n \t".indexOf(e.charAt(t));
      });
  }),
  (function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var t = e(require, exports);
      void 0 !== t && (module.exports = t);
    } else
      "function" == typeof define &&
        define.amd &&
        define(
          "jsonc-parser/main",
          [
            "require",
            "exports",
            "./impl/format",
            "./impl/edit",
            "./impl/scanner",
            "./impl/parser",
          ],
          e,
        );
  })(function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.applyEdits =
        t.modify =
        t.format =
        t.printParseErrorCode =
        t.stripComments =
        t.visit =
        t.getNodeValue =
        t.getNodePath =
        t.findNodeAtOffset =
        t.findNodeAtLocation =
        t.parseTree =
        t.parse =
        t.getLocation =
        t.createScanner =
          void 0);
    var n = e("./impl/format"),
      r = e("./impl/edit"),
      i = e("./impl/scanner"),
      o = e("./impl/parser");
    (t.createScanner = i.createScanner),
      (t.getLocation = o.getLocation),
      (t.parse = o.parse),
      (t.parseTree = o.parseTree),
      (t.findNodeAtLocation = o.findNodeAtLocation),
      (t.findNodeAtOffset = o.findNodeAtOffset),
      (t.getNodePath = o.getNodePath),
      (t.getNodeValue = o.getNodeValue),
      (t.visit = o.visit),
      (t.stripComments = o.stripComments),
      (t.printParseErrorCode = function (e) {
        switch (e) {
          case 1:
            return "InvalidSymbol";
          case 2:
            return "InvalidNumberFormat";
          case 3:
            return "PropertyNameExpected";
          case 4:
            return "ValueExpected";
          case 5:
            return "ColonExpected";
          case 6:
            return "CommaExpected";
          case 7:
            return "CloseBraceExpected";
          case 8:
            return "CloseBracketExpected";
          case 9:
            return "EndOfFileExpected";
          case 10:
            return "InvalidCommentToken";
          case 11:
            return "UnexpectedEndOfComment";
          case 12:
            return "UnexpectedEndOfString";
          case 13:
            return "UnexpectedEndOfNumber";
          case 14:
            return "InvalidUnicode";
          case 15:
            return "InvalidEscapeCharacter";
          case 16:
            return "InvalidCharacter";
        }
        return "<unknown ParseErrorCode>";
      }),
      (t.format = function (e, t, r) {
        return n.format(e, t, r);
      }),
      (t.modify = function (e, t, n, i) {
        return r.setProperty(e, t, n, i);
      }),
      (t.applyEdits = function (e, t) {
        for (var n = t.length - 1; n >= 0; n--) e = r.applyEdit(e, t[n]);
        return e;
      });
  }),
  define("jsonc-parser", ["jsonc-parser/main"], function (e) {
    return e;
  }),
  define(
    "vs/language/json/tokenization",
    ["require", "exports", "jsonc-parser"],
    function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TOKEN_COMMENT_LINE =
          t.TOKEN_COMMENT_BLOCK =
          t.TOKEN_PROPERTY_NAME =
          t.TOKEN_VALUE_NUMBER =
          t.TOKEN_VALUE_STRING =
          t.TOKEN_VALUE_NULL =
          t.TOKEN_VALUE_BOOLEAN =
          t.TOKEN_DELIM_COMMA =
          t.TOKEN_DELIM_COLON =
          t.TOKEN_DELIM_ARRAY =
          t.TOKEN_DELIM_OBJECT =
          t.createTokenizationSupport =
            void 0),
        (t.createTokenizationSupport = function (e) {
          return {
            getInitialState: function () {
              return new i(null, null, !1, null);
            },
            tokenize: function (o, a, s, c) {
              return (function (e, o, a, s, c) {
                void 0 === s && (s = 0);
                var u = 0,
                  d = !1;
                switch (a.scanError) {
                  case 2:
                    (o = '"' + o), (u = 1);
                    break;
                  case 1:
                    (o = "/*" + o), (u = 2);
                }
                var f = n.createScanner(o),
                  l = a.lastWasColon,
                  g = a.parents,
                  h = { tokens: [], endState: a.clone() };
                for (;;) {
                  var p = s + f.getPosition(),
                    m = "",
                    v = f.scan();
                  if (17 === v) break;
                  if (p === s + f.getPosition())
                    throw new Error(
                      "Scanner did not advance, next 3 characters are: " +
                        o.substr(f.getPosition(), 3),
                    );
                  switch ((d && (p -= u), (d = u > 0), v)) {
                    case 1:
                      (g = r.push(g, 0)), (m = t.TOKEN_DELIM_OBJECT), (l = !1);
                      break;
                    case 2:
                      (g = r.pop(g)), (m = t.TOKEN_DELIM_OBJECT), (l = !1);
                      break;
                    case 3:
                      (g = r.push(g, 1)), (m = t.TOKEN_DELIM_ARRAY), (l = !1);
                      break;
                    case 4:
                      (g = r.pop(g)), (m = t.TOKEN_DELIM_ARRAY), (l = !1);
                      break;
                    case 6:
                      (m = t.TOKEN_DELIM_COLON), (l = !0);
                      break;
                    case 5:
                      (m = t.TOKEN_DELIM_COMMA), (l = !1);
                      break;
                    case 8:
                    case 9:
                      (m = t.TOKEN_VALUE_BOOLEAN), (l = !1);
                      break;
                    case 7:
                      (m = t.TOKEN_VALUE_NULL), (l = !1);
                      break;
                    case 10:
                      var y = g ? g.type : 0;
                      (m =
                        l || 1 === y
                          ? t.TOKEN_VALUE_STRING
                          : t.TOKEN_PROPERTY_NAME),
                        (l = !1);
                      break;
                    case 11:
                      (m = t.TOKEN_VALUE_NUMBER), (l = !1);
                  }
                  if (e)
                    switch (v) {
                      case 12:
                        m = t.TOKEN_COMMENT_LINE;
                        break;
                      case 13:
                        m = t.TOKEN_COMMENT_BLOCK;
                    }
                  (h.endState = new i(
                    a.getStateData(),
                    f.getTokenError(),
                    l,
                    g,
                  )),
                    h.tokens.push({ startIndex: p, scopes: m });
                }
                return h;
              })(e, o, a, s);
            },
          };
        }),
        (t.TOKEN_DELIM_OBJECT = "delimiter.bracket.json"),
        (t.TOKEN_DELIM_ARRAY = "delimiter.array.json"),
        (t.TOKEN_DELIM_COLON = "delimiter.colon.json"),
        (t.TOKEN_DELIM_COMMA = "delimiter.comma.json"),
        (t.TOKEN_VALUE_BOOLEAN = "keyword.json"),
        (t.TOKEN_VALUE_NULL = "keyword.json"),
        (t.TOKEN_VALUE_STRING = "string.value.json"),
        (t.TOKEN_VALUE_NUMBER = "number.json"),
        (t.TOKEN_PROPERTY_NAME = "string.key.json"),
        (t.TOKEN_COMMENT_BLOCK = "comment.block.json"),
        (t.TOKEN_COMMENT_LINE = "comment.line.json");
      var r = (function () {
          function e(e, t) {
            (this.parent = e), (this.type = t);
          }
          return (
            (e.pop = function (e) {
              return e ? e.parent : null;
            }),
            (e.push = function (t, n) {
              return new e(t, n);
            }),
            (e.equals = function (e, t) {
              if (!e && !t) return !0;
              if (!e || !t) return !1;
              for (; e && t; ) {
                if (e === t) return !0;
                if (e.type !== t.type) return !1;
                (e = e.parent), (t = t.parent);
              }
              return !0;
            }),
            e
          );
        })(),
        i = (function () {
          function e(e, t, n, r) {
            (this._state = e),
              (this.scanError = t),
              (this.lastWasColon = n),
              (this.parents = r);
          }
          return (
            (e.prototype.clone = function () {
              return new e(
                this._state,
                this.scanError,
                this.lastWasColon,
                this.parents,
              );
            }),
            (e.prototype.equals = function (t) {
              return (
                t === this ||
                (!!(t && t instanceof e) &&
                  this.scanError === t.scanError &&
                  this.lastWasColon === t.lastWasColon &&
                  r.equals(this.parents, t.parents))
              );
            }),
            (e.prototype.getStateData = function () {
              return this._state;
            }),
            (e.prototype.setStateData = function (e) {
              this._state = e;
            }),
            e
          );
        })();
    },
  ),
  define(
    "vs/language/json/jsonMode",
    [
      "require",
      "exports",
      "./workerManager",
      "./languageFeatures",
      "./tokenization",
      "./fillers/monaco-editor-core",
    ],
    function (e, t, n, r, i, o) {
      "use strict";
      function a(e) {
        return {
          dispose: function () {
            return s(e);
          },
        };
      }
      function s(e) {
        for (; e.length; ) e.pop().dispose();
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.setupMode = void 0),
        (t.setupMode = function (e) {
          var t = [],
            u = [],
            d = new n.WorkerManager(e);
          t.push(d);
          var f = function () {
            for (var e = [], t = 0; t < arguments.length; t++)
              e[t] = arguments[t];
            return d.getLanguageServiceWorker.apply(d, e);
          };
          function l() {
            var t = e.languageId,
              n = e.modeConfiguration;
            s(u),
              n.documentFormattingEdits &&
                u.push(
                  o.languages.registerDocumentFormattingEditProvider(
                    t,
                    new r.DocumentFormattingEditProvider(f),
                  ),
                ),
              n.documentRangeFormattingEdits &&
                u.push(
                  o.languages.registerDocumentRangeFormattingEditProvider(
                    t,
                    new r.DocumentRangeFormattingEditProvider(f),
                  ),
                ),
              n.completionItems &&
                u.push(
                  o.languages.registerCompletionItemProvider(
                    t,
                    new r.CompletionAdapter(f),
                  ),
                ),
              n.hovers &&
                u.push(
                  o.languages.registerHoverProvider(t, new r.HoverAdapter(f)),
                ),
              n.documentSymbols &&
                u.push(
                  o.languages.registerDocumentSymbolProvider(
                    t,
                    new r.DocumentSymbolAdapter(f),
                  ),
                ),
              n.tokens &&
                u.push(
                  o.languages.setTokensProvider(
                    t,
                    (0, i.createTokenizationSupport)(!0),
                  ),
                ),
              n.colors &&
                u.push(
                  o.languages.registerColorProvider(
                    t,
                    new r.DocumentColorAdapter(f),
                  ),
                ),
              n.foldingRanges &&
                u.push(
                  o.languages.registerFoldingRangeProvider(
                    t,
                    new r.FoldingRangeAdapter(f),
                  ),
                ),
              n.diagnostics && u.push(new r.DiagnosticsAdapter(t, f, e)),
              n.selectionRanges &&
                u.push(
                  o.languages.registerSelectionRangeProvider(
                    t,
                    new r.SelectionRangeAdapter(f),
                  ),
                );
          }
          l(), t.push(o.languages.setLanguageConfiguration(e.languageId, c));
          var g = e.modeConfiguration;
          return (
            e.onDidChange(function (e) {
              e.modeConfiguration !== g && ((g = e.modeConfiguration), l());
            }),
            t.push(a(u)),
            a(t)
          );
        });
      var c = {
        wordPattern: /(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,
        comments: { lineComment: "//", blockComment: ["/*", "*/"] },
        brackets: [
          ["{", "}"],
          ["[", "]"],
        ],
        autoClosingPairs: [
          { open: "{", close: "}", notIn: ["string"] },
          { open: "[", close: "]", notIn: ["string"] },
          { open: '"', close: '"', notIn: ["string"] },
        ],
      };
    },
  );
