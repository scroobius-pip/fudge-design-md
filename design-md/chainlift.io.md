# How chainlift.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/chainlift.io-design)

Last updated: 2026-08-03

## Captured pages

[![Dark two-column contact cards with compact rows](https://pin.fontofweb.com/6346?format=jpg)](https://design.withfudge.com/share/pin-6346)

[Dark two-column contact cards with compact rows](https://design.withfudge.com/share/pin-6346)

[![Centered color panel with split demo and outline CTA](https://pin.fontofweb.com/6345?format=jpg)](https://design.withfudge.com/share/pin-6345)

[Centered color panel with split demo and outline CTA](https://design.withfudge.com/share/pin-6345)

[![Deep-blue footer with illustrated skyline and link columns](https://pin.fontofweb.com/6347?format=jpg)](https://design.withfudge.com/share/pin-6347)

[Deep-blue footer with illustrated skyline and link columns](https://design.withfudge.com/share/pin-6347)

## Overview

Chainlift presents LiftKit as a precision-minded UI framework. The page is almost entirely dark, then punctuates that darkness with pale lavender actions and a saturated blue footer. The result feels technical, controlled, and a little severe, but never noisy. Large headlines do the heavy lifting; the supporting text stays compact and deliberately plain.

The visual system reads like a catalog of specimens. Cards are framed rather than floated, the demo panel is split into clearly legible zones, and the footer turns into a full-width branded stage instead of a generic site endcap. The strongest impression is discipline: consistent spacing, strong type hierarchy, restrained color, and very little decorative excess.

What to preserve is the combination of:
- oversized Inter type set close and confidently,
- thin borders around dark cards,
- pale lavender for links and calls to action,
- a deep blue footer that feels like a separate chapter,
- and a layout rhythm built from wide, repeated gaps rather than ornament.

## Colors

| token | value | role |
|---|---|---|
| `action` | `#BAC3FF` | Primary links, pill buttons, and the strongest small accent |
| `action-soft` | `#DEE1FF` | Tiny glyphs, secondary highlights, and pale utility accents |
| `ink` | `#E4E1E6` | Main text on the dark canvas and footer stage |
| `muted-ink` | `#90909A` | Support lines, short descriptions, and quieter labels |
| `canvas` | `#0E0E11` | Main page background and dark card field |
| `canvas-strong` | `#001258` | Footer background and the deepest brand stage |
| `border` | `#727272` | Card outlines and faint separators |
| `border-soft` | `#7D7D7D` | Button strokes and slightly brighter structural lines |
| `on-action` | `#0E0E11` | Dark text on the light lavender action fill |
| `on-canvas` | `#E4E1E6` | Text intended for the dark canvas |

The system is effectively dark-only. The main page uses near-black as the base, while the footer shifts to a much stronger blue so the page can end with a separate visual chapter without adding a new accent family. Pale lavender carries the interactive layer, and it stays cool enough to sit comfortably on both black and blue backgrounds. This is important: the action color should remain the clearest signal on the page, not compete with the blue footer or any future imagery. If a photographic treatment is added later, it should stay cool, low-contrast, and subdued so the lavender accent remains readable and distinct.

The borders matter almost as much as the fills. They are thin, neutral, and quiet, which gives the dark cards enough separation without making the page feel boxed in. The design depends on this restraint; strong fills are reserved for the footer stage and the button accent, while the rest of the system stays close to charcoal and gray.

## Typography

Inter Font carries the whole interface. The page uses Regular, Medium, Semibold, and Bold weights to build hierarchy without switching families. Licensing for Inter Font is not stated in the packet.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Inter Font | 4.5262rem | 700 | 1.27 | -0.035em | Oversized page headlines |
| `section-display` | Inter Font | 2.1995rem | 600 | 1.27 | -0.026em | Section headings like “Community” and “Contact Us” |
| `subhead` | Inter Font | 1.7292rem | 600 | 1.27 | -0.02em | Strong supporting statements and section intros |
| `body` | Inter Font | 1.0688rem | 400 | 1.17 | 0em | Card descriptions and paragraph copy |
| `body-medium` | Inter Font | 1.0688rem | 500 | 1.17 | 0em | Emphasized words, short action labels, and highlighted lines |
| `small-label` | Inter Font | 0.9458rem | 600 | 1.27 | -0.007em | Card titles, footer headings, and compact labels |
| `legal-copy` | Inter Font | 0.8400rem | 400 | 1.27 | -0.002em | Legal lines, tiny metadata, and the least prominent text |
| `button` | Inter Font | 1.3595rem | 500 | 0.92 | 0em | The outline pill button in the feature section |

The hierarchy depends more on scale, weight, and tight leading than on color changes. The biggest headlines are dense and decisive, with only a small amount of tracking relief. Supporting text keeps the same family but opens up slightly in leading so the page can carry longer lines without looking stiff. The small labels and card titles feel compact and practical rather than decorative. That is a useful distinction: the system does not need a separate display family to feel premium; it needs a strong size ladder and a disciplined weight ladder.

## Layout

The page is built from wide, centered chapters on a dark field. The first visible section places a large heading at the upper left, then arranges content in two columns of equal-height link cards. The cards themselves are wide and shallow, with a small icon or logo at the left, a bold title, a muted description line, and a small outbound glyph on the far right. That composition makes each card read as a direct destination rather than as a promotional panel.

The next section changes pace. A centered headline and supporting paragraph sit above a pill-shaped outline button, followed by a broad demo panel. That panel is the most complex block on the page: it is split vertically into a gray control area on the left and a saturated blue application surface on the right. The split is crisp and intentional, like a before-and-after comparison or a product control surface. Below it, a short set of supporting blurbs sits in a loose two-column arrangement with generous breathing room.

The footer then expands to full width and changes the page temperature. A blue illustration band runs across the top edge, with layered organic silhouettes and a circular ride-like motif on the left. Beneath that band, the logo and four navigation columns are centered in a measured grid. The legal line sits low and small, which keeps the footer’s hierarchy clear: brand first, navigation second, utility last.

Spacing is the structural glue. The page prefers large vertical gaps that recur from block to block, so the viewer feels a steady rhythm even though the content changes. The cards are close enough to feel like one system, but the chapters are far enough apart to feel deliberate.

## Visual language

The system feels like a design system page that trusts its own components. The cards are specimens, not sales tiles. Their edges are thin, their fills are flat, and their content is highly legible. The page never reaches for glossy effects, layered blur, or rich shadow. Instead, it uses contrast between black, blue, gray, and pale lavender to define importance.

The most distinctive visual move is the footer illustration. Its layered landscape shapes and wheel motif introduce a friendlier, more graphic register without breaking the overall discipline. Even there, the color family stays cool and restrained. That lets the footer feel branded rather than playful.

There is also a strong relationship between the page’s typography and its containers. Large type sits in open space, while small type stays inside bounded cards. That gives the page a clean editorial logic: big statements outside, practical details inside. The rounded corners reinforce the same idea. Small cards use a moderate radius, while the action button becomes nearly pill-shaped. The result is soft, but not mushy.

## Components

### Link cards

- **Anatomy:** left icon or badge, title, one support line, outbound glyph on the right.
- **Surface:** near-black card field with a thin neutral border.
- **Typography:** title in `small-label`; support line in `legal-copy` or quiet `body`.
- **Shape:** moderate rounded corners, not a full pill.
- **Spacing:** compact internal padding, with just enough separation to keep the title and description from crowding the icon.
- **Visible states:** the cards read as clickable because of the outbound glyph and the link-like layout, but they remain visually flat.

These cards are the most repeated primitive in the supplied views. They should feel interchangeable across community links, contact links, and footer navigation. The icon at the left carries just enough color or brand mark to help scan the row, while the rest of the card stays neutral. The border is doing real work here: it is the line that keeps the page from collapsing into one dark plane.

### Primary and outline actions

- **Primary fill:** pale lavender fill with dark text.
- **Outline variant:** dark fill, pale lavender text, and a soft border.
- **Typography:** `button`.
- **Shape:** very large radius, so the button reads as a compact capsule.
- **Composition:** small enough to sit comfortably under a large headline, but distinct enough to become the only explicit CTA in the section.

The feature section’s button is not loud; it is careful. It sits under the headline as a single decision point, using a quiet outline style rather than a filled block. That choice matches the rest of the page: the interface prefers strong framing and structural clarity over aggressive color. Keep the button radius generous and the label medium-weight so the control feels polished rather than heavy.

### Feature panel

- **Anatomy:** centered headline, centered explanatory copy, outline CTA, wide split demo frame, small follow-up notes.
- **Surface:** dark outer field with a large framed inner demo.
- **Typography:** `hero-display` for the major claim, `body` and `body-medium` for the explanatory copy.
- **Shape:** the panel uses the same moderate radius as the cards, but on a much larger scale.
- **Composition:** the demo frame is the core artifact. Its left side is gray and utilitarian; its right side is saturated blue and data-heavy.

This block is the clearest sign that the page is selling a UI framework rather than a lifestyle brand. The content is product-like and demonstrative. The frame looks like a working interface, not a decorative screenshot. Keep that split clean. The right side can carry stronger chroma and denser UI, but the left side should remain calm enough to make the contrast legible.

### Footer stage

- **Anatomy:** brand mark, four link columns, legal line, and a top illustration band.
- **Surface:** deep blue with pale text.
- **Typography:** `small-label` for column headings and `legal-copy` for the small line at the bottom.
- **Spacing:** wide outer padding and generous column spacing, so the footer reads as a full-page destination rather than a narrow strip.
- **Hierarchy:** the brand mark and navigation columns share the same plane; the legal line stays intentionally small.

The footer is more than an endnote. It is a branded stage with its own color, illustration, and column system. That makes the page finish with structure instead of a fade-out. The illustration band should stay broad and low-contrast so it supports the footer without stealing focus from the links.

## Responsive behavior

When the layout tightens, the two-column card grid should collapse to one column before the cards become unreadable. The centered feature section should keep its headline and button above the demo frame, then let the demo scale down before the split becomes cramped. The footer columns should reduce in count or stack cleanly, but the blue stage and illustration band should remain intact so the page still ends with the same identity.

The most important responsive rule is to keep the hierarchy intact: headline first, then action, then specimen content, then support copy. Do not let the buttons outgrow the text around them, and do not let the card rows become so narrow that the icon, title, and description collide. Keep the same border weight and the same general radius language at smaller sizes; only the spacing should compress.

## Practical implementation guidance

### Preserve

- the near-black main canvas,
- the pale lavender action color,
- the thin neutral borders around cards,
- the oversized Inter headline scale,
- the deep blue footer stage,
- and the calm spacing rhythm between major blocks.

### Avoid

- adding a second bright accent color,
- filling cards with heavy gradients or shadows,
- turning the footer into a generic dark strip,
- shrinking the headlines too early,
- or mixing too many corner styles in one view.

### Recommended build order

1. Set the dark background and the Inter type scale.
2. Build the link-card row with borders, icon spacing, and text hierarchy.
3. Add the centered feature section with the outline CTA.
4. Build the split demo frame as a single large specimen block.
5. Add the blue footer stage and its column grid.
6. Tune spacing, radius, and contrast as the final pass.

### Accessibility

- Keep the lavender action readable against both the dark canvas and the blue footer.
- Give the outbound glyph a text label or equivalent name so the destination is clear.
- Preserve visible keyboard focus styles that do not depend on color alone.
- Make sure the small footer text still clears contrast requirements on the blue background.
- Avoid burying essential labels inside the illustration band, where contrast can fall.

## Scope note

This guide covers the supplied Chainlift views: the Connect card grid, the color-control feature section, and the blue footer. It does not define mobile breakpoints, animation timing, or interaction states that are not shown in the packet.
