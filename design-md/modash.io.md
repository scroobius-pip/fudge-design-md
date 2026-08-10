# How modash.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/modash.io-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page hero with large condensed display type reading 'PRICING? RIGHT HERE.' and three-tier pricing cards below](https://pin.fontofweb.com/2742?format=jpg)](https://design.withfudge.com/share/pin-2742)

[Pricing page hero with large condensed display type reading 'PRICING? RIGHT HERE.' and three-tier pricing cards below](https://design.withfudge.com/share/pin-2742)

[![Three pricing cards showing Essentials, Performance with dark theme and pink CTA, and Enterprise with CUSTOM display type](https://pin.fontofweb.com/2743?format=jpg)](https://design.withfudge.com/share/pin-2743)

[Three pricing cards showing Essentials, Performance with dark theme and pink CTA, and Enterprise with CUSTOM display type](https://design.withfudge.com/share/pin-2743)

[![Detailed feature comparison table with category icons, checkmarks, and tiered plan columns](https://pin.fontofweb.com/2744?format=jpg)](https://design.withfudge.com/share/pin-2744)

[Detailed feature comparison table with category icons, checkmarks, and tiered plan columns](https://design.withfudge.com/share/pin-2744)

[![FAQ accordion section with bold uppercase heading and expand/collapse controls on light gray background](https://pin.fontofweb.com/2745?format=jpg)](https://design.withfudge.com/share/pin-2745)

[FAQ accordion section with bold uppercase heading and expand/collapse controls on light gray background](https://design.withfudge.com/share/pin-2745)

## Overview

Modash presents a confident, direct visual system built for B2B SaaS conversion. The design language centers on extreme typographic contrast: massive condensed display lettering for headlines paired with clean, readable body text in a neutral sans-serif. The palette is intentionally restrained—near-black, warm off-white, and a single vibrant pink accent that appears only at moments of action. This creates a sophisticated, editorial feel that avoids the generic brightness of typical marketing sites.

The pricing experience is the clearest expression of this system. A dramatic hero headline in oversized condensed type gives way to a three-tier card layout where the middle tier receives special treatment through inverse colors and the pink accent. Feature lists are exhaustive but scannable, supported by checkmark iconography and clear hierarchy. The overall impression is of a product that knows its value and communicates it without decoration or distraction.

## Colors

The color system is built on a near-monochrome foundation with a single warm accent. This creates high legibility and clear hierarchy while allowing the pink to signal interactivity and premium positioning.

| token | value | use |
|---|---|---|
| ink | #141414 | Primary text, dark backgrounds, primary buttons, display type |
| canvas | #F5F5F5 | Page backgrounds, secondary surfaces, FAQ section ground |
| surface | #FFFFFF | Card backgrounds, content areas, toggle active state |
| surface-inverse | #1A1A1A | Featured card background, dark mode accents |
| accent | #FF9EC8 | Primary CTA on dark cards, interactive highlights, premium indicator |
| accent-hover | #FF85B8 | Accent interaction state |
| muted | #6B6B6B | Secondary text, captions, disabled states, pricing subtext |
| border | #E5E5E5 | Dividers, card outlines, table rules |
| border-inverse | #333333 | Subtle divisions on dark surfaces |

The light mode dominates all visible surfaces. The near-black ink provides maximum contrast against white and off-white grounds. The pink accent appears strategically: on the primary action within the dark "Performance" pricing card, creating a focal point that draws the eye to the recommended tier. The muted gray handles all secondary information—billing periods, feature descriptions, and helper text—without competing for attention.

The dark card variant inverts the relationship: white text on near-black ground, with the pink button becoming the single point of warmth. This inversion is used sparingly, reserved for the highlighted tier to create visual elevation through contrast rather than shadow or depth effects.

## Typography

The type system pairs a distinctive condensed display family with a neutral, highly legible body family. This creates dramatic scale contrast between headlines and content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Mo Sans | 5rem | 400 | 0.9 | -0.02em | Page headlines, pricing hero |
| section-display | Mo Sans | 3rem | 400 | 1 | -0.01em | Section titles, FAQ heading |
| body | Inter | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions, feature lists |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0em | Captions, billing notes, secondary details |
| label | Inter | 0.75rem | 500 | 1.25 | 0.02em | Buttons, tags, metadata |
| navigation | Inter | 0.875rem | 500 | 1.25 | 0em | Nav items, category headers |

Mo Sans serves as the brand voice in display settings. Its condensed proportions allow very large sizes without excessive line breaks, creating the bold, poster-like headlines visible in the pricing hero. The weight is consistently regular—heaviness comes from scale and density rather than boldness. Letter spacing is slightly tightened at display sizes to maintain cohesion.

Inter handles all functional text with clarity and neutrality. The medium weight (500) is reserved for labels and navigation to create subtle hierarchy within the interface. Body text remains regular weight for extended reading comfort.

The source files include Inter-Italic as a distinct family, though no italic styles are visibly used in the captured interface. Open Sans also appears in the source files without visible use. Verify licensing for these families before production use. Mo Sans attribution is not supported by available records; Inter and Inter-Italic are designed by Rasmus Andersson and distributed by Rsms.

## Layout

The layout system follows a centered, contained approach with generous vertical rhythm. Content max-width appears to sit around 1200px, creating comfortable line lengths for both text and tabular data.

Sections stack vertically with substantial breathing room—approximately 6rem between major content areas. The pricing page demonstrates a clear three-zone structure: hero headline with toggle, card grid, and detailed comparison table below. This vertical progression moves from emotional impact to decision support to thorough evaluation.

The pricing cards use a three-column grid with equal widths. The center card receives visual priority through its dark treatment and slight scale emphasis, though all three share the same structural dimensions. Card internal padding is generous, approximately 2rem on all sides, creating ample space for feature lists to breathe.

The comparison table spans the full content width with a sticky or prominent header row. Category sections are grouped with icon-and-label headers (Team, Discovery, Manage), creating visual rest stops in the dense information. Rows alternate between text values and checkmark indicators, with consistent horizontal alignment to the three plan columns.

The FAQ section narrows to a more contained width, approximately 800px, centering the accordion on the canvas-colored background. This width constraint improves readability of the expanded answer text and creates a calmer, more focused experience after the information density of pricing.

## Visual language

The visual language is direct and unadorned, relying on typographic scale and color contrast rather than illustration, photography, or decorative elements. The aesthetic is editorial and confident—appropriate for a data-heavy B2B tool.

Iconography is minimal and functional. Small circular icons with simple glyphs (people, search, tools) mark category headers in the comparison table. Checkmarks indicate feature inclusion. The plus and minus icons in the FAQ are contained in small rounded squares, providing clear affordances without visual weight.

No photography or illustration appears in the captured interface. The brand expression comes entirely from type treatment, spacing discipline, and the single pink accent. This restraint suggests a product-focused positioning where the tool's functionality speaks for itself.

Border treatments are subtle and consistent. Hairline rules in light gray separate table rows and accordion items. The dark pricing card uses slightly lighter rules for internal divisions, maintaining structure without breaking the inverse treatment. No shadows are visible; depth is created solely through color contrast and spatial grouping.

The rounded corner vocabulary is restrained: cards use moderate rounding (approximately 1rem), buttons are slightly tighter, and the billing toggle uses full pill rounding. This creates a family of related shapes without excessive variety.

## Components

### Pricing card

The pricing card is the central component of the system, appearing in three variants that share a common structure.

- **Anatomy**: Plan name, description, price display with billing period, primary action button, feature list with checkmarks, and optional "What's included" subsection.
- **Surface**: Default variant uses white surface on canvas ground. Featured variant uses near-black surface with white text. Enterprise variant uses white surface with muted price display reading "CUSTOM".
- **Typography**: Plan name uses body weight at 1rem with medium weight. Price uses hero-display scale in Mo Sans. Description and features use body-small in Inter.
- **Shape**: Rounded corners at 1rem. No visible border or shadow.
- **Spacing**: Internal padding of 2rem. Feature list items stack with 0.75rem vertical gap. Subsections separated by horizontal rules with 1.5rem vertical margin.
- **Composition**: Left-aligned content with full-width button. Price and billing period arranged in horizontal alignment with baseline offset.
- **Variants**: Default (white), Inverse (dark with pink CTA), Enterprise (white with muted emphasis and secondary CTA).

### Billing toggle

A segmented control for annual versus monthly billing.

- **Anatomy**: Two-option pill switch with active indicator, helper text below.
- **Surface**: Dark track (ink) with white active pill. Helper text in muted color.
- **Typography**: Label token for switch text, body-small for helper.
- **Shape**: Full pill rounding on container and active segment.
- **Composition**: Centered above pricing cards. Active state clearly distinguished by background inversion.

### Comparison table

Dense feature grid for detailed plan evaluation.

- **Anatomy**: Category headers with icon and label, feature rows with name and tier values, checkmark or text indicators.
- **Surface**: White background with horizontal rules in border color.
- **Typography**: Category headers use body with medium weight. Feature names use body-small. Values use body-small with medium weight for included features.
- **Spacing**: Generous vertical padding in category headers (approximately 2rem top, 1rem bottom). Row height approximately 3rem with vertical centering.
- **Composition**: Four-column grid with feature name spanning first column, three plan columns equal width. Sticky or prominent top alignment for plan names and prices.

### FAQ accordion

Expandable question list for common inquiries.

- **Anatomy**: Question text, expand/collapse control icon, answer text area.
- **Surface**: Canvas-colored section background. Individual items separated by hairline rules.
- **Typography**: Section title uses section-display in Mo Sans uppercase. Questions use body with medium weight. Answers use body in regular weight.
- **Shape**: Square-ish toggle buttons with rounded corners containing plus or minus glyphs.
- **Spacing**: Section padding approximately 4rem vertical. Item padding approximately 1.5rem vertical.
- **Composition**: Full-width items with right-aligned toggle. Expanded answer text left-aligned below question with additional vertical padding.

### Primary action button

High-emphasis interactive element.

- **Anatomy**: Text label with generous horizontal padding.
- **Surface**: Default uses ink background with white text. Inverse variant uses accent background with ink text.
- **Typography**: Label token, medium weight, centered.
- **Shape**: Rounded corners at 0.5rem. Full width within card context.
- **Spacing**: Vertical padding approximately 0.875rem, horizontal padding approximately 2rem.

## Responsive behavior

The captured interface shows desktop presentation. Based on the component structures, several responsive adaptations are recommended.

The three-column pricing grid should collapse to single column on narrow viewports, with the featured dark card maintaining its priority position (likely second in stack, or first with visual emphasis). Card internal padding can reduce to 1.5rem to preserve proportions.

The comparison table presents the greatest responsive challenge. Horizontal scrolling with sticky first column, or transformation into a card-based feature list per plan, would maintain usability. Category headers would need to repeat or become sticky section dividers.

The hero headline at 5rem will require significant reduction, likely to 2.5-3rem, to prevent overflow and maintain impact. Line height may need slight increase at smaller sizes for legibility.

The FAQ accordion can remain structurally identical, with reduced section padding and slightly smaller display heading.

## Practical implementation guidance

### Preserve
- The stark black-white-pink palette hierarchy; the pink must remain rare to maintain its impact
- The extreme scale contrast between Mo Sans display and Inter body text
- The generous internal padding within cards and sections
- The full-width button treatment within pricing cards
- The uppercase, tight-letterspaced section headings in Mo Sans
- The checkmark-based feature list as the primary inclusion indicator

### Avoid
- Adding additional accent colors; the single pink is sufficient and distinctive
- Shadows or elevation effects; the system relies on flat color contrast
- Decorative illustrations or photography that compete with the typographic hierarchy
- Bold weight in Mo Sans; the regular weight at scale provides sufficient presence
- Half-step or arbitrary spacing values; maintain the 0.25rem base unit

### Recommended build order
1. Establish the type scale with Mo Sans and Inter loaded, verifying the condensed display renders correctly at hero sizes
2. Implement the color tokens with strict application rules, especially the accent restriction
3. Build the pricing card component with all three variants, ensuring the dark variant's text contrast meets standards
4. Create the billing toggle with proper active state and accessible keyboard control
5. Develop the comparison table with responsive behavior planned from the start
6. Add the FAQ accordion with smooth expand/collapse animation
7. Polish spacing and vertical rhythm across all sections

### Accessibility
- Ensure the pink accent on dark background meets minimum contrast ratios; the light pink against near-black may need verification for small text
- The Mo Sans display type at extreme sizes should not be used for critical instructions due to its condensed proportions
- Maintain visible focus indicators on all interactive elements, particularly the billing toggle and accordion controls
- Consider reduced motion preferences for the accordion expand/collapse
- The comparison table should use proper semantic structure with scope attributes for screen reader navigation

## Scope note

This guide covers the pricing page and its components as visible in the captured interface. The homepage and other site sections are not represented. Measurements are practical adaptation targets derived from visual inspection. Motion, hover states, focus styles, mobile layouts, form validation, and checkout flows are not covered. Verify licensing for all font families before production use.
