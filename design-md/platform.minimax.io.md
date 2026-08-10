# How platform.minimax.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/platform.minimax.io-design)

Last updated: 2026-08-10

## Captured pages

[![Hero banner with coral-red 3D illustration, Token Plan title, and feature pills on a vibrant gradient background](https://pin.fontofweb.com/8274?format=jpg)](https://design.withfudge.com/share/pin-8274)

[Hero banner with coral-red 3D illustration, Token Plan title, and feature pills on a vibrant gradient background](https://design.withfudge.com/share/pin-8274)

[![Six pricing cards in two rows showing Starter through Ultra tiers with black Purchase buttons and coral accent borders](https://pin.fontofweb.com/8275?format=jpg)](https://design.withfudge.com/share/pin-8275)

[Six pricing cards in two rows showing Starter through Ultra tiers with black Purchase buttons and coral accent borders](https://design.withfudge.com/share/pin-8275)

[![Coding tools integration section with MCP Tools cards and FAQ accordion on light gray background](https://pin.fontofweb.com/8277?format=jpg)](https://design.withfudge.com/share/pin-8277)

[Coding tools integration section with MCP Tools cards and FAQ accordion on light gray background](https://design.withfudge.com/share/pin-8277)

[![Invite & Earn promotional banner with coral-red background, 3D gift illustration, and white Start Invite button](https://pin.fontofweb.com/8276?format=jpg)](https://design.withfudge.com/share/pin-8276)

[Invite & Earn promotional banner with coral-red background, 3D gift illustration, and white Start Invite button](https://design.withfudge.com/share/pin-8276)

## Overview

The MiniMax API Platform presents a developer-centric subscription experience built around high-contrast pricing tiers and energetic coral-red hero moments. The visual system balances technical credibility with approachable warmth: dense information architecture sits within generously rounded cards, while bold typographic hierarchy guides users through complex plan comparisons. The interface alternates between clean white surfaces and vibrant promotional zones, creating rhythm across long scrolling pages. Every element serves the core task of plan selection—pricing cards dominate the viewport, feature lists are scannable, and calls-to-action remain persistently visible. The overall impression is of a modern infrastructure product that respects developer time while maintaining brand personality through its warm accent palette and dimensional illustrations.

## Colors

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, primary button fills, header backgrounds |
| ink-secondary | #18181B | Secondary headings, card titles |
| ink-tertiary | #45515E | Tertiary text, subtle labels |
| muted | #6F7988 | Descriptions, helper text, disabled states |
| canvas | #FFFFFF | Page background, card surfaces, button text on dark |
| surface | #F7F8FA | Section backgrounds, alternating page bands |
| surface-elevated | #FFFFFF | Card backgrounds with shadow |
| border | #E4E7EC | Card borders, dividers, subtle separators |
| border-strong | #181E25 | Active tab indicators, focused borders |
| coral | #FF4E39 | Hero banners, promotional accents, highlighted card borders |
| coral-light | #FFE4E0 | Soft coral backgrounds, badge fills |
| coral-deep | #E92920 | Urgent accents, error states, deep promotional tones |
| accent-warm | #FF5038 | Gradient endpoints, hover states, illustration accents |

The color system operates in three modes. The default mode pairs white canvas with black ink for maximum readability on dense information surfaces. A promotional mode inverts this relationship on hero banners, placing white text over coral-red backgrounds with semi-transparent white pills for feature highlights. A third mode appears on highlighted pricing cards, where coral borders signal recommended or fastest tiers against the neutral card surface. The coral family is reserved exclusively for moments of emphasis—never for body text—ensuring that promotional energy does not fatigue readers during plan comparison.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Outfit | 4.25rem | 500 | 1.18 | normal | Hero banner titles, page headlines |
| section-display | Outfit | 1.5rem | 700 | 1.5 | 0.04em | Section headings, card titles, tier names |
| pricing-amount | Mi Sans | 3rem | 450 | 1.15 | normal | Dollar amounts, large numerals |
| body | Mi Sans | 0.875rem | 400 | 1.5 | normal | Default body text, descriptions, lists |
| body-large | Mi Sans | 1rem | 400 | 1.5 | normal | Button labels, emphasized body |
| label | Mi Sans | 0.75rem | 600 | 1.5 | normal | Badges, tags, small caps labels |
| navigation | Mi Sans | 0.875rem | 400 | 1.5 | 0.02em | Header links, tab navigation |

The type system pairs two families with distinct roles. Outfit serves display purposes with its geometric construction and open apertures, lending a contemporary technical voice to headlines and pricing tier names. Mi Sans handles all interface text with its broad weight range and compact proportions, keeping dense feature lists readable at small sizes. Weights below 400 appear in auxiliary contexts like captions, while 450 and 500 anchor pricing numerals and button labels. The 700 weight in Outfit creates authoritative section headers without resorting to heavier black weights. Mi Sans is provided by Hanyi Fonts. Outfit was designed by Rodrigo Fuenzalida and is available from Frag Type. Verify licensing for these families before production use.

## Layout

The page follows a centered single-column model with contained width bands. The maximum content width is 80rem, creating generous margins on wide viewports. Sections stack vertically with 5rem vertical rhythm, alternating between white canvas and light gray surface backgrounds to create implicit grouping.

The header occupies a fixed position with a black background, containing the MiniMax logotype left-aligned and navigation links right-aligned. A secondary tab bar sits below the header for plan category switching, using minimal height with text-only tabs and an active underline indicator.

The hero banner breaks the contained width, extending full-bleed with rounded corners inset from the viewport edges. Inside, content centers with a three-column feature pill layout below the headline. Two pill-shaped buttons—one filled white, one outlined white—offer primary and secondary actions.

Pricing cards arrange in responsive grids. The primary tier display uses three columns for high-speed plans, with a secondary row of three standard plans below. Cards maintain consistent internal padding of 2rem and external gaps of 1.5rem. Highlighted cards receive increased border weight and coral coloring, with corner badges floating above the card top edge.

Below pricing, integration sections use horizontal scrolling rows for tool logos, followed by two-column grids for feature cards with icon, title, description, and link pattern. FAQ sections split into a persistent left column with section title and contact actions, while the right column contains an accordion list with arrow indicators.

## Visual language

The visual language combines dimensional illustration with restrained interface geometry. Hero banners feature 3D-rendered objects—coins, gift boxes, percentage badges, code brackets—floating in coral-red space with soft shadows and warm gradients. These illustrations use a consistent warm palette of coral, peach, and cream, avoiding cool tones that would clash with the brand accent.

Cards are the fundamental container unit, appearing with 2rem corner radius and subtle 1px borders. The radius softens the technical density of pricing tables without becoming playful. Shadows are minimal and directional: a soft drop shadow appears on elevated cards, while promotional banners use inner glow effects for depth.

Iconography follows a line-weight system matching the 1.5px stroke of interface borders. Feature icons sit in rounded square containers with light backgrounds, creating target areas for scanning. Checkmarks in feature lists use the same stroke weight, maintaining visual consistency across list items.

The promotional banner pattern repeats at multiple scales: a full hero version with illustration, a compact inline version for persistent messaging, and a top-bar dismissible variant. Each maintains the coral background, white text, and pill-shaped action button, ensuring users recognize promotional content regardless of position.

## Components

### Pricing card

Anatomy: Card container with optional corner badge, tier name header, tip text, price block, purchase button, and feature list.

Surface and text color: White background with black text default; coral border and badge for highlighted variants. Muted gray for tip text and billing period.

Typography: Tier name uses section-display at 1.5rem. Price amount uses pricing-amount at 3rem with dollar sign at matching size. Feature list uses body at 0.875rem with checkmark prefixes.

Shape and border: 2rem radius with 1px border default, 2px coral border for highlighted variant. Corner badges use pill shape with black or coral background.

Spacing: 2rem internal padding. Price block separated from button by 1.5rem. Feature list items stack with 0.75rem vertical gap.

Composition: Vertical stack with left-aligned content. Button spans full card width. Badge absolutely positioned at top edge, offset upward by half its height.

Variants: Default (gray border), highlighted (coral border with "Fastest & Best" or "Top Pick" badge), compact (reduced padding for secondary tiers).

### Button

Anatomy: Text label with optional icon, contained in rounded pill.

Surface and text color: Primary uses black fill with white text. Secondary uses white fill with black text and 2px black border. Promotional hero uses white fill with black text on coral backgrounds.

Typography: body-large at 1rem, weight 500.

Shape and border: Full pill radius (9999px). Primary has no border; secondary has 2px solid border.

Spacing: 0.5rem vertical padding, 1.5rem horizontal padding for primary. Secondary uses 0 0.9375rem horizontal padding.

### Hero banner

Anatomy: Full-width container with background illustration, centered headline, subtitle, action button pair, and three feature pills.

Surface and text color: Coral gradient background with white text. Feature pills use semi-transparent white backgrounds.

Typography: Headline uses hero-display at 4.25rem. Subtitle uses body-large in white. Feature pills use label at 0.75rem.

Shape and border: 1.5rem radius inset from viewport edges. No external border.

Spacing: 2.5rem vertical padding, 5rem horizontal padding. Feature pills arranged in horizontal row with 1.5rem gaps.

### Feature card (MCP Tools)

Anatomy: Icon container, numeric prefix, title, description, and read-more link.

Surface and text color: White or light gray background. Black title, muted description, black link with arrow.

Typography: Title uses body-large weight 500. Description uses body. Link uses body with arrow icon.

Shape and border: Icon container uses rounded square with light background. Card has no visible border in grid context.

Spacing: Icon sized to 3rem container. 1rem gap between icon and text block.

### FAQ accordion

Anatomy: Question text with right-aligned arrow indicator, expandable answer area.

Surface and text color: White background with black question text. Arrow uses muted color.

Typography: Question uses body-large weight 500. Answer uses body.

Shape and border: Bottom border only, 1px solid border color. No side or top borders.

Spacing: 1.25rem vertical padding per item. Arrow icon at right edge.

### Navigation tab

Anatomy: Text label with active underline indicator.

Surface and text color: Black text default, black active underline. Inverted white text on black header backgrounds.

Typography: navigation at 0.875rem.

Shape and border: 2px height underline on active state, positioned below text.

Spacing: Horizontal gap of 2rem between tabs. Vertical padding of 0.75rem.

## Responsive behavior

The pricing grid should collapse from three columns to two, then to a single stacked column on narrow viewports. Card internal padding reduces from 2rem to 1.5rem at the smallest breakpoint. Hero banner headline scales down from 4.25rem to 2.5rem to prevent overflow.

Feature pills in the hero should wrap to two rows, then stack vertically on mobile. The three-column feature highlight row becomes a single column with increased vertical spacing.

Navigation tabs should scroll horizontally when space is constrained, maintaining touch targets of at least 44px height. The header should remain fixed with reduced height on mobile, condensing vertical padding.

FAQ accordion items should expand to full width, eliminating the two-column layout. The persistent left column with contact actions should move above the accordion list.

## Practical implementation guidance

### Preserve
- The exact coral-red hue (#FF4E39) as the singular brand accent; it appears in hero banners, highlighted card borders, and promotional badges consistently.
- The Outfit and Mi Sans pairing: Outfit for display headlines, Mi Sans for all interface text. The weight 450 for Mi Sans is essential for pricing numerals.
- Full-pill button shapes with generous horizontal padding; this creates the friendly yet authoritative action style.
- The 2rem card radius on pricing cards; smaller radii feel cramped, larger feel informal.
- The alternating section background pattern (white, gray, white) for long-page rhythm.

### Avoid
- Using coral for body text or extended reading passages; it fatigues and reduces legibility.
- Adding borders to hero banners; the illustration and gradient provide sufficient containment.
- Mixing additional border radii beyond the defined set; the system relies on consistency between cards, buttons, and pills.
- Using weights below 400 for text smaller than 0.875rem; the platform requires high information density that depends on minimum contrast.
- Placing promotional banners adjacent to each other without neutral sections between; this dilutes their impact.

### Recommended build order
1. Establish the type scale with Outfit and Mi Sans loaded, verifying the 450 weight renders correctly for pricing.
2. Implement the color tokens, ensuring coral variants pass contrast checks on both white and black backgrounds.
3. Build the pricing card component with all three variants (default, highlighted, compact) and test grid behavior.
4. Create the hero banner with responsive type scaling and feature pill layout.
5. Add the header with fixed positioning and tab navigation.
6. Implement remaining sections: tool integrations, MCP feature cards, FAQ accordion.
7. Apply final spacing tokens and verify vertical rhythm across the full page.

### Accessibility
- Ensure pricing card borders meet 3:1 contrast ratios against adjacent backgrounds; the coral highlight border should be distinguishable for color-blind users through its 2px weight increase.
- Provide visible focus indicators on pill buttons using the border-strong color with 2px offset.
- Maintain logical tab order through pricing cards: tier name, price, button, then feature list.
- Use aria-expanded on FAQ accordion items with synchronized arrow rotation.
- Ensure the hero banner's white-on-coral text meets 4.5:1 contrast; the subtitle may need slight darkening if the coral background lightens.

## Scope note

This guide covers the Token Plan subscription page including hero banners, pricing tiers, tool integrations, MCP feature cards, and FAQ accordions. The Account dashboard, documentation pages, and checkout flow are not represented. Motion behavior, mobile-specific navigation patterns, and dark mode variants were not visible in the source material. Measurements are exact values from the retained interface record.
