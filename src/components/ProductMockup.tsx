export default function ProductMockup() {
  return (
    <div className="relative mx-auto flex items-center justify-center">
      <svg
        viewBox="0 0 300 380"
        width="300"
        height="380"
        className="h-auto w-48 sm:w-56 md:w-72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 210 C95 240 88 280 85 310 C82 340 90 360 110 365 L130 368 C135 368 140 364 140 358 L140 300"
          stroke="#1a1a2e"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M200 210 C205 240 212 280 215 310 C218 340 210 360 190 365 L170 368 C165 368 160 364 160 358 L160 300"
          stroke="#1a1a2e"
          strokeWidth="18"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="96" y="196" width="12" height="24" rx="4" fill="#2a2a4a" />
        <rect x="192" y="196" width="12" height="24" rx="4" fill="#2a2a4a" />
        <rect
          x="80"
          y="50"
          width="140"
          height="170"
          rx="28"
          fill="#12122a"
          stroke="#2a2a4a"
          strokeWidth="2"
        />
        <rect x="92" y="62" width="116" height="116" rx="20" fill="#0a0a1a" />

        {/* Screen content */}
        <text x="150" y="95" textAnchor="middle" fill="#7c3aed" fontSize="10" fontWeight="bold" letterSpacing="2">
          AEROSPIKE
        </text>
        <polyline
          points="110,118 120,118 125,108 130,128 135,112 140,118 150,118"
          stroke="#f97316"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <text x="150" y="150" textAnchor="middle" fill="#ffffff" fontSize="28" fontWeight="bold" fontFamily="monospace">
          84
        </text>
        <text x="150" y="164" textAnchor="middle" fill="#737373" fontSize="8" letterSpacing="1">
          CM VERTICAL
        </text>

        <circle cx="120" cy="176" r="4" fill="#22c55e" />
        <circle cx="135" cy="176" r="4" fill="#22c55e" />
        <circle cx="150" cy="176" r="4" fill="#22c55e" />
        <circle cx="165" cy="176" r="4" fill="#22c55e" />
        <circle cx="180" cy="176" r="4" fill="#3a3a5a" />

        <rect x="105" y="186" width="90" height="6" rx="3" fill="#1a1a2e" />
      </svg>
    </div>
  );
}
