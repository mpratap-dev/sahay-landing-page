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

`/delete-account` is the Play Console account-deletion URL (`https://sahayy.in/delete-account`). Copy `.env.example` to `.env.development` for local `npm run dev`. GitHub Pages builds inject `VITE_API_URL` from an Actions **variable** (not a secret): repo **Settings → Secrets and variables → Actions → Variables → New repository variable**, name `VITE_API_URL`, value `https://sahay-backend-42jz.onrender.com`. You can instead set it on the `github-pages` environment. The deploy workflow already falls back to that URL if the variable is unset. The API must allow `https://sahayy.in` in `CORS_ORIGINS`.

The Vite plugin copies `index.html` into `privacy-policy/` and `delete-account/` so GitHub Pages returns HTTP 200 for those Play Console URLs. Add new static routes to `GITHUB_PAGES_STATIC_ROUTES` in `vite.config.js`.

If Play App Signing is enabled, add the Play Console **App signing key** SHA-256 to `public/.well-known/assetlinks.json` as colon-separated uppercase hex (`AA:BB:...`) in addition to the EAS upload fingerprint.
