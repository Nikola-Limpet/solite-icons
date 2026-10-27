"use client";
import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon } from "solite-icons";
export function CopyButton({ text, label = "Copy code" }: { text: string; label?: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  useEffect(() => {
    if (status === "idle") return;
    const timer = setTimeout(() => setStatus("idle"), 2200);
    return () => clearTimeout(timer);
  }, [status]);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }
  return (
    <>
      <button type="button" className="solite-button copy-button" aria-label={label} onClick={copy}>
        {status === "copied" ? <CheckIcon size={15} /> : <CopyIcon size={15} />}
        <span>{status === "copied" ? "Copied" : label}</span>
      </button>
      <span className="sr-only" role="status">
        {status === "copied"
          ? "Copied to clipboard"
          : status === "error"
            ? "Could not copy. Select the code and copy it manually."
            : ""}
      </span>
    </>
  );
}
