# How urbit.org is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/urbit.org-design)

Last updated: 2026-08-10

## Captured pages

[![Get Started section with sidebar navigation, olive-green buttons, and halftone landscape illustration of cylindrical structures](https://pin.fontofweb.com/8845?format=jpg)](https://design.withfudge.com/share/pin-8845)

[Get Started section with sidebar navigation, olive-green buttons, and halftone landscape illustration of cylindrical structures](https://design.withfudge.com/share/pin-8845)

[![Hero section with large italic serif headline, olive-green textured background, and primary action buttons](https://pin.fontofweb.com/8844?format=jpg)](https://design.withfudge.com/share/pin-8844)

[Hero section with large italic serif headline, olive-green textured background, and primary action buttons](https://design.withfudge.com/share/pin-8844)

[![Self-Hosting content page with detailed architectural illustration, command line section, and expanded sidebar navigation](https://pin.fontofweb.com/4839?format=jpg)](https://design.withfudge.com/share/pin-4839)

[Self-Hosting content page with detailed architectural illustration, command line section, and expanded sidebar navigation](https://design.withfudge.com/share/pin-4839)

[![Hero section variant with darker navigation bar showing Run Urbit button and consistent halftone texture treatment](https://pin.fontofweb.com/4838?format=jpg)](https://design.withfudge.com/share/pin-4838)

[Hero section variant with darker navigation bar showing Run Urbit button and consistent halftone texture treatment](https://design.withfudge.com/share/pin-4838)

## Overview

The Urbit.org design system presents a computing platform through an editorial, almost literary visual language. The interface avoids tech-industry conventions of bright blues and purples, instead grounding the brand in warm olive greens, off-whites, and charcoal tones that evoke printed matter and architectural drawings. The system balances three distinct typefaces: Awesome Serif for commanding display headlines with italic warmth, Sltf Skyling for readable body text with a humanist thin weight, and Space Mono for technical labels and metadata. Halftone illustrations in matching olive tones serve as the primary visual decoration, creating texture without competing with the content hierarchy. The overall impression is of a thoughtful, durable technology—one that references both classical publishing and systems engineering.

## Colors

The palette is intentionally narrow, built around a single olive accent against warm neutrals. This restraint allows the halftone illustrations and typographic hierarchy to carry the visual interest.

| token | value | use |
|---|---|---|
| ink | #3F3F3F | Primary text, headings, body copy |
| ink-light | #878787 | Secondary text, captions, metadata |
| ink-muted | #B2B2B2 | Tertiary text, inactive navigation items, decorative labels |
| canvas | #FFFFFF | Page background, content surfaces |
| surface | #EDEDED | Subtle background variation, footer area |
| accent-olive | #5E604C | Primary buttons, active navigation, section headings, brand moments |
| action-primary | #5E604C | Filled button backgrounds |
| action-primary-text | #FFFFFF | Text on filled buttons |
| border-subtle | #B2B2B2 | Hairline borders, divider lines |

The color logic follows a warm, desaturated path. Black (#000000) appears in the data as a background-color value but functions structurally rather than as a visible surface—it likely serves as a reset or overlay layer. The olive accent (#5E604C) carries the brand identity, appearing in buttons, active sidebar items, and section headings. Text hierarchy moves from ink (#3F3F3F) for primary reading through ink-light (#878787) for supporting content to ink-muted (#B2B2B2) for the most subdued labels. The canvas white provides generous breathing room, with illustrations rendered in the same olive tones to maintain chromatic unity.

## Typography

Three families define the typographic system, each serving a distinct communicative role. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Awesome Serif | 6rem | 600 | 1 | 0.0125em | Homepage hero headline |
| section-display | Awesome Serif | 2.25rem | 600 | 1.11 | 0.0125em | Section headings, sidebar active items |
| body | Sltf Skyling | 1.5625rem | 400 | 1.2 | 0.0125em | Primary body paragraphs |
| body-small | Sltf Skyling | 1.25rem | 400 | 1.4 | 0.0125em | Navigation links, secondary text |
| label | Space Mono | 0.875rem | 400 | 1.43 | 0.0125em | Category labels, metadata |
| label-small | Space Mono | 0.75rem | 400 | 2 | 0.0125em | Fine print, technical notes |
| navigation | Sltf Skyling | 1.25rem | 600 | 1.4 | 0.0125em | Navigation items, button text |
| button | Sltf Skyling | 1.875rem | 600 | 1.2 | 0.0125em | Primary button labels |

Awesome Serif, designed by Nicky Laatz, provides the editorial voice through its light weight and pronounced italic forms. The hero display at 96px (6rem) commands attention with tight leading and minimal tracking. Sltf Skyling, from Silver Stag Type Foundry, handles all body and interface text at thin weights that maintain readability through generous line height. Space Mono, by Colophon Foundry Benjamin Critton, serves the technical layer—labels, timestamps, and category tags—at small sizes with expanded leading for clarity.

The type scale uses a 4px relative unit. Sizes snap to whole multiples: 12px (0.75rem), 14px (0.875rem), 18px (1.125rem), 20px (1.25rem), 24px (1.5rem), 25px (1.5625rem), 30px (1.875rem), 36px (2.25rem), and 96px (6rem). The 25px body size and 30px button size reflect the system's slightly unusual cadence, prioritizing readable paragraphs over standard scale intervals.

## Layout

The page architecture follows an asymmetric two-column model with a persistent left sidebar and a fluid main content area. The sidebar occupies a fixed narrow column containing navigation, section anchors, and contextual actions. The main content flows in a wider column that accommodates long-form text, illustrations, and call-to-action clusters.

Horizontal padding varies by context: 16px (1rem) for compact mobile-adjacent containers, 64px (4rem) for standard desktop sections. The sidebar maintains internal margins of 172px left offset in some configurations, creating a deliberate asymmetry that pushes content toward the visual center while preserving navigational proximity.

Vertical rhythm uses 24px (1.5rem) for paragraph spacing, 48px (3rem) for section breaks, and 64px (4rem) for major content divisions. The hero section employs a dramatic negative margin (-300px top) to pull content upward into the illustration field, creating overlap and depth.

The footer persists as a fixed or sticky bar at the viewport bottom, containing the Urbit logotype, secondary navigation (Docs, Bridge, Network Explorer, Technical Journal, Whitepaper), an email capture field, and social links. This bar uses a light surface treatment with subtle top border separation.

## Visual language

The defining visual characteristic is the halftone illustration style—architectural and landscape renderings built from dot patterns in olive green against white or light backgrounds. These illustrations depict abstract computing structures: cylindrical towers, segmented platforms, and geometric terrain that suggest both retrofuturism and technical drawing. The halftone treatment creates texture and depth without photographic realism, aligning with the brand's promise of durable, understandable technology.

The Urbit logotype appears in a custom sans-serif form with distinctive lettershapes, particularly the rounded 'u' and angular 'r'. A circular sigil mark with internal wave pattern precedes the wordmark in the hero context. The logotype color matches the olive accent, reinforcing brand recognition.

Buttons follow two clear patterns: filled olive with white text for primary actions, and outlined olive with olive text for secondary actions. Both use rounded corners (6px or 8px) and generous horizontal padding. The "Get started" and "Docs" pairing in the hero demonstrates this binary choice architecture.

The overall density is low. White space dominates, with content clustered in readable blocks separated by illustration fields. This breathing room supports the literary quality of the typography and prevents the technical subject matter from feeling overwhelming.

## Components

### Primary button

- **Anatomy**: Text label centered within a filled rounded rectangle
- **Surface**: Background `{colors.action-primary}`, text `{colors.action-primary-text}`
- **Typography**: `{typography.button}` at 30px (1.875rem), weight 600
- **Shape**: Border radius 8px (0.5rem), padding 4px 16px (0.25rem 1rem)
- **Spacing**: Margin 0px 8px for adjacent buttons
- **Variants**: Default state as filled olive; no visible disabled or loading state in supplied images

### Secondary button

- **Anatomy**: Text label within a stroked rounded rectangle
- **Surface**: Background transparent or white, text `{colors.accent-olive}`, border 1px solid `{colors.accent-olive}`
- **Typography**: `{typography.navigation}` at 20px (1.25rem), weight 400
- **Shape**: Border radius 8px (0.5rem), padding 4px 16px
- **Composition**: Pairs with primary button, positioned to the right

### Sidebar navigation

- **Anatomy**: Vertical stack of section labels, subsection links, and action items
- **Surface**: Background `{colors.canvas}`, text `{colors.ink}` default
- **Typography**: Section headers use `{typography.section-display}` in `{colors.accent-olive}`; active items use same treatment; inactive items use `{typography.body}` in `{colors.ink-muted}`
- **Spacing**: Paragraph margin 0px 0px 24px; section margin 8px 0px 0px
- **Composition**: Left-aligned, hierarchical indentation implied through size and color rather than physical indent

### Content section

- **Anatomy**: Heading, body paragraphs, optional illustration, and action button cluster
- **Surface**: Background `{colors.canvas}`, text `{colors.ink}`
- **Typography**: Heading `{typography.section-display}` in `{colors.accent-olive}`; body `{typography.body}`; metadata `{typography.label}` in `{colors.ink-light}`
- **Spacing**: Section margin 0px 0px 64px; heading to body gap 16px; body to button gap 24px
- **Composition**: Illustration positioned right of text block or below, depending on section

### Hero section

- **Anatomy**: Logotype, sigil, headline, button pair, and halftone background texture
- **Surface**: Background `{colors.canvas}` with olive halftone pattern occupying right two-thirds
- **Typography**: Headline `{typography.hero-display}` in `{colors.ink}`, italic style
- **Shape**: Full viewport width, generous vertical padding
- **Composition**: Content left-aligned in the white space; texture bleeds to edges

### Footer bar

- **Anatomy**: Logotype, text links, email input, social icons
- **Surface**: Background `{colors.surface}` or `{colors.canvas}` with subtle top border
- **Typography**: Links `{typography.body-small}`; email field `{typography.label}`
- **Spacing**: Padding 8px vertical; horizontal distribution between logo-left and actions-right

## Responsive behavior

The two-column layout likely collapses to single-column on narrower viewports, with the sidebar either stacking above content or converting to a collapsible menu. The hero headline at 96px should scale down to maintain readability—implementation should reduce to 48px (3rem) or 36px (2.25rem) at intermediate breakpoints and 30px (1.875rem) for mobile.

The halftone illustrations, being decorative, may reposition or scale rather than crop. The sidebar navigation with its multiple levels would benefit from accordion behavior on small screens, preserving the hierarchical structure without excessive vertical scroll.

Button pairs in the hero should stack vertically on narrow viewports, with the primary action remaining first. The footer bar's horizontal spread compresses to stacked rows, with the email capture and social links grouping below the navigation cluster.

## Practical implementation guidance

### Preserve
- The three-typeface hierarchy: Awesome Serif for display moments only, Sltf Skyling for all interface and body text, Space Mono for technical metadata
- The olive accent as the sole chromatic voice; avoid introducing additional hues
- Halftone illustration treatment; if creating new illustrations, maintain the dot-pattern olive-on-white technique
- Generous white space around content blocks; resist filling the sidebar with additional widgets
- The italic style of Awesome Serif in hero contexts; this slant is integral to the brand voice

### Avoid
- Bright or saturated accent colors that would break the muted, printed aesthetic
- Heavy drop shadows or dimensional effects; the system is flat and editorial
- Tight line heights on body text; Sltf Skyling's thin weight needs the 1.2 leading to maintain readability
- Generic sans-serif substitutions for any of the three families; the character of each is distinctive
- Center-aligned headlines in the hero; the left alignment creates the literary margin

### Recommended build order
1. Establish the type scale with all three families loaded and fallback stacks defined
2. Implement the color tokens with CSS custom properties
3. Build the hero section with headline, buttons, and halftone texture placement
4. Create the sidebar navigation with active/inactive states
5. Develop content section patterns with heading-body-button anatomy
6. Add the footer bar with email capture
7. Integrate halftone illustrations with responsive scaling behavior

### Accessibility
- Ensure the thin weight of Sltf Skyling meets contrast requirements; the 25px body size helps, but verify 4.5:1 against the olive accent and muted grays
- Provide visible focus states for keyboard navigation; the current button styling lacks explicit focus rings
- Consider increasing label-small from 12px for users with low vision; 14px minimum is recommended for critical information
- Maintain semantic heading hierarchy: h1 for hero, h2 for sections, h3 for subsections
- The halftone texture in the hero may cause visual vibration for some users; provide a reduced-motion or high-contrast alternative that replaces texture with solid color

## Scope note

This guide covers the Urbit.org homepage and immediate content sections visible in the supplied images, including the hero, Get Started flow, Self-Hosting documentation, and footer. Interior application interfaces, the Bridge tool, Network Explorer data visualizations, and mobile-specific layouts are not represented. Motion behavior, form validation states, and dark mode variants are not documented. The 25px and 30px type sizes reflect the extracted values directly.
