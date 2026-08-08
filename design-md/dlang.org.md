# How dlang.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dlang.org-design)

Last updated: 2026-08-08

## Captured pages

[![Home page with red masthead, code panel, and multi-column support area](https://pin.fontofweb.com/6415?format=jpg)](https://design.withfudge.com/share/pin-6415)

[Home page with red masthead, code panel, and multi-column support area](https://design.withfudge.com/share/pin-6415)

[![Specification contents page with left rail and long red link list](https://pin.fontofweb.com/6416?format=jpg)](https://design.withfudge.com/share/pin-6416)

[Specification contents page with left rail and long red link list](https://design.withfudge.com/share/pin-6416)

## Overview

dlang.org presents D as a practical language with a plain-spoken documentation face. The site does not lean on ornament, illustration, or dramatic surface changes. Instead, it uses a red masthead, centered reading columns, thin separators, and a serif text system to keep attention on the content itself. The home page mixes a short language pitch with a code example, sponsor logos, a four-column content grid for News, Learn, Community, and Documentation, and a separate announcements rail, so the page feels like a community hub as much as a product page. The specification contents page continues the same language, but turns the layout denser and more index-like. The result is steady, direct, and highly legible.

The visual system is defined by restraint: a single strong accent, a small set of neutral grays, and a flat white canvas. Hierarchy comes from spacing and type size rather than from cards, shadows, or decorative backgrounds. When the page needs emphasis, it uses underline, weightless red links, and boxed code rather than more complex treatments. That makes the site feel old-school in the best sense: functional, stable, and easy to scan.

## Colors

### Core interface colors

| token | value | role | use |
|---|---|---|---|
| `action` | `#B03931` | Primary accent | Masthead, primary buttons, red links, and the main interactive cue |
| `action-strong` | `#DC4040` | Strong accent note | Brighter red emphasis for link states, alerts, or small highlights |
| `ink` | `#333333` | Main text | Body copy, section titles, and code-adjacent prose on white surfaces |
| `muted-ink` | `#999999` | Secondary text | Metadata, footers, and quieter supporting copy |
| `canvas` | `#FFFFFF` | Page surface | Main background, white panels, and the open reading field |

The palette stays firmly in a light documentation mode. There is no separate dark treatment or photographic palette in these pages, so the system depends on white space, gray text, and disciplined red accents to create hierarchy. Red is not decorative; it marks action, links, and brand. Gray carries the quieter work of navigation, separators, and legal or utility text. Because the palette is so narrow, the difference between the red action and the muted gray support text matters more than any background fill. That keeps the site calm and readable even when the home page becomes busy with logos, lists, and news items. The brighter red should remain sparing so it does not compete with the deeper masthead tone. Thin separators stay close to the canvas and never become a branded color of their own.

## Typography

The typography combines a readable slab-serif voice for almost everything and a monospaced face for code. That split is a major part of the site’s identity: prose feels editorial and durable, while code feels technical and literal. The serif family gives headings, navigation, and body copy a uniform texture, so the site never feels like a flashy marketing page. Hierarchy comes from size, spacing, and column width more than from many weights. The code family appears only where it needs to, which makes the sample block feel like a real programming surface instead of a stylistic flourish. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Roboto Slab | 1.875rem | 400 | 1.15 | -0.01em | Large page title such as the table-of-contents heading |
| `section-display` | Roboto Slab | 1.5rem | 400 | 1.2 | -0.01em | Smaller section headings and strong page subheads |
| `body` | Roboto Slab | 1rem | 400 | 1.5 | 0em | Main explanatory copy, paragraph text, and linked prose |
| `body-small` | Roboto Slab | 0.875rem | 400 | 1.43 | 0em | Footer text, support copy, and quiet metadata |
| `code` | Consolas | 0.875rem | 400 | 1.4 | 0em | The home-page code sample and inline technical fragments |
| `nav` | Roboto Slab | 0.875rem | 400 | 1.3 | 0em | Masthead navigation and compact utility labels |

The system works because the type scale is modest and disciplined. Large headings never become oversized display slogans; they remain close to editorial chapter titles. Body copy stays readable at a comfortable line length, with enough leading to keep dense link lists from collapsing into a wall. The code block is intentionally not larger than the body text, which makes it read as content rather than as a hero prop. Underlines and red links carry interaction, while the serif family carries most of the tone. That keeps the page serious without becoming stiff.

## Layout

The site uses a centered page architecture with strong vertical stacking. The masthead spans edge to edge, but the content beneath it lives inside a narrower reading column that leaves broad margins on both sides. This gives the page a published, book-like feel even when the content becomes grid-based. On the specification page, the layout becomes a two-column document structure: a narrow left navigation rail and a wide main column. On the home page, the layout opens wider and becomes a split hero with text on the left and a code panel on the right. Both pages still share the same underlying rhythm: top bar, primary content, secondary support, and quiet footer.

Spacing does most of the structural work. The page depends on a clear jump from header to body and then from body to support sections, rather than on nested cards. The code panel, the sidebar rail, and the sponsor/logo rows all sit in the same calm grid language. Borders are thin and mostly functional, acting as fences or dividers rather than decorative frames. Corners stay small at 4px, which keeps the site grounded and browser-like. Nothing feels pill-shaped or overly soft, which helps the content read as a language reference site rather than a product showcase.

The home page’s sequence matters. It starts with a short pitch and a code example, then moves into support, proof, and content columns. That order gives the site a practical cadence: explain, show, validate, expand. The spec page uses a different rhythm, but the same rules. A dense left rail lists sections in a long vertical stack, while the main area repeats and expands the table of contents. That duplication is useful because it makes the page feel navigable instead of decorative.

## Visual language

The visual language is plain, direct, and utilitarian. It favors visible links, simple line dividers, and blocks of text that sit in open white space. The red accent appears in the masthead, links, and primary buttons, and it is the only color that pulls attention aggressively. Everything else steps back. That creates a strong reading hierarchy without the need for shadows or surface layering. The page feels like a reference manual that also knows how to introduce itself.

The code panel is the clearest example of the system’s tone. It looks like a framed snippet, not a full editor: light background, thin outline, small monospace text, and enough padding to keep the lines comfortable. The sponsor strip and the announcement modules add proof and community context, but they do so in the same calm language. Logos sit against white, not on colored plaques. News items and community items look like linked lists, not feature cards. The whole page remains flat, and that flatness is part of the brand.

Red underlines are important. They are the site’s link language, and they make interactive text feel familiar and dependable. The system should keep that plain browser-like cue instead of replacing it with buttons everywhere. The result is a site that communicates stability, technical seriousness, and long-lived documentation habits.

## Components

### Top masthead

- **Anatomy:** Red bar, white D mark, primary navigation groups, utility search controls, and small page links.
- **Surface:** Solid action red across the full width.
- **Typography:** Compact serif navigation in white.
- **Shape:** Rectangular and square-edged; no soft framing.
- **Spacing:** Tight vertical height with evenly spaced navigation items.
- **Composition:** Brand mark sits left, navigation runs across the center, and search controls sit to the right.
- **Visible states:** Links remain understated; the bar itself carries the brand weight.

### Hero pitch and code panel

- **Anatomy:** Short language description, a short slogan line, primary download action, secondary download action, and a framed code sample.
- **Surface:** White canvas with a thin framed code box.
- **Typography:** Serif prose for the pitch; Consolas for the code sample.
- **Shape:** Small 4px corners on the buttons and the code frame.
- **Spacing:** Wide gap between the pitch and the code panel; the buttons sit in a compact vertical stack.
- **Composition:** The pitch reads left, the code panel reads right, and the actions sit below the pitch as the main call to action.
- **Visible states:** The primary action is filled red; the secondary action is white with a thin neutral outline.

### Table-of-contents page layout

- **Anatomy:** Left navigation rail, main content column, long section list, and a small version selector near the top right.
- **Surface:** White background with a pale sidebar frame and a thin vertical divider.
- **Typography:** Section heading in a larger serif size; list links in compact serif text.
- **Spacing:** Narrow rail spacing and a long vertical list rhythm.
- **Composition:** Sidebar and main column are parallel, with the content list repeated in both places for fast scanning.
- **Visible states:** Red underlined links mark the active language of the page; the structure stays quiet and utilitarian.

### Primary and secondary actions

- **Anatomy:** Filled red button and outlined white button.
- **Surface:** Action fill for the primary control; canvas fill with a thin neutral outline for the secondary control.
- **Typography:** Small serif text, centered.
- **Shape:** 4px corners.
- **Spacing:** Compact padding with enough width for single-line labels.
- **Composition:** Buttons are stacked or aligned in small groups rather than spread across the page.
- **Visible states:** The primary button should remain the strongest red object on the page; the secondary one should feel lighter but still clearly clickable.

### Support grid and proof rows

- **Anatomy:** Sponsor logos, news, learn, community, and documentation columns, plus an announcements rail.
- **Surface:** White with no card chrome.
- **Typography:** Section labels in a slightly larger serif size; list items in the body size.
- **Spacing:** Generous horizontal separation between columns and enough vertical breathing room to keep link clusters readable.
- **Composition:** Content is modular but not boxed; each column acts as a compact editorial block.
- **Visible states:** Links stay red and underlined; logos stay full color and untreated.

### Footer line

- **Anatomy:** Small copyright line and generated-page metadata.
- **Surface:** White canvas with muted gray text.
- **Typography:** Small serif copy.
- **Spacing:** Tight and centered.
- **Composition:** Keeps attention low so the footer does not compete with the content above.
- **Visible states:** Quiet informational text only.

## Responsive behavior

On narrower screens, the page should preserve the same order of meaning: masthead, pitch, code sample, support proof, then documentation links. The sidebar rail on the specification page should collapse before the main content loses its reading width. The code panel should stack below the pitch before it becomes too narrow to read comfortably. Sponsor logos should wrap cleanly rather than shrinking into illegible marks. The long link lists should remain searchable and scannable, so vertical rhythm is more important than squeezing everything into one line.

The red masthead and red link language should survive all widths without changing identity. If the layout has to simplify, it should simplify by stacking and spacing, not by replacing the system with a different component style. The page should remain recognizably the same site whether it is showing a short pitch or a dense table of contents.

## Practical implementation guidance

### Preserve

- Keep the red masthead as the strongest brand surface.
- Use the serif family for all prose, navigation, and headings.
- Reserve Consolas for actual code and technical fragments.
- Keep the layout flat, white, and rule-led.
- Preserve underlined red links as the primary interaction cue.
- Keep the 4px corner radius on buttons, frames, and small panels.

### Avoid

- Avoid dark themes, glossy gradients, and glossy button treatments.
- Avoid over-rounding, pill buttons, and consumer-app card styling.
- Avoid replacing link lists with large icon-heavy tiles.
- Avoid introducing multiple accent colors that compete with the red.
- Avoid oversized display type that turns the documentation into a marketing banner.
- Avoid shadow-heavy panels; the site works because it stays mostly flat.

### Recommended build order

1. Build the red masthead and global navigation.
2. Establish the serif body, heading, and link styles.
3. Add the hero pitch with the code panel and stacked actions.
4. Build the table-of-contents layout with the left rail and main list.
5. Add sponsor logos and the support/news/community/documentation columns.
6. Finish with the small footer metadata line and final spacing checks.

### Accessibility

- Keep link underlines visible so links are identifiable without color alone.
- Maintain strong contrast for red text on white and white text on red.
- Use semantic headings for the hero, section labels, and long navigation lists.
- Keep the code sample readable at the smaller monospaced size.
- Make focus states clear on navigation, buttons, and the search controls.

## Scope note

This guide covers the desktop home page and specification contents page. It does not include mobile rearrangement, motion, hover and focus styling, or other documentation pages beyond those two surfaces.
