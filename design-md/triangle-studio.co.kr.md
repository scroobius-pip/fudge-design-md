# How triangle-studio.co.kr is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/triangle-studio.co.kr-design)

Last updated: 2026-08-10

## Captured pages

[![Open book spread with light blue pages showing Korean text and a QR code, set against a black background with the TRIANGLE-STUDIO header visible.](https://pin.fontofweb.com/10305?format=jpg)](https://design.withfudge.com/share/pin-10305)

[Open book spread with light blue pages showing Korean text and a QR code, set against a black background with the TRIANGLE-STUDIO header visible.](https://design.withfudge.com/share/pin-10305)

[![Vibrant green book spread featuring a group photograph and Korean text, contrasting sharply with the black surrounding canvas.](https://pin.fontofweb.com/10303?format=jpg)](https://design.withfudge.com/share/pin-10303)

[Vibrant green book spread featuring a group photograph and Korean text, contrasting sharply with the black surrounding canvas.](https://design.withfudge.com/share/pin-10303)

[![White book spread with art installation photographs and Korean body text, displaying the full TRIANGLE-STUDIO WORKS header navigation.](https://pin.fontofweb.com/10302?format=jpg)](https://design.withfudge.com/share/pin-10302)

[White book spread with art installation photographs and Korean body text, displaying the full TRIANGLE-STUDIO WORKS header navigation.](https://design.withfudge.com/share/pin-10302)

[![Dense Korean text spread with a small portrait photograph, showing the editorial typography and generous margins of the publication design.](https://pin.fontofweb.com/10304?format=jpg)](https://design.withfudge.com/share/pin-10304)

[Dense Korean text spread with a small portrait photograph, showing the editorial typography and generous margins of the publication design.](https://design.withfudge.com/share/pin-10304)

## Overview

TRIANGLE-STUDIO's website presents a stark, editorial portfolio system built around the contrast between a pristine white interface and immersive black project canvases. The design language speaks to a Korean graphic design studio specializing in publication and cultural work, where the website itself functions as a quiet frame for bold visual content. The interface strips away decorative elements in favor of typographic precision and generous spatial breathing room. Navigation sits as a thin horizontal band at the top, while project imagery dominates the viewport through full-bleed black backgrounds that isolate each book spread or printed piece. This creates a gallery-like experience where the viewer's attention moves between the functional white chrome and the richly detailed project photography. The system prioritizes the work itself, using restraint in the UI to amplify the impact of colorful, complex editorial spreads.

## Colors

The color system operates on a strict binary between interface and content zones, with a single accent reserved for interactive states.

| token | value | use |
|---|---|---|
| ink | #020202 | Primary text, navigation labels, logo mark |
| canvas | #FFFFFF | Page background, header surface, content margins |
| muted | #000000 | Secondary text states, image captions |
| accent-blue | #0000FF | Active navigation links, interactive highlights |
| surface-inverse | #000000 | Project photography backgrounds, full-bleed media canvases |

The interface maintains an almost absolute white background with near-black text at #020202, creating a softer reading experience than pure black while preserving strong contrast. Project imagery sits within #000000 black containers that extend edge-to-edge, creating dramatic isolation for colorful book spreads. The blue accent appears sparingly for active or hovered navigation states, providing the only chromatic relief in the otherwise monochrome chrome. Image palette colors drawn from publication photography—greens, blues, warm neutrals—remain strictly within content boundaries and do not bleed into interface tokens.

## Typography

The typographic system relies on a single sans-serif family with weight and tracking variations to establish hierarchy. Verify licensing for these families before production use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| body | Helvetica | 1rem | 500 | 1.4375 | 0em | Default body text, header elements, captions |
| navigation | Helvetica | 0.9375rem | 600 | 2 | 0.0667em | Primary navigation links, uppercase labels |
| label-small | Helvetica | 0.875rem | 500 | 1.4375 | 0em | Secondary labels, metadata, footer text |
| hero-display | Helvetica | 2rem | 500 | 1.4375 | 0em | Page titles, major section headings |
| section-display | Helvetica | 1.5rem | 500 | 1.4375 | 0em | Subsection headings, project titles |
| legal-copy | Helvetica | 0.75rem | 500 | 1.4375 | 0em | Copyright, fine print, attribution text |

Helvetica at 500 weight serves as the workhorse for all interface text, with a compact 23px line height that keeps navigation and labels tightly packed. Navigation links shift to 600 weight with 1px letter spacing, creating a distinct visual rhythm through tracking rather than size variation. The system avoids display sizes entirely—no hero typography competes with project imagery. Korean text in publication spreads uses Apple SD Gothic Neo at 16px as a system fallback, while Applesystem at 14px handles specialized UI contexts. The restrained scale means hierarchy emerges through spacing, weight shifts, and the generous white space surrounding text blocks rather than dramatic size contrasts.

## Layout

The layout follows a fixed-header, fluid-content model with precise margin constraints. The header occupies a full-width band with 30px horizontal padding, establishing consistent side gutters that align with the main content area. Below the header, project imagery breaks into full-bleed black sections that ignore these margins, creating rhythmic alternation between constrained chrome and immersive media.

Content sections carry 73.5px horizontal margins—approximately 4.6rem—creating substantial but not excessive breathing room around text and secondary content. The main content area begins with 120px of top padding, pushing project imagery well below the header to establish clear spatial separation. Images within project grids receive 18px bottom margins, creating subtle vertical rhythm without visible borders or dividers.

Navigation links distribute horizontally with 20px horizontal padding, maintaining even touch targets while keeping the label cluster visually tight. The header itself carries no vertical padding, allowing the 57px line height of navigation items to determine the band's full height. This produces a remarkably thin header that maximizes viewport for project content while remaining permanently accessible.

## Visual language

The visual language derives from editorial design practice translated to screen. Black backgrounds function not as decoration but as neutral exhibition walls, allowing colorful publication spreads to read as objects in space. The white margins surrounding these black fields recall the unprinted paper of a well-designed book, reinforcing the studio's print expertise.

Photography of books and printed matter appears at slight angles, suggesting physical presence and hand-held inspection rather than flat digital reproduction. This subtle perspective creates depth against the absolute flatness of the black canvas. The studio's triangular mark appears as a minimal geometric icon in the header, reduced to its essential form without wordmark accompaniment in certain states.

Color in project imagery ranges widely—cool blues, vivid greens, warm neutrals—yet the interface never attempts to sample or harmonize with these hues. This disciplined separation between chrome and content allows each project to maintain its own color identity without destabilizing the overall system. The result feels like a curated exhibition space rather than a conventional website.

## Components

### Site Header

- **Anatomy**: Fixed horizontal band containing the triangular logo mark left-aligned, navigation links right-aligned, with a search icon at the far right edge.
- **Surface**: Pure white background (#FFFFFF) with no border, shadow, or divider.
- **Typography**: Navigation links use the navigation token—Helvetica 600 at 15px with 1px letter spacing.
- **Spacing**: 30px horizontal padding; navigation items carry 20px horizontal padding creating 40px gaps between labels.
- **Shape**: 0rem border radius; all corners remain sharp.
- **Composition**: Single-row flex layout with space-between alignment; logo and navigation cluster at opposite edges.
- **States**: Active or hovered navigation links shift to accent-blue (#0000FF).

### Project Canvas

- **Anatomy**: Full-bleed container holding project photography against a black background.
- **Surface**: #000000 background extending to viewport edges, breaking the white content margins.
- **Spacing**: 120px top padding separates the canvas from the header; 18px bottom margin on images creates vertical rhythm between multiple spreads.
- **Shape**: 0rem border radius; images sit flush without rounding.
- **Composition**: Images centered within the black field, typically showing at 60-80% of canvas width to maintain surrounding negative space.
- **Variants**: Single spreads, paired spreads, and detail crops appear in sequence.

### Navigation Link

- **Anatomy**: Text label with no underline, icon, or background shape.
- **Typography**: Helvetica 600, 15px, 1px letter spacing, 57px line height.
- **Color**: Default ink (#020202); active state accent-blue (#0000FF).
- **Spacing**: 20px horizontal padding; no vertical padding, allowing line height to determine touch target.
- **Shape**: 0rem border radius; no pill or rounded treatment.
- **Composition**: Inline horizontal list with equal spacing between items.

### Content Image

- **Anatomy**: Photographic reproduction of printed work, typically book spreads at slight angles.
- **Spacing**: 18px bottom margin creates gap between stacked images.
- **Surface**: No border, radius, or shadow; image sits directly on black or white background.
- **Shape**: 0rem border radius; sharp corners preserve the editorial aesthetic.
- **Composition**: Centered within parent container; aspect ratio preserved from source photography.

## Responsive behavior

The fixed 73.5px horizontal margins suggest a desktop-first approach that will require adaptation for narrower viewports. At tablet widths, these margins should compress to maintain readable line lengths without excessive white space. The navigation cluster, currently distributed as a horizontal list, may need consolidation into a menu trigger or abbreviated label set on mobile devices.

Project canvases with their full-bleed black backgrounds translate naturally to mobile—the black field simply extends to new viewport edges. However, the angled photography of book spreads may require slight rotation correction or larger relative sizing to maintain legibility of Korean text at reduced scales. The 120px top padding on content sections should reduce proportionally on shorter viewports to prevent excessive scrolling before content appears.

Touch targets for navigation links at 57px line height meet minimum accessibility standards but offer no additional padding; mobile implementations should expand these to at least 44px vertical space with maintained horizontal padding.

## Practical implementation guidance

### Preserve
- The stark black/white binary between project canvases and interface chrome.
- Helvetica as the sole interface typeface with weight 500 as default and 600 for navigation.
- Generous negative space around project imagery—never crowd the black fields.
- The slight angular perspective in project photography rather than flattening to straight-on reproductions.
- 1px letter spacing on navigation as a distinctive brand rhythm.
- Sharp 0rem corners throughout all UI surfaces and images.

### Avoid
- Adding background colors, borders, or shadows to the header that would break its flatness.
- Introducing additional typefaces for display or decorative purposes.
- Sampling colors from project imagery for UI accents beyond the established blue.
- Reducing the black canvas to partial-width containers or card treatments.
- Underlining navigation links or adding other decorative affordances.
- Applying border radius to images or containers; the square edge is integral to the editorial character.

### Recommended Build Order
1. Establish the black/white color foundation with CSS custom properties.
2. Implement the fixed header with logo mark and navigation cluster.
3. Build the project canvas container with full-bleed black background and centered imagery.
4. Apply precise spacing tokens: 30px header padding, 73.5px content margins, 120px section tops.
5. Refine typography with exact Helvetica weights, sizes, and tracking values.
6. Add interactive states with the blue accent for navigation.

### Accessibility
- Ensure the near-black ink (#020202) on white maintains WCAG AA contrast; the slight softening from pure black aids readability without failing standards.
- Provide alternative text for all project photography describing the publication spread content.
- Consider focus indicators for navigation links that complement or exceed the color shift to blue.
- The 57px navigation line height provides adequate touch targets on desktop but should expand for mobile implementations.

## Scope note

This guide covers the homepage and project index surfaces visible in the supplied imagery, focusing on the portfolio presentation of book and publication design work. Interior project pages, mobile breakpoints, contact forms, and motion behaviors are not represented in the available material. Measurements derive directly from the retained interface values.
