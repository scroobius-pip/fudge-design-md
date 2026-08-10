# How good-fella.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/good-fella.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with ASCII-art figure, large display headline, orange primary button, and brand logo lockup on near-black canvas](https://pin.fontofweb.com/8198?format=jpg)](https://design.withfudge.com/share/pin-8198)

[Hero section with ASCII-art figure, large display headline, orange primary button, and brand logo lockup on near-black canvas](https://design.withfudge.com/share/pin-8198)

[![Featured Work portfolio section with split layout, project thumbnails, and category tags in monospace labels](https://pin.fontofweb.com/8197?format=jpg)](https://design.withfudge.com/share/pin-8197)

[Featured Work portfolio section with split layout, project thumbnails, and category tags in monospace labels](https://design.withfudge.com/share/pin-8197)

[![Why Good Fella comparison table with light gray background, dark data grid, and orange accent indicator](https://pin.fontofweb.com/8196?format=jpg)](https://design.withfudge.com/share/pin-8196)

[Why Good Fella comparison table with light gray background, dark data grid, and orange accent indicator](https://design.withfudge.com/share/pin-8196)

[![Pricing cards showing Active and Embedded tiers with large euro figures, feature lists, and dark-filled CTAs](https://pin.fontofweb.com/8195?format=jpg)](https://design.withfudge.com/share/pin-8195)

[Pricing cards showing Active and Embedded tiers with large euro figures, feature lists, and dark-filled CTAs](https://design.withfudge.com/share/pin-8195)

## Overview

Good Fella presents itself as a frontend development studio through a stark, high-contrast visual system that pairs near-black canvases with warm off-white typography and a single vivid orange accent. The design communicates technical confidence and craft discipline: generous whitespace, precise typographic hierarchy, and a restrained two-family type system that contrasts a clean neo-grotesque sans with a technical monospace. The site alternates between immersive dark sections and inverted light sections for functional content like pricing and comparison tables, creating rhythmic visual relief while maintaining brand coherence. Every interactive element follows a strict rectangular geometry—zero border-radius throughout—reinforcing a no-nonsense, engineering-first aesthetic that matches the studio's positioning as a dedicated team replacement rather than a traditional agency.

## Colors

The color system operates in two modes: a dominant dark mode for brand expression and a light mode for data-dense functional sections.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, hero sections, footer |
| canvas-elevated | #141314 | Slightly lifted dark surfaces, subtle depth |
| surface | #1A1A1A | Card backgrounds in dark mode, table rows |
| surface-light | #F7F7F7 | Light section backgrounds, pricing area |
| ink | #EEEEEE | Primary text on dark, headings on light |
| ink-muted | #818081 | Secondary body text, descriptions |
| ink-dim | #696869 | Tertiary text, captions, footer links |
| accent | #FB460D | Primary buttons, indicators, category tags |
| accent-hover | #FD551D | Button hover state, interactive emphasis |
| border | #141314 | Dark mode dividers, table borders |
| border-light | #EEEEEE | Light mode dividers, pricing card rules |

Dark sections establish the brand's default personality: pure black ground with warm near-white text and the orange accent appearing sparingly for calls-to-action and status indicators. The light inversion in pricing and comparison sections swaps the ground to warm off-white while preserving the same text hierarchy—dark ink for headings, muted gray for body, orange for labels and highlights. This dual-mode system lets functional content breathe without abandoning brand recognition.

## Typography

The type system pairs Aktiv Grotesk for all proportional text with Geist Mono for labels, tags, and technical annotations. This creates clear role separation: the sans carries voice and readability at display and body sizes, while the monospace adds mechanical precision to metadata and navigation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Aktivgrotesk | 6rem | 300 | 1.1 | -0.035em | Hero headlines, largest brand statements |
| section-display | Aktivgrotesk | 4rem | 500 | 1.125 | -0.05em | Section headings, pricing titles |
| body | Aktivgrotesk | 1rem | 400 | 1.5 | 0 | Primary body copy, descriptions |
| body-muted | Aktivgrotesk | 1rem | 400 | 1.5 | 0 | Secondary paragraphs on light backgrounds |
| label | Geist Mono | 0.875rem | 500 | 1.43 | 0 | Category tags, button labels, status pills |
| label-large | Geist Mono | 1rem | 400 | 1.5 | -0.02em | Navigation items, larger metadata |
| caption | Geist Mono | 0.875rem | 400 | 1.5 | -0.02em | Small annotations, footer details |

Display sizes use tight negative tracking for a compressed, contemporary feel. The hero-display at 96px with weight 300 creates an elegant, airy presence despite the large scale. Section-display at 64px with weight 500 provides more assertive hierarchy for content headings. Body text remains consistent at 16px across contexts, with color rather than size creating distinction between primary and secondary reading.

Geist Mono appears in Medium (500) for labels that need emphasis and Regular (400) for neutral metadata. The monospace family carries a technical character that reinforces the studio's engineering positioning without becoming decorative.

Verify licensing for these families before production use. Geist Mono is attributed to Basementstudio, Andrés Briganti, Mateo Zaragoza with vendor distribution through Basementstudio and Vercel.

## Layout

The layout follows a full-bleed, edge-to-edge philosophy with consistent internal padding. Sections stack vertically with generous separation, creating a scroll-driven narrative that reveals content through dramatic scale changes.

The header maintains a fixed presence with 16px vertical padding, containing the brand mark left, navigation center, and primary action right. This three-zone header compresses the brand into a minimal footprint while keeping conversion visible.

Main content sections use asymmetric compositions. The hero places massive left-aligned typography against a full-bleed ASCII-art figure that occupies the right two-thirds of the viewport. Portfolio sections split the frame: editorial text left with thumbnail navigation, large project imagery right. This left-text, right-media pattern repeats across work showcases.

Functional sections invert to light backgrounds and introduce centered or two-column layouts. The comparison table spans nearly full width with internal grid divisions. Pricing cards sit side-by-side with equal width, separated by the background contrast rather than visible borders.

Vertical rhythm relies on section spacing of 128px (8rem) for major transitions, with 64px (4rem) for internal component separation. Content blocks maintain 24px internal padding. Horizontal margins of 68px appear for contained content widths, creating a consistent inset from viewport edges without centering everything.

## Visual language

The visual language balances technical minimalism with expressive moments. The ASCII-art figure in the hero—composed of typographic characters forming a human silhouette—epitomizes this tension: handmade craft rendered through systematic, code-like means.

Photography and project imagery receives full-bleed treatment without rounded corners or decorative frames. Device mockups appear in natural contexts—hands holding phones, laptops on desks—rather than isolated renders. This grounds the technical work in human use.

The orange accent functions as a signal color rather than a decorative element. It appears on primary buttons, small square indicators before labels, category tags, and hover states. Its warmth against the cool black-and-white foundation creates focal points without visual noise.

Iconography and UI elements follow the same rectangular discipline. Buttons are sharp-edged rectangles. Tags are inline blocks with minimal padding. The absence of curvature throughout the interface reinforces precision and intent.

Typography itself becomes imagery at display sizes. The hero headline's scale relative to the viewport makes it a graphic element as much as readable text. This typographic monumentalism carries through section headings, which often exceed conventional sizes for their contexts.

## Components

### Primary button

- **Anatomy**: Rectangular button containing uppercase monospace label, occasionally paired with a square icon button containing a plus symbol
- **Surface**: Background filled with accent orange (#FB460D); text in near-black (#141314) for maximum contrast
- **Typography**: label token, uppercase, Geist Mono Medium
- **Shape**: Zero border-radius, sharp rectangle
- **Spacing**: 12px horizontal padding on label; icon button matches height with square proportions
- **Composition**: Label button and icon button sit flush as a joined pair, separated by a single pixel or none
- **Variants**: Dark variant uses black fill with light text for secondary actions; light mode uses black fill with light text on light backgrounds

### Navigation header

- **Anatomy**: Brand mark left, "MENU" trigger with horizontal lines center-right, primary CTA far right
- **Surface**: Transparent over dark content; text in warm off-white
- **Typography**: Navigation links use body token; menu trigger uses label token with icon
- **Spacing**: 16px vertical padding, full horizontal bleed with internal margins
- **Composition**: Three-zone flex layout with brand anchored left, actions anchored right

### Project card / Featured work item

- **Anatomy**: Large imagery dominant, project title below left, category tags below right
- **Surface**: Image fills container; text sits on dark overlay or below image
- **Typography**: Project title in section-display; category tags in label token with bracketed format like [AGENCY WEBSITE]
- **Shape**: Zero border-radius, full bleed
- **Composition**: Asymmetric split with thumbnail navigation left, hero image right; vertical stack on mobile

### Comparison table

- **Anatomy**: Column headers, row labels left, data cells right; highlighted column for brand
- **Surface**: Dark fill (#1A1A1A) on light section background; rows separated by hairline borders
- **Typography**: Row labels in label token uppercase; data in body token
- **Spacing**: 10px vertical padding per row, 24px internal table padding
- **Composition**: Four columns with equal distribution; brand column marked by orange square indicator and slightly elevated background

### Pricing card

- **Anatomy**: Tier label with indicator, large price figure, feature list, availability note, CTA button pair
- **Surface**: Light card on light background, or dark card on light background for contrast tier
- **Typography**: Tier label in label token with orange square; price in hero-display or section-display scale; features in body token; availability in caption
- **Shape**: Zero border-radius, rectangular with internal padding
- **Spacing**: 24px internal padding; feature list items separated by 1px rules
- **Composition**: Two cards side-by-side; dark card (Embedded) visually elevated over light card (Active)

### Status indicator

- **Anatomy**: Small orange square preceding text label
- **Surface**: Solid accent fill
- **Typography**: Accompanies label or caption text
- **Shape**: 2-4px square, zero radius
- **Use**: Marks active tier, brand column in tables, availability status

## Responsive behavior

The design's strong typographic hierarchy and single-column dark sections suggest a straightforward mobile adaptation. Display type should scale down proportionally: hero-display to approximately 3rem on narrow viewports, section-display to 2.5rem. The asymmetric split layouts—hero text over figure, portfolio text beside imagery—should stack vertically with text preceding media.

The comparison table requires horizontal scroll or reflow to a definition-list pattern on small screens. Four columns of tabular data cannot compress below approximately 720px without readability loss.

Pricing cards should stack vertically with the dark Embedded card following the light Active card, maintaining their distinct surface treatments.

The joined button-plus-icon pairs may need separation or full-width treatment on mobile to maintain touch targets. Minimum 44px tap height should apply to all interactive elements.

Navigation likely collapses to a full-screen overlay or bottom sheet given the minimal header structure and the "MENU" trigger pattern.

## Practical implementation guidance

### Preserve
- The strict zero-radius rectangle language across all components; this is a defining brand characteristic
- The two-mode color system: dark for brand expression, light for functional content
- The type pairing: proportional sans for voice, monospace for technical metadata
- The orange accent as a sparse signal—overuse will dilute its impact
- Generous section spacing (128px) that lets content breathe
- The joined button-plus-icon composition for primary actions

### Avoid
- Rounded corners on any interactive element; they contradict the entire system
- Additional accent colors; the single orange against black-and-white is intentional restraint
- Decorative shadows or elevation effects; depth comes from color contrast alone
- Centering display headlines; the left-aligned monumental type is part of the brand voice
- Small body text; the 16px minimum maintains readability against dark backgrounds

### Recommended build order
1. Establish the dark canvas and light section backgrounds with color tokens
2. Implement the type scale with Aktiv Grotesk at display and body sizes
3. Build the sharp-edged button component with joined icon variant
4. Create the header with three-zone composition
5. Develop the hero section with asymmetric text-and-media layout
6. Add the comparison table with dark fill on light ground
7. Implement pricing cards with surface inversion between tiers
8. Apply Geist Mono for all labels, tags, and metadata

### Accessibility
- Maintain minimum 4.5:1 contrast for body text; the warm off-white (#EEEEEE) on pure black exceeds this
- The muted ink (#818081) should be reserved for non-essential text or large sizes only
- Ensure the orange accent (#FB460D) never carries text; its contrast against black is insufficient for small sizes
- Provide focus indicators that respect the rectangular language—outset rings or background shifts rather than rounded outlines
- Consider reduced-motion preferences for the ASCII-art and any scroll-driven reveals

## Scope note

This guide covers the homepage and primary landing surfaces visible in the supplied captures: hero, featured work, comparison table, and pricing sections. Interior pages, mobile navigation behavior, form states, and motion specifications are not included. All corners remain sharp per the visible interface.
