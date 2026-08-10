# How hermesatlas.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hermesatlas.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with oversized 'the community map of hermes agent.' display typography, amber accent on 'hermes agent', and ecosystem stats bar](https://pin.fontofweb.com/8979?format=jpg)](https://design.withfudge.com/share/pin-8979)

[Homepage hero with oversized 'the community map of hermes agent.' display typography, amber accent on 'hermes agent', and ecosystem stats bar](https://design.withfudge.com/share/pin-8979)

[![Project detail page for litprog-skill showing breadcrumb navigation, large repo heading, amber primary button, and overview section with bullet list](https://pin.fontofweb.com/8980?format=jpg)](https://design.withfudge.com/share/pin-8980)

[Project detail page for litprog-skill showing breadcrumb navigation, large repo heading, amber primary button, and overview section with bullet list](https://design.withfudge.com/share/pin-8980)

[![Category listing view with Multi-agent & orchestration and Deployment & infra sections, star counts, and weekly growth metrics in amber](https://pin.fontofweb.com/8981?format=jpg)](https://design.withfudge.com/share/pin-8981)

[Category listing view with Multi-agent & orchestration and Deployment & infra sections, star counts, and weekly growth metrics in amber](https://design.withfudge.com/share/pin-8981)

[![Curated lists grid with four category cards, monospace metadata labels, and amber 'ASK THE ATLAS' button in footer](https://pin.fontofweb.com/8982?format=jpg)](https://design.withfudge.com/share/pin-8982)

[Curated lists grid with four category cards, monospace metadata labels, and amber 'ASK THE ATLAS' button in footer](https://design.withfudge.com/share/pin-8982)

## Overview

Hermes Atlas presents a dark, developer-centric directory interface for the Hermes Agent ecosystem. The visual system pairs dramatic oversized display typography with precise monospace metadata, creating a hierarchy that feels both editorial and technical. The near-black canvas establishes a focused, terminal-like atmosphere, while a warm amber accent punctuates actionable elements and key metrics.

The interface organizes repositories, skills, and tools into browsable categories and curated lists. Information density is high but controlled: large Space Grotesk headings anchor each section, while Jet Brains Mono handles star counts, version strings, category labels, and navigation. The result reads as a sophisticated developer tool rather than a conventional marketing site—functional, scannable, and intentionally austere.

## Colors

The palette is built on near-black surfaces with warm gray text and a single amber accent. No gradients or shadows appear in the interface; depth comes from surface layering and border definition.

| token | value | use |
|---|---|---|
| canvas | #0E0D0B | Page background, deepest layer |
| surface | #15130F | Card backgrounds, secondary panels |
| surface-raised | #2A2620 | Elevated stat cards, hover states |
| ink | #E8E3D6 | Primary headings, body text, links |
| ink-secondary | #B8B1A0 | Secondary descriptions, footer text |
| ink-tertiary | #8A8378 | Tertiary metadata, timestamps |
| ink-muted | #6B6355 | Star counts, inactive labels |
| action | #D49A4F | Primary buttons, accent tags, highlighted metrics |
| action-hover | #7FA05F | Secondary accent for status indicators |
| border | #3D3830 | Card borders, section dividers |
| border-subtle | #2A2620 | Row separators, hairline divisions |

The dark mode is the sole visible mode; a light/dark toggle appears in the header but the default and dominant presentation is dark. The amber action color carries all interactive emphasis—buttons, official badges, growth indicators, and the hero wordmark highlight. Warm grays maintain legibility without competing for attention. Borders are consistently 1px and serve as structural lines rather than decorative elements.

## Typography

Two families drive the system: Space Grotesk for all display and body text, Jet Brains Mono for labels, metadata, and technical annotations. Space Grotesk is designed by Florian Karsten. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Space Grotesk | 7rem | 500 | 0.95 | -0.035em | Homepage hero, massive statements |
| section-display | Space Grotesk | 3.5rem | 600 | 1 | -0.03em | Page titles, project names |
| repo-title | Space Grotesk | 1.25rem | 700 | 1.45 | -0.025em | Repository headings, card titles |
| body | Space Grotesk | 1rem | 400 | 1.45 | normal | Descriptions, paragraphs |
| body-large | Space Grotesk | 1.0625rem | 400 | 1.6 | normal | Featured project descriptions |
| label | Jet Brains Mono | 0.6875rem | 600 | 1.45 | 0.12em | Navigation, buttons, category tags |
| metadata | Jet Brains Mono | 0.625rem | 400 | 1.45 | 0.15em | Star counts, version strings, dates |
| code | Jet Brains Mono | 0.8125rem | 400 | 1.65 | normal | Inline code, technical details |

Display sizes use tight negative tracking and leading that approaches or matches the font size, creating compact, impactful headlines. The hero display at 112px (7rem) with -3.92px tracking dominates the homepage. Monospace sizes stay small and widely tracked, establishing a clear functional voice separate from the proportional text. Weight distinctions are minimal: Space Grotesk uses 400, 500, 600, and 700; Jet Brains Mono uses 400 and 600.

## Layout

The layout follows a full-width fluid model with contained content bands. No sidebar navigation appears; the header carries primary wayfinding, and category pages use vertical stacking.

**Header.** Fixed or sticky top bar with logo left, metadata center (date, repo count, version), navigation right (Map, Lists, Reports, Source), and theme toggle far right. Height is compact, approximately 3.5rem. A 1px border in border-subtle separates header from content.

**Hero section.** Full-width, generous vertical padding (approximately 5rem top, 3rem bottom). The display heading occupies roughly 60% width, left-aligned. A stats bar sits below the hero, divided into equal columns with top borders, showing aggregate ecosystem metrics.

**Content bands.** Alternating between full-bleed dark canvas and slightly raised surface panels. Category listings use horizontal rules between items. Curated lists appear as a grid of equal-width cards with internal borders.

**Project detail.** Two-column feel at top: large title and description left, metadata and action button below. Body content is single-column, comfortably narrow for readability (approximately 65 characters per line). Related items appear at bottom with compact rows.

**Footer.** Minimal, with small monospace credits and a persistent amber action button anchored right.

Spacing uses a 2px base unit (0.125rem). Common increments are 8px (0.5rem), 12px (0.75rem), 16px (1rem), 20px (1.25rem), 24px (1.5rem), and 40px (2.5rem). Section breaks are typically 80px (5rem).

## Visual language

The aesthetic is terminal-modern: dark, flat, and information-dense with occasional warm punctuation. All visible elements use 0rem border-radius—everything is sharp-cornered, reinforcing the technical precision. No drop shadows appear; elevation is communicated solely through background color shifts from canvas to surface to surface-raised.

Imagery is absent except for small UI icons. The visual interest comes from typographic scale contrast: the massive hero display against tiny metadata labels, the bold repo titles against muted descriptions. The amber accent is used sparingly but decisively—buttons, official badges, growth metrics, and the hero highlight word.

Icons appear as simple arrows (→) and stars (★) in text, rendered in the current text color or amber for emphasis. The "ASK THE ATLAS" button is a persistent floating action element, always amber, always uppercase monospace.

Data visualization is present in the stats bar: large numerals with tiny labels beneath, arranged in a grid. Numbers use the same amber as the action color when they represent growth or highlight metrics.

## Components

### Primary button

- **Anatomy:** Text label only, no icon in default state; arrow may appear on hover
- **Surface:** Solid action (#D49A4F) background
- **Typography:** label token, uppercase, Jet Brains Mono
- **Shape:** 0rem border-radius, sharp rectangle
- **Spacing:** 12px vertical, 18px horizontal padding
- **Composition:** Inline or floated right in footer contexts
- **States:** Default is solid amber; no visible disabled or loading state in captures

### Secondary button / text link

- **Anatomy:** Underlined text or bordered container
- **Surface:** Transparent background, optional 1px border in border color
- **Typography:** body or label token
- **Shape:** 0rem border-radius
- **Spacing:** Generous hit area with padding

### Stat card

- **Anatomy:** Large numeral top, tiny uppercase label bottom
- **Surface:** surface-raised background, 1px border
- **Typography:** section-display or repo-title for numbers; metadata for labels
- **Shape:** 0rem border-radius, equal-width grid cells
- **Spacing:** 20-24px internal padding
- **Composition:** Arranged in horizontal row with dividing borders

### Repository row

- **Anatomy:** Star count left (amber or muted), owner/name center, description below, growth metric right
- **Surface:** Transparent, separated by 1px top border
- **Typography:** repo-title for name; metadata for stars and growth; body for description
- **Shape:** Full-width, 0rem border-radius
- **Spacing:** 14px vertical padding, 40px horizontal padding in wide contexts
- **Composition:** Flex row with space-between alignment; description spans full width below title
- **Variants:** Official repos carry an amber "OFFICIAL" tag; some show "hot" indicator

### Category card

- **Anatomy:** Arrow icon, title, description, optional count
- **Surface:** surface background, 1px border
- **Typography:** repo-title for heading; body for description; metadata for count
- **Shape:** 0rem border-radius
- **Spacing:** 20px padding
- **Composition:** Grid of equal-width cards with internal borders

### Navigation header

- **Anatomy:** Logo left, breadcrumb or metadata center, links right, theme toggle far right
- **Surface:** canvas background, 1px bottom border
- **Typography:** label for nav items; metadata for center metadata
- **Shape:** Full-width bar, fixed height
- **Composition:** Flex row, space-between

### Tag / badge

- **Anatomy:** Uppercase text, compact rectangle
- **Surface:** Solid action background for official badges; transparent with border for secondary
- **Typography:** label token
- **Shape:** 0rem border-radius
- **Spacing:** 2px vertical, 6px horizontal padding

### Search input

- **Anatomy:** Placeholder text only, no visible border in default state
- **Surface:** Transparent
- **Typography:** body in ink-muted
- **Shape:** Full-width, 0rem border-radius
- **Composition:** Appears above listing sections with sort controls right-aligned

## Responsive behavior

The system is documented from desktop viewport captures. The layout appears to maintain a single-column structure with increasing margins at narrower widths. The hero display at 7rem would require aggressive scaling for smaller viewports—recommended reduction to 3.5rem on tablet and 2.5rem on mobile, maintaining the same weight and tracking ratios.

Category grids should collapse from four columns to two, then single column. Repository rows should maintain their horizontal structure but wrap growth metrics below the title on narrow screens. The persistent "ASK THE ATLAS" button should remain fixed-position and accessible.

Navigation items may collapse to a menu affordance below approximately 768px. The stats bar should stack vertically on mobile rather than maintaining horizontal columns.

## Practical implementation guidance

### Preserve
- The sharp, 0rem-radius aesthetic on all components—this is a defining characteristic
- The strict two-family typographic system: Space Grotesk for voice, Jet Brains Mono for function
- The amber accent restraint: use only for actions, growth, and official indicators
- The dark canvas as default; any light mode should invert the full palette, not add a third theme
- The generous horizontal padding on repository rows (40px) that creates breathing room in dense lists

### Avoid
- Adding border-radius to cards or buttons; it contradicts the terminal-like precision
- Using the amber accent for large background areas; it should remain a spot color
- Mixing additional font families; the two-family contrast is intentional
- Creating gradient backgrounds or shadow elevations; the flat layer system is sufficient
- Using image-based icons where text symbols (→, ★) suffice

### Recommended build order
1. Establish the dark canvas and surface color tokens
2. Implement the typography scale with both families at all sizes
3. Build the header with navigation and metadata layout
4. Create the hero section with responsive display sizing
5. Implement the stats bar grid component
6. Build repository rows with official badge variant
7. Add category cards and curated list grids
8. Implement the persistent action button
9. Polish with border details and spacing refinements

### Accessibility
- The dark theme with warm gray text meets WCAG AA for large text but should be verified for small metadata sizes; consider lightening ink-tertiary if needed
- The amber action color on near-black should maintain 3:1 contrast minimum for UI components
- All repository rows should be fully clickable with visible focus indicators
- The search input needs an accessible label and clear focus state
- Theme toggle should respect system preferences and persist choice

## Scope note

This guide covers the homepage, category listings, curated lists, and project detail surfaces visible in the supplied captures. Mobile breakpoints, hover states, loading skeletons, form validation, and the light theme variant are not documented. The footer area and any authentication flows are partially visible but not fully represented.
