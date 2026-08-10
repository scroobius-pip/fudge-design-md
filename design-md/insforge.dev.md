# How insforge.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/insforge.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Feature grid showing six backend service cards with line-art icons on dark charcoal surface, including Postgres Database, Cloud Storage, Authentication, Functions, Realtime, AI](https://pin.fontofweb.com/8815?format=jpg)](https://design.withfudge.com/share/pin-8815)

[Feature grid showing six backend service cards with line-art icons on dark charcoal surface, including Postgres Database, Cloud Storage, Authentication, Functions, Realtime, AI](https://design.withfudge.com/share/pin-8815)

[![Hero section with large Manrope headline, mint-green accent text, Y Combinator badge, CLI copy command pill, and connected agent workflow diagram on dotted dark background](https://pin.fontofweb.com/8814?format=jpg)](https://design.withfudge.com/share/pin-8814)

[Hero section with large Manrope headline, mint-green accent text, Y Combinator badge, CLI copy command pill, and connected agent workflow diagram on dotted dark background](https://design.withfudge.com/share/pin-8814)

## Overview

InsForge presents a developer-first platform aesthetic built on near-black surfaces with strategic mint-green accents that signal action and connectivity. The visual system prioritizes clarity for technical audiences: large, readable display type in Manrope establishes hierarchy, while Inter handles dense interface text with neutral authority. A distinctive CLI-copy component embeds Fira Code monospace directly into the marketing surface, blurring the boundary between product and promotion. The overall composition balances generous negative space against structured feature grids, with subtle dot-pattern textures adding depth without competing for attention. Every element reinforces the platform's positioning as infrastructure for agentic development—precise, modern, and quietly confident.

## Colors

The palette operates in a disciplined dark mode with a single vibrant accent family. Backgrounds layer from pure black through charcoal to create subtle elevation, while text moves from white through muted gray. The mint green appears sparingly but decisively: in headlines, status indicators, and primary actions.

| token | hex | use |
|---|---|---|
| canvas | #000000 | Page background, deepest layer |
| surface | #0A0A0A | Card backgrounds, secondary panels |
| surface-elevated | #181818 | Workflow diagram nodes, raised containers |
| ink | #FFFFFF | Primary text, headings, icons |
| muted-ink | #A1A1A1 | Body text, descriptions, secondary labels |
| accent-mint | #6EE7B7 | Hero accent words, connected status, primary actions |
| accent-mint-bright | #5EE9B5 | Hover or active mint states |
| accent-blue | #93C5FD | Secondary accent, link hints |
| border-subtle | #2F2F2F | Card borders, dividers, grid lines |
| border-medium | #404040 | Button borders, badge outlines |
| status-connected | #6EE7B7 | Live connection indicators, success states |

The dark surfaces dominate the experience, with #000000 canvas and #0A0A0A surfaces creating a near-seamless depth. Mint green (#6EE7B7) functions as the sole high-saturation accent, appearing in the hero headline's "Agentic Development" phrase and the "InsForge Connected" status pill. White text maintains crisp contrast across all backgrounds. Muted gray (#A1A1A1) serves descriptive content, reducing visual weight without disappearing. Border colors stay intentionally subdued, allowing the feature grid's line-art icons and mint accents to draw focus.

## Typography

Three families serve distinct roles: Manrope for display and marketing voice, Inter for interface density, and Fira Code for technical artifacts. The system leverages Manrope's geometric clarity at large sizes while relying on Inter's proven legibility for navigation and body content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Manrope | 3rem | 400 | 1.33 | normal | Hero headlines, page titles |
| section-heading | Manrope | 1rem | 500 | 1.5 | normal | Card titles, feature labels |
| body | Inter | 1rem | 400 | 1.6 | normal | Navigation, primary descriptions |
| body-small | Inter | 0.875rem | 400 | 1.43 | normal | Compact UI text, metadata |
| label | Inter | 0.75rem | 500 | 1.33 | normal | Buttons, badges, tags |
| code | Fira Code | 1.125rem | 450 | 1.56 | normal | CLI commands, technical strings |
| feature-title | Manrope | 1.25rem | 400 | 1.4 | normal | Feature card headings |

Manrope appears at 48px for the hero display, establishing the page's primary message with open, modern proportions. At 16px and weight 500, it handles section headings with slightly more authority than body text. Inter carries the interface load at 16px for navigation and primary content, dropping to 14px for secondary information. The 12px label size serves compact button and badge text. Fira Code at 18px with weight 450 renders the CLI installation command, its monospace rhythm signaling technical authenticity. Verify licensing for these families before production use. Manrope is designed by Mikhail Sharanda. Fira Code is designed by Carrois Corporate, Edenspiekermann AG, and Nikita Prokopov. Inter carries no attributed designer in the supplied records.

## Layout

The page employs a centered container with generous horizontal margins, creating a focused reading experience against the expansive dark canvas. The navigation bar sits at full width with internal padding of 6px 24px 6px 8px and horizontal margins of 128px, establishing breathing room between viewport edges and content. Below the nav, the hero section splits asymmetrically: left-aligned text block with the Y Combinator badge, headline, subheadline, and CLI pill; right-aligned workflow diagram showing connected agent nodes.

The feature grid organizes six backend services in a 3×2 arrangement, each card receiving 24px padding internally. Cards share subtle borders at 0.8px width with 4px radius, creating contained but not heavy units. Spacing between sections appears substantial, likely 96px or more, allowing each narrative block to register independently.

The workflow diagram in the hero uses elevated surface cards (#181818) with rounded corners, connected by thin lines and dotted connectors. This diagram floats in the right portion of the hero, balancing the text-heavy left side. A scroll-to-top button appears fixed in the lower right corner, circular with a dark surface and white chevron.

## Visual language

The aesthetic communicates technical infrastructure through restraint and precision. Line-art icons—database cylinders, cloud storage folders, padlocks, server functions, realtime cursors, AI sparkles, deployment rockets—appear in single-weight strokes, rendered in muted tones against dark surfaces. These icons avoid fill, maintaining a schematic, documentation-like quality that reads as engineered rather than decorative.

The dot-pattern background texture in the hero adds subtle visual interest without the heaviness of gradients or imagery. This texture stays behind content, never competing for attention. The mint green accent functions as a signal color: it marks the platform's unique value proposition ("Agentic Development"), confirms successful connections, and invites primary action. Its limited deployment prevents fatigue and maintains impact.

Workflow visualization uses cards with soft shadows and thin borders, connected by lines that suggest data flow without animated motion. The "InsForge Connected" status pill with its green dot reads as a live system indicator, reinforcing the platform's operational reality. Typography hierarchy relies on size contrast rather than weight variation, with Manrope's 400-weight display feeling confident rather than aggressive.

## Components

### Navigation bar

- **Anatomy**: Logo mark with "InsForge" wordmark left-aligned; primary links (Products with dropdown, Blog, Docs, Integrations, Pricing, Roadmap) centered; social proof and auth actions right-aligned
- **Surface**: Transparent or #000000 background, blending with canvas
- **Typography**: Inter at 16px, weight 400, white
- **Spacing**: 6px vertical padding, 24px right padding, 8px left padding on nav container; 128px horizontal margins
- **Composition**: Flex row with space-between alignment; auth buttons grouped with 8px gap

### Primary button (Login)

- **Anatomy**: Text label with optional icon, full pill shape
- **Surface**: #6EE7B7 background, #000000 text
- **Typography**: Inter label at 12px, weight 500
- **Shape**: 9999px border radius, full pill
- **Spacing**: Compact horizontal padding, likely 16px

### Secondary button (Sign Up)

- **Anatomy**: Text label, outlined treatment
- **Surface**: Transparent background, #404040 border, white text
- **Typography**: Inter label at 12px, weight 500
- **Shape**: 9999px border radius, full pill
- **Spacing**: Similar compact padding to primary

### CLI copy pill

- **Anatomy**: Monospace command string with trailing "Copy" action button
- **Surface**: White (#FFFFFF) background, black text for command; mint accent for "Copy" text
- **Typography**: Fira Code at 18px for command; Inter label for action
- **Shape**: Full pill, 9999px radius
- **Spacing**: Generous horizontal padding, 12px vertical
- **Composition**: Command left-aligned, action right-aligned within pill

### Feature card

- **Anatomy**: Line-art icon top, Manrope title, Inter description
- **Surface**: #0A0A0A background, #2F2F2F border at 0.8px
- **Typography**: Feature-title (Manrope 20px) for heading; body-small (Inter 14px) for description in #A1A1A1
- **Shape**: 4px border radius
- **Spacing**: 24px padding internal
- **Composition**: Icon centered or left-aligned above text block; text left-aligned

### Badge (Y Combinator)

- **Anatomy**: Icon or logo mark with text label
- **Surface**: #181818 background, #404040 border
- **Typography**: Inter label at 12px, weight 500, muted ink
- **Shape**: Full pill, 9999px radius
- **Spacing**: 8px horizontal, 4px vertical padding

### Workflow diagram card

- **Anatomy**: Header with icon and title, status pill, description or list items
- **Surface**: #181818 background, subtle border
- **Typography**: Inter body for headers; label size for status pills
- **Shape**: Larger radius than feature cards, approximately 7px
- **Composition**: Stacked vertically with connector lines to sibling cards

### Scroll-to-top button

- **Anatomy**: Circular button with chevron-up icon
- **Surface**: Dark surface, white icon
- **Shape**: 50% border radius, perfect circle
- **Position**: Fixed lower-right corner

## Responsive behavior

The desktop layout shows a two-column hero with text left and diagram right, plus a three-column feature grid. At narrower viewports, the hero should stack vertically with the diagram following the text block. The feature grid should collapse to two columns on tablet and single column on mobile, maintaining 24px card padding throughout. Navigation links should collapse to a hamburger menu below approximately 768px, preserving the auth buttons in the header. The CLI pill requires horizontal scroll or text truncation on very narrow viewports to maintain readability. Font sizes should scale down modestly: hero display from 48px to 36px to 28px, preserving line-height ratios. The 128px horizontal nav margins should reduce to 24px or 16px on smaller screens.

## Practical implementation guidance

### Preserve
- The near-black canvas with subtle surface elevation layers; this depth is essential to the premium technical feel
- Mint green as the sole vibrant accent, deployed only for primary actions, connection status, and key headline phrases
- Fira Code monospace for any CLI or code-adjacent content; the typographic contrast signals technical authenticity
- Line-art icon style with single-weight strokes and no fill; these read as infrastructure diagrams rather than illustrations
- Generous horizontal margins and section spacing; the breathing room conveys confidence

### Avoid
- Introducing additional accent colors beyond the mint family; the discipline of one accent is core to the identity
- Heavy borders or shadows that would compete with the subtle surface layering
- Filled or multi-color icons that would break the schematic aesthetic
- Light mode implementations without complete palette inversion; partial darkening fails
- Tight line-height on Manrope display text; its geometric forms need room

### Recommended build order
1. Establish canvas (#000000) and surface (#0A0A0A) backgrounds with Inter 16px body text
2. Implement navigation with logo, links, and pill buttons
3. Build hero section with Manrope display, mint accent, and CLI pill with Fira Code
4. Create feature card component with line-art icons and consistent padding
5. Assemble feature grid with border treatment and responsive collapse
6. Add workflow diagram cards with elevated surfaces and connector styling
7. Polish with badge components and scroll-to-top button

### Accessibility
- Ensure mint green (#6EE7B7) on black meets WCAG AA for large text; verify contrast ratios for small text use
- Provide focus indicators on all interactive elements; the dark surface allows subtle glow or outline treatments
- Maintain keyboard navigability through the feature grid and workflow diagram
- Consider reduced-motion preferences for any scroll or connection animations
- Ensure the CLI pill's "Copy" action has accessible labeling beyond visual text

## Scope note

This guide covers the InsForge marketing homepage including hero, feature grid, navigation, and workflow diagram components. Pricing pages, documentation interfaces, authenticated dashboards, and mobile-specific layouts are not represented in the supplied material. Motion design, hover states, and form interactions beyond the visible CLI pill remain outside this specification. Measurements reflect the extracted interface values where available.
