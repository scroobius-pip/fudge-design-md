# How aldiwan.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aldiwan.net-design)

Last updated: 2026-08-04

## Captured pages

[![Dark hero band with centered search field and top navigation](https://pin.fontofweb.com/1091?format=jpg)](https://design.withfudge.com/share/pin-1091)

[Dark hero band with centered search field and top navigation](https://design.withfudge.com/share/pin-1091)

[![White taxonomy cards with outlined pills and brown promo block](https://pin.fontofweb.com/1092?format=jpg)](https://design.withfudge.com/share/pin-1092)

[White taxonomy cards with outlined pills and brown promo block](https://design.withfudge.com/share/pin-1092)

## Overview

Aldiwan is a scholarly Arabic index with a calm, formal visual voice. The page puts calligraphic typography first, then frames that typography with warm brown bands, white paper cards, and thin tan borders. The result feels closer to a reference shelf than a modern app dashboard: the interface is compact, orderly, and centered on search, classification, and navigation.

The system depends on a strong contrast between two surfaces. Dark brown sections carry the opening search stage and the main call to action. White and near-white cards hold the author lists, taxonomy blocks, and social prompt. That shift keeps the page readable even when the content becomes dense. There is no loud accent color competing for attention; hierarchy comes from tone, fill, outline, and type scale.

The most important qualities to preserve are the right-to-left composition, the generous space around every card, the repeated pill shapes, and the calligraphic emphasis in titles and navigation. The page should feel curated and literary, not decorative. Its strength is restraint.

## Colors

The palette is narrow and warm. Pale papers and white canvases do most of the structural work, while dark brown surfaces hold the hero, selected controls, and the strongest calls to action. White carries the wordmark and hero headline on the dark hero background, while black is reserved for the search glyph and the darkest text on light surfaces. Tan and dusty beige bridge the gap between the two modes and keep the layout from feeling sterile.

| token | hex | use |
|---|---|---|
| `canvas` | `#FEFEFE` | Main page background and the lightest card framing |
| `paper` | `#FEFEFD` | Raised cards, input fields, and soft panel interiors |
| `ink` | `#000000` | Headings, icons, and the search glyph |
| `muted-ink` | `#7B736E` | Secondary nav items, quiet labels, and less urgent text |
| `border` | `#CBBDB5` | Chip outlines, card edges, and field borders |
| `surface-brown` | `#5B4E48` | Filled buttons, active tabs, and the dark callout bar |
| `surface-deep` | `#3A332E` | The deepest hero wash and the most recessed surfaces |
| `surface-tan` | `#A68C6E` | Warm label text, subtle emphasis, and supportive badges |
| `surface-dust` | `#D3C4BA` | Low-contrast dividers, quiet fills, and soft backdrop tones |

Light surfaces should read as stacked sheets of paper. Dark brown surfaces compress the hierarchy and make the search stage feel grounded and deliberate. The interface does not rely on a bright chromatic accent; instead, the filled brown controls and outlined pills carry interaction. Photographing or texturing the hero should stay inside the same brown family so the page keeps its calm, archival character.

## Typography

Amiri carries the entire visible hierarchy. That single-family approach gives the site a continuous literary tone and avoids the split between “UI font” and “content font” that would make the page feel less formal. The headings are large and ornate, but the supporting text stays compact and highly legible. Weight changes matter more than family changes here. Font reuse should be cleared separately.

Licensing terms were not supplied for Amiri or Font Awesome 5-Solid.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Amiri | 3.5rem | 700 | 1 | -0.02em | The large hero line and the most prominent page claims |
| `section-display` | Amiri | 2.5rem | 700 | 1.05 | -0.02em | Section heads such as poet and AI-poet blocks |
| `card-heading` | Amiri | 1.5rem | 700 | 1.15 | 0em | Card titles and medium-strength panel labels |
| `body` | Amiri | 1rem | 400 | 1.8 | 0em | Lists, supporting copy, and explanatory lines |
| `label` | Amiri | 0.875rem | 700 | 1.2 | 0.03em | Pills, compact buttons, and short interface labels |
| `icon-glyph` | Font Awesome 5-Solid | 1rem | 400 | 1 | 0em | Search, group, medal, and social symbols |

The page depends on generous line height in the body and tighter leading in the headlines. Arabic text needs enough room to breathe, especially inside pills and tab rows where the labels are short but visually dense. The titles should sit upright and confident, while the interface labels should remain compact and centered. The icon font should stay visually subordinate to the text and never try to become the main voice of a control.

## Layout

The desktop layout is built as a vertical sequence of wide blocks rather than a busy grid. The opening hero spans the full width with a dark field, the wordmark anchored to the upper right, a horizontal navigation strip above, and a centered search bar that dominates the composition. That search field is the main focal object: it is wide, pale, and visually quiet so the surrounding text can do the work.

Below the hero, a brown callout bar spans the page and acts as a hinge between search and browsing. It compresses the message into one line and pairs it with a compact button. That bar should stay visually solid, with little internal decoration, because its job is to reset attention before the card sections begin.

The lower page is organized into broad white cards with light borders and rounded corners. The cards are placed in a balanced row, with one dark promotional panel offset alongside the larger white taxonomy panels. Inside those cards, content is laid out in small grids and pill lines, keeping names easy to scan without making the page feel segmented. Spacing is generous between panels and moderate inside each one. The overall rhythm is calm: strong band, open paper card, strong band, open paper card.

Right-to-left alignment is essential. Titles, list names, and icon placement should honor Arabic reading order instead of centering everything mechanically. The layout works because the cards feel aligned to a strong invisible axis on the right while still leaving enough room for the lists to breathe.

## Visual language

Aldiwan’s visual language sits between a library catalog and a community index. The typography is formal and slightly ceremonial, while the cards and chips keep the content easy to browse. That combination is what makes the page distinctive: it is serious, but not stiff.

The repeated pill shape is the key structural motif. It appears as outlined category chips in the white sections and as filled dark buttons in the brown sections. That change of fill and border is enough to signal state without adding unnecessary ornament. The same idea appears in the cards: pale surfaces, thin borders, and rounded corners create continuity across different kinds of content.

Black pictograms reinforce the functional side of the system. They sit next to titles and act as quick signals for author lists, classifications, and social actions. The icons should remain bold and simple, with no decorative treatment beyond their contrast against the pale card surfaces. The page avoids shadows and glossy effects; shape and tone do the heavy lifting.

The brown palette gives the site its mood. It feels warm, archival, and literary rather than technical. That mood should stay consistent across the hero, the category cards, and the promotional blocks so the interface reads as one coherent environment.

## Components

### Hero search stage

- **Anatomy:** Wordmark, horizontal navigation, large search field, and two compact call-to-action buttons.
- **Surface:** Deep brown field with a soft photographic or blurred backdrop feel.
- **Typography:** Large Amiri headline above the search box; smaller Amiri nav and button text.
- **Shape:** Rounded search field with a soft radius; buttons are compact rectangles with modest corner rounding.
- **Composition:** The search field sits at the visual center. The logo stays high on the right. The buttons live below the field and remain visually secondary.
- **Visible states:** A filled brown button reads as primary; outlined or lighter controls remain secondary.

### Brown callout bar

- **Anatomy:** Single-line message plus one button.
- **Surface:** Same brown family as the hero, but flatter and more compact.
- **Typography:** Large centered Amiri line with a smaller button label.
- **Spacing:** Tight internal spacing, wide outer margins.
- **Composition:** Treat it as a hinge between the search stage and the browsing cards, not as a separate campaign banner.

### Taxonomy cards

- **Anatomy:** White card, title row with icon, and a grid of short labels or names.
- **Surface:** Paper white with a thin border and a very light shadow or none at all.
- **Typography:** Section-display or card-heading for the title, label text for the chips or list items.
- **Shape:** Soft panel radius with pill-shaped internal controls.
- **Composition:** Keep the list items evenly distributed so the card reads like a classification sheet.
- **Visible states:** Outlined chips are the default. Filled dark chips indicate a stronger selection or action.

### Social promo block

- **Anatomy:** Dark square or rectangular panel, a short message, one button, and a row of small social icons.
- **Surface:** Brown fill with white or near-white text.
- **Typography:** Larger Amiri line for the message, compact label sizing for the button.
- **Icon treatment:** Social glyphs sit inside small light squares and stay high contrast.
- **Composition:** The button and icon row should sit low in the panel, leaving the headline to do most of the work.

### Utility chips and icon buttons

- **Anatomy:** Small rounded pills and icon-led squares used for names, categories, and social links.
- **Surface:** Usually white with tan borders on light sections; filled brown in active or primary contexts.
- **Typography:** Tight Amiri labels with enough weight to stay legible at small sizes.
- **Shape:** Pills should feel soft but not overly rounded; icon buttons can stay slightly more angular.
- **Visible states:** Hover or active treatment should not introduce a new color family. Use fill, border strength, or text weight instead.

## Responsive behavior

On narrower widths, this system should preserve the same reading order: hero search, callout bar, category cards, then supporting panels. The search field should remain prominent and full width before the navigation compresses. White cards should stack cleanly rather than collapsing into dense columns. Pills should wrap onto multiple rows instead of shrinking to unreadable widths.

The right-to-left axis should remain visible at every size. Titles and icons should continue to align to the reading flow instead of being forced into a center-heavy pattern. When space gets tight, the page should reduce horizontal density before reducing type size, because the identity depends on the clarity of the Arabic lettering. Icons can shrink slightly, but the names themselves should stay readable.

Dark blocks should keep enough vertical padding to feel intentional on small screens. The design should avoid crowding the call-to-action areas, because the page already has a lot of textual content. The safest behavior is to stack, keep the brown bands clean, and let the cards breathe.

## Practical implementation guidance

### Preserve

- Keep Amiri as the single voice for headings, buttons, and lists.
- Keep the warm brown family as the only strong interaction color.
- Preserve thin tan borders on the light cards and pills.
- Let the hero search field stay large and central.
- Keep iconography bold, simple, and subordinate to the Arabic text.

### Avoid

- Avoid introducing a bright accent color that breaks the warm archive feel.
- Avoid heavy shadows, glossy button treatments, or glass effects.
- Avoid generic sans-serif labels that fight the calligraphic tone.
- Avoid tight card spacing that turns the taxonomy areas into a wall of text.
- Avoid centering every element; the page needs right-to-left visual gravity.

### Recommended build order

1. Establish the color pairs for paper, ink, and brown surfaces.
2. Set the Amiri hierarchy for hero, section, card, and label text.
3. Build the hero search stage with its centered field and compact controls.
4. Add the brown callout bar.
5. Build the taxonomy cards and pill system.
6. Add the social promo block and icon buttons.
7. Tune borders, spacing, and right-to-left alignment together.

### Accessibility

- Keep high contrast on every brown-filled control.
- Make sure icon-only actions have clear text labels nearby.
- Preserve visible focus indicators on pills, buttons, and the search field.
- Keep Arabic names from truncating too early; let them wrap before they disappear.
- Use enough line height in body text to keep dense lists readable in Arabic script.

## Scope note

This guide covers the homepage hero, the search stage, the brown callout bar, the author and taxonomy cards, and the social promo block on aldiwan.net. Measurements are practical adaptation targets. Article pages, search results behavior, hover and pressed states, motion, and admin surfaces are not included.
