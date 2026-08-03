# How capy.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/capy.ai-design)

Last updated: 2026-08-03

## Captured pages

[![White hero with giant condensed headline, teal button, and mascot on the right](https://pin.fontofweb.com/7790?format=jpg)](https://design.withfudge.com/share/pin-7790)

[White hero with giant condensed headline, teal button, and mascot on the right](https://design.withfudge.com/share/pin-7790)

[![Pricing section with dark Pro card, light Enterprise card, and compact chips](https://pin.fontofweb.com/7791?format=jpg)](https://design.withfudge.com/share/pin-7791)

[Pricing section with dark Pro card, light Enterprise card, and compact chips](https://design.withfudge.com/share/pin-7791)

## Overview

Capy uses a hard-edged developer-marketing language with a toy-like mascot, but the layout stays disciplined and serious. The site relies on a narrow patterned rail, a large white main canvas, tall condensed headlines, and a single teal accent that carries the whole action system. The result feels closer to an opinionated tool brand than to a playful illustration site. The mascot adds personality, but the real structure comes from strict alignment, thin black rules, and boxed surfaces.

The design is strongest when the page reads in big steps: a bold headline, a short mono paragraph, a clear CTA pair, and then a product or pricing surface below. That rhythm keeps the long page easy to scan. The homepage and pricing page share the same language, so the brand remains consistent whether the page is selling the idea of the IDE or the plan tiers around it.

## Colors

Capy is nearly monochrome, with teal as the only persistent accent. Black, white, and near-black do the heavy lifting. The left rail is solid black, the main page surface is white, the Pro card flips back to black, and the Enterprise card stays white with a black border. This black-white inversion gives the system contrast without introducing a second palette. Teal appears in the announcement strip, the primary button fill, the small badge accents, and the tiny utility chips. It should stay reserved for action and status, not for decorative fill.

The useful color roles are:

- `action` `#63C8C1` for primary buttons and the top status strip.
- `action-strong` `#267B7A` for the darker edge of teal controls and small highlights.
- `action-soft` `#ABE4DE` and `chip` `#D5F2EF` for small pills, hover-like softness, and light teal emphasis.
- `ink` `#000000` for headlines, borders, and the strongest copy on light surfaces.
- `ink-soft` `#3D3D3D` and `muted-ink` `#6B6B6B` for supporting mono text.
- `surface` `#FAFAFA`, `surface-quiet` `#F5F5F5`, and `canvas` `#FFFFFF` for the page field and card fill.
- `surface-dark` `#181818` and `rail` `#000000` for the side rail and dark plan card.
- `border` `#DEDEDE` and `border-strong` `#000000` for thin separators and card frames.

The teal reads brightest on white and calmest on black. That makes it fit both the marketing hero and the pricing controls. Keep the palette narrow; the screenshots already use contrast, outline, and scale as a full visual system.

## Typography

Capy mixes three different voices: a tall condensed display face for the headline system, a monospaced workhorse for most body copy, and a small decorative face for tiny callouts. The condensed headline sets the tone immediately. The mono text keeps the page technical and deliberate. Inter appears only in very small utility layers, where the interface needs tighter numeric or metadata styling. Licensing for these fonts is not supplied here; verify reuse rights before production.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Bebas Neue | 4.75rem | 400 | 1 | -0.01em | Main homepage and pricing hero headlines |
| section-display | Bebas Neue | 2rem | 400 | 0.9 | -0.01em | Smaller all-caps section heads and plan labels |
| body | Abc Social Mono Unlicensed | 1rem | 400 | 1.5 | 0em | Main explanatory copy, nav links, lists |
| body-medium | Abc Social Mono Unlicensed | 1rem | 500 | 1.5 | 0em | Buttons, badges, and emphasized body text |
| body-compact | Abc Social Mono Unlicensed | 0.875rem | 400 | 1.2857142857 | 0em | Dense side-rail links and short supporting lines |
| chip-label | Abc Social Mono Unlicensed | 0.75rem | 500 | 1.3 | 0em | Small pills and compact status labels |
| eyebrow-script | Cc Wild Words | 1rem | 400 | 1.5 | 0em | Small decorative callouts above the hero |
| meta | Inter | 0.625rem | 400 | 1.5 | 0em | Tiny utility text and micro labels |
| fine-print | Inter | 0.5625rem | 500 | 1.4 | 0em | The smallest helper text and UI notes |

The headline treatment is tight and upright, with little spacing and a heavy vertical presence. The body copy sits comfortably below it in 16px mono, which keeps the page readable without losing the technical mood. The small decorative label is the only place where the type softens. Keep that contrast: bold display, mono explanation, tiny utility layer.

## Layout

The homepage and pricing page both use a centered main stage with a fixed narrow sidebar on the left. That sidebar is not decorative filler; it is a persistent brand column that holds the logo, navigation links, and a compact email form. The main content occupies the rest of the width and remains visually clean so the headline can dominate. This split immediately tells the user where the brand lives and where the content lives.

On the homepage, the hero is spacious and left-aligned within the main canvas. A short eyebrow sits above the giant headline, the supporting paragraph stays narrow, and the CTA pair sits directly below without extra framing. The mascot illustration floats to the right, giving the white field a second anchor so the headline does not feel lonely. Below that, the page transitions into a large board-like product area with a screenshot set into a wider composition. The board stage uses space as a frame; it does not need extra color or ornament.

On the pricing page, the layout shifts into a more explicit comparison structure. The hero still sits above the fold, but the plan cards below are centered and balanced as a two-column grid. One card is dark and one card is light, so the comparison reads instantly even before the text is read. Thin borders, compact padding, and consistent card heights keep the page controlled. The white card carries the enterprise option; the black card carries the individual option. That inversion gives each tier a distinct visual weight.

Spacing feels generous but not airy. Big vertical separations create chapters: hero, proof, plan comparison, and then the small utility area in the rail. Horizontal space is handled more conservatively, with a strong left edge and enough center room for large display text. Use the packet’s 0.125rem rhythm for internal adjustments, but keep the major gaps broad enough that the page still feels like a launch surface rather than a dashboard.

## Visual language

Capy’s visual language is a mix of strict and whimsical. The strict part comes from the monochrome base, the thin border rules, the exact rectangle-based cards, and the very tall display type. The whimsical part comes from the mascot, the sticker-like pills, and the small playful illustrations attached to the teal strip and the hero button. The site works because the whimsy never breaks the grid. It decorates the system instead of replacing it.

Line weight matters. Borders are usually black and thin. Buttons are simple rectangles with rounded corners, not soft capsules. Cards feel boxed and editorial rather than plush. The side rail uses repeated brand marks as a texture, which makes the left edge feel owned without adding a full illustration. That rail is one of the most distinctive brand signals on the page and should stay high-contrast and compact.

The strongest visual contrast is not color alone; it is the jump between the dense black rail, the open white field, and the black pricing card. The headline height, the mascot scale, and the card frames are all tuned to make those contrasts feel intentional. Keep the page crisp, a little eccentric, and very legible.

## Components

### Announcement bar

The top strip is a slim teal band with tiny centered copy and a small mascot accent. It behaves like a status line rather than a second navigation row. The bar is narrow, bright, and horizontally calm. Its job is to hold a short message and immediately establish the accent color. Keep it visually lightweight so it does not compete with the hero headline.

### Left rail

The rail is a fixed black column with a repeated brand pattern, the capy logo at the top, stacked navigation links in the middle, and a compact email form near the bottom. The rail makes the site feel owned from the first pixel. Its text stays white or very light gray, and its internal spacing is tight compared with the wide main canvas. This component should feel persistent and structural, not temporary or promotional.

### Hero block

The hero is a large, open composition with a small eyebrow, a massive all-caps headline, short mono supporting text, and a primary-plus-secondary action pair. The headline is the dominant element by far. The supporting copy is narrow, so the hero stays punchy. The mascot sits off to one side in a way that feels like a companion image rather than a product diagram. The composition needs the empty space around it; that empty field is part of the language.

### Buttons and input

The primary button uses teal fill, white text, and a compact rounded rectangle shape. The secondary action is outlined and monochrome. Both are sized to feel deliberate rather than oversized. The email input is plain and rectangular, with a simple black border and enough interior padding to match the buttons. The controls are friendly, but they do not soften the overall tone. Teal belongs to the primary path only.

### Pricing cards

The pricing cards are the clearest comparison component on the page. Each card uses a bordered box, a compact title, short support line, and a short feature list. The dark card inverts the palette and reads as the more forceful option; the light card reads as the cleaner business option. The small “Popular” chip and the “Custom” emphasis both appear as light, compact labels. Keep the cards simple, evenly spaced, and visibly different in fill rather than in shape.

### Badge and tiny labels

The plan badge, the small eyebrow labels, and the tiny metadata lines are all part of the same small-scale language. These elements stay compact and often use rounded pills or very small type. Their purpose is to clarify hierarchy, not to decorate. Use them sparingly so the page does not become busy.

## Responsive behavior

When the layout narrows, the rail should stack or collapse before the main headline loses clarity. The hero needs to keep its order: eyebrow, headline, supporting copy, actions, then mascot or product image. The pricing cards should fall into a single column before they become too cramped. The large type can shrink, but it should remain tall and emphatic; do not replace it with a standard UI headline. The image-bearing sections should keep their frame logic even when the images stack above the text.

## Practical implementation guidance

### Preserve

- Keep the teal accent as the only persistent action color.
- Preserve the black rail and the white main canvas; that contrast is central.
- Keep the condensed display face large and unapologetic.
- Use mono body copy for most supporting text.
- Keep cards and buttons simple, bordered, and square-leaning.

### Avoid

- Avoid adding extra accent colors.
- Avoid soft gradients, glass effects, or rounded blobs.
- Avoid turning the side rail into a generic sidebar with standard nav chrome.
- Avoid mixing too many type families in one view.
- Avoid heavy shadows; the system relies on outline and contrast more than depth.

### Recommended build order

1. Build the rail, announcement strip, and page canvas.
2. Add the hero type hierarchy and the CTA pair.
3. Add the mascot or illustration placement.
4. Build the product or pricing stage as a bordered surface.
5. Finish the comparison cards and the smallest utility labels.

### Accessibility

- Make the teal button readable on its own; do not lower contrast to chase softness.
- Keep the black-on-white and white-on-black states strong enough for long copy.
- Give the mascot and product screenshot useful alternative text.
- Keep visible focus styles on the input, buttons, and card actions.
- Preserve enough spacing that the compact mono type does not collapse into a dense wall.

## Scope note

This guide covers the homepage hero and the pricing page only. It does not include alternate breakpoints, motion, hover or focus styling, loading states, checkout flow, or deeper product pages. The spacing scale is expressed on the packet’s 0.125rem step.
