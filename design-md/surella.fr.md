# How surella.fr is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/surella.fr-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with oversized 'SURELLA' wordmark in cream on vivid orange-red, circular line-art portraits, and legal links with wavy underlines](https://pin.fontofweb.com/3726?format=jpg)](https://design.withfudge.com/share/pin-3726)

[Footer section with oversized 'SURELLA' wordmark in cream on vivid orange-red, circular line-art portraits, and legal links with wavy underlines](https://design.withfudge.com/share/pin-3726)

[![Minimal cream canvas with bold black ink illustration of two hands clinking wine glasses, orange-red top border, and floating circular review button](https://pin.fontofweb.com/3725?format=jpg)](https://design.withfudge.com/share/pin-3725)

[Minimal cream canvas with bold black ink illustration of two hands clinking wine glasses, orange-red top border, and floating circular review button](https://design.withfudge.com/share/pin-3725)

[![Contact reservation section with stacked white display type 'UNE RÉSA ? UNE QUESTION ?' on orange-red, minimal form fields, and cream circular send button](https://pin.fontofweb.com/3724?format=jpg)](https://design.withfudge.com/share/pin-3724)

[Contact reservation section with stacked white display type 'UNE RÉSA ? UNE QUESTION ?' on orange-red, minimal form fields, and cream circular send button](https://design.withfudge.com/share/pin-3724)

[![About section with interior photograph of wooden bar and 'CAISSE' sign, paired with orange-red body text and signature 'Lisa et Lucie' on cream background](https://pin.fontofweb.com/3723?format=jpg)](https://design.withfudge.com/share/pin-3723)

[About section with interior photograph of wooden bar and 'CAISSE' sign, paired with orange-red body text and signature 'Lisa et Lucie' on cream background](https://design.withfudge.com/share/pin-3723)

## Overview

Surella presents a confident, personality-driven visual identity for a bar, bistro, and wine cave in Barsac, France. The system balances high-contrast energy with approachable warmth through a limited palette of vivid orange-red and soft cream, punctuated by bold black ink illustrations. The design language speaks directly to the venue's character: unpretentious, convivial, and distinctly French.

The visual hierarchy relies on dramatic scale contrasts. Oversized display typography in a chunky, rounded sans-serif commands attention in headers and the monumental footer wordmark, while a clean geometric sans-serif handles body text and functional labels with quiet efficiency. Hand-drawn line illustrations of wine glasses, clinking hands, and portrait profiles reinforce the human, craft-oriented atmosphere. The composition alternates between full-bleed orange-red sections and expansive cream fields, creating rhythmic visual breathing room across the page.

## Colors

| token | value | use |
|---|---|---|
| action | #FF3D00 | Primary brand surface, button fills, header backgrounds, footer ground, text emphasis on cream |
| canvas | #F5E6E0 | Main page background, photography matting, neutral resting surface |
| ink | #1A1A1A | Illustration strokes, photographic content, high-contrast moments |
| cream | #FAF0ED | Text on orange-red surfaces, secondary button fills, wordmark color |

The color system operates in two dominant modes. The **vivid mode** floods sections with action orange-red, using cream text for maximum contrast and impact. This mode carries headlines, calls to action, and the monumental footer wordmark. The **resting mode** inverts to cream or canvas backgrounds, where action orange-red becomes the text color for body copy and emphasis. Black ink appears exclusively in illustrations and photography, never as a UI surface color.

The warm undertone of the cream—slightly rosier than neutral off-white—harmonizes with the orange-red to avoid the clinical feel of pure white against aggressive color. No gradients, shadows, or translucent overlays are present in the visible system; color relationships are flat and declarative.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Bowlby One | 6rem | 400 | 0.9 | 0.02em | Footer wordmark, monumental headers |
| section-display | Bowlby One | 4rem | 400 | 0.95 | 0.01em | Section headlines, reservation CTA |
| body | Urbanist | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, form labels |
| body-small | Urbanist | 0.875rem | 400 | 1.5 | 0 | Captions, secondary descriptions |
| label | Urbanist | 0.75rem | 400 | 1.4 | 0.05em | Buttons, legal links, metadata |
| signature | Bowlby One | 1.25rem | 400 | 1.2 | 0.02em | Owner names, personal sign-offs |

Bowlby One, designed by Vernon Adams, supplies the display voice: a heavy, rounded, slightly irregular sans-serif that feels hand-finished and approachable at scale. It appears exclusively in uppercase, leveraging its geometric solidity for headlines and the massive "SURELLA" footer wordmark. Urbanist, designed by Corey Hu, provides the functional voice: a modern geometric sans-serif with clean proportions and open apertures, optimized for readability in body text and small labels.

The type scale builds from a 4px relative unit. Display sizes at 64px and 96px create dramatic hierarchy against body text at 16px. Line heights stay tight for display (0.9–0.95) to maintain visual density, while body text relaxes to 1.6 for comfortable reading in longer passages. Letter spacing remains subtle throughout, with slight positive tracking in labels for all-caps clarity.

Verify licensing for these families before production use. Bowlby One is available through Google Fonts; Urbanist requires confirmation of licensing terms for the specific deployment.

## Layout

The page structure follows a full-bleed, section-based rhythm with generous vertical spacing. Major sections alternate between vivid orange-red and cream backgrounds, creating clear territorial boundaries without visible borders or separators.

Content alignment varies by section type. Text-heavy sections like the about narrative use asymmetric two-column layouts: photography occupies roughly 40% width on the left, while text flows in the remaining 60% with substantial internal padding. Form sections center their content with generous margins, placing the headline left-aligned above a right-aligned form stack. The footer compresses legal metadata into a thin horizontal band above the monumental wordmark.

Horizontal padding scales with section importance. Standard content sections maintain comfortable side margins estimated at 4–6rem. The footer wordmark breaks this convention, bleeding to the viewport edges to maximize impact. No visible grid lines or container borders frame content; spacing alone defines structure.

The floating review button ("LAISSER UN AVIS") maintains fixed positioning in the lower right corner across sections, providing persistent access without interfering with primary content flow.

## Visual language

Illustration style defines the system's emotional character. Black ink line drawings with variable stroke weight evoke spontaneous sketching: wine glasses, toasting hands, and circular portrait profiles appear as confident single-weight contours with occasional thicker accents. The style references traditional bistro chalkboard art and wine-label sketching, reinforcing the venue's craft authenticity.

Photography appears in documentary style: natural light, warm interiors, unposed moments of the actual space. The "CAISSE" photograph shows the wooden bar, vintage signage, and everyday objects without stylized filtering. Photos sit flush within their containers without rounded corners or shadow treatments.

Decorative details include wavy underlines beneath footer links and the circular frame motif surrounding portrait illustrations. These elements repeat at consistent sizes, creating recognizable brand punctuation without cluttering the composition.

The overall density is deliberately restrained. Large type and generous whitespace prevent the vivid orange-red from overwhelming the viewer. Even information-dense sections like the contact form maintain breathing room through minimal field styling and abundant vertical padding.

## Components

### Wordmark
- **Anatomy**: Single line of text, all uppercase, dramatically oversized
- **Surface**: Cream text on action orange-red ground
- **Typography**: `{typography.hero-display}` at viewport-spanning scale
- **Shape**: No border radius, full bleed left and right
- **Spacing**: Tight leading (0.9) creates stacked, overlapping visual mass
- **Composition**: Anchored at section bottom, cropped by viewport edges

### Primary action button
- **Anatomy**: Circular container with centered two-line label
- **Surface**: Action orange-red fill, cream text
- **Typography**: `{typography.label}`, uppercase, two lines ("LAISSER / UN AVIS")
- **Shape**: Full circle via `9999px` radius
- **Spacing**: Internal padding approximately 1.5rem from text to edge
- **Composition**: Fixed position lower-right corner, overlaps content

### Secondary action button
- **Anatomy**: Circular container with centered single-line or two-line label
- **Surface**: Cream fill, action orange-red text
- **Typography**: `{typography.label}`, uppercase
- **Shape**: Full circle via `9999px` radius
- **Spacing**: Similar padding to primary variant
- **Composition**: Inline within forms, right-aligned

### Text input
- **Anatomy**: Single underline only, no visible container border or background
- **Surface**: Transparent on action orange-red ground
- **Typography**: `{typography.body}`, placeholder text in cream with reduced opacity
- **Shape**: Zero radius, 1px bottom border in cream
- **Spacing**: Generous vertical padding between fields, approximately 2rem
- **Composition**: Stacked vertically, right-aligned within form section

### About narrative
- **Anatomy**: Photograph left, text block right, signature below
- **Surface**: Cream background, action orange-red body text
- **Typography**: `{typography.body}` for narrative, `{typography.signature}` for "Lisa et Lucie"
- **Shape**: Rectangular photograph without radius or shadow
- **Spacing**: Substantial gap between image and text, approximately 4rem
- **Composition**: Asymmetric two-column, image roughly 40% width

### Footer
- **Anatomy**: Legal links left, credits center, portrait illustrations right, wordmark below
- **Surface**: Action orange-red throughout
- **Typography**: `{typography.label}` for links and credits, wavy underline decoration
- **Shape**: Circular line-art portraits with thin cream strokes
- **Spacing**: Compact top band for metadata, expansive area for wordmark
- **Composition**: Three-column metadata above full-width wordmark

## Responsive behavior

The system should maintain its bold character across viewport sizes while adapting scale and composition. The monumental wordmark requires careful handling: at narrow widths, letterforms should scale down proportionally or allow horizontal scrolling to preserve their designed impact rather than breaking to multiple lines.

The two-column about section should stack vertically on narrow viewports, with the photograph moving above the text. The asymmetric padding should reduce to maintain readable line lengths without excessive margins.

The fixed-position review button should remain accessible without obscuring essential content. Consider reducing its diameter slightly on very small screens while preserving the circular form and two-line label stacking.

Form fields in the contact section should expand to full width on narrow viewports, maintaining the underline-only treatment and generous vertical spacing between inputs.

## Practical implementation guidance

### Preserve
- The stark orange-red and cream polarity; do not introduce intermediate tints or gradients
- The hand-drawn illustration quality; avoid vector-perfect geometric replacements
- The tight display line heights that create dense, impactful headlines
- The full-bleed wordmark cropping at viewport edges
- The circular button motif as a consistent interactive signature

### Avoid
- Adding drop shadows or elevation effects; the system is flat and declarative
- Using Bowlby One for body text or long passages; its weight and tight spacing impair readability
- Introducing additional accent colors; the two-color system is intentionally restrained
- Rounding photograph corners or adding frame treatments
- Replacing the wavy underlines with standard straight underlines

### Recommended build order
1. Establish the color tokens and apply to body background and text defaults
2. Implement Bowlby One for the hero wordmark and section headlines
3. Add Urbanist for body text and labels with appropriate size and leading
4. Build the circular button component with both primary and secondary variants
5. Create the underline-only form input style
6. Implement the two-column about layout with asymmetric proportions
7. Add the fixed-position review button
8. Integrate illustration assets with consistent stroke treatment

### Accessibility
- Ensure cream text on orange-red meets minimum contrast ratios; the vivid combination may need verification at smaller sizes
- Provide visible focus indicators for the underline-only form inputs, as the minimal surface treatment risks invisibility
- Consider motion sensitivity for any scroll-triggered animations of the wordmark or illustrations
- Maintain touch targets at minimum 44px for the circular buttons, which may require diameter adjustment on smaller screens

## Scope note

This guide covers the visible landing and contact page surfaces of surella.fr, including the footer, about narrative, reservation form, and persistent review action. Interior pages, menu presentations, mobile-specific layouts, hover and focus states, and loading behavior are not represented in the available material. Measurements are practical adaptation targets derived from visual inspection.
