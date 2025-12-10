"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}

export default function Reveal({
  children,
  className = "",
  delayMs = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs > 0) {
              setTimeout(() => setVisible(true), delayMs);
            } else {
              setVisible(true);
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      {children}
    </div>
  );
}
