import { useId } from "react";

type RehiveLogoProps = {
  showStudio?: boolean;
};

export function RehiveLogo({ showStudio = true }: RehiveLogoProps) {
  const gradientId = useId();

  return (
    <>
      <span className="brand-mark__icon" aria-hidden="true">
        <svg viewBox="0 0 88 88" role="img" focusable="false">
          <defs>
            <linearGradient id={gradientId} x1="12%" x2="86%" y1="10%" y2="88%">
              <stop offset="0%" stopColor="#fff3d8" />
              <stop offset="38%" stopColor="#ecc476" />
              <stop offset="100%" stopColor="#9c6024" />
            </linearGradient>
          </defs>
          <path
            d="M44 6 74.2 23.4v41.2L44 82 13.8 64.6V23.4Z"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M44 19.2 62.6 30v28L44 68.8 25.4 58V30Z"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M31.5 40.3 44 32.6l12.5 7.7"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.2 49.2 44 56.4l11.8-7.2"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="brand-mark__wordmark">
        <span className="brand-mark__name">ReHive</span>
        {showStudio ? <span className="brand-mark__studio">Studio</span> : null}
      </span>
    </>
  );
}
