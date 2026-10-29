# Editing and development coverage

Status: proposed names and drawing directions for design approval. This batch contains exactly 100 new canonical icons. It does not authorize implementation.

The proposal follows the existing 24 by 24 outline grid, 1.75 stroke, rounded caps and joins, no fill, and currentColor. Every drawing must use original editable geometry through the helpers in `src/geometry.ts`. Drawing descriptions are directions for a later visual pass at 16, 20, and 24 pixels.

Existing files, code, clipboard, branch, server, database, cloud, messaging, sharing, and generic actions remain useful building blocks. Their search aliases appear after the table and do not count toward this batch. Specialized additions below express a separate operation, syntax mark, document control, or development concept.

| Canonical name     | Category         | Use case                                 | Original drawing concept                                                      |
| ------------------ | ---------------- | ---------------------------------------- | ----------------------------------------------------------------------------- |
| bold               | Text formatting  | Apply bold emphasis                      | Broad upright B with a straight stem and two open counters.                   |
| italic             | Text formatting  | Apply italic emphasis                    | Slanted I between short horizontal end strokes.                               |
| underline          | Text formatting  | Underline selected text                  | Rounded U above a separate baseline.                                          |
| strikethrough      | Text formatting  | Mark text as struck out                  | Open S crossed by one full-width middle stroke.                               |
| heading            | Text formatting  | Change a block to a heading              | Tall H with a shorter baseline stroke beside it.                              |
| subscript          | Text formatting  | Insert a lowered character               | Full-height x with a small outlined 2 at lower right.                         |
| superscript        | Text formatting  | Insert a raised character                | Full-height x with a small outlined 2 at upper right.                         |
| small-caps         | Text formatting  | Apply small capital letter styling       | Large A beside a shorter capital A sharing the baseline.                      |
| text-direction-ltr | Text formatting  | Set left-to-right paragraph direction    | Small paragraph mark beside a baseline direction cue pointing right.          |
| case-upper         | Text formatting  | Convert text to uppercase                | Two equal-height capital A and B letterforms.                                 |
| case-lower         | Text formatting  | Convert text to lowercase                | Short a and b letterforms with a shared baseline.                             |
| case-title         | Text formatting  | Capitalize word initials                 | Tall T beside a shorter lowercase t.                                          |
| align-left         | Text alignment   | Align paragraph text to the left         | Four staggered text strokes sharing a left edge.                              |
| align-center       | Text alignment   | Center paragraph text                    | Alternating long and short text strokes on one center axis.                   |
| align-right        | Text alignment   | Align paragraph text to the right        | Four staggered text strokes sharing a right edge.                             |
| align-justify      | Text alignment   | Justify paragraph text                   | Four equal-width text strokes, with a shorter final line.                     |
| indent-increase    | Text alignment   | Increase paragraph indentation           | Short leading bracket steps inward beside three text strokes.                 |
| indent-decrease    | Text alignment   | Decrease paragraph indentation           | Leading bracket steps outward beside three text strokes.                      |
| line-height        | Text formatting  | Adjust spacing between text lines        | Two text baselines with a vertical measuring stem between them.               |
| letter-spacing     | Text formatting  | Adjust spacing between characters        | Two upright letter stems separated by a horizontal dimension bar.             |
| text-color         | Text formatting  | Choose foreground text color             | Capital A above a shallow outlined color swatch.                              |
| highlighter        | Text formatting  | Highlight a text passage                 | Angled marker nib above a wide rectangular highlight stroke.                  |
| remove-formatting  | Text formatting  | Clear applied text styles                | Slanted T with a small detached erasing slash at its foot.                    |
| paragraph          | Text formatting  | Show paragraph marks                     | Pilcrow with a rounded bowl and two descending stems.                         |
| quote              | Text formatting  | Insert a quotation block                 | Two separated quotation strokes with rounded upper hooks.                     |
| text-wrap          | Text formatting  | Wrap text within the editor width        | Long text stroke bends down into a shorter second line.                       |
| word-break         | Text formatting  | Allow a word to split across lines       | One word-shaped stroke crosses a dashed vertical wrap boundary.               |
| text-hyphenation   | Text formatting  | Hyphenate text at line endings           | Two short text rows with a detached hyphen at the first row end.              |
| paragraph-spacing  | Text formatting  | Set space between paragraphs             | Two pairs of text strokes separated by a measured central gap.                |
| text-align-top     | Text alignment   | Place text at the top of its frame       | Top boundary bar above three progressively shorter text strokes.              |
| text-align-middle  | Text alignment   | Center text vertically in its frame      | Two text strokes midway between short top and bottom boundaries.              |
| text-align-bottom  | Text alignment   | Place text at the bottom of its frame    | Three text strokes resting above a bottom boundary bar.                       |
| scissors           | Document editing | Cut selected content                     | Two open finger loops meet at a pivot and diverging blades.                   |
| eraser             | Document editing | Erase drawing strokes or annotations     | Tilted block eraser with a diagonal material seam and short residue line.     |
| spell-check        | Document editing | Check spelling                           | Outlined a and b above a small check stroke.                                  |
| find-replace       | Document editing | Replace matching text                    | Small search lens beside two differently shaped text tokens.                  |
| file-diff          | Document editing | Inspect changes within a document        | Folded page with a short addition cross and separate deletion stroke.         |
| file-code          | Document editing | Identify a source-code file              | Folded page holding two compact opposing code angles.                         |
| word-count         | Document editing | Show document word totals                | Two word-length strokes above a compact numeric tally.                        |
| page-break         | Document editing | Insert a page break                      | Upper and lower page edges separated by a dashed horizontal break.            |
| page-number        | Document editing | Add automatic page numbers               | Open page outline with a small number sign at the foot.                       |
| page-margin        | Document editing | Set document margins                     | Page outline with four short inset margin guides.                             |
| page-size          | Document editing | Choose paper dimensions                  | Page rectangle beside short horizontal and vertical dimension ticks.          |
| footnote           | Document editing | Insert a footnote reference              | Text strokes with a raised reference mark and separated bottom note.          |
| track-changes      | Document editing | Record editorial revisions               | Two text strokes, a slim change bar, and an offset editing nib.               |
| sticky-note        | Document editing | Add a sticky annotation                  | Square note with one lower corner curled inward and a short text stroke.      |
| stamp              | Document editing | Place a document stamp                   | Rounded stamp handle above a narrow rectangular stamping base.                |
| scan-text          | Document editing | Extract text with OCR                    | Four scanning corners surround two unequal text strokes.                      |
| unlink             | Document editing | Remove a hyperlink                       | Two separated open chain ends with short break marks in the gap.              |
| redact             | Document editing | Hide sensitive document passages         | Three outlined redaction bars of unequal length inside open page corners.     |
| text-direction-rtl | Text formatting  | Set right-to-left paragraph direction    | Small paragraph mark beside a baseline direction cue pointing left.           |
| document-template  | Document editing | Start a document from a template         | Page outline containing dashed title and body placeholders.                   |
| page-header        | Document editing | Edit the repeated page header            | Page outline with a separated narrow band along its upper edge.               |
| page-footer        | Document editing | Edit the repeated page footer            | Page outline with a separated narrow band along its lower edge.               |
| git-commit         | Source control   | Record a revision                        | One central revision circle interrupts a horizontal history line.             |
| git-pull-request   | Source control   | Open or inspect a pull request           | Two revision stems with one curved connection entering the main stem.         |
| git-merge          | Source control   | Merge one revision line into another     | Two lower revision stems join into one upper revision circle.                 |
| git-compare        | Source control   | Compare two branch tips                  | Two parallel revision stems with a small bridge across their middle.          |
| git-rebase         | Source control   | Move commits onto a different base       | Solid revision chain beside an offset dotted former position.                 |
| git-cherry-pick    | Source control   | Apply one selected commit                | One isolated revision node connects across to a separate history stem.        |
| git-conflict       | Source control   | Resolve incompatible branch changes      | Two revision paths meet at a broken central crossing.                         |
| git-graph          | Source control   | Browse a revision graph                  | Three short commit chains branch and rejoin at different heights.             |
| bug                | Programming      | Open a defect or debugger                | Small segmented body with antennae and three pairs of short legs.             |
| variable           | Programming      | Inspect or insert a variable             | Slanted x enclosed by two short low braces.                                   |
| function           | Programming      | Identify a callable function             | Long hooked f beside a compact pair of parentheses.                           |
| lambda             | Programming      | Identify an anonymous function           | Open lambda letterform with a long descending diagonal.                       |
| regex              | Programming      | Enable regular-expression matching       | Compact dot and star pattern between two short delimiter strokes.             |
| binary             | Programming      | Inspect binary data                      | Two rows of open 0 and straight 1 glyphs in alternating positions.            |
| array              | Programming      | Inspect an indexed collection            | Square brackets enclose three evenly spaced small data marks.                 |
| boolean            | Programming      | Identify a true-or-false value           | Adjacent compact T and F glyphs separated by a short vertical rule.           |
| string             | Programming      | Identify a string value                  | Paired quotation marks enclose a short continuous text stroke.                |
| number             | Programming      | Identify a numeric value                 | Open 1 and 2 glyphs share a short baseline.                                   |
| parentheses        | Programming      | Group an expression                      | Two tall curved delimiters with generous open space between them.             |
| ampersand          | Programming      | Insert an ampersand or conjunction       | One continuous looped ampersand stroke with a short open terminal.            |
| breakpoint         | Programming      | Set or inspect a debugging breakpoint    | Open octagonal stop marker beside a short code-line stroke.                   |
| recursion          | Programming      | Inspect a recursive call                 | Nested call brackets share a returning inner loop.                            |
| webhook            | Infrastructure   | Configure an event callback              | Three circular endpoint cups connect through a curved central junction.       |
| api                | Infrastructure   | Identify an API connection               | Opposing open socket brackets meet at two short connector pins.               |
| network            | Infrastructure   | Inspect a service topology               | Four separated service nodes connect as a sparse mesh.                        |
| cluster            | Infrastructure   | Identify a compute cluster               | Three small server cells surround one shared central node.                    |
| container          | Infrastructure   | Identify a packaged runtime              | Long runtime boundary contains two small process compartments and a lid seam. |
| virtual-machine    | Infrastructure   | Identify a virtual compute instance      | Small guest window sits inside a larger host boundary with separate feet.     |
| load-balancer      | Infrastructure   | Distribute requests across services      | One ingress node connects through a horizontal bus to three service cells.    |
| queue              | Infrastructure   | Inspect a work queue                     | Open channel holds three spaced job tokens and one waiting token outside.     |
| cache              | Infrastructure   | Identify a temporary data cache          | Compact open storage loop surrounds a short central data slot.                |
| database-schema    | Infrastructure   | Inspect database relationships           | Three small entity boxes connect through orthogonal relationship lines.       |
| data-stream        | Infrastructure   | Inspect a continuous data feed           | Spaced square data tokens follow two parallel gently curved channels.         |
| dependency         | Infrastructure   | Inspect a package dependency             | Two offset component blocks connect through a stepped attachment line.        |
| sandbox            | Infrastructure   | Identify an isolated test environment    | Dashed boundary surrounds two compact code angles on a short floor line.      |
| pipeline           | Infrastructure   | Inspect a build or delivery pipeline     | Three distinct stage cells connect along one horizontal execution rail.       |
| database-query     | Infrastructure   | Run or inspect a data query              | Small cylinder opens toward an offset search lens with a short query stroke.  |
| database-replica   | Infrastructure   | Inspect a replicated database            | Two small cylinders connect through a shared horizontal replication rail.     |
| at-sign            | Collaboration    | Mention a person or address              | Open outer loop surrounds a small a-shaped center.                            |
| hash               | Collaboration    | Reference a channel or issue number      | Two offset upright strokes cross two parallel horizontal strokes.             |
| thumbs-up          | Collaboration    | Acknowledge or approve a contribution    | Raised thumb joins a simple open palm and short wrist cuff.                   |
| thumbs-down        | Collaboration    | Express disagreement with a contribution | Lowered thumb joins a simple open palm and short wrist cuff.                  |
| message-dots       | Collaboration    | Show that a collaborator is typing       | Rounded comment outline contains three widely spaced small dots.              |
| organization-chart | Collaboration    | Browse a reporting hierarchy             | One upper role box connects through a shared stem to three lower role boxes.  |
| vote               | Collaboration    | Cast or review a ballot                  | Narrow ballot paper enters a slotted box with a clear top seam.               |
| message-reply      | Collaboration    | Reply to a specific comment              | Open comment outline contains a small hooked return stroke.                   |

## Machine-readable names and existing-concept aliases

`names` is the exact proposed canonical set. `existingAliases` maps existing canonical names to additional search terms only. None of those aliases creates a component or contributes to the 100-icon count. Alias spelling can overlap natural search tags; the canonical return value remains the existing icon name.

```json
{
  "names": [
    "bold",
    "italic",
    "underline",
    "strikethrough",
    "heading",
    "subscript",
    "superscript",
    "small-caps",
    "text-direction-ltr",
    "case-upper",
    "case-lower",
    "case-title",
    "align-left",
    "align-center",
    "align-right",
    "align-justify",
    "indent-increase",
    "indent-decrease",
    "line-height",
    "letter-spacing",
    "text-color",
    "highlighter",
    "remove-formatting",
    "paragraph",
    "quote",
    "text-wrap",
    "word-break",
    "text-hyphenation",
    "paragraph-spacing",
    "text-align-top",
    "text-align-middle",
    "text-align-bottom",
    "scissors",
    "eraser",
    "spell-check",
    "find-replace",
    "file-diff",
    "file-code",
    "word-count",
    "page-break",
    "page-number",
    "page-margin",
    "page-size",
    "footnote",
    "track-changes",
    "sticky-note",
    "stamp",
    "scan-text",
    "unlink",
    "redact",
    "text-direction-rtl",
    "document-template",
    "page-header",
    "page-footer",
    "git-commit",
    "git-pull-request",
    "git-merge",
    "git-compare",
    "git-rebase",
    "git-cherry-pick",
    "git-conflict",
    "git-graph",
    "bug",
    "variable",
    "function",
    "lambda",
    "regex",
    "binary",
    "array",
    "boolean",
    "string",
    "number",
    "parentheses",
    "ampersand",
    "breakpoint",
    "recursion",
    "webhook",
    "api",
    "network",
    "cluster",
    "container",
    "virtual-machine",
    "load-balancer",
    "queue",
    "cache",
    "database-schema",
    "data-stream",
    "dependency",
    "sandbox",
    "pipeline",
    "database-query",
    "database-replica",
    "at-sign",
    "hash",
    "thumbs-up",
    "thumbs-down",
    "message-dots",
    "organization-chart",
    "vote",
    "message-reply"
  ],
  "existingAliases": {
    "edit": ["pencil", "write", "rename"],
    "edit-square": ["compose", "square-pen"],
    "copy": ["duplicate", "clone"],
    "clipboard": ["paste", "clipboard-copy"],
    "clipboard-check": ["review-complete", "checklist-complete"],
    "clipboard-list": ["checklist", "task-list"],
    "file": ["document", "page"],
    "files": ["documents", "pages"],
    "file-add": ["new-document", "file-plus"],
    "file-remove": ["file-minus", "remove-document"],
    "file-text": ["text-document", "notes-file", "document-text"],
    "file-search": ["find-in-file", "document-search"],
    "file-check": ["document-approved", "file-verified"],
    "file-import": ["document-import"],
    "file-export": ["document-export"],
    "file-lock": ["protected-document"],
    "folder": ["directory"],
    "folder-open": ["open-directory"],
    "folder-add": ["new-directory", "folder-plus"],
    "paperclip": ["attach", "attachment"],
    "notebook": ["notepad", "journal"],
    "book": ["book-open", "documentation", "manual"],
    "link": ["hyperlink", "chain-link"],
    "external-link": ["open-in-new", "new-tab"],
    "code": ["source-code", "code-xml", "code-block", "markup", "html"],
    "terminal": ["console", "shell", "command-line", "repl"],
    "command": ["command-key", "cmd-key"],
    "braces": ["curly-braces", "json", "json-object"],
    "git-branch": ["branch", "git-fork", "branching", "conditional", "if-else"],
    "bot": ["automation", "assistant-bot"],
    "package": ["software-package", "artifact", "bundle"],
    "package-add": ["install-package", "add-dependency"],
    "puzzle": ["plugin", "extension", "module"],
    "database": ["datastore", "sql-database"],
    "server": ["hosting", "backend", "rack-server"],
    "cloud": ["cloud-service", "remote-storage"],
    "cloud-upload": ["upload-to-cloud"],
    "cloud-download": ["download-from-cloud"],
    "cloud-sync": ["synchronize-cloud"],
    "save": ["save-document", "persist"],
    "search": ["find", "text-search", "magnifier"],
    "filter": ["query-filter", "narrow-results"],
    "sliders": ["preferences", "tune"],
    "settings": ["configuration", "gear"],
    "undo": ["revert", "rollback"],
    "redo": ["reapply"],
    "refresh": ["reload", "refresh-data"],
    "expand": ["unfold", "unfold-code"],
    "collapse": ["fold", "fold-code"],
    "archive": ["stash", "git-stash"],
    "archive-restore": ["unstash", "restore-stash"],
    "history": ["change-history", "audit-history"],
    "flag": ["feature-flag", "milestone"],
    "tag": ["git-tag", "version-tag"],
    "rocket": ["deploy", "deployment", "launch-release"],
    "users": ["team", "collaborators", "meeting", "pair-programming"],
    "user-add": ["invite-collaborator", "invite-user"],
    "user-check": ["approved-collaborator"],
    "user-remove": ["remove-collaborator"],
    "user-lock": ["restricted-collaborator"],
    "handshake": ["agreement", "partnership"],
    "message": ["chat", "comment", "discussion"],
    "messages": ["conversation", "thread", "message-thread"],
    "message-check": ["resolved-comment", "resolved-thread"],
    "mail-send": ["send-message", "send-email"],
    "share": ["sharing", "share-document"],
    "pin": ["pin-message", "pin-comment"],
    "bookmark": ["saved-reference"],
    "repeat": ["iteration", "rerun"]
  }
}
```

## Review notes

The batch has 33 text-formatting and alignment icons, 21 document-editing icons, 8 source-control icons, 30 programming and infrastructure icons, and 8 collaboration icons. The source-control drawings use revision nodes rather than standalone directional symbols. Infrastructure networking describes software topology rather than consumer networking hardware.

`file-diff` compares content within a document; `git-compare` compares revision lines; `git-graph` shows history topology. `line-height` controls lines within a paragraph; `paragraph-spacing` controls the gap between paragraphs. `text-wrap`, `word-break`, and `text-hyphenation` have separate editor behaviors. `container` denotes a packaged runtime, while `sandbox` denotes an isolated test environment. These distinctions must survive the later visual review. If a pair remains indistinguishable at small sizes, replace the weaker concept before implementation approval instead of counting duplicate geometry.

Validation: the table and JSON contain 100 names in the same order, all unique, with no existing `src/definitions` name collisions. Every `existingAliases` key is an existing canonical icon. The current editing, interface, and application coverage arrays contain 300 unique names with no cross-batch collisions.
