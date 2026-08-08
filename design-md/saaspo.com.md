# How saaspo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/saaspo.com-design)

Last updated: 2026-08-08

## Captured pages

[![Split Flint landing page with dark intro column and bright white preview](https://pin.fontofweb.com/7087?format=jpg)](https://design.withfudge.com/share/pin-7087)

[Split Flint landing page with dark intro column and bright white preview](https://design.withfudge.com/share/pin-7087)

[![Dark advertise page with three pricing cards and a custom quote form](https://pin.fontofweb.com/7086?format=jpg)](https://design.withfudge.com/share/pin-7086)

[Dark advertise page with three pricing cards and a custom quote form](https://design.withfudge.com/share/pin-7086)

[![Dense homepage with filters, sponsor row, and a mixed card grid](https://pin.fontofweb.com/7084?format=jpg)](https://design.withfudge.com/share/pin-7084)

[Dense homepage with filters, sponsor row, and a mixed card grid](https://design.withfudge.com/share/pin-7084)

## Overview

Saaspo presents a dark, tightly organized SaaS directory rather than a soft editorial magazine. The shared look is built from a near-black canvas, white type, crisp rectangular cards, thin charcoal edges, and a vivid green action color that stays reserved for the most important controls and signals. The system feels dense because it shows many items at once, but the page still reads clearly because the spacing is disciplined and the cards keep their own breathing room.

The homepage uses a large left-aligned headline, a compact support paragraph, and a fast move into filters and a broad card grid. The advertise page takes the same visual language and turns it toward pricing and a quote form. The Flint page provides the light counterpoint in the set: a more open white field, a strong preview image, and a simple sales flow that still feels connected to the directory views through the same border logic and the same green accent. Across the set, the structure does the heavy lifting. The layout turns many individual items into a legible index.

## Colors

| token | value | use |
|---|---|---|
| `canvas` | `#0B0F14` | Main page background and the dark shell around every section |
| `light-canvas` | `#FFFFFF` | The white page field on the Flint view and other bright counterpoints |
| `surface` | `#000000` | Card fill, deep panels, and the darkest inner blocks |
| `ink` | `#FFFFFF` | Primary headlines, navigation, buttons on dark grounds, and card text |
| `muted-ink` | `#333333` | Quiet metadata, secondary labels, and lower-contrast text on stronger surfaces |
| `border` | `#222D38` | Thin card edges, divider lines, input outlines, and panel framing |
| `action` | `#0AF395` | Primary buttons, the Random control, sponsored chips, and selected emphasis marks |

The palette stays disciplined, with a small gap between the background field and the card surfaces so the page feels like one continuous system instead of many floating boxes. White text carries the hierarchy on the dark pages, and the neon green stays scarce so it can do real work. Use the green only where a control should stand out immediately: the primary button, the active chip, a small status label, or a promoted mark. Keep the charcoal border tone consistent across cards and controls so the page stays crisp without becoming busy.

The dark directory views and the Flint page belong to the same family even though their major fields flip. On the dark pages, `canvas` and `surface` create a layered black field, while the Flint page moves that major field to `light-canvas`. The border tone and the action green stay unchanged so the family reads as one system in both modes. Black and charcoal text take over on the white field, while white text keeps the dark views bright and sharp. Photographic screenshots and preview modules remain neutral content; the green should not spill into them. It works best when it is confined to the controls and the small labels that need attention.

## Typography

The page relies on a single sans voice listed as Plus Jakarta Sans and Plusjakartasans. Keep both spellings visible in the reference so the family remains tied to the source pages. The system uses one clean sans across the experience, so scale and weight do most of the visual work. Large headlines are bold and slightly tightened, supporting copy is plain and readable, and small labels stay compact so the interface can carry a lot of information without feeling loose.

Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---:|
| `hero-display` | Plus Jakarta Sans | 4rem | 700 | 0.95 | -0.03em | Main homepage headline and other top-level page titles |
| `section-display` | Plus Jakarta Sans | 3.5rem | 700 | 0.95 | -0.025em | Large section openers and focused landing-page statements |
| `stat-display` | Plus Jakarta Sans | 2.5rem | 700 | 1 | -0.02em | Large numbers, prices, and short emphatic callouts |
| `card-heading` | Plus Jakarta Sans | 1.5rem | 700 | 1.05 | -0.01em | Card titles, pricing headings, and strong content labels |
| `body-large` | Plusjakartasans | 1.125rem | 400 | 1.5 | 0em | Hero support copy and longer one-paragraph explanations |
| `body` | Plusjakartasans | 1rem | 400 | 1.5 | 0em | General page text, form copy, and supporting descriptions |
| `body-medium` | Plusjakartasans | 1rem | 600 | 1.5 | 0em | Button copy, strong inline labels, and emphasized text |
| `navigation` | Plusjakartasans | 0.875rem | 600 | 1.3 | 0em | Top navigation, small menu items, and compact header links |
| `label` | Plusjakartasans | 0.75rem | 600 | 1.2 | 0.04em | Chips, counters, small badges, and filter tags |
| `meta` | Plusjakartasans | 0.75rem | 400 | 1.4 | 0em | Secondary annotations, small helper text, and fine print |

The hierarchy works because it is restrained. Display text is strong and direct, while body copy stays unadorned and easy to scan on a dark field. Small labels gain their force from contrast and placement rather than from extra decoration. Keep line lengths short in the hero and pricing areas so the page never feels too heavy. The white Flint page benefits from the same type family because the system stays recognizable when the field changes from dark to light.

## Layout

The desktop shell uses a wide centered frame with generous side gutters, slim top padding, and large vertical separation between major blocks. The page is built from long horizontal rows, not from isolated stacked modules. That choice gives the whole site a catalog feel: the eye moves from one block to the next without losing the sense of a single system. Even when the page is crowded with thumbnails or pricing items, the layout stays legible because the spacing stays consistent.

The homepage hero is left weighted. A large title sits near the top, a short explanation follows beneath it, and the action area arrives quickly instead of being pushed deep down the page. That speed matters because the site is fundamentally a browsing tool. The tab row and filter bar create a second tier of control below the hero, and they stay visually quieter than the lead copy. That quietness helps the page feel efficient instead of overdesigned.

Below the controls, the content grid becomes the main event. Each screenshot sits inside a bordered card with even spacing and consistent height, which makes the thumbnails feel like objects arranged on a board. The advertise page keeps the same rhythm but shifts the content density: three pricing cards line up across the page, and the quote area opens below them with more open room for form fields. The Flint landing page uses a split structure instead. The left column carries the copy and button, while the right side holds a large product preview on a white field. That split is useful when the page needs to pair explanation with a strong visual proof point.

Spacing is one of the strongest parts of the system. The page uses a small unit for tight controls, then jumps to larger blocks for section breaks and card grids. That regular step-up keeps the long page readable even when many thumbnails, labels, or pricing items are on screen. The same spacing logic also helps the light Flint view feel open rather than sparse, because the larger white areas are balanced by strong internal grouping.

## Visual language

Saaspo feels dark, editorial, and slightly technical. It is full of content, but the content is sorted into clean cards and stable rows, so the page never feels chaotic. White text and green accents sit on top of a near-black ground, which gives screenshots and logos the feel of objects on a gallery wall. Because the palette is so restrained, shape and spacing become the expressive tools.

Thin borders are everywhere. They separate cards, frame inputs, and outline controls without making them feel heavy. Rounded corners are present but modest, so the page still feels crisp. The smaller radii fit tabs, pills, and buttons; the larger radii belong to featured cards and preview panels. That mix keeps the system from drifting into a soft consumer-app style.

The image language is practical. Screenshots, thumbnails, and preview windows do the storytelling. They show product pages, landing pages, and promotional examples directly inside the interface. Green labels such as sponsored marks or active filters add just enough energy to keep the eye moving, but they never become a second dominant color. The result is a system that feels curated and searchable, with the confidence of a strong index and the restraint of a well-edited archive. The Flint page carries the same calm structure even when the field turns white, which keeps the family from feeling split into unrelated products.

## Components

### Top bar
- **Anatomy:** Logo at the left, centered navigation items or counters, and a compact action control at the right.
- **Surface:** The bar sits directly on the dark canvas and does not need a heavy backdrop.
- **Typography:** Use `navigation` for the links and small menu items.
- **Shape:** Keep controls small and rectangular with `rounded.control` or `rounded.panel`.
- **Spacing:** Maintain a wide horizontal gap between the logo, the center group, and the right-side action.
- **Visible states:** The active control uses the action green; quiet items stay white or charcoal.

### Hero block
- **Anatomy:** Large headline, short support paragraph, and a nearby action or subscription cue.
- **Typography:** `hero-display` for the title, `body-large` for the explanation, and `body-medium` for the button.
- **Composition:** Left-aligned and compact. The headline should own the first glance, with the support copy immediately beneath it.
- **Hierarchy:** Keep the hero short enough that the next control row is still visible in the same view on desktop.
- **Visible states:** The button is bright green with dark text; text links stay plain and quiet.

### Filter bar and chips
- **Anatomy:** Tab row, dropdown-like filters, and small status chips.
- **Surface:** Flat black or very dark fill with thin border lines.
- **Typography:** `label` for chips and `navigation` for the broader controls.
- **Shape:** Small rounded corners, never full pills for every element.
- **Spacing:** Use tight internal padding so the bar feels efficient and searchable.
- **Visible states:** Selected items use green fill or green text; inactive items remain muted and bordered.

### Content cards
- **Anatomy:** Title strip, screenshot or preview image, and compact supporting copy.
- **Surface:** Dark fill with a visible charcoal edge.
- **Typography:** `card-heading` for card titles, `body` for supporting lines, and `meta` for smaller tags.
- **Shape:** `rounded.panel` works well for the standard cards; larger highlights can move to `rounded.featured`.
- **Composition:** Let the preview image dominate the card and keep the text as a frame around it.
- **Visible states:** Sponsored or featured items get a green label, but the card itself stays restrained.

### Pricing cards
- **Anatomy:** Short heading, large price or callout, one green action button, then a list of benefits.
- **Typography:** `stat-display` for the price or main figure, `card-heading` for the top line, and `body` for the benefit list.
- **Surface:** Black card fills with charcoal borders to keep the three-column row readable.
- **Shape:** Larger rounded corners help the cards feel like complete modules.
- **Spacing:** Keep the button centered within each card and maintain enough vertical air between the price and the list.
- **Visible states:** The strongest card should still stay in the same visual family as the others; emphasis comes from text and placement, not from a new color.

### Quote or form panel
- **Anatomy:** Left-side statement or explanation, right-side form fields, and a clear submit action.
- **Typography:** Use `section-display` or `card-heading` for the lead, then `body` for the field helper text.
- **Surface:** Dark panel with a clean border so the form reads as part of the same system.
- **Spacing:** Inputs need deeper vertical spacing than the chips and tabs; the panel should feel easier to scan than the filter row.
- **Visible states:** Inputs stay quiet until focused, when the border and text should become more visible.

## Responsive behavior

On narrower screens, the visual order should stay stable: headline, support copy, primary action, then controls, then cards. The system relies on that sequence because the page can be content heavy. The navigation can condense into fewer items, but the hero, the green action, and the first card group should remain easy to reach without hunting.

Cards should stack cleanly rather than shrink into unreadable grids. The visual language depends on readable screenshots and strong title blocks, so the content should move to one column when the available width gets tight. Keep the border treatment and corner radii intact during stacking so the page still feels like Saaspo rather than a separate mobile design. The same principle applies to the Flint page: the split layout can collapse, but the strong preview and the primary action should stay obvious.

The large numbers and prices can scale down a step on smaller screens, but they should remain the most prominent text in their card. Buttons should keep their full contrast treatment and generous hit area. Filters and tabs should compress before they wrap awkwardly. In general, it is better for the system to become taller than for it to become cluttered. That tradeoff suits a directory more than a polished brochure, because the site needs to stay scannable while it grows.

## Practical implementation guidance

### Preserve
- Keep the system on one sans family and let weight, size, and letter spacing do the hierarchy work.
- Keep the canvas dark on the directory pages and use the white light-canvas field on the Flint page.
- Keep the green action color as the only strong accent.
- Preserve thin borders around cards, inputs, and filters.
- Keep the homepage dense but orderly: hero, controls, then a clear grid.
- Use screenshots and thumbnails as the main visual content, not as decorative filler.

### Avoid
- Avoid adding extra accent colors that compete with `action`.
- Avoid thick shadows or glossy depth; the page should stay mostly flat.
- Avoid overly soft radii on every control, since the system depends on crisp edges.
- Avoid center-heavy hero layouts that weaken the catalog feel.
- Avoid low-contrast text on the dark background or the white field.

### Recommended build order
1. Build the dark canvas, borders, and spacing scale.
2. Add the typography hierarchy and the green action style.
3. Recreate the top bar and hero.
4. Add the filter row and chip states.
5. Build the card grid and the featured content cards.
6. Add the pricing row and the quote or form panel.
7. Check responsive stacking and text scaling.

### Accessibility
- Keep the white-on-dark contrast strong for headlines and body text.
- Make sure green never carries meaning by color alone; pair it with labels or button text.
- Keep focus states visible on every button, tab, filter, and input.
- Use generous click targets for chips and compact controls.
- Maintain readable line lengths and avoid shrinking small labels too far on narrow screens.

## Scope note

This guide covers the dark homepage, the advertise page, and the Flint landing page shown here. It does not include mobile breakpoints, motion rules, hover or focus styling, loading states, disabled states, or the full product-image set. Verify licensing for these families before production use.
