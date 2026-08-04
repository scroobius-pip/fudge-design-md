# How dandad.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dandad.org-design)

Last updated: 2026-08-04

## Captured pages

[![Giant search headline with rounded filter chips and result cards](https://pin.fontofweb.com/9795?format=jpg)](https://design.withfudge.com/share/pin-9795)

[Giant search headline with rounded filter chips and result cards](https://design.withfudge.com/share/pin-9795)

[![Full-width search field above topic chips and the yellow about band](https://pin.fontofweb.com/9794?format=jpg)](https://design.withfudge.com/share/pin-9794)

[Full-width search field above topic chips and the yellow about band](https://design.withfudge.com/share/pin-9794)

[![Saturated yellow inspiration strip with boxed topics and a cropped tile](https://pin.fontofweb.com/9793?format=jpg)](https://design.withfudge.com/share/pin-9793)

[Saturated yellow inspiration strip with boxed topics and a cropped tile](https://design.withfudge.com/share/pin-9793)

[![New Blood archive title with active pills and a dense award-card grid](https://pin.fontofweb.com/9792?format=jpg)](https://design.withfudge.com/share/pin-9792)

[New Blood archive title with active pills and a dense award-card grid](https://design.withfudge.com/share/pin-9792)

## Overview

D&AD reads as an institution for finding, sorting, and presenting creative work. The system is spare, direct, and editorial. White space carries most of the composition, near-black type carries the message, and a single yellow accent carries the active state. The page never feels decorative for its own sake. It feels edited. That is the core visual promise: a calm archive with strong hierarchy and clear paths for browsing.

The strongest identity markers are easy to keep aligned: oversized D-500 headlines, compact pill filters, thin separators, 5px corner radii, and image-led cards. D-400 handles the smaller text layers, while D-500 owns the large display moments. D-400 and D-500 are credited to Briton Smith and Family Type. The mix is disciplined enough to hold dense content, but warm enough to keep the site from feeling clinical.

## Colors

The palette is narrow and role-based. White is the default field. Near-black and black split headlines, utility text, and the deepest controls. Warm neutrals and pale lavender soften cards and panels without introducing extra decoration. Yellow is the only strong accent and should stay reserved for selection, featured bands, and the most important browsing controls.

| token | hex | use |
|---|---|---|
| `canvas` | `#FFFFFF` | Main page background, card base, footer field, and the open negative space between sections |
| `ink` | `#161616` | Primary body copy, navigation, labels, and most headings |
| `ink-strong` | `#000000` | Deepest text tone, brand mark edges, and the hardest contrast moments |
| `ink-soft` | `#222222` | Dark chip fills, utility buttons, and heavier control surfaces |
| `ink-muted` | `#2A2A2A` | Pressed dark controls and the most subdued dark background role |
| `neutral` | `#B6B6B6` | Inactive utility text, de-emphasized metadata, and quiet icon accents |
| `border` | `#CECECE` | Search field outlines, card rules, and thin separators in dense lists |
| `surface-warm` | `#F0EEE9` | Neutral chips, calm selection pills, and soft panel backings |
| `surface-lavender` | `#EBE8F5` | Alternate panel fill for archive, course, and editorial surfaces |
| `action` | `#FFC700` | Selected filters, featured bands, highlighted pills, and the primary brand signal |

The light mode relationship is simple: white carries the layout, black carries readability, and yellow marks the current path. The two soft surfaces support cards and chips without competing with imagery. Dark fills appear only in small controls where the page needs a stronger stop. That keeps the system bright, legible, and restrained even when the content grid gets dense. The photographs and posters supply most of the color energy; the interface should stay quiet enough to frame them.

## Typography

The typography is built from one face family and one fallback utility face. D-500 owns the oversized display cuts. D-400 handles navigation, body copy, labels, metadata, and card text. Applesystem appears only as a utility fallback where the interface needs a plain system voice. The visible rhythm depends on that split: the page uses large scale jumps for structure, then keeps smaller text compact and steady so the browsing surface stays readable.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | D-500 | 5.9375rem | 500 | 1 | 0.01em | Page-level search and archive titles |
| `section-display` | D-500 | 3.625rem | 500 | 1 | 0.01em | Major archive and landing headings |
| `card-title` | D-400 | 1.25rem | 400 | 1.25 | 0.025em | Result titles, course names, and card headings |
| `body` | D-400 | 0.875rem | 400 | 1.43 | 0.036em | Navigation, metadata, labels, and short supporting copy |
| `label` | D-400 | 0.75rem | 400 | 1.2 | 0.042em | Small chips, controls, and utility text |
| `utility` | Applesystem | 0.875rem | 400 | 1.43 | 0em | Fallback utility text when the system face appears |

The type scale is intentionally blunt. The display cuts are large enough to dominate the viewport without needing stylization. The body range stays compact so rows of filters, card metadata, and footer links can live together without noise. Slight tracking helps the smaller text breathe inside pills and compact controls. D-500 gives the site its institutional confidence; D-400 keeps that confidence usable at browsing scale.

## Layout

The page is organized like a library with a front desk. The header sits on a white field with a quiet utility line and a long horizontal nav. Below it, the main story starts immediately: a very large title, then a strip of rounded filters, then a grid of cards. Search pages favor a strong title block followed by a compact control row, so the first screen communicates the subject and the available actions at once. Nothing is hidden behind a second layer of chrome.

Archive views use the same structure but lean harder into browsing density. Titles are left aligned and oversized. Active and inactive pills sit below them, then the card grid takes over with wide gutters and clear separation between items. The cards are wide enough for poster imagery and a short title without becoming a magazine stack. Large empty areas are deliberate. They give the page room to breathe and keep the hierarchy easy to scan.

The yellow editorial band changes the rhythm. It interrupts the white field with a saturated strip, then uses boxed topics and a cropped image tile to anchor the section. This is the page’s strongest contrast move, and it works because the band is simple: strong color, bold typography, thin outlines, and one image cue. Footer layout is the opposite. It becomes a calm multi-column index with link groups, social tiles, and legal copy. It stretches across the page but stays visually quiet.

The system should maintain the same layout logic across home, search, archive, and insight views. Titles, filters, and cards should keep their order even when the content density changes. The page feels coherent because it never switches to a different structural language for different sections. Instead, it changes emphasis through scale, color, and spacing.

## Visual language

D&AD relies on restraint plus one strong interruption. The restraint is the white background, thin borders, and near-square 5px corners. The interruption is the yellow accent and the large display type. Together they create a system that feels editorial rather than glossy. The page trusts content to do the heavy lifting, then uses a few disciplined shapes to group it.

Cards and chips are the main geometry. Chips are fully rounded and compact, with yellow for active states and soft neutrals for inactive states. Cards are rectangular and flat, with little or no depth. Imagery supplies variation: posters, stills, and module photos bring the color while the interface stays calm. Titles usually sit close to images, which keeps each card readable at a glance. The visual rhythm is built from alignment, spacing, and scale rather than ornament.

The system should avoid anything that makes it feel synthetic or over-finished. No glassy surfaces. No floating shadows as a default language. No gradient program. No decorative framing around content. Even the dark controls are small and functional. The page works because the palette is narrow and the shapes are simple. That discipline makes the large titles feel more authoritative and the cards feel more archival.

## Components

### Header and utility row

**Anatomy:** left brand mark, horizontal navigation, and right-aligned utility links with small controls.  
**Surface:** white canvas with no heavy framing.  
**Typography:** compact D-400 body text with restrained tracking.  
**Composition:** the header should stretch wide and stay subordinate to the main title beneath it.  
**Visible states:** the current destination should remain quiet but legible; utility items should not compete with the page title.

### Search field and filter chips

**Anatomy:** full-width search input, small clear control, then a dense row of pills.  
**Surface:** white or warm-neutral field with a thin border and tight internal padding.  
**Shape:** the input keeps a small 5px radius; chips are fully rounded.  
**Hierarchy:** the search field is the primary control, while chips refine the query and limit the result set.  
**Variants:** neutral chips use warm gray; selected chips use yellow; some utility pills use dark fills with light text.  
**Visible states:** the active chip must read as selected immediately without needing extra decoration.

### Result and archive cards

**Anatomy:** image, small category label or result context, then the title.  
**Surface:** flat white cards or pale panels with a faint border.  
**Typography:** card titles sit around 1.25rem; metadata is smaller and tighter.  
**Spacing:** cards need enough breathing room to avoid a crowded gallery feel.  
**Composition:** posters and stills should lead; text should confirm the subject without crowding the image.  
**Visible states:** linked titles can use an underline or similar cue to signal clickability.

### Yellow editorial band

**Anatomy:** full-width yellow surface, boxed topic chips, large supporting phrase, and a cropped image tile.  
**Surface:** action yellow dominates the strip, with dark text and outlines for legibility.  
**Shape:** chips stay pill-like or lightly rounded; the image tile remains rectangular.  
**Composition:** let the band feel like a featured chapter break rather than a banner ad.  
**Hierarchy:** topic chips should carry the browsing logic; the image should anchor the left or lower edge.  
**Visible states:** the band should feel bold but not noisy; its power comes from scale and restraint together.

### Footer and cookie control

**Anatomy:** multi-column link groups, social icon tiles, legal line, and a small cookie settings pill.  
**Surface:** white, quiet, and text-led.  
**Typography:** body size and smaller utility size only; no large display copy here.  
**Spacing:** column groups need large gaps and clear vertical separation.  
**Visible states:** the cookie control should stay compact and dark, with readable contrast and a clear boundary.  
**Composition:** the footer should read as a directory, not as a secondary hero.

## Responsive behavior

The desktop structure should collapse without changing the language. Keep the title first, then the filter chips, then the card grid, then the footer. On narrower screens, the chip row should wrap before the title shrinks too aggressively. Card grids should reduce from wider multi-column layouts to fewer columns while preserving the same border, radius, and spacing logic. The yellow editorial band should stay full-width instead of turning into a boxed card. The main adjustment on small screens is spacing discipline, not a new visual style.

Typography should also stay proportional. The largest display cut may step down, but it should still feel oversized relative to body text and filters. Chips should remain pill-shaped and legible. Footer columns should stack into readable groups rather than compress into a single dense block. The responsive goal is continuity: same visual grammar, smaller footprint.

## Practical implementation guidance

### Preserve

- Keep D-500 as the display voice and D-400 as the body and control voice.
- Keep white as the main canvas and yellow as the main action signal.
- Preserve 5px corners on cards and controls.
- Keep the interface flat; let borders, spacing, and image crops define structure.
- Retain the strong archive feel: browsable, calm, and information-dense.

### Avoid

- Avoid adding soft shadows to cards or chips.
- Avoid replacing yellow with a second bright accent.
- Avoid full-card gradients or glassy surfaces.
- Avoid over-rounding everything; the system depends on a mix of pills and restrained rectangles.
- Avoid shrinking the footer into a generic icon bar; it should remain a readable index.

### Recommended build order

1. Set the canvas, ink, action, border, and soft surface tokens.
2. Lock the 95px and 58px headline scale before adding any layout chrome.
3. Build the header, search field, and chip row as one shared control system.
4. Add the result and archive card grid with consistent image framing.
5. Finish with the yellow editorial band and the full footer index.

### Accessibility

- Keep yellow chips paired with dark text so small labels remain readable.
- Preserve visible focus styles on inputs, chips, links, and footer controls.
- Keep link cues non-color-only; underlines work well for result titles.
- Provide descriptive alt text for posters, stills, and logo marks.
- Let small utility text wrap before truncating so legal and navigation copy stays legible.

## Scope note

This guide covers the white home and search surfaces, the yellow inspiration band, the New Blood archive layout, and the shared footer. It does not define mobile-specific layouts, motion, hover choreography, loading states, empty states, or behavior on unshown subpages.
