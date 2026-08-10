# How natoma.run is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/natoma.run-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with mint-green abstract background, search bar, and prompt suggestion cards above server grid](https://pin.fontofweb.com/7708?format=jpg)](https://design.withfudge.com/share/pin-7708)

[Hero section with mint-green abstract background, search bar, and prompt suggestion cards above server grid](https://design.withfudge.com/share/pin-7708)

[![Server card grid showing Atlassian, Datadog, GitHub, Linear, Notion, Slack with action chips and Run buttons](https://pin.fontofweb.com/7707?format=jpg)](https://design.withfudge.com/share/pin-7707)

[Server card grid showing Atlassian, Datadog, GitHub, Linear, Notion, Slack with action chips and Run buttons](https://design.withfudge.com/share/pin-7707)

[![Full-bleed hero with mint gradient, centered headline, search input, and six prompt suggestion tiles](https://pin.fontofweb.com/7404?format=jpg)](https://design.withfudge.com/share/pin-7404)

[Full-bleed hero with mint gradient, centered headline, search input, and six prompt suggestion tiles](https://design.withfudge.com/share/pin-7404)

[![Complete page view with navigation, hero banner, category filters, and server cards with tool action links](https://pin.fontofweb.com/7403?format=jpg)](https://design.withfudge.com/share/pin-7403)

[Complete page view with navigation, hero banner, category filters, and server cards with tool action links](https://design.withfudge.com/share/pin-7403)

## Overview

Natoma is a developer-focused directory for discovering and running MCP (Model Context Protocol) servers. The visual system balances clinical precision with approachable warmth through a restrained monochrome palette punctuated by a distinctive mint-green hero treatment. The interface prioritizes scanability and action: server cards present dense tool information in digestible grids, while the hero search experience invites immediate exploration. Every element serves the core workflow of finding, evaluating, and executing server capabilities. The design avoids decorative excess in favor of clear hierarchy, consistent spacing, and purposeful interactivity that respects developer attention.

## Colors

The color system is intentionally minimal, relying on high-contrast black and white for readability with a single warm neutral for borders and secondary surfaces.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, active category pills, primary button fills, card titles |
| ink-secondary | #171717 | Near-black for subtle depth in dense text regions |
| muted | #737373 | Secondary text, server descriptions, placeholder text, metadata |
| border | #E5E5E5 | Card borders, chip borders, input borders, dividers |
| surface | #EDEDED | Subtle backgrounds, hover states, secondary fills |
| canvas | #FFFFFF | Page background, card backgrounds, input backgrounds, inverted text |

The hero section introduces a mint-tinted photographic or generated background with soft organic shapes in pale green and white. This environmental color does not appear in the functional palette but establishes brand atmosphere. The interface maintains strict light-mode presentation with no dark mode visible. Black dominates for primary actions and active states, while muted gray handles supporting information. Border gray creates delicate containment without visual weight. The system achieves hierarchy through value contrast rather than chromatic variety.

## Typography

The type system uses Inter exclusively across all weights and sizes, tuned for screen readability at developer-focused densities.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 500 | 1.2 | -0.02em | Hero headline, page titles |
| section-display | Inter | 1.5rem | 500 | 1.2 | -0.02em | Section headings like "Servers" |
| card-title | Inter | 1.25rem | 500 | 1.3 | -0.01em | Server names in cards |
| body-large | Inter | 1.125rem | 400 | 1.5 | -0.01em | Hero description, prominent body |
| body | Inter | 1rem | 400 | 1.5 | -0.01em | Card descriptions, general content |
| label | Inter | 0.875rem | 500 | 1.375 | normal | Buttons, chips, navigation, tags |
| caption | Inter | 0.75rem | 500 | 1.333 | normal | Badges, small metadata, counts |

Inter Medium (500) carries structural weight for headings, buttons, and interactive labels. Inter Regular (400) handles body text and descriptions. Negative letter spacing on display sizes prevents looseness at large scales. The 1.5 line height on body sizes ensures comfortable reading in multi-line card descriptions. Verify licensing for these families before production use.

## Layout

The page follows a centered single-column structure with contained width for content and full-bleed hero treatment.

The navigation bar spans the full viewport width with horizontal padding of 1rem, containing the Natoma wordmark left-aligned and utility actions (Product Hunt badge, search, app entry) right-aligned. Below, the hero section breaks containment with a rounded rectangle treatment—approximately 1.5rem corner radius—filling nearly the full viewport width with generous internal padding of 3rem vertical and 1rem horizontal. The hero centers its content: headline, search input, and a six-item grid of prompt suggestion cards.

Content sections below the hero return to a centered container with maximum width appropriate for three-column card grids. The server grid uses CSS Grid with three equal columns and consistent gap spacing of 1.25rem. Category filter pills sit in a horizontal scroll or wrap container above the grid, left-aligned with the section heading.

Card internals follow a strict vertical stack: header row with icon, name, verification badge, and Run button; description paragraph; then a two-column grid of action chips. Cards carry internal padding of 1.75rem on all sides.

Spacing follows a 2px base unit system. Key values include: 0.5rem for tight internal gaps, 1rem for standard element separation, 1.25rem for card gaps, 1.75rem for card padding, 3rem for section padding, and 5rem for major section vertical rhythm.

## Visual language

The visual character is clean, credible, and utility-forward. Rounded corners appear throughout but with discipline: pills for buttons and filters, 1rem radius for cards, half-rem for small chips. The hero's rounded rectangle container creates a framed stage effect against the white page background.

Shadows are subtle and functional. Cards and prompt suggestion tiles carry light drop shadows—approximately 0 4px 6px -4px and 0 10px 15px -3px in black at 10% opacity—creating gentle elevation without material heaviness. Buttons and chips show no shadow in rest state.

The mint hero background provides the sole expressive color moment. Its soft, abstract organic shapes suggest fluidity and possibility without competing with the information-dense server listings below. Photography and illustration are absent from the functional interface; server icons are the only imagery, presented as small brand marks in circular or native formats.

Iconography is minimal and functional: arrow-up-right for external links, play triangle for Run actions, search magnifier, verification checkmarks. These appear at 1rem or smaller, inline with text.

## Components

### Navigation bar

- **Anatomy**: Fixed or sticky top bar with Natoma circular logo mark and wordmark left, Product Hunt featured badge, search trigger with keyboard shortcut, and "Go to app" primary button right.
- **Surface**: Transparent or white background, 1px bottom border in border gray.
- **Typography**: Label size for all actions.
- **Spacing**: 1rem horizontal padding, approximately 3.5rem height.

### Hero banner

- **Anatomy**: Rounded container with mint-tinted abstract background. Centered headline, full-width search input with "7 live" status badge left and send button right, "Try a prompt:" label, and 3x2 grid of prompt suggestion cards.
- **Surface**: Mint-green environmental background with soft white organic shapes. Search input uses white fill with subtle shadow.
- **Typography**: Hero-display for headline, body for input placeholder, label for prompt cards.
- **Shape**: Container rounded at approximately 1.5rem. Search input fully pill-shaped. Prompt cards rounded at 1rem with white fill.
- **Spacing**: 3rem vertical padding, centered content column approximately 640px wide for text and input.

### Prompt suggestion card

- **Anatomy**: Small rectangular card with icon row (showing relevant service logos), action text, and arrow-up-right link indicator.
- **Surface**: White fill with light shadow, no border.
- **Typography**: Label size for action text.
- **Shape**: 1rem border radius.
- **Composition**: Icons left, text below, arrow top-right. Icons show 3-4 small service marks indicating cross-tool capability.

### Category filter pills

- **Anatomy**: Horizontal row of selectable pills including "All", "Official" with checkmark, and category names.
- **Surface**: White fill with border gray stroke for inactive; black fill with white text for active.
- **Typography**: Label weight, 0.875rem.
- **Shape**: Full pill, 9999px radius.
- **Spacing**: 0.5rem vertical padding, 1.25rem horizontal padding, gap between pills approximately 0.75rem.

### Server card

- **Anatomy**: Header with 40px server icon, server name with verification badge, username/handle in muted text, and "Run" primary button right-aligned. Body with description paragraph. Footer with 2x2 grid of action chips.
- **Surface**: White fill, 1px border gray stroke, light shadow on rest.
- **Typography**: Card-title for name, body for description and handle, label for action chips.
- **Shape**: 1rem border radius.
- **Spacing**: 1.75rem padding all sides. 0.75rem gap between header elements. 1rem gap between description and action grid. 0.75rem gap between action chips.

### Action chip

- **Anatomy**: Small button with action name and arrow-up-right icon.
- **Surface**: White fill, 1px border gray stroke, no shadow.
- **Typography**: Label weight.
- **Shape**: 0.5rem border radius.
- **Spacing**: 0.625rem vertical, 1rem horizontal padding.

### Primary button

- **Anatomy**: Text with optional icon, fully rounded.
- **Surface**: Black fill, white text, no border.
- **Typography**: Label weight.
- **Shape**: Full pill.
- **Spacing**: 0.75rem vertical, 1.5rem horizontal padding.

### Secondary button

- **Anatomy**: Text with optional icon, rounded rectangle.
- **Surface**: White fill, black text, 1px border gray.
- **Typography**: Body weight.
- **Shape**: 1rem border radius.
- **Spacing**: 0.75rem vertical, 1.5rem horizontal padding.

## Responsive behavior

The three-column server grid should collapse to two columns on tablet viewports and single column on mobile, maintaining card internal proportions. The hero search input and prompt card grid should remain centered but reduce horizontal margins on narrow viewports. Category pills should scroll horizontally on mobile rather than wrapping, preserving the active state visibility. Navigation bar elements should collapse to essential actions on small screens, potentially hiding the Product Hunt badge and search shortcut text while retaining the icon. The hero headline should scale down to section-display size on mobile to prevent excessive line breaks.

## Practical implementation guidance

### Preserve
- The strict 2px base grid and the resulting clean measurement relationships.
- The mint hero as a distinctive brand moment; do not replace with generic gradients.
- The verification badge pattern (green checkmark circle) for trusted servers.
- The "Run" button as the primary card action with its play icon and pill shape.
- The action chip grid showing available tools per server.

### Avoid
- Adding color to the functional palette beyond the six defined tokens.
- Increasing shadow weight or adding colored shadows.
- Using corner radius values outside the established set (pill, 1rem, 0.5rem).
- Presenting server descriptions in muted text smaller than 1rem; readability depends on the 1rem body size.
- Removing the icon row from prompt cards; the multi-tool preview is essential to the value proposition.

### Recommended build order
1. Establish the 2px base unit and color tokens.
2. Implement Inter with the exact weight and size scale.
3. Build the navigation bar with contained width and right-aligned actions.
4. Create the hero container with rounded rectangle shape and centered content stack.
5. Implement the search input with status badge and send button.
6. Build prompt suggestion cards with icon rows and arrow indicators.
7. Create category pill components with active/invert states.
8. Implement server cards with full internal grid and action chips.
9. Apply responsive breakpoints for grid collapse and navigation simplification.

### Accessibility
- Ensure the mint hero background maintains sufficient contrast for the black headline; the current combination passes WCAG AA for large text.
- Add visible focus states to all interactive elements; the current design shows no focus ring in static views, so implement a 2px offset ring in ink or a complementary color.
- Provide aria-labels for icon-only buttons like the search send and external link arrows.
- Maintain keyboard navigability through the category pill row and action chip grids.
- Consider reduced-motion preferences for any hover transitions on cards and buttons.

## Scope note

This guide covers the Natoma MCP server directory landing page including the hero search experience, category filtering, and server card grid. Footer content, individual server detail pages, authentication flows, and in-app interfaces are not represented in the supplied material. The exact mint background treatment is an environmental visual element rather than a CSS gradient specification; implement with comparable soft organic shapes.
