# How athas.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/athas.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Roadmap page with two-column card grid showing feature status badges in blue and green against dark charcoal cards on near-black background](https://pin.fontofweb.com/5503?format=jpg)](https://design.withfudge.com/share/pin-5503)

[Roadmap page with two-column card grid showing feature status badges in blue and green against dark charcoal cards on near-black background](https://design.withfudge.com/share/pin-5503)

[![FAQ section with stacked accordion cards using serif headings and sans-serif body text on dark theme with subtle borders](https://pin.fontofweb.com/5502?format=jpg)](https://design.withfudge.com/share/pin-5502)

[FAQ section with stacked accordion cards using serif headings and sans-serif body text on dark theme with subtle borders](https://design.withfudge.com/share/pin-5502)

[![Download call-to-action panel with blue primary button and outlined secondary button on elevated dark surface](https://pin.fontofweb.com/5501?format=jpg)](https://design.withfudge.com/share/pin-5501)

[Download call-to-action panel with blue primary button and outlined secondary button on elevated dark surface](https://design.withfudge.com/share/pin-5501)

[![Sponsor section with gradient blue-to-dark card, heart icon, and blue sponsor button with dark background](https://pin.fontofweb.com/5500?format=jpg)](https://design.withfudge.com/share/pin-5500)

[Sponsor section with gradient blue-to-dark card, heart icon, and blue sponsor button with dark background](https://design.withfudge.com/share/pin-5500)

## Overview

Athas.dev presents a dark, developer-focused product site for a lightweight code editor. The visual system builds atmosphere through near-black backgrounds layered with slightly lighter charcoal surfaces, creating depth without visual noise. Typography pairs a distinctive serif display face with a clean geometric sans-serif for body content, establishing a editorial-meets-technical personality. Blue serves as the sole accent color, reserved for primary actions, status indicators, and gradient highlights. The overall impression is restrained and purposeful: every element signals utility rather than decoration. Cards organize content into scannable units with subtle borders, while status badges communicate progress through color-coded labels. The design prioritizes readability in low-light conditions and maintains consistent spacing rhythms across marketing pages, documentation, and product interfaces.

## Colors

The color system operates on a dark-mode foundation with three surface layers, two text intensities, and a single blue accent family. All colors derive from the visible interface; photographic palette values inform background descriptions but do not appear as UI tokens.

| token | value | use |
|---|---|---|
| canvas | `#171717` | Page background, deepest layer |
| surface | `#262626` | Card backgrounds, content containers |
| surface-elevated | `#1a1f2e` | Gradient card starts, sponsor section highlight |
| ink | `#f5f5f5` | Primary text, headings, active labels |
| ink-muted | `#a3a3a3` | Secondary text, descriptions, placeholder copy |
| action | `#2563eb` | Primary buttons, in-progress badges, gradient accents |
| action-hover | `#1d4ed8` | Button hover states |
| success | `#22c55e` | Shipped status badges, positive indicators |
| border | `#404040` | Card outlines, dividers, secondary button borders |
| border-subtle | `#333333` | Inactive card borders, hairline separators |

The canvas-to-surface relationship creates a 0.055 luminance step that reads as subtle elevation without harsh contrast. Ink and ink-muted maintain a 4.5:1 contrast ratio against both canvas and surface, ensuring accessible text rendering. The action blue appears at full saturation only in interactive elements and the "IN PROGRESS" status badges, while success green remains equally saturated for "SHIPPED" indicators. The sponsor card introduces a gradient from surface-elevated toward canvas, bordered by a thin action-colored line that draws attention without overwhelming the dark composition. No light-mode variant is visible in the supplied material.

## Typography

The type system pairs two families: Copse, a transitional serif, for display and section headings; and Space Grotesk, a geometric sans-serif, for all body content, labels, and navigation. This pairing creates tension between editorial authority and technical precision. Space Grotesk is designed by Florian Karsten and distributed through the same foundry. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Copse | 2.5rem | 400 | 1.2 | 0 | Page titles, major headings |
| section-display | Copse | 1.75rem | 400 | 1.3 | 0 | Section headings, card titles |
| body | Space Grotesk | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions |
| body-large | Space Grotesk | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, hero descriptions |
| label | Space Grotesk | 0.75rem | 500 | 1.4 | 0.05em | Buttons, badges, uppercase labels |
| navigation | Space Grotesk | 0.875rem | 500 | 1.4 | 0.02em | Nav items, secondary actions |

All sizes are whole-number multiples of 4px (0.25rem). Copse appears exclusively at display sizes with its regular weight, leveraging the face's inherent stroke contrast for hierarchy. Space Grotesk handles everything below 1.25rem, with medium weight (500) reserved for labels and navigation to create tactile distinction without color change. Line heights stay generous at 1.5–1.6 for body text to accommodate the geometric sans's large x-height. Letter spacing remains tight for display and opens slightly for labels to improve all-caps or small-size legibility.

## Layout

The layout follows a centered single-column model with occasional two-column grids for comparable content. Maximum content width appears constrained to approximately 1200px, with generous horizontal padding that scales with viewport size. The page margin token at 1.5rem provides breathing room on mobile, while desktop implementations should expand this to 3rem or more.

Vertical rhythm organizes content into sections separated by 3rem gaps. Within sections, cards stack with 1rem spacing between them. The roadmap page demonstrates a two-column layout at wider viewports: left column for upcoming features, right column for shipped features. Each column maintains independent card stacking with consistent internal padding of 1.5rem.

Cards serve as the primary content container, appearing with uniform padding and subtle rounded corners. The FAQ section shows full-width cards with internal heading-body structure, while the roadmap uses narrower cards in a grid. The download and sponsor sections elevate above the base canvas with slightly more padding (2rem) and either gradient backgrounds or accent borders.

No sidebar navigation, mega-menu, or complex grid system is visible. The layout prioritizes vertical scrolling and progressive disclosure through card expansion rather than page fragmentation.

## Visual language

The visual character balances minimalism with tactile feedback. Surfaces do not use shadows for elevation; instead, border color shifts and background lightness changes define hierarchy. This flat-yet-layered approach suits developer tooling aesthetics.

Iconography appears through Remixicon, a line-icon system visible in the download button's arrow and the sponsor button's heart. Icons sit inline with text at 1em size, maintaining the label's baseline. The heart icon in the sponsor section receives the action blue treatment, creating a small emotional accent against the dark gradient.

Status badges function as mini-components within cards: rounded rectangles with small uppercase text, colored backgrounds at reduced opacity. "IN PROGRESS" uses action blue at approximately 15% opacity with full-opacity text; "SHIPPED" uses success green with the same treatment. "NOT STARTED" appears as plain text without badge styling, creating a three-state visual system through presence and absence of color.

Borders are consistently 1px and serve as optical hairlines rather than structural frames. The subtle border variant (#333333) nearly disappears against the canvas, letting cards read as floating surfaces rather than bordered boxes.

## Components

### Card

Anatomy: Container with optional header row and body text block. Roadmap cards add a status badge in the header; FAQ cards stack heading and paragraph vertically.

Surface: Background uses surface color (#262626) with border-subtle (#333333) outline. Hover states may shift border to border (#404040) for emphasis.

Typography: Section-display for titles, body for descriptions. Status badges use label typography.

Shape: 0.75rem border radius, 1.5rem internal padding.

Spacing: 1rem gap between stacked cards. Two-column layouts use equal column widths with 1.5rem gutter.

Composition: Header row uses flex layout with title left and badge right. Body text wraps below with 0.75rem top margin.

Variants: FAQ variant is full-width with larger internal spacing. Roadmap variant is narrower with compact header. Gradient variant replaces solid background with surface-elevated-to-canvas gradient and action-colored border.

### Button

Anatomy: Icon plus label in horizontal flex arrangement, or label alone.

Surface: Primary uses action (#2563eb) background with ink text. Secondary uses transparent background with border and ink text.

Typography: Label token, uppercase, medium weight.

Shape: 0.5rem border radius, 0.75rem vertical padding, 1.5rem horizontal padding.

Spacing: Buttons in groups receive 0.75rem gap.

Variants: Primary for download and sponsor actions. Secondary for contribute and alternative paths.

### Status Badge

Anatomy: Text label within rounded pill container.

Surface: Colored background at reduced opacity (approximately 15%), with full-opacity text in matching hue. Blue for in-progress, green for shipped.

Typography: Label token, uppercase.

Shape: 0.5rem border radius, 0.25rem vertical padding, 0.75rem horizontal padding.

Composition: Positioned at trailing end of card header, vertically centered.

### Search Field

Anatomy: Single-line input with placeholder text.

Surface: Transparent or surface background with border-subtle outline.

Typography: Body token for input text, ink-muted for placeholder.

Shape: 0.75rem border radius, matching card corners.

Spacing: Full-width within content column, 1.5rem vertical margin from surrounding headings.

## Responsive behavior

The two-column roadmap grid should collapse to single-column on viewports below approximately 768px, with columns stacking vertically. Card padding can reduce from 1.5rem to 1rem on narrow viewports to preserve content density. The FAQ section's full-width cards maintain consistent padding across breakpoints due to their simpler structure.

Typography scales down by one step at mobile: hero-display becomes section-display, section-display becomes body-large. Body text remains at 1rem minimum for readability. Button touch targets should maintain 44px minimum height regardless of viewport.

The gradient sponsor card and download panel should remain full-width with maintained internal padding, as their centered content adapts naturally to narrower screens.

## Practical implementation guidance

### Preserve
- The dark canvas with subtle surface elevation; avoid introducing additional background colors
- The serif/sans-serif type pairing; Copse for headings, Space Grotesk for everything else
- Single-accent color discipline; reserve blue for actions and progress indicators only
- Card-based content organization with consistent internal spacing
- 1px borders as the sole elevation mechanism; avoid shadows

### Avoid
- Light-mode implementations without verified color values
- Additional accent colors beyond the blue/green status system
- Heavy shadows or skeuomorphic treatments
- Mixing Copse into body text or small sizes where its details degrade
- Border-radius inconsistency between cards and buttons

### Recommended build order
1. Establish canvas and surface color tokens with proper contrast ratios
2. Implement Space Grotesk at body and label sizes with appropriate line heights
3. Add Copse at hero-display and section-display sizes
4. Build card component with padding, border, and radius tokens
5. Create primary and secondary button variants
6. Add status badge system with color-coded states
7. Implement two-column grid for roadmap content
8. Layer gradient card variant for sponsor section

### Accessibility
- Maintain 4.5:1 minimum contrast for all body text against backgrounds
- Ensure button and badge text meets WCAG AA standards at reduced opacity backgrounds
- Provide visible focus indicators using action color with 2px outline offset
- Use semantic heading hierarchy: single h1 per page, Copse headings in logical order
- Preserve keyboard navigation for card interactions and button groups
- Consider `prefers-reduced-motion` for any gradient or hover animations

## Scope note

This guide covers the marketing and product pages visible in the supplied images, including the homepage, FAQ, roadmap, and sponsor sections. Measurements are practical adaptation targets. Mobile breakpoints, form validation states, loading skeletons, and code editor interface chrome are not represented. Verify licensing for Copse, Space Grotesk, and Remixicon before production use.
