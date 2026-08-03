# How accounts.theatlantic.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/accounts.theatlantic.com-design)

Last updated: 2026-08-03

## Captured pages

[![Dark hero band with serif headline, two centered plan cards, and red subscribe pill](https://pin.fontofweb.com/9224?format=jpg)](https://design.withfudge.com/share/pin-9224)

[Dark hero band with serif headline, two centered plan cards, and red subscribe pill](https://design.withfudge.com/share/pin-9224)

[![White free-trial layout with left editorial headline and right benefit card](https://pin.fontofweb.com/9223?format=jpg)](https://design.withfudge.com/share/pin-9223)

[White free-trial layout with left editorial headline and right benefit card](https://design.withfudge.com/share/pin-9223)

## Overview

The Atlantic accounts surface is editorial commerce: a magazine-toned subscription experience that uses a black or near-black hero band, cream paper fields, and white cards to sell access with restraint. The page does not feel like a utility checkout. It feels like a premium publishing offer laid out with the confidence of a print spread.

The strongest visual tension comes from the contrast between the dark top band and the light purchasing area below it. The hero carries a large serif headline and a short supporting sentence, then gives way to centered plan cards with tiny product images, quiet pricing, and a single dark or red call to action. The free-trial page shifts the balance slightly: more white space, a large editorial headline on the left, and a bordered benefits panel on the right.

The system is built from a narrow palette, two serif voices, one sans-serif utility face, and one monospace button face. That small set is enough because the structure is already clear: brand line, offer statement, plan cards, supporting notes, then a second promotional block.

## Colors

The palette is deliberately sparse. Black and near-black do most of the heavy lifting, while cream and white keep the page open and formal. The red accent is not decorative noise; it is reserved for the most committed actions, so it reads as a single brand signal rather than a general highlight color.

### Core palette

| token | value | role |
|---|---|---|
| `canvas` | `#F8F7F4` | Main page field and the soft cream surrounding the card grid |
| `paper` | `#FFFFFF` | White cards, white panels, and the lighter header surfaces |
| `soft-surface` | `#F9FAFC` | The cooler quiet surface used in lower, secondary sections |
| `ink` | `#000000` | Main text, the most direct labels, and the compact body copy |
| `muted-ink` | `#6F6C69` | Tax notes, shipping notes, and low-emphasis support text |
| `border` | `#E7E3DB` | Card outlines, dividers, and the thin frame around the benefit box |
| `action` | `#2C2825` | Dark buttons, the top band, and the strongest text blocks on light surfaces |
| `accent` | `#B1383C` | Subscribe and trial calls to action |
| `hero-band` | `#2C2825` | The campaign strip behind the main offer statement |

The relationship between these colors matters more than the individual hues. `action` and `hero-band` share the same dark coffee-black tone, which ties the pricing cards to the hero strip. `canvas` and `paper` stay close in value, so the page looks paper-based rather than starkly digital. `border` is only slightly warmer than the white surfaces, so the cards remain crisp without becoming boxed-in. `accent` appears only at the top level and in the primary trial button, which makes it feel intentional and scarce.

## Typography

The page relies on four families, each with a specific job. Atlantic 190927 gives the wordmark and the main campaign headline their tall editorial presence. Adobe Garamond Pro carries the more overtly literary headings and paragraphs. Graphik handles the system text that must stay efficient: navigation, prices, notes, and legal copy. Goldwyn Mono appears in the compact button labels, which gives the actions a slightly mechanical and disciplined edge.

Licensing for reuse should be confirmed separately.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `brand-mark` | Atlantic 190927 | 2.8125rem | 400 | 1.2 | 0.044em | Wordmark and the most overt campaign headline style |
| `hero-display` | Adobe Garamond Pro | 3.875rem | 400 | 1.25 | 0em | Free-trial headline and other dominant editorial statements |
| `section-display` | Adobe Garamond Pro | 2.25rem | 400 | 1.2 | 0em | Section headings, plan names, and major supporting titles |
| `card-title` | Adobe Garamond Pro | 1.5rem | 400 | 1.2 | 0em | Plan titles and short emphasis blocks inside cards |
| `body-serif` | Adobe Garamond Pro | 1.25rem | 400 | 1.5 | 0em | Offer copy and short explanatory paragraphs |
| `navigation` | Graphik | 0.875rem | 500 | 1.15 | 0em | Top navigation, help, sign out, and similar utility labels |
| `body` | Graphik | 1rem | 400 | 1.15 | 0em | Prices, short list items, and general informational copy |
| `legal-copy` | Graphik | 0.625rem | 400 | 1.2 | 0em | Fine print, tax copy, and shipping notes |
| `button-label` | Goldwyn Mono | 1rem | 300 | 1 | 0em | Subscribe and Select labels |

The hierarchy depends on scale, not on many font families. The serif headlines sit large and open, with generous leading and very little tracking change except in the wordmark. The utility text stays tight and readable, with compact line heights that keep the card content from feeling airy. The button face is the sharpest note in the system; it is small, centered, and deliberately plain.

## Layout

The desktop layout reads like a magazine spread built from a few strong anchors. The first anchor is the hero band: a full-width dark strip with the wordmark at the edge, a centered headline, and a short line of supporting copy. The second anchor is the plan grid. Two white cards sit side by side with a moderate gutter, equal visual weight, and generous internal padding. The third anchor is the note row below the cards, where tiny text and payment marks are compressed into a calm, low-emphasis band.

The cards themselves are extremely stable. Their width is fixed enough to read as units, not as responsive guesses. Each card keeps the same internal order: small product image at the top, plan name, price line, explanatory copy, optional add-on checkbox line, and a button near the bottom. The layout relies on vertical rhythm and white space rather than dense separators.

The free-trial page shifts the composition into a more editorial two-column arrangement. The left column is mostly text: a small kicker, a large serif headline, and a supporting paragraph. The right column is a bordered benefit panel that stacks its own sub-sections. The panel is a calm box inside a very open field, which lets the red button and the checklist do the talking. Below that, a centered upsell block uses a small kicker, a wide serif paragraph, and a single dark button.

Across both page states, the spacing is roomy but not loose. The system favors 24px outer padding, 32px panel gaps, 64px section separation, and 80px to 100px of vertical breathing room where the page needs a chapter break. Thin 1px borders and 4px corners keep the shapes formal and controlled.

## Visual language

The visual language is editorial, not promotional in the modern SaaS sense. The page uses serif type for authority, plain white cards for legibility, and a dark hero band for drama. The result feels closer to a subscription desk in a high-end magazine than to a typical commerce funnel.

Three traits give the system its character:

- **Formal contrast.** The dark hero band and the white card field create a strong top-to-bottom change in mood.
- **Sparse accenting.** Red appears only where the brand needs a direct commitment. It never becomes a decorative wash.
- **Controlled ornament.** The small product images, the wordmark, and the checklist icons supply enough detail. There is no need for extra gradients, shadows, or decorative framing.

The card surfaces are plain because the typography already carries taste. The product images are small and centered, which makes them feel like inserts rather than hero art. On the free-trial page, the checklist inside the benefit box gives the panel a precise, editorial rhythm: short lines, repeated checkmarks, and a measured hierarchy from title to list to add-on prompt to button.

## Components

### Header shell

- **Anatomy:** Wordmark, navigation links, help or account action, and a prominent subscribe button.
- **Surface:** White or very light paper surface with dark text.
- **Typography:** `navigation` for the utility links; the wordmark uses the brand-mark treatment.
- **Shape:** The action button stays modestly rounded, matching the rest of the system.
- **Composition:** Keep the wordmark light and centered in the free-trial state, but let the product page header stretch wider with more links.
- **Visible states:** The Subscribe control reads as the strongest element in the bar because of the red fill.

### Hero band

- **Anatomy:** Large serif statement, short supporting line, and a tiny right-side image cluster or magazine object.
- **Surface:** `hero-band` with white type.
- **Typography:** `brand-mark` for the wordmark and `hero-display` or a related large serif scale for the statement.
- **Spacing:** Wide top and bottom breathing room; the copy sits well away from the edges.
- **Composition:** The band should feel like a stage, not a banner ad. Keep the text centered and the side image small enough to remain secondary.

### Plan card

- **Anatomy:** Product image, plan title, price, explanatory paragraph, optional add-on line, and a button.
- **Surface:** White paper with a fine `border`.
- **Typography:** `section-display` for the plan name, `body` for the price line and explanatory copy, and `button-label` inside the action.
- **Shape:** Modest 4px corners; no heavy shadow.
- **Spacing:** Generous interior padding, with enough distance between the image, title, price, and button that each step reads separately.
- **Visible states:** One card may include a checkbox row; keep that row visually quiet so the button still anchors the card.

### Support panel

- **Anatomy:** Title, checklist, small add-on prompt, button, and fine print.
- **Surface:** White or `soft-surface` with a clear border.
- **Typography:** `section-display` for the panel title, `body` for the checklist, and `legal-copy` for the small notes.
- **Composition:** Stack the checklist tightly enough to feel like a benefits list, then leave more room before the button so the CTA lands clearly.
- **Visible states:** Use the red button only in this stronger trial context; it should feel like a direct conversion step.

### Primary action

- **Surface:** `action` or `accent`, depending on the page state.
- **Typography:** `button-label`.
- **Shape:** 4px corners with a full-width, centered label.
- **Hierarchy:** The dark version reads as the steady default action; the red version reads as the strongest commitment.
- **Visible states:** Keep the fill flat and the text centered. The button should not need extra decoration to feel important.

### Fine print row

- **Anatomy:** Tax notes, shipping notes, and payment marks.
- **Typography:** `legal-copy` for the text; the marks stay visually quiet.
- **Color:** `muted-ink` rather than `ink`.
- **Spacing:** Compress this row enough that it supports the cards without competing with them.
- **Visible states:** Nothing here should shout. It should sit close to the bottom of the card block and disappear behind the main offer.

## Responsive behavior

The desktop composition should collapse without losing the page’s editorial order. The hero band remains first, the offer stays clear, and the plan cards should stack before any low-emphasis copy starts to compete with them. On narrower screens, the two-up card grid should become a single column, the right-side benefit box should drop below the main trial copy, and the long serif headline should shorten its line length without changing its tone.

The key mobile rule is restraint: preserve the dark band, preserve the white cards, and preserve the red accent. Do not introduce extra panels, sticky promos, or dashboard-like side rails to solve the smaller viewport. The structure is already strong enough to survive a simpler stack.

## Practical implementation guidance

### Preserve

- Keep the palette small and disciplined. Black, cream, white, muted gray, and one red accent are enough.
- Preserve the gap between the hero band and the card field; that chapter break is part of the brand voice.
- Keep the plan cards plain and centered. Their job is to present options, not to become illustrations.
- Let the serif hierarchy remain dominant. The page should feel editorial before it feels transactional.
- Keep borders thin and corners modest. The system depends on calm geometry.

### Avoid

- Avoid bright blues, saturated gradients, and dashboard-style chrome.
- Avoid heavy shadows or floating card stacks. The page should feel printed, not app-like.
- Avoid oversized iconography or decorative badges that compete with the type.
- Avoid mixing many type sizes inside the same card. The hierarchy already works with a few steps.
- Avoid turning the fine print into a visual event. It should support the offer, not lead it.

### Recommended build order

1. Set the page surfaces: white header, dark hero band, cream or soft-white lower field.
2. Add the typographic scale and confirm the serif hierarchy before refining spacing.
3. Build the plan card once, then reuse it for each offer.
4. Add the support panel and the fine print row.
5. Finish with the small accent states for the red and dark buttons.

### Accessibility

- Keep the dark band text and the button labels high contrast against their surfaces.
- Make the 1px borders visible enough that the white cards still read as separate units.
- Give the red CTA a clear focus treatment that does not disappear into the button fill.
- Keep legal copy legible at the 10px Graphik scale and avoid reducing it further.
- Ensure the product images and checklist icons have useful alternative text where they carry meaning.
- Preserve a readable line length in the free-trial headline so the serif rhythm does not collapse on smaller screens.

## Scope note

This guide covers the public subscriptions and free-trial pages, including the hero band, plan cards, benefit box, and fine-print rows. It does not define mobile breakpoints, hover or focus styling, motion, or the full fallback stack. Type and spacing values are rounded to the 0.125rem grid used in the supplied packet.
