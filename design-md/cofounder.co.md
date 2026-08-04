# How cofounder.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/cofounder.co-design)

Last updated: 2026-08-04

## Captured pages

[![Full-bleed pixel park hero with skyline, clouds, and laptop](https://pin.fontofweb.com/9471?format=jpg)](https://design.withfudge.com/share/pin-9471)

[Full-bleed pixel park hero with skyline, clouds, and laptop](https://design.withfudge.com/share/pin-9471)

[![White product page with sunflower rail and centered email composer](https://pin.fontofweb.com/8173?format=jpg)](https://design.withfudge.com/share/pin-8173)

[White product page with sunflower rail and centered email composer](https://design.withfudge.com/share/pin-8173)

[![Centered pricing page with serif headline, price tile, and slider](https://pin.fontofweb.com/8171?format=jpg)](https://design.withfudge.com/share/pin-8171)

[Centered pricing page with serif headline, price tile, and slider](https://design.withfudge.com/share/pin-8171)

[![White landing hero above the landscape stage with a glass prompt](https://pin.fontofweb.com/8169?format=jpg)](https://design.withfudge.com/share/pin-8169)

[White landing hero above the landscape stage with a glass prompt](https://design.withfudge.com/share/pin-8169)

## Overview

Cofounder uses a split personality that still feels like one system. The opening view is a full-bleed illustrated world with a bright blue sky, grassy distance, and a laptop placed inside the scene; later pages become white editorial layouts with a sunflower rail, a serif headline, and small monochrome controls. The design never turns into a heavy dashboard. It stays airy, image-led, and quiet around the edges.

The strongest constant is contrast between a soft, storybook picture layer and a very restrained interface layer. The UI almost always stays black, white, and gray. The artwork supplies the color, scale, and mood. When the page needs to feel more product-like, it does so through glassy input shells, a price tile, and thin rules rather than dense chrome.

## Colors

### Core interface colors

| token | value | use |
|---|---|---|
| action | `#0A0A0A` | Filled pills, strong labels, and the darkest interface accents |
| ink | `#171717` | Primary headlines, body text, and most neutral type |
| muted-ink | `#646464` | Supporting copy, helper text, and quieter labels |
| canvas | `#FFFFFF` | Main page background and the open space around sections |
| surface | `#F5F5F2` | Soft card fill, price tile fill, and quiet inset surfaces |
| surface-quiet | `#FBFBF8` | Very light shells, page frames, and neutral panels behind content |
| border | `#DDE3DD` | Hairline rules, card outlines, and section dividers |
| border-strong | `#B4B8B4` | Slightly firmer edges and shadow-like low-contrast depth |

The visible color system is mostly monochrome. The interface itself does not need a dark theme to feel balanced; the black action color and dark ink already carry the contrast. The saturated blues, greens, and sunflower yellows belong to the pixel-art scenes, not to the chrome. That separation matters: the artwork can be vivid without forcing the buttons, labels, or cards to compete with it. On the white pages, use the canvas and surface tokens for almost everything, then let the action token anchor the only hard contrast. On the blue opening scene, keep the UI pale and translucent so the illustration remains dominant.

## Typography

The system uses four families with distinct jobs. Pp Mondwest handles the dramatic claims and the pricing headline. Af Another Sans carries the everyday interface voice on the white pages. Tt Neoris appears in the blue opening crop and gives that version a lighter, more modern sans presence. Geist Mono is reserved for the numeric price and count-like readings, which keeps figures crisp beside the soft art.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Pp Mondwest | 5.625rem | 400 | 1 | -0.02em | Large white-page hero line |
| section-display | Pp Mondwest | 3.375rem | 400 | 1 | -0.02em | Pricing headline and major section titles |
| hero-sans-display | Tt Neoris | 2.875rem | 400 | 1.08 | -0.01em | Blue opening headline on the landscape scene |
| body | Af Another Sans | 1rem | 400 | 1.5 | 0em | Paragraph copy, explanations, and neutral content |
| body-strong | Af Another Sans | 0.9375rem | 500 | 1.4 | -0.01em | Button text, short emphasis, and small prompts |
| label | Af Another Sans | 0.8125rem | 500 | 1.5 | -0.01em | Nav items, chips, slider labels, and rail text |
| numeric-display | Geist Mono | 3rem | 400 | 1.3 | -0.03em | Price figure and numeric readouts |

The hierarchy depends on size and texture more than on weight variation. Pp Mondwest is light enough to feel editorial, not ornamental. Af Another Sans stays compact and practical, especially in the 13px and 15px roles. The result is a page that can switch between poetic and utilitarian without changing its voice. Attribution is supported only for the listed designers and vendors in the packet; confirm licensing before reuse.

## Layout

The white pages are built around a wide center column with generous side gutters, but the blue opening hero stretches almost edge to edge. That contrast creates a clear chapter break. The header stays thin and horizontal, with the brand on the left and small text links on the right. In the white views, a sunflower rail sits at the far left and gives the page a vertical anchor without turning into a full sidebar. It is decorative and navigational at the same time.

The hero composition on the white pages is left-heavy. A large headline sits above a short paragraph and a pair of pills, while the landscape stage occupies the lower half of the page. The stage itself behaves like a framed artwork: the border is soft, the corners are rounded, and the product elements float inside the image rather than breaking the scene apart. The pricing page simplifies the structure again. It centers the headline, then stacks the price tile and slider in a compact vertical rhythm so the number becomes the focal point.

Spacing is spacious but not lazy. Large gaps separate chapters, while the inside of each chapter stays tight enough to keep the product message readable in one glance. The system likes broad white fields, a few well-placed rules, and one dominant visual object per section.

## Visual language

Cofounder’s visual language is pixel-art pastoral: blue sky, rounded clouds, tree canopies, grass, flowers, and a laptop placed inside the landscape. That art direction makes automation feel playful and expansive rather than clinical. The interface overlays are intentionally calm. Prompt boxes, email composers, toasts, and pricing tiles sit on top of the art with a glassy, lightly frosted feel. They do not fight the scene; they hover over it.

Shape is used with restraint. Controls are softly rounded, major panels are more generous, and the price tile is the cleanest card in the system. The black pill action stands out because everything else is so pale. This creates a useful contrast: the art is lively, the chrome is quiet, and the call to act is unmistakable. The sunflower motif repeats across the side rail and the art itself, which gives the brand a small botanical signature without cluttering the page.

Depth is shallow. A fine border and a soft shadow are enough for the cards. Heavy gradients or strong drop shadows would undermine the hand-built, game-like atmosphere of the scenes. The pixel edges should stay visible in the illustration layer; the UI layer should stay crisp and vector-clean.

## Components

### Header

The header is a low-profile bar with the wordmark on the left and text links on the right. On the white pages, the links read as light interface text rather than a nav strip. The main acquisition control is a black pill, while the secondary login control is a pale outlined pill. That pairing is part of the system: one action feels decisive, the other feels available but quiet. Keep the header visually secondary to the hero and do not thicken it into a branded toolbar.

### Hero claim

The strongest hero uses Pp Mondwest at a very large size on white, while the blue opening crop uses Tt Neoris at a slightly smaller but still prominent scale. Both versions rely on short supporting copy and one or two compact actions. The line length should stay controlled so the claim reads as a single block instead of a banner. The hero has to feel calm even when the background image is loud. Give the headline enough empty space to breathe, and keep the supporting sentence one step softer in color.

### Landscape stage

The landscape stage is the most distinctive product container. It uses a rounded rectangular frame, a soft border, and a shallow shadow. Inside it, the prompt composer is a translucent bar that sits over the art rather than replacing it. Floating toasts and task cards should feel like they were added to the scene, not pasted over it. Preserve the sense that the product lives inside the world. The panel should remain wide, with the image doing most of the spatial work and the interface occupying only a small part of the frame.

### Pricing block

The pricing page centers its message and keeps the structure simple: headline, small support line, price tile, and slider. The price figure uses Geist Mono, which makes the digits feel exact and mechanical. The tile is soft, white, and slightly elevated, with a more generous radius than the header pills. The slider is thin and technical, but it still fits the system because its labels are small and subdued. Treat the price card as the hero object in this section. Everything else should support it.

### Sunflower rail and quiet navigation

The sunflower rail is a narrow visual anchor rather than a major interface block. It gives the white pages a left edge and keeps the layout from feeling empty. The stacked rail links are small, muted, and restrained. Their purpose is orientation, not sales pressure. They should never become a heavy menu. Keep the rail narrow enough that the central content still feels like the main event.

### Glass prompt and small cards

Prompt shells, message toasts, and task chips all share the same logic: pale fill, soft edge, and concise text. They appear to float because their surface is lighter than the art beneath them. These pieces should stay small and useful. They are there to make the product feel active inside the world, not to create a dashboard grid. Their text should stay short, and their borders should remain subtle.

## Responsive behavior

On narrower screens, the system should collapse without losing its order of importance. The hero copy should stay above the art, and the prompt composer should remain readable before the surrounding scenic detail. The sunflower rail should compress into a smaller header or a compact side marker rather than stealing width from the content. The pricing block should remain centered, with the price tile staying large enough to read at a glance.

If the stage becomes vertical, keep the image dominant and move the interface overlays into a stacked relationship instead of scattering them. The goal is to preserve the storybook feel, not to turn the layout into a dense mobile app. Buttons can stack earlier, but their visual contrast should stay strong. Labels must remain legible at small sizes, and the line length of the hero headline should be shortened carefully so the wording still feels intentional.

## Practical implementation guidance

### Preserve

- Keep the split between the poetic image layer and the restrained interface layer.
- Preserve the white canvas, black action, and soft gray support text.
- Keep Pp Mondwest for the big claim and Af Another Sans for the utility voice.
- Let the art carry the color while the chrome stays monochrome.
- Keep card depth light and borders thin.

### Avoid

- Avoid turning the hero into a generic AI gradient banner.
- Avoid heavy shadows, thick rules, or dashboard chrome.
- Avoid adding new accent colors to the interface layer.
- Avoid rounding every object the same way; the controls, panels, and tiles need different radii.
- Avoid replacing the landscape scene with flat stock imagery.

### Recommended build order

1. Establish the monochrome color tokens and the four font roles.
2. Build the header with the two button treatments.
3. Recreate the white hero and the blue opening hero as separate layout variants.
4. Build the landscape stage with translucent prompt and toast primitives.
5. Build the pricing block with the numeric tile and slider.
6. Finish the sunflower rail and small navigation pieces.
7. Tune spacing so the page still feels open at large widths.

### Accessibility

- Keep contrast high enough on translucent pills and glass shells.
- Maintain visible focus styling on all links, pills, and slider controls.
- Do not rely on color alone for active nav or slider position.
- Give the landscape scenes and floating product panels clear alternative text.
- Keep the hero headline readable when the viewport narrows.

## Scope note

This guide covers the public marketing surfaces shown here: the illustrated homepage hero, the white editorial landing pages with the landscape stage, the sunflower rail, and the pricing page. It does not specify motion, hover or focus behavior, exact mobile breakpoints, or any unseen application screens.
