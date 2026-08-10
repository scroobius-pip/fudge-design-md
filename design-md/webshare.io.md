# How webshare.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/webshare.io-design)

Last updated: 2026-08-10

## Captured pages

[![Proxy Servers landing page with feature grid, Trustpilot rating banner, green CTA button, and eight product capability cards with illustrations on pale mint background](https://pin.fontofweb.com/5012?format=jpg)](https://design.withfudge.com/share/pin-5012)

[Proxy Servers landing page with feature grid, Trustpilot rating banner, green CTA button, and eight product capability cards with illustrations on pale mint background](https://design.withfudge.com/share/pin-5012)

[![Accelerate Your Application section with left-aligned headline, body copy, green CTA button, and orange brain character illustration on lavender background](https://pin.fontofweb.com/5011?format=jpg)](https://design.withfudge.com/share/pin-5011)

[Accelerate Your Application section with left-aligned headline, body copy, green CTA button, and orange brain character illustration on lavender background](https://design.withfudge.com/share/pin-5011)

[![Global Proxies section with 50+ COUNTRIES pill badge, headline, body copy, green CTA button, and space telescope illustration on pale blue background](https://pin.fontofweb.com/5010?format=jpg)](https://design.withfudge.com/share/pin-5010)

[Global Proxies section with 50+ COUNTRIES pill badge, headline, body copy, green CTA button, and space telescope illustration on pale blue background](https://design.withfudge.com/share/pin-5010)

## Overview

Webshare presents a proxy-service platform with a warm, approachable visual personality that balances technical credibility with playful illustration. The design system relies on three distinct pastel section backgrounds—mint, lavender, and pale blue—to create rhythm and wayfinding across long-scrolling pages. A single emerald green action color unifies calls-to-action, while dark navy ink provides strong readability against light surfaces. The aesthetic feels contemporary SaaS: generous whitespace, rounded corners on every container, and friendly character illustrations that soften infrastructure topics. Typography is light and airy, using a single geometric sans-serif family at low weights to maintain openness. Cards group related capabilities with subtle shadowless surfaces, and the overall density remains low to emphasize clarity and trust.

## Colors

The palette is intentionally restrained, with a single vibrant accent against a family of soft neutrals and section-specific pastels. Every color serves a clear semantic role.

| token | value | use |
|---|---|---|
| action | #1DB584 | Primary buttons, links, checkmark icons, and interactive emphasis |
| ink | #0F1D2E | Headlines, body text, and primary readable content |
| muted-ink | #5A6B7A | Secondary descriptions, metadata, and subdued labels |
| canvas | #FFFFFF | Card backgrounds, button text, and content surfaces |
| surface-mint | #E8F5E9 | Hero and feature-grid section backgrounds |
| surface-lavender | #F0E6F5 | Acceleration/performance section backgrounds |
| surface-sky | #EBF0FA | Global reach and location section backgrounds |

The action green appears exclusively for interactive elements—buttons, arrow indicators, and status icons—creating a consistent affordance pattern. The three pastel surfaces rotate through the page to signal thematic shifts: mint introduces the product, lavender supports performance claims, and sky blue anchors global availability. Dark ink grounds every text element, while muted ink handles supporting copy and fine print. No dark mode is visible in the supplied material; the system operates entirely on light, airy foundations.

## Typography

The type system uses Rubik in Light weight throughout, creating a cohesive, lightweight texture that complements the rounded, friendly illustration style. The family is geometric and open, suitable for both display and body settings.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Rubik | 3rem | 300 | 1.1 | -0.02em | Page headlines and major value propositions |
| section-display | Rubik | 2.25rem | 300 | 1.15 | -0.01em | Section headlines and feature introductions |
| body | Rubik | 1rem | 300 | 1.6 | 0 | Paragraph descriptions and explanatory copy |
| body-small | Rubik | 0.875rem | 300 | 1.5 | 0 | Card descriptions, metadata, and tighter spaces |
| label | Rubik | 0.75rem | 300 | 1.4 | 0.05em | Uppercase category tags and pill badges |
| navigation | Rubik | 0.875rem | 300 | 1 | 0 | Menu items and utility links |

All sizes are whole-number multiples of the 4px relative unit. The hero and section displays use negative tracking for tighter, more impactful headlines, while body text remains neutral for extended reading. The label token employs slight positive tracking and uppercase treatment for the small category pills. Verify licensing for these families before production use.

## Layout

The page structure follows a centered, contained model with alternating full-bleed pastel bands. Maximum content width appears consistent across sections, creating a predictable reading line.

Sections stack vertically with generous internal padding, typically 5rem top and bottom. Content within each section aligns to a centered container, likely between 72rem and 80rem maximum width. The hero section (pin 5012) demonstrates a centered text block above an asymmetric feature grid: the grid uses four columns on desktop with equal gaps between cards.

Feature cards maintain uniform internal padding of 1.5rem, with illustrations sitting at the card bottom edge or filling a contained illustration area. The stat row at the base of the hero uses a four-column layout with icon-label pairs above large metric values.

The two narrative sections (pins 5011 and 5010) switch to a two-column composition: text content occupies the left roughly 40 percent, while illustration fills the right 60 percent. This asymmetric split creates visual interest and accommodates the large character illustrations. Text blocks in these sections left-align against the section edge, with headlines, body copy, and buttons stacking vertically with 1.5rem gaps.

Card corners are consistently rounded at 1rem, while the outer section containers use slightly larger 1.5rem rounding. Buttons use modest 0.5rem rounding, maintaining the soft aesthetic without appearing pill-shaped.

## Visual language

Illustration is central to the Webshare identity. Characters are organic, blob-shaped figures with simple facial features and bold flat colors—an orange brain with mechanical arms, a space telescope held by yellow hands against a starfield. These illustrations occupy substantial right-column space, often 50-60 percent of section width, and appear to float without hard rectangular frames.

Iconography elsewhere is minimal and functional: small green checkmarks for feature lists, shield icons for security concepts, and simple protocol badges (HTTP, SOCKS5) with light background tints. The product UI screenshots embedded in cards—proxy lists, dashboard charts, browser extensions—use realistic interface previews with subtle shadows to suggest depth without heavy chrome.

The overall mood is approachable infrastructure: the pastel backgrounds prevent technical content from feeling cold, while the consistent emerald action color maintains confidence. There is no visible texture, gradient, or glassmorphism; surfaces are flat and clean. Photography is absent; the visual system relies entirely on illustration and interface mockups.

## Components

### Primary action button

- **Anatomy**: Text label with right-pointing arrow icon, no visible border
- **Surface**: Solid emerald green background (#1DB584) with white text
- **Typography**: body-small token, medium weight appearance through color contrast rather than heavier font weight
- **Shape**: 0.5rem border radius, generous horizontal padding (approximately 1.5rem) with 0.75rem vertical padding
- **Spacing**: Sits below body copy with standard content-gap separation
- **Composition**: Left-aligned in narrative sections, centered in hero contexts
- **Variants**: Arrow icon may vary direction or presence; text remains sentence case

### Feature card

- **Anatomy**: Headline, description paragraph, and bottom illustration or screenshot area
- **Surface**: White (#FFFFFF) background, no visible border or shadow
- **Typography**: Headline uses section-display at smaller scale or body with increased weight; description uses body-small in muted-ink
- **Shape**: 1rem border radius
- **Spacing**: 1.5rem internal padding, illustrations bleed to card edges or sit in contained rounded sub-areas
- **Composition**: Grid of four columns in hero, equal gaps; cards align to top
- **Variants**: Some cards contain product screenshots, others contain abstract illustrations; all share identical surface treatment

### Section pill badge

- **Anatomy**: Uppercase text label, no icon
- **Surface**: Light tinted background matching section theme (sky blue in global section)
- **Typography**: label token, uppercase, slight letter spacing
- **Shape**: Full pill rounding (9999px), compact padding
- **Spacing**: Sits directly above section headline with tight vertical proximity
- **Composition**: Left-aligned with text block, never centered

### Stat card

- **Anatomy**: Icon-label pair above large metric value
- **Surface**: Tinted background matching section theme (mint in hero)
- **Typography**: Label uses body-small in muted-ink; metric uses section-display or larger
- **Shape**: 1rem border radius
- **Spacing**: 1.5rem padding, internal stack with 0.5rem between icon-label and metric
- **Composition**: Four-column row at section base, equal widths

### Trust banner

- **Anatomy**: Rating word, star icons, platform logo, customer avatars, customer count
- **Surface**: Transparent or matching section background
- **Typography**: Mixed sizes; count uses label-style uppercase treatment
- **Composition**: Horizontal row, centered above hero headline

## Responsive behavior

The multi-column feature grid should collapse to two columns on tablet and single column on mobile, maintaining card aspect ratios and internal spacing. The two-column narrative sections with large illustrations should stack vertically on smaller viewports, with illustration moving above or below text depending on content priority. The stat row should become a two-by-two grid on tablet and vertical stack on mobile. Font sizes may scale down by one step on mobile to preserve line length; hero-display should not exceed 2.25rem on narrow viewports. Section vertical padding should reduce to 3rem on mobile to prevent excessive scrolling.

## Practical implementation guidance

### Preserve
- The single emerald action color for all interactive elements; do not introduce secondary button colors
- The three pastel section backgrounds as full-bleed bands with rounded outer corners
- Light-weight Rubik at 300 weight throughout; the airy texture is essential to the friendly tone
- Large, playful illustrations with generous right-column space in narrative sections
- White card surfaces with no shadow, relying on background contrast for separation

### Avoid
- Heavy shadows or elevation effects; the system is flat and clean
- Dark backgrounds for content sections; the palette is exclusively light
- Multiple button colors or outline button styles not visible in the source
- Tight letter-spacing on body text; only headlines use negative tracking
- Replacing illustrations with photography; the character style is distinctive

### Recommended build order
1. Establish the pastel section background system with mint, lavender, and sky tokens
2. Implement Rubik Light at base 1rem with the full type scale
3. Build the primary action button with emerald fill and arrow icon pattern
4. Create the feature card component with white surface and 1rem radius
5. Construct the two-column narrative section layout for illustration-text pairing
6. Add the four-column feature grid and stat row for the hero section

### Accessibility
- Ensure emerald green (#1DB584) on white meets WCAG AA contrast for text; if it fails, darken to approximately #159670 for small text
- Maintain focus indicators on buttons; the flat style risks losing interactive state visibility
- Provide alt text for all character illustrations describing their conceptual role
- Keep touch targets for buttons at least 44px tall; current padding appears adequate
- Test the light-weight typography at small sizes for readability; consider 400 weight if 300 proves too faint for body copy

## Scope note

This guide covers the landing and use-case page surfaces visible in the supplied images: the proxy-server hero with feature grid, and the social-media use-case narrative sections. Navigation, footer, form states, mobile layouts, dark mode, animation, and pricing tables are not represented. Measurements are practical adaptation targets.
