# How traderepublic.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/traderepublic.com-design)

Last updated: 2026-08-10

## Captured pages

[![About us page with dark hero section and white product modal overlay showing Interest, Current Account, and Spending Abroad features](https://pin.fontofweb.com/9943?format=jpg)](https://design.withfudge.com/share/pin-9943)

[About us page with dark hero section and white product modal overlay showing Interest, Current Account, and Spending Abroad features](https://design.withfudge.com/share/pin-9943)

[![Careers section with black investor logo banner and large bold heading over white space with right-aligned office photography](https://pin.fontofweb.com/9942?format=jpg)](https://design.withfudge.com/share/pin-9942)

[Careers section with black investor logo banner and large bold heading over white space with right-aligned office photography](https://design.withfudge.com/share/pin-9942)

[![Support page hero with person on phone in warm interior, white text overlay, and black contact QR code card](https://pin.fontofweb.com/9941?format=jpg)](https://design.withfudge.com/share/pin-9941)

[Support page hero with person on phone in warm interior, white text overlay, and black contact QR code card](https://design.withfudge.com/share/pin-9941)

[![Footer with multi-column link grid, social icons, risk disclaimer, and country selector with app download QR code](https://pin.fontofweb.com/9940?format=jpg)](https://design.withfudge.com/share/pin-9940)

[Footer with multi-column link grid, social icons, risk disclaimer, and country selector with app download QR code](https://design.withfudge.com/share/pin-9940)

## Overview

Trade Republic's visual system is built on radical simplicity and high contrast. The design communicates financial confidence through an almost monochromatic palette, a single bespoke type family at dramatic scale, and photography that feels candid rather than corporate. Every page alternates between immersive dark hero moments and clean white content areas, creating a rhythm that keeps the experience visually engaging without decorative excess. The overall impression is of a product that has nothing to hide—direct, modern, and institutionally serious without being cold.

The system relies on two core ideas: the power of extreme scale in typography, and the discipline of restraint in color. Hero headlines dominate their sections at 80 pixels, set in a custom display weight of Trade Republic Sans that feels both engineered and approachable. Body text maintains the same family but steps down to calmer weights and sizes, ensuring readability across long-form content like product explanations and support documentation. Photography is treated as a compositional element rather than mere illustration, often filling entire viewport sections with natural-light scenes that ground the financial product in real human activity.

## Colors

The palette is intentionally minimal, built from four exact interface colors that create maximum contrast with minimal complexity.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, button backgrounds, header borders, hero section backgrounds |
| muted-ink | #8C939C | Secondary text, footer links, disabled states, subtle UI elements |
| border | #BCC2CA | Dividers, hairline separators, inactive form borders |
| canvas | #FFFFFF | Page background, modal surfaces, button text on dark backgrounds, hero text |

The color logic follows a strict binary: dark sections use ink backgrounds with canvas text, while content sections invert to canvas backgrounds with ink text. This creates an unmistakable visual rhythm across pages. The muted-ink tone appears primarily in footer navigation and secondary links, where it reduces visual noise without disappearing entirely. No accent colors compete for attention—photography provides all necessary warmth and variation. Dark hero sections often incorporate photography with natural shadows and warm interior tones, but these are image-palette values, not UI tokens. The system avoids gradients entirely, relying on flat color fields and photographic depth for visual interest.

## Typography

Trade Republic Sans, designed by Briton Smith for Family Type, is the sole type family. It appears in two source weights: 500 and 740. The 740 weight serves display purposes exclusively, while 500 handles body text with weight variations from 500 through 700 depending on semantic role. The exact source files are Trade Republic Sans-500 and Trade Republic Sans-740. Applesystem appears at 14px in limited fallback contexts, and Times at 16px serves as a system fallback. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Trade Republic Sans | 5rem | 740 | 1 | 0.0125em | Hero headlines, section titles over photography |
| section-display | Trade Republic Sans | 3rem | 700 | 0.98 | 0.0042em | Major section headings in content areas |
| body-large | Trade Republic Sans | 1.25rem | 600 | 1.4 | 0.0125em | Lead paragraphs, feature descriptions |
| body | Trade Republic Sans | 1.125rem | 500 | 1.375 | normal | Primary body text, long-form content |
| label | Trade Republic Sans | 1rem | 600 | 1.5 | 0.0125em | Buttons, navigation items, category labels |
| navigation | Trade Republic Sans | 1rem | 600 | 1.5 | 0.0125em | Header links, footer section headers |

The display weight at 80px with 80px line-height creates an almost square, poster-like quality that defines the brand's voice. Letter spacing is consistently tight at 0.2px for display and label sizes, giving headlines a crafted, intentional feel. Body text at 18px with 24.75px line-height maintains generous readability for European language content. The 20px size at 28px line-height serves as an intermediate for emphasized paragraphs that need more presence than standard body without reaching display scale.

## Layout

The layout system is built on a 2px relative unit, with all measurements deriving from this base. Content flows within a centered main container with 28px side margins, creating consistent breathing room without excessive width constraints.

Section spacing follows a clear hierarchy: major sections receive 80px bottom margins, while internal content gaps range from 16px for tight groupings to 32px for related blocks, 64px for distinct sections, and 180px–280px for dramatic hero-to-content transitions. Hero sections use substantial top padding—130px to 146px—to push content below the fixed header, creating immersive full-bleed photography moments.

The header is fixed with a 2px bottom border in ink, using 20px vertical and 18px horizontal padding. Navigation links sit within 16px padded containers with 16px gaps between items. Buttons maintain 16px uniform padding with 16px border radius, creating pill-like shapes that feel friendly against the system's sharp contrasts.

Content panels and cards use 16px border radius for standard containers, expanding to 24px for larger modal surfaces. The footer introduces more complex spacing: 176px top padding creates enormous whitespace above the link grid, 48px row gaps separate major footer sections, and 32px gaps organize link columns internally.

## Visual language

Photography is central to Trade Republic's identity. Images are candid, naturally lit, and human-centered—people in domestic or travel contexts using phones, working at desks, or resting in interiors. The treatment avoids stock-photo polish in favor of moments that feel unstaged. Warm color temperatures in photography contrast with the cool neutrality of the UI, creating emotional warmth without compromising interface clarity.

The visual system alternates between two modes: immersive dark and clean white. Dark sections use full-bleed photography with white text overlaid directly, often with minimal gradient protection. White sections strip away background entirely, letting typography and sparse UI elements float in generous whitespace. This alternation prevents monotony while maintaining the system's restrained palette.

QR codes appear as functional decorative elements—black cards with white codes for contact and app download, white cards with black codes for header utility. These bridge digital and physical experience without breaking the monochrome discipline.

Shadows are used sparingly and precisely: buttons carry a multi-layer shadow stack (rgba(0,0,0,0.14) at 3px, rgba(0,0,0,0.11) at 11px, rgba(0,0,0,0.05) at 24px, rgba(0,0,0,0.02) at 43px) that creates subtle elevation without visible blur artifacts.

## Components

### Header

The header is fixed, white-background, with a 2px ink bottom border. It contains the Trade Republic wordmark left-aligned, navigation links center-right, and utility actions (Log in, Sign up, Get the app with QR code) far right. Navigation links use 16px Trade Republic Sans at 600 weight with 0.2px letter spacing. The Sign up button inverts to ink background with canvas text, while Log in remains text-only. Header padding is 20px vertical, 18px horizontal, with internal navigation gaps of 16px.

### Hero section

Hero sections are full-width, typically dark, with large photography backgrounds. Text sits bottom-left with substantial padding: 130px–146px top, 16px sides, 16px–71px bottom depending on content density. The headline uses hero-display typography in canvas white, with body-large or body text beneath for descriptions. Some heroes use ink text on white backgrounds when photography is absent. The composition places text in the lower third, letting photography dominate the upper visual field.

### Content panel

White background panels with 16px border radius and 16px padding serve as the primary content container. On dark pages, these panels float above the hero as modal-like overlays with 24px border radius and expanded padding (64px top, 48px bottom, 24px sides). Internal spacing uses 32px row gaps between major items, 24px gaps between related text blocks, and 16px for tight label-value pairings.

### Button

Primary buttons use ink background, canvas text, 16px border radius, and 16px uniform padding. Typography is label token at 600 weight. The multi-layer shadow creates elevation on hover-capable devices. A variant exists with canvas background and ink text for secondary actions. Buttons containing icons and text use 8px gaps between elements.

### Footer

The footer is expansive, with 176px top padding creating dramatic whitespace above content. It organizes into four columns: Offering, Company, Customers, and a country selector. Column headers use body-large at 600 weight in ink, while links use muted-ink at the same size. A risk disclaimer paragraph in body size precedes the link grid. Social icons appear as 16px circles in ink. The footer background is canvas white, with a thin ink border separating it from main content. Country selection uses a German flag icon with "Deutschland" label and language toggle.

### QR code card

Small floating cards containing QR codes appear in two colorways: black background with white code and "Contact us" or "Get the app" label, and white background with black code. These use 16px border radius and sit fixed to viewport corners, creating persistent conversion paths without interrupting content flow.

## Responsive behavior

The system appears optimized for desktop viewport widths, with generous margins and large typography scales that would require significant adaptation for smaller screens. At narrower widths, the 80px display headlines should scale down proportionally—likely to 48px or 40px—to maintain line-length control. The two-column content panel layouts seen in modals would stack vertically, with label columns becoming full-width headers above description text.

Header navigation would collapse to a hamburger menu on mobile, with the QR code utility potentially moving to a bottom bar or remaining as a floating action. Hero photography should maintain aspect ratio rather than cropping, potentially becoming taller and more scroll-dominant. Footer columns would stack to single-column with 32px gaps between former horizontal sections.

Touch targets should maintain the 16px button padding minimum, with tap areas expanding to 44px where possible. The fixed header may need to reduce to a slimmer 56px height on mobile to preserve viewport space.

## Practical implementation guidance

### Preserve
- The stark black-and-white palette as the foundation; any additional colors should come from photography only
- Trade Republic Sans at display weight for headlines; this custom typeface is irreplaceable for brand recognition
- Generous whitespace around content; the 80px section margins and 130px+ hero padding are essential to the premium feel
- Candid, natural-light photography with human subjects; avoid illustrative or 3D rendered imagery
- The alternating dark/light section rhythm; this creates visual breathing room across long pages

### Avoid
- Adding accent colors to the UI; the system derives visual interest from photography and typography scale, not chromatic variety
- Reducing headline sizes below 48px for major sections; the display typography is the brand's signature
- Using borders or backgrounds to separate content sections; rely on whitespace and the dark/light alternation instead
- Generic stock photography with studio lighting or obvious compositing
- Shadows on static elements; reserve the multi-layer button shadow for interactive components only

### Recommended build order
1. Establish the 2px base unit and type scale with Trade Republic Sans loaded at 500 and 740 weights
2. Build the fixed header with border, navigation spacing, and QR code utility
3. Create the hero section component with photography background, text overlay positioning, and responsive padding
4. Implement content panels with 16px/24px radius variants and internal spacing tokens
5. Add the button component with exact shadow stack and padding
6. Construct the footer with column grid, link hierarchy, and country selector
7. Integrate QR code cards as floating viewport elements

### Accessibility
- Ensure white text over photography meets contrast ratios; dark hero sections may need subtle gradient overlays or text shadows
- The 2px base unit supports fine-grained spacing adjustments for touch target compliance
- Navigation should include skip links and clear focus indicators; the high-contrast palette aids visibility but focus states need explicit design
- QR code cards require alt text describing their destination and function
- Country and language selectors should use proper aria-labels and maintain keyboard accessibility

## Scope note

This guide covers the desktop marketing and support pages of traderepublic.com, including the About, Support, and homepage surfaces. Mobile breakpoints, interactive states beyond the static views, form components, account dashboard interfaces, and motion design are not represented in the supplied material. The 25.9056px type size seen in some body contexts has been normalized to practical rem values in this guide. The exact source families Trade Republic Sans-500 and Trade Republic Sans-740 are referenced in the Typography section; Applesystem and Times appear as fallback families in the supplied data.
