# How intercom.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/intercom.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section of the Intercom Customers page showing a large display heading, subheading, and two action buttons on a warm off-white background with a chat widget visible.](https://pin.fontofweb.com/9300?format=jpg)](https://design.withfudge.com/share/pin-9300)

[Hero section of the Intercom Customers page showing a large display heading, subheading, and two action buttons on a warm off-white background with a chat widget visible.](https://design.withfudge.com/share/pin-9300)

[![Customer stories grid showing three large case-study cards with company logos, descriptive text, and bottom metrics on a warm beige surface.](https://pin.fontofweb.com/9301?format=jpg)](https://design.withfudge.com/share/pin-9301)

[Customer stories grid showing three large case-study cards with company logos, descriptive text, and bottom metrics on a warm beige surface.](https://design.withfudge.com/share/pin-9301)

[![Mixed content area with customer profile cards, statistics blocks showing percentages, and quote cards with company attribution on alternating white and beige backgrounds.](https://pin.fontofweb.com/9302?format=jpg)](https://design.withfudge.com/share/pin-9302)

[Mixed content area with customer profile cards, statistics blocks showing percentages, and quote cards with company attribution on alternating white and beige backgrounds.](https://design.withfudge.com/share/pin-9302)

[![Social proof section with a large heading and a grid of testimonial cards containing quotes, author names, and social platform icons.](https://pin.fontofweb.com/9303?format=jpg)](https://design.withfudge.com/share/pin-9303)

[Social proof section with a large heading and a grid of testimonial cards containing quotes, author names, and social platform icons.](https://design.withfudge.com/share/pin-9303)

## Overview

Intercom's design system presents a confident, editorial aesthetic built on restraint and warmth. The visual language centers on a near-black ink against generous off-white and warm beige surfaces, creating high-contrast readability without coldness. Typography drives the hierarchy through scale and tracking rather than weight variation, with Saans providing a clean, contemporary sans-serif voice across all display and interface text, while Serrif introduces an elegant, lighter-weight serif for longer descriptive passages. The system favors flat, border-defined cards over shadowed containers, and uses a consistent 1px hairline border in near-black to delineate components. Spacing is expansive, with section padding often reaching 80px or more, giving content room to breathe. The overall impression is of a mature, trustworthy platform that lets customer stories and data speak through clarity rather than decoration.

## Colors

The palette is intentionally narrow, relying on surface temperature and a single near-black ink to create visual interest.

| token | value | use |
|---|---|---|
| ink | #111111 | Primary text, borders, primary button backgrounds, and all key interface elements |
| muted-ink | #7B7B78 | Secondary or descriptive text where full contrast is not required |
| canvas | #FAF9F6 | Primary page background, quote cards, and filter chip surfaces |
| surface | #F1EEE9 | Customer story cards, statistics blocks, and content-heavy containers |
| surface-warm | #E7E3DB | Active filter chips and selected states |
| border | #111111 | 1px hairline borders defining cards, buttons, and dividers |
| action-primary-bg | #111111 | Filled dark buttons |
| action-primary-text | #FFFFFF | Text on filled dark buttons |
| action-secondary-bg | #FFFFFF | Outlined light buttons |
| action-secondary-text | #111111 | Text on outlined buttons |
| action-secondary-border | #111111 | Border on outlined buttons |

The system operates primarily in a light mode with warm undertones. Dark sections appear in the footer and occasional hero areas, where the relationship inverts to white text on near-black backgrounds. No gradient-based UI tokens are present; gradients appear only in photography and decorative image treatments. Accent colors from photography are not extracted into the functional palette.

## Typography

The type system pairs a contemporary sans-serif with an elegant serif, using weight 400 as the standard and weight 300 for the serif's lighter voice. Tracking is consistently tight on display sizes, creating a refined, editorial density. The supplied families are Saans, Saans Mono, Serrif, Ll, and System-Uisansserif. System-Uisansserif appears in fallback contexts and is not assigned to a specific semantic role in this guide.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Saans | 5rem | 400 | 1 | -0.075em | Page hero headings, the largest display treatment |
| section-display | Saans | 3.375rem | 400 | 1 | -0.074em | Section headings, statistics numerals |
| subhead-large | Saans | 1.6rem | 400 | 1.15 | -0.031em | Introductory paragraphs beneath hero headings |
| subhead-medium | Saans | 1.5rem | 400 | 1 | -0.02em | Card headings and feature titles |
| body | Saans | 1rem | 400 | 1.5 | normal | Navigation, buttons, general interface text |
| body-small | Saans | 0.875rem | 400 | 1.4 | normal | Secondary descriptions, metadata, filter labels |
| body-serif | Serrif | 1rem | 300 | 1.4 | -0.01em | Customer story descriptions, testimonials, quotes |
| label-mono | Saans Mono | 0.75rem | 400 | 1 | 0.05em | Small labels, category tags |
| label-mono-upper | Saans Mono | 0.75rem | 500 | 1.3 | 0.1em | Uppercase section labels, footer headings |
| navigation | Saans | 1rem | 400 | 1.5 | normal | Header navigation links |
| logo-mark | Ll | 1rem | 400 | 1 | -0.025em | Logo and brand mark treatment |

Saans and Saans Mono are designed by Martin Vácha and published by Displaay Type Foundry Sro. Verify licensing for these families before production use. Serrif, Ll, and System-Uisansserif have no supported attribution claims in the supplied data.

## Layout

The layout system is built on a generous 16px root with a 2px relative unit step, producing a fine-grained scale that allows precise spacing without arbitrary values. The page structure follows a centered, max-width container pattern with substantial horizontal margins that create a framed, editorial presentation.

Content containers center with margins that visually read as approximately 400px on each side at desktop scale, creating a narrow, focused reading column for hero text and a slightly wider column for card grids. The customer stories grid uses a three-column layout with consistent 32px gaps between cards. Filter chips arrange horizontally in rows with 8px to 12px gaps, grouped under "INDUSTRIES" and "TOPICS" category labels.

Section spacing is pronounced, with 80px to 128px vertical padding between major content areas. This creates clear rhythmic separation between the hero, filter controls, card grids, and social proof sections. Cards themselves use internal padding of 32px to 40px, with content stacked vertically and metrics anchored to the bottom of customer story cards.

The header maintains a fixed presence with 12px vertical padding, containing the logo mark, primary navigation, and two distinct button treatments on the right. A chat widget appears as a floating element in the bottom-right corner, overlaying content with a dark surface.

## Visual language

The visual character is defined by flatness, precision, and warmth. Surfaces are entirely flat with no drop shadows on cards or containers; depth is created solely through the temperature difference between canvas, surface, and surface-warm tones. Borders are uniformly 1px solid near-black hairlines, never heavier, which gives the interface a refined, almost print-like quality.

Corners are predominantly sharp (0px radius) for cards and major containers, with only buttons receiving slight rounding at 4px to 6px. This creates a deliberate contrast between the architectural rigidity of content cards and the subtle approachability of interactive elements.

Imagery and photography appear within cards without rounded corners, treated as rectangular inserts that respect the flat, editorial aesthetic. The warm beige surfaces of customer cards photographically complement the neutral canvas background, creating a gentle progression of temperature rather than stark alternation.

The logo mark uses a distinctive custom typeface (Ll) with tight tracking, appearing in both dark-on-light and light-on-dark contexts. Navigation buttons use a pill-shaped treatment with 6px radius, distinguishing them from the sharper content cards below.

## Components

### Hero section

The hero presents a centered text block with a small uppercase label above, a large display heading, a subhead paragraph, and two horizontally arranged buttons. The label uses the label-mono-upper token with wide tracking and uppercase transformation. The heading uses hero-display at 80px with extremely tight tracking. The subhead uses subhead-large at approximately 26px with slightly relaxed tracking. Buttons sit centered beneath with 8px to 12px gap between them.

### Customer story card

These are the primary content containers, appearing as tall rectangles with surface background. Anatomy includes: company logo or mark at top, a "Read more" text link aligned to the right of the logo, a descriptive paragraph in body-serif, and a large statistic at the bottom with a small label beneath it. The card has 1px border in ink, 32px to 40px internal padding, and no border radius. Statistics use section-display at 40px with tight tracking.

### Quote card

Similar in structure to customer cards but with canvas background, these contain a quotation mark, a testimonial paragraph in body-serif, and attribution at the bottom with name, title, and company. Some variants include a social platform icon. The card maintains the same 1px border and sharp corners.

### Statistics block

A variant of the customer card focused on a single large number with a small descriptor. The number uses section-display at 40px, positioned above a body-small label. These appear on surface background with the same border treatment.

### Filter chips

Horizontal rows of selectable tags with body-small typography. Inactive state uses canvas background with 1px ink border. Active state uses surface-warm background with matching border, creating a filled appearance without changing the border weight. Chips have minimal horizontal padding and no border radius.

### Primary button

Filled dark treatment with ink background and white text. Uses body typography at 16px, 4px border radius, and approximately 10px to 12px vertical padding with 14px horizontal padding. Appears in the hero and throughout for primary actions.

### Secondary button

Outlined treatment with white or transparent background, ink text, and 1px ink border. Same sizing and radius as primary. Used for "View demo" and similar secondary actions.

### Navigation buttons

Two variants in the header: a filled dark pill button for "Start free trial" and an outlined pill for "Fin AI Agent" with a right arrow. Both use 6px radius and navigation typography. The filled version uses ink background with white text; the outlined uses transparent background with ink text and border.

### Chat widget

A floating dark container in the bottom-right corner with rounded corners, containing a user avatar, message preview, and input area. Overlays page content without affecting document flow.

## Responsive behavior

The design should maintain its centered, framed character across viewports. At narrower widths, the three-column customer card grid should collapse to two columns and then to a single column, with cards maintaining their internal padding and border treatment. The hero heading should scale down from 80px to 54px and then to 40px, preserving the tight tracking that defines the display voice.

Filter chips should wrap to multiple lines rather than horizontally scroll, maintaining their row grouping under "INDUSTRIES" and "TOPICS" labels. The header navigation should collapse to a simplified menu or hamburger treatment, preserving the two primary action buttons as touch targets.

The chat widget should remain fixed in position but may reduce in width on smaller viewports. Floating elements should not obscure critical content or action buttons at any breakpoint.

## Practical implementation guidance

### Preserve
- The tight tracking on all display sizes; this is essential to the refined, editorial character
- The flat, border-defined card aesthetic; avoid introducing shadows or gradients on containers
- The warm surface progression from canvas to surface to surface-warm
- The pairing of Saans for interface and display with Serrif for longer descriptive text
- The generous section spacing that creates rhythmic breathing room
- The sharp 0px corners on cards contrasted with slight rounding on buttons

### Avoid
- Heavy borders or container shadows that would break the flat, print-like quality
- Introducing additional accent colors beyond the near-black and warm neutrals
- Using weight variation as a primary hierarchy tool; rely on scale and tracking instead
- Rounding card corners, which would soften the architectural precision
- Crowding the generous internal padding that makes cards feel substantial

### Recommended build order
1. Establish the root 16px base and 2px relative unit scale
2. Implement the color tokens, focusing on the warm neutral progression
3. Load Saans, Saans Mono, and Serrif with the specified weights
4. Build the type scale from body upward, verifying tracking values
5. Create the card component with its 1px border and sharp corners
6. Implement the hero section with centered container and button pair
7. Build the filter chip system with active and inactive states
8. Add the customer story grid with three-column layout
9. Implement the header with navigation and dual button treatments
10. Add the floating chat widget as a fixed overlay

### Accessibility
- Ensure the near-black on off-white combinations meet WCAG AAA contrast ratios; they should given the darkness of #111111
- The warm surface backgrounds with ink text should be verified for AA compliance, particularly on surface-warm
- Button text should maintain minimum 4.5:1 contrast in both filled and outlined variants
- The chat widget should be keyboard accessible and announce its presence to screen readers
- Focus indicators should be visible against all surface colors; consider using ink outlines with 2px offset
- Respect reduced-motion preferences for any scroll-triggered animations

## Scope note

This guide covers the Intercom Customers page surface, including the hero, filterable customer story grid, statistics blocks, quote cards, and social proof sections. The homepage hero, pricing page, and footer navigation are referenced from additional pins but not fully documented. Mobile breakpoints, hover states, loading skeletons, form validation, and dark mode implementations are not included. Motion design and animation specifications are outside the scope of this guide.
