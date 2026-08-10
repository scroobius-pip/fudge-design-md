# How wodniack.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/wodniack.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with radiating red sunburst pattern, black display typography reading CODING MY WAY SINCE 1997, and small floating image fragments converging toward center](https://pin.fontofweb.com/1334?format=jpg)](https://design.withfudge.com/share/pin-1334)

[Hero section with radiating red sunburst pattern, black display typography reading CODING MY WAY SINCE 1997, and small floating image fragments converging toward center](https://design.withfudge.com/share/pin-1334)

[![Work showcase grid with two project thumbnails floating over repeating red WORK pattern on black, including blue recruitment site and silver faucet product page](https://pin.fontofweb.com/1333?format=jpg)](https://design.withfudge.com/share/pin-1333)

[Work showcase grid with two project thumbnails floating over repeating red WORK pattern on black, including blue recruitment site and silver faucet product page](https://design.withfudge.com/share/pin-1333)

[![Full-bleed typographic background with staggered red WORK letters on black dotted texture, with small dark project list card in lower right corner](https://pin.fontofweb.com/1332?format=jpg)](https://design.withfudge.com/share/pin-1332)

[Full-bleed typographic background with staggered red WORK letters on black dotted texture, with small dark project list card in lower right corner](https://design.withfudge.com/share/pin-1332)

[![Vertical WORK badge in rounded black pill with red lettering, centered on bright red grid background with thin structural lines](https://pin.fontofweb.com/1331?format=jpg)](https://design.withfudge.com/share/pin-1331)

[Vertical WORK badge in rounded black pill with red lettering, centered on bright red grid background with thin structural lines](https://design.withfudge.com/share/pin-1331)

## Overview

This design system describes a creative developer portfolio that treats typography as the primary interface element. The site operates at two extremes: vast, screen-filling display lettering that becomes architectural background texture, and precise, small-scale editorial details for navigation and project metadata. The dominant impression is one of controlled aggression—electric red fields, black letterforms with tight negative spacing, and a repeating "WORK" motif that turns the designer's output into a brand pattern.

The system relies on three font families with distinct roles. Bigger-Display drives all large-scale messaging with compressed, high-impact forms. PP Editorial New provides body text and lighter display moments with classical serif contrast. PP Fraktion Mono handles labels, metadata, and technical annotations with mechanical precision. Color is deliberately constrained: a single saturated red against black and white, with no intermediate tones except where photographic content introduces them. Layouts are full-bleed and immersive, with project showcases appearing as floating cards against typographic wallpaper.

## Colors

| token | value | use |
|---|---|---|
| action | #F21A4E | Primary accent, hero backgrounds, large typographic fills, interactive emphasis |
| ink | #000000 | Primary text on light surfaces, deep shadow tone, project card backgrounds |
| canvas | #F21A4E | Page background, hero sections, typographic wallpaper fields |
| surface | #1A0A0A | Dark UI panels, badge fills, elevated components on red ground |
| text-inverse | #F21A4E | Text on dark or black surfaces, badge lettering, accent labels |
| text-muted | #6B6B6B | Secondary metadata, captions, de-emphasized list items |

The color strategy is intentionally reductive. The red functions simultaneously as background, foreground, and brand identifier—its saturation is high enough to read as energetic rather than corporate. Black provides absolute contrast for the display typography, while the near-black surface tone softens transitions for UI elements that need separation from pure ink. White appears only in project showcase cards and photographic content, creating moments of visual relief. No gradients or transparent overlays are present; color fields are flat and decisive. The red maintains consistent hue across all applications, from the radiating sunburst hero to the repeating WORK pattern.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Bigger-Display | 8rem | 700 | 0.85 | -0.02em | Hero statements, year markers, maximum impact |
| section-display | Bigger-Display | 6rem | 700 | 0.9 | -0.01em | Section headers, vertical badges, pattern fills |
| editorial-ultralight | PP Editorial New | 3rem | 200 | 1.1 | -0.01em | Large serif moments, pull quotes, elegant contrast |
| body-large | PP Editorial New | 1.25rem | 400 | 1.4 | 0 | Lead paragraphs, project descriptions |
| body | PP Editorial New | 1rem | 400 | 1.5 | 0 | Standard reading text, secondary content |
| label | PP Fraktion Mono | 0.75rem | 400 | 1.2 | 0.05em | Metadata, captions, navigation hints |
| label-bold | PP Fraktion Mono | 0.75rem | 700 | 1.2 | 0.05em | Active states, emphasized metadata, project codes |

Bigger-Display operates at extreme scale with tight line-height, allowing stacked words to interlock visually. Its weight is uniformly heavy, creating solid black shapes that read as texture when repeated. PP Editorial New appears in two weights: the Ultralight for display contrast against the heavy sans, and Regular for readable body copy. The serif's classical proportions provide necessary warmth and sophistication. PP Fraktion Mono is used small and tracked slightly open for legibility at caption sizes; its Bold weight marks interactive or emphasized states.

Verify licensing for these families before production use. PP Editorial New and PP Fraktion Mono are designed by Mathieu Desjardins and Juri Zaech respectively, both distributed by Pangram Pangram Foundry.

## Layout

The layout system is built on full-viewport immersion with layered depth. Hero sections occupy complete screens with centered, monumental typography. The radiating line pattern in the hero creates forced perspective, drawing the eye toward a vanishing point where small image fragments orbit. This establishes a spatial logic that recurs throughout: large typographic ground plane, floating content planes, and fine detail at the periphery.

Project showcases break the typographic wallpaper with rectangular cards that appear to hover at a different depth. These cards maintain generous internal padding and rounded corners, contrasting with the sharp geometry of the background pattern. The WORK badge demonstrates vertical text composition, with letterforms stacked in a rounded pill that functions as both navigation and decorative element.

Grid structures are visible as thin hairlines in some compositions, suggesting an underlying modular system that organizes the apparent chaos. Spacing between major sections is generous, typically six to eight units, allowing each typographic statement to breathe despite its density. Content alignment is predominantly centered for hero moments and left-aligned for project metadata, creating a rhythmic alternation between symmetrical impact and editorial hierarchy.

## Visual language

The visual language is defined by three core tensions: scale versus detail, repetition versus uniqueness, and flat color versus photographic depth. The repeating WORK pattern turns the portfolio's subject into an environmental texture—letters at display scale tile across black fields with slight positional variation, creating moiré-like effects that reward sustained attention. This pattern functions as both decoration and brand assertion.

Photographic and interface content appears as discrete rectangles against this typographic field, their realism contrasting with the abstract letterforms. The project cards maintain clean, contemporary UI aesthetics—white or light backgrounds, restrained typography, functional controls—positioning the designer as a maker of usable systems amid the expressive portfolio wrapper.

Line work is precise and thin: radiating sunburst lines, grid divisions, and dot patterns create secondary texture without competing with the bold letterforms. The dot field within dark surfaces adds granular noise that prevents flatness. Decorative elements like the small star glyph appear sparingly, marking special moments or interactive states.

## Components

### Hero Sunburst

- **Anatomy**: Full-viewport container with radiating line pattern converging at center point, large centered typography, small orbiting image fragments near vanishing point
- **Surface**: Solid red background with black line geometry
- **Typography**: hero-display in ink, stacked and centered
- **Shape**: Rectangular viewport fill, lines as thin strokes from center
- **Spacing**: Typography occupies central vertical band, fragments float in upper third
- **Composition**: Radial symmetry with typographic anchor, fragments add organic disruption

### Project Showcase Card

- **Anatomy**: Rectangular container with internal padding, project image or interface screenshot, optional text overlay, small label or code marker
- **Surface**: White or light background for photographic content, dark background for text-heavy previews
- **Typography**: body-large for titles, label for metadata, label-bold for project codes
- **Shape**: Rounded corners at card radius
- **Spacing**: Generous internal padding, typically four to six units
- **Composition**: Floats at apparent depth above typographic wallpaper, slight rotation or offset for dynamism

### WORK Badge

- **Anatomy**: Vertical pill container with stacked single letters, optional border ring
- **Surface**: surface fill with text-inverse lettering
- **Typography**: section-display, vertically oriented
- **Shape**: Full pill with rounded ends
- **Spacing**: Tight letter fitting, generous padding within pill
- **Composition**: Centered or offset as navigational anchor, readable as both word and abstract form

### Project List Card

- **Anatomy**: Dark rectangular panel with stacked text entries, right-aligned accent text
- **Surface**: ink background with white and muted text
- **Typography**: label for list items, label-bold for section headers, text-muted for secondary entries
- **Shape**: Sharp corners, minimal padding
- **Spacing**: Tight vertical stacking, clear separation between groups
- **Composition**: Anchored to corner of viewport, providing wayfinding without dominating

## Responsive behavior

The system is designed for large viewports where typographic scale can achieve maximum impact. At reduced widths, the hero display should scale down proportionally while maintaining line breaks that preserve word grouping. The WORK pattern may simplify to fewer repetitions or shift to horizontal orientation. Project cards should stack vertically with full-width presentation, maintaining their internal padding ratios.

The vertical WORK badge may rotate to horizontal or collapse to a compact pill for narrow screens. Navigation and metadata should remain accessible without requiring interaction with the decorative background. Touch targets for any interactive elements should meet minimum size requirements despite the system's preference for fine detail.

## Practical implementation guidance

### Preserve
- The absolute contrast between red and black as the primary identity
- The three-tier type hierarchy: display, editorial serif, mono label
- The full-bleed, immersive viewport treatment for hero sections
- The repeating typographic pattern as environmental texture
- The floating card metaphor for project presentation

### Avoid
- Introducing additional accent colors; the system derives energy from restraint
- Softening the display typography with increased line-height or reduced weight
- Adding decorative elements that compete with the WORK pattern
- Using the mono font at large sizes; it is calibrated for small technical text
- Gradient fills or shadows that contradict the flat color philosophy

### Recommended build order
1. Establish the red and black color foundation with CSS custom properties
2. Implement Bigger-Display at hero scale with tight leading and negative tracking
3. Build the radiating line pattern as SVG or CSS conic gradient
4. Add PP Editorial New for body content and lighter display moments
5. Integrate PP Fraktion Mono for labels and metadata
6. Create the WORK pattern as a reusable background component
7. Develop project card containers with consistent padding and radius
8. Layer floating composition with z-index and subtle transform offsets

### Accessibility
- Ensure text over the red background meets contrast requirements; the black display type on red generally satisfies this, but smaller text may need adjustment
- Provide alternative navigation paths that do not require reading decorative typographic wallpaper
- Consider motion sensitivity for the radiating pattern and floating elements; respect prefers-reduced-motion
- Maintain focus indicators that are visible against both red and black surfaces

## Scope note

This guide covers the homepage and primary portfolio presentation surfaces visible in the supplied images. Interior project pages, contact forms, and motion behavior are not represented. Measurements are practical adaptation targets. Verify licensing for all font families before production use.
