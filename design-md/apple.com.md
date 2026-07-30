# How apple.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/apple.com-design)

Last updated: 2026-07-30

## Captured pages

[![Configured MacBook Pro detail](https://pin.fontofweb.com/9883?format=jpg)](https://design.withfudge.com/share/pin-9883)

[Configured MacBook Pro detail](https://design.withfudge.com/share/pin-9883)

[![Populated shopping bag](https://pin.fontofweb.com/9886?format=jpg)](https://design.withfudge.com/share/pin-9886)

[Populated shopping bag](https://design.withfudge.com/share/pin-9886)

[![Post-configuration accessories](https://pin.fontofweb.com/9884?format=jpg)](https://design.withfudge.com/share/pin-9884)

[Post-configuration accessories](https://design.withfudge.com/share/pin-9884)

[![FAQ and legal information](https://pin.fontofweb.com/9888?format=jpg)](https://design.withfudge.com/share/pin-9888)

[FAQ and legal information](https://design.withfudge.com/share/pin-9888)

## Design character

Apple Store commerce is precise, spacious, neutral, and conversion-focused. A broad white canvas gives product imagery and purchase information room to breathe; near-black and cool-gray type create hierarchy; blue is reserved for links and decisive actions. Softly rounded pale panels frame the hardware, while one-pixel dividers organize configuration, checkout, FAQ, and legal information without turning the interface into a field of cards.

The qualities to preserve are product-first scale, disciplined color, a measured regular/semibold type hierarchy, generous task-specific whitespace, and a decision sequence that moves from product identity through configuration and fulfillment to price and action.

## Overview

The captured Apple Store pages turn a complex purchase into a calm sequence of product presentation, configuration, reassurance, and checkout. The interface is almost entirely white and light gray. Saturated color is scarce: blue identifies links and decisive purchase actions, while black is reserved for Apple Pay and the darkest product imagery. The product remains the visual center; interface chrome stays quiet.

This is not the cinematic tile system of Apple’s marketing homepage. The studied surface is commerce: a MacBook Pro configuration, a populated bag, accessory recommendations, and FAQ/legal sections. Its character is **precise, spacious, neutral, and conversion-focused**.

Key characteristics:

- A broad white canvas with a narrower commerce column and large product-media regions.
- A single-family sans-serif hierarchy using regular and semibold weights.
- Near-black primary text, cool gray supporting text, and one blue action color.
- Large product renders on pale, softly rounded panels.
- Hairline dividers instead of heavy cards or shadows.
- Purchase information ordered from identity and configuration to fulfillment, price, and action.
- Dense details remain readable through alignment, line length, and sectional whitespace.

## Design tokens

The following inventory separates directly recorded values from practical names authored for this guide. Token names are reusable labels; the measurements are tied to the captured Apple Store pages.

### Color inventory

| Token | Value | Use in the captured pages | Support |
|---|---:|---|---|
| `color.ink` | `#1d1d1f` | Headings, prices, product names, body copy | Recorded primary text |
| `color.ink-secondary` | `#6e6e73` | Supporting descriptions and lower-emphasis information | Recorded secondary text |
| `color.ink-subdued` | `#86868b` | Fine print and quieter utility copy | Observed palette value |
| `color.action` | `#0066cc` | Links, outlined focus treatment, and blue purchase actions | Observed recurring accent |
| `color.canvas` | `#ffffff` | Main page and content background | Observed palette value |
| `color.void` | `#000000` | Apple Pay action and deep product imagery | Observed palette value |

Do not treat this as a complete status palette. Success, warning, destructive, disabled, and validation colors are not established by the available pages.

### Typography inventory

Apple-hosted font assets for the studied domain identify **SF Pro**. The capture measurements establish the sizes and weight relationships below; they do not establish font licensing for use outside Apple properties.

| Token | Family | Size | Weight | Line height | Tracking | Observed use |
|---|---|---:|---:|---:|---:|---|
| `type.display-commerce` | SF Pro | 40px | 600 | 44px | Unavailable | Major purchase or section statement |
| `type.heading-xl` | SF Pro | 32px | 600 | 36px | Unavailable | FAQ title and large product-region heading |
| `type.heading-lg` | SF Pro | 25.5px | 600 | 37.5px | Unavailable | Product and configuration headings |
| `type.heading-md` | SF Pro | 19.89px | 600 | 29.25px | Unavailable | Option-group and recommendation headings |
| `type.heading-sm` | SF Pro | 17px | 600 | 21px | Unavailable | Product names, benefits, compact emphasis |
| `type.body` | SF Pro | 17px | 400 | 25px | Unavailable | Primary readable body and purchase information |
| `type.body-compact` | SF Pro | 14px | 400 | 20px | Unavailable | Descriptions, details, fulfillment, secondary controls |
| `type.utility` | SF Pro | 12px | 400 | 16px | Unavailable | Navigation, metadata, and legal/utility text |

The stable hierarchy is more useful than any one measured decimal: 40/44 and 32/36 create the major anchors; 25.5/37.5 and 19.89/29.25 organize product decisions; 17/25 carries readable content; 14/20 and 12/16 handle increasingly compact information.

### Spacing inventory

The captured pages contain repeated spacing values, but they do not resolve into one universal scale. Use them as contextual reference values:

| Value | Captured context |
|---:|---|
| 9.6–13.6px | Tight separation inside utility and text groups |
| 17px | Repeated vertical padding and compact row rhythm |
| 22px | Horizontal inset inside narrower content regions |
| 30–32px | Separation between related product or summary groups |
| 40px | Frequent section and component interval |
| 48px | Product-region or section-bottom breathing room |
| 60px | Major section padding and wide-layout separation |
| 70–76px | Large product-stage padding |

Large margins of 516px, 538px, and 620px appear in the 2048px-wide captures. These are outcomes of centered wide-screen layouts, not portable spacing tokens. Recreate the constrained column relationship rather than hard-coding those margins.

### Shape and border inventory

| Token | Value | Observed use |
|---|---:|---|
| `radius.control` | 12px | Smaller rounded controls or regions |
| `radius.panel` | 18px | Large pale product and summary panels |
| `radius-round` | 36px | Fully rounded small elements in limited occurrences |
| `border.hairline` | 1px solid | FAQ rows, product summaries, option regions, and section separators |

No repeatable shadow or gradient system was recorded. The visual hierarchy comes from pale surfaces, imagery, scale, and whitespace rather than elevation effects.

## Colors

### Neutral canvas

White is not merely a background; it is the main spacing device. Large unoccupied regions isolate the product and reduce the perceived complexity of specifications, pricing, delivery, and legal information. Pale gray appears as a contained product surface rather than as a full-page alternate theme.

### Text hierarchy

`#1d1d1f` keeps primary text softer than absolute black while remaining highly legible. `#6e6e73` reduces the volume of explanations and supporting details without making them decorative. `#86868b` belongs to the quietest information, especially dense legal or auxiliary copy.

### Action blue

`#0066cc` is the only recurring saturated interface color in the captured set. It appears in links, the visible FAQ focus outline, and blue purchase actions. This consistency is important: blue means “continue, inspect, or act.” Avoid introducing a second competing button color.

### Black action

Black is used selectively for the Apple Pay checkout path, distinguishing a branded payment mechanism from the general blue checkout action. Do not generalize black into a second primary-action style for unrelated controls.

## Typography

### Family and voice

The commerce interface uses SF Pro as a single-family system. Regular weight carries descriptions, configuration facts, fulfillment information, and legal text. Semibold creates hierarchy without requiring decorative typography. There is no serif display voice or contrasting editorial family in the captured store views.

### Hierarchy principles

- Major statements are large but compact: 40px type uses a 44px line height.
- Product and option headings have more generous leading, allowing long configuration names to wrap cleanly.
- Body copy centers on 17px/25px, giving transactional information a comfortable reading cadence.
- Compact product descriptions and fulfillment details use 14px/20px rather than compressing the main body style.
- Navigation and legal metadata can descend to 12px/16px, but remain structurally separated from purchase decisions.
- Semibold is the main emphasis weight. Heavy bold is not required for hierarchy.
- Letter-spacing values were not captured, so no tracking rule should be asserted.

### Numerals and prices

Prices use the same sans-serif voice but gain prominence from size, weight, and isolation. In the bag, the total is the page’s opening headline. On the product page, price sits near the final purchase action after specifications and fulfillment. Preserve this order: the number is prominent, but it remains part of a decision sequence.

### Availability

The domain’s assets identify SF Pro, but this guide does not establish a license for third-party deployment. When adapting the visual system, choose a legally available sans-serif with comparable regular/semibold contrast and validate the measured hierarchy rather than claiming exact typographic equivalence.

## Layout

### Wide frame and constrained commerce column

The captures are 2048 × 1194 desktop section crops. Apple uses the width asymmetrically depending on the task:

- The configured product page gives most of the viewport to a three-panel product gallery and reserves a narrower right rail for specifications, delivery, price, and action.
- The bag uses a centered content block where the total and checkout controls lead into a horizontal product row.
- Accessory recommendations use a three-column composition with generous gutters and aligned product information.
- FAQ and legal content use a narrower reading column centered within the wide frame.

The layout is not one fixed maximum width. It selects a measure appropriate to the information type while maintaining consistent outer alignment.

### Product-detail composition

The configured product view is a two-zone layout:

1. A large media stage with one dominant frontal image and two secondary detail images.
2. A sticky-looking decision rail containing configuration summary, icons, fulfillment, price, purchase action, and save/share utilities.

The pale panels separate images from the white canvas without borders or shadows. The decision rail uses dividers and vertical spacing to turn a long specification into short, scannable blocks.

### Bag composition

The bag begins with a centered total and two equal checkout actions. A divider introduces the line item. Within the item row, product image, title/details, quantity, price, and secondary actions occupy stable columns. The line item then expands vertically into hardware, software, protection, and delivery information.

### Whitespace philosophy

Whitespace is functional. It establishes reading order, makes high prices feel considered rather than urgent, and prevents dense specifications from resembling a data table. Avoid filling empty regions with badges, promotional cards, or decorative illustrations.

## Visual language

### Product imagery

Product imagery is large, isolated, and literal. The configured MacBook is shown frontally, from the side, and from the rear. The images explain the physical object before the text asks for a decision. Accessory images similarly sit above product names and descriptions with enough space to remain recognizable.

### Flat surfaces

The interface is predominantly flat. Pale panels create figure/ground separation; hairline rules create sequence. No captured surface requires a pronounced card shadow. The absence of depth effects is part of the precision.

### Rounded geometry

Large product-media panels use soft 18px corners. Smaller regions and controls show 12px rounding, while a few compact elements become fully rounded. Radius follows scale: larger surfaces receive a calm, visible curve; row dividers and text groups stay rectilinear.

### Dividers

One-pixel dividers carry significant structural work. They separate navigation, bag items, FAQ rows, configuration groups, and legal regions. Use them to clarify sequence, not to box every component.

### Motion

Motion is not established by the still captures. Do not infer transitions, sticky behavior, accordion timing, or product-gallery animation from these images.

## Components and states

### Global navigation

A compact horizontal navigation places the Apple mark first, product categories across the center, and search/bag utilities at the end. It stays visually quieter than page content. The captured navigation is a wide desktop state; mobile behavior is not available.

### Product sub-navigation

The MacBook Pro sub-navigation pairs a bold product label with compact links such as Overview, macOS, and Tech Specs. A thin divider separates it from the transactional content below.

### Product media stage

Anatomy:

- One dominant pale panel.
- One or more secondary detail panels.
- Large, centered product renders.
- Consistent panel radius and spacing.

The media stage contains no visible carousel chrome in the studied capture. Do not add dots, arrows, or thumbnails unless another state supports them.

### Configuration summary rail

Anatomy:

- Product/configuration title.
- Processor line and Apple Intelligence marker.
- Icon-led specification grid.
- Supporting port/display copy.
- Fulfillment choices.
- Price and payment information.
- Full-width purchase action.
- Save and share utilities.

The rail converts a long configuration into stacked decision blocks. Icons reinforce scanability but do not replace text.

### Primary purchase action

The standard purchase action is a full-width blue button with white text. In the bag header, the blue Check Out action is paired with a black Apple Pay action of equal visual size. This parallel layout gives the payment routes equal structural weight while preserving their brand treatments.

### Product recommendation item

Anatomy:

- Product or service image.
- Optional small status label.
- Semibold name.
- Compact description or feature list.
- Price.
- Blue Add to Bag action.
- Availability or delivery detail.
- Optional supporting links.

The recommendation grid allows different content lengths without adding card borders. Alignment and column width maintain coherence.

### Bag summary and line item

The populated bag state includes:

- Large total statement.
- Delivery/returns reassurance.
- Two checkout routes.
- Product image and long configuration name.
- Quantity selector.
- Price.
- Remove and Save for later actions.
- Expandable product details.
- Protection and fulfillment information.

The capture establishes the populated state only. Empty bag, quantity validation, unavailable inventory, and destructive confirmation are unknown.

### FAQ accordion

The captured FAQ shows one expanded row and several collapsed rows. Questions use semibold text, right-aligned chevrons, and one-pixel dividers. The expanded answer preserves a narrow readable measure. A blue outline is visible around the active question, providing a concrete focus treatment for this component.

Supported states:

| State | Visible treatment |
|---|---|
| Collapsed | Question, downward chevron, divider |
| Expanded | Question, upward chevron, answer text, divider |
| Focused active row | Blue rectangular outline around the question region |

Hover, disabled, loading, and error states are not shown.

### Legal information

Legal copy uses the smallest type tier, subdued gray, short paragraphs, and underlined inline links. It sits on a subtly separated lower surface. Preserve readable line length and paragraph separation even when the type is compact.

## Responsive behavior

The capture set contains only wide desktop section crops. It supports desktop layout relationships but not breakpoint values, mobile navigation, stacking thresholds, touch-target changes, or type scaling.

A faithful adaptation may allow the gallery, recommendation columns, bag line item, and checkout actions to stack as space contracts, but those are implementation recommendations—not observed Apple behavior from this set. Preserve information order before preserving column count.

## Practical guidance

### Preserve

1. Use white space as the primary grouping mechanism.
2. Keep near-black, secondary gray, and blue in a strict hierarchy.
3. Use a single sans-serif family with regular and semibold weights.
4. Maintain the measured type ladder from display through utility text.
5. Give product media more visual area than interface chrome.
6. Use pale rounded panels for large media, not shadowed generic cards.
7. Use one-pixel rules to organize long transactional sequences.
8. Place fulfillment and reassurance close to price and purchase actions.
9. Keep alternative checkout routes structurally parallel.
10. Let dense legal and specification text remain readable through measure and spacing.

### Avoid

1. Do not turn the page into a dense marketplace grid.
2. Do not add multiple saturated accent colors.
3. Do not use heavy shadows to establish every group.
4. Do not make all text bold; regular/semibold contrast is sufficient.
5. Do not hide essential configuration or delivery facts behind decorative UI.
6. Do not treat the observed spacing values as a mathematically normalized token scale.
7. Do not invent mobile breakpoints or unseen interaction states.
8. Do not infer the Apple marketing homepage system from these Store captures.
9. Do not claim that the font asset reference grants a third-party license.

## Known gaps

The captures do not establish:

- Mobile or tablet layouts.
- Hover, pressed, disabled, loading, validation, or error treatments.
- Empty bag or unavailable-inventory states.
- Motion and transition timing.
- A repeatable shadow or gradient system.
- Exact letter-spacing values.
- A complete semantic status palette.
- The wider Apple marketing homepage, editorial, support, or account systems.

## Reference scope

This guide studies eight Apple Store captures centered on MacBook Pro listing/configuration and a populated bag. The representative images above cover the configured product gallery, bag, accessory recommendations, expanded FAQ, and legal information. All observed screenshots are 2048 × 1194 desktop section crops.

## Colors

- `#1d1d1f`
- `#6e6e73`
- `#86868b`
- `#0066cc`
- `#ffffff`
- `#000000`

## Captured typography reference from apple.com

- **Sf Pro** — weight 600 · size 40px
- **Sf Pro** — weight 400 · size 17px
