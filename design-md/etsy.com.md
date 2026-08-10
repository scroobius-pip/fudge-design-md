# How etsy.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/etsy.com-design)

Last updated: 2026-08-10

## Captured pages

[![Footer with orange Etsy logo, email subscription bar, renewable electricity banner, and multi-column link grid on deep blue background](https://pin.fontofweb.com/5368?format=jpg)](https://design.withfudge.com/share/pin-5368)

[Footer with orange Etsy logo, email subscription bar, renewable electricity banner, and multi-column link grid on deep blue background](https://design.withfudge.com/share/pin-5368)

[![Homepage hero with dark teal gift banner, rounded search pill, category navigation, and four-column interest cards with product photography](https://pin.fontofweb.com/5367?format=jpg)](https://design.withfudge.com/share/pin-5367)

[Homepage hero with dark teal gift banner, rounded search pill, category navigation, and four-column interest cards with product photography](https://design.withfudge.com/share/pin-5367)

[![Cream-colored brand story section with serif heading, three-column value proposition, and outlined Help Center button](https://pin.fontofweb.com/5366?format=jpg)](https://design.withfudge.com/share/pin-5366)

[Cream-colored brand story section with serif heading, three-column value proposition, and outlined Help Center button](https://design.withfudge.com/share/pin-5366)

[![Product listing for bold red business coach website template with magenta and orange accent panels and editorial photography](https://pin.fontofweb.com/5359?format=jpg)](https://design.withfudge.com/share/pin-5359)

[Product listing for bold red business coach website template with magenta and orange accent panels and editorial photography](https://design.withfudge.com/share/pin-5359)

## Overview

Etsy's visual system balances handmade warmth with marketplace clarity. The brand presents itself through an orange logomark that signals creative energy, while the interface relies on a disciplined pairing of an editorial serif for moments of storytelling and a neutral sans-serif for navigation, search, and product information. The homepage experience moves from a clean white header through rich photographic content into a deep blue footer that grounds the page with institutional weight. This is not a minimal system—it uses color deliberately to separate functional zones, with cream surfaces for brand narrative, dark teal for promotional banners, and layered blues for the page foundation. The overall impression is approachable and trustworthy, designed to let seller photography remain the primary visual focus while the interface recedes into supportive structure.

## Colors

| token | value | use |
|---|---|---|
| brand-orange | #F1641E | Logomark, primary buttons, accent highlights |
| ink | #222222 | Primary text, headings, iconography |
| canvas | #FFFFFF | Page background, cards, input fields |
| surface-cream | #FFFBE6 | Brand story sections, warm neutral zones |
| surface-teal | #1A4D4D | Promotional banners, hero backdrops |
| surface-blue | #2F3C7E | Footer background, structural panels |
| surface-blue-deep | #1A2456 | Footer logo well, deepest structural layer |
| muted-ink | #595959 | Secondary text, captions, placeholder text |
| border-light | #E1E3DF | Card borders, dividers, subtle separators |
| border-medium | #CBCBCB | Input borders, active UI edges |

The color architecture follows a clear hierarchy. Brand-orange functions as the singular accent, reserved for the logo and primary calls-to-action to maintain its impact. Ink and canvas form the core reading pair, with ink providing sufficient contrast against all light surfaces. The warm cream surface appears in brand storytelling contexts, creating emotional breathing room between commerce-heavy sections. Dark teal serves as a photographic complement, allowing product imagery with warm tones to advance visually. The blue footer system creates a definitive page end, with the deeper blue reserved for the logo container to establish visual anchoring. No dark mode is visible in the supplied material; the system operates in a light-dominant mode with colored surfaces used as intentional zones rather than global themes.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Guardian Egyptian Web | 3rem | 300 | 1.1 | -0.01em | Homepage hero headlines, major banners |
| section-display | Guardian Egyptian Web | 2rem | 300 | 1.2 | 0 | Section headings, brand story titles |
| body | Graphik Cyr Web | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general content |
| body-medium | Graphik Cyr Web | 1rem | 500 | 1.6 | 0 | Button labels, emphasized body text |
| label | Graphik Cyr Web | 0.75rem | 500 | 1.4 | 0.02em | Captions, metadata, small UI labels |
| navigation | Graphik Cyr Web | 0.875rem | 500 | 1.4 | 0 | Top navigation, category links, footer columns |

The type system depends on the contrast between Guardian Egyptian Web's light weight and Graphik Cyr Web's medium weight. Guardian Egyptian Web carries editorial presence at display sizes, with its light weight preventing heaviness even at large scales. Graphik Cyr Web handles all functional text with medium weight providing sufficient emphasis for navigation and buttons without requiring a bold cut. The size scale uses 4px increments: 12px for labels, 14px for navigation, 16px for body, 32px for section display, and 48px for hero display. Verify licensing for these families before production use. Guardian Egyptian Web is designed by Paul Barnes and Christian Schwartz; Graphik Cyr Web is designed by Christian Schwartz. Both are available from Commercial Type.

## Layout

The page structure follows a centered container model with full-bleed sections for promotional content and the footer. The header maintains a fixed or sticky position with horizontal distribution: logo left, search center, utility actions right. Below the header, a secondary navigation bar presents category pills in a horizontal scroll or wrap arrangement. The main content area uses a maximum width container, estimated at approximately 75rem based on the proportional relationship between content and viewport edges visible in the homepage image.

Content sections stack vertically with generous vertical spacing. The hero banner occupies a prominent position with asymmetric layout—text content left, product imagery right. Below this, interest cards arrange in equal-width grids with consistent gutters. The brand story section breaks from the white container with a full-bleed cream background, centering its three-column content. The footer reverses to full-bleed blue, with internal layout shifting to a multi-column link grid beside a logo and app-download well.

Horizontal rhythm relies on card-based grids with gutters at 1.5rem. The search input demonstrates the system's approach to compact horizontal elements: a rounded pill shape with internal padding that creates generous touch targets without excessive height. Vertical section spacing measures approximately 4rem between major content blocks, with tighter 1.5rem spacing within components.

## Visual language

Photography drives the visual experience, with UI elements designed to frame rather than compete. Product images appear with rounded corners at 0.75rem, creating soft edges that echo the handmade quality of marketplace goods. The hero banner pairs lifestyle photography with solid color fields, using dark teal as a photographic backdrop that makes warm product tones advance.

Iconography uses simple line weights, visible in the header's heart and cart symbols. The brand mark appears as a wordmark in orange, with no accompanying symbol beyond the logotype itself. Decorative elements are restrained—underline links use dotted or dashed patterns for emphasis rather than color alone. The overall aesthetic favors flat surfaces with subtle borders rather than shadows, though the search input suggests a thin border treatment to define form edges.

The system maintains visual interest through surface color changes rather than elevation. Where many marketplaces rely on white cards with shadows, Etsy uses full-bleed color sections to create rhythm: white for commerce, cream for story, blue for closure. This approach reduces visual noise while maintaining clear information hierarchy.

## Components

### Search bar

- Anatomy: Text input with placeholder text, search icon button at right edge
- Surface: White background with medium gray border
- Typography: Body size, regular weight
- Shape: Full pill with 9999px radius
- Spacing: Internal padding approximately 0.75rem horizontal, 0.5rem vertical
- Composition: Flex row with input filling available space, icon button fixed width

### Primary action button

- Anatomy: Text label centered within rounded container
- Surface: Brand-orange background, white text
- Typography: Body-medium token
- Shape: Pill with 1.5rem radius (less extreme than search, more button-like)
- Spacing: Internal padding approximately 0.75rem horizontal, 0.5rem vertical
- Variants: Appears in hero banner as "Shop our picks"

### Secondary action button

- Anatomy: Text label within rounded container with border
- Surface: White background, ink border, ink text
- Typography: Body-medium token
- Shape: Pill with 1.5rem radius
- Spacing: Similar internal padding to primary
- Variants: Appears in brand story as "Go to Help Center"

### Interest card

- Anatomy: Product photograph with rounded corners, title below, subtitle beneath title
- Surface: White background, no visible border or shadow
- Typography: Section-display for title, body for subtitle
- Shape: 0.75rem radius on image container
- Spacing: Image fills card width, text offset by 1rem below
- Composition: Vertical stack, image aspect ratio approximately 4:5

### Hero banner

- Anatomy: Headline, supporting text, primary button on colored surface; product image adjacent
- Surface: Dark teal background for text area
- Typography: Hero-display for headline, body for supporting text
- Shape: Rounded corners on container, approximately 0.75rem
- Spacing: Generous internal padding, text aligned left with comfortable measure
- Composition: Asymmetric split, text occupying roughly 40% width

### Footer

- Anatomy: Logo well, app download button, multi-column link grid, social icons, email subscription bar
- Surface: Blue background with deeper blue for logo section
- Typography: Navigation token for column headers, body for links
- Shape: No rounding on outer container; internal elements use pill shapes
- Spacing: Generous vertical padding, column gutters at approximately 2rem
- Composition: Asymmetric grid with logo section narrower than link grid

### Email capture bar

- Anatomy: Prompt text, input field, subscribe button in single row
- Surface: Light blue background distinct from main footer
- Typography: Body for prompt, body-medium for button
- Shape: Input and button share pill geometry
- Spacing: Compact vertical padding, centered alignment

## Responsive behavior

The supplied images show desktop presentation only. Based on visible patterns, several responsive adaptations are recommended. The search bar should remain prominent at all widths, potentially collapsing to icon-only on narrow viewports with expansion on activation. The hero banner's asymmetric layout should stack vertically on smaller screens, with text content preceding imagery. Interest cards currently display four across; this should reduce to two columns on tablet and single column on mobile, maintaining image aspect ratios. The footer link grid should collapse from four columns to two, then to a single accordion or stacked list on narrow screens. The email capture bar should wrap to stacked layout when horizontal space is insufficient, keeping input and button full-width. Typography should scale down proportionally, with hero-display reducing to section-display size on mobile to prevent overflow.

## Practical implementation guidance

### Preserve
- The serif/sans-serif pairing for display and functional text
- Full-bleed color sections as primary zoning mechanism
- Pill-shaped interactive elements for search and actions
- Orange brand mark against white or dark blue only
- Generous internal padding on rounded containers
- Photography-forward card layouts with minimal chrome

### Avoid
- Shadows as primary elevation strategy
- Additional accent colors competing with brand-orange
- Sharp-cornered cards or buttons in consumer-facing contexts
- Heavy type weights in Guardian Egyptian Web display settings
- Borders on interest cards that compete with product imagery

### Recommended build order
1. Establish color tokens and type scale with Guardian Egyptian Web and Graphik Cyr Web
2. Build search bar component with pill geometry and border treatment
3. Implement primary and secondary button variants
4. Create interest card with image container and text stack
5. Assemble hero banner with asymmetric layout
6. Construct footer with layered blue surfaces and column grid
7. Add email capture bar as distinct surface layer above footer

### Accessibility
- Ensure brand-orange on white meets minimum contrast ratios; if insufficient, use darker orange or add border
- Provide visible focus states on pill-shaped inputs and buttons
- Maintain text contrast on dark teal and blue surfaces using white or near-white
- Structure footer links with proper heading hierarchy for screen reader navigation
- Include descriptive alt text for product imagery in interest cards

## Scope note

This guide covers the homepage, brand story section, footer, and a representative product listing page as visible in the supplied images. Mobile breakpoints, interactive states, loading skeletons, checkout flows, and seller tools are not included. Measurements are practical adaptation targets derived from visible proportions against a 4px relative unit grid.
