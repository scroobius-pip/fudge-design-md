# How quantamagazine.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/quantamagazine.org-design)

Last updated: 2026-08-10

## Captured pages

[![Physics section landing page with article card grid, topic sidebar, and social follow links showing the editorial layout structure](https://pin.fontofweb.com/3919?format=jpg)](https://design.withfudge.com/share/pin-3919)

[Physics section landing page with article card grid, topic sidebar, and social follow links showing the editorial layout structure](https://design.withfudge.com/share/pin-3919)

[![Article page with bold Pangram headline, Merriweather italic deck, and large orange editorial illustration with stock ticker ribbons](https://pin.fontofweb.com/3918?format=jpg)](https://design.withfudge.com/share/pin-3918)

[Article page with bold Pangram headline, Merriweather italic deck, and large orange editorial illustration with stock ticker ribbons](https://design.withfudge.com/share/pin-3918)

[![Article header with uppercase category label, large serif headline, and italic deck text with comment and bookmark icons](https://pin.fontofweb.com/2011?format=jpg)](https://design.withfudge.com/share/pin-2011)

[Article header with uppercase category label, large serif headline, and italic deck text with comment and bookmark icons](https://design.withfudge.com/share/pin-2011)

## Overview

Quanta Magazine presents science journalism through a refined editorial system that balances intellectual authority with visual accessibility. The design centers on a stark black-and-white palette with warm accent moments, letting photography and illustration carry chromatic energy. Two type families create a deliberate tension: Pangram, a geometric sans-serif, handles navigation, labels, and display headlines with crisp modernity, while Merriweather 18 Pt, a warm transitional serif, carries body text and article headlines with scholarly gravitas. This pairing signals serious content without austerity, making complex topics feel approachable.

The layout follows asymmetric editorial conventions. Article pages center the reading experience with generous margins, while section landing pages use a two-column structure with a dominant content stream and a narrower sidebar for discovery tools. Visual hierarchy is established through scale contrast rather than color variation—large serif headlines anchor pages, small uppercase labels categorize content, and italic deck text provides narrative entry points. The system prioritizes readability for long-form content while maintaining enough visual rhythm to sustain engagement across multiple articles.

## Colors

The color system is intentionally restrained, using near-monochrome foundations with a single warm accent derived from editorial photography. This discipline ensures scientific imagery and illustrations remain the primary color experience.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, headlines, navigation, borders, and all interactive states |
| canvas | `#ffffff` | Page backgrounds, card surfaces, and input fields |
| muted-ink | `#666666` | Secondary text, category labels, bylines, timestamps, and captions |
| accent | `#f5a623` | Editorial illustration backgrounds, hover states, and visual emphasis moments |

The interface operates in a light mode exclusively across visible surfaces. Black text on white grounds provides maximum contrast for extended reading. The muted-ink tone softens hierarchical information without introducing a second dark value. The warm orange accent appears primarily in commissioned illustrations—such as the stock-ticker ribbon artwork—where it creates visual heat against the neutral interface. This accent should be used sparingly in UI elements; it functions best as a photographic or illustrative background rather than a functional color. No dark mode is present in the visible system.

## Typography

The typographic system relies on two families with distinct roles. Pangram, designed by Mathieu Desjardins and available from Pangram Pangram, provides the geometric sans-serif voice for wayfinding and display. Merriweather 18 Pt, a transitional serif with italic companion, carries the editorial reading experience. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pangram | 3rem | 700 | 1.1 | -0.01em | Section landing page titles and major display moments |
| section-display | Pangram | 2.5rem | 700 | 1.1 | -0.01em | Article headlines on detail pages |
| headline | Merriweather 18 Pt | 1.5rem | 400 | 1.3 | 0em | Article card titles and secondary headlines |
| deck | Merriweather 18 Pt-Italic | 1.125rem | 400 | 1.5 | 0em | Subheadlines and article summaries |
| body | Merriweather 18 Pt | 1rem | 400 | 1.7 | 0em | Article body text and descriptions |
| label | Pangram | 0.75rem | 500 | 1.2 | 0.08em | Uppercase category tags and metadata |
| navigation | Pangram | 0.875rem | 500 | 1.2 | 0.02em | Primary navigation and sidebar links |
| caption | Pangram | 0.75rem | 400 | 1.3 | 0.01em | Image credits and fine print |

Pangram appears in weights from Extra Light through Extra Bold; the visible system uses Regular, Medium, and Bold. Merriweather 18 Pt appears in Regular and Italic, with the italic serving a specific rhetorical function for deck text and pull quotes. The type scale builds from a 4px relative unit, with sizes at 12px, 14px, 16px, 18px, 24px, 40px, and 48px. Display sizes use tight negative tracking to maintain density, while body sizes use neutral tracking for readability. Uppercase labels employ wide tracking for visual separation from sentence-case content.

## Layout

The layout system follows editorial publishing conventions with two primary patterns. Article pages use a centered single-column structure with maximum content width around 680px, creating focused reading conditions. Section landing pages and the homepage employ a two-column asymmetric grid with approximately a 2:1 ratio between the main content stream and the sidebar.

The primary navigation sits at the top of every page as a horizontal bar containing the logo, section links, utility icons, and a hamburger menu. Below this, article pages present a category label, headline, deck text, and metadata before the main content. Section pages lead with a display headline and sublabel before the article grid.

Spacing follows a 4px base unit. Section padding uses 64px vertical rhythm. Content gaps between major elements use 32px. Component internal spacing uses 24px. The sidebar maintains consistent 32px separation from the main content stream. Article cards in grids stack with 32px vertical gaps and consistent internal structure: thumbnail image, category label, headline, byline with timestamp, and summary text.

Grid behavior should maintain the two-column structure on desktop, collapse to a single column on smaller viewports, and preserve readable line lengths through maximum width constraints. The navigation bar remains fixed or consistently present across page types.

## Visual language

The visual language communicates editorial credibility through restraint and precision. Photography and illustration are treated as hero elements, often spanning full content width with generous margins. The stock-ticker ribbon illustration demonstrates how commissioned artwork uses bold color fields—warm orange backgrounds with high-contrast graphic elements—while the surrounding interface remains neutral.

Iconography is minimal and functional. Small comment and bookmark icons appear in metadata lines, rendered as simple outlined shapes without fill. Social platform icons in the sidebar use circular containers with centered symbols, creating a consistent 40px touch target with visual rhythm through vertical stacking.

Borders appear as 1px hairlines in black or muted gray, separating navigation from content or defining sidebar boundaries. No rounded corners appear on cards, buttons, or panels; the system maintains sharp rectangular geometry throughout. Shadows are absent from the visible interface, relying on whitespace and scale contrast for depth.

Image captions and credits appear in small sans-serif text below illustrations, maintaining the typographic hierarchy without competing with body content. The overall impression is of a print magazine translated to digital—considered, spacious, and authoritative.

## Components

### Article card

Article cards form the primary discovery unit on section pages. Each card contains a thumbnail image, uppercase category label, serif headline, byline with author name and date, and a brief summary paragraph.

- **Anatomy**: Thumbnail image (left-aligned or full-width above), stacked text content below or beside
- **Surface**: White background with no border or shadow
- **Typography**: Category uses `{typography.label}` in muted ink; headline uses `{typography.headline}` in ink; byline uses `{typography.caption}` in muted ink; summary uses `{typography.body}` in muted ink
- **Shape**: Sharp corners, no radius
- **Spacing**: 24px internal padding, 32px gap between cards
- **Composition**: Image and text stack vertically on narrow cards; horizontal arrangements possible for featured placements

### Category label

Category labels function as content wayfinding, appearing above headlines in uppercase with wide tracking.

- **Anatomy**: Text only, sometimes with a short decorative underline
- **Surface**: Transparent or white background
- **Typography**: `{typography.label}` in `{colors.muted-ink}`
- **Shape**: No visible container
- **Spacing**: 8px below label before headline
- **Composition**: Left-aligned above associated content

### Primary navigation

The top navigation provides persistent access to major sections and utilities.

- **Anatomy**: Logo left, section links center, utility icons right
- **Surface**: White background with 1px bottom border in muted gray
- **Typography**: `{typography.navigation}` in `{colors.ink}`
- **Shape**: Full-width bar, sharp edges
- **Spacing**: 16px vertical padding, 24px horizontal margins
- **Composition**: Flex row with space-between logic; icons maintain 40px touch targets

### Social follow links

Sidebar component listing platform links with circular icon containers.

- **Anatomy**: Circular icon, platform name, dotted bottom border
- **Surface**: White background, transparent icon circle with 1px border
- **Typography**: `{typography.navigation}` in `{colors.ink}`
- **Shape**: 9999px radius for icon circles
- **Spacing**: 16px vertical between items, 12px icon-to-text gap
- **Composition**: Horizontal row with icon left, text right; full-width with dotted separator

### Topic sidebar

Discovery sidebar containing search, topic links, and popular content.

- **Anatomy**: Search input, "View All Topics" link, social follow section, "Most Read" list
- **Surface**: White background, left border as 1px hairline separator from main content
- **Typography**: Section headers use `{typography.headline}` at smaller scale; links use `{typography.navigation}`
- **Shape**: Sharp corners throughout
- **Spacing**: 32px padding from content edge, 24px between sections
- **Composition**: Vertical stack with consistent left alignment

## Responsive behavior

The visible system shows a desktop-optimized layout. Recommended responsive adaptations include: collapsing the two-column grid to a single column on viewports below 768px, reducing headline sizes by one step on narrow screens, and converting the navigation to a hamburger-only pattern with a full-screen overlay menu. Article body text should maintain minimum 16px size across all viewports for readability. Sidebar content should stack below main content on narrow screens rather than disappearing entirely. Touch targets for navigation and social links should maintain 44px minimum height. Image aspect ratios should be preserved across breakpoints, with thumbnails potentially shifting from horizontal to square formats.

## Practical implementation guidance

### Preserve
- The stark black-white contrast for all text and interface elements
- The two-family typographic pairing: Pangram for wayfinding and display, Merriweather for reading
- Uppercase category labels with wide tracking as a consistent wayfinding pattern
- Sharp rectangular geometry without rounded corners on cards and panels
- Generous whitespace around content, particularly in article margins
- Italic deck text as a narrative entry point below headlines

### Avoid
- Adding background colors to article cards or content panels
- Using the warm orange accent for functional UI elements like buttons or links
- Introducing shadows or dimensional effects
- Rounding corners on any editorial component
- Mixing Pangram into body text or Merriweather into navigation

### Recommended build order
1. Establish the 4px spacing unit and type scale with both families loaded
2. Build the primary navigation with logo, links, and utility icons
3. Create the article card component with image, label, headline, byline, and summary
4. Implement the two-column grid for section pages
5. Add the sidebar with search, topics, social links, and most-read list
6. Build the article page template with centered single-column layout
7. Style metadata lines with icons and separator characters

### Accessibility
- Maintain minimum 4.5:1 contrast ratio for all body text; the black-on-white pairing exceeds this
- Ensure 44px minimum touch targets for all interactive elements
- Provide visible focus indicators for keyboard navigation, using the accent color or underline
- Use semantic heading hierarchy with a single h1 per page
- Preserve italic styling for deck text but avoid italic for extended body content
- Add aria-labels to icon-only buttons in navigation and social links

## Scope note

This guide covers the article page and section landing page surfaces visible in the supplied images. Footer content, search results pages, newsletter signup flows, and any dark mode are not represented. Measurements are practical adaptation targets derived from the visible interface. Mobile breakpoints, animation, and form validation states are not covered and should be designed to match the established visual language.
