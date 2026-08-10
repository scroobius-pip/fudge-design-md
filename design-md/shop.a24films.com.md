# How shop.a24films.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/shop.a24films.com-design)

Last updated: 2026-08-10

## Captured pages

[![Dark footer with three-column layout showing category links, social channels, and email signup with white border inputs on black background](https://pin.fontofweb.com/6382?format=jpg)](https://design.withfudge.com/share/pin-6382)

[Dark footer with three-column layout showing category links, social channels, and email signup with white border inputs on black background](https://design.withfudge.com/share/pin-6382)

[![Product detail page for Stones Tee with oversized bold title, brown shirt image, size selector, quantity picker, and outlined Add to Cart button on warm off-white background](https://pin.fontofweb.com/6381?format=jpg)](https://design.withfudge.com/share/pin-6381)

[Product detail page for Stones Tee with oversized bold title, brown shirt image, size selector, quantity picker, and outlined Add to Cart button on warm off-white background](https://design.withfudge.com/share/pin-6381)

[![Orange promotional modal with email subscription form, white input field, and large SUBSCRIBE button with white border and close icon](https://pin.fontofweb.com/6380?format=jpg)](https://design.withfudge.com/share/pin-6380)

[Orange promotional modal with email subscription form, white input field, and large SUBSCRIBE button with white border and close icon](https://design.withfudge.com/share/pin-6380)

## Overview

The A24 Shop design system is built around a stark, editorial aesthetic that reflects the film studio's reputation for bold, auteur-driven storytelling. The visual language relies on extreme scale contrasts—oversized product titles set in tight, bold sans-serif letterforms against expansive negative space. The interface feels more like a gallery or lookbook than a conventional e-commerce experience, with product photography treated as hero content and UI elements reduced to precise geometric lines.

The system operates in two primary surface modes: a warm off-white canvas for product browsing and a deep black ground for the footer and promotional moments. Color is used sparingly and with intention—an aggressive orange appears only in promotional modals to demand attention, while the rest of the palette stays in disciplined monochrome with a single muted green-gray for secondary information. Typography is the dominant visual force, with Nb International Pro deployed across all weights from hairline labels to massive display headlines that push the boundaries of legibility through extreme negative tracking.

## Colors

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, borders, primary button text, modal close icons |
| ink-muted | `#6C775C` | Secondary labels, disabled states, exclusive badges, size guide links |
| ink-tertiary | `#A8A8A8` | Unavailable size options, placeholder text, subtle dividers |
| action | `#F04608` | Promotional modal backgrounds, high-priority call-to-action surfaces |
| canvas | `#F1F1F1` | Page background, footer text, footer borders, input field backgrounds in dark mode |
| surface | `#FFFFFF` | Modal input fields, modal button text, footer heading text |

The color strategy is deliberately restrained. The off-white canvas `#F1F1F1` provides a warm, gallery-like ground for product photography, avoiding the clinical coldness of pure white. Black ink carries all primary information with maximum contrast. The muted olive-gray `#6C775C` serves as the single chromatic departure for secondary states—most visibly in the "AAA24 EXCLUSIVE" badge and unavailable size selectors. The orange `#F04608` is reserved for interruptive promotional moments, creating a visceral jolt when it appears. The footer inverts the relationship: black ground with off-white text and borders, maintaining readability while signaling a terminal zone. No gradients or shadows are used; all depth is achieved through flat color blocks and hairline borders.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Nb International Pro | 6.825rem | 700 | 0.87 | -0.055em | Product titles, page headlines |
| section-display | Nb International Pro | 2.19375rem | 700 | 1 | -0.025em | Section headers, modal buttons, prices |
| mono-display | Nb International Pro-Mono | 2.6rem | 400 | 1 | -0.1em | Special indicators, numeric labels |
| body | Nb International Pro | 1.3rem | 400 | 1.19 | -0.01em | Descriptions, footer body text |
| body-large | Nb International Pro | 1.625rem | 400 | 1.19 | -0.01em | Navigation, breadcrumb, input text |
| label | Nb International Pro | 1.1375rem | 400 | 1 | 0.02em | Footer links, category labels, uppercase UI |
| label-small | Nb International Pro | 0.89375rem | 600 | 1 | 0.04em | Footer column headings, micro-labels |
| price | Nb International Pro | 2.19375rem | 700 | 1 | 0em | Product prices, cart totals |
| legal | Arial | 0.875rem | 400 | 1.2 | 0em | Terms text, privacy policy, fallback body |

Nb International Pro, designed by Stefan Gandl and available from Stefan Gandl, is the exclusive typeface across all weights—Regular, Medium, Semibold (rendered as weight 600), and Bold. The typeface's tight apertures and geometric construction support the extreme tracking compression used in display sizes. Arial appears only as a fallback for small legal text. Nb International Pro-Mono, also by Stefan Gandl, provides a fixed-width variant for special numeric or indicator contexts. Verify licensing for these families before production use.

The type scale is built on a 2px relative unit. Display sizes push well beyond conventional web boundaries—the 109.2px hero display with -6px tracking creates an almost poster-like density. Body sizes maintain comfortable readability at 20.8px with slight negative tracking. Labels and navigation use positive tracking for all-cupper settings, creating a mechanical, utilitarian voice that contrasts with the expressive compression of headlines.

## Layout

The layout system is defined by generous asymmetry and deliberate spatial tension. Content is anchored to a left-heavy grid with substantial indentation from the viewport edge. The primary content inset is `7.71rem` from the left, with key elements like product titles receiving a deeper indent of `15.42rem`—roughly double the standard inset. This creates a staggered reading rhythm that feels editorial rather than aligned.

Vertical spacing follows an expansive scale. The section token at `13.095rem` separates major page zones, while `3.25rem` governs component-level gaps like the space between product title and price, or between description blocks and selectors. Element gaps of `1.625rem` handle tight groupings like size option clusters or quantity selectors.

The product detail page demonstrates the layout logic clearly: navigation and utility links occupy the top edge with standard inset, the product image floats in the right portion of the viewport with no bounding container, and all product information anchors to the left with progressive indentation. The title receives the deepest indent, price sits slightly less indented, and the description/selector row returns to standard inset. This stepped alignment creates visual hierarchy without size change alone.

The footer collapses into a three-column grid on black ground, with columns receiving asymmetric padding—some at standard inset, some at double indent. Email capture spans the full remaining width with a two-part field and button composition.

## Visual language

The visual language is defined by restraint and precision. Every interactive element is rectangular with zero border radius—buttons, inputs, selectors, and containers all share sharp 90-degree corners. This geometric severity extends to the 1px hairline borders that define buttons, input fields, and section dividers. No shadows, no rounded corners, no soft gradients.

Product photography is treated as autonomous artwork. The Stones Tee image floats without frame or background container, its natural shadow providing the only dimensional cue. This respects the studio's filmic sensibility—objects are lit and presented as if on set.

The uppercase convention dominates functional text: navigation labels, section headers, button text, and footer categories all render in capitals. This mechanical voice contrasts with the title case of product names, which retain a more conversational, editorial tone. The "AAA24 EXCLUSIVE" badge uses a distinctive stacked-letter mark followed by muted uppercase text, functioning as both brand seal and availability signal.

Iconography is minimal and linear—a simple magnifying glass for search, a thin cart outline with numeric indicator. The hamburger menu is reduced to two parallel lines rather than three, maintaining the system's preference for spareness.

## Components

### Product title block

- **Anatomy**: Product badge, hero title, price
- **Surface**: Transparent over canvas background
- **Typography**: Badge uses label-small in muted ink; title uses hero-display in ink with extreme negative tracking; price uses section-display in ink
- **Shape**: No containing border or background; `0rem` border radius
- **Spacing**: Badge sits `3.25rem` above title; title has left indent of `-0.17rem` optical correction; price sits `3.25rem` below title with standard left inset
- **Composition**: Stacked vertically with left alignment, creating a dense typographic block that anchors the left side of the viewport against the floating product image

### Size selector

- **Anatomy**: Label row with "SIZE" and "SIZE GUIDE" link, followed by size option cluster
- **Surface**: Transparent with 1px top border in ink-tertiary
- **Typography**: Label uses body in ink; size options use section-display in ink for available, ink-tertiary for unavailable
- **Shape**: `0rem` border radius; options sit as inline text with `1.625rem` horizontal spacing
- **Spacing**: `3.25rem` top padding from previous element; label row has `3.25rem` vertical padding; size cluster has `3.25rem` bottom padding
- **Variants**: Available sizes in ink; unavailable sizes in ink-tertiary with no strikethrough or other disabled treatment beyond color change

### Quantity selector

- **Anatomy**: Label "QUANTITY" followed by numeric option cluster
- **Surface**: Transparent with 1px top border in ink-tertiary
- **Typography**: Label uses body in ink; numbers use section-display in ink for selected, ink-tertiary for unselected
- **Shape**: `0rem` border radius
- **Spacing**: Matches size selector vertical rhythm
- **Composition**: Inline number sequence with `1.625rem` gaps, selected state indicated by color alone

### Primary button (Add to Cart)

- **Anatomy**: Text-only button with full-width border container
- **Surface**: Canvas background with 1px ink border
- **Typography**: Price token (section-display weight and size) in ink, uppercase
- **Shape**: `0rem` border radius; rectangular with generous internal padding
- **Spacing**: `3.65625rem` vertical padding, `1.625rem` horizontal; `3.25rem` top margin from selectors
- **Composition**: Full width of its column; text centered

### Promotional modal

- **Anatomy**: Overlay container, headline, email input, subscribe button, legal text, close control
- **Surface**: Action orange background; white input field; white-bordered button
- **Typography**: Headline uses body-large in surface white; button uses section-display in surface white; legal uses legal in surface white
- **Shape**: `0rem` border radius on all elements; 1px surface white border on button and input
- **Spacing**: `1.625rem` padding around content; input and button stack with no gap; legal text sits below with standard element gap
- **Composition**: Centered or near-centered overlay; close control as X icon in upper right

### Footer

- **Anatomy**: Three-column grid with category links, social/brand links, and email capture
- **Surface**: Ink black background; canvas text and borders
- **Typography**: Column headings use label-small in surface white; links use label in canvas; body text uses body in canvas
- **Shape**: 1px canvas top border on outer container; `0rem` border radius; 1px canvas borders on email input and button
- **Spacing**: Asymmetric column padding—left column at double indent, center at standard, right at standard; `3.25rem` bottom margins on link groups
- **Composition**: Email capture as two-part field with input and "SIGN UP" button side by side, separated by 1px canvas border

## Responsive behavior

The system is documented from desktop viewport widths. The generous left indentation and oversized typography suggest a layout that requires substantial horizontal space to maintain its intended proportions. At narrower widths, the stepped indentation system should compress—likely the `15.42rem` title indent reduces or eliminates, and the product image stack above or below the information column rather than floating beside it.

The three-column footer should reflow to stacked sections on smaller screens, with email capture expanding to full width. The promotional modal likely maintains its centered position but may shift to full-width at mobile breakpoints, preserving the stacked input-button composition.

Typography scaling should maintain the 2px relative unit. The hero display at `6.825rem` may require reduction to `4rem` or `3.25rem` on narrow viewports to prevent overflow. The tight tracking on display sizes becomes problematic at small sizes and should loosen or the size should reduce to maintain legibility.

Touch targets for size and quantity selectors need expansion on mobile—the current inline text treatment with no padding around each option would benefit from minimum `2.75rem` tap areas.

## Practical implementation guidance

### Preserve
- The extreme scale contrast between hero display and body text—this is the system's signature
- Zero border radius on all elements; the geometric severity is essential
- The warm off-white `#F1F1F1` canvas rather than pure white
- The stepped left-indentation system for product information
- 1px hairline borders as the sole decorative element
- Uppercase treatment for all functional and navigational text

### Avoid
- Adding border radius to buttons, inputs, or containers
- Using the action orange for non-promotional elements—it loses its interruptive power
- Introducing shadows or gradients; the system is flat by design
- Centering product titles; the left anchor is structural
- Using the mono typeface for body text; reserve it for special indicators

### Recommended build order
1. Establish the 2px relative unit and type scale
2. Implement the canvas/ink/surface color tokens
3. Build the product title block with correct indentation and tracking
4. Create the zero-radius button and input components with 1px borders
5. Implement the stepped layout grid for product pages
6. Add the footer with asymmetric column padding
7. Layer in the promotional modal as an overlay system

### Accessibility
- The extreme negative tracking on hero display (`-0.055em`) may reduce legibility for dyslexic readers; consider a looser tracking alternative at smaller sizes
- The muted ink `#6C775C` on canvas `#F1F1F1` may fail WCAG AA contrast for small text; verify ratios and darken if necessary
- The action orange `#F04608` with white text should be checked for contrast compliance
- Size and quantity selectors as inline text lack visible focus indicators; add outline or background change for keyboard navigation
- The modal close control as a simple X icon needs an accessible label and minimum 44×44 tap target

## Scope note

This guide covers the A24 Shop product detail page, collection page promotional modal, and site footer as visible in the supplied materials. Cart functionality, checkout flows, account pages, and mobile-specific layouts are not represented. All components use `0rem` border radius as implemented.
