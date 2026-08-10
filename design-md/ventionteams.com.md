# How ventionteams.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ventionteams.com-design)

Last updated: 2026-08-10

## Captured pages

[![Portfolio page showing the Industries dropdown menu expanded over project cards for ClassPass and Bevi with a coral Contact us button in the header.](https://pin.fontofweb.com/7354?format=jpg)](https://design.withfudge.com/share/pin-7354)

[Portfolio page showing the Industries dropdown menu expanded over project cards for ClassPass and Bevi with a coral Contact us button in the header.](https://design.withfudge.com/share/pin-7354)

[![Our expertise section with a left sidebar navigation and a two-column grid of underlined service links on a light gray background.](https://pin.fontofweb.com/7353?format=jpg)](https://design.withfudge.com/share/pin-7353)

[Our expertise section with a left sidebar navigation and a two-column grid of underlined service links on a light gray background.](https://design.withfudge.com/share/pin-7353)

[![Numbers we're proud of statistics grid with large burgundy numerals 500+, $15B+, 36, 20+, 20+, 3K+ separated by hairline borders.](https://pin.fontofweb.com/7352?format=jpg)](https://design.withfudge.com/share/pin-7352)

[Numbers we're proud of statistics grid with large burgundy numerals 500+, $15B+, 36, 20+, 20+, 3K+ separated by hairline borders.](https://design.withfudge.com/share/pin-7352)

[![Accordion feature section with a team collaboration photograph on the left and expandable items with burgundy titles and checkmark lists on the right.](https://pin.fontofweb.com/7351?format=jpg)](https://design.withfudge.com/share/pin-7351)

[Accordion feature section with a team collaboration photograph on the left and expandable items with burgundy titles and checkmark lists on the right.](https://design.withfudge.com/share/pin-7351)

## Overview

Vention's design system presents a software-development company with editorial confidence and restrained sophistication. The visual language balances generous whitespace against precise grid structures, letting oversized typography and selective color accents carry the brand personality. The near-white canvas creates breathing room for dense content areas, while a burgundy and coral accent palette adds warmth without visual noise. The system moves between light and dark modes fluidly: light sections use black ink on warm gray surfaces, while dark hero sections invert to white text on deep near-black backgrounds. Navigation remains minimal and persistent, with dropdown menus that overlay content without disrupting the page rhythm. Every element feels intentionally placed, from the hairline borders that subdivide statistics grids to the pill-shaped buttons that punctuate calls to action.

## Colors

The palette is built on a neutral foundation with two warm accent colors that serve distinct roles. Burgundy carries authority and depth; coral provides energy and conversion focus.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headings, and iconography on light surfaces |
| muted-ink | #29292B | Secondary text, footer backgrounds, and subtle UI elements |
| accent-burgundy | #52002D | Statistics numerals, active navigation states, accordion titles, and dark-section backgrounds |
| accent-coral | #FF6A47 | Primary call-to-action buttons, active indicators, and emphasis elements |
| accent-coral-light | #FF977E | Hover states and secondary coral tints |
| surface | #EBEBED | Main page background and card surfaces |
| surface-warm | #D2D2D5 | Header backgrounds, borders, and subtle dividers |
| border | #434345 | Hairline grid borders, accordion separators, and table dividers |
| canvas | #FFFFFF | Pure white for contrast moments and inverted text |

The light mode dominates the experience: black text on #EBEBED surfaces creates a soft, paper-like quality that reduces eye strain during long reading sessions. Dark sections use #52002D as a background with white text, creating dramatic contrast for hero statements and emotional moments. The coral accent appears sparingly, reserved for the primary Contact us button and interactive highlights, ensuring it retains visual weight when deployed. No gradients or shadows are used; all depth comes from color contrast and spatial arrangement.

## Typography

Three font families appear in the system. Aeonik Pro Vf handles all display and body text with a variable weight range from 300 to 500. Helvetica serves button labels at a single weight. System-Systemui appears as a fallback in limited contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Aeonik Pro Vf | 6.25rem | 400 | 1.15 | 0em | Homepage hero headlines |
| section-display | Aeonik Pro Vf | 4rem | 500 | 1.15 | 0em | Section headings, portfolio titles, stat numbers |
| subhead | Aeonik Pro Vf | 2rem | 500 | 1.3 | 0em | Accordion titles, active nav items, feature labels |
| body-large | Aeonik Pro Vf | 1.625rem | 300 | 1.4 | 0em | Descriptive paragraphs, expertise descriptions |
| body | Aeonik Pro Vf | 1rem | 400 | 1.5 | 0em | Navigation, captions, metadata |
| label | Aeonik Pro Vf | 1.625rem | 500 | 1.4 | 0em | Category tags, emphasized inline text |
| navigation | Aeonik Pro Vf | 1rem | 400 | 1.5 | 0em | Header menu items, dropdown options |
| button | Helvetica | 0.9375rem | 400 | 1.5 | 0.00625em | Pill button labels |

Aeonik Pro Vf's light weights (300) create an elegant, open feel for body text at larger sizes, while the medium weight (500) grounds headings with confident presence. The type scale uses a 2px relative unit, with sizes snapping to whole multiples: 16px base, stepping up through 21.2952px, 25.619px, 32.2667px, 63.6952px, and 99.2857px for the most dramatic hero moments. Line heights stay tight for display type (1.15) and relax for reading text (1.4). Letter spacing remains neutral throughout, letting the font's inherent spacing carry the rhythm.

Verify licensing for these families before production use.

## Layout

The layout system is built on a generous horizontal margin and a flexible grid that adapts to content density. The standard content inset is 43.2381px (approximately 2.7rem), creating consistent breathing room without excessive waste. Section vertical padding follows a deliberate hierarchy: standard sections use 63.6952px top and bottom, hero sections open with 154.333px top padding, and compact sections reduce to 40.9143px.

The grid relies heavily on 1px hairline borders in #434345 to create visual structure without heavy containers. This is most visible in the statistics grid, where borders subdivide cells into a clean matrix, and in the expertise section, where vertical borders separate the navigation sidebar from the content area. The portfolio page uses a two-column card layout with full-bleed imagery and overlaid text.

Navigation sits in a fixed or sticky header with a split composition: logo and globe icon left, primary links center, and a coral Contact us button right. Dropdown menus expand with a subtle background shift, listing items in a vertical stack with comfortable 14.9714px vertical padding.

Spacing tokens follow a 2px base unit, with semantic values at 16px (unit), 32px (content-gap), 64px (section standard), 100px (section expanded), and 154px (hero opening). Margins between related elements typically use 25.619px or 32.2667px, creating rhythmic vertical flow.

## Visual language

The visual character is editorial and confident, drawing from magazine layout traditions rather than conventional SaaS patterns. Photography plays a central role: large-format team and product images sit beside or within text blocks, often with asymmetric compositions that break grid regularity. The portfolio cards show this clearly, with project imagery filling the card and minimal text overlay.

Iconography is minimal and functional. A globe icon marks language selection, chevrons indicate dropdown states, and plus/minus signs control accordion expansion. No decorative icons or illustrations appear; the system trusts typography and photography to carry personality.

The border-as-structure approach is distinctive. Rather than boxing content with heavy containers, 1px lines in #434345 create implied grids. These borders are most prominent in data-dense sections like the statistics grid and expertise directory, where they guide scanning without adding visual weight. In lighter moments, borders disappear entirely, letting whitespace define relationships.

Color application follows a clear hierarchy: black for information, burgundy for emphasis and authority, coral for action. The burgundy appears in large numerals where it commands attention without shouting, and in accordion titles where it signals expandable depth. Coral's restricted use on the primary button ensures it remains the unmistakable conversion target.

## Components

### Primary Button

- Anatomy: Text label centered within a pill-shaped container
- Surface: Background {colors.accent-coral}, text {colors.ink}
- Typography: {typography.button}
- Shape: Full pill with 9999px border-radius
- Spacing: Internal padding creates comfortable target size; no border
- Composition: Positioned in header right cluster or inline with section content
- Variants: Dark sections may use a secondary variant with {colors.accent-burgundy} background and {colors.canvas} text

### Statistics Grid

- Anatomy: Section heading above a bordered matrix of number-label pairs
- Surface: Transparent cells on {colors.surface} background; 1px borders in {colors.border}
- Typography: Numbers use {typography.section-display} in {colors.accent-burgundy}; labels use {typography.body} in {colors.ink}
- Shape: Rectangular cells with no border-radius; borders create the grid structure
- Spacing: Generous internal padding (approximately 63.6952px) within each cell
- Composition: Responsive grid from single column to four columns; top row may span wider for featured statistics
- Hierarchy: Large burgundy numerals dominate; black labels sit beneath with clear size contrast

### Accordion

- Anatomy: Stacked items with a title row and expandable content area
- Surface: Transparent with 1px bottom borders in {colors.border}
- Typography: Title uses {typography.subhead} in {colors.accent-burgundy}; body uses {typography.body-large} in {colors.ink}
- Shape: No border-radius; full-width horizontal separators
- Spacing: Title row padding approximately 40.9143px vertical; content area adds additional padding when expanded
- Composition: Title left-aligned with plus/minus indicator right-aligned; expanded state reveals body text and optional checkmark lists
- States: Collapsed shows plus icon; expanded shows minus icon and reveals content

### Expertise Navigation

- Anatomy: Left sidebar with vertical list of category links; right content area with two-column link grid
- Surface: Sidebar has subtle background distinction; right area shows underlined text links
- Typography: Active category uses {typography.subhead} in {colors.accent-burgundy}; inactive uses {typography.body-large} in muted gray; links use {typography.body} with underline
- Shape: No border-radius; vertical border separates sidebar from content
- Spacing: Sidebar items padded at 14.9714px vertical; content links arranged in two columns with comfortable gap
- Composition: Sticky or fixed sidebar with scrolling content area; active state indicated by color and optional left border accent

### Portfolio Card

- Anatomy: Full-bleed image container with overlaid project name and category tag
- Surface: Image fills card; text sits directly on image with no additional background
- Typography: Project name uses {typography.section-display} in {colors.ink}; category uses {typography.body} in {colors.ink}
- Shape: No border-radius; rectangular cards
- Spacing: Internal padding consistent with content inset
- Composition: Two-column grid on desktop; cards may stack on smaller viewports
- Variants: Hover state may reveal additional metadata or darken image

### Header Navigation

- Anatomy: Logo left, primary links center, utility items and CTA right
- Surface: Background shifts between {colors.surface} and {colors.accent-burgundy} depending on scroll position or section context
- Typography: Links use {typography.navigation}; dropdown items use same style
- Shape: No border-radius on container; dropdown menus are rectangular
- Spacing: Horizontal padding at 43.2381px; vertical padding minimal
- Composition: Flex row with space-between alignment; dropdowns overlay page content with z-index layering
- States: Active dropdown shows chevron rotation and menu expansion; Contact us button maintains coral background consistently

## Responsive behavior

The system is designed for desktop-first viewing with clear adaptation paths. The statistics grid collapses from four columns to two and then to single column as viewport narrows. The expertise section transitions from sidebar-plus-content to stacked vertical layout, with the category navigation becoming a horizontal scroll or dropdown select. Portfolio cards move from two-column to single column with full-width imagery.

Typography scales down proportionally: the 99.2857px hero display reduces to 63.6952px on tablet and 32.2667px on mobile. Section padding compresses from 154.333px to 63.6952px top on smaller screens. The header navigation collapses to a hamburger menu, though this behavior is not visible in the supplied images and should be implemented based on standard responsive patterns.

Accordion items maintain full width across breakpoints, with internal padding reducing slightly on mobile. The plus/minus indicators remain touch-friendly at minimum 44px tap targets.

## Practical implementation guidance

### Preserve
- The hairline border grid structure in statistics and expertise sections; this is central to the visual identity
- The restrained coral accent; use it only for primary calls to action
- The generous whitespace around section headings; do not compress vertical padding
- The Aeonik Pro Vf light weight (300) for body-large text; this creates the distinctive elegant tone
- The exact color relationships: black on warm gray for light sections, white on burgundy for dark sections

### Avoid
- Adding background colors to cards that already contain photography; let images breathe
- Using the burgundy accent for body text or long reading passages; reserve it for numerals and short labels
- Introducing drop shadows or gradients; the system achieves hierarchy through flat color and space
- Mixing additional font families beyond Aeonik Pro Vf and Helvetica
- Creating border-radius on structural elements; keep containers sharp and rectangular

### Recommended Build Order
1. Establish the color tokens and typography scale first, ensuring Aeonik Pro Vf loads with variable weight support
2. Build the header with navigation, dropdown behavior, and the coral Contact us button
3. Create the section spacing system with standard, hero, and compact variants
4. Implement the hairline border grid component, used across statistics, expertise, and accordion sections
5. Develop the accordion with expand/collapse animation and checkmark list support
6. Add the portfolio card with image aspect ratio handling and text overlay positioning
7. Polish with dark section variants and responsive breakpoints

### Accessibility
- Ensure the coral-on-black button combination meets WCAG AA contrast requirements; the current #FF6A47 on #000000 may need adjustment for smaller text sizes
- Provide visible focus indicators on all interactive elements, particularly the pill buttons and accordion triggers
- Use semantic heading hierarchy: h1 for hero display, h2 for section display, h3 for subhead
- Add aria-expanded and aria-controls to accordion items for screen reader support
- Maintain keyboard navigation through dropdown menus with escape-to-close behavior
- Consider reducing motion for users who prefer it, particularly for accordion expand/collapse

## Scope note

This guide covers the homepage and portfolio page surfaces visible in the supplied images, including header navigation, hero sections, statistics grids, expertise directories, accordion features, and portfolio cards. Footer behavior, mobile breakpoints, form interactions, and motion design are not represented in the available material. System-Systemui appears in the source but is not used in any visible component documented here. Measurements are exact values from the retained interface data.
