# How dennissnellenberg.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/dennissnellenberg.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero section with large statement text and highlighted blue selection on secondary description paragraph](https://pin.fontofweb.com/5784?format=jpg)](https://design.withfudge.com/share/pin-5784)

[Homepage hero section with large statement text and highlighted blue selection on secondary description paragraph](https://design.withfudge.com/share/pin-5784)

[![Clean two-column text layout with oversized mission statement and smaller supporting paragraph on white background](https://pin.fontofweb.com/5783?format=jpg)](https://design.withfudge.com/share/pin-5783)

[Clean two-column text layout with oversized mission statement and smaller supporting paragraph on white background](https://design.withfudge.com/share/pin-5783)

[![Project list entries with large bold client names and right-aligned service category labels separated by hairline rules](https://pin.fontofweb.com/5782?format=jpg)](https://design.withfudge.com/share/pin-5782)

[Project list entries with large bold client names and right-aligned service category labels separated by hairline rules](https://design.withfudge.com/share/pin-5782)

[![Dark atmospheric photography background with centered white testimonial or bio text overlay](https://pin.fontofweb.com/5781?format=jpg)](https://design.withfudge.com/share/pin-5781)

[Dark atmospheric photography background with centered white testimonial or bio text overlay](https://design.withfudge.com/share/pin-5781)

## Overview

This design system captures the visual language of a senior freelance designer and developer's portfolio. The aesthetic is deliberately restrained: maximum contrast between near-black typography and pure white canvas, with typography doing the heavy lifting of establishing hierarchy and tone. The system avoids decorative elements in favor of precise spacing, confident scale, and editorial composition. Every element serves the work being presented rather than competing with it.

The homepage establishes immediate authority through an oversized statement that occupies significant vertical space, paired with a more measured supporting paragraph. Project listings function as typographic objects themselves, with client names rendered at display scale and service descriptors tucked to the right in a smaller, lighter weight. The overall impression is of someone who trusts their craft enough to let whitespace speak.

## Colors

The palette is intentionally minimal, built on a foundation of pure black and white with a single functional accent. This restraint allows project imagery to provide color and emotional temperature while the interface remains neutral and timeless.

| token | value | use |
|---|---|---|
| canvas | `#FFFFFF` | Primary page background, all light surfaces, text on dark overlays |
| ink | `#1A1A1A` | Primary text, headings, project names, body copy |
| muted-ink | `#666666` | Secondary text, labels, captions, supporting descriptions |
| accent-blue | `#4A6CF7` | Text selection highlight, interactive emphasis states |
| surface-dark | `#0F0F0F` | Dark section backgrounds, image overlays, cinematic text treatments |

The light mode dominates the experience. White canvas extends edge to edge with no visible page borders or container shadows. The near-black ink provides softer readability than pure `#000000` while maintaining decisive contrast. The muted-ink appears in service labels, metadata, and secondary paragraphs where hierarchy needs to step back. The accent-blue appears only in functional contexts—most visibly as the browser text selection color, which creates a striking moment of saturated color against the otherwise monochrome interface. The surface-dark anchors occasional immersive sections where photography or video fills the viewport and white text requires a dark ground for legibility.

## Typography

The system relies on a single type family, Neue Montreal, designed by Mathieu Desjardins and Sebastien Tremblay of Pangram Pangram Foundry. The family is used in Regular weight exclusively; weight contrast is achieved through scale and color rather than bolder cuts. This creates a cohesive, almost monolithic typographic texture that feels contemporary and self-assured.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Neue Montreal | 3.5rem | 400 | 1.1 | -0.02em | Homepage mission statement, major page headings |
| section-display | Neue Montreal | 2.5rem | 400 | 1.15 | -0.01em | Project names in listings, section titles |
| body-large | Neue Montreal | 1.25rem | 400 | 1.5 | 0em | Introductory paragraphs, prominent descriptions |
| body | Neue Montreal | 1rem | 400 | 1.6 | 0em | Standard paragraphs, longer reading text |
| label | Neue Montreal | 0.875rem | 400 | 1.4 | 0.01em | Service categories, metadata, captions |
| navigation | Neue Montreal | 0.875rem | 400 | 1 | 0em | Menu items, links, utility text |

The type scale is built on a 4px relative unit. Hero-display at 56px (3.5rem) establishes commanding presence without feeling theatrical. Section-display at 40px (2.5rem) bridges display and reading sizes for project names that need impact at list scale. Body-large at 20px (1.25rem) serves the homepage's secondary column where slightly more presence than standard body is needed. The label and navigation tokens share the same 14px size but differ in tracking and line-height to suit their contexts—labels need slight openness for readability at small sizes, while navigation benefits from tighter vertical metrics.

Verify licensing for Neue Montreal through Pangram Pangram Foundry before production use.

## Layout

The layout philosophy is editorial and asymmetric. The homepage divides into a dominant left column for the primary statement and a narrower right column for supporting context. This ratio feels approximately 60/40 or 65/35, with the left column carrying visual weight through scale rather than width alone.

Project listings abandon the two-column model for a full-width horizontal treatment. Each entry spans the available width with the client name left-aligned and the service descriptor right-aligned, separated by a hairline rule above and below. This creates a tabular rhythm that scans efficiently while maintaining the system's typographic confidence.

Vertical spacing is generous. Sections breathe with substantial padding—approximately 6rem (96px) between major content blocks. Within sections, text blocks maintain 1.5rem (24px) between paragraphs and related elements. The project list items appear to carry roughly 2rem (32px) of internal vertical padding, allowing the large names to sit comfortably within their horizontal rules.

No border-radius appears on any visible element. Corners are sharp throughout, reinforcing the system's precision and refusal of decorative softness. The overall container behavior suggests a max-width constraint with centered alignment, though the project list and full-bleed sections may break this boundary.

## Visual language

The visual character is austere, confident, and gallery-like. Photography and project imagery provide the only color and texture variation; the interface itself functions as a neutral frame. When dark sections appear, they are fully immersive—photography fills the viewport with text overlaid in white, creating cinematic contrast against the otherwise bright experience.

Hairline rules in muted gray or near-transparent black separate project entries and potentially other list structures. These rules are likely 1px solid, functioning as optical dividers rather as than heavy separators. The cumulative effect is of a printed annual or exhibition catalog translated to screen.

Selection states break the monochrome rule with a vivid blue highlight, suggesting the designer's willingness to let functional moments carry personality. This single chromatic intervention prevents the system from feeling cold or overly institutional.

Imagery is treated with respect—full-bleed when featured, contained with generous margins when supporting. No visible borders, shadows, or frames surround project thumbnails or photographs. The work speaks without interface ornament.

## Components

### Project list item

- **Anatomy**: Full-width row containing large client name left-aligned, service category right-aligned, with horizontal rules above and below
- **Surface**: Transparent background, inherits canvas color
- **Typography**: Client name uses `{typography.section-display}`; service category uses `{typography.label}` in muted-ink
- **Shape**: Zero border-radius; full-width horizontal rules at 1px
- **Spacing**: Approximately 2rem vertical padding within each row
- **Composition**: Flexbox or grid with space-between alignment; rules extend edge to edge or to container bounds
- **Variants**: No visible hover or active states in still images; likely subtle color shift or rule animation on interaction

### Text block (homepage hero)

- **Anatomy**: Two-column layout with primary statement left, supporting paragraph right
- **Surface**: White canvas background
- **Typography**: Primary statement uses `{typography.hero-display}` in ink; supporting paragraph uses `{typography.body-large}` in muted-ink or ink
- **Shape**: No containing panel or card; text sits directly on canvas
- **Spacing**: Generous top margin to position below viewport edge; columns separated by substantial gutter
- **Composition**: Asymmetric two-column with left column wider and more prominent

### Dark overlay section

- **Anatomy**: Full-bleed photography or video background with centered text block
- **Surface**: Dark imagery with `{colors.surface-dark}` fallback; white text at high contrast
- **Typography**: Body or body-large in white, centered or left-aligned depending on content
- **Shape**: Full viewport width, no border-radius
- **Spacing**: Substantial vertical padding to center text within the frame
- **Composition**: Text positioned for readability against image; likely subtle dark gradient overlay for insurance

### Navigation

- **Anatomy**: Minimal header with site identifier and menu links
- **Surface**: Transparent or white, blending with canvas
- **Typography**: `{typography.navigation}` in ink
- **Shape**: No visible background panel or shadow
- **Spacing**: Compact vertical padding, likely 1rem to 1.5rem
- **Composition**: Horizontal arrangement with logo or name left, links right

## Responsive behavior

The two-column homepage layout should stack vertically on narrower viewports, with the primary statement preceding the supporting paragraph. Project list items may need to reposition service categories below client names rather than right-aligned, or reduce the display size to prevent horizontal overflow.

The generous section spacing should compress proportionally—perhaps to 4rem on tablet and 3rem on mobile—while maintaining the system's airy character. Typography scales should reduce by approximately 20-25% on mobile, with hero-display dropping to around 2.5rem and section-display to 1.75rem to preserve line-length comfort.

Dark overlay sections require particular attention to text contrast across varying image brightness; a consistent semi-transparent dark scrim behind text improves reliability.

## Practical implementation guidance

### Preserve
- The stark monochrome foundation with single accent color
- Generous whitespace and section breathing room
- Sharp corners throughout—no border-radius on any element
- Asymmetric two-column editorial layouts at desktop
- Full-bleed imagery with text overlay for immersive moments
- Single-family typography with hierarchy through scale alone

### Avoid
- Adding secondary type families or weight variations
- Decorative shadows, borders, or card treatments
- Rounded buttons or panels that contradict the system's precision
- Pure black (`#000000`) in place of the softer near-black ink
- Crowding project list items with excessive vertical density

### Recommended build order
1. Establish the 4px relative unit and type scale with Neue Montreal
2. Implement the canvas/ink/muted-ink color foundation
3. Build the two-column homepage hero with correct proportions
4. Create the project list component with hairline rules and flex alignment
5. Add the dark overlay section for immersive content
6. Fine-tune selection colors and interactive states

### Accessibility
- Maintain minimum 4.5:1 contrast for all body text; the ink-on-canvas pairing exceeds this significantly
- Ensure dark overlay sections include sufficient contrast insurance, either through image selection or a semi-transparent dark layer
- The accent-blue selection color should meet contrast requirements against both white and dark backgrounds if used for interactive elements
- Respect reduced-motion preferences for any scroll-triggered or hover animations
- Consider focus indicators that match the system's precision—likely a thin outline in ink or accent-blue rather than default browser styles

## Scope note

This guide covers the homepage and project detail surfaces visible in the supplied images. Navigation dropdowns, footer content, contact forms, and mobile-specific layouts are not represented. Motion design, loading states, and cursor interactions are not documented. Measurements are practical adaptation targets derived from visual inspection of the interface.
