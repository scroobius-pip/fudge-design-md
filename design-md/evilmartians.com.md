# How evilmartians.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/evilmartians.com-design)

Last updated: 2026-08-08

## Captured pages

[![Full-bleed black home hero with giant white headline and a floating 3D color object](https://pin.fontofweb.com/8132?format=jpg)](https://design.withfudge.com/share/pin-8132)

[Full-bleed black home hero with giant white headline and a floating 3D color object](https://design.withfudge.com/share/pin-8132)

[![Article hero with topic pills, author row, and rainbow OKLCH illustration on black](https://pin.fontofweb.com/8133?format=jpg)](https://design.withfudge.com/share/pin-8133)

[Article hero with topic pills, author row, and rainbow OKLCH illustration on black](https://design.withfudge.com/share/pin-8133)

[![Light code sample card with monospace CSS and tiny color swatches in a pale inset](https://pin.fontofweb.com/8134?format=jpg)](https://design.withfudge.com/share/pin-8134)

[Light code sample card with monospace CSS and tiny color swatches in a pale inset](https://design.withfudge.com/share/pin-8134)

[![Rounded OKLCH calculator grid with graphs, toggles, and compact control cards](https://pin.fontofweb.com/8135?format=jpg)](https://design.withfudge.com/share/pin-8135)

[Rounded OKLCH calculator grid with graphs, toggles, and compact control cards](https://design.withfudge.com/share/pin-8135)

## Overview

Evil Martians uses a severe, theatrical developer identity: black first, white second, and color only where the content asks for it. The homepage hero is almost all negative space, oversized headline, and one central 3D illustration. A narrow left rail of section links and a small utility column on the right keep the frame organized without softening it. That same discipline carries into article pages, where the black top stage gives way to a white reading column. The result feels like a studio-built editorial site rather than a product brochure.

The system is defined by contrast more than ornament. Display type is huge and tightly set. Small controls stay square and compact. Tag pills, code blocks, and author details are quiet, but they sit against a stage that makes every detail feel intentional. The color story is restrained at the interface level and vivid inside the article art, charts, and code examples.

## Colors

Evil Martians depends on a hard black-and-white chassis, then adds a few saturated accents for technical illustration, syntax examples, and rare emphasis. The black stage is not a neutral backdrop; it is the default visual mode for the home hero and the top of article pages. White takes over for reading sections below the fold. The mauve-rose accent is the most brand-like color in the system, while the brighter violet, magenta, olive, and amber tones appear inside diagrams, charts, and art rather than as broad UI fills.

| token | value | role |
|---|---|---|
| action | `#663F4C` | Rare brand accent, active links, and emphasized small marks |
| ink | `#000000` | Body text on white surfaces and dark linework on light cards |
| muted-ink | `#3B393D` | Secondary copy, metadata, and quieter labels |
| border | `#89868A` | Hairlines, input edges, and subtle dividers |
| canvas | `#FFFFFF` | Reading surfaces, buttons, and the light page field under dark sections |
| surface-dark | `#000000` | Full-bleed hero background and the top of article pages |
| accent-violet | `#550098` | Color-rich art, chart segments, and supporting chroma |
| accent-magenta | `#CB009E` | Bright art strokes and spectrum highlights |
| accent-olive | `#727D00` | Chart greens and technical diagram accents |
| accent-amber | `#A1490F` | Warm technical accents and code-example color variation |

The interface stays calm because the palette is narrow at the structural level. White on black carries the brand voice. The chromatic colors belong to the visual subject matter, not to generic decoration. That split keeps the site sharp: strong contrast for navigation and headings, then full-color illustration where the topic needs it.

## Typography

Martian Grotesk carries the whole interface, while Martian Mono Vf appears only where code or literal values need a mechanical voice. The pages rely on weight and scale more than on a mix of families. Headline settings are bold, large, and tightly tracked. Supporting copy relaxes into a more open leading so the heavy black-and-white staging does not feel cramped. The system works because the display size is dramatic but the reading text remains controlled and legible.

Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Martian Grotesk | 4.5rem | 700 | 0.9 | -0.04em | Home hero headline and article hero headline |
| section-display | Martian Grotesk | 3rem | 700 | 0.95 | -0.03em | Major section headings and large callouts |
| article-title | Martian Grotesk | 2.5rem | 700 | 1 | -0.025em | Dense article subheads and featured pullouts |
| body | Martian Grotesk | 1rem | 400 | 1.6 | 0em | Article text and general explanatory copy |
| body-medium | Martian Grotesk | 1rem | 500 | 1.5 | 0em | Buttons, labels in context, and emphasized body text |
| label | Martian Grotesk | 0.75rem | 700 | 1.2 | 0.08em | Topic tags, nav items, and compact UI text |
| code | Martian Mono Vf | 0.875rem | 400 | 1.5 | 0em | CSS snippets, color values, and technical literals |
| caption | Martian Grotesk | 0.75rem | 400 | 1.4 | 0.02em | Dates, bylines, and minor metadata |

The type scale is compact in the UI and expansive in the hero. Labels are upper-case and spaced out enough to read like interface markers. Code inherits a separate monospaced family so syntax examples feel like tools, not prose. The whole system reads as one family in two voices: display drama for the marketing shell and technical precision for the content beneath it.

## Layout

The site is built around a strong vertical sequence. At the top, a black hero spans the viewport edge to edge. The logo sits in the upper left, a small action button sits in the upper right, and the headline occupies the upper center-left with plenty of negative space around it. A large illustration anchors the middle of the page. The side rails are not decorative; they create a controlled frame that keeps the composition from drifting.

Article pages keep the same dark opening but introduce a reading rhythm below it. The hero stage holds the title, art, topic tags, and author row. Then a hard boundary shifts the page onto white, where the article copy can breathe at a normal measure. This black-to-white transition is the page’s most important structural move. It makes the top feel like a poster and the body feel like a document.

Spacing is generous at the shell level and tighter inside control clusters. Large outer paddings sit around 3rem to 3.375rem, while internal groupings step down to 1rem, 0.75rem, and 0.5rem. That lets the hero breathe without making the tags, nav links, and code examples loose or floating. Hairline rules and small gaps do most of the separating; heavy card chrome is avoided.

The layout also favors asymmetry. The black hero is not centered in a strict grid. The left navigation rail, the central art, and the right utility column all claim different amounts of space. On the article page, byline avatars and topic pills sit below the title rather than beside it, which keeps the reading order clear. The result feels editorial, but the geometry is disciplined enough for a software brand.

## Visual language

Evil Martians mixes flat control surfaces with playful technical spectacle. The interface chrome is spare: square pills, thin rules, small icon buttons, and plain white cards. Against that restraint, the illustration style becomes bold and almost cinematic. The home hero uses a sculptural 3D wordmark and bright planetary forms. The article hero uses a colorful OKLCH chart object that looks engineered rather than decorative. Both make color feel like a subject of the site, not merely an accent.

The system also likes to show technical information as content, not as dashboard furniture. Code snippets sit on pale cards with monospaced text and tiny swatch markers. Topic chips are compact and dark, with white labels that read like tags in a working editorial system. Avatars and author names stay small so the visual hierarchy remains with the headline and artwork. Even when chroma is intense, the surrounding structure stays nearly black or white.

Corners are small and consistent. The 4px radius gives the UI a clipped, precise feel. It works especially well on chips, buttons, and code panels because it prevents the system from becoming soft. The visual language therefore feels both mischievous and exact: the art is loud, the interface is disciplined, and the page never loses its editorial framing.

## Components

### Hero stage

The home and article hero share the same basic structure: a black canvas, white headline, compact utility chrome, and one dominant image. The headline is the largest typographic object on the page and sits close to the top edge. The logo and action button are secondary and should stay visually light. The stage should keep its darkness uninterrupted so the white type and art hold full contrast. Do not add a busy background or a decorative frame; the empty black field is part of the brand.

### Navigation rail

The left rail is a simple vertical list of uppercase section links. It uses the label style and stays narrow, with generous separation between items but no heavy box around the list. This component should feel like a navigation index pinned to the side of a poster. The selected item can be marked by a small bullet or accent treatment, but the overall treatment stays quiet. The right-side icon rail is even lighter and should remain secondary to the left rail and headline.

### Primary action

The visible top-right action is a white rectangular button with black text and small rounded corners. It is not a glossy CTA; it reads as a crisp utility control. Keep the padding compact and the border or edge definition minimal so it does not compete with the headline. In the dark stage, the button acts as a bright interruption. On lighter surfaces, the same button can remain plain white with dark text and a restrained border.

### Topic chips

Topic chips appear below the article hero as a wrapped row of small dark pills with white labels. They are tight, low-profile, and deliberately repetitive. The shape is almost square at the corners, which keeps them in the same family as the other controls. Their job is to sort the article semantically without stealing attention from the title or the art. Use the label style, short padding, and consistent chip height so the row reads as a set, not as a mixed cluster of buttons.

### Author row

The author area combines tiny portraits, names, and roles in a compact horizontal arrangement. Names are stronger than roles, but neither competes with the headline. A thin vertical divider can separate the main article framing from the byline cluster, which helps the lower hero feel composed rather than crowded. Avatar size stays small and square or circular depending on crop, but the whole block remains subordinate to the title and illustration. It is a supportive metadata component, not a feature block.

### Code sample

The code card is one of the clearest expressions of the system’s technical voice. It sits on a pale surface, uses Martian Mono Vf, and keeps syntax color limited to a few precise accents. The swatches in the sample are tiny but meaningful: they show that color is something the system handles with care. Borders should stay hairline-thin, and the card should keep its 4px corners so it feels like a tool sample, not a generic callout. Let the content do the work; do not wrap the sample in extra decorative chrome.

### Calculator-style utility cards

The OKLCH tool screen uses rounded white cards with graph areas, value fields, sliders, and toggle controls. The cards are dense but not cramped. Labels sit close to inputs, and the charts introduce bright chroma only inside the plotted area. The controls stay neutral so the color mathematics can remain the focus. This component family should use the same square-corner discipline as the rest of the site, but with softer overall card framing. It is a utility surface, not a promotional block, and its structure should make the color model feel concrete and editable.

## Responsive behavior

On narrower screens, the design should preserve the order of importance: headline, art, tags or metadata, then the reading column. The black hero can stack, but the title must remain dominant and readable before the illustration compresses. Side rails should collapse cleanly into top or inline navigation rather than forcing the page into a cramped three-column layout. Topic chips can wrap, but they should keep their compact height and consistent spacing. Code blocks should remain scrollable only if absolutely necessary; otherwise, they should reflow with readable line lengths. The white article body should keep generous side padding so the page does not become edge-to-edge text on small devices.

## Practical implementation guidance

### Preserve

- Keep the black hero stage as the main brand signal.
- Keep Martian Grotesk as the default voice and Martian Mono Vf for literal code and notation.
- Keep the 4px geometry on chips, buttons, and cards.
- Keep the white reading surface below the dark opening so the page can shift from poster to article.
- Keep color scarce in the interface and rich only in the art, charts, and code examples.
- Keep the side rails visually light so they frame the page instead of dominating it.

### Avoid

- Avoid soft corporate blues, gradient-heavy hero backgrounds, and glossy shadows.
- Avoid large-radius cards that make the UI feel friendly in a generic way.
- Avoid mixing too many text weights or adding a second sans family for decoration.
- Avoid treating chart colors as brand chrome.
- Avoid dense bordered boxes around every module; this system depends on contrast and spacing more than on container styling.

### Recommended build order

1. Establish the black and white surface tokens and the small accent set.
2. Build the headline scale and the common label/code styles.
3. Recreate the dark hero shell with its left rail, right utilities, and top-right button.
4. Add the article hero pattern with topic chips, author row, and centered illustration.
5. Build the white reading column and code-sample card.
6. Add the calculator-style utility cards and graph controls.
7. Validate spacing, line lengths, and small control geometry against the page rhythm.

### Accessibility

- Keep the black-and-white contrast strong enough for all headline and metadata text.
- Ensure topic chips, buttons, and toggles have visible focus styling.
- Give code samples and charts enough contrast that the meaning does not depend on hue alone.
- Use descriptive alt text for the 3D illustration and the chart-like art objects.
- Keep byline text and article body copy readable at the smaller end of the type scale without tightening tracking further.

## Scope note

This guide covers the dark home hero, the article hero and reading column, the code sample card, and the OKLCH utility screens. It does not define mobile breakpoints, motion, hover or loading states, footer content, or any unseen account or commerce pages.
