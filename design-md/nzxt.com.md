# How nzxt.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/nzxt.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero banner with dark gradient background, white headline 'Built on Balance', purple pill buttons, and product photography of compact PC case with RGB display](https://pin.fontofweb.com/7090?format=jpg)](https://design.withfudge.com/share/pin-7090)

[Hero banner with dark gradient background, white headline 'Built on Balance', purple pill buttons, and product photography of compact PC case with RGB display](https://design.withfudge.com/share/pin-7090)

[![Product detail page for H2 Flow Mini-ITX case with light gray gallery background, black product photography, and accordion specifications panel](https://pin.fontofweb.com/7089?format=jpg)](https://design.withfudge.com/share/pin-7089)

[Product detail page for H2 Flow Mini-ITX case with light gray gallery background, black product photography, and accordion specifications panel](https://design.withfudge.com/share/pin-7089)

[![Comparison table contrasting Build vs Prebuild features with purple CTA buttons and 'Ready to Size Down?' product grid section](https://pin.fontofweb.com/7091?format=jpg)](https://design.withfudge.com/share/pin-7091)

[Comparison table contrasting Build vs Prebuild features with purple CTA buttons and 'Ready to Size Down?' product grid section](https://design.withfudge.com/share/pin-7091)

[![Dark footer with four-column link layout, social media icons, language selector, and purple chat bubble floating action button](https://pin.fontofweb.com/7092?format=jpg)](https://design.withfudge.com/share/pin-7092)

[Dark footer with four-column link layout, social media icons, language selector, and purple chat bubble floating action button](https://design.withfudge.com/share/pin-7092)

## Overview

The NZXT design system serves a gaming hardware brand that balances technical credibility with approachable modernism. The visual language moves between two distinct modes: immersive dark environments for storytelling and hero moments, and clean light surfaces for product browsing and commerce. This dual-surface approach lets photography of black PC cases and components remain the visual focus while the interface recedes or amplifies as needed.

The system is built on a foundation of high contrast, generous whitespace, and a single electric purple accent that signals interactivity. Typography pairs a geometric sans-serif for headlines and calls-to-action with a neutral grotesque for body copy and UI labels. Component shapes are predominantly rectilinear with sharp corners, reserving full pill shapes exclusively for primary buttons and the floating chat action. The overall impression is precise, confident, and uncluttered—qualities that mirror the brand's positioning around quality PC building components.

## Colors

| token | value | use |
|---|---|---|
| action | #8A00FC | Primary buttons, links, floating chat bubble, gradient accents |
| ink | #1C1C1C | Primary text on light surfaces, dark section backgrounds, footer |
| muted-ink | #3E3E3E | Footer borders, secondary text, subtle dividers |
| canvas | #FFFFFF | Page background, light surface base, button text on dark |
| surface | #F5F5F5 | Product card backgrounds, alternate section fills |
| surface-warm | #F1F1F1 | Product gallery backgrounds, subtle warm gray surfaces |
| border | #DDDDDD | Hairline rules on light surfaces, accordion borders |
| border-dark | #000000 | Button borders in dark mode, high-contrast outlines |

The color model operates on a light-dark polarity. Most commerce and product pages use canvas white as the dominant surface with ink text for readability. Dark sections—typically hero banners and immersive storytelling blocks—use ink or pure black backgrounds with white text and the action purple for interactive elements. The action purple appears as a flat color on buttons and as a gradient accent in select promotional contexts. Product photography of black hardware against light gray surfaces creates natural visual cohesion with the interface palette. Verify licensing for these families before production use.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Gotham S Sm | 2.275rem | 700 | 1.4 | normal | Hero banner headlines, major section titles |
| section-display | Gotham S Sm | 1.5rem | 700 | 1.6 | normal | Subsection headings, feature callouts |
| product-title | Gotham S Sm | 2.6rem | 700 | 1.3 | normal | Product detail page names |
| body | C H Co Typographycom | 0.9375rem | 400 | 1.65 | normal | Paragraphs, descriptions, general content |
| body-large | C H Co Typographycom | 0.9375rem | 400 | 1.65 | normal | Hero descriptions, emphasized body |
| label | C H Co Typographycom | 0.9375rem | 500 | 1.65 | normal | Feature labels, spec names, medium emphasis |
| navigation | C H Co Typographycom | 0.9375rem | 400 | 1.65 | normal | Header menu, breadcrumbs, footer links |
| legal-copy | C H Co Typographycom | 0.5859375rem | 400 | 1.65 | normal | Footer small print, copyright, fine print |
| button-primary | Gotham S Sm | 0.875rem | 700 | 1.65 | normal | Pill button labels, CTAs |

The type system uses two families: Gotham S Sm for display and interactive hierarchy, and C H Co Typographycom for reading and interface labels. Gotham S Sm appears exclusively in bold weight for headlines and buttons, creating a consistent voice of confidence. C H Co Typographycom operates at regular and medium weights, with the medium weight reserved for labels and emphasized inline text. The 15px base size with 1.65 line height provides comfortable reading density for technical product content. Smaller sizes step down to the 9.375px legal copy used in dense footer arrangements. Gotham is attributed to Hoefler Co as designer and vendor. No attribution is supported for C H Co Typographycom or Gotham S Sm.

## Layout

The layout follows a centered container model with full-bleed sections for immersive content. The header is fixed, using a dark ink background with white navigation text and utility icons aligned to the right. A subtle white inset shadow at the bottom edge of the header creates depth separation from scrolling content.

Content sections alternate between contained widths and full-bleed dark bands. Hero banners occupy the full viewport width with a two-column composition: text content left-aligned with generous padding, product photography positioned to the right or center depending on the narrative. The "Built on Balance" hero demonstrates this pattern with headline, description, and paired pill buttons on the left, while the product case sits on a physical surface extending to the right edge.

Below the hero, content sections return to a contained width with centered headings. The "Why Choose SFF?" section shows a four-column icon grid with centered labels and descriptions. Product detail pages use an asymmetric two-column layout: a large product gallery occupying roughly 55% of the width on a warm gray surface, with product information, selectors, and accordion specifications in the remaining space.

Spacing between major sections uses 64px (4rem) as the standard rhythm, with 40px (2.5rem) for tighter content groupings. Internal component padding ranges from 12px to 28px depending on density needs. The floating chat button positions absolutely in the lower right corner, overlapping content with a 50px circular purple surface.

## Visual language

The visual language draws from gaming hardware culture without adopting aggressive or juvenile tropes. Clean lines, precise corners, and generous whitespace communicate engineering quality. Photography treatment is consistent: products are shot in controlled lighting against neutral gray or environmental surfaces, with RGB lighting elements providing the only color beyond the product's own black or dark gray finishes.

Iconography uses simple line drawings for feature callouts—headphones for audio, sun for lighting, suitcase for portability, monitor for display. These icons are monochromatic, matching the ink text color, and sit above centered labels in grid arrangements.

The purple accent is used with restraint, appearing only on interactive elements: primary call-to-action buttons, the floating support chat, and occasional text links. This discipline prevents the vibrant hue from competing with product photography that may contain its own RGB color elements.

Shadow usage is minimal and functional. The header employs a subtle white inset shadow for separation. No drop shadows appear on cards or surfaces, maintaining the flat, precise aesthetic. Borders are 1px solid rules, using border color on light surfaces and muted-ink on dark surfaces.

## Components

### Header
- **Anatomy**: Fixed top bar with logo left, primary navigation center-left, utility cluster right (language selector, account, search, wishlist, cart)
- **Surface**: Ink background (#1C1C1C) with white text and icons
- **Typography**: Navigation token for menu items
- **Shape**: Full width, height approximately 48-56px, sharp corners
- **Spacing**: Horizontal padding of 24px, vertical centering of items
- **Composition**: Flex row with space-between alignment, logo and nav grouped left, utilities grouped right
- **States**: White inset shadow at bottom edge for depth

### Hero Banner
- **Anatomy**: Full-width section with background image/gradient, left-aligned text block (headline, description, button group), right-positioned product photography
- **Surface**: Dark gradient or solid black background, white text
- **Typography**: Hero-display for headline, body-large for description, button-primary for CTAs
- **Shape**: Full bleed, sharp corners, no border radius
- **Spacing**: Generous internal padding (64px+ vertical, 48px+ horizontal), button group with 16px gap between pill buttons
- **Composition**: Asymmetric two-column with text occupying 40-45% width, imagery bleeding to edge

### Primary Button
- **Anatomy**: Text label centered within pill shape
- **Surface**: Action purple background (#8A00FC), white text
- **Typography**: Button-primary token
- **Shape**: Full pill (9999px border radius), height approximately 40-44px
- **Spacing**: Horizontal padding 28px, vertical padding 10px
- **Variants**: Secondary variant uses transparent background with white border on dark surfaces

### Product Card
- **Anatomy**: Product image on surface background, action button below
- **Surface**: Surface-warm or surface background (#F5F5F5 or #F1F1F1)
- **Typography**: Section-display for card title if present, button-primary for CTA
- **Shape**: Sharp corners, no border radius on card; pill radius on button
- **Spacing**: Internal padding 20px, button margin-top 32px
- **Composition**: Vertical stack, centered content, image dominant

### Accordion Panel
- **Anatomy**: Header row with title and expand/collapse indicator, collapsible content area with bullet list
- **Surface**: Transparent or white background, border-top using border color (#DDDDDD)
- **Typography**: Label token for header, body token for list items
- **Shape**: Full width, sharp corners
- **Spacing**: Header padding 12px, content padding 20px top, list items with 4px left indent
- **States**: Expanded state shows full content; collapsed shows only header with minus/indicator

### Footer
- **Anatomy**: Four-column link grid, social media icon row, language selector, copyright
- **Surface**: Ink background (#1C1C1C), white text, muted-ink top border
- **Typography**: Navigation token for links, legal-copy for copyright and fine print
- **Shape**: Full width, sharp corners
- **Spacing**: Padding 40px top, 30px bottom; column gaps approximately 24px; social icons 16px size with 8px gaps
- **Composition**: Grid layout with equal columns, social icons in horizontal row below links

### Floating Chat Button
- **Anatomy**: Circular button with chat icon
- **Surface**: Action purple (#8A00FC), white icon
- **Shape**: Perfect circle, 50px diameter
- **Position**: Fixed, lower right corner, offset from edges by 24px

## Responsive behavior

The system should maintain its two-mode surface approach across viewport sizes. On narrower screens, the asymmetric hero layout should stack vertically with text above imagery, maintaining left alignment for text content. The four-column feature grid should collapse to two columns on tablet and single column on mobile, preserving centered icon and text alignment.

The header navigation should collapse to a hamburger menu on mobile, with the utility icons remaining visible. Product detail pages should stack gallery above information, with the gallery becoming a swipeable carousel on touch devices.

Typography scales should reduce proportionally: hero-display may drop to section-display size on mobile, maintaining readability without excessive line breaks. Button touch targets should maintain minimum 44px height with increased horizontal padding for easier tapping.

## Practical implementation guidance

### Preserve
- The strict light-dark polarity between commerce and immersive sections
- Full pill shape reserved exclusively for primary actions and the chat button
- Sharp corners on all structural surfaces and cards
- Generous whitespace around product photography
- Single purple accent against predominantly monochrome palette

### Avoid
- Rounded corners on cards, panels, or images
- Multiple accent colors competing with product RGB lighting
- Drop shadows on surfaces or cards
- Body text in Gotham S Sm—reserve this family for display and buttons only
- Borders heavier than 1px for dividers

### Recommended build order
1. Establish the color tokens and surface modes (light commerce vs. dark immersive)
2. Implement the two-family typography system with correct weight assignments
3. Build the fixed header with utility cluster and subtle shadow
4. Create the pill button component with primary and secondary variants
5. Implement the hero banner with asymmetric layout and gradient support
6. Build the product detail layout with gallery and accordion specifications
7. Add the footer with four-column grid and social icons
8. Position the floating chat button as final overlay element

### Accessibility
- Ensure white text on dark hero sections meets WCAG AA contrast (4.5:1 minimum)
- Provide visible focus states on pill buttons, likely using a white outline offset on purple surfaces
- Maintain keyboard navigability for accordion panels with clear expand/collapse indicators
- Use aria-labels for icon-only buttons in the header utilities and social links
- Consider reduced-motion preferences for any gradient or RGB color animations in product imagery

## Scope note

This guide covers the NZXT commerce and product marketing surfaces visible in the supplied pages, including the Small Form Factor collection page and H2 Flow product detail page. Mobile breakpoints, checkout flows, account dashboards, and motion behaviors are not represented. The NZXT CAM software interface and community features fall outside this scope. Measurements are derived from the exact values provided.
