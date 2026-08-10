# How flask.do is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/flask.do-design)

Last updated: 2026-08-10

## Captured pages

[![Hero landing page with video player, navigation bar, and radial gradient background featuring product branding](https://pin.fontofweb.com/4358?format=jpg)](https://design.withfudge.com/share/pin-4358)

[Hero landing page with video player, navigation bar, and radial gradient background featuring product branding](https://design.withfudge.com/share/pin-4358)

[![Login modal with Flask logo, Google sign-in button, and terms agreement on dark background](https://pin.fontofweb.com/4361?format=jpg)](https://design.withfudge.com/share/pin-4361)

[Login modal with Flask logo, Google sign-in button, and terms agreement on dark background](https://design.withfudge.com/share/pin-4361)

[![Contact section with three pill-shaped action buttons for email, community, and support channels](https://pin.fontofweb.com/4360?format=jpg)](https://design.withfudge.com/share/pin-4360)

[Contact section with three pill-shaped action buttons for email, community, and support channels](https://design.withfudge.com/share/pin-4360)

[![Founder manifesto section with handwritten-style typography and dark pill button with arrow](https://pin.fontofweb.com/4359?format=jpg)](https://design.withfudge.com/share/pin-4359)

[Founder manifesto section with handwritten-style typography and dark pill button with arrow](https://design.withfudge.com/share/pin-4359)

## Overview

Flask presents a dark, immersive visual environment built around video-centric creative collaboration. The design system prioritizes cinematic atmosphere through near-black backgrounds, high-contrast white typography, and carefully restrained color usage. The interface avoids visual noise, letting product imagery and video content dominate the experience while maintaining clear navigational hierarchy through subtle surface elevation and consistent pill-shaped interactive elements.

The system's distinctive character emerges from the tension between clinical minimalism and personal expression. While the core interface employs neutral sans-serif typography with precise geometric spacing, manifesto and founder communications introduce "Reenie Beanie," a handwritten-style typeface that injects human warmth and creative authenticity. This dual-typography approach signals that Flask serves individual creators rather than faceless enterprise workflows.

Visual depth is achieved through layered dark surfaces rather than heavy shadows. The canvas sits at the deepest layer, with modals and cards floating on slightly elevated surfaces distinguished by subtle lightness shifts. Action elements invert this hierarchy: primary buttons burst forward as pure white shapes against the darkness, creating immediate focal points without relying on saturated accent colors.

## Colors

The color system is intentionally austere, built on a near-monochrome dark palette with minimal warm accents derived from product imagery. Every color serves a structural or interactive role rather than decorative purpose.

| token | value | use |
|---|---|---|
| canvas | `#0D0D0D` | Deepest background layer, page foundation |
| surface | `#1A1A1A` | Modal backgrounds, elevated panels, card bases |
| surface-elevated | `#242424` | Hover states, active button backgrounds, subtle elevation |
| ink | `#FFFFFF` | Primary text, headings, active navigation, primary button text |
| ink-muted | `#A3A3A3` | Secondary text, descriptions, legal copy, placeholder content |
| action | `#FFFFFF` | Primary button fills, high-priority interactive surfaces |
| action-inverse | `#1A1A1A` | Text on primary buttons, icons on light surfaces |
| border | `#333333` | Subtle dividers, button outlines, card edges |
| accent-warm | `#E8A87C` | Derived from product photography warmth, reserved for image overlays and rare emphasis |

The dark mode is not an alternative but the fundamental identity. Light values are reserved exclusively for interactive emphasis and text legibility. The warm accent appears only in photographic contexts and should not be applied to UI chrome. Border colors remain extremely subdued, functioning as optical separators rather than visible lines.

## Typography

The typographic system splits cleanly between functional interface text and expressive brand voice. System fonts handle all navigation, buttons, descriptions, and labels with neutral clarity. "Reenie Beanie" appears exclusively in manifesto and founder communications, where its irregular baseline and casual stroke weight convey creative authenticity.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | system-ui | 2.5rem | 600 | 1.1 | -0.02em | Landing page headlines, value propositions |
| section-display | system-ui | 2rem | 600 | 1.2 | -0.01em | Section headers, "Talk to Humans" |
| body-large | system-ui | 1.25rem | 400 | 1.5 | 0 | Subheadlines, "Notion + Loom, but for videos" |
| body | system-ui | 1rem | 400 | 1.6 | 0 | Descriptions, contact explanations |
| label | system-ui | 0.875rem | 500 | 1.4 | 0.01em | Button text, navigation items |
| navigation | system-ui | 0.875rem | 500 | 1 | 0 | Top bar links |
| manifesto | Reenie Beanie | 1.5rem | 400 | 1.8 | 0.02em | Founder quotes, brand storytelling |
| legal-copy | system-ui | 0.75rem | 400 | 1.5 | 0 | Terms, privacy policy, fine print |

All sizes are whole-number multiples of 4px (0.25rem). The manifesto size at 1.5rem (24px) maintains readability despite the decorative face's irregular metrics. Tracking on the handwritten face is slightly positive to compensate for its tight natural spacing.

Verify licensing for Reenie Beanie before production use. The family is served from Google Fonts with no attributed designer or vendor in the available records.

## Layout

The layout philosophy centers content through generous negative space and deliberate vertical rhythm. Sections stack with substantial breathing room, typically 6rem between major content blocks. Horizontal margins remain fluid, with content max-widths creating comfortable reading measure rather than edge-to-edge expansion.

The navigation bar floats transparently at the top, containing the Flask wordmark with integrated flask icon on the left and utility links plus a primary action on the right. This bar does not employ a distinct background color, relying instead on the dark canvas for contrast. On scroll, it may acquire a subtle backdrop blur or surface tint, though this behavior is not confirmed in static view.

Hero sections feature centered compositions with video content as the dominant element. The video player occupies a rounded container with internal chrome mimicking familiar streaming interfaces, reducing cognitive load. Below the video, value propositions stack vertically: headline, subheadline, then paired actions. This vertical centering creates a natural reading gravity that pulls users downward through the conversion funnel.

Modal dialogs appear centered with fixed positioning, using a surface-colored panel that interrupts the canvas without harsh borders. The login modal demonstrates this pattern: compact vertical stacking of brand mark, instructional text, single action, and legal disclaimer. Modal width appears constrained to approximately 420px, maintaining readability without excessive line length.

Contact sections employ horizontal button arrays with consistent spacing, each button containing an icon and label pair. These arrays center within their container, with buttons sized uniformly regardless of label length to maintain visual rhythm.

## Visual language

The visual language communicates creative professionalism through restraint. The near-black canvas suggests editing suites and theater environments where video content commands attention. Subtle radial gradients or noise textures may appear in hero backgrounds, creating atmospheric depth without competing with foreground elements.

Imagery treatment favors natural photography with warm skin tones and environmental context, as seen in the founder video thumbnail. Product shots employ transparent or environmental backgrounds rather than isolated cutouts, reinforcing the tool's integration into real workflows.

Iconography appears minimal and functional: mail, Discord, and support icons in contact buttons; arrow indicators on actions. These icons share the muted ink color of their accompanying labels, maintaining hierarchy through position rather than chromatic emphasis.

The Flask brand mark combines a literal glass flask illustration with bold sans-serif wordmark. The flask icon carries subtle color refraction suggesting liquid contents, providing the only chromatic complexity in the logo system. This mark appears consistently across navigation, modals, and product interfaces.

Button shapes are universally pill-shaped with full border-radius, softening the otherwise rectilinear interface. This rounding extends to video containers and modals, creating a family of friendly, approachable shapes that counterbalance the dark severity of the palette.

## Components

### Navigation bar

- **Anatomy**: Flask wordmark with integrated icon left-aligned; text links center-left; primary "Get Started" action right-aligned with arrow icon
- **Surface**: Transparent background, no visible border or shadow
- **Typography**: `{typography.navigation}` for links, `{typography.label}` for primary action
- **Shape**: Full-width bar, no border-radius
- **Spacing**: Approximately 1rem vertical padding, 2rem horizontal margins
- **Composition**: Flex row with space-between alignment

### Primary button

- **Anatomy**: Text label with optional right arrow icon, no icon-only variant visible
- **Surface**: `{colors.action}` background, `{colors.action-inverse}` text
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.pill}`, full border-radius
- **Spacing**: Generous horizontal padding, approximately 2rem, with 1rem vertical
- **Variants**: "Get Started" with arrow, "Continue with Google" with Google icon prefix

### Secondary button

- **Anatomy**: Text label with left-aligned icon, used for contact channels and alternative actions
- **Surface**: `{colors.surface-elevated}` background, `{colors.ink}` text, `{colors.border}` optional border
- **Typography**: `{typography.label}`
- **Shape**: `{rounded.pill}`
- **Spacing**: Similar padding to primary, slightly reduced for compact arrays
- **Composition**: Appears in horizontal groups of three with consistent 1rem gaps

### Modal panel

- **Anatomy**: Centered container with brand mark, instructional text, primary action, legal disclaimer
- **Surface**: `{colors.surface}` background, no visible border, subtle shadow implied by elevation contrast
- **Shape**: `{rounded.panel}` with 1.5rem border-radius
- **Spacing**: 2.5rem internal padding, 1.5rem gaps between elements
- **Composition**: Vertical flex, all items centered

### Video card

- **Anatomy**: Embedded player with title bar, control overlay, and content area
- **Surface**: `{colors.surface}` container, internal video content with native player chrome
- **Shape**: `{rounded.card}` with 1rem border-radius
- **Composition**: Aspect-ratio constrained, centered in viewport with generous margins

### Manifesto section

- **Anatomy**: Multiple paragraphs of handwritten text, founder attribution, trailing action button
- **Surface**: `{colors.canvas}` background, no distinct container
- **Typography**: `{typography.manifesto}` for body, `{typography.label}` for button
- **Spacing**: Generous line-height within paragraphs, 2rem between paragraphs, 3rem before attribution
- **Composition**: Left-aligned text block with comfortable measure, centered action below

## Responsive behavior

The system appears optimized for desktop presentation based on available captures. Implementation should consider these adaptive strategies:

- Navigation links may collapse to a menu trigger below approximately 768px viewport width
- Video player should maintain aspect ratio while scaling to available width
- Contact button arrays should stack vertically on narrow viewports rather than compressing horizontal spacing
- Modal panels should acquire horizontal margins on small screens, reducing from fixed width to fluid with minimum padding
- Manifesto text size may reduce to 1.25rem on mobile to maintain comfortable line measure
- Hero headline should scale down to 2rem or 1.75rem on narrow viewports, preserving tight leading

Touch targets should maintain minimum 44px height for all interactive elements. The pill button shape provides adequate surface area naturally.

## Practical implementation guidance

### Preserve
- The absolute darkness of the canvas; any lightening destroys the cinematic atmosphere
- The dual-typography system: system fonts for function, Reenie Beanie for brand voice
- Generous spacing between sections; compression feels institutional rather than creative
- Pill-shaped buttons as the universal interactive shape
- High contrast between text and background, never dropping below WCAG AA thresholds

### Avoid
- Introducing saturated accent colors for calls-to-action; the white-on-dark pattern is sufficiently emphatic
- Box shadows on modal panels; rely on surface color difference and subtle backdrop dimming
- Sharp-cornered buttons or cards; the rounded language is integral to the approachable tone
- Multiple font weights within a single component; the system uses weight for role distinction, not emphasis
- Decorative borders; the border token should remain nearly invisible

### Recommended build order
1. Establish canvas and surface color variables with proper dark-mode defaults
2. Implement system font stack with complete type scale
3. Add Reenie Beanie with manifesto-specific sizing and spacing
4. Build pill button component with primary and secondary variants
5. Create modal container with centered positioning and panel styling
6. Implement navigation bar with transparent background and flex composition
7. Add video card with aspect-ratio constraint and rounded container
8. Compose hero section with vertical stacking and action pairing

### Accessibility
- Ensure all text meets WCAG AA contrast ratios against dark backgrounds; white on `#0D0D0D` exceeds AAA
- Provide visible focus indicators on pill buttons, likely as outline or subtle ring using `{colors.ink-muted}`
- Include `prefers-reduced-motion` media query considerations for any video autoplay or modal transitions
- Maintain semantic heading hierarchy despite visual uniformity; the hero headline should be `h1`, section displays `h2`
- Ensure the handwritten manifesto face remains legible at its intended size; avoid applying it below 1.25rem

## Scope note

This guide covers the landing page, login modal, and contact sections visible in supplied captures. Measurements are practical adaptation targets. Mobile breakpoints, form validation states, loading indicators, and dashboard interfaces are not represented. Motion design, hover behaviors, and focus states require additional research beyond static imagery.
