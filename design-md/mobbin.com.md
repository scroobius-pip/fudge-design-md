# How mobbin.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mobbin.com-design)

Last updated: 2026-08-10

## Captured pages

[![Sign-up page with split-screen layout showing dark left panel with centered form and vibrant mobile app screenshot collage on the right](https://pin.fontofweb.com/10087?format=jpg)](https://design.withfudge.com/share/pin-10087)

[Sign-up page with split-screen layout showing dark left panel with centered form and vibrant mobile app screenshot collage on the right](https://design.withfudge.com/share/pin-10087)

[![Pricing page hero with large display headline, toggle switch for billing period, and two-tier pricing cards on dark background](https://pin.fontofweb.com/6761?format=jpg)](https://design.withfudge.com/share/pin-6761)

[Pricing page hero with large display headline, toggle switch for billing period, and two-tier pricing cards on dark background](https://design.withfudge.com/share/pin-6761)

[![Detailed pricing comparison table with three columns showing Free, Pro, and Team plan features with checkmarks and limits](https://pin.fontofweb.com/6760?format=jpg)](https://design.withfudge.com/share/pin-6760)

[Detailed pricing comparison table with three columns showing Free, Pro, and Team plan features with checkmarks and limits](https://design.withfudge.com/share/pin-6760)

[![Light-themed feature section with three large rounded cards demonstrating Copy to Figma, Save to collections, and Leave comments workflows](https://pin.fontofweb.com/6581?format=jpg)](https://design.withfudge.com/share/pin-6581)

[Light-themed feature section with three large rounded cards demonstrating Copy to Figma, Save to collections, and Leave comments workflows](https://design.withfudge.com/share/pin-6581)

## Overview

Mobbin's design system operates on a dramatic dark-first philosophy that prioritizes immersive browsing of mobile interface screenshots. The visual language splits between deep, near-black surfaces for functional and conversion pages and clean white backgrounds for marketing storytelling. This dual-mode approach lets product imagery pop while maintaining typographic authority through a geometric sans-serif family. The system relies on extreme scale contrasts—hero display type reaching 80 pixels—against restrained body copy, creating clear information hierarchy without decorative embellishment. Interactive elements universally adopt pill shapes, from primary call-to-action buttons to input fields, establishing a soft, approachable rhythm against the sharp rectangular app screenshots that dominate the visual field. The overall impression is that of a premium tool for design professionals: confident, minimal, and relentlessly focused on showcasing third-party interface work.

## Colors

The color system is built around a near-binary contrast structure with a single vibrant accent.

| token | value | use |
|---|---|---|
| canvas | `#141414` | Primary dark page background, sign-up and pricing surfaces |
| canvas-light | `#FFFFFF` | Marketing section backgrounds, feature cards |
| surface | `#000000` | Elevated dark panels, pricing card backgrounds |
| surface-elevated | `#404040` | Input field backgrounds on dark surfaces |
| ink | `#FFFFFF` | Primary text on dark backgrounds, primary button fill |
| ink-primary | `#141414` | Primary text on light backgrounds |
| muted | `#707070` | Secondary text, disabled states, iconography |
| muted-light | `#ADADAD` | Tertiary text, legal copy, placeholder text |
| action | `#0066FF` | Primary accent, "Popular" badge, savings callouts |
| action-hover | `#0077FF` | Hover state for action elements |
| border-light | `#ADADAD` | Subtle borders on light surface elements |
| border-dark | `#404040` | Subtle borders on dark surface elements |

The dark mode dominates functional surfaces. The sign-up page uses `canvas` as its full-bleed background, while pricing cards sit on `surface` for subtle depth separation. The marketing homepage inverts this entirely, placing dark text on `canvas-light`. The action blue appears sparingly—only for the "Popular" plan badge and percentage savings text—making it highly salient when it does appear. No gradients are used in the interface; all depth comes from solid color layering and the single inset shadow treatment.

## Typography

Mobbin uses M Saans as its primary type family across all weights and sizes, achieving hierarchy through weight and scale rather than family mixing. The system also references Applesystem as a system-level fallback for certain UI contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | M Saans | 5rem | 652 | 1 | -0.01em | Pricing page hero, "Design like a Pro" |
| section-display | M Saans | 3.5rem | 652 | 1 | -0.01em | Homepage section headlines |
| heading-large | M Saans | 2.75rem | 652 | 1 | -0.01em | Sign-up page headline |
| heading-medium | M Saans | 2rem | 600 | 1.4 | 0em | Pricing tier names, feature section titles |
| body | M Saans | 1rem | 400 | 1.5 | 0em | Default paragraph text, form labels |
| body-emphasis | M Saans | 1rem | 456 | 1.5 | 0.009em | Button text, emphasized body copy |
| label | M Saans | 0.875rem | 600 | 1.429 | 0.014em | Form labels, navigation, badges |
| caption | M Saans | 0.875rem | 456 | 1.429 | 0.014em | Secondary descriptions, metadata |
| price-display | M Saans | 5rem | 652 | 1 | -0.01em | Dollar amounts in pricing cards |

The M Saans family, designed by Martin Vácha and distributed by Displaay Type Foundry Sro, provides an unusual weight range that includes 652 and 456—intermediate values between standard named weights. The system leverages these precisely: 652 for maximum impact display type, 600 for structural headings and interactive elements, 456 for secondary emphasis, and 400 for running text. Negative tracking on display sizes tightens the geometric forms, while positive tracking at small sizes aids legibility. Applesystem appears in the type stack for certain system-level UI elements at 14px weight 400, serving as a fallback for native interface components. Verify licensing for these families before production use.

## Layout

The layout system alternates between centered single-column flows and full-bleed split compositions. On the sign-up page, a fixed 50/50 split divides the viewport: the left half carries the form centered vertically and horizontally within its panel, while the right half displays a dense, angled collage of mobile screenshots that bleeds to the edges. This creates an asymmetric balance where the static form anchors against the dynamic imagery.

Content pages like pricing use a centered maximum-width container with generous vertical padding. The pricing hero stacks vertically: headline, subhead, billing toggle, savings callout, then the two-tier card layout. Cards sit side-by-side with equal width and internal vertical rhythm—price, period, button, then feature list. Below the cards, a three-column grid presents alternative paths (Enterprise, Student, Competitor research) with centered icons and compact text blocks.

The feature comparison table uses a sticky header pattern with four columns: feature category, Free, Pro, and Team. Row dividers are subtle, and the Pro column receives slight background emphasis to guide selection. Marketing sections on the homepage use a three-column card grid with equal-width panels, each containing a large screenshot area above centered text.

Spacing follows a clear escalation: 1rem within components, 1.5rem between related elements, 3rem between sections, and 5-6.5rem for major section breaks. Horizontal page margins are 1.5rem on mobile and expand to 6.5rem on desktop.

## Visual language

The visual language is defined by three core characteristics: pill-shaped everything, screenshot-forward imagery, and extreme contrast discipline.

All interactive elements—buttons, inputs, toggles, badges—use full pill rounding (9999px radius). This creates a friendly, approachable tone that softens the otherwise severe dark palette. Even the billing period toggle on the pricing page uses a pill container with a sliding pill indicator.

Photography and imagery consist entirely of mobile interface screenshots, presented at slight rotations in collages or flat in feature cards. These screenshots retain their original colors, creating vibrant accents against the monochrome UI. No decorative illustration or abstract graphics appear; the product content is the decoration.

The contrast system is absolute: white on near-black for functional surfaces, near-black on white for marketing. There are no mid-tone backgrounds, no subtle gradients, no decorative textures. The only visual complexity comes from the screenshot content itself and the single inset border shadow that defines input and button edges on dark surfaces.

Iconography is minimal and functional—checkmarks for feature lists, simple line icons for feature categories, brand logos for social proof. All icons inherit the muted or ink color depending on context.

## Components

### Primary button

- **Anatomy**: Text label centered within a pill-shaped container; may include leading icon with 0.5rem gap
- **Surface**: `ink` background with `canvas` text on dark surfaces; inverts to `canvas` background with `ink` text when placed on light backgrounds
- **Typography**: `body-emphasis` token, weight 600
- **Shape**: Full pill radius, padding 0.75rem vertical and 1rem horizontal
- **Spacing**: 0.5rem gap between icon and text when icon present
- **States**: Default shows solid fill; hover not visible in still images

### Secondary button

- **Anatomy**: Text label within pill-shaped container with subtle border
- **Surface**: Transparent background with `ink` text; `border-light` or `border-dark` for edge definition depending on context
- **Typography**: `body-emphasis` token
- **Shape**: Full pill radius, identical padding to primary
- **Use**: Alternative actions, "Get started" on non-preferred plans

### Input field

- **Anatomy**: Single-line text input with placeholder text
- **Surface**: `surface-elevated` background, `ink` text, inset shadow for edge definition
- **Typography**: `body` token for user input; `muted` for placeholder
- **Shape**: 1rem radius (16px), padding 0.75rem vertical and 1rem horizontal
- **Spacing**: Stacked with 1rem gap to adjacent inputs or buttons

### Pricing card

- **Anatomy**: Vertical stack containing plan name, badge (optional), description, price, period, button, feature list
- **Surface**: `surface` background, `card` radius (1.5rem), internal padding 1.5rem
- **Typography**: Plan name uses `heading-medium`; price uses `price-display` with adjacent `caption` for period; features use `body` with checkmark icons
- **Shape**: 1.5rem radius corners
- **Composition**: Equal-width cards in side-by-side layout with 1.5rem gap; preferred plan (Pro) receives no explicit border but implied emphasis through white button treatment

### Billing toggle

- **Anatomy**: Pill-shaped container with two options and sliding active indicator
- **Surface**: `surface-elevated` track with `ink` active pill
- **Typography**: `label` token for both options
- **Shape**: Full pill container with internal pill indicator
- **States**: "Yearly" selected by default with active pill positioned left; "Quarterly" option muted when inactive

### Feature comparison table

- **Anatomy**: Header row with plan names and prices; category headers; feature rows with value indicators
- **Surface**: Transparent rows with subtle horizontal dividers; Pro column receives slight background tint
- **Typography**: Category headers use `heading-medium`; feature names use `body-emphasis`; values use `body` or checkmark icons
- **Composition**: Four-column grid with sticky header; checkmarks centered in plan columns

### Feature showcase card

- **Anatomy**: Large screenshot area above centered title and description
- **Surface**: `canvas-light` background, `card` radius, generous internal padding
- **Typography**: Title uses `heading-medium`; description uses `body` in `muted` color
- **Shape**: 1.5rem radius with screenshot content filling upper portion
- **Composition**: Three equal cards in horizontal row with 1.5rem gap

## Responsive behavior

The design system maintains its core character across viewport sizes through proportional scaling and stack rearrangement. The sign-up page's 50/50 split likely collapses to full-width stacked on narrow viewports, with the screenshot collage moving above or below the form. Pricing cards transition from side-by-side to vertical stack, maintaining full-width pill buttons. The feature comparison table requires horizontal scroll or collapses to an accordion pattern on small screens—implementation should preserve the four-column comparison structure where possible, with sticky first column for feature names.

Type scales down proportionally: the 80px hero display reduces to approximately 56px on tablet and 32px on mobile, maintaining the weight 652 for impact. Body text remains 16px across all breakpoints for readability. Touch targets maintain minimum 44px height through increased vertical padding on buttons and inputs.

## Practical implementation guidance

### Preserve
- The absolute contrast between dark functional and light marketing surfaces—this duality is central to the brand
- Pill-shaped interactive elements consistently across all button, input, and toggle variants
- The single-type-family hierarchy using precise weight values (652, 600, 456, 400)
- Screenshot-forward imagery without decorative overlay or framing
- The inset shadow treatment for edge definition on dark surfaces

### Avoid
- Introducing additional type families or decorative fonts that compete with M Saans
- Using mid-tone backgrounds that dilute the binary contrast system
- Applying gradient fills or drop shadows that create depth complexity
- Rounding corners partially—commit to full pills or defined card radii, not intermediate values
- Adding border colors that compete with the subtle inset shadow treatment

### Recommended build order
1. Establish the dual canvas system (`canvas` and `canvas-light`) with corresponding ink colors
2. Implement the type scale with exact weight values and tracking
3. Build the pill button and input components as the foundational interactive layer
4. Construct pricing card layout with proper vertical rhythm
5. Add the feature comparison table with sticky header behavior
6. Implement the split-screen sign-up layout with screenshot collage
7. Create the feature showcase card grid for marketing sections

### Accessibility
- Ensure the 4.5:1 contrast ratio minimum is maintained; the `ink` on `canvas` pairing exceeds this, but `muted` on `canvas` does not and should not be used for critical text
- Provide visible focus indicators for pill-shaped controls, likely as an outline offset or subtle background shift
- Include proper labeling for the billing toggle as a radio button group or tab panel
- Ensure the feature comparison table is navigable by screen readers with proper header associations
- Maintain touch target sizes at 44px minimum even when visual padding appears smaller

## Scope note

This guide covers the sign-up, pricing, and homepage marketing surfaces of Mobbin. Mobile layouts, hover and focus states, loading skeletons, error handling, and the screenshot browsing interface are not represented in the supplied material. The exact spacing and radius values derive from the documented pixel measurements converted to the relative unit scale.
