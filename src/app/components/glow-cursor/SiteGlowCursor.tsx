'use client';

import { useSyncExternalStore } from 'react';
import dynamic from 'next/dynamic';

const GlowCursor = dynamic(() => import('./GlowCursor'), { ssr: false });

const mediaQuery = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)';

function subscribe(onChange: () => void) {
  const media = window.matchMedia(mediaQuery);
  media.addEventListener('change', onChange);
  return () => media.removeEventListener('change', onChange);
}

export default function SiteGlowCursor() {
  const enabled = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(mediaQuery).matches,
    () => false,
  );

  if (!enabled) return null;

  return (
    <GlowCursor
      fullscreen
      enabled={enabled}
      color="#ff2858"
      secondaryColor="#f472b6"
      trailLength={28}
      trailWidth={4}
      glowIntensity={1.2}
      opacity={0.65}
      pulseSpeed={0}
      maxDevicePixelRatio={1}
      aria-hidden="true"
    />
  );
}
