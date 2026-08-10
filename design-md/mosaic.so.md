# How mosaic.so is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/mosaic.so-design)

Last updated: 2026-08-10

## Captured pages

[![Homepage hero with large MOSAIC wordmark, award badges, and product screenshot on dark dotted grid background](https://pin.fontofweb.com/4853?format=jpg)](https://design.withfudge.com/share/pin-4853)

[Homepage hero with large MOSAIC wordmark, award badges, and product screenshot on dark dotted grid background](https://design.withfudge.com/share/pin-4853)

[![Blog page header with large MOSAIC wordmark in near-black on pure black background](https://pin.fontofweb.com/4852?format=jpg)](https://design.withfudge.com/share/pin-4852)

[Blog page header with large MOSAIC wordmark in near-black on pure black background](https://design.withfudge.com/share/pin-4852)

[![Blog index showing two article cards with author avatars, dates, and READ MORE links on black background](https://pin.fontofweb.com/4851?format=jpg)](https://design.withfudge.com/share/pin-4851)

[Blog index showing two article cards with author avatars, dates, and READ MORE links on black background](https://design.withfudge.com/share/pin-4851)

[![Use cases page with vertical category list, product interface screenshot, and Explore Mosaic button](https://pin.fontofweb.com/4850?format=jpg)](https://design.withfudge.com/share/pin-4850)

[Use cases page with vertical category list, product interface screenshot, and Explore Mosaic button](https://design.withfudge.com/share/pin-4850)

## Overview

Mosaic presents itself as an agentic AI video editing platform through a deliberately dark, immersive visual system. The design language prioritizes cinematic depth over decorative flourish: the canvas is consistently near-black or pure black, allowing product screenshots and video content to become the primary light sources within the interface. Typography operates at dramatic scale contrasts, with the MOSAIC wordmark functioning as both brand identifier and structural anchor across pages. The overall impression is of a professional creative tool—technical, confident, and visually restrained.

The system balances two competing needs: showcasing complex video editing interfaces with fidelity, and maintaining readable marketing content. It solves this by keeping the surrounding chrome minimal and dark, then introducing subtle texture through dot-grid backgrounds that evoke editing timelines and digital precision. Navigation floats as a pill-shaped bar, detached from the viewport edges, reinforcing the sense of a tool rather than a conventional marketing site. Content density varies dramatically between pages, from the sparse homepage hero to the information-rich use cases layout.

## Colors

The color system is intentionally austere, built on a near-monochrome foundation with minimal accent intervention. This restraint serves the product context: video editing interfaces are themselves visually complex, and a neutral surround prevents competition for attention.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, blog index, article card backgrounds |
| surface | #0a0a0a | Elevated navigation bar, subtle panel differentiation |
| ink | #ffffff | Primary text, hero wordmark, primary button fills, navigation text |
| muted-ink | #a0a0a0 | Secondary text, inactive category labels, metadata, read time |
| accent | #6b7280 | Tertiary text, subtle iconography, decorative elements |
| border | #262626 | Navigation bar stroke, button outlines, hairline dividers |

The relationship between tokens follows a strict hierarchy: ink commands attention on canvas, muted-ink recedes for supporting information, and accent handles the finest details. The surface token provides only the slightest lift from pure black, used where a panel needs perceptible edges without introducing true brightness. No warm tones appear in the interface itself; any warmth arrives through product photography and video thumbnails, which the neutral system accommodates without clashing. The border color is deliberately dim—visible enough to define shapes but never competing with content.

## Typography

The type system relies on a single family, Inter, deployed across a wide scale range from monumental display to compact metadata. The visual character comes from weight and scale contrast rather than family diversity.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 8rem | 700 | 0.9 | -0.04em | Homepage MOSAIC wordmark, blog header wordmark |
| section-display | Inter | 3rem | 700 | 1.1 | -0.02em | Use case category labels, page section titles |
| body | Inter | 1rem | 400 | 1.6 | 0 | Article descriptions, feature explanations |
| body-small | Inter | 0.875rem | 400 | 1.5 | 0 | Navigation items, button labels, metadata |
| label | Inter | 0.75rem | 500 | 1.4 | 0.05em | Dates, read times, small captions |
| navigation | Inter | 0.875rem | 500 | 1 | 0 | Primary navigation bar items |

The hero-display token drives the brand's most distinctive moments: the MOSAIC wordmark at sizes that dominate the viewport. Tight leading and aggressive negative tracking give it a constructed, almost architectural quality. Section-display carries this same weight and tracking approach into functional headings, particularly the vertical category list on the use cases page where inactive items appear in muted-ink and the active item presumably shifts to ink. Body text maintains generous leading for readability against dark backgrounds, where light text on dark requires more breathing room than equivalent dark-on-light settings. The label token's slight positive tracking provides optical compensation at small sizes, preventing the characters from visually congealing.

Verify licensing for these families before production use.

## Layout

The layout system favors asymmetry and deliberate negative space. The homepage hero centers its typographic content vertically and horizontally against a full-bleed dot-grid background, while the product screenshot occupies the right third of the viewport as a floating, angled element with chromatic aberration effects along its edges. This creates a diagonal visual tension that breaks static centering.

The use cases page introduces a split composition: a left rail approximately one-third width contains a vertically stacked category list with extreme scale, while the right two-thirds presents a product screenshot with descriptive text and a call-to-action below. The category list items stack with minimal vertical spacing, their large size making each item function as a section anchor rather than conventional navigation. The active or hovered state presumably shifts color from muted-ink to ink, with the product imagery updating to match.

Blog pages reverse the density pattern: sparse headers with the MOSAIC wordmark at reduced opacity give way to a two-column card grid below. Cards maintain consistent internal structure—thumbnail, date and author row, title, description, then footer with read-more link and read time—creating predictable scanning patterns despite the dark surround. The navigation bar floats centrally at the top of all pages, pill-shaped and detached from edges, containing logo, primary links, social icons, and dual call-to-action buttons.

Spacing follows a modular rhythm based on a 0.25rem unit. Section vertical padding is generous, typically 6rem, allowing large typography to breathe. Component internal padding clusters around 1.5rem for cards and panels. The tight 0.5rem spacing handles inline relationships like icon-text pairs and metadata rows.

## Visual language

The dot-grid texture is the system's most distinctive non-typographic element. Appearing across the homepage hero and subtly within product interface backgrounds, it evokes digital precision, editing timelines, and the pixel-level control the product offers. The grid is composed of small, evenly spaced light points on dark ground, creating depth without noise.

Product screenshots are treated as content objects rather than flat images. The homepage screenshot floats with perspective rotation, its edges glowing with purple and cyan chromatic separation that suggests holographic display or digital processing. This treatment connects the static marketing page to the dynamic, computational nature of the product. On the use cases page, screenshots sit within rounded panels that echo the navigation bar's geometry, creating family resemblance across chrome and content.

The MOSAIC wordmark functions as a recurring structural element, appearing at full opacity on the homepage, at near-invisible reduced opacity on the blog header, and implicitly as the brand anchor throughout. Its geometric construction—particularly the angular cuts in the A and other characters—reinforces the technical, engineered personality.

Imagery strategy favors product interface shots over lifestyle photography, with occasional editorial illustrations for blog content. The blog's Y Combinator article uses a warm, hand-drawn illustration style that contrasts with the cool precision of the surrounding system, demonstrating the canvas's neutrality.

## Components

**Navigation bar**
- Anatomy: Logo with wordmark and subtitle, primary link cluster (Product, Use Cases, API, Blog, Press, Careers), social icons (X, Discord), text link (Book a Demo), and pill button (Join our Beta)
- Surface: surface token background with border token 1px stroke, rounded to pill shape
- Typography: navigation token for links, label token for buttons
- Shape: pill border radius, floating horizontally centered below viewport top
- Spacing: generous horizontal padding, balanced distribution between logo, links, and actions

**Primary action button**
- Anatomy: Text label with optional arrow icon
- Surface: ink background, canvas text
- Typography: label token, uppercase or small-caps treatment
- Shape: pill border radius
- Spacing: horizontal padding approximately 1.5rem, vertical padding approximately 0.75rem
- Variants: appears in navigation bar and inline with hero content

**Secondary action button**
- Anatomy: Text label with arrow icon
- Surface: transparent background, ink text, border token outline
- Typography: label token
- Shape: pill border radius
- Spacing: similar padding to primary, distinguished by outline rather than fill

**Article card**
- Anatomy: Thumbnail image, date and author row with avatar, title, description, footer with read-more link and read time
- Surface: canvas background, no visible border or subtle border token edge
- Typography: label token for date and read time, body token for title, body-small for description
- Shape: card border radius on thumbnail
- Spacing: 1.5rem internal padding, consistent vertical rhythm between elements
- Composition: Two-column grid on blog index, equal width columns

**Category list**
- Anatomy: Vertical stack of category names
- Surface: no background, text-only
- Typography: section-display token, muted-ink default, ink for active state
- Shape: no bounding shape
- Spacing: minimal vertical spacing between items despite large type size
- Composition: Left rail of split layout, items function as both navigation and section headers

**Award badge**
- Anatomy: Laurel wreath icon flanking text block with placement and competition name
- Surface: no background
- Typography: body-small token for placement, label token for competition name
- Shape: symmetrical icon pair
- Spacing: tight internal grouping, paired horizontally with sibling badge

## Responsive behavior

The design's dramatic scale relationships suggest specific breakpoint considerations. The 8rem hero-display token will require reduction on viewports below desktop width; a progression to 5rem at tablet and 3rem at mobile maintains hierarchy without overflow. The homepage's floating product screenshot, positioned at right with perspective, should stack below the typographic content on narrow viewports rather than scaling down to illegibility.

The use cases page's split layout should collapse to single column, with the category list becoming a horizontal scroll or accordion rather than maintaining its vertical stack. Blog cards should transition from two-column to single-column at tablet width, preserving internal card structure.

The floating navigation bar's pill shape has limited horizontal space; at mobile widths, links should collapse to a menu trigger while preserving the Join our Beta button as visible priority. Touch targets should maintain minimum 44px height for all interactive elements.

## Practical implementation guidance

**Preserve**
- The extreme contrast between canvas and ink; this is the system's defining characteristic
- The dot-grid texture as a recurring background motif, particularly for hero sections
- The floating pill-shaped navigation bar, detached from viewport edges
- The MOSAIC wordmark at monumental scale with tight tracking
- The asymmetrical split layouts that give product imagery room to breathe

**Avoid**
- Introducing additional accent colors beyond the grayscale system; the product content provides color
- Flattening the perspective-treated product screenshots to conventional rectangular images
- Overcrowding the category list with additional metadata or descriptions
- Using borders brighter than the border token; the system relies on near-invisible edges

**Recommended build order**
1. Establish the canvas and ink tokens with Inter at body and hero-display sizes
2. Implement the dot-grid background as a repeating pattern or generated texture
3. Build the floating navigation bar with pill shape and dual button types
4. Create the homepage hero with centered wordmark, award badges, and asymmetric product placement
5. Develop the use cases split layout with category list and product screenshot panels
6. Construct blog card components with consistent internal rhythm
7. Add responsive behavior starting with type scale reduction and layout stacking

**Accessibility**
- Ensure all text meets WCAG AA contrast against the black canvas; the ink-on-canvas pairing exceeds requirements, but muted-ink on canvas should be verified at 4.5:1 for body text
- Provide visible focus indicators for keyboard navigation; the dark theme risks obscuring default browser outlines
- Consider a reduced-motion preference that disables the dot-grid animation or perspective screenshot transforms
- Ensure the Join our Beta button maintains sufficient contrast in both navigation bar and inline contexts

## Scope note

This guide covers the homepage, blog index, and use cases pages as visible in the supplied images. Footer content with partner logos, individual article pages, and the product interface itself are not represented. Motion behavior, hover states, and mobile layouts are not documented. Measurements are practical adaptation targets.
