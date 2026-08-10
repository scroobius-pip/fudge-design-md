# How hauntii.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hauntii.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with hand-drawn ghost illustration, OUT NOW display text, and platform store links on black background](https://pin.fontofweb.com/10491?format=jpg)](https://design.withfudge.com/share/pin-10491)

[Hero section with hand-drawn ghost illustration, OUT NOW display text, and platform store links on black background](https://design.withfudge.com/share/pin-10491)

[![Full landing page showing Hauntii title, central spiral ghost artwork, and bottom CTA buttons with platform badges](https://pin.fontofweb.com/10490?format=jpg)](https://design.withfudge.com/share/pin-10490)

[Full landing page showing Hauntii title, central spiral ghost artwork, and bottom CTA buttons with platform badges](https://design.withfudge.com/share/pin-10490)

## Overview

Hauntii's landing page presents a single-screen experience built around a stark black canvas and a central hand-drawn illustration. The design language draws from vintage horror aesthetics and theatrical poster typography, pairing a decorative serif display face with minimal system UI elements. Every interface element exists to frame the artwork and direct attention toward two actions: watching the trailer or accessing the press kit. The monochrome palette eliminates distraction, while generous negative space and precise letter-spacing give the compact layout an expansive, cinematic quality. The overall impression is of a curated gallery piece rather than a conventional product page, with the ghost illustration serving as both brand identity and emotional anchor.

## Colors

The interface operates on a strict monochrome system. Black dominates as the canvas, with white serving every text, border, and interactive need. Tonal variation in the illustration's stippled textures suggests intermediate grays that complete the palette without disrupting the binary character.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, hero section fill, all negative space |
| ink | #FFFFFF | Primary text, headings, button labels, logo wordmark |
| muted-ink | #B2B2B2 | Secondary text within platform badges, subtle labels |
| border | #FFFFFF | Button outlines, badge borders, hairline dividers |
| halftone | #5C5C5C | Mid-tone gray from illustration stippling, texture reference |
| starlight | #8A8A8A | Lighter gray from illustration highlights, secondary texture |

The canvas color extends full-bleed without gradients or overlays, creating a void that makes the white illustration and typography appear to float. The ink color carries all information hierarchy through weight and size rather than hue variation. Muted-ink appears only in the smaller platform badge text, establishing a secondary reading level without introducing a new color family. Border tokens are rendered as 1px solid hairlines that maintain their crispness against the black background. Halftone and starlight are drawn from the illustration's visible tonal range, describing the stippled shadows and lighter textured areas that give the artwork its depth. These grays belong to the visual language even when they do not appear as explicit UI fills.

## Typography

Two type families create a deliberate tension: Cinzel provides theatrical, inscriptional character for all display and heading material, while the system sans-serif handles functional UI labels with neutral efficiency.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Cinzel | 4.5rem | 600 | 1 | 0.05em | Large promotional statements, OUT NOW callout |
| logo-display | Cinzel | 2.25rem | 600 | 1.1 | 0.15em | Hauntii title wordmark |
| section-heading | Cinzel | 0.9375rem | 500 | 1.15 | 0.2em | Navigation labels, platform names, small headings |
| badge-status | Cinzel | 0.75rem | 500 | 1.2 | 0.25em | OUT NOW status text in platform badges |
| body | -apple-system | 0.875rem | 400 | 1.3 | 0em | Descriptive text, paragraphs |
| ui-label | -apple-system | 0.6875rem | 600 | 1 | 0em | Button text, compact interface labels |

Cinzel's wide proportions and pronounced serifs evoke carved stone and vintage horror film titles. The hero-display size is set in uppercase with generous letter-spacing that lets the forms breathe against the black field. Logo-display scales the same family down for the Hauntii wordmark, maintaining the inscriptional presence without competing with the central illustration. Section-heading applies an even smaller size with wider tracking, creating a whispered rather than shouted hierarchy. Badge-status adds a dedicated token for the platform availability labels, slightly smaller than section-heading with the widest tracking of the Cinzel set. The system sans-serif appears only where legibility at small sizes matters more than character, specifically in the trailer and press kit buttons. Verify licensing for these families before production use.

## Layout

The page follows a centered, stacked composition with the illustration as absolute focal point. The layout is sparse by design: no navigation shell, no sidebar, no footer clutter. Content anchors to three vertical zones.

The upper zone carries the Hauntii wordmark, hand-lettered in a style that matches the illustration's organic quality. The central zone is dominated by the spiral ghost illustration, positioned to fill the majority of the viewport width while maintaining breathing room on all sides. The lower zone contains the primary actions and platform availability, arranged in a horizontal row that balances the composition.

Horizontal spacing relies on generous margins. The primary buttons sit at the left and right extremes of the content area, creating a wide stance that frames the central artwork. Platform badges cluster in the center-bottom, their equal widths and consistent spacing forming a stable base. No grid system is visibly enforced; the composition reads as intentionally asymmetric yet balanced, with the weight of the large illustration offset by the peripheral button placement.

The section spacing token of 3.125rem governs the gaps between functional groups, while the component-gap of 1.875rem controls tighter relationships like the platform badge row. Padding within interactive elements stays minimal, with buttons using compact vertical padding and wider horizontal padding to achieve their pill proportions.

## Visual language

The visual system is built on contrast and restraint. Every element that is not the illustration is reduced to its essential outline: white lines on black, thin borders, small uppercase labels. The illustration itself is the only complex visual form, rendered in a hand-drawn style with stippled shading, flowing organic curves, and symbolic details like stars, a halo, and streaming hair.

This creates a clear hierarchy: the eye is drawn first to the central ghost form, then to the large OUT NOW statement, then to the peripheral actions. The monochrome treatment unifies illustration and interface, making the buttons and badges feel like extensions of the artwork rather than separate UI chrome.

Texture plays a subtle role. The illustration's halftone dots and rough edges introduce organic imperfection that contrasts with the crisp vector precision of the borders and typography. This tension between handmade and machined gives the page its distinctive personality. No gradients, shadows, or dimensional effects appear in the interface layer; depth is suggested only through the illustration's overlapping forms.

## Components

### Primary button

The primary action buttons appear as outlined pills with transparent interiors.

- Anatomy: Icon followed by uppercase label, horizontally centered within the pill boundary
- Surface: Transparent background with 1px solid white border
- Typography: ui-label token, system sans-serif at 0.6875rem weight 600, uppercase
- Shape: Full pill with 9999px border-radius
- Spacing: Compact vertical padding of 0.25rem, horizontal padding of 0.625rem
- Composition: Icon and text sit on a single baseline with tight internal spacing
- Variants: Two visible instances—"WATCH THE TRAILER" with play icon, "PRESS KIT" with document icon

The pill shape is critical to the component's character. Unlike rectangular buttons, the extreme radius softens the interface and echoes the organic curves of the illustration. The transparent fill maintains the black canvas continuity, making the button feel like a drawn outline rather than a solid object.

### Platform badge

Platform availability is communicated through four equal cards arranged in a horizontal row.

- Anatomy: Platform logo above uppercase platform name and "OUT NOW" status
- Surface: Transparent background with 1px solid white border, slight border-radius of 0.25rem
- Typography: Platform name in section-heading token (Cinzel, 0.9375rem, wide tracking); status in badge-status token
- Shape: Square-cornered rectangle with minimal 4px radius
- Spacing: Internal padding of 1.25rem, external gap of 1.875rem between badges
- Composition: Vertically stacked content, horizontally centered within each badge
- Variants: Steam, Nintendo Switch, Xbox, PlayStation

The badges function as both information and decoration. Their consistent sizing and spacing create a rhythmic base line that grounds the composition. The slight border-radius distinguishes them from the sharper-edged illustration while remaining geometric enough to feel like interface elements.

### Logo wordmark

The Hauntii title sits above the illustration as a distinct typographic element.

- Anatomy: Uppercase text rendered in the logo-display token
- Surface: No background, text sits directly on the canvas
- Typography: Cinzel at 2.25rem weight 600, letter-spacing 0.15em
- Shape: No containing box, text only
- Spacing: Generous margin below before the illustration begins
- Composition: Centered horizontally, positioned in the upper third of the viewport
- Variants: Single instance with hand-drawn stylistic alternates visible in the letterforms

The wordmark functions as both title and decorative frame. Its tracking is slightly tighter than the hero-display below, creating a subtle scale relationship that reads as heading-to-subheading even though both use the same family. The hand-drawn quality of the rendered letters bridges the gap between rigid typography and the organic illustration.

## Responsive behavior

The desktop layout assumes a wide viewport with ample horizontal space for the peripheral button placement. At narrower widths, the composition should adapt through several predictable changes.

The side-positioned buttons should stack vertically and center-align beneath the illustration rather than flanking it. The platform badge row should wrap to two-by-two or single-column arrangement depending on available width, maintaining equal gaps between items. The hero display text should scale down proportionally, preserving its line breaks and uppercase treatment.

The illustration should remain centered and maintain its aspect ratio, scaling to fit available width without cropping. No horizontal scroll should occur; the design's power comes from the complete image being visible at once.

Touch targets for the pill buttons should expand to at least 44px height on pointer-coarse devices while preserving their visual proportions. The transparent fill and thin border remain appropriate for dark mode contexts, as the entire design is already optimized for low-light viewing.

## Practical implementation guidance

### Preserve
- The pure black canvas as the dominant negative space
- The two-family type system with Cinzel for display and system sans for UI
- The hand-drawn illustration as the uncontested visual center
- The 1px hairline borders on transparent backgrounds
- The extreme pill radius for primary actions
- The uppercase, wide-tracking treatment for all Cinzel text

### Avoid
- Adding color to the interface palette; the monochrome system is intentional
- Solid-fill buttons that would create heavy white masses against the black
- Additional navigation or footer elements that would compete with the illustration
- Shadows, gradients, or dimensional effects on UI elements
- Tight letter-spacing on Cinzel display text, which would destroy its inscriptional quality

### Recommended build order
1. Establish the black canvas and full-bleed layout structure
2. Place the central illustration with responsive scaling behavior
3. Add the Hauntii wordmark with logo-display token
4. Implement the OUT NOW display text with hero-display token
5. Build the pill button component with icon and label
6. Create the platform badge grid with consistent borders and spacing
7. Fine-tune responsive stacking for narrow viewports

### Accessibility
- Ensure the transparent buttons maintain visible focus indicators, such as a solid white fill or thickened border on focus
- Provide aria-labels for icon-only elements if any are used
- Confirm that the thin 1px borders meet contrast requirements against the black background; they do at 21:1 for white on black
- Consider adding a subtle focus ring that does not rely solely on color change, since the palette is monochrome
- The large display text benefits from its size, but verify that smaller UI labels remain legible at 0.6875rem

## Scope note

This guide covers the single-page landing experience visible in the supplied captures. Interior pages, additional breakpoints, motion design, hover states, and form interactions are not represented. The platform badge links and their destination behaviors are assumed but not verified. Measurements are practical adaptation targets derived from the visible interface.
