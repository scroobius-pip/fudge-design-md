# How regeneratio.eu is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/regeneratio.eu-design)

Last updated: 2026-08-10

## Captured pages

[![Dark footer section with three-column layout showing expertise description, contact details, and legal links with social icons](https://pin.fontofweb.com/1411?format=jpg)](https://design.withfudge.com/share/pin-1411)

[Dark footer section with three-column layout showing expertise description, contact details, and legal links with social icons](https://design.withfudge.com/share/pin-1411)

[![News section titled Aktuelles & Informatives with three article cards featuring photography, book covers, and green-tinted imagery with black buttons](https://pin.fontofweb.com/1410?format=jpg)](https://design.withfudge.com/share/pin-1410)

[News section titled Aktuelles & Informatives with three article cards featuring photography, book covers, and green-tinted imagery with black buttons](https://design.withfudge.com/share/pin-1410)

[![Expertise section with portrait photograph and five expandable accordion items with plus icons on white background](https://pin.fontofweb.com/1409?format=jpg)](https://design.withfudge.com/share/pin-1409)

[Expertise section with portrait photograph and five expandable accordion items with plus icons on white background](https://design.withfudge.com/share/pin-1409)

[![Services section with three large circular icons on white discs above black rectangular buttons on light gray background](https://pin.fontofweb.com/1408?format=jpg)](https://design.withfudge.com/share/pin-1408)

[Services section with three large circular icons on white discs above black rectangular buttons on light gray background](https://design.withfudge.com/share/pin-1408)

## Overview

The regeneratio.eu design system supports a German pastoral consulting and coaching practice led by Friedemann Burkhardt. The visual language balances institutional credibility with personal warmth through a stark black-and-white foundation, generous whitespace, and carefully selected photography. The system prioritizes readability and trust, using a single type family across all text with weight and size variations to establish hierarchy. Content sections alternate between clean white backgrounds and muted gray surfaces, creating visual rhythm without decorative excess. The overall impression is of practiced professionalism—direct, uncluttered, and confident in its restraint.

## Colors

The palette is intentionally minimal, built on a high-contrast black-and-white core with two supporting neutrals. This restraint allows photography and content to carry visual interest while maintaining consistent brand presence.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, buttons, borders, and icon strokes |
| canvas | #ffffff | Page backgrounds, card surfaces, icon disc fills |
| surface | #e8e8e8 | Alternate section backgrounds, subtle differentiation |
| muted | #5a5a5a | Secondary text, footer body copy, captions |
| deep | #1a1a1a | Footer background, darkest surfaces |

The ink and canvas pairing drives the interface. Black buttons with white text provide unambiguous calls to action. White backgrounds dominate content sections, while the light gray surface appears behind service offerings to create a contained, gallery-like environment. The deep tone anchors the footer, where white and muted gray text reverses out for legibility. No accent colors appear in the interface itself; color emerges through photography and book cover imagery rather than UI decoration.

## Typography

The system relies on the Acumin Pro family, a contemporary sans-serif available through Typekit. The supplied source files include Acumin Pro-Regular, Acuminpro-500, Acuminpro-Italic 300, and Acuminpro-Regular, providing regular, medium, and light italic variants. The family delivers clarity at all sizes with a neutral, authoritative character suited to institutional consulting content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Acumin Pro | 3rem | 400 | 1.1 | -0.01em | Major section headings |
| section-display | Acumin Pro | 2.5rem | 400 | 1.15 | -0.01em | Subsection titles |
| body | Acumin Pro | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions |
| body-medium | Acumin Pro | 1.125rem | 400 | 1.5 | 0 | Lead paragraphs, accordion items |
| label | Acumin Pro | 0.875rem | 500 | 1.4 | 0.01em | Button text, navigation labels |
| navigation | Acumin Pro | 1rem | 400 | 1.4 | 0 | Menu items, links |

The type scale uses a 4px relative unit, with sizes snapping to whole multiples: 0.875rem (14px), 1rem (16px), 1.125rem (18px), 2.5rem (40px), and 3rem (48px). Display sizes employ slight negative tracking for tighter, more deliberate headlines. Body text maintains generous line height for extended German prose. The medium weight (500) appears only in labels and buttons, creating subtle emphasis without visual noise. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with generous vertical breathing room. Sections stack vertically with substantial gaps, typically 6rem between major areas. Content max-width appears to center around 1200px, with internal padding of 2rem to 3rem on the sides.

Horizontal composition varies by section type. The news area uses a three-column grid with equal-width cards, each containing an image, title, paragraph, and button. The expertise section splits into a two-column layout: a portrait photograph occupies roughly 40% width on the left, while an accordion list fills the remaining 60% on the right. The services section centers three large circular icons in a row, each with a button beneath. The footer expands to a three-column structure on dark ground, with the left column taking more width for descriptive content.

Vertical rhythm within sections follows consistent patterns. Section headings sit with 2rem to 3rem of space above content blocks. Card images maintain aspect ratio, with text beginning 1.5rem below. Buttons align to the bottom of cards, creating a clean horizontal line across the row. The accordion uses full-width horizontal rules between items, with 1.5rem of vertical padding inside each row.

## Visual language

Photography plays a central role in establishing warmth and human presence. Portrait images show the practitioner in natural settings—office environments with window light, engaged in conversation or reflective poses. The color treatment leans warm and slightly desaturated, avoiding clinical brightness. Book covers and promotional materials appear as photographed objects rather than digital mockups, lending tactile credibility.

Iconography follows a strict line-art convention. The service icons—church building, globe, and books—use uniform black strokes on white circular backgrounds. The style is illustrative rather than geometric, with hand-drawn quality in the line weights and details. These discs float on gray surfaces, creating physical objects that invite interaction.

The absence of decorative elements, gradients, or shadows is deliberate. Depth comes from photography, scale contrast between display and body type, and the occasional tonal shift between white and gray backgrounds. Borders appear as single-pixel hairlines in black, most visibly in the accordion dividers and implied card edges.

## Components

### Primary action button

A rectangular black button with white text. No border radius, no shadow.

- **Anatomy**: Text label centered within a solid fill container
- **Surface**: `backgroundColor: {colors.ink}`, `color: {colors.canvas}`
- **Typography**: `{typography.label}` at 0.875rem, weight 500
- **Shape**: `borderRadius: {rounded.button}` (0), sharp corners
- **Spacing**: Padding approximately 1rem vertical, 2rem horizontal
- **Composition**: Appears at the bottom of cards and beneath service icons
- **Variants**: No visible hover or active states in supplied images

### Content card

A vertical container for news items with image, title, description, and action.

- **Anatomy**: Image (top), title, paragraph text, button (bottom)
- **Surface**: `backgroundColor: {colors.canvas}`, no visible border or shadow
- **Typography**: Title uses `{typography.section-display}` at reduced size or `{typography.body-medium}` weight; body uses `{typography.body}`
- **Shape**: `borderRadius: {rounded.panel}` (0), rectangular
- **Spacing**: Internal padding approximately 0; text begins below image with 1.5rem gap
- **Composition**: Three cards in equal-width row with 2rem gutters

### Accordion item

An expandable list row with a trigger and hidden content area.

- **Anatomy**: Text label, plus icon (right-aligned), horizontal rule below
- **Surface**: `backgroundColor: {colors.canvas}`, `borderColor: {colors.ink}` at 1px
- **Typography**: `{typography.body-medium}` at 1.125rem
- **Shape**: Full-width horizontal rule as bottom border
- **Spacing**: Vertical padding approximately 1.5rem per item
- **Composition**: Stacked vertically with no gaps between rules
- **States**: Collapsed state visible; plus icon indicates expandability

### Icon disc

A large circular container for illustrative line art.

- **Anatomy**: White circle containing a centered black line illustration
- **Surface**: `backgroundColor: {colors.canvas}`, `borderRadius: {rounded.disc}`
- **Color**: Icon strokes in `{colors.ink}`
- **Spacing**: Discs appear with substantial margin, approximately 3rem to 4rem diameter
- **Composition**: Three discs evenly distributed in a row on `{colors.surface}` background

### Footer

A dark, full-width section containing site information, contact details, and legal links.

- **Anatomy**: Three columns—expertise description, contact information, legal links and social icons
- **Surface**: `backgroundColor: {colors.deep}`, `color: {colors.canvas}` for headings, `{colors.muted}` for body
- **Typography**: Headings use `{typography.section-display}` at reduced size; body uses `{typography.body}` in muted tone
- **Shape**: Full bleed, no border radius
- **Spacing**: Generous internal padding, approximately 4rem vertical
- **Composition**: Left column wider; social icons appear as small circular buttons in a horizontal row

## Responsive behavior

The desktop layouts shown suggest a single breakpoint transition for smaller viewports. The three-column news grid should stack to single column on narrow screens, with images maintaining aspect ratio and buttons expanding to full width. The expertise section's two-column layout should reverse to stacked, with the portrait above the accordion. The three service discs should arrange vertically with maintained size, or reduce to two columns on intermediate widths.

Typography should scale down proportionally: section-display to 2rem, hero-display to 2.25rem on smaller screens. Body text may increase slightly to 1.125rem for touch readability. Footer columns should stack with the expertise description first, followed by contact, then legal links.

Touch targets for accordion items and buttons should maintain minimum 44px height. The plus icons in accordions should remain visible and tappable at all sizes.

## Practical implementation guidance

### Preserve
- The stark black-and-white palette with minimal neutrals; it is the system's signature restraint
- Generous whitespace between sections and around content blocks
- The single-type-family approach with weight and size as the only hierarchy tools
- Warm, natural photography with soft lighting and environmental context
- Hand-drawn quality of line icons within perfect geometric circles

### Avoid
- Adding accent colors to the UI; let photography provide color interest
- Rounded corners on buttons or cards; the sharp rectangle is intentional
- Drop shadows or elevation effects; the design is flat by principle
- Multi-line buttons; keep labels concise and single-line
- Decorative dividers beyond the single-pixel rules in accordions

### Recommended build order
1. Establish the type scale with Acumin Pro loaded from Typekit
2. Implement the color tokens with ink, canvas, surface, muted, and deep
3. Build the section container with max-width and vertical spacing
4. Create the primary action button component
5. Implement the content card with image, text, and button stacking
6. Build the accordion with horizontal rules and plus indicators
7. Create the icon disc with SVG line art and circular container
8. Assemble the footer with three-column layout on deep background

### Accessibility
- Ensure sufficient color contrast: ink on canvas exceeds WCAG AAA; muted on deep should be verified for body text compliance
- Provide visible focus indicators for keyboard navigation, likely an outline offset from button edges
- Mark accordion items with appropriate ARIA expanded and controls attributes
- Add alt text to all photography describing the scene and subject
- Social icons in the footer should have accessible labels

## Scope note

This guide covers the visible homepage sections including services, expertise, news, and footer. Navigation, mobile menu behavior, form interactions, and interior page templates are not represented in the supplied images. Measurements are practical adaptation targets derived from visual estimation.
