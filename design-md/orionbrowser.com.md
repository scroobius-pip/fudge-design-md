# How orionbrowser.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/orionbrowser.com-design)

Last updated: 2026-08-10

## Captured pages

[![Core features grid with four rounded cards showing privacy, customization, extensions, and Kagi services with line icons and purple accent buttons](https://pin.fontofweb.com/10434?format=jpg)](https://design.withfudge.com/share/pin-10434)

[Core features grid with four rounded cards showing privacy, customization, extensions, and Kagi services with line icons and purple accent buttons](https://design.withfudge.com/share/pin-10434)

[![Footer section with Orion Browser branding, Kagi mascot illustration, and multi-column download and support links on a light gradient background](https://pin.fontofweb.com/10433?format=jpg)](https://design.withfudge.com/share/pin-10433)

[Footer section with Orion Browser branding, Kagi mascot illustration, and multi-column download and support links on a light gradient background](https://design.withfudge.com/share/pin-10433)

[![Orion Plus promotional section with astronaut mascot illustration, purple gradient CTA button, and subscription messaging on a soft gray rounded panel](https://pin.fontofweb.com/10432?format=jpg)](https://design.withfudge.com/share/pin-10432)

[Orion Plus promotional section with astronaut mascot illustration, purple gradient CTA button, and subscription messaging on a soft gray rounded panel](https://design.withfudge.com/share/pin-10432)

## Overview

Orion Browser's product site presents a privacy-focused browser through a calm, approachable visual system. The design balances technical credibility with playful personality, using soft purple gradients, generous rounded corners, and whimsical line-art mascot illustrations. The overall impression is clean and modern without feeling sterile—warm gradients transition from a subtle lavender-tinted top into pure white, creating an airy, welcoming atmosphere that supports the product's user-centric messaging.

The visual hierarchy relies on scale contrast between bold semibold headings and comfortable body text, with strategic use of purple accents to guide attention toward calls-to-action. Content is organized into clearly defined cards and sections with consistent internal spacing, making complex feature information digestible. The design language communicates trustworthiness through its restraint—limited color palette, ample whitespace, and systematic use of rounded geometry—while the mascot illustrations and friendly typography prevent the security-focused messaging from feeling intimidating.

## Colors

The color system is intentionally restrained, built around a near-monochrome foundation with a distinctive purple accent family. This creates high readability while establishing brand recognition through the violet action color.

| token | value | use |
|---|---|---|
| ink | `#000000` | Primary text, headings, body copy |
| ink-secondary | `#191919` | Strong headings, emphasized titles |
| muted | `#525252` | Secondary descriptions, feature body text |
| muted-light | `#8E8E8E` | Footer links, tertiary information |
| canvas | `#FFFFFF` | Page background, card surfaces, button text on dark |
| surface | `#F7F7F7` | Feature card backgrounds, subtle containers |
| surface-warm | `#F7EFFE` | Gradient start, warm tint areas |
| border | `#E9E9E9` | Subtle dividers, hairline separators |
| action | `#914FF2` | Primary buttons, key interactive elements, gradient endpoints |
| action-secondary | `#7E4DC5` | Secondary purple, gradient start, link text |
| action-muted | `#B17BB1` | Gradient blend, decorative purple tones |

The page employs a soft gradient background that transitions from `surface-warm` at the top to `canvas` at the bottom, creating a gentle lavender glow that sets the emotional tone without competing with content. This gradient appears on the body level and establishes the site's distinctive atmosphere.

Purple serves as the singular accent family, used for primary calls-to-action, promotional highlights, and the Orion Plus section. The gradient `linear-gradient(274deg, #7E4DC5 -28.55%, #B17BB1 136.43%)` appears on decorative elements, while solid `#914FF2` fills primary buttons. The near-black ink family provides strong contrast for readability, with `#191919` reserved for the most prominent headings to soften the visual weight of pure black.

## Typography

The typographic system uses Lufga as the sole brand typeface, with Applesystem as a system fallback for minor UI elements. Lufga's geometric sans-serif character supports the friendly, modern tone with excellent legibility across weights.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Lufga | 2.25rem | 600 | 1.25 | normal | Section headings, feature titles |
| section-display | Lufga | 1.625rem | 600 | 1.5 | normal | Subsection headings, card titles |
| body | Lufga | 1rem | 400 | 1.5 | normal | Default body text, descriptions |
| body-large | Lufga | 1.125rem | 400 | 1.5 | normal | Emphasized paragraphs, lead text |
| label | Lufga | 1rem | 500 | 1.25 | normal | Buttons, navigation, tags |
| legal | Lufga | 0.9375rem | 400 | 1.5 | normal | Footer text, fine print, metadata |
| navigation | Lufga | 1rem | 400 | 1.5 | normal | Header links, menu items |

The weight distinction between Regular (400), Medium (500), and Semibold (600) is used precisely: Regular for body and descriptions, Medium for interactive labels and navigation, and Semibold for all headings. This creates clear hierarchy without introducing additional font families. Line heights are generous at 1.5 for body text, tightening to 1.25 for display headings to maintain compact, impactful titles.

Lufga is designed by Adam Ladd. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with generous external margins that create a refined, editorial feel. The main content area is constrained by substantial horizontal margins—`228px` on each side at desktop scale—producing a narrow, focused reading column that keeps attention on the product messaging.

Vertical rhythm is established through consistent section spacing of `100px` between major content blocks, with `80px` horizontal padding inside the main container. This creates breathing room that reinforces the premium, unhurried character of the site. Feature grids use a two-column layout with `60px` gaps between cards, while individual cards maintain `45px` internal padding with `25px` gaps between internal elements.

The footer extends this contained approach with matching margin and padding values, adding `200px` top margin to separate it dramatically from the main content, plus `100px` bottom margin for balanced closure. Internal footer columns use `80px` gaps for major groupings and `60px` for content clusters, with `16px` gaps within tight link groups.

Content cards are the primary organizational unit, appearing as rounded rectangles with `30px` corner radius. These cards use `surface` backgrounds to subtly differentiate from the gradient page canvas without introducing harsh boundaries. The card-based architecture allows flexible content arrangement while maintaining visual consistency across feature descriptions, promotional sections, and informational blocks.

## Visual language

The visual personality combines technical precision with approachable warmth. Rounded geometry dominates—`30px` card corners, `12px` button corners, and fully pill-shaped badges create a soft, friendly impression that contrasts with typical sharp-edged browser product sites. This roundedness extends to the mascot illustrations, which use simple line art with occasional solid color fills in purple and black.

Illustrations follow a consistent style: black line drawings with minimal detail, occasionally accented with solid purple or black fills. The astronaut mascot in the Orion Plus section and the Kagi mascot in the footer share this vocabulary—playful, slightly retro, humanizing the technical product. These illustrations are positioned to break the rectangular grid, adding visual interest without disrupting readability.

The gradient system is subtle and restrained. The body gradient moves from warm lavender to pure white, creating an atmospheric depth that feels premium without being flashy. A secondary gradient on decorative spans shifts from deep purple to muted mauve at an oblique angle, adding dimensional interest to small accent elements.

Shadow usage is minimal and functional: a soft `rgba(0, 0, 0, 0.14) 0px 1px 28px -4px` appears on primary action buttons, providing gentle elevation without the aggressive depth of typical material design. This restraint keeps the interface feeling light and airy.

Iconography in the feature cards uses simple line icons in a muted gray, paired with bold titles and descriptive text. The Kagi services card introduces a solid purple square icon with rounded corners, establishing a secondary icon treatment for brand-specific features.

## Components

### Feature Card

The feature card is the primary content container, appearing in a two-column grid on the main page.

- **Anatomy**: Rounded rectangle containing an icon or illustration, bold title, and descriptive paragraph. Some variants include a text-link action at the bottom.
- **Surface**: `surface` background (`#F7F7F7`) with no visible border.
- **Typography**: Title uses `section-display` at Semibold weight; description uses `body` in `muted` color.
- **Shape**: `30px` border radius on all corners.
- **Spacing**: `45px` internal padding, `25px` gap between title and description.
- **Composition**: Icon positioned above or beside title depending on card type; content left-aligned.
- **Variants**: Standard feature cards have line icons; the Kagi Services variant uses a solid purple rounded-square icon with the Kagi "g" mark.

### Primary Action Button

Used for the main call-to-action in promotional sections.

- **Anatomy**: Text label with optional arrow icon, rendered as a solid filled button.
- **Surface**: `action` background (`#914FF2`) with `canvas` text.
- **Typography**: `label` token at Medium weight.
- **Shape**: `12px` border radius.
- **Spacing**: `14px` vertical padding, `20px` horizontal padding, with `8px` gap between text and icon.
- **Shadow**: Soft elevation shadow `rgba(0, 0, 0, 0.14) 0px 1px 28px -4px`.
- **Composition**: Icon follows text, typically a right-pointing arrow or external-link indicator.

### Secondary Action Button

Used for subtle actions within feature cards and footer areas.

- **Anatomy**: Text label with arrow icon on `canvas` background.
- **Surface**: `canvas` background with `action-secondary` text (`#7E4DC5`).
- **Typography**: `label` token at Medium weight.
- **Shape**: `12px` border radius.
- **Spacing**: `14px` vertical padding, `20px` horizontal padding, `8px` text-icon gap.
- **Composition**: Appears inline within cards, left-aligned with card content.

### Promotional Panel

A full-width highlighted section for Orion Plus and similar offerings.

- **Anatomy**: Large rounded container with illustration, eyebrow label, heading, description paragraphs, and primary action button.
- **Surface**: `surface` background with `30px` radius, or full-bleed gradient in promotional contexts.
- **Typography**: Eyebrow uses `body` in `muted`; heading uses `hero-display`; body uses `body-large` in `muted`.
- **Shape**: `30px` border radius.
- **Spacing**: `70px` internal padding, `50px` gap between major elements, `35px` above action button.
- **Composition**: Illustration positioned to the left or above content; text block right-aligned or centered depending on layout.

### Footer

The site footer organizes links into clear hierarchical columns.

- **Anatomy**: Brand mark with tagline, multi-column link groups with headings, and copyright line.
- **Surface**: Transparent over the page gradient, or `canvas` at the bottom of the gradient.
- **Typography**: Column headings use `section-display` at `18px` size; links use `legal` in `muted-light`; copyright uses `legal` in `ink-secondary`.
- **Spacing**: `80px` gap between major footer zones, `60px` between content columns, `15px` between list items, `25px` below column headings.
- **Composition**: Brand and tagline left-aligned; link columns in a row with `80px` gaps; social and download links include small platform icons with `8px` text-icon spacing.

### Badge/Pill

Used for category labels and status indicators.

- **Surface**: `surface-warm` or light tinted background.
- **Typography**: `label` at Medium weight with `0.4px` positive letter spacing.
- **Shape**: Fully rounded pill with `9999px` radius.
- **Spacing**: `16px` left padding, `56px` right padding for asymmetric pill shapes.

## Responsive behavior

The design's generous desktop margins (`228px` side margins, `80px` container padding) suggest a strong desktop-first presentation. At narrower viewports, these margins should collapse progressively—first to `80px` total side padding, then to `24px` or `16px` on mobile devices to maintain readable line lengths without excessive whitespace.

The two-column feature grid should stack to single column on tablet and below, maintaining `45px` card padding but reducing internal gaps to `20px` for tighter mobile composition. Card corner radii may reduce to `20px` on small screens to maintain proportional relationships.

Typography scales down modestly: `hero-display` should reduce to `1.75rem` on mobile, `section-display` to `1.25rem`, preserving hierarchy while optimizing screen usage. Body text remains at `1rem` for readability.

The footer multi-column layout should reflow to stacked sections on mobile, with `40px` gaps between former columns and maintained `16px` internal link spacing. Platform icons in download and social links should remain visible at reduced size.

Promotional panels with side illustrations should stack vertically on narrow screens, with illustration above text and centered alignment replacing the desktop side-by-side composition.

## Practical implementation guidance

### Preserve
- The soft lavender-to-white body gradient as the signature atmospheric element
- Lufga's geometric character across all brand typography; the Medium weight for buttons and labels specifically
- `30px` card corner radius as the defining shape language
- The restrained single-accent palette with purple as the only chromatic color
- Generous section spacing (`100px`) and wide content margins for the premium editorial feel
- Mascot illustration style: simple line art with selective solid fills

### Avoid
- Introducing additional accent colors that compete with the purple family
- Sharpening card corners below `20px`; the roundedness is central to the friendly tone
- Crowding cards with less than `40px` internal padding
- Using pure black (`#000000`) for large headings; prefer `#191919` for softer impact
- Heavy shadows or borders that contradict the airy, minimal aesthetic

### Recommended Build Order
1. Establish the gradient body background and base Lufga typography at `16px`/`1.5` line height
2. Implement the main content container with `228px` side margins and `80px` horizontal padding
3. Build the feature card component with `30px` radius, `surface` background, and `45px` padding
4. Create the two-column grid with `60px` gaps
5. Add the primary action button with `action` fill, `12px` radius, and soft shadow
6. Construct the promotional panel variant with larger `70px` padding
7. Implement the footer with columnar link groups and `200px` top margin
8. Fine-tune responsive collapse for margins and grid behavior

### Accessibility
- Ensure the `action` purple (`#914FF2`) on `canvas` white meets WCAG AA contrast ratios for text; test specifically for the button label size
- The `muted` gray (`#525252`) on `surface` backgrounds should be verified for body text contrast
- Maintain focus indicators on rounded buttons that respect the `12px` radius shape
- Preserve semantic heading hierarchy: `h2` for section titles, `h3` for card titles
- When illustrations convey meaning, provide descriptive alt text or adjacent textual equivalents
- The gradient background should not interfere with text readability; ensure sufficient contrast across all gradient positions

## Scope note

This guide covers the Orion Browser marketing page's landing and promotional surfaces as visible in the supplied images. Navigation header behavior, mobile menu states, form interactions, download flows, and animation or motion design are not represented. Dark mode variants, additional interior pages, and browser extension UI are outside the current scope.
