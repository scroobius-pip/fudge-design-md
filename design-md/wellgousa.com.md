# How wellgousa.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/wellgousa.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with dimmed martial-arts classroom background, oversized white condensed title, and orange movie poster card](https://pin.fontofweb.com/10544?format=jpg)](https://design.withfudge.com/share/pin-10544)

[Hero section with dimmed martial-arts classroom background, oversized white condensed title, and orange movie poster card](https://design.withfudge.com/share/pin-10544)

[![Hero section with boxing-ring background, same title treatment, and persistent orange poster card with fighter imagery](https://pin.fontofweb.com/10543?format=jpg)](https://design.withfudge.com/share/pin-10543)

[Hero section with boxing-ring background, same title treatment, and persistent orange poster card with fighter imagery](https://design.withfudge.com/share/pin-10543)

## Overview

Well Go USA Entertainment's film marketing pages present a theatrical, immersive experience built around full-bleed cinematic imagery and aggressive typography. The system prioritizes visual impact over information density: hero sections dominate the viewport with dimmed production stills serving as atmospheric backdrops, while oversized condensed display type commands immediate attention. The design language speaks directly to action and martial-arts film audiences through high contrast, minimal chrome, and strategic use of vivid warm accent colors in promotional artwork.

The interface maintains a deliberately sparse hierarchy. Navigation recedes to the top edge in small, unobtrusive labels. Content surfaces through photographic storytelling rather than textual density. Call-to-action elements appear as stark geometric forms—pure white rectangular buttons with dark text—creating decisive contrast against the dark canvas. Movie poster cards introduce saturated orange-red energy that punctuates the otherwise monochromatic environment. This restraint in UI elements allows the film imagery and bold typography to function as the primary communicative tools.

## Colors

The color system operates on a near-monochrome dark foundation with selective warm accent injection through promotional imagery. The palette derives from cinematic presentation needs: deep blacks establish theater-like atmosphere, pure white provides maximum legibility for display type, and vivid orange-red appears exclusively within film artwork rather than interface chrome.

| token | value | use |
|---|---|---|
| canvas | #090808 | Primary page background; near-black theatrical base |
| surface | #1C1C1E | Elevated dark panels; subtle differentiation from canvas |
| ink | #FFFFFF | All primary text; display headings; navigation labels; button fills |
| accent | #E4352C | Movie poster backgrounds; promotional card energy; warm photographic highlights |
| muted | #C8C8C5 | Secondary borders; subtle dividers; disabled states |

The canvas color #090808 functions as the dominant environmental tone, appearing across the full viewport behind hero imagery. This extremely dark value absorbs light like a theater interior, allowing overlaid white typography to achieve maximum perceived brightness. The surface token #1C1C1E provides minimal elevation for discrete panels without breaking the dark continuity.

White ink serves triple duty: as filled button backgrounds creating high-contrast CTAs, as display type directly on photographic imagery, and as small UI labels in the navigation bar. The accent color #E4352C never appears as interface chrome but lives within the promotional poster artwork, where its saturated warmth creates visual magnetism against the cool dark environment. Muted #C8C8C5 handles subtle structural needs like hairline borders or inactive states.

## Typography

The type system splits cleanly between two families: Dharma Gothic handles all display and heading roles with its ultra-condensed, high-impact character, while the system sans-serif stack manages body and interface text at small scales. This separation reinforces the cinematic hierarchy—Dharma Gothic dominates visually while system text performs functional duties invisibly.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Dharma Gothic | 11.25rem | 800 | 0.89 | 0em | Hero film titles; maximum viewport impact |
| display-secondary | Dharma Gothic | 6.25rem | 800 | 1 | 0em | Secondary page titles; section headers; transitional breakpoints |
| section-heading | Dharma Gothic | 1.375rem | 700 | 1 | 0.06em | Button labels; small caps-style UI text; poster taglines |
| body | -apple-system | 0.875rem | 400 | 1.3 | 0em | Descriptive paragraphs; secondary content |
| label | -apple-system | 0.6875rem | 600 | 1 | 0em | Navigation items; metadata; fine print |
| legal-copy | -apple-system | 0.75rem | 400 | 1.4 | 0em | Copyright text; terms; auxiliary legal content |

Dharma Gothic at 800 weight and 180px (11.25rem) establishes the hero-display role with exceptionally tight line-height at 0.89, allowing multi-line film titles to stack with minimal vertical separation. The 700 weight at 22px (1.375rem) with 0.06em positive letter-spacing handles section-heading duties, creating a small-caps aesthetic appropriate for button labels and poster taglines like "FIGHT YOUR WAY TO THE TOP." The display-secondary role at 100px (6.25rem) provides a mid-scale display treatment for contexts where the full hero scale would overwhelm, such as interior page headers or transitional viewport sizes.

The system sans-serif stack—specified as -apple-system, System-ui, Segoe UI, Roboto, Arial, Sans-serif—provides body text at 14px (0.875rem) with comfortable 1.3 line-height, label text at 11px (0.6875rem) with 600 weight for navigation clarity, and legal-copy at 12px (0.75rem) with slightly more open 1.4 line-height for extended reading of dense text blocks. Verify licensing for these families before production use.

## Layout

The layout architecture centers on full-bleed hero sections that consume the entire viewport. These immersive containers use background imagery with heavy dark overlay, positioning content elements through absolute spatial relationships rather than conventional grid constraints.

The hero section establishes a three-layer composition: the deepest layer holds full-bleed photographic or video content; a middle layer applies darkening treatment to ensure text legibility; the foreground layer positions typography and interactive elements with generous asymmetric spacing. The main title anchors left-center with substantial left padding, while promotional poster cards occupy the right third of the viewport, creating diagonal visual tension.

Navigation sits as a fixed or absolute header with minimal height, using flex distribution to separate the brand mark (left) from navigation links and search (right). The nav container employs transparent or near-transparent backgrounds, allowing hero imagery to extend fully to the viewport edge without visual interruption.

Content sections below the hero maintain generous vertical breathing room, with section padding at 90px (5.625rem) establishing clear territorial boundaries. Horizontal content padding reaches 160px (10rem) on desktop, creating wide margins that focus attention on central content. The spacing system derives from a 2px base unit, with practical increments at 8px, 10px, 16px, 24px, and 90px serving component and layout needs.

## Visual language

The visual language communicates cinematic spectacle through scale, contrast, and atmospheric depth. Full-bleed imagery establishes immediate immersion—production stills fill the viewport with desaturated, dark-toned photography that suggests motion and drama without competing with overlaid content. A pervasive darkening treatment, likely achieved through multiply or overlay blending, ensures that white typography maintains consistent legibility regardless of image content.

Typography functions as graphic architecture rather than mere information delivery. Dharma Gothic's extreme condensation allows massive scale without horizontal overflow, creating letterforms that approach abstract shapes. The stacked "THE KUNG FU KID" treatment demonstrates this: two lines of uppercase text fill significant vertical space while remaining narrow enough to coexist with imagery.

Promotional poster cards introduce the only saturated color in the interface. These rectangular elements with slight rounding (4px) float above the dark environment, their orange-red backgrounds creating deliberate chromatic tension. The poster composition mirrors the page's own hierarchy—condensed title, supporting imagery, minimal text—establishing visual rhyme between macro and micro scales.

Shadow treatment remains subtle: a soft outer shadow at 0px 4px 20px rgba(0,0,0,0.12) provides gentle elevation for interactive elements, while an inset highlight at 0px 1px 0px rgba(255,255,255,0.1) suggests internal light source on dark surfaces.

## Components

### Hero Section

Anatomy: Full-bleed background media layer; darkening overlay; left-aligned title block; centered play-trailer control; right-floating poster card.

Surface: Background media with canvas-colored overlay at reduced opacity. Title uses ink color directly on treated imagery. Poster card uses accent background with ink typography.

Typography: hero-display for film title; section-heading for poster tagline and trailer label.

Shape: Poster card receives 0.25rem border radius; all other hero elements remain sharp-edged.

Spacing: Title positioned with substantial left margin (approximately 10rem) and vertical centering. Poster card offset from right edge with comparable margin. Trailer control centered horizontally, positioned between title and poster vertically.

Composition: Asymmetric two-column arrangement with title dominating left 50% and poster occupying right 30%. Background imagery visible in gaps between elements.

### Primary Action Button

Anatomy: Rectangular container with text label; no icon in primary variant.

Surface: Solid ink background with canvas text color. No border. No visible shadow in default state.

Typography: section-heading token at 700 weight, creating bold condensed label.

Shape: Full pill radius at 9999px, though visible implementation shows sharp rectangle—verify intended treatment. Minimum padding approximately 1.5rem horizontal, 0.625rem vertical.

Spacing: Positioned directly below hero title with moderate top margin (approximately 1.25rem).

### Top Navigation

Anatomy: Brand mark (Well Go USA Entertainment logo) left; navigation links center-right; search icon far right.

Surface: Transparent background. Ink color for all elements.

Typography: label token for navigation items. Dharma Gothic for brand wordmark portion.

Spacing: Horizontal padding matching content margins. Vertical padding minimal (approximately 0.625rem). Links separated by gap of approximately 2rem.

Composition: Flex row with space-between alignment for brand and link groups. Individual links grouped with moderate gap.

### Play Trailer Control

Anatomy: Circular play icon button adjacent to text label; right-pointing arrow indicator.

Surface: Transparent background. Ink color for all elements. Circular icon container may have subtle border.

Typography: section-heading for "PLAY TRAILER" label.

Shape: Circular icon at approximately 3rem diameter. Label text with arrow inline.

Spacing: Icon and label separated by small gap (approximately 0.5rem). Entire control centered horizontally in available space between title and poster.

### Movie Poster Card

Anatomy: Rectangular container; tagline header; large title; character imagery.

Surface: Solid accent background (#E4352C). Ink typography. Photographic content with transparent or blended edges.

Typography: section-heading for tagline with positive letter-spacing; larger condensed display for title.

Shape: 0.25rem border radius on container.

Spacing: Internal padding approximately 1.5rem top, with imagery bleeding to edges. Content inset from sides.

## Responsive behavior

The desktop layout prioritizes the asymmetric hero composition with side-by-side title and poster arrangement. At narrower viewports, this relationship should invert to stacked vertical flow: title remains prominent with reduced scale, poster card shifts below or above depending on content priority, and trailer control recenters within the new vertical rhythm.

Typography scaling requires careful handling. The 11.25rem hero display must reduce dramatically—potentially to 4rem or 6rem at tablet widths—to prevent horizontal overflow while maintaining impact. Dharma Gothic's condensed proportions help here, allowing larger relative sizes than standard-width faces. The display-secondary token at 6.25rem serves as the practical anchor for this transitional scale.

Navigation should collapse to a minimal menu trigger at mobile breakpoints, preserving the clean header aesthetic while accommodating touch targets. The current sparse link count (Films, Hi-YAH!, About Us, Search) suggests a simple dropdown or sheet presentation rather than complex nested navigation.

Poster card dimensions should maintain aspect ratio while scaling to fit available width, preventing the promotional artwork from becoming illegibly small. Full-bleed backgrounds require continued darkening treatment at all sizes to ensure text contrast compliance.

## Practical implementation guidance

### Preserve
- The extreme contrast between dark canvas and white ink; this theatrical pairing defines the brand atmosphere
- Dharma Gothic's scale and weight hierarchy; the 800-weight display treatment is irreplaceable for cinematic impact
- Full-bleed imagery with darkening overlay; never place white text directly on unmodified photography
- Asymmetric hero composition with generous negative space; resist centering all elements
- The orange-red accent restricted to promotional artwork; do not extend to UI chrome

### Avoid
- Adding background colors or borders to navigation; the transparent treatment maintains immersion
- Introducing additional font families; the two-family system achieves clear functional separation
- Centering hero titles; the left anchoring creates dynamic tension with right-floating posters
- Using accent color for buttons or links; white-on-dark and dark-on-white provide sufficient CTA contrast
- Dense information layouts below the hero; maintain sparse section spacing and visual breathing room

### Recommended Build Order
1. Establish canvas background and full-bleed hero container with object-fit cover imagery
2. Implement darkening overlay layer with multiply or gradient treatment
3. Add Dharma Gothic at hero-display scale with left positioning and viewport-relative margins
4. Position poster card with accent background and internal content hierarchy
5. Build transparent navigation with flex layout and minimal vertical footprint
6. Add primary CTA button with ink background and condensed label typography
7. Implement play trailer control with circular icon and inline label
8. Establish content section spacing and responsive scaling rules

### Accessibility
- Ensure darkening overlay achieves minimum 4.5:1 contrast ratio for all white text placements
- Provide pause/stop controls for any autoplay video backgrounds
- Add descriptive alt text to poster imagery and hero backgrounds
- Maintain touch target minimums of 44px for navigation and trailer controls
- Consider reduced-motion preferences for any cinematic transitions or video elements

## Scope note

This guide covers the desktop film landing page hero experience as visible in the supplied captures. Measurements are practical adaptation targets. Footer content, interior page layouts, mobile breakpoints, form interactions, and checkout flows are not represented. Motion behavior including video autoplay, hover states, and scroll-triggered animations require additional specification. Verify licensing for Dharma Gothic and system font families before production use.
