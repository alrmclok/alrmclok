"use client";

import { useEffect, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  fallbackSize?: string;
};

export default function ImageWithFallback({
  src,
  alt,
  className,
  fallbackLabel = "image not found",
  fallbackSize = "1200x600",
}: Props) {
  const placeholder = `https://placehold.co/${fallbackSize}/f0ddc8/8f3600?text=${encodeURIComponent(
    fallbackLabel
  )}`;

  const [w, h] = fallbackSize.split("x").map(Number);

  const fontSize = Math.max(32, Math.min(w || 1200, h || 600) * 0.08);

  const localFallback = `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w || 1200}" height="${
      h || 600
    }" viewBox="0 0 ${w || 1200} ${h || 600}">
      <rect width="100%" height="100%" fill="#f0ddc8"/>
      <text
        x="50%"
        y="50%"
        font-family="monospace"
        font-size="${fontSize}px"
        font-weight="bold"
        fill="#8f3600"
        text-anchor="middle"
        dominant-baseline="middle"
      >${fallbackLabel}</text>
    </svg>`
  )}`;

  const [stage, setStage] = useState(src ? 0 : 1);

  useEffect(() => {
    if (!src) return;

    let cancelled = false;
    const probe = new window.Image();

    probe.onload = () => {
      if (!cancelled) setStage(0);
    };

    probe.onerror = () => {
      if (!cancelled) setStage((s) => (s === 0 ? 1 : s));
    };

    probe.src = src;

    return () => {
      cancelled = true;
    };
  }, [src]);

  const imgSrc =
    stage === 0 ? src : stage === 1 ? placeholder : localFallback;

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => setStage((s) => (s < 2 ? s + 1 : 2))}
    />
  );
}