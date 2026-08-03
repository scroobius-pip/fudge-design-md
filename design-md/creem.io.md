# How creem.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/creem.io-design)

Last updated: 2026-08-03

## Captured pages

[![Dark footer with centered Ask AI strip, small icon buttons, and green status pill](https://pin.fontofweb.com/7119?format=jpg)](https://design.withfudge.com/share/pin-7119)

[Dark footer with centered Ask AI strip, small icon buttons, and green status pill](https://design.withfudge.com/share/pin-7119)

[![Cream support section with outlined chat, email, and Discord cards beside the tax panel](https://pin.fontofweb.com/7118?format=jpg)](https://design.withfudge.com/share/pin-7118)

[Cream support section with outlined chat, email, and Discord cards beside the tax panel](https://design.withfudge.com/share/pin-7118)

[![Lavender hero with centered black display type and mascot pushing into the headline](https://pin.fontofweb.com/7117?format=jpg)](https://design.withfudge.com/share/pin-7117)

[Lavender hero with centered black display type and mascot pushing into the headline](https://design.withfudge.com/share/pin-7117)

[![White cookie consent card on lavender ground with two bold actions and a close button](https://pin.fontofweb.com/7116?format=jpg)](https://design.withfudge.com/share/pin-7116)

[White cookie consent card on lavender ground with two bold actions and a close button](https://design.withfudge.com/share/pin-7116)

[![Stacked checkout plan cards with the selected amber-highlighted annual option](https://pin.fontofweb.com/6201?format=jpg)](https://design.withfudge.com/share/pin-6201)

[Stacked checkout plan cards with the selected amber-highlighted annual option](https://design.withfudge.com/share/pin-6201)

[![Wide white checkout split between product story and a soft bordered payment form](https://pin.fontofweb.com/6200?format=jpg)](https://design.withfudge.com/share/pin-6200)

[Wide white checkout split between product story and a soft bordered payment form](https://design.withfudge.com/share/pin-6200)

## Overview

Creem’s visual system is split on purpose. The marketing side is loud, comic, and instantly legible: lavender canvas, black outlined cards, oversized black display type, and character art that breaks into the composition at a huge scale. The transactional side is quieter and more familiar: white surfaces, thin borders, soft gray form chrome, and a single amber action. That shift is the core of the brand. It lets the site sell scale and personality on the homepage, then switch to trust and clarity when money is on the line.

The page also relies on strong section contrast instead of decorative density. Big shapes, hard borders, and short statements carry the layout. Empty space matters as much as the content; it keeps the oversized headings from feeling cramped and gives the outlined cards room to read as sticker-like objects rather than generic blocks. Even the utility pieces follow the same rule: the cookie consent card is boxed and direct, while the footer AI strip stays quiet and low in the hierarchy.

## Colors

The palette is small and role-driven. Dark ink, white, lavender, peach, and amber do most of the work. Black and near-black define outlines, text, and the footer. White and warm off-white reset the page for checkout and supporting content. Lavender is the signature field color on the hero. Peach and amber are the warm accent family used for buttons, plan highlights, and card fills. Blue and green are secondary utility colors: blue appears in supporting product tiles, while green marks success and system status.

| token | value | role |
|---|---|---|
| action | #FFB224 | Primary call to action in checkout and prominent button moments |
| action-soft | #FFBE98 | Warm accent fill for supporting buttons and highlighted tiles |
| hero-canvas | #B09CFB | Full-bleed hero field and the most recognizable brand background |
| canvas | #FAFAF9 | Main light page canvas and checkout backdrop |
| surface | #FFFFFF | Form cards, plan cards, and other neutral panels |
| surface-warm | #F5F2F0 | Soft cream surface for lifted white panels and subtle contrast |
| surface-dark | #111827 | Dark footer and deep product-story sections |
| surface-deep | #0A0A0A | The darkest footer ground and the deepest neutral tone |
| ink | #151617 | Primary text, outlines, and hard visual anchors |
| muted-ink | #737373 | Secondary helper copy and low-priority notes |
| muted-ink-2 | #6B7280 | Form hints, metadata, and smaller utility text |
| border | #151617 | Heavy outline color for marketing cards and buttons |
| border-soft | #E5E7EB | Quiet checkout borders and low-contrast separation |
| success | #4ECB71 | Status dots, availability cues, and positive system states |
| info | #5865F2 | Secondary blue support cards and informational accents |
| highlight | #FFBE98 | Soft peach highlight for card fills and warm emphasis |

The key relationship is temperature. Lavender and peach create the playful first impression. White and warm off-white then cool the tone for checkout. The darkest neutrals hold the footer and the deepest information sections so the page can end without noise. Color is never just decoration here; it separates modes of use.

## Typography

Creem uses two distinct families and keeps the family count intentionally small. Gasoek One carries the oversized statements and creates the loud, poster-like personality. Geist handles everything that needs to feel readable, practical, or transactional. System appears only in the tiny utility code badge and compact inline snippets.

No font licensing statement is supplied in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Gasoek One | 7.8rem | 400 | 0.9 | -0.02em | Huge stacked hero headline and brand-defining statements |
| section-display | Gasoek One | 3rem | 400 | 1 | 0em | Large support and merchant-of-record headings |
| card-display | Gasoek One | 1.125rem | 400 | 1.56 | 0em | Small but still punchy card titles and short labels |
| body | Geist | 1rem | 400 | 1.5 | 0em | Paragraphs, lists, and form help text |
| body-medium | Geist | 1rem | 500 | 1.5 | 0em | Buttons, highlighted phrases, and emphasis in UI copy |
| action-label | Geist | 0.875rem | 700 | 1.43 | 0em | Compact button labels across nav, cookie, and checkout actions |
| label | Geist | 0.875rem | 700 | 1.43 | 0.025em | Section tags, compact navigation, and pill labels |
| meta | Geist | 0.75rem | 400 | 1.33 | 0em | Legal copy, quiet helper text, and small status notes |
| code | System | 0.5625rem | 500 | 1.5 | 0em | Tiny utility badge and inline code-style text |

The hierarchy is driven by face choice and scale more than by weight variation. Gasoek One is visually loud even without weight changes, so the page uses it for the largest claims only. Geist keeps the rest of the interface calm and legible. Letter spacing stays close to neutral except in the tiny labels, where a little extra tracking makes the pills and tags feel crisp.

## Layout

### Hero

The hero is a full-width lavender stage with a floating white navigation shell at the top. The nav is compact, rounded, and black-outlined, with the logo at the left, links in the middle, and a pale peach action on the right. Under it, the headline is stacked and centered, with the mascot interrupting the top of the wordmark and the bottom edge of the page. The composition is playful but controlled: huge type, a short subheading, a chip-like utility callout, two bold buttons, and three small benefit cards. The page wants the eye to read the statement first, then the actions, then the supporting chips.

### Support and merchant-of-record section

The support section shifts to a lighter cream field and uses a two-part layout. On one side are three small outlined cards for live chat, email, and Discord. On the other side, the headline is large, black, and blunt, with peach used as a second line to soften the statement. The merchant-of-record area below it is built as a large lavender card with a thick black outline, a small icon badge, a giant `$0`, and a short checklist. That panel feels like a sticker dropped onto the page, not a generic feature block.

### Checkout

Checkout changes the entire mood. The page becomes white and quiet. The left side keeps the product story and plan comparison; the right side becomes a card-like payment form with light borders, roomy fields, and a single amber button. In the wide version, the form reads as a stable vertical rail next to the product explanation. In the narrow version, the plan cards stack first, then the form fields, then the total and button. The selected plan is marked with a warm border and a soft cream fill, which keeps the active state visible without shouting.

### Footer and utility surfaces

The footer returns to near-black. It uses compact columns, small uppercase section titles, thin separators, and a restrained green status pill. The social icons and legal links are small enough to recede, while the faint oversized wordmark in the background adds scale without competing with the content. Two utility surfaces sit inside this dark ending. One is the centered Ask AI about Creem strip: a row of tiny rounded-square icon buttons placed directly on the footer ground, followed by a muted label. The other is the cookie consent card that floats over the lavender page: a white rounded panel with a hard black outline, a small icon badge, a close control, and two broad actions that read as equal choices. Both pieces stay smaller than the main cards but keep the same direct outline language.

## Visual language

The language is comic-book commerce with a strong editorial bias. Thick black outlines make cards feel physically cut out. Hard-offset shadows reinforce that sticker feeling and keep the shapes readable against lavender, cream, and white. Surfaces are mostly flat. Gradients are limited and subtle; the system prefers solid fields and high contrast boundaries over soft atmospheric effects.

The character art is central to the tone. It is not a tiny decorative extra. It sits at the same scale as major type and changes the emotional temperature of the page. This keeps the brand approachable without turning the interface childish.

Composition is also part of the language. The hero uses centered symmetry. The support section uses a split, asymmetrical balance. The checkout page uses a clean two-column transaction frame. The footer compresses everything into compact information density. The sequence feels like moving through chapters of the same story, each one with a different surface and different energy.

## Components

### Navigation shell

The top navigation is a white rounded bar with a thick dark outline. It carries the logo, a small set of links, and two actions. The primary action uses the warm accent family and a black border, while the secondary action stays lighter and quieter. The shell needs enough horizontal breathing room to keep the logo and actions from feeling crowded.

### Primary action

The main button is compact, warm, and visibly tactile. It uses the amber action color, dark ink text, a clear border, and a control-sized radius. It should feel like a stamped object rather than a glossy web button. The same treatment works across hero, support, and checkout as long as the fill stays the warm action color family.

### Support cards

The support cards are small outlined tiles with a title, a short line, and a simple icon or badge. Each card reads as a self-contained sticker. The important traits are the thick border, the strong fill color, and the tight vertical stack. They are meant to be scanned, not deeply read.

### Merchant-of-record panel

This is the loudest information block after the hero. The panel uses a lavender fill, a thick border, a small heading badge, and an oversized price figure. The checklist underneath should feel simple and direct. The panel works because the large `$0` is paired with a very plain visual structure.

### Checkout plan cards

The plan cards are white or near-white blocks with a thin border, a clear selected state, and a short list of included benefits. The active card uses a warm border and a soft cream fill. The inactive cards stay quieter. The structure should stay stacked and readable rather than turning into tabs or pill toggles.

### Payment form

The payment form is all about restraint. Labels are small and clear, inputs are wide, and the borders are light. The card and wallet choice is presented as a segmented control with a visible selected state. The payment button is the brightest thing in the form, and everything around it should stay subdued so the final action is unmistakable.

### Cookie consent modal

The consent modal is a floating white card with a hard dark outline and a rounded shell. It sits on top of the lavender field as an interruption, not as a full-page takeover. The left side starts with a small square icon badge, then a title and a short paragraph. A close control sits in the top-right corner as a compact square button. The two bottom actions are large, balanced, and clearly separated: one outlined light button and one dark filled button. The shape language stays consistent with the rest of the site, but the surface is quieter so the choice reads fast.

### Footer AI widget

The footer AI widget is a low-profile utility strip centered in the dark footer. It does not use a raised panel. Instead, it uses a tight row of tiny rounded-square icon buttons with a subtle border and a dark fill that blends into the footer. The label underneath is quiet and compact, so the whole element reads as an optional helper rather than a primary destination. The visual weight is intentionally low, which keeps it from competing with the main footer columns or the system status pill.

### Footer

The footer combines a compact icon row, multiple link columns, a small operational pill, and legal copy. The text is quiet and the spacing is tight. It should feel like the place where the page resolves, not a second marketing section.

## Responsive behavior

On narrow screens, the system should keep the same order of priorities: statement, action, supporting cards, then details. The hero headline can stack more tightly, but it should remain large and emphatic. Card outlines, pill labels, and warm accents should keep their character at smaller sizes rather than collapsing into generic mobile UI. In checkout, the form should become a single-column flow before the comparison content gets too compressed. The dark footer should keep its hierarchy even when the columns wrap. The cookie consent card should remain easy to dismiss, and the footer AI widget should stay compact enough to avoid crowding the footer stack.

## Practical implementation guidance

### Preserve

- Keep the lavender hero field and the heavy black display type together; that pairing is the brand’s first impression.
- Keep outlines thick on marketing cards and much lighter on checkout forms.
- Keep one warm action color for the loudest button and the active plan state.
- Keep the mascot or character art large enough to affect the layout, not just decorate it.
- Keep the footer darker and quieter than the rest of the page.

### Avoid

- Avoid replacing the black outline language with soft shadows or glass effects.
- Avoid using multiple unrelated accent colors for buttons.
- Avoid giving checkout the same loud treatment as the homepage.
- Avoid shrinking the display type into ordinary headline sizes too early.
- Avoid overrounding every control; marketing cards and checkout fields should not share the same radius.

### Recommended build order

1. Build the color roles and the two-family type system.
2. Recreate the hero shell and the oversized headline stack.
3. Add the outlined support cards and the merchant-of-record panel.
4. Build the checkout comparison cards and the payment form.
5. Add the cookie consent card and the footer AI widget.
6. Finish with the dark footer and its compact utility elements.

### Accessibility

- Keep the dark ink on light surfaces and the white text on dark surfaces.
- Preserve clear focus states on the nav, cards, radio choices, and buttons.
- Make every icon, mascot, and product illustration carry useful alternative text.
- Keep labels visible above form fields; do not rely on placeholders alone.
- Maintain enough contrast between the selected plan state and the unselected cards.
- Make the cookie consent actions large enough to tap easily.
- Keep the footer AI buttons readable as optional utilities, not as decorative marks.

## Scope note

This guide covers the homepage hero, support and merchant-of-record sections, footer columns and utility strip, the cookie consent dialog, and the checkout flow shown in the selected views. It does not pin down exact mobile breakpoints, motion, hover choreography, or loading, error, and disabled states. Relative values are rounded to the packet’s 0.125rem step, and no font licensing statement is supplied in the packet.
