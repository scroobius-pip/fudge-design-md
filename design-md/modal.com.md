# How modal.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/modal.com-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page feature comparison table with three-tier Starter, Team, and Enterprise columns on black background with green checkmarks.](https://pin.fontofweb.com/9044?format=jpg)](https://design.withfudge.com/share/pin-9044)

[Pricing page feature comparison table with three-tier Starter, Team, and Enterprise columns on black background with green checkmarks.](https://design.withfudge.com/share/pin-9044)

[![Pricing page hero with large Goga display type, green accent word 'magical', compute costs panel, and three-tier pricing cards with green gradient tops.](https://pin.fontofweb.com/9043?format=jpg)](https://design.withfudge.com/share/pin-9043)

[Pricing page hero with large Goga display type, green accent word 'magical', compute costs panel, and three-tier pricing cards with green gradient tops.](https://design.withfudge.com/share/pin-9043)

[![Light-themed pricing section with credit grant cards for startups, academics, and committed spend, plus sandbox pricing with 3D green cube illustration.](https://pin.fontofweb.com/9042?format=jpg)](https://design.withfudge.com/share/pin-9042)

[Light-themed pricing section with credit grant cards for startups, academics, and committed spend, plus sandbox pricing with 3D green cube illustration.](https://design.withfudge.com/share/pin-9042)

[![Dark call-to-action section with floating green translucent cubes and 'Create your first notebook now' headline with lime green pill button.](https://pin.fontofweb.com/9041?format=jpg)](https://design.withfudge.com/share/pin-9041)

[Dark call-to-action section with floating green translucent cubes and 'Create your first notebook now' headline with lime green pill button.](https://design.withfudge.com/share/pin-9041)

## Overview

Modal's visual system is built for technical credibility and developer trust. The design operates primarily in a dark mode with a pure black canvas, using high-contrast off-white text and vivid green accents that evoke computational energy and growth. The typographic pairing is deliberately asymmetric: Goga, an extremely thin display face, handles headlines and pricing figures with an airy, almost weightless presence, while Inter provides dense, readable body copy and interface labels with consistent negative tracking. This contrast between ethereal display type and grounded functional text creates a distinctive voice for AI infrastructure messaging. The system moves confidently between deep black sections and occasional light-wash panels, using color-coded highlights—lime green for primary actions, pink for startup programs, blue for academic and enterprise pathways—to organize complex pricing and product information without visual clutter.

## Colors

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, deep black ground for all main sections |
| canvas-light | #DEF0DD | Light panel backgrounds for alternating sections, grant cards |
| surface | #212525 | Elevated card backgrounds, pricing card headers with gradient |
| surface-elevated | #464646 | Subtle secondary surfaces, hover states |
| ink | #000000 | Text on light backgrounds, body copy on canvas-light |
| ink-inverse | #FFFFFF | Primary text on dark backgrounds, headings on black |
| ink-muted | #869085 | Secondary text, descriptions, disabled states, metadata |
| accent | #80EE64 | Primary action buttons, active toggles, checkmarks, highlights |
| accent-hover | #09AF58 | Button hover states, gradient endpoints, emphasis text |
| accent-dark | #07B976 | Secondary green for gradients, darker emphasis |
| accent-wash | #DDFFDC | Very light green for subtle backgrounds, success states |
| highlight-pink | #FF8DE6 | Startup program accents, grant card highlights |
| highlight-blue | #91C8EF | Academic and enterprise pathway accents, committed spend cards |
| border | #DEF0DD | Hairline rules on dark backgrounds, card outlines on light |
| border-subtle | #869085 | Muted dividers, secondary separators |

The color logic follows a strict dark-first hierarchy. Black canvas dominates, with text rendered in near-white for maximum legibility. The green accent family serves as the single functional color, appearing in buttons, toggles, checkmarks, and gradient highlights. Light sections use #DEF0DD, a pale mint-gray that preserves the green tonal family without competing for attention. Three semantic highlight colors—pink for startups, green for academics, blue for enterprise—appear as text background washes on grant cards, never as solid fills. Gradients on pricing cards move from #212525 to transparent, creating depth without departing from the monochrome base.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Goga | 4rem | 500 | 1 | normal | Page headlines, pricing hero, major section titles |
| section-display | Goga | 2.5rem | 400 | 1.1 | normal | Section headings, feature titles, CTA headlines |
| subhead-display | Goga | 1.5rem | 400 | 1.3 | normal | Card titles, pricing tier names, sub-section headers |
| price-figure | Goga | 3.375rem | 400 | 1 | normal | Large pricing amounts, hero numerals |
| body-large | Inter | 1.125rem | 500 | 1.55 | -0.0225em | Lead paragraphs, hero descriptions, prominent body |
| body | Inter | 1rem | 400 | 1.5 | -0.0225em | Standard paragraphs, list items, descriptions |
| body-medium | Inter | 1rem | 500 | 1.5 | -0.0225em | Emphasized body, navigation items, table cells |
| label | Inter | 0.875rem | 500 | 1.43 | -0.0225em | Buttons, tags, metadata, pricing units |
| caption | Inter | 0.75rem | 500 | 1.33 | -0.0225em | Fine print, disclaimers, toggle labels |

The type system draws on four families present in the source: Goga, Inter, Degular, and Inter Tight. Goga, designed by Andrej Sevcik of Narrow Type, is used exclusively for display purposes at weights 400 and 500. Its extreme thinness at large sizes creates an elegant, almost fragile quality that contrasts with the technical subject matter. Inter, designed by Rasmus Andersson, handles all functional text at 400 and 500 weights with a consistent -0.36px letter-spacing that tightens the face without compressing it. Degular and Inter Tight appear in the source files but are not visibly deployed in the captured interface; they may serve secondary or future use cases. Verify licensing for these families before production use.

## Layout

The layout system uses a centered content model with generous horizontal margins. Primary content sits within a max-width container centered by auto margins, with `0px 152.5px` side margins appearing as the standard desktop constraint. Sections are separated by substantial vertical padding—`96px 0px` for major sections, `128px 0px 80px` for hero areas, and `72px 0px 96px` for content blocks. Internal spacing follows a 2px base unit, with common increments at 8px, 12px, 16px, 24px, 32px, 48px, and 64px.

The grid is implicitly fluid rather than strictly column-based. Pricing tables use a four-column layout with feature names in the first column and tier values in subsequent columns. Pricing cards appear in three-column arrangements with equal widths. The compute costs panel on the pricing page uses a two-column structure with category labels left and rates right-aligned. Navigation sits in a full-width bar with internal flex distribution, logo left, links center, auth actions right.

Responsive behavior should collapse multi-column layouts to single columns below approximately 768px, with horizontal margins reducing to `0px 48px` or narrower. The feature comparison table requires horizontal scroll or stacked card treatment on small viewports. Typography scales down proportionally, with hero-display reducing to approximately 2.5rem and section-display to 1.75rem on mobile.

## Visual language

Modal's visual language balances technical precision with approachable warmth. The dark canvas creates a focused, terminal-like environment appropriate for developer tools, while the thin Goga headlines prevent the aesthetic from feeling heavy or corporate. Green accents are used surgically: a lime pill button, a gradient top on a pricing card, a checkmark in a feature table. This restraint makes each accent instance feel meaningful rather than decorative.

Imagery and illustration follow a consistent 3D language. Geometric primitives—cubes, stacked layers, translucent glass-like forms—appear in saturated greens against black backgrounds. These elements have soft glows and subtle reflections that suggest computational power without literal server imagery. The illustrations are positioned asymmetrically, often floating in the right portion of a section while text occupies the left.

The interface avoids heavy chrome. Buttons are simple pills or rectangles with minimal borders. Cards float on the black canvas with subtle gradient tops or thin border outlines. The overall effect is spacious and breathable, with large areas of negative space that let the thin typography and precise green accents command attention.

## Components

### Navigation bar

- **Anatomy**: Fixed top bar containing logo mark and wordmark left, primary links center, authentication actions right.
- **Surface**: Transparent or near-black background, blending with canvas.
- **Typography**: `{typography.label}` for links, `{typography.body-medium}` for active states.
- **Spacing**: `12px` vertical padding, links spaced with comfortable horizontal gaps.
- **Composition**: Flex row with space-between distribution, logo group left, link cluster center, auth group right.
- **Variants**: Default state shows text links; active page link receives subtle emphasis; "Sign Up" button uses pill shape with accent fill.

### Hero section

- **Anatomy**: Large headline block left, optional supporting panel right, descriptive paragraph below headline, primary and secondary actions.
- **Surface**: Black canvas background.
- **Typography**: `{typography.hero-display}` for headline, with selective words in `{colors.accent}`; `{typography.body-large}` for description.
- **Spacing**: `128px` top padding, `80px` bottom padding, content constrained by standard margins.
- **Composition**: Asymmetric two-column when paired with data panel; single column on product pages.
- **Variants**: Pricing hero includes compute costs panel with toggle switch; product heroes include 3D illustration.

### Pricing card

- **Anatomy**: Card container with gradient top header, tier name, price figure, description, feature list with checkmarks, action button.
- **Surface**: `{colors.surface}` header with gradient to transparent; body on black or light background.
- **Typography**: `{typography.subhead-display}` for tier name; `{typography.price-figure}` for price; `{typography.body}` for description; `{typography.label}` for feature items.
- **Shape**: `0.5rem` corner radius on card; `9999px` pill radius on primary button.
- **Spacing**: `24px` internal padding, `16px` between price and description, `48px` between cards.
- **Composition**: Equal-width columns in row layout.
- **Variants**: Starter tier uses accent-filled button; Team and Enterprise use outline or secondary buttons.

### Feature comparison table

- **Anatomy**: Section heading, category headers, row labels, tier values, boolean indicators.
- **Surface**: Black canvas with horizontal hairline rules.
- **Typography**: `{typography.section-display}` for section title; `{typography.body-medium}` for row labels; `{typography.body}` for values.
- **Shape**: `1px` solid horizontal borders in `{colors.border-subtle}`.
- **Spacing**: `24px` vertical padding on rows, `12px` horizontal cell padding.
- **Composition**: Four-column grid with sticky left label column.
- **Variants**: Boolean values render as green checkmarks or muted absence indicators.

### Compute costs panel

- **Anatomy**: Category header, toggle switch for rate period, item list with names and rates, fine-print disclaimer.
- **Surface**: Black canvas or elevated surface.
- **Typography**: `{typography.subhead-display}` for category; `{typography.body-medium}` for item names; `{typography.label}` for rates; `{typography.caption}` for disclaimers.
- **Shape**: `9999px` pill toggle with active accent fill.
- **Spacing**: `24px` between categories, `12px` between items.
- **Composition**: Two-column with labels left, rates right-aligned.

### Grant card

- **Anatomy**: Card container, headline with highlighted keyword, description paragraph, action button.
- **Surface**: `{colors.canvas-light}` background; keyword highlight in semantic color.
- **Typography**: `{typography.section-display}` for headline; `{typography.body}` for description; `{typography.label}` for button.
- **Shape**: `0.5rem` corner radius; button as pill or rounded rectangle.
- **Spacing**: `24px` internal padding.
- **Variants**: Startup card uses pink highlight; Academic uses green; Enterprise/committed spend uses blue.

### Call-to-action section

- **Anatomy**: 3D illustration left or floating, headline right, button below, supporting text.
- **Surface**: Black canvas.
- **Typography**: `{typography.section-display}` for headline with accent-colored keyword; `{typography.label}` for button; `{typography.caption}` for supporting text.
- **Shape**: `9999px` pill button in `{colors.accent}`.
- **Spacing**: `80px` vertical padding, generous horizontal margins.
- **Composition**: Asymmetric with illustration occupying 40-50% of width.

## Responsive behavior

The system is designed desktop-first with clear adaptation paths. Navigation collapses to a hamburger menu on narrow viewports, with the full link list accessible via overlay. Hero sections stack vertically, moving any side panel below the headline and description. Pricing cards transition from three-column to single-column stacked layout, with each card expanding to full width. The feature comparison table requires either horizontal scroll with sticky first column or transformation into an accordion-style per-tier view.

Typography scales down by approximately 30-40% on mobile: hero-display from 4rem to 2.5rem, section-display from 2.5rem to 1.75rem. Body text remains at 1rem for readability. Horizontal margins compress from `152.5px` to `48px` to `24px` across breakpoints. Touch targets for buttons and toggles maintain minimum 44px height.

## Practical implementation guidance

### Preserve
- The stark black-to-white contrast ratio; never lighten the canvas or darken the primary text.
- Goga's thin weight for all display sizes; substituting a thicker face destroys the system's airy quality.
- The precise -0.0225em letter-spacing on Inter; this tightness is part of the brand voice.
- Semantic highlight colors tied to specific programs: pink for startups, green for academics, blue for enterprise.
- The 3D geometric illustration style with translucent materials and green glow.

### Avoid
- Adding additional accent colors beyond the green family and three semantic highlights.
- Using Goga for body text or small sizes; it becomes illegible below 1.25rem.
- Solid fills behind text highlights; the system uses background-color text spans, not blocks.
- Heavy drop shadows or dimensional effects on cards; the system uses flat gradients and thin borders.
- Centering display headlines except in specific CTA contexts; left alignment is the default.

### Recommended build order
1. Establish the black canvas and Inter body text with correct tracking.
2. Implement Goga at hero-display and section-display sizes.
3. Add the green accent family to buttons, toggles, and checkmarks.
4. Build the pricing card component with gradient header and pill button.
5. Construct the feature comparison table with hairline rules.
6. Add light-section variants with grant cards and semantic highlights.
7. Integrate 3D illustration containers with asymmetric layouts.

### Accessibility
- Maintain 4.5:1 minimum contrast for all body text; the white-on-black pairing exceeds this.
- Ensure green accent elements on black meet 3:1 for large text and UI components; the #80EE64 accent may need adjustment for small text.
- Provide visible focus states for all interactive elements; consider a 2px outline in accent color.
- Preserve semantic HTML structure with proper heading hierarchy; do not rely on Goga's visual size alone for document outline.
- Add aria-labels to toggle switches and icon-only buttons.

## Scope note

This guide covers the pricing page, product pages, and homepage surfaces visible in the supplied images. It does not include documentation pages, dashboard interfaces, blog templates, or mobile-specific layouts. Motion design, loading states, and form validation styling are not represented. Degular and Inter Tight are present in source files but not visibly deployed in captured interfaces. Measurements are exact where retained and practical adaptation targets where inferred from visual inspection.
