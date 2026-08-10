# How morphic.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/morphic.com-design)

Last updated: 2026-08-10

## Captured pages

[![Manifesto page with handwritten-style text on dark background, featuring a wax seal and large outlined 'Morphic' lettering](https://pin.fontofweb.com/5810?format=jpg)](https://design.withfudge.com/share/pin-5810)

[Manifesto page with handwritten-style text on dark background, featuring a wax seal and large outlined 'Morphic' lettering](https://design.withfudge.com/share/pin-5810)

[![Hero section with 'Built for teams' headline, floating cursor labels in purple, green, and red, and two pill-shaped action buttons](https://pin.fontofweb.com/5808?format=jpg)](https://design.withfudge.com/share/pin-5808)

[Hero section with 'Built for teams' headline, floating cursor labels in purple, green, and red, and two pill-shaped action buttons](https://design.withfudge.com/share/pin-5808)

[![Feature carousel with four dark cards showing AI video generation capabilities and descriptive text](https://pin.fontofweb.com/5807?format=jpg)](https://design.withfudge.com/share/pin-5807)

[Feature carousel with four dark cards showing AI video generation capabilities and descriptive text](https://design.withfudge.com/share/pin-5807)

[![Footer with timeline navigation, pill-shaped link buttons, large outlined 'Morphic' wordmark, and social icons](https://pin.fontofweb.com/5806?format=jpg)](https://design.withfudge.com/share/pin-5806)

[Footer with timeline navigation, pill-shaped link buttons, large outlined 'Morphic' wordmark, and social icons](https://design.withfudge.com/share/pin-5806)

## Overview

Morphic presents a cinematic, dark-mode visual system built around the premise of AI-powered storytelling. The interface immerses users in a near-black canvas where content floats with theatrical precision. The design language balances technical credibility with creative warmth: crisp, tightly-tracked Inter headlines establish trust and clarity, while Nanum Pen's handwritten style injects human personality into manifesto pages and personal statements. The overall effect is that of a premium creative tool—sophisticated enough for professional video production, approachable enough for individual creators.

The system employs a restrained monochromatic foundation with strategic color accents that appear as floating cursor labels in purple, green, and red, suggesting real-time collaboration. Feature cards showcase AI capabilities through rich imagery contained within dark rounded containers, while the footer introduces a unique timeline-based navigation metaphor. Large outlined wordmarks serve as ambient branding elements, creating depth without competing with content. Every surface decision reinforces the product's positioning as a new era of storytelling—technologically advanced yet fundamentally human-centered.

## Colors

The color system is intentionally minimal, built on a near-black canvas with carefully graded surfaces and selective accent colors that signal collaboration and action.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, deepest layer |
| surface | #1a1a1a | Feature cards, elevated content containers |
| surface-elevated | #262626 | Footer pills, secondary buttons, navigation chips |
| ink | #ffffff | Primary headlines, body text on dark, primary button text |
| ink-muted | #a3a3a3 | Descriptive body text, secondary labels, footer links |
| action-primary | #ffffff | Primary CTA backgrounds, high-emphasis actions |
| action-secondary | #262626 | Secondary button backgrounds, subtle actions |
| accent-purple | #7c3aed | Collaborative cursor labels (Katie) |
| accent-green | #059669 | Collaborative cursor labels (Mike) |
| accent-red | #be123c | Collaborative cursor labels (James) |
| border-subtle | #404040 | Hairline dividers, card borders when visible |

The palette operates in a single dark mode with no light variant shown. The near-black canvas absorbs attention and directs focus toward content and interactive elements. Surface layers create subtle elevation through value shifts rather than shadows. The three accent colors—purple, green, and red—function as collaboration signals rather than brand colors, appearing only in cursor labels that suggest multiple users working simultaneously. White serves dual duty as both primary text and primary action fill, with inversion handled through background contrast. Muted gray text provides hierarchy without introducing additional hue complexity.

## Typography

The type system pairs two distinct personalities: Inter for all interface and display text, Nanum Pen for handwritten manifesto content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 700 | 1.1 | -0.03em | Page headlines, major section titles |
| section-display | Inter | 2.5rem | 700 | 1.1 | -0.02em | Sub-section headings, feature headers |
| body | Inter | 1rem | 400 | 1.6 | 0 | Primary descriptive text |
| body-muted | Inter | 1rem | 400 | 1.6 | 0 | Secondary descriptions, captions |
| label | Inter | 0.875rem | 500 | 1.4 | 0 | Buttons, tags, navigation items |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Footer links, menu items |
| handwritten | Nanum Pen | 1.25rem | 400 | 1.6 | 0.01em | Manifesto quotes, personal statements |

Inter appears in a variable font format with tight negative tracking on display sizes, creating a contemporary, confident presence. Headlines use bold weight with aggressive tracking reduction that feels editorial and precise. Body text maintains generous line height for readability against the dark background. Nanum Pen provides organic contrast—its casual brush-script rhythm appears in the manifesto page where founder quotes and mission statements benefit from personal, human texture. The handwritten style is larger than body text to maintain legibility given its irregular forms.

Verify licensing for these families before production use. Inter is designed by Rasmus Andersson and distributed by Rsms. Nanum Pen carries no attributed designer or vendor in the available records.

## Layout

The layout system favors centered, theatrical compositions with generous negative space and floating elements that suggest depth and movement.

Page sections stack vertically with substantial breathing room between them—approximately 6rem of vertical separation creates a deliberate, unhurried pacing. Content frequently centers horizontally within a max-width container, with hero sections placing text and buttons in the optical center of the viewport. The "Built for teams" section demonstrates this clearly: headline, description, and actions align to center while cursor labels orbit at the periphery, creating asymmetric balance.

Feature grids use horizontal scrolling carousels rather than fixed grids, with cards partially visible at the right edge to indicate more content. Each card maintains consistent internal padding and rounded corners, with imagery occupying the upper portion and text anchored at the bottom. Card widths appear fixed rather than fluid, suggesting a snap-scroll behavior.

The footer introduces a distinctive timeline metaphor: a horizontal axis with second markers spans the full width, with navigation pills positioned along this timeline. Below, an enormous outlined "Morphic" wordmark stretches edge-to-edge as ambient branding, with copyright and language controls tucked into the bottom corners. This creates a sense of cinematic scope—the brand exists at a scale beyond the immediate interface.

Spacing follows a 0.25rem base unit. Section padding uses 6rem, content gaps within sections use 1.5rem, and card internal padding uses 1.5rem. The system avoids tight packing; even button groups maintain comfortable separation.

## Visual language

The visual language draws from film production interfaces and creative software—dark, focused, with elements that suggest motion and collaboration.

Imagery within feature cards shows AI-generated content: stylized characters, 3D scenes, and video frames. These images receive no border treatment and sit flush within their containers, with rounded corners inherited from the parent card. The content itself is colorful and varied, creating natural focal points against the dark interface.

Cursor labels are a distinctive interactive element: small pill-shaped tags with names and colored backgrounds, each accompanied by a cursor arrow. These appear to float independently of the page structure, suggesting other users' presence. Colors are saturated but not neon—purple, green, and red maintain readability without overwhelming the dark canvas.

The outlined wordmark treatment appears in both the manifesto page background and the footer. Large, hollow letterforms in a very dark gray or subtle stroke create architectural scale without visual weight. This technique transforms branding into environmental texture.

Buttons are universally pill-shaped with full rounding, eliminating sharp corners throughout the interface. The primary/secondary pairing uses inversion: white fill with dark text versus dark fill with white text. Both share identical padding and typography, differentiated only by surface value.

No gradients, glassmorphism, or heavy shadows appear. Depth comes from value contrast and scale variation rather than simulated lighting.

## Components

### Primary button

- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: White background (#ffffff) with near-black text (#000000)
- **Typography**: Inter 500 at 0.875rem, medium weight
- **Shape**: Full pill rounding (9999px)
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Appears in pairs with secondary button, separated by small gap

### Secondary button

- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: Dark gray background (#262626) with white text (#ffffff)
- **Typography**: Inter 500 at 0.875rem, medium weight
- **Shape**: Full pill rounding (9999px)
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Positioned immediately adjacent to primary button, slightly less visual weight

### Feature card

- **Anatomy**: Rounded rectangle containing hero image at top, bold title and description below, plus button at bottom-right
- **Surface**: Dark surface (#1a1a1a) with no visible border
- **Typography**: Title in Inter 700 at 1rem, description in Inter 400 at 1rem in muted color
- **Shape**: 1rem border radius
- **Spacing**: 1.5rem internal padding, image bleeds to top edge
- **Composition**: Cards align horizontally in scrollable row, partial card visible at viewport edge

### Cursor label

- **Anatomy**: Colored pill with name text and cursor arrow positioned above-left
- **Surface**: Solid accent color (purple #7c3aed, green #059669, or red #be123c) with white text
- **Typography**: Inter 500 at 0.875rem
- **Shape**: Full pill rounding
- **Spacing**: Compact padding, approximately 0.375rem vertical, 0.75rem horizontal
- **Composition**: Floats freely in space, not grid-aligned, with cursor arrow suggesting active interaction

### Footer navigation pill

- **Anatomy**: Rounded rectangle containing link text
- **Surface**: Elevated dark surface (#262626) with muted text (#a3a3a3)
- **Typography**: Inter 500 at 0.875rem
- **Shape**: Full pill rounding
- **Spacing**: 0.5rem vertical padding, 1rem horizontal padding
- **Composition**: Arranged in rows along timeline axis, multiple pills per row with small gaps

### Manifesto card

- **Anatomy**: Centered rectangular panel containing handwritten text paragraphs, signature, and seal illustration
- **Surface**: Slightly elevated dark surface with subtle edge definition
- **Typography**: Nanum Pen 400 at 1.25rem, relaxed line height for readability
- **Shape**: Subtle rounding, approximately 0.5rem
- **Spacing**: Generous internal padding, approximately 2rem
- **Composition**: Centered on page with enormous outlined "Morphic" lettering visible in background

## Responsive behavior

The system appears optimized for desktop viewing with substantial viewport widths. The feature carousel relies on horizontal space to show partial cards and suggest scrollability. Centered hero compositions maintain their structure across widths but would require adjustment for narrow viewports.

For narrower screens, the following adaptations are recommended: stack hero buttons vertically with full-width treatment, convert feature carousel to vertical scroll or swipeable single-card view, and collapse footer timeline navigation into a compact vertical list. The large outlined wordmarks should scale down proportionally or hide entirely on small screens to prevent horizontal overflow.

Touch targets should maintain minimum 44px height for cursor labels and buttons. The floating cursor concept may need static positioning on touch devices where precise cursor tracking is unavailable.

## Practical implementation guidance

### Preserve
- The near-black canvas as the default background; any lighter value breaks the cinematic immersion
- Tight negative tracking on Inter display sizes; this is essential to the contemporary, editorial feel
- The pill shape language universally applied to all interactive elements
- The handwritten/Inter pairing for manifesto-style content; this human/technical contrast is core to brand expression
- Floating cursor labels with distinct accent colors for collaboration features
- Generous section spacing; the unhurried pacing is deliberate

### Avoid
- Adding borders or shadows to feature cards; the flat, dark-on-dark layering is intentional
- Using the accent colors for non-collaboration purposes; they carry specific semantic meaning
- Introducing additional font families; the two-family system is tightly calibrated
- Light mode variants without careful consideration; the dark palette is fundamental to the product positioning
- Sharp corners on any interactive element; the pill language should extend to custom components

### Recommended build order
1. Establish the canvas and surface color tokens with Inter at base sizes
2. Implement pill-shaped buttons with primary/secondary variants
3. Build the feature card component with image handling and text hierarchy
4. Add display typography with aggressive tracking for hero sections
5. Integrate Nanum Pen for manifesto content with appropriate sizing
6. Create cursor label components with the three accent colors
7. Construct footer with timeline navigation and responsive wordmark scaling

### Accessibility
- Ensure white text on black backgrounds meets WCAG AAA contrast ratios; the current values do
- Provide visible focus states for pill buttons; consider a 2px outline offset or subtle ring
- Do not rely solely on color to distinguish cursor labels; names are already present
- Maintain readable line lengths for body text; the centered hero description should max out around 60 characters
- Offer reduced-motion alternatives for any carousel or floating cursor animations
- Ensure the handwritten Nanum Pen text remains legible at its implemented size; avoid going below 1.25rem

## Scope note

This guide covers the landing page, manifesto page, and showcase footer visible in the supplied images. Mobile layouts, additional interior pages, loading states, form interactions, and motion specifications are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px base grid. Verify licensing for Inter and Nanum Pen before production use.
