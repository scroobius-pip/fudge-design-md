# How aaa24.a24films.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/aaa24.a24films.com-design)

Last updated: 2026-08-03

## Captured pages

[![Membership hero with huge price figures and benefit tiles](https://pin.fontofweb.com/6379?format=jpg)](https://design.withfudge.com/share/pin-6379)

[Membership hero with huge price figures and benefit tiles](https://design.withfudge.com/share/pin-6379)

[![Black FAQ page with left title rail and tall article stack](https://pin.fontofweb.com/6576?format=jpg)](https://design.withfudge.com/share/pin-6576)

[Black FAQ page with left title rail and tall article stack](https://design.withfudge.com/share/pin-6576)

[![Split account form with oversized JOIN rail and proceed bar](https://pin.fontofweb.com/6383?format=jpg)](https://design.withfudge.com/share/pin-6383)

[Split account form with oversized JOIN rail and proceed bar](https://design.withfudge.com/share/pin-6383)

[![Coral 404 landscape with wireframe floor and giant text](https://pin.fontofweb.com/6384?format=jpg)](https://design.withfudge.com/share/pin-6384)

[Coral 404 landscape with wireframe floor and giant text](https://design.withfudge.com/share/pin-6384)

[![Warm paper footer with four columns and fine legal text](https://pin.fontofweb.com/6577?format=jpg)](https://design.withfudge.com/share/pin-6577)

[Warm paper footer with four columns and fine legal text](https://design.withfudge.com/share/pin-6577)

## Overview

AAA24 is designed like a membership brochure that keeps turning into a utility interface. The dominant mood is severe and controlled: near-black content pages, warm paper footers, thin rules, and large Nb International Pro type that carries most of the personality. The system feels less like a glossy subscription funnel and more like an editorial film club with a strict grid.

The page family moves between two clear modes. On dark surfaces, white text, muted gray labels, and the coral accent hold the hierarchy. On paper surfaces, black text and the A24 mark take over, while the overall tone softens without becoming decorative. That flip gives the site its rhythm: black for actions, forms, FAQs, and error states; paper for the footer and legal endcap.

The visual hierarchy is simple and forceful. Big titles sit alone. Supporting copy stays narrow and quiet. Dividers do more work than containers. The result is a brand language built from contrast, spacing, and scale rather than from color variety or surface effects.

## Colors

The palette is small and disciplined. Black and near-black form the main stage. Warm paper softens the footer and the membership end of the journey. Gray handles hierarchy, while coral is reserved for a strong signal on the 404 page and other clearly marked emphasis.

| token | value | role |
|---|---|---|
| `action` | `#F95936` | Coral signal color for the error page and the loudest primary emphasis |
| `ink` | `#000000` | Brand mark, footer text, and dark-on-light copy |
| `muted-ink` | `#837E77` | Primary secondary text on paper and quiet utility text |
| `helper-ink` | `#83887C` | Page titles, subheads, and thin supporting labels on dark fields |
| `paper` | `#F5F1EA` | Main warm page ground for the footer and light utility surfaces |
| `paper-soft` | `#F1F1F1` | Pale button fill and light text-on-dark contrast value |
| `surface-dark` | `#0E0D0D` | Main dark panel tone for membership, FAQ, and account pages |
| `surface-deep` | `#000000` | Deepest black used for the page field and utility strips |
| `on-dark` | `#F1F1F1` | Primary text and button fill on black surfaces |
| `paper-muted` | `#9FA595` | Faint legal copy, subtle labels, and low-priority footer text |

The relationship between modes is the key color story. Dark screens are almost monochrome, with the accent held back until it is needed. The paper footer is not bright white; it keeps the page warm and slightly aged. Gray never turns cold or bluish, so the whole system stays in the same tonal family even as it switches surfaces. There are no visible gradients or decorative shadows doing hierarchy work. Flat fills, thin rules, and contrast do the job directly.

## Typography

Most supplied pages use **Nb International Pro** as their primary family. The 404 treatment also includes a distinct mono-styled cut in its oversized numerals, so keep that display treatment separate from the regular text system. The hierarchy depends on size, tracking, and placement more than on weight changes. Most visible text is Regular. Font licensing was not supplied; confirm reuse before publishing.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `page-hero` | Nb International Pro | 18.781rem | 400 | 0.80 | -0.029em | Oversized utility numerals and the most extreme headline treatment |
| `membership-hero` | Nb International Pro | 10.8rem | 400 | 0.80 | -0.140em | The giant JOIN and membership headline scale |
| `section-display` | Nb International Pro | 6.425rem | 400 | 0.81 | -0.045em | Large FAQ section labels and major black-page headings |
| `card-display` | Nb International Pro | 4.5rem | 400 | 0.81 | -0.045em | Large plan, price, and utility callouts on dark panels |
| `article-heading` | Nb International Pro | 2.25rem | 400 | 0.92 | -0.045em | FAQ questions and smaller dark-page subheads |
| `body-strong` | Nb International Pro | 1.2rem | 400 | 1.20 | -0.010em | Short explanatory copy on the account and membership pages |
| `body` | Nb International Pro | 1.05rem | 400 | 1.33 | -0.010em | FAQ answers, supporting paragraphs, and form help text |
| `label` | Nb International Pro | 0.875rem | 400 | 1.33 | 0.005em | Top navigation, form labels, and small footer links |
| `meta` | Nb International Pro | 0.825rem | 400 | 1.20 | 0.015em | Footer columns, legal copy, and the smallest non-legal utility text |
| `micro` | Nb International Pro | 0.6875rem | 400 | 1.20 | 0.015em | Tiny legal lines and the quietest footer annotations |

The typography story is about restraint at small sizes and force at large sizes. The biggest headings are almost poster-like: very tight leading, negative tracking, and no decorative weight tricks. The smaller labels stay readable because they keep generous line-height and avoid crowding the rules around them. Keep the mono-styled 404 numerals as an isolated display treatment rather than allowing it to spread through the interface.

## Layout

The layout is driven by rails and fields. On the FAQ pages, a left-side title rail sits beside a ruled content column. On the account screens, the same split becomes a form zone: a large left keyword, a right content column, and a single field that sits in an otherwise empty black field. The membership page expands that same logic into a wide hero, a pricing cluster, and a grid of benefit tiles below.

Spacing is broad, not airy. There is a lot of blank black or paper ground around the content, but the rhythm comes from measured resets rather than random whitespace. The visible spacing tokens support that: a small page gutter, a clear column-rule gap, larger section gaps, and a much taller offset before the main content begins. Thin vertical lines often stand in for boxes; they divide columns without adding weight.

The footer changes the layout grammar again. It becomes a low-profile paper band with several narrow columns, all aligned to the same baseline and held apart by hairline dividers. The A24 mark anchors the far left, then the content fans out into link groups and legal text. Nothing is centered for comfort; the whole system prefers alignment, edge control, and a sharp sense of structure.

The 404 page is the most theatrical layout in the set. It keeps the same dark ground, but the composition becomes graphic rather than editorial: a huge coral message, a wireframe horizon, and a strong sense of depth created through line work instead of shadow. It is still the same system, just pushed to a more dramatic end.

## Visual language

AAA24 combines three visual registers. The first is editorial utility: FAQ pages, account forms, and legal footers that rely on sober grids and small text. The second is membership spectacle: giant headlines, price figures, and a benefit grid that turns the subscription into a staged offer. The third is error-page drama: the 404 screen uses coral, wireframe perspective, and oversized type to make a failure state feel branded rather than generic.

The system avoids softness. Corners stay square or nearly square. Borders stay hairline-thin. Shadows are absent as a rule. The pages do not feel pillowy or app-like; they feel printed, framed, and set against a stage. That same discipline keeps the coral accent powerful. Because the accent is rare, it reads immediately when it appears.

A24 also uses scale as a visual texture. Some screens are almost all typography, with words acting like architectural elements. Others use image tiles or graphic blocks to break the black field. In every case, the composition leaves enough open area for the type to breathe. The negative space is not empty; it is part of the brand tone.

## Components

### Header

- **Anatomy:** Small AAA24 wordmark on the left, compact utility links on the right, with occasional slash separators.
- **Surface:** Transparent on dark pages; paper on the footer page.
- **Typography:** Small caps-feeling label size, usually around 13px to 15.6px.
- **Shape:** No boxed chrome. The bar is defined by placement and spacing, not by panels.
- **Composition:** Keep the header visually light so it does not compete with the giant page titles below it.

### FAQ rail and article column

- **Anatomy:** A large left rail title, a thin vertical divider, and a stacked right column of section heads, questions, and answers.
- **Surface:** Pure black field with white text and gray accents.
- **Typography:** Section labels are large and compact; questions are smaller but still assertive, often around 36px and 54px scale.
- **Spacing:** Wide top offset, then clear separation between topic groups; paragraphs sit with enough breathing room to stay readable.
- **Visible states:** Inline links in answers stay understated and rely on underlining rather than a loud color shift.

### Membership hero

- **Anatomy:** A giant invitation line, a price cluster, a short supporting sentence, and a grid of benefit images or tiles beneath.
- **Surface:** Black with bright text and coral emphasis when needed.
- **Typography:** The hero line uses the biggest scale in the system, with prices and percentage figures pulling from the same oversized family.
- **Composition:** Keep the price block separated from the invitation text so the message reads in one glance.
- **Visible states:** Active or featured benefits can sit on a pale tile, but the surrounding system remains dark and controlled.

### Account form

- **Anatomy:** Left-side JOIN marker, right-side form panel, one email field, and a full-width proceed bar at the bottom.
- **Surface:** Black field with a pale footer button.
- **Typography:** Large headline, then a short explanatory line, then smaller form label and placeholder text.
- **Shape:** The field is underlined rather than boxed; the button is a flat rectangle with no soft rounding.
- **Composition:** Keep the form sparse. The page works because it gives the user very little to look at besides the title and the entry field.

### Footer

- **Anatomy:** A24 mark, AAA24 links, More A24 links, social links, and a legal column.
- **Surface:** Warm paper ground with fine vertical rules.
- **Typography:** Small label text in the link columns, with even smaller legal copy in the far-right block.
- **Spacing:** Wide column spacing and restrained internal padding.
- **Composition:** Treat the footer as a calibrated information band, not as a generic site-end panel.

### Error stage

- **Anatomy:** Oversized coral 404 language, a wireframe floor, and a dark skyline of line work.
- **Surface:** Deep black with coral text and highlights.
- **Typography:** Extremely large display type that dominates the frame.
- **Composition:** Use the graphic field as the main statement and keep utility links tiny and out of the way.
- **Visible states:** The page leans into the failure state instead of hiding it; the styling keeps it unmistakably branded.

## Responsive behavior

The design should preserve the same reading order when it compresses: title rail first, content column second, footer links last. On narrower screens, the split layouts should stack without losing the thin-rule logic. The hero type can shrink, but the page still needs a very large first word or number so the membership tone survives. The footer should stay column-based as long as it can, then collapse into a readable list without changing the warm paper and black contrast.

The most important responsive rule is hierarchy, not exact sizing. Keep the large keyword or price visible before the supporting copy. Keep the form field obvious before the proceed button. Keep the FAQ questions in a clear single column rather than turning them into dense cards. The system works when the structure stays austere.

## Practical implementation guidance

### Preserve

- Keep the paper/black flip intact. It is the core rhythm of the system.
- Keep coral rare. It should feel like a signal, not a theme color.
- Keep the page edges hard and the borders thin.
- Keep the typography mostly Regular and let size do the hierarchy work.
- Keep large spans of empty field around the hero, FAQ, and account form.

### Avoid

- Avoid rounded cards, soft shadows, and glossy surface treatments.
- Avoid centered marketing copy that erases the left rail structure.
- Avoid multi-color UI chrome. The palette works because it is narrow.
- Avoid turning the footer into a social-media-style cluster of badges or buttons.
- Avoid overusing the coral accent in body copy or links.

### Recommended build order

1. Lock the black and paper surfaces.
2. Rebuild the type scale from the largest heading down to the legal text.
3. Add the thin-rule grid and left-right split layouts.
4. Build the FAQ column and the account form.
5. Add the membership hero and benefit grid.
6. Finish with the footer and the 404 treatment.

### Accessibility

- Keep contrast strong on both black and paper surfaces.
- Do not rely on coral alone to indicate a current or important state.
- Preserve visible focus rings on links, form fields, and the proceed button.
- Keep paragraph line-height generous enough to hold the FAQ answers comfortably.
- Make the smallest legal copy readable without changing the overall scale of the footer.

## Scope note

This guide covers the desktop membership, FAQ, account, 404, and footer surfaces for aaa24.a24films.com. It does not specify mobile breakpoints, hover or focus styling, motion, loading states, or exact account and subscription flow behavior.
