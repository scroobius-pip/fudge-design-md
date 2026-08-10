# How vast.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/vast.ai-design)

Last updated: 2026-08-10

## Captured pages

[![GPU cloud product page showing dark canvas with serif hero typography, teal and orange GPU architecture bars, and six-column feature grid](https://pin.fontofweb.com/3980?format=jpg)](https://design.withfudge.com/share/pin-3980)

[GPU cloud product page showing dark canvas with serif hero typography, teal and orange GPU architecture bars, and six-column feature grid](https://design.withfudge.com/share/pin-3980)

[![Light gray footer with email subscription field, multi-column link navigation, and oversized white vast.ai wordmark watermark](https://pin.fontofweb.com/3979?format=jpg)](https://design.withfudge.com/share/pin-3979)

[Light gray footer with email subscription field, multi-column link navigation, and oversized white vast.ai wordmark watermark](https://design.withfudge.com/share/pin-3979)

[![Hero section with cinematic teal-orange landscape photography, white display headline, and blue pill-shaped Get Started button](https://pin.fontofweb.com/3978?format=jpg)](https://design.withfudge.com/share/pin-3978)

[Hero section with cinematic teal-orange landscape photography, white display headline, and blue pill-shaped Get Started button](https://design.withfudge.com/share/pin-3978)

[![Developer-focused section with dark background, serif headline, teal checkmark icons, and white onboarding card with blue glow](https://pin.fontofweb.com/3977?format=jpg)](https://design.withfudge.com/share/pin-3977)

[Developer-focused section with dark background, serif headline, teal checkmark icons, and white onboarding card with blue glow](https://design.withfudge.com/share/pin-3977)

## Overview

Vast.ai presents a GPU cloud marketplace for AI and machine learning workloads. The visual system pairs cinematic, atmospheric photography with a disciplined dark-mode interface that keeps technical content legible and approachable. The design language speaks directly to developers: dense information is organized into scannable grids, GPU hardware is visualized through color-coded horizontal bars, and calls to action use electric blue to cut through the darkness. Serif display typography adds editorial weight to headlines without sacrificing the utilitarian clarity of the platform's data-rich surfaces. The overall impression is of a premium infrastructure tool—serious, capable, and visually confident.

## Colors

The color system operates in a dark-first mode with selective light surfaces for contrast and emphasis. Photography drives atmospheric color, while UI colors remain restrained and functional.

| token | value | use |
|---|---|---|
| action | #2563EB | Primary buttons, links, and interactive accents |
| action-hover | #1D4ED8 | Hover state for primary actions |
| canvas | #0A0A0A | Page background, deepest surface layer |
| surface | #141414 | Cards, panels, and elevated dark containers |
| surface-elevated | #FFFFFF | Onboarding cards and light-inversion moments |
| ink | #F5F5F5 | Primary text on dark backgrounds |
| muted-ink | #A3A3A3 | Secondary text, captions, and de-emphasized labels |
| border | #262626 | Subtle dividers and hairline separators |
| accent-teal | #14B8A6 | GPU generation indicators, success states, checkmarks |
| accent-orange | #F97316 | Highlighted GPU tiers, warning indicators |

The dark canvas dominates the interface, creating a theater-like environment for the cinematic hero photography. White surfaces appear sparingly as elevated cards that demand attention, such as the three-step onboarding flow. The electric blue action color carries all primary interactive weight, while teal and orange serve as data-visualization accents within the GPU architecture bars. Muted gray text prevents visual fatigue in dense technical sections. The system avoids gradients in UI elements, reserving them for photographic and atmospheric backgrounds only.

## Typography

The type system combines editorial serif display faces with a neutral sans-serif workhorse for interface text. This pairing signals technical credibility while maintaining warmth in marketing moments.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pt Serif | 3.5rem | 400 | 1.1 | -0.01em | Page headlines, hero statements |
| section-display | Pt Serif | 2.5rem | 400 | 1.15 | -0.01em | Section headers, feature titles |
| body | Inter | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions |
| body-medium | Inter | 1rem | 500 | 1.5 | 0em | Emphasized body, card titles |
| label | Inter | 0.875rem | 500 | 1.4 | 0.01em | Buttons, tags, metadata |
| navigation | Inter | 0.875rem | 400 | 1.4 | 0em | Menu items, footer links |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0em | Copyright, disclaimers |
| accent-italic | Pt Serif-Italic | 1.125rem | 400 | 1.4 | 0em | Pull quotes, emphasized phrases |

Pt Serif provides the editorial voice for headlines, with its italic variant used for emphasis within display text. Inter handles all functional typography with weights from Regular to Medium. The DM Sans 9 Pt family appears in the source but its specific role is not visually confirmed in the captured surfaces. Verify licensing for these families before production use. Inter is designed by Rasmus Andersson and distributed by Rsms.

## Layout

The layout system favors full-bleed sections with generous internal padding and clear horizontal rhythm. Content max-width containers center text and components while allowing photography and decorative elements to extend to viewport edges.

Section spacing uses 6rem vertical gaps between major content blocks, with 2rem gutters between grid items. The GPU architecture visualization in the product page spans the full content width as a horizontal bar chart with nested color segments. Feature grids use a three-column layout at desktop widths with consistent 1.5rem internal padding per cell.

The hero section layers typography directly over cinematic photography, with text positioned in the left third of the frame to avoid the visual center of the image. A decorative chevron pattern anchors the bottom edge of the hero, creating a transition to subsequent content. Footer content distributes across a multi-column link grid with a massive watermark wordmark below, using negative space as a deliberate branding element.

Cards and elevated surfaces use centered or left-aligned content with 2.5rem internal padding. The onboarding card breaks the dark-mode convention with a white background, positioned within a blue glow effect that separates it from the surrounding dark canvas.

## Visual language

The visual identity balances technical precision with atmospheric storytelling. Cinematic photography depicts vast, otherworldly landscapes—teal waters, orange embers, monumental scale—serving as metaphor for unlimited computational possibility. These images are treated with a color grade that reinforces the platform's accent palette.

Data visualization appears as horizontal segmented bars, with color encoding GPU generations: teal for current architectures, orange for premium tiers, and muted grays for legacy hardware. This system makes hardware comparison immediate and scannable.

Iconography is minimal and functional. Teal circle-check marks indicate feature availability. Arrow icons accompany text links, signaling external navigation. The V logo mark appears as a simple geometric monogram in a rounded square container.

The decorative chevron border at the hero bottom creates rhythmic visual interest without competing with the photography. This pattern uses thin white strokes on transparent background, maintaining the airy, technical aesthetic.

## Components

**Primary Action Button**
- Anatomy: Pill-shaped button with centered label text
- Surface and text color: Blue background (#2563EB) with white text
- Typography: Label token, medium weight
- Shape: Full pill radius (9999px)
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- Composition: Appears alongside secondary text-link actions with arrow icons
- Variants: Default blue fill; secondary variant uses transparent background with underline text

**GPU Architecture Bar**
- Anatomy: Horizontal bar with nested color segments and text labels
- Surface and text color: Dark segment backgrounds with white or dark text depending on segment luminance
- Typography: Label token for generation names, smaller text for specific models
- Shape: Slight rounding on outer container
- Spacing: Tight internal padding, full-width container
- Composition: Stacked vertically by generation with right-aligned model counts
- Variants: Teal segments for standard offerings, orange for premium tiers, gray for legacy

**Feature Grid Cell**
- Anatomy: Text-only cell with headline and description
- Surface and text color: Transparent background, white headline, muted gray body
- Typography: Section-display for headline, body for description
- Shape: No visible border or background
- Spacing: Generous vertical gap between cells, consistent horizontal alignment
- Composition: Three-column grid at desktop, single column on narrow viewports

**Onboarding Card**
- Anatomy: White card with numbered steps, headlines, descriptions, and action buttons
- Surface and text color: White background with near-black text
- Typography: Section-display for card title with italic accent, body-medium for step headlines, body for descriptions
- Shape: Rounded panel corners
- Spacing: 2.5rem internal padding
- Composition: Left-aligned step list with circular number indicators
- Variants: Single card instance with blue atmospheric glow behind

**Footer**
- Anatomy: Light gray background with logo, email field, multi-column links, and watermark
- Surface and text color: Light gray background (#E5E5E5) with dark text
- Typography: Navigation token for column headers and links, legal-copy for copyright
- Shape: Full-width section, no border radius
- Spacing: Generous top padding, compact link columns
- Composition: Horizontal distribution with massive faint wordmark below functional content

## Responsive behavior

The layout should maintain its section-based rhythm across viewports. Hero photography remains full-bleed with text repositioned to avoid image focal points. The three-column feature grid collapses to single column on narrow screens, preserving vertical reading order. GPU architecture bars may require horizontal scrolling or simplified labeling at small widths.

The footer link columns should stack vertically on mobile, with the email subscription field remaining prominent. The decorative chevron pattern may reduce in density or hide entirely on narrow viewports to prevent visual clutter.

Touch targets for pill buttons should maintain minimum 44px height. The onboarding card's white background provides sufficient contrast for all text without additional adaptation.

## Practical implementation guidance

**Preserve**
- The dark canvas as the default page background; light surfaces are intentional exceptions
- Serif headlines for editorial weight, especially in hero and section headers
- The electric blue action color for all primary interactive elements
- Full-bleed photography with left-positioned text overlay
- The GPU bar visualization pattern for hardware comparison

**Avoid**
- Light-mode as default; the dark atmosphere is central to the brand
- Additional accent colors beyond teal and orange for data visualization
- Heavy borders or shadows on cards; rely on background contrast instead
- Centered headlines in hero sections; maintain left alignment

**Recommended Build Order**
1. Establish dark canvas and typography scale with Inter body text
2. Implement hero section with photography treatment and pill button
3. Build GPU architecture bar component with color-coded segments
4. Create feature grid with three-column responsive behavior
5. Add onboarding card with light inversion and blue glow
6. Implement footer with link columns and watermark wordmark

**Accessibility**
- Ensure white text on photography has sufficient contrast; consider subtle dark scrim behind hero text
- Maintain visible focus indicators on blue buttons with adequate color contrast
- Provide text alternatives for GPU bar color coding through labels or patterns
- Structure footer links as semantic lists for screen reader navigation

## Scope note

This guide covers the Vast.ai marketing site homepage and GPU cloud product page as captured. Dashboard interfaces, pricing calculators, account flows, and mobile-specific layouts are not represented. Motion, hover states, and loading behavior are not documented. Measurements are practical adaptation targets derived from visual inspection of the supplied images.
