import { useRef, useState } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HomeIcon, SettingsIcon, SoliteProvider } from "solite-icons";
import { LazySoliteIcon } from "solite-icons/lazy";

export function HydrationFixture() {
  return (
    <div>
      <HomeIcon title="First home" />
      <HomeIcon title="Second home" />
    </div>
  );
}

function App() {
  const [pressed, setPressed] = useState(false);
  const [name, setName] = useState("home");
  const [focused, setFocused] = useState(false);
  const ref = useRef<SVGSVGElement>(null);
  const lazyRef = useRef<SVGSVGElement>(null);
  const [lazyRefName, setLazyRefName] = useState("");
  return (
    <main>
      <h1>Solite accessibility fixture</h1>
      <button aria-label="Open settings">
        <SettingsIcon />
      </button>
      <button aria-pressed={pressed} onClick={() => setPressed(!pressed)}>
        <HomeIcon />
        Favorite
      </button>
      <button disabled>
        <SettingsIcon />
        Unavailable action
      </button>
      <section aria-label="Accessible images">
        <HomeIcon title="Informative home" />
        <HomeIcon aria-label="Labeled home" />
        <HomeIcon title="Ignored title" aria-label="Preferred direct label" />
        <span id="preferred-reference">Preferred referenced label</span>
        <HomeIcon
          title="Ignored referenced title"
          aria-label="Ignored direct name"
          aria-labelledby="preferred-reference"
        />
        <span id="external-label">Referenced home</span>
        <HomeIcon aria-labelledby="external-label" />
        <HomeIcon title="Explicitly hidden" aria-hidden />
        <HomeIcon title="Repeated home" />
        <HomeIcon title="Repeated home" />
      </section>
      <SoliteProvider size={32} nonScalingStroke className="provider">
        <HomeIcon ref={ref} aria-label="Ref target" />
      </SoliteProvider>
      <button onClick={() => setFocused(ref.current instanceof SVGSVGElement)}>
        Check SVG ref
      </button>
      <output aria-live="polite">{focused ? "SVG ref connected" : "Waiting for SVG ref"}</output>
      <section aria-label="Lazy example">
        <LazySoliteIcon ref={lazyRef} name={name as "home" | "ear"} title="Current lazy icon" />
        <button onClick={() => setName("ear")}>Show hearing icon</button>
        <button
          onClick={() =>
            setLazyRefName(lazyRef.current?.getAttribute("data-solite-icon") ?? "missing")
          }
        >
          Check lazy ref
        </button>
        <output aria-live="polite">
          {lazyRefName ? `Lazy ref ${lazyRefName}` : "Waiting for lazy ref"}
        </output>
      </section>
    </main>
  );
}

if (typeof window !== "undefined") {
  window.__hydrationErrors = [];
  hydrateRoot(document.getElementById("hydration")!, <HydrationFixture />, {
    onRecoverableError(error) {
      window.__hydrationErrors.push(String(error));
    },
  });
  createRoot(document.getElementById("app")!).render(<App />);
}
