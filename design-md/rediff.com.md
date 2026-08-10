# How rediff.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/rediff.com-design)

Last updated: 2026-08-10

## Captured pages

[![Video news grid with play-button overlays, category navigation bar, and Rediff logo header with service links](https://pin.fontofweb.com/8993?format=jpg)](https://design.withfudge.com/share/pin-8993)

[Video news grid with play-button overlays, category navigation bar, and Rediff logo header with service links](https://design.withfudge.com/share/pin-8993)

[![Live news ticker with timestamped headlines, editorial sidebar, and social follow section with YouTube embed](https://pin.fontofweb.com/8992?format=jpg)](https://design.withfudge.com/share/pin-8992)

[Live news ticker with timestamped headlines, editorial sidebar, and social follow section with YouTube embed](https://design.withfudge.com/share/pin-8992)

## Overview

Rediff.com presents a high-density news portal designed for rapid scanning and maximum information throughput. The visual system prioritizes content hierarchy through stark tonal contrast rather than decorative elements. A near-white canvas hosts dark charcoal typography, with disciplined accent use reserved for the brand mark, live indicators, and "New" service badges. The architecture organizes content into modular grids of video cards, timestamped news tickers, and editorial sidebars. Every surface serves the editorial mission: navigation is exposed rather than collapsed, timestamps are explicit, and imagery carries play-button overlays to signal multimedia content immediately. The overall impression is of a working newsroom—functional, urgent, and unadorned.

## Colors

The palette is intentionally restrained, built on a near-monochrome foundation with selective accent deployment.

| token | value | use |
|---|---|---|
| ink | #202020 | Primary body text, headlines, card titles |
| ink-primary | #101010 | Maximum emphasis text, active navigation states, live badge backgrounds |
| ink-secondary | #585858 | Subheadings, secondary metadata |
| muted-ink | #858585 | Timestamps, read durations, tertiary labels |
| canvas | #FFFFFF | Page background, card surfaces |
| surface | #E6EAEB | Ticker backgrounds, subtle section alternation |
| surface-warm | #E4E4E4 | Dividers, hairline separators |
| border | #ACACAC | Structural dividers between content zones |
| border-light | #E4E4E4 | Inner card borders, subtle containment |
| action | #4362DB | Text links, "See More" affordances, external references |
| action-hover | #575757 | Hover states for secondary actions |

The system operates in a single light mode. Dark values carry the information hierarchy; the brand mark and live indicators use high-contrast dark or blue tones rather than a separate accent color. Blue action links provide the sole cool counterpoint, reserved for navigation exits and expansion controls. Photography and video thumbnails introduce their own color temperature, which the neutral canvas allows to read without competition.

## Typography

The system employs two font families: Roboto for all editorial and interface text, and Arial for button elements. Roboto appears in Regular and Bold weights across a compact scale tuned for screen density.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Roboto | 1.125rem | 700 | 1.2 | normal | Section headers, major category titles |
| section-display | Roboto | 1.125rem | 400 | 1.5 | normal | Subsection headings, expanded titles |
| body | Roboto | 0.9375rem | 400 | 1.6 | normal | Card descriptions, primary article text |
| body-small | Roboto | 0.84375rem | 400 | 1.5 | normal | Secondary descriptions, metadata |
| caption | Roboto | 0.75rem | 400 | 1.5 | normal | Timestamps, read times, fine print |
| label | Roboto | 0.75rem | 700 | 1.333 | normal | Live badges, category pills |
| navigation | Roboto | 0.9375rem | 400 | 1.2 | normal | Top service links, category bar |
| button | Arial | 1.03125rem | 700 | 1.2 | normal | Form submit, primary actions |

Roboto is designed by Christian Robertson and distributed by Google. Arial carries no attributed designer or vendor in the available records. Verify licensing for these families before production use.

The type scale is tight: the largest display size is only 18px, reflecting the portal's commitment to information density over display drama. Line heights are conservative, with body text receiving slightly more breathing room (1.6) than headings (1.2–1.5). Bold weight is reserved for structural emphasis—section headers, live indicators, and active navigation—never for continuous reading.

## Layout

The page employs a full-width fluid container with internal gutters. Content organizes into horizontal bands: a utility header with service links, a category navigation bar, primary content grids, and secondary editorial columns.

The header band spans the full viewport width, containing the brand mark left-aligned and service links (Rediffmail, Money, Enterprise Email, Business Email, rediffGURUS, rediff-TV) distributed across the center-right. A "Sign in / Create Account" cluster occupies the far right. Below this, the category navigation presents as a secondary horizontal bar with uppercase section labels: HOME, REDIFF-TV, NEWS, BUSINESS, MOVIES, IPL 2026, SPORTS, GET AHEAD, AI-WEBSITE BUILDER. Social follow icons terminate this bar.

Primary content appears in multi-column grids. Video cards arrange in four-column formations on desktop, each card carrying a 16:9 thumbnail with a centered play-button overlay, a headline in body size, and timestamp metadata below. The grid gutters are narrow—approximately 1.25rem—maintaining visual connection between related stories.

Secondary zones include a live news ticker with horizontal scroll affordances, editorial sidebars with stacked headline lists, and promotional embeds. The ticker presents timestamped stories in a single row with small thumbnail images, time stamps above each entry, and navigation arrows for pagination.

Spacing tokens derive from a 2px base unit. Section breaks use 1.875rem vertical padding. Card internal padding is tight at 0.625rem. The overall density approaches newspaper layout conventions adapted for screen reading.

## Visual language

The visual character is utilitarian and urgent. Rounded corners are minimal—0.3125rem on cards, 0.1875rem on buttons—providing slight softening without decorative effect. Shadows appear rarely; a single instance of `rgba(0, 0, 0, 0.2) 0px 0px 10px 0px` suggests modal or elevated surfaces are possible but not dominant.

Imagery treatment is direct: photographs appear in their native aspect ratios with minimal processing. Video content is indicated by uniform play buttons—dark rounded squares with white triangle icons—centered on thumbnails. The "LIVE" badge is the most visually aggressive element: a dark rectangle with white text, positioned as an overlay on qualifying content.

The brand mark uses a custom logotype, with the "New" service indicator as a small superscript. This indicator appears in the same dark tone as the primary text, creating semantic mapping through typography rather than color shift.

Iconography is sparse and functional: social platform logos in their native brand colors, a hamburger menu for navigation collapse, and simple arrow controls for carousel navigation. No custom icon font is employed; interface chrome relies on text and basic geometric shapes.

## Components

### Video Card

- **Anatomy**: Thumbnail image (16:9), centered play-button overlay, headline text, duration badge, timestamp, relative time indicator.
- **Surface**: White background, no border or subtle 1px border-light on some variants.
- **Typography**: Headline uses body token (0.9375rem Regular). Duration and timestamp use caption token (0.75rem Regular) in muted-ink.
- **Shape**: 0.3125rem corner radius on the card container. Thumbnail may inherit this or appear flush.
- **Spacing**: Internal padding of 0.625rem. Thumbnail to text gap of 0.5rem. Grid gutter of 1.25rem.
- **Composition**: Stacked vertically within the card, arranged horizontally in grid rows.
- **Variants**: Some cards show larger thumbnails with headlines below; others compress to list view with thumbnail left and text right.

### Live News Ticker

- **Anatomy**: Horizontal scroll container, timestamp labels above each story, small square thumbnails, headline text, pagination controls ("Showing 1/3" with arrow buttons).
- **Surface**: Surface background (#E6EAEB) or canvas with border-top separator.
- **Typography**: Timestamps in caption size, headlines in body-small.
- **Shape**: Thumbnails at 0.3125rem radius. Pagination buttons as simple text arrows.
- **Spacing**: Vertical padding of 0.9375rem. Story gaps of 1.25rem. Thumbnail size approximately 80px square.
- **Composition**: Single-row horizontal arrangement with overflow indication.

### Category Navigation Bar

- **Anatomy**: Horizontal list of uppercase category labels, some with "New" superscript badges, social follow icons at right terminus.
- **Surface**: White background, 1px border-bottom in border-light.
- **Typography**: Navigation token (0.9375rem Regular), uppercase transformation. "New" badge in ink-primary at smaller size.
- **Shape**: Full-width bar, no radius.
- **Spacing**: Vertical padding of 0.625rem. Horizontal item spacing of 1.25rem to 1.875rem.
- **Composition**: Flex row with space-between distribution. Social icons cluster tightly at the right edge.

### Editorial Sidebar / Headline List

- **Anatomy**: Section header, stacked headline items with bullet or plain text, "See More >" expansion link.
- **Surface**: White or subtle surface background.
- **Typography**: Section header in hero-display. Headlines in body or body-small. "See More" in action color with right-arrow indicator.
- **Shape**: No radius on list items. Possible 1px separators between items.
- **Spacing**: Section header margin-bottom of 0.9375rem. List item vertical spacing of 0.625rem.
- **Composition**: Single column, full width of sidebar container.

### Service Button

- **Anatomy**: Text label, occasionally with icon.
- **Surface**: Background varies—white for header links, surface-warm for certain actions.
- **Typography**: Button token uses Arial 1.03125rem Bold.
- **Shape**: 0.1875rem radius when appearing as a contained button.
- **Spacing**: Padding of 1px 6px for compact buttons; larger for prominent actions.
- **Variants**: Header service links appear as plain text; form buttons appear as contained surfaces.

## Responsive behavior

The desktop layout presents full multi-column grids and exposed navigation. At narrower viewports, the system should collapse gracefully: the four-column video grid becomes two-column, then single-column stacked cards. The category navigation bar should scroll horizontally or collapse behind the hamburger menu, which is already present in the header. The live news ticker should maintain horizontal scroll or convert to a vertical stack with maintained timestamp ordering.

Typography scales down minimally—the base sizes are already compact. The 18px hero-display may reduce to 16px on small screens. Touch targets for play buttons and pagination controls should expand to minimum 44px. Social follow icons in the navigation bar should remain visible but may compress to icon-only at intermediate widths.

## Practical implementation guidance

### Preserve
- The stark contrast between ink and canvas—this is the system's readability foundation.
- The disciplined dark-tone accent approach: brand mark, live badges, and "New" indicators use ink-primary rather than a separate bright accent.
- The tight information density; white space is a luxury this design does not afford.
- The explicit timestamping and duration labeling on all content.
- The play-button overlay convention for video content.

### Avoid
- Generous padding or spacious margins that would break the grid density.
- Decorative shadows, gradients, or background textures.
- Multiple bright accent colors competing for attention.
- Custom icon fonts when native platform icons or simple SVGs suffice.
- Rounding corners beyond the minimal 3–5px range.

### Recommended build order
1. Establish the 2px base grid and spacing tokens.
2. Implement the color system with ink, canvas, surface, and action roles.
3. Set up Roboto at the defined scale with Regular and Bold weights.
4. Build the header with brand mark, service links, and account actions.
5. Construct the category navigation bar with uppercase labels and "New" badge logic.
6. Create the video card component with thumbnail, play overlay, and metadata stack.
7. Implement the grid system for card arrangement.
8. Add the live news ticker with horizontal scroll and pagination.
9. Build editorial sidebar components with headline lists and expansion links.
10. Apply minimal responsive breakpoints for column collapse and navigation adaptation.

### Accessibility
- Ensure play buttons have accessible labels beyond visual icons.
- Provide skip navigation for the dense category bar.
- Maintain color contrast ratios: the #202020 on #FFFFFF exceeds WCAG AAA; verify #858585 on #FFFFFF meets AA for captions.
- The live badge should not be the sole indicator of live status—supplement with text or ARIA live regions.
- Timestamp information should use semantic `<time>` elements.
- Horizontal scroll regions need keyboard-accessible navigation alternatives.

## Scope note

This guide covers the Rediff.com homepage and its primary content modules as visible in the supplied captures: video grids, live tickers, editorial sidebars, and navigation systems. Interior article pages, search interfaces, user account flows, and advertising placements are not represented. Motion behavior, hover states, and mobile-specific layouts must be verified against live implementation. Measurements are exact values from the retained interface records.
