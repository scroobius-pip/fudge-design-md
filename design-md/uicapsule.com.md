# How uicapsule.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/uicapsule.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage grid showing dark-themed UI component library with ASCII renderer, 3D carousel, and iOS volume slider cards in a masonry layout](https://pin.fontofweb.com/8762?format=jpg)](https://design.withfudge.com/share/pin-8762)

[Homepage grid showing dark-themed UI component library with ASCII renderer, 3D carousel, and iOS volume slider cards in a masonry layout](https://design.withfudge.com/share/pin-8762)

[![iOS Volume Slider detail page with centered dark preview canvas, right sidebar metadata panel, and pill-shaped action buttons](https://pin.fontofweb.com/8761?format=jpg)](https://design.withfudge.com/share/pin-8761)

[iOS Volume Slider detail page with centered dark preview canvas, right sidebar metadata panel, and pill-shaped action buttons](https://design.withfudge.com/share/pin-8761)

[![Homepage grid variant with filter bar highlighted in orange, showing component cards with category tags and numerical identifiers](https://pin.fontofweb.com/8760?format=jpg)](https://design.withfudge.com/share/pin-8760)

[Homepage grid variant with filter bar highlighted in orange, showing component cards with category tags and numerical identifiers](https://design.withfudge.com/share/pin-8760)

## Overview

UICapsule is a dark-mode-first component gallery and marketplace for UI primitives. The visual system is built around a near-black canvas that lets interactive demos and colorful component previews become the focal point. The interface avoids decorative chrome in favor of utilitarian clarity: a persistent top navigation with search, filter dropdowns, and a dense masonry grid of component cards. Each card presents a live or static preview of a UI element—ranging from ASCII renderers to iOS-style volume sliders—paired with a monospace label and a numerical identifier. The overall impression is that of a developer-focused tool: precise, information-dense, and deliberately subdued so that the components themselves provide the visual energy.

The design relies on a two-tier typography system. A system sans-serif handles all navigational and descriptive text at comfortable reading sizes, while Monorama, a medium-weight monospace, supplies the technical labels, tags, and metadata that reinforce the engineering context. Color is used sparingly for functional emphasis: an orange accent appears only for active filters or highlighted states, while the vast majority of the interface communicates through subtle shifts in gray value. Borders are hairline-thin and dark, creating definition without visual weight.

## Colors

The palette is strictly dark-mode with a narrow range of grays and a single warm accent. Every color serves a functional role in the interface hierarchy.

| token | value | use |
|---|---|---|
| canvas | #09090B | Primary page background; the deepest surface |
| surface | #000000 | Card backgrounds, preview canvases, and elevated panels |
| surface-elevated | #27272A | Search bar, tags, secondary buttons, and subtle elevation |
| ink | #FAFAFA | Primary text, headings, active navigation, and icons |
| ink-muted | #A1A1AA | Secondary text, metadata, inactive states, and captions |
| accent | #FF5B29 | Active filter indicators, highlighted category labels, and emphasis |
| border | #27272A | Card outlines, dividers, and component boundaries |
| border-subtle | #000000 | Shadow-equivalent borders for deep separation |

The relationship between colors follows a subtractive logic: the page background (canvas) is slightly lighter than pure black, while individual cards drop to true black to create depth. Elevated elements like the search bar or tags rise back to surface-elevated. Text follows an inverse progression, with ink at near-white for primary content and ink-muted for supporting information. The orange accent is warm and saturated, reserved for moments of user action or system feedback. No light-mode equivalent is visible in the supplied material; the entire system assumes dark environment viewing.

## Typography

Three font families appear in the design facts: System (the platform's UI sans-serif), System-Uisansserif (a system sans-serif variant with no retained vendor or designer attribution), and Monorama (a medium-weight monospace). System and System-Uisansserif both serve interface text at weights 400 and 500. Monorama, designed by Deni Anggara and distributed by Fontstore Pte Ltd, handles labels, tags, and technical metadata at smaller sizes. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | System | 1.25rem | 400 | 1.4 | normal | Page titles in detail sidebars |
| section-display | System | 1.125rem | 400 | 1.556 | normal | Navigation links, card titles |
| body | System | 1rem | 400 | 1.5 | normal | Descriptions, search placeholder |
| body-medium | System | 0.875rem | 500 | 1.429 | normal | Button labels, action text |
| label | Monorama | 0.75rem | 400 | 1.333 | normal | Card identifiers, component names |
| label-small | Monorama | 0.625rem | 500 | 1.333 | normal | Tags, badges, metadata pills |
| caption | System | 0.75rem | 400 | 1.333 | normal | Auxiliary descriptions, hints |

The scale is compact and pragmatic. No display size exceeds 1.25rem, reflecting the density of the interface. Monorama's smaller sizes are used with increased weight (500) for tags to maintain legibility at the 0.625rem size. Line heights are tight, particularly for the monospace labels, where vertical space is constrained by the grid layout. Letter spacing remains normal throughout; no tracked-out headings or compressed labels are present.

## Layout

The page structure follows a centered container model with a full-bleed dark background. The maximum content width appears constrained to a readable column, with the homepage grid expanding to fill available space through a responsive masonry or column-based arrangement.

The header is fixed or sticky, containing three elements: a logo mark on the left, a centered search bar, and a user avatar or action on the right. Below the header, a filter bar holds dropdown triggers for Elements, Styles, and Categories. These filters use pill-shaped containers with chevron indicators, sitting directly on the canvas without additional background separation.

The main content area on the homepage is a dense grid of component cards. Each card contains a preview area (often with its own internal background, either dark or light depending on the component), a Monorama label at the bottom-left, and a numerical identifier at the bottom-right. Cards appear to flow in a masonry pattern with varying aspect ratios, though many share a consistent rectangular proportion. The grid gap is tight, approximately 1.5rem, with cards sitting directly adjacent to one another separated only by their border lines.

On detail pages, the layout shifts to a split composition: a large central preview canvas occupies roughly two-thirds of the width, while a right sidebar contains metadata, action buttons, tags, and navigation arrows. The preview canvas is itself a bordered container with generous internal padding, centering the component demonstration within a dark field.

## Visual language

The visual character is utilitarian and developer-centric, drawing from code editors, design tool canvases, and technical documentation. The near-black background eliminates glare and keeps focus on the interactive content. Component previews are treated as first-class content: they are not thumbnails but substantial, often animated or interactive, demonstrations that occupy the majority of each card's area.

Borders are consistently 1px and dark, functioning as structural lines rather than decorative frames. The border color (#27272A) is only slightly lighter than the canvas, creating subtle definition that becomes visible on closer inspection. Rounded corners are minimal: approximately 0.375rem for small tags, 0.4375rem for cards and panels, and full pills for buttons and the search bar. This restraint in shaping keeps the interface feeling precise and engineered.

Imagery within cards varies widely—ASCII art, 3D orbs, iOS controls, icon grids—yet the surrounding interface remains visually constant. This creates a gallery effect where each component's unique visual character stands in contrast to the uniform dark frame. The numerical identifiers (e.g., 001, 002) suggest a catalog or registry system, reinforcing the marketplace or library metaphor.

Shadows are minimal and functional. A subtle 1px 2px shadow at 5% opacity appears behind elevated elements like buttons, providing just enough separation without the heavy depth common in consumer interfaces.

## Components

### Card

The card is the fundamental unit of the homepage grid. Each card presents a single UI component from the library.

- **Anatomy**: Preview area (top, variable height), label row (bottom, fixed height)
- **Surface**: backgroundColor `{colors.surface}`, border 1px solid `{colors.border}`, borderRadius `{rounded.panel}`
- **Typography**: Component name in `{typography.label}` (Monorama, 0.75rem), identifier number in same style aligned right
- **Spacing**: Internal padding approximately 1.5rem; the preview area fills the upper portion while the label sits in a consistent bottom strip
- **Composition**: The preview is centered within the card; some previews use their own internal backgrounds (white, gray, or colored) which contrast sharply with the dark card surface
- **Variants**: Cards appear in multiple aspect ratios on the homepage, suggesting a masonry or column-based layout engine. Some cards span multiple columns for larger demonstrations.

### Filter Pill

Filter pills control category visibility in the main grid.

- **Anatomy**: Text label with trailing chevron icon, enclosed in a bordered container
- **Surface**: Transparent or matching canvas background; border 1px solid `{colors.border}`; full pill borderRadius
- **Typography**: `{typography.body-medium}` or `{typography.body}`
- **Spacing**: Padding approximately 0.5rem horizontal, 0.375rem vertical; grouped horizontally with small gaps
- **States**: Active state uses `{colors.accent}` for text or background highlight

### Search Bar

The global search sits centered in the top navigation.

- **Anatomy**: Magnifying glass icon, placeholder text, keyboard shortcut hint (⌘K)
- **Surface**: `{colors.surface-elevated}` background, full pill borderRadius
- **Typography**: `{typography.body}` for input text, `{typography.caption}` for shortcut hint
- **Spacing**: Generous horizontal padding, approximately 1.5rem, creating a wide, approachable target

### Tag / Badge

Tags appear in detail sidebars to categorize components.

- **Anatomy**: Text label within a compact container
- **Surface**: `{colors.surface-elevated}` background, 1px border `{colors.border}`, borderRadius `{rounded.tag}`
- **Typography**: `{typography.label-small}` (Monorama, 0.625rem, weight 500)
- **Spacing**: Tight internal padding, approximately 0.25rem horizontal; tags group with small gaps

### Button

Buttons follow two patterns: standalone pills and segmented controls.

- **Anatomy**: Text label, optionally with leading icon or trailing icon
- **Surface**: Primary uses `{colors.canvas}` background with `{colors.border}` border; secondary uses `{colors.surface-elevated}`; both use full pill borderRadius
- **Typography**: `{typography.body-medium}` (System, 0.875rem, weight 500)
- **Spacing**: Padding 0.5rem vertical, 0.75rem to 1rem horizontal depending on context
- **Variants**: Standalone buttons for actions like "View Source"; segmented button groups with connected sides for toggle options, where middle buttons lose side radii and gain negative margin overlap

### Detail Sidebar

The metadata panel on component detail pages.

- **Anatomy**: Title heading, action button row, install command text, tags section, navigation footer
- **Surface**: Transparent or matching canvas; internal dividers use `{colors.border}`
- **Typography**: Title in `{typography.hero-display}`, metadata in `{typography.caption}` or `{typography.label-small}`, links in `{typography.body-medium}` with `{colors.ink-muted}`
- **Spacing**: Section padding approximately 0.75rem; generous vertical rhythm between title, actions, and metadata

### Preview Canvas

The large demonstration area on detail pages.

- **Anatomy**: Centered component preview with optional value readouts below
- **Surface**: `{colors.surface}` background, 1px border `{colors.border}`, borderRadius `{rounded.panel}`
- **Spacing**: Internal padding 0.75rem; component centered both horizontally and vertically
- **Composition**: The canvas is deliberately neutral, often darker than the surrounding page, so that the demonstrated component provides all visual interest

## Responsive behavior

The supplied images show a desktop viewport. The grid layout likely collapses from multiple columns to fewer as viewport width decreases, though the exact breakpoints are not visible. The detail page's split layout (preview + sidebar) would reasonably stack on smaller viewports, with the sidebar moving below the preview canvas.

The search bar's centered position and generous width suggest it remains prominent across sizes, though the keyboard shortcut hint may hide on narrow viewports. Filter pills should wrap to multiple lines if horizontal space is constrained, maintaining their pill shape and touch-friendly sizing.

Touch targets for buttons and cards appear adequately sized for interaction, though no mobile-specific adaptations are visible in the material. Implementers should ensure that the 0.875rem button text and 0.625rem tag text meet minimum legibility standards at typical mobile viewing distances.

## Practical implementation guidance

### Preserve
- The near-black canvas (#09090B) as the default page background; do not shift to lighter grays
- The two-tier typography system: System for prose, Monorama for labels and metadata
- Hairline borders at 1px with #27272A for all card and container definitions
- The numerical identifier pattern on cards, using Monorama at 0.75rem
- Full pill shapes for buttons and search; restrained 0.375-0.4375rem radii for cards and tags only

### Avoid
- Adding decorative shadows or elevation effects beyond the minimal 5% opacity shadow
- Introducing additional accent colors; the orange (#FF5B29) is sufficient for emphasis
- Using Monorama for body text or long descriptions; it is strictly for labels and technical metadata
- Light-mode variants without careful inversion of the entire color stack; the system is designed for dark viewing

### Recommended build order
1. Establish the color tokens and apply canvas/surface backgrounds to the page and card containers
2. Implement the typography scale with both families at their designated sizes
3. Build the card component with preview area, label row, and border treatment
4. Create the filter pill and search bar for the header region
5. Construct the detail page layout with preview canvas and sidebar
6. Add button variants including the segmented control pattern
7. Implement the tag component for sidebar metadata

### Accessibility
- Ensure that ink-muted (#A1A1AA) text on surface backgrounds meets WCAG contrast minimums; if it falls short, lighten to #B4B4BE or darker backgrounds
- Provide visible focus indicators for keyboard navigation; the dark environment benefits from a light outline or border shift
- The ⌘K shortcut hint in the search bar should be implemented as an actual keyboard shortcut with appropriate aria-label
- Component previews that include motion or animation should respect prefers-reduced-motion
- Numerical identifiers and Monorama labels should not be the sole means of identifying components; ensure accessible names are present

## Scope note

This guide covers the homepage grid and component detail page surfaces visible in the supplied material. Mobile breakpoints, hover and focus states, loading skeletons, error pages, and checkout or authentication flows are not represented. The filter dropdown menus and search results interface are implied but not documented in detail. Measurements are derived from the retained exact values where available.
