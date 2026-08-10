# How hyperagent.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/hyperagent.com-design)

Last updated: 2026-08-10

## Captured pages

[![Capabilities section with accordion list and product screenshot showing AI recruiting workflow on a muted purple-gray background](https://pin.fontofweb.com/8945?format=jpg)](https://design.withfudge.com/share/pin-8945)

[Capabilities section with accordion list and product screenshot showing AI recruiting workflow on a muted purple-gray background](https://design.withfudge.com/share/pin-8945)

[![Hero section with large display headline, centered sign-up button, and capabilities section with teal-tinted product screenshot](https://pin.fontofweb.com/8944?format=jpg)](https://design.withfudge.com/share/pin-8944)

[Hero section with large display headline, centered sign-up button, and capabilities section with teal-tinted product screenshot](https://design.withfudge.com/share/pin-8944)

## Overview

Hyperagent presents itself as an AI workforce platform through a landing page that balances editorial confidence with product clarity. The visual system relies on a single variable font family—AT Season Sans VF—deployed across a tight range of weights and sizes that create clear hierarchy without visual noise. The page alternates between pure white hero areas and warm off-white section backgrounds, using rounded corners as a consistent signature on cards, buttons, and product screenshots. Large display type dominates the hero, while the capabilities section introduces an accordion pattern paired with rich product imagery. The overall impression is of a premium technical product that communicates through restraint: generous whitespace, precise alignment, and a muted palette that lets interface screenshots and workflow descriptions carry the narrative.

## Colors

The color system is intentionally minimal, built around high-contrast neutrals with a single deep accent and occasional functional greens.

| token | value | use |
|---|---|---|
| ink | `#141414` | Primary text, button fills, dark backgrounds |
| action | `#022241` | Deep navy for header text and interactive elements |
| accent-green | `#1F6244` | Section labels, category tags, success indicators |
| surface-warm | `#F3F4F6` | Section backgrounds behind product showcases |
| canvas | `#FFFEFB` | Slightly warm white for card and page backgrounds |
| white | `#FFFFFF` | Pure white for hero backgrounds and contrast surfaces |

The page operates primarily in a light mode with no visible dark theme. Text color shifts between deep navy (`#022241`) and near-black (`#141414`) depending on context: the header uses the navy tone, while body copy and headings in the capabilities section use the ink value. The warm off-white (`#FFFEFB`) creates subtle separation between the pure white hero and the content sections below. Product screenshots introduce their own color worlds—muted purple-grays and teal-tinted interfaces—which become part of the visual rhythm without requiring dedicated UI tokens. The accent green appears sparingly, reserved for small uppercase labels like "01 — CAPABILITIES" that orient readers within the page structure.

## Typography

All text is set in AT Season Sans VF, a variable font designed by Martin Vácha and distributed by Displaay Type Foundry. The family supports a continuous weight range; the interface uses 500 (Medium), 600 (Semibold), and 650 (Bold) as distinct anchors.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | AT Season Sans VF | 4.5rem | 650 | 1 | -0.01em | Hero headline |
| section-display | AT Season Sans VF | 3rem | 600 | 1 | -0.01em | Section headings, accordion titles |
| body-large | AT Season Sans VF | 1.25rem | 500 | 1.375 | normal | Primary body, buttons, navigation |
| body | AT Season Sans VF | 1rem | 500 | 1.375 | normal | Secondary descriptions |
| body-small | AT Season Sans VF | 0.875rem | 500 | 1.375 | normal | Supporting details, metadata |
| label | AT Season Sans VF | 0.6875rem | 600 | 1.25 | 0.1em | Uppercase section labels |
| navigation | AT Season Sans VF | 1.125rem | 600 | 1 | -0.01em | Nav links, sign-up CTA |

The hero display at 72px (4.5rem) sets an assertive, editorial tone with tight leading and subtle negative tracking. Section headings at 48px (3rem) maintain the same tracking treatment, creating familial consistency across scale levels. Body text at 20px (1.25rem) carries most of the reading load with comfortable line height. The label style uses aggressive uppercase tracking for wayfinding elements. Verify licensing for AT Season Sans VF through Displaay Type Foundry before production use.

## Layout

The page uses a centered content model with generous horizontal margins and clear section breaks. The maximum content width is approximately 77.5rem (1240px at 16px root), with sections receiving 5rem (80px) vertical padding to create breathing room between content groups.

The header spans full width with 2rem horizontal padding and floats the Hyperagent wordmark left against "Log in" and "Sign up" actions right. The hero section centers all elements—headline, subhead, and primary button—within a pure white background that extends to the first content break.

Below the hero, the capabilities section introduces a two-column layout: an accordion list occupies the left portion while a large product screenshot fills the right. The accordion items stack vertically with consistent gaps, each item a self-contained card with rounded corners. The product showcase area uses a warm off-white background that extends full-width, with internal content maintaining the centered max-width constraint.

Spacing follows a 4px base unit (0.25rem). Key increments include 1rem for compact internal padding, 2.5rem for card padding, 3rem for section gaps, and 5rem for major section vertical rhythm. The product screenshot containers receive 2rem (32px) border radius, creating a soft frame that distinguishes interface imagery from the page ground.

## Visual language

The design language communicates precision and approachability through three core gestures: extreme corner rounding, generous whitespace, and typographic scale contrast. Every interactive surface and content container carries rounded corners—buttons at 12px, cards at 20px, and major panels at 32px. This creates a friendly, contemporary feel that softens the technical subject matter.

Product imagery is presented as interface screenshots within rounded containers, often with subtle shadow or background tinting that suggests depth without explicit elevation tokens. The screenshots show actual application workflows—candidate sourcing, campaign planning—rather than abstract illustrations, grounding the product in demonstrated capability.

The warm off-white (`#FFFEFB`) appears as a deliberate alternative to pure white, preventing the long page from feeling clinical. Against this warmth, the deep navy and near-black text maintains crisp legibility. The visual rhythm alternates between expansive white space and dense information zones, particularly in the accordion-plus-screenshot pattern where textual detail and visual proof coexist.

## Components

### Primary button
- **Anatomy**: Text label centered within a filled rectangular shape
- **Surface**: Solid ink (`#141414`) background with white text
- **Typography**: body-large token, medium weight
- **Shape**: 12px border radius, generous horizontal padding (2rem) with 1rem vertical padding
- **Spacing**: Appears centered below hero text with substantial margin above

### Secondary button / text link
- **Anatomy**: Text with optional background on hover
- **Surface**: Transparent background, action color (`#022241`) text
- **Typography**: body-large token
- **Shape**: 12px border radius when background is present
- **Spacing**: Used in header for "Log in" and navigation contexts

### Accordion item
- **Anatomy**: Expandable card with title, optional description, and toggle indicator
- **Surface**: White (`#FFFFFF`) background, subtle border or shadow
- **Typography**: Section-display (20px, semibold) for titles; body for descriptions
- **Shape**: 20px border radius, full-width within left column
- **Spacing**: 1rem internal padding, stacked with small gaps between items
- **Composition**: Title left-aligned, circular plus/minus indicator right-aligned
- **States**: Collapsed shows title only; expanded reveals description text and bullet list with top padding

### Product showcase panel
- **Anatomy**: Full-width section containing centered label, heading, and large screenshot
- **Surface**: Warm off-white (`#F3F4F6`) background
- **Typography**: Label token for "01 — CAPABILITIES"; section-display for heading; body for description
- **Shape**: 32px border radius on screenshot container
- **Spacing**: 5rem vertical padding on section, 2.5rem horizontal padding on content
- **Composition**: Text centered above, screenshot below spanning near-full width of content area

### Navigation header
- **Anatomy**: Fixed or static top bar with logo left, actions right
- **Surface**: Transparent or white background
- **Typography**: body-large for logo wordmark; navigation token for links
- **Spacing**: 2rem horizontal padding, centered vertically
- **Composition**: Flex row with space-between alignment

## Responsive behavior

The two-column capabilities layout should stack vertically on narrower viewports, with the accordion expanding to full width above the product screenshot. The hero headline at 72px should scale down to maintain comfortable line lengths—consider 48px on tablet and 36px on mobile. Section padding should reduce from 5rem to 3rem on mobile to preserve proportional rhythm without excessive scrolling.

The navigation header may collapse to a hamburger menu on small screens, though this pattern is not visible in the supplied images. Accordion items should maintain their rounded corners and internal padding across all breakpoints, with touch targets expanding to at least 44px height for accessibility.

## Practical implementation guidance

### Preserve
- The single-font-family approach; AT Season Sans VF carries all hierarchy through weight and size alone
- The warm off-white (`#FFFEFB`) as a deliberate alternative to pure white for section backgrounds
- Large, consistent border radii as a brand signature—32px for major panels, 20px for cards
- Centered hero composition with generous whitespace above and below
- Actual product screenshots rather than illustrations or abstract graphics

### Avoid
- Introducing additional font families that would dilute the typographic discipline
- Using pure black (`#000000`) for text when the design specifies near-black (`#141414`)
- Flattening the accordion into plain text; the card container and toggle interaction are essential
- Removing the uppercase tracking from section labels; the wide letter-spacing creates necessary hierarchy

### Recommended build order
1. Establish the 4px base grid and root font size
2. Implement AT Season Sans VF with weights 500, 600, and 650
3. Build the hero section with centered layout and primary button
4. Create the accordion component with expand/collapse behavior
5. Implement the product showcase section with warm background and rounded screenshot container
6. Add the navigation header with logo and action links
7. Refine spacing and responsive behavior across breakpoints

### Accessibility
- Ensure the ink-on-white and navy-on-white text pairings meet WCAG AA contrast ratios; the near-black values should satisfy AAA for normal text
- Add visible focus states to buttons and accordion toggles; the rounded shapes can accommodate 2px offset outlines
- Maintain semantic heading hierarchy: h1 for hero, h2 for sections, h3 for accordion titles
- Provide aria-expanded and aria-controls attributes on accordion toggles for screen reader users
- Consider reduced-motion preferences for any expand/collapse animations

## Scope note

This guide covers the Hyperagent landing page hero and capabilities sections as visible in the supplied images. Footer content, additional page sections, mobile navigation patterns, and interactive states beyond the static accordion appearance are not represented. The design system assumes a light-mode presentation with no verified dark theme. Measurements reflect the desktop viewport shown in the source images.
