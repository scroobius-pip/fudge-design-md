# How warp.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/warp.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Feature section with dark background showing agentic development environment capabilities and terminal interface screenshot](https://pin.fontofweb.com/6774?format=jpg)](https://design.withfudge.com/share/pin-6774)

[Feature section with dark background showing agentic development environment capabilities and terminal interface screenshot](https://design.withfudge.com/share/pin-6774)

[![Pricing page showing Business and Enterprise tier cards with dark surfaces and muted text](https://pin.fontofweb.com/6773?format=jpg)](https://design.withfudge.com/share/pin-6773)

[Pricing page showing Business and Enterprise tier cards with dark surfaces and muted text](https://design.withfudge.com/share/pin-6773)

[![Full pricing page with three-column plan comparison including Free, Build, and Max tiers with toggle switch](https://pin.fontofweb.com/6772?format=jpg)](https://design.withfudge.com/share/pin-6772)

[Full pricing page with three-column plan comparison including Free, Build, and Max tiers with toggle switch](https://design.withfudge.com/share/pin-6772)

[![Footer and downloads section with platform cards for Mac, Linux, and Windows on dark background](https://pin.fontofweb.com/6771?format=jpg)](https://design.withfudge.com/share/pin-6771)

[Footer and downloads section with platform cards for Mac, Linux, and Windows on dark background](https://design.withfudge.com/share/pin-6771)

## Overview

Warp presents itself as an agentic development environment with a visual language built for developers who spend hours in terminal interfaces. The design system embraces a near-black canvas as its foundation, creating an immersive dark-mode experience that reduces eye strain while establishing technical credibility. The aesthetic balances utilitarian clarity with subtle warmth—off-whites and muted grays replace harsh pure whites, and the occasional mint-green accent provides orientation without visual noise.

The interface architecture follows a content-first hierarchy. Large display typography in Matter establishes section identity, while Inter handles navigation and secondary reading tasks. Matter Mono appears selectively for code snippets and command-line references, reinforcing the product's developer DNA. The overall composition favors generous vertical spacing, contained card surfaces with subtle rounding, and a restrained palette that lets product screenshots and terminal imagery carry visual interest.

## Colors

| token | hex | use |
|---|---|---|
| canvas | #121212 | Primary page background, deepest layer |
| surface | #1E1E1E | Card backgrounds, elevated panels, pricing tiers |
| surface-elevated | #1F1F1F | Featured or highlighted card states |
| ink | #FAF9F5 | Primary headings, body text on dark, primary button fill |
| ink-muted | #AFAEAC | Secondary descriptions, feature list items, footer links |
| ink-dim | #868584 | Tertiary text, disabled states, metadata |
| accent-mint | #799C92 | Subtle highlights, decorative accents, status indicators |
| accent-green | #34895C | Featured plan borders, success states, promotional emphasis |
| accent-blue | #0000EE | Links in footer and navigation contexts |
| border | #2A2A2A | Card outlines, section dividers, subtle separations |
| border-subtle | #2F2F2F | Hover states, elevated borders |
| action-primary | #FAF9F5 | Primary button background, high-contrast actions |
| action-primary-text | #121212 | Text on primary buttons |
| action-secondary | #2A2A2A | Secondary button background, muted actions |
| action-secondary-text | #FAF9F5 | Text on secondary buttons |
| promotional | #CBB0F7 | Promotional pill background, limited-time badges |
| promotional-light | #DEB0F7 | Gradient endpoint for promotional elements |

The color system operates in a strictly dark mode. The canvas at `#121212` provides sufficient depth for layered surfaces without approaching pure black, which helps prevent excessive contrast against the warm off-white ink. Surfaces elevate through subtle lightness increases rather than shadows, creating a flat-but-layered spatial model. The promotional purple gradient from `#CBB0F7` to `#DEB0F7` appears sparingly for limited-time offers and credit announcements, providing the only saturated color moment in an otherwise muted system. Accent greens signal featured or recommended states, particularly in pricing contexts where the "Build" plan receives visual priority through border treatment.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Matter | 5rem | 400 | 1 | -0.03em | Homepage hero headlines, major section titles |
| section-display | Matter | 3rem | 400 | 1.1 | -0.01em | Page-level headings, pricing page title |
| heading-large | Matter | 2.5rem | 400 | 1.15 | -0.01em | Feature section headers, download platform names |
| heading-medium | Matter | 1.5rem | 400 | 1.2 | normal | Card titles, tier names, subsection headers |
| body-large | Matter | 1.125rem | 400 | 1.5 | normal | Descriptive paragraphs, feature explanations |
| body | Matter | 1rem | 400 | 1.5 | normal | Standard body copy, list items, button labels |
| label | Matter | 0.875rem | 400 | 1 | 0.1em | Uppercase labels, category headers, status badges |
| price-display | Matter | 2.75rem | 400 | 1.2 | normal | Pricing amounts, numerical highlights |
| navigation | Inter | 0.9375rem | 400 | 1.2 | -0.02em | Top navigation, footer links, secondary navigation |
| mono-code | Matter Mono | 1rem | 400 | 1 | -0.0125em | Command snippets, code references, technical strings |

The type system centers on Matter, designed by Martin Vácha and distributed by Displaay, with Inter by Rasmus Andersson handling navigation and secondary reading contexts. Matter Mono, also by Martin Vácha through Displaay, serves code-specific moments. System-Sansserif appears in the interface at 12px for small labels and metadata where a neutral sans-serif suffices. The hierarchy relies on size contrast and tracking variation rather than weight—Regular (400) dominates, with Medium (500) appearing only for button emphasis. Negative tracking on display sizes creates tighter, more impactful headlines, while body sizes use neutral spacing for readability. Verify licensing for these families before production use.

## Layout

The layout follows a centered container model with generous horizontal margins. Content maxes out at a practical reading width, leaving substantial negative space on larger viewports that reinforces the focused, tool-like character of the brand. Sections stack vertically with significant separation—typically 6.25rem between major content blocks—creating rhythmic breathing room that prevents the dark canvas from feeling dense.

Navigation sits at the top in a full-width bar with inline links and a prominent download call-to-action. The footer expands into a multi-column link grid with platform download cards arranged in a three-column layout for Mac, Linux, and Windows. Pricing pages use a tiered card system with three primary columns for Free, Build, and Max plans, plus secondary columns for Business and Enterprise tiers.

Card-based components use consistent internal padding of 1.5rem, with border-radius at 0.5rem for standard cards and 0.375rem for buttons. The spatial system builds from a 2px base unit, producing rem values that snap to clean multiples: 0.5rem, 1rem, 1.5rem, 2rem, 4rem, and 6.25rem for section spacing. This constrained scale prevents arbitrary measurements while supporting the generous proportions that distinguish the interface.

## Visual language

Warp's visual identity emerges from the tension between developer utility and refined product design. The near-black canvas evokes terminal environments and code editors, but the warm off-white typography and subtle surface elevations prevent the aesthetic from feeling raw or unfinished. Rounded corners on cards and buttons soften the technical edge without becoming friendly or casual—0.5rem on cards and 0.375rem on buttons strike a precise balance.

Imagery strategy centers on product screenshots, particularly terminal interfaces with syntax highlighting and diff views. These screenshots appear within rounded containers that match the card radius, creating continuity between UI chrome and content. The occasional promotional element uses a soft purple gradient, introducing warmth that contrasts with the cool mint-green accents used for feature emphasis.

The system avoids decorative illustration in favor of functional imagery and typographic hierarchy. When color appears beyond the neutral foundation, it carries meaning: green for recommended states, purple for limited promotions, blue for hyperlinks. This semantic discipline keeps the dark environment scannable and prevents visual fatigue during extended use.

## Components

### Navigation Bar
- **Anatomy**: Logo mark left, primary links center-right, "Contact sales" text link, "Download for Mac" button far right
- **Surface**: Transparent over canvas, or `#121212` background
- **Typography**: `{typography.navigation}` for links, `{typography.body}` for button
- **Shape**: Full-width, height approximately 3.75rem with 1rem vertical padding
- **Spacing**: 1.875rem horizontal page margins, 1.5rem gap between nav links
- **Composition**: Flex row with space-between alignment, logo and actions at edges

### Pricing Card
- **Anatomy**: Tier name header, price display with period suffix, description paragraph, primary action button, feature list with bullet indicators
- **Surface**: `{colors.surface}` background, `{colors.border}` border on standard; `{colors.surface-elevated}` with `{colors.accent-green}` border for featured
- **Typography**: `{typography.heading-medium}` for tier name, `{typography.price-display}` for price, `{typography.body-large}` for description, `{typography.body}` for features
- **Shape**: `{rounded.card}` border radius
- **Spacing**: `{spacing.comfortable}` internal padding, `{spacing.spacious}` between price and button, `{spacing.compact}` between list items
- **Composition**: Vertical stack, button centered or full-width, feature list left-aligned with hanging bullets

### Primary Button
- **Anatomy**: Text label only, no icon in standard usage
- **Surface**: `{colors.action-primary}` background, `{colors.action-primary-text}` text
- **Typography**: `{typography.body}` with Medium weight
- **Shape**: `{rounded.button}` border radius
- **Spacing**: 1rem vertical, 1.5rem horizontal padding
- **Composition**: Centered text, full-width in card contexts, auto-width in navigation

### Secondary Button
- **Anatomy**: Text label, appears in navigation and card footers
- **Surface**: `{colors.action-secondary}` background, `{colors.action-secondary-text}` text
- **Typography**: `{typography.body}` with Medium weight
- **Shape**: `{rounded.button}` border radius
- **Spacing**: 1rem vertical, 1.5rem horizontal padding
- **Composition**: Same structural rules as primary, used for lower-emphasis actions

### Toggle Switch
- **Anatomy**: Two-option segmented control with active state indicator
- **Surface**: `{colors.surface}` background container, `{colors.ink}` active segment
- **Typography**: `{typography.body}` for labels
- **Shape**: `{rounded.button}` for container, individual segments share radius
- **Composition**: Horizontal flex with equal-width segments, active state inverts colors

### Promotional Pill
- **Anatomy**: Icon or prefix, text label, optional suffix
- **Surface**: `{colors.promotional}` background with gradient to `{colors.promotional-light}`
- **Typography**: `{typography.label}` for uppercase treatment
- **Shape**: `{rounded.pill}` for full capsule
- **Spacing**: 0.5rem vertical, 1rem horizontal padding
- **Composition**: Inline-flex, appears above pricing cards or near page titles

### Feature Section
- **Anatomy**: Eyebrow label, large headline, body copy, product screenshot or terminal image
- **Surface**: Transparent over canvas, no card container
- **Typography**: `{typography.label}` for eyebrow, `{typography.hero-display}` or `{typography.section-display}` for headline, `{typography.body-large}` for copy
- **Shape**: Images use `{rounded.panel}` or `{rounded.card}` when contained
- **Spacing**: `{spacing.section-large}` above, `{spacing.spacious}` between text and image
- **Composition**: Left-aligned text block above or beside centered image, generous vertical rhythm

### Footer
- **Anatomy**: Logo and status indicator left, multi-column link grid right, platform download cards below, legal bar at bottom
- **Surface**: `{colors.canvas}` background, subtle top border or spacing separation
- **Typography**: `{typography.navigation}` for links, `{typography.heading-large}` for download section, `{typography.mono-code}` for install commands
- **Shape**: Download cards use `{rounded.card}`, platform icons in square containers
- **Spacing**: `{spacing.section}` vertical padding, `{spacing.spacious}` between link columns
- **Composition**: Two-row structure: links above, downloads below; legal bar full-width with centered or split content

## Responsive behavior

The design maintains its dark character across viewport sizes, with primary adaptations occurring in typography scale and column count. The three-column pricing grid collapses to single-column stacking on narrow viewports, with featured card prominence maintained through border treatment rather than position. Navigation condenses to a hamburger menu or simplified link set, though the download button remains visible as a persistent action.

Hero display sizes reduce proportionally: 5rem becomes approximately 3rem on tablet and 2.5rem on mobile. Section spacing compresses from 6.25rem to 4rem to 3rem, preserving vertical rhythm without excessive scrolling. Platform download cards in the footer transition from three-column to stacked single-column, with architecture selector buttons remaining horizontally scrollable or wrapping to two rows.

Images and terminal screenshots maintain aspect ratio, scaling to full container width with maintained border radius. The promotional pill remains inline but may truncate or wrap text on narrow screens.

## Practical implementation guidance

### Preserve
- The near-black canvas as the unconditional background; never introduce light-mode surfaces
- Warm off-white ink for primary text; pure white only for maximum emphasis moments
- Matter Regular for all display and body text; weight variation is not part of the brand voice
- Generous section spacing; the dark environment needs breathing room to avoid heaviness
- Subtle surface elevation through lightness shifts rather than shadows
- Mint-green accent for featured states and success; purple gradient strictly for promotions

### Avoid
- Introducing additional weights beyond Regular and Medium
- Using borders stronger than 1px or colors brighter than the muted accent palette
- Stacking multiple promotional elements; the purple gradient loses impact if overused
- Pure black backgrounds; the slight warmth in `#121212` is intentional
- Decorative illustrations that compete with product screenshots
- Light-mode toggles or adaptive color schemes

### Recommended build order
1. Establish canvas, surface, and ink color tokens with proper contrast ratios
2. Implement Matter and Matter Mono font loading with Inter as secondary
3. Build navigation bar with logo, links, and download button
4. Create pricing card component with standard and featured variants
5. Implement button system with primary and secondary treatments
6. Construct footer with link grid and platform download cards
7. Add promotional pill for limited-time messaging
8. Refine spacing scale and responsive breakpoints

### Accessibility
- Maintain minimum 4.5:1 contrast for body text; the off-white on near-black exceeds this substantially
- Ensure interactive elements have visible focus states; consider outline or subtle glow on dark backgrounds
- Provide reduced-motion alternatives for any promotional animations
- Use semantic heading hierarchy despite visual similarity between some sizes
- Code snippets in Matter Mono should include copy-to-clipboard functionality for keyboard users
- Pricing tier differences should be programmatically determinable, not just color-dependent

## Scope note

This guide covers the Warp marketing site homepage and pricing page as visible in desktop view. Mobile breakpoints, interactive states beyond static view, motion design, and the in-product terminal interface are not represented. The command palette, settings panels, and authenticated user flows fall outside the current scope.
