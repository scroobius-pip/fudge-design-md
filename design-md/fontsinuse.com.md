# How fontsinuse.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fontsinuse.com-design)

Last updated: 2026-08-10

## Captured pages

[![Global navigation mega-menu with Topics, Formats, and Typefaces columns showing dense taxonomy links in small Tn type](https://pin.fontofweb.com/6844?format=jpg)](https://design.withfudge.com/share/pin-6844)

[Global navigation mega-menu with Topics, Formats, and Typefaces columns showing dense taxonomy links in small Tn type](https://design.withfudge.com/share/pin-6844)

[![Staff Pick cards grid with project thumbnails, typeface names, and a minimal footer with utility links](https://pin.fontofweb.com/6843?format=jpg)](https://design.withfudge.com/share/pin-6843)

[Staff Pick cards grid with project thumbnails, typeface names, and a minimal footer with utility links](https://design.withfudge.com/share/pin-6843)

[![Comment form with labeled inputs, Submit Comment button, and More in Local section with sponsor advertisement](https://pin.fontofweb.com/6842?format=jpg)](https://design.withfudge.com/share/pin-6842)

[Comment form with labeled inputs, Submit Comment button, and More in Local section with sponsor advertisement](https://design.withfudge.com/share/pin-6842)

[![Article page for Bruket Fjellhamar with large artwork, Relay Condensed headline, and right sidebar metadata](https://pin.fontofweb.com/6841?format=jpg)](https://design.withfudge.com/share/pin-6841)

[Article page for Bruket Fjellhamar with large artwork, Relay Condensed headline, and right sidebar metadata](https://design.withfudge.com/share/pin-6841)

## Overview

Fonts In Use is an independent archive of typography that treats its own interface with the same editorial rigor it applies to the work it documents. The design system is built on extreme contrast: pure black ink against a white canvas, with no decorative color to distract from the content. The visual hierarchy relies entirely on typographic scale and weight, using a condensed sans-serif for commanding headlines and a refined serif for readable body text. The result is a dense, information-rich environment that feels like a printed reference book translated to the screen. Navigation is expansive and categorical, with mega-menus that expose the full depth of the archive's taxonomy. Every element serves the core mission of presenting typographic work with clarity and authority.

## Colors

The palette is deliberately austere, built from achromatic values that keep attention on the photographic and typographic content.

| token | hex | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, borders, active navigation states |
| muted-ink | #999999 | Secondary buttons, inactive states, metadata, disabled text |
| border | #CCCCCC | Input field outlines, subtle dividers, hairline separators |
| border-light | #DDDDDD | Lighter structural borders, footer top rules |
| surface | #F0F0F0 | Secondary button backgrounds, subtle UI surfaces |
| canvas | #FFFFFF | Page background, input backgrounds, card surfaces |

The system operates in a single light mode. There is no dark mode in the visible interface. Color is reserved entirely for the content itself—photography, artwork, and embedded images—while the UI remains strictly monochrome. This creates a museum-like presentation where the archive material receives full visual priority. The muted-ink token serves as the single de-emphasized tone, used for secondary actions and metadata without introducing chromatic distraction.

## Typography

The type system pairs two distinct families: Relay Condensed for display and Tn for text. Relay Condensed provides the characterful, compressed voice of the brand in headlines and navigation anchors. Tn, a serif, handles everything from body copy to labels with classical readability. The scale is compact, with display sizes that feel large relative to the dense body text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Relay Condensed | 3rem | 700 | 1 | normal | Article titles, major page headings |
| section-display | Relay Condensed | 2.25rem | 700 | 1 | normal | Section headers, card titles |
| sub-section-display | Relay Condensed | 1.5rem | 700 | 1 | normal | Sidebar headings, sub-section labels |
| body | Tn | 0.875rem | 400 | 1.6 | normal | Paragraphs, descriptions, form labels |
| body-small | Tn | 0.75rem | 400 | 1.6 | normal | Metadata, captions, button text |
| label | Tn | 0.625rem | 400 | 1.1 | normal | Dense taxonomy lists, tag counts |
| navigation | Tn | 0.625rem | 400 | 1.1 | normal | Mega-menu links, footer navigation |
| navigation-large | Relay Condensed | 2.25rem | 400 | 1 | normal | Primary navigation anchors, logo-adjacent links |

Relay Condensed is designed by Cyrus Highsmith, available from Occupant Fonts, a Morisawa brand. Tn is credited as "Tn Web Use Only" from Type Network. Font Awesome serves as the icon system, designed by Dave Gandy from Fort Awesome. Verify licensing for these families before production use.

## Layout

The layout follows a centered, fixed-width container model with generous whitespace around dense content clusters. The header occupies the full width with a three-zone structure: the stacked "FONTS IN USE" wordmark on the left, a center column for Collection and Blog navigation with sponsor acknowledgment, and a search interface on the right. Below this, a full-bleed navigation bar carries the primary taxonomy dropdowns.

Content pages use a two-column asymmetry: the main content area holds large artwork and article text, while a narrower right sidebar presents structured metadata—typefaces, formats, topics, designers, and tags. This sidebar repeats the visual language of the main navigation in miniature, with bold Relay Condensed headings over Tn link lists.

The footer is minimal and utilitarian, organized in columns of text links without decorative elements. A single horizontal rule in ink separates the footer from the content above.

Spacing is tight and systematic. The base unit of 0.125rem creates a granular scale where 5px becomes 0.3125rem, 10px becomes 0.625rem, 20px becomes 1.25rem, 30px becomes 1.875rem, and 50px becomes 3.125rem. Section-level padding uses 3.75rem for major vertical rhythm. Content blocks stack with 1.25rem gaps, maintaining the dense but breathable character of the archive.

## Visual language

The visual character is that of a scholarly reference: authoritative, unadorned, and content-forward. Photography and artwork are presented at full scale without borders, shadows, or frames, allowing the work to speak directly. The only visual interruption is the "Staff Pick" diagonal ribbon that appears on selected cards—a rare decorative element in an otherwise restrained system.

Typography itself becomes the primary visual language. The extreme weight contrast between Relay Condensed at 700 and Tn at 400 creates hierarchy without color. The condensed proportions of the display face echo the subject matter: this is a site about type, and its headlines demonstrate the expressive potential of compressed letterforms.

Rules and borders are used structurally rather than decoratively. The 3px top border on sidebar headings, the 1px hairlines between taxonomy items, and the 5px top border on the footer all serve to organize information rather than embellish it. The absence of rounded corners on cards, images, or containers reinforces the archival, print-native aesthetic.

## Components

### Primary button
- **Anatomy**: Text label with no icon
- **Surface**: Muted-ink background with canvas text
- **Typography**: Body-small token, Tn family
- **Shape**: 2px border radius
- **Spacing**: 5px vertical padding, 10px horizontal padding
- **Composition**: Inline with other controls, often paired with a secondary button
- **Variants**: Active state uses solid muted-ink; a secondary variant inverts to surface background with muted-ink text

### Secondary button
- **Anatomy**: Text label, visually lighter than primary
- **Surface**: Surface background with muted-ink text
- **Typography**: Body-small token
- **Shape**: 2px border radius
- **Spacing**: 5px vertical padding, 10px horizontal padding
- **Composition**: Appears adjacent to primary buttons for alternative actions

### Text input
- **Anatomy**: Label text above, single-line or multi-line field
- **Surface**: Canvas background with border outline
- **Typography**: Body token for input text, body-small for labels
- **Shape**: No border radius, rectangular
- **Spacing**: Generous internal padding, full-width within form container
- **Composition**: Stacked vertically in forms with 10-20px gaps between fields

### Navigation dropdown
- **Anatomy**: Trigger label with downward indicator, expansive panel on activation
- **Surface**: Canvas background, ink text
- **Typography**: Label token for taxonomy links, navigation-large for section headers within panel
- **Shape**: Full-width panel below header bar
- **Composition**: Three or more columns of links organized by category, with counts in parentheses
- **Variants**: Hover states likely invert to ink background with canvas text

### Content card
- **Anatomy**: Thumbnail image, title in Relay Condensed, subtitle or metadata in Tn
- **Surface**: Transparent, sitting on canvas
- **Typography**: Section-display for titles, body for secondary information
- **Shape**: No border radius, no shadow
- **Spacing**: Tight internal spacing, grid arrangement with consistent gaps
- **Composition**: Horizontal rows or grid, with "Staff Pick" ribbon as optional overlay

### Sidebar module
- **Anatomy**: Heading in Relay Condensed, followed by linked list in Tn
- **Surface**: Transparent
- **Typography**: Sub-section-display for heading, body for links
- **Shape**: 3px top border on heading as section delimiter
- **Spacing**: 10px padding below heading, 10px margin to next module
- **Composition**: Stacked vertically on right side of article pages

### Footer
- **Anatomy**: Multiple columns of text links, copyright notice
- **Surface**: Canvas with 5px top border in ink
- **Typography**: Body for links, label for dense columns
- **Shape**: Full-width, no border radius
- **Spacing**: 10px top padding, generous internal column spacing
- **Composition**: Left-aligned link columns with right-aligned copyright

## Responsive behavior

The visible interface suggests a desktop-primary design with fixed-width constraints. The two-column article layout with sidebar would require adaptation for narrower viewports. At reduced widths, the sidebar should stack below the main content, and the three-column mega-menu would need to collapse to a single scrollable column or accordion pattern. The header's three-zone structure—logo, center navigation, search—would compress to a stacked or hamburger arrangement.

Touch targets in the dense navigation lists should be enlarged on mobile, with minimum 44px tap areas replacing the current compact 10px-line-height links. The search input, currently positioned in the header, may need to become a toggle-revealed field to preserve horizontal space.

Image grids should reflow from multiple columns to single-column scrolling, maintaining the full-bleed presentation of artwork without cropping or letterboxing.

## Practical implementation guidance

### Preserve
- The stark black-and-white palette; any color introduction should come from content only
- The weight contrast between Relay Condensed headlines and Tn body text
- The full-bleed, unframed presentation of artwork and photography
- The dense, information-rich taxonomy navigation with visible link counts
- The 3px structural borders as section delimiters

### Avoid
- Adding background colors, shadows, or rounded corners to cards and containers
- Reducing the size of display headlines; the condensed face needs scale to remain legible
- Replacing the two-family type system with a single generic sans-serif
- Hiding link counts in parentheses; these provide essential wayfinding density
- Using color for interactive states; rely on inversion or underline instead

### Recommended build order
1. Establish the type system with both Relay Condensed and Tn loaded and the full scale defined
2. Build the header with logo, center navigation, and search in the three-zone structure
3. Implement the mega-menu dropdown with multi-column taxonomy layout
4. Create the article page template with two-column asymmetry and sidebar modules
5. Add the footer with columnar link organization and top border rule
6. Refine button and input components with the minimal 2px radius
7. Implement image presentation with full-bleed, unframed treatment

### Accessibility
- Ensure the 10px label and navigation text meets contrast ratios; the current #999999 on #FFFFFF may fail WCAG AA for small text
- Provide visible focus indicators on all interactive elements, using ink outlines or inversions
- Add aria-expanded and aria-controls to the dropdown navigation triggers
- Maintain logical heading hierarchy with h1 for article titles, h2 for sections, h3 for sidebar modules
- Ensure form labels are explicitly associated with inputs using for attributes

## Scope note

This guide covers the desktop article page, global navigation, card grids, comment forms, and footer as visible in the supplied images. Mobile breakpoints, hover animations, loading states, error pages, user account interfaces, and the editorial blog section are not represented. Measurements are derived from the exact values in the design facts and rounded to the 0.125rem base unit.
