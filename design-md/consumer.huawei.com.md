# How consumer.huawei.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/consumer.huawei.com-design)

Last updated: 2026-08-10

## Captured pages

[![Four-column product comparison grid showing HUAWEI wearables with pricing, Learn More buttons, and spec icons for screen size, weight, calling, and water resistance.](https://pin.fontofweb.com/10654?format=jpg)](https://design.withfudge.com/share/pin-10654)

[Four-column product comparison grid showing HUAWEI wearables with pricing, Learn More buttons, and spec icons for screen size, weight, calling, and water resistance.](https://design.withfudge.com/share/pin-10654)

[![WATCH FIT Series section with tab navigation, large product video hero, and cookie consent banner with Accept button.](https://pin.fontofweb.com/10653?format=jpg)](https://design.withfudge.com/share/pin-10653)

[WATCH FIT Series section with tab navigation, large product video hero, and cookie consent banner with Accept button.](https://design.withfudge.com/share/pin-10653)

[![Page top with global navigation, category icon row, HUAWEI WATCH FIT 5 Pro hero with pricing and dual CTA buttons, and WATCH Ultimate Series heading.](https://pin.fontofweb.com/10652?format=jpg)](https://design.withfudge.com/share/pin-10652)

[Page top with global navigation, category icon row, HUAWEI WATCH FIT 5 Pro hero with pricing and dual CTA buttons, and WATCH Ultimate Series heading.](https://design.withfudge.com/share/pin-10652)

## Overview

The HUAWEI consumer site presents a product-first ecommerce experience built around large, immersive imagery and clear transactional pathways. The visual system prioritizes the products themselves—wearables rendered in high fidelity against minimal backgrounds—while using typography and spacing to create clear information hierarchy. The design language is restrained and confident: a near-monochrome palette with selective red accents, generous whitespace, and a single sans-serif type family that scales from small UI labels to large section headings without losing clarity.

The architecture follows a predictable pattern: global navigation at the top, category wayfinding through icon-based tabs, hero sections with product imagery and pricing, and detailed comparison grids that let shoppers evaluate specifications side by side. Every section maintains the same light canvas and high-contrast text, ensuring that product photography remains the focal point. The system feels designed for conversion—prices, payment plans, and call-to-action buttons are consistently positioned and immediately scannable.

## Colors

The palette is intentionally limited, built on a foundation of pure black and white with a single warm neutral canvas and one red accent. This restraint keeps attention on product photography while providing enough tonal range for hierarchy.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, primary button backgrounds, active navigation states |
| ink-muted | #666666 | Secondary text, crossed-out original prices, specification labels |
| ink-tertiary | #7F7F7F | Tertiary information, disabled or less prominent labels |
| canvas | #F1F3F5 | Page background, section backgrounds behind white cards |
| surface | #FFFFFF | Card backgrounds, button text on dark surfaces, cookie banner |
| accent | #CE0E2D | "NEW" badges, sale indicators, critical highlights |
| border | #B2B2B2 | Subtle dividers, inactive tab borders |

The system operates in light mode exclusively across the visible surfaces. Product photography introduces warm oranges, browns, and metallics that contrast against the cool neutral canvas, creating visual interest without requiring additional UI colors. Text on dark backgrounds—such as the cookie consent banner—uses white for legibility. The red accent appears sparingly, reserved for promotional labels and transactional urgency rather than decorative elements.

## Typography

The type system is built on Manrope, a geometric sans-serif that provides clean legibility across weights. Manrope carries all visible heading, body, and UI text. The system font -apple-system appears in the computed stack as a platform fallback but does not serve as a primary design face. The hierarchy is established through weight and size rather than style variation, with Bold reserved for headings and display sizes, Medium for UI elements and prices, and Regular for body content.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Manrope | 3rem | 700 | 1.25 | 0em | Page titles, major section headings like "Which Wearable Best Suits You?" |
| section-display | Manrope | 2.5rem | 700 | 1.25 | 0em | Series headings like "WATCH Ultimate Series" |
| section-heading | Manrope | 1.75rem | 500 | 1.25 | 0em | Subseries titles, product names in hero sections |
| body | Manrope | 0.875rem | 400 | 1.6 | 0em | Descriptions, specifications, general content |
| body-medium | Manrope | 0.875rem | 500 | 1.25 | 0em | Button labels, prices, emphasized body text |
| label | Manrope | 0.75rem | 700 | 1.6 | 0.025em | "NEW" badges, category tags, small uppercase labels |
| navigation | Manrope | 0.8125rem | 500 | 1.6 | 0em | Top nav items, tab labels, breadcrumb links |
| price | Manrope | 0.875rem | 500 | 1.25 | 0em | Pricing, payment plan details |

Verify licensing for these families before production use. No attribution claims are supported for Manrope or -apple-system in the supplied data.

## Layout

The layout follows a centered, contained model with generous horizontal padding on large viewports. The main content area sits within a maximum width, creating consistent margins that frame the product imagery.

**Grid and containment.** The page uses a full-width canvas with an inner content container. Comparison sections employ a four-column grid for product cards, with equal-width columns and consistent gutters. Hero sections use a single centered column for product focus, while tab-based category navigation spans the full content width.

**Section rhythm.** Vertical spacing between major sections is substantial—typically 5rem or more—creating clear separation between product families. Within sections, component spacing tightens to 1rem for related elements like product names and prices.

**Navigation architecture.** Two navigation layers are visible: a global top bar with store categories (Store, Smartphone, Wearable, PC, Tablet, Audio, Router, AppGallery) and utility links (Support, Retail Store, Community, Business), plus a secondary category tab row specific to the current section (WATCH Ultimate Series, WATCH Series, WATCH GT Series, WATCH FIT Series, etc.). The active tab receives an underline indicator.

**Responsive considerations.** The four-column comparison grid should collapse to two columns on medium viewports and single column on small screens. The global navigation should compress to a hamburger menu on mobile, with the category tab row becoming horizontally scrollable.

## Visual language

The visual character is clean, modern, and commercially direct. Surfaces are flat and untextured, with no gradients or decorative backgrounds beyond the subtle warm gray canvas. Product photography is the primary visual element, rendered large and centered with minimal framing.

**Imagery treatment.** Product renders appear against pure white or transparent backgrounds, allowing them to float cleanly on the canvas. Hero sections use oversized product photography that dominates the viewport. Video content in series sections uses rounded corners and subtle shadow to distinguish it from the page background.

**Iconography.** Simple line icons represent product specifications—screen size, weight, calling capability, water resistance—rendered in the muted ink color at a consistent stroke weight. These icons are small, schematic, and functional rather than decorative.

**Shadow and depth.** Minimal shadow usage: a subtle `0px 4px 20px rgba(0,0,0,0.12)` appears on elevated elements like cookie banners or floating UI, while product cards and comparison cells remain flat against the canvas.

**Corner treatment.** Most elements use square corners or minimal rounding. Buttons have slight rounding, while cards and containers are predominantly rectangular. Pill-shaped buttons appear for specific CTA styles.

## Components

### Global navigation

- **Anatomy:** Logo left, primary category links center-left, utility links right, with search, cart, and account icons.
- **Surface:** Transparent or white background, black text, red logo mark.
- **Typography:** `{typography.navigation}` for all items.
- **Spacing:** Compact horizontal padding, full-width bar with contained inner content.
- **Composition:** Flex row with space-between alignment; utility icons grouped at the far right.

### Category tab row

- **Anatomy:** Horizontal scrollable row of text links, with active state indicated by underline.
- **Surface:** Transparent background, black text for active item, muted ink for inactive.
- **Typography:** `{typography.navigation}`.
- **Spacing:** Even horizontal distribution with adequate tap targets.
- **States:** Active tab has a 1px bottom border in black; inactive tabs have no decoration.

### Product hero card

- **Anatomy:** Product name, tagline, pricing block with original price struck through, payment plan, and dual CTA buttons.
- **Surface:** White card on gray canvas, or full-bleed white section.
- **Typography:** `{typography.section-heading}` for product name, `{typography.body}` for tagline, `{typography.price}` for pricing, `{typography.body-medium}` for buttons.
- **Shape:** Square corners, no border.
- **Spacing:** Generous vertical padding around product image; tight vertical stack for text and buttons below.
- **Composition:** Centered alignment for all elements; product image significantly larger than text block.

### Primary button

- **Anatomy:** Text label with optional icon.
- **Surface:** Black background, white text.
- **Typography:** `{typography.body-medium}`.
- **Shape:** Slight rounded corners.
- **Spacing:** Comfortable padding for clickability.
- **Variants:** Full-width in comparison grids; inline in hero sections.

### Secondary button

- **Anatomy:** Text label, often "Buy ›" with chevron.
- **Surface:** White background, black text, optional black border.
- **Typography:** `{typography.body-medium}`.
- **Shape:** Matching primary button rounding.

### Product comparison grid

- **Anatomy:** Four columns with product image, "NEW" badge, product name, pricing, "Learn More" button, "Buy ›" link, and stacked specification rows with icons.
- **Surface:** White cards on gray canvas, or direct on white with subtle separators.
- **Typography:** `{typography.label}` for badges, `{typography.section-heading}` for names, `{typography.price}` for pricing, `{typography.body}` for specs.
- **Shape:** Square corners; specification rows separated by consistent vertical spacing.
- **Spacing:** Generous gutter between columns; consistent vertical rhythm within each column.
- **Composition:** Top-aligned product images; text and buttons center-aligned below; specification icons centered above labels.

### Specification row

- **Anatomy:** Icon, primary value in bold, secondary description in muted text.
- **Surface:** Transparent, inheriting card or page background.
- **Typography:** `{typography.section-heading}` for values like "30.4 g", `{typography.body}` for descriptions.
- **Composition:** Vertically stacked icon, value, and description; center-aligned within column.

### Cookie consent banner

- **Anatomy:** Text notice with "Cookie Policy" link, "Accept" button, close "×" button.
- **Surface:** White background, subtle top shadow.
- **Typography:** `{typography.body}` for notice text, `{typography.body-medium}` for button.
- **Shape:** Full-width bar fixed to viewport bottom.
- **Composition:** Text left-aligned, actions right-aligned.

## Responsive behavior

The visible layouts are desktop-focused. Based on the component structures, the following responsive adaptations are recommended:

- The four-column comparison grid should become two columns at tablet widths and single column on mobile, with horizontal scrolling or accordion expansion as alternatives.
- Category tab rows should become horizontally scrollable on narrow viewports to maintain touch accessibility.
- Product hero images should scale down proportionally, maintaining centered alignment.
- Global navigation should collapse to a hamburger menu with the category links moving to a drawer or dropdown.
- Cookie banner should stack text and buttons vertically on very narrow screens.

## Practical implementation guidance

### Preserve
- The high-contrast black-on-white typography for all primary content.
- The single type family (Manrope) across all weights and sizes.
- The generous whitespace around product imagery—this is central to the premium feel.
- The consistent placement of pricing, payment plans, and dual CTAs in hero sections.
- The four-column comparison pattern with icon-driven specifications.

### Avoid
- Adding decorative gradients, textures, or background patterns that compete with product photography.
- Using the red accent for non-promotional elements—reserve it for badges and urgency.
- Reducing the size of product images in hero sections; they should remain dominant.
- Introducing additional typefaces or decorative serif pairings.
- Making specification icons too large or colorful; they should remain subtle and functional.

### Recommended build order
1. Establish the color tokens and type scale with Manrope at all defined sizes.
2. Build the global navigation and category tab row as shared shell components.
3. Create the product hero card with image, text stack, pricing, and dual buttons.
4. Implement the comparison grid with four-column layout and specification rows.
5. Add the cookie consent banner as a fixed bottom element.
6. Apply responsive breakpoints, collapsing the grid and navigation appropriately.

### Accessibility
- Ensure all product images have descriptive alt text including model names.
- Maintain sufficient color contrast: black on white exceeds WCAG AAA; verify that muted gray text on white meets AA for small text.
- Make category tabs keyboard-navigable with visible focus indicators.
- Provide aria-labels for icon-only buttons in the global navigation.
- Ensure the cookie banner does not trap keyboard focus and can be dismissed via keyboard.

## Scope note

This guide covers the HUAWEI wearables product listing and comparison surfaces on the UAE English locale. It does not include mobile-specific layouts, checkout flows, account pages, or dark mode variants. Motion, hover states, and loading skeletons are not documented. Measurements reflect the visible desktop implementation.
