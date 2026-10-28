/** Search metadata for the original editing expansion. No React runtime is needed. */
export const editingExpansionMetadata = {
  bold: { category: "Text formatting", tags: ["text", "strong", "emphasis", "weight", "editor"] },
  italic: {
    category: "Text formatting",
    tags: ["text", "emphasis", "slanted", "oblique", "editor"],
  },
  underline: {
    category: "Text formatting",
    tags: ["text", "decoration", "emphasis", "baseline", "editor"],
  },
  strikethrough: {
    category: "Text formatting",
    tags: ["text", "strike", "cross-out", "deleted", "decoration"],
  },
  heading: {
    category: "Text formatting",
    tags: ["text", "title", "headline", "h1", "block-style"],
  },
  subscript: {
    category: "Text formatting",
    tags: ["text", "lowered", "chemistry", "formula", "index"],
  },
  superscript: {
    category: "Text formatting",
    tags: ["text", "raised", "exponent", "power", "formula"],
  },
  "small-caps": {
    category: "Text formatting",
    tags: ["text", "typography", "capitals", "font-variant", "letter-case"],
  },
  "text-direction-ltr": {
    category: "Text formatting",
    tags: ["text", "left-to-right", "ltr", "bidi", "paragraph-direction"],
  },
  "case-upper": {
    category: "Text formatting",
    tags: ["text", "uppercase", "capital-letters", "all-caps", "transform"],
  },
  "case-lower": {
    category: "Text formatting",
    tags: ["text", "lowercase", "small-letters", "letter-case", "transform"],
  },
  "case-title": {
    category: "Text formatting",
    tags: ["text", "title-case", "capitalize", "word-initials", "transform"],
  },
  "align-left": {
    category: "Text alignment",
    tags: ["text", "paragraph", "flush-left", "alignment", "ragged-right"],
  },
  "align-center": {
    category: "Text alignment",
    tags: ["text", "paragraph", "centered", "alignment", "justify-center"],
  },
  "align-right": {
    category: "Text alignment",
    tags: ["text", "paragraph", "flush-right", "alignment", "ragged-left"],
  },
  "align-justify": {
    category: "Text alignment",
    tags: ["text", "paragraph", "justified", "alignment", "full-width"],
  },
  "indent-increase": {
    category: "Text alignment",
    tags: ["text", "paragraph", "indent", "tab", "nest"],
  },
  "indent-decrease": {
    category: "Text alignment",
    tags: ["text", "paragraph", "outdent", "unindent", "unnest"],
  },
  "line-height": {
    category: "Text formatting",
    tags: ["text", "leading", "line-spacing", "baseline", "typography"],
  },
  "letter-spacing": {
    category: "Text formatting",
    tags: ["text", "tracking", "kerning", "character-spacing", "typography"],
  },
  "text-color": {
    category: "Text formatting",
    tags: ["text", "foreground", "font-color", "swatch", "typography"],
  },
  highlighter: {
    category: "Text formatting",
    tags: ["text", "marker", "highlight", "background-color", "annotation"],
  },
  "remove-formatting": {
    category: "Text formatting",
    tags: ["text", "clear-formatting", "plain-text", "reset-style", "erase-style"],
  },
  paragraph: {
    category: "Text formatting",
    tags: ["text", "pilcrow", "paragraph-mark", "invisibles", "formatting-marks"],
  },
  quote: {
    category: "Text formatting",
    tags: ["text", "quotation", "blockquote", "citation", "excerpt"],
  },
  "text-wrap": {
    category: "Text formatting",
    tags: ["text", "word-wrap", "soft-wrap", "line-wrap", "editor-width"],
  },
  "word-break": {
    category: "Text formatting",
    tags: ["text", "break-word", "overflow-wrap", "split-word", "line-breaking"],
  },
  "text-hyphenation": {
    category: "Text formatting",
    tags: ["text", "hyphen", "hyphenate", "syllable", "line-ending"],
  },
  "paragraph-spacing": {
    category: "Text formatting",
    tags: ["text", "paragraph-gap", "space-before", "space-after", "leading"],
  },
  "text-align-top": {
    category: "Text alignment",
    tags: ["text", "vertical-alignment", "top", "frame", "block-position"],
  },
  "text-align-middle": {
    category: "Text alignment",
    tags: ["text", "vertical-alignment", "middle", "center-vertically", "frame"],
  },
  "text-align-bottom": {
    category: "Text alignment",
    tags: ["text", "vertical-alignment", "bottom", "frame", "block-position"],
  },
  scissors: {
    category: "Document editing",
    tags: ["cut", "trim", "selection", "clipboard", "split"],
  },
  eraser: {
    category: "Document editing",
    tags: ["erase", "rubber", "remove-stroke", "drawing", "annotation"],
  },
  "spell-check": {
    category: "Document editing",
    tags: ["spelling", "proofread", "grammar", "dictionary", "correct"],
  },
  "find-replace": {
    category: "Document editing",
    tags: ["search", "replace", "substitute", "matching-text", "editor"],
  },
  "file-diff": {
    category: "Document editing",
    tags: ["document", "difference", "addition", "deletion", "patch"],
  },
  "file-code": {
    category: "Document editing",
    tags: ["document", "source-file", "program", "markup", "script"],
  },
  "word-count": {
    category: "Document editing",
    tags: ["text", "statistics", "word-total", "character-count", "length"],
  },
  "page-break": {
    category: "Document editing",
    tags: ["document", "pagination", "new-page", "print", "separator"],
  },
  "page-number": {
    category: "Document editing",
    tags: ["document", "pagination", "folio", "numbering", "print"],
  },
  "page-margin": {
    category: "Document editing",
    tags: ["document", "inset", "print-area", "gutter", "page-setup"],
  },
  "page-size": {
    category: "Document editing",
    tags: ["document", "paper-size", "dimensions", "a4", "page-setup"],
  },
  footnote: {
    category: "Document editing",
    tags: ["document", "reference", "citation", "endnote", "annotation"],
  },
  "track-changes": {
    category: "Document editing",
    tags: ["document", "revision", "review", "suggestion", "edit-history"],
  },
  "sticky-note": {
    category: "Document editing",
    tags: ["annotation", "memo", "reminder", "post-it", "comment"],
  },
  stamp: {
    category: "Document editing",
    tags: ["document", "rubber-stamp", "approve", "seal", "imprint"],
  },
  "scan-text": {
    category: "Document editing",
    tags: ["ocr", "recognize-text", "extract-text", "scan", "digitize"],
  },
  unlink: {
    category: "Document editing",
    tags: ["link", "remove-link", "disconnect", "broken-link", "hyperlink"],
  },
  redact: {
    category: "Document editing",
    tags: ["document", "censor", "hide-text", "sensitive", "blackout"],
  },
  "text-direction-rtl": {
    category: "Text formatting",
    tags: ["text", "right-to-left", "rtl", "bidi", "paragraph-direction"],
  },
  "document-template": {
    category: "Document editing",
    tags: ["document", "template", "preset", "placeholder", "starter"],
  },
  "page-header": {
    category: "Document editing",
    tags: ["document", "header", "running-head", "top-margin", "print"],
  },
  "page-footer": {
    category: "Document editing",
    tags: ["document", "footer", "running-foot", "bottom-margin", "print"],
  },
  "git-commit": {
    category: "Source control",
    tags: ["git", "revision", "snapshot", "history", "changeset"],
  },
  "git-pull-request": {
    category: "Source control",
    tags: ["git", "pull-request", "pr", "merge-request", "code-review"],
  },
  "git-merge": {
    category: "Source control",
    tags: ["git", "merge", "combine-branches", "integration", "revision"],
  },
  "git-compare": {
    category: "Source control",
    tags: ["git", "compare", "branches", "revision-diff", "branch-tips"],
  },
  "git-rebase": {
    category: "Source control",
    tags: ["git", "rebase", "rewrite-history", "move-commits", "base"],
  },
  "git-cherry-pick": {
    category: "Source control",
    tags: ["git", "cherry-pick", "selected-commit", "apply-commit", "backport"],
  },
  "git-conflict": {
    category: "Source control",
    tags: ["git", "merge-conflict", "resolve", "incompatible-changes", "revision"],
  },
  "git-graph": {
    category: "Source control",
    tags: ["git", "history", "commit-graph", "branches", "revision-topology"],
  },
  bug: { category: "Programming", tags: ["defect", "debug", "issue", "error", "insect"] },
  variable: {
    category: "Programming",
    tags: ["binding", "identifier", "value", "symbol", "expression"],
  },
  function: {
    category: "Programming",
    tags: ["callable", "method", "procedure", "routine", "invoke"],
  },
  lambda: {
    category: "Programming",
    tags: ["anonymous-function", "closure", "functional", "expression", "greek"],
  },
  regex: {
    category: "Programming",
    tags: ["regular-expression", "pattern", "match", "wildcard", "search"],
  },
  binary: { category: "Programming", tags: ["bits", "base-two", "zero-one", "encoding", "data"] },
  array: {
    category: "Programming",
    tags: ["collection", "list", "indexed", "sequence", "brackets"],
  },
  boolean: { category: "Programming", tags: ["true", "false", "logic", "bool", "data-type"] },
  string: {
    category: "Programming",
    tags: ["text-value", "quoted", "literal", "characters", "data-type"],
  },
  number: {
    category: "Programming",
    tags: ["numeric", "integer", "decimal", "digits", "data-type"],
  },
  parentheses: {
    category: "Programming",
    tags: ["round-brackets", "group-expression", "arguments", "delimiter", "syntax"],
  },
  ampersand: {
    category: "Programming",
    tags: ["and", "conjunction", "symbol", "reference", "syntax"],
  },
  breakpoint: {
    category: "Programming",
    tags: ["debugger", "pause-execution", "stop", "debug", "code-line"],
  },
  recursion: {
    category: "Programming",
    tags: ["recursive", "self-call", "nested-call", "repeat", "function"],
  },
  webhook: {
    category: "Infrastructure",
    tags: ["callback", "event", "http", "integration", "notification"],
  },
  api: {
    category: "Infrastructure",
    tags: ["application-interface", "endpoint", "connection", "rest", "integration"],
  },
  network: {
    category: "Infrastructure",
    tags: ["topology", "services", "mesh", "nodes", "connections"],
  },
  cluster: {
    category: "Infrastructure",
    tags: ["compute", "servers", "nodes", "distributed", "orchestration"],
  },
  container: {
    category: "Infrastructure",
    tags: ["runtime", "image", "docker", "process", "isolation"],
  },
  "virtual-machine": {
    category: "Infrastructure",
    tags: ["vm", "guest", "host", "hypervisor", "virtualization"],
  },
  "load-balancer": {
    category: "Infrastructure",
    tags: ["ingress", "traffic", "distribute", "routing", "upstream"],
  },
  queue: { category: "Infrastructure", tags: ["jobs", "messages", "fifo", "worker", "backlog"] },
  cache: {
    category: "Infrastructure",
    tags: ["temporary-storage", "memory", "reuse", "cached-data", "fast-access"],
  },
  "database-schema": {
    category: "Infrastructure",
    tags: ["entities", "relationships", "tables", "data-model", "erd"],
  },
  "data-stream": {
    category: "Infrastructure",
    tags: ["streaming", "events", "feed", "continuous-data", "flow"],
  },
  dependency: {
    category: "Infrastructure",
    tags: ["requires", "package", "module", "depends-on", "relationship"],
  },
  sandbox: {
    category: "Infrastructure",
    tags: ["isolated", "test-environment", "playground", "experiment", "safe-execution"],
  },
  pipeline: { category: "Infrastructure", tags: ["ci", "cd", "build", "stages", "workflow"] },
  "database-query": {
    category: "Infrastructure",
    tags: ["sql", "search-data", "select", "lookup", "datastore"],
  },
  "database-replica": {
    category: "Infrastructure",
    tags: ["replication", "copy-data", "read-replica", "synchronize", "datastore"],
  },
  "at-sign": {
    category: "Collaboration",
    tags: ["mention", "email-address", "username", "handle", "contact"],
  },
  hash: {
    category: "Collaboration",
    tags: ["hashtag", "channel", "issue-number", "pound-sign", "topic"],
  },
  "thumbs-up": {
    category: "Collaboration",
    tags: ["approve", "like", "agree", "acknowledge", "positive-feedback"],
  },
  "thumbs-down": {
    category: "Collaboration",
    tags: ["disapprove", "dislike", "disagree", "negative-feedback", "vote-down"],
  },
  "message-dots": {
    category: "Collaboration",
    tags: ["typing", "chat", "comment", "reply-pending", "ellipsis"],
  },
  "organization-chart": {
    category: "Collaboration",
    tags: ["hierarchy", "reporting", "org-chart", "team-structure", "roles"],
  },
  vote: {
    category: "Collaboration",
    tags: ["ballot", "poll", "election", "decision", "cast-vote"],
  },
  "message-reply": {
    category: "Collaboration",
    tags: ["reply", "comment", "thread", "respond", "discussion"],
  },
} as const satisfies Readonly<Record<string, { category: string; tags: readonly string[] }>>;
