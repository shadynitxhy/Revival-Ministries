import type { SyntheticEvent } from "react";

const FALLBACK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
  <rect width="800" height="800" fill="#FFFFFF"/>
  <rect x="40" y="40" width="720" height="720" rx="16" fill="none" stroke="rgba(0,0,0,0.03)" stroke-width="2"/>
  <path d="M400 280 L400 420 M350 330 L450 330" stroke="#B88945" stroke-width="2" stroke-linecap="round" opacity="0.3"/>
  <text x="400" y="480" text-anchor="middle" font-family="Cormorant Garamond, Georgia, serif" font-size="32" font-weight="300" fill="#222222" letter-spacing="1.5">Official Media</text>
  <text x="400" y="525" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" font-weight="400" fill="#B88945" letter-spacing="3" opacity="0.8">COMING SOON</text>
</svg>`;

export const FALLBACK_IMG = `data:image/svg+xml,${encodeURIComponent(FALLBACK_SVG)}`;

export function handleImgError(e: SyntheticEvent<HTMLImageElement>) {
  const el = e.currentTarget;
  if (!el.dataset.fallback) {
    el.dataset.fallback = "1";
    el.src = FALLBACK_IMG;
  }
}
