# How discord.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/discord.com-design)

Last updated: 2026-08-08

## Captured pages

[![Dark chooser with stacked intent rows and a bright action button](https://pin.fontofweb.com/7873?format=jpg)](https://design.withfudge.com/share/pin-7873)

[Dark chooser with stacked intent rows and a bright action button](https://design.withfudge.com/share/pin-7873)

[![Compact friends shell with a black rail and live status badges](https://pin.fontofweb.com/3822?format=jpg)](https://design.withfudge.com/share/pin-3822)

[Compact friends shell with a black rail and live status badges](https://design.withfudge.com/share/pin-3822)

[![Wide Nitro hero with floating mascot art and a white subscribe pill](https://pin.fontofweb.com/793?format=jpg)](https://design.withfudge.com/share/pin-793)

[Wide Nitro hero with floating mascot art and a white subscribe pill](https://design.withfudge.com/share/pin-793)

[![White FAQ block with tabs, open answer card, and closed rows](https://pin.fontofweb.com/792?format=jpg)](https://design.withfudge.com/share/pin-792)

[White FAQ block with tabs, open answer card, and closed rows](https://design.withfudge.com/share/pin-792)

[![Comparison table with a highlighted Nitro column and plan buttons](https://pin.fontofweb.com/791?format=jpg)](https://design.withfudge.com/share/pin-791)

[Comparison table with a highlighted Nitro column and plan buttons](https://design.withfudge.com/share/pin-791)

[![Blue-violet footer with link columns and an oversized wordmark](https://pin.fontofweb.com/786?format=jpg)](https://design.withfudge.com/share/pin-786)

[Blue-violet footer with link columns and an oversized wordmark](https://design.withfudge.com/share/pin-786)

## Overview

Discord’s page system balances two distinct moods. One is the product shell: dark, compact, and structured like a control surface. The other is the promotional stage: bright, playful, and built around large statements, mascot art, and broad color fields. The contrast is not accidental; it is the brand. The shell keeps tasks, navigation, and account choices legible. The promotional side turns upgrades, plans, and feature lists into a more theatrical page experience without losing clarity.

The strongest impression comes from the way Discord keeps its interface simple even when the page gets energetic. Rows stay neat. Text stays bold and readable. Corners stay softly rounded. Large sections open up into broad fields of color or pale comparison surfaces, but they still rely on clear hierarchy rather than ornament. Reproduce the design by keeping the neutral base calm and by letting the vivid sections do only one job at a time.

## Colors

The visible system is mostly neutral, and that restraint is part of its identity. Black grounds the dark shell. White carries the main text on dark fields. Off-white and pale gray create quieter reading zones for FAQ and comparison content. A separate light gray border stroke keeps the portal rows distinct without making the list look heavy. The brighter, more saturated energy of the brand lives in the art, badges, and page stages, not in a large set of UI tokens.

| token | value | use |
|---|---|---|
| `ink` | `#000000` | Dark shell backgrounds, left rail panels, and the deepest product chrome |
| `muted-ink` | `#96979E` | Secondary labels, inactive text, and low-emphasis copy on dark fields |
| `canvas` | `#FFFFFF` | Main text on dark areas, light buttons, and the clearest foreground color |
| `canvas-soft` | `#FBFBFB` | Large pale chapters such as the FAQ and other open reading blocks |
| `surface` | `#EFEFF1` | Table rules, row fills, and soft separators in light sections |
| `border-stroke` | `#96979E` | Portal row borders and other crisp dark-surface outlines |

The relationship between modes is simple. Dark shell sections use `ink`, `canvas`, and `muted-ink` to keep dense content readable. Light sections use `canvas-soft` and `surface` to give FAQ and pricing content a calmer pace. The border stroke stays separate from the muted text color so the row outlines remain clear and do not take on the tone of body copy. Accent moments belong to illustrations, badges, and hero backdrops; they should feel vivid against this neutral base rather than replace it.

## Typography

Gg Sans is the main voice across the page. It carries the shell, the chooser, the FAQs, and the comparison table with enough weight to feel friendly while still reading as a product UI. Open Ai Sans appears only in the quietest footer material, where a softer legal or utility tone can taper the page out. The page does not need a large type palette. It needs a small set of clear roles used consistently.

Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---:|
| `hero-display` | Gg Sans | 3.5rem | 700 | 1.05 | -0.02em | Nitro hero and the largest page statements |
| `section-display` | Gg Sans | 2.75rem | 700 | 1.05 | -0.02em | Section titles such as FAQ and comparison headers |
| `feature-display` | Gg Sans | 2.25rem | 700 | 1.08 | -0.02em | Promotional subheads and large chapter leads |
| `card-heading` | Gg Sans | 1.25rem | 600 | 1.2 | -0.01em | Portal chooser headings and compact card labels |
| `body` | Gg Sans | 1rem | 400 | 1.5 | 0em | Supporting copy, descriptions, and table text |
| `body-medium` | Gg Sans | 1rem | 500 | 1.5 | 0em | Buttons, selected rows, and emphasized body copy |
| `navigation` | Gg Sans | 0.875rem | 500 | 1.4 | 0em | Side rail items, tabs, and small interface labels |
| `legal-copy` | Open Ai Sans | 0.75rem | 400 | 1.45 | 0em | Footer utility text and fine print |

The headlines are compact and direct. They usually sit on short line lengths and do not need airy editorial spacing. Body copy stays practical and plain so the interface can carry a lot of information without feeling cluttered. Labels and navigation copy are slightly smaller and medium-weight, which lets the page show clear hierarchy even when many items sit close together. The table and footer benefit from this structure because the plan names, feature rows, and legal lines each occupy a distinct role without needing more visual tricks.

## Layout

Discord uses three spatial patterns. The first is the dark product shell, where content stacks tightly inside a narrow lane. The second is the offset chooser, where the page leaves a large empty field and places the question and option stack in a left-biased column. The third is the full-width promotional chapter, where a hero, FAQ, table, or footer uses the breadth of the page to create a stronger visual rhythm.

The developer portal chooser is the clearest example of the offset pattern. It does not sit as a centered block. Instead, it occupies a reading lane on the left, with a large dark field stretching away to the right. That open space is important: it makes the list feel calm and intentional instead of crowded. The friends shell pushes the composition in the opposite direction, using a tight left rail and a compact content column. The Nitro hero expands outward and uses the full width more aggressively, while the FAQ and pricing table return to broad pale blocks that still read as structured chapters.

Spacing stays disciplined throughout. Small row clusters use the 1rem step. Larger section changes use 2rem gaps. The broader outer offset around the chooser and table sections gives the page room to breathe, which is what lets the strong typography and sharp row borders do their job. The layout should feel like a sequence of clear lanes rather than a stack of identical cards.

## Visual language

Discord’s visual language is friendly but not soft in a generic way. It prefers strong contrast, simple geometry, and a few playful accents. Dark shells give white text a crisp field. Light panels make tables and FAQ answers easy to scan. The hero chapter uses saturated violet and blue fields with floating mascot art, tiny badges, and a clean white button so the brand feels lively without becoming noisy.

Rounded corners are a major part of the mood. They appear on rows, cards, pills, and buttons, but they never become so large that the page turns into bubble shapes everywhere. Thin rules and borders are equally important. They keep long lists readable and let the selected state stand out with fill, outline, and icon cues rather than shadow. The design works because it alternates between quiet structure and one bright focal point per section. The shell stays restrained. The promotional chapters become vivid. The handoff between those two tones is what gives the page its personality.

## Components

### Developer portal chooser

- **Anatomy:** A large question, a short helper line, a vertical list of selectable rows, and a bottom action bar.
- **Surface:** Very dark background with rows that stay visually separate through a thin border stroke.
- **Typography:** The heading is large, white, and bold. Row labels are smaller and medium-weight so they stay readable inside the dark shell.
- **Shape:** Rows use a compact rounded rectangle. The primary button is softer and more pill-like than the rows around it.
- **Visible state:** One row shows a clear selected treatment with a bright checkmark badge on the right. That cue matters because it gives the chooser a direct outcome without changing the list structure.

### Friends shell

- **Anatomy:** A narrow icon rail, a search field, a category list, and a direct message list with status dots and small badges.
- **Surface:** Black dominates the shell, while the active row is a touch lighter so it stands out without breaking the dark field.
- **Typography:** Labels and names stay compact and medium-weight. The result is dense but still easy to skim.
- **Spacing:** Vertical spacing is tight and repetitive, which helps a long list remain orderly.
- **Composition:** The whole view hugs the left side of the screen and feels like a working interface rather than a marketing page.

### Nitro hero

- **Anatomy:** A single large statement, one white subscribe pill, and floating mascot cards or sticker-like shapes around the edges.
- **Surface:** A saturated violet-to-pink field carries the mood. The type stays white so the color can remain broad and uncluttered.
- **Typography:** The heading is the largest element on the page and stays short enough to hold its own in the center of the composition.
- **Shape:** The button is a white pill that cuts cleanly through the gradient background.
- **Composition:** Decorative art stays near the margins so the center stays open and legible.

### FAQ panel

- **Anatomy:** A title, a row of category tabs, one open answer card, and several closed rows below.
- **Surface:** A pale canvas block with a strong blue answer panel that becomes the focus when a question is open.
- **Typography:** The title is bold and dark. Questions stay prominent. Answers drop one level in emphasis so they do not fight the heading.
- **States:** Closed rows remain quiet and minimal. The open row becomes a filled panel with more height, more color, and a clearer answer block.
- **Shape:** Soft corners keep the section approachable, but the structure remains crisp.

### Pricing comparison table

- **Anatomy:** A section heading, a left feature column, two plan columns, rows of feature names, checkmarks, and plan buttons.
- **Surface:** The table sits on a pale field with light horizontal rules. The premium column receives a stronger outline and a small badge.
- **Typography:** Plan names are bold and compact. Feature labels are smaller and easier to scan quickly.
- **Composition:** The feature list is the main story, and the plan columns stay narrow so the comparison reads cleanly.
- **Visible state:** The highlighted plan column is the clearest emphasis on the page and should keep its outline, badge, and button prominence.

### Footer

- **Anatomy:** A language control, a social row, several link columns, and a large wordmark that fills the lower edge.
- **Surface:** A deep blue-violet field gives the footer more calm than the hero while still keeping the brand lively.
- **Typography:** Link text stays small and bright. The oversized wordmark acts as the closing visual anchor.
- **Spacing:** The columns remain airy, which keeps the footer from feeling cramped even with many links.
- **Hierarchy:** Utility controls sit to one side, while the link grid and wordmark complete the page in a strong branded finish.

## Responsive behavior

On narrower screens, the left-biased chooser should collapse into one reading column and let the row list fill the available width. The action bar should wrap cleanly instead of squeezing the labels. The friends shell should reduce the width of the rail before it compresses the main list into unreadable density. The Nitro hero can keep its centered headline, but the decorative art should trim away sooner so the text remains dominant. The FAQ and pricing table should preserve legibility first, even if that means stacking columns or allowing horizontal scroll for the most detailed comparison.

## Practical implementation guidance

### Preserve

- Keep the split between dark shell chrome and brighter promotional chapters.
- Keep Gg Sans as the main brand voice so the page feels like one system.
- Preserve the 8px and 12px rounding family across rows, cards, and buttons.
- Keep the chooser offset left instead of centering it.
- Let the comparison table remain a table, not a loose set of cards.

### Avoid

- Avoid flattening the whole site into one generic dark theme.
- Avoid overusing shadows where borders and fill already carry the hierarchy.
- Avoid mixing too many corner radii in one view.
- Avoid shrinking the hero into ordinary banner copy.
- Avoid turning the FAQ or pricing block into decorative panels that lose scan speed.

### Recommended build order

1. Set the neutral color system and the Gg Sans hierarchy.
2. Build the dark shell and the left rail.
3. Add the chooser lane, row borders, and selected state.
4. Build the Nitro hero and its white subscribe pill.
5. Add the FAQ block and the pricing comparison table.
6. Finish with the footer field, link grid, and oversized wordmark.

### Accessibility

- Keep white text against dark fields at strong contrast.
- Give selected rows more than one cue, such as fill change and checkmark badge.
- Make tabs, buttons, and row targets large enough to press comfortably.
- Keep table text readable at a quick scan distance and do not depend on thin gray alone for meaning.
- Give mascot art, badges, and logos useful alternative text when they carry meaning.

## Scope note

This guide covers Discord’s desktop developer portal chooser, friends shell, Nitro hero, FAQ, pricing comparison, and footer. It does not define motion, hover or focus styling, hidden onboarding branches, or mobile breakpoint behavior.
