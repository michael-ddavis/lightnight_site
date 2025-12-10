// app/components/common/LoaderSpinner.tsx
"use client";

export default function LoaderSpinner() {
  return (
    <div className="loader-spinner" role="status" aria-label="Loading">
      <style jsx>{`
        .loader-spinner {
          width: 56px;
          height: 56px;
          border-radius: 9999px;
          border: 4px solid rgba(255, 255, 255, 0.16);
          border-top-color: #f4cf88;
          animation: spin 0.9s cubic-bezier(0.6, 0.03, 0.3, 0.9) infinite;
          will-change: transform;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loader-spinner {
            animation: none;
            border-top-color: #ffffff;
          }
        }
      `}</style>
    </div>
  );
}
