export function SoliteLogo({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M25 11V9a4 4 0 0 0-4-4H11a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h10a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4v-2" />
    </svg>
  );
}
