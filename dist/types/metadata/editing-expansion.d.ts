export declare const editingExpansionMetadata: {
    "at-sign": {
        readonly category: string;
        readonly tags: readonly ["mention", "email-address", "username", "handle", "contact"];
    };
    hash: {
        readonly category: string;
        readonly tags: readonly ["hashtag", "channel", "issue-number", "pound-sign", "topic"];
    };
    "thumbs-up": {
        readonly category: string;
        readonly tags: readonly ["approve", "like", "agree", "acknowledge", "positive-feedback"];
    };
    "thumbs-down": {
        readonly category: string;
        readonly tags: readonly ["disapprove", "dislike", "disagree", "negative-feedback", "vote-down"];
    };
    "message-dots": {
        readonly category: string;
        readonly tags: readonly ["typing", "chat", "comment", "reply-pending", "ellipsis"];
    };
    "organization-chart": {
        readonly category: string;
        readonly tags: readonly ["hierarchy", "reporting", "org-chart", "team-structure", "roles"];
    };
    vote: {
        readonly category: string;
        readonly tags: readonly ["ballot", "poll", "election", "decision", "cast-vote"];
    };
    "message-reply": {
        readonly category: string;
        readonly tags: readonly ["reply", "comment", "thread", "respond", "discussion"];
    };
    webhook: {
        readonly category: string;
        readonly tags: readonly ["callback", "event", "http", "integration", "notification"];
    };
    api: {
        readonly category: string;
        readonly tags: readonly ["application-interface", "endpoint", "connection", "rest", "integration"];
    };
    network: {
        readonly category: string;
        readonly tags: readonly ["topology", "services", "mesh", "nodes", "connections"];
    };
    cluster: {
        readonly category: string;
        readonly tags: readonly ["compute", "servers", "nodes", "distributed", "orchestration"];
    };
    container: {
        readonly category: string;
        readonly tags: readonly ["runtime", "image", "docker", "process", "isolation"];
    };
    "virtual-machine": {
        readonly category: string;
        readonly tags: readonly ["vm", "guest", "host", "hypervisor", "virtualization"];
    };
    "load-balancer": {
        readonly category: string;
        readonly tags: readonly ["ingress", "traffic", "distribute", "routing", "upstream"];
    };
    queue: {
        readonly category: string;
        readonly tags: readonly ["jobs", "messages", "fifo", "worker", "backlog"];
    };
    cache: {
        readonly category: string;
        readonly tags: readonly ["temporary-storage", "memory", "reuse", "cached-data", "fast-access"];
    };
    "database-schema": {
        readonly category: string;
        readonly tags: readonly ["entities", "relationships", "tables", "data-model", "erd"];
    };
    "data-stream": {
        readonly category: string;
        readonly tags: readonly ["streaming", "events", "feed", "continuous-data", "flow"];
    };
    dependency: {
        readonly category: string;
        readonly tags: readonly ["requires", "package", "module", "depends-on", "relationship"];
    };
    sandbox: {
        readonly category: string;
        readonly tags: readonly ["isolated", "test-environment", "playground", "experiment", "safe-execution"];
    };
    pipeline: {
        readonly category: string;
        readonly tags: readonly ["ci", "cd", "build", "stages", "workflow"];
    };
    "database-query": {
        readonly category: string;
        readonly tags: readonly ["sql", "search-data", "select", "lookup", "datastore"];
    };
    "database-replica": {
        readonly category: string;
        readonly tags: readonly ["replication", "copy-data", "read-replica", "synchronize", "datastore"];
    };
    bug: {
        readonly category: string;
        readonly tags: readonly ["defect", "debug", "issue", "error", "insect"];
    };
    variable: {
        readonly category: string;
        readonly tags: readonly ["binding", "identifier", "value", "symbol", "expression"];
    };
    function: {
        readonly category: string;
        readonly tags: readonly ["callable", "method", "procedure", "routine", "invoke"];
    };
    lambda: {
        readonly category: string;
        readonly tags: readonly ["anonymous-function", "closure", "functional", "expression", "greek"];
    };
    regex: {
        readonly category: string;
        readonly tags: readonly ["regular-expression", "pattern", "match", "wildcard", "search"];
    };
    binary: {
        readonly category: string;
        readonly tags: readonly ["bits", "base-two", "zero-one", "encoding", "data"];
    };
    array: {
        readonly category: string;
        readonly tags: readonly ["collection", "list", "indexed", "sequence", "brackets"];
    };
    boolean: {
        readonly category: string;
        readonly tags: readonly ["true", "false", "logic", "bool", "data-type"];
    };
    string: {
        readonly category: string;
        readonly tags: readonly ["text-value", "quoted", "literal", "characters", "data-type"];
    };
    number: {
        readonly category: string;
        readonly tags: readonly ["numeric", "integer", "decimal", "digits", "data-type"];
    };
    parentheses: {
        readonly category: string;
        readonly tags: readonly ["round-brackets", "group-expression", "arguments", "delimiter", "syntax"];
    };
    ampersand: {
        readonly category: string;
        readonly tags: readonly ["and", "conjunction", "symbol", "reference", "syntax"];
    };
    breakpoint: {
        readonly category: string;
        readonly tags: readonly ["debugger", "pause-execution", "stop", "debug", "code-line"];
    };
    recursion: {
        readonly category: string;
        readonly tags: readonly ["recursive", "self-call", "nested-call", "repeat", "function"];
    };
    "git-commit": {
        readonly category: string;
        readonly tags: readonly ["git", "revision", "snapshot", "history", "changeset"];
    };
    "git-pull-request": {
        readonly category: string;
        readonly tags: readonly ["git", "pull-request", "pr", "merge-request", "code-review"];
    };
    "git-merge": {
        readonly category: string;
        readonly tags: readonly ["git", "merge", "combine-branches", "integration", "revision"];
    };
    "git-compare": {
        readonly category: string;
        readonly tags: readonly ["git", "compare", "branches", "revision-diff", "branch-tips"];
    };
    "git-rebase": {
        readonly category: string;
        readonly tags: readonly ["git", "rebase", "rewrite-history", "move-commits", "base"];
    };
    "git-cherry-pick": {
        readonly category: string;
        readonly tags: readonly ["git", "cherry-pick", "selected-commit", "apply-commit", "backport"];
    };
    "git-conflict": {
        readonly category: string;
        readonly tags: readonly ["git", "merge-conflict", "resolve", "incompatible-changes", "revision"];
    };
    "git-graph": {
        readonly category: string;
        readonly tags: readonly ["git", "history", "commit-graph", "branches", "revision-topology"];
    };
    "document-template": {
        readonly category: string;
        readonly tags: readonly ["document", "template", "preset", "placeholder", "starter"];
    };
    "page-header": {
        readonly category: string;
        readonly tags: readonly ["document", "header", "running-head", "top-margin", "print"];
    };
    "page-footer": {
        readonly category: string;
        readonly tags: readonly ["document", "footer", "running-foot", "bottom-margin", "print"];
    };
    "text-direction-rtl": {
        readonly category: string;
        readonly tags: readonly ["text", "right-to-left", "rtl", "bidi", "paragraph-direction"];
    };
    scissors: {
        readonly category: string;
        readonly tags: readonly ["cut", "trim", "selection", "clipboard", "split"];
    };
    eraser: {
        readonly category: string;
        readonly tags: readonly ["erase", "rubber", "remove-stroke", "drawing", "annotation"];
    };
    "spell-check": {
        readonly category: string;
        readonly tags: readonly ["spelling", "proofread", "grammar", "dictionary", "correct"];
    };
    "find-replace": {
        readonly category: string;
        readonly tags: readonly ["search", "replace", "substitute", "matching-text", "editor"];
    };
    "file-diff": {
        readonly category: string;
        readonly tags: readonly ["document", "difference", "addition", "deletion", "patch"];
    };
    "file-code": {
        readonly category: string;
        readonly tags: readonly ["document", "source-file", "program", "markup", "script"];
    };
    "word-count": {
        readonly category: string;
        readonly tags: readonly ["text", "statistics", "word-total", "character-count", "length"];
    };
    "page-break": {
        readonly category: string;
        readonly tags: readonly ["document", "pagination", "new-page", "print", "separator"];
    };
    "page-number": {
        readonly category: string;
        readonly tags: readonly ["document", "pagination", "folio", "numbering", "print"];
    };
    "page-margin": {
        readonly category: string;
        readonly tags: readonly ["document", "inset", "print-area", "gutter", "page-setup"];
    };
    "page-size": {
        readonly category: string;
        readonly tags: readonly ["document", "paper-size", "dimensions", "a4", "page-setup"];
    };
    footnote: {
        readonly category: string;
        readonly tags: readonly ["document", "reference", "citation", "endnote", "annotation"];
    };
    "track-changes": {
        readonly category: string;
        readonly tags: readonly ["document", "revision", "review", "suggestion", "edit-history"];
    };
    "sticky-note": {
        readonly category: string;
        readonly tags: readonly ["annotation", "memo", "reminder", "post-it", "comment"];
    };
    stamp: {
        readonly category: string;
        readonly tags: readonly ["document", "rubber-stamp", "approve", "seal", "imprint"];
    };
    "scan-text": {
        readonly category: string;
        readonly tags: readonly ["ocr", "recognize-text", "extract-text", "scan", "digitize"];
    };
    unlink: {
        readonly category: string;
        readonly tags: readonly ["link", "remove-link", "disconnect", "broken-link", "hyperlink"];
    };
    redact: {
        readonly category: string;
        readonly tags: readonly ["document", "censor", "hide-text", "sensitive", "blackout"];
    };
    "text-align-top": {
        readonly category: string;
        readonly tags: readonly ["text", "vertical-alignment", "top", "frame", "block-position"];
    };
    "text-align-middle": {
        readonly category: string;
        readonly tags: readonly ["text", "vertical-alignment", "middle", "center-vertically", "frame"];
    };
    "text-align-bottom": {
        readonly category: string;
        readonly tags: readonly ["text", "vertical-alignment", "bottom", "frame", "block-position"];
    };
    "line-height": {
        readonly category: string;
        readonly tags: readonly ["text", "leading", "line-spacing", "baseline", "typography"];
    };
    "letter-spacing": {
        readonly category: string;
        readonly tags: readonly ["text", "tracking", "kerning", "character-spacing", "typography"];
    };
    "text-color": {
        readonly category: string;
        readonly tags: readonly ["text", "foreground", "font-color", "swatch", "typography"];
    };
    highlighter: {
        readonly category: string;
        readonly tags: readonly ["text", "marker", "highlight", "background-color", "annotation"];
    };
    "remove-formatting": {
        readonly category: string;
        readonly tags: readonly ["text", "clear-formatting", "plain-text", "reset-style", "erase-style"];
    };
    paragraph: {
        readonly category: string;
        readonly tags: readonly ["text", "pilcrow", "paragraph-mark", "invisibles", "formatting-marks"];
    };
    quote: {
        readonly category: string;
        readonly tags: readonly ["text", "quotation", "blockquote", "citation", "excerpt"];
    };
    "text-wrap": {
        readonly category: string;
        readonly tags: readonly ["text", "word-wrap", "soft-wrap", "line-wrap", "editor-width"];
    };
    "word-break": {
        readonly category: string;
        readonly tags: readonly ["text", "break-word", "overflow-wrap", "split-word", "line-breaking"];
    };
    "text-hyphenation": {
        readonly category: string;
        readonly tags: readonly ["text", "hyphen", "hyphenate", "syllable", "line-ending"];
    };
    "paragraph-spacing": {
        readonly category: string;
        readonly tags: readonly ["text", "paragraph-gap", "space-before", "space-after", "leading"];
    };
    "align-left": {
        readonly category: string;
        readonly tags: readonly ["text", "paragraph", "flush-left", "alignment", "ragged-right"];
    };
    "align-center": {
        readonly category: string;
        readonly tags: readonly ["text", "paragraph", "centered", "alignment", "justify-center"];
    };
    "align-right": {
        readonly category: string;
        readonly tags: readonly ["text", "paragraph", "flush-right", "alignment", "ragged-left"];
    };
    "align-justify": {
        readonly category: string;
        readonly tags: readonly ["text", "paragraph", "justified", "alignment", "full-width"];
    };
    "indent-increase": {
        readonly category: string;
        readonly tags: readonly ["text", "paragraph", "indent", "tab", "nest"];
    };
    "indent-decrease": {
        readonly category: string;
        readonly tags: readonly ["text", "paragraph", "outdent", "unindent", "unnest"];
    };
    bold: {
        readonly category: string;
        readonly tags: readonly ["text", "strong", "emphasis", "weight", "editor"];
    };
    italic: {
        readonly category: string;
        readonly tags: readonly ["text", "emphasis", "slanted", "oblique", "editor"];
    };
    underline: {
        readonly category: string;
        readonly tags: readonly ["text", "decoration", "emphasis", "baseline", "editor"];
    };
    strikethrough: {
        readonly category: string;
        readonly tags: readonly ["text", "strike", "cross-out", "deleted", "decoration"];
    };
    heading: {
        readonly category: string;
        readonly tags: readonly ["text", "title", "headline", "h1", "block-style"];
    };
    subscript: {
        readonly category: string;
        readonly tags: readonly ["text", "lowered", "chemistry", "formula", "index"];
    };
    superscript: {
        readonly category: string;
        readonly tags: readonly ["text", "raised", "exponent", "power", "formula"];
    };
    "small-caps": {
        readonly category: string;
        readonly tags: readonly ["text", "typography", "capitals", "font-variant", "letter-case"];
    };
    "text-direction-ltr": {
        readonly category: string;
        readonly tags: readonly ["text", "left-to-right", "ltr", "bidi", "paragraph-direction"];
    };
    "case-upper": {
        readonly category: string;
        readonly tags: readonly ["text", "uppercase", "capital-letters", "all-caps", "transform"];
    };
    "case-lower": {
        readonly category: string;
        readonly tags: readonly ["text", "lowercase", "small-letters", "letter-case", "transform"];
    };
    "case-title": {
        readonly category: string;
        readonly tags: readonly ["text", "title-case", "capitalize", "word-initials", "transform"];
    };
};
