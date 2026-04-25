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
        setProgress(Math.min(window.scrollY / viewportHeight, 1));
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
      className="concept-orbit"
      style={{ "--hero-progress": progress.toFixed(3) } as CSSProperties}
    >
      <div className="concept-orbit__mist concept-orbit__mist--one" />
      <div className="concept-orbit__mist concept-orbit__mist--two" />
      <div className="concept-orbit__mist concept-orbit__mist--three" />

      <div className="concept-orbit__label concept-orbit__label--top">
        Stronger positioning
      </div>
      <div className="concept-orbit__label concept-orbit__label--left">
        Smarter automation
      </div>
      <div className="concept-orbit__label concept-orbit__label--bottom">
        More clients &amp; revenue
      </div>

      <div className="concept-orbit__system">
        <span className="concept-orbit__ring concept-orbit__ring--one" />
        <span className="concept-orbit__ring concept-orbit__ring--two" />
        <span className="concept-orbit__ring concept-orbit__ring--three" />
        <span className="concept-orbit__ring concept-orbit__ring--four" />

        <span className="concept-orbit__planet concept-orbit__planet--one" />
        <span className="concept-orbit__planet concept-orbit__planet--two" />
        <span className="concept-orbit__planet concept-orbit__planet--three" />
        <span className="concept-orbit__planet concept-orbit__planet--four" />
        <span className="concept-orbit__planet concept-orbit__planet--five" />

        <div className="concept-orbit__sphere">
          <div className="concept-orbit__sphere-core">
            <div className="concept-orbit__mark">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
