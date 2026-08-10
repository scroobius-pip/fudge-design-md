# How superpower.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/superpower.com-design)

Last updated: 2026-08-10

## Captured pages

[![Manifesto page with large orange hero image of a silhouetted figure in motion against a rounded-corner card, followed by a white content area with a bold heading and body text in](https://pin.fontofweb.com/182?format=jpg)](https://design.withfudge.com/share/pin-182)

[Manifesto page with large orange hero image of a silhouetted figure in motion against a rounded-corner card, followed by a white content area with a bold heading and body text in](https://design.withfudge.com/share/pin-182)

[![Close-up of a health data visualization card showing a dark interface with a green status indicator, a line graph with circular markers, and date labels across the bottom.](https://pin.fontofweb.com/181?format=jpg)](https://design.withfudge.com/share/pin-181)

[Close-up of a health data visualization card showing a dark interface with a green status indicator, a line graph with circular markers, and date labels across the bottom.](https://design.withfudge.com/share/pin-181)

[![Dark-themed mission section with large white heading, supporting text, and a centered health dashboard card showing biomarker tracking with green accent indicators.](https://pin.fontofweb.com/180?format=jpg)](https://design.withfudge.com/share/pin-180)

[Dark-themed mission section with large white heading, supporting text, and a centered health dashboard card showing biomarker tracking with green accent indicators.](https://design.withfudge.com/share/pin-180)

[![Full-bleed hero image with a silhouetted profile against a vibrant orange gradient background, surrounded by a circular data visualization ring with colored accent bars.](https://pin.fontofweb.com/179?format=jpg)](https://design.withfudge.com/share/pin-179)

[Full-bleed hero image with a silhouetted profile against a vibrant orange gradient background, surrounded by a circular data visualization ring with colored accent bars.](https://design.withfudge.com/share/pin-179)

## Overview

Superpower presents a health intelligence platform that balances human vitality with clinical precision. The visual system operates in two distinct modes: a light, energetic presentation for editorial and mission content, and a dark, focused environment for data visualization and health dashboards. The brand's signature orange serves as an emotional anchor, appearing in full-bleed hero imagery and accent moments, while the interface relies on stark black-and-white contrast for readability and authority.

The design language favors generous rounded corners on media cards and data containers, creating a soft, approachable feel that counterbalances the technical subject matter. Typography is restrained and modern, using a single sans-serif family across all weights and sizes. Content hierarchy is established through scale contrast rather than weight variation, with large display headings giving way to measured body copy. The overall impression is of a premium medical service that feels personal and forward-looking rather than institutional.

## Colors

The palette is intentionally bifurcated: warm, energetic tones for brand expression and neutral, high-contrast tones for functional interface elements. The orange appears primarily in photography and hero imagery, while the green functions as a precise status indicator within data visualizations.

| token | value | use |
|---|---|---|
| canvas | #FFFFFF | Primary page background for light sections; text on dark surfaces |
| canvas-dark | #000000 | Primary page background for dark sections and data dashboards |
| ink | #000000 | Primary text on light backgrounds; solid UI elements |
| ink-light | #FFFFFF | Primary text on dark backgrounds; inverted UI elements |
| muted | #888888 | Secondary body text, captions, and de-emphasized labels |
| accent-orange | #F85A00 | Hero imagery backgrounds, brand moments, energetic accents |
| accent-green | #00D084 | Health status indicators, normal-range markers, positive data states |
| surface-dark | #1A1A1A | Data card backgrounds, dashboard containers |
| surface-mid | #333333 | Elevated surfaces within dark contexts, subtle borders |

The light mode dominates editorial and marketing pages, where white canvas space allows the orange photography to command attention. Dark mode governs the health data experience, where a near-black background reduces eye strain and makes the green status indicators and white data points pop with clinical clarity. The muted gray serves as a bridge between these modes, appearing in secondary text on both light and dark backgrounds. No gradients are used in the interface itself; the orange-to-dark gradient visible in some hero photography is a photographic treatment rather than a UI pattern.

## Typography

The system relies on a single type family, Nb International Pro, designed by Stefan Gandl and available through Neubau. This creates a cohesive, utilitarian voice that feels contemporary without being decorative. The type scale is built on a 4px relative unit, with sizes snapping to whole-number multiples.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Nb International Pro | 4rem | 400 | 1 | -0.02em | Page titles, major section headings |
| section-display | Nb International Pro | 2.5rem | 400 | 1.1 | -0.01em | Subsection headings, feature titles |
| body-large | Nb International Pro | 1.25rem | 400 | 1.4 | 0em | Lead paragraphs, introductory copy |
| body | Nb International Pro | 1rem | 400 | 1.5 | 0em | Standard paragraphs, descriptions |
| label | Nb International Pro | 0.75rem | 400 | 1.2 | 0.02em | Data labels, timestamps, small metadata |
| navigation | Nb International Pro | 0.875rem | 400 | 1 | 0.01em | Menu items, breadcrumbs |

The design uses Regular weight exclusively; no Medium, Semibold, or Bold weights appear in the visible interface. Hierarchy is achieved through size contrast and generous line spacing rather than weight variation. Display headings are tightly tracked for a compact, confident presence, while body text uses neutral tracking for extended reading. Labels and navigation items receive slightly positive tracking for optical clarity at small sizes.

Verify licensing for Nb International Pro through Neubau before production use.

## Layout

The layout system is centered and contained, with generous vertical breathing room between sections. Content typically occupies a narrow-to-medium reading width, creating an intimate, editorial pacing that encourages focused reading.

The page structure alternates between full-bleed visual moments and contained text blocks. Hero imagery often extends to the edges of the viewport, while supporting content sits within a centered column. This rhythm creates visual variety without complex grid systems.

Spacing follows a 4px base unit. Section breaks are substantial, typically 6rem or more, allowing each content block to feel distinct. Within components, padding is moderate and consistent—cards use 1.5rem internal padding, while text blocks maintain comfortable line lengths through width constraints rather than excessive gutters.

The data visualization components follow a different logic: they are centered within their containers, with internal spacing determined by the density of information rather than external margins. The health tracking card, for example, fills a substantial portion of the viewport width on desktop, with its internal grid of dates and values evenly distributed.

Responsive behavior should maintain this centered, spacious character. On narrower viewports, the content column narrows proportionally, and card padding reduces slightly. The rounded corners on cards remain consistent across breakpoints, preserving the approachable personality.

## Visual language

The visual identity is built on the tension between human energy and technological precision. Photography favors silhouettes and high-contrast figures against saturated color fields, particularly the signature orange. These images are contained within heavily rounded rectangles, softening their impact and integrating them with the UI.

Data visualization employs a restrained, clinical aesthetic. Line graphs use thin strokes with circular markers; status indicators are small, solid dots. The green accent is reserved exclusively for positive or normal states, making it instantly meaningful when it appears. Date labels and numerical values are set in the same type family as editorial content, maintaining typographic continuity across functional and expressive contexts.

The circular data ring visible in some hero imagery suggests a broader visual motif—radial organization, progress tracking, completeness—that could extend to loading states, progress indicators, or decorative elements. This motif connects the human-centered photography to the technical data experience.

Shadows are minimal or absent; depth is suggested through color contrast and layering rather than elevation effects. Borders are rare, with separation achieved through background color changes and generous whitespace.

## Components

### Hero Image Card

A large, rounded media container that dominates the upper portion of a section.

- **Anatomy**: Full-width container with rounded corners, containing a photographic image. No text overlay; the image communicates the message independently.
- **Surface**: The card itself has no visible border or shadow. The background is provided by the image content, typically the orange brand color with silhouetted figures.
- **Shape**: `border-radius: 1.5rem` on all corners. The card occupies most of the viewport width with modest side margins.
- **Spacing**: Generous margin below the card before the next content section begins.

### Data Visualization Card

A dark, contained interface for displaying health metrics over time.

- **Anatomy**: Rounded rectangle containing a line graph with circular markers, a floating status tooltip, and date labels along the horizontal axis.
- **Surface**: Background is near-black (`#1A1A1A`). The graph line is thin and light-colored. Status tooltip has a light background with dark text.
- **Typography**: Date labels use the label token; values in the tooltip use body size. All text is Regular weight.
- **Shape**: `border-radius: 1.5rem`. Internal padding keeps content clear of edges.
- **Composition**: The graph spans the full width of the card interior. Date labels are evenly distributed along the bottom. The status tooltip floats above the active data point, connected by a subtle line or proximity.
- **States**: An active data point shows a filled circle with a ring; inactive points show hollow circles. The status indicator dot in the tooltip uses the green accent for normal readings.

### Section Heading Block

A text-only content unit for editorial passages.

- **Anatomy**: Large display heading followed by one or more paragraphs of body text.
- **Typography**: Heading uses hero-display or section-display token. Body uses body or body-large token. Text color is black on light backgrounds, white on dark.
- **Spacing**: Substantial margin below the heading before body text begins. Paragraphs have comfortable line spacing within and between them.
- **Composition**: Text is left-aligned within a centered column. Line lengths are constrained for readability.

### Status Indicator

A small, immediate signal of health state.

- **Anatomy**: Solid circular dot, sometimes accompanied by a text label.
- **Surface**: Filled with accent-green for normal/positive states. No border or shadow.
- **Shape**: Perfect circle, approximately 0.5rem in diameter.
- **Usage**: Appears in data tooltips, list items, and potentially navigation to indicate live or healthy status.

## Responsive behavior

The design should maintain its centered, spacious character across viewport sizes. On desktop, the content column remains moderate in width, preventing overly long line lengths. Hero image cards may extend closer to full viewport width, with side margins reducing on larger screens.

On tablet and mobile, the content column narrows proportionally. Hero cards may transition to full-bleed, eliminating side margins to maximize impact on smaller screens. Data visualization cards should remain readable, with internal padding reducing slightly and date labels potentially abbreviating or rotating.

Touch targets for any interactive elements should meet minimum size requirements. The rounded card corners and pill-shaped buttons support this by providing adequate surface area.

Typography scales down modestly on smaller viewports. The hero-display size may reduce to section-display proportions, while body text remains at 1rem for legibility. Navigation, if present in a horizontal form, should collapse to a vertical menu or hamburger pattern.

## Practical implementation guidance

### Preserve
- The stark black-and-white contrast for all functional text and interface elements
- The single type family approach; do not introduce secondary fonts for hierarchy
- The generous rounded corners on all cards and media containers
- The reserved use of green exclusively for positive status indicators
- The spacious vertical rhythm between sections

### Avoid
- Adding weight variations to the type system; hierarchy must come from size and spacing
- Using the orange as a UI element color; it belongs to photography and brand expression
- Introducing shadows or borders where background color contrast suffices
- Crowding data visualizations with excessive grid lines or decorative elements
- Using gradients in interface elements

### Recommended Build Order
1. Establish the 4px spacing unit and type scale with Nb International Pro
2. Implement the light/dark background system with proper contrast ratios
3. Build the hero image card component with consistent rounding
4. Create the data visualization card with dark surface and green accent
5. Add the status indicator and tooltip patterns
6. Refine responsive behavior for content column width and card padding

### Accessibility
- Ensure all text on the orange photography meets contrast requirements; consider dark overlays or text placement in lower-contrast regions of images
- The dark data card mode should maintain at least 4.5:1 contrast for body text and 3:1 for large text
- Green status indicators should not be the sole means of conveying information; pair with text labels
- Interactive elements within data cards need visible focus states, likely a light outline or ring
- Respect user preferences for reduced motion, particularly for any data visualization animations

## Scope note

This guide covers the landing page, manifesto, and health dashboard surfaces visible in the supplied images. Member stories, biomarker detail pages, and navigation patterns are not represented. Motion behavior, form interactions, and mobile-specific layouts are not documented. Measurements are practical adaptation targets derived from the visible interface.
