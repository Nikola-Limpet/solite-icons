import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { IconPlayground } from "./icon-playground";
import { IconBrowser } from "./icon-browser";
import { ExampleBoard } from "./example-board";
export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    IconPlayground,
    IconBrowser,
    ExampleBoard,
    ...components,
  } satisfies MDXComponents;
}
