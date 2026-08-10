# How labs.chaingpt.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/labs.chaingpt.org-design)

Last updated: 2026-08-10

## Captured pages

[![Team member modal overlay with biography text, black-and-white portrait cards, and orange accent markers on a light gray grid background](https://pin.fontofweb.com/5866?format=jpg)](https://design.withfudge.com/share/pin-5866)

[Team member modal overlay with biography text, black-and-white portrait cards, and orange accent markers on a light gray grid background](https://design.withfudge.com/share/pin-5866)

[![Footer section with oversized LABS wordmark in black custom typeface, orange corner squares, and monospace copyright text on pale gray](https://pin.fontofweb.com/354?format=jpg)](https://design.withfudge.com/share/pin-354)

[Footer section with oversized LABS wordmark in black custom typeface, orange corner squares, and monospace copyright text on pale gray](https://design.withfudge.com/share/pin-354)

[![Multi-step application form with numbered fields, outlined step icons, and selection pills for Funding, Acceleration, and Incubation options](https://pin.fontofweb.com/353?format=jpg)](https://design.withfudge.com/share/pin-353)

[Multi-step application form with numbered fields, outlined step icons, and selection pills for Funding, Acceleration, and Incubation options](https://design.withfudge.com/share/pin-353)

[![Full footer grid with four-column link groups, social links with diagonal arrows, and massive LABS letterforms spanning the bottom edge](https://pin.fontofweb.com/352?format=jpg)](https://design.withfudge.com/share/pin-352)

[Full footer grid with four-column link groups, social links with diagonal arrows, and massive LABS letterforms spanning the bottom edge](https://design.withfudge.com/share/pin-352)

## Overview

ChainGPT Labs presents a deliberately austere visual system that merges early-computing aesthetics with contemporary Web3 credibility. The design relies on a strict underlying grid, a custom display typeface with angular, almost glyph-like letterforms, and a restrained palette of near-black, warm gray, and vivid orange. Every surface reads as engineered rather than decorated: borders are hairline rules, spacing follows modular increments, and the oversized wordmarks function as both branding and structural elements. The result is a venture-lab identity that feels technical, trustworthy, and intentionally stripped of decorative excess. Typography does the heavy lifting—massive custom letterforms establish presence while monospace text handles navigation, forms, and legal content with utilitarian clarity.

## Colors

The palette is intentionally narrow, deriving its energy from contrast and proportion rather than chromatic variety. Four core colors define every interface state.

| token | value | use |
|---|---|---|
| ink | #111111 | Primary text, display type, borders, and active states |
| canvas | #E5E5E5 | Page background, modal overlays, and footer surfaces |
| surface | #FFFFFF | Card backgrounds, input fields, and elevated panels |
| accent | #FF6B00 | Corner markers, active indicators, and primary action emphasis |
| muted | #777777 | Placeholder text, secondary labels, disabled borders, and hairline rules |

The near-black ink against pale gray canvas creates the dominant reading experience, with white surfaces reserved for content that needs subtle elevation. Orange appears sparingly as a signal color—small squares at grid intersections, active form states, and hover indicators—never as large fills. The muted gray handles all secondary information and form structure. No gradients or shadows are present in the visible system; depth is achieved through borders and background shifts alone.

## Typography

Two families divide the typographic labor: a custom display face for identity and impact, and a monospace utility face for everything functional.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Labs Amiga | 8rem | 400 | 0.85 | -0.02em | Massive footer wordmarks, section anchors |
| section-display | Labs Amiga | 4rem | 400 | 0.9 | -0.01em | Page titles, form headers |
| body | Roboto Mono | 1rem | 400 | 1.6 | 0em | Paragraphs, biographies, descriptions |
| label | Roboto Mono | 0.75rem | 400 | 1.4 | 0.04em | Form labels, step indicators, tags |
| navigation | Roboto Mono | 0.875rem | 400 | 1.5 | 0.02em | Menu items, footer links, legal text |

Labs Amiga, designed by Pedro Arilla of Arillatype Studio, supplies the distinctive character of the system. Its letterforms are constructed from straight segments and sharp angles with occasional rounded terminals, giving it a constructed, almost stencil-like quality that reads as both retro-computing and forward-technical. Roboto Mono, designed by Google, handles all utilitarian text with the neutrality and legibility expected of a monospace face. Verify licensing for these families before production use.

## Layout

The entire system rests on a visible grid of 1px hairlines that divide the canvas into equal columns and rows. This grid is not decorative scaffolding—it remains visible as the primary organizational device, creating cells that hold content, navigation, and massive typographic elements alike.

Page sections stack vertically with generous breathing room. The footer occupies a substantial portion of the viewport, dedicating its lower half to the LABS wordmark at a scale where individual letterforms span multiple grid cells. Content areas above maintain the same grid logic but at smaller subdivisions.

Horizontal rhythm follows a four-column major grid with nested subdivisions. The application form visible in the images uses a split layout: step indicators and section titles occupy the left column while form fields fill the remaining width. Footer navigation distributes link groups across four equal columns.

Vertical spacing uses a base unit of 0.25rem, with section breaks at 6rem. Grid gaps are fixed at 1px, creating the hairline separations between cells. No border-radius softens the grid itself; only interactive elements and cards receive minimal rounding.

## Visual language

The aesthetic position sits between technical documentation and gallery installation. The visible grid references engineering blueprints and terminal interfaces, while the oversized custom typography asserts brand confidence. This tension—between utilitarian structure and expressive scale—defines the visual character.

Imagery appears in black and white when present, as seen in the team member portraits. Color photography would disrupt the restrained palette; the system prefers to let the accent orange and the warm gray ground provide all necessary warmth.

Corner markers are a recurring micro-pattern: small orange squares appear at the outer edges of major grid cells, particularly around the massive footer letterforms. These function as registration marks, reinforcing the precision-engineered quality of the layout.

Line weight is universally thin. Borders, grid lines, and underlines share the same 1px value, creating visual consistency across all structural elements. The only heavy visual presence comes from the display type, which uses solid fills at large scale.

## Components

### Primary Action
- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: Solid accent orange background with ink text
- **Typography**: `{typography.label}` in uppercase or title case
- **Shape**: Full pill with `9999px` radius
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Typically appears in navigation bars or form headers, right-aligned or at grid intersections

### Secondary Action
- **Anatomy**: Text label within a bordered pill
- **Surface**: Transparent background with 1px ink border
- **Typography**: `{typography.label}`
- **Shape**: Full pill with `9999px` radius
- **Spacing**: Matches primary action padding
- **Composition**: Used for alternative choices, such as the Funding, Acceleration, and Incubation selection pills in the application form

### Card
- **Anatomy**: Container with optional media area and text content
- **Surface**: White background with 1px muted border
- **Typography**: Title in `{typography.section-display}`, body in `{typography.body}`
- **Shape**: 0.25rem corner radius
- **Spacing**: 1.5rem internal padding
- **Composition**: Team member cards display black-and-white portraits above names and titles, with bio links

### Modal Overlay
- **Anatomy**: Centered panel with close control and scrollable content
- **Surface**: Semi-transparent canvas background (95% opacity) with 1px muted border
- **Typography**: Body biography text in `{typography.body}`, close label in `{typography.label}`
- **Shape**: 0.25rem corner radius
- **Spacing**: 2rem internal padding
- **Composition**: Appears above grid content, dimming the underlying page; contains an X close marker and bio text with orange accent on the close action

### Form Input
- **Anatomy**: Label prefix with numbered step indicator, followed by underline input area
- **Surface**: Transparent with bottom border only
- **Typography**: Label in `{typography.label}`, placeholder in `{typography.body}` with muted color
- **Shape**: No radius; full-width underline
- **Spacing**: 0.75rem vertical padding, flush to grid column edges
- **Composition**: Numbered labels (1.1, 1.2, etc.) precede each field; placeholder text appears in brackets

### Selection Pill Group
- **Anatomy**: Horizontal row of mutually exclusive options
- **Surface**: Each pill transparent with muted border; active state likely uses ink fill or accent marker
- **Typography**: `{typography.label}`
- **Shape**: Full pill radius
- **Spacing**: Equal gaps between pills, matching grid gap or slightly larger
- **Composition**: Three options visible—Funding, Acceleration, Incubation—spreading across available width

### Footer Wordmark
- **Anatomy**: Individual letterforms spanning multiple grid cells
- **Surface**: Ink fill on canvas background
- **Typography**: `{typography.hero-display}` at maximum scale
- **Shape**: Letterforms inherit the constructed geometry of Labs Amiga
- **Spacing**: Letters touch or nearly touch cell boundaries; orange corner squares mark outer grid intersections
- **Composition**: L-A-B-S sequence visible, each letter occupying roughly one major grid column

## Responsive behavior

The grid-based structure suggests a natural adaptation path: at narrower viewports, the four-column major grid should collapse to two columns, then single column. The massive footer wordmark will require scaling down or horizontal scrolling to maintain legibility of the constructed letterforms.

Form layouts should stack vertically on small screens, with step indicators moving above their associated field groups rather than remaining in a left sidebar. Selection pills may wrap to multiple rows.

The visible grid lines may become distracting on mobile; consider hiding them below a threshold width while maintaining the implied grid through spacing and alignment. Touch targets for navigation and form elements should expand to at least 44px height.

## Practical implementation guidance

### Preserve
- The visible 1px grid as the foundational layout device
- The stark contrast between massive display type and tiny monospace labels
- Black-and-white treatment for all photography
- Orange corner markers as the sole decorative accent
- The constructed, angular quality of Labs Amiga at all sizes

### Avoid
- Adding background colors behind content areas; let the canvas show through
- Introducing rounded corners on structural grid elements
- Using color photography or gradient fills
- Shadow effects for elevation; rely on borders and background shifts
- Generic sans-serif substitutions for the display face

### Recommended Build Order
1. Establish the CSS grid with 1px gap values and four major columns
2. Implement Labs Amiga at hero and section display sizes
3. Add Roboto Mono for all body, label, and navigation text
4. Build the footer with oversized wordmark and orange corner markers
5. Create form components with underline inputs and numbered labels
6. Add modal overlay with semi-transparent canvas background
7. Implement selection pills and primary/secondary action buttons

### Accessibility
- Ensure the 1px grid lines meet minimum contrast ratios when they function as borders or interactive boundaries
- Provide visible focus states using the accent orange rather than default browser outlines
- Maintain readable text sizes: the 0.75rem label size should be used sparingly and never for critical instructions
- Add `aria-label` attributes to the orange corner markers if they convey meaning beyond decoration
- Ensure form placeholders are not the sole source of field labels; the numbered prefixes serve this role

## Scope note

This guide covers the homepage and application form surfaces visible in the supplied images. Interior pages, mobile breakpoints, motion behavior, hover states, loading indicators, and form validation styling are not represented. Measurements are practical adaptation targets derived from the visible grid and type scale.
