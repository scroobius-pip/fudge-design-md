# How restylaneusa.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/restylaneusa.com-design)

Last updated: 2026-08-10

## Captured pages

[![Instagram social feed grid with award badges, product cards, and navy follow button on light gray background](https://pin.fontofweb.com/1967?format=jpg)](https://design.withfudge.com/share/pin-1967)

[Instagram social feed grid with award badges, product cards, and navy follow button on light gray background](https://design.withfudge.com/share/pin-1967)

[![Two-column product introduction with dark headline, body text, outlined CTA button, and centered journey section below](https://pin.fontofweb.com/1966?format=jpg)](https://design.withfudge.com/share/pin-1966)

[Two-column product introduction with dark headline, body text, outlined CTA button, and centered journey section below](https://design.withfudge.com/share/pin-1966)

[![Full-bleed hero banner with diverse group portrait, script Restylane logo, navigation bar, and white overlay text](https://pin.fontofweb.com/1965?format=jpg)](https://design.withfudge.com/share/pin-1965)

[Full-bleed hero banner with diverse group portrait, script Restylane logo, navigation bar, and white overlay text](https://design.withfudge.com/share/pin-1965)

## Overview

The Restylane USA design system presents a premium aesthetic-medicine brand identity that balances clinical credibility with approachable warmth. The visual language centers on full-bleed photography of diverse individuals, restrained typography that lets imagery dominate, and a minimal interface layer that recedes into the background. The system uses a near-monochromatic palette anchored by deep navy against warm off-white, with typography that contrasts an elegant extra-light serif display face against a neutral geometric sans-serif for functional text. The overall impression is sophisticated and understated—luxury without ostentation, medical authority without coldness. Every element serves to frame the human subjects and product stories rather than compete with them.

## Colors

The color system is intentionally restrained, deriving visual interest from photography rather than chromatic complexity. Four core colors establish the interface identity, with additional values serving specific component roles.

| token | value | use |
|---|---|---|
| ink | #000000 | Deepest shadows, full-bleed hero backgrounds, maximum contrast moments |
| navy | #0A2540 | Primary text, headlines, navigation, button borders, brand moments requiring color |
| canvas | #F7F7F5 | Page background, social feed sections, areas needing warmth without pure white severity |
| surface | #FFFFFF | Content cards, button fills, text on dark imagery, maximum-legibility moments |
| muted | #6B6B6B | Body text, captions, disclaimers, secondary information |
| accent-rose | #D4A5A5 | Subtle warmth in product imagery, occasional soft highlights |

The navy functions as the de facto brand color, appearing in all interactive and typographic elements. It reads as sophisticated and medical without the sterility of pure black. The warm off-white canvas prevents the interface from feeling clinical while maintaining the cleanliness expected of a pharmaceutical-aesthetic brand. Pure white surface is reserved for moments requiring maximum contrast or when content needs to lift from the canvas. The muted gray handles all secondary reading material, including the extensive regulatory disclaimers characteristic of medical marketing. The rose accent appears primarily within photography and product packaging rather than as an interface color, but it contributes to the overall warmth of the brand experience.

## Typography

The type system pairs two distinct personalities: Juana W 00 Extra Light for display and brand moments, Gotham for all functional and body text. This creates a clear hierarchy between emotional, editorial expression and clear, trustworthy communication. The supplied font families also include Cl 3 Iskicons, which serves as an icon and symbol font rather than a typography family for readable text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Juana W 00 Extra Light | 3rem | 400 | 1.1 | 0.02em | Hero headlines, large emotional statements |
| section-display | Juana W 00 Extra Light | 2.25rem | 400 | 1.15 | 0.01em | Section headings, centered statements |
| body | Gotham | 1rem | 400 | 1.6 | 0em | Paragraphs, descriptions, general content |
| body-small | Gotham | 0.875rem | 400 | 1.5 | 0em | Captions, supporting text, disclaimers |
| label | Gotham | 0.75rem | 500 | 1.4 | 0.08em | Buttons, tags, uppercase functional labels |
| navigation | Gotham | 0.875rem | 400 | 1.2 | 0.02em | Menu items, utility links |
| script-brand | Juana W 00 Extra Light | 1.5rem | 400 | 1.2 | 0em | Restylane wordmark, brand signatures |

Juana W 00 Extra Light, designed by Eli Hernandez and available from Latinotype Ltda, carries the brand's elegance through its extremely light weight and refined proportions. It appears exclusively in uppercase for headlines, creating a statuesque, editorial quality. Gotham, designed by Hoefler Co, handles all reading and functional text with its neutral, authoritative presence. The label style uses medium weight with wide tracking for uppercase button text, creating a crisp, actionable appearance. Cl 3 Iskicons is present in the source files as an icon font; do not use it for body or display text. Verify licensing for these families before production use.

## Layout

The layout philosophy prioritizes photographic content with generous breathing room. The system employs a full-width approach with contained content areas.

The hero banner occupies the full viewport width and approximately 70-80% of viewport height, with a large group photograph as the background. Content overlays the lower portion of this image with centered text alignment, using a subtle dark gradient or shadow treatment to ensure white text legibility against varied photographic content. A small chevron indicator at the bottom center suggests scroll continuation.

Below the hero, the page transitions to a light canvas background. Content sections alternate between two-column asymmetric layouts and centered single-column blocks. The two-column pattern places text content on the left with substantial padding, paired with a photographic panel on the right that may bleed to the edge or maintain internal margins. This creates a magazine-editorial rhythm that breaks the monotony of single-column flow.

The social feed section returns to the canvas background, presenting a masonry or grid arrangement of square and rectangular image cards. These cards feature mixed content: product photography, award badges, lifestyle imagery, and campaign graphics. The grid maintains consistent gutters between items while allowing varied card proportions.

Navigation sits at the very top in a compact bar, with a secondary row below containing the primary menu. The overall density is low—generous vertical spacing between sections, ample padding within components, and text blocks that never stretch to uncomfortable line lengths.

## Visual language

The visual language communicates premium accessibility: high-end aesthetic medicine that welcomes diverse patients rather than intimidating them. Photography dominates every page surface, featuring individuals of varied ages, ethnicities, and presentations in naturalistic settings with soft, diffused lighting. The subjects appear confident and relaxed, never overproduced or artificially perfected.

The Restylane wordmark appears in a flowing script style, contrasting with the geometric precision of the functional type. This script treatment softens the clinical undertones and adds a personal, hand-crafted quality to the brand signature.

Award badges and credentials appear prominently within the social feed and product imagery, establishing third-party validation. These circular or seal-like graphics use navy, white, and occasional accent colors, maintaining the restrained palette while adding visual interest through their graphic form.

The interface itself is nearly invisible—no rounded corners on buttons, no drop shadows on cards, no gradient backgrounds beyond the essential hero overlay. This flat, minimal treatment keeps attention on the photography and allows the typography's inherent elegance to register without competition.

Motion and interaction are implied to be subtle: the chevron scroll indicator suggests gentle animation, and the social feed's grid density implies potential hover states, though these are not visible in the supplied material.

## Components

**Primary Button**

- Anatomy: Text label with external-link icon, contained within a rectangular border
- Surface: Transparent or white fill with navy border
- Typography: `{typography.label}`—uppercase, tracked, medium weight
- Shape: 0rem border radius, sharp corners
- Spacing: Generous internal padding, approximately 1rem vertical and 2rem horizontal
- Composition: Icon follows text with small gap; entire button may link externally
- Variants: Outlined variant on light backgrounds; potential filled variant on dark backgrounds

**Hero Banner**

- Anatomy: Full-bleed photograph, gradient overlay at bottom, centered text block, scroll indicator chevron
- Surface: Photographic background with darkening treatment at base
- Typography: `{typography.hero-display}` for headline, `{typography.body}` for supporting text
- Shape: Full viewport width, substantial height
- Spacing: Text positioned in lower third with comfortable margin from edges
- Composition: Centered alignment; headline above description above implicit or explicit action
- States: Static display; scroll indicator implies interaction

**Navigation Bar**

- Anatomy: Top utility bar with safety information and professional links; main bar with logo center, menu items, search
- Surface: `{colors.canvas}` background
- Typography: `{typography.navigation}` for menu items; script treatment for logo
- Shape: Full width, fixed or static positioning
- Spacing: Compact height for utility bar; generous padding for main navigation items
- Composition: Logo centered; primary navigation evenly distributed; utility links split to corners
- Variants: May gain background opacity or shadow on scroll

**Social Feed Grid**

- Anatomy: Masonry-style arrangement of image cards with mixed aspect ratios
- Surface: `{colors.canvas}` background; individual cards may have varied internal backgrounds
- Typography: Minimal text on cards; brand script and product names as overlays
- Shape: Square and rectangular cards with 0rem border radius
- Spacing: Consistent gutters between items; external padding matching section spacing
- Composition: Asymmetric balance with larger feature cards and smaller supporting cards
- Content: Product photography, award seals, campaign imagery, lifestyle shots

**Content Section (Two-Column)**

- Anatomy: Text block left, image right; or reversed
- Surface: `{colors.surface}` or `{colors.canvas}` background
- Typography: `{typography.section-display}` for headline, `{typography.body}` for description, `{typography.body-small}` for disclaimers
- Shape: Rectangular image panel with 0rem border radius
- Spacing: Substantial padding between text and image; comfortable margins from viewport edges
- Composition: Asymmetric column ratio favoring image; text vertically centered or top-aligned

## Responsive behavior

The layout implies a desktop-first approach with clear adaptation needs. The two-column content sections should stack vertically on narrower viewports, with the image preceding or following the text block depending on narrative priority. The hero banner's centered overlay text must maintain legibility as the image crops; the headline may need reduction and the description may require line-break adjustment.

The navigation bar's horizontal menu will require consolidation into a mobile menu pattern, likely a hamburger-triggered overlay given the number of primary items. The social feed grid should transition from multi-column masonry to a single-column scroll on mobile, maintaining card proportions but simplifying the asymmetric composition.

Typography scales should reduce proportionally: the hero display at 3rem may become 2rem on tablet and 1.75rem on mobile, while maintaining the extra-light weight that defines the brand character. Body text can remain at 1rem across breakpoints for readability. Touch targets for buttons and navigation items should expand to minimum 44px height on mobile devices.

## Practical implementation guidance

**Preserve**
- The extreme contrast between Juana's delicate extra-light weight and Gotham's sturdy neutrality
- Full-bleed photography with minimal interface overlay
- Sharp-cornered buttons and cards; the 0rem radius is essential to editorial precision
- Generous whitespace between sections; the brand breathes
- The warm off-white canvas against pure white content cards

**Avoid**
- Heavy drop shadows or dimensional effects that would cheapen the flat, editorial aesthetic
- Rounded corners on any component; the system uses 0rem radius throughout
- Saturated colors beyond the navy and muted palette; photography provides warmth
- Dense text blocks without visual relief; the medical content requires careful typographic hierarchy
- Generic stock photography; the diverse, naturalistic casting is essential to brand positioning

**Recommended build order**
1. Establish color tokens and apply canvas/surface backgrounds to page structure
2. Implement typography scale with Juana for display and Gotham for body
3. Build hero banner with full-bleed image, gradient overlay, and centered text
4. Create navigation with centered script logo and horizontal menu
5. Develop two-column content section pattern with text-image pairing
6. Construct social feed grid with mixed-aspect cards
7. Refine button component with outlined style and icon integration
8. Add responsive stacking and type scaling for narrower viewports

**Accessibility**
- Ensure sufficient contrast for white text on hero imagery; the gradient overlay must be strong enough across varied photographs
- Provide visible focus states for keyboard navigation that respect the minimal aesthetic—perhaps a navy outline offset from sharp-cornered buttons
- Consider reduced-motion preferences for any scroll-triggered animations
- Structure heading hierarchy logically: hero display as h1, section displays as h2, with no skipped levels
- Make external link icons perceivable to screen readers with appropriate labeling

## Scope note

This guide covers the homepage surface visible in the supplied images, including the hero banner, navigation, content introduction sections, and social feed grid. Footer content, interior pages, product detail templates, form interactions, and mobile-specific layouts are not represented. Motion behavior, hover states, and the complete icon system are not documented. Measurements are practical adaptation targets based on visual interpretation of the desktop presentation.
