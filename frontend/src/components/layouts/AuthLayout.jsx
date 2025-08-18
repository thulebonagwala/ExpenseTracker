import React from 'react';
import { FaWallet } from 'react-icons/fa';

const AuthLayout = ({
    brandName = "Spendly",
    tagline = "Track. Save. Grow.",
    primary = "#3B82F6", // Indigo (brand)
    accent = "#22C55E",  // Green (income)
    textColor = "#111827", // Gray-900
    size = 128,            // Icon diameter in px
    showWordmark = true,   // Toggle text under the icon
}) => {
    return (
        <div
            className="flex flex-col items-center justify-center"
            style={{ color: textColor, width: size, maxWidth: "100%" }}
            aria-label={`${brandName} logo`}
        >
            <div className="relative w-[128px] h-[128px] flex items-center justify-center">

                {/* Icon */}
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 128 128"
                    role="img"
                    aria-hidden={false}
                >
                    {/* Soft shadow */}
                    <defs>
                        <filter id="drop" x="-20%" y="-20%" width="140%" height="140%">
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="6" result="b" />
                            <feColorMatrix in="b" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.2 0" />
                            <feBlend in="SourceGraphic" />
                        </filter>
                    </defs>

                    {/* Circular brand field */}
                    <g filter="url(#drop)">
                        <circle cx="64" cy="64" r="56" fill={primary} opacity="0.5" />

                    </g>

                    {/* Wallet icon (simple + friendly) */}

                    {/* <g transform="translate(28,36)">
                    
                    <rect x="0" y="18" rx="10" ry="10" width="72" height="40" fill="#FFFFFF" opacity="0.98" />
                    
                    <path d="M6 18h42c7 0 12 5 12 12v0H6v-12z" fill="#FFFFFF" opacity="0.9" />
                    
                    <line x1="6" y1="30" x2="60" y2="30" stroke={primary} strokeWidth="2" opacity="0.25" />
                    
                    <circle cx="60" cy="38" r="8" fill={accent} />
                    <path d="M60 34v8M56 38h8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                    </g> */}
                </svg>
                <div className='absolute inset-10 opacity-50 z-10'>
                    <FaWallet size={48} color="blue" />
                </div>
            </div>

            {/* Wordmark + tagline */}
            {showWordmark && (
                <div className="mt-1 text-center" style={{ width: Math.max(160, size) }}>
                    <div
                        className="font-semibold tracking-tight"
                        style={{ fontSize: Math.max(18, Math.round(size * 0.22)) }}
                    >
                        {brandName}
                    </div>
                    {tagline && (
                        <div
                            className="opacity-75"
                            style={{ fontSize: Math.max(12, Math.round(size * 0.12)) }}
                        >
                            {tagline}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default AuthLayout