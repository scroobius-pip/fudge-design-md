# How getkleio.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/getkleio.com-design)

Last updated: 2026-08-03

## Captured pages

[![Centered hero with oversized black headline and orange Shopify emphasis](https://pin.fontofweb.com/7328?format=jpg)](https://design.withfudge.com/share/pin-7328)

[Centered hero with oversized black headline and orange Shopify emphasis](https://design.withfudge.com/share/pin-7328)

[![Feature tabs above the framed inventory table and status chips](https://pin.fontofweb.com/7327?format=jpg)](https://design.withfudge.com/share/pin-7327)

[Feature tabs above the framed inventory table and status chips](https://design.withfudge.com/share/pin-7327)

[![Pricing card with code-like plan block and black CTA button](https://pin.fontofweb.com/7326?format=jpg)](https://design.withfudge.com/share/pin-7326)

[Pricing card with code-like plan block and black CTA button](https://design.withfudge.com/share/pin-7326)

[![Comparison table with thin rules and orange-highlighted price column](https://pin.fontofweb.com/7322?format=jpg)](https://design.withfudge.com/share/pin-7322)

[Comparison table with thin rules and orange-highlighted price column](https://design.withfudge.com/share/pin-7322)

[![Stacked FAQ accordion inside a light shell with one row open](https://pin.fontofweb.com/7324?format=jpg)](https://design.withfudge.com/share/pin-7324)

[Stacked FAQ accordion inside a light shell with one row open](https://design.withfudge.com/share/pin-7324)

[![Founder story block with small avatar and the closing footer band](https://pin.fontofweb.com/7321?format=jpg)](https://design.withfudge.com/share/pin-7321)

[Founder story block with small avatar and the closing footer band](https://design.withfudge.com/share/pin-7321)

## Overview

Kleio is a stripped-back SaaS landing page built around a single idea: reduce visual noise so the pricing and product claim land fast. The page stays in a pale neutral range, then uses orange only where the eye should land first. The result feels analytical, not flashy. It is closer to a tidy product memo than a lifestyle brand.

The structure is centered and deliberate. A thin top bar carries the brand and a short set of links. The hero uses a huge two-line headline, a compact supporting paragraph, and a boxed call-to-action area that looks like a small app window. Below that, the page repeats the same grammar: section label, strong heading, centered supporting copy, then a framed module such as tabs, a table, a pricing card, a comparison grid, or a FAQ block.

The design works because almost everything is quiet. Borders are light, cards are white, copy is black or gray, and orange is reserved for labels, emphasis, active states, and a few status moments. There is very little ornament. The page depends on scale, spacing, and box structure rather than effects.

## Colors

Kleio’s palette is almost entirely neutral. The canvas sits at a soft off-white, not a stark white, so the cards can still read as separate surfaces without heavy contrast. White panels are used for the framed hero card, the feature card, the pricing block, the compare table, and the FAQ shell. A lighter white, `surface-alt`, helps when a section needs a softer card or a subtle inset.

Black is the anchor color. It handles the logo, the headline, the primary button fill, and the strongest table text. Gray does the supporting work. `muted-ink` is the main secondary copy tone; `subtle-ink` is for smaller notes, helper lines, and low-priority labels. Borders stay pale and consistent, so the page reads as one system instead of a pile of separate containers.

Orange is the only vivid accent family. `accent` and `accent-strong` appear in the section labels, highlighted words in headings, selected or active states, and a few inline emphasis moments. The pair should stay reserved. If orange spreads into every element, the page loses its calm, sharp hierarchy. The success, warning, and danger tones are visible only as small table badges and status chips; they are useful for data meaning, not as decorative color.

A limited photographic accent appears in the founder-story area, where the small headshot adds a localized warm note. It stays separate from the UI token set, which remains neutral, black, gray, and orange. The safest relationship is: neutral surfaces carry the structure, black carries the message, gray carries the supporting detail, orange carries the attention, and the headshot adds a small human accent without changing the system.

## Typography

The packet names two material families: System and Arial. The page leans almost entirely on System and uses Arial only in a few utility spots. No family-specific attribution is supplied. No separate font license claim is supplied in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | System | 4rem | 600 | 1.1 | -0.03em | Main hero headline and other largest statements |
| `section-display` | System | 2.5rem | 600 | 1.2 | -0.02em | Section titles, pricing headline, compare headline |
| `body` | System | 1rem | 400 | 1.6 | 0em | Supporting copy, explanation text, founder story prose |
| `body-strong` | System | 1rem | 600 | 1.6 | 0em | Price figures, emphasized line items, strong inline notes |
| `table-body` | System | 0.875rem | 400 | 1.6 | 0em | Table cells, comparison rows, compact explanatory lines |
| `navigation` | System | 0.75rem | 500 | 1.4 | 0em | Header links, tabs, compact utility text |
| `button` | System | 0.75rem | 500 | 1 | 0.03em | Primary CTA labels and small window actions |
| `eyebrow` | System | 0.6875rem | 500 | 1.4 | 0.05em | Orange section labels and small uppercase markers |
| `legal` | System | 0.8125rem | 400 | 1.6 | 0em | Footer notes, secondary metadata, small explanatory text |
| `utility` | Arial | 0.875rem | 400 | 1.4 | 0em | Sparse utility text where the page shifts away from the main System voice |

The hierarchy depends on scale more than on many weights. The hero line is oversized and compact. Section headings stay bold but less dramatic. Supporting copy opens up to a looser line height so the page breathes. Small labels and tabs rely on tighter scale, not heavy weight, to stay legible without becoming loud. The page feels even because every line category is short and well separated; there are no dense editorial blocks trying to compete with the main claim.

## Layout

The desktop layout is a centered vertical stack. The content column is narrow enough that the headline can dominate without spanning the full browser width, but wide enough that tables and cards can still breathe. Large side gutters create a lot of empty canvas on desktop, which makes the modules feel intentional rather than crowded. Internal padding inside cards is much smaller than the outer whitespace, so every panel reads as a contained object.

The top bar is thin and close to the viewport edge. It uses a small logo block on the left and a row of short links across the top. That header never becomes a heavy band; it behaves like a quiet frame for the page. The hero follows with a centered badge, a large headline, a centered paragraph, and a framed CTA panel. The CTA area is not a plain button by itself; it is a small window-like shell with its own chrome, which makes the offer feel more concrete.

Lower sections repeat the same centered rhythm. The features area uses a section label, a bold heading, a strip of pill tabs, and a large framed table or dashboard card. The pricing area shifts to a card-like code block with a label line, a price line, and a button below. The compare section turns into a wide table with clean horizontal rules and a highlighted rightmost column. The FAQ uses a stacked accordion with one item open and the rest closed, all within a centered shell. The final story and footer keep the same column width, then taper into smaller text and tighter link lists.

Spacing is disciplined. Most modules feel aligned to 24px inner padding, 16px or 20px cell spacing, and 48px or larger section gaps. Very little is flush or dense. The page uses box separation, not background changes, to tell you where one thought ends and the next begins.

## Visual language

Kleio’s visual language is spreadsheet-clean and window-like. The page borrows from native application chrome: rounded white panels, tiny control dots, thin separators, and code-like filenames or window labels. That framing makes the product feel practical and tool-shaped rather than decorative. It also gives the landing page a subtle technical texture without introducing literal screenshots of software.

Orange carries the identity. It appears in small uppercase labels, in emphasized words inside headings, and in the active or winning states inside tables and tabs. It is not used as a wash or background fill. That restraint matters. Because the rest of the page is so neutral, one orange word or chip is enough to signal importance.

The page also uses state contrast very carefully. In the tab strip, the active pill is black with white text while the inactive pills are white with light borders and gray text. In the compare table, positive states turn green, warnings turn amber, and negative states turn red. In the pricing card, the black action button sits beneath a centered plan summary so the price remains the most visible part of the panel. In the FAQ, the open row swaps the plus marker for a different marker and reveals a short answer beneath the question. These are small but readable state changes that keep the system from feeling static.

Borders are the main structural line work. There are no heavy shadows, no loud gradients, and no deep card elevation. The visual rhythm comes from clean edges, modest corner radii, and large margins around each framed module. The overall feeling is orderly and somewhat ascetic, which suits a page that wants to sell clarity and price discipline.

## Components

### Top navigation

- **Anatomy:** Left-aligned brand mark, a compact row of text links, and a sparse utility area on the right.
- **Surface:** The bar sits on the page canvas with no strong fill and only a faint bottom divider.
- **Typography:** Small System links with medium weight and tight spacing.
- **Shape:** Links are plain text, with subtle padding rather than pill styling.
- **Composition:** Keep it light. The header should frame the page, not compete with the hero.

### Hero badge

- **Anatomy:** A tiny uppercase label inside a white chip with a hairline border.
- **Typography:** `eyebrow`.
- **Surface:** White chip on the off-white canvas, which keeps the label visible without making it loud.
- **Shape:** Small rounded corners, matching the control radius.
- **Visible state:** It reads like a calm introduction line before the large headline.

### Primary button

- **Anatomy:** A single full-width black button with white text.
- **Typography:** `button`.
- **Surface:** Solid `action` fill.
- **Shape:** Use the smaller control radius so the button feels compact rather than pill-shaped.
- **Hierarchy:** It should be the strongest interactive object in the module, but not visually oversized.

### Pricing card

- **Anatomy:** A centered price module with a small section label, a dominant price line, a compact plan summary, a short feature list, a black action button, and a reassurance line beneath.
- **Surface:** White card with a thin border and modest corner radius.
- **Typography:** `section-display` for the price line, `body` for the plan copy, `button` for the CTA, and `legal` for the reassurance line.
- **Composition:** Stack the parts vertically so the price and the call to action read as one unit.
- **Visible state:** The price is the strongest element. Supporting copy stays muted and compact.

### Tab pills

- **Anatomy:** A horizontal set of compact pills with one active selection.
- **Typography:** `navigation`.
- **Surface:** Inactive pills are white with gray borders; the active pill turns black with white text.
- **Shape:** Small rounded corners, not capsules.
- **Visible state:** The active tab should have enough contrast that it still reads as selected when the row is viewed at a glance.

### Window shell

- **Anatomy:** A bordered white panel with a thin header strip and tiny control dots.
- **Surface:** White or near-white fill with a faint border.
- **Shape:** Panel radius at the larger end of the scale.
- **Composition:** Use it for the hero CTA block, the feature table, the pricing card frame, and other framed modules.
- **Visible state:** The shell should feel like a browser or app window, even when it contains only text and a table.

### Data table

- **Anatomy:** Column labels, compact rows, and small status chips on the right.
- **Typography:** `table-body` for cells; stronger text only where a number or status needs emphasis.
- **Surface:** White background with horizontal separators.
- **Shape:** Straight edges with rounded container corners, so the table feels orderly and engineered.
- **Visible state:** Row content is plain, with color used only for status meaning.

### Comparison table

- **Anatomy:** A header row, a left-hand feature column, several product columns, and a rightmost brand column with the strongest emphasis.
- **Typography:** `table-body` with selective bolding for the home brand price or best-in-class mark.
- **Surface:** White shell, thin separators, and no heavy shading.
- **Shape:** Broad rectangular frame with a restrained radius.
- **Composition:** Keep the row rhythm steady so the eye can compare across columns without distraction.
- **Visible state:** Green checks, red x marks, and an orange brand price provide the only strong signals.

### FAQ row

- **Anatomy:** One question per row, an orange marker at the left, and an answer that appears directly beneath the open question.
- **Typography:** `body` for the question and answer text.
- **Surface:** White shell with thin top dividers between rows.
- **Visible state:** Closed rows stay terse; open rows expand into a short paragraph and change the marker.
- **Composition:** Keep the answer brief and aligned to the same text column as the question.

### Founder story block

- **Anatomy:** A narrow centered narrative column with a bold heading, several paragraph blocks, and a small author line that can include a tiny avatar.
- **Typography:** `section-display` for the heading, `body` for the paragraphs, and `legal` for the author line.
- **Surface:** Open canvas rather than a boxed card, so the section feels editorial and calm.
- **Composition:** Let the copy breathe with generous vertical spacing and a thin rule before the signature line.
- **Visible state:** It reads as a reflective pause before the footer.

### Footer

- **Anatomy:** Small brand line, a tight link cluster, and low-emphasis legal text.
- **Typography:** `legal` and compact utility text.
- **Surface:** Canvas background with a faint top border.
- **Hierarchy:** The footer should feel like the last quiet band on the page, not a second navigation bar.

## Responsive behavior

On smaller screens, the page should keep the same reading order: header, hero, CTA block, feature module, pricing, comparison, FAQ, founder story, footer. The type scale should compress before the modules do. The tabs should either wrap cleanly or become horizontally scrollable without breaking their active-state contrast. Tables should keep their column meaning, but if they collapse, the most important numbers and statuses must remain visible.

The hero should avoid becoming a tall empty poster on mobile. Keep the headline tight, let the CTA sit close to the supporting copy, and reduce the unused side gutters aggressively. Window shells should retain their borders and small control dots, but their internal padding can drop before the whole module is restyled. The goal is to preserve the page’s framed, centered feeling even when the viewport narrows.

## Practical implementation guidance

### Preserve

- Keep the layout centered and calm. The page’s personality comes from the quiet whitespace around the modules.
- Keep the black/gray/orange balance intact. Black is the message, gray is the support, and orange is the highlight.
- Preserve the window-shell treatment on major cards. It is one of the clearest signals that the product is a tool, not a brochure.
- Keep borders light and consistent. The page depends on edges, not elevation.
- Preserve the compact headline scale and the strong contrast between the hero and the rest of the body copy.

### Avoid

- Avoid adding shadows as decoration. The supplied views stay flat.
- Avoid filling whole sections with orange or any other strong color.
- Avoid turning every chip into a pill. The page works because controls stay small and efficient.
- Avoid heavy image-led art direction. The supplied views rely on type and tables, not visuals.
- Avoid mixing in extra font families or ornamental display faces. The System voice should remain dominant.

### Recommended build order

1. Build the base canvas, header, and shared type scale.
2. Create the hero badge, headline, supporting copy, and CTA shell.
3. Build the tab row and the framed dashboard/table module.
4. Add the pricing card with the black CTA.
5. Add the comparison table with status chips and row rules.
6. Add the FAQ accordion shell and its open/closed states.
7. Add the founder story block and the footer.
8. Tune spacing so the modules feel centered and evenly separated at desktop widths.

### Accessibility

- Keep text contrast high enough on all neutral surfaces, especially for small labels and footer text.
- Give the tabs, buttons, and accordion rows clear focus states that are visible against white and off-white backgrounds.
- Use real table semantics for the comparison and inventory-style blocks so screen readers can track headers and row meaning.
- Make the FAQ toggle control large enough to hit comfortably, even if the visible marker stays small.
- Keep the orange accent from becoming the only signal. Selected states should also change fill, border, or weight so the meaning does not depend on color alone.

## Scope note

This guide covers the light desktop landing page for Kleio: top navigation, hero, feature tabs, pricing card, framed tables, FAQ, founder story, and footer. It does not define mobile breakpoints, motion, hover behavior, loading states, error states, or alternate theme behavior. Relative-unit values are rounded to the packet’s 2px step.
