# How displaay.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/displaay.net-design)

Last updated: 2026-08-08

## Captured pages

[![Wide hero set on a pale gray field with huge Displaay wordmark and thin footer rails](https://pin.fontofweb.com/9585?format=jpg)](https://design.withfudge.com/share/pin-9585)

[Wide hero set on a pale gray field with huge Displaay wordmark and thin footer rails](https://design.withfudge.com/share/pin-9585)

[![Matter collection panel with stacked gray cards, cyan highlights, and pricing controls](https://pin.fontofweb.com/3164?format=jpg)](https://design.withfudge.com/share/pin-3164)

[Matter collection panel with stacked gray cards, cyan highlights, and pricing controls](https://design.withfudge.com/share/pin-3164)

## Overview

Displaay’s site is a type-foundry system that puts the letterform itself at the center of the page. The first screen is almost empty apart from a huge logotype, a few small controls, and a wide field of light gray. That restraint is not a lack of design; it is the design. The page gives the type room to become the content, then uses thin rules, compact labels, and short catalog blocks to organize the rest of the experience.

The visual rhythm comes from contrast between scale and quietness. A poster-like hero sits above dense family lists, then the interface turns into a structured selection and pricing area with stacked cards and a black subtotal strip. The system stays disciplined even when information density rises. Large type, hairline dividers, and a small set of neutral surfaces keep the catalog readable without turning it into a heavy commerce layout.

The core qualities to preserve are:
- oversized sans-serif identity type
- pale neutral backgrounds with black type
- thin rules and modest 10px rounding
- compact controls that never compete with the specimens
- a measured shift from open hero space to dense catalog structure

## Colors

Displaay uses a very restrained palette. The page lives mostly in white, light gray, and black, with two softer highlight tones used to separate selection states. There is no saturated brand wash. Instead, black acts as both text color and action color, while gray surfaces carry the page’s structure. Warm cream and cool cyan show where the interface wants attention without breaking the quiet tone of the foundry page.

### Core roles

| token | value | use |
|---|---|---|
| `canvas` | `#FFFFFF` | Main page background, footer background, and open breathing room |
| `canvas-soft` | `#FFFFFF` | Large hero field and broad neutral surface behind the wordmark |
| `ink` | `#000000` | Logotype, headings, controls, rules, and active text |
| `ink-soft` | `#5A5A5A` | Secondary copy, small metadata, and subdued labels |
| `surface` | `#DCDCDC` | Light content stage and broad neutral cards |
| `surface-muted` | `#FFFFFF` | Unselected usage rows and calm pale panels |
| `surface-strong` | `#7C7872` | Selected family blocks and dark active panels |
| `line` | `#B4B4B4` | Hairline separators and footer rules |

### Emphasis and status roles

| token | value | use |
|---|---|---|
| `action` | `#000000` | Primary chips, active controls, and the black subtotal strip |
| `accent-cyan` | `#B9EEF1` | Selected plan rows and light emphasis blocks |
| `accent-cream` | `#E9E3CF` | Quiet non-selected usage tiles and alternate pale emphasis |
| `footer` | `#000000` | Deep footer and checkout base when the page needs a fixed anchor |

The relationship is simple: white and pale gray carry most of the layout, black locks down emphasis, and the soft highlight blocks mark state changes. Dark surfaces are used as strong anchors rather than as a full second theme. The result is crisp and editorial, not colorful.

## Typography

The type system is narrow and intentional. **Saans** carries the page’s large identity lines and family names. **Applesystem** keeps the interface calm at small sizes, especially in controls, labels, and legal text. **Serrif** provides a serif counterpoint for specimen moments or classical family naming. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Saans | 6rem | 300 | 0.95 | -0.04em | Huge brand hero and page-opening statement |
| `section-display` | Saans | 4rem | 300 | 0.95 | -0.03em | Large collection title and checkout heading |
| `card-heading` | Saans | 2rem | 300 | 1 | -0.02em | Family names, card titles, and panel labels |
| `serif-specimen` | Serrif | 3rem | 100 | 0.95 | -0.03em | Serif-family emphasis or specimen counterpoint |
| `body` | Applesystem | 1rem | 400 | 1.5 | 0em | Descriptive copy, explanations, and panel text |
| `label` | Applesystem | 0.875rem | 400 | 1.35 | 0.01em | Usage labels, chips, and short control text |
| `micro` | Applesystem | 0.75rem | 400 | 1.3 | 0.02em | Footer links, small legal notes, and metadata |

The hierarchy depends on scale more than on weight contrast. Headlines are very large and lightly tracked. Supporting text stays compact and clear. Small labels do the job of navigation and filtering without becoming decorative. This keeps the page from feeling like a template that is trying to do too much.

## Layout

The page uses a poster-to-catalog progression. The hero is a single broad stage with a large wordmark sitting high and left, small actions tucked low, and a generous empty field around the identity text. That open composition gives the foundry a confident first impression without adding visual noise. The footer-like strip at the bottom of the hero, with tiny controls and category headings, starts the move toward catalog structure.

Below the hero, the page becomes more ordered. A top rule introduces a wide grid in which usage selection sits on the left and font family cards stack on the right. The left rail is narrow, tidy, and repetitive. The right rail is heavier and more transactional, with large title bars, stacked family rows, and a purchase summary at the bottom. That asymmetry is useful: it lets the user compare license choices without making the page look dense everywhere at once.

Spacing is disciplined and repetitive. The design favors:
- long horizontal gutters instead of many nested boxes
- 10px corner rounding on controls and cards
- small gaps between option rows
- a large open field above the hero wordmark
- a strong bottom strip that closes the page and holds the cart action

Rules are thin and direct. They separate sections more than they frame them. White space is the main carrier of hierarchy, while gray fills mark the active working areas.

## Visual language

The site feels like a foundry showroom and a licensing desk sharing the same page. The showroom side is the giant logotype and the open light-gray field. The licensing side is the stacked chooser and cart summary. Both parts speak the same language: plain surfaces, sharp black type, and minimal decoration.

The strongest visual signals are:
- a monumental sans-serif headline that breaks over two lines
- small rounded chips with light borders
- pale cream and cyan selection bands
- thick gray blocks for chosen family sets
- a black subtotal bar that ends the active purchase flow

The page does not rely on gradients, shadows, or illustrative ornament. It uses contrast of fill, weight, and scale instead. The cyan block reads as a soft selection state. The darker gray block reads as an active collection. The black bar reads as finality and action. Because the palette is so narrow, every surface change matters.

The result is editorial but commercial, quiet but structured. It never becomes playful or flamboyant. Even the small brand symbols and footer columns remain restrained, so the type specimens keep the attention.

## Components

### Hero masthead

The hero is the most spacious component in the system. It contains the oversized Displaay wordmark, a small registration mark, and a few tiny actions near the lower edge. The typography is the whole story here. The hero should keep generous top and left breathing room so the wordmark can feel architectural rather than crowded. The background stays light and neutral; the text remains black.

### Utility chips

The small pills for items like Offline, Newsletter, and Ask Albert are compact and quiet. They use the 10px corner radius, a thin black border, and very small Applesystem text. The active chip turns black with white text, while inactive chips stay white or pale and keep the border visible. Their job is to guide, not to sell.

### Usage selector

The left-side selector is a vertical list of license contexts. Each row is a soft rectangle with a checkbox, a short label, and a one-line explanation. Rows are evenly spaced and feel like form options, not buttons. The active row can move to a darker fill, while less important rows stay in cream or white. This component should keep the explanation aligned so the list reads like a tidy ledger.

### Family stack cards

The right-side family stack is the densest component in the page. Each card has a bold title bar, a small line of meta text, and supporting style counts or price details. Selected cards use darker gray. Secondary selections can switch to cyan. The cards are wide, rounded, and layered with enough vertical spacing to keep the stack legible. Their large titles should stay on one line when possible, because the hierarchy depends on the title block feeling broad and stable.

### Checkout bar

The black subtotal bar works like the final action zone. It contains the current price and the add-to-cart control. The bar should read as a single unit with strong contrast and minimal internal noise. The text is large, white, and left aligned; the action area is boxed inside the bar and can carry a thin white outline. This is the strongest action moment on the page, so it should stay clean and obvious.

### Footer directory

The footer is a multi-column list of families, site links, help links, and social links. It sits beneath a thin rule and uses micro-sized Applesystem text. The structure is dense but orderly, with headings above short link lists. The visual role of the footer is to hold breadth without stealing attention from the specimen and the purchase flow.

## Responsive behavior

On smaller widths, the hero should collapse to a single column and let the wordmark reflow before it shrinks too far. The utility chips should wrap cleanly without turning into a crowded toolbar. The usage selector and family stack should move into one vertical flow, with the current selection staying visible near the top. The checkout bar should remain fixed in visual weight, even if it becomes taller.

The footer should move from many columns to fewer grouped blocks. Link labels should stay readable at small sizes, so the micro text may need slightly more line height on narrow screens. Cards should keep their rounded corners and horizontal padding, but the page should reduce the number of competing blocks per viewport. The goal is to preserve the quiet, poster-like rhythm even when the page becomes a narrow column.

## Practical implementation guidance

### Preserve

- Keep the page light and sparse at the top so the logotype can dominate.
- Keep black as the primary action and text color.
- Keep 10px rounding for chips, rows, cards, and the subtotal bar.
- Keep the rule lines thin and understated.
- Keep the interface text small and calm so it does not compete with the type specimens.

### Avoid

- Avoid bright brand hues beyond the soft cyan and cream selection blocks.
- Avoid heavy shadows, glossy effects, or decorative gradients.
- Avoid turning every row into a separate card with extra chrome.
- Avoid large type weights in the UI; the layout already has enough visual force.
- Avoid mixing too many font families in the chrome. Let Saans lead, Applesystem support, and Serrif appear only where a serif counterpoint is useful.

### Recommended build order

1. Build the hero stage with the large Saans wordmark and thin top-level spacing.
2. Add the utility chips and small footer-like navigation rail.
3. Build the usage selector as a tidy left column with 10px rounding.
4. Build the family stack cards with active and selected states.
5. Add the checkout bar as the strongest action zone.
6. Finish the footer directory and legal rail.
7. Test the page at narrow widths so the hero and card stack still read as one system.

### Accessibility

- Keep the black-on-white contrast strong in the hero and utility chips.
- Make the small controls large enough to tap comfortably even when the text is tiny.
- Preserve clear focus styling on every chip, checkbox, and action button.
- Keep the selected state visible without relying on color alone; use fill, border, and text contrast together.
- Maintain readable line lengths in the footer and the usage explanations when the layout narrows.

## Scope note

This guide covers the Displaay homepage hero, the family-selection and pricing interface, and the footer directory shown in the supplied views. It does not define alternate specimen pages, motion, hover polish, or mobile-specific rearrangements. Measurements are practical adaptation targets.
