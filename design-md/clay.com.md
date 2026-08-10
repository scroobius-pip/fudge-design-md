# How clay.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/clay.com-design)

Last updated: 2026-08-10

## Captured pages

[![Customer testimonial carousel with magenta, green, and blue quote cards featuring OpenAI, Vanta, and other company logos](https://pin.fontofweb.com/5490?format=jpg)](https://design.withfudge.com/share/pin-5490)

[Customer testimonial carousel with magenta, green, and blue quote cards featuring OpenAI, Vanta, and other company logos](https://design.withfudge.com/share/pin-5490)

[![Hero section with 3D claymation landscape, navigation bar, and multi-column footer on off-white background](https://pin.fontofweb.com/5489?format=jpg)](https://design.withfudge.com/share/pin-5489)

[Hero section with 3D claymation landscape, navigation bar, and multi-column footer on off-white background](https://design.withfudge.com/share/pin-5489)

## Overview

Clay's visual system merges a whimsical, handcrafted sensibility with the precision expected of modern B2B software. The brand's signature element is a lush 3D claymation landscape—rolling green hills, textured topiary, and candy-colored paths rendered in a soft, tactile aesthetic that evokes stop-motion animation. This playful imagery sits atop a disciplined interface layer: clean geometric sans-serif typography, generous whitespace, and bold flat-color cards that anchor the composition with confidence. The result is a distinctive tension between organic warmth and systematic clarity, signaling creative possibility without sacrificing usability. The design speaks to growth-minded teams who want powerful tools wrapped in an approachable, human-centered experience.

## Colors

The palette operates in three distinct registers: a neutral foundation for readability, bold saturated hues for emotional impact, and photographic color from the 3D illustrations. The interface relies on high-contrast black typography against warm off-white, while accent colors carry semantic weight through strong cultural associations—magenta for creative energy, green for growth, blue for trust.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, navigation, primary button fill, logo wordmark |
| canvas | #F5F5F0 | Page background, footer panel surface, hero section backdrop |
| surface-light | #FFFFFF | Card interiors, button text on dark surfaces, input fields |
| magenta | #8B0A5C | Testimonial cards, creative/emotional accent blocks |
| green | #0B8C4A | Growth-oriented testimonial cards, positive action contexts |
| blue | #0A4DA6 | Trust-oriented testimonial cards, corporate credibility signals |
| border-subtle | #E5E5E0 | Secondary button borders, dividers, inactive states |

The neutral pair of ink and canvas dominates the structural interface, with canvas providing a warmer, more inviting alternative to pure white. The three saturated hues—magenta, green, and blue—appear as solid fills for testimonial cards, each carrying distinct brand personality while maintaining consistent white text for accessibility. These colors never blend into gradients; they sit as flat planes that contrast sharply with the dimensional claymation photography. The 3D imagery introduces its own extended palette of soft pinks, yellows, and additional greens, but these remain strictly photographic rather than interface colors.

## Typography

Roobert serves as the sole typeface, a geometric sans-serif with clean circular forms and open apertures that balance the organic irregularity of the claymation imagery. The family supports Regular, Medium, and Semi Bold weights, enabling clear hierarchy without introducing additional typefaces. Flowicons and Phosphor provide icon coverage as symbol fonts, not typographic voices.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Roobert | 3.5rem | 600 | 1.1 | -0.02em | Hero headlines, major section titles |
| section-display | Roobert | 2.5rem | 600 | 1.15 | -0.01em | Section headers, testimonial intro |
| body | Roobert | 1rem | 400 | 1.5 | 0 | Paragraph text, descriptions, quotes |
| body-small | Roobert | 0.875rem | 400 | 1.5 | 0 | Footer links, secondary descriptions |
| label | Roobert | 0.75rem | 500 | 1.3 | 0.02em | Buttons, tags, metadata, captions |
| navigation | Roobert | 0.875rem | 500 | 1 | 0 | Primary nav items, dropdown triggers |

Tight negative tracking on display sizes creates a cohesive, contemporary headline presence. Body text maintains neutral spacing for extended reading. The label size at 0.75rem with slight positive tracking optimizes legibility at small sizes for button text and UI chrome. Verify licensing for these families before production use. Phosphor icons are designed by Tobias Fried and Helena Zhang.

## Layout

The page structure follows a centered, contained model with generous breathing room. The hero section occupies full viewport width, allowing the claymation landscape to extend edge-to-edge as an immersive brand moment. Below this, content narrows into a centered container that maintains consistent horizontal margins.

The navigation bar spans full width with internal padding, placing the Clay logo at left, primary links centered, and utility actions at right. This creates a familiar SaaS header pattern that grounds the playful imagery below. The footer breaks from standard flat layouts by floating as a rounded panel above the continuing claymation background, creating depth through overlapping layers.

Content sections stack vertically with substantial section spacing of 6rem, preventing visual crowding and allowing each message to register independently. The testimonial carousel introduces horizontal rhythm, with cards peeking at the viewport edge to indicate scrollability. Grid-based footer organization uses five equal columns for dense link grouping without overwhelming the composition.

## Visual language

The defining visual tension pairs handcrafted 3D illustration with flat, systematic interface elements. The claymation landscapes feature soft, rounded forms with visible texture—bumpy surfaces, imperfect edges, and gentle color gradations within forms rather than between them. This tactile quality contrasts with the crisp vector precision of buttons, cards, and typography.

Shape language favors rounded rectangles over sharp corners. Cards carry 0.75rem radius, the footer panel uses a dramatic 1.5rem radius that softens its large mass, and buttons use modest 0.5rem radius for approachable but compact targets. No elements use fully circular or pill shapes in the visible interface.

Shadows remain minimal or absent in the interface layer, relying instead on color contrast and spatial separation to define hierarchy. The claymation imagery provides its own dimensional cues through modeled lighting, so interface shadows would compete rather than complement.

The brand mark combines a colorful arc icon—suggesting a rainbow or rising motion—with the wordmark in black Roobert. This pairing of symbolic color with neutral typography extends the system's broader strategy of expressive imagery plus restrained interface.

## Components

### Primary action button
- **Anatomy**: Text label with right-pointing arrow icon
- **Surface**: Solid ink fill with white text
- **Typography**: label token, 0.75rem, weight 500
- **Shape**: 0.5rem border radius
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Icon follows text with small gap, creating directional momentum
- **Variants**: Appears in hero and footer contexts with identical styling

### Secondary action button
- **Anatomy**: Text label with right-pointing arrow icon
- **Surface**: Transparent fill with ink text and subtle border
- **Typography**: label token, matching primary button
- **Shape**: 0.5rem border radius, 1px border using border-subtle
- **Spacing**: Identical padding to primary
- **Composition**: Pairs with primary as alternative choice, positioned to its right

### Testimonial card
- **Anatomy**: Quote text, horizontal rule divider, avatar image, name and title, company logo
- **Surface**: Solid saturated fill (magenta, green, or blue variants) with white text
- **Typography**: body token for quote, label token for attribution
- **Shape**: 0.75rem border radius
- **Spacing**: 1.5rem internal padding, generous vertical space between quote and divider
- **Composition**: Avatar and text cluster left, company logo right, creating balanced footer
- **Variants**: Three colorways assign distinct emotional registers to different customer stories

### Navigation dropdown trigger
- **Anatomy**: Text label with downward chevron icon
- **Surface**: Transparent, no visible boundary
- **Typography**: navigation token, 0.875rem, weight 500
- **Composition**: Icon follows text, indicating expandable content

### Footer panel
- **Anatomy**: Clay logo, social icons, multi-column link grid, legal section
- **Surface**: canvas color with large 1.5rem border radius
- **Typography**: section-display for headline, body-small for links, label for tag
- **Spacing**: 3rem internal padding, generous gaps between column groups
- **Composition**: Asymmetrical weighting with larger left content area and balanced link columns

## Responsive behavior

The visible desktop layout suggests a single-column collapse for smaller viewports. The hero headline would scale down while maintaining tight leading. The testimonial carousel would likely become a single-card swipeable interface or stack vertically. Footer columns would reflow from five-across to two-column then single-column, preserving category grouping.

The claymation imagery's aspect ratio may require cropping or repositioning rather than scaling, protecting the composed scene's focal points. Navigation would consolidate into a hamburger menu, with the full link set accessible through overlay or drawer pattern.

Touch targets should maintain minimum 44px height for all interactive elements. The testimonial carousel requires swipe gesture support and visible pagination or progress indication when navigation arrows are hidden.

## Practical implementation guidance

### Preserve
- The warm off-white canvas against pure black text for primary reading
- The three saturated card colors as a rotating or categorical system, not arbitrary decoration
- The rounded panel treatment for major content containers, especially the footer
- The arrow-icon convention on all action buttons, maintaining consistent directional language
- The generous section spacing that lets each message breathe

### Avoid
- Introducing additional typefaces that would compete with Roobert's geometric clarity
- Applying shadows or dimensional effects to interface elements that would clash with the claymation's genuine depth
- Using the testimonial card colors for non-testimonial purposes, which would dilute their semantic association
- Shrinking the hero headline below 2.5rem, which would lose its commanding presence
- Placing text directly over the claymation imagery without sufficient contrast treatment

### Recommended build order
1. Establish the neutral foundation: canvas background, ink text, Roobert family loading
2. Implement the hero section with full-width claymation imagery and centered headline
3. Build the button system with primary and secondary variants
4. Create the testimonial card component with three color variants
5. Assemble the navigation with dropdown triggers and utility actions
6. Construct the rounded footer panel with multi-column link grid

### Accessibility
- Ensure testimonial card white text meets WCAG AA against all three saturated backgrounds
- Provide visible focus indicators that respect the rounded shape language
- Include pause controls for any auto-advancing carousel behavior
- Maintain logical heading hierarchy from hero-display through section-display to body
- Add descriptive alt text for the claymation imagery that conveys its illustrative purpose

## Scope note

This guide covers the pricing page surface including hero, testimonial carousel, and footer regions. Navigation dropdown contents, mobile breakpoint specifics, form interactions, and animation behavior are not represented in the supplied material. Measurements are practical adaptation targets derived from visible composition analysis.
