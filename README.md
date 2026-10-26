# SAHAY landing page

A responsive static landing page using the supplied SAHAY logo and real screenshots from the current app.

## Run locally

```sh
npm install
npm run dev
```

## Deploy

Push to `main` (GitHub Actions → GitHub Pages) or run `npm run deploy`.

`/feed/:id` is the share-link fallback: if Sahay is not installed, it sends people to the Play Store listing (`com.shaw.sahayy`). Android App Links verification reads `/.well-known/assetlinks.json`. After changing that file, confirm it is public JSON at `https://sahayy.in/.well-known/assetlinks.json` with no redirect.

If Play App Signing is enabled, add the Play Console **App signing key** SHA-256 to `public/.well-known/assetlinks.json` as colon-separated uppercase hex (`AA:BB:...`) in addition to the EAS upload fingerprint.
