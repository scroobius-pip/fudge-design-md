# How miracamp.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/miracamp.com-design)

Last updated: 2026-08-10

## Captured pages

[![Courses page showing a grid of six course cards with photography thumbnails, bold headings, body copy, and black pill-shaped CTA buttons on a white background.](https://pin.fontofweb.com/4724?format=jpg)](https://design.withfudge.com/share/pin-4724)

[Courses page showing a grid of six course cards with photography thumbnails, bold headings, body copy, and black pill-shaped CTA buttons on a white background.](https://design.withfudge.com/share/pin-4724)

[![Dark footer with Miracamp logo, company description, email link, and four-column link groups for Company, Social, and Terms & policies on a pure black background.](https://pin.fontofweb.com/4723?format=jpg)](https://design.withfudge.com/share/pin-4723)

[Dark footer with Miracamp logo, company description, email link, and four-column link groups for Company, Social, and Terms & policies on a pure black background.](https://design.withfudge.com/share/pin-4723)

[![Student testimonial carousel with a centered quote in a light gray rounded card, purple accent underline, circular avatar, and minimal arrow navigation on white.](https://pin.fontofweb.com/4722?format=jpg)](https://design.withfudge.com/share/pin-4722)

[Student testimonial carousel with a centered quote in a light gray rounded card, purple accent underline, circular avatar, and minimal arrow navigation on white.](https://design.withfudge.com/share/pin-4722)

[![Alternative student testimonial showing a shorter quote with circular avatar, name attribution, and matching purple accent underline treatment.](https://pin.fontofweb.com/4721?format=jpg)](https://design.withfudge.com/share/pin-4721)

[Alternative student testimonial showing a shorter quote with circular avatar, name attribution, and matching purple accent underline treatment.](https://design.withfudge.com/share/pin-4721)

## Overview

Miracamp presents itself as an online creative school with a visual system built on stark contrast and confident simplicity. The design relies on a near-binary palette of pure black and white, punctuated by strategic purple accents that signal interactive moments and section anchors. The overall impression is editorial and direct: large bold headings establish hierarchy immediately, while generous whitespace keeps the dense course information breathable. Photography plays a functional role—course thumbnails show real creative work and tools in use, grounding the abstract typography in tangible outcomes. The system favors rectangular cards with subtle borders over heavy shadows, creating a flat, contemporary surface language that reads as professional without feeling corporate. Navigation and calls-to-action are reduced to their essential forms: black pill buttons on white, white text on black in the footer, with no decorative flourishes beyond the single accent color.

## Colors

The color system is intentionally restrained, built on a high-contrast foundation with one vivid accent.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, button fills, footer background, card borders |
| canvas | #FFFFFF | Page background, card surfaces, button text on dark |
| surface | #F5F5F5 | Testimonial card backgrounds, subtle secondary containers |
| accent | #7C3AED | Section underlines, interactive highlights, brand moments |
| muted | #6B7280 | Secondary text, captions, less prominent metadata |

The black-and-white pairing dominates every page surface, creating maximum legibility and a bold, contemporary character. The near-white surface tone appears only in contained components like testimonial cards, providing just enough separation from the pure white page without introducing a third major value. The purple accent appears sparingly—most visibly as a short horizontal rule beneath section headings—so it retains impact when deployed. No gradient fills or tinted backgrounds appear in the interface; color is reserved for typography, borders, and discrete accent bars. The dark footer inverts the standard polarity, using black as a ground and white as figure, which creates a definitive end-of-page moment.

## Typography

The type system uses a single family across all roles, differentiated by weight and size.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 4rem | 700 | 1.1 | -0.02em | Page titles, major section openings |
| section-display | Inter | 3rem | 700 | 1.15 | -0.01em | Section headings like "Hear from our Students" |
| body | Inter | 1rem | 400 | 1.6 | 0 | Course descriptions, footer paragraphs, general reading |
| body-bold | Inter | 1rem | 600 | 1.6 | 0 | Card headings, emphasized labels |
| label | Inter | 0.875rem | 500 | 1.4 | 0 | Button text, navigation links, footer column headers |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Primary navigation, secondary menus |

Inter provides a neutral, highly legible grotesque that supports the site's direct tone. The display sizes use tight negative tracking for a compact, assertive presence, while body text opens up to a comfortable 1.6 line height for extended reading. Weight distinctions are clear: 400 for flowing text, 600 for structural headings within cards, and 700 for major page titles. The 0.875rem label size appears frequently in interactive elements, establishing a consistent smaller voice for actions and metadata. Verify licensing for these families before production use. The Flowicons family serves as an icon system and is not used for typographic content.

## Layout

The layout follows a centered container model with consistent internal padding. Major sections stack vertically with substantial breathing room between them—approximately 6rem of separation maintains the airy, editorial quality. Content lives within a max-width container that prevents excessive line lengths on large viewports.

The course grid uses a three-column arrangement at desktop widths, with cards sharing equal width and a 1.5rem gap between them. Each card contains a thumbnail image at the top, followed by a heading, descriptive paragraph, and a full-width call-to-action button. This creates a predictable vertical rhythm: image, then text block, then action. The thumbnail aspect ratio appears consistent across cards, suggesting a fixed proportion rather than free-form cropping.

The testimonial section centers its content both horizontally and vertically within the viewport area. The quote card occupies a moderate width, flanked by minimal arrow controls that sit outside the card boundary. This creates a focused, presentation-like moment that breaks from the grid's density.

The footer expands to full width with a black background, then uses a multi-column internal grid. The left column carries the brand description and contact email, while the right side distributes links across three narrower columns. This asymmetry—wider brand block, tighter link clusters—creates visual balance without requiring equal distribution.

## Visual language

The visual language is defined by restraint and contrast. Rounded corners appear on cards and avatars but not on the primary buttons, which use full pill shapes instead. This creates a subtle hierarchy of geometry: pills for actions, soft rectangles for containers, circles for people.

Photography is treated practically—course thumbnails show real creative scenarios without heavy overlays or filters. The images sit in their natural color, allowing the black-and-white interface to frame them neutrally. No decorative patterns, textures, or background illustrations compete with the content.

The purple accent appears as a short horizontal bar—roughly 4-5rem wide and 0.25rem tall—centered beneath major section headings. This element functions as a visual anchor, drawing the eye to section transitions without adding decorative weight. Its consistent placement and proportion make it a reliable signature element.

Iconography is minimal and functional. Arrow controls for the testimonial carousel are simple chevrons without enclosing shapes. The footer links are plain text without icons. This reduction supports the site's confident, content-forward character.

## Components

### Course card

- **Anatomy**: Thumbnail image, heading, description paragraph, full-width button
- **Surface**: White background with a 1px black border
- **Typography**: Heading uses body-bold (1rem, weight 600); description uses body (1rem, weight 400)
- **Shape**: 0.75rem border radius on the card container
- **Spacing**: 1.5rem internal padding; image sits flush to top edge with matching corner radius
- **Composition**: Vertical stack with consistent spacing between elements; button anchors the bottom
- **Variants**: Two visual thumbnail types—photography of creative work, or solid-color backgrounds with software logos

### Primary button

- **Anatomy**: Text label only, no icon
- **Surface**: Black fill with white text
- **Typography**: Label token (0.875rem, weight 500)
- **Shape**: Full pill (9999px border radius)
- **Spacing**: Generous horizontal padding, approximately 2rem, with 0.75rem vertical padding
- **Composition**: Full-width within card context; inline width in other contexts

### Testimonial card

- **Anatomy**: Quotation text, circular avatar, name attribution
- **Surface**: Light gray background (#F5F5F5)
- **Typography**: Body token for the quote; body-bold for the name
- **Shape**: 0.75rem border radius; avatar is circular (50%)
- **Spacing**: 2rem internal padding; avatar sits below quote with small gap to name
- **Composition**: Centered text alignment; avatar and name centered as a unit below
- **States**: Carousel navigation with left/right arrow controls positioned outside the card

### Footer

- **Anatomy**: Brand block with description and email; three link columns
- **Surface**: Black background with white text
- **Typography**: Body for description; label for column headers and links
- **Shape**: Full-width, no border radius
- **Spacing**: Generous internal padding; columns separated by consistent gutter
- **Composition**: Asymmetric grid with wider brand column; email link underlined for affordance

## Responsive behavior

The three-column course grid should collapse to two columns on medium viewports and single column on small screens, maintaining the internal card proportions and spacing. The testimonial carousel should remain centered with the card width scaling down; arrow controls may need touch-friendly hit areas on mobile. The footer multi-column layout should stack vertically on narrow viewports, with the brand description preceding the link groups.

## Practical implementation guidance

### Preserve
- The stark black-and-white contrast as the primary visual identity
- The single purple accent used only for section underlines and minimal highlights
- The consistent card border treatment with subtle rounding
- The pill-shaped primary buttons with generous horizontal padding
- The centered, focused composition of the testimonial section

### Avoid
- Adding secondary accent colors that compete with the purple
- Using heavy shadows or elevation effects on cards
- Introducing decorative background patterns or gradients
- Reducing the contrast ratio below 7:1 for body text
- Using border radius on primary buttons—keep them fully rounded pills

### Recommended build order
1. Establish the black-and-white color tokens and Inter type scale
2. Build the course card component with thumbnail, text stack, and pill button
3. Implement the three-column grid with consistent gap spacing
4. Create the testimonial card with centered composition and avatar
5. Construct the dark footer with asymmetric column layout
6. Add the purple accent underline as a reusable section marker

### Accessibility
- Ensure the purple accent (#7C3AED) meets 3:1 contrast against white when used for interactive elements
- Maintain 4.5:1 minimum contrast for all body text; the black-on-white pairing exceeds this
- Provide visible focus states for pill buttons and carousel controls
- Include aria-labels for testimonial navigation arrows
- Consider reduced-motion preferences for carousel transitions

## Scope note

This guide covers the visible homepage and courses page surfaces, including the course grid, testimonial carousel, and footer. Mobile breakpoints, navigation dropdowns, form interactions, and motion behavior are not represented in the supplied material. Measurements are practical adaptation targets.
