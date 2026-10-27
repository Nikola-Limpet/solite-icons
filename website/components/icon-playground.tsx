"use client";
import { useId, useState } from "react";
import {
  ShopIcon,
  PackageIcon,
  CoffeeIcon,
  CashRegisterIcon,
  UsersIcon,
  QrCodeIcon,
} from "solite-icons";
import { CopyButton } from "./copy-button";
const choices = [
  { name: "ShopIcon", Icon: ShopIcon },
  { name: "CoffeeIcon", Icon: CoffeeIcon },
  { name: "PackageIcon", Icon: PackageIcon },
  { name: "CashRegisterIcon", Icon: CashRegisterIcon },
  { name: "UsersIcon", Icon: UsersIcon },
  { name: "QrCodeIcon", Icon: QrCodeIcon },
] as const;
export function IconPlayground() {
  const id = useId();
  const [choice, setChoice] = useState("ShopIcon");
  const [size, setSize] = useState(32);
  const [stroke, setStroke] = useState(1.75);
  const [color, setColor] = useState("#0b7668");
  const [dark, setDark] = useState(false);
  const { Icon } = choices.find((item) => item.name === choice) ?? choices[0];
  const code = `import { ${choice} } from "solite-icons";\n\n<${choice} size={${size}} strokeWidth={${stroke}} color="${color}" />`;
  return (
    <div className="playground not-prose">
      <div className="playground-controls">
        <label htmlFor={`${id}-icon`}>
          Icon
          <select id={`${id}-icon`} value={choice} onChange={(e) => setChoice(e.target.value)}>
            {choices.map((item) => (
              <option key={item.name}>{item.name}</option>
            ))}
          </select>
        </label>
        <label htmlFor={`${id}-size`}>
          Size <span>{size}px</span>
          <input
            id={`${id}-size`}
            type="range"
            min="16"
            max="64"
            step="4"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </label>
        <label htmlFor={`${id}-stroke`}>
          Stroke <span>{stroke}px</span>
          <input
            id={`${id}-stroke`}
            type="range"
            min="1.25"
            max="2.5"
            step="0.25"
            value={stroke}
            onChange={(e) => setStroke(Number(e.target.value))}
          />
        </label>
        <label className="color-control" htmlFor={`${id}-color`}>
          Color
          <input
            id={`${id}-color`}
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <button
          type="button"
          className="solite-button"
          aria-pressed={dark}
          onClick={() => setDark(!dark)}
        >
          {dark ? "Light canvas" : "Dark canvas"}
        </button>
      </div>
      <div className="playground-canvas" data-dark={dark}>
        <div className="preview-grid" aria-label={`${choice} rendered at ${size} pixels`}>
          <Icon size={size} strokeWidth={stroke} color={color} />
        </div>
        <span>
          {choice}
          <small>Actual React component</small>
        </span>
      </div>
      <div className="snippet">
        <pre>
          <code>{code}</code>
        </pre>
        <CopyButton text={code} />
      </div>
    </div>
  );
}
