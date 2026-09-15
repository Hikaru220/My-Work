export function WaveLines({ className }: { className?: string }) {
  return (
    <svg
      className={`wave-lines ${className ?? ""}`}
      viewBox="0 0 400 500"
      preserveAspectRatio="none"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M-60 20 Q 90 320, 240 20 T 540 20" />
      <path d="M-140 80 Q 10 380, 160 80 T 460 80" />
      <path d="M-60 280 Q 90 580, 240 280 T 540 280" />
      <path d="M-140 340 Q 10 640, 160 340 T 460 340" />
    </svg>
  );
}
