# How gatesandbrovi.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/gatesandbrovi.com-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with hanging glass mugs, distressed typographic poster reading WHERE ALL PATHS LEAD, and teal footer with speckled texture](https://pin.fontofweb.com/1478?format=jpg)](https://design.withfudge.com/share/pin-1478)

[Homepage hero with hanging glass mugs, distressed typographic poster reading WHERE ALL PATHS LEAD, and teal footer with speckled texture](https://design.withfudge.com/share/pin-1478)

[![Dinner menu page with cream background, red ORDER ONLINE button, monospace menu items, and food photography with checkered tablecloth](https://pin.fontofweb.com/1479?format=jpg)](https://design.withfudge.com/share/pin-1479)

[Dinner menu page with cream background, red ORDER ONLINE button, monospace menu items, and food photography with checkered tablecloth](https://design.withfudge.com/share/pin-1479)

[![Footer section with teal speckled background, red ORDER ONLINE button, address text in monospace, and red G&B logo mark](https://pin.fontofweb.com/1480?format=jpg)](https://design.withfudge.com/share/pin-1480)

[Footer section with teal speckled background, red ORDER ONLINE button, address text in monospace, and red G&B logo mark](https://design.withfudge.com/share/pin-1480)

[![Homepage hero close-up showing red and dark green layered typography on poster with directional arrows and neighborhood names](https://pin.fontofweb.com/1477?format=jpg)](https://design.withfudge.com/share/pin-1477)

[Homepage hero close-up showing red and dark green layered typography on poster with directional arrows and neighborhood names](https://design.withfudge.com/share/pin-1477)

## Overview

Gates & Brovi is a casual American restaurant in Madison, Wisconsin, and its website communicates a deliberately worn, neighborhood-bar authenticity. The design pairs distressed vintage display typography with clean monospace body text, creating tension between rough-hewn personality and utilitarian clarity. A limited palette of warm cream, saturated red, and deep teal organizes the experience into recognizable zones: navigation and menus rest on cream, calls-to-action shout in red, and the footer anchors everything in weathered teal with speckled texture. Food photography fills the background with shallow depth of field, letting the typographic overlays and menu panels float as distinct surfaces. The overall impression is of a established local institution that does not take itself too seriously—competent, welcoming, and visually loud in the right places.

## Colors

The color system is intentionally small and role-driven, with each hue carrying specific functional and emotional weight.

| token | value | use |
|---|---|---|
| action | #E6332A | Primary buttons, ORDER ONLINE badges, logo wordmark, and accent typography |
| ink | #1A1A1A | Primary text on light surfaces, menu item names, navigation labels |
| muted-ink | #4A4A4A | Secondary descriptions, ingredient lists, prices |
| canvas | #F5F0E8 | Page background, menu panel fill, hero poster backing |
| surface | #0F6B8A | Footer background, lower page banding |
| surface-text | #F5F0E8 | All text on teal surfaces |
| border | #1A1A1A | Hairline rules between menu sections |

The red action color appears with a deliberately distressed, slightly irregular edge treatment on buttons and the logo, reinforcing the handmade quality. The teal surface color carries a visible noise or speckle texture that suggests age and wear, preventing the flat color from feeling digital or sterile. The cream canvas provides warmth against the clinical precision of the monospace body text. Dark ink grounds the menu hierarchy, while muted-ink handles the supporting details without competing for attention. No dark mode is visible in the supplied material; the system operates as a single light-dominant theme with dark accents.

## Typography

Liberator supplies the display voice with its compressed, blocky, vintage-inspired forms. Space Mono handles all functional text with mechanical clarity. The third family, Cl 3 Iskicons, serves as an icon font and is not treated as typography.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Liberator | 4rem | 400 | 0.9 | 0.02em | Homepage poster headlines, large promotional statements |
| section-display | Liberator | 2rem | 400 | 1.1 | 0.01em | Menu category headers, page titles |
| body | Space Mono | 1rem | 400 | 1.6 | 0 | Menu descriptions, ingredient lists, body copy |
| label | Space Mono | 0.75rem | 400 | 1.4 | 0.05em | Buttons, captions, footer details |
| navigation | Space Mono | 0.75rem | 400 | 1 | 0.08em | Top-bar links, uppercase by convention |

Liberator's tight line height and slight positive tracking give it a poster-like density that works at large sizes but would crowd at smaller scales. Space Mono's generous line height keeps multi-line menu descriptions readable despite the typewriter aesthetic. The navigation token uses tighter leading because those links sit on a single line. Verify licensing for these families before production use. Space Mono is credited to Colophon Foundry and Benjamin Critton; no attribution is supported for Liberator or Cl 3 Iskicons.

## Layout

The page structure follows a straightforward layered model: fixed navigation bar, full-bleed hero or content area, and a textured footer band that bleeds to the bottom edge.

The navigation bar spans the full width with the logo left-aligned, primary links centered, and social icons plus the ORDER ONLINE button grouped to the right. The logo occupies roughly the left third of the bar, with navigation links distributed across the center and utility actions on the right. This creates a balanced but asymmetrical header that reads left-to-right in order of brand recognition, wayfinding, and conversion.

The hero section on the homepage uses a full-viewport photograph of the restaurant interior as a background, with a centered poster element floating above. The poster has its own internal padding and centered alignment, creating a nested composition that draws the eye before the surrounding photography. The menu page replaces this with a centered panel on the same photographic background, narrowing the readable column to roughly one-third of the viewport width for comfortable scanning.

The footer is distinctive for its angled top edge—a subtle upward chevron that breaks the horizontal rectangle—and its speckled texture overlay. Content in the footer is centered and sparse: address, email, copyright, and a small logo mark. The teal band extends full width and appears to sit below the fold on most pages, serving as a consistent anchor.

Spacing between major sections uses 4rem as a standard section break, with 1.5rem handling internal component padding. The quarter-rem base unit allows fine adjustments for button padding and hairline positioning without fragmenting the scale.

## Visual language

The visual personality derives from deliberate imperfection: distressed edges on the red logo and buttons, speckled texture on the teal footer, and the mechanical warmth of monospace text against nostalgic display type. This is not minimalism or brutalism but a curated vintage aesthetic that references mid-century diner signage and neighborhood bar hand-painted windows.

Photography plays a supporting role, always present but never competing with typography. Images are warm, shallow-focus, and food-centric—fried items, checkered tablecloths, glassware catching light. The menu page backgrounds show table settings with the same shallow depth of field, creating continuity between homepage and interior pages.

The poster element on the homepage deserves particular attention: it layers two colors of Liberator text (red and a dark green-black) with a teal triangular shape behind, creating a three-color print effect that references screen printing or letterpress. Directional arrows and neighborhood names in smaller monospace text complete the composition, turning the poster into both decoration and local landmark reference.

Texture appears in two forms: the fine noise on the teal footer and the heavier distress on red surfaces. These textures prevent the limited palette from feeling flat and reinforce the handmade positioning.

## Components

### Primary action button

- **Anatomy**: Rectangular button with slightly irregular or distressed edges, text label centered
- **Surface and text color**: Red background (#E6332A) with cream text (#F5F0E8)
- **Typography**: label token, uppercase, with slight letter spacing
- **Shape**: Small rounded corners (0.25rem) that do not soften the aggressive color
- **Spacing**: 0.75rem vertical padding, 1.5rem horizontal padding
- **Composition**: Appears in navigation bar and centered in menu panels; identical treatment in both contexts
- **Variants**: The ORDER ONLINE button in the nav bar appears to share the same styling as the centered menu CTA, suggesting a single primary button treatment across contexts

### Menu panel

- **Anatomy**: Centered vertical panel with cream background, containing category headers, item names, descriptions, and prices
- **Surface and text color**: Cream background (#F5F0E8) with ink text (#1A1A1A), muted-ink for descriptions (#4A4A4A)
- **Typography**: section-display for category headers (OYSTERS, SOUP, SALADS, APPETIZERS), body for item names and descriptions, label for prices
- **Shape**: No visible border radius; reads as a clean rectangle
- **Spacing**: Generous internal padding (approximately 4rem top and bottom, narrower sides), with horizontal rules separating major categories
- **Composition**: Centered on page, roughly one-third viewport width, floating over full-bleed photography
- **Hierarchy**: Category headers in Liberator establish sections; item names in bold or uppercase Space Mono; descriptions in regular weight; prices inline or right-aligned

### Site footer

- **Anatomy**: Full-width band with angled top edge, containing centered text lines and small logo mark
- **Surface and text color**: Teal background (#0F6B8A) with visible speckle texture, cream text (#F5F0E8)
- **Typography**: label token for all content, including address, email, and copyright
- **Shape**: Angled top edge creates upward-pointing chevron; bottom edge is straight
- **Spacing**: Comfortable vertical padding, content centered horizontally
- **Composition**: Single centered column of information; logo mark sits between address and copyright

### Navigation bar

- **Anatomy**: Full-width fixed bar with logo left, links center, social icons and CTA right
- **Surface and text color**: Cream background matching page (#F5F0E8), ink text (#1A1A1A)
- **Typography**: navigation token for links, label for social icons
- **Shape**: Straight rectangle, no border or shadow visible
- **Spacing**: Tight horizontal spacing between links, generous padding around CTA button
- **Composition**: Flex row with space-between alignment; logo as visual anchor left, conversion action right

## Responsive behavior

The supplied images show desktop layouts only. Based on the visible structure, several adaptive strategies are recommended.

The menu panel's fixed narrow width would need to expand on smaller viewports, likely becoming nearly full-width with reduced padding to maintain readability. The centered poster on the homepage should scale down proportionally, with Liberator text remaining large enough to maintain impact; at very small sizes, the two-color layered effect may simplify to a single color for clarity.

The navigation bar's multi-element row will collapse on narrow screens. A common pattern for this density would convert to a hamburger menu or stacked logo-and-CTA arrangement, though the specific breakpoint and mechanism are not visible. The social icons may drop to a secondary menu tier or footer on mobile.

The footer content, already minimal and centered, should remain readable without adjustment, though the angled top edge may flatten or reduce its amplitude to preserve vertical space.

## Practical implementation guidance

### Preserve
- The distressed edge treatment on red surfaces; this is central to the brand personality and should not be replaced with clean vector shapes
- The two-tone Liberator layering on the homepage poster; the red-over-dark-green effect creates depth that flat color cannot replicate
- The speckled texture on the teal footer; this weathering is intentional and distinguishes the surface from generic flat color
- The monospace body text for menus; the typewriter aesthetic is a deliberate contrast to the vintage display type

### Avoid
- Adding shadows or gradients to the primary button; the flat red with distressed edges is the complete treatment
- Using Liberator at small sizes; its compressed forms become illegible below the section-display threshold
- Replacing the cream background with pure white; the warmth (#F5F0E8) is essential to the vintage diner feel
- Centering body text outside of the menu panel; the visible design uses left-aligned monospace for readability

### Recommended build order
1. Establish the color tokens and apply canvas background to the page
2. Implement Liberator at hero-display and section-display sizes with appropriate line heights
3. Build the navigation bar with Space Mono navigation links and the primary action button
4. Create the menu panel component with correct internal spacing and category hierarchy
5. Implement the footer with teal surface, speckle texture, and angled top edge
6. Add the homepage poster as a layered composition with the triangular teal shape and two-color text

### Accessibility
- The red action color on cream passes typical contrast thresholds for large text but should be verified at the label token size; consider a slightly darker red if needed for small button text
- Space Mono's mechanical forms are highly legible but may benefit from slightly increased line height in dense menu descriptions
- The distressed edges on buttons should not remove focus indicators; maintain visible focus rings for keyboard navigation
- The speckled footer texture should not reduce text contrast below WCAG AA standards; ensure the noise layer sits behind text at reduced opacity or that text has sufficient separation

## Scope note

This guide covers the homepage and dinner menu page surfaces visible in the supplied images. Mobile layouts, additional interior pages, hover and focus states, loading behavior, and animation are not represented. Measurements are practical adaptation targets derived from visual inspection against a 4px relative unit.
