# Presentazione NFC 3D

- `NfcExperience.tsx`: presentazione HTML in quattro capitoli, progressione Motion legata allo scroll e caricamento differito della scena vicino alla sezione.
- `NfcScene.tsx`: scena Three.js con tessera estrusa, grafiche fronte/retro, smartphone illustrativo e impulso controllato dallo scroll. Nessun modello o texture remoto.
- `nfc-experience.module.scss`: scena sticky desktop/mobile e presentazione statica.
- `Nfc.tsx`, `NfcExample.tsx`: esempi e finestre mantenuti sotto la presentazione.

Il renderer disegna su richiesta al cambiamento della progressione o delle dimensioni; non utilizza un loop continuo. Si ferma fuori vista o con scheda nascosta. La densità dei pixel è limitata a 1,5. Geometrie, materiali, texture e listener vengono rilasciati allo smontaggio.

Con movimento ridotto, WebGL non disponibile o perdita del contesto, tutti i capitoli sono mostrati in normale flusso con una carta CSS. Il link “Passa agli esempi” permette di saltare la sequenza. Lo smartphone è una rappresentazione illustrativa: non esegue una lettura NFC reale.

## Verifiche effettuate

- TypeScript, ESLint dei componenti, build statica e controlli SEO sull'export.
- Anteprima desktop: fronte, retro, tap con smartphone e fase finale; progressione reversibile.
- Mobile 393×852 e 320×568: nessun overflow orizzontale, testi e pulsante finale visibili.
- Instrumentazione WebGL2 in mobile: zero draw call nell'intervallo a riposo, disegni presenti dopo lo scroll.
- Perdita del contesto simulata: canvas rimosso, presentazione statica e quattro capitoli tutti visibili.

Per cambiare il marchio o la grafica della tessera, modificare `artwork()` in `NfcScene.tsx`; per usare una grafica definitiva fornita dal cliente, sostituire le texture procedurali con asset locali.
