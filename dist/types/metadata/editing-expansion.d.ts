/** Search metadata for the original editing expansion. No React runtime is needed. */
export declare const editingExpansionMetadata: {
    readonly bold: {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "strong", "emphasis", "weight", "editor"];
    };
    readonly italic: {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "emphasis", "slanted", "oblique", "editor"];
    };
    readonly underline: {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "decoration", "emphasis", "baseline", "editor"];
    };
    readonly strikethrough: {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "strike", "cross-out", "deleted", "decoration"];
    };
    readonly heading: {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "title", "headline", "h1", "block-style"];
    };
    readonly subscript: {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "lowered", "chemistry", "formula", "index"];
    };
    readonly superscript: {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "raised", "exponent", "power", "formula"];
    };
    readonly "small-caps": {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "typography", "capitals", "font-variant", "letter-case"];
    };
    readonly "text-direction-ltr": {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "left-to-right", "ltr", "bidi", "paragraph-direction"];
    };
    readonly "case-upper": {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "uppercase", "capital-letters", "all-caps", "transform"];
    };
    readonly "case-lower": {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "lowercase", "small-letters", "letter-case", "transform"];
    };
    readonly "case-title": {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "title-case", "capitalize", "word-initials", "transform"];
    };
    readonly "align-left": {
        readonly category: "Text alignment";
        readonly tags: readonly ["text", "paragraph", "flush-left", "alignment", "ragged-right"];
    };
    readonly "align-center": {
        readonly category: "Text alignment";
        readonly tags: readonly ["text", "paragraph", "centered", "alignment", "justify-center"];
    };
    readonly "align-right": {
        readonly category: "Text alignment";
        readonly tags: readonly ["text", "paragraph", "flush-right", "alignment", "ragged-left"];
    };
    readonly "align-justify": {
        readonly category: "Text alignment";
        readonly tags: readonly ["text", "paragraph", "justified", "alignment", "full-width"];
    };
    readonly "indent-increase": {
        readonly category: "Text alignment";
        readonly tags: readonly ["text", "paragraph", "indent", "tab", "nest"];
    };
    readonly "indent-decrease": {
        readonly category: "Text alignment";
        readonly tags: readonly ["text", "paragraph", "outdent", "unindent", "unnest"];
    };
    readonly "line-height": {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "leading", "line-spacing", "baseline", "typography"];
    };
    readonly "letter-spacing": {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "tracking", "kerning", "character-spacing", "typography"];
    };
    readonly "text-color": {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "foreground", "font-color", "swatch", "typography"];
    };
    readonly highlighter: {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "marker", "highlight", "background-color", "annotation"];
    };
    readonly "remove-formatting": {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "clear-formatting", "plain-text", "reset-style", "erase-style"];
    };
    readonly paragraph: {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "pilcrow", "paragraph-mark", "invisibles", "formatting-marks"];
    };
    readonly quote: {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "quotation", "blockquote", "citation", "excerpt"];
    };
    readonly "text-wrap": {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "word-wrap", "soft-wrap", "line-wrap", "editor-width"];
    };
    readonly "word-break": {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "break-word", "overflow-wrap", "split-word", "line-breaking"];
    };
    readonly "text-hyphenation": {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "hyphen", "hyphenate", "syllable", "line-ending"];
    };
    readonly "paragraph-spacing": {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "paragraph-gap", "space-before", "space-after", "leading"];
    };
    readonly "text-align-top": {
        readonly category: "Text alignment";
        readonly tags: readonly ["text", "vertical-alignment", "top", "frame", "block-position"];
    };
    readonly "text-align-middle": {
        readonly category: "Text alignment";
        readonly tags: readonly ["text", "vertical-alignment", "middle", "center-vertically", "frame"];
    };
    readonly "text-align-bottom": {
        readonly category: "Text alignment";
        readonly tags: readonly ["text", "vertical-alignment", "bottom", "frame", "block-position"];
    };
    readonly scissors: {
        readonly category: "Document editing";
        readonly tags: readonly ["cut", "trim", "selection", "clipboard", "split"];
    };
    readonly eraser: {
        readonly category: "Document editing";
        readonly tags: readonly ["erase", "rubber", "remove-stroke", "drawing", "annotation"];
    };
    readonly "spell-check": {
        readonly category: "Document editing";
        readonly tags: readonly ["spelling", "proofread", "grammar", "dictionary", "correct"];
    };
    readonly "find-replace": {
        readonly category: "Document editing";
        readonly tags: readonly ["search", "replace", "substitute", "matching-text", "editor"];
    };
    readonly "file-diff": {
        readonly category: "Document editing";
        readonly tags: readonly ["document", "difference", "addition", "deletion", "patch"];
    };
    readonly "file-code": {
        readonly category: "Document editing";
        readonly tags: readonly ["document", "source-file", "program", "markup", "script"];
    };
    readonly "word-count": {
        readonly category: "Document editing";
        readonly tags: readonly ["text", "statistics", "word-total", "character-count", "length"];
    };
    readonly "page-break": {
        readonly category: "Document editing";
        readonly tags: readonly ["document", "pagination", "new-page", "print", "separator"];
    };
    readonly "page-number": {
        readonly category: "Document editing";
        readonly tags: readonly ["document", "pagination", "folio", "numbering", "print"];
    };
    readonly "page-margin": {
        readonly category: "Document editing";
        readonly tags: readonly ["document", "inset", "print-area", "gutter", "page-setup"];
    };
    readonly "page-size": {
        readonly category: "Document editing";
        readonly tags: readonly ["document", "paper-size", "dimensions", "a4", "page-setup"];
    };
    readonly footnote: {
        readonly category: "Document editing";
        readonly tags: readonly ["document", "reference", "citation", "endnote", "annotation"];
    };
    readonly "track-changes": {
        readonly category: "Document editing";
        readonly tags: readonly ["document", "revision", "review", "suggestion", "edit-history"];
    };
    readonly "sticky-note": {
        readonly category: "Document editing";
        readonly tags: readonly ["annotation", "memo", "reminder", "post-it", "comment"];
    };
    readonly stamp: {
        readonly category: "Document editing";
        readonly tags: readonly ["document", "rubber-stamp", "approve", "seal", "imprint"];
    };
    readonly "scan-text": {
        readonly category: "Document editing";
        readonly tags: readonly ["ocr", "recognize-text", "extract-text", "scan", "digitize"];
    };
    readonly unlink: {
        readonly category: "Document editing";
        readonly tags: readonly ["link", "remove-link", "disconnect", "broken-link", "hyperlink"];
    };
    readonly redact: {
        readonly category: "Document editing";
        readonly tags: readonly ["document", "censor", "hide-text", "sensitive", "blackout"];
    };
    readonly "text-direction-rtl": {
        readonly category: "Text formatting";
        readonly tags: readonly ["text", "right-to-left", "rtl", "bidi", "paragraph-direction"];
    };
    readonly "document-template": {
        readonly category: "Document editing";
        readonly tags: readonly ["document", "template", "preset", "placeholder", "starter"];
    };
    readonly "page-header": {
        readonly category: "Document editing";
        readonly tags: readonly ["document", "header", "running-head", "top-margin", "print"];
    };
    readonly "page-footer": {
        readonly category: "Document editing";
        readonly tags: readonly ["document", "footer", "running-foot", "bottom-margin", "print"];
    };
    readonly "git-commit": {
        readonly category: "Source control";
        readonly tags: readonly ["git", "revision", "snapshot", "history", "changeset"];
    };
    readonly "git-pull-request": {
        readonly category: "Source control";
        readonly tags: readonly ["git", "pull-request", "pr", "merge-request", "code-review"];
    };
    readonly "git-merge": {
        readonly category: "Source control";
        readonly tags: readonly ["git", "merge", "combine-branches", "integration", "revision"];
    };
    readonly "git-compare": {
        readonly category: "Source control";
        readonly tags: readonly ["git", "compare", "branches", "revision-diff", "branch-tips"];
    };
    readonly "git-rebase": {
        readonly category: "Source control";
        readonly tags: readonly ["git", "rebase", "rewrite-history", "move-commits", "base"];
    };
    readonly "git-cherry-pick": {
        readonly category: "Source control";
        readonly tags: readonly ["git", "cherry-pick", "selected-commit", "apply-commit", "backport"];
    };
    readonly "git-conflict": {
        readonly category: "Source control";
        readonly tags: readonly ["git", "merge-conflict", "resolve", "incompatible-changes", "revision"];
    };
    readonly "git-graph": {
        readonly category: "Source control";
        readonly tags: readonly ["git", "history", "commit-graph", "branches", "revision-topology"];
    };
    readonly bug: {
        readonly category: "Programming";
        readonly tags: readonly ["defect", "debug", "issue", "error", "insect"];
    };
    readonly variable: {
        readonly category: "Programming";
        readonly tags: readonly ["binding", "identifier", "value", "symbol", "expression"];
    };
    readonly function: {
        readonly category: "Programming";
        readonly tags: readonly ["callable", "method", "procedure", "routine", "invoke"];
    };
    readonly lambda: {
        readonly category: "Programming";
        readonly tags: readonly ["anonymous-function", "closure", "functional", "expression", "greek"];
    };
    readonly regex: {
        readonly category: "Programming";
        readonly tags: readonly ["regular-expression", "pattern", "match", "wildcard", "search"];
    };
    readonly binary: {
        readonly category: "Programming";
        readonly tags: readonly ["bits", "base-two", "zero-one", "encoding", "data"];
    };
    readonly array: {
        readonly category: "Programming";
        readonly tags: readonly ["collection", "list", "indexed", "sequence", "brackets"];
    };
    readonly boolean: {
        readonly category: "Programming";
        readonly tags: readonly ["true", "false", "logic", "bool", "data-type"];
    };
    readonly string: {
        readonly category: "Programming";
        readonly tags: readonly ["text-value", "quoted", "literal", "characters", "data-type"];
    };
    readonly number: {
        readonly category: "Programming";
        readonly tags: readonly ["numeric", "integer", "decimal", "digits", "data-type"];
    };
    readonly parentheses: {
        readonly category: "Programming";
        readonly tags: readonly ["round-brackets", "group-expression", "arguments", "delimiter", "syntax"];
    };
    readonly ampersand: {
        readonly category: "Programming";
        readonly tags: readonly ["and", "conjunction", "symbol", "reference", "syntax"];
    };
    readonly breakpoint: {
        readonly category: "Programming";
        readonly tags: readonly ["debugger", "pause-execution", "stop", "debug", "code-line"];
    };
    readonly recursion: {
        readonly category: "Programming";
        readonly tags: readonly ["recursive", "self-call", "nested-call", "repeat", "function"];
    };
    readonly webhook: {
        readonly category: "Infrastructure";
        readonly tags: readonly ["callback", "event", "http", "integration", "notification"];
    };
    readonly api: {
        readonly category: "Infrastructure";
        readonly tags: readonly ["application-interface", "endpoint", "connection", "rest", "integration"];
    };
    readonly network: {
        readonly category: "Infrastructure";
        readonly tags: readonly ["topology", "services", "mesh", "nodes", "connections"];
    };
    readonly cluster: {
        readonly category: "Infrastructure";
        readonly tags: readonly ["compute", "servers", "nodes", "distributed", "orchestration"];
    };
    readonly container: {
        readonly category: "Infrastructure";
        readonly tags: readonly ["runtime", "image", "docker", "process", "isolation"];
    };
    readonly "virtual-machine": {
        readonly category: "Infrastructure";
        readonly tags: readonly ["vm", "guest", "host", "hypervisor", "virtualization"];
    };
    readonly "load-balancer": {
        readonly category: "Infrastructure";
        readonly tags: readonly ["ingress", "traffic", "distribute", "routing", "upstream"];
    };
    readonly queue: {
        readonly category: "Infrastructure";
        readonly tags: readonly ["jobs", "messages", "fifo", "worker", "backlog"];
    };
    readonly cache: {
        readonly category: "Infrastructure";
        readonly tags: readonly ["temporary-storage", "memory", "reuse", "cached-data", "fast-access"];
    };
    readonly "database-schema": {
        readonly category: "Infrastructure";
        readonly tags: readonly ["entities", "relationships", "tables", "data-model", "erd"];
    };
    readonly "data-stream": {
        readonly category: "Infrastructure";
        readonly tags: readonly ["streaming", "events", "feed", "continuous-data", "flow"];
    };
    readonly dependency: {
        readonly category: "Infrastructure";
        readonly tags: readonly ["requires", "package", "module", "depends-on", "relationship"];
    };
    readonly sandbox: {
        readonly category: "Infrastructure";
        readonly tags: readonly ["isolated", "test-environment", "playground", "experiment", "safe-execution"];
    };
    readonly pipeline: {
        readonly category: "Infrastructure";
        readonly tags: readonly ["ci", "cd", "build", "stages", "workflow"];
    };
    readonly "database-query": {
        readonly category: "Infrastructure";
        readonly tags: readonly ["sql", "search-data", "select", "lookup", "datastore"];
    };
    readonly "database-replica": {
        readonly category: "Infrastructure";
        readonly tags: readonly ["replication", "copy-data", "read-replica", "synchronize", "datastore"];
    };
    readonly "at-sign": {
        readonly category: "Collaboration";
        readonly tags: readonly ["mention", "email-address", "username", "handle", "contact"];
    };
    readonly hash: {
        readonly category: "Collaboration";
        readonly tags: readonly ["hashtag", "channel", "issue-number", "pound-sign", "topic"];
    };
    readonly "thumbs-up": {
        readonly category: "Collaboration";
        readonly tags: readonly ["approve", "like", "agree", "acknowledge", "positive-feedback"];
    };
    readonly "thumbs-down": {
        readonly category: "Collaboration";
        readonly tags: readonly ["disapprove", "dislike", "disagree", "negative-feedback", "vote-down"];
    };
    readonly "message-dots": {
        readonly category: "Collaboration";
        readonly tags: readonly ["typing", "chat", "comment", "reply-pending", "ellipsis"];
    };
    readonly "organization-chart": {
        readonly category: "Collaboration";
        readonly tags: readonly ["hierarchy", "reporting", "org-chart", "team-structure", "roles"];
    };
    readonly vote: {
        readonly category: "Collaboration";
        readonly tags: readonly ["ballot", "poll", "election", "decision", "cast-vote"];
    };
    readonly "message-reply": {
        readonly category: "Collaboration";
        readonly tags: readonly ["reply", "comment", "thread", "respond", "discussion"];
    };
};
