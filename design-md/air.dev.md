# How air.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/air.dev-design)

Last updated: 2026-08-04

## Captured pages

[![Teal gradient hero with pixel headline and a centered download button](https://pin.fontofweb.com/5314?format=jpg)](https://design.withfudge.com/share/pin-5314)

[Teal gradient hero with pixel headline and a centered download button](https://design.withfudge.com/share/pin-5314)

[![Four-column coming-soon grid with glowing teal icon clusters on charcoal](https://pin.fontofweb.com/5317?format=jpg)](https://design.withfudge.com/share/pin-5317)

[Four-column coming-soon grid with glowing teal icon clusters on charcoal](https://design.withfudge.com/share/pin-5317)

[![Task-workflow section with a left explainer and a framed editor workspace](https://pin.fontofweb.com/5315?format=jpg)](https://design.withfudge.com/share/pin-5315)

[Task-workflow section with a left explainer and a framed editor workspace](https://design.withfudge.com/share/pin-5315)

[![Footer call to action over a field of soft gray bubble-like motifs](https://pin.fontofweb.com/5316?format=jpg)](https://design.withfudge.com/share/pin-5316)

[Footer call to action over a field of soft gray bubble-like motifs](https://design.withfudge.com/share/pin-5316)

## Overview

Air uses a restrained dark canvas and a single high-contrast message style to make the product feel engineered, not decorative. The homepage reads like a control room: compact mono copy, oversized dotted headlines, bright white controls, and teal-green ambient shapes all sit on top of a charcoal base. The result is technical, but not cold. It feels like a live desktop product that expects the user to act quickly.

The composition is built around strong contrast between text and atmosphere. White and near-white type carries the story. Teal and blue are reserved for energy: the glowing cloud forms, the inner highlights of the illustrations, and the action controls. Large fields of negative space keep the page from feeling crowded even when the layouts are dense with interface mockups and explanatory copy.

The system’s visual identity comes from the combination of:
- Dotted display typography that feels retro and machine-made.
- Tight mono body copy for product explanation.
- A charcoal page base with softer raised surfaces for framed demos.
- White buttons and labels that punctuate the dark scene.
- Teal cloud shapes and cyan highlights that imply motion without actual animation in the still page.

## Colors

The palette stays low-key and technical. Most of the page lives in charcoal and near-black tones, while the accents arrive as thin, bright signals rather than broad color blocks. White is used for legibility and the primary button face. Blue is the clearest action color. Teal and deep teal support the ambient graphic system and the cloud-like product motifs.

| token | value | use |
|---|---|---|
| `canvas` | `#2B2C2E` | Main page background and wide open sections |
| `surface` | `#232426` | Raised content stages and framed demos |
| `surface-raised` | `#2D2F30` | Slightly lifted panels and card surrounds |
| `ink` | `#F8F9F9` | Primary text, button text, and icon contrast |
| `muted-ink` | `#BABBBE` | Supporting copy and secondary labels |
| `secondary-ink` | `#989999` | Fine print and quieter metadata |
| `border` | `#56585B` | Hairline panel borders and subtle separators |
| `action` | `#3678D5` | Main interactive emphasis and blue UI highlights |
| `accent-teal` | `#35A0A6` | Glowing cloud centers and small product accents |
| `glow` | `#076975` | Deeper teal shading inside the ambient motifs |
| `deep-accent` | `#074A5E` | Darker teal depth for layered glow and fades |

The relationship between modes is simple: charcoal and near-black carry the structure, white carries the message, blue carries the call to act, and teal carries the atmosphere. Light surfaces are rare and highly controlled, mostly limited to the white button face and pale text on dark panels. Photography is not part of this system; the page uses rendered interface scenes and soft abstract forms instead. That keeps the accent colors readable as product signals rather than decoration.

## Typography

Air depends on two families with very different jobs. **Komuna Var-6 Round 100** drives the large dotted display lines and gives the site its loudest personality. **Jet Brains Mono** handles the explanatory copy, labels, button text, and the small metadata blocks around the page. Jet Brains Mono is credited to Philipp Nurullin and Konstantin Bulenkov at JetBrains; licensing should still be checked before reuse. The other family has no stated credit, so reuse should be treated conservatively.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Komuna Var-6 Round 100 | 4.5rem | 400 | 0.92 | 0em | Primary homepage headline |
| `section-display` | Komuna Var-6 Round 100 | 2.75rem | 400 | 0.96 | 0em | Section titles and lower-page calls to action |
| `card-heading` | Jet Brains Mono | 1.25rem | 700 | 1.1 | 0.02em | Feature labels and short panel titles |
| `body` | Jet Brains Mono | 1rem | 400 | 1.5 | 0em | Supporting paragraphs and product explanations |
| `label` | Jet Brains Mono | 0.875rem | 700 | 1.2 | 0.06em | Button text, small headings, and UI tags |
| `micro` | Jet Brains Mono | 0.75rem | 400 | 1.4 | 0.04em | Fine print, helper notes, and footer metadata |

The display face should stay large and spare. It works best when the line length is short and the blocks are stacked with generous vertical separation. The mono family needs room to breathe as well; the body copy is legible because it stays compact, not because it stretches across the page. The strongest hierarchy comes from scale and spacing, not from mixing many weights or decorative styles.

## Layout

The page is organized as a vertical sequence of wide, centered chapters. Each chapter has a different internal structure, but the outer rhythm stays consistent: plenty of dark space, a strong heading, a compact supporting paragraph, and one clear focal point. That gives the site a steady pace even when the content alternates between pure typography, feature explanations, and framed product screenshots.

The hero uses the most openness. A thin gradient band sits above the dark field, then the headline and action sit together in the left-middle of the page while a dark product screenshot anchors the lower half. The composition makes the product feel like a desktop app before the viewer reads the details.

The middle section shifts into a four-column information grid. Each column pairs a short uppercase label with a brief body paragraph, then a glowing circular illustration below it. This is the loosest section in the page, and it needs enough horizontal room that each feature can breathe independently. The grid should not collapse into a dense list; the air between columns is part of the identity.

The task-loop section becomes more structured again. A large dotted heading sits above a two-part layout: a left explanation column and a wide framed workspace on the right. That workspace is the heaviest object on the page, so the text column should remain narrow and stable. The frame reads like a desktop app window and should stay visually heavier than the surrounding copy.

The footer returns to openness, but with less emphasis. A compact call to action sits near the top of the section and a soft field of gray circular forms fills the lower half. The treatment feels like the hero in reverse: the message is small and direct, while the background carries the mood.

## Visual language

Air uses a small set of repeated visual motifs and lets them do a lot of work. The most distinctive motif is the dotted, rounded display type. It feels like pixels, but softer; it gives the site a computing identity without making the interface look retro for its own sake. The dot pattern also pairs well with the circular ambient forms in the illustrations and footer texture.

The second motif is the soft, cloudy glow. Many icons and product metaphors sit inside rounded clusters of circles, with teal centers and gray outer rings. Those clusters make the page feel alive even when the overall palette stays restrained. The circles are not random decoration; they establish the brand’s idea of agents as many cooperating units.

The third motif is the framed workbench. Dark panels, thin borders, and nested windows give the product screenshots a controlled, tool-like character. These panels are not glossy. They are matte, slightly raised, and designed to keep the content legible against the charcoal base.

Overall, the page avoids ornamental flourish. Shape, spacing, and contrast carry the expression. The design feels dense in information but calm in surface treatment. That balance is the core of the system.

## Components

### Top bar
The top bar is minimal and light against the darker field below. It uses small mono text, a compact logo mark, and a white button on the right. Keep the bar visually thin; it should frame the hero, not compete with it.

### Hero message
The hero message uses the largest dotted headline on the page, followed by one short supporting paragraph and a white action button. The headline is short, stacked, and left aligned. The paragraph sits close enough to feel connected but far enough to keep the headline dominant. The action button is a flat white capsule with dark text, which makes it feel crisp and command-like rather than decorative.

### Coming-soon feature grid
This component combines four short feature blocks with separate illustrations below them. The labels are uppercase and compact. The body copy is short and direct, with enough line height to stay readable on the charcoal background. Each illustration uses a soft gray cloud ring and a teal or cyan center, so the grid reads as a family even though each column has a different subject. The row needs even column spacing and generous vertical separation between text and illustration.

### Workspace demo
The workspace demo is the heaviest framed object in the system. It uses a dark panel with a thin edge, nested interior panels, and a clear left-right split between explanation and workspace. The internal interface uses smaller mono text, subtle borders, and dark gray surfaces so the main screen remains readable without high gloss. Treat the panel as a desktop artifact: square enough to feel functional, rounded enough to fit the rest of the system.

### Footer call to action
The footer reuses the dotted display face for a short prompt and pairs it with a small white button and tiny supporting notes. The lower half is filled with soft, blurred circular forms that echo the earlier cloud motif but in a quieter way. This section should feel open and spacious, not cramped with links. The button remains the only bright object in the area, which keeps the end of the page focused.

## Responsive behavior

On narrower layouts, the order should stay simple: headline, action, explanation, and then the product or feature visual. The dotted display type needs to scale down carefully so the letters do not lose their chunky character. The four-column feature row should collapse into a single stack or a two-by-two arrangement, but the illustrations should remain paired with their labels. The workspace demo should shrink by stacking its left explanation above the framed interface rather than squeezing both into a narrow row.

The page also benefits from preserving generous vertical spacing on smaller screens. The system loses its calm when the chapters crowd each other. If horizontal room is tight, reduce the number of visual elements per row before reducing the breathing room around the main message. The white button should remain visible without being stretched across the full width unless the mobile pattern needs that treatment for usability.

## Practical implementation guidance

### Preserve
- Keep the dotted display face for the largest statements only. It is the identity cue.
- Hold the page in a charcoal range and use white for the main text path.
- Use blue as the clearest interaction color and teal as the ambient accent.
- Preserve the soft circular motifs; they are the page’s visual glue.
- Keep panels matte and dark, with only light borders and restrained lift.

### Avoid
- Avoid glossy gradients, glass effects, or heavy shadows.
- Avoid introducing a second loud accent color that competes with blue and teal.
- Avoid turning the mono text into a generic sans system; the technical tone depends on the monospaced rhythm.
- Avoid crowding the four-column section with extra badges or secondary links.
- Avoid shrinking the display face so far that the dot pattern becomes mush.

### Recommended build order
1. Set the charcoal base, white text, and blue action color.
2. Rebuild the dotted headline system and mono body scale.
3. Add the top bar and hero controls.
4. Build the four-column feature grid with cloud-like illustration clusters.
5. Add the framed workspace demo and its nested panels.
6. Finish with the footer prompt and circular background texture.

### Accessibility
- Keep white text on the charcoal base at strong contrast levels.
- Use the blue button fill only where the text remains legible at small sizes.
- Do not rely on the dotted display type for long paragraphs; reserve it for headings.
- Give the framed demo a clear reading order so the heading and summary are easy to reach.
- Keep visible focus treatment on the white button and any text links.
- Provide descriptive alternative text for the workspace screenshot and the glowing icon clusters.

## Scope note

This guide covers the public homepage sections shown here: the hero, the coming-soon feature grid, the task-loop workspace demo, and the footer call to action. Measurements are practical adaptation targets. Mobile layouts, motion, hover or focus styling details, and other site pages are not included.
