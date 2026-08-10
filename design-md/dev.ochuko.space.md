# How dev.ochuko.space is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dev.ochuko.space-design)

Last updated: 2026-08-10

## Captured pages

[![Dark contact footer with oversized split headline 'LET'S BUILD' and 'TOGETHER', email link, social links, and decorative barcode glyph cluster](https://pin.fontofweb.com/378?format=jpg)](https://design.withfudge.com/share/pin-378)

[Dark contact footer with oversized split headline 'LET'S BUILD' and 'TOGETHER', email link, social links, and decorative barcode glyph cluster](https://design.withfudge.com/share/pin-378)

[![Full viewport contact section showing massive display typography, orange arrow indicator, and bottom social link row with external-link arrows](https://pin.fontofweb.com/377?format=jpg)](https://design.withfudge.com/share/pin-377)

[Full viewport contact section showing massive display typography, orange arrow indicator, and bottom social link row with external-link arrows](https://design.withfudge.com/share/pin-377)

[![Blog listing section with 'LATEST FROM BLOG' display heading, category tags in mono, and article titles with dates aligned to edges](https://pin.fontofweb.com/376?format=jpg)](https://design.withfudge.com/share/pin-376)

[Blog listing section with 'LATEST FROM BLOG' display heading, category tags in mono, and article titles with dates aligned to edges](https://design.withfudge.com/share/pin-376)

[![Diagonal skills marquee with orange text on white band and black text on warm gray band, showing continuous scrolling technology terms](https://pin.fontofweb.com/375?format=jpg)](https://design.withfudge.com/share/pin-375)

[Diagonal skills marquee with orange text on white band and black text on warm gray band, showing continuous scrolling technology terms](https://design.withfudge.com/share/pin-375)

## Overview

This design system captures a dark, editorial portfolio aesthetic built around extreme scale and confident restraint. The visual language centers on near-black backgrounds that let oversized display typography dominate the viewport. Warm off-white text avoids the clinical chill of pure white, creating a sophisticated, paper-like warmth against the deep canvas. A vivid orange accent appears sparingly—on directional arrows, interactive highlights, and the skills marquee—providing energy without disrupting the monochrome calm.

The system serves a personal portfolio with distinct zones: a dramatic contact section with split headlines, a blog listing with editorial hierarchy, and an animated skills marquee with diagonal motion. The design prioritizes typographic presence over decorative elements. Every component reinforces the editorial character through generous whitespace, precise alignment, and a strict two-family type hierarchy that pairs a bold display face with a neutral monospaced companion.

## Colors

The palette is intentionally narrow, deriving its sophistication from temperature and proportion rather than variety. The near-black canvas and warm off-white ink create a high-contrast foundation that feels premium rather than stark. Orange appears as a functional accent for interactive states and motion elements.

| token | value | use |
|---|---|---|
| canvas | #111111 | Primary page background, deep surface behind all content |
| surface | #1a1a1a | Elevated cards, hover states, subtle layering |
| ink | #e8e4dc | Primary text, headlines, body copy, links |
| muted-ink | #a09a90 | Secondary labels, category tags, timestamps, captions |
| action | #f26522 | Accent arrows, interactive highlights, marquee emphasis |
| action-hover | #ff7a3d | Brighter orange for hover and focus states |
| border | #2a2a2a | Subtle dividers, card separators, hairline rules |
| warm-gray | #c4bdb2 | Marquee band background, secondary surface moments |

The dark mode is the native and only visible mode in the supplied images. There is no light-mode variant present. The warm-gray tone serves as a photographic or secondary surface color in the skills marquee, where it contrasts with a pure white band carrying the orange accent text. The orange action color is reserved for moments of motion and interaction: the downward arrow in the contact section, the scrolling technology terms, and implied hover states.

## Typography

Two families drive the entire system: Almarena Display for all editorial and display settings, and IBM Plex Mono for functional, navigational, and metadata text. This pairing creates a deliberate tension between expressive scale and technical precision.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Almarena-Display Regular | 8rem | 400 | 0.9 | -0.03em | Contact section split headlines, maximum impact moments |
| section-display | Almarena-Display Regular | 6rem | 400 | 0.95 | -0.02em | Section headings like "LATEST FROM BLOG" |
| body-large | Almarena-Display Regular | 2rem | 400 | 1.2 | -0.01em | Article titles, email link, marquee terms |
| body | Ibm Plex Mono | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions |
| label | Ibm Plex Mono | 0.75rem | 400 | 1.4 | 0.02em | Category tags, timestamps, small metadata |
| navigation | Ibm Plex Mono | 0.875rem | 400 | 1.3 | 0.01em | Social links, nav items, footer elements |

Almarena Display, designed by Jérémie Gauthier, carries the visual identity with its bold, geometric character and tight negative spacing. IBM Plex Mono, designed by Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen, and distributed by Bold Monday, provides the technical counterpoint for all functional text. Verify licensing for these families before production use.

The type scale is built on a 4px relative unit. Display sizes push to 128px (8rem) and 96px (6rem) for viewport-filling headlines. Body and functional sizes stay in the 12px–16px range for readability. Line heights are tight for display (0.9–0.95) and generous for body (1.3–1.5). Letter spacing is negative for display to create density, neutral to slightly positive for mono text to maintain legibility at small sizes.

## Layout

The layout system is built on editorial principles: full-bleed sections, asymmetric compositions, and precise edge alignment. Sections stack vertically with substantial breathing room between them. The contact section fills the viewport with a split headline arrangement—"LET'S BUILD" anchored left, "TOGETHER" pushed right—creating diagonal tension through text placement alone.

Horizontal padding is generous, approximately 4rem to 6rem on desktop, with content rarely touching viewport edges. Vertical section spacing uses 8rem (32 units) as the standard rhythm, creating dramatic pauses between content zones. Internal component spacing is tighter at 0.5rem to 2rem.

The blog listing uses a two-column implicit grid: category tags and titles align left, dates align right. A hairline border separates entries. The skills marquee breaks the rectangular grid with a diagonal band that cuts across the viewport, suggesting motion and technical energy.

Alignment is predominantly left-aligned for text, with strategic right-alignment for metadata. The social links in the footer sit at the bottom-right, balancing the barcode glyph cluster and copyright at bottom-left. This corner-to-corner composition creates visual stability without symmetry.

## Visual language

The visual character is dark, confident, and editorially restrained. Decorative elements are minimal but distinctive: a small orange downward arrow suggests scroll or contact action; a cluster of barcode-like vertical strokes and geometric glyphs in the footer acts as a signature mark; external-link arrows accompany social text.

Photography and imagery are absent from the visible interface—this is a typographic portfolio where the letterforms themselves become the visual content. The warm off-white ink color prevents the harshness of pure white on black, lending a gallery-like sophistication.

Motion is implied through the diagonal marquee band, which suggests continuous horizontal scrolling. The orange accent color is the only saturated hue, making it function as a directional signal rather than decoration. Rounded corners are nearly absent; the aesthetic favors sharp edges and clean cuts.

The skills marquee introduces a rare light moment: a white diagonal band with orange text crosses the dark canvas, while a parallel warm-gray band carries black text. This creates a ribbon-like dimensional effect that breaks the flat darkness without abandoning the system's restraint.

## Components

### Contact Section

- **Anatomy**: Full-viewport section with split headline, orange directional arrow, email link with underline, and footer bar with glyph cluster, copyright, and social links.
- **Surface and text color**: Canvas background, ink text throughout.
- **Typography**: Hero-display for headlines, body-large for email, navigation for social links, label for "Click to copy" hint.
- **Shape**: No border radius; full-bleed rectangle.
- **Spacing**: Headlines positioned with substantial vertical space between them; email link sits below with comfortable margin; footer bar anchored to bottom edge with internal spacing of approximately 2rem.
- **Composition**: Asymmetric split—left headline upper-left, right headline upper-right, creating diagonal reading path. Footer spans full width with elements at opposite corners.
- **Variants**: None visible.

### Blog Listing

- **Anatomy**: Section heading followed by stacked article entries. Each entry has category tags, title, and date.
- **Surface and text color**: Transparent over canvas; ink for titles, muted-ink for tags and dates.
- **Typography**: Section-display for heading, label for category tags, body-large for titles, label for dates.
- **Shape**: Hairline top border on each entry; no card containers.
- **Spacing**: Section heading with large bottom margin; entries separated by borders with internal padding of approximately 2rem vertical.
- **Composition**: Tags and title left-aligned, date right-aligned. Full-width entries.
- **Variants**: None visible.

### Skills Marquee

- **Anatomy**: Diagonal band containing scrolling technology terms. Two parallel bands—one white with orange text, one warm-gray with black text.
- **Surface and text color**: White and warm-gray bands; orange and black text respectively.
- **Typography**: Body-large for terms, label for "SKILLS" section marker.
- **Shape**: Diagonal clip or rotation cutting across viewport; no border radius.
- **Spacing**: Terms separated by consistent horizontal gaps; band height approximately 4rem.
- **Composition**: Full-width, edge-to-edge; diagonal angle approximately 8–12 degrees.
- **Variants**: None visible.

### Social Link

- **Anatomy**: Text label with external-link arrow icon.
- **Surface and text color**: Transparent; ink text.
- **Typography**: Navigation token.
- **Shape**: No background; text only.
- **Spacing**: Horizontal gap between links approximately 2rem.
- **Composition**: Inline row, right-aligned in footer context.
- **Variants**: None visible.

## Responsive behavior

The system is documented from desktop viewport widths. At narrower widths, the split headline composition should stack vertically, with "LET'S BUILD" and "TOGETHER" becoming sequential rather than separated. The hero-display size should reduce to section-display or smaller to maintain fit.

The skills marquee diagonal angle may flatten or convert to horizontal scrolling on mobile to preserve readability. Blog listing dates should move below titles on narrow screens, abandoning the two-column alignment.

Touch targets for social links and email should maintain minimum 44px height. The "Click to copy" functionality should provide clear feedback on tap.

## Practical implementation guidance

### Preserve
- The warm off-white ink against near-black canvas—this temperature relationship is central to the premium feel.
- The extreme display scale; headlines should remain viewport-dominating even if reduced proportionally.
- The two-family type hierarchy; do not introduce additional families.
- The minimal accent strategy; orange should remain the only saturated color.
- The diagonal marquee as a distinctive motion element.

### Avoid
- Pure white text; it destroys the warm editorial character.
- Rounded corners on cards or buttons; the system favors sharp geometry.
- Background images or gradients behind text; the flat canvas is essential.
- Multiple accent colors; the orange monopoly is intentional.
- Centered text alignment; left-alignment drives the editorial rhythm.

### Recommended Build Order
1. Establish the canvas and ink colors as CSS custom properties.
2. Implement the type hierarchy with both font families at all six defined sizes.
3. Build the contact section with split headline composition and footer bar.
4. Create the blog listing with border-separated entries and two-column alignment.
5. Implement the skills marquee with diagonal clipping and continuous scroll animation.
6. Add interactive states: email copy feedback, link hover colors, arrow animations.

### Accessibility
- Ensure the orange action color meets minimum contrast ratios against both dark and light backgrounds; it may need darkening for small text.
- Provide visible focus indicators that respect the sharp aesthetic, such as outline offsets in ink color.
- The "Click to copy" hint should be associated with the email link via aria-describedby.
- Marquee motion should respect prefers-reduced-motion, pausing or simplifying to static display.
- All social links should have accessible labels indicating they open externally.

## Scope note

This guide covers the visible desktop landing page, contact section, blog listing, and skills marquee. Mobile breakpoints, additional interior pages, form validation states, loading sequences, and detailed animation timing are not included. Measurements are practical adaptation targets derived from visual inspection of the supplied images.
