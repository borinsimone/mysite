'use client';

import { useRef, type ReactNode } from 'react';
import { useInView } from 'motion/react';
import styles from './nfc.module.scss';

export default function NfcArt({ children }: { children: ReactNode }) {
  const art = useRef<HTMLDivElement>(null);
  const inView = useInView(art, { amount: 0.35 });

  return (
    <div
      ref={art}
      className={styles.art}
      data-entered={inView}
      data-visible={inView}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
