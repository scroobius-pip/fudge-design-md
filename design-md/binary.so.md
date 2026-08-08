# How binary.so is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/binary.so-design)

Last updated: 2026-08-08

## Captured pages

[![Minimal hero with dark CTA, trust logos, and a product card on the right](https://pin.fontofweb.com/7681?format=jpg)](https://design.withfudge.com/share/pin-7681)

[Minimal hero with dark CTA, trust logos, and a product card on the right](https://design.withfudge.com/share/pin-7681)

[![Wide feature section with video, AI assistant, and white-space rhythm](https://pin.fontofweb.com/7682?format=jpg)](https://design.withfudge.com/share/pin-7682)

[Wide feature section with video, AI assistant, and white-space rhythm](https://design.withfudge.com/share/pin-7682)

[![Centered pricing stage with four plan cards and a raised Business plan](https://pin.fontofweb.com/7683?format=jpg)](https://design.withfudge.com/share/pin-7683)

[Centered pricing stage with four plan cards and a raised Business plan](https://design.withfudge.com/share/pin-7683)

## Overview

Binary presents hiring software as a calm, compact marketing system. The page relies on a pale canvas, dark navy emphasis, and crisp white cards rather than loud illustration or dense dashboard styling. The visual tone is measured and efficient: one strong headline, one dark primary action, and a small set of supporting modules that explain the product in plain language.

The strongest pattern is contrast through restraint. Large headings carry the message, while the interface around them stays quiet with thin borders, subtle shadows, and generous gutters. Plan selection is easy to scan because the layout keeps each option in its own card and uses a single darker card to mark the featured tier. Feature sections repeat the same discipline: short copy on one side, a clean product mockup on the other, and very little extra decoration.

## Colors

Binary uses a tightly controlled monochrome palette. The page feels mostly white and slate, with deep navy reserved for the most important control state and the strongest emphasis. That makes the action color feel serious rather than playful, and it keeps the product looking like a dependable B2B tool instead of a consumer brand with decorative color noise. The lighter slates carry the message hierarchy in body copy, labels, and UI metadata, while the borders stay pale enough to divide cards without drawing attention away from the content.

| token | value | role | use |
|---|---|---|---|
| `action` | `#0F172A` | deep navy emphasis | Primary buttons, the selected billing state, and the strongest dark fills |
| `ink` | `#000000` | strongest text | Main hero headlines and the biggest price figures |
| `body` | `#334155` | primary body text | Feature descriptions, plan details, and supporting copy |
| `title` | `#3C424C` | section and card titles | Card headings and compact explanatory labels |
| `navigation` | `#475569` | interface text | Header links, toggle text, and top-level UI labels |
| `secondary` | `#586A84` | softer supporting text | Secondary lines, notes, and quieter explanatory text |
| `muted` | `#64748B` | quiet metadata | List items, plan notes, and small captions |
| `border-soft` | `#BDC1C8` | soft divider | Faint separators and the least prominent card edges |
| `border` | `#CBD5E1` | standard divider | Card outlines, plan boundaries, and control borders |
| `canvas` | `#F8FAFC` | page background | The outer page field behind cards and sections |
| `surface` | `#FFFFFF` | card surface | Pricing cards, product panels, toggles, and button text on dark fills |

The relationship between the colors is simple: almost everything sits on white or near-white, then the action color appears only where the page needs a firm decision. The palette never tries to do too much at once. That keeps the content legible and makes the featured plan and primary action feel intentional rather than ornamental.

## Typography

Binary's type system is built from two families: Basier Square for display work and System for the interface layer. Basier Square carries the big statements and price figures, while System handles navigation, labels, body copy, and small UI notes. The hierarchy depends on size, weight, and compact leading more than on many stylistic shifts. That gives the page a crisp SaaS voice that stays readable even when sections are spacious and minimal.

Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| `hero-display` | Basier Square | 4rem | 600 | 0.95 | -0.04em | Main homepage and pricing headlines |
| `section-display` | Basier Square | 3.25rem | 600 | 1 | -0.03em | Feature section titles and page subheads |
| `price-display` | Basier Square | 3.5rem | 600 | 1 | -0.03em | Large plan prices such as the featured tier |
| `card-title` | Basier Square | 1.75rem | 500 | 1.1 | -0.02em | Plan names and feature block headings |
| `body` | System | 1rem | 400 | 1.5 | 0em | Paragraph copy and plan detail text |
| `body-medium` | System | 1rem | 500 | 1.5 | 0em | Buttons, emphasized body lines, and control text |
| `navigation` | System | 1rem | 500 | 1.35 | 0em | Header links and top-level UI labels |
| `label` | System | 0.75rem | 500 | 1.3 | 0.02em | Micro labels, toggle text, and small notes |
| `legal` | System | 0.75rem | 500 | 1.4 | 0em | Fine print and the quietest supporting text |

The large headlines use compact tracking so they read as confident statements rather than airy editorial copy. The body copy opens up enough to breathe, but not so much that the cards feel loose. The pricing figures are especially important: they sit inside the same display family as the major headings, which makes the numbers feel like a central part of the message rather than a separate utility element.

## Layout

The page is built around a centered desktop column with very generous side space. On the widest views, the content sits far from the edges, which makes the whole page feel calm and premium. The main rhythm is vertical and chapter-like: a hero, then a feature section, then a pricing stage. Each block has enough breathing room to stand on its own, and the page never tries to crowd multiple stories into one band.

The hero uses a two-column composition. The left side carries the headline, short supporting lines, and a dark filled call to action. The right side carries a product card that looks like a stack of documents or a concise application panel. A small trust row sits below the message, keeping the social proof close to the main claim without interrupting the open spacing.

The feature section is more editorial. A text column sits beside product mockups, and the mockups are framed by soft color fields that make them feel like product demonstrations rather than raw screenshots. The images are placed with clear padding around them so they read as separate modules. The blocks are stacked with wide vertical gaps, which prevents the page from feeling like a long list of benefits.

The pricing stage changes the layout rhythm but keeps the same discipline. A centered headline sits above a segmented billing switch and a four-card plan grid. Each plan occupies its own column, while the featured plan lifts above the others and gets a darker button. That raised middle card creates a clear focus point without breaking the overall symmetry. Thin borders and small dividers keep the cards related, while the white canvas around the grid stops the section from feeling heavy.

Overall, the layout depends on wide margins, measured card widths, and a very clear alignment system. There is no visual clutter to hide weak structure. The space itself does most of the work.

## Visual language

Binary's visual language is disciplined and flat, with softness added through spacing rather than decoration. The cards are lightly rounded, the borders are pale, and the shadows stay subtle enough to suggest elevation without creating a glossy look. The page avoids gradients, vivid accent color, and busy surface treatments. Instead, it uses quiet tonal shifts and a single dark decision color to guide the eye.

The most visible state change is the selected button or featured plan. Those elements switch to the deep navy fill and white text, which makes them feel chosen without needing animation or heavy chrome. The rest of the interface stays light, which keeps the accent legible. That same contrast is what makes the featured pricing card stand out: it rises above the surrounding cards, but it still belongs to the same system because the border, radius, and typography stay consistent.

The product imagery also follows the same rule. Mockups sit inside clean white frames or soft tinted panels, and those frames are large enough to give the image room. Nothing is boxed too tightly. Checkmarks, small info icons, and compact list lines do the explanatory work, while the rest of the page stays visually quiet.

The result is a system that feels straightforward, serious, and easy to scan. It does not rely on ornament to create trust. It builds trust through spacing, hierarchy, and a very limited palette.

## Components

### Header

- **Anatomy:** Small black square mark, text links, and a dark primary action on the right.
- **Typography:** Use `navigation` for the links so the top row stays present but not loud.
- **Surface:** The header sits on the same pale canvas as the rest of the page.
- **Shape:** The primary action uses the smaller control radius, which keeps it crisp instead of pill-like.
- **Composition:** Keep the logo compact and the links evenly spaced so the hero remains the focus.

### Primary action

- **Surface:** `action` fill with white text.
- **Typography:** `body-medium` gives the button enough weight without making it look oversized.
- **Shape:** The control radius keeps the button visibly soft but still sharp enough for a SaaS product.
- **Spacing:** The button feels compact; it should not sprawl into a large capsule.
- **Visible state:** The dark fill is the page's strongest interaction cue, so reserve it for the main decision point.

### Billing toggle

- **Anatomy:** Two adjacent pills inside a pale container.
- **Surface:** The unselected side remains white, while the selected side switches to `action`.
- **Typography:** Use `navigation` so the labels read like controls rather than headlines.
- **Shape:** Small rounded corners and a thin border keep the switch tidy.
- **Visible state:** The active billing mode must be obvious without extra icons or motion.

### Pricing card

- **Anatomy:** Plan name, large price, call to action, then a short feature list.
- **Surface:** White card with a pale border and a clean internal stack.
- **Typography:** Plan names use `card-title`; prices use `price-display`; details fall back to `body`.
- **Spacing:** Keep the interior padding generous so the price can breathe.
- **Visible state:** The featured plan sits higher and uses a darker button, but it does not need a different visual language.

### Feature panel

- **Anatomy:** Short heading, one or two lines of supporting copy, and a product mockup or screenshot.
- **Typography:** `card-title` for the heading and `body` for the explanation.
- **Surface:** Mostly white, with soft tinted framing around the image area.
- **Shape:** Moderate rounding keeps the module aligned with the pricing cards.
- **Composition:** Leave enough empty space around the image so the panel reads as a polished marketing block rather than a dense data card.

### Trust row and utility chrome

- **Anatomy:** Short trust sentence, a row of partner logos, and a small floating chat control.
- **Typography:** Keep the trust sentence in the body or label range so it stays secondary.
- **Surface:** No heavy panel is needed; the logos work best directly on the canvas.
- **Visible state:** The chat control stays small and circular, acting as a quiet utility rather than a primary navigation target.
- **Composition:** This row should sit below the hero message and above the next content block so it supports, rather than interrupts, the main claim.

## Responsive behavior

On narrower screens, the page should keep the same reading order: headline, action, supporting copy, then product image or card. The pricing stage should collapse into a single-column stack so each plan can still be scanned independently. The featured plan should remain close to the other options so the comparison stays easy. The feature sections should also stack vertically, with the text above the mockup or image. That keeps the page readable without forcing side-by-side modules into cramped widths.

The type scale should step down carefully, not abruptly. The hero should stay bold and compact, but the line lengths must shorten so the headline does not feel clipped. The large price figures can stay prominent, but the internal padding around them should shrink so the cards do not feel oversized on smaller viewports. Borders, corner radii, and the dark action color should remain unchanged so the system still feels like the same product at every width.

## Practical implementation guidance

### Preserve

- Keep the page mostly white and let the deep navy action color do the decision-making.
- Preserve the strong headline scale and the wide vertical rhythm between sections.
- Keep borders thin and pale so the cards feel separated without becoming heavy.
- Retain the featured pricing card as the clearest emphasis point.
- Keep imagery inside generous white or softly tinted frames.

### Avoid

- Avoid bright accent colors or decorative gradients that compete with the dark action fill.
- Avoid oversized pill shapes on buttons and toggles.
- Avoid dense feature lists with tight line spacing.
- Avoid heavy shadows that make the cards feel like app windows instead of marketing surfaces.
- Avoid shrinking the gutters so much that the page loses its calm center.

### Recommended build order

1. Set the canvas, surface, and border colors.
2. Build the type ladder with the display family first.
3. Add the header and primary action.
4. Recreate the hero with its two-column structure.
5. Build the billing toggle and the four-card pricing grid.
6. Add the feature section modules and trust row.
7. Tune spacing, rounding, and selected-state emphasis together so the page feels consistent.

### Accessibility

- Keep the contrast strong on all slate copy against the white background.
- Make the selected billing state readable without relying on color alone.
- Ensure the dark action button has enough contrast for its text.
- Keep interactive elements large enough to support easy tapping.
- Provide visible focus treatment for the header links, toggle pills, and action buttons.

## Scope note

This guide covers the desktop marketing homepage shown in the supplied views: the hero, feature section, trust row, pricing stage, and floating utility control. Mobile rearrangement, hover and focus styling, motion, and full interaction states are not shown here. The spacing scale follows a 4px step.
