# How grey.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/grey.co-design)

Last updated: 2026-08-03

## Captured pages

[![Grey homepage hero with an editorial portrait on a cool blue photographic field](https://pin.fontofweb.com/6719?format=jpg)](https://design.withfudge.com/share/pin-6719)

[Grey homepage hero with an editorial portrait on a cool blue photographic field](https://design.withfudge.com/share/pin-6719)

[![Mint virtual-card panel with a hand-held phone and floating service icons](https://pin.fontofweb.com/6721?format=jpg)](https://design.withfudge.com/share/pin-6721)

[Mint virtual-card panel with a hand-held phone and floating service icons](https://design.withfudge.com/share/pin-6721)

[![Dark account section with white display type, a phone image, and a supporting card grid](https://pin.fontofweb.com/6723?format=jpg)](https://design.withfudge.com/share/pin-6723)

[Dark account section with white display type, a phone image, and a supporting card grid](https://design.withfudge.com/share/pin-6723)

[![Customer testimonial in a large dark panel framed by white space](https://pin.fontofweb.com/6724?format=jpg)](https://design.withfudge.com/share/pin-6724)

[Customer testimonial in a large dark panel framed by white space](https://design.withfudge.com/share/pin-6724)

[![Near-black footer with an app-download callout, navigation columns, and legal copy](https://pin.fontofweb.com/6725?format=jpg)](https://design.withfudge.com/share/pin-6725)

[Near-black footer with an app-download callout, navigation columns, and legal copy](https://design.withfudge.com/share/pin-6725)

## Overview

Grey's website presents banking as an international lifestyle product rather than a conventional financial dashboard. Large portraits and product-in-hand photography establish the human context first; the interface then explains the service with oversized, tightly set headings and short blocks of supporting copy.

The page changes visual mode as the story progresses. The hero uses a cool blue photographic field, the product sections move through mint, peach, and lavender panels, and the lower page shifts into deep navy and near-black. Electric blue is the consistent action color across those modes. This alternation gives a long page rhythm without relying on dense separators or ornamental UI.

The qualities to preserve are:

- People-first photography with the product visible in use.
- Large Aeonik headlines with compact leading and slightly negative tracking.
- A single electric-blue action color across light, photographic, and dark sections.
- Generous, rounded product panels with one dominant message per panel.
- Strong changes in surface color to separate chapters of the page.
- Spacious layouts with restrained copy and prominent visual anchors.

## Colors

### Core interface colors

| token | value | role |
|---|---|---|
| `action` | `#2467E3` | Primary buttons, directional links, and small product accents |
| `ink` | `#1A1A1A` | Main text on light and pastel surfaces |
| `ink-soft` | `#363F52` | Supporting copy on light product panels |
| `canvas` | `#FFFFFF` | Page canvas and framing space between major panels |
| `surface-dark` | `#1B1F28` | Dark product storytelling sections and testimonial surfaces |
| `surface-deep` | `#010307` | Footer canvas |
| `on-dark` | `#FFFFFF` | Display text on photography and dark surfaces |
| `on-dark-soft` | `#D1D6E1` | Supporting text on dark surfaces |

### Product and supporting colors

| token | value | role |
|---|---|---|
| `surface-mint` | `#F0F8E5` | Virtual-card product panel base |
| `surface-peach` | `#FFF2E7` | Money-transfer product panel base |
| `category` | `#5E19B3` | Uppercase product-category labels |
| `footer-heading` | `#EBECF0` | Footer call-to-action heading |
| `footer-body` | `#C2C7CF` | Footer supporting copy |
| `footer-muted` | `#939AAA` | Secondary footer links and metadata |

Grey's pastel product panels use subtle gradients inside the same color family:

- Mint: `linear-gradient(140deg, rgb(240, 248, 229) 38%, rgb(226, 250, 192) 92%)`
- Peach: `linear-gradient(130deg, rgb(255, 242, 231) 10%, rgb(244, 216, 193) 74%)`
- Dark image transition: `linear-gradient(rgba(27, 31, 40, 0) 22%, rgba(27, 31, 40, 0.9) 43%, rgb(27, 31, 40) 52%)`

## Typography

Grey uses **Aeonik** throughout the homepage in Regular, Medium, and Bold weights. The font is credited to Cotype Foundry. Licensing for reuse should be confirmed separately.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Aeonik | 4.625rem | 700 | 1 | -0.02em | Homepage hero |
| `section-display` | Aeonik | 4rem | 700 | 1 | -0.016em | Dark product-section lead |
| `feature-display` | Aeonik | 3.125rem | 700 | 1 | -0.02em | Pastel feature-panel headings |
| `footer-display` | Aeonik | 3rem | 700 | 1 | 0 | App-download callout |
| `testimonial` | Aeonik | 2.5rem | 400 | 1.2 | 0 | Customer quotation |
| `card-heading` | Aeonik | 1.75rem | 500 | 1 | -0.018em | Dark feature cards |
| `lead` | Aeonik | 1.25rem | 400 | 1.6 | -0.0075em | Product-panel supporting copy |
| `hero-supporting` | Aeonik | 1.125rem | 400 | 1.6 | 0 | Hero supporting copy |
| `body` | Aeonik | 1rem | 400 | 1.5 | 0 | General explanatory text |
| `body-medium` | Aeonik | 1rem | 500 | 1.5 | 0 | Buttons and emphasized body copy |
| `category-label` | Aeonik | 1rem | 400 | 1 | 0.125em | Uppercase product labels |
| `navigation` | Aeonik | 0.875rem | 500 | 1.43 | 0 | Header navigation |
| `footer-copy` | Aeonik | 0.875rem | 500 | 1.71 | 0 | Footer links and supporting copy |

The hierarchy depends more on scale, weight, and compact leading than on multiple font families. Display copy is bold and nearly solid-set. Supporting copy opens up to a 1.5-1.6 line-height ratio. Category labels provide contrast through uppercase lettering and `0.125em` tracking rather than heavier weight.

## Layout

### Hero

The homepage opens as a single photographic stage. Navigation sits across the top of the image, while the message occupies the left half and a seated portrait anchors the right. The copy remains compact: one large heading, two short supporting lines, and one primary action. The photograph supplies both the background and the color atmosphere, so additional decoration is unnecessary.

### Product panels

The middle of the page uses two related layouts:

- A split composition with portrait photography on one side and a pastel product panel on the other.
- A wide pastel panel with copy on the left and a hand-held phone or product illustration on the right.

Feature panels use a `1.25rem` corner radius and a generous `4.5rem` desktop inset.

### Dark product stage

The page then shifts to `surface-dark`. A large text-and-product composition introduces the account, followed by a row of dark cards. Surface continuity replaces borders: cards are separated by spacing and subtle changes in imagery rather than bright outlines. A `7.5rem` vertical inset supports the large display hierarchy.

### Testimonial and footer

The testimonial is a large dark shape framed by white canvas. A portrait sits opposite a `2.5rem` quotation, with attribution kept small and quiet. Oversized curved cut-outs soften the otherwise rectangular panel.

The footer begins with a centered app-download message, then expands into a multi-column link directory and a legal block. It uses the deepest surface on the page and lowers typographic contrast as information becomes less prominent.

## Visual language

Grey combines four image modes:

- Editorial portraits that make the audience visible in the brand.
- Product-in-hand photography that connects the app to daily use.
- Phone cut-outs and floating service icons that explain capability quickly.
- Dark product-interface cards that introduce a more technical, controlled mood.

Color and composition do most of the decorative work. The pastel panels use gentle single-family gradients; the dark sections use photographic fades into `surface-dark`. Shadows are rare. The primary action has a compact blue outer-and-inset shadow, while most cards remain flat.

Shape is used at two scales. Product panels repeat moderate `1.25rem` corners, while major section transitions use very large curves and cut-outs. Avoid adding small rounded containers around every piece of content; the larger panels should remain the main structural shapes.

## Components

### Header

- **Anatomy:** White Grey mark, language selector, three central navigation groups, login link, outlined acquisition action.
- **Typography:** `navigation`.
- **Treatment:** Transparent over photography. The acquisition action uses a `2px` light border and `0.5rem` corners.
- **Composition:** Preserve the wide horizontal breathing room and keep header elements visually subordinate to the hero statement.

### Primary action

- **Fill:** `action`.
- **Text:** `on-dark` using `body-medium`.
- **Shape:** `0.5rem` radius with a compact `1rem` inset.
- **Depth:** `rgba(49, 112, 237, 0.18) 0 0.25rem 0.5rem, rgb(31, 91, 209) 0 -0.0625rem 0.5rem inset`.
- **Usage:** Use one primary action per major panel and keep `action` as its accent color.

### Feature panel

- **Anatomy:** Uppercase category label, large heading, one short paragraph, directional text link, product or lifestyle image.
- **Typography:** `category-label`, `feature-display`, `lead`, then a `1rem`-`1.125rem` action line.
- **Shape:** `1.25rem` panel radius; small floating items may use `1.375rem` corners or circular crops.
- **Variants:** Mint, peach, and lavender modes.
- **Composition:** Keep the text grouped on one side and give the product or lifestyle image the remaining visual weight.

### Dark product stage

- **Anatomy:** Large white statement, short explanation, blue action, phone image, supporting card grid.
- **Surface:** `surface-dark` with `on-dark` and `on-dark-soft` text.
- **Typography:** `section-display` for the lead and `card-heading` for the supporting cards.
- **Composition:** Let imagery overlap the stage boundary, but keep text inside a stable left-aligned column.

### Testimonial

- **Anatomy:** Portrait, large quotation, customer name and role, circular previous/next controls.
- **Typography:** `testimonial` for the quote; smaller body styles for attribution.
- **Surface:** `surface-dark` within a white frame.
- **Composition:** Keep the quotation prominent and the carousel controls outside its reading path.

### Footer

- **Anatomy:** App-download heading and badges, link columns, contact and social links, regulatory copy, Grey mark.
- **Surface:** `surface-deep`.
- **Typography:** `footer-display` and `footer-copy`.
- **Hierarchy:** App-download message first, navigation second, legal copy last.

## Responsive behavior

On smaller screens, preserve the narrative order: message, action, product image, then supporting details. Navigation collapse, portrait crops, panel stacking, type scaling, spacing changes, and footer columns require dedicated mobile specifications.

## Practical implementation guidance

### Preserve

- Build the typographic hierarchy first; the display scale is the clearest part of Grey's identity.
- Keep `action` as the only persistent interaction color.
- Alternate photographic, pastel, and dark modes to maintain the page's chapter-like rhythm.
- Use photography to show both people and the product, not as generic background decoration.
- Reserve the largest curves for sections and the `1.25rem` radius for product panels.

### Avoid

- Avoid one-off fractional spacing values; use the spacing tokens defined above.
- Keep `action` as the interaction blue throughout the system.
- Do not add shadows to every card; the system is mostly flat.
- Do not wrap every text block in a small rounded card.
- Do not add unverified mobile breakpoints, interaction states, or animation rules.

### Recommended build order

1. Establish Aeonik roles and the light/dark text pairs.
2. Build the shared header and primary action.
3. Recreate the hero's two-column photographic composition.
4. Build one reusable feature-panel structure with color and image-position variants.
5. Add the dark product stage and its supporting card grid.
6. Add the testimonial and footer.
7. Validate responsive behavior and interactive states against dedicated mobile and interaction specifications.

### Accessibility

- Retain a strong overlay wherever white copy sits on photography, and verify contrast against the final image crop.
- Give directional text links a non-color cue, such as Grey's paired arrow treatment.
- Provide useful alternative text for portraits and product-in-hand imagery.
- Keep visible keyboard focus styles on every interactive control.
- Preserve readable line lengths in the hero, testimonial, and legal copy when the layout narrows.

## Scope note

This guide covers Grey's desktop homepage: the hero, product sections, dark account section, testimonial, and footer. Type and spacing values use relative units rounded to a consistent `0.125rem` step. Mobile layouts, breakpoint values, exact container widths, interaction states, motion, the complete fallback font stack, and font licensing are not included.

## Colors

- `#2467e3`
- `#1a1a1a`
- `#363f52`
- `#ffffff`
- `#1b1f28`
- `#010307`
- `#ffffff`
- `#d1d6e1`
- `#f0f8e5`
- `#fff2e7`
- `#5e19b3`
- `#ebecf0`
- `#c2c7cf`
- `#939aaa`

## Typography used on grey.co

- **Aeonik** — weight 500 · size 14px
