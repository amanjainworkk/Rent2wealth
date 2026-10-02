import React from 'react';

interface HumanLogoProps {
  className?: string;
}

export const SmilingManLogo: React.FC<HumanLogoProps> = ({ className = "w-24 h-24" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer vibrant ambient success glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-emerald-500/25 to-amber-400/30 rounded-2xl blur-xl animate-pulse" />

      {/* Portrait Container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-cyan-400/50 bg-gradient-to-b from-[#081827] via-[#061421] to-[#040e18] shadow-[0_0_25px_rgba(6,182,212,0.3)]">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            {/* Skin Gradient - Healthy, glowing, radiant warmth */}
            <linearGradient id="healthySkin" x1="100" y1="40" x2="100" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F5D0B5" />
              <stop offset="50%" stopColor="#E2AE91" />
              <stop offset="100%" stopColor="#C48464" />
            </linearGradient>

            {/* Skin Shadow Gradient */}
            <linearGradient id="healthyShadow" x1="60" y1="80" x2="140" y2="150" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#B37152" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7E432A" stopOpacity="0.9" />
            </linearGradient>

            {/* Hair Gradient - Well-groomed modern fade */}
            <linearGradient id="sharpHair" x1="100" y1="20" x2="100" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2C2B38" />
              <stop offset="60%" stopColor="#1B1A24" />
              <stop offset="100%" stopColor="#0E0D14" />
            </linearGradient>

            {/* Blazer / Suit Jacket Gradient */}
            <linearGradient id="blazerGrad" x1="100" y1="140" x2="100" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0F243A" />
              <stop offset="100%" stopColor="#07121D" />
            </linearGradient>

            {/* Inner Shirt Gradient */}
            <linearGradient id="shirtGrad" x1="100" y1="140" x2="100" y2="175" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#104455" />
              <stop offset="100%" stopColor="#082631" />
            </linearGradient>

            {/* Background Ambient Radial Glow */}
            <radialGradient id="bgSuccess" cx="50%" cy="40%" r="65%">
              <stop offset="0%" stopColor="#0E7490" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#042F2E" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#040D14" stopOpacity="0" />
            </radialGradient>

            {/* Gold Lapel Pin Gradient */}
            <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Background Success Radial Glow */}
          <rect width="200" height="200" fill="url(#bgSuccess)" />

          {/* Subtle Geometric Wealth Blueprint grid in background */}
          <line x1="20" y1="180" x2="180" y2="180" stroke="#06B6D4" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          <line x1="20" y1="160" x2="180" y2="160" stroke="#10B981" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.2" />

          {/* SHOULDERS & CRISP EXECUTIVE APPAREL */}
          {/* Smart Blazer / Suit Shoulders */}
          <path
            d="M20 200 C30 160 65 144 85 140 L100 156 L115 140 C135 144 170 160 180 200 Z"
            fill="url(#blazerGrad)"
            stroke="#164E63"
            strokeWidth="1.5"
          />

          {/* Inner Shirt Collar */}
          <path
            d="M84 140 L100 165 L116 140 C110 148 90 148 84 140 Z"
            fill="url(#shirtGrad)"
          />

          {/* Sharp Blazer Lapels */}
          <path
            d="M60 200 L84 140 L98 162 L80 200 Z"
            fill="#133048"
            stroke="#0891B2"
            strokeWidth="1"
            strokeOpacity="0.4"
          />
          <path
            d="M140 200 L116 140 L102 162 L120 200 Z"
            fill="#133048"
            stroke="#0891B2"
            strokeWidth="1"
            strokeOpacity="0.4"
          />

          {/* Gold SPV Lapel Pin on Left Collar */}
          <circle cx="76" cy="158" r="3.5" fill="url(#goldGrad)" stroke="#B45309" strokeWidth="0.8" />
          <path d="M74.5 158 L77.5 158 M76 156.5 L76 159.5" stroke="#78350F" strokeWidth="0.8" />

          {/* STRONG HEALTHY NECK */}
          <path
            d="M84 122 C84 134 88 145 100 147 C112 145 116 134 116 122 Z"
            fill="url(#healthyShadow)"
          />

          {/* EARS */}
          {/* Left Ear */}
          <path
            d="M61 85 C55 85 55 105 63 109 C64 102 64 92 61 85 Z"
            fill="#D59578"
            stroke="#8E482D"
            strokeWidth="1.2"
          />
          <path d="M58 92 C57 95 59 102 62 103" stroke="#6C311C" strokeWidth="1" fill="none" />

          {/* Right Ear */}
          <path
            d="M139 85 C145 85 145 105 137 109 C136 102 136 92 139 85 Z"
            fill="#D59578"
            stroke="#8E482D"
            strokeWidth="1.2"
          />
          <path d="M142 92 C143 95 141 102 138 103" stroke="#6C311C" strokeWidth="1" fill="none" />

          {/* HUMAN HEAD & CHISELED JAW */}
          <path
            d="M63 78 C63 52 75 38 100 38 C125 38 137 52 137 78 C137 102 131 122 118 132 C109 138 91 138 82 132 C69 122 63 102 63 78 Z"
            fill="url(#healthySkin)"
            stroke="#7C3B24"
            strokeWidth="1.5"
          />

          {/* Healthy Cheek Glow & Chiseled Jaw Shading */}
          <path
            d="M66 90 C70 104 78 116 86 122 C80 118 72 108 68 94 Z"
            fill="#9E5336"
            opacity="0.35"
          />
          <path
            d="M134 90 C130 104 122 116 114 122 C120 118 128 108 132 94 Z"
            fill="#9E5336"
            opacity="0.35"
          />

          {/* Natural Rosy Cheek Apples (Smile Activation) */}
          <ellipse cx="78" cy="102" rx="7" ry="4" fill="#E17B65" opacity="0.25" />
          <ellipse cx="122" cy="102" rx="7" ry="4" fill="#E17B65" opacity="0.25" />

          {/* MODERN STYLED EXECUTIVE HAIRSTYLE (Pompadour / Side Part) */}
          <path
            d="M60 74 C58 52 64 30 84 22 C96 17 114 18 126 24 C138 31 144 48 140 68 C136 46 126 34 100 33 C77 34 66 48 60 74 Z"
            fill="url(#sharpHair)"
          />
          {/* Hair volume & swept texture */}
          <path
            d="M61 68 C66 48 76 36 94 28 C84 34 76 46 72 62 Z"
            fill="#3F3C50"
          />
          <path
            d="M102 24 C116 26 128 34 135 48 C130 40 120 32 108 28 Z"
            fill="#3F3C50"
          />
          <path
            d="M80 26 C94 22 110 23 120 28 C108 26 94 26 80 30 Z"
            fill="#56526D"
          />

          {/* CONFIDENT WELL-GROOMED EYEBROWS */}
          <path
            d="M72 74 C80 70 88 71 94 75"
            stroke="#1D1A25"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M128 74 C120 70 112 71 106 75"
            stroke="#1D1A25"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* RADIANT OPEN SMILING HUMAN EYES (Warm, Engaging, with Catchlight) */}
          {/* Left Eye */}
          <g>
            {/* Eye Sclera (White) */}
            <path
              d="M74 86 C80 81 88 81 94 86 C88 89 80 89 74 86 Z"
              fill="#FFFFFF"
            />
            {/* Iris - Deep Hazel/Warm Brown */}
            <circle cx="84" cy="85.5" r="3.2" fill="#5A341C" />
            <circle cx="84" cy="85.5" r="1.8" fill="#1C1008" />
            {/* Catchlight twinkle (Spark of wealth & optimism) */}
            <circle cx="85.2" cy="84.2" r="1" fill="#FFFFFF" />

            {/* Upper Eyelid curve */}
            <path
              d="M73 85 C79 80 89 80 95 85"
              stroke="#2B160F"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Duchenne Smile Crinkles (Genuine Crow's feet at outer corner) */}
            <path d="M71 85 C68 83 66 84 64 83" stroke="#874730" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
            <path d="M72 88 C69 88 67 90 65 91" stroke="#874730" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
          </g>

          {/* Right Eye */}
          <g>
            {/* Eye Sclera (White) */}
            <path
              d="M126 86 C120 81 112 81 106 86 C112 89 120 89 126 86 Z"
              fill="#FFFFFF"
            />
            {/* Iris - Deep Hazel/Warm Brown */}
            <circle cx="116" cy="85.5" r="3.2" fill="#5A341C" />
            <circle cx="116" cy="85.5" r="1.8" fill="#1C1008" />
            {/* Catchlight twinkle */}
            <circle cx="117.2" cy="84.2" r="1" fill="#FFFFFF" />

            {/* Upper Eyelid curve */}
            <path
              d="M127 85 C121 80 111 80 105 85"
              stroke="#2B160F"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Duchenne Smile Crinkles at outer corner */}
            <path d="M129 85 C132 83 134 84 136 83" stroke="#874730" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
            <path d="M128 88 C131 88 133 90 135 91" stroke="#874730" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
          </g>

          {/* HUMAN NOSE (Well-defined & Straight) */}
          <path d="M99 75 L98 97 L95 102" stroke="#8E482D" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Nose tip & subtle highlight */}
          <path
            d="M93 102 C96 104 104 104 107 102"
            stroke="#632B1A"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <ellipse cx="94" cy="102.5" rx="1.5" ry="0.8" fill="#4B1B0E" />
          <ellipse cx="106" cy="102.5" rx="1.5" ry="0.8" fill="#4B1B0E" />

          {/* BROAD, CONFIDENT HUMAN SMILE (Showing Upper Teeth) */}
          {/* Smile Nasolabial creases */}
          <path d="M80 98 C78 106 80 114 84 120" stroke="#823F27" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" fill="none" />
          <path d="M120 98 C122 106 120 114 116 120" stroke="#823F27" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" fill="none" />

          {/* Open Smile Cavity */}
          <path
            d="M84 114 C92 112 108 112 116 114 C116 125 108 130 100 130 C92 130 84 125 84 114 Z"
            fill="#42140D"
          />

          {/* Pearly White Upper Teeth Row */}
          <path
            d="M86 114 C93 113 107 113 114 114 C113 121 107 123 100 123 C93 123 87 121 86 114 Z"
            fill="#FFFFFF"
          />
          {/* Subtle dental separator lines */}
          <line x1="100" y1="114" x2="100" y2="123" stroke="#E2E8F0" strokeWidth="0.8" />
          <line x1="95" y1="114" x2="95" y2="122" stroke="#E2E8F0" strokeWidth="0.6" opacity="0.7" />
          <line x1="105" y1="114" x2="105" y2="122" stroke="#E2E8F0" strokeWidth="0.6" opacity="0.7" />

          {/* Upper Lip Contours */}
          <path
            d="M83 114 C91 112 97 113 100 114 C103 113 109 112 117 114"
            stroke="#7C3322"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          {/* Lower Lip Contours */}
          <path
            d="M87 127 C94 131 106 131 113 127"
            stroke="#8E3E2A"
            strokeWidth="2"
            strokeLinecap="round"
            fill="#9C4731"
            fillOpacity="0.4"
          />
          {/* Dimple creases */}
          <path d="M81 115 C80 118 81 121 82 123" stroke="#823F27" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M119 115 C120 118 119 121 118 123" stroke="#823F27" strokeWidth="1.2" strokeLinecap="round" fill="none" />

          {/* Well-defined Chin Crease */}
          <path d="M95 134 C98 136 102 136 105 134" stroke="#7A3924" strokeWidth="1.5" strokeLinecap="round" />

          {/* Floating Wealth Badge / SPV Equity Tag */}
          <g transform="translate(122, 20)">
            <rect x="0" y="0" width="66" height="20" rx="6" fill="#064E3B" stroke="#10B981" strokeWidth="1" opacity="0.9" />
            <text x="33" y="14" fill="#6EE7B7" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
              ₹18L ASSET
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
};
