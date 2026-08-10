# How fontradar.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fontradar.com-design)

Last updated: 2026-08-10

## Captured pages

[![Feature grid section with eight capability cards showing iconography, bold headings, and body text in cyan on black background](https://pin.fontofweb.com/5328?format=jpg)](https://design.withfudge.com/share/pin-5328)

[Feature grid section with eight capability cards showing iconography, bold headings, and body text in cyan on black background](https://design.withfudge.com/share/pin-5328)

[![Hero section with massive stacked headline FIND & CORRECT LICENSE VIOLATIONS OF YOUR FONTS in bold cyan type on black background](https://pin.fontofweb.com/5327?format=jpg)](https://design.withfudge.com/share/pin-5327)

[Hero section with massive stacked headline FIND & CORRECT LICENSE VIOLATIONS OF YOUR FONTS in bold cyan type on black background](https://design.withfudge.com/share/pin-5327)

## Overview

Font Radar presents itself as a bold, uncompromising dark-mode experience built for type foundries seeking to protect their intellectual property. The visual system strips away ornament in favor of extreme contrast: an unbroken black canvas supports massive, tightly packed headlines in electric cyan. The design communicates technical authority through scale and restraint rather than decorative complexity. Every element serves the central narrative of detection and enforcement, from the radar-inspired wordmark to the grid of capability cards that enumerate the service's forensic features. The overall impression is that of a precision instrument—clinical, confident, and immediately legible against the void.

## Colors

The color system is deliberately minimal, operating on a binary of absolute black and vivid cyan with calibrated intermediates for hierarchy.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary background for all sections; uninterrupted black field |
| ink | #00E5C9 | Primary text, headlines, icons, and interactive emphasis |
| ink-muted | #00B8A3 | Secondary body text and supporting descriptions |
| surface-raised | #0A0A0A | Subtle elevation for contained elements if needed |
| border-subtle | #1A1A1A | Hairline dividers or ghost boundaries |

The palette derives its power from restriction. Black dominates every surface, creating a sense of infinite depth that makes the cyan typography appear to emit light. The ink color functions simultaneously as brand identifier, functional text, and emotional signal—suggesting both digital precision and alert urgency. No warm tones intrude; the cool cast of the cyan reinforces the technical, forensic character of the service. Muted ink appears only where information density requires differentiation without competing with primary headlines. The absence of gradients, shadows, or photographic backgrounds keeps attention locked on typographic content. When photography or illustration appears, it would need to respect this cool, high-contrast regime or risk visual fracture.

## Typography

A single type family carries the entire typographic load, deployed across a dramatic range of scales and weights.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Antarctica Beta | 8rem | 700 | 0.9 | -0.03em | Homepage hero headlines, maximum impact statements |
| section-display | Antarctica Beta | 2rem | 700 | 1.1 | -0.02em | Feature card headings, section titles |
| body | Antarctica Beta | 1.25rem | 400 | 1.5 | 0 | Introductory paragraphs, prominent descriptions |
| body-small | Antarctica Beta | 1rem | 400 | 1.5 | 0 | Feature card descriptions, dense explanatory text |
| label | Antarctica Beta | 0.875rem | 500 | 1.2 | 0.02em | Button text, tags, metadata |
| navigation | Antarctica Beta | 1rem | 500 | 1 | 0 | Header links, menu items |

Antarctica Beta provides the sole typeface across all roles, available in Light, Regular, Bold, and Black weights. The design exploits the family's geometric clarity and generous x-height, pushing the Bold and Black weights to their extreme at display sizes. Hero headlines operate at a scale where individual letters become architectural elements, with tight leading that stacks lines into solid blocks of color. Negative tracking at display sizes prevents the open counters of large type from loosening the composition. Body text returns to more conventional proportions, though even small sizes retain the family's distinctive character. The weight contrast between 400 and 700 creates sufficient hierarchy without introducing additional families. Verify licensing for these families before production use.

## Layout

The layout philosophy centers on generous margins and asymmetric concentration of mass. The hero section occupies the full viewport width, with content anchored to the left and substantial empty space to the right. This off-center loading creates tension and directs reading in a single direction. The feature grid below adopts a four-column structure on desktop, with each card occupying equal width and consistent internal spacing.

Content max-width appears to sit around 1200px, centered within the viewport but with left-aligned text blocks that respect a consistent inset from the browser edge. Section spacing is pronounced—roughly 8rem separates major content blocks, allowing the black canvas to breathe between dense information clusters. The feature grid uses a gap of approximately 3rem between cards, with each card containing an icon, heading, and description stacked vertically with 1rem to 1.5rem separating these elements.

Vertical rhythm follows a strict modular logic based on a 0.25rem unit. All measurements resolve to whole multiples of this base, ensuring that even at extreme scales the composition maintains mathematical coherence. The header bar floats at the top with minimal height, containing the wordmark left and navigation right, establishing the lateral axis that governs all subsequent content.

## Visual language

The visual language trades on surveillance and detection metaphors rendered in abstract, minimal form. The wordmark pairs a radar-wave icon with the name, suggesting continuous scanning without literal illustration. Line icons throughout the feature grid maintain a consistent stroke weight and geometric abstraction—no filled shapes, no gradients, no decorative flourishes. These icons function as wayfinding markers rather than explanatory graphics, their cyan lines echoing the headline color at reduced scale.

Imagery is entirely absent from the visible surface; the design relies on type as image, with the massive hero headline becoming the primary visual event. The black ground reads as absence or night—appropriate to the theme of hidden violations brought to light. There is no texture, no noise, no depth simulation beyond the inherent contrast of figure and ground. The overall effect is that of a terminal interface scaled to architectural proportions: information-dense yet austere, urgent yet controlled.

The absence of curves in the layout (except for button radii) reinforces the technical precision. Cards do not float with shadows; they sit flush against the black field, their boundaries defined only by the negative space between them. This flatness suggests a database or dashboard aesthetic translated to marketing purposes.

## Components

**Primary button**
- Anatomy: Text label with optional leading icon, contained within a rounded rectangle
- Surface: Cyan background with black text, inverting the dominant page polarity
- Typography: label token, medium weight, slightly positive tracking for clarity at small size
- Shape: 0.5rem border radius, creating a pill-like but not fully circular terminus
- Spacing: 0.75rem vertical padding, 1.5rem horizontal padding
- Composition: Positioned in header alongside navigation links, or potentially as section CTAs

**Feature card**
- Anatomy: Stacked vertical arrangement of line icon, bold heading, and body description
- Surface: Transparent against black canvas, no background elevation
- Typography: section-display for heading in bold cyan, body-small for description in muted cyan
- Shape: No border radius, no border, no shadow
- Spacing: Icon sits 1.5rem above heading, heading 1rem above description; card padding is zero, relying on grid gap
- Composition: Four cards per row in desktop grid, equal width, top-aligned within row

**Hero headline**
- Anatomy: Stacked lines of ultra-large text, left-aligned, breaking at phrase boundaries
- Surface: Transparent, cyan text on black
- Typography: hero-display token, black weight, extreme negative tracking
- Shape: Text block only, no containing element
- Spacing: Line height at 0.9 creates overlapping vertical proximity; generous left margin aligns with content grid
- Composition: Occupies upper-left quadrant of viewport, leaving majority of frame as negative space

**Header bar**
- Anatomy: Wordmark group left, navigation links center-right, login button far right
- Surface: Transparent or near-black, blending with canvas
- Typography: navigation token for links, label token for button
- Shape: Full-width bar, minimal height
- Spacing: Horizontal padding consistent with content grid; vertical padding approximately 1.5rem

## Responsive behavior

The design's high-contrast simplicity suggests natural adaptation paths. The hero headline, already broken across multiple lines, should reflow to maintain legibility as viewport narrows—scale reduction will be necessary to prevent horizontal overflow. The four-column feature grid should collapse to two columns at tablet widths and single column on mobile, maintaining card internal spacing while increasing grid gaps to preserve rhythm.

Navigation links in the header may consolidate to a menu trigger below desktop widths, though the minimal link count (Product, Team, Login) could permit horizontal persistence on tablet. The login button should remain accessible and tappable at minimum 44px height on touch devices.

Typography scaling should maintain the dramatic weight contrast between display and body roles even at reduced sizes. The hero headline may drop from 8rem to 4rem on tablet and 2.5rem on mobile, preserving the stacked composition but ensuring words remain intact without mid-word breaks.

## Practical implementation guidance

**Preserve**
- The absolute black canvas; any lightening weakens the brand's forensic authority
- The single-family typographic system; introducing secondary faces fractures the unified voice
- The extreme scale contrast between hero and body; this hierarchy is the primary navigation aid
- The left-aligned, off-center composition; centering the hero would dissipate its asymmetric tension

**Avoid**
- Adding background images, textures, or gradients behind text; the flat black field is essential
- Using filled icons or multi-color illustrations; the line-icon vocabulary is tightly constrained
- Introducing warm accent colors; the cool cyan palette is integral to the technical positioning
- Rounding card containers; the sharp rectangular geometry maintains the terminal aesthetic

**Recommended build order**
1. Establish the black canvas and load Antarctica Beta with complete weight range
2. Implement the hero headline at maximum scale, verifying line breaks and overflow behavior
3. Build the header with wordmark, navigation, and login button
4. Construct the feature grid with icon system, testing responsive collapse
5. Fine-tune spacing scale across all sections, ensuring modular rhythm

**Accessibility**
- The cyan-on-black pairing exceeds WCAG AA for large text but should be verified at body-small sizes; consider lightening muted ink if contrast falls below 4.5:1
- The massive hero text benefits low-vision users but may trigger motion sensitivity if animated; respect prefers-reduced-motion
- Ensure focus indicators are visible against black; a 2px cyan outline or inverted fill maintains brand coherence
- Icon-only elements should carry aria-labels; the abstract line style may not communicate function universally

## Scope note

This guide covers the homepage hero and feature-grid surfaces visible in the supplied images. Footer content, interior pages, pricing tables, and any interactive dashboard or account interfaces are not represented. Motion behavior, hover states, and mobile-specific layouts are not documented. Measurements are practical adaptation targets derived from visual inspection against a 4px modular grid.
