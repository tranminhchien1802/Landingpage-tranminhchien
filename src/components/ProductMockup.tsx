export default function ProductMockup() {
  return (
    <div className="relative mx-auto flex items-center justify-center">
      <svg
        viewBox="0 0 320 360"
        width="320"
        height="360"
        className="h-auto w-64 sm:w-72 md:w-80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Glow behind device */}
        <ellipse cx="160" cy="300" rx="120" ry="30" fill="url(#glow)" opacity="0.5" />

        {/* Device body */}
        <rect x="60" y="40" width="200" height="240" rx="32" fill="#1a1a2e" stroke="#2a2a4a" strokeWidth="2" />
        <rect x="72" y="52" width="176" height="176" rx="24" fill="#0f0f23" />

        {/* Screen content */}
        <circle cx="160" cy="140" r="48" fill="url(#screenGlow)" opacity="0.3" />
        <circle cx="160" cy="140" r="32" fill="url(#pulse)" opacity="0.6" />
        <circle cx="160" cy="140" r="16" fill="#6366f1" />

        {/* Dots around the circle */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 160 + 40 * Math.cos(rad);
          const cy = 140 + 40 * Math.sin(rad);
          return <circle key={i} cx={cx} cy={cy} r="3" fill="#06b6d4" opacity="0.8" />;
        })}

        {/* Status bar */}
        <rect x="72" y="52" width="176" height="8" rx="2" fill="#6366f1" opacity="0.2" />
        <circle cx="84" cy="56" r="2" fill="#22c55e" />

        {/* Bottom bar */}
        <rect x="80" y="232" width="160" height="4" rx="2" fill="#2a2a4a" />

        {/* LED strip */}
        <rect x="100" y="248" width="120" height="2" rx="1" fill="#6366f1" opacity="0.6" />

        {/* Base */}
        <rect x="80" y="280" width="160" height="20" rx="10" fill="#12122a" stroke="#2a2a4a" strokeWidth="1.5" />
        <rect x="100" y="285" width="120" height="10" rx="5" fill="#1a1a2e" />

        {/* Speaker grills */}
        {[0, 1, 2].map((i) => (
          <rect key={i} x={120 + i * 30} y="272" width="16" height="3" rx="1.5" fill="#2a2a4a" />
        ))}

        {/* Defs */}
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="pulse" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
