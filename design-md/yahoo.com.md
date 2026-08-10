# How yahoo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/yahoo.com-design)

Last updated: 2026-08-10

## Captured pages

[![Yahoo homepage main content area showing news feed cards, trending sidebar, weather widget, and promotional modules with purple accent branding](https://pin.fontofweb.com/2179?format=jpg)](https://design.withfudge.com/share/pin-2179)

[Yahoo homepage main content area showing news feed cards, trending sidebar, weather widget, and promotional modules with purple accent branding](https://design.withfudge.com/share/pin-2179)

[![Yahoo header navigation with purple logo, search bar with purple action button, and Mail/Sign in controls on light gray background](https://pin.fontofweb.com/2178?format=jpg)](https://design.withfudge.com/share/pin-2178)

[Yahoo header navigation with purple logo, search bar with purple action button, and Mail/Sign in controls on light gray background](https://design.withfudge.com/share/pin-2178)

## Overview

Yahoo's homepage presents a classic portal experience rebuilt with contemporary density and clarity. The system centers on a light gray canvas that lets content modules breathe while maintaining high information throughput. A distinctive purple brand color anchors every interactive moment, from the logo mark to search submission and category labels. The layout distributes content across a three-column architecture: a narrow trending feed on the left, a dominant editorial center column with hero stories and card grids, and a utility sidebar on the right housing weather, promotions, and games. This structure prioritizes scanability over minimalism, using consistent card containers with subtle rounding to separate stories without heavy borders. Typography splits cleanly between Centra No 2 for display headlines and Yahoo Product Sans Vf for body text, navigation, and labels, creating a functional hierarchy that reads quickly at small sizes. The overall impression is of a mature, trusted platform that balances editorial authority with everyday utility.

## Colors

The palette is restrained and functional, with purple serving as the singular brand accent against a neutral foundation. Light grays dominate the structural layer, while pure white surfaces elevate individual content modules.

| token | value | use |
|---|---|---|
| action | #6001d2 | Primary buttons, search submit, logo mark, active navigation states, trending labels |
| action-hover | #4a01a3 | Darker purple for pressed or hovered action surfaces |
| canvas | #f0f0f0 | Page background behind all content modules |
| surface | #ffffff | Card backgrounds, input fields, widget containers |
| ink | #1d1d1d | Primary headlines, body text, navigation links |
| muted-ink | #6e6e6e | Timestamps, secondary metadata, source attributions, comment counts |
| border | #d8d8d8 | Card outlines, input borders, divider lines between stories |
| accent-purple | #6001d2 | Category tags, "Trending" label prefix, interactive highlights |
| accent-coral | #ff6b6b | Promotional module backgrounds, urgent visual breaks |

The light mode is the only visible mode in the supplied surfaces. Dark text on white or near-white surfaces provides strong contrast for extended reading. The purple action color appears at high saturation against both light gray and white backgrounds, ensuring visibility for primary calls to action. Promotional modules introduce warmer accent tones that break the cool neutrality without disrupting the overall system. No dark mode or inverted surface treatments are visible.

## Typography

Two families drive the typographic system. Centra No 2, designed by Josh Finklea and provided by Monotype Imaging Inc, handles display and headline roles with weights from Book through Bold. Yahoo Product Sans Vf, also from Monotype Imaging Inc, covers the full range of interface text with a variable regular weight that adapts cleanly across sizes.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Centra No 2 | 2rem | 700 | 1.2 | -0.01em | Main hero headline over feature images |
| section-display | Centra No 2 | 1.25rem | 700 | 1.3 | 0 | Card headlines, section headers |
| body | Yahoo Product Sans Vf | 1rem | 400 | 1.5 | 0 | Article descriptions, widget content |
| body-small | Yahoo Product Sans Vf | 0.875rem | 400 | 1.5 | 0 | Metadata, source names, comment counts |
| label | Yahoo Product Sans Vf | 0.75rem | 500 | 1.4 | 0.02em | Tags, timestamps, "NEW" badges |
| navigation | Yahoo Product Sans Vf | 0.875rem | 500 | 1 | 0 | Top nav links, Mail button text |

All sizes are whole-number multiples of 4px, expressed in rem with a 16px root. Line heights stay tight for navigation and labels to maintain vertical rhythm in dense layouts, while body text receives more generous leading for readability. Tracking remains neutral or slightly negative for display sizes to prevent looseness at larger scales. Verify licensing for these families before production use.

## Layout

The homepage employs a fixed-width centered container with a three-column grid that adapts its proportions to content priority. The left column, approximately 20% of the width, carries the trending feed with compact story rows. The center column, roughly 50%, holds the hero feature, secondary story cards, and personalized recommendations. The right column, about 25%, stacks utility widgets vertically: weather, advertisements, and games.

Vertical spacing between major sections measures 1.5rem, creating clear separation without excessive whitespace. Cards internal padding sits at 1rem on all sides, giving content room to breathe while maintaining density. The grid gap between adjacent cards in the center column is 1rem, matching the padding rhythm.

The header spans full width above the content grid, containing the logo left-aligned, a prominent search bar centered, and utility controls right-aligned. The search bar occupies a significant portion of header real estate, reflecting search as a primary user pathway. Below the header, content modules scroll independently within their columns in some implementations, though the primary behavior shows a unified page scroll.

Responsive behavior should collapse the three-column layout to a single column on narrow viewports, stacking the trending feed above the hero, then utility widgets below. The left and right sidebars may become horizontally scrollable carousels or accordions at intermediate widths to preserve content access without excessive vertical expansion.

## Visual language

The visual character balances editorial seriousness with approachable utility. Rounded corners appear consistently at 0.75rem for cards and widgets, softening the rectilinear grid without becoming playful. Buttons and inputs use full pill shapes at 9999px, creating a friendly contrast to the squarer card containers.

Shadows are minimal or absent; depth comes instead from background color contrast and thin 1px borders in #d8d8d8. This flat approach keeps the interface lightweight and fast-feeling, appropriate for a high-refresh content destination.

Imagery dominates the center column, with hero photographs spanning full card width and thumbnail images accompanying story listings. Photos receive no border radius when edge-to-edge within cards, but standalone thumbnails in lists appear slightly rounded. The weather widget uses simple iconography with clean line weights, matching the overall restraint.

The purple brand color appears as a filled circle for the search button, a text color for category labels, and as the logo mark itself. This disciplined application prevents chromatic overload while maintaining brand recognition. Promotional modules break the pattern with solid coral backgrounds, using white text for reversal contrast.

## Components

### Search bar

- **Anatomy**: Text input field with placeholder text, purple circular submit button containing magnifying glass icon
- **Surface**: White background with 1px #d8d8d8 border
- **Typography**: `{typography.body}` for input text
- **Shape**: Full pill with 9999px radius
- **Spacing**: Internal padding approximately 0.75rem vertical, 1.25rem horizontal left of button
- **Composition**: Flex row with input expanding to fill, button fixed at right edge
- **States**: Focus state likely adds purple border or shadow; not visible in still image

### Primary button

- **Anatomy**: Text label centered within filled container, optionally with leading icon
- **Surface**: `{colors.action}` background, `{colors.surface}` text
- **Typography**: `{typography.label}` with medium weight
- **Shape**: Full pill at 9999px
- **Spacing**: Vertical padding 0.5rem, horizontal padding 1.25rem
- **Variants**: Mail button in header uses outline style with purple border and text, white background

### Content card

- **Anatomy**: Optional image, headline text, source attribution with icon, optional comment count
- **Surface**: `{colors.surface}` background, 1px `{colors.border}` outline
- **Typography**: `{typography.section-display}` for headline, `{typography.body-small}` for metadata
- **Shape**: 0.75rem border radius
- **Spacing**: `{spacing.card-padding}` internal padding
- **Composition**: Image top or left, text stack below or right; hero variant stacks image full-width above large headline
- **Variants**: Hero card with full-bleed image and overlay text; compact list item with thumbnail left; standard card with image top and text below

### Trending item

- **Anatomy**: Rank number or "NEW" badge, thumbnail image, headline, optional summary
- **Surface**: Transparent, sitting on `{colors.canvas}`
- **Typography**: `{typography.body-small}` for headline, `{typography.label}` for rank and badges
- **Spacing**: 0.75rem vertical padding between items, separated by thin dividers
- **Composition**: Horizontal row with fixed-width thumbnail, text stack to right

### Weather widget

- **Anatomy**: Location header with dropdown, current condition icon and temperature, daily forecast row
- **Surface**: `{colors.surface}` card with 0.75rem radius
- **Typography**: `{typography.section-display}` for temperature, `{typography.label}` for day labels
- **Spacing`: 1rem padding, 0.75rem gap between forecast days
- **Composition**: Current conditions left-aligned with large icon, forecast days in equal horizontal distribution

### Navigation header

- **Anatomy**: Logo mark, search bar, text links, Mail button, Sign in button
- **Surface**: `{colors.canvas}` background
- **Typography**: `{typography.navigation}` for links, `{typography.label}` for buttons
- **Spacing**: 1rem horizontal padding on container, 1.5rem gap between nav links
- **Composition**: Flex row with logo left, search center-weighted, utilities right

## Responsive behavior

The three-column grid should transition to two columns at intermediate widths, likely dropping the right sidebar below the main content or collapsing it into an expandable section. At narrow widths, all columns stack vertically with the trending feed first, followed by hero content, then utility modules.

The search bar should remain prominent across breakpoints, potentially simplifying to an icon-triggered overlay on the smallest screens to preserve header height. Navigation links collapse to a "More" dropdown, as already indicated by the visible "More" control with chevron in the desktop header.

Images within cards should maintain aspect ratio, with hero images becoming taller in the single-column layout to preserve impact. Thumbnail images in lists may scale down or hide entirely on very narrow screens, showing headlines only.

Touch targets should expand to at least 44px for all interactive elements in mobile contexts. The pill-shaped buttons already accommodate this with generous padding.

## Practical implementation guidance

### Preserve
- The disciplined purple accent against neutral grounds; this is the core brand recognition signal
- The high information density with clear card boundaries; users expect to scan many headlines quickly
- The separation of display and body type families; Centra No 2's character serves headlines well while Product Sans maintains UI clarity
- The pill-shaped search submit button as a distinctive interactive signature

### Avoid
- Adding heavy shadows or elevation effects; the flat, bordered aesthetic is intentional
- Introducing additional accent colors beyond purple and controlled promotional tones
- Reducing card padding below 1rem; the density works because content still has breathing room
- Using display type for body text; the contrast between families is part of the system's rhythm

### Recommended build order
1. Establish the color tokens and apply canvas/surface backgrounds
2. Implement the two font families with the full type scale
3. Build the header with search bar and navigation
4. Create the card component with all three variants (hero, standard, compact)
5. Implement the three-column grid with correct proportions
6. Add sidebar widgets: weather, promotions, games
7. Polish with spacing tokens and responsive breakpoints

### Accessibility
- Ensure the purple action color meets contrast ratios against both white and light gray backgrounds; the #6001d2 value may need darkening for small text
- Provide visible focus indicators on search input and navigation links
- Use semantic heading hierarchy with h1 for hero headline, h2 for section headers, h3 for card headlines
- Include alt text for all thumbnail and hero images
- Make the "More" dropdown and Mail button keyboard accessible with clear expanded states

## Scope note

This guide covers the Yahoo homepage portal layout including the header navigation, news feed cards, trending sidebar, weather widget, and promotional modules. Footer content, interior article pages, email interface, and mobile-specific layouts are not represented in the supplied images. Motion, hover states, and loading skeletons are not documented. Measurements are practical adaptation targets.
