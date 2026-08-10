# How bestdesignsonx.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bestdesignsonx.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with serif title, soft gradient background, and masonry grid of design portfolio cards](https://pin.fontofweb.com/3689?format=jpg)](https://design.withfudge.com/share/pin-3689)

[Homepage hero with serif title, soft gradient background, and masonry grid of design portfolio cards](https://design.withfudge.com/share/pin-3689)

[![Modal dialog showing a detailed X post with green coffee branding and dark overlay backdrop](https://pin.fontofweb.com/4167?format=jpg)](https://design.withfudge.com/share/pin-4167)

[Modal dialog showing a detailed X post with green coffee branding and dark overlay backdrop](https://design.withfudge.com/share/pin-4167)

[![Hero section with large bold sans-serif headline, brand logos as inline images, and app screenshot showcase](https://pin.fontofweb.com/4172?format=jpg)](https://design.withfudge.com/share/pin-4172)

[Hero section with large bold sans-serif headline, brand logos as inline images, and app screenshot showcase](https://design.withfudge.com/share/pin-4172)

[![Network sponsors grid with eight sponsor cards, pagination controls, and footer advertisement](https://pin.fontofweb.com/4173?format=jpg)](https://design.withfudge.com/share/pin-4173)

[Network sponsors grid with eight sponsor cards, pagination controls, and footer advertisement](https://design.withfudge.com/share/pin-4173)

## Overview

Best Designs on X.com presents a refined, gallery-like browsing experience for discovering creative work shared on X. The visual system balances editorial elegance with functional clarity: a dramatic serif display face anchors the brand identity, while a precise geometric sans-serif handles all interface and body text. The overall impression is clean, spacious, and intentionally minimal—letting the showcased design work speak while providing intuitive navigation through filters, search, and a responsive masonry grid. The site employs a near-monochrome palette with strategic blue accents, creating a neutral stage that adapts to the colorful and varied content within each card. Subtle rounded corners on cards and full pill shapes on interactive elements soften the otherwise crisp, grid-driven layout.

## Colors

The color system is intentionally restrained, built around high-contrast black and white with a single vibrant accent and subtle neutrals for hierarchy.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, buttons, active states, card borders |
| canvas | `#ffffff` | Page background, modal surfaces, button text on dark |
| muted-ink | `#737373` | Secondary text, metadata, captions, inactive pagination |
| surface | `#f5f5f5` | Filter chip backgrounds, subtle hover states |
| border | `#e5e5e5` | Card outlines, dividers, input borders |
| accent-blue | `#2563eb` | Italic word in hero title, interactive emphasis |
| overlay | `#000000` | Modal backdrop at reduced opacity |

The interface operates in a light mode exclusively across all visible surfaces. The near-black ink provides maximum readability against white canvas, while muted-ink creates accessible secondary information without competing for attention. The accent-blue appears sparingly—most notably in the italic "Designs" within the hero title—adding a singular point of color that draws the eye without disrupting the monochrome discipline. Photographic and illustrative content within cards introduces their own color palettes, which the neutral system accommodates without clash. The overlay token represents the base color for modal backdrops, implemented at reduced opacity in practice to allow the focused content to appear elevated while maintaining context of the page behind.

## Typography

The type system pairs an elegant serif display face with a modern geometric sans-serif, creating clear role separation between brand expression and functional communication.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Serif | 4rem | 400 | 1.1 | -0.01em | Main page title "Best Designs on X.com" |
| hero-display-italic | Instrument Serif-Italic | 4rem | 400 | 1.1 | -0.01em | Emphasized word within hero title |
| section-display | Geist | 3rem | 700 | 1.1 | -0.02em | Large promotional headlines |
| body | Geist | 1rem | 400 | 1.5 | 0em | Descriptions, post content, general reading |
| body-small | Geist | 0.875rem | 400 | 1.5 | 0em | Card descriptions, metadata, URLs |
| label | Geist | 0.75rem | 500 | 1.4 | 0.01em | Tags, counts, small UI labels |
| navigation | Geist | 0.875rem | 500 | 1.4 | 0em | Top navigation, filter options |

Instrument Serif, designed by Rodrigo Fuenzalida and available from Frag Type, supplies the editorial character of the identity. Its regular and italic variants work together in the hero display, with the italic form adding expressive emphasis. Geist, from Basement Studio and Vercel, handles all functional typography with weights from regular through bold. Plus Jakarta Sans, designed by Gumpita Rahayu from Tokotype, is available in the system though primarily serves as a secondary sans option. Verify licensing for these families before production use.

## Layout

The page structure follows a centered, contained layout with generous whitespace and a clear content hierarchy. The header area centers the brand title and subtitle, with navigation and view controls positioned at the edges. The main content area employs a masonry-style grid of design cards that adapts to content height, creating visual rhythm through varied card proportions.

The grid system uses consistent gaps between cards, with each card maintaining uniform horizontal spacing while allowing vertical expansion based on embedded media. Cards appear to use a minimum width before wrapping, suggesting a responsive column count that adjusts from single column on narrow viewports to multiple columns on wider screens. The overall page maintains comfortable margins on all sides, preventing content from touching viewport edges.

Section spacing creates clear separation between the hero area, filter controls, main grid, and footer. The modal system overlays the entire viewport with a centered dialog that maintains internal padding and scrollable content areas. Pagination controls sit below the grid with centered alignment, using compact numbered buttons and directional arrows.

## Visual language

The visual character is gallery-minimal: every surface serves the content being showcased. Rounded corners appear at `0.75rem` on cards, creating friendly but not playful containers. Full pill shapes at `9999px` define interactive elements like filter chips and primary buttons, distinguishing them from content containers. Borders are hairline-thin at `1px` in the border color, providing subtle definition without heaviness.

Shadows are notably absent from the card system; depth is achieved through the white card against white page background with only a thin border, or through the modal's overlay backdrop. This flat approach keeps attention on the colorful media within cards. The hero area introduces a soft, diffuse gradient background in muted pastels—visible as a subtle atmospheric wash behind the title—adding dimension without competing with content.

Iconography is simple and functional: heart shapes for favorites, X marks for closing, grid and list icons for view switching. These appear at small sizes inline with text or as standalone controls, rendered in the current text color.

## Components

### Design Card

The primary content unit, appearing throughout the masonry grid.

- **Anatomy**: Card container with optional header row (avatar, name, action buttons), media area with one or more images, and optional footer with description and metadata.
- **Surface**: White background with `1px` border in border color, `0.75rem` border radius.
- **Typography**: Creator name uses body-small at medium weight; descriptions use body-small regular; URLs and metadata use label size in muted-ink.
- **Spacing**: Internal padding of `1rem` to `1.5rem`; media bleeds to card edges when present.
- **Composition**: Media stacks vertically within card; multiple images may appear in a grid arrangement inside the card.
- **Variants**: Some cards show only media; others include text headers and footers. Sponsor cards in the network section add a small logo and tagline above the main media.

### Modal Dialog

Appears when selecting a design for detailed view.

- **Anatomy**: Overlay backdrop, centered dialog with close button, header with profile information, scrollable media gallery, action bar with primary button and favorite control.
- **Surface**: Backdrop uses overlay color at reduced opacity; dialog uses white canvas with `1rem` border radius.
- **Typography**: Profile name uses body at medium weight; handle uses body-small in muted-ink; post text uses body; button uses label.
- **Spacing**: Dialog has internal padding of `1.5rem`; media fills width with maintained aspect ratio.
- **Shape**: `1rem` rounded corners on the dialog container.
- **States**: Close button in upper right; favorite heart toggles filled/unfilled.

### Filter Chip

Horizontal scrolling row of category selectors.

- **Anatomy**: Pill-shaped button with text label and optional count.
- **Surface**: Default state uses surface background with ink text; active state inverts to ink background with canvas text.
- **Typography**: Label token at medium weight.
- **Shape**: Full pill at `9999px` border radius.
- **Spacing**: Horizontal gap of `0.5rem` between chips; internal padding approximately `0.5rem` vertical and `1rem` horizontal.

### Primary Button

Used for main actions like "View on X" or "Get Featured".

- **Anatomy**: Pill-shaped button with centered text, optionally with icon.
- **Surface**: Ink background with canvas text; no border.
- **Typography**: Label token at medium weight.
- **Shape**: Full pill at `9999px` border radius.
- **Spacing**: Generous internal padding for tap targets.

### Pagination

Numbered page navigation below grids.

- **Anatomy**: Previous/next arrows with numbered page buttons and ellipsis for gaps.
- **Surface**: Transparent background; active page may have subtle surface background or ink fill.
- **Typography**: Body-small for numbers and labels.
- **Composition**: Centered horizontally with flex layout; items spaced with small gaps.

## Responsive behavior

The masonry grid should reflow from single column on narrow viewports to two, three, and four columns as viewport width increases. Cards maintain their internal proportions while the grid gap stays constant. The hero title scales down on smaller screens, potentially reducing from `4rem` to `2.5rem` to maintain line length control. Filter chips should remain horizontally scrollable on all viewports rather than wrapping, preserving the single-row pattern. Modal dialogs should transition to full-screen or near-full-screen on mobile, with adjusted padding and touch-optimized close targets. The sponsor grid visible in one view appears to use a stricter four-column layout that should stack to two columns and then single column on smaller screens.

## Practical implementation guidance

### Preserve
- The serif/sans-serif pairing: Instrument Serif for brand moments, Geist for everything functional.
- The restrained monochrome palette with single blue accent; resist adding more accent colors.
- The thin-bordered, lightly rounded card aesthetic without shadows.
- The masonry grid's organic height variation rather than forcing uniform card heights.
- The generous whitespace around sections and within cards.

### Avoid
- Heavy drop shadows or elevated card treatments that break the flat gallery aesthetic.
- Multiple accent colors that would compete with the varied content media.
- Tight line heights on body text that reduce readability at small sizes.
- Borders thicker than `1px` on cards, which would add visual weight.
- Generic placeholder imagery that doesn't match the curated quality of showcased work.

### Recommended Build Order
1. Establish the type scale with Instrument Serif and Geist loaded and configured.
2. Build the base grid system and card component with correct spacing, border, and radius.
3. Implement the hero section with gradient background and centered title.
4. Create the filter chip row with active/inactive states.
5. Populate the masonry grid with variable-height cards.
6. Add the modal system with overlay, dialog, and scrollable content.
7. Implement pagination and footer elements.
8. Polish responsive behavior across breakpoints.

### Accessibility
- Ensure the modal traps focus and provides an escape key close mechanism.
- Add visible focus indicators to all interactive elements, using ink or accent-blue outlines.
- Maintain color contrast ratios: ink on canvas exceeds WCAG AAA; muted-ink on canvas should meet AA for small text.
- Provide alt text for all design media within cards, describing the visual work shown.
- Consider reduced-motion preferences for any scroll-triggered or modal transition animations.

## Scope note

This guide covers the homepage, design card grid, modal detail view, and sponsor section visible in the supplied images. Mobile layouts, dark mode, loading states, error handling, and user authentication flows are not represented. Measurements are practical adaptation targets. Verify licensing for Geist, Instrument Serif, and Plus Jakarta Sans before production use.
