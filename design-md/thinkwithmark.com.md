# How thinkwithmark.com is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/thinkwithmark.com-design)

Last updated: 2026-08-10

## Captured pages

[![About page with dark canvas, centered editorial portrait, and Copernicus body text in warm off-white](https://pin.fontofweb.com/9358?format=jpg)](https://design.withfudge.com/share/pin-9358)

[About page with dark canvas, centered editorial portrait, and Copernicus body text in warm off-white](https://design.withfudge.com/share/pin-9358)

[![FAQ accordion section with cream background, Copernicus display heading, and circular toggle icons](https://pin.fontofweb.com/9357?format=jpg)](https://design.withfudge.com/share/pin-9357)

[FAQ accordion section with cream background, Copernicus display heading, and circular toggle icons](https://design.withfudge.com/share/pin-9357)

[![Preorder page keynote video section with rounded media frame and specification grid in warm neutrals](https://pin.fontofweb.com/9356?format=jpg)](https://design.withfudge.com/share/pin-9356)

[Preorder page keynote video section with rounded media frame and specification grid in warm neutrals](https://design.withfudge.com/share/pin-9356)

[![Preorder page hero with product imagery, gradient pricing cards, and pill-shaped CTA buttons](https://pin.fontofweb.com/9355?format=jpg)](https://design.withfudge.com/share/pin-9355)

[Preorder page hero with product imagery, gradient pricing cards, and pill-shaped CTA buttons](https://design.withfudge.com/share/pin-9355)

## Overview

Think with Mark is a product-experience website for a physical-digital reading tool. The design system balances two distinct modes: a dark, cinematic presentation for emotional storytelling and hero moments, and a warm, cream-colored environment for detailed product information, specifications, and purchasing. This dual-mode approach mirrors the product itself—a bridge between analog reading and digital organization.

The visual language is intentionally restrained. Color is used sparingly, with warmth coming from off-white and cream tones rather than saturated accents. Typography carries the emotional weight: a refined serif display face (Copernicus) provides editorial authority for headlines and pull quotes, while a clean geometric sans (Geist) handles functional labels, pricing, and interactive elements. Inter serves as the neutral workhorse for body copy and navigation. The result is a system that feels premium without being flashy, trustworthy without being clinical.

## Colors

The palette is built around a near-black ink and a warm cream canvas, with muted earth tones for secondary information.

| token | value | use |
|---|---|---|
| ink | #0D1B1E | Primary text on light backgrounds, dark section backgrounds |
| ink-deep | #0B1215 | Deepest dark sections, hero overlays, primary button fill |
| ink-muted | #292D2D | Secondary dark surfaces, gradient stops |
| canvas | #FFFCF5 | Primary light background, main content areas |
| canvas-warm | #F7F2E8 | Warm content sections, FAQ backgrounds |
| surface | #F2EFE8 | Elevated cards, specification panels |
| surface-elevated | #EFE5D1 | Warm accent surfaces, pricing highlights |
| accent-warm | #9B9286 | Muted labels, secondary metadata |
| text-primary | #0D1B1E | Body text, headings on light backgrounds |
| text-secondary | #635E58 | Captions, specifications, disabled states |
| text-inverse | #FFFFFF | Text on dark backgrounds |
| border-subtle | #635E58 | Hairline borders, form outlines |
| border-inverse | #0D1B1E | Borders on light surfaces |

The dark mode is not a functional toggle but a sectional choice. Hero and emotional storytelling sections use ink-deep backgrounds with text-inverse, while product detail, FAQ, and preorder flows use canvas or canvas-warm with text-primary. Gradients appear on specific interactive elements—pricing cards use a subtle linear gradient from ink-muted through ink-deep to create depth without departing from the monochrome palette.

## Typography

Four families appear in the system: Copernicus for display and editorial moments, Geist for functional and interactive text, Inter for neutral body copy and navigation, and Applesystem as a fallback face in system-level contexts.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Copernicus | 3.875rem | 400 | 1.1 | -0.02em | Hero headlines, major section titles |
| section-display | Copernicus | 2.5rem | 400 | 1.15 | -0.02em | Section headings, FAQ titles, spec headers |
| body | Inter | 1rem | 400 | 1.5 | 0 | Paragraphs, descriptions, navigation |
| body-serif | Copernicus | 1.25rem | 500 | 1.18 | -0.02em | Editorial pull quotes, about page body |
| label | Geist | 1.25rem | 500 | 1.3 | -0.01em | Buttons, pricing, feature labels |
| caption | Geist | 0.8125rem | 400 | 1.45 | 0 | Metadata, fine print, secondary details |
| navigation | Inter | 1rem | 400 | 1.5 | 0 | Header links, footer links |

Copernicus is credited to Village Type Design LLC. Geist is designed by Basementstudio (Andrés Briganti, Mateo Zaragoza) and distributed by Basementstudio, Vercel, and collaborators. Applesystem appears as a system fallback at 14px in limited contexts. Verify licensing for these families before production use.

The type scale is deliberately limited. Display sizes use tight tracking for a refined, editorial feel, while body sizes remain open and readable. Weight variations are conservative—Copernicus stays at 400 or 500, Geist at 400 or 500, and Inter at 400 throughout.

## Layout

The layout system uses generous horizontal padding and clear section breaks to create breathing room around product imagery and dense information.

Main content areas on light sections use padding of 80px vertical and 200px horizontal on desktop, creating a centered, narrow reading experience. Dark hero sections expand to full width with 60px vertical padding and 200px horizontal padding. The navigation sits at a fixed height with 16px vertical padding and 40px horizontal padding.

Vertical rhythm is established through section spacing of 80px to 100px between major content blocks. Internal component gaps range from 8px for tight label-value pairs to 64px for major content divisions. The specification grid uses a two-column layout with 48px column gaps and 40px row gaps.

Content max-width is implicitly controlled through horizontal padding rather than explicit containers, allowing full-bleed imagery while keeping text readable. Images and media frames use border-radius of 16px to 20px, softening the rectilinear product photography.

## Visual language

The visual character is warm minimalism with editorial refinement. Photography is central—product shots appear in rounded frames against cream backgrounds, while lifestyle imagery fills dark hero sections with cinematic presence.

Rounded corners are systematic: 4px for small thumbnails, 16px for primary media, 20px for large feature cards, and 9999px for pill buttons. This creates a family of related shapes that feel organic without being arbitrary.

Shadows are subtle and warm. Interactive cards use layered inset shadows creating a pressed, tactile quality. The pricing gradient card uses a complex linear gradient shifting through ink-muted tones, suggesting metallic depth.

Iconography is reduced to simple geometric forms—circular plus/minus toggles for FAQs, small arrow indicators for links. No decorative illustration competes with the product photography.

The overall impression is of a carefully crafted physical object presented with the clarity of a premium editorial publication.

## Components

### Hero Section

- **Anatomy**: Full-width dark container, centered headline, supporting paragraph, primary CTA button, optional background image with gradient overlay
- **Surface**: Background color ink-deep (#0B1215), with optional linear-gradient overlay from transparent to rgba(0,0,0,0.55) at bottom
- **Typography**: hero-display in text-inverse, body in text-inverse at 1.25rem
- **Shape**: Full-bleed, no border-radius
- **Spacing**: 60px top padding, 56px bottom padding, 200px horizontal padding
- **Composition**: Centered text stack with 12px gap between headline and paragraph, 20px gap to CTA

### FAQ Accordion

- **Anatomy**: Section heading, list of question rows, each with question text and circular toggle icon
- **Surface**: Background color canvas-warm (#F7F2E8)
- **Typography**: section-display for "FAQs" heading, body at 1rem weight 500 for questions, body at 1rem weight 400 for answers
- **Shape**: Toggle icons are 24px circles with plus/minus symbols
- **Spacing**: 80px vertical padding, 200px horizontal padding, 32px gap between questions
- **Composition**: Heading left-aligned, questions full-width with toggle right-aligned
- **Variants**: Expanded state reveals answer text with 22.4px bottom padding; collapsed state shows only question row

### Media Frame

- **Anatomy**: Rounded container with video thumbnail or product image, optional play button overlay
- **Surface**: Background color canvas, image fills container
- **Shape**: Border-radius 16px to 20px, overflow hidden
- **Spacing**: Often centered with 164px horizontal margins on desktop
- **Composition**: 16:9 or similar aspect ratio, play button centered as 48px circle with triangle icon

### Specification Grid

- **Anatomy**: Section heading left, two-column grid of label-value pairs
- **Surface**: Background color canvas
- **Typography**: section-display for "Mark specifications" heading, label at 1rem weight 500 for category names, body at 1rem weight 400 for values in text-secondary
- **Spacing**: 80px vertical padding, 200px horizontal padding, 48px column gap, 40px row gap
- **Composition**: Heading spans left column top, grid fills remaining space

### Primary Button

- **Anatomy**: Pill-shaped button with text label, optional icon
- **Surface**: Background color ink-deep, text color text-inverse
- **Typography**: label at 1.25rem weight 500
- **Shape**: Border-radius 9999px, padding 12px 24px
- **Spacing**: Internal gap 8px for icon-text pairs

### Secondary Button

- **Anatomy**: Rectangular button with text label, optional icon
- **Surface**: Transparent background, 1px solid border in border-subtle or border-inverse
- **Typography**: label at 1.25rem weight 500
- **Shape**: Border-radius 12px, padding 16px 20px
- **Variants**: Default with border-subtle; inverse with border-inverse on dark backgrounds

### Pricing Card

- **Anatomy**: Rounded card with gradient background, product tier name, price display, feature list, CTA
- **Surface**: Linear gradient from #474745 through #292D2D to #0B1215
- **Typography**: label for tier name, section-display for price, body for features
- **Shape**: Border-radius 20px
- **Spacing**: 28.8px top padding, 24px bottom margin, internal 8px gaps

### Navigation Bar

- **Anatomy**: Fixed header with logo left, links center, CTA right
- **Surface**: Transparent on dark sections, background color canvas on light sections
- **Typography**: navigation at 1rem weight 400
- **Spacing**: 16px vertical padding, 40px horizontal padding, 12px gap between links
- **Composition**: Logo as 2-square mark, links evenly spaced, "Preorder" as text link or button

## Responsive behavior

The system is designed desktop-first with generous horizontal padding that should compress on smaller viewports. At tablet widths, the 200px horizontal padding should reduce to 40px, and two-column grids should stack to single column. The specification grid and FAQ accordion are natural single-column candidates.

At mobile widths, the hero headline should scale down to 2.5rem, maintaining the tight tracking. Navigation should collapse to a hamburger menu or simplify to logo and preorder link only. Media frames should become full-width with 16px margins.

The dark-to-light section transitions should remain, but vertical padding can compress to 48px to maintain proportion. Touch targets for FAQ toggles and buttons should maintain minimum 44px height.

## Practical implementation guidance

### Preserve
- The warm cream palette against near-black; this temperature contrast is central to the brand feel
- Copernicus for all display typography; the serif character provides essential editorial authority
- Generous horizontal padding and centered narrow content; the spaciousness signals premium positioning
- Rounded media frames; this softens technical product photography
- The two-mode section system (dark emotional, light informational)

### Avoid
- Saturated accent colors; the palette is intentionally monochrome with warm neutrals only
- Tight line-height on body text; the 1.5 ratio in Inter is essential for readability
- Sharp corners on interactive elements; the systematic rounding is part of the tactile quality
- Mixing display fonts; Copernicus and Geist have distinct roles that should not overlap

### Recommended Build Order
1. Establish the color tokens and section background system
2. Implement the typography hierarchy with all three families
3. Build the navigation and hero section with dark/light variants
4. Create the media frame component with consistent rounding
5. Implement FAQ accordion with toggle states
6. Build specification grid and pricing cards
7. Add gradient and shadow treatments to interactive elements

### Accessibility
- Ensure text-inverse on ink-deep backgrounds meets WCAG AAA contrast (the combination does)
- Provide visible focus states for keyboard navigation; the default browser outline may be insufficient on dark sections
- FAQ toggles should use button elements with aria-expanded states
- Video media frames need play buttons with accessible labels
- Reduce motion for users who prefer it; the gradient backgrounds are static but any future animation should respect this

## Scope note

This guide covers the landing, about, and preorder page surfaces visible in the supplied images. Mobile breakpoints, checkout flows, form validation states, and email capture confirmation are not represented. The 0.125rem spacing unit derives from the extracted scale; measurements are practical adaptation targets for reconstruction.
