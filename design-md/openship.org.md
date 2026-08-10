# How openship.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/openship.org-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with animated typing effect, light canvas, dotted background texture, and product suite card carousel](https://pin.fontofweb.com/5540?format=jpg)](https://design.withfudge.com/share/pin-5540)

[Homepage hero with animated typing effect, light canvas, dotted background texture, and product suite card carousel](https://design.withfudge.com/share/pin-5540)

[![Marketplace page with dark textured background, centered serif title, and pill-shaped action bar](https://pin.fontofweb.com/5539?format=jpg)](https://design.withfudge.com/share/pin-5539)

[Marketplace page with dark textured background, centered serif title, and pill-shaped action bar](https://design.withfudge.com/share/pin-5539)

## Overview

Openship presents itself as an open-source marketplace infrastructure project with a deliberately dual personality. The homepage operates in a bright, expansive mode: generous whitespace, a subtle dotted texture field, and a centered hero that uses an animated typing effect to spell out product names. The marketplace subpage inverts this into a moody, textured dark environment where the same brand elements feel more intimate and focused. This light-dark pairing is not merely a theme toggle but a structural part of the information architecture—different functional surfaces carry distinct atmospheric identities.

The visual system relies on two typefaces with sharply contrasting personalities. Instrument Serif, designed by Rodrigo Fuenzalida for Frag Type, handles all display and hero typography with classical confidence. Space Grotesk, by Florian Karsten, manages interface text, labels, and navigation with geometric clarity. The brand mark consists of three overlapping circular glyphs in blue, green, and orange, appearing in both the header and as a centered icon on dark pages. Component language favors rounded rectangles for cards and panels, pill shapes for grouped actions, and clean hairline borders for secondary controls.

## Colors

The interface operates across two distinct modes with a shared accent system. The light mode uses near-white surfaces with subtle warm-gray panels, while the dark mode employs deep charcoal with visible texture. Both modes share the same action blue and brand mark colors.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text on light surfaces, borders in dark mode |
| canvas | #FAFAFA | Homepage hero background, primary light surface |
| surface | #F5F5F5 | Product suite section background, elevated panels |
| deep | #242424 | Marketplace page background, dark mode surfaces |
| action | #3B82F6 | Primary buttons, active states, brand blue glyph |
| action-hover | #2563EB | Button hover, link emphasis |
| muted-ink | #6B7280 | Secondary text, captions, placeholder content |
| border | #E5E7EB | Card outlines, dividers, secondary button borders |
| border-subtle | #D1D5DB | Hairline separators, inactive states |

The light mode establishes hierarchy through value contrast rather than color saturation. The hero section sits on a near-white field with a delicate dotted texture that reads as atmosphere rather than pattern. The product suite section drops to a slightly warmer gray surface, creating a natural floor for the floating card carousel. Dark mode reverses this logic: the deep charcoal background carries a visible grain or noise texture that prevents flatness, while text and interactive elements glow forward in pure white. The action blue maintains consistent saturation across both modes, ensuring recognition. The brand mark's three colors—blue, green, and orange—appear only in the logo and as small inline indicators, functioning as wayfinding accents rather than structural colors.

## Typography

The type system splits labor between display credibility and interface utility. Instrument Serif serves all hero, section, and page titles with its high-contrast strokes and classical proportions. Space Grotesk handles everything else: body copy, navigation, labels, buttons, and card content. This pairing creates immediate hierarchy without size alone doing all the work.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Serif | 4rem | 400 | 1.1 | -0.02em | Homepage hero, animated typing headline |
| section-display | Instrument Serif | 3rem | 400 | 1.15 | -0.01em | Page titles, marketplace hero |
| body-large | Space Grotesk | 1.25rem | 400 | 1.5 | 0 | Hero descriptions, introductory paragraphs |
| body | Space Grotesk | 1rem | 400 | 1.6 | 0 | Card descriptions, general content |
| label | Space Grotesk | 0.75rem | 500 | 1.2 | 0.08em | Uppercase section labels, metadata |
| navigation | Space Grotesk | 0.875rem | 400 | 1 | 0 | Header links, utility text |

The hero display size at 4rem accommodates the animated typing effect with sufficient presence. Section display at 3rem scales appropriately for page-level headings like "the / marketplace." Body-large at 1.25rem provides comfortable reading for short descriptive passages centered below headlines. The label token uses all-caps treatment with positive tracking for category markers like "PRODUCT SUITE" and "MARKETPLACE." Navigation stays compact at 0.875rem to recede behind content.

Instrument Serif is credited to Rodrigo Fuenzalida, published by Frag Type. Space Grotesk is credited to Florian Karsten, self-published. Verify licensing for these families before production use.

## Layout

The page architecture centers content vertically and horizontally, creating a presentation-like rhythm rather than a scrolling document flow. The homepage hero occupies substantial viewport height with all elements—headline, sublabel, description, and action pair—stacked on a single vertical axis. Below this, the product suite section introduces a contained panel with rounded corners, within which a horizontal carousel of product cards extends beyond the visible frame.

Maximum content width appears to be approximately 72rem, with generous side gutters of 1.5rem. Section spacing uses 6rem vertical padding to create breathing room between major zones. The marketplace page compresses this architecture further: a centered lockup of icon, title, category label, description, and action bar occupies the vertical center of the viewport, suggesting a focused landing or interstitial pattern rather than scrollable content.

The header maintains a fixed position with minimal height, containing the brand mark left and navigation right. On the homepage, this floats over the dotted texture; on the marketplace page, it integrates into the dark field. The product suite section demonstrates a layered composition: a rounded panel sits below the hero, containing cards that overlap and recede in apparent depth, with the central card receiving full opacity and peripheral cards fading to suggest carousel continuity.

## Visual language

Texture and atmosphere distinguish Openship from flatter technical brands. The homepage employs a field of scattered dots—varying in density and resembling a star field or particle system—that fills the background behind the hero without interfering with text legibility. This texture stops at the product suite section, which uses a clean solid surface to ground the card carousel.

The marketplace page introduces a different texture: a fine grain or noise overlay on deep charcoal that suggests material depth, like brushed metal or dark paper. This texture is uniform across the entire viewport, creating an immersive environment. The transition between these two atmospheres—light dotted expanse to dark grainy intimacy—marks the boundary between exploratory browsing and focused product engagement.

The brand mark's three overlapping circles appear consistently: blue on top, green middle-left, orange middle-right. This arrangement creates a sense of motion and layering that echoes the overlapping product cards. On dark surfaces, the mark receives a subtle container with rounded corners and slight elevation. Action elements use solid fills for primary importance and outlined styles for secondary choices, with the pill shape reserved for grouped related actions.

## Components

### Primary action button
- **Anatomy**: Text label centered within a rounded rectangle
- **Surface**: Solid action blue background (#3B82F6) with white text
- **Typography**: Space Grotesk, body size, weight 400
- **Shape**: 0.5rem border radius
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Appears as the leftmost or dominant action in paired button groups

### Secondary action button
- **Anatomy**: Text label with optional dropdown chevron
- **Surface**: Transparent background with hairline border (#E5E7EB)
- **Typography**: Space Grotesk, body size, weight 400
- **Shape**: 0.5rem border radius matching primary button
- **Spacing**: Identical padding to primary for visual pairing
- **Composition**: Positioned immediately right of primary action with small gap

### Product card
- **Anatomy**: Rounded rectangle containing product icon, name, category label, description, and action link
- **Surface**: White background (#FFFFFF) with subtle shadow or border (#E5E7EB)
- **Typography**: Product name in Space Grotesk at body size with weight 500; description in body size weight 400; category in label token uppercase
- **Shape**: 0.75rem border radius
- **Spacing**: 1.5rem internal padding
- **Composition**: Cards array horizontally with overlap, central card at full opacity, flanking cards reduced in opacity to suggest depth and carousel continuity
- **Variants**: Multiple product verticals visible—hospitality, gym, e-commerce, marketplace—with distinct accent colors in their icons

### Pill action bar
- **Anatomy**: Horizontal group of text actions with leading icons
- **Surface**: Deep charcoal background (#242424) with rounded pill shape
- **Typography**: Space Grotesk at body size, weight 400, white text
- **Shape**: 9999px border radius for full pill
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding per action with internal dividers
- **Composition**: Centered below description text, containing three actions with icons: external link, document, and source code with status indicator

### Section label
- **Anatomy**: Uppercase text within a contained badge or freestanding
- **Surface**: On light backgrounds, contained in a rounded rectangle with subtle border; on dark, freestanding
- **Typography**: Space Grotesk label token, weight 500, positive tracking
- **Shape**: 0.5rem border radius when contained
- **Spacing**: Compact internal padding, generous external margin above content

## Responsive behavior

The centered single-column architecture adapts gracefully to narrower viewports by maintaining alignment and reducing scale. The hero headline should decrease from 4rem to approximately 2.5rem on small screens, preserving the animated typing effect's impact without overflow. The product card carousel should transition to a swipeable horizontal scroll or stacked vertical arrangement when viewport width no longer accommodates the overlapping presentation.

The marketplace page's centered lockup should maintain vertical centering across all sizes, with the pill action bar wrapping to multiple lines if necessary. Navigation items in the header may collapse to a menu affordance on narrow screens, though the current implementation shows only three items plus authentication, suggesting limited complexity.

The dotted texture background should scale or tile without visible seams. On high-density displays, the texture may benefit from increased dot density to maintain visual weight. Dark mode grain texture should remain subtle enough to avoid moiré patterns on various screen resolutions.

## Practical implementation guidance

### Preserve
- The sharp typographic contrast between Instrument Serif display and Space Grotesk interface text
- The dual-mode atmosphere: light dotted hero versus dark textured product pages
- The three-color brand mark with consistent overlapping geometry
- The generous vertical spacing and centered composition that creates presentation-like pacing
- The overlapping card carousel with depth-based opacity fading

### Avoid
- Adding saturated colors beyond the action blue and brand mark accents
- Flattening the textured backgrounds to solid colors
- Using Instrument Serif for body text or interface elements
- Shrinking the hero display below 2.5rem, which loses the typing animation's impact
- Separating the primary and secondary button styles with different border radii

### Recommended build order
1. Establish the dual-mode color system with light and dark surface tokens
2. Implement the type hierarchy with Instrument Serif for headings and Space Grotesk for everything else
3. Create the dotted texture background for the hero section
4. Build the button pair component with matching geometry and distinct surface treatments
5. Implement the product card with proper internal spacing and typography
6. Add the overlapping carousel composition with opacity depth
7. Create the dark-mode marketplace page with grain texture and centered lockup
8. Implement the pill action bar for grouped secondary actions

### Accessibility
- Ensure the dotted texture background maintains sufficient contrast ratios with overlaid text; the dots should remain subtle enough to not interfere with readability
- Provide a reduced-motion alternative for the animated typing effect, as motion-sensitive users may find it distracting
- Confirm that the dark mode grain texture does not create visual noise that impairs readability for users with certain visual conditions
- Maintain focus indicators on all interactive elements, particularly the pill action bar where individual actions may be less visually distinct than standard buttons
- Verify that the brand mark's three colors are distinguishable for colorblind users when used as status or category indicators

## Scope note

This guide covers the homepage hero and marketplace landing page surfaces visible in the supplied images. Interior pages, dashboard interfaces, mobile breakpoints, form interactions, and motion specifications beyond the typing animation are not represented. Measurements are practical adaptation targets derived from visible proportions rather than extracted specifications.
