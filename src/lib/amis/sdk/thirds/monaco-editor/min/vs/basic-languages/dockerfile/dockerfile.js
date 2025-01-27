/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * monaco-languages version: 0.30.1(5a7ba61be909ae9e4889768a3453ebb0dec392e2)
 * Released under the MIT license
 * https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
 *-----------------------------------------------------------------------------*/
define("vs/basic-languages/dockerfile/dockerfile", [
  "require",
  "exports",
], function (e, o) {
  "use strict";
  Object.defineProperty(o, "__esModule", { value: !0 }),
    (o.language = o.conf = void 0),
    (o.conf = {
      brackets: [
        ["{", "}"],
        ["[", "]"],
        ["(", ")"],
      ],
      autoClosingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
      ],
      surroundingPairs: [
        { open: "{", close: "}" },
        { open: "[", close: "]" },
        { open: "(", close: ")" },
        { open: '"', close: '"' },
        { open: "'", close: "'" },
      ],
    }),
    (o.language = {
      defaultToken: "",
      tokenPostfix: ".dockerfile",
      variable: /\${?[\w]+}?/,
      tokenizer: {
        root: [
          { include: "@whitespace" },
          { include: "@comment" },
          [/(ONBUILD)(\s+)/, ["keyword", ""]],
          [
            /(ENV)(\s+)([\w]+)/,
            ["keyword", "", { token: "variable", next: "@arguments" }],
          ],
          [
            /(FROM|MAINTAINER|RUN|EXPOSE|ENV|ADD|ARG|VOLUME|LABEL|USER|WORKDIR|COPY|CMD|STOPSIGNAL|SHELL|HEALTHCHECK|ENTRYPOINT)/,
            { token: "keyword", next: "@arguments" },
          ],
        ],
        arguments: [
          { include: "@whitespace" },
          { include: "@strings" },
          [
            /(@variable)/,
            {
              cases: {
                "@eos": { token: "variable", next: "@popall" },
                "@default": "variable",
              },
            },
          ],
          [/\\/, { cases: { "@eos": "", "@default": "" } }],
          [
            /./,
            {
              cases: { "@eos": { token: "", next: "@popall" }, "@default": "" },
            },
          ],
        ],
        whitespace: [
          [
            /\s+/,
            {
              cases: { "@eos": { token: "", next: "@popall" }, "@default": "" },
            },
          ],
        ],
        comment: [[/(^#.*$)/, "comment", "@popall"]],
        strings: [
          [/\\'$/, "", "@popall"],
          [/\\'/, ""],
          [/'$/, "string", "@popall"],
          [/'/, "string", "@stringBody"],
          [/"$/, "string", "@popall"],
          [/"/, "string", "@dblStringBody"],
        ],
        stringBody: [
          [
            /[^\\\$']/,
            {
              cases: {
                "@eos": { token: "string", next: "@popall" },
                "@default": "string",
              },
            },
          ],
          [/\\./, "string.escape"],
          [/'$/, "string", "@popall"],
          [/'/, "string", "@pop"],
          [/(@variable)/, "variable"],
          [/\\$/, "string"],
          [/$/, "string", "@popall"],
        ],
        dblStringBody: [
          [
            /[^\\\$"]/,
            {
              cases: {
                "@eos": { token: "string", next: "@popall" },
                "@default": "string",
              },
            },
          ],
          [/\\./, "string.escape"],
          [/"$/, "string", "@popall"],
          [/"/, "string", "@pop"],
          [/(@variable)/, "variable"],
          [/\\$/, "string"],
          [/$/, "string", "@popall"],
        ],
      },
    });
});
