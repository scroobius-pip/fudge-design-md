# How designme.agency is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/designme.agency-design)

Last updated: 2026-08-04

## Captured pages

[![White split hero with compact claim and orange dashboard stage](https://pin.fontofweb.com/6408?format=jpg)](https://design.withfudge.com/share/pin-6408)

[White split hero with compact claim and orange dashboard stage](https://design.withfudge.com/share/pin-6408)

[![Full-width warm accent panel with oversized centered headline](https://pin.fontofweb.com/4899?format=jpg)](https://design.withfudge.com/share/pin-4899)

[Full-width warm accent panel with oversized centered headline](https://design.withfudge.com/share/pin-4899)

[![Deep dark footer with link columns and giant wordmark](https://pin.fontofweb.com/6409?format=jpg)](https://design.withfudge.com/share/pin-6409)

[Deep dark footer with link columns and giant wordmark](https://design.withfudge.com/share/pin-6409)

## Overview

DesignMe’s homepage is a narrow-to-broad agency pitch system built on hard contrast and a single warm accent field. The page starts in white space with a left-aligned narrative rail and a large product stage, moves into a saturated statement panel, resets into a plain FAQ block, and ends in a near-black footer. The whole sequence feels deliberate and editorial, but the copy stays commercial and direct. Nothing reads as ornament for its own sake.

The core system is simple: black for the most important words, white for open reading space, cool gray for supporting text, and a deep navy-black for the closing field. The warm accent appears as a stage color in the hero and related call-to-action moments, but it should stay outside the core token set. That restraint gives the page its confidence. The page does not need many colors; it needs the right places for each one.

The rhythm comes from alternating density. The white sections carry compact claims, brief supporting copy, and tidy proof rows. The warm stage expands into a fuller display composition with floating product mockups. The footer compresses again, using small link columns, a contact card, and a giant cropped wordmark to finish the page with weight. The page feels like a sequence of chapters rather than a long scroll of equal-weight blocks.

## Colors

| token | hex | use |
|---|---|---|
| canvas | `#FFFFFF` | Main page canvas and the open white rails around the hero and FAQ |
| canvas-soft | `#FAFAFA` | Quiet off-white for softer section backgrounds and raised white surfaces |
| ink | `#000000` | Hard text color, the primary button fill, and the strongest contrast anchor |
| ink-soft | `#171E29` | Deep cool text for footer copy and dense utility text |
| muted-ink | `#708499` | Secondary labels, metadata, and low-emphasis supporting text |
| border | `#D8E0E8` | Hairline rules, faint separators, and the light structure around white blocks |
| surface-dark | `#121212` | Small dark shells and compact dark UI pieces that sit above the footer field |
| surface-deep | `#080B14` | Footer canvas and the deepest end field on the page |
| utility-link | `#0000EE` | Tiny link accent used only for utility-style hyperlinks |

The palette divides cleanly into light surfaces, dark surfaces, and a small utility accent. White and near-white carry the reading experience in the hero and FAQ so the page can breathe. The deep navy-black closes the page and should feel like a separate chapter rather than just a darker version of the same surface. The blue link color stays tiny and functional. It should not grow into a second brand color.

The warm accent belongs to the imagery and hero stage, not to published color tokens. Treat it as a visible campaign field that can intensify headlines and call-to-action zones, but keep the system tokens grounded in the manifest-backed interface colors above. That keeps the design honest and prevents the accent from becoming an all-purpose brand substitute.

## Typography

Inter carries the main voice. Jet Brains Mono handles compact utility labels. Pp Mori is present as a secondary family in the source set, but the visible page voice does not depend on it for the named type scale. System-Sansserif is the browser fallback for tiny system-like labels. Inter, Jet Brains Mono, and Pp Mori have the attributions listed in the supplied material; System and System-Sansserif do not carry attribution claims.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 2.5rem | 600 | 1.15 | -0.02em | Large claim on the white hero and oversized headline language in the accent stage |
| section-display | Inter | 2.5rem | 600 | 1.1 | -0.025em | FAQ title, large section leads, and bold footer-level statements |
| lead | Inter | 0.9375rem | 400 | 1.5 | 0em | Short supporting copy beneath the main claim |
| body | Inter | 0.875rem | 400 | 1.43 | 0em | Paragraph copy, feature notes, and footer navigation text |
| body-medium | Inter | 0.875rem | 500 | 1.43 | 0em | Button labels, stat labels, and compact emphasis |
| label | Jet Brains Mono | 0.75rem | 400 | 1 | 0.02em | Tiny utility labels and technical-looking microcopy |
| system-label | System-Sansserif | 0.75rem | 400 | 1 | 0em | Browser-native utility text and tiny footer chrome |
| legal | Inter | 0.8125rem | 400 | 1.5 | 0em | Footer legal copy and small contact details |

The type scale stays tight. Headings are compact but forceful, with slightly negative tracking and low line height. Body text opens just enough to breathe without softening the tone. The page should not introduce a third display family or a looser serif. The clarity comes from contrast, line length, and weight shifts rather than from variety.

Pp Mori can remain a supporting family in the system, but the site does not need it to express the visible hierarchy. If it appears in adjacent brand material, treat it as a secondary accent face rather than the main reading face. For this page, Inter does the heavy lifting, Jet Brains Mono gives tiny labels their machine-made edge, and the system face covers fallback utility text.

## Layout

DesignMe’s desktop page is built around an asymmetric split. The left side carries the narrative: logo, claim, short supporting text, action buttons, benefit bullets, and trust rows. The right side takes the stage: first a wide product mockup inside a white frame, then a warm full-bleed field with a large centered headline and floating dashboard-like compositions. The split is not symmetrical in height or density, which gives the page a sense of scale without adding noise.

The white sections use a narrow text column and a lot of open lateral space. That space is not empty filler; it is what makes the dense words feel authoritative. The warm stage expands much wider and uses large interior margins so the white headline can sit in the middle without feeling cramped. Small support cards and screenshots are allowed to overlap the stage edge, which keeps the composition lively and prevents the field from becoming a flat block of color.

Below the pitch area, the FAQ resets the rhythm. Questions sit in a single column with a visible plus marker, generous row spacing, and little else competing for attention. The footer then flips the tone hard into dark navy-black, stacking multiple link columns, a schedule-call card, profile badges, and legal text above a cropped wordmark that acts like a billboard. Preserve that chapter-like sequence: quiet white rail, loud warm stage, spare white support block, deep dark ending.

Spacing is disciplined rather than expressive. The design prefers a few stable gaps that repeat across sections instead of a long ladder of one-off distances. That regularity is what lets the page feel expensive even when the content density changes. Rounded corners also stay consistent: small controls, cards, panels, and pills each have a distinct but limited radius family. The result is an interface that feels intentional from top to bottom.

## Visual language

The system feels crisp, assertive, and slightly theatrical. Its visual language comes from four repeated moves:

- **Hard contrast:** black headlines on white, white headlines on the warm stage, and subdued copy in the dark footer.
- **One loud stage color:** the warm accent is the emotional peak, not a general-purpose utility.
- **Rounded utility shapes:** pills, badges, and small cards soften the otherwise rigid layout.
- **Floating proof objects:** dashboard screenshots, small interface cards, and cropped thumbnails sit partly outside their containers so the page feels composed rather than boxed in.

The surfaces stay mostly flat. Shadows are minimal or absent, which keeps attention on scale and spacing. Hairline dividers and muted footer labels carry the secondary structure. Small status marks and tiny utility icons should remain quiet; they work because they are nearly understated against the otherwise blunt typography. The final wordmark at the bottom behaves like a visual signature, not just a logo.

The page’s mood is confident rather than playful. The hero asks for attention quickly, the accent stage holds it, and the footer closes with a heavy, almost poster-like finish. That tone depends on restraint. If the accent spreads too far or the typography loosens, the whole system loses its edge.

## Components

### Header and navigation

The header is compact and low-friction. The logo sits at the far left, with short text links running across the top. In the light view, the links are plain and restrained; in the dark footer, the same information becomes lower contrast and more utility-like. The text size stays in the low-teens range, and the spacing is generous enough that the header never competes with the headline below it. Keep the navigation light and unobtrusive so the page can sell the claim immediately.

The header should not add new visual systems. It needs to inherit the same typography and neutral color discipline as the rest of the page. The only thing that changes across sections is contrast against the surface beneath it.

### Primary and secondary actions

The main CTA is a filled black pill with white text and a small icon. The secondary CTA is a white pill with dark text and a quieter edge. Both forms are compact rather than tall, and both use a rounded capsule shape instead of a square enterprise button. The filled version belongs in the white hero rail and as the central call in the warm stage. The secondary version supports it without introducing a new color story. Visible states should stay simple: default, subdued, and emphasized.

The buttons matter because they anchor the layout rhythm. Their pill geometry echoes the badge shapes in the footer and the small rounded cards in the hero. That shared shape language makes the page feel unified even as it shifts from white to warm to dark. The CTA pair should stay tight and highly legible, never stretched into oversized block buttons.

### Split hero and warm stage

The white hero pairs a left-aligned claim with a right-side product stage. The text block uses a short eyebrow, a large headline, a brief supporting paragraph, then one primary action. The warm stage uses the same confidence but on a larger field: oversized headline text, a paler supporting line, a centered pill CTA, and floating product mockups near the edges. The composition should feel like a pitch board, not a dashboard. The visual weight belongs to the stage image and the headline, not to ornament.

The stage should keep a clean center and light perimeter clutter. The floating pieces near the edges give the field depth, but they should not become a collage. The surrounding whitespace is what makes the accent feel expansive rather than cramped. This is the one part of the page where the design can feel loud, but it still needs discipline.

### FAQ block

The FAQ is a plain white list with a large title, a compact subtitle, and one question per row. Each row is marked by a plus symbol and spaced widely enough to read as a deliberate list rather than a dense support matrix. The typography stays dark and direct, with no bright fill and no extra chrome. The block should feel calm after the warm panel, as if the page has lowered its voice for the final explanatory section.

The FAQ owes its clarity to repetition. Every row should align to the same left edge, use the same text weight, and keep the same vertical breathing room. The plus marker is enough to signal interactivity without turning the block into a heavy accordion system. The goal is readability first.

### Footer and utility strip

The footer is a deep dark shell with several link columns, a schedule-call card, profile badges, contact information, and a small status line. Text turns quieter and smaller, with muted gray used for support copy and stronger white reserved for the most important links. The footer also carries a big cropped wordmark that spans the bottom edge of the page. That wordmark should stay huge. It is the page’s closing gesture and should not be reduced into ordinary footer branding.

The footer’s strength comes from hierarchy, not density. A lot happens there, but each cluster has a narrow job: navigation, contact, profile credibility, or status. The dark field holds it all together. If the footer lightens too much, the whole page loses its ending.

## Responsive behavior

The desktop composition should collapse by preserving order, not by flattening hierarchy. The left narrative rail should remain first, the warm stage should remain the dominant visual block, the FAQ should stay readable as a single column, and the footer should keep its columns stacked in a sensible order. On narrower screens, keep the CTA pills large enough to touch cleanly, keep the headline line breaks intentional, and keep the floating product cards from crowding the text. The page should still feel like a sequence of chapters, just with each chapter stacked vertically.

When the layout stacks, the visual hierarchy should still read in the same order: claim, action, proof, deeper explanation, closing links. The warm stage can shrink, but it should not disappear behind the text. Likewise, the footer should remain a distinct dark ending rather than becoming just another section.

## Practical implementation guidance

### Preserve

- The black, white, and warm-accent structure.
- Inter as the main voice, with Jet Brains Mono only for tiny utility text.
- Pill-shaped calls to action and small rounded cards.
- The split between a narrow narrative rail and a broad visual stage.
- The oversized footer wordmark and the deep dark end field.

### Avoid

- Avoid pastel brand colors or a second bold accent hue.
- Avoid busy shadows and decorative depth.
- Avoid mixing in a serif or a third display family as a headline system.
- Avoid square enterprise buttons where the page clearly wants pills.
- Avoid crowding the warm stage with too many small labels or captions.

### Recommended build order

1. Establish the color system and the Inter-led type scale.
2. Build the white hero rail with the primary and secondary actions.
3. Add the warm stage and floating product mockups.
4. Build the FAQ as a quiet white block.
5. Finish with the dark footer, contact card, and giant wordmark.

### Accessibility

- Keep white text on the warm stage and dark text on white at strong contrast levels.
- Give every pill and link a clear focus ring.
- Do not rely on color alone for the tiny status or utility marks.
- Keep footer link labels explicit so the dark section remains scannable.
- Supply meaningful alternative text for the product mockups and floating cards.

## Scope note

This guide covers the desktop homepage: the split hero, the warm accent stage, the FAQ strip, and the dark footer. It does not define mobile stacking, hover motion, loading states, or the exact behavior of the floating contact controls. The spacing and shape values use the supplied 0.125rem step.
