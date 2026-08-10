# How closdessens.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/closdessens.com-design)

Last updated: 2026-08-10

## Captured pages

[![Full-screen navigation overlay with centered serif menu items and Michelin star icons on dark warm-gray background](https://pin.fontofweb.com/676?format=jpg)](https://design.withfudge.com/share/pin-676)

[Full-screen navigation overlay with centered serif menu items and Michelin star icons on dark warm-gray background](https://design.withfudge.com/share/pin-676)

[![Split-layout hero section with large orange textured panel displaying LE CORTIL and garden photography](https://pin.fontofweb.com/675?format=jpg)](https://design.withfudge.com/share/pin-675)

[Split-layout hero section with large orange textured panel displaying LE CORTIL and garden photography](https://design.withfudge.com/share/pin-675)

[![Split-layout hero section with deep green textured panel displaying RÊVER and LE JARDIN with garden photography](https://pin.fontofweb.com/674?format=jpg)](https://design.withfudge.com/share/pin-674)

[Split-layout hero section with deep green textured panel displaying RÊVER and LE JARDIN with garden photography](https://design.withfudge.com/share/pin-674)

[![Split-layout hero section with dark slate textured panel displaying LA TABLE with restaurant interior photography and Michelin stars](https://pin.fontofweb.com/673?format=jpg)](https://design.withfudge.com/share/pin-673)

[Split-layout hero section with dark slate textured panel displaying LA TABLE with restaurant interior photography and Michelin stars](https://design.withfudge.com/share/pin-673)

## Overview

The Clos des Sens website presents a luxury hospitality experience for a three-Michelin-star restaurant and Relais & Châteaux hotel in Annecy, France. The visual system is built around dramatic split-screen compositions where large typographic panels occupy the left half of the viewport and immersive photography fills the right. Each section of the site receives its own distinct color identity—ochre for the courtyard, forest green for the garden, slate blue for the dining room—creating a navigable emotional landscape that mirrors the property's sensory philosophy.

The design relies on contrast between monumental serif letterforms and intimate natural photography. Textured backgrounds give the color fields a tactile, paper-like quality that elevates the digital experience toward the materiality of fine dining. The overall impression is restrained, confident, and deeply atmospheric: every element serves the narrative of place and palate.

## Colors

The color system alternates between deep, textured grounds and luminous text, with each major section receiving a signature hue. The interface maintains a disciplined palette of five core colors plus black and white.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text, logo wordmark, side-action backgrounds |
| canvas | #FFFFFF | Primary text on dark panels, photography overlays |
| ochre | #C47A1A | Le Cortil section panel, warm accent ground |
| forest | #2D4A1E | Le Jardin section panel, garden-themed ground |
| slate | #3D4A5A | La Table section panel, dining room ground |
| warm-gray | #4A4540 | Navigation overlay background |

The ochre, forest, and slate colors function as section identifiers, each applied as a textured full-bleed panel behind oversized display typography. These grounds are not flat digital colors but carry a visible grain or noise texture that suggests handmade paper or stone surfaces. The warm-gray navigation overlay provides a neutral, sophisticated ground for the centered menu system.

White text appears on all colored and dark grounds, maintaining consistent readability across the emotional range of section identities. Black appears only for the functional elements: the small logo lockup in the corner and the vertical side-action labels for reservation and information.

## Typography

Two font families create the typographic hierarchy: a custom serif display face for all expressive headings and navigation, and a clean sans-serif for functional labels and body text.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Clos Des Sens | 6rem | 400 | 0.9 | 0.02em | Primary section titles spanning half the viewport |
| section-display | Clos Des Sens | 4rem | 400 | 0.95 | 0.01em | Secondary headings, stacked typographic compositions |
| body | Gotham | 1rem | 400 | 1.6 | 0 | Paragraphs, descriptions, general reading |
| label | Gotham | 0.75rem | 300 | 1.4 | 0.08em | Vertical action labels, small functional text |
| navigation | Clos Des Sens | 1.5rem | 400 | 1.2 | 0.04em | Full-screen overlay menu items |

The Clos Des Sens typeface is a high-contrast serif with elegant, slightly flared terminals and generous proportions. It performs at extreme sizes with remarkable clarity, its thin strokes remaining crisp against textured backgrounds. The face carries the brand's personality: classical, French, and quietly luxurious. At smaller sizes in the navigation overlay, it maintains readability through slightly tighter tracking and reduced scale.

Gotham, designed by Hoefler Co, provides the utilitarian counterpoint. Its geometric clarity and extensive weight range support the functional layer of the interface. The Light weight (300) appears in the vertical side labels, creating an ethereal, almost disappearing quality that keeps focus on photography and display typography.

Verify licensing for these families before production use. The Clos Des Sens custom face requires direct source verification; Gotham is available from Hoefler Co.

## Layout

The page architecture is fundamentally split-screen: a fixed 50/50 division between typographic panel and photographic panel. This composition remains consistent across section transitions, creating a recognizable spatial rhythm that orients visitors while allowing each section to develop its own atmosphere.

The left panel serves as a canvas for oversized, often stacked typography. Titles frequently break across multiple lines with extreme scale variation—some words at hero-display size, others at section-display or larger, creating a typographic landscape that rewards slow reading. The right panel presents full-bleed photography with no borders or frames, the imagery extending to the viewport edge.

Vertical side actions occupy a narrow strip along the right edge of the viewport, rendered as rotated text labels reading bottom-to-top. These provide persistent access to reservation and information functions without competing with the primary content. The logo lockup appears in the bottom right corner, small and unobtrusive, with "CLOS DES" in the serif face and "SENS" in bold sans-serif contrast.

The navigation overlay replaces the split-screen entirely with a full-bleed warm-gray panel. Menu items center vertically and horizontally, each accompanied by relevant accreditation icons—Michelin stars for the restaurant, Relais & Châteaux insignia for the hotel—positioned above or beside the text.

## Visual language

The visual system is defined by three core qualities: texture, scale, and restraint.

Texture appears throughout as a consistent grain or noise applied to solid color panels. This treatment prevents digital flatness and connects the interface to the material world of the restaurant—linen, stone, handmade paper. The texture is subtle, visible on close inspection but not distracting at normal viewing distance.

Scale operates dramatically in the typographic layer. Individual letters approach the height of a human hand at typical monitor distances. This monumentality transforms reading into an architectural experience, slowing the eye and demanding attention. Words stack with minimal leading, sometimes overlapping the panel boundary into the photographic space.

Restraint governs the functional layer. Navigation, actions, and branding remain small, quiet, and positioned at the periphery. The vertical side labels are particularly disciplined: rotated 90 degrees, set in light weight, nearly blending into dark photography. This hierarchy ensures that expressive content dominates while utility remains accessible.

Photography follows a consistent treatment: natural light, shallow depth of field, and a palette that harmonizes with the adjacent color panel. Garden images emphasize greens and soft earth tones; dining images feature warm wood, white linen, and dappled daylight.

## Components

### Hero Panel

The hero panel is the primary content container, occupying the left 50% of the viewport on desktop.

- **Anatomy**: A single full-height panel containing stacked display typography, occasionally with accreditation icons or decorative marks.
- **Surface and text color**: Background varies by section (ochre, forest, slate); text is always white.
- **Typography**: Uses hero-display for primary words, section-display for secondary words. Words may appear at multiple scales within a single panel.
- **Shape and border**: Square corners with 0rem radius; panel extends to viewport edges. No visible border.
- **Spacing**: Generous internal padding, approximately 4rem from panel edges. Text blocks separated by substantial vertical space, often 2-4rem between words or phrases.
- **Composition**: Text typically left-aligned within the panel, though centered alignment appears in the navigation overlay. Baselines align to create a stable left edge even when scale varies dramatically.
- **Variants**: Color variants correspond to site sections—ochre for Le Cortil, forest for Le Jardin, slate for La Table.

### Side Action

The side action provides persistent functional access along the right viewport edge.

- **Anatomy**: A narrow vertical strip containing rotated text labels. Two visible instances: "RÉSERVER" and "INFOS".
- **Surface and text color**: Background is black or transparent over photography; text is white.
- **Typography**: Uses label token—Gotham Light at 0.75rem with positive tracking.
- **Shape and border**: Square corners with 0rem radius; no visible border. The strip is defined by text rotation and position rather than containing box.
- **Spacing**: Labels positioned with ample vertical separation, reading from bottom to top.
- **Composition**: Fixed to viewport edge, overlaying photography. The rotation creates a distinctive visual rhythm against the horizontal primary content.

### Navigation Overlay

The navigation overlay replaces the entire viewport when active.

- **Anatomy**: Full-screen panel with centered vertical list of menu items. Close control in upper right corner. Some items carry accreditation icons—Michelin stars appear above "RESTAURANT" and "L'HÔTEL".
- **Surface and text color**: Warm-gray background with white text.
- **Typography**: Uses navigation token—Clos Des Sens at 1.5rem with moderate tracking.
- **Shape and border**: Square corners with 0rem radius; full-bleed coverage. No visible border.
- **Spacing**: Generous vertical spacing between items, approximately 2-3rem. Items center horizontally.
- **Composition**: Single column, vertically centered. Icons sit directly above associated text, creating a clear relationship between accreditation and destination.

### Logo Lockup

The logo appears as a small persistent mark in the bottom right corner.

- **Anatomy**: Two-part wordmark with "CLOS DES" in serif and "SENS" in bold sans-serif.
- **Surface and text color**: White text, appearing over photography or dark panels.
- **Typography**: Mixed family treatment—Clos Des Sens for "CLOS DES", Gotham Bold for "SENS".
- **Shape and border**: No containing shape; text only with square corners.
- **Spacing**: Small margin from viewport edges, approximately 1rem.
- **Composition**: Positioned to anchor the corner without competing with primary content.

## Responsive behavior

The split-screen composition suggests a clear adaptation path for narrower viewports. The 50/50 division should stack vertically, with the typographic panel preceding the photographic panel. The extreme display typography will require reduction—hero-display scaling to section-display or smaller—to maintain readability without excessive line breaks.

The vertical side actions present a particular challenge on mobile. These rotated labels should convert to horizontal buttons or integrate into a bottom bar, preserving their functional role while eliminating the spatial demands of rotation.

The navigation overlay is already well-suited to mobile: its centered, vertically stacked format requires only touch-appropriate sizing for the close control and menu items.

Textured backgrounds should maintain their grain quality across densities; the noise pattern may need adjustment to prevent moiré or banding on high-resolution mobile displays.

## Practical implementation guidance

### Preserve
- The split-screen composition as the defining spatial rhythm
- Textured color panels with visible grain or noise
- Extreme typographic scale for section titles
- The two-family typographic hierarchy: expressive serif, functional sans-serif
- Section-specific color identities (ochre, forest, slate)
- Vertical side actions for persistent reservation and information access
- Small, corner-positioned logo lockup with mixed family treatment
- Square corners throughout; no border radius on any element

### Avoid
- Flat, untextured color fills that lose the material quality
- Additional colors beyond the established section palette
- Borders, shadows, or other decorative elements that compete with photography
- Centered text alignment in hero panels (reserve for navigation overlay only)
- Generic button styling for side actions—the rotated label treatment is distinctive
- Any border radius that would soften the architectural precision of the layout

### Recommended build order
1. Establish the split-screen grid and viewport-filling panels
2. Implement the textured background treatment across all section colors
3. Set up the typographic scale with Clos Des Sens at display sizes
4. Add Gotham for functional labels and body text
5. Build the navigation overlay with centered menu and accreditation icons
6. Implement vertical side actions with rotation and positioning
7. Add the logo lockup with correct family mixing
8. Refine responsive stacking for narrow viewports

### Accessibility
- Ensure sufficient color contrast between white text and all textured backgrounds; the texture should not reduce effective contrast below WCAG AA thresholds
- Provide visible focus indicators for the close control and menu items in the navigation overlay
- Consider reduced-motion preferences for any section transitions or parallax effects
- The vertical side actions should maintain readable text size when rotated; test with screen readers to ensure proper announcement of action labels

## Scope note

This guide covers the homepage and primary section hero compositions visible in the supplied images. Interior pages, booking flows, menu presentations, and mobile-specific layouts are not represented. Measurements are practical adaptation targets. The full interaction behavior of the navigation overlay, section transitions, and any scroll-driven animations would require additional research to document completely.
