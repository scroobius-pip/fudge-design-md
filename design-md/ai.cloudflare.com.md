# How ai.cloudflare.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ai.cloudflare.com-design)

Last updated: 2026-08-08

## Captured pages

[![Centered hero with pale globe wash and dark primary button](https://pin.fontofweb.com/744?format=jpg)](https://design.withfudge.com/share/pin-744)

[Centered hero with pale globe wash and dark primary button](https://design.withfudge.com/share/pin-744)

[![Quote band with bold heading, long testimonial, and logo row](https://pin.fontofweb.com/743?format=jpg)](https://design.withfudge.com/share/pin-743)

[Quote band with bold heading, long testimonial, and logo row](https://design.withfudge.com/share/pin-743)

[![Alternating feature rows with mockups, bullets, and learn-more buttons](https://pin.fontofweb.com/742?format=jpg)](https://design.withfudge.com/share/pin-742)

[Alternating feature rows with mockups, bullets, and learn-more buttons](https://design.withfudge.com/share/pin-742)

## Overview

Cloudflare AI uses a spare landing-page system built on white space, dark type, and a few sharp warm accents. The opening scene is centered and almost empty: a large headline, a compact dark button, and a faint globe-like field that gives the page scale without crowding the message. After that, the page shifts into a quote band with a strong heading, a long testimonial, and a row of customer logos. The lower half becomes explanatory and more editorial, with a centered chapter heading and alternating rows that pair short copy with product mockups. The rhythm is calm and deliberate. Each section gets room to breathe, and the page avoids busy framing, loud color blocks, or decorative clutter.

The result feels technical, steady, and enterprise-oriented. Nothing here tries to shout. The page relies on contrast, scale, and spacing to keep the hierarchy obvious. Large headings do the heavy lifting, while the pale background field and small accent points keep the identity memorable. The system is easy to scan because each section is visually distinct but still part of one restrained family.

## Colors

| token | value | role |
|---|---|---|
| action | #000000 | Primary button fill and the strongest interactive tone |
| ink | #000000 | Headlines, body copy, and supporting labels |

The token set is intentionally minimal. The dark UI tone carries the strongest hierarchy, while the page itself remains mostly open and bright with pale atmospheric imagery and small warm points that are handled as page treatment rather than named UI tokens. That balance matters: dark ink keeps the headline and button readable at a glance, while the white field around them gives the page its airy feel. The warm accents should stay small and local so they do not compete with the text system. Keep the palette narrow at the interface level and let the background space do the rest of the work.

Light and dark are not used as equal brand modes here. The page reads as a light canvas with a very small amount of dark contrast for action and emphasis. Contextual imagery adds pale gray geography and tiny orange markers, but those belong to the composition, not to a broader token library. The page stays calm because the UI does not widen its color vocabulary beyond the minimum needed for hierarchy.

## Typography

The page behaves like a tightly controlled type system with weight and size carrying the hierarchy. Display text is bold and compact. Body copy is open enough for long statements and explanatory paragraphs. The quote treatment sits between the hero and the body scale so it reads as a substantial testimonial without turning theatrical. The small label style is crisp and compact for bullets, attribution, or minor cues. The type system works because the differences are disciplined: large headings, medium lead text, readable body text, and a small support size for secondary material.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | — | 3.75rem | 700 | 1.02 | -0.03em | Centered hero headline |
| section-display | — | 3rem | 700 | 1.05 | -0.025em | Chapter headings and feature intros |
| quote | — | 1.5rem | 400 | 1.45 | 0em | Testimonial text in the quote band |
| lead | — | 1.25rem | 400 | 1.55 | 0em | Supporting sentence under a heading |
| body | — | 1rem | 400 | 1.6 | 0em | General paragraph copy |
| label | — | 0.75rem | 600 | 1.2 | 0.01em | Small labels, bullets, and attribution cues |

The scale stays on a 4px rhythm so the layout can reuse a small set of steps without drifting into one-off sizes. The hero headline is the only very large treatment, and it anchors the top of the page. Section headings are slightly smaller but still assertive, which keeps the quote band and feature rows coherent. Body copy remains comfortably sized for dense statements and longer descriptions. Verify licensing for these families before production use.

## Layout

The layout is organized as a sequence of quiet chapters. The hero is centered in a large white field, with the headline, button, and pale globe wash sharing the same visual axis. That first scene is intentionally spacious; the message needs a lot of empty room around it so the page feels global and infrastructure-driven rather than promotional. Below that, the quote band switches to a more editorial arrangement: a shorter heading sits to one side, a long testimonial occupies the larger reading column, and the logo row closes the section with a measured cadence.

The feature area uses an alternating left-right rhythm. One row pairs explanatory copy with a product mockup on the right, and the next row flips that order. This keeps the page moving without changing the underlying grid. The repetition is useful because it lets the reader understand the structure immediately, then focus on the content. Section spacing is broad, internal gaps are generous, and the page never crowds multiple ideas into one box. That restraint is part of the layout language. The content reads top to bottom in a smooth line, but each chapter still feels separate enough to stand on its own.

The spacing system should preserve that silence. Large section breaks, broad gutters, and modest internal padding create a premium pace. The page does not need dense containers or a crowded navigation band to feel complete. It works because each chapter has enough room to read cleanly and enough contrast to feel distinct from the one before it.

## Visual language

The visual language is clean, infrastructural, and lightly atmospheric. The hero background uses a very pale globe-like wash that suggests scale and reach without turning into literal illustration. Tiny orange points punctuate that field and add a low-key signal effect. Those marks are small enough to stay secondary, but they keep the hero from feeling flat. The rest of the page is almost monochrome, which makes the warm notes stand out even more when they appear in attribution or tiny interface details.

The mockups in the feature rows are simple and flat. They use light framing, bright interiors, and little to no shadow drama. The overall tone is technical rather than glossy. Borders are thin, surfaces are quiet, and the page rarely leans on heavy container styling. That makes the screenshots and copy feel like product proof instead of campaign decoration. The page is memorable because it is restrained: the globe wash gives it scale, the dark type gives it authority, and the orange details give it just enough energy.

## Components

### Hero stage

- **Anatomy:** a centered headline, a compact primary button, and a faint globe-like background field.
- **Surface:** a bright open field with almost no visible framing.
- **Typography:** large bold headline text with a tight rhythm and a clean, direct line break pattern.
- **Shape:** the button reads as a compact rectangle with square corners and a stable silhouette.
- **Spacing:** wide margins around the content and enough vertical air to keep the hero floating.
- **Composition:** the text sits above the background field instead of inside a boxed header.
- **Visible states:** only the default launch state is shown here; keep any interactive styling subtle.

### Quote band

- **Anatomy:** a short heading, a long customer quote, an attribution line, and a row of brand logos.
- **Surface:** white and open, with no heavy card treatment.
- **Typography:** the heading is heavier than the quote, while the attribution uses a smaller, brighter emphasis to read like a signature line.
- **Shape:** the section feels unboxed; the spacing does most of the separation work.
- **Spacing:** a wide column gap keeps the quote from feeling squeezed.
- **Composition:** logos sit low and evenly spaced so the band ends with a steady visual line.
- **Visible states:** treat this as a static trust section; do not invent animated or expanded behavior.

### Feature row

- **Anatomy:** a centered chapter title, supporting sentence, and paired text-plus-mockup rows.
- **Surface:** mostly white, with pale product imagery inside the mockups.
- **Typography:** chapter headings are bold and broad, while body copy stays compact and readable.
- **Shape:** the mockups use light framing and light chrome, keeping them clean rather than glossy.
- **Spacing:** copy and image are separated by a generous gap, then mirrored on the next row.
- **Composition:** the alternating alignment keeps the page from feeling repetitive.
- **Visible states:** the rows read as static explanation blocks; avoid assuming hover, focus, or disclosure behavior from the still layout.

### Primary action

- **Anatomy:** a single-line label inside the dark hero button.
- **Surface:** the darkest tone in the interface, which makes it easy to find.
- **Typography:** medium-size sans-serif text with enough weight to stand out immediately.
- **Shape:** compact rectangle, square corners, and a narrow footprint relative to the headline.
- **Spacing:** modest internal padding that keeps the control small and deliberate.
- **Composition:** the only obvious action in the hero, so it controls the top-level call to action.
- **Visible states:** keep the interaction styling understated so the button stays aligned with the page’s calm tone.

## Responsive behavior

On narrower screens, the page should keep the same reading order: hero, quote band, then feature explanation. The centered hero can remain centered, but the headline should wrap cleanly and keep its strong rhythm. The quote band should collapse into a single column with the heading above the quote and the logos below. The alternating feature rows should stack into a simple top-to-bottom flow so the story remains easy to follow.

The main responsive rule is to preserve breathing room. This design depends on open space to feel premium and legible. If the layout tightens too much, the page loses the calm tone that defines it. Keep the button easy to tap, keep the headings legible, and let the globe field stay soft rather than turning busy. The sections should still feel distinct after stacking, with enough gap between them to preserve the chapter structure.

## Practical implementation guidance

### Preserve

- Keep the hero centered and spacious.
- Keep the dark UI tone limited to the strongest text and the primary button.
- Preserve the pale globe field as a low-contrast backdrop.
- Keep warm accents small and local.
- Maintain the alternating text-and-mockup rhythm in the feature area.

### Avoid

- Avoid adding extra accent colors.
- Avoid heavy shadows, glossy cards, and dense borders.
- Avoid crowding the hero with extra copy or secondary controls.
- Avoid turning the globe field into a content container.
- Avoid mixing in decorative type styles that weaken the single-stack hierarchy.

### Recommended build order

1. Set the bright page field and the dark action tone.
2. Build the centered hero with its large background wash.
3. Add the quote band with the testimonial and logo row.
4. Add one alternating feature row and reuse that structure.
5. Refine spacing so each section keeps its own quiet rhythm.

### Accessibility

- Keep strong contrast on the headline and button text.
- Make sure the button remains easy to identify by more than color alone.
- Keep logo marks readable against the bright background.
- Preserve visible keyboard focus on the primary action.
- Keep line lengths comfortable when the page narrows so long copy stays readable.

## Scope note

This guide covers the homepage hero, the quote band, and the alternating feature rows on ai.cloudflare.com. It does not define mobile navigation, motion, dashboards, or other product surfaces.
