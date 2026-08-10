# How ocoya.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ocoya.com-design)

Last updated: 2026-08-10

## Captured pages

[![Features section with dark cards showing email presets, best times to post, media library, and link shortening with product screenshots](https://pin.fontofweb.com/7673?format=jpg)](https://design.withfudge.com/share/pin-7673)

[Features section with dark cards showing email presets, best times to post, media library, and link shortening with product screenshots](https://design.withfudge.com/share/pin-7673)

[![Social trend section with three content cards featuring Pinterest, X.com, and Facebook posts with gaming and AI imagery](https://pin.fontofweb.com/7672?format=jpg)](https://design.withfudge.com/share/pin-7672)

[Social trend section with three content cards featuring Pinterest, X.com, and Facebook posts with gaming and AI imagery](https://design.withfudge.com/share/pin-7672)

[![Platform section with three audience cards for freelancers, brands, and teams with planner and template UI previews](https://pin.fontofweb.com/7671?format=jpg)](https://design.withfudge.com/share/pin-7671)

[Platform section with three audience cards for freelancers, brands, and teams with planner and template UI previews](https://design.withfudge.com/share/pin-7671)

[![Publishing section with social integrations grid, ecommerce badges, plugin pills, and multi-level approval workflow](https://pin.fontofweb.com/7670?format=jpg)](https://design.withfudge.com/share/pin-7670)

[Publishing section with social integrations grid, ecommerce badges, plugin pills, and multi-level approval workflow](https://design.withfudge.com/share/pin-7670)

## Overview

Ocoya's marketing site presents a dark, immersive environment designed to showcase AI-powered social media management tools. The visual system relies on near-black backgrounds, warm off-white typography, and muted gray secondary text to create a premium SaaS aesthetic. The design organizes content into rounded cards that float against the deep canvas, each containing product screenshots, feature descriptions, or social content previews. The hierarchy moves from centered section headers with small category badges down to multi-column card grids, then into detailed feature blocks with embedded UI mockups. The overall impression is technical yet approachable, using generous whitespace within cards and tight gaps between them to maintain visual density without clutter. Product imagery inside cards uses realistic interface screenshots and social media posts, giving visitors immediate recognition of the platform's capabilities.

## Colors

The palette is intentionally restrained, built around a dark-mode foundation with two functional accent roles.

| token | hex | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #18181B | Feature cards, content containers |
| surface-elevated | #09090B | Pills, badges, subtle raised elements |
| ink | #FAFAFA | Primary headings, card titles, active text |
| muted-ink | #71717A | Body copy, descriptions, secondary labels |
| action | #0000EE | Links, interactive text indicators |
| border-subtle | #18181B | Card boundaries on matching backgrounds |

The canvas and surface colors create a shallow depth system: pure black recedes while the slightly lifted #18181B defines card boundaries through luminance difference rather than visible borders. The ink color reads as warm white against the dark ground, avoiding the clinical harshness of pure #FFFFFF. Muted ink serves all descriptive and supporting text, appearing at roughly 45% luminance against black for comfortable extended reading. The action blue appears sparingly, reserved for link states and interactive cues. No gradient fills or shadow tints are used in the visible interface; depth comes entirely from background layering and card elevation.

## Typography

Two families drive the typographic hierarchy: Plus Jakarta Sans for display and heading work, Inter Tight for body and interface text. System sans-serif serves at small sizes for navigation and metadata.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Plus Jakarta Sans | 3rem | 600 | 1.4 | -0.04em | Section headlines, page titles |
| section-display | Plus Jakarta Sans | 1.875rem | 600 | 1.4 | -0.04em | Card group headings, sub-section titles |
| card-heading | Plus Jakarta Sans | 1.5rem | 600 | 1.5 | -0.03em | Individual card titles, feature names |
| body | Inter Tight | 1rem | 400 | 1.8 | 0.03em | Standard descriptions, feature explanations |
| body-large | Inter Tight | 1.125rem | 400 | 1.6 | 0.02em | Hero descriptions, introductory paragraphs |
| body-emphasis | Inter Tight | 1rem | 500 | 1.8 | 0.03em | Links, CTAs, highlighted phrases |
| label | Inter Tight | 0.875rem | 600 | 1.5 | 0.03em | Small labels, integration names, metadata |
| navigation | System | 0.75rem | 400 | 1.5 | normal | Nav items, category badges, timestamps |

Plus Jakarta Sans carries a geometric, contemporary character with tight negative tracking that gives headlines a compact, confident presence. Inter Tight provides a neutral, highly legible reading experience with slightly expanded tracking for body sizes, compensating for the dark background's tendency to close up letterforms. The weight distinction between Regular (400), Medium (500), and Semibold (600) is preserved where the design uses it: body text stays light, emphasis moves to Medium, and headings claim Semibold.

Plus Jakarta Sans is designed by Gumpita Rahayu of Tokotype. Inter Tight is designed by Rasmus Andersson of Rsms. Verify licensing for these families before production use.

## Layout

The page uses a centered, contained layout with generous horizontal margins and a clear center-axis alignment for all section headers. Content max-width appears to sit around a standard large breakpoint, with text blocks constrained to readable measure even when cards expand to fill available width.

Section spacing follows a rhythmic pattern: category badges sit close above headlines, headlines maintain moderate separation from descriptive paragraphs, and paragraphs give way to card grids with consistent vertical gaps. Cards themselves use internal padding of 2.5rem to 3.125rem, creating breathing room for text and embedded imagery.

The card grid system shows two dominant patterns: a two-column layout for feature blocks with mixed content density, and a three-column layout for audience segmentation or content previews. Gap spacing between cards measures 1.25rem, tight enough to read as a unified surface but loose enough to preserve individual card boundaries. Some cards span full rows while others sit in asymmetric arrangements, particularly where product screenshots demand more vertical space.

Embedded imagery within cards breaks the internal padding boundary, often sitting flush to card edges or bleeding slightly into the surrounding space. This creates visual tension between the rounded container and the rectangular screenshot content. Cards with multiple internal elements—such as integration grids or approval workflows—use smaller internal gaps and left-aligned stacking rather than centered distribution.

## Visual language

The visual identity leans into dark-mode sophistication with a technical product focus. Rounded corners are a defining feature: 15px for standard cards, 25px for larger feature blocks, 40px for hero containers, and full pills for integration badges and action labels. No sharp corners appear in the component layer; even small badges carry 6px rounding.

Imagery strategy centers on realistic product screenshots and recognizable social media content. Screenshots show actual interface states—calendars, approval dialogs, analytics charts—rather than abstract illustrations. Social content cards display real platform branding (Pinterest, X, Facebook) with authentic post layouts, grounding the product in recognizable workflows. Photography appears in social post previews, not as decorative hero backgrounds.

The absence of gradients, shadows, and decorative patterns keeps attention on content. Visual interest comes from the contrast between dark containers and bright screenshot content, from the typographic tension between tight headlines and open body text, and from the geometric rhythm of rounded cards against the rectilinear grid. Small animated or interactive elements—sparkle icons, cursor indicators—add personality without disrupting the restrained palette.

## Components

### Section header
- **Anatomy**: Centered stack of category badge, headline, and optional description
- **Surface**: Transparent, sitting directly on canvas
- **Typography**: Badge uses `{typography.label}` in white on dark rounded rectangle; headline uses `{typography.hero-display}`; description uses `{typography.body-large}` in muted ink
- **Spacing**: Tight vertical stack with 0.625rem between badge and headline, 1.25rem between headline and description

### Feature card
- **Anatomy**: Rounded container with top text block and bottom media area
- **Surface**: `{colors.surface}` background, `{rounded.card}` corners
- **Typography**: Title uses `{typography.card-heading}` in ink; description uses `{typography.body}` in muted ink
- **Spacing**: `{spacing.card-padding}` internal padding; text and media separated by 1.875rem
- **Composition**: Text left-aligned, media may be centered or full-bleed below
- **Variants**: Standard size (15px radius), large (25px radius with 40px padding), extra-large (40px radius for hero containers)

### Content preview card
- **Anatomy**: Header with avatar and platform icon, body text, and bottom media thumbnail
- **Surface**: `{colors.surface}` with subtle internal depth from content layering
- **Typography**: Source name in `{typography.body-emphasis}`, platform in `{typography.label}` muted, body in `{typography.body}` muted, timestamp in `{typography.navigation}`
- **Composition**: Avatar and platform icon on opposite sides of header; body text truncated or abbreviated; media thumbnail with 15px rounding at bottom

### Integration pill
- **Anatomy**: Horizontal container with platform icon and name
- **Surface**: `{colors.surface-elevated}` background, `{rounded.pill}` full rounding
- **Typography**: `{typography.label}` in ink
- **Spacing**: Compact horizontal padding, icon and text with 0.625rem gap
- **Composition**: Inline arrangement, multiple pills wrap with standard gap

### Social proof badge
- **Anatomy**: Icon and metric text
- **Surface**: Transparent
- **Typography**: `{typography.body-emphasis}` in ink
- **Composition**: Centered inline, icon preceding text with tight spacing

### Text link with arrow
- **Anatomy**: Label text and right-pointing chevron
- **Typography**: `{typography.body-emphasis}` in ink
- **Composition**: Inline, chevron slightly elevated or matching baseline
- **States**: Visible as static element; hover behavior not determined

## Responsive behavior

The layout appears optimized for desktop viewing with substantial horizontal space. The two-column and three-column card grids would require breakpoint adaptation for narrower viewports. At medium widths, three-column grids should collapse to two columns with maintained card proportions. At narrow widths, all grids should stack to single column with full-width cards preserving internal padding.

Text scaling should reduce headline sizes proportionally: hero-display from 3rem to 2.25rem at medium widths, then to 1.875rem at narrow widths. Body text may remain at 1rem across breakpoints given Inter Tight's legibility. Card internal padding should reduce from 3.125rem to 2.5rem to 1.875rem as viewport narrows.

Embedded screenshots and social media previews should maintain aspect ratio, scaling down within card boundaries rather than cropping. Integration pill grids should wrap naturally with standard gap spacing.

## Practical implementation guidance

### Preserve
- The near-black canvas with warm off-white ink; this contrast defines the brand atmosphere
- Generous card padding and tight external gaps; the ratio creates the floating card effect
- Plus Jakarta Sans for all display work with negative tracking; the tight setting is distinctive
- Realistic product screenshots over illustrations; authenticity supports the technical positioning
- Full pill rounding for small labels and badges; partial rounding for larger containers

### Avoid
- Pure white (#FFFFFF) text; the warm #FAFAFA prevents eye strain on dark backgrounds
- Sharp corners on any content container; rounding is consistent across all components
- Drop shadows for card elevation; depth comes from background color layers only
- Decorative gradients or patterns; the restraint is intentional
- Centered text within cards; left alignment maintains scannability

### Recommended build order
1. Establish the dark canvas and surface color tokens
2. Implement Plus Jakarta Sans with the tight tracking settings for headlines
3. Build the section header component with badge, headline, and description stack
4. Create the base feature card with consistent padding and rounding
5. Add the two-column and three-column grid layouts
6. Implement integration pills and text links
7. Integrate product screenshot and social content imagery
8. Refine responsive breakpoints for grid collapse and text scaling

### Accessibility
- Maintain a minimum contrast ratio of 7:1 for ink (#FAFAFA) on canvas (#000000)
- Muted ink (#71717A) on canvas achieves approximately 4.5:1; consider lightening to 5:1 for small text
- Ensure product screenshots include alt text describing the interface state shown
- Preserve focus indicators for keyboard navigation; the dark surface may require custom focus rings in action blue or white
- Test reduced-motion preferences if scroll animations are implemented

## Scope note

This guide covers the desktop marketing page surface for Ocoya's homepage, including feature sections, audience segmentation, and social content previews. Mobile breakpoints, navigation header, footer, pricing tables, and interactive states such as hover, focus, and loading are not represented in the supplied material. Measurements derive from the documented interface values.
