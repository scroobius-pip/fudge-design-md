# How cognee.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cognee.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Centered hero over the full black grid with floating purple tile clusters](https://pin.fontofweb.com/10428?format=jpg)](https://design.withfudge.com/share/pin-10428)

[Centered hero over the full black grid with floating purple tile clusters](https://design.withfudge.com/share/pin-10428)

[![Charcoal narrative band with four cards and one lavender highlight tile](https://pin.fontofweb.com/10427?format=jpg)](https://design.withfudge.com/share/pin-10427)

[Charcoal narrative band with four cards and one lavender highlight tile](https://design.withfudge.com/share/pin-10427)

[![Lavender evals band with tabs, oversized text, and two action pills](https://pin.fontofweb.com/10426?format=jpg)](https://design.withfudge.com/share/pin-10426)

[Lavender evals band with tabs, oversized text, and two action pills](https://design.withfudge.com/share/pin-10426)

[![Three roadmap cards with code-like lines and one accent-filled panel](https://pin.fontofweb.com/10425?format=jpg)](https://design.withfudge.com/share/pin-10425)

[Three roadmap cards with code-like lines and one accent-filled panel](https://design.withfudge.com/share/pin-10425)

[![Pricing section with three tall plans and a highlighted middle tier](https://pin.fontofweb.com/10429?format=jpg)](https://design.withfudge.com/share/pin-10429)

[Pricing section with three tall plans and a highlighted middle tier](https://design.withfudge.com/share/pin-10429)

## Overview

Cognee uses a dark, technical stage with a restrained editorial tone. The page sits on a black field and overlays a faint square grid, then drops in scattered lavender tile clusters so the background feels computational without becoming noisy. The main message is carried by oversized Twk Lausanne headlines, short supporting lines, and compact pill controls. That balance gives the site a calm but forceful presence: the copy leads, while the grid and violet accents supply the brand signal.

The system changes mood by section, but not by vocabulary. The hero stays black and minimal. Narrative sections shift into charcoal panels. The evals band turns into a full-bleed lavender interruption. Pricing mixes dark charcoal and bright violet fills to show emphasis and hierarchy. Across all of it, the same warm off-white text and the same tight family of purple tones keep the interface coherent.

The design depends on a few repeated moves: thin rules, square tiles, rounded pills, broad card blocks, and very large light-weight headings. Nothing feels ornamental for its own sake. Each shape frames a message, marks a state, or separates one step in the story from the next.

## Colors

Cognee uses a small palette with a clear separation between canvas, text, and accent. Black is the base surface, not an empty afterthought. `#000000` is the main canvas. `#1E1E1C`, `#2B2B2B`, and `#3A3A38` carry most of the dark card work, with the last one reading as the raised neutral. The dark family should stay warm and slightly brown-gray rather than blue-black, because that warmth softens the page without reducing contrast.

The text color is a warm off-white, `#EDECEA`, not a sharp white. That softer white matters because the page is dense with black and charcoal. It keeps long paragraphs and dense card copy from feeling harsh. The accent family is lavender, moving from `#BC9BFF` through `#BA98FD` and `#A583EC` to `#916DD9`. Use that range for fills, outlines, badges, and emphasis. The darkest violet, `#0C0121`, is the deepest purple panel and reads like a night layer inside the main dark theme. `#F4F4F4` works as the thin rule and grid line color. It should stay quiet so the lattice adds structure without competing with the copy.

The color relationship is simple: black and charcoal carry reading surfaces, lavender marks active or featured moments, and warm off-white maintains legibility. Purple is never decorative noise; it signals motion, emphasis, or premium status. The interface does not turn blue, and it does not lean on cool neon contrast. It stays muted, controlled, and slightly literary.

## Typography

Twk Lausanne is the main voice across the site. It carries the hero, section headings, cards, labels, navigation, and body copy. Jet Brains Mono appears only in code-like snippets and command lines. Applesystem appears as the auxiliary UI face for tiny utility text and browser-style labels. Licensing should be verified before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Twk Lausanne | 6rem | 300 | 1 | -0.04em | Main hero headline |
| section-display | Twk Lausanne | 4rem | 300 | 1 | -0.03em | Large section leads and pricing hero |
| feature-display | Twk Lausanne | 3rem | 300 | 1.1 | -0.024em | Feature introductions and prominent card titles |
| card-heading | Twk Lausanne | 1.375rem | 300 | 1.25 | -0.014em | Plan titles and module headings |
| lead | Twk Lausanne | 1.1875rem | 300 | 1.7 | 0em | Supporting paragraphs and intro copy |
| body | Twk Lausanne | 1rem | 300 | 1.25 | 0em | Standard text, lists, and labels in body size |
| nav | Twk Lausanne | 0.9rem | 300 | 1.25 | 0em | Top navigation and compact control text |
| label | Twk Lausanne | 0.6875rem | 600 | 1.27 | 0.18em | Small uppercase tags and status pills |
| code | Jet Brains Mono | 0.8125rem | 300 | 1.38 | 0em | Command snippets and inline technical lines |
| utility-ui | Applesystem | 0.875rem | 400 | 1 | 0em | Tiny utility labels and auxiliary text |

The hierarchy is built mostly from scale and spacing. Weight stays light even at large sizes, which keeps the page airy rather than loud. Headlines are tightly set, with compact leading and slightly negative tracking. The small labels are the only place where boldness appears, and even there it is used for compact emphasis rather than heaviness. Twk Lausanne should remain the default voice everywhere except the monospace command fragments and the small auxiliary text layer. Applesystem is not the main editorial face; it is the narrow utility face for compact interface text.

## Layout

The page is built on a centered reading column inside a full-bleed black field. The background grid spans the whole canvas, but the content itself stays restrained and aligned to a stable center axis. That gives the page a technical backdrop without making the sections feel like a dashboard. The wide side margins are important: they let the headlines breathe and stop the cards from reading as a dense control panel.

Vertical rhythm is generous. Hero and major section bands use large top and bottom padding, while the internal card gaps stay much smaller. The spacing contrast is what makes the page feel composed: a wide pause before a major section, then a compact stack of title, subtitle, and card content. Desktop sections use a handful of repeated spacing bands rather than many unique values, which keeps the page legible at a glance.

Card layouts are broad and rectangular. The common rhythm is two-up or three-up modules with equal widths, consistent gutters, and simple borders. Corners stay modest, around the 6–8 px family, so the cards feel controlled rather than playful. The layout changes strongly when a section is meant to stand out: the evals band becomes a full-width slab, and featured pricing cards or roadmap cards switch from dark fills to lavender fills. Those shifts are not decorative. They mark a change in importance.

The hero composition is especially important. A small pill sits above the headline, the headline lands in the center field, the supporting copy stays short, and the actions sit beneath in a compact row. The page then repeats that logic in smaller form: state label, headline, short explanation, action. The system works because each section keeps the same hierarchy but changes the surface behind it.

## Visual language

Cognee's visual language is built from simple geometry and a few recurring motifs. The black grid is the most distinctive element: 1px rules form a quiet technical lattice, and small square tiles float over it like memory blocks. Those tiles appear in gray and lavender clusters, which gives the interface a graph-like feel without literal diagrams. The motif is consistent enough to feel branded, but understated enough to leave room for the copy.

The page also relies on contrast between flat and filled surfaces. Most cards are flat charcoal rectangles with subtle borders. Featured states invert that rule by filling the whole card in lavender or by adding a stronger violet edge. This makes emphasis easy to read even when the content inside the card is similar. The brand does not depend on shadows; it depends on color shift and border change.

Typography is part of the visual language, not just the content layer. The site uses huge light-weight headings, spaced labels, and compact supporting lines so the copy itself becomes a visual block. In several sections, the brand also uses letter-spacing as a visual gesture. That keeps the page from feeling static even though the components are mostly rigid rectangles and pills.

The overall mood is controlled and premium, but not glossy. There is no illustration system, no gradient-heavy ornament, and no friendly pastel palette. The site feels like a modern AI product with a strong editorial restraint: dark, measured, and precise.

## Components

### Header shell

The header is a slim bar over the black grid. The logo sits at the left, navigation spans the top, and a rounded lavender cloud button anchors the far right. The links are small, light, and understated, which keeps the header from fighting the hero. The action button is the only high-saturation element in the bar, so it reads instantly.

### Hero stage

The hero is a centered statement with a small badge above it, a very large headline, a short paragraph, and two actions below. The supporting content stays narrow and the line breaks are deliberate, so the headline feels sculpted rather than wrapped by accident. Floating tile clusters and the grid background give the section its identity without needing a large illustration.

### Narrative and problem cards

The charcoal narrative band uses a large question-style headline with purple word fragments and spaced-out emphasis in the middle of words. Below it sits a four-card matrix. Each card is a flat dark rectangle with a thin border, a short title, and a small body paragraph. One card shifts to lavender so the highlight feels structural, not cosmetic.

### Evals band

The evals section is a full-width lavender slab with a row of small tabs at the top, a left-aligned headline, and a small action cluster. The main button is dark, which flips the contrast and makes the section feel like a temporary interruption in the dark flow. The tab strip reads like a controlled filter, not a playful navigation pattern.

### Build roadmap cards

The roadmap section uses three broad cards that describe progression by time: local, connect, production. Each card stacks a small time label, a title, a paragraph, a code-like line, and a footer meta row. The code line in Jet Brains Mono matters because it turns the card from generic marketing into something that looks executable. One card can be lavender to show a more advanced or preferred state.

### Pricing cards

The pricing stage uses three tall columns. The free plan is dark and quiet. The standard plan stays dark but gets a lavender outline and a small popular badge above it. The enterprise plan flips to a lavender fill and uses dark text with a black action button. The price figure is the dominant element in each card, while the feature list stays secondary. The cards read as one family because the spacing and structure are identical, even though the fills differ.

## Responsive behavior

On narrower widths, keep the reading order intact: logo and nav first, then the badge, headline, supporting copy, actions, and finally the cards. The page depends on hierarchy, so the type scale should step down before the cards begin to compress. Card rows should collapse into a stacked flow rather than squeezing their columns until the text turns cramped.

The grid motif should stay visible but lighter on small screens. If the tile clusters or grid rules become too dense, they will compete with the headlines. Pills, badges, and buttons should stay single-line whenever possible; if they wrap, they lose the compact, controlled tone that defines the page. Lavender sections should remain full-bleed blocks, even when the interior content becomes stacked.

## Practical implementation guidance

### Preserve

- Keep the black canvas, warm off-white text, and lavender accent family intact.
- Use Twk Lausanne for almost everything; reserve Jet Brains Mono for snippet lines.
- Preserve the 1px grid and small square tile motif as a structural layer.
- Keep emphasis moving through fill, border, and label color rather than through heavy shadow.
- Hold the page to a narrow center column with wide side space.

### Avoid

- Avoid blue accents, bright cyan AI clichés, or multi-hue gradients.
- Avoid making every card look raised; most surfaces are flat and quiet.
- Avoid thick borders, oversized shadows, or rounded corners that feel soft and toy-like.
- Avoid turning the grid background into a dominant pattern.
- Avoid mixing in extra type families or decorative scripts.

### Recommended build order

1. Set the canvas, text, and lavender color roles.
2. Build the Twk Lausanne type scale and the Jet Brains Mono snippet style.
3. Create the full-bleed grid background and floating tile motif.
4. Add the header shell and hero stage.
5. Build the shared dark card, accent card, and pill button primitives.
6. Lay out the narrative cards, evals band, roadmap cards, and pricing cards.
7. Tune spacing, border softness, and contrast across the full page.

### Accessibility

- Keep the lavender fill dark enough, and the dark text strong enough, for clear contrast.
- Make the pale grid lines secondary so they never interfere with reading.
- Use visible focus styles on pills, buttons, and tabs; the focus treatment should be stronger than the grid line.
- Keep small labels readable by preserving their size and spacing on narrow widths.
- Ensure code-like lines remain legible against charcoal and lavender surfaces.

## Scope note

This guide covers the desktop home, evals band, roadmap cards, and pricing stage shown in the supplied packet. All rem values use the packet's 0.125rem step. Mobile layouts, motion, hover or focus behavior, disabled states, and any surface not shown here are not specified.
