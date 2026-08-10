# How storybook.js.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/storybook.js.org-design)

Last updated: 2026-08-10

## Captured pages

[![Testing features section with yellow UI mockup and dark feature cards showing spot test, visual test, interaction test, accessibility, coverage, and snapshot options](https://pin.fontofweb.com/8026?format=jpg)](https://design.withfudge.com/share/pin-8026)

[Testing features section with yellow UI mockup and dark feature cards showing spot test, visual test, interaction test, accessibility, coverage, and snapshot options](https://design.withfudge.com/share/pin-8026)

[![Hero section with company logos, headline about durable user interfaces, and Storybook application screenshot with code editor](https://pin.fontofweb.com/8025?format=jpg)](https://design.withfudge.com/share/pin-8025)

[Hero section with company logos, headline about durable user interfaces, and Storybook application screenshot with code editor](https://design.withfudge.com/share/pin-8025)

[![Homepage hero with pink-to-blue gradient background, navigation bar, Get Started button, npm command, and Storybook component preview with Controls panel](https://pin.fontofweb.com/8024?format=jpg)](https://design.withfudge.com/share/pin-8024)

[Homepage hero with pink-to-blue gradient background, navigation bar, Get Started button, npm command, and Storybook component preview with Controls panel](https://design.withfudge.com/share/pin-8024)

## Overview

Storybook's marketing site presents a developer-focused visual system built on a near-black canvas with high-contrast white typography. The design communicates technical credibility through dark surfaces, precise spacing, and vibrant gradient accents that evoke the energy of a live coding environment. The homepage opens with a dramatic pink-to-blue gradient hero that immediately signals creative possibility, then transitions into deep black sections where product screenshots and feature explanations take center stage. The overall rhythm alternates between atmospheric gradient moments and utilitarian dark zones, creating visual interest without distracting from the technical content. Product UI screenshots are rendered at realistic scale, often with browser chrome, allowing visitors to recognize the actual tool interface. The system prioritizes readability for long-form technical explanations while maintaining enough visual punch to compete in the crowded developer-tools landscape.

## Colors

The color system operates on a dark-mode foundation with selective use of vibrant gradients and a single bright blue accent.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, deep sections, footer areas |
| canvas-deep | #020617 | Slightly lifted dark surface for subtle variation |
| ink | #FFFFFF | Primary text, headings, button labels on dark |
| ink-muted | #73828C | Secondary text, descriptions, metadata labels |
| ink-secondary | #76828B | Subtle text variations, inactive states |
| accent-blue | #029CFD | Primary action color, links, active tab indicators, selected states |
| surface-elevated | #3F3F46 | Card backgrounds on dark, elevated panels |
| surface-subtle | #52525B | Borders on elevated surfaces, dividers |
| border-default | #D9E0E6 | Light borders for input fields, subtle dividers |
| border-subtle | #F7F9FC | Very light borders, hairline separators |

The hero gradient spans from deep pink through purple to rich blue, creating an atmospheric backdrop for the main headline. This gradient uses `linear-gradient(to right, rgb(52, 0, 0), rgb(0, 0, 0), rgb(0, 0, 64))` as its technical foundation, producing visible pink and blue tones. Dark sections dominate the page, with white text providing maximum contrast. The accent blue appears sparingly for interactive elements and selection states, ensuring it retains impact. Feature cards in dark sections use thin borders rather than filled backgrounds, maintaining the airy, technical aesthetic.

## Typography

The site uses a single font family with weight and size variations to establish hierarchy. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Nunito Sans 12 Pt 12 Pt | 3.5rem | 700 | 1.25 | normal | Homepage hero headline, major section titles |
| section-display | Nunito Sans 12 Pt 12 Pt | 3.5rem | 700 | 1.25 | normal | Secondary page headlines, feature section headers |
| body | Nunito Sans 12 Pt 12 Pt | 1rem | 400 | 1.75 | normal | Long-form descriptions, explanatory paragraphs |
| body-tight | Nunito Sans 12 Pt 12 Pt | 1rem | 400 | 1.5 | normal | Shorter text blocks, card descriptions |
| label | Nunito Sans 12 Pt 12 Pt | 0.75rem | 700 | 1.33 | 0.05em | Small caps labels, metadata, category tags |
| navigation | Nunito Sans 12 Pt 12 Pt | 0.875rem | 700 | 1.43 | normal | Header nav items, footer links |
| button | Nunito Sans 12 Pt 12 Pt | 1rem | 700 | 1.5 | normal | Primary and secondary button labels |
| code | Nunito Sans 12 Pt 12 Pt | 0.875rem | 400 | 1.43 | normal | Inline code, command snippets |

The type scale is restrained, with dramatic size jumps between body text and display headings. Headlines use a bold weight that feels substantial without being heavy. Body text maintains generous line height for comfortable reading of technical content. The label style with its slight letter spacing creates effective hierarchy for small metadata. No italic styles are employed; emphasis comes entirely through weight and color changes.

## Layout

The layout follows a centered container model with generous vertical breathing room. The maximum content width is approximately 82.8125rem, with horizontal margins that center the content on wide screens. Sections stack vertically with consistent padding of 6rem top and bottom, creating clear separation between content areas.

The header is fixed or sticky, containing the Storybook logo mark on the left, primary navigation in the center, and utility actions on the right. Navigation items include Docs, Addons, Showcase, Blog, Visual Test, and Enterprise. The right cluster contains a GitHub star count, search input, and a Get Started button.

Hero sections use full-width gradient backgrounds that extend to the viewport edges, with content constrained to the central container. Below the hero, a tabbed interface allows switching between Development, Interaction testing, Visual testing, and Documentation views. Each tab reveals a large product screenshot positioned to demonstrate the actual application interface.

Feature sections alternate between two-column layouts and centered single-column arrangements. The two-column pattern places a headline and description on the left with a supporting visual or feature list on the right. Product screenshots often break the container bounds slightly, creating depth through overlap with background elements.

Spacing between related elements within components is typically 1.5rem. Cards and feature items use internal padding of 2rem. The overall density is moderate—enough white space to feel premium and uncluttered, but tight enough to present substantial information without excessive scrolling.

## Visual language

The visual language balances developer utility with marketing polish. Dark surfaces dominate, creating a code-editor-like atmosphere that resonates with the target audience. Gradient accents appear strategically: the hero gradient is the most prominent, with subtle gradient echoes in section transitions.

Product screenshots are presented with realistic browser chrome, including traffic-light dots and address bars, which reinforces the tool's identity as a browser-based application. Screenshots often show the actual Storybook interface with its characteristic sidebar navigation, component canvas, and controls panel.

Iconography is simple and functional, using single-color glyphs in circles or rounded squares for feature items. The icon style is flat with minimal detail, prioritizing quick recognition. Feature cards in the testing section use colored circular backgrounds—light blue, teal, purple, yellow, orange—to differentiate test types while maintaining cohesion through consistent size and placement.

The overall mood is confident and technical, with enough warmth in the gradient accents to avoid feeling cold or corporate. Motion is implied through the gradient's sense of energy, though no specific animation patterns are visible in still images.

## Components

### Primary button

- Anatomy: Text label with optional icon, rendered as a pill-shaped button
- Surface: White background with dark text, or transparent with white border on dark sections
- Typography: `{typography.button}`
- Shape: Full pill radius of 9999px, height approximately 3rem with horizontal padding of 1.5rem
- Spacing: Internal padding 0px 24px
- Composition: Centered text, can appear inline with other buttons or standalone
- Variants: Filled white on dark backgrounds; outlined white border on dark sections for secondary actions

### Secondary button / Command snippet

- Anatomy: Text with copy icon, rounded rectangle with border
- Surface: Transparent background with subtle border
- Typography: `{typography.code}`
- Shape: 0.25rem radius, full border
- Spacing: Horizontal padding 1.5rem, vertical padding approximately 0.75rem
- Composition: Appears adjacent to primary button, often showing an npm install command

### Feature card

- Anatomy: Icon in colored circular background, headline, description text
- Surface: Transparent or very subtle dark background, thin border
- Typography: Headline uses `{typography.body-tight}` at bold weight, description uses `{typography.body}`
- Shape: 0.75rem radius for the card container
- Spacing: Internal padding 1.5rem to 2rem, icon positioned left or above text
- Composition: Stacked vertically in lists or grids, with consistent spacing between cards
- Variants: Some cards show active/selected state with accent blue border; others are default with subtle border

### Tab bar

- Anatomy: Horizontal row of text labels, with active indicator
- Surface: Transparent background
- Typography: `{typography.navigation}`
- Shape: No visible container, text-only with underline or color change for active state
- Spacing: Horizontal spacing between tabs approximately 2rem
- Composition: Centered below hero content, controls visibility of large screenshot below

### Header navigation

- Anatomy: Logo mark, text links, utility cluster
- Surface: Transparent over gradient, or dark when scrolled
- Typography: `{typography.navigation}` for links, `{typography.label}` for small metadata
- Shape: Logo mark is a rounded square with stylized "S"
- Spacing: Horizontal padding 2rem, vertical padding 1rem
- Composition: Flex row with space-between, logo left, nav center, utilities right

### Product screenshot frame

- Anatomy: Browser chrome with traffic lights, address bar, and application content
- Surface: Light background for the application, dark for surrounding page
- Typography: Uses system fonts within the screenshot, not the site's type
- Shape: Rounded top corners approximately 0.75rem
- Spacing: Large vertical margin, often breaking section boundaries
- Composition: Centered or offset to create visual interest, casts subtle shadow for depth

### Search input

- Anatomy: Magnifying glass icon, placeholder text, keyboard shortcut hint
- Surface: Transparent or very subtle background, thin border
- Typography: `{typography.body-tight}`
- Shape: Pill or rounded rectangle
- Spacing: Compact horizontal padding with icon inset
- Composition: Positioned in header utility cluster

## Responsive behavior

The layout appears optimized for desktop viewing with its wide container and side-by-side feature arrangements. At narrower viewports, the two-column feature sections should stack vertically with the visual element preceding or following the text block. The hero headline, currently set at 3.5rem, should scale down to maintain readability without excessive line breaks—2.5rem is a reasonable minimum for mobile hero text.

The header navigation collapses to a hamburger menu or consolidates to essential items on smaller screens. The tab bar below the hero may scroll horizontally or wrap to two rows if space is constrained. Product screenshots maintain their aspect ratio and scale down, though detail may become difficult to discern; consider allowing horizontal scroll for screenshot containers on mobile.

The gradient hero background remains full-width at all sizes, with content padding increasing proportionally. Button groups stack vertically on narrow screens, with the primary action preceding the command snippet.

## Practical implementation guidance

### Preserve
- The near-black canvas with high-contrast white text; this is the site's signature atmosphere
- The generous section spacing that creates breathing room around technical content
- The realistic product screenshots with browser chrome; these establish credibility
- The restrained type scale with bold headlines and readable body text
- The accent blue for interactive states and selections
- The pill-shaped primary buttons with their confident, friendly presence

### Avoid
- Adding light backgrounds to dark sections; this breaks the developer-tool aesthetic
- Using multiple accent colors; the blue alone carries sufficient weight
- Crowding the header with too many navigation items; the current balance is clean
- Replacing product screenshots with abstract illustrations; realism is key to trust
- Using border-radius values other than the established pill, card, and input sizes

### Recommended build order
1. Establish the dark canvas and base typography with Nunito Sans
2. Implement the header with logo, navigation, and utility cluster
3. Build the gradient hero section with headline, description, and CTA group
4. Create the tab bar and screenshot container components
5. Develop feature card patterns for alternating sections
6. Add the footer with consistent dark treatment
7. Implement responsive stacking for narrow viewports

### Accessibility
- Ensure white text on gradient backgrounds maintains 4.5:1 contrast; the dark portions of the gradient may need text-shadow or a subtle overlay
- Provide visible focus indicators for all interactive elements, using the accent blue with sufficient offset
- Add aria-labels to icon-only buttons in the header and feature cards
- Ensure keyboard navigation works through the tab bar and screenshot carousel
- Consider a reduced-motion preference for any gradient or scroll animations
- Test color contrast for the muted ink text against dark backgrounds; #73828C on #000000 may need adjustment for small text

## Scope note

This guide covers the Storybook homepage marketing surface, including the hero gradient, feature sections, and product screenshot presentations. Interior documentation pages, addon directory, and the actual Storybook application interface are not represented. Mobile-specific layouts, animation specifications, and dark/light mode switching behavior are not included. Measurements are derived from the supplied desktop images.
