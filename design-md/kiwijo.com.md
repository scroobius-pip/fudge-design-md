# How kiwijo.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/kiwijo.com-design)

Last updated: 2026-08-10

## Captured pages

[![Ticket-style testimonial cards hanging from a metal rod against an orange background, featuring numbered tickets with quotes and a green hiring card with dashed border](https://pin.fontofweb.com/8049?format=jpg)](https://design.withfudge.com/share/pin-8049)

[Ticket-style testimonial cards hanging from a metal rod against an orange background, featuring numbered tickets with quotes and a green hiring card with dashed border](https://design.withfudge.com/share/pin-8049)

[![Blog index page styled as a deli menu with dashed separators, black header bar, post listings with prices, and a green call-to-action button with barcode decoration](https://pin.fontofweb.com/8048?format=jpg)](https://design.withfudge.com/share/pin-8048)

[Blog index page styled as a deli menu with dashed separators, black header bar, post listings with prices, and a green call-to-action button with barcode decoration](https://design.withfudge.com/share/pin-8048)

[![Hero section with green profile card containing cartoon avatar, social icons, and nutrition-facts-style skills panel on an orange background with floating kiwi shapes](https://pin.fontofweb.com/8047?format=jpg)](https://design.withfudge.com/share/pin-8047)

[Hero section with green profile card containing cartoon avatar, social icons, and nutrition-facts-style skills panel on an orange background with floating kiwi shapes](https://design.withfudge.com/share/pin-8047)

## Overview

Kiwi Made Deli is a personal portfolio and blog for Kyuhee Jo, presented through the visual metaphor of a neighborhood deli. The design system treats every page surface as a physical artifact—tickets hang from rods, nutrition labels disclose skills, and blog posts appear on a menu board with prices. This tactile approach creates immediate personality while maintaining readable information hierarchy.

The visual identity centers on three core materials: a vibrant kiwi-orange background that dominates the canvas, a fresh green for primary actions and the hero profile card, and a warm cream used for paper-like surfaces. Thick dark borders, offset drop shadows, and dashed lines reinforce the handmade, slightly retro deli aesthetic. Typography pairs the chunky, rounded display face Titan One for headlines and buttons with the friendly sans-serif Fredoka for body text, while Jet Brains Mono handles technical labels and metadata with a typewriter-like precision.

## Colors

The palette draws directly from food and packaging: ripe fruit, butcher paper, and stamped ink. The system maintains high contrast between the warm orange field and dark typographic elements, with green serving as the primary action color.

| token | hex | use |
|---|---|---|
| kiwi-orange | #E87A35 | Primary page background, dominant canvas color |
| kiwi-green | #6CA632 | Primary actions, profile card background, CTA buttons |
| kiwi-cream | #F4EBE1 | Paper surfaces, ticket cards, menu backgrounds |
| kiwi-dark | #2A1F1A | Primary text, borders, shadows, header bars |
| kiwi-ink | #2A1F1A | Body text color (same as kiwi-dark) |
| kiwi-muted | #888888 | Secondary metadata, dates, tags |
| kiwi-surface | #FFFFFF | Clean panels, nutrition facts background |
| kiwi-accent-red | #D32F2F | Ticket numbers, emphasis, decorative stamps |
| kiwi-accent-blue | #1E3A8A | Date stamps, secondary accents |
| kiwi-warm-gray | #DCD3C8 | Subtle dividers, inactive states |

The orange background creates an energetic, approachable atmosphere that distinguishes the site from conventional portfolio templates. Dark borders at 2-4px thickness frame every interactive element and card, giving components a cut-paper or sticker-like quality. The green appears sparingly but decisively—reserved for the most important call-to-action moments. Cream surfaces provide rest for the eye when reading longer content. Shadows are consistently offset (never centered), casting down and right to suggest physical objects resting on the orange surface.

## Typography

Four font families create a clear hierarchy: Titan One for display and buttons, Fredoka for body and navigation, Jet Brains Mono for labels and metadata, and Inter for numerical data and tight captions. All families render with a rounded, approachable character that matches the site's friendly tone.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Titan One | 3.25rem | 400 | 1.1 | normal | Profile name, major headlines |
| section-display | Titan One | 2.375rem | 700 | 1.2 | normal | Section headers, blog titles |
| body | Fredoka | 1rem | 400 | 1.5 | normal | Paragraphs, descriptions |
| body-bold | Fredoka | 1rem | 700 | 1.5 | normal | Emphasized body text |
| label | Jet Brains Mono | 0.85rem | 400 | 1.4 | normal | Metadata, tags, captions |
| label-bold | Jet Brains Mono | 0.85rem | 800 | 1.4 | normal | Category headers, technical labels |
| navigation | Fredoka | 1rem | 700 | 1.1 | normal | Nav pills, menu items |
| button | Titan One | 1.25rem | 400 | 1.2 | 0.0625em | CTA buttons, action text |
| price | Inter | 2rem | 900 | 1 | -0.03125em | Menu prices, numerical display |
| caption | Inter | 0.6875rem | 600 | 1.6 | normal | Fine print, footnotes |

Titan One's heavy, rounded forms carry the deli branding with a vintage sign-painter quality. Fredoka's slightly softer geometry keeps body text readable without breaking the playful mood. Jet Brains Mono's technical appearance creates productive contrast when labeling skills or dates. Inter provides neutral, precise numerals for prices and statistics. Verify licensing for these families before production use.

## Layout

The layout system favors centered, contained compositions against the full-bleed orange background. Content lives in rounded cards with thick borders, creating discrete objects that float in the warm field.

**Page structure.** The hero section presents a split-profile card: a green left panel with avatar and social links, and a cream right panel with nutrition-facts-style skills data. Below, a horizontal navigation bar uses pill-shaped segments. The blog index reverses the pattern—cream background with a dark header bar and stacked post entries. A ticket carousel introduces horizontal scrolling for testimonials.

**Grid behavior.** Cards use fixed internal padding rather than fluid grids. The profile card maintains generous internal spacing (32px) with elements positioned deliberately: social icons stack vertically on the left, the avatar centers, and the nutrition panel occupies the right half. Blog posts stack vertically with consistent item padding and dashed horizontal separators.

**Container logic.** Maximum content width appears around 800-900px for text-heavy sections, with cards breaking out slightly wider. The ticket carousel extends beyond the viewport, suggesting horizontal overflow. Margins of 40px (2.5rem) on container sides provide breathing room against the orange.

**Z-index and layering.** Shadows create clear elevation: profile cards sit highest with 6px offset shadows, buttons at 4px, and tickets at 10px blur with inset highlights suggesting glossy paper. Navigation pills sit flush with subtle borders.

## Visual language

**Borders and outlines.** Every significant element carries a visible border—never relying on subtle box-shadow alone. Borders range from 2px (tickets, nutrition panels) to 3px (navigation pills) to 4px (profile card, primary buttons). This consistent heaviness unifies the tactile metaphor.

**Shadows and depth.** Drop shadows are uniformly offset to the bottom-right, never diffuse or ambient. The profile card uses `rgba(0, 0, 0, 0.2) 6px 6px 0px 0px`; buttons use `4px 4px`. Tickets combine an outer shadow with an inset white highlight, creating laminated-paper depth.

**Patterns and textures.** Dashed lines appear as section dividers and decorative rules, mimicking tear-off perforations. A barcode graphic serves as a decorative footer element. The orange background occasionally hosts subtle floating shapes—kiwi slices and fruit forms that drift at low opacity.

**Iconography and marks.** Social icons use simple, high-contrast circles with platform logos. Date stamps appear as tilted rectangular badges with blue borders, resembling postal marks or freshness labels. The "100% DEV" and "JHU '23" badges use circular forms with thick borders.

**Decorative elements.** The ticket carousel includes a metal rod with hanging clips, extending the physical metaphor into the interaction layer. Small stars and sparkles surround the avatar, adding whimsy without clutter.

## Components

### Profile Card

The signature hero component presents the site owner as a packaged product.

- **Anatomy:** Two-panel card with green left side and cream right side. Left: circular avatar, stacked social icons, name display, role badge. Right: ingredients list, allergy advice banner, nutrition facts table, contact button, barcode.
- **Surface:** Left panel uses `kiwi-green` background; right panel uses `kiwi-surface` with `kiwi-dark` 2px border.
- **Typography:** Name uses `hero-display` in cream; role uses `section-display` in orange; body uses `body` in dark.
- **Shape:** 20px outer radius with 4px dark border. Offset shadow 6px by 6px.
- **Spacing:** 32px internal padding. Social icons spaced 8px vertically. Nutrition table rows separated by thin rules.
- **Composition:** Asymmetric split roughly 45/55. Avatar centered vertically on left. Social icons aligned left of avatar.

### Navigation Pills

Horizontal menu bar with segmented pill buttons.

- **Anatomy:** Container bar with rounded rectangle pills. Active pill filled green; inactive pills white with dark borders.
- **Surface:** Container uses `kiwi-surface` with 3px `kiwi-dark` border. Active pill uses `kiwi-green` background.
- **Typography:** `navigation` token, centered within each pill.
- **Shape:** 999px radius for full pill appearance. 3px border width.
- **Spacing:** Pills separated by minimal gap; internal padding approximately 10px vertical, 24px horizontal.
- **Composition:** Centered horizontally above profile card. Equal visual weight across all items.

### Ticket Card

Testimonial display resembling numbered deli tickets.

- **Anatomy:** Rectangular card with top perforation, ticket number in red, name field with dotted leader, quote box, date stamp badge.
- **Surface:** `kiwi-cream` background with 2px `kiwi-dark` border. Inset white highlight shadow.
- **Typography:** Ticket number uses `section-display` in `kiwi-accent-red`. Name uses `body-bold`. Quote uses `label`. Date stamp uses `label` in `kiwi-accent-blue`.
- **Shape:** Zero border radius for paper edge. Top edge shows perforation dashes.
- **Spacing:** 20px horizontal padding, 25px top padding, variable bottom.
- **Composition:** Cards hang from visible metal rod with clip graphics. Horizontal scroll for multiple tickets.

### Blog Menu Item

List entry styled as a menu line item with price.

- **Anatomy:** Title row with post name and price. Subtitle description in italic. Date and tag metadata below. Dashed separator above.
- **Surface:** Transparent over cream background. No card border—relies on section container.
- **Typography:** Title uses `body-bold` in dark. Price uses `price` token right-aligned. Description uses `body` in `kiwi-accent-red` italic. Metadata uses `caption` in `kiwi-muted`.
- **Shape:** Full-width with dashed 2px top border in `kiwi-warm-gray`.
- **Spacing:** 20px vertical padding per item. Title and description stacked with 4px gap.
- **Composition:** Price aligned to right margin. Tags separated by commas with minimal spacing.

### CTA Button

Primary action with heavy shadow and bold type.

- **Anatomy:** Rounded rectangle with text and optional arrow icon.
- **Surface:** `kiwi-green` background, 4px `kiwi-dark` border. Shadow offset 4px by 4px in dark at 20% opacity.
- **Typography:** `button` token, white or cream text, letter-spaced.
- **Shape:** 12px border radius.
- **Spacing:** 12px vertical, 20px horizontal padding.
- **States:** Active/pressed state likely shifts shadow to inset or removes offset.

### Nutrition Facts Panel

Skills and experience displayed as food nutrition label.

- **Anatomy:** Header with bold title, serving size info, horizontal rules, nutrient rows with percentages, fine print disclaimer.
- **Surface:** White background, 2px dark border, no shadow.
- **Typography:** Title uses `section-display`. Rows use `body` and `body-bold`. Percentages right-aligned.
- **Shape:** 2px small radius corners.
- **Spacing:** Tight internal padding with generous row separation via rules.

## Responsive behavior

The design appears optimized for desktop viewing with its elaborate card compositions and horizontal ticket carousel. Implementation should consider:

- **Profile card:** Stack vertically on narrow viewports, moving nutrition panel below avatar. Reduce border thickness to 2px on very small screens to preserve space.
- **Navigation pills:** Convert to horizontal scroll or hamburger menu below 600px. Maintain pill styling in overflow scroll.
- **Ticket carousel:** Enable touch swipe with visible scroll indicators. Reduce ticket width to single-column full width on mobile.
- **Blog menu:** Allow price to drop below title on narrow screens. Maintain dashed separators.
- **Typography:** Scale `hero-display` down to 2.5rem and `section-display` to 1.75rem on mobile. Maintain `button` size for tap targets.

No mobile-specific layouts are visible in the source material; these recommendations preserve the visual character while improving usability.

## Practical implementation guidance

### Preserve
- The thick border aesthetic—2px minimum for any framed element, 4px for primary actions and hero card.
- Offset shadows cast down-right only; never center shadows or use large blur without offset.
- The orange background as default canvas; only cream surfaces for content areas.
- Titan One for all display and button text to maintain the deli signage character.
- Dashed lines for dividers and decorative rules, never solid hairlines between sections.

### Avoid
- Centered or diffuse box-shadows that break the physical object metaphor.
- Thin 1px borders except for internal table rules within nutrition panels.
- Pure white backgrounds outside the nutrition label context; use cream for paper surfaces.
- Rounded corners on ticket cards—these should remain rectangular with perforated tops.
- Mixing shadow directions; keep all offsets consistent.

### Recommended build order
1. Establish orange background and dark text defaults.
2. Implement Titan One and Fredoka font loading with appropriate weights.
3. Build profile card with split-panel layout and 4px border/6px shadow.
4. Create navigation pill component with active/inactive states.
5. Implement blog menu list with dashed separators and price alignment.
6. Add ticket carousel with hanging rod visual and horizontal scroll.
7. Polish with decorative elements: floating fruit shapes, barcode graphics, date stamps.

### Accessibility
- Ensure 4.5:1 contrast for all body text; the dark brown on cream and white on green meet this, but verify orange-on-cream combinations.
- Add `aria-label` to social icon links that currently show only platform logos.
- Implement keyboard navigation for the ticket carousel with visible focus indicators.
- Provide `prefers-reduced-motion` alternatives for any horizontal scroll animations.
- Consider dark mode as an inversion: dark background with cream text, though this would significantly alter the brand character.

## Scope note

This guide covers the homepage hero, blog index, and ticket testimonial sections visible on kiwijo.com. The deli-themed visual system is well-defined for these surfaces, but interior blog post pages, project detail views, and any contact form interactions are not represented in the available material. Motion design, loading states, and mobile-specific layouts would require additional exploration. Measurements are drawn from the exact values provided.
