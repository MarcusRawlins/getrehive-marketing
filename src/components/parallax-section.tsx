"use client";

import { ComponentPropsWithoutRef, ReactNode, useEffect, useRef } from "react";

type ParallaxSectionProps = {
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"section">;

export function ParallaxSection({
  children,
  className = "",
  ...props
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const midpoint = rect.top + rect.height / 2;
      const viewportMidpoint = viewportHeight / 2;
      const progress = (midpoint - viewportMidpoint) / viewportHeight;
      const clamped = Math.max(-1, Math.min(1, progress));

      node.style.setProperty("--parallax-progress", clamped.toFixed(4));
    };

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`parallax-section ${className}`.trim()}
      {...props}
    >
      {children}
    </section>
  );
}
