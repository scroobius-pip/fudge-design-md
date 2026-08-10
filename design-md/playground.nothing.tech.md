# How playground.nothing.tech is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/playground.nothing.tech-design)

Last updated: 2026-08-10

## Captured pages

[![Grid of community app cards with pixel-art previews on light gray background, showing titles like WEEKEND DRINK ROULETTE and CRYPTO TRACKER with heart counts and creator avatars.](https://pin.fontofweb.com/8564?format=jpg)](https://design.withfudge.com/share/pin-8564)

[Grid of community app cards with pixel-art previews on light gray background, showing titles like WEEKEND DRINK ROULETTE and CRYPTO TRACKER with heart counts and creator avatars.](https://design.withfudge.com/share/pin-8564)

[![Essential Apps Beta page header with Ndot logo, serif page title, sort dropdown, and grid of app preview cards including HALLEY'S TRACKER and WINDOW with dot-matrix displays.](https://pin.fontofweb.com/8563?format=jpg)](https://design.withfudge.com/share/pin-8563)

[Essential Apps Beta page header with Ndot logo, serif page title, sort dropdown, and grid of app preview cards including HALLEY'S TRACKER and WINDOW with dot-matrix displays.](https://design.withfudge.com/share/pin-8563)

[![Builder interface with left sidebar containing tools and right canvas showing phone mockup with widget layout on dotted grid background.](https://pin.fontofweb.com/8562?format=jpg)](https://design.withfudge.com/share/pin-8562)

[Builder interface with left sidebar containing tools and right canvas showing phone mockup with widget layout on dotted grid background.](https://design.withfudge.com/share/pin-8562)

[![Homepage hero with floating widget previews, serif headline "Come to play with Essential", yellow CTA button, and Essential Apps section with card grid.](https://pin.fontofweb.com/8560?format=jpg)](https://design.withfudge.com/share/pin-8560)

[Homepage hero with floating widget previews, serif headline "Come to play with Essential", yellow CTA button, and Essential Apps section with card grid.](https://design.withfudge.com/share/pin-8560)

## Overview

Nothing Playground is a widget-building platform that merges technical precision with expressive, pixel-art aesthetics. The interface presents a restrained monochromatic foundation—near-black ink on warm gray canvas—punctuated by vibrant yellow accents and the distinctive visual language of dot-matrix displays. The system serves two primary contexts: a browsing experience where users discover community-created widgets, and a builder experience where users assemble custom homescreen layouts.

The design's character emerges from the tension between its typographic voices: N Type 82 provides elegant, editorial serif display typography for headlines and section titles, while Geist Mono handles all functional, data-dense interface text with mechanical clarity. Ndot, a dot-matrix style face, appears in the brand mark and select labels, reinforcing the platform's connection to LED and pixel displays. This three-type hierarchy creates a rhythm that feels simultaneously sophisticated and technical, editorial and engineered.

Visual density is intentionally low. Cards float on generous whitespace, borders are hairline-thin, and the builder canvas employs a subtle dotted grid that suggests precision without imposing rigidity. Widget previews within cards use true black backgrounds with high-contrast white or colored pixel elements, creating dramatic focal points against the light interface.

## Colors

The palette is fundamentally monochromatic with a single warm accent. Black serves as the primary surface for widget content and the deepest ink, while a family of warm grays handles all structural UI. The yellow accent appears sparingly, reserved for primary actions and highlight states.

| token | value | use |
|---|---|---|
| ink | #1C1C1C | Primary text, widget backgrounds, deepest surfaces |
| ink-secondary | #484848 | Secondary text, card metadata |
| ink-tertiary | #606060 | Tertiary labels, disabled states |
| muted | #777777 | Placeholder text, subtle annotations |
| canvas | #F2F2F2 | Page background, builder canvas base |
| surface | #E5E5E5 | Card backgrounds, elevated containers |
| surface-raised | #FFFFFF | Dropdown menus, modal backgrounds, widget content areas |
| border | #E3E3E3 | Card borders, dividers, subtle boundaries |
| border-subtle | #C8C8C8 | Grid lines, inactive states |
| accent-yellow | #FFC700 | Primary buttons, active indicators, highlight badges |

The color logic follows a clear hierarchy: content lives on white or near-white, structure sits on warm gray, and the most expressive elements—widget previews—invert to true black with luminous content. The yellow accent derives from the LED/dot-matrix aesthetic visible in widget previews, creating continuity between interface actions and the content being created. No dark mode is visible in the supplied material; the system appears optimized for light environments where the black widget previews create deliberate contrast.

## Typography

Four type families are supplied for the system: N Type 82, N Type 82-Headline, Geist Mono, and Ndot. N Type 82 and N Type 82-Headline (both designed by Colophon Foundry) provide editorial weight for headlines, with N Type 82-Headline available for heavier display treatments. Geist Mono (designed by Basementstudio, Andrés Briganti, Mateo Zaragoza; available via Vercel) handles all functional interface text. Ndot (designed by Colophon Foundry) serves the brand mark and select dot-matrix labels.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | N Type 82 | 2.75rem | 400 | 1 | normal | Page headlines, hero statements |
| section-display | N Type 82 | 1.5rem | 400 | 1 | normal | Section titles, card group headers |
| body | Geist Mono | 0.75rem | 400 | 1.5 | normal | Default interface text, descriptions |
| body-medium | Geist Mono | 0.75rem | 500 | 1.5 | normal | Emphasized body, button labels |
| body-large | Geist Mono | 0.875rem | 400 | 1.43 | normal | Larger functional text, navigation |
| label | Geist Mono | 0.75rem | 400 | 1.4 | normal | Card titles, metadata, captions |
| label-medium | Geist Mono | 0.75rem | 500 | 1.5 | normal | Active labels, selected states |
| navigation | Ndot | 1rem | 400 | 1 | normal | Brand mark, dot-matrix headers |

N Type 82 appears at 44px for hero statements and 24px for section headings, with a weight of 400 (Regular) or 100 (Thin) depending on context. The family's tight leading (1.0) and classical proportions create an editorial presence that contrasts with the technical voice of Geist Mono. Geist Mono operates primarily at 12px for dense information and 14px for more legible functional text, with weights of 400 (Regular) and 500 (Medium) distinguishing hierarchy within the same size. Ndot at 16px serves as a display alternative with its distinctive dot-matrix construction. N Type 82-Headline does not appear in the visible token assignments but is available for heavier display treatments beyond the current scope.

Verify licensing for these families before production use. Geist Mono is available through Vercel's open-source distribution; N Type 82, N Type 82-Headline, and Ndot require direct licensing from Colophon Foundry.

## Layout

The layout system is built on a 2px relative unit (0.125rem), enabling fine-grained control while maintaining clean multiples. The page structure employs generous margins and a card-based content architecture.

The browsing experience uses a responsive grid of app cards, each containing a widget preview, title, creator attribution, and engagement metrics. Cards are arranged in rows with consistent 1rem gaps, creating a masonry-like rhythm where widget previews of varying heights determine card proportions. The grid appears to use four columns on desktop, collapsing responsively.

The builder interface splits into a fixed left sidebar and an expansive right canvas. The sidebar contains tool icons, action buttons, and property panels, while the canvas presents a phone mockup centered on a dotted grid background. This grid uses 1px dots at regular intervals, providing spatial reference without visual heaviness. The phone mockup floats at approximately 40% of canvas width, leaving ample workspace for dragging and positioning widgets.

Spacing follows a compact but breathable scale:

| token | value | use |
|---|---|---|
| unit | 0.25rem | Base increment |
| card-padding | 1rem | Internal card spacing |
| card-gap | 1rem | Between cards in grid |
| section | 2rem | Between major sections |
| page-margin | 2rem | Horizontal page padding |

The builder sidebar uses vertical stacking with 0.5rem gaps between tools. Buttons within cards and toolbars receive 0.5rem vertical and 1.5rem horizontal padding for compact but tappable targets.

## Visual language

The visual identity centers on the dot-matrix aesthetic—visible in the Ndot typeface, the LED-style widget previews, and the builder's dotted canvas grid. This motif connects the platform's purpose (creating pixel-perfect widget displays) with its interface language.

Widget previews are the system's most expressive elements. They employ true black backgrounds (#000000) with high-contrast content: white text, colored pixels, and occasional yellow accents. The previews simulate physical display hardware—LED arrays, e-ink screens, and segmented displays—creating a gallery of technical artifacts against the soft gray interface. This inversion (black content on light UI) creates dramatic visual anchors that draw scanning attention.

The monochromatic interface palette ensures these widget previews remain the focal point. No photography appears in the UI chrome; all color and texture lives within user-generated content. Borders are consistently 1px hairlines in warm gray, creating subtle definition without shadow or elevation effects.

The brand mark uses Ndot in all-caps, rendered small in the header, reinforcing the technical heritage. Navigation elements favor iconography over text where possible, with Geist Mono providing supplementary labels.

## Components

### App Card

The primary content unit for browsing and discovery.

- **Anatomy**: Container with rounded corners, internal padding, and optional border. Contains: widget preview area (centered, variable height), title row (app name left, heart count right), creator attribution row (avatar and username).
- **Surface**: Background `{colors.surface}` or `{colors.surface-raised}`; border `{colors.border}` at 1px when elevated.
- **Typography**: Title uses `{typography.label}` in `{colors.ink-secondary}`; metadata uses `{typography.body}` in `{colors.muted}`.
- **Shape**: 16px border radius; 16px internal padding.
- **Spacing**: 1rem gap between cards in grid; 12px vertical spacing between internal elements.
- **Composition**: Widget preview centered with generous vertical breathing room; text rows align to baseline.

### Widget Preview

The simulated display within app cards and the builder canvas.

- **Anatomy**: Rounded rectangle with true black background. Contains pixel-art or dot-matrix content: text, icons, data visualizations, or interactive elements.
- **Surface**: Background `#000000`; content in white, yellow, or colored pixels.
- **Typography**: Uses Ndot or pixel-equivalent for dot-matrix text; Geist Mono for simulated data readouts.
- **Shape**: 16px border radius, matching card radius.
- **Composition**: Content centered or edge-aligned depending on widget type; maintains aspect ratio appropriate to phone widget dimensions.

### Primary Button

The main call-to-action, distinguished by yellow fill.

- **Anatomy**: Pill-shaped button with text label and optional icon.
- **Surface**: Background `{colors.accent-yellow}`; text `{colors.ink}`.
- **Typography**: `{typography.body-medium}` at 14px.
- **Shape**: Full pill (9999px radius); 8px vertical, 32px horizontal padding.
- **Variants**: Full-width in modals; inline in headers.

### Secondary Button

Alternative action with outlined treatment.

- **Anatomy**: Pill-shaped button with border.
- **Surface**: Background transparent or white; border `{colors.border}`; text `{colors.ink-secondary}`.
- **Typography**: `{typography.body}`.
- **Shape**: Full pill; 8px vertical, 24px horizontal padding.

### Builder Sidebar

Tool palette for widget construction.

- **Anatomy**: Vertical strip with tool icons, section dividers, and action buttons. Fixed position on canvas left.
- **Surface**: Background `{colors.surface-raised}` or transparent over `{colors.canvas}`.
- **Typography**: Minimal text; icons primary with Geist Mono labels on hover or expanded state.
- **Spacing**: 8px gaps between tools; 16px section padding.

### Builder Canvas

The main workspace for widget arrangement.

- **Anatomy**: Expansive area with dotted grid background, centered phone mockup, and draggable widget placeholders.
- **Surface**: Background `{colors.canvas}`; dot grid in `{colors.border-subtle}`.
- **Composition**: Phone mockup vertically and horizontally centered; widgets snap to implicit grid.

### Header/Navigation

Global navigation with brand mark and utility actions.

- **Anatomy**: Fixed top bar with logo left, search/icon cluster right.
- **Surface**: Transparent or `{colors.canvas}` background.
- **Typography**: Brand mark in `{typography.navigation}`; utility labels in `{typography.body}`.
- **Composition**: Full-width with 32px horizontal padding; 16px vertical padding.

## Responsive behavior

The card grid responds from four columns on large viewports to two columns on tablet and single column on mobile. Card internal spacing remains constant; gaps compress slightly on smaller screens.

The builder interface transforms significantly: the sidebar collapses to a bottom sheet or icon rail, and the phone mockup scales to fit available width while maintaining aspect ratio. The dotted grid remains visible but adjusts density.

Typography scales down proportionally: hero-display reduces from 44px to 32px on tablet and 28px on mobile. Body text remains at 12px across breakpoints, preserving information density.

Touch targets maintain minimum 44px tap areas in collapsed sidebar states. Dropdown menus (like the "Sort by" control) expand to full-width sheets on mobile.

## Practical implementation guidance

### Preserve
- The strict typographic hierarchy: serif for display, monospace for function, dot-matrix for brand moments.
- True black (#000000) for widget preview backgrounds—this inversion is essential to the visual identity.
- The 1px hairline border treatment; avoid heavier strokes or shadow-based elevation.
- Yellow accent exclusivity for primary actions only.

### Avoid
- Introducing additional colors beyond the monochromatic scale and single yellow accent.
- Using N Type 82 for body text or functional labels—it is strictly display.
- Applying border-radius to widget previews beyond 16px; the square-round balance is deliberate.
- Shadows or blur effects; the system relies on flat color and border for depth.

### Recommended Build Order
1. Establish the color tokens and apply canvas/surface hierarchy to page structure.
2. Implement the three-type system with correct fallbacks.
3. Build the card grid with exact spacing and border treatment.
4. Create the widget preview component with black background and centered content.
5. Develop the builder layout: sidebar, dotted canvas, and phone mockup.
6. Add interactive states: button hover (yellow lightens), card hover (subtle border darkening).

### Accessibility
- Ensure widget previews with colored pixel content meet contrast minimums; the black background helps, but verify yellow and red pixels against WCAG guidelines.
- Geist Mono at 12px may require minimum weight of 500 for true legibility at small sizes; consider 14px for critical data.
- The dotted canvas grid should not interfere with screen reader navigation; mark as decorative.
- Provide visible focus states for keyboard navigation, using the yellow accent or border color shift.

## Scope note

This guide covers the browsing and builder interfaces visible in the Essential Apps and homepage surfaces. The EQ profiles, preset detail pages, and any account or settings flows are not represented. Motion behavior, loading states, and mobile-specific layouts were not available for analysis. N Type 82-Headline is supplied but not currently assigned to visible tokens in the covered surfaces.
