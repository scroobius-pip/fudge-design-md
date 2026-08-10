# How kit.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/kit.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with cream background, bold Kit Sans headline, blue CTA button, and social proof grid with photography and dark stat cards showing subscriber metrics](https://pin.fontofweb.com/7488?format=jpg)](https://design.withfudge.com/share/pin-7488)

[Hero section with cream background, bold Kit Sans headline, blue CTA button, and social proof grid with photography and dark stat cards showing subscriber metrics](https://design.withfudge.com/share/pin-7488)

[![Feature grid section with centered Kit Sans display heading, blue primary action button, and six white rounded cards with icons for email marketing capabilities](https://pin.fontofweb.com/7487?format=jpg)](https://design.withfudge.com/share/pin-7487)

[Feature grid section with centered Kit Sans display heading, blue primary action button, and six white rounded cards with icons for email marketing capabilities](https://design.withfudge.com/share/pin-7487)

[![Product feature section with split layout showing email list growth headline, UI mockup with subscriber analytics, and automation workflow visualization on peach background](https://pin.fontofweb.com/7486?format=jpg)](https://design.withfudge.com/share/pin-7486)

[Product feature section with split layout showing email list growth headline, UI mockup with subscriber analytics, and automation workflow visualization on peach background](https://design.withfudge.com/share/pin-7486)

[![Homepage hero with asymmetric two-column layout featuring large Kit Sans headline on cream panel, James Clear testimonial portrait on dark background, and feature benefit cards](https://pin.fontofweb.com/7485?format=jpg)](https://design.withfudge.com/share/pin-7485)

[Homepage hero with asymmetric two-column layout featuring large Kit Sans headline on cream panel, James Clear testimonial portrait on dark background, and feature benefit cards](https://design.withfudge.com/share/pin-7485)

## Overview

Kit's marketing site presents an email marketing platform built specifically for creators, using a visual language that balances warmth with professional credibility. The design system centers on a cream canvas that feels approachable rather than clinical, paired with bold, tightly-set display typography in Kit Sans that commands attention without shouting. Electric blue accents provide energetic contrast against the neutral palette, appearing primarily in call-to-action buttons and key metric highlights. The overall composition alternates between light and dark surfaces—cream backgrounds for explanatory content, near-black panels for social proof and statistics—creating visual rhythm across long-scrolling pages. Photography of real creators, often against colored studio backdrops, reinforces the human-centered positioning. The layout favors asymmetric two-column arrangements in hero sections, giving editorial weight to headlines while allowing product imagery and testimonials to breathe.

## Colors

The color system operates on a principle of restrained warmth with strategic energy. The cream canvas establishes an inviting foundation distinct from stark white competitors, while near-black ink provides the primary reading color with sufficient weight for confident headlines. Electric blue serves as the singular accent, reserved for interactive elements and highlight moments to maximize its impact.

| token | value | use |
|---|---|---|
| action | #44B1FF | Primary buttons, stat highlights, icon accents, interactive borders |
| ink | #1E1E1E | Primary text, headings, body copy on light surfaces |
| muted-ink | #E3E3E3 | Secondary text on dark surfaces, subtle borders |
| canvas | #F2EFE9 | Page background, hero panels, primary surface |
| surface | #FFFFFF | Cards, elevated panels, feature grid items |
| surface-inverse | #000000 | Stat cards, testimonial sections, dark hero imagery panels |
| border-light | #E3E3E3 | Subtle card borders, dividers on light backgrounds |
| border-inverse | #44B1FF | Accent borders on dark surfaces, active states |

The light mode dominates the experience, with dark surfaces used intentionally for contrast and emphasis. The cream canvas (#F2EFE9) appears in hero sections and as the default page background, while pure white cards create subtle elevation within this warm environment. Dark panels (#000000) host large stat displays and testimonials, where the electric blue accent becomes luminous against the deep surface. No gradient-based UI colors are present in the interface; gradients appear only in photographic overlays, such as the linear fade from white to transparent that softens image transitions. The blue accent maintains consistent saturation across all applications, from small icons to large metric numbers, ensuring coherent brand recognition.

## Typography

Two type families create a clear functional hierarchy: Kit Sans for display and editorial moments, Libre Franklin for interface and reading text. Kit Sans, designed by Marko Hrastovec and Mihael Šandro of Hot Type, delivers bold, compact headlines with a contemporary geometric sensibility. Libre Franklin, from Pablo Impallari, Rodrigo Fuenzalida, and Nhung Nguyen of Impallari Type, provides excellent readability at text sizes with a neutral, friendly character.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Kit Sans | 5rem | 500 | 0.95 | normal | Homepage hero headlines, major value propositions |
| section-display | Kit Sans | 4rem | 500 | 1 | normal | Section headings, feature introductions |
| feature-heading | Kit Sans | 3rem | 500 | 1 | normal | Sub-section headlines, product feature titles |
| stat-display | Kit Sans | 5rem | 500 | 1 | normal | Large metric numbers on dark cards |
| body | Libre Franklin | 1rem | 400 | 1.5 | -0.01em | Primary body text, descriptions, navigation |
| body-small | Libre Franklin | 0.875rem | 400 | 1.429 | -0.01em | Secondary descriptions, captions, metadata |
| label | Libre Franklin | 0.75rem | 400 | 1.333 | -0.01em | Fine print, disclaimers, legal microcopy |
| navigation | Libre Franklin | 1rem | 400 | 1.5 | -0.01em | Header links, dropdown menus |
| button | Libre Franklin | 1rem | 600 | 1 | -0.00875em | CTA buttons, primary actions |

Kit Sans appears exclusively at display sizes (48px, 64px, 80px), always in weight 500, with tight line-height matching or nearly matching the font size for stacked headlines. Libre Franklin handles all interface text at 400 Regular, with 600 Semibold for buttons and emphasized inline text, and 700 Bold for strong emphasis within body copy. Letter spacing is consistently tight across both families, creating a cohesive, modern feel. Verify licensing for these families before production use.

## Layout

The layout system employs a centered content strategy with generous horizontal padding and clear section breaks. The base spacing unit is 0.25rem (4px), with all major measurements deriving from this increment.

**Container and grid behavior:** Content sits within a max-width container with 32px (2rem) horizontal padding on desktop. Sections stack vertically with substantial breathing room—80px (5rem) top padding is common for major section beginnings, with 64px (4rem) bottom padding. Feature grids use a three-column layout with 16px (1rem) gaps between cards.

**Section architecture:** The homepage alternates between full-width cream backgrounds and contained content blocks. Hero sections frequently use asymmetric two-column layouts: a text-heavy left panel with headline, description, CTA, and microcopy; a right panel containing photography, product imagery, or testimonials. This split creates visual tension and allows headlines to scale large without competing with imagery.

**Spacing scale:** The practical spacing vocabulary includes 4px for tight inline adjustments, 12px for compact element grouping, 16px for component internal padding and grid gaps, 24px for card padding, 32px for section horizontal margins, 40px for medium section breaks, 64px for large section endings, and 80px for major section beginnings. Negative margins appear in specific compositions, such as -100px top margin for overlapping image treatments that break section boundaries.

**Responsive considerations:** The three-column feature grid should collapse to single column on narrow viewports. Asymmetric hero layouts should stack vertically, with imagery following text. The substantial desktop padding (32px) can reduce to 16px on mobile to preserve content width.

## Visual language

The visual character of Kit's marketing site emerges from deliberate contrasts: warm against cool, bold against quiet, human against systematic. The cream background (#F2EFE9) distinguishes the brand from generic SaaS white, creating an immediate sense of approachability that aligns with the creator-focused positioning.

**Photography and imagery:** Creator portraits dominate the visual landscape, typically shot against solid colored backdrops (teal, peach, lavender) that complement the neutral interface palette. These images receive rounded corners (12px) that soften their presence without feeling playful. Product screenshots and UI mockups appear within colored containers that match the photography backdrops, creating visual continuity between real people and digital tools.

**Iconography:** Small functional icons precede feature card titles, rendered in the electric blue accent color. These are simple, line-based symbols that communicate capability without visual weight.

**Surface treatment:** Cards and panels use subtle rounding (12px-16px) consistently. No shadows are present in the interface; elevation is communicated through color contrast alone—white cards on cream, dark cards on cream, or colored containers on white. Borders are minimal, appearing as 1px hairlines in light gray or the blue accent for subtle definition.

**Stat and metric presentation:** Large numbers receive special treatment—Kit Sans at 80px in electric blue against near-black backgrounds. Supporting labels sit below in white or muted text, creating a clear hierarchy between the impressive number and its context.

## Components

### Primary action button

The main conversion element throughout the site.

- **Anatomy:** Text label centered within a solid filled shape
- **Surface:** Background fills with action blue (#44B1FF), text in near-black (#1E1E1E)
- **Typography:** Libre Franklin 600, 1rem, tight line-height
- **Shape:** 10px border radius, creating a pill-like but not fully circular form
- **Spacing:** 16px padding on all sides, creating substantial clickable area
- **Composition:** Frequently appears below headlines with microcopy disclaimer underneath ("No credit card required")
- **Variants:** Header navigation uses a compact version with identical styling; secondary text-only links appear in navigation with underline on hover

### Feature card

Grid-based capability presentation with icon, title, and description.

- **Anatomy:** Icon at top, bold title below, description paragraph beneath
- **Surface:** White (#FFFFFF) background on cream canvas, or subtle variation for disabled/unavailable states
- **Typography:** Title in Libre Franklin 600 at 1rem; description in Libre Franklin 400 at 1rem or 0.875rem
- **Shape:** 12px border radius
- **Spacing:** 24px internal padding, icons positioned with comfortable margin above title
- **Composition:** Three-column grid with 16px gaps; cards maintain equal height within rows
- **Variants:** Some cards appear in muted state with reduced opacity when representing future or unavailable features

### Stat card

High-impact metric display for social proof sections.

- **Anatomy:** Large number, supporting label, optional descriptive text
- **Surface:** Near-black (#000000) background with electric blue (#44B1FF) for the metric number
- **Typography:** Metric in Kit Sans 500 at 80px; labels in Libre Franklin 400 at 1rem in white or muted tones
- **Shape:** 12px-16px border radius
- **Spacing:** 24px-40px internal padding depending on card size
- **Composition:** Often arranged in asymmetric grids with photography cards, or as standalone large panels

### Testimonial card

Social proof with creator photography and quote.

- **Anatomy:** Star rating, avatar cluster, quote text, attribution
- **Surface:** Near-black background with white and muted text
- **Typography:** Quote in Libre Franklin 400 italic; attribution in Libre Franklin 600 or 700
- **Shape:** Full-width panel with internal rounded image containers for avatars
- **Spacing:** Generous vertical padding (64px+), centered text alignment
- **Composition:** Avatars overlap horizontally in a cluster; quote marks may be implied through styling

### Navigation header

Fixed or sticky site navigation.

- **Anatomy:** Logo mark left, primary links center-left, utility links right, CTA button far right
- **Surface:** Transparent or cream background matching page; text in near-black
- **Typography:** Links in Libre Franklin 400 at 1rem; dropdown indicators with chevron icons
- **Spacing:** 12px vertical padding, 32px horizontal page margins
- **Composition:** Flex row with space-between alignment; logo maintains lockup with "kit" wordmark

### Hero section

Primary landing composition with headline and conversion focus.

- **Anatomy:** Headline, description, CTA button, microcopy, optional imagery panel
- **Surface:** Cream (#F2EFE9) background for text panel; adjacent panel may contain photography or dark surface
- **Typography:** Headline in Kit Sans 500 at 80px with tight leading; body in Libre Franklin 400 at 1rem
- **Shape:** 12px-16px rounding on image containers and adjacent panels
- **Spacing:** 64px-80px top padding, 40px-64px bottom padding; generous internal spacing between elements
- **Composition:** Two-column asymmetric split (approximately 45/55 or 50/50), with text left and imagery right; stacks vertically on narrow viewports

## Responsive behavior

The design maintains its character across viewport sizes through considered adaptation of its core patterns. The asymmetric two-column hero layouts, essential to the brand's editorial feel, should stack vertically with text preceding imagery on narrow screens. Headline sizes scale down proportionally: 80px display may reduce to 48px, 64px to 40px, preserving the bold character without overflow. The three-column feature grid collapses to single column with full-width cards, maintaining the icon-title-description structure. Navigation condenses to a hamburger menu or simplified link list, with the "Start free trial" button remaining visible as the primary conversion path. Horizontal padding reduces from 32px to 16px on mobile, preserving content width without excessive margins. Stat cards may stack vertically or form a two-column grid, with metric numbers scaling down to maintain impact without breaking layout.

## Practical implementation guidance

### Preserve
- The cream canvas (#F2EFE9) as the default page background; this warmth is central to brand differentiation
- Kit Sans exclusively for display headlines at 48px, 64px, and 80px sizes with weight 500
- The electric blue (#44B1FF) as the sole accent color, reserved for interactive elements and highlight moments
- Tight letter spacing across both type families for cohesive modern feel
- Asymmetric two-column hero compositions with substantial headline scale
- Rounded corners (12px-16px) on all cards, images, and panels consistently

### Avoid
- Introducing additional accent colors beyond the electric blue; the restrained palette is intentional
- Using Kit Sans for body text or interface elements; it is display-optimized only
- Applying shadows for elevation; rely on color contrast and surface changes instead
- Generic white backgrounds for entire pages; use cream or intentional dark surfaces
- Centering headlines in hero sections; the left-aligned editorial composition is distinctive

### Recommended build order
1. Establish the cream canvas background and near-black text color as global defaults
2. Implement Kit Sans at 80px/64px/48px with tight line-height for hero and section headlines
3. Add Libre Franklin at 16px with -0.01em tracking for all body and interface text
4. Create the primary action button component with blue fill, black text, and 10px radius
5. Build the two-column hero section with asymmetric layout and proper spacing scale
6. Implement feature card grid with white surfaces, icons, and consistent internal padding
7. Add dark stat cards and testimonial panels for social proof sections
8. Polish with rounded image treatments and responsive stacking behavior

### Accessibility
- Ensure near-black text (#1E1E1E) on cream (#F2EFE9) meets WCAG AA contrast ratios (approximately 12.6:1, which exceeds requirements)
- Verify electric blue (#44B1FF) on near-black for stat displays meets contrast minimums for large text
- Provide visible focus states for the blue primary buttons, likely using outline or ring in the accent color
- Maintain logical heading hierarchy: single h1 per page, followed by h2 sections, avoiding Kit Sans display sizes for non-heading elements
- Ensure interactive elements meet minimum 44px touch targets; the 16px padded buttons exceed this
- Consider reduced motion preferences for any scroll-triggered animations of stat numbers or image reveals

## Scope note

This guide covers the Kit homepage and its core marketing components as visible in the supplied imagery. Pricing page surfaces, mobile-specific layouts, form validation states, and authenticated application interfaces are not represented. Footer content, detailed documentation pages, and blog templates fall outside the current scope.
