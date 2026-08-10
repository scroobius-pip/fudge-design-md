# How maximeheckel.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/maximeheckel.com-design)

Last updated: 2026-08-10

## Captured pages

[![Inspiration section with scattered image cards on dark grid background, featuring serif heading and sans-serif body text with floating tag labels](https://pin.fontofweb.com/4378?format=jpg)](https://design.withfudge.com/share/pin-4378)

[Inspiration section with scattered image cards on dark grid background, featuring serif heading and sans-serif body text with floating tag labels](https://design.withfudge.com/share/pin-4378)

[![Tango project showcase with italic serif heading, dark cards with subtle borders, and gradient product thumbnails with external link icons](https://pin.fontofweb.com/4376?format=jpg)](https://design.withfudge.com/share/pin-4376)

[Tango project showcase with italic serif heading, dark cards with subtle borders, and gradient product thumbnails with external link icons](https://design.withfudge.com/share/pin-4376)

[![Docker Enterprise case study with gradient blue-yellow backdrop, overlapping application screenshots, and serif-sans type pairing](https://pin.fontofweb.com/4375?format=jpg)](https://design.withfudge.com/share/pin-4375)

[Docker Enterprise case study with gradient blue-yellow backdrop, overlapping application screenshots, and serif-sans type pairing](https://design.withfudge.com/share/pin-4375)

[![Contact section with large italic serif heading, muted blue-gray body text, and email link on near-black background](https://pin.fontofweb.com/4374?format=jpg)](https://design.withfudge.com/share/pin-4374)

[Contact section with large italic serif heading, muted blue-gray body text, and email link on near-black background](https://design.withfudge.com/share/pin-4374)

## Overview

This design system describes a dark, editorial portfolio website with a strong typographic personality. The visual language centers on dramatic contrast: near-black backgrounds allow gradient-rich project imagery and warm photographic content to command attention. The type system pairs an elegant italic serif for display and emotional emphasis with a neutral sans-serif for all functional and body text. The overall impression is of a curated creative archive—spacious, confident, and intentionally restrained in its UI chrome. Content sections alternate between immersive media showcases and quieter text-forward passages, with the dark canvas providing continuity throughout. The design avoids heavy containers and borders, preferring subtle hairlines and generous negative space to separate elements.

## Colors

The palette is fundamentally dark-mode, built on a near-black foundation with carefully modulated text tones and occasional cool accents in imagery and interactive elements.

| token | value | use |
|---|---|---|
| canvas | #070707 | Primary page background; deepest dark |
| surface | #0a0a0a | Card backgrounds, elevated panels |
| ink | #e8e8e8 | Primary headings, emphasized text |
| muted-ink | #8a8a8a | Body copy, secondary descriptions, captions |
| accent-blue | #4a9eff | Links, interactive highlights, gradient elements in media |
| accent-cyan | #5ce1e6 | Secondary accent in gradient imagery, subtle highlights |
| border-subtle | #1f1f1f | Card borders, dividers, hairline separators |
| border-medium | #2a2a2a | Hover states, slightly more present borders |

The color logic follows a subtractive hierarchy: the canvas absorbs light, surface elements rise slightly above it, and text progresses from bright ink for emotional display to muted ink for informational reading. Accent colors appear primarily within project imagery and gradient backdrops rather than as dominant UI chrome. The border tokens are intentionally dark-on-dark, creating separation through luminance shifts rather than stark contrast. Photographic and gradient content introduces warmer oranges, yellows, and blues that punctuate the restrained base palette.

## Typography

The type system combines four families into distinct roles: Instrument Serif for display and editorial voice, Instrument Serif-Italic for emphasized display moments, Inter for all functional and body text, and I A Writer Quattro V for monospaced or code contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Serif | 3rem | 400 | 1.1 | -0.01em | Page titles, major section openings |
| section-display | Instrument Serif | 2.25rem | 400 | 1.15 | -0.01em | Section headings, project titles |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Captions, metadata, card labels |
| label | Inter | 0.75rem | 500 | 1.4 | 0.02em | Tags, badges, UI labels |
| navigation | Inter | 0.875rem | 400 | 1.5 | 0 | Navigation links, menu items |
| code | I A Writer Quattro V | 0.875rem | 400 | 1.6 | 0 | Code snippets, technical annotations |

Instrument Serif appears in both upright and italic forms, with Instrument Serif-Italic carrying emotional weight and editorial flair for emphasized words within headings and the most expressive display moments. Inter provides neutral, highly legible text at all sizes, with Medium weight reserved for labels that need slight emphasis. I A Writer Quattro V, designed by Mike Abbink, Paul Van Der Laan, Pieter Van Rosmalen, and Oliver Reichenstein for Information Architects Inc, serves technical or monospaced contexts. Instrument Serif and Instrument Serif-Italic were designed by Rodrigo Fuenzalida for Frag Type. Inter was designed by Rasmus Andersson. Verify licensing for these families before production use.

## Layout

The layout follows a centered, single-column content flow with generous vertical breathing room. Sections are separated by substantial whitespace, creating a scroll-driven narrative pace. Content max-width appears constrained to a comfortable reading measure, approximately 65-75 characters for body text, with wider treatment for media showcases.

The grid behavior shifts between text-forward and media-dominant modes. Text sections employ asymmetric two-column arrangements: a larger left column for display headings, a narrower right column for body copy. Media sections expand to near-full-width, with cards arranged in overlapping, scattered, or grid formations depending on content type.

Spacing follows a base-0.25rem system. Section vertical padding uses 8rem to create dramatic pauses between content areas. Content gaps within sections use 2rem. Card internal padding uses 1.5rem. These values create a clear hierarchy of proximity: tight within components, moderate within sections, expansive between sections.

The visual rhythm alternates between density and openness. Dense clusters of project cards or inspiration imagery give way to sparse text passages, with the dark canvas unifying both extremes. No persistent sidebar or navigation chrome intrudes on the content; the page reads as a continuous scroll.

## Visual language

The visual character is editorial and gallery-like, treating the portfolio as a curated exhibition rather than a conventional resume. Darkness is used as a framing device—content emerges from black like lit objects in a dim room.

Imagery receives premium treatment. Project screenshots float against gradient backdrops that suggest depth and atmosphere. Thumbnails use rounded corners at 0.5rem, while larger cards use 0.75rem. External links are marked with circular arrow badges, a consistent micro-pattern that signals outbound navigation without verbose labels.

The scattered inspiration grid in one section demonstrates a more playful composition mode: cards overlap, rotate slightly, and carry floating tag labels with backdrop blur. This breaks the otherwise orderly vertical flow with controlled chaos, suggesting creative process rather than finished product.

Gradients appear in project imagery as environmental backdrops—warm yellow-to-blue transitions, cool cyan fades—never as UI elements themselves. This keeps the interface timeless while allowing content to feel contemporary and vibrant.

Typography carries significant expressive load. The italic serif's flowing forms contrast with the geometric sans-serif's neutrality, creating tension between personality and function. Display text often runs large, approaching the edges of comfortable reading size, which reinforces the gallery-like scale.

## Components

### Project Card

Project cards present work samples with minimal framing. Each card sits on the surface color with a 1px border-subtle border and 0.75rem radius. Internal padding is 1.5rem. Cards contain a media thumbnail at top, a title in body-small typography, and a date range or metadata label. The thumbnail uses 0.5rem radius and overflow hidden. An external-link badge—a small circle with an arrow icon—floats at the card's upper right corner, using the canvas background for contrast against both card and thumbnail.

### Media Thumbnail

Media thumbnails are the primary visual carriers. They use 0.5rem border radius and fill their container width. Aspect ratios vary by content: wider for interface screenshots, squarish for application icons. Thumbnails often sit against gradient backdrops that extend beyond the image bounds, creating atmospheric depth. The gradient is part of the thumbnail asset, not a CSS overlay.

### Tag Label

Tag labels appear as floating pills over imagery in the inspiration section. They use a semi-transparent canvas background with backdrop blur, 9999px border radius for full pill shape, and label typography in ink color. Each label includes a small icon or dot prefix and an arrow suffix, indicating link behavior. Labels avoid solid backgrounds, preferring the glassmorphic treatment to remain legible over varied imagery.

### Section Heading

Section headings use section-display typography in ink color. They often appear left-aligned in a two-column layout, with body text in the right column. The italic variant of Instrument Serif appears for emphasized words within headings, creating rhythmic variation in the display text.

### External Link Badge

A small circular indicator, approximately 2rem diameter, with canvas background, border-subtle border, and an arrow icon in muted-ink. Positioned absolutely at a card's corner. Signals that the card or thumbnail links outward.

### Body Text Block

Body copy uses body typography in muted-ink color. Line length is constrained for readability. Paragraphs within a block use standard flow spacing with no additional inter-paragraph margin beyond the line height.

## Responsive behavior

The two-column text layout should stack to single column on narrower viewports, with display headings above body copy. Media grids should reduce from multiple columns to a single scrolling column, maintaining card proportions. The scattered inspiration grid should simplify to a vertical stack or two-column grid, removing overlaps and rotations that rely on horizontal space.

Section padding should compress from 8rem to 4rem on smaller screens to maintain relative density. Card padding should remain at 1.5rem to preserve touch targets and readability. Display type should scale down proportionally, with hero-display reducing to approximately 2rem and section-display to 1.5rem.

Navigation, if present in a header, should collapse to a hamburger menu or simplify to essential links. The external-link badges should remain tappable at their current size or expand slightly for touch.

## Practical implementation guidance

### Preserve
- The dark canvas as the dominant background; never introduce light sections that would break the gallery-like atmosphere
- The serif-sans type pairing; the contrast between Instrument Serif's elegance and Inter's neutrality is central to the identity
- Generous section spacing; the vertical rhythm depends on dramatic pauses
- Gradient-rich project imagery; these provide the primary color and warmth in the experience
- Subtle borders; the 1px dark hairlines create just enough separation without visual weight

### Avoid
- Heavy drop shadows or elevation effects; the flat, dark treatment is intentional
- Bright accent colors as UI chrome; keep accents within imagery and links only
- Rigid grid alignments for all content; the scattered inspiration section demonstrates valuable compositional variety
- Light mode variants without complete palette rethinking; the system is built for darkness
- Borders stronger than 1px or lighter than border-medium; these would introduce unwanted visual noise

### Recommended Build Order
1. Establish the dark canvas and surface colors as CSS custom properties
2. Implement the type system with Instrument Serif, Instrument Serif-Italic, and Inter loaded
3. Build the section spacing and max-width constraints
4. Create the project card component with border, radius, and padding
5. Add media thumbnails with gradient backdrops
6. Implement tag labels with backdrop blur
7. Add external-link badges
8. Polish with micro-interactions and responsive stacking

### Accessibility
- Ensure body text in muted-ink maintains at least 4.5:1 contrast against canvas; the current #8a8a8a on #070707 may need verification
- Provide visible focus indicators for keyboard navigation; the minimal UI chrome risks invisible focus states
- Use semantic heading hierarchy despite the visual similarity between hero and section display sizes
- Ensure external link badges have accessible labels or are associated with descriptive link text
- Consider reduced-motion preferences for any scroll-triggered animations

## Scope note

This guide covers the homepage and primary portfolio sections visible in the supplied images. Interior pages, article templates, motion design, hover states, and mobile-specific layouts are not represented. Measurements are practical adaptation targets derived from visual inspection of the desktop presentation. Verify licensing for Instrument Serif, Instrument Serif-Italic, Inter, and I A Writer Quattro V before production use.
