# How ramen.haus is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ramen.haus-design)

Last updated: 2026-08-10

## Captured pages

[![Split-view portfolio layout with full-bleed ramen photography on the left and minimal white content panel on the right showing the RamenHaus wordmark and navigation controls.](https://pin.fontofweb.com/10558?format=jpg)](https://design.withfudge.com/share/pin-10558)

[Split-view portfolio layout with full-bleed ramen photography on the left and minimal white content panel on the right showing the RamenHaus wordmark and navigation controls.](https://design.withfudge.com/share/pin-10558)

[![Alternate angle of the Tonkotsu Ramen Shio dish showing bonito flakes and scallions with the same split-view composition and pill-shaped pagination buttons.](https://pin.fontofweb.com/10557?format=jpg)](https://design.withfudge.com/share/pin-10557)

[Alternate angle of the Tonkotsu Ramen Shio dish showing bonito flakes and scallions with the same split-view composition and pill-shaped pagination buttons.](https://design.withfudge.com/share/pin-10557)

## Overview

RamenHaus presents a disciplined split-view portfolio system designed to showcase food photography with editorial restraint. The layout divides the viewport into two distinct zones: a full-bleed image panel that dominates the left portion of the screen, and a minimal white content panel that anchors the right. This architectural approach treats photography as the primary content while maintaining a clean, navigable interface for project information and wayfinding.

The visual system is built on extreme contrast between the rich, dark photographic surfaces and the pristine white content areas. Typography plays a structural role rather than a decorative one—display text is bold and tightly tracked, while supporting information remains small and unobtrusive. The overall impression is of a gallery wall or museum placard: the image commands attention, and the interface recedes until needed.

The design serves a portfolio context where individual projects are presented sequentially. Navigation is handled through discrete pill-shaped controls that suggest movement through a collection without demanding attention. The color palette is intentionally limited to near-black, warm charcoal, and pure white, allowing the natural colors of the photography to provide all chromatic interest.

## Colors

| token | value | use |
|---|---|---|
| ink | #111111 | Primary text, wordmark, display headings, active borders |
| ink-secondary | #4C4848 | Secondary text, metadata, captions |
| canvas | #FFFFFF | Content panel background, button surfaces, page ground |
| surface | #000000 | Image panel background, dark photographic ground |
| border | #111111 | Button outlines, pagination borders, structural dividers |
| border-inverse | #FFFFFF | Borders on dark surfaces when needed |

The color system operates in a strict light mode with no dark-mode inversion. The near-black ink provides maximum legibility against the white canvas, while the warm charcoal of ink-secondary offers subtle hierarchy for supporting information. The dark surface color serves as a photographic ground that absorbs light and makes food imagery appear to float forward.

Image palette colors drawn from the photography include warm creams, caramelized browns, fresh greens from scallions, and the blue-grey of ceramic bowls. These remain strictly photographic and are not used as interface tokens. The limited interface palette ensures that no UI color competes with the food photography for attention.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Bricolage Grotesque | 3.225rem | 600 | 1 | -0.07em | Project titles, hero statements |
| section-display | Bricolage Grotesque | 1.75rem | 300 | 1 | -0.02em | Wordmark, section labels |
| body | -apple-system | 0.875rem | 400 | 1.3 | 0em | Metadata, captions, descriptions |
| body-large | Bricolage Grotesque | 1.125rem | 300 | 1.3 | -0.02em | Extended descriptions, lead paragraphs |
| label | -apple-system | 0.6875rem | 600 | 1 | 0em | Navigation buttons, UI controls |
| navigation | -apple-system | 0.875rem | 400 | 1.3 | 0em | Navigation links, wayfinding text |

The type system relies on two families with clearly separated roles. Bricolage Grotesque handles all display and heading work at weights 300 and 600, with aggressive negative tracking on large sizes that creates a compressed, editorial presence. The hero-display size at 51.6px (3.225rem) is tightly tracked at -0.07em, giving project titles a constructed, almost architectural quality. The section-display weight at 300 provides the wordmark with a lighter, more open character.

System UI text uses -apple-system at two sizes: 14px for readable metadata and navigation, and 11px for compact labels. The 11px size at weight 600 serves navigation controls with maximum density and clarity. The body-large role at 18px extends the hierarchy for instances where slightly more prominent text is needed while maintaining the light weight and negative tracking of the display family.

Verify licensing for these families before production use.

## Layout

The split-view architecture divides the viewport horizontally into an image panel and content panel. The image panel occupies approximately 65% of the width and extends full-bleed to the top, left, and bottom edges. The content panel fills the remaining width with generous internal padding.

The content panel uses a vertical stack with three distinct zones: the wordmark anchored at top, the project information centered in the available space, and pagination controls fixed at the bottom. This creates a stable reading path from brand identification through project context to navigation action.

Spacing follows a base unit of 0.125rem (2px), with derived values at 0.3125rem, 0.625rem, 1rem, 1.2rem, and 3rem. The generous 3rem padding creates breathing room around all content panel elements, while the 0.625rem compact spacing handles internal button padding. The 8px gap value appears in navigation clusters, creating tight but distinct groupings of related controls.

The image panel background uses the dark surface color to prevent flash during loading and to provide a consistent ground for photographs that may not fill the entire frame. No grid system is visible; the layout relies on the natural proportions of the split view and the centered alignment of content within the right panel.

## Visual language

The visual language is characterized by restraint, precision, and the deliberate suppression of decorative elements. Surfaces are flat with no gradients, no texture, and no shadow except for a single subtle outer shadow (0px 4px 20px rgba(0,0,0,0.12)) that may appear on elevated elements. The inset highlight shadow (inset 0px 1px 0px rgba(255,255,255,0.1)) suggests subtle depth on interactive surfaces without breaking the flat aesthetic.

Corners are predominantly pill-shaped or fully circular for interactive elements, while major structural panels remain square. The 999px radius creates capsule buttons and navigation elements that feel soft and approachable against the otherwise rectilinear layout. Small 4px radii appear on secondary elements. Sharp corners define the image and content panels themselves, creating a clear architectural boundary between the photographic and typographic zones.

The photography treatment is documentary and direct: overhead or near-overhead angles, natural lighting, visible texture in ingredients, and no artificial styling. The dark background of the image panel creates a studio-like environment that isolates the subject. This treatment aligns with contemporary food editorial photography and positions the portfolio as professional and contemporary.

## Components

### Wordmark

- **Anatomy**: Text-only brand identifier, no icon or symbol
- **Surface and text color**: `{colors.ink}` on `{colors.canvas}`
- **Typography**: `{typography.section-display}` at weight 300
- **Spacing**: Positioned at top of content panel with `{spacing.generous}` padding from edges
- **Composition**: Left-aligned within content panel, establishing brand presence before project content

### Project Display

- **Anatomy**: Project title and metadata stack
- **Surface and text color**: `{colors.ink}` title on `{colors.canvas}`, `{colors.ink-secondary}` metadata
- **Typography**: Title uses `{typography.hero-display}`, metadata uses `{typography.body}`
- **Spacing**: Centered vertically in remaining content panel space below wordmark and above pagination
- **Composition**: Tight vertical stack with minimal gap between title and metadata line

### Pagination Controls

- **Anatomy**: Previous button, index button, next button in horizontal cluster
- **Surface and text color**: `{colors.canvas}` background, `{colors.ink}` text and borders
- **Typography**: Index label uses `{typography.label}` at weight 600, uppercase treatment
- **Shape**: Icon buttons use 50% border-radius (circular), index button uses `{rounded.pill}` (capsule)
- **Border**: 1px solid `{colors.border}` on all controls
- **Spacing**: 8px gap between controls, compact padding inside index button
- **Composition**: Clustered at bottom of content panel, centered horizontally

### Image Panel

- **Anatomy**: Full-bleed container for project photography
- **Surface**: `{colors.surface}` background
- **Shape**: `{rounded.none}`—square corners defining the panel edge
- **Composition**: Image centered within panel, potentially cropped to fill available space
- **Behavior**: Serves as the dominant visual element, with no overlay text or interface elements

### Content Panel

- **Anatomy**: Vertical stack containing wordmark, project display, and pagination
- **Surface**: `{colors.canvas}` background
- **Shape**: `{rounded.none}`—square corners meeting the image panel boundary
- **Spacing**: `{spacing.generous}` internal padding on all sides
- **Composition**: Flex column with space-between distribution, creating natural zones for brand, content, and navigation

## Responsive behavior

The split-view layout should maintain its horizontal division on desktop viewports. As viewport width decreases, the image panel may transition to a stacked arrangement with the image appearing above the content panel. The content panel padding should reduce from `{spacing.generous}` to `{spacing.standard}` on smaller screens.

Typography scales should maintain their relative proportions. The hero-display size may reduce to `{typography.section-display}` dimensions on mobile to prevent excessive line breaks. Navigation controls should remain touch-accessible with minimum 44px tap targets.

The pill-shaped buttons are well-suited to touch interaction due to their generous vertical padding and clear visual boundaries. Consider increasing the gap between pagination controls slightly on mobile to prevent accidental activation.

## Practical implementation guidance

### Preserve
- The strict split-view proportion that gives photography dominant presence
- The near-black and white color contrast that creates gallery-like restraint
- The tight negative tracking on Bricolage Grotesque display sizes
- The pill-shaped navigation controls with 1px hairline borders
- The generous white space in the content panel

### Avoid
- Adding color to the interface palette that competes with photography
- Using shadows or gradients that break the flat surface language
- Introducing decorative elements, icons, or illustrations beyond the wordmark
- Crowding the content panel with multiple information hierarchies
- Rounding corners on the image panel or content panel themselves

### Recommended build order
1. Establish the split-view grid with image panel and content panel
2. Implement the color tokens and apply canvas/surface backgrounds
3. Add Bricolage Grotesque with correct weights and tracking
4. Build the wordmark and project display stack
5. Create pagination controls with pill and circle variants
6. Refine spacing and responsive behavior

### Accessibility
- Ensure the 1px button borders maintain sufficient contrast against the white canvas
- Provide visible focus states on pagination controls, potentially using the ink background with inverse text
- Consider adding aria-labels to icon-only previous/next buttons
- Maintain readable text sizes; the 11px label size should be used only for brief, non-critical labels
- Ensure touch targets meet minimum size requirements on mobile implementations

## Scope note

This guide covers the desktop homepage portfolio view as captured. Mobile breakpoints, additional pages, hover states, loading sequences, and motion transitions are not represented in the available material. The type scale uses exact values from the source interface with no rounding or adaptation needed.
