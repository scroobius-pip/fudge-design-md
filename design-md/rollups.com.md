# How rollups.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/rollups.com-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page with dark green background, section heading 'Roll Up Vehicle Pricing', and two-tier pricing card layout with pale green text and outlined buttons](https://pin.fontofweb.com/5928?format=jpg)](https://design.withfudge.com/share/pin-5928)

[Pricing page with dark green background, section heading 'Roll Up Vehicle Pricing', and two-tier pricing card layout with pale green text and outlined buttons](https://design.withfudge.com/share/pin-5928)

[![Social proof section with dark green background, large display heading, and grid of twelve company logos in bordered cells with pale green text](https://pin.fontofweb.com/5927?format=jpg)](https://design.withfudge.com/share/pin-5927)

[Social proof section with dark green background, large display heading, and grid of twelve company logos in bordered cells with pale green text](https://design.withfudge.com/share/pin-5927)

[![Capabilities section with dark green background, 'Capabilities' display heading, and eight numbered feature cards in a two-column grid with pale green labels](https://pin.fontofweb.com/5926?format=jpg)](https://design.withfudge.com/share/pin-5926)

[Capabilities section with dark green background, 'Capabilities' display heading, and eight numbered feature cards in a two-column grid with pale green labels](https://design.withfudge.com/share/pin-5926)

[![How it works timeline with dark green background, left navigation with use cases, center process steps with day markers, and right case study panel with statistic](https://pin.fontofweb.com/5925?format=jpg)](https://design.withfudge.com/share/pin-5925)

[How it works timeline with dark green background, left navigation with use cases, center process steps with day markers, and right case study panel with statistic](https://design.withfudge.com/share/pin-5925)

## Overview

Rollups presents a dark green editorial system built for financial and legal technology credibility. The interface immerses users in deep forest greens that shift subtly across sections, from near-black pine to mid-tone sage, creating depth without departing from a single hue family. Pale green-gold text provides high contrast against these dark grounds while maintaining warmth that avoids the sterility of pure white on black. The typographic hierarchy pairs a compressed, tightly tracked display face for section headings with a clean Swiss sans-serif for body content and a monospace face for functional labels and metadata. Grid structures organize content into rigorous columns and cells, with hairline borders defining territories rather than heavy containers. The overall impression is of a premium, trustworthy service that communicates through restraint and precision rather than decorative flourish.

## Colors

The palette is built on a narrow range of greens that progress from very dark to light, with a single warm accent family for text.

| token | value | use |
|---|---|---|
| canvas | #284B2F | Primary page background, deepest green |
| surface | #295631 | Card and panel backgrounds, slightly elevated from canvas |
| surface-elevated | #295831 | Hover states and secondary surfaces |
| ink | #E4EAC8 | Primary text, headings, and interactive labels on dark grounds |
| ink-muted | #D1DBB9 | Secondary body text, descriptions, and supporting copy |
| accent | #54895D | Mid-tone green for borders, dividers, and subtle emphasis |
| accent-deep | #2A5D33 | Deep accent for selected states and focused elements |
| action-primary | #E4EAC8 | Primary button fill and solid action surfaces |
| action-primary-text | #284B2F | Text on primary action surfaces |
| border | #989E7B | Hairline borders for cells, cards, and grid divisions |
| border-subtle | #54895D | Very subtle borders for internal panel divisions |

The system operates in a single dark mode. Backgrounds progress from #284B2F at the base through #295631 and #295831 for layered surfaces, creating depth through value shift rather than color change. Text uses #E4EAC8 for primary content and #D1DBB9 for secondary, with the muted tone appearing in descriptions, captions, and de-emphasized paragraphs. The accent greens serve structural roles—borders, dividers, and selection states—rather than decorative highlights. No light mode is present in the visible interface.

## Typography

Four families create the typographic system: Pp Neue Corp and Pp Neue Corp-Compact Medium for display impact, Suisse Intl for readable body content, and Abc Favorit Mono for technical labels and metadata. The design facts identify Pp Neue Corp-Compact Medium as the specific variant used for the 54px and 36px display headings, while Pp Neue Corp is the broader family name.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pp Neue Corp | 3.375rem | 500 | 1 | -0.02em | Page titles, major section headings |
| section-display | Pp Neue Corp | 2.25rem | 500 | 1 | -0.02em | Sub-section headings, feature titles |
| body | Suisse Intl | 1rem | 400 | 1.5 | 0em | Primary body text, navigation, lists |
| body-small | Suisse Intl | 0.875rem | 400 | 1.5 | 0em | Descriptions, captions, secondary content |
| body-large | Suisse Intl | 1.125rem | 500 | 1.2 | -0.02em | Lead paragraphs, emphasized body |
| label | Abc Favorit Mono | 0.75rem | 400 | 1 | 0em | Buttons, tags, metadata, timestamps |
| navigation | Suisse Intl | 0.875rem | 400 | 1.5 | 0em | Header links, sidebar navigation |

Pp Neue Corp-Compact Medium appears at 54px and 36px with weight 500 and tight negative tracking, giving headings a dense, authoritative presence. Suisse Intl carries the reading load at Regular and Book weights, with Book (weight 500) used for subheadings and emphasized short text. Abc Favorit Mono at 12px provides a technical voice for buttons, process labels like "DAY 03", and category tags. The monospace face's small size and tight leading keep it functional rather than decorative.

Verify licensing for these families before production use. Pp Neue Corp and Pp Neue Corp-Compact Medium are designed by Maksym Kobuzan and available from Pangram Pangram Foundry. Suisse Intl is designed by Swiss Typefaces. Abc Favorit Mono is designed by Dinamo Typefaces GmbH.

## Layout

The page architecture relies on a consistent grid system with generous margins and clear column divisions. Content typically occupies a central band with substantial side margins, creating an editorial feel with breathing room around all elements.

The grid uses a 12-column foundation with content frequently constrained to 8 or 10 central columns. Major sections stack vertically with 6rem of separation. Within sections, content organizes into asymmetric layouts: a narrow left column for navigation or labels, a wide center column for primary content, and occasionally a right column for case studies or statistics.

Cards and panels use sharp corners with no border radius, emphasizing the grid's rectilinear precision. Hairline borders at 1px define cell boundaries in grids and table-like structures. The logo grid displays twelve cells in two rows of six, each with uniform internal padding and centered content. The capabilities grid shows eight numbered items in four rows of two, with each cell containing a mono label, bold title, and description paragraph.

Spacing follows a 0.25rem base unit. Section padding is 6rem vertical. Component internal padding ranges from 1.5rem for compact elements to 2rem for cards. Tight spacing of 0.5rem appears between related label-text pairs.

## Visual language

The visual character is institutional and precise, drawing from financial services and legal documentation aesthetics. The dark green palette evokes stability and growth, while the pale text maintains warmth and accessibility. No gradients, shadows, or blur effects appear in the interface—depth comes solely from value contrast and border definition.

Imagery and photography are absent from the visible interface; the design communicates through typography, grid, and color alone. Iconography is minimal, with simple arrows for links and checkmarks for feature lists. The logo grid treats partner marks as content rather than decoration, presenting them in uniform cells that emphasize trust through quantity and recognition.

The border system is essential to the visual language. Single-pixel lines in muted green create cells, separate sections, and define interactive territories. These borders are always 1px solid, never dashed or dotted, maintaining consistency with the system's sober tone. The absence of rounded corners anywhere reinforces a document-like, permanent quality.

Motion and transition behavior cannot be determined from still images. The interface presents as static and deliberate, with state changes likely handled through color value shifts rather than dimensional effects.

## Components

### Primary button

- **Anatomy**: Text label centered within a rectangular container
- **Surface**: Solid #E4EAC8 fill with #284B2F text
- **Typography**: Abc Favorit Mono, 12px, uppercase or title-case label
- **Shape**: 0.25rem border radius, sharp enough to feel precise but slightly softened
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Typically appears below pricing or below descriptive content
- **Variants**: The "GET STARTED" variant uses the solid fill; no secondary fill variant is visible

### Secondary button

- **Anatomy**: Text label centered within a bordered container
- **Surface**: Transparent fill with #E4EAC8 text and 1px #989E7B border
- **Typography**: Abc Favorit Mono, 12px
- **Shape**: 0.25rem border radius
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Used for lower-priority actions like "CONTACT US"

### Feature card

- **Anatomy**: Numbered label, bold title, and description paragraph
- **Surface**: #295631 background with 1px #54895D border
- **Typography**: Mono label in Abc Favorit Mono, title in Suisse Intl Book 18px, body in Suisse Intl Regular 14px
- **Shape**: Zero border radius, full-bleed within grid cell
- **Spacing**: 2rem internal padding
- **Composition**: Arranged in two-column grid with shared vertical borders between cells

### Logo cell

- **Anatomy**: Centered logo mark or wordmark
- **Surface**: #295631 background with 1px #54895D border
- **Typography**: Logo marks appear in #E4EAC8 or white
- **Shape**: Zero border radius, fixed aspect ratio approximately 16:10
- **Spacing**: 2rem internal padding, logo centered both axes
- **Composition**: Twelve cells in 2×6 grid with shared borders

### Pricing card

- **Anatomy**: Tier name, description, price display, action button, and feature list
- **Surface**: Transparent or #295631 background with left border accent
- **Typography**: Tier name in Suisse Intl Book 18px, price in Pp Neue Corp 36px, features in Suisse Intl Regular 16px
- **Shape**: Zero border radius, vertical left border or full cell border
- **Spacing**: 2rem to 3rem internal padding
- **Composition**: Two-tier layout with primary tier emphasized through position and border treatment

### Process timeline

- **Anatomy**: Day marker, phase title, and bullet paragraphs
- **Surface**: Transparent, flowing vertically
- **Typography**: Day marker in Abc Favorit Mono 12px, phase title in Suisse Intl Book 18px, body in Suisse Intl Regular 16px
- **Shape**: No containing shape, text-aligned to grid
- **Spacing**: 2rem between phases, 0.5rem between bullets
- **Composition**: Left-aligned day markers with indented content, or inline day marker before title

### Navigation sidebar

- **Anatomy**: Category label and linked items
- **Surface**: Transparent
- **Typography**: Category in Abc Favorit Mono 12px uppercase, items in Suisse Intl Regular 16px
- **Shape**: No shape
- **Spacing**: 0.5rem between category and first item, 0.75rem between items
- **Composition**: Fixed left column, sticky or static within section

## Responsive behavior

The visible interface shows a desktop layout with substantial side margins and multi-column grids. At narrower viewports, the two-column grids for capabilities and logos should collapse to single columns. The three-column process layout with left navigation, center content, and right case study should stack vertically, with the case study statistic moving below the timeline or becoming a full-width callout.

The display type at 54px may require reduction on small screens; a proportional scale to 36px for section-display and 28px for hero-display would maintain hierarchy without overwhelming narrow viewports. The logo grid's 2×6 arrangement should become 3×4 or 4×3 on tablets and 2×6 stacked on mobile.

Navigation behavior cannot be determined from still images. A horizontal header with hamburger menu would be a reasonable implementation for mobile, preserving the mono label style for menu items.

## Practical implementation guidance

### Preserve
- The dark green monochromatic palette with pale green-gold text; this is the system's signature
- The tight tracking on Pp Neue Corp display type; loosening it destroys the compressed, authoritative character
- The three-family typographic division: display, body, and mono each have distinct functional roles
- The 1px hairline border system for defining cells and sections
- The zero border radius on cards, cells, and panels
- The generous side margins that create editorial breathing room

### Avoid
- Adding shadows, gradients, or blur effects; the system gains depth from value contrast alone
- Rounding corners on any component; this contradicts the document-like precision
- Introducing additional accent colors; the green family is intentionally narrow
- Using Pp Neue Corp for body text or small sizes; it is designed for large display only
- Replacing the mono labels with sans-serif; the technical voice is essential to the financial-services tone

### Recommended build order
1. Establish the color tokens and apply canvas background with ink text
2. Implement the typographic scale with all three families at their designated sizes
3. Build the grid system with 12 columns and content constraints
4. Create the border system with 1px solid rules in accent and border colors
5. Develop card and cell components with zero radius and consistent padding
6. Add buttons with their two variants and mono labels
7. Implement section layouts: hero, capabilities grid, logo grid, pricing, process timeline
8. Add navigation and footer with their typographic treatments

### Accessibility
- The #E4EAC8 on #284B2F combination provides strong contrast for normal text; verify WCAG AA compliance for the muted #D1DBB9 on #284B2F for small text
- The mono labels at 12px may be below the 16px threshold for comfortable reading; consider allowing browser zoom without breaking layouts
- Focus states should use the accent-deep color with a visible outline, as the default browser ring may clash with the dark green palette
- The grid-based layout should maintain logical tab order through the numbered capabilities and timeline phases

## Scope note

This guide covers the visible desktop landing and interior pages for Rollups, including the RUV product page and homepage sections. Mobile layouts, breakpoint behavior, form interactions, animation, and hover states are not represented in the source material. Footer content beyond basic link styling is partially visible but not fully documented. Measurements are derived from the supplied exact values where available and adapted to the 0.25rem base unit where spacing and radius lists were empty.
