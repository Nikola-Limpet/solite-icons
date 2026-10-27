import {
  ShopIcon,
  CoffeeIcon,
  PackageIcon,
  UsersIcon,
  QrCodeIcon,
  ReceiptIcon,
  CreditCardIcon,
  ChartBarIcon,
  CalendarIcon,
  BellIcon,
  SettingsIcon,
  CashRegisterIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PlusIcon,
} from "solite-icons";
const samples = [
  [ShopIcon, "Shop"],
  [CoffeeIcon, "Coffee"],
  [PackageIcon, "Package"],
  [UsersIcon, "Users"],
  [QrCodeIcon, "QR code"],
  [ReceiptIcon, "Receipt"],
  [CreditCardIcon, "Payment"],
  [ChartBarIcon, "Reports"],
  [CalendarIcon, "Calendar"],
  [BellIcon, "Notification"],
  [SettingsIcon, "Settings"],
  [CashRegisterIcon, "Register"],
] as const;
export function ExampleBoard() {
  return (
    <div className="example-board not-prose">
      <div className="board-topline">
        <span className="board-dot" />
        <span>SOLITE ICONS</span>
        <span className="board-meta">24 × 24 · 1.75 stroke</span>
      </div>
      <div className="board-heading">
        <h2>
          A little clarity.
          <br />
          In every interaction.
        </h2>
        <p>
          Rounded outlines for the
          <br />
          places your work happens.
        </p>
      </div>
      <div className="board-icons">
        {samples.map(([Icon, label]) => (
          <div key={label}>
            <Icon size={28} />
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="board-bottom">
        <span className="board-pill">
          <CheckCircleIcon size={15} /> Payment received
        </span>
        <span className="board-action">
          <PlusIcon size={16} /> Add product <ArrowRightIcon size={16} />
        </span>
      </div>
    </div>
  );
}
