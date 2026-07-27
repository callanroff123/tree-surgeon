# AGENTS.md

## Purpose

Build a production-quality website for a small independent arborist business.

Read these before every substantial task:

1. docs/vision.md
2. docs/requirements.md
3. docs/design-system.md
4. docs/architecture.md
5. docs/implementation-plan.md

## Tech

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React
- Vercel
- Cloudinary (remote image delivery)

Future:

- Sanity CMS
- Resend
- Cloudflare Turnstile
- Supabase (only if operational data is needed)

## Rules

- Prefer Server Components.
- Keep client boundaries small.
- Build mobile-first.
- Optimise accessibility.
- Do not hardcode business copy throughout JSX; use a central content layer.
- Avoid unnecessary abstractions.
- Preserve performance.
- Never invent business facts or testimonials.
- Follow docs/design-system.md before making UI decisions.

## Workflow

1. Inspect code.
2. Produce a short plan.
3. Implement.
4. Test.
5. Summarise changes.

## Development process

When instructed to build a feature:

1. Use your Atlassian tools to read the feature instructions from Jira
2. Develop the feature - do not skip any step from the feature-dev 7 step process
3. Thoroughly test the feature with unit tests and integration tests and fix any issues

## Color Scheme

Mood:

- Rural
- Documentary
- Warm
- Calm
- Authentic

Colours:

- Warm off-white
- Forest green
- Bark brown
- Clay accent

## Very Important

- Be simple. Approach tasks in a simple, incremental way.
- Work incrementally ALWAYS. Small, simple steps. Validate and check each increment before moving on.
- use latest APIs as of now.

## Mandatory Code Style

- Do not overengineer. Do not program defensively. Use exception managers only when needed.
- Identify root cause before fixing issues. Prove with evidence, then fix.
- Work incrementally with small steps. Validate each increment.
- Use latest library APIs
- Favour clear, concise docstring comments. Be sparing with comments outside docstrings.
- Favour short modules, short methods and functions. Name things clearly.
- No emojis; please never use emojis.
- Keep README.md concise.

## Important - Debugging and Fixing

- When troubleshooting problems, always identify root cause before fixing.
- PROVE THE PROBLEM FIRST - Don't guess.
- Try one test at a time. Be methodical.
- Don't jump to conclusions. Don't apply workarounds.
- Reproduce consistently.

## Project status and session continuity

Before starting substantial work, read `docs/project-status.md` to understand:

- the current project phase;
- completed work;
- work currently in progress;
- known issues;
- unresolved decisions;
- the recommended next task.

At the end of any substantial feature, bug fix, architecture change, or planning session, update `docs/project-status.md`.

Keep the status file concise and factual.

Do not:

- rewrite the full project history;
- duplicate requirements already documented elsewhere;
- mark work complete unless it has been implemented and verified;
- remove unresolved issues without addressing them;
- record speculative ideas as approved decisions.

When updating the file:

1. update the last-updated date;
2. move completed items into the completed section;
3. update the current phase and active task;
4. record any known limitations;
5. identify the most sensible next task;
6. link to relevant documentation or issue numbers where useful.
