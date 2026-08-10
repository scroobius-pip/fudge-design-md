# How coderabbit.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/coderabbit.ai-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ section with dark background, accordion items with teal active titles and white body text, plus and minus toggle icons](https://pin.fontofweb.com/4991?format=jpg)](https://design.withfudge.com/share/pin-4991)

[FAQ section with dark background, accordion items with teal active titles and white body text, plus and minus toggle icons](https://design.withfudge.com/share/pin-4991)

[![Open source CTA banner with dark surface, large white and teal headline, orange pill button, and colorful gradient geometric shapes](https://pin.fontofweb.com/4990?format=jpg)](https://design.withfudge.com/share/pin-4990)

[Open source CTA banner with dark surface, large white and teal headline, orange pill button, and colorful gradient geometric shapes](https://design.withfudge.com/share/pin-4990)

[![Four-column pricing grid with Free, Lite, Pro, and Enterprise tiers, orange accent borders on Pro, checkmark feature lists](https://pin.fontofweb.com/4989?format=jpg)](https://design.withfudge.com/share/pin-4989)

[Four-column pricing grid with Free, Lite, Pro, and Enterprise tiers, orange accent borders on Pro, checkmark feature lists](https://design.withfudge.com/share/pin-4989)

[![Pricing hero with dark rounded panel, purple PRICING label badge, large white headline, and abstract colorful geometric illustration](https://pin.fontofweb.com/4988?format=jpg)](https://design.withfudge.com/share/pin-4988)

[Pricing hero with dark rounded panel, purple PRICING label badge, large white headline, and abstract colorful geometric illustration](https://design.withfudge.com/share/pin-4988)

## Overview

CodeRabbit's design system is a dark-mode-first SaaS visual language built for developer tools and AI-powered code review services. The system establishes immediate technical credibility through a near-black canvas, high-contrast white typography, and disciplined use of warm orange and cool teal accents. Every surface feels intentional: content lives on layered dark grays that recede behind the information, while interactive elements announce themselves through color and shape rather than decoration.

The personality balances playful technicality with enterprise seriousness. Gradient geometric illustrations—soft circles, diamonds, and abstract clusters in coral, teal, lavender, and peach—appear in hero sections and promotional banners, providing visual relief without undermining the product's professional positioning. Typography is split between Scandia Web for all display and UI chrome, and Work Sans for longer reading passages, creating clear hierarchy through family contrast alone. Buttons are consistently pill-shaped, cards use generous rounding, and spacing is expansive, letting each section breathe on the dark canvas. The overall effect is a system that feels premium, modern, and unmistakably built for technical audiences who value clarity over ornament.

## Colors

The color system is built on a dark-mode foundation with a warm accent palette that avoids the cold sterility of typical developer tools. All colors serve specific semantic roles across marketing and product surfaces.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, deepest layer |
| surface | `#1a1a1a` | Card backgrounds, accordion items, secondary panels |
| surface-elevated | `#242424` | Recommended pricing tier, elevated cards |
| ink | `#ffffff` | Primary text, headings, button labels |
| ink-muted | `#a3a3a3` | Secondary text, pricing subdetails, feature descriptions |
| action | `#ff5722` | Primary buttons, recommended borders, CTA highlights |
| action-hover | `#ff7043` | Button hover states, interactive accent emphasis |
| accent-teal | `#26c6da` | FAQ active titles, code-related highlights, secondary CTAs |
| accent-purple | `#9c27b0` | Section badges, category labels |
| border | `#333333` | Card outlines, dividers, inactive accordion borders |
| border-accent | `#ff5722` | Recommended tier highlight borders |

The dark canvas creates inherent contrast with white typography, eliminating the need for heavy shadows or elevation tricks. Orange (`action`) carries the primary conversion energy—used for "Get Started," "Get a free trial," and recommended plan highlights. Teal (`accent-teal`) serves a secondary interactive role, appearing in FAQ expanded states and code-adjacent contexts where it reads as technical rather than commercial. Purple (`accent-purple`) is reserved for categorical labels like the "PRICING" badge, creating a third accent dimension without competing with the primary action color. Muted gray (`ink-muted`) handles all supporting text, keeping the hierarchy clean. The gradient illustrations in marketing imagery pull from this same palette—coral, peach, teal, lavender—so photography and UI feel related rather than arbitrary.

## Typography

Two families create the typographic system: Scandia Web for display and interface elements, and Work Sans for body reading. Scandia Web is a geometric sans with confident, slightly squared letterforms that feel contemporary and technical without being cold. Work Sans provides a more neutral, open reading experience for longer passages.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Scandia Web | 3.5rem | 700 | 1.1 | -0.02em | Page headlines, pricing hero |
| section-display | Scandia Web | 2.5rem | 700 | 1.15 | -0.01em | Section headings, FAQ titles |
| body-large | Work Sans | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, descriptions |
| body | Work Sans | 1rem | 400 | 1.6 | 0 | Feature lists, FAQ answers, details |
| label | Scandia Web | 0.75rem | 500 | 1 | 0.05em | Badges, uppercase labels, small UI |
| navigation | Scandia Web | 0.875rem | 500 | 1 | 0 | Nav items, buttons, tab labels |

Display sizes use tight negative tracking for a compact, confident presence. The hero display at 3.5rem carries pricing page headlines and major CTAs with substantial visual weight. Section display at 2.5rem handles secondary headings and the FAQ section title. Body text stays readable at 1rem with generous 1.6 line height, while body-large at 1.25rem introduces promotional paragraphs. Labels are small, tracked out, and always uppercase in practice for badges like "PRICING" and "Recommended." Navigation and button text share the same 0.875rem size for consistency across interactive elements.

Scandia Web is designed by Eric Olson of Process Type Foundry. Work Sans has no attributed designer in the available records. Verify licensing for these families before production use.

## Layout

The layout system favors centered, contained compositions with generous vertical rhythm. Sections stack with substantial breathing room, typically 6rem between major areas. Content max-widths create comfortable reading lines while allowing dark canvas to extend to viewport edges.

Page structure follows a predictable pattern: full-width dark canvas with an inner content container. The pricing page demonstrates this clearly—a hero section with rounded dark panel containing headline and illustration, followed by a four-column pricing grid, then promotional banners, then FAQ. Each section is self-contained with internal padding rather than relying on global dividers.

The pricing grid uses four equal columns at desktop, with the Pro column elevated through border color and a "Recommended" badge that breaks the top edge. Cards within the grid share uniform internal padding and vertical rhythm: tier name, description, price, billing note, CTA button, then feature list. This consistency allows users to scan across tiers efficiently.

Spacing is built on a 0.25rem base unit. Practical values include: 1rem for tight internal gaps, 1.5rem for related element groups, 2rem for card padding, and 6rem for section separation. Cards and panels use 1rem to 1.5rem border radius, with buttons and badges as full pills. The rounded aesthetic is consistent—almost no sharp corners appear in the interface, softening the technical darkness with approachable geometry.

Responsive behavior should collapse the four-column pricing to two columns then stacked single column, maintaining card internal structure. The FAQ accordion shifts from a two-column layout (title left, items right) to stacked full-width on narrower viewports.

## Visual language

The visual language distinguishes CodeRabbit through three elements: absolute darkness as default, warm gradient geometry as illustration, and pill-shaped interactivity throughout.

The dark canvas is not merely a theme—it is the foundation. Every element assumes black surroundings, and the few light surfaces (gradient illustrations, occasional white text on colored shapes) exist as deliberate exceptions. This creates a cinematic quality where content appears to float in space.

Gradient geometric illustrations appear in hero sections and promotional areas. These feature soft-edged circles, diamonds, and abstract clusters with mesh gradients in coral, peach, teal, and lavender. The shapes have a grainy, almost tactile texture that contrasts with the smooth digital precision of the UI. They sit behind or beside content without competing, adding personality that prevents the dark interface from feeling generic.

Pill shapes unify all interactive elements. Every button is a full pill with 9999px radius. Badges like "PRICING" and "Recommended" follow the same shape language. Even accordion items use substantial rounding. This creates a friendly, approachable counterbalance to the dark severity of the canvas.

Checkmarks in feature lists use a teal-tinted circle with white check, reinforcing the accent color in micro-interactions. The "Recommended" badge on the Pro tier uses a gradient background from orange to pink, directly connecting to the illustration palette and making the recommendation feel celebratory rather than merely functional.

## Components

### Pricing Card

The pricing card is the system's most complex visible component, appearing in four variants (Free, Lite, Pro, Enterprise).

**Anatomy:** Tier name in Scandia Web bold, description in Work Sans muted, large price in Scandia Web bold, billing note in Work Sans muted, CTA button, then feature list with teal checkmark icons.

**Surface:** Default cards use `surface` background with `border` 1px outline. The Pro recommended variant uses `surface-elevated` with `border-accent` 2px outline and a "Recommended" badge that sits above the card top edge.

**Typography:** Tier name uses `section-display` at smaller scale (approximately 1.25rem). Price uses `hero-display` scale (approximately 2.5rem). Description and billing use `body` with `ink-muted`. Features use `body`.

**Shape:** `rounded.card` (1rem) with consistent internal padding of 2rem.

**Spacing:** Vertical stack with 1rem between major elements, 0.5rem between price and billing note, 1.5rem between button and feature list.

**Composition:** Cards align tops in grid. The Pro card's badge breaks upward, creating visual priority without disrupting grid alignment.

**Variants:** Free (outlined, muted CTA), Lite (outlined, primary CTA), Pro (elevated, accent border, primary CTA, badge), Enterprise (outlined, primary CTA, "Talk to us" price replacement).

### Primary Button

**Anatomy:** Pill-shaped container with label text and optional arrow icon.

**Surface:** `action` background with `ink` text. No border.

**Typography:** `navigation` token—Scandia Web 0.875rem weight 500.

**Shape:** Full pill (`rounded.button`).

**Spacing:** 1rem vertical padding, 2rem horizontal padding. Icon offset with 0.5rem gap.

**States:** The arrow icon suggests hover movement. Implementation should add subtle rightward icon translation on hover.

### Accordion Item

**Anatomy:** Question title row with toggle icon, expandable answer area.

**Surface:** `surface` background with `border` 1px outline. Expanded state reveals answer with additional vertical space.

**Typography:** Collapsed title uses `body` weight 500 in `ink`. Expanded active title shifts to `accent-teal`. Answer uses `body` in `ink`.

**Shape:** `rounded.card` (1rem).

**Spacing:** 1.5rem internal padding. Title row is single-line with icon right-aligned. Answer receives 1rem top margin when expanded.

**Composition:** Items stack vertically with 1rem gap. In the two-column FAQ layout, items occupy right column while section title anchors left.

**States:** Collapsed (plus icon, white title), expanded (minus icon, teal title, visible answer).

### Section Badge

**Anatomy:** Small pill containing uppercase label text.

**Surface:** `accent-purple` background with `ink` text.

**Typography:** `label` token—Scandia Web 0.75rem weight 500, uppercase, tracked.

**Shape:** Full pill with generous horizontal padding.

**Spacing:** 0.5rem vertical, 1rem horizontal padding.

### Promotional Banner

**Anatomy:** Large rounded panel with headline, subcopy, CTA button, and decorative illustration.

**Surface:** `surface` background with `rounded.panel` (1.5rem). Illustration sits partially outside panel bounds.

**Typography:** Headline uses `hero-display` with `ink` and inline `accent-teal` for emphasized words. Subcopy uses `body-large`. CTA uses primary button style.

**Composition:** Left-aligned text content with right-side illustration. Illustration features gradient geometric shapes that bleed beyond panel edges.

## Responsive behavior

The supplied images show desktop layouts exclusively. Based on visible structure, recommended responsive adaptations include:

- The four-column pricing grid should collapse to two columns on tablet, then single column on mobile, with Pro card maintaining its elevated styling and badge position.
- The FAQ two-column layout (section title left, accordion right) should stack to single column on mobile, with title above items.
- Promotional banner illustrations may scale down or hide on narrow viewports, preserving text readability.
- Card internal padding should reduce from 2rem to 1.5rem on mobile to maintain proportional spacing.
- Hero display sizes should scale down to 2.5rem on tablet and 2rem on mobile to prevent overflow.

## Practical implementation guidance

### Preserve
- The absolute black canvas as default background—this is non-negotiable to the system's identity.
- Pill-shaped buttons and badges throughout; sharp-cornered buttons would break the friendly technical personality.
- The two-family typographic split: Scandia Web for display and UI, Work Sans for body reading.
- Teal checkmarks in feature lists; this small detail reinforces brand color at micro scale.
- Gradient geometric illustration style with grain texture for marketing imagery.

### Avoid
- Light mode implementations without complete color remapping; the system is designed dark-first.
- Additional accent colors beyond orange, teal, and purple; the palette is intentionally narrow.
- Sharp corners on cards or buttons; the rounded language is consistent across all components.
- Body text in Scandia Web; it is optimized for display sizes and UI labels, not extended reading.
- Shadows as primary elevation strategy; rely on border color and background shifts instead.

### Recommended Build Order
1. Establish canvas, surface, and ink color tokens with proper contrast ratios.
2. Implement Scandia Web and Work Sans with complete weight loading.
3. Build the pill button component as the foundational interactive element.
4. Create pricing card with all four variants, ensuring recommended state is visually distinct.
5. Implement accordion with expand/collapse states and color transition.
6. Add section badge and promotional banner for marketing surfaces.
7. Integrate gradient illustration assets with proper responsive scaling.

### Accessibility
- White text on black canvas exceeds WCAG AAA contrast; maintain this for all primary content.
- Ensure `ink-muted` at `#a3a3a3` on `surface` `#1a1a1a` meets WCAG AA for secondary text (it does at approximately 7:1).
- Add visible focus states to pill buttons, perhaps a 2px `accent-teal` outline offset by 2px.
- Accordion toggles should be keyboard operable with Enter/Space, and aria-expanded properly managed.
- The "Recommended" badge should not be the only indicator of the recommended tier; the border accent provides redundant visual cue.

## Scope note

This guide covers the pricing page and homepage marketing surfaces visible in the supplied images. Navigation, footer, form elements, mobile layouts, motion design, and product dashboard interfaces are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px base grid. Verify licensing for Scandia Web and Work Sans before production use.
