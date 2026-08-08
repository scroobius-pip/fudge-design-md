# How era.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/era.app-design)

Last updated: 2026-08-08

## Captured pages

[![Centered MCP setup screen with sidebar, connector list, and step cards](https://pin.fontofweb.com/9758?format=jpg)](https://design.withfudge.com/share/pin-9758)

[Centered MCP setup screen with sidebar, connector list, and step cards](https://design.withfudge.com/share/pin-9758)

[![Dark transactions view with filter bar, empty state, and fixed left navigation](https://pin.fontofweb.com/9757?format=jpg)](https://design.withfudge.com/share/pin-9757)

[Dark transactions view with filter bar, empty state, and fixed left navigation](https://design.withfudge.com/share/pin-9757)

[![Support page with email card and pastel priority banner on dark shell](https://pin.fontofweb.com/9759?format=jpg)](https://design.withfudge.com/share/pin-9759)

[Support page with email card and pastel priority banner on dark shell](https://design.withfudge.com/share/pin-9759)

[![Referral earnings page with large payout numbers and two compact offer cards](https://pin.fontofweb.com/9760?format=jpg)](https://design.withfudge.com/share/pin-9760)

[Referral earnings page with large payout numbers and two compact offer cards](https://design.withfudge.com/share/pin-9760)

[![Onboarding home with three-step cards, mint header strip, and question prompts](https://pin.fontofweb.com/9755?format=jpg)](https://design.withfudge.com/share/pin-9755)

[Onboarding home with three-step cards, mint header strip, and question prompts](https://design.withfudge.com/share/pin-9755)

## Overview

Era is a dark finance workspace rather than a bright marketing site. The main canvas sits in a deep blue-black range, the primary content cards are slightly lighter and flatter, and the only steady accent is a mint-teal that marks the brand strip, key buttons, and tiny status chips. The pages feel practical before they feel decorative. A narrow left rail carries navigation and account utilities, while the center lane holds the active task: onboarding, transactions, support, referrals, or connector setup.

The visual rhythm stays calm even when the interface carries a lot of information. Titles are short, supporting text is restrained, and the cards do most of the organizing. On the onboarding and setup screens, that means a title, one sentence of context, and then a stack of cards or rows. On support and referrals, it means a strong headline, a few compact subcards, and a single banner or action line. The design works by holding a lot of function inside a very small set of surfaces.

## Colors

Era uses a tight palette with one accent and two levels of dark shell. `#0F1720` is the main canvas color for the app body. `#191A17` is the slightly warmer dark surface used for raised cards and panels. `#F3F3F1` and `#F8FAF9` are the pale pair used for cards, banners, controls, and separators. `#FFFFFF` keeps copy and button faces crisp where the interface needs maximum contrast. `#54AC9A` is the only saturated brand color, and it stays disciplined: the logo strip, small labels, and emphasis states use it without turning the interface loud.

| token | value | role |
|---|---|---|
| `canvas` | `#0F1720` | Main app background and deep page canvas |
| `canvas-deep` | `#000000` | The darkest chrome, logo block, and strongest contrast moments |
| `surface` | `#191A17` | Raised cards and panel surfaces inside the dark shell |
| `surface-soft` | `#F3F3F1` | Pale card fill, secondary banners, and soft separators |
| `surface-subtle` | `#F8FAF9` | Bright control fill and the lightest card or badge surface |
| `ink` | `#FFFFFF` | Primary text on the dark canvas and dark cards |
| `ink-on-light` | `#191A17` | Text on pale cards, buttons, and banners |
| `ink-soft` | `#F3F3F1` | Supporting text on dark surfaces |
| `action` | `#54AC9A` | Brand strip, selected accent marks, and small active indicators |
| `border` | `#F3F3F1` | Quiet light hairlines around cards and controls |
| `border-subtle` | `#F8FAF9` | Fainter borders on bright controls and tiny chips |

The light and dark surfaces do different jobs rather than competing with each other. Dark shells hold navigation, empty states, and the broad page frame. Pale cards hold instructions, account actions, and support notes where reading must be effortless. Mint stays rare so it can act as a signal instead of a mood. There is no image-led chaptering in these screens; the contrast comes from moving between dark shell mode, pale card mode, and mint accent mode. Keep the tinted note banner and any future soft highlight panels subordinate to the mint system rather than introducing a second strong brand color.

## Typography

Era reads as a restrained sans-first system. Saans sets the page titles, card titles, and stepped instructions with enough weight to anchor the dark canvas. Applesystem carries the explanatory copy, row labels, and controls so the interface feels familiar and low-friction. Times is present as a spare serif fallback for brief legal or editorial moments, but the screens shown here do not depend on it. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Saans | 2.75rem | 500 | 1.1 | -0.02em | Large page titles and primary hero statements |
| `section-display` | Saans | 2rem | 500 | 1.15 | -0.015em | Secondary page headers and major card leads |
| `card-title` | Saans | 1.25rem | 500 | 1.25 | -0.01em | Card headings, accordion titles, and key labels |
| `body` | Applesystem | 1rem | 400 | 1.5 | 0em | Supporting sentences, explanations, and row copy |
| `body-medium` | Applesystem | 1rem | 500 | 1.5 | 0em | Buttons, emphasized lines, and compact body emphasis |
| `ui` | Applesystem | 0.75rem | 500 | 1.25 | 0.03em | Chips, pills, helper labels, and control text |
| `legal-copy` | Times | 0.75rem | 400 | 1.4 | 0em | Legal notes, footnote lines, and rare serif fallback text |

The hierarchy is built from weight, scale, and spacing more than from font switching. Large titles stay moderately bold and close-set so they sit cleanly against the dark canvas. Supporting copy opens up just enough to stay readable inside dense cards and list rows. The smallest labels gain emphasis through compact tracking and a slightly firmer weight, which keeps badges and button text legible without making them shout.

## Layout

A fixed navigation rail holds the Era wordmark, the teal brand block, and a vertical list of destinations and utilities. The main workspace takes the rest of the width and uses a very consistent rhythm: page title, one line of context, then a hero card, a stack of rows, or a banner. On the centered utility screens, broad side gutters of `16.75rem` create a calm reading column that feels separate from the rail even when the page is dense.

Spacing is straightforward and repetitive in a good way. `1rem` gaps separate related controls, `1.25rem` breaks up compact cards, and `1.5rem` adds breathing room between the larger sections of a page. The interface rarely needs more than that because the cards are already visually distinct through surface color and border tone. Corners stay modest: `0.25rem` for controls, `0.5rem` for cards, and full pills only for badges or tiny counters. That restraint is important. The layout feels organized because it avoids rounding everything into the same soft bubble.

The most common structure is a column of content cards with a short, functional header at the top. On referrals, a large summary card leads into two equal secondary cards. On support, a main email card leads into a wide banner. On transactions, the search and filter strip sits above an empty state or a dense list. On MCP setup, the page shifts into a stepper with one expanded client and several collapsed rows beneath it. Even when the content changes, the composition stays centered and easy to scan.

## Visual language

Era’s visual language is quiet, clipped, and operational. The dark shell gives the interface weight, but the pale cards keep it from feeling severe. Mint-teal is the brand note that softens the system, and it appears only where the user needs a clear signal: the brand strip, a badge, a small state mark, or a calm action. That makes the accent feel trustworthy rather than promotional.

The pages rely on flatness more than depth. Borders are thin and pale, shadows are minimal, and most of the separation comes from color contrast and spacing. That approach works well for finance and data-heavy tasks because it keeps attention on the copy and the controls. The small amount of depth that does exist belongs to the cards and the occasional tinted note banner, which read as temporary emphasis rather than as decoration.

Shape language is equally restrained. Controls use sharp enough corners to stay precise, while cards use only a slight soften. Full pills are reserved for tiny badges and counters so they read as utility rather than ornament. The interface also keeps icon use restrained: icons are small, line-like, and mostly serve orientation in the rail or in row actions. The overall impression is calm infrastructure with a friendly edge, not a glossy product showcase.

## Components

### Shell and navigation rail

- **Anatomy:** A dark top-left brand block, a narrow vertical rail, short destination labels, and a footer cluster for language, profile, and utility links.
- **Surface:** The rail sits on the same dark canvas as the page, with the brand strip using the mint accent to break the darkness.

- **Shape and spacing:** The rail stays tight and linear. Rows keep `1rem` spacing, and the brand block uses a small card radius rather than a full pill.
- **Visible states:** The current destination should feel calm and structural, not flashy. The brand strip does more visual work than the selection state.

### Hero summary cards

- **Anatomy:** A label chip, a page title, a short context line, and either large metrics or a compact action cluster.
- **Surface:** Dark raised panels that sit just above the shell, with pale buttons or badges inside them when an action is needed.
- **Typography:** `card-title` for the heading, `body` for the explanation, and `hero-display` or a strong metric line for the main number or statement.
- **Composition:** Keep the primary statement at the top-left of the card and let the metric or action sit below it in a simple vertical stack.
- **Visible states:** The referral hero turns into a stat board with `$15` and `30%` as the strongest elements. The referral and setup cards should stay informational rather than promotional.

### Split cards and compact tiles

- **Anatomy:** Two equal cards below the hero on the referral page, each with a short heading, one sentence of context, and a tiny top-right chip.
- **Surface:** Use the same dark surface and border treatment for both tiles so they read as a pair.
- **Typography:** `card-title` for the tile headings and `body` for the supporting line.
- **Shape and spacing:** Keep the horizontal gap moderate and the card corners at `0.5rem`. The small chip can use the pill radius so it reads as a tag, not a button.
- **Composition:** The left tile should not overwhelm the right one. The pair should read as two tracks, not as one primary and one secondary card.

### Filter bars and row lists

- **Anatomy:** Search, dropdown filters, date fields, and a top-right utility button above a centered empty state or row list.
- **Surface:** Controls are dark, narrow, and framed by subtle borders; the empty state sits in the open middle of the page; action buttons inside rows use pale fills.
- **Typography:** `ui` for controls and small filters, `body` for row content, `body-medium` for action text.
- **Composition:** Keep the filter line compact and aligned. In the ask-something block, each row should have the prompt on the left and the actions grouped tightly on the right.
- **Visible states:** Empty states are centered and quiet. The action buttons remain visible even when the content area is otherwise sparse.

### Accordion setup lists

- **Anatomy:** A strong section title, a short intro line, an expanded first client row, and several collapsed rows below it.
- **Surface:** The expanded row is a larger dark card with a divider and a close glyph; collapsed rows are slimmer bars with a plus icon at the far right.
- **Typography:** `card-title` for the setup section and client names, `body` for the steps, `ui` for the row labels and small affordances.
- **Composition:** Keep the open row dominant and let the lower rows recede visually. That makes the setup flow feel guided without turning it into documentation.
- **Visible states:** Expanded, collapsed, and list-like states should remain obvious from size and spacing alone.

### Support banner and utility notes

- **Anatomy:** A main support card, a short email address row, and a full-width banner beneath it with one call to action aligned to the right.
- **Surface:** The support card sits on the dark shell; the banner uses a much lighter surface so it reads as a temporary note.
- **Typography:** `card-title` for the support heading, `body` for the response promise, and `ui` for the banner copy and button.
- **Shape and spacing:** Keep the banner as a rounded bar rather than a large panel. The right-aligned action should remain small and calm.
- **Visible states:** The banner should feel supportive, not urgent. It is a gentle nudge to move forward, not a warning.

## Responsive behavior

The core hierarchy should stay intact as the screen narrows: brand rail, title, summary card, secondary cards, then banners or row lists. On smaller widths, the left rail should collapse into a compact navigation pattern before the content loses its breathing room. Cards should stack vertically, not compress into unreadable columns, and row actions should remain aligned to the right only as long as they still fit comfortably. Labels and helper copy should keep their line height so the dark interface does not feel cramped.

The mint brand strip and the small chips need to stay visible when the layout tightens, but they should not grow into new landmarks. The interface works best when it remains sparse and vertically ordered. If a row list or stepper becomes too dense, reduce the number of visible controls before reducing text clarity. The support banner and referral summary cards should keep their card-like separation, while transaction filters may need to wrap in a controlled way rather than collapse into a crowded strip.

## Practical implementation guidance

### Preserve

- Keep the dark shell, pale cards, and mint accent as the permanent visual grammar.
- Use the left rail for navigation and utilities, and keep the main lane centered on the current task.
- Preserve thin borders, modest radii, and a mostly flat surface treatment.
- Let title, context line, and cards do the work instead of adding extra visual decoration.
- Keep the accent color rare so it stays meaningful.

### Avoid

- Avoid adding extra brand colors, loud gradients, or glossy shadow stacks.
- Avoid turning every control into a large pill or every panel into a soft bubble.
- Avoid dense multi-column layouts that break the calm reading flow.
- Avoid making empty states look like errors or making support notes feel urgent.
- Avoid relying on icon-only controls without a nearby text label.

### Recommended build order

1. Build the dark canvas, brand strip, and left rail.
2. Add the shared card, button, badge, and banner primitives.
3. Recreate the onboarding and MCP setup patterns.
4. Add the transaction filters, empty state, and row actions.
5. Finish the support banner and referral summary cards.
6. Validate the spacing rhythm, contrast, and density across the full shell.

### Accessibility

- Use `#191A17` text on pale surfaces and `#FFFFFF` text on dark surfaces to keep contrast clear.
- Keep visible focus rings on buttons, dropdowns, row actions, and chips.
- Give icon-only controls a clear accessible name or a nearby text label.
- Keep body copy at a readable line height inside dense rows and setup steps.
- Do not use mint alone to signal meaning; pair it with text or placement.

## Scope note

This guide covers Era's desktop app shell and the dark utility pages shown here: get started, transactions, MCP setup, support, and referrals. Mobile layouts, motion, hover states, and alternate marketing treatments are not included. Measurements use a 4px rhythm.
