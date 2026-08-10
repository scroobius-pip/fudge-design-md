# How www2.hm.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/www2.hm.com-design)

Last updated: 2026-08-10

## Captured pages

[![Men's graphic tees category page with bold uppercase page title, horizontal subcategory filter pills, and four-column product grid with model photography on light gray backgrounds](https://pin.fontofweb.com/7952?format=jpg)](https://design.withfudge.com/share/pin-7952)

[Men's graphic tees category page with bold uppercase page title, horizontal subcategory filter pills, and four-column product grid with model photography on light gray backgrounds](https://design.withfudge.com/share/pin-7952)

[![Men's t-shirts and tops category page showing selected filter pill state, product grid with varied styles including polo and boxy fits, and consistent e-commerce layout structure](https://pin.fontofweb.com/7951?format=jpg)](https://design.withfudge.com/share/pin-7951)

[Men's t-shirts and tops category page showing selected filter pill state, product grid with varied styles including polo and boxy fits, and consistent e-commerce layout structure](https://design.withfudge.com/share/pin-7951)

[![Product grid section showing oversized cotton t-shirts with color swatch indicators, heart wishlist icons, and clean product information with pricing](https://pin.fontofweb.com/7950?format=jpg)](https://design.withfudge.com/share/pin-7950)

[Product grid section showing oversized cotton t-shirts with color swatch indicators, heart wishlist icons, and clean product information with pricing](https://design.withfudge.com/share/pin-7950)

[![Campaign editorial layout with serif headline 'The oversized boxy fit', descriptive subtext, and asymmetric two-column composition with large hero image and four-image grid](https://pin.fontofweb.com/7949?format=jpg)](https://design.withfudge.com/share/pin-7949)

[Campaign editorial layout with serif headline 'The oversized boxy fit', descriptive subtext, and asymmetric two-column composition with large hero image and four-image grid](https://design.withfudge.com/share/pin-7949)

## Overview

H&M's digital storefront presents a restrained, fashion-forward e-commerce experience built around photography and bold typography. The system prioritizes product imagery through generous grid layouts while maintaining navigational clarity through a minimal chrome approach. The visual language balances editorial confidence with functional directness: uppercase sans-serif page titles command attention, while the rest of the interface recedes into clean lines and ample whitespace. The overall impression is of a premium mass-market retailer that lets clothing photography speak first, supported by a typographic system that ranges from elegant serif display faces to utilitarian sans-serif labels. Navigation remains persistent and unobtrusive, with category wayfinding through horizontal filter pills and a standard top-level menu. Product discovery happens through dense, evenly-spaced grids where each item receives equal visual weight.

## Colors

The palette is intentionally austere, built on a near-monochrome foundation with minimal accent intervention. This restraint ensures product photography—often colorful and varied—remains the focal point without interface competition.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, active states, borders, and filled UI elements |
| muted-ink | #737373 | Secondary navigation, disabled or less prominent links |
| action | #0000EE | Traditional hyperlink color for text links within content |
| canvas | #FFFFFF | Page background, card surfaces, and inverted text on dark fills |
| surface | #E6E6E6 | Product card backgrounds, store locator bar, and subtle structural bands |
| border | #000000 | Hairline rules, filter pill outlines, and swatch borders |
| error | #EB0010 | System error states and critical alerts |

The color logic follows a strict binary: black for presence and structure, white for absence and space, with a single light gray for secondary surfaces. Active filter pills invert this relationship, filling with black and rendering white text. Product photography introduces the full spectrum of color, making the neutral interface a deliberate frame. No gradients or shadows appear in the interface layer, maintaining a flat, print-like materiality.

## Typography

The type system employs three families with distinct roles: Hm Sergel Headline for editorial display moments, Hm Slussen for all interface and body text, and Arial as a system fallback for native form elements.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Hm Sergel Headline | 4rem | 400 | 1.06 | normal | Campaign headlines, editorial page titles |
| section-display | Hm Slussen | 2.75rem | 100 | 0.85 | normal | Category page titles in uppercase |
| body | Hm Slussen | 0.875rem | 400 | 1.3 | normal | Product descriptions, general content |
| body-small | Hm Slussen | 0.8125rem | 400 | 1.3 | normal | Prices, metadata, store locator text |
| label | Hm Slussen | 0.875rem | 100 | 1.21 | normal | Product names, filter pills, button text |
| navigation | Hm Slussen | 0.875rem | 100 | 1.43 | normal | Top navigation, category links |
| legal-copy | Hm Slussen | 0.75rem | 100 | 1.33 | normal | Footer text, disclaimers, fine print |

Hm Slussen Light at 100 weight carries the majority of the interface load, creating an airy, contemporary feel even at small sizes. The 400 weight variant appears for denser informational text. Hm Sergel Headline provides editorial contrast with its serif construction, reserved for campaign storytelling moments. Verify licensing for these families before production use.

## Layout

The layout system relies on a fluid full-width approach with consistent inset padding. Content areas use 16px side gutters on standard views, expanding to 24px for certain structural containers. The grid is implicit rather than explicitly bordered: product cards sit flush against one another with no visible gaps, creating a continuous photographic field.

Key spacing values:
- Unit: 0.125rem (2px) — the atomic step
- Tight: 0.5rem — icon touch targets, compact internal padding
- Compact: 1rem — navigation link padding, filter pill horizontal padding
- Comfortable: 1.5rem — standard content insets
- Spacious: 3rem — section breaks, vertical rhythm
- Section: 4rem — page title margins, major divisions
- Generous: 6rem — hero campaign spacing

Product grids default to four columns on desktop, with each card occupying equal width. Cards are square or portrait-oriented with photography filling the entire card area. Text information sits below the image with minimal padding. The store locator bar spans full width with light gray background, creating a subtle horizontal band that separates navigation from product discovery.

## Visual language

The visual character is defined by restraint and confidence. Photography dominates: models on neutral gray backgrounds, product still lifes, and editorial campaign imagery all receive full-bleed treatment within their containers. The interface never competes with merchandise.

Shape language is predominantly rectilinear. Filter pills use sharp corners despite their pill-like name, maintaining the system's architectural flatness. Buttons and inputs follow suit with zero border-radius. The only softening comes from circular icon buttons for wishlist and user actions.

Line work is minimal but precise: 1px black borders define filter pills in their default state, color swatches, and subtle dividers. No drop shadows elevate elements; hierarchy is established through scale, weight, and spatial position alone.

The H&M logotype in red provides the sole brand color intrusion in the header, serving as a persistent anchor across all pages. Navigation links sit in a single horizontal row with generous hit areas, while utility icons for search, account, wishlist, and cart cluster at the far right.

## Components

### Page title
- **Anatomy**: Single heading element, uppercase, left-aligned
- **Surface and text color**: Black text on white background
- **Typography**: `{typography.section-display}`
- **Spacing**: 3rem top, 1.5rem sides, 4rem bottom margin
- **Composition**: Full width, no container constraints

### Filter pills
- **Anatomy**: Horizontal scrollable row of button-like elements with left arrow navigation
- **Surface**: White background, 1px black border in default state; black fill with white text when active
- **Typography**: `{typography.label}`
- **Shape**: Zero border-radius, sharp rectangular corners
- **Spacing**: Compact internal padding, tight horizontal arrangement with minimal gap
- **Variants**: Default (white/black border), active (black fill/white text), muted (gray text for unavailable)

### Product card
- **Anatomy**: Image container with overlaid wishlist heart icon, product name, price, and optional color swatches below
- **Surface**: Light gray (#E6E6E6) background filling image area
- **Typography**: Product name uses `{typography.label}`, price uses `{typography.body-small}`
- **Composition**: Image fills card top, text sits flush left below with minimal vertical padding
- **States**: Default, wishlist-selected (filled heart)

### Store locator bar
- **Anatomy**: Full-width band with location icon, descriptive text, and underlined action link
- **Surface**: `{colors.surface}` background
- **Typography**: `{typography.body-small}`
- **Spacing**: Comfortable vertical padding, standard horizontal insets

### Navigation header
- **Anatomy**: Fixed top bar with logo left, primary category links center-left, utility icons right
- **Surface**: White background, no border or shadow
- **Typography**: Category links use `{typography.navigation}`, active category in bold weight
- **Composition**: Flex row with space-between logic, consistent vertical centering

### Campaign hero
- **Anatomy**: Asymmetric two-column layout with large editorial image left, multi-image grid right, serif headline above
- **Surface**: White background, images on neutral gray
- **Typography**: Headline uses `{typography.hero-display}`, description uses `{typography.body}`
- **Composition**: Generous whitespace, deliberate imbalance between primary and secondary imagery

## Responsive behavior

The system appears optimized for desktop viewport widths. Product grids maintain four columns, suggesting a breakpoint strategy that likely reduces to two columns on tablet and single column on mobile, though these configurations are not visible in the supplied material. Navigation would benefit from a hamburger consolidation at narrow widths, with filter pills becoming horizontally scrollable—a pattern already suggested by the left arrow indicator on category pages.

Typography scales should maintain hierarchy: the 4rem hero display may reduce to 2.5rem on mobile, while the 2.75rem section display could scale to 1.75rem. Line heights should increase slightly at smaller sizes for readability. Touch targets must maintain minimum 44px height for all interactive elements.

## Practical implementation guidance

### Preserve
- The stark black-and-white interface palette with single gray accent
- Photography-first product cards with full-bleed images and minimal text overlay
- Sharp-cornered filter pills with clear active-state inversion
- Generous whitespace around page titles and campaign content
- The typographic contrast between serif display and sans-serif interface

### Avoid
- Adding border-radius to buttons, cards, or pills—the system's flatness is intentional
- Introducing drop shadows or elevation effects
- Using color for primary actions beyond the established black/white binary
- Crowding product information; maintain the sparse label-and-price pattern
- Replacing Hm Slussen Light with a heavier weight for body text

### Recommended build order
1. Establish the type scale with Hm Slussen at 100 and 400 weights
2. Implement the product grid with light gray card backgrounds and four-column logic
3. Build filter pill components with default and active states
4. Add page title treatment with uppercase transformation
5. Integrate Hm Sergel Headline for campaign and editorial headlines
6. Implement navigation header with logo, categories, and utility icons
7. Add store locator bar and secondary information patterns

### Accessibility
- Ensure all product images have descriptive alt text
- Provide visible focus indicators for keyboard navigation; the flat design requires clear outline or background shift
- Maintain color contrast ratios: black on white exceeds WCAG AAA, but light gray surfaces with black text should be verified
- Wishlist hearts need aria-labels indicating state (saved/unsaved)
- Filter pills should use aria-pressed for active state communication
- Horizontal scrolling regions need keyboard-accessible scroll controls

## Scope note

This guide covers the men's category and campaign page surfaces visible in the supplied material. Checkout flows, mobile navigation, search interfaces, account pages, and footer content are not represented. Motion, hover states, and loading patterns are not described.
