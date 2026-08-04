# Architecture

Browser
→ Next.js app (`frontend/`)
→ Local typed content

Future:
Sanity replaces local content.
Supabase only for operational data (quotes/bookings/customers).

Application folders:

frontend/
  src/
    app/
    components/
    content/
    lib/
    types/

Current routes:
- `/`
- `/about`
- `/contact`
- `/faq`

Shared header and footer consume `content/site.ts`; page-specific typed content lives alongside it in `content/`.
