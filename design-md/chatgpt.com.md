# How chatgpt.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/chatgpt.com-design)

Last updated: 2026-08-04

## Captured pages

[![Black workspace with tiny left rail and centered work toggle](https://pin.fontofweb.com/10217?format=jpg)](https://design.withfudge.com/share/pin-10217)

[Black workspace with tiny left rail and centered work toggle](https://design.withfudge.com/share/pin-10217)

[![White instruction sheet floating inside a dark workspace](https://pin.fontofweb.com/10192?format=jpg)](https://design.withfudge.com/share/pin-10192)

[White instruction sheet floating inside a dark workspace](https://design.withfudge.com/share/pin-10192)

[![Signed-out home view with centered prompt and login drawer](https://pin.fontofweb.com/10040?format=jpg)](https://design.withfudge.com/share/pin-10040)

[Signed-out home view with centered prompt and login drawer](https://design.withfudge.com/share/pin-10040)

[![Dense project table with a right-side activity rail](https://pin.fontofweb.com/9539?format=jpg)](https://design.withfudge.com/share/pin-9539)

[Dense project table with a right-side activity rail](https://design.withfudge.com/share/pin-9539)

[![Project index with compact composer and stacked chat rows](https://pin.fontofweb.com/9538?format=jpg)](https://design.withfudge.com/share/pin-9538)

[Project index with compact composer and stacked chat rows](https://design.withfudge.com/share/pin-9538)

## Overview

ChatGPT’s interface is a dark, low-noise work surface. The default view is almost empty: a black field, a thin left rail, a centered compose bar, and a small set of rounded controls that sit quietly until they matter. The layout feels like a command center more than a marketing page. Content is arranged so the user’s task, not the chrome, stays in focus.

The system keeps the app shell monochrome, then opens small pockets of contrast for utility moments. Dark gray cards carry onboarding and project choices. White sheets appear for instructions, code, and document-style content. A separate right-hand panel introduces a denser information layer without changing the rest of the page. The result is a consistent geometry with a narrow range of values: black, charcoal, white, and a few restrained accent colors.

What to preserve:

- A black outer canvas with charcoal interior surfaces.
- A narrow icon rail and a centered content column.
- Rounded pills for interactive controls.
- Large empty negative space around the main task.
- Light utility sheets that feel detached from the dark shell.
- Sparse accent colors used only for tiny status moments.

## Colors

The color system is mostly grayscale, and that is the point. Black anchors the shell, charcoal builds the cards and rails, and white carries primary text and important action controls. Light gray appears only when the interface needs to switch into a document, modal, or code-reading mode. Accent colors stay small and local so the UI never becomes multicolored noise.

| token | value | use |
|---|---|---|
| `canvas` | `#000000` | Full-page shell and the empty stage behind every panel |
| `rail` | `#181818` | Left navigation strip and other narrow structural bands |
| `surface` | `#212121` | Main composer and dark control surfaces |
| `surface-quiet` | `#2F2F2F` | Secondary dark cards and muted panels |
| `surface-elevated` | `#303030` | Tall drawers, side panels, and stacked utility cards |
| `surface-light` | `#FCFCFC` | White instruction sheets and document-style content |
| `surface-light-muted` | `#F3F3F3` | Light code or note surfaces that need softer separation |
| `border` | `#414141` | Dark dividers, shell edges, and low-contrast separators |
| `border-light` | `#E3E3E3` | Rules and outlines on light sheets |
| `ink` | `#FFFFFF` | Primary text, labels, icons, and strong action fill on dark surfaces |
| `ink-muted` | `#AFAFAF` | Secondary labels, timestamps, and lighter helper text |
| `ink-soft` | `#CDCDCD` | De-emphasized body copy and quiet metadata |
| `ink-on-light` | `#181818` | Text and icons on white or pale sheets |
| `action` | `#FFFFFF` | Primary send buttons and strong CTA fills in dark contexts |
| `accent-blue` | `#66B5FF` | Small active markers and subtle interactive emphasis |
| `accent-blue-deep` | `#1F4E94` | Deeper blue accents in dense work states |
| `accent-violet` | `#643CAE` | Purple brand moments, chips, and small highlights |
| `accent-lilac` | `#BE95FA` | Softer violet tint for secondary emphasis |
| `accent-green` | `#66D492` | Positive markers and light success accents |

The relationship between modes is simple: dark surfaces do the heavy lifting, light surfaces interrupt the darkness only when the content needs paper-like clarity, and accents stay tiny. White is both the main text color and the strongest action color, so filled controls read as deliberate rather than decorative. Blue, violet, and green should remain local, never spread across whole sections. The supplied views do not show a photographic mode; if photos appear, they should sit as isolated content inside the dark shell and stay subordinate to the monochrome structure.

## Typography

The interface uses Applesystembody for most UI text, Applesystem for compact utility labels, Open Ai Sans for larger display moments, System-Uimonospace for code, and System / System-Uisansserif as fallback utility faces. Open Ai Sans is credited to Dinamo Typefaces Gmb H. The other families have no listed attribution.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `marketing-display` | Open Ai Sans | 4rem | 500 | 1 | -0.03em | Large plan or marketing headline when the app steps out of the shell |
| `marketing-title` | Open Ai Sans | 1.875rem | 500 | 1.32 | -0.01em | Dense page or modal title |
| `section-title` | Applesystembody | 1.5rem | 600 | 1.5 | 0em | Workspace headings, list titles, and short lead statements |
| `body` | Applesystembody | 1rem | 400 | 1.5 | 0em | Prompt text, chat rows, and general explanatory copy |
| `body-strong` | Applesystembody | 1rem | 600 | 1.625 | 0em | Opening clauses, selected labels, and short emphasis spans |
| `label` | Applesystembody | 0.875rem | 400 | 1.43 | 0em | Tabs, chips, buttons, and compact navigation text |
| `utility-meta` | Applesystem | 0.875rem | 400 | 1.43 | 0em | Small helper labels and metadata in utility views |
| `fine-print` | Applesystembody | 0.75rem | 400 | 1.33 | 0em | Legal copy, footnotes, and quiet footer text |
| `code-inline` | System-Uimonospace | 0.875rem | 400 | 1.43 | 0em | Inline code, snippets, and command-like text |

The hierarchy is restrained. The main app relies on 1rem body text, 0.875rem labels, and 0.75rem fine print, with weight doing more work than scale. Larger 1.5rem or 1.875rem moments should stay rare and reserved for page titles, not for every heading. The code family must remain visibly separate from the text faces so snippets read as tools, not prose.

## Layout

The default structure is a left rail plus a centered content field. The rail is narrow, icon-led, and visually quiet. The center column holds the real task and keeps generous horizontal breathing room; the screen often feels wider than the content needs, which makes the content easier to read. This is deliberate. The empty black space is part of the composition.

The main content uses a small set of repeated patterns:

- A centered prompt bar with rounded ends and a dark fill.
- A row of suggestion chips or task cards beneath the prompt.
- A stacked list or table for projects, chats, or work items.
- A side panel on the right when the interface needs a denser secondary channel.
- Light utility sheets that float above the dark shell with clear separation.

Spacing is conservative. The most common gaps are 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem, 2.5rem, 3rem, and 4rem, with larger values used only for broad page breathing room. Many surfaces use a 1.75rem outer radius, while smaller buttons settle at 0.5rem to 0.75rem and special document shells use the asymmetric 1.375rem/0.5rem curve seen in the white sheet. That mix keeps the system soft without turning every box into a bubble.

Dark pages usually keep their content aligned to a central axis, while the project and activity screens let the layout become denser. Rows align cleanly, separators stay thin, and the rightmost metadata often forms a calm vertical edge. When a drawer appears, it should feel like an appended sheet, not a new route family.

## Visual language

ChatGPT’s visual language is built from restraint. The black background gives every panel room to breathe. Dark cards are flat or nearly flat, with faint borders and shallow tonal changes doing most of the separation. White surfaces are used with stronger confidence: they read as sheets, editors, or instruction cards, not as ordinary page chrome. That contrast is what makes the interface feel flexible without becoming busy.

Shape is a major signal. Long rounded pills carry the composer, send control, and many chip-like actions. Mid-sized cards use 1.375rem to 1.75rem curves, which softens the geometry without making it playful. Small icon buttons and utility controls often use 0.5rem to 0.75rem corners. The one visibly asymmetrical card shape adds a clipped inner corner, which makes the sheet feel like a pinned note rather than a generic modal.

Color stays disciplined. White text on black is the baseline. Dark grays separate regions. Blue, violet, and green only punctuate tiny objects such as icons, markers, or small badges. Shadows are minimal; borders and surface tone carry the structure. This gives the page a calm, technical voice instead of a glossy product voice.

## Components

### Left rail

- **Anatomy:** A thin vertical strip of icon-only navigation, with the current location shown as a rounded highlighted row in list states.
- **Surface:** Almost always the darkest rail tone, with a 1px boundary against the main field.
- **Typography:** Mostly icon-led; when text appears, it is compact 0.875rem or 1rem utility text.
- **Shape:** Narrow, squared rail geometry with occasional rounded pills for active rows.
- **Spacing:** Tight vertical stacking, with small 0.5rem to 0.75rem separations.
- **Visible states:** The active item becomes a darker pill with a stronger edge and clearer contrast, while inactive rows stay quiet.

### Composer and prompt bar

- **Anatomy:** A long rounded input, a left add icon, a text placeholder, a model selector, a microphone icon, and a circular send control on the far right.
- **Surface:** Dark charcoal fill with a subtle edge; the send control is light and reads as the strongest action.
- **Typography:** 1rem body text for the placeholder and current query.
- **Shape:** Large pill geometry, generally around 1.75rem radius, with the send button becoming fully circular.
- **Spacing:** Medium internal padding, with icon spacing packed enough that the bar reads as one object.
- **Hierarchy:** The field itself is quiet; the send button and model selector carry the visible interactivity.

### Suggestion chips and task cards

- **Anatomy:** Short prompt chips on the home state, plus three-column utility cards for setup tasks.
- **Surface:** Slightly lighter than the shell, but still firmly dark.
- **Typography:** 0.875rem labels with a clear medium or regular weight.
- **Shape:** Soft rounded rectangles, usually 0.75rem to 1.375rem depending on size.
- **Composition:** Small icon or app glyph at the left, text below or beside it, and occasional count text at the top right.
- **Visible states:** The selected or emphasized chip feels slightly brighter and more enclosed; the rest stay flat and calm.

### Utility sheet and document surface

- **Anatomy:** A large white card with a title, paragraph instructions, inline code, and a compact action cluster.
- **Surface:** White or very pale gray, with dark text and a light border.
- **Typography:** 1rem body copy, 0.875rem monospaced code, and 1.125rem to 1.875rem titles when needed.
- **Shape:** Rounded outer corners with the visibly clipped inner corner seen in the instruction sheet.
- **Spacing:** Wide margins around the card, then tighter paragraph rhythm inside it.
- **Composition:** The sheet should feel separate from the shell, like a pasted note or a document panel.

### Project list, table, and activity drawer

- **Anatomy:** A centered project header, a compact list of chats or work items, dense table rows, and a tall right activity pane.
- **Surface:** Usually black or very dark gray, with thin rules and few fills.
- **Typography:** 1rem body rows, 0.875rem helper text, and 0.75rem timestamps or table metadata.
- **Shape:** Rows are mostly square; rounded controls are reserved for buttons and pills.
- **Spacing:** Tight vertical rhythm, with separators and row padding doing the organizing.
- **Composition:** The table and activity pane create a three-zone reading pattern: navigation, work, and live activity.
- **Visible states:** The selected project row is darker and more enclosed than its neighbors.

## Responsive behavior

On narrower widths, the design should preserve the same order of importance: rail, task, composer, then secondary panels. The left rail can compress to icons only. The right activity drawer should collapse below the main column or move off-canvas rather than stealing the primary reading width. The composer should stay reachable without scrolling. White utility sheets should continue to feel separate, but their padding and title scale should reduce before the page loses its calm. None of the supplied images shows a small-phone state, so these are the safest adaptation rules.

## Practical implementation guidance

### Preserve

- Keep the shell black and the inner surfaces charcoal.
- Keep the left rail narrow and visually secondary.
- Use rounded pills for the composer, chips, and send controls.
- Let the white sheets feel like a different mode, not just a lighter card.
- Keep accent colors tiny and local.
- Reserve Open Ai Sans for larger plan or marketing moments; keep `Applesystembody` on the app shell.

### Avoid

- Avoid bright multi-color chrome across whole panels.
- Avoid large shadows as a main separator.
- Avoid replacing the centered workspace with a dense dashboard grid.
- Avoid mixing code, chat, and navigation typography without clear role boundaries.
- Avoid turning every block into a pill; the shell needs contrast between soft and firm shapes.

### Recommended build order

1. Build the black shell, left rail, and centered compose bar.
2. Add chips, prompt suggestions, and the project list state.
3. Add the white utility sheet and the code surface.
4. Add the dense table view and the right activity drawer.
5. Tune radii, borders, and spacing so the page feels consistent across all states.

### Accessibility

- Keep white text on black surfaces at strong contrast.
- Keep dark text on light sheets equally clear.
- Make icon-only controls large enough to read as buttons, not ornaments.
- Preserve visible focus treatment on pills, cards, and the send control.
- Keep code blocks and table rows readable with enough vertical rhythm for scanning.
- Make status colors secondary to text, never the only carrier of meaning.

## Scope note

This guide covers the dark app shell, workspace list, prompt composer, utility sheets, project tables, and the right activity panel shown in the supplied images. It does not define small-screen breakpoints, motion, hover, loading, or error states. Measurements are rounded to a 0.125rem step.
