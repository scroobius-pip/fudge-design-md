# How pangrampangram.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/pangrampangram.com-design)

Last updated: 2026-08-10

## Captured pages

[![Eiko product page showing style list with Thin to Light Italic variants in light gray rounded cards, black preview area, and orange accent numerals](https://pin.fontofweb.com/9783?format=jpg)](https://design.withfudge.com/share/pin-9783)

[Eiko product page showing style list with Thin to Light Italic variants in light gray rounded cards, black preview area, and orange accent numerals](https://design.withfudge.com/share/pin-9783)

[![Neue Montreal product page featuring a dark carousel with metallic 3D chain imagery, white text overlay, and orange Branding pill badge](https://pin.fontofweb.com/8534?format=jpg)](https://design.withfudge.com/share/pin-8534)

[Neue Montreal product page featuring a dark carousel with metallic 3D chain imagery, white text overlay, and orange Branding pill badge](https://design.withfudge.com/share/pin-8534)

[![Neue Montreal Glyphs Set tab showing uppercase and lowercase letter grid in rounded light gray cells with selected glyph highlighted in black](https://pin.fontofweb.com/8533?format=jpg)](https://design.withfudge.com/share/pin-8533)

[Neue Montreal Glyphs Set tab showing uppercase and lowercase letter grid in rounded light gray cells with selected glyph highlighted in black](https://design.withfudge.com/share/pin-8533)

[![Neue Montreal glyph detail view with large white letter I on black background showing ascender, cap height, x-height, baseline, and descender metrics](https://pin.fontofweb.com/8532?format=jpg)](https://design.withfudge.com/share/pin-8532)

[Neue Montreal glyph detail view with large white letter I on black background showing ascender, cap height, x-height, baseline, and descender metrics](https://design.withfudge.com/share/pin-8532)

## Overview

Pangram Pangram's website is a type-centric showcase built around the dramatic presentation of fonts. The design system employs a stark, high-contrast visual language where black and white dominate, punctuated by a warm, aggressive orange that signals action and energy. The interface functions as both a catalog and a specimen viewer, with product pages organized into tabbed sections that let designers explore styles, glyph sets, variable axes, features, and font pairings.

The visual hierarchy relies on extreme scale contrasts. Massive display type—often set at sizes exceeding 80 pixels—anchors hero sections and specimen previews, while compact 14-pixel functional text handles navigation, labels, and metadata. This tension between monumental typography and restrained UI elements creates a gallery-like atmosphere where the fonts themselves become the artwork. Rounded corners appear throughout, from pill-shaped buttons to soft-cornered cards and circular glyph cells, lending a contemporary, approachable quality to an otherwise austere palette.

## Colors

The color system is intentionally minimal, built on a near-monochrome foundation with a single warm accent. Black serves as the primary surface for dramatic previews and active states, while a progression of warm grays provides subtle hierarchy for cards, borders, and backgrounds. The orange accent appears sparingly but decisively, reserved for primary actions, active navigation states, and numerical highlights.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, active glyph cells, dark preview panels, primary backgrounds |
| ink-secondary | #151515 | Near-black for subtle depth on dark surfaces |
| ink-tertiary | #282828 | Dark gray for secondary text on light backgrounds |
| muted-ink | #666666 | Tertiary text, disabled states, metadata |
| border | #ABABAB | Hairline borders, dividers, inactive controls |
| surface | #D0D0D0 | Mid-gray for inactive or secondary surfaces |
| surface-light | #D9D9D9 | Light gray for hover states on interactive elements |
| canvas | #EDEDED | Card backgrounds, glyph cells, style list items |
| canvas-warm | #FAFAFA | Page background, header bar, lightest surface |
| action | #FF2F00 | Primary buttons, active navigation, accent numerals, badges |
| action-warm | #FFB700 | Secondary warm accent for gradients or highlights |
| white | #FFFFFF | Text on dark surfaces, inverted buttons, glyph preview characters |

The warm gray scale from #FAFAFA to #000000 creates a cohesive tonal range that avoids the sterility of pure neutral grays. Dark surfaces use pure black with white text for maximum contrast in specimen previews, while light surfaces use the warm canvas tones to keep the interface feeling tactile and paper-like. The orange accent (#FF2F00) is reserved for interactive emphasis—appearing in "Buy Now" buttons, active tab underlines, weight numerals in style lists, and category badges—ensuring it retains its signaling power.

## Typography

The typographic system is built on PP Neue Montreal as the primary functional and display typeface, with Eiko providing an elegant serif contrast for product-specific moments. Several display families from the foundry's catalog appear in promotional contexts. The scale spans from 12.4448-pixel labels to 134.4-pixel monumental display, with most functional text locked at 14 pixels.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | PP Neue Montreal | 8.4rem | 530 | 1 | normal | Monumental specimen previews, massive single glyphs |
| section-display | PP Neue Montreal | 5.25rem | 530 | 1 | normal | Large section headings, variable axis demonstrations |
| large-display | PP Neue Montreal | 3.5rem | 530 | 1.1 | normal | Medium display, paired font showcases |
| body-large | PP Neue Montreal | 2.06rem | 530 | 1.3 | normal | Glyph grid cells, style list names |
| body | PP Neue Montreal | 0.875rem | 450 | 1.3 | normal | Navigation, body copy, descriptions |
| body-small | PP Neue Montreal | 0.7775rem | 450 | 1.3 | normal | Metadata, captions, secondary labels |
| label | PP Neue Montreal | 0.7775rem | 450 | 1.166 | normal | Button text, compact UI labels |
| label-small | PP Neue Montreal | 0.7775rem | 600 | 1.3 | normal | Badges, emphasis labels, active states |
| navigation | PP Neue Montreal | 0.875rem | 450 | 1.3 | normal | Header links, tab navigation |
| display-serif | Eiko | 3.889rem | 100 | 1 | normal | Product page display, elegant headlines |
| body-serif | Eiko | 1.4016rem | 200 | 1.3 | normal | Style list items, serif specimen text |
| display-corp | PP Neue Corp | 4.2rem | 400 | 1 | normal | Homepage promotional display |
| display-watch | PP Watch | 4.2rem | 485 | 1 | normal | Homepage promotional display, alternate weight |

PP Neue Montreal, designed by Mathieu Desjardins for Pangram Pangram Foundry, serves as the system's backbone with its variable weight axis enabling precise control from 450 to 700. Eiko, used at light weights (100–200), provides delicate contrast for serif product pages. PP Neue Corp and PP Watch appear in homepage hero contexts at 67.2 pixels. The foundry's broader catalog includes PP Kyoto by Caio Kondo, PP Lettra Mono by Francesca Bolognini and Mat Desjardins, PP Model Plastic by Caio Kondo, PP Mondwest by Steve Marchal Datalaze, PP Monument-Narrow, PP Museum, PP Neue Bit by Steve Marchal Datalaze, PP Neue Corp-Normal Medium by Maksym Kobuzan, PP Neue Montreal-Variable by Mathieu Desjardins, and PP Valve. SF Pro appears in the Eiko page header. Verify licensing for these families before production use.

## Layout

The layout system favors generous whitespace and clear sectional division. Product pages follow a consistent tabbed architecture with a fixed header containing navigation, product identity, and primary actions. Content areas below scroll independently, with section margins of 128 pixels top and 32 pixels bottom creating rhythmic breathing room.

The header bar spans full width with 8 pixels vertical padding, establishing a compact but present top anchor. Below, tab navigation sits flush or slightly offset, with active states marked by color change rather than underline. Content sections employ asymmetric two-column layouts for glyph exploration: a dense grid of selectable cells on the left, a large preview panel on the right. This split-view pattern prioritizes browsing density while maintaining focus on the selected item.

Cards and containers use 20-pixel rounded corners as a default, with 32-pixel internal padding creating comfortable inset. Full-bleed dark panels for specimen previews contrast against the light page background. The glyph grid uses a unique 35% border-radius, creating soft squircle shapes that feel between circular and rounded-rectangular. Pill shapes at 9999 pixels radius appear for buttons, badges, and variable axis controls.

Horizontal margins vary by context: 90 pixels for centered content blocks, 32 pixels for standard container padding, and 188 pixels for maximum-width centered sections. The system avoids rigid grids in favor of fluid, content-driven spacing that responds to the scale of the type being displayed.

## Visual language

The visual language balances brutalist clarity with warm materiality. Black and white establish a gallery-like neutrality that lets the fonts command attention, while the warm gray surfaces and rounded corners prevent the interface from feeling cold or institutional. The orange accent functions as a signature color—appearing in the "Buy Now" button, active tab states, weight numerals, and category badges—creating a consistent thread of energy through otherwise restrained pages.

Photography and 3D imagery appear in project showcases, typically presented in rounded containers with dark overlays for text legibility. The "Neue Montreal in use" section demonstrates this pattern: a full-bleed carousel with metallic imagery, white text overlay, and an orange "Branding" badge floating above. This treatment elevates client work while maintaining the site's typographic focus.

The specimen viewer represents the core interactive expression of the brand. A black preview panel with white type, metric lines for ascender, cap height, x-height, baseline, and descender, and precise numerical readouts embodies the foundry's technical authority. The variable axis controls—sliders for weight and italic with numerical feedback—extend this precision into interaction design.

Glyph cells in the grid use a distinctive soft-square shape (35% radius) with light gray backgrounds, inverting to black with white text when selected. This binary on/off state mirrors the site's broader high-contrast philosophy. The overall impression is of a tool made by designers for designers: rigorous, beautiful, and unafraid of dramatic scale.

## Components

### Header Bar

- Anatomy: Full-width bar containing home icon, product name pill, tab navigation, primary actions, and utility icons
- Surface: Background `{colors.canvas-warm}`, text `{colors.ink}`
- Typography: `{typography.navigation}` for all text elements
- Shape: Product name rendered in pill-shaped container with white background and rounded corners
- Spacing: 8 pixels vertical padding, horizontal distribution with center-aligned tabs and right-aligned actions
- Composition: Flex row with space-between logic; tabs centered, actions grouped right

### Primary Action Button

- Anatomy: Text label within fully rounded container
- Surface: Background `{colors.action}`, text `{colors.white}`
- Typography: `{typography.label}`
- Shape: Pill shape at 9999 pixels radius
- Spacing: 8 pixels vertical, 24 pixels horizontal padding
- Variants: "Buy Now" uses filled orange; "Try for Free" uses outlined black variant

### Secondary Action Button

- Anatomy: Text label within rounded container with border
- Surface: Transparent background, `{colors.ink}` text and border
- Typography: "{typography.label}"
- Shape: 20 pixels radius
- Spacing: 8 pixels vertical, 16–24 pixels horizontal padding
- States: Hover inverts to filled black with white text

### Style List Card

- Anatomy: Style name left-aligned, weight numeral right-aligned, within rounded container
- Surface: Background `{colors.canvas}`, text `{colors.ink}`; active variant uses `{colors.ink}` background with `{colors.white}` text
- Typography: `{typography.body-serif}` for style name, `{typography.label-small}` in `{colors.action}` for numeral
- Shape: 20 pixels radius
- Spacing: 22.953 pixels padding
- Composition: Two-column grid with alternating light and dark variants for visual rhythm

### Glyph Cell

- Anatomy: Single character centered within soft-square container
- Surface: Background `{colors.canvas}`, text `{colors.ink}`; active state uses `{colors.ink}` background with `{colors.white}` text
- Typography: `{typography.body-large}` for character display
- Shape: 35% border-radius creating squircle appearance
- Spacing: Generous internal padding for touch targets
- Composition: Grid layout with consistent gaps

### Glyph Preview Panel

- Anatomy: Large dark panel containing single glyph at monumental scale with metric annotations
- Surface: Background `{colors.ink}`, text `{colors.white}`
- Typography: Hero-scale display at 134.4 pixels or 84.1165 pixels depending on context
- Shape: 20 pixels radius
- Spacing: 32 pixels padding
- Composition: Glyph centered with metric lines (ascender, cap height, x-height, baseline, descender) marked with dotted rules and numerical values

### Variable Axis Control

- Anatomy: Slider track with draggable handle, numerical readout, and axis label
- Surface: White track on black background for contrast
- Typography: `{typography.label}` for axis name, `{typography.body-small}` for value
- Shape: Pill-shaped track container
- Composition: Paired controls for weight and italic axes, horizontally arranged

### Project Showcase Card

- Anatomy: Full-bleed image with dark overlay, category badge, project title, and action link
- Surface: Image with black gradient overlay, white text
- Typography: `{typography.body}` for title, `{typography.label}` for action
- Shape: 20 pixels radius for card container
- Spacing: Internal padding for text placement at bottom
- Composition: Badge positioned top-center, title and link centered or bottom-aligned

## Responsive behavior

The system appears optimized for desktop viewing with substantial horizontal real estate. The two-column glyph explorer, large specimen previews, and generous section margins all assume a wide viewport. On narrower screens, the glyph grid should reflow to fewer columns, the preview panel should stack below the grid, and the monumental display sizes should scale down proportionally.

The tab navigation in the header may collapse to a horizontal scroll or hamburger menu on mobile. Variable axis controls should remain accessible but may stack vertically. The 188-pixel centered margins should reduce to 32 pixels or the standard container padding on mobile. Touch targets for glyph cells must maintain minimum 44-pixel dimensions regardless of viewport.

## Practical implementation guidance

### Preserve
- The stark black/white/orange color hierarchy—this tripartite system is the brand's signature
- Monumental display type in specimen previews; the scale contrast is central to the experience
- Rounded corners throughout: 20 pixels for cards, 9999 pixels for pills, 35% for glyph cells
- The warm gray progression from #FAFAFA to #000000 rather than pure neutral grays
- Binary active states: black background with white text for selected items

### Avoid
- Introducing additional accent colors beyond the orange; the restraint is intentional
- Sharp corners on interactive elements; the rounded language is consistent
- Body text smaller than 14 pixels or larger than 22.4256 pixels for functional content
- Gray text on gray backgrounds; maintain minimum contrast ratios
- Decorative elements that compete with the type specimens

### Recommended Build Order
1. Establish the color foundation with the full warm gray scale and orange accent
2. Implement PP Neue Montreal at 14 pixels/450 weight for all navigation and UI text
3. Build the header component with product pill, tab navigation, and action buttons
4. Create the card system with 20-pixel radius and 32-pixel padding
5. Implement the glyph grid with 35% radius cells and binary selection states
6. Build the specimen preview panel with black background and white display type
7. Add variable axis controls with pill-shaped sliders
8. Integrate Eiko for serif product page contexts

### Accessibility
- Ensure 4.5:1 contrast minimum for all body text; the black-on-white and white-on-black pairings exceed this
- Provide visible focus indicators for keyboard navigation through glyph grids and tab interfaces
- Make variable axis controls operable via keyboard and screen reader accessible with live region announcements for value changes
- Include aria-labels for icon-only buttons in the header (search, cart, menu)
- Respect reduced-motion preferences for any carousel or slider animations
- Ensure touch targets for glyph cells meet 44-pixel minimum dimensions

## Scope note

This guide covers the product page and specimen viewer surfaces for Pangram Pangram's font catalog, including the Eiko and Neue Montreal product experiences. Homepage promotional layouts, account pages, checkout flows, and mobile-specific adaptations are not represented in the supplied material. The 35% border-radius value for glyph cells and the 2-pixel relative unit step for type scaling should be verified against production requirements.
