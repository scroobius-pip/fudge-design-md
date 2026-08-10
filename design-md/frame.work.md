# How frame.work is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/frame.work-design)

Last updated: 2026-08-10

## Captured pages

[![Newsletter subscription section with pixel-art envelope illustration and email input field on black background](https://pin.fontofweb.com/9024?format=jpg)](https://design.withfudge.com/share/pin-9024)

[Newsletter subscription section with pixel-art envelope illustration and email input field on black background](https://design.withfudge.com/share/pin-9024)

[![Exploded laptop parts layout showing keyboard, memory modules, and components with upgrade messaging](https://pin.fontofweb.com/9023?format=jpg)](https://design.withfudge.com/share/pin-9023)

[Exploded laptop parts layout showing keyboard, memory modules, and components with upgrade messaging](https://design.withfudge.com/share/pin-9023)

[![DIY Edition and Pre-built product cards with orange accent background and Ubuntu certification badge](https://pin.fontofweb.com/9022?format=jpg)](https://design.withfudge.com/share/pin-9022)

[DIY Edition and Pre-built product cards with orange accent background and Ubuntu certification badge](https://design.withfudge.com/share/pin-9022)

[![Keyboard feature section with transparent laptop displaying code editor and detailed key layout](https://pin.fontofweb.com/9021?format=jpg)](https://design.withfudge.com/share/pin-9021)

[Keyboard feature section with transparent laptop displaying code editor and detailed key layout](https://design.withfudge.com/share/pin-9021)

## Overview

The Framework design system is a dark-first product marketing language built around the visual identity of modular, repairable computing hardware. The system uses an almost entirely black canvas with pure white typography to create dramatic contrast that lets product photography and hardware imagery dominate the visual field. An energetic orange accent color punctuates calls-to-action and interactive elements, giving the interface a sense of momentum and technical confidence. The overall impression is one of precision engineering meets approachable directness—premium without pretension, technical without alienation. Content sections alternate between immersive full-bleed imagery and contained editorial layouts with generous breathing room. The system prioritizes readability at scale, with display type that commands attention and body copy that maintains comfortable measure even in extended passages.

## Colors

The color system operates on a principle of maximum contrast with selective warmth. The near-black canvas creates an infinite-depth field that makes hardware photography appear to float, while the orange accent provides the only saturated color in the interface, ensuring it always draws the eye to primary actions.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, establishes infinite depth |
| surface | #1F1F1F | Secondary backgrounds, card interiors, elevated planes |
| surface-elevated | #2A2422 | Warm dark variant for product cards and featured sections |
| ink | #FFFFFF | Primary text, headings, and high-priority content |
| muted-ink | #F2F2F2 | Secondary text, descriptions, and supporting copy |
| subtle-ink | #F3F2F2 | Tertiary text, labels, and fine print |
| action | #F66331 | Primary buttons, CTAs, accent highlights, and interactive emphasis |
| action-text | #000000 | Text on action-colored surfaces for maximum contrast |

The dark mode is not a variant but the foundational identity. Light values appear only as text and occasional button fills. The orange accent is used sparingly and strategically—appearing on primary configuration buttons, newsletter subscribe actions, and product category highlights. Photography benefits from the dark surround, with product shots often featuring their own environmental lighting that creates natural separation from the canvas. No gradient overlays compete with imagery; when gradients appear, they are subtle darkening fades that ensure text legibility over photographic backgrounds.

## Typography

The typographic system uses a single font family across all roles, relying on weight and size differentiation to establish hierarchy. Graphik, designed by Christian Schwartz and available from Commercial Type, provides a neutral, highly legible grotesque that feels contemporary without trendiness. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Graphik | 6rem | 600 | 1 | normal | Primary page headlines, maximum impact statements |
| section-display | Graphik | 3rem | 600 | 1.25 | normal | Section headings, feature introductions |
| sub-section-display | Graphik | 2.25rem | 600 | 1.25 | normal | Card titles, secondary headings |
| body | Graphik | 1rem | 400 | 1.5 | normal | Standard paragraphs, descriptions |
| body-loose | Graphik | 1rem | 400 | 1.75 | normal | Extended reading passages, feature explanations |
| label | Graphik | 0.875rem | 500 | 1.25 | normal | Tags, badges, metadata, fine print |
| navigation | Graphik | 0.875rem | 500 | 1.25 | normal | Header links, menu items |
| button | Graphik | 1rem | 600 | 1.5 | normal | Button labels, call-to-action text |

The weight range spans Regular (400), Medium (500), and Semibold (600), with Semibold reserved for display headings and button text to maintain crisp definition at large sizes. Line heights are tight for display type, creating compact vertical stacks that feel intentional and engineered, while body text receives more generous leading for readability. No italic styles are employed in the visible system; emphasis is achieved through weight change or color shift, particularly the orange accent applied to strong elements within headlines.

## Layout

The layout system combines full-bleed immersive sections with contained content corridors. Maximum content width is constrained by horizontal margins of 8.25rem (132px), creating a generous but not excessive reading measure that centers content within wide viewports. Sections stack vertically with substantial padding—typically 5rem to 6rem vertical—creating clear territorial boundaries between topics.

The grid is fundamentally single-column for editorial content, with product cards and feature comparisons arranged in two-column splits. Card layouts use equal-width columns with internal padding of 2rem, maintaining consistent internal spacing regardless of viewport width. The newsletter section demonstrates a full-bleed treatment where content spans the entire viewport width, using centered alignment rather than the standard left-aligned content corridor.

Spacing follows a 0.25rem base unit, with common increments at 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem, 2.25rem, 2.5rem, 3rem, 3.5rem, 5rem, 6rem, and 8.25rem. Component internal padding typically uses 2rem, while element-to-element spacing within sections uses 1.5rem. Section breaks use the larger increments to create dramatic pacing.

## Visual language

The visual language is defined by hardware photography presented with museum-like reverence against infinite black. Product shots are meticulously lit, often showing internal components, transparent casings, or exploded views that reinforce the brand's repairability ethos. The photography style is technical and documentary rather than lifestyle—hands appear only to demonstrate assembly, never to suggest social context.

Illustration appears sparingly and with deliberate stylistic contrast. The newsletter section features a pixel-art envelope character that introduces playful warmth against the otherwise serious technical aesthetic. This 8-bit styling references computing history and maker culture without undermining product credibility.

Badges and labels use pill-shaped containers with light backgrounds and dark text, floating over product imagery to indicate compatibility or certification status. The Ubuntu Certified badge demonstrates how third-party credentials are integrated into the product presentation without disrupting the overall dark harmony.

The system avoids decorative elements, shadows, and dimensional effects. Elevation is suggested through color value change rather than shadow. Borders are absent except for the subtle hairline under newsletter input fields. The overall effect is flat, confident, and materially honest—matching the brand's product philosophy.

## Components

### Primary button

- **Anatomy**: Text label centered within a pill-shaped container
- **Surface**: Action orange background (#F66331) with black text
- **Typography**: Button token, Semibold weight at 1rem
- **Shape**: Full pill radius (9999px)
- **Spacing**: 0.5rem vertical padding, 1rem horizontal padding
- **Composition**: Typically appears below descriptive text, centered or left-aligned to content
- **Variants**: Secondary variant uses white background with black text for lower-priority actions

### Product card

- **Anatomy**: Full-bleed product image at top, text content block at bottom, floating badge in upper corner, action button at bottom right of text area
- **Surface**: Dark background matching or slightly warming from canvas; orange card uses action color as full background
- **Typography**: Sub-section-display for card title, body for description, button for action
- **Shape**: 0.75rem corner radius
- **Spacing**: 2rem internal padding for text content area
- **Composition**: Two-column grid with equal widths, gap between cards
- **States**: Static presentation; no visible hover or active states in the imagery

### Newsletter subscription

- **Anatomy**: Centered pixel-art illustration, display heading, single-line email input with inline subscribe button
- **Surface**: Pure black canvas, no elevation or border except bottom hairline on input
- **Typography**: Section-display for headline, body for placeholder text, button for subscribe action
- **Shape**: Input field is full-width with bottom border only; subscribe button is pill-shaped
- **Spacing**: Generous vertical padding above and below content cluster
- **Composition**: Strictly centered, narrow content width for focused task completion

### Navigation header

- **Anatomy**: Logo mark, text links, utility actions
- **Surface**: Transparent over dark content, or matching canvas
- **Typography**: Navigation token at 0.875rem Medium weight
- **Spacing**: Horizontal link spacing at 0.75rem
- **Composition**: Horizontal flex with items spaced between left and right clusters

### Feature section

- **Anatomy**: Section heading, descriptive paragraph, full-width product imagery below
- **Surface**: Canvas background, text left-aligned in content corridor
- **Typography**: Section-display for heading, body-loose for description
- **Spacing**: 1.5rem between heading and paragraph, substantial gap before imagery
- **Composition**: Single-column editorial flow, image breaks full width or contained to corridor

## Responsive behavior

The system is optimized for desktop presentation with substantial viewport widths. The 8.25rem horizontal margins indicate a design that expects wide screens; at narrower widths, these margins should compress proportionally, likely transitioning to 2.5rem (40px) as a minimum comfortable boundary. The two-column product card layout should stack to single column on tablet and below, with the orange-background card maintaining its full-bleed character even when narrowed.

Typography scales down for smaller viewports: the 6rem hero display should reduce to 3.75rem on tablet and 2.25rem on mobile to maintain line-length control. The 3rem section display becomes 2.25rem and then 1.5rem. Body text remains at 1rem across all breakpoints, as readability demands consistent sizing.

The newsletter section's centered composition adapts well to narrow viewports, though the input and button may need to stack vertically on the smallest screens. Navigation should collapse to a menu trigger, with the current horizontal links hidden behind an accessible disclosure pattern.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the default background; resist adding subtle textures or gradients
- The single orange accent for all primary actions; do not introduce additional accent colors
- The generous section spacing that creates dramatic pacing between content topics
- The hardware-forward photography with its technical, documentary quality
- The pill-shaped buttons as the exclusive interactive shape language

### Avoid
- Adding shadows or dimensional effects to cards and buttons; the system is intentionally flat
- Using the orange accent for decorative purposes rather than functional emphasis
- Introducing border treatments beyond the minimal input underline
- Crowding the generous margins that define the content corridor
- Mixing in additional font families; the single-family hierarchy is intentional

### Recommended build order
1. Establish the canvas black background and white text defaults
2. Implement the typography scale with Graphik at all specified sizes and weights
3. Create the button component with pill shape and orange primary treatment
4. Build the content corridor with 8.25rem margins and section spacing
5. Add product cards with image-top, content-bottom structure
6. Implement the newsletter section as a centered, full-bleed variant
7. Add navigation with transparent-over-dark treatment

### Accessibility
- Ensure the orange action color meets contrast requirements against both black and white backgrounds; the #F66331 orange may need adjustment for small text compliance
- Provide visible focus indicators for keyboard navigation that complement the flat aesthetic, such as outline offsets or subtle background shifts
- Maintain the generous touch targets implied by button padding; do not compress interactive elements
- Use semantic heading hierarchy despite the visual uniformity; the hero-display h1 through label span structure should map to proper document outline
- Ensure the pixel-art illustration has appropriate alt text that conveys its purpose as newsletter signup decoration

## Scope note

This guide covers the Framework Laptop 13 Pro product page marketing surface. It does not include checkout flows, account interfaces, documentation pages, or mobile-specific adaptations. Motion behavior, loading states, and form validation styling are not represented in the imagery. The system is presented as a desktop-first experience; tablet and mobile implementations should be validated against additional breakpoints.
