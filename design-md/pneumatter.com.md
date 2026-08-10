# How pneumatter.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/pneumatter.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero viewport with starfield background, centered serif wordmark PNEUMATTER, and ethereal cloud formation at bottom edge](https://pin.fontofweb.com/3085?format=jpg)](https://design.withfudge.com/share/pin-3085)

[Hero viewport with starfield background, centered serif wordmark PNEUMATTER, and ethereal cloud formation at bottom edge](https://design.withfudge.com/share/pin-3085)

[![Ethos modal overlay with dark translucent backdrop, body text, inline icons, and faint ghosted wordmark behind content](https://pin.fontofweb.com/3084?format=jpg)](https://design.withfudge.com/share/pin-3084)

[Ethos modal overlay with dark translucent backdrop, body text, inline icons, and faint ghosted wordmark behind content](https://design.withfudge.com/share/pin-3084)

## Overview

Pneumatter presents itself as a research laboratory exploring the boundary between atmosphere and structure, and its visual system extends that conceptual premise into every surface. The design is resolutely dark, immersive, and minimal—an interface that behaves more like a viewport into deep space than a conventional website. The hero viewport fills the entire screen with a dense starfield against pure black, anchoring the eye with a centered serif wordmark that appears to float in the void. Below, an ethereal formation of luminous cloud or vapor rises from the bottom edge, creating a horizon line that separates the celestial from the terrestrial. Navigation sits at the top center in small, spaced capitals, almost as faint as distant stars. When content surfaces, it does so through a translucent modal overlay that preserves the starfield as a ghosted presence behind the text. The overall effect is contemplative, scientific, and poetic—typography and imagery collaborate to make air itself feel tangible.

## Colors

The palette is severely restricted, built from the tension between absolute darkness and the pale luminosity of atmospheric phenomena. Every color serves a specific environmental role rather than a conventional UI function.

| token | value | use |
|---|---|---|
| void | #000000 | Primary canvas, hero background, modal backdrop base, deepest space |
| mist | #d5d0c9 | Primary text on dark surfaces, wordmark fill, cloud highlights |
| atmosphere | #a4b8b0 | Secondary text, muted body copy, atmospheric mid-tones in imagery |
| twilight | #2f2f2f | Ghosted elements, faint structural lines, hover or active states |

The void color establishes the dominant spatial condition: an unbroken black field that allows photography and typography to emerge with maximum contrast. Mist provides the primary reading color, a warm gray-white that avoids the clinical harshness of pure white while maintaining excellent legibility against black. Atmosphere appears in the cloud formations and in secondary text, a desaturated blue-green that evokes the thin color of sky at altitude. Twilight serves for elements that must be present but not insistent—ghosted watermarks, subtle borders, or states that require differentiation without visual weight. No accent colors intrude; the system achieves hierarchy through luminance and scale rather than hue.

## Typography

The typographic system relies on a single family, Playfair, used across all roles with weight and spacing variations to establish hierarchy. Playfair is a transitional serif with high contrast and delicate hairlines, designed by Claus Eggers Sørensen. Its classical proportions and generous letterforms suit the project's ambition to merge scientific rigor with poetic atmosphere.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Playfair | 4rem | 400 | 1 | 0.12em | Main wordmark, primary identity moments |
| section-display | Playfair | 2rem | 400 | 1.2 | 0.04em | Modal headings, section titles |
| body | Playfair | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions, explanations |
| label | Playfair | 0.75rem | 400 | 1.4 | 0.08em | Navigation, captions, metadata |

The hero-display token applies extreme letter-spacing to the wordmark, spreading the capitals across the horizontal field so that each letter occupies its own territory in the void. This treatment transforms the name into an architectural element, a sequence of pillars or intervals. Section-display relaxes the spacing for reading comfort while maintaining the ceremonial quality of all-caps or title-case headings. Body text returns to natural letter-spacing with generous line height, allowing long-form content about pneumatic architecture to breathe. The label token compresses size but expands tracking, creating the small, distant quality of navigation items that appear almost as stellar coordinates. Verify licensing for these families before production use.

## Layout

The layout system is fundamentally viewport-based, treating the browser window as a fixed frame through which content is revealed. There is no conventional page scroll in the initial state; instead, the hero occupies 100% of the visible area and holds the viewer in a contemplative pause.

The hero viewport centers its content both vertically and horizontally. The wordmark sits at the optical center, slightly above the mathematical midpoint to account for the visual weight of the cloud formation rising from below. Navigation is positioned at the top center, equidistant from the edges, in a horizontal row with generous gaps between items. This top-center placement avoids the institutional authority of left-aligned navigation and the commercial familiarity of right-aligned utility menus.

Content surfaces through modal overlays that cover the full viewport. These overlays use a semi-transparent black background that preserves the starfield as a dim presence behind the text, maintaining spatial continuity. The modal content is left-aligned with comfortable margins, typically occupying a central column that does not extend to the viewport edges. This columnar restraint prevents the text from feeling lost in the wide dark field.

Spacing follows a base unit of 0.25rem, with section-level gaps of 6rem for major structural divisions. Component internal padding uses multiples of the base unit: 1rem for compact elements, 2rem for comfortable reading blocks, 4rem for major structural containers. The system avoids borders and separators, relying entirely on spatial interval to organize information.

## Visual language

The visual language is built from three primary materials: the starfield, the cloud horizon, and the ghosted wordmark. These elements recur across states to create a coherent world that feels continuous rather than paginated.

The starfield is dense and evenly distributed, suggesting deep space rather than a decorative pattern. It serves as the permanent ground of the interface, visible behind all content layers. The cloud formation at the bottom edge is soft, luminous, and slightly green-tinted, rising like vapor or the limb of a planetary atmosphere. Its upper boundary is irregular and organic, contrasting with the geometric precision of the typography.

The ghosted wordmark appears behind modal content at extremely low opacity, functioning as a watermark or spatial anchor. This treatment prevents the modal from feeling like a disconnected popup; instead, it reads as a temporary focusing of attention within the same continuous space.

Iconography in the content layer is minimal and linear, appearing as small geometric symbols alongside text. These icons use the atmosphere color and maintain the same delicate weight as the typography's hairlines. The overall effect is of a technical document or research journal translated into an immersive digital environment.

## Components

### Hero viewport

- **Anatomy**: Full-viewport container with three layers—starfield background, centered text block, cloud foreground.
- **Surface**: Background color is pure void black. No gradients, no borders, no decorative frames.
- **Typography**: Wordmark uses hero-display token with mist color. Subtitle or tagline uses body token at slightly reduced opacity.
- **Shape**: Rectangular, edge-to-edge, no border radius.
- **Spacing**: Text block centered with vertical offset toward the upper half. Cloud formation anchored to bottom edge, bleeding below the fold.
- **Composition**: All elements centered horizontally. Navigation floats above the wordmark with ample vertical clearance.

### Navigation

- **Anatomy**: Horizontal row of text links, typically four items.
- **Surface**: Transparent background, no visible container.
- **Typography**: Label token in mist color. The final item uses a distinct treatment—slightly brighter or with subtle emphasis—to indicate a primary action or external destination.
- **Shape**: No bounding box, no underline, no visible hit state in the static view.
- **Spacing**: Items separated by approximately 2rem of horizontal space.
- **Composition**: Centered at top of viewport, positioned above the optical center of the hero.

### Modal overlay

- **Anatomy**: Full-viewport overlay with semi-transparent backdrop, scrollable content column, and close control.
- **Surface**: Backdrop is void at approximately 85% opacity. Content area has no distinct background color, relying on the darkened backdrop for contrast.
- **Typography**: Heading uses section-display in mist. Body uses body token in atmosphere, with mist for emphasized phrases or links.
- **Shape**: Full-bleed overlay, no rounded corners, no shadow.
- **Spacing**: Content column centered with horizontal margins of approximately 4rem. Internal paragraph spacing uses 1rem to 1.5rem.
- **Composition**: Close control positioned at top right. Ghosted wordmark visible at extreme low opacity behind content, centered.
- **Variants**: Single visible state in the supplied images; implementation should consider scroll behavior and focus management.

### Content text block

- **Anatomy**: Flowing paragraphs with occasional inline icons, emphasized phrases, and block quotations.
- **Surface**: No background distinct from modal overlay.
- **Typography**: Body token for paragraphs. Emphasized terms use atmosphere or mist with possible weight increase. Block quotations use left border or indentation with slightly increased leading.
- **Shape**: No visible borders except possible subtle left rule for quotations.
- **Spacing**: Paragraph spacing approximately 1.5rem. List items separated by 1rem with icon markers.
- **Composition**: Left-aligned, maximum line length comfortable for reading.

## Responsive behavior

The design's viewport-centric nature suggests strong sensitivity to screen dimensions, though the supplied images show only a desktop presentation. Implementation should preserve the hero's immersive quality across aspect ratios: on taller viewports, the cloud formation should maintain its bottom-edge anchor while the wordmark adjusts vertically to retain optical centering. On narrower viewports, the extreme letter-spacing of the hero-display token should compress to prevent overflow, potentially reducing to section-display spacing values. The modal content column should narrow proportionally, maintaining readable line lengths rather than filling the width. Navigation items may require horizontal scrolling or collapse to a single trigger on very small screens. The starfield background should scale to cover without distortion, treating it as a fixed-position layer rather than a scrolling element.

## Practical implementation guidance

### Preserve
- The absolute darkness of the void background; any lightening destroys the spatial illusion.
- The extreme letter-spacing of the hero wordmark; this is the system's most distinctive gesture.
- The continuous presence of the starfield behind all content layers.
- The delicate weight of Playfair at display sizes; heavier weights will feel crude against the ethereal imagery.
- The bottom-anchored cloud formation as a permanent horizon element.

### Avoid
- Adding conventional UI chrome such as cards, borders, or drop shadows.
- Introducing bright accent colors that would break the monochromatic atmosphere.
- Using sans-serif families for any text role; the serif character is integral to the poetic tone.
- Creating hard transitions between states; the system favors dissolves and continuous presence.
- Scrolling the hero viewport away; content should overlay rather than replace.

### Recommended build order
1. Establish the void background and fixed starfield layer.
2. Implement the centered wordmark with hero-display typography and extreme tracking.
3. Add the cloud formation as a bottom-anchored foreground layer.
4. Build the top-center navigation with label token spacing.
5. Create the modal overlay system with semi-transparent backdrop and scrollable content column.
6. Add the ghosted watermark behind modal content.
7. Implement content typography with proper hierarchy and inline icon placement.

### Accessibility
- Ensure the starfield does not trigger photosensitive responses; the field should be static or extremely slow-moving.
- Provide sufficient color contrast for body text; the atmosphere color on darkened backdrop should be verified against WCAG guidelines, with mist as a fallback for critical content.
- Make modal focus trapping explicit, with clear close controls and escape key behavior.
- Consider reduced-motion preferences for any parallax or transition effects.
- Ensure navigation remains keyboard-accessible despite its minimal visual presence.

## Scope note

This guide covers the landing viewport and ethos modal as visible on desktop. Mobile layouts, additional content sections, animation behavior, and interactive states such as hover or loading are not represented in the supplied images. Measurements are practical adaptation targets.
