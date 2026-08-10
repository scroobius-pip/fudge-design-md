# How stacks.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/stacks.co-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with dark background, large white display heading, and orange primary action button](https://pin.fontofweb.com/7974?format=jpg)](https://design.withfudge.com/share/pin-7974)

[Hero section with dark background, large white display heading, and orange primary action button](https://design.withfudge.com/share/pin-7974)

[![Ecosystem grid showing four-column card layout with project icons and social links](https://pin.fontofweb.com/7975?format=jpg)](https://design.withfudge.com/share/pin-7975)

[Ecosystem grid showing four-column card layout with project icons and social links](https://design.withfudge.com/share/pin-7975)

[![Footer area with multi-column navigation, dark action button, and orange Bitcoin sphere illustration](https://pin.fontofweb.com/7976?format=jpg)](https://design.withfudge.com/share/pin-7976)

[Footer area with multi-column navigation, dark action button, and orange Bitcoin sphere illustration](https://design.withfudge.com/share/pin-7976)

## Overview

The Stacks ecosystem directory presents a technical yet approachable interface for discovering Bitcoin-layer applications and tools. The design balances institutional credibility with developer-friendly warmth through its restrained palette, systematic typography, and careful use of a single vibrant orange accent. The visual system alternates between immersive dark hero moments and expansive light content surfaces, creating clear hierarchy while maintaining readability across dense information grids. Every element serves the core task of browsing and evaluating ecosystem projects, with card-based layouts that prioritize scanability and clear project identification through custom icons and consistent metadata patterns.

## Colors

The color system operates in two distinct modes: a dark immersive mode for hero and navigation moments, and a light content mode for browsing and reading. The orange accent functions as the single brand signal, reserved for primary calls-to-action and key interactive moments.

| token | value | use |
|---|---|---|
| action | #FC6432 | Primary buttons, active states, key highlights |
| ink | #131416 | Primary text, active filter backgrounds, dark buttons |
| muted-ink | #27282B | Secondary text, card headings |
| subtle-ink | #818688 | Tertiary text, metadata, disabled states |
| canvas | #FFFFFF | Page background, hero text on dark |
| surface | #F4F3F0 | Card backgrounds, secondary surfaces |
| surface-warm | #DEDAD4 | Borders, dividers, subtle backgrounds |
| hero-bg | #000000 | Hero section background, immersive moments |
| hero-ink | #FFFFFF | Text on dark backgrounds |
| hero-muted | #FDFDFC | Subtle text on dark backgrounds |

The dark hero mode uses pure black with white typography for maximum contrast and visual impact. The light content mode employs a warm off-white family that avoids sterile gray tones, with #F4F3F0 providing a gentle elevation for cards against the white canvas. The orange accent (#FC6432) appears exclusively on the primary "START BUILDING" call-to-action and active navigation states, ensuring it retains its signaling power. Text hierarchy is established through color rather than weight alone, with #131416 for primary content, #27282B for card titles, and #818688 for descriptions and metadata.

## Typography

The type system combines four families to create clear functional roles: Matter Sq for display and UI headings, Inter for body reading, Matter Mono for labels and navigation, and Matter Mono-500 for medium-weight mono emphasis. This pairing establishes a technical yet refined character appropriate for a developer-facing ecosystem platform.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Matter Sq | 3.4375rem | 400 | 1 | -0.03em | Page titles, hero headings |
| section-display | Matter Sq | 1.5rem | 400 | 1.2 | normal | Card titles, section headings |
| body | Inter | 1.125rem | 400 | 1.5 | normal | Descriptions, paragraphs |
| body-small | Matter Sq | 1rem | 400 | 1.48 | normal | Card descriptions, secondary text |
| label | Matter Mono | 0.8125rem | 400 | 1.2 | 0.03em | Buttons, tags, filters |
| label-small | Matter Mono | 0.75rem | 500 | 1.2 | 0.03em | Navigation, compact labels |
| navigation | Matter Mono | 0.75rem | 500 | 1.2 | 0.03em | Header nav, dropdown items |

Matter Sq serves as the display voice with its geometric, squared character, lending a constructed, technical quality to headings. Inter provides comfortable reading at 18px with its open forms and generous x-height. Matter Mono handles all interface chrome with its regular weight, creating a consistent technical rhythm through navigation, buttons, and metadata. Matter Mono-500 provides medium-weight emphasis within the mono family when slightly stronger hierarchy is needed. The mono family's tracked uppercase treatment for labels establishes a systematic, almost editorial voice for interactive elements. Matter Mono, Matter Mono-500, and Matter Sq are designed by Martin Vácha and published by Displaay Type Foundry. Verify licensing for these families before production use.

## Layout

The layout follows a centered container model with generous horizontal margins that create breathing room around dense content grids. The header maintains a fixed position with a white background, establishing persistent navigation access across long scrolling pages.

The hero section occupies full viewport width with a black background, centered content, and substantial vertical padding. A subtle grid pattern overlays the dark surface, adding technical texture without competing with content. Below the hero, the main content area uses a maximum-width container centered in the viewport, with filter controls aligned to the left and the project grid filling the available space.

The project grid employs a four-column layout at desktop widths, with consistent gutters between cards. Each card maintains equal height within its row through flexbox behavior, with internal content stacked vertically: project icon, title, description, and social links. The grid's regular rhythm is interrupted only by category filter pills that sit above as a horizontal scrolling row on narrower viewports.

Spacing follows a systematic approach based on a 2px unit. Major sections are separated by 96px (6rem), content blocks by 48px (3rem), and related elements by 24px (1.5rem). Card internal padding uses 24px on all sides, creating consistent touch targets and readable measure. The header uses 20px vertical padding with 24px horizontal padding, maintaining compact presence without crowding.

## Visual language

The visual character is technical, systematic, and quietly confident. Geometric precision dominates through squared letterforms, regular grid structures, and consistent border radii. The design avoids decorative excess, letting content density and careful typography create visual interest.

Card surfaces use a distinctive chamfered or asymmetric radius pattern, with 16px rounding on the top-left and top-right corners while remaining square elsewhere, or variations thereof. This creates a subtle architectural quality suggesting stacked layers or building blocks, appropriate for a platform about layered technology.

Project icons appear as rounded squares with generous padding, floating slightly above card surfaces with subtle shadow offsets. The icon treatment uses 8px internal radius, creating friendly app-like identifiers against the more severe card geometry. Social links at card bottoms use simple glyph icons in muted gray, maintaining scannability without visual noise.

The orange accent appears sparingly: on the primary "START BUILDING" pill button, active navigation states, and the Bitcoin sphere illustration in the footer. This restraint makes the warm orange feel earned and significant rather than overwhelming. The footer transitions to a warm off-white surface, with layered card shapes creating depth through shadow offsets in white, producing a cut-paper dimensional effect.

## Components

### Ecosystem card

Anatomy: Rounded-corner container with asymmetric radius (16px top, square bottom), project icon positioned top-left overlapping the card edge, title in section-display typography, description in body-small, and social link row at bottom.

Surface: Background #F4F3F0, no border. The card sits on white canvas with 24px gutters.

Typography: Title uses Matter Sq at 1.5rem in #27282B. Description uses Matter Sq at 1rem in #818688 with 1.48 line height.

Shape: Top corners at 16px radius, bottom corners square. The project icon container uses 8px radius and sits partially outside the card top edge.

Spacing: 24px internal padding. Icon sits with negative top margin overlapping card boundary. Social links row at bottom with 16px gap between icons.

Composition: Vertical stack with icon, 16px gap, title, 8px gap, description, flexible space, social row.

### Primary action button

Anatomy: Pill-shaped button with arrow icon, used for main calls-to-action.

Surface: Background #FC6432, text #FFFFFF. No border.

Typography: Matter Mono Medium at 0.75rem, uppercase, tracked at 0.03em.

Shape: Full pill at 88px radius (5.5rem), creating capsule form.

Spacing: 12px vertical padding, 16px horizontal padding, with additional space for arrow glyph.

### Secondary action button

Anatomy: Rectangular button with rounded corners, used for dark-themed actions.

Surface: Background #131416, text #FFFFFF. No border.

Typography: Matter Mono at 0.8125rem, uppercase, tracked.

Shape: 8px border radius.

Spacing: 19.5px vertical padding, 24px horizontal padding.

### Filter pill

Anatomy: Small rounded button for category filtering, appearing in horizontal rows.

Surface: Default state uses #F4F3F0 background with #131416 text. Active state inverts to #131416 background with #FFFFFF text.

Typography: Matter Mono at 0.8125rem, uppercase, tracked.

Shape: 8px border radius.

Spacing: 11px vertical padding, 12px horizontal padding. Pills arranged horizontally with 8px gaps.

### Header navigation

Anatomy: Fixed header with logo left, dropdown navigation center, primary action right.

Surface: White background with subtle bottom shadow.

Typography: Navigation labels use Matter Mono Medium at 0.75rem, uppercase. Dropdown items use same family at 0.8125rem.

Shape: Logo mark uses geometric asterisk symbol. Dropdown triggers include small downward chevrons.

Spacing: 20px vertical padding, 24px horizontal. Navigation items spaced with 24px gaps.

### Footer

Anatomy: Multi-column link grid with category headings, action buttons, and decorative illustration.

Surface: Warm off-white #F4F3F0 with layered card shapes creating dimensional depth through white shadow offsets.

Typography: Category headings use Inter at 1.125rem in #131416. Links use Matter Mono at 0.8125rem in #818688, uppercase.

Shape: Large background panels with 12px top radius and layered offset cards.

Spacing: 48px left padding for content columns. Generous vertical spacing between sections.

## Responsive behavior

The design should maintain its four-column grid down to approximately tablet width, then transition to two columns for smaller tablets and single column for mobile devices. Filter pills should become horizontally scrollable when container width is insufficient, preserving the compact row layout rather than wrapping to multiple lines.

The hero heading should scale down proportionally, maintaining the tight line height and negative letter spacing that gives Matter Sq its distinctive display character. At minimum, the hero display should remain above 2rem to preserve readability.

Card icons should remain at consistent size across breakpoints, as they serve critical brand recognition functions. Social link rows may reduce to essential icons only on narrow viewports.

The header navigation should collapse to a menu trigger on mobile, with dropdown categories becoming full-screen overlay panels. The primary "START BUILDING" action should remain visible in the header across all breakpoints, as it represents the core conversion goal.

## Practical implementation guidance

### Preserve
- The asymmetric card radius pattern (rounded top, square bottom) that creates the layered architectural character
- The strict mono uppercase treatment for all interactive labels and navigation
- The generous whitespace around the hero section that creates dramatic contrast with dense content below
- The single orange accent reserved exclusively for primary actions
- The warm off-white surface family that avoids sterile grays

### Avoid
- Adding borders to cards; the surface color difference provides sufficient separation
- Using the orange accent for non-action elements like icons or decorative graphics
- Reducing the mono tracking on labels; the spaced uppercase treatment is essential to the technical voice
- Making card corners uniformly rounded; the asymmetric treatment is distinctive
- Using pure black text (#000000) for reading; the slightly warmer #131416 is specified for ink

### Recommended build order
1. Establish the type system with all four families loaded and the mono uppercase pattern applied to labels
2. Build the hero section with dark background, centered display heading, and grid texture
3. Implement the filter pill row with active/invert states
4. Create the ecosystem card component with asymmetric radius and icon overlap
5. Construct the four-column grid with consistent gutters and equal height behavior
6. Add the header with navigation dropdowns and persistent primary action
7. Implement the footer with layered dimensional surfaces

### Accessibility
- Ensure the orange on white combination meets minimum contrast ratios; the #FC6432 on #FFFFFF pairing should be verified for small text compliance
- Provide visible focus states for all interactive elements, using outline or background shift rather than relying on color alone
- Maintain the semantic heading hierarchy with a single h1 in the hero and h2 or h3 for card titles
- Ensure filter pills have clear active state indicators beyond color for colorblind users
- Consider adding aria-labels to icon-only social links in cards

## Scope note

This guide covers the Stacks ecosystem directory page including the hero section, filterable project grid, and footer navigation. Interior pages, mobile navigation patterns, form interactions, and motion behavior are not represented in the supplied material. The design system should extend to additional surfaces with careful attention to maintaining the mono uppercase voice and warm surface palette established here.
