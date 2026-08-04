# How deepwiki.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/deepwiki.com-design)

Last updated: 2026-08-04

## Captured pages

[![Centered repository picker with the soft search bar and add card](https://pin.fontofweb.com/8112?format=jpg)](https://design.withfudge.com/share/pin-8112)

[Centered repository picker with the soft search bar and add card](https://design.withfudge.com/share/pin-8112)

[![Wide wiki page with left nav, article column, and ask dock](https://pin.fontofweb.com/8113?format=jpg)](https://design.withfudge.com/share/pin-8113)

[Wide wiki page with left nav, article column, and ask dock](https://design.withfudge.com/share/pin-8113)

[![Tighter wiki frame showing the same three-column layout](https://pin.fontofweb.com/8114?format=jpg)](https://design.withfudge.com/share/pin-8114)

[Tighter wiki frame showing the same three-column layout](https://design.withfudge.com/share/pin-8114)

## Overview

DeepWiki is a light documentation interface that treats a repository as something to browse, question, and index without leaving a calm page shell. The supplied views lean on a quiet off-white canvas, white cards with fine borders, compact Geist type, and a single saturated blue action for the highest-priority button. The overall feeling is closer to a developer reference tool than a marketing site: low drama, high legibility, and a strong preference for structured reading over decorative framing.

The design has two clear faces. The home view centers a search prompt above a grid of repository cards, with one special gradient card for adding a new repo. The wiki view shifts into a tri-pane layout with left navigation, a central article, and a right utility rail. A bottom ask dock stays present on the wiki page, which keeps the interaction model anchored to the document instead of turning the page into a chat-only surface. That balance is the core of the system.

## Colors

DeepWiki’s palette is mostly monochrome, with one vivid blue and one cool teal accent to break the neutrality. The page surface is a soft off-white rather than pure white, which keeps the bordered cards and rails readable without hard contrast spikes. White still appears as the main card and control fill, so the system can stay clean and flat while preserving separation between shells, panels, and inline chips.

| token | hex | use |
|---|---|---|
| action | `#2B7FFF` | Primary share or submit action, the only strong blue fill |
| action-accent | `#388794` | Small brand accent and cool-toned decorative detail |
| ink | `#333333` | Main body copy, headings, and most navigation text |
| ink-strong | `#000000` | Deepest text tone and the strongest contrast edge |
| ink-soft | `#404040` | Secondary button text and quiet emphasis |
| ink-muted | `#666666` | Supporting labels, summaries, and helper text |
| ink-subtle | `#71717B` | Low-emphasis metadata and tertiary navigation |
| ink-faint | `#737373` | Quiet annotations and compact list detail |
| border-strong | `#C0C0C0` | Heavier divider lines and structural rules |
| border | `#D1D1D1` | Standard card and rail borders |
| border-soft | `#E0E0E0` | Light field outlines and pale separators |
| surface-1 | `#E5E5E5` | Muted table chips and filled utility surfaces |
| surface-2 | `#E8E8E8` | Pale fills for small tags and inactive rows |
| canvas-1 | `#F2F1F0` | Soft repo-grid and card-adjacent surface tint |
| canvas-2 | `#F5F5F5` | Gentle fill for neutral shells and utility panels |
| canvas | `#F6F6F6` | Main page background in the wiki layout |
| canvas-warm | `#F8F7F6` | Warmest page backdrop and off-white framing space |
| white | `#FFFFFF` | Cards, inputs, dock surfaces, and the main contrast base |
| code-ink | `#1E2939` | Monospace file chips and compact code-like labels |

The relationship between modes is simple: light canvas and white surfaces carry almost all of the interface; blue marks the main action; teal appears as a restrained accent; gray tones separate hierarchy without needing shadow. No dark or photographic mode is established in the supplied views, so the system should remain flat and document-like unless a new surface family is explicitly added. If a dark version is introduced later, it should keep the same border discipline and text hierarchy instead of swapping to a dramatic neon contrast.

## Typography

Geist defines the interface voice. It is used for the whole visible system: headings, navigation, body copy, cards, labels, and the ask dock. The hierarchy comes from size, weight, and line height rather than from switching families. A small monospaced system face appears only in code-like pills and file references, where it gives compact structural labels a more technical cadence. Geist is credited to Basementstudio.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 1.375rem | 700 | 1.36 | -0.025em | Page headings such as the wiki title and the home prompt |
| section-display | Geist | 1.25rem | 700 | 1.4 | -0.018em | Secondary section titles and article headings |
| subhead | Geist | 1.125rem | 500 | 1 | 0em | Compact prompts and panel headings |
| body | Geist | 1rem | 400 | 1.5 | 0em | Article paragraphs, card descriptions, and general prose |
| body-medium | Geist | 1rem | 600 | 1.5 | 0em | Primary actions and emphasized inline text |
| navigation | Geist | 0.875rem | 400 | 1.43 | 0em | Sidebar entries, top-bar labels, and utility text |
| navigation-strong | Geist | 0.875rem | 500 | 1.43 | 0em | Active navigation rows and stronger menu items |
| label | Geist | 0.75rem | 500 | 1.33 | 0em | Chips, helper labels, and small metadata tags |
| metadata | Geist | 0.8125rem | 400 | 1.54 | 0em | Subtitle lines, counts, and quiet supporting text |
| code-chip | System-Uimonospace | 0.6875rem | 600 | 1.36 | 0em | File pills, source tags, and code-like references |

The visible rhythm is compact but not cramped. Headings sit at 20–22px equivalents with light negative tracking on the stronger page titles. Body text stays around 16px with comfortable leading near 1.5, which keeps the article column easy to scan. Smaller labels drop to 12–14px without losing clarity because the page uses ample padding and strong tonal separation. The monospaced chip style should remain small and dense so it reads like a structural marker, not as a second body font.

## Layout

The home page is a centered discovery surface. A short prompt sits above a search field, and the repository grid follows in evenly spaced columns. The first card is not just another repository; it is a special add affordance with a soft bluish-lilac gradient and a plus mark. That card sets the tone for the rest of the grid: quiet, rounded, lightly bordered, and organized around quick selection rather than dense comparison.

The wiki page uses a much more explicit information architecture. A left rail provides the long navigation tree, starting with a status line and then a stacked outline of sections. The article itself sits in the middle with a readable column width, large heading, inline source chips, and list/table content. On the right, a narrow utility column keeps the refresh callout and the “On this page” index separate from the article flow. That three-part shell is the main structural idea of the system.

Spacing does most of the work. Horizontal gutters are generous enough that the middle article never collides with either rail. Vertical rhythm keeps headings, paragraphs, chips, and tables breathing at distinct intervals. The bottom ask dock is visually attached to the viewport edge rather than to the article, so it feels available without stealing the reading measure. The home grid and the wiki shell are different layouts, but they share the same values: centered ordering, quiet surfaces, and controlled density.

## Visual language

DeepWiki’s visual language is restrained, modular, and utility-first. The page relies on borders, spacing, and light tonal shifts instead of depth effects. Cards are flat. Dividers are thin. The background is just warm enough to keep white surfaces from feeling pasted on. The one notable exception is the add-repo card, which uses a gentle cool gradient to signal action without abandoning the calm base. That makes the whole interface feel deliberate rather than decorative.

Rounded corners are present but modest. Most controls sit in the 4px to 8.4px range, which keeps the interface crisp and technical. The larger card radius softens the repository grid and the ask dock, while the smallest radii belong to pills and compact tags. This keeps the system from drifting into soft consumer UI; it remains a working tool with friendly edges.

The page also favors a controlled amount of inline structure. File names, source labels, and route paths are wrapped in pale chips that look like compact tokens rather than buttons. The right rail and the left navigation both use muted gray rows with a selected-state fill, which turns hierarchy into a readable map. Nothing in the interface feels ornamental for its own sake. Even the blue primary action stays small and disciplined, which keeps the visual hierarchy honest.

## Components

### Top bar

The top bar carries the DeepWiki wordmark on the left and a small utility cluster on the right. The visible controls are compact: the Devin index label, an outlined Edit Wiki button, a filled blue Share button, and a moon icon at the far edge. The bar is thin, bright, and visually subordinate to the content below it. It should stay that way. The top bar is a framing device, not the main event.

### Home search

The home search area uses a centered prompt, then a soft input with a pale border and a magnifier icon. The field is wide enough to feel generous but not sprawling. Its job is to funnel the user into the repository grid quickly. The input is quiet, with light placeholder text and rounded corners, and it should remain a neutral control rather than a decorative hero object.

### Repository cards

Repository cards are white, bordered rectangles with compact internal spacing. Each card contains a title, a short description, a star count, and a right-arrow affordance. The typography is understated: the title leads, the subtitle supports, and the count stays small. The cards are arranged in a consistent grid, which makes the page feel browsable at a glance. The add-repo variant swaps the neutral white fill for a very soft gradient and a plus sign, making it the only card that reads as an invitation rather than a destination.

### Sidebar navigation

The left sidebar is a stacked document outline. It begins with a status line and then moves through high-level and nested sections. The active row uses a pale filled background instead of a bold accent, which keeps the navigation from competing with the content column. Typography is light, compact, and readable. The sidebar should preserve that quiet hierarchy; it is a map, not a dashboard.

### Article body

The article column is the most text-heavy component. It uses a bold heading, a short intro paragraph, source chips, subheads, ordered lists, and data tables. The content block spacing is generous enough that the article remains scannable even when the page contains many nested parts. The tables are minimally styled with thin horizontal rules and simple row separation. The article should keep this restrained editorial feel so the page stays legible at long length.

### Source chips

Source chips are small rounded pills that carry file names and compact range labels. They use pale fills, dark mono text, and tight internal padding. The chips sit inline with the article text rather than floating above it, so they behave like references embedded in the flow. This treatment is important: the chips should look like metadata tied to the prose, not like interactive badges fighting for attention.

### Utility callout and index rail

The right rail combines a dismissible refresh callout with the “On this page” index. The callout is a small bordered card with a title and short explanatory copy. The index below it is a simple list of anchors with clear spacing and no visual noise. This rail works because it is narrow, quiet, and separate from the main article. It should not become louder than the content it supports.

### Ask dock

The ask dock is the most dialog-like component in the wiki view. It sits at the bottom with a large text entry region, a thin top border, and a compact control row that includes a speed selector and a send affordance. The surface is white and bordered, matching the rest of the system instead of introducing a new visual language. Its presence is important, but it should remain visually calm so the article still reads as the primary surface.

## Responsive behavior

The system should collapse by preserving meaning, not by rearranging into a different product. The repository grid should reduce columns before it reduces card clarity. The ask dock should remain available without covering the article’s first lines or the search prompt. The home page should keep the search field prominent even as the grid tightens.

Spacing and type should compress in measured steps. The goal is to keep the same calm editorial tone rather than introducing new mobile-only styling. Long titles may need earlier wrapping, but the card anatomy and chip treatment should remain intact. The strongest rule is to protect the reading column: if anything has to give, let decorative width go first and preserve line length, hierarchy, and the visible affordances.

## Practical implementation guidance

### Preserve

- Preserve the off-white canvas and white bordered cards.
- Preserve the single blue action color for the strongest interaction.
- Preserve the three-zone wiki shell: navigation, article, utility rail.
- Preserve the small monospaced chips for file names and source labels.
- Preserve the low-shadow, high-border look; the system is mostly flat.

### Avoid

- Avoid adding stronger shadows or glass effects.
- Avoid turning the article into a chat-first layout.
- Avoid using multiple saturated accent colors.
- Avoid over-rounding controls until they feel soft and generic.
- Avoid shrinking body text below the comfortable 14–16px band.

### Recommended build order

1. Establish the canvas, border, and text colors.
2. Build the Geist hierarchy for headings, body, labels, and code chips.
3. Recreate the top bar and primary blue action.
4. Build the home search field and repository grid.
5. Build the wiki shell with left navigation, article column, and right utility rail.
6. Add source chips, tables, and the ask dock.
7. Tighten spacing and responsive collapse rules last, while keeping the same content order.

### Accessibility

- Keep contrast strong on pale cards and filled rows.
- Do not rely on fill color alone for active navigation; pair it with weight or clarity in the row label.
- Keep focus states visible on the search field, top-bar buttons, nav links, and the ask dock controls.
- Make file chips and route chips readable at small sizes; the monospace face should stay legible, not decorative.
- Preserve a sensible reading order so screen-reader users encounter the article before secondary rails and utility cards.

## Scope note

This guide covers the supplied light-mode home view and the repository wiki/article layout, including the top bar, repo cards, sidebar navigation, source chips, utility rail, and ask dock. Mobile breakpoints, hover and loading states, full dark-mode behavior, animation, and exact product-level interaction rules are not included. Measurements are practical adaptation targets.
