# How zendaya.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/zendaya.com-design)

Last updated: 2026-08-10

## Captured pages

[![Email signup form with rounded input field and dark submit button on warm beige background with footer copyright bar](https://pin.fontofweb.com/3208?format=jpg)](https://design.withfudge.com/share/pin-3208)

[Email signup form with rounded input field and dark submit button on warm beige background with footer copyright bar](https://design.withfudge.com/share/pin-3208)

[![Massive condensed display typography spelling ZENDAYA with navigation and three-column biography text below](https://pin.fontofweb.com/3207?format=jpg)](https://design.withfudge.com/share/pin-3207)

[Massive condensed display typography spelling ZENDAYA with navigation and three-column biography text below](https://design.withfudge.com/share/pin-3207)

[![Press page with large condensed heading and full-width editorial photograph with rounded corners against coral background](https://pin.fontofweb.com/3206?format=jpg)](https://design.withfudge.com/share/pin-3206)

[Press page with large condensed heading and full-width editorial photograph with rounded corners against coral background](https://design.withfudge.com/share/pin-3206)

[![Film and television credits list with bold uppercase titles separated by thin horizontal rules on beige background](https://pin.fontofweb.com/3205?format=jpg)](https://design.withfudge.com/share/pin-3205)

[Film and television credits list with bold uppercase titles separated by thin horizontal rules on beige background](https://design.withfudge.com/share/pin-3205)

## Overview

This design system captures the visual language of a personal brand website built around dramatic typographic scale and editorial restraint. The interface is dominated by an enormous condensed display typeface that fills the viewport, creating an immediate, poster-like impact. The overall mood is confident and minimal: warm neutral backgrounds provide a gallery-like setting for high-contrast black typography and full-bleed photography. Navigation is sparse and utilitarian, appearing as uppercase labels in a wide sans serif. Content sections alternate between typographic statements—film credits, biographical text—and large photographic moments. The system prioritizes hierarchy through size contrast rather than color complexity, using a restrained palette of warm beige, near-black, and occasional coral accents from photography. Every element feels intentionally scaled, from the hero name that bleeds edge-to-edge to the small, precise body copy that anchors the bottom of pages.

## Colors

The color system is intentionally minimal, relying on warm neutrals and near-black for maximum contrast with occasional photographic color.

| token | value | use |
|---|---|---|
| ink | #1a1a1a | Primary text, display type, borders, button backgrounds, horizontal rules |
| canvas | #e8e0d4 | Primary page background, main content areas, hero sections |
| surface-warm | #d4c8b8 | Footer bar, secondary surfaces, email signup section background |
| accent-coral | #e06b5a | Editorial photography backgrounds, image-driven accent moments |

The near-black ink serves as the sole dark value, appearing in massive display type, navigation, body text, button fills, and hairline borders. The warm beige canvas creates a consistent, gallery-like atmosphere across all pages. A slightly deeper warm tone, surface-warm, distinguishes the footer and form sections from the main canvas without introducing a new hue. The coral accent appears primarily within photographic content rather than as an interface element, providing warmth and visual energy when images are present. The system avoids pure white and pure black, with the dark value reading as a very deep charcoal that softens slightly against the warm ground.

## Typography

The type system is built on extreme contrast: a single condensed display family dominates at massive sizes, while a neutral sans handles all functional text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Druk Condensed-Super | 12rem | 400 | 0.85 | -0.02em | Full-name hero, page-dominating display |
| section-display | Druk Condensed-Super | 6rem | 400 | 0.9 | -0.01em | Page section headings like "PRESS", "FILM&TV" |
| navigation | Druk Wide | 1rem | 500 | 1.2 | 0.05em | Top navigation labels, uppercase |
| body | Inter Face | 1rem | 400 | 1.6 | 0 | Biographical paragraphs, descriptions |
| body-bold | Interface | 1rem | 700 | 1.6 | 0 | Credit list items, emphasized inline text |
| label | Klarheit Grotesk | 0.875rem | 600 | 1.4 | 0.02em | Form labels, button text, small functional text |

Druk Condensed-Super, designed by Berton Hasebe and available from Commercial Type, provides the system's signature voice at display sizes. Its extremely narrow proportions allow words like "ZENDAYA" and "PRESS" to scale to viewport-filling dimensions without breaking lines. Druk Wide, also by Berton Hasebe from Commercial Type Inc, handles navigation at a much smaller size with a wider, more legible proportion. Inter Face and Interface (Bold) serve as the neutral workhorses for body content. Klarheit Grotesk, designed by Futur Neue Alex Dujet from Extraset Type Foundry, appears at small sizes for labels and button text. Verify licensing for these families before production use.

## Layout

The layout system is fundamentally editorial and asymmetric, built around full-bleed typographic moments and generous negative space.

Pages use a single full-width column for hero display type, with the massive letterforms acting as both content and graphic element. Below the hero, content shifts to asymmetric multi-column arrangements: biographical text flows in three equal columns with comfortable gutters, while film credits stack as a single full-width list with horizontal separators.

The navigation bar spans the full width and distributes four items—HOME, FILM&TV, PRESS, ABOUT—across the top edge with space-between alignment. The active page receives a filled dot indicator preceding its label, creating a minimal state system without color change.

Photography receives prominent placement with rounded-corner containers that inset slightly from the page edges, creating a framed, print-like presentation against the warm background. Images sit below section headings with substantial vertical breathing room.

Vertical rhythm is established through section spacing of 4rem between major content blocks, with the hero display type sitting flush or nearly flush to the top navigation. The footer compresses to a single horizontal band with copyright information split between left and right edges.

Page gutters are consistent at 1.5rem on all sides, providing enough breathing room for the massive type without feeling distant from the viewport edges.

## Visual language

The visual language draws from high-fashion editorial and contemporary gallery design. The dominant impression is one of confident restraint: enormous type treated as image, photography treated as art object, and minimal interface chrome.

Rounded corners appear on all photographic containers, softening the rectangular frame and suggesting a printed poster or magazine spread. The radius is substantial enough to read as intentional rather than decorative. No sharp-cornered images appear in the visible system.

Horizontal rules function as the primary structural element for lists, separating film and television credits with hairline strokes that span the full width. These rules are consistent in weight and create a rhythmic, almost musical pacing down the page.

The dot indicator in navigation is the sole decorative element in the header—a small filled circle that replaces or precedes the active label, avoiding underlines, color shifts, or background changes.

Typography is almost exclusively uppercase for display and navigation, with body copy in sentence case for readability. The contrast between the shouting display and whispering body creates a clear information hierarchy without size alone.

Photography is presented at large scale with minimal captioning, allowing the image to dominate the viewing experience. The warm neutral background ensures that colorful photography—particularly coral and gold tones—reads with maximum saturation and impact.

## Components

### Navigation Bar

- **Anatomy**: Four text links distributed horizontally across the top edge with space-between alignment.
- **Surface and text color**: Transparent background over canvas; ink text.
- **Typography**: navigation token, uppercase, with wide tracking.
- **Shape**: No visible container, border, or background shape.
- **Spacing**: Sits at the top of the viewport with page-gutter padding on both sides.
- **Composition**: Items read left-to-right as HOME, FILM&TV, PRESS, ABOUT.
- **States**: Active page shows a filled circular dot preceding the label.

### Hero Display

- **Anatomy**: Single line of massive text, typically a name or page identifier.
- **Surface and text color**: Transparent background; ink text.
- **Typography**: hero-display token, uppercase, extremely tight leading.
- **Shape**: Text bleeds to or near viewport edges with minimal side padding.
- **Spacing**: Sits immediately below navigation with minimal top margin.
- **Composition**: Centered or slightly offset, filling horizontal space through sheer scale.

### Section Heading

- **Anatomy**: Single word or short phrase in condensed display type.
- **Surface and text color**: Transparent background; ink text.
- **Typography**: section-display token, uppercase.
- **Spacing**: Positioned above content with section spacing below.
- **Composition**: Left-aligned, sitting above photographic or list content.

### Editorial Image

- **Anatomy**: Full-width or near-full-width photograph with rounded container.
- **Surface**: Transparent background; image fills rounded frame.
- **Shape**: Rounded corners at image radius.
- **Spacing**: Inset from page edges by page-gutter; substantial margin below heading.
- **Composition**: Image dominates the viewport section, often featuring bold color fields that contrast with the neutral page background.

### Credit List

- **Anatomy**: Stacked rows of uppercase titles with dot bullets and horizontal rules.
- **Surface and text color**: Transparent background; ink text.
- **Typography**: body-bold token, uppercase.
- **Shape**: Full-width horizontal rules separate each item.
- **Spacing**: Tight vertical packing with rules providing rhythm.
- **Composition**: Left-aligned bullet, title text, full-width rule below each entry.

### Email Signup Form

- **Anatomy**: Label text, single-line input, and submit button in horizontal arrangement.
- **Surface**: Input has transparent background with ink border; button has ink background with canvas text.
- **Typography**: body token for label and input placeholder; label token for button text, uppercase.
- **Shape**: Input and button both use full pill radius.
- **Spacing**: Input receives generous horizontal padding; button sits adjacent with small gap.
- **Composition**: Label above, input and button side by side below, spanning most of the width.

### Footer Bar

- **Anatomy**: Full-width band with copyright text split across left and right edges.
- **Surface**: surface-warm background; ink text.
- **Typography**: body token at standard size.
- **Shape**: No border or radius; flat rectangular band.
- **Spacing**: Comfortable vertical padding, page-gutter horizontal padding.

## Responsive behavior

The design's extreme typographic scale suggests specific responsive considerations. The hero display type that fills a desktop viewport will require dramatic reduction on smaller screens to maintain legibility and avoid broken layouts. A reduction to approximately 4rem on mobile would preserve the condensed character while fitting within narrow viewports.

The three-column biographical text should collapse to a single column on mobile, maintaining readable line lengths. The navigation's four-item spread may need to compress to a hamburger menu or stacked arrangement on very small screens, though the uppercase wide labels could potentially remain visible with reduced spacing.

The email signup form's side-by-side input and button should stack vertically on mobile, with the button filling the width below the input. The editorial images with rounded corners should maintain their corner radius proportionally while filling the reduced viewport width.

Film and television credits, currently a single full-width list, may remain structurally unchanged across breakpoints though text size should reduce slightly to prevent overflow of longer titles.

## Practical implementation guidance

### Preserve
- The extreme scale contrast between display and body type; this is the system's defining characteristic.
- The warm beige background as the default canvas; pure white would destroy the editorial warmth.
- Full uppercase treatment for all display and navigation text.
- The filled dot as the sole navigation active state indicator.
- Generous rounded corners on all photographic containers.
- Hairline horizontal rules as list separators rather than background bands or cards.

### Avoid
- Adding background colors or borders to the navigation bar; it must remain transparent and minimal.
- Using the condensed display type at small sizes; it becomes illegible and loses impact.
- Introducing additional accent colors beyond the coral that appears in photography.
- Centering the massive hero type; left or slightly offset alignment creates the correct editorial tension.
- Adding shadows, gradients, or dimensional effects; the system is flat and print-like.

### Recommended Build Order
1. Establish the warm neutral backgrounds and ink text color globally.
2. Implement the navigation bar with space-between distribution and dot indicator state.
3. Build the hero display component with viewport-filling condensed type.
4. Create the body text styles and three-column layout for biographical content.
5. Add the credit list with horizontal rules and dot bullets.
6. Implement the editorial image container with substantial rounded corners.
7. Build the email signup form with pill-shaped input and button.
8. Add the footer bar with split copyright layout.

### Accessibility
- The extreme contrast between ink and canvas meets WCAG AA standards for text.
- The massive display type provides inherent readability for low-vision users, but should still use semantic heading hierarchy.
- Navigation active state relies solely on the dot indicator; ensure this is communicated to screen readers through aria-current or similar.
- Form inputs need visible focus states; consider adding an outline offset that respects the pill shape.
- The warm background and dark text combination is comfortable for extended reading; maintain this pairing for all body content.

## Scope note

This guide covers the landing page, about page, press page, and film and television credits page as visible in the supplied images. Mobile layouts, hover states, focus styles, loading behavior, animation, and additional interior pages are not represented. Measurements are practical adaptation targets. Verify licensing for all type families before production use.
