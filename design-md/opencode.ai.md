# How opencode.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/opencode.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Dark hero section with monospace headline, statistics paragraph, and three abstract data visualizations showing GitHub stars, contributors, and monthly developers in wireframe](https://pin.fontofweb.com/6260?format=jpg)](https://design.withfudge.com/share/pin-6260)

[Dark hero section with monospace headline, statistics paragraph, and three abstract data visualizations showing GitHub stars, contributors, and monthly developers in wireframe](https://design.withfudge.com/share/pin-6260)

[![Footer area with Zen model access section, email waitlist form with Subscribe button, five-column link grid, and copyright line on near-black background.](https://pin.fontofweb.com/6176?format=jpg)](https://design.withfudge.com/share/pin-6176)

[Footer area with Zen model access section, email waitlist form with Subscribe button, five-column link grid, and copyright line on near-black background.](https://design.withfudge.com/share/pin-6176)

[![FAQ accordion section with collapsed and expanded states, plus/minus indicators, and inline underlined links on dark background.](https://pin.fontofweb.com/6174?format=jpg)](https://design.withfudge.com/share/pin-6174)

[FAQ accordion section with collapsed and expanded states, plus/minus indicators, and inline underlined links on dark background.](https://design.withfudge.com/share/pin-6174)

## Overview

OpenCode's interface presents a stark, developer-centric aesthetic built entirely around a single monospace type family. The design rejects decorative flourish in favor of structural clarity: near-black backgrounds, carefully graded text layers from bright white to muted gray, and precise geometric spacing that evokes terminal environments and code editors. The visual system communicates technical credibility through restraint—every element serves readability and hierarchy rather than ornament.

The page architecture follows a linear scroll with distinct functional zones: a hero with abstract data visualizations, feature sections with model provider logos, an FAQ accordion, an email capture form, and a dense footer with social and legal links. The consistent dark canvas and monospace rhythm create a cohesive environment that feels like a natural extension of the developer tools the product represents.

## Colors

The palette is strictly dark-mode with four functional text layers and three surface depths. No accent colors appear beyond the binary on/off of white action elements against black space.

| token | hex | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #131010 | Card backgrounds, elevated panels |
| surface-elevated | #1B1818 | Input fields, hover states, secondary containers |
| border | #3D3838 | Visible rules, button outlines, dividers |
| border-subtle | #716B6A | Footer grid lines, tertiary separators |
| ink-muted | #7F7A7A | Placeholder text, disabled states, fine print |
| ink-secondary | #B8B2B2 | Body copy, FAQ answers, descriptive text |
| ink-primary | #F2EDED | Headlines, active navigation, strong emphasis |
| action | #FFFFFF | Primary buttons, active nav pills, key metrics |

The color logic follows a temperature-neutral gray scale with subtle warm undertones in the mid-grays. Text hierarchy operates through luminance contrast rather than hue variation: ink-primary at 95% lightness against canvas provides maximum readability, while ink-secondary at 73% lightness creates comfortable sustained reading for paragraphs. The action white is reserved for interactive commitment points—subscription buttons and active navigation states—making these elements pop without introducing foreign color.

Data visualizations in the hero use the same palette, rendering abstract charts in border-subtle and ink-muted tones that recede behind the text layer.

## Typography

IBM Plex Mono, designed by Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen of Bold Monday, is the sole type family. It appears in Regular (400), Medium (500), and Bold (700) weights. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | IBM Plex Mono | 2.375rem | 700 | 1.5 | normal | Page title, main headline |
| section-heading | IBM Plex Mono | 1rem | 700 | 1.5 | normal | Feature titles, FAQ labels |
| body | IBM Plex Mono | 1rem | 400 | 2.0 | normal | Paragraphs, descriptions |
| body-tight | IBM Plex Mono | 1rem | 400 | 1.5 | normal | Navigation, buttons, labels |
| label | IBM Plex Mono | 0.875rem | 500 | 2.0 | normal | Compact labels, metadata |
| navigation | IBM Plex Mono | 1rem | 400 | 1.5 | normal | Header and footer links |

The type scale is intentionally flat. Hero-display at 38px provides dramatic hierarchy without breaking the monospace rhythm, while the dense cluster at 16px maintains consistent vertical alignment across buttons, navigation, and body text. The 14px label size appears sparingly for metadata and compact UI elements. Line height varies by context: generous 2.0 leading for reading paragraphs, tighter 1.5 for navigation and interactive elements where vertical compactness aids scanning.

## Layout

The layout employs a single centered column with generous horizontal margins and consistent vertical rhythm. Content blocks stack with section spacing of 2.5rem to 3rem, creating clear territorial separation without visible divider lines.

The hero section centers its content with the headline and statistics paragraph occupying a constrained width, followed by three abstract visualizations arranged horizontally. These wireframe graphics—representing GitHub stars growth, contributor distribution, and developer usage—share equal width and sit on a shared baseline with small captions beneath.

Feature sections follow a simple pattern: bold heading, explanatory paragraph, optional logo row, and a call-to-action link. The Zen section demonstrates this with six model provider icons in a horizontal row, followed by an outlined button with arrow indicator.

The FAQ section uses full-width accordion items with left-aligned plus/minus indicators. Expanded answers indent slightly and maintain the paragraph leading of body text, with inline links carrying underline decoration.

The email capture form spans nearly full width with a dark input field and right-aligned subscribe button sharing the same vertical height. Below, the footer divides into a five-column link grid with equal-width cells separated by hairline borders, followed by a centered copyright and legal link row.

Spacing tokens derive from a 2px base unit, producing a practical scale from 4px for tight internal padding to 48px for major section breaks. The system favors 16px and 24px as the primary comfortable increments for component internals, with 32px and 40px for section margins.

## Visual language

The aesthetic identity draws from terminal interfaces and code repositories. The all-monospace treatment eliminates any friction between UI chrome and content, making the page feel like a rendered document rather than a conventional marketing site. Abstract data visualizations reinforce this: sparse line charts, dot matrices, and bar graphs rendered in muted grays suggest technical instrumentation rather than decorative illustration.

Iconography appears as simple geometric marks—plus and minus signs for accordion controls, right arrows for link buttons—drawn with the same stroke weight as the type. Model provider logos in the Zen section appear as white silhouettes against the dark ground, treated as content rather than branded badges.

The absence of gradients, shadows, or rounded corners beyond 4px creates a flat, precise materiality. The only dimensional cue is the subtle elevation of input fields and active navigation pills, achieved through background color shifts rather than shadow. This restraint makes the rare white button feel genuinely prominent.

## Components

### Primary button
- **Anatomy**: Text label with optional arrow icon
- **Surface**: Solid white background with near-black text
- **Typography**: label token at 0.875rem, Medium weight
- **Shape**: 4px border radius
- **Spacing**: 4px vertical padding, 20px horizontal padding
- **Composition**: Inline-flex with centered alignment

### Secondary button
- **Anatomy**: Text label with right arrow, left padding slightly larger than right
- **Surface**: Transparent background with 1px border in border color
- **Typography**: body-tight token, Regular weight
- **Shape**: 4px border radius
- **Spacing**: 8px top, 12px right, 8px bottom, 20px left
- **Composition**: Appears after descriptive content as a contained action

### Input field with button
- **Anatomy**: Single-line text input with integrated submit button
- **Surface**: Elevated dark background for input, white pill for button
- **Typography**: Placeholder in ink-muted, button label in label token
- **Shape**: 4px radius on input container, matching radius on button
- **Spacing**: 16px internal padding on input, 16px vertical button padding
- **Composition**: Flex row with button flush to right edge

### FAQ accordion
- **Anatomy**: Question row with plus/minus toggle, expandable answer panel
- **Surface**: Transparent, no visible container
- **Typography**: section-heading for questions, body for answers
- **Spacing**: 12px bottom margin on questions, comfortable paragraph leading in answers
- **Composition**: Full-width rows with left-aligned indicators; expanded state reveals indented answer with inline underlined links

### Footer link grid
- **Anatomy**: Five equal columns with centered text labels
- **Surface**: Transparent cells with 1px vertical borders in border-subtle
- **Typography**: navigation token, Regular weight
- **Spacing**: 32px vertical padding per cell
- **Composition**: Full-width grid with hairline separators, single row on desktop

### Navigation pill
- **Anatomy**: Text label with optional active state background
- **Surface**: Transparent default, white background when active
- **Typography**: navigation token, Medium weight when active
- **Shape**: 4px border radius
- **Spacing**: 8px vertical, 16px right, 8px bottom, 10px left for active variant

## Responsive behavior

The single-column layout adapts primarily through horizontal margins and type scaling. The hero headline at 38px should reduce to 28px on narrow viewports to prevent overflow. The three data visualizations may stack vertically below 768px, maintaining equal width within the constrained column.

The footer five-column grid should collapse to a two-column layout on tablet and single column on mobile, with borders shifting from vertical to horizontal separators. FAQ accordion indicators remain left-aligned with consistent tap targets of at least 44px height.

The email capture form's inline button should drop below the input field on narrow screens, becoming full-width to maintain touch accessibility. Navigation items, where visible, should collapse to a compact menu or horizontal scroll.

## Practical implementation guidance

### Preserve
- The strict monochrome palette and absence of accent colors
- IBM Plex Mono as the exclusive type family across all weights
- The 4px border radius as the maximum corner treatment
- Generous line height (2.0) for body paragraphs against dark backgrounds
- The visual hierarchy of four distinct text luminance levels

### Avoid
- Introducing sans-serif or serif typefaces for "contrast"—the monospace unity is the core identity
- Rounded corners larger than 4px or full pill shapes except for the subscribe button
- Drop shadows, glows, or gradient overlays
- Color accents that would break the grayscale technical aesthetic
- Tight line height on body text that reduces dark-mode readability

### Recommended build order
1. Establish the dark canvas and IBM Plex Mono font loading with all three weights
2. Implement the type scale with exact pixel values and line heights
3. Build the hero section with headline, statistics paragraph, and placeholder visualization area
4. Create the FAQ accordion with plus/minus state management
5. Develop the email capture form with integrated button
6. Construct the footer grid with border separators
7. Add secondary buttons and navigation pills with active states

### Accessibility
- Ensure white action elements on black meet WCAG AAA contrast; verify that ink-secondary at #B8B2B2 against #000000 meets AA for large text and AA for normal text
- Provide visible focus indicators on all interactive elements, using the action white or a 2px outline offset
- Maintain 44px minimum touch targets for accordion toggles and footer links
- Use semantic heading hierarchy despite the flat visual scale: h1 for hero, h3 for sections
- Consider a light-mode alternative for users with photophobia, inverting the palette while preserving the same luminance relationships

## Scope note

This guide covers the landing page surface including hero, feature sections, FAQ, email capture, and footer. Navigation header behavior, additional interior pages, motion or scroll-triggered animations, and mobile-specific menu patterns are not represented in the available material.
