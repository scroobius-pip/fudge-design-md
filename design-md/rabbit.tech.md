# How rabbit.tech is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/rabbit.tech-design)

Last updated: 2026-08-10

## Captured pages

[![Research page with orange header bar, black canvas, large orange 'research' display type with floating device illustrations, and article list with thumbnails](https://pin.fontofweb.com/1571?format=jpg)](https://design.withfudge.com/share/pin-1571)

[Research page with orange header bar, black canvas, large orange 'research' display type with floating device illustrations, and article list with thumbnails](https://design.withfudge.com/share/pin-1571)

[![Legal disclaimer page with dense white body text on black background, social icons, and minimal footer links](https://pin.fontofweb.com/1570?format=jpg)](https://design.withfudge.com/share/pin-1570)

[Legal disclaimer page with dense white body text on black background, social icons, and minimal footer links](https://design.withfudge.com/share/pin-1570)

[![FAQ section with large white questions in display type, small white answers, and decorative rabbit device illustration with question mark](https://pin.fontofweb.com/1569?format=jpg)](https://design.withfudge.com/share/pin-1569)

[FAQ section with large white questions in display type, small white answers, and decorative rabbit device illustration with question mark](https://design.withfudge.com/share/pin-1569)

[![Software updates section with white display heading, orange 'view all updates' link with arrow icon, and download icon with descriptive text](https://pin.fontofweb.com/1568?format=jpg)](https://design.withfudge.com/share/pin-1568)

[Software updates section with white display heading, orange 'view all updates' link with arrow icon, and download icon with descriptive text](https://design.withfudge.com/share/pin-1568)

## Overview

The rabbit.tech visual system is built around the physical presence of the r1 AI assistant device, expressed through stark contrast and disciplined restraint. Every page sits on an unapologetic black canvas that lets product photography and bold typographic moments command attention. An electric orange serves as the singular accent—appearing in the persistent site header, key navigation moments, and interactive calls-to-action—creating immediate brand recognition without decorative excess.

The design language favors large, tightly-tracked display type for section headings and questions, set in a geometric sans-serif that feels contemporary and slightly technical. Body copy is rendered in an extra-light weight, creating a deliberate hierarchy where headings assert themselves and supporting text recedes into a whisper. Layouts are sparse, with generous vertical breathing room between content blocks and minimal structural ornament. The overall impression is of a company confident enough to let its product and message speak without visual competition.

## Colors

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background; establishes the dark, immersive environment |
| surface | #111111 | Slightly elevated panels or secondary backgrounds when needed |
| ink | #FFFFFF | Primary text, headings, icons, and UI elements on dark backgrounds |
| muted-ink | #B3B3B3 | Secondary body text, captions, dates, and de-emphasized content |
| action | #FF4D00 | Header bar, primary links, interactive accents, and brand moments |
| action-hover | #E64500 | Slightly deeper orange for hover states on action elements |
| border | #333333 | Subtle dividers and structural boundaries when required |

The color system operates in a single dark mode with no light variant visible. The black canvas is absolute, not merely dark gray, which creates maximum contrast for the white typography and allows the orange accent to feel luminous rather than merely bright. The orange appears strategically—never as large fields beyond the header, but as precise punctuation that guides the eye to interactive elements. Muted ink serves to create hierarchy within text-dense areas like FAQs and legal disclaimers, preventing visual fatigue without introducing additional hues. No gradients or shadows are employed; the system relies on flat color and spatial arrangement for structure.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Power Grotesk | 6rem | 400 | 0.9 | -0.03em | Page-level display headings, oversized section titles |
| section-display | Power Grotesk | 3rem | 400 | 1 | -0.02em | Section headings, FAQ questions, article titles |
| body | Archivo | 1rem | 200 | 1.6 | 0em | Standard body copy, descriptions, answers |
| body-large | Archivo | 1.25rem | 200 | 1.5 | 0em | Lead paragraphs, emphasized descriptions |
| label | Archivo | 0.75rem | 400 | 1.2 | 0.02em | Small labels, badges, metadata |
| navigation | Archivo | 0.875rem | 400 | 1 | 0.01em | Header navigation, footer links |

Power Grotesk, designed by Teguh Arief of Power Type Foundry, provides the display voice—geometric, confident, and slightly condensed with aggressive negative tracking that creates a contemporary technical character. Archivo, designed by Hector Gatti of Omnibus Type, handles all functional text in its Extra Light weight, offering exceptional readability at low weights that maintains the system's airy, premium feel. The extreme weight contrast between display (400) and body (200) is intentional, creating clear hierarchy without size alone.

All type sizes are whole-number multiples of 4px (0.25rem), with display sizes at 96px and 48px, body at 16px and 20px, and functional sizes at 12px and 14px. Verify licensing for these families before production use.

## Layout

The layout system is fundamentally single-column with generous margins. Content blocks stack vertically with substantial section spacing, creating a scrolling narrative that reveals information deliberately. The header is fixed-height and full-bleed in orange, containing the rabbit wordmark left-aligned and navigation centered, with a lock icon at the far right indicating account or cart access.

Main content areas employ asymmetric padding—typically 4rem to 6rem from the left edge for primary text, with display headings sometimes breaking further left or bleeding to the edge for dramatic effect. The research page demonstrates this with its oversized "research" heading that spans nearly the full viewport width, interspersed with floating device illustrations that break the typographic line.

Article listings use a horizontal thumbnail-plus-text pattern: a square or slightly rectangular image left, with the title and date stacked to its right. This creates a clean scanable rhythm without grid complexity. FAQ sections place a small decorative illustration to the left of each question-answer pair, maintaining visual interest in an otherwise text-heavy format.

The footer is minimal and functional: social icons left-aligned, legal and utility links center, copyright right. No newsletter capture, no elaborate sitemap—just essential paths and attribution.

## Visual language

The visual language is defined by restraint and precision. Photography and product imagery is presented without borders, shadows, or frames, letting the objects exist as pure forms against the black void. The r1 device itself—with its distinctive rounded square shape, side button, and camera module—appears repeatedly as both product hero and decorative motif, reinforcing brand identity through repetition.

Line-art illustrations of the device appear in white outline form, sometimes with small expressive details like a question mark or X mark, adding personality without color complexity. These illustrations float freely, overlapping type or sitting adjacent to it, creating a sense of playful technicality.

Iconography is simple and geometric: a download arrow, a rightward arrow for links, social platform marks. All icons share the same stroke weight and directness as the typography. There are no decorative patterns, no background textures, no gradient overlays. The system trusts in the power of absolute contrast and careful spacing.

The orange header creates a persistent brand beacon that anchors every page. Below it, the black canvas extends infinitely, making each page feel like a stage where content performs under spotlight conditions.

## Components

### Site header

- **Anatomy**: Full-width bar containing rabbit wordmark (left), navigation links with "new" badge (center), lock icon (right)
- **Surface**: Solid action orange background
- **Typography**: Navigation token, white ink
- **Shape**: No border radius; sharp rectangular bar
- **Spacing**: 3.5rem height, 2rem horizontal padding
- **Composition**: Flex row with space-between alignment; navigation links evenly distributed with small gaps

### Article card

- **Anatomy**: Thumbnail image left, title and date stacked right
- **Surface**: Transparent on canvas background
- **Typography**: Section-display for title, body for date in muted-ink
- **Shape**: Thumbnail has subtle rounding (0.5rem)
- **Spacing**: 2rem gap between thumbnail and text; 3rem vertical gap between cards
- **Composition**: Horizontal flex, thumbnail approximately 8rem square

### FAQ item

- **Anatomy**: Decorative device illustration left, question and answer stacked right
- **Surface**: Transparent
- **Typography**: Section-display for question, body for answer; links within answers use action color with underline
- **Shape**: Illustration approximately 4rem, white line art
- **Spacing**: 2rem gap between illustration and text; 3rem vertical gap between items
- **Composition**: Horizontal flex with illustration as visual anchor

### CTA link

- **Anatomy**: Text label plus rightward arrow icon
- **Surface**: Transparent
- **Typography**: Body-large in action color
- **Shape**: Arrow icon in circle or standalone; icon 1.25rem
- **Spacing**: 0.5rem gap between text and icon
- **Composition**: Inline flex, center-aligned
- **Variants**: "view all updates" style with arrow-in-circle; plain text links with underline in body copy

### Footer

- **Anatomy**: Social icons left, utility links center, copyright right
- **Surface**: Transparent on canvas
- **Typography**: Navigation token for links, label for copyright
- **Shape**: No dividers or borders
- **Spacing**: 2rem vertical padding; generous horizontal margins
- **Composition**: Three-zone flex with space-between

## Responsive behavior

The system should maintain its single-column, generous-margin approach across viewports. The hero display size may scale down to section-display on narrower screens to prevent overflow. Navigation in the orange header should collapse to a hamburger menu on mobile, preserving the brand bar's presence without crowding. Article card thumbnails may stack above text on narrow viewports rather than sitting side-by-side. FAQ illustrations should remain visible but scale proportionally, maintaining their role as visual anchors. The absolute black canvas and orange accent should persist unchanged; these are identity-defining elements not subject to breakpoint variation.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the only background mode
- The electric orange header as a persistent, full-width brand element
- The extreme weight contrast between Power Grotesk display and Archivo Extra Light body
- Floating device illustrations as decorative accents
- Generous vertical spacing between content sections
- Minimal footer with essential links only

### Avoid
- Adding background colors or gradients behind content blocks
- Introducing additional accent colors beyond the orange
- Using borders or shadows to create depth
- Crowding the header with too many navigation items
- Reducing the display type to sizes that lose its impact

### Recommended build order
1. Establish the black canvas and orange header as the foundational frame
2. Implement the typography scale with both families at their specified weights
3. Build the article card and FAQ item patterns as primary content components
4. Add floating illustrations and iconography
5. Refine spacing and responsive behavior

### Accessibility
- Ensure white text on black maintains WCAG AAA contrast (it does at normal sizes)
- The orange action color should not be used for small text alone; pair with white or use for large interactive elements only
- Provide focus indicators that complement the flat aesthetic, such as 2px white outlines on orange buttons
- Maintain touch targets of at least 44px for header navigation and footer links

## Scope note

This guide covers the rabbit.tech marketing site as visible on desktop, including the research page, product page sections, FAQ, and software updates. Mobile breakpoints, animation, form interactions, e-commerce checkout flows, and the r1 device interface itself are not represented in the supplied material. Measurements are practical adaptation targets derived from visual inspection.
