# How tesla.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tesla.com-design)

Last updated: 2026-08-10

## Captured pages

[![Vehicles mega-menu overlay with Model S, 3, Y, X, Cybertruck thumbnails and right-hand navigation links on white background](https://pin.fontofweb.com/581?format=jpg)](https://design.withfudge.com/share/pin-581)

[Vehicles mega-menu overlay with Model S, 3, Y, X, Cybertruck thumbnails and right-hand navigation links on white background](https://design.withfudge.com/share/pin-581)

[![Page footer with federal tax credit legal disclaimer, Tesla copyright 2025, and chat support bar with question input field](https://pin.fontofweb.com/580?format=jpg)](https://design.withfudge.com/share/pin-580)

[Page footer with federal tax credit legal disclaimer, Tesla copyright 2025, and chat support bar with question input field](https://design.withfudge.com/share/pin-580)

[![Find Your Charge section with interactive United States map showing red Supercharger dots and gray Destination Charger dots, plus statistics counters](https://pin.fontofweb.com/579?format=jpg)](https://design.withfudge.com/share/pin-579)

[Find Your Charge section with interactive United States map showing red Supercharger dots and gray Destination Charger dots, plus statistics counters](https://design.withfudge.com/share/pin-579)

[![Split feature cards showing Full Self-Driving interior view and Features That Come Standard with Model X and child, with blue and white buttons](https://pin.fontofweb.com/578?format=jpg)](https://design.withfudge.com/share/pin-578)

[Split feature cards showing Full Self-Driving interior view and Features That Come Standard with Model X and child, with blue and white buttons](https://design.withfudge.com/share/pin-578)

## Overview

Tesla's homepage presents a stark, confident visual system built on the principle that product photography should speak first and interface chrome should recede. The design employs a near-monochrome palette of pure black and white, with a single electric blue serving as the only saturated accent. Typography is handled entirely by Universal Sans—a clean, geometric sans-serif that carries weight through size and spacing rather than ornament. The layout favors full-bleed imagery, generous whitespace, and sharp rectangular panels with only subtle rounding. Navigation is minimal and persistent, appearing as thin text links that invert to a white background when expanded. The overall impression is one of precision engineering: every element feels calculated, nothing decorative exists without purpose, and the visual hierarchy is established through scale contrast rather than color complexity. The system must support dramatic product reveals, dense informational sections like charging network maps, and legal fine print with equal clarity.

## Colors

The color system is intentionally austere. Black and white form the entire foundation, with a single blue accent reserved for primary actions. Grays appear only for secondary text, borders, and subtle surface differentiation. No gradients or shadows are used as decorative elements; any depth comes from photography or the occasional functional shadow on floating panels.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, dark backgrounds, vehicle names, headlines on light surfaces |
| canvas | #ffffff | Page background, menu panels, button fills, text on dark imagery |
| muted-ink | #5c5c5c | Secondary text, legal disclaimers, placeholder text, footer links |
| surface | #f4f4f4 | Chat bar background, subtle elevated surfaces, input field backgrounds |
| action-primary | #3e6ae1 | Primary buttons, active states, Supercharger icon accents |
| action-primary-hover | #3457b2 | Hover state for primary actions |
| border | #d0d0d0 | Dividers, card borders, structural separators |
| border-subtle | #e2e2e2 | Hairline rules, input field borders, inactive states |

The interface operates in a light mode exclusively across the visible surfaces. Dark sections achieve contrast through photography and black backgrounds rather than a formal dark mode. The blue accent is disciplined: it appears only on buttons and the Supercharger icon, never as a background wash or decorative element. Photography introduces color warmth—skin tones, vehicle paint, landscape greens and blues—but these remain strictly within image content and do not bleed into UI tokens.

## Typography

All text is set in Universal Sans, designed by Briton Smith and distributed by Family Type. The family is available in Regular and Medium weights; the design uses weight and size to establish hierarchy without introducing additional weights or styles. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Universal Sans | 3rem | 500 | 1.1 | -0.01em | Major section headlines like "Find Your Charge" |
| section-display | Universal Sans | 2.5rem | 500 | 1.15 | -0.01em | Feature card headlines overlaid on photography |
| body | Universal Sans | 1rem | 400 | 1.5 | 0em | Descriptive paragraphs, navigation links |
| body-small | Universal Sans | 0.875rem | 400 | 1.5 | 0em | Vehicle model names, secondary descriptions |
| label | Universal Sans | 0.875rem | 500 | 1.25 | 0em | Button text, emphasized links, menu headers |
| navigation | Universal Sans | 0.875rem | 500 | 1.25 | 0em | Top bar links, mega-menu categories |
| legal-copy | Universal Sans | 0.75rem | 400 | 1.5 | 0em | Disclaimers, copyright, terms text |

Display sizes use tight negative tracking that gives headlines a compact, engineered feel. Body text maintains neutral tracking for readability. The type scale is built on a 4px grid: every size is a whole-number multiple of 0.25rem, creating a rational, predictable rhythm. No italic styles are employed; emphasis is achieved through weight shift or size change alone.

## Layout

The page structure follows a full-width, edge-to-edge philosophy with content constrained to a central maximum width. Sections stack vertically with generous vertical breathing room, creating distinct territories for each product story.

The top navigation bar is fixed and minimal, containing the Tesla wordmark on the left, centered category links (Vehicles, Energy, Charging, Discover, Shop), and utility icons on the right. When a category is activated, a mega-menu panel drops below the nav, spanning the full viewport width with a white background and subtle shadow. The menu interior uses a two-zone layout: product thumbnails with names and action links on the left, text-only navigation links on the right separated by a thin vertical rule.

Below the hero, content sections alternate between full-bleed photography with overlaid text and contained informational blocks. The charging network section pairs a large interactive map with headline statistics, using a split composition where the map dominates the upper portion and metrics sit below with the headline. Feature cards appear as side-by-side panels with rounded corners, each containing a background image, headline positioned in the lower-left, and action buttons at the bottom.

The footer is extremely compact: a legal disclaimer in small text, a centered row of utility links, and a floating chat support bar that sits just above the bottom edge. No heavy footer navigation or newsletter signup blocks the closure of the page.

Spacing follows a 4px base unit. Section padding is substantial—typically 5rem vertically—to let photography breathe. Component gaps of 1.5rem separate related elements. Horizontal margins are consistent, keeping content aligned to an invisible grid even when backgrounds extend full-bleed.

## Visual language

The visual character is defined by restraint and confidence. Every element serves the product narrative; nothing competes with it. Photography is always the dominant layer, with text and buttons positioned to avoid obscuring critical subject matter. The interface avoids decorative flourishes—no gradients, no animated backgrounds, no ornamental icons beyond functional symbols.

Buttons are sharp-edged rectangles with minimal rounding (0.25rem), appearing almost square but with enough radius to feel contemporary. Primary actions use the electric blue fill with white text; secondary actions invert to white fill with black text and a thin border. This two-button pattern repeats consistently across hero sections, feature cards, and informational blocks.

Iconography is sparse and functional. The top right carries a help icon, globe, and account silhouette. The charging section uses a red lightning bolt for Superchargers and a gray plug for Destination Chargers—simple, immediately legible symbols that need no label to communicate. The chat bar uses a speech bubble icon to indicate its interactive purpose.

Imagery treatment is straightforward: full-color photography, no filters or overlays beyond the occasional dark gradient at the bottom of cards to ensure text legibility. Vehicles are shown in three-quarter views or dramatic interior shots. The map visualization uses a desaturated base with high-contrast red and gray dots, making the network density immediately scannable.

The overall density is low. Even the mega-menu, which contains many links, maintains breathing room through thumbnail sizing and generous whitespace between text rows. The design trusts that users will scroll, and does not attempt to compress information into above-the-fold constraints.

## Components

### Primary Action Button

- **Anatomy**: Text label centered within a rectangular button
- **Surface and text color**: `{colors.action-primary}` background with `{colors.canvas}` text
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.button}` border radius
- **Spacing**: `{spacing.unit}` × 3 vertical padding, `{spacing.unit}` × 6 horizontal padding
- **Composition**: Typically paired with a secondary button, positioned at the bottom-left of hero or card content
- **Variants**: On dark imagery, may appear with increased contrast; hover shifts to `{colors.action-primary-hover}`

### Secondary Action Button

- **Anatomy**: Text label centered within a bordered rectangular button
- **Surface and text color**: `{colors.canvas}` background with `{colors.ink}` text, `{colors.border}` border
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.button}` border radius
- **Spacing**: Matches primary button dimensions
- **Composition**: Appears immediately adjacent to primary button, creating a binary choice pattern

### Feature Card

- **Anatomy**: Full-bleed background image with gradient overlay at bottom, headline text, one or two action buttons
- **Surface and text color**: Dark photographic background with `{colors.canvas}` text
- **Typography**: `{typography.section-display}` for headline, `{typography.label}` for buttons
- **Shape**: `{rounded.card}` border radius with overflow hidden
- **Spacing**: Internal padding of `{spacing.section}` from edges; buttons grouped with `{spacing.component-gap}`
- **Composition**: Two cards may appear side-by-side with `{spacing.component-gap}` between them, each occupying equal width
- **States**: Video content may show a pause control in the upper-right corner

### Mega-Menu Panel

- **Anatomy**: Full-width dropdown below navigation, divided into product grid and link list
- **Surface and text color**: `{colors.canvas}` background with `{colors.ink}` text
- **Typography**: `{typography.body-small}` for vehicle names, `{typography.navigation}` for category headers, `{typography.body}` for right-column links
- **Shape**: `{rounded.panel}` border radius on the panel itself
- **Spacing**: Generous internal padding; product thumbnails arranged in a grid with `{spacing.component-gap}` gutters
- **Composition**: Left zone shows 2×3 grid of vehicle images with names and Learn/Order links below each; right zone shows vertical stack of text links separated by `{spacing.unit}` × 2
- **Hierarchy**: Vehicle names in medium weight, action links in regular weight with underline on hover

### Chat Support Bar

- **Anatomy**: Horizontal bar with icon, prompt text, input placeholder, and send button
- **Surface and text color**: `{colors.surface}` background with `{colors.muted-ink}` text
- **Typography**: `{typography.body-small}` for prompt, `{typography.label}` for action
- **Shape**: `{rounded.panel}` border radius
- **Spacing**: Compact vertical padding, full-width within its container
- **Composition**: Positioned at the bottom of the page, often alongside a secondary action button

### Statistics Counter

- **Anatomy**: Large number with icon and label below
- **Surface and text color**: `{colors.ink}` numbers on `{colors.canvas}` background; icon in `{colors.action-primary}` or gray
- **Typography**: `{typography.hero-display}` for numbers, `{typography.body-small}` for labels
- **Composition**: Multiple counters arranged horizontally with substantial gap; icons positioned to the right of numbers

## Responsive behavior

The design is built for desktop viewport widths, with a content maximum width that prevents excessive line lengths. The two-column feature card layout should stack vertically on narrower viewports, with each card becoming full-width. The mega-menu product grid should reduce columns from three to two to one as space contracts, while the right-side link list may collapse into an accordion or move below the product grid.

The charging map section requires careful handling: the map should remain interactive and visible, with statistics moving below rather than beside on narrow screens. Button pairs should remain side-by-side where possible, but may stack if horizontal space is insufficient.

Navigation should collapse to a hamburger menu or simplified icon set on mobile, preserving the minimal chrome philosophy. The chat bar should remain accessible but may simplify to a floating action button rather than a full input field.

Typography should scale down proportionally: hero-display may reduce to 2rem, section-display to 1.75rem, maintaining the hierarchy while respecting smaller screens. Touch targets must remain at least 44px in any dimension.

## Practical implementation guidance

### Preserve
- The absolute minimalism of the color palette—resist adding secondary accents or decorative gradients
- The generous whitespace around photography; do not compress sections to fit more content
- The consistent button pairing pattern of primary blue plus secondary white
- The sharp, almost-square button corners with only slight rounding
- The negative tracking on display headlines for that engineered, compact feel

### Avoid
- Drop shadows on static elements; use only for floating panels like the mega-menu
- Rounded pill shapes for buttons; the design uses near-rectangular forms
- Decorative background patterns or textures behind text
- More than two button styles; the binary primary/secondary pattern is sufficient
- Color-coding beyond the single blue accent; status indicators should use icons or text

### Recommended Build Order
1. Establish the 4px spacing grid and type scale in Universal Sans
2. Implement the navigation bar with wordmark, centered links, and utility icons
3. Build the mega-menu panel with product grid and link list layout
4. Create the button component pair with exact colors and corner radii
5. Implement the feature card with image background, text overlay, and button positioning
6. Build the charging section with map container and statistics layout
7. Add the compact footer with legal text, links, and chat bar
8. Polish with hover states and transition timing

### Accessibility
- Ensure all text over photography meets WCAG contrast minimums; use gradient overlays or text shadows where necessary
- Provide visible focus indicators for keyboard navigation; the minimal design must not sacrifice accessibility
- Make the mega-menu escapable via Escape key and navigable via arrow keys
- Include alt text for all vehicle imagery that conveys model identification
- Ensure the interactive map has equivalent text information for screen reader users
- Maintain touch target sizes of at least 44×44px for all interactive elements

## Scope note

This guide covers the Tesla homepage visible in the supplied images, including navigation, vehicle showcase, feature cards, charging network information, and footer. Interior pages, vehicle configurators, account flows, and mobile-specific layouts are not represented. Motion design, loading states, and form validation patterns are not documented. Measurements are practical adaptation targets derived from visual inspection of the desktop interface.
