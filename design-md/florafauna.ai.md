# How florafauna.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/florafauna.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with italic serif tagline, social icons, and multi-column link grid over dark floral photography](https://pin.fontofweb.com/3228?format=jpg)](https://design.withfudge.com/share/pin-3228)

[Footer section with italic serif tagline, social icons, and multi-column link grid over dark floral photography](https://design.withfudge.com/share/pin-3228)

[![Hero section with italic speed-of-thought headline and three-step feature cards showing UI screenshots](https://pin.fontofweb.com/3227?format=jpg)](https://design.withfudge.com/share/pin-3227)

[Hero section with italic speed-of-thought headline and three-step feature cards showing UI screenshots](https://design.withfudge.com/share/pin-3227)

[![Model showcase grid with partner logos and cinematic photography cards on near-black background](https://pin.fontofweb.com/3226?format=jpg)](https://design.withfudge.com/share/pin-3226)

[Model showcase grid with partner logos and cinematic photography cards on near-black background](https://design.withfudge.com/share/pin-3226)

[![Manifesto page with large sans-serif statement and dense body copy on pure black background](https://pin.fontofweb.com/2070?format=jpg)](https://design.withfudge.com/share/pin-2070)

[Manifesto page with large sans-serif statement and dense body copy on pure black background](https://design.withfudge.com/share/pin-2070)

## Overview

FLORA presents itself as a creative AI platform through a deliberately dark, immersive interface that treats the screen as a cinematic canvas rather than a conventional software dashboard. The visual system builds tension between technical precision and humanistic warmth: the near-black environment absorbs attention while white typography punches forward with confident weight, and moments of italic serif lettering introduce editorial personality without disrupting the modernist discipline. The design language speaks to professional creatives who expect both power and taste—every surface feels considered, every transition between content and imagery feels intentional. The homepage establishes this through a hero that pairs a bold sans-serif statement with an italicized emotional qualifier, followed by dense feature cards that demonstrate the product through actual interface screenshots rather than abstract illustration. A model showcase grid extends this logic by treating partner logos and capability descriptions as content within photographic frames, collapsing the boundary between tool and creative output. The manifesto page strips away imagery entirely, letting typographic scale and generous line measure carry the company's philosophical position. Across all surfaces, the system maintains a consistent voice: confident, technically credible, yet unmistakably designed by people who understand creative culture.

## Colors

The color system operates on a principle of maximum contrast with minimal palette complexity. The interface is fundamentally monochromatic, using black as both canvas and atmospheric device, with white as the primary information carrier and a single mid-tone for hierarchy and structure.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, footer ground, manifesto page ground |
| surface | #0a0a0a | Elevated card backgrounds, feature card fills |
| surface-elevated | #141414 | Hover states, active card surfaces, input fields |
| ink | #ffffff | Primary headings, body text, primary button fills, logo marks |
| muted-ink | #a3a3a3 | Secondary descriptions, footer links, captions, metadata |
| border | #262626 | Card outlines, dividers, subtle structural boundaries |
| accent | #8b5cf6 | Interactive highlights, focus indicators, selection states |

The canvas color is not merely a background choice but a compositional strategy: it allows photography to glow with cinematic intensity and creates the impression of infinite depth behind interface elements. The surface and surface-elevated tokens provide only slight lift from pure black, enough to establish material layering without breaking the dark continuity. Ink appears at full strength for all primary communication, while muted-ink handles supporting information at approximately 64% luminance. Border operates at the threshold of visibility—present enough to define card edges and footer structure, but never competing with content. The accent color appears sparingly in the current interface, reserved for interactive feedback rather than decorative application. No gradient tokens are employed; all transitions between values are handled through photography or solid overlays.

## Typography

The type system orchestrates three distinct voices across two families: Geist handles all structural and display typography with clean geometric authority, Helvetica Now carries extended reading at neutral temperature, and Redaction 50-Italic injects editorial personality at key moments.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 3rem | 600 | 1.1 | -0.02em | Homepage hero headlines, major section titles |
| section-display | Geist | 2.5rem | 600 | 1.15 | -0.01em | Feature card headers, model category titles |
| body | Helvetica Now | 1rem | 400 | 1.6 | 0 | Manifesto paragraphs, feature descriptions, footer body |
| body-large | Helvetica Now | 1.25rem | 400 | 1.5 | 0 | Hero subheadlines, introductory statements |
| label | Geist | 0.75rem | 500 | 1.4 | 0.02em | Buttons, tags, metadata, navigation items |
| navigation | Geist | 0.875rem | 500 | 1.4 | 0 | Header links, footer column headers |
| editorial-accent | Redaction 50-Italic | 3rem | 400 | 1.1 | -0.01em | Hero italic phrases, manifesto emphasis, taglines |

Geist appears in Medium and Semibold weights for the interface, with Semibold reserved for display sizes and Medium for functional labels. The tight tracking on display sizes creates a compressed, contemporary density that suits the technical positioning. Helvetica Now Regular provides the reading experience with generous line height that prevents fatigue in the manifesto's long-form content. Redaction 50-Italic appears at display scale only, never below 2rem, ensuring its calligraphic quality remains legible and impactful rather than decorative at small sizes. The italic is used strategically: in the hero it modifies the emotional register of an otherwise direct statement, and in the footer it transforms a functional tagline into something approaching poetry.

Font credits: Geist was designed by Basementstudio (Andrés Briganti, Mateo Zaragoza) and is available through Vercel. Helvetica Now was developed by Monotype Imaging Inc with contributions from an extensive design team including Jim Ford, Steve Matteson, Charles Nix, Tom Rickner, Alexander Roth, Juan Villanueva, Jan Hendrik Weber, and Terrance Weinzierl. Redaction 50-Italic was designed by Jeremy Mickel and Forest Young, distributed by Mckl. Verify licensing for these families before production use.

## Layout

The layout system favors full-bleed immersion over contained convention. Pages extend edge-to-edge horizontally, with content held by generous internal margins rather than a visible bounding box. The relative unit of 0.25rem provides fine-grained control, but the visible rhythm operates at multiples of 1.5rem for comfortable breathing room.

Section spacing follows a dramatic cadence: major vertical transitions use 6rem of separation, creating distinct acts within the scroll experience. Content within sections clusters at 1.5rem gaps, with card grids adopting a 1rem gutter that feels tight but not cramped against the dark ground. The homepage hero occupies substantial vertical territory before yielding to the feature card trio, which sits in a horizontal row with equal width distribution. Each feature card contains internal padding of 1.5rem, establishing a consistent inset that protects content from edge collision.

The model showcase grid introduces asymmetry: larger partner cards occupy two-column spans while smaller capability cards sit in single columns, creating a bento-box rhythm that rewards exploration. This grid maintains the 1rem gutter but allows cards to size according to their content hierarchy—Google and Runway receive visual priority through scale, while individual models nest within their parent containers.

The manifesto page abandons grid complexity for a centered column of approximately 65 characters maximum measure, letting the text breathe in isolation. The footer returns to full-width behavior with a multi-column link grid that distributes navigation across Company, Product, and Resources categories, plus a social icon row and copyright block that anchor the left edge.

## Visual language

The visual language synthesizes three territories: the technical interface, the cinematic photograph, and the editorial magazine. This synthesis appears most clearly in the feature cards, where screenshots of the actual product UI are presented as content within rounded containers that float on the dark ground. The cards themselves use subtle borders rather than shadows for definition, avoiding the dated elevation metaphor in favor of a flatter, more contemporary materiality.

Photography treatment is central to the system's identity. Images are not cropped into rigid aspect ratios but allowed to fill their card containers with cover behavior, often bleeding to edges. The model showcase cards contain vivid, sometimes surreal imagery—architectural renders, cinematic stills, abstract compositions—that demonstrate the platform's output quality while providing visual relief from the monochrome interface. These images sit behind semi-transparent dark overlays where text must remain legible, typically in the lower third of the card.

The italic serif accent functions as a visual signature, appearing at moments of highest emotional claim. Its contrast against the geometric sans-serif creates a deliberate friction: the sans says "tool," the italic says "art." This pairing appears in the hero headline, the footer tagline, and implicitly in the manifesto's philosophical tone even where the italic is not present.

Iconography is minimal and functional: social platform icons in the footer, small UI glyphs within product screenshots, and the occasional arrow or chevron for navigation. No custom icon set is visible; the system relies on established platform iconography and simple geometric marks.

## Components

### Primary action button
- **Anatomy**: Text label with optional arrow icon, contained within a rounded rectangle
- **Surface and text color**: White fill (#ffffff) with black text (#000000)
- **Typography**: label token, Geist Medium at 0.75rem
- **Shape**: 0.5rem border radius, 0.75rem vertical padding, 1.25rem horizontal padding
- **Spacing**: Sits inline with secondary actions, separated by 0.75rem
- **Composition**: Left-aligned text, icon positioned at right edge when present
- **Variants**: Arrow variant adds diagonal arrow icon for external navigation

### Secondary action button
- **Anatomy**: Text label within bordered container
- **Surface and text color**: Transparent fill with white text, 1px border in border token (#262626)
- **Typography**: label token
- **Shape**: 0.5rem border radius, matching padding to primary action
- **Spacing**: Paired with primary action in header and hero zones
- **Composition**: Same text alignment as primary, distinguished by absence of fill

### Feature card
- **Anatomy**: Rounded container with internal screenshot image, step number, headline, and description
- **Surface and text color**: surface-elevated fill (#141414), white headline, muted-ink description
- **Typography**: Step number in section-display, headline in section-display, description in body
- **Shape**: 1rem border radius, 1px border in border token
- **Spacing**: 1.5rem internal padding, 1rem gutter in three-column row
- **Composition**: Screenshot occupies upper portion, text stacks below with step number positioned above headline
- **Variants**: Three visible variants for Ideate, Iterate, and Scale steps, each with distinct screenshot content

### Model showcase card
- **Anatomy**: Image-dominant container with partner logo, model name, and capability description
- **Surface and text color**: Image fills container, text overlaid with dark gradient protection
- **Typography**: Partner name in section-display or label depending on card scale, model details in body or label
- **Shape**: 1rem border radius, overflow hidden
- **Spacing**: Internal text inset of 1.5rem from edges
- **Composition**: Logo positioned upper-left, model list stacks in lower portion, larger cards show multiple models in grid
- **Variants**: Large partner cards (Google, Runway, OpenAI) span multiple columns; individual model cards sit in single columns

### Footer
- **Anatomy**: Full-width section with tagline, social icons, copyright, and multi-column link grid
- **Surface and text color**: canvas background, white column headers, muted-ink links
- **Typography**: Tagline in editorial-accent, column headers in navigation, links in body at reduced size
- **Shape**: 1px top border in border token
- **Spacing**: Generous top padding of 6rem, internal column gaps of 3rem
- **Composition**: Left cluster holds tagline, copyright, and social row; right cluster distributes links across three columns
- **Variants**: Single variant visible across pages

## Responsive behavior

The current interface is documented at desktop width. Implementation should consider the following adaptive strategies: the three-column feature card row should stack vertically on narrow viewports, with each card expanding to full width and maintaining internal proportions. The model showcase grid should reflow from asymmetric bento layout to a single column of full-width cards, preserving image aspect ratios through padding-bottom techniques rather than fixed heights. The manifesto's centered column should maintain comfortable measure by adjusting margins rather than font size, potentially narrowing to approximately 45 characters on mobile. The footer link grid should collapse from three columns to a single stacked list, with column headers becoming accordion triggers if space is severely constrained. Navigation items in the header should consolidate into a menu trigger below approximately 768px viewport width.

## Practical implementation guidance

### Preserve
- The near-black canvas as the default ground; resist adding light mode or mid-tone backgrounds
- The italic serif accent at display scale only; do not dilute its impact by using it for body text or labels
- The tight tracking on Geist display sizes; this compression is essential to the contemporary voice
- The generous section spacing; the dramatic cadence between content blocks is part of the brand rhythm
- The photographic card treatment with edge-to-edge imagery and gradient text protection

### Avoid
- Adding drop shadows to cards; the system uses borders and tonal contrast for layering
- Introducing additional accent colors beyond the single purple; the monochrome discipline is intentional
- Using Redaction 50-Italic for functional text; reserve it for emotional or philosophical moments
- Creating light mode variants without explicit brand direction; the dark identity is foundational
- Crowding the model showcase grid with too many small cards; the asymmetric rhythm depends on scale variation

### Recommended build order
1. Establish the canvas color and load Geist with appropriate weights
2. Build the type scale with hero-display, section-display, body, and label tokens
3. Implement the header with navigation and dual action buttons
4. Construct the hero section with mixed sans-serif and italic serif headline
5. Create the feature card component with screenshot container and text stack
6. Develop the model showcase grid with responsive column spanning
7. Build the footer with multi-column link grid and social icon row
8. Add the manifesto page template as a centered text column

### Accessibility
- Ensure white text on black backgrounds meets WCAG AAA contrast ratios; the current palette exceeds minimums
- Provide visible focus indicators using the accent color for keyboard navigation
- Add aria-labels to social icon links in the footer
- Consider reducing motion for users who prefer it, particularly if scroll-triggered animations are implemented
- Maintain semantic heading hierarchy: h1 for hero, h2 for sections, h3 for card titles

## Scope note

This guide covers the homepage, model showcase, and manifesto page surfaces of florafauna.ai. Pricing page structures, mobile layouts, motion behavior, form interactions, and loading states are not represented in the supplied material. Measurements are practical adaptation targets derived from visual inspection of desktop screenshots.
