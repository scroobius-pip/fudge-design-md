# How plutio.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/plutio.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark testimonial section with three gradient portrait cards and a purple social-proof banner showing global business statistics](https://pin.fontofweb.com/8367?format=jpg)](https://design.withfudge.com/share/pin-8367)

[Dark testimonial section with three gradient portrait cards and a purple social-proof banner showing global business statistics](https://design.withfudge.com/share/pin-8367)

[![Pricing page with three-tier card layout featuring purple headers, yellow highlight underline on headline, and monthly-yearly toggle](https://pin.fontofweb.com/8366?format=jpg)](https://design.withfudge.com/share/pin-8366)

[Pricing page with three-tier card layout featuring purple headers, yellow highlight underline on headline, and monthly-yearly toggle](https://design.withfudge.com/share/pin-8366)

[![Footer area with social media links, legal navigation, and centered brand tagline with decorative handwritten-style illustrations](https://pin.fontofweb.com/8365?format=jpg)](https://design.withfudge.com/share/pin-8365)

[Footer area with social media links, legal navigation, and centered brand tagline with decorative handwritten-style illustrations](https://design.withfudge.com/share/pin-8365)

[![Comprehensive footer directory with five-column link grid, category headers, and purple NEW badges on Product links](https://pin.fontofweb.com/8364?format=jpg)](https://design.withfudge.com/share/pin-8364)

[Comprehensive footer directory with five-column link grid, category headers, and purple NEW badges on Product links](https://design.withfudge.com/share/pin-8364)

## Overview

Plutio's visual identity is built for a modern SaaS platform that promises to consolidate business operations into one application. The design communicates confidence through high-contrast color blocking, generous rounded corners, and a clear typographic hierarchy that shifts between editorial display type and functional body text. The system alternates between stark black-and-white sections and immersive deep purple surfaces, creating rhythm across long-scrolling pages. Yellow appears as a deliberate accent—most notably in highlight underlines beneath key headlines and in promotional badges—adding energy without overwhelming the professional tone. Cards are the primary organizational unit, appearing in pricing tables, testimonials, and feature showcases with consistent corner radii and subtle borders. The overall impression is of a polished, approachable tool that balances creative personality with enterprise credibility.

## Colors

The color system operates across three distinct modes: a light mode for content-heavy sections, a dark mode for immersive brand moments, and an accent layer for calls-to-action and promotional emphasis.

| token | value | use |
|---|---|---|
| action | #3D0EBF | Primary buttons, pricing card headers, interactive highlights |
| action-hover | #2D0A91 | Button hover states, deeper purple accents |
| accent-yellow | #FFDD33 | Text highlight underlines, promotional badges, "POPULAR" ribbons |
| accent-coral | #FF3073 | Secondary alerts, live indicators, urgent labels |
| ink | #000000 | Primary text on light backgrounds, dark section backgrounds |
| ink-secondary | #605A90 | Muted text, footer links, secondary descriptions |
| ink-tertiary | #8D78B3 | Tertiary text, disabled states, subtle metadata |
| canvas | #FFFFFF | Page background, card surfaces, button text on dark |
| surface-light | #F8F8FC | Subtle section alternation, footer background |
| surface-muted | #F1F1F9 | Input backgrounds, inactive toggle states |
| surface-wash | #E2E2F5 | Hover backgrounds, subtle dividers |
| border-light | #D2D2EB | Card borders on light backgrounds, footer dividers |
| border-default | #BDACFF | Focus rings, active toggle borders |
| success | #339922 | Positive confirmations, included feature indicators |
| info | #2680FF | Informational icons, help tooltips |

The dark mode surfaces use pure black (#000000) as the foundation, with deep purple tints emerging through gradients and image overlays. Light mode relies on white and near-white surfaces with purple-tinted borders to create depth without heavy shadows. The yellow accent is applied with restraint—appearing as a 40% opacity underline gradient beneath headlines rather than solid blocks—ensuring it draws attention without compromising readability.

## Typography

Two font families drive the typographic system: Inter for display and editorial moments, Roboto for functional interface text. Inter appears exclusively in heavy weights (600–900) for headings and hero text, while Roboto handles body copy, labels, navigation, and pricing details across Regular, Medium, and Bold weights.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3.5rem | 900 | 1.1 | normal | Homepage hero headlines, major section titles |
| section-display | Inter | 2.6rem | 900 | 1.2 | normal | Section headers, pricing page headline |
| heading-large | Inter | 1.6rem | 600 | 1.2 | normal | Card titles, feature headings |
| heading-medium | Inter | 1.25rem | 600 | 1.2 | normal | Subsection titles, pricing plan names |
| body-large | Roboto | 1.25rem | 400 | 1.33 | normal | Lead paragraphs, hero descriptions |
| body | Roboto | 1rem | 400 | 1.33 | normal | Standard paragraphs, feature descriptions |
| body-small | Roboto | 0.875rem | 400 | 1.33 | normal | Secondary descriptions, metadata |
| label | Roboto | 0.81rem | 400 | 1.33 | normal | Captions, timestamps, fine print |
| price-value | Roboto | 1.6rem | 700 | 1 | normal | Pricing amounts, statistical figures |
| navigation | Roboto | 1rem | 500 | 1.33 | normal | Header nav, footer category headers |
| button | Roboto | 1rem | 500 | 1.33 | normal | CTA buttons, form actions |

Display text uses tight line heights (1.1–1.2) to create compact, impactful headlines. Body text maintains a consistent 1.33 ratio for comfortable reading. The hero-display size at 56px establishes a clear top-of-page hierarchy, while section-display at 41.6px carries secondary headlines with equivalent visual weight. Negative margins (-4px) applied to headings create tighter vertical rhythm between stacked text blocks.

Verify licensing for these families before production use. Roboto is designed by Google. Inter attribution is not specified in available records.

## Layout

The layout system centers content within a maximum width container of approximately 73.125rem (1170px at 16px root), with consistent horizontal padding of 2.8125rem (45px) on either side. Sections stack vertically with generous internal padding—typically 3.75rem to 6.25rem—creating breathing room between content groups.

The grid is fundamentally single-column for editorial content, expanding to multi-column arrangements for cards and feature grids. Pricing tables use a three-column layout with equal-width cards. Testimonial sections arrange portrait cards in horizontal rows. The footer organizes links into five equal columns.

Key spacing values:
- Section vertical padding: 100px (6.25rem) for major divisions, 60px (3.75rem) for standard sections
- Card internal padding: 60px (3.75rem) for large cards, 25px (1.5625rem) for compact cards
- Content gap between related elements: 18px (1.125rem)
- Container side margins: 315px auto-centered (approximately 19.6875rem each side at full width)

Negative margins (-9px, -14px) appear on card grids to compensate for internal card padding, maintaining flush outer edges. The header uses reduced vertical padding (18px) with the same horizontal container constraints.

## Visual language

The visual language balances geometric precision with playful accents. Rounded corners are pervasive—cards, buttons, badges, and even pricing toggle switches share radii between 8px and 18px, with 18px being the dominant card corner value. This creates a soft, approachable feel that distinguishes Plutio from sharper enterprise competitors.

Shadows are minimal and functional: a subtle rgba(19, 48, 66, 0.07) offset shadow appears on elevated cards and interactive elements, with a slightly deeper variant (0.14 opacity) for pressed or active states. The shadow values use a cool dark tint rather than neutral gray, harmonizing with the purple palette.

Gradients serve two purposes: decorative photo overlays on testimonial cards (purple-to-transparent and orange-to-transparent vignettes), and the signature yellow underline highlight applied to headlines via a linear-gradient with 40% coverage. The yellow highlight uses a 50% opacity yellow-to-transparent gradient at 0 degrees, creating a marker-like emphasis beneath key words.

Photography appears in testimonial cards with heavy color grading—portraits are tinted with purple, magenta, or orange overlays that unify diverse source images into the brand palette. The "Trusted by" statistics section pairs a deep purple background with a decorative globe illustration, reinforcing global scale through abstract imagery rather than literal photography.

Handwritten-style decorative illustrations appear in the footer area, adding personality with phrases like "WHAT A TIME SAVER" and "no more juggling between apps" in casual script, contrasting with the otherwise systematic typography.

## Components

### Pricing card

The pricing card is the most structurally complex visible component, appearing in three tiers (Core, Pro, Max).

- **Anatomy**: Purple header band containing plan name, description, and price; white body with feature list; footer with CTA button. A "POPULAR" ribbon badge angles across the bottom-right corner of the featured tier.
- **Surface**: Header uses solid action purple (#3D0EBF) with white text; body uses white canvas with ink text; footer maintains white background.
- **Typography**: Plan name uses heading-medium in white on purple; price uses price-value in white with "/month" label in body-small; features use body with bold lead-in words ("Unlimited", "No", numerical values).
- **Shape**: 18px corner radius on the card container; header band fills top with matching radius.
- **Spacing**: 60px internal padding on header; 25px on body; features stack with 14px vertical padding between rows.
- **Composition**: Three cards in equal-width grid with 18px gaps; middle card (Pro) elevated with "POPULAR" ribbon.
- **Variants**: Monthly/yearly toggle above cards switches pricing display; yearly shows "(2 months free)" label.

### Testimonial card

Portrait-based social proof cards appearing in dark sections.

- **Anatomy**: Portrait photograph with gradient overlay; attribution block with avatar icon, name, and role; quote text; "Read Story" link with arrow.
- **Surface**: Photographic background with purple, magenta, or orange gradient overlay; text in white with varying opacity for hierarchy.
- **Typography**: Attribution name uses body in white; role uses label in 70% white; quote uses body-large in white.
- **Shape**: 18px corner radius; consistent aspect ratio across cards.
- **Spacing**: 25px internal padding; attribution positioned at bottom-left with 9px spacing between elements.
- **Composition**: Three cards in horizontal row with 18px gaps; cards equal width.

### Statistics banner

Full-width promotional strip with global social proof.

- **Anatomy**: Headline with large number; four-column statistics grid; decorative globe illustration positioned right.
- **Surface**: Solid action purple (#3D0EBF) background; white and light purple text.
- **Typography**: Headline uses section-display in white; statistics use price-value in white; labels use body-small in ink-tertiary.
- **Shape**: 18px corner radius on container; globe illustration bleeds to edge with circular mask.
- **Spacing**: 60px vertical padding; 45px horizontal padding; statistics evenly distributed with 40px gaps.

### Button

Primary and secondary action triggers.

- **Anatomy**: Text label with optional arrow icon; contained or text-only variants.
- **Surface**: Primary uses action purple background with white text; secondary uses transparent with ink text and border.
- **Typography**: button token, 16px Roboto Medium.
- **Shape**: 14px corner radius for standard buttons; 13px for header variants; 10px for compact footer buttons.
- **Spacing**: 14px vertical padding, 25px horizontal padding for standard; 9px for compact.
- **States**: Hover darkens background to action-hover; focus adds border-default outline.

### Toggle switch

Segmented control for binary choices.

- **Anatomy**: Two-option pill container with sliding active indicator.
- **Surface**: White background with border-light; active segment uses white with subtle shadow.
- **Typography**: body-small, centered in each segment.
- **Shape**: Full pill (9999px radius) outer container; individual segments match.
- **Spacing**: 5px internal padding; 2px gap between segments.

### Footer directory

Multi-column link organization.

- **Anatomy**: Category headers with stacked link lists; "NEW" badge on recent additions.
- **Surface**: surface-light background; border-light top divider.
- **Typography**: Category headers use navigation token in ink-secondary, bold; links use body-small in ink-secondary.
- **Shape**: 10px corner radius on outer container; 18px corner radius on individual link buttons in lower section.
- **Spacing**: 45px vertical padding; 25px horizontal padding; 9px vertical spacing between links.
- **Composition**: Five equal columns; social and legal links in separate centered row above.

## Responsive behavior

The design targets desktop as the primary experience, with content constrained to a centered maximum-width container. Key responsive considerations for implementation:

- The three-column pricing grid should collapse to single-column on narrow viewports, with cards stacking vertically and the "POPULAR" ribbon repositioning to top-right.
- Footer directory columns should reflow from five-column to two-column, then single-column, maintaining category grouping.
- Hero headlines should scale down from 56px to preserve readability without excessive line breaks; section-display can reduce to heading-large size.
- Testimonial cards should scroll horizontally on mobile or stack with full-width treatment.
- The statistics banner globe illustration should hide or scale down on narrow screens to prevent text compression.
- Navigation should collapse to a hamburger menu with the same purple action color for the trigger.

Touch targets should maintain minimum 44px height for all interactive elements. The generous card padding (60px) can reduce to 25px on mobile to preserve screen real estate.

## Practical implementation guidance

### Preserve
- The distinctive yellow highlight underline on key headlines—implement as a background gradient with 40% vertical coverage, not a text-decoration underline.
- The heavy corner rounding (18px) on all card surfaces; this is a signature element.
- The purple-to-white contrast in pricing cards; the colored header band against white body creates clear hierarchy.
- The consistent use of Inter at 900 weight for all display text; lighter weights dilute the brand voice.
- The negative margin technique on stacked headings (-4px) for tight vertical rhythm.

### Avoid
- Adding drop shadows to cards that already have visible borders; the design uses one or the other, not both.
- Using the yellow accent for large background areas; it should remain a highlight and badge color only.
- Replacing the portrait gradient overlays with solid color blocks; the photographic texture with tint is intentional.
- Centering body text in long paragraphs; the design left-aligns virtually all text for readability.
- Using border-radius values smaller than 8px; the aesthetic is consistently soft.

### Recommended build order
1. Establish the typographic scale with Inter and Roboto loaded at all required weights.
2. Implement the container system with 1170px max-width and 45px side padding.
3. Build the pricing card component with its purple header, white body, and feature list structure.
4. Create the yellow highlight utility class for headline decoration.
5. Implement the dark section variant with black background and white text.
6. Add the testimonial card with gradient overlay system.
7. Build the footer directory with its five-column grid and category hierarchy.
8. Polish with toggle, button, and badge components.

### Accessibility
- Ensure the purple action color (#3D0EBF) on white meets WCAG AA contrast ratios; it may need adjustment for small text.
- The yellow highlight underline should not be the sole means of conveying importance; pair with weight or size changes.
- Dark sections with white text should maintain 4.5:1 minimum contrast; test the gradient-overlay testimonial cards specifically.
- Pricing card feature lists with help icons need accessible labels or tooltips for screen readers.
- The "POPULAR" ribbon should have text alternative or aria-label for non-visual users.
- Focus indicators should use the border-default color (#BDACFF) with 2px offset for visibility on both light and dark surfaces.

## Scope note

This guide covers the homepage and pricing page surfaces visible in the supplied images, including hero sections, pricing tables, testimonials, statistics banners, and footer directories. Navigation dropdowns, mobile menu states, form interactions, dashboard interfaces, and animation behaviors are not represented in the available material. The rounded corner values and spacing scale derive from direct interface measurement.
