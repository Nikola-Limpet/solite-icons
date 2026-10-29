import manifest from "solite-icons/manifest.json";

export const iconCount = manifest.count;
export const iconVersion = manifest.version;

type SearchEntry = {
  name: string;
  component: string;
  category?: string;
  tags?: readonly string[];
  aliases?: readonly string[];
};

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");
const entries = (manifest.icons as readonly SearchEntry[]).map((entry) => ({
  name: entry.name,
  terms: [
    entry.name,
    entry.component,
    entry.category ?? "",
    ...(entry.tags ?? []),
    ...(entry.aliases ?? []),
  ].map(normalize),
}));

/** Uses the installed release's shared metadata; older manifests still support name search. */
export function findIconNames(query: string): Set<string> {
  const text = normalize(query.trim());
  return new Set(
    entries
      .filter(({ terms }) => terms.some((term) => term.includes(text)))
      .map(({ name }) => name),
  );
}
