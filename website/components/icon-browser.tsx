"use client";
import { useMemo, useState } from "react";
import { SearchIcon, DownloadIcon, XIcon } from "solite-icons";
import { icons, iconCategories, type SoliteIconName } from "solite-icons/data";
import { SoliteIcon } from "solite-icons/dynamic";
import { CopyButton } from "./copy-button";
const entries = Object.keys(icons) as SoliteIconName[];
const componentName = (name: string) =>
  name
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("") + "Icon";
export function IconBrowser() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [selected, setSelected] = useState<SoliteIconName>("shop");
  const [size, setSize] = useState(24);
  const filtered = useMemo(
    () =>
      entries.filter((name) => {
        const match =
          !category ||
          (iconCategories[category as keyof typeof iconCategories] as readonly string[]).includes(
            name,
          );
        const query = search.trim().toLowerCase().replaceAll(" ", "-");
        return (
          match &&
          (name.includes(query) ||
            componentName(name).toLowerCase().includes(query.replaceAll("-", "")))
        );
      }),
    [search, category],
  );
  const name = componentName(selected);
  const code = `import { ${name} } from "solite-icons";\n\n<${name} size={${size}} />`;
  const assetBase = process.env.NEXT_PUBLIC_DOCS_BASE_PATH || "";
  return (
    <div className="icon-browser not-prose">
      <div className="browser-toolbar">
        <label className="browser-search">
          <SearchIcon size={18} />
          <input
            aria-label="Search icons"
            placeholder="Search by name, like coffee or cash…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search ? (
            <button type="button" aria-label="Clear icon search" onClick={() => setSearch("")}>
              <XIcon size={15} />
            </button>
          ) : null}
        </label>
        <select
          aria-label="Icon category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All categories</option>
          {Object.keys(iconCategories).map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>
      <div className="browser-summary">
        <output>{filtered.length} icons</output>
        <span>Pick an icon to copy its React import.</span>
      </div>
      <div className="browser-layout">
        <div className="browser-grid">
          {filtered.map((icon) => (
            <button
              type="button"
              key={icon}
              aria-label={`Select ${icon}`}
              aria-pressed={selected === icon}
              className="icon-tile"
              onClick={() => setSelected(icon)}
            >
              <SoliteIcon name={icon} size={24} />
              <span>{icon}</span>
            </button>
          ))}
          {!filtered.length ? (
            <div className="browser-empty">
              <SearchIcon size={28} />
              <h2>No icons found</h2>
              <p>Try a shorter name or another category.</p>
              <button
                type="button"
                className="solite-button"
                onClick={() => {
                  setSearch("");
                  setCategory("");
                }}
              >
                Clear filters
              </button>
            </div>
          ) : null}
        </div>
        <aside className="icon-detail" aria-label="Selected icon">
          <div className="detail-stage">
            <SoliteIcon name={selected} size={size} />
          </div>
          <h2>{name}</h2>
          <span className="detail-name">{selected}</span>
          <div className="size-buttons" aria-label="Preview size">
            {[16, 20, 24, 32, 48].map((value) => (
              <button
                type="button"
                key={value}
                aria-pressed={size === value}
                onClick={() => setSize(value)}
              >
                {value}
              </button>
            ))}
          </div>
          <div className="snippet">
            <pre>
              <code>{code}</code>
            </pre>
          </div>
          <CopyButton text={code} label="Copy React" />
          <a className="solite-button" href={`${assetBase}/svg/${selected}.svg`} download>
            <DownloadIcon size={16} />
            Download SVG
          </a>
          <p>
            24px grid · Rounded outlines
            <br />
            Inherits your text color
          </p>
          <span className="sr-only" role="status">
            Selected {selected}, preview size {size} pixels
          </span>
        </aside>
      </div>
    </div>
  );
}
