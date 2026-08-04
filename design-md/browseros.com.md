# How browseros.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/browseros.com-design)

Last updated: 2026-08-04

## Captured pages

[![Centered chapter heading with serif italics, three rounded chips, and a huge browser mockup](https://pin.fontofweb.com/5990?format=jpg)](https://design.withfudge.com/share/pin-5990)

[Centered chapter heading with serif italics, three rounded chips, and a huge browser mockup](https://design.withfudge.com/share/pin-5990)

[![Two-column feature story with stacked cards at left and a mountain-backed browser scene at right](https://pin.fontofweb.com/5987?format=jpg)](https://design.withfudge.com/share/pin-5987)

[Two-column feature story with stacked cards at left and a mountain-backed browser scene at right](https://design.withfudge.com/share/pin-5987)

[![Tall feature stack with three explanation cards beside a scenic browser-and-agent composite](https://pin.fontofweb.com/5986?format=jpg)](https://design.withfudge.com/share/pin-5986)

[Tall feature stack with three explanation cards beside a scenic browser-and-agent composite](https://design.withfudge.com/share/pin-5986)

[![Rounded footer panel with three link columns and a faint blush grid in the lower-right](https://pin.fontofweb.com/5991?format=jpg)](https://design.withfudge.com/share/pin-5991)

[Rounded footer panel with three link columns and a faint blush grid in the lower-right](https://design.withfudge.com/share/pin-5991)

## Overview

BrowserOS uses an editorial browser brand rather than a hard-edged software skin. The supplied pages sit on a pale paper canvas, set major lines in a bookish serif, and reserve the orange accent for the few places that need to pull the eye. The result feels calm and authored: a homepage that reads like a magazine spread about a product, not a dashboard about a tool.

The structure is deliberately chaptered. A centered hero leads into a row of rounded use-case pills, then into large browser mockups and stacked explanation cards, and finally into a wide footer card. The page stays light all the way through; there is no separate dark interface in the supplied material. Instead, depth comes from dark serif text, a deep brown button fill, and the browser content inside the screenshots.

The system is built from a small set of repeating roles: a soft canvas, white cards, warm borders, orange labels, deep brown emphasis, and large rounded frames. That restraint is what gives the site its tone.

## Colors

BrowserOS is light-first. The canvas is a warm gray rather than a hard white, which keeps the large empty spaces from feeling clinical. White panels sit above that canvas and make the browser mockups, card stacks, and footer card read as distinct objects. Orange is the only saturated UI color; it marks the wordmark, the active pill state, the emphasis words in the serif headings, and the primary call to action. Dark brown carries the strongest text and the main button fill, so the system keeps its warmth even when it needs weight. Photography brings in cooler sky and mountain tones, but those hues stay inside the images and are not promoted to UI tokens.

| token | value | use |
|---|---|---|
| `action` | `#FB651F` | Emphasis words, active pill text, small brand marks, and directional cues |
| `ink` | `#222222` | Body copy, navigation, and card text on pale surfaces |
| `ink-strong` | `#261107` | Serif headlines and the dark primary button fill |
| `ink-muted` | `#666666` | Footer copy, supporting text, and lower-priority descriptions |
| `ink-soft` | `#8D8D8D` | Secondary labels and quiet metadata |
| `border` | `#D9D7D7` | Hairline borders around cards, pills, and the footer panel |
| `canvas` | `#F2F2F2` | The page background and the broad field behind each chapter |
| `panel` | `#FFFFFF` | White cards, pill containers, and the main footer surface |
| `panel-soft` | `#FBEFE9` | The pale peach fill behind the active use-case pill and light accent washes |
| `black` | `#000000` | Hardest extreme for icon strokes, fallback text, and utility contrast |

The relationship among the colors is simple: canvas for the stage, panel for the objects, border for separation, action for interaction, and ink for reading. The system does not need a second dark palette because the deep brown and black tones already provide enough contrast against the pale background.

## Typography

Geist handles the utility layer: navigation, card copy, labels, footer text, and the small control text around the input and button cluster. Junicode gives the site its authorial voice. Junicode-Italic appears inside the chapter lines where one or two words switch into italics for emphasis. The combination is what makes the page feel literary without becoming decorative. The serif is large, light in weight, and set with compact leading; the sans is calm, regular, and slightly tightened so it can sit in dense pill rows and compact cards.

Geist is credited to Basementstudio Andrés Briganti Mateo Zaragoza, with vendor credit to Basementstudio Vercel Andrés Briganti Guido Ferreyra Mateo Zaragoza. Junicode and Junicode-Italic are credited to Peter S Baker. Confirm licensing before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Junicode | 4rem | 400 | 1.1 | -0.015em | Centered hero line and the strongest chapter headings |
| `chapter-display` | Junicode | 3rem | 400 | 1.1 | -0.015em | Section titles like “Use BrowserOS To” and “BrowserOS for Work” |
| `card-heading` | Geist | 1.5rem | 400 | 1.2 | -0.0125em | Feature card titles and small supporting headlines |
| `body` | Geist | 1rem | 400 | 1.3 | -0.0125em | Paragraph copy in cards, footer text, and hero body copy |
| `navigation` | Geist | 1rem | 400 | 1.3 | -0.0125em | Header links, pill labels, and button text |
| `label` | Geist | 0.75rem | 400 | 1.2 | 0.01em | Small orange category labels and compact metadata |
| `legal-copy` | Geist | 0.75rem | 400 | 1.35 | -0.0125em | Footer legal text and quiet supporting notes |

The hierarchy depends on scale and spacing more than on weight changes. The serif headings do the expressive work. The sans text stays mostly regular, so the page never turns into a heavy system UI. The line lengths are short enough that the large display type can breathe without requiring extra letter spacing tricks.

## Layout

The page is built as a centered editorial stack with very wide side gutters. In the supplied desktop views, the content repeatedly sits inside roughly 252.5px of outer margin before the main block begins. That wide framing is part of the look: the site wants to feel roomy, like it is displaying a few large artifacts rather than filling every inch with content.

Each chapter uses a different but related composition. The hero centers a headline, a short body, a pill-shaped email/action cluster, and a large browser screenshot. The use-case section puts a serif line above a capsule of three rounded pills, then drops into a large browser scene. The product explanation sections use split layouts: stacked cards on one side, a large visual panel on the other. The footer ends with a white rounded panel that repeats the card language at a broader scale.

Spacing is generous but not loose. The footer panel uses 40px of top padding and 128px of lower padding. Card groups keep visible vertical separation, while the pill row stays tight enough to feel like one control family. The page depends on those contrasts: large outer space, compact inner groupings, and recurring rounded containers.

The large browser mockups are central to the layout language. They do not float randomly; they sit in balanced rectangles with strong corner radius, soft border treatment, and enough margin to feel displayed rather than embedded. That treatment is what keeps the site from collapsing into a generic product gallery.

## Visual language

BrowserOS mixes three visual registers: editorial type, product UI, and scenic proof imagery. The serif headings bring a magazine rhythm. The browser screenshots bring the product reality. The mountain and sky backdrops behind those screenshots soften the technical subject and keep the interface from feeling sterile. Even the footer uses a quiet decorative grid of pale blush squares so the end of the page still feels authored.

The most distinctive choice is the emphasis pattern inside the headings. A single word or phrase turns orange and italic, while the rest of the line stays dark brown and roman. That contrast is modest but highly legible. It gives each chapter a small point of motion without introducing a new color system or a heavy motion language.

The page is also intentionally rounded. Pills, cards, and browser frames all use the same family of corner radii, so the visual system reads as one set of objects with different sizes, not as a pile of unrelated boxes. Borders stay hairline-thin and pale. Shadows, when present, are soft and restrained. Most separation comes from white space, not from hard elevation.

This is a friendly, human browser brand. It says “open source” and “agentic” through typography and composition rather than through neon, chrome, or technical diagrams.

## Components

### Header

The header uses a compact orange mark and wordmark at the left, centered navigation links, and a dark rounded action at the right. It is calm and almost secondary, which lets the main hero and chapter titles carry the page. The links use Geist at the same scale as the body text, so the top bar feels related to the rest of the site rather than like a separate app shell.

The right-side action is a deep brown pill with white text. That choice is important: it keeps the strongest interaction color aligned with the serif heading tone instead of introducing a separate corporate blue or black. The pill shape is broad and friendly, closer to a chip than to a standard button.

### Hero chapter

The hero is a centered composition with a large Junicode headline, a short explanatory paragraph, and a pill-shaped email/button cluster. The input is white and the main action sits inside a darker rounded segment, creating a nested control that feels dense but not heavy. The hero can also sit above a browser screenshot, which turns the page into a proof-led landing layout rather than a text-first statement.

The hero type should remain light in weight. The emphasis comes from scale, line breaks, and the orange italic word, not from boldness. That keeps the page elegant even when the message is direct.

### Use-case pills

The “Browse / Extract / Research” row is one of the clearest component patterns. It sits inside a larger rounded capsule and uses three smaller pills inside it. The active pill uses the soft peach fill and orange text, while the inactive pills stay white with pale borders and dark icons. This is a compact control family with a clear active state, but it still reads like part of the homepage narrative rather than a tool switcher.

The pills should keep their 100px radius and low-contrast border. Their job is to group modes, not to look like segmented navigation chrome.

### Feature cards and explanation blocks

The stacked cards use white surfaces, pale borders, and 24px corners. Each card begins with a small orange label and icon, then a 24px Geist heading, then muted body copy. Their visual weight is light, but the spacing around them makes them feel substantial. They work best when stacked with clear vertical gaps and aligned with a much larger image or screenshot on the opposite side.

The cards should not gain heavy shadows or extra framing. The border and corner radius are enough. Their role is to explain, not to compete with the browser mockup.

### Browser showcase frames

The browser images are the largest artifacts on the page. They sit inside a rounded frame with a scenic backdrop or within a broad white field, depending on the section. The frame should stay large, softly rounded, and centered enough that the content feels like a showcase.

### Footer panel

The footer is a white rounded card with the wordmark and a short paragraph on the left and link columns on the right. The lower-right corner often carries a faint blush grid motif that softens the end of the page. The footer uses the same 24px corner language as the feature cards, which keeps it visually related to the rest of the system. Supporting text should stay muted, and the bottom copyright line should remain quiet and small.

## Responsive behavior

On narrower screens, the page should keep its order: headline, short copy, action cluster, hero image, feature chips, card stack, and footer. The compositions in the supplied material are desktop-first, so the layout should collapse by stacking rather than by shrinking every component at once. The browser screenshot should move below the text before it becomes too small to read. The stacked cards should become a single column with the same 24px corner treatment. The pill row should wrap cleanly or convert into a vertical stack while keeping the active state obvious.

The typography should also rebalance rather than merely scale down. The Junicode headline can break into shorter lines on small widths, but it should still read as a chapter title, not as a compact logo. Geist copy can hold its 16px body size for as long as line length allows, then step down only when space becomes tight. The footer should keep its column logic as long as possible, then fall back to a readable stacked list.

The rounded browser frames and 100px pills are important on small screens because they protect the site from turning into a sharp, dense app grid. The system should remain airy even when the columns collapse.

## Practical implementation guidance

### Preserve

- Keep Junicode as the chapter voice and Geist as the utility voice.
- Keep orange as the only saturated UI accent.
- Keep pale canvas, white panels, and hairline borders as the base structure.
- Keep the large rounded browser frame as the main proof object.
- Keep the editorial line breaks in the serif headings; they are part of the identity.

### Avoid

- Avoid introducing a second accent color.
- Avoid making the page feel like an admin dashboard or a dark developer shell.
- Avoid heavy shadows, thick borders, or sharp corners on cards and pills.
- Avoid bold sans headings that flatten the tone.
- Avoid shrinking the browser screenshots into decorative thumbnails.

### Recommended build order

1. Set the canvas, panel, border, and action colors.
2. Build the Junicode headline system and the Geist body scale.
3. Recreate the header and the hero action cluster.
4. Build the pill capsule for the use-case selector.
5. Add the feature cards and the browser showcase frames.
6. Finish with the footer card and its quiet link columns.
7. Check the stack on narrower widths and preserve the order of the story.

### Accessibility

- Keep the orange accent from being the only cue for interactive state; pair it with shape and fill.
- Maintain strong contrast for the dark brown button text against the button fill.
- Keep body copy at readable sizes and avoid overly long line lengths.
- Preserve visible focus styles on pills, links, and buttons.
- Give the browser screenshots descriptive alt text that explains the visible browser state, not just the page name.

## Scope note

This guide covers the supplied desktop homepage surfaces: the hero, the use-case pill row, the feature-card sections, the browser showcase frames, and the footer panel. It does not define mobile breakpoints, motion, hover or focus treatments, loading states, error states, or alternate theme variants that are not shown in the supplied pages.
