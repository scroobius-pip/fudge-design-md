# How wabi.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/wabi.ai-design)

Last updated: 2026-08-10

## Captured pages

[![A centered white card with rounded corners displays a blue shader sphere, the username brock, and a QR code on a light gray background with a minimal footer.](https://pin.fontofweb.com/8287?format=jpg)](https://design.withfudge.com/share/pin-8287)

[A centered white card with rounded corners displays a blue shader sphere, the username brock, and a QR code on a light gray background with a minimal footer.](https://design.withfudge.com/share/pin-8287)

[![A light gray landing page shows a large headline, a pill-shaped announcement badge, and a centered modal with a QR code over stacked image cards.](https://pin.fontofweb.com/8212?format=jpg)](https://design.withfudge.com/share/pin-8212)

[A light gray landing page shows a large headline, a pill-shaped announcement badge, and a centered modal with a QR code over stacked image cards.](https://design.withfudge.com/share/pin-8212)

[![A light gray hero section with a large centered headline transitions to a black background filled with colorful circular app icons arranged in a dense grid.](https://pin.fontofweb.com/8211?format=jpg)](https://design.withfudge.com/share/pin-8211)

[A light gray hero section with a large centered headline transitions to a black background filled with colorful circular app icons arranged in a dense grid.](https://design.withfudge.com/share/pin-8211)

[![A light gray landing page features a headline, a pill-shaped announcement badge, a primary action button, and a large phone mockup with a chat bubble overlay.](https://pin.fontofweb.com/8210?format=jpg)](https://design.withfudge.com/share/pin-8210)

[A light gray landing page features a headline, a pill-shaped announcement badge, a primary action button, and a large phone mockup with a chat bubble overlay.](https://design.withfudge.com/share/pin-8210)

## Overview

Wabi presents a personal software platform through a restrained, warm minimalism that balances approachability with creative energy. The design language centers on soft gray canvases, pill-shaped interactive elements, and generous whitespace that lets expressive content breathe. Typography relies on a single geometric sans-serif family with careful weight and size gradations rather than multiple typefaces. The visual system moves between two distinct modes: a light, airy landing experience with muted tones and a dramatic dark mode that showcases colorful circular imagery. This duality creates rhythm across the page—calm invitation above, vibrant creative density below. Every surface feels intentionally softened through rounded corners, subtle shadows, and blurred backdrop effects rather than harsh edges or heavy chrome.

## Colors

The palette operates in two primary modes with a small set of supporting accents.

| token | value | use |
|---|---|---|
| ink | #191919 | Primary text, headings, and strong UI elements on light surfaces |
| muted-ink | #525252 | Secondary text, labels, and supporting content |
| faint-ink | #737373 | Tertiary text, captions, footer links, and disabled states |
| canvas | #F0F0F0 | Default page background creating warm, soft atmosphere |
| surface | #FFFFFF | Cards, modals, and elevated containers |
| surface-elevated | #F2F2F2 | Subtle background variation for badges and inactive states |
| border | #E8E8E8 | Hairline dividers and button borders |
| border-strong | #FFFFFF | Icon borders and high-contrast outlines on dark surfaces |
| accent-blue | #283593 | Gradient accents and brand moments in imagery |
| action-primary-bg | #FFFFFF | Primary button fill on light backgrounds |
| action-primary-text | #323232 | Primary button text |
| action-secondary-bg | #181818 | Dark button fill for high-contrast moments |
| action-secondary-text | #FFFFFF | Dark button text |
| dark-canvas | #000000 | Deep background for immersive imagery sections |
| dark-surface | #131313 | Slightly elevated dark containers |
| dark-ink | #A3A3A3 | Text on dark backgrounds |

The light mode dominates the upper page with warm grays that avoid clinical starkness. Dark mode appears as a dramatic full-bleed section showcasing colorful circular app icons. A subtle conic gradient with pastel transparency occasionally appears as a decorative accent. The system avoids pure black in light mode, reserving it for the immersive dark sections where colorful imagery becomes the focus.

## Typography

The typographic system uses Selecta, a geometric sans-serif designed by Daniel Haettenschwiller and distributed by Maxitype. A secondary display face, Kalice Trial by Margot Lévêque, is available for expressive moments though not prominently visible in the captured interface. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Selecta | 3.625rem | 400 | 1.1 | -0.03em | Main page headlines, maximum impact |
| section-display | Selecta | 2rem | 400 | 1.2 | -0.009em | Section headings, secondary hierarchy |
| body | Selecta | 1rem | 400 | 1.5 | 0em | Default paragraph and UI text |
| body-large | Selecta | 1.5625rem | 400 | 1.36 | -0.03em | Lead paragraphs, hero descriptions |
| label | Selecta | 0.8125rem | 500 | 1.5 | 0em | Badges, announcement pills, metadata |
| caption | Selecta | 0.75rem | 400 | 1.33 | 0em | Footer text, fine print, timestamps |
| button-primary | Selecta | 1.125rem | 500 | 1 | -0.01em | Primary action buttons |
| button-secondary | Selecta | 1rem | 400 | 1 | -0.01em | Secondary actions, navigation buttons |
| button-small | Selecta | 0.75rem | 400 | 1.33 | 0em | Compact buttons, inline actions |

The system relies on size contrast and tracking variation rather than weight jumps. Hero display uses tight negative tracking for a refined, editorial feel. Body text maintains generous line height for readability. The medium weight appears sparingly, reserved for labels and primary buttons to create subtle emphasis without bold heaviness.

## Layout

The layout follows a centered, single-column approach with generous horizontal margins. Content maxes out at a comfortable reading width before breaking into full-bleed immersive sections.

The page structure flows through distinct zones: a minimal navigation bar with logo and primary action, a hero section with centered headline and subhead, an announcement badge floating above the main headline, a primary action button below, and then immersive content sections. The dark imagery section breaks the light rhythm with full-width black background and dense circular icon grid.

Spacing uses a base unit of 0.25rem with semantic steps. Tight spacing at 0.5rem handles internal element grouping. Compact at 1rem provides standard padding. Comfortable at 1.5rem creates breathing room within components. Generous at 2.5rem separates major elements. Section spacing at 5.5rem divides page regions, while section-large at 22rem creates dramatic vertical pause before immersive content.

The navigation bar floats with minimal height, containing only the Wabi mark as four dots and a single "Get started" action. No navigation links clutter the header, maintaining focus on the primary conversion path. The footer mirrors this restraint with legal links, copyright, and social icons in a single horizontal row.

## Visual language

The visual language centers on softness and organic roundness. Every interactive element uses full pill shapes—buttons, badges, input fields, and even the chat bubble overlay. Cards carry substantial 3rem corner radii that feel friendly and approachable. This roundness extends to the content itself: app icons appear as perfect circles, user avatars are circular, and even the phone mockups feature rounded corners.

Shadows remain subtle and layered rather than heavy. The modal uses a multi-layer shadow with small blur radii creating depth through accumulation rather than single dramatic drops. Inset shadows appear on elevated surfaces, suggesting physical thickness and tactile quality.

The imagery strategy contrasts two modes: above, the light section uses photographic phone mockups with realistic content; below, the dark section explodes with colorful circular icons resembling glass marbles or app orbs. These circles contain diverse imagery—paintings, photographs, illustrations, and abstract graphics—unified by their shared circular crop and subtle border treatment.

A distinctive gradient treatment appears on certain surfaces: a linear gradient sweeps across placeholder areas with soft gray tones, while a subtle conic gradient with pastel transparency rotates as decorative background. The chat bubble uses backdrop blur with semi-transparent white, creating a frosted glass effect that floats above photography.

## Components

**Announcement Badge**
- Anatomy: A horizontal pill containing a single line of text, sometimes with a trailing arrow or dismiss action
- Surface: Background uses surface-elevated with a subtle border
- Typography: Uses label token at 0.8125rem with medium weight
- Shape: Full pill with 9999px radius
- Spacing: Compact internal padding of 0.375rem vertical and 0.875rem horizontal
- Composition: Centered above the main headline, floating as a secondary entry point

**Primary Button**
- Anatomy: Text label centered within a pill shape
- Surface: White background with subtle border on light surfaces; inverted to dark on contrasting backgrounds
- Typography: button-secondary token at 1rem, or button-primary at 1.125rem for emphasis
- Shape: Full pill with generous horizontal padding of 1.5rem
- Spacing: 0.875rem vertical padding creates substantial touch target
- Variants: Default white fill, dark fill for high-contrast moments, and ghost/outline for secondary actions

**Modal Card**
- Anatomy: Centered overlay containing header text, body content, QR code, and optional action row
- Surface: Pure white with multi-layer shadow creating elevation
- Shape: 3rem corner radius with substantial padding of 3rem top/bottom and 2.5rem sides
- Shadow: 0 10px 30px rgba(0,0,0,0.08) combined with 0 5px 10px rgba(0,0,0,0.06)
- Composition: Vertically stacked content with centered alignment, close action in upper right

**Phone Mockup**
- Anatomy: Tall rectangular container with rounded corners, containing photographic content and overlaid UI elements
- Surface: Black background with photographic fill
- Shape: 2rem corner radius with overflow hidden
- Shadow: Heavy drop shadow with 0 8px 40px rgba(0,0,0,0.12) creating dramatic lift
- Composition: Slight rotation or perspective tilt when stacked with other mockups

**Chat Bubble**
- Anatomy: Horizontal pill containing text and circular send/action button
- Surface: Semi-transparent white with backdrop blur for frosted glass effect
- Typography: Body text at 1rem
- Shape: Full pill with generous horizontal padding
- Composition: Positioned over lower third of phone mockup content, anchored left with action button on right

**App Icon Grid**
- Anatomy: Dense arrangement of circular image containers
- Surface: Each circle contains unique imagery with subtle white border
- Shape: Perfect circles using 50% border radius
- Border: 2px solid white creating separation against dark background
- Composition: Tightly packed with slight overlap variation, creating organic density rather than rigid grid

**Footer**
- Anatomy: Horizontal row with logo mark, legal links, copyright, and social icons
- Typography: Caption token at 0.75rem with faint-ink color
- Spacing: Comfortable vertical padding with generous horizontal margins
- Composition: Separated from content by subtle top border or spacing alone

## Responsive behavior

The system maintains its centered single-column structure across viewports. Headline sizes should scale down proportionally on narrower screens, with hero-display reducing to maintain readable line lengths. The dense app icon grid may reduce column count or icon size on smaller viewports to prevent overwhelming density.

Phone mockups stack vertically on narrow screens rather than maintaining the fanned perspective seen in wider layouts. The modal card should maintain its centered position with reduced horizontal padding on mobile, preserving the 3rem corner radius for brand consistency.

Touch targets must maintain minimum 44px height; the current button padding exceeds this. The announcement badge and primary button should remain full-width on mobile only if they serve as the sole action, otherwise maintaining their pill shape with centered text.

## Practical implementation guidance

**Preserve**
- The warm gray canvas rather than pure white backgrounds; this distinguishes Wabi from clinical competitors
- Full pill shapes on all interactive elements; this is the most distinctive visual signature
- Generous corner radii on cards and containers; the 3rem card radius creates approachable personality
- The two-mode rhythm: light invitation above, dark immersive content below
- Subtle multi-layer shadows rather than single heavy drops
- Circular imagery treatment with consistent white borders

**Avoid**
- Sharp corners on any interactive or container element
- Pure black in light mode surfaces; use the warm ink and dark-surface tokens
- Multiple font families in standard UI; reserve Kalice Trial for special display moments only
- Heavy borders or outlines that compete with the soft shadow language
- Cluttered navigation; the minimal header is intentional

**Recommended Build Order**
1. Establish the gray canvas background and ink text color
2. Implement Selecta at base body size with proper line height
3. Build the pill button component with proper padding and border treatment
4. Create the announcement badge as a centered floating element
5. Implement hero typography with negative tracking
6. Add the phone mockup container with rounded corners and shadow
7. Build the frosted chat bubble with backdrop blur
8. Create the dark section with circular icon grid
9. Polish with gradient accents and refined shadow layers

**Accessibility**
- Ensure sufficient contrast between ink (#191919) and canvas (#F0F0F0); this pairing exceeds WCAG AA standards
- Dark mode sections with colorful icons need no text overlay, avoiding contrast concerns
- Backdrop blur on chat bubbles should have sufficient opaque fallback for browsers without support
- Focus states should use visible outlines rather than relying on color change alone; consider a 2px offset ring in accent-blue
- Touch targets on pill buttons exceed minimum size; maintain this for any custom implementations

## Scope note

This guide covers the landing page and share card surfaces visible in the supplied images. Interior app functionality, additional pages, motion behavior, and responsive breakpoints below desktop width are not represented.Measurements reflect the captured desktop viewport state.
