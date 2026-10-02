import React from 'react';

interface HumanLogoProps {
  className?: string;
}

export const CryingManLogo: React.FC<HumanLogoProps> = ({ className = "w-24 h-24" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer subtle distress glow */}
      <div className="absolute inset-0 bg-red-600/25 rounded-2xl blur-xl animate-pulse" />

      {/* Portrait Container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-red-500/40 bg-gradient-to-b from-[#1c0c11] via-[#14080c] to-[#0d0407] shadow-[0_0_25px_rgba(239,68,68,0.25)]">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Skin Gradient - Stressed, pale with cool undertones */}
            <linearGradient id="distressedSkin" x1="100" y1="40" x2="100" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E2A690" />
              <stop offset="50%" stopColor="#C98670" />
              <stop offset="100%" stopColor="#A86350" />
            </linearGradient>

            {/* Shadow Skin Gradient */}
            <linearGradient id="skinShadow" x1="60" y1="80" x2="140" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#965242" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#5C261C" stopOpacity="0.9" />
            </linearGradient>

            {/* Hair Gradient */}
            <linearGradient id="distressedHair" x1="100" y1="20" x2="100" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2D1B22" />
              <stop offset="70%" stopColor="#1B0E13" />
              <stop offset="100%" stopColor="#10070B" />
            </linearGradient>

            {/* Clothing Gradient */}
            <linearGradient id="distressedShirt" x1="100" y1="140" x2="100" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2A171D" />
              <stop offset="100%" stopColor="#14090E" />
            </linearGradient>

            {/* Tear Gradient */}
            <linearGradient id="tearGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="1" />
            </linearGradient>

            {/* Background Radial Glow */}
            <radialGradient id="bgDistress" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#7F1D1D" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#120407" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Ambient Aura */}
          <rect width="200" height="200" fill="url(#bgDistress)" />

          {/* Sunk Cost Ticker Grid line watermark */}
          <line x1="20" y1="180" x2="180" y2="180" stroke="#EF4444" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          <line x1="20" y1="160" x2="180" y2="160" stroke="#EF4444" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.2" />

          {/* SHOULDERS & UPPER BODY */}
          {/* Rumpled Collar & Shirt */}
          <path
            d="M20 200 C30 165 65 148 85 145 L100 162 L115 145 C135 148 170 165 180 200 Z"
            fill="url(#distressedShirt)"
            stroke="#59202A"
            strokeWidth="1.5"
          />
          {/* Rumpled shirt collar folds */}
          <path d="M85 145 L94 165 L100 162" stroke="#EF4444" strokeWidth="1" strokeOpacity="0.4" fill="none" />
          <path d="M115 145 L106 165 L100 162" stroke="#EF4444" strokeWidth="1" strokeOpacity="0.4" fill="none" />
          <path d="M100 162 L100 200" stroke="#3D1821" strokeWidth="1.5" strokeDasharray="2 3" />

          {/* NECK */}
          <path
            d="M84 125 C84 135 88 150 100 152 C112 150 116 135 116 125 Z"
            fill="url(#skinShadow)"
          />
          {/* Neck tendon strain lines showing exhaustion */}
          <path d="M90 130 C91 140 94 146 96 150" stroke="#68291F" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M110 130 C109 140 106 146 104 150" stroke="#68291F" strokeWidth="1.5" strokeLinecap="round" />

          {/* EARS */}
          {/* Left Ear */}
          <path
            d="M62 88 C56 88 56 108 64 112 C65 105 65 95 62 88 Z"
            fill="#B97864"
            stroke="#7C3627"
            strokeWidth="1.2"
          />
          <path d="M59 95 C58 98 60 105 63 106" stroke="#5E2317" strokeWidth="1" fill="none" />

          {/* Right Ear */}
          <path
            d="M138 88 C144 88 144 108 136 112 C135 105 135 95 138 88 Z"
            fill="#B97864"
            stroke="#7C3627"
            strokeWidth="1.2"
          />
          <path d="M141 95 C142 98 140 105 137 106" stroke="#5E2317" strokeWidth="1" fill="none" />

          {/* HUMAN HEAD & JAW */}
          {/* Male Jawline drooping slightly forward */}
          <path
            d="M64 82 C64 55 76 42 100 42 C124 42 136 55 136 82 C136 105 130 125 116 134 C107 140 93 140 84 134 C70 125 64 105 64 82 Z"
            fill="url(#distressedSkin)"
            stroke="#63261A"
            strokeWidth="1.5"
          />

          {/* Stressed Cheek Shading (Hollowed cheeks from burnout) */}
          <path
            d="M68 94 C72 108 80 120 88 126 C82 122 74 112 70 98 Z"
            fill="#803B2C"
            opacity="0.5"
          />
          <path
            d="M132 94 C128 108 120 120 112 126 C118 122 126 112 130 98 Z"
            fill="#803B2C"
            opacity="0.5"
          />

          {/* HAIR - Disheveled, tired look with loose strands */}
          <path
            d="M62 76 C58 58 64 36 82 28 C94 23 112 24 124 30 C136 37 142 52 138 72 C134 50 124 38 100 37 C78 38 68 52 62 76 Z"
            fill="url(#distressedHair)"
          />
          {/* Disheveled hair strands falling on forehead */}
          <path
            d="M63 70 C68 56 75 48 88 44 C82 48 78 58 74 68 Z"
            fill="#2D1B22"
          />
          <path
            d="M137 70 C132 56 125 48 112 44 C118 48 122 58 126 68 Z"
            fill="#2D1B22"
          />
          <path
            d="M92 36 C96 44 94 54 88 60 C92 53 96 46 98 38 Z"
            fill="#1B0E13"
          />
          <path
            d="M108 36 C104 44 106 54 112 60 C108 53 104 46 102 38 Z"
            fill="#1B0E13"
          />

          {/* FOREHEAD WORRY LINES (Furrowed Glabella) */}
          <path d="M84 56 C92 53 108 53 116 56" stroke="#8A4030" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
          <path d="M88 62 C94 60 106 60 112 62" stroke="#8A4030" strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
          {/* Vertical glabella frown creases between eyebrows */}
          <path d="M96 68 C96 73 95 78 94 82" stroke="#662519" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M104 68 C104 73 105 78 106 82" stroke="#662519" strokeWidth="1.5" strokeLinecap="round" />

          {/* DISTRESSED HUMAN EYEBROWS (Slanted upwards in pain/grief) */}
          <path
            d="M72 78 C80 74 88 72 95 77"
            stroke="#2E1815"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M128 78 C120 74 112 72 105 77"
            stroke="#2E1815"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* CLOSED CRYING HUMAN EYES (Tightened in agony) */}
          {/* Left Eye */}
          <path
            d="M74 89 C80 84 88 84 94 90"
            stroke="#4A1910"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Under eye bags & dark circles */}
          <path d="M74 93 C80 97 88 97 94 92" stroke="#783424" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
          <path d="M76 96 C82 100 86 100 92 95" stroke="#5E2317" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />

          {/* Right Eye */}
          <path
            d="M126 89 C120 84 112 84 106 90"
            stroke="#4A1910"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Under eye bags & dark circles */}
          <path d="M126 93 C120 97 112 97 106 92" stroke="#783424" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
          <path d="M124 96 C118 100 114 100 108 95" stroke="#5E2317" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />

          {/* HUMAN NOSE */}
          {/* Nose Bridge */}
          <path d="M99 78 L97 98 L94 104" stroke="#8A4030" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Nostrils & Tip */}
          <path
            d="M93 104 C96 106 104 106 107 104"
            stroke="#592015"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="94" cy="104.5" rx="1.5" ry="1" fill="#42140D" />
          <ellipse cx="106" cy="104.5" rx="1.5" ry="1" fill="#42140D" />

          {/* DISTRESSED / WEEPING MOUTH (Trembling Downturned Lips) */}
          {/* Nasolabial folds */}
          <path d="M84 102 C82 110 82 118 80 124" stroke="#7A3526" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
          <path d="M116 102 C118 110 118 118 120 124" stroke="#7A3526" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

          {/* Upper Lip (Angled down in sorrow) */}
          <path
            d="M86 122 C92 118 97 119 100 120 C103 119 108 118 114 122"
            stroke="#63261B"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="#753023"
          />
          {/* Slightly parted open mouth showing dark cavity */}
          <path
            d="M87 122 C94 127 106 127 113 122 C108 125 92 125 87 122 Z"
            fill="#2E0E08"
          />
          {/* Lower trembling lip */}
          <path
            d="M90 125 C95 128 105 128 110 125"
            stroke="#541B12"
            strokeWidth="2"
            strokeLinecap="round"
            fill="#803527"
          />
          {/* Chin crease */}
          <path d="M94 133 C97 135 103 135 106 133" stroke="#753023" strokeWidth="1.5" strokeLinecap="round" />

          {/* TEARS STREAMING DOWN HUMAN CHEEKS */}
          {/* Left Eye Stream */}
          <g>
            {/* Upper stream */}
            <path
              d="M78 92 C77 98 76 104 78 112 C79 118 81 124 81 130"
              stroke="#60A5FA"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.8"
              fill="none"
            />
            {/* Droplets */}
            <circle cx="78" cy="98" r="2" fill="url(#tearGrad)" />
            <circle cx="77" cy="108" r="2.4" fill="url(#tearGrad)" />
            <path d="M80 122 C80 124 79 127 80 129 C81 129 82 127 82 124 Z" fill="url(#tearGrad)" />
          </g>

          {/* Right Eye Stream */}
          <g>
            {/* Upper stream */}
            <path
              d="M122 92 C123 98 124 104 122 112 C121 118 119 124 119 130"
              stroke="#60A5FA"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity="0.8"
              fill="none"
            />
            {/* Droplets */}
            <circle cx="122" cy="98" r="2" fill="url(#tearGrad)" />
            <circle cx="123" cy="108" r="2.4" fill="url(#tearGrad)" />
            <path d="M120 122 C120 124 121 127 120 129 C119 129 118 127 118 124 Z" fill="url(#tearGrad)" />
          </g>

          {/* Exhaustion Sweat Beads at temple */}
          <path d="M136 68 C137 71 138 74 136 76" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

          {/* Sunk Capital Badge Overlay */}
          <g transform="translate(130, 20)">
            <rect x="0" y="0" width="56" height="20" rx="6" fill="#450A0A" stroke="#EF4444" strokeWidth="1" opacity="0.9" />
            <text x="28" y="14" fill="#FCA5A5" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              ₹0 EQUITY
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};
