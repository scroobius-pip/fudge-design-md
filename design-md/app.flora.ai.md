# How app.flora.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.flora.ai-design)

Last updated: 2026-08-03

## Captured pages

[![Dark freeform canvas with tall prompt card, pinned image, and utility tray](https://pin.fontofweb.com/7889?format=jpg)](https://design.withfudge.com/share/pin-7889)

[Dark freeform canvas with tall prompt card, pinned image, and utility tray](https://design.withfudge.com/share/pin-7889)

[![Centered plans modal with left account rail and bright green checkout column](https://pin.fontofweb.com/7888?format=jpg)](https://design.withfudge.com/share/pin-7888)

[Centered plans modal with left account rail and bright green checkout column](https://design.withfudge.com/share/pin-7888)

## Overview

FLORA reads as a dark creative workspace rather than a conventional app shell. The main canvas is almost black, the content sits in soft charcoal cards, and the page gives ideas room to float across a dotted field. That open ground is important: the layout feels roomy even when several cards, notices, and utility chips are present at once.

The system is built around contrast between quiet structure and bright signals. Most surfaces stay near-black or deep charcoal, while a vivid green is reserved for the strongest actions and status cues. White copy carries the hierarchy, muted gray carries the supporting text, and a mono face appears only where the interface wants a prompt-like or technical tone. The result is controlled, compact, and operational.

Two views define the language: a freeform project canvas with pinned content and a centered plans modal. Together they show the two sides of the product: an open working surface for creation, and a dense but tidy account panel for pricing and credits.

## Colors

The palette is extremely narrow, and that restraint is part of the identity. The canvas is pure black, not soft gray, so every panel and chip reads as a deliberate object sitting on top of the field. The raised surfaces stay in the charcoal range, with `surface` and `surface-raised` doing the work of cards, trays, and modal bodies. Borders are similarly dark, so separation comes from value change rather than outline drama.

The action family is green, not blue. `action`, `action-strong`, and `action-soft` cover the visible range from primary buttons to gauge accents and positive-status fill. This green is the only hue that pushes forward. It appears on the top-right Share button, the Upgrade button, the Check out button, the credit gauge, and small success-like indicators. That repetition makes green feel like the system’s confirmation language, not a decorative accent.

Text stays simple: `ink` for primary copy, `muted-ink` for supporting labels, and `quiet-ink` for lower-emphasis utility text. White text is common on the darkest surfaces, but the interface also uses dark text on green fills so the action buttons stay readable and compact. `quiet-green` can sit behind tiny indicators or in subdued meter details when the UI needs a deeper green tone without competing with the main action color.

A useful mental model is:
- black for ground,
- charcoal for work surfaces,
- white for text and small chrome,
- bright green for actions and credit states,
- deeper green for restrained supporting accents.

There is no daylight palette here. Light only appears as text, linework, or green-tinted button fills against the black field.

## Typography

Geist carries nearly all interface copy. It gives the app a clean, modern, slightly compressed tone that works well in tight spaces. Geist Mono appears only in compact, prompt-like labels and chip text, where the interface wants a more technical rhythm. System appears in the large numeric stat and a few utility labels, which keeps the hierarchy from feeling overstyled.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 1.875rem | 400 | 1.375 | -0.02em | Large card titles and prominent modal headings |
| panel-heading | Geist | 1rem | 500 | 1.35 | -0.02em | Section labels, modal headings, and card headers |
| body | Geist | 0.875rem | 400 | 1.375 | -0.02em | Default content inside cards and notices |
| body-strong | Geist | 0.875rem | 500 | 1.375 | -0.02em | Primary button text and emphasized labels |
| label | Geist | 0.75rem | 400 | 1.333 | -0.02em | Secondary metadata, rail labels, and compact tags |
| mono-label | Geist Mono | 0.75rem | 400 | 1.333 | 0em | Prompt-like chips and technical microcopy |
| stat | System | 3.75rem | 400 | 1.4 | -0.02em | The large credit number in the pricing dial |
| ui-16 | System | 1rem | 400 | 1.5 | 0em | Generic UI labels and fallback chrome |

The hierarchy depends on size, weight, and density more than on many font families. The 14px body size is the center of gravity, 12px creates quiet labels, and 30px or 60px marks the moments when the interface wants attention. Tracking is slightly negative in Geist, which helps dense labels hold together in the dark panels. Licensing terms are not supplied in the packet.

## Layout

The canvas view uses a freeform layout with no obvious grid discipline. Content nodes sit in a large open field, separated by distance rather than by fixed columns. The project title and workspace identity remain in the upper-left corner, status notices sit near the top center, and the working content occupies the middle of the screen. A pinned image card, a text-heavy note card, and a lower-right promotional tile create an intentionally asymmetrical composition. That spread makes the page feel like an active working area instead of a neat dashboard.

The top notices are compact horizontal pills. They are visually important but spatially quiet: low height, rounded ends, thin inner separation, and one strong green button on the right side of each pill. Their job is to interrupt without taking over the canvas.

The left rail in the project view is narrow and vertical. It keeps the icon stack small, monotone, and evenly spaced so the center stage stays open. The same restraint appears in the bottom-right queue strip and in the small credits pill at the lower-left edge. Utility belongs at the margins.

The pricing modal uses a different layout rhythm. It is centered, wide, and divided into a left account rail plus a main pricing body. The left rail keeps the account sections in a vertical list, while the main body stacks a tab row, a large credit dial, and a right-aligned checkout column. That composition makes the modal feel like a control panel: information first, purchase second, confirmation last. The close control sits in the top-right corner, away from the reading path.

Rounding supports the layout hierarchy. Small controls use the 8px card radius, major shells use the 12px panel radius, and pill controls are fully rounded. Spacing is generous at the outer edges and tighter inside the cards, which keeps the canvas calm even when the content is dense.

## Visual language

The visual language is still, technical, and slightly playful. The stillness comes from the black ground, flat card fills, and the absence of bright gradients. The technical tone comes from the rail, the pricing controls, the numeric dial, and the many compact labels that resemble prompt metadata. The playfulness shows up in the way content is placed: a photo pinned beside a long text card, a curved connector line crossing the empty field, and a promotional tile sitting in the lower-right corner like a floating announcement.

Depth is restrained. The cards rely on value change, thin borders, and occasional soft shadow rather than heavy elevation. The modal feels lifted, but not glossy. The canvas cards feel anchored, but not boxed in. This keeps the UI from turning into a stack of frames.

The dotted background texture matters because it prevents the empty field from feeling blank. It gives the workspace a sense of scale and precision without becoming a visible grid system. The dots are quiet enough to stay behind the content, yet regular enough to make the open area feel intentional.

Photographic content is used as embedded content, not as decoration. The pinned image card contains a product-like scene, while the lower-right promo tile uses a photo to announce a feature. Both live inside dark shells, so the image edges and the surrounding typography stay tightly controlled. The design is happiest when images sit inside compact rectangles and the surrounding chrome stays minimal.

## Components

### App shell and top notices

The shell begins with a compact top-left identity area and a small top-right action. The notices below that use low-height pills with rounded ends and a single strong action button inside each pill. The visual language is quiet and functional: dark fill, thin border, white or muted text, and one bright green call to action. Keep these elements visually secondary to the working canvas.

### Left rail

The left rail is a narrow vertical stack of icon buttons and a small avatar at the bottom. It uses simple geometry, minimal color, and tight spacing. The icons remain monochrome and evenly spaced so the rail reads as utility, not navigation theater. The active or primary control should stand out by brightness or fill, not by adding extra decoration.

### Text card

The large text card in the project canvas is one of the strongest surface types. It has a charcoal body, rounded corners, small internal padding, and a dense block of Geist text. The title is short and the body copy is compact and paragraph-like, with a prompt or brief tone. This card type should feel like a working note: readable, precise, and able to hold long content without becoming airy.

### Pinned image card

The image card is a square-ish dark frame that holds a single image with a short label above it. The label pair uses small Geist or mono-style text and stays subordinate to the image itself. The card should keep enough outer padding to feel pinned rather than pasted. Its shape and border need to match the rest of the canvas cards so the image looks like part of the workspace, not a separate gallery.

### Queue and credits utilities

The queue strip and credits pill are tiny but important. They use the same charcoal family as the rest of the interface, then compress the text and controls into low-height rounded shapes. The queue strip reads like a status tray with an active count and a trailing icon button. The credits pill sits quietly in the lower-left corner and should remain visually lightweight. Both components depend on compact typography and strong spacing discipline.

### Pricing modal

The pricing modal is the densest component in the system. It combines account navigation, tabs, a large credit gauge, and a checkout column. The tab row is small and pill-like, with the active state separated by value rather than color noise. The gauge uses the large System stat number in the center and a muted arc around it. The checkout column keeps the strongest action at the bottom, after the price and the brief list of what the credits can produce. The modal’s shape is deliberate and calm; it should not feel like a flashy paywall.

### Primary action

The green button is the system’s loudest visual object, but it is still compact. It uses a pill shape, dark text, and a fill that lands in the action green family. This control appears in the top notices, the pricing modal, and the shell. It should always look like the same button family so the product’s main calls to action stay consistent.

## Responsive behavior

When the viewport narrows, the canvas should preserve the reading order of the main work surface before the utility rail. The left rail can collapse into a compact strip or drawer, but the pinned content, the text card, and the floating utilities should still read in a stable sequence. The modal should keep its left navigation and checkout column legible by stacking or compressing only after the main credit dial remains readable. On smaller widths, the dotted ground, card padding, and button radius should remain intact rather than being redesigned into a different visual system.

## Practical implementation guidance

### Preserve

- Keep the black canvas as the dominant surface.
- Keep green as the only strong action color.
- Preserve the compact Geist hierarchy and the mono labels.
- Use 8px corners for small controls and 12px corners for larger panels.
- Leave enough empty space around floating cards so the canvas feels open.
- Keep the dotted texture subtle and behind the content.

### Avoid

- Avoid a blue or multicolor accent system.
- Avoid heavy shadows, glossy effects, or glassmorphism.
- Avoid soft beige or light-gray page backgrounds.
- Avoid oversized chrome around the rails and trays.
- Avoid introducing extra families, decorative scripts, or editorial serif type.
- Avoid making every chip look equally important; the hierarchy depends on restraint.

### Recommended build order

1. Establish the black ground, charcoal surfaces, border tone, and green action color.
2. Build the typography scale with Geist, Geist Mono, and System fallback roles.
3. Recreate the shared rounded card and pill shapes.
4. Implement the top notices, left rail, and utility trays.
5. Build the canvas card types for text, image, and small promo surfaces.
6. Build the centered pricing modal with the account rail and credit dial.
7. Tighten spacing, contrast, and label density across both views.

### Accessibility

- Keep white text on dark surfaces and dark text on green buttons at clear contrast.
- Do not let 12px labels drop below readable contrast on the charcoal background.
- Give the image card useful alternative text because the image carries meaning.
- Keep the modal close control and rail icons keyboard reachable.
- Make sure the active state in the rail and tabs is not color-only.
- Preserve visible focus treatment on every button, tray item, and tab.

## Scope note

This guide covers the desktop project canvas and the centered plans-and-pricing modal. It does not include mobile breakpoints, motion, empty states, error states, or alternate theme modes. Type and spacing values are rounded to the packet’s 0.125rem step.
