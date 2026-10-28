const interfaceExpansionMetadata = {
  keyboard: {
    category: "Accessibility preferences",
    tags: ["keys", "typing", "shortcuts", "navigation", "input"]
  },
  "keyboard-off": {
    category: "Accessibility preferences",
    tags: ["keys", "shortcuts", "disabled", "hide keyboard"]
  },
  captions: {
    category: "Accessibility preferences",
    tags: ["closed captions", "subtitles", "hearing", "video", "cc"]
  },
  "captions-off": {
    category: "Accessibility preferences",
    tags: ["subtitles", "closed captions", "disabled", "cc"]
  },
  ear: {
    category: "Accessibility preferences",
    tags: ["hearing", "listen", "auditory", "assistance"]
  },
  "ear-off": {
    category: "Accessibility preferences",
    tags: ["hearing", "deaf", "listening disabled", "auditory"]
  },
  contrast: {
    category: "Accessibility preferences",
    tags: ["high contrast", "visibility", "appearance", "light dark"]
  },
  type: {
    category: "Accessibility preferences",
    tags: ["font", "text", "typography", "readability"]
  },
  "text-cursor": {
    category: "Accessibility preferences",
    tags: ["caret", "insertion point", "ibeam", "text navigation"]
  },
  "reading-guide": {
    category: "Accessibility preferences",
    tags: ["line focus", "readability", "reading ruler", "tracking"]
  },
  speech: {
    category: "Accessibility preferences",
    tags: ["read aloud", "text to speech", "spoken feedback", "voice"]
  },
  focus: {
    category: "Accessibility preferences",
    tags: ["focus indicator", "keyboard navigation", "target", "attention"]
  },
  "mouse-pointer": {
    category: "Accessibility preferences",
    tags: ["cursor", "arrow cursor", "pointer settings", "navigation"]
  },
  "keyboard-key": {
    category: "Accessibility preferences",
    tags: ["keycap", "shortcut", "remap", "enter", "return"]
  },
  "text-cursor-input": {
    category: "Forms",
    tags: ["text field", "textbox", "caret", "single line", "edit"]
  },
  textarea: {
    category: "Forms",
    tags: ["multiline", "text area", "response", "paragraph", "resize"]
  },
  select: { category: "Forms", tags: ["dropdown", "option", "choose", "single select"] },
  combobox: {
    category: "Forms",
    tags: ["autocomplete", "search select", "dropdown", "searchable options"]
  },
  "toggle-left": { category: "Forms", tags: ["switch", "off", "disabled state", "false"] },
  "toggle-right": { category: "Forms", tags: ["switch", "on", "enabled state", "true"] },
  "input-otp": {
    category: "Forms",
    tags: ["verification", "one time password", "code", "two factor", "pin"]
  },
  "input-password": {
    category: "Forms",
    tags: ["secret", "masked", "password field", "credentials"]
  },
  asterisk: { category: "Forms", tags: ["required", "mandatory", "star mark", "wildcard"] },
  form: { category: "Forms", tags: ["questionnaire", "survey", "fields", "application", "submit"] },
  signature: { category: "Forms", tags: ["sign", "handwriting", "autograph", "approval", "esign"] },
  "input-number": {
    category: "Forms",
    tags: ["quantity", "stepper", "numeric", "increment", "decrement"]
  },
  "input-clear": {
    category: "Forms",
    tags: ["clear field", "reset text", "erase", "dismiss value"]
  },
  circle: {
    category: "Selection states",
    tags: ["radio unchecked", "round", "shape", "unselected"]
  },
  square: {
    category: "Selection states",
    tags: ["checkbox unchecked", "shape", "unselected", "box"]
  },
  "circle-dot": {
    category: "Selection states",
    tags: ["radio selected", "active step", "checked", "round"]
  },
  "minus-square": {
    category: "Selection states",
    tags: ["indeterminate", "partial selection", "checkbox mixed", "collapse node"]
  },
  "plus-square": {
    category: "Selection states",
    tags: ["add item", "expand node", "tree", "collection"]
  },
  "square-dashed": {
    category: "Selection states",
    tags: ["marquee", "selection area", "bounding box", "dotted rectangle"]
  },
  lasso: {
    category: "Selection states",
    tags: ["freehand selection", "irregular region", "canvas", "rope"]
  },
  "lasso-polygon": {
    category: "Selection states",
    tags: ["polygonal selection", "straight edges", "canvas", "region"]
  },
  "mouse-pointer-click": {
    category: "Selection states",
    tags: ["click", "cursor", "select item", "inspect", "tap"]
  },
  hand: { category: "Selection states", tags: ["pan", "drag view", "grab", "palm", "canvas"] },
  "table-row-add": {
    category: "Tables",
    tags: ["insert row", "spreadsheet", "data grid", "append record"]
  },
  "table-row-remove": {
    category: "Tables",
    tags: ["delete row", "spreadsheet", "data grid", "remove record"]
  },
  "table-column-add": {
    category: "Tables",
    tags: ["insert column", "spreadsheet", "data grid", "add field"]
  },
  "table-column-remove": {
    category: "Tables",
    tags: ["delete column", "spreadsheet", "data grid", "remove field"]
  },
  "table-row-select": {
    category: "Tables",
    tags: ["select row", "horizontal band", "spreadsheet", "record"]
  },
  "table-column-select": {
    category: "Tables",
    tags: ["select column", "vertical band", "spreadsheet", "field"]
  },
  "table-cells-merge": {
    category: "Tables",
    tags: ["combine cells", "join", "spreadsheet", "merge columns"]
  },
  "table-cells-split": {
    category: "Tables",
    tags: ["divide cell", "separate", "spreadsheet", "split column"]
  },
  "table-row-freeze": {
    category: "Tables",
    tags: ["freeze header", "sticky row", "pin row", "spreadsheet"]
  },
  "table-column-freeze": {
    category: "Tables",
    tags: ["freeze column", "sticky column", "pin field", "spreadsheet"]
  },
  "chevrons-up-down": {
    category: "Lists and sorting",
    tags: ["sortable", "expand vertically", "selector", "double chevron"]
  },
  "sort-ascending": {
    category: "Lists and sorting",
    tags: ["increasing", "small to large", "order", "low to high"]
  },
  "sort-descending": {
    category: "Lists and sorting",
    tags: ["decreasing", "large to small", "order", "high to low"]
  },
  "sort-alphabetical": {
    category: "Lists and sorting",
    tags: ["a to z", "alphabet", "text order", "lexicographic"]
  },
  "sort-numeric": {
    category: "Lists and sorting",
    tags: ["number order", "magnitude", "one to nine", "ranking"]
  },
  list: {
    category: "Lists and sorting",
    tags: ["bullets", "unordered list", "items", "list view"]
  },
  "list-ordered": {
    category: "Lists and sorting",
    tags: ["numbered list", "steps", "sequence", "ranking"]
  },
  "list-checks": {
    category: "Lists and sorting",
    tags: ["tasks", "checklist", "todo", "completed"]
  },
  "list-tree": {
    category: "Lists and sorting",
    tags: ["hierarchy", "nested navigation", "outline", "branches"]
  },
  "chevrons-left": {
    category: "Pagination",
    tags: ["previous group", "double left", "backward", "page group"]
  },
  "chevrons-right": {
    category: "Pagination",
    tags: ["next group", "double right", "forward", "page group"]
  },
  "arrow-left-to-line": {
    category: "Pagination",
    tags: ["first page", "beginning", "start", "jump left"]
  },
  "arrow-right-to-line": {
    category: "Pagination",
    tags: ["last page", "end", "finish", "jump right"]
  },
  "panel-right": {
    category: "Panels",
    tags: ["right sidebar", "inspector", "workspace", "right pane"]
  },
  "panel-top": { category: "Panels", tags: ["top pane", "header panel", "workspace", "toolbar"] },
  "panel-bottom": {
    category: "Panels",
    tags: ["bottom pane", "footer panel", "workspace", "console"]
  },
  "panel-left-open": {
    category: "Panels",
    tags: ["show sidebar", "left drawer", "expand panel", "reveal"]
  },
  "panel-left-close": {
    category: "Panels",
    tags: ["hide sidebar", "left drawer", "collapse panel", "dismiss"]
  },
  "panel-right-open": {
    category: "Panels",
    tags: ["show inspector", "right drawer", "expand panel", "reveal"]
  },
  "panel-right-close": {
    category: "Panels",
    tags: ["hide inspector", "right drawer", "collapse panel", "dismiss"]
  },
  "panel-top-open": {
    category: "Panels",
    tags: ["show top drawer", "expand panel", "reveal", "downward"]
  },
  "panel-top-close": {
    category: "Panels",
    tags: ["hide top drawer", "collapse panel", "dismiss", "upward"]
  },
  "panel-bottom-open": {
    category: "Panels",
    tags: ["show console", "bottom drawer", "expand panel", "upward"]
  },
  "panel-bottom-close": {
    category: "Panels",
    tags: ["hide console", "bottom drawer", "collapse panel", "downward"]
  },
  "panel-resize": {
    category: "Panels",
    tags: ["split pane", "resize divider", "adjust width", "workspace"]
  },
  "arrow-up-left": {
    category: "Directional arrows",
    tags: ["northwest", "diagonal", "direction", "upper left"]
  },
  "arrow-up-right": {
    category: "Directional arrows",
    tags: ["northeast", "diagonal", "direction", "upper right"]
  },
  "arrow-down-left": {
    category: "Directional arrows",
    tags: ["southwest", "diagonal", "direction", "lower left"]
  },
  "arrow-down-right": {
    category: "Directional arrows",
    tags: ["southeast", "diagonal", "direction", "lower right"]
  },
  "arrow-left-right": {
    category: "Directional arrows",
    tags: ["exchange", "swap", "opposing arrows", "transfer"]
  },
  "arrow-up-to-line": {
    category: "Directional arrows",
    tags: ["jump top", "align top", "upper edge", "beginning"]
  },
  "arrow-down-to-line": {
    category: "Directional arrows",
    tags: ["jump bottom", "align bottom", "lower edge", "end"]
  },
  "corner-down-left": {
    category: "Directional arrows",
    tags: ["turn left", "down then left", "elbow arrow", "route"]
  },
  "corner-down-right": {
    category: "Directional arrows",
    tags: ["turn right", "down then right", "elbow arrow", "route"]
  },
  "corner-up-left": {
    category: "Directional arrows",
    tags: ["turn left", "up then left", "elbow arrow", "route"]
  },
  "corner-up-right": {
    category: "Directional arrows",
    tags: ["turn right", "up then right", "elbow arrow", "route"]
  },
  "corner-left-up": {
    category: "Directional arrows",
    tags: ["turn up", "left then up", "elbow arrow", "route"]
  },
  "corner-left-down": {
    category: "Directional arrows",
    tags: ["turn down", "left then down", "elbow arrow", "route"]
  },
  "corner-right-up": {
    category: "Directional arrows",
    tags: ["turn up", "right then up", "elbow arrow", "route"]
  },
  "corner-right-down": {
    category: "Directional arrows",
    tags: ["turn down", "right then down", "elbow arrow", "route"]
  },
  "move-horizontal": {
    category: "Directional arrows",
    tags: ["horizontal resize", "drag axis", "left right", "width"]
  },
  "move-vertical": {
    category: "Directional arrows",
    tags: ["vertical resize", "drag axis", "up down", "height"]
  },
  layers: { category: "Layouts", tags: ["stack", "planes", "overlap", "layer management"] },
  "columns-2": {
    category: "Layouts",
    tags: ["two columns", "equal split", "vertical layout", "side by side"]
  },
  "columns-3": {
    category: "Layouts",
    tags: ["three columns", "equal split", "vertical layout", "triptych"]
  },
  "rows-2": {
    category: "Layouts",
    tags: ["two rows", "horizontal layout", "equal split", "stacked content"]
  },
  "rows-3": {
    category: "Layouts",
    tags: ["three rows", "horizontal layout", "equal split", "stacked content"]
  },
  "panels-left-right": {
    category: "Layouts",
    tags: ["both sidebars", "three panes", "workspace", "edge panels"]
  },
  "layout-header-footer": {
    category: "Layouts",
    tags: ["header", "footer", "page bands", "content layout"]
  },
  "layout-centered": {
    category: "Layouts",
    tags: ["reading width", "center column", "gutters", "constrained content"]
  },
  "layout-overlay": { category: "Layouts", tags: ["modal", "dialog", "floating window", "popup"] },
  "layout-tabs": {
    category: "Layouts",
    tags: ["tabbed workspace", "navigation tabs", "active tab", "sections"]
  },
  "layout-responsive": {
    category: "Layouts",
    tags: ["breakpoints", "mobile desktop", "adaptive", "screen sizes"]
  }
};
export {
  interfaceExpansionMetadata
};
