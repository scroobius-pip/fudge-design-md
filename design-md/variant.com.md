# How variant.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/variant.com-design)

Last updated: 2026-08-10

## Captured pages

[![Community grid showing diverse generated designs including BRANDSYS album cover, architecture analysis engine dashboard, and radial spiral matrix with floating prompt bar](https://pin.fontofweb.com/8763?format=jpg)](https://design.withfudge.com/share/pin-8763)

[Community grid showing diverse generated designs including BRANDSYS album cover, architecture analysis engine dashboard, and radial spiral matrix with floating prompt bar](https://design.withfudge.com/share/pin-8763)

[![Chat interface with dark background showing search status messages and design exploration progress indicators](https://pin.fontofweb.com/8046?format=jpg)](https://design.withfudge.com/share/pin-8046)

[Chat interface with dark background showing search status messages and design exploration progress indicators](https://design.withfudge.com/share/pin-8046)

[![Community page with pricing modal overlay displaying Free, Pro, and Business tiers against design grid backdrop](https://pin.fontofweb.com/7234?format=jpg)](https://design.withfudge.com/share/pin-7234)

[Community page with pricing modal overlay displaying Free, Pro, and Business tiers against design grid backdrop](https://design.withfudge.com/share/pin-7234)

[![Empty new design canvas with dashed placeholder frames, left sidebar navigation, and bottom prompt input with suggestion chips](https://pin.fontofweb.com/6386?format=jpg)](https://design.withfudge.com/share/pin-6386)

[Empty new design canvas with dashed placeholder frames, left sidebar navigation, and bottom prompt input with suggestion chips](https://design.withfudge.com/share/pin-6386)

## Overview

Variant presents a dark-first environment built around AI-generated design exploration. The interface immerses users in a near-black canvas where generated designs appear as luminous objects against the void. White typography provides crisp readability without competing with the colorful design outputs. The platform organizes content in flexible grids and floating surfaces, with a persistent bottom input bar that anchors the creative workflow. Navigation collapses to a minimal left rail, freeing horizontal space for design previews. The overall impression is of a professional creative tool—restrained in its chrome, generous in its output area, and precise in its spacing.

## Colors

The color system operates on extreme contrast: near-black backgrounds against pure white text, with a single vibrant green accent for positive actions and status indicators.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, empty states, chat interfaces |
| surface | #1A1A1A | Elevated cards, modal backgrounds, input bars |
| surface-elevated | #222222 | Hover states, secondary surfaces, pricing tier cards |
| surface-highlight | #444444 | Tertiary buttons, subtle interactive backgrounds |
| ink | #FFFFFF | Primary text, icons, borders on dark buttons |
| ink-muted | #A0ECB3 | Secondary text, discount badges, subtle status |
| action | #48E364 | Primary action indicators, success states, launch discounts |
| border-subtle | #1E1E1C | Hairline dividers, inset borders on elevated surfaces |

The dark canvas absorbs visual complexity from generated designs, letting user-created content become the focal point. White ink maintains accessibility across all background depths. The green accent appears sparingly—primarily for pricing highlights and positive feedback—preventing it from overwhelming the creative output. Subtle borders use a slightly lighter black to create depth without introducing visible lines.

## Typography

The type system relies on Inter for all interface text, with Arial serving button labels at a single small size. Weights stay in the 400-500 range, creating hierarchy through size and spacing rather than boldness.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| display | Inter | 2.25rem | 400 | 1 | -0.02em | Large headings, pricing plan names |
| body | Inter | 1rem | 400 | 1.5 | 0em | Primary interface text, descriptions |
| body-small | Inter | 0.875rem | 400 | 1.375 | 0em | Secondary descriptions, chat messages |
| label | Inter | 0.75rem | 400 | 1 | 0.01em | Small labels, status text, metadata |
| label-medium | Inter | 0.8125rem | 500 | 1 | 0em | Navigation items, emphasized labels |
| button | Arial | 0.8125rem | 400 | 1 | 0em | Button labels, action text |

Display text uses tight leading and negative tracking for impactful headings. Body text maintains generous line height for readability in longer descriptions. The label tokens handle dense information hierarchies in cards and lists. Button typography uses Arial at a slightly smaller size than body text, creating a distinct functional voice. Verify licensing for these families before production use.

## Layout

The interface follows a three-zone structure: a collapsible left navigation rail, a central content area for design grids or chat history, and a persistent bottom input surface.

The left rail occupies a narrow fixed width, containing icon-only navigation with tooltips. Icons stack vertically with comfortable spacing, keeping the rail scannable without labels. The central zone expands to fill available viewport width, presenting content in responsive grids or continuous scroll columns. On community pages, designs appear in a masonry-style arrangement with consistent gaps. In chat views, messages stack vertically with clear sender attribution.

The bottom input bar spans the full viewport width, floating above content with a subtle shadow. It contains a text field, attachment triggers, and submit controls. Suggestion chips appear above the bar on empty states, offering starting points for new users.

Modals and overlays center in the viewport with backdrop dimming. The pricing modal demonstrates this pattern: a rounded container with internal grid layout, elevated above the community page behind it. Padding inside containers follows a consistent rhythm—tight internal spacing for compact elements, comfortable spacing for readable text blocks, and large spacing for section breaks.

## Visual language

The visual language prioritizes the generated content over interface decoration. Surfaces are flat, borders are minimal or absent, and shadows appear only when elevation is functionally necessary.

Cards displaying designs use rounded corners at 10px, creating soft containers that contrast with the sharp edges of the design work inside. Buttons range from 6px to 7px radius, with pill-shaped variants for tags and filters. The input bar uses larger rounding to feel approachable and distinct from content surfaces.

Shadows appear in two contexts: subtle inset borders on elevated surfaces using white at low opacity, and dramatic depth shadows for floating modals using layered black shadows with decreasing opacity and increasing blur. This creates a sense of physical elevation without visible borders.

Generated designs introduce the only color variety in the interface. The platform handles this by keeping all chrome neutral—black, white, and gray—so that user content reads as the true color layer. Even the green accent is desaturated enough to feel functional rather than decorative.

## Components

### Design card

Anatomy: Preview image, optional metadata overlay, creator attribution, interaction buttons.

Surface: Transparent background on grid, #1A1A1A when elevated or in detail view. No visible border.

Typography: Creator name uses label-medium; metadata uses label.

Shape: 10px radius corners.

Spacing: 8px internal padding for metadata overlays. Grid gaps at 8px or 16px depending on density.

Composition: Images fill the card frame with object-fit cover. Metadata appears as an overlay on hover or persistently at the bottom edge.

Variants: Community grid cards are larger with more metadata. Chat result cards are compact, often stacked vertically.

### Input bar

Anatomy: Text field, attachment button, submit button, optional suggestion chips above.

Surface: #1A1A1A background with subtle border. Suggestion chips use transparent backgrounds with 1px white borders at low opacity.

Typography: Placeholder text uses body-small in muted white. Active input uses body.

Shape: Large rounded corners, approximately 8px for the bar, 6px for suggestion chips.

Spacing: Comfortable internal padding. Suggestion chips stack with 8px vertical gaps.

Composition: Fixed to bottom of viewport. Full width with internal max-width constraint for content.

### Pricing modal

Anatomy: Header with toggle, three tier columns, feature lists, action buttons.

Surface: #1A1A1A modal background with backdrop dimming. Tier cards use #222222 for differentiation.

Typography: Plan names use display. Prices use body with accent color for discounts. Features use body-small.

Shape: 16px radius for modal container. 6px radius for buttons.

Spacing: Comfortable padding between tiers. Generous vertical spacing in feature lists.

Composition: Three-column grid on desktop, stacking on narrow viewports. Toggle centered above columns.

### Navigation rail

Anatomy: Icon buttons stacked vertically, with active state indicator.

Surface: Transparent, blending with canvas.

Typography: None visible; icons are self-explanatory or use tooltips.

Shape: Square touch targets with generous padding.

Spacing: Compact vertical spacing between items.

Composition: Fixed left edge, full viewport height. Icons align to a consistent grid.

### Button

Anatomy: Text label, optional icon, background fill.

Surface: Primary buttons use #444444. Secondary buttons use transparent with white border. Ghost buttons use transparent with white text only.

Typography: Arial at 13.3333px for standard buttons; Inter at 12px with 0.12px tracking for small icon buttons.

Shape: 6px to 7px radius depending on size.

Spacing: 0px 10px 0px 8px for icon+text variants; 0px 12px for text-only.

Variants: Filled, outlined, ghost. Small icon buttons appear in card toolbars.

## Responsive behavior

The layout adapts primarily through grid density changes. Community pages show fewer columns on narrower viewports, maintaining card size rather than shrinking previews. The left navigation rail may collapse to a bottom bar on mobile, though this pattern is not confirmed in the supplied images.

The input bar remains fixed at all sizes, ensuring persistent access to the core creation flow. Modal overlays should transition to full-screen on small viewports to preserve readable column layouts in the pricing view.

Text sizes remain fixed across breakpoints, relying on the generous canvas to maintain readability. Display text may scale down on mobile to prevent overflow in pricing plan names.

## Practical implementation guidance

### Preserve
- The extreme dark canvas as the default state; light modes should be carefully considered as they invert the platform's core identity
- The floating input bar pattern; it anchors the user workflow and distinguishes Variant from traditional design tools
- The neutral chrome palette; any additional colors should come from user-generated content
- The generous rounding on primary surfaces versus tight rounding on small controls

### Avoid
- Adding decorative gradients or textures to the canvas; the flat black is intentional
- Using the green accent for non-action purposes; reserve it for success, pricing highlights, and positive feedback
- Introducing heavy borders between cards; rely on spacing and subtle shadows instead
- Shrinking card previews to fit more columns; reduce column count instead

### Recommended build order
1. Establish the dark canvas and Inter typography base
2. Implement the bottom input bar with suggestion chips
3. Build the design card component with hover metadata overlay
4. Create the responsive grid system for community pages
5. Add the navigation rail with icon states
6. Implement modal system with backdrop and elevation shadows
7. Polish button variants and micro-interactions

### Accessibility
- Maintain 4.5:1 contrast minimum for all text; the white-on-black pairing exceeds this
- Ensure input bar remains reachable via keyboard when content scrolls
- Provide visible focus indicators on icon buttons in the navigation rail
- Add aria-live regions for chat status messages and generation progress
- Consider reduced-motion preferences for modal transitions and hover effects

## Scope note

This guide covers the community browsing, chat interface, pricing, and new design canvas surfaces visible in the supplied images. Mobile layouts, animation specifications, and design generation internals are not included. The exact spacing values reflect the retained interface measurements; adapt as needed for responsive contexts.
