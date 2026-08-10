# How gallery.any.coop is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gallery.any.coop-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large serif title, centered subtitle, and two rows of pill-shaped category filter chips on white background](https://pin.fontofweb.com/1305?format=jpg)](https://design.withfudge.com/share/pin-1305)

[Hero section with large serif title, centered subtitle, and two rows of pill-shaped category filter chips on white background](https://design.withfudge.com/share/pin-1305)

[![Full page view showing top navigation bar, hero section, and three-column grid of experience cards with screenshots and descriptions](https://pin.fontofweb.com/1304?format=jpg)](https://design.withfudge.com/share/pin-1304)

[Full page view showing top navigation bar, hero section, and three-column grid of experience cards with screenshots and descriptions](https://design.withfudge.com/share/pin-1304)

## Overview

The ANY Experience Gallery presents a marketplace of user-created workspace templates through a restrained, editorial visual system. The design prioritizes clarity and confidence: a monumental serif headline anchors the hero, while the surrounding interface remains almost austere in its minimalism. The page functions as both a discovery surface and a browsing tool, with category filters that allow visitors to narrow a broad collection into relevant subsets.

The visual hierarchy is established through scale contrast rather than color complexity. The hero display type dominates at roughly five times the size of body copy, creating an immediate focal point that reads as premium and trustworthy. Below this, the experience grid translates this confidence into a utilitarian browsing pattern—each card presents a screenshot, a concise title, a descriptive paragraph, and an author attribution. The overall impression is of a curated editorial platform rather than a dense marketplace, with generous whitespace and deliberate pacing that lets each experience breathe.

The system operates in a single light mode with no dark variant visible. Photography and screenshots within cards introduce the only color variation, making the neutral frame a deliberate choice that keeps attention on user-generated content.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headlines, navigation labels, chip text, card titles |
| canvas | #FFFFFF | Page background, chip backgrounds, card backgrounds, navigation bar |
| muted-ink | #666666 | Secondary text, author attributions, card descriptions, placeholder states |
| hairline | #E5E5E5 | Chip borders, card borders, navigation divider, grid separators |
| accent-blue | #4A6CF7 | Alert banner links, interactive emphasis, external references |

The palette is strictly achromatic for structural elements, with a single cool blue reserved for functional emphasis. The black ink is absolute rather than softened, giving the serif display its crisp authority. White canvas extends across the entire viewport without tonal variation—there are no gray section bands or gradient backgrounds to break the plane.

The hairline gray serves a precise optical role: at one pixel equivalent, it provides just enough separation for bordered elements without visual weight. This is visible in the chip outlines, the navigation bar's bottom edge, and the full card perimeters in the experience grid.

The accent blue appears only in the update banner's linked text, establishing a pattern where color signals actionability rather than decoration. Screenshots within cards introduce warm and cool tones from the underlying applications, but these are content-derived rather than system colors.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Serif Display | 5rem | 400 | 1.1 | -0.02em | Page title "Experience Gallery" |
| section-heading | Sans Serif | 1.25rem | 600 | 1.3 | 0 | Card titles, subsection labels |
| body | Sans Serif | 1.5rem | 400 | 1.4 | 0 | Hero subtitle, introductory paragraphs |
| body-small | Sans Serif | 1rem | 400 | 1.5 | 0 | Card descriptions, explanatory text |
| label | Sans Serif | 0.875rem | 500 | 1.4 | 0 | Filter chips, category tags |
| navigation | Sans Serif | 0.875rem | 500 | 1.4 | 0 | Top bar links, utility actions |

The type system pairs two distinct voices: an elegant serif for display moments and a neutral sans-serif for all functional text. The serif exhibits high contrast between thick and thin strokes, with refined terminals that suggest a transitional or modern classical genre. It is used exclusively for the hero title, creating a signature moment that elevates the gallery above utilitarian software marketing.

The sans-serif family carries all remaining text duties with a medium weight that sits between regular and semibold for labels and navigation. Body sizes are generous—the hero subtitle at 1.5rem ensures comfortable reading even at a distance, while card descriptions at 1rem maintain density without strain.

Tracking is tight only on the display, where negative letter-spacing prevents the large title from feeling loose. All other text uses neutral tracking. Line heights are compact for labels and navigation to maintain vertical rhythm in constrained spaces, while body text receives more generous leading for readability.

Verify licensing for these families before production use.

## Layout

The page follows a centered single-column structure for the hero, transitioning to a full-width grid for content browsing. The top navigation spans the full viewport width with internal padding, establishing a consistent edge alignment that the hero section mirrors.

The hero section occupies substantial vertical space, with the title, subtitle, and filter chips arranged in a stacked center alignment. The filter chips flow in two centered rows, wrapping naturally as categories multiply. Horizontal spacing between chips is tight, suggesting a gap of approximately 0.5rem, while vertical spacing between rows follows a similar compact rhythm.

Below the hero, the experience grid uses a three-column layout with equal-width columns separated by hairline borders. Each column contains a screenshot image at top, followed by text content with consistent internal padding. The grid extends to the viewport edges without a containing max-width, creating a full-bleed browsing experience that contrasts with the contained hero.

Card images appear at roughly a 16:10 aspect ratio, showing application screenshots with subtle shadow effects that suggest depth without explicit elevation tokens. Text content within cards is left-aligned with the image, maintaining a consistent margin that matches the card's internal padding.

The navigation bar uses a split composition: brand identity at the left, a centered alert banner, and utility actions at the right. This three-zone pattern balances wayfinding, system messaging, and user actions without visual competition.

## Visual language

The gallery's visual character is defined by restraint and editorial confidence. The monochrome frame eliminates distraction, forcing attention toward the content screenshots and the elegant display typography. There are no decorative elements, no background patterns, no gradient overlays—just structure, type, and whitespace.

Rounded forms appear exclusively in the filter chips, where full pill shapes soften the otherwise rectilinear system. Every other element uses sharp corners: cards, navigation bar, grid cells, and images all terminate at right angles. This creates a clear taxonomy where roundedness signals interactivity and flatness signals content.

Borders function as structural glue rather than decoration. The hairline weight is consistent across all applications, from chip outlines to grid dividers to card perimeters. This uniformity makes the border system feel intentional rather than default.

Screenshots within cards introduce the only visual complexity, showing dark-mode interfaces, colorful content, and varied layouts. The neutral frame around these images acts as a mat in traditional framing, isolating each piece for individual consideration.

Shadow appears only implicitly through screenshot presentation, where application windows carry soft drop shadows. The system itself does not use shadow for elevation, relying instead on borders and spatial separation to define hierarchy.

## Components

### Top navigation

- **Anatomy**: Brand wordmark at left, centered alert banner with linked text, "Submit experience" action and menu icon at right
- **Surface**: White background with hairline bottom border
- **Typography**: Navigation token for all text elements
- **Spacing**: Compact vertical padding of approximately 0.75rem, horizontal padding matching content margins
- **Composition**: Three-zone flex layout with space-between distribution

### Alert banner

- **Anatomy**: Single line of text with embedded link
- **Surface**: Transparent, inheriting navigation background
- **Typography**: Navigation token, with linked portion in accent blue
- **Composition**: Centered within navigation bar, truncating if space is insufficient

### Filter chip

- **Anatomy**: Text label with optional leading icon, fully rounded pill container
- **Surface**: White background with hairline border
- **Typography**: Label token, medium weight
- **Shape**: Full pill radius (9999px)
- **Spacing**: Horizontal padding approximately 1rem, vertical padding approximately 0.5rem
- **Composition**: Inline-flex within wrapping centered rows, gap of approximately 0.5rem between chips
- **Variants**: Some chips show leading icons (heart, verified badge) while others show text only; "Made by Any" chip includes a vertical divider after it, suggesting a grouped filter state

### Experience card

- **Anatomy**: Screenshot image, title, description paragraph, author attribution
- **Surface**: White background with full hairline border perimeter
- **Typography**: Section heading for title, body-small for description, label token in muted ink for author
- **Shape**: Sharp corners (0 radius)
- **Spacing**: Internal padding of approximately 1.5rem, image flush to top border with no internal padding
- **Composition**: Vertical stack with consistent text margins below image
- **Hierarchy**: Image dominates visually, followed by bold title, then lighter description, finally subdued attribution

### Grid container

- **Anatomy**: Equal-width columns with hairline vertical dividers
- **Surface**: White background extending full width
- **Composition**: Three-column layout with no external gap; borders serve as column separation

## Responsive behavior

The three-column grid should collapse to two columns at intermediate widths and single column on narrow viewports, maintaining the full-bleed border treatment between cells. The hero title should scale down proportionally, potentially reducing to 3rem on tablet and 2.5rem on mobile to preserve line breaks and prevent overflow.

Filter chips should continue wrapping naturally; on narrow screens they may occupy more rows with maintained horizontal scroll as an alternative if row count becomes excessive. The navigation bar's three-zone layout should compress to a hamburger menu with brand and primary action visible, hiding the centered alert banner or relocating it below the navigation fold.

Card images should maintain aspect ratio while scaling to column width. Text padding within cards should remain consistent rather than scaling proportionally, ensuring readable line lengths in narrower columns.

## Practical implementation guidance

### Preserve
- The stark black-on-white contrast for all structural text; do not soften the ink color
- The serif/sans-serif pairing; the display face is essential to the gallery's premium positioning
- The hairline border weight consistently across all bordered elements
- The full-bleed grid with visible column separators
- The pill shape exclusively for interactive filters, keeping all content elements rectilinear

### Avoid
- Adding background colors or section bands that break the white canvas continuity
- Using rounded corners on cards or images; this contradicts the system's sharp editorial frame
- Introducing additional accent colors beyond the functional blue; the palette's restraint is deliberate
- Shadow effects on system components; elevation should remain flat and border-defined
- Centering text within cards; left alignment maintains the editorial reading rhythm

### Recommended build order
1. Establish the white canvas and black ink as foundational tokens
2. Implement the serif display at hero scale with tight tracking
3. Build the filter chip component with full pill radius and hairline border
4. Construct the three-column grid with hairline vertical dividers
5. Populate experience cards with image, title, description, and attribution stack
6. Add the top navigation with three-zone composition and alert banner

### Accessibility
- Ensure the serif display maintains sufficient weight for low-vision readers; the thin strokes may require careful rendering
- Provide visible focus states for filter chips, likely an outline offset or inverted fill
- The accent blue on white should meet WCAG AA contrast minimums; verify if used for small text
- Card images require alt text describing the screenshot content for screen reader users
- The "Read more" link in the alert banner should have descriptive context rather than relying on adjacent text alone

## Scope note

This guide covers the ANY Experience Gallery landing page hero, category filters, and experience card grid. The top navigation, alert banner, and card content patterns are described from visible material. Measurements are practical adaptation targets. Not covered: mobile layouts, hover and focus states, loading skeletons, form interactions for experience submission, search functionality, pagination or infinite scroll behavior, and any dark mode variant. The underlying screenshot applications within cards are content rather than system components.
