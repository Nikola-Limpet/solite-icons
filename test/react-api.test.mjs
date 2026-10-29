import test from "node:test";
import assert from "node:assert/strict";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import * as solite from "solite-icons";

test("provider defaults merge through nested providers while explicit icon props win", () => {
  assert.equal(typeof solite.SoliteProvider, "function", "SoliteProvider must be exported");
  const html = renderToStaticMarkup(
    createElement(
      solite.SoliteProvider,
      { size: 32, color: "red", strokeWidth: 2, className: "outer" },
      createElement(
        solite.SoliteProvider,
        { color: "blue", className: "inner" },
        createElement(solite.HomeIcon, { size: 20, width: 25, className: "local" }),
      ),
    ),
  );
  assert.match(html, /width="25"/);
  assert.match(html, /height="20"/);
  assert.match(html, /stroke="blue"/);
  assert.match(html, /stroke-width="2"/);
  assert.match(html, /class="outer inner local"/);
  assert.match(html, /aria-hidden="true"/);
});

test("non-scaling strokes reach every drawing element and can override a provider", () => {
  assert.equal(typeof solite.SoliteProvider, "function");
  const html = renderToStaticMarkup(
    createElement(
      solite.SoliteProvider,
      { nonScalingStroke: true },
      createElement(solite.HomeIcon, { size: "2rem", "data-test": "scaled" }),
      createElement(solite.HomeIcon, { nonScalingStroke: false, "data-test": "normal" }),
    ),
  );
  const svgs = [...html.matchAll(/<svg\b[\s\S]*?<\/svg>/g)].map((match) => match[0]);
  assert.equal((svgs[0].match(/vector-effect="non-scaling-stroke"/g) ?? []).length, 2);
  assert.doesNotMatch(svgs[1], /vector-effect/);
  assert.doesNotMatch(html, /nonScalingStroke=/);
});

test("provider styling never supplies an accessible name to its decorative children", () => {
  assert.equal(typeof solite.SoliteProvider, "function");
  const html = renderToStaticMarkup(
    createElement(
      solite.SoliteProvider,
      { title: "Wrong inherited title", "aria-label": "Wrong inherited label", size: 20 },
      createElement(solite.HomeIcon),
    ),
  );
  assert.match(html, /aria-hidden="true"/);
  assert.doesNotMatch(html, /Wrong inherited|<title|role="img"/);
});

test("explicit accessible names and hiding retain their precedence", () => {
  const html = renderToStaticMarkup(
    createElement(solite.HomeIcon, {
      title: "Fallback",
      "aria-label": "Direct name",
      "aria-labelledby": "external",
      "aria-hidden": true,
    }),
  );
  assert.match(html, /aria-labelledby="external"/);
  assert.match(html, /aria-label="Direct name"/);
  assert.match(html, /aria-hidden="true"/);
});
