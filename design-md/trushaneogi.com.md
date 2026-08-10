# How trushaneogi.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/trushaneogi.com-design)

Last updated: 2026-08-10

## Captured pages

[![About section with laptop mockup and biographical text in muted gray on white background](https://pin.fontofweb.com/5884?format=jpg)](https://design.withfudge.com/share/pin-5884)

[About section with laptop mockup and biographical text in muted gray on white background](https://design.withfudge.com/share/pin-5884)

[![Dark testimonial carousel with large white heading and quote card on charcoal surface](https://pin.fontofweb.com/5883?format=jpg)](https://design.withfudge.com/share/pin-5883)

[Dark testimonial carousel with large white heading and quote card on charcoal surface](https://design.withfudge.com/share/pin-5883)

[![Footer area with oversized 'trusha.' display type, social links, and handwritten signature mark](https://pin.fontofweb.com/5882?format=jpg)](https://design.withfudge.com/share/pin-5882)

[Footer area with oversized 'trusha.' display type, social links, and handwritten signature mark](https://design.withfudge.com/share/pin-5882)

[![Hero section with mixed serif and italic headline above scattered personal cards on white canvas](https://pin.fontofweb.com/5881?format=jpg)](https://design.withfudge.com/share/pin-5881)

[Hero section with mixed serif and italic headline above scattered personal cards on white canvas](https://design.withfudge.com/share/pin-5881)

## Overview

This design system captures the visual language of a personal portfolio website for a product designer and researcher. The site alternates between expansive white spaces and immersive dark surfaces, creating rhythm through contrast rather than ornament. The personality emerges from typographic tension: massive, tightly-tracked sans-serif display words collide with flowing italic serifs in the same headline, suggesting analytical precision paired with creative fluency. The overall impression is confident and contemporary, with a deliberately sparse interface that lets project imagery, personal artifacts, and oversized typography carry the narrative. Navigation is minimal, social proof is presented in a dark testimonial carousel, and the footer resolves with an almost architectural scale shift where the designer's first name becomes a structural element.

## Colors

The palette is intentionally restrained, built on a high-contrast foundation of near-black and pure white with a single functional accent. Dark sections use a warm charcoal rather than pure black, softening the severity of testimonial and project surfaces.

| token | value | use |
|---|---|---|
| ink | #151515 | Primary text, button fills, logo mark, display type |
| canvas | #FFFFFF | Page backgrounds, light section surfaces, button text on dark |
| surface | #1A1A1A | Dark section backgrounds, testimonial cards, footer areas |
| muted | #888888 | Secondary text, captions, inactive carousel dots, email links |
| accent | #4A90E2 | Status indicators, interactive highlights, "Open to work" badge |

The light mode dominates the experience. White canvas serves as the default ground for hero, about, and navigation sections, with ink providing all primary reading matter. The dark surface token appears in the testimonial carousel and select project showcases, where white text reverses out for dramatic emphasis. The muted gray mediates hierarchy in body copy fade effects and secondary metadata. The blue accent is used sparingly as a functional signal—visible in the "Open to work" status dot—rather than as a decorative element. No gradient fills or shadow colors are present in the visible interface; depth is achieved through flat color blocking and scale contrast alone.

## Typography

The type system pairs a geometric sans-serif family for all interface and display text with an elegant italic serif for editorial emphasis. A handwritten script face appears only as a personal signature mark. The supplied families are Instrument Serif, Instrument Serif-Italic, Inter Display, Inter Display Medium, Inter Display Semi Bold, Inter Display-Italic, Inter Medium, and Nanum Pen. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter Display Semi Bold | 8rem | 600 | 0.9 | -0.03em | Footer name mark, massive structural type |
| section-display | Inter Display Semi Bold | 4rem | 600 | 1 | -0.02em | Testimonial headings, major section titles |
| headline | Inter Display Medium | 2.5rem | 500 | 1.1 | -0.01em | Hero statements, about section leads |
| body | Inter Display | 1.25rem | 400 | 1.6 | 0 | Standard paragraphs, descriptions |
| body-large | Inter Display | 1.5rem | 400 | 1.5 | 0 | Featured quotes, emphasized passages |
| accent-serif | Instrument Serif-Italic | 2.5rem | 400 | 1.2 | 0 | Italic phrases within headlines, editorial emphasis |
| label | Inter Medium | 1rem | 500 | 1.4 | 0 | Navigation, buttons, tags, metadata |
| caption | Inter Display | 0.875rem | 400 | 1.5 | 0 | Small print, timestamps, locations |
| signature | Nanum Pen | 2rem | 400 | 1.2 | 0 | Handwritten name mark in footer |

The display hierarchy is extreme: hero-display at 8rem creates an almost architectural footer element where the designer's name becomes a spatial feature rather than mere text. Section-display at half that scale governs testimonial and major section openings. The accent-serif token interleaves with sans-serif headlines to create mixed-voice statements, most visibly in the hero where "Simplifying complexity through" appears in sans-serif and "product strategy & design thinking" resolves in flowing italic. Body sizes are generous, avoiding the cramped feel of traditional portfolio sites. Weight distinctions are preserved across Regular, Medium, and Semi Bold cuts of the Inter Display family. The Inter Display-Italic cut is available for any slanted sans-serif needs, though the visible interface prefers the distinct character of Instrument Serif-Italic for editorial emphasis.

## Layout

The page employs a centered single-column structure with generous margins that expand on large viewports. Content rarely touches the viewport edges; instead, a consistent inset creates breathing room around all elements.

The navigation sits as a sparse horizontal bar at the extreme top, with the wordmark "trusha." anchored left and a cluster of text links plus a pill-shaped Resume button aligned right. No background container or border separates the nav from content below; it floats directly on the white canvas.

The hero section occupies substantial vertical space, centering a two-line headline with mixed typography above a scattered composition of four personal cards. These cards—showing a bucket list, blog promotion, portrait, and work ethic definition—sit at slight rotational angles and overlapping positions, creating an informal, desk-like arrangement rather than a rigid grid.

The about section shifts to a two-column layout on desktop: a rounded-corner laptop mockup showing design work occupies the left portion, while right-aligned biographical text spans multiple lines with a fade-to-muted treatment on earlier sentences and full ink weight on the concluding phrase.

The testimonial section inverts to full dark surface, with a large left-aligned heading and a right-aligned subtitle creating horizontal tension. Below, a single prominent quote card fills most of the width, with adjacent cards partially visible at the edges suggesting a horizontal carousel. Pagination dots center below.

The footer returns to white canvas with an asymmetrical composition: social links and email stack left, status metadata and location center-right, and the handwritten signature mark floats in the upper right. The massive "trusha." display type anchors the bottom edge, partially cropped by the viewport, with a small rounded portrait image tucked against the final period.

Section spacing is generous, with approximately 6rem between major zones. Internal content gaps of 2rem separate related elements within sections.

## Visual language

The aesthetic balances systematic restraint with personal warmth. The interface avoids decorative borders, shadows, and background textures entirely. Visual interest comes from three sources: extreme typographic scale, the contrast between geometric and organic type forms, and the scattered card compositions that suggest physical artifacts on a desk.

Photography and imagery appear exclusively within rounded-corner containers—cards, mockups, and portrait frames—never as full-bleed backgrounds. The rounding is consistent at approximately 0.75rem to 1rem, softening the clinical precision of the sans-serif typography.

The dark testimonial section provides the only major mood shift, using near-black surface with white text to create a moment of professional gravitas. This inversion is complete: no light elements intrude except the text itself and subtle pagination indicators.

Personal touches appear through the handwritten signature, the slightly askew card arrangements, and the live timestamp showing local time. These elements prevent the minimal system from feeling sterile, grounding the portfolio in a specific person's presence.

## Components

### Navigation bar
- **Anatomy**: Wordmark left, link cluster right, primary action button far right
- **Surface**: Transparent, no background fill
- **Typography**: Links use `{typography.label}` in ink; active page indicated by presence rather than style change
- **Composition**: Horizontal flex with space-between, vertically centered
- **Spacing**: Approximately 2rem vertical padding, generous horizontal inset from viewport edges

### Primary button
- **Anatomy**: Text label with optional arrow icon
- **Surface**: `{colors.ink}` fill, `{colors.canvas}` text
- **Typography**: `{typography.label}`
- **Shape**: Full pill with `{rounded.button}`
- **Spacing**: Compact horizontal padding, comfortable vertical padding
- **Variants**: Dark fill variant for light backgrounds; no visible outline or ghost variant

### Hero headline
- **Anatomy**: Two-line statement with mixed type styles
- **Typography**: First line in `{typography.headline}`, second line in `{typography.accent-serif}`
- **Color**: `{colors.ink}` throughout
- **Composition**: Centered, with the italic serif line slightly indented or offset to create visual rhythm

### Personal cards
- **Anatomy**: Rounded rectangular containers with varied internal content—handwritten lists, blog promotions, portraits, dictionary-style definitions
- **Surface**: Varied by card: warm yellow, dark charcoal, photographic, or white with subtle shadow
- **Shape**: `{rounded.card}` corners
- **Composition**: Scattered at slight rotations, overlapping, creating informal depth
- **Spacing**: No consistent grid; positioned for visual balance rather than alignment

### Testimonial carousel
- **Anatomy**: Section heading, subtitle, quote card, pagination dots, navigation arrows
- **Surface**: Full `{colors.surface}` section background; cards use slightly elevated dark tone
- **Typography**: Heading in `{typography.section-display}`, quote in `{typography.body-large}`, attribution in `{typography.label}`, role in `{typography.caption}`
- **Color**: White text on dark; muted gray for secondary attribution details
- **Shape**: Cards use `{rounded.card}`
- **Composition**: Single prominent card centered with adjacent cards partially visible at edges
- **States**: Pagination dots indicate position; active dot in white, inactive in muted gray

### Footer display mark
- **Anatomy**: Massive first-name text with period, adjacent portrait thumbnail
- **Typography**: `{typography.hero-display}`
- **Color**: `{colors.ink}`
- **Composition**: Left-aligned, extending beyond viewport bottom; portrait tucked against baseline right of period
- **Shape**: Portrait uses `{rounded.image}`

## Responsive behavior

The design's generous whitespace and centered compositions suggest natural adaptation to narrower viewports. The two-column about section should stack vertically on tablet and below, with the laptop mockup preceding the text. The scattered hero cards may require reduced rotation angles and tighter overlap to maintain legibility on small screens. The massive footer display mark should scale down proportionally, potentially to `{typography.section-display}` size, to prevent excessive cropping. The testimonial carousel likely becomes a single full-width card with swipe gesture support. Navigation links may collapse to a menu trigger at narrow widths, though no mobile pattern is visible in the supplied material.

## Practical implementation guidance

### Preserve
- The extreme scale contrast between hero-display and body text; this is the site's most distinctive feature
- The mixed sans-serif and italic-serif headline treatment; do not resolve to a single type style
- The warm charcoal (#1A1A1A) rather than pure black for dark sections; it prevents harshness
- The generous section spacing and viewport insets; the site breathes through emptiness
- The rounded corners on all imagery and cards; this consistency unifies disparate content types

### Avoid
- Adding background colors, borders, or shadows to the navigation; it must remain floating and minimal
- Using the accent blue for decorative purposes; reserve it for functional status indicators
- Tightening letterspacing on body sizes; the display tracking is aggressive enough
- Creating additional button variants; the single pill style is sufficient
- Replacing the scattered card composition with a rigid grid; the informality is intentional

### Recommended build order
1. Establish the type system with Inter Display, Inter Display-Italic, and Instrument Serif-Italic loaded at all required weights
2. Implement the color tokens with light canvas as default and dark surface as section modifier
3. Build the navigation with transparent background and flex layout
4. Create the hero section with centered mixed-type headline and positioned card elements
5. Develop the about section with two-column responsive behavior
6. Implement the dark testimonial carousel with quote card and pagination
7. Construct the footer with massive display mark, signature, and metadata

### Accessibility
- Ensure the dark testimonial section meets WCAG AAA contrast for white text on #1A1A1A surface
- Provide visible focus indicators for the pill button and carousel navigation
- Consider reduced-motion preferences for any carousel auto-advance
- Maintain semantic heading hierarchy despite the visual scale jumps
- Ensure the handwritten signature mark is decorative only and not relied upon for identification

## Scope note

This guide covers the visible homepage surface including hero, about, testimonials, and footer sections. Navigation behavior, mobile breakpoints, carousel interaction details, and project case study pages are not represented in the supplied material. Measurements are practical adaptation targets. Verify licensing for these families before production use.
