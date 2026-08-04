# How ai-sdk-tools.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ai-sdk-tools.dev-design)

Last updated: 2026-08-04

## Captured pages

[![Split hero with a giant monospace headline, install chips, and a framed dashboard panel](https://pin.fontofweb.com/2241?format=jpg)](https://design.withfudge.com/share/pin-2241)

[Split hero with a giant monospace headline, install chips, and a framed dashboard panel](https://design.withfudge.com/share/pin-2241)

[![Dark artifacts section with three tall code blocks and a centered utility row beneath](https://pin.fontofweb.com/2242?format=jpg)](https://design.withfudge.com/share/pin-2242)

[Dark artifacts section with three tall code blocks and a centered utility row beneath](https://design.withfudge.com/share/pin-2242)

[![About page with centered intro text, long story copy, and a three-column tools summary](https://pin.fontofweb.com/2243?format=jpg)](https://design.withfudge.com/share/pin-2243)

[About page with centered intro text, long story copy, and a three-column tools summary](https://design.withfudge.com/share/pin-2243)

[![Left-heavy hero variant with oversized headline, install rows, and a console-style panel](https://pin.fontofweb.com/2239?format=jpg)](https://design.withfudge.com/share/pin-2239)

[Left-heavy hero variant with oversized headline, install rows, and a console-style panel](https://design.withfudge.com/share/pin-2239)

[![Getting-started page with stacked code cards, utility buttons, and a dark footer band](https://pin.fontofweb.com/2237?format=jpg)](https://design.withfudge.com/share/pin-2237)

[Getting-started page with stacked code cards, utility buttons, and a dark footer band](https://design.withfudge.com/share/pin-2237)

## Overview

AI SDK Tools uses a severe, technical visual language: black canvas, pale monospace text, thin borders, and a single green accent that signals activity rather than decoration. The site feels like a developer product built by people who care more about clarity than polish. Large headings carry the page, while code blocks, dashboard mockups, and utility rows supply the proof that the product is real.

The system stays in one dark family across the full page. There is no separate light treatment in the shown material. Instead, the page changes depth through small shifts: the outer canvas is nearly black, panels rise only a shade or two above it, and internal boxes become slightly lighter again. That narrow range keeps the page coherent and makes the typography do most of the work.

The most important qualities to preserve are:

- A single monochrome field with one green active color.
- Geist Mono used as both headline and body voice.
- Oversized, lightly spaced headings that break cleanly across lines.
- Thin bordered cards and code panels with very little visual noise.
- A layout that alternates between narrative sections, code samples, and product mockups.
- A calm, restrained rhythm that feels engineered rather than branded.

## Colors

The palette is intentionally compressed. Most of the interface sits on a black-to-charcoal ladder, and the only bright color is the green status accent used for active states, live indicators, and primary utility cues. The site does not present a separate light mode or a photographic color story in the shown pages. Keep the black family dominant and let the accent do a small amount of signaling work.

| token | value | role |
|---|---|---|
| `canvas` | `#000000` | Outer page field and the deepest section background |
| `surface` | `#000000` | Main section fill and large dark panels |
| `panel` | `#313131` | Code boxes, inset cards, and dashboard tiles |
| `border` | `#4a4a4a` | Hairline edges around cards and framed mockups |
| `ink` | `#f8f8f8` | Large headings and the strongest text on dark fields |
| `mutedInk` | `#959595` | Supporting copy, labels, and secondary navigation |
| `quietInk` | `#595959` | Low-priority metadata and subdued explanatory text |
| `action` | `#28b76e` | Live dots, active states, and the rare primary accent |

Use `ink` sparingly; much of the page is written in `mutedInk` so the big headings can land with more force. `panel` is the key contrast color because it gives code cards and dashboard boxes enough lift to read as containers without turning them into glossy surfaces. `border` should stay thin and quiet. It exists to define edges, not to separate whole modules aggressively. `action` should remain rare and precise.

## Typography

Geist Mono is the only family in the design. That choice gives the site a technical, exact voice and ties together headings, labels, code, and small utility text. The family is credited to Basementstudio Andrés Briganti Mateo Zaragoza, with vendor credit to Basementstudio Vercel Andrés Briganti Guido Ferreyra Mateo Zaragoza. Confirm licensing before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `heroDisplay` | Geist Mono | 3.75rem | 400 | 0.95 | -0.02em | Landing hero and page-defining statements |
| `sectionDisplay` | Geist Mono | 2.25rem | 400 | 1.05 | -0.02em | Section headlines and major content breaks |
| `cardHeading` | Geist Mono | 1.125rem | 400 | 1.2 | 0em | Tool names, feature labels, and panel titles |
| `body` | Geist Mono | 0.875rem | 400 | 1.6 | 0em | Explanatory copy and feature descriptions |
| `code` | Geist Mono | 0.875rem | 400 | 1.5 | 0em | Install lines, snippets, and command-like text |
| `label` | Geist Mono | 0.75rem | 400 | 1.4 | 0.02em | Tiny captions, status labels, and nav details |
| `legal` | Geist Mono | 0.75rem | 400 | 1.5 | 0em | Footer notes and low-priority informational text |

The hierarchy depends on scale, spacing, and line breaks more than on weight changes. Headings are not shouting through boldness; they are simply much larger, and they sit in a compact line height that lets the page feel technical and direct. Supporting copy opens up enough to stay readable on the dark field, but it never becomes airy or editorial in the way a lifestyle brand would. Code text and body text sit close together in size, which reinforces the idea that prose and commands belong to the same system.

## Layout

The layout uses wide margins and a centered container, but the content itself is arranged in strong, deliberate blocks. The hero opens as a split stage: the left side carries the message and the install command, while the right side holds a framed dashboard or console mock. That structure immediately tells the visitor that this is a product for developers, not a general marketing site.

Below the hero, the page shifts into evenly spaced sections with three-column groupings. These rows are not dense grids; they are loose technical summaries with short headings and brief paragraphs. The spacing between items is large enough that each column reads independently. That matters because the site depends on a steady rhythm of headings, code, and small utility elements rather than on images or animated transitions.

Code sections are treated as content blocks, not as inline snippets. Their borders, fills, and internal paddings make them feel like interactive tools or install surfaces. The dashed or lightly articulated edges around some command rows add to that utility feeling without introducing a heavy container style. The footer then drops the hierarchy again: it compresses into a darker band with centered branding and compact utility links, which gives the page a quiet ending.

The layout should preserve three distinct scales:

- A large split stage for the hero and major product mockups.
- A medium grid for feature summaries and install surfaces.
- A compact footer band for end-of-page utility.

## Visual language

The visual language is spare, crisp, and code-adjacent. Shapes are mostly rectangles with only a little rounding. There are no ornamental gradients, no decorative shadows, and no colorful illustrations competing with the content. Instead, the page gets its character from contrast between black fields, slightly lighter panels, and the bright white of the main headlines.

The dashboard mockups and code cards do most of the expressive work. They provide internal structure through tabs, status dots, metric tiles, vertical scrollbars, and copy icons. That makes the system feel useful before it feels branded. The green accent then ties those utility parts together: it marks a live state, a success state, or an active signal without taking over the composition.

Because the whole page is monochrome, subtle changes matter. `panel` must be distinguishable from `surface`, and `surface` must stay distinct from `canvas`. The design should rely on these tiny shifts rather than on decorative color blocks. That restraint is part of the identity.

## Components

### Top navigation

The navigation is a thin, low-contrast strip that sits comfortably against the black canvas. It carries the AI SDK Tools wordmark on the left, a short row of section links in the center, and a small icon on the right. The active item is brighter than the rest, but the difference is modest. The point is orientation, not spectacle.

The typography is small and functional. It should stay in `label` or a similarly restrained size so the hero can remain dominant. Keep spacing wide enough that the nav reads as part of the page architecture rather than as a heavy chrome bar. The nav should never acquire a filled background or a strong border unless it must detach from a darker section.

### Hero block

The hero is the page's loudest moment, but it is loud only by scale. The headline is oversized, set in Geist Mono, and broken across short lines so it lands with impact even in a narrow column. Supporting text is smaller and quieter, and it sits close enough to the headline to feel like one thought. The install row below it is a practical anchor: one line of command text with a copy affordance or equivalent utility control.

On the right, the framed dashboard or console panel gives the hero a second voice. It should use `panel` fill, a fine `border`, and compact internal spacing. The frame must look like a working surface, not a poster. Any active marker inside it should use `action` and remain small.

### Code panels

The code panels are one of the strongest repeated motifs. They appear as stacked boxes with command text, subtle borders, and tiny copy icons. Their surfaces sit just above the canvas, so the boxes feel embedded rather than floating. These panels need disciplined alignment: left edges should line up, text should stay on one baseline rhythm, and internal padding should be tight enough to feel practical.

Variants include stacked install rows, tall code cards, and inline command strips below headings. All of them should preserve the same visual DNA: dark fill, faint edge, monospace text, and a small utility affordance aligned to the right. If a panel has to scroll, the scroll bar should feel like part of the content rather than a browser artifact.

### Feature summaries

The feature summaries use plain text rather than boxed cards. Each item has a monospace heading and a short paragraph below it. The spacing between columns is wide, so the row reads as a set of separate utility statements. This is where the design explains capabilities without losing the site’s austere tone.

These items should stay low-ornament. Do not add icons unless they are already visible in the page family. If a feature summary needs emphasis, do it with slightly stronger text color or a longer heading line, not by wrapping it in a louder shape.

### Dashboard mock and status areas

The dashboard-style panels define the product feeling. They show tabs, metric boxes, activity lists, and status indicators inside a clean rectangular frame. The internal hierarchy is compact and technical. Labels are small, the metrics are clearer, and the live state is marked with green.

This component should keep its grid simple. It benefits from a strong outer border, but its internal tiles should remain flat. The visual interest comes from information density and alignment, not from depth effects. Keep the status dot, key figures, and row spacing consistent so the mockup reads as a real interface.

### Footer band

The footer is minimal and dark. It compresses the page into a quieter register, with branding centered or near-centered and utility text kept small. The footer should feel like the end of a technical document: controlled, precise, and slightly dimmer than the rest of the page.

## Responsive behavior

On smaller screens, the hero should collapse into a single column with the headline first, then the supporting text, then the command line or install row, and only then the dashboard or console panel. Three-column feature rows should stack cleanly into one column with generous vertical gaps. Code panels should keep their monospace size and allow internal scrolling if needed rather than shrinking below legibility. Navigation should compress into a simpler set of links or a compact menu while keeping the active state readable. The green accent should stay visible on narrow screens, but only in small doses.

## Practical implementation guidance

### Preserve

- Keep Geist Mono as the only type family.
- Use the black field, near-black surfaces, and thin borders as the core of the system.
- Let the hero headline and code panels carry the visual identity.
- Reserve green for active, live, or success states.
- Maintain the quiet technical tone by keeping copy short and specific.

### Avoid

- Avoid gradients, glows, and decorative shadows.
- Avoid introducing a second font family for emphasis.
- Avoid bright accent colors beyond the existing green signal.
- Avoid large rounded cards that would make the site feel consumer-oriented.
- Avoid turning every section into a boxed module; some of the strongest rows here are text-first.

### Recommended build order

1. Set the canvas, surface, border, and text colors.
2. Build the Geist Mono type scale and line-height rhythm.
3. Recreate the top navigation and hero split.
4. Add the command panels and dashboard mockups.
5. Build the plain-text feature rows.
6. Finish with the footer band and utility links.

### Accessibility

- Keep body copy and muted labels legible against the black field.
- Preserve strong contrast for the hero headline and any code text.
- Make copy buttons, nav links, and tabs clearly focusable.
- Give the dashboard and code panels sensible keyboard paths if they scroll.
- Do not let `mutedInk` become so dim that it disappears on the deepest surfaces.

## Scope note

This guide covers the dark marketing pages shown here: the homepage hero, the artifacts and tools sections, the about-page story block, the getting-started code panels, and the footer band. Measurements are practical adaptation targets. Mobile breakpoints, motion, hover states, loading states, error states, and the full fallback font stack are not included.
