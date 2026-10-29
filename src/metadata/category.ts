/** Attach a shared category without repeating it for every icon's search tags. */
export function taggedCategory<const Tags extends Record<string, readonly string[]>>(
  category: string,
  tags: Tags,
) {
  return Object.fromEntries(
    Object.entries(tags).map(([name, terms]) => [name, { category, tags: terms }]),
  ) as {
    readonly [Name in keyof Tags]: { readonly category: string; readonly tags: Tags[Name] };
  };
}
