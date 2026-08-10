# How pangram.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/pangram.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dashboard interface with referral modal overlay showing invite link and social sharing options against a textured green landscape illustration.](https://pin.fontofweb.com/9705?format=jpg)](https://design.withfudge.com/share/pin-9705)

[Dashboard interface with referral modal overlay showing invite link and social sharing options against a textured green landscape illustration.](https://design.withfudge.com/share/pin-9705)

[![API solutions page featuring four billing option cards with colored headers and a research credits call-to-action section.](https://pin.fontofweb.com/9704?format=jpg)](https://design.withfudge.com/share/pin-9704)

[API solutions page featuring four billing option cards with colored headers and a research credits call-to-action section.](https://design.withfudge.com/share/pin-9704)

[![Pricing page with enterprise tab selected, showing two side-by-side plan cards with green checkmark feature lists.](https://pin.fontofweb.com/9703?format=jpg)](https://design.withfudge.com/share/pin-9703)

[Pricing page with enterprise tab selected, showing two side-by-side plan cards with green checkmark feature lists.](https://design.withfudge.com/share/pin-9703)

[![Team pricing card with light blue header, annual toggle switch, and green primary action button for trial signup.](https://pin.fontofweb.com/9702?format=jpg)](https://design.withfudge.com/share/pin-9702)

[Team pricing card with light blue header, annual toggle switch, and green primary action button for trial signup.](https://design.withfudge.com/share/pin-9702)

## Overview

Pangram Labs presents a warm, editorial SaaS aesthetic that balances technical credibility with approachable warmth. The interface rests on a near-white canvas with subtle cream undertones, allowing deep forest greens and vibrant tangerine accents to carry semantic weight. Display typography uses an elegant serif face with tight negative tracking for headlines, while IBM Plex Sans provides readable, neutral body text. The visual system employs generous whitespace, soft rounded corners on feature cards, and dashed border separators in the sidebar navigation. Dashboard, marketing, and pricing surfaces share this unified language, with color-coded feature cards and consistent button hierarchies anchoring the experience.

## Colors

The palette centers on warm neutrals with purposeful accent colors that signal action and category.

| token | hex | use |
|---|---|---|
| canvas | #F8F7F5 | Page background, sidebar ground |
| surface | #FFFFFF | Cards, modals, input fields |
| surface-elevated | #F2F2F2 | Secondary backgrounds, disabled states |
| ink | #14201E | Primary text, headings, icons |
| ink-secondary | #4B5563 | Secondary text, descriptions |
| ink-muted | #637381 | Tertiary text, placeholders, metadata |
| action-primary | #15502E | Primary buttons, success states, feature green |
| action-primary-hover | #1A4039 | Darker green for hover states |
| action-accent | #FF5E00 | CTA buttons, active tabs, highlights |
| action-accent-hover | #D17A01 | Darker orange for hover states |
| border | #E2E8F0 | Card borders, dividers, input outlines |
| border-dashed | #D1D5DB | Sidebar separators, subtle dividers |
| success | #15502E | Checkmarks, confirmation states |
| info | #3B82F6 | Informational badges, links |
| warning | #F7D545 | Warning states, yellow feature cards |
| danger | #FF5E00 | Error states, destructive actions |
| feature-yellow | #FEFEF1 | Self-serve card header background |
| feature-blue | #E0FBB6 | Auto-refill card header background |
| feature-green | #15502E | Bulk savings card header background |
| feature-peach | #FEE3DA | Enterprise card header background |
| feature-lavender | #F4BEFF | Enterprise plan badge background |
| feature-mint | #F4F4ED | Research credits section background |

The color system distinguishes between functional UI colors and feature category colors. Marketing pages use dark section backgrounds with white text for contrast, while dashboard and pricing pages remain on the light canvas. The tangerine accent appears exclusively for primary calls-to-action and active states, making it highly scannable against the muted environment.

## Typography

The type system pairs an elegant display serif with a neutral sans-serif workhorse, supported by a monospace face for technical contexts. The complete set of material families includes PP Eiko, IBM Plex Sans, IBM Plex Mono, Imbue 10 Pt, Helvetica, Applesystem, and System-Uisansserif.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | PP Eiko | 3.5rem | 400 | 1.1 | -0.035em | Marketing headlines, hero sections |
| section-display | PP Eiko | 2.25rem | 400 | 1.15 | -0.03em | Section headings, pricing titles |
| card-title | PP Eiko | 1.75rem | 400 | 1.2 | -0.025em | Card headings, feature titles |
| body | IBM Plex Sans | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, UI text |
| body-small | IBM Plex Sans | 0.875rem | 400 | 1.43 | 0 | Secondary descriptions, metadata |
| label | IBM Plex Sans | 0.875rem | 500 | 1.43 | 0 | Buttons, tabs, navigation labels |
| caption | IBM Plex Sans | 0.75rem | 400 | 1.33 | 0 | Fine print, timestamps, badges |
| mono | IBM Plex Mono | 0.875rem | 400 | 1.43 | 0 | Code snippets, technical values |
| nav | IBM Plex Sans | 1rem | 400 | 1.5 | 0 | Sidebar navigation, top bar links |

PP Eiko, designed by Caio Kondo and distributed by Pangram Pangram, provides the editorial character through its high-contrast serifs and tight tracking. IBM Plex Sans and IBM Plex Mono, designed by Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen with Bold Monday, deliver the functional layer with excellent readability at small sizes. Imbue 10 Pt appears in select display contexts. Helvetica, Applesystem, and System-Uisansserif serve as system-level fallbacks and specialized UI labels. Verify licensing for these families before production use.

## Layout

The layout system uses a fixed sidebar with scrollable main content on dashboard pages, and centered single-column layouts for marketing and pricing pages.

**Dashboard layout**: A 15rem left sidebar with dashed right border contains navigation links and user status. The main content area fills the remaining viewport width with a maximum readable width of approximately 48rem centered for primary interactions. Top bars on dashboard pages hold contextual actions, examples links, and user avatars.

**Marketing layout**: Full-width sections with generous vertical padding of 6.25rem alternate between light canvas and dark forest green backgrounds. Content constrains to a centered maximum width with 2.25rem horizontal gutters. Negative margin tricks create overlapping section transitions, particularly where hero sections meet feature grids.

**Pricing layout**: Tabbed interface centered at the top switches between plan categories. Plan cards display in two-column grids for enterprise tiers and single-column centered cards for team pricing. Feature lists use left-aligned checkmarks with comfortable line spacing.

**Spacing scale**: The system builds from a 0.25rem base unit. Common increments include 0.5rem for tight internal padding, 1rem for component gaps, 1.5rem for card padding, 2.5rem for large card padding, and 6.25rem for section vertical rhythm. Dashboard cards use 1.5rem internal padding with 1rem gaps between related elements.

## Visual language

The visual character blends editorial sophistication with SaaS utility. Rounded corners vary by component role: standard cards use 0.75rem, feature cards on marketing pages use 3rem for a softer, more approachable feel, and buttons use 0.5rem for crisp actionability. Pill-shaped buttons appear for high-emphasis CTAs like "Unlock Free Trial."

Shadows remain subtle and functional. Modals use a soft 0 4px 16px rgba(0,0,0,0.15) elevation. Cards on pricing pages carry a barely-there shadow that separates them from the canvas without heavy chrome. Focus states use a distinctive double-ring shadow: a 2px white ring inside a 4px tangerine ring, creating accessible visibility without harsh browser defaults.

Illustrations on the dashboard feature textured, organic landscapes in deep greens with playful objects like backpacks and magnifying glasses, providing personality without competing with the interface. Marketing pages use abstract geometric patterns and color-blocked feature card headers to create visual interest.

The border system distinguishes solid 1px borders for card containers from dashed 1px borders for sidebar separators, creating a subtle hierarchy of permanence versus navigation.

## Components

**Primary button**: Solid forest green background with white text, 0.5rem border radius, 0.5rem 1rem padding. Medium weight label typography. Hover darkens to #1A4039. Used for main actions like "Contact Us" and trial starts.

**Accent button**: Solid tangerine background with white text, pill-shaped 9999px border radius. Used for high-priority CTAs like "Unlock Free Trial" and active tab states. Hover darkens to #D17A01.

**Secondary button**: Transparent background with ink-colored text, 0.5rem border radius. Used for cancel actions and low-priority options. May include a 1px border in muted gray for additional definition.

**Card**: White background, 0.75rem border radius, 1px solid #E2E8F0 border, 1.5rem internal padding. Used for plan features, billing options, and dashboard widgets. Feature variants use 3rem border radius and colored header bands.

**Modal**: White background, 1rem border radius, centered with 0 4px 16px shadow. Contains a header with close action, body content, and footer actions. The referral modal shows tabbed navigation between "Invite" and "Rewards" with an orange underline active indicator.

**Input/textarea**: Light gray background #F2F2F2, 0.5rem border radius, 1.5rem padding. Placeholder text in muted gray. Focus state shows the distinctive white-then-tangerine double ring shadow.

**Sidebar navigation**: Fixed left panel with canvas background, dashed right border. Navigation items use 1rem body typography with muted gray icons. Active states show ink-colored text. Bottom section displays plan status with upgrade prompts.

**Pricing tabs**: Horizontal row of pill-shaped buttons. Inactive tabs show ink text on transparent background. Active tab shows white text on tangerine background with 0.5rem border radius.

**Feature list**: Vertical stack with 1rem gaps. Each item prefixes with a green checkmark icon, followed by body-small text in ink color. Used extensively in plan cards to communicate included capabilities.

**Plan card header**: Colored band at top of card with 3rem top border radius. Yellow for self-serve, light green for auto-refill, dark green for bulk savings, peach for enterprise. Contains a centered icon in contrasting color.

**Toggle switch**: Pill-shaped track with circular thumb. Off state shows gray track, on state shows green track. Used for annual billing toggles on pricing pages.

## Responsive behavior

The sidebar collapses to a hamburger menu on narrow viewports, with navigation drawer sliding in from the left. Pricing cards stack from two-column to single-column below approximately 768px viewport width. Marketing section padding reduces from 6.25rem to 3rem on mobile. Hero display typography scales down to 2.25rem on narrow screens to prevent overflow. Feature card headers maintain their 3rem border radius but reduce internal padding proportionally.

## Practical implementation guidance

**Preserve**: The warm canvas background against pure white cards creates necessary depth—maintain this relationship. The PP Eiko serif for headlines is essential to the brand character; do not substitute with generic sans-serif displays. The dashed sidebar border is a distinctive touch that separates navigation from content without heaviness. The green checkmark feature lists are a recognizable pattern across pricing surfaces.

**Avoid**: Do not use the tangerine accent for non-action elements; it should remain reserved for primary CTAs and active states to preserve its attention-carrying power. Avoid sharp 0-radius corners on feature cards; the 3rem radius contributes significantly to the approachable personality. Do not place body text directly on dark green backgrounds without sufficient contrast; use white or very light text only.

**Recommended build order**: Establish the canvas and surface color variables first, then implement IBM Plex Sans for all body text. Add PP Eiko for headline hierarchy. Build the sidebar navigation with dashed borders. Create the button system with primary green and accent tangerine variants. Implement cards with proper border radius scaling. Finally, add the modal system with shadow elevation and focus ring treatments.

**Accessibility**: Ensure the tangerine accent (#FF5E00) on white meets WCAG AA contrast ratios for text; it may need darkening for small text applications. The green primary action (#15502E) on white passes contrast requirements. Focus rings should remain visible against both light and dark backgrounds. Modal dialogs should trap focus and provide escape key dismissal. Pricing tab switches should communicate state to screen readers with aria-pressed or aria-selected attributes.

## Scope note

This guide covers the dashboard, pricing, and API solutions surfaces visible in the supplied images. Marketing page hero sections with dark backgrounds and additional illustration styles are partially represented. Mobile breakpoints, animation curves, form validation states, and error page designs are not included. Measurements derive from the exact values in the design facts and use the 0.125rem relative unit scale throughout.
