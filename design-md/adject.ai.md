# How adject.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/adject.ai-design)

Last updated: 2026-08-08

## Captured pages

[![Centered hero with blue halo, large black headline, and before-after product frame](https://pin.fontofweb.com/7678?format=jpg)](https://design.withfudge.com/share/pin-7678)

[Centered hero with blue halo, large black headline, and before-after product frame](https://design.withfudge.com/share/pin-7678)

[![Four-column pricing grid with rounded cards, monthly toggle, and blue outlined Pro plan](https://pin.fontofweb.com/7677?format=jpg)](https://design.withfudge.com/share/pin-7677)

[Four-column pricing grid with rounded cards, monthly toggle, and blue outlined Pro plan](https://design.withfudge.com/share/pin-7677)

[![Expanded FAQ row in solid blue with white question text and pale answer panel](https://pin.fontofweb.com/7676?format=jpg)](https://design.withfudge.com/share/pin-7676)

[Expanded FAQ row in solid blue with white question text and pale answer panel](https://design.withfudge.com/share/pin-7676)

## Overview

Adject.ai uses a stripped, high-contrast marketing system built to move quickly from promise to product proof. The page stays on a white canvas and lets a single electric blue carry emphasis: the launch strip, the main call to action, the selected plan outline, and the expanded FAQ row all repeat that same saturated note. Near-black type anchors the message, while the product image sits in a large rounded stage with a pale blue glow behind it. The result is clean and persuasive rather than decorative.

The page is organized like a sales sequence. First comes a compact announcement line and a centered hero with oversized type. Then a large product comparison image establishes the value proposition. Pricing follows in a four-card grid with a visible monthly-yearly switch. The FAQ closes the page with a strong active row that turns the entire line into a blue bar. Every section is spacious, symmetrical, and easy to scan.

What matters most is restraint: one dominant accent, large rounded containers, minimal color variety, and typography that carries most of the personality.

## Colors

The color system is intentionally narrow. White is the dominant field, near-black handles primary text, and blue is reserved for actions, selected states, and the most important emphasis points. A cool off-white surface softens the pricing cards and FAQ answer area so the page never feels harsh. The system does not rely on a separate dark page mode; instead, it uses black type and black controls against white space to create contrast. That keeps the brand feeling lightweight and direct.

| token | value | use |
|---|---|---|
| `action` | `#0540F2` | Primary buttons, the launch strip, the active FAQ row, and the selected pricing outline |
| `link` | `#0000EE` | Quiet link accents and any small inline directional emphasis |
| `ink` | `#0A0A0A` | Main headlines, plan names, and body text on light surfaces |
| `ink-strong` | `#000000` | The heaviest black used for the wordmark, pills, and the strongest text contrast |
| `canvas` | `#FFFFFF` | Page background, card base, and most negative space |
| `surface` | `#F5FFFD` | Soft card fill, FAQ answer area, and the pale cool field behind content blocks |
| `border` | `#F5FFFD` | Hairline edge on cards and soft framing where a visible border must stay almost silent |

The blue should stay scarce. When it appears as a fill, outline, or bar, it should signal the most active state in the layout. The pale cool surface is not a competing brand color; it is a quiet lift that keeps the white page from feeling flat. The pricing grid and FAQ work because the surface tint is only slightly different from the canvas, so the hierarchy comes from shape, type, and blue emphasis rather than from many competing hues.

## Typography

The page reads as a single-sans system. Inter carries the hero, pricing, FAQ, buttons, and body copy with a geometric, compact feel. Google Sans 18 Pt appears as a named family in the available set and fits small utility labels and badges well. System remains the safe fallback for micro copy and legal text. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Inter | 4.5rem | 700 | 0.95 | -0.04em | Main headline in the hero |
| `section-display` | Inter | 3rem | 700 | 0.95 | -0.03em | Section titles such as Pricing and FAQ |
| `price-display` | Inter | 2.75rem | 700 | 0.95 | -0.03em | Large monthly price figures |
| `body` | Inter | 1rem | 400 | 1.5 | 0em | Supporting sentences and feature copy |
| `body-medium` | Inter | 1rem | 500 | 1.5 | 0em | Buttons, plan names, and emphasized UI copy |
| `nav` | Inter | 0.875rem | 500 | 1.2 | 0em | Top navigation and compact header links |
| `label` | Google Sans 18 Pt | 0.875rem | 600 | 1 | 0.08em | Badges, tiny labels, and utility tags |
| `micro` | System | 0.75rem | 500 | 1.4 | 0.04em | Small notes and short helper text |
| `legal` | System | 0.75rem | 400 | 1.5 | 0em | Fine print and low-priority supporting copy |

The hierarchy depends on size and weight more than on family changes. The hero headline is very bold and tight. Pricing numbers remain large enough to read as figures, not labels. The FAQ uses a strong question line and a softer answer block beneath it. Utility text stays compact and slightly spaced so it can sit comfortably inside pills and small controls without crowding the page.

## Layout

The layout is centered, staged, and highly symmetrical. The hero uses a narrow central column with a wide product image below it, so the headline and the proof image both get room to breathe. The announcement strip sits above everything else and uses the full width of the page, which makes the rest of the page feel intentionally calm by comparison. The large blue halo behind the hero image gives the top of the page depth without adding extra structure.

Pricing changes the rhythm. Instead of a single stage, the page becomes a four-column comparison grid. Each card is large, rounded, and evenly spaced. The monthly-yearly switch sits above the grid and is visually small, but it matters because the selected state is emphasized with a dark pill against a pale track. This keeps the focus on the plans while still making the control easy to find.

The FAQ returns to a single-column stack. That stack is deliberate: it slows the page down after the pricing grid and gives the active row enough horizontal width to read like a banner. The open state expands into a substantial blue band with the answer tucked directly below it on a pale surface. The repeated wide corner radius keeps even the long FAQ row feeling soft rather than rigid.

Spacing is generous throughout. The page relies on vertical separation, large top and bottom padding, and clear gaps between cards rather than on dense borders or nested chrome. That simplicity is what makes the page feel fast.

## Visual language

Adject.ai combines three visual moves. First, it uses bold black typography that looks designed for direct conversion rather than storytelling fluff. Second, it uses rounded, floating UI containers with soft shadows or light borders so the page feels lifted off the canvas. Third, it uses a single electric blue as the only loud accent color, which gives the page a clear emotional center.

The hero image is the most distinctive visual element. It is not a generic marketing illustration; it is a large framed product transformation with a visible before-and-after split, a central handle, and a black-and-white subject photo. That makes the product feel concrete. The blue glow behind the image frames the stage and visually ties the image back to the rest of the page.

The pricing cards keep the same language but in a more structured form. Rounded corners, light fills, and thin edges make the plan grid feel calm. The Pro card gets the strongest emphasis through a blue border and a small “most popular” pill, not through a different background color. That keeps the system disciplined.

The FAQ is the clearest state example. The active row becomes a full-width blue slab with white text and a close icon, while the inactive rows remain quiet and monochrome. The contrast between states is immediate and easy to scan.

## Components

### Announcement bar

- **Anatomy:** Single-line message and a close icon on the far right.
- **Surface:** Full-width blue strip with white text.
- **Typography:** Small, compact utility text that fits inside a low-height band.
- **Shape:** Straight-edged at page scale, but visually softened by the contrast with the white canvas.
- **Visible state:** The dismiss control is present but unobtrusive, so the bar reads as a temporary launch note rather than a permanent page header.

### Header

- **Anatomy:** Wordmark on the left, centered navigation links, and a dark rounded CTA on the right.
- **Typography:** Small medium-weight navigation with a compact rhythm.
- **Shape:** The CTA is a pill with a deep black fill and white text.
- **Composition:** The header stays light and sparse so the hero can own the page.
- **Visible state:** The active emphasis is the CTA, not the links.

### Hero

- **Anatomy:** Tiny badge, oversized headline, supporting sentence, one primary action, and a short reassurance line.
- **Typography:** The headline is heavy, centered, and tightly set; the support copy is much smaller and calmer.
- **Surface:** White page with a pale blue stage behind the product image.
- **Shape:** A very large rounded container frames the stage and keeps the hero soft.
- **Composition:** Everything centers on the CTA and the before-and-after visual proof. The badge gives the section a launch feel without distracting from the headline.

### Primary action

- **Anatomy:** One dominant button with white text.
- **Surface:** In the hero it uses blue; elsewhere the system may invert to black for hierarchy.
- **Typography:** Medium-weight label, no extra flourish.
- **Shape:** Fully rounded pill.
- **Visible state:** The button should remain visually heavier than any secondary text link.

### Pricing cards

- **Anatomy:** Plan label, large monthly price, short descriptor, feature list, and a bottom CTA.
- **Surface:** White cards with very light edges and generous padding.
- **Typography:** Large price figures, smaller plan labels, then a compact list.
- **Shape:** Tall rounded cards with consistent corner treatment.
- **Composition:** Four even columns, with the highlighted plan marked by a blue outline and a small popularity pill.
- **Visible states:** Included items are marked with blue checks; unavailable items fade down into a quieter gray.

### Plan switch

- **Anatomy:** Two-option pill control for monthly and yearly pricing.
- **Surface:** Pale track with a dark selected segment.
- **Typography:** Small medium-weight text.
- **Shape:** Strong pill geometry with a clear selected thumb area.
- **Visible states:** Selected state is dark and high-contrast; unselected state stays light.

### FAQ accordion

- **Anatomy:** Question row, expansion bar, answer block, and a trailing plus or close icon.
- **Surface:** The open question becomes a solid blue bar; the answer sits on a pale surface below it.
- **Typography:** Questions are bold and dark when closed, white when open.
- **Shape:** Large rounded container with broad corners.
- **Composition:** The open row spans the full width so the state change feels immediate.
- **Visible states:** Closed rows are plain and airy; the open row is the strongest color moment on the page after the hero CTA.

## Responsive behavior

For smaller screens, keep the same hierarchy but compress the number of simultaneous columns. The hero should stack before the product image instead of squeezing the image beside the text. The pricing grid should reduce from four columns to two or one, while preserving the highlighted plan treatment and the CTA placement. The FAQ should remain a single-column stack so the open row can still stretch full width.

Type can step down, but the proportions should stay bold: the hero should still feel headline-first, the price figures should remain large, and the labels should never overpower the plan names. Rounded shapes should remain rounded at every size; smaller screens should not turn the page into a boxy layout. If space gets tight, reduce lateral padding before reducing corner radius.

## Practical implementation guidance

### Preserve

- Keep one saturated blue as the only recurring accent.
- Preserve the centered hero and the strong before-and-after product image.
- Keep the pricing grid evenly spaced and the selected plan visibly outlined.
- Maintain the full-width blue active FAQ row as the clearest state change.
- Hold onto the large rounded geometry; it is part of the page’s softness.

### Avoid

- Avoid introducing extra accent colors or secondary fills that compete with blue.
- Avoid thin, tiny buttons that weaken the conversion path.
- Avoid dense borders, nested cards, or dashboard-style grid chrome.
- Avoid making the FAQ or pricing cards visually noisy with too many icons or status colors.
- Avoid shrinking the headline into a generic body-sized message on smaller layouts.

### Recommended build order

1. Set the white canvas, black text, and blue accent tokens.
2. Build the announcement strip and the top header.
3. Build the centered hero and the large product comparison stage.
4. Add the primary action and the small reassurance line beneath it.
5. Build the pricing toggle and the four-card plan grid.
6. Finish with the FAQ accordion and its open blue state.
7. Tune spacing and corner radius together so the whole page feels like one system.

### Accessibility

- Keep blue text or blue fills paired with white text wherever contrast matters.
- Give the active FAQ row a clear focus state and a keyboard-friendly toggle target.
- Make the pricing switch readable without color alone; the selected segment should also shift shape or fill.
- Provide alt text for the hero comparison image so the product transformation is understandable without seeing the split.
- Keep line length short in the hero and FAQ answers so the page remains readable when stacked.

## Scope note

This guide covers the marketing homepage surface: the announcement bar, top navigation, hero, pricing block, and FAQ. It does not cover the app workspace, account flows, deeper product pages, or smaller-screen breakpoints.
