# How obsidian.md is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/obsidian.md-design)

Last updated: 2026-08-10

## Captured pages

[![FAQ section with dark background, purple text links, and accordion-style questions with chevron indicators](https://pin.fontofweb.com/4106?format=jpg)](https://design.withfudge.com/share/pin-4106)

[FAQ section with dark background, purple text links, and accordion-style questions with chevron indicators](https://design.withfudge.com/share/pin-4106)

[![Pricing cards for Sync and Publish add-ons with purple primary buttons, gray secondary buttons, and green checkmarks](https://pin.fontofweb.com/4105?format=jpg)](https://design.withfudge.com/share/pin-4105)

[Pricing cards for Sync and Publish add-ons with purple primary buttons, gray secondary buttons, and green checkmarks](https://design.withfudge.com/share/pin-4105)

[![Hero section with large white headline featuring green underline accent, yearly billing toggle, and pricing cards](https://pin.fontofweb.com/4104?format=jpg)](https://design.withfudge.com/share/pin-4104)

[Hero section with large white headline featuring green underline accent, yearly billing toggle, and pricing cards](https://design.withfudge.com/share/pin-4104)

[![Homepage footer with community cards, Obsidian logo, and multi-column footer navigation on dark background](https://pin.fontofweb.com/4103?format=jpg)](https://design.withfudge.com/share/pin-4103)

[Homepage footer with community cards, Obsidian logo, and multi-column footer navigation on dark background](https://design.withfudge.com/share/pin-4103)

## Overview

Obsidian's design system is built around a dark-first philosophy that prioritizes focus and readability for knowledge workers. The visual language employs a near-black canvas with carefully layered gray surfaces to create depth without distraction. White typography maintains high contrast across all text hierarchies, while a vibrant purple accent color draws attention to primary actions and interactive elements. The system feels technical yet approachable—clean lines, generous whitespace, and restrained ornamentation let the content and functionality take center stage. Green appears sparingly as a success indicator, most notably in checkmarks for feature lists and an underline accent on the main homepage headline. The overall impression is of a professional tool that respects the user's attention: no gradients, no shadows, no decorative flourishes beyond the essential rounded corners that soften the otherwise stark geometry.

## Colors

The color system is intentionally narrow, relying on value contrast and a single accent hue to create hierarchy. Dark surfaces dominate, with text and interactive elements providing the necessary contrast for legibility.

| token | value | use |
|---|---|---|
| canvas | #0a0a0a | Primary page background, deepest layer |
| surface | #1a1a1a | Card backgrounds, elevated panels, FAQ section base |
| surface-elevated | #242424 | Toggle track, secondary button backgrounds, hover states |
| ink | #ffffff | Primary text, headings, active toggle labels, checkmarks |
| muted-ink | #a0a0a0 | Secondary text, descriptions, inactive toggle labels, footer section headers |
| action | #8b5cf6 | Primary buttons, text links, logo accent |
| action-hover | #7c3aed | Pressed or hovered primary actions |
| success | #22c55e | Feature checkmarks, headline underline accent |
| border | #333333 | Divider lines between FAQ items, subtle separators |

The dark canvas establishes an immersive environment that reduces eye strain during extended use. Surfaces step up in lightness in 10% perceptual increments, creating clear layering without harsh boundaries. The purple accent is saturated enough to stand out against the dark ground but avoids the garishness of pure violet; it carries the brand identity across all interactive moments. Green serves a purely functional role as a positive indicator, never competing with purple for attention. The absence of shadows means all depth must be communicated through surface value alone, making the surface tokens essential to the system's spatial logic.

## Typography

Obsidian uses Inter as its sole typeface, designed by Rasmus Andersson and available from Rsms. The family is employed in Regular, Medium, and Semibold weights to create hierarchy without introducing additional fonts. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3.5rem | 700 | 1.1 | -0.02em | Homepage main headline, pricing page hero |
| section-display | Inter | 2rem | 600 | 1.2 | -0.01em | Section headings, card titles |
| body | Inter | 1rem | 400 | 1.6 | 0 | Paragraph text, descriptions |
| body-medium | Inter | 1rem | 500 | 1.5 | 0 | FAQ questions, emphasized body |
| label | Inter | 0.875rem | 500 | 1.4 | 0 | Button text, navigation, small headings |
| price-display | Inter | 2.5rem | 700 | 1 | -0.02em | Dollar amounts in pricing cards |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Footer links, header navigation |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0 | Copyright, fine print |

The type scale is tight and purposeful. Display sizes use negative tracking to feel compact and authoritative, while body text maintains neutral spacing for extended reading. The price display token is sized to dominate its card without overwhelming the layout, with the currency code rendered at a smaller size in the same weight. Labels and navigation share a size but are distinguished by context and color rather than weight alone, keeping the system economical.

## Layout

The layout system is centered and contained, with generous vertical breathing room between sections. Content typically occupies a maximum width of approximately 75rem (1200px) centered on the canvas, with internal grids adapting to the content type.

Pricing cards appear in a two-column grid with equal-width columns and a gap of approximately 1.5rem. Each card maintains internal padding of 1.5rem on all sides, with content stacked vertically: title, price block, action buttons, then feature list. The feature list uses a comfortable line height with icon-leading alignment for the green checkmarks.

The FAQ section uses a single full-width column with items separated by 1px borders in the border color. Each item contains a question row with a chevron indicator on the right, and an expandable answer area below. Expanded answers maintain the same text color as questions but at a regular weight rather than medium.

The homepage footer demonstrates a more complex grid: a top row of three community cards in equal columns, followed by a large footer area with the logo and social links on the left and four to five columns of navigation links on the right. The footer columns are loosely grouped by topic—Get started, Learn, Community, Resources—with section headers in muted-ink and links in ink.

Vertical section spacing is substantial, typically 6rem between major content blocks, creating a rhythm of focus and rest. Internal content gaps of 1.5rem separate related elements within a section.

## Visual language

The visual language is defined by restraint and clarity. Rounded corners are present but modest—0.75rem for cards, 0.5rem for buttons—preventing the interface from feeling sterile without becoming playful. The pill shape is reserved exclusively for toggle controls, where its full rounding distinguishes the interactive mode switch from standard buttons.

There are no drop shadows anywhere in the system. Depth is achieved solely through surface color variation: canvas for the page, surface for cards, surface-elevated for interactive controls. This flat aesthetic reinforces the tool-like character of the product and avoids visual noise that would compete with user content.

Imagery is absent from the marketing pages shown; the product speaks through typography and interface elements alone. The Obsidian logo—a stylized crystal mark—appears in the action purple against the dark footer, serving as the only brand graphic in the visible pages.

The green underline beneath "Free without limits." is the sole decorative accent in the hero area, a thin horizontal rule that adds a moment of color without disrupting the monochrome dominance. This same green appears only in functional contexts elsewhere, creating a consistent semantic association.

## Components

### Primary action button

- **Anatomy**: Text label centered within a solid fill container
- **Surface**: action background, ink text
- **Typography**: label token, medium weight
- **Shape**: 0.5rem border radius, full-width in card contexts or intrinsic width in hero
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Stacked above secondary action with 0.75rem gap in pricing cards
- **Variants**: Default state shown; hover state would shift to action-hover

### Secondary action button

- **Anatomy**: Text label centered within a solid fill container
- **Surface**: surface-elevated background, ink text
- **Typography**: label token, medium weight
- **Shape**: 0.5rem border radius
- **Spacing**: Same padding as primary action
- **Composition**: Positioned directly below primary action in pricing cards

### Pricing card

- **Anatomy**: Title, price display with currency suffix, billing period description, two stacked buttons, feature list with checkmark icons
- **Surface**: surface background, 0.75rem border radius
- **Typography**: section-display for title, price-display for amount, body for description and features
- **Shape**: 0.75rem border radius, no border, no shadow
- **Spacing**: 1.5rem internal padding, 1rem gap between price block and buttons, 0.5rem gap between buttons, 1.5rem gap between buttons and feature list
- **Composition**: Equal-width cards in two-column grid, vertically aligned tops

### Billing toggle

- **Anatomy**: Pill-shaped container with two mutually exclusive options
- **Surface**: surface-elevated track, surface fill for selected option
- **Typography**: label token, ink for selected, muted-ink for unselected
- **Shape**: 9999px border radius for full pill appearance
- **Spacing**: 0.25rem internal padding, option labels with 1rem horizontal padding
- **Composition**: Centered above pricing cards, clearly separated from heading

### FAQ accordion

- **Anatomy**: Question row with text and chevron icon, expandable answer area
- **Surface**: Transparent, separated by 1px border lines in border color
- **Typography**: body-medium for questions, body for answers, action color for inline links
- **Shape**: Full width, no border radius
- **Spacing**: 1.5rem vertical padding per item, 1rem gap between question and answer when expanded
- **Composition**: Single column, chevron right-aligned in question row
- **Variants**: Collapsed default, expanded with answer visible and chevron rotated

### Community card

- **Anatomy**: Title, description paragraph
- **Surface**: surface background, 0.75rem border radius
- **Typography**: section-display for title, body for description
- **Shape**: 0.75rem border radius
- **Spacing**: 1.5rem internal padding
- **Composition**: Three equal columns in homepage footer area

### Footer navigation

- **Anatomy**: Logo and social links in left column, multiple link columns on right
- **Surface**: Transparent on canvas background
- **Typography**: navigation for links, muted-ink for column headers, legal-copy for copyright
- **Spacing**: Generous top padding to separate from content above, 2rem gap between link items vertically
- **Composition**: Asymmetric grid with logo area taking roughly 40% width, link columns distributed across remaining space

## Responsive behavior

The visible pages show desktop layouts with centered content and multi-column grids. At narrower viewports, the two-column pricing grid should collapse to a single stacked column with maintained internal card spacing. The three community cards would similarly stack vertically. The footer navigation columns should reflow into two columns then a single column, with the logo area moving above the link groups.

The billing toggle should remain centered and functional at all widths, with touch targets maintaining minimum 44px height. FAQ accordion items should expand to full width without horizontal padding reduction. Font sizes may scale down slightly on mobile, with hero-display reducing to approximately 2.5rem and price-display to 2rem to prevent overflow.

## Practical implementation guidance

### Preserve
- The dark-first canvas as the default experience; light mode should be treated as an alternate theme if offered
- The strict two-level surface system (surface and surface-elevated) without introducing additional gray values
- Purple as the sole accent color for all interactive emphasis
- The absence of shadows; rely on surface value for depth
- Generous section spacing that lets content breathe

### Avoid
- Adding gradients, shadows, or glow effects that contradict the flat aesthetic
- Using green for anything beyond success states and the hero underline accent
- Introducing additional font families that would dilute the technical clarity
- Making cards or buttons fully rounded; the partial rounding is intentional restraint
- Reducing contrast below WCAG AA standards for body text on dark surfaces

### Recommended build order
1. Establish the canvas and surface color tokens with proper dark mode defaults
2. Implement Inter at all weights and set the type scale
3. Build the primary and secondary button components with exact padding and radius
4. Create the pricing card as a composite of title, price, buttons, and feature list
5. Implement the billing toggle with proper state management
6. Add the FAQ accordion with expand/collapse behavior
7. Construct the footer layout with responsive column behavior
8. Polish with focus states and reduced-motion preferences

### Accessibility
- Ensure all interactive elements meet minimum 4.5:1 contrast ratios; the ink on canvas pairing exceeds 15:1
- Provide visible focus indicators on buttons and links, using a 2px outline in action color
- Add aria-expanded to FAQ accordion triggers and associate answer regions with aria-controls
- Make the billing toggle a proper radio group or tab panel with appropriate roles
- Respect prefers-reduced-motion for any expand/collapse animations

## Scope note

This guide covers the homepage and pricing page surfaces visible in the supplied images. Mobile breakpoints, animation specifications, form components beyond the billing toggle, and the in-application interface are not represented. Measurements are practical adaptation targets derived from the visible desktop layouts.
