# How posthog.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/posthog.com-design)

Last updated: 2026-08-10

## Captured pages

[![Pricing FAQ section with search input and threaded avatar-answered questions on off-white background](https://pin.fontofweb.com/1817?format=jpg)](https://design.withfudge.com/share/pin-1817)

[Pricing FAQ section with search input and threaded avatar-answered questions on off-white background](https://design.withfudge.com/share/pin-1817)

[![Retro software box CTA with orange starburst badge, cloud selector pills, and large orange action button](https://pin.fontofweb.com/1816?format=jpg)](https://design.withfudge.com/share/pin-1816)

[Retro software box CTA with orange starburst badge, cloud selector pills, and large orange action button](https://design.withfudge.com/share/pin-1816)

[![G2 review section with star ratings, bold review headings, and long-form customer testimonial paragraphs](https://pin.fontofweb.com/1815?format=jpg)](https://design.withfudge.com/share/pin-1815)

[G2 review section with star ratings, bold review headings, and long-form customer testimonial paragraphs](https://design.withfudge.com/share/pin-1815)

[![Partner product cards in horizontal row with logo icons, bold names, and muted descriptions with light borders](https://pin.fontofweb.com/1814?format=jpg)](https://design.withfudge.com/share/pin-1814)

[Partner product cards in horizontal row with logo icons, bold names, and muted descriptions with light borders](https://design.withfudge.com/share/pin-1814)

## Overview

PostHog's design system balances developer credibility with playful personality. The visual language centers on a warm off-white canvas with bold orange accents that signal action and energy. Typography relies on IBM Plex Sans for its technical yet approachable character, paired with Source Code Pro for code elements. The overall impression is of a tool built by engineers for engineers—precise, functional, but not afraid to have fun. The retro software box imagery, starburst badges, and tongue-in-cheek copy ("NOT ENDORSED BY KIM K") create memorable moments without undermining product trust. Layouts are spacious and readable, with generous whitespace between sections and clear typographic hierarchy that guides users through complex pricing information and technical documentation.

## Colors

The palette is intentionally restrained: warm neutrals form the foundation, a single vibrant orange drives action, and dark ink provides reading comfort. The off-white canvas avoids sterile clinical whiteness, lending the site a paper-like warmth that suits long-form technical content.

| token | value | use |
|---|---|---|
| canvas | `#FBFAF8` | Page background, primary surface behind all content |
| ink | `#151515` | Primary text, headings, strong emphasis |
| muted-ink | `#5A5A5A` | Secondary text, descriptions, captions |
| accent-orange | `#F54E00` | Primary actions, links, highlights, CTA emphasis |
| accent-orange-soft | `#F9A66B` | Starburst badges, decorative accents, hover states |
| surface | `#FFFFFF` | Cards, input fields, elevated panels |
| surface-warm | `#F5F3EF` | Search inputs, subtle backgrounds, code blocks |
| border | `#E5E2DC` | Card borders, dividers, structural separators |
| border-light | `#EFEDEA` | FAQ item dividers, subtle internal boundaries |
| action-primary | `#F54E00` | Buttons, primary links, conversion points |
| action-primary-hover | `#E04600` | Darkened orange for interactive hover states |
| action-secondary | `#FFFFFF` | Secondary button fill on dark or colored backgrounds |
| success | `#4CAF50` | Positive indicators, "ECO-FRIENDLY" badge fill |
| code-bg | `#F5F3EF` | Inline code and preformatted text backgrounds |

The orange accent is used strategically: it appears in the word "call" within the CTA headline, the "FREE" price indicator, the "today" urgency text, and the primary "Get started" button. This concentrated use makes the color feel energetic rather than overwhelming. Dark text on warm canvas provides excellent readability for long-form content like reviews and FAQs. The green success token appears sparingly, notably in the "ECO-FRIENDLY" pill badge, adding a secondary accent without competing with orange dominance.

## Typography

IBM Plex Sans serves as the sole typeface for interface text, chosen for its technical pedigree and open-source availability. Source Code Pro handles all monospace needs. The scale uses a 4px base unit, with sizes snapping to whole-number multiples.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | IBM Plex Sans | 3.5rem | 700 | 1.1 | -0.02em | Homepage hero, major landing headlines |
| section-display | IBM Plex Sans | 2.5rem | 700 | 1.15 | -0.01em | Section headers, "This is the call to action" |
| heading-large | IBM Plex Sans | 2rem | 600 | 1.2 | -0.01em | Feature titles, plan names |
| heading | IBM Plex Sans | 1.5rem | 600 | 1.25 | 0 | FAQ questions, review titles |
| body-large | IBM Plex Sans | 1.25rem | 400 | 1.5 | 0 | Lead paragraphs, introductory copy |
| body | IBM Plex Sans | 1rem | 400 | 1.6 | 0 | Primary reading text, descriptions |
| body-small | IBM Plex Sans | 0.875rem | 400 | 1.5 | 0 | Captions, metadata, fine print |
| label | IBM Plex Sans | 0.75rem | 600 | 1.4 | 0.02em | Category labels, badges, uppercase tags |
| navigation | IBM Plex Sans | 0.875rem | 500 | 1.4 | 0 | Menu items, tabs, breadcrumbs |
| code | Source Code Pro | 0.875rem | 400 | 1.6 | 0 | Inline code, technical values, pre blocks |

Weight distinctions matter: 700 for display headlines that need impact, 600 for structural headings, 500 for navigation emphasis, and 400 for body readability. The negative letter spacing on display sizes tightens large text optically. Line heights stay compact for headings (1.1–1.25) and generous for body (1.5–1.6) to support extended reading in reviews and documentation.

Verify licensing for these families before production use. IBM Plex Sans credits Mike Abbink, Paul Van Der Laan, and Pieter Van Rosmalen via Bold Monday. Source Code Pro carries no attributed designer or vendor in the supplied records.

## Layout

The layout follows a centered single-column model with contained width for readability. Major sections stack vertically with substantial breathing room between them.

The page uses a max-width container approximately 1200px centered with automatic margins. Content sections receive generous vertical padding—typically 6rem top and bottom—to create clear separation between functional areas. Within sections, content aligns to a consistent left margin with occasional centered exceptions for hero moments and CTAs.

The FAQ section demonstrates a nested layout pattern: a full-width search input sits above a vertically stacked list of questions. Each question-answer pair uses a threaded visual structure with avatar images creating left-edge alignment, while question text and answer content indent consistently. This creates scannable hierarchy without heavy borders.

The partner cards section shows a horizontal grid pattern: four equal-width cards in a single row on desktop, each with internal padding and consistent height. Cards use flexbox distribution with equal gaps between them.

The CTA section employs asymmetric composition: product imagery floats left while configuration options and action elements anchor right. This two-zone layout breaks the single-column rhythm for emphasis.

Spacing follows a 4px base unit. Common values include: 0.5rem for tight internal padding, 1rem for component breathing room, 1.5rem for card padding, 2rem for section internal gaps, and 6rem for major section separations. Border radius stays modest at 0.5rem for cards and panels, 0.375rem for buttons and inputs, with full 9999px for pill selectors and badges.

## Visual language

The visual personality merges technical precision with retro-playful charm. Illustrations reference 1990s software packaging—boxed products, CD-ROMs, starburst stickers—creating nostalgia for the developer audience while communicating "serious tool, fun team." The starburst badge ("NOT ENDORSED BY KIM K") uses a jagged radial shape in warm orange, contrasting with the otherwise rectilinear interface.

Photography and illustration style favors clean product shots with soft shadows, placed against the warm canvas rather than floating in space. The G2 badge and product box both use subtle depth through shadow rather than heavy dimensionality.

Iconography appears functional and minimal: small logos for partner services, simple UI icons for search and navigation. The partner card logos (Digital Ocean, Vercel, Ashby, Algolia) retain their brand colors, creating small color moments against the neutral card backgrounds.

Decorative elements are used sparingly but memorably: the orange starburst, the "3 people (would have) added" social proof bar in blue, the "ECO-FRIENDLY" green pill. These elements break up the neutral palette without cluttering the information hierarchy.

The overall density is moderate—content-rich without feeling cramped. Long-form reviews receive full width and generous line height for comfortable reading. Pricing information uses clear numerical hierarchy with the orange "FREE" drawing immediate attention.

## Components

### Primary button
- **Anatomy**: Solid fill container with centered text label
- **Surface**: Background `{colors.action-primary}`, text `#FFFFFF`
- **Typography**: `{typography.body}`, weight 600
- **Shape**: `borderRadius: {rounded.button}` (0.375rem), full-width in CTA context
- **Spacing**: Padding `{spacing.button-padding-y}` vertical, `{spacing.button-padding-x}` horizontal
- **Composition**: Prominent placement below pricing information, full-width within its container
- **States**: Hover darkens to `{colors.action-primary-hover}`

### Pill selector
- **Anatomy**: Rounded container with text label, optional icon prefix
- **Surface**: Background `{colors.surface}`, border `1px solid {colors.border}`
- **Typography**: `{typography.body-small}`, weight 500
- **Shape**: `borderRadius: {rounded.pill}` (9999px)
- **Spacing**: Padding 0.5rem vertical, 1rem horizontal
- **Composition**: Horizontal row of options with consistent gap, used for cloud region selection
- **Variants**: Selected state likely uses `{colors.action-primary}` background with white text

### Search input
- **Anatomy**: Single-line text field with placeholder text
- **Surface**: Background `{colors.surface-warm}`, border `1px solid {colors.border}`
- **Typography**: `{typography.body}`, placeholder uses muted color
- **Shape**: `borderRadius: {rounded.input}` (0.375rem)
- **Spacing**: Padding 0.75rem vertical, 1rem horizontal, full-width within container
- **Composition**: Sits at top of FAQ section as primary interaction point

### FAQ item
- **Anatomy**: Question text in bold, threaded answer with avatar and attribution
- **Surface**: Transparent background, bottom border `1px solid {colors.border-light}`
- **Typography**: Question uses `{typography.heading}` at weight 600; answer uses `{typography.body}`; attribution name uses `{typography.body}` in `{colors.accent-orange}`
- **Shape**: No border radius, full-width
- **Spacing**: Padding 1.5rem vertical, avatar offset creates left indentation
- **Composition**: Vertical stack with consistent left alignment; avatar images create visual thread

### Review card
- **Anatomy**: Star rating, bold title, structured Q&A content
- **Surface**: Transparent background, bottom border `1px solid {colors.border}`
- **Typography**: Title uses `{typography.heading}`; questions use `{typography.body}` weight 600; answers use `{typography.body}`
- **Shape**: No border radius
- **Spacing**: Padding 2rem vertical, generous internal paragraph spacing
- **Composition**: Full-width within container, stacked vertically with previous/next reviews

### Partner card
- **Anatomy**: Logo icon, bold name, description text
- **Surface**: Background `{colors.surface}`, border `1px solid {colors.border}`
- **Typography**: Name uses `{typography.body}` weight 600; description uses `{typography.body-small}` in muted color
- **Shape**: `borderRadius: {rounded.card}` (0.5rem)
- **Spacing**: Padding `{spacing.card-padding}` (1.5rem)
- **Composition**: Equal-width grid items with consistent gap, horizontally arranged

### Social proof bar
- **Anatomy**: Colored container with text and asterisk disclaimer
- **Surface**: Background `#4A90D9` (blue), text white
- **Typography**: `{typography.body-small}`
- **Shape**: No border radius or slight rounding
- **Spacing**: Compact padding, sits above main CTA content

### Starburst badge
- **Anatomy**: Radial pointed shape with centered text
- **Surface**: Fill `{colors.accent-orange-soft}`, text `{colors.ink}`
- **Typography**: `{typography.label}`, uppercase, centered
- **Shape**: Custom SVG or CSS polygon with pointed edges
- **Composition**: Absolutely positioned over product imagery, rotated slightly for dynamic effect

## Responsive behavior

The layout should maintain single-column stacking on narrow viewports, with partner cards transitioning from four-across to two-across to single column. The CTA section's asymmetric two-zone layout should collapse to vertical stack with imagery above configuration options.

FAQ search input and items should remain full-width at all breakpoints. Review cards maintain full-width layout but may increase font size slightly on larger screens for improved readability.

The pill selector for cloud regions should remain horizontal on tablet and above, potentially stacking vertically on mobile to prevent horizontal overflow. Primary buttons should remain full-width on mobile for easy touch targets, transitioning to natural width on desktop when context allows.

Typography scales down modestly: hero-display may reduce to 2.5rem on tablet and 2rem on mobile. Section-display reduces to 2rem and 1.75rem respectively. Body text maintains 1rem minimum for readability.

## Practical implementation guidance

### Preserve
- The warm off-white canvas (`#FBFAF8`) as the default page background—this subtle warmth distinguishes the site from generic white-background SaaS
- The concentrated use of orange accent: limit to primary actions, key price indicators, and deliberate emphasis words rather than sprinkling throughout
- The threaded avatar structure in FAQ items, which creates visual interest and humanizes technical content
- The retro software box aesthetic in hero/CTA areas as a distinctive brand moment
- The generous line height (1.6) for body text supporting long-form reading

### Avoid
- Pure white (`#FFFFFF`) as page background—it loses the warm, approachable quality
- Multiple accent colors competing with orange; the green success badge works because it appears once
- Heavy drop shadows or dimensional effects that would clash with the flat, clean aesthetic
- Tight letter spacing on body text—keep tracking at 0 for readability
- Border radius larger than 0.5rem for cards; the modest rounding maintains technical precision

### Recommended build order
1. Establish canvas background and ink text colors with IBM Plex Sans at body size
2. Implement typographic scale with display, heading, and body tokens
3. Build primary button component with orange fill
4. Create card component with light border and modest radius
5. Implement FAQ section with search input and threaded item layout
6. Add CTA section with asymmetric layout and pill selectors
7. Layer in decorative elements: starburst badge, social proof bar, partner logos

### Accessibility
- Ensure orange accent (`#F54E00`) on white meets WCAG AA contrast for text; it may need darkening for small text compliance
- Maintain visible focus indicators on pill selectors and buttons, likely using outline or ring in accent color
- FAQ search input should have clear focus state with border color change
- Avatar images in FAQ should have alt text with author names
- Star ratings in reviews should include screen-reader text indicating numeric value
- The retro product imagery should have descriptive alt text conveying the visual joke for screen reader users

## Scope note

This guide covers the pricing page and homepage surfaces visible in the supplied images, including FAQ, reviews, partner integrations, and CTA sections. Navigation, footer, homepage hero animation, mobile layouts, dark mode, form validation states, and interactive hover behaviors are not represented in the available material. Measurements are practical adaptation targets derived from visual inspection against a 4px base unit.
