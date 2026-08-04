# How digg.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/digg.com-design)

Last updated: 2026-08-04

## Captured pages

[![Warm paper tech feed with ranked stories and a right-side rising rail](https://pin.fontofweb.com/9671?format=jpg)](https://design.withfudge.com/share/pin-9671)

[Warm paper tech feed with ranked stories and a right-side rising rail](https://design.withfudge.com/share/pin-9671)

[![Article page with a large left headline and a boxed original-post panel](https://pin.fontofweb.com/9672?format=jpg)](https://design.withfudge.com/share/pin-9672)

[Article page with a large left headline and a boxed original-post panel](https://design.withfudge.com/share/pin-9672)

[![Centered sentiment modal stacking comment cards over a muted backdrop](https://pin.fontofweb.com/9584?format=jpg)](https://design.withfudge.com/share/pin-9584)

[Centered sentiment modal stacking comment cards over a muted backdrop](https://design.withfudge.com/share/pin-9584)

[![Dark-mode feed with white type, black surfaces, and orange status chips](https://pin.fontofweb.com/9581?format=jpg)](https://design.withfudge.com/share/pin-9581)

[Dark-mode feed with white type, black surfaces, and orange status chips](https://design.withfudge.com/share/pin-9581)

[![Narrow posts-from-X stack with dense cards, metrics, and avatar chips](https://pin.fontofweb.com/9673?format=jpg)](https://design.withfudge.com/share/pin-9673)

[Narrow posts-from-X stack with dense cards, metrics, and avatar chips](https://design.withfudge.com/share/pin-9673)

## Overview

Digg presents a warm paper newsroom with a hard-edged logo, a very small set of colors, and a layout that prizes fast scanning over ornamental framing. The page feels editorial first: the main job is to rank, sort, and compare stories. The visual system supports that job with a beige canvas, white cards, near-black text, and a single blue action color that quietly marks topic pills, counts, and selected states.

The site changes atmosphere without changing its structure. Light mode sits on the paper field and lets black type do most of the work. Dark mode keeps the same story order, the same card logic, and the same compact typographic rhythm, but flips the field to near-black so the feed can keep running in a denser, night-time frame. Orange is not a second primary brand color here; it behaves like a status color for emphasis, heat, or sentiment.

The strongest qualities to preserve are:

- A paper canvas that makes the page feel printed rather than generic.
- Roobert headlines and Roobert Mono labels with sharp contrast in scale and rhythm.
- Thin borders and modest corner radii instead of heavy shadows.
- Blue as the steady state marker for topics, chips, and small counters.
- Dark mode as the same editorial system, not a separate theme with different anatomy.
- Dense metadata that stays readable because the layout leaves enough air around it.

## Colors

Digg is anchored by a warm paper canvas, a white card surface, and one blue action color. The palette behaves like a newsroom rather than a product dashboard: black type stays dominant, borders are pale and quiet, and the orange tones step in only for heat, warnings, or emphasis. In dark mode, the same relationships hold, but the canvas drops to near-black and the text flips to white so the story stack can continue without changing its structure.

Photographic images and avatar crops stay natural and secondary. Their own color, skin tone, and lighting variation should remain intact so the page keeps a human layer without turning the interface palette into a collage. Blue and orange remain the only interface accents across both light and dark surfaces; they should carry all UI emphasis while photos and avatars stay supporting material.

| token | value | use |
|---|---|---|
| `action` | `#1E76BD` | Topic pills, selected chips, small links, and low-key action cues |
| `canvas` | `#EFECE6` | Page field behind the feed, article pages, and modal backdrop |
| `surface` | `#FFFFFF` | Cards, article panels, and the modal body |
| `surface-dark` | `#171616` | Dark-mode feed rows, dark panels, and night lists |
| `ink` | `#000000` | Primary headline text, logo marks, and dark icons on light fields |
| `muted-ink` | `#212020` | Supporting copy, story decks, and compact metadata |
| `border` | `#E3E0D8` | Card outlines, dividers, and the softer edge of the article page |
| `border-soft` | `#DDE0E2` | Inner separators and the lighter edge treatment inside stacked panels |
| `warm-accent` | `#C47700` | Warm badges, secondary emphasis, and heat markers |
| `hot-accent` | `#DA702C` | Stronger status chips and urgent or negative markers |

The palette is deliberately narrow. The beige field gives the site its paper feel, while white cards keep the reading surface crisp. Blue is the only color that behaves like a steady interaction cue across the full product. Orange stays subordinate and should remain there; it works best as a small label, a sentiment cue, or a heat marker in a dense feed. The border colors matter because they keep the layout structured without turning every card into a framed box. In dark mode, the palette does not need a new identity. It only needs the same tokens to be remapped so the cards, rails, and overlays remain legible against the darker field.

## Typography

Roobert Vf and Roobert Mono Vf carry the core voice. Both families are credited to Martin Vácha and Displaay Type Foundry Sro. Applesystem appears only as a system fallback in some imported fragments and has no supplied authorship claim, so it should stay outside the brand voice.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Roobert Vf | 2.25rem | 700 | 1.1 | -0.03em | Large story headlines and the main article title |
| `section-display` | Roobert Vf | 1.5rem | 700 | 1.15 | -0.02em | Section headers such as highlights, rails, and modules |
| `card-heading` | Roobert Vf | 1.25rem | 600 | 1.5 | -0.01em | Ranked story titles and dense card headlines |
| `deck` | Roobert Vf | 0.8125rem | 400 | 1.45 | 0em | Story summaries, supporting copy, and intro lines |
| `body` | Roobert Vf | 1rem | 400 | 1.5 | 0em | General article text and explanatory copy |
| `body-strong` | Roobert Vf | 1rem | 600 | 1.5 | 0em | Metric values, highlights, and short emphasis lines |
| `label` | Roobert Mono Vf | 0.75rem | 600 | 1 | 0.1em | Topic pills, small header tools, and compact state labels |
| `micro` | Roobert Mono Vf | 0.625rem | 500 | 1 | 0.1em | Tiny counts, timestamps, and rail metadata |
| `system-copy` | Applesystem | 0.875rem | 400 | 1.5 | 0em | Fallback text in imported or browser-native fragments |

The hierarchy depends on scale and rhythm more than on many families. Roobert Vf handles the readable editorial tone: headlines, decks, and body copy all stay close enough to feel related. Roobert Mono Vf interrupts that flow for the parts that should feel machine-like: topic pills, counters, timestamps, and utility labels. That split is one of the defining traits of the interface. The mono face makes metadata feel precise without letting it become loud. The sans face keeps the reading path soft and continuous. The smallest labels are compact and letterspaced, which helps them read like status markers rather than mini headlines.

## Layout

The page sits on a broad paper field with a centered reading structure. In the feed view, the header spans a wide desktop measure, then the content opens into a story chapter made of a highlight strip, a ranked main list, and a narrower right rail. The most common spacing pattern is generous but not loose: 24px card padding, 32px to 48px between major regions, and very restrained internal gaps for metadata. This lets the long page stay calm even when the data density rises.

The top row carries the DIGG mark, the black `/TECH` pill, and the centered utility links. That line is visually light; the feed below carries the weight. The highlight strip uses four pale cards across the page, each with a short label, a brief story head, and a row of avatars. Those tiles act like an index to the rest of the page.

The main feed is a two-column desktop layout. The left column holds the ranked stories with a large number, a bold title, a muted summary, a stats row, and a dense fan of avatar circles. The right rail is narrower and repeats a compact pattern: small section label, short item title, tiny counts, and a tight stack of entries. The rail never tries to compete with the main list; it summarizes the second layer of attention.

Article pages switch the balance instead of the system. The left side opens into a large title and a clean summary block. The right side becomes a quoted original-post panel, framed like a card and aligned to the same paper logic. Below that, smaller modules summarize sentiment and cluster engagement. The modal view compresses further: a centered panel, a short legend, and a vertical run of comment cards over a softened background. The overall composition stays structured because the surfaces, borders, and type scale remain stable even as the page changes from feed to detail to analysis.

## Visual language

Digg’s visual language feels compact, factual, and slightly mechanical, but never cold. The wordmark is blocky and almost pixel-cut, which gives the header a strong identity without needing a lot of ornament. Mono labels, small counters, and time stamps create a clipped rhythm that makes the feed feel fast and sortable. The page leans on image-free clarity: avatars, chips, and text do most of the work, while the cards stay largely flat.

The avatar fans are a key social device. They appear as tight circular crops, often stacked in a row beneath a story or highlight card. They add energy without turning the layout into a social network feed. Story cards use thin borders, not heavy shadows, so the grid remains calm. The blue action color gives the layout a steady point of orientation. Orange enters only in small doses, which keeps it useful as a warning or sentiment signal. The result is a newsroom system with a controlled temperature: paper-light in the day, dense and ink-heavy in the dark.

## Components

### Header and topic marker

The header carries the black DIGG mark on the left, a compact `/TECH` pill beside it, centered links, and a small circular account image on the right. The topic marker is the strongest small shape in the line: black fill, white mono text, and a tiny corner radius. The header is mostly about framing the feed, so its treatment stays quiet and leaves the cards to carry the page.

### Highlight tiles

The highlight strip uses four pale cards with short labels, 20px-ish story heads, and avatar clusters at the bottom edge. Each tile is a quick summary, not a deep article treatment. The surface is light, the border is thin, and the corners are modest. The cards read as a single row of emphasis items that preview the day’s most visible stories.

### Ranked story rows

Ranked rows pair a number, a bold headline, a muted deck, and a compact metadata line. The title is the main weight; the rest of the row compresses into a mono-like band of counts, timestamps, and icons. Avatar fans and tiny blue rank chips sit underneath, turning the row into a social and statistical summary at the same time. The row feels dense, but the spacing keeps it from collapsing.

### Right rail

The rail is narrower and more repetitive than the main feed. It uses small section labels, short headlines, and tight count lines to summarize rising items without building a second full-size feed. This is a useful pattern: the rail gives the page a second point of attention while preserving the hierarchy of the main list.

### Article detail and original-post panel

The article view splits into a large left headline and a right-side source panel. The source card is framed by a soft border and plenty of padding, so it reads as a quoted object rather than a separate page. Supporting modules below it keep the same paper logic and use smaller headings, softer body copy, and compact metrics. The visual state is analytical, but it never leaves the brand’s paper-like footing.

### Sentiment modal

The sentiment modal centers a white panel over a softened page. Its top line holds the title and the positive/negative legend, and the body stacks comment cards one after another. Each comment card includes a tiny avatar, a score chip, a short excerpt, and a small outward arrow. The repeated card structure makes the panel feel sortable and ranked, not freeform.

### Dark-mode feed rows

Dark mode keeps the same row rhythm, same card structure, and same metadata density. The key change is the surface: the field drops to near-black and the type flips to white. Blue and orange still work as accents, but the contrast is driven by the light text and the card edges. Dark mode should stay editorial, not neon. It is the same newsroom, just tightened into a night setting.

## Responsive behavior

On narrower screens, the feed should keep the same reading order: header, highlight strip, ranked list, then the right-rail material after or below the main feed. Story rows should stack cleanly rather than reflow into a different visual idea. The avatar fans can compress, but the rank, headline, and metadata order should stay intact. Article pages should preserve the left headline and right source-card relationship as long as there is room; once that split fails, the source card should drop below the main summary without changing its card style. The modal should remain centered and scrollable with the same card language.

## Practical implementation guidance

### Preserve

- Keep the warm paper canvas as the default field.
- Use Roobert Vf for headlines and body, Roobert Mono Vf for labels and counts.
- Keep blue as the steady state marker for topics and selected chips.
- Let orange stay secondary and small.
- Preserve thin borders and the visible radius roles: small controls stay tight, card surfaces use the modest 8px and 12px treatments seen across the feed and detail cards, and larger panels keep the roomier 12px shell.

### Avoid

- Do not make orange the main action color.
- Do not replace mono metadata with generic sans labels.
- Do not add heavy shadows to every card.
- Do not split dark mode into a separate component family.
- Do not increase corner radii until the page starts to look soft or consumer-facing in the wrong way.

### Recommended build order

1. Build the header, topic pill, and page gutters.
2. Add the highlight strip and the ranked story rows.
3. Build the right rail and the avatar fan treatment.
4. Add the article page split and the original-post panel.
5. Add the sentiment modal and cluster modules.
6. Finish the dark-mode variant by remapping the same tokens.

### Accessibility

- Keep 10px and 11px mono labels readable with enough contrast and space.
- Do not rely on color alone for rank, sentiment, or urgency.
- Keep the modal close control and row affordances easy to hit.
- Preserve short line lengths on large headlines so the reading path stays stable.
- Maintain clear borders in dark mode so the card structure never disappears into the background.

## Scope note

This guide covers the tech feed, ranked story rows, article detail pages, the sentiment modal, and the dark-mode list views shown in the supplied packet. It does not set mobile breakpoints, motion, empty states, or non-tech category pages.
