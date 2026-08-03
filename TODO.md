# TODO — prioritized fixes

1) Provide environment variables and verify Firebase initialization
   - Copy `.env.example` → `.env.local` and populate
   - Optional: use Firebase emulator for local testing

2) Add recovered assets
   - `public/assets/app-logo.png` (graduation cap)
   - Optionally: `public/assets/global-bg.jpg` for background fallback

3) Run `npm run dev` and capture server + browser console errors
   - Common historical errors to expect from commit history:
     - `Runtime FirebaseError: Missing or insufficient permissions` — caused by Firestore rules or unauthenticated access
     - `ReferenceError: React is not defined` — missing React import in some files
     - `cn is not defined` — missing utility import from `@/lib/utils`

4) Fix import/runtime issues
   - Ensure all client components include `"use client"` when using hooks
   - Add missing imports (React, cn, components) where referenced

5) Harden Firestore rules and test with emulator
   - Run `firebase emulators:start --only firestore,auth` and run UI flows

6) CI / Deployment
   - Add GitHub Actions to run static checks (type check, lint, build)
   - Add Vercel environment variables and deploy

7) Optional improvements
   - Add pre-commit hooks (lint, prettier)
   - Add end-to-end tests (Playwright)


If you'd like, I can create a branch `fix/readme-and-todos` and commit these docs and an env-check script.
