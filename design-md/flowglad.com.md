# How flowglad.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/flowglad.com-design)

Last updated: 2026-08-10

## Captured pages

[![Blog page with dark charcoal background, newsletter subscription form, and article cards with abstract geometric thumbnails and category tags](https://pin.fontofweb.com/5088?format=jpg)](https://design.withfudge.com/share/pin-5088)

[Blog page with dark charcoal background, newsletter subscription form, and article cards with abstract geometric thumbnails and category tags](https://design.withfudge.com/share/pin-5088)

[![Footer section with Flowglad logo, tagline, email subscription, two-column navigation links with external icons, and legal links](https://pin.fontofweb.com/5086?format=jpg)](https://design.withfudge.com/share/pin-5086)

[Footer section with Flowglad logo, tagline, email subscription, two-column navigation links with external icons, and legal links](https://design.withfudge.com/share/pin-5086)

[![FAQ accordion section with dark background, expandable question rows with chevron icons, and one expanded answer panel](https://pin.fontofweb.com/5085?format=jpg)](https://design.withfudge.com/share/pin-5085)

[FAQ accordion section with dark background, expandable question rows with chevron icons, and one expanded answer panel](https://design.withfudge.com/share/pin-5085)

[![Pricing page with feature comparison table, section headers, alternating row backgrounds, and code-style CTA banner with Get Started button](https://pin.fontofweb.com/5084?format=jpg)](https://design.withfudge.com/share/pin-5084)

[Pricing page with feature comparison table, section headers, alternating row backgrounds, and code-style CTA banner with Get Started button](https://design.withfudge.com/share/pin-5084)

## Overview

Flowglad presents a dark, sophisticated interface for a developer-oriented payments platform. The visual system balances warmth and technical precision through a charcoal-brown palette that avoids cold pure blacks, paired with an elegant serif display face and utilitarian monospace accents. The overall impression is of a tool built by developers for developers—approachable yet authoritative, with careful attention to typographic hierarchy and restrained surface variation.

The design operates in a single dark mode throughout, using layered warm grays to create depth without introducing harsh contrast. Content is organized in a centered single-column layout with generous margins, creating a focused reading experience. Technical credibility is communicated through monospace labels, code-style annotations, and clean tabular data presentation, while the serif headings add editorial refinement that elevates the product above typical developer-tool aesthetics.

## Colors

The palette is built on warm charcoal foundations with cream-toned text and subtle surface layering. All colors derive from visible interface elements across the supplied pages.

| token | value | use |
|---|---|---|
| canvas | `#2D2926` | Primary page background, deepest layer |
| surface | `#3D3834` | Card backgrounds, input fields, footer sections |
| surface-elevated | `#4A4540` | Tag backgrounds, hover states, subtle emphasis |
| ink | `#F5F0EB` | Primary text, headings, active content |
| ink-muted | `#B8A99A` | Secondary text, descriptions, placeholder text |
| action | `#E8DDD0` | Primary button backgrounds, CTA highlights |
| action-ink | `#2D2926` | Text on action surfaces |
| border | `#5A544E` | Dividers, input borders, accordion separators |

The canvas color establishes a warm, earthy darkness that feels less severe than pure black. Surface layers step up in lightness with restrained increments, creating depth through value rather than color. The ink tones are warm creams rather than stark whites, maintaining the palette's cohesive warmth. The action color is a light warm beige that provides clear visibility against dark backgrounds without the clinical feel of pure white. Border colors are subtle, functioning as optical separators rather than prominent rules.

No light mode is visible in the supplied material. The single dark theme is consistent across blog, pricing, FAQ, and footer surfaces.

## Typography

The type system combines three distinct voices: an elegant serif for display and editorial moments, a clean sans-serif for body readability, and a monospace family for technical labels and code contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Abc Arizona Flare Unlicensed Trial | 3rem | 400 | 1.1 | -0.02em | Page titles, major headlines |
| section-display | Abc Arizona Flare Unlicensed Trial | 2rem | 400 | 1.2 | -0.01em | Section headings, card titles |
| body | Dm Sans 9 Pt | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, FAQ answers |
| body-bold | Dm Sans 9 Pt | 1rem | 700 | 1.6 | 0 | Emphasized body text, feature labels |
| label | Berkeley Mono Variable | 0.75rem | 400 | 1.4 | 0.02em | Category tags, metadata, small captions |
| code | Berkeley Mono Variable | 0.875rem | 400 | 1.5 | 0 | Code snippets, technical annotations |
| navigation | False | 0.875rem | 600 | 1.4 | 0 | Navigation links, button labels |

Abc Arizona Flare Unlicensed Trial, designed by Elias Hanzer and Alex Lescieux at Dinamo, provides the editorial voice for headings. Its regular weight carries enough presence without needing bold, and the slight negative tracking tightens headlines for impact. Dm Sans 9 Pt serves as the workhorse body face, offering clean geometric readability at small sizes. Berkeley Mono Variable, designed by Neil Panchal at US Graphics Company, handles all technical and label contexts with its clear monospace rhythm. False, designed by Deni Anggara at Indian Type Foundry, appears in navigation and interactive elements with a semi-bold weight that maintains clarity at small sizes. Sf Pro is also present in the source material and may appear in system-level contexts or fallback stacks.

Verify licensing for these families before production use. The Abc Arizona Flare Unlicensed Trial files are marked as unlicensed trial versions in the source material.

## Layout

The layout follows a centered single-column model with a maximum content width and generous surrounding margins. The narrow reading column creates focus and allows the dark background to frame content as a contained experience.

The content column appears to max out at approximately 42rem to 48rem wide, with equal margins on either side that expand on wider viewports. This centered approach is consistent across the blog listing, pricing table, FAQ accordion, and footer navigation. Vertical rhythm is established through section spacing of 6rem between major content blocks, with tighter 1.5rem gaps between related elements within a section.

The pricing page demonstrates a full-width tabular layout within the content column, with feature rows alternating between the canvas and surface colors to improve scanability. The FAQ accordion uses the full content width with internal padding on each row. The blog cards employ a two-column internal layout with thumbnail images on the left and text content on the right, maintaining the overall centered container.

Footer navigation splits into a two-column grid within the same centered container, with link groups arranged under "Navigate" and "Engage" headings. The email subscription form sits above this grid, spanning the full content width with an inline input and button arrangement.

## Visual language

The visual language communicates technical sophistication through restraint and precision. The dark warm palette avoids the cold austerity of typical developer tools, while the serif display type adds unexpected editorial quality. Geometric abstract imagery—wireframe spheres, dot grids, and overlapping circles—serves as thumbnail art, reinforcing the technical theme without literal illustration.

Surface treatment relies on subtle value shifts rather than shadows or borders. Cards and rows sit slightly above the canvas through their lighter surface color, with no visible drop shadows. The absence of rounded corners on major containers keeps the aesthetic crisp and utilitarian; only buttons, tags, and small elements carry modest rounding.

Iconography is minimal and functional: chevrons for accordion states, external-link arrows on footer navigation, and social platform icons. These are rendered in the muted ink color at small sizes, serving wayfinding without visual noise. The code comment syntax in the pricing CTA—`/* Integrate payments without any glue code */`—directly addresses the developer audience and integrates technical vernacular into the marketing surface.

## Components

### Newsletter subscription

An inline form combining a text input and submit button. The input uses the surface background with a subtle border, rounded corners at 0.25rem, and muted placeholder text. The submit button sits immediately adjacent with the action background color and dark text. This compact pattern appears in both the blog header and footer contexts.

### Article card

A horizontal card with a square thumbnail on the left and text content on the right. The thumbnail container uses a darker surface treatment with abstract geometric artwork. The title uses section-display typography in ink color. Below the title, a row of category tags uses the label typography in uppercase or small-caps treatment with surface-elevated backgrounds. Cards are separated by thin border lines or subtle spacing.

### FAQ accordion

A vertical stack of expandable rows. Each row shows a question in body typography with a chevron icon on the right. The active expanded row reveals an answer in body typography with additional vertical padding. Rows alternate or maintain consistent surface backgrounds, separated by border-color dividers. The chevron rotates to indicate state.

### Feature table

A structured data presentation with section headers in section-display typography, followed by rows of feature names and values. Rows alternate between canvas and surface backgrounds to aid horizontal scanning. Checkmarks indicate included features. The table spans the full content width with comfortable internal padding.

### Footer navigation

A two-column link grid with small uppercase section headers in label typography. Links use navigation typography with external-link icons where applicable. Links are presented as discrete pill-shaped buttons with surface backgrounds and modest padding, creating tappable targets that read as a cohesive list. Social and contact links include platform icons.

### CTA banner

A full-width strip within the content column combining a code-style comment string in monospace with a primary action button. The background uses surface color with rounded corners, creating a contained call-to-action that stands apart from surrounding content.

## Responsive behavior

The centered single-column layout naturally adapts to narrower viewports by maintaining margins as a percentage of viewport width until reaching a minimum comfortable reading measure. The blog card thumbnails may stack above text content on narrow screens rather than maintaining the side-by-side arrangement. The footer navigation columns may collapse to a single column on mobile, with link groups stacking vertically.

The pricing feature table, being inherently wide, should allow horizontal scrolling within a contained wrapper on narrow viewports rather than compressing column widths to illegibility. Accordion rows maintain their full-width behavior across all sizes, with touch targets remaining at least 44px tall for comfortable interaction.

## Practical implementation guidance

### Preserve
- The warm charcoal palette; avoid substituting pure black or cool grays
- The serif display type for headlines; this is the primary brand differentiator
- Monospace labels for technical and categorical content
- Alternating row backgrounds in data tables rather than zebra-striping with high contrast
- The code-comment syntax pattern in developer-facing CTAs

### Avoid
- Adding drop shadows to cards or containers; the design relies on flat value shifts
- Using bold weights on Abc Arizona Flare Unlicensed Trial; the regular weight carries sufficient presence
- Introducing additional accent colors beyond the warm cream action tone
- Rounding corners on large containers; keep crisp edges on cards and sections
- Generic placeholder imagery; maintain the abstract geometric art direction

### Recommended build order
1. Establish the dark canvas background and centered content column
2. Implement the type hierarchy with Abc Arizona Flare Unlicensed Trial headings and Dm Sans 9 Pt body
3. Build the surface layering system with canvas, surface, and surface-elevated tokens
4. Create the button and input components with their respective surface treatments
5. Implement the newsletter subscription form as a reusable pattern
6. Build the FAQ accordion with proper chevron rotation states
7. Construct the pricing feature table with alternating row backgrounds
8. Add the footer navigation with icon-bearing link buttons

### Accessibility
- Ensure the ink-muted text on surface backgrounds meets WCAG AA contrast ratios; some combinations may need adjustment from the visual estimates
- Provide visible focus indicators on all interactive elements; the dark theme benefits from a light focus ring
- Maintain keyboard operability for the FAQ accordion with Enter and Space activation
- Use aria-expanded on accordion triggers to communicate state to screen readers
- Ensure the code-style CTA text is not conveyed only through monospace styling; the button label provides the actionable name

## Scope note

This guide covers the marketing site surfaces visible in the supplied images: blog listing, pricing page, FAQ section, and footer navigation. The checkout experience, dashboard interface, mobile navigation, and any animation or motion behavior are not represented. Measurements are practical adaptation targets derived from visual inspection of the desktop layout.
