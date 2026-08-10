# How jobyaviation.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/jobyaviation.com-design)

Last updated: 2026-08-10

## Captured pages

[![Aerial landscape hero section with moss-covered terrain, large cream display headline, and pill-shaped CTA button with environmental statistics.](https://pin.fontofweb.com/8296?format=jpg)](https://design.withfudge.com/share/pin-8296)

[Aerial landscape hero section with moss-covered terrain, large cream display headline, and pill-shaped CTA button with environmental statistics.](https://design.withfudge.com/share/pin-8296)

[![Vibrant footer with layered geometric color blocks in blue, navy, orange, and peach, featuring Joby logo and email signup field.](https://pin.fontofweb.com/8295?format=jpg)](https://design.withfudge.com/share/pin-8295)

[Vibrant footer with layered geometric color blocks in blue, navy, orange, and peach, featuring Joby logo and email signup field.](https://design.withfudge.com/share/pin-8295)

[![Coastal sunset timeline section with year navigation, milestone details, and cream navigation bar with hamburger menu.](https://pin.fontofweb.com/8294?format=jpg)](https://design.withfudge.com/share/pin-8294)

[Coastal sunset timeline section with year navigation, milestone details, and cream navigation bar with hamburger menu.](https://design.withfudge.com/share/pin-8294)

[![Bold blue section with oversized dark navy display typography and cream navigation bar showing Company and Investors links.](https://pin.fontofweb.com/8293?format=jpg)](https://design.withfudge.com/share/pin-8293)

[Bold blue section with oversized dark navy display typography and cream navigation bar showing Company and Investors links.](https://design.withfudge.com/share/pin-8293)

## Overview

Joby Aviation's digital presence communicates electric air travel through a restrained yet confident visual language. The system pairs expansive nature photography with bold typographic statements, creating an emotional bridge between environmental responsibility and technological ambition. Cream-toned canvas surfaces alternate with deep navy and vibrant blue sections, producing high-contrast moments that guide attention without visual noise. The design favors full-bleed imagery, generous whitespace, and precise geometric color blocking in footer areas. Navigation remains minimal and unobtrusive, allowing content to dominate the viewport. The overall impression is one of quiet authority—sophisticated engineering presented through an organic, human lens.

## Colors

The palette operates in two primary modes: a light mode built on warm cream with dark navy text, and an accent mode using electric blue and deep navy for bold statements. Black serves as a structural surface color for buttons and navigation elements.

| token | value | use |
|---|---|---|
| canvas | #F5F4DF | Primary background for light sections, navigation bar, and text on dark surfaces |
| ink | #0E1620 | Primary text color on light backgrounds, deep background for high-contrast sections |
| action | #007AE5 | Vibrant blue for footer sections, signup areas, and energetic accent surfaces |
| surface | #000000 | Button backgrounds, dark overlays, and structural elements |
| muted-ink | #0E1620 | Secondary text, labels, and de-emphasized content |

The cream canvas (#F5F4DF) carries a subtle warmth that distinguishes it from pure white, establishing an organic, approachable foundation. Dark navy (#0E1620) provides near-black depth without the harshness of pure black, maintaining readability for extended text while preserving visual sophistication. The electric blue (#007AE5) appears in large geometric blocks, particularly in footer and signup sections, where it creates energetic contrast against the cream and navy. Black surfaces appear selectively for primary buttons and navigation elements, creating clear interactive affordances. Image palettes drawn from aerial photography—moss greens, ocean teals, sunset ambers—inform section backgrounds but do not appear as direct UI tokens; they provide atmospheric context that reinforces the environmental narrative.

## Typography

Joby Sans and Joby Sans-300700 are the brand typefaces, supplied as a variable font file that covers weights from 300 to 700. The system primarily utilizes weights 400, 450, 500, and 550 from this family. Briton Smith of Family Type designed Joby Sans. Arial appears exclusively for button labels, providing a neutral functional contrast to the expressive display typography.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Joby Sans | 5rem | 550 | 1 | -0.03em | Homepage hero headlines, vision statements |
| section-display | Joby Sans | 4rem | 500 | 1 | -0.03em | Section headlines, impact statements |
| body | Joby Sans | 1rem | 400 | 1.5 | 0em | Paragraphs, descriptions, general content |
| body-small | Joby Sans | 0.875rem | 400 | 1.3 | -0.01em | Secondary descriptions, captions |
| label | Joby Sans | 0.75rem | 450 | 1.2 | -0.02em | Metadata, tags, small labels |
| navigation | Joby Sans | 1rem | 500 | 0.89 | -0.02em | Nav links, menu items, header actions |
| button | Arial | 0.8333rem | 400 | 1 | 0em | Button labels, CTAs |

Display sizes employ tight negative tracking that increases with scale, creating a compressed, confident presence at large sizes. The hero-display token at 80px (5rem) with -2.4px tracking appears in the most prominent statements, while section-display at 64px (4rem) with -1.92px tracking serves secondary headlines. Body text maintains generous line height for readability, while navigation and button typography prioritize compact vertical metrics to fit within constrained header and button dimensions. Verify licensing for Joby Sans and Joby Sans-300700 through Family Type before production use.

## Layout

The layout system relies on full-width sections with consistent horizontal padding and dramatic vertical rhythm. Content areas use 40px (2.5rem) horizontal padding as a standard container inset, while section spacing varies from 120px (7.5rem) for major divisions to 270px (16.875rem) for expansive hero areas. The relative unit of 2px (0.125rem) provides fine-grained control for precise adjustments.

Sections alternate between contained content and full-bleed imagery. Hero areas frequently extend to viewport height with text positioned in the lower-left quadrant, allowing photography to dominate. Timeline and milestone sections use asymmetric layouts with year navigation stacked vertically on the left and descriptive content aligned to the right. Footer areas employ layered geometric color blocks—blue, navy, orange, and peach—creating a distinctive brand signature that breaks from the otherwise restrained palette.

The navigation bar floats as a rounded pill or full-width strip at the viewport top, containing a hamburger menu, section label, centered logo, and external link. This element remains visually light, often using the cream canvas background with dark text, ensuring it does not compete with hero imagery. Content sections below the fold transition to solid color backgrounds—particularly the electric blue and deep navy—where large display typography creates immersive reading experiences.

## Visual language

Photography drives the emotional core of the visual system. Aerial and landscape imagery—coastal vistas, moss-covered terrain, atmospheric sunsets—fills hero sections and timeline backgrounds, establishing the environmental narrative that underpins the brand. Images receive minimal overlay treatment, with text positioned in areas of natural contrast rather than applying uniform darkening.

Geometric color blocking appears as a secondary visual motif, particularly in footer and signup sections. Large, flat areas of blue, navy, orange, and peach abut with hard edges, occasionally interrupted by sweeping curved transitions. This graphic language provides visual relief from photographic sections and creates memorable brand moments.

Typography treatment reinforces confidence through scale and compression. Display headlines sit close to the baseline with minimal leading, creating dense blocks of text that command attention. Smaller text elements—labels, navigation, metadata—maintain the same tight tracking family, ensuring typographic cohesion across all sizes. The Joby logo, a minimal abstract mark, appears centered in the navigation bar and left-aligned in footer contexts, always in cream or white against colored backgrounds.

## Components

### Navigation bar

- **Anatomy**: Horizontal bar containing hamburger menu icon, current section label, centered Joby logo, and external link with arrow icon
- **Surface**: Cream canvas background (#F5F4DF) with dark ink text (#0E1620)
- **Typography**: Navigation token for links and labels
- **Shape**: Full-width with rounded corners or floating pill configuration
- **Spacing**: Compact vertical padding, generous horizontal padding matching content containers
- **Composition**: Logo absolutely centered, menu left-aligned, action right-aligned

### Primary button

- **Anatomy**: Text label with optional arrow icon, contained within a pill shape
- **Surface**: Cream canvas background (#F5F4DF) with dark ink text (#0E1620), or inverse on dark backgrounds
- **Typography**: Arial at 13.3333px, weight 400
- **Shape**: Full pill with 120px (7.5rem) border radius
- **Spacing**: 14.5px vertical padding, 26px horizontal padding
- **Variants**: Light variant on dark imagery, dark variant on light sections

### Hero section

- **Anatomy**: Full-bleed background image, large display headline positioned lower-left, supporting statistics or CTA to the right or below
- **Surface**: Photography background with text in cream canvas
- **Typography**: Hero-display token for headlines, body token for supporting text
- **Spacing**: Extensive bottom padding (270px) to push content into the lower portion of the viewport
- **Composition**: Asymmetric text placement creating tension with the centered or right-weighted imagery

### Timeline section

- **Anatomy**: Vertical year navigation, horizontal rule separator, milestone title, date range, and descriptive paragraph
- **Surface**: Photography background with semi-transparent dark overlay for text legibility
- **Typography**: Section-display token for active year, body-small for descriptions, label for date metadata
- **Composition**: Left-aligned year stack, center-aligned milestone title, right-aligned description

### Footer signup

- **Anatomy**: Large color-blocked area with Joby logo, "Sign up for updates" headline, email input field with underline styling, and arrow submit action
- **Surface**: Electric blue (#007AE5) primary block with layered navy, orange, and peach geometric sections below
- **Typography**: Section-display token for headline, body token for input placeholder
- **Shape**: Hard-edged color blocks with occasional sweeping curves
- **Spacing**: Generous internal padding, full-width bleed

## Responsive behavior

The design prioritizes desktop viewport presentation with full-bleed imagery and expansive typography. At narrower widths, the display type scale should reduce proportionally while maintaining the tight tracking characteristic. The navigation bar's centered logo and split menu/action pattern requires careful handling to prevent crowding; the hamburger menu likely expands to accommodate additional items on smaller screens.

Hero sections with asymmetric text placement should stack vertically on mobile, moving statistics and CTAs below the headline rather than beside it. Timeline sections with horizontal rule separators and multi-column layouts should collapse to single-column scrolling, with year navigation becoming a horizontal scroll or dropdown selector.

Color-blocked footer areas maintain their layered geometry across breakpoints, though vertical stacking of color sections may replace the desktop's horizontal layering. Typography remains the primary responsive variable—display sizes scaling down while body and label sizes hold relatively constant to preserve readability.

## Practical implementation guidance

### Preserve
- The warm cream canvas against near-black ink for primary reading surfaces
- Tight negative tracking on display typography, increasing with scale
- Full-bleed photography with minimal overlay treatment
- Geometric color blocking in footer and accent sections
- Pill-shaped buttons with generous horizontal padding
- Centered Joby logo in navigation contexts

### Avoid
- Pure white backgrounds that eliminate the subtle warmth of the cream canvas
- Generic sans-serif substitutions for Joby Sans in display contexts
- Uniform dark overlays on photography—prefer strategic text placement
- Rounded corners on containers and cards—the system favors sharp edges
- Multiple button styles; the pill CTA is the dominant interactive pattern

### Recommended build order
1. Establish the cream canvas and dark ink color foundation
2. Implement Joby Sans with correct weights and tracking values
3. Build the navigation bar with centered logo and minimal menu pattern
4. Create the pill button component with Arial labels
5. Develop full-bleed hero sections with asymmetric text placement
6. Add color-blocked footer sections with layered geometry
7. Implement timeline/milestone layouts with year navigation

### Accessibility
- Ensure cream text on photography backgrounds meets contrast ratios through strategic placement or subtle text shadows
- Provide visible focus states for pill buttons that maintain the rounded shape
- Consider reduced-motion preferences for any scroll-driven timeline interactions
- Maintain touch targets of at least 44px for navigation and button elements
- Test color-blocked footer sections for sufficient contrast between adjacent colors

## Scope note

This guide covers the homepage and company page surfaces visible in the supplied images, including hero sections, timeline layouts, navigation, and footer signup areas. Mobile breakpoints, hover states, form validation, loading sequences, and interior content pages are not represented. Measurements derive from the documented interface values and should be verified against live implementation.
