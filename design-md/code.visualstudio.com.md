# How code.visualstudio.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/code.visualstudio.com-design)

Last updated: 2026-08-10

## Captured pages

[![Feature grid section with eight dark cards showing terminal, code execution, version control, build tasks, local history, themes, accessibility, and web support icons with blue](https://pin.fontofweb.com/5483?format=jpg)](https://design.withfudge.com/share/pin-5483)

[Feature grid section with eight dark cards showing terminal, code execution, version control, build tasks, local history, themes, accessibility, and web support icons with blue](https://design.withfudge.com/share/pin-5483)

[![Hero section with large white display headline over binary pattern background, centered download button, and prominent VS Code: editor screenshot with Copilot chat interface and](https://pin.fontofweb.com/5482?format=jpg)](https://design.withfudge.com/share/pin-5482)

[Hero section with large white display headline over binary pattern background, centered download button, and prominent VS Code: editor screenshot with Copilot chat interface and](https://design.withfudge.com/share/pin-5482)

## Overview

The Visual Studio Code: marketing site presents a dark, immersive experience built for developers. The design language centers on a near-black canvas that evokes the editor's default dark theme, creating immediate product recognition before users reach the download button. White typography at high contrast ensures readability against the deep background, while electric blue accents guide attention to interactive elements and feature highlights. The composition balances dramatic hero imagery—featuring the actual VS Code: interface with Copilot integration—against structured content sections that communicate capabilities through icon-driven cards. The overall impression is technical credibility combined with approachable clarity: the site speaks to professional developers without alienating newcomers. Visual hierarchy is established through scale contrast between the massive hero headline and supporting body text, while consistent spacing rhythms create predictable scan patterns down the page.

## Colors

The color system derives from the Visual Studio Code: dark theme aesthetic, using a carefully controlled palette that prioritizes code-editor familiarity and accessibility.

| token | value | use |
|---|---|---|
| canvas | `#0d1117` | Primary page background, deepest layer |
| surface | `#161b22` | Card backgrounds, elevated containers |
| surface-elevated | `#1c2128` | Icon containers, subtle raised elements |
| ink | `#ffffff` | Primary headings, body text on dark |
| ink-muted | `#8b949e` | Secondary descriptions, footer links |
| action | `#2f81f7` | Primary buttons, links, feature icons |
| action-hover | `#58a6ff` | Button hover states, link underlines |
| border | `#30363d` | Card borders, dividers, subtle separators |
| success | `#3fb950` | Positive indicators, git additions |
| warning | `#d29922` | Caution states, important notices |
| danger | `#f85149` | Errors, destructive actions |

The palette operates in a dark-first mode with no light variant visible. The canvas color `#0d1117` establishes the atmospheric depth, while surface layers at `#161b22` and `#1c2128` create subtle elevation through value shifts rather than shadows. The action blue `#2f81f7` serves as the singular accent, appearing in feature icons, the primary download button, and interactive highlights. This restraint with color ensures that blue elements consistently signal interactivity. Muted ink `#8b949e` handles descriptive text and footer navigation, maintaining hierarchy without competing with primary content. The semantic colors for success, warning, and danger appear in the product screenshot's syntax highlighting and status indicators, grounding the marketing palette in actual editor usage.

## Typography

The type system uses a single sans-serif family with weight and scale variation to establish hierarchy. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Segoe UI | 4rem | 600 | 1.1 | -0.02em | Hero headline, primary value proposition |
| section-display | Segoe UI | 2rem | 600 | 1.2 | -0.01em | Section headings, feature category titles |
| body | Segoe UI | 1rem | 400 | 1.5 | 0 | Primary descriptions, feature explanations |
| body-small | Segoe UI | 0.875rem | 400 | 1.5 | 0 | Compact descriptions, metadata |
| label | Segoe UI | 0.875rem | 600 | 1.25 | 0 | Card titles, button text, emphasis |
| navigation | Segoe UI | 0.875rem | 400 | 1 | 0 | Header links, footer navigation |
| legal-copy | Segoe UI | 0.75rem | 400 | 1.5 | 0 | Copyright, terms, privacy references |

The hero display at 4rem creates dramatic impact for the main headline, with tight tracking at -0.02em lending a modern, compact feel. Section display at 2rem maintains the semibold weight for consistent hierarchy while reducing scale for content sections. Body text at 1rem with 1.5 line height ensures comfortable reading for longer descriptions. The label style adds weight emphasis for card titles and interactive elements without changing size, creating density in information-rich areas. Navigation and legal-copy tokens handle utility text at smaller scales, with legal-copy at 0.75rem reserved for the fine print beneath the download button.

## Layout

The layout follows a centered, contained model with generous vertical breathing room. The hero section occupies the full viewport width with a dramatic binary-pattern background, centering all content including the headline, download button, and product screenshot. Content below the fold uses a maximum width container, approximately 80rem, with consistent horizontal padding of 2rem on each side.

The feature grid in the "Code: with rich features" section employs a four-column layout at desktop widths, with cards arranged in two rows of four. Grid gaps of 1rem separate cards both horizontally and vertically. Each card maintains internal padding of 1.5rem, with the icon container positioned at top-left, followed by the title and description stacked vertically with 0.5rem between elements.

The footer area compresses to a single row of social icons and legal links, left-aligned with the same container padding as main content. A small Microsoft logo appears at the far right, maintaining visual balance.

Vertical rhythm is established through section spacing of 6rem between major content areas, with the hero section receiving additional top padding to clear the fixed navigation. The product screenshot breaks the container bounds visually, extending nearly full-width to create immersion and demonstrate the actual interface.

## Visual language

The visual language communicates technical sophistication through developer-centric motifs. The hero background features a subtle binary code pattern (0s and 1s) in very low contrast against the dark canvas, creating texture without distraction. This pattern reinforces the code-editor identity while remaining subordinate to the product screenshot.

The product screenshot itself serves as the central visual anchor, displaying VS Code: with actual syntax-highlighted TypeScript code and the Copilot chat panel. This is not a stylized illustration but a faithful rendering of the interface, establishing trust through transparency. The screenshot receives a subtle blue glow or border treatment that connects it to the action color.

Feature icons use simple line-art style in the action blue `#2f81f7`, contained within rounded square backgrounds at `#1c2128`. This treatment creates consistent targets while differentiating icons from surrounding text. The icon style matches the VS Code: extension marketplace aesthetic.

Imagery throughout is functional rather than decorative. There are no lifestyle photographs or abstract illustrations; every visual element either shows the product or explains a capability. This restraint reinforces the tool-focused positioning.

## Components

### Primary action button

The download button represents the primary conversion element. Anatomy includes a left-aligned platform icon (Apple logo for macOS), bold label text, and optional dropdown chevron. Surface uses a solid fill at `#2f81f7` with white text. Typography applies the label token at 0.875rem semibold. Shape uses 0.5rem border radius with generous padding of 0.75rem vertical and 1.5rem horizontal. Composition centers the button within the hero, with legal copy stacked beneath at 0.75rem size in muted ink. Variants include platform-specific icons and labels, with a secondary text link for "Web, Insiders edition, or other platforms" appearing below in action blue.

### Feature card

Cards organize capabilities in the grid section. Anatomy comprises an icon container, title, and description. Surface uses `#161b22` background with 1px `#30363d` border. Typography applies label style for titles and body-small for descriptions. Shape uses 0.75rem border radius with 1.5rem internal padding. Spacing places the icon container 1rem above the title, with 0.5rem between title and description. Composition stacks elements vertically with left alignment. The icon container itself is a nested component with `#1c2128` background and 0.375rem radius, holding a 1.5rem icon in action blue.

### Navigation bar

The top navigation spans full width with fixed positioning. Anatomy includes the VS Code: wordmark logo at left, primary navigation links center-left, search input center-right, and download button at far right. Surface uses transparent or `#0d1117` background. Typography applies navigation token for links. Composition distributes elements with flexbox, maintaining consistent gaps of 1.5rem between navigation items. The search input uses a dark surface with border treatment and keyboard shortcut hint.

### Product screenshot frame

The hero screenshot creates a window into the product. Anatomy includes the VS Code: interface with title bar, sidebar, editor tabs, and panel areas. Surface receives a subtle blue-tinted border or shadow treatment connecting to the action color. Composition centers the screenshot with negative margin or full-bleed treatment, making it appear to float above the binary background. The screenshot content shows authentic interface states including syntax highlighting, file explorer, and AI chat panel.

### Footer

The footer compresses legal and social elements. Anatomy includes social media icon row and text link row. Surface uses the canvas color with no additional background. Typography applies navigation token for links and legal-copy for copyright. Composition left-aligns content with 2rem horizontal padding, placing social icons in a horizontal row with 1rem gaps, followed by legal links with 1.5rem gaps.

## Responsive behavior

The design should adapt from the desktop layout to narrower viewports through predictable transformations. The four-column feature grid should collapse to two columns at medium widths and single column on mobile, maintaining card proportions and internal spacing. The hero headline should scale down to 2.5rem on tablet and 2rem on mobile, preserving the tight line height. The product screenshot should remain centered but scale to fit viewport width, potentially cropping horizontal content rather than distorting aspect ratio.

Navigation should collapse to a hamburger menu on mobile, with the search input becoming a full-width overlay when activated. The download button should remain prominent but may shift to full-width below the headline on narrow screens. Footer social icons should wrap to multiple rows if necessary, maintaining touch targets of at least 44 by 44 pixels.

## Practical implementation guidance

### Preserve
- The dark canvas-first aesthetic; this is core to brand recognition
- High contrast between ink and canvas for accessibility
- Restrained use of action blue as the sole accent
- Authentic product screenshots over illustrations
- Binary pattern texture in hero background
- Consistent card elevation through border and subtle background shift

### Avoid
- Introducing additional accent colors beyond the blue system
- Light mode as default; the dark theme is identity-defining
- Decorative imagery unrelated to the product
- Generic button styles that don't reference the editor UI
- Shadows as primary elevation mechanism; prefer borders and value shifts
- Center-aligned body text outside of hero section

### Recommended build order
1. Establish canvas, surface, and ink color tokens with proper contrast ratios
2. Implement hero section with binary background pattern and centered layout
3. Build primary action button with platform detection and icon support
4. Create feature card component with icon container and consistent padding
5. Construct responsive grid for feature section
6. Add navigation with search input and mobile collapse behavior
7. Integrate product screenshot with appropriate framing and glow treatment
8. Implement footer with social icon links and legal text

### Accessibility
- Maintain minimum 4.5:1 contrast ratio for all body text against backgrounds
- Ensure 3:1 contrast for large text and UI components
- Provide visible focus indicators on all interactive elements using action color
- Include alt text for product screenshots describing visible interface state
- Support keyboard navigation through logical tab order matching visual hierarchy
- Respect reduced-motion preferences for any animated transitions

## Scope note

This guide covers the Visual Studio Code: homepage marketing experience as visible in the supplied images, including the hero section, feature grid, and footer. Navigation dropdowns, documentation pages, download flows, and mobile-specific layouts are not represented. Measurements are practical adaptation targets. Verify licensing for Segoe UI before production use, or substitute with an equivalent system font stack.
