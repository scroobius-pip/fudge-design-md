# How openvpn.net is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/openvpn.net-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with 3D network topology illustration, headline "Secure Access for Every Employee, Everywhere", and dual CTA buttons on light gray canvas](https://pin.fontofweb.com/5007?format=jpg)](https://design.withfudge.com/share/pin-5007)

[Hero section with 3D network topology illustration, headline "Secure Access for Every Employee, Everywhere", and dual CTA buttons on light gray canvas](https://design.withfudge.com/share/pin-5007)

[![Dark navy promotional banner with 68% statistic, human-element breach claim, and orange "Get Started for Free" CTA button](https://pin.fontofweb.com/5008?format=jpg)](https://design.withfudge.com/share/pin-5008)

[Dark navy promotional banner with 68% statistic, human-element breach claim, and orange "Get Started for Free" CTA button](https://design.withfudge.com/share/pin-5008)

[![Footer with five-column link grid, OpenVPN logo, social icons, Service Status badge, and copyright legal row](https://pin.fontofweb.com/5009?format=jpg)](https://design.withfudge.com/share/pin-5009)

[Footer with five-column link grid, OpenVPN logo, social icons, Service Status badge, and copyright legal row](https://design.withfudge.com/share/pin-5009)

## Overview

OpenVPN's marketing site presents a security-focused SaaS identity built on trust, technical credibility, and approachable clarity. The visual system balances enterprise gravitas with consumer-friendly accessibility through a carefully restrained palette and generous whitespace. The design communicates network security through abstract 3D illustrations of connected nodes and pathways rather than literal lock icons or shield imagery, elevating the brand above commodity VPN providers.

The page architecture follows a classic marketing funnel: a commanding hero with dual conversion paths, social proof through enterprise logos, feature differentiation cards, a dark persuasive interstitial with statistics, and a comprehensive footer for navigation depth. Every element serves the core narrative of simplifying complex security infrastructure for distributed workforces. The Inter typeface provides neutral, highly legible character across all scales, while the color system reserves warmth exclusively for action elements against a cool technical foundation.

## Colors

The color system operates on a principle of disciplined contrast: a near-white technical canvas supports dark navy text and structural elements, with warm orange reserved exclusively for primary actions. This creates immediate visual hierarchy where interactive elements pop against the subdued environment.

| token | value | use |
|---|---|---|
| ink | #1A2B4A | Primary headings, body text, logo mark, navigation |
| ink-secondary | #4A5568 | Subheadings, descriptions, secondary body text |
| muted | #A0AEC0 | Tertiary text, placeholders, disabled states, footer legal |
| canvas | #F7F8FA | Page background, section alternation, hero ground plane |
| surface | #FFFFFF | Cards, buttons, navigation bar, elevated panels |
| surface-elevated | #FFFFFF | Modal backgrounds, dropdown menus, floating elements |
| border | #E2E8F0 | Card outlines, dividers, input borders, footer separators |
| border-subtle | #EDF2F7 | Hairline rules, table rows, subtle section dividers |
| accent-navy | #1A2B4A | Dark section backgrounds, promotional banners, footer depth |
| accent-blue | #2B6CB0 | Secondary buttons, links, active navigation states, badges |
| action | #F5A623 | Primary CTA buttons, conversion highlights, stat accents |
| action-hover | #E09420 | Primary button hover states, interactive action feedback |
| success | #38A169 | Status indicators, confirmation badges, positive messaging |

The light mode dominates the experience, with the dark navy accent-navy appearing strategically in the statistics banner to create visual rhythm and draw attention to key proof points. The action orange maintains consistent warmth across all conversion contexts, never appearing in decorative or structural roles. Photography and 3D illustrations introduce subtle blues and cool grays that harmonize with the interface palette without competing for attention.

## Typography

The typographic system relies entirely on Inter, a variable font designed by Rasmus Andersson and distributed by Rsms. Verify licensing for these families before production use. The hierarchy spans seven semantic roles from commanding hero display to compact legal labels, all sharing the same neutral grotesque character.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 700 | 1.1 | -0.02em | Homepage hero headlines, major section titles |
| section-display | Inter | 2.25rem | 700 | 1.2 | -0.01em | Feature section headings, value proposition statements |
| stat-display | Inter | 3.5rem | 700 | 1 | -0.03em | Large statistics, promotional numbers, proof points |
| body-large | Inter | 1.25rem | 400 | 1.6 | 0 | Hero descriptions, introductory paragraphs |
| body | Inter | 1rem | 400 | 1.6 | 0 | Standard paragraphs, feature descriptions |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Card text, captions, secondary descriptions |
| label | Inter | 0.75rem | 600 | 1.4 | 0.05em | Category tags, eyebrow labels, uppercase metadata |
| navigation | Inter | 0.875rem | 500 | 1.4 | 0 | Primary nav items, dropdown links, footer columns |
| button | Inter | 0.875rem | 600 | 1 | 0 | CTA buttons, form submit actions |

The hero display employs tight negative tracking for impactful headlines, while the stat-display pushes to 3.5rem with even tighter tracking for maximum numerical presence. Body text maintains generous 1.6 line height for comfortable reading of technical content. Labels use uppercase transformation with positive tracking for scanability in category indicators like "ZERO TRUST VPN". Navigation weight at 500 provides subtle differentiation from body text without appearing bold.

## Layout

The layout follows a centered content model with maximum width constraints that prevent excessive line lengths while maintaining breathing room on large viewports. The grid system appears to use a 12-column foundation with generous gutter spacing.

The hero section occupies full viewport width with a centered content column approximately 800px wide for text elements. The 3D network illustration extends to the edges, creating immersive depth while the textual content remains constrained. Below the hero, content sections alternate between full-bleed colored backgrounds and contained white cards.

The feature grid visible in the lower portion of the hero image uses a two-column layout for icon-plus-text cards, each card containing a 3D illustration, heading, and description. These cards appear to float on the canvas background with subtle elevation through shadow rather than explicit borders.

The footer implements a five-column link grid for navigation density, with columns labeled by product area: Access Server, CloudConnexa, Company, Resources, and Use Cases. Below this, a secondary row contains brand identity, social proof through platform icons, service status, and legal links. The footer maintains the canvas background with a subtle top border for separation.

Section spacing follows a rhythmic pattern with 6rem vertical padding between major content blocks, compressing to 4rem for related subsections. Internal component padding of 1.5rem provides consistent breathing room within cards and containers.

## Visual language

The visual identity communicates technical sophistication through abstract 3D illustration rather than literal security iconography. The network topology renderings feature soft, rounded nodes connected by glowing pathways in cool blues and warm amber accents, suggesting data flow without visual clutter. These illustrations use subtle drop shadows and ground-plane reflections to create depth without heavy material realism.

The illustration style balances geometric precision with approachable softness: nodes are rounded squares and circles with chamfered edges, pathways are tapered curves with gradient fills suggesting light transmission. The color palette within illustrations extends the interface system, using navy depths, sky blues, and the signature action orange as accent highlights.

Iconography throughout the interface uses simple geometric forms: checkmarks in shield shapes, user silhouettes, globe networks. The style is flat with subtle gradient depth, avoiding outline-only or overly detailed approaches. Social platform icons in the footer use monochrome gray treatment at consistent 24px size, maintaining visual uniformity across different brand marks.

The overall aesthetic avoids security clichés—no padlocks, no aggressive red warnings, no matrix-style green text. Instead, confidence emerges through clean structure, enterprise client logos rendered in muted monochrome, and the calm authority of generous whitespace. The visual system suggests that security infrastructure can be both powerful and elegantly simple.

## Components

### Primary navigation

- **Anatomy**: Logo mark left, horizontal link row center, utility actions right
- **Surface**: Transparent over hero, white background on scroll
- **Typography**: `{typography.navigation}` for all items
- **Shape**: Full-width bar, height approximately 4rem
- **Spacing**: Logo with 1.5rem internal padding, nav items spaced 2rem apart
- **Composition**: Flex row with space-between alignment, centered vertical alignment
- **Variants**: Default transparent state; scrolled state with `{colors.surface}` background and `{colors.border}` bottom border

### Primary action button

- **Anatomy**: Text label with no icon
- **Surface**: `{components.primary-action.backgroundColor}` background, `{components.primary-action.color}` text
- **Typography**: `{components.primary-action.typography}`
- **Shape**: `{components.primary-action.borderRadius}` corners, padding `{components.primary-action.padding}`
- **Spacing**: Centered text, inline with secondary button
- **Composition**: Inline-flex with 1rem gap to adjacent button

### Secondary action button

- **Anatomy**: Text label with no icon
- **Surface**: `{components.secondary-action.backgroundColor}` background, `{components.secondary-action.borderColor}` border `{components.secondary-action.borderWidth}`, `{components.secondary-action.color}` text
- **Typography**: `{components.secondary-action.typography}`
- **Shape**: `{components.secondary-action.borderRadius}` corners, padding `{components.secondary-action.padding}`
- **Spacing**: Centered text, matching primary button height

### Promotional banner

- **Anatomy**: Statistics left, description and CTA right, decorative illustration far left
- **Surface**: `{components.promotional-banner.backgroundColor}` background with subtle gradient depth, `{components.promotional-banner.color}` text
- **Typography**: `{typography.stat-display}` for numbers, `{typography.body-large}` for descriptions, `{typography.body-small}` for attribution
- **Shape**: `{components.promotional-banner.borderRadius}` corners, padding `{components.promotional-banner.padding}`
- **Spacing**: Two-column internal layout with 3rem gap
- **Composition**: Asymmetric balance with visual weight on statistics

### Feature card

- **Anatomy**: 3D illustration top, heading below, description below heading
- **Surface**: `{components.feature-card.backgroundColor}` with subtle shadow elevation, `{components.feature-card.color}` text
- **Typography**: `{typography.body}` for headings, `{typography.body-small}` for descriptions
- **Shape**: `{components.feature-card.borderRadius}` corners, padding `{components.feature-card.padding}`
- **Spacing**: 1.5rem gap between cards in grid
- **Composition**: Vertical stack, centered alignment, icon approximately 64px height

### Footer link column

- **Anatomy**: Column heading plus vertical stack of text links
- **Surface**: Transparent, inherits `{colors.canvas}` footer background
- **Typography**: `{typography.label}` for column headings (uppercase), `{typography.navigation}` for links
- **Spacing**: 0.75rem between links, 1.5rem below heading

### Service status badge

- **Anatomy**: Text label with subtle background pill
- **Surface**: `{components.service-badge.backgroundColor}` background, `{components.service-badge.borderColor}` border `{components.service-badge.borderWidth}`, `{components.service-badge.color}` text
- **Typography**: `{components.service-badge.typography}`
- **Shape**: `{components.service-badge.borderRadius}` full pill, padding `{components.service-badge.padding}`
- **Spacing**: Inline element in footer secondary row

### Social icon row

- **Anatomy**: Horizontal row of platform icons
- **Surface**: Transparent
- **Typography**: None, icon-only
- **Spacing**: 1rem gap between icons
- **Composition**: Centered in footer secondary row

## Responsive behavior

The design should maintain its centered content model across viewport sizes, with the hero headline scaling down to `{typography.section-display}` on tablet and maintaining readability through adjusted line height. The feature card grid should collapse from two columns to single column on narrow viewports, with illustrations scaling proportionally.

The navigation should collapse to a hamburger menu on mobile, with the utility buttons (Sign In, Get Started) either hiding behind the menu or stacking in a compressed bar. The promotional banner should stack its two-column layout vertically on narrow screens, maintaining the statistics as the first element for impact.

Footer columns should reflow from five-column grid to two-column on tablet and single column accordion on mobile, preserving category groupings. The legal row should stack vertically with centered alignment on narrow viewports.

Touch targets should maintain minimum 44px height for all interactive elements. The primary action orange should remain consistent across breakpoints for conversion continuity.

## Practical implementation guidance

### Preserve
- The disciplined color restraint: warm orange exclusively for primary actions, navy for depth and authority, near-white for breathing room
- The 3D illustration style with soft shadows and network topology abstraction
- The generous section spacing that creates premium, unhurried pacing
- The uppercase label treatment for category indicators and eyebrow text
- The dual CTA pattern in hero (primary filled + secondary outlined)

### Avoid
- Introducing additional accent colors beyond the orange-navy pairing
- Using literal security iconography (padlocks, shields as primary visuals)
- Tightening body text line height below 1.5 for readability
- Creating dark mode without careful attention to the warm orange against dark backgrounds
- Overloading the footer with more than five column categories

### Recommended build order
1. Establish the color tokens and Inter font loading with variable font support
2. Build the navigation shell with transparent-to-white scroll behavior
3. Implement the hero section with centered text constraint and background illustration
4. Create the button components with primary and secondary variants
5. Build the feature card grid with consistent internal spacing
6. Implement the dark promotional banner with asymmetric layout
7. Construct the five-column footer with responsive reflow logic
8. Add micro-interactions: button hover states, smooth scroll behavior

### Accessibility
- Ensure the orange action buttons on white backgrounds meet WCAG AA contrast ratios; the current #F5A623 against white may need dark text or adjusted hue for compliance
- Provide visible focus indicators on all interactive elements, using the accent-blue for keyboard navigation clarity
- Maintain logical heading hierarchy from h1 hero through h2 sections to h3 cards
- Add aria-labels to icon-only social links in footer
- Ensure the 3D illustrations have descriptive alt text conveying the network connectivity concept

## Scope note

This guide covers the OpenVPN homepage marketing surface including hero, feature introduction, promotional statistics banner, and comprehensive footer. Pricing pages, product dashboards, documentation, and account management interfaces are not represented in the supplied material. Measurements are practical adaptation targets derived from visible proportions rather than extracted specifications. Mobile breakpoints, animation behavior, and form validation states are not covered and should be validated against live implementation.
