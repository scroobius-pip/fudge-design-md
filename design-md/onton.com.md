# How onton.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/onton.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark footer with oversized white Onton logotype, vertical icon dock, and multi-column link grid on near-black background](https://pin.fontofweb.com/10494?format=jpg)](https://design.withfudge.com/share/pin-10494)

[Dark footer with oversized white Onton logotype, vertical icon dock, and multi-column link grid on near-black background](https://design.withfudge.com/share/pin-10494)

[![Light pricing page with four-tier card grid, toggle switches, checkmark feature lists, and FAQ accordion section](https://pin.fontofweb.com/10493?format=jpg)](https://design.withfudge.com/share/pin-10493)

[Light pricing page with four-tier card grid, toggle switches, checkmark feature lists, and FAQ accordion section](https://design.withfudge.com/share/pin-10493)

[![Light homepage footer with search bar, navigation columns, and massive black Onton wordmark on warm gray background](https://pin.fontofweb.com/10492?format=jpg)](https://design.withfudge.com/share/pin-10492)

[Light homepage footer with search bar, navigation columns, and massive black Onton wordmark on warm gray background](https://design.withfudge.com/share/pin-10492)

[![Homepage hero with search bar, AI tools button, Surfaces category row, and masonry grid of interior design photography](https://pin.fontofweb.com/10488?format=jpg)](https://design.withfudge.com/share/pin-10488)

[Homepage hero with search bar, AI tools button, Surfaces category row, and masonry grid of interior design photography](https://design.withfudge.com/share/pin-10488)

## Overview

Onton presents a confident, editorial visual system built around the tension between warm, tactile interior photography and crisp, geometric typography. The brand identity centers on a custom wordmark—an oversized, interwoven "ONTON" letterform paired with a circular knot emblem—that dominates both light and dark page surfaces. The interface alternates between a warm stone canvas and near-black depths, creating distinct moods for discovery (light, airy, photographic) and structural pages (dark, grounded, typographic). The design prioritizes generous whitespace, restrained color, and clear information hierarchy, letting product imagery and the bold logotype carry emotional weight while UI elements recede into quiet functionality.

## Colors

The palette is intentionally narrow, relying on temperature and value contrast rather than chromatic variety. Warm neutrals evoke natural materials and interior spaces, while near-black provides dramatic anchor points for the brand mark.

| token | value | use |
|---|---|---|
| ink | #1A1919 | Primary text, dark backgrounds, active UI elements |
| ink-secondary | #4D4C4C | Secondary text, muted labels |
| ink-tertiary | #999998 | Placeholder text, disabled states, subtle borders |
| canvas | #D1CCC2 | Warm page background, footer surfaces, neutral ground |
| surface | #FFFFFF | Cards, search bars, content panels on dark or warm grounds |
| border | #374151 | Structural dividers, focus indicators |
| border-subtle | #B3B2B2 | Card outlines, input borders, hairline separators |
| action | #000000 | Primary buttons, active toggles, emphasis |
| action-inverse | #FFFFFF | Text on dark buttons, icons on black surfaces |
| accent | #0088FF | Links, interactive highlights, focus states |

The system operates in two primary modes. The **light mode** pairs `canvas` backgrounds with `ink` text, creating an open, breathable environment for browsing photography and reading content. The **dark mode** inverts this relationship, placing white typography and the massive brand mark on `ink` or pure black backgrounds for high-impact footer and landing moments. Photography introduces warm amber, terracotta, and sage tones that harmonize with the neutral palette without competing for attention.

## Typography

Two type families create a clear functional division: Moderat (and its Medium weight) handles all display and body text with clean, geometric neutrality, while the system sans-serif stack manages small UI labels and badges.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Moderat Medium | 3.5rem | 400 | 1.2 | -0.02em | Page headlines, hero statements |
| section-display | Moderat Medium | 2rem | 400 | 1.2 | 0em | Section headers, pricing tier names |
| body | Moderat | 0.875rem | 400 | 1.4 | 0em | Paragraphs, descriptions, feature lists |
| body-large | Moderat | 1rem | 400 | 1.5 | 0em | Lead paragraphs, expanded descriptions |
| label | -apple-system | 0.75rem | 600 | 1.3 | 0em | Badges, tags, small UI annotations |
| navigation | Moderat Medium | 1rem | 400 | 1.5 | 0em | Nav links, buttons, primary actions |

Moderat Medium at 3.5rem with tight tracking gives headlines confident presence without heaviness. The 2rem section display scales cleanly for card headers and FAQ questions. Body text at 0.875rem with 1.4 line-height maintains readability in dense feature lists. The system font stack appears only at 0.75rem for compact labels like the "Popular" badge. Verify licensing for Moderat and Moderat Medium before production use.

## Layout

The layout system favors centered, contained compositions with dramatic scale contrasts between the massive brand mark and delicate UI elements.

**Container behavior.** Content lives within a centered max-width container, flanked by substantial horizontal margins that create breathing room around the brand mark and photography grids. The footer and hero sections break this containment, allowing the logotype to bleed toward viewport edges.

**Grid structure.** The pricing page uses a strict four-column grid for tier comparison, with equal-width cards separated by single-pixel borders. The homepage discovery grid employs an asymmetric masonry layout with varying image heights and widths, creating organic rhythm within the systematic framework.

**Vertical rhythm.** Section spacing is generous, with 5rem gaps between major content blocks. Internal component padding ranges from 0.5rem for compact toggle rows to 1.5rem for card interiors. The massive footer logotype occupies significant vertical real estate, functioning as both brand reinforcement and spatial anchor.

**Navigation placement.** A persistent left-edge icon dock provides primary navigation on interior pages, while the homepage integrates search and AI tools into a top-center bar. Footer navigation organizes into three-column link grids with clear category headers.

## Visual language

**Brand mark dominance.** The Onton wordmark and circular knot emblem operate at extreme scale, often spanning nearly the full viewport width. On dark backgrounds, the mark appears in pure white; on light grounds, in solid black. This inversion creates immediate brand recognition across any page context.

**Photographic treatment.** Product and interior photography receives no visible filters or overlays, preserving natural color and texture. Images sit within rounded containers with subtle shadows, creating gentle depth without distraction. The masonry grid alternates between portrait and landscape orientations, mimicking editorial layout conventions.

**Icon language.** The left dock uses simple line icons for core functions—globe, trash, sparkle, menu—rendered in the current text color. These icons share the geometric restraint of the wordmark, avoiding decorative flourish.

**Shadow and depth.** A single shadow treatment appears throughout: `0px 4px 20px 0px rgba(0, 0, 0, 0.12)` for elevated cards and panels. An inset highlight `inset 0px 1px 0px 0px rgba(255, 255, 255, 0.1)` adds subtle dimension to dark interactive elements.

## Components

### Pricing card

**Anatomy.** Each card contains: tier name (section-display), price with billing period (body-large), billing toggle row, feature list with checkmark icons, and primary action button.

**Surface.** White (`surface`) background with 1px `border-subtle` outline. The "Popular" tier receives no distinct background treatment—only a `pill` badge positioned above the card top edge.

**Typography.** Tier names use section-display at 2rem. Prices use body-large with the currency symbol and "/ month" in `ink-secondary`. Feature lists use body at 0.875rem with 1.4 line-height.

**Shape.** Medium border radius (0.75rem) on the card container. Toggle switches use pill radius (9999px) with a white indicator dot on black track.

**Spacing.** Internal padding of 1.5rem. Feature list items stack with 1rem vertical gaps. The action button spans the full card width with 1rem vertical padding.

**States.** The current plan button uses `ink-tertiary` background instead of black, with corresponding text color shift. Toggle switches show active state with track fill and dot translation.

### Search bar

**Anatomy.** Rounded input field with search icon prefix, placeholder text, and camera icon suffix.

**Surface.** White background with 1px `border-subtle` outline. No visible shadow at rest.

**Typography.** Placeholder text uses `ink-tertiary` at body-large size. Active input text uses `ink`.

**Shape.** Medium border radius (0.75rem), generous horizontal padding.

**Composition.** Centered in the viewport on homepage, integrated into the top navigation area on interior pages.

### FAQ accordion

**Anatomy.** Question text with right-aligned chevron icon, expandable answer area below.

**Surface.** No distinct background—items sit directly on the page ground with 1px `border-subtle` bottom borders.

**Typography.** Questions use section-display at 1.25rem, slightly smaller than standard section headers. Answers use body at 0.875rem.

**Spacing.** 1rem vertical padding per item. Chevron icon sits at the right edge with comfortable tap target.

### Primary button

**Anatomy.** Text label centered within rounded rectangle.

**Surface.** Black (`action`) background with white (`action-inverse`) text. No border, no shadow.

**Shape.** Medium border radius (0.75rem). Full-width within card containers, auto-width in navigation contexts.

**Typography.** Navigation token at 1rem, Moderat Medium.

**States.** The disabled/current-plan variant shifts to `ink-tertiary` background with corresponding text adjustment.

### Discovery image card

**Anatomy.** Photographic image with rounded corners, no visible overlay or text.

**Surface.** Image fills container completely. Subtle outer shadow on hover or focus.

**Shape.** Medium border radius (0.75rem) on all corners.

**Composition.** Asymmetric sizing within masonry grid—some cards span double width, others standard. Gaps between cards are consistent at 1rem.

## Responsive behavior

The design assumes desktop viewport widths for the captured experience. The four-column pricing grid should collapse to two columns on tablet and single-column stack on mobile, with cards maintaining internal proportions. The massive footer wordmark should scale down proportionally, potentially switching to a centered layout below 768px. The left icon dock should transform to a bottom tab bar or hamburger menu on narrow viewports. The masonry discovery grid should simplify to a single-column scroll on mobile, preserving image aspect ratios.

## Practical implementation guidance

### Preserve
- The extreme scale of the brand wordmark relative to other page elements
- Warm neutral backgrounds (`canvas`) alongside pure black moments
- Generous whitespace around all content blocks
- Restrained one-pixel borders and subtle shadows for depth
- The Moderat/Moderat Medium type pairing with clear size hierarchy
- Asymmetric masonry grid for discovery photography

### Avoid
- Adding chromatic accent colors beyond the blue link treatment
- Heavy borders or strong shadows that compete with photography
- Tight line-height that would compromise readability in feature lists
- Generic card backgrounds or gradients that would dilute the warm neutral system
- Centering body text in long paragraphs—left alignment maintains editorial feel

### Recommended build order
1. Establish the type scale with Moderat and Moderat Medium loaded
2. Implement the two-mode color system (light canvas/dark ink)
3. Build the massive brand mark component with viewport-relative scaling
4. Create the pricing card with toggle, feature list, and button states
5. Implement the masonry discovery grid with rounded image containers
6. Add the FAQ accordion with smooth expand/collapse
7. Polish with shadow treatments and border refinements

### Accessibility
- Ensure the massive wordmark has appropriate `aria-label` or is hidden from screen readers if decorative
- Maintain 4.5:1 contrast minimum for all body text; the `ink` on `canvas` pairing exceeds this
- Provide visible focus indicators using the `accent` blue on interactive elements
- Toggle switches need explicit `aria-pressed` state and keyboard operability
- Discovery images require descriptive alt text or adjacent visible captions
- The left icon dock needs text labels or tooltips for icon-only navigation

## Scope note

This guide covers the homepage discovery experience, pricing page structure, and shared footer components visible in the supplied captures. Mobile layouts, animation specifications, checkout flows, user account interfaces, and additional marketing pages are not represented. The massive brand mark requires custom SVG or font implementation not detailed here.
