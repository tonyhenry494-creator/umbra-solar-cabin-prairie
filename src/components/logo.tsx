export function Logo({ className = "size-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <circle cx="100" cy="100" r="98" fill="#0A2540" />
      <circle cx="100" cy="100" r="92" fill="none" stroke="#C5CDD6" strokeWidth="5" />
      <text
        x="100"
        y="52"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="2"
      >
        CARS BLU
      </text>
      <g fill="none" stroke="#ffffff" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round">
        <path d="M42 118 C50 98 70 90 100 90 C130 90 150 98 158 118 L168 118 C170 118 172 120 172 124 L172 132 L38 132 L38 124 C38 120 40 118 42 118 Z" />
        <path d="M70 90 L80 78 L120 78 L130 90" />
        <circle cx="64" cy="132" r="12" />
        <circle cx="136" cy="132" r="12" />
      </g>
      <text
        x="100"
        y="168"
        textAnchor="middle"
        fill="#C5CDD6"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="16"
        fontWeight="600"
        letterSpacing="4"
      >
        LLC
      </text>
    </svg>
  );
}
