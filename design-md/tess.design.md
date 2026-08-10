# How tess.design is designed

[Open the live Fudge conversation](https://design.withfudge.com/share/tess.design-design)

Last updated: 2026-08-10

## Captured pages

[![Hero section with dark painterly background, white headline 'Take ownership of AI', and a centered product UI card showing model training interface with sidebar navigation and](https://pin.fontofweb.com/7899?format=jpg)](https://design.withfudge.com/share/pin-7899)

[Hero section with dark painterly background, white headline 'Take ownership of AI', and a centered product UI card showing model training interface with sidebar navigation and](https://design.withfudge.com/share/pin-7899)

[![Light section with alternating text-and-image layout showing AI-generated landscape artwork and image editor tools panel with options like Remove Object and Face Swap](https://pin.fontofweb.com/7898?format=jpg)](https://design.withfudge.com/share/pin-7898)

[Light section with alternating text-and-image layout showing AI-generated landscape artwork and image editor tools panel with options like Remove Object and Face Swap](https://design.withfudge.com/share/pin-7898)

[![Light section with 'FOR CREATORS' label, large heading, and overlapping product screenshots showing gallery grid and image detail view with export controls](https://pin.fontofweb.com/7897?format=jpg)](https://design.withfudge.com/share/pin-7897)

[Light section with 'FOR CREATORS' label, large heading, and overlapping product screenshots showing gallery grid and image detail view with export controls](https://design.withfudge.com/share/pin-7897)

[![Dark artist spotlight section with large display name 'Ana Mumladze', testimonial quote, avatar, and stacked colorful illustration cards on black background](https://pin.fontofweb.com/7896?format=jpg)](https://design.withfudge.com/share/pin-7896)

[Dark artist spotlight section with large display name 'Ana Mumladze', testimonial quote, avatar, and stacked colorful illustration cards on black background](https://design.withfudge.com/share/pin-7896)

## Overview

Tess is an AI image generation platform built around a stark, high-contrast visual language that serves two distinct modes: immersive dark canvases for emotional impact and clean light surfaces for product clarity. The design system alternates between these modes to create rhythm across long-scrolling pages. Dark sections use rich, painterly background imagery with white typography that feels gallery-like and editorial. Light sections strip back to pure white with black text, letting layered product screenshots and AI-generated artwork become the visual focus.

The system is built on a single type family, Geist, with weight and size variation doing the heavy lifting across all hierarchy levels. There are no decorative borders, no gradients, and no shadow systems—just confident typography, generous whitespace, and carefully composed imagery. Product UI cards appear as floating surfaces within both dark and light contexts, creating a consistent material language that bridges the two modes. The overall impression is of a premium creative tool: restrained, confident, and letting the generated artwork speak loudest.

## Colors

The palette is intentionally minimal, built on a binary of absolute black and white with a single muted tone for structural elements.

| token | value | use |
|---|---|---|
| canvas | #000000 | Primary dark backgrounds, hero sections, artist spotlights, primary button fills |
| surface | #FFFFFF | Light section backgrounds, product card fills, content areas |
| ink | #000000 | Text on light surfaces, borders on dark surfaces |
| ink-inverse | #FFFFFF | Text on dark surfaces, button labels on black buttons |
| muted | #DADADA | Subtle borders, divider lines, inactive toggle states |
| border-subtle | #DADADA | Hairline borders on secondary buttons, card edges |

The dark mode is not a theme toggle but a sectional choice. Hero areas and artist testimonials sit on pure black or near-black photographic backgrounds, with all typography in white. Light sections invert this completely: white background, black text, black buttons. The muted gray appears only as a functional border color, never as a background. Product screenshots within the interface introduce their own color through AI-generated artwork, which becomes the de facto accent system—pinks, teals, oranges, and purples from generated images provide warmth against the stark monochrome frame.

## Typography

All text is set in Geist, a contemporary sans-serif designed by Basement Studio with distribution through Vercel. The family supports a wide weight range from Regular through Bold, with the system primarily using Regular (400), Medium (500), and Semibold (600) for interface elements, plus Bold (700) and ExtraBold (800) for display moments.

| token | family | size | weight | leading | tracking | use |
|---|---|---:|---:|---:|---:|---|
| hero-display | Geist | 4.5rem | 500 | 1 | -0.02em | Hero headlines, artist names in spotlights |
| section-display | Geist | 3.375rem | 500 | 1.1 | -0.02em | Section headings on light backgrounds |
| feature-heading | Geist | 2.625rem | 500 | 1.15 | -0.02em | Feature titles, product benefit statements |
| body | Geist | 1rem | 400 | 1.5 | 0 | Default paragraphs, descriptions, UI labels |
| body-large | Geist | 1.125rem | 400 | 1.5 | 0 | Lead paragraphs, expanded descriptions |
| label | Geist | 0.75rem | 600 | 1.5 | 0 | Eyebrow labels, category tags, small caps |
| navigation | Geist | 1rem | 400 | 1.5 | 0 | Primary nav, sidebar links |
| button-primary | Geist | 1.125rem | 600 | 1.5 | 0 | CTA buttons with arrow indicators |

Display sizes use tight negative tracking that gives headlines a compact, confident presence. The 72px hero size and 54px section size both share the same -1px letter-spacing treatment, creating visual consistency across scale. Body text remains neutral with normal tracking. The type scale is built on a 2px grid step, with sizes landing at 12px, 14px, 16px, 18px, 24px, 28px, 42px, 48px, 54px, 56px, and 72px depending on context.

Verify licensing for Geist through Vercel or Basement Studio before production use. Attribution: designed by Basement Studio Andrés Briganti Mateo Zaragoza; distributed by Basementstudio Vercel Andrés Briganti Guido Ferreyra Mateo Zaragoza.

## Layout

The page structure alternates between full-bleed dark sections and contained light sections, creating a breathing rhythm as users scroll. Dark sections typically span the full viewport width with centered content columns. Light sections use generous horizontal margins—approximately 152px on desktop—to frame content within a readable measure.

The grid is fundamentally asymmetric in feature sections. Text blocks align to the left with a maximum width of roughly 40-50% of the container, while product screenshots and artwork occupy the right side with intentional overlap and depth. Multiple UI cards stack with slight offsets, creating dimensional compositions that suggest a working interface rather than flat mockups.

Vertical spacing follows a clear hierarchy: section padding at 80px top and 40px bottom for light areas, with deeper 200px bottom padding for hero sections that need room to breathe above subsequent content. Content gaps within sections sit at 20-40px between text elements. Component-level spacing uses 10-15px for tight groupings like toggle controls and sidebar navigation items.

Product cards within the interface use a sidebar-plus-content layout: a narrow left rail with icon-label navigation pairs, and a wider right area for model details, training controls, or image galleries. This internal grid repeats across multiple screenshots, suggesting a consistent application shell.

## Visual language

The visual system relies on contrast and restraint rather than decoration. Three core principles define the language:

**Binary surface modes.** Every section commits fully to either black or white. There are no gray backgrounds, no tinted surfaces, no gradient overlays. This discipline makes the transition between sections feel intentional and dramatic.

**Layered product realism.** Screenshots of the Tess interface are never presented flat. They appear as floating cards with subtle shadows, often overlapping, sometimes with one card partially obscuring another. This treatment makes the product feel tangible and in-use rather than abstract.

**Generative artwork as color.** The only vibrant color in the system comes from AI-generated images within the product screenshots. Landscapes with pink skies, teal mountains, orange sunsets, and purple florals provide all the warmth and personality. The monochrome frame exists precisely to let this content shine.

Photography and illustration styles within the product appear varied—photorealistic landscapes, stylized illustrations, graphic portraits—unified only by their placement within the consistent Tess interface shell. Artist spotlights use circular avatar portraits and stacked rectangular artwork cards with rounded corners, creating a gallery-like presentation against the black background.

## Components

### Primary button
- **Anatomy:** Text label with right-pointing chevron arrow, no icon
- **Surface:** Black fill on light sections, white fill on dark sections
- **Typography:** `{typography.button-primary}` at 18px semibold
- **Shape:** 5px border radius, pill-like but not fully circular
- **Spacing:** 12px vertical padding, 40px left padding, 50px right padding (extra space for arrow)
- **Composition:** Centered text with visual weight toward the left; arrow sits in the right padding zone
- **Variants:** Dark variant uses white text on black; light variant uses black text on white with subtle border

### Secondary button
- **Anatomy:** Text label only, no arrow
- **Surface:** White fill with 1px `#DADADA` border
- **Typography:** `{typography.button-primary}` at 16px medium
- **Shape:** 5px border radius
- **Spacing:** 5px vertical, 12px horizontal (compact, tag-like)
- **Use:** Navigation items, filter tags, toggle-style controls

### Product card / UI shell
- **Anatomy:** Rounded rectangle containing sidebar navigation, header bar, and content area
- **Surface:** White fill, no border, no shadow in flat presentation; subtle depth when layered
- **Shape:** 5px border radius
- **Spacing:** 15px internal padding
- **Composition:** Left sidebar at ~20% width with stacked icon-label pairs; right content area with model name, description, and action controls
- **States:** Toggle controls show "On/Off" as paired buttons with active state in black fill and inactive in white with border

### Feature section
- **Anatomy:** Eyebrow label, large heading, descriptive paragraph, CTA button, and supporting imagery
- **Surface:** White background
- **Typography:** Eyebrow uses `{typography.label}` in uppercase; heading uses `{typography.section-display}`; body uses `{typography.body-large}`
- **Composition:** Left-aligned text block at ~45% width; right side contains overlapping product screenshots with 20-40px vertical offsets between cards
- **Spacing:** 80px top padding, 40px bottom padding, 152px horizontal margins

### Artist spotlight
- **Anatomy:** Large display name, circular avatar, role description, blockquote testimonial, CTA pair, and stacked artwork cards
- **Surface:** Black background
- **Typography:** Name uses `{typography.hero-display}` at 72px; quote uses `{typography.body-large}` in white; role uses `{typography.body}`
- **Shape:** Avatar is circular (50% radius); artwork cards use 5px radius
- **Composition:** Left column for text content; right column for overlapping artwork cards with dramatic scale variation (large landscape card behind, smaller portrait card overlapping top-right)
- **Spacing:** Generous vertical padding; quote has left border accent

## Responsive behavior

The system is documented from desktop viewport widths. The asymmetric text-image layouts with 152px side margins suggest a container that will need significant adaptation for narrower viewports. At tablet widths, the two-column feature sections should stack vertically with text above imagery, maintaining the 80px section padding but reducing horizontal margins to 40px. The product card overlays will likely need to become a single centered card or a horizontal scroll sequence.

The artist spotlight's large 72px display type should scale down to 48px or 36px on smaller screens to maintain line breaks. The stacked artwork cards may need to become a single featured image with thumbnail strip below.

Navigation elements visible in product screenshots suggest a responsive sidebar that collapses to a top bar or hamburger menu on mobile. The toggle controls and form elements within product cards should maintain their touch targets at minimum 44px height.

## Practical implementation guidance

### Preserve
- The strict binary of black and white sections—never introduce intermediate gray backgrounds
- The negative letter-spacing on all display sizes; it is essential to the compact, confident tone
- The layered, offset presentation of product screenshots; flat single images lose the dimensional quality
- The generous horizontal margins on light sections; the breathing room is part of the premium feel
- The consistent 5px border radius across cards, buttons, and interface elements

### Avoid
- Adding drop shadows to product cards in light sections; the depth should come from layering and scale, not shadow
- Using the muted `#DADADA` for text; it is strictly for borders and inactive states
- Centering text in feature sections; the left alignment creates editorial asymmetry
- Introducing additional font families; Geist carries the entire hierarchy
- Decorative gradients or background patterns that compete with the artwork

### Recommended build order
1. Establish the color tokens and type scale with Geist loaded at all required weights
2. Build the section container system with alternating dark/light modes and correct padding values
3. Implement the primary button with arrow indicator and precise padding asymmetry
4. Create the product card shell with sidebar navigation pattern
5. Compose the feature section layout with text-left, imagery-right asymmetry
6. Add the artist spotlight with large display type and overlapping artwork cards
7. Refine spacing and offsets between layered cards

### Accessibility
- Ensure white text on dark photographic backgrounds maintains 4.5:1 contrast; the pure black sections guarantee this, but hero images with lighter areas may need text-shadow or scrim treatment
- The small 12px label text should be used only for non-essential categorization, not critical information
- Arrow indicators on buttons should have aria-label or visible text equivalents for screen readers
- Toggle controls within product cards need clear focus states and aria-pressed attributes
- When reducing motion, preserve the layout but disable any scroll-triggered card entrance animations

## Scope note

This guide covers the marketing page surface of tess.design with its alternating dark and light sections, product feature presentations, and artist spotlight modules. It does not include the full application interface beyond its appearance in marketing screenshots, mobile breakpoint specifics, form validation states, or any motion and animation behavior. The spacing and sizing values derive from the documented interface measurements and type scale.
