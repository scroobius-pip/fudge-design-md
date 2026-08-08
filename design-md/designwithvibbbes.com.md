# How designwithvibbbes.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/designwithvibbbes.com-design)

Last updated: 2026-08-08

## Captured pages

[![Dark homepage footer with oversized VIBBBES wordmark and link columns](https://pin.fontofweb.com/7189?format=jpg)](https://design.withfudge.com/share/pin-7189)

[Dark homepage footer with oversized VIBBBES wordmark and link columns](https://design.withfudge.com/share/pin-7189)

[![Pricing hero with twin plan cards and a three-card top-up row](https://pin.fontofweb.com/7193?format=jpg)](https://design.withfudge.com/share/pin-7193)

[Pricing hero with twin plan cards and a three-card top-up row](https://design.withfudge.com/share/pin-7193)

[![FAQ panel with one expanded answer and stacked collapsed rows](https://pin.fontofweb.com/7194?format=jpg)](https://design.withfudge.com/share/pin-7194)

[FAQ panel with one expanded answer and stacked collapsed rows](https://design.withfudge.com/share/pin-7194)

[![Docs page with left rail navigation and troubleshooting code blocks](https://pin.fontofweb.com/7192?format=jpg)](https://design.withfudge.com/share/pin-7192)

[Docs page with left rail navigation and troubleshooting code blocks](https://design.withfudge.com/share/pin-7192)

[![Quick-start page with step cards, architecture strip, and install commands](https://pin.fontofweb.com/7191?format=jpg)](https://design.withfudge.com/share/pin-7191)

[Quick-start page with step cards, architecture strip, and install commands](https://design.withfudge.com/share/pin-7191)

## Overview

VIBBBES presents itself as a design-system SaaS with a calm but persuasive sales voice. The page language is built from a small set of strong moves: a dark navy stage, a centered pill-shaped top bar, large rounded headlines, frosted white cards, and a pair of accent colors that separate the main subscription path from the “best value” and lifetime choices. The site feels premium because it keeps the structure simple and lets contrast do the work.

The visual story shifts by chapter. The home footer sinks into a deep blue-black field and ends with a huge ghosted wordmark. Pricing stays bright and airy, with two primary plans and a smaller pay-as-you-go row. Docs pages turn into a practical reading surface with a left rail, compact section headings, black code blocks, and small utility labels. Across all of it, the hierarchy is crisp: headings are heavy and tight, body text is softer and quieter, and the accent colors are reserved for decision points rather than decoration.

## Colors

The color system is intentionally small. White, deep navy, violet, blue, orange, green, and a short gray ramp cover the full interface. Light pages use white cards against a pale field; dark stages switch to navy and near-black; the intermediate surfaces rely on soft blue-violet glows rather than busy backgrounds. Violet is the steady action color, orange marks the lifetime path, and green marks the best-value path. The gray ramp carries body copy, navigation, and utility text so the accent colors can stay focused on choice and status.

| token | value | use |
|---|---|---|
| `action` | `#5856D6` | Primary subscription buttons, active brand accents, and selected UI cues |
| `action-soft` | `#648CFF` | Slim borders, cool highlights, and secondary blue emphasis |
| `action-bright` | `#6496FF` | Glow edges, link-like emphasis, and light blue accents |
| `success` | `#22C55E` | Best-value badge, green button, and savings callouts |
| `warning` | `#F59E0B` | Lifetime badge and orange purchase button |
| `canvas` | `#FFFFFF` | Card fills, page base, and white text on dark stages |
| `border` | `#B4C3E6` | Hairline card borders, soft dividers, and panel framing |
| `ink` | `#111827` | Main headings and strong copy on light surfaces |
| `ink-deep` | `#050A28` | Hero stage, footer stage, and the dark nav shell |
| `ink-strong` | `#000000` | Code blocks and the darkest utility surfaces |
| `ink-muted` | `#374151` | Body copy, navigation labels, and content titles |
| `ink-soft` | `#4B5563` | Supporting lines and lighter descriptive text |
| `ink-subtle` | `#6B7280` | Quiet labels, helper notes, and footer details |
| `ink-faint` | `#9CA3AF` | The lightest gray text and subdued meta copy |

The relationship between modes is straightforward: `canvas` and the gray ramp carry reading surfaces, `ink-deep` creates the theatrical frame, and the accent colors sit on top as decision markers. The blue-violet family keeps the brand cohesive; orange and green are reserved so pricing choices remain easy to scan.

## Typography

The site uses three families. **Made Outer Sans** carries the display voice: the hero, section headings, plan names, and the oversized footer wordmark all depend on its rounded, weighty forms. **Plus Jakarta Sans** handles the rest of the UI, including body copy, labels, navigation, and legal text. **Roboto Mono** appears only in command lines and code snippets, where a fixed-width rhythm helps the installation and troubleshooting blocks feel technical without becoming dense. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Made Outer Sans | 4.5rem | 700 | 0.95 | -0.03em | Main hero headline and the biggest sales statements |
| `section-display` | Made Outer Sans | 3.5rem | 700 | 0.98 | -0.03em | Page section headings such as pricing and FAQ titles |
| `card-heading` | Made Outer Sans | 1.75rem | 700 | 1.1 | -0.02em | Plan names, pack names, and strong card labels |
| `body` | Plus Jakarta Sans | 1rem | 400 | 1.55 | 0em | Paragraph text, descriptions, and explanatory copy |
| `body-medium` | Plus Jakarta Sans | 1rem | 600 | 1.55 | 0em | Buttons, active tabs, and emphasized inline copy |
| `ui-label` | Plus Jakarta Sans | 0.875rem | 600 | 1.4 | 0.02em | Badges, small navigation labels, and compact UI text |
| `legal-copy` | Plus Jakarta Sans | 0.875rem | 400 | 1.6 | 0em | Footer details, small notes, and muted supporting text |
| `code` | Roboto Mono | 0.875rem | 400 | 1.4 | 0em | Inline commands, install steps, and black code blocks |

The hierarchy works because the site keeps line lengths moderate and relies on weight contrast rather than many font families. Display text is bold and compact; body text opens up just enough to stay calm inside cards and sidebar columns. Labels are slightly tighter and often upper or mixed case, which helps the interface feel controlled without becoming rigid.

## Layout

### Page rhythm

The page is built as a sequence of broad, centered stages. The hero and footer stretch edge to edge and use the darkest surfaces. The pricing and docs sections sit inside a wide centered column with large side gutters, then break down into smaller card grids and reading blocks. On desktop, the design favors room over density: big vertical separation between major chapters, then tighter spacing inside each card or list.

### Widths and spacing

The spacing scale is compact but expressive. Tiny internal gaps use 2px, 4px, and 6px equivalents; labels and chip rows step up through 12px, 16px, 20px, and 24px; section separation reaches 32px, 80px, and 112px equivalents. The widest content on the pricing pages sits in a generous centered frame with side margins near 14rem, while some wider card rows push closer to the outer edge and still keep the content comfortably centered. Card padding is usually 1rem to 1.5rem, which gives the panels their soft, breathable feel without wasting space.

### Section structure

The pricing page uses a two-up plan grid at the top, then a three-up top-up row below it. The docs pages switch to a two-column structure with a sticky-looking left rail and a broader content column. The FAQ becomes a single wide accordion panel where each row spans the full column width. This consistent wide-column logic keeps the site readable even when the content changes from marketing copy to procedural steps to command blocks.

### Shape and containment

Rounded corners stay consistent across the system. Small controls and chips use the smallest radius, cards use a moderate corner, and the pill controls are fully rounded. That mix keeps the interface friendly while letting larger panels remain clearly separate. Borders are thin and pale, so the layout depends on spacing, surface color, and shape rather than heavy outlines.

## Visual language

The design language is soft and controlled rather than glossy or flashy. White panels are nearly flat, but they carry a faint blue or peach wash that gives the cards a sense of depth. Dark sections trade on atmosphere instead of texture: the hero and footer feel like stages, not containers. The blue-violet accent family ties the whole system together, while orange and green appear only where the page needs to signal a purchase decision or a recommended option.

The site also uses the code panel as a visual counterpoint. Black code blocks sit inside the otherwise airy layout and make the installation steps feel practical. That contrast is important: the brand sells an AI design system, but the page still wants to feel trustworthy and usable. The result is a calm interface with a few loud moments, not a loud interface with a few calm moments.

## Components

### Top navigation pill

The top bar is a centered rounded capsule rather than a full-width chrome strip. Links sit on the left, the brand mark sits in the middle, and account actions sit on the right. The pill shape and dark field make it feel separate from the page edge, which gives the hero room to breathe. Keep the text weight medium and the padding generous so the bar reads as a single object.

### Pricing cards

The main pricing cards are tall white panels with strong headings, a monthly and annual switch, a large price, a short descriptor, and a compact checklist. The Pro card uses the violet action button and blue checkmarks. The lifetime card uses the warm badge and orange button, which makes it read as a different path without changing the card structure. The card content is spaced so the price, benefits, and button each land in their own band.

### Top-up cards

The smaller pay-as-you-go cards are simpler and tighter. Each card stacks a pack name, price, credit count, and price-per-credit line, then ends with a button. The middle card receives the green `Best Value` badge, a green border, and a green action button. That treatment is enough to establish hierarchy without making the card taller or heavier than the others.

### FAQ panel

The FAQ sits inside a wide white accordion panel with a large title and a row-by-row question list. Each question line is separated by a thin divider and ends with a small chevron on the right. The first row is expanded, which creates a clear open-state pattern for the rest of the list. Keep the open answer in ordinary body text and let the row spacing do the work.

### Docs shell, quick start, and code blocks

The docs layout combines a left-side page index with a main reading column. The rail is quiet and ordered; the main content is more expressive, with bold section headings, short paragraphs, compact step cards, and black code blocks. The quick-start block uses numbered steps and a small architecture strip to turn setup into a sequence. Code blocks should keep the mono font, dark fill, and a visible copy affordance so the technical content feels intentional rather than decorative.

### Footer stage

The footer is the darkest and widest component on the site. It uses a small brand block, several link columns, a thin horizontal divider, muted legal text, and a giant translucent wordmark that spreads across the bottom. The large ghosted wordmark is the last visual note on the page, so it should stay low-contrast and expansive. It gives the site a memorable ending without competing with the navigation or legal copy.

## Responsive behavior

The page should keep the same order on smaller screens: hero or section heading first, primary action next, then cards, then support content. The pricing grids should collapse into a single column before the type becomes too tight. The docs rail should move above or below the content rather than forcing a cramped side-by-side layout. The footer can stack its link columns, but the brand block and legal copy should keep their relative order.

Card radius, badge shapes, and the mono code style should stay intact as the layout narrows. The main adjustment should be spacing: reduce the side gutters, keep the internal card padding readable, and preserve enough room for headings to wrap cleanly.

## Practical implementation guidance

### Preserve

- Keep the dark navy stage, white card field, and violet action color as the core identity.
- Use Made Outer Sans for the loudest headings and Plus Jakarta Sans for the rest.
- Keep orange and green as special-purpose accents only.
- Preserve pill controls, moderate card corners, and thin borders.
- Keep mono type limited to code, commands, and setup blocks.

### Avoid

- Avoid adding a second bright accent that competes with orange or green.
- Avoid square buttons, hard gray borders, or dense spreadsheet-like pricing tables.
- Avoid heavy shadows that fight the soft-card look.
- Avoid turning every panel into a separate visual object; the system depends on calm grouping.
- Avoid using display type for body copy or code type for labels.

### Recommended build order

1. Set the color tokens and type roles.
2. Build the top navigation pill and the hero/footer stage.
3. Add the pricing card system with the subscription and top-up variants.
4. Add the docs shell, FAQ accordion, and code blocks.
5. Finish with badge styles, button states, and spacing refinements.

### Accessibility

- Keep dark surfaces paired with white text and light surfaces paired with ink text.
- Give toggles, accordions, and buttons a clear selected state that is not color alone.
- Ensure focus styles are visible on links, buttons, accordion headers, and copy controls.
- Keep code blocks readable and avoid shrinking inline commands too far.
- Make sure small badge text remains legible against orange and green fills.

## Scope note

This guide covers the public home footer, pricing page, docs and troubleshooting pages, quick-start sections, FAQ accordion, and the shared card and button language across those surfaces. It does not define mobile breakpoints, motion, or alternate illustration systems. Verify licensing for these families before production use.
