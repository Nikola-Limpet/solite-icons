/** Original Solite icons geometry. All icons share a 24×24 outline drawing grid. */
export type IconNode = readonly [
    tag: "path" | "rect" | "circle" | "ellipse" | "line" | "polyline" | "polygon",
    attributes: Readonly<Record<string, string | number>>
];
export type IconDefinition = readonly IconNode[];
export type IconGroup = Readonly<Record<string, IconDefinition>>;
export declare const p: (d: string) => IconNode;
export declare const r: (x: number, y: number, width: number, height: number, rx?: number) => IconNode;
export declare const c: (cx: number, cy: number, radius: number) => IconNode;
export declare const l: (x1: number, y1: number, x2: number, y2: number) => IconNode;
export declare const e: (cx: number, cy: number, rx: number, ry: number) => IconNode;
export declare const poly: (points: string) => IconNode;
