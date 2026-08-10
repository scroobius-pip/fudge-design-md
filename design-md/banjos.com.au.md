# How banjos.com.au is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/banjos.com.au-design)

Last updated: 2026-08-10

## Captured pages

[![Donuts menu page showing product grid cards with item names, prices, availability times, star ratings, and gray ADD buttons alongside product photography on a clean white](https://pin.fontofweb.com/2133?format=jpg)](https://design.withfudge.com/share/pin-2133)

[Donuts menu page showing product grid cards with item names, prices, availability times, star ratings, and gray ADD buttons alongside product photography on a clean white](https://design.withfudge.com/share/pin-2133)

[![Empty cart modal with centered shopping bag icon, bold heading, muted subtext, and rounded white panel with soft shadow overlaying the page header.](https://pin.fontofweb.com/2132?format=jpg)](https://design.withfudge.com/share/pin-2132)

[Empty cart modal with centered shopping bag icon, bold heading, muted subtext, and rounded white panel with soft shadow overlaying the page header.](https://design.withfudge.com/share/pin-2132)

[![Sign-in modal featuring Banjo's green circular logo, email and password input fields, dark green CONTINUE button, light green mobile sign-in option, and centered OR divider.](https://pin.fontofweb.com/2131?format=jpg)](https://design.withfudge.com/share/pin-2131)

[Sign-in modal featuring Banjo's green circular logo, email and password input fields, dark green CONTINUE button, light green mobile sign-in option, and centered OR divider.](https://design.withfudge.com/share/pin-2131)

[![Homepage hero with colorful circular category icons in two rows, VALUE DEALS product cards with star ratings and ADD buttons, and a franchisee promotional banner with warm bakery](https://pin.fontofweb.com/2130?format=jpg)](https://design.withfudge.com/share/pin-2130)

[Homepage hero with colorful circular category icons in two rows, VALUE DEALS product cards with star ratings and ADD buttons, and a franchisee promotional banner with warm bakery](https://design.withfudge.com/share/pin-2130)

## Overview

Banjo's Bakery Cafe presents a warm, inviting online ordering experience that balances the rustic charm of an Australian bakery with the clarity expected of modern e-commerce. The interface centers on a clean white canvas that lets food photography and colorful category icons take visual priority. Earthy green tones anchor the brand identity, appearing in the logo, primary actions, and selected navigation states, while a spectrum of warm, appetizing colors distinguishes the ten product categories through circular icon badges.

The design prioritizes scannability and quick decision-making. Product information is densely organized in card grids with consistent alignment: item names, prices, availability windows, star ratings, and action buttons follow predictable patterns. The homepage introduces the menu through a visually engaging icon row that doubles as navigation, followed by promotional value deals and a franchisee recruitment banner that adds brand storytelling. Typography relies on a classic serif family that reinforces the bakery's traditional, handcrafted positioning without sacrificing digital readability.

## Colors

The color system builds from a restrained neutral foundation with strategic green accents and a vibrant category palette. The white canvas maximizes contrast for food photography, while muted grays handle secondary information and borders. The earthy green carries brand recognition across logos, primary buttons, and active states.

| token | value | use |
|---|---|---|
| canvas | #FFFFFF | Page background, modal surfaces, card backgrounds, input fields |
| ink | #000000 | Primary text, headings, product names, navigation labels |
| muted-ink | #5C5C5C | Secondary text, prices, availability times, placeholder text |
| surface | #F5F5F5 | Search bar background, subtle hover states |
| action-primary | #5A7A5A | Primary buttons, active navigation pills, logo circle background |
| action-primary-hover | #4A6A4A | Darker green for button hover states |
| action-secondary | #E8F5E8 | Light green backgrounds for alternative actions |
| border | #E0E0E0 | Card borders, input borders, dividers, subtle separators |
| star-accent | #D4A843 | Rating stars, category icon accents |
| category-savouries | #A0522D | Savouries category icon background |
| category-hot-beverages | #4A3728 | Hot Beverages category icon background |
| category-iced-beverages | #B8B88A | Iced Beverages category icon background |
| category-donuts | #B8A0B8 | Donuts category icon background |
| category-sweets | #8B2D3B | Sweets category icon background |
| category-salad | #8A9A6A | Salad category icon background |
| category-bread | #8B7D6B | Bread category icon background |
| category-breakfast | #D4A843 | Breakfast category icon background |
| category-cold-beverages | #6B7B7B | Cold Beverages category icon background |
| category-platters | #5A7A5A | Platters category icon background |

The green accent family creates cohesion between the brand mark and interactive elements. Light and dark green pairings appear in the sign-in modal, where the CONTINUE button uses the deep green while the mobile alternative sits on a pale mint surface. Category icons introduce warmth and variety through terracotta, burgundy, mustard, and sage tones that suggest the flavors within each section. Star ratings use a golden yellow that reads as appetizing and trustworthy. The overall palette avoids cool blues in favor of tones that evoke baked goods, fresh ingredients, and cafe warmth.

## Typography

The type system employs a single serif family across all roles, creating consistency that reinforces the bakery's traditional, handcrafted brand positioning. Weights remain in the regular range; hierarchy is established through size and spacing rather than boldness.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Georgia, serif | 2.5rem | 400 | 1.2 | -0.01em | Franchisee banner headlines, major page titles |
| section-display | Georgia, serif | 1.5rem | 400 | 1.3 | 0em | Section headings like "VALUE DEALS", "ORDER" |
| body | Georgia, serif | 1rem | 400 | 1.5 | 0em | Product names, descriptions, modal body text |
| body-small | Georgia, serif | 0.875rem | 400 | 1.5 | 0em | Prices, availability times, secondary details |
| label | Georgia, serif | 0.75rem | 400 | 1.4 | 0.02em | Category icon captions, badge text, small labels |
| navigation | Georgia, serif | 0.875rem | 400 | 1.5 | 0em | Menu category tabs, header utility links |
| button-primary | Georgia, serif | 0.875rem | 400 | 1.5 | 0.05em | All-caps button labels: ADD, CONTINUE, SIGN IN |

The serif face carries an editorial quality that distinguishes Banjo's from generic food-delivery platforms. Uppercase treatment on buttons adds functional clarity without requiring weight changes. Tracking on button text improves legibility at small sizes with all-caps styling. The hero display size supports the franchisee banner's promotional impact, while section display creates clear content boundaries on the homepage. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with generous whitespace that prevents the dense product information from feeling cramped. The homepage opens with a full-width header bar containing the logo, search field, location selector, and utility actions. Below this, content aligns to a consistent maximum width with comfortable margins.

The category navigation occupies a prominent horizontal band with circular icons arranged in a wrapping row. Icons measure 5rem in diameter with 1rem gaps, creating touch-friendly targets that read as a visual menu rather than buried navigation. Labels sit directly below each icon in centered alignment. The icon grid wraps naturally, with the second row starting flush left when categories exceed the viewport width.

Product grids use a two-column layout on the donuts page, with cards spanning equal widths and maintaining consistent internal structure: text content on the left, product image on the right, action button below the image. This asymmetric card layout prioritizes scanning—users read names and prices before encountering the visual confirmation of the product photo. Card padding of 1rem creates breathing room without excessive spacing.

The VALUE DEALS section on the homepage presents three cards in a horizontal row with 1.5rem gaps. Each card stacks an image, title, price, and button vertically. Below this, the franchisee banner breaks the grid with full-bleed photography and overlaid text positioned in the left third, leaving the right two-thirds for the atmospheric bakery image.

Modals center in the viewport with a semi-transparent backdrop, using a fixed width that accommodates comfortable reading line lengths. The cart modal is compact, while the sign-in modal expands to fit form fields and stacked action buttons.

## Visual language

The visual language balances digital commerce conventions with bakery warmth. Photography shows products in appetizing, well-lit conditions with shallow depth of field that suggests freshness and quality. Food images sit in rounded rectangles within cards, while the franchisee banner uses full-bleed photography with a subtle dark overlay to ensure white text legibility.

Circular category icons create a distinctive navigation pattern that feels more playful and tactile than standard text tabs. Each circle contains a simple white line icon against its category color, with the label beneath providing clear identification. The circles' uniform size and consistent icon weight create rhythm across the row, while color variation prevents monotony.

Shadow usage is restrained and functional. Modals employ a soft, diffuse shadow that separates them from the page without harsh edges. Cards rely on borders rather than shadows for definition, maintaining a flatter aesthetic that keeps focus on content. The empty cart modal's shopping bag icon sits in a light gray circle, creating a gentle visual anchor that signals state without alarm.

The brand mark appears as a circular green badge with white script lettering and a small croissant icon, reinforcing the bakery identity at key moments like authentication. This circular motif echoes the category icons, creating visual coherence between brand and interface elements.

## Components

### Product Card

Product cards form the core browsing unit across menu pages. Each card presents a horizontal layout with text content on the left and product imagery on the right.

- **Anatomy**: Product name, price, availability window, star rating with numeric value, "New" badge when applicable, product photograph, ADD button
- **Surface**: White background with 1px #E0E0E0 border, 0.75rem border radius
- **Typography**: Product name uses body token; price and availability use body-small; rating uses body-small with star-accent icon
- **Shape**: 0.75rem rounded corners
- **Spacing**: 1rem internal padding, 1.5rem gap between cards in grid
- **Composition**: Text block left-aligned, image right-aligned with fixed proportions, ADD button below image
- **Variants**: Some cards show "New" pill badge; multi-item packs omit individual ratings

### Category Icon

Circular navigation elements that serve as the primary menu discovery mechanism on the homepage.

- **Anatomy**: 5rem diameter circle, white line icon, category label below
- **Surface**: Solid category color with white icon; label in ink color on white background
- **Typography**: Label token for category name
- **Shape**: Perfect circle (50% border radius)
- **Spacing**: 1rem gap between icons, 0.5rem between icon and label
- **Composition**: Centered icon within circle, centered label below
- **Variants**: Active state uses action-primary green; ten distinct color backgrounds for categories

### Primary Button

Used for main actions throughout the ordering flow.

- **Anatomy**: Text label with optional icon
- **Surface**: action-primary background, canvas text
- **Typography**: button-primary token with uppercase treatment
- **Shape**: 0.5rem border radius
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Variants**: Full-width in modals; compact in product cards

### Secondary Button

Alternative action style for less prominent choices.

- **Anatomy**: Text label
- **Surface**: action-secondary background, action-primary text
- **Typography**: button-primary token
- **Shape**: 0.5rem border radius
- **Spacing**: Matches primary button
- **Use**: Mobile sign-in option, alternative actions

### Input Field

Form controls for authentication and search.

- **Anatomy**: Text input with placeholder, optional icon button
- **Surface**: surface background, border bottom or full border in border color
- **Typography**: body token for input text, body-small for placeholder
- **Shape**: 0.5rem border radius for contained inputs
- **Spacing**: 0.75rem vertical padding, 1rem horizontal padding
- **Variants**: Search bar spans header width; modal inputs stack vertically with 1rem gaps

### Modal

Overlay panels for authentication, cart, and system messages.

- **Anatomy**: Close button top-right, centered content, stacked actions
- **Surface**: canvas background, 1rem border radius, soft shadow
- **Typography**: section-display for headings, body for descriptions
- **Shape**: 1rem rounded corners
- **Spacing**: 2rem internal padding
- **Composition**: Centered layout with consistent vertical rhythm
- **Variants**: Compact for empty states; expanded for forms with multiple fields

### Navigation Pill

Active state indicator for category tabs.

- **Anatomy**: Text label with rounded background
- **Surface**: action-primary background, canvas text
- **Typography**: navigation token
- **Shape**: 9999px border radius for full pill
- **Spacing**: 0.5rem vertical padding, 1rem horizontal padding

## Responsive behavior

The design should maintain its two-column product grid on tablet viewports, transitioning to a single column on narrow screens where horizontal card layouts would compress poorly. Category icons should wrap naturally, with horizontal scrolling as an alternative if wrapping disrupts the visual rhythm on very small screens.

The franchisee banner's text overlay should stack above the image on narrow viewports, with the "Learn more" button expanding to full width. Modal widths should adapt to viewport constraints, maintaining comfortable margins without becoming edge-to-edge.

Search and utility actions in the header should collapse into a consolidated menu or icon row on mobile, preserving access to location selection and cart status. The ADD buttons on product cards may expand to full card width on mobile for easier touch interaction.

## Practical implementation guidance

### Preserve
- The serif typography throughout; it is central to the brand's handcrafted positioning
- Circular category icons with their distinct color palette; this navigation pattern is visually distinctive
- The asymmetric product card layout with text left and image right
- The restrained green accent system; avoid introducing competing primary colors
- The uppercase button treatment for all action labels

### Avoid
- Replacing category circles with standard text tabs or dropdown menus
- Using bold weights for hierarchy; the design relies on size and spacing instead
- Adding heavy shadows to cards; the flat-bordered aesthetic is intentional
- Cool blues or purples that would clash with the warm bakery palette
- Shrinking category icons below 3rem touch targets on any viewport

### Recommended Build Order
1. Establish the color tokens and typography scale with the serif family
2. Build the header with logo, search, location, and utility actions
3. Implement category icon component with all ten color variants
4. Create product card with horizontal layout and all metadata elements
5. Construct grid system for two-column menu pages
6. Add modal system with backdrop and centered panel
7. Implement form inputs and button variants
8. Build homepage sections: category row, value deals, franchisee banner

### Accessibility
- Ensure category icon colors meet contrast requirements for white icons; the darker backgrounds (hot beverages, sweets) likely pass, while lighter backgrounds (iced beverages, donuts) may need adjusted icon colors or darker variants
- Provide text alternatives for all category icons beyond the visible labels
- Maintain visible focus indicators on green buttons; the default browser outline may be insufficient against the action-primary background
- Consider increasing body-small text to 1rem if user zoom is common, as 0.875rem approaches minimum comfortable size
- Ensure the franchisee banner's white text maintains contrast against the photographic background; a subtle dark gradient overlay is recommended

## Scope note

This guide covers the online ordering interface for Banjo's Bakery Cafe as visible on the homepage and donuts menu page. It does not include checkout flow, account management beyond sign-in, nutritional detail pages, or store locator functionality. Motion, loading states, and mobile-specific layouts are not represented in the supplied material. Measurements are practical adaptation targets derived from visible interface proportions.
