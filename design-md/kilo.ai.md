# How kilo.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/kilo.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Comparison table with dark rows, yellow-green accent column, and monospace labels for Cline versus Kilo Code features](https://pin.fontofweb.com/6963?format=jpg)](https://design.withfudge.com/share/pin-6963)

[Comparison table with dark rows, yellow-green accent column, and monospace labels for Cline versus Kilo Code features](https://design.withfudge.com/share/pin-6963)

[![Platform grid showing IDE and tool icons in bordered cells under a centered monospace heading on near-black background](https://pin.fontofweb.com/6432?format=jpg)](https://design.withfudge.com/share/pin-6432)

[Platform grid showing IDE and tool icons in bordered cells under a centered monospace heading on near-black background](https://design.withfudge.com/share/pin-6432)

[![Install page with oversized yellow display heading, tab navigation, and yellow-filled primary action button on dark surface](https://pin.fontofweb.com/6430?format=jpg)](https://design.withfudge.com/share/pin-6430)

[Install page with oversized yellow display heading, tab navigation, and yellow-filled primary action button on dark surface](https://design.withfudge.com/share/pin-6430)

## Overview

Kilo.ai presents a developer-tool identity that reads as a terminal or IDE brought to the web. The visual system is built on near-black surfaces, electric yellow-green accents, and a single monospace type family. Every element reinforces precision and technical credibility: tabular data sits in ruled grids, platform compatibility is shown as a matrix of bordered cells, and installation flows use tabbed interfaces that resemble configuration panels. The overall impression is of a tool built by developers for developers, with no decorative excess and every pixel serving functional clarity. The color story is severely constrained—black, dark gray, white, and a single high-saturation yellow-green—creating immediate visual hierarchy through contrast rather than complexity. Typography is uniformly monospaced, lending code-like authenticity to headings, body text, labels, and navigation alike.

## Colors

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest surface |
| surface | #1A1A18 | Card backgrounds, elevated panels |
| surface-elevated | #2A2A2A | Active tab backgrounds, hover states |
| border | #3F3F3F | Hairline rules, cell borders, dividers |
| muted-ink | #6A7282 | Disabled or crossed-out comparison features |
| ink-secondary | #737373 | Secondary body text, descriptions |
| ink-tertiary | #99A1AF | Tertiary labels, placeholder text |
| ink | #D1D5DC | Primary body text, active labels |
| accent | #F8F676 | Primary headings, active states, CTA fills |
| action | #FFFFFF | Primary button text on accent backgrounds |

The palette operates in a dark-mode-only configuration. The canvas and surface values create depth through near-black layering, while border provides subtle structural definition without visual weight. The accent color carries almost all expressive load: it appears in oversized display headings, active tab indicators, primary button fills, and the highlighted column of comparison tables. This yellow-green reads as energetic and technical rather than decorative. Text hierarchy is established through a cool gray scale from ink down to muted-ink, with muted-ink specifically reserved for unavailable or inferior features in comparison contexts. No light mode is visible in the supplied surfaces. Photographic content, where present, is treated as independent from the UI palette and does not influence interface color decisions.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Jet Brains Mono | 4.5rem | 800 | 1.11 | -0.05em | Page titles, install headings |
| section-display | Jet Brains Mono | 1.875rem | 800 | 1.6 | -0.025em | Section headings, comparison titles |
| body-large | Jet Brains Mono | 1.5rem | 400 | 1.5 | normal | Hero descriptions, lead paragraphs |
| body | Jet Brains Mono | 1rem | 400 | 1.5 | normal | Body text, navigation, table content |
| body-small | Jet Brains Mono | 0.875rem | 400 | 1.43 | normal | Secondary descriptions, button labels |
| label | Jet Brains Mono | 0.75rem | 500 | 1.33 | normal | Platform grid labels, metadata |
| navigation | Jet Brains Mono | 1rem | 400 | 1.5 | normal | Header links, tab labels |

The type system is unified under a single monospace family, Jet Brains Mono, which appears at weights 400, 500, 700, and 800. The hierarchy is established through size and weight rather than family change, preserving the terminal-like consistency. Hero-display at 72px with tight negative tracking creates immediate impact on installation pages. Section-display at 30px serves as the workhorse heading size for feature sections. Body and navigation share the same 16px size but are distinguished by context and surrounding spacing. Label at 12px is used sparingly for platform icons and grid metadata. The system avoids italic styles entirely. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with generous vertical breathing room. Major sections are separated by substantial vertical margins, typically 48px to 84px, creating clear rhythmic breaks between content blocks. Horizontal containment uses margin-based centering rather than full-bleed layouts, with content sitting in a well-defined column that respects reading comfort for monospace text.

The comparison table in the Cline versus Kilo Code page demonstrates a three-column grid: feature labels in the left column, competitor data in the center, and Kilo's advantages in the right. The right column receives visual emphasis through accent-colored text and a subtly differentiated background, creating an implicit recommendation without explicit labeling. Rows are separated by single-pixel borders in the border color, maintaining scannability.

The platform grid on the homepage arranges twelve tool icons in a horizontal row of equal-width cells, each with a top border and internal padding. This matrix approach treats each platform as a selectable unit while maintaining visual unity through consistent cell dimensions. Below the grid, a centered caption provides context without competing for attention.

Installation pages use a tabbed interface with horizontal navigation sitting above a content panel. Tabs are separated by subtle borders, with the active state receiving an accent-colored underline or background shift. The content area below uses surface-elevated for the panel background, creating clear separation from the page canvas.

## Visual language

The visual language is austere and functional, drawing directly from integrated development environments and command-line interfaces. Rounded corners are present but restrained—panels use 14px radius while buttons use 10px, softening the technical aesthetic without becoming friendly or casual. Borders are single-pixel hairlines that define structure without visual weight; they appear in tables, grids, and between tab panels.

Shadows are minimal and functional. The header uses a subtle inset shadow combined with a faint drop shadow to create elevation without material design richness. Buttons and interactive elements avoid shadow entirely, relying on color inversion or border changes for state communication.

Iconography is simple and monochrome, matching the label typography in weight. Platform icons are rendered as small glyphs above their labels, maintaining the grid's information density. Status indicators in comparison tables use simple geometric marks—circles with crosses for unavailable features, circles with checks for available ones—rendered in muted-ink or accent depending on the column's allegiance.

The accent color is deployed strategically rather than liberally. It appears in the most important heading on a page, the active state of tabs, the primary call-to-action, and the favorable column of comparison tables. This disciplined use ensures that accent draws attention to conversion-critical elements.

## Components

### Comparison Table

- **Anatomy**: Three-column grid with header row, feature label column, and two data columns. Right column (Kilo) receives accent emphasis.
- **Surface**: Canvas background with surface rows. Right column uses subtle surface-elevated differentiation.
- **Typography**: Feature labels in body weight, data text in body with accent color for Kilo advantages. Sub-features in body-small with ink-secondary.
- **Shape**: 14px outer radius on the table container. Single-pixel horizontal rules between rows in border color.
- **Spacing**: Generous vertical padding within rows, approximately 24px, ensuring readability for monospace text.
- **Composition**: Left-aligned feature labels, centered data cells. Status icons centered within cells.
- **Variants**: Some rows contain secondary descriptive text below the primary label, set in smaller size and lighter color.

### Platform Grid

- **Anatomy**: Horizontal row of equal-width cells, each containing an icon and a label.
- **Surface**: Transparent or canvas background. Each cell bordered on top and between neighbors.
- **Typography**: Icon above, label below in label token. Labels in ink or ink-secondary.
- **Shape**: 10px radius on the container. No radius on individual cells.
- **Spacing**: Consistent internal padding, approximately 20px vertical and 24px horizontal per cell.
- **Composition**: Icons centered above labels. Equal cell widths create a stable rhythm across the row.
- **Variants**: Some implementations show a subtle background shift on the active or hovered cell.

### Install Tabs

- **Anatomy**: Horizontal tab list with icon and label pairs, followed by a content panel.
- **Surface**: Tab bar on canvas, active tab on surface-elevated. Content panel on surface-elevated.
- **Typography**: Tab labels in navigation weight. Active tab label may use accent or ink.
- **Shape**: 10px radius on tab container. Active indicator as bottom border or full background.
- **Spacing**: Tab padding approximately 12px horizontal, 8px vertical. Content panel padding 32px.
- **Composition**: Tabs left-aligned or centered. Content below with clear separation.
- **Variants**: Active state uses accent underline or background fill. Inactive tabs show reduced opacity or lighter text.

### Primary Button

- **Anatomy**: Text label with optional leading icon, contained within a rounded rectangle.
- **Surface**: Accent background with canvas or near-black text.
- **Typography**: body or body-small in weight 700.
- **Shape**: 10px radius. No border.
- **Spacing**: Padding approximately 12px vertical, 20px horizontal.
- **Composition**: Icon and text with small gap, centered within button.
- **Variants**: Leading plus icon for "Install" actions. Full-width on mobile contexts.

### Secondary Button

- **Anatomy**: Text label with optional icon, on transparent or surface background.
- **Surface**: Transparent with border in border color. Text in ink.
- **Typography**: body-small in weight 500 or 700.
- **Shape**: 10px radius. Single-pixel border.
- **Spacing**: Similar to primary, slightly more compact.
- **Composition**: Icon and text, or text alone.
- **Variants**: May include leading download icon. Border color shifts on interaction.

## Responsive behavior

The supplied images show desktop-width layouts. Based on the component structures, several responsive adaptations are recommended. The comparison table should scroll horizontally on narrow viewports or stack into a vertical list with section headers replacing the column layout. The platform grid should wrap to multiple rows or convert to a two-column layout on smaller screens, maintaining touch-friendly cell sizes. Installation tabs should collapse to a dropdown selector or vertical stack when horizontal space is insufficient. Typography should scale down proportionally: hero-display may reduce to section-display size on tablet and body-large on mobile, preserving hierarchy without overflow. The monospace family remains legible at smaller sizes due to its generous x-height, but line lengths should be constrained to prevent excessive eye movement.

## Practical implementation guidance

### Preserve
- The single monospace family throughout; changing to a proportional typeface would destroy the developer-tool identity.
- The severe color restraint; adding additional accent colors would dilute the yellow-green impact.
- The dark-mode-only presentation; the palette is calibrated for high contrast on black.
- The hairline border aesthetic; thicker borders would feel heavy and decorative.
- The generous vertical spacing between sections; compression would lose the breathable, premium feel.

### Avoid
- Drop shadows on cards or buttons; the current system uses flat layers with subtle inset shadows only.
- Gradient backgrounds; the palette is intentionally flat and material-less.
- Rounded pill shapes; the 10px and 14px radii are specific and should not be generalized to full pills.
- Multiple font families for hierarchy; weight and size changes within Jet Brains Mono are sufficient.
- Decorative imagery unrelated to developer tools; the visual system is content-functional.

### Recommended Build Order
1. Establish the color tokens and apply canvas and surface backgrounds.
2. Implement Jet Brains Mono at all sizes with the specified weight and tracking values.
3. Build the comparison table component with proper border handling and accent column logic.
4. Create the platform grid with equal cell widths and icon-label stacking.
5. Implement tab navigation with active state styling.
6. Add primary and secondary button variants with correct padding and radius.
7. Apply section spacing and vertical rhythm across page templates.

### Accessibility
- Ensure accent-colored text on dark backgrounds meets WCAG contrast minimums; the yellow-green may need adjustment for small text.
- Provide visible focus indicators on tab navigation and grid cells; the current border-based system can support this with color shifts.
- Maintain keyboard operability for the platform grid if cells are interactive.
- Consider a reduced-motion option for any tab transitions, though none are visible in the static images.

## Scope note

This guide covers the homepage, installation page, and comparison page surfaces visible in the supplied images. Mobile breakpoints, animation, form validation states, and additional marketing pages are not represented. The Codicon symbol font is used for interface icons and is not documented as a typography family. Measurements are drawn from the exact values supplied for this domain.
