# How bun.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/bun.com-design)

Last updated: 2026-08-10

## Captured pages

[![Feature comparison table with gradient pink headline and dark rows showing runtime capabilities against Bun, Node, and Deno columns with status icons.](https://pin.fontofweb.com/4003?format=jpg)](https://design.withfudge.com/share/pin-4003)

[Feature comparison table with gradient pink headline and dark rows showing runtime capabilities against Bun, Node, and Deno columns with status icons.](https://design.withfudge.com/share/pin-4003)

[![Social proof grid of developer testimonial cards with dark surfaces, usernames, dates, and short messages in a masonry-like layout.](https://pin.fontofweb.com/4002?format=jpg)](https://design.withfudge.com/share/pin-4002)

[Social proof grid of developer testimonial cards with dark surfaces, usernames, dates, and short messages in a masonry-like layout.](https://design.withfudge.com/share/pin-4002)

[![Code showcase section with gradient pink headline, API capability pills, and a dark syntax-highlighted code block demonstrating Bun's built-in cookie handling.](https://pin.fontofweb.com/4001?format=jpg)](https://design.withfudge.com/share/pin-4001)

[Code showcase section with gradient pink headline, API capability pills, and a dark syntax-highlighted code block demonstrating Bun's built-in cookie handling.](https://design.withfudge.com/share/pin-4001)

[![Performance benchmark section with gradient pink headline, horizontal bar chart comparing test runner speeds, and a bordered CTA button with arrow icon.](https://pin.fontofweb.com/4000?format=jpg)](https://design.withfudge.com/share/pin-4000)

[Performance benchmark section with gradient pink headline, horizontal bar chart comparing test runner speeds, and a bordered CTA button with arrow icon.](https://design.withfudge.com/share/pin-4000)

## Overview

Bun's marketing site presents a dark, high-contrast visual system built for developer credibility. The design centers on a near-black canvas with warm pink-to-lavender gradient display typography that creates immediate visual identity against the darkness. Content is organized in generous vertical sections with clear hierarchy: bold gradient headlines establish each narrative beat, followed by supporting body copy, interactive demonstrations, and social proof. The overall impression is technical precision without coldness—syntax highlighting, benchmark charts, and code blocks feel native to the environment rather than decorative additions. The site communicates speed through both explicit performance comparisons and implicit visual efficiency: minimal chrome, direct information density, and surfaces that recede to let content and gradient accents command attention.

## Colors

The color system is intentionally restrained, using darkness as a canvas and a single warm gradient family as the primary accent. Supporting colors carry semantic meaning for status and code syntax.

| token | value | use |
|---|---|---|
| canvas | #0a0a0a | Primary page background, deepest layer |
| surface | #1a1a1a | Card backgrounds, table rows, secondary containers |
| surface-elevated | #242424 | Elevated cards, hover states, capability pills |
| ink | #f5f5f5 | Primary text, headlines in solid form, icons |
| muted-ink | #a0a0a0 | Secondary text, descriptions, timestamps, handles |
| accent-pink | #ff69b4 | Gradient start, primary brand warmth, benchmark bars |
| accent-pink-light | #ffb6c1 | Gradient end, headline luminosity, soft highlights |
| accent-green | #4ade80 | Success states, checkmarks, positive indicators |
| accent-yellow | #facc15 | Warning states, partial compatibility, caution icons |
| accent-red | #f87171 | Error states, missing features, negative indicators |
| border | #333333 | Subtle dividers, table rules, card outlines |
| code-bg | #1e1e2e | Code block backgrounds, terminal surfaces |

The gradient headline treatment blends accent-pink to accent-pink-light horizontally, creating a luminous effect against the dark canvas that reads as energetic without being aggressive. Status colors are applied with discipline: green circles with checkmarks, yellow triangles with exclamation marks, and red circles with X marks in the feature comparison table. Code syntax highlighting introduces additional colors—blues for keywords, greens for strings, purples for functions—within the controlled code-bg environment.

## Typography

The type system relies on Inter for all interface text and JetBrains Mono for code, establishing a clean, contemporary developer aesthetic. Display sizes use tight negative tracking and compact line heights to feel assertive, while body text relaxes for readability.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3.5rem | 800 | 1.1 | -0.03em | Primary section headlines, gradient-treated |
| section-display | Inter | 2.5rem | 700 | 1.15 | -0.02em | Secondary headlines, sub-section titles |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general content |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Card content, table cells, compact text |
| label | Inter | 0.75rem | 500 | 1.4 | 0.02em | Timestamps, badges, metadata, uppercase contexts |
| code | JetBrains Mono | 0.875rem | 400 | 1.6 | 0 | Code blocks, inline code, terminal text |

Display headlines receive the gradient treatment as a background clip to text, creating the signature pink-to-lavender luminous effect. Body text remains in solid ink or muted-ink depending on hierarchy. Code blocks use JetBrains Mono at a comfortable 0.875rem with syntax highlighting in multiple colors against the dark code-bg surface. Verify licensing for these families before production use.

## Layout

The layout follows a centered single-column pattern with generous breathing room. Maximum content width appears constrained to approximately 1200px, with sections stacking vertically and separated by substantial padding.

Sections use a consistent rhythm: gradient headline centered at top, followed by optional subheadline in muted-ink, then content area. The feature comparison table spans nearly full width with internal column alignment. Testimonial cards arrange in a responsive grid with consistent gaps. Code showcase centers the code block with capability pills arranged in rows above.

Spacing follows a 0.25rem base unit. Section vertical padding uses 6rem to create clear separation between narrative beats. Content gaps within sections use 1.5rem. Card internal padding uses 1.25rem for comfortable text breathing room. The performance benchmark section demonstrates asymmetric composition: headline and chart left-aligned with numerical results right-aligned, creating visual tension and scanability.

## Visual language

The visual language balances technical credibility with approachable warmth. The dark canvas suggests terminal environments and code editors, making developers feel at home. The pink gradient introduces personality and energy that distinguishes Bun from more sterile technical marketing.

Surfaces use subtle elevation through background color shifts rather than shadows—canvas to surface to surface-elevated creates depth without visual noise. Borders are hairline thin at 1px in border color, present but not prominent. Rounded corners are restrained: 0.75rem for panels and cards, 0.5rem for buttons, 9999px for pills and circular status indicators.

Imagery is minimal and functional: the Bun mascot appears as a small circular avatar in table headers, terminal window chrome frames code blocks with three-dot traffic lights, and benchmark bars use simple horizontal rectangles. The visual system prioritizes information density and scanability over decorative elements.

## Components

### Gradient Headline

- **Anatomy**: Text element with gradient background clipped to text fill
- **Surface and text color**: Transparent fill, background gradient from accent-pink to accent-pink-light
- **Typography**: hero-display or section-display token
- **Shape**: No border, no background surface
- **Spacing**: Centered within section, generous margin below before subsequent content
- **Composition**: Typically the first element in a section, establishing the narrative beat

### Feature Comparison Table

- **Anatomy**: Section header row with title and description, followed by comparison rows with feature name, description, and three platform columns (Bun, Node, Deno)
- **Surface and text color**: surface background, ink for feature names, muted-ink for descriptions, platform headers in ink with small mascot icon for Bun
- **Typography**: Feature names in body-small weight 600, descriptions in body-small, platform names in label
- **Shape**: 0.75rem rounded panel, internal horizontal rules at 1px border
- **Spacing**: 1.25rem internal cell padding, row height generous for readability
- **Composition**: Full-width within content constraint, rows alternate subtly or maintain single surface
- **Variants**: Section headers group related features with slightly elevated surface

### Code Block

- **Anatomy**: Terminal chrome header with three dots and filename, followed by scrollable code area with syntax highlighting and copy button
- **Surface and text color**: code-bg background, multi-color syntax highlighting, copy button in muted-ink
- **Typography**: code token for all content
- **Shape**: 0.75rem rounded panel, terminal header slightly separated or integrated
- **Spacing**: 1.25rem internal padding, line height comfortable for reading code
- **Composition**: Centered or left-aligned within content area, often the focal point of its section

### Capability Pill

- **Anatomy**: Rounded rectangle containing short descriptive text
- **Surface and text color**: surface-elevated background, muted-ink text, active/selected state uses slightly brighter text
- **Typography**: body-small
- **Shape**: 9999px full pill
- **Spacing**: Horizontal arrangement with 0.75rem gaps, internal padding approximately 0.5rem vertical and 1rem horizontal
- **Composition**: Rows of pills above code blocks, suggesting API categories or features

### Testimonial Card

- **Anatomy**: Username with handle, date stamp, and short message text
- **Surface and text color**: surface-elevated background, ink for username, muted-ink for handle and date, ink for message
- **Typography**: Username in body-small weight 600, handle and date in label, message in body-small
- **Shape**: 0.75rem rounded panel
- **Spacing**: 1.25rem internal padding, cards arranged in grid with 1rem gaps
- **Composition**: Masonry-like or strict grid layout, dense social proof wall

### Primary Button

- **Anatomy**: Text label with optional arrow icon, bordered container
- **Surface and text color**: Transparent background, ink text, border in ink or muted-ink
- **Typography**: body-small weight 500
- **Shape**: 0.5rem rounded rectangle, border 1px solid
- **Spacing**: Internal padding approximately 0.75rem vertical and 1.5rem horizontal
- **Composition**: Often right-aligned or inline with descriptive text, arrow icon positioned after text with small gap

### Benchmark Chart

- **Anatomy**: Horizontal bar chart with platform labels, gradient or solid bars, and numerical timing values
- **Surface and text color**: Transparent background, bars in accent-pink for Bun, surface-elevated for competitors, timing values in muted-ink
- **Typography**: Platform names in body, timing values in body-small, multiplier labels in label
- **Shape**: Bars with 0.25rem or 0.5rem radius
- **Spacing**: Generous row height, right-aligned numerical column
- **Composition**: Left-aligned labels, bars expand from label area, values right-aligned for easy comparison

## Responsive behavior

The design appears optimized for desktop viewing with its generous spacing and multi-column layouts. At narrower viewports, the following adaptations should preserve the visual system:

- Gradient headlines should scale down to section-display size, maintaining the gradient treatment
- Feature comparison tables should become horizontally scrollable or stack into card views, preserving the three-column comparison structure
- Testimonial grids should reduce from multi-column to single column, maintaining card proportions
- Code blocks should remain horizontally scrollable rather than wrapping, preserving line integrity
- Capability pills should wrap to multiple rows rather than compressing
- Benchmark charts should maintain label-bar-value alignment, potentially stacking the value below on very narrow screens

Touch targets for any interactive pills or buttons should maintain minimum 44px height. The dark canvas with light text remains accessible in various lighting conditions, though the gradient text should maintain sufficient contrast through its lighter end values.

## Practical implementation guidance

### Preserve
- The dark canvas-to-surface elevation system with subtle color shifts rather than shadows
- Gradient headline treatment as the signature brand moment
- Restrained rounded corner vocabulary: 0.75rem panels, 0.5rem buttons, 9999px pills
- Status color semantics: green for success, yellow for warning, red for error
- Code block terminal chrome with three-dot header and copy affordance
- Generous section spacing that lets each narrative beat breathe

### Avoid
- Adding decorative shadows or glows that compete with the gradient accents
- Introducing additional accent colors beyond the pink gradient and semantic status colors
- Making the canvas lighter than surface layers—darkness must increase with depth
- Crowding the gradient headlines with elements too close above or below
- Using solid pink backgrounds instead of the gradient text treatment

### Recommended Build Order
1. Establish the canvas and surface color tokens with the dark hierarchy
2. Implement Inter at all text sizes with proper weight and tracking
3. Create the gradient headline component as the primary brand element
4. Build the code block with terminal chrome and syntax highlighting
5. Develop the feature comparison table with status icon system
6. Add testimonial cards and grid layout
7. Implement capability pills and primary button with border treatment
8. Polish with benchmark chart and fine-tune spacing rhythm

### Accessibility
- Ensure gradient text maintains minimum 4.5:1 contrast ratio; the lighter end of the gradient toward accent-pink-light helps achieve this
- Provide aria-labels for status icons in comparison tables rather than relying solely on color
- Code blocks should include copy functionality with visible focus states
- Dark mode is the only mode; no light mode inversion is required
- Interactive elements should have visible focus indicators using the accent-pink color

## Scope note

This guide covers the Bun marketing homepage's visible desktop surface including the hero, feature comparison, API showcase, performance benchmark, and social proof sections. Mobile breakpoints, navigation behavior, footer content, documentation pages, and interactive states such as hover, focus, and loading are not represented in the supplied images. Measurements are practical adaptation targets derived from visual inspection.
