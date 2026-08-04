# How braintrust.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/braintrust.dev-design)

Last updated: 2026-08-04

## Captured pages

[![Black hero with oversized headline and three story cards](https://pin.fontofweb.com/8909?format=jpg)](https://design.withfudge.com/share/pin-8909)

[Black hero with oversized headline and three story cards](https://design.withfudge.com/share/pin-8909)

[![White pricing calculator with sliders and comparison matrix](https://pin.fontofweb.com/8907?format=jpg)](https://design.withfudge.com/share/pin-8907)

[White pricing calculator with sliders and comparison matrix](https://design.withfudge.com/share/pin-8907)

[![Three saturated plan cards with pricing and actions](https://pin.fontofweb.com/8906?format=jpg)](https://design.withfudge.com/share/pin-8906)

[Three saturated plan cards with pricing and actions](https://design.withfudge.com/share/pin-8906)

[![Blue footer slab with columns and oversized wordmark](https://pin.fontofweb.com/8905?format=jpg)](https://design.withfudge.com/share/pin-8905)

[Blue footer slab with columns and oversized wordmark](https://design.withfudge.com/share/pin-8905)

[![Dark feature grid with product screenshots and support copy](https://pin.fontofweb.com/8903?format=jpg)](https://design.withfudge.com/share/pin-8903)

[Dark feature grid with product screenshots and support copy](https://design.withfudge.com/share/pin-8903)

[![Pink editorial section with process diagram and callouts](https://pin.fontofweb.com/8902?format=jpg)](https://design.withfudge.com/share/pin-8902)

[Pink editorial section with process diagram and callouts](https://design.withfudge.com/share/pin-8902)

## Overview

Braintrust presents itself as a serious AI product for teams shipping to production. The page does not lean on decorative art or dense visual tricks. Instead, it builds trust through a blunt black-and-white core, then punctuates that core with a few highly saturated brand fields: electric blue, chartreuse, plum, burgundy, rose, and peach. The result feels technical without becoming cold, and branded without becoming loud.

The strongest page rhythm comes from contrast. A dark hero and dark story cards set a hard opening note. The pricing area flips to white space, fine rules, and compact comparison rows. The footer returns to a saturated blue slab that closes the page with the loudest brand color. Between those anchors, the design alternates between editorial text blocks, screenshot-heavy cards, and compact plan surfaces.

The system should be reproduced as a single voice: calm type, hard edges where it matters, soft radius where content needs breathing room, and color used as a signal rather than decoration.

## Colors

Braintrust uses a small but expressive palette. Black, white, and zinc grays carry most of the interface. Saturated brand colors appear in limited roles: plan differentiation, section backgrounds, small status marks, and the footer. Light surfaces stay very close to white, while dark surfaces stay near-black rather than charcoal. That keeps the page crisp and prevents the colors from muddying each other.

| token | hex | use |
|---|---|---|
| `canvas` | `#FFFFFF` | Main page background, cards, and pricing tables |
| `ink` | `#000000` | Primary text on white surfaces and section headlines |
| `muted-ink` | `#71717A` | Supporting copy, labels, and secondary pricing notes |
| `muted-ink-2` | `#9F9FA9` | Quiet metadata, table helper text, and subdued notes |
| `surface` | `#FAFAFB` | Soft wash behind calculators and subtle panels |
| `surface-2` | `#F3F4F6` | Thin table rows and low-contrast card backgrounds |
| `surface-3` | `#EDEDF0` | Rules, dividers, and nested card edges |
| `border` | `#DDDDE3` | Light borders around controls and table blocks |
| `border-strong` | `#C4C4CC` | Slightly firmer separators in dense comparison areas |
| `surface-dark` | `#0E0E0F` | Hero stage, dark story cards, and high-contrast panels |
| `surface-contrast` | `#18181B` | Raised dark tiles and secondary dark surfaces |
| `action-blue` | `#2C1FEA` | Primary action color and the footer field |
| `action-blue-soft` | `#638CF3` | Secondary emphasis, subtle highlights, and links on light fields |
| `chartreuse` | `#CCFF00` | Starter-plan mark and rare eye-catching accents |
| `plum` | `#4E044E` | Dark magenta panels and pro-plan color direction |
| `burgundy` | `#651D31` | Pro plan cards and deep warm contrast fields |
| `rose` | `#F5AFD1` | Editorial pink section background and soft accent panels |
| `peach` | `#FED7AA` | Warm support tone for secondary accent blocks |
| `lilac` | `#CDB5FD` | Soft purple support tone in mixed accent layouts |
| `blue-slate` | `#C5CFE8` | Quiet blue-gray used for washed product fields |
| `deep-blue` | `#094135` | Dark green-blue footer-adjacent field and dense brand blocks |

The relationship between modes is deliberate. White pricing pages keep the product legible and easy to compare. Dark sections compress attention into a few strong claims and large screenshots. The pink and plum sections add editorial variety without changing the basic grammar: large type, short copy, and one dominant visual element. The blue footer ends the page in a branded basin so the final impression is still unmistakably Braintrust.

## Typography

The page voice is built on one main sans family, with Inter and Suisse Intl Mono used for utility layers. The Braintrust family carries the headlines, body, pricing copy, and most labels. Inter appears in compact metadata, calculator chrome, and small supporting text. Suisse Intl Mono is reserved for tiny section labels and other highly compact markers.

Braintrust Display V 2 and System-Uimonospace are part of the family set, but the sampled screens do not place them at the center of the hierarchy. No license attribution is supplied for Braintrust Display V 2, Braintrust V 2, System, or System-Uimonospace; confirm reuse rights before production use. Inter and Suisse Intl Mono carry supplied credit.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Braintrust V 2 | 3.75rem | 400 | 1 | 0em | Main homepage hero line |
| `section-display` | Braintrust V 2 | 3rem | 400 | 1 | 0em | Large section titles and strong pricing lines |
| `card-title` | Braintrust V 2 | 1.5rem | 600 | 1.333 | 0em | Story card headings and pricing subheads |
| `body-large` | Braintrust V 2 | 1.25rem | 400 | 1.4 | 0em | Lead copy under large headlines |
| `body` | Braintrust V 2 | 1rem | 400 | 1.5 | 0em | General page copy and table text |
| `body-strong` | Braintrust V 2 | 1rem | 600 | 1.5 | 0em | Bold inline emphasis and concise claims |
| `meta` | Inter | 0.875rem | 400 | 1.429 | 0em | Calculator notes, helper text, and quiet labels |
| `meta-strong` | Inter | 0.875rem | 500 | 1.429 | 0em | Small bold labels and compact control text |
| `label` | Inter | 0.75rem | 500 | 1.333 | 0em | Short badges, pills, and pricing support text |
| `mono-label` | Suisse Intl Mono | 0.625rem | 400 | 1.5 | 0.1em | Tiny section tags and technical markers |

The hierarchy depends on scale and line length more than on family changes. Headings stay open and unhurried. The body copy stays compact, readable, and close to the headline edge. Tiny labels use a narrower rhythm and slight tracking so they feel like interface markers instead of decorative all-caps slogans. Do not overuse bold; the page already gets enough force from contrast and color.

## Layout

The page is built from wide desktop bands and centered content blocks. Many sections use 128px vertical padding, with 96px and 64px appearing in denser internal areas. That spacing keeps the page from collapsing into a wall of cards. The layout is content-first, but it is not sparse: grids and tables often occupy the full width once the section headline has set the tone.

The hero sits on a dark field, then moves into a multi-card story grid. Those cards are large enough to feel like case-study tiles, not small marketing badges. They use either dark screenshot panels or light editorial surfaces. The pricing area then narrows into a clear information architecture: calculator at the top, plan cards beside it, and a comparison table below. That sequence matters because it lets the visitor understand value before scanning detailed features.

The page also uses asymmetry well. Some sections align text left and push the visual asset to the right. Others place a large screenshot or diagram on the left and keep the explanation on the right. This keeps long pages from feeling repetitive even when the content pattern stays the same. The footer returns to a broad, full-width slab with evenly spaced link columns and a large wordmark set low in the frame.

Keep the horizontal rhythm generous. A 32px outer gutter appears often, but the page is not boxed in by it; the wide sections still feel open because the interior cards and tables carry their own breathing room.

## Visual language

The visual language is a mix of product clarity and editorial confidence. Dark backgrounds make screenshots and metrics feel immediate. White surfaces make pricing and feature comparison feel trustworthy. The color accents carry meaning: chartreuse reads as a sharp starter cue, burgundy and plum carry richer paid-plan weight, and blue functions as the default action and footer field.

Cards matter more than ornament. A lot of the site is a sequence of rectangular surfaces with firm borders or clean edges. The cards are not overly rounded, and they do not lean on shadows to feel lifted. Instead, each one gets its power from contrast, spacing, and the strength of the content inside it. That is why the screenshots and stat blocks feel so direct.

The page also likes mixed material. Some sections are pure type and rules. Others combine screenshots, logos, mockups, and process diagrams. The result is a system that can switch between explanation and proof without changing vocabulary. The brand voice stays steady because the surfaces remain disciplined even when the content changes.

## Components

### Hero band

The hero is a dark band with a very large white line of copy and a softer secondary line beneath it. The layout is open and left-weighted, with a compact pill action below the heading. The button reads as a small object on a large field, not as a dominant slab. The hero should feel calm, not dramatic. Its job is to establish scale and seriousness immediately.

### Story cards

The story grid uses large cards with either black or light surfaces. Dark cards support white captions and short quotes, often overlaid on photography or product screenshots. Light cards use black text and a lot of white space. The cards share the same basic anatomy: logo or label at top, short headline, and a strong visual field below or beside the text. Rounded corners stay moderate so the grid feels precise, not playful.

### Usage calculator

The calculator is a white technical block with a soft surface wash and thin borders. It begins with a usage readout, then presents sliders and totals in a compact, table-like arrangement. The typography is restrained: clear numeric emphasis, quiet labels, and light helper notes. The main design feature is not the control itself, but the way the control area feeds a clean pricing summary below it.

### Plan cards

The plan cards are the loudest color use on the white pricing page. Starter uses deep green-blue with chartreuse as a small top mark. Pro uses burgundy. Enterprise uses saturated blue. Each card has a short plan label, a price or custom-pricing statement, a few lines of supporting copy, and a compact action. The cards feel like three distinct surfaces in one system rather than three unrelated products.

### Comparison table

The comparison table is a white matrix with thin horizontal rules and tight row spacing. Left-hand labels stay quiet, while the plan columns carry the key values. This component works because the typography never gets too small to scan, and because the grid lines are faint enough to keep the table light. Keep the table aligned and avoid adding decorative dividers beyond the necessary rules.

### Footer band

The footer is a saturated blue slab with a lighter top edge and a broad multi-column navigation area. Link columns sit in a measured grid, and the brand mark lands low and large so the page closes on the logo, not on a legal block. The footer should feel like a final brand room, not an afterthought. Use white type and keep hierarchy simple: heading, links, then fine print.

### Buttons and pills

Buttons are compact, soft-edged, and color-consistent. On dark fields they stay readable without extra embellishment. On light fields they use the brand blue or neutral fills depending on context. Pills and small markers are used for plan labels, section tags, and tiny actions. Keep their padding generous enough to feel tactile, but do not turn them into oversized capsules.

## Responsive behavior

On narrower screens, keep the order of information intact: claim, support copy, action, then proof. The story grid should collapse into a single column before the calculator becomes unreadable. The pricing cards can stack while preserving their color identity. The comparison table will need a compact alternate structure or horizontal scroll because the three-plan comparison is too dense to squeeze into a narrow column. Footer columns should stack in a way that keeps the brand mark visible and the links easy to scan.

## Practical implementation guidance

### Preserve

- Keep the black/white core as the default voice.
- Use the saturated colors sparingly and with clear roles.
- Preserve the strong contrast between the hero/footer slabs and the white pricing area.
- Keep card corners modest and geometry disciplined.
- Use Inter and Suisse Intl Mono only for utility layers, labels, and small metadata.

### Avoid

- Avoid broad gradients, glossy shadows, or soft pastel washes across the whole page.
- Avoid making every card equally rounded; the page needs some edge to stay technical.
- Avoid using chartreuse as a general action color.
- Avoid shrinking the pricing table into tiny unreadable text.
- Avoid turning the footer into a generic link dump; it should remain a branded closing field.

### Recommended build order

1. Set the color tokens and type scale.
2. Build the dark hero band and its action.
3. Build the story-card grid with dark and light variants.
4. Build the calculator and the pricing summary.
5. Build the three plan cards.
6. Build the comparison table.
7. Finish with the footer slab and link columns.

### Accessibility

- Keep white type on dark and saturated fields at a contrast level that remains clear at large and small sizes.
- Make the sliders and plan actions large enough to target comfortably.
- Keep table headers explicit so the pricing matrix reads cleanly with assistive tech.
- Preserve visible focus styling on every button, link, and slider.
- Use clear labels for numeric values so the calculator remains understandable without color.

## Scope note

This guide covers the desktop home, pricing, and footer surfaces shown in the supplied packet. Mobile breakpoints, motion, hover styling, loading states, and the full fallback font stack are not included. Type and spacing values are rounded to a consistent 0.125rem step.
