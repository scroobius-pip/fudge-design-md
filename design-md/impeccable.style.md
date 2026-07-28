# How impeccable.style is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/impeccable.style-design)

Last updated: 2026-07-28

## Design character

impeccable.style sells a **frontend-design craft upgrade** with a dark, terminal-adjacent marketing site. The page is mostly black/near-black, type is light gray to white, and small amber (`#ffba00`) and teal (`#0fb6ac`) accents punch through like CLI highlights. Layout is a long single-column essay mixed with product chrome: sticky top nav, install command pills, dark code panels, and a mock multi-pane IDE/browser frame.

What should survive adaptation:
- Near-black canvas with restrained light type (not pure neon cyberpunk)
- Amber and teal as sparse functional accents, not full brand washes
- Code-first product moments (commands, file trees, diffs)
- Generous vertical rhythm between long-form sections

## Foundations

### Color

Measured roles across captures:
- Accent amber: `#ffba00`
- Accent teal: `#0fb6ac`
- Near-black accent/fill: `#030303`
- Light text: `#d7d7d7`, `#f8f8f8`
- Primary dark text (on light moments): `#222222`
- Secondary: `#a4a4a4`, `#717171`, `#4b5563`

Visual read: the dominant shell is black. Gold/amber marks CTAs and brand sparks; teal appears in secondary emphasis and UI highlights inside product frames. Body copy stays soft gray so code and headings can go brighter.

### Typography

No declared family in captures; visually a clean geometric/product sans.
- Hero and section titles: large, heavy, tight tracking on dark ground
- Body: comfortable reading size with relaxed line length in the center column
- UI chrome and code: smaller mono or mono-like stacks inside panels
- Nav links: compact uppercase/small labels in the top bar

### Spacing and layout

Observed spacing cluster roughly **8 / 12 / 16 / 24 / 32px**, with larger section breaks.
- Content is centered in a readable max width; product demos go wider
- Radii from **2–16px** on controls; pill-like **~100px** on some chips/CTAs
- Negative spacing values appear in overlapping decorative compositions — treat as layout tricks, not a token scale

## Visual language

- **Dark code blocks** with syntax color and thin borders
- **Browser/IDE chrome** mockups: traffic lights, tabs, side file rails
- Soft cards on black with subtle separation rather than heavy shadows
- Occasional gradient or glow behind hero product art (keep subtle)
- Horizontal rules and hairline dividers structure long pages

## Components and states

- Top nav: logo left, text links, primary CTA right
- Install/command pills with copy affordance
- Primary buttons: high-contrast light or amber filled, pill or soft-round
- Secondary ghost buttons on dark
- FAQ-style stacked questions with clear hierarchy
- Pricing/membership blocks with single strong CTA

## Responsive behavior

Captures include both wide viewports and tighter section crops of the same home narrative. The system stays single-column marketing with product frames that scale down; do not invent a separate mobile IA from these frames alone.

## Practical guidance

**Preserve**
- Black field + gray type + rare amber/teal sparks
- Code and IDE imagery as proof, not decoration only
- Long-scroll editorial pacing

**Avoid**
- Turning amber into a full orange theme
- Light-mode default without redesigning contrast
- Crowding the page with equal-weight cards

## Scope note

Studied multiple home captures (full viewports and section crops) for impeccable.style. Color roles and radii are measured; type family is not declared. Borders, gradients, and media families are largely unsupported in structured form — rely on the screenshots for those details.

## Captured pages

[![Impeccable: The missing upgrade to Anthropic's impeccable skill](https://pin.fontofweb.com/9917?format=jpg)](https://design.withfudge.com/share/pin-9917)

[Impeccable: The missing upgrade to Anthropic's impeccable skill](https://design.withfudge.com/share/pin-9917)

[![Impeccable: The missing upgrade to Anthropic's impeccable skill](https://pin.fontofweb.com/9916?format=jpg)](https://design.withfudge.com/share/pin-9916)

[Impeccable: The missing upgrade to Anthropic's impeccable skill](https://design.withfudge.com/share/pin-9916)

## Colors

- `#030303`
- `#d7d7d7`
- `#a4a4a4`
- `#ffba00`
- `#0fb6ac`
- `#f8f8f8`
- `#222222`
- `#717171`
- `#4b5563`
