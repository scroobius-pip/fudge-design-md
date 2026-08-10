# How arago.wawww.studio is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/arago.wawww.studio-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with optical computing chip render against deep navy grid background, featuring Arago logo and introductory headline about AI hardware limits](https://pin.fontofweb.com/3792?format=jpg)](https://design.withfudge.com/share/pin-3792)

[Hero section with optical computing chip render against deep navy grid background, featuring Arago logo and introductory headline about AI hardware limits](https://design.withfudge.com/share/pin-3792)

[![Navigation overlay with large uppercase section links and contact sidebar showing email, LinkedIn, and team recruitment CTA with arrow icon](https://pin.fontofweb.com/511?format=jpg)](https://design.withfudge.com/share/pin-511)

[Navigation overlay with large uppercase section links and contact sidebar showing email, LinkedIn, and team recruitment CTA with arrow icon](https://design.withfudge.com/share/pin-511)

[![Centered headline section with two floating chip renders and Email/LinkedIn buttons, displaying the tagline Enjoy the Thrilling Ride](https://pin.fontofweb.com/510?format=jpg)](https://design.withfudge.com/share/pin-510)

[Centered headline section with two floating chip renders and Email/LinkedIn buttons, displaying the tagline Enjoy the Thrilling Ride](https://design.withfudge.com/share/pin-510)

[![Investor logo marquee with clipped-corner cards for PayPal, Microsoft, Amazon, Latham & Watkins, BCG, Arm, and Apple against dark background](https://pin.fontofweb.com/509?format=jpg)](https://design.withfudge.com/share/pin-509)

[Investor logo marquee with clipped-corner cards for PayPal, Microsoft, Amazon, Latham & Watkins, BCG, Arm, and Apple against dark background](https://design.withfudge.com/share/pin-509)

## Overview

Arago presents a dark, technically precise visual identity built around optical computing hardware. The design immerses viewers in a deep navy-to-black environment that evokes the interior of a cleanroom or the void of optical pathways. A subtle grid pattern overlays the background, suggesting engineering precision and measurement. The central visual motif is a photorealistic render of an optical computing chip—black substrate with gold mounting holes, arrays of dark rectangular components, and a central region that glows with cyan-green light where photonic circuits become visible.

The typography is stark and engineered: Clash Grotesk in uppercase with generous letter spacing, creating an authoritative, scientific tone. Content is sparse and deliberate, with large headlines commanding attention while body copy remains restrained. The layout favors dramatic negative space, allowing the hardware renders to float as hero objects. Navigation and calls-to-action are minimal, using simple bordered buttons that recede until needed. The overall impression is of advanced technology presented with confidence—no decorative excess, only the essential information and the striking physical object at the center of the story.

## Colors

The color system is intentionally narrow, deriving its character from the contrast between deep darkness and precise light. The palette serves the optical computing narrative: the darkness represents the controlled environment where light operates, while the cyan accent references the active photonic circuitry.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Deepest background layer, page foundation |
| surface | `#0a0f1a` | Elevated cards, logo containers, navigation overlay |
| ink | `#e8e8e8` | Primary text, headlines, navigation links |
| muted-ink | `#7a8a9a` | Secondary text, section labels, captions, taglines |
| accent | `#5cdbd3` | Glowing chip circuitry, active states, emphasis |
| border | `#1a2a3a` | Button outlines, card borders, dividers, grid lines |

The canvas color is pure black, establishing maximum depth and allowing the hardware renders to emerge with dimensional presence. Surface elements carry a slight blue shift that harmonizes with the navy atmospheric gradient visible in the background. The ink color avoids pure white, using a slightly softened light gray that reduces eye strain against the dark ground while maintaining crisp legibility. Muted ink carries more blue-gray character, used for hierarchical de-emphasis. The accent color appears most dramatically in the chip renders themselves—an electric cyan that suggests active photonic pathways rather than conventional electronic blue. Border colors are subdued, creating subtle definition without visual noise. The grid overlay visible across backgrounds uses an extremely faint application of the border color, present enough to suggest precision but absent enough to avoid clutter.

## Typography

The typographic system relies on a single family with scale and spacing as the primary variables. Clash Grotesk, designed by Shiva Nallaperumal for Indian Type Foundry, provides a contemporary grotesque with technical character—neutral enough for extended use, yet distinctive in its proportions for display settings. The design uses Regular weight exclusively; weight variation is achieved through size and color rather than boldness, maintaining a consistent voice across all text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Clash Grotesk | 5rem | 400 | 1.05 | 0.02em | Main headlines, hero statements |
| section-display | Clash Grotesk | 3.5rem | 400 | 1.1 | 0.02em | Section titles, large navigation links |
| navigation | Clash Grotesk | 4rem | 400 | 1.1 | 0.02em | Full-screen menu links |
| body | Clash Grotesk | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, button labels |
| label | Clash Grotesk | 0.75rem | 400 | 1.4 | 0.08em | Section identifiers, metadata, captions |

All display text is set in uppercase, with positive letter spacing that adds air and authority to large settings. The hero display size at 5rem creates commanding presence for statements like "ENJOY THE THRILLING RIDE." Section display at 3.5rem serves the navigation overlay where links read as stacked section titles. The navigation token at 4rem bridges these uses for the full-screen menu context. Body text remains at a comfortable 1rem with generous 1.6 line height for readability in longer passages. Labels use the smallest size with the widest tracking, creating a technical index aesthetic for section markers like "INTRODUCING ARAGO" and "PRACTICAL OPTICAL COMPUTING."

Verify licensing for Clash Grotesk through Indian Type Foundry before production use.

## Layout

The layout system is built on dramatic contrast between expansive negative space and concentrated content zones. The page operates as a vertical scroll experience where full-viewport sections alternate between image-dominated hero moments and text-forward information zones. The underlying structure uses a consistent 0.25rem grid unit that informs all spacing decisions.

Section spacing is generous at 8rem, creating clear demarcation between content areas and allowing the dark background to breathe. Within sections, component spacing of 2rem groups related elements, while tight spacing at 0.5rem handles inline relationships like label-to-headline proximity.

The hero section establishes the compositional pattern: hardware renders positioned asymmetrically, breaking the frame and creating dimensional depth against the flat grid background. Text anchors to the lower left, maintaining consistent margin alignment. The navigation overlay inverts this spatial logic, filling the viewport with large left-aligned links while contact information occupies a narrower right column.

Logo cards in the investor section demonstrate a modular horizontal rhythm: clipped-corner rectangles with consistent internal padding, arranged in a scrolling or wrapping sequence with uniform gaps. The clipped corner treatment—removing a small triangle from the upper right—adds subtle technical character without decorative excess, suggesting datasheet diagrams or engineering specifications.

The grid background pattern is a defining layout element: faint lines at regular intervals creating a sense of scale and precision that extends across the entire viewport. This grid remains visible behind all content, unifying the page as a single technical environment.

## Visual language

The visual language communicates advanced hardware through restraint and precision. Every element serves the central narrative of optical computing: the transformation of electronic limitation into photonic possibility.

Imagery dominates the experience. The optical chip render is treated as a precious object—dramatically lit, floating in space, its cyan glow the only color against the monochrome environment. The render style is photorealistic with cinematic lighting: dark metallic surfaces, precise geometric arrays, and the singular illuminated region that draws the eye to the photonic core. When two chips appear, they are arranged in dynamic opposition, creating visual tension and suggesting scalability.

The grid pattern reinforces the engineering context without becoming literal blueprint. It is subtle enough to read as atmosphere rather than interface, present in all sections as a unifying texture. The clipped-corner motif appears on cards and potentially buttons, creating a family of shapes that suggest technical documentation and precision manufacturing.

Motion is implied by the static compositions: chips appear to drift, headlines emerge from darkness, the grid extends infinitely. The design invites slow, deliberate reading rather than rapid scanning. There are no decorative gradients, no glassmorphism, no rounded softness—only the hardness of engineered surfaces and the precision of measured space.

The relationship between light and dark operates on multiple levels. The page itself is dark, representing the controlled environment of optical computing. The chip glows from within, representing the technology's active state. Text emerges as light against dark, a secondary illumination that guides understanding. This hierarchy—hardware glow first, text light second, ambient darkness surrounding all—creates a coherent visual philosophy.

## Components

### Primary Button

- **Anatomy**: Text label centered within a rectangular border
- **Surface**: Transparent background with 1px border in border color
- **Typography**: Body token, centered
- **Shape**: Sharp corners, no radius
- **Spacing**: 0.75rem vertical padding, 2rem horizontal padding
- **Composition**: Buttons appear in pairs with 1rem gap, as seen with Email and LinkedIn
- **Variants**: Default state shows muted border; hover state would logically shift border or text toward accent color

### Logo Card

- **Anatomy**: Clipped-corner rectangle containing a single logo mark
- **Surface**: Surface color background with 1px border
- **Shape**: Rectangle with upper-right corner clipped at 45 degrees
- **Spacing**: 2rem internal padding, consistent external gap in sequence
- **Composition**: Horizontal arrangement in scrolling or wrapping row
- **Variants**: Static display only; logos appear in white or light gray against dark ground

### Navigation Link

- **Anatomy**: Large uppercase text with optional section number prefix
- **Typography**: Navigation token, uppercase
- **Color**: Ink color, transitioning to muted ink for inactive or secondary states
- **Spacing**: Stacked vertically with tight gap, full viewport width
- **Composition**: Left-aligned in main area, with contact details in narrower right column
- **Variants**: Default state shows full opacity; hover would shift color or add accent indicator

### Section Label

- **Anatomy**: Small uppercase text with hash prefix or section number
- **Typography**: Label token, uppercase
- **Color**: Muted ink
- **Spacing**: Positioned above related headline with tight gap
- **Composition**: Left-aligned with content block, establishing hierarchical relationship
- **Variants**: Static only; appears consistently across sections

### Hero Image

- **Anatomy**: Full-bleed hardware render with dimensional lighting
- **Surface**: Transparent background allowing canvas to show through
- **Composition**: Positioned asymmetrically, often breaking frame edges; text overlays in lower left quadrant
- **Spacing**: Full viewport width, extending beyond safe margins
- **Variants**: Single chip centered, dual chips in dynamic arrangement, or chip as background with text foreground

## Responsive behavior

The design's dramatic scale and sparse content suggest specific responsive considerations. The hero headline at 5rem will require reduction on smaller viewports; a progression to 3rem on tablet and 2.5rem on mobile maintains presence without overflow. Navigation links at 4rem similarly compress to 2.5rem and 2rem, preserving the stacked section-menu character.

The hardware renders, currently breaking frame edges, should maintain their aspect ratio while scaling to fit viewport width. On narrow screens, single-chip compositions remain centered; dual-chip arrangements may stack vertically rather than maintaining horizontal opposition.

The investor logo marquee, shown as a horizontal sequence, should transition to a wrapping grid or horizontal scroll on smaller viewports. Clipped-corner cards maintain their proportions but reduce internal padding proportionally.

The grid background pattern scales with viewport, maintaining consistent line spacing in rem units. Its visibility may increase slightly on smaller screens where the reduced content density allows more texture to show.

The navigation overlay, currently splitting between large links and contact sidebar, should stack vertically on mobile with contact information following the section links rather than sitting beside them.

## Practical implementation guidance

### Preserve
- The absolute darkness of the canvas; any lightening breaks the optical computing atmosphere
- Uppercase treatment for all display and label text
- The clipped-corner motif on cards and interactive elements
- Generous section spacing that allows content to breathe
- The grid background as a persistent, unifying texture
- Single-weight typography; do not introduce bold or medium weights

### Avoid
- Rounded corners on any element; the design relies on sharp precision
- Pure white text; the slightly softened ink color reduces harsh contrast
- Decorative gradients or glass effects; the surface language is flat and technical
- Multiple font families; Clash Grotesk carries the entire typographic load
- Busy patterns or textures competing with the grid and hardware renders

### Recommended Build Order
1. Establish the canvas and grid background as the foundational layer
2. Implement typography scale with Clash Grotesk at all sizes
3. Build the hero section with hardware render and headline composition
4. Create the button and card components with clipped-corner treatment
5. Develop the navigation overlay with section links and contact sidebar
6. Add the investor logo marquee with consistent card spacing
7. Refine responsive behavior, particularly headline scaling and image positioning

### Accessibility
- Ensure the cyan accent on chip renders meets minimum contrast if used for interactive states
- Provide focus indicators that respect the sharp-corner aesthetic, perhaps using outline-offset with border color
- Consider reduced-motion preferences for any scroll-triggered animations of hardware renders
- Maintain text contrast ratios: ink on canvas exceeds WCAG AAA, while muted ink on canvas meets AA for large text but may need adjustment for small labels
- The grid background should remain sufficiently faint to not interfere with text legibility at any viewport size

## Scope note

This guide covers the landing page experience for Arago's optical computing hardware presentation, including the hero section, navigation overlay, contact calls-to-action, and investor logo display. Mobile layouts, additional interior pages, form interactions, loading states, and motion specifications are not represented in the supplied material. Measurements are practical adaptation targets.
