# How mi.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mi.com-design)

Last updated: 2026-08-10

## Captured pages

[![Night photography showcase with fiery orange imagery and red headline text on deep black canvas with carousel indicators](https://pin.fontofweb.com/2482?format=jpg)](https://design.withfudge.com/share/pin-2482)

[Night photography showcase with fiery orange imagery and red headline text on deep black canvas with carousel indicators](https://design.withfudge.com/share/pin-2482)

[![Camera module hero with warm gradient background transitioning from peach to dark, featuring large white display typography and partnership body copy](https://pin.fontofweb.com/2481?format=jpg)](https://design.withfudge.com/share/pin-2481)

[Camera module hero with warm gradient background transitioning from peach to dark, featuring large white display typography and partnership body copy](https://design.withfudge.com/share/pin-2481)

[![Durability section with exploded phone render, coral accent headlines, and three dark specification cards with percentage statistics](https://pin.fontofweb.com/2480?format=jpg)](https://design.withfudge.com/share/pin-2480)

[Durability section with exploded phone render, coral accent headlines, and three dark specification cards with percentage statistics](https://design.withfudge.com/share/pin-2480)

[![Design details grid showing phone curves and camera deco with rounded image panels and subtle border treatments on black background](https://pin.fontofweb.com/2479?format=jpg)](https://design.withfudge.com/share/pin-2479)

[Design details grid showing phone curves and camera deco with rounded image panels and subtle border treatments on black background](https://design.withfudge.com/share/pin-2479)

## Overview

The Xiaomi global product page system presents flagship devices through a dark, immersive visual environment that places photography and industrial design at center stage. The design language operates on a principle of restraint: the canvas remains consistently deep black, allowing product imagery to generate all warmth and visual energy. Typography is large, confident, and spaced for cinematic impact, while accent colors appear selectively to guide attention toward key claims and emotional beats. The overall experience feels like a premium editorial spread translated into a scroll-driven format—each section is a self-contained composition with generous breathing room, clear hierarchy, and deliberate pacing. The system supports both hero moments with full-bleed imagery and information-dense specification grids without breaking its cohesive dark atmosphere.

## Colors

The color system is built on a near-black foundation with warm photographic accents and carefully controlled surface elevations. Every color serves a specific role in maintaining contrast, directing attention, or creating depth through layered surfaces.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Primary page background, hero sections, and immersive photography backdrops |
| ink | `#ffffff` | Primary text, headlines, and high-priority UI elements |
| muted-ink | `#a0a0a0` | Secondary body copy, captions, and supporting descriptive text |
| accent | `#ff6b5b` | Feature callouts, emotional headlines, and key differentiators |
| surface | `#1a1a1a` | Card backgrounds, specification panels, and contained content areas |
| surface-elevated | `#2a2a2a` | Hover states, active indicators, and subtle depth layers |
| border-subtle | `#333333` | Panel outlines, image borders, and structural dividers |

The relationship between colors follows a clear logic: the canvas absorbs light while ink reflects it at maximum contrast. The accent color appears only in moments of product storytelling—durability claims, camera capabilities, design philosophy—never in functional UI like buttons or navigation. Surface colors create elevation without breaking the dark continuity; they are warm-tinted grays that feel integrated rather than overlaid. Photographic content supplies its own palette of warm oranges, ambers, and skin tones that animate the otherwise neutral system. No light mode variant is visible in the supplied material.

## Typography

The type system relies on Mi Sans Latin Vf For Web as its sole material typeface, deployed in a limited but expressive range of sizes. The variable font weight range supports everything from delicate body copy to commanding display headlines without introducing additional families. Source Sans Pro appears in the font stack but serves no visible typographic role in the captured sections. Iconfont handles symbol and interface icon needs and should not be used for text content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Mi Sans Latin Vf For Web | 5rem | 700 | 1.1 | -0.02em | Primary product names and section-defining statements |
| section-display | Mi Sans Latin Vf For Web | 3.5rem | 700 | 1.15 | -0.01em | Subsection headlines and feature titles |
| accent-headline | Mi Sans Latin Vf For Web | 2rem | 600 | 1.2 | 0 | Warm-colored lead-in phrases and emotional hooks |
| body-large | Mi Sans Latin Vf For Web | 1.25rem | 400 | 1.6 | 0 | Partnership descriptions and narrative copy |
| body | Mi Sans Latin Vf For Web | 1rem | 400 | 1.6 | 0 | Technical specifications and detailed explanations |
| label | Mi Sans Latin Vf For Web | 0.875rem | 500 | 1.4 | 0.05em | Category tags, uppercase section markers |

The display sizes use tight negative tracking to create cohesive word-shapes at large scale, while body sizes relax into neutral spacing for extended reading. The accent-headline token bridges display and body, sized for punchy lead-in phrases that precede larger white headlines. Labels are set in uppercase with expanded tracking for categorical clarity. Verify licensing for these families before production use.

## Layout

The layout system is fundamentally section-based, with each major content block occupying a full viewport width and substantial vertical space. Sections stack vertically with no visible borders between them, creating a continuous scroll experience where content emerges from and recedes into the black canvas.

The grid is asymmetric and content-driven rather than rigidly modular. Hero sections center all elements—headline, body copy, and imagery—creating a focal point that commands attention. Feature sections with photography often use full-bleed images with text overlaid or positioned above. Specification and detail sections employ multi-column layouts: the durability section shows a central exploded product render with three equal cards below, while the design details section uses an irregular two-panel arrangement with one large image on the left and two stacked images on the right.

Spacing between sections is generous, typically 8rem or more, allowing each composition to register as a distinct moment. Internal spacing within sections follows a consistent rhythm: category labels sit 2rem above headlines, headlines maintain 1.5rem to body copy, and body copy leads into imagery with 3rem of separation. Cards and panels use 2rem internal padding, with 1rem gaps between related cards.

The system avoids sidebars, navigation rails, or persistent secondary content areas. The viewport is treated as a stage for single-subject presentation.

## Visual language

The visual language is photographic-first and product-obsessed. Every section is built around high-fidelity imagery—whether lifestyle photography, technical renders, or macro product details. Images are never decorative; they carry the narrative weight of the page.

Photography style favors dramatic lighting with strong shadows and warm highlights. Night and low-light scenes demonstrate camera capabilities while reinforcing the dark system aesthetic. Product renders use realistic materials—brushed aluminum, textured glass, leather grain—with lighting that matches the photographic environment. The transition between real photography and CGI is seamless.

Shape language is restrained. Rounded rectangles define cards and image panels with 1rem to 1.5rem radii. The pill shape appears only for functional controls like carousel indicators and pause buttons. There are no sharp corners in the interface layer, though product photography itself contains precise edges and mechanical details.

Motion is implied through the scroll-driven structure. Carousel indicators suggest swipeable content galleries. The exploded phone render in the durability section implies assembly and disassembly animation. These hints suggest a system designed for motion even when captured in still states.

## Components

### Hero section

The hero section presents a single product or feature with maximum visual impact. It consists of a category label set in uppercase, a large display headline, optional body copy, and full-bleed or centered imagery. The background is always canvas black. Text alignment is center. The section may include carousel pagination dots at the bottom, rendered as small circles: active state uses filled ink, inactive states use hollow circles with border-subtle. Spacing from label to headline is 2rem, from headline to image is 3rem, and from image to pagination is 4rem.

### Feature showcase panel

This component presents a product capability with atmospheric background imagery. The background transitions from warm tones—peach, amber, soft gold—at the top to deep black at the bottom, creating a natural vignette that draws the eye toward the centered product. The product image sits in the lower half, emerging from darkness. Above it, a category label and large display headline anchor the composition. Body copy appears below the product in muted-ink, centered, with maximum width constrained for readability. The warm gradient is photographic rather than CSS-generated, ensuring realistic light falloff and lens effects.

### Specification card grid

Specification cards appear in horizontal rows of three, each card sharing equal width. Cards use surface background with 1rem border radius and 2rem internal padding. Each card contains a technical label at top, a large statistic or claim in section-display typography, and a supporting description in body size. Cards are separated by 1rem gaps. The statistics use ink color for maximum impact. A subtle border in border-subtle may outline each card, creating definition against the canvas background without heavy visual weight.

### Detail image panel

Detail panels present close-up product photography in rounded containers with 1.5rem border radius. Images fill their containers completely with no visible padding between image and border. Text overlays appear in the upper-left corner of each panel, with a small label in muted-ink above a concise headline in ink. Panels may be arranged in asymmetric grids: one large panel occupying roughly 55% width with two stacked panels sharing the remaining 45%. The arrangement creates visual rhythm while maintaining equal prominence for each detail claim.

### Media control button

A circular pause/play button appears as a floating element in media-heavy sections. It uses surface-elevated background with ink icon color, rendered at approximately 3rem diameter with full pill rounding. Positioning is bottom-right of the media container with 2rem offset from edges.

## Responsive behavior

The design is captured at desktop viewport width and assumes a landscape-oriented presentation. The large display typography, generous section spacing, and multi-column card grids all depend on adequate horizontal space. When adapting to narrower viewports, the following adjustments should be considered: hero headlines should scale down to section-display size, multi-column card grids should collapse to single-column stacking with maintained card proportions, and asymmetric image panels should reflow to equal-width vertical stacking. The dark canvas and warm accent system will remain effective across all viewport sizes. Touch targets for carousel controls and media buttons should expand to minimum 44px for mobile interaction.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the foundation of every section; any deviation weakens the immersive quality
- Generous vertical spacing between sections; the pacing is as important as the content
- The warm accent color for emotional storytelling moments only, never for functional UI
- Seamless integration of photography and product renders through matched lighting
- Centered text alignment in hero and feature sections for declarative impact

### Avoid
- Adding borders or shadows that compete with product photography for attention
- Using the accent color for buttons, links, or navigation—reserve it for headlines and claims
- Introducing additional typefaces; the single-family system is integral to the clean aesthetic
- Lightening the canvas for "contrast sections"; the system commits fully to dark immersion
- Crowding the viewport with multiple competing focal points

### Recommended build order
1. Establish the canvas black background and ink text defaults
2. Implement the type scale with Mi Sans, verifying variable font weight rendering
3. Build the hero section with centered label-headline-image stack and carousel indicators
4. Create the specification card component with surface background and consistent padding
5. Implement the detail panel grid with rounded image containers and overlay text
6. Add the feature showcase panel with gradient-background product presentation
7. Polish spacing rhythm and section transitions

### Accessibility
- Ensure all text over photography maintains minimum 4.5:1 contrast; the dark system naturally supports this for white text
- Provide visible focus indicators for carousel navigation and media controls
- Include pause functionality for any auto-advancing carousels
- Use semantic heading hierarchy despite the visual flattening of large display sizes
- Consider reduced-motion preferences for implied scroll and carousel animations

## Scope note

This guide covers the Xiaomi 15 Ultra product page as captured in desktop viewport states. Mobile layouts, navigation systems, footer content, e-commerce flows, and interactive states including hover, focus, and loading are not represented in the supplied material. Measurements are practical adaptation targets derived from visible proportions. The global homepage and other product pages may extend or vary this system.
