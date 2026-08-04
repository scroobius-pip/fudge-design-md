# How fontofweb.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fontofweb.com-design)

Last updated: 2026-08-04

## Captured pages

[![Dark homepage hero with centered headline, orange CTA, and a huge textured artwork panel](https://pin.fontofweb.com/8460?format=jpg)](https://design.withfudge.com/share/pin-8460)

[Dark homepage hero with centered headline, orange CTA, and a huge textured artwork panel](https://design.withfudge.com/share/pin-8460)

[![White detail page with bright illustration preview and a long horizontal swatch strip](https://pin.fontofweb.com/8776?format=jpg)](https://design.withfudge.com/share/pin-8776)

[White detail page with bright illustration preview and a long horizontal swatch strip](https://design.withfudge.com/share/pin-8776)

[![Arabic search page with sparse top navigation and two pinned cards on wide white space](https://pin.fontofweb.com/8577?format=jpg)](https://design.withfudge.com/share/pin-8577)

[Arabic search page with sparse top navigation and two pinned cards on wide white space](https://design.withfudge.com/share/pin-8577)

[![White gallery layout with the MY LATEST WORK heading and colorful project thumbnails](https://pin.fontofweb.com/8535?format=jpg)](https://design.withfudge.com/share/pin-8535)

[White gallery layout with the MY LATEST WORK heading and colorful project thumbnails](https://design.withfudge.com/share/pin-8535)

[![Dark mixed gallery of compact cards, vivid previews, and soft rounded content blocks](https://pin.fontofweb.com/8775?format=jpg)](https://design.withfudge.com/share/pin-8775)

[Dark mixed gallery of compact cards, vivid previews, and soft rounded content blocks](https://design.withfudge.com/share/pin-8775)

## Overview

Font Of Web reads as a hybrid of catalog, gallery, and editorial pitch. The system pivots between two strong moods: a white browsing surface for cards, metadata, and palette strips, and a black stage for hero statements, pricing, and high-contrast feature blocks. That split is the core of the language. Light areas feel quick and searchable. Dark areas feel dramatic and decisive.

The design depends on sharp contrast rather than heavy decoration. Most surfaces are flat, most edges are simple, and the hierarchy comes from scale, spacing, and image weight. The page can host many examples without feeling busy because the cards stay disciplined and the typography stays compact. Small utility labels, often in Geist Mono, give the interface a technical edge, while Dm Sans keeps the reading voice neutral and direct.

The result is a system that feels curated but not precious. It can show off vivid artwork, code-like tags, and pricing blocks in the same page without losing coherence. The important thing to preserve is the alternation between calm white browsing zones and deep black presentation zones.

## Colors

The palette uses exact black, near-black, white, and a few electric accents. Black is not just background ink; it also appears in major text and control states. Near-black keeps the darkest panels from looking flatly clipped. White and off-white carry the browsing surfaces. The accent colors are loud, but they work best in small areas: buttons, chips, swatches, badges, and graphic fragments. The warm orange action color remains the primary interaction signal. Cyan, lime, and magenta support the art-led side of the system.

| token | value | role |
|---|---|---|
| `action` | `#F54900` | Primary button fill, featured calls to action, and the clearest interactive emphasis |
| `action-alt` | `#FF6D38` | Secondary warm accent for highlights and alternate button states |
| `canvas` | `#FAFAFA` | Main page canvas on light browsing sections |
| `surface` | `#FFFFFF` | Card walls, pinned tiles, and pale content blocks |
| `surface-soft` | `#F4F4F5` | Low-contrast panels, chips, and subtle containers |
| `surface-dark` | `#11181C` | Hero panels, pricing blocks, and dark feature sections |
| `surface-deep` | `#010606` | The deepest black stage for the most dramatic sections |
| `ink` | `#000000` | Primary text and the darkest control text on light surfaces |
| `ink-soft` | `#010101` | Slightly softened dark text and deep editorial copy |
| `muted-ink` | `#3F3F46` | Secondary metadata, captions, and quieter labels |
| `border` | `#E4E4E7` | Card outlines, subtle separators, and palette edges |
| `accent-cyan` | `#00D4FF` | Bright graphic accents, thumbnails, and emphasis in mixed imagery |
| `accent-lime` | `#C0FE04` | High-energy highlight color for small chips and graphic marks |
| `accent-magenta` | `#F00FE6` | Loud decorative accent in palette bars and visual examples |

Light mode should use `canvas`, `surface`, and `border` to keep the page airy and scannable. Dark mode should use `surface-dark` and `surface-deep` to make the hero and pricing blocks feel theatrical. The accent colors can cross both modes, but they should not become large reading fields. The page works when the warm action color is the main interactive signal and the other accents stay selective.

## Typography

The type system uses three families with separate jobs. Dm Sans carries the main reading voice. Dm Sans 9 Pt carries the tighter display voice. Geist Mono handles tags, labels, and compact metadata. The hierarchy comes from size, weight, and tracking first; family changes are secondary. That keeps the page unified even when it shifts from hero copy to card walls to pricing.

Dm Sans is credited to Colophon Foundry Jonny Pinhorn, with Colophon Foundry as vendor. Geist Mono is credited to Basementstudio Andrés Briganti Mateo Zaragoza, with Basementstudio Vercel Andrés Briganti Guido Ferreyra Mateo Zaragoza as vendors. Font use should follow the supplied source license terms.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Dm Sans 9 Pt | 3rem | 400 | 1 | -0.05em | Main hero statement and other page-opening headlines |
| `section-display` | Dm Sans 9 Pt | 2.25rem | 400 | 1 | -0.04em | Large section headings and pricing titles |
| `body` | Dm Sans | 1rem | 400 | 1.5 | 0em | Paragraph copy, descriptions, and general text |
| `body-medium` | Dm Sans | 0.875rem | 500 | 1.43 | 0em | Button copy, emphasized metadata, and compact interface text |
| `label` | Geist Mono | 0.75rem | 700 | 1.33 | 0.1em | Uppercase tags, utility labels, and tiny system cues |
| `meta` | Dm Sans | 0.875rem | 400 | 1.43 | 0em | Dates, source lines, and supporting annotations |

The strongest pattern is the jump between a large, almost headline-only display line and a compact utility layer underneath it. Display text stays short and tight. Body copy breathes a little more. Mono labels should remain brief and categorical; they work best when they mark a source, a state, or a class of content, not when they become full sentences.

## Layout

The page is arranged as chapters rather than as one long feed. The opening chapter is sparse and direct: a header, a headline, a short explanation, and one primary action. The middle chapter is the browsing space, where cards or pin tiles present many examples in a fast-scanning grid. The later chapter often flips to a dark panel for a stronger editorial statement or a pricing section. That change in mood is important. It keeps the page from becoming visually monotone.

The layout prefers a centered reading column with generous side gutters rather than a dense dashboard grid. Card grids can open into multiple columns on wide screens, but each card should still read like an independent tile. The image or preview usually carries the most weight, while the text locks the item into context with a title, a source line, and small supporting notes.

Spacing is doing a lot of work here. Large section gaps separate the hero, the gallery, and the pricing area so that each chapter feels intentional. Inside cards, the spacing is tighter and more utilitarian. That difference between page-level breathing room and card-level density keeps the page from feeling mechanical.

Surface scale also matters. Small controls and tags use compact chips. Mid-size cards use modest rounding. Larger feature blocks use broader rounded panels. The system stays lively because these scales are mixed on purpose. If everything uses the same corner shape and spacing rhythm, the page starts to feel generic. If the scales stay distinct, the page feels designed.

The most useful rule is to keep one dominant message per screenful. On light sections, that usually means a heading plus a grid. On dark sections, it means a big claim plus a few supporting items or a pricing stack. When too many elements compete, the system loses the calm that makes the content easy to scan.

## Visual language

The visual language is built from a few repeated moves. First, hard contrast between black fields and white cards. Second, saturated accents that appear inside illustrations, swatches, and button fills. Third, the mix of editorial mockups with product-like surfaces. Some thumbnails feel like final interfaces, some feel like composited previews, and some feel like poster graphics. That variety gives the page energy without breaking the system.

Image treatment is especially important. The site favors full-frame artwork, stacked thumbnails, and cards that can show a lot at once. It does not wrap images in decorative overlays unless the text needs support. When text sits over an image, the contrast is strong and the copy stays short. That keeps the page legible at a glance.

Geometry stays mostly rectangular, but soft corners matter. Small surfaces use modest rounding. Larger promotional panels can feel softer, especially in pricing or callout areas. The system does not depend on circles or ornamental cutouts. Instead, it lets color, image choice, and typography carry the expression.

The accent colors give the system its voltage. Neon magenta, cyan, and lime work best as localized hits: a swatch, a badge, a thumbnail detail, or a highlighted word. They should not become large reading backgrounds. The warm orange action color is different. It acts as the default interactive cue and can carry more weight than the decorative accents.

This is a system that encourages skimming, comparison, and quick jumps between items. It favors clear category shifts, fast recognition, and many small decisions rather than one long explanatory narrative.

## Components

### Header

The header is minimal and low-friction. It usually holds a small mark at the far left and a short row of links at the far right. Those links stay compact so they do not compete with the hero. On light sections, the header can sit directly on white space with almost no chrome. On dark sections, it can float above the stage and remain visually quiet.

### Primary action

The primary action is a warm orange pill with white text. It should be the most visible interactive object on the page without becoming oversized. The button needs enough rounding to feel friendly, but not so much that it turns into a bubble. This action belongs in the hero, in dark feature blocks, and in pricing callouts. It should stay consistent so the user quickly learns what to click first.

### Search / command bar

The search bar is a compact control strip, often centered or top-anchored. It should feel like a single-purpose field rather than a full application form. The tone is direct and efficient. It works best when the input is short, the affordance is obvious, and the CTA is visually distinct from the field itself. This component bridges the library and the browsing workflow, so it should feel faster than the rest of the page.

### Pin cards

Pin cards are the main browsing unit. Each card combines an image area with a small metadata area below or beside it. The image is the loudest part of the tile, while the text stays concise: title, source, and occasional descriptors. Some cards include color chips or label strips that show the palette associated with the work. The card shape should stay simple; composition and content do the heavy lifting.

### Palette strip / swatches

Palette strips turn a design into a row of color decisions. Each swatch is a small, readable block with direct color labeling. The strips should be easy to scan and not too tall. They work best when the colored tiles are arranged in a single line or a small wrapped grid, with text placed directly on the swatch or immediately above it. This component gives the page a technical, catalog-like feel.

### Dark feature and pricing blocks

The dark blocks are the most dramatic components in the system. They use a black or near-black field, white or near-white text, and one or two saturated accents. Their job is to make the page feel authoritative at the moment the user is deciding whether to stay or act. Pricing blocks should keep the hierarchy obvious: title, price, short feature list, and a clear button. The background should stay clean and spare so the choices remain the focus.

### Gallery tiles and project mockups

The gallery tiles are more expressive than the standard pin cards. They can show screenshots, mockups, or layered visual previews. These tiles often sit in a loose grid and create the page’s controlled visual noise. The rule is simple: let the thumbnail be bold, but keep the surrounding frame calm. The surrounding white or black surface gives the tile enough room to breathe.

## Responsive behavior

On smaller screens, the system should collapse into a single-column reading path. The header should stay short. The hero should keep its headline first, its supporting line second, and the main action immediately after. Card grids should stack rather than squeeze into cramped columns. Palette strips should wrap only when the labels remain legible.

Dark sections need extra care on narrow screens. The large statement should remain prominent, but the supporting cards should move below it instead of beside it if that prevents crowding. Pricing columns should also stack so the user can compare them without horizontal scanning.

The image-heavy parts of the system should preserve crop integrity. If a thumbnail or mockup becomes too small, reduce the number of cards before reducing clarity. A smaller number of strong cards works better than a packed row of tiny ones.

Text scaling should stay conservative. The page depends on strong hierarchy, not dramatic type jumps. That means the display face can shrink, but it should still feel like the same system. Utility labels and metadata should stay readable and should not collapse into noise.

## Practical implementation guidance

### Preserve

- Keep the white and black chapter structure intact.
- Let the orange action color remain the primary interactive signal.
- Use bright accent colors only as targeted emphasis.
- Maintain image-first cards with compact metadata.
- Keep mono labels short and functional.
- Preserve generous section spacing so the page feels curated rather than dense.

### Avoid

- Avoid turning every card into a pill.
- Avoid adding heavy shadows to all surfaces.
- Avoid using neon colors as large backgrounds.
- Avoid mixing too many type families.
- Avoid stuffing card footers with long explanatory text.
- Avoid shrinking the grids so far that the thumbnails lose their value.

### Recommended build order

1. Establish the core colors and the light/dark surface split.
2. Build the hero, header, and primary action.
3. Build the pin card and palette strip patterns.
4. Add the browse grid and metadata rules.
5. Add the dark feature and pricing sections.
6. Tune spacing, rounding, and type scale across the whole page.
7. Test the single-column version last so the hierarchy survives on small screens.

### Accessibility

- Keep text on images only when contrast stays strong.
- Ensure orange actions stay legible against both white and dark surfaces.
- Use mono labels sparingly so they remain easy to read.
- Provide clear focus treatment for buttons, links, and card triggers.
- Make sure color chips are never the only way to identify a design or category.
- Preserve readable line length in the hero and pricing blocks as the viewport narrows.

## Scope note

This guide covers the homepage, search and pin listings, and pricing surfaces on fontofweb.com. It does not include mobile-only rearrangements, motion, hover or focus behavior, empty states, or browser-specific rendering differences.
