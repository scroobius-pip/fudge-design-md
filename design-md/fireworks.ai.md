# How fireworks.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fireworks.ai-design)

Last updated: 2026-08-03

## Captured pages

[![White model detail page with a purple action row, right-side metadata rail, and fine divider lines](https://pin.fontofweb.com/8502?format=jpg)](https://design.withfudge.com/share/pin-8502)

[White model detail page with a purple action row, right-side metadata rail, and fine divider lines](https://design.withfudge.com/share/pin-8502)

[![Comparable model detail page showing the same split layout, card list, and pricing strip in a longer spec view](https://pin.fontofweb.com/6964?format=jpg)](https://design.withfudge.com/share/pin-6964)

[Comparable model detail page showing the same split layout, card list, and pricing strip in a longer spec view](https://design.withfudge.com/share/pin-6964)

[![Black hero section with an oversized white headline, violet buttons, and a vertical purple field](https://pin.fontofweb.com/6961?format=jpg)](https://design.withfudge.com/share/pin-6961)

[Black hero section with an oversized white headline, violet buttons, and a vertical purple field](https://design.withfudge.com/share/pin-6961)

[![Near-black footer with dense link columns, muted legal text, and thin structural separators](https://pin.fontofweb.com/6959?format=jpg)](https://design.withfudge.com/share/pin-6959)

[Near-black footer with dense link columns, muted legal text, and thin structural separators](https://design.withfudge.com/share/pin-6959)

[![Dark call-to-action band with a huge white heading and two violet rectangular buttons](https://pin.fontofweb.com/6953?format=jpg)](https://design.withfudge.com/share/pin-6953)

[Dark call-to-action band with a huge white heading and two violet rectangular buttons](https://design.withfudge.com/share/pin-6953)

## Overview

Fireworks.ai uses a hard-edged product language. The page alternates between white documentation-like surfaces and black promotional bands, then lets violet do the work of emphasis. The result is not decorative; it is legible and controlled. The hierarchy depends on a small set of moves: large Inter headlines, thin gray separators, compact action buttons, and broad blocks of white space around each model card.

The strongest impression is contrast. Model detail pages feel like structured reference sheets: a left content column, a right metadata rail, small icons, and tidy rows divided by 1px rules. Marketing sections shift to full-bleed black or deep charcoal, then add large white headings and violet actions. The footer stays near-black and quiet, which makes the rest of the site feel even sharper.

The system should preserve three things above all else: the black-and-violet action vocabulary, the disciplined use of borders instead of shadow, and the simple Inter hierarchy that makes technical content easy to scan.

## Colors

| token | value | use |
|---|---|---|
| `canvas` | `#FFFFFF` | Main page background, card backgrounds, and white promotional sections |
| `ink` | `#000000` | Primary text on white surfaces and dark footer contrast on light sections |
| `ink_muted` | `#5A5E63` | Supporting copy, explanatory text, and secondary labels |
| `ink_soft` | `#696969` | Less prominent metadata, fine-print body text, and subdued footer copy |
| `border` | `#E6EAF4` | Hairline separators, table rules, and card edges on white surfaces |
| `border_soft` | `#E8E8E8` | Softer panel borders where the outline should stay quiet |
| `surface_tint` | `#F6F2FF` | Pale violet fill for light emphasis and soft product framing |
| `surface_quiet` | `#F6F4FC` | Very light neutral-violet background for inset rows or subtle blocks |
| `accent_lilac` | `#E5D4FF` | Light violet emphasis, secondary fills, and quiet accent panels |
| `action` | `#6720FF` | Primary buttons, active links, and the brand’s main call to action |
| `action_bright` | `#6726FE` | Slightly brighter violet used beside `action` for close-range contrast |
| `action_deep` | `#501BC4` | Deeper violet for the gradient strip and stronger button depth |
| `action_ink` | `#3C1590` | Dark violet anchor used when the accent band needs more weight |
| `surface_dark` | `#16181D` | Deep section background for the promotional and utility dark areas |
| `footer_dark` | `#000000` | Footer ground and the darkest promotional bands |
| `status_success` | `#1DA28F` | Ready or success badges, used sparingly and only for state |

The light system is mostly white with neutral gray rules. Violet is the only persistent action color, and it expands from bright button fills into dark-to-bright promotional bands. Dark surfaces stay almost black, not blue-black, so white text reads cleanly. Green appears only as a status signal and should never compete with the core violet action.

## Typography

Inter is the only type family in the packet. It carries the entire interface: navigation, body copy, status chips, model names, and the oversized promotional headings. No attribution claim is supplied for the family, so licensing should be confirmed separately before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero_display` | Inter | 3.75rem | 550 | 1 | -0.04em | Large homepage and campaign headlines |
| `section_display` | Inter | 3rem | 550 | 1 | -0.04em | Dark CTA headings and major page statements |
| `feature_display` | Inter | 1.875rem | 550 | 1.2 | -0.04em | Model names, major card titles, and bold section headings |
| `metric_display` | Inter | 8rem | 550 | 1 | -0.04em | Oversized numbers, prices, or throughput figures |
| `body_large` | Inter | 1.125rem | 400 | 1.55 | 0em | Introductory model summaries and longer explanatory text |
| `body` | Inter | 1rem | 400 | 1.5 | 0em | Main prose, card descriptions, and interface copy |
| `body_medium` | Inter | 1rem | 550 | 1.5 | 0em | Button labels and stronger inline emphasis |
| `nav` | Inter | 0.875rem | 550 | 1.43 | 0.04em | Top navigation, small buttons, and utility links |
| `label` | Inter | 0.875rem | 550 | 1.43 | 0em | Status pills, metadata labels, and compact section markers |
| `legal` | Inter | 0.75rem | 400 | 1.5 | 0em | Footer legal text and the quietest supporting copy |

The hierarchy is simple and confident. Large headings compress vertically with tight leading and a slight negative track, which makes the brand feel fast without becoming flashy. Body copy stays open enough to scan in dense panels. Navigation and labels lean on weight and letter spacing rather than color alone, so the interface keeps its precision even when viewed quickly.

## Layout

The layout is centered and disciplined. On white model pages, content sits in a broad shell with generous outer margins and a fixed right rail for metadata. On promotional pages, the content can go full-width, but the inner rhythm remains the same: a clear headline, one supporting sentence, and one or two actions. The page never crowds the edges with content; it keeps a stable amount of breathing room around every key block.

The white model-detail pages use a split composition. The left side holds the model name, short description, feature list, and pricing or availability strip. The right side collects metadata, specification, and support rows in a narrow rail. This creates a reference-sheet feel. The visual weight is balanced by consistent card widths, even row heights, and thin separators rather than heavy boxes.

The homepage and campaign sections change mood through full-bleed bands. The black hero uses a large title on the left and a violet field on the right, which gives the section a billboard feel without using imagery. The dark CTA band follows the same logic: huge heading, small subhead, rectangular violet buttons, and a broad dark field that leaves most of the frame empty. The footer closes the story with a dense grid of columns and a low-contrast legal line, which reduces energy at the bottom without making the page feel unfinished.

Spacing is calm and repetitive. Cards often use 24px internal padding, larger sections lean on 64px to 96px vertical space, and the footer uses a deeper 96px top offset before the link grid begins. Hairline rules separate rows and regions more often than shadows do. That is a key part of the structure: the page looks engineered, not layered.

## Visual language

The site’s visual language is built from contrast, restraint, and clear function. White panels are paired with black or near-black callouts. Violet buttons are rectangular, filled, and high priority. Status pills are smaller and rounder, which keeps them visually subordinate to the main actions. Nothing feels ornamental unless it serves a label or a state.

Icons are small and utilitarian. They sit beside titles or metadata lines and help the viewer locate the type of information without becoming decoration. The supporting graphics in the marketing bands stay geometric and abstract: pure color blocks, broad gradients, and large type. The system does not need illustration to communicate energy.

Borders matter more than shadows. A 1px rule is the default separator, and it is visible enough to organize the page without making the panels feel boxed in. Rounded corners are modest and limited to cards and pills. The stronger the element’s job, the more likely it is to stay square or nearly square. That keeps the visual language direct and technical.

Color follows function rather than mood. Violet means action. Green means ready state. White and black handle the main canvas. Light violet is used for quiet emphasis, not as a decorative wash. This discipline gives the interface a fast, engineering-first personality.

## Components

### Announcement bar

- **Anatomy:** One-line message centered across the full width, sometimes with a short directional cue at the end.
- **Surface:** Black ground with white text, occasionally paired with a violet field at the edges.
- **Typography:** Small, compact Inter with strong weight and tight tracking.
- **Visible state:** It reads like a live site notice, not a banner ad. Keep it brief and high contrast.

### Top navigation

- **Anatomy:** Left brand mark, centered product categories, right-side log-in and primary get-started action.
- **Typography:** `nav` for all links and utility items.
- **Shape:** The primary action stays rectangular; the rest remain plain text links.
- **Composition:** The navigation should stay visually lighter than the hero beneath it. It frames the page, not competes with it.

### Primary action

- **Anatomy:** Filled violet rectangle with white label text.
- **Surface:** Use `action` as the default fill and `action_bright` when the label needs slightly more pop.
- **Typography:** `nav` or `body_medium`, depending on button scale.
- **Shape:** Small `0.5rem` corner radius at most. The button should feel crisp rather than pill-like.
- **Hierarchy:** It is the strongest interactive element on the page and should never share the same visual weight with secondary actions.

### Secondary action

- **Anatomy:** White button with a thin gray border and dark text.
- **Surface:** Flat, quiet, and bordered rather than filled.
- **Typography:** `nav`.
- **Composition:** Use it beside the primary action to show a lower-priority path without changing the visual language.
- **Visible state:** The border should remain readable against both white and pale-violet surfaces.

### Model header cluster

- **Anatomy:** Breadcrumb, model name, small readiness chip, compact model slug, and a row of actions.
- **Typography:** `feature_display` for the model name, `label` for the chip, `body` or `nav` for the slug.
- **Shape:** The status chip is a pill; the slug field is a restrained rectangle.
- **Spacing:** Keep the header open and airy. The actions sit to the right, separated from the title block by a clear gap.
- **Visible state:** The readiness chip uses green and must stay small enough that the model name remains the hero of the row.

### Metadata rail

- **Anatomy:** A stacked list of label/value pairs, each with a small icon and a strong right-aligned value.
- **Surface:** White panel with thin dividers and quiet row spacing.
- **Typography:** Labels stay small; values sit slightly stronger to keep the rail scannable.
- **Composition:** The rail should remain narrow and orderly, with a consistent rhythm from top to bottom.
- **Visible state:** This area carries facts, not marketing. Keep it compact and low drama.

### Feature list cards

- **Anatomy:** Small icon block, feature title, and one-line description arranged in rows.
- **Surface:** White card with light border and even padding.
- **Typography:** `body_medium` for the title and `body` for the supporting line.
- **Shape:** Straightforward rectangular cards; let the spacing do the work.
- **Composition:** Use repeated rows rather than a dense paragraph. That mirrors the product’s technical posture.

### Pricing strip

- **Anatomy:** Availability note on one side and a large price or rate figure on the other.
- **Typography:** `body_medium` for the label and `metric_display` or a smaller scaled version of it for the rate.
- **Surface:** White with a subtle border.
- **Visible state:** The number should dominate the strip. The descriptive copy stays secondary and understated.

### Dark CTA band

- **Anatomy:** Oversized heading, short supporting copy, and one or two violet buttons.
- **Surface:** Black or near-black, with a violet field or stepped violet background on one side.
- **Typography:** `section_display` for the heading and `body_large` for the subhead.
- **Composition:** Leave empty space around the message so the block feels bold instead of crowded.
- **Visible state:** This section should feel like a strong closing move, not a content card.

### Footer

- **Anatomy:** Brand mark, multiple link columns, then legal and social utility at the bottom.
- **Surface:** `footer_dark` with muted white or gray text.
- **Typography:** `body`, `legal`, and small bold column headings.
- **Composition:** Tight columns above, quieter legal copy below. The footer should recede while still remaining usable.

## Responsive behavior

On narrower layouts, the centered shell should collapse into a single column before any content becomes cramped. The metadata rail should stack below the main model content, and the action row should wrap without reducing button legibility. Headings can step down one size, but the hierarchy between model name, body text, and metadata must stay intact.

The dark promotional bands should keep their large headline-first structure on smaller screens, but the violet field or side gradient should compress into a simpler block so the text remains dominant. Link columns in the footer should reduce to two columns or one column as needed, with spacing preserved between groups so the page does not turn into a dense wall of links.

Touch targets should stay roomy. Rectangular buttons need enough horizontal padding to remain easy to tap, and the status chip should remain clearly separate from the model title. If a row of actions cannot fit inline, the primary action should remain visually first.

## Practical implementation guidance

### Preserve

- Keep Inter as the only family. The visual identity depends on one consistent sans.
- Keep violet as the only persistent action color.
- Keep borders visible. The 1px rule is part of the brand’s clarity.
- Preserve the white/black alternation between product pages and campaign bands.
- Preserve the compact, technical rhythm of labels, metadata, and cards.

### Avoid

- Avoid soft shadows and floating surfaces; the system is too precise for that.
- Avoid rounded pills for the main buttons. Reserve the pill shape for state chips.
- Avoid mixing extra accent colors into primary UI elements.
- Avoid crowded hero blocks or stacked paragraphs in the model pages.
- Avoid decorative illustration where a simple band, gradient, or icon row will do.

### Recommended build order

1. Build the Inter type scale and the violet action palette.
2. Build the white model page shell with the metadata rail and thin separators.
3. Add the header cluster, feature rows, and pricing strip.
4. Add the black hero and dark CTA band as reusable full-width sections.
5. Finish with the footer grid and legal line.
6. Check the narrow layout so the rail, actions, and footer columns stay readable when stacked.

### Accessibility

- Keep white text on black and violet text on white at strong contrast.
- Do not rely on green alone to communicate readiness; keep the badge text explicit.
- Make sure focus styles remain visible on filled violet and bordered white buttons.
- Keep link labels descriptive enough that the metadata rail and footer can be scanned without guessing.
- Preserve readable line lengths in the long model description blocks.

## Scope note

This guide covers the desktop model detail pages, the black homepage hero, the dark CTA band, and the footer on fireworks.ai. It does not include mobile-specific stacking, hover or focus styling, loading states, motion, or exact interaction timing. The spacing values are aligned to the packet’s 4px-based scale.
