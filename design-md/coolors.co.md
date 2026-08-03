# How coolors.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/coolors.co-design)

Last updated: 2026-08-03

## Captured pages

[![Homepage hero with oversized black headline and palette collage](https://pin.fontofweb.com/6391?format=jpg)](https://design.withfudge.com/share/pin-6391)

[Homepage hero with oversized black headline and palette collage](https://design.withfudge.com/share/pin-6391)

[![Pastel feature-card grid with oversized headings and arrow links](https://pin.fontofweb.com/6393?format=jpg)](https://design.withfudge.com/share/pin-6393)

[Pastel feature-card grid with oversized headings and arrow links](https://design.withfudge.com/share/pin-6393)

[![Five full-height palette columns with oversized hex codes](https://pin.fontofweb.com/6229?format=jpg)](https://design.withfudge.com/share/pin-6229)

[Five full-height palette columns with oversized hex codes](https://design.withfudge.com/share/pin-6229)

[![Soft mint palette columns with inverse labels and tool rail](https://pin.fontofweb.com/6228?format=jpg)](https://design.withfudge.com/share/pin-6228)

[Soft mint palette columns with inverse labels and tool rail](https://design.withfudge.com/share/pin-6228)

[![Centered Color Bot greeting with empty-state sidebar and composer](https://pin.fontofweb.com/6905?format=jpg)](https://design.withfudge.com/share/pin-6905)

[Centered Color Bot greeting with empty-state sidebar and composer](https://design.withfudge.com/share/pin-6905)

## Overview

Coolors is a color-first product wrapped in a very light SaaS shell. The page stays almost empty until color appears: a white canvas, black Inter headlines, thin rules, and a small amount of utility chrome. That restraint makes the product feel immediate. The marketing home uses oversized type and pastel cards to explain the tools; the palette editor turns the product into the interface by filling the page with vertical color columns; Color Bot reduces the layout again to a centered greeting and a bottom composer. The brand does not rely on ornament. It relies on scale, whitespace, and the fact that color is the thing being sold.

The strongest visual pattern is contrast between neutral structure and saturated content. White and near-white surfaces hold the marketing copy, while the palette pages flip into full-height color bands with inverse text. The cards, buttons, and toolbars remain quiet so the color fields stay dominant.

## Colors

Coolors uses a neutral base and then lets color do the expressive work. The base is simple: `#FFFFFF` canvas, `#0A0A0A` ink, muted `#525252` text, and faint separators around `#E5E5E5` to `#EEEEEE`. That quiet foundation matters because the product itself is loud. The blue action button uses `#2563EB`, while links and small utility actions can lean on a sharper blue like `#0000EE`. In the supplied views, the brand does not settle into one fixed accent. It uses a broader color language: blue, cyan, teal, green, lime, purple, pink, rose, orange, and gold all appear as card titles, palette names, and interface accents.

The marketing cards make that range feel organized. Soft panel fills such as `#CFFAFE`, `#DBEAFE`, `#F3E8FF`, `#FCE7F3`, `#FFF4E4`, `#FEF9C3`, and `#DCFCE7` carry large colored headlines without losing readability. On the palette pages, the accent colors are the content: `#565554`, `#2E86AB`, `#FFED9C`, `#F5F749`, `#F24236` in one set, and `#ADEEE3`, `#86DEB7`, `#619EA0`, `#50723C`, `#423E28` in another. Those columns work because the inverse label treatment is consistent: white text over darker or saturated fields, black text over lighter fields, and no decorative gradients needed to explain the structure.

There is no photographic mode in the supplied pages. The design uses flat color fields instead. That keeps the system coherent: light marketing surfaces on one side, saturated product fields on the other, and only small dark utility details where needed for clarity. A separate dark theme is not part of the supplied material.

## Typography

Inter carries almost every visible role in the supplied pages. It handles the giant homepage headline, the card titles, the navigation, the palette numbers, and the small utility copy. Google Sans Code appears only once, in the tiny code-like page note. No licensing details were provided.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 6.875rem | 700 | 0.9 | -0.035em | The oversized homepage statement |
| section-display | Inter | 3.75rem | 700 | 0.9 | -0.03em | Large supporting headlines and the Bot greeting scale |
| card-heading | Inter | 1.875rem | 700 | 1 | -0.02em | Feature-card titles and strong subheads |
| palette-code | Inter | 1.875rem | 400 | 1 | 0.03em | Large palette numbers in the color columns |
| body | Inter | 0.9375rem | 400 | 1.4 | 0em | Supporting copy, short descriptions, and nav text |
| body-strong | Inter | 0.9375rem | 700 | 1.4 | 0em | Button labels and emphasized short text |
| nav | Inter | 0.9375rem | 400 | 1 | 0em | Top navigation and utility links |
| label | Inter | 0.75rem | 400 | 1.3 | 0.03em | Small labels beneath palette names |
| micro | Inter | 0.625rem | 400 | 1.2 | 0.04em | Tiny utility copy and quiet helper lines |
| code-note | Google Sans Code | 0.5625rem | 400 | 1 | 0.04em | The smallest page-note style |

The hierarchy is mostly a matter of scale and density. Headlines are very large and nearly solid-set. Supporting copy opens slightly but still stays compact. The palette columns use a numeric display treatment that feels separate from ordinary body text: the numbers are big, centered low in the column, and letterspaced just enough to feel deliberate. Labels under the palette names are smaller and quieter, so the hierarchy reads from hex code to name to tiny tool icons without confusion. Nothing here depends on a second display family. The system stays consistent because one sans family does all the work.

## Layout

The page structure is wide, calm, and deliberate. The top bar is thin and low in visual weight. It keeps the Coolors wordmark at left, a narrow promo strip beside it, and a compact utility cluster at right: Tools, Go Pro, Sign in, and a filled Sign up button. A light divider line separates the header from the page body. That line matters because the body itself is mostly open space.

The marketing home uses a split rhythm. The hero places the headline on the left and a colorful product composition on the right, with the copy held in a narrow block so the product imagery can breathe. Below that, the feature grid becomes a three-column card layout. Each card has generous internal padding, rounded corners, and a lot of blank surface around the oversized heading. The grid reads quickly because the card spacing is regular and the color fills are distinct enough to separate without borders.

The palette editor removes most of that framing. The columns run edge to edge, all the way across the viewport, so the page feels more like a working surface than a marketing page. Each column is the same width, and the interaction icons sit in a narrow vertical rail near the center of the band. Hex code and color name anchor the bottom of each column, which gives the layout a clear top-to-bottom reading order even when the colors themselves are changing. The warm and mint palettes in the supplied views prove that the structure stays the same while the palette changes completely.

Color Bot is the quietest layout of the set. It uses a left sidebar for chats and assets, a mostly empty center field, and a bottom composer that stretches across the width of the main area. The greeting sits dead center in the empty field, which turns emptiness into part of the composition. The left rail is narrow and text-light, so it never competes with the greeting or the composer.

## Visual language

Coolors uses flat surfaces, strong type, and simple geometry. Rounded corners are present, but they are modest. The marketing cards feel soft rather than bubbly, and the palette columns are mostly flush edges rather than framed tiles. That keeps the interface from looking playful in a decorative way; it looks purposeful instead.

The shape system is easy to read. Buttons are compact and rectangular with soft corners. Feature cards are larger, softer blocks. The palette editor is almost entirely straight-edged because the content already supplies the color. The page therefore avoids extra textures, embossed surfaces, and heavy depth cues. Shadows are minimal to nonexistent. When the interface needs separation, it uses whitespace, pale separators, and changes in color instead of elevation.

The icon language is similarly restrained. The tool rails and utility controls use small black line icons. They are functional markers, not ornament. The small spark mark above the Color Bot greeting is the rare decorative element, and even that mark stays simple: a tiny multicolor cluster that echoes the site’s product promise without adding a complex illustration system.

The most distinctive part of the visual language is that color is treated as structure. In the marketing cards, color is the background. In the palette editor, color is the page. In Color Bot, color appears only as a tiny flourish so the shell can stay mostly white. That hierarchy makes the product feel efficient rather than flashy.

## Components

### Top bar

**Anatomy:** Coolors wordmark, a slim promo strip, a `Tools` dropdown, `Go Pro`, `Sign in`, and a filled `Sign up` action.  
**Surface:** White with a faint bottom rule.  
**Typography:** Small Inter text in a light, utility-first size.  
**Shape:** The filled account action is softly rounded; the rest of the bar stays flat.  
**Visible states:** `Go Pro` reads as a colored text action, while `Sign up` is the strongest control because it is filled blue.

### Marketing feature card

**Anatomy:** Large headline, short supporting paragraph, and a text link with an arrow.  
**Surface:** Pastel blocks with distinct fills per card, such as cyan, blue, lilac, pink, peach, yellow, and mint.  
**Typography:** 30px-ish bold titles, with smaller body copy below.  
**Spacing:** Generous internal padding gives each card its own breathing room.  
**Composition:** The headline sits high and left; the link sits low and left; the right side of each card stays open.  
**Role:** Each card reads like a short invitation to a tool, not like a feature checklist.

### Palette stage

**Anatomy:** Five equal vertical columns, a large hex code, a color name, and a narrow rail of tool icons.  
**Surface:** Solid color fields with no decorative framing.  
**Typography:** The hex code uses a large, centered numeric style; the name is smaller and quieter below it.  
**Shape:** The columns are edge-to-edge bands rather than cards.  
**Visible states:** Light columns use dark text; darker columns use white text; the icon rail stays small and black.  
**Role:** This component is the product itself. Nothing should be added that weakens the full-height color field.

### Color Bot shell

**Anatomy:** Left sidebar, empty-state copy, centered star mark, bold greeting, short helper line, and a bottom input bar.  
**Surface:** White with very light grey in the composer area.  
**Typography:** Large Inter greeting text, quieter helper text, and tiny sidebar notes.  
**Composition:** The center is intentionally sparse so the greeting and composer feel prominent.  
**Role:** The shell is calm and direct. It makes room for the input, not for ornament.

### Input composer

**Anatomy:** Long rounded text field, blue send button, and compact auxiliary buttons to the right.  
**Surface:** Pale, low-contrast field with a stronger blue send control.  
**Typography:** Light placeholder text in a small utility size.  
**Shape:** Soft corners and a low-profile bar keep the composer from looking heavy.  
**Visible states:** The send button is the clearest action on the page; the secondary buttons remain quieter and icon-led.

## Responsive behavior

The supplied views are desktop-led, so the design language should stay focused on wide layouts first. On narrower widths, the safest move is to preserve the reading order: headline, support copy, and primary action first; product surface second; utility details last. The marketing cards should collapse cleanly into a single column before the text becomes cramped. The palette editor should keep the color columns legible, either by stacking them or by allowing a controlled horizontal scroll rather than shrinking the labels beyond recognition. The Color Bot shell should keep the composer reachable without forcing the greeting to fight for space.

The key responsive rule is simple: do not squeeze color into a small box. If the palette stage loses its full-height banding or the card grid loses its breathing room, the identity gets weaker. Narrow screens should protect that hierarchy, not flatten it.

## Practical implementation guidance

### Preserve

- Keep white canvas and black Inter text as the base.
- Keep the filled blue action button as the main control treatment.
- Keep the feature cards soft, pastel, and roomy.
- Keep the palette editor full-bleed and column-based.
- Keep the bot shell sparse and centered.
- Keep shadows near zero; use spacing and color changes for separation.

### Avoid

- Avoid adding a second display family.
- Avoid turning the palette editor into a small swatch grid.
- Avoid heavy borders, bevels, or soft depth effects.
- Avoid making every control the same blue; the brand already uses a wide color range.
- Avoid overfitting the shell with extra panels or decorative containers.
- Avoid letting small-screen compression destroy the large type scale.

### Recommended build order

1. Set the neutral base colors and Inter type scale.
2. Build the top bar and the blue action button.
3. Build the hero and the pastel feature-card grid.
4. Build the palette-column component with inverse text handling.
5. Build the Color Bot shell and composer.
6. Tune spacing, rounding, and narrow-width stacking.

### Accessibility

- Keep contrast high for white labels on saturated palette columns.
- Give icon-only controls clear names and keyboard focus styles.
- Make the send button and primary links visually distinct from secondary text actions.
- Keep placeholder text lighter than entered text in the composer.
- Avoid using color alone to explain actions; pair it with text or icons where the interface needs meaning.
- Make sure small labels under palette names remain readable at desktop and narrow widths.

## Scope note

This guide covers the supplied Coolors desktop homepage, feature-card grid, palette editor columns, and Color Bot shell. Small-screen rearrangements, motion, hover and focus specifics, loading states, and other tool pages are not included. Type and spacing values are rounded to the shared 0.125rem step.
