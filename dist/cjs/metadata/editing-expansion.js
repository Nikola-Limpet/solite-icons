"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var editing_expansion_exports = {};
__export(editing_expansion_exports, {
  editingExpansionMetadata: () => editingExpansionMetadata
});
module.exports = __toCommonJS(editing_expansion_exports);
var import_category = require("./category.js");
const editingExpansionMetadata = {
  ...(0, import_category.taggedCategory)("Text formatting", {
    bold: ["text", "strong", "emphasis", "weight", "editor"],
    italic: ["text", "emphasis", "slanted", "oblique", "editor"],
    underline: ["text", "decoration", "emphasis", "baseline", "editor"],
    strikethrough: ["text", "strike", "cross-out", "deleted", "decoration"],
    heading: ["text", "title", "headline", "h1", "block-style"],
    subscript: ["text", "lowered", "chemistry", "formula", "index"],
    superscript: ["text", "raised", "exponent", "power", "formula"],
    "small-caps": ["text", "typography", "capitals", "font-variant", "letter-case"],
    "text-direction-ltr": ["text", "left-to-right", "ltr", "bidi", "paragraph-direction"],
    "case-upper": ["text", "uppercase", "capital-letters", "all-caps", "transform"],
    "case-lower": ["text", "lowercase", "small-letters", "letter-case", "transform"],
    "case-title": ["text", "title-case", "capitalize", "word-initials", "transform"]
  }),
  ...(0, import_category.taggedCategory)("Text alignment", {
    "align-left": ["text", "paragraph", "flush-left", "alignment", "ragged-right"],
    "align-center": ["text", "paragraph", "centered", "alignment", "justify-center"],
    "align-right": ["text", "paragraph", "flush-right", "alignment", "ragged-left"],
    "align-justify": ["text", "paragraph", "justified", "alignment", "full-width"],
    "indent-increase": ["text", "paragraph", "indent", "tab", "nest"],
    "indent-decrease": ["text", "paragraph", "outdent", "unindent", "unnest"]
  }),
  ...(0, import_category.taggedCategory)("Text formatting", {
    "line-height": ["text", "leading", "line-spacing", "baseline", "typography"],
    "letter-spacing": ["text", "tracking", "kerning", "character-spacing", "typography"],
    "text-color": ["text", "foreground", "font-color", "swatch", "typography"],
    highlighter: ["text", "marker", "highlight", "background-color", "annotation"],
    "remove-formatting": ["text", "clear-formatting", "plain-text", "reset-style", "erase-style"],
    paragraph: ["text", "pilcrow", "paragraph-mark", "invisibles", "formatting-marks"],
    quote: ["text", "quotation", "blockquote", "citation", "excerpt"],
    "text-wrap": ["text", "word-wrap", "soft-wrap", "line-wrap", "editor-width"],
    "word-break": ["text", "break-word", "overflow-wrap", "split-word", "line-breaking"],
    "text-hyphenation": ["text", "hyphen", "hyphenate", "syllable", "line-ending"],
    "paragraph-spacing": ["text", "paragraph-gap", "space-before", "space-after", "leading"]
  }),
  ...(0, import_category.taggedCategory)("Text alignment", {
    "text-align-top": ["text", "vertical-alignment", "top", "frame", "block-position"],
    "text-align-middle": ["text", "vertical-alignment", "middle", "center-vertically", "frame"],
    "text-align-bottom": ["text", "vertical-alignment", "bottom", "frame", "block-position"]
  }),
  ...(0, import_category.taggedCategory)("Document editing", {
    scissors: ["cut", "trim", "selection", "clipboard", "split"],
    eraser: ["erase", "rubber", "remove-stroke", "drawing", "annotation"],
    "spell-check": ["spelling", "proofread", "grammar", "dictionary", "correct"],
    "find-replace": ["search", "replace", "substitute", "matching-text", "editor"],
    "file-diff": ["document", "difference", "addition", "deletion", "patch"],
    "file-code": ["document", "source-file", "program", "markup", "script"],
    "word-count": ["text", "statistics", "word-total", "character-count", "length"],
    "page-break": ["document", "pagination", "new-page", "print", "separator"],
    "page-number": ["document", "pagination", "folio", "numbering", "print"],
    "page-margin": ["document", "inset", "print-area", "gutter", "page-setup"],
    "page-size": ["document", "paper-size", "dimensions", "a4", "page-setup"],
    footnote: ["document", "reference", "citation", "endnote", "annotation"],
    "track-changes": ["document", "revision", "review", "suggestion", "edit-history"],
    "sticky-note": ["annotation", "memo", "reminder", "post-it", "comment"],
    stamp: ["document", "rubber-stamp", "approve", "seal", "imprint"],
    "scan-text": ["ocr", "recognize-text", "extract-text", "scan", "digitize"],
    unlink: ["link", "remove-link", "disconnect", "broken-link", "hyperlink"],
    redact: ["document", "censor", "hide-text", "sensitive", "blackout"]
  }),
  ...(0, import_category.taggedCategory)("Text formatting", {
    "text-direction-rtl": ["text", "right-to-left", "rtl", "bidi", "paragraph-direction"]
  }),
  ...(0, import_category.taggedCategory)("Document editing", {
    "document-template": ["document", "template", "preset", "placeholder", "starter"],
    "page-header": ["document", "header", "running-head", "top-margin", "print"],
    "page-footer": ["document", "footer", "running-foot", "bottom-margin", "print"]
  }),
  ...(0, import_category.taggedCategory)("Source control", {
    "git-commit": ["git", "revision", "snapshot", "history", "changeset"],
    "git-pull-request": ["git", "pull-request", "pr", "merge-request", "code-review"],
    "git-merge": ["git", "merge", "combine-branches", "integration", "revision"],
    "git-compare": ["git", "compare", "branches", "revision-diff", "branch-tips"],
    "git-rebase": ["git", "rebase", "rewrite-history", "move-commits", "base"],
    "git-cherry-pick": ["git", "cherry-pick", "selected-commit", "apply-commit", "backport"],
    "git-conflict": ["git", "merge-conflict", "resolve", "incompatible-changes", "revision"],
    "git-graph": ["git", "history", "commit-graph", "branches", "revision-topology"]
  }),
  ...(0, import_category.taggedCategory)("Programming", {
    bug: ["defect", "debug", "issue", "error", "insect"],
    variable: ["binding", "identifier", "value", "symbol", "expression"],
    function: ["callable", "method", "procedure", "routine", "invoke"],
    lambda: ["anonymous-function", "closure", "functional", "expression", "greek"],
    regex: ["regular-expression", "pattern", "match", "wildcard", "search"],
    binary: ["bits", "base-two", "zero-one", "encoding", "data"],
    array: ["collection", "list", "indexed", "sequence", "brackets"],
    boolean: ["true", "false", "logic", "bool", "data-type"],
    string: ["text-value", "quoted", "literal", "characters", "data-type"],
    number: ["numeric", "integer", "decimal", "digits", "data-type"],
    parentheses: ["round-brackets", "group-expression", "arguments", "delimiter", "syntax"],
    ampersand: ["and", "conjunction", "symbol", "reference", "syntax"],
    breakpoint: ["debugger", "pause-execution", "stop", "debug", "code-line"],
    recursion: ["recursive", "self-call", "nested-call", "repeat", "function"]
  }),
  ...(0, import_category.taggedCategory)("Infrastructure", {
    webhook: ["callback", "event", "http", "integration", "notification"],
    api: ["application-interface", "endpoint", "connection", "rest", "integration"],
    network: ["topology", "services", "mesh", "nodes", "connections"],
    cluster: ["compute", "servers", "nodes", "distributed", "orchestration"],
    container: ["runtime", "image", "docker", "process", "isolation"],
    "virtual-machine": ["vm", "guest", "host", "hypervisor", "virtualization"],
    "load-balancer": ["ingress", "traffic", "distribute", "routing", "upstream"],
    queue: ["jobs", "messages", "fifo", "worker", "backlog"],
    cache: ["temporary-storage", "memory", "reuse", "cached-data", "fast-access"],
    "database-schema": ["entities", "relationships", "tables", "data-model", "erd"],
    "data-stream": ["streaming", "events", "feed", "continuous-data", "flow"],
    dependency: ["requires", "package", "module", "depends-on", "relationship"],
    sandbox: ["isolated", "test-environment", "playground", "experiment", "safe-execution"],
    pipeline: ["ci", "cd", "build", "stages", "workflow"],
    "database-query": ["sql", "search-data", "select", "lookup", "datastore"],
    "database-replica": ["replication", "copy-data", "read-replica", "synchronize", "datastore"]
  }),
  ...(0, import_category.taggedCategory)("Collaboration", {
    "at-sign": ["mention", "email-address", "username", "handle", "contact"],
    hash: ["hashtag", "channel", "issue-number", "pound-sign", "topic"],
    "thumbs-up": ["approve", "like", "agree", "acknowledge", "positive-feedback"],
    "thumbs-down": ["disapprove", "dislike", "disagree", "negative-feedback", "vote-down"],
    "message-dots": ["typing", "chat", "comment", "reply-pending", "ellipsis"],
    "organization-chart": ["hierarchy", "reporting", "org-chart", "team-structure", "roles"],
    vote: ["ballot", "poll", "election", "decision", "cast-vote"],
    "message-reply": ["reply", "comment", "thread", "respond", "discussion"]
  })
};
