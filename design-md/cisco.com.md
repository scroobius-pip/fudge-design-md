# How cisco.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cisco.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with Cisco corporate links, social icons, and green accessibility widget on light gray background](https://pin.fontofweb.com/2389?format=jpg)](https://design.withfudge.com/share/pin-2389)

[Footer section with Cisco corporate links, social icons, and green accessibility widget on light gray background](https://design.withfudge.com/share/pin-2389)

[![Dark navy hero banner with white headline, blue pill button, and text link with chevron](https://pin.fontofweb.com/2388?format=jpg)](https://design.withfudge.com/share/pin-2388)

[Dark navy hero banner with white headline, blue pill button, and text link with chevron](https://design.withfudge.com/share/pin-2388)

[![Technology category grid with six icon cards and Inside Cisco content section with three-column layout](https://pin.fontofweb.com/2387?format=jpg)](https://design.withfudge.com/share/pin-2387)

[Technology category grid with six icon cards and Inside Cisco content section with three-column layout](https://design.withfudge.com/share/pin-2387)

[![AI innovation section with four media cards, descriptive text, and blue action links on light gray background](https://pin.fontofweb.com/2386?format=jpg)](https://design.withfudge.com/share/pin-2386)

[AI innovation section with four media cards, descriptive text, and blue action links on light gray background](https://design.withfudge.com/share/pin-2386)

## Overview

The Cisco.com design system presents a mature corporate technology aesthetic built on restraint and clarity. The visual language pairs deep navy backgrounds with bright cyan-blue accents against expansive white and light gray surfaces. Content moves through hierarchical card grids, pill-shaped calls to action, and generous negative space. The system relies on a single font family—Cisco Sans Tt Light—rendered at light weights for headlines and regular weights for functional text, creating an airy, confident tone appropriate for enterprise infrastructure messaging. Photography and product imagery appear inside rounded cards with subtle borders, while icon-driven category grids offer scannable technology exploration. The overall impression is one of established authority: minimal decoration, maximum readability, and a consistent rhythm of section spacing that lets complex product narratives breathe.

## Colors

The palette divides into three functional zones: deep navy for dramatic hero moments, bright cyan-blue for interactive emphasis, and a neutral scale from white through light gray for content surfaces.

| token | value | use |
|---|---|---|
| action | #049fd9 | Primary buttons, text links, icon accents, and interactive highlights |
| action-hover | #0378a6 | Darker blue for hover states on action elements |
| ink | #000000 | Pure black for maximum contrast elements |
| ink-primary | #1a1a1a | Near-black for primary headlines and body text on light backgrounds |
| ink-secondary | #4d4d4d | Medium gray for secondary text, captions, and footer links |
| canvas | #ffffff | Pure white for primary page background and card surfaces |
| surface | #f7f7f7 | Light warm gray for section alternation and footer background |
| surface-elevated | #ffffff | White for cards elevated above gray sections |
| border | #e0e0e0 | Light gray for card outlines and dividers |
| border-subtle | #d1d1d1 | Slightly darker gray for focused borders |
| navy | #0a1f44 | Deep navy for hero banners and dark sections |
| navy-light | #1a3a6b | Lighter navy for subtle variation within dark surfaces |

The dark mode of the system is expressed through the navy hero banner, where white text and the bright action blue create high-contrast focal points. Light mode dominates the page body, with alternating white and light gray sections creating gentle vertical rhythm. The action blue functions as the sole accent color, appearing in buttons, links, and iconography with consistent saturation that avoids competing hues. Photography within cards introduces its own color temperature—cool blues in technology imagery, warm skin tones in people photography—but the UI palette remains neutral and stable around it.

## Typography

The system uses one font family across all text roles. Cisco Sans Tt Light provides an open, modern character with generous counters and minimal stroke contrast. Light weights carry display and headline duties, while regular weight handles navigation, labels, and body text at smaller sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Cisco Sans Tt Light | 3rem | 300 | 1.1 | -0.01em | Hero banner headlines on dark backgrounds |
| section-display | Cisco Sans Tt Light | 2.5rem | 300 | 1.15 | -0.01em | Section headings like "Browse by technology" and "Inside Cisco" |
| body-large | Cisco Sans Tt Light | 1.25rem | 300 | 1.5 | 0em | Introductory paragraphs and hero descriptions |
| body | Cisco Sans Tt Light | 1rem | 300 | 1.5 | 0em | Standard paragraph text within cards and content blocks |
| body-small | Cisco Sans Tt Light | 0.875rem | 300 | 1.5 | 0em | Card descriptions and secondary content |
| label | Cisco Sans Tt Light | 0.875rem | 400 | 1.25 | 0em | Button labels, category names, and link text |
| navigation | Cisco Sans Tt Light | 0.875rem | 400 | 1.25 | 0em | Footer links and top-level navigation items |
| legal-copy | Cisco Sans Tt Light | 0.75rem | 400 | 1.5 | 0em | Copyright text and fine-print footer content |

Verify licensing for these families before production use. The light weight at display sizes creates distinctive horizontal rhythm with the wide letterforms, while the shift to regular weight at functional sizes ensures readability without visual heaviness. Negative tracking on headlines tightens the loose light-weight forms into cohesive lines.

## Layout

The layout follows a centered container model with generous external padding and internal gutters. Major sections stack vertically with substantial spacing between them, creating clear content territories.

The page structure visible in the images shows a progression from dark hero banner through light content sections. The hero banner spans full width with asymmetric two-column content: a large headline on the left and descriptive text with actions on the right. Below, alternating white and light gray sections contain centered headings, card grids, and multi-column editorial layouts.

Card grids use consistent gap spacing between items. The technology category grid presents six equal cards in a 3×2 formation, each centered with icon above label. The AI innovation section shows four media cards in a horizontal row with equal widths, each containing an image, headline, description, and action links. The Inside Cisco section uses a three-column editorial layout with category labels, headlines, descriptions, and linked actions.

Section spacing creates deliberate pause between content types. Internal card padding maintains consistent breathing room around text and imagery. Footer content compresses into multiple rows of links with reduced vertical spacing, signaling subsidiary information hierarchy.

## Visual language

The visual character balances corporate restraint with approachable technology warmth. Rounded corners appear throughout—cards carry moderate radius, buttons are fully pill-shaped, and the overall effect softens what could otherwise feel austere. Iconography uses thin-line geometric forms in the action blue, matching the weight and openness of the typeface.

Photography treatment favors real technology environments: server rooms, product interfaces, and professional settings with natural lighting. Images fill card tops with rounded upper corners, creating contained viewports into content. The absence of heavy shadows or dimensional effects keeps the system flat and contemporary.

The green accessibility widget visible in the footer introduces a functional accent outside the primary palette, serving as a persistent help mechanism without disrupting the core visual system. Social icons in the footer use simple outlined circles in medium gray, maintaining the restrained iconographic approach.

Color application follows a clear hierarchy: navy commands attention for hero messaging, white and gray provide neutral territory for detailed content, and action blue marks every interactive opportunity with consistent saturation. This tripartite structure prevents visual fatigue across long pages while ensuring users can always locate navigation paths.

## Components

### Primary action button

- **Anatomy**: Text label centered within a fully rounded pill shape
- **Surface and text color**: Action blue background with white text
- **Typography**: Label token at regular weight
- **Shape**: Pill border radius with horizontal padding wider than vertical
- **Spacing**: Comfortable internal padding creating substantial click target
- **Composition**: Often paired with text-link alternative to its right
- **Variants**: Appears on both dark navy and light backgrounds; on dark backgrounds the blue gains additional saturation through contrast

### Text link with chevron

- **Anatomy**: Action-colored text followed by right-pointing chevron icon
- **Surface and text color**: Transparent background, action blue text
- **Typography**: Label token at regular weight
- **Shape**: No visible border or background shape
- **Spacing**: Tight internal spacing with chevron slightly separated from text
- **Composition**: Used in groups within cards and as standalone actions
- **Variants**: Appears in card footers, hero descriptions, and editorial columns

### Category card

- **Anatomy**: Centered icon above bold category name, contained within bordered rectangle
- **Surface and text color**: White background with dark text, thin gray border
- **Typography**: Label token for category name
- **Shape**: Moderate rounded corners with consistent border width
- **Spacing**: Generous internal padding creating square-ish proportions
- **Composition**: Grid arrangement with equal gaps between cards
- **Variants**: Six visible categories—Networking, Security, Observability, Collaboration, Computing, AI—each with distinctive thin-line icon

### Media card

- **Anatomy**: Full-width image at top, headline, description paragraph, and one or more action links below
- **Surface and text color**: White card surface on gray section background, dark text
- **Typography**: Section-display token for headline, body-small for description, label for links
- **Shape**: Rounded corners with image filling top portion
- **Spacing**: Internal padding separating image from text, comfortable line spacing in description
- **Composition**: Horizontal row of equal-width cards with consistent gaps
- **Variants**: Some cards contain single action link, others contain multiple stacked links

### Footer

- **Anatomy**: Multiple rows of text links, social icon row, copyright notice, and floating accessibility widget
- **Surface and text color**: Light gray background with medium gray text
- **Typography**: Navigation token for link rows, legal-copy for copyright
- **Shape**: Full-width band with no rounded corners
- **Spacing**: Reduced vertical spacing between link rows compared to main content sections
- **Composition**: Top row with corporate links left and social icons right; middle row with dense legal and utility links; bottom row with copyright
- **Variants**: Social icons use circular outlined containers

## Responsive behavior

The visible desktop layout suggests a single breakpoint strategy would serve most content transformations. The hero banner's two-column layout should stack vertically on narrower viewports, with headline above description and actions. The technology category grid should collapse from three columns to two, then single column, maintaining card proportions and touch-friendly tap targets. The four-column AI innovation card row should become two columns, then single column with full-width images. The Inside Cisco three-column editorial layout should stack sequentially, preserving the label-headline-description-link hierarchy within each block. Navigation and footer links should wrap gracefully or collapse into expandable sections. Touch targets for pill buttons and category cards should maintain minimum dimensions appropriate for finger interaction.

## Practical implementation guidance

### Preserve
- The light weight of Cisco Sans Tt Light for all display and headline text; this is the system's most distinctive characteristic
- The pill shape for all primary actions; the fully rounded ends are signature elements
- The action blue as the sole interactive accent; resist introducing additional button colors
- The generous section spacing that creates breathing room between content types
- The thin-line icon style matching the typeface weight

### Avoid
- Heavy drop shadows or dimensional effects; the system remains flat and surface-based
- Saturated colors outside the action blue and navy range
- Tight letter-spacing on light-weight headlines; the slight negative tracking is calibrated for this specific weight
- Generic sans-serif fallbacks that lack the openness of Cisco Sans; specify a comparable humanist alternative if needed

### Recommended build order
1. Establish the type scale with Cisco Sans Tt Light at all specified sizes and weights
2. Implement the color tokens, beginning with navy, action blue, and the neutral scale
3. Build the pill button component as the primary interactive element
4. Create the card component with rounded corners, border, and internal padding
5. Construct the hero banner with two-column asymmetric layout
6. Implement the category grid and media card patterns
7. Add the footer with multi-row link structure

### Accessibility
- Ensure action blue on white meets WCAG AA contrast ratios; the visible shade appears sufficiently saturated
- White text on navy hero backgrounds provides strong contrast; verify for all headline sizes
- Maintain visible focus indicators on pill buttons and text links; the flat design requires explicit focus states
- Provide adequate touch targets for category cards on mobile viewports
- Include skip navigation and logical heading hierarchy through stacked sections

## Scope note

This guide covers the Cisco.com homepage visible in the supplied images, including the hero banner, technology category grid, AI innovation media cards, Inside Cisco editorial section, and footer. Interior pages, navigation dropdowns, search functionality, form interactions, and motion behavior are not represented. Measurements are practical adaptation targets derived from visual inspection of the desktop layout.
