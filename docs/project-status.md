# Project Status

Last updated: 2026-08-04

## Current phase

Phase 2 — Page expansion

## Current task

TS-6 — Gallery prototype is implemented on `feature/TS-6-gallery-prototype` and awaiting review.

## Implemented page scope

- Server-rendered homepage with navigation, services overview, accreditation placeholders, quote form UI and footer.
- Static typed content layer; no Sanity, contact delivery, or invented business facts.
- Rural documentary visual direction using the design-system palette and typography, with the supplied logo in the header and a supplied Cloudinary hero image.
- Homepage visual language draws on gum country: eucalyptus leaf, paperbark, sun-baked clay and a field-guide gumtree motif.
- Server-rendered `/about` page with shared navigation and footer, a homepage-consistent hero, the approved team story, and founder profile placeholders.
- The first founder profile uses the supplied Cloudinary image; the second uses the supplied placeholder portrait.
- Server-rendered `/contact` page with shared navigation and footer, static contact-detail placeholders, and the existing UI-only quote form.
- Server-rendered `/faq` page with an accessible native disclosure list. FAQ answers remain explicit placeholders pending business-approved copy.
- About and FAQ content sections use their supplied Cloudinary arborist-work photography.
- Shared navigation and sitemap include Home; Blog is intentionally absent until the business is established.
- Shared header and footer use inactive Bootstrap Icons for Instagram, Facebook and LinkedIn pending confirmed destinations.
- Next.js application and its tooling live in `frontend/`.

## Assumptions

- A supplied arborist hero image is served from Cloudinary; photography for future gallery and content use is still unavailable.
- Contact details, ABN, social destinations and accreditation details remain explicitly unconfirmed.
- The quote form is UI-only and does not send submissions.
- Contact email, address and mobile numbers remain unconfirmed and are displayed as explicit placeholders.
- Luke Roff is named as the first co-founder; the second founder's name, both biographies and qualifications remain unconfirmed.

## Next recommended task

Review TS-6 against `snippets/gallery_page_example.png`, then confirm the FAQ answers and contact details. Blog work remains deferred.

## Known limitations

- TS-6 uses an image-only prototype; individual gallery-project routes remain future work.

## Latest completed work

- TS-5 — Added the accessible `/faq` route with placeholder answers, approved imagery on About and FAQ, a contact CTA, Home navigation, and inactive Bootstrap social icons. Validated with Vitest, ESLint, TypeScript and a production build; merged in PR #5.
- TS-3 — Added the responsive, accessible About page with local typed content and verified image delivery. Validated with Vitest, ESLint, TypeScript and a production build; merged in PR #3.
- TS-2 — Added verified Cloudinary image delivery and a full-bleed, top-anchored arborist photo section before the services ledger; the supplied logo remains in the original hero panel. Merged in PR #2.
