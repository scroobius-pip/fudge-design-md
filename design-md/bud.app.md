# How bud.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bud.app-design)

Last updated: 2026-08-04

## Captured pages

[![Replay stage with title and floating bottom action bar](https://pin.fontofweb.com/9134?format=jpg)](https://design.withfudge.com/share/pin-9134)

[Replay stage with title and floating bottom action bar](https://design.withfudge.com/share/pin-9134)

[![Pricing grid with five cards and a wide enterprise strip](https://pin.fontofweb.com/9133?format=jpg)](https://design.withfudge.com/share/pin-9133)

[Pricing grid with five cards and a wide enterprise strip](https://design.withfudge.com/share/pin-9133)

[![Centered hero with left rail and open workspace](https://pin.fontofweb.com/9131?format=jpg)](https://design.withfudge.com/share/pin-9131)

[Centered hero with left rail and open workspace](https://design.withfudge.com/share/pin-9131)

## Overview

Bud’s visual system is quiet, spacious, and product-first. The page field stays almost entirely white, then uses black text, pale gray rails, and rounded cards to organize a dense set of controls without making the layout feel busy. The gold accent is rare and deliberate. It appears in the mascot mark, small badges, and tiny emphasis details, which keeps it from competing with the content.

The system’s main idea is contrast through restraint. Strong black fills carry the primary actions. White and very light surfaces hold the plan cards and the replay canvas. Secondary text falls back to muted gray instead of competing with the title or price. The result is a calm workspace that can show many plans, many links, and a long sidebar without losing the center column.

## Colors

Bud uses a minimal light palette. There is no separate dark chapter in the supplied pages, so the design leans on black text, white canvas, and pale surface blocks rather than on mode switching. The gold accent works best as a small signal, not as a field color. It should remain rare so the interface keeps its plain, low-noise character.

| token | hex | use |
|---|---|---|
| `action` | `#000000` | Primary button fills, strongest text, and the darkest control labels |
| `muted-ink` | `#525252` | Helper copy, sidebar items, secondary plan text, and footer links |
| `accent` | `#B8860B` | Mascot mark, small emphasis dots, and the warm brand signal |
| `accent-soft` | `#F9B96C` | Light gold highlights, soft badge fills, and warm illustration details |
| `surface` | `#F7F7F7` | Sidebar rail, inset panel backgrounds, and quiet supporting containers |
| `canvas` | `#FFFFFF` | Main page field, card bodies, and open whitespace around the content |

The palette should stay mostly monochrome. Black handles hierarchy; gray handles explanation; white keeps the structure open. Gold should never become a second action color. It is best used where a small warm note is enough, such as the mascot or a low-stakes badge. Because the shown pages do not introduce a separate dark mode, the system’s contrast comes from value changes inside the light range rather than from a full mode switch.

## Typography

Bud uses one family throughout: Circular. The visible hierarchy uses the Book, Semi Bold, and Bold weights where emphasis increases from body copy to headings and prices. The pages rely on that compact family for both the shell and the marketing surfaces. Circular is credited to Laurenz Brunner and Lineto. The hierarchy is built from size, weight, and spacing, not from multiple families or decorative letterforms.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Circular | 1.5rem | 700 | 1.3333333333 | 0em | Centered page title and the main replay headline |
| `page-title` | Circular | 1.25rem | 600 | 1.4 | 0em | Section titles such as the pricing heading |
| `plan-price` | Circular | 1.25rem | 700 | 1.2 | 0em | Dollar amounts and plan names that need strong emphasis |
| `body` | Circular | 1rem | 500 | 1.5 | 0em | General explanatory copy, feature lines, and support text |
| `body-medium` | Circular | 1rem | 600 | 1.5 | 0em | Primary button labels and stronger inline emphasis |
| `sidebar-item` | Circular | 0.875rem | 500 | 1.4285714286 | 0em | Left-rail navigation and compact top links |
| `meta` | Circular | 0.8125rem | 500 | 1.5 | 0em | Billing notes, tiny badges, and footer metadata |
| `micro` | Circular | 0.625rem | 500 | 1.5 | 0em | Very small plan labels and compact helper marks |

The type system stays tightly set. Most text is short, medium weight, and easy to scan at 14–16px. Section titles step up only slightly, which keeps the layout feeling calm instead of promotional. Bold is reserved for plan prices, button labels, and the main replay headline. Smaller sizes stay readable because the page gives them enough whitespace and avoids dense paragraph blocks.

## Layout

The layout is built around a left sidebar, a centered content column, and very large fields of white space. On the pricing page, the rail runs vertically and keeps the working area anchored while the main content floats in the middle. That arrangement lets the page hold a lot of links without forcing the center column to widen. The sidebar is not decorative; it is part of the page’s rhythm and gives the whole product a workstation feel.

The hero and replay pages are even sparser. A short top bar carries navigation and account actions, then the page drops into a centered composition with a compact title, a mascot mark, and a long open stage. The replay surface uses that emptiness as a feature. The task title stays near the top, the status strip sits low on the page, and the center remains open so the animated or replayed work can dominate the screen.

Pricing is arranged as a row of equal cards with a restrained amount of internal variation. Each plan card has a compact header zone for the plan name and price, then a lighter body for included items and short notes. One selected plan uses a dark button to create a clear focal point, but the rest of the grid stays quiet. The enterprise strip below the cards extends horizontally and acts like a soft footer to the pricing block.

The bottom of the pricing page switches to a wide footer treatment. One large descriptive sentence sits on the left, while link columns and contact details sit on the right. The composition is loose, almost editorial, but still aligned enough to keep scanning easy. The footer works because the page has already established a calm grid above it.

## Visual language

Bud’s visual language is soft, minimal, and slightly playful. Rounded corners are a major part of the identity: cards, pills, controls, and the sidebar all lean into curved edges rather than sharp geometry. Most surfaces are nearly flat, with only the lightest shadows or outlines separating pieces. That keeps the interface from feeling heavy even when many panels are present.

The gold accent gives the brand its only warm note. It appears in the mascot mark and in tiny emphasis details, which makes it feel like a signal rather than a decoration layer. Black remains the dominant structural color for type and primary buttons. Gray stays subordinate and practical. White space is not wasted; it is the framing device that lets the plan grid, replay title, and footer text breathe.

Icons are tiny and monochrome. They support the sidebar and footer without taking attention away from the plans or the hero. Dotted or lightly textured marks appear in the replay and hero compositions, but they stay faint and do not become a repeating ornament. The system avoids loud gradients, chrome, and heavy depth. When shape and spacing are doing the work, the page looks controlled instead of crowded.

## Components

### App shell and sidebar

- **Anatomy:** A pale vertical rail, small top badge, stacked navigation items, a chat list, and a bottom settings link.
- **Surface:** `surface` against a white page field.
- **Typography:** `sidebar-item` for the main items and `meta` for smaller labels and support text.
- **Shape:** Rounded outer corners on the rail; small icon-plus-text rows inside.
- **Composition:** The sidebar takes a fixed-width role and keeps the center column clear.

### Top navigation

- **Anatomy:** Short text links at center or right, plus sign in and sign up actions.
- **Typography:** `sidebar-item` or `body` depending on prominence.
- **Shape:** The sign-up action uses a pill shape; text links remain flat.
- **Visible states:** The active page link can sit on a soft fill or slightly darker badge, but the rest of the bar stays quiet.

### Hero and replay stage

- **Anatomy:** Small mascot mark, centered title, short supporting line, and a large open work area.
- **Typography:** `hero-display` for the title and `body` for supporting copy.
- **Surface:** White canvas with little visual interruption.
- **Composition:** The title stays centered and compact; the open stage below should remain uncluttered so the replay or task content can carry the page.

### Pricing card grid

- **Anatomy:** Plan name, price, billing note, included items, and a bottom action.
- **Typography:** `plan-price` for the amount and `body` or `body-medium` for the rest.
- **Shape:** `card` corners with a soft, calm outline.
- **Visible states:** One plan uses a dark filled button for emphasis; the other cards keep lighter buttons or quiet labels.
- **Spacing:** Keep consistent inner padding and even gaps between cards so the row reads as one system, not five separate promos.

### Footer and link columns

- **Anatomy:** A wide statement block, then grouped links for information, community, and legal.
- **Typography:** `body` for the statement and `meta` for the smaller columns.
- **Surface:** White or near-white, with no heavy footer band.
- **Composition:** The left block should feel like the page’s last editorial sentence; the columns should read as utility support, not as a new feature section.

## Responsive behavior

On smaller widths, the sidebar should collapse or become a shorter rail before the center content loses its calm. The pricing cards should stack cleanly, but the visual rhythm should stay the same: plan title, price, short note, then action. The hero and replay pages should preserve their centered titles and generous whitespace even as the stage becomes narrower. The goal is not to compress every gap; it is to keep the page from feeling packed. Where the desktop layout depends on a horizontal row, mobile should use a vertical stack with the same hierarchy and the same rounded surfaces.

## Practical implementation guidance

### Preserve

- Keep the page mostly white and let black carry the strongest hierarchy.
- Use Circular across the whole product, with weight changes doing most of the work.
- Keep gold rare and tied to the mascot or tiny emphasis details.
- Preserve the pill buttons and the soft 20–24px family of rounded corners.
- Keep cards light, flat, and evenly spaced.

### Avoid

- Avoid adding extra accent colors.
- Avoid heavy shadows, glass effects, or dense chrome.
- Avoid narrow line lengths inside the pricing and footer areas.
- Avoid making the sidebar feel like a separate app; it should stay part of the same calm shell.
- Avoid implying dark-mode behavior or animated states that are not shown on these pages.

### Recommended build order

1. Build the base color stack: white canvas, pale surfaces, black text, muted gray, and gold accent.
2. Establish the Circular type scale and the small set of weights.
3. Build the shared pill button, card shell, and sidebar rail.
4. Assemble the pricing grid with one emphasized plan.
5. Add the centered hero and replay stage.
6. Finish with the footer and link columns.

### Accessibility

- Keep the black-on-white contrast strong for all primary text and actions.
- Do not rely on gold alone to mark important information.
- Maintain visible keyboard focus on pills, links, and pricing actions.
- Keep icon-only controls paired with labels wherever the sidebar or footer needs them.
- Preserve readable text sizes in the footer and sidebar when the layout narrows.

## Scope note

This guide covers the homepage hero, the pricing page, the replay/task view, and the shared sidebar, button, and footer system. It does not define mobile rearrangements, motion, loading or empty states, authenticated-only variations, or any dark-mode version of the page.
