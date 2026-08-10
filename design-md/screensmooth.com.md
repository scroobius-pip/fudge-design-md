# How screensmooth.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/screensmooth.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with video gallery grid, orange-red gradient announcement bar, and navigation with Get Started button](https://pin.fontofweb.com/7330?format=jpg)](https://design.withfudge.com/share/pin-7330)

[Hero section with video gallery grid, orange-red gradient announcement bar, and navigation with Get Started button](https://design.withfudge.com/share/pin-7330)

[![Feature comparison table with ScreenSmooth highlighted column, tab selectors, and green checkmark indicators](https://pin.fontofweb.com/7332?format=jpg)](https://design.withfudge.com/share/pin-7332)

[Feature comparison table with ScreenSmooth highlighted column, tab selectors, and green checkmark indicators](https://design.withfudge.com/share/pin-7332)

[![Social proof testimonial wall with dark cards, orange accent highlights, and verified user avatars](https://pin.fontofweb.com/7331?format=jpg)](https://design.withfudge.com/share/pin-7331)

[Social proof testimonial wall with dark cards, orange accent highlights, and verified user avatars](https://design.withfudge.com/share/pin-7331)

## Overview

ScreenSmooth presents a dark, high-energy visual system built for a developer-focused AI screen recorder. The design immerses visitors in near-black space, then punctuates that darkness with saturated orange-red gradients, electric green confirmations, and warm coral highlights. This is not a neutral SaaS template—it is a deliberately theatrical presentation that frames technical capability through emotional warmth and urgency.

The page architecture moves from an attention-grabbing announcement bar through a dense video gallery, social proof, and competitive comparison. Each section maintains the same foundational darkness while introducing distinct surface elevations and accent treatments. The result is a cohesive but rhythmically varied experience where color carries semantic weight: orange demands action, green validates features, and the persistent black ground keeps focus on the product imagery.

Typography plays a supporting role to this color drama. Inter at multiple weights provides clean readability without competing with the vibrant gradients. The type scale is restrained, with dramatic size jumps reserved for section headers and the brand mark. Most interface text sits comfortably at 16px, creating a dense information layer that feels efficient rather than cramped.

## Colors

The color system operates on a principle of maximum contrast: absolute darkness against selective, saturated warmth. Every functional color serves a specific communicative purpose.

| token | value | use |
|---|---|---|
| canvas | #000000 | Page background, deepest ground |
| surface | #0A0A0A | Card backgrounds, elevated panels |
| surface-elevated | #111111 | Comparison table column, focused rows |
| ink | #FFFFFF | Primary text, headings, icons |
| ink-muted | #9CA3AF | Secondary descriptions, disabled states |
| ink-dim | #CCCCCC | Body text on dark cards, subtle labels |
| accent-orange | #FF6B00 | Primary CTA buttons, gradient endpoints, category tags |
| accent-red | #FF0000 | Announcement bar, urgent messaging, gradient core |
| accent-coral | #FF6B4A | Warm highlights, testimonial emphasis, secondary accents |
| accent-green | #22C55E | Feature confirmations, checkmarks, positive indicators |
| accent-warm | #FFAA80 | Soft gradient transitions, hover states |
| border | #222222 | Card outlines, table dividers, subtle separators |
| border-light | #333333 | Active tab borders, elevated panel edges |

The gradient system is central to the brand expression. A horizontal sweep moves from accent-red through accent-orange and back to accent-red, creating a pulsing, energetic band that appears in the announcement bar, active navigation elements, and promotional badges. This is not a decorative flourish—it is the primary brand signature, applied with discipline to elements that demand attention.

Photographic and video content introduces blues, purples, and greens through interface screenshots, but these remain content colors rather than system colors. The UI palette stays warm and dark, ensuring that product imagery pops against the controlled environment.

## Typography

The type system relies on Inter as the sole brand typeface, with Arial appearing only in button contexts as a system fallback. The hierarchy is established through weight and size rather than family variation, creating a unified, technical tone.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 2.5rem | 800 | 1.1 | -0.02em | Section headings, comparison title |
| section-display | Inter | 2.5rem | 800 | 1.1 | -0.02em | Major page headings |
| body | Inter | 1rem | 400 | 1.5 | normal | Primary body text, navigation links |
| body-large | Inter | 1.25rem | 400 | 1.5 | normal | Descriptions, feature explanations |
| body-small | Inter | 0.8125rem | 400 | 1.4 | normal | Card descriptions, metadata |
| label | Inter | 0.6875rem | 700 | 1 | 0.045em | Category tags, uppercase labels |
| label-small | Inter | 0.6875rem | 400 | 1 | normal | Captions, fine print |
| navigation | Inter | 1rem | 400 | 1 | normal | Nav links, secondary actions |
| navigation-brand | Inter | 1.375rem | 800 | 1 | normal | Logo wordmark |
| button-primary | Arial | 0.8125rem | 600 | 1 | normal | CTA buttons, form actions |

The display weights at 800 create impactful headlines without resorting to oversized type. The tight letter spacing on hero-display (-0.02em) gives headings a compact, confident stance. Body text maintains generous line height for readability against the dark ground.

Verify licensing for these families before production use. The Inter source file is served from a third-party CDN path associated with slash.com.

## Layout

The page employs a centered, contained layout with generous horizontal breathing room. Content max-width appears to center around 640px to 720px for text-heavy sections, while the video gallery breaks into a full-bleed or near-full-bleed grid that uses the full viewport width.

The spacing system builds from a 2px base unit, creating fine-grained control for tight interface elements while allowing substantial jumps for section breaks. Key spacing values include 4px for tight internal gaps, 10px for button padding vertical, 16px for card internal padding, 18px for compact card padding, 20px for standard gaps, 24px for button padding horizontal and section margins, and 40px for major section padding.

The announcement bar sits fixed at the viewport top, full-width, with centered text. Below it, the navigation maintains horizontal padding of 40px, creating consistent side margins that carry through the page. The video gallery abandons this containment, allowing cards to extend toward viewport edges in a horizontally scrollable or wrapped grid.

Card layouts follow a consistent internal structure: thumbnail image at top, category label positioned as an overlay or immediate follow, title in bold, and description in muted text. This three-tier information hierarchy—visual, category, textual—repeats across all video cards regardless of content type.

The comparison table introduces a more complex spatial logic: three columns with the central ScreenSmooth column receiving elevated surface treatment and warm text color, while competitor columns sit on darker ground with cooler text. Tab selectors above the table use pill-shaped containers with active state inversion.

## Visual language

The visual identity of ScreenSmooth is defined by controlled intensity. The near-black canvas is not merely a background choice but a deliberate stage that makes every other element perform. Against this darkness, the orange-red gradient becomes a living element—appearing in the announcement bar, active states, and promotional badges with a consistency that builds brand recognition through repetition rather than variation.

Surface elevation is subtle but purposeful. The jump from #000000 to #0A0A0A to #111111 creates depth without shadow dependency. Cards lift through border definition rather than drop shadows, maintaining a flat, modern aesthetic. Where shadows do appear, they are colored—warm orange glows behind active elements, cool dark shadows for depth—rather than neutral blacks.

The imagery strategy emphasizes authentic product context. Screenshots show real interfaces with cursors, browser chrome, and imperfect states. This documentary approach contrasts with the polished UI surrounding it, creating trust through transparency. Cursor icons appear as graphic elements, reinforcing the screen recording utility.

Accent colors carry semantic meaning that transcends decoration. Green indicates confirmation and capability. Orange-red signals urgency and promotion. Warm coral highlights social proof and human elements. This color coding allows rapid scanning: a visitor can assess feature parity, pricing advantage, and community validation through color alone.

Border radii progress from sharp (4px for small tags) through moderate (12px-16px for cards and panels) to fully rounded (100px for pills and buttons). This progression maps to interaction expectation: sharper corners for information, rounder corners for action.

## Components

### Announcement bar
- **Anatomy**: Full-width strip, single line of centered text, warning icon prefix
- **Surface**: accent-red background with horizontal orange-red gradient animation
- **Typography**: body token, ink color
- **Shape**: No border radius, flush to viewport edges
- **Spacing**: Vertical padding approximately 10px, no horizontal padding needed for full-bleed

### Navigation bar
- **Anatomy**: Logo left, text links center-right, primary CTA button far right
- **Surface**: canvas background, transparent or minimal border
- **Typography**: navigation-brand for logo, navigation for links
- **Shape**: No distinct container, integrated with page background
- **Spacing**: 40px horizontal padding, comfortable vertical padding for touch targets
- **States**: Active link shows accent-orange text; CTA button uses accent-orange background with ink text

### Primary button
- **Anatomy**: Text label only, no icon
- **Surface**: accent-orange background, ink text
- **Typography**: button-primary token
- **Shape**: pill radius (100px)
- **Spacing**: 10px vertical padding, 24px horizontal padding
- **Variants**: Secondary variant uses ink background with canvas text; ghost variant uses transparent background with ink border

### Video card
- **Anatomy**: Thumbnail image, category label, title, description
- **Surface**: surface background, border token border
- **Typography**: label for category tag, body for title, body-small for description
- **Shape**: 12px-16px border radius
- **Spacing**: 16px-18px internal padding, consistent gap between cards
- **Composition**: Vertical stack, image aspect ratio maintained, text below

### Category tag
- **Anatomy**: Text only, uppercase or small-case label
- **Surface**: Transparent or subtle warm tint
- **Typography**: label token, accent-orange or accent-coral text
- **Shape**: 4px-100px radius depending on context; pill shape common
- **Spacing**: 4px vertical, 10px horizontal padding

### Comparison table
- **Anatomy**: Tab selectors above, three-column grid below with feature rows
- **Surface**: surface-elevated for highlighted column, canvas for others
- **Typography**: section-display for title, body for feature names, body-large for values
- **Shape**: 24px radius for container, internal row dividers
- **Spacing**: 40px bottom margin for title, generous cell padding
- **States**: Active tab inverts to ink background with canvas text; inactive tabs use border only

### Testimonial card
- **Anatomy**: Avatar, user name with verification, handle, testimonial text with highlighted phrases
- **Surface**: surface background, border token border
- **Typography**: body-small for text, label-small for metadata, accent-coral for highlighted phrases
- **Shape**: 12px radius
- **Spacing**: 16px padding, consistent grid gap
- **Composition**: Masonry or staggered grid layout, varying card heights

## Responsive behavior

The design appears optimized for desktop viewing with dense information presentation. The video gallery likely transitions from multi-column grid to horizontal scroll or stacked single column on narrower viewports. Navigation links should collapse to a hamburger menu below approximately 768px, with the announcement bar remaining visible but potentially truncating text.

The comparison table presents a particular responsive challenge: three columns with distinct visual weight may require horizontal scrolling or transformation into an accordion on mobile. The central highlighted column should remain visually dominant regardless of viewport.

Touch targets for buttons and cards should maintain minimum 44px height. The pill-shaped buttons with their generous horizontal padding already satisfy this requirement.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the foundational ground; any lightening weakens the dramatic contrast
- The orange-red gradient as the singular brand signature, applied consistently to CTAs, announcements, and active states
- The subtle surface elevation hierarchy (#000000, #0A0A0A, #111111) for depth without shadow dependency
- The semantic color coding: green for confirmation, orange-red for urgency, coral for social proof
- The documentary product imagery showing authentic interface states with cursors and browser chrome

### Avoid
- Introducing additional accent colors beyond the established warm palette; blues and purples should remain in content imagery only
- Using neutral gray shadows; maintain the warm or cool shadow coloring where shadows are necessary
- Creating light mode variants without complete color remapping; the system is built for darkness
- Over-sizing body text; the 16px standard creates information density that supports the technical positioning
- Separating the category tag from its associated card; the label-image-title stack is a fixed unit

### Recommended build order
1. Establish the canvas and surface color tokens with the three-tier elevation system
2. Implement the Inter type scale with exact weights and sizes
3. Build the announcement bar with gradient background as the persistent top element
4. Create the navigation with logo, links, and pill CTA
5. Develop the video card component with consistent internal spacing and category tag
6. Construct the comparison table with tab interaction and highlighted column treatment
7. Add testimonial cards with masonry layout and phrase highlighting
8. Implement responsive breakpoints for gallery and table components

### Accessibility
- Ensure the orange-red gradient meets minimum contrast ratios when used for text; the announcement bar may need dark text or increased weight
- Provide focus indicators that match the warm accent palette rather than default browser outlines
- Consider motion sensitivity for the gradient animation; provide a reduced-motion alternative
- Maintain semantic HTML structure for the comparison table to support screen reader navigation
- Verify that green checkmarks against dark surfaces meet non-text contrast requirements

## Scope note

This guide covers the desktop landing page experience for ScreenSmooth, including the hero gallery, feature comparison, and social proof sections. Mobile layouts, checkout flows, application interfaces, and motion specifications are not represented in the available material. The button typography uses Arial as a system fallback; verify licensing for Inter before production use.
