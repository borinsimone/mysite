# SEO del portfolio

URL canonico verificato: https://borinsimone.github.io/mysite/

Configurazione condivisa in `src/app/site-config.ts`. Se cambia dominio, aggiornare questo file, `next.config.ts` (basePath) e i controlli in `scripts/check-seo.cjs`.

## Verifiche locali

```sh
npm run build
node scripts/check-seo.cjs
```

L'export contiene title, description, canonical assoluto, Open Graph/Twitter con immagine 1200×630, JSON-LD Person/WebSite/WebPage, sitemap con una sola pagina e robots. Le sezioni con hash non sono pagine separate. Nessun rating, indirizzo, prezzo o risultato commerciale viene inventato.

L'immagine social usa la foto originale del sito e si rigenera con `node scripts/generate-social-preview.cjs`.

## Dopo la pubblicazione

- Controllare l'URL canonico, `/mysite/sitemap.xml` e `/mysite/social-preview.jpg` pubblicati.
- Aggiungere la proprietà URL-prefix `https://borinsimone.github.io/mysite/` in Google Search Console e inviare la sitemap. La verifica della proprietà richiede l'account del proprietario; non è stata eseguita.
- Su GitHub Pages di progetto il file viene pubblicato a `/mysite/robots.txt`, ma i crawler usano `/robots.txt` alla radice del dominio. Questo repository non controlla la radice. Per dichiarare la sitemap lì occorre modificare il sito utente `borinsimone.github.io`; in alternativa inviarla direttamente in Search Console. L'assenza del file alla radice non vieta da sola l'indicizzazione.
- L'ottimizzazione non garantisce posizionamento o tempi di indicizzazione.

## Casi studio

Le descrizioni attuali precisano cliente, tipo di sito e ambito usando le informazioni già presenti. Per trasformarle in casi studio completi servono: esigenza iniziale del cliente, lavoro effettivamente svolto e risultati documentati (con periodo e fonte). Non pubblicare metriche ipotetiche.
