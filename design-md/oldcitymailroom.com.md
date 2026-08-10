# How oldcitymailroom.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/oldcitymailroom.com-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing table for Index Monospaced Light, Regular, and Bold showing OTF and WOFF license tiers with radio-button selection on textured cream paper background](https://pin.fontofweb.com/5712?format=jpg)](https://design.withfudge.com/share/pin-5712)

[Pricing table for Index Monospaced Light, Regular, and Bold showing OTF and WOFF license tiers with radio-button selection on textured cream paper background](https://design.withfudge.com/share/pin-5712)

[![Index Family four-style purchase section with dark selected row for Extended web license and horizontal rule separators](https://pin.fontofweb.com/5711?format=jpg)](https://design.withfudge.com/share/pin-5711)

[Index Family four-style purchase section with dark selected row for Extended web license and horizontal rule separators](https://design.withfudge.com/share/pin-5711)

## Overview

Old City Mailroom presents a restrained, editorial storefront for monospaced typeface licensing. The visual system draws heavily from print design traditions—warm, fibrous paper textures, precise horizontal rules, and generous letter-spacing in monospaced headings create an atmosphere of craft and authenticity. The interface avoids conventional web UI chrome in favor of typographic hierarchy and spatial rhythm. Every element serves the content: font families, weights, and license tiers are presented with clarity and quiet confidence. The monochrome palette, limited to black ink on warm cream, reinforces the connection to physical print materials and letterpress traditions. This is a design that treats digital commerce as an extension of the typographic specimen, where the product and the presentation share the same visual DNA.

## Colors

The color system is intentionally austere, built around the contrast of black typographic ink against warm paper substrates. No accent colors compete for attention; the hierarchy is achieved entirely through value, weight, and spacing.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, selected row backgrounds, active states |
| muted-ink | #282828 | Secondary labels, captions, disabled or inactive options |
| canvas | #e8e4d9 | Page background, the warm paper texture visible across all surfaces |
| surface | #f5f2eb | Lighter paper tone for content areas, inverted text on selected rows |
| border | #c4bfb3 | Horizontal rules, row dividers, subtle structural lines |

The canvas color dominates the viewport, establishing an immediate tactile quality that distinguishes this storefront from conventional flat-white e-commerce. The surface token provides a slightly lighter variant for content panels or inverted text scenarios, as seen in the selected pricing row where black ink becomes the background and warm paper becomes the text color. Border is applied with restraint—single-pixel hairlines that separate license tiers without visual heaviness. The muted-ink token serves secondary information such as parenthetical descriptions and license format labels, maintaining readability while deferring to primary content. This is fundamentally a light-mode system; dark surfaces appear only as transient selection states, not as a persistent theme.

## Typography

Two families anchor the typographic system: Index, a monospaced family with four weights, and Acumin Pro, a clean sans-serif for body content. The monospaced character of Index is not merely decorative—it is the product being sold, and its use throughout headings and labels demonstrates the typeface in context.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Index | 3rem | 400 | 1.1 | 0.02em | Major family names, product titles |
| section-display | Index | 2rem | 400 | 1.2 | 0.02em | Weight variants within families |
| body | Acumin Pro | 1rem | 400 | 1.6 | 0 | Descriptions, paragraphs, general content |
| label | Index | 0.75rem | 400 | 1.4 | 0.08em | License format tags, uppercase metadata |
| price | Index | 1rem | 400 | 1.4 | 0.04em | Pricing tiers, option labels |

Index appears in Thin, Light, Regular, and Bold weights, though the storefront primarily demonstrates Light, Regular, and Bold in display contexts. The family's monospaced rhythm creates distinctive paragraph shapes with even vertical alignment. Acumin Pro provides necessary contrast for longer reading contexts with its proportional spacing and open aperture. All type sizes are whole-number multiples of the 4px base unit. Verify licensing for these families before production use.

## Layout

The layout follows a centered, narrow-column approach that evokes the proportions of a printed page or type specimen. Content is constrained to a readable measure, with generous margins that allow the paper texture to breathe around the edges.

The pricing tables use a two-column structure: license format and desktop pricing on the left, web licensing options on the right. This split reflects the product's dual nature as both a physical and digital good. Within each column, options stack vertically with horizontal rules between tiers, creating clear scan lines without excessive boxiness.

Vertical rhythm is established through consistent spacing between sections. Each font weight or family grouping is separated by substantial whitespace, allowing the eye to rest between decisions. The horizontal rules extend full-width within their columns, creating strong linear elements that guide reading from top to bottom.

The overall composition is asymmetrical in detail but balanced in mass—the left column's shorter option lists counterbalance the right column's more elaborate web licensing tiers. This asymmetry prevents the layout from feeling rigid or mechanical despite the monospaced type.

## Visual language

The dominant visual motif is the warm, fibrous paper texture that permeates every surface. This is not a decorative background but a foundational material quality that unifies the experience. The texture suggests letterpress printing, archival stock, and the physicality of type foundry traditions.

Horizontal rules function as the primary structural element. These hairlines separate content tiers with precision, their subtle color ensuring they read as architectural rather than decorative. The rules are consistently applied—above and below option groups, beneath headers, between license tiers—creating a grid-like regularity without explicit grid lines.

Selection states invert the expected color relationship: black becomes ground, warm paper becomes figure. This inversion is stark and immediate, providing clear feedback without introducing foreign colors. The radio-button selectors are minimal circles, their unfilled state echoing the open counters of the monospaced letterforms.

The visual language avoids rounded corners, shadows, gradients, and other conventional web UI conventions. Surfaces are flat, edges are sharp, and depth is achieved only through layering of texture and tone. This restraint reinforces the brand's positioning as a purveyor of serious typographic tools rather than trendy digital products.

## Components

### Pricing table

The pricing table is the core interactive component, presenting license options in a scannable, comparable format.

- **Anatomy**: Section header with family or weight name; subheader with license format label; stacked option rows with radio selector, price, and description; horizontal rules between groups.
- **Surface**: Default rows use transparent backgrounds against the canvas texture; selected rows invert to ink background with surface-colored text.
- **Typography**: Section headers use section-display token; format labels use label token in uppercase with expanded tracking; option text uses price token.
- **Shape**: No border-radius; full-width horizontal rules at 1px using border color.
- **Spacing**: Generous padding within rows (approximately 1.5rem vertical), compact grouping between related options.
- **Composition**: Two-column layout for desktop license versus web license; single column per format with clear visual separation.
- **Variants**: Unselected state shows open radio circle with muted-ink text; selected state shows filled radio circle on ink background with surface text.

### Radio selector

Minimal circular selectors accompany each pricing option.

- **Anatomy**: Small circle outline, filled when selected.
- **Surface**: Unselected uses border color for stroke; selected uses surface fill with ink stroke or solid ink fill.
- **Spacing**: Positioned left of price text with consistent internal padding.

### Section header

Divides the page into font family or weight groupings.

- **Typography**: hero-display or section-display depending on hierarchy level.
- **Spacing**: Large margin below (approximately 2rem) before content begins; horizontal rule may appear above or below.

## Responsive behavior

The two-column pricing layout should collapse to a single column on narrow viewports, with desktop and web license options stacking sequentially rather than side-by-side. The generous margins should compress to maintain readability without eliminating the paper texture's presence. Type sizes may reduce by one step on small screens to preserve line length integrity. The horizontal rules should remain full-width in all contexts, as they provide essential structural rhythm. Touch targets for radio selectors should expand to minimum 44px height regardless of visual compactness.

## Practical implementation guidance

### Preserve
- The warm paper texture as a continuous background; do not crop or mask into artificial containers.
- Monospaced Index for all headings, labels, and pricing content to maintain specimen-like authenticity.
- The stark inversion of selected states—black ground, warm text—without introducing additional colors.
- Generous letter-spacing in uppercase labels; this is essential to the typographic voice.
- Hairline horizontal rules as the sole decorative-structural element.

### Avoid
- Rounded corners on any element; the system demands sharp, print-like edges.
- Drop shadows, glows, or dimensional effects that contradict the flat, physical paper metaphor.
- Color accents or highlight colors that would break the monochrome discipline.
- Generic form styling for radio buttons; custom implementation must match the minimal circular motif.
- Proportional fonts for headings or labels; this undermines the core product demonstration.

### Recommended build order
1. Establish the paper texture background and base canvas color across the viewport.
2. Implement Index at display sizes with correct tracking for hero and section headers.
3. Build the two-column pricing grid with horizontal rules and proper vertical rhythm.
4. Add radio selector states with exact inversion behavior.
5. Integrate Acumin Pro for any body content or supplementary descriptions.
6. Refine spacing and responsive collapse behavior.

### Accessibility
- Ensure the paper texture does not interfere with text contrast; maintain minimum 4.5:1 for all body text.
- Selected state inversion must achieve equivalent contrast to unselected states.
- Radio buttons require proper focus indicators; consider an outline offset that respects the minimal aesthetic.
- Uppercase labels with expanded tracking should not be used for critical instructions alone; pair with context or icons where possible.

## Scope note

This guide covers the purchase page for Index Mono and Index Family font licensing. Measurements are practical adaptation targets. Unseen site areas such as the homepage, cart flow, checkout process, or account management are not represented. Mobile breakpoints, animation, and error states were not captured and should be designed to extend the established monochrome, texture-driven language.
