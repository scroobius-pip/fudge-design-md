# How browserless.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/browserless.io-design)

Last updated: 2026-08-10

## Captured pages

[![Feature pairing section with two white cards on light gray background showing Hybrid Automations and Captcha Solving options with purple text links](https://pin.fontofweb.com/4846?format=jpg)](https://design.withfudge.com/share/pin-4846)

[Feature pairing section with two white cards on light gray background showing Hybrid Automations and Captcha Solving options with purple text links](https://design.withfudge.com/share/pin-4846)

[![Hero section with large dark headline Cache cookies and reconnects, purple Get Started button, code snippet illustration, and three stacked feature cards](https://pin.fontofweb.com/4845?format=jpg)](https://design.withfudge.com/share/pin-4845)

[Hero section with large dark headline Cache cookies and reconnects, purple Get Started button, code snippet illustration, and three stacked feature cards](https://design.withfudge.com/share/pin-4845)

[![BrowserQL section with centered dark headline and six gray cards in 3x2 grid with dark icons and purple accent links](https://pin.fontofweb.com/4844?format=jpg)](https://design.withfudge.com/share/pin-4844)

[BrowserQL section with centered dark headline and six gray cards in 3x2 grid with dark icons and purple accent links](https://design.withfudge.com/share/pin-4844)

[![Three-column feature cards for Scraping, PDFs & Screenshots, and Automation with colorful illustrations and purple Learn more links](https://pin.fontofweb.com/4843?format=jpg)](https://design.withfudge.com/share/pin-4843)

[Three-column feature cards for Scraping, PDFs & Screenshots, and Automation with colorful illustrations and purple Learn more links](https://design.withfudge.com/share/pin-4843)

## Overview

Browserless presents a developer-focused SaaS interface that balances technical credibility with approachable clarity. The visual system centers on high-contrast dark navy typography against generous white space and soft gray surfaces, creating a clean, modern aesthetic that feels at home in the browser-automation and web-scraping tooling space. The design communicates sophistication through restraint: no decorative noise, no excessive borders, just purposeful hierarchy and clear calls-to-action.

The interface structure follows a predictable editorial rhythm. Large display headings anchor each section, supported by concise body copy and organized into card-based layouts. Purple serves as the singular accent color, reserved exclusively for interactive elements and inline links, making actions immediately scannable without competing with the content hierarchy. Illustrations and icons adopt a consistent flat style with occasional gradient accents, reinforcing the technical yet friendly brand personality. The overall impression is of a product that respects developer time—direct, well-organized, and visually calm.

## Colors

The color system is intentionally minimal, built on a near-monochrome foundation with a single vibrant accent. This restraint allows the colorful product illustrations to stand out while maintaining professional credibility.

| token | value | use |
|---|---|---|
| ink | `#0F172A` | Primary headings, body text, and icon container backgrounds |
| muted-ink | `#334155` | Secondary body text and descriptions |
| canvas | `#FFFFFF` | Page background and elevated card surfaces |
| surface | `#F1F5F9` | Section backgrounds and alternate card fills |
| surface-elevated | `#F8FAFC` | Subtle elevation within gray sections |
| action | `#6366F1` | Primary buttons and key interactive surfaces |
| action-hover | `#4F46E5` | Button hover states |
| action-text | `#818CF8` | Text links, inline accents, and Learn more arrows |
| border | `#E2E8F0` | Card borders and subtle dividers |

The interface operates in a light mode throughout. Dark navy ink against white canvas provides maximum readability for technical documentation and feature descriptions. Gray surfaces create section breaks without harsh transitions. The purple action family is used sparingly and consistently—never for decorative purposes, always for functional emphasis. Product illustrations introduce warmer accent colors through gradients and iconography, but these remain illustrative rather than structural to the UI palette.

## Typography

The type system uses Urbanist, a geometric sans-serif with open apertures and friendly proportions that suit both display headlines and dense technical content. Three weights are employed: Regular for body copy, Semibold for card titles and labels, and Bold for display headings.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Urbanist | 3.5rem | 700 | 1.1 | -0.02em | Page hero headlines |
| section-display | Urbanist | 2.5rem | 700 | 1.15 | -0.01em | Section headings |
| card-title | Urbanist | 1.5rem | 600 | 1.3 | 0 | Feature card headings |
| body | Urbanist | 1rem | 400 | 1.6 | 0 | Paragraphs and descriptions |
| body-small | Urbanist | 0.875rem | 400 | 1.5 | 0 | Compact descriptions |
| label | Urbanist | 0.875rem | 600 | 1.4 | 0.01em | Buttons and link text |
| navigation | Urbanist | 0.875rem | 500 | 1 | 0 | Navigation items |

Display headings use tight negative tracking for a contemporary, confident feel. Body text maintains generous line height for comfortable reading of technical explanations. The type scale progresses in clear steps: hero display at 56px, section display at 40px, card title at 24px, body at 16px, with small text at 14px. Every size is an exact multiple of 4px, ensuring clean alignment with the spacing system.

Urbanist was designed by Corey Hu. Verify licensing for these families before production use.

## Layout

The layout follows a centered, contained model with generous breathing room. Content max-width appears to sit around 1200px, creating comfortable line lengths for reading while allowing ample whitespace on larger viewports.

Sections stack vertically with substantial padding between them—approximately 5rem top and bottom for major section breaks. Within sections, content centers horizontally. Headlines and subheadings often occupy their own centered block above the content grid, creating clear hierarchy before the eye reaches interactive elements.

Card layouts dominate the content organization. Feature pages use a split layout: large hero headline and call-to-action on the left, stacked feature cards on the right. Product overview pages employ three-column grids for feature categories and six-card grids for capability breakdowns. Grid gaps remain consistent at 1.5rem, creating rhythm without crowding.

The card system itself uses two variants: white cards with subtle borders for feature comparisons on gray backgrounds, and gray cards without borders for capability grids on white backgrounds. This alternation creates visual interest while maintaining cohesion. Internal card padding is generous at 2rem, giving illustrations and text room to breathe.

## Visual language

The visual language communicates technical precision through geometric clarity and consistent iconography. Icons live in small dark squares with rounded corners, creating uniform touch targets and visual anchors within cards. These containers use the ink color for maximum contrast against both white and gray card backgrounds.

Product illustrations employ a flat, modern style with occasional dimensional depth. Code snippets appear as stylized editor windows with syntax highlighting. Abstract browser windows, database cylinders, and document icons reinforce the automation theme without literal heaviness. Gradient accents in illustrations—warm oranges, cool blues, and magentas—add energy without disrupting the interface's calm.

The overall aesthetic avoids decorative gradients, glassmorphism, or heavy shadows. Elevation is communicated through background color shifts rather than drop shadows. The few visible borders are hairline-thin and light gray, serving as subtle dividers rather than prominent frames. This flatness suits the developer audience, suggesting efficiency and directness.

Arrow icons accompany text links, providing clear affordance for navigation without requiring underline treatments. Buttons are solid and rectangular with moderate rounding, avoiding both excessive pill shapes and sharp corners.

## Components

### Primary button

- **Anatomy**: Solid fill container with centered text label
- **Surface**: Background `{colors.action}`, text `{colors.canvas}`
- **Typography**: `{typography.label}` at 0.875rem, Semibold weight
- **Shape**: Border radius 0.5rem, no border
- **Spacing**: Padding 0.875rem vertical, 1.75rem horizontal
- **Composition**: Typically appears below hero headlines or within card footers
- **Variants**: Hover state shifts to `{colors.action-hover}`

### Feature card (white)

- **Anatomy**: Bordered container with illustration, title, description, and optional link
- **Surface**: Background `{colors.canvas}`, border 1px solid `{colors.border}`
- **Typography**: Title uses `{typography.card-title}`, body uses `{typography.body}`
- **Shape**: Border radius 0.75rem
- **Spacing**: Padding 2rem on all sides
- **Composition**: Used in pairs on gray section backgrounds, arranged side by side with 1.5rem gap

### Feature card (gray)

- **Anatomy**: Borderless container with icon, title, and description
- **Surface**: Background `{colors.surface}`
- **Typography**: Title uses `{typography.card-title}`, body uses `{typography.body-small}`
- **Shape**: Border radius 0.75rem
- **Spacing**: Padding 2rem on all sides
- **Composition**: Used in 3x2 grids on white backgrounds for capability overviews

### Icon container

- **Anatomy**: Square container with centered icon
- **Surface**: Background `{colors.ink}`, icon color `{colors.canvas}`
- **Shape**: Border radius 0.5rem, dimensions 2.5rem x 2.5rem
- **Composition**: Positioned at top-left of gray feature cards

### Text link with arrow

- **Anatomy**: Inline text with right-pointing arrow icon
- **Surface**: Text color `{colors.action-text}`, no background
- **Typography**: `{typography.label}` at 0.875rem, Semibold weight
- **Composition**: Appears at card bottom or inline within descriptions
- **States**: Arrow suggests forward navigation; no visible underline in default state

### Section heading block

- **Anatomy**: Centered headline with optional subheadline below
- **Typography**: Headline uses `{typography.section-display}`, subheadline uses `{typography.body}`
- **Spacing**: Bottom margin approximately 3rem before card grid begins
- **Composition**: Full-width centered text, maximum width constrained for readability

## Responsive behavior

The layout should adapt gracefully for smaller viewports. The two-column feature card layout on the feature page should stack vertically on narrow screens, with cards maintaining full width and internal padding. The three-column product grid should collapse to single column on mobile, preserving card aspect ratios and internal spacing.

Hero sections with side-by-side headline and illustration should stack with headline first, illustration second. The illustration may scale down or hide on very narrow viewports to prioritize the call-to-action.

Navigation, if present in a full implementation, should collapse to a hamburger menu on mobile. The purple accent color should remain consistent across breakpoints for brand recognition.

Type sizes should scale down proportionally. The hero display at 3.5rem may reduce to 2.5rem on tablet and 2rem on mobile. Section display should similarly step down to maintain hierarchy without overwhelming small screens.

## Practical implementation guidance

### Preserve
- The strict two-tone type hierarchy: dark navy for content, purple for actions only
- Generous whitespace between sections and within cards
- Consistent 4px grid alignment for all spacing and sizing decisions
- The alternation between white bordered cards and gray borderless cards by background context
- Square icon containers with rounded corners as card anchors

### Avoid
- Adding additional accent colors beyond the purple action family
- Heavy drop shadows or glassmorphism effects
- Underlining text links—the arrow icon provides sufficient affordance
- Shrinking card padding below 1.5rem on any viewport
- Using display weights for body text or card descriptions

### Recommended build order
1. Establish the 4px base grid and spacing tokens
2. Implement typography scale with Urbanist at all weights
3. Build the color system with ink, canvas, surface, and action families
4. Create the two card variants with correct padding and border treatments
5. Add the icon container component for gray cards
6. Implement primary button with hover state
7. Compose section layouts with centered heading blocks and card grids
8. Add text-link-with-arrow pattern for navigation between sections

### Accessibility
- Ensure purple action text on white backgrounds meets WCAG AA contrast ratios; the current `#818CF8` may need darkening for small text compliance
- Provide visible focus states for buttons and links, likely using the action-hover color with an outline offset
- Maintain touch targets at minimum 44px for icon containers and buttons
- Use semantic heading hierarchy: single h1 per page, section displays as h2, card titles as h3
- Ensure arrow icons in links have appropriate aria-label or are hidden from screen readers if the text is sufficient

## Scope note

This guide covers the marketing and feature-overview surfaces of browserless.io as visible in the supplied images. Pricing pages, documentation, dashboard interfaces, authentication flows, and mobile-specific layouts are not represented. Footer content, navigation dropdown behavior, and form validation states are outside the current scope. Measurements are practical adaptation targets derived from visual inspection.
