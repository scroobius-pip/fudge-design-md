# How somo.nl is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/somo.nl-design)

Last updated: 2026-08-10

## Captured pages

[![Primary navigation bar with red SOMO logo mark on mustard yellow background, featuring dropdown menus and language selector](https://pin.fontofweb.com/5363?format=jpg)](https://design.withfudge.com/share/pin-5363)

[Primary navigation bar with red SOMO logo mark on mustard yellow background, featuring dropdown menus and language selector](https://design.withfudge.com/share/pin-5363)

[![Latest updates section with teal background, article cards in white and warm gray with category tags and author avatars](https://pin.fontofweb.com/5362?format=jpg)](https://design.withfudge.com/share/pin-5362)

[Latest updates section with teal background, article cards in white and warm gray with category tags and author avatars](https://design.withfudge.com/share/pin-5362)

[![Footer with mustard yellow background, four-column contact information layout, social icons, and certification badges on gray strip](https://pin.fontofweb.com/5361?format=jpg)](https://design.withfudge.com/share/pin-5361)

[Footer with mustard yellow background, four-column contact information layout, social icons, and certification badges on gray strip](https://design.withfudge.com/share/pin-5361)

[![Cookie consent banner with olive green OK button, white Customise button, and SOMO logo on light gray-green background](https://pin.fontofweb.com/5360?format=jpg)](https://design.withfudge.com/share/pin-5360)

[Cookie consent banner with olive green OK button, white Customise button, and SOMO logo on light gray-green background](https://design.withfudge.com/share/pin-5360)

## Overview

SOMO's website presents the Centre for Research on Multinational Corporations as an authoritative, independent voice through a distinctive visual system built on bold color blocking and confident typography. The design rejects corporate minimalism in favor of high-contrast, civic-minded aesthetics: a warm mustard yellow dominates the header and footer, a vibrant teal energizes content sections, and a deep olive green anchors interactive elements. The type pairing of Poppins for display and navigation with Merriweather for body text creates a clear hierarchy between institutional voice and readable research content. The overall impression is of an organization that is both approachable and rigorous—colorful enough to stand apart from typical NGO aesthetics, yet structured enough to convey serious research credibility. The system relies on flat color fields with minimal ornamentation, letting content density and typographic contrast carry the visual interest.

## Colors

The color system is built on bold, flat blocks that create immediate visual identity across page sections. The palette draws from civic and activist traditions—warm yellows suggesting urgency and attention, teals providing fresh energy, and a grounded olive for action elements.

| token | value | use |
|---|---|---|
| action | #6B7B3A | Primary buttons, cookie consent OK button, interactive emphasis |
| ink | #000000 | Primary text, borders, category tag backgrounds, navigation text on yellow |
| canvas | #E8E6D8 | Cookie banner background, secondary page backgrounds |
| surface | #FFFFFF | Article card backgrounds, button fills, content panels |
| surface-warm | #E5E2D4 | Alternate card backgrounds, subtle section differentiation |
| brand-red | #E30613 | SOMO logo mark background, brand accent |
| brand-mustard | #D4B800 | Header background, footer background, primary brand field |
| brand-teal | #40E0D0 | Section backgrounds, content area fields |
| border | #000000 | Hairline rules, button outlines, structural dividers |

The color logic follows a section-based model: mustard yellow for institutional framing (header, footer), teal for dynamic content areas (latest updates, featured sections), and neutral tones for supporting elements. Black serves as the universal text and border color across all backgrounds, maintaining consistent readability. The olive green action color appears selectively for interactive confirmation, creating a deliberate pause in the otherwise warm palette. White cards float against teal and mustard fields with no shadows, relying on color contrast alone for separation. The system does not use gradients or transparency effects; all color transitions are hard edges between flat fields.

## Typography

The type system pairs a geometric sans-serif for institutional voice with a readable serif for extended content. Poppins carries the organizational identity in bold weights, while Merriweather provides scholarly credibility in body text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Poppins | 2.5rem | 700 | 1.1 | -0.02em | Page titles, major section headers |
| section-display | Poppins | 2rem | 700 | 1.2 | -0.01em | Subsection headings, card titles |
| body | Merriweather | 1rem | 400 | 1.6 | 0em | Article excerpts, descriptions, paragraphs |
| body-small | Merriweather | 0.875rem | 400 | 1.5 | 0em | Dates, metadata, captions |
| label | Poppins | 0.75rem | 700 | 1.2 | 0.02em | Category tags, buttons, badges |
| navigation | Poppins | 0.875rem | 700 | 1.2 | 0em | Main menu items, footer links |

Poppins appears exclusively in Bold (700) for all display and interface roles, creating a consistent, weighty presence. Merriweather appears in Regular (400) for all body roles, prioritizing extended reading comfort. The size scale progresses in whole-number multiples of 0.25rem: 0.75rem, 0.875rem, 1rem, 2rem, and 2.5rem. Tight negative tracking on display sizes creates compact, impactful headlines, while body text uses neutral tracking for natural reading flow.

Font credits: Poppins designed by Jonny Pinhorn, published by Indian Type Foundry. Merriweather designed by Eben Sorkin. Verify licensing for these families before production use.

## Layout

The layout system uses full-bleed color sections with contained content grids. Page sections stack vertically with hard color transitions—mustard yellow gives way to teal, which gives way to neutral tones without intermediate buffers.

The header occupies the full viewport width with a fixed or sticky behavior implied by its persistent presence. The SOMO logo mark sits in a red square block at the extreme left, creating an asymmetrical anchor that breaks the grid. Navigation items follow in a horizontal row with generous spacing between clusters: primary links center-left, utility functions (language, search) right-aligned.

Content sections use a centered container with maximum width, estimated at approximately 80rem based on the card grid proportions. The latest updates section displays a three-column card grid with consistent 1.5rem gaps between cards. Cards themselves use internal padding of approximately 1.5rem, with text aligned to the top-left and dates positioned at the bottom of the content area.

The footer expands to four equal columns on the mustard yellow background, with a secondary gray strip below for legal text and certification badges. Social icons appear as a horizontal row with uniform sizing and spacing.

Spacing follows a 0.25rem base unit. Section vertical padding is substantial, approximately 4rem, creating breathing room between color fields. Component internal spacing uses 1rem to 1.5rem for comfortable text blocks. The overall rhythm alternates between dense information clusters and generous field color, preventing visual fatigue despite the bold palette.

## Visual language

The visual language communicates institutional confidence through flat color fields, bold typography, and minimal decorative elements. Photography appears in small circular avatars for authors, not as hero imagery—the design prioritizes text and information density over visual storytelling.

The SOMO logo mark is the most distinctive graphic element: the word "SOMO" in bold yellow letters within a red square, with the "O" characters as perfect circles. This geometric treatment echoes through the system in circular author avatars and the rounded social icons.

Category tags use inverted color treatment—black background with white text—creating small but dense focal points that scan easily. Author names appear in teal highlight bars, connecting the content metadata to the section background color.

The absence of shadows, gradients, or rounded corners on major containers reinforces a flat, print-influenced aesthetic. Borders are used sparingly: a 2px solid black outline for secondary buttons, hairline rules in the footer legal strip. The overall effect is of a well-designed annual report or policy document brought to screen—authoritative, structured, and deliberately unflashy despite the vibrant colors.

Iconography is minimal and functional: dropdown chevrons, a globe for language selection, a magnifying glass for search, and standard social platform marks. All icons appear in black, maintaining the universal ink color rule.

## Components

### Primary navigation

- **Anatomy**: Red logo block (left), primary link cluster (center-left), utility cluster with language selector and search (right)
- **Surface**: Full mustard yellow background, logo on red square
- **Typography**: Navigation token, bold weight, black text
- **Shape**: Zero border radius on all elements; hard rectangular edges
- **Spacing**: Logo block flush to left edge; links spaced approximately 2rem apart; utility cluster right-aligned with viewport padding
- **Composition**: Horizontal flex layout with space-between distribution
- **Variants**: Dropdown items indicated by downward chevron; "Donate" appears as text link without special treatment

### Article card

- **Anatomy**: Category tag (top-left), author avatar and name bar, headline, date
- **Surface**: White or warm gray background; no border, no shadow
- **Typography**: Section-display for headline, body-small for date, label for category tag
- **Shape**: Zero border radius; sharp rectangular corners
- **Spacing**: 1.5rem internal padding; tag and author bar sit at top edge with minimal offset
- **Composition**: Vertical stack with headline taking primary visual weight; date anchored to bottom
- **Variants**: White background for most cards; warm gray (#E5E2D4) background for select cards creating subtle rhythm

### Category tag

- **Anatomy**: Text label only
- **Surface**: Black background, white text
- **Typography**: Label token, uppercase or title-case treatment
- **Shape**: Zero border radius; sharp rectangle
- **Spacing**: Compact padding approximately 0.25rem vertical, 0.75rem horizontal
- **Composition**: Inline element positioned at card top-left, sometimes overlapping author bar

### Author attribution bar

- **Anatomy**: Circular avatar image, name text on teal background strip
- **Surface**: Teal highlight bar extending right from avatar
- **Typography**: Body-small, black text on teal
- **Shape**: Circular avatar (50% radius); rectangular name bar
- **Spacing**: Avatar approximately 2rem diameter; name bar padding creates continuous horizontal element

### Primary button

- **Anatomy**: Text label with optional arrow icon
- **Surface**: Olive green background, white text
- **Typography**: Label token, bold weight
- **Shape**: Slight border radius (0.25rem)
- **Spacing**: Generous padding, approximately 1rem vertical, 2rem horizontal
- **Composition**: Centered text; arrow icon right-aligned within button

### Secondary button

- **Anatomy**: Text label with arrow icon
- **Surface**: White background, black text, 2px black border
- **Typography**: Label token, bold weight
- **Shape**: Slight border radius (0.25rem)
- **Spacing**: Same generous padding as primary
- **Composition**: Centered text; arrow icon follows label with small gap

### Footer

- **Anatomy**: Four content columns, social icon row, legal strip with certification badges
- **Surface**: Mustard yellow main area, gray (#E8E6D8) legal strip below
- **Typography**: Navigation token for column headers, body-small for content, body-small for legal text
- **Shape**: Zero border radius; full-width sections
- **Spacing**: Columns evenly distributed with consistent gutters; social icons in horizontal row with 1rem gaps
- **Composition**: Asymmetrical content distribution—contact details left, practical details center, quick links right; certification badges right-aligned in legal strip

### Cookie consent banner

- **Anatomy**: Logo block, explanatory text, action button stack
- **Surface**: Light gray-green canvas background
- **Typography**: Body for explanation, label for buttons
- **Shape**: Slight radius on buttons only
- **Spacing**: Full-width bar; content in contained width; buttons stacked vertically with small gap
- **Composition**: Logo and text left-aligned; buttons right-aligned in fixed-width column

## Responsive behavior

The design appears optimized for desktop viewport widths, with a contained content area that would require adaptation for smaller screens. The three-column card grid should collapse to single column on narrow viewports, with cards stacking vertically and maintaining full width. The four-column footer would similarly stack, with each column becoming a full-width block with increased vertical spacing between them.

Navigation items with dropdown chevrons suggest touch targets should maintain adequate size; the current desktop spacing of approximately 2rem between links provides room for finger-friendly expansion. The logo block's fixed square proportion should scale down proportionally, potentially reducing from its current large presence to a more compact mark while preserving the red square background.

The bold color fields work at any width but may benefit from reduced section padding on mobile to prevent excessive scrolling. The cookie consent banner's side-by-side layout would need to stack vertically on narrow screens, with buttons moving below explanatory text.

## Practical implementation guidance

### Preserve
- The hard-edged, zero-radius aesthetic on cards and major containers—this flatness is central to the civic identity
- The mustard yellow header/footer framing with red logo block as asymmetrical anchor
- The bold Poppins weight for all navigation and display; do not substitute lighter weights
- The teal author name bars as distinctive metadata treatment
- The inverted black category tags for high-contrast scanning

### Avoid
- Adding shadows, gradients, or glassmorphism effects that would undermine the flat print aesthetic
- Rounding card corners or adding decorative borders that soften the institutional tone
- Using the brand red for anything beyond the logo mark—it functions as a signature, not an accent
- Mixing additional typefaces; the Poppins/Merriweather pairing is deliberately constrained

### Recommended build order
1. Establish color tokens and apply to full-bleed section backgrounds
2. Implement typography scale with Poppins Bold for navigation and Merriweather Regular for body
3. Build header with logo block and horizontal navigation
4. Create article card component with tag, author bar, and content stack
5. Implement three-column grid for latest updates section
6. Build footer with four-column layout and legal strip
7. Add cookie consent banner with stacked button layout
8. Refine spacing rhythm across all sections

### Accessibility
- Ensure black text on mustard yellow and teal backgrounds meets contrast requirements; the yellow in particular may need verification at smaller sizes
- Maintain visible focus indicators on all interactive elements; the current design shows no custom focus states
- Provide aria-labels for icon-only buttons (search, social links)
- Consider reduced-motion preferences for any dropdown or expand behaviors
- Ensure cookie consent actions are reachable via keyboard and clearly labeled

## Scope note

This guide covers the homepage surface including header navigation, latest updates section, cookie consent banner, and footer. Measurements are practical adaptation targets. Mobile breakpoints, hover states, form components, interior page templates, and motion behavior are not represented in the supplied material.
