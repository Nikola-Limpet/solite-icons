import { taggedCategory } from "./category.js";
const interfaceExpansionMetadata = {
  ...taggedCategory("Accessibility preferences", {
    keyboard: ["keys", "typing", "shortcuts", "navigation", "input"],
    "keyboard-off": ["keys", "shortcuts", "disabled", "hide keyboard"],
    captions: ["closed captions", "subtitles", "hearing", "video", "cc"],
    "captions-off": ["subtitles", "closed captions", "disabled", "cc"],
    ear: ["hearing", "listen", "auditory", "assistance"],
    "ear-off": ["hearing", "deaf", "listening disabled", "auditory"],
    contrast: ["high contrast", "visibility", "appearance", "light dark"],
    type: ["font", "text", "typography", "readability"],
    "text-cursor": ["caret", "insertion point", "ibeam", "text navigation"],
    "reading-guide": ["line focus", "readability", "reading ruler", "tracking"],
    speech: ["read aloud", "text to speech", "spoken feedback", "voice"],
    focus: ["focus indicator", "keyboard navigation", "target", "attention"],
    "mouse-pointer": ["cursor", "arrow cursor", "pointer settings", "navigation"],
    "keyboard-key": ["keycap", "shortcut", "remap", "enter", "return"]
  }),
  ...taggedCategory("Forms", {
    "text-cursor-input": ["text field", "textbox", "caret", "single line", "edit"],
    textarea: ["multiline", "text area", "response", "paragraph", "resize"],
    select: ["dropdown", "option", "choose", "single select"],
    combobox: ["autocomplete", "search select", "dropdown", "searchable options"],
    "toggle-left": ["switch", "off", "disabled state", "false"],
    "toggle-right": ["switch", "on", "enabled state", "true"],
    "input-otp": ["verification", "one time password", "code", "two factor", "pin"],
    "input-password": ["secret", "masked", "password field", "credentials"],
    asterisk: ["required", "mandatory", "star mark", "wildcard"],
    form: ["questionnaire", "survey", "fields", "application", "submit"],
    signature: ["sign", "handwriting", "autograph", "approval", "esign"],
    "input-number": ["quantity", "stepper", "numeric", "increment", "decrement"],
    "input-clear": ["clear field", "reset text", "erase", "dismiss value"]
  }),
  ...taggedCategory("Selection states", {
    circle: ["radio unchecked", "round", "shape", "unselected"],
    square: ["checkbox unchecked", "shape", "unselected", "box"],
    "circle-dot": ["radio selected", "active step", "checked", "round"],
    "minus-square": ["indeterminate", "partial selection", "checkbox mixed", "collapse node"],
    "plus-square": ["add item", "expand node", "tree", "collection"],
    "square-dashed": ["marquee", "selection area", "bounding box", "dotted rectangle"],
    lasso: ["freehand selection", "irregular region", "canvas", "rope"],
    "lasso-polygon": ["polygonal selection", "straight edges", "canvas", "region"],
    "mouse-pointer-click": ["click", "cursor", "select item", "inspect", "tap"],
    hand: ["pan", "drag view", "grab", "palm", "canvas"]
  }),
  ...taggedCategory("Tables", {
    "table-row-add": ["insert row", "spreadsheet", "data grid", "append record"],
    "table-row-remove": ["delete row", "spreadsheet", "data grid", "remove record"],
    "table-column-add": ["insert column", "spreadsheet", "data grid", "add field"],
    "table-column-remove": ["delete column", "spreadsheet", "data grid", "remove field"],
    "table-row-select": ["select row", "horizontal band", "spreadsheet", "record"],
    "table-column-select": ["select column", "vertical band", "spreadsheet", "field"],
    "table-cells-merge": ["combine cells", "join", "spreadsheet", "merge columns"],
    "table-cells-split": ["divide cell", "separate", "spreadsheet", "split column"],
    "table-row-freeze": ["freeze header", "sticky row", "pin row", "spreadsheet"],
    "table-column-freeze": ["freeze column", "sticky column", "pin field", "spreadsheet"]
  }),
  ...taggedCategory("Lists and sorting", {
    "chevrons-up-down": ["sortable", "expand vertically", "selector", "double chevron"],
    "sort-ascending": ["increasing", "small to large", "order", "low to high"],
    "sort-descending": ["decreasing", "large to small", "order", "high to low"],
    "sort-alphabetical": ["a to z", "alphabet", "text order", "lexicographic"],
    "sort-numeric": ["number order", "magnitude", "one to nine", "ranking"],
    list: ["bullets", "unordered list", "items", "list view"],
    "list-ordered": ["numbered list", "steps", "sequence", "ranking"],
    "list-checks": ["tasks", "checklist", "todo", "completed"],
    "list-tree": ["hierarchy", "nested navigation", "outline", "branches"]
  }),
  ...taggedCategory("Pagination", {
    "chevrons-left": ["previous group", "double left", "backward", "page group"],
    "chevrons-right": ["next group", "double right", "forward", "page group"],
    "arrow-left-to-line": ["first page", "beginning", "start", "jump left"],
    "arrow-right-to-line": ["last page", "end", "finish", "jump right"]
  }),
  ...taggedCategory("Panels", {
    "panel-right": ["right sidebar", "inspector", "workspace", "right pane"],
    "panel-top": ["top pane", "header panel", "workspace", "toolbar"],
    "panel-bottom": ["bottom pane", "footer panel", "workspace", "console"],
    "panel-left-open": ["show sidebar", "left drawer", "expand panel", "reveal"],
    "panel-left-close": ["hide sidebar", "left drawer", "collapse panel", "dismiss"],
    "panel-right-open": ["show inspector", "right drawer", "expand panel", "reveal"],
    "panel-right-close": ["hide inspector", "right drawer", "collapse panel", "dismiss"],
    "panel-top-open": ["show top drawer", "expand panel", "reveal", "downward"],
    "panel-top-close": ["hide top drawer", "collapse panel", "dismiss", "upward"],
    "panel-bottom-open": ["show console", "bottom drawer", "expand panel", "upward"],
    "panel-bottom-close": ["hide console", "bottom drawer", "collapse panel", "downward"],
    "panel-resize": ["split pane", "resize divider", "adjust width", "workspace"]
  }),
  ...taggedCategory("Directional arrows", {
    "arrow-up-left": ["northwest", "diagonal", "direction", "upper left"],
    "arrow-up-right": ["northeast", "diagonal", "direction", "upper right"],
    "arrow-down-left": ["southwest", "diagonal", "direction", "lower left"],
    "arrow-down-right": ["southeast", "diagonal", "direction", "lower right"],
    "arrow-left-right": ["exchange", "swap", "opposing arrows", "transfer"],
    "arrow-up-to-line": ["jump top", "align top", "upper edge", "beginning"],
    "arrow-down-to-line": ["jump bottom", "align bottom", "lower edge", "end"],
    "corner-down-left": ["turn left", "down then left", "elbow arrow", "route"],
    "corner-down-right": ["turn right", "down then right", "elbow arrow", "route"],
    "corner-up-left": ["turn left", "up then left", "elbow arrow", "route"],
    "corner-up-right": ["turn right", "up then right", "elbow arrow", "route"],
    "corner-left-up": ["turn up", "left then up", "elbow arrow", "route"],
    "corner-left-down": ["turn down", "left then down", "elbow arrow", "route"],
    "corner-right-up": ["turn up", "right then up", "elbow arrow", "route"],
    "corner-right-down": ["turn down", "right then down", "elbow arrow", "route"],
    "move-horizontal": ["horizontal resize", "drag axis", "left right", "width"],
    "move-vertical": ["vertical resize", "drag axis", "up down", "height"]
  }),
  ...taggedCategory("Layouts", {
    layers: ["stack", "planes", "overlap", "layer management"],
    "columns-2": ["two columns", "equal split", "vertical layout", "side by side"],
    "columns-3": ["three columns", "equal split", "vertical layout", "triptych"],
    "rows-2": ["two rows", "horizontal layout", "equal split", "stacked content"],
    "rows-3": ["three rows", "horizontal layout", "equal split", "stacked content"],
    "panels-left-right": ["both sidebars", "three panes", "workspace", "edge panels"],
    "layout-header-footer": ["header", "footer", "page bands", "content layout"],
    "layout-centered": ["reading width", "center column", "gutters", "constrained content"],
    "layout-overlay": ["modal", "dialog", "floating window", "popup"],
    "layout-tabs": ["tabbed workspace", "navigation tabs", "active tab", "sections"],
    "layout-responsive": ["breakpoints", "mobile desktop", "adaptive", "screen sizes"]
  })
};
export {
  interfaceExpansionMetadata
};
