# How dashboard.mux.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dashboard.mux.com-design)

Last updated: 2026-07-28

## Design character

Mux dashboard captures focus on **authentication entry**—login and signup—rather than the full logged-in media console. The system presented here is a **focused auth gateway**: minimal chrome, clear forms, and product-trust quietness appropriate to a video infrastructure brand.

What should survive adaptation:

- **Login and signup as paired, symmetric surfaces**.
- Minimal distraction around credentials and identity.
- Clean developer-product tone (Mux as infra, not social app).
- Strong form hierarchy: primary submit, secondary links (forgot/SSO if present).
- Fast comprehension over brand theatrics on auth screens.

## Foundations

### Color

No aggregated role colors retained. Auth pages typically use a light neutral canvas with a single primary action color—keep contrast high for inputs and errors even if exact brand hexes are not in this set.

### Typography

Families not declared. Clear UI sizes for labels/inputs; avoid oversized marketing display on credential screens.

### Spacing and layout

- Centered or split auth layouts common to SaaS; keep field groups tight (8–16px rhythms).
- Two captures only (`/login`, `/signup`)—system scope is intentionally narrow.

## Visual language

- Quiet surfaces, obvious input boundaries, restrained illustration if any.
- No motion established.

## Components and states

### Login
Email/password or SSO entry, submit, auxiliary links.

### Signup
Parallel structure to login with additional profile fields as needed; keep visual parity so the pair feels one system.

## Responsive behavior

Only two captures; assume single-column auth on narrow viewports. Don’t extrapolate full app responsive rules from auth alone.

## Practical guidance

**Preserve**

1. Symmetric login/signup pairing.
2. High-clarity forms, low chrome.
3. Infra-trust quietness.
4. Accessible contrast on inputs/actions.

**Avoid**

1. Treating auth as a full brand campaign page.
2. Inferring the entire logged-in Mux design system from these two screens alone.
3. Inventing palette/font licences.

**Adaptation recipe**

- Neutral auth canvas → clear fields → primary continue → mirrored login/signup.

## Scope note

Two captures: `/login`, `/signup`. Supported: auth-entry character and paired flows. Gaps: logged-in dashboard, colors/fonts measurements, responsive app shell, motion.

## Captured pages

[![Login](https://pin.fontofweb.com/2001?format=jpg)](https://design.withfudge.com/share/pin-2001)

[Login](https://design.withfudge.com/share/pin-2001)

[![Signup](https://pin.fontofweb.com/6451?format=jpg)](https://design.withfudge.com/share/pin-6451)

[Signup](https://design.withfudge.com/share/pin-6451)
