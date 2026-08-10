# How vulture.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/vulture.com-design)

Last updated: 2026-08-10

## Captured pages

[![Vulture footer with black wordmark, social icons in black circles, and dense legal links in uppercase tracking](https://pin.fontofweb.com/1430?format=jpg)](https://design.withfudge.com/share/pin-1430)

[Vulture footer with black wordmark, social icons in black circles, and dense legal links in uppercase tracking](https://design.withfudge.com/share/pin-1430)

[![Movies section header in oversized cyan italic display with editorial card grid and TV section below](https://pin.fontofweb.com/1429?format=jpg)](https://design.withfudge.com/share/pin-1429)

[Movies section header in oversized cyan italic display with editorial card grid and TV section below](https://design.withfudge.com/share/pin-1429)

[![Vulture homepage masthead with bold black wordmark, cyan Feed badge, and three-column editorial layout](https://pin.fontofweb.com/1428?format=jpg)](https://design.withfudge.com/share/pin-1428)

[Vulture homepage masthead with bold black wordmark, cyan Feed badge, and three-column editorial layout](https://design.withfudge.com/share/pin-1428)

## Overview

Vulture presents an entertainment journalism experience built on dramatic typographic contrast and editorial confidence. The visual system centers on two type families working in deliberate tension: Elderkin delivers oversized, italicized section headers that dominate the viewport with personality and swagger, while Tn provides the refined, readable text fabric for headlines, body copy, and navigation. The color philosophy is restrained almost to the point of austerity—pure black and white carry the structural load, while a single electric cyan accent punctuates section identities, interactive badges, and directional cues. This is a design that trusts its content: large photography sits in clean rectangular frames, typography scales aggressively for section breaks, and the overall rhythm alternates between moments of typographic spectacle and dense editorial information. The result feels simultaneously magazine-authoritative and digitally native, with the bold display treatments signaling entertainment coverage that takes its subject seriously without becoming solemn.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, wordmark, navigation rules, social icon fills, footer links |
| canvas | #ffffff | Page background, card surfaces, masthead ground |
| accent | #00b4e6 | Section display headers, "The Feed" badge, arrow indicators, timestamp highlights |
| muted-ink | #4a4a4a | Secondary body text, dek copy, author bylines in lighter weight |
| surface-elevated | #f5f5f5 | Subtle background differentiation for game modules and interactive panels |
| border-hairline | #000000 | Navigation rules, card dividers, section separators |

The color system operates on a near-monochrome foundation with strategic chromatic intervention. Black serves as the absolute authority: the Vulture wordmark, navigation text, footer links, and social icons all draw from this single source. White provides the necessary breathing room, allowing photography and typography to exist without competition. The cyan accent functions as the site's emotional register—appearing in the massive "Movies" and "TV" section headers where it transforms functional labels into graphic events, and in the "The Feed" badge where it creates a callout with dimensional presence through its arrow-shaped container. Muted ink appears in supporting text hierarchies where full black would create excessive visual weight. The elevated surface tone appears sparingly, primarily in interactive game modules where subtle background separation aids scannability. No gradient or shadow tokens are employed; the design achieves depth through scale contrast and photographic content rather than atmospheric effects.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Elderkin | 8rem | 700 | 0.85 | -0.02em | Section headers (Movies, TV) |
| section-display | Elderkin | 6rem | 700 | 0.9 | -0.01em | Sub-section breaks, promotional headers |
| headline-large | Tn | 2.5rem | 400 | 1.1 | -0.01em | Feature article headlines, hero card titles |
| headline-medium | Tn | 1.75rem | 400 | 1.2 | 0em | Standard article card headlines |
| body | Tn | 1rem | 400 | 1.5 | 0em | Article dek copy, description text |
| body-small | Tn | 0.875rem | 400 | 1.5 | 0em | Timestamps, metadata, captions |
| label | Tn | 0.75rem | 400 | 1.2 | 0.08em | Category tags, uppercase section labels |
| navigation | Tn | 0.875rem | 400 | 1 | 0.05em | Primary nav, footer links, bylines |

The typographic system derives its character from the deliberate pairing of a display face with editorial gravitas against a text face with classical proportions. Elderkin, designed by Eric Olson of Process Type Foundry, appears exclusively in its Bold weight and italic style, scaled to extremes that push against the edges of containers. Its tight line height and negative letter spacing create dense, impactful blocks of color that function as graphic elements as much as readable text. Tn, credited to Tn Web Use Only and available from Type Network, handles all functional typography with a Roman style that echoes traditional newspaper and magazine text faces. The size hierarchy moves in clear whole-number multiples of the 4px base unit, creating a rational scale from 12px labels through 16px body to 28px and 40px headline sizes, culminating in the 128px hero display. Verify licensing for these families before production use.

## Layout

The page architecture follows a classic editorial three-column model with dramatic sectional interruptions. The masthead occupies full width with centered wordmark, flanked by utility navigation and search. Below this, a primary navigation bar spans the full viewport with uppercase category links separated by vertical rules. The main content area organizes into asymmetric columns: a dominant central feature well flanked by narrower side rails that carry secondary stories, game modules, and promotional units.

Section breaks are not subtle transitions but typographic events. The "Movies" and "TV" headers crash into the layout at enormous scale, their italic forms extending beyond normal content boundaries and creating visual anchors that reset the reader's attention. These headers sit above card grids that range from single hero cards with large photography to multi-column arrangements of smaller story units.

The footer compresses information into a disciplined stack: social icons in solid black circles, dense rows of uppercase legal and utility links, and finally a centered copyright statement. Throughout, the design maintains generous vertical breathing room between sections while keeping horizontal gutters tight, creating a tall, scrolling rhythm appropriate to content-heavy publishing.

Content maximum width appears to sit around 75rem, with the layout remaining centered in the viewport. Internal spacing follows a 4px base unit, with section breaks typically employing 6rem of vertical separation to create clear content territories.

## Visual language

The visual personality of Vulture emerges from the tension between editorial restraint and entertainment-world exuberance. Photography receives rectangular, unrounded treatment—no border radii soften the image edges, maintaining a magazine-page aesthetic. The cyan accent operates as a signature element, appearing in the arrow-tailed "The Feed" badge that breaks the horizontal navigation with its downward-pointing shape, and in the directional arrows that accompany section links.

Typography creates hierarchy through scale jumps rather than weight variation. Within Tn, the design rarely exploits multiple weights; instead, size differentiation and uppercase transformation carry the information architecture. Category labels like "AWARDS SEASON" and "NOW STREAMING" appear in tightly tracked uppercase at small sizes, creating a label system that scans efficiently without competing with headlines.

The social icon treatment in the footer—solid black circles with white glyph interiors—exemplifies the binary color approach, treating interactive elements as graphic shapes rather than button-like affordances. Similarly, the "VULTURE GAMES" pill badge uses the accent color with rounded terminals to create a contained interactive callout within the editorial flow.

Decorative minimalism prevails: no drop shadows, no gradient overlays on photography, no border radii on primary content cards. The design achieves visual interest through the scale and angle of its display typography, the quality and selection of its photography, and the strategic placement of its single accent color.

## Components

### Masthead

- **Anatomy**: Centered Vulture wordmark in black Elderkin Bold, flanked by left utility links and right search/utility cluster
- **Surface**: White background, no border
- **Typography**: Wordmark at approximately 3rem in Elderkin Bold; surrounding links in navigation token
- **Shape**: Full-width bar, no radius
- **Spacing**: Compact vertical padding, generous horizontal margins
- **Composition**: Symmetrical center-weight with functional edges

### Primary Navigation

- **Anatomy**: Horizontal category list with vertical rule separators
- **Surface**: White background with single black top and bottom hairline rules
- **Typography**: Navigation token, uppercase categories
- **Shape**: Full-width bar, 1px black rules above and below
- **Spacing**: Tight vertical padding, evenly distributed horizontal links
- **Composition**: Left-aligned beginning with "THE FEED" badge intrusion

### The Feed Badge

- **Anatomy**: Cyan arrow-shaped container with "THE FEED" text, pointing downward into content
- **Surface**: Accent fill, black text
- **Typography**: Label token, uppercase, centered within shape
- **Shape**: Custom polygon with arrow tail extending below baseline
- **Spacing**: Overlaps navigation boundary, creating dimensional break

### Section Header

- **Anatomy**: Oversized italic word partially overlapping content below
- **Surface**: Transparent, text only
- **Typography**: Hero-display token in accent color
- **Shape**: Text extends beyond content bounds, no container
- **Composition**: Left-aligned, partially obscured by or overlapping photography

### Editorial Card

- **Anatomy**: Photography container, optional category label, headline, optional dek, byline
- **Surface**: White background, no border, no radius on images
- **Typography**: Headline-medium for standard cards, headline-large for hero; body token for dek; label token for category; navigation token for byline
- **Shape**: Rectangular images, no radius
- **Spacing**: 1.5rem gutter between cards, variable vertical spacing based on prominence
- **Composition**: Asymmetric grid with dominant hero and supporting columns

### Game Module

- **Anatomy**: Circular avatar image, headline question, dotted rule separator
- **Surface**: Elevated surface background or white with dotted rules
- **Typography**: Headline-medium for questions, body-small for metadata
- **Shape**: Circular avatar at 50% radius, horizontal dotted rules
- **Composition**: Stacked list with avatar left or top, question following

### Social Icon Row

- **Anatomy**: Circular icon buttons in horizontal array
- **Surface**: Ink fill, canvas icon color
- **Shape**: Perfect circles, 50% radius or 9999px pill equivalent
- **Spacing**: Even distribution with consistent gap
- **Composition**: Centered in footer zone

### Footer

- **Anatomy**: Social icons, two rows of uppercase utility links, copyright statement
- **Surface**: White background, no border
- **Typography**: Navigation token throughout, tight tracking
- **Shape**: Full-width, text-centered
- **Spacing**: Generous vertical padding between zones, compact line spacing within rows

## Responsive behavior

The design's strong horizontal emphasis and large display typography suggest specific adaptation needs. The three-column editorial grid should collapse to single-column stacking on narrow viewports, with the hero display headers scaling down to prevent horizontal overflow. The primary navigation, currently a single horizontal bar, would require horizontal scrolling or hamburger transformation at mobile widths to maintain touch accessibility.

The "The Feed" badge, with its distinctive arrow shape, may need repositioning or simplification in narrow contexts where it currently breaks into the navigation structure. Editorial card images should maintain aspect ratio while allowing headline sizes to reduce proportionally.

Game modules with circular avatars and question text should stack vertically rather than maintaining side-by-side arrangements. The footer link density, currently two rows of closely spaced uppercase text, should expand to single-column stacking with increased touch targets.

## Practical implementation guidance

### Preserve
- The dramatic scale contrast between Elderkin display headers and Tn body text; this pairing defines the brand voice
- The single cyan accent against black-and-white foundation; resist adding secondary accent colors
- Rectangular, unrounded photography treatment; this magazine aesthetic distinguishes from generic rounded-card publishing
- The uppercase, tightly tracked label system for categories and metadata
- The hairline black rules that structure navigation and section breaks

### Avoid
- Adding border radii to primary editorial images or cards; the design's sharpness depends on rectangular geometry
- Introducing gradient overlays on photography; let images exist in pure form
- Expanding the color palette beyond the established cyan accent; the restraint is intentional
- Using Elderkin for body text or small sizes; it functions only at display scale
- Shadow effects for elevation; the design achieves hierarchy through scale and position alone

### Recommended build order
1. Establish the 4px base grid and typographic scale with Tn as the primary text family
2. Implement the masthead with centered wordmark and navigation bar with hairline rules
3. Build the editorial card component with rectangular image containers and headline hierarchy
4. Add the section header system with Elderkin at hero-display scale
5. Implement "The Feed" badge as a custom shape component
6. Construct the three-column layout grid with appropriate gutter behavior
7. Add game modules with circular avatars and dotted separators
8. Build the footer with social icon circles and dense link rows

### Accessibility
- Ensure the cyan accent meets contrast requirements when used for interactive text; the current application on large display headers benefits from scale but smaller accent text may need verification
- Provide focus indicators for social icon circles that do not rely solely on color change
- Consider reduced-motion preferences for any scroll-triggered section header animations
- Maintain logical heading hierarchy despite visual scale; the oversized section headers should map to appropriate structural levels
- Ensure touch targets in the dense footer link rows meet minimum size requirements

## Scope note

This guide covers the Vulture homepage and section front visible in the supplied images, including masthead, navigation, editorial card grids, section headers, game modules, and footer. Article page templates, video players, subscription flows, search results, and mobile-specific layouts are not represented. Interactive states, animation behavior, and dark mode variants are not documented. Measurements are practical adaptation targets derived from visual inspection against a 4px base unit.
