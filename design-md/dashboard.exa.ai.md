# How dashboard.exa.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dashboard.exa.ai-design)

Last updated: 2026-08-04

## Captured pages

[![Home hero row with blue banner, split cards, and tile grid](https://pin.fontofweb.com/9452?format=jpg)](https://design.withfudge.com/share/pin-9452)

[Home hero row with blue banner, split cards, and tile grid](https://design.withfudge.com/share/pin-9452)

[![API Keys page with summary strip, tabs, and key table](https://pin.fontofweb.com/9451?format=jpg)](https://design.withfudge.com/share/pin-9451)

[API Keys page with summary strip, tabs, and key table](https://design.withfudge.com/share/pin-9451)

## Overview

dashboard.exa.ai is a light, compact developer console. The system stays close to white surfaces, thin dividers, and restrained blue accents, so the interface feels precise rather than decorative. The home page presents a split hero: a large introductory card on the left, a narrow API key card on the right, and a second row of product tiles below. The API Keys page strips the layout back further, leaving one heading, one summary band, a tab strip, one primary action, and one table. That difference in density is the strongest structural signal in the design.

The page rhythm comes from cards, not from illustration. The left rail, hero cards, template tiles, product tiles, and table all share the same quiet box language. The blue system provides the only strong chromatic voice. Black is reserved for the Create Key action and for the sharpest text moments. Gray does the rest of the work, keeping hierarchy readable without turning the console into a marketing page.

## Colors

The palette is small and practical. White and near-white surfaces carry almost the entire interface. A pale blue strip at the top of the home page introduces a softer, informational note before the main content. Strong blue is used for the main CTA on the home page and for active tab state on the API Keys page. Near-black text anchors headings and key values. Mid-gray text handles supporting copy, labels, and metadata. Borders stay light so the cards read as containers rather than framed widgets.

| token | value | use |
|---|---|---|
| `action` | `#0040F0` | Primary blue action fill and the clearest interactive emphasis |
| `action-strong` | `#0043FB` | Brighter blue end of the home CTA gradient and edge emphasis |
| `action-deep` | `#001651` | Dark base of the home CTA gradient and depth under blue actions |
| `link` | `#0972D5` | Active tab underline, inline links, and smaller navigation accents |
| `ink` | `#111827` | Main headings, page titles, and the strongest body text |
| `ink-soft` | `#404040` | Supporting copy inside cards and summary rows |
| `ink-muted` | `#6B7280` | Section labels, table meta, and secondary navigation text |
| `canvas` | `#FFFFFF` | Page background and card fill when the surface must disappear |
| `surface` | `#FBFCFD` | Soft card fill and low-emphasis blocks against the canvas |
| `surface-soft` | `#F5F6F8` | Quiet panels, empty-looking placeholder zones, and gentle row fills |
| `border` | `#E5E7EB` | Table rules, card outlines, and the main hairline frame color |
| `border-quiet` | `#E0E0E0` | Slightly firmer border treatment on nested tiles and controls |
| `banner-tint` | `#EAEFFC` | Top announcement strip on the home page |
| `banner-mid` | `#3881DD` | Middle stop in the blue announcement gradient language |
| `banner-deep` | `#00061F` | Deep end of the announcement and CTA gradient family |
| `glow` | `#638DFF` | Light inner highlight used in blue button depth and sheen |

The relationship between the chromatic modes is straightforward. Light mode is the default and defines the whole system. The blue accent family acts as the interactive mode: it appears in the hero CTA, tab selection, and small navigation highlights. The dark note is limited and functional, appearing mostly as black type and the black Create Key button, not as a separate dark theme. The pale blue banner creates a brief atmospheric band at the top, but it never becomes a second brand color system. Gray and off-white surfaces keep the rest of the console quiet so the blue actions remain easy to find.

## Typography

The typography stack is mixed, but the roles are clean. Abc Diatype Plus handles almost everything in the interface: body copy, labels, navigation, tabs, and table text. Applesystem appears in a few compact utility labels and small chrome fragments, which keeps those areas visually quiet without adding a new voice. Abc Arizona Flare appears in the home hero, where its more editorial shape gives the entry card a stronger opening line. Aeonik appears in the API Keys page title, which makes that page feel slightly more technical and direct. Proto Mono is reserved for secret-like strings, code samples, and tiny machine-facing labels.

Licensing for reuse should be cleared with the named foundries.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Abc Arizona Flare | 1.75rem | 400 | 1.5 | -0.03em | Home hero headline |
| `page-title` | Aeonik | 1.5625rem | 400 | 1.28 | 0em | API Keys page title |
| `section-title` | Abc Diatype Plus | 1.125rem | 500 | 1.25 | -0.01em | Card titles and concise section headings |
| `body` | Abc Diatype Plus | 1rem | 400 | 1.5 | 0em | Supporting copy, table body, and descriptive text |
| `body-strong` | Abc Diatype Plus | 1rem | 500 | 1.5 | 0em | Button copy, tabs, and emphasized labels |
| `meta` | Abc Diatype Plus | 0.8125rem | 500 | 1.5 | 0em | Summary labels, rail items, and small page chrome |
| `utility-label` | Applesystem | 0.875rem | 400 | 1.2 | 0em | Compact rail labels and minor utility text |
| `code` | Proto Mono | 0.75rem | 400 | 1.5 | 0em | Masked keys, inline code samples, and technical strings |
| `code-strong` | Proto Mono-600 | 0.625rem | 600 | 1 | 0em | Tiny key marks and compact status text |

The hierarchy depends on family change less than on size, weight, and spacing. The hero headline is the only place where the page feels editorial. Everywhere else, the type behaves like a product console: clear, compact, and highly legible. The 16px body style is the workhorse. The 13px and 12px mono sizes give keys and code blocks a machine-like texture without turning the page into a terminal. Negative tracking is useful only on the display title; the rest of the interface should stay neutral.

## Layout

The home page uses a left sidebar plus a wide, card-based main column. The sidebar is narrow and stacked vertically, with simple icon-and-label rows, a muted section header treatment, and a subtle active state. The main area starts with a light announcement bar, then a two-card hero row. That row is the main compositional anchor: the large integrate card owns most of the horizontal space, while the API key card acts as a tighter utility panel. The lower part of the home page turns into a grid of tiles. Templates arrive first, then products. The order matters because it moves from concrete setup, to reusable starting points, to product entry points.

Spacing is measured and stable. The interface keeps generous white space between groups, but each group is itself tightly organized. Cards use small internal padding and clear borders so content does not drift. The home page leaves a large amount of quiet canvas under the lower grid. That open field helps the top half feel structured and prevents the page from becoming a wall of utility boxes. The API Keys page goes even further: it compresses the content into a summary strip, tabs, a single table, and an action button, then leaves the rest of the page empty. That empty lower area is part of the page’s confidence; it says there is no need to fill every line with chrome.

The strongest layout pattern is the strict alignment of left edges. Headings, cards, tabs, and tables all share the same left start, so even when the pages differ in density they still feel like one product. Card corners stay soft, but not pill-like. The table has enough width to breathe, and the summary strip is wide enough to read as a status band rather than a toolbar.

## Visual language

The visual language is utilitarian, but it is not bare. It relies on a few repeated signals: white on white containers, a blue accent family, thin gray rules, small corner radii, and one mono voice for key-like text. The home page adds a little more atmosphere through the pale blue top banner and the stronger blue CTA gradient. Those touches give the page a product-launch feel without moving away from the console vocabulary.

Shape is modest. Most surfaces sit in the 6px to 12px corner range, which keeps the layout friendly while still feeling technical. Buttons are a little sharper than the cards. The black Create Key action feels more decisive because it does not share the blue family. The dashed placeholder box under the home hero is a useful counterpoint: it reads as loading or pending content, but still follows the same soft container language.

The system avoids visual noise. There are no loud shadows on cards. The borders do the separating work. Blue is used carefully so it does not flood the page. Mono text is confined to the places where users expect machine-like values. Because of that restraint, the interface reads quickly: a viewer knows where to click, where to scan, and where to look for account data.

## Components

### Sidebar navigation

- **Anatomy:** Product name at the top, grouped navigation links, section headers, a feedback pill near the bottom, and the user identity at the base.
- **Surface:** White rail with a very light border and active rows that sit on a pale gray fill.
- **Typography:** `meta` for most items, with body-sized labels where the row needs more presence.
- **State:** The active item is quiet, not loud; it is indicated by background and a slight contrast shift rather than a large badge.

### Announcement bar

- **Anatomy:** Centered message line, link-styled phrase, and a close control at the right edge.
- **Color:** Pale blue wash with blue text.
- **Shape:** Very small radius, almost flat.
- **Hierarchy:** It sits above the main content without competing with the hero.

### Home hero card

- **Anatomy:** Large display headline, one line of supporting text, two actions, and a wide lower placeholder panel.
- **Typography:** `hero-display` for the headline; `body` for the supporting copy; `body-strong` for the actions.
- **Surface:** White card with a hairline border and generous internal padding.
- **Composition:** The headline starts the page; the actions sit inline to the right of the copy, not stacked below it.
- **Visible state:** The lower area is a dashed, quiet box with centered mono text, which gives the card a product-in-progress feeling.

### API key card

- **Anatomy:** Section title, one masked key row, a compact status panel, and small icon actions.
- **Typography:** `section-title`, `body`, and `code` for the masked key.
- **Surface:** White or near-white card with the same light border as the hero.
- **Hierarchy:** The masked key is the star of the panel; the surrounding controls stay visually secondary.

### Tabs and table

- **Anatomy:** Text tabs with a thin active underline, a compact primary button, and a one-row table.
- **Typography:** `body-strong` for the active tab, `body` for the inactive tab and table labels.
- **Shape:** Tabs are straight, not pill-shaped; the table is boxed and softly rounded.
- **Visible state:** The active tab is blue and underlined. The table uses simple columns and a single visible data row, which keeps the page calm and legible.

### Template tiles and product tiles

- **Anatomy:** Simple card grid with icon, title, and one-line description; one tile becomes a call-to-action destination rather than a content card.
- **Surface:** Light fills, light borders, small radii.
- **Typography:** `section-title` for titles and `body` for the descriptions.
- **Composition:** The grid is even and repetitive, which makes the tiles read as a system rather than as individual promotions.

### Buttons and small controls

- **Primary blue action:** Gradient blue fill, white text, compact radius, and a subtle glow that makes the control feel live.
- **Primary black action:** Solid black fill, white text, and the same compact footprint used for creating keys.
- **Icons:** Small, gray, and simple; they support the action rather than announcing themselves.

### Floating assistant pill

- **Anatomy:** Rounded bottom-right pill with a short label and a small icon.
- **Surface:** White fill with a light border and very soft depth.
- **Role:** A persistent help affordance that stays subordinate to the account and setup tasks.

## Responsive behavior

Keep the same reading order when the layout narrows: banner, primary hero or title, key account content, then supporting tiles or table content. The sidebar should collapse or condense before the main cards do. The table should remain readable without crushing the masked key column. Blue actions need to stay visually distinct when the page stacks, because they are the fastest way to move from browsing to setup. The large home hero can become a single column, but the API key row and the table should preserve their internal alignment so the page still feels like a console.

## Practical implementation guidance

### Preserve

- Keep the white surface and hairline border language intact across every panel.
- Use blue sparingly and consistently for real actions and active state only.
- Let Abc Diatype Plus do most of the work; reserve Abc Arizona Flare and Aeonik for the few places where the page needs a stronger headline voice.
- Keep the table simple and the summary strip wide enough to read as a status band.
- Preserve the low-shadow, high-clarity feel; the borders and spacing already carry the structure.

### Avoid

- Avoid adding heavy shadows, glass effects, or colorful card fills.
- Avoid turning the sidebar into a dense icon wall.
- Avoid rounding every surface into a pill; the system depends on restrained corners.
- Avoid introducing a second accent family that competes with the blue CTA language.
- Avoid replacing the masked key string with a decorative badge; the key itself must stay legible as a technical value.

### Recommended build order

1. Build the shared shell: sidebar, page canvas, border color, and spacing rhythm.
2. Add the announcement bar and the main page title treatment.
3. Recreate the home hero card and its blue action pair.
4. Build the API key card, masked key row, and icon actions.
5. Add the tabs, black create button, and table structure.
6. Finish with the template grid, product tiles, and floating assistant pill.
7. Tune the type scale so the display headline, page title, and 16px body hierarchy stay distinct.

### Accessibility

- Keep visible focus styles on sidebar rows, tabs, buttons, icon actions, and the floating helper pill.
- Ensure the masked key has an accessible label for reveal and copy actions.
- Keep gray text readable against white surfaces, especially in the 13px and 12px styles.
- Make the active tab state clear without relying on color alone; the underline is part of the state.
- Keep the summary strip and table labels scannable for keyboard and screen-reader users.

## Scope note

This guide covers the home dashboard and API Keys page of dashboard.exa.ai. It does not define other app surfaces such as Search, Contents, Answer, Agent, Websets, Usage, Billing, Team Settings, Websets Settings, or mobile-specific behavior, motion, and interaction states.
