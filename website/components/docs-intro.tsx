import Link from "next/link";
import { ArrowRightIcon, CodeIcon } from "solite-icons";
import { CopyButton } from "./copy-button";
import { SoliteLogo } from "./solite-logo";

// THESIS: The drawings lead a practical, open-source introduction.
// OWN-WORLD: Blue accents, neutral surfaces, white reading space, rounded open geometry.
// STORY: Find an icon, install from npm, and use it in a real interface.
// FIRST VIEWPORT: Brand, large headline, install command, browse and source actions.
// FORM: Drawing specimen, candidate 3, direction seed 6d4b93e5.
export function DocsIntro() {
  return (
    <div className="docs-intro not-prose">
      <div className="intro-product">
        <SoliteLogo size={32} />
        <span>Solite Icons</span>
        <a href="https://github.com/Nikola-Limpet/solite-icons/releases/tag/v0.2.1">v0.2.1</a>
      </div>
      <h1>
        Outline icons.
        <br />
        <span>Open by design.</span>
      </h1>
      <p className="intro-description">
        253 original icons with rounded strokes and room to breathe. Find the right one for your
        interface, then make it your own with React or plain SVG.
      </p>
      <div className="install-command">
        <code>npm install solite-icons</code>
        <CopyButton text="npm install solite-icons" label="Copy command" />
      </div>
      <div className="intro-actions">
        <Link href="/icons" className="solite-button solite-button-primary">
          Browse all icons <ArrowRightIcon size={17} />
        </Link>
        <a href="https://github.com/Nikola-Limpet/solite-icons" className="solite-button">
          <CodeIcon size={17} /> View source
        </a>
      </div>
      <p className="intro-license">
        Open source. <Link href="/license">MIT licensed.</Link> Free to use in personal and
        commercial projects.
      </p>
    </div>
  );
}
