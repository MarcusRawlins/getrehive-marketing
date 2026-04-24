"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";

export function HeroOrbit() {
  const frameRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        const viewportHeight = Math.max(window.innerHeight, 1);
        const nextProgress = Math.min(window.scrollY / viewportHeight, 1);
        setProgress(nextProgress);
        frameRef.current = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      className="hero-orbit"
      style={
        {
          "--hero-progress": progress.toFixed(3),
        } as CSSProperties
      }
      aria-hidden="true"
    >
      <div className="hero-orbit__glow hero-orbit__glow--primary" />
      <div className="hero-orbit__glow hero-orbit__glow--secondary" />
      <div className="hero-orbit__field" />
      <div className="hero-orbit__ring hero-orbit__ring--outer" />
      <div className="hero-orbit__ring hero-orbit__ring--middle" />
      <div className="hero-orbit__ring hero-orbit__ring--inner" />
      <div className="hero-orbit__trace hero-orbit__trace--one" />
      <div className="hero-orbit__trace hero-orbit__trace--two" />
      <div className="hero-orbit__satellite hero-orbit__satellite--left">
        Positioning
      </div>
      <div className="hero-orbit__satellite hero-orbit__satellite--right">
        Systems
      </div>
      <div className="hero-orbit__satellite hero-orbit__satellite--bottom">
        Search
      </div>
      <div className="hero-orbit__core">
        <div className="hero-orbit__core-mark">
          <span />
          <span />
          <span />
        </div>
        <p>ReHive Studio</p>
        <strong>Brand, conversion, workflow, and search in one custom layer.</strong>
      </div>
    </div>
  );
}
