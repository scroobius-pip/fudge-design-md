# How langchain.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/langchain.com-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing hero section with three-tier card layout and large display heading on muted sage background](https://pin.fontofweb.com/1664?format=jpg)](https://design.withfudge.com/share/pin-1664)

[Pricing hero section with three-tier card layout and large display heading on muted sage background](https://design.withfudge.com/share/pin-1664)

[![Three pricing plan cards with pill-shaped dark buttons and feature bullet lists on light surface](https://pin.fontofweb.com/1665?format=jpg)](https://design.withfudge.com/share/pin-1665)

[Three pricing plan cards with pill-shaped dark buttons and feature bullet lists on light surface](https://design.withfudge.com/share/pin-1665)

[![Feature comparison table with tiered columns and section headers with checkmark indicators](https://pin.fontofweb.com/1666?format=jpg)](https://design.withfudge.com/share/pin-1666)

[Feature comparison table with tiered columns and section headers with checkmark indicators](https://design.withfudge.com/share/pin-1666)

[![FAQ accordion with expand/collapse controls and section groupings on pale background](https://pin.fontofweb.com/1667?format=jpg)](https://design.withfudge.com/share/pin-1667)

[FAQ accordion with expand/collapse controls and section groupings on pale background](https://design.withfudge.com/share/pin-1667)

## Overview

LangChain's design system presents a restrained, engineering-credible aesthetic built for developer audiences evaluating infrastructure tooling. The visual language centers on generous whitespace, muted sage-green environmental tones, and high-contrast dark forest-green accents that signal action without visual noise. The pricing and marketing surfaces employ a card-based architecture where information hierarchy is established through scale contrast rather than color variety. Typography is exclusively set in Manrope, a geometric sans-serif that carries technical precision with approachable roundness. The overall impression is one of calm confidence—expensive-feeling through restraint rather than decoration, with rounded corners softening the otherwise minimal palette. Every interactive element maintains this disciplined approach: pill-shaped buttons, softly rounded cards, and thin hairline borders that separate without fragmenting.

## Colors

The color system operates on a principle of environmental calm with selective contrast. The palette draws from natural, desaturated tones that avoid the clinical coldness of pure grays while maintaining the neutrality required for technical content.

| token | value | use |
|---|---|---|
| canvas | `#F7F8F7` | Primary page background, creates soft environmental warmth |
| surface | `#FFFFFF` | Card backgrounds, elevated content areas, pricing cards |
| surface-elevated | `#E8EBE8` | Table section headers, subtle grouping backgrounds, FAQ area |
| ink | `#1A2E2A` | Primary text, headings, button backgrounds, strongest contrast |
| ink-secondary | `#4A5E5A` | Body text, descriptions, secondary content |
| ink-muted | `#6A7E7A` | Tertiary text, captions, "then pay as you go" labels |
| action | `#1A2E2A` | Primary button fills, interactive emphasis |
| action-text | `#FFFFFF` | Text on dark buttons and interactive surfaces |
| border | `#D5DAD5` | Hairline dividers, accordion separators, table row borders |
| border-subtle | `#E8EBE8` | Very light separators, card internal divisions |

The dark forest green (`#1A2E2A`) functions as both ink and action color, creating a unified identity where the brand's darkest tone is also its most interactive. This avoids the visual fragmentation of introducing a separate "brand blue" or accent hue. The sage-tinted grays in the background system (`#F7F8F7`, `#E8EBE8`) provide warmth without competing with content. White cards on the canvas background achieve subtle elevation through shadow absence—relying purely on color contrast and rounded containment. The palette supports extended reading and comparison tasks by maintaining consistently high lightness contrast between text and surface, with body text at approximately 7:1 against white.

## Typography

The typographic system is singular in family but varied in scale and weight application. Manrope, designed by Mikhail Sharanda, provides the complete type palette. The design uses only the Regular weight (400) across all visible elements, relying on size and spacing to establish hierarchy rather than weight contrast. This creates an unusually calm, even-toned reading experience appropriate for technical documentation and pricing evaluation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Manrope | 4rem | 400 | 1.1 | -0.02em | Page headlines, "Plans for teams of any size" |
| section-display | Manrope | 2rem | 400 | 1.2 | -0.01em | Card titles, FAQ section headers, plan names |
| price-display | Manrope | 2.5rem | 400 | 1.1 | -0.01em | Pricing amounts, "$0 / month", "$39 / month" |
| body | Manrope | 1rem | 400 | 1.6 | 0em | Paragraph text, feature descriptions, accordion body |
| body-small | Manrope | 0.875rem | 400 | 1.5 | 0em | Table cells, feature list items, secondary details |
| label | Manrope | 0.75rem | 400 | 1.4 | 0.01em | "Starting at" prefixes, captions, metadata |

The hero display at 4rem (64px) establishes immediate presence with tight negative tracking that lends a crafted, bespoke quality. Section displays at 2rem (32px) divide content areas without shouting. The price display at 2.5rem (40px) sits between these scales, giving monetary values prominence without equaling the page headline. Body text at 1rem with 1.6 line height supports extended reading in feature lists and FAQ answers. The consistent 400 weight across all scales is a deliberate restraint that unifies the experience.

Verify licensing for these families before production use. Manrope is designed by Mikhail Sharanda and available from gent.media.

## Layout

The layout system employs a centered, contained approach with generous breathing room. Content max-width appears to sit around 1200px, with pricing cards arranged in a three-column grid that collapses gracefully. The grid gap of 1.5rem (24px) between cards provides separation without visual fragmentation.

Vertical rhythm follows a section spacing of 6rem (96px) between major content areas, with internal card padding of 2rem (32px) creating comfortable containment for plan details. The pricing cards themselves use internal spacing of 1rem (16px) between price display, description, button, and feature list.

The comparison table in Image 2 demonstrates a full-bleed section approach within the contained layout, with columnar alignment that matches the three-card grid above. Table rows use generous vertical padding (approximately 1rem) with hairline borders separating entries. Section headers within the table receive the elevated surface color (`#E8EBE8`) with rounded corners, creating visual grouping without heavy borders.

Card composition follows a consistent internal structure: plan name and tagline at top, price block with prefix label and amount, full-width pill button, then horizontal rule separator, followed by feature list. This vertical stack maintains predictability across tiers. The FAQ section in Image 1 shows a narrower content width than the pricing grid, suggesting adaptive containment based on content type—pricing demands full width for comparison, while reading content benefits from narrower measure.

## Visual language

The visual language communicates technical reliability through restraint and warmth through tonal choices. The rounded corner system is pervasive and consistent: cards at 1.5rem (24px), buttons at full pill (9999px), and smaller elements at 0.75rem (12px). This rounding softens the otherwise minimal, engineering-focused aesthetic.

Imagery and illustration are absent from the visible pricing surface, replaced by typographic hierarchy and spatial organization. The brand relies on a single accent approach: the dark forest green appears only as functional color (text, buttons, checkmarks) rather than decorative elements. Checkmarks in the comparison table use filled dark circles with white check icons, maintaining the binary color system.

The surface layering creates subtle depth: canvas background, white cards, elevated sage headers. No shadows are visible in the supplied images—depth is achieved purely through color value contrast and rounded containment. This flat-layer approach feels contemporary and performant, appropriate for a developer tooling company.

Text hierarchy is established through size contrast alone: the 4rem hero against 1rem body creates a 4:1 scale ratio, while the 2.5rem price display bridges headline and body. Italic styling appears only for plan taglines ("For hobbyist projects by solo devs."), creating a gentle voice shift without introducing new colors or weights.

## Components

### Pricing card

The pricing card is the system's most prominent component, appearing as a white rounded rectangle on the sage canvas.

- **Anatomy**: Plan name (section-display), italic tagline (body-small), "Starting at" label (label), price amount (price-display), billing note (body-small), full-width pill button, horizontal rule, feature list header (body), bulleted feature items (body-small)
- **Surface**: White (`#FFFFFF`) background, no visible shadow, 1.5rem border radius
- **Typography**: Plan name in section-display, price in price-display, features in body-small
- **Shape**: 1.5rem rounded corners, consistent internal padding of 2rem
- **Spacing**: 1rem vertical gap between major elements inside card, 1.5rem gap between cards in grid
- **Composition**: Vertical stack with button centered, feature list left-aligned with bullet markers
- **Variants**: Three visible tiers (Developer, Plus, Enterprise) with identical structure; Enterprise shows "Custom" instead of price

### Primary button

- **Anatomy**: Text label centered within pill-shaped container
- **Surface**: Dark forest green fill (`#1A2E2A`), white text (`#FFFFFF`)
- **Typography**: body token, centered
- **Shape**: Full pill (9999px border radius), generous horizontal padding creating elongated capsule
- **Spacing**: Approximately 1rem vertical padding, 2rem+ horizontal padding
- **Composition**: Full width of parent card, centered text
- **Variants**: "Start for free", "Sign up", "Get a demo"—identical styling, different labels

### Comparison table

- **Anatomy**: Column headers (Features, Developer, Plus, Enterprise), section group headers, feature rows with text and checkmark indicators
- **Surface**: Sage elevated background (`#E8EBE8`) for section headers, transparent/canvas for data rows
- **Typography**: body-small for all content, with section headers slightly emphasized through background
- **Shape**: 0.75rem rounded corners on section header rows
- **Spacing**: Generous row height with approximately 1rem vertical padding, full-width hairline borders between rows
- **Composition**: Four-column grid with first column wider for feature names, remaining columns centered
- **Variants**: Section headers group related features; checkmarks indicate inclusion

### Accordion (FAQ)

- **Anatomy**: Section header (section-display), question rows with expand/collapse icon, answer content area
- **Surface**: Transparent/canvas background, hairline borders between items
- **Typography**: Question text in section-display, answer in body
- **Shape**: No visible rounding on individual rows; section grouping implied by spacing
- **Spacing**: Generous vertical padding per item, approximately 1.5rem
- **Composition**: Full-width rows with question left-aligned, plus/minus icon right-aligned
- **Variants**: Expanded state shows answer text and "Apply here" link; collapsed state shows only question and plus icon

## Responsive behavior

The three-column pricing grid should stack vertically on viewports below approximately 768px, with cards maintaining full width and internal structure. The comparison table requires horizontal scroll or column reduction at smaller sizes, as four-column text tables become unreadable when compressed. The FAQ accordion naturally adapts to any width, though touch targets should maintain minimum 44px height for mobile interaction.

The pill buttons at full card width may feel oversized on mobile; consider maintaining full width for consistency or introducing a max-width constraint if visual balance suffers. Type scale should reduce modestly: hero-display may drop to 2.5rem on small screens, preserving hierarchy without overwhelming the viewport.

## Practical implementation guidance

### Preserve
- The singular Manrope family at 400 weight throughout; this restraint is central to the calm aesthetic
- The sage-tinted canvas (`#F7F8F7`) rather than pure white for page backgrounds
- Full pill buttons (9999px) with generous horizontal padding creating capsule proportions
- Consistent 1.5rem card rounding across all elevated surfaces
- The dark forest green as both functional action and primary ink color

### Avoid
- Introducing additional font weights or secondary type families
- Pure gray backgrounds that lose the subtle green warmth
- Sharp-cornered cards or buttons that would break the soft visual system
- Decorative shadows or elevation effects—the system relies on color contrast alone
- Color-coded tier differentiation; the design uses identical white cards for all plans

### Recommended build order
1. Establish the canvas background and Manrope font loading
2. Implement the type scale with exact sizes and tracking values
3. Build the pricing card component with correct padding, rounding, and internal spacing
4. Create the pill button with full-width behavior and proper color contrast
5. Construct the three-column grid with responsive stacking behavior
6. Add the comparison table with section header styling
7. Implement the FAQ accordion with expand/collapse states

### Accessibility
- Maintain minimum 4.5:1 contrast for all body text; the current ink (`#1A2E2A`) on white exceeds 7:1
- Ensure accordion controls are keyboard accessible with visible focus indicators
- The plus/minus icons should have aria-labels indicating expand/collapse action
- Pricing card buttons need clear focus states, likely an outline offset or subtle background shift
- Consider adding skip links for the lengthy comparison table on screen readers

## Scope note

This guide covers the pricing page and homepage surfaces visible in the supplied images, including the three-tier pricing cards, feature comparison table, and FAQ accordion. Navigation, footer, form interactions, mobile breakpoints, animation, and dark mode variants are not represented in the available material. Measurements are practical adaptation targets derived from visual analysis of the supplied images.
