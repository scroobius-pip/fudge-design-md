# How firecrawl.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/firecrawl.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Hero CTA section with orange dot-matrix illustrations and primary action buttons on light canvas](https://pin.fontofweb.com/7576?format=jpg)](https://design.withfudge.com/share/pin-7576)

[Hero CTA section with orange dot-matrix illustrations and primary action buttons on light canvas](https://design.withfudge.com/share/pin-7576)

[![Footer with product links, social proof badges, and orange ASCII art landscape](https://pin.fontofweb.com/7575?format=jpg)](https://design.withfudge.com/share/pin-7575)

[Footer with product links, social proof badges, and orange ASCII art landscape](https://design.withfudge.com/share/pin-7575)

[![FAQ accordion with orange-accented headings and categorized question groups](https://pin.fontofweb.com/7574?format=jpg)](https://design.withfudge.com/share/pin-7574)

[FAQ accordion with orange-accented headings and categorized question groups](https://design.withfudge.com/share/pin-7574)

[![Pricing page with orange numerals, tier cards, and code parameter callouts](https://pin.fontofweb.com/7573?format=jpg)](https://design.withfudge.com/share/pin-7573)

[Pricing page with orange numerals, tier cards, and code parameter callouts](https://design.withfudge.com/share/pin-7573)

## Overview

Firecrawl presents a developer-focused web data platform built on a stark black canvas with energetic orange accents. The visual system prioritizes technical credibility through Swiss typographic discipline while maintaining approachable warmth through its signature flame-orange action color. The interface alternates between immersive dark sections and carefully structured content areas, creating rhythm through generous whitespace and precise grid alignment. Every element serves the core narrative: transforming chaotic web data into structured, actionable intelligence. The design language speaks directly to engineers and technical founders—clean, confident, and unafraid of density when complexity demands it.

## Colors

The palette operates on a high-contrast dark mode foundation with a single vibrant accent. Black dominates every surface, creating infinite depth and making the orange action color feel electric against the void.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, all section containers, card backgrounds |
| surface | #000000 | Elevated panels, modal backgrounds |
| ink | #FFFFFF | Primary text, headings, active navigation |
| ink-muted | #999999 | Secondary text, descriptions, inactive states, card borders |
| ink-subtle | #C2C2C2 | Tertiary labels, metadata, footer links |

The orange accent appears strategically in the flame logo mark, primary call-to-action buttons, highlighted words within headings, and numerical pricing displays. This concentrated use prevents visual fatigue while establishing brand recognition. The grayscale text hierarchy—white for primary content, medium gray for supporting copy, light gray for metadata—creates clear information architecture without competing with the accent. Photographic and illustrative content uses the same orange in dot-matrix and ASCII art treatments, unifying brand imagery with interface elements.

The exact interface colors extracted from the source are black (#000000), medium gray (#999999), light gray (#C2C2C2), and white (#FFFFFF). The orange accent values visible in images and gradients are derived from the image palette and gradient stops rather than direct interface color declarations.

## Typography

Two families serve distinct roles: Suisse Intl carries all interface and marketing copy with Swiss precision, while Geist Mono handles code, parameters, and technical annotations with engineered clarity.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Suisse Intl | 3.75rem | 500 | 1.07 | -0.005em | Homepage hero headlines |
| section-display | Suisse Intl | 3.25rem | 500 | 1.08 | -0.01em | Section headings, FAQ titles |
| feature-heading | Suisse Intl | 2rem | 500 | 1.13 | -0.005em | Feature card titles, pricing tiers |
| body | Suisse Intl | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions, navigation |
| body-small | Suisse Intl | 0.875rem | 400 | 1.43 | 0.01em | Secondary descriptions, footer links |
| label | Suisse Intl | 0.75rem | 450 | 1.67 | 0em | Buttons, tags, category labels |
| code | Geist Mono | 0.75rem | 400 | 1.33 | 0em | Inline parameters, API references |
| code-small | Geist Mono | 0.6875rem | 400 | 1.45 | 0em | Dense code blocks, terminal output |

Suisse Intl appears in Regular (400), Book (450), and Medium (500) weights. The Book weight serves button labels and subtle emphasis, while Medium anchors all display hierarchy. Geist Mono appears in Regular (400) and occasionally Medium (500) for emphasized code tokens. The type scale uses a 2px relative unit, with sizes snapping to clean multiples: 12px, 13px, 14px, 16px, 20px, 24px, 32px, 40px, 52px, 60px, and 64px.

Verify licensing for these families before production use. Suisse Intl is designed and distributed by Swiss Typefaces. Geist Mono is designed by Basement Studio and distributed through Vercel.

## Layout

The layout system centers content within generous horizontal margins, typically 304px on each side at maximum width, creating a focused reading column that floats within the black canvas. Sections stack vertically with substantial breathing room—88px to 143px vertical padding creates clear territorial boundaries between content types.

The grid alternates between full-bleed immersive sections and contained content areas. Hero sections push content deep into the viewport with 254px top padding, establishing dramatic entry points. Feature grids use asymmetric layouts: two-column splits for FAQ categories, three-column tiers for pricing cards, and multi-column footer matrices for navigation density.

Spacing follows a 2px base unit, expressed in rem at 0.125rem per step. Common increments include 8px for tight internal padding, 16px for component gutters, 24px for card padding, 32px for section internal spacing, 40px for card padding, 56px for hero content blocks, and 88px for major section breaks. Negative margins of -1px appear at component boundaries to collapse adjacent borders, creating seamless grid lines between cards.

Border radius scales from 4px for subtle rounding through 8px for buttons, 10px for small cards, 12px for feature cards, and 9999px for pill-shaped tags and badges. The 16px radius appears on larger interactive containers.

## Visual language

The visual identity merges technical precision with organic energy. The flame-orange dot-matrix illustrations—abstract landscapes built from thousands of tiny orange dots—serve as the signature graphic motif. These appear in hero sections, footer art, and decorative backgrounds, creating brand recognition through algorithmic texture rather than literal imagery.

Interface elements favor restraint: no drop shadows on cards, no gradients on surfaces, no glassmorphism. Elevation is communicated through border definition alone—1px solid lines in subtle gray create card boundaries against the black canvas. The single exception is a careful gradient on certain buttons: a linear fade from white to transparent that suggests luminous depth without breaking the flat design language.

Iconography uses simple geometric marks: chevrons for accordion states, arrows for external links, minimal glyphs for social platforms. The code-influenced aesthetic extends to parameter callouts—`maxCredits` and endpoint paths appear in Geist Mono within subtle rounded rectangles, reinforcing the API-first product positioning.

Interactive states are understated: text shifts slightly brighter on hover, buttons maintain solid fills without complex transitions. The confidence of the system comes from its stillness—elements hold their ground rather than competing for attention.

## Components

### Primary Button
- **Anatomy**: Solid fill with white label text, optional icon prefix
- **Surface**: Black background with white text, or gradient-enhanced treatment
- **Typography**: `{typography.label}` at 14px Book weight
- **Shape**: 10px border radius, 8px 12px padding
- **Spacing**: Often paired with secondary button at 16px horizontal gap
- **Variants**: Default fill with gradient overlay for depth on featured CTAs

### Secondary Button
- **Anatomy**: Transparent background with subtle border, dark text
- **Surface**: Transparent fill, 1px border in muted gray
- **Typography**: `{typography.label}` matching primary button
- **Shape**: 10px border radius, equivalent padding to primary
- **Composition**: Positioned adjacent to primary with consistent height

### Feature Card
- **Anatomy**: Bordered container with internal padding, optional header badge
- **Surface**: Black background, 1px border in medium gray
- **Typography**: Feature heading in Medium 24px, description in body 16px
- **Shape**: 12px border radius, 28px to 40px internal padding
- **Spacing**: 16px to 24px between cards in grid layouts
- **Variants**: Pricing cards include orange numerical highlights and "Most Accurate" pill badges

### FAQ Accordion
- **Anatomy**: Category sidebar with expandable question groups
- **Surface**: Black background, 1px horizontal dividers
- **Typography**: Category labels in 24px Medium, questions in 16px Regular, answers in 16px Regular with muted color
- **Shape**: Full-width rows with 20px horizontal padding
- **Composition**: Two-column layout with sticky category navigation
- **States**: Collapsed shows chevron-down; expanded reveals answer with chevron-up

### Code Parameter Callout
- **Anatomy**: Inline code snippet within rounded container
- **Surface**: Black background with subtle border treatment
- **Typography**: `{typography.code}` in Geist Mono Regular
- **Shape**: 6px to 8px border radius, 4px 8px internal padding
- **Composition**: Embedded within descriptive text or feature descriptions

### Navigation Bar
- **Anatomy**: Logo mark with flame icon, text links, action buttons
- **Surface**: Transparent or black background
- **Typography**: Links in 14px Regular with 0.14px letter spacing
- **Shape**: 8px border radius on interactive elements
- **Composition**: Horizontal flex with 16px gaps between links

### Footer
- **Anatomy**: Multi-column link matrix with brand art and social proof
- **Surface**: Black background, 1px top border
- **Typography**: Column headers in 16px Medium, links in 14px Regular muted
- **Shape**: Full-width with contained content
- **Composition**: Four-column product grid, social links with platform icons, Y Combinator and SOC 2 badges

## Responsive behavior

The design maintains its dark character across viewport sizes, with primary adaptation occurring in content width and column count. The 304px side margins collapse on narrower screens, allowing content to breathe while preserving the centered column aesthetic. Multi-column grids—pricing tiers, footer links, feature cards—stack to single columns on mobile with maintained internal spacing.

Typography scales down modestly: hero display may reduce from 60px to 40px, section display from 52px to 32px. The dot-matrix illustrations remain visible but may crop or scale to fit narrower containers. Accordion layouts transition from two-column to single-column, with category labels becoming horizontal scroll or dropdown selectors.

Touch targets maintain minimum 44px height for buttons and navigation items. Code blocks and parameter callouts gain horizontal scroll rather than text wrapping to preserve readability.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the dominant surface—any lightening breaks the brand
- Orange accent concentration in buttons, highlighted heading words, and numerical data
- Swiss typographic hierarchy: Medium for display, Regular for body, Book for subtle emphasis
- Geist Mono exclusivity for all code and technical parameters
- Generous vertical section spacing—crowding destroys the premium technical feel
- Dot-matrix illustration style for brand imagery

### Avoid
- Adding shadows or gradients to cards and surfaces—the flat border system is intentional
- Using orange for large background fills or text blocks—reserve for accents only
- Mixing additional font families beyond Suisse Intl and Geist Mono
- Reducing contrast below WCAG AA for the muted gray text
- Adding decorative elements that compete with the dot-matrix art

### Recommended Build Order
1. Establish the black canvas and base typography scale
2. Implement the 304px-contained content column with responsive collapse
3. Build the button system with primary and bordered secondary variants
4. Create the card component with 1px border and consistent padding
5. Add the FAQ accordion with two-column layout
6. Integrate Geist Mono for all code and parameter displays
7. Implement dot-matrix illustrations as SVG or canvas elements
8. Polish with footer multi-column grid and social proof badges

### Accessibility
- Ensure action elements meet 3:1 contrast against black for UI components
- White text on black exceeds 7:1 for all primary content
- Provide visible focus indicators on all interactive elements
- Maintain keyboard navigation for accordion expand/collapse
- Code blocks should include copy functionality and avoid horizontal scroll when possible
- Respect `prefers-reduced-motion` for any dot-matrix animation

## Scope note

This guide covers the marketing site surfaces including homepage, agent product page, pricing, and onboarding flows. Dashboard interfaces, API documentation rendering, and authenticated application states are not represented in the supplied material. Motion behavior for the dot-matrix illustrations and exact hover transition timing were not captured. The orange accent color values are interpreted from image palettes and gradient stops rather than direct interface color declarations.
