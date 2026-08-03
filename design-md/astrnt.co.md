# How astrnt.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/astrnt.co-design)

Last updated: 2026-08-03

## Captured pages

[![Hero with stacked headline and circular blue frame](https://pin.fontofweb.com/8774?format=jpg)](https://design.withfudge.com/share/pin-8774)

[Hero with stacked headline and circular blue frame](https://design.withfudge.com/share/pin-8774)

[![Header crop showing logo outline and outlined action](https://pin.fontofweb.com/8773?format=jpg)](https://design.withfudge.com/share/pin-8773)

[Header crop showing logo outline and outlined action](https://design.withfudge.com/share/pin-8773)

## Overview

ASTRNT presents hiring and admissions as a serious enterprise landing page. The composition opens with a narrow navy strip, then moves into a white header row and a broad hero. The tone is controlled and corporate rather than playful. There are no soft gradients, decorative flourishes, or crowded card stacks competing for attention. The page relies on scale, spacing, and a few sharp brand colors to carry the message.

The hero is the central object. A large dark headline anchors the left side, while the right side uses a layered product montage framed by a thick blue circular arc. That circle gives the page a memorable shape without turning the interface decorative. The header stays compact and functional, with grouped navigation labels, a search icon, a login link, and one outlined red call to action.

## Colors

The palette is narrow and intentionally high contrast. White is the main canvas and keeps the page feeling open. Deep navy, `#18244E`, carries the top utility strip and the heaviest brand text, so it acts as the structural color of the page. `#333333` serves as a softer ink for supporting copy when the design needs less severity than the navy.

The action color is a clear red, `#DB334D`. It is used for the outlined primary button, which makes the main conversion target feel urgent without filling the control with color. That matters because the rest of the header is quiet. The button stands out through border, text, and placement instead of through size alone.

Two cool accent colors support the hero and header language: `#2D26B8` and `#494CA1`. They show up as brand-blue and violet notes in the navigation, logo framing, and the large circular ring around the hero visual. Those accents should stay secondary to the navy and red so the page keeps its disciplined hierarchy.

The relationship between the colors is simple: white space carries the layout, navy carries authority, red carries action, and the cooler blues carry brand identity. The system stays flat and direct; it does not depend on gradients, glows, or shadow-heavy depth cues.

## Typography

ASTRNT uses one family, Open Sans, in Regular and Bold weights. Open Sans licensing should be confirmed separately before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Open Sans | 3rem | 700 | 1.08 | -0.01em | Large headline in the hero |
| section-display | Open Sans | 3rem | 700 | 1.08 | -0.01em | Any later full-width lead statement |
| body | Open Sans | 1rem | 400 | 1.43 | 0em | Supporting copy and explanatory text |
| navigation | Open Sans | 0.875rem | 700 | 1.5 | 0em | Header groups, utility links, compact labels |
| button-label | Open Sans | 0.875rem | 700 | 1.5 | 0em | Primary button and tight control labels |
| utility-note | Open Sans | 0.875rem | 400 | 1.5 | 0em | Top strip announcement line |

The typography is heavy on scale contrast rather than family contrast. The 48px headline dominates the hero and is set in bold with compact leading so the stacked lines feel like one statement. The 16px body size is restrained and practical. The 14px labels give the header a compressed, enterprise-like rhythm, especially when paired with the 2px border and 6px radius used on the main action. Open Sans works here because it stays neutral while still feeling sturdy at bold weights.

## Layout

The page is built as a tall, airy desktop landing page. It begins with a full-width navy announcement strip, then drops into a white navigation row with the logo on the left and grouped links spread across the center and right. That header row has enough horizontal room that each item feels separated but still part of the same system.

The hero uses a split layout. The left column carries the headline and supporting text, and the right column carries the visual montage. The left side is visually weighted enough to hold the page even without much supporting copy. The right side is not a simple illustration slot; it is a framed composition with a large blue arc, layered product screens, and a portrait crop. The arc gives the composition a strong circular envelope, which prevents the right side from feeling like an empty illustration area.

Spacing is one of the main design tools. The desktop hero uses generous top and bottom breathing room, with a very tall opening band before the headline and a long descent before the next content would begin. The navigation cluster keeps tighter internal spacing, using compact 10px to 16px gutters and about 50px between major header groups. That mix of loose page spacing and tight control spacing is what makes the interface feel both premium and operational.

The alternate crop reinforces that structure. The blue outline around the logo link should be preserved as the focus treatment in implementation, and it confirms that the header needs a clear interactive state without changing the layout. The layout should keep that balance: open page rhythm, compact controls, and one dominant hero composition.

## Visual language

ASTRNT’s visual language is corporate, sharp, and uncluttered. It does not lean on soft consumer styling. Instead, it uses strong geometry, clear borders, and a limited palette to suggest competence. The header is a clear example: a dark strip, crisp navigation, and a bordered red action. Nothing in that row is decorative for its own sake.

The hero visual behaves like a composed product poster. A laptop or screen cluster sits inside the blue arc, and a portrait crop adds a human signal without turning the page into a lifestyle brand. The visual is layered, but it is not busy. Each element gets room to breathe, and the circle frame is the main structural shape besides the page rectangles.

The system is mostly flat. There is no heavy drop-shadow language in the supplied material. Edge clarity comes from borders and spacing. The 6px corner radius keeps controls tidy and slightly softened, but not pill-like. That radius works well with the 2px border because it keeps the button feeling firm and businesslike.

The page also relies on repeated straight alignment. The logo, navigation, headline block, and action all sit on disciplined vertical and horizontal edges. That alignment gives the design its authority. The visual story is not dynamic in the playful sense; it is controlled, calm, and precise.

## Components

### Top notice bar

- **Anatomy:** One-line utility message stretched across the full width of the page.
- **Surface:** Solid navy with white text.
- **Typography:** Small bold or semibold utility text, set compactly so the line reads quickly.
- **Composition:** The message stays subordinate to the main header and does not compete with the hero.
- **Visible state:** Right-aligned text creates a quiet, administrative tone.

### Header

- **Anatomy:** Logo mark, grouped navigation labels, search icon, login link, and outlined action button.
- **Composition:** The logo starts the row, the grouped links occupy the center, and the conversion action ends the row.
- **Typography:** Navigation uses small bold Open Sans with a crisp rhythm.
- **Shape:** The primary button uses a 6px radius and a 2px border.
- **Surface:** Mostly white, with blue text accents and a red call to action.
- **Visible state:** The alternate crop shows the logo link framed in blue, which gives the header a clear focus treatment.

### Primary action

- **Anatomy:** White fill, red border, red label.
- **Typography:** Button label uses the 14px bold Open Sans treatment.
- **Shape:** Compact rectangle with rounded corners, not a pill.
- **Use:** Reserve this treatment for the main entry point only.
- **Visible state:** It stands out by border and color contrast rather than by heavy fill or shadow.

### Hero headline

- **Anatomy:** Large multi-line statement on the left side of the hero.
- **Typography:** 48px bold Open Sans with tight leading.
- **Composition:** Left aligned, broad line length, and enough white space around it that each line reads as part of one banner.
- **Visible state:** The headline dominates before any supporting copy or imagery can compete.

### Hero montage

- **Anatomy:** Product screen layers, a portrait crop, and a thick circular ring behind them.
- **Surface:** White page field with blue and pale interior tones inside the montage.
- **Composition:** The ring frames the screens and gives the right side a large, stable shape.
- **Hierarchy:** The montage supports the headline; it does not replace it.
- **Visible state:** The overlap between the circle, screens, and portrait creates depth without shadows.

## Responsive behavior

The desktop layout depends on wide spacing and a strong left-right split, so a smaller-screen version should preserve the same order of importance: utility line, header, headline, action, then the visual montage. The headline should stay the first reading target. The hero image can compress or stack only after the text remains legible at the intended size. The control set should keep its compact border-and-radius language even when it collapses.

For the header, the grouped navigation labels may need to condense into fewer visible items on narrow widths, but the relationship between logo, links, and primary action should remain obvious. The outlined red action should not be replaced with a filled style on its own, because the white fill is part of the system’s restraint. The blue focus outline seen on the logo link is worth preserving in any interactive version, since it matches the page’s crisp, low-decoration tone.

## Practical implementation guidance

### Preserve

- Keep the page mostly white, with navy used for structure and red reserved for the main action.
- Keep the 48px bold hero headline as the central visual anchor.
- Keep the 6px radius and 2px border on the main button.
- Keep header spacing open enough that each nav group reads cleanly.
- Keep the blue circular hero frame; it is the strongest non-typographic shape in the layout.

### Avoid

- Avoid soft pastel palettes or consumer-style gradients.
- Avoid heavy shadows, glossy treatment, or deep button fills.
- Avoid replacing the outlined primary action with a pill-shaped control.
- Avoid centering the hero copy; the left alignment is part of the page’s authority.
- Avoid crowding the header with extra icons or secondary controls.

### Recommended build order

1. Build the top utility strip and the white header row.
2. Set the Open Sans hierarchy for the hero, navigation, and button labels.
3. Recreate the outlined red primary action with the 6px radius.
4. Lay out the split hero with the headline on the left and the visual montage on the right.
5. Add the blue ring and layered product imagery.
6. Refine spacing so the page keeps its airy, enterprise feel at desktop widths.

### Accessibility

- Keep text contrast high on the navy strip and in the hero headline.
- Give the outlined action a clear focus treatment that stays visible against white.
- Preserve readable touch targets by keeping the button padding generous enough to match the 10px to 16px control rhythm in the packet.
- Make the navigation labels clear and avoid hiding meaning inside the chevrons.
- Use useful alternative text for the hero montage so the layered screen composition is described rather than flattened into a generic image label.

## Scope note

This guide covers the desktop homepage header and hero shown in the supplied crops. It does not define mobile collapse, dropdown behavior, motion, hover states, secondary pages, or font licensing. Measurements are rounded to the packet’s 0.125rem step where needed.
