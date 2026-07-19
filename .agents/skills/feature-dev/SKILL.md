---
name: feature-dev
description: Plan, implement, test, and review a software feature using a structured workflow.
---

# Feature Development Workflow

When asked to build a feature:

## 1. Understand the request

- Read AGENTS.md and relevant repository documentation.
- Inspect the existing architecture and nearby implementations.
- Identify unclear requirements.
- Ask focused clarification questions when an ambiguity would materially affect the implementation.

## 2. Explore the codebase

- Find relevant routes, components, services, database models, tests, and configuration.
- Explain how the existing system works.
- Identify conventions that the feature should follow.
- Do not modify files during this phase.

## 3. Produce a plan

Create a concise implementation plan covering:

- Files to create or modify
- Data flow
- API or database changes
- UI changes
- Validation and error handling
- Tests
- Risks and assumptions

For substantial features, stop and request approval before implementation.

## 4. Implement

- Follow the approved plan.
- Keep changes scoped to the requested feature.
- Reuse existing patterns.
- Avoid unrelated refactors.
- Add comments only where the reasoning is not obvious.

## 5. Validate

- Run relevant tests.
- Run type checking, linting, and builds.
- Test important failure cases.
- Fix issues caused by the implementation.

## 6. Review

Review the diff for:

- Incorrect behaviour
- Missing edge cases
- Security issues
- Accessibility issues
- Unnecessary complexity
- Inconsistent naming or architecture

Correct any issues found.

## 7. Report

Summarise:

- What was changed
- Important decisions
- Tests run and their results
- Remaining limitations or follow-up work
