# How metr.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/metr.org-design)

Last updated: 2026-08-10

## Captured pages

[![Donation page lower section showing organization details and green pill-shaped donate button against white background](https://pin.fontofweb.com/7185?format=jpg)](https://design.withfudge.com/share/pin-7185)

[Donation page lower section showing organization details and green pill-shaped donate button against white background](https://design.withfudge.com/share/pin-7185)

[![Donation page hero with large display heading, navigation bar, and research card grid with teal accents](https://pin.fontofweb.com/7184?format=jpg)](https://design.withfudge.com/share/pin-7184)

[Donation page hero with large display heading, navigation bar, and research card grid with teal accents](https://design.withfudge.com/share/pin-7184)

[![Homepage recent articles grid with dated research posts, thumbnail images, and arrow link treatments](https://pin.fontofweb.com/7183?format=jpg)](https://design.withfudge.com/share/pin-7183)

[Homepage recent articles grid with dated research posts, thumbnail images, and arrow link treatments](https://design.withfudge.com/share/pin-7183)

[![Homepage evaluation reports section with partner logo cards and green call-to-action button](https://pin.fontofweb.com/7182?format=jpg)](https://design.withfudge.com/share/pin-7182)

[Homepage evaluation reports section with partner logo cards and green call-to-action button](https://design.withfudge.com/share/pin-7182)

## Overview

METR's website presents a research organization focused on AI evaluation and safety. The visual system balances institutional credibility with approachable clarity through restrained color, generous whitespace, and precise typography. The design avoids decorative excess in favor of content hierarchy and readability. A distinctive teal-green accent color appears selectively on primary actions and subtle top borders, creating recognition without overwhelming the neutral palette. The overall impression is that of a technical nonprofit: serious, transparent, and focused on communicating complex research to informed audiences. Content density varies from spacious hero sections to denser grids of research outputs, with consistent alignment and spacing rhythms holding the system together.

## Colors

The color system is built on a near-white canvas with dark ink for headings and a mid-tone gray for body text. Teal-green serves as the sole accent, reserved for primary actions and subtle decorative borders.

| token | value | use |
|---|---|---|
| ink | #222A34 | Primary headings, card titles, strong emphasis |
| ink-secondary | #131925 | Display headings, maximum contrast moments |
| body | #4D5561 | Body text, descriptions, secondary content |
| muted | #667085 | Captions, dates, metadata, disabled states |
| canvas | #FFFFFF | Page background, card surfaces, input fields |
| surface | #F9FAFB | Subtle section backgrounds, alternating bands |
| surface-elevated | #F3F7F7 | Footer areas, highlighted panels, gradient endpoints |
| border | #EAECF0 | Card outlines, dividers, subtle separators |
| border-strong | #000000 | Navigation underlines, active tab borders |
| action | #589885 | Primary buttons, teal top borders on cards, key links |
| action-hover | #4D5561 | Hover state for text links, secondary button surfaces |

The interface operates in a light mode exclusively. The teal accent derives from a muted green-cyan space that suggests technical precision without clinical coldness. Cards and content blocks sit on white against occasional soft gray bands. Research cards feature a thin teal top border as a signature detail. The color application is disciplined: no gradients appear in the UI itself, and shadows are minimal, keeping focus on content rather than container effects.

## Typography

The type system centers on Instrument Sans, a contemporary geometric sans-serif designed by Rodrigo Fuenzalida and released by Frag Type. Inter appears in the navigation at medium weight, and Montserrat is used at small sizes for specific metadata labels. System-Sansserif appears in the available font records as a system fallback. Instrument Sans carries most of the load with weights from 400 through 600.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Sans | 3.25rem | 500 | 1.15 | -0.03em | Page titles, donation hero |
| section-display | Instrument Sans | 1.75rem | 500 | 1.4 | normal | Section headings, "Why donate?", "Recent" |
| card-title | Instrument Sans | 1.125rem | 600 | 1.4 | normal | Article headlines, evaluation report names |
| body | Instrument Sans | 1.125rem | 400 | 1.5 | normal | Paragraphs, descriptions, general content |
| body-large | Instrument Sans | 1.25rem | 400 | 1.5 | normal | Introductory paragraphs, emphasized body |
| body-small | Instrument Sans | 0.875rem | 400 | 1.56 | normal | Card descriptions, compact text |
| label | Instrument Sans | 1rem | 500 | 1 | normal | Navigation items, tags, UI labels |
| navigation | Inter | 1rem | 500 | 1.5 | normal | Header navigation links |
| legal-copy | Instrument Sans | 0.8125rem | 400 | 1.5 | normal | Fine print, organization details |

Instrument Sans is attributed to designer Rodrigo Fuenzalida and vendor Frag Type. Montserrat is attributed to designer Julieta Ulanovsky. Inter and System-Sansserif have no attribution in the available records. Verify licensing for these families before production use.

The type scale shows clear hierarchy through size and weight rather than style variation. Display headings use tight negative tracking for a composed, authoritative feel. Body text maintains comfortable reading measure with 1.5 line height. Links within body copy carry underline treatments for accessibility.

## Layout

The layout follows a centered container model with generous horizontal margins. Content max-width appears to sit around approximately 1200px with 48px side padding on standard sections, expanding to asymmetric padding (48px right, 32px left) in certain content areas. Section vertical spacing is substantial, with 140px top padding in hero areas and 30px to 65px in standard content bands.

The grid system uses flexible columns with consistent gutters. Research cards appear in three-column arrangements on the donation page and two-column grids for recent articles. Evaluation report cards use a three-column layout with equal-width cells. Cards maintain internal padding of 24px with 4px bottom margins on child elements.

Navigation sits in a full-width header with logo left and links right, followed by a search icon. The hero section below carries a soft gradient background transitioning from near-white to a subtle gray. Content sections alternate between pure white and very light gray backgrounds to create gentle rhythm without harsh separation.

Margins between major sections use 192.5px horizontal centering offsets in some layouts, suggesting a centered auto-margin approach rather than fixed container width. This creates breathing room on large screens while maintaining readability.

## Visual language

The visual character is restrained and academic-modern. Rounded corners appear sparingly: 6px on small UI elements, 8px on card tops, 16px on tab-like navigation items, and 32px (full pill) on primary buttons. This creates a system where interactive elements feel approachable while content containers remain crisp.

Borders function as subtle organizational tools. Cards use 1px solid lines in light gray. Active or emphasized items receive 1px black borders. The teal top border on research cards (8px solid) is the most distinctive decorative element, functioning as both brand marker and content type indicator.

Imagery within cards includes research charts, diagrams, and screenshots—never decorative photography. These maintain their natural aspect ratios within card boundaries. The METR logo combines a geometric icon with bold wordmark, appearing in the header and occasionally as card content.

Shadows are nearly absent; one instance shows a very subtle rgba(0, 0, 0, 0.08) shadow on card hover or emphasis states. The design relies on whitespace, background color shifts, and border rather than elevation to separate content layers.

## Components

### Primary button

- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: Background `{colors.action}` with white text
- **Typography**: `{typography.navigation}` in white
- **Shape**: Full pill with 32px border radius, 1px solid border matching background
- **Spacing**: 9.6px vertical padding, 24px horizontal padding
- **Composition**: Inline or block-level, often centered below descriptive text
- **Variants**: A secondary variant uses white background with dark text and light border for "View all research" style actions

### Research card

- **Anatomy**: Teal top border, title, optional thumbnail image, description paragraph, "Read more" link with diagonal arrow
- **Surface**: White background, 1px `{colors.border}` on sides and bottom, 8px solid `{colors.action}` top border
- **Typography**: Title in `{typography.card-title}`, description in `{typography.body-small}`, date in `{typography.legal-copy}` with `{colors.muted}`
- **Shape**: 0px bottom radius, subtle top rounding from border treatment
- **Spacing**: 24px internal padding, 16px gap between title and content
- **Composition**: Grid cell with flexible height based on content; images maintain aspect ratio

### Evaluation report card

- **Anatomy**: Partner logo, model name, date and partnership status
- **Surface**: White background, 1px `{colors.border}` outline
- **Typography**: Model name in `{typography.card-title}`, metadata in `{typography.body-small}` with `{colors.muted}`
- **Shape**: 0px radius (sharp corners)
- **Spacing**: 24px padding, generous internal whitespace
- **Composition**: Three-column grid with consistent cell heights

### Navigation tab / Link

- **Anatomy**: Text label with optional top border active indicator
- **Surface**: Transparent background, black top border when active (8px solid)
- **Typography**: `{typography.label}` in `{colors.body}`
- **Shape**: 16px top radius on active state, creating tab appearance
- **Spacing**: 12px padding, 8px top padding for border clearance
- **Composition**: Horizontal row in header or secondary navigation

### Content section

- **Anatomy**: Heading, body text, optional action link or button
- **Surface**: White or `{colors.surface}` background
- **Typography**: Heading in `{typography.section-display}`, body in `{typography.body}`
- **Spacing**: 30px top padding, 48px side padding, 15px bottom margin on headings, 20px on paragraphs
- **Composition**: Centered container with max-width constraint, left-aligned text

### Organization details block

- **Anatomy**: Label-value pairs in two-column layout
- **Surface**: White background with 1px top border separator
- **Typography**: Labels in `{typography.body}` with `{colors.muted}`, values in `{typography.body}`
- **Spacing**: 16px row gaps, generous vertical padding
- **Composition**: Asymmetric two-column with labels left, values right

## Responsive behavior

The design appears optimized for desktop viewing with substantial horizontal margins. At narrower viewports, the multi-column card grids should collapse to single columns with maintained internal spacing. The navigation bar likely compresses to a hamburger menu on mobile, though this pattern is not visible in the supplied material.

Typography should scale down proportionally: the 52px hero display may reduce to 34px or 28px on smaller screens, following the established secondary heading sizes. Body text at 18px can maintain its size for readability, though line length should be constrained through padding rather than font reduction.

Card grids should stack vertically with full-width cards, preserving the teal top border as the primary visual identifier. The asymmetric padding patterns (48px/32px) should simplify to uniform 24px or 16px side padding on mobile.

Touch targets for pill buttons and navigation items should maintain minimum 44px height. The diagonal arrow icons on "Read more" links should remain visible and tappable.

## Practical implementation guidance

### Preserve
- The disciplined two-color type system with dark ink for headings and mid-gray for body
- The teal accent as the sole color highlight, used sparingly on actions and card borders
- Generous whitespace between sections; the spacious rhythm is central to the brand feel
- Pill-shaped primary buttons with the exact 32px radius
- The research card pattern with teal top border as a signature content type
- Instrument Sans as the primary typeface with its geometric clarity

### Avoid
- Adding secondary accent colors; the teal-alone approach is intentional
- Heavy shadows or elevation effects; the design is intentionally flat
- Decorative imagery without research purpose
- Tightening the generous line heights or section spacing
- Using border-radius on cards beyond the subtle 6-8px range; sharp or fully rounded cards break the system

### Recommended build order
1. Establish the color tokens and apply canvas/surface backgrounds to page structure
2. Load Instrument Sans at weights 400, 500, 600 with Inter 500 for navigation
3. Build the type scale with hero-display through body-small
4. Create the centered container with max-width and responsive padding
5. Implement the primary pill button component
6. Build the research card with teal top border and image handling
7. Construct the evaluation report card grid
8. Add the header navigation with active tab states
9. Implement content sections with proper heading and paragraph spacing
10. Fine-tune responsive breakpoints for grid collapse and type scaling

### Accessibility
- Maintain the 4.5:1 contrast ratio between body text (#4D5561) and white backgrounds
- Ensure teal buttons (#589885) against white text meet WCAG AA for large text or AAA with slight darkening
- Preserve underline treatments on inline links within body copy
- Use the active tab's 8px black top border as the sole focus indicator pattern, supplementing with visible focus rings for keyboard navigation
- Ensure diagonal arrow icons on "Read more" links have adequate touch targets and screen reader labels

## Scope note

This guide covers the homepage and donation page surfaces visible in the supplied material. Footer components, mobile navigation patterns, form inputs, loading states, and animation behavior are not represented. The evaluation report detail pages and research article interiors are not included. Measurements reflect the desktop viewport state captured in the source images.
