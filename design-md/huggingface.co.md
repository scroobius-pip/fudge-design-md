# How huggingface.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/huggingface.co-design)

Last updated: 2026-08-10

## Captured pages

[![Dark-themed homepage hero with large white display headline, yellow Hugging Face logo, and search bar against deep navy background](https://pin.fontofweb.com/3873?format=jpg)](https://design.withfudge.com/share/pin-3873)

[Dark-themed homepage hero with large white display headline, yellow Hugging Face logo, and search bar against deep navy background](https://design.withfudge.com/share/pin-3873)

[![Dark footer section with yellow emoji illustration band, resource link columns, and system theme toggle on near-black background](https://pin.fontofweb.com/3874?format=jpg)](https://design.withfudge.com/share/pin-3874)

[Dark footer section with yellow emoji illustration band, resource link columns, and system theme toggle on near-black background](https://design.withfudge.com/share/pin-3874)

[![Light-themed Space demo page with gradient wave background, card-based interface, and audio player controls](https://pin.fontofweb.com/5690?format=jpg)](https://design.withfudge.com/share/pin-5690)

[Light-themed Space demo page with gradient wave background, card-based interface, and audio player controls](https://design.withfudge.com/share/pin-5690)

## Overview

Hugging Face presents a developer platform that balances technical credibility with approachable personality. The system operates in two distinct modes: a dark, immersive shell for browsing models and community resources, and a light, demo-oriented surface for interactive Spaces. The dark mode dominates the platform's core experience, using a deep navy canvas that makes code, metadata, and the signature yellow Hugging Face emoji pop with high contrast. The light mode appears in demo contexts where user-generated content and interactive controls need neutral, accessible backgrounds.

The visual identity centers on the yellow emoji mascot, which appears in the logo, hero illustrations, and promotional graphics. This warm accent against cool dark surfaces creates immediate brand recognition. Typography is clean and functional, using a single sans-serif family at weights that distinguish hierarchy without decorative flourishes. The layout prioritizes information density in the model browser while opening up dramatically for marketing pages and demo interfaces. Component design favors subtle borders and background shifts over heavy shadows, maintaining a flat, contemporary feel that reads as modern infrastructure rather than consumer gloss.

## Colors

The color system is built around a dark-mode-first philosophy with a complete light-mode counterpart for demo surfaces. The dark palette uses a near-black navy for the deepest backgrounds, layered with slightly elevated surfaces for cards, inputs, and navigation. Text operates on a three-level hierarchy from pure white for primary content through muted gray for secondary information to dim gray for metadata and placeholders. The signature yellow serves as the sole accent, reserved for calls to action, the brand mark, and illustrative moments.

| token | value | use |
|---|---|---|
| canvas | #0C1117 | Primary dark background, page shell |
| surface | #151B22 | Card backgrounds, secondary containers |
| surface-elevated | #1C2128 | Inputs, dropdowns, hover states |
| ink | #FFFFFF | Primary text, headings, active navigation |
| ink-muted | #8B949E | Secondary text, descriptions, footer links |
| ink-dim | #6E7681 | Metadata, timestamps, placeholder text |
| action | #FFD21E | Primary buttons, brand logo, emoji accents |
| action-hover | #FFE55C | Button hover, interactive yellow elements |
| border | #30363D | Card borders, dividers, input outlines |
| border-subtle | #21262D | Subtle separators, inactive state borders |
| light-canvas | #FFFFFF | Demo page backgrounds, Space interfaces |
| light-surface | #F6F8FA | Light mode cards, elevated panels |
| light-ink | #1F2328 | Primary text on light backgrounds |
| light-ink-muted | #656D76 | Secondary text on light backgrounds |
| light-border | #D0D7DE | Light mode dividers, input borders |

The dark mode creates a code-editor-like atmosphere that reduces eye strain during long browsing sessions and makes syntax-highlighted content, model cards, and dataset previews feel native. The light mode inverts this relationship for demo contexts where users interact with generated outputs, audio players, and text inputs that benefit from traditional paper-like contrast. The yellow accent remains consistent across both modes, ensuring brand continuity. Gradients appear only in illustrative contexts, such as the pink-to-purple wave backgrounds in certain Spaces, and are not part of the core UI token set.

## Typography

The platform uses Source Sans Pro, an open-source sans-serif designed by Paul D Hunt and published by Adobe Systems Incorporated. The family provides the full weight range needed for a technical platform without introducing visual complexity. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Source Sans Pro | 4rem | 700 | 1.1 | -0.01em | Homepage hero headlines, major marketing statements |
| section-display | Source Sans Pro | 2rem | 700 | 1.2 | -0.005em | Section headers, page titles |
| body | Source Sans Pro | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, general content |
| body-small | Source Sans Pro | 0.875rem | 400 | 1.5 | 0 | Card descriptions, metadata, footer content |
| label | Source Sans Pro | 0.75rem | 600 | 1.4 | 0.02em | Buttons, tags, category labels, badges |
| navigation | Source Sans Pro | 0.875rem | 600 | 1 | 0 | Top bar links, section tabs, filter categories |

Type sizing follows a 4px grid, with display sizes at 64px and 32px, body at 16px, and supporting sizes at 14px and 12px. The hero display uses tight leading and slight negative tracking to create impactful marketing headlines that fill the viewport width without feeling sprawling. Navigation and labels use the semibold weight to maintain scannability at small sizes without resorting to all-caps treatment. Code snippets and package names appear in a monospace face at the body-small size, set within pill-shaped containers with subtle background tints.

## Layout

The layout system adapts to two primary contexts: the dense, information-rich model browser and the spacious, centered demo experience. The dark homepage uses a full-width hero section with asymmetric composition, placing the headline and call-to-action on the left while the right side hosts an expansive task browser and model listing. This split creates a clear hierarchy between brand messaging and functional exploration.

Navigation sits in a fixed top bar at 64px height, containing the logo, global search, primary section links, and authentication actions. Below this, the hero section occupies approximately 60% of the initial viewport, with generous vertical padding that allows the large display type to breathe. Content sections follow with consistent section spacing, using a centered max-width container for text-heavy areas and full-bleed layouts for card grids and data tables.

The model browser interface uses a sidebar-and-panel structure, with filter categories and task navigation in a left column and scrollable result cards in the main area. Cards maintain consistent internal padding and align to a uniform grid with equal gaps. Footer content organizes into four-column link groups with clear category headers, sitting above a near-black base layer.

In light-mode demo pages, the layout shifts to a centered, narrower content column that focuses attention on the interactive element. Cards stack vertically with comfortable spacing, and control bars group related actions in horizontal clusters with consistent internal spacing.

## Visual language

The visual personality emerges from the tension between technical precision and playful warmth. The dark interface communicates seriousness and engineering credibility, while the yellow emoji mascot and illustrative elements prevent the experience from feeling sterile. Rounded corners are applied consistently but moderately, panels and cards use 12px radius while buttons and tags use full pill shapes. This creates a system that feels friendly without becoming childish.

Borders are thin and subtle, functioning as optical separators rather than heavy frames. The dark mode relies on background color shifts to establish elevation, with each layer stepping up slightly in lightness. Shadows are minimal or absent, maintaining the flat aesthetic. The light mode introduces slightly more visible borders to compensate for reduced background contrast.

Imagery and illustration follow a consistent approach: the yellow Hugging Face emoji appears in various poses and densities, from the single logo mark to dense crowds of emotive faces that create texture and energy. These illustrations are full-bleed when used as section dividers, breaking up the dark interface with warm, organic shapes. Demo pages may use soft gradient waves in pink and purple tones as decorative backgrounds behind cards, adding depth without competing with interactive content.

Iconography is simple and functional, using line-style icons at 16px and 20px sizes for interface actions and filled icons for category identification in the task browser.

## Components

### Primary button
- **Anatomy**: Text label centered within a pill-shaped container; may include a leading icon
- **Surface and text color**: Background uses action yellow (#FFD21E), text uses canvas dark (#0C1117)
- **Typography**: label token, semibold weight
- **Shape**: Full pill border radius (9999px)
- **Spacing**: 12px vertical padding, 24px horizontal padding
- **Composition**: Inline-flex with centered alignment; minimum height of 44px for touch targets
- **Variants**: Default state with solid fill; hover state lightens to action-hover (#FFE55C); may appear in secondary style with transparent background and border for less prominent actions

### Search input
- **Anatomy**: Text field with leading search icon, placeholder text, and optional clear action
- **Surface and text color**: Background uses surface-elevated (#1C2128), text uses ink white, placeholder uses ink-dim
- **Typography**: body-small token
- **Shape**: 8px border radius
- **Border**: 1px solid border color (#30363D), transitioning to subtle border on focus
- **Spacing**: 10px vertical padding, 16px horizontal padding, 40px left padding for icon
- **Composition**: Full-width in navigation bar, constrained width in page headers

### Resource card
- **Anatomy**: Container with category label, title, star count, and description
- **Surface and text color**: Background uses surface (#151B22), title uses ink white, description uses ink-muted, metadata uses ink-dim
- **Typography**: Title uses section-display at smaller scale or body with semibold weight; description uses body-small; metadata uses label
- **Shape**: 12px border radius
- **Border**: 1px solid border-subtle (#21262D)
- **Spacing**: 24px internal padding
- **Composition**: Vertical stack with 8px between title and metadata, 12px to description

### Demo card
- **Anatomy**: Elevated panel containing interactive controls, text inputs, or media players
- **Surface and text color**: Background uses light-surface (#F6F8FA), text uses light-ink
- **Typography**: body token for content, label for controls
- **Shape**: 12px border radius
- **Border**: 1px solid light-border (#D0D7DE)
- **Spacing**: 24px internal padding
- **Composition**: Centered in viewport with max-width constraint, generous vertical margin

### Audio player
- **Anatomy**: Progress bar with current and total time, playback controls (previous, play/pause, next), volume slider, and auxiliary actions
- **Surface and text color**: Background uses light-canvas or transparent, controls use light-ink
- **Typography**: body-small for timestamps
- **Shape**: Progress bar uses 4px height with rounded ends; buttons use circular hit areas
- **Spacing**: 16px between control groups, 8px internal button padding
- **Composition**: Horizontal bar layout with flex distribution; progress bar expands to fill available space

### Navigation bar
- **Anatomy**: Fixed top bar with logo, search, section links, and auth actions
- **Surface and text color**: Background uses canvas with slight transparency and backdrop blur, links use ink-muted transitioning to ink on hover, active section uses ink
- **Typography**: navigation token for links, label for auth buttons
- **Shape**: Full-width, 64px height
- **Spacing**: 16px horizontal page margins, 24px between nav items
- **Composition**: Flex row with logo left, search center-left, links center-right, auth far right

### Footer
- **Anatomy**: Full-width section with link columns, theme toggle, and decorative illustration band
- **Surface and text color**: Background matches canvas, links use ink-muted transitioning to ink on hover, headers use ink
- **Typography**: body-small for links, label for column headers, body-small for theme toggle
- **Spacing**: 64px vertical padding, 24px between columns, 16px between links
- **Composition**: Four-column grid for links above a full-bleed emoji illustration that creates a visual transition to the page end

## Responsive behavior

The navigation bar collapses section links into a menu at narrower viewports, maintaining search and auth actions as persistent elements. The homepage hero transitions from a side-by-side layout to a stacked vertical arrangement, with the task browser moving below the headline and call-to-action. Card grids reflow from four columns to two and then single column, maintaining consistent card internal spacing throughout.

The model browser sidebar transforms into a collapsible filter panel triggered by a button, preserving screen space for result cards on smaller devices. Footer columns stack vertically with category headers becoming expandable sections. Touch targets maintain minimum 44px height for all interactive elements.

Demo pages maintain centered content columns with reduced horizontal padding, allowing interactive elements to remain usable without horizontal scrolling. Audio player controls may rearrange to a two-row layout on very narrow screens, with playback controls above the progress bar and volume.

## Practical implementation guidance

### Preserve
- The dark-mode-first approach with its specific navy tones rather than pure black; the slight warmth in the canvas color prevents the harshness of #000000
- The single yellow accent used sparingly for brand moments and primary actions; do not introduce additional accent colors
- The flat elevation system using background color shifts rather than shadows
- The pill shape for primary buttons and tags as a distinctive brand element
- The generous whitespace in hero sections that allows the large display type to command attention

### Avoid
- Heavy drop shadows that would contradict the flat, technical aesthetic
- Additional accent colors beyond the signature yellow; the system derives visual interest from illustration and photography rather than chromatic variety
- Border-radius values larger than 12px for cards and panels; the 12px value maintains professionalism while the pill shape handles expressive moments
- Pure black backgrounds that would eliminate the subtle depth of the navy canvas
- All-caps text treatments; the system relies on weight and size for hierarchy

### Recommended build order
1. Establish the dark canvas and surface color tokens with proper contrast ratios
2. Implement Source Sans Pro at the six defined sizes with correct weights and tracking
3. Build the navigation bar with search input and responsive collapse behavior
4. Create the button system with pill primary and bordered secondary variants
5. Develop card components for both dark resource browsing and light demo contexts
6. Implement the homepage hero layout with asymmetric composition
7. Add the footer with column structure and emoji illustration integration
8. Refine light-mode surfaces for demo and Space interfaces

### Accessibility
- Ensure the yellow action color meets contrast requirements against the dark canvas; when used for text, verify 4.5:1 minimum ratio or provide additional indicators
- Maintain focus indicators that are visible against both dark and light surfaces; consider a dual-ring approach that works across modes
- Provide reduced-motion alternatives for any animated emoji illustrations or gradient backgrounds
- Ensure the search input has an accessible label and clear error states
- Structure the model browser with proper heading hierarchy and landmark regions for screen reader navigation

## Scope note

This guide covers the homepage, model browser, and Space demo surfaces visible in the supplied images. Mobile breakpoints, animation specifications, form validation states, and the complete light-mode token set beyond demo cards are not fully represented. Measurements are practical adaptation targets based on visible proportions. The code editor, dataset viewer, and community discussion interfaces are not included in this scope.
