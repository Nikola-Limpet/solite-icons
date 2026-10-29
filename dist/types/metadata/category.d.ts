/** Attach a shared category without repeating it for every icon's search tags. */
export declare function taggedCategory<const Tags extends Record<string, readonly string[]>>(category: string, tags: Tags): { readonly [Name in keyof Tags]: {
    readonly category: string;
    readonly tags: Tags[Name];
}; };
