# How carbonads.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/carbonads.net-design)

Last updated: 2026-08-10

## Captured pages

[![Dark testimonial carousel with italic quote, avatar, and dot pagination on near-black background](https://pin.fontofweb.com/3787?format=jpg)](https://design.withfudge.com/share/pin-3787)

[Dark testimonial carousel with italic quote, avatar, and dot pagination on near-black background](https://design.withfudge.com/share/pin-3787)

[![Light footer with Carbon logo, three-column link grid, and right-side ad preview grid with pink MUX cards](https://pin.fontofweb.com/3786?format=jpg)](https://design.withfudge.com/share/pin-3786)

[Light footer with Carbon logo, three-column link grid, and right-side ad preview grid with pink MUX cards](https://design.withfudge.com/share/pin-3786)

[![Light footer with Carbon logo, three-column link grid, and right-side ad preview grid with gray Squarespace cards](https://pin.fontofweb.com/3785?format=jpg)](https://design.withfudge.com/share/pin-3785)

[Light footer with Carbon logo, three-column link grid, and right-side ad preview grid with gray Squarespace cards](https://design.withfudge.com/share/pin-3785)

[![Dark FAQ accordion panel with rounded corners, two-column layout, and expand/collapse controls on charcoal surface](https://pin.fontofweb.com/3784?format=jpg)](https://design.withfudge.com/share/pin-3784)

[Dark FAQ accordion panel with rounded corners, two-column layout, and expand/collapse controls on charcoal surface](https://design.withfudge.com/share/pin-3784)

## Overview

Carbon Ads presents a developer-focused advertising platform with a visual system built on radical contrast between light and dark modes. The interface alternates between clean white canvases for informational and navigational content and deep near-black surfaces for immersive testimonials and interactive FAQ sections. The design prioritizes technical credibility through restrained typography, generous whitespace, and modular card-based components that showcase advertisement previews in a grid formation. The overall impression is one of precision and professionalism—every element serves a functional purpose without decorative excess. The system relies on a single type family, Inter, used across all weights and styles to maintain cohesion, while color operates in a binary fashion: either high-contrast dark-on-light for readability or warm-toned light-on-dark for emotional impact in testimonial and FAQ contexts.

## Colors

The Carbon Ads palette is intentionally minimal, operating on a principle of functional contrast rather than chromatic variety. The system distinguishes between light-mode surfaces for navigation and footer content and dark-mode surfaces for testimonials and interactive accordions.

| token | value | use |
|---|---|---|
| ink | #111111 | Primary text on light backgrounds; dark section backgrounds; testimonial card surfaces |
| canvas | #ffffff | Page backgrounds; footer surfaces; ad preview card backgrounds; text on dark surfaces |
| surface | #1c1c1c | FAQ accordion panel backgrounds; elevated dark containers |
| muted | #888888 | Secondary footer links; inactive states; subtle metadata |
| border | #333333 | Dividers in dark sections; subtle separators in FAQ accordion items |

The light mode dominates structural and navigational areas, presenting the Carbon wordmark and footer links against pure white. Dark mode activates for emotional and immersive content: the testimonial carousel uses a near-black ink background with white italic quotation text, while the FAQ section employs a slightly warmer charcoal surface to create depth without harshness. The muted gray serves as the single intermediate tone, reserved for secondary navigation and copyright text where hierarchy demands de-emphasis. No accent colors appear in the interface itself; any chromatic presence comes from advertiser imagery within preview cards, allowing the platform's own identity to remain neutral and authoritative.

## Typography

Carbon Ads uses Inter as its sole type family, with both roman and italic variants sourced from the same design by Rasmus Andersson, available through Rsms. The system leverages weight and size variation rather than family mixing to establish hierarchy.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 700 | 1.1 | -0.02em | Page headlines; major section titles |
| section-display | Inter | 1.5rem | 600 | 1.2 | -0.01em | FAQ question headers; subsection titles |
| body | Inter | 1rem | 400 | 1.6 | 0em | Paragraph text; descriptions; general content |
| body-italic | Inter-Italic | 1rem | 400 | 1.6 | 0em | Testimonial quotations; emphasized statements |
| label | Inter | 0.875rem | 500 | 1.4 | 0em | Category headers; column titles |
| navigation | Inter | 0.875rem | 400 | 1.4 | 0em | Footer links; utility navigation |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0em | Copyright text; fine print |

The type scale is built on a 4px relative unit, with sizes snapping to whole-number multiples: 12px (0.75rem), 14px (0.875rem), 16px (1rem), 24px (1.5rem), and 48px (3rem). Testimonial content receives special treatment through the italic variant, creating a distinct voice that separates quoted speech from interface copy. FAQ headers use semibold weight at 24px to signal interactivity, while footer navigation remains lightweight and unobtrusive at 14px. Verify licensing for these families before production use.

## Layout

The Carbon Ads layout follows a split-composition pattern where primary content occupies the left two-thirds of the viewport and advertisement previews populate the right third as a persistent vertical grid. This asymmetry reinforces the platform's purpose: showcasing ads while delivering information.

The footer implements a three-column link grid beneath the Carbon wordmark, with columns labeled Advertisers, Publishers, and Carbon. Each column contains four to five vertically stacked links with consistent 8px spacing between items. The wordmark receives generous top padding, establishing clear separation from any preceding content.

The FAQ section uses a two-column accordion layout within a rounded container. Questions distribute evenly across columns, with expanded answers spanning the full width of their column. The container features substantial internal padding—approximately 48px—and a prominent rounded top edge that creates a tab-like visual connection to the section header.

Testimonial content centers within the viewport, with quotation text constrained to a readable measure of roughly 60 characters. The avatar and attribution sit below the quote with centered alignment, followed by dot pagination indicating carousel position.

Ad preview cards on the right edge repeat in a masonry-like vertical flow, each card containing a square thumbnail, headline, description, and metadata. This sidebar grid remains visually dense compared to the spacious main content, creating productive tension between information and demonstration.

## Visual language

The Carbon Ads visual language communicates technical authority through restraint and precision. Rounded corners appear consistently at 16px for major panels and containers, softening the otherwise stark geometry without becoming friendly or casual. The pill-shaped "Back to top" and section headers suggest a subtle organic quality that offsets the grid's rigor.

Imagery within ad preview cards follows a strict square thumbnail format with consistent aspect ratios, creating visual rhythm through repetition. The platform's own identity suppresses color in favor of advertiser content—preview cards display brand imagery from clients while the interface itself remains achromatic.

Shadow and depth are minimal. Dark sections rely on value contrast rather than elevation shadows to create hierarchy. The FAQ panel's slightly lighter charcoal surface against the deeper page background provides subtle depth without material-style shadow systems.

The dot pagination in testimonials uses three states: active (filled, lighter), inactive (filled, darker), and hover. This micro-pattern repeats the circular motif established by avatar images and rounded containers.

## Components

### Testimonial Card

- **Anatomy**: Centered italic quotation block; circular avatar image; name and title attribution; three-dot pagination
- **Surface and text color**: Background uses ink (#111111); text uses canvas (#ffffff)
- **Typography**: Body-italic for the quotation; label weight for the name; navigation weight for the title and company
- **Shape**: Full-bleed dark section with no border radius on outer edges; internal content centered
- **Spacing**: Generous vertical padding of approximately 96px above and below the quotation; 16px between quote and avatar; 8px between name and title
- **Composition**: Single-column centered layout with maximum content width of approximately 720px
- **Variants**: Multiple testimonial slides indicated by dot pagination; active dot distinguished by lighter fill

### FAQ Accordion

- **Anatomy**: Section header with dropdown indicator; two-column grid of question items; expand/collapse toggle icon; expandable answer text area
- **Surface and text color**: Surface background (#1c1c1c); canvas text; border dividers (#333333)
- **Typography**: Section-display for questions; body for answers; label for the section header
- **Shape**: Rounded panel with 16px radius; tab-shaped header protrusion with pill radius
- **Spacing**: 48px internal padding; 24px between questions; 16px between question text and answer
- **Composition**: Two-column question grid with answers expanding beneath their respective questions; single-column on narrow viewports
- **Variants**: Collapsed state shows question plus plus-icon; expanded state reveals answer text and changes icon to minus

### Footer

- **Anatomy**: Carbon wordmark; three-column link grid; copyright notice
- **Surface and text color**: Canvas background; ink text for headers; muted text for links
- **Typography**: Navigation weight for links; label weight for column headers; legal-copy for copyright
- **Shape**: Full-width with no rounding; generous top whitespace separating from content above
- **Spacing**: 48px top padding; 32px between wordmark and link grid; 24px between columns; 8px between stacked links
- **Composition**: Left-aligned wordmark; three equal columns below; copyright left-aligned at bottom
- **Variants**: External links indicated by diagonal arrow icons; dashboard links receive special arrow treatment

### Ad Preview Card

- **Anatomy**: Square thumbnail image; headline text; description paragraph; metadata line
- **Surface and text color**: Canvas background; ink text; subtle border separation
- **Typography**: Label weight for headlines; body size for descriptions; legal-copy for metadata
- **Shape**: Rectangular card with subtle rounding; square thumbnail with possible internal rounding
- **Spacing**: 16px internal padding; 8px between thumbnail and text; 4px between text elements
- **Composition**: Horizontal layout with thumbnail left, text right; stacked vertically in sidebar grid
- **Variants**: Different advertiser imagery and color treatments; some cards use light backgrounds, others dark, reflecting actual ad creative

## Responsive behavior

The split-layout composition with advertisement previews on the right suggests a breakpoint where the sidebar grid collapses below main content or hides entirely on smaller viewports. The FAQ accordion's two-column grid should transition to single-column stacking when viewport width falls below approximately 768px, maintaining the rounded container but allowing questions to flow sequentially.

Footer columns should stack vertically on narrow screens, with the Carbon wordmark remaining prominent at top. Testimonial text should maintain comfortable measure through padding adjustments rather than font size reduction, though the hero-display size may scale down to 2rem on mobile to preserve hierarchy without overwhelming the viewport.

The ad preview grid, being the most spatially demanding element, likely transforms from a fixed sidebar into a horizontal scroll or collapsible section on tablet and mobile widths. Implementation should preserve the square thumbnail format across all breakpoints to maintain visual consistency.

## Practical implementation guidance

### Preserve
- The stark light-dark alternation between sections; do not introduce intermediate gray backgrounds
- Single-family typography using Inter throughout; the italic variant is essential for testimonial voice
- Square thumbnail format in all ad preview cards
- Generous whitespace around the Carbon wordmark and in testimonial sections
- Consistent 16px rounding on major containers and panels

### Avoid
- Adding accent colors to the interface chrome; let advertiser imagery provide chromatic interest
- Reducing contrast in dark sections; the near-black ink against white text is intentional and authoritative
- Mixing additional type families; the system's credibility relies on Inter's technical neutrality
- Removing the arrow indicators from external footer links; these signal behavior
- Making FAQ containers fully rounded; the tab-shaped top edge is distinctive

### Recommended Build Order
1. Establish the 4px relative unit and type scale with Inter at all weights
2. Implement light-mode footer with three-column grid and link hierarchy
3. Build dark testimonial section with centered layout and italic quotation style
4. Create FAQ accordion with two-column grid and expand/collapse behavior
5. Add ad preview sidebar with square thumbnails and card repetition
6. Polish with rounded panel shapes and dot pagination states

### Accessibility
- Ensure testimonial carousel supports keyboard navigation and screen reader announcement of slide changes
- Provide visible focus indicators on FAQ accordion triggers that meet contrast requirements against the surface background
- Maintain minimum 4.5:1 contrast ratio for all body text; the ink/canvas pairing exceeds this, but verify muted text against canvas meets standards
- Consider reduced-motion preferences for carousel transitions and accordion expansions
- Structure footer links as semantic lists for efficient screen reader navigation

## Scope note

This guide covers the Carbon Ads homepage including testimonial, FAQ, footer, and advertisement preview components visible in the supplied images. Navigation header, form interactions, mobile layouts, animation specifications, and interior pages are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px grid.
