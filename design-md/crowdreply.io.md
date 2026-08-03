# How crowdreply.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/crowdreply.io-design)

Last updated: 2026-08-03

## Captured pages

[![Dark hero with centered headline, orange call to action, and floating logo capsules](https://pin.fontofweb.com/8154?format=jpg)](https://design.withfudge.com/share/pin-8154)

[Dark hero with centered headline, orange call to action, and floating logo capsules](https://design.withfudge.com/share/pin-8154)

[![Tall testimonial grid with pastel metric tiles and white quote cards](https://pin.fontofweb.com/8153?format=jpg)](https://design.withfudge.com/share/pin-8153)

[Tall testimonial grid with pastel metric tiles and white quote cards](https://design.withfudge.com/share/pin-8153)

[![Centered AI search section with white cards and dark embedded charts](https://pin.fontofweb.com/8152?format=jpg)](https://design.withfudge.com/share/pin-8152)

[Centered AI search section with white cards and dark embedded charts](https://design.withfudge.com/share/pin-8152)

[![Platform row above a broad charcoal stage with stacked interface cards](https://pin.fontofweb.com/8151?format=jpg)](https://design.withfudge.com/share/pin-8151)

[Platform row above a broad charcoal stage with stacked interface cards](https://design.withfudge.com/share/pin-8151)

[![White feature grid mixing dark dashboards, peach panels, and metric tiles](https://pin.fontofweb.com/8150?format=jpg)](https://design.withfudge.com/share/pin-8150)

[White feature grid mixing dark dashboards, peach panels, and metric tiles](https://design.withfudge.com/share/pin-8150)

[![Dark engagement engine panel with icon row and branching connection lines](https://pin.fontofweb.com/8147?format=jpg)](https://design.withfudge.com/share/pin-8147)

[Dark engagement engine panel with icon row and branching connection lines](https://design.withfudge.com/share/pin-8147)

## Overview

CrowdReply uses a brochure-like SaaS layout with a sharp split between light proof sections and dark product stages. The page starts with a large black shell, then moves into a warm cream canvas with white cards, pastel stat tiles, and centered section headings. The visual idea is simple: one loud opening, then a sequence of clean, airy panels that explain the product through cards, charts, and short quotes.

The system feels controlled rather than flashy. Most surfaces are flat or nearly flat, borders stay light, and the main contrast comes from surface color, not from heavy shadow or dense decoration. The most memorable forms are the oversized rounded hero container, the smaller 12px cards in the testimonial and feature grids, and the pill-shaped chips that label sections or carry tiny status numbers. Orange is the only strong action color; blue and cream support charts, badges, and informational graphics.

The page rhythm matters as much as the individual components. A dark hero or dark product stage resets attention, then the design returns to a bright grid of cards with generous breathing room. That alternating cadence is the core of the system.

## Colors

### Core interface colors

| token | value | role |
|---|---|---|
| `action` | `#F96F4B` | Primary button fill, highlighted outlines, and the warm accent in the hero and dark sections |
| `ink` | `#111111` | Main text on light surfaces |
| `muted-ink` | `#585C5F` | Supporting copy, subtitles, and lower-contrast labels |
| `canvas` | `#FBFAF9` | Page background and footer field |
| `surface` | `#FFFFFF` | Card fill and the cleanest panel surface |
| `surface-subtle` | `#F4F3F0` | Soft off-white tile fill |
| `border` | `#DEDEDE` | Hairline card and tile borders |
| `dark-surface` | `#1B181C` | Hero shell and dark product stages |
| `dark-surface-raised` | `#272329` | Raised dark panels inside the black field |
| `dark-ink` | `#FFFFFF` | Text on dark surfaces |
| `accent-blue` | `#82A7F8` | Charts, hero accents, and informational bars |
| `accent-blue-soft` | `#C1D2FC` | Pale blue stat tiles and secondary fills |
| `accent-cream` | `#F1ECD9` | Warm cards, chart fills, and soft background chips |
| `accent-gold` | `#DFD4A8` | Warm muted proof tiles and bars |
| `chart-gold` | `#C3A55C` | Stronger gold inside metric bars |
| `chart-sand` | `#CEBA7B` | Secondary chart bars and comparison fills |
| `success` | `#36FF94` | Small positive counters and traffic indicators |

The page uses color as hierarchy, not as ornament. `action` is the only persistent call-to-action color, so the orange button reads instantly against the black hero and the white cards. Blue is informational: it appears in chart arcs, secondary blocks, and the colored word treatment in the hero. Cream and pale gold soften proof tiles, while `canvas` and `surface` keep the page bright and editorial. Dark surfaces are reserved for the hero and product stages, where the design needs a poster-like hit of contrast.

One distinctive blend ties the system together: `linear-gradient(90deg, rgb(249, 111, 75) 0%, rgb(130, 167, 248) 43.7682%, rgb(241, 236, 217) 96.4178%)`. It reads as a signal ribbon rather than a decorative wash, and it suits the floating logo capsules in the hero.

## Typography

CrowdReply’s voice comes from two material families: **Outfit** and **Inter**. Outfit carries the opening statement and gives the hero a heavier, more branded shape. Inter carries the rest of the page, including centered section titles, card headings, body copy, and the footer. **System** appears only in tiny utility labels and micro text, and **Crisp Noto Sans** appears only in an incidental button glyph. Licensing terms are not supplied here and should be checked before reuse.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Outfit | 3.5rem | 600 | 1.1 | -0.0625em | Centered black-hero headline |
| `section-display` | Inter | 2.75rem | 600 | 1.2 | -0.068em | Large section headings on light and dark stages |
| `feature-display` | Inter | 2rem | 500 | 1.4 | -0.046875em | Card headings and smaller feature titles |
| `lead` | Inter | 1.125rem | 400 | 1.7 | 0em | Subtitles beneath section headings |
| `body` | Inter | 1rem | 400 | 1.7 | 0em | Card body copy and explanatory text |
| `body-strong` | Inter | 1rem | 600 | 1.7 | 0em | Button text and emphasized metric copy |
| `label` | Inter | 0.875rem | 500 | 1.4 | 0em | Section chips, small headings, and utility labels |
| `fineprint` | Inter | 0.875rem | 400 | 1.4 | 0em | Footer links, metadata, and lower-contrast support text |
| `utility` | System | 0.75rem | 400 | 1 | 0em | Tiny utility text and icon-adjacent helpers |
| `button-glyph` | Crisp Noto Sans | 0.6875rem | 400 | 1 | 0em | Small glyph content inside compact button chrome |

The hierarchy is built on scale and tight tracking. The hero headline is large, compact, and centered. The next tier drops to 44px or 32px territory and keeps the same confident weight, which makes the page feel consistent even when the surface changes from black to cream. Supporting copy stays readable and open at 16px or 18px, with 14px reserved for labels and footer material. There is very little typographic flourish beyond the gradient word in the hero; the page relies on size, spacing, and weight instead.

## Layout

The page is arranged as a centered sequence of wide sections with a lot of vertical breathing room. The black hero sits inside a giant rounded shell with very large corner treatment, then the layout returns to a bright canvas for the rest of the page. That shell-like opening is the strongest shape in the system, and it sets the tone for the whole page: one dominant panel, one centered message, one direct action.

Below the hero, the light sections use a simple bento rhythm. Headings sit centered above card grids, and the cards themselves alternate between pure white, pale cream, blue-tinted fills, and warm peach or gold tiles. The grid feels steady because the internal padding is generous and repeated. Many cards use the same 12px border radius; the softer pastel tiles shift closer to 18px and 20px corners, which keeps the smaller proofs from looking too rigid. The section chips at the top of each block act as anchors and help the page read as a sequence of chapters.

Dark product stages interrupt the bright cadence. They use the same roundness as the hero shell and often contain either a screenshot, a diagram, or a wide interface panel. This keeps the page from becoming a flat grid of white cards. The footer returns to the cream canvas and closes the page with low-contrast, left-aligned link columns and a small legal line.

Vertical spacing is generous throughout. The larger section gaps sit around 8.25rem, while the hero reserves more space below the headline and action so the floating logo capsules have room to spread across the base of the panel. The layout never feels cramped; empty space is part of the composition.

## Visual language

CrowdReply mixes three visual moods: poster-like dark stages, bright proof cards, and small chip-based signal elements. The dark stages use a near-black field with soft rounded containers inside it, which gives the page a sense of depth without turning it into a dashboard. The bright sections use white cards and pale fills with thin borders, so the content stays easy to scan. The chip elements tie the system together: they are small, rounded, lightly bordered, and often carry either a label or a compact metric.

Rounded geometry is central. The hero shell uses a very large radius, the dark product screenshots often sit inside broad rounded rectangles, and the proof cards use smaller but still friendly corners. The shape language creates contrast between broad stage containers and the tighter card grid. Lines are sparse. Borders are hairline-thin and mostly there to separate cards from the canvas. Shadows, when present, are restrained enough to read as lift rather than depth.

Charts and infographic pieces bring in the accent palette. Blue arcs, gold bars, and cream blocks sit inside otherwise calm cards, so the data graphics feel like part of the page’s visual grammar rather than separate widgets. The orange action color appears in the hero button and in some section outlines, but it never becomes noisy. The result is a page that feels editorial, calm, and product-aware at the same time.

## Components

### Hero shell

- **Anatomy:** A large black rounded panel, centered headline, short supporting line, one orange CTA, and a row of floating rounded capsules and app badges along the bottom.
- **Surface:** `dark-surface` with `dark-ink` text and colored accents inside the illustration layer.
- **Typography:** `hero-display` for the main line, `lead` or `body` for the subline, `body-strong` for the CTA.
- **Shape:** The shell should keep the `hero-shell` radius and avoid small corner changes inside it.
- **Spacing:** The headline sits far above the lower illustration band, leaving open air for the floating badges.
- **Composition:** Keep the CTA directly under the supporting line; the illustration strip should stay lower and wider than the text block.

### Section chip

- **Anatomy:** A compact rounded pill with a single word such as a section label.
- **Surface:** White fill with a light border and muted text.
- **Typography:** `label`.
- **Shape:** Use `pill` rather than the smaller card radius so the label reads as a marker, not a card.
- **Visible states:** The chip stays visually quiet; the point is to frame the section title, not compete with it.

### Bento card

- **Anatomy:** Title, short body copy, and either a chart, logo, quote, or product screenshot.
- **Surface:** Usually white, sometimes `surface-subtle` or a very pale accent fill.
- **Typography:** `feature-display` for card headings and `body` for support copy.
- **Shape:** `card` or `panel`, depending on how prominent the card should feel.
- **Spacing:** Internal padding is roomy; the content should never feel pinned to the edge.
- **Composition:** Let the visual payload occupy the lower half or one side of the card while the copy remains compact above or beside it.

### Metric tile

- **Anatomy:** One large number or compact chart, a short label, and sometimes a logo.
- **Surface:** Pale blue, cream, peach, or gold fills with thin borders.
- **Typography:** `body-strong` for the main number and `label` or `fineprint` for the descriptor.
- **Shape:** Slightly softer corners than the white quote cards, so the tile reads as a proof object.
- **Visible states:** Use the accent fills to differentiate metrics; the site never makes these tiles look like buttons.

### Dark product stage

- **Anatomy:** Large title, short supporting line, a row of logos or icons, and a broad screenshot or diagram.
- **Surface:** `dark-surface` or `dark-surface-raised`, often with lighter internal panels and colored interface elements.
- **Typography:** `section-display` on the stage, with `body` or `lead` below.
- **Shape:** Big rounded outer shell, then smaller rounded internal cards.
- **Spacing:** The stage needs enough vertical room for the screenshot to breathe; keep the title far above the embedded interface.
- **Composition:** Center the headline and keep the product image wide. On the diagram version, the top icons fan outward and converge on a central brand node.

### Footer

- **Anatomy:** Brand mark, short tag line, small social buttons, a set of text links, and a thin legal line.
- **Surface:** `canvas`, not dark.
- **Typography:** `fineprint` and `utility`.
- **Shape:** Small icon buttons and tiny rounded badges; nothing in the footer should feel heavy.
- **Spacing:** Use modest group spacing and let the columns breathe.
- **Visible states:** The footer stays quiet and utility-driven. It should close the page, not restart the sales pitch.

## Responsive behavior

On narrower screens, the section chips should remain small and centered, and the headings should stack cleanly above the cards. The bento grids should collapse from multi-column layouts into one or two columns without changing the card language, and the dark stages should keep their strong roundness even when the screenshots shrink. The hero should keep its centered headline and CTA, while the illustration band can compress into a tighter lower cluster. The footer should fold into a single-column stack with the brand mark first and the legal line last.

## Practical implementation guidance

### Preserve

- Keep the orange action color as the only persistent call-to-action color.
- Preserve the contrast between the black hero shell and the bright card-based sections.
- Keep the card system simple: white, cream, blue, peach, and gold are enough.
- Retain the large-radius hero shell and the smaller 12px to 20px card corners.
- Keep headings centered in the light sections and compact in the dark stages.

### Avoid

- Avoid turning the whole site dark; darkness is a stage, not the default canvas.
- Avoid heavy shadows, glossy effects, and glass-like overlays.
- Avoid adding more accent colors than the existing orange, blue, cream, and gold family.
- Avoid dropping the body copy below 14px or widening the tracking on the strong headlines.
- Avoid thin, sharp corners on the proof cards; they should stay soft and friendly.

### Recommended build order

1. Set up the color tokens and the two-family type scale.
2. Build the black hero shell with its centered text and CTA.
3. Build the section chip and centered heading pattern.
4. Build the reusable bento card and metric tile.
5. Add the dark product stage and diagram-style stage.
6. Finish with the footer and the small utility icon treatment.

### Accessibility

- Keep the orange button readable against the black hero by preserving strong contrast and enough button padding.
- Give charts, logos, and screenshots descriptive alternative text.
- Keep focus styles visible on buttons, chips, and footer links.
- Do not rely on color alone to separate metric tiles; use labels, position, and shape as well.
- Preserve readable line length in the centered headings and avoid squeezing the 44px display copy into overly narrow columns.

## Scope note

This guide covers the desktop homepage story visible in the hero, testimonial grid, feature sections, dark product stages, and footer. Spacing and radii are expressed in rem from a 16px root and rounded to the nearest 0.125rem where needed. Mobile breakpoints, motion, hover states, exact icon assets, and interactive behavior are not included.
