LeKeMa — Deploy & environment notes
===================================

What I added
------------
- package.json: minimal bootstrap scripts and common deps used by the project.
- next.config.js: image domain list + App Router (appDir) enabled.
- DEPLOY.md: this file — Vercel and local deploy instructions + required env vars.

Quick local setup
-----------------
1. Copy environment variables into a local .env (do NOT commit .env).
   You already have `.env.example` in the repo — use that as the basis.

2. Install:
   npm install

3. Run development server:
   npm run dev

4. Build for production:
   npm run build
   npm start

Vercel deployment (recommended)
-------------------------------
1. Push your repo to GitHub (already on maronjolop-web/LeKeMa).
2. In the Vercel dashboard, "Import Project" → select this GitHub repo.
3. Build settings (defaults should work for Next.js App Router):
   - Framework Preset: Next.js
   - Build command: npm run build
   - Output directory: (leave empty; Next.js default)

4. Add the following Environment Variables in the Vercel project settings (these names must match your code):
   - NEXT_PUBLIC_FIREBASE_PROJECT_ID
   - NEXT_PUBLIC_FIREBASE_APP_ID
   - NEXT_PUBLIC_FIREBASE_API_KEY
   - NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
   - NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
   - NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID (optional)
   - NEXT_PUBLIC_APP_URL (e.g. https://your-deployment-url.vercel.app)

   Note: For secrets (API keys), use Vercel's Environment Variables UI. Do NOT commit them to source.

5. Deploy. Vercel will automatically run the build and publish.

Additional recommendations & notes
----------------------------------
- Node version: use Node 18+ on Vercel (set in project settings if needed).
- If you use Firebase Admin or server-side SDKs, you may need to add service account credentials as secrets and adapt server code accordingly.
- If images served from external sites fail in production, add those hostnames to next.config.js images.domains.
- CI: add a GitHub Action to run `npm ci` and `npm run build` on pull requests if you want build verification before merge.

If you want, I can:
- Add a GitHub Actions workflow to run tests/build on PRs.
- Add a small .vercelignore or vercel.json with default settings.
- Fine-tune package.json dependencies to exactly match the project's used packages.

Environment variable reference (example values)
-----------------------------------------------
A sample .env (DO NOT commit):

NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
NEXT_PUBLIC_FIREBASE_APP_ID="1:123456789:web:abcdef123456"
NEXT_PUBLIC_FIREBASE_API_KEY="AIza..."
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-project-id.firebaseapp.com"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="123456789"
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="G-XXXXXXX"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

Troubleshooting
---------------
- Missing Firebase config: the app defensively disables Firebase if keys are missing (check src/firebase/index.ts).
- Runtime Firebase permission errors: ensure Firestore rules and authenticated user logic align with production auth tokens.

What I will do next if you confirm:
- 1) Add a basic GitHub Actions CI to verify build on push/PR.
- 2) Tweak package.json deps to exactly match imports used across the repo (to reduce install size).

Confirm which of the above you'd like me to add and I'll commit it.
