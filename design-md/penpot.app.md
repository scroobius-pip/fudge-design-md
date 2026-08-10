# How penpot.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/penpot.app-design)

Last updated: 2026-08-10

## Captured pages

[![Blog listing page showing article cards with thumbnail images, titles, excerpts, and author metadata in a two-column layout with sidebar.](https://pin.fontofweb.com/1909?format=jpg)](https://design.withfudge.com/share/pin-1909)

[Blog listing page showing article cards with thumbnail images, titles, excerpts, and author metadata in a two-column layout with sidebar.](https://design.withfudge.com/share/pin-1909)

[![Blog index hero with Penpot Blog title, featured article grid with large CSS questions card, and sidebar recommendations.](https://pin.fontofweb.com/1908?format=jpg)](https://design.withfudge.com/share/pin-1908)

[Blog index hero with Penpot Blog title, featured article grid with large CSS questions card, and sidebar recommendations.](https://design.withfudge.com/share/pin-1908)

[![Footer section with Penpot logo, multi-column link groups for Product, Company, Resources, Use Cases, and social icons.](https://pin.fontofweb.com/1906?format=jpg)](https://design.withfudge.com/share/pin-1906)

[Footer section with Penpot logo, multi-column link groups for Product, Company, Resources, Use Cases, and social icons.](https://design.withfudge.com/share/pin-1906)

[![Dark navy call-to-action banner with white headline and two buttons: mint green primary and white secondary.](https://pin.fontofweb.com/1905?format=jpg)](https://design.withfudge.com/share/pin-1905)

[Dark navy call-to-action banner with white headline and two buttons: mint green primary and white secondary.](https://design.withfudge.com/share/pin-1905)

## Overview

Penpot's website presents an open-source design tool through a visual language that balances technical credibility with approachable clarity. The system relies on a restrained palette anchored by a distinctive mint-green action color against deep navy and clean white surfaces. Typography uses a single family—Work Sans—at carefully graduated weights to create hierarchy without visual noise. The layout favors generous whitespace and clear grid structures, reflecting the tool's emphasis on design systems and collaborative workflows. Editorial content, particularly the blog, receives prominent visual treatment through large thumbnail images and card-based organization. The overall impression is of a professional tool that values transparency, community, and developer-designer convergence.

## Colors

The color system operates in three modes: a light default for content and editorial pages, a dark navy mode for impact sections and calls-to-action, and an accent layer for interactive emphasis.

| token | value | use |
|---|---|---|
| action | #1DBF73 | Primary buttons, links, active states, and key interactive elements |
| action-hover | #19A864 | Hover state for primary actions |
| canvas | #FFFFFF | Page backgrounds, card surfaces, secondary button fills |
| surface | #F5F5F5 | Subtle section backgrounds, tag fills, footer area |
| ink | #1A1A2E | Primary text, headings, dark section backgrounds |
| muted-ink | #6B7280 | Secondary text, captions, metadata, footer links |
| border | #E5E7EB | Dividers, card outlines, subtle separators |

The mint green action color appears most prominently in the "Sign up for free" button against the dark navy hero, creating high-contrast focal points. Dark navy (#1A1A2E) serves dual roles: as text color on light backgrounds and as immersive background for CTA banners. The near-white surface (#F5F5F5) provides subtle differentiation for blog sidebars and metadata areas without introducing visual weight. Border colors remain light and functional, supporting editorial density without competing for attention.

## Typography

Work Sans serves as the sole type family across all contexts, ranging from Regular (400) through Medium (500) and Semibold (600) to Bold (700). The scale emphasizes readability at body sizes while allowing dramatic weight contrast for headlines.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Work Sans | 3rem | 700 | 1.1 | -0.02em | Page heroes, major section headlines |
| section-display | Work Sans | 2rem | 600 | 1.2 | -0.01em | Article titles, feature headings |
| body | Work Sans | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, general content |
| body-small | Work Sans | 0.875rem | 400 | 1.5 | 0em | Article excerpts, card descriptions |
| label | Work Sans | 0.75rem | 600 | 1.4 | 0.05em | Tags, buttons, category labels, metadata |
| navigation | Work Sans | 0.875rem | 500 | 1.5 | 0em | Header links, footer navigation |

Headlines use tight negative tracking for a modern, compact appearance. Body text maintains generous line height for extended reading. Labels and metadata employ uppercase styling with positive tracking for scannability. Verify licensing for these families before production use.

## Layout

The layout system follows a content-first approach with clear hierarchical zones. The maximum content width centers around a comfortable reading measure, with blog content employing an asymmetric two-column ratio: approximately two-thirds for the main article stream and one-third for the sidebar.

Page structure progresses through distinct bands: a fixed or sticky header containing logo and primary navigation, a hero or title section with centered alignment, the main content grid, and a comprehensive multi-column footer. Vertical rhythm uses section spacing of 5rem between major content bands, with internal gaps of 1.5rem between related elements.

The blog index displays featured articles in a mixed grid: larger hero cards span full width or major portions, while standard article cards arrange in rows with thumbnail-to-text horizontal layouts. Sidebar content remains visually subordinate through smaller type scale and muted color treatment.

Grid alignment relies on consistent internal padding of 1.5rem within cards and containers. The footer organizes into four to five vertical link columns with clear category headers, maintaining alignment across the full page width.

## Visual language

The visual character communicates technical sophistication through restraint. Rounded corners appear consistently at 0.5rem for panels and cards, 0.375rem for buttons, and full pills for tags and category labels. Shadows remain minimal or absent, relying instead on whitespace and subtle border color to define boundaries.

Imagery plays a central role in editorial contexts. Blog thumbnails feature bold, colorful graphics with overlapping elements, gradients, and typographic treatments that preview article content. These images introduce saturated accent colors—purples, pinks, teals, oranges—that enliven the otherwise restrained interface palette without disrupting system coherence.

Iconography appears in simple line or filled styles: the Penpot logo mark as a geometric container, social platform icons in the footer, and functional icons in navigation. The mint green accent unifies interactive moments across otherwise monochrome structural elements.

## Components

### Primary Action Button
- **Anatomy**: Text label centered within a solid fill container
- **Surface**: Mint green background (#1DBF73) with white text
- **Typography**: Label token, uppercase, semibold weight
- **Shape**: Rounded corners at 0.375rem
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Often paired with a secondary button in dark sections

### Secondary Action Button
- **Anatomy**: Text label within a bordered container
- **Surface**: White background with dark text, subtle border
- **Typography**: Label token, matching primary button
- **Shape**: Rounded corners at 0.375rem
- **Spacing**: Identical padding to primary variant
- **Composition**: Appears adjacent to primary actions for alternative paths

### Article Card
- **Anatomy**: Thumbnail image, title, excerpt, author metadata, and optional category tag
- **Surface**: White background, no visible border or subtle border
- **Typography**: Section-display for title, body-small for excerpt, label for metadata
- **Shape**: 0.5rem border radius on container
- **Spacing**: 1.5rem internal padding, thumbnail above text with consistent gap
- **Composition**: Horizontal layout with left thumbnail and right content; featured variants use vertical stack with larger thumbnail

### Category Tag
- **Anatomy**: Text label within a pill-shaped container
- **Surface**: Light gray background (#F5F5F5) with muted text
- **Typography**: Label token, uppercase, semibold
- **Shape**: Full pill (9999px border radius)
- **Spacing**: Compact padding, 0.25rem vertical, 0.75rem horizontal
- **Composition**: Positioned above or beside article titles

### Footer Navigation
- **Anatomy**: Logo with tagline, multiple link columns, social icon row, copyright bar
- **Surface**: Light background, minimal visual separation from content
- **Typography**: Navigation token for column headers, body-small for links
- **Spacing**: Generous vertical padding, consistent column gaps
- **Composition**: Four to five columns with category groupings, social icons aligned horizontally at bottom

## Responsive behavior

The two-column blog layout should collapse to a single column on narrower viewports, with the sidebar repositioning below the main content stream. Article cards transition from horizontal thumbnail-text arrangements to vertical stacks as available width decreases.

The navigation header likely compresses into a hamburger menu on mobile, though this behavior is not visible in the supplied images. Footer columns should stack vertically on small screens to maintain tap target sizes and readability.

Typography scales down proportionally: hero-display should reduce to approximately 2rem on mobile, section-display to 1.5rem. Maintain minimum 1rem body text for accessibility. Button widths should expand to full container width on mobile when stacked.

## Practical implementation guidance

### Preserve
- The single-family typography system with weight-based hierarchy
- Mint green as the sole accent color against neutral grounds
- Generous whitespace between content sections
- Card-based editorial organization with prominent thumbnails
- The dark navy CTA band as a dramatic conversion moment

### Avoid
- Introducing additional accent colors that compete with the mint green
- Heavy shadows or dimensional effects that contradict the flat aesthetic
- Tight line heights in body text that impair readability
- Generic placeholder imagery in blog thumbnails
- Excessive border weight that adds visual noise

### Recommended Build Order
1. Establish the color tokens and typography scale in CSS custom properties
2. Build the header with logo, navigation, and primary CTA button
3. Create the article card component with flexible thumbnail sizing
4. Implement the two-column blog grid with sidebar
5. Add the dark CTA banner with dual-button composition
6. Construct the multi-column footer with link groups and social icons

### Accessibility
- Ensure mint green buttons on dark backgrounds meet WCAG AA contrast ratios
- Provide visible focus states for all interactive elements
- Maintain semantic heading hierarchy across article listings
- Add descriptive alt text to all blog thumbnail images
- Support keyboard navigation through the footer link columns

## Scope note

This guide covers the public marketing and blog surfaces of penpot.app. Measurements are practical adaptation targets. Interactive states, motion design, mobile breakpoints, and the in-application design tool interface are not represented in the supplied images. Verify licensing for Work Sans before production use.
