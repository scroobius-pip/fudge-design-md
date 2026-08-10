# How giuliaboggio.xyz is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/giuliaboggio.xyz-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with oversized 'Giulia B' display type, sparse navigation, and biographical text in the upper left corner](https://pin.fontofweb.com/5369?format=jpg)](https://design.withfudge.com/share/pin-5369)

[Homepage hero with oversized 'Giulia B' display type, sparse navigation, and biographical text in the upper left corner](https://design.withfudge.com/share/pin-5369)

[![Project index as a minimal table with project names, categories, and years separated by thin horizontal rules](https://pin.fontofweb.com/5370?format=jpg)](https://design.withfudge.com/share/pin-5370)

[Project index as a minimal table with project names, categories, and years separated by thin horizontal rules](https://design.withfudge.com/share/pin-5370)

[![Portfolio case study page showing editorial magazine spread with brown background and cyan outline typography](https://pin.fontofweb.com/5371?format=jpg)](https://design.withfudge.com/share/pin-5371)

[Portfolio case study page showing editorial magazine spread with brown background and cyan outline typography](https://design.withfudge.com/share/pin-5371)

## Overview

This design system describes a portfolio website for a multimedia designer working across type, graphic, and web design. The visual approach is deliberately austere: vast white space, a single type family pushed to dramatic scale extremes, and structural elements reduced to hairline rules. The homepage presents an almost confrontational typographic gesture— the designer's name rendered at a scale that dominates the viewport— while interior pages resolve into disciplined tabular lists and immersive case studies. The system prioritizes the work itself over decorative apparatus, using scale, spacing, and the careful deployment of a warm accent tone to create rhythm and hierarchy without relying on color complexity.

## Colors

The palette is intentionally restricted, operating primarily in black and white with a single warm accent drawn from portfolio imagery. This restraint amplifies the typographic drama and ensures that project photography and editorial spreads retain full visual authority.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, borders, rules, and all typographic elements |
| canvas | #FFFFFF | Page background, negative space, and text reversal on dark imagery |
| muted | #555555 | Secondary information, captions, and subtle hierarchy within tables |
| warm-accent | #462D1F | Case study backgrounds, editorial spreads, and atmospheric project containers |

The near-total absence of color in the interface proper means that when the warm accent appears— typically as a full-bleed background for editorial work— it carries significant weight. The brown tone functions as a photographic or project-specific environment rather than a recurring UI element. Text remains black in almost all contexts, with white used only when reversed against dark imagery. The muted tone appears sparingly, primarily for secondary metadata such as years or categories in tabular layouts. No gradients, shadows, or additional chromatic layers are present in the interface structure.

## Typography

The type system is built entirely on a single variable font family, Ufficio-300, deployed across a wide range of sizes and weights. The design exploits the family's geometric clarity and generous x-height, pushing display sizes to the edge of legibility while maintaining crisp readability at text scales.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Ufficio-300 | 8rem | 300 | 0.85 | -0.03em | Homepage name mark, monumental identifiers |
| section-display | Ufficio-300 | 2rem | 300 | 1.1 | -0.01em | Page titles, project names in case studies |
| body | Ufficio-300 | 1rem | 300 | 1.4 | 0em | Biographical text, descriptions, running copy |
| label | Ufficio-300 | 0.75rem | 300 | 1.2 | 0.02em | Metadata, categories, captions |
| navigation | Ufficio-300 | 0.75rem | 300 | 1.2 | 0.05em | Menu items, section headers, utility links |

The hero-display size establishes the site's most distinctive characteristic: letterforms that approach the full width of the viewport, with tight leading that causes ascenders and descenders to nearly collide. This creates a dense, almost architectural mass of type that reads as image as much as text. At the opposite extreme, navigation and label sizes maintain the same light weight but introduce slightly positive tracking for optical compensation at small scales. The single-family approach demands that all hierarchy be achieved through size, spacing, and tracking rather than weight variation. Verify licensing for these families before production use.

## Layout

The layout system is defined by radical asymmetry and generous negative space. The homepage distributes elements across a loose grid with no visible containment: biographical text occupies the upper left, navigation clusters float in the upper right, and the massive name mark anchors the lower portion, bleeding to the edges. This creates a spatial tension between the anchored corners and the overwhelming central type.

Interior pages resolve into more regular structures. The project index uses a full-width table with three implicit columns— project name, category, and year— separated by horizontal rules that span the entire width. These rules are the primary structural device, creating rhythm through repetition rather than through background variation or card-based containment.

Case study pages return to asymmetry, presenting project imagery at large scale with minimal captioning. The image container may fill the viewport or sit within generous margins, with text elements positioned as overlays or adjacent annotations rather than in conventional sidebar arrangements.

The underlying grid appears to be fluid, with elements sized relative to the viewport rather than constrained to fixed breakpoints. Margins are substantial, typically several rems on all sides, preventing any element from touching the viewport edge. The spacing system uses a quarter-rem base unit, with practical increments at 0.5rem, 1.5rem, 3rem, and 6rem for component, section, and page-level intervals.

## Visual language

The visual language is defined by restraint and contrast: extreme scale differences between hero type and body text, the stark black-on-white default, and the sudden warmth of editorial imagery against the cool interface. The design avoids all decorative elements— no icons, no buttons with backgrounds, no cards, no shadows. Even the navigation is presented as plain text links without hover states visible in still image.

The horizontal rule is the sole recurring graphic element, functioning as both separator and structural spine. These rules are hairline-thin, creating a sense of precision that echoes the typographic detailing. The overall impression is of a design studio's working environment: clean, focused, and confident enough to let the work speak without interface embellishment.

Photography and project imagery are presented without frames, borders, or rounded corners. When images appear, they sit directly on the background or fill their container completely, with text overlaid only when reversed against dark content. The warm brown accent from the magazine spread case study suggests that project-specific color environments are permitted to override the default white ground, creating immersive presentation modes for editorial work.

## Components

### Site navigation

- **Anatomy**: Plain text links grouped by semantic category— "WORKS", "Fonts in Use", "INFORMATION"— with no visible container
- **Surface and text color**: Black text on white ground; no background, border, or underline in default state
- **Typography**: `{typography.navigation}` with all-caps treatment and wide tracking
- **Spacing**: Positioned in upper corners with generous margins from viewport edges
- **Composition**: Distributed across the top of the page rather than consolidated; "CLOSE" and "click to preview" variants suggest modal or overlay behavior

### Project index table

- **Anatomy**: Full-width rows with three text fields— project name, service category, completion year— separated by horizontal rules
- **Surface and text color**: Black text on white ground; rules in black at hairline weight
- **Typography**: Project names in `{typography.body}`; categories and years in same size with potential muted treatment
- **Shape and border**: No cell borders; full-width horizontal rules between rows only
- **Spacing**: Comfortable vertical padding within each row, approximately `{spacing.comfortable}`
- **Composition**: Single continuous list with no pagination, grouping, or filtering controls visible

### Hero name mark

- **Anatomy**: Single line of oversized text, the designer's name, positioned at lower portion of viewport
- **Surface and text color**: Black text on white ground
- **Typography**: `{typography.hero-display}` at extreme scale, potentially 10-12rem in practice
- **Shape**: No container, background, or decorative frame; text bleeds to edges if viewport is narrow
- **Spacing**: Minimal margin below, allowing descenders to approach viewport edge
- **Composition**: Anchored left, extending rightward with natural line break if needed; small portrait thumbnail may appear adjacent

### Case study image container

- **Anatomy**: Full-bleed or large-format image with optional overlaid text caption
- **Surface and text color**: Variable based on image content; dark images may carry white reversed text
- **Typography**: Caption text in `{typography.label}` or `{typography.body}` depending on length
- **Shape**: Sharp corners, no border radius
- **Spacing**: Generous margins when not full-bleed; text overlay positioned with `{spacing.generous}` inset

## Responsive behavior

The system appears designed for desktop-first presentation, with the hero name mark and navigation layout assuming substantial horizontal space. At narrower viewports, the extreme display type would require reduction or line-breaking to maintain legibility. The project index table, with its three-column structure, would benefit from a stacked transformation on small screens— project name remaining prominent with category and year repositioned below or right-aligned.

The fluid, viewport-relative sizing of the hero mark suggests that some scaling logic is already present. Implementation should ensure that the name mark never becomes illegibly small, with a minimum size of approximately `{typography.section-display}` maintained across all breakpoints. Navigation links currently distributed across the top may consolidate into a single column or hamburger menu on mobile, though no mobile-specific patterns are visible in the supplied material.

## Practical implementation guidance

### Preserve
- The stark black-and-white default with single warm accent for project environments
- Extreme scale contrast between hero display and body text
- Hairline horizontal rules as the sole structural graphic element
- All-caps navigation with wide tracking
- Full-bleed imagery without borders, frames, or rounded corners
- Single type family throughout, achieving hierarchy through size and spacing alone

### Avoid
- Adding background colors to navigation or table rows
- Introducing button-shaped elements with fills and padding
- Using multiple type families or weights for hierarchy
- Card-based layouts with shadows and rounded corners
- Decorative icons or graphical embellishments
- Color variations beyond the four defined tokens

### Recommended build order
1. Establish the type system with Ufficio-300 at all defined sizes, verifying rendering at hero scale
2. Implement the horizontal rule as a reusable structural element with consistent weight
3. Build the project index table with proper row spacing and full-width rules
4. Create the homepage layout with corner-positioned navigation and lower-anchored hero mark
5. Add case study template with image-first presentation and optional warm-accent background
6. Test scale behavior across viewport widths, particularly for the hero display

### Accessibility
- Ensure the light weight of Ufficio-300 remains legible at small sizes; consider a slightly heavier weight or increased size for navigation if contrast proves insufficient
- The extreme hero scale may trigger horizontal overflow on narrow viewports; implement `overflow-wrap` or scaling transforms to prevent layout breakage
- Table rows should maintain sufficient touch targets if the index becomes interactive on mobile
- Provide `aria-label` context for the all-caps navigation links, as text transformation can interfere with screen reader pronunciation

## Scope note

This guide covers the homepage, project index, and case study presentation surfaces visible in the supplied images. Mobile layouts, hover and focus states, loading sequences, form elements, and additional interior pages are not represented. Measurements are practical adaptation targets. The single supplied font source, Ufficio-300, may require additional weights or fallback strategies for production use.
