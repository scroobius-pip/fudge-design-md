# How artera.ae is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/artera.ae-design)

Last updated: 2026-08-04

## Captured pages

[![Large artwork detail with right-hand facts and action row](https://pin.fontofweb.com/6538?format=jpg)](https://design.withfudge.com/share/pin-6538)

[Large artwork detail with right-hand facts and action row](https://design.withfudge.com/share/pin-6538)

[![Dense masonry gallery beneath a centered rounded search bar](https://pin.fontofweb.com/6537?format=jpg)](https://design.withfudge.com/share/pin-6537)

[Dense masonry gallery beneath a centered rounded search bar](https://design.withfudge.com/share/pin-6537)

[![Gold-accented hero with tilted artwork collage and phone mockup](https://pin.fontofweb.com/6536?format=jpg)](https://design.withfudge.com/share/pin-6536)

[Gold-accented hero with tilted artwork collage and phone mockup](https://design.withfudge.com/share/pin-6536)

## Overview

Artera reads as a dark art archive with a strong collector instinct. The interface lets the artwork lead, then frames it with compact chrome: a black canvas, white Inter text, muted gray metadata, and a single gold accent for the actions that matter most. The result feels closer to a night museum than a conventional marketplace. Nothing in the shell tries to outshine the art; the UI stays low-contrast and quiet so the images carry the emotional weight.

The system has two main moods. The home and discovery views lean into dense image collage, centered search, and a large promotional headline. The artwork detail view becomes more editorial: one large artwork on the left, a metadata rail on the right, then social actions, comments, and related works underneath. Across both moods, the same dark surfaces and rounded media cards keep the experience coherent.

## Colors

Artera’s palette is narrowly controlled. Black and near-black values form the shell; white is used for the strongest text; grays soften metadata, borders, and secondary labels; gold is the only warm brand note. That restraint matters because the artworks themselves already bring in reds, browns, creams, and olive tones. The UI does not compete with those colors. It creates a dark frame around them.

Light tones appear as text and highlights, not as a light theme. Dark tones appear in several steps so cards and controls can sit above the canvas without loud separation. The gold accent belongs to the primary app action, selected chips, and small emphasis marks. The palette therefore behaves as one dark system with one warm signal rather than a multi-accent product.

| token | value | use |
|---|---|---|
| `action` | `#F2C14E` | Primary app button, selected chips, and emphasis marks |
| `canvas` | `#000000` | Page background and overall gallery shell |
| `surface-1` | `#070707` | Deep card and panel background |
| `surface-2` | `#0F0F0F` | Raised dark surfaces under media and controls |
| `surface-3` | `#1F2937` | Search field fill and other prominent control surfaces |
| `surface-4` | `#262626` | Hairline card and control borders |
| `surface-5` | `#3F3F3F` | Stronger dark control background and inset depth |
| `border` | `#4B5563` | Secondary border and divider tone |
| `text` | `#FFFFFF` | Headings, labels, and the most important body copy |
| `text-muted` | `#D1D5DB` | Supporting text inside rails and panels |
| `text-soft` | `#939393` | Metadata and descriptive labels |
| `text-subtle` | `#9CA3AF` | Less prominent metadata and helper copy |
| `divider` | `#D3D2D2` | Pale divider and bright separator tone |
| `surface-bright` | `#DBDBDB` | Light thumbnail highlight and pale UI accent |
| `paper` | `#F3F3F3` | The lightest card-paper note in the palette |

## Typography

Inter is the only family visible in the packet, and the page uses it in a compact but broad scale: bold hero text, semibold section titles, medium-weight controls, and quieter metadata. The hierarchy depends on size, weight, and spacing more than on family switching. That makes the system feel disciplined. The same letterforms carry the home headline, search prompts, artwork titles, tag labels, and comments.

The biggest display treatment belongs to the home hero. Smaller but still prominent titles appear on artwork pages and in section headers. Body copy stays calm and readable at 16px with generous leading. Labels and metadata compress to 12–14px where the page needs density. Inter licensing is not supplied or confirmed here. Inter reuse should be checked separately.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Inter | 4.5rem | 700 | 1 | -0.02em | Home headline and strongest promotional statement |
| `section-display` | Inter | 1.5rem | 700 | 1.5 | 0em | Section headers such as related content |
| `page-title` | Inter | 1.4375rem | 600 | 1.5 | 0em | Artwork title and page-level heading |
| `card-title` | Inter | 1.375rem | 600 | 1.5 | 0em | Secondary titles inside dense content areas |
| `body` | Inter | 1rem | 400 | 1.5 | 0em | Descriptions, metadata, and general copy |
| `body-medium` | Inter | 1rem | 500 | 1.5 | 0em | Buttons, selected labels, and stronger body text |
| `label` | Inter | 0.875rem | 500 | 1.43 | 0em | Search prompts, control labels, and metadata chips |
| `micro` | Inter | 0.75rem | 400 | 1.33 | 0em | Small status text and quiet utility copy |

## Layout

The page sits inside a centered dark frame with generous breathing room. Most shells use wide horizontal padding and a restrained vertical stack, so the artwork and controls never feel pinned to the edges. The spacing rhythm is deliberate: compact control gaps, then broader separations between major blocks. The result is calm despite the dense amount of imagery.

The home screen uses a promotional top band: logo, language control, sign-in button, and the gold open-in-app action across the top; a wide rounded search field centered below; then a collage-like field of angled artwork tiles and a phone preview. That collage does not read as decoration alone. It is the visual promise of the product: the page feels like a living archive.

Discovery and browsing pages switch to a masonry layout of rounded cards. The tiles are packed tightly enough to suggest abundance, but the corners, borders, and consistent gutters keep the grid from feeling chaotic. The cards let different artwork colors breathe inside the same dark container.

The detail page is split more cleanly. A large artwork image anchors the left side. A right rail stacks title, audio waveform, author line, location, medium, tag chips, copyright, description, comments, and action buttons. Below that, related works appear in a horizontal row of image cards. This order makes the page easy to scan: image first, facts second, actions third, discovery last.

## Visual language

Artera’s visual language is built from contrast between darkness and image texture. The canvas is nearly black, while the art tiles contain all the variation: warm oil-paint reds, deep browns, muted creams, and occasional pale highlights. The UI chrome stays minimal so those artworks feel framed rather than decorated. The gold accent is small but memorable; it marks the only persistent brand color and gives the page a collector’s sheen without turning it flashy.

Rounded cards keep the system soft. Borders are thin and dark. Shadows stay subtle or absent, so depth comes from layering and spacing more than from heavy elevation. The waveform on the detail page adds a rhythmic line that makes the page feel active without adding animation. Chips gather into compact clusters and act like catalog notes. Overall, the system feels archival, precise, and image-led.

## Components

### Top bar
- **Anatomy:** Wordmark at left, language pill, sign-in button, and the gold open-in-app call to action.
- **Surface:** Black canvas with no separate header band.
- **Typography:** 16px Inter for controls, with heavier weight reserved for the main action.
- **Shape:** 0.5rem to 0.625rem corners on pills and buttons.
- **Hierarchy:** The gold button is the strongest visual point in the bar; the other controls remain quiet.

### Search field
- **Anatomy:** Wide rounded input with a search icon and centered placeholder.
- **Surface:** Charcoal fill against the black background.
- **Typography:** Large muted Inter text that reads as prompt text before entry.
- **Shape:** Very soft pill geometry, much rounder than a normal field.
- **Spacing:** Substantial left and right padding so the icon and text breathe.
- **Visible state:** The empty field still feels intentional because the placeholder is prominent.

### Artwork cards
- **Anatomy:** Image-first tiles in a masonry or related-work row.
- **Surface:** Dark frame with thin borders and rounded corners.
- **Typography:** Any text attached to a tile stays secondary and compact.
- **Shape:** 0.5rem card corners, with enough rounding to soften the grid.
- **Composition:** The image fills nearly the whole tile; chrome stays outside the image area.
- **Hierarchy:** Card content should always let the artwork dominate.

### Detail rail
- **Anatomy:** Title, waveform, author line, location, medium, chips, copyright, description, comments, and action row.
- **Surface:** Black to near-black background with white text and muted supporting copy.
- **Typography:** Page title at 23–24px, body text at 16px, metadata and chip labels at 12–14px.
- **Spacing:** Tight vertical stacking between metadata lines, then broader gaps around the description and actions.
- **Visible states:** Gold chip accents, muted inactive labels, and empty comments that read as a centered lack of activity.

### Tag chips and metadata
- **Anatomy:** Small rounded chips with a hash prefix and a label.
- **Surface:** Dark chip fill with gold text or gold emphasis marks.
- **Typography:** Small medium-weight Inter that stays readable inside dense clusters.
- **Shape:** Fully pill-like, with short labels and compact padding.
- **Hierarchy:** These chips support the artwork; they should never compete with the title or image.

### Action row
- **Anatomy:** Collect, React, and Comment buttons under the detail rail.
- **Surface:** The main action is gold-filled; the secondary actions remain dark and outlined.
- **Typography:** 16px Inter with enough weight to stand out against the dark background.
- **Shape:** Rounded controls with restrained depth.
- **Hierarchy:** Use the gold button for the primary action and keep the others visually subordinate.

## Responsive behavior

For narrower screens, keep the same reading order: brand and actions first, search second, image third, metadata last. The detail rail should stack under the artwork before the artwork itself becomes too small to carry the page. Masonry cards can collapse from many columns to fewer columns, but the rounded image treatment and dark borders should stay unchanged. The gold action should remain visible and easy to tap even when other controls compress.

## Practical implementation guidance

### Preserve
- Keep the black canvas and gold action as the core brand signal.
- Keep Inter as the only text family.
- Keep artwork imagery dominant; chrome should frame it, not decorate it.
- Preserve the 0.5rem card corners, 0.625rem control corners, and the larger 3rem panel softness where it appears.
- Keep the interface narrow in palette and broad in image variety.

### Avoid
- Avoid adding extra accent colors that pull attention away from the art.
- Avoid bright separators, pale page sections, or glossy gradients that fight the dark museum feel.
- Avoid over-rounding every control to the same shape; cards, pills, and large panels need different curvature.
- Avoid dense icon clutter and noisy action bars.
- Avoid headline styles that overpower the artwork or stretch beyond the measured scale.

### Recommended build order
1. Build the black canvas and the top bar.
2. Add the centered search field and its gold action.
3. Recreate the masonry artwork grid with rounded dark tiles.
4. Build the artwork detail split: image left, metadata rail right.
5. Add tag chips, comment empty state, and the action row.
6. Finish with the related-works strip and responsive stacking.

### Accessibility
- Keep gold text and gold-filled controls legible against black.
- Give the search field a clear accessible label, not only placeholder text.
- Use non-color cues for selected chips and primary actions.
- Ensure every artwork tile and control has a useful name.
- Keep focus styles visible on the dark surfaces, especially for chip clusters and top-bar buttons.
- Provide accurate alternative text for each artwork image and concise labels for the waveform control.

## Scope note

This guide covers the desktop home collage, the masonry artworks index, and the single-artwork detail page on artera.ae. It does not include mobile rearrangement, motion, hover behavior, loading states, or licensing confirmation for Inter. Inter licensing is not supplied or confirmed here.
