# Project Status

Last updated: 2026-07-27

## Current phase

Phase 2 — Home

## Current task

No active task. TS-2 has been merged into `main`.

## Implemented homepage scope

- Server-rendered homepage with navigation, services overview, accreditation placeholders, quote form UI and footer.
- Static typed content layer; no Sanity, contact delivery, or invented business facts.
- Rural documentary visual direction using the design-system palette and typography, with the supplied logo in the header and a supplied Cloudinary hero image.
- Homepage visual language draws on gum country: eucalyptus leaf, paperbark, sun-baked clay and a field-guide gumtree motif.
- Next.js application and its tooling live in `frontend/`.

## Assumptions

- A supplied arborist hero image is served from Cloudinary; photography for future gallery and content use is still unavailable.
- Contact details, ABN, social destinations and accreditation details remain explicitly unconfirmed.
- The quote form is UI-only and does not send submissions.

## Next recommended task

Confirm supplied business details and documentary photography before expanding the remaining Phase 2 pages.

## Latest completed work

- TS-2 — Added verified Cloudinary image delivery and a full-bleed, top-anchored arborist photo section before the services ledger; the supplied logo remains in the original hero panel. Merged in PR #2.
