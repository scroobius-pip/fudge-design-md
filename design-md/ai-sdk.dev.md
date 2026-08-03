# How ai-sdk.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ai-sdk.dev-design)

Last updated: 2026-08-03

## Captured pages

[![Centered hero with code editor and chat bubble pair](https://pin.fontofweb.com/8393?format=jpg)](https://design.withfudge.com/share/pin-8393)

[Centered hero with code editor and chat bubble pair](https://design.withfudge.com/share/pin-8393)

[![Metrics strip above the large centered framework claim](https://pin.fontofweb.com/8397?format=jpg)](https://design.withfudge.com/share/pin-8397)

[Metrics strip above the large centered framework claim](https://design.withfudge.com/share/pin-8397)

[![Scale section with product cards and install prompts](https://pin.fontofweb.com/8395?format=jpg)](https://design.withfudge.com/share/pin-8395)

[Scale section with product cards and install prompts](https://design.withfudge.com/share/pin-8395)

[![Dark grid section with code window and small accent tabs](https://pin.fontofweb.com/8396?format=jpg)](https://design.withfudge.com/share/pin-8396)

[Dark grid section with code window and small accent tabs](https://design.withfudge.com/share/pin-8396)

[![Top hero variant with oversized white headline and pill CTA](https://pin.fontofweb.com/8394?format=jpg)](https://design.withfudge.com/share/pin-8394)

[Top hero variant with oversized white headline and pill CTA](https://design.withfudge.com/share/pin-8394)

[![Sparse lower panel with monochrome text and small utility cards](https://pin.fontofweb.com/8392?format=jpg)](https://design.withfudge.com/share/pin-8392)

[Sparse lower panel with monochrome text and small utility cards](https://design.withfudge.com/share/pin-8392)

## Overview

ai-sdk.dev is designed as a dark developer homepage that sells the product through code, not illustration. The page uses a pure black canvas, soft gray supporting text, and very bright white primary copy. The first impression is a centered hero with a large statement, a compact command pill, and a code-and-chat demo underneath. That structure makes the site feel like a landing page and a working product walkthrough at the same time.

The visual language is disciplined. Surfaces stay almost entirely black or near-black, so the page depends on contrast, hairline rules, and small bursts of color rather than decorative fills. White becomes the clearest action color. Green, pink, and violet are used as tiny accents for syntax, status, provider marks, and section emphasis. The result is sharp, technical, and calm.

This system should be treated as a single dark mode from top to bottom. It does not need palette shifts, photo backdrops, or soft illustrated panels to carry the story. The hierarchy comes from scale, spacing, and the alternation between text columns and terminal-like panels.

## Colors

The palette is intentionally small and almost monochrome. Black is not just the page background; it is also the visual glue that lets the code windows, metrics, and cards feel part of one system. `#0A0A0A` and `#1F1F1F` are the main raised surfaces, while `#2E2E2E` acts as the hairline border and divider color. Because those three values stay close together, the site reads as a sequence of dark layers rather than a stack of obvious boxes.

`#EDEDED` is the main text color for large headings, card titles, and button copy when the page wants high contrast without a pure white glare. `#A1A1A1` and `#8F8F8F` support decks, labels, and quiet explanatory copy. `#FFFFFF` is reserved for the strongest action surfaces and the brightest headline moments. It should not be diluted into a generic neutral; on this site, white is an event.

The accent colors are deliberately small in area. `#62C073` gives the page a technical success note and code-like freshness. `#F75F8F` reads as a stronger warning or secondary status accent. `#BF7AF0` can carry alternate emphasis or selected-state contrast. None of these should dominate the layout. They work best when they appear inside code, small labels, iconography, or compact chips.

| token | value | role |
|---|---|---|
| canvas | `#000000` | page background and full-bleed stages |
| surface | `#0A0A0A` | main raised panels and cards |
| surface-raised | `#1F1F1F` | command pills and recessed controls |
| border | `#2E2E2E` | hairlines, outlines, and grid rules |
| ink | `#EDEDED` | primary copy on dark surfaces |
| muted-ink | `#A1A1A1` | decks, descriptions, and labels |
| muted-ink-strong | `#8F8F8F` | secondary labels and quieter UI text |
| action | `#FFFFFF` | filled primary actions |
| action-ink | `#000000` | text on light actions |
| accent-green | `#62C073` | code, status, and provider accents |
| accent-pink | `#F75F8F` | code, warning, and alternate emphasis |
| accent-violet | `#BF7AF0` | selected-state emphasis and secondary accent |

## Typography

The packet declares two families: **Geist** and **Geist Mono**. The page uses Geist for almost all copy, titles, metrics, and controls, and Geist Mono for the install command, code lines, and small technical labels. No attribution claim is included here; the packet does not supply one. Licensing is not specified in the packet, so reuse rights should be confirmed separately before shipping.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 4rem | 600 | 1 | -0.06em | Main hero headline |
| section-display | Geist | 2.5rem | 600 | 1.2 | -0.06em | Large section headings |
| panel-heading | Geist | 1.5rem | 600 | 1.33 | -0.04em | Card titles and feature labels |
| metric | Geist | 1.5rem | 600 | 1.33 | -0.04em | Download, stars, contributors, and support counts |
| body | Geist | 1rem | 400 | 1.5 | 0em | Supporting copy and explanations |
| body-medium | Geist | 1rem | 500 | 1.5 | 0em | Filled buttons and emphasized body text |
| nav | Geist | 0.875rem | 400 | 1.43 | 0em | Top navigation and utility links |
| mono-code | Geist Mono | 0.8125rem | 400 | 1.54 | 0em | Code lines and install command text |
| mono-ui | Geist Mono | 0.75rem | 400 | 1.33 | 0em | Small command labels and technical chips |

The hierarchy depends on size and contrast more than on weight changes. Headings are dense and compact, with tight negative tracking that makes the bold white copy feel engineered rather than airy. Supporting text opens up just enough to stay readable against black. Monospace text is kept small and disciplined, which makes the code blocks feel like real developer surfaces instead of decorative mockups.

## Layout

The page is arranged as a strict dark grid with thin dividers. Large areas of empty black space sit between dense content blocks, and the separations matter as much as the content itself. A 48px internal inset appears repeatedly, while larger 80px and 192px vertical spaces create the feeling of chapter breaks. Those values keep the page from collapsing into one continuous dark field.

The hero is centered and tall. It uses the full width of the page but keeps the text stack narrow, so the headline lands before the rest of the interface. The command pill sits close to the hero copy, then the code-and-chat pair anchors the lower half of the first screen. That pairing is the main composition trick: one side teaches with code, the other with the answer it produces.

Below the hero, the site shifts into a broad multi-column grid. Some sections read as metrics strips, with equally sized tiles and calm spacing. Others break into three or four vertical lanes, where each lane carries one idea: a feature description, a code panel, a support card, or a command callout. The grid is rigid, but the content inside it stays simple and readable. That contrast is what gives the page its order.

The layout should keep borders thin and surfaces flat. It does not rely on cards floating above the page or on nested chrome. Instead, sections are separated by the black background itself, by 1px rules, and by the occasional slightly lighter surface. The result is precise, stable, and very easy to scan.

## Visual language

The page feels like documentation turned into a sales surface. Code windows do most of the illustrative work. Small macOS-style window dots, syntax-colored lines, and narrow command bars make the product feel active without needing screenshots or photography. The chat bubble beside the code panel turns the demo into a short proof loop: write, run, answer.

Shape is restrained. Most containers are rectangles with 6px to 12px corners, while pills and command chips are fully rounded. The strong roundness is reserved for actions and quick controls, which keeps the rest of the page serious. Hairlines are more important than shadows. Depth comes from boundary contrast, not from soft elevation.

The accents are tiny and precise. Green and pink syntax fragments appear inside code, and the violet accent can mark selected or alternative emphasis states. The page does not use broad gradient fills or colorful section banners. It uses small, exact flashes inside otherwise quiet dark geometry.

The overall visual character is technical, confident, and sparse. It wants to feel like the place where the product is explained by showing the product.

## Components

### Header and top navigation

**Anatomy:** brand mark, product name, primary nav links, utility search, feedback, and an avatar or account cue.  
**Surface:** transparent over the black canvas with subtle separation from the body.  
**Typography:** small Geist navigation text, set quietly so the hero stays dominant.  
**Shape:** compact controls, rounded pills for utility actions, and thin outlines where needed.  
**Composition:** everything is aligned in one horizontal band and kept visually subordinate to the hero.

### Hero block

**Anatomy:** large centered headline, short supporting copy, a human/agent toggle or caption line, and a light filled primary action.  
**Surface:** pure black with no decorative panel behind it.  
**Typography:** the largest Geist display size, followed by a gray deck in regular weight.  
**Spacing:** large vertical breathing room; the install pill sits close enough to feel part of the claim.  
**Visible states:** the primary action is a bright white pill with dark text, which makes it the strongest interactive element on the page.

### Command pill and install control

**Anatomy:** monospace command text, a small utility icon, and a recessed dark shell.  
**Surface:** dark charcoal, slightly raised from the background.  
**Typography:** Geist Mono in a small size, with tight, controlled spacing.  
**Shape:** fully rounded pill.  
**Composition:** it reads as a real command to copy or run, not as a decorative badge.

### Code-and-chat demo

**Anatomy:** a terminal-style code panel on one side and a compact chat response card on the other.  
**Surface:** both panels stay near-black, with thin borders and minimal chrome.  
**Typography:** monospace for code, regular Geist for the chat reply.  
**Composition:** the code block explains the action; the chat card confirms the result.  
**Visible states:** syntax accents are tiny and deliberate; they should stay sparse so the code remains legible.

### Metric strip

**Anatomy:** a row of equal tiles with a large number and a short label.  
**Surface:** the same black family as the rest of the page, separated by hairline borders.  
**Typography:** `metric` for the number, `body` or a lighter label for the description.  
**Spacing:** generous horizontal spacing with calm internal padding.  
**Hierarchy:** the number is the headline; the label stays quiet.

### Feature and support cards

**Anatomy:** short title, short explanation, and a command or prompt button.  
**Surface:** slightly lighter dark panels with a clear outline.  
**Typography:** card titles use Geist semibold; the explanation stays regular and muted.  
**Shape:** rectangular cards with small rounded corners.  
**Composition:** these cards are more utilitarian than promotional. They should look like tools the developer can act on immediately.

## Responsive behavior

On smaller screens, the page should keep the same reading order: hero, command action, demo, metrics, then support cards. The code-and-chat pair should stack cleanly instead of shrinking into illegibility. Navigation should collapse early enough to preserve the hero’s scale. The dark grid should remain visible, but the columns should compress into a single column or a short stack when space gets tight.

The typography should step down in size without losing the dense, confident tone. White headlines need to stay strong, but line length should shorten to avoid awkward wraps. Mono text must stay readable; if the code block becomes too narrow, it should scroll or reflow in a controlled way rather than break the column rhythm. The main rule is to keep the command-first, proof-second sequence intact.

## Practical implementation guidance

### Preserve

- Keep the page almost entirely black, with only near-black layers for depth.
- Use Geist for UI copy and Geist Mono for commands and code.
- Let the hero remain centered and tall.
- Keep one bright filled action and one dark command pill as the key controls.
- Use thin borders and hard edges instead of soft shadows.
- Keep green, pink, and violet as small accents, not as broad decorative fills.

### Avoid

- Avoid light backgrounds, photo backdrops, or colorful section banners.
- Avoid multiple type families or decorative display fonts.
- Avoid heavy drop shadows, glass effects, or fuzzy overlays.
- Avoid making every card equally rounded; reserve the pill shape for actions and commands.
- Avoid expanding the accent colors into large blocks of surface color.
- Avoid adding unsupported interaction claims such as hover, disabled, or loading behavior unless they are explicitly defined elsewhere.

### Recommended build order

1. Set the black canvas, border color, and text hierarchy.
2. Build the top navigation and the hero stack.
3. Add the white primary action and the dark command pill.
4. Recreate the code-and-chat demo pair.
5. Add the metrics row and the main feature grid.
6. Finish the smaller support cards and utility controls.
7. Check spacing and line lengths at narrower widths.

### Accessibility

- Keep text contrast high on black, especially for small gray copy.
- Give the code panel and command pill clear labels for assistive tech.
- Do not rely on color alone for syntax or state changes; pair color with structure or text.
- Preserve visible focus styling on every button, link, tab, and icon control.
- Keep the hero headline and metric numbers readable when the layout compresses.
- Make sure the code and chat pair still make sense in reading order if the layout stacks.

## Scope note

This guide covers the dark ai-sdk.dev homepage sections shown in the supplied packet: hero, command controls, demo panels, metrics, and support cards. It does not define mobile breakpoints, motion, hover or focus specifics, loading or error states, or exact runtime behavior for the code examples.
