# How linktr.ee is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/linktr.ee-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with bold display typography and a horizontal scroll of creator profile images including HBO and Comedy Central logos on a warm off-white background.](https://pin.fontofweb.com/6798?format=jpg)](https://design.withfudge.com/share/pin-6798)

[Hero section with bold display typography and a horizontal scroll of creator profile images including HBO and Comedy Central logos on a warm off-white background.](https://design.withfudge.com/share/pin-6798)

[![Four-column pricing table with Free, Starter, Pro, and Premium tiers showing feature lists, pill-shaped CTA buttons, and a highlighted Pro tier with purple header.](https://pin.fontofweb.com/6797?format=jpg)](https://design.withfudge.com/share/pin-6797)

[Four-column pricing table with Free, Starter, Pro, and Premium tiers showing feature lists, pill-shaped CTA buttons, and a highlighted Pro tier with purple header.](https://design.withfudge.com/share/pin-6797)

[![Footer section with four-column link grid on a white rounded panel, app store badges, social icons, and a purple background with decorative floral cutouts.](https://pin.fontofweb.com/6796?format=jpg)](https://design.withfudge.com/share/pin-6796)

[Footer section with four-column link grid on a white rounded panel, app store badges, social icons, and a purple background with decorative floral cutouts.](https://design.withfudge.com/share/pin-6796)

[![Bottom hero with large purple background, teal silhouette illustration, email capture input with lime pill button, and white footer panel with four-column navigation.](https://pin.fontofweb.com/6795?format=jpg)](https://design.withfudge.com/share/pin-6795)

[Bottom hero with large purple background, teal silhouette illustration, email capture input with lime pill button, and white footer panel with four-column navigation.](https://design.withfudge.com/share/pin-6795)

## Overview

Linktree's design system is built for creators and digital entrepreneurs who need an immediate, confident presence online. The visual language balances playful expressiveness with commercial credibility through oversized rounded typography, a vibrant dual-tone palette of deep purple and electric lime, and generous use of pill-shaped containers. The system moves between warm off-white editorial surfaces for content and immersive deep purple stages for conversion moments. Every element feels inflated and approachable—large type, soft corners, and ample breathing room create a sense of accessibility that matches the product's promise of simplifying complex online presence into a single link. The design prioritizes scannability and emotional impact over density, using scale and color contrast to guide users through pricing decisions, feature exploration, and account creation.

## Colors

The color system operates across three distinct modes: warm neutral for editorial content, deep purple for immersive conversion surfaces, and vibrant accents for interactive energy.

| token | hex | use |
|---|---|---|
| ink | #000000 | Primary text, strong headings, icon fills |
| ink-deep | #1E2330 | Secondary dark text, elevated surface text |
| ink-navy | #061492 | Deep accent headings on light backgrounds |
| canvas | #FFFFFF | Primary content backgrounds, card surfaces |
| canvas-warm | #F3F3F1 | Hero backgrounds, editorial sections, pricing page base |
| surface | #EFF0EC | Subtle panel backgrounds, secondary containers |
| surface-lime | #D2E823 | Primary CTA buttons, conversion highlights, brand energy |
| surface-lavender | #E9C0E9 | Decorative accents, soft highlights, Pro tier indicators |
| surface-mint | #E0E2D9 | Tertiary backgrounds, subtle differentiation |
| accent-purple | #471E67 | Deep immersive backgrounds, footer stages, brand depth |
| accent-purple-deep | #502274 | Darker purple variants for depth and hover states |
| accent-teal | #254F1A | Success states, growth indicators |
| accent-blue | #2665D6 | Interactive links, streaming references, digital accents |
| accent-rose | #B69FAF | Soft decorative tones, muted warmth |
| muted | #676B5F | Secondary text, captions, feature descriptions |

The deep purple family dominates conversion and closing sections, creating an immersive stage that makes lime CTAs and white text pop with maximum contrast. Warm off-white surfaces dominate reading and comparison tasks, keeping the experience airy and scannable. The lime accent is reserved exclusively for primary actions to maintain its urgency and brand recognition.

## Typography

Link Sans, designed by Average Type Service, is the sole type family across all weights and optical sizes. It carries a geometric-humanist hybrid character with rounded terminals that reinforce the system's soft, approachable personality. The variable font allows precise weight interpolation, while fixed weights provide predictable performance for key components. The design facts also identify Link Sans-Link Sans as a variable font source in the family, which enables the weight range from 400 to 800 used across the scale.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Link Sans | 5.5rem | 800 | 1.07 | -0.02em | Homepage hero headlines, major brand statements |
| section-display | Link Sans | 3.5rem | 700 | 1.2 | -0.02em | Section headings, pricing page titles, feature headers |
| heading-large | Link Sans | 1.75rem | 500 | 1.3 | -0.01em | Card titles, tier names, footer column headers |
| body | Link Sans | 1rem | 400 | 1.5 | 0.01em | Paragraphs, descriptions, general reading |
| body-large | Link Sans | 1.25rem | 400 | 1.5 | -0.02em | Lead paragraphs, hero descriptions, feature intros |
| label | Link Sans | 0.75rem | 400 | 1.5 | normal | Captions, metadata, small UI text |
| navigation | Link Sans | 1rem | 500 | 1 | normal | Nav links, header items, footer links |
| button | Link Sans | 1rem | 500 | 1 | normal | CTA labels, form actions, pill buttons |

The type scale is built on a 2px relative unit, with display sizes snapping to whole multiples. Hero display at 88px and section display at 56px create dramatic hierarchy on landing pages. Body text maintains generous line height for readability in feature descriptions and pricing details. Negative letter spacing on larger sizes tightens the visual texture of headlines without sacrificing legibility.

Verify licensing for Link Sans through Average Type Service before production use.

## Layout

The layout system uses centered content bands with generous horizontal margins and vertical rhythm. Maximum content widths are constrained for readability while allowing background colors and decorative elements to extend full-bleed.

Page sections stack vertically with 6rem to 8rem of vertical separation, creating clear narrative breaks between product story, social proof, features, and conversion. Content containers center within the viewport with horizontal margins of approximately 16.75rem on desktop, producing a comfortable reading measure for body text while allowing hero elements and image grids to feel expansive.

The grid system favors single-column centered layouts for messaging and four-column arrangements for comparison tasks like pricing tiers. Footer navigation uses a four-column link grid that collapses gracefully on narrower viewports. Cards and panels use consistent internal padding of 1.5rem to 4rem depending on content density.

Spacing follows a 2px base unit with semantic tokens: component-gap at 1rem for related elements, content-gap at 1.5rem for distinct blocks, and section at 6rem for major divisions. Margins between pricing cards and feature rows use 0.75rem to 1rem to maintain visual grouping without crowding.

## Visual language

The visual personality is bold, friendly, and unmistakably creator-centric. Rounded corners appear everywhere—buttons are full pills, cards use 2rem radius, and even the search input in the header carries a 999px radius that makes it feel like a soft capsule. This consistent rounding creates a tactile, approachable quality that distinguishes the brand from sharper corporate competitors.

Photography and illustration mix freely: creator portraits appear in rounded-rectangle and circular masks, while flat color silhouettes and floral cutouts decorate purple conversion sections. The decorative elements use high-contrast color blocking—teal figures against purple grounds, lavender botanical shapes—that feel contemporary and art-directed rather than stock.

The system avoids heavy shadows and dimensional effects, relying instead on flat color fields and scale contrast to create depth. Borders are minimal and functional: 1px hairlines in muted tones for secondary buttons, or absent entirely in favor of background color shifts. The overall effect is clean and confident, with enough playful energy to resonate with individual creators while maintaining the trust required for commerce and subscription decisions.

## Components

### Primary button

- **Anatomy**: Text label centered within a full-pill container
- **Surface**: Background uses surface-lime for primary actions; canvas with 1px ink or muted border for secondary variants
- **Typography**: button token, weight 500, centered
- **Shape**: border-radius 9999px, padding 1.5rem horizontally and 1rem to 1.25rem vertically
- **Spacing**: Margin 1rem above and below in card contexts
- **Variants**: Lime fill for primary CTAs; white fill with dark border for secondary; dark fill with white text for footer actions

### Pricing tier card

- **Anatomy**: Header with tier name and description, price block with currency and billing note, CTA button, feature list with icon bullets
- **Surface**: Canvas background with subtle surface-mint or surface-lavender header for highlighted tiers; accent-purple-deep header for recommended Pro tier
- **Typography**: heading-large for tier name, section-display for price figure, body for descriptions and features
- **Shape**: 2rem border-radius, internal padding 1.5rem to 2rem
- **Spacing**: Cards arranged in four-column grid with 1rem gutters; internal sections separated by 1.5rem
- **Hierarchy**: Recommended tier receives elevated header color and "Recommended" badge; price figures use ink at largest display size for impact

### Header navigation

- **Anatomy**: Logo mark, text links, search input capsule, primary CTA button
- **Surface**: Transparent or canvas background depending on scroll position; search input uses canvas with 1px ink border
- **Typography**: navigation token for links, button token for CTA
- **Shape**: Search input uses 999px radius with left-side icon; CTA uses 0.5rem radius for compact header variant
- **Spacing**: Horizontal padding 3.3rem, vertical padding approximately 1rem
- **Composition**: Flex row with space-between, logo left, links center-left, actions right

### Footer panel

- **Anatomy**: Four-column link grid, app store badges, social icon row, legal acknowledgment
- **Surface**: Canvas panel with 2rem radius floating over accent-purple full-bleed background; decorative floral cutouts visible at edges
- **Typography**: heading-large for column headers, navigation token for links, label for legal copy
- **Shape**: Panel radius 2rem; social icons use circular 2.5rem containers with ink backgrounds
- **Spacing**: Internal padding 4rem; column gap 2rem; bottom legal section separated by 3rem margin
- **Composition**: Grid layout with equal columns; app badges and social icons in bottom flex row

### Feature list item

- **Anatomy**: Icon or emoji prefix, bold feature name, optional description paragraph
- **Surface**: Transparent within card context
- **Typography**: body with weight 600 for feature name, body at weight 400 for description; muted color for secondary text
- **Spacing**: 0.75rem between items; 0.5rem between name and description
- **Variants**: Some items include "NEW" badge using surface-lavender background with ink text

### Email capture input

- **Anatomy**: Text input field with placeholder, adjacent submit button
- **Surface**: Input uses canvas background; button uses surface-lime
- **Typography**: body for input text, button for submit label
- **Shape**: Input uses 0.5rem radius; button uses 9999px radius
- **Spacing**: Input padding 1rem; button padding 1.5rem 2rem; gap between elements 0.5rem

## Responsive behavior

The design is authored for desktop viewport widths with centered content bands. At narrower widths, the four-column pricing grid should stack to single-column scrolling or a 2x2 arrangement, maintaining card proportions and internal spacing. The hero display type should scale down to section-display size on tablet and heading-large on mobile to preserve line breaks and readability.

Footer navigation columns should collapse to two columns on tablet and accordion or stacked single-column on mobile, with touch targets maintaining minimum 44px height. Header search input may collapse to icon-only on narrow viewports, with navigation links moving to a hamburger menu.

Image grids and creator carousels should scroll horizontally on all viewports, with snap points for individual cards. Decorative background illustrations should scale proportionally and may be partially cropped on mobile to maintain content priority.

## Practical implementation guidance

### Preserve
- The distinctive lime-and-purple color pairing for primary actions and conversion sections
- Full pill-shaped buttons for all primary CTAs; the 9999px radius is a signature element
- Link Sans at weight 800 for hero headlines; the extra-bold weight carries significant brand recognition
- Generous internal padding on cards and panels; the airy spacing is essential to the approachable personality
- Four-column footer link grid with clear category headers
- Rounded image masks for creator portraits and social proof imagery

### Avoid
- Sharp-cornered buttons or inputs; they break the system's tactile friendliness
- Replacing lime with generic green or purple with generic violet; the specific hues are calibrated for accessibility and brand distinction
- Crowding feature lists with dense paragraph text; keep items scannable with bold leads and short descriptions
- Using ink-deep or accent-purple for large text blocks on dark backgrounds without sufficient contrast checking
- Flattening the decorative illustration layer; the silhouettes and florals contribute essential personality

### Recommended build order
1. Establish color tokens and typography scale with Link Sans loaded at all weights
2. Build pill button component with lime, white, and dark variants
3. Create card container with 2rem radius and consistent padding
4. Implement header with search capsule and CTA
5. Construct four-column pricing grid with tier-specific header colors
6. Build footer panel with link grid, app badges, and social icons
7. Add decorative background layers and illustration system

### Accessibility
- Ensure lime buttons on purple backgrounds meet WCAG AA contrast; the combination is strong but verify for smaller text
- Maintain visible focus states on pill buttons with 2px offset rings in ink or white depending on background
- Use semantic heading hierarchy: single h1 per page, h2 for sections, h3 for card titles
- Provide aria-labels for icon-only social links in footer
- Ensure horizontal-scrolling image grids are keyboard accessible with arrow key navigation

## Scope note

This guide covers the Linktree marketing site homepage and pricing page surfaces visible in the supplied images, including hero sections, pricing comparison, footer navigation, and conversion components. Mobile breakpoints, interactive states beyond static presentation, form validation, account dashboard interfaces, and motion design are not represented in the available material. Verify licensing for Link Sans through Average Type Service before production use.
