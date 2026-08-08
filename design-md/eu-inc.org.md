# How eu-inc.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/eu-inc.org-design)

Last updated: 2026-08-08

## Captured pages

[![Centered star ring above the proposal column and the dense portrait grid](https://pin.fontofweb.com/8207?format=jpg)](https://design.withfudge.com/share/pin-8207)

[Centered star ring above the proposal column and the dense portrait grid](https://design.withfudge.com/share/pin-8207)

[![Sparse hero with the same star ring and a small circular status mark](https://pin.fontofweb.com/8206?format=jpg)](https://design.withfudge.com/share/pin-8206)

[Sparse hero with the same star ring and a small circular status mark](https://design.withfudge.com/share/pin-8206)

## Overview

EU–INC reads like a civic campaign homepage. A pale field, tiny mono labels, a tight top bar, a centered star ring, and a narrow text column give the page a public-petition tone. The right side either becomes a dense portrait grid or opens into empty space with a small dark circular mark. That contrast keeps the page serious and measured.

The layout never leans on panels, bright fills, or ornamental chrome. Hierarchy comes from type size, spacing, and the density of the image grid. The page feels calm rather than soft, direct rather than polished, and collective rather than personal. The main argument stays compact and readable, while the picture field adds scale and human presence.

## Colors

The interface stays in a dark-and-gray range against a very pale field. There is no separate accent swatch in the core UI. The photographs supply the strongest color shifts, while the interface tokens remain restrained and mostly neutral.

| token | hex | role | use |
|---|---|---|---|
| `deep-ink` | `#000000` | strongest dark tone | Small status marks, the darkest text, and the heaviest emphasis |
| `ink` | `#111111` | primary text | Headlines, the strongest copy, and the clearest readable text |
| `ink-soft` | `#5E5E5E` | secondary text | Paragraph copy, supporting lines, and the quieter parts of the page |
| `muted-ink` | `#999999` | low-priority text | Navigation, eyebrows, and very small utility text |

The color system works by narrowing attention. Dark text carries the message, mid-gray text steps back, and the photo grid supplies any liveliness the interface needs. Because the page does not depend on a bright accent, the photographs can carry local variation without making the layout feel noisy. The small circular mark in the sparse view uses the deepest dark tone and acts like a tiny anchor against the open field. In lighter or more photographic moments, the UI still stays restrained, so the pictures remain the most colorful part of the surface. That balance keeps the page official in tone without becoming stiff.

## Typography

The typography is compact, plainspoken, and highly legible. Custom Apfel Grotezk handles the main claim line. Apfel Grotezk supports section heads. Inter carries the reading copy and the pull quote. Mono Spec supplies the tiny labels and the top navigation. System acts as the fallback for the smallest legal text. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Custom Apfel Grotezk | 1.75rem | 700 | 1.15 | -0.02em | The opening claim and the strongest line in the column |
| `section-display` | Apfel Grotezk | 1.25rem | 700 | 1.2 | -0.015em | Section heads such as the “Why” block |
| `body` | Inter | 1rem | 400 | 1.5 | 0em | Paragraphs, list items, and explanatory copy |
| `body-strong` | Inter | 1rem | 600 | 1.5 | 0em | Inline emphasis inside the body copy |
| `label` | Mono Spec | 0.75rem | 400 | 1.2 | 0.14em | Eyebrows, small tags, and other quiet labels |
| `navigation` | Mono Spec | 0.875rem | 400 | 1.2 | 0.08em | Top navigation and the tiny wordmark voice |
| `quote` | Inter | 1rem | 400 | 1.6 | 0em | The italicized pull quote and similar supporting prose |
| `legal-copy` | System | 0.75rem | 400 | 1.5 | 0em | Footnote-like copy and dense utility text |

The hierarchy depends on texture as much as on size. The mono labels are narrow and spaced out, so they feel procedural. The headline is larger but still restrained, which lets it read as a formal public statement instead of a dramatic hero banner. Inter keeps the paragraph copy calm and readable, while the quote simply extends that same reading voice with a little more air. The type stack works best when each role stays narrow and consistent. That restraint is part of the page’s authority: the copy never competes with the grid, and the grid never overwhelms the copy.

## Layout

The layout is built around a narrow left reading rail and a wider right image field. The page uses a small outer gutter of about 20px and a broader inner inset of about 40px when the content needs room to breathe. The lead block sits with generous spacing above and below it, and the page opens up again around the lower section so the structure never feels mechanically even. The result is a calm sequence of public-facing statements rather than a rigid content stack.

The left rail carries a short eyebrow, one strong line, a bullet list, and a short explanatory paragraph. That order is intentional. It lets a reader understand the page in one pass without scanning across the whole width. The right side behaves differently: the dense portrait grid uses repeated square crops, tight gutters, and a tall vertical rhythm. Because every tile is similar in size and spacing, the grid reads as one collective field even though the portraits vary. The sparse version keeps the same overall balance but allows the right side to open up so the emblem and copy can carry the page on their own.

Vertical spacing is one of the main structural tools. The top block begins with roughly 30px of space, then relaxes again by about 58px lower down, and deeper sections can open up to around 100px. Those shifts keep the page from feeling flat. They also make the page feel editorial, with each block separated just enough to read as a distinct statement. The layout stays narrow, but it does not feel cramped because the image field supplies scale and the open field around the emblem supplies breathing room.

## Visual language

The page’s visual language is civic, calm, and minimally styled. The star ring is the only clearly symbolic element, and it is softened enough to feel almost sculpted into the field rather than printed on top of it. That softness matters. It keeps the symbol from becoming decorative noise and lets it behave like a public emblem instead of a logo flourish.

The portrait grid gives the page its human energy. The tiles are tightly cropped, consistently framed, and packed closely enough to feel like a mass rather than a gallery. That makes the grid read as collective proof. The people inside it carry the color variation that the UI itself avoids, so the page can stay neutral without losing warmth. The sparse version of the page keeps the same language by reducing the right side to open space and one small dark circular mark. That empty field reinforces the page’s quiet tone instead of making it feel unfinished.

The whole surface depends on restraint. Small mono labels, low-contrast support text, narrow line lengths, and large stretches of open field make the page feel deliberate. Nothing shouts. Nothing is glossy. The page looks public, serious, and unhurried, which suits the campaign-like message and the collective image wall.

## Components

### Top bar

- **Anatomy:** Tiny wordmark at the top left, quiet text links at the top right.
- **Typography:** `navigation` for the links and the small wordmark voice.
- **Surface:** Directly on the field, with no visible panel or container frame.
- **Spacing:** Enough horizontal distance that the left and right ends feel separated rather than crowded.
- **Visible states:** Link emphasis should come from spacing, weight, or underline, not from a new color.
- **Composition:** Keep the bar visually light so the page opens with the emblem and claim column.

### Star ring emblem

- **Anatomy:** A ring of pale stars arranged around a central opening.
- **Typography:** None.
- **Surface:** Floating in open space.
- **Shape:** Soft, rounded star forms rather than crisp sharp icons.
- **Spacing:** Large top breathing room above the text stack and a clear gap before the copy begins.
- **Composition:** Center it over the reading rail so it feels like a civic badge.

### Claim column

- **Anatomy:** Eyebrow, strong claim line, bullet list, and short paragraphs.
- **Typography:** `label` for the eyebrow, `hero-display` for the lead line, `body` for the list and paragraph, `body-strong` for inline emphasis.
- **Surface:** Plain field with no card boundary.
- **Spacing:** Tight spacing between the eyebrow and the claim, then looser spacing as the copy moves into explanation.
- **Hierarchy:** The claim must stay first in the reading order, with the list acting as proof and the paragraph acting as context.
- **Visible states:** In-text emphasis should remain text-like, not button-like.

### Portrait grid

- **Anatomy:** Many square portrait tiles, all aligned into a dense repeated pattern.
- **Surface:** No surrounding panel.
- **Shape:** Square crops with consistent edges.
- **Spacing:** Tiny gutters that keep each portrait readable while still making the whole wall feel compact.
- **Composition:** The grid should read as one field of people, not as separate cards.
- **Visible states:** The sparse version can collapse into open field with a single small mark, but the same quiet visual voice should remain.

### Supporting text block

- **Anatomy:** Section head, short paragraph, and a pull quote.
- **Typography:** `section-display` for the head, `body` for the paragraph, `quote` for the italic passage.
- **Surface:** Same open field as the main claim.
- **Spacing:** Enough separation from the claim column to feel like a new thought, but not so much that the page loses continuity.
- **Composition:** Keep line lengths narrow and left aligned so the block reads as a direct extension of the main argument.
- **Visible states:** Support text should stay softer than the main claim, not lighter in a way that hurts readability.

### Legal line

- **Anatomy:** Small low-priority text at the bottom edge.
- **Typography:** `legal-copy`.
- **Surface:** Unframed field.
- **Spacing:** Compact and tucked below the stronger reading areas.
- **Hierarchy:** This text must always sit below the claim, the list, and the quote.
- **Visible states:** Keep it quiet but readable.

## Responsive behavior

On narrower screens, keep the reading order intact. The wordmark and links should stay first, followed by the emblem, then the claim column, and only after that the portrait grid. The grid should reduce to fewer columns before it becomes too compressed, and if the width gets very tight, it should stack into taller blocks instead of squeezing the portraits into unreadable slivers. The tiny labels may need a little more line height or spacing to remain legible. The emblem should remain separated from the text stack even as it scales down. Avoid turning the page into a dense app-like list; the calm rhythm is part of the design.

## Practical implementation guidance

### Preserve

- Keep the pale field dominant and let the typography do most of the work.
- Keep the mono labels quiet and procedural.
- Preserve the narrow left reading rail and the dense right-side portrait field.
- Keep the star ring soft enough to feel emblematic rather than decorative.
- Hold the gray text ladder steady so the page remains serious and readable.

### Avoid

- Avoid bright fills, glossy panels, and heavy button styling.
- Avoid borders and shadows that make the page feel like a dashboard.
- Avoid widening the reading column until it loses its compact public tone.
- Avoid making every line equally loud; the hierarchy depends on restraint.
- Avoid compressing the portrait tiles so much that the people inside them lose clarity.

### Recommended build order

1. Build the page shell and the top bar.
2. Set the label voice and the claim stack.
3. Place the star ring emblem above the text column.
4. Add the list and the supporting paragraphs.
5. Build the portrait grid with fixed square crops and tight gutters.
6. Add the lower section head, paragraph, quote, and legal line.
7. Check the stacked order on narrow screens so the text remains first.

### Accessibility

- Keep the gray text dark enough to remain readable against the pale field.
- Give meaningful portraits descriptive alternative text when they add information.
- Do not let the star ring carry the page meaning on its own.
- Preserve visible keyboard focus on every link.
- Keep line lengths short enough that the small labels and list items remain easy to scan.

## Scope note

This guide covers the desktop homepage, the top bar, the star emblem, the opening claim column, the portrait grid, and the short support text block. Mobile stacking, motion, hover states, loading states, and deeper pages are not included.
