# Anvesha Therapy Center

Website for Anvesha, a therapy centre in India for children with cerebral palsy and other special needs. The site helps parents find the right therapy and therapist for their child, and helps therapists join the team.

## Tech

- Next.js (App Router) and TypeScript
- Tailwind CSS v4
- Hand drawn watercolour illustrations and a warm, calm design system
- Mobile first and fully responsive

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Build

```bash
npm run build
npm run start
```

## Structure

- `app` holds the pages: home, who we help, therapies, therapists, about, join, resources and contact
- `components` holds shared UI, the header, footer, illustrations and the booking and application flows
- `lib/data.ts` holds the conditions, therapies and therapists, with a shared tag system that powers the filters
- `public/brand` holds the logo and illustration assets

## Notes

Content such as therapist names, contact details, fees and parent quotes are placeholders for now. Replace them in `lib/site.ts`, `lib/data.ts` and the relevant pages before going live.
