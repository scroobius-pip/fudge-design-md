# How wero-wallet.eu is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/wero-wallet.eu-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with split-screen layout: left side shows a hand holding a phone with yellow screen and paper-plane illustration against pink-orange gradient, right side has bold](https://pin.fontofweb.com/6825?format=jpg)](https://design.withfudge.com/share/pin-6825)

[Hero section with split-screen layout: left side shows a hand holding a phone with yellow screen and paper-plane illustration against pink-orange gradient, right side has bold](https://design.withfudge.com/share/pin-6825)

[![Same hero composition with slightly different ticker text visible, showing the dynamic marquee of feature claims at the bottom edge of the viewport.](https://pin.fontofweb.com/6824?format=jpg)](https://design.withfudge.com/share/pin-6824)

[Same hero composition with slightly different ticker text visible, showing the dynamic marquee of feature claims at the bottom edge of the viewport.](https://design.withfudge.com/share/pin-6824)

## Overview

Wero presents itself as a digital payment wallet with an unmistakably bold visual personality. The homepage opens with a dramatic split-screen composition: one half immerses the viewer in a vibrant photographic world of pink-to-orange gradients and playful 3D phone imagery, while the other half delivers messaging through stark black typography on an electric yellow ground. This duality—warm, approachable photography against crisp, high-contrast information design—defines the entire system. The brand avoids the cold minimalism typical of fintech products, instead embracing saturated color, dimensional illustration, and confident typographic scale to communicate speed, simplicity, and European identity. Every element feels intentionally oversized and immediate, from the tightly tracked headline to the chunky pill-shaped call-to-action that sits three pixels above its shadow.

## Colors

| token | value | use |
|---|---|---|
| ink | `#1D1C1C` | Primary text, borders, button outlines, navigation links, and shadow color |
| canvas | `#000000` | Page background beneath content layers |
| surface | `#FFFFFF` | Navigation bar, button fills, ticker background |
| accent | `#FFF48D` | Hero messaging panel, brand yellow for high-visibility content areas |
| action | `#1D1C1C` | Same as ink; used for interactive emphasis and CTA borders |
| link-blue | `#0000EE` | Standard hyperlink color in navigation and body content |

The color system operates in two distinct modes. The photographic mode floods the left hero panel with warm gradient tones—pinks, corals, and peaches drawn from the lifestyle imagery—while the interface mode anchors the right panel in flat `#FFF48D` yellow against `#1D1C1C` text. This creates maximum legibility without sacrificing energy. Black serves as the neutral canvas that lets both the photography and the yellow panel vibrate. White appears only in functional surfaces: the navigation bar, buttons, and the scrolling feature ticker. The standard link blue `#0000EE` appears in the design facts for anchor elements, providing familiar browser-native hyperlink signaling within the otherwise custom palette. No muted grays appear in the interface; the system jumps directly from black to white to yellow, reinforcing the brand's confident, unapologetic presence. The single shadow value `rgb(29, 28, 28)` at `0px 3px 0px 0px` adds dimensional depth to buttons without introducing new colors.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Gt Walsheim Wero | 4.375rem | 800 | 0.9 | -0.03em | Homepage headline, maximum impact statements |
| body | Gt Walsheim Wero | 1.125rem | 400 | 1.3 | normal | Descriptive paragraphs, explanatory copy |
| label | Gt Walsheim Wero | 0.6875rem | 500 | 1.3 | normal | Feature ticker items, small metadata |
| navigation | Gt Walsheim Wero | 1rem | 400 | 1.5 | normal | Top-bar menu links, dropdown triggers |
| button | Gt Walsheim Wero | 0.875rem | 500 | 1.3 | normal | CTA labels, action text |
| legal-copy | Gt Walsheim Wero | 0.75rem | 400 | 1.4 | normal | Footer terms, disclaimers, secondary legal text |

The type system rests entirely on Gt Walsheim Wero, a geometric sans-serif family designed by Noel Leu and distributed by Grilli Type. Three weights appear: Regular (400) for body and navigation, Medium (500) for labels and buttons, and Black (800) for the hero display. The hero headline at 70px/63px with -2.1px letter spacing is the system's most distinctive voice—tight, dense, and assertive. Body copy at 18px/23.4px provides readable breathing room without losing the family's crisp character. The 11px/14.3px label size handles the scrolling ticker and other secondary information. The legal-copy token at 12px fills a practical need for terms, privacy links, or regulatory disclaimers that may appear below the fold. Line heights stay tight across the system, never exceeding 1.5, which reinforces the brand's compressed, energetic rhythm. Verify licensing for these families before production use.

## Layout

The homepage employs a rigid 50/50 split at the viewport level. The left panel contains full-bleed photography that scales to fill its half of the screen, while the right panel carries all messaging in a fixed yellow field. This split persists vertically, creating a strong vertical axis that divides content from atmosphere.

The navigation bar spans the full width above the split, floating as a white strip with the Wero logotype left-aligned and menu items center-clustered. A language selector sits at the far right edge. The nav maintains generous horizontal padding, with links receiving 14px vertical and 62px horizontal padding—substantial click targets that feel premium.

Below the hero, a scrolling ticker band hugs the bottom edge of the viewport, carrying feature claims in a continuous horizontal motion. This element breaks the split-screen boundary, spanning full-width to create a base rhythm across the entire composition.

Content spacing follows a clear hierarchy. The hero text block sits with significant top margin (approximately 291px from the viewport top), creating dramatic negative space that lets the headline dominate. The paragraph below maintains a 40px gap from the headline, and the button sits with comfortable but not excessive separation. The right panel uses 35px horizontal padding to keep text from touching the split edge.

## Visual language

Wero's visual language fintech through the lens of Gen-Z lifestyle branding. The 3D phone render with its translucent purple case, decorated nails, and paper-plane send animation feels tactile and personal—more social app than banking tool. The gradient background behind the phone shifts from hot pink through coral to warm peach, colors that appear in the image palette but never as flat UI surfaces.

The illustration style is dimensional and playful: the paper plane has physical depth, motion lines suggest speed, and the phone screen itself becomes a mini canvas with its own yellow field and black typography. This nested color echo—yellow screen inside yellow panel—creates visual coherence across the split.

The shadow system is deliberately restrained. Buttons carry a single hard shadow offset 3px downward with no blur, creating a pressed, almost sticker-like quality that matches the graphic boldness of the typography. No soft ambient shadows or layered depth effects appear; the design prefers flat color fields with one crisp dimensional accent.

The ticker animation at the bottom introduces horizontal motion as a counter-rhythm to the vertical stability of the split screen. Its small label text and bullet-separated claims provide factual grounding beneath the emotional photography and punchy headline.

## Components

### Primary button

- **Anatomy**: Text label with optional circular arrow icon, contained in a pill-shaped border
- **Surface**: White fill (`#FFFFFF`) with 1px solid `#1D1C1C` border
- **Typography**: `{typography.button}` at 14px Medium weight
- **Shape**: Pill radius of 30px, full border-radius treatment
- **Spacing**: Padding of 0px 10px 0px 20px for text side, with icon in circular companion element
- **Shadow**: Hard offset shadow `0px 3px 0px 0px rgb(29, 28, 28)` below the button surface
- **Composition**: Icon appears as a separate circular element with its own 1px border, creating a button-within-button structure
- **Variants**: One variant shows black fill with white text for inverse states

### Navigation bar

- **Anatomy**: Logotype left, menu cluster center-right, language selector far right
- **Surface**: White background (`#FFFFFF`) with black text (`#1D1C1C`)
- **Typography**: `{typography.navigation}` at 16px Regular for links
- **Spacing**: Links padded to 14px 62px, creating generous touch targets
- **Composition**: Dropdown indicators (chevrons) appear beside "Individuals" and "Business" labels
- **States**: Links appear in standard black; no visible hover state captured

### Feature ticker

- **Anatomy**: Horizontal scrolling band of small text claims separated by bullet markers
- **Surface**: White background strip at viewport bottom edge
- **Typography**: `{typography.label}` at 11px Medium weight
- **Composition**: Continuous marquee motion, items repeating as loop
- **Content**: Claims include "France and Germany", "All you need is a phone number", "Fast and hassle-free", "Seamless payments in Belgium, France and Germany"

### Hero split panel

- **Anatomy**: Left photographic panel, right yellow messaging panel
- **Left surface**: Full-bleed lifestyle photography with gradient overlay
- **Right surface**: Flat `#FFF48D` yellow field
- **Typography**: `{typography.hero-display}` for headline, `{typography.body}` for subhead
- **Spacing**: Headline positioned with substantial top margin, paragraph 40px below, button with comfortable gap beneath
- **Composition**: Phone image breaks slightly into the yellow panel's edge, creating depth

## Responsive behavior

The split-screen hero presents clear adaptation requirements. At narrower viewports, the 50/50 division should stack vertically, with the photographic panel moving above the yellow messaging panel to preserve the visual hierarchy. The headline at 70px will require scaling down—potentially to 48px at tablet and 36px at mobile—to maintain fit without wrapping awkwardly.

The navigation bar's center-clustered menu will need collapse to a hamburger pattern or simplified tray on small screens. The generous 62px horizontal padding on nav links should compress to standard mobile touch targets.

The bottom ticker band should remain full-width across all breakpoints, though its font size may need slight reduction on very narrow viewports to prevent excessive truncation. The marquee motion should respect `prefers-reduced-motion` and offer a static equivalent.

Button sizing should remain consistent in height but may reduce horizontal padding on mobile to prevent overflow. The circular icon companion should scale proportionally with the pill.

## Practical implementation guidance

### Preserve
- The exact 50/50 split composition at desktop; it is the brand's signature layout move
- The tight letter spacing on hero headlines; loosening it destroys the voice
- The hard 3px offset shadow on buttons; soft shadows feel wrong for this system
- The yellow-to-black contrast ratio; it is central to brand recognition
- The nested yellow field on phone screen echoing the panel yellow

### Avoid
- Introducing gray mid-tones; the system lives in black, white, and yellow only
- Rounding corners beyond 30px on buttons; the pill shape is specific
- Using the Black weight below 36px; it becomes illegible and loses impact
- Softening the shadow or adding blur; the sticker-like quality matters
- Breaking the split-screen with intervening content at desktop

### Recommended build order
1. Establish the type system with Gt Walsheim Wero at all three weights
2. Implement the split-screen grid with yellow panel and black canvas
3. Build the navigation bar with correct link padding and white surface
4. Create the pill button with exact border, shadow, and icon companion
5. Add the hero headline with -0.03em tracking and tight line height
6. Implement the scrolling ticker with 11px label text
7. Layer in the lifestyle photography and 3D phone imagery

### Accessibility
- The yellow (`#FFF48D`) on black (`#1D1C1C`) pairing exceeds WCAG AA for large text but should be verified for the 11px ticker size
- The split-screen photography contains no essential text, so it can be treated as decorative with appropriate alt text
- Button targets exceed 44px height due to padding; maintain this minimum
- The marquee ticker should pause on hover and respect reduced-motion preferences
- Language selector should use a native `<select>` or fully keyboard-accessible custom control

## Scope note

This guide covers the Wero homepage hero and navigation as visible in the supplied captures. Interior pages, mobile breakpoints, dropdown menus, form states, and transaction flows are not represented. The footer, additional marketing sections, and any account-dashboard interfaces fall outside the current scope. Measurements reflect the desktop viewport shown in the source images.
