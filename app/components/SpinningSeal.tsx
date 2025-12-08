"use client";

import Image from "next/image";

export interface SpinningSealProps {
  phrase: string;
  logoSrc: string;           // inner logo mark (no text)
  size?: number;             // px, rendered size
  textColor?: string;        // circular text
  dotColor?: string;         // dot color
  speedSeconds?: number;     // rotation speed
  className?: string;
}

export default function SpinningSeal({
  phrase,
  logoSrc,
  size = 260,
  textColor = "#ffffff",
  dotColor = "#f4cf88",
  speedSeconds = 16,
  className = "",
}: SpinningSealProps) {
  const ringText = phrase.toUpperCase();
  const dots = "•     •     •     •     •     •";

  // Tighter radius so text is closer to the logo
  const center = 160;
  const radius = 80; // was 120

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Inner logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Slightly larger mark so the ring hugs it more */}
        <div
          className="relative"
          style={{ width: size * 0.6, height: size * 0.6 }}
        >
          <Image
            src={logoSrc}
            alt="Alabaster logo mark"
            fill
            sizes={`${size * 0.6}px`}
            className="object-contain"
          />
        </div>
      </div>

      {/* Spinning SVG ring */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 320"
        className="block"
        style={{ width: size, height: size }}
      >
        <defs>
          <path
            id="alabasterCirclePath"
            d={`
              M ${center},${center}
              m -${radius},0
              a ${radius},${radius} 0 1,1 ${radius * 2},0
              a ${radius},${radius} 0 1,1 -${radius * 2},0
            `}
          />
        </defs>

        {/* Text ring (no glow, just clean type) */}
        <g
          style={{
            transformOrigin: `${center}px ${center}px`,
            animation: `alabaster-spin ${speedSeconds}s linear infinite`,
          }}
        >
          {/* White phrase */}
          <text
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
            fontSize="18"
            letterSpacing="8"
            fill={textColor}
          >
            <textPath
              href="#alabasterCirclePath"
              startOffset="0%"
              textLength="500"   // slightly shorter so it hugs the circle
            >
              {ringText}
            </textPath>
          </text>

        </g>

        <style>
          {`
            @keyframes alabaster-spin {
              to {
                transform: rotate(360deg);
              }
            }
          `}
        </style>
      </svg>
    </div>
  );
}
