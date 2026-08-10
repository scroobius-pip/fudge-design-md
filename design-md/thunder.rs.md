# How thunder.rs is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/thunder.rs-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with THUNDER wordmark on light gray background, social icons, and blue return-to-top button](https://pin.fontofweb.com/5801?format=jpg)](https://design.withfudge.com/share/pin-5801)

[Footer section with THUNDER wordmark on light gray background, social icons, and blue return-to-top button](https://design.withfudge.com/share/pin-5801)

[![Hero section with PERSONALIZE YOUR BRAND EXPERIENCE headline on black background, red typographic specimen image, and ORDER A FONT links](https://pin.fontofweb.com/5800?format=jpg)](https://design.withfudge.com/share/pin-5800)

[Hero section with PERSONALIZE YOUR BRAND EXPERIENCE headline on black background, red typographic specimen image, and ORDER A FONT links](https://design.withfudge.com/share/pin-5800)

[![Hero section with grid-overlay typographic specimen in red and white, TRAXX wordmark, and navigation header](https://pin.fontofweb.com/5799?format=jpg)](https://design.withfudge.com/share/pin-5799)

[Hero section with grid-overlay typographic specimen in red and white, TRAXX wordmark, and navigation header](https://design.withfudge.com/share/pin-5799)

## Overview

Thunder.rs presents a bold, typography-centric identity that treats type design as both product and visual system. The site operates on a stark binary of deep black and warm off-white, with a single vivid red accent that appears in specimen imagery and promotional materials. The custom Rinter typeface—designed by Thunder Type—serves as the sole voice across all text, from monumental headlines to functional navigation labels. This creates an unusually cohesive reading experience where every word carries the same structural DNA. The layout favors asymmetric compositions with generous negative space, allowing typographic specimens to dominate the visual field while supporting text occupies precise, measured positions. The overall impression is editorial and confident: a foundry site that demonstrates its craft through its own interface.

## Colors

The color system is intentionally minimal, built on a near-binary foundation with one strategic accent. Black and off-white establish the primary reading environment, while red functions as a photographic and promotional accent that draws the eye to type specimens.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text on light backgrounds, footer wordmark, social icons |
| canvas | #f5f5f5 | Footer background, secondary page surfaces |
| surface | #0a0a0a | Hero and primary dark sections, near-black field for white display type |
| accent | #e60012 | Typographic specimen imagery, promotional highlights, energetic visual punctuation |
| muted | #888888 | Secondary text, captions, de-emphasized labels |

The dark mode dominates the homepage experience: the hero section immerses visitors in a deep black field where white display type achieves maximum contrast and impact. The off-white canvas appears in the footer, creating a deliberate tonal shift that signals the page conclusion. The red accent never appears as a flat UI element but rather as a photographic treatment within type specimens, suggesting it belongs to the product rather than the interface. This separation keeps the interface neutral while allowing the type work to carry emotional temperature. The near-black surface token (#0a0a0a) provides subtle warmth compared to pure black, preventing the harshness that can accompany absolute zero values in extended viewing.

## Typography

All text is set in Rinter, a custom display typeface by Thunder Type. The family operates at a single weight (Regular) with distinctive modular construction: letterforms build from geometric segments with visible joints and occasional gaps, creating a constructed, almost architectural presence. This single-family approach eliminates weight contrast as a hierarchical tool, relying instead on size, spacing, and case to establish information structure.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Rinter | 4rem | 400 | 1 | 0.02em | Homepage hero headlines, maximum impact statements |
| section-display | Rinter | 3rem | 400 | 1.05 | 0.01em | Section headers, secondary page titles |
| body | Rinter | 1rem | 400 | 1.5 | 0 | Descriptive paragraphs, running text |
| label | Rinter | 0.875rem | 400 | 1.2 | 0.05em | Navigation, buttons, category tags, uppercase treatments |
| navigation | Rinter | 0.875rem | 400 | 1 | 0.08em | Site header, menu items, wayfinding |

The hero-display token sets the PERSONALIZE YOUR BRAND EXPERIENCE headline at a commanding scale with tight leading that stacks lines into a solid block. The slight positive tracking prevents the modular letterforms from visually colliding at large sizes. Body text maintains generous leading for readability despite the display nature of the typeface. Label and navigation tokens share the same size but differ in tracking: labels receive moderate spacing for button and link treatments, while navigation uses wider tracking for airy, scannable menu items. Verify licensing for Rinter before production use; the family is designed by Thunder Type and may carry specific usage terms.

## Layout

The layout system embraces asymmetry and deliberate imbalance. The homepage hero divides the viewport into two unequal zones: the left two-fifths carries the headline, description, and action links, while the right three-fifths presents a large typographic specimen image. This 40/60 split creates dynamic tension and prevents the predictable centering common to portfolio sites.

Vertical rhythm follows a 6rem section spacing token, with major structural blocks separated by substantial breathing room. Within sections, component spacing of 2rem governs the relationship between related elements—headline to description, description to action links. The base unit of 0.25rem provides fine-grained control for internal padding and micro-adjustments.

The header maintains a fixed position with the THUNDER wordmark anchored to the left and a minimal hamburger menu to the right. This three-line menu icon (rendered via Ionicons) occupies the extreme corner, maximizing available space for content. The footer inverts the hero's darkness with a light canvas background, centering the THUNDER wordmark and contact information with social icons arranged horizontally beneath.

Content containers appear to use fluid widths rather than rigid max-width constraints, allowing text and images to respond to viewport dimensions. The typographic specimen images maintain square or near-square proportions, creating stable anchor points within the asymmetric layout.

## Visual language

The visual language derives from constructivist and modular type traditions. The Rinter letterforms themselves become the primary visual motif: their segmented construction, with visible breaks in strokes and geometric substitution of curves for angles, communicates precision and systematic design. This modularity extends to the grid overlays visible on specimen imagery, where faint white lines subdivide the composition into measured units.

Photographic and illustrative treatments favor high saturation and single-color dominance. The red specimens achieve intensity through color field and texture rather than complexity of form. White type set against these red fields demonstrates the face's legibility under extreme conditions—a subtle product demonstration embedded in the visual language.

Iconography is strictly functional and monochrome. Social platform icons (Instagram, Behance, Dribbble) appear as simple black glyphs on light backgrounds, matching the weight and directness of the wordmark. The return-to-top button breaks this restraint with a solid blue (#0000ff) background—an unexpected digital accent that signals utility rather than brand expression.

Line elements appear as hairline rules: short horizontal strokes precede action links, serving as visual anchors without decorative weight. These rules share the text color of their context, maintaining material consistency.

## Components

### Hero section

- **Anatomy**: Left text block containing stacked headline, description paragraph, and paired action links; right image block containing typographic specimen
- **Surface and text color**: `{colors.surface}` background, white text for headline and description, white links with hairline prefixes
- **Typography**: Headline uses `{typography.hero-display}`; description uses `{typography.body}`; action links use `{typography.label}` in uppercase
- **Shape and border**: No border, `{rounded.panel}` radius; pure rectangular fields
- **Spacing**: Text block inset from left edge by approximately `{spacing.section}`; vertical gap between headline and description is `{spacing.component}`; gap between description and links is 1.5rem
- **Composition**: Asymmetric two-column layout with text aligned left and image positioned right; image may bleed to edge or maintain internal margins
- **Variants**: Specimen image changes between views, cycling through different type treatments and color applications while maintaining the same structural position

### Text link with rule

- **Anatomy**: Short horizontal line (approximately 1.5rem width) followed by uppercase label text
- **Surface and text color**: Inherits context color; white on dark surfaces, black on light surfaces
- **Typography**: `{typography.label}` in uppercase with positive tracking
- **Shape and border**: Hairline rule at 1px height, `{rounded.button}` radius
- **Spacing**: 0.75rem gap between rule and text; 2.5rem gap between adjacent link instances
- **Composition**: Inline or flex-row alignment with items centered vertically

### Site header

- **Anatomy**: THUNDER wordmark left-aligned, hamburger menu icon right-aligned
- **Surface and text color**: Transparent or matching section background; white text on dark sections
- **Typography**: Wordmark uses `{typography.navigation}` with moderate tracking
- **Shape and border**: No visible border; clean edge with `{rounded.panel}` radius
- **Spacing**: Padding of approximately `{spacing.component}` from viewport edges
- **Composition**: Fixed or sticky positioning; full-width bar with flex space-between

### Footer

- **Anatomy**: Large THUNDER wordmark, email address, horizontal row of social icons, return-to-top button
- **Surface and text color**: `{colors.canvas}` background, `{colors.ink}` text and icons
- **Typography**: Wordmark at display scale (approximately `{typography.section-display}`); email at `{typography.body}`; social icons as glyph forms
- **Shape and border**: No border; clean rectangular field with `{rounded.panel}` radius
- **Spacing**: Generous vertical padding of `{spacing.section}`; internal element spacing of `{spacing.component}`
- **Composition**: Centered alignment for all elements; social icons in horizontal flex row with even gaps

### Return-to-top button

- **Anatomy**: Square button containing upward arrow icon
- **Surface and text color**: Solid blue (#0000ff) background with white icon
- **Shape and border**: Sharp corners (`{rounded.button}` radius), square aspect ratio
- **Spacing**: Fixed position at bottom-right corner with viewport margin of `{spacing.component}`
- **Composition**: Floats above content layer; highest z-index

## Responsive behavior

The asymmetric hero layout should collapse to a single column on narrow viewports, with the typographic specimen stacking below the text block. Headline sizes should scale down proportionally: hero-display may reduce to `{typography.section-display}` or smaller to prevent overflow. The text link rules should remain visible but may shorten slightly.

The header should maintain its left-right structure, though the wordmark may scale down and the menu icon should remain touch-accessible at minimum 44×44dp. Footer elements should stack vertically on narrow screens, with the wordmark remaining prominent and social icons maintaining their horizontal arrangement.

The return-to-top button should remain fixed but may reduce in size on mobile to avoid obscuring content. Touch targets for all interactive elements should meet minimum size requirements.

## Practical implementation guidance

### Preserve
- The single-typeface discipline: Rinter for every text element without exception
- The stark black/white binary as the foundation; reserve red for specimen imagery only
- The asymmetric 40/60 hero composition on desktop
- The hairline rule prefix for action links
- The modular, constructed character of Rinter letterforms at all sizes
- The square specimen image proportions and grid-overlay aesthetic
- The zero-radius sharp corners throughout all components

### Avoid
- Introducing additional font families or weights that dilute the systematic voice
- Using the red accent as a flat UI color (buttons, backgrounds, borders)
- Centering the hero text block; the left alignment is integral to the asymmetric tension
- Decorative borders, shadows, or gradients that compete with the type specimens
- Rounded corners on primary components; the system favors sharp, constructed edges

### Recommended build order
1. Establish the black surface and off-white canvas as base backgrounds
2. Implement Rinter at body size with proper line height and zero tracking
3. Build the hero section with asymmetric layout and hero-display headline scale
4. Add the text-link component with hairline rule and uppercase label
5. Construct the header with wordmark and minimal menu icon
6. Implement the footer with inverted background and centered content
7. Add the return-to-top button as a fixed-position utility element
8. Integrate specimen imagery with consistent square proportions

### Accessibility
- Ensure white text on `{colors.surface}` meets WCAG AA contrast (the near-black surface helps)
- Provide visible focus indicators for the hamburger menu and all links; the current system relies on minimal UI, so focus states need deliberate design
- Consider adding `aria-label` to the social icon links and return-to-top button
- The Rinter typeface's modular construction may reduce legibility for some readers at body size; test with actual users and consider offering a system-font fallback for user preference
- Maintain touch targets at 44×44dp minimum for the menu icon and return-to-top button

## Scope note

This guide covers the homepage hero, header, and footer surfaces visible in the supplied images. Interior pages, mobile navigation behavior, hover and focus states, loading sequences, and form components are not represented. Measurements are practical adaptation targets.
