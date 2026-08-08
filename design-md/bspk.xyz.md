# How bspk.xyz is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bspk.xyz-design)

Last updated: 2026-08-08

## Captured pages

[![Cream hero with bold black headline above a stark dark project band](https://pin.fontofweb.com/9365?format=jpg)](https://design.withfudge.com/share/pin-9365)

[Cream hero with bold black headline above a stark dark project band](https://design.withfudge.com/share/pin-9365)

[![Dark project block with centered title, square image, and pale release cards below](https://pin.fontofweb.com/9364?format=jpg)](https://design.withfudge.com/share/pin-9364)

[Dark project block with centered title, square image, and pale release cards below](https://design.withfudge.com/share/pin-9364)

[![Release-card grid and thin footer line in a wide beige layout](https://pin.fontofweb.com/9363?format=jpg)](https://design.withfudge.com/share/pin-9363)

[Release-card grid and thin footer line in a wide beige layout](https://design.withfudge.com/share/pin-9363)

## Overview

BSPK’s Anthropic page is a quiet editorial case study built from contrast, spacing, and type scale rather than ornament. The page opens with a cream header and a bold two-column lead, then drops into a large black project stage that acts like the central chapter of the story. Below that, a pale release area organizes three compact cards into a clean grid, and the page finishes with a sparse footer line and tiny meta copy. The visual system feels deliberate and restrained, with every part kept in service of the written narrative.

The site reads best as a wide desktop composition with a narrow content core. Surfaces stay flat, edges stay crisp, and the layout relies on big tonal shifts instead of decorative framing. The strongest recurring ideas are a near-black action color, warm neutral surfaces, dense headline text, and tiny utility text set apart by Courier New.

## Colors

The palette is almost entirely neutral, which gives the page a measured, institutional tone. The cream canvas carries the main reading surface, the beige and sand tones soften the release area, and the deep black stage creates the strongest interruption in the page. The same dark tone also handles action buttons, so interactions do not introduce a second accent color. Supporting text sits in a muted brown-gray that stays legible without competing with the headlines. If imagery is added, it should remain low-chroma and sit comfortably inside the same calm range.

| token | value | role |
|---|---|---|
| `action` | `#111111` | Primary buttons and small directional controls |
| `ink` | `#111111` | Main body text and headline text on light surfaces |
| `muted-ink` | `#5E584E` | Supporting copy, captions, and quiet labels |
| `canvas` | `#F2EDE3` | Main page background and header surface |
| `surface` | `#E1D7C8` | Release-card fill and light content panels |
| `surface-soft` | `#E9E1D4` | Softer panel variation and subtle inset areas |
| `surface-dark` | `#151515` | Project stage and other high-contrast dark blocks |
| `on-dark` | `#F5F1EB` | Text on the black stage and dark controls |
| `border` | `#CFC5B6` | Card borders, dividers, and hairline rules |
| `rule` | `#D9D0C1` | Thin separators in the footer and card metadata |
| `footer-ink` | `#8A8276` | Quiet footer copy and legal text |

The relationship between modes is simple: the canvas leads, the dark stage interrupts, and the release cards sit between them as a softer bridge. There is no bright brand accent competing for attention, so the page’s voice stays serious and controlled. Dark sections should keep their text pale and calm, while the light sections should keep their text near-black. That contrast is the main structural device.

## Typography

Typography does almost all of the branding work. Chivo carries the editorial voice across the hero, headings, body text, and controls, while Courier New appears in the tiny utility lines, metadata, and footer copy. That split creates a clear difference between reading text and system-like details. The page depends on scale more than variety: very large headings, compact subheads, short cards, and tiny footer text. Letter spacing stays tight in display areas and opens slightly in the micro text so the narrow labels feel deliberate rather than cramped. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Chivo | 3.75rem | 700 | 1 | -0.03em | Main lead statement in the cream opening band |
| `section-display` | Chivo | 3rem | 700 | 1 | -0.025em | Large title in the black project stage |
| `card-heading` | Chivo | 1.25rem | 700 | 1.15 | -0.015em | Release-card titles and short emphatic lines |
| `body` | Chivo | 1rem | 400 | 1.5 | 0em | Paragraph copy in the hero and cards |
| `body-small` | Chivo | 0.875rem | 400 | 1.45 | 0em | Secondary explanatory lines |
| `button-label` | Chivo | 0.75rem | 700 | 1 | 0.04em | Small button text and compact actions |
| `meta-label` | Courier New | 0.75rem | 400 | 1.2 | 0.08em | Card metadata labels such as date and category |
| `meta-copy` | Courier New | 0.75rem | 400 | 1.4 | 0.02em | Short metadata values and footer fragments |
| `footer-copy` | Courier New | 0.75rem | 400 | 1.4 | 0.02em | Footer line and legal text |

The hierarchy stays crisp because the sizes are far apart. Display text should feel heavy from scale and spacing, not from excessive decoration. Body text should remain calm and readable, with enough leading to keep the case-study pacing open. Micro text should stay small and orderly, never drifting into a decorative role.

## Layout

The layout is centered and narrow, with wide blank margins on both sides of the content column. That choice makes the page feel like a focused editorial page rather than a sprawling marketing homepage. The top area uses a light band with a compact wordmark and slim navigation, followed by a headline and short supporting paragraph arranged in two columns. The next section becomes a large black stage that occupies the full width of the content column and sets up the page’s primary visual contrast. After that, the release area returns to the warm canvas and presents the latest items as evenly spaced cards in a three-across grid.

Spacing is generous between chapters and restrained inside each card. The page depends on clear vertical separation: one block ends before the next begins, so every section has a distinct visual role. The hero area uses large side margins and a small gap between the headline and the summary copy. The black project stage uses even larger internal breathing room, which allows the title and the square visual to sit apart without feeling disconnected. The release cards use a more compact rhythm: heading, short summary, metadata, then button. That tighter pacing keeps the lower part of the page efficient after the dramatic opening. The footer is especially sparse, with a thin rule across the width and tiny text aligned low on the page.

The overall structure should remain stable at desktop scale. The composition works because the eye moves from calm light surfaces to deep black drama and then back to measured cards. That alternation gives the page a chapter-like rhythm without requiring heavy separators or dense UI chrome.

## Visual language

The visual language is strict, flat, and text-led. The page avoids soft gradients, glossy depth, and decorative icon sets. Instead, it uses a strong paper-like background, a black presentation band, and pale content cards to establish rhythm. The black stage has the feel of a poster or a technical exhibit: large title, small supporting line, and a square visual block that behaves like a diagram or illustration. The release area is quieter and more utilitarian, with square-edged cards, thin separators, and compact metadata rows. This shift from dramatic to practical is what gives the page its structure.

Corners stay modest. The site does not lean on pill shapes or heavy rounding, and it does not need shadows to define hierarchy. Hierarchy comes from size, contrast, and open space. The most prominent shapes are the broad horizontal bands and the card rectangles. Hairline rules appear only where information needs a gentle break, especially near the footer. Because the palette is so limited, even small changes in tone feel meaningful. Beige cards read as a softer surface against the cream canvas, and the black stage reads as a deliberate pause in the narrative.

If new pieces are added, they should still look like part of the same editorial system: quiet, measured, and built from type and surface rather than ornament.

## Components

### Header and global shell

The header is a thin, understated strip at the top of the canvas. It carries the wordmark on the left, a short row of navigation links across the top, and a compact dark action on the right. The shell stays transparent and calm so it never competes with the lead statement below it. Text treatment is small and precise, with enough spacing to keep the row readable at wide desktop width. The action pill uses the same dark tone as the project stage, which keeps the interactive language aligned with the rest of the page.

### Hero lead

The hero pairs a large headline with a short supporting paragraph. The headline is the visual anchor, so it should stay dense, dark, and left-aligned inside the cream band. The supporting copy sits to the right in a narrower column and gives the page its first explanatory turn. The composition depends on the tension between a strong type block and a quieter summary block. This is not a decorative banner; it is a written opening that establishes the page’s tone immediately.

### Black project stage

The project stage is the page’s dominant component. It uses a deep black surface, a large centered title, a small supporting line, and a compact button beneath the title. A square image or technical illustration sits on the right and balances the text block on the left. The title is the largest type on the page, and the surrounding space is broad enough to make the whole stage feel like a chapter cover. The button is tiny and dark-on-light, with a shallow radius and restrained emphasis. The stage should remain flat, high-contrast, and severe.

### Release cards

The release area uses a three-column card grid on a pale background. Each card contains a title, a short paragraph, two lines of metadata, and a small dark button at the bottom. The card fill is warmer than the canvas so the group reads as a contained content zone without needing a heavy frame. Metadata is set in a smaller, more mechanical style so it feels separate from the narrative copy. The buttons stay compact and dark, which ties them back to the stage above. The card spacing is even and the borders stay light, so the grid feels orderly rather than boxed in.

### Footer line and legal row

The footer is almost empty by design. A thin horizontal rule spans the page, and the lowest row holds a tiny mark on one side and copyright text on the other. This section works because it withdraws from the stronger page elements above it. It should remain quiet, low-contrast, and lightly spaced, with the same warm-neutral palette carrying all the way to the bottom.

## Responsive behavior

At narrower widths, the page should keep the same sequence of ideas: header, hero, black stage, release cards, footer. The hero can collapse into a single stacked block, but the headline should remain first and the supporting paragraph should stay close behind it. The black stage should keep its strong separation even when the image and text stack vertically. The release cards should shift from three columns to a single column or two columns before the text becomes too tight. The footer should keep its rule and its small legal line, even when the line wraps.

The main responsive goal is to preserve the editorial rhythm, not to preserve the exact desktop proportions. Every section should still feel like a separate chapter, and the dark stage should remain the page’s visual anchor.

## Practical implementation guidance

### Preserve

- Keep the page centered in a narrow shell with generous side margins.
- Use the cream canvas as the default background and let the black stage do the dramatic work.
- Keep the release cards pale, flat, and evenly spaced.
- Use Chivo for the reading hierarchy and Courier New only for the smallest utility text.
- Keep buttons small, dark, and understated.

### Avoid

- Avoid bright accent colors that fight the monochrome mood.
- Avoid glossy gradients, heavy shadows, and glass-like surfaces.
- Avoid large rounded cards or playful pill shapes everywhere.
- Avoid breaking the page into many tiny containers; the large bands are the main structure.
- Avoid making metadata look like body copy.

### Recommended build order

1. Build the centered page shell and the thin header.
2. Add the hero band with the two-column opening statement.
3. Build the black project stage with its title, short line, button, and right-side visual.
4. Add the release-card grid and the metadata rows.
5. Finish with the footer rule and tiny legal line.
6. Tune spacing so the page keeps its chapter rhythm at smaller widths.

### Accessibility

- Keep text contrast strong on both cream and black surfaces.
- Give every link and button a visible focus state.
- Keep card buttons large enough to tap comfortably even though they are visually small.
- Preserve clear heading order so the page reads well with assistive technology.
- Keep body copy at a length that remains comfortable across desktop and narrow screens.

## Scope note

This guide covers the desktop Anthropic case-study page: the cream header, black project stage, release-card grid, and sparse footer. Mobile layout, motion, hover behavior, and exact interaction states are not included. Measurements are practical adaptation targets.
