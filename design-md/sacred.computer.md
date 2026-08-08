# How sacred.computer is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/sacred.computer-design)

Last updated: 2026-08-08

## Captured pages

[![Tall messages frame with left roster and bright orange reply bars](https://pin.fontofweb.com/4255?format=jpg)](https://design.withfudge.com/share/pin-4255)

[Tall messages frame with left roster and bright orange reply bars](https://design.withfudge.com/share/pin-4255)

[![Tighter transcript window with compact menu strip and bottom input row](https://pin.fontofweb.com/4254?format=jpg)](https://design.withfudge.com/share/pin-4254)

[Tighter transcript window with compact menu strip and bottom input row](https://design.withfudge.com/share/pin-4254)

[![Lower page with modal example, alert bar, and command list](https://pin.fontofweb.com/4253?format=jpg)](https://design.withfudge.com/share/pin-4253)

[Lower page with modal example, alert bar, and command list](https://design.withfudge.com/share/pin-4253)

## Overview

sacred.computer presents a strict terminal language built from a black grid field, pale framing lines, compact mono text, and one hot orange accent. The page feels assembled from software windows rather than marketing modules. Every major area is boxed, labeled, and separated by hard geometry, so the structure does most of the visual work.

The system is dense but controlled. Large blocks of mono text carry the main content, while orange areas interrupt the page with strong emphasis and a slightly theatrical tone. Gray surfaces handle quieter labels, previews, and supporting lines. The design reads as technical, retro, and deliberate, with the visual rhythm of a command-line interface translated into a modern web page.

The strongest quality is discipline. One dark base, one bright accent, one family of white lines, and a small set of gray supports keep the whole page coherent. That restraint gives the site its voice.

## Colors

The color palette is compact and purpose-built. Black is the stage, not just the background. White and near-white carry both text and framing, so borders and labels feel equally important. Gray does the calmer work in menu bars, inactive rows, and secondary message blocks. Orange is the only loud note, and it should stay reserved for the most important replies, attention blocks, and action-like rows.

The system lives in a dark mode. There is no separate light palette in this view, and any future light companion should keep the same hard-edged geometry so the page still feels like the same interface. There is also no separate photographic palette; content blocks and examples should stay inside the same dark shell. The orange accent should not spread into extra warm tones, because its strength depends on scarcity.

| token | value | role | use |
|---|---|---|---|
| `canvas` | `#000000` | page canvas | Full-page field behind the grid and all framed sections |
| `ink` | `#F2F2F2` | primary text | Main copy, labels, and bright text on dark surfaces |
| `muted-ink` | `#B8B8B8` | secondary text | Faded names, quiet metadata, and softened supporting lines |
| `panel` | `#2A2A2A` | control surface | Menu bars, input strips, and darker interface rails |
| `panel-strong` | `#444444` | raised surface | Alert bars, secondary bubbles, and dense content blocks |
| `border` | `#F0F0F0` | framing line | Window outlines, section frames, and separators |
| `grid` | `#1C1C1C` | structural grid | Thin background lattice across the whole page |
| `action` | `#FF7A00` | primary accent | Strong replies, calls to action, and high-priority highlights |

The table should stay this small. These roles are enough to build the page without breaking the terminal tone. White must remain bright enough to read as a frame, gray must stay calm enough to recede, and orange must remain the only intense color that consistently pulls the eye.

## Typography

Departure Mono carries the page voice. Geist Mono supports the smaller chrome: bar labels, utility rows, command-like options, and compact interface text. The two families are close in spirit, so the hierarchy comes from size, spacing, and placement rather than from dramatic style shifts. The interface depends on letterforms, punctuation, and spacing instead of decorative glyph systems.

The mono rhythm should stay crisp and even. Headings are short and usually feel functional rather than literary. Body text can stretch longer, but it should still read like typed system copy rather than editorial prose. The page works best when the typography stays compact and measured, because the surrounding grid already gives the composition plenty of structure. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---:|
| `hero-display` | Departure Mono | 1.5rem | 400 | 1.1 | 0.04em | Large section headings and prominent page labels |
| `section-display` | Departure Mono | 1.25rem | 400 | 1.15 | 0.04em | Smaller section titles and boxed module names |
| `window-title` | Geist Mono | 1rem | 400 | 1.2 | 0.02em | Frame bars, tabs, and centered window labels |
| `body` | Departure Mono | 1rem | 400 | 1.35 | 0.01em | Main explanatory copy and transcript text |
| `body-small` | Departure Mono | 0.75rem | 400 | 1.35 | 0.01em | Supporting notes, roster text, and softer details |
| `ui-label` | Geist Mono | 0.75rem | 400 | 1.2 | 0.03em | Menu items, short labels, and compact chrome |
| `menu-item` | Geist Mono | 1rem | 400 | 1.15 | 0.02em | Command lists and button-like text rows |
| `command-line` | Departure Mono | 1rem | 400 | 1.2 | 0.01em | Console prompts and one-line input areas |

The face pairing matters because it creates a subtle split between narrative content and interface chrome. Departure Mono feels slightly fuller and better suited to longer text blocks. Geist Mono feels a little sharper and better suited to labels or controls. Keep both families in the same tight spacing system so the page still feels unified.

## Layout

The page is built from stacked modules on a black grid canvas. That grid provides a constant field of alignment, so every section feels anchored to the same underlying structure. White rectangular frames do most of the organizing work, and the frames are important enough that they should stay crisp, straight, and visually separate from the content they contain.

The primary rhythm is section, frame, content, gap, repeat. That creates a measured editorial cadence that feels more like a system manual than a landing page. Titles sit above each block, then the content lives inside a hard-edged container, then the next block starts after a clear break. The result is a page that reads like a set of panels laid on top of graph paper.

Inside the conversation area, the layout divides into a narrow roster column and a wider transcript field. The roster is compact and vertical, with small names and faded previews. The transcript area is broader and alternates gray and orange bubbles to separate voices. A bottom input row anchors the whole window and gives it a stable terminal feel. Elsewhere, the alert banner spans the content width as a blunt horizontal signal, while the command matrix compresses many options into a tightly packed grid inside a box.

Spacing stays disciplined throughout. Interior padding is moderate, borders remain sharp, and the gaps between modules are large enough to prevent the dense content from collapsing into noise. That balance gives the page enough air to stay readable while still feeling technical and concentrated.

## Visual language

The visual language sits between a retro terminal, a developer console, and system documentation. It is intentionally low-friction: flat fills, thin outlines, no soft shadows, and no rounded chrome. The grid background behaves like graph paper beneath tracing film, so every boxed area feels aligned and deliberate.

Orange is the signal color. It marks the lines that matter most and gives the page its strongest voice. Gray is the quieter companion color, used for secondary conversation, muted bars, and controls that should not steal attention. White outlines define the regions, and those outlines must stay sharp even at small sizes because the frames are part of the identity, not just decoration.

The system also relies on tone shifts more than on shape variety. A section can feel active simply because an orange block interrupts a gray sequence. A heading can feel authoritative just by sitting inside a white frame on a black field. That makes the page feel exact and slightly theatrical at the same time. It is not playful in a cartoon way; it is playful in a systems way, where precision becomes the expressive detail.

## Components

### Framed stage

- **Anatomy:** A hard-edged rectangle, a pale outline, and a centered or top-aligned label.
- **Surface:** Black field with a white border and minimal fill contrast.
- **Typography:** Small mono label in the frame bar; text content below or inside the box.
- **Shape:** Square corners with no visible rounding.
- **Spacing:** Keep the border separate from the content with moderate inner padding.
- **Composition:** The frame is the main organizer, so it should read before the content does.

### Messages interface

- **Anatomy:** Left roster, top menu strip, main transcript field, and bottom input row.
- **Surface:** Dark panels with white labels and alternating orange and gray message blocks.
- **Typography:** Compact mono text throughout, with slightly larger labels for names and section bars.
- **Shape:** Rectangular bars and bubbles with sharp corners.
- **Spacing:** The roster column stays narrow; the transcript column takes the remaining width; the input row sits at the bottom edge.
- **Composition:** Alternate the bubble colors to separate voices. Keep orange replies broader and more assertive than gray responses.
- **Visible states:** Incoming lines sit in gray; outgoing lines sit in orange; quiet system text stays soft and small.

### Message bubbles

- **Anatomy:** A filled block with a small angled pointer, usually attached to one side of the transcript.
- **Surface:** Orange for primary speech, gray for supporting speech.
- **Typography:** Inset mono text with compact line breaks.
- **Shape:** Rectangular body with an angular tail; avoid pill shapes or soft curves.
- **Spacing:** Use enough internal padding so the text feels boxed without looking cramped.
- **Composition:** Place orange bubbles as the dominant rhythm and gray bubbles as the pauses between them.
- **Visible states:** Orange bubbles carry the strongest attention; gray bubbles read as replies, prompts, or secondary remarks.

### Modal

- **Anatomy:** A framed dialog box, a dark interior, a short title line, body copy, and a stack of example action rows.
- **Surface:** Dark panel inside a pale outline, matching the page’s terminal shell rather than breaking away from it.
- **Typography:** Mono body text with compact labels for the actions and examples.
- **Shape:** Rectangular box with hard edges and no decorative rounding.
- **Spacing:** Keep the interior padding comfortable so the text and actions breathe, but let the rows stay close enough to feel like one decision area.
- **Composition:** Center the dialog as a decision layer above the page logic. The action rows should read as a tidy list, not as a decorative card deck.
- **Visible states:** One action can feel stronger through brighter fill or clearer contrast, while the secondary rows should stay flatter and quieter.

### Alert banner

- **Anatomy:** A long, full-width bar with one concise message.
- **Surface:** Dark gray fill against the black grid, sometimes framed by extra white space.
- **Typography:** Mono body text, usually one line or a short paragraph.
- **Shape:** Hard-edged rectangle.
- **Spacing:** The banner needs strong horizontal breathing room and a clear break before and after it.
- **Composition:** Keep the message centered or left-aligned depending on the surrounding section, but never let it overpower the section label.
- **Visible states:** Static and declarative; it reads like a system notice rather than a decorative callout.

### Command matrix

- **Anatomy:** A boxed list of commands arranged in tight rows and columns.
- **Surface:** Dark fill with white mono text and slim spacing between options.
- **Typography:** Geist Mono or a similarly compact mono style for the rows.
- **Shape:** Button-like rectangles with little or no rounding.
- **Spacing:** Keep rows close together so the unit feels like a keyboard-driven utility surface.
- **Composition:** Group related actions together so the matrix reads as a tool area, not as marketing navigation.
- **Visible states:** The list should feel ready for selection even when static; one brighter strip or clearer row can suggest the current choice.

## Responsive behavior

On narrow screens, preserve the same order of meaning: title, frame, main content, secondary content, and then controls. The roster column in the messages window should collapse before the transcript becomes too narrow to read. Large section titles should wrap only when needed, and they should keep the same mono rhythm instead of changing voice.

The grid background can become less dense on small devices, but it should never disappear completely. White frames must remain the structural anchors, and orange should continue to mark the strongest actions. If the command matrix becomes too wide, stack it into fewer columns rather than squeezing the text. If the alert banner shortens, keep the bar shape and let the message wrap cleanly.

Because the design is built from rectangles and text, responsive work should favor reflow over redesign. The page should still feel like the same terminal system after it narrows; it should simply become more vertical and less expansive. The modal should follow the same rule and remain a framed decision layer even when it stacks beneath the main content.

## Practical implementation guidance

### Preserve

- Keep the black grid visible as the constant page field.
- Keep white frames crisp and square so the sections read as technical modules.
- Keep orange reserved for the most important replies, actions, and highlights.
- Keep gray surfaces for secondary content, inactive rows, and supporting system text.
- Keep the mono rhythm consistent across headings, menus, and body copy.
- Keep the modal shell aligned to the same framing language as the rest of the page.

### Avoid

- Avoid soft shadows, glowing edges, and glass-like effects.
- Avoid rounded cards that would weaken the terminal feel.
- Avoid extra accent colors that dilute the orange signal.
- Avoid mixing in non-mono display faces.
- Avoid busy gradients that fight the grid.
- Avoid giving every button or row a different visual style; the system should feel unified.
- Avoid making the modal look like a separate app; it should feel like another window in the same world.

### Recommended build order

1. Build the black canvas and the background grid.
2. Add the white framing language and the section-label bars.
3. Recreate the messages window with its roster, transcript, and input row.
4. Add the modal, alert banner, and command matrix as secondary systems.
5. Tune spacing so the page stays dense but readable.
6. Test the narrow layout so the framed structure still holds together.

### Accessibility

- Keep orange-on-black contrast strong enough to read at a glance.
- Do not rely on color alone for voice separation; use position, block size, and bubble tone as well.
- Preserve visible focus outlines that fit the same square geometry as the rest of the interface.
- Make sure compact mono text does not shrink below readable sizes on smaller screens.
- Keep long system lines wrapped cleanly so they never clip against frame edges.
- Make the modal actions clear in order and spacing so keyboard users can follow the decision flow.

## Scope note

This guide covers the homepage’s stacked terminal-style sections, including the messages interface, modal, alert banner, and command matrix. It does not specify motion, alternate page templates, or exact small-screen breakpoints. Measurements are practical adaptation targets. Verify licensing for these families before production use.
