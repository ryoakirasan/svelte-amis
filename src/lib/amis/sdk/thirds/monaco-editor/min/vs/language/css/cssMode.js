/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-css version: 0.30.1(5a7ba61be909ae9e4889768a3453ebb0dec392e2)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-css/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define(
  "vs/language/css/workerManager",
  ["require", "exports", "./fillers/monaco-editor-core"],
  function (e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.WorkerManager = void 0);
    var i = (function () {
      function e(e) {
        var n = this;
        (this._defaults = e),
          (this._worker = null),
          (this._idleCheckInterval = window.setInterval(function () {
            return n._checkIfIdle();
          }, 3e4)),
          (this._lastUsedTime = 0),
          (this._configChangeListener = this._defaults.onDidChange(function () {
            return n._stopWorker();
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
              ((this._worker = t.editor.createWebWorker({
                moduleId: "vs/language/css/cssWorker",
                label: this._defaults.languageId,
                createData: {
                  options: this._defaults.options,
                  languageId: this._defaults.languageId,
                },
              })),
              (this._client = this._worker.getProxy())),
            this._client
          );
        }),
        (e.prototype.getLanguageServiceWorker = function () {
          for (var e, n = this, t = [], i = 0; i < arguments.length; i++)
            t[i] = arguments[i];
          return this._getClient()
            .then(function (n) {
              e = n;
            })
            .then(function (e) {
              return n._worker.withSyncedResources(t);
            })
            .then(function (n) {
              return e;
            });
        }),
        e
      );
    })();
    n.WorkerManager = i;
  },
),
  (function (e) {
    if ("object" == typeof module && "object" == typeof module.exports) {
      var n = e(require, exports);
      void 0 !== n && (module.exports = n);
    } else
      "function" == typeof define &&
        define.amd &&
        define("vscode-languageserver-types/main", ["require", "exports"], e);
  })(function (e, n) {
    "use strict";
    var t, i, r, o, a, s, u, c, d, g, l, f, h, p, m, v, y;
    Object.defineProperty(n, "__esModule", { value: !0 }),
      (n.TextDocument =
        n.EOL =
        n.SelectionRange =
        n.DocumentLink =
        n.FormattingOptions =
        n.CodeLens =
        n.CodeAction =
        n.CodeActionContext =
        n.CodeActionKind =
        n.DocumentSymbol =
        n.SymbolInformation =
        n.SymbolTag =
        n.SymbolKind =
        n.DocumentHighlight =
        n.DocumentHighlightKind =
        n.SignatureInformation =
        n.ParameterInformation =
        n.Hover =
        n.MarkedString =
        n.CompletionList =
        n.CompletionItem =
        n.InsertTextMode =
        n.InsertReplaceEdit =
        n.CompletionItemTag =
        n.InsertTextFormat =
        n.CompletionItemKind =
        n.MarkupContent =
        n.MarkupKind =
        n.TextDocumentItem =
        n.OptionalVersionedTextDocumentIdentifier =
        n.VersionedTextDocumentIdentifier =
        n.TextDocumentIdentifier =
        n.WorkspaceChange =
        n.WorkspaceEdit =
        n.DeleteFile =
        n.RenameFile =
        n.CreateFile =
        n.TextDocumentEdit =
        n.AnnotatedTextEdit =
        n.ChangeAnnotationIdentifier =
        n.ChangeAnnotation =
        n.TextEdit =
        n.Command =
        n.Diagnostic =
        n.CodeDescription =
        n.DiagnosticTag =
        n.DiagnosticSeverity =
        n.DiagnosticRelatedInformation =
        n.FoldingRange =
        n.FoldingRangeKind =
        n.ColorPresentation =
        n.ColorInformation =
        n.Color =
        n.LocationLink =
        n.Location =
        n.Range =
        n.Position =
        n.uinteger =
        n.integer =
          void 0),
      (function (e) {
        (e.MIN_VALUE = -2147483648), (e.MAX_VALUE = 2147483647);
      })(n.integer || (n.integer = {})),
      (function (e) {
        (e.MIN_VALUE = 0), (e.MAX_VALUE = 2147483647);
      })((t = n.uinteger || (n.uinteger = {}))),
      (function (e) {
        (e.create = function (e, n) {
          return (
            e === Number.MAX_VALUE && (e = t.MAX_VALUE),
            n === Number.MAX_VALUE && (n = t.MAX_VALUE),
            { line: e, character: n }
          );
        }),
          (e.is = function (e) {
            var n = e;
            return (
              A.objectLiteral(n) &&
              A.uinteger(n.line) &&
              A.uinteger(n.character)
            );
          });
      })((i = n.Position || (n.Position = {}))),
      (function (e) {
        (e.create = function (e, n, t, r) {
          if (A.uinteger(e) && A.uinteger(n) && A.uinteger(t) && A.uinteger(r))
            return { start: i.create(e, n), end: i.create(t, r) };
          if (i.is(e) && i.is(n)) return { start: e, end: n };
          throw new Error(
            "Range#create called with invalid arguments[" +
              e +
              ", " +
              n +
              ", " +
              t +
              ", " +
              r +
              "]",
          );
        }),
          (e.is = function (e) {
            var n = e;
            return A.objectLiteral(n) && i.is(n.start) && i.is(n.end);
          });
      })((r = n.Range || (n.Range = {}))),
      (function (e) {
        (e.create = function (e, n) {
          return { uri: e, range: n };
        }),
          (e.is = function (e) {
            var n = e;
            return (
              A.defined(n) &&
              r.is(n.range) &&
              (A.string(n.uri) || A.undefined(n.uri))
            );
          });
      })((o = n.Location || (n.Location = {}))),
      (function (e) {
        (e.create = function (e, n, t, i) {
          return {
            targetUri: e,
            targetRange: n,
            targetSelectionRange: t,
            originSelectionRange: i,
          };
        }),
          (e.is = function (e) {
            var n = e;
            return (
              A.defined(n) &&
              r.is(n.targetRange) &&
              A.string(n.targetUri) &&
              (r.is(n.targetSelectionRange) ||
                A.undefined(n.targetSelectionRange)) &&
              (r.is(n.originSelectionRange) ||
                A.undefined(n.originSelectionRange))
            );
          });
      })(n.LocationLink || (n.LocationLink = {})),
      (function (e) {
        (e.create = function (e, n, t, i) {
          return { red: e, green: n, blue: t, alpha: i };
        }),
          (e.is = function (e) {
            var n = e;
            return (
              A.numberRange(n.red, 0, 1) &&
              A.numberRange(n.green, 0, 1) &&
              A.numberRange(n.blue, 0, 1) &&
              A.numberRange(n.alpha, 0, 1)
            );
          });
      })((a = n.Color || (n.Color = {}))),
      (function (e) {
        (e.create = function (e, n) {
          return { range: e, color: n };
        }),
          (e.is = function (e) {
            var n = e;
            return r.is(n.range) && a.is(n.color);
          });
      })(n.ColorInformation || (n.ColorInformation = {})),
      (function (e) {
        (e.create = function (e, n, t) {
          return { label: e, textEdit: n, additionalTextEdits: t };
        }),
          (e.is = function (e) {
            var n = e;
            return (
              A.string(n.label) &&
              (A.undefined(n.textEdit) || d.is(n)) &&
              (A.undefined(n.additionalTextEdits) ||
                A.typedArray(n.additionalTextEdits, d.is))
            );
          });
      })(n.ColorPresentation || (n.ColorPresentation = {})),
      (function (e) {
        (e.Comment = "comment"), (e.Imports = "imports"), (e.Region = "region");
      })(n.FoldingRangeKind || (n.FoldingRangeKind = {})),
      (function (e) {
        (e.create = function (e, n, t, i, r) {
          var o = { startLine: e, endLine: n };
          return (
            A.defined(t) && (o.startCharacter = t),
            A.defined(i) && (o.endCharacter = i),
            A.defined(r) && (o.kind = r),
            o
          );
        }),
          (e.is = function (e) {
            var n = e;
            return (
              A.uinteger(n.startLine) &&
              A.uinteger(n.startLine) &&
              (A.undefined(n.startCharacter) || A.uinteger(n.startCharacter)) &&
              (A.undefined(n.endCharacter) || A.uinteger(n.endCharacter)) &&
              (A.undefined(n.kind) || A.string(n.kind))
            );
          });
      })(n.FoldingRange || (n.FoldingRange = {})),
      (function (e) {
        (e.create = function (e, n) {
          return { location: e, message: n };
        }),
          (e.is = function (e) {
            var n = e;
            return A.defined(n) && o.is(n.location) && A.string(n.message);
          });
      })(
        (s =
          n.DiagnosticRelatedInformation ||
          (n.DiagnosticRelatedInformation = {})),
      ),
      (function (e) {
        (e.Error = 1), (e.Warning = 2), (e.Information = 3), (e.Hint = 4);
      })(n.DiagnosticSeverity || (n.DiagnosticSeverity = {})),
      (function (e) {
        (e.Unnecessary = 1), (e.Deprecated = 2);
      })(n.DiagnosticTag || (n.DiagnosticTag = {})),
      (function (e) {
        e.is = function (e) {
          var n = e;
          return null != n && A.string(n.href);
        };
      })(n.CodeDescription || (n.CodeDescription = {})),
      (function (e) {
        (e.create = function (e, n, t, i, r, o) {
          var a = { range: e, message: n };
          return (
            A.defined(t) && (a.severity = t),
            A.defined(i) && (a.code = i),
            A.defined(r) && (a.source = r),
            A.defined(o) && (a.relatedInformation = o),
            a
          );
        }),
          (e.is = function (e) {
            var n,
              t = e;
            return (
              A.defined(t) &&
              r.is(t.range) &&
              A.string(t.message) &&
              (A.number(t.severity) || A.undefined(t.severity)) &&
              (A.integer(t.code) || A.string(t.code) || A.undefined(t.code)) &&
              (A.undefined(t.codeDescription) ||
                A.string(
                  null === (n = t.codeDescription) || void 0 === n
                    ? void 0
                    : n.href,
                )) &&
              (A.string(t.source) || A.undefined(t.source)) &&
              (A.undefined(t.relatedInformation) ||
                A.typedArray(t.relatedInformation, s.is))
            );
          });
      })((u = n.Diagnostic || (n.Diagnostic = {}))),
      (function (e) {
        (e.create = function (e, n) {
          for (var t = [], i = 2; i < arguments.length; i++)
            t[i - 2] = arguments[i];
          var r = { title: e, command: n };
          return A.defined(t) && t.length > 0 && (r.arguments = t), r;
        }),
          (e.is = function (e) {
            var n = e;
            return A.defined(n) && A.string(n.title) && A.string(n.command);
          });
      })((c = n.Command || (n.Command = {}))),
      (function (e) {
        (e.replace = function (e, n) {
          return { range: e, newText: n };
        }),
          (e.insert = function (e, n) {
            return { range: { start: e, end: e }, newText: n };
          }),
          (e.del = function (e) {
            return { range: e, newText: "" };
          }),
          (e.is = function (e) {
            var n = e;
            return A.objectLiteral(n) && A.string(n.newText) && r.is(n.range);
          });
      })((d = n.TextEdit || (n.TextEdit = {}))),
      (function (e) {
        (e.create = function (e, n, t) {
          var i = { label: e };
          return (
            void 0 !== n && (i.needsConfirmation = n),
            void 0 !== t && (i.description = t),
            i
          );
        }),
          (e.is = function (e) {
            var n = e;
            return (
              void 0 !== n &&
              A.objectLiteral(n) &&
              A.string(n.label) &&
              (A.boolean(n.needsConfirmation) ||
                void 0 === n.needsConfirmation) &&
              (A.string(n.description) || void 0 === n.description)
            );
          });
      })((g = n.ChangeAnnotation || (n.ChangeAnnotation = {}))),
      (function (e) {
        e.is = function (e) {
          return "string" == typeof e;
        };
      })(
        (l =
          n.ChangeAnnotationIdentifier || (n.ChangeAnnotationIdentifier = {})),
      ),
      (function (e) {
        (e.replace = function (e, n, t) {
          return { range: e, newText: n, annotationId: t };
        }),
          (e.insert = function (e, n, t) {
            return { range: { start: e, end: e }, newText: n, annotationId: t };
          }),
          (e.del = function (e, n) {
            return { range: e, newText: "", annotationId: n };
          }),
          (e.is = function (e) {
            var n = e;
            return d.is(n) && (g.is(n.annotationId) || l.is(n.annotationId));
          });
      })((f = n.AnnotatedTextEdit || (n.AnnotatedTextEdit = {}))),
      (function (e) {
        (e.create = function (e, n) {
          return { textDocument: e, edits: n };
        }),
          (e.is = function (e) {
            var n = e;
            return (
              A.defined(n) && C.is(n.textDocument) && Array.isArray(n.edits)
            );
          });
      })((h = n.TextDocumentEdit || (n.TextDocumentEdit = {}))),
      (function (e) {
        (e.create = function (e, n, t) {
          var i = { kind: "create", uri: e };
          return (
            void 0 === n ||
              (void 0 === n.overwrite && void 0 === n.ignoreIfExists) ||
              (i.options = n),
            void 0 !== t && (i.annotationId = t),
            i
          );
        }),
          (e.is = function (e) {
            var n = e;
            return (
              n &&
              "create" === n.kind &&
              A.string(n.uri) &&
              (void 0 === n.options ||
                ((void 0 === n.options.overwrite ||
                  A.boolean(n.options.overwrite)) &&
                  (void 0 === n.options.ignoreIfExists ||
                    A.boolean(n.options.ignoreIfExists)))) &&
              (void 0 === n.annotationId || l.is(n.annotationId))
            );
          });
      })((p = n.CreateFile || (n.CreateFile = {}))),
      (function (e) {
        (e.create = function (e, n, t, i) {
          var r = { kind: "rename", oldUri: e, newUri: n };
          return (
            void 0 === t ||
              (void 0 === t.overwrite && void 0 === t.ignoreIfExists) ||
              (r.options = t),
            void 0 !== i && (r.annotationId = i),
            r
          );
        }),
          (e.is = function (e) {
            var n = e;
            return (
              n &&
              "rename" === n.kind &&
              A.string(n.oldUri) &&
              A.string(n.newUri) &&
              (void 0 === n.options ||
                ((void 0 === n.options.overwrite ||
                  A.boolean(n.options.overwrite)) &&
                  (void 0 === n.options.ignoreIfExists ||
                    A.boolean(n.options.ignoreIfExists)))) &&
              (void 0 === n.annotationId || l.is(n.annotationId))
            );
          });
      })((m = n.RenameFile || (n.RenameFile = {}))),
      (function (e) {
        (e.create = function (e, n, t) {
          var i = { kind: "delete", uri: e };
          return (
            void 0 === n ||
              (void 0 === n.recursive && void 0 === n.ignoreIfNotExists) ||
              (i.options = n),
            void 0 !== t && (i.annotationId = t),
            i
          );
        }),
          (e.is = function (e) {
            var n = e;
            return (
              n &&
              "delete" === n.kind &&
              A.string(n.uri) &&
              (void 0 === n.options ||
                ((void 0 === n.options.recursive ||
                  A.boolean(n.options.recursive)) &&
                  (void 0 === n.options.ignoreIfNotExists ||
                    A.boolean(n.options.ignoreIfNotExists)))) &&
              (void 0 === n.annotationId || l.is(n.annotationId))
            );
          });
      })((v = n.DeleteFile || (n.DeleteFile = {}))),
      (function (e) {
        e.is = function (e) {
          var n = e;
          return (
            n &&
            (void 0 !== n.changes || void 0 !== n.documentChanges) &&
            (void 0 === n.documentChanges ||
              n.documentChanges.every(function (e) {
                return A.string(e.kind)
                  ? p.is(e) || m.is(e) || v.is(e)
                  : h.is(e);
              }))
          );
        };
      })((y = n.WorkspaceEdit || (n.WorkspaceEdit = {})));
    var C,
      _,
      b,
      I,
      k = (function () {
        function e(e, n) {
          (this.edits = e), (this.changeAnnotations = n);
        }
        return (
          (e.prototype.insert = function (e, n, t) {
            var i, r;
            if (
              (void 0 === t
                ? (i = d.insert(e, n))
                : l.is(t)
                  ? ((r = t), (i = f.insert(e, n, t)))
                  : (this.assertChangeAnnotations(this.changeAnnotations),
                    (r = this.changeAnnotations.manage(t)),
                    (i = f.insert(e, n, r))),
              this.edits.push(i),
              void 0 !== r)
            )
              return r;
          }),
          (e.prototype.replace = function (e, n, t) {
            var i, r;
            if (
              (void 0 === t
                ? (i = d.replace(e, n))
                : l.is(t)
                  ? ((r = t), (i = f.replace(e, n, t)))
                  : (this.assertChangeAnnotations(this.changeAnnotations),
                    (r = this.changeAnnotations.manage(t)),
                    (i = f.replace(e, n, r))),
              this.edits.push(i),
              void 0 !== r)
            )
              return r;
          }),
          (e.prototype.delete = function (e, n) {
            var t, i;
            if (
              (void 0 === n
                ? (t = d.del(e))
                : l.is(n)
                  ? ((i = n), (t = f.del(e, n)))
                  : (this.assertChangeAnnotations(this.changeAnnotations),
                    (i = this.changeAnnotations.manage(n)),
                    (t = f.del(e, i))),
              this.edits.push(t),
              void 0 !== i)
            )
              return i;
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
      w = (function () {
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
          (e.prototype.manage = function (e, n) {
            var t;
            if (
              (l.is(e) ? (t = e) : ((t = this.nextId()), (n = e)),
              void 0 !== this._annotations[t])
            )
              throw new Error("Id " + t + " is already in use.");
            if (void 0 === n)
              throw new Error("No annotation provided for id " + t);
            return (this._annotations[t] = n), this._size++, t;
          }),
          (e.prototype.nextId = function () {
            return this._counter++, this._counter.toString();
          }),
          e
        );
      })(),
      x = (function () {
        function e(e) {
          var n = this;
          (this._textEditChanges = Object.create(null)),
            void 0 !== e
              ? ((this._workspaceEdit = e),
                e.documentChanges
                  ? ((this._changeAnnotations = new w(e.changeAnnotations)),
                    (e.changeAnnotations = this._changeAnnotations.all()),
                    e.documentChanges.forEach(function (e) {
                      if (h.is(e)) {
                        var t = new k(e.edits, n._changeAnnotations);
                        n._textEditChanges[e.textDocument.uri] = t;
                      }
                    }))
                  : e.changes &&
                    Object.keys(e.changes).forEach(function (t) {
                      var i = new k(e.changes[t]);
                      n._textEditChanges[t] = i;
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
            if (C.is(e)) {
              if (
                (this.initDocumentChanges(),
                void 0 === this._workspaceEdit.documentChanges)
              )
                throw new Error(
                  "Workspace edit is not configured for document changes.",
                );
              var n = { uri: e.uri, version: e.version };
              if (!(i = this._textEditChanges[n.uri])) {
                var t = { textDocument: n, edits: (r = []) };
                this._workspaceEdit.documentChanges.push(t),
                  (i = new k(r, this._changeAnnotations)),
                  (this._textEditChanges[n.uri] = i);
              }
              return i;
            }
            if ((this.initChanges(), void 0 === this._workspaceEdit.changes))
              throw new Error(
                "Workspace edit is not configured for normal text edit changes.",
              );
            var i;
            if (!(i = this._textEditChanges[e])) {
              var r = [];
              (this._workspaceEdit.changes[e] = r),
                (i = new k(r)),
                (this._textEditChanges[e] = i);
            }
            return i;
          }),
          (e.prototype.initDocumentChanges = function () {
            void 0 === this._workspaceEdit.documentChanges &&
              void 0 === this._workspaceEdit.changes &&
              ((this._changeAnnotations = new w()),
              (this._workspaceEdit.documentChanges = []),
              (this._workspaceEdit.changeAnnotations =
                this._changeAnnotations.all()));
          }),
          (e.prototype.initChanges = function () {
            void 0 === this._workspaceEdit.documentChanges &&
              void 0 === this._workspaceEdit.changes &&
              (this._workspaceEdit.changes = Object.create(null));
          }),
          (e.prototype.createFile = function (e, n, t) {
            if (
              (this.initDocumentChanges(),
              void 0 === this._workspaceEdit.documentChanges)
            )
              throw new Error(
                "Workspace edit is not configured for document changes.",
              );
            var i, r, o;
            if (
              (g.is(n) || l.is(n) ? (i = n) : (t = n),
              void 0 === i
                ? (r = p.create(e, t))
                : ((o = l.is(i) ? i : this._changeAnnotations.manage(i)),
                  (r = p.create(e, t, o))),
              this._workspaceEdit.documentChanges.push(r),
              void 0 !== o)
            )
              return o;
          }),
          (e.prototype.renameFile = function (e, n, t, i) {
            if (
              (this.initDocumentChanges(),
              void 0 === this._workspaceEdit.documentChanges)
            )
              throw new Error(
                "Workspace edit is not configured for document changes.",
              );
            var r, o, a;
            if (
              (g.is(t) || l.is(t) ? (r = t) : (i = t),
              void 0 === r
                ? (o = m.create(e, n, i))
                : ((a = l.is(r) ? r : this._changeAnnotations.manage(r)),
                  (o = m.create(e, n, i, a))),
              this._workspaceEdit.documentChanges.push(o),
              void 0 !== a)
            )
              return a;
          }),
          (e.prototype.deleteFile = function (e, n, t) {
            if (
              (this.initDocumentChanges(),
              void 0 === this._workspaceEdit.documentChanges)
            )
              throw new Error(
                "Workspace edit is not configured for document changes.",
              );
            var i, r, o;
            if (
              (g.is(n) || l.is(n) ? (i = n) : (t = n),
              void 0 === i
                ? (r = v.create(e, t))
                : ((o = l.is(i) ? i : this._changeAnnotations.manage(i)),
                  (r = v.create(e, t, o))),
              this._workspaceEdit.documentChanges.push(r),
              void 0 !== o)
            )
              return o;
          }),
          e
        );
      })();
    (n.WorkspaceChange = x),
      (function (e) {
        (e.create = function (e) {
          return { uri: e };
        }),
          (e.is = function (e) {
            var n = e;
            return A.defined(n) && A.string(n.uri);
          });
      })(n.TextDocumentIdentifier || (n.TextDocumentIdentifier = {})),
      (function (e) {
        (e.create = function (e, n) {
          return { uri: e, version: n };
        }),
          (e.is = function (e) {
            var n = e;
            return A.defined(n) && A.string(n.uri) && A.integer(n.version);
          });
      })(
        n.VersionedTextDocumentIdentifier ||
          (n.VersionedTextDocumentIdentifier = {}),
      ),
      (function (e) {
        (e.create = function (e, n) {
          return { uri: e, version: n };
        }),
          (e.is = function (e) {
            var n = e;
            return (
              A.defined(n) &&
              A.string(n.uri) &&
              (null === n.version || A.integer(n.version))
            );
          });
      })(
        (C =
          n.OptionalVersionedTextDocumentIdentifier ||
          (n.OptionalVersionedTextDocumentIdentifier = {})),
      ),
      (function (e) {
        (e.create = function (e, n, t, i) {
          return { uri: e, languageId: n, version: t, text: i };
        }),
          (e.is = function (e) {
            var n = e;
            return (
              A.defined(n) &&
              A.string(n.uri) &&
              A.string(n.languageId) &&
              A.integer(n.version) &&
              A.string(n.text)
            );
          });
      })(n.TextDocumentItem || (n.TextDocumentItem = {})),
      (function (e) {
        (e.PlainText = "plaintext"), (e.Markdown = "markdown");
      })((_ = n.MarkupKind || (n.MarkupKind = {}))),
      (function (e) {
        e.is = function (n) {
          var t = n;
          return t === e.PlainText || t === e.Markdown;
        };
      })((_ = n.MarkupKind || (n.MarkupKind = {}))),
      (function (e) {
        e.is = function (e) {
          var n = e;
          return A.objectLiteral(e) && _.is(n.kind) && A.string(n.value);
        };
      })((b = n.MarkupContent || (n.MarkupContent = {}))),
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
      })(n.CompletionItemKind || (n.CompletionItemKind = {})),
      (function (e) {
        (e.PlainText = 1), (e.Snippet = 2);
      })(n.InsertTextFormat || (n.InsertTextFormat = {})),
      (function (e) {
        e.Deprecated = 1;
      })(n.CompletionItemTag || (n.CompletionItemTag = {})),
      (function (e) {
        (e.create = function (e, n, t) {
          return { newText: e, insert: n, replace: t };
        }),
          (e.is = function (e) {
            var n = e;
            return (
              n && A.string(n.newText) && r.is(n.insert) && r.is(n.replace)
            );
          });
      })(n.InsertReplaceEdit || (n.InsertReplaceEdit = {})),
      (function (e) {
        (e.asIs = 1), (e.adjustIndentation = 2);
      })(n.InsertTextMode || (n.InsertTextMode = {})),
      (function (e) {
        e.create = function (e) {
          return { label: e };
        };
      })(n.CompletionItem || (n.CompletionItem = {})),
      (function (e) {
        e.create = function (e, n) {
          return { items: e || [], isIncomplete: !!n };
        };
      })(n.CompletionList || (n.CompletionList = {})),
      (function (e) {
        (e.fromPlainText = function (e) {
          return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
        }),
          (e.is = function (e) {
            var n = e;
            return (
              A.string(n) ||
              (A.objectLiteral(n) && A.string(n.language) && A.string(n.value))
            );
          });
      })((I = n.MarkedString || (n.MarkedString = {}))),
      (function (e) {
        e.is = function (e) {
          var n = e;
          return (
            !!n &&
            A.objectLiteral(n) &&
            (b.is(n.contents) ||
              I.is(n.contents) ||
              A.typedArray(n.contents, I.is)) &&
            (void 0 === e.range || r.is(e.range))
          );
        };
      })(n.Hover || (n.Hover = {})),
      (function (e) {
        e.create = function (e, n) {
          return n ? { label: e, documentation: n } : { label: e };
        };
      })(n.ParameterInformation || (n.ParameterInformation = {})),
      (function (e) {
        e.create = function (e, n) {
          for (var t = [], i = 2; i < arguments.length; i++)
            t[i - 2] = arguments[i];
          var r = { label: e };
          return (
            A.defined(n) && (r.documentation = n),
            A.defined(t) ? (r.parameters = t) : (r.parameters = []),
            r
          );
        };
      })(n.SignatureInformation || (n.SignatureInformation = {})),
      (function (e) {
        (e.Text = 1), (e.Read = 2), (e.Write = 3);
      })(n.DocumentHighlightKind || (n.DocumentHighlightKind = {})),
      (function (e) {
        e.create = function (e, n) {
          var t = { range: e };
          return A.number(n) && (t.kind = n), t;
        };
      })(n.DocumentHighlight || (n.DocumentHighlight = {})),
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
      })(n.SymbolKind || (n.SymbolKind = {})),
      (function (e) {
        e.Deprecated = 1;
      })(n.SymbolTag || (n.SymbolTag = {})),
      (function (e) {
        e.create = function (e, n, t, i, r) {
          var o = { name: e, kind: n, location: { uri: i, range: t } };
          return r && (o.containerName = r), o;
        };
      })(n.SymbolInformation || (n.SymbolInformation = {})),
      (function (e) {
        (e.create = function (e, n, t, i, r, o) {
          var a = { name: e, detail: n, kind: t, range: i, selectionRange: r };
          return void 0 !== o && (a.children = o), a;
        }),
          (e.is = function (e) {
            var n = e;
            return (
              n &&
              A.string(n.name) &&
              A.number(n.kind) &&
              r.is(n.range) &&
              r.is(n.selectionRange) &&
              (void 0 === n.detail || A.string(n.detail)) &&
              (void 0 === n.deprecated || A.boolean(n.deprecated)) &&
              (void 0 === n.children || Array.isArray(n.children)) &&
              (void 0 === n.tags || Array.isArray(n.tags))
            );
          });
      })(n.DocumentSymbol || (n.DocumentSymbol = {})),
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
      })(n.CodeActionKind || (n.CodeActionKind = {})),
      (function (e) {
        (e.create = function (e, n) {
          var t = { diagnostics: e };
          return null != n && (t.only = n), t;
        }),
          (e.is = function (e) {
            var n = e;
            return (
              A.defined(n) &&
              A.typedArray(n.diagnostics, u.is) &&
              (void 0 === n.only || A.typedArray(n.only, A.string))
            );
          });
      })(n.CodeActionContext || (n.CodeActionContext = {})),
      (function (e) {
        (e.create = function (e, n, t) {
          var i = { title: e },
            r = !0;
          return (
            "string" == typeof n
              ? ((r = !1), (i.kind = n))
              : c.is(n)
                ? (i.command = n)
                : (i.edit = n),
            r && void 0 !== t && (i.kind = t),
            i
          );
        }),
          (e.is = function (e) {
            var n = e;
            return (
              n &&
              A.string(n.title) &&
              (void 0 === n.diagnostics || A.typedArray(n.diagnostics, u.is)) &&
              (void 0 === n.kind || A.string(n.kind)) &&
              (void 0 !== n.edit || void 0 !== n.command) &&
              (void 0 === n.command || c.is(n.command)) &&
              (void 0 === n.isPreferred || A.boolean(n.isPreferred)) &&
              (void 0 === n.edit || y.is(n.edit))
            );
          });
      })(n.CodeAction || (n.CodeAction = {})),
      (function (e) {
        (e.create = function (e, n) {
          var t = { range: e };
          return A.defined(n) && (t.data = n), t;
        }),
          (e.is = function (e) {
            var n = e;
            return (
              A.defined(n) &&
              r.is(n.range) &&
              (A.undefined(n.command) || c.is(n.command))
            );
          });
      })(n.CodeLens || (n.CodeLens = {})),
      (function (e) {
        (e.create = function (e, n) {
          return { tabSize: e, insertSpaces: n };
        }),
          (e.is = function (e) {
            var n = e;
            return (
              A.defined(n) && A.uinteger(n.tabSize) && A.boolean(n.insertSpaces)
            );
          });
      })(n.FormattingOptions || (n.FormattingOptions = {})),
      (function (e) {
        (e.create = function (e, n, t) {
          return { range: e, target: n, data: t };
        }),
          (e.is = function (e) {
            var n = e;
            return (
              A.defined(n) &&
              r.is(n.range) &&
              (A.undefined(n.target) || A.string(n.target))
            );
          });
      })(n.DocumentLink || (n.DocumentLink = {})),
      (function (e) {
        (e.create = function (e, n) {
          return { range: e, parent: n };
        }),
          (e.is = function (n) {
            var t = n;
            return (
              void 0 !== t &&
              r.is(t.range) &&
              (void 0 === t.parent || e.is(t.parent))
            );
          });
      })(n.SelectionRange || (n.SelectionRange = {})),
      (n.EOL = ["\n", "\r\n", "\r"]),
      (function (e) {
        function n(e, t) {
          if (e.length <= 1) return e;
          var i = (e.length / 2) | 0,
            r = e.slice(0, i),
            o = e.slice(i);
          n(r, t), n(o, t);
          for (var a = 0, s = 0, u = 0; a < r.length && s < o.length; ) {
            var c = t(r[a], o[s]);
            e[u++] = c <= 0 ? r[a++] : o[s++];
          }
          for (; a < r.length; ) e[u++] = r[a++];
          for (; s < o.length; ) e[u++] = o[s++];
          return e;
        }
        (e.create = function (e, n, t, i) {
          return new E(e, n, t, i);
        }),
          (e.is = function (e) {
            var n = e;
            return !!(
              A.defined(n) &&
              A.string(n.uri) &&
              (A.undefined(n.languageId) || A.string(n.languageId)) &&
              A.uinteger(n.lineCount) &&
              A.func(n.getText) &&
              A.func(n.positionAt) &&
              A.func(n.offsetAt)
            );
          }),
          (e.applyEdits = function (e, t) {
            for (
              var i = e.getText(),
                r = n(t, function (e, n) {
                  var t = e.range.start.line - n.range.start.line;
                  return 0 === t
                    ? e.range.start.character - n.range.start.character
                    : t;
                }),
                o = i.length,
                a = r.length - 1;
              a >= 0;
              a--
            ) {
              var s = r[a],
                u = e.offsetAt(s.range.start),
                c = e.offsetAt(s.range.end);
              if (!(c <= o)) throw new Error("Overlapping edit");
              (i = i.substring(0, u) + s.newText + i.substring(c, i.length)),
                (o = u);
            }
            return i;
          });
      })(n.TextDocument || (n.TextDocument = {}));
    var A,
      E = (function () {
        function e(e, n, t, i) {
          (this._uri = e),
            (this._languageId = n),
            (this._version = t),
            (this._content = i),
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
              var n = this.offsetAt(e.start),
                t = this.offsetAt(e.end);
              return this._content.substring(n, t);
            }
            return this._content;
          }),
          (e.prototype.update = function (e, n) {
            (this._content = e.text),
              (this._version = n),
              (this._lineOffsets = void 0);
          }),
          (e.prototype.getLineOffsets = function () {
            if (void 0 === this._lineOffsets) {
              for (
                var e = [], n = this._content, t = !0, i = 0;
                i < n.length;
                i++
              ) {
                t && (e.push(i), (t = !1));
                var r = n.charAt(i);
                (t = "\r" === r || "\n" === r),
                  "\r" === r &&
                    i + 1 < n.length &&
                    "\n" === n.charAt(i + 1) &&
                    i++;
              }
              t && n.length > 0 && e.push(n.length), (this._lineOffsets = e);
            }
            return this._lineOffsets;
          }),
          (e.prototype.positionAt = function (e) {
            e = Math.max(Math.min(e, this._content.length), 0);
            var n = this.getLineOffsets(),
              t = 0,
              r = n.length;
            if (0 === r) return i.create(0, e);
            for (; t < r; ) {
              var o = Math.floor((t + r) / 2);
              n[o] > e ? (r = o) : (t = o + 1);
            }
            var a = t - 1;
            return i.create(a, e - n[a]);
          }),
          (e.prototype.offsetAt = function (e) {
            var n = this.getLineOffsets();
            if (e.line >= n.length) return this._content.length;
            if (e.line < 0) return 0;
            var t = n[e.line],
              i = e.line + 1 < n.length ? n[e.line + 1] : this._content.length;
            return Math.max(Math.min(t + e.character, i), t);
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
      var n = Object.prototype.toString;
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
          return "[object String]" === n.call(e);
        }),
        (e.number = function (e) {
          return "[object Number]" === n.call(e);
        }),
        (e.numberRange = function (e, t, i) {
          return "[object Number]" === n.call(e) && t <= e && e <= i;
        }),
        (e.integer = function (e) {
          return (
            "[object Number]" === n.call(e) &&
            -2147483648 <= e &&
            e <= 2147483647
          );
        }),
        (e.uinteger = function (e) {
          return "[object Number]" === n.call(e) && 0 <= e && e <= 2147483647;
        }),
        (e.func = function (e) {
          return "[object Function]" === n.call(e);
        }),
        (e.objectLiteral = function (e) {
          return null !== e && "object" == typeof e;
        }),
        (e.typedArray = function (e, n) {
          return Array.isArray(e) && e.every(n);
        });
    })(A || (A = {}));
  }),
  define(
    "vscode-languageserver-types",
    ["vscode-languageserver-types/main"],
    function (e) {
      return e;
    },
  ),
  define(
    "vs/language/css/languageFeatures",
    [
      "require",
      "exports",
      "vscode-languageserver-types",
      "./fillers/monaco-editor-core",
    ],
    function (e, n, t, i) {
      "use strict";
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.SelectionRangeAdapter =
          n.FoldingRangeAdapter =
          n.DocumentColorAdapter =
          n.DocumentSymbolAdapter =
          n.RenameAdapter =
          n.ReferenceAdapter =
          n.DefinitionAdapter =
          n.DocumentHighlightAdapter =
          n.HoverAdapter =
          n.CompletionAdapter =
          n.DiagnosticsAdapter =
            void 0);
      var r = (function () {
        function e(e, n, t) {
          var r = this;
          (this._languageId = e),
            (this._worker = n),
            (this._disposables = []),
            (this._listener = Object.create(null));
          var o = function (e) {
              var n,
                t = e.getLanguageId();
              t === r._languageId &&
                ((r._listener[e.uri.toString()] = e.onDidChangeContent(
                  function () {
                    window.clearTimeout(n),
                      (n = window.setTimeout(function () {
                        return r._doValidate(e.uri, t);
                      }, 500));
                  },
                )),
                r._doValidate(e.uri, t));
            },
            a = function (e) {
              i.editor.setModelMarkers(e, r._languageId, []);
              var n = e.uri.toString(),
                t = r._listener[n];
              t && (t.dispose(), delete r._listener[n]);
            };
          this._disposables.push(i.editor.onDidCreateModel(o)),
            this._disposables.push(i.editor.onWillDisposeModel(a)),
            this._disposables.push(
              i.editor.onDidChangeModelLanguage(function (e) {
                a(e.model), o(e.model);
              }),
            ),
            t.onDidChange(function (e) {
              i.editor.getModels().forEach(function (e) {
                e.getLanguageId() === r._languageId && (a(e), o(e));
              });
            }),
            this._disposables.push({
              dispose: function () {
                for (var e in r._listener) r._listener[e].dispose();
              },
            }),
            i.editor.getModels().forEach(o);
        }
        return (
          (e.prototype.dispose = function () {
            this._disposables.forEach(function (e) {
              return e && e.dispose();
            }),
              (this._disposables = []);
          }),
          (e.prototype._doValidate = function (e, n) {
            this._worker(e)
              .then(function (n) {
                return n.doValidation(e.toString());
              })
              .then(function (t) {
                var r = t.map(function (e) {
                    return (
                      (t =
                        "number" == typeof (n = e).code
                          ? String(n.code)
                          : n.code),
                      {
                        severity: o(n.severity),
                        startLineNumber: n.range.start.line + 1,
                        startColumn: n.range.start.character + 1,
                        endLineNumber: n.range.end.line + 1,
                        endColumn: n.range.end.character + 1,
                        message: n.message,
                        code: t,
                        source: n.source,
                      }
                    );
                    var n, t;
                  }),
                  a = i.editor.getModel(e);
                a &&
                  a.getLanguageId() === n &&
                  i.editor.setModelMarkers(a, n, r);
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
          case t.DiagnosticSeverity.Error:
            return i.MarkerSeverity.Error;
          case t.DiagnosticSeverity.Warning:
            return i.MarkerSeverity.Warning;
          case t.DiagnosticSeverity.Information:
            return i.MarkerSeverity.Info;
          case t.DiagnosticSeverity.Hint:
            return i.MarkerSeverity.Hint;
          default:
            return i.MarkerSeverity.Info;
        }
      }
      function a(e) {
        if (e) return { character: e.column - 1, line: e.lineNumber - 1 };
      }
      function s(e) {
        if (e)
          return new i.Range(
            e.start.line + 1,
            e.start.character + 1,
            e.end.line + 1,
            e.end.character + 1,
          );
      }
      function u(e) {
        var n = i.languages.CompletionItemKind;
        switch (e) {
          case t.CompletionItemKind.Text:
            return n.Text;
          case t.CompletionItemKind.Method:
            return n.Method;
          case t.CompletionItemKind.Function:
            return n.Function;
          case t.CompletionItemKind.Constructor:
            return n.Constructor;
          case t.CompletionItemKind.Field:
            return n.Field;
          case t.CompletionItemKind.Variable:
            return n.Variable;
          case t.CompletionItemKind.Class:
            return n.Class;
          case t.CompletionItemKind.Interface:
            return n.Interface;
          case t.CompletionItemKind.Module:
            return n.Module;
          case t.CompletionItemKind.Property:
            return n.Property;
          case t.CompletionItemKind.Unit:
            return n.Unit;
          case t.CompletionItemKind.Value:
            return n.Value;
          case t.CompletionItemKind.Enum:
            return n.Enum;
          case t.CompletionItemKind.Keyword:
            return n.Keyword;
          case t.CompletionItemKind.Snippet:
            return n.Snippet;
          case t.CompletionItemKind.Color:
            return n.Color;
          case t.CompletionItemKind.File:
            return n.File;
          case t.CompletionItemKind.Reference:
            return n.Reference;
        }
        return n.Property;
      }
      function c(e) {
        if (e) return { range: s(e.range), text: e.newText };
      }
      n.DiagnosticsAdapter = r;
      var d = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          Object.defineProperty(e.prototype, "triggerCharacters", {
            get: function () {
              return ["/", "-", ":"];
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.provideCompletionItems = function (e, n, r, o) {
            var d = e.uri;
            return this._worker(d)
              .then(function (e) {
                return e.doComplete(d.toString(), a(n));
              })
              .then(function (r) {
                if (r) {
                  var o = e.getWordUntilPosition(n),
                    a = new i.Range(
                      n.lineNumber,
                      o.startColumn,
                      n.lineNumber,
                      o.endColumn,
                    ),
                    d = r.items.map(function (e) {
                      var n,
                        r,
                        o = {
                          label: e.label,
                          insertText: e.insertText || e.label,
                          sortText: e.sortText,
                          filterText: e.filterText,
                          documentation: e.documentation,
                          detail: e.detail,
                          command:
                            ((n = e.command),
                            n && "editor.action.triggerSuggest" === n.command
                              ? {
                                  id: n.command,
                                  title: n.title,
                                  arguments: n.arguments,
                                }
                              : void 0),
                          range: a,
                          kind: u(e.kind),
                        };
                      return (
                        e.textEdit &&
                          (void 0 !== (r = e.textEdit).insert &&
                          void 0 !== r.replace
                            ? (o.range = {
                                insert: s(e.textEdit.insert),
                                replace: s(e.textEdit.replace),
                              })
                            : (o.range = s(e.textEdit.range)),
                          (o.insertText = e.textEdit.newText)),
                        e.additionalTextEdits &&
                          (o.additionalTextEdits =
                            e.additionalTextEdits.map(c)),
                        e.insertTextFormat === t.InsertTextFormat.Snippet &&
                          (o.insertTextRules =
                            i.languages.CompletionItemInsertTextRule.InsertAsSnippet),
                        o
                      );
                    });
                  return { isIncomplete: r.isIncomplete, suggestions: d };
                }
              });
          }),
          e
        );
      })();
      function g(e) {
        return "string" == typeof e
          ? { value: e }
          : (n = e) && "object" == typeof n && "string" == typeof n.kind
            ? "plaintext" === e.kind
              ? { value: e.value.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&") }
              : { value: e.value }
            : { value: "```" + e.language + "\n" + e.value + "\n```\n" };
        var n;
      }
      function l(e) {
        if (e) return Array.isArray(e) ? e.map(g) : [g(e)];
      }
      n.CompletionAdapter = d;
      var f = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideHover = function (e, n, t) {
            var i = e.uri;
            return this._worker(i)
              .then(function (e) {
                return e.doHover(i.toString(), a(n));
              })
              .then(function (e) {
                if (e) return { range: s(e.range), contents: l(e.contents) };
              });
          }),
          e
        );
      })();
      function h(e) {
        switch (e) {
          case t.DocumentHighlightKind.Read:
            return i.languages.DocumentHighlightKind.Read;
          case t.DocumentHighlightKind.Write:
            return i.languages.DocumentHighlightKind.Write;
          case t.DocumentHighlightKind.Text:
            return i.languages.DocumentHighlightKind.Text;
        }
        return i.languages.DocumentHighlightKind.Text;
      }
      n.HoverAdapter = f;
      var p = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideDocumentHighlights = function (e, n, t) {
            var i = e.uri;
            return this._worker(i)
              .then(function (e) {
                return e.findDocumentHighlights(i.toString(), a(n));
              })
              .then(function (e) {
                if (e)
                  return e.map(function (e) {
                    return { range: s(e.range), kind: h(e.kind) };
                  });
              });
          }),
          e
        );
      })();
      function m(e) {
        return { uri: i.Uri.parse(e.uri), range: s(e.range) };
      }
      n.DocumentHighlightAdapter = p;
      var v = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideDefinition = function (e, n, t) {
            var i = e.uri;
            return this._worker(i)
              .then(function (e) {
                return e.findDefinition(i.toString(), a(n));
              })
              .then(function (e) {
                if (e) return [m(e)];
              });
          }),
          e
        );
      })();
      n.DefinitionAdapter = v;
      var y = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideReferences = function (e, n, t, i) {
            var r = e.uri;
            return this._worker(r)
              .then(function (e) {
                return e.findReferences(r.toString(), a(n));
              })
              .then(function (e) {
                if (e) return e.map(m);
              });
          }),
          e
        );
      })();
      n.ReferenceAdapter = y;
      var C = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideRenameEdits = function (e, n, t, r) {
            var o = e.uri;
            return this._worker(o)
              .then(function (e) {
                return e.doRename(o.toString(), a(n), t);
              })
              .then(function (e) {
                return (function (e) {
                  if (e && e.changes) {
                    var n = [];
                    for (var t in e.changes)
                      for (
                        var r = i.Uri.parse(t), o = 0, a = e.changes[t];
                        o < a.length;
                        o++
                      ) {
                        var u = a[o];
                        n.push({
                          resource: r,
                          edit: { range: s(u.range), text: u.newText },
                        });
                      }
                    return { edits: n };
                  }
                })(e);
              });
          }),
          e
        );
      })();
      function _(e) {
        var n = i.languages.SymbolKind;
        switch (e) {
          case t.SymbolKind.File:
            return n.Array;
          case t.SymbolKind.Module:
            return n.Module;
          case t.SymbolKind.Namespace:
            return n.Namespace;
          case t.SymbolKind.Package:
            return n.Package;
          case t.SymbolKind.Class:
            return n.Class;
          case t.SymbolKind.Method:
            return n.Method;
          case t.SymbolKind.Property:
            return n.Property;
          case t.SymbolKind.Field:
            return n.Field;
          case t.SymbolKind.Constructor:
            return n.Constructor;
          case t.SymbolKind.Enum:
            return n.Enum;
          case t.SymbolKind.Interface:
            return n.Interface;
          case t.SymbolKind.Function:
            return n.Function;
          case t.SymbolKind.Variable:
            return n.Variable;
          case t.SymbolKind.Constant:
            return n.Constant;
          case t.SymbolKind.String:
            return n.String;
          case t.SymbolKind.Number:
            return n.Number;
          case t.SymbolKind.Boolean:
            return n.Boolean;
          case t.SymbolKind.Array:
            return n.Array;
        }
        return n.Function;
      }
      n.RenameAdapter = C;
      var b = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideDocumentSymbols = function (e, n) {
            var t = e.uri;
            return this._worker(t)
              .then(function (e) {
                return e.findDocumentSymbols(t.toString());
              })
              .then(function (e) {
                if (e)
                  return e.map(function (e) {
                    return {
                      name: e.name,
                      detail: "",
                      containerName: e.containerName,
                      kind: _(e.kind),
                      tags: [],
                      range: s(e.location.range),
                      selectionRange: s(e.location.range),
                    };
                  });
              });
          }),
          e
        );
      })();
      n.DocumentSymbolAdapter = b;
      var I = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideDocumentColors = function (e, n) {
            var t = e.uri;
            return this._worker(t)
              .then(function (e) {
                return e.findDocumentColors(t.toString());
              })
              .then(function (e) {
                if (e)
                  return e.map(function (e) {
                    return { color: e.color, range: s(e.range) };
                  });
              });
          }),
          (e.prototype.provideColorPresentations = function (e, n, t) {
            var i = e.uri;
            return this._worker(i)
              .then(function (e) {
                return e.getColorPresentations(
                  i.toString(),
                  n.color,
                  (function (e) {
                    if (e)
                      return {
                        start: {
                          line: e.startLineNumber - 1,
                          character: e.startColumn - 1,
                        },
                        end: {
                          line: e.endLineNumber - 1,
                          character: e.endColumn - 1,
                        },
                      };
                  })(n.range),
                );
              })
              .then(function (e) {
                if (e)
                  return e.map(function (e) {
                    var n = { label: e.label };
                    return (
                      e.textEdit && (n.textEdit = c(e.textEdit)),
                      e.additionalTextEdits &&
                        (n.additionalTextEdits = e.additionalTextEdits.map(c)),
                      n
                    );
                  });
              });
          }),
          e
        );
      })();
      n.DocumentColorAdapter = I;
      var k = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideFoldingRanges = function (e, n, r) {
            var o = e.uri;
            return this._worker(o)
              .then(function (e) {
                return e.getFoldingRanges(o.toString(), n);
              })
              .then(function (e) {
                if (e)
                  return e.map(function (e) {
                    var n = { start: e.startLine + 1, end: e.endLine + 1 };
                    return (
                      void 0 !== e.kind &&
                        (n.kind = (function (e) {
                          switch (e) {
                            case t.FoldingRangeKind.Comment:
                              return i.languages.FoldingRangeKind.Comment;
                            case t.FoldingRangeKind.Imports:
                              return i.languages.FoldingRangeKind.Imports;
                            case t.FoldingRangeKind.Region:
                              return i.languages.FoldingRangeKind.Region;
                          }
                        })(e.kind)),
                      n
                    );
                  });
              });
          }),
          e
        );
      })();
      n.FoldingRangeAdapter = k;
      var w = (function () {
        function e(e) {
          this._worker = e;
        }
        return (
          (e.prototype.provideSelectionRanges = function (e, n, t) {
            var i = e.uri;
            return this._worker(i)
              .then(function (e) {
                return e.getSelectionRanges(i.toString(), n.map(a));
              })
              .then(function (e) {
                if (e)
                  return e.map(function (e) {
                    for (var n = []; e; )
                      n.push({ range: s(e.range) }), (e = e.parent);
                    return n;
                  });
              });
          }),
          e
        );
      })();
      n.SelectionRangeAdapter = w;
    },
  ),
  define(
    "vs/language/css/cssMode",
    [
      "require",
      "exports",
      "./workerManager",
      "./languageFeatures",
      "./fillers/monaco-editor-core",
    ],
    function (e, n, t, i, r) {
      "use strict";
      function o(e) {
        return {
          dispose: function () {
            return a(e);
          },
        };
      }
      function a(e) {
        for (; e.length; ) e.pop().dispose();
      }
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.setupMode = void 0),
        (n.setupMode = function (e) {
          var n = [],
            s = [],
            u = new t.WorkerManager(e);
          n.push(u);
          var c,
            d,
            g = function () {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              return u.getLanguageServiceWorker.apply(u, e);
            };
          return (
            (c = e.languageId),
            (d = e.modeConfiguration),
            a(s),
            d.completionItems &&
              s.push(
                r.languages.registerCompletionItemProvider(
                  c,
                  new i.CompletionAdapter(g),
                ),
              ),
            d.hovers &&
              s.push(
                r.languages.registerHoverProvider(c, new i.HoverAdapter(g)),
              ),
            d.documentHighlights &&
              s.push(
                r.languages.registerDocumentHighlightProvider(
                  c,
                  new i.DocumentHighlightAdapter(g),
                ),
              ),
            d.definitions &&
              s.push(
                r.languages.registerDefinitionProvider(
                  c,
                  new i.DefinitionAdapter(g),
                ),
              ),
            d.references &&
              s.push(
                r.languages.registerReferenceProvider(
                  c,
                  new i.ReferenceAdapter(g),
                ),
              ),
            d.documentSymbols &&
              s.push(
                r.languages.registerDocumentSymbolProvider(
                  c,
                  new i.DocumentSymbolAdapter(g),
                ),
              ),
            d.rename &&
              s.push(
                r.languages.registerRenameProvider(c, new i.RenameAdapter(g)),
              ),
            d.colors &&
              s.push(
                r.languages.registerColorProvider(
                  c,
                  new i.DocumentColorAdapter(g),
                ),
              ),
            d.foldingRanges &&
              s.push(
                r.languages.registerFoldingRangeProvider(
                  c,
                  new i.FoldingRangeAdapter(g),
                ),
              ),
            d.diagnostics && s.push(new i.DiagnosticsAdapter(c, g, e)),
            d.selectionRanges &&
              s.push(
                r.languages.registerSelectionRangeProvider(
                  c,
                  new i.SelectionRangeAdapter(g),
                ),
              ),
            n.push(o(s)),
            o(n)
          );
        });
    },
  );
