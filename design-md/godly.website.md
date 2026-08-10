# How godly.website is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/godly.website-design)

Last updated: 2026-08-10

## Captured pages

[![Dense masonry grid of website screenshots with a centered dark subscribe CTA and category pills, showing the main browsing surface of the Godly inspiration gallery.](https://pin.fontofweb.com/7443?format=jpg)](https://design.withfudge.com/share/pin-7443)

[Dense masonry grid of website screenshots with a centered dark subscribe CTA and category pills, showing the main browsing surface of the Godly inspiration gallery.](https://design.withfudge.com/share/pin-7443)

[![Dark modal filter panel with active pill tags, category tabs, and a font list with counts, overlaid on a blurred grid background.](https://pin.fontofweb.com/7432?format=jpg)](https://design.withfudge.com/share/pin-7432)

[Dark modal filter panel with active pill tags, category tabs, and a font list with counts, overlaid on a blurred grid background.](https://design.withfudge.com/share/pin-7432)

## Overview

Godly is a web design inspiration gallery that presents a dense, full-bleed masonry grid of website screenshots against a pure black canvas. The interface minimizes chrome to let the colorful work samples dominate the viewport. Navigation and filtering are handled through compact pill-shaped buttons and a dark modal overlay system. The visual system relies on extreme contrast—black backgrounds, white text, and a single accent teal for interactive states—creating a gallery-like atmosphere where the featured websites become the primary content. Typography is restrained to a single family, Inter, with consistent negative tracking that gives labels and headings a tight, contemporary feel. The overall impression is of a curated, high-density browsing experience that prioritizes visual discovery over elaborate interface decoration.

## Colors

The palette is built on near-total darkness with selective luminosity for interaction. Black serves as the dominant canvas, allowing the colorful website screenshots to generate all necessary visual energy. Interface elements use a narrow range of grays for hierarchy, with white reserved for text and active states. The teal accent appears sparingly for primary actions and category indicators.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, grid gaps, empty space |
| surface | `#525252` | Modal panel background, inactive filter pills |
| surface-elevated | `#737373` | Search input fill, elevated controls |
| ink | `#000000` | Primary text on light surfaces, button fills |
| ink-inverted | `#FFFFFF` | Text on dark surfaces, active pill text |
| muted | `#A1A1A1` | Placeholder text, secondary metadata |
| action | `#00D5BE` | Category tags, active indicators, accent moments |
| action-hover | `#525252` | Hover state for surface elements |
| border | `#000000` | Hairline dividers, grid cell edges |
| border-subtle | `#525252` | Internal panel borders, inactive states |

The color model is strictly dark-mode. No light theme is visible in the interface. The website screenshots themselves provide all chromatic variety, making the UI palette intentionally neutral so as not to compete with the featured work. White text on black maintains maximum legibility at small sizes, while the teal accent draws attention to interactive elements without introducing full-spectrum distraction.

## Typography

The type system uses Inter exclusively across all interface elements. Weights are limited to Regular (400) and Medium (500), with Medium reserved for headings, buttons, and active labels. A consistent `-0.02em` letter spacing applies universally, giving even body text a slightly compressed, modern character. Line heights are tight, reflecting the compact density of the overall interface.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Inter | 1rem | 400 | 1.5 | -0.02em | Default text, descriptions, modal content |
| section-display | Inter | 1.25rem | 500 | 1.25 | -0.02em | Page headings, section titles |
| label | Inter | 0.875rem | 500 | 1.4286 | -0.02em | Buttons, filter pills, category tags, counts |
| caption | Inter | 0.75rem | 500 | 1.3333 | -0.02em | Small metadata, badge numbers, fine print |
| navigation | Inter | 0.875rem | 500 | 1.4286 | -0.02em | Top bar links, category tabs, wayfinding |
| button-primary | Inter | 1rem | 500 | 1.5 | -0.02em | Primary CTA buttons, subscribe actions |

The hierarchy is flat. No display or hero size exists in the interface chrome—the featured website screenshots provide all visual impact. The 1.25rem section display functions as the largest interface text, appearing in modal headers and page titles. The 0.875rem label size is the workhorse, appearing on virtually all interactive elements. The navigation and button-primary roles share the same metrics as label and body respectively but carry distinct semantic purposes for component assignment. Verify licensing for these families before production use.

## Layout

The primary layout is a full-bleed masonry grid with minimal gutters. Grid cells are rectangular, showing website screenshots at varying aspect ratios. The grid fills the entire viewport with no visible max-width constraint, creating an immersive, endless-scroll experience. A narrow header or navigation bar may sit at the top edge, but the grid dominates.

Spacing follows a 2px base unit (0.125rem). Key layout values include:

- Grid gap: 0.5rem between cells
- Section padding: 6rem for major vertical divisions
- Panel internal padding: 0.75rem
- Button horizontal padding: 0.75rem to 1rem
- Button vertical padding: 0.375rem to 0.75rem

The modal system centers panels over a blurred grid backdrop. Modals have rounded corners at 6px and internal padding of 12px. Filter panels use a vertical stack with category tabs across the top and scrollable lists below. Pill-shaped tags sit in a horizontal row beneath the search field, each with an inline dismiss action.

Z-index layering is implicit: grid at base, modal backdrop with blur above, modal panel highest. The grid itself appears to use CSS columns or a masonry algorithm rather than a strict row-based grid, allowing cells of varying heights to pack tightly.

## Visual language

The visual character is austere and gallery-like. Blackness dominates; the interface recedes completely. When UI elements do appear, they are compact, rounded, and monochrome. The pill shape is the fundamental geometric unit—buttons, tags, search inputs, and category indicators all use full or substantial border-radius. Sharp corners are rare, limited to the grid cells themselves and modal panels.

Imagery is the entire point of the experience. Each grid cell contains a website screenshot, often showing bold typography, vivid gradients, or photographic content from the featured site. The screenshots are presented without frames, shadows, or decorative treatment—raw rectangles of color against the black void. A small category tag or metadata overlay may appear on some cells, typically in the lower corner with a dark translucent background.

Motion and transition language cannot be determined from still images, but the density suggests smooth scroll performance is essential. The modal entrance likely uses a fade with scale, given the blurred backdrop treatment.

## Components

### Grid Card

The fundamental content unit. A rectangular cell containing a website screenshot at its natural aspect ratio.

- **Anatomy**: Screenshot image, optional category tag overlay in lower corner, optional "Sponsor" or metadata badge.
- **Surface**: No visible background separate from the image; the black canvas shows through any transparent or letterboxed areas.
- **Typography**: Caption or label text for overlays, white on dark translucent background.
- **Shape**: Sharp corners (0px radius), no border.
- **Spacing**: Tight packing with 0.5rem gutters on all sides.
- **Composition**: Masonry flow, variable heights, dense packing without row alignment.

### Filter Pill

Compact tag for active filters and categories.

- **Anatomy**: Text label with optional inline dismiss icon (×).
- **Surface**: White background (`#FFFFFF`) with black text in default state; inverts to dark surface with white text when active or in modal context.
- **Typography**: `{typography.label}` at 0.875rem, Medium weight.
- **Shape**: Full pill (`9999px` radius).
- **Spacing**: Horizontal padding 0.75rem, vertical padding 0.375rem; pills sit in a horizontal row with 0.5rem gaps.
- **Variants**: Default (white ground, black text), Active (dark ground, white text), Dismissible (with × icon).

### Primary Button

Dark pill button for main actions like "Subscribe" or "Get design".

- **Anatomy**: Text label, optional leading or trailing icon.
- **Surface**: Black fill (`#000000`), white text (`#FFFFFF`).
- **Typography**: `{typography.button-primary}` at 1rem, Medium weight.
- **Shape**: Full pill (`9999px` radius).
- **Spacing**: Horizontal padding 0.75rem to 1rem, vertical padding 0.375rem to 0.75rem depending on prominence.
- **Composition**: Often paired with a secondary button or used as a solo CTA in empty grid spaces.

### Action Button

Teal-accented button for high-priority or category-specific actions.

- **Anatomy**: Text label, optional icon.
- **Surface**: Teal fill (`#00D5BE`), black text (`#000000`).
- **Typography**: `{typography.label}` at 0.875rem, Medium weight.
- **Shape**: Full pill (`9999px` radius).
- **Spacing**: Compact padding, similar to filter pills.

### Modal Panel

Dark overlay for filtering, search, and detailed navigation.

- **Anatomy**: Search input, category tabs, active filter pills, scrollable list with item counts, "Done" action button.
- **Surface**: Dark gray fill (`#525252`), white text, blurred backdrop of the grid behind.
- **Typography**: `{typography.body}` for list items, `{typography.label}` for tabs and counts, `{typography.section-display}` for headers.
- **Shape**: 6px corner radius.
- **Spacing**: 0.75rem internal padding; tabs have 0.5rem gaps.
- **Composition**: Centered on viewport, max-width constrained, vertical stack layout. Category tabs (Types, Styles, Frameworks, Fonts, Platforms) sit in a horizontal row with underline active indicator.

### Search Input

Embedded search within modal panels.

- **Anatomy**: Text placeholder, optional leading icon.
- **Surface**: Elevated gray fill (`#737373`), muted placeholder text (`#A1A1A1`).
- **Typography**: `{typography.body}`.
- **Shape**: Full pill (`9999px` radius).
- **Spacing**: Horizontal padding 0.75rem, vertical padding 0.5rem.

## Responsive behavior

The masonry grid likely adapts column count to viewport width. On wide desktop displays, five or more columns are visible. Narrower viewports should reduce to three, two, and finally a single column while maintaining the 0.5rem gutter. The modal panel should remain centered with comfortable margins, converting to near-full-screen on mobile if necessary.

Filter pills may wrap to multiple rows on narrow screens. The category tab row in modals should scroll horizontally if space is insufficient. Touch targets should maintain minimum 44px height for all buttons and list items.

## Practical implementation guidance

### Preserve
- The absolute black canvas; any deviation lightens the gallery atmosphere.
- The consistent `-0.02em` letter spacing across all text; it is a defining characteristic.
- The pill shape language for all interactive elements.
- The tight masonry packing with minimal gutters.
- The monochrome UI palette letting screenshot content provide all color.

### Avoid
- Adding borders, shadows, or frames around grid cards.
- Introducing additional font families or weights beyond Regular and Medium.
- Using bright backgrounds for UI panels; keep surfaces dark.
- Excessive vertical spacing that breaks the dense, continuous scroll feel.
- Rounded corners on grid cells themselves.

### Recommended build order
1. Establish the black canvas and masonry grid layout with sample screenshot content.
2. Implement Inter with the specified sizes, weights, and tracking.
3. Build the pill button system (default, active, dismissible variants).
4. Add the modal panel structure with search, tabs, and scrollable lists.
5. Integrate filter pills and category tag overlays on grid cells.
6. Polish spacing, gutters, and responsive column behavior.

### Accessibility
- Ensure all text on screenshot overlays meets contrast minimums; use translucent dark backgrounds behind white text.
- Provide focus indicators for keyboard navigation through the dense grid; a visible outline or ring is essential since default browser styles may be insufficient on black.
- Modal traps should constrain focus and provide escape key dismissal.
- Respect `prefers-reduced-motion` for any scroll or modal animations.
- Grid cells as links should have descriptive accessible labels rather than relying solely on visual screenshot content.

## Scope note

This guide covers the main browsing grid and filter modal surfaces of the Godly homepage. It does not include individual website detail pages, submission flows, account management, or mobile-specific layouts. Motion, hover states, and loading skeletons are not documented. Measurements reflect the exact values retained from the interface analysis.
