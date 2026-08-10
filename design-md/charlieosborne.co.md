# How charlieosborne.co is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/charlieosborne.co-design)

Last updated: 2026-08-10

## Captured pages

[![Dark footer with large white 'CHARLIE OSBORNE' wordmark, vertical navigation links, and subtle grid lines on black background with orange gradient top edge](https://pin.fontofweb.com/1199?format=jpg)](https://design.withfudge.com/share/pin-1199)

[Dark footer with large white 'CHARLIE OSBORNE' wordmark, vertical navigation links, and subtle grid lines on black background with orange gradient top edge](https://design.withfudge.com/share/pin-1199)

[![Glossy rounded rectangular 'Book Discovery Call' button with orange text on warm cream surface against vibrant orange gradient background](https://pin.fontofweb.com/1198?format=jpg)](https://design.withfudge.com/share/pin-1198)

[Glossy rounded rectangular 'Book Discovery Call' button with orange text on warm cream surface against vibrant orange gradient background](https://design.withfudge.com/share/pin-1198)

[![Hero section with massive white 'Get in Touch' display type, horizontal navigation bar, and repeated 'LET'S CHAT' labels over fiery orange-red gradient](https://pin.fontofweb.com/1197?format=jpg)](https://design.withfudge.com/share/pin-1197)

[Hero section with massive white 'Get in Touch' display type, horizontal navigation bar, and repeated 'LET'S CHAT' labels over fiery orange-red gradient](https://design.withfudge.com/share/pin-1197)

[![Testimonials grid with portrait photographs, company logos, and italic serif quotation text on black background with thin vertical dividers](https://pin.fontofweb.com/1196?format=jpg)](https://design.withfudge.com/share/pin-1196)

[Testimonials grid with portrait photographs, company logos, and italic serif quotation text on black background with thin vertical dividers](https://design.withfudge.com/share/pin-1196)

## Overview

This design system captures the visual language of a bold, contemporary portfolio website for a brand and web designer. The system is built on extreme contrast: vast black canvases meet explosive orange gradients that shift from deep crimson through vibrant tangerine to warm peach. Typography dominates the spatial experience, with oversized sans-serif display text that pushes against viewport edges and creates immediate visual impact. The aesthetic balances editorial restraint with expressive warmth—clean grid structures and minimal navigation coexist with glossy, dimensional buttons and gradient fields that suggest energy and creative confidence. The overall impression is of a designer who values both precision and personality, using scale and color temperature to guide visitors from dramatic first impressions through to detailed project content.

## Colors

The color system operates in two distinct modes: a dark canvas mode built on absolute black with white typography, and a gradient mode that deploys a full warm spectrum from deep red through orange to cream. These modes alternate to create rhythm and focus across the page experience.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary page background, footer, testimonials section |
| canvas-inverted | #ffffff | Button surfaces, occasional light panels |
| action | #e85a17 | Primary accent, gradient mid-tones, button text on light surfaces |
| action-muted | #c44a10 | Deeper orange for gradient shadows and hover states |
| surface-gloss | #fff5eb | Warm cream button fill with subtle peach undertone |
| ink-primary | #ffffff | Primary text on dark backgrounds, hero display type |
| ink-secondary | #e8e8e8 | Subdued text, captions, secondary labels |
| ink-on-light | #b83d08 | Text on cream surfaces, button labels |
| border-subtle | #2a2a2a | Hairline dividers, grid lines on dark backgrounds |

The gradient mode transitions vertically from deep crimson-red at the top through saturated orange in the middle to warm peach and cream at the bottom. This creates an atmospheric, almost cinematic quality that serves as a dramatic backdrop for white display text. The dark mode relies entirely on the black/white contrast with the orange accent reserved for interactive elements and gradient transitions. No neutral gray scale is used—shadows and depth come from the gradient itself or from semi-transparent overlays on black.

## Typography

The type system pairs a clean, highly legible sans-serif for all display and interface text with an elegant serif for editorial quotations and longer-form content. This pairing creates hierarchy through contrast in genre rather than weight alone.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Inter | 8rem | 700 | 0.9 | -0.03em | Massive page titles, "Get in Touch" |
| section-display | Inter | 6rem | 700 | 0.95 | -0.02em | Section headers, button labels |
| wordmark | Inter | 4rem | 700 | 0.85 | -0.02em | Logo, footer brand mark |
| body-serif | Instrument Serif | 1.25rem | 400 | 1.5 | 0 | Testimonial quotations, editorial text |
| body-serif-italic | Instrument Serif-Italic | 1.25rem | 400 | 1.5 | 0 | Emphasis within quotations, pull quotes |
| body | Inter | 1rem | 400 | 1.6 | 0 | General content, descriptions |
| label | Inter | 0.75rem | 400 | 1.2 | 0.05em | Small caps, metadata, "LET'S CHAT" repeats |
| navigation | Inter | 0.75rem | 400 | 1 | 0.02em | Top nav, footer links, uppercase menu |

Inter serves as the structural typeface across all weights and sizes, from tiny navigation labels to the massive hero display. Its tight tracking at large sizes and open apertures at small sizes make it versatile for this high-contrast system. Instrument Serif appears in Regular weight for quotation content, while Instrument Serif-Italic provides emphasis within serif blocks, lending editorial credibility and visual warmth to testimonial sections.

Verify licensing for these families before production use. Instrument Serif and Instrument Serif-Italic are designed by Rodrigo Fuenzalida and distributed by Frag Type. Inter is designed by Rasmus Andersson and distributed by Rsms.

## Layout

The layout system is built on a rigid columnar grid that remains visible as subtle vertical hairlines across the full page height. This grid creates both structure and atmosphere—the lines read as design elements rather than mere guides, suggesting architectural drafting or editorial layout systems.

Page sections alternate between full-bleed gradient fields and contained black panels. The gradient sections typically span the full viewport height and width, with content positioned to interact dynamically with the color field. Dark sections use generous internal padding, often with content offset to create asymmetric balance.

The navigation bar spans the full width at the top of gradient sections, with links distributed evenly across the grid columns. Each link is uppercase, small, and spaced with wide tracking. In the footer, navigation reappears as a vertical stack centered in the grid, with the massive wordmark anchored to the left edge.

Spacing follows a base-4 system with the quarter-rem unit. Section padding is generous, typically 6rem or more, allowing display typography to breathe. Component gaps of 2rem separate related elements, while text blocks use 1.5rem for paragraph spacing. The grid itself appears to use six to eight columns based on the visible dividers, with content spanning multiple columns for emphasis.

## Visual language

The visual language is defined by three core tensions: scale versus restraint, warmth versus darkness, and gloss versus matte. These tensions create a dynamic experience that feels both confident and considered.

The gradient treatment is the system's most distinctive element. It is not a simple two-color fade but a complex atmospheric shift that suggests light sources, heat, and depth. The gradient reads as environmental—like a sunset or stage lighting—rather than decorative. White text placed against this field achieves maximum contrast while also feeling luminous, as if the letters are catching the gradient's glow.

Buttons and interactive surfaces introduce a glossy, almost liquid dimensionality. The primary button uses a cream surface with internal highlights and external colored shadows, creating a pill-like form that appears to float slightly above its background. This dimensional quality contrasts with the flat matte of the surrounding page, drawing focus to conversion actions.

Photography appears in testimonial contexts with clean white borders, treated as objects on the black canvas rather than integrated backgrounds. The portrait frames are modest in scale compared to the surrounding typography, creating a deliberate hierarchy where client words carry more visual weight than their images.

Thin vertical lines persist across all sections, unifying the experience and providing a subtle rhythm that prevents the large color fields from feeling empty. These lines are barely visible on dark backgrounds but become more apparent where they cross gradient transitions.

## Components

### Primary Button

The primary action button is a large, rounded rectangle with substantial horizontal padding and a glossy, dimensional surface.

- **Anatomy**: Rounded container with internal gradient highlight, external drop shadow in orange, and centered text label.
- **Surface**: Warm cream fill (#fff5eb) with subtle top-edge highlight suggesting light source from above.
- **Typography**: Section-display token at 6rem, Inter Bold, in deep orange (#b83d08).
- **Shape**: Generous border radius of 1.5rem creating a pill-like but not fully circular form.
- **Spacing**: Approximately 2rem vertical padding, 4rem horizontal padding, creating a wide, low button proportion.
- **Composition**: Centered within its container, often placed in the lower portion of gradient sections.
- **Shadow**: Multi-layered shadow with orange-tinted ambient shadow and tighter highlight inset.

### Navigation Bar

The top navigation appears as a minimal horizontal strip distributed across the full page width.

- **Anatomy**: Individual text links spaced across grid columns, no background container.
- **Surface**: Transparent, allowing gradient or black background to show through.
- **Typography**: Navigation token, uppercase, small size with wide tracking.
- **Composition**: Evenly distributed links with the leftmost position reserved for initials or logo mark.
- **Variants**: On dark sections, identical styling with white text; on gradient sections, white text with potential subtle shadow for legibility against mid-tone orange.

### Footer

The footer inverts the hero's drama with a black canvas and massive left-aligned wordmark.

- **Anatomy**: Large "CHARLIE OSBORNE" wordmark, centered vertical navigation stack, right-aligned contact email, bottom social links row.
- **Surface**: Pure black with subtle orange gradient bleed visible at the very top edge.
- **Typography**: Wordmark token at 4rem for the brand name; navigation token for links; label token for copyright and social handles.
- **Composition**: Asymmetric three-column layout with wordmark dominating left, navigation centered, email right-aligned. Social links span full width at bottom.
- **Grid**: Vertical hairlines continue through footer, reinforcing the structural grid.

### Testimonial Card

Client testimonials appear as composed arrangements of portrait, logo, and quotation text.

- **Anatomy**: Portrait photograph with white border, company logo beneath, italic quotation text below.
- **Surface**: Transparent on black background; no card container or shadow.
- **Typography**: Body-serif token for quotations in Instrument Serif Regular; body-serif-italic token for emphasized phrases within quotes; label token for names and titles.
- **Composition**: Asymmetric grid placement with cards at varying vertical positions; some left-aligned, some right-aligned, one centered below.
- **Photography**: Headshots with natural lighting, presented in vertical rectangles with clean white matte borders.

## Responsive behavior

The system is documented from desktop viewport widths. At narrower widths, the massive display typography should scale down proportionally to maintain legibility without excessive line breaks. The hero "Get in Touch" text, currently appearing as a single line, will require size reduction or line breaking on smaller screens.

The columnar grid with visible vertical lines may simplify to fewer columns on tablet and mobile, or the lines may be suppressed entirely below a certain breakpoint to reduce visual noise. The footer layout should stack vertically on narrow screens, with the wordmark, navigation, and contact information arranged in sequence rather than side by side.

The glossy primary button maintains its proportions but should receive reduced padding and font size on mobile to avoid overwhelming the viewport. Touch targets should remain at least 44px in height regardless of visual scaling.

Gradient sections should continue to fill the viewport, but the gradient angle may shift from vertical to a steeper diagonal on very wide screens to prevent banding and maintain visual interest.

## Practical implementation guidance

### Preserve
- The extreme scale contrast between display type and body text; this is central to the system's impact.
- The warm orange gradient as a full-bleed atmospheric element, not merely a decorative accent.
- The visible columnar grid lines as a persistent structural motif across all sections.
- The glossy, dimensional button treatment with its specific highlight and shadow layers.
- The strict black/white typographic contrast on dark sections without introducing grays.

### Avoid
- Adding background colors or containers around testimonial content; the current transparent-on-black treatment is intentional.
- Using the serif typeface for UI elements or navigation; reserve it for editorial quotation content only.
- Creating flat, single-color buttons that lose the dimensional quality of the primary action.
- Introducing additional accent colors beyond the orange spectrum; the system derives its energy from this restricted warm palette.
- Centering the footer wordmark; its left anchor is part of the asymmetric balance.

### Recommended Build Order
1. Establish the base grid system with visible vertical lines and black canvas.
2. Implement the gradient background as a full-bleed layer with the documented color stops.
3. Add Inter at all defined sizes, beginning with navigation and body before scaling to display.
4. Build the primary button component with its layered shadows and glossy surface.
5. Implement the footer layout with wordmark, navigation stack, and contact details.
6. Add Instrument Serif and Instrument Serif-Italic for testimonial content with proper quotation styling.
7. Fine-tune gradient behavior and responsive scaling across viewport widths.

### Accessibility
- Ensure white text on orange gradient meets WCAG contrast requirements; the lightest orange areas may require text shadow or slight darkening.
- The glossy button should maintain visible focus indicators beyond the default browser ring, potentially using an orange outline offset from the button shape.
- Navigation links in the minimal top bar should have adequate touch targets on mobile, potentially increasing hit area beyond visible text bounds.
- Testimonial images require alt text; the current layout with decorative borders should not interfere with screen reader traversal.

## Scope note

This guide covers the homepage and footer surfaces visible in the supplied images, including the hero gradient section, primary call-to-action button, testimonials grid, and footer layout. Interior pages, project case studies, mobile breakpoints, motion behavior, and form interactions are not represented in the available material. Measurements are practical adaptation targets derived from visual estimation against the documented relative unit scale.
