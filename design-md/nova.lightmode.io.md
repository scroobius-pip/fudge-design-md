# How nova.lightmode.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/nova.lightmode.io-design)

Last updated: 2026-08-10

## Captured pages

[![Testimonials section with three dark cards featuring user quotes and avatars against a near-black background with subtle dot-grid pattern.](https://pin.fontofweb.com/6696?format=jpg)](https://design.withfudge.com/share/pin-6696)

[Testimonials section with three dark cards featuring user quotes and avatars against a near-black background with subtle dot-grid pattern.](https://design.withfudge.com/share/pin-6696)

[![Feature showcase for AI cards and website cards with product screenshots, partner logos, and pill-shaped labels on dark canvas.](https://pin.fontofweb.com/6695?format=jpg)](https://design.withfudge.com/share/pin-6695)

[Feature showcase for AI cards and website cards with product screenshots, partner logos, and pill-shaped labels on dark canvas.](https://design.withfudge.com/share/pin-6695)

[![Grid and cards feature section with asymmetric layout showing product interface screenshots and descriptive text blocks.](https://pin.fontofweb.com/6694?format=jpg)](https://design.withfudge.com/share/pin-6694)

[Grid and cards feature section with asymmetric layout showing product interface screenshots and descriptive text blocks.](https://design.withfudge.com/share/pin-6694)

[![Hero section with centered Nova wordmark, gradient headline, download buttons, and floating product dashboard screenshot.](https://pin.fontofweb.com/6693?format=jpg)](https://design.withfudge.com/share/pin-6693)

[Hero section with centered Nova wordmark, gradient headline, download buttons, and floating product dashboard screenshot.](https://design.withfudge.com/share/pin-6693)

## Overview

Nova presents itself as a dark, focused environment for personal development and productivity. The visual system builds an immersive near-black canvas that keeps attention on content rather than chrome. White typography provides high contrast against the deep background, while muted gray secondary text creates readable hierarchy without visual noise. The design language favors generous rounded corners on cards and containers, softening the otherwise stark dark interface. Product screenshots appear as floating, softly shadowed windows within the page, suggesting depth without heavy layering. The overall impression is of a premium, contemplative tool—minimal enough to feel like a blank slate, yet structured enough to guide users through feature explanations. Inter serves as the sole typeface across all weights, giving the system a consistent, modern Swiss sensibility.

## Colors

The palette is intentionally restrained, built on a near-black foundation with white as the primary ink and a single muted gray for secondary text. No accent colors appear in the interface itself; visual interest comes from photography and product screenshots rather than chromatic variety.

| token | value | use |
|---|---|---|
| canvas | #1D1D1D | Page background, deepest layer |
| surface | #232323 | Card backgrounds, elevated containers |
| surface-elevated | #252525 | Hover states, subtle elevation shifts |
| ink | #FFFFFF | Primary headings, body text, borders |
| muted-ink | #A0A0A0 | Secondary descriptions, captions, metadata |
| dim-ink | #606060 | Tertiary text, disabled states |
| border | #FFFFFF | Hairline borders on cards and buttons |
| action-primary-bg | #FFFFFF | Primary button fill |
| action-primary-text | #1D1D1D | Primary button label |
| action-secondary-bg | #1D1D1D | Secondary button fill |
| action-secondary-text | #FFFFFF | Secondary button label |
| action-secondary-border | #FFFFFF | Secondary button outline |

The dark mode is not an alternate theme—it is the only mode. The near-black canvas (#1D1D1D) absorbs light and pushes content forward. White borders at 1px width function as subtle structural lines rather than heavy dividers. Product screenshots introduce their own color through content, which the dark frame makes more vivid by contrast. The gradient headline in the hero uses a white-to-gray sweep that echoes the muted-ink token, creating a metallic, dimensional quality without adding new hues.

## Typography

Inter is the exclusive typeface, loaded in Regular and Semibold weights. The hierarchy relies on size and weight contrast rather than family variation, maintaining the system's disciplined minimalism.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 2.625rem | 600 | 1.2 | -0.02em | Hero headline, gradient text treatment |
| section-display | Inter | 1.75rem | 600 | 1.6 | -0.01em | Feature section headings |
| body | Inter | 1rem | 400 | 1.6 | normal | Primary body text, descriptions |
| body-large | Inter | 1.0625rem | 400 | 1.8 | normal | Hero subheadline, emphasized paragraphs |
| body-small | Inter | 0.9375rem | 400 | 1.7 | normal | Card descriptions, tighter spaces |
| label | Inter | 0.875rem | 600 | 1.6 | normal | Button text, card labels, emphasis |
| caption | Inter | 0.8125rem | 400 | 1.6 | normal | Metadata, timestamps, fine print |
| micro-label | Inter | 0.6875rem | 400 | 1.6 | 0.05em | Uppercase tags, category labels |

The hero headline uses a linear gradient from white to gray (#A0A0A0) at 135 degrees, creating a metallic sheen that distinguishes it from flat section headings. Section headings use negative letter spacing for tighter, more impactful lines. Body text maintains generous line height for readability in longer descriptions. The micro-label style appears in uppercase with widened tracking for category tags like "NOVA X" that mark feature sections.

Verify licensing for Inter before production use. The font is served from a Next.js static asset path.

## Layout

The page uses a centered single-column layout with generous horizontal margins. Content is constrained to a maximum width and centered within the viewport, creating ample breathing room on large screens.

The grid system is implicit rather than explicit—sections stack vertically with consistent section gaps of 6.25rem between major blocks. Within sections, content often splits into asymmetric two-column arrangements: text on one side, product screenshots on the other. The screenshots themselves appear as composite images showing the app interface, not as live embeds.

Horizontal padding of 1.5rem on content containers keeps text from touching viewport edges. Cards use internal padding of 1.75rem for standard sizes and 3rem for larger feature cards. Margins between related elements follow a tight scale: 1rem for heading-to-body pairs, 2.5rem for body-to-action groups, and 6.25rem for section-to-section separation.

The hero section centers all elements—wordmark, headline, subheadline, buttons, and product screenshot—creating a focal point that draws the eye downward through the page. Feature sections alternate the placement of text and screenshots, creating visual rhythm without complex grid machinery.

## Visual language

The visual character is dark, soft, and precise. Rounded corners appear everywhere: 2rem on standard cards, 3rem on large feature containers, and 0.75rem on buttons. This consistent rounding prevents the dark palette from feeling harsh or clinical.

Borders are hairline-thin at 1px, always white, and always solid. They define card edges and button outlines without adding visual weight. The combination of dark fill, white border, and generous radius creates a distinctive "soft panel" aesthetic that recurs across testimonials, feature cards, and screenshot containers.

A subtle dot-grid pattern appears in the background of some sections, visible as faint points arranged in a regular grid. This texture adds depth to the flat dark canvas without competing with content. The pattern density is low—dots are sparse and dim, serving as atmosphere rather than ornament.

Product screenshots are presented as floating windows with rounded corners, sometimes overlapping or arranged in grids. These composites show the actual app interface with its own internal color system (oranges, greens, blues from content), which pops against the dark page frame. The screenshots cast soft shadows that lift them from the background, though the shadow values are subtle and dark-toned.

The Nova wordmark in the hero uses a custom logotype with a flowing arc above the letterforms, suggesting orbit or trajectory. This is the only non-typographic brand element visible.

## Components

### Primary action button

- **Anatomy**: Icon left, label right, horizontally centered within a rounded rectangle
- **Surface**: `{colors.action-primary-bg}` background, `{colors.action-primary-text}` text
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.button}` border radius, 0.875rem vertical padding, 1.75rem horizontal padding
- **Spacing**: Icon and label sit inline with comfortable gap; button sits below descriptive text with 1.5rem margin
- **Composition**: Often paired with secondary button in horizontal row, centered

### Secondary action button

- **Anatomy**: Text-only label within rounded rectangle
- **Surface**: `{colors.action-secondary-bg}` background, `{colors.action-secondary-border}` border 1px, `{colors.action-secondary-text}` text
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.button}` border radius, matching padding to primary button
- **Composition**: Appears to the right of primary button with 0.75rem gap

### Feature card

- **Anatomy**: Large rounded container holding product screenshot or illustration, with optional text block alongside
- **Surface**: `{colors.surface}` fill, `{colors.border}` border 1px, `{rounded.card-large}` border radius
- **Spacing**: `{spacing.card-padding-large}` internal padding, `{spacing.section-gap}` external margin below
- **Composition**: Often asymmetric—screenshot fills left portion, text aligns right; or full-width with centered content

### Testimonial card

- **Anatomy**: Quotation text, user avatar, username handle, platform attribution
- **Surface**: `{colors.surface}` fill, `{colors.border}` border 1px, `{rounded.card}` border radius
- **Typography**: Quote in `{typography.body-small}`, username in `{typography.label}`, platform in `{typography.caption}`
- **Spacing**: `{spacing.card-padding}` internal padding, avatar 2.5rem diameter with 0.75rem margin-right to text
- **Composition**: Three cards in horizontal row with equal gaps, all same height

### Section label pill

- **Anatomy**: Uppercase text within small rounded container
- **Surface**: `{colors.surface}` fill, `{colors.border}` border 1px, `{rounded.pill}` border radius
- **Typography**: `{typography.micro-label}`
- **Spacing**: 0.25rem vertical padding, 0.625rem horizontal padding
- **Composition**: Sits above section heading as category marker

### Product screenshot frame

- **Anatomy**: Composite image showing app interface, sometimes with multiple panels
- **Surface**: No visible border, soft shadow for elevation
- **Shape**: `{rounded.card}` to `{rounded.card-large}` border radius depending on container size
- **Composition**: Centered or offset within feature section, often larger than surrounding text block

## Responsive behavior

The design appears optimized for desktop viewing with its generous spacing and two-column feature layouts. At narrower viewports, the asymmetric text-image splits should stack vertically, with screenshots moving above or below their accompanying text. The three-column testimonial row should collapse to a single column on mobile, maintaining card width but stacking sequentially.

The centered hero content should remain centered but scale down: the hero headline at 2.625rem may reduce to 2rem or 1.75rem on small screens to prevent overflow. Button pairs should stack vertically with full-width buttons on mobile, preserving the primary-then-secondary order.

The dot-grid background pattern may become less visible or be removed on mobile to reduce rendering overhead and visual clutter at small sizes. Card internal padding should reduce from 3rem to 1.5rem on smaller screens to maintain content density.

## Practical implementation guidance

### Preserve
- The near-black canvas as the only background mode; do not introduce light themes
- Hairline white borders on all cards and outlined buttons—this is the system's signature
- Generous border radii: 2rem minimum for cards, 3rem for large feature containers
- Inter as the sole typeface across all weights and sizes
- The gradient headline treatment in the hero, white to gray at 135 degrees
- Centered, spacious hero layout with floating product screenshot

### Avoid
- Adding accent colors to the interface palette; let content screenshots provide color
- Sharp corners on containers; the soft rounding is essential to the aesthetic
- Heavy shadows or elevation systems; keep depth subtle and dark
- Multiple typefaces or decorative fonts that compete with Inter's clarity
- Light backgrounds or inverted sections that break the immersive dark mode

### Recommended build order
1. Establish the dark canvas (#1D1D1D) and load Inter with Regular and Semibold weights
2. Build the hero section with centered wordmark, gradient headline, subheadline, and button pair
3. Create the card component with surface fill, 1px white border, and 2rem radius
4. Implement feature sections with asymmetric two-column layouts
5. Add testimonial cards in three-column grid
6. Apply dot-grid background texture to select sections
7. Polish with spacing scale and responsive stacking behavior

### Accessibility
- White text on near-black backgrounds provides excellent contrast for primary content
- Ensure muted-ink text (#A0A0A0) is used only for non-essential information, as it may fall below WCAG AA for small text
- Button focus states should use visible outlines; consider a 2px white offset ring on dark backgrounds
- The gradient headline should have sufficient fallback color or ensure the lightest portion meets contrast requirements
- Product screenshots contain small interface text; ensure surrounding descriptions provide equivalent information

## Scope note

This guide covers the Nova marketing page as captured: hero, feature sections with product screenshots, testimonials, and download calls-to-action. The actual application interface shown within screenshots is not documented here. Mobile layouts, animation, hover states, and form interactions were not visible in the supplied material. Measurements are drawn from the exact values provided in the design facts.
