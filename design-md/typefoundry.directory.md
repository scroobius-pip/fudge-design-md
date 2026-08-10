# How typefoundry.directory is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/typefoundry.directory-design)

Last updated: 2026-08-10

## Captured pages

[![Sponsor page contact section with dark pill email button and centered footer on white canvas](https://pin.fontofweb.com/5309?format=jpg)](https://design.withfudge.com/share/pin-5309)

[Sponsor page contact section with dark pill email button and centered footer on white canvas](https://design.withfudge.com/share/pin-5309)

[![Morning Type Sunrise Scholarship section with green and yellow rounded cards containing black illustrations](https://pin.fontofweb.com/5308?format=jpg)](https://design.withfudge.com/share/pin-5308)

[Morning Type Sunrise Scholarship section with green and yellow rounded cards containing black illustrations](https://design.withfudge.com/share/pin-5308)

[![Limitations section with three light gray rounded cards showing black line-art icons and descriptive text](https://pin.fontofweb.com/5307?format=jpg)](https://design.withfudge.com/share/pin-5307)

[Limitations section with three light gray rounded cards showing black line-art icons and descriptive text](https://design.withfudge.com/share/pin-5307)

[![Testimonial carousel with multicolored rounded cards in pink, green, yellow, dark gray, and blue](https://pin.fontofweb.com/5306?format=jpg)](https://design.withfudge.com/share/pin-5306)

[Testimonial carousel with multicolored rounded cards in pink, green, yellow, dark gray, and blue](https://design.withfudge.com/share/pin-5306)

## Overview

Type Foundry Directory presents itself as a calm, authoritative resource for discovering and connecting with type foundries. The visual system balances editorial restraint with moments of playful warmth. The foundation is a stark white canvas with black typography, creating a reading experience that feels like a well-designed printed document translated to the web. Against this neutral ground, the site deploys rounded rectangular cards in saturated pastels—mint green, butter yellow, soft pink, sky blue, and a grounding dark gray—to organize information and create visual rhythm. Hand-drawn black illustrations with a sketchy, unpolished line quality appear inside these colored cards, giving the site a personal, human voice that contrasts with the precision expected of a typography resource. The overall impression is of a curated, trustworthy directory maintained by individuals rather than an anonymous platform.

## Colors

The color system operates on a principle of maximum contrast for readability, with strategic color coding for content modules. The interface avoids gradients and shadows, relying entirely on flat color fields and their relationships.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, illustrations, borders, and the dark pill button background |
| canvas | #ffffff | Page background and inverted text on dark surfaces |
| surface | #f5f5f5 | Neutral card backgrounds for informational content |
| muted | #666666 | Secondary text, footer links, and subdued captions |
| accent-green | #b8e986 | Scholarship cards, testimonial cards, and positive-themed modules |
| accent-yellow | #f5d76e | Scholarship cards, testimonial cards, and highlight modules |
| accent-pink | #f0c0f0 | Testimonial cards and playful content blocks |
| accent-blue | #87ceeb | Testimonial cards and cool-toned content blocks |
| accent-dark | #666666 | Dark testimonial cards with inverted text |

The light mode dominates all visible surfaces. Black ink on white canvas provides the primary reading experience. The gray surface tone creates subtle elevation for card-based content without introducing shadows. The five accent colors appear exclusively within rounded cards, never as page backgrounds or text colors. This constraint keeps the palette feeling intentional rather than chaotic. The dark gray card inverts the standard relationship, placing white text on a dark ground for visual variety in the testimonial sequence. No dark mode is visible in the supplied material.

## Typography

The site employs two weights of a single sans-serif family, Replace Sans, creating hierarchy through weight and size rather than family contrast. The type feels contemporary and neutral, letting the content and colorful cards carry personality.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| section-display | Replace Sans 0011 M | 1.5rem | 400 | 1.2 | -0.01em | Page and section headings |
| body | Replace Sans 0011 M | 1rem | 400 | 1.5 | 0 | Paragraphs and general content |
| body-medium | Replace Sans 0011 S | 1rem | 500 | 1.5 | 0 | Emphasized body text, card headings |
| label | Replace Sans 0011 M | 0.875rem | 400 | 1.4 | 0 | Buttons, captions, and compact labels |
| legal-copy | Replace Sans 0011 M | 0.75rem | 400 | 1.5 | 0 | Footer copyright and fine print |

The Regular weight handles most reading text, while the Medium weight from the S variant provides emphasis for card titles and interactive elements. Negative letter spacing on headings creates tighter, more impactful display lines. The scale is restrained, with only a 2:1 ratio between the largest and smallest text sizes, reinforcing the site's utilitarian, content-first character. Verify licensing for these families before production use.

## Layout

The layout follows a centered, single-column editorial model with occasional breakout moments for card grids. Content lives within a moderate maximum width, creating comfortable line lengths for reading.

The page structure places text introductions at the top of each section, followed by supporting card arrangements below. Sections stack vertically with generous whitespace between them. The centered content column creates a sense of focus and authority, as if reading a well-designed document rather than browsing a complex application.

Card grids appear in two configurations. The scholarship section shows a two-column layout with equal-width cards. The limitations section displays three cards in a horizontal row. The testimonial section presents a continuous horizontal scroll or carousel of cards in varying accent colors, with partial cards visible at the viewport edges suggesting additional content beyond the fold.

Spacing between sections uses multiples of the base unit, creating rhythmic vertical pacing. Card internal padding is substantial, giving illustrations and text room to breathe within their colored containers. The rounded corners on all cards are consistent, creating a family relationship between otherwise color-diverse elements.

## Visual language

The visual language merges editorial precision with hand-crafted warmth. The illustration style is immediately distinctive: black line drawings with a loose, sketchy quality, sometimes filled with solid black shapes, appearing as if quickly drawn with ink. These illustrations depict conceptual scenes—a calendar with the number 3, a figure on a pedestal, a sunrise over hills, a snail-like form—rather than literal representations of type or technology. Their rough edges and variable line weights contrast deliberately with the clean geometry of the cards and the precision of the typography.

The card system is the primary visual organizing principle. Every card shares the same rounded rectangle DNA but receives a distinct background color based on its content role. This creates a modular, almost sticker-like quality to the information architecture. Cards never overlap, cast shadows, or use borders; they sit flat against the white page or adjacent to sibling cards with consistent gutters.

The absence of photography, video, or complex interface chrome keeps attention on the directory's purpose: connecting visitors with type foundries. The visual restraint signals professionalism while the colorful cards and illustrations prevent the experience from feeling sterile.

## Components

### Text card
- **Anatomy**: Rounded rectangle containing a heading, optional illustration, and paragraph text
- **Surface**: Light gray background (`{colors.surface}`)
- **Typography**: Body text for descriptions, body-medium for card headings
- **Shape**: `{rounded.card}` on all corners
- **Spacing**: `{spacing.card-padding}` internal padding
- **Composition**: Vertical stack with illustration above text when present

### Accent card
- **Anatomy**: Rounded rectangle with illustration and text content
- **Surface**: One of the accent colors—green, yellow, pink, blue, or dark gray
- **Typography**: Body text for descriptions; dark cards use inverted white text
- **Shape**: `{rounded.card}` on all corners
- **Spacing**: `{spacing.card-padding}` internal padding
- **Composition**: Illustration positioned above text, vertically centered within card
- **Variants**: Color variant determined by content theme; dark variant inverts text color

### Pill button
- **Anatomy**: Rounded capsule containing text label
- **Surface**: Solid black background (`{colors.ink}`)
- **Typography**: Label style in white (`{colors.canvas}`)
- **Shape**: Full pill with `{rounded.pill}`
- **Spacing**: Compact horizontal and vertical padding, approximately 1rem by 0.75rem
- **Composition**: Inline with text or standalone below paragraphs

### Testimonial card
- **Anatomy**: Rounded rectangle containing a quote, horizontal rule, and attribution
- **Surface**: Any accent color; dark gray variant uses inverted text
- **Typography**: Body for the quotation, label for the attribution name
- **Shape**: `{rounded.card}`
- **Spacing**: `{spacing.card-padding}` with additional internal space between quote and rule
- **Composition**: Quote text above a thin horizontal divider, with attribution below

### Footer
- **Anatomy**: Centered copyright text with linked privacy policy below
- **Surface**: Transparent, sitting on white canvas
- **Typography**: Legal-copy for copyright, label for linked policy
- **Composition**: Vertically stacked, horizontally centered, minimal vertical padding

## Responsive behavior

The layout appears optimized for desktop viewing based on the visible material. The centered content column and card grids suggest straightforward adaptation patterns. At narrower viewports, the multi-column card grids should stack vertically, maintaining full-width cards with consistent internal padding. The testimonial carousel likely requires horizontal swipe or scroll behavior on touch devices, with card widths adjusting to show partial peek cards at the viewport edges. The maximum content width prevents excessive line lengths on large screens while maintaining readability. Typography should maintain its rem-based scale across breakpoints, with section headings potentially reducing slightly on very small viewports to preserve hierarchy without overwhelming the narrow canvas.

## Practical implementation guidance

### Preserve
- The stark black-on-white foundation for all primary reading text
- The consistent rounded rectangle shape language across all card variants
- The hand-drawn illustration style with its sketchy, imperfect line quality
- The flat, shadowless card surfaces that rely on color alone for separation
- The generous internal card padding that lets content breathe

### Avoid
- Adding drop shadows or borders to cards; the design achieves depth through color contrast alone
- Introducing additional accent colors beyond the established five; the palette is intentionally constrained
- Using gradients or photographic imagery in place of the flat color fields
- Tightening the card corners; the generous rounding is essential to the friendly character
- Mixing illustration styles; the hand-drawn quality should remain consistent

### Recommended build order
1. Establish the typographic foundation with Replace Sans at the specified scale
2. Implement the white canvas and black ink color defaults
3. Build the card component with configurable background color and inverted text option
4. Add the pill button for email and action links
5. Create the section layout patterns with centered content column
6. Implement the card grid arrangements for two and three column layouts
7. Add the testimonial carousel with partial card peek behavior
8. Integrate illustrations with consistent black treatment

### Accessibility
- Ensure all accent card color combinations meet contrast minimums; the dark gray card with white text does, but verify lighter accents against black text
- Provide visible focus indicators for the pill button and carousel navigation
- Consider reduced motion preferences for the testimonial carousel
- Maintain the semantic heading hierarchy visible in the section displays

## Scope note

This guide covers the sponsor page surface of Type Foundry Directory as visible in the supplied material. The directory listing pages, individual foundry profiles, navigation header, and mobile breakpoint behavior are not represented. Measurements are practical adaptation targets derived from visual inspection.
