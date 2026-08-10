# How keyavadgama.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/keyavadgama.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with circular avatar, name, role description, and horizontal pill navigation above a colorful bento grid of project cards.](https://pin.fontofweb.com/8028?format=jpg)](https://design.withfudge.com/share/pin-8028)

[Homepage hero with circular avatar, name, role description, and horizontal pill navigation above a colorful bento grid of project cards.](https://design.withfudge.com/share/pin-8028)

[![Footer area with a bold script logomark on the left and a right-aligned links column containing social links, email, copyright, and type credit.](https://pin.fontofweb.com/3625?format=jpg)](https://design.withfudge.com/share/pin-3625)

[Footer area with a bold script logomark on the left and a right-aligned links column containing social links, email, copyright, and type credit.](https://design.withfudge.com/share/pin-3625)

[![Mid-page bento grid showing project work including a purple security card, blue Builders Club card, photo strip, and large gradient card reading TWO YEARS LATER.](https://pin.fontofweb.com/3624?format=jpg)](https://design.withfudge.com/share/pin-3624)

[Mid-page bento grid showing project work including a purple security card, blue Builders Club card, photo strip, and large gradient card reading TWO YEARS LATER.](https://design.withfudge.com/share/pin-3624)

[![Extended homepage view with full bento grid revealing additional cards in green, yellow, dark green, and mint alongside the orange and red cards.](https://pin.fontofweb.com/3623?format=jpg)](https://design.withfudge.com/share/pin-3623)

[Extended homepage view with full bento grid revealing additional cards in green, yellow, dark green, and mint alongside the orange and red cards.](https://design.withfudge.com/share/pin-3623)

## Overview

This design system describes a personal portfolio website for a designer, artist, and writer whose work centers on letterforms and type design. The visual approach balances professional clarity with expressive personality through a distinctive bento-grid layout of project cards, each carrying its own background color. The site opens with a centered profile section featuring a circular photograph, name, and role description, followed by a horizontal row of pill-shaped category filters. Below this, the content unfolds as an irregular grid of rounded rectangles in varied sizes and colors—cream, orange, red, yellow, green, dark green, and mint—creating a scrapbook-like yet organized presentation of work samples, writing, and personal projects. A bold script logomark appears in the header and footer, anchoring the brand identity. The overall impression is warm, approachable, and deliberately crafted, with the color variation in cards reflecting the creative range of the portfolio owner while the typography remains restrained and readable.

## Colors

The color strategy separates structural neutrals from expressive accents. The interface relies on near-black ink against warm off-white canvas, with project cards introducing saturated color blocks that make each piece of content visually distinct.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, logomark, and strong UI elements |
| muted-ink | #1A1813 | Headings on dark or colored backgrounds |
| secondary-ink | #383630 | Body text on light surfaces |
| tertiary-ink | #75746F | Footer links, captions, and de-emphasized text |
| canvas | #FFFFFF | Page background |
| warm-canvas | #FAF8F2 | Subtle warm background alternative |
| surface-cream | #FCF9F2 | Navigation pills, cream project cards |
| accent-orange | #F55811 | Featured project cards, high-energy callouts |
| accent-yellow | #FFD86E | Project cards, warm highlights |
| accent-green | #9AC372 | Project cards, organic accents |
| action-blue | #0000EE | External link underlines and indicators |

The project cards deploy a broader palette beyond these core tokens: deep red (#9B0000) for cultural work, dark forest green (#1B4332) for personal essays, soft mint (#D8F3DC) for additional projects, and sky blue for portfolio sections. These card colors function as content-specific surface treatments rather than reusable semantic tokens. The warm canvas and cream surfaces create a gentle contrast against pure white, preventing the page from feeling sterile while maintaining excellent readability. Black text dominates on light and warm backgrounds, with cream or white text reserved for the darkest card surfaces.

## Typography

The typographic system pairs a custom display script for the logomark with a precise sans-serif family for all interface text. Two weights of the sans-serif family handle the full range of reading sizes, from small labels to medium display headings.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Mango | 1.5rem | 400 | 1.2 | 0.01em | Logomark, expressive display moments |
| section-display | Md System | 1.5rem | 400 | 1.2 | -0.015em | Card headings, project titles |
| body | Md System | 1rem | 400 | 1.2 | 0em | Card descriptions, general reading |
| body-tight | Md System | 1rem | 400 | 1.0 | 0em | Compact card text, dense descriptions |
| label | Md System | 0.875rem | 400 | 1.2 | -0.01em | Small headings, metadata, tags |
| navigation | System | 0.75rem | 400 | 1.0 | 0em | Category pills, UI labels |
| legal | Md System | 0.875rem | 400 | 1.2 | 0em | Footer links, copyright, credits |

The Mango family, designed by Keya Vadgama and released through Positype Universal Thirst Kalapi Gajjar, serves as the brand voice in the logomark. Md System, designed by Rutherford Craze and available from Mass Driver, handles all functional typography with Medium and Regular weights. The System family at 12px supports the smallest UI elements, with System-Sansserif appearing as a fallback reference in the source. Verify licensing for these families before production use.

## Layout

The page structure follows a centered single-column flow with generous breathing room. The header contains the script logomark left-aligned and an email link right-aligned, establishing a simple navigation bar. The hero section centers the profile avatar, name, and description vertically, with the category filter pills arranged horizontally below. The main content area uses a bento-grid pattern: cards of varying aspect ratios and sizes tile together with consistent gaps, creating visual rhythm through size variation rather than uniform repetition.

Container padding is set at 20px on all sides, with section vertical spacing at 80px to separate major page regions. The grid gap between cards measures approximately 12px, tight enough to feel connected but sufficient to maintain distinct card boundaries. Cards themselves use 16px border radius for a friendly, approachable character. The pill-shaped category filters use full border-radius for a softer, more interactive appearance.

The footer mirrors the header's simplicity: the logomark appears large on the left, while a right-aligned column stacks social links, email, copyright, and a type credit. This asymmetrical balance between mark and information creates a confident closing to the page without excessive decoration.

## Visual language

The visual personality emerges from the tension between systematic structure and playful color variation. The bento grid imposes order, but each card's unique color and content type—photography, illustration, type specimens, essays—creates a mosaic effect that reflects the portfolio's creative breadth. Rounded corners throughout soften the geometric grid, preventing rigidity.

The circular avatar introduces a single organic shape that breaks the rectangle-dominated layout, drawing immediate attention to the person behind the work. The script logomark, with its flowing connected letterforms, provides another counterpoint to the clean sans-serif body text and rectangular cards.

Photography and illustration within cards often feature warm, saturated tones that harmonize with the card background colors rather than competing against them. The orange card carries a cultural illustration in a lighter tone; the red card presents a figure in cream line art. This integration of image and surface color suggests careful curation rather than arbitrary placement.

## Components

### Profile header

- **Anatomy**: Circular avatar image, name heading, multi-line role description, location indicator with pin icon
- **Surface**: Transparent against page canvas
- **Typography**: Name uses section-display token; description uses body token in secondary-ink; location uses label token in tertiary-ink
- **Spacing**: Avatar sits above text with comfortable vertical separation; entire block centered horizontally
- **Composition**: Avatar and text stack vertically, with text left-aligned relative to the avatar center

### Category filter pills

- **Anatomy**: Horizontal row of pill-shaped buttons with category labels
- **Surface**: Cream background (surface-cream) with subtle border or shadow
- **Typography**: navigation token in ink color
- **Shape**: Full pill border-radius
- **Spacing**: Horizontal arrangement with even gaps between pills; pills have internal padding of 12px horizontal
- **Variants**: Default state appears as filled cream; active or hover states may shift to ink background with cream text

### Project cards

- **Anatomy**: Rounded rectangle containing title, optional description, optional image or illustration, optional link indicator
- **Surface**: Varied background colors per card type—cream, orange, red, yellow, green, dark green, mint, blue
- **Typography**: Headings use section-display or body tokens; descriptions use body or body-tight; links use label with underline and external arrow
- **Shape**: 16px border radius on all corners
- **Spacing**: 20px internal padding; 12px gap between adjacent cards
- **Composition**: Cards tile in irregular grid pattern with varying widths and heights; some cards span multiple grid columns
- **Variants**:
  - **Text card**: Cream or colored background with text content only, often with small label at bottom
  - **Image card**: Photographic or illustrated content filling card, sometimes with text overlay
  - **Feature card**: Larger size with more prominent heading and longer description
  - **Dark card**: Deep green or red background with cream or white text for contrast

### Footer

- **Anatomy**: Large script logomark, links column with social links, email, copyright, type credit
- **Surface**: Transparent against page canvas
- **Typography**: Links use legal token in tertiary-ink; logomark uses hero-display at enlarged scale
- **Composition**: Two-column layout with logomark left, links right-aligned; links stack vertically with consistent spacing
- **States**: Links show underline on default; external links include arrow indicator

## Responsive behavior

The bento grid should reflow from multi-column to single-column on narrower viewports, maintaining card aspect ratios while stacking vertically. The category filter pills may wrap to multiple rows or convert to a horizontal scroll container when space is constrained. The profile header should remain centered with avatar scaling down proportionally. Footer composition should stack logomark above links on small screens. Card internal padding should remain at 20px; gaps may reduce slightly to 8px on mobile to preserve content density.

## Practical implementation guidance

### Preserve
- The warm off-white canvas against near-black text for primary reading
- The 16px rounded corners on all cards for consistent friendliness
- The irregular bento-grid sizing that creates visual interest through variation
- The script logomark as a distinctive brand anchor in header and footer
- The color-coded card system where each project type carries a recognizable hue
- The generous 80px section spacing that lets content breathe

### Avoid
- Uniform card sizes that would eliminate the grid's rhythmic quality
- Pure white backgrounds that would feel colder than the intended warmth
- Sharp corners on interactive elements that would contradict the approachable tone
- Overloading cards with too much text; current density balances information and visual appeal
- Using the script font for body text or UI labels where legibility matters

### Recommended build order
1. Establish the canvas background and ink text color with Md System body typography
2. Build the profile header with circular avatar and centered text block
3. Implement the category filter pills with cream surface and full border-radius
4. Create the card component with configurable background color, padding, and border radius
5. Assemble the bento grid with irregular column spans and consistent 12px gaps
6. Add the footer with large logomark and right-aligned link stack
7. Apply color variations to cards based on content type

### Accessibility
- Ensure all text on colored card backgrounds meets WCAG contrast minimums; the orange and yellow cards with black text, and dark cards with cream text, appear to satisfy this
- Provide focus indicators for pill filters and card links that are visible against varied backgrounds
- Consider reduced-motion preferences for any grid layout animations
- Maintain logical tab order through the bento grid, likely following visual top-to-bottom, left-to-right sequence

## Scope note

This guide covers the homepage and its visible components including the profile header, category filters, bento project grid, and footer. Interior project pages, mobile-specific layouts, hover and focus states, and any motion or loading behaviors are not documented here. The exact spacing and sizing values derive from the desktop viewport as captured.
