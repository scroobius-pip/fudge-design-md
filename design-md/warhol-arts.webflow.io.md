# How warhol-arts.webflow.io is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/warhol-arts.webflow.io-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with large black 'WARHOL' display type on vivid orange-red background, scattered painted dollar signs, and social links in left margin](https://pin.fontofweb.com/1267?format=jpg)](https://design.withfudge.com/share/pin-1267)

[Hero section with large black 'WARHOL' display type on vivid orange-red background, scattered painted dollar signs, and social links in left margin](https://design.withfudge.com/share/pin-1267)

[![Horizontal gallery of event tickets with animal photography, orange-red accents, and 'The Velvet Room' branding on black background](https://pin.fontofweb.com/1266?format=jpg)](https://design.withfudge.com/share/pin-1266)

[Horizontal gallery of event tickets with animal photography, orange-red accents, and 'The Velvet Room' branding on black background](https://design.withfudge.com/share/pin-1266)

[![Dark section with stacked 'UNLOCK EXPERIENCE' display typography, orange-red script 'the' overlay, keyword cloud, and 'BAG IT' buttons](https://pin.fontofweb.com/1265?format=jpg)](https://design.withfudge.com/share/pin-1265)

[Dark section with stacked 'UNLOCK EXPERIENCE' display typography, orange-red script 'the' overlay, keyword cloud, and 'BAG IT' buttons](https://design.withfudge.com/share/pin-1265)

[![Keyword cloud with staggered alignment showing art-related terms in light and muted tones on black background](https://pin.fontofweb.com/1264?format=jpg)](https://design.withfudge.com/share/pin-1264)

[Keyword cloud with staggered alignment showing art-related terms in light and muted tones on black background](https://design.withfudge.com/share/pin-1264)

## Overview

Warhol Arts presents a deliberately confrontational visual system that channels pop-art energy into a contemporary exhibition platform. The design operates on extreme contrast: vast fields of absolute black meet a single saturated orange-red accent, while oversized condensed display typography dominates the viewport. The aesthetic borrows from gallery signage, event ticketing, and the graphic legacy of Andy Warhol's own work—particularly the repeated dollar-sign motif and bold commercial typography.

The system is built around two type families that serve distinct roles. Mango Grotesque delivers compressed, high-impact display headlines with tight leading and negative tracking, creating the architectural presence of exhibition titles. Tomato Grotesk handles everything else—body copy, labels, navigation, and the occasional script-like accent—with clean, contemporary neutrality. This pairing creates a hierarchy where display type feels monumental and everything else recedes into functional clarity.

Color usage is disciplined to the point of austerity. Black dominates every surface. The orange-red appears only as an accent for calls-to-action, decorative script overlays, and ticket design elements. A warm off-white serves as the primary text color, with a muted warm gray for secondary information. The result is a system that feels simultaneously aggressive and refined—appropriate for an art platform that wants to command attention without visual clutter.

## Colors

| token | value | use |
|---|---|---|
| action | #FF4D2E | Primary buttons, script accents, ticket highlights, decorative marks |
| ink | #F5E6D8 | Primary text on dark backgrounds, ticket backgrounds, light surfaces |
| muted-ink | #8C7A6B | Secondary text, keyword cloud inactive terms, date information |
| canvas | #000000 | Page background, primary dark surfaces, button text on action |
| surface | #1A1A1A | Elevated dark panels, subtle differentiation from pure black |
| border | #333333 | Hairline dividers, grid marks, subtle structural lines |

The color model is essentially bimodal: a dark mode that dominates the experience, with light surfaces appearing only in specific components like tickets. The action orange-red (#FF4D2E) is the system's emotional core—vivid, warm, and slightly aggressive. It appears in the hero background of one section, as the fill for script typography overlays, and as accent bars on event tickets. This restraint makes the color more impactful when it does appear.

The warm off-white (#F5E6D8) avoids the clinical chill of pure white, harmonizing with the orange-red and suggesting aged paper or gallery walls. The muted warm gray (#8C7A6B) handles de-emphasized content like the keyword cloud's secondary terms and date metadata. Pure black serves as the canvas for nearly everything, with near-black (#1A1A1A) reserved for subtle elevation when needed.

No gradients or shadows are visible in the interface. Color transitions are hard and decisive, reinforcing the graphic, poster-like quality of the design.

## Typography

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Mango Grotesque | 8rem | 700 | 0.85 | -0.02em | Primary headlines, exhibition titles, hero statements |
| section-display | Mango Grotesque | 6rem | 700 | 0.9 | -0.01em | Secondary headlines, section introductions |
| script-accent | Tomato Grotesk | 3rem | 400 | 1.2 | 0 | Decorative script overlays, emphasis words |
| body | Tomato Grotesk | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, ticket details |
| label | Tomato Grotesk | 0.75rem | 400 | 1.2 | 0.05em | Buttons, captions, metadata |
| navigation | Tomato Grotesk | 0.875rem | 400 | 1.2 | 0.02em | Menu items, keyword tags, links |

Mango Grotesque appears only in Bold weight, used for all display typography. Its extreme compression and tight apertures create the system's most distinctive characteristic: headlines that feel like physical objects occupying space. The negative tracking pulls letterforms together, creating dense blocks of texture that read as shapes before they read as words.

Tomato Grotesk, designed by Andrea Biggio and available from The Designers Foundry, handles the system's functional typography. It appears in Regular weight throughout, with size and spacing variations creating hierarchy rather than weight changes. The typeface's clean, slightly geometric character provides necessary contrast to Mango Grotesque's expressive density.

The script-accent treatment uses Tomato Grotesk at a larger size with a flowing, connected style that overlays display headlines—visible in the "the" that weaves through "UNLOCK EXPERIENCE." This creates a moment of organic interruption within rigid structure.

Verify licensing for these families before production use. Mango Grotesque's source indicates direct hosting without vendor attribution; confirm appropriate licensing for commercial deployment.

## Layout

The layout system embraces asymmetry and deliberate imbalance. Content does not center by default; instead, elements anchor to edges or distribute across the viewport with calculated irregularity. The keyword cloud demonstrates this most clearly: terms stagger across the left portion of the frame with varying indentation, creating a ragged, organic silhouette against the black ground.

Section spacing follows a dramatic rhythm. Major sections separate with substantial vertical gaps—approximately 6rem—allowing each composition to breathe in isolation. Within sections, elements sit with confident proximity: the hero's social links hug the left edge with minimal margin, while the main headline occupies the right two-thirds of the viewport.

The ticket gallery in Image 2 shows a horizontal scroll or marquee arrangement, with tickets overlapping and rotating slightly, suggesting continuous motion. This breaks from conventional grid alignment, instead creating a sense of abundance and ephemerality—like scattered ephemera across a table.

Grid lines appear as subtle structural elements. Image 3 shows faint coordinate marks and crosshairs in the right portion of the frame, suggesting an underlying measurement system that remains mostly invisible. These appear in the muted ink color at very low opacity, providing spatial orientation without visual weight.

Responsive behavior should maintain the asymmetric character. On narrower viewports, the keyword cloud's staggered indentation can compress to fewer indentation levels, and display type should scale down proportionally while preserving the tight leading that defines its character. The horizontal ticket gallery would benefit from touch-friendly scroll behavior with momentum.

## Visual language

The visual language draws directly from exhibition design and pop-art graphics. Dollar signs—painted, repeated, and varied in color—serve as the system's signature motif, appearing as decorative scatter across the hero section. These are not uniform icons but distinct artistic renderings, each with unique texture and coloration, suggesting hand-made originals rather than digital reproduction.

The ticket components reinforce the event and gallery context. Each ticket features animal photography (zebra, panda, elephant), event typography, and the orange-red accent bars that function as both decorative element and structural divider. The tickets include barcode-like patterns and perforated-edge details, evoking physical ephemera even in digital form.

Typography itself becomes image. The "WARHOL" headline in the hero spans nearly the full viewport width, its black letterforms creating negative space that the orange-red ground pushes through. The "UNLOCK EXPERIENCE" treatment stacks words with extreme tightness, while the script "the" cuts diagonally across, introducing movement and tension.

Crosshair and coordinate markings suggest precision and measurement, contrasting with the organic scatter of dollar signs and the hand-painted quality of accent elements. This tension between systematic structure and expressive chaos defines the system's character.

No border radii appear in the interface. Corners are sharp throughout—buttons, tickets, panels—reinforcing the graphic, cut-paper quality. The only softening comes from the occasional script letterform or painted element.

## Components

### Primary Button

- **Anatomy**: Rectangular button with sharp corners, containing centered uppercase label text
- **Surface**: Solid action orange-red (#FF4D2E) background with canvas (#000000) text
- **Typography**: label token, uppercase, letter-spaced
- **Shape**: Zero border radius, precise rectangle
- **Spacing**: Generous horizontal padding (approximately 3rem) with moderate vertical padding (approximately 1rem)
- **Composition**: Appears in vertical stacks with minimal gap between instances; the "BAG IT" example shows two buttons stacked with slight overlap or tight adjacency
- **Variants**: Standard state as described; no visible hover or disabled states in supplied images

### Keyword Cloud

- **Anatomy**: Collection of text terms arranged in staggered vertical list, left-aligned with varying indentation
- **Surface**: Transparent background, text only
- **Typography**: navigation token for most terms; some terms appear in muted-ink color at same size
- **Shape**: No containing shape; pure typographic composition
- **Spacing**: Tight vertical spacing between terms (approximately 0.5rem), with horizontal indentation creating rhythm
- **Composition**: Terms group semantically (ART, EXHIBIT, COLLECTION, POP as one cluster; EXPRESSION, INNOVATION, ICON, MASTERPIECE, PAINT, PRINT, ABSTRACT, BOLD as another)
- **Variants**: Active terms in full ink color; secondary terms in muted-ink

### Event Ticket

- **Anatomy**: Horizontal rectangular card with left image panel, center information area, and right accent bar with barcode pattern
- **Surface**: Light ink (#F5E6D8) background with black text; action orange-red (#FF4D2E) vertical accent bars
- **Typography**: Mixed hierarchy—display-style event name in script or bold, body token for details, label token for metadata
- **Shape**: Sharp corners, precise rectangle with perforated-edge detail suggestion
- **Spacing**: Internal padding creating clear separation between image, text, and accent zones
- **Composition**: Multiple tickets arranged in overlapping, slightly rotated horizontal sequence; some tickets tilted to suggest casual scatter
- **Variants**: Different animal photography per ticket; event names vary (Stud., Group, Pers., Herit., Devket)

### Social Links

- **Anatomy**: Vertical stack of text links with plus-icon markers
- **Surface**: Transparent background
- **Typography**: label token, uppercase
- **Shape**: No containing shape
- **Spacing**: Minimal vertical gap between items; plus markers sit to the left of text
- **Composition**: Fixed to left viewport edge with modest margin
- **Variants**: Standard and hover states not visible in supplied images

### Script Accent Overlay

- **Anatomy**: Flowing script text positioned to intersect or overlay display headlines
- **Surface**: Transparent background, action orange-red (#FF4D2E) text color
- **Typography**: script-accent token, connected letterforms
- **Shape**: Organic, following letterform contours
- **Spacing**: Positioned to create tension with underlying display type
- **Composition**: Diagonal or curved baseline crossing through rectilinear headline
- **Variants**: Single visible instance ("the" in "UNLOCK THE EXPERIENCE")

## Responsive behavior

The design's asymmetric character requires careful translation to narrower viewports. The extreme display type should scale down proportionally, maintaining the tight leading that prevents headlines from feeling loose or generic. At viewport widths below 768px, the keyword cloud's staggered indentation should reduce to two or three levels rather than the full range visible in desktop compositions.

The horizontal ticket gallery presents a clear responsive challenge. On touch devices, horizontal swipe with momentum scrolling should replace any desktop hover or drag behavior. Ticket size may reduce to show fewer items simultaneously, or the overlapping composition may simplify to a single-column vertical stack with full-width cards.

The hero section's split composition—social links left, main headline right—should stack vertically on narrow viewports, with social links moving below the headline or condensing to a horizontal row. The scattered dollar-sign decoration should remain visible but may reduce in count to prevent overwhelming smaller screens.

Navigation, visible only as social links in the supplied images, would benefit from a conventional collapsible pattern on mobile, though the system's bold character suggests an equally dramatic full-screen overlay rather than a discreet hamburger menu.

## Practical implementation guidance

### Preserve
- The extreme contrast between black grounds and single accent color
- Tight, negative-tracked display typography with Mango Grotesque
- Sharp corners throughout—no border radii on any component
- Asymmetric, edge-hugging compositions rather than centered content
- The hand-made quality of decorative elements (painted dollar signs, script overlays)
- Warm off-white text color rather than pure white for primary ink

### Avoid
- Centered layouts that contradict the system's deliberate imbalance
- Multiple accent colors competing with the orange-red
- Rounded buttons or cards that soften the graphic edge
- Generic shadow systems—use flat color blocks instead
- Body text in the display typeface; reserve Mango Grotesque for headlines only
- Pure white (#FFFFFF) where the warm off-white (#F5E6D8) maintains color harmony

### Recommended Build Order
1. Establish the black canvas and single accent color as foundational tokens
2. Implement Mango Grotesque for hero and section display sizes with tight leading
3. Build the keyword cloud component with staggered indentation logic
4. Create the sharp-cornered button with stacked arrangement pattern
5. Develop ticket card with image-text-barcode structure and horizontal scroll behavior
6. Add decorative elements (dollar signs, crosshairs, script overlays) as final layer

### Accessibility
- The extreme contrast between ink (#F5E6D8) and canvas (#000000) exceeds WCAG AAA standards for normal text
- Action orange-red on black should be verified for large text compliance; the vivid hue may require testing for users with color vision differences
- Display type at extreme sizes should not be used for critical information alone; ensure body copy in Tomato Grotesk conveys essential content
- Horizontal scrolling ticket galleries require keyboard accessibility and visible focus indicators
- The keyword cloud's staggered layout should maintain logical DOM order for screen reader users, with visual presentation controlled via CSS rather than source order

## Scope note

This guide covers the homepage and landing experience visible in the supplied images. Interior pages, mobile-specific layouts, form states, loading conditions, and motion behavior are not represented. The ticket gallery's horizontal scroll mechanics and any hover transitions require additional specification. Measurements are practical adaptation targets.
