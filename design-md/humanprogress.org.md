# How humanprogress.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/humanprogress.org-design)

Last updated: 2026-08-10

## Captured pages

[![Heroes of Progress grid page showing engraved portrait illustrations with category filters and article cards with blue metadata labels](https://pin.fontofweb.com/5018?format=jpg)](https://design.withfudge.com/share/pin-5018)

[Heroes of Progress grid page showing engraved portrait illustrations with category filters and article cards with blue metadata labels](https://design.withfudge.com/share/pin-5018)

[![Heroes of Progress project landing with deep navy background, white display typography, and colorful historical portrait collage](https://pin.fontofweb.com/5017?format=jpg)](https://design.withfudge.com/share/pin-5017)

[Heroes of Progress project landing with deep navy background, white display typography, and colorful historical portrait collage](https://design.withfudge.com/share/pin-5017)

[![Minimal site header with Human Progress logo in blue, navigation links, and search icon on white background](https://pin.fontofweb.com/5016?format=jpg)](https://design.withfudge.com/share/pin-5016)

[Minimal site header with Human Progress logo in blue, navigation links, and search icon on white background](https://design.withfudge.com/share/pin-5016)

[![Trends section with three data visualization cards showing economic charts and blue section heading with navigation arrows](https://pin.fontofweb.com/5015?format=jpg)](https://design.withfudge.com/share/pin-5015)

[Trends section with three data visualization cards showing economic charts and blue section heading with navigation arrows](https://design.withfudge.com/share/pin-5015)

## Overview

Human Progress presents a distinctive editorial design system built for data storytelling and long-form research content. The visual language balances institutional credibility with approachable clarity: a deep navy hero mode creates dramatic impact for project launches and feature pages, while the majority of the site operates on a clean white canvas that lets charts, graphs, and photographic content take center stage. The system is anchored by two complementary typefaces from Klim Type Foundry—Söhne for confident display headings and a lighter book weight for readable body text—plus a custom icon font for the brand mark. Content density is moderate, with generous whitespace around data visualizations and a consistent card-based architecture that scales from trend summaries to article grids. The overall impression is of a research publication that respects its audience's intelligence while remaining visually accessible.

## Colors

The palette operates in two distinct modes: a light mode for standard content pages and a dark navy mode for hero sections and feature pages.

| token | value | use |
|---|---|---|
| action | #0066FF | Primary links, category labels, active navigation states, metadata tags |
| ink | #1A1A1A | Primary body text, headings on light backgrounds, chart axes |
| muted-ink | #666666 | Secondary text, captions, publication dates, author bylines |
| canvas | #FFFFFF | Primary page background, card surfaces, chart backgrounds |
| surface | #F5F5F5 | Subtle section backgrounds, data card fills, alternating rows |
| border | #E5E5E5 | Card borders, dividers, input outlines, subtle separators |
| hero-canvas | #0A1A4D | Deep navy for hero sections, feature banners, dark mode surfaces |
| hero-ink | #FFFFFF | Text on navy backgrounds, button borders, inverted content |
| accent-warm | #E85D4E | Warm coral accent for editorial highlights, decorative elements |

The light mode dominates the site: white canvas with near-black ink creates maximum readability for data-dense content. The action blue is restrained, appearing primarily as metadata labels and interactive cues rather than large fills. The hero-canvas navy is reserved for high-impact moments—project landing pages, major report launches—where white display type and outlined buttons create a sophisticated, editorial contrast. The accent-warm appears sparingly in decorative imagery and editorial illustrations, never as a functional UI color. Chart visualizations use a distinct palette of line colors (teal, orange, green) that are content-specific rather than system tokens.

## Typography

The type system relies on three families: Söhne-Halbfett for display authority, Copyright Klim Type Foundry-Buch for body readability, and Humanprogress for the brand mark.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Söhne-Halbfett | 3rem | 600 | 1.1 | -0.02em | Project titles, hero headings, major feature headers |
| section-display | Söhne-Halbfett | 2rem | 600 | 1.2 | -0.01em | Section headings, card titles, trend names |
| body | Copyright Klim Type Foundry-Buch | 1rem | 400 | 1.6 | 0 | Article body, descriptions, general content |
| body-medium | Copyright Klim Type Foundry-Buch | 1.125rem | 400 | 1.5 | 0 | Hero descriptions, lead paragraphs, emphasized body |
| label | Copyright Klim Type Foundry-Buch | 0.75rem | 400 | 1.4 | 0.02em | Metadata, dates, categories, captions |
| navigation | Copyright Klim Type Foundry-Buch | 0.875rem | 400 | 1 | 0 | Site navigation, menu items, utility links |
| logo | Humanprogress | 1.25rem | 400 | 1 | 0 | Brand mark in header |

Söhne-Halbfett, designed by Kris Sowersby and provided by Klim Type Foundry, supplies the system's authoritative voice through its semibold weight and tight negative tracking. The Halbfett weight is used exclusively for display sizes above 1.5rem, creating clear hierarchy against the lighter book weight of body text. Copyright Klim Type Foundry-Buch handles all reading-intensive content with its open apertures and generous proportions. The Humanprogress font functions as a logotype only, rendering the distinctive brand mark with its integrated arrow motif. Verify licensing for these families before production use.

## Layout

The layout system follows a centered container model with responsive padding. The maximum content width is approximately 80rem (1280px), with internal grids using consistent gap spacing.

Page structure begins with a fixed-height site header at 4rem, containing the logo left-aligned and navigation links distributed across the center-right. The header sits on a white background with a single-pixel bottom border, creating subtle separation without visual weight.

Hero sections break the container, filling the viewport width with the deep navy background. Content within the hero is asymmetrically composed: text blocks occupy the left 40-50% of the space, while editorial imagery or data visualizations fill the right portion. This left-weighted composition creates a natural reading flow while allowing dramatic visual content to breathe.

Content sections below the hero return to the contained width. The Trends section demonstrates a three-column grid with equal-width cards, each containing a data visualization at roughly 16:10 aspect ratio, followed by a title and brief description. Grid gaps are 2rem, with cards receiving 1.5rem internal padding.

Article grids, as seen in the Heroes of Progress section, use a denser four-column layout for thumbnail cards. Each card stacks an image (with optional video play indicator), category label, title, author, and date. The vertical rhythm is tight: 0.5rem between label and title, 0.75rem between title and metadata.

Filter controls appear as paired dropdown menus above grids, each with a text label and chevron indicator. These sit on the white canvas with standard border styling, maintaining the system's restrained interactive vocabulary.

## Visual language

The visual character of Human Progress is defined by the tension between rigorous data presentation and warm human storytelling. This manifests in several consistent patterns:

**Imagery treatment**: Editorial portraits use a distinctive engraved or halftone illustration style, evoking historical printmaking and lending gravitas to biographical content. These monochrome illustrations sit against white backgrounds in card layouts, while color photography appears in hero contexts with warm, saturated tones.

**Data visualization**: Charts and graphs are presented with minimal framing—light gray backgrounds, thin axis lines, and color-coded data series. The visualizations prioritize clarity over decoration, with ample white space around each chart and descriptive titles below rather than overlaid.

**Iconography**: The system uses a minimal set of functional icons: search (magnifying glass), navigation arrows (chevrons in circles), and video play indicators (solid circles with triangular play symbols). These are rendered in the action blue or white depending on context, with no decorative iconography.

**Interactive states**: Links and buttons rely on color change rather than background fill. The primary button style is an outlined rectangle with transparent fill and white or dark border, creating a lightweight interactive element that doesn't compete with content. Hover states are implied through standard cursor behavior rather than dramatic visual transformation.

**Decorative restraint**: The system avoids gradients, shadows, and dimensional effects. Cards are defined by single-pixel borders and subtle background shifts rather than elevation. The only exception is the hero section's navy field, which provides necessary contrast for featured content.

## Components

### Site Header

- **Anatomy**: Logo mark left, navigation links center-right, search icon far right
- **Surface**: White background (`{colors.canvas}`), 1px bottom border in `{colors.border}`
- **Typography**: Navigation links use `{typography.navigation}` in `{colors.ink}`
- **Height**: Fixed at 4rem with vertically centered content
- **Composition**: Flexbox row with space-between alignment; navigation links distributed with even spacing
- **States**: Active/current page indicated by `{colors.action}`; hover states implied

### Hero Section

- **Anatomy**: Eyebrow label, display heading, description paragraph, primary button; optional media panel right
- **Surface**: Full-bleed `{colors.hero-canvas}` background
- **Typography**: Heading uses `{typography.hero-display}` in `{colors.hero-ink}`; body uses `{typography.body-medium}` in `{colors.hero-ink}`
- **Spacing**: Generous padding (`{spacing.section}`) creating breathable composition
- **Button**: Outlined style with `{colors.hero-ink}` border, transparent fill, `{typography.navigation}` text
- **Media**: Editorial imagery or data visualization occupies 40-50% width, vertically centered

### Content Card (Article/Video)

- **Anatomy**: Media thumbnail, category label, title, author and date metadata
- **Surface**: White background, no border (grid context) or 1px `{colors.border}` (isolated)
- **Media**: 4:3 or 16:10 aspect ratio image; video items show blue circular play indicator
- **Typography**: Category uses `{typography.metadata-label}` in `{colors.action}`; title uses `{typography.article-title}` in `{colors.ink}`; metadata uses `{typography.article-meta}`
- **Spacing**: 0.5rem between label and title; 0.75rem between title and metadata; 1rem between media and text

### Data Card (Trends)

- **Anatomy**: Chart visualization, title, description paragraph
- **Surface**: `{colors.surface}` background with `{rounded.panel}` corners
- **Chart**: Embedded data visualization with white background, minimal axis styling
- **Typography**: Title uses `{typography.section-display}`; description uses `{typography.body}`
- **Spacing**: 1.5rem padding; chart area maintains 16:10 ratio; 1rem between chart and title

### Filter Dropdown

- **Anatomy**: Label text, selected value, chevron indicator
- **Surface**: White background, 1px `{colors.border}`, `{rounded.button}` corners
- **Typography**: `{typography.body}` in `{colors.ink}`
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding
- **Composition**: Paired horizontally with adjacent filter, separated by 1.5rem gap

### Navigation Arrows

- **Anatomy**: Circular button containing directional chevron
- **Surface**: White background, 1px `{colors.border}`, 50% border radius
- **Icon**: Chevron in `{colors.ink}` or `{colors.action}`
- **Size**: 2.5rem diameter
- **Composition**: Paired horizontally with 0.75rem gap, typically right-aligned to section heading

## Responsive behavior

The design system should adapt gracefully across viewport sizes, though specific breakpoints are not documented in the source material. Based on visible layouts, recommended behavior includes:

- **Header navigation**: Collapse to hamburger menu below approximately 60rem viewport width, preserving logo and search access
- **Hero sections**: Stack vertically on narrow viewports, with media moving below text content; reduce display size to `{typography.section-display}` scale
- **Trends grid**: Transition from three columns to single column below 48rem, maintaining card proportions
- **Article grids**: Reduce from four columns to two columns at approximately 48rem, then single column below 30rem
- **Typography scale**: Reduce hero display by 25% on viewports below 40rem; maintain body and label sizes for readability

Touch targets should maintain minimum 44px height for all interactive elements. Chart visualizations should reflow to available width while preserving aspect ratio.

## Practical implementation guidance

### Preserve
- The stark contrast between navy hero sections and white content areas—this two-mode system is central to the brand identity
- The engraved illustration style for portrait content; this distinctive visual treatment separates Human Progress from generic editorial sites
- The minimal button style with transparent fills and single borders; avoid solid fill buttons except in high-contrast hero contexts
- The restrained use of action blue, keeping it for labels, links, and indicators rather than backgrounds or large fills
- The generous whitespace around data visualizations; charts need breathing room to communicate effectively

### Avoid
- Heavy drop shadows or dimensional card effects; the system relies on flat planes and border definition
- Gradient backgrounds anywhere in the interface; the palette is strictly solid colors
- Solid fill primary buttons on light backgrounds; the outlined style is the system's signature interactive element
- Decorative patterns or textures behind content; the white canvas is intentionally plain
- Rounded corners larger than 0.5rem; the system maintains a crisp, editorial angularity

### Recommended Build Order
1. Establish the type system with all three font families and the semantic size scale
2. Implement the two-mode color system (light canvas and navy hero) with CSS custom properties
3. Build the site header with navigation and search
4. Create the hero section component with asymmetric text/media layout
5. Develop the data card for Trends content with chart embedding capability
6. Build the article card for grid layouts with media, labels, and metadata
7. Add filter controls and pagination/navigation arrows
8. Implement responsive behavior with column collapsing and type scaling

### Accessibility
- Ensure all text on navy backgrounds meets WCAG AA contrast ratios (white on #0A1A4D exceeds requirements)
- Provide visible focus indicators for all interactive elements; the minimal button style needs clear focus states
- Chart visualizations require alternative text descriptions and data tables for screen reader users
- Filter dropdowns should use proper ARIA labeling and keyboard navigation
- The engraved portrait style may reduce facial recognition for some users; ensure names and descriptions provide full context
- Maintain logical heading hierarchy: single h1 per page, followed by h2 for sections, h3 for card titles

## Scope note

This guide covers the visible desktop surfaces of the Human Progress homepage, Trends section, and Heroes of Progress project pages. Mobile layouts, hover and focus states, loading behavior, chart interaction patterns, and the complete article template are not represented in the supplied images. Measurements are practical adaptation targets derived from visual estimation against a 4px relative unit. The full data visualization color palette and animation specifications would require additional research beyond the current scope.
