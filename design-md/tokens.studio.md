# How tokens.studio is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tokens.studio-design)

Last updated: 2026-08-10

## Captured pages

[![Dark teal hero section with large white display headline, cyan action button, and multi-column footer with social icons](https://pin.fontofweb.com/5915?format=jpg)](https://design.withfudge.com/share/pin-5915)

[Dark teal hero section with large white display headline, cyan action button, and multi-column footer with social icons](https://design.withfudge.com/share/pin-5915)

[![Light background product page with black display headline, cyan primary button, and embedded app screenshot with play button overlay](https://pin.fontofweb.com/5913?format=jpg)](https://design.withfudge.com/share/pin-5913)

[Light background product page with black display headline, cyan primary button, and embedded app screenshot with play button overlay](https://design.withfudge.com/share/pin-5913)

## Overview

Tokens Studio presents a developer-focused design system built around dramatic mode switching and confident typographic hierarchy. The interface alternates between a deep teal immersive mode and a clean light product mode, unified by a single bright cyan accent that signals action across every context. Almarena Neue provides the sole type family, deployed in tightly tracked weights that range from an ultra-bold display cut for headlines to a regular weight for body copy and UI labels. The result is a system that feels technically precise yet visually striking—appropriate for a tool that bridges design and engineering workflows. Every surface is intentional: dark sections absorb attention for hero messaging, while light sections expand readability for product explanations and embedded interfaces.

## Colors

The color system operates in two distinct modes connected by a single accent thread. The dark mode immerses users in deep teal surfaces with white typography, while the light mode inverts to white backgrounds with black text. The cyan accent remains constant across both, ensuring that calls to action are immediately locatable.

| token | hex | use |
|---|---|---|
| action | #38E8F5 | Primary buttons, interactive highlights, play button overlays |
| ink | #000000 | Primary text on light backgrounds, button labels on cyan |
| muted-ink | #032D30 | Dark mode backgrounds, footer surfaces, deep immersive sections |
| canvas | #FFFFFF | Light mode backgrounds, dark mode text, inverted surfaces |
| surface | #032D30 | Alias for muted-ink in component contexts |
| border | #0000EE | Link underlines and subtle interactive indicators |

The dark mode dominates the homepage experience, where `#032D30` fills the viewport and white text achieves high contrast without pure black severity. The cyan `#38E8F5` appears as a filled button background with black text, creating a luminous focal point against the dark teal. In light mode, the same cyan maintains its role against white backgrounds, with black text preserving legibility. The system avoids gradients and shadows, relying on flat color fields and typographic scale for hierarchy. Photography and interface screenshots introduce their own palettes, but these remain separate from the core UI tokens.

## Typography

Almarena Neue, designed by Jérémie Gauthier, serves as the exclusive type family. The system uses three distinct cuts: Regular for body and UI text, Semi Bold for labels and navigation emphasis, and Display Extra Bold for headlines. Tight negative tracking across all sizes creates a compressed, engineered feel appropriate for technical tooling.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Almarena Neue-Display Extra Bold | 4.5rem | 700 | 1 | -0.02em | Homepage hero headlines, maximum impact statements |
| section-display | Almarena Neue-Display Extra Bold | 3.5rem | 700 | 1.05 | -0.02em | Product page headlines, section introductions |
| body | Almarena Neue | 1.125rem | 400 | 1.4 | -0.01em | Descriptive paragraphs, feature explanations |
| body-small | Almarena Neue | 0.875rem | 400 | 1.1 | -0.02em | Footer links, secondary descriptions, metadata |
| label | Almarena Neue | 0.875rem | 600 | 1.4 | -0.01em | Button text, form labels, emphasized UI elements |
| navigation | Almarena Neue | 0.875rem | 400 | 1.1 | -0.02em | Header menu items, dropdown triggers |

The display weight achieves its density through both weight and tracking: headlines sit extremely tight with no extraneous space between letters. Body text relaxes slightly with `-0.01em` tracking and more generous line height for readability. The 14px base for UI elements ensures that navigation and labels remain crisp without competing with display content. Verify licensing for these families before production use.

## Layout

The layout follows a centered, single-column rhythm with generous vertical breathing room. Content max-widths create readable measure for text blocks while allowing background colors to extend full-bleed. The header maintains a fixed horizontal structure: logo left, navigation center, actions right. Hero sections occupy substantial vertical space, often exceeding 60% of the initial viewport, with text centered both horizontally and vertically within the colored field.

The footer expands into a multi-column grid on dark backgrounds, organizing links into semantic categories—Product, Resources, Company, Pricing, Get in Touch—with consistent column widths and vertical spacing. Social icons cluster in a separate horizontal row above legal text. A thin horizontal rule separates the link grid from copyright and policy links below.

Embedded product screenshots appear within rounded containers that suggest browser or application windows, creating visual depth through framing rather than shadow. These containers sit below the fold on product pages, occupying significant horizontal width to showcase interface density. The play button overlay on screenshots uses the same cyan as primary actions, reinforcing the interactive pattern.

## Visual language

The visual language communicates technical confidence through restraint. Flat color fields replace gradients and textures. Typography carries the expressive load, with display headlines achieving impact through scale and weight rather than decoration. The cyan accent functions as the sole warm element in an otherwise cool palette, drawing the eye precisely where action is required.

Iconography appears minimal and functional: a geometric mark accompanies the wordmark, social platforms use their standard glyphs, and interface icons remain simple line or filled shapes. The overall impression is of a tool built for practitioners—direct, uncluttered, and optimized for task completion. Rounded corners on buttons and containers soften the technical severity without becoming playful. The consistent 12px border radius on primary actions creates a recognizable interactive shape across both light and dark contexts.

## Components

### Primary action button

- **Anatomy**: Rounded rectangle containing a left-aligned icon and text label
- **Surface**: Filled with `{colors.action}` (`#38E8F5`), text in `{colors.ink}` (`#000000`)
- **Typography**: `{typography.label}` at 0.875rem, weight 600
- **Shape**: 0.75rem border radius, generous horizontal padding approximately 2rem
- **Spacing**: Icon sits inset from left edge with 1rem gap to text
- **Composition**: Flex row with centered vertical alignment
- **Variants**: On dark backgrounds, the cyan fill glows against teal; on light backgrounds, it maintains identical treatment

### Navigation header

- **Anatomy**: Fixed horizontal bar with logo left, text links center, utility actions right
- **Surface**: Transparent over light backgrounds; no visible border or shadow
- **Typography**: `{typography.navigation}` for menu items, dropdown indicators use chevron icons
- **Composition**: Logo mark plus wordmark left, centered navigation cluster, login and trial buttons right
- **Variants**: Dark mode equivalent would invert text to white; current implementation shows light mode with black text

### Footer

- **Anatomy**: Full-width dark surface with multi-column link grid, horizontal rule, legal row
- **Surface**: `{colors.muted-ink}` background, white text throughout
- **Typography**: Category headers in `{typography.label}` with uppercase treatment, links in `{typography.body-small}`
- **Spacing**: Generous vertical padding above link grid, consistent 1.5rem gaps between link rows
- **Composition**: Five-column grid on desktop, social icons right-aligned above legal text
- **Variants**: Single dark treatment across all contexts

### Product screenshot container

- **Anatomy**: Rounded rectangle framing an embedded interface image with optional play button overlay
- **Surface**: Light gray or white interior suggesting application chrome, exterior inherits page background
- **Shape**: 1rem border radius on outer container
- **Composition**: Centered below hero content, occupying approximately 80% of content width
- **Variants**: Play button appears as cyan circle with white triangle when video content is available

## Responsive behavior

The system maintains its single-column centered rhythm across viewports, with type scales reducing proportionally on narrower screens. The five-column footer grid should collapse to two columns on tablet and single column on mobile, preserving category grouping. Navigation items may consolidate into a menu trigger below desktop widths. Hero headlines should scale down from 4.5rem to approximately 2.5rem on mobile, maintaining line breaks that preserve meaning. The embedded screenshot container should remain full-width below the fold, with the play button scaling to remain touch-accessible at 44px minimum. Button padding should increase slightly on touch devices to prevent mis-taps.

## Practical implementation guidance

### Preserve
- The stark mode contrast between deep teal and white backgrounds
- The single cyan accent for all interactive emphasis
- Tight tracking on display headlines as a signature of the brand voice
- The flat, shadowless surface treatment throughout
- The generous vertical spacing in hero sections

### Avoid
- Introducing additional accent colors that compete with cyan
- Using the display weight for body text or UI labels
- Adding gradients, shadows, or dimensional effects
- Expanding tracking on headlines beyond the specified values
- Using pure black (`#000000`) for large surface areas

### Recommended build order
1. Establish the dual-mode color system with CSS custom properties
2. Implement Almarena Neue with all three required weights
3. Build the type scale from display through body-small
4. Create the primary action button as the foundational interactive element
5. Construct header and footer layouts
6. Add the screenshot container with responsive image handling
7. Implement mode switching logic for dark/light contexts

### Accessibility
- Ensure cyan buttons on dark teal meet WCAG 2.1 AA contrast ratios; the black text on cyan fill exceeds requirements
- Provide focus indicators that do not rely solely on color, such as outline offsets on buttons
- Maintain semantic heading hierarchy despite visual size similarities
- Consider `prefers-reduced-motion` for any mode transitions or screenshot animations
- Verify that tight headline tracking does not impede readability for users with dyslexia or low vision

## Scope note

This guide covers the homepage and Studio Platform product page as visible in the supplied images. Mobile layouts, additional product pages, documentation interfaces, and interactive states such as hover, focus, loading, and error conditions are not represented. Motion design, form components beyond buttons, and complex data visualizations are outside the current scope. Measurements are exact where retained in the source interface.
