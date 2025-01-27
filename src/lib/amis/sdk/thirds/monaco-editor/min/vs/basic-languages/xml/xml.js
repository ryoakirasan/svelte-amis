/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 0.30.1(5a7ba61be909ae9e4889768a3453ebb0dec392e2)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/xml/xml", [
  "require",
  "exports",
  "../fillers/monaco-editor-core",
], function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.language = t.conf = void 0),
    (t.conf = {
      comments: { blockComment: ["\x3c!--", "--\x3e"] },
      brackets: [["<", ">"]],
      autoClosingPairs: [
        { open: "<", close: ">" },
        { open: "'", close: "'" },
        { open: '"', close: '"' },
      ],
      surroundingPairs: [
        { open: "<", close: ">" },
        { open: "'", close: "'" },
        { open: '"', close: '"' },
      ],
      onEnterRules: [
        {
          beforeText: new RegExp(
            "<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$",
            "i",
          ),
          afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
          action: { indentAction: n.languages.IndentAction.IndentOutdent },
        },
        {
          beforeText: new RegExp("<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", "i"),
          action: { indentAction: n.languages.IndentAction.Indent },
        },
      ],
    }),
    (t.language = {
      defaultToken: "",
      tokenPostfix: ".xml",
      ignoreCase: !0,
      qualifiedName: /(?:[\w\.\-]+:)?[\w\.\-]+/,
      tokenizer: {
        root: [
          [/[^<&]+/, ""],
          { include: "@whitespace" },
          [
            /(<)(@qualifiedName)/,
            [{ token: "delimiter" }, { token: "tag", next: "@tag" }],
          ],
          [
            /(<\/)(@qualifiedName)(\s*)(>)/,
            [
              { token: "delimiter" },
              { token: "tag" },
              "",
              { token: "delimiter" },
            ],
          ],
          [
            /(<\?)(@qualifiedName)/,
            [{ token: "delimiter" }, { token: "metatag", next: "@tag" }],
          ],
          [
            /(<\!)(@qualifiedName)/,
            [{ token: "delimiter" }, { token: "metatag", next: "@tag" }],
          ],
          [/<\!\[CDATA\[/, { token: "delimiter.cdata", next: "@cdata" }],
          [/&\w+;/, "string.escape"],
        ],
        cdata: [
          [/[^\]]+/, ""],
          [/\]\]>/, { token: "delimiter.cdata", next: "@pop" }],
          [/\]/, ""],
        ],
        tag: [
          [/[ \t\r\n]+/, ""],
          [
            /(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,
            ["attribute.name", "", "attribute.value"],
          ],
          [
            /(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,
            ["attribute.name", "", "attribute.value"],
          ],
          [
            /(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,
            ["attribute.name", "", "attribute.value"],
          ],
          [/@qualifiedName/, "attribute.name"],
          [/\?>/, { token: "delimiter", next: "@pop" }],
          [/(\/)(>)/, [{ token: "tag" }, { token: "delimiter", next: "@pop" }]],
          [/>/, { token: "delimiter", next: "@pop" }],
        ],
        whitespace: [
          [/[ \t\r\n]+/, ""],
          [/<!--/, { token: "comment", next: "@comment" }],
        ],
        comment: [
          [/[^<\-]+/, "comment.content"],
          [/-->/, { token: "comment", next: "@pop" }],
          [/<!--/, "comment.content.invalid"],
          [/[<\-]/, "comment.content"],
        ],
      },
    });
});
