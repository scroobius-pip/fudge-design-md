# How kode.diy is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/kode.diy-design)

Last updated: 2026-08-10

## Captured pages

[![Dark footer with oversized KODE wordmark logo and legal links on near-black background](https://pin.fontofweb.com/9991?format=jpg)](https://design.withfudge.com/share/pin-9991)

[Dark footer with oversized KODE wordmark logo and legal links on near-black background](https://design.withfudge.com/share/pin-9991)

[![Shop modules grid showing five product cards with rounded corners on warm beige background](https://pin.fontofweb.com/9990?format=jpg)](https://design.withfudge.com/share/pin-9990)

[Shop modules grid showing five product cards with rounded corners on warm beige background](https://design.withfudge.com/share/pin-9990)

[![Maker Module product detail page with breadcrumb, quantity stepper, and amber Add to cart button](https://pin.fontofweb.com/9989?format=jpg)](https://design.withfudge.com/share/pin-9989)

[Maker Module product detail page with breadcrumb, quantity stepper, and amber Add to cart button](https://design.withfudge.com/share/pin-9989)

[![Shop landing page with hero product card for Kode Dot device and modules section below](https://pin.fontofweb.com/9988?format=jpg)](https://design.withfudge.com/share/pin-9988)

[Shop landing page with hero product card for Kode Dot device and modules section below](https://design.withfudge.com/share/pin-9988)

## Overview

Kode DIY presents a hardware brand with a confident, tactile visual identity. The system centers on a warm beige canvas that evokes raw material and workshop surfaces, letting product photography of circuit boards and devices feel grounded rather than clinical. Dark near-black ink provides strong contrast for reading, while an amber accent punctuates calls to action with an energetic, maker-friendly warmth. The typography is bold and geometric, using DM Sans at heavy weights with tight tracking for headlines that feel engineered and precise. Rounded corners appear throughout at a consistent 24px scale, softening the technical subject matter into something approachable. The overall impression is of a premium but accessible tool brand—serious about hardware, friendly to newcomers.

## Colors

The palette is built around a warm neutral family with a single high-saturation accent. The beige tones create a continuous material world that unifies product photography with UI surfaces.

| token | value | use |
|---|---|---|
| canvas | #DED7CD | Primary page background; the warm beige seen across all pages |
| surface | #C2BAB0 | Product card backgrounds, elevated panels, and image backdrops |
| surface-light | #E8E8E8 | Footer text on dark backgrounds, subtle highlights |
| ink | #191919 | Primary text, headings, body copy, and header elements |
| ink-secondary | #4A4742 | Secondary text, descriptions, and muted content |
| ink-tertiary | #6E6A64 | Tertiary labels, captions, and de-emphasized information |
| muted | #C2BAB3 | Borders, dividers, and subtle separators |
| action | #FFAC00 | Primary buttons, add-to-cart actions, and focus indicators |
| action-glow | #FFAC00 | Focus ring shadow on interactive elements |
| footer-bg | #191919 | Footer background, creating a dark anchor at page bottom |
| footer-ink | #E8E8E8 | Footer text and links on the near-black footer |

The color logic follows a clear hierarchy: canvas and surface create depth through tonal layering, ink provides readable contrast across all surfaces, and action amber draws attention exclusively to purchase and conversion moments. The footer inverts this relationship, using dark ink as background and light surface as text for a definitive page close. Product photography with green circuit boards and white devices sits naturally against the warm neutrals without competing for attention.

## Typography

The system uses DM Sans 9 Pt as the primary type family across all text roles, with Applesystem appearing as a secondary family in system-level contexts. Weight and size create hierarchy rather than mixing families. The bold, geometric character of DM Sans at heavy weights reinforces the engineered, hardware brand personality.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | DM Sans 9 Pt | 6rem | 800 | 1 | -0.025em | Homepage hero headlines, maximum impact moments |
| section-display | DM Sans 9 Pt | 3.75rem | 800 | 1 | -0.025em | Major section headings, product page titles |
| sub-section-display | DM Sans 9 Pt | 2.25rem | 800 | 1.11 | -0.025em | Secondary headlines, feature section headers |
| heading | DM Sans 9 Pt | 1.5rem | 700 | 1.33 | -0.025em | Card titles, module names, subheadings |
| body | DM Sans 9 Pt | 1rem | 400 | 1.5 | 0 | Default paragraph text, descriptions |
| body-large | DM Sans 9 Pt | 1.125rem | 400 | 1.56 | 0 | Lead paragraphs, introductory copy |
| body-small | DM Sans 9 Pt | 0.875rem | 400 | 1.43 | 0 | Footer text, captions, fine print |
| label | DM Sans 9 Pt | 0.875rem | 600 | 1.43 | 0 | Button text, badges, emphasized small text |
| price | DM Sans 9 Pt | 1.125rem | 700 | 1.56 | 0 | Product prices, monetary values |
| navigation | DM Sans 9 Pt | 1.5rem | 700 | 1.33 | 0 | Breadcrumb navigation, active nav items |

The type scale is built on a 2px grid, with sizes stepping in clean multiples. Display sizes use ExtraBold (800) weight with negative tracking for a tight, impactful presence. Body text remains Regular (400) for extended reading comfort. The 16px base with 24px line height provides a comfortable 1.5 ratio for standard content. Applesystem appears at 14px in limited system contexts, serving as a fallback for interface elements outside the main content flow.

Verify licensing for these families before production use.

## Layout

The layout system uses generous horizontal margins and substantial vertical breathing room to let hardware photography command attention. Content is centered with asymmetric outer margins that create a framed, editorial quality.

The header sits at the top with a logo mark, breadcrumb navigation, and utility actions. It uses horizontal padding of 48px and an inner content width capped by 180px side margins. The main content area follows a similar outer padding of 48px, with interior content constrained to narrower maximum widths for readability—404px for focused content like product details, and wider 180px-margin containers for general sections.

Vertical rhythm is pronounced. Major sections carry 192px top and bottom padding on the homepage, compressing to 96px on interior pages like the shop. Between sections, 64px to 96px margins create clear separation. Product grids use 20px gaps between cards, while feature layouts employ 40px to 64px column gaps for side-by-side imagery and text.

The footer breaks the warm palette with a full-width dark band, using 32px vertical padding and the same 180px content margins as the header for visual continuity.

## Visual language

The visual language balances technical credibility with approachable warmth. Product photography dominates—circuit boards, modules, and the Kode Dot device are shot with soft shadows against the warm surface color, making hardware feel tactile and desirable. Cards serve as the primary content container, with consistent 24px rounding that echoes the friendly curves of the product itself.

Iconography appears minimal and functional—small SVG marks for shipping status, Kickstarter backers, and cart actions. These inherit the text color of their context, remaining subtle rather than decorative.

The KODE wordmark in the footer uses an oversized, custom rounded letterform that fills horizontal space as a brand signature. This graphic treatment contrasts with the precise DM Sans of the UI, creating a hierarchy between brand expression and functional text.

Shadows are restrained. The only visible shadow treatment is an amber glow on focused or active buttons—a 4px spread of #FFAC00 that creates a halo effect without heavy elevation. No drop shadows appear on cards, keeping the interface flat and material-honest.

## Components

### Product card

Product cards are the core merchandising component, appearing in grids on the shop page.

- **Anatomy**: A rounded rectangle containing a product image, price label at top-left, and product name at bottom-left.
- **Surface**: Background color `{colors.surface}` with no border.
- **Typography**: Price uses `{typography.price}` in ink color; product name uses `{typography.heading}` in ink.
- **Shape**: Border radius of `{rounded.card}` (24px).
- **Spacing**: Padding of `{spacing.card-padding}` (20px) internally; 20px gap between cards in the grid.
- **Composition**: Image fills the card area with object-fit containment; text sits at edges with clear space.

### Hero product card

A larger variant for featured products, spanning wider than standard cards.

- **Anatomy**: Expanded card with larger product image, title, description, price, and action buttons arranged horizontally.
- **Surface**: Same `{colors.surface}` background.
- **Typography**: Title uses `{typography.section-display}`; description uses `{typography.body}` in ink-secondary; price uses `{typography.price}` at larger effective size.
- **Shape**: Border radius of `{rounded.card}`.
- **Spacing**: Internal padding of 40px; content split between image area and text area with 64px gap.
- **Composition**: Image left, content right on desktop; vertical stack implied for narrower contexts.

### Primary button

The main conversion action, appearing in amber.

- **Anatomy**: Pill-shaped button with label text, optionally with leading icon.
- **Surface**: Background `{colors.action}`; text `{colors.ink}`.
- **Typography**: `{typography.label}` at 14px/600.
- **Shape**: Full pill with `{rounded.button}` (9999px radius).
- **Spacing**: Padding of 14px vertical, 40px horizontal; 8px gap between icon and text.
- **States**: Focus state shows `{colors.action-glow}` as a 4px box shadow spread.

### Quantity stepper

A compact control for adjusting purchase quantity.

- **Anatomy**: Horizontal row with minus button, numeric value, and plus button.
- **Surface**: Background `{colors.canvas}` with `{colors.muted}` border.
- **Typography**: `{typography.body}` for the numeric value.
- **Shape**: Rounded rectangle with `{rounded.input}`.
- **Spacing**: Compact horizontal padding.

### Footer

The page-closing component with brand presence and legal links.

- **Anatomy**: Full-width dark band containing oversized KODE wordmark, legal links row, and manufacturer information.
- **Surface**: Background `{colors.footer-bg}`; text `{colors.footer-ink}`.
- **Typography**: Legal links use `{typography.body-small}`; manufacturer details use same at smaller effective size.
- **Spacing**: 32px vertical padding; 48px horizontal padding; 180px content margins.
- **Composition**: Wordmark dominates left side; links and legal text cluster right.

### Breadcrumb navigation

Contextual wayfinding above product pages.

- **Anatomy**: Horizontal path showing home, category, and current page.
- **Typography**: `{typography.navigation}` for active/current item; `{typography.body}` for ancestors.
- **Composition**: Inline with slash separators; left-aligned below header.

## Responsive behavior

The system shows a desktop-first approach with substantial fixed-width constraints. The narrowest content containers (404px effective width) suggest a centered single-column treatment that would stack naturally on smaller viewports. Product grids currently show three columns on the shop page, which should collapse to two and then one column as viewport narrows.

Header navigation compresses to a minimal set on interior pages, with the full navigation implied for homepage contexts. The oversized footer wordmark should scale down proportionally to avoid overwhelming mobile screens.

Typography scales should maintain hierarchy: hero display at 96px is appropriate for large screens but should step down to 60px and then 48px on smaller viewports to preserve line integrity. Touch targets for buttons and stepper controls should maintain minimum 44px tap areas when adapted.

## Practical implementation guidance

### Preserve
- The warm beige canvas as the default page background; it is the system's most distinctive quality.
- Generous rounded corners at 24px for all card-like containers.
- Heavy DM Sans weights (700-800) for all display and heading text with tight negative tracking.
- The amber #FFAC00 as the sole accent, reserved exclusively for primary actions.
- High contrast between ink and canvas for all body text.
- The dark footer inversion as a strong page anchor.

### Avoid
- Adding drop shadows to cards or containers; the flat material approach is intentional.
- Introducing additional accent colors; the amber alone carries conversion energy.
- Using thin font weights; the brand voice is bold and confident.
- Tightening vertical spacing; the generous rhythm is part of the premium feel.
- Placing text directly on product photography; always use the surface card as intermediary.

### Recommended build order
1. Establish the canvas background and DM Sans font loading.
2. Implement the type scale with exact sizes and weights.
3. Build the product card component with surface background and 24px radius.
4. Create the primary button with amber fill and pill shape.
5. Assemble the header with logo, breadcrumb, and utility actions.
6. Construct the footer with dark inversion and wordmark treatment.
7. Add the hero product card for featured merchandising.
8. Implement quantity stepper and fine interactive details.

### Accessibility
- Maintain minimum 4.5:1 contrast for all body text; the ink on canvas pairing exceeds this.
- Ensure the amber action button has sufficient contrast against its text; the dark ink on amber meets WCAG AA for large text.
- Provide visible focus states using the amber glow shadow already present in the system.
- Consider focus indicators for the quantity stepper controls, which currently appear as minimal buttons.
- Add aria-labels to icon-only buttons like the cart and search triggers.

## Scope note

This guide covers the shop and product detail surfaces of kode.diy, including the footer, product cards, hero merchandising, and primary actions. Homepage sections beyond the shop, mobile navigation patterns, checkout flows, and motion or hover behaviors are not represented in the supplied material. The spacing and sizing values reflect the desktop viewport captured.
