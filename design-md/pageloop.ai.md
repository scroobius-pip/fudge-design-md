# How pageloop.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/pageloop.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Blog landing page with serif hero title, featured article card with Impressionist painting, and three-column article grid with soft gray borders](https://pin.fontofweb.com/7083?format=jpg)](https://design.withfudge.com/share/pin-7083)

[Blog landing page with serif hero title, featured article card with Impressionist painting, and three-column article grid with soft gray borders](https://design.withfudge.com/share/pin-7083)

[![Product UI screenshot showing update checklist panel above centered serif headline with italic emphasis and dark CTA button on near-white gradient background](https://pin.fontofweb.com/7082?format=jpg)](https://design.withfudge.com/share/pin-7082)

[Product UI screenshot showing update checklist panel above centered serif headline with italic emphasis and dark CTA button on near-white gradient background](https://design.withfudge.com/share/pin-7082)

[![Feature section with left-aligned Inter headings, right-floating browser mockup with blue tint, and pill-shaped action buttons with star and close icons](https://pin.fontofweb.com/7081?format=jpg)](https://design.withfudge.com/share/pin-7081)

[Feature section with left-aligned Inter headings, right-floating browser mockup with blue tint, and pill-shaped action buttons with star and close icons](https://design.withfudge.com/share/pin-7081)

[![Minimal testimonial quote centered in light blue radial gradient with company logo and role attribution below](https://pin.fontofweb.com/7080?format=jpg)](https://design.withfudge.com/share/pin-7080)

[Minimal testimonial quote centered in light blue radial gradient with company logo and role attribution below](https://design.withfudge.com/share/pin-7080)

## Overview

Pageloop's visual system bridges editorial refinement with product clarity. The design pairs EB Garamond's classical serif forms for display and headline hierarchy against Inter's neutral, highly legible sans-serif for body content and interface elements. This typographic tension—old-world craft meeting modern utility—mirrors the product's positioning: AI agents that handle the mechanical work of support documentation so human teams can focus on craft.

The color palette is intentionally restrained, built on near-white and cool gray surfaces that let product screenshots and content imagery breathe. A single deep blue accent appears sparingly for navigation links and interactive states, creating moments of focus without visual noise. Surfaces employ subtle linear gradients that shift imperceptibly from `#F9F9FB` to `#FCFCFD`, lending dimensional depth to cards and sections without shadows. The overall impression is calm, authoritative, and quietly premium—appropriate for a tool that promises to reduce chaos in support operations.

## Colors

| token | hex | use |
|---|---|---|
| ink | `#1C2024` | Primary headings, hero display text, primary button backgrounds |
| ink-secondary | `#4A4E53` | Secondary headings, feature titles in left-aligned sections |
| ink-tertiary | `#60646C` | Body text, descriptions, card subtitles |
| muted | `#80838D` | Tertiary text, timestamps, footer links, disabled states |
| border | `#B9BBC6` | Card borders, dividers, subtle separators |
| canvas | `#FFFFFF` | Page background, modal surfaces, input fields |
| surface | `#F9F9FB` | Section backgrounds, gradient start, alternate rows |
| surface-elevated | `#FCFCFD` | Card backgrounds, gradient end, elevated panels |
| gradient-start | `#F9F9FB` | Linear gradient origin for section depth |
| gradient-end | `#FCFCFD` | Linear gradient destination for section depth |
| accent | `#0000EE` | Navigation links, interactive text, focus indicators |
| accent-deep | `#000033` | Hover states, pressed states, shadow tints |
| testimonial-glow | `#F7F9FF` | Radial gradient center for quote sections |

The palette operates in three modes. The default light mode uses `canvas` or `surface` backgrounds with `ink` through `muted` text. Product feature sections frequently employ the `gradient-start` to `gradient-end` linear gradient, creating a sense of forward momentum without literal motion. The testimonial mode introduces a soft radial glow from `testimonial-glow`, centering attention on quoted text. Dark surfaces appear only in primary buttons (`ink` background) and occasional deep shadow layers. No true dark mode is present in the captured surfaces.

Image palettes from photography lean cool and muted—Impressionist greens, soft blues, and warm neutrals—but these inform art direction rather than UI token choices. The interface maintains chromatic discipline regardless of content imagery.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | EB Garamond | 4rem | 400 | 1 | -0.04em | Page titles, blog hero, major section headers |
| section-display | EB Garamond | 2.5rem | 400 | 1 | -0.04em | Feature headlines, testimonial quotes |
| card-title | EB Garamond | 2rem | 400 | 1.2 | -0.04em | Article cards, blog post previews |
| body | Inter | 1rem | 400 | 1.4 | -0.02em | Primary body text, descriptions, paragraphs |
| body-small | Inter | 0.875rem | 400 | 1.2 | -0.02em | Compact descriptions, metadata, captions |
| body-italic | Inter | 0.875rem | 400 | 1.43 | 0em | Emphasized phrases within body text |
| label | Inter | 0.75rem | 500 | 1.33 | 0.005em | UI labels, badges, small headings |
| caption | SF Pro | 0.75rem | 400 | 1.33 | 0.05em | Uppercase labels, category tags, timestamps |
| navigation | System Sans-Serif | 0.75rem | 400 | 1 | 0em | Header links, utility navigation |

EB Garamond, designed by Georg Duffner and Octavio Pardo, carries all display hierarchy with a single Regular weight. Its tight negative tracking and precise line-height matching (64px/64px for hero, 40px/40px for section) create a composed, magazine-like density. Inter handles all body and interface text at 400 Regular, with occasional 500 Medium for labels. SF Pro appears exclusively for uppercase caption treatments with positive tracking. System Sans-Serif serves navigation at a small size where legibility requirements are modest.

The design facts also list Inter-Italic as a distinct font source, used for italic body text at 0.875rem with 1.43 line height. In practice this renders the same visual treatment as `body-italic` with Inter's italic style applied. Verify licensing for these families before production use. EB Garamond is available under the SIL Open Font License; Inter, Inter-Italic, and SF Pro require separate verification for commercial deployment.

## Layout

The layout follows a centered, max-width container model with generous vertical breathing room. Sections stack with `section` spacing (6.25rem) or `section-large` (7.75rem) between them, creating clear rhythmic pauses that let each feature or message land independently. Horizontal padding is consistent at `spacious` (2rem) for comfortable reading margins.

Content areas employ asymmetric two-column compositions for feature sections: text content anchors left at roughly one-third width while product screenshots or browser mockups float right, often breaking the container edge or sitting within tinted atmospheric backgrounds. This creates visual tension and product focus simultaneously. Blog layouts reverse to symmetric grids—featured article cards span full width with image-left/text-right composition, while article lists settle into three-column grids with uniform card heights.

The header is minimal and functional: logo mark left, primary navigation center-left, utility links and CTA right. Navigation items use `accent` color with `navigation` typography. The primary action button inverts to `ink` background with `canvas` text, creating a clear hierarchy against the light surface.

Cards and panels use `surface-elevated` backgrounds with `border` hairlines, or the subtle `surface` to `surface-elevated` gradient for sections that need gentle separation from the page background. Border radii are restrained—`button` (0.25rem) for actions, `card` (0.5rem) for containers, with full `pill` (9999px) reserved for badge-like elements and icon buttons.

## Visual language

The visual language balances editorial sophistication with product credibility. Classical serif typography signals thoughtfulness and permanence—appropriate for a company writing about documentation and knowledge management. The near-absence of color beyond neutrals and a single blue accent forces attention toward content and product imagery, which themselves carry warmth through carefully selected photography.

Gradients are structural rather than decorative. The `gradient-start` to `gradient-end` shift appears across dozens of section backgrounds, creating a barely-perceptible lift that separates content bands without visible rules. Testimonial sections introduce a radial glow that pools behind quoted text, centering emotional weight.

Shadows are rare and purposeful. When present, they use layered inset and drop combinations: a dark inset at top, light inset highlight, and subtle drop shadow for pressed or elevated states. The effect is tactile and physical, suggesting quality hardware interface rather than flat web convention.

Iconography is minimal and functional—small arrow indicators on buttons, calendar icons for dates, checkmarks for completion states. No illustrative or decorative icon system is visible. The product screenshots themselves serve as the primary visual interest, rendered with realistic browser chrome and authentic UI states.

Photography selection leans toward Impressionist and pastoral imagery on the blog—landscapes, figures in nature, urban scenes with soft focus and muted palettes. This editorial art direction reinforces the handcrafted, human-quality positioning against the mechanical efficiency of the AI product.

## Components

### Primary button

- **Anatomy**: Text label with right-pointing arrow icon, contained in a rounded rectangle
- **Surface**: `ink` background (`#1C2024`), `canvas` text
- **Typography**: `body-small` at 0.875rem, weight 400, with arrow icon as inline suffix
- **Shape**: `button` radius (0.25rem), no border
- **Spacing**: `compact` (1rem) vertical padding, `comfortable` (1.5rem) horizontal padding
- **Composition**: Centered within sections, often standalone below descriptive text blocks
- **States**: The captured surface shows default state only; hover should lighten background slightly

### Navigation link

- **Anatomy**: Text label in header bar, no underline
- **Surface**: Transparent background
- **Typography**: `navigation` token, `accent` color (`#0000EE`)
- **Shape**: No radius, no border
- **Spacing**: `tight` (0.5rem) vertical, `compact` (1rem) horizontal padding
- **Composition**: Horizontal row in header, left of utility actions

### Article card

- **Anatomy**: Image thumbnail top, title below, optional description and metadata
- **Surface**: `canvas` or `surface-elevated` background, `border` hairline on featured variant
- **Typography**: `card-title` for headline, `body-small` for description, `caption` for date
- **Shape**: `card` radius (0.5rem) on outer container; images may have slight radius or be flush
- **Spacing**: `comfortable` (1.5rem) internal padding, `spacious` (2rem) gap in grids
- **Composition**: Featured card uses horizontal image-left/text-right layout; grid cards stack vertically

### Feature section

- **Anatomy**: Eyebrow label, `section-display` headline, body paragraph, optional CTA; paired with product screenshot
- **Surface**: `gradient-start` to `gradient-end` linear gradient, or `canvas` with radial glow for testimonials
- **Typography**: `caption` uppercase for eyebrow, `section-display` for headline, `body` for description
- **Shape**: Full-bleed section, content constrained to max-width container
- **Spacing**: `section-large` (7.75rem) vertical padding for major features
- **Composition**: Asymmetric two-column when screenshot present; centered single-column for testimonials

### Browser mockup

- **Anatomy**: Rounded rectangle containing realistic browser chrome (traffic lights, address bar) with product screenshot
- **Surface**: `canvas` background, subtle shadow for elevation
- **Shape**: `card` radius (0.5rem) with possible larger radius on outer container
- **Spacing**: Internal padding mimics real browser window
- **Composition**: Floats right of text content, often breaks grid slightly; may have atmospheric tint (soft blue gradient) behind it

### Badge/Tag

- **Anatomy**: Short text label in compact container
- **Surface**: `surface` or `canvas` background, `border` hairline
- **Typography**: `caption` or `label`
- **Shape**: `pill` radius (9999px) or `button` radius
- **Spacing**: Minimal padding, `tight` vertical and `compact` horizontal

## Responsive behavior

The captured surfaces show desktop layouts exclusively. Based on the component structures, several responsive adaptations are recommended:

- The asymmetric two-column feature sections should stack to single-column on narrow viewports, with product screenshots moving above or below text content rather than beside it.
- The three-column article grid should collapse to two columns at medium widths and single column on mobile, maintaining card proportions and internal spacing.
- Hero display text at 4rem should scale down to `section-display` (2.5rem) or `card-title` (2rem) on smaller screens to prevent overflow and maintain line-length comfort.
- Header navigation should collapse to a menu trigger on mobile, preserving the primary CTA as a persistent action.
- Section vertical padding should reduce proportionally—`section-large` to `section`, `section` to `spacious`—to maintain rhythm without excessive scrolling on short viewports.

The generous whitespace and centered compositions provide natural flexibility; the primary challenge is managing the serif display sizes and asymmetric layouts at narrow widths.

## Practical implementation guidance

### Preserve
- The typographic pairing of EB Garamond for display and Inter for body; this is the core brand expression
- The extremely tight tracking on serif headlines (-0.04em); loosening destroys the composed, editorial density
- The near-white gradient surfaces; pure white backgrounds feel flat in comparison
- The restrained accent usage; `accent` blue should remain sparse and functional
- The asymmetric feature section compositions with floating product imagery

### Avoid
- Adding decorative illustrations or iconography beyond functional UI elements; the product screenshots are the visual interest
- Introducing additional accent colors; the single blue against neutrals is deliberately disciplined
- Heavy shadows or elevation systems; the subtle inset shadows are sufficient
- Rounded corners larger than `card` (0.5rem) on containers; the aesthetic is crisp, not playful
- Body text smaller than 0.875rem; Inter at 1rem is the readable standard

### Recommended build order
1. Establish the type system first: load EB Garamond and Inter, set the three display sizes with exact tracking
2. Implement the gradient surface system as the default section background
3. Build the header with logo, navigation links, and primary button
4. Create the feature section component with asymmetric layout and gradient background
5. Add the article card system with image handling and metadata
6. Implement the testimonial section with radial glow background
7. Polish with button states, focus styles, and responsive stacking

### Accessibility
- Ensure `accent` blue (`#0000EE`) on `canvas` white meets WCAG AA contrast; it likely does for large text but may need darkening for small UI text
- The `ink` (`#1C2024`) on `canvas` provides excellent contrast for body text
- EB Garamond at display sizes should maintain readability; avoid using it below 1.25rem
- Product screenshots in browser mockups need alt text describing the visible UI state
- The radial gradient testimonial section should not rely on color alone for emphasis; the centered composition and quotation marks provide structural cues

## Scope note

This guide covers the Pageloop marketing site homepage and blog landing page as captured. Pricing pages, documentation, authenticated application interfaces, and mobile breakpoints are not represented. Motion, hover states, form validation, and loading patterns are not visible in the supplied surfaces. Measurements derive from the exact values provided in the design facts.
