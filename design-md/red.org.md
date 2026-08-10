# How red.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/red.org-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with email subscription form on vivid red background, featuring social icons and cookie consent bar with Accept button](https://pin.fontofweb.com/1823?format=jpg)](https://design.withfudge.com/share/pin-1823)

[Footer section with email subscription form on vivid red background, featuring social icons and cookie consent bar with Accept button](https://design.withfudge.com/share/pin-1823)

[![Ways to Join section with four-column grid of Shop, Learn, Donate, Connect options with red outline icons and red headings on white background](https://pin.fontofweb.com/1822?format=jpg)](https://design.withfudge.com/share/pin-1822)

[Ways to Join section with four-column grid of Shop, Learn, Donate, Connect options with red outline icons and red headings on white background](https://design.withfudge.com/share/pin-1822)

[![Featured Partners grid showing eight brand logos in two rows, followed by nighttime city billboard image with partnership call-to-action buttons](https://pin.fontofweb.com/1821?format=jpg)](https://design.withfudge.com/share/pin-1821)

[Featured Partners grid showing eight brand logos in two rows, followed by nighttime city billboard image with partnership call-to-action buttons](https://design.withfudge.com/share/pin-1821)

[![The Latest news section with three article cards featuring photography, red headlines, date stamps, and rounded category tags](https://pin.fontofweb.com/1820?format=jpg)](https://design.withfudge.com/share/pin-1820)

[The Latest news section with three article cards featuring photography, red headlines, date stamps, and rounded category tags](https://design.withfudge.com/share/pin-1820)

## Overview

The (RED) design system is built for urgency and clarity. It communicates a global health mission through a deliberately limited palette dominated by a single vivid red against stark black and white. The visual language is confident and editorial, combining bold display typography with clean geometric layouts. Every element serves the campaign's directness: there are no decorative gradients, no soft shadows, no ornamental flourishes. The system relies on scale contrast, generous whitespace, and the immediate recognizability of its signature color to drive action. Content is organized in clear hierarchical bands—partners, ways to engage, editorial updates, and direct response forms—each maintaining consistent rhythm while allowing photography and partner branding to inject human warmth and commercial credibility.

## Colors

The color system is intentionally minimal, built around a single high-energy red that functions as both brand identifier and call-to-action trigger. Black and white provide the structural contrast, with subtle neutrals reserved for secondary surfaces.

| token | value | use |
|---|---|---|
| action | #E31937 | Primary buttons, links, headings on light backgrounds, icon strokes, campaign accents |
| ink | #000000 | Body text, partner names, dark backgrounds for cookie consent |
| canvas | #FFFFFF | Page backgrounds, card surfaces, button fills on dark backgrounds, text on red panels |
| muted-ink | #1A1A1A | Near-black for softer text contexts where pure black would be too harsh |
| surface-raised | #F5F5F5 | Subtle background variation for section alternation |
| border-subtle | #E5E5E5 | Card borders, dividers, input outlines on light backgrounds |

The red dominates all interactive and emotional touchpoints. On light backgrounds, it appears in headings, link text, iconography, and primary buttons. On dark or red backgrounds, white inverts to become the active text color. The cookie consent bar demonstrates this inversion clearly: a near-black bar with white text and a red pill-shaped Accept button. Photography throughout the site carries warm reds and oranges that harmonize with the interface palette without competing for attention.

## Typography

Two families drive the typographic system: Degular for all display and body text, and Antarctican Mono for labels, dates, and technical metadata. Degular contributes a contemporary sans-serif voice with confident weight and slightly geometric proportions. Antarctican Mono adds editorial precision and mechanical clarity at small sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Degular | 3rem | 500 | 1 | -0.02em | Major section headlines, campaign statements |
| section-display | Degular | 2.5rem | 500 | 1.05 | -0.01em | Subsection headings, partner callouts |
| body-large | Degular | 1.25rem | 400 | 1.4 | 0 | Introductory paragraphs, featured descriptions |
| body | Degular | 1rem | 400 | 1.5 | 0 | Standard paragraphs, form explanations, navigation |
| navigation | Degular | 1rem | 500 | 1.2 | 0 | Menu items, button labels, link text |
| label | Antarctican Mono | 0.75rem | 400 | 1.2 | 0.05em | Dates, category tags, metadata, form field labels |

Display headings use tight negative tracking and assertive scale to create immediate visual impact. Body text maintains generous line height for readability across longer campaign descriptions. The mono face appears exclusively at small sizes where its increased tracking and fixed-width rhythm prevent visual clutter in dense information areas. All type sizes are whole-number multiples of the 4px base unit.

Degular is designed by Oh No Type Company. Antarctican Mono is designed by James Puckett of Dunwich Type Founders. Verify licensing for these families before production use.

## Layout

The layout system follows a straightforward editorial grid with clear section breaks and consistent horizontal padding. Content max-width containers center on wide viewports, while full-bleed sections alternate between white and red backgrounds to create rhythmic visual progression down the page.

Section spacing uses 6rem vertical padding as the standard module, with 4rem for tighter related groupings. Internal content gaps run at 1.5rem for text stacks and 2rem for grid columns. The four-column "Ways to Join" grid demonstrates the preferred content distribution: equal-width columns with icon, heading, description, and link stacked vertically with consistent 1.5rem gaps between elements.

The partner grid uses a two-row, four-column structure on desktop, with each cell containing a centered logo, partner name, and minimal arrow link. Below this, an asymmetric two-column layout pairs large photography with text and dual call-to-action buttons, creating editorial breathing room after the dense logo grid.

Article cards in "The Latest" section follow a three-column grid with uniform card heights. Each card contains full-width photography at top, followed by date stamp, headline, excerpt, and inline category tags. The cards sit on subtle borders rather than shadows, maintaining the system's flat, direct aesthetic.

## Visual language

The visual language is campaign-direct: bold, flat, and immediately scannable. Red functions as both emotional signal and functional marker—every interactive element, every headline, every icon stroke carries the same hue, creating unbroken brand coherence. The absence of gradients, shadows, or dimensional effects keeps attention on message and action.

Iconography uses simple outline strokes in red, matching the weight and directness of the typography. Partner logos appear in their native brand colors or in red lockups, creating a recognizable wall of commercial support without visual chaos. Photography is warm, human, and documentary in tone—coffee preparation, city billboards at night, kitchen scenes—each carrying natural reds and oranges that bridge into the interface palette.

The system inverts confidently for high-priority actions. The email subscription section floods its entire background in red, with white text and a white-outlined input field. The cookie consent bar inverts again to near-black. These inversions create clear territorial boundaries between content, conversion, and compliance without introducing new colors.

## Components

### Primary Action Button

- **Anatomy**: Text label centered within a fully rounded pill container
- **Surface**: Solid red fill with white text
- **Typography**: `{typography.navigation}` at medium weight
- **Shape**: Full pill with `9999px` border radius
- **Spacing**: Generous horizontal padding, approximately 2rem left and right, 0.875rem vertical
- **Composition**: Appears standalone or in pairs alongside secondary buttons

### Secondary Action Button

- **Anatomy**: Text label within pill outline
- **Surface**: White or transparent fill with red border and red text
- **Typography**: `{typography.navigation}`
- **Shape**: Full pill matching primary button proportions
- **Spacing**: Identical padding to primary, creating visual parity when paired
- **Variants**: On dark backgrounds, may invert to white border and white text

### Category Tag

- **Anatomy**: Mono text label within rounded pill border
- **Surface**: Transparent or white fill with red hairline border
- **Typography**: `{typography.label}` in uppercase
- **Shape**: Full pill, smaller scale than action buttons
- **Spacing**: Compact padding, approximately 0.5rem vertical and 1rem horizontal
- **Composition**: Appears in horizontal groups of two to three tags below article excerpts

### Article Card

- **Anatomy**: Full-width image at top, followed by date, headline, excerpt, and tag cluster
- **Surface**: White background with subtle border, no shadow
- **Typography**: Date in `{typography.label}`, headline in `{typography.section-display}` at reduced scale, body in `{typography.body}`
- **Shape**: Slight panel rounding, approximately 0.5rem
- **Spacing**: Internal padding creates consistent text margins; image bleeds to card edges
- **Composition**: Three-column grid with equal widths and matching internal structure

### Email Capture Form

- **Anatomy**: Section heading, email input field, consent checkbox with legal text, submit button
- **Surface**: Full red background section; input field uses transparent fill with white border
- **Typography**: Heading in italicized display style, labels in `{typography.label}`, body in `{typography.body}` at reduced size
- **Shape**: Input field uses minimal rounding; submit button uses full pill
- **Spacing**: Generous vertical stacking with clear separation between field, consent, and action
- **Composition**: Right-aligned within the red section, occupying roughly half the container width

### Partner Logo Cell

- **Anatomy**: Centered logo image, partner name, minimal arrow link
- **Surface**: Transparent on white background
- **Typography**: Partner name in `{typography.navigation}` in red
- **Shape**: No container; logo and text float freely
- **Spacing**: Ample vertical breathing room between rows
- **Composition**: Grid-aligned with consistent centering; arrow indicates linked destination

## Responsive behavior

The system should maintain its bold character across viewport sizes. The four-column "Ways to Join" grid should collapse to two columns on tablet and single column on mobile, preserving vertical stacking of icon, heading, description, and link within each cell. The partner logo grid should similarly reduce to two columns then single column, maintaining readable logo sizes.

Article cards should stack vertically on narrow viewports, with full-width images and expanded text margins. The email capture form should remain right-aligned on desktop but center and expand to full width on mobile, maintaining the red background bleed to edges.

Type scale should reduce proportionally: hero-display should step down to 2rem on tablet and 1.75rem on mobile, while maintaining the tight tracking that gives headlines their distinctive punch. Body text may remain at 1rem across all sizes for readability.

The cookie consent bar should remain fixed at viewport bottom, with its content reflowing from horizontal to vertical stack as needed. The Accept button should remain prominent and tappable at minimum 44px height.

## Practical implementation guidance

### Preserve
- The singular red as the only accent color; do not introduce secondary brand colors
- Full pill shapes for all buttons and tags; this roundedness is signature to the system
- The stark alternation between white and red section backgrounds
- Generous section padding; the design breathes through vertical space
- Mono face exclusively for small metadata and labels

### Avoid
- Drop shadows on cards or containers; the system is flat by intention
- Gradient backgrounds or overlays; use solid colors only
- Decorative underlines or borders beyond the minimal hairlines specified
- Multiple button styles beyond the primary/secondary pair
- Rounding values between 0 and full pill; use sharp corners or complete rounding

### Recommended Build Order
1. Establish the color tokens and apply to body background and text defaults
2. Implement Degular at display and body scales with proper tracking
3. Build the button system with primary and secondary pill variants
4. Create the section container with max-width and vertical padding rhythm
5. Implement the four-column icon grid for "Ways to Join"
6. Build article cards with image, date, headline, excerpt, and tag structure
7. Add the email capture form with inverted red section treatment
8. Implement partner logo grid and asymmetric feature layout

### Accessibility
- Ensure red text on white meets WCAG AA contrast ratios; the vivid red may need darkening for small text
- Provide visible focus states on all interactive elements, using outline or background shift
- Maintain sufficient touch targets on mobile; pill buttons should extend to at least 44px height
- Use semantic heading hierarchy despite the visual uniformity of display styles
- Consider offering a reduced-motion preference for any scroll-triggered animations

## Scope note

This guide covers the homepage surface visible in the supplied images: the hero-adjacent partner section, engagement grid, editorial feed, email subscription footer, and cookie consent bar. Interior pages, navigation dropdowns, mobile menu states, form validation feedback, and hover or focus states are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px base grid.
