# How invideo.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/invideo.io-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with six-column link grid on vibrant blue background, invideo logo, app store badges, and social icons](https://pin.fontofweb.com/6199?format=jpg)](https://design.withfudge.com/share/pin-6199)

[Footer section with six-column link grid on vibrant blue background, invideo logo, app store badges, and social icons](https://design.withfudge.com/share/pin-6199)

[![Full-bleed cinematic hero with vintage camera, bearded figure, and centered white pill-shaped Play button](https://pin.fontofweb.com/6198?format=jpg)](https://design.withfudge.com/share/pin-6198)

[Full-bleed cinematic hero with vintage camera, bearded figure, and centered white pill-shaped Play button](https://design.withfudge.com/share/pin-6198)

[![Two pricing cards showing Free and Enterprise tiers with rounded borders and blue action buttons](https://pin.fontofweb.com/6197?format=jpg)](https://design.withfudge.com/share/pin-6197)

[Two pricing cards showing Free and Enterprise tiers with rounded borders and blue action buttons](https://design.withfudge.com/share/pin-6197)

[![Four-column pricing grid with colorful plan headers, toggle switch, and feature comparison lists](https://pin.fontofweb.com/6196?format=jpg)](https://design.withfudge.com/share/pin-6196)

[Four-column pricing grid with colorful plan headers, toggle switch, and feature comparison lists](https://design.withfudge.com/share/pin-6196)

## Overview

The invideo.io design system serves an AI-powered video creation platform with a visual identity that balances cinematic storytelling and precise product utility. The interface moves between immersive, full-bleed photographic moments and tightly organized, information-dense surfaces like pricing tables and feature grids. A vibrant blue anchors the brand across both light and dark contexts, while accent colors in purple, magenta, and orange differentiate product tiers and highlight promotional moments. The system relies on a single type family—Inter—across all weights and sizes, creating cohesion between expressive headlines and functional UI text. Rounded corners appear at every scale, from small badges to full pill-shaped buttons and cards, giving the interface a friendly, approachable character that softens the density of feature lists and pricing data.

## Colors

The color system operates in three modes: a light product surface for tools and pricing, a dark cinematic mode for hero imagery, and a vibrant blue footer mode that inverts the typical light-on-dark relationship.

| token | hex | use |
|---|---|---|
| action | #066DE8 | Primary buttons, plan headers, key CTAs |
| action-hover | #086DE8 | Button hover states |
| action-active | #0F76F5 | Button pressed states |
| ink-primary | #141414 | Main headings, body text on light surfaces |
| ink-secondary | #222222 | Secondary text, descriptions |
| ink-tertiary | #2D2D2D | Tertiary information, metadata |
| muted-ink | #23528C | Subdued text, footer links at reduced opacity |
| canvas | #FFFFFF | Primary background, card surfaces, button text on dark |
| surface | #FEFEFE | Near-white backgrounds for subtle depth |
| surface-dark | #E3EDF8 | Toggle backgrounds, subtle container fills |
| border | #B1E5FF | Light blue borders, decorative separators |
| border-subtle | #000000 | Hairline borders on cards and inputs |
| accent-purple | #6B33F7 | Max plan header, secondary brand moments |
| accent-magenta | #C933F7 | Generative plan header, promotional badges |
| accent-orange | #EC6809 | Team plan header, urgency indicators |
| success | #3381F7 | Confirmation states, positive indicators |
| footer-background | #277CEE | Full-bleed footer surface |

The light mode dominates product surfaces: white cards with black text and blue action elements. The footer inverts this with a saturated blue background and white text, creating a strong terminal moment. Cinematic hero sections use full-bleed photography with overlaid white text and semi-transparent or solid white pill buttons. Accent colors appear primarily in pricing tier headers, where each plan receives a distinct hue to aid visual scanning and differentiation.

## Typography

The system uses Inter exclusively, with weights ranging from Regular (400) through Medium (500) and Semibold (600) to Bold (700). The type scale is tightly calibrated, with display sizes for pricing and hero moments, and a dense cluster of functional sizes for UI elements.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 700 | 1 | -0.02em | Hero headlines, major page titles |
| section-display | Inter | 2.625rem | 500 | 1.5 | normal | Section headings, pricing page titles |
| heading-large | Inter | 3rem | 500 | 1.5 | normal | Plan prices, large numerals |
| heading-medium | Inter | 1.125rem | 500 | 1.5 | normal | Card titles, subsection headers |
| body | Inter | 1rem | 400 | 1.5 | normal | Primary body text, descriptions |
| body-small | Inter | 0.875rem | 400 | 1.43 | normal | Secondary descriptions, footer links |
| label | Inter | 0.75rem | 600 | 1.33 | normal | Badges, tags, category labels |
| navigation | Inter | 1rem | 400 | 1.5 | normal | Nav items, top-level links |
| button-primary | Inter | 1rem | 500 | 1.25 | -0.025em | Primary CTA buttons |
| button-secondary | Inter | 0.875rem | 500 | 1.43 | normal | Secondary actions, footer buttons |
| price-display | Inter | 3rem | 500 | 1 | normal | Plan dollar amounts |
| legal-copy | Inter | 0.875rem | 400 | 1.43 | normal | Copyright, terms links |

Verify licensing for these families before production use. The Inter font is served from a Next.js static asset path in the source implementation.

## Layout

The layout system uses a fluid container approach with generous section spacing and clear horizontal rhythm. Content areas center within a max-width container, while hero sections break out to full viewport width for cinematic impact.

The base spacing unit is 0.125rem (2px), with derived values at 0.5rem, 0.75rem, 1rem, 1.5rem, 2rem, and 2.5rem for component internals. Section spacing operates at 6rem and 10rem, creating dramatic vertical breathing room between major content blocks.

Grid structures vary by content type. The pricing page uses a four-column equal-width grid for plan comparison, with cards that maintain consistent internal padding and aligned action buttons. The footer employs a six-column link grid that distributes category navigation across the full width, collapsing to fewer columns on narrower viewports. Feature lists within pricing cards use a single-column stack with icon-leading rows, maintaining left alignment for easy scanning.

Card containers use 1.5rem border radius and 1px solid borders in black or subtle tones. Internal padding ranges from 1.5rem to 2rem, with consistent 1.5rem gaps between related elements. Buttons and interactive elements favor full pill shapes (9999px radius), while badges and small containers use 0.5rem to 0.75rem radius values.

## Visual language

The visual language merges cinematic photography with clean, systematic UI. Hero sections feature full-bleed imagery with centered overlay text in bold, condensed display type—white against photographic backgrounds for maximum contrast. A prominent pill-shaped Play button with a small triangle icon sits at the visual center, inviting immediate engagement.

Product surfaces shift to a restrained, information-forward aesthetic. White cards float against white or near-white backgrounds, defined by subtle borders and generous internal spacing. Color enters through intentional accents: blue for primary actions, and a spectrum of purple, magenta, and orange for plan differentiation. Small badges like "Best Value" use the same pill shape as buttons but with contrasting background colors, creating a family of rounded elements across scales.

The invideo wordmark appears in a custom logotype with distinctive rounded letterforms, paired with a ghost-like mascot icon. This combination anchors the footer and navigation, providing brand recognition without dominating functional content. Social proof and trust elements use simple iconography in circular or rounded-square containers.

## Components

### Primary button

- **Anatomy**: Text label centered within a pill-shaped container; may include leading icon
- **Surface and text color**: Background `{colors.action}`, text `{colors.canvas}`
- **Typography**: `{typography.button-primary}`
- **Shape and border**: Full pill radius (`9999px`), no border
- **Spacing**: Padding `0.75rem 1.5rem` for standard size; `1.5rem 2.5rem` for hero prominence
- **Composition**: Centered within parent container; full-width in card contexts
- **Variants**: Dark fill for primary actions; white fill with black text for secondary contexts; ghost variant with border for lowest emphasis

### Pricing card

- **Anatomy**: Plan name header, price display with currency and interval, feature list with icon bullets, primary action button, optional dropdown selector for configuration
- **Surface and text color**: White background (`{colors.canvas}`), black text (`{colors.ink-primary}`), colored plan name in accent hue
- **Typography**: Plan name `{typography.heading-medium}` in accent color; price `{typography.price-display}`; features `{typography.body-small}`
- **Shape and border**: `1.5rem` radius, `1px solid {colors.border-subtle}` border
- **Spacing**: `2rem` internal padding; `1.5rem` gap between price and features; `2rem` gap above button
- **Composition**: Vertical stack with consistent left alignment; equal card heights in grid
- **Variants**: Free tier with reduced emphasis; Enterprise with "Custom" pricing and contact CTA; promotional badge overlay for recommended plans

### Toggle switch

- **Anatomy**: Segmented control with two or three options, active indicator pill
- **Surface and text color**: Inactive segments use `{colors.surface-dark}` background; active segment uses `{colors.canvas}` with shadow
- **Typography**: `{typography.body-small}` for labels
- **Shape and border**: Full pill container radius; individual segments have no visible border
- **Spacing**: `0.25rem` internal padding; `0.75rem 1rem` per segment
- **Composition**: Inline, centered above related content
- **Variants**: Two-option (Monthly/Yearly) with promotional tag; three-option for extended configurations

### Footer

- **Anatomy**: Multi-column link grid, brand logo and mascot, app store download badges, social icon row, legal links and copyright
- **Surface and text color**: Vibrant blue background (`{colors.footer-background}`), white text (`{colors.canvas}`)
- **Typography**: Category headers `{typography.body-small}` semibold; links `{typography.body-small}` regular
- **Shape and border**: Top border in lighter blue (`{colors.border}`) at `1px`; no border radius on container
- **Spacing**: `2rem` top padding; `4rem` bottom padding; column gaps distribute evenly
- **Composition**: Six-column grid for links, logo left-aligned below, social icons right-aligned, legal center-aligned at bottom
- **Variants**: Simplified footer with reduced link columns for secondary pages

### Feature list item

- **Anatomy**: Leading icon, descriptive text, optional trailing badge or value
- **Surface and text color**: Inherits parent card background; text `{colors.ink-secondary}`
- **Typography**: `{typography.body-small}`
- **Shape and border**: No individual border; icon in `1rem` square
- **Spacing**: `0.75rem` vertical gap between items; `0.75rem` horizontal gap between icon and text
- **Composition**: Left-aligned stack within card padding
- **Variants**: Included features with check or lightning icon; unlimited features with infinity icon and highlighted badge

## Responsive behavior

The design should adapt from a fixed desktop layout to stacked mobile arrangements. The four-column pricing grid should collapse to two columns on tablet and single column on mobile, with cards maintaining full width and internal proportions. The six-column footer link grid should reduce to three columns on tablet and two on mobile, with the logo and social icons stacking vertically.

Hero sections with overlaid text should maintain centered composition but reduce type size proportionally. The display headline should scale from `3rem` to `2rem` to `1.5rem` across breakpoints. Pill buttons should maintain touch-friendly minimum dimensions, with padding increasing slightly on mobile to accommodate finger targets.

Navigation should collapse to a hamburger menu on mobile, with the invideo logo remaining visible. Pricing toggle switches should remain horizontally oriented but may shrink in overall width. Feature lists within pricing cards should remain single-column with no horizontal scrolling.

## Practical implementation guidance

### Preserve
- The full pill radius on all buttons and badges—this is a defining visual signature
- The vibrant blue footer as a strong brand terminal moment with inverted contrast
- The accent color system for plan differentiation (blue, purple, magenta, orange)
- The generous internal card padding that prevents information density from feeling cramped
- The icon-leading feature list pattern for pricing details

### Avoid
- Sharp-cornered buttons or cards that break the rounded visual system
- Replacing the accent colors with a single monochrome scheme, which would eliminate plan differentiation
- Overlapping hero text on busy photographic regions without sufficient contrast treatment
- Reducing footer link spacing to the point where touch targets become unreliable
- Using the display headline weight for body text, which would create excessive visual noise

### Recommended build order
1. Establish the color tokens and type scale with Inter at all specified weights
2. Implement the pill button component as the foundational interactive element
3. Build the pricing card with configurable accent color, price display, and feature list
4. Create the toggle switch for plan interval selection
5. Assemble the pricing grid with equal-height cards and aligned action buttons
6. Implement the footer with multi-column link grid and responsive collapse behavior
7. Add the hero section with full-bleed imagery and centered overlay content

### Accessibility
- Ensure all text over photography meets WCAG contrast minimums; use text shadows or scrims if needed
- Maintain visible focus indicators on pill buttons with offset rings or inner shadows
- Provide aria-labels for icon-only buttons like the Play button in hero sections
- Use semantic heading hierarchy within pricing cards (plan name as h3, not h2, when nested under page h1)
- Ensure the Monthly/Yearly toggle communicates state to screen readers via aria-pressed or role="switch"

## Scope note

This guide covers the invideo.io homepage and pricing page surfaces visible in the supplied images, including the hero, pricing grid, and footer components. Navigation dropdowns, mobile menu states, checkout flows, and account dashboard interfaces are not represented. Motion behavior, hover transitions, and loading states are not documented from still images. Measurements are exact values from the retained interface records.
