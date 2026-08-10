# How ntathome.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ntathome.com-design)

Last updated: 2026-08-10

## Captured pages

[![Checkout page with split layout showing subscription selection on dark left panel and white account creation form on right](https://pin.fontofweb.com/8913?format=jpg)](https://design.withfudge.com/share/pin-8913)

[Checkout page with split layout showing subscription selection on dark left panel and white account creation form on right](https://design.withfudge.com/share/pin-8913)

[![Homepage hero with full-bleed theatrical production still, large white headline, and prominent red call-to-action button](https://pin.fontofweb.com/8912?format=jpg)](https://design.withfudge.com/share/pin-8912)

[Homepage hero with full-bleed theatrical production still, large white headline, and prominent red call-to-action button](https://design.withfudge.com/share/pin-8912)

[![Production detail page for Red with dark background, synopsis text, action buttons, and related content grid with star ratings](https://pin.fontofweb.com/8911?format=jpg)](https://design.withfudge.com/share/pin-8911)

[Production detail page for Red with dark background, synopsis text, action buttons, and related content grid with star ratings](https://design.withfudge.com/share/pin-8911)

## Overview

National Theatre at Home presents a streaming platform built around theatrical content, with a visual system that prioritizes immersion and dramatic impact. The design employs a near-black canvas that lets production photography dominate, paired with clean Swiss-style typography and a single vivid red accent for calls to action. The interface alternates between full-bleed cinematic moments and structured content areas, creating a rhythm that feels both premium and accessible. The overall character is restrained and confident—dark backgrounds, generous whitespace within content zones, and typography that scales dramatically for headlines while remaining highly legible at smaller sizes. The system supports both browsing discovery and transactional flows, with the checkout experience introducing a light surface that contrasts sharply against the platform's default darkness.

## Colors

The palette is intentionally minimal, built on a foundation of absolute black with white as the primary text color. A deep navy-teal serves as the signature dark surface, while a vivid red provides the only saturated accent. This restraint ensures that production imagery and the red action elements command full attention.

| token | value | use |
|---|---|---|
| canvas | #000000 | Default page background, header bar, hero overlays |
| surface | #1A2E3B | Dark content panels, checkout left column, production detail backgrounds |
| ink | #FFFFFF | Primary text on dark backgrounds, form panel backgrounds |
| muted-ink | #8699A6 | Secondary text, placeholder text, subtle labels |
| accent | #FF3200 | Primary buttons, active states, key highlights |
| action | #FF3200 | Register free button, subscribe prompts, primary CTAs |
| border | #CCCCCC | Input borders, dividers on light surfaces |
| border-subtle | #E3E8E9 | Hairline separators, checkbox borders |
| dark-ink | #1A2E3B | Text on white surfaces, form headings |
| secondary-text | #222222 | Body text on light backgrounds |

The dark mode is the platform's native state. Black and deep navy-teal create a cinematic environment where theatrical photography can glow. The red accent (#FF3200) appears only for the most important user actions, making it impossible to miss against the darkness. Light surfaces appear only in transactional contexts—the checkout form panel uses pure white to create a clear separation from the subscription selection area and to signal a shift from browsing to completing a task. No gradient or shadow tokens are present in the system; depth is achieved through color contrast and photography rather than dimensional effects.

## Typography

The type system relies on a single family, Helvetica Now W 04, used across all weights and sizes. This creates a cohesive, modernist feel appropriate for a cultural institution. The hierarchy is established through size and weight rather than family variation, with display sizes reaching 56px for homepage heroes and scaling down to 14px for body copy and navigation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Helvetica Now W 04 | 3.5rem | 400 | 1.0 | normal | Homepage hero headlines |
| section-display | Helvetica Now W 04 | 2rem | 400 | 1.45 | normal | Section headings, production titles |
| body | Helvetica Now W 04 | 1rem | 400 | 1.375 | normal | Primary body text, descriptions |
| body-small | Helvetica Now W 04 | 0.875rem | 400 | 1.45 | normal | Secondary text, captions, navigation labels |
| label | Helvetica Now W 04 | 1rem | 700 | 1.0 | normal | Button text, emphasized labels |
| navigation | Helvetica Now W 04 | 1rem | 600 | 1.3 | normal | Header navigation links |

The 48px size (3rem) appears in checkout contexts for section headings like "Create your account," while 56px (3.5rem) drives the homepage hero. The 32px (2rem) size serves production detail page titles. Body copy at 16px (1rem) with 22px line height provides comfortable reading for longer synopsis text. Smaller 14px (0.875rem) text handles utility labels, navigation, and metadata. Weight 400 is the default; 600 and 700 appear for navigation and buttons respectively. The design credits Helvetica Now W 04 to Max Miedinger, Charles Nix, Monotype Studio, and Jan Hendrik Weber, with Monotype Imaging Inc as vendor. Verify licensing for these families before production use.

## Layout

The layout system uses a centered content model with generous horizontal margins that scale with viewport width. The homepage hero occupies the full viewport with content positioned in the lower-left quadrant, while interior pages employ a narrower reading column or split-panel compositions.

The header is fixed, containing the National Theatre at Home lockup with Bloomberg Philanthropies sponsor mark on the left, primary navigation centered, and account actions on the right. Navigation items include Browse, AD, BSL, Search, Subscribe, Rent, Gift, Register, and My List. The header maintains black background with white text throughout.

Content sections on the homepage use a centered container with approximately 82.5px side margins at desktop widths. The production detail page (Red) shows a two-column layout at the top: synopsis and actions on the left, production still on the right, followed by a full-width "Find out more" section with a three-column grid of related videos and a four-column grid of press quotes with star ratings.

The checkout page introduces an asymmetric split: the left panel (approximately 40% width) contains subscription selection and marketing copy on a dark surface, while the right panel (approximately 60% width) holds the white account creation and payment form. This creates clear task separation while maintaining brand presence on both sides.

Spacing follows a 2px base unit (0.125rem). Key layout values include: section vertical padding at 48px (3rem), content block gaps at 24px (1.5rem), and component internal padding at 20px (1.25rem). The checkout form panel uses 64px (4rem) horizontal padding and 48px (3rem) top padding. Grid gaps in related content sections appear at 12px (0.75rem) for tight media groupings.

## Visual language

The visual language is defined by theatrical photography presented at cinematic scale. Images bleed to edges without borders or rounded corners, treated as immersive backdrops rather than contained assets. The homepage hero layers white text directly over a full-bleed production still, with no scrim or overlay—relying instead on image selection for sufficient contrast.

Typography interacts with photography through confident scale. The 56px hero headline sits in the lower-left quadrant with a 24px line height, creating a dense, impactful block of text that competes visually with the imagery beneath it. Buttons below headlines use the red accent at substantial size (24px weight 900 for "Register free"), making them feel like part of the poster design rather than interface chrome.

On dark content surfaces, the system employs subtle horizontal rules in light gray (#E3E8E9 at 1px) to separate sections without introducing visual weight. The production detail page uses this technique between the synopsis area and the "Find out more" section below.

Iconography is minimal and functional. Small lock icons appear on restricted content thumbnails. Star ratings use simple outlined stars in white. Payment method icons (Visa, Mastercard, Amex, Discover) appear at standard sizes in form contexts. The overall impression is that interface elements recede until needed, with photography and typography carrying the emotional weight.

## Components

### Primary Button

The primary button is the system's most prominent interactive element, used for registration, subscription, and key conversion actions.

- **Anatomy**: Text label centered within a solid rectangular container
- **Surface**: Background `{colors.action}` (#FF3200), text `{colors.ink}` (#FFFFFF)
- **Typography**: `{typography.label}` at 1rem weight 700, or larger 1.5rem weight 900 for hero contexts
- **Shape**: Border radius 3px (0.1875rem), no border
- **Spacing**: Padding 1.25rem vertical, 4rem horizontal for hero buttons; 0.625rem vertical, 1.25rem horizontal for compact variants
- **Composition**: Appears below headlines with 24px (1.5rem) margin-top

### Secondary Button

Used for supporting actions like "Watch trailer" and "Share" on production pages.

- **Anatomy**: Text label within a transparent container with border
- **Surface**: Transparent background, `{colors.ink}` text, `{colors.ink}` 1px solid border
- **Typography**: `{typography.label}` at 1rem weight 700
- **Shape**: Border radius 3px (0.1875rem)
- **Spacing**: Padding 0.625rem vertical, 1.25rem horizontal

### Subscription Selection Card

Appears in checkout flows for choosing between annual and monthly plans.

- **Anatomy**: Radio indicator, plan label, price, and descriptive text
- **Surface**: `{colors.ink}` background, `{colors.dark-ink}` text
- **Typography**: Plan name at `{typography.label}`, price and terms at `{typography.body-small}`
- **Shape**: Border radius 4px (0.25rem), no border or subtle border
- **Spacing**: Padding 1rem vertical, 1.25rem horizontal; margin-bottom 8px (0.5rem) between options
- **States**: Selected state shows filled red radio indicator; unselected shows empty circle

### Form Panel

The white container for account creation and payment entry.

- **Anatomy**: Stacked sections with headings, input fields, checkboxes, and summary
- **Surface**: `{colors.ink}` background, `{colors.dark-ink}` text for headings, `{colors.secondary-text}` for body
- **Typography**: Section headings at 1.5rem weight 700, body at `{typography.body}`, labels at `{typography.body-small}`
- **Shape**: Border radius 4px (0.25rem)
- **Spacing**: Padding 3rem top, 4rem horizontal; internal section gaps at 1.5rem

### Text Input

Standard form field for email, password, card details.

- **Anatomy**: Label text above, input field with placeholder
- **Surface**: White background, `{colors.border}` (#CCCCCC) 1px solid border
- **Typography**: Placeholder at `{typography.body}` in `{colors.muted-ink}`
- **Shape**: Border radius 4px (0.25rem)
- **Spacing**: Padding 0.875rem (14px) vertical, 1rem horizontal; margin-bottom 0.5rem between fields

### Production Card

Thumbnail with title for related content grids.

- **Anatomy**: Image thumbnail, optional lock icon overlay, title below
- **Surface**: No background, image fills container
- **Typography**: Title at `{typography.body-small}` weight 600 in `{colors.ink}`
- **Shape**: No border radius on image
- **Spacing**: Title padding-top 0.75rem; grid gap 0.75rem horizontal, 1.5rem vertical

### Press Quote

Star rating with quote text and publication attribution.

- **Anatomy**: Five or four star icons, quote in italics, publication name
- **Surface**: Transparent, on dark background
- **Typography**: Quote at `{typography.body-small}` weight 400 italic, publication at `{typography.body-small}` weight 400
- **Spacing**: Margin-bottom 1.25rem between quotes in grid

## Responsive behavior

The design shows a desktop-first approach with substantial fixed-width elements. The homepage hero text maintains left positioning with generous padding. The checkout split panel would naturally stack vertically on narrower viewports, with the subscription selection preceding the form. The production detail page's two-column synopsis layout should collapse to single column, with the production still moving above the text. The "Find out more" grid of three related videos would reduce to two columns on tablet and single column on mobile. Press quotes currently display in four columns; this should become two columns on tablet and single column on mobile. Navigation in the header would compress to a hamburger menu on smaller screens, as the full item list exceeds comfortable horizontal space. Font sizes should scale down proportionally: hero-display to 2.5rem on tablet and 2rem on mobile, section-display to 1.5rem and 1.25rem respectively. Touch targets for buttons should maintain minimum 44px height regardless of viewport.

## Practical implementation guidance

### Preserve
- The absolute black canvas as the default background; this is essential to the cinematic quality
- The single red accent (#FF3200) for primary actions only; do not dilute it by applying to secondary elements
- Full-bleed, unrounded imagery for hero and production stills
- The Helvetica Now W 04 family throughout; the system's cohesion depends on this single typeface
- Generous whitespace in the checkout form panel; the 64px horizontal padding creates a premium feel

### Avoid
- Adding background colors or gradients behind hero imagery; the direct text-on-photo approach is intentional
- Using the red accent for non-interactive elements like headings or decorative rules
- Rounding corners on production imagery; the sharp rectangle maintains poster-like authority
- Introducing additional font families; the Swiss modernist character relies on typographic restraint
- Shadow effects for depth; the system achieves hierarchy through color and scale alone

### Recommended Build Order
1. Establish the black canvas and load Helvetica Now W 04 with weights 400, 600, 700, and 900
2. Build the fixed header with navigation and account actions
3. Implement the homepage hero with full-bleed image and positioned text block
4. Create the primary button component with red fill and white text
5. Build the production detail page template with two-column synopsis layout
6. Implement the related content grid with production cards
7. Construct the checkout split panel with subscription cards and white form panel
8. Add form components: text inputs, checkboxes, radio buttons, and select dropdowns

### Accessibility
- Ensure hero images have sufficient contrast for white text; provide text-shadow or gradient overlay if image content varies
- Maintain focus indicators on all interactive elements; the red accent can serve as focus color on dark backgrounds
- Use semantic heading hierarchy: h1 for page titles, h2 for section headings, h3 for card titles
- Provide alt text for all production imagery describing the scene and performers
- Ensure form labels are explicitly associated with inputs, not relying on placeholder alone
- The 14px body-small text should not go smaller; consider 16px minimum for form inputs to prevent zoom on mobile

## Scope note

This guide covers the homepage hero, production detail page, and checkout subscription flow as visible in the supplied materials. Mobile breakpoints, hover and focus states, loading skeletons, error pages, video player controls, and search results are not represented. The footer, account dashboard, and gift subscription flows are not included. Measurements derive directly from the retained interface values.
