# How arcraiders.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/arcraiders.com-design)

Last updated: 2026-07-30

## Captured pages

[![Creator program hero](https://pin.fontofweb.com/7113?format=jpg)](https://design.withfudge.com/share/pin-7113)

[Creator program hero](https://design.withfudge.com/share/pin-7113)

[![Creator program section](https://pin.fontofweb.com/7114?format=jpg)](https://design.withfudge.com/share/pin-7114)

[Creator program section](https://design.withfudge.com/share/pin-7114)

[![Creator program page](https://pin.fontofweb.com/7115?format=jpg)](https://design.withfudge.com/share/pin-7115)

[Creator program page](https://design.withfudge.com/share/pin-7115)

[![Patch notes](https://pin.fontofweb.com/5606?format=jpg)](https://design.withfudge.com/share/pin-5606)

[Patch notes](https://design.withfudge.com/share/pin-5606)

[![Home](https://pin.fontofweb.com/4471?format=jpg)](https://design.withfudge.com/share/pin-4471)

[Home](https://design.withfudge.com/share/pin-4471)

## Design character

ARC Raiders pairs a utilitarian game-world identity with unusually disciplined editorial structure. It alternates between cinematic, character-led dark campaign surfaces and a warm paper-like reading surface for news. The signature is not a generic sci-fi dashboard: it is bold black type, cream stock, gold action color, and a repeated stack of bright signal stripes.

## Overview

### Overall visual thesis

Let the game art carry the atmosphere, then place clear, almost poster-like typography over it. Supporting pages reduce the spectacle into a legible editorial grid. The same navigation, logo, gold action treatment, and stripe motif make those modes feel like one identity.

### Key characteristics

- Full-bleed photographic or illustrated character art behind darkened hero copy.
- A warm cream navigation and editorial surface against near-black campaign sections.
- Heavy uppercase display type with compact navigation labels and large, plain-language calls to action.
- Gold buttons and selectively gold-highlighted words rather than a broad rainbow UI palette.
- Four colored diagonal stripes used as a recognisable graphic device in the logo and campaign art.
- Thin rules and contained white content cards bring order to long-form news pages.

### What must be preserved

Preserve the contrast between immersive campaign art and restrained reading layouts. Keep the graphic stripes specific and purposeful, keep gold rare enough to signal action or emphasis, and protect the large type from visual competition.

## Structured design tokens

| Token | Exact value | Use in the captured pages |
| --- | --- | --- |
| `color/accent-gold` | `#F1AA1C` | Buttons and highlighted words on the creator-program page |
| `color/text-primary-cream` | `#ECE2D0` | Main text over the dark creator-program surface |
| `color/text-secondary-light` | `#FFFFFF` | Supporting hero and navigation text where lighter contrast is used |
| `space/tight` | `12px` | Small vertical spacing observed around text blocks |
| `space/control` | `16px` | Repeated compact control and internal spacing |
| `space/content` | `20px`, `24px`, `32px`, `40px` | Article, card, and section intervals |
| `space/hero` | `80px` horizontal / vertical padding | Large campaign content inset in retained creator-program views |
| `radius/compact` | `4px`, `5px` | Small labels and lightly softened contained elements |
| `border/strong-rule` | `2px solid` | Repeated section and card boundaries where recorded |

These values are only the values retained for the inspected creator-program captures. The collection does not establish a complete token library.

## Colors

Gold (`#F1AA1C`) is the active brand accent: it fills the primary buttons and punctuates selected words within otherwise light copy. It should not become the default page background or general body-text color. The dark campaign surface keeps cream (`#ECE2D0`) readable and slightly softer than pure white; white appears for selected secondary text.

The visual identity also uses red, yellow, green, and cyan stripes as a logo and decorative signal, but the captures do not establish exact values or a reusable semantic state system for them. The editorial patch-notes view switches to a warm cream page with very dark type and gold divider rules. No complete error, success, hover, or disabled palette is shown.

## Typography

The retained records do not name a font family or licence. The implementation reference is therefore the observed hierarchy, weights, proportions, and all-caps treatment rather than a claimed font stack.

| Token | Font family | Size | Weight | Line height | Letter spacing | Usage |
| --- | --- | --- | --- | --- | --- | --- |
| Campaign display | Family not retained | `64px` to `80px` | `700` | `58.4px` where retained on the 64px style; `80px` on one 80px style | `2px` on the retained 64px style | Main creator-program headline |
| Editorial heading | Family not retained | `32px` | `400` | not retained | not retained | Patch-note and supporting page headings |
| Body | Family not retained | `16px` | `400` | not retained | not retained | Navigation, paragraph copy, and supporting information |
| Compact UI | Family not retained | `16px` | `600` | not retained | `1.6px` where retained | Button and compact label treatment |
| Body-large | Family not retained | `20px` | `400` | `27px` | not retained | Expanded supporting copy |

The campaign hierarchy is high contrast: bold uppercase display text is used for the page proposition, while the supporting line is much calmer. Navigation and buttons have compact, tracked uppercase labels. Numerals in the patch-note title are treated as part of the same heavy editorial heading. Use a robust sans-serif fallback only as an implementation contingency; the captures do not supply a production font family or license.

## Layout

The wide creator-program view uses a shallow cream header across the full viewport, then a full-bleed hero image with centered copy. The navigation distributes the logo, several grouped links, compact social icons, and a right-aligned purchase CTA in one horizontal band. The hero is laid out around a centered vertical axis, with two actions sitting side by side beneath the message.

The subsequent campaign section moves to a dark, open stage: large left-aligned copy occupies the left half while a character illustration occupies the right. The stripe motif enters from the lower-left edge and does not behave like a conventional container border.

The news capture narrows into a centered editorial column. It places category, title, and date at the top, a single wide feature image below, then a long reading column divided by fine gold rules. Linked stories are wide white cards with a thumbnail on the left and copy on the right. The captures show wide views, but do not establish an exact max-width, grid measurement, or mobile breakpoint.

## Visual language

### Imagery and illustration

Campaign pages rely on tightly art-directed character imagery with a dark overlay so that the hero type stays readable. The creator section uses a separate cutout-style character illustration against a deep near-black field. News uses an in-world promotional image as a rectangular editorial asset rather than a decorative backdrop.

### Surface treatment

Two intentional modes are visible: a near-black immersive campaign surface and a warm cream editorial surface. The top navigation is cream even when it sits above the dark campaign world, making it feel like a persistent utility strip.

### Borders, depth, and shape

Depth comes primarily from image layers and contrast, not visible drop shadows. Where containment is needed, use thin rules or a `2px` solid boundary. Buttons and small labels are only lightly rounded, avoiding the soft card language common to productivity products.

### Motion

No motion behavior is established by the inspected captures.

## Components

### Global navigation

- **Purpose:** provide a stable route and purchase layer above both campaign and editorial content.
- **Anatomy:** colored-stripe wordmark, grouped links with chevrons, compact social icons, and a right-aligned purchase action.
- **Background:** warm cream.
- **Text color:** very dark text; social icons use a muted dark treatment.
- **Typography:** compact uppercase UI treatment.
- **Radius and padding:** the purchase action is lightly rounded; exact navigation padding is not retained.
- **Variants:** the home/news captures show the same identity but do not establish interaction states.

### Campaign hero

- **Purpose:** introduce a programme or major game-world message.
- **Anatomy:** full-bleed art, logo lockup, oversized headline, supporting sentence, and paired actions.
- **Background:** darkened character art.
- **Text color:** cream or white, with strong image contrast behind it.
- **Typography:** campaign display plus a smaller supporting line.
- **Dimensions:** fills the content width under the header; no fixed hero height is established.
- **Variants:** one filled gold CTA and one outlined secondary CTA are shown.

### Gold action button

- **Purpose:** make the primary progression or purchase action unmistakable.
- **Background:** `#F1AA1C`.
- **Text:** very dark uppercase label.
- **Typography:** compact UI label; `600` weight and `1.6px` tracking are retained for one compact text style.
- **Radius:** compact, not pill-shaped.
- **Visible states:** only the resting filled treatment is shown.

### Outlined secondary action

- **Purpose:** offer a second route without overtaking the primary CTA.
- **Background:** transparent over the hero image.
- **Text and border:** light text with a light outline.
- **Variants:** shown beside the gold primary action. No hover or pressed state is established.

### Editorial article frame

- **Purpose:** make long patch notes easy to scan and continue reading.
- **Anatomy:** category tag, title, date, divider, feature image, body, list, and related-story cards.
- **Background:** warm cream.
- **Text:** dark near-black headings and body copy.
- **Borders:** fine gold horizontal dividers; related items use contained white panels with a thin colored outline.
- **Typography:** heavy title, ordinary reading copy, and strong section labels.

### Related-story card

- **Purpose:** route readers to another news item.
- **Anatomy:** rectangular thumbnail, title, and date in a horizontal arrangement.
- **Background:** white.
- **Border:** a fine cool-toned outline is visible in the inspected patch-note capture.
- **Responsive behavior:** a mobile stack is not shown.

## Responsive behavior

The returned set contains several wide viewports and one narrower editorial capture, but not matched desktop and mobile views of the same page. The available material supports the existence of a wide horizontal navigation, centered campaign hero, side-by-side hero actions, and a narrow editorial reading column. It does not support exact navigation collapse rules, hero cropping changes, breakpoint values, or how the related-story cards stack on phones.

## Practical implementation guidance

### Preserve

- The cream/dark mode switch between editorial utility and cinematic promotion.
- Full-width art with deliberate darkening behind large hero type.
- Gold for action and selected word emphasis.
- The coloured stripe device as a small but repeated identifier.
- Firm typography, thin rules, and light rounding.

### Avoid

- Replacing the cream editorial surface with generic white dashboards.
- Overusing gold or turning the stripe colors into status chips.
- Soft, heavily shadowed cards or pill-heavy controls.
- Claiming a named typeface, font license, breakpoints, or unshown component states.

### Recommended implementation order

1. Establish the cream and near-black surfaces, dark type, cream type, and gold accent.
2. Build the persistent header and its contained purchase action.
3. Build the art-led hero with readable centered copy and paired actions.
4. Build the editorial article column, rules, and related-story card.
5. Add the stripe motif and verify its scale against representative campaign art.
6. Define responsive variants only after matched viewport captures or direct product requirements are available.

### Accessibility considerations

Keep the hero overlay strong enough for readable cream and white text over art. Gold should be paired with text, shape, or location changes so it is not the only action or emphasis cue. Maintain visible keyboard focus for header links and both hero actions, and provide text alternatives for decorative and content-bearing artwork.

## Scope

This guide is based on retained ARC Raiders home, creator-program, and patch-notes captures. It supports the observed visual system and recorded measurements, while named fonts, licenses, exact layout widths, full state colors, and breakpoint behavior remain unspecified.

## Colors

- `#f1aa1c`
- `#ece2d0`
- `#ffffff`
