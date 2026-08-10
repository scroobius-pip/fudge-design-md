# How openinterpreter.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/openinterpreter.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with laptop product mockup showing PDF form-filling interface, navigation bar, and primary CTA buttons on dark background](https://pin.fontofweb.com/6840?format=jpg)](https://design.withfudge.com/share/pin-6840)

[Hero section with laptop product mockup showing PDF form-filling interface, navigation bar, and primary CTA buttons on dark background](https://design.withfudge.com/share/pin-6840)

[![Full viewport hero with centered laptop displaying agent chat interface, top navigation, and bottom action bar with download button](https://pin.fontofweb.com/6839?format=jpg)](https://design.withfudge.com/share/pin-6839)

[Full viewport hero with centered laptop displaying agent chat interface, top navigation, and bottom action bar with download button](https://design.withfudge.com/share/pin-6839)

## Overview

The Open Interpreter landing page presents a single-product story through an immersive, photography-first approach. The design centers on a cinematic hero section where a laptop product mockup appears to float against a dark, atmospheric background. The visual system prioritizes the product interface itself—showing the agent filling PDF forms and managing documents—while keeping all chrome minimal and unobtrusive. The overall impression is of a sophisticated, capable tool that works invisibly alongside the user.

The page structure is deliberately simple: a fixed navigation bar at the top, the expansive hero section occupying the majority of viewport height, and action buttons anchored at the bottom left. This vertical compression creates focus on the product demonstration while the dark canvas allows the illuminated laptop screen to become the natural focal point. The design language speaks to technical users through restraint rather than decoration.

## Colors

The color system is strictly bipolar, built on maximum contrast between absolute black and white with no intermediate grays used for UI elements.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, all surface areas behind content |
| ink | `#FFFFFF` | Primary text on dark backgrounds, headings, body copy |
| surface | `#FFFFFF` | Button fills, inverted card backgrounds, scroll indicator |
| surface-ink | `#000000` | Text on light surfaces, button labels |
| action-surface | `#FFFFFF` | Primary call-to-action button fill |
| action-ink | `#000000` | Primary call-to-action button text |
| nav-ink | `#FFFFFF` | Navigation link text |

The photographic content introduces warm amber and cool slate tones through the laptop screen content and environmental reflections, but these remain strictly within imagery rather than interface elements. The interface itself maintains pure monochrome discipline. The black canvas serves a functional purpose beyond aesthetics: it eliminates visual boundaries, allowing the product photography to feel suspended in space and drawing the viewer's eye directly to the illuminated screen content where the agent's capabilities are demonstrated.

## Typography

The type system uses system sans-serif families across all roles, differentiated by weight, size, and tracking rather than family change. The supplied families are System and System-Uisansserif. This creates a cohesive, utilitarian voice appropriate for developer tooling.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | System | 3rem | 500 | 1 | -0.025em | Main hero heading |
| body | System | 1rem | 400 | 1.5 | 0em | General content, descriptions |
| body-large | System | 1.125rem | 400 | 1.556 | 0em | Hero subheadings, lead paragraphs |
| label | System | 0.875rem | 500 | 1.429 | 0em | Buttons, calls to action |
| nav | System | 0.875rem | 400 | 1 | 0em | Top navigation links |
| secondary-action | System | 0.875rem | 500 | 1.429 | 0em | Text-only secondary actions |

The hero display at 48px with tight line-height and negative letter-spacing creates impactful, poster-like headlines that anchor the page without competing with the product imagery. Body text maintains generous leading for readability at smaller sizes. The label style at 14px with medium weight provides clear affordance for interactive elements without becoming visually heavy. Navigation uses the same 14px size but drops to regular weight, establishing hierarchy through weight contrast rather than size differentiation. The secondary-action style matches the label weight and size but appears without button chrome, creating a paired hierarchy with the primary button.

Verify licensing for these families before production use.

## Layout

The page follows a single-section immersive layout with asymmetric content placement. The hero section occupies the full viewport height with internal spacing that pushes content toward the bottom third, creating generous negative space above where the product photography dominates.

The content block within the hero uses left-aligned text with substantial horizontal padding of approximately 58px from the viewport edge. This creates a comfortable reading measure while maintaining visual connection to the left-aligned navigation above. The vertical rhythm places the headline near the bottom of the viewport with the description and action buttons stacked beneath it in tight succession.

Navigation sits fixed at the top with links arranged horizontally, left-aligned with the content block below. The navigation does not use a distinct background or container, instead floating directly over the hero imagery with white text.

The product mockup itself is centered horizontally and positioned in the upper portion of the viewport, creating a diagonal reading flow from the glowing screen down to the textual content below. A scroll indicator appears at the bottom right, suggesting additional content below the fold.

## Visual language

The visual language derives from cinematic product photography rather than conventional web design patterns. The laptop appears photographed in natural or environmental lighting with shallow depth of field, creating soft bokeh in background foliage. This treatment humanizes the technology and suggests real-world usage rather than sterile studio conditions.

The interface shown on the laptop screen demonstrates the product's actual capabilities—form filling, document reading, conversational agent interaction—with realistic content including actual PDF forms and file lists. This screenshot-within-photography approach provides immediate comprehension of the product's function without requiring abstract explanation.

UI elements throughout maintain extreme minimalism: no borders, no shadows, no background fills on navigation, pure geometric shapes for buttons. The only rounded elements are the pill-shaped primary button and fully circular scroll indicator. This restraint ensures that when color or shape does appear, it carries maximum signal value.

The scroll indicator at bottom right uses a simple downward chevron within a circle, providing subtle wayfinding without visual heaviness.

## Components

### Navigation bar

- **Anatomy**: Horizontal row of text links, left-aligned, with logo mark preceding links
- **Surface**: Transparent, no background fill
- **Typography**: `{typography.nav}`, white text
- **Spacing**: Links padded with `0.75rem` vertical, `0.5rem` right, `1.5rem` left
- **Composition**: Links spaced with comfortable gaps, no separators or underlines

### Primary button

- **Anatomy**: Text label with optional trailing icon (chevron for dropdown)
- **Surface**: `{colors.action-surface}` fill, `{colors.action-ink}` text
- **Typography**: `{typography.label}`
- **Shape**: `0.5rem` border radius, creating soft rectangle rather than full pill
- **Spacing**: `0.75rem` vertical padding, `1rem` horizontal padding
- **Variants**: Default state shows white fill with black text; adjacent text-only link provides secondary action without button chrome

### Secondary button

- **Anatomy**: Text label without background fill, positioned adjacent to primary button
- **Surface**: Transparent, `{colors.ink}` text
- **Typography**: `{typography.secondary-action}`
- **Spacing**: `0.75rem` vertical padding, `1rem` horizontal padding
- **Composition**: Baseline-aligned with primary button, creating a paired action group

### Hero section

- **Anatomy**: Full-viewport container with background product photography, overlaid text block at lower left, scroll indicator at lower right
- **Surface**: `{colors.canvas}` with photographic background
- **Typography**: `{typography.hero-display}` for headline, `{typography.body-large}` for description
- **Spacing**: `30rem` top padding to position content in lower viewport; `3.625rem` horizontal content padding
- **Composition**: Asymmetric with content anchored left, visual weight centered through product image

### Scroll indicator

- **Anatomy**: Circular container with downward chevron icon
- **Surface**: `{colors.surface}` fill, `{colors.surface-ink}` icon
- **Shape**: Full circle via `9999px` radius
- **Position**: Fixed or absolute at bottom right of viewport

## Responsive behavior

The design appears optimized for desktop viewing given the immersive photography and horizontal navigation. At narrower viewports, the left-aligned content block should maintain its padding while the product photography may require repositioning or scaling to preserve the focal point on the laptop screen. The navigation would benefit from collapsing to a hamburger menu or simplified link set on mobile to prevent wrapping.

The generous `30rem` top padding in the hero creates appropriate vertical positioning on large screens but may need reduction on shorter viewports to prevent content from pushing below the fold. The two-button action group should stack vertically on narrow screens with the primary button remaining full-width.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the foundation of all surfaces
- The single type family approach with weight-based hierarchy
- The left-aligned, bottom-weighted composition of the hero
- The photographic realism of the product mockup with environmental context
- The minimal button styling with high-contrast fill

### Avoid
- Adding background fills, borders, or shadows to the navigation
- Introducing accent colors beyond the black/white system
- Centering the hero text, which would fight the left-aligned page rhythm
- Using generic stock photography instead of contextual product imagery
- Expanding the type scale beyond the established six roles

### Recommended build order
1. Establish the black canvas and system font stack
2. Implement the navigation with transparent background and white links
3. Position the hero background image with `object-fit: cover`
4. Place and style the hero text block with proper vertical spacing
5. Style the primary button with white fill and rounded corners
6. Add the scroll indicator with circular container

### Accessibility
- Ensure the white-on-black text meets WCAG AAA contrast ratios (it does at this ratio)
- Provide visible focus states for keyboard navigation since default outlines may be insufficient on black backgrounds
- Consider adding `prefers-reduced-motion` handling for any scroll-triggered animations
- The scroll indicator should be focusable and actionable for keyboard users
- Maintain logical tab order from navigation through hero content to action buttons

## Scope note

This guide covers the single-page landing experience visible in the supplied imagery. Additional pages (Features, Pricing), mobile breakpoints, form interactions, and motion design are not represented. The email capture flow and any download modal or page transition states are outside the current scope. Measurements reflect the desktop viewport as captured.
