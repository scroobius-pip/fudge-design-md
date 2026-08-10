# How fourmula.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fourmula.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Dark footer with Fourmula logo, navigation columns, and a large dotted grid pattern fading from white to dark gray](https://pin.fontofweb.com/8675?format=jpg)](https://design.withfudge.com/share/pin-8675)

[Dark footer with Fourmula logo, navigation columns, and a large dotted grid pattern fading from white to dark gray](https://design.withfudge.com/share/pin-8675)

[![Split-screen feature cards showing AI product shots and AI video production with rounded image grids and white headlines on dark surfaces](https://pin.fontofweb.com/8674?format=jpg)](https://design.withfudge.com/share/pin-8674)

[Split-screen feature cards showing AI product shots and AI video production with rounded image grids and white headlines on dark surfaces](https://design.withfudge.com/share/pin-8674)

[![Hero section with orbiting fashion portrait thumbnails around a central upload zone and large display typography on pure black](https://pin.fontofweb.com/8673?format=jpg)](https://design.withfudge.com/share/pin-8673)

[Hero section with orbiting fashion portrait thumbnails around a central upload zone and large display typography on pure black](https://design.withfudge.com/share/pin-8673)

[![Light-themed navigation overlay with rounded menu panel, category links, and floating portrait thumbnails on white background](https://pin.fontofweb.com/8672?format=jpg)](https://design.withfudge.com/share/pin-8672)

[Light-themed navigation overlay with rounded menu panel, category links, and floating portrait thumbnails on white background](https://design.withfudge.com/share/pin-8672)

## Overview

Fourmula.ai presents an AI-powered creative platform for fashion and product imagery with a bold, editorial aesthetic. The design alternates between immersive dark environments and clean light surfaces, creating dramatic contrast that emphasizes the generated content. The visual system centers on oversized display typography set in SF Pro, organic rounded shapes with unusually large radii, and a restrained palette that lets product photography dominate. The interface feels like a creative tool crossed with a luxury brand experience—precise yet expressive, technical yet emotional. Key structural elements include a persistent top navigation with menu and progress indicators, full-bleed feature sections with asymmetric image grids, and a distinctive footer with a large-scale dotted pattern that serves as a brand signature.

## Colors

The color system is intentionally minimal, built on a near-monochrome foundation with a single warm accent. Dark surfaces dominate the immersive experience, while light surfaces appear for navigation overlays and select content areas.

| token | hex | use |
|---|---|---|
| ink | #000000 | Primary backgrounds, deep surfaces, hero sections |
| near-ink | #020108 | Body background, subtle dark variation |
| charcoal | #111111 | Feature card backgrounds, elevated dark surfaces |
| body | #333333 | Body text on light backgrounds, secondary ink |
| border | #D9D9D9 | Subtle dividers, upload zone borders, hairlines |
| surface | #F8F8F8 | Navigation panels, light overlays, menu backgrounds |
| accent | #FC7303 | Gradient endpoints, warm highlights, energy moments |
| white | #FFFFFF | Primary text on dark, button fills, logo |

The dark mode is not an alternate theme but the default experience. White text on ink or charcoal backgrounds provides maximum legibility for headlines, while body text at #333333 appears on light surfaces for longer reading. The accent orange (#FC7303) appears sparingly in gradient moments, adding warmth without disrupting the monochrome discipline. Border colors shift contextually: white borders on dark surfaces create definition, while #D9D9D9 borders on light surfaces maintain subtlety. The overall effect is a gallery-like environment where generated imagery receives full visual priority.

## Typography

The type system pairs Apple's SF Pro for all display and interface text with Arial for body copy, creating a hybrid of refined system typography and neutral readability. SF Pro carries the brand voice through its tight tracking and clean geometry, while Arial handles utilitarian text without competing for attention.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | SF Pro | 7.5rem | 400 | 1 | -0.03em | Massive homepage headlines, brand statements |
| section-display | SF Pro | 4rem | 500 | 1.05 | -0.02em | Feature section headings, product category titles |
| headline | SF Pro | 1.5rem | 500 | 1.5 | -0.01em | Card titles, subsections, navigation headers |
| body | Arial | 1.075rem | 400 | 1.15 | normal | Descriptions, legal copy, secondary content |
| label | SF Pro | 1rem | 500 | 1 | normal | Buttons, tags, category pills, navigation items |
| caption | SF Pro | 0.75rem | 400 | 1.5 | -0.01em | Fine print, metadata, progress indicators |
| navigation | SF Pro | 1.06rem | 400 | 1.2 | -0.02em | Menu links, overlay navigation, footer links |

SF Pro appears in Medium (500) for interface elements and headlines, and Regular (400) for display sizes and body-level content. The extreme display sizes—7.5rem hero and 4rem section—use tight negative tracking that creates a compressed, editorial density. Arial at 1.075rem serves as the workhorse for readable paragraphs, maintaining neutral presence without stylistic interference. Verify licensing for SF Pro before production use; it is designed by Apple Inc and requires appropriate licensing for web deployment.

## Layout

The layout system employs generous fixed spacing with a 0.125rem base unit, creating a scale that supports both tight interface elements and expansive section breaks. The page structure flows as a single continuous scroll with full-viewport sections, each establishing its own spatial environment.

Section spacing uses 6rem as the standard vertical rhythm, with hero sections extending to 7.5rem for maximum impact. Internal padding within cards and containers ranges from 1.5rem for compact elements to 3rem for feature cards. The asymmetric composition of image grids—where photographs overlap, extend beyond boundaries, and sit at varied scales—creates dynamic tension against the rigid typographic grid.

The top navigation remains fixed, containing the Fourmula mark, a menu trigger with progress percentage, and a "Get started" call-to-action. This bar sits above all content without background separation in dark sections, then inverts for light surfaces. Feature sections use a split-panel structure: two equal dark columns separated by a hairline border, each containing an image cluster and bottom-aligned text. The hero section breaks this pattern with a central focal point—an upload zone surrounded by orbiting thumbnail images in organic rounded shapes.

Border radii follow a distinctive scale: 1.5rem for small elements like tags, 2rem for medium cards and panels, 3rem for large feature cards, and 9999px for pill buttons. This creates a family of rounded corners that feel intentionally soft rather than mechanically circular.

## Visual language

The visual identity balances technical precision with organic warmth. The Fourmula mark—a geometric "F" constructed from dots and lines—establishes the modular, generative theme. This dot language extends to the footer as a massive gradient field of circles fading from white to dark gray, creating an atmospheric brand signature.

Image treatment emphasizes fashion and product photography with natural lighting, soft shadows, and editorial styling. Thumbnails appear in distinctive organic shapes: not pure circles or rounded rectangles, but asymmetric blobs with large radii that suggest AI-generated imperfection. These shapes cluster in orbital arrangements around central actions, implying creative possibility radiating outward.

The interface avoids decorative elements beyond the dot pattern and gradient accents. Progress indicators, menu triggers, and percentage displays use minimal pill containers with subtle borders. The overall mood is confident and premium—dark enough to feel immersive, clean enough to feel trustworthy, with enough warmth in the photography and accent color to avoid sterility.

## Components

### Primary action button

- **Anatomy**: Text label within a filled pill container
- **Surface**: White background (#FFFFFF) with ink text (#000000)
- **Typography**: `{typography.label}` at SF Pro Medium, 1rem
- **Shape**: Full pill with 9999px radius
- **Spacing**: 0.875rem vertical padding, 1.5rem horizontal padding
- **Composition**: Positioned in top-right of navigation bar, right-aligned in card footers

### Secondary action button

- **Anatomy**: Text label within a stroked pill container
- **Surface**: Transparent background with white border and white text
- **Typography**: `{typography.label}` at SF Pro Medium, 1rem
- **Shape**: Full pill with 9999px radius, 1px solid border
- **Spacing**: 0.875rem vertical padding, 1.5rem horizontal padding
- **Variants**: Border color shifts to #D9D9D9 on light backgrounds

### Feature card

- **Anatomy**: Full-height container with image cluster above, text block below, and category label at top-left
- **Surface**: Charcoal background (#111111) with white text
- **Typography**: Category label uses `{typography.label}`; headline uses `{typography.section-display}`; description uses `{typography.body}` in white
- **Shape**: 3rem border radius
- **Spacing**: 3rem internal padding, images extend to edges with internal gaps
- **Composition**: Two cards sit side-by-side with 1px dividing border; images overlap and scale asymmetrically within each card

### Upload zone

- **Anatomy**: Central square container with icon, label below, and orbiting thumbnail images surrounding
- **Surface**: Transparent with subtle #D9D9D9 border
- **Typography**: "Upload or drop your assets" uses `{typography.label}` in white
- **Shape**: 2rem border radius, square proportions
- **Spacing**: Generous internal padding, thumbnails positioned in circular orbit at varying distances
- **Composition**: Center of hero section, thumbnails appear to float in 3D space around the zone

### Navigation overlay

- **Anatomy**: Modal panel with close control, menu section, legal section, and social section
- **Surface**: Light surface (#F8F8F8) with ink text, appearing over blurred or dimmed content
- **Typography**: Section headers use `{typography.label}` in muted gray; links use `{typography.headline}` at 1.5rem for primary navigation, `{typography.body}` for legal items
- **Shape**: 2rem border radius for panel, full pill for close button
- **Spacing**: Comfortable 1.5rem internal padding, generous vertical spacing between sections
- **Composition**: Centered panel with floating thumbnail images visible at edges, suggesting content continues behind

### Category tag

- **Anatomy**: Small pill with text label
- **Surface**: Transparent with subtle border or filled dark
- **Typography**: `{typography.label}` at SF Pro Medium, 1rem
- **Shape**: 1.5rem border radius
- **Spacing**: Compact internal padding
- **Composition**: Appears in vertical stacks at right edge of hero, or as inline labels above feature cards

### Footer

- **Anatomy**: Logo and navigation columns above, massive dot pattern below
- **Surface**: Ink background (#000000) with white and gray text
- **Typography**: Navigation links use `{typography.body}` in white; legal copy uses `{typography.body}` in muted gray; copyright uses `{typography.caption}`
- **Shape**: Dot pattern uses circles at graduated opacities
- **Spacing**: Generous top padding, dot pattern fills remaining viewport
- **Composition**: Four-column link grid above, full-bleed pattern below with gradient fade from dense white dots to sparse dark dots

## Responsive behavior

The design appears optimized for large viewports with its split-panel layouts and expansive negative space. At narrower widths, the side-by-side feature cards should stack vertically, maintaining their internal image-text hierarchy. The hero's orbital thumbnail arrangement may compress to a tighter cluster or reduce the number of visible images. Navigation shifts from inline links to the centered overlay panel, triggered by the persistent menu button.

Typography scales down proportionally: hero display should reduce to section-display size on tablet, and headline size on mobile. The massive footer dot pattern may crop vertically rather than scale, preserving the gradient density effect. Touch targets for pill buttons and category tags should maintain minimum 44px height. The upload zone remains central but may lose peripheral thumbnails on very small screens.

## Practical implementation guidance

### Preserve
- The dramatic dark-to-light section transitions that create rhythm and visual rest
- SF Pro's tight negative tracking at display sizes; this compression is essential to the editorial character
- Asymmetric image compositions within feature cards, where photographs break grid boundaries
- The distinctive organic blob shapes for thumbnails, neither circles nor rounded rectangles
- The footer dot gradient as a recognizable brand signature

### Avoid
- Adding decorative gradients or shadows beyond the single orange accent
- Using body text (#333333) on dark backgrounds; maintain white-on-dark for all dark surface content
- Shrinking border radii below the established scale; the large radii are intentional
- Introducing additional font families; the SF Pro/Arial pairing is deliberately restrained
- Centering body text; left alignment maintains the editorial, tool-like feel

### Recommended build order
1. Establish the dark base with ink background and white typography
2. Implement the type scale with SF Pro at all weights and Arial for body
3. Build the fixed navigation with menu trigger and primary action
4. Create the hero section with central upload zone and orbital thumbnail layout
5. Develop split-panel feature cards with asymmetric image grids
6. Add the navigation overlay with light surface treatment
7. Implement the footer with dot pattern gradient

### Accessibility
- Ensure white text on ink/charcoal backgrounds meets WCAG AAA contrast ratios
- Provide visible focus states for pill buttons and navigation links, using the accent orange or white outline
- Maintain keyboard operability for the upload zone and orbital thumbnail interactions
- Add `aria-label` descriptions to percentage progress indicators and menu triggers
- Respect `prefers-reduced-motion` for any orbital or parallax thumbnail movements

## Scope note

This guide covers the homepage and primary navigation experience of Fourmula.ai. Interior pages, product generation workflows, account dashboards, and mobile-specific layouts are not represented in the supplied material. The exact spacing and radius values derive from the desktop interface; responsive adaptations should be validated against additional breakpoints. Measurements are practical adaptation targets based on the visible interface.
