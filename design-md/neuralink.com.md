# How neuralink.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/neuralink.com-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with full-bleed lifestyle photography, white headline over dark image, and pill-shaped white button with arrow icon](https://pin.fontofweb.com/7923?format=jpg)](https://design.withfudge.com/share/pin-7923)

[Hero section with full-bleed lifestyle photography, white headline over dark image, and pill-shaped white button with arrow icon](https://design.withfudge.com/share/pin-7923)

[![Light cream background with large centered heading and two portrait cards featuring double-exposure photography with gradient overlays and outlined pill buttons](https://pin.fontofweb.com/7922?format=jpg)](https://design.withfudge.com/share/pin-7922)

[Light cream background with large centered heading and two portrait cards featuring double-exposure photography with gradient overlays and outlined pill buttons](https://design.withfudge.com/share/pin-7922)

[![Testimonial carousel with rounded video thumbnail, large quote typography, circular navigation arrows, and horizontal progress indicators](https://pin.fontofweb.com/7921?format=jpg)](https://design.withfudge.com/share/pin-7921)

[Testimonial carousel with rounded video thumbnail, large quote typography, circular navigation arrows, and horizontal progress indicators](https://design.withfudge.com/share/pin-7921)

## Overview

Neuralink's design system is built on dramatic tonal contrast: immersive dark sections with full-bleed photography alternate with warm, light surfaces that feel like uncoated paper. The visual language is restrained and editorial, letting large-scale imagery and tight typography carry the narrative. The system uses two type families in a clear hierarchy—Untitled Sans for commanding display settings and Klim Type Foundry's text face for everything else. Interactive elements are consistently pill-shaped, creating a soft, approachable counterpoint to the precision of the typography. The overall impression is of advanced technology presented through human warmth, with design decisions that prioritize clarity, breath, and emotional resonance over decorative complexity.

## Colors

The palette is intentionally minimal, built on a strict binary of deep black and pure white with strategic inversion between dark and light sections.

| token | value | use |
|---|---|---|
| ink | #000000 | Primary text on light surfaces, dark section backgrounds, button borders |
| canvas | #FFFFFF | Pure white for text on dark imagery, filled pill buttons, light section backgrounds |
| surface-dark | #000000 | Hero and immersive section backgrounds |
| surface-light | #FFFFFF | Editorial content sections, testimonial areas |
| text-primary | #000000 | Body text, headings on light surfaces |
| text-inverse | #FFFFFF | Headings and labels over photography |
| border-inverse | #FFFFFF | Outlined buttons on dark imagery |
| border-primary | #000000 | Circular navigation buttons, dividers |

Dark sections use pure black backgrounds with white text, allowing photography to dominate while maintaining legibility through image selection rather than overlays. Light sections shift to pure white, creating a clean material change that signals editorial or human-centered content. The starkness prevents sterility by letting photography and texture provide warmth. Buttons invert between filled white on dark and outlined transparent on light, maintaining the pill shape as a consistent interactive signature.

## Typography

The type system pairs a geometric sans-serif for display with a refined text face for reading, both from Kris Sowersby's foundry. The supplied font families are Untitled Sans, Klim Type Foundry, and Klim Type Foundry-Not Licensed For Desktop Use.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Untitled Sans | 4rem | 300 | 1 | -0.06em | Large section headings on light backgrounds |
| section-display | Untitled Sans | 3rem | 500 | 1 | -0.06em | Hero headlines over imagery, testimonial quotes |
| body-large | Klim Type Foundry | 1.375rem | 400 | 1.2 | normal | Introductory paragraphs, card labels |
| body | Klim Type Foundry | 1rem | 400 | 1.5 | normal | Navigation, body copy, button labels |
| body-small | Klim Type Foundry | 0.875rem | 400 | 1.2 | normal | Metadata, captions, fine print |
| label | Klim Type Foundry | 1rem | 400 | 1.5 | -0.03em | Pill button text with slight tightening |
| navigation | Klim Type Foundry | 1rem | 400 | 1.5 | normal | Top navigation links |

Untitled Sans appears in Light weight for the largest headings, creating an elegant, open presence that doesn't compete with imagery. The Medium weight provides slightly more authority for section-level display. Both use aggressive negative tracking that gives headlines a crafted, intentional density. Klim Type Foundry's text face handles all functional typography with calm regularity; its slightly narrower proportions and even color support extended reading without distraction. The 1rem body size with 1.5 line height is a comfortable standard, while the 1.375rem body-large steps up for moments requiring more presence.

Verify licensing for these families before production use. Untitled Sans and the Klim Type Foundry text face are designed by Kris Sowersby.

## Layout

The page alternates between full-bleed immersive sections and contained editorial zones. Dark hero sections extend edge-to-edge with photography as the dominant layer, text positioned in the lower-left quadrant with generous negative space surrounding it. Navigation sits as a minimal top bar, transparent over imagery with white links and a single outlined pill for the primary call-to-action.

Light sections use a white background with centered or left-aligned content blocks. The "Pioneers Wanted" section demonstrates a two-column card layout with substantial gap between portrait cards, each card itself a contained immersive experience with internal text positioned at the bottom. Section headings are centered and set in the large display size, creating clear rhythmic breaks between content types.

Spacing follows a modular system based on a 2px unit. Section padding uses 4.75rem vertical spacing to create breathing room between major content blocks. Component-level spacing of 3.5rem separates elements within sections. Tight spacing of 0.75rem handles internal groupings like button padding or label-to-content relationships. Cards use 1.25rem corner radius, while buttons extend to 5rem radius for full pill shaping.

The testimonial section shows a contained layout with centered heading, full-width media, and asymmetric text placement—quote left, navigation right. Progress indicators sit below as a horizontal row of lines, suggesting carousel state without decorative complexity.

## Visual language

Photography is central to the system's expression. Hero imagery shows real-world technology use in lived-in environments, avoiding sterile clinical settings. The "Pioneers Wanted" cards use double-exposure technique, blending human portraits with landscape photography and gradient color washes—teal and amber tones on the left, rose and sage on the right. These treatments create emotional depth and metaphorical resonance without literal illustration.

The white surface in light sections has a subtle texture suggesting uncoated stock or fine paper, adding tactile quality to the digital experience. This material choice supports the human-centered narrative, contrasting with the sleek darkness of technology-focused sections.

Iconography is minimal and functional: a small arrow on buttons, simple chevrons in circular navigation controls. The arrow on pill buttons sits inline with text, slightly smaller, indicating external or forward action without visual heaviness.

The overall aesthetic balances technological credibility with approachable humanity. Precision in typography and spacing signals engineering excellence; warmth in imagery, color, and rounded interactive shapes prevents coldness.

## Components

### Hero section

Anatomy: Full-bleed background image, top navigation overlay, bottom-left headline and pill button. The navigation includes a wordmark, text links, and a single outlined pill button.

Surface and text color: Background is photographic with dark tones; text is white. The navigation wordmark and links are white; the "Clinical Trials" button is transparent with white border and text.

Typography: Headline uses section-display token at 3rem, white, with tight tracking. Button uses label token.

Shape and border: No border on the section. Button is fully pill-shaped at 5rem radius with 1px solid white border.

Spacing: Navigation has horizontal padding. Headline and button sit in the lower-left with substantial margin from edges, approximately 3.5rem from bottom.

Composition: Asymmetric, with visual weight concentrated in the lower left, leaving the upper right open for navigation and image breathing room.

Variants: The hero shows a filled white pill button variant for the primary action, contrasting with the outlined navigation button.

### Portrait card

Anatomy: Rounded rectangle containing full-bleed image with gradient overlay, bottom-left text label, and outlined pill button.

Surface and text color: Image-based background with semi-transparent gradient ensuring text legibility. Text and button borders are white.

Typography: Card label uses body-large at 1.375rem, white. Button uses label token, white.

Shape and border: 1.25rem corner radius on the card. Button is fully pill-shaped with 1px solid white border.

Spacing: Internal padding positions text and button at the bottom with comfortable margin from card edges. Cards in a row have substantial gap between them.

Composition: Vertical portrait orientation, text anchored to lower left, button below label.

### Pill button

Anatomy: Text with optional inline arrow icon, contained in a rounded rectangle.

Surface and text color: Two variants: filled white with black text for dark backgrounds; transparent with white text and border for dark backgrounds; transparent with black text and border would apply for light backgrounds.

Typography: label token at 1rem with -0.03em tracking.

Shape and border: 5rem radius creating full pill. 1px solid border on outlined variant. Padding approximately 1.125rem vertical, 2rem horizontal.

Spacing: Generous internal padding creates approachable target size.

### Testimonial carousel

Anatomy: Section heading, rounded video thumbnail, large quote text, attribution name, metadata line with bullet separator, circular navigation arrows, horizontal progress indicators.

Surface and text color: White background. All text is black. Circular buttons are transparent with 1px black border.

Typography: Heading uses hero-display at 4rem, centered. Quote uses section-display at 3rem, left-aligned. Attribution uses body-large at 1.375rem. Metadata uses body-small at 0.875rem.

Shape and border: Video thumbnail has 1.25rem radius. Navigation buttons are perfect circles at 50% radius with 1px solid black border. Progress indicators are horizontal lines of varying weight.

Spacing: Section heading has bottom margin. Video thumbnail spans most of container width. Quote and attribution stack left, navigation buttons float right at same vertical level. Metadata sits below with bullet separator. Progress lines span full width below with small gaps.

Composition: Asymmetric two-column feel despite single container—text left, controls right. Progress indicators provide grounded closure.

### Navigation

Anatomy: Wordmark left, text links center-right, outlined pill button far right.

Surface and text color: Transparent over imagery. White text throughout.

Typography: navigation token for links, label token for button.

Shape and border: Button has 1px solid white border, 5rem radius.

Spacing: Horizontal padding with comfortable link spacing.

## Responsive behavior

The design relies on large imagery and generous spacing that will require careful adaptation at smaller viewports. The two-column portrait card layout should stack vertically, maintaining card proportions. Hero headline may need reduction from 3rem to preserve line breaks and avoid collision with imagery. Navigation links may collapse to a menu affordance. The testimonial carousel's asymmetric layout should reflow to stacked order: video, quote, attribution, then centered navigation controls. Pill buttons should maintain touch-friendly sizing with adequate padding. Progress indicators may reduce in count or simplify to dots. The tight tracking on display type may require slight loosening at small sizes to maintain legibility.

## Practical implementation guidance

### Preserve
- The stark contrast between immersive dark sections and light editorial zones—this tonal rhythm defines the experience.
- Pill-shaped buttons as the sole interactive shape language; do not introduce sharp-cornered buttons elsewhere.
- The aggressive negative tracking on Untitled Sans display sizes; it creates distinctive density.
- Double-exposure or gradient-washed photography treatments for human-centered content cards.
- The pure white surface for light sections; it provides clean contrast to dark imagery.

### Avoid
- Adding color to the interface palette beyond black and white; the photography provides all necessary color.
- Sharp corners on any interactive element; the pill radius is a system signature.
- Heavy shadows or dimensional effects; the design is flat and photographic.
- Centering body text; the system uses left alignment for reading content.
- Decorative icons beyond the minimal arrow and chevron set.

### Recommended build order
1. Establish the type system with both families loaded, verifying weights render correctly.
2. Implement the dark hero section with full-bleed image, navigation overlay, and pill button.
3. Build the light section surface and section-display heading treatment.
4. Create the portrait card component with gradient overlay and outlined pill button.
5. Implement the testimonial carousel with circular navigation and progress indicators.
6. Fine-tune spacing rhythm across section transitions.

### Accessibility
- Ensure white text over imagery meets contrast requirements; the dark-toned photography helps, but verify with actual content.
- The tight tracking on display type may reduce readability for some users; consider slightly looser tracking at smaller sizes or providing user preference.
- Pill buttons need visible focus states; consider inverting to filled on focus or adding an offset ring.
- Carousel navigation should support keyboard operation and announce slide changes.
- Video content in testimonials needs captions and transcript availability.

## Scope note

This guide covers the homepage surface including hero, recruitment, and testimonial sections. Footer, interior pages, mobile navigation patterns, and motion behaviors are not represented in the supplied material. The spacing and radius values derive from the documented interface measurements.
