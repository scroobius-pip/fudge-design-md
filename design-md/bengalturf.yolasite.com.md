# How bengalturf.yolasite.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bengalturf.yolasite.com-design)

Last updated: 2026-08-04

## Captured pages

[![Glossy lime title plaque with right-aligned text tabs and phone lead](https://pin.fontofweb.com/9475?format=jpg)](https://design.withfudge.com/share/pin-9475)

[Glossy lime title plaque with right-aligned text tabs and phone lead](https://design.withfudge.com/share/pin-9475)

[![Two-column about block beside a garden bed photo and mission copy](https://pin.fontofweb.com/9474?format=jpg)](https://design.withfudge.com/share/pin-9474)

[Two-column about block beside a garden bed photo and mission copy](https://design.withfudge.com/share/pin-9474)

[![Services column with underlined heading and plain bullet list](https://pin.fontofweb.com/9473?format=jpg)](https://design.withfudge.com/share/pin-9473)

[Services column with underlined heading and plain bullet list](https://design.withfudge.com/share/pin-9473)

## Overview

Bengal Turf uses an old brochure-page formula and commits to it fully. The entire page sits on one deep olive canvas, so the content reads as a centered panel of local-service information rather than a modern marketing site. A pale green title plaque floats near the top, a black navigation rail runs above it, and a strong phone line acts as the first real call to action. The rest of the page stays quiet: one photograph, two-column text blocks, and a simple services list. The design works because every part knows its job. The banner identifies the business, the phone line pushes action, the photo lends trust, and the text columns explain what the company does.

The visual hierarchy is shallow and direct. There is no product storytelling, no feature grid, and no ornamental chrome. Instead, the layout depends on repetition, centered alignment, and a narrow type palette. The result feels like a neighborhood contractor page from a template era, but it is still coherent: one surface color, one photo style, one serif display family, one sans family, and one recurring black reading color.

## Colors

The color system is very small and highly literal. Olive is the page itself, darker olive supports the wordmark, and two pale greens build the title plaque. Black carries the utility rail, the main callout, and the reading copy. Gray appears only as a small tab treatment and a subtle rule tone. Nothing in the page behaves like a separate accent language; the light greens are part of the banner, not a general-purpose brand spectrum. The photograph adds natural greens, flowers, and lawn color, but those tones belong to the image and should not be turned into UI tokens.

| token | hex | use |
|---|---|---|
| `canvas` | `#496C10` | Full-page background and the dominant field behind every section |
| `canvas-strong` | `#3E5C0E` | Dark olive wordmark color and the heaviest heading tone |
| `banner-start` | `#D2EBAB` | Lighter top of the title plaque and the brightest green interface note |
| `banner-end` | `#AFCE7C` | Lower band of the title plaque and the softer pale green layer |
| `ink` | `#000000` | Phone callout, body text, utility strip, and the highest-contrast reading color |
| `tab-surface` | `#999999` | Small active tab chip in the top navigation |
| `rule` | `#CCCCCC` | Pale divider tone for subtle tab contrast and light surface separation |

The page has no real dark mode. Its “dark” presence is the olive canvas and the black rail, while its “light” presence is the plaque and the photograph. That mix is enough to create depth without additional surfaces or shadows. The banner’s gradient should stay in the green family; the page does not need a secondary accent color.

## Typography

Two families define the whole page: Georgia for the branded and display moments, Arial for everything functional. Georgia gives the page its old-school authority. It handles the business title in the plaque, the large consultation line, and the section headings. Arial keeps the supporting paragraphs and the navigation plain and serviceable. The hierarchy is based on size and weight more than on many stylistic variations, and the tracking stays tight enough to make the serif display text feel compact.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `brand-title` | Georgia | 1.875rem | 700 | 1 | -0.1em | Business name inside the green title plaque |
| `hero-callout` | Georgia | 2.4375rem | 700 | 1 | -0.077em | “Call For a Free Consultation” line and phone number |
| `section-heading` | Georgia | 1.875rem | 700 | 1 | -0.1em | About, Mission Statement, and Services headings |
| `intro` | Arial | 1rem | 400 | 1.5 | 0em | Short lead-in copy and denser explanatory lines |
| `body-large` | Arial | 0.9375rem | 400 | 1.6 | 0em | Main paragraph copy in the about and mission blocks |
| `body` | Arial | 0.8125rem | 400 | 1.6 | 0em | Dense body text and list text |
| `navigation` | Arial | 0.6771rem | 700 | 1.92 | 0em | Top tabs and the small utility rail |

Georgia should stay reserved for the words that need presence. Arial should stay on the text that must recede. No designer or vendor credit is supplied for either family, so licensing should be confirmed before reuse.

## Layout

The page is built around a centered desktop column with very wide side gutters. At the supplied width, the content sits far from both edges, which makes the olive canvas feel intentional rather than empty. The top utility rail spans the column and keeps the tabs small and right aligned. Directly beneath it, the title plaque is centered and padded enough to read like a discrete object rather than a line of text on the background.

The next layer is the strongest reading moment: one large Georgia consultation line, centered above the main content. After that, the page shifts into a simple two-column grid. On the left is a rectangular garden photograph. On the right is a stack of short paragraphs. The two-column rhythm repeats lower down with Mission Statement on the left and Services on the right. That repetition is the page’s main structural device. It gives the site a brochure cadence without resorting to cards or boxed sections.

Vertical spacing is generous but not loose. Small internal gaps keep the banner, nav rail, and body copy together. Larger gaps separate the hero callout from the content grid and the content grid from the lower row. The page depends on a handful of repeated distances rather than a large scale. That keeps the rhythm steady and makes the strong olive background feel continuous from top to bottom.

## Visual language

The visual language is plain, dependable, and local. The page does not try to look polished in a contemporary web sense. Instead, it uses a few old template cues very deliberately: a glossy green plaque, a black text rail, a centered consultation line, and a garden photograph with real lawn and flower color. The plaque is the only object that feels decorative, and even that decoration stays minimal. It reads as a simple shiny bar, not as a branded hero component.

The photograph does most of the trust work. It shows a real planting bed with bright flowers, a lawn edge, and a landscaped setting that suggests care and seasonal work. Nothing in the interface competes with that image. The copy stays short, the bullets stay plain, and the layout leaves enough empty olive space that the picture can breathe.

This system uses contrast more than ornament. Black on olive gives the copy force. Pale green on dark olive gives the title plaque a soft glow. The page never needs shadows, gradients outside the plaque, or framed panels to communicate structure. The service information feels straightforward because the visual language is straightforward.

## Components

### Utility navigation

- **Anatomy:** Three small text tabs on a black strip, aligned toward the top right.
- **Typography:** Arial in a tiny bold setting.
- **Surface:** Black rail with a single gray active chip and lighter inactive labels.
- **Visible states:** Only the selected tab state is emphasized, and it uses a simple gray rectangle rather than a heavy button style.
- **Composition:** Keep the tabs compact and close to the top edge so they read as utility, not as the main navigation.

### Brand banner

- **Anatomy:** A centered horizontal plaque carrying the full business name.
- **Surface:** Pale lime gradient with a darker olive wordmark and a thin dark outline.
- **Typography:** Georgia, bold, compact, and slightly tightened.
- **Shape:** Rectangular with very soft rounding at most; the main effect comes from the glossy fill.
- **Spacing:** The plaque needs internal breathing room so the title does not touch the edges.
- **Role:** This is the identity anchor. It should stay small enough to feel like a plaque and large enough to read instantly.

### Hero callout

- **Anatomy:** One line of large centered copy with the phone number attached.
- **Typography:** Georgia, bold, much larger than the body text.
- **Color:** Black, so the line feels direct and conversion-focused.
- **Composition:** Keep it isolated from the banner and the content grid. Its job is to stop the page and ask for a call.
- **Visible state:** It appears as a pure text treatment, not as a button.

### About block

- **Anatomy:** Left-aligned landscape photo on the left, stacked paragraphs on the right.
- **Typography:** Arial body copy with small paragraph spacing and clear line breaks.
- **Surface:** No card container. The olive background remains visible around the image and copy.
- **Composition:** The photo should hold the left side with enough width to feel like the visual anchor, while the text column stays narrow and readable.
- **Role:** This section translates the business into a local service story: reliability, lawn care, exterior care, and the service area.

### Mission and services block

- **Anatomy:** Two lower columns with a short mission statement on the left and a services list on the right.
- **Typography:** Georgia for the headings, Arial for the paragraphs and list items.
- **Surface:** Plain text on the olive field, with no boxed list treatment.
- **Hierarchy:** The services heading is especially important because it reads like a section marker and sometimes appears underlined.
- **Visible states:** The list uses simple bullets and line breaks; nothing is hidden or collapsed.
- **Composition:** Keep the two columns balanced so the page does not drift into a single long text column.

## Responsive behavior

The supplied pages show a fixed desktop composition, not a designed mobile system. If the layout is adapted for narrow screens, preserve the reading order: title plaque, phone callout, photo, about copy, mission, then services. Do not invent a card-based mobile redesign or swap the content into a different narrative. The easiest safe move is a vertical stack that keeps the consultation line above the photo and the services list at the end. The banner should remain centered and prominent, even when it needs to scale down.

## Practical implementation guidance

### Preserve

- Keep the full olive canvas. The page depends on that uninterrupted field.
- Preserve the centered desktop column and the very wide side gutters.
- Use Georgia only for the title plaque, the callout, and the section headings.
- Keep Arial for body copy and utility tabs so the page stays simple and readable.
- Let the garden photo remain a single rectangular image with no overlay treatment.

### Avoid

- Avoid white backgrounds, cards, or modern dashboard surfaces.
- Avoid secondary accent colors beyond the existing greens, black, and gray.
- Avoid heavy shadows, pill buttons, icon sets, and other decorative additions.
- Avoid a new font family for any part of the page.
- Avoid turning the services list into tiles, badges, or pricing blocks.

### Recommended build order

1. Paint the olive canvas and center the main content column.
2. Add the black utility rail and the right-aligned tabs.
3. Build the green title plaque and the Georgia wordmark.
4. Place the large consultation line beneath the banner.
5. Add the photo-and-copy split section.
6. Add the mission and services row.
7. Adjust spacing so the page keeps its calm brochure rhythm.

### Accessibility

- Keep the black text on olive at a strong contrast level.
- Keep the top tabs and any inline links recognizable without color alone.
- Provide descriptive alt text for the garden photograph.
- Preserve visible keyboard focus on the tabs and any call links.
- If the layout stacks on smaller screens, keep the heading order and paragraph breaks readable.

## Scope note

This guide covers the desktop homepage surface for bengalturf.yolasite.com: the olive field, title plaque, phone callout, about photo block, mission statement, and services list. It does not define mobile breakpoints, other pages, motion, hover behavior, or alternate footer states.
