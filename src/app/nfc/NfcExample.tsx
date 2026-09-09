'use client';

import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Image, { type StaticImageData } from 'next/image';
import ArrowIcon from '../components/arrow-icon/ArrowIcon';
import styles from './nfc-modal.module.scss';

export interface NfcExampleDetails {
  title: string;
  service: string;
  scenario: string;
  steps: string[];
  image: StaticImageData;
  imageAlt: string;
}

export default function NfcExample({
  details,
  children,
  className,
}: {
  details: NfcExampleDetails;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <>
      <article className={className}>
        {children}
        <button
          className={styles.trigger}
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`${details.title}: scopri come funziona`}
          aria-haspopup="dialog"
          aria-controls={open ? id : undefined}
        />
      </article>
      <AnimatePresence>
        {open && <ExampleModal key={id} id={id} details={details} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

function ExampleModal({
  id,
  details,
  onClose,
}: {
  id: string;
  details: NfcExampleDetails;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const reducedMotion = useReducedMotion();
  const destination = useRef<string | null>(null);

  useEffect(() => {
    const node = dialog.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    node?.showModal();
    title.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      node?.close();
      document.body.style.overflow = previousOverflow;
      if (destination.current) {
        window.location.hash = destination.current;
        document
          .getElementById(destination.current)
          ?.querySelector<HTMLButtonElement>('button')
          ?.focus({ preventScroll: true });
      } else {
        previousFocus?.focus({ preventScroll: true });
      }
    };
  }, []);

  return (
    <motion.dialog
      ref={dialog}
      id={id}
      className={styles.dialog}
      aria-labelledby={`${id}-title`}
      initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.98 }}
      transition={{ duration: reducedMotion ? 0 : 0.22 }}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
          onClose();
      }}
    >
      <button
        className={styles.close}
        type="button"
        onClick={onClose}
        aria-label="Chiudi approfondimento"
      >
        <span />
        <span />
      </button>
      <div className={styles.layout}>
        <figure className={styles.media}>
          <Image
            src={details.image}
            alt={details.imageAlt}
            className={styles.image}
            sizes="(max-width: 700px) 90vw, 420px"
          />
          <figcaption>Un gesto semplice. Una connessione in più.</figcaption>
        </figure>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Tessere NFC / Possibilità concrete</p>
          <h2 id={`${id}-title`} ref={title} tabIndex={-1}>
            {details.title}
          </h2>
          <p className={styles.service}>{details.service}</p>
          <div className={styles.scenario}>
            <h3>Immagina questa situazione</h3>
            <p>{details.scenario}</p>
          </div>
          <h3 className={styles.stepsTitle}>Come funziona</h3>
          <ol className={styles.steps}>
            {details.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <a
            className="pill primary"
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              destination.current = 'contact';
              onClose();
            }}
          >
            Parliamo della tua card <ArrowIcon />
          </a>
        </div>
      </div>
    </motion.dialog>
  );
}
