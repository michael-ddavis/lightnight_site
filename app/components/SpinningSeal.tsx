"use client";

import Image from "next/image";

export interface SpinningSealProps {
  phrase: string;
  logoSrc: string;           // inner logo mark (no text)
  size?: number;             // rendered size in px
  textColor?: string;        // circular text color
  dotColor?: string;         // reserved if you ever add dots again
  speedSeconds?: number;     // base rotation speed
  className?: string;
}

export default function SpinningSeal({
  phrase,
  logoSrc,
  size = 260,
  textColor = "#ffffff",
  dotColor = "#f4cf88", // not used right now, but kept for future
  speedSeconds = 16,
  className = "",
}: SpinningSealProps) {
  const ringText = phrase.toUpperCase();

  // Tighter radius so text is closer to the logo
  const viewBoxSize = 320;
  const center = viewBoxSize / 2;
  const radius = 80; // was 120

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Inner logo (stationary) */}
      <div className="absolute inset-0 flex items-center justify-center">
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
            priority
          />
        </div>
      </div>

      {/* Spinning text ring */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className="block"
        style={{ width: size, height: size }}
        aria-hidden="true"
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

        {/* Rotating group */}
        <g className="seal-spin">
          <text
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
            fontSize="18"
            letterSpacing="8"
            fill={textColor}
          >
            <textPath
              href="#alabasterCirclePath"
              startOffset="0%"
              textLength="500"
            >
              {ringText}
            </textPath>
          </text>
        </g>
      </svg>

      {/* Local styles for animation & mobile smoothing */}
      <style jsx>{`
        @keyframes seal-rotate {
          to {
            transform: rotate(360deg);
          }
        }

        .seal-spin {
          transform-box: fill-box;
          transform-origin: 50% 50%;
          animation: seal-rotate ${speedSeconds}s linear infinite;
          will-change: transform;
        }

        /* Slightly slower on small screens = smoother perceived motion */
        @media (max-width: 640px) {
          .seal-spin {
            animation-duration: ${speedSeconds * 1.3}s;
          }
        }

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .seal-spin {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
