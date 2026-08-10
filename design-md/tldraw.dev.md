# How tldraw.dev is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tldraw.dev-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing page with three-tier card layout showing trial, startup, and business plans with blue and black action buttons on a white background with subtle dot pattern.](https://pin.fontofweb.com/2510?format=jpg)](https://design.withfudge.com/share/pin-2510)

[Pricing page with three-tier card layout showing trial, startup, and business plans with blue and black action buttons on a white background with subtle dot pattern.](https://design.withfudge.com/share/pin-2510)

[![Homepage hero section with bold '$5M canvas' headline, code-style CTA button, and dark footer with multi-column navigation links and social icons.](https://pin.fontofweb.com/2509?format=jpg)](https://design.withfudge.com/share/pin-2509)

[Homepage hero section with bold '$5M canvas' headline, code-style CTA button, and dark footer with multi-column navigation links and social icons.](https://design.withfudge.com/share/pin-2509)

[![Case studies section with three stacked cards featuring ClickUp, Padlet, and Mobbin logos with bordered thumbnails and arrow links.](https://pin.fontofweb.com/2508?format=jpg)](https://design.withfudge.com/share/pin-2508)

[Case studies section with three stacked cards featuring ClickUp, Padlet, and Mobbin logos with bordered thumbnails and arrow links.](https://design.withfudge.com/share/pin-2508)

[![Starter kits section with multiplayer demo showing colorful cursor labels and collaborative drawing interface with descriptive text panel.](https://pin.fontofweb.com/2507?format=jpg)](https://design.withfudge.com/share/pin-2507)

[Starter kits section with multiplayer demo showing colorful cursor labels and collaborative drawing interface with descriptive text panel.](https://design.withfudge.com/share/pin-2507)

## Overview

The tldraw.dev site presents a developer-focused product experience for the tldraw SDK, an infinite canvas library for React applications. The visual system balances stark editorial confidence with playful product demonstrations. The design relies on high-contrast black typography against white space, punctuated by colorful interactive demos that showcase the SDK's collaborative drawing capabilities. The overall impression is technical yet approachable—precision engineering wrapped in a friendly, creative shell.

The site structure moves from bold hero statements through social proof, detailed feature explanations, and clear pricing tiers. Navigation remains minimal and unobtrusive, allowing the product visuals to dominate. The footer anchors the experience with dense but well-organized link columns on a dark surface. Throughout, the design maintains a consistent geometric language: sharp corners on cards, precise 1px borders, and a restrained palette that lets the product's native colors breathe in demo contexts.

## Colors

The color system is intentionally minimal, built on a stark black-and-white foundation with a single blue accent for primary actions. Product demos introduce their own vibrant colors—pinks, teals, greens, purples—but these belong to the tldraw canvas itself, not the site's interface tokens.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, borders, primary button fills, logo |
| canvas | #ffffff | Page backgrounds, card surfaces, text on dark surfaces |
| muted-ink | #555555 | Secondary text, descriptions, footer category labels |
| action-primary | #3b82f6 | Trial and secondary CTA buttons, promotional highlights |
| surface-inverse | #111111 | Footer background, dark section surfaces |

The light mode dominates the entire experience. Dark surfaces appear only in the footer and select inverse sections. The blue action color appears exclusively in conversion-oriented elements—the free trial button on pricing, the code-style CTA on the hero—creating a clear hierarchy between informational and transactional interactions. Product imagery and demos carry their own saturated palette that contrasts sharply against the neutral interface, making the canvas feel alive against the controlled surroundings.

## Typography

The type system uses Geist for all interface text and Geist Mono for code snippets and technical labels. Geist is a contemporary sans-serif with tight apertures and confident weight transitions, designed by Basement Studio in collaboration with Vercel. It delivers a technical, modern voice appropriate for developer tooling.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 3rem | 700 | 1.1 | -0.02em | Page headlines, hero statements |
| section-display | Geist | 2rem | 700 | 1.2 | -0.01em | Section headings, pricing titles |
| body | Geist | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions |
| body-small | Geist | 0.875rem | 400 | 1.5 | 0em | Card descriptions, secondary content |
| label | Geist | 0.875rem | 600 | 1.25 | 0em | Button text, card headers, feature labels |
| code | Geist Mono | 0.875rem | 400 | 1.5 | 0em | Terminal commands, code blocks |
| navigation | Geist | 0.875rem | 400 | 1.25 | 0em | Header and footer links |
| legal-copy | Geist | 0.75rem | 400 | 1.5 | 0em | Copyright, fine print |

The hero display weight is Black (700), creating immediate visual impact for statements like "The $5M canvas" and "Build now, pay later." Body text remains in Regular weight for extended reading comfort. The monospace family appears sparingly, reserved for authentic developer artifacts like the `npm create tldraw` command. Verify licensing for these families before production use.

## Layout

The layout follows a centered, content-constrained model with generous vertical breathing room. Sections stack vertically with substantial gaps, creating a scroll-driven narrative that paces information deliberately.

The maximum content width appears to be approximately 1200px, centered with automatic margins. Within this constraint, different sections employ varying internal structures: the hero centers text and CTAs; case studies use a two-column card layout with fixed-aspect thumbnails; pricing distributes three equal-width cards across the full width; the footer organizes links into four equal columns.

Horizontal padding scales with viewport width, maintaining consistent side margins that prevent content from touching edges. Section vertical spacing uses 6rem as a baseline, with tighter 3rem gaps between related subsections. Card internal padding holds at 1.5rem, creating comfortable reading environments without excessive whitespace.

The grid system appears implicit rather than explicit—cards align to a common baseline, but the layout favors flexible box patterns over rigid column grids. This suits the content's variable nature, from dense feature lists to expansive product screenshots.

## Visual language

The visual language communicates technical sophistication through restraint and precision. Every element earns its place: no decorative gradients, no superfluous shadows, no ornamental icons beyond functional UI marks.

Borders function as the primary decorative device. Cards, thumbnails, and section dividers all employ 1px solid black lines with consistent 0.5rem corner rounding. This creates a subtle softness that prevents the geometry from feeling harsh while maintaining clarity. The border treatment unifies disparate components into a coherent family.

Product imagery breaks the monochrome system intentionally. The multiplayer demo shows colorful cursor labels in pink, teal, green, and purple against a light gray canvas. Case study thumbnails contain full-color partner logos. These saturated moments serve as proof of the product's capabilities rather than decorative indulgence.

The dot pattern visible in the pricing page background introduces subtle texture without competing for attention. It suggests the infinite canvas concept metaphorically—a field of points extending beyond the viewport.

Iconography remains minimal and functional: small arrows indicate external links, copy icons accompany code commands, social platform marks appear in the footer. All icons share the same stroke weight and geometric simplicity as the type.

## Components

### Primary Action Button

The primary action button uses a solid black fill with white text. It appears in the footer-adjacent CTA and pricing tiers for commercial plans.

- **Anatomy**: Text label centered within a rectangular container
- **Surface**: `backgroundColor: {colors.ink}`, `color: {colors.canvas}`
- **Typography**: `{typography.label}`
- **Shape**: `borderRadius: {rounded.button}`, no border
- **Spacing**: `padding: 0.75rem 1.5rem`
- **Composition**: Full-width within card constraints, or auto-width with generous horizontal padding
- **Variants**: Blue fill variant for trial and promotional actions

### Ghost Action Button

The ghost button provides a lower-emphasis alternative with transparent fill and black border.

- **Anatomy**: Text label with right-pointing arrow icon
- **Surface**: Transparent background, 1px solid black border
- **Typography**: `{typography.label}`
- **Shape**: `borderRadius: {rounded.button}`
- **Spacing**: `padding: 0.75rem 1.5rem`
- **Composition**: Inline with other buttons, or standalone for secondary paths

### Pricing Card

Three pricing cards appear side by side, each representing a tier from free trial through enterprise.

- **Anatomy**: Header row with tier name and price, feature list with bullet points, full-width CTA button at bottom
- **Surface**: White background, 1px black border, subtle shadow offset creating a layered depth effect
- **Typography**: Tier name uses `{typography.label}`, price uses `{typography.section-display}`, features use `{typography.body-small}`
- **Shape**: `borderRadius: {rounded.card}`
- **Spacing**: `padding: {spacing.card-padding}`
- **Composition**: Equal width, aligned tops, consistent internal spacing
- **Variants**: Trial card uses blue CTA; paid tiers use black CTA

### Case Study Card

Horizontal cards showcase customer implementations with logo thumbnails and descriptive text.

- **Anatomy**: Left thumbnail with partner logo, right column with headline, description, and arrow link
- **Surface**: White background, 1px black border, thumbnail has its own internal border
- **Typography**: Headline uses `{typography.label}`, description uses `{typography.body-small}`, link uses `{typography.body-small}` with arrow
- **Shape**: `borderRadius: {rounded.card}`
- **Spacing**: `padding: {spacing.card-padding}`, gap between thumbnail and text approximately 1.5rem
- **Composition**: Thumbnail fixed at roughly 40% width, text column flexible

### Starter Kit Demo Panel

Overlapping panels present technical starter kits with live canvas previews.

- **Anatomy**: Text panel with icon, headline, description, and CTA; canvas panel showing interactive demo behind and partially overlapping
- **Surface**: White panel with black border over light gray canvas background
- **Typography**: Headline uses `{typography.label}`, description uses `{typography.body-small}`
- **Shape**: `borderRadius: {rounded.panel}`
- **Spacing**: `padding: {spacing.card-padding}`
- **Composition**: Asymmetric overlap with canvas extending beyond panel bounds, creating depth

### Footer

The footer spans full width with dark background and multi-column link organization.

- **Anatomy**: Logo and tagline left-aligned, four link columns (Product, Developers, Community, Company), social icons, copyright
- **Surface**: `backgroundColor: {colors.surface-inverse}`, `color: {colors.canvas}`
- **Typography**: Category headers use `{typography.label}`, links use `{typography.navigation}`, copyright uses `{typography.legal-copy}`
- **Shape**: No border radius, full-bleed dark band
- **Spacing**: Generous internal padding, column gaps distribute evenly
- **Composition**: Asymmetric left column for branding, equal right columns for navigation

## Responsive behavior

The design appears optimized for desktop viewing with its multi-column layouts and generous spacing. At narrower viewports, several adaptations should preserve usability:

The three-column pricing grid should stack vertically, maintaining card width at approximately 100% with consistent horizontal margins. The case study cards should transition to a single column, with thumbnails stacking above text content rather than beside it. Footer columns should collapse to two-column then single-column arrangements, preserving link groupings.

The hero section's centered text block should maintain readable line lengths by adjusting horizontal padding rather than reducing type size dramatically. The code-style CTA button may require horizontal scrolling or line breaking for long commands on very narrow screens.

The starter kit demo's overlapping composition presents the greatest responsive challenge. The text panel should stack above the canvas on narrow screens, with the canvas scaling to maintain aspect ratio. The overlap effect can be replaced with simple vertical stacking when viewport width no longer supports the layered presentation.

Touch targets should maintain minimum 44px height for all interactive elements. The current button padding exceeds this threshold comfortably.

## Practical implementation guidance

### Preserve
- The stark black-and-white foundation with single blue accent
- Consistent 1px borders and 0.5rem corner rounding across card components
- Geist family's tight tracking on display sizes for editorial impact
- Generous vertical section spacing that creates breathing room between content blocks
- Colorful product demos as authentic proof points, not decorative elements
- The layered card shadow effect visible in pricing tiers, creating subtle depth through offset borders

### Avoid
- Introducing additional accent colors beyond the established blue for interface actions
- Removing borders in favor of flat shadows—the border is a defining visual characteristic
- Using the product demo colors (pink, teal, green, purple) for UI elements outside canvas contexts
- Tightening section spacing, which would compress the narrative pacing
- Generic placeholder imagery in case study cards; the partner logos are integral to credibility

### Recommended Build Order
1. Establish the typographic foundation with Geist at all defined sizes and weights
2. Implement the color tokens and verify contrast ratios meet WCAG AA standards
3. Build the card component with its border, radius, and padding as the primary content container
4. Create the three button variants (primary black, secondary blue, ghost outlined)
5. Assemble the pricing page as a complete template, verifying grid behavior
6. Add the footer with its inverse color scheme and columnar link structure
7. Integrate product demos with their native color palettes, ensuring they remain visually subordinate to the UI frame

### Accessibility
- Maintain 4.5:1 minimum contrast for all body text; the black-on-white pairing exceeds this substantially
- Ensure the blue action color against white meets 3:1 for large text and UI components
- Provide visible focus indicators that respect the geometric border language, perhaps using outline offsets rather than filled rings
- Structure the footer navigation with proper heading hierarchy for screen reader wayfinding
- Include descriptive alt text for all product demo screenshots, capturing the collaborative features being illustrated
- Consider reduced motion preferences for any canvas animations, providing static fallbacks

## Scope note

This guide covers the tldraw.dev homepage and pricing page surfaces visible in the supplied images. Mobile breakpoints, interactive states, documentation pages, and the actual tldraw canvas editor interface are not represented. Measurements are practical adaptation targets derived from visual inspection. The product's native color palette within demo contexts is documented for accurate reproduction but should not be confused with the site's interface tokens.
