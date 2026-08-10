# How lovart.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/lovart.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page hero with serif headline, four-tier card grid, and lime-accented Pro plan on near-black canvas](https://pin.fontofweb.com/8789?format=jpg)](https://design.withfudge.com/share/pin-8789)

[Pricing page hero with serif headline, four-tier card grid, and lime-accented Pro plan on near-black canvas](https://design.withfudge.com/share/pin-8789)

[![Light modal dialog with social login buttons, email field, and centered Feature Deck serif heading](https://pin.fontofweb.com/6163?format=jpg)](https://design.withfudge.com/share/pin-6163)

[Light modal dialog with social login buttons, email field, and centered Feature Deck serif heading](https://design.withfudge.com/share/pin-6163)

[![Dark comparison table with five plan columns, model rows, and lime unlimited badges in tabular layout](https://pin.fontofweb.com/6162?format=jpg)](https://design.withfudge.com/share/pin-6162)

[Dark comparison table with five plan columns, model rows, and lime unlimited badges in tabular layout](https://design.withfudge.com/share/pin-6162)

[![Annual toggle state of comparison table showing crossed-out monthly prices and discounted rates](https://pin.fontofweb.com/6161?format=jpg)](https://design.withfudge.com/share/pin-6161)

[Annual toggle state of comparison table showing crossed-out monthly prices and discounted rates](https://design.withfudge.com/share/pin-6161)

## Overview

Lovart's visual identity is built on dramatic contrast: an almost-black canvas lets warm off-white typography breathe, while a single electric-lime accent punctuates calls to action and promotional badges. The system pairs two distinct typographic voices—an ornate, high-contrast serif family for display headlines and a clean, geometric sans for everything else—to create an editorial, gallery-like atmosphere that feels both sophisticated and technically precise. The pricing surface demonstrates this language through card-based plans, tabular comparison layouts, and modal dialogs that shift the entire palette to light mode while preserving typographic hierarchy.

## Colors

| token | value | use |
|---|---|---|
| canvas | #100F09 | Primary page background; near-black with subtle warmth |
| surface | #1A1A1A | Card backgrounds, elevated panels on dark canvas |
| surface-elevated | #1D1B16 | Slightly lighter surface for hover or focus states |
| ink | #F5F4EF | Primary text, headings, primary button backgrounds |
| ink-muted | #929290 | Secondary text, strikethrough prices, disabled hints |
| ink-dim | #7C7C79 | Tertiary labels, metadata, fine print |
| border | #F5F4EF | Card outlines, dividers, primary button borders |
| border-subtle | #C9C8C5 | Light-mode borders, secondary dividers |
| action-primary | #E0FF66 | Promotional badges, "Most popular" highlights, unlimited tags |
| action-primary-text | #100F09 | Text on lime backgrounds |
| action-secondary | #F5F4EF | Light button fills, modal backgrounds |
| action-secondary-text | #100F09 | Text on light button fills |
| accent-blue | #147EFF | Interactive links, info indicators |
| modal-canvas | #F2F1EE | Modal dialog background, light surface override |
| modal-ink | #1A1A19 | Text on modal surfaces |

The dark mode dominates: canvas, surface, and ink create the foundational high-contrast relationship. The lime accent (#E0FF66) appears sparingly as a promotional signal—"Most popular" ribbons, "Unlimited" badges, and discount callouts—never competing with the primary content hierarchy. When the system shifts to modal contexts, the entire palette inverts to warm off-white backgrounds with near-black text, preserving readability and accessibility without introducing new semantic colors.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Feature | 3.5rem | 400 | 1.25 | normal | Page headlines, pricing hero |
| section-display | Feature Deck | 1.75rem | 400 | 1.2 | normal | Modal headings, section titles |
| body | Gt-L Regular | 1rem | 400 | 1.55 | normal | Paragraphs, descriptions, UI labels |
| body-medium | Gt-L Medium | 1rem | 500 | 1.55 | normal | Emphasized body, card titles |
| label | Gt-L Regular | 0.875rem | 400 | 1.55 | normal | Buttons, navigation, form inputs |
| caption | Gt-L Regular | 0.75rem | 400 | 1.4 | normal | Fine print, metadata, badges |
| price-large | Gt-L Regular | 2.5rem | 400 | 1.1 | normal | Plan prices, large numerals |
| mono | Gt Mono | 1rem | 400 | 1 | -0.04em | Technical labels, code-like strings |

Feature and Feature Deck are designed by Berton Hasebe and Christian Schwartz, available from Commercial Type Inc. Gt-L Regular, Gt-L Medium, and Gt Mono are designed by Grilli Type, available from Grilli Type AG. Inter appears in auxiliary contexts such as small UI annotations. Verify licensing for these families before production use.

The type system operates on clear role separation: serif display families carry emotional weight and brand personality at large sizes, while Gt-L Regular handles all functional communication from body copy to interface labels. Gt-L Medium adds emphasis for card titles and category headers without introducing bold weight. Gt Mono serves technical or enumerated content with its compressed, code-like rhythm. Weights are restrained—Regular and Medium only—avoiding the heaviness that would compete with the serif's inherent contrast.

## Layout

The page architecture centers content within generous horizontal margins, creating a gallery-like framing that isolates the dark canvas from the viewport edges. The pricing surface uses two distinct layout modes: a four-column card grid for plan overviews and a full-width comparison table for detailed model breakdowns.

Section spacing follows a large-step rhythm. The hero headline sits with substantial top padding before the card grid begins. Cards themselves use internal padding of 1.5rem with nested content gaps of 1rem, creating clear information hierarchy without visual clutter. The comparison table compresses this rhythm: plan headers align across columns with consistent vertical padding, while model rows use tighter spacing and subtle horizontal rules to maintain scannability.

The modal dialog breaks the full-bleed dark pattern, appearing as a centered light rectangle with rounded corners and a close control in the upper right. Modal content is narrower than the page maximum, creating a focused reading zone that feels distinct from the browsing context.

Grid behavior on the pricing page shows intentional asymmetry: the "Pro" plan receives visual elevation through a lime top border and "Most popular" badge, while remaining cards sit at equal height without competing accents. This creates a clear recommended path without destabilizing the overall composition.

## Visual language

The visual language balances editorial refinement with technical directness. Rounded corners are present but restrained—cards use 0.75rem, buttons use 0.625rem, while pills and badges go fully circular at 9999px. This creates a system where interactive elements feel approachable while structural containers maintain geometric precision.

Borders function as subtle definition rather than heavy framing. Cards on the dark canvas use 1px off-white borders at low opacity or full strength depending on elevation. The lime accent appears as a 1px top border on the featured plan card, a filled pill for "Unlimited" badges, and as text color for discount percentages—never as large background fields that would overwhelm the dark palette.

Imagery and iconography are minimal and functional. Model rows in the comparison table use small category icons (image or video indicators) with consistent sizing and muted color. The absence of decorative photography keeps attention on typographic hierarchy and plan differentiation.

The dark-to-light modal transition is the most dramatic surface change in the system. Where the page background is near-black, the modal floats as warm off-white with dark text, inverting the primary color relationship while preserving the same type scale and spacing logic. This creates clear context switching without introducing alien visual vocabulary.

## Components

### Pricing card

- **Anatomy**: Plan name, price block (currency symbol, amount, "/month" suffix), billing cadence, primary action button, feature list with checkmarks, and optional promotional badge
- **Surface**: Background uses `{colors.surface}` with `{colors.border}` at 1px; featured variant adds `{colors.action-primary}` top border
- **Typography**: Plan name uses `{typography.body-medium}`; price uses `{typography.price-large}` with "/month" in `{typography.caption}`; features use `{typography.label}`
- **Shape**: `{rounded.card}` corners; internal padding `{spacing.card-padding}`
- **Spacing**: Price block separated from button by 1rem; feature list stacks with 0.75rem gaps
- **Composition**: Equal-width columns in grid; featured card elevated via accent border and "Most popular" badge
- **Variants**: Default (dark border), featured (lime top border + badge)

### Comparison table

- **Anatomy**: Sticky plan header row with toggle control; expandable category sections (Image Models, Video Models, Credits); per-model rows with plan-specific values
- **Surface**: Header row uses `{colors.surface}`; rows alternate subtly or use horizontal 1px rules in `{colors.border}` at reduced opacity
- **Typography**: Category headers use `{typography.body-medium}`; model names use `{typography.label}`; values use `{typography.body}` with `{typography.caption}` for unit labels
- **Shape**: Full-bleed horizontal layout; no vertical card boundaries
- **Spacing**: Header padding 1.5rem vertical; row padding 1rem vertical; category gaps 2rem
- **Composition**: Five equal columns (Free, Starter, Basic, Pro, Ultimate); "Unlimited" badges inline with values
- **States**: Monthly/annual toggle switches displayed prices and strikethrough behavior

### Plan toggle

- **Anatomy**: Segmented control with "Monthly" and "Annual" options; annual variant shows promotional suffix ("Up To 50% OFF")
- **Surface**: Active segment uses `{colors.surface-elevated}`; inactive uses transparent
- **Typography**: `{typography.label}` for both options; promotional suffix in `{typography.caption}` with `{colors.action-primary}`
- **Shape**: Pill container at `{rounded.pill}`; internal segments at reduced radius
- **Spacing**: Compact horizontal padding 1rem; height approximately 2.5rem

### Primary button

- **Anatomy**: Text label centered; optional icon prefix
- **Surface**: Default uses `{colors.ink}` background with `{colors.canvas}` text; inverse variant uses `{colors.canvas}` background with `{colors.ink}` text and border
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.button}` for standard; `{rounded.pill}` for emphasized or modal contexts
- **Spacing**: Horizontal padding 1.5rem; vertical padding 0.75rem
- **States**: Default, hover (subtle opacity shift), disabled (reduced opacity)

### Modal dialog

- **Anatomy**: Close control (×), brand mark, heading, subheading, social login buttons, email input, primary action, legal footer
- **Surface**: `{colors.modal-canvas}` background; backdrop uses `{colors.canvas}` at high opacity
- **Typography**: Heading uses `{typography.section-display}`; subheading and buttons use `{typography.body}`; legal footer uses `{typography.caption}` in `{colors.ink-dim}`
- **Shape**: `{rounded.modal}` corners; generous internal padding 2.5rem
- **Spacing**: Social buttons stack with 0.75rem gap; email input separated by 1.5rem from social block
- **Composition**: Centered viewport; max-width approximately 28rem

### Badge

- **Anatomy**: Text label only; no icon
- **Surface**: `{colors.action-primary}` fill with `{colors.action-primary-text}`; or `{colors.surface-elevated}` with `{colors.ink-muted}`
- **Typography**: `{typography.caption}`; weight 500 for emphasis
- **Shape**: `{rounded.badge}` for standard; `{rounded.pill}` for promotional

## Responsive behavior

The pricing card grid should collapse from four columns to two on mid-width viewports, then to a single stacked column on narrow screens. In single-column layout, the featured card's lime top border becomes a full left border to maintain visual prominence without excessive vertical space consumption.

The comparison table requires horizontal scroll on narrow viewports rather than column stacking, since the five-column comparison loses meaning when fragmented. The plan header row should remain sticky during scroll, and the Free column should remain visible as a fixed left column if technically feasible.

Modal dialogs should transition to full-screen or near-full-screen on mobile, eliminating the floating rectangle aesthetic that works at desktop widths. Padding should reduce from 2.5rem to 1.5rem to preserve content proportion.

Type scale should reduce modestly: hero-display from 3.5rem to 2.5rem, price-large from 2.5rem to 2rem. Body and label sizes remain constant to maintain readability.

## Practical implementation guidance

### Preserve
- The near-black canvas with warm off-white text; this high-contrast pairing is the system's signature
- The strict separation of serif display and sans functional type; mixing these roles weakens the editorial character
- Lime accent restraint; use only for promotional signals, never as primary action backgrounds
- The modal light-mode inversion; this context switch is a deliberate accessibility and focus mechanism
- Pill-shaped badges and buttons alongside slightly rounded cards; the radius hierarchy creates clear element taxonomy

### Avoid
- Additional accent colors beyond lime and the reserved blue; the palette's restraint is intentional
- Heavy drop shadows; the system relies on border and color contrast for elevation, not depth effects
- Serif type below 1.5rem; Feature and Feature Deck lose readability and purpose at small sizes
- Pure white (#FFFFFF) backgrounds; the warm off-white (#F2F1EE, #F5F4EF) prevents clinical harshness
- Centered body text; the system uses left-aligned text for all functional content, reserving centering for headlines and modal headings only

### Recommended build order
1. Establish the dark canvas and base text color with Gt-L Regular at body size
2. Implement the type hierarchy: Feature for hero, Feature Deck for modal/section headings, Gt-L Regular for all else
3. Build the pricing card component with surface background, border, and internal spacing
4. Add the plan toggle with segmented control behavior
5. Construct the comparison table with sticky headers and expandable categories
6. Implement modal dialog with full palette inversion
7. Add lime accent states: featured card border, badges, promotional text
8. Polish with radius tokens and responsive collapse behavior

### Accessibility
- Maintain 4.5:1 minimum contrast for all body text; the ink-on-canvas pairing exceeds this, but ink-muted on surface may require verification
- Ensure the lime accent (#E0FF66) on near-black meets 3:1 for large text or UI components; consider a slightly darker lime variant if needed for small badges
- Modal focus trapping is essential; the visual context switch should be matched by keyboard context switching
- Price strikethrough should not be the sole indicator of discount; the reduced price and promotional badge provide redundant coding
- Comparison table horizontal scroll should be keyboard-accessible with visible scroll indicators

## Scope note

This guide covers the pricing page and authentication modal surfaces of lovart.ai. It does not include the marketing homepage hero, product interface, or any motion, animation, or interactive states beyond static visible presentation. The comparison table's expandable category behavior and the annual/monthly price toggle are described from visible states only, not transition behavior. Measurements are practical adaptation targets.
