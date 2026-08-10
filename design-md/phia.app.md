# How phia.app is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/phia.app-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing section with gradient-accented 'Simple' word, pill toggle for device count, and large rounded card with feature checklist and coral CTA button](https://pin.fontofweb.com/7420?format=jpg)](https://design.withfudge.com/share/pin-7420)

[Pricing section with gradient-accented 'Simple' word, pill toggle for device count, and large rounded card with feature checklist and coral CTA button](https://design.withfudge.com/share/pin-7420)

[![Hero section with soft pink gradient background, app icon, script 'beautifully' accent in gradient, coral download button, and multi-column footer](https://pin.fontofweb.com/7419?format=jpg)](https://design.withfudge.com/share/pin-7419)

[Hero section with soft pink gradient background, app icon, script 'beautifully' accent in gradient, coral download button, and multi-column footer](https://design.withfudge.com/share/pin-7419)

[![Feature showcase with horizontal scroll of app screenshots, rounded cards with shadow, and gradient-accented 'matters' in display heading](https://pin.fontofweb.com/7418?format=jpg)](https://design.withfudge.com/share/pin-7418)

[Feature showcase with horizontal scroll of app screenshots, rounded cards with shadow, and gradient-accented 'matters' in display heading](https://design.withfudge.com/share/pin-7418)

[![Centered laptop mockup showing Phia app interface with timeline editor, floating above coral-tinted abstract background with centered tagline below](https://pin.fontofweb.com/7417?format=jpg)](https://design.withfudge.com/share/pin-7417)

[Centered laptop mockup showing Phia app interface with timeline editor, floating above coral-tinted abstract background with centered tagline below](https://design.withfudge.com/share/pin-7417)

## Overview

Phia's landing page presents a screen recorder for macOS through a design language that balances technical credibility with approachable warmth. The system rests on three visual pillars: generous white space that lets product screenshots breathe, a restrained two-tone typographic hierarchy pairing neutral sans-serif with a single flowing script, and a concentrated accent of warm coral-pink that appears only in moments of action or emphasis. The overall impression is of a native Mac application translated into web form—clean, confident, and quietly premium without resorting to dark mode or heavy chrome.

The page structure follows a classic landing rhythm: navigation bar, hero with soft gradient atmosphere, centered product reveal, horizontal feature carousel, and closing pricing and footer sections. Each section maintains consistent horizontal margins and centers content within a readable maximum width, creating a calm vertical reading experience that keeps attention on the application's interface shown in screenshots.

## Colors

| token | value | use |
|---|---|---|
| ink | #1D1C1F | Primary headings, body text, navigation links |
| ink-secondary | #393939 | Secondary headings, card titles |
| ink-tertiary | #5C5C5D | Muted labels, inactive toggle states |
| muted | #6E6E73 | Descriptions, footer links, captions |
| canvas | #FFFFFF | Page background, card surfaces, button text on dark |
| surface | #D2D2D7 | Subtle section backgrounds, toggle track |
| surface-warm | #FFD7C4 | Gradient endpoint, warm atmospheric accents |
| accent | #FF0058 | Primary buttons, gradient midpoint, focus emphasis |
| accent-warm | #F8385A | Gradient start, hover states, glow origins |
| accent-glow | #FF0058 | Soft button shadows, ambient coral halos |

The color system operates in light mode exclusively. The near-black ink family provides all readable text, with stepped lightness creating hierarchy without introducing additional hues. The coral accent is disciplined—it appears only in interactive elements, the brand gradient, and occasional script word highlights. This concentration makes the color feel energetic rather than overwhelming.

A linear gradient runs from #F8385A through #FF0058 to #FFD7C4, deployed horizontally across script accent words and available for atmospheric backgrounds. The warm surface tone appears at the gradient's end and in subtle hero backgrounds, creating a pink-tinged environment that differentiates Phia from cooler tech competitors.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Applesystem | 4.375rem | 600 | 1 | -0.015em | Hero headlines, major section titles |
| section-display | Applesystem | 3.125rem | 600 | 1 | -0.015em | Section headings, pricing headline |
| script-accent | Borel | 3.125rem | 500 | 1 | normal | Emphasized words within headings ("Simple", "beautifully", "matters") |
| body | Applesystem | 1rem | 400 | 1.5 | normal | Paragraphs, descriptions, footer body |
| body-large | Applesystem | 1.125rem | 500 | 1.2 | -0.02em | Hero descriptions, pricing subhead |
| body-small | Applesystem | 0.875rem | 500 | 1.5 | -0.02em | Feature descriptions, card details |
| label | Applesystem | 0.75rem | 500 | 2 | -0.01em | Buttons, tags, small labels |
| navigation | Applesystem | 1rem | 400 | 1.5 | normal | Nav links, header items |

The typographic system pairs Apple's system font stack with Borel, a rounded script face used sparingly for single words within display headings. This pairing creates a distinctive voice: the neutral sans establishes trust and readability, while the script injects personality at moments of emotional emphasis. The script words receive the brand gradient fill, making them simultaneously softer and more vibrant than surrounding text.

Display sizes use tight line heights and slight negative tracking for crisp, poster-like impact. Body sizes relax into comfortable reading proportions with neutral tracking. The weight range is narrow—400 Regular for body, 500 Medium for emphasis, and 600 Semibold for headlines—avoiding the heaviness of full Bold.

Verify licensing for these families before production use. Matter and Noto Sans are present in source files but not visibly deployed in the captured interface.

## Layout

The page employs a centered single-column layout with consistent horizontal containment. Content lives within a maximum width of approximately 49.875rem, flanked by generous gutters that expand on wider viewports. Sections stack vertically with substantial breathing room, typically 5rem between major regions.

The navigation bar spans full width with internal padding of 1rem vertically and 2.5rem horizontally, containing the wordmark left and action links right. The hero section breaks from the centered constraint with a full-bleed soft gradient background that extends behind the app icon and headline before transitioning back to white.

Feature sections alternate between centered text introductions and full-width media presentations. The screenshot carousel extends to the viewport edge, with individual cards maintaining internal padding and rounded corners. Pricing returns to the centered container model, presenting a single large card that dominates the visual field.

Vertical rhythm follows a 0.125rem base unit. Major spacing increments include 1.25rem for tight element groups, 2.5rem for related content blocks, 5rem for section separation, and 6.25rem for hero breathing room. Negative margins occasionally pull script accents closer to preceding text for tighter visual coupling.

## Visual language

The visual language draws from native macOS application design translated into web context. Rounded rectangles dominate—cards carry 3.625rem corner radii, buttons use 1.875rem, and pill toggles achieve full roundness. This consistent rounding softens the technical nature of screen recording software into something more approachable.

Shadows are minimal and atmospheric rather than structural. A diffuse shadow of 0 0.25rem 6.25rem with 5% black opacity lifts cards subtly from the background. The coral accent generates a distinctive glow shadow at 0 0.5rem 5.875rem with 29% opacity, creating a soft halo around primary buttons that suggests warmth and energy without harshness.

The brand gradient appears in two contexts: as a text fill on script accent words, and as a background wash in the hero section. The gradient direction is consistently horizontal, moving from warm coral through vibrant pink to pale peach. This creates visual continuity between typographic and atmospheric applications.

Product screenshots are presented with realistic device framing—laptop mockups show the actual application interface with timeline editors, preview windows, and control panels. These are not abstracted or simplified, allowing potential users to evaluate the actual software appearance.

## Components

### Navigation bar

- **Anatomy**: Wordmark left, text links center-right, primary action button far right
- **Surface**: Transparent over hero gradient, transitioning to white on scroll
- **Typography**: Navigation token for links, label token for download button
- **Spacing**: 1rem vertical padding, 2.5rem horizontal page gutter
- **Composition**: Flex row with space-between alignment

### Hero section

- **Anatomy**: App icon, display headline with inline script accent, description paragraph, primary action button
- **Surface**: Full-bleed warm gradient background from surface-warm to canvas
- **Typography**: Hero-display for main headline, script-accent for emphasized word, body-large for description
- **Shape**: Icon uses rounded square with subtle shadow
- **Spacing**: Generous vertical padding, content centered horizontally
- **Composition**: Stacked center-aligned elements with comfortable vertical rhythm

### Feature card (carousel)

- **Anatomy**: Rounded container with screenshot image, optional caption below
- **Surface**: White background with diffuse shadow
- **Shape**: 3.625rem border radius, overflow hidden for image containment
- **Spacing**: Internal padding 3.75rem, external margin for carousel gaps
- **Composition**: Horizontal scroll with partial off-screen cards visible, navigation arrows at right

### Pricing card

- **Anatomy**: Header with title and description, device toggle, price display, feature checklist, primary action button
- **Surface**: White with prominent shadow, creating floating effect
- **Typography**: Section-display for title, body-small for features, label for button
- **Shape**: 3.625rem border radius
- **Spacing**: 3.75rem internal padding, generous vertical margins
- **Composition**: Two-column layout with details left and pricing right on desktop

### Device toggle

- **Anatomy**: Pill container with two selectable options
- **Surface**: Surface color track, ink-secondary fill for active selection
- **Typography**: Label token for option text
- **Shape**: Full pill with 0.25rem internal padding
- **States**: Active option inverts to white text on dark background

### Primary button

- **Anatomy**: Text label centered within rounded container
- **Surface**: Accent background, white text
- **Typography**: Label token, medium weight
- **Shape**: 1.875rem border radius, full pill variant available
- **Spacing**: 0 1.5rem horizontal padding, 3rem minimum height
- **Shadow**: Accent-glow shadow for ambient halo effect

### Footer

- **Anatomy**: Wordmark and tagline left, multi-column link groups right, copyright and social icons bottom
- **Surface**: White with top border or subtle separator
- **Typography**: Body for descriptions, body-small for links, label for category headers
- **Spacing**: 2.5rem vertical padding, content constrained to page maximum width
- **Composition**: Asymmetric grid with brand identity anchored left

## Responsive behavior

The design appears optimized for desktop presentation with substantial horizontal space. The content maximum width of approximately 50rem suggests a comfortable reading measure that would persist across viewports, with gutters adjusting to screen size.

The screenshot carousel likely requires horizontal scroll on all viewport sizes given its expansive nature. On narrower viewports, the pricing card's two-column layout should stack vertically, placing the price and action button below the feature list. The navigation bar would benefit from collapse to a simplified wordmark and menu trigger on small screens.

Typography scales should maintain hierarchy relationships: hero-display may reduce to section-display size on tablets, and body sizes should remain legible without reduction. The script accent words must not become disproportionately large relative to surrounding display text.

Touch targets for buttons and carousel navigation should maintain minimum 44px dimensions. The horizontal scroll carousel requires visible scroll indicators or swipe affordances on touch devices.

## Practical implementation guidance

### Preserve
- The disciplined use of coral accent—reserve it for primary actions and gradient script words only
- Generous white space around all content; the calmness is part of the brand
- The specific pairing of system sans with Borel script; the personality depends on this contrast
- Rounded corner consistency across cards and buttons
- Realistic product screenshots without abstraction or stylization

### Avoid
- Introducing additional accent colors; the single coral hue is intentionally concentrated
- Heavy borders or outlines; rely on shadow and space for separation
- Dark mode without careful rethinking of the warm gradient and coral glow effects
- Tightening line heights on body text below 1.5
- Using the script face for more than one or two words per heading

### Recommended build order
1. Establish the color tokens and typography scale with system fonts
2. Build the navigation and hero section with gradient background
3. Implement the content container and maximum width constraint
4. Create the card component with shadow and corner radius
5. Add the screenshot carousel with horizontal overflow
6. Build the pricing section with toggle and checklist
7. Implement the footer grid
8. Add the script accent words with gradient text fill last, as they require careful baseline alignment

### Accessibility
- Ensure the coral-on-white button combination meets minimum contrast ratios; the vibrant pink may need dark text variant for some shades
- Provide visible focus indicators that respect the rounded shape language
- Include aria labels for the horizontal carousel controls
- Maintain semantic heading hierarchy despite the visual mixing of script and sans faces
- Consider reduced motion preferences for any scroll-triggered animations

## Scope note

This guide covers the phia.app landing page for a macOS screen recording application, including its hero, feature showcase, pricing, and footer surfaces. It does not include the login page, any in-application interface, mobile viewport adaptations, or motion and interaction specifications beyond static visual properties. The script accent typography requires careful cross-browser gradient text implementation.
