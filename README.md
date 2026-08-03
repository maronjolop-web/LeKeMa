# LeKeMa — Learning Platform (Recovered Workspace)

This repository contains the LeKeMa learning platform (Next.js + Firebase). I recovered many project files present in the workspace and added guidance and an actionable TODO list to get the app running and production-ready.

## Status (quick)
- Source files are present (UI components, Firebase helpers, Firestore rules, etc.).
- Firebase config is referenced via environment variables — these must be provided before the app will run in a browser or on Vercel.
- The project includes a Tailwind + shadcn UI system and many components. Some runtime errors were reported in the commit history (Firebase permission errors, Next.js runtime issues).

## Quick local setup
1. Install dependencies
   - Node.js 18+ or 20 recommended
   - npm / pnpm / yarn

   ```bash
   npm install
   # or pnpm install
   # or yarn
   ```

2. Add environment variables
   - Copy `.env.example` to `.env.local` and fill values or set them in your hosting provider.
   - Required keys (see `.env.example`): NEXT_PUBLIC_FIREBASE_PROJECT_ID, NEXT_PUBLIC_FIREBASE_APP_ID, NEXT_PUBLIC_FIREBASE_API_KEY, NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID

3. Run development server

   ```bash
   npm run dev
   ```

4. Troubleshooting
   - If Firebase features are disabled, check that the API key and other env vars are set; the app contains guards that disable Firebase when env is missing.
   - If you get Firestore permission errors, inspect `firestore.rules` and test using the Firebase emulator.

## Recovered logo
You supplied a graduation-cap icon. To use it in the app:
1. Save the image as `public/assets/app-logo.png` (24x24 or 48x48 recommended).
2. Update `src/lib/placeholder-images.ts` to include an entry with id `app-logo` or update the Logo component to use `/assets/app-logo.png`.

## Next steps (pick one and I'll do it for you)
- Add the recovered logo file under `public/assets` (I can create a reference file pointing to a URL if you provide it).
- Add a failing-fast env validation script and update README with commands.
- Run a quick static code check to find probable runtime errors (I will need permission to run tests or you can run locally and paste errors).
- Create a branch and apply minimal runtime fixes (e.g., missing imports) if you want me to attempt automated fixes.

Tell me which task you want me to do next and I'll proceed.
