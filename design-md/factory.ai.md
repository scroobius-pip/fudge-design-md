# How factory.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/factory.ai-design)

Last updated: 2026-08-08

## Captured pages

[![Dark IDE frame with split explorer and code pane](https://pin.fontofweb.com/6823?format=jpg)](https://design.withfudge.com/share/pin-6823)

[Dark IDE frame with split explorer and code pane](https://design.withfudge.com/share/pin-6823)

[![Jobs board with filter chips, rows, and quote strip](https://pin.fontofweb.com/6822?format=jpg)](https://design.withfudge.com/share/pin-6822)

[Jobs board with filter chips, rows, and quote strip](https://design.withfudge.com/share/pin-6822)

[![Enterprise hero with trust marks and a light action](https://pin.fontofweb.com/6820?format=jpg)](https://design.withfudge.com/share/pin-6820)

[Enterprise hero with trust marks and a light action](https://design.withfudge.com/share/pin-6820)

[![Integrations wall above security badges on black field](https://pin.fontofweb.com/6818?format=jpg)](https://design.withfudge.com/share/pin-6818)

[Integrations wall above security badges on black field](https://design.withfudge.com/share/pin-6818)

[![News grid with orange tags and a giant closing line](https://pin.fontofweb.com/6815?format=jpg)](https://design.withfudge.com/share/pin-6815)

[News grid with orange tags and a giant closing line](https://design.withfudge.com/share/pin-6815)

## Overview

Factory is a severe black developer brand built around restraint, clarity, and quiet control. The page surface stays near-black, the text stays white, and orange appears only as a small signal color for dots, badges, active indicators, and a few high-contrast controls. That limited palette gives every section a strong reading order without needing decorative backgrounds or soft gradients.

The page rhythm comes from structure rather than ornament. Large headings sit beside compact copy blocks, thin rules divide long sections, and small label chips organize lists, filters, and news items. The result feels close to a command-line product launch page: compact, technical, and direct. Even when the content shifts between product, company, jobs, integrations, security, and news, the same visual discipline holds the experience together.

## Colors

| token | value | role | use |
|---|---|---|---|
| `canvas` | `#020202` | Dark canvas | Main page background, section fields, and deep dividers |
| `ink` | `#FAFAFA` | Bright ink | Primary headings, body copy, white controls, and light chips |
| `muted-ink` | `#8A8380` | Secondary ink | Supporting lines, metadata, and quieter labels |
| `border` | `#EEEEEE` | Hairline border | Thin separators, chip outlines, and rules under nav or section bands |
| `action` | `#EF6F2E` | Accent action | Orange dots, active states, small badges, and status marks |

Factory stays almost entirely monochrome. There is no separate photographic color story in the shown pages; contrast comes from the black field, white type, and thin rules. Light controls invert the canvas by using the same bright white as a fill for compact pills and buttons, while the dark text needed inside those controls comes from the black canvas token. The orange accent never becomes a broad fill. It stays small and precise so it can signal priority without changing the mood of the page.

## Typography

Factory uses Geist for most reading copy and Geist Mono for compact labels, code-like strings, and small UI tags. The hierarchy is built from scale and spacing more than from many weights. Display lines stay light in weight and tight in tracking. Supporting copy sits close to the headline, while the smallest labels switch to the monospaced family to strengthen the technical tone. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Geist | 3.5rem | 400 | 1 | -0.03em | Hero claims, section openers, and oversized page headlines |
| `section-display` | Geist | 3rem | 400 | 1 | -0.03em | Major section titles such as integrations, security, and news |
| `card-title` | Geist | 1.5rem | 400 | 1.1 | -0.02em | Job titles, feature headings, and testimonial lead lines |
| `body` | Geist | 1rem | 400 | 1.5 | 0em | Descriptive paragraphs and supporting text blocks |
| `body-medium` | Geist | 1rem | 400 | 1.5 | 0em | Buttons, highlighted inline text, and emphasized UI copy |
| `navigation` | Geist | 0.875rem | 400 | 1.2 | 0.01em | Top navigation and compact utility links |
| `label` | Geist Mono | 0.75rem | 400 | 1 | 0.08em | Chips, section eyes, and compact category tags |
| `mono-label` | Geist Mono | 0.75rem | 400 | 1.2 | 0.06em | Small technical labels, UI hints, and status text |
| `legal` | Geist | 0.75rem | 400 | 1.45 | 0.02em | Fine-print notes and footer-like supporting copy |

The typography feels engineered, not decorative. Headings are wide and calm, never condensed into aggressive poster type. Body copy remains short and close to the titles, which helps the page read as a series of precise claims rather than a long editorial essay. Labels are especially important: the monospaced forms give chips, section markers, and small badges a machine-like edge that matches the product story.

## Layout

Factory uses a long, horizontal marketing layout built from strong bands, thin separators, and grid-like groupings. The page does not rely on colorful hero panels or soft boxed modules. Instead, the canvas remains open and black, while content blocks occupy narrow zones with large surrounding space.

The hero and product sections usually split into two clear halves: a visual or code-like window on one side and an explanatory stack on the other. The left side often carries the strongest image or a framed editor view, while the right side groups feature copy into a tidy column or grid. On enterprise and security sections, the layout shifts into rows of small logo marks and compliance badges, spaced widely enough to feel deliberate rather than crowded.

Navigation runs across the top edge as a thin, almost suspended bar. Job listings use a table-like rhythm: chips and filters at the top, then evenly spaced rows with left-aligned role labels, centered titles, and right-aligned apply actions. News sections use a loose card matrix with lots of black space around each item, which makes orange category tags and the large closing headline stand out more strongly.

The layout language depends on distance and alignment more than on framed surfaces. Thin rules, row spacing, and large margins do most of the work. Curves stay small on controls and chips, while large content blocks remain mostly rectangular. That keeps the page feeling technical and sober, even when the content becomes promotional.

## Visual language

Factory’s visual language is severe, low-gloss, and highly controlled. The black canvas is the dominant atmosphere. White headlines sit directly on that field or inside slim content windows, and orange appears as the one warm interruption. That orange does not become a decorative theme; it is reserved for tiny dots, active chips, and short status marks that help the eye scan the page.

The site uses three recurring visual modes. First, the IDE-style frame presents a real product surface with a dark editor window, sidebar, and code. Second, the list-and-grid mode presents jobs, features, and news in clean rows or sparse cards. Third, the trust-and-system mode presents integrations, security, and compliance as logos and badges with generous spacing. All three modes share the same discipline: flat surfaces, almost no shadow, thin rules, and compact text.

Shape stays restrained. Small rounded corners soften controls, but the page never turns pill-heavy or playful. Icons and logos are mostly monochrome, which keeps the brand serious and tool-like. White fills appear only in compact controls or tags, so they read as functional signals rather than as decorative buttons. The overall effect is a quiet enterprise console with marketing content layered into it.

## Components

### Top navigation

- **Anatomy:** Left wordmark, center navigation links, and right-aligned utility actions.
- **Typography:** `navigation` for links and small buttons.
- **Surface:** Transparent against the black page.
- **Shape:** Small rounded rectangles on the utility actions, with a restrained outline or solid fill.
- **Spacing:** Wide horizontal spacing between link groups so the bar reads as a thin header rather than a dense menu.
- **Visible states:** The active or primary utility action uses the light control treatment, while the secondary action stays dark and compact.

### Section label row

- **Anatomy:** Small orange dot, uppercase label, and a thin divider line nearby.
- **Typography:** `label` or `mono-label`.
- **Color:** Orange dot from `action`, secondary text in `muted-ink`.
- **Composition:** The dot sits close to the label so the eye reads the section name and status as one unit.
- **Role:** This is the smallest recurring brand marker in the system and helps chapter the long page.

### Hero code window

- **Anatomy:** Framed editor surface, narrow title bar, sidebar tree, and code area.
- **Typography:** `mono-label` for small system text and code-like strings.
- **Surface:** `code-window` on the black canvas, with a visible border and small radius.
- **Composition:** The frame feels like a product preview, not a decorative illustration. The left sidebar and main editor area should remain legible as separate zones.
- **Spacing:** Enough inset to keep the window floating inside the black field rather than glued to the edges.

### Feature and value blocks

- **Anatomy:** Small label, large heading, short paragraph, and an action line or arrow.
- **Typography:** `section-display`, `card-title`, and `body`.
- **Surface:** Directly on the black canvas or inside a very quiet content card.
- **Composition:** Text is left aligned and kept close together so the block reads quickly.
- **Variants:** Some blocks sit in a wide three-column row, while others use a two-column split with more air around the heading.
- **Visible states:** The action line can reverse to a white pill when it needs more emphasis.

### Job listings

- **Anatomy:** Filter chips, role rows, location line, and a right-aligned apply action.
- **Typography:** `label` for chips, `card-title` for role names, `body` or `body-medium` for location and status text.
- **Shape:** Chips are small and compact, with pills for active filters and tighter outlines for inactive ones.
- **Surface:** Black background with hairline separators between rows.
- **Spacing:** Rows are evenly spaced and read like a structured table.
- **Visible states:** The active filter chip flips to the light control treatment, while inactive chips stay darker and quieter.

### Integrations and security rows

- **Anatomy:** Section label, large heading, supporting copy, and an array of monochrome partner or trust marks.
- **Typography:** `section-display` for the heading and `body` for the explanatory line.
- **Composition:** The copy anchors one side and the icon grid or badge row stretches across the other side.
- **Surface:** Pure black with thin rules above and below the section.
- **Variants:** Integration grids feel more expansive, while security rows feel tighter and more formal.
- **Visible states:** Icons stay monochrome and muted until a specific control or badge needs the orange accent.

### News and testimonial blocks

- **Anatomy:** Category chip, headline, supporting summary, and a final action or attribution.
- **Typography:** `card-title` for the lead line and `body` for the summary.
- **Surface:** Black field with sparse card edges and generous spacing.
- **Composition:** News items sit in a loose grid; testimonial copy sits in a wide dark block with a strong single quote.
- **Visible states:** Orange category chips and small badges create the only bright interruptions inside these sections.

## Responsive behavior

The desktop system should collapse by preserving hierarchy, not by shrinking everything evenly. The top navigation can condense into fewer items or a simpler utility row. Large headlines should stay readable by reflowing to two shorter lines instead of becoming cramped single lines. Feature grids should become stacked cards in a strict reading order: label, heading, body, action.

Jobs should remain row-based on larger screens and turn into stacked entries only when the viewport can no longer support the right-aligned action. Integrations and security sections should keep the label and heading together, then let the icon wall or badge row wrap below them. The black field should remain the dominant background at every width so the page never feels like it switches into a different theme.

Small controls need special care. Chips should keep their rounded form and spacing even when they wrap. The white action treatment should remain visually distinct from the black surface, because the contrast between those two tones is one of the strongest scanning cues in the system. If space gets tight, reduce the amount of parallel content before reducing the size of the section labels or the clarity of the rules.

## Practical implementation guidance

### Preserve

- Keep the page mostly black, with white type and orange reserved for status and emphasis.
- Maintain the thin-rule structure between major chapters of the page.
- Use Geist for most copy and Geist Mono for labels, chips, and technical tags.
- Keep controls compact and slightly rounded rather than soft or oversized.
- Let the IDE window, icon grids, and row-based lists carry the page’s technical tone.

### Avoid

- Avoid colorful gradients, soft shadows, or glassy surfaces.
- Avoid large pill buttons everywhere; reserve the fully rounded form for small chips and short controls.
- Avoid mixing many font families or adding decorative display type.
- Avoid turning every section into a card. Much of the system depends on open black space.
- Avoid bright secondary colors beyond the orange accent and the neutral white-gray range.

### Recommended build order

1. Set the black canvas, white text, gray support color, border rules, and orange accent.
2. Build the top navigation and section label pattern.
3. Recreate the IDE-style code window and the large section headings.
4. Add the row-based systems: jobs, feature lists, and news items.
5. Add the integration and security grids with monochrome marks.
6. Finish with testimonial-style dark blocks and the tighter utility controls.

### Accessibility

- Keep enough contrast between white text and the black canvas for every headline and small label.
- Make the orange accent decorative and functional, but never the only way to understand state.
- Give buttons and chips clear focus treatment that stays visible on the black field.
- Preserve readable line lengths in large headlines and in the smaller job or news summaries.
- Make monochrome icons and trust marks understandable with accompanying text, not alone.

## Scope note

This guide covers the desktop homepage, product, company, enterprise, jobs, news, integrations, security, and testimonial sections. Mobile stacks, motion, loading states, hover changes, and fallback font stacks are not included.
