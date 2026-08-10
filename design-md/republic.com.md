# How republic.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/republic.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark hero section with large white display type reading Innovation through tokenization, blue primary button, and three-column footer navigation on navy background](https://pin.fontofweb.com/6981?format=jpg)](https://design.withfudge.com/share/pin-6981)

[Dark hero section with large white display type reading Innovation through tokenization, blue primary button, and three-column footer navigation on navy background](https://design.withfudge.com/share/pin-6981)

[![Light hero with bold headline Your community wants to invest, blue CTA button, investor logos, and colorful company raise cards in a masonry grid on the right](https://pin.fontofweb.com/6982?format=jpg)](https://design.withfudge.com/share/pin-6982)

[Light hero with bold headline Your community wants to invest, blue CTA button, investor logos, and colorful company raise cards in a masonry grid on the right](https://design.withfudge.com/share/pin-6982)

[![Social proof section with founder testimonials, green accent metrics, category filter pills, and blue Discover your worth CTA button](https://pin.fontofweb.com/6983?format=jpg)](https://design.withfudge.com/share/pin-6983)

[Social proof section with founder testimonials, green accent metrics, category filter pills, and blue Discover your worth CTA button](https://design.withfudge.com/share/pin-6983)

[![Product feature grid with four outlined cards for raise options and trust section with checkmark icons on clean white background](https://pin.fontofweb.com/6984?format=jpg)](https://design.withfudge.com/share/pin-6984)

[Product feature grid with four outlined cards for raise options and trust section with checkmark icons on clean white background](https://design.withfudge.com/share/pin-6984)

## Overview

Republic's design system serves a financial technology platform that connects investors with private market opportunities. The interface alternates between dramatic dark hero sections and clean, airy light content areas, creating visual rhythm that separates marketing narrative from functional content. The system relies on a single type family—Inter—used across all weights from Regular to Bold, establishing consistency while allowing hierarchy through size and weight contrast. A vivid blue defines primary actions, while a bright green accent appears selectively for financial metrics and success indicators. The overall impression is institutional yet approachable: precise enough to convey trust in financial transactions, warm enough to invite community participation.

## Colors

The palette operates in two modes: a dark cinematic mode for hero sections and a light editorial mode for content. Both share the same action and accent colors.

| token | value | use |
|---|---|---|
| action | #0049FF | Primary buttons, links, active states |
| ink | #1A1A1A | Primary text on light backgrounds |
| ink-light | #333333 | Secondary headings, card titles |
| muted-ink | #666666 | Body text, descriptions, captions |
| canvas | #FFFFFF | Page background, card surfaces |
| surface | #F2F0FF | Subtle tinted backgrounds, hover states |
| surface-dark | #061231 | Hero section backgrounds, dark panels |
| surface-navy | #0A4374 | Deep blue accents, gradient endpoints |
| border | #CCCCCC | Card outlines, dividers, inactive pills |
| border-light | #E5EDFF | Subtle separators on dark backgrounds |
| success | #00CC18 | Financial metrics, raised amounts, positive indicators |
| success-muted | #009E3D | Secondary green, gradient accents |

Dark mode appears in hero sections and the main footer navigation area, using surface-dark as the dominant background with white text. Light mode covers product descriptions, testimonial sections, and feature grids on canvas white. The success green is reserved for monetary figures and quantitative proof points, never used for interactive elements. Blue action color maintains consistent presence across both modes.

## Typography

All text uses Inter, a neo-grotesque sans-serif with excellent legibility at financial data sizes. The type scale spans from 11px labels to 100px hero display, with tight negative tracking on larger sizes to maintain compact, confident headlines.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 6.25rem | 500 | 0.95 | -0.05em | Hero headlines, tokenization page |
| section-display | Inter | 2.25rem | 600 | 1.11 | -0.03em | Section headings, feature titles |
| subhead | Inter | 1.5rem | 600 | 1.33 | normal | Card titles, subsection headers |
| body | Inter | 1rem | 400 | 1.5 | -0.015em | Paragraphs, descriptions, navigation |
| body-large | Inter | 1.125rem | 400 | 1.33 | -0.02em | Lead paragraphs, hero descriptions |
| label | Inter | 0.75rem | 400 | 1.33 | -0.01em | Captions, metadata, legal copy |
| navigation | Inter | 1rem | 400 | 1.5 | -0.01em | Header links, footer links |
| button | Inter | 1.125rem | 600 | 1.5 | normal | CTA buttons, primary actions |
| metric | Inter | 2.5rem | 500 | 1.25 | -0.05em | Financial figures, raised amounts |

Weight 600 (Semibold) carries most heading and button duties. Weight 500 (Medium) appears only in the largest display sizes for lighter visual mass. Weight 400 (Regular) handles all body and navigation text. The 100px hero size with -5px tracking creates an oversized, editorial presence on the tokenization landing page. Verify licensing for these families before production use.

## Layout

The layout follows a centered container model with generous horizontal margins. Content max-width appears to sit around 1200px with 32px side padding on standard sections, expanding to full-bleed for hero backgrounds and card grids.

**Grid and spacing**

- Base unit: 2px (0.125rem)
- Section vertical rhythm: 48px to 64px between major blocks
- Content gap: 24px between related elements
- Card internal padding: 16px
- Hero internal padding: 48px top, substantial bottom margin before next section

**Container behavior**

- Standard content: centered with auto margins, approximately 535px total side margins visible in extracted data
- Full-bleed heroes: background extends to viewport edges, content inset
- Card grids: 2-column and 3-column arrangements with 16px to 32px gutters

**Navigation structure**

- Fixed header with logo left, primary navigation center-left, utility actions right
- Search input with icon in header bar
- Region selector (US/Global) and Log in as text links
- Open account as filled primary button

The hero section on the raise page uses an asymmetrical split: text content occupies roughly 45% left, while a masonry-style card grid fills the right side with company success stories. This broken grid creates visual energy appropriate for a platform emphasizing community and access.

## Visual language

**Photography and imagery**

Company cards use branded imagery with strong color blocking—lime greens, navy blues, warm creams—each card distinct but harmonious. Founder portraits in testimonials are circular crops with small company logo badges overlaid at the bottom right. The overall photographic style is professional but not sterile: real people, real products, with saturated brand colors.

**Iconography**

Simple line icons appear for feature categories: a plus symbol for "Raise capital," a sparkle for "Reward brand loyalty." Checkmarks in green indicate trust indicators. The icon style is minimal, 1.5px stroke weight, matching the clean typographic approach.

**Card surfaces**

Three card treatments appear:
- Outlined cards: 1px border in #CCCCCC, 15px radius, white fill, used for feature selection
- Filled cards: colored backgrounds with white text, used for company showcases
- Dark cards: surface-dark background with subtle gradients, used in hero grids

**Motion and interaction cues**

While still images cannot show motion, the design implies interaction through:
- Pill-shaped category filters with active fill state
- Card hover potential via subtle shadow absence and clean borders
- Button state changes via solid fill

## Components

**Primary button**

- Anatomy: text label centered, no icon in standard usage
- Surface: action (#0049FF) background, white text
- Typography: button token, 18px Semibold
- Shape: 6px radius, approximately 12px vertical padding and 30px horizontal padding
- Spacing: 48px margin-top when following description text
- Variants: appears in header at smaller padding (12px 30px), in content areas at standard size

**Category filter pill**

- Anatomy: text label only, horizontal row arrangement
- Surface: inactive has #CCCCCC border, 1px solid, white fill; active has dark fill (#1A1A1A) with white text
- Typography: body token, 16px Regular
- Shape: 16px radius (full pill), 16px horizontal padding, 8px vertical padding
- Spacing: 8px to 12px gap between pills
- Composition: left-aligned row, scrollable on narrow viewports

**Testimonial card**

- Anatomy: circular founder portrait (approximately 64px), name as subhead, title as muted body, quote as body text, metric as large green figure, investor logos below
- Surface: white background, no visible border, subtle vertical dividers between columns in 3-up layout
- Typography: name in 24px Semibold, title in 16px Regular muted-ink, quote in 16px Regular ink, metric in 40px Medium success green
- Shape: portrait circle with 15px radius badge overlay for company logo
- Spacing: 32px between portrait and text, 24px between quote and metric, 16px between metric and investor logos

**Feature selection card**

- Anatomy: title in subhead, description in body muted-ink, optional icon above title
- Surface: white fill, 1px #CCCCCC border, 15px radius
- Typography: title 16px Semibold, description 16px Regular
- Shape: 15px radius, 16px internal padding
- Spacing: 16px gap between cards in 2x2 grid

**Company showcase card (masonry grid)**

- Anatomy: large monetary figure in metric green, company logo, category label, background imagery
- Surface: full-bleed photographic or illustrated background with brand color overlays
- Typography: metric in 48px Medium success green, company name in 16px Semibold white
- Shape: 15px radius, varying aspect ratios creating masonry effect
- Composition: stacked vertically with 16px gaps, right-aligned in hero split

**Header navigation**

- Anatomy: logo mark + wordmark left, primary links (Investors, Businesses), search input, region selector, Log in text link, Open account button
- Surface: transparent over hero, white background on scroll (implied by design pattern)
- Typography: navigation token for links, button token for CTA
- Shape: search input has 8px radius with gray background, buttons at 6px radius
- Spacing: 32px horizontal padding, 16px between navigation items

**Footer navigation**

- Anatomy: three-column link groups under category headings (Invest, Raise, Build)
- Surface: surface-dark background, white text
- Typography: category in 24px Semibold, links in 16px Regular
- Shape: full-bleed width, top border in subtle light blue
- Spacing: 24px between category heading and first link, 16px between links

## Responsive behavior

The design shows desktop-first composition with clear adaptation paths. The hero split layout (text left, cards right) should stack vertically on narrower viewports, with the masonry grid collapsing to a single scrollable row or stacked cards. The three-column testimonial grid should become a single column with horizontal scroll or stacked cards. Category filter pills should remain horizontally scrollable rather than wrapping, preserving the tab-like interaction model. The 100px hero display size should scale down to 48px or 36px on mobile to maintain readability without excessive line breaks. Navigation should collapse to a hamburger menu with the Open account button remaining visible in the header.

## Practical implementation guidance

**Preserve**
- The stark contrast between dark hero sections and light content areas; this mode-switching is central to the brand rhythm
- The tight negative tracking on display sizes; the compressed headlines are distinctive
- Green color reserved exclusively for monetary metrics and success indicators
- Single font family throughout; the Inter-only approach is intentional and should not be diluted
- Circular founder portraits with overlaid company badges in testimonials

**Avoid**
- Introducing additional accent colors beyond blue and green; the restrained palette is part of the institutional trust
- Using success green for buttons or links; it is reserved for read-only metrics
- Generic card shadows; the flat outlined style is deliberate
- Breaking the 2px base grid; all spacing should resolve to whole multiples of 0.125rem

**Recommended build order**
1. Establish the 2px base grid and type scale with Inter at all weights
2. Implement dark and light background modes with correct text colors
3. Build the primary button component with exact padding and radius
4. Create card variants: outlined for features, filled for showcases
5. Implement the header with search input and region selector
6. Build the hero split layout with masonry grid
7. Add testimonial cards with metric green figures
8. Implement category filter pills with active state

**Accessibility**
- Ensure 4.5:1 contrast ratio for all body text; the muted-ink (#666666) on white may need verification for small sizes
- Dark mode heroes with white text on surface-dark (#061231) exceed contrast requirements
- Add visible focus states to all interactive elements; the flat design requires clear focus indicators
- Use aria-label on icon-only buttons (search, region selector)
- Ensure category filter pills communicate selected state to screen readers
- Consider reduced-motion preferences for any masonry grid animations

## Scope note

This guide covers the raise page and tokenization landing page visible in the supplied images. Mobile breakpoints, form interactions, investment flows, and account dashboard interfaces are not represented. Motion design, loading states, and error handling are not described. Measurements are exact values from the retained interface data.
