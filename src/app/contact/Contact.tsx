'use client';
import { useEffect, useRef, useState } from 'react';
import Stepper, { Step } from '../components/stepper/Stepper';
import './contact-stepper.css';

export default function Contact() {
  const [open, setOpen] = useState(false);
  return (
    <section className="contact-section site-width" id="contact" aria-labelledby="contact-title">
      <div className="contact-banner">
        <div>
          <p className="eyebrow">Contatti</p>
          <h2 id="contact-title">
            Hai un progetto in mente<span>?</span>
          </h2>
          <p>
            Parliamone. Ti aiuto a trasformare la tua idea in un sito concreto, moderno e su misura
            per te.
          </p>
          <button
            className="pill primary"
            type="button"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
          >
            Iniziamo <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="contact-art" aria-hidden="true">
          <span />
          <span />
          <span />
          <small>
            GOOD IDEAS
            <br />
            DESERVE
            <br />A WEBSITE.
          </small>
        </div>
      </div>
      {open && <ContactStepper onClose={() => setOpen(false)} />}
    </section>
  );
}

function ContactStepper({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState(1);
  const [sendStatus, setSendStatus] = useState('');
  const [details, setDetails] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);

  function handleSendMessage() {
    // TODO: Send details.name, details.email and details.message via EmailJS.
    // Keep the summary visible until an actual send succeeds.
    setSendStatus('L’invio non è ancora disponibile. Riprova più avanti.');
  }

  function validateStep(nextStep: number) {
    if (nextStep <= step) return true;
    // Wait until the current step has entered before validating its fields.
    if (step === 1 && !formRef.current?.querySelector('[name="email"]')) return false;
    if (step === 2 && !formRef.current?.querySelector('[name="message"]')) return false;
    const fields = formRef.current?.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      'input, textarea',
    );
    fields?.forEach((field) => {
      field.setCustomValidity(field.value.trim() ? '' : 'Compila questo campo.');
    });
    return formRef.current?.reportValidity() ?? false;
  }

  return (
    <dialog
      ref={dialogRef}
      className="contact-dialog"
      aria-labelledby="contact-dialog-title"
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
      <header className="contact-dialog-header">
        <div>
          <p className="eyebrow">Iniziamo a parlare</p>
          <h2 id="contact-dialog-title">
            Raccontami la tua idea<span>.</span>
          </h2>
        </div>
        <button
          type="button"
          className="contact-dialog-close"
          onClick={onClose}
          aria-label="Chiudi modulo contatti"
        >
          ×
        </button>
      </header>
      <form
        ref={formRef}
        className="contact-form"
        noValidate
        onSubmit={(event) => {
          event.preventDefault();
          formRef.current?.querySelector<HTMLButtonElement>('[data-stepper-next]')?.click();
        }}
      >
        <Stepper
          disableStepIndicators
          onStepChange={(nextStep) => {
            setStep(nextStep);
            setSendStatus('');
          }}
          beforeStepChange={validateStep}
          nextButtonProps={step === 3 ? { onClick: handleSendMessage } : {}}
          backButtonText="Indietro"
          nextButtonText="Continua →"
          completeButtonText="Invia messaggio ↗"
        >
          <Step>
            <div className="contact-step-heading" aria-live="polite">
              <p>01 / I tuoi contatti</p>
              <h3 tabIndex={-1} data-step-heading>
                Come posso contattarti?
              </h3>
            </div>
            <div className="contact-step-fields">
              <label>
                Nome
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="Il tuo nome"
                  required
                  maxLength={100}
                  value={details.name}
                  onChange={(e) => {
                    e.target.setCustomValidity('');
                    setDetails({ ...details, name: e.target.value });
                  }}
                />
              </label>
              <label>
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="nome@esempio.com"
                  required
                  maxLength={254}
                  value={details.email}
                  onChange={(e) => {
                    e.target.setCustomValidity('');
                    setDetails({ ...details, email: e.target.value });
                  }}
                />
              </label>
            </div>
          </Step>
          <Step>
            <div className="contact-step-heading" aria-live="polite">
              <p>02 / Il tuo progetto</p>
              <h3 tabIndex={-1} data-step-heading>
                A cosa stai pensando?
              </h3>
            </div>
            <label>
              Raccontami la tua idea
              <textarea
                name="message"
                rows={5}
                placeholder="Di cosa ti occupi? Che sito vorresti e quali obiettivi hai?"
                required
                maxLength={3000}
                value={details.message}
                onChange={(e) => {
                  e.target.setCustomValidity('');
                  setDetails({ ...details, message: e.target.value });
                }}
              />
            </label>
          </Step>
          <Step>
            <div className="contact-step-heading" aria-live="polite">
              <p>03 / Riepilogo</p>
              <h3 tabIndex={-1} data-step-heading>
                Tutto pronto per iniziare.
              </h3>
            </div>
            <dl className="contact-review">
              <div>
                <dt>Nome</dt>
                <dd>{details.name}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{details.email}</dd>
              </div>
              <div>
                <dt>Il tuo progetto</dt>
                <dd>{details.message}</dd>
              </div>
            </dl>
            <p className="contact-email-note">
              Controlla i tuoi dati e il messaggio. Puoi tornare indietro per modificarli.
            </p>
            <p className="contact-send-status" role="status">
              {sendStatus}
            </p>
          </Step>
        </Stepper>
      </form>
    </dialog>
  );
}
