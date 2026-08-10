# How marimo.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/marimo.io-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with teal-highlighted 'love letter' headline and feature cards showing code-outputs sync with scatter plot visualization](https://pin.fontofweb.com/2713?format=jpg)](https://design.withfudge.com/share/pin-2713)

[Hero section with teal-highlighted 'love letter' headline and feature cards showing code-outputs sync with scatter plot visualization](https://design.withfudge.com/share/pin-2713)

[![Top navigation with marimo logo, hero headline 'unified development environment', install command block, and notebook UI screenshot with tabbed controls](https://pin.fontofweb.com/2711?format=jpg)](https://design.withfudge.com/share/pin-2711)

[Top navigation with marimo logo, hero headline 'unified development environment', install command block, and notebook UI screenshot with tabbed controls](https://design.withfudge.com/share/pin-2711)

[![Community section with newsletter signup form, social icon buttons, and multi-column footer with categorized navigation links](https://pin.fontofweb.com/2689?format=jpg)](https://design.withfudge.com/share/pin-2689)

[Community section with newsletter signup form, social icon buttons, and multi-column footer with categorized navigation links](https://design.withfudge.com/share/pin-2689)

[![Gallery section with gradient 'Made with marimo' heading, example notebook cards with data visualizations and arrow-linked project titles](https://pin.fontofweb.com/2688?format=jpg)](https://design.withfudge.com/share/pin-2688)

[Gallery section with gradient 'Made with marimo' heading, example notebook cards with data visualizations and arrow-linked project titles](https://design.withfudge.com/share/pin-2688)

## Overview

The marimo marketing site presents a developer tool through a restrained, high-contrast visual system. The design prioritizes clarity and technical credibility: generous whitespace frames dense information, while a single teal accent color guides attention to calls-to-action and interactive elements. The overall impression is of a modern, trustworthy productivity tool—clean without being cold, structured without being rigid.

The visual hierarchy moves from bold, geometric headlines in Rubik through readable Inter body copy to functional labels and code snippets. The site alternates between light, airy sections and contained feature demonstrations, using subtle borders and soft backgrounds to delineate content areas without heavy visual weight. Photography and data visualizations appear inside rounded cards, giving technical content a polished, approachable presentation.

## Colors

The palette is intentionally minimal, built on a near-black and white foundation with a distinctive teal accent that carries brand recognition across all interactive elements.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, headings, strong emphasis |
| canvas | #FFFFFF | Page backgrounds, card surfaces, button text on dark |
| surface | #F5F5F5 | Code block backgrounds, subtle section alternation |
| accent | #1DB584 | Primary buttons, links, highlighted text backgrounds, interactive accents |
| accent-hover | #159A6E | Button hover states, link hover |
| muted | #6B7280 | Secondary text, captions, footer links, placeholder text |
| border | #E5E7EB | Card borders, dividers, input outlines |
| gradient-start | #3B82F6 | Gradient headline start (blue) |
| gradient-end | #22D3EE | Gradient headline end (cyan) |

The light mode dominates the visible pages. The teal accent functions as the sole chromatic voice—appearing in buttons, inline link underlines, highlighted word backgrounds, and icon treatments. This discipline prevents visual competition with the colorful data visualizations and notebook screenshots that appear throughout. The gradient display treatment, visible in the "Made with marimo" section, introduces a blue-to-cyan range that complements the teal without conflicting, creating a cohesive cool-tone family for special headlines.

## Typography

Two font families serve distinct roles: Rubik for display impact and Inter for everything else. The pairing creates clear tonal separation between marketing voice and technical content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Rubik | 3.5rem | 500 | 1.1 | -0.02em | Main page headlines |
| section-display | Rubik | 2.5rem | 500 | 1.2 | -0.01em | Section headings |
| gradient-display | Rubik | 2.5rem | 500 | 1.2 | -0.01em | Special gradient-filled headlines |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions |
| body-large | Inter | 1.25rem | 400 | 1.5 | 0 | Hero subheadings, lead paragraphs |
| label | Inter | 0.875rem | 500 | 1.4 | 0.02em | Buttons, tags, category labels |
| navigation | Inter | 0.875rem | 400 | 1 | 0 | Header menu items |
| code | Inter | 0.875rem | 400 | 1.5 | 0 | Code snippets, command blocks |

Rubik appears exclusively at medium weight (500), giving headlines a geometric, slightly rounded character that feels contemporary and approachable without the heaviness of bold. Inter handles all reading text at regular weight, with medium weight reserved for labels and interactive elements that need subtle emphasis. The type scale uses 4px increments, with display sizes stepping up significantly to create dramatic hierarchy between marketing statements and supporting content.

Verify licensing for these families before production use. Inter is designed by Rasmus Andersson and distributed by Rsms. Rubik is designed by Hubert And Fischer and distributed by Hubert And Fischer.

## Layout

The site employs a centered, single-column content flow with periodic breakout sections. Maximum content width appears constrained to a comfortable reading measure, with feature demonstrations and gallery items expanding into wider asymmetric arrangements.

The header uses a fixed or sticky navigation bar with logo left, menu center-right, and utility actions (GitHub star count, user avatar) at the far right. Below the header, hero sections center-align text with generous vertical padding—typically 6rem or more above and below the content block.

Feature sections alternate between centered text introductions and side-by-side compositions. In these split layouts, descriptive text occupies the left portion while screenshots, code blocks, or data visualizations sit right, often within rounded cards that cast subtle shadows or bear light borders. The gallery section uses a more complex grid: section headers left-align while example cards form a responsive arrangement, some spanning wider to accommodate larger visualizations.

Vertical rhythm is maintained through consistent section spacing of 6rem, with internal gaps of 1.5rem between related elements. Cards and contained elements use 2rem internal padding, creating breathable space around technical content without excessive separation.

## Visual language

The visual identity balances technical precision with approachable warmth. Geometric sans-serif letterforms and crisp edges communicate engineering credibility, while rounded corners on cards, buttons, and inputs soften the overall impression.

Iconography appears as simple line drawings or filled glyphs, often paired with text labels in navigation and feature lists. Social icons in the community section receive circular container treatments with subtle borders, creating button-like targets without heavy backgrounds.

Data visualizations and notebook screenshots appear as first-class content elements, not decorative afterthoughts. They sit within rounded cards with light borders, sometimes with small caption text below attributing the example. This presentation treats user-generated and technical content as worthy of careful framing.

The teal accent appears strategically: as a solid background for highlighted words in headlines, as the fill for primary buttons, as link color for calls-to-action, and as a subtle presence in the logo mark. Its saturation is calibrated to feel energetic without overwhelming the predominantly monochrome environment.

Shadows are minimal and soft, used primarily to lift card elements slightly from the page background. The overall effect is flat but dimensional—layered through careful spacing and border treatments rather than dramatic depth effects.

## Components

### Primary button

- Anatomy: Text label centered within a pill-shaped container
- Surface and text color: `{colors.accent}` background with `{colors.canvas}` text
- Typography: `{typography.label}`
- Shape: Full pill via `9999px` border radius
- Spacing: `0.75rem` vertical padding, `2rem` horizontal padding
- Composition: Standalone or paired with secondary actions
- Variants: Hover state shifts to `{colors.accent-hover}`

### Secondary button

- Anatomy: Text label within bordered pill container
- Surface and text color: `{colors.canvas}` background, `{colors.ink}` text, `{colors.border}` border
- Typography: `{typography.label}`
- Shape: Full pill via `9999px` border radius
- Spacing: `0.75rem` vertical padding, `2rem` horizontal padding
- Composition: Appears alongside primary buttons for alternative actions

### Feature card

- Anatomy: Rounded rectangle containing icon, heading, body text, and optional media
- Surface and text color: `{colors.canvas}` background, `{colors.ink}` headings, `{colors.muted}` body text
- Typography: Section heading uses `{typography.section-display}` at smaller scale; body uses `{typography.body}`
- Shape: `0.75rem` border radius
- Border: `1px solid {colors.border}`
- Spacing: `2rem` internal padding
- Composition: Grid arrangement with equal-width cards, or single wide card with internal split layout

### Code block

- Anatomy: Monospace text within contained rectangle, often with copy action
- Surface and text color: `{colors.surface}` background, `{colors.ink}` text
- Typography: `{typography.code}`
- Shape: `0.75rem` border radius
- Spacing: `1rem` vertical padding, `1.5rem` horizontal padding
- Composition: Positioned beside descriptive text or centered as installation instructions

### Newsletter input

- Anatomy: Text input field with placeholder text, followed by submit button
- Surface and text color: `{colors.canvas}` background, `{colors.muted}` placeholder, `{colors.ink}` entered text
- Typography: `{typography.body}` for input, `{typography.label}` for button
- Shape: Full pill via `9999px` border radius for both input and button
- Border: `1px solid {colors.border}` for input
- Spacing: `0.75rem` vertical padding, `1.5rem` horizontal padding for input; `0.75rem 2rem` for button
- Composition: Vertically stacked with `0.75rem` gap between input and button

### Footer navigation

- Anatomy: Multi-column grid of categorized links with small icons
- Surface and text color: `{colors.canvas}` background, `{colors.muted}` link text, `{colors.ink}` category headings
- Typography: `{typography.label}` for category headings (uppercase treatment), `{typography.navigation}` for links
- Spacing: Generous top padding, compact vertical spacing between links
- Composition: Logo and social icons left-aligned, link columns right-aligned in responsive grid

## Responsive behavior

The layout appears optimized for desktop viewing based on available materials. The centered content approach and generous whitespace should translate naturally to narrower viewports through straightforward stacking: navigation collapsing to a menu trigger, side-by-side feature sections becoming single-column, and footer columns stacking vertically.

The type scale may require adjustment at smaller sizes. The hero display at `3.5rem` should reduce to approximately `2.5rem` on tablet and `2rem` on mobile to maintain comfortable line lengths. Feature cards that sit side-by-side on desktop should stack with maintained internal spacing.

The code block and notebook screenshot components, which contain dense technical information, may require horizontal scrolling or simplified presentation on narrow screens. Consider maintaining their contained card treatment while allowing overflow scroll for code content.

## Practical implementation guidance

### Preserve
- The strict two-family typography system with Rubik limited to display and Inter handling all else
- The single teal accent color as the only saturated hue in UI elements
- Generous whitespace around sections and within cards
- Rounded corners on all interactive and contained elements
- The gradient headline treatment for special sections, using the blue-to-cyan range

### Avoid
- Introducing additional accent colors that compete with the teal
- Using Rubik for body text or small labels—it loses readability at small sizes
- Heavy shadows or dramatic depth effects that conflict with the flat, clean aesthetic
- Tight spacing around technical content; the design relies on breathing room
- Generic button shapes; the full pill is distinctive to this system

### Recommended build order
1. Establish the type scale with Inter and Rubik loaded at the specified weights
2. Implement the color tokens, confirming the teal renders correctly across surfaces
3. Build the header navigation with logo, links, and utility area
4. Create the hero section with centered alignment and code block beside or below
5. Develop feature card components with consistent padding and border treatment
6. Implement the gallery section with gradient headline and asymmetric card layout
7. Build the community section with newsletter form and social icons
8. Construct the multi-column footer with categorized link structure

### Accessibility
- Ensure the teal accent (`#1DB584`) meets contrast requirements against white backgrounds; it may need darkening for small text
- Provide visible focus states for pill buttons and navigation links
- Maintain semantic heading hierarchy: Rubik display sizes should map to `h1` through `h3` appropriately
- Code blocks should be scrollable rather than shrinking text to fit
- Newsletter input requires associated label for screen readers, visually hidden if placeholder serves visible purpose

## Scope note

This guide covers the marimo.io marketing homepage visible in supplied materials, including hero, features, gallery, community, and footer surfaces. Mobile breakpoints, animation behavior, dark mode, and interactive states beyond static hover assumptions are not documented. Measurements are practical adaptation targets derived from visual inspection.
