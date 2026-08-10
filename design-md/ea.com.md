# How ea.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/ea.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with social icons, PEGI rating badges, legal navigation, and copyright on dark charcoal background with orange accent borders](https://pin.fontofweb.com/813?format=jpg)](https://design.withfudge.com/share/pin-813)

[Footer section with social icons, PEGI rating badges, legal navigation, and copyright on dark charcoal background with orange accent borders](https://design.withfudge.com/share/pin-813)

[![Newsletter signup form with email capture fields, privacy policy links, and bright orange submit button on near-black background](https://pin.fontofweb.com/812?format=jpg)](https://design.withfudge.com/share/pin-812)

[Newsletter signup form with email capture fields, privacy policy links, and bright orange submit button on near-black background](https://design.withfudge.com/share/pin-812)

[![News section with featured article hero image, article grid with orange-tinted thumbnails, and category date labels](https://pin.fontofweb.com/811?format=jpg)](https://design.withfudge.com/share/pin-811)

[News section with featured article hero image, article grid with orange-tinted thumbnails, and category date labels](https://design.withfudge.com/share/pin-811)

[![Features carousel with large combat imagery, pagination dots, section heading, and outlined navigation arrows on dark background](https://pin.fontofweb.com/810?format=jpg)](https://design.withfudge.com/share/pin-810)

[Features carousel with large combat imagery, pagination dots, section heading, and outlined navigation arrows on dark background](https://design.withfudge.com/share/pin-810)

## Overview

The EA.com Battlefield design system presents a dark, cinematic visual language built around military authenticity and high-energy action. The system prioritizes immersive photography and video content, using a near-black canvas that allows combat imagery to dominate the viewport. Typography draws from a custom Battlefield type family with condensed headline weights, monospace labels, and clean body text, creating a utilitarian military aesthetic that feels both tactical and premium.

The design operates on a principle of restraint punctuated by intensity: most surfaces remain in deep charcoal and black tones, while a vivid orange accent provides the primary call-to-action energy. This creates a clear hierarchy where content—particularly large-scale game photography—takes precedence, and interactive elements announce themselves through color rather than size or ornamentation. The overall impression is of a professional military briefing document translated into a modern web experience, with dense information presented in disciplined, grid-based layouts.

## Colors

The color system is intentionally narrow, deriving its visual interest from photography rather than chromatic variety. The dark foundation ensures that game imagery appears luminous and saturated by contrast.

| token | value | use |
|---|---|---|
| canvas | #0a0a0a | Deepest background layer, newsletter section ground |
| surface | #1a1a1a | Card backgrounds, elevated panels, footer sections |
| surface-elevated | #2a2a2a | Input fields, hover states, secondary containers |
| ink | #ffffff | Primary text, headings, icons, button labels |
| ink-muted | #a0a0a0 | Secondary text, captions, legal copy, timestamps |
| action | #ff4d00 | Primary buttons, active indicators, category tags, hover emphasis |
| action-hover | #e64500 | Action button pressed/hover state |
| border | #404040 | Visible dividers, card outlines, navigation separators |
| border-subtle | #2a2a2a | Hairline rules, footer top borders, inactive field states |

The palette divides into three functional zones. The dark neutrals (canvas through surface-elevated) establish depth and material hierarchy. The ink values provide text contrast with a deliberate muted tier for supporting information. The action orange serves as the sole warm accent, appearing in buttons, active pagination dots, image overlays, and category labels. This restriction makes the orange highly salient when deployed.

Photography introduces its own color temperature—cool blues and grays from military environments, warm explosions and muzzle flash—which the neutral palette accommodates without competition. No gradient or shadow tokens are present; depth is achieved through photography and flat tonal layering.

## Typography

The type system uses a family of custom Battlefield fonts plus Electronic Arts Display for corporate moments. All sizes derive from a 4px base unit, producing clean rem values.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Bfheadline-Narrowbold | 3rem | 700 | 1 | 0.05em | Page titles, major section headers |
| section-display | Bfheadline-Narrowbold | 2.5rem | 700 | 1.1 | 0.04em | "NEWS", "FEATURES" section headings |
| subheadline | Bfsubheadline | 1.25rem | 700 | 1.2 | 0.02em | Article titles, feature names |
| body | Bftext | 1rem | 400 | 1.5 | 0 | Descriptions, form helper text |
| body-small | Bftext | 0.875rem | 400 | 1.5 | 0 | Card excerpts, legal disclaimers |
| label | Bfmono | 0.75rem | 400 | 1.2 | 0.08em | Buttons, tags, form field labels |
| navigation | Bfmono | 0.75rem | 400 | 1 | 0.1em | Footer links, breadcrumb paths |

The headline family (Bfheadline-Narrowbold) delivers the system's most distinctive voice: extremely condensed, all-caps, with wide tracking that evokes military stencil markings and tactical displays. The monospace label family (Bfmono) reinforces this utilitarian character in navigation and interactive elements. Body text uses the more neutral Bftext for readability at smaller sizes.

Electronic Arts Display appears only for corporate attribution, such as the "Electronic Arts" wordmark in the footer. Verify licensing for these families before production use. The Bf families carry no attributed designer or vendor in the available records.

## Layout

The layout system favors full-bleed immersive sections with strict internal grids. Content max-width appears to center around a comfortable reading measure, but hero imagery and feature carousels break container bounds to fill the viewport width.

Section spacing uses 6rem vertical padding for major divisions, creating clear breathing room between content types. Within sections, a 2rem component gap organizes related elements. The grid for news cards appears to use four columns on desktop, with consistent 1rem gutters.

The feature carousel (visible in pin 810) demonstrates a layered composition: a large central image dominates, flanked by partial preview images that bleed off-screen, suggesting horizontal scrollability. Pagination dots sit centered below the image, with navigation arrows positioned at the outer edges of the content area. Text content—headline, description, and call-to-action—centers below the imagery in a stacked, symmetrical arrangement.

The news grid (pin 811) shows a featured article spanning roughly two-thirds width with a large hero image, followed by a four-column card grid below. Each card maintains uniform aspect ratio for thumbnails, with text content aligned to a consistent baseline. Category labels and dates appear above titles in the monospace label style, establishing a predictable information hierarchy.

Footer sections (pin 813) stack horizontally at full width: social icons left, corporate and legal center, utility controls right. Below this, rating badges center, followed by breadcrumb-style navigation paths. Legal text accumulates in dense paragraphs with generous line-height for readability.

## Visual language

The visual language communicates military precision and cinematic intensity through several consistent treatments. Photography receives full-bleed presentation with no rounded corners or decorative frames—images meet the container edge sharply, emphasizing documentary realism over polished marketing.

The orange accent (#ff4d00) functions as the system's pulse: it appears in active states, primary actions, and subtle image treatments like gradient overlays on card thumbnails. This warmth against cool, desaturated combat photography creates visual tension that draws the eye toward interactive elements.

Iconography uses simple outlined squares for social platforms, maintaining the geometric restraint of the broader system. The EA logo and studio marks appear in white against dark grounds, with the "STUDIOS" wordmark set in spaced capitals.

Texture and depth come from photography alone. No drop shadows, glassmorphism, or dimensional effects are visible on UI elements. Buttons sit flat on their backgrounds; cards are defined by single-pixel borders rather than elevation. This flatness keeps attention on the dimensional game imagery while reinforcing the tactical, no-nonsense aesthetic.

## Components

### Primary Action Button

- **Anatomy**: Text label centered within a rectangular fill
- **Surface**: Solid action orange (#ff4d00) background
- **Typography**: label token, uppercase, letter-spaced
- **Shape**: Zero border radius, sharp corners
- **Spacing**: 1rem vertical padding, 2rem horizontal padding
- **States**: Default orange; hover likely shifts to action-hover (#e64500)

### Secondary Action Button

- **Anatomy**: Text label within a bordered outline
- **Surface**: Transparent background, 1px ink (#ffffff) border
- **Typography**: label token, uppercase
- **Shape**: Zero border radius
- **Spacing**: 0.75rem vertical, 1.5rem horizontal
- **Use**: "LEARN MORE", "SEE ALL" actions where primary emphasis would compete with imagery

### Feature Carousel

- **Anatomy**: Large central image, partial flanking images, pagination dots, section heading, description, navigation arrows, CTA button
- **Surface**: Canvas (#0a0a0a) background, images sit directly on ground
- **Typography**: section-display for "FEATURES" heading; subheadline for slide title; body for description; label for CTA
- **Composition**: Centered text stack below image; arrows positioned at outer content edges; pagination dots centered between image and text
- **Interaction**: Dots indicate position; second dot filled suggests active state styling

### News Card

- **Anatomy**: Thumbnail image, category tag, date, title, excerpt
- **Surface**: Surface (#1a1a1a) background with 1px border (#404040)
- **Typography**: label for "NEWS ARTICLE" tag and date; subheadline for title; body-small for excerpt
- **Shape**: Zero border radius on container; image fills top portion
- **Spacing**: Internal padding approximately 1rem; image aspect ratio appears cinematic (~16:9)
- **Variants**: Featured card spans wider with larger image; standard cards grid at equal width

### Newsletter Form

- **Anatomy**: Heading, description, email input, birthday input, country select, consent checkbox, submit button, sign-in link
- **Surface**: Canvas (#0a0a0a) background; inputs use slightly elevated dark value
- **Typography**: section-display for heading; body for description and helper text; label for input labels and button
- **Shape**: Zero border radius on all inputs and button
- **Composition**: Left column for persuasive copy, right column for form fields; inputs stack with consistent vertical rhythm
- **States**: Input borders show subtle differentiation between default and focused

### Footer

- **Anatomy**: Social icon row, corporate marks, rating badges, breadcrumb navigation, legal links, copyright, trust badge
- **Surface**: Surface (#1a1a1a) with 1px top border (#404040)
- **Typography**: navigation for link rows; body-small for legal text; label for copyright
- **Composition**: Three-zone horizontal layout at top; centered badge row; full-width legal stack below
- **Elements**: PEGI-style rating icons in circular and triangular formats; language selector and back-to-top utility controls

## Responsive behavior

The supplied images show desktop viewport widths. Based on the dense information architecture and multi-column layouts, several adaptive strategies are recommended:

At narrower viewports, the four-column news grid should collapse to two columns and then single column, maintaining card internal proportions. The feature carousel's flanking preview images would likely hide, leaving a single centered image with swipe or arrow navigation. Footer horizontal zones should stack vertically, with social icons and utility controls moving to full-width rows.

Typography scales should reduce by approximately 25% at tablet and 35% at mobile for hero-display and section-display tokens, while body and label sizes can remain constant for readability. The newsletter form's two-column layout should become single-column, with inputs stacking sequentially.

Touch targets for carousel arrows and pagination dots should expand to minimum 44px on mobile devices. The dense legal footer text may require increased line-height at small sizes to maintain readability.

## Practical implementation guidance

### Preserve
- The sharp, zero-radius corners on all interactive elements—this geometric severity is central to the military aesthetic
- The all-caps, wide-tracked label treatment for buttons and navigation
- The dark canvas that allows photography to dominate luminance
- The single orange accent against neutral grounds; resist adding secondary accent colors
- The flat, non-dimensional treatment of UI surfaces

### Avoid
- Rounded corners on buttons, cards, or inputs—they contradict the tactical visual language
- Drop shadows or elevation effects on UI elements
- Multiple accent colors that would dilute the orange action signal
- Decorative background patterns or textures behind content
- Serif typefaces or casual script fonts that would undermine the utilitarian tone

### Recommended Build Order
1. Establish the dark canvas and surface color tokens
2. Implement the Bfheadline-Narrowbold for section headings with proper tracking
3. Build the primary action button with sharp corners and orange fill
4. Create the feature carousel with full-bleed imagery and centered text stack
5. Develop the news card component with consistent thumbnail aspect ratio
6. Assemble the newsletter form with stacked inputs and orange submit
7. Construct the footer with horizontal zone layout and legal text hierarchy

### Accessibility
- Ensure orange action elements meet minimum 3:1 contrast against dark backgrounds for UI components; text on orange should use dark ink if 4.5:1 contrast cannot be achieved with white
- Provide visible focus indicators that do not rely solely on color change; consider outline or border shifts for keyboard navigation
- Add aria-labels to icon-only social links and carousel navigation arrows
- Implement reduced-motion preferences for carousel auto-advance if present
- Maintain readable line lengths in legal text; consider max-width constraints for body copy

## Scope note

This guide covers the Battlefield 6 game page and EA.com homepage footer surfaces visible in the supplied images. Mobile breakpoints, animation specifications, form validation states, search functionality, and e-commerce flows are not represented. Measurements are practical adaptation targets derived from visual estimation against a 4px base unit. The full Electronic Arts corporate site may employ additional components and color treatments not documented here.
