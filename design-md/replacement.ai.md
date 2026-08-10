# How replacement.ai is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/replacement.ai-design)

Last updated: 2026-08-10

## Captured pages

[![Footer section with deep crimson background, large white display headline reading 'Get ready for replacement.', and horizontal navigation with logo and email contact link.](https://pin.fontofweb.com/3777?format=jpg)](https://design.withfudge.com/share/pin-3777)

[Footer section with deep crimson background, large white display headline reading 'Get ready for replacement.', and horizontal navigation with logo and email contact link.](https://design.withfudge.com/share/pin-3777)

[![Two-column feature section with wireframe 3D face render on dark plum background and white content area with 'Stay in Touch' label, bold headline, body copy, and outlined button](https://pin.fontofweb.com/3776?format=jpg)](https://design.withfudge.com/share/pin-3776)

[Two-column feature section with wireframe 3D face render on dark plum background and white content area with 'Stay in Touch' label, bold headline, body copy, and outlined button](https://design.withfudge.com/share/pin-3776)

[![Artists appreciation section with soft gray left panel containing headline and 'Redeem Your Reward' button, paired with gradient pink-to-cyan right panel featuring robot painter](https://pin.fontofweb.com/3775?format=jpg)](https://design.withfudge.com/share/pin-3775)

[Artists appreciation section with soft gray left panel containing headline and 'Redeem Your Reward' button, paired with gradient pink-to-cyan right panel featuring robot painter](https://design.withfudge.com/share/pin-3775)

[![HUMBERT product feature section with glitch-art portrait on left and feature list with icon-titled items including Parenting, Deepfakes, Addictive, Romance, and Dumber on white](https://pin.fontofweb.com/3774?format=jpg)](https://design.withfudge.com/share/pin-3774)

[HUMBERT product feature section with glitch-art portrait on left and feature list with icon-titled items including Parenting, Deepfakes, Addictive, Romance, and Dumber on white](https://design.withfudge.com/share/pin-3774)

## Overview

Replacement.AI presents itself as a deliberately confrontational product landing page for an AI company. The visual system operates through dramatic tonal shifts: saturated crimson declarations give way to clinical white feature sections, creating a rhythm of provocation and explanation. The design relies on a single type family—Fustat—across all weights and sizes, letting scale and spacing carry the hierarchy rather than weight variation. Generative and illustrative imagery serves as the emotional counterweight to the stark typography, with wireframe renders, glitch portraits, and hand-drawn robot illustrations establishing an aesthetic that hovers between technical sophistication and satirical unease. The overall impression is of a company confident enough in its transgressive positioning to let the visuals speak without decorative excess.

## Colors

The color system is intentionally restrained, using high-contrast moments against expansive neutral fields. The crimson serves as the brand's signature voice—unmissable and declarative—while the remaining palette stays quiet to let imagery and typography dominate.

| token | value | use |
|---|---|---|
| crimson | #C70039 | Hero footer background, brand statements, high-attention surfaces |
| ink | #1A1A1A | Primary headings, body text on light backgrounds, icon strokes |
| muted-ink | #666666 | Secondary body copy, feature descriptions, supporting text |
| canvas | #FFFFFF | Primary content backgrounds, text on dark surfaces, card fills |
| surface-warm | #F5F5F5 | Subtle section alternation, soft panel backgrounds |
| plum-deep | #4A2C4A | Dark image panel backgrounds for generative artwork |
| border-light | #E5E5E5 | Button borders, dividers, subtle containment lines |

The crimson appears exclusively as a full-bleed background for the most direct brand statements, never as an accent or partial fill. Dark imagery panels use the plum-deep to create depth without competing with the artwork. Text hierarchy is established through ink versus muted-ink rather than through opacity or secondary colors. The system contains no gradients in UI surfaces—gradients appear only within photographic and illustrative content.

## Typography

The typographic system uses Fustat exclusively, a contemporary sans-serif with open apertures and geometric construction that reads cleanly at display sizes while maintaining warmth in body text. The family is served as a single Regular weight; hierarchy is achieved through scale and spacing rather than weight variation.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Fustat | 4rem | 400 | 1.1 | -0.02em | Footer brand statements, maximum impact headlines |
| section-display | Fustat | 2.5rem | 400 | 1.2 | -0.01em | Feature section headlines, product introductions |
| body-large | Fustat | 1.25rem | 400 | 1.5 | 0em | Lead paragraphs, introductory copy |
| body | Fustat | 1rem | 400 | 1.6 | 0em | Standard paragraphs, feature descriptions |
| label | Fustat | 0.875rem | 400 | 1.4 | 0em | Section labels, button text, metadata |
| navigation | Fustat | 0.875rem | 400 | 1 | 0em | Header and footer navigation links |

Display sizes use tight negative tracking to create visual density and authority. Body sizes maintain neutral tracking for readability. The single weight across all roles creates a cohesive, almost monolithic voice that suits the site's confrontational tone. Verify licensing for this family before production use.

## Layout

The page structure alternates between full-bleed statement sections and contained two-column feature layouts. The footer hero occupies the full viewport width with generous internal padding, while content sections use a split composition with imagery on one side and text on the other.

The two-column feature sections divide roughly evenly, with imagery panels receiving rounded corners that soften their edges against the white page background. Text columns maintain consistent left alignment with a clear hierarchy: a small label in muted ink, followed by a large headline, then body copy, and finally a call-to-action button. The vertical rhythm within text columns is spacious, with comfortable gaps between label, headline, and body that prevent crowding.

Spacing follows a modular system based on a 0.25rem unit. Section vertical padding uses 6rem to create breathing room between major content blocks. Component internal padding uses 1.5rem for cards and buttons. Content gaps within columns use 2rem to separate typographic elements. The overall density is open and editorial, with generous whitespace that lets the provocative content land without visual noise.

## Visual language

The imagery strategy pairs technical and hand-crafted aesthetics to create productive friction. Generative outputs—wireframe 3D meshes, glitch-corrupted portraits—appear in dark, contained panels with rounded corners, treated as artifacts rather than illustrations. These sit alongside deliberately naive line drawings, such as the robot painter, which introduce humor and self-awareness.

The rounded corner treatment is consistent across all image containers and cards, creating a softening effect that contrasts with the sharp typographic voice. No shadows are used for elevation; depth is created through color contrast and scale rather than dimensional effects.

Iconography in feature lists uses simple outlined strokes, each paired with a bold title and muted description. The icons are small, contained, and functional—never decorative. The overall visual language balances the slickness of AI-product marketing with intentional roughness, suggesting a company aware of its own implications.

## Components

### Footer Hero

- **Anatomy**: Full-bleed background container, large display headline, horizontal navigation bar with logo and links, email contact, copyright line, thin horizontal rule
- **Surface and text color**: Crimson background with white text
- **Typography**: Hero-display for the headline, navigation for links, label for copyright
- **Shape**: No border radius; full edge-to-edge coverage
- **Spacing**: Generous vertical padding above and below the headline; navigation sits below with comfortable separation
- **Composition**: Headline left-aligned, navigation spread across full width with logo left, links center-left, email right, rule spanning full width, copyright left-aligned below

### Feature Section (Two-Column)

- **Anatomy**: Two equal columns—image panel left, text content right (or reversed)
- **Surface and text color**: White background, ink headlines, muted-ink body, optional warm surface for subtle panel differentiation
- **Typography**: Label for section identifier, section-display for headline, body-large for lead, body for description
- **Shape**: Image panel receives 1rem border radius; text column has no container
- **Spacing**: 6rem vertical section padding, 2rem gaps between text elements, 1.5rem internal image padding if contained
- **Composition**: Image and text vertically centered within their respective columns; text left-aligned with consistent margin

### Outlined Button

- **Anatomy**: Text label with optional icon, contained within a bordered rectangle
- **Surface and text color**: Transparent background, ink text, light border
- **Typography**: Label token
- **Shape**: 0.5rem border radius, 1px solid border
- **Spacing**: Horizontal padding approximately 1rem, vertical padding approximately 0.75rem
- **Variants**: Icon-right variant with arrow or X symbol; icon-left variant with message or action symbol

### Icon Feature Item

- **Anatomy**: Small outlined icon, bold title, muted description text
- **Surface and text color**: Transparent background, ink title, muted-ink description
- **Typography**: Body for title (visually bold through color density), body for description
- **Shape**: Icon in simple rounded square or circle container with light border
- **Spacing**: Icon and text arranged horizontally with 1rem gap; items stacked vertically with 2rem separation
- **Composition**: Icon left, text block right; title above description within text block

### Gradient Panel

- **Anatomy**: Full-height image container with soft color gradient background
- **Surface**: Smooth pink-to-cyan gradient with subtle grain texture
- **Shape**: 1rem border radius on container
- **Composition**: Centered white card with illustration, creating layered depth against gradient

## Responsive behavior

The two-column feature sections should stack vertically on narrower viewports, with the image panel becoming full-width above the text content. The footer hero headline should reduce in scale to maintain comfortable line lengths. Navigation links may collapse to a compact menu or horizontal scroll on small screens. The icon feature list should remain vertically stacked with consistent horizontal alignment rather than converting to a grid. Image panels should maintain their aspect ratio rather than cropping, with rounded corners preserved at all sizes.

## Practical implementation guidance

### Preserve
- The stark single-weight typographic voice; do not introduce additional weights or families
- The full-bleed crimson footer as the brand's signature moment
- The rounded corners on all image and illustration containers
- The generous section spacing that creates editorial breathing room
- The contrast between technical generative imagery and hand-drawn illustration

### Avoid
- Adding drop shadows or dimensional effects; the system is flat
- Using crimson as a text color or partial accent; it functions only as a field
- Introducing additional colors beyond the restrained palette
- Crowding the label-headline-body hierarchy with extra elements
- Treating the outlined buttons as filled actions; they are secondary by design

### Recommended build order
1. Establish the type scale with Fustat at all sizes
2. Implement the footer hero with crimson background and white display text
3. Build the two-column feature section as the reusable content pattern
4. Add the outlined button component with icon variants
5. Create the icon feature list for product detail sections
6. Implement image panel containers with consistent rounding

### Accessibility
- Ensure crimson background meets contrast requirements with white text; the saturation may affect perception for some users
- Provide visible focus states for all interactive elements, using ink or canvas outlines against their respective backgrounds
- Maintain readable line lengths in body text; the two-column layout helps naturally
- Consider reduced-motion preferences for any scroll or reveal animations
- Icon feature items should have sufficient touch targets if made interactive

## Scope note

This guide covers the landing page surface visible in the supplied images, including the footer hero, feature sections, product detail lists, and contact patterns. It does not include interior pages, form validation states, mobile navigation behavior, or motion design. Measurements are practical adaptation targets derived from visual inspection. The single Fustat weight and absence of retained spacing records mean all dimensional values should be verified against implementation needs.
