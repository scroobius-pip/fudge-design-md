# How witharc.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/witharc.co-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large 'Design partner for busy founders' headline, client logos, and profile card with orange gradient and vinyl shelf imagery](https://pin.fontofweb.com/6764?format=jpg)](https://design.withfudge.com/share/pin-6764)

[Hero section with large 'Design partner for busy founders' headline, client logos, and profile card with orange gradient and vinyl shelf imagery](https://design.withfudge.com/share/pin-6764)

[![Pricing section showing Partnership and Sprint cards with calendar booking interface and Cal.com embed](https://pin.fontofweb.com/6763?format=jpg)](https://design.withfudge.com/share/pin-6763)

[Pricing section showing Partnership and Sprint cards with calendar booking interface and Cal.com embed](https://design.withfudge.com/share/pin-6763)

[![Mission statement with bold keywords, testimonial card, and dark pricing cards beginning to appear](https://pin.fontofweb.com/6762?format=jpg)](https://design.withfudge.com/share/pin-6762)

[Mission statement with bold keywords, testimonial card, and dark pricing cards beginning to appear](https://design.withfudge.com/share/pin-6762)

## Overview

Arc is a creative studio positioned as a design partner for busy founders. The site's visual system communicates confidence through extreme scale contrast and disciplined restraint. The interface alternates between near-white canvas sections and deep black surfaces, using typography as the primary design element rather than decorative graphics. The overall impression is editorial and direct: large Grotesk headlines dominate each section, while supporting text remains small and measured. The site functions as both a portfolio presentation and a service offering, with embedded booking tools and pricing structures integrated directly into the page flow. Visual hierarchy is established through size alone—there are no accent colors beyond black, white, and the occasional photographic or interface element from embedded content.

## Colors

The palette is intentionally minimal, relying on value contrast rather than hue variation. Black serves as the primary structural color, appearing in headlines, dark card surfaces, and the primary action buttons. White and off-white provide relief and establish reading zones. The near-black surface color creates subtle depth in dark cards without the harshness of pure black.

| token | hex | use |
|---|---|---|
| ink | #000000 | Primary text, dark backgrounds, primary buttons, availability badge |
| surface | #101010 | Dark pricing cards, elevated black surfaces |
| canvas | #F9F9F9 | Page background in light sections, subtle field behind content |
| paper | #FFFFFF | Light card backgrounds, button fills, text on dark surfaces |
| action | #000000 | Primary button backgrounds, interactive emphasis |
| action-text | #FFFFFF | Text on primary buttons, labels on dark surfaces |

The color system operates in two modes: light sections use canvas or paper backgrounds with ink text, while dark sections invert to surface or ink backgrounds with paper text. There are no gradient backgrounds in the interface itself; any color variation comes from embedded imagery, profile cards, or third-party widgets. The green dot in the availability badge is a functional indicator rather than a brand accent. Photographic content introduces warm oranges and natural tones, but these remain content-specific rather than systemic.

## Typography

Two families drive the typographic system: Overused Grotesk for all interface and display text, and Geist Mono for captions and technical labels. The Grotesk is deployed at dramatic scale for headlines, with tight negative tracking that creates a compressed, authoritative presence. Body text stays light in weight for readability, while labels and navigation pick up medium weight for functional clarity.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Overused Grotesk | 6rem | 500 | 1 | -0.03em | Main page headlines, hero statements |
| section-display | Overused Grotesk | 3.75rem | 500 | 1 | -0.025em | Section headings, pricing titles |
| body-large | Overused Grotesk | 1.25rem | 400 | 1.4 | normal | Introductory paragraphs, descriptions |
| body-medium | Overused Grotesk | 1rem | 400 | 1.5 | normal | Standard body text, list items |
| body-bold | Overused Grotesk | 1rem | 500 | 1.5 | normal | Emphasized inline text, strong statements |
| label | Overused Grotesk | 1.875rem | 500 | 1.2 | normal | Card titles, pricing tiers |
| mono-caption | Geist Mono | 0.875rem | 400 | 1.43 | normal | Availability badges, technical labels |
| navigation | Overused Grotesk | 1.25rem | 500 | 1.4 | normal | Header buttons, navigation actions |

Overused Grotesk is a variable font family; the Light style is used at 400 and 500 weights. Geist Mono is designed by Basementstudio (Andrés Briganti, Mateo Zaragoza) and distributed by Basementstudio and Vercel. Verify licensing for these families before production use.

## Layout

The page follows a single-column flow with generous horizontal margins. Content is anchored to a consistent page gutter that creates breathing room around all elements. Sections stack vertically with substantial vertical rhythm, allowing each message to occupy its own visual territory.

The grid is fundamentally asymmetric: headlines often occupy the left two-thirds of the available width, while supporting elements or embedded widgets fill the remaining space or sit below. There is no visible sidebar or multi-column navigation. The header floats at the top with minimal height, containing only the wordmark and two action buttons aligned to the right.

Spacing follows a modular system based on a 2px unit. Key measurements include 8rem horizontal page gutters, 4rem section spacing, and 1.5rem internal card padding. Component gaps within sections use 4rem to separate distinct content blocks. The hero section uses extreme vertical padding to center the massive headline within the viewport.

Cards and containers use 24px corner radii for a soft but defined edge. Buttons are fully rounded at 9999px, creating pill shapes that contrast with the squarer card geometry. This radius pairing—soft pills against rounded rectangles—appears consistently across interactive elements.

## Visual language

The visual character is austere and confident, drawing from editorial design and contemporary studio aesthetics. There are no decorative borders, no background patterns, and no drop shadows on static content. The only shadow present is a minimal ambient shadow on certain interactive elements: `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px`, barely perceptible but sufficient to lift buttons slightly from their surfaces.

Imagery appears in two forms: functional embedded content (profile cards, maps, media widgets) and photographic documentation of work. The profile card shown in the hero uses a warm orange gradient background with circular avatar cutouts, introducing the only saturated color in the interface. This warmth serves as a deliberate contrast to the monochrome system, drawing attention to the human element.

Typography carries the entire expressive burden. Keywords within paragraphs receive bold weight rather than color change, maintaining the black-and-white discipline while creating emphasis through mass. The massive headlines with negative tracking feel almost architectural, as if the words themselves are structural elements.

The availability badge introduces a small green indicator dot against a black pill background, using Geist Mono in all caps for the label. This is the sole instance of color coding in the interface, functioning as a status signal rather than a brand element.

## Components

### Header
- Anatomy: Wordmark left, two pill buttons right
- Surface: Transparent over light backgrounds
- Typography: Navigation token for buttons
- Shape: Fully rounded buttons with 16px 20px padding
- Spacing: Minimal vertical height, generous horizontal margins
- Composition: Flex row, space-between alignment

### Hero headline
- Anatomy: Single h1 element, often multi-line
- Surface: Transparent over canvas background
- Typography: Hero-display token, ink color
- Shape: No container, text sits directly on background
- Spacing: Large vertical padding above and below
- Composition: Left-aligned, approximately two-thirds width

### Pricing card (dark)
- Anatomy: Title, subtitle, feature list with check icons, price, action button
- Surface: Surface background (#101010), paper text
- Typography: Label token for title, body-medium for features, section-display for price
- Shape: 24px border radius
- Spacing: 24px internal padding, 4rem gap between cards
- Composition: Stacked vertical layout within card, button bottom-right

### Pricing card (light)
- Anatomy: Identical structure to dark variant
- Surface: Paper background, ink text
- Typography: Same hierarchy as dark variant
- Shape: 24px border radius
- Spacing: 24px internal padding
- Composition: Paired with dark card in two-column layout

### Testimonial card
- Anatomy: Quote text, avatar with name and title
- Surface: Paper background, subtle border or shadow
- Typography: Body-large for quote, body-medium for attribution
- Shape: 24px border radius
- Spacing: 24px padding
- Composition: Self-contained, left-aligned content

### Availability badge
- Anatomy: Green dot indicator, text label
- Surface: Ink background, paper text
- Typography: Mono-caption token, uppercase
- Shape: Fully rounded pill
- Spacing: 6px 12px padding
- Composition: Centered or inline, depending on section

### Primary button
- Anatomy: Text label only, no icon
- Surface: Ink background, paper text
- Typography: Navigation token
- Shape: Fully rounded pill
- Spacing: 16px 20px padding
- Composition: Inline or card-bottom placement

### Secondary button
- Anatomy: Text label only
- Surface: Paper background, ink text, subtle border
- Typography: Navigation token
- Shape: Fully rounded pill
- Spacing: 16px 20px padding
- Composition: Paired with primary button in header

## Responsive behavior

The design is documented from desktop viewport widths. The massive headline scale and generous page gutters suggest a breakpoint strategy that reduces font sizes and narrows margins on smaller screens. At minimum, the hero headline should scale down to section-display size on tablet and maintain readability on mobile through further reduction.

The two-column pricing layout should stack vertically on narrow viewports, with the dark card preceding the light card to maintain visual rhythm. Embedded booking interfaces like the Cal.com widget will require horizontal scrolling or adaptive layout from their own responsive behavior.

Navigation buttons in the header may collapse to a single menu trigger on mobile, though this pattern is not visible in the supplied material. Touch targets should maintain the 16px 20px minimum padding or expand slightly for thumb accessibility.

## Practical implementation guidance

### Preserve
- The stark black-and-white palette with single warm accent in profile imagery
- Extreme headline scale with tight negative tracking
- Fully rounded pill buttons against 24px-radius cards
- Generous page gutters and section spacing
- Bold weight for inline emphasis rather than color change
- Monospace captions for status and technical labels

### Avoid
- Adding accent colors beyond the functional green indicator
- Decorative shadows or borders on static content
- Reducing headline tracking to system defaults
- Using border-radius values between pill and card extremes
- Introducing background patterns or gradients

### Recommended build order
1. Establish the type scale with Overused Grotesk at all specified sizes
2. Implement the color tokens with strict black/white/surface discipline
3. Build the header with wordmark and dual pill buttons
4. Create the hero section with massive headline and proper vertical spacing
5. Develop the pricing card components in both dark and light variants
6. Add the testimonial card with avatar and attribution
7. Integrate embedded widgets (booking, profiles) with proper containment
8. Refine responsive scaling for headline sizes and card layouts

### Accessibility
- Ensure sufficient contrast between ink (#000000) and paper (#FFFFFF) text pairings
- The surface (#101010) background with paper text meets WCAG AA but verify for small text
- The green availability indicator should not be the sole means of conveying status; include text
- Large touch targets on pill buttons support motor accessibility
- Consider focus indicators that maintain the minimal aesthetic while remaining visible
- Headline hierarchy should map logically to document outline for screen reader navigation

## Scope note

This guide covers the Arc studio homepage including hero, mission statement, testimonial, pricing, and booking sections. Mobile layouts, hover states, focus styles, loading conditions, and additional pages are not represented in the supplied material. Embedded third-party widgets (Cal.com booking, profile cards) retain their own responsive behavior and styling constraints. Measurements are derived from the documented interface values.
