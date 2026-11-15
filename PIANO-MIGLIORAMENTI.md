# Piano di miglioramento del portfolio

## 1. Performance — primo intervento completato
- Misurare caricamento hero, LCP e CLS con ECC Chrome DevTools.
- Ridurre il peso della foto mantenendo l'originale.
- Evitare ritardi di visibilità sull'immagine principale.
- Caricare il cursore WebGL solo sui dispositivi compatibili e fermarlo quando inattivo.
- Verificare build, resa responsive e una seconda traccia nelle stesse condizioni.
- Completamento: registrare risultati e limiti delle misure qui sotto.

## 2. Pulizia visiva — applicata
- Usare `make-interfaces-feel-better` per hero mobile, spaziature, tipografia, pulsanti e card.
- Confrontare desktop e mobile e verificare stati hover, focus e movimento ridotto.
- Completamento: nessun overflow e gerarchia coerente nei breakpoint principali.

### Interventi e verifiche
| Elemento | Prima | Dopo |
| --- | --- | --- |
| Hero mobile | Contenuti spinti in basso, gap di 5 px | Blocco centrato verticalmente, gap di 20 px tra testi e azioni |
| Sezioni | Ritmo di spaziature disomogeneo | Padding progressivo 52–88 px e titoli bilanciati |
| Servizi mobile | Due colonne strette | Colonna singola, padding 24 px e descrizioni da 15 px |
| Card | Raggi e allineamenti differenti | Raggio condiviso per progetti/NFC, frecce servizi allineate in basso |
| Controlli | Icone da 34–40 px | Frecce, chiusure e link footer con area minima di 44 px |
| Form | Focus generico | Bordo e alone di focus sui campi, chiusura centrata |
| Movimento | Stepper con transition: all | Transizioni limitate a colore e sfondo; regole reduced-motion conservate |
- Moduli coinvolti: home, project, nfc e finestra, services/process, about, contact, navbar, footer, stepper e stili condivisi.
- Build di produzione e TypeScript superati; Prettier e git diff --check superati.
- Controllo responsive a 320, 393, 768 e 1254 px senza overflow orizzontale della pagina.
- Verificati visivamente hero, progetti, NFC, servizi, modulo contatti e footer. Nessun invio di messaggi effettuato.
- La verifica funzionale completa di tastiera, focus e flussi resta nel punto 3.

## 3. Contatti e navigazione — da attuare
- Usare `frontend-a11y` e `click-path-audit` su menu, link, finestre NFC e modulo.
- Verificare tastiera, focus, validazione, errori e conferma senza inviare messaggi di prova reali.
- Completamento: ogni azione produce lo stato previsto e le finestre restituiscono il focus.

## 4. SEO e contenuti — intervento locale applicato
- Usare `seo` per metadata, anteprime social, canonical, sitemap e robots.
- Rendere i casi studio concreti con problema, soluzione e risultati forniti dal proprietario.
- Completamento: controlli tecnici superati e nessun risultato commerciale inventato.
- Canonical e metadata allineati all'URL GitHub Pages verificato; rimosso il dominio non corrispondente e l'handle Twitter non verificato.
- Title e description coerenti con i servizi visibili; immagine social 1200×630, JSON-LD Person/WebSite/WebPage, sitemap singola e robots compatibili con export statico.
- Descrizioni dei tre progetti più specifiche; H1 con nome accessibile completo e fallback senza JavaScript per la parola animata.
- Procedura di verifica e limiti di hosting documentati in SEO.md. Pubblicazione, Search Console e casi studio con risultati misurati restano da completare con account/dati del proprietario.
- Build statica e controlli `node scripts/check-seo.cjs` superati: canonical, metadata, JSON-LD, un solo H1, sitemap, robots e dimensioni/asset dell'immagine social verificati sull'export.

## Evidenze performance
- Baseline locale, Next dev, desktop, CPU 1x, rete senza limitazioni: LCP 2093 ms, CLS 0.
- LCP: TTFB 208 ms, attesa download 12 ms, download 58 ms, ritardo rendering 1815 ms.
- Foto originale PNG: 981919 byte. Copia WebP qualità 85: 40988 byte (-95,8%).
- Integrazione GitHub: conservata la WebP remota da 26080 byte, già ottimizzata; le misure locali sopra si riferiscono alla copia da 40988 byte.
- Le misure in sviluppo non sono un punteggio di produzione né dati di utenti reali.
- Dopo l'intervento, desktop nelle stesse impostazioni: LCP 706 ms, CLS 0; ritardo rendering 110 ms. Singola traccia per versione, cache non controllata: confronto indicativo, non benchmark statistico.
- Verifica mobile 393×852, CPU 4x, Fast 4G: LCP 819 ms, CLS 0, nessun overflow; foto caricata, Tech Text presente, cursore non montato. Nessuna baseline mobile precedente.
- Build di produzione ed ESLint sui quattro file modificati superati.
- Cursore: modulo caricato solo sui dispositivi compatibili; ciclo RAF sospeso a dissolvenza terminata e a scheda nascosta. Riduzione CPU/GPU non quantificata: l'instrumentazione WebGL locale non ha registrato draw call neppure durante lo stimolo sintetico, quindi non costituisce una prova del risparmio.
- Correzione successiva al ricaricamento: il cleanup non forza più WEBGL_lose_context sul canvas riutilizzato da React Strict Mode. Verificati contesto e link degli shader prima del rendering. Due ricaricamenti con movimento sintetico del puntatore senza errori in console; draw call presenti durante il movimento, zero nell'intervallo inattivo di 500 ms, ripresa al movimento successivo. Questo verifica la pausa del ciclo, non quantifica il consumo energetico.
- Foto originale conservata; nessun ritratto generato utilizzato. Parallasse e Tech Text conservati; Tech Text già limita il ciclo quando fuori vista e disabilita la scansione automatica con movimento ridotto.
- Prossimo passo del piano: punto 2, pulizia visiva. Prima del rilascio: ripetere le misure sulla versione pubblicata con cache e profilo di rete controllati.
