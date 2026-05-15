"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dirClass =
    direction === "left"
      ? "scroll-reveal-left"
      : direction === "right"
      ? "scroll-reveal-right"
      : direction === "scale"
      ? "scroll-reveal-scale"
      : "scroll-reveal";

  const delayClass = delay ? `scroll-reveal-delay-${delay}` : "";

  return (
    <div ref={ref} className={`${dirClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
}
