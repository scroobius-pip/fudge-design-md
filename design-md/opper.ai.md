# How opper.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/opper.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Blog article page with gradient hero card, dark navigation bar, and article body with inline links and list formatting](https://pin.fontofweb.com/7023?format=jpg)](https://design.withfudge.com/share/pin-7023)

[Blog article page with gradient hero card, dark navigation bar, and article body with inline links and list formatting](https://design.withfudge.com/share/pin-7023)

[![Pricing utility table with feature rows, checkmark benefits, and right-aligned pricing on dark background](https://pin.fontofweb.com/7022?format=jpg)](https://design.withfudge.com/share/pin-7022)

[Pricing utility table with feature rows, checkmark benefits, and right-aligned pricing on dark background](https://design.withfudge.com/share/pin-7022)

[![Three-tier pricing cards with pill-shaped CTA buttons showing Free, Utility, and Enterprise plans](https://pin.fontofweb.com/7021?format=jpg)](https://design.withfudge.com/share/pin-7021)

[Three-tier pricing cards with pill-shaped CTA buttons showing Free, Utility, and Enterprise plans](https://design.withfudge.com/share/pin-7021)

[![Homepage footer with serif testimonial quote, social links with chevrons, and large Opper wordmark](https://pin.fontofweb.com/7020?format=jpg)](https://design.withfudge.com/share/pin-7020)

[Homepage footer with serif testimonial quote, social links with chevrons, and large Opper wordmark](https://design.withfudge.com/share/pin-7020)

## Overview

Opper presents a dark-mode developer platform with a near-black canvas and high-contrast off-white typography. The visual system balances technical credibility with approachable warmth through gradient accents in mint and sky blue that appear in hero imagery and interactive states. Wix Madefor anchors the display and body hierarchy with geometric clarity, while system fonts handle navigation, labels, and code snippets. The interface relies on generous whitespace, subtle border definitions, and pill-shaped buttons to create a modern, spacious reading experience. Component surfaces range from pure black to slightly elevated charcoal tones, establishing depth without heavy shadows. The overall impression is of a precision tool—clean, confident, and engineered for developers evaluating AI infrastructure.

## Colors

The palette is strictly dark-mode with a disciplined monochrome base and selective color accents for functional emphasis.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #1C1C1C | Card backgrounds, elevated panels |
| surface-elevated | #222222 | Hover states, active table rows |
| ink | #FBFBFB | Primary headings, body text, primary buttons |
| ink-secondary | #A1A1A1 | Descriptions, secondary labels, muted table text |
| accent-mint | #5EE9B5 | Success states, gradient endpoints, code highlights |
| accent-sky | #74D4FF | Links, gradient midpoints, interactive accents |
| accent-sky-soft | #B8E6FE | Subtle highlights, gradient tints |
| border | #333333 | Card outlines, table dividers, structural separators |
| border-subtle | #1E2939 | Inner dividers, hairline rules |

The gradient system visible in blog hero cards and testimonial progress bars blends warm peach through soft pink into cool sky blue and mint—derived from photographic imagery rather than applied as UI fills. Text remains strictly monochrome to maintain readability against both solid and gradient backgrounds. The dark canvas absorbs light, making the off-white ink pop while allowing accent colors to signal interactivity without overwhelming the technical content.

## Typography

The type system pairs Wix Madefor for brand voice and readability with system fonts for functional UI elements. Wix Madefor, designed by Dalton Maag Ltd, carries the display and body load with weights from 500 to 700. System-Uisansserif handles navigation, buttons, and labels at smaller sizes. System-Uimonospace appears exclusively for code snippets and technical annotations. System-Uiserif provides the distinctive serif voice for testimonial quotes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Wix Madefor | 3.75rem | 600 | 1.2 | normal | Homepage headlines |
| section-display | Wix Madefor | 1.875rem | 600 | 1.2 | normal | Section headings, blog titles |
| body-large | Wix Madefor | 1.25rem | 500 | 1.4 | normal | Lead paragraphs, descriptions |
| body | Wix Madefor | 1rem | 500 | 1.5 | normal | Article text, primary content |
| body-secondary | System-Uisansserif | 1rem | 400 | 1.5 | normal | Supplementary text, captions |
| label | System-Uisansserif | 0.875rem | 500 | 1.43 | normal | Button text, badges, metadata |
| navigation | System-Uisansserif | 0.875rem | 600 | 1.71 | normal | Nav links, footer links |
| code | System-Uimonospace | 0.875rem | 400 | 1.43 | normal | Inline code, syntax snippets |
| quote-serif | System-Uiserif | 1.875rem | 400 | 1.2 | normal | Testimonial quotes |

Verify licensing for Wix Madefor before production use. The system font families require no additional licensing. Display sizes use tight leading for impact, while body text maintains generous line height for extended reading. Code tokens appear in accent colors—mint and sky variants—to distinguish syntax elements from prose.

## Layout

The layout follows a centered content model with maximum readable widths and asymmetric navigation positioning. The global header spans full width with a left-aligned logo and right-aligned navigation cluster, creating a 101px left margin offset for the nav links that sits visually balanced against the logo mark. Content containers max out at approximately 48rem for article text, while pricing tables and card grids expand to wider bounds.

Section spacing uses 3rem as the base increment, with 48px padding appearing frequently for card interiors and hero sections. The grid system for pricing cards shows three equal columns with consistent internal padding and uniform card heights. Blog articles center the hero gradient card above the text column, creating a magazine-like focal point before the reading flow begins.

Horizontal rhythm relies on 32px as the standard gutter for content padding and 16px for tighter component groupings. The footer compresses into a two-zone layout: a testimonial quote occupies the upper area with serif styling, while the lower zone stacks the wordmark against contact information and social links in a horizontal row.

## Visual language

The visual identity communicates technical sophistication through restraint. The near-black canvas eliminates visual noise, letting content and interactive elements define the hierarchy. Gradient accents appear sparingly—confined to hero imagery, testimonial indicators, and subtle progress bars—never as background fills that would compete with text.

Pill-shaped buttons and navigation links create a soft, approachable counterpoint to the angular monospace code blocks and structured data tables. The Opper wordmark uses custom letterforms with rounded terminals that echo the pill geometry. Border treatments are hairline-thin at 1px, using subtle gray tones that separate without boxing.

Imagery favors abstract gradients and soft color fields over photography, maintaining the developer-tool aesthetic. When photography appears, it receives the same gradient treatment as UI elements, creating cohesion between content and interface. The overall density is low—generous line height, ample card padding, and clear section breaks prioritize scanning and comprehension over information compression.

## Components

### Navigation bar

- **Anatomy**: Fixed top bar with logo mark left, primary links center-left with dropdown indicators, utility cluster right containing status badge, social icons, Login text link, and Sign up pill button.
- **Surface**: Transparent over canvas, no background fill.
- **Typography**: Navigation token for links, label token for Sign up button.
- **Shape**: Sign up button uses pill radius; Login remains text-only.
- **Spacing**: 32px right padding on nav container, 16px between link items, 101px left margin offsetting links from logo.

### Blog hero card

- **Anatomy**: Large rounded rectangle containing gradient background, article title in section-display token, author and date in label token below.
- **Surface**: Gradient fill from warm peach through pink to sky blue and mint.
- **Typography**: Title in dark ink (#222222) for contrast against light gradient; metadata in same dark tone at smaller size.
- **Shape**: 0.5rem corner radius.
- **Spacing**: Internal padding approximately 48px, title positioned in lower-left quadrant.

### Pricing cards

- **Anatomy**: Three-column grid with tier name, description, feature list with checkmarks, and bottom-aligned CTA button.
- **Surface**: Subtle border on dark background, no fill or very slight elevation.
- **Typography**: Tier name in body-large; description and features in body-secondary; feature items in label with checkmark icons.
- **Shape**: Cards have subtle radius; CTA buttons are pill-shaped with 1px border.
- **Spacing**: Consistent internal padding, equal card heights, 16px between feature items.
- **Variants**: Free and Enterprise use outlined pills on dark; Utility uses filled light pill with dark text.

### Pricing table

- **Anatomy**: Full-width table with Feature, Description, Benefits, and Price columns.
- **Surface**: Transparent rows with horizontal border dividers.
- **Typography**: Column headers in label token uppercase; feature names in body; descriptions in ink-secondary; benefits as checkmark lists in label; prices in body with bold emphasis.
- **Shape**: No vertical borders; horizontal rules at 1px.
- **Spacing**: Generous row height with 16px vertical padding.

### Buttons

- **Anatomy**: Text label with optional icon, rendered as pill or rounded rectangle.
- **Surface**: Primary variant uses light fill with dark text; secondary uses transparent with light border and light text.
- **Typography**: Label token, weight 500 or 600.
- **Shape**: Pill radius (9999px) for prominent actions; 0.5rem for subtle actions.
- **Spacing**: 12px vertical, 32px horizontal padding for large pills; 8px by 16px for compact buttons.
- **States**: Visible variants include default, outlined, and filled.

### Code blocks

- **Anatomy**: Inline code spans within body text, using monospace family.
- **Surface**: No visible background distinction in inline usage.
- **Typography**: Code token in accent colors—mint, sky, or soft blue variants—for syntax differentiation.
- **Shape**: No radius for inline spans.

### Footer

- **Anatomy**: Testimonial quote zone above, contact and links zone below with large wordmark left and stacked link groups right.
- **Surface**: Canvas background continuous with page.
- **Typography**: Quote in quote-serif token; contact email in body-large; social links in navigation token with chevron icons; legal links in label token.
- **Spacing**: 16px right padding on link items; horizontal rule separates testimonial from footer body.

## Responsive behavior

The design prioritizes desktop presentation with centered content columns that should reflow naturally at narrower widths. The three-column pricing card grid should stack vertically on smaller viewports, maintaining equal card widths when side-by-side. The pricing table requires horizontal scroll or column collapse for mobile, with the Benefits column potentially hiding or the Description column wrapping. Navigation links should collapse into a menu at narrow widths, preserving the Login and Sign up actions in the header. Blog content maintains its maximum readable width with responsive padding, ensuring the gradient hero card scales proportionally. Footer social links should wrap to multiple rows rather than compressing horizontally.

## Practical implementation guidance

### Preserve
- The strict dark-mode palette with near-black canvas and off-white ink.
- Pill-shaped buttons as the primary interactive signature.
- Wix Madefor for all display and body text to maintain brand voice.
- Generous whitespace and low information density.
- Gradient accents confined to imagery and indicators, never as text backgrounds.
- The 101px navigation offset as a distinctive spatial signature.

### Avoid
- Light mode implementations without complete palette inversion.
- Sharp-cornered buttons that break the pill language.
- Multiple accent colors competing on single components.
- Heavy drop shadows for elevation—rely on border and surface color instead.
- Tight line height on body text that compromises readability.

### Recommended build order
1. Establish the color tokens and canvas background.
2. Implement Wix Madefor with the full type scale.
3. Build the navigation bar with logo, links, and pill button.
4. Create the button component with pill and rounded variants.
5. Implement pricing cards and table with border treatments.
6. Add blog article layout with gradient hero card.
7. Build footer with testimonial quote and link groups.
8. Apply code syntax highlighting with accent colors.

### Accessibility
- Ensure all text meets WCAG AA contrast against the black canvas—ink (#FBFBFB) exceeds requirements, but verify ink-secondary (#A1A1A1) at smaller sizes.
- Add visible focus states to pill buttons, likely using accent-sky outline or offset ring.
- Provide keyboard navigation for dropdown menus in the header.
- Include `prefers-reduced-motion` respect for any gradient animations.
- Maintain semantic heading hierarchy from h1 through h4 without skipping levels.

## Scope note

This guide covers the homepage, pricing, and blog article surfaces visible in the supplied images. Mobile breakpoints, form validation states, loading skeletons, and documentation page layouts are not represented. The gradient color values describe visible imagery rather than exact CSS gradients. Measurements are exact where retained in the source; spacing adaptations use the 2px relative unit grid.
