# How app.kuse.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/app.kuse.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Sign-in modal with warm gradient background, serif headline 'Chaos in, Genius out', and mauve-toned form fields and primary button](https://pin.fontofweb.com/1066?format=jpg)](https://design.withfudge.com/share/pin-1066)

[Sign-in modal with warm gradient background, serif headline 'Chaos in, Genius out', and mauve-toned form fields and primary button](https://design.withfudge.com/share/pin-1066)

[![Three-step onboarding explainer with white cards on light gray, serif section title, and dashed connector arrows between upload, prompt, and results panels](https://pin.fontofweb.com/1065?format=jpg)](https://design.withfudge.com/share/pin-1065)

[Three-step onboarding explainer with white cards on light gray, serif section title, and dashed connector arrows between upload, prompt, and results panels](https://design.withfudge.com/share/pin-1065)

[![Pricing comparison table with dark mauve header bar, alternating row backgrounds, and amber accent for Standard plan values](https://pin.fontofweb.com/1064?format=jpg)](https://design.withfudge.com/share/pin-1064)

[Pricing comparison table with dark mauve header bar, alternating row backgrounds, and amber accent for Standard plan values](https://design.withfudge.com/share/pin-1064)

[![Credit pack cards with cream backgrounds, large serif display title 'Power Up Your Credits', and dark mauve action buttons with percentage badges](https://pin.fontofweb.com/1063?format=jpg)](https://design.withfudge.com/share/pin-1063)

[Credit pack cards with cream backgrounds, large serif display title 'Power Up Your Credits', and dark mauve action buttons with percentage badges](https://design.withfudge.com/share/pin-1063)

## Overview

Kuse AI presents a distinctive visual identity that bridges editorial sophistication with SaaS utility. The interface centers on a warm, muted palette dominated by mauve-browns and cream tones, creating an approachable yet premium atmosphere distinct from typical cool-toned AI tools. The design language relies on strong typographic contrast: elegant italic serifs for display and emotional headlines, paired with a clean geometric sans-serif for all functional text, labels, and data. This dual-font system establishes clear hierarchy while maintaining readability across dense information surfaces like pricing tables and onboarding flows. The overall impression is of a thoughtful, human-centered workspace that treats AI interaction as a creative process rather than a purely technical one.

## Colors

The color system builds warmth and restraint through a limited palette of mauve, cream, and amber tones. Dark mauve serves as the primary action and emphasis color, while lighter warm neutrals create layered surfaces without stark contrast. Amber appears selectively as an accent for highlighting value propositions and plan comparisons.

| token | value | use |
|---|---|---|
| ink | `#3D2B2B` | Primary text, headings, strong emphasis |
| ink-muted | `#6B4F4F` | Secondary text, descriptions, placeholders |
| canvas | `#F5EDE6` | Page backgrounds, modal backdrops, table alternating rows |
| surface | `#FFFFFF` | Pure white for input fields, elevated cards |
| surface-warm | `#F9F5F0` | Card backgrounds, pricing panels, content containers |
| accent-mauve | `#8B6B6B` | Muted UI elements, secondary buttons, decorative accents |
| accent-mauve-deep | `#6B4545` | Table headers, primary buttons, strong emphasis bars |
| action-primary | `#6B4545` | CTA buttons, primary actions, key interactive elements |
| action-primary-text | `#FFFFFF` | Text on primary action surfaces |
| accent-amber | `#E8A838` | Highlighted values, recommended plan indicators, percentage badges |
| accent-amber-muted | `#F5D9A0` | Badge backgrounds, subtle value highlights |
| border-subtle | `#E0D5CD` | Input borders, card outlines, dividers |
| border-hairline | `#D4C8BE` | Separator lines, rule dividers in forms |

The palette operates in a predominantly light mode with warm undertones. Dark mauve functions as the near-black anchor rather than pure black, softening the overall contrast. Amber accents draw attention to specific data points—particularly in pricing contexts where Standard plan values receive golden highlighting against neutral rows. The cream-to-white gradient in modal contexts creates atmospheric depth without departing from the warm system.

## Typography

The typographic system pairs two families with sharply defined roles. Instrument Serif-Italic handles all display and emotional expression, while Poppins manages every functional text need across weights from Regular to Semibold.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Instrument Serif-Italic | 3rem | 400 | 1.1 | -0.01em | Modal headlines, major page titles |
| section-display | Instrument Serif-Italic | 2.5rem | 400 | 1.15 | -0.01em | Section headers, feature titles |
| heading-large | Poppins | 1.5rem | 600 | 1.2 | 0 | Card titles, prominent labels |
| heading-medium | Poppins | 1.25rem | 600 | 1.3 | 0 | Button text, table headers, subsections |
| body | Poppins | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, form labels |
| body-small | Poppins | 0.875rem | 400 | 1.5 | 0 | Captions, helper text, metadata |
| label | Poppins | 0.75rem | 500 | 1.4 | 0.02em | Badges, tags, fine print |
| navigation | Poppins | 0.875rem | 500 | 1.4 | 0 | Nav items, tabs, breadcrumbs |

Instrument Serif-Italic, designed by Rodrigo Fuenzalida and distributed by Frag Type, appears exclusively for display purposes. Its high contrast and flowing curves provide editorial personality against Poppins's geometric neutrality. Poppins, designed by Jonny Pinhorn for the Indian Type Foundry, serves across Regular, Medium, and Semibold weights for all interface text. Verify licensing for these families before production use.

The scale uses 4px as the base step, with display sizes at 48px and 40px, heading sizes at 24px and 20px, body at 16px, and descending through 14px and 12px for supporting text. Line heights remain tight for display (1.1–1.15) and generous for body (1.5) to maintain readability in potentially dense workspace interfaces.

## Layout

The interface employs a centered, contained layout with generous whitespace and clear content grouping. Modal dialogs appear centered with substantial padding and soft gradient backgrounds that fade from warm cream to near-white. Content pages use full-width sections with internal max-width constraints, typically three-column grids for feature explainers and pricing cards.

Spacing follows a 4px base unit with semantic tokens: xs (8px), sm (16px), md (24px), lg (32px), xl (48px), and section (64px). Cards and panels use lg padding internally, while section spacing separates major page regions. The onboarding explainer demonstrates a three-column equal grid with lg gaps between cards and xl spacing above the section title.

Border radii distinguish component types: cards and modals receive 16px rounding for a friendly, approachable feel; buttons and inputs use 8px for functional crispness; small badges use 4px. This stepped radius system creates subtle hierarchy without visual noise.

Tables for pricing data use full-width layouts with header bars spanning the content area. Row density is moderate with comfortable vertical padding, and alternating row backgrounds at the canvas color reduce reading fatigue across many data points.

## Visual language

The visual language emphasizes clarity through warmth—avoiding the clinical coolness common to AI tools. Rounded rectangles dominate the shape vocabulary, with no sharp corners on primary containers. Shadows are minimal or absent; depth comes from color layering and subtle borders rather than elevation effects.

Photography and illustration appear in functional contexts: file type icons in upload areas, dashboard mockups in results previews. These remain contained within card boundaries rather than bleeding to edges. The overall composition favors horizontal balance and centered alignment, with text and action elements symmetrically arranged.

Decorative elements include dashed connector arrows between process steps, small circular step indicators with numbers, and percentage badges with rounded pill shapes. These micro-elements use the accent-amber and accent-mauve tones to create visual interest without competing with primary content.

The modal sign-in surface demonstrates atmospheric treatment: a full-viewport warm gradient that shifts from deeper cream at top to lighter tones below, with the modal card floating centrally. This creates a moment of focus and slight theatricality appropriate for authentication entry points.

## Components

### Sign-in Modal

- **Anatomy**: Centered card containing brand lockup (logo mark + "kuse" wordmark), headline, social login button, divider with "or" text, email and password fields with labels, primary action button, secondary signup prompt, and legal links footer.
- **Surface**: Card background is surface-warm; page backdrop is a vertical gradient from deeper canvas to near-white.
- **Typography**: Headline uses hero-display in accent-mauve-deep; body text and labels use body and body-small in ink-muted; links use body-small with underline.
- **Shape**: Card has rounded.modal corners; inputs and button have rounded.input and rounded.button respectively.
- **Spacing**: Generous internal padding (lg to xl); section spacing between headline and form; sm between stacked fields.
- **Composition**: Vertically stacked, centered alignment; full-width button; inline "Forgot password?" link right-aligned to password label.

### Onboarding Explainer Card

- **Anatomy**: Three equal cards in horizontal row, each containing illustration area, title, description, and step number indicator below.
- **Surface**: Cards use surface-warm with no visible border; page background is light gray (slightly cooler than canvas).
- **Typography**: Section title uses section-display centered above cards; card titles use heading-medium in ink; descriptions use body-small in ink-muted; step numbers use label in inverse on dark circles.
- **Shape**: Cards have rounded.card corners; step indicators are small filled circles.
- **Spacing**: xl above section title, lg between cards, md internal padding.
- **Composition**: Equal-width grid with lg gutters; dashed curved arrows connect cards indicating flow direction.
- **Variants**: Three steps shown—upload, create/prompt, results—with consistent structure varying only content and illustration.

### Pricing Comparison Table

- **Anatomy**: Full-width table with header bar, column headers for plan tiers, category header rows, and data rows with feature names and usage values.
- **Surface**: Header bar uses accent-mauve-deep with action-primary-text; category rows use canvas; data rows alternate between surface and canvas; highlighted values use accent-amber.
- **Typography**: Header bar uses heading-medium; category headers use heading-medium in ink-muted; data uses body and body-small; highlighted values use body with accent-amber color.
- **Shape**: Header bar has rounded.card top corners only; table body has no rounding.
- **Spacing**: Comfortable vertical padding in rows (sm to md); generous horizontal padding.
- **Composition**: Four columns—feature name, Free, Standard, Pro—with values right-aligned in their columns.

### Credit Pack Card

- **Anatomy**: Three cards in row, each containing pack name, credit amount with icon, percentage badge for bonus packs, price button, and footer disclaimer below all cards.
- **Surface**: Cards use surface-warm with subtle shadow; buttons use action-primary.
- **Typography**: Section title uses section-display in accent-mauve-deep; pack names use heading-large; credit amounts use heading-large in accent-mauve-deep; prices use heading-medium in action-primary-text; badges use label; disclaimer uses body-small in ink-muted.
- **Shape**: Cards have rounded.card; buttons have rounded.button and full-width within card; badges have rounded.badge.
- **Spacing**: lg internal padding; lg between cards; xl above section title; sm below cards for disclaimer.
- **Composition**: Equal three-column grid; centered content within each card; price button anchored to bottom of card for alignment across varying content heights.
- **Variants**: Starter, Popular, Value packs with increasing credit amounts and bonus percentages (0%, +20%, +40%).

## Responsive behavior

The three-column layouts for onboarding and pricing cards should collapse to single-column stacking on narrow viewports, maintaining internal card proportions. The sign-in modal should remain centered with reduced padding, potentially using near-full-width cards on mobile to maximize usable space.

Table layouts for pricing comparison should gain horizontal scroll or transform into stacked category sections on small screens, preserving the plan tier highlighting. Typography should scale down proportionally: hero-display to 2rem, section-display to 1.75rem on mobile, maintaining the serif/sans-serif relationship.

Touch targets for buttons and inputs should maintain minimum 44px height; the current button and input sizing already exceeds this. Spacing between stacked elements should increase slightly on mobile to prevent accidental taps.

## Practical implementation guidance

### Preserve
- The warm mauve-cream palette as a differentiating brand element; do not shift toward cooler grays or blues.
- The strict typographic division: Instrument Serif-Italic for display only, Poppins for everything functional.
- The generous border radii on cards and modals that create the approachable personality.
- The amber accent for value highlighting in pricing contexts.

### Avoid
- Using Instrument Serif-Italic for body text or UI labels; its italic form is designed for display sizes only.
- Pure black (#000000) for text; the ink token (#3D2B2B) maintains warmth while providing sufficient contrast.
- Heavy shadows or elevation effects; rely on color and border for separation.
- Adding additional accent colors beyond the established mauve and amber system.

### Recommended build order
1. Establish the color tokens and apply to base page backgrounds and text colors.
2. Implement the typography scale with both families loaded and verified.
3. Build the card component with surface-warm background and rounded corners.
4. Create the primary button style with action-primary background.
5. Implement the sign-in modal as the first complete composition.
6. Extend to the three-column grid layouts for onboarding and pricing.
7. Add the pricing table with alternating row treatments and amber value highlighting.

### Accessibility
- Ensure the mauve action-primary (#6B4545) on white meets WCAG AA contrast ratios; test specifically for the button text combination.
- The amber accent (#E8A838) on light backgrounds may fail contrast for small text; reserve it for large numbers or non-essential highlighting only.
- Instrument Serif-Italic at display sizes should remain readable; avoid using it below 1.5rem.
- Maintain visible focus indicators on all interactive elements, using the accent-mauve or a complementary outline style.

## Scope note

This guide covers the sign-in, onboarding, and pricing surfaces visible in the supplied images. Navigation, dashboard workspace, settings, and mobile-specific layouts are not represented. Motion, loading states, and form validation styling are not documented. Measurements are practical adaptation targets.
