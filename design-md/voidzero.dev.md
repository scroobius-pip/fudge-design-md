# How voidzero.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/voidzero.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Statistics dashboard showing total downloads counter with large numerals, green line chart, and three metric cards with muted labels on light background](https://pin.fontofweb.com/8190?format=jpg)](https://design.withfudge.com/share/pin-8190)

[Statistics dashboard showing total downloads counter with large numerals, green line chart, and three metric cards with muted labels on light background](https://design.withfudge.com/share/pin-8190)

[![Featured resources section with left-aligned heading, code snippet decoration, and horizontal carousel of article cards with category tags and dot pagination](https://pin.fontofweb.com/8189?format=jpg)](https://design.withfudge.com/share/pin-8189)

[Featured resources section with left-aligned heading, code snippet decoration, and horizontal carousel of article cards with category tags and dot pagination](https://design.withfudge.com/share/pin-8189)

[![Dark-themed open source section with project navigation sidebar, purple-blue gradient imagery, terminal code blocks, and stacked project cards with explore buttons](https://pin.fontofweb.com/8188?format=jpg)](https://design.withfudge.com/share/pin-8188)

[Dark-themed open source section with project navigation sidebar, purple-blue gradient imagery, terminal code blocks, and stacked project cards with explore buttons](https://design.withfudge.com/share/pin-8188)

[![Hero section with gradient text headline, isometric layered diagram connecting Vite+, Vite, Oxc, Vitest, and Rolldown labels to a central stack illustration](https://pin.fontofweb.com/8187?format=jpg)](https://design.withfudge.com/share/pin-8187)

[Hero section with gradient text headline, isometric layered diagram connecting Vite+, Vite, Oxc, Vitest, and Rolldown labels to a central stack illustration](https://design.withfudge.com/share/pin-8187)

## Overview

VoidZero presents itself as a JavaScript tooling company with a visual identity that balances technical credibility and contemporary polish. The design operates in two distinct modes: a clean, light-dominated surface for editorial and marketing content, and a deep, immersive dark mode for product showcases and developer tools. The system relies on a single geometric sans-serif family for all proportional text, paired with a monospace face for category labels, status badges, and technical annotations. Color is used sparingly but strategically—near-black text on warm off-white grounds for readability, with a vivid violet gradient serving as the singular accent for hero moments, interactive highlights, and product imagery. The overall impression is of precision engineering: generous whitespace, sharp corners with subtle rounding, and a strict hierarchy that lets large numerals and section headings command attention while supporting copy remains muted and measured.

## Colors

The palette is intentionally restrained, built around a near-neutral core with one vibrant accent family.

| token | hex | use |
|---|---|---|
| ink | `#14121A` | Primary text, headings, and iconography on light backgrounds |
| ink-secondary | `#867E8E` | Muted body text, descriptions, and secondary labels |
| canvas | `#FFFFFF` | Primary page background and card surfaces |
| surface | `#F4F3EC` | Warm off-white for alternate sections and subtle containment |
| surface-inverse | `#16171D` | Deep charcoal for dark mode sections and product cards |
| accent | `#6C3BFF` | Violet for gradient highlights, interactive emphasis, and hero accents |
| accent-light | `#B39AFF` | Lighter violet for gradient midpoints and hover states |
| action | `#000000` | Primary button backgrounds and strong emphasis |
| action-inverse | `#FFFFFF` | Button text on dark backgrounds and dark mode primary text |

The light mode dominates the marketing surface: white and warm off-white alternate to create gentle section breaks without heavy borders. Dark mode appears in product-specific contexts, where `#16171D` provides a theatrical backdrop for terminal windows, code blocks, and purple-blue gradient imagery. The accent violet functions as the brand's energetic signature, appearing most dramatically in a 110-degree linear gradient that sweeps from ink through violet and back—used for hero headline treatments and decorative emphasis. The green tone visible in the download trend chart is an image-palette value from the data visualization rather than a defined interface token; it serves a functional role in the chart but is not part of the core design system.

## Typography

Two font families serve the entire system: a geometric sans-serif for all proportional text, and a monospace face for technical labels and annotations.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Apk Protocol | 3.75rem | 500 | 1.12 | -0.05em | Page hero headlines with gradient treatment |
| section-display | Apk Protocol | 3rem | 500 | 1 | -0.025em | Major section headings |
| subsection-display | Apk Protocol | 2.5rem | 500 | 1.11 | -0.025em | Subsection and card collection headings |
| card-title | Apk Protocol | 1.875rem | 500 | 1.2 | 0em | Feature and project card titles |
| body-large | Apk Protocol | 1.125rem | 400 | 1.56 | 0em | Lead paragraphs and descriptions |
| body | Apk Protocol | 1rem | 400 | 1.4 | 0em | General content and navigation |
| label | Apk Protocol | 1rem | 500 | 1.4 | 0em | Buttons, links, and emphasized UI text |
| mono-label | Kh Teka Mono | 0.75rem | 400 | 1.33 | 0.1em | Category tags, status badges, code prefixes |
| stat-display | Apk Protocol | 3.75rem | 500 | 1 | -0.025em | Large statistics and metrics |

Apk Protocol, designed by Autograph Peter Korsman and distributed by Maël Bächtold for APK Type, carries all proportional text with weights at 400 and 500. Its geometric construction with tight tracking on display sizes gives headlines a confident, engineered presence. Kh Teka Mono, from Kurppa Hosk (designers Jakob Ekelund and Wille Larsson) and distributed by Kh Type, appears exclusively at 12px with expanded letter spacing for category labels like "// UPDATES" and "// ANNOUNCEMENTS". Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with generous breathing room. Major sections use a maximum width container centered with auto margins, creating consistent side gutters that scale with viewport size. The hero section establishes the pattern: a narrow text column centered above a full-width illustrative element, with the headline and subheadline stacked tightly before a substantial gap leads to the visual content.

Section spacing is pronounced, with `5rem` (80px) vertical padding creating clear territorial boundaries between content types. Internal content gaps of `2.5rem` (40px) separate related elements within a section. Cards and panels use `2.5rem` padding consistently, whether in light or dark contexts.

The statistics dashboard demonstrates an asymmetric two-column layout: a large metric with oversized numerals occupies the left, while a chart visualization fills the right. Below, a three-column grid distributes secondary metrics with equal width and internal borders. This grid logic extends to resource carousels and project showcases, where cards maintain consistent aspect ratios and internal structure.

Dark mode sections introduce a subtle variation: the background extends full-bleed while content remains contained, and terminal or code imagery often breaks the container boundary on one side, creating an immersive, editorial depth. Navigation between projects uses a persistent sidebar on the left, with content and imagery stacked in alternating rows.

## Visual language

The visual language communicates technical authority through restraint and precision. Imagery is functional rather than decorative: isometric diagrams illustrate product architecture, terminal screenshots demonstrate tooling in action, and gradient abstractions suggest speed and modernity. The isometric stack diagram in the hero is characteristic—clean vector geometry with labeled connection lines, presenting complex relationships as approachable, layered systems.

Photography and gradients share a cool violet-to-blue spectrum that harmonizes with the accent color. Terminal windows and code blocks use dark surfaces with syntax highlighting in greens, blues, and whites, reinforcing the developer-centric positioning. The gradient headline treatment—where text clips through a violet sweep—is the system's most distinctive decorative effect, reserved for the primary brand statement.

Iconography appears as simple geometric marks or single-letter abbreviations, often paired with monospace labels. Status indicators use small colored dots for active or positive states, integrated into compact badges. The overall effect is of a company that builds infrastructure rather than consumer products—every visual choice prioritizes clarity and credibility over persuasion.

## Components

**Primary button**
- Anatomy: Text label centered within a rounded rectangle
- Surface: White background with near-black text, or transparent with border on dark surfaces
- Typography: `{typography.label}` at 1rem, weight 500
- Shape: `0.5rem` border radius
- Spacing: `0.5rem 1rem` padding
- Composition: Inline or stacked in groups, often paired with a secondary outline variant

**Secondary button / outline button**
- Anatomy: Text label within a bordered rectangle
- Surface: Transparent background with subtle border, text matches context color
- Typography: `{typography.label}`
- Shape: `0.5rem` border radius
- Spacing: `0.5rem 1rem` padding
- Variants: Appears on dark backgrounds with white border and text

**Statistics card**
- Anatomy: Large numeral with small muted label below
- Surface: White or transparent, with optional top border
- Typography: `{typography.stat-display}` for numerals, `{typography.body}` muted for labels
- Shape: Rectangular, no radius or minimal radius
- Spacing: `2.5rem` padding, generous internal whitespace
- Composition: Grid of three equal columns, or featured as single large metric

**Resource card**
- Anatomy: Thumbnail image, category tag, title, and optional description
- Surface: White background, subtle shadow optional
- Typography: `{typography.mono-label}` for "// CATEGORY" prefix, `{typography.body}` for title
- Shape: `0.25rem` radius on container
- Spacing: Image fills top, text content padded below
- Composition: Horizontal scroll carousel with partial next-card visibility, dot pagination below

**Project showcase card**
- Anatomy: Left text column with label, heading, description, and button; right column with gradient imagery and terminal overlay
- Surface: Dark background `#16171D`, text in white
- Typography: `{typography.mono-label}` for "VITE+" prefix, `{typography.subsection-display}` for heading, `{typography.body-large}` for description
- Shape: Full-width section, no card radius
- Spacing: `2.5rem` internal padding, `5rem` vertical section padding
- Composition: Two-column asymmetric, with imagery often bleeding to edge

**Terminal window**
- Anatomy: Dark rectangle with monospace text, colored syntax highlighting, and optional status bar
- Surface: Near-black `#000000` or `#16171D` background
- Typography: System monospace or Kh Teka Mono at small sizes
- Shape: `0.5rem` radius, sometimes with subtle border
- Spacing: `1.25rem` to `1.5rem` internal padding
- Composition: Floated over gradient imagery or embedded in project cards

**Category tag**
- Anatomy: Prefix slashes with uppercase category name
- Surface: Transparent
- Typography: `{typography.mono-label}` with `0.1em` letter spacing
- Composition: Precedes card titles or section headings

## Responsive behavior

The design appears optimized for desktop presentation, with generous fixed-width containers and multi-column layouts. At narrower viewports, the following adaptations should preserve the visual hierarchy:

- Hero headline: Reduce from `3.75rem` to `2.5rem`, maintaining tight line height and negative tracking
- Statistics grid: Stack from three columns to single column, maintaining large numeral size for primary metric
- Project showcase: Collapse two-column layout to stacked, with imagery above or below text
- Resource carousel: Maintain horizontal scroll or convert to vertical stack with full-width cards
- Navigation sidebar: Collapse to horizontal tabs or dropdown on mobile

The monospace category labels and gradient headline treatment should remain visible at all sizes, as they carry significant brand identity. Terminal windows may require horizontal scrolling or font size reduction to remain legible on narrow screens.

## Practical implementation guidance

**Preserve**
- The stark contrast between light editorial sections and dark product showcases; this binary mode is central to the brand
- The gradient headline treatment for the primary hero; it is the most distinctive visual element
- The oversized statistics with muted labels; this data-forward presentation builds credibility
- The monospace category prefix pattern ("// UPDATES", "// ANNOUNCEMENTS") for content taxonomy
- The warm off-white `#F4F3EC` as a deliberate alternative to pure white for section alternation

**Avoid**
- Introducing additional accent colors beyond the violet family; the palette's restraint is intentional
- Using chart colors from data visualizations as interface tokens; keep image-palette values separate from the core system
- Heavy borders or shadows; the system relies on whitespace and background color for separation
- Rounding beyond `0.5rem` except for full pills; the aesthetic is sharp and engineered

**Recommended build order**
1. Establish the type scale with Apk Protocol at all specified sizes, ensuring 500 weight is available for headings and labels
2. Implement the light/dark mode toggle with canvas, surface, and surface-inverse backgrounds
3. Build the hero section with gradient text treatment and isometric diagram
4. Create the statistics dashboard with large numeral display and chart placeholder
5. Develop project showcase cards with dark surfaces and terminal window overlays
6. Add resource carousel with monospace category tags and dot pagination

**Accessibility**
- Ensure gradient text meets contrast requirements; provide solid-color fallback for motion-sensitive users
- Terminal windows should have sufficient color contrast between syntax highlighting and background; avoid relying solely on color for code semantics
- Large statistics may require `aria-label` with properly spaced pronunciation for screen readers
- Dark mode sections should maintain minimum 4.5:1 contrast for body text; the white on `#16171D` pairing satisfies this

## Scope note

This guide covers the marketing homepage and product showcase surfaces visible in the supplied materials. Mobile breakpoints, form interactions, animation specifications, and documentation or blog interior pages are not represented. The spacing and sizing values derive from the retained exact measurements where available.
