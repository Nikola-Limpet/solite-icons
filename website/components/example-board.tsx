import {
  ShopIcon,
  CoffeeIcon,
  PackageIcon,
  UsersIcon,
  QrCodeIcon,
  CodeIcon,
  CreditCardIcon,
  TerminalIcon,
  AccessibilityIcon,
  SparklesIcon,
  SettingsIcon,
  WrenchIcon,
} from "solite-icons";

const samples = [
  [ShopIcon, "Shop"],
  [CoffeeIcon, "Coffee"],
  [CodeIcon, "Code"],
  [PackageIcon, "Package"],
  [UsersIcon, "Users"],
  [QrCodeIcon, "QR code"],
  [CreditCardIcon, "Credit card"],
  [TerminalIcon, "Terminal"],
  [AccessibilityIcon, "Accessibility"],
  [SparklesIcon, "Sparkles"],
  [SettingsIcon, "Settings"],
  [WrenchIcon, "Wrench"],
] as const;

export function ExampleBoard() {
  return (
    <figure
      className="example-board not-prose"
      aria-label="Sample icons from the Solite collection"
    >
      <div className="board-heading">
        <h2>One consistent line.</h2>
        <span className="board-meta">A sample of the collection</span>
      </div>
      <div className="board-icons">
        {samples.map(([Icon, label]) => (
          <div key={label}>
            <Icon size={28} />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <figcaption className="board-bottom">
        <span>24 × 24 grid</span>
        <span>1.75px stroke</span>
        <span>Rounded caps &amp; joins</span>
      </figcaption>
    </figure>
  );
}
