# How fonts.ninja is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/fonts.ninja-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with massive 'FONTS NINJA' wordmark in black on off-white, coral accent dot, and navigation bar with hamburger menu](https://pin.fontofweb.com/1311?format=jpg)](https://design.withfudge.com/share/pin-1311)

[Homepage hero with massive 'FONTS NINJA' wordmark in black on off-white, coral accent dot, and navigation bar with hamburger menu](https://design.withfudge.com/share/pin-1311)

[![Bookmarks page with oversized 'Let's bookmark fonts!' display typography, coral CTA button, and minimal footer](https://pin.fontofweb.com/1312?format=jpg)](https://design.withfudge.com/share/pin-1312)

[Bookmarks page with oversized 'Let's bookmark fonts!' display typography, coral CTA button, and minimal footer](https://design.withfudge.com/share/pin-1312)

[![Coral cookie consent banner with white text, two pill-shaped buttons, and cookie icon on rounded panel](https://pin.fontofweb.com/1310?format=jpg)](https://design.withfudge.com/share/pin-1310)

[Coral cookie consent banner with white text, two pill-shaped buttons, and cookie icon on rounded panel](https://design.withfudge.com/share/pin-1310)

[![White rounded menu panel with download icon, display mode toggle, and social links on light gray background](https://pin.fontofweb.com/1313?format=jpg)](https://design.withfudge.com/share/pin-1313)

[White rounded menu panel with download icon, display mode toggle, and social links on light gray background](https://design.withfudge.com/share/pin-1313)

## Overview

Fonts Ninja presents a typographically assertive, deliberately sparse interface that places letterforms at the center of the experience. The system is built around extreme scale contrasts: massive display headings dominate the viewport while supporting elements recede into quiet utility. The visual identity relies on a near-monochrome foundation of deep black against warm off-white, punctuated by a single coral accent that appears sparingly as interactive signals. Every surface serves the content rather than competing with it—navigation is understated, buttons are minimal pills, and containers float with soft rounded corners against neutral grounds. The overall impression is that of a confident, contemporary tool for designers: direct, uncluttered, and relentlessly focused on typography as both subject and structural material.

## Colors

The palette is intentionally restricted, using color as a functional accent rather than decorative element. The system operates in a light mode throughout the visible surfaces, with no dark mode variants apparent.

| token | value | use |
|---|---|---|
| ink | #111111 | Primary text, massive display headings, body copy, icons, and all structural typography |
| canvas | #F5F5F5 | Page background, establishing warm neutrality behind content |
| accent | #F25C5C | Primary action buttons, text links, decorative dots, and cookie consent banner surface |
| surface | #FFFFFF | Floating panels, menu cards, button fills on colored backgrounds, and cookie banner action buttons |
| muted-ink | #666666 | Secondary navigation, footer legal text, and de-emphasized labels |

The relationship between tokens follows a clear hierarchy: ink on canvas provides maximum contrast for reading at all scales, while accent draws attention exclusively to interactive targets. The coral accent appears in two modes—as a filled surface for primary actions and banners, and as inline text color for embedded links within body copy. Surface white is reserved for elements that need to lift above their context, whether as a menu panel over gray or as a button sitting on coral. No gradients, shadows, or border colors are visible in the interface; depth is achieved through scale and spacing alone.

## Typography

A single variable font family drives the entire typographic system. Aeonik Vf, supplied by Co Type Foundry, spans dramatic weight and size ranges without introducing secondary families. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Aeonik Vf | 8rem | 700 | 0.9 | -0.03em | Massive homepage wordmark, full-bleed section headlines |
| section-display | Aeonik Vf | 6rem | 400 | 0.95 | -0.02em | Large page headings with lighter weight, secondary hero treatments |
| body | Aeonik Vf | 1.5rem | 400 | 1.3 | -0.01em | Introductory paragraphs, descriptive blocks beneath headlines |
| body-small | Aeonik Vf | 1rem | 400 | 1.4 | 0 | Cookie consent text, captions, secondary descriptions |
| label | Aeonik Vf | 0.875rem | 400 | 1.2 | 0 | Button text, compact UI labels |
| navigation | Aeonik Vf | 1rem | 400 | 1 | 0 | Top-bar links, menu items, footer legal text |

The type scale is built on a 4px relative unit, with every size an exact whole-number multiple of that step. Display sizes push well beyond conventional bounds, with the hero wordmark occupying substantial vertical space and breaking across lines with aggressive negative tracking. Body sizes maintain generous proportions that feel editorial rather than utilitarian. The absence of a dedicated bold body weight suggests the variable font's weight axis is used primarily at the display end of the scale, while interface text remains in a consistent regular weight.

## Layout

The layout system embraces extreme asymmetry and generous whitespace. Pages are structured as single-column compositions where content anchors to the left edge with substantial left margin, leaving the right side open and breathing. The homepage hero places the "FONTS NINJA" wordmark at full viewport width, bleeding to the edges with minimal surrounding padding. Below this, a short horizontal rule introduces body copy that sits in the lower-left quadrant, occupying roughly half the viewport width.

The bookmarks page reverses the density: the display headline "Let's bookmark fonts!" occupies the left two-thirds of the screen at enormous scale, while a compact signup block floats in the right third, vertically centered against the headline mass. This asymmetric pairing of giant typography with small functional modules is a recurring compositional strategy.

Navigation sits as a sparse top bar: logo at the far left, text links and utility icons clustered at the far right, with the majority of the horizontal space left empty. The hamburger menu trigger uses a simple three-line icon without container or background. Footer information is reduced to a single line of legal text at the bottom-left margin, set in muted color at small size.

Floating panels—such as the cookie consent and menu overlay—use centered or right-aligned positioning with rounded corners that soften their presence against the rectilinear page structure. No visible grid lines, borders, or background patterns interrupt the flat color fields.

## Visual language

The visual language is defined by scale contrast and restraint. The most distinctive element is the treatment of display type: letters are allowed to become architectural, filling horizontal space with tight tracking and minimal line height. A small coral dot or arrow often terminates a headline, functioning as a punctuation mark that doubles as a brand signature.

Iconography is minimal and linear: simple arrows, download symbols, information circles, and social media glyphs rendered in the same weight as body text. No filled icons or illustrative graphics appear outside the small cookie icon in the consent banner. The ninja brand mark is a compact, gestural figure that occupies minimal space in the top-left corner.

Photography and illustration are entirely absent from the visible interface. The system relies on pure typography, color blocking, and negative space to create visual interest. Rounded corners appear only on floating containers and buttons, never on the primary canvas or display text blocks. The overall effect is that of a refined tool interface crossed with an editorial poster: functional but aesthetically uncompromising.

## Components

### Primary action button

- **Anatomy**: Text label with optional leading icon, no visible border
- **Surface and text color**: Coral accent background with white text; or white background with black text when on coral surfaces
- **Typography**: `{typography.label}`
- **Shape and border**: Full pill shape with `9999px` border radius
- **Spacing**: Compact horizontal padding approximately 1.5rem, vertical padding approximately 0.75rem
- **Composition**: Icon and text inline with small gap
- **Variants**: Filled coral for primary actions; filled white for actions on coral backgrounds

### Navigation bar

- **Anatomy**: Logo mark left-aligned, text links center-right, utility icons and hamburger menu far right
- **Surface and text color**: Transparent or canvas background, ink text
- **Typography**: `{typography.navigation}`
- **Shape and border**: No visible border or background container
- **Spacing**: Full viewport width with generous horizontal margins
- **Composition**: Horizontal flex with space-between logic, items clustered at extremes

### Cookie consent banner

- **Anatomy**: Rounded panel containing icon, multi-line text, and two action buttons
- **Surface and text color**: Coral accent background with white text; buttons in white with black text
- **Typography**: `{typography.body-small}` for message, `{typography.label}` for buttons
- **Shape and border**: Large rounded corners approximately 1.5rem, no shadow
- **Spacing**: Comfortable internal padding, buttons with small gap between
- **Composition**: Centered or floating placement, content stacked vertically with buttons side by side

### Menu panel

- **Anatomy**: Rounded card containing list items with icons, close control, and social links
- **Surface and text color**: White surface, ink text, no accent color
- **Typography**: `{typography.body}` for list items
- **Shape and border**: Large rounded corners approximately 1.5rem, subtle shadow or flat against gray background
- **Spacing**: Generous internal padding, list items with comfortable vertical rhythm
- **Composition**: Modal-like overlay, close button at top right

### Hero wordmark

- **Anatomy**: Single or multi-line display text, occasionally terminated by accent dot or arrow
- **Surface and text color**: Ink on canvas, no background container
- **Typography**: `{typography.hero-display}` or `{typography.section-display}`
- **Shape and border**: None
- **Spacing**: Minimal top margin, tight line stacking, generous bottom clearance before subsequent content
- **Composition**: Full-width or near-full-width, left-aligned, allowed to break across lines at natural word boundaries

## Responsive behavior

The visible surfaces suggest a desktop-first approach with fixed breakpoints. The massive display type would require significant reduction for smaller viewports—hero sizes should scale down to maintain legibility without excessive line breaks. The asymmetric two-column layout of the bookmarks page, with giant headline beside compact signup block, would likely collapse to a single stacked column on narrow screens, with the signup module following the headline rather than sitting beside it.

Navigation items visible in the top bar may consolidate into the hamburger menu at intermediate widths. The floating menu panel and cookie banner appear sized for desktop; these should adapt to full-width or near-full-width on mobile to maintain touch targets and readability.

No specific breakpoint values are visible in the supplied surfaces. Implementers should test where the hero wordmark begins to feel cramped, likely between 768px and 1024px, and where the two-column bookmarks layout loses coherence, probably near 900px.

## Practical implementation guidance

### Preserve
- The extreme scale contrast between display and body type; this is the system's defining characteristic
- Single-font-family purity; do not introduce secondary typefaces for hierarchy
- The restrained use of coral accent as the sole color intervention
- Generous left margin and asymmetric composition
- Full pill buttons with no border radius other than complete rounding
- The quiet, borderless navigation bar

### Avoid
- Adding background colors or borders to the hero wordmark area
- Using the accent color for large surface areas beyond functional banners and buttons
- Introducing drop shadows on floating panels; the visible system appears flat
- Reducing tracking on display type; the tight letter spacing is essential to the visual density
- Adding decorative imagery or illustration where the source uses none

### Recommended build order
1. Establish the canvas background and install Aeonik Vf with full weight range
2. Implement the hero wordmark at maximum scale with correct tracking and line height
3. Build the navigation bar with logo, links, and utility icons in correct positions
4. Create the primary action button component with pill shape and coral fill
5. Add body text styles and the asymmetric content pairing pattern
6. Implement floating panels (menu, cookie banner) with rounded corners and correct internal spacing
7. Fine-tune responsive scaling for display type and layout collapse

### Accessibility
- Ensure the massive display headings remain readable when zoomed; test at 200% browser zoom
- The coral accent on off-white canvas should be verified for contrast compliance; the combination appears sufficient for large text but may need adjustment for small UI labels
- Cookie banner buttons should maintain clear focus indicators since the source shows no visible focus state
- The hamburger menu trigger needs an accessible label and expanded state announcement
- Consider reducing motion for users who prefer it, particularly if any entrance animations are added to the large type

## Scope note

This guide covers the homepage and bookmarks page surfaces visible in the supplied images, including navigation, hero typography, action buttons, cookie consent, and menu panel components. Measurements are practical adaptation targets. Mobile layouts, additional interior pages, dark mode, hover and focus states, loading indicators, and any font catalog browsing interfaces are not represented in the available material.
