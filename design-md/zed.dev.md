# How zed.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/zed.dev-design)

Last updated: 2026-08-08

## Captured pages

[![Dark early-access hero with serif headline and form card](https://pin.fontofweb.com/10733?format=jpg)](https://design.withfudge.com/share/pin-10733)

[Dark early-access hero with serif headline and form card](https://design.withfudge.com/share/pin-10733)

[![Light release page with version switch and download rows](https://pin.fontofweb.com/9154?format=jpg)](https://design.withfudge.com/share/pin-9154)

[Light release page with version switch and download rows](https://design.withfudge.com/share/pin-9154)

[![White homepage with centered letter card and story row](https://pin.fontofweb.com/9153?format=jpg)](https://design.withfudge.com/share/pin-9153)

[White homepage with centered letter card and story row](https://design.withfudge.com/share/pin-9153)

[![Open-source stats block with avatar rails and large counts](https://pin.fontofweb.com/9152?format=jpg)](https://design.withfudge.com/share/pin-9152)

[Open-source stats block with avatar rails and large counts](https://design.withfudge.com/share/pin-9152)

[![AI section with feature column and code preview](https://pin.fontofweb.com/9151?format=jpg)](https://design.withfudge.com/share/pin-9151)

[AI section with feature column and code preview](https://design.withfudge.com/share/pin-9151)

## Overview

Zed.dev uses two related moods. The light pages feel like precise paper layouts: white surfaces, thin borders, small blue actions, and compact Writer copy. The dark early-access page turns the same brand into a denser editor stage, but the language stays restrained rather than theatrical. The system reads as software-native, not decorative.

The hierarchy depends on type and spacing more than ornament. PlexSerif carries the statement lines and can switch into an italic emphasis inside the same headline, which gives the dark hero a measured editorial rhythm. Writer handles paragraphs, form labels, and small explanatory lines. The system sans family appears in the top bar and utility text, so the chrome feels practical and slightly detached from the story copy.

Blue is the constant thread. It is the action color on buttons, links, and download controls, and it remains stable across white and dark pages. Green appears only as a small status accent. The layout is disciplined, narrow, and centered, so the page never loses its frame even when the viewport is wide.

## Colors

The palette splits cleanly between light paper surfaces and dark editor surfaces. Light pages rely on white, cool off-white, and a crisp blue action range. Dark pages use near-black surfaces with slightly lifted panels so the edges remain readable. The site is mostly interface and product storytelling rather than image-led presentation, so surface, text, and action colors do the visual work. Blue stays the main interaction hue in both modes, which keeps the brand stable when the page switches from a bright release sheet to a dark early-access stage.

| token | value | role |
|---|---|---|
| `canvas` | `#FFFFFF` | Main page surface and white cards |
| `canvas-soft` | `#E6EFFE` | Pale wash behind cards and light emphasis bands |
| `surface` | `#0D0F12` | Deep dark page background and heavy panels |
| `surface-raised` | `#111216` | Slightly lifted dark panel surface |
| `ink-strong` | `#000000` | Maximum-contrast text and marks |
| `ink` | `#393D45` | Body text on white pages |
| `muted-ink` | `#6F7B90` | Supporting copy, metadata, and secondary labels |
| `muted-ink-soft` | `#A8ADB7` | Quiet helper text and low-priority notes |
| `border` | `#CBCFD4` | Thin borders on light cards and fields |
| `border-soft` | `#E1E3E7` | Very light separators and card edges |
| `dark-border` | `#16191D` | Dark panel edges and field outlines |
| `action` | `#074DCF` | Primary buttons, links, and download controls |
| `action-strong` | `#053794` | Pressed edge and deeper button depth |
| `action-bright` | `#3D7DF5` | Brighter link state and lift on blue controls |
| `note` | `#1C398E` | Secondary blue used in quiet supporting accents |
| `success` | `#00C950` | Small active markers and state dots |

The light mode should stay airy and almost paper-like, with blue used sparingly but decisively. The dark mode should stay close to black, not mid-gray, so the hero feels like an editor stage rather than a generic dark section. The blue action range can move from deep to bright, but it should not drift into a second brand color. Green should remain small and functional.

## Typography

PlexSerif gives the site its statement voice. The large serif lines feel editorial, but the weight stays light enough to avoid drama. The hero uses both upright and italic PlexSerif within the same headline, which gives the phrase a subtle cadence and matches the more literary tone of the dark stage. Writer handles the explanatory copy, labels, and small page text. The system sans family appears in navigation and utility text, which keeps the chrome quiet and practical. Ui-monospace and ZedMono mark commands, shortcuts, and small technical fragments. Font licensing details are not supplied here.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `navigation` | -apple-system | 0.6875rem | 600 | 1 | 0.08em | Top bar links, account text, and small chrome labels |
| `utility` | -apple-system | 0.875rem | 400 | 1.3 | 0em | Header utilities and compact status text |
| `hero-display` | PlexSerif | 2rem | 320 | 1.2 | 0em | Main dark hero statement |
| `hero-display-italic` | PlexSerif | 2rem | 320 | 1.2 | 0em | Italic phrase inside the dark hero headline |
| `section-display` | PlexSerif | 1.6rem | 320 | 1.2 | 0em | White-page section headings and the letter title |
| `body` | Writer | 0.875rem | 400 | 1.43 | -0.025em | Paragraph copy and explanatory text |
| `body-small` | Writer | 0.8125rem | 400 | 1.5 | 0em | Supporting notes, helper text, and captions |
| `label` | Writer | 0.75rem | 600 | 1 | 0.08em | Short labels, field names, and section tags |
| `mono` | Ui-monospace | 0.6875rem | 400 | 1.45 | -0.03125em | Commands, install text, and technical chips |
| `keycap` | ZedMono | 0.6875rem | 400 | 1.5 | 0.05em | Keyboard badges and shortcut hints |
| `legal` | Writer | 0.75rem | 400 | 1.5 | 0em | Footer metadata and small policy text |

The hierarchy is compact rather than oversized. Headlines are strong enough to lead, but the page avoids billboard scale. Body copy stays close to the headline, which keeps the page efficient and technical. The mono styles should appear only where the interface actually needs them: install text, command lines, and shortcut chips. That restraint keeps the design from slipping into a novelty terminal skin.

## Layout

The desktop composition is centered and framed. Large side margins create a sense of a contained workspace, while the content itself stays inside a narrow reading column. White pages stack their content vertically: top bar, hero or product block, feature rows, and a closing band. The dark early-access page uses a split hero, but the same discipline remains in place. Even when the layout expands, it feels like one controlled column rather than a full-bleed marketing poster.

Spacing does most of the organizing. Outer sections need generous vertical room, while internal cards and row groups stay compact. The site uses several recurring distances: tight internal gaps for labels and controls, medium spacing for stacked copy, larger spacing between page chapters, and very large outer margins on the widest desktop views. That mix gives the page a calm rhythm. It also keeps the download page, the homepage story blocks, and the early-access form from competing with one another.

The dark early-access page is especially clear in structure. The top half combines a small kicker, a serif headline, a short paragraph, and a form card. The lower half becomes a two-column feature grid, then closes with a centered callout and action pair. The white pages follow a different but related pattern: a centered hero or product summary, a supporting panel, and then a structured lower area with cards, statistics, or teasers. The footer band is saturated blue and turns the ending into a hard visual finish rather than a faint afterthought.

## Visual language

The visual language sits between editorial publishing and software tooling. The editorial side comes from the serif headlines, the centered presentation blocks, and the calm, measured tone of the copy. The tooling side comes from the compact forms, platform rows, shortcut chips, command snippets, and small utility labels. The design never fully becomes one or the other; it keeps both in view so the product feels serious, readable, and technical.

Surface treatment is minimal. Light pages lean on fine borders, faint separators, and a pale blue wash rather than heavy shadows. Dark pages use small value shifts and inset edges to create depth without glow. Where the interface wants emphasis, it uses the action blue, not ornament. Buttons are mostly flat rectangles with modest rounding. Panels stay square or softly rounded, depending on their role, and the structure carries the weight instead of decoration.

The system also uses a clear emphasis rhythm. Big statements lead, short supporting copy follows, and a single primary action closes the block. Secondary details remain quieter and smaller. On the release page, platform rows stay calm and practical while the subscription card sits beside them as a supporting module. On the homepage, the blue footer band deliberately breaks the white body into a strong ending, while the sections above it remain airy and orderly.

## Components

### Top navigation

The top bar is slim, text-heavy, and deliberately quiet. The logo anchors the left side; the product links and utility items stay compact; the blue download action holds the far right. The system sans family gives the header a neutral, operational tone. Spacing should stay tight enough to feel technical, but not so tight that the bar starts to feel crowded.

### Dark early-access hero

The early-access hero is built from a small kicker, a large PlexSerif headline, a compact paragraph, and a blue action button. The headline is the visual center; the italic serif phrase inside it gives the block a slightly more lyrical cadence. The text column is narrow, which keeps the line lengths controlled and lets the serif forms breathe. The hero should stay confident but restrained.

### Early-access form card

The form card is a separate light panel sitting on the dark stage. It stacks email and GitHub fields, then ends with a compact blue submit control and a short reassurance line. The field labels are plain and functional. The panel should stay rectangular, calm, and clearly distinct from the background. It is an object on the stage, not a floating modal.

### Daily drive callout

The daily drive callout is a centered close-out module on the dark page. It uses a square logo tile, a PlexSerif title, a short subline, and two action buttons. The primary button is blue; the secondary button is quieter and outlined. The module works because it is symmetrical and self-contained. It should feel like the closing invitation after the main pitch has already done its work.

### Release and download module

The release page is a centered white layout with a version header, a stable/preview switch, platform rows, and a newsletter card. The platform rows are visibly different from one another: macOS and Windows read as polished download controls, while Linux shifts into a command-line snippet. The right-hand newsletter card stays adjacent, not dominant. That arrangement keeps the main task clear: get the build first, then subscribe if wanted.

### Letter card

The letter card is a bordered white panel with a small kicker, a serif heading, two blocks of body text, a light seal mark, and a compact author line. It feels like a formal note laid into the page rather than a plain article block. The border, the pale shadow, and the centered framing all matter. The card should stay quiet and readable, with the blue heading doing the work instead of extra decoration.

### Open-source stats block

The open-source stats block is a centered white section with a title, a short supporting sentence, two avatar rails, and a row of large counts. The hierarchy is simple: headline, context, social texture, then numbers. The counts are the primary visual anchor. The avatar rails add motion and community scale without adding clutter. The block should feel airy but still structured.

### AI section

The AI section uses a blue heading, a short supporting paragraph, a small action at the right, and a lower two-column arrangement. One side explains the feature family; the other side shows a dark code preview. The lower controls read like stacked subrows. The section works because it combines editorial copy with a direct product screenshot, keeping the system grounded in actual software use.

### Blog teaser row

The blog teaser row sits between the letter card and the lower content. It pairs a section heading with a short explanation and a small view button, then leads into article cards below. The row is understated and should not compete with the more formal modules. It works as a transition from the story-heavy middle of the page to the more tiled content below.

### Footer band

The footer band is a saturated blue block with smaller white text and multiple link columns. It feels like the system’s final block, not a recycled header. The blue ground should stay vivid, the columns should remain disciplined, and the text should become lighter without losing legibility. It gives the page a firm finish.

## Responsive behavior

When the layout narrows, the hierarchy should survive before the grid does. The hero should stack before the form card, the release rows should remain readable before they collapse into smaller controls, and the letter card should turn into a single vertical column before any text is squeezed. The open-source stats should reduce their surrounding whitespace first; the counts themselves should stay prominent.

The wide side margins should give way gradually, not abruptly. Reduce outer space before shrinking the serif headlines too far, because the serif voice is part of the brand. The blue action controls should keep their contrast and tap size. The small mono chips and keyboard hints can tighten slightly, but they should never become decorative noise. The dark stage should still read as a distinct chapter on narrow screens.

## Practical implementation guidance

### Preserve

- Keep PlexSerif for the statement lines and Writer for the operational copy.
- Preserve -apple-system in the top bar and small utility text.
- Keep the italic PlexSerif treatment inside the main dark hero headline.
- Preserve the blue action color as the only primary interaction hue.
- Keep borders thin and visible; the system depends on edge definition.
- Maintain the split between light paper-like sections and dark editor-like sections.
- Use compact controls with only modest rounding.

### Avoid

- Avoid replacing the serif headline system with a generic sans-serif hero.
- Avoid large shadow stacks, glossy gradients, or soft glass effects.
- Avoid turning every block into a rounded card.
- Avoid introducing a second bright accent that competes with blue.
- Avoid over-padding the forms and rows until they feel like a generic consumer landing page.

### Recommended build order

1. Establish the type hierarchy and the core blue action color.
2. Build the top navigation and the dark hero block.
3. Create the early-access form card and the daily drive callout.
4. Build the release module with platform rows and the newsletter card.
5. Add the letter card, open-source stats block, AI section, and blog teaser row.
6. Finish with the footer band and then tune spacing across the full page.
7. Tighten the narrow-layout stack after the desktop hierarchy is stable.

### Accessibility

- Keep text contrast strong on both the white and dark surfaces.
- Make sure the blue action remains readable against its own background and against white.
- Preserve visible focus styles on navigation, buttons, inputs, and small utility controls.
- Do not rely on the green signal alone to communicate state; pair it with placement or text.
- Keep code snippets and keyboard labels large enough to read without zooming.

## Scope note

This guide covers Zed.dev’s desktop marketing, early-access, release, and story pages, including the hero, form card, daily drive callout, release module, letter card, open-source stats block, AI section, blog teaser row, and footer band. Measurements are rounded to the 0.125rem step used across the system. Mobile rearrangements, motion, hover choreography, and alternate form states are not included here.
