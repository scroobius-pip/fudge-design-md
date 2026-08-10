# How busy.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/busy.app-design)

Last updated: 2026-08-10

## Captured pages

[![Footer with Flipper Devices logo, navigation columns, social icons, and app store badges on pure black background](https://pin.fontofweb.com/5901?format=jpg)](https://design.withfudge.com/share/pin-5901)

[Footer with Flipper Devices logo, navigation columns, social icons, and app store badges on pure black background](https://design.withfudge.com/share/pin-5901)

[![Desktop App section showing laptop with BUSY Bar device, macOS and Windows platform icons, and COMING SOON pill button](https://pin.fontofweb.com/5900?format=jpg)](https://design.withfudge.com/share/pin-5900)

[Desktop App section showing laptop with BUSY Bar device, macOS and Windows platform icons, and COMING SOON pill button](https://design.withfudge.com/share/pin-5900)

[![Mobile App section with phone mockup, Bluetooth and WiFi connection icons, red LED BUSY Bar display, and app store download badges](https://pin.fontofweb.com/5899?format=jpg)](https://design.withfudge.com/share/pin-5899)

[Mobile App section with phone mockup, Bluetooth and WiFi connection icons, red LED BUSY Bar display, and app store download badges](https://design.withfudge.com/share/pin-5899)

## Overview

BUSY.app presents a hardware product ecosystem—the BUSY Bar focus timer—through a stark, immersive dark interface. The design language treats the physical device as the hero: every section frames the LED-equipped hardware against an unbroken black canvas, letting the product's own light output provide the only color accent. The page structure is linear and deliberate, moving from product context through platform-specific download sections to a comprehensive footer. Typography is restrained and functional, using a single sans-serif family at carefully calibrated weights to establish hierarchy without visual noise. The overall impression is of a premium electronics brand that trusts its product photography to do the selling, with UI elements receding to the minimum necessary for navigation and conversion.

## Colors

The color system is intentionally austere, built on a near-black foundation with white and gray text, punctuated by the product's own red LED display as the sole warm accent.

| token | value | use |
|---|---|---|
| canvas | `#000000` | Page background, section fills, footer ground |
| ink | `#ffffff` | Primary headings, active navigation, platform labels, social icons |
| muted-ink | `#a0a0a0` | Body text, descriptions, inactive footer links, secondary labels |
| surface | `#1a1a1a` | App store badge backgrounds, COMING SOON pill buttons, subtle card-like containers |
| surface-elevated | `#2a2a2a` | Badge borders, hover states for interactive surfaces, subtle depth separation |
| accent | `#ff3333` | Product LED display color, hardware status indicators, error or alert states |

The canvas color is absolute black, creating maximum contrast with the white hardware photography and allowing the BUSY Bar's own illuminated pixels to read as genuine light sources rather than rendered graphics. Ink and muted-ink establish a two-tier text hierarchy: headings and calls-to-action at full brightness, explanatory copy at approximately 63% luminance. The surface tokens provide just enough lift for interactive elements to be distinguishable from the background without breaking the dark-field aesthetic. The accent red appears only in product imagery and would be reserved for hardware-related status, not UI chrome. No light mode is present in the supplied material.

## Typography

The type system relies on Inter at two weights—Regular and Bold—with size and spacing variations providing all hierarchy. No display or decorative faces appear.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 3rem | 700 | 1.1 | -0.02em | Major section headings (Desktop App, Mobile App) |
| section-display | Inter | 2.5rem | 700 | 1.15 | -0.01em | Sub-section or feature headings |
| body-large | Inter | 1.25rem | 400 | 1.4 | 0 | Introductory paragraphs, feature descriptions |
| body | Inter | 1rem | 400 | 1.5 | 0 | Standard paragraphs, longer explanatory text |
| navigation | Inter | 0.875rem | 400 | 1.4 | 0 | Footer column links, header navigation |
| label | Inter | 0.75rem | 400 | 1.2 | 0.02em | Platform labels, badge text, fine print |
| legal-copy | Inter | 0.75rem | 400 | 1.5 | 0 | Copyright, address, regulatory text |

Headings use tight negative tracking and compact line height to feel engineered and precise, matching the hardware product's aesthetic. Body text relaxes into more generous leading for readability. Labels and legal copy share a size but diverge in leading and tracking: labels are tighter and slightly tracked out for all-caps or small-caps treatments, while legal copy breathes more for extended reading. Verify licensing for these families before production use.

## Layout

The page employs a centered, single-column layout with generous vertical breathing room between major sections. Content is constrained to a maximum width and aligned to a consistent horizontal rhythm.

Section spacing follows a major-minor pattern: large gaps between thematic sections (approximately 6rem), tighter grouping within related content clusters (approximately 1.5rem between heading, description, and action elements). The product imagery consistently occupies the left portion of the content area, with text and actions aligned to the right, creating an asymmetric two-zone composition that feels editorial rather than templated.

The footer expands into a multi-column grid: brand identity and social links on the left, navigation columns in the center, app store badges and address on the right. This is the most information-dense region of the page, yet maintains the same generous internal spacing as the body sections.

No sidebar, card grid, or complex multi-column body layout appears. The design trusts the product photography to carry visual interest, using layout primarily to control reading order and conversion flow.

## Visual language

The visual identity is rooted in hardware photography against void-black backgrounds. Product shots are lit to emphasize materiality—the matte plastic of the BUSY Bar body, the glow of individual LED pixels, the subtle reflections on phone and laptop screens. This is not a flat, graphic UI aesthetic; it is a product photography approach applied to a web surface.

Iconography is minimal and functional. Platform icons (Apple, Windows) appear as simple white silhouettes without enclosing shapes. Connection icons (Bluetooth, WiFi) use thin-line circles with centered symbols, suggesting technical specification rather than decoration. Social icons in the footer are similarly unadorned, monochrome glyphs.

The absence of decorative elements—no gradients, no shadows, no background patterns—forces attention onto the product and the sparse text. The only "texture" comes from the photographic subjects themselves: cables, device edges, screen reflections. This restraint communicates confidence in the product's physical design.

## Components

### App Store Badge

Anatomy: Rectangular container with rounded corners, platform logo on the left, two lines of text stacked vertically, QR code icon on the right.

Surface and text color: Background uses surface token (`#1a1a1a`), text uses ink (`#ffffff`), with a subtle border in surface-elevated (`#2a2a2a`).

Typography: Uses label token at 0.75rem. The first line is smaller ("Download on the" / "GET IT ON"), the second line is larger and bolder ("App Store" / "Google Play").

Shape and border: Rounded corners at 0.25rem, 1px solid border in surface-elevated.

Spacing: Internal padding approximately 0.75rem horizontal and 0.5rem vertical. Badges appear in horizontal pairs with modest gap.

### COMING SOON Pill

Anatomy: Rounded capsule containing centered uppercase text.

Surface and text color: Background in surface (`#1a1a1a`), text in muted-ink (`#a0a0a0`).

Typography: Uses label token, typically uppercase.

Shape and border: Full pill rounding at 9999px, no visible border.

Spacing: Horizontal padding approximately 1.5rem, vertical padding approximately 0.5rem. Positioned below platform icons or descriptive text.

### Platform Icon with Label

Anatomy: Stacked vertical arrangement—platform logo above, platform name below.

Surface and text color: Logo in ink (`#ffffff`), label in muted-ink (`#a0a0a0`).

Typography: Label uses label token.

Shape and border: No enclosing shape for the icon itself; logo appears as standalone glyph.

Spacing: Tight vertical stack with approximately 0.5rem between icon and label. Multiple platforms arranged horizontally with approximately 2rem gap.

### Footer Navigation Column

Anatomy: Vertical stack of text links under a column heading.

Surface and text color: Heading in ink, links in muted-ink. No visible hover state captured in still images.

Typography: Heading uses navigation token at 0.875rem with Bold weight; links use navigation token at Regular weight.

Shape and border: No visible separators or borders between items.

Spacing: Generous line height between links, approximately 1.75rem equivalent. Columns spaced evenly across footer width.

### Social Icon Row

Anatomy: Horizontal sequence of monochrome platform glyphs.

Surface and text color: All icons in ink (`#ffffff`).

Shape and border: No enclosing circles or squares; icons appear as raw glyphs.

Spacing: Approximately 1.25rem between icons, positioned below copyright text.

## Responsive behavior

The supplied images show a desktop-width presentation. Based on the layout structure, several responsive adaptations are recommended:

At narrower viewports, the asymmetric two-zone product sections should stack vertically, with imagery above text. The product shots, currently left-weighted, would become centered and potentially scale down to maintain prominence. The footer multi-column grid should collapse to a single column or accordion pattern, with brand identity and social links at top, navigation links below, and legal information at the bottom.

The generous section spacing (6rem) should compress to approximately 3-4rem on tablet and 2-3rem on mobile to maintain scroll momentum without excessive whitespace. Body text may benefit from slight size reduction to 1rem on narrow screens, with headings scaling to 2rem to preserve hierarchy.

Touch targets for footer links and app store badges should maintain minimum 44px height. The COMING SOON pill, already compact, may need increased padding for comfortable tapping.

## Practical implementation guidance

### Preserve
- The absolute black canvas; any deviation toward dark gray weakens the product photography impact
- The two-tier text hierarchy (white for primary, muted gray for secondary) across all sections
- The editorial left-image/right-text composition for product sections
- The hardware-forward photography style with genuine black backgrounds in product shots
- The restrained, single-family typography with weight-based hierarchy

### Avoid
- Adding decorative gradients, shadows, or background patterns that compete with product imagery
- Introducing additional accent colors beyond the product's own red LED; the palette succeeds through restraint
- Enclosing icons in circles or squares; the current raw-glyph approach feels more technical
- Light mode without careful consideration; the current aesthetic is fundamentally dark-field

### Recommended build order
1. Establish the black canvas and Inter font loading
2. Implement the section spacing system and content max-width constraint
3. Build the product section template with asymmetric image/text layout
4. Create the app store badge component with proper text stacking and QR code placement
5. Implement the COMING SOON pill as a reusable status indicator
6. Construct the footer grid with responsive collapse behavior
7. Add platform icons and social icons as inline SVG or optimized icon font

### Accessibility
- Ensure white text on black background meets WCAG AAA contrast ratios (it does at normal sizes)
- The muted-ink body text at `#a0a0a0` on `#000000` achieves approximately 7.5:1, meeting AAA for normal text
- Provide visible focus indicators for footer links and badges; the current design shows no focus state
- Include alt text for all product photography describing the hardware and its displayed status
- Consider reduced-motion preferences for any scroll-triggered animations
- The COMING SOON status should be conveyed textually, not rely on color alone

## Scope note

This guide covers the BUSY.app downloads page surface as captured: product sections for Desktop and Mobile apps, platform availability indicators, and the comprehensive footer. Measurements are practical adaptation targets. Mobile breakpoints, navigation header, hover and focus states, loading skeletons, and checkout or purchase flows are not represented in the supplied material. The hardware device's LED animation states and companion app interfaces are outside this page's scope.
